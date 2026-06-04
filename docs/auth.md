# Authentication and Authorization

- - -

## Overview

`Phalcon\Auth` provides authentication (who the user is) and authorization (what the user may do) behind a single facade, `Phalcon\Auth\Manager`.

The layer is composed of four building blocks:

- **Guards** answer "is there an authenticated user, and who is it?". Two ship in the box: `session` (cookie/session backed, with remember-me and HTTP Basic) and `token` (bearer/API token).
- **Adapters** are user providers - they load user records from a backing store. Three ship in the box: `memory`, `model` (Phalcon ORM), and `stream` (JSON file).
- **Access gates** answer "is this action allowed?". Two ship in the box: `auth` (requires a logged-in user) and `guest` (requires no logged-in user).
- **`AuthUser`** is the authenticated user value object returned by guards.

Guards resolve the framework services they need (request, cookies, session manager) from a container, so they wire against the real application singletons. The container can be the modern `Phalcon\Container\Container` or the classic `Phalcon\Di\Di`.

---

## Bootstrapping with ManagerFactory

`Phalcon\Auth\ManagerFactory` builds a fully wired `Manager` from a configuration tree. It needs a password hasher (`Phalcon\Encryption\Security`) and a container that provides the framework services the guards consume - either a `Phalcon\Container\Container` or a `Phalcon\Di\DiInterface`. The built-in `Phalcon\Container\Provider\Web` registers those services on a `Phalcon\Container\Container`.

```php
<?php

use Phalcon\Auth\Access\Auth;
use Phalcon\Auth\Access\Guest;
use Phalcon\Auth\ManagerFactory;
use Phalcon\Container\ContainerFactory;
use Phalcon\Container\Provider\Web;
use Phalcon\Encryption\Security;

$container = (new ContainerFactory())
    ->addProvider(new Web())
    ->newContainer();

/**
 * Alternative 
 *
$container = new Phalcon\Di\FactoryDefault();
*/

$factory = new ManagerFactory(new Security(), $container);

$manager = $factory->load([
    'guards' => [
        'web' => [
            'type'    => 'session',
            'default' => true,
            'adapter' => [
                'name'    => 'model',
                'options' => ['model' => Users::class],
            ],
        ],
        'api' => [
            'type'    => 'token',
            'adapter' => [
                'name'    => 'model',
                'options' => ['model' => Users::class],
            ],
            'options' => [
                'inputKey'   => 'api_token',
                'storageKey' => 'api_token',
            ],
        ],
    ],
    'access' => [
        'auth'  => Auth::class,
        'guest' => Guest::class,
    ],
]);
```

`load()` accepts an array or a `Phalcon\Config\ConfigInterface`. Each guard entry declares its `type` (`session` or `token`), an `adapter` (`name` plus adapter `options`), and optional guard `options`. Exactly one guard should be marked `default`.

---

## The Container

Every entry point that takes a container - `ManagerFactory::__construct()`, the guards' `fromOptions()` factories, and the adapter, guard, and access locators - accepts either of two container types:

- `Phalcon\Container\Container`, the modern service container (it implements `Phalcon\Contracts\Container\Service\Collection`).
- `Phalcon\Di\DiInterface`, the classic dependency-injection container (for example `Phalcon\Di\FactoryDefault`).

Passing any other type throws a `\TypeError`.

The layer resolves services by their interface ID, through the container's `has()` and `get()` methods. Whichever container is used, these services must be bound under the following IDs:

| Service ID                               | Required by              |
|------------------------------------------|--------------------------|
| `Phalcon\Http\RequestInterface`          | session and token guards |
| `Phalcon\Http\Response\CookiesInterface` | session guard            |
| `Phalcon\Session\ManagerInterface`       | session guard            |

