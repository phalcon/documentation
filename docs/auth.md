# Auth
- - -

## Overview

[Phalcon\Auth\Manager][manager] is a small façade that ties together three concerns:

- **Authentication** — figuring out *who* the user is. Handled by **guards** (e.g. session-backed login, token-based API auth) that delegate user lookup to **adapters** (Memory, Stream, Model).
- **Authorization** — deciding what the current user is allowed to do. Handled by **access gates** (`Auth`, `Guest`, or your own).
- **Configuration** — every adapter and guard takes a typed, immutable configuration object instead of a loose array, so misconfiguration fails fast and IDEs/static analyzers see real types.

The component is intentionally small. The `Manager` keeps a registry of guards and access gates, exposes typed convenience methods (`attempt`, `check`, `id`, `user`, `validate`, `logout`) that delegate to the default guard, and provides an `addAccessList()` / `access()` flow for authorization checks. Every public method on the implementation is also declared on [Phalcon\Contracts\Auth\Manager][manager-contract], so application code can type against the contract and reach the entire facade.

```php
<?php

use Phalcon\Auth\Access\AccessLocator;
use Phalcon\Auth\Adapter\Config\MemoryAdapterConfig;
use Phalcon\Auth\Adapter\Memory;
use Phalcon\Auth\Guard\Session as SessionGuard;
use Phalcon\Auth\Manager;
use Phalcon\Container\Container;
use Phalcon\Encryption\Security;

$container = new Container();
$security  = new Security();

$adapter = new Memory(
    $security,
    new MemoryAdapterConfig([
        ['id' => 1, 'email' => 'alice@example.com', 'password' => $security->hash('secret')],
    ])
);

$guard = new SessionGuard(
    $adapter,
    $request,    // Phalcon\Http\RequestInterface
    $cookies,    // Phalcon\Http\Response\CookiesInterface
    $session     // Phalcon\Session\ManagerInterface
);

$manager = new Manager(new AccessLocator($container));
$manager->addGuard('web', $guard, true);

if ($manager->attempt(['email' => 'alice@example.com', 'password' => 'secret'])) {
    // user is logged in
}
```

## Architecture

The component splits into four namespaces, each with a clear contract.

| Namespace | Role |
|-----------|------|
| `Phalcon\Auth\Adapter` | Look up users from a backing store (in-memory list, JSON file, model). |
| `Phalcon\Auth\Guard` | Drive an authentication flow (session, bearer token). |
| `Phalcon\Auth\Access` | Authorize the current user for a controller action. |
| `Phalcon\Auth` | Compose the above behind `Manager`. |

Every adapter, guard, and access gate has a matching `*Config` value object (where it makes sense) and a `*Locator` that resolves names (`'memory'`, `'session'`, `'auth'`) to concrete classes via the DI container.

```text
+--------------------+
|    Auth\Manager    |
+--------------------+
   |              |
   v              v
+--------+   +-----------------+
| Guard  |   | AccessLocator   |
| (e.g.  |   | -> Auth, Guest  |
| Session|   |    custom...    |
| /Token)|   +-----------------+
+--------+
   |
   v
+--------+
| Adapter| -> Memory / Stream / Model
+--------+
   |
   v
+----------------+
|  AdapterConfig | (typed; one per adapter)
+----------------+
```

## Adapters

An adapter answers two questions:

- `retrieveByCredentials(array $credentials)` — find a user by an arbitrary set of fields.
- `retrieveById(int|string $id)` — find a user by primary identifier.

