---
title: "Phalcon Auth"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Auth

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Auth\AbstractAuthDispatcherListener

Abstract

Shared enforcement algorithm for the Cli, Mvc and Micro auth listeners.
The subclass provides the action name and context from its event source,
the action-kind label used in the access-denied exception, and (Mvc only)
a forward handler for Access::redirectTo().

Enforcement is fail-open: when the manager has no active access
(Manager::getAccess() === null) every dispatch is allowed. A policy
activated via Manager::access() persists across forwards and nested
dispatches in the same request until it is replaced.

- **`Phalcon\Auth\AbstractAuthDispatcherListener`**
  - [`Phalcon\Auth\Cli\AuthDispatcherListener`](#authcliauthdispatcherlistener)
  - [`Phalcon\Auth\Micro\AuthMicroListener`](#authmicroauthmicrolistener)
  - [`Phalcon\Auth\Mvc\AuthDispatcherListener`](#authmvcauthdispatcherlistener)

`Phalcon\Auth\Exceptions\AccessDenied` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Manager`

### Method Summary

- `public __construct(Manager $manager)`

- `protected enforce(string $actionName, array $context = [], mixed $forwardHandler = null): bool` — Runs the access check for the given action name. Returns true when

- `protected getActionType(): string` — Returns the kind label used by AccessDenied (e.g. 'task', 'action',

### Properties

- `protected Manager $manager`

### Methods

<h4 id="authabstractauthdispatcherlistener-__construct"><code>__construct()</code></h4>

```php
public function __construct( Manager $manager );
```

<h4 id="authabstractauthdispatcherlistener-enforce"><code>enforce()</code></h4>

```php
protected function enforce(
    string $actionName,
    array $context = [],
    mixed $forwardHandler = null
): bool;
```

Runs the access check for the given action name. Returns true when
the dispatch should proceed, false when a forward was issued, and
throws when access is denied without a redirect target.

The guard is fetched only when an access is active, so the no-op
path works without a default guard.

<h4 id="authabstractauthdispatcherlistener-getactiontype"><code>getActionType()</code></h4>

```php
abstract protected function getActionType(): string;
```

Returns the kind label used by AccessDenied (e.g. 'task', 'action',
'route').


## Auth\Access\AbstractAccess

Abstract

- **`Phalcon\Auth\Access\AbstractAccess`** - implements [`Phalcon\Contracts\Auth\Access\Access`](/5.20/api/phalcon_contracts/#contractsauthaccessaccess)
  - [`Phalcon\Auth\Access\Acl`](#authaccessacl)
  - [`Phalcon\Auth\Access\Auth`](#authaccessauth)
  - [`Phalcon\Auth\Access\Guest`](#authaccessguest)

`Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Guard\Guard`

### Method Summary

- `public getExceptActions(): array`

- `public getOnlyActions(): array`

- `public isAllowed(Guard $guard, string $actionName, array $context = []): bool`

- `public redirectTo(): array|null`

- `public setExceptActions(array $exceptActions = []): void`

- `public setOnlyActions(array $onlyActions = []): void`

- `protected allowedIf(Guard $guard): bool` — Whether the gate's base condition holds for the given identity.

### Properties

- `protected list<string> $exceptActions = []`

- `protected list<string> $onlyActions = []`

### Methods

<h4 id="authaccessabstractaccess-getexceptactions"><code>getExceptActions()</code></h4>

```php
public function getExceptActions(): array;
```

<h4 id="authaccessabstractaccess-getonlyactions"><code>getOnlyActions()</code></h4>

```php
public function getOnlyActions(): array;
```

<h4 id="authaccessabstractaccess-isallowed"><code>isAllowed()</code></h4>

```php
public function isAllowed(
    Guard $guard,
    string $actionName,
    array $context = []
): bool;
```

<h4 id="authaccessabstractaccess-redirectto"><code>redirectTo()</code></h4>

```php
public function redirectTo(): array|null;
```

<h4 id="authaccessabstractaccess-setexceptactions"><code>setExceptActions()</code></h4>

```php
public function setExceptActions( array $exceptActions = [] ): void;
```

<h4 id="authaccessabstractaccess-setonlyactions"><code>setOnlyActions()</code></h4>

```php
public function setOnlyActions( array $onlyActions = [] ): void;
```

<h4 id="authaccessabstractaccess-allowedif"><code>allowedIf()</code></h4>

```php
abstract protected function allowedIf( Guard $guard ): bool;
```

Whether the gate's base condition holds for the given identity.


## Auth\Access\AccessLocator

Class

Service locator for Phalcon\Auth access gates. Utilizes the container to
obtain the service. For the Phalcon\Container\Container one can use
autowiring. For the Phalcon\Di\Di, one needs to register the gates in it
to be used here (the binary gates also resolve unregistered through Di's
class builder).

@extends AbstractLocator&lt;Access>

- [`Phalcon\Support\AbstractLocator`](/5.20/api/phalcon_support/#supportabstractlocator)
  - **`Phalcon\Auth\Access\AccessLocator`**

`Phalcon\Auth\Exception` · `Phalcon\Auth\Internal\ContainerResolver` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Support\AbstractLocator`

### Method Summary

- `public newInstance(string $name): object` — Resolve a fresh gate instance from the container.

- `protected getExceptionClass(): string`

- `protected getInterfaceClass(): string`

- `protected getServices(): array`

### Methods

<h4 id="authaccessaccesslocator-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name ): object;
```

Resolve a fresh gate instance from the container.

Gates carry per-activation state (the only/except action filters), so
resolution must yield a fresh instance: new() on the Container
bypasses the instance cache; on the legacy Di, get() builds
unregistered classes and non-shared services fresh, and a shared
service is rebuilt from its definition.

<h4 id="authaccessaccesslocator-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="authaccessaccesslocator-getinterfaceclass"><code>getInterfaceClass()</code></h4>

```php
protected function getInterfaceClass(): string;
```

<h4 id="authaccessaccesslocator-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```


## Auth\Access\Acl

Class

ACL-backed access gate. Checks the authenticated user's role against a
Phalcon\Acl adapter: the ACL component is taken from the 'handler' context
key (prefixed with 'module' and the module separator when present) and the
ACL access is the action name. The 'params' context key is passed through
to the ACL adapter for callable rules.

Filter semantics differ from the binary gates: except = bypass the gate
for the listed actions; only = the gate applies to the listed actions
exclusively (everything else is allowed).

Role resolution: no user resolves to the configured guest role; a user
implementing Phalcon\Acl\RoleAwareInterface supplies its role name; any
other user is rejected with an exception.

- [`Phalcon\Auth\Access\AbstractAccess`](#authaccessabstractaccess)
  - **`Phalcon\Auth\Access\Acl`**

`Phalcon\Acl\Adapter\AdapterInterface` · `Phalcon\Acl\RoleAwareInterface` · `Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\DoesNotImplement` · `Phalcon\Auth\Exceptions\MissingHandlerContext` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\Guard\Guard`

### Method Summary

- `public __construct(AdapterInterface $acl, array $options = [])`

- `public isAllowed(Guard $guard, string $actionName, array $context = []): bool`

- `protected allowedIf(Guard $guard): bool` — Unused: this gate overrides isAllowed() in full. Fail closed to

- `protected resolveRole(Guard $guard): string`

### Properties

- `protected AdapterInterface $acl`

- `protected string $guestRole = "guest"`

- `protected string $moduleSeparator = ":"`

### Methods

<h4 id="authaccessacl-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    AdapterInterface $acl,
    array $options = []
);
```

<h4 id="authaccessacl-isallowed"><code>isAllowed()</code></h4>

```php
public function isAllowed(
    Guard $guard,
    string $actionName,
    array $context = []
): bool;
```

<h4 id="authaccessacl-allowedif"><code>allowedIf()</code></h4>

```php
protected function allowedIf( Guard $guard ): bool;
```

Unused: this gate overrides isAllowed() in full. Fail closed to
satisfy the abstract.

<h4 id="authaccessacl-resolverole"><code>resolveRole()</code></h4>

```php
protected function resolveRole( Guard $guard ): string;
```


## Auth\Access\Auth

Class

- [`Phalcon\Auth\Access\AbstractAccess`](#authaccessabstractaccess)
  - **`Phalcon\Auth\Access\Auth`**

`Phalcon\Contracts\Auth\Guard\Guard`

### Method Summary

- `protected allowedIf(Guard $guard): bool`

### Methods

<h4 id="authaccessauth-allowedif"><code>allowedIf()</code></h4>

```php
protected function allowedIf( Guard $guard ): bool;
```


## Auth\Access\Guest

Class

- [`Phalcon\Auth\Access\AbstractAccess`](#authaccessabstractaccess)
  - **`Phalcon\Auth\Access\Guest`**

`Phalcon\Contracts\Auth\Guard\Guard`

### Method Summary

- `protected allowedIf(Guard $guard): bool`

### Methods

<h4 id="authaccessguest-allowedif"><code>allowedIf()</code></h4>

```php
protected function allowedIf( Guard $guard ): bool;
```


## Auth\Adapter\AbstractAdapter

Abstract

@template TConfig of AdapterConfig

- **`Phalcon\Auth\Adapter\AbstractAdapter`** - implements [`Phalcon\Contracts\Auth\Adapter\Adapter`](/5.20/api/phalcon_contracts/#contractsauthadapteradapter)
  - [`Phalcon\Auth\Adapter\AbstractArrayAdapter`](#authadapterabstractarrayadapter)
  - [`Phalcon\Auth\Adapter\Model`](#authadaptermodel)

`Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\Adapter\AdapterConfig` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Encryption\Security\Security`

### Method Summary

- `public __construct(Security $hasher, AdapterConfig $config)`

- `public getConfig(): AdapterConfig` — Returns the adapter configuration object.

- `public getModel(): string|null` — Returns the model class name, if configured.

- `public validateCredentials(AuthUser $user, array $credentials): bool` — Validates the supplied plaintext password against the user's stored hash.

- `protected burnHash(): void` — Runs a throwaway password verification against a fixed dummy hash so the

### Constants

- `const string DUMMY_HASH = "$2y$10$YMmGMSXz.5U3bjjJ2qx45uElzUrlaBiS8L70VaVnmsKYFJVcam8gW"` — Dummy bcrypt hash used to equalize timing on the user-not-found path so
  a failed lookup costs the same as a real password check (prevents
  login-timing user enumeration).

### Properties

- `protected AdapterConfig $config`

- `protected Security $hasher`

### Methods

<h4 id="authadapterabstractadapter-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Security $hasher,
    AdapterConfig $config
);
```

<h4 id="authadapterabstractadapter-getconfig"><code>getConfig()</code></h4>

```php
public function getConfig(): AdapterConfig;
```

Returns the adapter configuration object.

<h4 id="authadapterabstractadapter-getmodel"><code>getModel()</code></h4>

```php
public function getModel(): string|null;
```

Returns the model class name, if configured.

<h4 id="authadapterabstractadapter-validatecredentials"><code>validateCredentials()</code></h4>

```php
public function validateCredentials(
    AuthUser $user,
    array $credentials
): bool;
```

Validates the supplied plaintext password against the user's stored hash.
Concrete adapters share this implementation; if your data source needs
a different verification strategy, override it.

<h4 id="authadapterabstractadapter-burnhash"><code>burnHash()</code></h4>

```php
protected function burnHash(): void;
```

Runs a throwaway password verification against a fixed dummy hash so the
user-not-found path performs the same hash work as a found path. Call it
when a credential lookup misses to keep response time constant.


## Auth\Adapter\AbstractArrayAdapter

Abstract

Common base for adapters whose user records come from an in-memory list
(Memory and Stream). Subclasses provide the row source via loadUsers();
everything else - credentials matching, hydration, the empty-credentials
guard, and a default linear retrieveById - is shared here.

@template TConfig of AdapterConfig
@extends AbstractAdapter&lt;TConfig>

- [`Phalcon\Auth\Adapter\AbstractAdapter`](#authadapterabstractadapter)
  - **`Phalcon\Auth\Adapter\AbstractArrayAdapter`**
    - [`Phalcon\Auth\Adapter\Memory`](#authadaptermemory)
    - [`Phalcon\Auth\Adapter\Stream`](#authadapterstream)

`Phalcon\Auth\AuthUser` · `Phalcon\Auth\Exceptions\DoesNotImplement` · `Phalcon\Contracts\Auth\Adapter\AdapterConfig` · `Phalcon\Contracts\Auth\AuthUser`

### Method Summary

- `public retrieveByCredentials(array $credentials): AuthUserContract|null` — Walks the user list and returns the first row whose non-'password'

- `public retrieveById(mixed $id): AuthUserContract|null` — Default linear-scan implementation. Memory overrides this for an O(1)

- `protected hasIdentifyingField(array $credentials): bool` — Tests whether a credentials payload carries at least one identifying

- `protected hydrate(array $row): AuthUserContract` — Hydrates a raw user row into either the configured model class or a

- `protected loadUsers(): array` — Returns the source list of user rows. Concrete subclasses decide

- `protected matchesRow(array $row, array $credentials): bool` — Per-key match of a row against credentials, skipping 'password'. Values

### Methods

<h4 id="authadapterabstractarrayadapter-retrievebycredentials"><code>retrieveByCredentials()</code></h4>

```php
public function retrieveByCredentials( array $credentials ): AuthUserContract|null;
```

Walks the user list and returns the first row whose non-'password'
keys all match strictly. Returns null when no row matches or when
$credentials carries no identifying field at all (only 'password',
or empty) - protects callers from the silent "first row wins" footgun.

<h4 id="authadapterabstractarrayadapter-retrievebyid"><code>retrieveById()</code></h4>

```php
public function retrieveById( mixed $id ): AuthUserContract|null;
```

Default linear-scan implementation. Memory overrides this for an O(1)
id-keyed lookup; Stream uses this as-is.

<h4 id="authadapterabstractarrayadapter-hasidentifyingfield"><code>hasIdentifyingField()</code></h4>

```php
protected function hasIdentifyingField( array $credentials ): bool;
```

Tests whether a credentials payload carries at least one identifying
field (i.e. anything other than 'password'). An empty payload - or a
payload that only contains 'password' - is treated as "no lookup".

<h4 id="authadapterabstractarrayadapter-hydrate"><code>hydrate()</code></h4>

```php
protected function hydrate( array $row ): AuthUserContract;
```

Hydrates a raw user row into either the configured model class or a
Phalcon\Auth\AuthUser value object.

<h4 id="authadapterabstractarrayadapter-loadusers"><code>loadUsers()</code></h4>

```php
abstract protected function loadUsers(): array;
```

Returns the source list of user rows. Concrete subclasses decide
where they come from (config array, JSON file, etc.).

<h4 id="authadapterabstractarrayadapter-matchesrow"><code>matchesRow()</code></h4>

```php
protected function matchesRow(
    array $row,
    array $credentials
): bool;
```

Per-key match of a row against credentials, skipping 'password'. Values
are compared as strings so typed row values (e.g. int id, bool active)
match the string input that arrives from an HTTP request.


## Auth\Adapter\AdapterLocator

Class

Service locator for Phalcon\Auth adapters. Utilizes the container to
obtain the service. For the Phalcon\Container\Container one can use
autowiring. For the Phalcon\Di\Di, one needs to register the gates in it
to be used here.

@extends AbstractLocator&lt;Adapter>

- [`Phalcon\Support\AbstractLocator`](/5.20/api/phalcon_support/#supportabstractlocator)
  - **`Phalcon\Auth\Adapter\AdapterLocator`**

`Phalcon\Auth\Exception` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Support\AbstractLocator`

### Method Summary

- `protected getExceptionClass(): string`

- `protected getInterfaceClass(): string`

- `protected getServices(): array`

### Methods

<h4 id="authadapteradapterlocator-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="authadapteradapterlocator-getinterfaceclass"><code>getInterfaceClass()</code></h4>

```php
protected function getInterfaceClass(): string;
```

<h4 id="authadapteradapterlocator-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```


## Auth\Adapter\Config\AbstractAdapterConfig

Abstract

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Auth\Adapter\Config\Traits\ModelConfigTrait directly instead of
extending this.

- **`Phalcon\Auth\Adapter\Config\AbstractAdapterConfig`** - implements [`Phalcon\Contracts\Auth\Adapter\AdapterConfig`](/5.20/api/phalcon_contracts/#contractsauthadapteradapterconfig)
  - [`Phalcon\Auth\Adapter\Config\MemoryAdapterConfig`](#authadapterconfigmemoryadapterconfig)
  - [`Phalcon\Auth\Adapter\Config\ModelAdapterConfig`](#authadapterconfigmodeladapterconfig)
  - [`Phalcon\Auth\Adapter\Config\StreamAdapterConfig`](#authadapterconfigstreamadapterconfig)

`Phalcon\Auth\Adapter\Config\Traits\ModelConfigTrait` · `Phalcon\Contracts\Auth\Adapter\AdapterConfig`

### Method Summary

- `public __construct(string|null $model = null)`

### Methods

<h4 id="authadapterconfigabstractadapterconfig-__construct"><code>__construct()</code></h4>

```php
public function __construct( string|null $model = null );
```


## Auth\Adapter\Config\MemoryAdapterConfig

Class

- [`Phalcon\Auth\Adapter\Config\AbstractAdapterConfig`](#authadapterconfigabstractadapterconfig)
  - **`Phalcon\Auth\Adapter\Config\MemoryAdapterConfig`**

### Method Summary

- `public __construct(array $users = [], string|null $model = null)`

- `public getUsers(): array`

### Properties

- `protected array $users = []`

### Methods

<h4 id="authadapterconfigmemoryadapterconfig-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    array $users = [],
    string|null $model = null
);
```

<h4 id="authadapterconfigmemoryadapterconfig-getusers"><code>getUsers()</code></h4>

```php
public function getUsers(): array;
```


## Auth\Adapter\Config\ModelAdapterConfig

Class

- [`Phalcon\Auth\Adapter\Config\AbstractAdapterConfig`](#authadapterconfigabstractadapterconfig)
  - **`Phalcon\Auth\Adapter\Config\ModelAdapterConfig`**

`Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`

### Method Summary

- `public __construct(string $model, string $idColumn = "id")`

- `public getIdColumn(): string`

- `public getModel(): string`

### Properties

- `protected string $idColumn = "id"`

### Methods

<h4 id="authadapterconfigmodeladapterconfig-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $model,
    string $idColumn = "id"
);
```

<h4 id="authadapterconfigmodeladapterconfig-getidcolumn"><code>getIdColumn()</code></h4>

```php
public function getIdColumn(): string;
```

<h4 id="authadapterconfigmodeladapterconfig-getmodel"><code>getModel()</code></h4>

```php
public function getModel(): string;
```


## Auth\Adapter\Config\StreamAdapterConfig

Class

- [`Phalcon\Auth\Adapter\Config\AbstractAdapterConfig`](#authadapterconfigabstractadapterconfig)
  - **`Phalcon\Auth\Adapter\Config\StreamAdapterConfig`**

`Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`

### Method Summary

- `public __construct(string $file, string|null $model = null)`

- `public getFile(): string`

### Properties

- `protected string $file`

### Methods

<h4 id="authadapterconfigstreamadapterconfig-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $file,
    string|null $model = null
);
```

<h4 id="authadapterconfigstreamadapterconfig-getfile"><code>getFile()</code></h4>

```php
public function getFile(): string;
```


## Auth\Adapter\Config\Traits\ModelConfigTrait

Trait

Shared model-name state and accessor for auth adapter configurations.

- **`Phalcon\Auth\Adapter\Config\Traits\ModelConfigTrait`**

[`Phalcon\Auth\Adapter\Config\AbstractAdapterConfig`](#authadapterconfigabstractadapterconfig)

### Method Summary

- `public getModel(): string|null`

### Properties

- `protected string|null $model = null`

### Methods

<h4 id="authadapterconfigtraitsmodelconfigtrait-getmodel"><code>getModel()</code></h4>

```php
public function getModel(): string|null;
```


## Auth\Adapter\Memory

Class

In-memory adapter - useful for tests and small read-only user lists.

@extends AbstractArrayAdapter&lt;MemoryAdapterConfig>

- [`Phalcon\Auth\Adapter\AbstractAdapter`](#authadapterabstractadapter)
  - [`Phalcon\Auth\Adapter\AbstractArrayAdapter`](#authadapterabstractarrayadapter)
    - **`Phalcon\Auth\Adapter\Memory`**

`Phalcon\Auth\Adapter\Config\MemoryAdapterConfig` · `Phalcon\Auth\Internal\Options` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Encryption\Security\Security`

### Method Summary

- `public __construct(Security $hasher, MemoryAdapterConfig $config)`

- `public fromOptions(Security $hasher, array $options): static`

- `public retrieveById(mixed $id): AuthUser|null` — Overridden for O(1) lookup via the id index built in the constructor.

- `protected loadUsers(): array`

### Methods

<h4 id="authadaptermemory-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Security $hasher,
    MemoryAdapterConfig $config
);
```

<h4 id="authadaptermemory-fromoptions"><code>fromOptions()</code></h4>

```php
public static function fromOptions(
    Security $hasher,
    array $options
): static;
```

<h4 id="authadaptermemory-retrievebyid"><code>retrieveById()</code></h4>

```php
public function retrieveById( mixed $id ): AuthUser|null;
```

Overridden for O(1) lookup via the id index built in the constructor.

<h4 id="authadaptermemory-loadusers"><code>loadUsers()</code></h4>

```php
protected function loadUsers(): array;
```


## Auth\Adapter\Model

Class

Phalcon Model-backed adapter.

@extends AbstractAdapter&lt;ModelAdapterConfig>

- [`Phalcon\Auth\Adapter\AbstractAdapter`](#authadapterabstractadapter)
  - **`Phalcon\Auth\Adapter\Model`** - implements [`Phalcon\Contracts\Auth\Adapter\RememberAdapter`](/5.20/api/phalcon_contracts/#contractsauthadapterrememberadapter)

`Phalcon\Auth\Adapter\Config\ModelAdapterConfig` · `Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\DoesNotImplement` · `Phalcon\Auth\Exceptions\InvalidCredentialKey` · `Phalcon\Auth\Internal\Options` · `Phalcon\Contracts\Auth\Adapter\RememberAdapter` · `Phalcon\Contracts\Auth\AuthRemember` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\RememberToken` · `Phalcon\Contracts\Encryption\Security\Security` · `Phalcon\Mvc\ModelInterface`

### Method Summary

- `public __construct(Security $hasher, ModelAdapterConfig $config)`

- `public createRememberToken(AuthUser $user): RememberToken` — Create and persist a new remember token for the user.

- `public fromOptions(Security $hasher, array $options): static`

- `public retrieveByCredentials(array $credentials): AuthUser|null` — Find a user matching the given credentials (excluding 'password' key).

- `public retrieveById(mixed $id): AuthUser|null`

- `public retrieveByToken(mixed $id, string $token, string|null $userAgent = null): AuthUser|null` — Retrieve a user by the remember-me cookie payload.

### Methods

<h4 id="authadaptermodel-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Security $hasher,
    ModelAdapterConfig $config
);
```

<h4 id="authadaptermodel-createremembertoken"><code>createRememberToken()</code></h4>

```php
public function createRememberToken( AuthUser $user ): RememberToken;
```

Create and persist a new remember token for the user.

<h4 id="authadaptermodel-fromoptions"><code>fromOptions()</code></h4>

```php
public static function fromOptions(
    Security $hasher,
    array $options
): static;
```

<h4 id="authadaptermodel-retrievebycredentials"><code>retrieveByCredentials()</code></h4>

```php
public function retrieveByCredentials( array $credentials ): AuthUser|null;
```

Find a user matching the given credentials (excluding 'password' key).

<h4 id="authadaptermodel-retrievebyid"><code>retrieveById()</code></h4>

```php
public function retrieveById( mixed $id ): AuthUser|null;
```

<h4 id="authadaptermodel-retrievebytoken"><code>retrieveByToken()</code></h4>

```php
public function retrieveByToken(
    mixed $id,
    string $token,
    string|null $userAgent = null
): AuthUser|null;
```

Retrieve a user by the remember-me cookie payload.


## Auth\Adapter\Stream

Class

JSON file-backed adapter.

The file must contain a JSON array of user records:
  [\{"id":1,"email":"a@b","password":"&lt;hashed>"\}, ...]

@extends AbstractArrayAdapter&lt;StreamAdapterConfig>

- [`Phalcon\Auth\Adapter\AbstractAdapter`](#authadapterabstractadapter)
  - [`Phalcon\Auth\Adapter\AbstractArrayAdapter`](#authadapterabstractarrayadapter)
    - **`Phalcon\Auth\Adapter\Stream`**

`InvalidArgumentException` · `Phalcon\Auth\Adapter\Config\StreamAdapterConfig` · `Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\FileCannotRead` · `Phalcon\Auth\Exceptions\FileDoesNotContainJson` · `Phalcon\Auth\Exceptions\FileDoesNotExist` · `Phalcon\Auth\Exceptions\FileNotValidJson` · `Phalcon\Auth\Internal\Options` · `Phalcon\Contracts\Encryption\Security\Security` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

- `public __construct(Security $hasher, StreamAdapterConfig $config)`

- `public fromOptions(Security $hasher, array $options): static`

- `protected loadUsers(): array` — Loads and decodes the JSON users file. Re-read on every call - if you

### Methods

<h4 id="authadapterstream-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Security $hasher,
    StreamAdapterConfig $config
);
```

<h4 id="authadapterstream-fromoptions"><code>fromOptions()</code></h4>

```php
public static function fromOptions(
    Security $hasher,
    array $options
): static;
```

<h4 id="authadapterstream-loadusers"><code>loadUsers()</code></h4>

```php
protected function loadUsers(): array;
```

Loads and decodes the JSON users file. Re-read on every call - if you
need caching, wrap it.


## Auth\AuthUser

Class

Lightweight value object returned by array-backed adapters (Memory, Stream)
when no application model class is configured.

- **`Phalcon\Auth\AuthUser`** - implements [`Phalcon\Contracts\Auth\AuthUser`](/5.20/api/phalcon_contracts/#contractsauthauthuser)

`Phalcon\Auth\Exceptions\DataMustContainIdKey` · `Phalcon\Contracts\Auth\AuthUser`

### Method Summary

- `public __construct(array $data)`

- `public getAuthIdentifier(): int|string`

- `public getAuthPassword(): string`

- `public toArray(): array` — Returns the underlying data array.

### Properties

- `protected array $data`

### Methods

<h4 id="authauthuser-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $data );
```

<h4 id="authauthuser-getauthidentifier"><code>getAuthIdentifier()</code></h4>

```php
public function getAuthIdentifier(): int|string;
```

<h4 id="authauthuser-getauthpassword"><code>getAuthPassword()</code></h4>

```php
public function getAuthPassword(): string;
```

<h4 id="authauthuser-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the underlying data array.


## Auth\Cli\AuthDispatcherListener

Class

- [`Phalcon\Auth\AbstractAuthDispatcherListener`](#authabstractauthdispatcherlistener)
  - **`Phalcon\Auth\Cli\AuthDispatcherListener`**

`Phalcon\Auth\AbstractAuthDispatcherListener` · `Phalcon\Auth\Exception` · `Phalcon\Cli\Dispatcher` · `Phalcon\Events\Event`

### Method Summary

- `public beforeExecuteRoute(Event $event, Dispatcher $dispatcher): bool`

- `protected getActionType(): string`

### Methods

<h4 id="authcliauthdispatcherlistener-beforeexecuteroute"><code>beforeExecuteRoute()</code></h4>

```php
public function beforeExecuteRoute(
    Event $event,
    Dispatcher $dispatcher
): bool;
```

<h4 id="authcliauthdispatcherlistener-getactiontype"><code>getActionType()</code></h4>

```php
protected function getActionType(): string;
```


## Auth\Exception

Class

Exceptions thrown in Phalcon\Auth will use this class

- `\Exception`
  - **`Phalcon\Auth\Exception`**
    - [`Phalcon\Auth\Exceptions\AccessDenied`](#authexceptionsaccessdenied)
    - [`Phalcon\Auth\Exceptions\AccessNotRegistered`](#authexceptionsaccessnotregistered)
    - [`Phalcon\Auth\Exceptions\ActiveAccessRequired`](#authexceptionsactiveaccessrequired)
    - [`Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`](#authexceptionsconfigrequiresnonemptyvalue)
    - [`Phalcon\Auth\Exceptions\DataMustContainIdKey`](#authexceptionsdatamustcontainidkey)
    - [`Phalcon\Auth\Exceptions\DefaultGuardNotRegistered`](#authexceptionsdefaultguardnotregistered)
    - [`Phalcon\Auth\Exceptions\DoesNotImplement`](#authexceptionsdoesnotimplement)
    - [`Phalcon\Auth\Exceptions\FileCannotRead`](#authexceptionsfilecannotread)
    - [`Phalcon\Auth\Exceptions\FileDoesNotContainJson`](#authexceptionsfiledoesnotcontainjson)
    - [`Phalcon\Auth\Exceptions\FileDoesNotExist`](#authexceptionsfiledoesnotexist)
    - [`Phalcon\Auth\Exceptions\FileNotValidJson`](#authexceptionsfilenotvalidjson)
    - [`Phalcon\Auth\Exceptions\GuardNotDefined`](#authexceptionsguardnotdefined)
    - [`Phalcon\Auth\Exceptions\InvalidCredentialKey`](#authexceptionsinvalidcredentialkey)
    - [`Phalcon\Auth\Exceptions\MissingHandlerContext`](#authexceptionsmissinghandlercontext)
    - [`Phalcon\Auth\Exceptions\OptionRequiresArray`](#authexceptionsoptionrequiresarray)
    - [`Phalcon\Auth\Exceptions\OptionRequiresString`](#authexceptionsoptionrequiresstring)
    - [`Phalcon\Auth\Exceptions\SessionNamesMustDiffer`](#authexceptionssessionnamesmustdiffer)
    - [`Phalcon\Auth\Exceptions\UnknownAdapter`](#authexceptionsunknownadapter)
    - [`Phalcon\Auth\Exceptions\UnknownGuard`](#authexceptionsunknownguard)


## Auth\Exceptions\AccessDenied

Class

Access denied exception

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\AccessDenied`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $type, string $name)`

### Methods

<h4 id="authexceptionsaccessdenied-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $type,
    string $name
);
```


## Auth\Exceptions\AccessNotRegistered

Class

Access gate name is not registered

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\AccessNotRegistered`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="authexceptionsaccessnotregistered-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Auth\Exceptions\ActiveAccessRequired

Class

No active access has been set on the manager

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\ActiveAccessRequired`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="authexceptionsactiveaccessrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Auth\Exceptions\ConfigRequiresNonEmptyValue

Class

Config requires non-empty value

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $configName, string $configKey, string $suffix = "")`

- `public assert(mixed $value, string $configName, string $configKey, string $suffix = ""): void` — Throws when the value is an empty string. A null value is treated as

### Methods

<h4 id="authexceptionsconfigrequiresnonemptyvalue-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $configName,
    string $configKey,
    string $suffix = ""
);
```

<h4 id="authexceptionsconfigrequiresnonemptyvalue-assert"><code>assert()</code></h4>

```php
public static function assert(
    mixed $value,
    string $configName,
    string $configKey,
    string $suffix = ""
): void;
```

Throws when the value is an empty string. A null value is treated as
"not provided" and passes, so optional settings can reuse the same
guard; callers that require presence reject null earlier. Keeps the
empty-value check shared by every config class in one place.


## Auth\Exceptions\DataMustContainIdKey

Class

AuthUser data must contain "id"

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\DataMustContainIdKey`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="authexceptionsdatamustcontainidkey-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Auth\Exceptions\DefaultGuardNotRegistered

Class

No default guard registered

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\DefaultGuardNotRegistered`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="authexceptionsdefaultguardnotregistered-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Auth\Exceptions\DoesNotImplement

Class

Does not implement interface

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\DoesNotImplement`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $type, string $name)`

- `public assert(mixed $value, string $interfaceName, string $type, string $name): void` — Throws when value is not an instance of the given interface. Keeps the

### Methods

<h4 id="authexceptionsdoesnotimplement-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $type,
    string $name
);
```

<h4 id="authexceptionsdoesnotimplement-assert"><code>assert()</code></h4>

```php
public static function assert(
    mixed $value,
    string $interfaceName,
    string $type,
    string $name
): void;
```

Throws when value is not an instance of the given interface. Keeps the
"must implement" guard shared across adapters, guards and the manager
in one place.


## Auth\Exceptions\FileCannotRead

Class

Cannot read file

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\FileCannotRead`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="authexceptionsfilecannotread-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Auth\Exceptions\FileDoesNotContainJson

Class

File does not contain a JSON array

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\FileDoesNotContainJson`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="authexceptionsfiledoesnotcontainjson-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Auth\Exceptions\FileDoesNotExist

Class

File does not exist

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\FileDoesNotExist`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="authexceptionsfiledoesnotexist-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Auth\Exceptions\FileNotValidJson

Class

Not a valid JSON

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\FileNotValidJson`**

`Phalcon\Auth\Exception` · `Throwable`

### Method Summary

- `public __construct(string $path, Throwable $ex)`

### Methods

<h4 id="authexceptionsfilenotvalidjson-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $path,
    Throwable $ex
);
```


## Auth\Exceptions\GuardNotDefined

Class

Guard name is not defined on the manager

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\GuardNotDefined`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="authexceptionsguardnotdefined-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Auth\Exceptions\InvalidCredentialKey

Class

A credential key is not a plain identifier and cannot be used as a query
column

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\InvalidCredentialKey`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $key)`

### Methods

<h4 id="authexceptionsinvalidcredentialkey-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $key );
```


## Auth\Exceptions\MissingHandlerContext

Class

The Acl access gate is missing the required 'handler' context key

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\MissingHandlerContext`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="authexceptionsmissinghandlercontext-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Auth\Exceptions\OptionRequiresArray

Class

Option must be a non-empty array

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\OptionRequiresArray`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $context, string $key)`

### Methods

<h4 id="authexceptionsoptionrequiresarray-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $context,
    string $key
);
```


## Auth\Exceptions\OptionRequiresString

Class

Option must be a non-empty string

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\OptionRequiresString`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $context, string $key)`

### Methods

<h4 id="authexceptionsoptionrequiresstring-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $context,
    string $key
);
```


## Auth\Exceptions\SessionNamesMustDiffer

Class

Session guard 'name' and 'rememberName' must differ

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\SessionNamesMustDiffer`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="authexceptionssessionnamesmustdiffer-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Auth\Exceptions\UnknownAdapter

Class

Unknown auth adapter requested from the factory

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\UnknownAdapter`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="authexceptionsunknownadapter-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Auth\Exceptions\UnknownGuard

Class

Unknown auth guard type requested from the factory

- `\Exception`
  - [`Phalcon\Auth\Exception`](#authexception)
    - **`Phalcon\Auth\Exceptions\UnknownGuard`**

`Phalcon\Auth\Exception`

### Method Summary

- `public __construct(string $type)`

### Methods

<h4 id="authexceptionsunknownguard-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type );
```


## Auth\Guard\AbstractGuard

Abstract

@template TConfig of GuardConfig

- **`Phalcon\Auth\Guard\AbstractGuard`** - implements [`Phalcon\Contracts\Auth\Guard\Guard`](/5.20/api/phalcon_contracts/#contractsauthguardguard)
  - [`Phalcon\Auth\Guard\Session`](#authguardsession)
  - [`Phalcon\Auth\Guard\Token`](#authguardtoken)

`Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\Guard\Guard` · `Phalcon\Contracts\Auth\Guard\GuardConfig` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait`

### Method Summary

- `public __construct(Adapter $adapter, GuardConfig $config)`

- `public check(): bool`

- `public getAdapter(): Adapter`

- `public getConfig(): GuardConfig` — Returns the guard configuration object.

- `public getLastUserAttempted(): AuthUser|null`

- `public guest(): bool`

- `public hasUser(): bool`

- `public id(): int|string|null`

- `public setAdapter(Adapter $adapter): static`

- `public setUser(AuthUser $user): static`

- `protected hasValidCredentials(mixed $user, array $credentials): bool` — user should be ?AuthUser

### Properties

- `protected Adapter $adapter`

- `protected GuardConfig $config`

- `protected AuthUser|null $lastUserAttempted = null`

- `protected AuthUser|null $user = null`

### Methods

<h4 id="authguardabstractguard-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Adapter $adapter,
    GuardConfig $config
);
```

<h4 id="authguardabstractguard-check"><code>check()</code></h4>

```php
public function check(): bool;
```

<h4 id="authguardabstractguard-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): Adapter;
```

<h4 id="authguardabstractguard-getconfig"><code>getConfig()</code></h4>

```php
public function getConfig(): GuardConfig;
```

Returns the guard configuration object.

<h4 id="authguardabstractguard-getlastuserattempted"><code>getLastUserAttempted()</code></h4>

```php
public function getLastUserAttempted(): AuthUser|null;
```

<h4 id="authguardabstractguard-guest"><code>guest()</code></h4>

```php
public function guest(): bool;
```

<h4 id="authguardabstractguard-hasuser"><code>hasUser()</code></h4>

```php
public function hasUser(): bool;
```

<h4 id="authguardabstractguard-id"><code>id()</code></h4>

```php
public function id(): int|string|null;
```

<h4 id="authguardabstractguard-setadapter"><code>setAdapter()</code></h4>

```php
public function setAdapter( Adapter $adapter ): static;
```

<h4 id="authguardabstractguard-setuser"><code>setUser()</code></h4>

```php
public function setUser( AuthUser $user ): static;
```

<h4 id="authguardabstractguard-hasvalidcredentials"><code>hasValidCredentials()</code></h4>

```php
protected function hasValidCredentials(
    mixed $user,
    array $credentials
): bool;
```

user should be ?AuthUser


## Auth\Guard\Config\AbstractGuardConfig

Abstract

- **`Phalcon\Auth\Guard\Config\AbstractGuardConfig`** - implements [`Phalcon\Contracts\Auth\Guard\GuardConfig`](/5.20/api/phalcon_contracts/#contractsauthguardguardconfig)
  - [`Phalcon\Auth\Guard\Config\SessionGuardConfig`](#authguardconfigsessionguardconfig)
  - [`Phalcon\Auth\Guard\Config\TokenGuardConfig`](#authguardconfigtokenguardconfig)

`Phalcon\Contracts\Auth\Guard\GuardConfig`


## Auth\Guard\Config\SessionGuardConfig

Class

Configuration for the Session guard. Holds the names under which the
session key and remember-me cookie are stored. Defaults to 'auth' and
'remember'; multi-guard apps can pass a $suffix ('web', 'admin', ...)
to derive 'auth_web' / 'remember_web' style names, or override either
full name explicitly.

- [`Phalcon\Auth\Guard\Config\AbstractGuardConfig`](#authguardconfigabstractguardconfig)
  - **`Phalcon\Auth\Guard\Config\SessionGuardConfig`**

`Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue` · `Phalcon\Auth\Exceptions\SessionNamesMustDiffer`

### Method Summary

- `public __construct(string|null $suffix = null, string|null $name = null, string|null $rememberName = null, int|null $rememberTtl = null, bool $rememberSecure = true)`

- `public getName(): string`

- `public getRememberName(): string`

- `public getRememberSecure(): bool` — Whether the remember-me cookie carries the Secure flag. Defaults to

- `public getRememberTtl(): int`

### Constants

- `const int DEFAULT_REMEMBER_TTL = 31536000` — Default remember-me cookie lifetime, in seconds (365 days).

### Methods

<h4 id="authguardconfigsessionguardconfig-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string|null $suffix = null,
    string|null $name = null,
    string|null $rememberName = null,
    int|null $rememberTtl = null,
    bool $rememberSecure = true
);
```

<h4 id="authguardconfigsessionguardconfig-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

<h4 id="authguardconfigsessionguardconfig-getremembername"><code>getRememberName()</code></h4>

```php
public function getRememberName(): string;
```

<h4 id="authguardconfigsessionguardconfig-getremembersecure"><code>getRememberSecure()</code></h4>

```php
public function getRememberSecure(): bool;
```

Whether the remember-me cookie carries the Secure flag. Defaults to
true: the cookie is a bearer credential. Set it to false only for a
deployment that serves plain HTTP on purpose.

<h4 id="authguardconfigsessionguardconfig-getrememberttl"><code>getRememberTtl()</code></h4>

```php
public function getRememberTtl(): int;
```


## Auth\Guard\Config\TokenGuardConfig

Class

- [`Phalcon\Auth\Guard\Config\AbstractGuardConfig`](#authguardconfigabstractguardconfig)
  - **`Phalcon\Auth\Guard\Config\TokenGuardConfig`**

`Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`

### Method Summary

- `public __construct(string $inputKey, string $storageKey)`

- `public getInputKey(): string`

- `public getStorageKey(): string`

### Properties

- `protected string $inputKey`

- `protected string $storageKey`

### Methods

<h4 id="authguardconfigtokenguardconfig-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $inputKey,
    string $storageKey
);
```

<h4 id="authguardconfigtokenguardconfig-getinputkey"><code>getInputKey()</code></h4>

```php
public function getInputKey(): string;
```

<h4 id="authguardconfigtokenguardconfig-getstoragekey"><code>getStorageKey()</code></h4>

```php
public function getStorageKey(): string;
```


## Auth\Guard\GuardLocator

Class

Service locator for Phalcon\Auth guards. Utilizes the container to obtain
the service. For Phalcon\Container\Container one can use autowiring; for
Phalcon\Di\Di, register the guards in it before resolution.

@extends AbstractLocator&lt;Guard>

- [`Phalcon\Support\AbstractLocator`](/5.20/api/phalcon_support/#supportabstractlocator)
  - **`Phalcon\Auth\Guard\GuardLocator`**

`Phalcon\Auth\Exception` · `Phalcon\Contracts\Auth\Guard\Guard` · `Phalcon\Support\AbstractLocator`

### Method Summary

- `protected getExceptionClass(): string`

- `protected getInterfaceClass(): string`

- `protected getServices(): array`

### Methods

<h4 id="authguardguardlocator-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="authguardguardlocator-getinterfaceclass"><code>getInterfaceClass()</code></h4>

```php
protected function getInterfaceClass(): string;
```

<h4 id="authguardguardlocator-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```


## Auth\Guard\Session

Class

@extends AbstractGuard&lt;SessionGuardConfig>

- [`Phalcon\Auth\Guard\AbstractGuard`](#authguardabstractguard)
  - **`Phalcon\Auth\Guard\Session`** - implements [`Phalcon\Contracts\Auth\Guard\GuardStateful`](/5.20/api/phalcon_contracts/#contractsauthguardguardstateful), [`Phalcon\Contracts\Auth\Guard\BasicAuth`](/5.20/api/phalcon_contracts/#contractsauthguardbasicauth)

`Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\DoesNotImplement` · `Phalcon\Auth\Guard\Config\SessionGuardConfig` · `Phalcon\Auth\Internal\ContainerResolver` · `Phalcon\Auth\Internal\Options` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\Adapter\RememberAdapter` · `Phalcon\Contracts\Auth\AuthRemember` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\Guard\BasicAuth` · `Phalcon\Contracts\Auth\Guard\GuardStateful` · `Phalcon\Contracts\Auth\RememberToken` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\Response\CookiesInterface` · `Phalcon\Session\ManagerInterface` · `Phalcon\Support\Helper\Json\Encode` · `Phalcon\Time\Clock\ClockInterface` · `Phalcon\Time\Clock\SystemClock`

### Method Summary

- `public __construct(Adapter $adapter, RequestInterface $request, CookiesInterface $cookies, SessionManagerInterface $session, SessionGuardConfig|null $config = null, ClockInterface|null $clock = null)`

- `public attempt(array $credentials = [], bool $remember = false): bool`

- `public basic(string $field = "email", array $extraConditions = []): bool`

- `public fromOptions(Adapter $adapter, mixed $container, array $options): static`

- `public getName(): string`

- `public getRememberName(): string`

- `public login(AuthUser $user, bool $remember = false): void`

- `public loginById(mixed $id, bool $remember = false): AuthUser|false`

- `public logout(): void`

- `public once(array $credentials = []): bool`

- `public onceBasic(string $field = "email", array $extraConditions = []): AuthUser|false`

- `public user(): AuthUser|null`

- `public validate(array $credentials = []): bool`

- `public viaRemember(): bool`

- `protected attemptBasic(string $field, array $extraConditions = []): bool`

- `protected basicCredentials(string $field): array|null`

- `protected createRememberToken(AuthUser $user): RememberToken`

- `protected recaller(): UserRemember|null`

- `protected rememberUser(AuthUser $user): void`

- `protected userFromRecaller(UserRemember $recaller): AuthUser|null`

### Properties

- `protected ClockInterface $clock`

- `protected CookiesInterface $cookies`

- `protected RequestInterface $request`

- `protected SessionManagerInterface $session`

- `protected bool $viaRemember = false`

### Methods

<h4 id="authguardsession-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Adapter $adapter,
    RequestInterface $request,
    CookiesInterface $cookies,
    SessionManagerInterface $session,
    SessionGuardConfig|null $config = null,
    ClockInterface|null $clock = null
);
```

<h4 id="authguardsession-attempt"><code>attempt()</code></h4>

```php
public function attempt(
    array $credentials = [],
    bool $remember = false
): bool;
```

<h4 id="authguardsession-basic"><code>basic()</code></h4>

```php
public function basic(
    string $field = "email",
    array $extraConditions = []
): bool;
```

<h4 id="authguardsession-fromoptions"><code>fromOptions()</code></h4>

```php
public static function fromOptions(
    Adapter $adapter,
    mixed $container,
    array $options
): static;
```

<h4 id="authguardsession-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

<h4 id="authguardsession-getremembername"><code>getRememberName()</code></h4>

```php
public function getRememberName(): string;
```

<h4 id="authguardsession-login"><code>login()</code></h4>

```php
public function login(
    AuthUser $user,
    bool $remember = false
): void;
```

<h4 id="authguardsession-loginbyid"><code>loginById()</code></h4>

```php
public function loginById(
    mixed $id,
    bool $remember = false
): AuthUser|false;
```

<h4 id="authguardsession-logout"><code>logout()</code></h4>

```php
public function logout(): void;
```

<h4 id="authguardsession-once"><code>once()</code></h4>

```php
public function once( array $credentials = [] ): bool;
```

<h4 id="authguardsession-oncebasic"><code>onceBasic()</code></h4>

```php
public function onceBasic(
    string $field = "email",
    array $extraConditions = []
): AuthUser|false;
```

<h4 id="authguardsession-user"><code>user()</code></h4>

```php
public function user(): AuthUser|null;
```

<h4 id="authguardsession-validate"><code>validate()</code></h4>

```php
public function validate( array $credentials = [] ): bool;
```

<h4 id="authguardsession-viaremember"><code>viaRemember()</code></h4>

```php
public function viaRemember(): bool;
```

<h4 id="authguardsession-attemptbasic"><code>attemptBasic()</code></h4>

```php
protected function attemptBasic(
    string $field,
    array $extraConditions = []
): bool;
```

<h4 id="authguardsession-basiccredentials"><code>basicCredentials()</code></h4>

```php
protected function basicCredentials( string $field ): array|null;
```

<h4 id="authguardsession-createremembertoken"><code>createRememberToken()</code></h4>

```php
protected function createRememberToken( AuthUser $user ): RememberToken;
```

<h4 id="authguardsession-recaller"><code>recaller()</code></h4>

```php
protected function recaller(): UserRemember|null;
```

<h4 id="authguardsession-rememberuser"><code>rememberUser()</code></h4>

```php
protected function rememberUser( AuthUser $user ): void;
```

<h4 id="authguardsession-userfromrecaller"><code>userFromRecaller()</code></h4>

```php
protected function userFromRecaller( UserRemember $recaller ): AuthUser|null;
```


## Auth\Guard\Token

Class

@extends AbstractGuard&lt;TokenGuardConfig>

- [`Phalcon\Auth\Guard\AbstractGuard`](#authguardabstractguard)
  - **`Phalcon\Auth\Guard\Token`**

`Phalcon\Auth\Guard\Config\TokenGuardConfig` · `Phalcon\Auth\Internal\ContainerResolver` · `Phalcon\Auth\Internal\Options` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Http\RequestInterface`

### Method Summary

- `public __construct(Adapter $adapter, RequestInterface $request, TokenGuardConfig $config)`

- `public fromOptions(Adapter $adapter, mixed $container, array $options): static`

- `public getTokenForRequest(): string|null` — Returns the bearer token for the request.

- `public setRequest(RequestInterface $request): static`

- `public user(): AuthUser|null`

- `public validate(array $credentials = []): bool`

### Properties

- `protected RequestInterface $request`

### Methods

<h4 id="authguardtoken-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Adapter $adapter,
    RequestInterface $request,
    TokenGuardConfig $config
);
```

<h4 id="authguardtoken-fromoptions"><code>fromOptions()</code></h4>

```php
public static function fromOptions(
    Adapter $adapter,
    mixed $container,
    array $options
): static;
```

<h4 id="authguardtoken-gettokenforrequest"><code>getTokenForRequest()</code></h4>

```php
public function getTokenForRequest(): string|null;
```

Returns the bearer token for the request.

Security: for backward compatibility the configured input key is also
read from the query string / request body, and is checked before the
Authorization header. A token placed in a URL leaks through access logs,
browser history and the Referer header (CWE-598) - always send it in the
"Authorization: Bearer &lt;token>" header and never as a query parameter.
A header-only opt-in is planned for a future major version.

<h4 id="authguardtoken-setrequest"><code>setRequest()</code></h4>

```php
public function setRequest( RequestInterface $request ): static;
```

<h4 id="authguardtoken-user"><code>user()</code></h4>

```php
public function user(): AuthUser|null;
```

<h4 id="authguardtoken-validate"><code>validate()</code></h4>

```php
public function validate( array $credentials = [] ): bool;
```


## Auth\Guard\UserRemember

Final

Value object representing the contents of a remember-me cookie.

- **`Phalcon\Auth\Guard\UserRemember`**

`InvalidArgumentException` · `Phalcon\Support\Helper\Json\Decode`

### Method Summary

- `public __construct(mixed $payload)` — Accepts either the raw JSON cookie value (string) or the already

- `public getId(): int|string|null`

- `public getToken(): string`

- `public getUserAgent(): string`

### Properties

- `protected int|string|null $id`

- `protected string $token`

- `protected string $userAgent`

### Methods

<h4 id="authguarduserremember-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $payload );
```

Accepts either the raw JSON cookie value (string) or the already
decoded associative array. Malformed input degrades to an empty
payload so callers can read getters without null-guarding.

<h4 id="authguarduserremember-getid"><code>getId()</code></h4>

```php
public function getId(): int|string|null;
```

<h4 id="authguarduserremember-gettoken"><code>getToken()</code></h4>

```php
public function getToken(): string;
```

<h4 id="authguarduserremember-getuseragent"><code>getUserAgent()</code></h4>

```php
public function getUserAgent(): string;
```


## Auth\Internal\ContainerResolver

Final

Internal single source of truth for resolving services from either the
new Phalcon\Container\Container or the legacy Phalcon\Di\Di. Not part of
the public API.

Intent is Container-first; the legacy Di is supported "with provisions":
definitions must be pre-registered (no autowiring), the one exception
being the fresh path, which lets Di build an unregistered but existing
class via its class builder.

All legacy-Di failures are normalized to Phalcon\Container\Exceptions so
callers and userland catch a single exception family.

- **`Phalcon\Auth\Internal\ContainerResolver`**

`Closure` · `Phalcon\Container\Exceptions\Exception` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Exception` · `Phalcon\Di\Service` · `TypeError`

### Method Summary

- `public ensureContainer(mixed $container): void` — Validates that the value is a supported container.

- `public requireService(mixed $container, array $candidates, string $context): object` — Resolves the first candidate service name that the container can

- `public resolveCandidate(mixed $container, array $options, string $key, string $fqn, string $shortName, string $context): object` — Convenience composition of serviceCandidates() + requireService():

- `public resolveFresh(mixed $container, string $name): object` — Resolves a fresh instance: new() on the Container (bypasses the

- `public serviceCandidates(array $options, string $key, string $fqn, string $shortName): array` — Builds the ordered candidate list for a framework service:

### Methods

<h4 id="authinternalcontainerresolver-ensurecontainer"><code>ensureContainer()</code></h4>

```php
public static function ensureContainer( mixed $container ): void;
```

Validates that the value is a supported container.

<h4 id="authinternalcontainerresolver-requireservice"><code>requireService()</code></h4>

```php
public static function requireService(
    mixed $container,
    array $candidates,
    string $context
): object;
```

Resolves the first candidate service name that the container can
provide, as a shared instance. Used for framework services (request,
cookies, session) whose container key may vary between application
setups.

<h4 id="authinternalcontainerresolver-resolvecandidate"><code>resolveCandidate()</code></h4>

```php
public static function resolveCandidate(
    mixed $container,
    array $options,
    string $key,
    string $fqn,
    string $shortName,
    string $context
): object;
```

Convenience composition of serviceCandidates() + requireService():
resolves the first bound candidate for a framework service whose
container key may vary, using the options override or the
[interface FQN, conventional short name] fallback.

<h4 id="authinternalcontainerresolver-resolvefresh"><code>resolveFresh()</code></h4>

```php
public static function resolveFresh(
    mixed $container,
    string $name
): object;
```

Resolves a fresh instance: new() on the Container (bypasses the
instance cache); on the legacy Di, get() for unregistered or
non-shared services, and a rebuild from the definition for shared
services (Di::get() would return the cached instance). On Di, an
unregistered but existing class is still built via the class builder.

<h4 id="authinternalcontainerresolver-servicecandidates"><code>serviceCandidates()</code></h4>

```php
public static function serviceCandidates(
    array $options,
    string $key,
    string $fqn,
    string $shortName
): array;
```

Builds the ordered candidate list for a framework service:
an explicit override from options['services'][key] if present,
otherwise the interface FQN followed by the conventional short name.


## Auth\Internal\Options

Final

Internal option-parsing helpers shared by adapter / guard fromOptions()
implementations. Not part of the public API.

- **`Phalcon\Auth\Internal\Options`**

`Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\OptionRequiresArray` · `Phalcon\Auth\Exceptions\OptionRequiresString`

### Method Summary

- `public arrayOption(array $options, string $key, array $defaultValue): array`

- `public requireArray(array $options, string $key, string $context): array`

- `public requireString(array $options, string $key, string $context): string`

- `public stringOrNull(array $options, string $key): string|null`

### Methods

<h4 id="authinternaloptions-arrayoption"><code>arrayOption()</code></h4>

```php
public static function arrayOption(
    array $options,
    string $key,
    array $defaultValue
): array;
```

<h4 id="authinternaloptions-requirearray"><code>requireArray()</code></h4>

```php
public static function requireArray(
    array $options,
    string $key,
    string $context
): array;
```

<h4 id="authinternaloptions-requirestring"><code>requireString()</code></h4>

```php
public static function requireString(
    array $options,
    string $key,
    string $context
): string;
```

<h4 id="authinternaloptions-stringornull"><code>stringOrNull()</code></h4>

```php
public static function stringOrNull(
    array $options,
    string $key
): string|null;
```


## Auth\Manager

Class

Composes guards (authentication) and access gates (authorization)
behind a single facade. Guard-specific behavior is reached through
Manager::guard(); callers narrow with instanceof against the
relevant capability interface (GuardStateful, BasicAuth, etc.).

- **`Phalcon\Auth\Manager`** - implements [`Phalcon\Contracts\Auth\Manager`](/5.20/api/phalcon_contracts/#contractsauthmanager)

`Phalcon\Auth\Access\AccessLocator` · `Phalcon\Auth\Exceptions\AccessNotRegistered` · `Phalcon\Auth\Exceptions\ActiveAccessRequired` · `Phalcon\Auth\Exceptions\DefaultGuardNotRegistered` · `Phalcon\Auth\Exceptions\DoesNotImplement` · `Phalcon\Auth\Exceptions\GuardNotDefined` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\Guard\Guard` · `Phalcon\Contracts\Auth\Guard\GuardStateful` · `Phalcon\Contracts\Auth\Manager`

### Method Summary

- `public __construct(AccessLocator $accessFactory)`

- `public access(string $accessName): self`

- `public addAccessList(array $accessList): self`

- `public addGuard(string $nameGuard, Guard $guard, bool $isDefault = false): self`

- `public attempt(array $credentials = [], bool $remember = false): bool`

- `public check(): bool`

- `public except(string $actions): self`

- `public getAccess(): Access|null`

- `public getAccessList(): array`

- `public getDefaultGuard(): Guard|null`

- `public getGuards(): array`

- `public guard(string|null $name = null): Guard`

- `public id(): int|string|null`

- `public logout(): void`

- `public only(string $actions): self`

- `public setAccess(Access $access): self`

- `public setDefaultGuard(Guard $guard): self`

- `public user(): AuthUser|null`

- `public validate(array $credentials = []): bool`

### Properties

- `protected AccessLocator $accessFactory`

- `protected Access|null $activeAccess = null`

- `protected Guard|null $defaultGuard = null`

- `protected array<string, Guard> $guards = []`

### Methods

<h4 id="authmanager-__construct"><code>__construct()</code></h4>

```php
public function __construct( AccessLocator $accessFactory );
```

<h4 id="authmanager-access"><code>access()</code></h4>

```php
public function access( string $accessName ): self;
```

<h4 id="authmanager-addaccesslist"><code>addAccessList()</code></h4>

```php
public function addAccessList( array $accessList ): self;
```

<h4 id="authmanager-addguard"><code>addGuard()</code></h4>

```php
public function addGuard(
    string $nameGuard,
    Guard $guard,
    bool $isDefault = false
): self;
```

<h4 id="authmanager-attempt"><code>attempt()</code></h4>

```php
public function attempt(
    array $credentials = [],
    bool $remember = false
): bool;
```

<h4 id="authmanager-check"><code>check()</code></h4>

```php
public function check(): bool;
```

<h4 id="authmanager-except"><code>except()</code></h4>

```php
public function except( string $actions ): self;
```

<h4 id="authmanager-getaccess"><code>getAccess()</code></h4>

```php
public function getAccess(): Access|null;
```

<h4 id="authmanager-getaccesslist"><code>getAccessList()</code></h4>

```php
public function getAccessList(): array;
```

<h4 id="authmanager-getdefaultguard"><code>getDefaultGuard()</code></h4>

```php
public function getDefaultGuard(): Guard|null;
```

<h4 id="authmanager-getguards"><code>getGuards()</code></h4>

```php
public function getGuards(): array;
```

<h4 id="authmanager-guard"><code>guard()</code></h4>

```php
public function guard( string|null $name = null ): Guard;
```

<h4 id="authmanager-id"><code>id()</code></h4>

```php
public function id(): int|string|null;
```

<h4 id="authmanager-logout"><code>logout()</code></h4>

```php
public function logout(): void;
```

<h4 id="authmanager-only"><code>only()</code></h4>

```php
public function only( string $actions ): self;
```

<h4 id="authmanager-setaccess"><code>setAccess()</code></h4>

```php
public function setAccess( Access $access ): self;
```

<h4 id="authmanager-setdefaultguard"><code>setDefaultGuard()</code></h4>

```php
public function setDefaultGuard( Guard $guard ): self;
```

<h4 id="authmanager-user"><code>user()</code></h4>

```php
public function user(): AuthUser|null;
```

<h4 id="authmanager-validate"><code>validate()</code></h4>

```php
public function validate( array $credentials = [] ): bool;
```


## Auth\ManagerFactory

Class

Single entry-point factory that builds a fully wired Phalcon\Auth\Manager
from a config tree. Framework-shared services (RequestInterface,
CookiesInterface, SessionManagerInterface) are resolved from the injected
container so the manager wires against the real application singletons,
not separately constructed copies.

 [
     'guards' => [
         'web' => [
             'type'    => 'session',
             'default' => true,
             'adapter' => [
                 'name'    => 'model',
                 'options' => [
                     'model' => User::class
                 ],
             ],
             'options' => [],
         ],
         'api' => [
             'type'    => 'token',
             'adapter' => [
                 'name'    => 'model',
                 'options' => [
                     'model' => User::class
                 ]
             ],
             'options' => [
                 'inputKey'   => 'api_token',
                 'storageKey' => 'api_token'
             ],
         ],
     ],
     'access' => [
         'auth'  => \Phalcon\Auth\Access\Auth::class,
         'guest' => \Phalcon\Auth\Access\Guest::class,
     ],
 ]

- **`Phalcon\Auth\ManagerFactory`**

`Phalcon\Auth\Access\AccessLocator` · `Phalcon\Auth\Adapter\AdapterLocator` · `Phalcon\Auth\Exceptions\UnknownAdapter` · `Phalcon\Auth\Exceptions\UnknownGuard` · `Phalcon\Auth\Guard\GuardLocator` · `Phalcon\Auth\Internal\Options` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\Guard\Guard` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Di\DiInterface` · `Phalcon\Encryption\Security` · `Phalcon\Traits\Factory\ConfigTrait`

### Method Summary

- `public __construct(Security $hasher, mixed $container, AdapterLocator|null $adapterLocator = null, GuardLocator|null $guardLocator = null, AccessLocator|null $accessLocator = null)`

- `public load(mixed $config): Manager`

- `protected buildAdapter(AdapterLocator $locator, array $cfg): Adapter`

- `protected buildGuard(GuardLocator $locator, string $type, Adapter $adapter, array $options): Guard`

- `protected getExceptionClass(): string`

### Properties

- `protected AccessLocator $accessLocator`

- `protected AdapterLocator $adapterLocator`

- `protected mixed $container`

- `protected GuardLocator $guardLocator`

- `protected Security $hasher`

### Methods

<h4 id="authmanagerfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Security $hasher,
    mixed $container,
    AdapterLocator|null $adapterLocator = null,
    GuardLocator|null $guardLocator = null,
    AccessLocator|null $accessLocator = null
);
```

<h4 id="authmanagerfactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): Manager;
```

<h4 id="authmanagerfactory-buildadapter"><code>buildAdapter()</code></h4>

```php
protected function buildAdapter(
    AdapterLocator $locator,
    array $cfg
): Adapter;
```

<h4 id="authmanagerfactory-buildguard"><code>buildGuard()</code></h4>

```php
protected function buildGuard(
    GuardLocator $locator,
    string $type,
    Adapter $adapter,
    array $options
): Guard;
```

<h4 id="authmanagerfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```


## Auth\Micro\AuthMicroListener

Class

Listener that enforces the active Phalcon\Auth access gate on each Micro
route execution. Attach to the events manager:

  $eventsManager->attach('micro', new AuthMicroListener($manager));
  $app->setEventsManager($eventsManager);

The action name is the matched route's name, falling back to the route
pattern when the route is unnamed. The ACL component is the configured
component name (default 'Micro'). redirectTo() is ignored - Micro has no
forward mechanism.

No-op when no active access has been set on the manager.

- [`Phalcon\Auth\AbstractAuthDispatcherListener`](#authabstractauthdispatcherlistener)
  - **`Phalcon\Auth\Micro\AuthMicroListener`**

`Phalcon\Auth\AbstractAuthDispatcherListener` · `Phalcon\Auth\Exception` · `Phalcon\Contracts\Auth\Manager` · `Phalcon\Events\Event` · `Phalcon\Mvc\Micro` · `Phalcon\Mvc\RouterInterface` · `Phalcon\Mvc\Router\RouteInterface`

### Method Summary

- `public __construct(Manager $manager, string $componentName = "Micro")`

- `public beforeExecuteRoute(Event $event, Micro $application): bool`

- `protected getActionType(): string`

### Properties

- `protected string $componentName`

### Methods

<h4 id="authmicroauthmicrolistener-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Manager $manager,
    string $componentName = "Micro"
);
```

<h4 id="authmicroauthmicrolistener-beforeexecuteroute"><code>beforeExecuteRoute()</code></h4>

```php
public function beforeExecuteRoute(
    Event $event,
    Micro $application
): bool;
```

<h4 id="authmicroauthmicrolistener-getactiontype"><code>getActionType()</code></h4>

```php
protected function getActionType(): string;
```


## Auth\Mvc\AuthDispatcherListener

Class

Listener that enforces the active Phalcon\Auth access gate on each MVC
dispatch. Attach to the events manager:

  $eventsManager->attach('dispatch', new AuthDispatcherListener($manager));

No-op when no active access has been set on the manager.

- [`Phalcon\Auth\AbstractAuthDispatcherListener`](#authabstractauthdispatcherlistener)
  - **`Phalcon\Auth\Mvc\AuthDispatcherListener`**

`Phalcon\Auth\AbstractAuthDispatcherListener` · `Phalcon\Auth\Exception` · `Phalcon\Events\Event` · `Phalcon\Mvc\Dispatcher`

### Method Summary

- `public beforeExecuteRoute(Event $event, Dispatcher $dispatcher): bool`

- `protected getActionType(): string`

### Methods

<h4 id="authmvcauthdispatcherlistener-beforeexecuteroute"><code>beforeExecuteRoute()</code></h4>

```php
public function beforeExecuteRoute(
    Event $event,
    Dispatcher $dispatcher
): bool;
```

<h4 id="authmvcauthdispatcherlistener-getactiontype"><code>getActionType()</code></h4>

```php
protected function getActionType(): string;
```

Source: https://docs.phalcon.io/5.20/api/phalcon_auth/index.mdx