A service that is not bound throws `Phalcon\Auth\Exception`. `Phalcon\Container\Provider\Web` registers these IDs on a `Phalcon\Container\Container`. A classic `Phalcon\Di\FactoryDefault` does not: it registers `request` and `cookies` under short names and ships no session manager. Bind the three interface IDs explicitly before passing it to the factory.

```php
<?php

use Phalcon\Auth\ManagerFactory;
use Phalcon\Di\FactoryDefault;
use Phalcon\Encryption\Security;
use Phalcon\Http\Request;
use Phalcon\Http\Response\Cookies;
use Phalcon\Session\Adapter\Stream;
use Phalcon\Session\Manager as SessionManager;

$di = new FactoryDefault();

// Bind the services the guards resolve, under their interface IDs
$di->setShared('Phalcon\Http\RequestInterface', Request::class);
$di->setShared('Phalcon\Http\Response\CookiesInterface', Cookies::class);
$di->setShared('Phalcon\Session\ManagerInterface', function () {
    $session = new SessionManager();
    $session->setAdapter(new Stream(['savePath' => '/var/app/cache/session']));

    return $session;
});

$factory = new ManagerFactory(new Security(), $di);
```

A token-only setup needs only `Phalcon\Http\RequestInterface` bound.

---

## The Manager

The `Manager` is the entry point for both authentication and authorization. Authentication calls delegate to the active guard; authorization calls drive the active access gate.

```php
<?php

// Authenticate against the default guard
if ($manager->attempt(['email' => 'jane@example.com', 'password' => 's3cret'])) {
    $user = $manager->user();
    echo $user->getAuthIdentifier();
}

$manager->check();   // bool - is someone authenticated on the default guard
$manager->id();      // int|string|null - the authenticated identifier

// Reach a specific guard by name
$manager->guard('api')->validate(['api_token' => $token]);

$manager->logout();
```

| Method                                                     | Returns                    | Purpose                                                            |
|------------------------------------------------------------|----------------------------|--------------------------------------------------------------------|
| `guard(?string $name = null)`                              | `Guard`                    | The named guard, or the default guard when `$name` is `null`       |
| `attempt(array $credentials = [], bool $remember = false)` | `bool`                     | Authenticate against the default guard (requires a stateful guard) |
| `validate(array $credentials = [])`                        | `bool`                     | Verify credentials without logging in                              |
| `check()`                                                  | `bool`                     | Whether a user is authenticated                                    |
| `user()`                                                   | `AuthUser` or `null`       | The authenticated user                                             |
| `id()`                                                     | `int`, `string`, or `null` | The authenticated identifier                                       |
| `logout()`                                                 | `void`                     | Log out of the default guard (requires a stateful guard)           |
| `access(string $name)`                                     | `self`                     | Activate an access gate for the current request                    |
| `only(string ...$actions)`                                 | `self`                     | Restrict the active gate to the listed actions                     |
| `except(string ...$actions)`                               | `self`                     | Apply the active gate to every action except those listed          |

`attempt()` and `logout()` throw `Phalcon\Auth\Exception` when the default guard is not stateful. The `token` guard is stateless; use `validate()` with it.

---

## Guards

### Session Guard

`Phalcon\Auth\Guard\Session` keeps the authenticated identifier in the session manager and supports remember-me cookies and HTTP Basic. It implements `GuardStateful` and `BasicAuth`.

```php
<?php

$session = $manager->guard('web');

// Verify credentials, start a session, set a remember-me cookie
$session->attempt(
    ['email' => 'jane@example.com', 'password' => 's3cret'],
    true
);

// Log a known user in by identifier
$session->loginById(42);

// One-off authentication that does not persist a session
$session->once(['email' => 'jane@example.com', 'password' => 's3cret']);

// HTTP Basic authentication against the 'email' field
$session->basic('email');

$session->logout();
```

Remember-me requires an adapter that implements `Phalcon\Contracts\Auth\Adapter\RememberAdapter` (the `model` adapter does). Passing `true` to `attempt()`/`login()` with an adapter that does not implement it throws `Phalcon\Auth\Exceptions\DoesNotImplement`.