A third method, `validateCredentials(AuthUser $user, array $credentials)`, lives on the abstract base and verifies the password against the stored hash. The `password` key in the credentials array is *ignored* during lookup (so passing it alongside an email won't filter by hashed password).

All adapters take a [Phalcon\Encryption\Security][security] instance for password hashing plus a typed config object.

### Memory

Use [Phalcon\Auth\Adapter\Memory][adapter-memory] for tests and small read-only user lists. The user rows are stored in process memory and indexed by id for `O(1)` `retrieveById`.

```php
<?php

use Phalcon\Auth\Adapter\Config\MemoryAdapterConfig;
use Phalcon\Auth\Adapter\Memory;
use Phalcon\Encryption\Security;

$security = new Security();
$adapter  = new Memory(
    $security,
    new MemoryAdapterConfig(
        users: [
            [
                'id'       => 1,
                'email'    => 'alice@example.com',
                'password' => $security->hash('secret'),
            ],
        ],
        model: null   // optional model class for hydration
    )
);

$user = $adapter->retrieveByCredentials(['email' => 'alice@example.com']);
```

If `model` is set in the config, the adapter hydrates rows into instances of that class (calling `assign($row)` if the method exists) instead of returning a generic [Phalcon\Auth\AuthUser][authuser]. This lets your application user model carry domain methods on the result.

### Stream

Use [Phalcon\Auth\Adapter\Stream][adapter-stream] when the user list lives in a JSON file on disk. The file is re-read on every call — wrap with caching if hot.

```php
<?php

use Phalcon\Auth\Adapter\Config\StreamAdapterConfig;
use Phalcon\Auth\Adapter\Stream;
use Phalcon\Encryption\Security;

$adapter = new Stream(
    new Security(),
    new StreamAdapterConfig(
        file: __DIR__ . '/users.json',
        model: null
    )
);
```

`users.json` must be a JSON array of user records:

```json
[
    {"id": 1, "email": "alice@example.com", "password": "$2y$..."},
    {"id": 2, "email": "bob@example.com",   "password": "$2y$..."}
]
```

Stream throws [Phalcon\Auth\Exception][exception] on:

- file does not exist;
- file cannot be read;
- file is not valid JSON;
- file is valid JSON but not a top-level array.

The disk-side helpers (`phpFileExists`, `phpFileGetContents`) come from the `Phalcon\Traits\Php\FileTrait`, which means a test subclass can override them to fake the disk without touching the real filesystem.

### Model

Use [Phalcon\Auth\Adapter\Model][adapter-model] when the user table is a Phalcon model. Lookups go through `findFirst` with bound parameters built from the credentials array.

```php
<?php

use App\Models\User;
use Phalcon\Auth\Adapter\Config\ModelAdapterConfig;
use Phalcon\Auth\Adapter\Model;
use Phalcon\Encryption\Security;

$adapter = new Model(
    new Security(),
    new ModelAdapterConfig(User::class)
);

$user = $adapter->retrieveByCredentials(['email' => 'alice@example.com']);
```

`ModelAdapterConfig` requires the model class name; constructing one with an empty string throws `Phalcon\Auth\Exception` immediately. This catches "I forgot to set the model" at boot time instead of at first auth attempt.

The Model adapter also implements [Phalcon\Contracts\Auth\Adapter\RememberAdapter][remember-adapter], which means the Session guard's "remember me" cookie path works against it as long as your model class implements [Phalcon\Contracts\Auth\AuthRemember][auth-remember] (i.e. `createRememberToken()` and `getRememberToken()`).

### AdapterLocator

Adapters can also be resolved by short name from the DI container via [Phalcon\Auth\Adapter\AdapterLocator][adapter-locator]:

| Name | Class |
|------|-------|
| `memory` | `Phalcon\Auth\Adapter\Memory` |
| `model` | `Phalcon\Auth\Adapter\Model` |
| `stream` | `Phalcon\Auth\Adapter\Stream` |

```php
<?php

use Phalcon\Auth\Adapter\AdapterLocator;

$locator = new AdapterLocator($container);
$adapter = $locator->newInstance('memory');

// Custom adapter registered at construction time
$locator = new AdapterLocator($container, ['ldap' => MyLdapAdapter::class]);
$adapter = $locator->newInstance('ldap');
```

`register($name, $class)` validates that the class implements [Phalcon\Contracts\Auth\Adapter\Adapter][adapter-contract] before adding it; an attempt to register an unrelated class throws `Phalcon\Auth\Exception`.

## Guards

A guard implements [Phalcon\Contracts\Auth\Guard\Guard][guard-contract] and represents one authentication mechanism. The component ships with two guards.

### Session

[Phalcon\Auth\Guard\Session][guard-session] is the typical browser-facing guard: stateful, session-backed, with optional remember-me cookies.

```php
<?php

use Phalcon\Auth\Adapter\Config\MemoryAdapterConfig;
use Phalcon\Auth\Adapter\Memory;
use Phalcon\Auth\Guard\Config\SessionGuardConfig;
use Phalcon\Auth\Guard\Session as SessionGuard;
use Phalcon\Encryption\Security;

$security = new Security();
$adapter  = new Memory($security, new MemoryAdapterConfig([
    ['id' => 1, 'email' => 'alice@example.com', 'password' => $security->hash('secret')],
]));

$guard = new SessionGuard(
    adapter: $adapter,
    request: $request,           // Phalcon\Http\RequestInterface
    cookies: $cookies,           // Phalcon\Http\Response\CookiesInterface
    session: $sessionManager,    // Phalcon\Session\ManagerInterface
    config:  new SessionGuardConfig() // optional; defaults are fine today
);

if ($guard->attempt(['email' => 'alice@example.com', 'password' => 'secret'])) {
    // session now holds the user id under $guard->getName()
}

// Subsequent requests:
$user = $guard->user();
if ($guard->check()) {
    echo 'Hello ' . $user->getAuthIdentifier();
}

$guard->logout();
```

Common operations:

| Method | Description |
|--------|-------------|
| `attempt(array, bool)` | Validate credentials, log in on success, optional remember-me. |
| `once(array)` | Validate without persisting to session. |
| `login(AuthUser, bool)` | Log a known user in directly (no credential check). |
| `loginById(int\|string, bool)` | Resolve a user by id and log them in. |
| `logout()` | Clear session + remember cookie. |
| `basic(string, array)` | Drive HTTP Basic auth via the request's `getBasicAuth()`. |
| `onceBasic(...)` | Same, without persisting. |
| `check()` / `guest()` / `id()` | State queries. |
| `viaRemember()` | True if the active session was restored from a remember cookie. |

Calling `login($user, remember: true)` requires the configured adapter to implement [RememberAdapter][remember-adapter]; the guard throws `Phalcon\Auth\Exception` otherwise.

### Token

[Phalcon\Auth\Guard\Token][guard-token] is the API-style guard: stateless, reads a bearer token from the query string or `Authorization` header, looks the user up by storage key.

```php
<?php

use Phalcon\Auth\Adapter\Config\MemoryAdapterConfig;
use Phalcon\Auth\Adapter\Memory;
use Phalcon\Auth\Guard\Config\TokenGuardConfig;
use Phalcon\Auth\Guard\Token as TokenGuard;
use Phalcon\Encryption\Security;

$security = new Security();
$adapter  = new Memory($security, new MemoryAdapterConfig([
    [
        'id'        => 1,
        'email'     => 'alice@example.com',
        'password'  => 'unused',
        'api_token' => 'abcdef123',
    ],
]));

$guard = new TokenGuard(
    $adapter,
    $request,
    new TokenGuardConfig(
        inputKey:   'api_token',  // request key (?api_token=... or Bearer <token>)
        storageKey: 'api_token'   // adapter row key
    )
);

$user = $guard->user();   // resolved from query/header on first call, cached after
$ok   = $guard->validate(['api_token' => 'abcdef123']);
```

`TokenGuardConfig` requires both `inputKey` and `storageKey`; passing an empty string for either throws `Phalcon\Auth\Exception` at construction time.

`getTokenForRequest()` looks for a non-empty token in this order:

1. The request's query/POST under `inputKey`.
2. The `Authorization: Bearer <token>` header (with the leading `Bearer ` stripped).

If neither is present, it returns `null` and `user()` returns `null`.

### GuardLocator

Like adapters, guards have a [Phalcon\Auth\Guard\GuardLocator][guard-locator]:

| Name | Class |
|------|-------|
| `session` | `Phalcon\Auth\Guard\Session` |
| `token` | `Phalcon\Auth\Guard\Token` |

```php
<?php

use Phalcon\Auth\Guard\GuardLocator;

$locator = new GuardLocator($container);
$guard   = $locator->newInstance('session');
```

The container must be wired so that the locator can autowire the guard's dependencies (adapter, request, cookies, session manager, the relevant config). See [Container autowiring](#container-autowiring) below.

## Manager

[Phalcon\Auth\Manager][manager] is the single entry point your application code talks to.

```php
<?php

use Phalcon\Auth\Access\AccessLocator;
use Phalcon\Auth\Manager;
use Phalcon\Container\Container;

$manager = new Manager(new AccessLocator(new Container()));
$manager->addGuard('web', $sessionGuard, isDefault: true);
$manager->addGuard('api', $tokenGuard);

// Default guard is used when no name is passed:
$manager->attempt(['email' => 'a@b', 'password' => 'p']);
$manager->check();
$manager->user();
$manager->logout();

// Other guards by name:
$manager->guard('api')->user();
```

The convenience methods above (`attempt`, `check`, `id`, `user`, `validate`, `logout`) are declared on both [Phalcon\Auth\Manager][manager] and the [Phalcon\Contracts\Auth\Manager][manager-contract] interface — application code can hold either type and call them. `attempt()` and `logout()` route through `$this->guard()` and require the default guard to implement [Phalcon\Contracts\Auth\Guard\GuardStateful][guard-stateful]; if not, they throw `Phalcon\Auth\Exception`.

For guard-specific behavior that lives outside the contract — e.g. `loginById()`, `onceBasic()`, `viaRemember()` on the Session guard — call through `$manager->guard()` and narrow with `instanceof` against the relevant capability interface (`GuardStateful`, [BasicAuth][basic-auth], etc.):

```php
<?php

use Phalcon\Auth\Guard\Session as SessionGuard;

$guard = $manager->guard();
if ($guard instanceof SessionGuard) {
    $guard->loginById(1, remember: true);
}
```

### Access lists and gates

An access gate decides whether the current user may execute a given action. Gates implement [Phalcon\Contracts\Auth\Access\Access][access-contract]; the component ships with two:

- [Phalcon\Auth\Access\Auth][access-auth] — allows when the default guard reports `check() === true`.
- [Phalcon\Auth\Access\Guest][access-guest] — allows when the default guard reports `check() === false`.

Gates are looked up by name via [Phalcon\Auth\Access\AccessLocator][access-locator] (`'auth'`, `'guest'`, or any custom name you register). `Manager::addAccessList()` is the single registration entry point — it forwards each entry directly to the underlying locator; `Manager::getAccessList()` reads back the locator's full registry.

```php
<?php

use Phalcon\Auth\Access\Auth;
use Phalcon\Auth\Access\Guest;

$manager
    ->addAccessList([
        'auth'  => Auth::class,
        'guest' => Guest::class,
        'admin' => App\Access\Admin::class,
    ])
    ->access('auth')          // activate the 'auth' gate
    ->only('dashboard', 'profile') // gate applies only to these actions
;

if ($manager->getAccess()?->isAllowed('dashboard')) {
    // proceed
}
```

`only(...)` and `except(...)` can scope a gate to a subset of actions; both throw `Phalcon\Auth\Exception` if no gate has been activated yet. Registering a class that doesn't implement `Access` throws on `addAccessList()` immediately — failures surface at boot, not at the first action.

`access($name)` constructs the gate directly with `new $class($this)`, which guarantees the gate's `protected Manager $manager` is the same instance you called `access()` on — gates can rely on `$this->manager->guard()->check()` without any container plumbing.

### Custom access gates

Extend [Phalcon\Auth\Access\AbstractAccess][access-abstract], which gives you the manager reference, the `only`/`except` action lists, and the `isAllowed` plumbing. Implement `allowedIf()` (and optionally `redirectTo()`):

```php
<?php

namespace App\Access;

use Phalcon\Auth\Access\AbstractAccess;

final class Admin extends AbstractAccess
{
    public function allowedIf(): bool
    {
        $user = $this->manager->user();

        return $user !== null && ($user->toArray()['role'] ?? null) === 'admin';
    }

    public function redirectTo(): ?array
    {
        return [
            'controller' => 'session',
            'action'     => 'login',
        ];
    }
}
```

Then register: `$manager->addAccessList(['admin' => App\Access\Admin::class])`.

### Dispatcher listeners

Two listeners enforce the active gate during dispatch — one for MVC, one for CLI. They share a single enforcement algorithm via [Phalcon\Auth\AbstractAuthDispatcherListener][abstract-listener]; each concrete listener only contributes the dispatcher-typed action lookup and (MVC only) a forward callback for `Access::redirectTo()`:

- [Phalcon\Auth\Mvc\AuthDispatcherListener][mvc-listener] — attaches to the MVC dispatcher's `beforeExecuteRoute` and either forwards to the gate's `redirectTo()` target or throws `Phalcon\Auth\Exception` on a deny.
- [Phalcon\Auth\Cli\AuthDispatcherListener][cli-listener] — same for CLI tasks; throws on deny (no redirect concept on the CLI).

```php
<?php

use Phalcon\Auth\Mvc\AuthDispatcherListener;

$eventsManager->attach('dispatch:beforeExecuteRoute', new AuthDispatcherListener($manager));
```

The listener no-ops if no gate has been activated yet, so it's safe to attach unconditionally.

## ManagerFactory

[Phalcon\Auth\ManagerFactory][manager-factory] builds a fully wired `Manager` from a single config tree. Useful when you keep your auth wiring in `app.php` or a YAML/PHP config and want one call to materialize the whole thing.

The factory's required constructor arguments are a [Phalcon\Encryption\Security][security] for password hashing and a container ([Phalcon\Container\Service\Collection][collection] — implemented by [Phalcon\Container\Container][container]). Three optional locator parameters — `?AdapterLocator`, `?GuardLocator`, `?AccessLocator` — let callers pre-register custom adapters, guards, or access gates before the factory wires anything; when omitted, the factory constructs default locators internally. Framework-shared services (`RequestInterface`, `CookiesInterface`, `SessionManagerInterface`) are pulled from the container so guards wire against the real application singletons rather than separately constructed copies.

```php
<?php

use Phalcon\Auth\ManagerFactory;
use Phalcon\Encryption\Security;

$factory = new ManagerFactory(new Security(), $container);
$manager = $factory->load([
    'guards' => [
        'web' => [
            'type'    => 'session',
            'default' => true,
            'adapter' => [
                'name'    => 'memory',
                'options' => [
                    'users' => [
                        ['id' => 1, 'email' => 'alice@example.com', 'password' => $security->hash('secret')],
                    ],
                ],
            ],
            'options' => [],
        ],
        'api' => [
            'type'    => 'token',
            'adapter' => [
                'name'    => 'memory',
                'options' => ['users' => [/* ... */]],
            ],
            'options' => [
                'inputKey'   => 'api_token',
                'storageKey' => 'api_token',
            ],
        ],
    ],
    'access' => [
        'auth'  => Phalcon\Auth\Access\Auth::class,
        'guest' => Phalcon\Auth\Access\Guest::class,
    ],
]);
```

### Registering custom adapters and guards

When the application needs an adapter or guard outside the built-in catalog, build the relevant locator, call `register()`, and pass the locator to `ManagerFactory`:

```php
<?php

use Phalcon\Auth\Adapter\AdapterLocator;
use Phalcon\Auth\Guard\GuardLocator;
use Phalcon\Auth\ManagerFactory;
use Phalcon\Encryption\Security;

$adapters = (new AdapterLocator($container))
    ->register('redis', App\Auth\Adapter\Redis::class);

$guards = (new GuardLocator($container))
    ->register('jwt', App\Auth\Guard\Jwt::class);

$factory = new ManagerFactory(
    new Security(),
    $container,
    adapterLocator: $adapters,
    guardLocator:   $guards,
);

$manager = $factory->load([
    'guards' => [
        'web' => [
            'type'    => 'jwt',
            'default' => true,
            'adapter' => ['name' => 'redis', 'options' => [/* ... */]],
            'options' => [/* ... */],
        ],
    ],
]);
```

`AdapterLocator::register()` and `GuardLocator::register()` both validate that the supplied class implements the matching contract ([Adapter][adapter-contract] / [Guard][guard-contract]) and throw `Phalcon\Auth\Exception` otherwise — wrong type fails at registration, not at `load()`. Custom classes wired this way must declare a `static fromOptions()` method matching the contract: adapters receive `(Security $hasher, array $options)`, guards receive `(Adapter $adapter, Collection $container, array $options)`.

The same pattern works for the access locator if you want the factory's `access` map to include custom gates without going through `Manager::addAccessList()` after the fact.

### Container responsibilities

The factory expects the container to expose the following services. The default `Web` provider already binds them; the `Cli` provider binds whatever is meaningful for the CLI surface (typically `RequestInterface` is not used).

| Service | Required by |
|---------|-------------|
| [Phalcon\Http\RequestInterface][request] | `session` and `token` guards |
| [Phalcon\Http\Response\CookiesInterface][cookies] | `session` guard |
| [Phalcon\Session\ManagerInterface][session-manager] | `session` guard |

If a required service is not bound, the factory throws [Phalcon\Auth\Exception][exception] at `load()` time, naming the missing service id — failures surface at boot, not on first request. Same behavior for missing required adapter options (`file` for stream, `model` for model; `users` is optional and defaults to `[]` for memory) and missing required guard options (`inputKey` / `storageKey` for token).

`load()` also accepts a [Phalcon\Config\ConfigInterface][config] in place of the raw array — handy when your config tree comes from `Phalcon\Config\Config`.

## Container autowiring

Every adapter and guard takes its dependencies via constructor injection, so the new [Phalcon\Container\Container][container] can resolve the entire auth tree from a single `$container->get(Token::class)` call — provided the right bindings are in place.

The default `Phalcon\Container\Provider\Web` and `Phalcon\Container\Provider\Cli` providers register `AccessLocator`. The remaining auth-specific bindings need a thin closure registration:

```php
<?php

use Phalcon\Auth\Adapter\Config\MemoryAdapterConfig;
use Phalcon\Auth\Adapter\Memory;
use Phalcon\Auth\Guard\Config\TokenGuardConfig;
use Phalcon\Container\Service\Collection;
use Phalcon\Contracts\Auth\Adapter\Adapter;

// Adapter chosen at boot:
$services->bind(Adapter::class, Memory::class);

// Memory's config: provide the row list once.
$services->set(MemoryAdapterConfig::class, static function (Collection $c): MemoryAdapterConfig {
    return new MemoryAdapterConfig([
        ['id' => 1, 'email' => 'alice@example.com', 'password' => /* hashed */ '...'],
    ]);
});

// Token guard's config (only if you use the token guard):
$services->set(TokenGuardConfig::class, static function (Collection $c): TokenGuardConfig {
    return new TokenGuardConfig('api_token', 'api_token');
});
```

After this, `$container->get(Phalcon\Auth\Guard\Token::class)` autowires Adapter, RequestInterface (already bound by the Web provider), and TokenGuardConfig — no manual `new` required.

!!! info "NOTE"

    `MemoryAdapterConfig` and `SessionGuardConfig` have all-default constructor arguments, so they autowire to a sensible empty default if you don't bind them. `StreamAdapterConfig`, `ModelAdapterConfig`, and `TokenGuardConfig` have required scalar arguments that *cannot* come from autowiring; you must provide a closure binding for them or instantiate them yourself.

### Why the `AccessLocator` binding uses a closure

`AbstractLocator` takes a `Phalcon\Container\Service\Collection|Phalcon\Di\DiInterface` as its first constructor argument — a union type that the resolver does not autowire. The closure short-circuits this: the registered factory receives the container as `$c` and threads it through.

```php
$services->set(AccessLocator::class, static function (Collection $c): AccessLocator {
    return new AccessLocator($c);
});
```

The `Web` and `Cli` providers ship with this binding already.

## Custom adapters and guards

### Custom adapter

Extend [Phalcon\Auth\Adapter\AbstractAdapter][adapter-abstract] and implement the [Adapter][adapter-contract] contract — including the static `fromOptions(Security $hasher, array $options): static` method, which `ManagerFactory` calls when wiring from a config tree. If your data source is an iterable list of rows, [Phalcon\Auth\Adapter\AbstractArrayAdapter][adapter-abstract-array] gives you `retrieveByCredentials` / `retrieveById` / `hydrate` for free; you only implement `loadUsers()`. Use the helpers in [Phalcon\Auth\Internal\Options][internal-options] (`requireString`, `arrayOption`, `stringOrNull`, `resolveService`) to parse the options map consistently.

```php
<?php

namespace App\Auth\Adapter;

use App\Auth\Adapter\Config\LdapAdapterConfig;
use Phalcon\Auth\Adapter\AbstractAdapter;
use Phalcon\Contracts\Auth\AuthUser;
use Phalcon\Contracts\Encryption\Security\Security;

/**
 * @extends AbstractAdapter<LdapAdapterConfig>
 */
final class Ldap extends AbstractAdapter
{
    public function __construct(Security $hasher, LdapAdapterConfig $config)
    {
        parent::__construct($hasher, $config);
    }

    public function retrieveByCredentials(array $credentials): ?AuthUser
    {
        // Bind to LDAP using $this->config->getDsn()
    }

    public function retrieveById(int | string $id): ?AuthUser
    {
        // ...
    }
}
```

The matching `LdapAdapterConfig` should extend [Phalcon\Auth\Adapter\Config\AbstractAdapterConfig][adapter-config-abstract] and implement [Phalcon\Contracts\Auth\Adapter\AdapterConfig][adapter-config-contract]. The abstract base already implements the contract, so just extend it and add your own getters.

### Custom guard

Extend [Phalcon\Auth\Guard\AbstractGuard][guard-abstract] and implement the [Guard][guard-contract] contract — including the static `fromOptions(Adapter $adapter, Collection $container, array $options): static` method, which `ManagerFactory` calls to materialize the guard from config. The abstract base provides `getAdapter`, `getConfig`, `check`, `guest`, `hasUser`, `id`, `setAdapter`, `setUser`, plus `hasValidCredentials()` for password verification. If the guard owns its login lifecycle (write-to-session, log-out, etc.) implement [Phalcon\Contracts\Auth\Guard\GuardStateful][guard-stateful] so `Manager::attempt()` and `Manager::logout()` recognize it.

```php
<?php

namespace App\Auth\Guard;

use App\Auth\Guard\Config\ApiKeyGuardConfig;
use Phalcon\Auth\Guard\AbstractGuard;
use Phalcon\Contracts\Auth\Adapter\Adapter;
use Phalcon\Contracts\Auth\AuthUser;

/**
 * @extends AbstractGuard<ApiKeyGuardConfig>
 */
final class ApiKey extends AbstractGuard
{
    public function __construct(Adapter $adapter, ApiKeyGuardConfig $config)
    {
        parent::__construct($adapter, $config);
    }

    public function user(): ?AuthUser
    {
        // resolve from $this->config->getHeaderName(), call $this->adapter
    }

    public function validate(array $credentials = []): bool
    {
        // ...
    }
}
```

Register either through the locator (`$locator->register('apikey', ApiKey::class)`) or directly via `$manager->addGuard('apikey', $instance)`.

## Static analysis

Every adapter and guard carries `@template` annotations (`@extends AbstractAdapter<MemoryAdapterConfig>`, `@extends AbstractGuard<TokenGuardConfig>`) so PHPStan sees `$this->config` as the concrete config type inside the subclass. The contracts (`Adapter`, `RememberAdapter`, `Guard`, `GuardStateful`, `BasicAuth`, `Access`, `AdapterConfig`, `GuardConfig`) all live under `Phalcon\Contracts\Auth\*` so user code can depend on the contract namespace without pulling in implementation classes.

## Testing

The full test suite uses [test fakes][testing] rather than mocks:

- `FakeRequest`, `FakeCookies`, `FakeSessionManager` — drive Session guard flows.
- `FakeAuthUserModel` — Phalcon-Model stand-in with a static `$rows` fixture and an array-form `findFirst()`. Used by Model adapter tests.
- `FakeRememberAdapter` — Memory adapter that also implements `RememberAdapter`, with an adapter-level token store so tokens survive the per-call user hydration.
- `FakeStreamAdapter` — overrides the `FileTrait` helpers (`phpFileExists`, `phpFileGetContents`) so the real `Stream::loadUsers` runs without touching disk.

The whole `src/Auth` namespace ships with 100% line and method coverage; if you add a feature, add the tests next to the existing patterns and keep the bar.

[collection]: di.md
[abstract-listener]: api/phalcon_auth.md#auth-abstractauthdispatcherlistener
[adapter-abstract]: api/phalcon_auth.md#auth-adapter-abstractadapter
[adapter-abstract-array]: api/phalcon_auth.md#auth-adapter-abstractarrayadapter
[adapter-config-abstract]: api/phalcon_auth.md#auth-adapter-config-abstractadapterconfig
[adapter-config-contract]: api/phalcon_auth.md#contracts-auth-adapter-adapterconfig
[adapter-contract]: api/phalcon_auth.md#contracts-auth-adapter-adapter
[adapter-locator]: api/phalcon_auth.md#auth-adapter-adapterlocator
[adapter-memory]: api/phalcon_auth.md#auth-adapter-memory
[adapter-model]: api/phalcon_auth.md#auth-adapter-model
[adapter-stream]: api/phalcon_auth.md#auth-adapter-stream
[access-abstract]: api/phalcon_auth.md#auth-access-abstractaccess
[access-auth]: api/phalcon_auth.md#auth-access-auth
[access-contract]: api/phalcon_auth.md#contracts-auth-access-access
[access-guest]: api/phalcon_auth.md#auth-access-guest
[access-locator]: api/phalcon_auth.md#auth-access-accesslocator
[auth-remember]: api/phalcon_auth.md#contracts-auth-authremember
[authuser]: api/phalcon_auth.md#auth-authuser
[basic-auth]: api/phalcon_auth.md#contracts-auth-guard-basicauth
[cli-listener]: api/phalcon_auth.md#auth-cli-authdispatcherlistener
[config]: config.md
[container]: di.md
[cookies]: response.md#cookies
[exception]: api/phalcon_auth.md#auth-exception
[guard-abstract]: api/phalcon_auth.md#auth-guard-abstractguard
[guard-contract]: api/phalcon_auth.md#contracts-auth-guard-guard
[guard-locator]: api/phalcon_auth.md#auth-guard-guardlocator
[guard-session]: api/phalcon_auth.md#auth-guard-session
[guard-stateful]: api/phalcon_auth.md#contracts-auth-guard-guardstateful
[guard-token]: api/phalcon_auth.md#auth-guard-token
[internal-options]: api/phalcon_auth.md#auth-internal-options
[manager]: api/phalcon_auth.md#auth-manager
[manager-contract]: api/phalcon_auth.md#contracts-auth-manager
[manager-factory]: api/phalcon_auth.md#auth-managerfactory
[mvc-listener]: api/phalcon_auth.md#auth-mvc-authdispatcherlistener
[remember-adapter]: api/phalcon_auth.md#contracts-auth-adapter-rememberadapter
[request]: request.md
[security]: encryption-security.md
[session-manager]: session.md
[testing]: unit-testing.md