The session key and remember-cookie name are configurable through the guard `options`:

| Option         | Default    | Purpose                                                                  |
|----------------|------------|--------------------------------------------------------------------------|
| `name`         | `auth`     | Session key holding the authenticated identifier                         |
| `rememberName` | `remember` | Remember-me cookie name                                                  |
| `suffix`       | none       | Derives `auth_<suffix>` / `remember_<suffix>` names for multi-guard apps |

### Token Guard

`Phalcon\Auth\Guard\Token` authenticates API requests by a token. It reads the token from the request input key, or from an `Authorization: Bearer <token>` header. It is stateless - it has no `login()`/`logout()`.

```php
<?php

$api = $manager->guard('api');

// Resolves the user from the request token (input key or Bearer header)
$user = $api->user();

// Verify a token explicitly
$api->validate(['api_token' => 'the-token-value']);
```

| Option | Purpose |
|---|---|
| `inputKey` | Request field that carries the token (for example `api_token`) |
| `storageKey` | Column/field the adapter matches the token against |

Both options are required and must be non-empty; an empty value throws `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`.

---

## User Providers (Adapters)

Adapters load user rows and verify passwords. All three share password verification via `Phalcon\Encryption\Security::checkHash()` against the user's stored hash.

### Model Adapter

`Phalcon\Auth\Adapter\Model` loads users through the Phalcon ORM. The model class must implement `Phalcon\Contracts\Auth\AuthUser`; for remember-me it must also implement `Phalcon\Contracts\Auth\AuthRemember`.

```php
'adapter' => [
    'name'    => 'model',
    'options' => [
        'model'    => Users::class,
        'idColumn' => 'id',        // optional, defaults to 'id'
    ],
],
```

### Memory Adapter

`Phalcon\Auth\Adapter\Memory` serves an in-memory list of user rows. It is useful for tests and small read-only user sets.

```php
'adapter' => [
    'name'    => 'memory',
    'options' => [
        'users' => [
            ['id' => 1, 'email' => 'jane@example.com', 'password' => '<hashed>'],
            ['id' => 2, 'email' => 'john@example.com', 'password' => '<hashed>'],
        ],
    ],
],
```

### Stream Adapter

`Phalcon\Auth\Adapter\Stream` reads users from a JSON file containing an array of user records.

```php
'adapter' => [
    'name'    => 'stream',
    'options' => [
        'file' => '/var/app/config/users.json',
    ],
],
```

```json
[
    {"id": 1, "email": "jane@example.com", "password": "<hashed>"},
    {"id": 2, "email": "john@example.com", "password": "<hashed>"}
]
```

The `stream` adapter throws `Phalcon\Auth\Exceptions\FileDoesNotExist`, `FileCannotRead`, `FileNotValidJson`, or `FileDoesNotContainJson` when the file is missing, unreadable, or not a JSON array.

---

## The Authenticated User

When a `model` adapter is not configured, array-backed adapters (`memory`, `stream`) return a `Phalcon\Auth\AuthUser` value object. Its data must contain a scalar `id` key (`int` or `string`); otherwise the constructor throws `Phalcon\Auth\Exceptions\DataMustContainIdKey`.

```php
<?php

$user = $manager->user();

$user->getAuthIdentifier();  // int|string - the 'id'
$user->getAuthPassword();    // string - the stored hash, or '' when absent
$user->toArray();            // the underlying user row
```

A `model` adapter returns your model instance directly, which implements the same `Phalcon\Contracts\Auth\AuthUser` contract.

---

## Authorization (Access Gates)

An access gate decides whether the current action is allowed. The built-in gates read guard state:

- `Phalcon\Auth\Access\Auth` allows the action when a user is authenticated.
- `Phalcon\Auth\Access\Guest` allows the action when no user is authenticated.

Activate a gate on the manager and scope it to specific actions with `only()` or `except()`:

```php
<?php

// Require authentication for 'dashboard' and 'profile' only
$manager->access('auth')->only('dashboard', 'profile');

// Apply the gate to every action except 'logout'
$manager->access('auth')->except('logout');
```

Gates are enforced per dispatch by a listener. `Phalcon\Auth\Mvc\AuthDispatcherListener` guards MVC dispatch; `Phalcon\Auth\Cli\AuthDispatcherListener` guards CLI tasks. Attach the listener to the dispatcher events manager:

```php
<?php

use Phalcon\Auth\Mvc\AuthDispatcherListener;
use Phalcon\Events\Manager as EventsManager;

$eventsManager = new EventsManager();
$eventsManager->attach('dispatch', new AuthDispatcherListener($manager));

$dispatcher->setEventsManager($eventsManager);
```

The listener is a no-op when no gate is active. When a gate denies the action, the listener forwards to the gate's `redirectTo()` target if one is provided; otherwise it throws `Phalcon\Auth\Exceptions\AccessDenied`. The default `redirectTo()` returns `null` - override a gate to supply a forward target.

```php
<?php

use Phalcon\Auth\Access\Auth;

class RedirectToLogin extends Auth
{
    public function redirectTo(): array | null
    {
        return ['controller' => 'session', 'action' => 'login'];
    }
}
```

---

## Events

The session guard fires events around login and logout on its events manager. Attach an events manager to the guard to observe them.

```php
<?php

use Phalcon\Events\Manager as EventsManager;

$eventsManager = new EventsManager();
$eventsManager->attach('auth', function ($event, $guard) {
    // $event->getType(): beforeLogin, afterLogin, beforeLogout, afterLogout
});

$manager->guard('web')->setEventsManager($eventsManager);
```

| Event               | Fired                     |
|---------------------|---------------------------|
| `auth:beforeLogin`  | Before a login is applied |
| `auth:afterLogin`   | After a successful login  |
| `auth:beforeLogout` | Before logout             |
| `auth:afterLogout`  | After logout              |

---

## Exceptions

Every exception thrown by the layer extends `Phalcon\Auth\Exception`. Granular subclasses live under `Phalcon\Auth\Exceptions`. Catch the parent to handle any failure, or a subclass to react to a single cause.

```php
<?php

use Phalcon\Auth\Exception;
use Phalcon\Auth\Exceptions\AccessDenied;

try {
    $manager->access('auth')->only('admin');
    // ... dispatch ...
} catch (AccessDenied $ex) {
    // authorization denied for an action with no redirect target
} catch (Exception $ex) {
    // any other auth failure
}
```

| Exception                     | Thrown when                                                                |
|-------------------------------|----------------------------------------------------------------------------|
| `AccessDenied`                | An access gate denies an action and no redirect target is set              |
| `ConfigRequiresNonEmptyValue` | A guard/adapter config receives a required empty value                     |
| `DataMustContainIdKey`        | An `AuthUser` is built from data with no scalar `id`                       |
| `DoesNotImplement`            | Remember-me is used with an adapter/model that lacks the required contract |
| `FileDoesNotExist`            | The `stream` adapter file is missing                                       |
| `FileCannotRead`              | The `stream` adapter file cannot be read                                   |
| `FileNotValidJson`            | The `stream` adapter file is not valid JSON                                |
| `FileDoesNotContainJson`      | The `stream` adapter file does not decode to an array                      |

---

[manager]: api/phalcon_auth.md#authmanager
[manager-factory]: api/phalcon_auth.md#authmanagerfactory
[auth-user]: api/phalcon_auth.md#authauthuser
[session-guard]: api/phalcon_auth.md#authguardsession
[token-guard]: api/phalcon_auth.md#authguardtoken
[container]: container.md
[support-locator]: support-locator.md
[security]: encryption-security.md
