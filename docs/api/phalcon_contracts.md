---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Contracts\Auth\Access\Access

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Access/Access.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Access\Access`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthaccessaccess-allowedif">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">allowedIf()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-getexceptactions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getExceptActions()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-getonlyactions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getOnlyActions()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-isallowed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isAllowed( string $actionName )</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-redirectto">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">redirectTo()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-setexceptactions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setExceptActions( array $exceptActions = [] )</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-setonlyactions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setOnlyActions( array $onlyActions = [] )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `allowedIf()` { #contractsauthaccessaccess-allowedif }

```php
public function allowedIf(): bool;
```

#### `getExceptActions()` { #contractsauthaccessaccess-getexceptactions }

```php
public function getExceptActions(): array;
```

#### `getOnlyActions()` { #contractsauthaccessaccess-getonlyactions }

```php
public function getOnlyActions(): array;
```

#### `isAllowed()` { #contractsauthaccessaccess-isallowed }

```php
public function isAllowed( string $actionName ): bool;
```

#### `redirectTo()` { #contractsauthaccessaccess-redirectto }

```php
public function redirectTo(): array|null;
```

#### `setExceptActions()` { #contractsauthaccessaccess-setexceptactions }

```php
public function setExceptActions( array $exceptActions = [] ): void;
```

#### `setOnlyActions()` { #contractsauthaccessaccess-setonlyactions }

```php
public function setOnlyActions( array $onlyActions = [] ): void;
```


## Contracts\Auth\Adapter\Adapter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Adapter/Adapter.zep){ .src-btn }

Authentication adapter contract.

Adapters look users up by credentials or by identifier and verify the
password against the stored hash. The credential payload is intentionally
unsealed: any user-row field may be used as the lookup key, plus an
optional `password` entry that is ignored during the row match and
consumed only by validateCredentials().

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Adapter\Adapter`**
    - [`Phalcon\Contracts\Auth\Adapter\RememberAdapter`](#contractsauthadapterrememberadapter)

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Encryption\Security\Security`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthadapteradapter-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">fromOptions(
    Security $hasher,
    array $options
)</code>
<span class="desc">Build an adapter from a flat options map. Used by ManagerFactory to</span>
</a>
<a class="api-item" href="#contractsauthadapteradapter-retrievebycredentials">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig">retrieveByCredentials( array $credentials )</code>
<span class="desc">Find a user matching the given credentials (e.g. [&#039;email&#039; =&gt; &#039;a@b&#039;]).</span>
</a>
<a class="api-item" href="#contractsauthadapteradapter-retrievebyid">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig">retrieveById( mixed $id )</code>
<span class="desc">Find a user by their unique identifier.</span>
</a>
<a class="api-item" href="#contractsauthadapteradapter-validatecredentials">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">validateCredentials(
    AuthUser $user,
    array $credentials
)</code>
<span class="desc">Validate the provided credentials against the given user.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `fromOptions()` { #contractsauthadapteradapter-fromoptions }

```php
public static function fromOptions(
    Security $hasher,
    array $options
): static;
```

Build an adapter from a flat options map. Used by ManagerFactory to
wire adapters from the application config; each implementation is
free to interpret the option keys it cares about.

#### `retrieveByCredentials()` { #contractsauthadapteradapter-retrievebycredentials }

```php
public function retrieveByCredentials( array $credentials ): AuthUser|null;
```

Find a user matching the given credentials (e.g. ['email' => 'a@b']).
The 'password' key, if present, is ignored during the lookup.
Returns null if no user matches.

#### `retrieveById()` { #contractsauthadapteradapter-retrievebyid }

```php
public function retrieveById( mixed $id ): AuthUser|null;
```

Find a user by their unique identifier.

#### `validateCredentials()` { #contractsauthadapteradapter-validatecredentials }

```php
public function validateCredentials(
    AuthUser $user,
    array $credentials
): bool;
```

Validate the provided credentials against the given user.
Implementations typically verify the password hash held under the
'password' key.


## Contracts\Auth\Adapter\AdapterConfig

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Adapter/AdapterConfig.zep){ .src-btn }

Authentication adapter configuration contract.

Per-adapter config shape is intentionally adapter-specific (e.g. Stream
exposes getFile(), Memory exposes getUsers()); the only field shared across
all adapters is the optional model class used during user hydration.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Adapter\AdapterConfig`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthadapteradapterconfig-getmodel">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getModel()</code>
<span class="desc">Returns the user-model class name to hydrate, if configured.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getModel()` { #contractsauthadapteradapterconfig-getmodel }

```php
public function getModel(): string|null;
```

Returns the user-model class name to hydrate, if configured.


## Contracts\Auth\Adapter\RememberAdapter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Adapter/RememberAdapter.zep){ .src-btn }

Capability extension implemented by adapters that support remember-me.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Auth\Adapter\Adapter`](#contractsauthadapteradapter)
    - **`Phalcon\Contracts\Auth\Adapter\RememberAdapter`**

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\RememberToken`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthadapterrememberadapter-createremembertoken">
<code class="vis vis-public">public</code>
<code class="ret">RememberToken</code>
<code class="sig">createRememberToken( AuthUser $user )</code>
<span class="desc">Create and persist a new remember token for the user.</span>
</a>
<a class="api-item" href="#contractsauthadapterrememberadapter-retrievebytoken">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig">retrieveByToken(
    mixed $id,
    string $token,
    string $userAgent = null
)</code>
<span class="desc">Retrieve a user by the remember-me cookie payload.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `createRememberToken()` { #contractsauthadapterrememberadapter-createremembertoken }

```php
public function createRememberToken( AuthUser $user ): RememberToken;
```

Create and persist a new remember token for the user.

#### `retrieveByToken()` { #contractsauthadapterrememberadapter-retrievebytoken }

```php
public function retrieveByToken(
    mixed $id,
    string $token,
    string $userAgent = null
): AuthUser|null;
```

Retrieve a user by the remember-me cookie payload.


## Contracts\Auth\AuthRemember

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/AuthRemember.zep){ .src-btn }

Implemented by authenticatable models that support remember-me tokens.
This is intentionally separate from AuthUser so that adapters which do
not support remember-me are not forced to implement it.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\AuthRemember`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthauthremember-createremembertoken">
<code class="vis vis-public">public</code>
<code class="ret">RememberToken</code>
<code class="sig">createRememberToken(
    string $token,
    string $userAgent = null
)</code>
<span class="desc">Persists a new remember token for the user.</span>
</a>
<a class="api-item" href="#contractsauthauthremember-getremembertoken">
<code class="vis vis-public">public</code>
<code class="ret">RememberToken|null</code>
<code class="sig">getRememberToken( string $token )</code>
<span class="desc">Returns the remember token entry matching the given token value,</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `createRememberToken()` { #contractsauthauthremember-createremembertoken }

```php
public function createRememberToken(
    string $token,
    string $userAgent = null
): RememberToken;
```

Persists a new remember token for the user.

#### `getRememberToken()` { #contractsauthauthremember-getremembertoken }

```php
public function getRememberToken( string $token ): RememberToken|null;
```

Returns the remember token entry matching the given token value,
or null if not found.


## Contracts\Auth\AuthUser

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/AuthUser.zep){ .src-btn }

Implemented by user models that can be authenticated.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\AuthUser`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthauthuser-getauthidentifier">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig">getAuthIdentifier()</code>
<span class="desc">Returns the unique identifier for the authenticatable user</span>
</a>
<a class="api-item" href="#contractsauthauthuser-getauthpassword">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAuthPassword()</code>
<span class="desc">Returns the hashed password for the authenticatable user.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getAuthIdentifier()` { #contractsauthauthuser-getauthidentifier }

```php
public function getAuthIdentifier(): int|string;
```

Returns the unique identifier for the authenticatable user
(e.g. the primary key). Implementations MUST return a non-null
scalar; if a record cannot produce one, the implementation should
fail at construction time rather than returning null.

#### `getAuthPassword()` { #contractsauthauthuser-getauthpassword }

```php
public function getAuthPassword(): string;
```

Returns the hashed password for the authenticatable user.


## Contracts\Auth\Guard\BasicAuth

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Guard/BasicAuth.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-auth
@link    https://github.com/sinbadxiii/cphalcon-auth

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Guard\BasicAuth`**

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthUser`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthguardbasicauth-basic">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">basic(
    string $field = &quot;email&quot;,
    array $extraConditions = []
)</code>
<span class="desc">Authenticate against HTTP Basic credentials. Returns true on success.</span>
</a>
<a class="api-item" href="#contractsauthguardbasicauth-oncebasic">
<code class="vis vis-public">public</code>
<code class="ret">false|AuthUser</code>
<code class="sig">onceBasic(
    string $field = &quot;email&quot;,
    array $extraConditions = []
)</code>
<span class="desc">Like basic() but does not persist; returns the resolved user on success</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `basic()` { #contractsauthguardbasicauth-basic }

```php
public function basic(
    string $field = "email",
    array $extraConditions = []
): bool;
```

Authenticate against HTTP Basic credentials. Returns true on success.

#### `onceBasic()` { #contractsauthguardbasicauth-oncebasic }

```php
public function onceBasic(
    string $field = "email",
    array $extraConditions = []
): false|AuthUser;
```

Like basic() but does not persist; returns the resolved user on success
or false on failure.


## Contracts\Auth\Guard\Guard

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Guard/Guard.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Guard\Guard`**

</div>

__Uses__ `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Container\Service\Collection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthguardguard-check">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">check()</code>
<span class="desc">Whether the current request is authenticated.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">fromOptions(
    Adapter $adapter,
    Collection $container,
    array $options
)</code>
<span class="desc">Build a guard from an adapter, the application container, and a flat</span>
</a>
<a class="api-item" href="#contractsauthguardguard-getlastuserattempted">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig">getLastUserAttempted()</code>
<span class="desc">Returns the last user the guard tried to authenticate during this</span>
</a>
<a class="api-item" href="#contractsauthguardguard-guest">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">guest()</code>
<span class="desc">Whether the current request is unauthenticated.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-hasuser">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasUser()</code>
<span class="desc">Whether the guard currently holds a resolved user.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-id">
<code class="vis vis-public">public</code>
<code class="ret">int|string|null</code>
<code class="sig">id()</code>
<span class="desc">Returns the authenticated user&#039;s identifier, or null when no</span>
</a>
<a class="api-item" href="#contractsauthguardguard-setuser">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setUser( AuthUser $user )</code>
<span class="desc">Sets the current user explicitly. Returns $this for fluent chaining.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-user">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig">user()</code>
<span class="desc">Returns the resolved user for the current request, or null.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">validate( array $credentials = [] )</code>
<span class="desc">Validates the given credentials without logging in.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `check()` { #contractsauthguardguard-check }

```php
public function check(): bool;
```

Whether the current request is authenticated.

#### `fromOptions()` { #contractsauthguardguard-fromoptions }

```php
public static function fromOptions(
    Adapter $adapter,
    Collection $container,
    array $options
): static;
```

Build a guard from an adapter, the application container, and a flat
options map. Used by ManagerFactory to wire guards from the
application config; each implementation resolves the framework
services it needs from the container.

#### `getLastUserAttempted()` { #contractsauthguardguard-getlastuserattempted }

```php
public function getLastUserAttempted(): AuthUser|null;
```

Returns the last user the guard tried to authenticate during this
request, regardless of success.

#### `guest()` { #contractsauthguardguard-guest }

```php
public function guest(): bool;
```

Whether the current request is unauthenticated.

#### `hasUser()` { #contractsauthguardguard-hasuser }

```php
public function hasUser(): bool;
```

Whether the guard currently holds a resolved user.

#### `id()` { #contractsauthguardguard-id }

```php
public function id(): int|string|null;
```

Returns the authenticated user's identifier, or null when no
authenticated user is present.

#### `setUser()` { #contractsauthguardguard-setuser }

```php
public function setUser( AuthUser $user ): static;
```

Sets the current user explicitly. Returns $this for fluent chaining.

#### `user()` { #contractsauthguardguard-user }

```php
public function user(): AuthUser|null;
```

Returns the resolved user for the current request, or null.

#### `validate()` { #contractsauthguardguard-validate }

```php
public function validate( array $credentials = [] ): bool;
```

Validates the given credentials without logging in.


## Contracts\Auth\Guard\GuardConfig

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Guard/GuardConfig.zep){ .src-btn }

Authentication guard configuration contract.

Per-guard config shape is intentionally guard-specific (e.g. Token exposes
getInputKey()/getStorageKey(); Session has no required config today).
The contract carries no methods of its own - it only marks the type so
AbstractGuard can accept any guard config uniformly.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Guard\GuardConfig`**

</div>


## Contracts\Auth\Guard\GuardStateful

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Guard/GuardStateful.zep){ .src-btn }

Implemented by guards backed by persistent state (sessions/cookies).

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Guard\GuardStateful`**

</div>

__Uses__ `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthUser`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthguardguardstateful-attempt">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">attempt(
    array $credentials = [],
    bool $remember = false
)</code>
<span class="desc">Attempts to authenticate the user with the given credentials and, on</span>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-login">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">login(
    AuthUser $user,
    bool $remember = false
)</code>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-loginbyid">
<code class="vis vis-public">public</code>
<code class="ret">false|AuthUser</code>
<code class="sig">loginById(
    mixed $id,
    bool $remember = false
)</code>
<span class="desc">Logs in the user identified by $id. Returns the resolved user on</span>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-logout">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">logout()</code>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-viaremember">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">viaRemember()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `attempt()` { #contractsauthguardguardstateful-attempt }

```php
public function attempt(
    array $credentials = [],
    bool $remember = false
): bool;
```

Attempts to authenticate the user with the given credentials and, on
success, persists the resulting state on the guard.

#### `login()` { #contractsauthguardguardstateful-login }

```php
public function login(
    AuthUser $user,
    bool $remember = false
): void;
```

#### `loginById()` { #contractsauthguardguardstateful-loginbyid }

```php
public function loginById(
    mixed $id,
    bool $remember = false
): false|AuthUser;
```

Logs in the user identified by $id. Returns the resolved user on
success or false when no user matches the id.

#### `logout()` { #contractsauthguardguardstateful-logout }

```php
public function logout(): void;
```

#### `viaRemember()` { #contractsauthguardguardstateful-viaremember }

```php
public function viaRemember(): bool;
```


## Contracts\Auth\Manager

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Manager.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\Manager`**

</div>

__Uses__ `Phalcon\Auth\Exception` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\Guard\Guard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthmanager-access">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">access( string $accessName )</code>
</a>
<a class="api-item" href="#contractsauthmanager-addaccesslist">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">addAccessList( array $accessList )</code>
</a>
<a class="api-item" href="#contractsauthmanager-addguard">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">addGuard(
    string $nameGuard,
    Guard $guard,
    bool $isDefault = false
)</code>
</a>
<a class="api-item" href="#contractsauthmanager-attempt">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">attempt(
    array $credentials = [],
    bool $remember = false
)</code>
</a>
<a class="api-item" href="#contractsauthmanager-check">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">check()</code>
<span class="desc">Whether the default guard reports the current request as authenticated.</span>
</a>
<a class="api-item" href="#contractsauthmanager-except">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">except( string $actions )</code>
<span class="desc">Restricts the active access gate to skip the listed action names.</span>
</a>
<a class="api-item" href="#contractsauthmanager-getaccess">
<code class="vis vis-public">public</code>
<code class="ret">Access|null</code>
<code class="sig">getAccess()</code>
</a>
<a class="api-item" href="#contractsauthmanager-getaccesslist">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAccessList()</code>
</a>
<a class="api-item" href="#contractsauthmanager-getdefaultguard">
<code class="vis vis-public">public</code>
<code class="ret">Guard|null</code>
<code class="sig">getDefaultGuard()</code>
</a>
<a class="api-item" href="#contractsauthmanager-getguards">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getGuards()</code>
</a>
<a class="api-item" href="#contractsauthmanager-guard">
<code class="vis vis-public">public</code>
<code class="ret">Guard</code>
<code class="sig">guard( string $name = null )</code>
<span class="desc">Returns the named guard, or the default guard when $name is null.</span>
</a>
<a class="api-item" href="#contractsauthmanager-id">
<code class="vis vis-public">public</code>
<code class="ret">int|string|null</code>
<code class="sig">id()</code>
<span class="desc">Returns the authenticated user&#039;s identifier from the default guard,</span>
</a>
<a class="api-item" href="#contractsauthmanager-logout">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">logout()</code>
<span class="desc">Logs the current user out via the default guard.</span>
</a>
<a class="api-item" href="#contractsauthmanager-only">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">only( string $actions )</code>
<span class="desc">Restricts the active access gate to apply only to the listed action names.</span>
</a>
<a class="api-item" href="#contractsauthmanager-setaccess">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">setAccess( Access $access )</code>
</a>
<a class="api-item" href="#contractsauthmanager-setdefaultguard">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">setDefaultGuard( Guard $guard )</code>
</a>
<a class="api-item" href="#contractsauthmanager-user">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig">user()</code>
<span class="desc">Returns the resolved user from the default guard, or null.</span>
</a>
<a class="api-item" href="#contractsauthmanager-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">validate( array $credentials = [] )</code>
<span class="desc">Validates the given credentials against the default guard without</span>
</a>
</div>

### Methods

<div class="api-group">Public · 18</div>

#### `access()` { #contractsauthmanager-access }

```php
public function access( string $accessName ): self;
```

#### `addAccessList()` { #contractsauthmanager-addaccesslist }

```php
public function addAccessList( array $accessList ): self;
```

#### `addGuard()` { #contractsauthmanager-addguard }

```php
public function addGuard(
    string $nameGuard,
    Guard $guard,
    bool $isDefault = false
): self;
```

#### `attempt()` { #contractsauthmanager-attempt }

```php
public function attempt(
    array $credentials = [],
    bool $remember = false
): bool;
```

#### `check()` { #contractsauthmanager-check }

```php
public function check(): bool;
```

Whether the default guard reports the current request as authenticated.

#### `except()` { #contractsauthmanager-except }

```php
public function except( string $actions ): self;
```

Restricts the active access gate to skip the listed action names.

#### `getAccess()` { #contractsauthmanager-getaccess }

```php
public function getAccess(): Access|null;
```

#### `getAccessList()` { #contractsauthmanager-getaccesslist }

```php
public function getAccessList(): array;
```

#### `getDefaultGuard()` { #contractsauthmanager-getdefaultguard }

```php
public function getDefaultGuard(): Guard|null;
```

#### `getGuards()` { #contractsauthmanager-getguards }

```php
public function getGuards(): array;
```

#### `guard()` { #contractsauthmanager-guard }

```php
public function guard( string $name = null ): Guard;
```

Returns the named guard, or the default guard when $name is null.

#### `id()` { #contractsauthmanager-id }

```php
public function id(): int|string|null;
```

Returns the authenticated user's identifier from the default guard,
or null when no authenticated user is present.

#### `logout()` { #contractsauthmanager-logout }

```php
public function logout(): void;
```

Logs the current user out via the default guard.

#### `only()` { #contractsauthmanager-only }

```php
public function only( string $actions ): self;
```

Restricts the active access gate to apply only to the listed action names.

#### `setAccess()` { #contractsauthmanager-setaccess }

```php
public function setAccess( Access $access ): self;
```

#### `setDefaultGuard()` { #contractsauthmanager-setdefaultguard }

```php
public function setDefaultGuard( Guard $guard ): self;
```

#### `user()` { #contractsauthmanager-user }

```php
public function user(): AuthUser|null;
```

Returns the resolved user from the default guard, or null.

#### `validate()` { #contractsauthmanager-validate }

```php
public function validate( array $credentials = [] ): bool;
```

Validates the given credentials against the default guard without
logging in.


## Contracts\Auth\RememberToken

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/RememberToken.zep){ .src-btn }

A persisted remember-me token row.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Auth\RememberToken`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthremembertoken-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">delete()</code>
<span class="desc">Deletes the token from storage.</span>
</a>
<a class="api-item" href="#contractsauthremembertoken-gettoken">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getToken()</code>
<span class="desc">Returns the token value stored for this remember entry.</span>
</a>
<a class="api-item" href="#contractsauthremembertoken-getuseragent">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getUserAgent()</code>
<span class="desc">Returns the user agent associated with this token, if any.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `delete()` { #contractsauthremembertoken-delete }

```php
public function delete(): bool;
```

Deletes the token from storage.

#### `getToken()` { #contractsauthremembertoken-gettoken }

```php
public function getToken(): string;
```

Returns the token value stored for this remember entry.

#### `getUserAgent()` { #contractsauthremembertoken-getuseragent }

```php
public function getUserAgent(): string|null;
```

Returns the user agent associated with this token, if any.


## Contracts\Container\Ioc\IocContainer

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Ioc/IocContainer.zep){ .src-btn }

[_IocContainer_][] affords obtaining services by name.

- Notes:

    - **This interface does not afford service management.** The container
      will need to obtain services somehow, e.g. from a [Service-Interop][]
      implementation.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Ioc\IocContainer`**
    - [`Phalcon\Contracts\Container\Service\Collection`](#contractscontainerservicecollection)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontaineriocioccontainer-getservice">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig">getService( string $serviceName )</code>
<span class="desc">Returns an instance of the `$serviceName`.</span>
</a>
<a class="api-item" href="#contractscontaineriocioccontainer-hasservice">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasService( string $serviceName )</code>
<span class="desc">Is the container able to return an instance of the `$serviceName`?</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getService()` { #contractscontaineriocioccontainer-getservice }

```php
public function getService( string $serviceName ): object;
```

Returns an instance of the `$serviceName`.

- Directives:

    - Implementations MUST throw [_IocThrowable_][] if the container
      cannot return an instance of the `$serviceName`.

- Notes:

    - **The logic for this method is expressly unspecified.** Retrieval
      may be accomplished via a service management subsystem, or by some
      other means.

    - **The returned instance may be new or shared.** The retrieval
      logic defines the service lifetime, not the container (per se) and
      not the caller requesting the service.

#### `hasService()` { #contractscontaineriocioccontainer-hasservice }

```php
public function hasService( string $serviceName ): bool;
```

Is the container able to return an instance of the `$serviceName`?

- Notes:

    - **The logic for this method is expressly unspecified.** The ability
      check may be accomplished by querying a service management subsystem,
      or by some other means.


## Contracts\Container\Ioc\IocContainerFactory

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Ioc/IocContainerFactory.zep){ .src-btn }

[_IocContainerFactory_][] affords obtaining a new instance of
[_IocContainer_][].

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Ioc\IocContainerFactory`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontaineriocioccontainerfactory-newcontainer">
<code class="vis vis-public">public</code>
<code class="ret">IocContainer</code>
<code class="sig">newContainer()</code>
<span class="desc">Returns a new instance of [_IocContainer_][].</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `newContainer()` { #contractscontaineriocioccontainerfactory-newcontainer }

```php
public function newContainer(): IocContainer;
```

Returns a new instance of [_IocContainer_][].

- Notes:

    - **Container instantiation logic is not specified.** Implementations
      might use providers, configuration files, attribute or annotation
      collection, or some other means to create and populate a container.
      Implementations might also choose to return a compiled or otherwise
      reconstituted container.


## Contracts\Container\Ioc\IocThrowable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Ioc/IocThrowable.zep){ .src-btn }

[_IocThrowable_][] extends [_Throwable_][] to mark an [_Exception_][] as
IOC-related.

It adds no class members.

<div class="api-tree" markdown>

- `Throwable`
    - **`Phalcon\Contracts\Container\Ioc\IocThrowable`**
        - [`Phalcon\Container\Exceptions\ContainerThrowable`](phalcon_container.md#containerexceptionscontainerthrowable)

</div>

__Uses__ `Throwable`
{ .api-uses }


## Contracts\Container\Ioc\IocTypeAliases

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Ioc/IocTypeAliases.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Ioc\IocTypeAliases`**

</div>


## Contracts\Container\Resolver\ReflectionMethodResolver

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Resolver/ReflectionMethodResolver.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Resolver\ReflectionMethodResolver`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionMethod`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverreflectionmethodresolver-resolvemethod">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resolveMethod(
    IocContainer $ioc,
    ReflectionMethod $method,
    object $instance
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `resolveMethod()` { #contractscontainerresolverreflectionmethodresolver-resolvemethod }

```php
public function resolveMethod(
    IocContainer $ioc,
    ReflectionMethod $method,
    object $instance
): void;
```


## Contracts\Container\Resolver\ReflectionParameterResolver

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Resolver/ReflectionParameterResolver.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Resolver\ReflectionParameterResolver`**
    - [`Phalcon\Contracts\Container\Resolver\ResolverService`](#contractscontainerresolverresolverservice)

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionParameter`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverreflectionparameterresolver-resolveparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">resolveParameter(
    IocContainer $ioc,
    ReflectionParameter $parameter
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `resolveParameter()` { #contractscontainerresolverreflectionparameterresolver-resolveparameter }

```php
public function resolveParameter(
    IocContainer $ioc,
    ReflectionParameter $parameter
): mixed;
```


## Contracts\Container\Resolver\Resolvable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Resolver/Resolvable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Resolver\Resolvable`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverresolvable-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">resolve( IocContainer $ioc )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `resolve()` { #contractscontainerresolverresolvable-resolve }

```php
public function resolve( IocContainer $ioc ): mixed;
```


## Contracts\Container\Resolver\ResolverService

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Resolver/ResolverService.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Container\Resolver\ReflectionParameterResolver`](#contractscontainerresolverreflectionparameterresolver)
    - **`Phalcon\Contracts\Container\Resolver\ResolverService`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionMethod` · `ReflectionParameter` · `ReflectionType`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverresolverservice-isresolvableclass">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isResolvableClass( string $className )</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolvecall">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">resolveCall(
    IocContainer $ioc,
    callable $callableObject,
    array $arguments
)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolveclass">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig">resolveClass(
    IocContainer $ioc,
    string $className,
    array $arguments
)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolvemethod">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resolveMethod(
    IocContainer $ioc,
    ReflectionMethod $method,
    object $instance
)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolveparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">resolveParameters(
    IocContainer $ioc,
    array $parameters,
    array $arguments
)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolvetype">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">resolveType(
    IocContainer $ioc,
    ReflectionType $type
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `isResolvableClass()` { #contractscontainerresolverresolverservice-isresolvableclass }

```php
public function isResolvableClass( string $className ): bool;
```

#### `resolveCall()` { #contractscontainerresolverresolverservice-resolvecall }

```php
public function resolveCall(
    IocContainer $ioc,
    callable $callableObject,
    array $arguments
): mixed;
```

#### `resolveClass()` { #contractscontainerresolverresolverservice-resolveclass }

```php
public function resolveClass(
    IocContainer $ioc,
    string $className,
    array $arguments
): object;
```

#### `resolveMethod()` { #contractscontainerresolverresolverservice-resolvemethod }

```php
public function resolveMethod(
    IocContainer $ioc,
    ReflectionMethod $method,
    object $instance
): void;
```

#### `resolveParameters()` { #contractscontainerresolverresolverservice-resolveparameters }

```php
public function resolveParameters(
    IocContainer $ioc,
    array $parameters,
    array $arguments
): array;
```

#### `resolveType()` { #contractscontainerresolverresolverservice-resolvetype }

```php
public function resolveType(
    IocContainer $ioc,
    ReflectionType $type
): mixed;
```


## Contracts\Container\Resolver\ResolverThrowable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Resolver/ResolverThrowable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md

<div class="api-tree" markdown>

- `Throwable`
    - **`Phalcon\Contracts\Container\Resolver\ResolverThrowable`**

</div>

__Uses__ `Throwable`
{ .api-uses }


## Contracts\Container\Service\Collection

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Service/Collection.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Container\Ioc\IocContainer`](#contractscontaineriocioccontainer)
    - **`Phalcon\Contracts\Container\Service\Collection`**

</div>

__Uses__ `Closure` · `Phalcon\Container\Definition\ServiceDefinition` · `Phalcon\Container\Resolver\Resolver` · `Phalcon\Contracts\Container\Ioc\IocContainer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerservicecollection-bind">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig">bind(
    string $interfaceName,
    string $concrete
)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-callableget">
<code class="vis vis-public">public</code>
<code class="ret">Closure</code>
<code class="sig">callableGet( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-callablenew">
<code class="vis vis-public">public</code>
<code class="ret">Closure</code>
<code class="sig">callableNew( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-extend">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">extend(
    string $name,
    callable $callableObject
)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">get( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getalias">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAlias( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getbytag">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getByTag( string $tag )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getdefinition">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig">getDefinition( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getinstance">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig">getInstance( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getParameter( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getresolver">
<code class="vis vis-public">public</code>
<code class="ret">Resolver</code>
<code class="sig">getResolver()</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasalias">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasAlias( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasdefinition">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasDefinition( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasinstance">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasInstance( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasparameter">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasParameter( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-isautowireenabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isAutowireEnabled()</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-new">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">new( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-newdefinition">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig">newDefinition( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-set">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig">set(
    string $name,
    mixed $definition
)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setalias">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setAlias(
    string $name,
    string $alias
)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setautowire">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setAutowire( bool $enabled )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setdefinition">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setDefinition(
    string $name,
    ServiceDefinition $definition
)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setinstance">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setInstance(
    string $name,
    object $instance,
    string $lifetime
)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setparameter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setParameter(
    string $name,
    mixed $value
)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetalias">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">unsetAlias( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetdefinition">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">unsetDefinition( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetinstance">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">unsetInstance( string $name )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetinstances">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">unsetInstances( string $lifetime )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetparameter">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">unsetParameter( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 30</div>

#### `bind()` { #contractscontainerservicecollection-bind }

```php
public function bind(
    string $interfaceName,
    string $concrete
): ServiceDefinition;
```

#### `callableGet()` { #contractscontainerservicecollection-callableget }

```php
public function callableGet( string $name ): Closure;
```

#### `callableNew()` { #contractscontainerservicecollection-callablenew }

```php
public function callableNew( string $name ): Closure;
```

#### `extend()` { #contractscontainerservicecollection-extend }

```php
public function extend(
    string $name,
    callable $callableObject
): void;
```

#### `get()` { #contractscontainerservicecollection-get }

```php
public function get( string $name ): mixed;
```

#### `getAlias()` { #contractscontainerservicecollection-getalias }

```php
public function getAlias( string $name ): string;
```

#### `getByTag()` { #contractscontainerservicecollection-getbytag }

```php
public function getByTag( string $tag ): array;
```

#### `getDefinition()` { #contractscontainerservicecollection-getdefinition }

```php
public function getDefinition( string $name ): ServiceDefinition;
```

#### `getInstance()` { #contractscontainerservicecollection-getinstance }

```php
public function getInstance( string $name ): object;
```

#### `getParameter()` { #contractscontainerservicecollection-getparameter }

```php
public function getParameter( string $name ): mixed;
```

#### `getResolver()` { #contractscontainerservicecollection-getresolver }

```php
public function getResolver(): Resolver;
```

#### `has()` { #contractscontainerservicecollection-has }

```php
public function has( string $name ): bool;
```

#### `hasAlias()` { #contractscontainerservicecollection-hasalias }

```php
public function hasAlias( string $name ): bool;
```

#### `hasDefinition()` { #contractscontainerservicecollection-hasdefinition }

```php
public function hasDefinition( string $name ): bool;
```

#### `hasInstance()` { #contractscontainerservicecollection-hasinstance }

```php
public function hasInstance( string $name ): bool;
```

#### `hasParameter()` { #contractscontainerservicecollection-hasparameter }

```php
public function hasParameter( string $name ): bool;
```

#### `isAutowireEnabled()` { #contractscontainerservicecollection-isautowireenabled }

```php
public function isAutowireEnabled(): bool;
```

#### `new()` { #contractscontainerservicecollection-new }

```php
public function new( string $name ): mixed;
```

#### `newDefinition()` { #contractscontainerservicecollection-newdefinition }

```php
public function newDefinition( string $name ): ServiceDefinition;
```

#### `set()` { #contractscontainerservicecollection-set }

```php
public function set(
    string $name,
    mixed $definition
): ServiceDefinition;
```

#### `setAlias()` { #contractscontainerservicecollection-setalias }

```php
public function setAlias(
    string $name,
    string $alias
): static;
```

#### `setAutowire()` { #contractscontainerservicecollection-setautowire }

```php
public function setAutowire( bool $enabled ): static;
```

#### `setDefinition()` { #contractscontainerservicecollection-setdefinition }

```php
public function setDefinition(
    string $name,
    ServiceDefinition $definition
): static;
```

#### `setInstance()` { #contractscontainerservicecollection-setinstance }

```php
public function setInstance(
    string $name,
    object $instance,
    string $lifetime
): static;
```

#### `setParameter()` { #contractscontainerservicecollection-setparameter }

```php
public function setParameter(
    string $name,
    mixed $value
): static;
```

#### `unsetAlias()` { #contractscontainerservicecollection-unsetalias }

```php
public function unsetAlias( string $name ): void;
```

#### `unsetDefinition()` { #contractscontainerservicecollection-unsetdefinition }

```php
public function unsetDefinition( string $name ): void;
```

#### `unsetInstance()` { #contractscontainerservicecollection-unsetinstance }

```php
public function unsetInstance( string $name ): void;
```

#### `unsetInstances()` { #contractscontainerservicecollection-unsetinstances }

```php
public function unsetInstances( string $lifetime ): void;
```

#### `unsetParameter()` { #contractscontainerservicecollection-unsetparameter }

```php
public function unsetParameter( string $name ): void;
```


## Contracts\Container\Service\Definition

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Service/Definition.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Service\Definition`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerservicedefinition-addextender">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">addExtender( callable $extender )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-buildservice">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig">buildService( IocContainer $ioc )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getclass">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getClass()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getextenders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getExtenders()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getfactory">
<code class="vis vis-public">public</code>
<code class="ret">callable</code>
<code class="sig">getFactory()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getlifetime">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getLifetime()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getservicename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getServiceName()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-hasclass">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasClass()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-hasextenders">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasExtenders()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-hasfactory">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasFactory()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setclass">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setClass( string $className )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setextenders">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setExtenders( array $extenders )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setfactory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setFactory( callable $factory )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setlifetime">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setLifetime( string $lifetime )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-unsetclass">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">unsetClass()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-unsetextenders">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">unsetExtenders()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-unsetfactory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">unsetFactory()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `addExtender()` { #contractscontainerservicedefinition-addextender }

```php
public function addExtender( callable $extender ): static;
```

#### `buildService()` { #contractscontainerservicedefinition-buildservice }

```php
public function buildService( IocContainer $ioc ): object;
```

#### `getClass()` { #contractscontainerservicedefinition-getclass }

```php
public function getClass(): string;
```

#### `getExtenders()` { #contractscontainerservicedefinition-getextenders }

```php
public function getExtenders(): array;
```

#### `getFactory()` { #contractscontainerservicedefinition-getfactory }

```php
public function getFactory(): callable;
```

#### `getLifetime()` { #contractscontainerservicedefinition-getlifetime }

```php
public function getLifetime(): string;
```

#### `getServiceName()` { #contractscontainerservicedefinition-getservicename }

```php
public function getServiceName(): string;
```

#### `hasClass()` { #contractscontainerservicedefinition-hasclass }

```php
public function hasClass(): bool;
```

#### `hasExtenders()` { #contractscontainerservicedefinition-hasextenders }

```php
public function hasExtenders(): bool;
```

#### `hasFactory()` { #contractscontainerservicedefinition-hasfactory }

```php
public function hasFactory(): bool;
```

#### `setClass()` { #contractscontainerservicedefinition-setclass }

```php
public function setClass( string $className ): static;
```

#### `setExtenders()` { #contractscontainerservicedefinition-setextenders }

```php
public function setExtenders( array $extenders ): static;
```

#### `setFactory()` { #contractscontainerservicedefinition-setfactory }

```php
public function setFactory( callable $factory ): static;
```

#### `setLifetime()` { #contractscontainerservicedefinition-setlifetime }

```php
public function setLifetime( string $lifetime ): static;
```

#### `unsetClass()` { #contractscontainerservicedefinition-unsetclass }

```php
public function unsetClass(): static;
```

#### `unsetExtenders()` { #contractscontainerservicedefinition-unsetextenders }

```php
public function unsetExtenders(): static;
```

#### `unsetFactory()` { #contractscontainerservicedefinition-unsetfactory }

```php
public function unsetFactory(): static;
```


## Contracts\Container\Service\Provider

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Service/Provider.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Container\Service\Provider`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerserviceprovider-provide">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">provide( Collection $services )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `provide()` { #contractscontainerserviceprovider-provide }

```php
public function provide( Collection $services ): void;
```


## Contracts\Container\Service\Throwable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Service/Throwable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been heavily influenced by CapsulePHP.
Additionally, there are implementations from ioc-interop, which is a
Composer dependency, and from service-interop and resolver-interop. They
are copied and re-implemented here because we need to support PHP 8.1.
Once we move to min 8.4 and packages become available and compatible, the
copies will be replaced with the actual Composer dependencies.

@link    https://github.com/capsulephp/di
@license https://github.com/capsulephp/di/blob/3.x/LICENSE.md

@link    https://github.com/ioc-interop/interface
@license https://github.com/ioc-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/service-interop/interface
@license https://github.com/service-interop/interface/blob/1.x/LICENSE.md

@link    https://github.com/resolver-interop/interface/tree/1.x
@license https://github.com/resolver-interop/interface/blob/1.x/LICENSE.md

<div class="api-tree" markdown>

- `PhpThrowable`
    - **`Phalcon\Contracts\Container\Service\Throwable`**

</div>

__Uses__ `Throwable`
{ .api-uses }


## Contracts\Db\Adapter\Adapter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Adapter/Adapter.zep){ .src-btn }

Canonical contract for Phalcon\Db adapters.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - addCheck()                : bool
             - createMaterializedView()  : bool
             - dropCheck()               : bool
             - dropMaterializedView()    : bool
             - onConflictUpdate()        : string
             - refreshMaterializedView() : bool
             - returning()               : string

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Adapter\Adapter`**
    - [`Phalcon\Db\Adapter\AdapterInterface`](phalcon_db.md#dbadapteradapterinterface)

</div>

__Uses__ `Phalcon\Db\ColumnInterface` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface` · `Phalcon\Db\ResultInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbadapteradapter-addcolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
)</code>
<span class="desc">Adds a column to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
)</code>
<span class="desc">Adds a foreign key to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-addindex">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Adds an index to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-addprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Adds a primary key to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-affectedrows">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">affectedRows()</code>
<span class="desc">Returns the number of affected rows by the last INSERT/UPDATE/DELETE</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-begin">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">begin( bool $nesting = true )</code>
<span class="desc">Starts a transaction in the connection</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-close">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">close()</code>
<span class="desc">Closes active connection returning success. Phalcon automatically closes</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-commit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">commit( bool $nesting = true )</code>
<span class="desc">Commits the active transaction in the connection</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">connect( array $descriptor = [] )</code>
<span class="desc">This method is automatically called in \Phalcon\Db\Adapter\Pdo</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-createsavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">createSavepoint( string $name )</code>
<span class="desc">Creates a new savepoint</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-createtable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">createTable(
    string $tableName,
    string $schemaName,
    array $definition
)</code>
<span class="desc">Creates a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-createview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">createView(
    string $viewName,
    array $definition,
    string $schemaName = null
)</code>
<span class="desc">Creates a view</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">delete(
    mixed $table,
    string $whereCondition = null,
    array $placeholders = [],
    array $dataTypes = []
)</code>
<span class="desc">Deletes data from a table using custom RDBMS SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">ColumnInterface[]</code>
<code class="sig">describeColumns(
    string $table,
    string $schema = null
)</code>
<span class="desc">Returns an array of Phalcon\Db\Column objects describing a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">IndexInterface[]</code>
<code class="sig">describeIndexes(
    string $table,
    string $schema = null
)</code>
<span class="desc">Lists table indexes</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">ReferenceInterface[]</code>
<code class="sig">describeReferences(
    string $table,
    string $schema = null
)</code>
<span class="desc">Lists table references</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropcolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
)</code>
<span class="desc">Drops a column from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
)</code>
<span class="desc">Drops a foreign key from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropindex">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
)</code>
<span class="desc">Drop an index from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropPrimaryKey(
    string $tableName,
    string $schemaName
)</code>
<span class="desc">Drops primary key from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-droptable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropTable(
    string $tableName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Drops a table from a schema/database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Drops a view</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-escapeidentifier">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">escapeIdentifier( mixed $identifier )</code>
<span class="desc">Escapes a column/table/schema name</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-escapestring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">escapeString( string $str )</code>
<span class="desc">Escapes a value to avoid SQL injections</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-execute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">execute(
    string $sqlStatement,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Sends SQL statements to the database server returning the success state.</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchAll(
    string $sqlQuery,
    int $fetchMode = 2,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Dumps the complete result of a query into an array</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-fetchcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string|bool</code>
<code class="sig">fetchColumn(
    string $sqlQuery,
    array $placeholders = [],
    mixed $column = 0
)</code>
<span class="desc">Returns the n&#039;th field of first row in a SQL query result</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-fetchone">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchOne(
    string $sqlQuery,
    int $fetchMode = 2,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Returns the first row in a SQL query result</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">forUpdate(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getcolumndefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getColumnDefinition( ColumnInterface $column )</code>
<span class="desc">Returns the SQL column definition from a column</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getcolumnlist">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getColumnList( mixed $columnList )</code>
<span class="desc">Gets a list of columns</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getconnectionid">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getConnectionId()</code>
<span class="desc">Gets the active connection unique identifier</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdefaultidvalue">
<code class="vis vis-public">public</code>
<code class="ret">RawValue</code>
<code class="sig">getDefaultIdValue()</code>
<span class="desc">Return the default identity value to insert in an identity column</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdefaultvalue">
<code class="vis vis-public">public</code>
<code class="ret">RawValue|null</code>
<code class="sig">getDefaultValue()</code>
<span class="desc">Returns the default value to make the RBDM use the default value declared</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdescriptor">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getDescriptor()</code>
<span class="desc">Return descriptor used to connect to the active database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdialect">
<code class="vis vis-public">public</code>
<code class="ret">DialectInterface</code>
<code class="sig">getDialect()</code>
<span class="desc">Returns internal dialect instance</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdialecttype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getDialectType()</code>
<span class="desc">Returns the name of the dialect used</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getinternalhandler">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getInternalHandler()</code>
<span class="desc">Return internal PDO handler</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getnestedtransactionsavepointname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNestedTransactionSavepointName()</code>
<span class="desc">Returns the savepoint name to use for nested transactions</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getrealsqlstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getRealSQLStatement()</code>
<span class="desc">Active SQL statement in the object without replace bound parameters</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getsqlbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSQLBindTypes()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getsqlstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSQLStatement()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getsqlvariables">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSQLVariables()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getType()</code>
<span class="desc">Returns type of database system the adapter is used for</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-insert">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">insert(
    string $table,
    array $values,
    mixed $fields = null,
    mixed $dataTypes = null
)</code>
<span class="desc">Inserts data into a table using custom RDBMS SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-insertasdict">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">insertAsDict(
    string $table,
    mixed $data,
    mixed $dataTypes = null
)</code>
<span class="desc">Inserts data into a table using custom RBDM SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-isnestedtransactionswithsavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isNestedTransactionsWithSavepoints()</code>
<span class="desc">Returns if nested transactions should use savepoints</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-isundertransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isUnderTransaction()</code>
<span class="desc">Checks whether connection is under database transaction</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-lastinsertid">
<code class="vis vis-public">public</code>
<code class="ret">string|bool</code>
<code class="sig">lastInsertId( string $name = null )</code>
<span class="desc">Returns insert id for the auto_increment column inserted in the last SQL</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-limit">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">limit(
    string $sqlQuery,
    mixed $number
)</code>
<span class="desc">Appends a LIMIT clause to sqlQuery argument</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-listtables">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">listTables( string $schemaName = null )</code>
<span class="desc">List all tables on a database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-listviews">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">listViews( string $schemaName = null )</code>
<span class="desc">List all views on a database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
)</code>
<span class="desc">Modifies a table column based on a definition</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-query">
<code class="vis vis-public">public</code>
<code class="ret">ResultInterface|bool</code>
<code class="sig">query(
    string $sqlStatement,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Sends SQL statements to the database server returning the success state.</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-releasesavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">releaseSavepoint( string $name )</code>
<span class="desc">Releases given savepoint</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-rollback">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">rollback( bool $nesting = true )</code>
<span class="desc">Rollbacks the active transaction in the connection</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-rollbacksavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">rollbackSavepoint( string $name )</code>
<span class="desc">Rollbacks given savepoint</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-setnestedtransactionswithsavepoints">
<code class="vis vis-public">public</code>
<code class="ret">\Phalcon\Db\Adapter\AdapterInterface</code>
<code class="sig">setNestedTransactionsWithSavepoints( bool $nestedTransactionsWithSavepoints )</code>
<span class="desc">Set if nested transactions should use savepoints</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">sharedLock(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">Returns a SQL modified with a shared-lock clause. See the dialect&#039;s</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-supportsequences">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">supportSequences()</code>
<span class="desc">Check whether the database system requires a sequence to produce</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-supportsdefaultvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">supportsDefaultValue()</code>
<span class="desc">SQLite does not support the DEFAULT keyword</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-tableexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">tableExists(
    string $tableName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-tableoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">tableOptions(
    string $tableName,
    string $schemaName = null
)</code>
<span class="desc">Gets creation options from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-update">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">update(
    string $table,
    mixed $fields,
    mixed $values,
    mixed $whereCondition = null,
    mixed $dataTypes = null
)</code>
<span class="desc">Updates data on a table using custom RDBMS SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-updateasdict">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">updateAsDict(
    string $table,
    mixed $data,
    mixed $whereCondition = null,
    mixed $dataTypes = null
)</code>
<span class="desc">Updates data on a table using custom RBDM SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-useexplicitidvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">useExplicitIdValue()</code>
<span class="desc">Check whether the database system requires an explicit value for identity</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-viewexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">viewExists(
    string $viewName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.view</span>
</a>
</div>

### Methods

<div class="api-group">Public · 67</div>

#### `addColumn()` { #contractsdbadapteradapter-addcolumn }

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): bool;
```

Adds a column to a table

#### `addForeignKey()` { #contractsdbadapteradapter-addforeignkey }

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): bool;
```

Adds a foreign key to a table

#### `addIndex()` { #contractsdbadapteradapter-addindex }

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): bool;
```

Adds an index to a table

#### `addPrimaryKey()` { #contractsdbadapteradapter-addprimarykey }

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): bool;
```

Adds a primary key to a table

#### `affectedRows()` { #contractsdbadapteradapter-affectedrows }

```php
public function affectedRows(): int;
```

Returns the number of affected rows by the last INSERT/UPDATE/DELETE
reported by the database system

#### `begin()` { #contractsdbadapteradapter-begin }

```php
public function begin( bool $nesting = true ): bool;
```

Starts a transaction in the connection

#### `close()` { #contractsdbadapteradapter-close }

```php
public function close(): void;
```

Closes active connection returning success. Phalcon automatically closes
and destroys active connections within Phalcon\Db\Pool

#### `commit()` { #contractsdbadapteradapter-commit }

```php
public function commit( bool $nesting = true ): bool;
```

Commits the active transaction in the connection

#### `connect()` { #contractsdbadapteradapter-connect }

```php
public function connect( array $descriptor = [] ): void;
```

This method is automatically called in \Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection

#### `createSavepoint()` { #contractsdbadapteradapter-createsavepoint }

```php
public function createSavepoint( string $name ): bool;
```

Creates a new savepoint

#### `createTable()` { #contractsdbadapteradapter-createtable }

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): bool;
```

Creates a table

#### `createView()` { #contractsdbadapteradapter-createview }

```php
public function createView(
    string $viewName,
    array $definition,
    string $schemaName = null
): bool;
```

Creates a view

#### `delete()` { #contractsdbadapteradapter-delete }

```php
public function delete(
    mixed $table,
    string $whereCondition = null,
    array $placeholders = [],
    array $dataTypes = []
): bool;
```

Deletes data from a table using custom RDBMS SQL syntax

#### `describeColumns()` { #contractsdbadapteradapter-describecolumns }

```php
public function describeColumns(
    string $table,
    string $schema = null
): ColumnInterface[];
```

Returns an array of Phalcon\Db\Column objects describing a table

#### `describeIndexes()` { #contractsdbadapteradapter-describeindexes }

```php
public function describeIndexes(
    string $table,
    string $schema = null
): IndexInterface[];
```

Lists table indexes

#### `describeReferences()` { #contractsdbadapteradapter-describereferences }

```php
public function describeReferences(
    string $table,
    string $schema = null
): ReferenceInterface[];
```

Lists table references

#### `dropColumn()` { #contractsdbadapteradapter-dropcolumn }

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): bool;
```

Drops a column from a table

#### `dropForeignKey()` { #contractsdbadapteradapter-dropforeignkey }

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): bool;
```

Drops a foreign key from a table

#### `dropIndex()` { #contractsdbadapteradapter-dropindex }

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
): bool;
```

Drop an index from a table

#### `dropPrimaryKey()` { #contractsdbadapteradapter-dropprimarykey }

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): bool;
```

Drops primary key from a table

#### `dropTable()` { #contractsdbadapteradapter-droptable }

```php
public function dropTable(
    string $tableName,
    string $schemaName = null,
    bool $ifExists = true
): bool;
```

Drops a table from a schema/database

#### `dropView()` { #contractsdbadapteradapter-dropview }

```php
public function dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
): bool;
```

Drops a view

#### `escapeIdentifier()` { #contractsdbadapteradapter-escapeidentifier }

```php
public function escapeIdentifier( mixed $identifier ): string;
```

Escapes a column/table/schema name

#### `escapeString()` { #contractsdbadapteradapter-escapestring }

```php
public function escapeString( string $str ): string;
```

Escapes a value to avoid SQL injections

#### `execute()` { #contractsdbadapteradapter-execute }

```php
public function execute(
    string $sqlStatement,
    array $bindParams = [],
    array $bindTypes = []
): bool;
```

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server does not
return any rows

#### `fetchAll()` { #contractsdbadapteradapter-fetchall }

```php
public function fetchAll(
    string $sqlQuery,
    int $fetchMode = 2,
    array $bindParams = [],
    array $bindTypes = []
): array;
```

Dumps the complete result of a query into an array

#### `fetchColumn()` { #contractsdbadapteradapter-fetchcolumn }

```php
public function fetchColumn(
    string $sqlQuery,
    array $placeholders = [],
    mixed $column = 0
): string|bool;
```

Returns the n'th field of first row in a SQL query result

```php
// Getting count of robots
$robotsCount = $connection->fetchColumn("SELECT COUNT(*) FROM robots");
print_r($robotsCount);

// Getting name of last edited robot
$robot = $connection->fetchColumn(
    "SELECT id, name FROM robots ORDER BY modified DESC",
    1
);
print_r($robot);
```

#### `fetchOne()` { #contractsdbadapteradapter-fetchone }

```php
public function fetchOne(
    string $sqlQuery,
    int $fetchMode = 2,
    array $bindParams = [],
    array $bindTypes = []
): array;
```

Returns the first row in a SQL query result

#### `forUpdate()` { #contractsdbadapteradapter-forupdate }

```php
public function forUpdate(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword - pass `Dialect::LOCK_NOWAIT`
or `Dialect::LOCK_SKIP_LOCKED` (or leave as `Dialect::LOCK_NONE`).

#### `getColumnDefinition()` { #contractsdbadapteradapter-getcolumndefinition }

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Returns the SQL column definition from a column

#### `getColumnList()` { #contractsdbadapteradapter-getcolumnlist }

```php
public function getColumnList( mixed $columnList ): string;
```

Gets a list of columns

#### `getConnectionId()` { #contractsdbadapteradapter-getconnectionid }

```php
public function getConnectionId(): int;
```

Gets the active connection unique identifier

#### `getDefaultIdValue()` { #contractsdbadapteradapter-getdefaultidvalue }

```php
public function getDefaultIdValue(): RawValue;
```

Return the default identity value to insert in an identity column

#### `getDefaultValue()` { #contractsdbadapteradapter-getdefaultvalue }

```php
public function getDefaultValue(): RawValue|null;
```

Returns the default value to make the RBDM use the default value declared
in the table definition

```php
// Inserting a new robot with a valid default value for the column 'year'
$success = $connection->insert(
    "robots",
    [
        "Astro Boy",
        $connection->getDefaultValue()
    ],
    [
        "name",
        "year",
    ]
);
```

@todo Return NULL if this is not supported by the adapter

#### `getDescriptor()` { #contractsdbadapteradapter-getdescriptor }

```php
public function getDescriptor(): array;
```

Return descriptor used to connect to the active database

#### `getDialect()` { #contractsdbadapteradapter-getdialect }

```php
public function getDialect(): DialectInterface;
```

Returns internal dialect instance

#### `getDialectType()` { #contractsdbadapteradapter-getdialecttype }

```php
public function getDialectType(): string;
```

Returns the name of the dialect used

#### `getInternalHandler()` { #contractsdbadapteradapter-getinternalhandler }

```php
public function getInternalHandler(): mixed;
```

Return internal PDO handler

#### `getNestedTransactionSavepointName()` { #contractsdbadapteradapter-getnestedtransactionsavepointname }

```php
public function getNestedTransactionSavepointName(): string;
```

Returns the savepoint name to use for nested transactions

#### `getRealSQLStatement()` { #contractsdbadapteradapter-getrealsqlstatement }

```php
public function getRealSQLStatement(): string;
```

Active SQL statement in the object without replace bound parameters

#### `getSQLBindTypes()` { #contractsdbadapteradapter-getsqlbindtypes }

```php
public function getSQLBindTypes(): array;
```

Active SQL statement in the object

#### `getSQLStatement()` { #contractsdbadapteradapter-getsqlstatement }

```php
public function getSQLStatement(): string;
```

Active SQL statement in the object

#### `getSQLVariables()` { #contractsdbadapteradapter-getsqlvariables }

```php
public function getSQLVariables(): array;
```

Active SQL statement in the object

#### `getType()` { #contractsdbadapteradapter-gettype }

```php
public function getType(): string;
```

Returns type of database system the adapter is used for

#### `insert()` { #contractsdbadapteradapter-insert }

```php
public function insert(
    string $table,
    array $values,
    mixed $fields = null,
    mixed $dataTypes = null
): bool;
```

Inserts data into a table using custom RDBMS SQL syntax

#### `insertAsDict()` { #contractsdbadapteradapter-insertasdict }

```php
public function insertAsDict(
    string $table,
    mixed $data,
    mixed $dataTypes = null
): bool;
```

Inserts data into a table using custom RBDM SQL syntax

```php
// Inserting a new robot
$success = $connection->insertAsDict(
    "robots",
    [
        "name" => "Astro Boy",
        "year" => 1952,
    ]
);

// Next SQL sentence is sent to the database system
INSERT INTO `robots` (`name`, `year`) VALUES ("Astro boy", 1952);
```

#### `isNestedTransactionsWithSavepoints()` { #contractsdbadapteradapter-isnestedtransactionswithsavepoints }

```php
public function isNestedTransactionsWithSavepoints(): bool;
```

Returns if nested transactions should use savepoints

#### `isUnderTransaction()` { #contractsdbadapteradapter-isundertransaction }

```php
public function isUnderTransaction(): bool;
```

Checks whether connection is under database transaction

#### `lastInsertId()` { #contractsdbadapteradapter-lastinsertid }

```php
public function lastInsertId( string $name = null ): string|bool;
```

Returns insert id for the auto_increment column inserted in the last SQL
statement

#### `limit()` { #contractsdbadapteradapter-limit }

```php
public function limit(
    string $sqlQuery,
    mixed $number
): string;
```

Appends a LIMIT clause to sqlQuery argument

#### `listTables()` { #contractsdbadapteradapter-listtables }

```php
public function listTables( string $schemaName = null ): array;
```

List all tables on a database

#### `listViews()` { #contractsdbadapteradapter-listviews }

```php
public function listViews( string $schemaName = null ): array;
```

List all views on a database

#### `modifyColumn()` { #contractsdbadapteradapter-modifycolumn }

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
): bool;
```

Modifies a table column based on a definition

#### `query()` { #contractsdbadapteradapter-query }

```php
public function query(
    string $sqlStatement,
    array $bindParams = [],
    array $bindTypes = []
): ResultInterface|bool;
```

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server returns
rows

#### `releaseSavepoint()` { #contractsdbadapteradapter-releasesavepoint }

```php
public function releaseSavepoint( string $name ): bool;
```

Releases given savepoint

#### `rollback()` { #contractsdbadapteradapter-rollback }

```php
public function rollback( bool $nesting = true ): bool;
```

Rollbacks the active transaction in the connection

#### `rollbackSavepoint()` { #contractsdbadapteradapter-rollbacksavepoint }

```php
public function rollbackSavepoint( string $name ): bool;
```

Rollbacks given savepoint

#### `setNestedTransactionsWithSavepoints()` { #contractsdbadapteradapter-setnestedtransactionswithsavepoints }

```php
public function setNestedTransactionsWithSavepoints( bool $nestedTransactionsWithSavepoints ): \Phalcon\Db\Adapter\AdapterInterface;
```

Set if nested transactions should use savepoints

#### `sharedLock()` { #contractsdbadapteradapter-sharedlock }

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a shared-lock clause. See the dialect's
`sharedLock()` for per-engine semantics. The optional `modifier` is
passed straight through (use `Dialect::LOCK_NOWAIT` /
`Dialect::LOCK_SKIP_LOCKED` for PostgreSQL).

#### `supportSequences()` { #contractsdbadapteradapter-supportsequences }

```php
public function supportSequences(): bool;
```

Check whether the database system requires a sequence to produce
auto-numeric values

#### `supportsDefaultValue()` { #contractsdbadapteradapter-supportsdefaultvalue }

```php
public function supportsDefaultValue(): bool;
```

SQLite does not support the DEFAULT keyword

@deprecated Will re removed in the next version

#### `tableExists()` { #contractsdbadapteradapter-tableexists }

```php
public function tableExists(
    string $tableName,
    string $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.table

#### `tableOptions()` { #contractsdbadapteradapter-tableoptions }

```php
public function tableOptions(
    string $tableName,
    string $schemaName = null
): array;
```

Gets creation options from a table

#### `update()` { #contractsdbadapteradapter-update }

```php
public function update(
    string $table,
    mixed $fields,
    mixed $values,
    mixed $whereCondition = null,
    mixed $dataTypes = null
): bool;
```

Updates data on a table using custom RDBMS SQL syntax

#### `updateAsDict()` { #contractsdbadapteradapter-updateasdict }

```php
public function updateAsDict(
    string $table,
    mixed $data,
    mixed $whereCondition = null,
    mixed $dataTypes = null
): bool;
```

Updates data on a table using custom RBDM SQL syntax
Another, more convenient syntax

```php
// Updating existing robot
$success = $connection->updateAsDict(
    "robots",
    [
        "name" => "New Astro Boy",
    ],
    "id = 101"
);

// Next SQL sentence is sent to the database system
UPDATE `robots` SET `name` = "Astro boy" WHERE id = 101
```

#### `useExplicitIdValue()` { #contractsdbadapteradapter-useexplicitidvalue }

```php
public function useExplicitIdValue(): bool;
```

Check whether the database system requires an explicit value for identity
columns

#### `viewExists()` { #contractsdbadapteradapter-viewexists }

```php
public function viewExists(
    string $viewName,
    string $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.view


## Contracts\Db\Check

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Check.zep){ .src-btn }

Canonical contract for Phalcon\Db\Check.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Check`**
    - [`Phalcon\Db\CheckInterface`](phalcon_db.md#dbcheckinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbcheck-getexpression">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getExpression()</code>
<span class="desc">Gets the CHECK expression (the SQL boolean predicate).</span>
</a>
<a class="api-item" href="#contractsdbcheck-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Gets the constraint name. An empty string indicates an unnamed CHECK</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getExpression()` { #contractsdbcheck-getexpression }

```php
public function getExpression(): string;
```

Gets the CHECK expression (the SQL boolean predicate).

#### `getName()` { #contractsdbcheck-getname }

```php
public function getName(): string;
```

Gets the constraint name. An empty string indicates an unnamed CHECK
constraint - the dialect will emit the clause without a `CONSTRAINT`
prefix in that case.


## Contracts\Db\Column

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Column.zep){ .src-btn }

Canonical contract for Phalcon\Db\Column.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - getGenerationExpression() : string | null
             - isArray()                 : bool
             - isGenerated()             : bool
             - isGenerationStored()      : bool
             - isInvisible()             : bool

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Column`**
    - [`Phalcon\Db\ColumnInterface`](phalcon_db.md#dbcolumninterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbcolumn-getafterposition">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getAfterPosition()</code>
<span class="desc">Check whether field absolute to position in table</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getbindtype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getBindType()</code>
<span class="desc">Returns the type of bind handling</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getdefault">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getDefault()</code>
<span class="desc">Returns default value of column</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Returns column name</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getscale">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getScale()</code>
<span class="desc">Returns column scale</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getsize">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig">getSize()</code>
<span class="desc">Returns column size</span>
</a>
<a class="api-item" href="#contractsdbcolumn-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig">getType()</code>
<span class="desc">Returns column type</span>
</a>
<a class="api-item" href="#contractsdbcolumn-gettypereference">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getTypeReference()</code>
<span class="desc">Returns column type reference</span>
</a>
<a class="api-item" href="#contractsdbcolumn-gettypevalues">
<code class="vis vis-public">public</code>
<code class="ret">array|string|int</code>
<code class="sig">getTypeValues()</code>
<span class="desc">Returns column type values</span>
</a>
<a class="api-item" href="#contractsdbcolumn-hasdefault">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasDefault()</code>
<span class="desc">Check whether column has default value</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isautoincrement">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isAutoIncrement()</code>
<span class="desc">Auto-Increment</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isfirst">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isFirst()</code>
<span class="desc">Check whether column have first position in table</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isnotnull">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isNotNull()</code>
<span class="desc">Not null</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isnumeric">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isNumeric()</code>
<span class="desc">Check whether column have an numeric type</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isprimary">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isPrimary()</code>
<span class="desc">Column is part of the primary key?</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isunsigned">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isUnsigned()</code>
<span class="desc">Returns true if number column is unsigned</span>
</a>
</div>

### Methods

<div class="api-group">Public · 16</div>

#### `getAfterPosition()` { #contractsdbcolumn-getafterposition }

```php
public function getAfterPosition(): string|null;
```

Check whether field absolute to position in table

#### `getBindType()` { #contractsdbcolumn-getbindtype }

```php
public function getBindType(): int;
```

Returns the type of bind handling

#### `getDefault()` { #contractsdbcolumn-getdefault }

```php
public function getDefault(): mixed;
```

Returns default value of column

#### `getName()` { #contractsdbcolumn-getname }

```php
public function getName(): string;
```

Returns column name

#### `getScale()` { #contractsdbcolumn-getscale }

```php
public function getScale(): int;
```

Returns column scale

#### `getSize()` { #contractsdbcolumn-getsize }

```php
public function getSize(): int|string;
```

Returns column size

#### `getType()` { #contractsdbcolumn-gettype }

```php
public function getType(): int|string;
```

Returns column type

#### `getTypeReference()` { #contractsdbcolumn-gettypereference }

```php
public function getTypeReference(): int;
```

Returns column type reference

#### `getTypeValues()` { #contractsdbcolumn-gettypevalues }

```php
public function getTypeValues(): array|string|int;
```

Returns column type values

#### `hasDefault()` { #contractsdbcolumn-hasdefault }

```php
public function hasDefault(): bool;
```

Check whether column has default value

#### `isAutoIncrement()` { #contractsdbcolumn-isautoincrement }

```php
public function isAutoIncrement(): bool;
```

Auto-Increment

#### `isFirst()` { #contractsdbcolumn-isfirst }

```php
public function isFirst(): bool;
```

Check whether column have first position in table

#### `isNotNull()` { #contractsdbcolumn-isnotnull }

```php
public function isNotNull(): bool;
```

Not null

#### `isNumeric()` { #contractsdbcolumn-isnumeric }

```php
public function isNumeric(): bool;
```

Check whether column have an numeric type

#### `isPrimary()` { #contractsdbcolumn-isprimary }

```php
public function isPrimary(): bool;
```

Column is part of the primary key?

#### `isUnsigned()` { #contractsdbcolumn-isunsigned }

```php
public function isUnsigned(): bool;
```

Returns true if number column is unsigned


## Contracts\Db\Dialect

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Dialect.zep){ .src-btn }

Canonical contract for Phalcon\Db dialects.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - addCheck()                : string
             - createMaterializedView()  : string
             - dropCheck()               : string
             - dropMaterializedView()    : string
             - onConflictUpdate()        : string
             - refreshMaterializedView() : string
             - returning()               : string

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Dialect`**
    - [`Phalcon\Db\DialectInterface`](phalcon_db.md#dbdialectinterface)

</div>

__Uses__ `Phalcon\Db\ColumnInterface` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\ReferenceInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbdialect-addcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
)</code>
<span class="desc">Generates SQL to add a column to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-addindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-addprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Generates SQL to add the primary key to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-createsavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createSavepoint( string $name )</code>
<span class="desc">Generate SQL to create a new savepoint</span>
</a>
<a class="api-item" href="#contractsdbdialect-createtable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createTable(
    string $tableName,
    string $schemaName,
    array $definition
)</code>
<span class="desc">Generates SQL to create a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-createview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createView(
    string $viewName,
    array $definition,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL to create a view</span>
</a>
<a class="api-item" href="#contractsdbdialect-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeColumns(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL to describe a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeIndexes(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL to query indexes on a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeReferences(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL to query foreign keys on a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
)</code>
<span class="desc">Generates SQL to delete a column from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
)</code>
<span class="desc">Generates SQL to delete a foreign key from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
)</code>
<span class="desc">Generates SQL to delete an index from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropPrimaryKey(
    string $tableName,
    string $schemaName
)</code>
<span class="desc">Generates SQL to delete primary key from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-droptable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropTable(
    string $tableName,
    string $schemaName,
    bool $ifExists = true
)</code>
<span class="desc">Generates SQL to drop a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Generates SQL to drop a view</span>
</a>
<a class="api-item" href="#contractsdbdialect-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">forUpdate(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`</span>
</a>
<a class="api-item" href="#contractsdbdialect-getcolumndefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getColumnDefinition( ColumnInterface $column )</code>
<span class="desc">Gets the column name in RDBMS</span>
</a>
<a class="api-item" href="#contractsdbdialect-getcolumnlist">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getColumnList( array $columnList )</code>
<span class="desc">Gets a list of columns</span>
</a>
<a class="api-item" href="#contractsdbdialect-getcustomfunctions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getCustomFunctions()</code>
<span class="desc">Returns registered functions</span>
</a>
<a class="api-item" href="#contractsdbdialect-getsqlexpression">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSqlExpression(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Transforms an intermediate representation for an expression into a</span>
</a>
<a class="api-item" href="#contractsdbdialect-limit">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">limit(
    string $sqlQuery,
    mixed $number
)</code>
<span class="desc">Generates the SQL for LIMIT clause</span>
</a>
<a class="api-item" href="#contractsdbdialect-listtables">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">listTables( string $schemaName = null )</code>
<span class="desc">List all tables in database</span>
</a>
<a class="api-item" href="#contractsdbdialect-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
)</code>
<span class="desc">Generates SQL to modify a column in a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-registercustomfunction">
<code class="vis vis-public">public</code>
<code class="ret">\Phalcon\Db\Dialect</code>
<code class="sig">registerCustomFunction(
    string $name,
    callable $customFunction
)</code>
<span class="desc">Registers custom SQL functions</span>
</a>
<a class="api-item" href="#contractsdbdialect-releasesavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">releaseSavepoint( string $name )</code>
<span class="desc">Generate SQL to release a savepoint</span>
</a>
<a class="api-item" href="#contractsdbdialect-rollbacksavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">rollbackSavepoint( string $name )</code>
<span class="desc">Generate SQL to rollback a savepoint</span>
</a>
<a class="api-item" href="#contractsdbdialect-select">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">select( array $definition )</code>
<span class="desc">Builds a SELECT statement</span>
</a>
<a class="api-item" href="#contractsdbdialect-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">sharedLock(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">Returns a SQL modified with a shared-lock clause. MySQL emits</span>
</a>
<a class="api-item" href="#contractsdbdialect-supportsreleasesavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">supportsReleaseSavepoints()</code>
<span class="desc">Checks whether the platform supports releasing savepoints.</span>
</a>
<a class="api-item" href="#contractsdbdialect-supportssavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">supportsSavepoints()</code>
<span class="desc">Checks whether the platform supports savepoints</span>
</a>
<a class="api-item" href="#contractsdbdialect-tableexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">tableExists(
    string $tableName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.table</span>
</a>
<a class="api-item" href="#contractsdbdialect-tableoptions">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">tableOptions(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates the SQL to describe the table creation options</span>
</a>
<a class="api-item" href="#contractsdbdialect-viewexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">viewExists(
    string $viewName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.view</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `LOCK_NONE = ""` `string`

    No row-lock modifier - the default behavior for `forUpdate()`.

-   `LOCK_NOWAIT = "NOWAIT"` `string`

    Append `NOWAIT` to the `FOR UPDATE` clause - the query fails immediately
    if a row it needs is locked instead of blocking. MySQL 8.0+ and
    PostgreSQL 9.5+ recognize this. SQLite has no row-level locking and
    silently ignores the modifier.

-   `LOCK_SKIP_LOCKED = "SKIP LOCKED"` `string`

    Append `SKIP LOCKED` to the `FOR UPDATE` clause - the query returns
    rows that are not currently locked and silently skips ones that are.
    MySQL 8.0+ and PostgreSQL 9.5+ recognize this. SQLite ignores it.

</div>

### Methods

<div class="api-group">Public · 34</div>

#### `addColumn()` { #contractsdbdialect-addcolumn }

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): string;
```

Generates SQL to add a column to a table

#### `addForeignKey()` { #contractsdbdialect-addforeignkey }

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): string;
```

Generates SQL to add an index to a table

#### `addIndex()` { #contractsdbdialect-addindex }

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add an index to a table

#### `addPrimaryKey()` { #contractsdbdialect-addprimarykey }

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add the primary key to a table

#### `createSavepoint()` { #contractsdbdialect-createsavepoint }

```php
public function createSavepoint( string $name ): string;
```

Generate SQL to create a new savepoint

#### `createTable()` { #contractsdbdialect-createtable }

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): string;
```

Generates SQL to create a table

#### `createView()` { #contractsdbdialect-createview }

```php
public function createView(
    string $viewName,
    array $definition,
    string $schemaName = null
): string;
```

Generates SQL to create a view

#### `describeColumns()` { #contractsdbdialect-describecolumns }

```php
public function describeColumns(
    string $table,
    string $schema = null
): string;
```

Generates SQL to describe a table

#### `describeIndexes()` { #contractsdbdialect-describeindexes }

```php
public function describeIndexes(
    string $table,
    string $schema = null
): string;
```

Generates SQL to query indexes on a table

#### `describeReferences()` { #contractsdbdialect-describereferences }

```php
public function describeReferences(
    string $table,
    string $schema = null
): string;
```

Generates SQL to query foreign keys on a table

#### `dropColumn()` { #contractsdbdialect-dropcolumn }

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): string;
```

Generates SQL to delete a column from a table

#### `dropForeignKey()` { #contractsdbdialect-dropforeignkey }

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): string;
```

Generates SQL to delete a foreign key from a table

#### `dropIndex()` { #contractsdbdialect-dropindex }

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
): string;
```

Generates SQL to delete an index from a table

#### `dropPrimaryKey()` { #contractsdbdialect-dropprimarykey }

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to delete primary key from a table

#### `dropTable()` { #contractsdbdialect-droptable }

```php
public function dropTable(
    string $tableName,
    string $schemaName,
    bool $ifExists = true
): string;
```

Generates SQL to drop a table

#### `dropView()` { #contractsdbdialect-dropview }

```php
public function dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a view

#### `forUpdate()` { #contractsdbdialect-forupdate }

```php
public function forUpdate(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword - pass `Dialect::LOCK_NOWAIT`
or `Dialect::LOCK_SKIP_LOCKED` (or leave as `Dialect::LOCK_NONE`).

#### `getColumnDefinition()` { #contractsdbdialect-getcolumndefinition }

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in RDBMS

#### `getColumnList()` { #contractsdbdialect-getcolumnlist }

```php
public function getColumnList( array $columnList ): string;
```

Gets a list of columns

#### `getCustomFunctions()` { #contractsdbdialect-getcustomfunctions }

```php
public function getCustomFunctions(): array;
```

Returns registered functions

#### `getSqlExpression()` { #contractsdbdialect-getsqlexpression }

```php
public function getSqlExpression(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Transforms an intermediate representation for an expression into a
database system valid expression

#### `limit()` { #contractsdbdialect-limit }

```php
public function limit(
    string $sqlQuery,
    mixed $number
): string;
```

Generates the SQL for LIMIT clause

#### `listTables()` { #contractsdbdialect-listtables }

```php
public function listTables( string $schemaName = null ): string;
```

List all tables in database

#### `modifyColumn()` { #contractsdbdialect-modifycolumn }

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
): string;
```

Generates SQL to modify a column in a table

#### `registerCustomFunction()` { #contractsdbdialect-registercustomfunction }

```php
public function registerCustomFunction(
    string $name,
    callable $customFunction
): \Phalcon\Db\Dialect;
```

Registers custom SQL functions

#### `releaseSavepoint()` { #contractsdbdialect-releasesavepoint }

```php
public function releaseSavepoint( string $name ): string;
```

Generate SQL to release a savepoint

#### `rollbackSavepoint()` { #contractsdbdialect-rollbacksavepoint }

```php
public function rollbackSavepoint( string $name ): string;
```

Generate SQL to rollback a savepoint

#### `select()` { #contractsdbdialect-select }

```php
public function select( array $definition ): string;
```

Builds a SELECT statement

#### `sharedLock()` { #contractsdbdialect-sharedlock }

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a shared-lock clause. MySQL emits
`LOCK IN SHARE MODE`; PostgreSQL emits `FOR SHARE`; SQLite returns the
original query unchanged. The optional `modifier` appends a row-lock
disposition keyword (`Dialect::LOCK_NOWAIT` / `Dialect::LOCK_SKIP_LOCKED`)
for PostgreSQL - MySQL's legacy `LOCK IN SHARE MODE` does not support
modifiers, so non-empty values are silently ignored on MySQL.

#### `supportsReleaseSavepoints()` { #contractsdbdialect-supportsreleasesavepoints }

```php
public function supportsReleaseSavepoints(): bool;
```

Checks whether the platform supports releasing savepoints.

#### `supportsSavepoints()` { #contractsdbdialect-supportssavepoints }

```php
public function supportsSavepoints(): bool;
```

Checks whether the platform supports savepoints

#### `tableExists()` { #contractsdbdialect-tableexists }

```php
public function tableExists(
    string $tableName,
    string $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.table

#### `tableOptions()` { #contractsdbdialect-tableoptions }

```php
public function tableOptions(
    string $table,
    string $schema = null
): string;
```

Generates the SQL to describe the table creation options

#### `viewExists()` { #contractsdbdialect-viewexists }

```php
public function viewExists(
    string $viewName,
    string $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.view


## Contracts\Db\Index

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Index.zep){ .src-btn }

Canonical contract for Phalcon\Db\Index.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - getDirections() : array
             - getWhere()      : string
             - isConcurrent()  : bool
             - isInvisible()   : bool

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Index`**
    - [`Phalcon\Db\IndexInterface`](phalcon_db.md#dbindexinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbindex-getcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getColumns()</code>
<span class="desc">Gets the columns that corresponds the index</span>
</a>
<a class="api-item" href="#contractsdbindex-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Gets the index name</span>
</a>
<a class="api-item" href="#contractsdbindex-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getType()</code>
<span class="desc">Gets the index type</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `getColumns()` { #contractsdbindex-getcolumns }

```php
public function getColumns(): array;
```

Gets the columns that corresponds the index

#### `getName()` { #contractsdbindex-getname }

```php
public function getName(): string;
```

Gets the index name

#### `getType()` { #contractsdbindex-gettype }

```php
public function getType(): string;
```

Gets the index type


## Contracts\Db\Reference

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Reference.zep){ .src-btn }

Canonical contract for Phalcon\Db\Reference.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Reference`**
    - [`Phalcon\Db\ReferenceInterface`](phalcon_db.md#dbreferenceinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbreference-getcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getColumns()</code>
<span class="desc">Gets local columns which reference is based</span>
</a>
<a class="api-item" href="#contractsdbreference-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Gets the index name</span>
</a>
<a class="api-item" href="#contractsdbreference-getondelete">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getOnDelete()</code>
<span class="desc">Gets the referenced on delete</span>
</a>
<a class="api-item" href="#contractsdbreference-getonupdate">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getOnUpdate()</code>
<span class="desc">Gets the referenced on update</span>
</a>
<a class="api-item" href="#contractsdbreference-getreferencedcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getReferencedColumns()</code>
<span class="desc">Gets referenced columns</span>
</a>
<a class="api-item" href="#contractsdbreference-getreferencedschema">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getReferencedSchema()</code>
<span class="desc">Gets the schema where referenced table is</span>
</a>
<a class="api-item" href="#contractsdbreference-getreferencedtable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getReferencedTable()</code>
<span class="desc">Gets the referenced table</span>
</a>
<a class="api-item" href="#contractsdbreference-getschemaname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getSchemaName()</code>
<span class="desc">Gets the schema where referenced table is</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `getColumns()` { #contractsdbreference-getcolumns }

```php
public function getColumns(): array;
```

Gets local columns which reference is based

#### `getName()` { #contractsdbreference-getname }

```php
public function getName(): string;
```

Gets the index name

#### `getOnDelete()` { #contractsdbreference-getondelete }

```php
public function getOnDelete(): string|null;
```

Gets the referenced on delete

#### `getOnUpdate()` { #contractsdbreference-getonupdate }

```php
public function getOnUpdate(): string|null;
```

Gets the referenced on update

#### `getReferencedColumns()` { #contractsdbreference-getreferencedcolumns }

```php
public function getReferencedColumns(): array;
```

Gets referenced columns

#### `getReferencedSchema()` { #contractsdbreference-getreferencedschema }

```php
public function getReferencedSchema(): string|null;
```

Gets the schema where referenced table is

#### `getReferencedTable()` { #contractsdbreference-getreferencedtable }

```php
public function getReferencedTable(): string;
```

Gets the referenced table

#### `getSchemaName()` { #contractsdbreference-getschemaname }

```php
public function getSchemaName(): string|null;
```

Gets the schema where referenced table is


## Contracts\Db\Result

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Result.zep){ .src-btn }

Canonical contract for Phalcon\Db result objects.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Db\Result`**
    - [`Phalcon\Db\ResultInterface`](phalcon_db.md#dbresultinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbresult-dataseek">
<code class="vis vis-public">public</code>
<code class="sig">dataSeek( int $number )</code>
<span class="desc">Moves internal resultset cursor to another position letting us to fetch a</span>
</a>
<a class="api-item" href="#contractsdbresult-execute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">execute()</code>
<span class="desc">Allows to execute the statement again. Some database systems don&#039;t</span>
</a>
<a class="api-item" href="#contractsdbresult-fetch">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">fetch()</code>
<span class="desc">Fetches an array/object of strings that corresponds to the fetched row,</span>
</a>
<a class="api-item" href="#contractsdbresult-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchAll()</code>
<span class="desc">Returns an array of arrays containing all the records in the result. This</span>
</a>
<a class="api-item" href="#contractsdbresult-fetcharray">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">fetchArray()</code>
<span class="desc">Returns an array of strings that corresponds to the fetched row, or FALSE</span>
</a>
<a class="api-item" href="#contractsdbresult-getinternalresult">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement</code>
<code class="sig">getInternalResult()</code>
<span class="desc">Gets the internal PDO result object</span>
</a>
<a class="api-item" href="#contractsdbresult-numrows">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">numRows()</code>
<span class="desc">Gets number of rows returned by a resultset</span>
</a>
<a class="api-item" href="#contractsdbresult-setfetchmode">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">setFetchMode( int $fetchMode )</code>
<span class="desc">Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `dataSeek()` { #contractsdbresult-dataseek }

```php
public function dataSeek( int $number );
```

Moves internal resultset cursor to another position letting us to fetch a
certain row

#### `execute()` { #contractsdbresult-execute }

```php
public function execute(): bool;
```

Allows to execute the statement again. Some database systems don't
support scrollable cursors. So, as cursors are forward only, we need to
execute the cursor again to fetch rows from the beginning

#### `fetch()` { #contractsdbresult-fetch }

```php
public function fetch(): mixed;
```

Fetches an array/object of strings that corresponds to the fetched row,
or FALSE if there are no more rows. This method is affected by the active
fetch flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

#### `fetchAll()` { #contractsdbresult-fetchall }

```php
public function fetchAll(): array;
```

Returns an array of arrays containing all the records in the result. This
method is affected by the active fetch flag set using
`Phalcon\Db\Result\Pdo::setFetchMode()`

#### `fetchArray()` { #contractsdbresult-fetcharray }

```php
public function fetchArray(): mixed;
```

Returns an array of strings that corresponds to the fetched row, or FALSE
if there are no more rows. This method is affected by the active fetch
flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

#### `getInternalResult()` { #contractsdbresult-getinternalresult }

```php
public function getInternalResult(): \PDOStatement;
```

Gets the internal PDO result object

#### `numRows()` { #contractsdbresult-numrows }

```php
public function numRows(): int;
```

Gets number of rows returned by a resultset

#### `setFetchMode()` { #contractsdbresult-setfetchmode }

```php
public function setFetchMode( int $fetchMode ): bool;
```

Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()


## Contracts\Encryption\Security\CryptoUtils

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/CryptoUtils.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Security\CryptoUtils`**
    - [`Phalcon\Contracts\Encryption\Security\Security`](#contractsencryptionsecuritysecurity)

</div>

__Uses__ `Phalcon\Encryption\Security\Random`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-computehmac">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">computeHmac(
    string $data,
    string $key,
    string $algorithm,
    bool $raw = false
)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-getrandom">
<code class="vis vis-public">public</code>
<code class="ret">Random</code>
<code class="sig">getRandom()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-getrandombytes">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getRandomBytes()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-getsaltbytes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSaltBytes( int $numberBytes = 0 )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-setrandombytes">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig">setRandomBytes( int $randomBytes )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `computeHmac()` { #contractsencryptionsecuritycryptoutils-computehmac }

```php
public function computeHmac(
    string $data,
    string $key,
    string $algorithm,
    bool $raw = false
): string;
```

#### `getRandom()` { #contractsencryptionsecuritycryptoutils-getrandom }

```php
public function getRandom(): Random;
```

#### `getRandomBytes()` { #contractsencryptionsecuritycryptoutils-getrandombytes }

```php
public function getRandomBytes(): int;
```

#### `getSaltBytes()` { #contractsencryptionsecuritycryptoutils-getsaltbytes }

```php
public function getSaltBytes( int $numberBytes = 0 ): string;
```

#### `setRandomBytes()` { #contractsencryptionsecuritycryptoutils-setrandombytes }

```php
public function setRandomBytes( int $randomBytes ): Security;
```


## Contracts\Encryption\Security\CsrfProtection

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/CsrfProtection.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Security\CsrfProtection`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-checktoken">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">checkToken(
    string $tokenKey = null,
    mixed $tokenValue = null,
    bool $destroyIfValid = true
)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-destroytoken">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig">destroyToken()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-getrequesttoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getRequestToken()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-getsessiontoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getSessionToken()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-gettoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getToken()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-gettokenkey">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getTokenKey()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `checkToken()` { #contractsencryptionsecuritycsrfprotection-checktoken }

```php
public function checkToken(
    string $tokenKey = null,
    mixed $tokenValue = null,
    bool $destroyIfValid = true
): bool;
```

#### `destroyToken()` { #contractsencryptionsecuritycsrfprotection-destroytoken }

```php
public function destroyToken(): Security;
```

#### `getRequestToken()` { #contractsencryptionsecuritycsrfprotection-getrequesttoken }

```php
public function getRequestToken(): string|null;
```

#### `getSessionToken()` { #contractsencryptionsecuritycsrfprotection-getsessiontoken }

```php
public function getSessionToken(): string|null;
```

#### `getToken()` { #contractsencryptionsecuritycsrfprotection-gettoken }

```php
public function getToken(): string|null;
```

#### `getTokenKey()` { #contractsencryptionsecuritycsrfprotection-gettokenkey }

```php
public function getTokenKey(): string|null;
```


## Contracts\Encryption\Security\PasswordSecurity

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/PasswordSecurity.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Encryption\Security\PasswordSecurity`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-checkhash">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">checkHash(
    string $password,
    string $passwordHash,
    int $maxPassLength = 0
)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-getdefaulthash">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getDefaultHash()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-gethashinformation">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getHashInformation( string $hash )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-getworkfactor">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getWorkFactor()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-hash">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">hash(
    string $password,
    array $options = []
)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-islegacyhash">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isLegacyHash( string $passwordHash )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-setdefaulthash">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig">setDefaultHash( int $defaultHash )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-setworkfactor">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig">setWorkFactor( int $workFactor )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `checkHash()` { #contractsencryptionsecuritypasswordsecurity-checkhash }

```php
public function checkHash(
    string $password,
    string $passwordHash,
    int $maxPassLength = 0
): bool;
```

#### `getDefaultHash()` { #contractsencryptionsecuritypasswordsecurity-getdefaulthash }

```php
public function getDefaultHash(): int;
```

#### `getHashInformation()` { #contractsencryptionsecuritypasswordsecurity-gethashinformation }

```php
public function getHashInformation( string $hash ): array;
```

#### `getWorkFactor()` { #contractsencryptionsecuritypasswordsecurity-getworkfactor }

```php
public function getWorkFactor(): int;
```

#### `hash()` { #contractsencryptionsecuritypasswordsecurity-hash }

```php
public function hash(
    string $password,
    array $options = []
): string;
```

#### `isLegacyHash()` { #contractsencryptionsecuritypasswordsecurity-islegacyhash }

```php
public function isLegacyHash( string $passwordHash ): bool;
```

#### `setDefaultHash()` { #contractsencryptionsecuritypasswordsecurity-setdefaulthash }

```php
public function setDefaultHash( int $defaultHash ): Security;
```

#### `setWorkFactor()` { #contractsencryptionsecuritypasswordsecurity-setworkfactor }

```php
public function setWorkFactor( int $workFactor ): Security;
```


## Contracts\Encryption\Security\Security

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/Security.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Encryption\Security\CryptoUtils`](#contractsencryptionsecuritycryptoutils)
    - **`Phalcon\Contracts\Encryption\Security\Security`** — extends [`Phalcon\Contracts\Encryption\Security\CryptoUtils`](#contractsencryptionsecuritycryptoutils), [`Phalcon\Contracts\Encryption\Security\CsrfProtection`](#contractsencryptionsecuritycsrfprotection), [`Phalcon\Contracts\Encryption\Security\PasswordSecurity`](#contractsencryptionsecuritypasswordsecurity)

</div>


## Contracts\Events\Event

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Event.zep){ .src-btn }

Canonical contract for Phalcon\Events\Event.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\Event`**
    - [`Phalcon\Events\EventInterface`](phalcon_events.md#eventseventinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventsevent-getdata">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getData()</code>
<span class="desc">Gets event data</span>
</a>
<a class="api-item" href="#contractseventsevent-gettype">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getType()</code>
<span class="desc">Gets event type</span>
</a>
<a class="api-item" href="#contractseventsevent-iscancelable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isCancelable()</code>
<span class="desc">Check whether the event is cancelable</span>
</a>
<a class="api-item" href="#contractseventsevent-isstopped">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isStopped()</code>
<span class="desc">Check whether the event is currently stopped</span>
</a>
<a class="api-item" href="#contractseventsevent-setdata">
<code class="vis vis-public">public</code>
<code class="ret">Event</code>
<code class="sig">setData( mixed $data = null )</code>
<span class="desc">Sets event data</span>
</a>
<a class="api-item" href="#contractseventsevent-settype">
<code class="vis vis-public">public</code>
<code class="ret">Event</code>
<code class="sig">setType( string $type )</code>
<span class="desc">Sets event type</span>
</a>
<a class="api-item" href="#contractseventsevent-stop">
<code class="vis vis-public">public</code>
<code class="ret">Event</code>
<code class="sig">stop()</code>
<span class="desc">Stops the event preventing propagation</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `getData()` { #contractseventsevent-getdata }

```php
public function getData(): mixed;
```

Gets event data

#### `getType()` { #contractseventsevent-gettype }

```php
public function getType(): mixed;
```

Gets event type

#### `isCancelable()` { #contractseventsevent-iscancelable }

```php
public function isCancelable(): bool;
```

Check whether the event is cancelable

#### `isStopped()` { #contractseventsevent-isstopped }

```php
public function isStopped(): bool;
```

Check whether the event is currently stopped

#### `setData()` { #contractseventsevent-setdata }

```php
public function setData( mixed $data = null ): Event;
```

Sets event data

#### `setType()` { #contractseventsevent-settype }

```php
public function setType( string $type ): Event;
```

Sets event type

#### `stop()` { #contractseventsevent-stop }

```php
public function stop(): Event;
```

Stops the event preventing propagation


## Contracts\Events\EventsAware

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/EventsAware.zep){ .src-btn }

Canonical contract for Phalcon\Events\EventsAwareInterface. Implemented by
components that accept an events manager and dispatch through it.

Cross-references the legacy ManagerInterface (not the canonical Manager
contract) to preserve LSP for the many AbstractEventsAware subclasses that
already type-hint ManagerInterface. ManagerInterface extends Manager, so
this remains type-compatible with any code that needs the canonical surface.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\EventsAware`**
    - [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)

</div>

__Uses__ `Phalcon\Events\ManagerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventseventsaware-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal events manager</span>
</a>
<a class="api-item" href="#contractseventseventsaware-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the events manager</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getEventsManager()` { #contractseventseventsaware-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal events manager

#### `setEventsManager()` { #contractseventseventsaware-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager


## Contracts\Events\Manager

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Manager.zep){ .src-btn }

Canonical contract for Phalcon\Events\Manager.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\Manager`**
    - [`Phalcon\Events\ManagerInterface`](phalcon_events.md#eventsmanagerinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventsmanager-addsubscriber">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">addSubscriber( Subscriber $subscriber )</code>
<span class="desc">Registers an event subscriber. The subscriber&#039;s getSubscribedEvents()</span>
</a>
<a class="api-item" href="#contractseventsmanager-areprioritiesenabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">arePrioritiesEnabled()</code>
<span class="desc">Returns whether priority ordering is currently enabled.</span>
</a>
<a class="api-item" href="#contractseventsmanager-attach">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">attach(
    string $eventType,
    mixed $handler,
    int $priority = self::DEFAULT_PRIORITY
)</code>
<span class="desc">Attach a listener to the events manager.</span>
</a>
<a class="api-item" href="#contractseventsmanager-clearsubscribers">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">clearSubscribers()</code>
<span class="desc">Removes every registered subscriber and detaches each listener they</span>
</a>
<a class="api-item" href="#contractseventsmanager-collectresponses">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">collectResponses( bool $collect )</code>
<span class="desc">Toggle response collection on/off.</span>
</a>
<a class="api-item" href="#contractseventsmanager-detach">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">detach(
    string $eventType,
    mixed $handler
)</code>
<span class="desc">Detach a listener from the events manager.</span>
</a>
<a class="api-item" href="#contractseventsmanager-detachall">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">detachAll( string $type = null )</code>
<span class="desc">Removes all listeners - globally or for a single event type.</span>
</a>
<a class="api-item" href="#contractseventsmanager-enablepriorities">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">enablePriorities( bool $enablePriorities )</code>
<span class="desc">Toggle priority ordering on/off.</span>
</a>
<a class="api-item" href="#contractseventsmanager-fire">
<code class="vis vis-public">public</code>
<code class="sig">fire(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
)</code>
<span class="desc">Fires an event, notifying the active listeners.</span>
</a>
<a class="api-item" href="#contractseventsmanager-getlisteners">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getListeners( string $type )</code>
<span class="desc">Returns all listeners attached to the given event type.</span>
</a>
<a class="api-item" href="#contractseventsmanager-getresponses">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getResponses()</code>
<span class="desc">Returns the responses recorded during the last fire (when collecting).</span>
</a>
<a class="api-item" href="#contractseventsmanager-getsubscribers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSubscribers()</code>
<span class="desc">Returns the list of registered subscriber instances.</span>
</a>
<a class="api-item" href="#contractseventsmanager-haslisteners">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasListeners( string $type )</code>
<span class="desc">Check whether the given event type has any listeners.</span>
</a>
<a class="api-item" href="#contractseventsmanager-iscollecting">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isCollecting()</code>
<span class="desc">Check whether the manager is currently collecting responses.</span>
</a>
<a class="api-item" href="#contractseventsmanager-isvalidhandler">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isValidHandler( mixed $handler )</code>
<span class="desc">Returns true when the given handler is an object or callable.</span>
</a>
<a class="api-item" href="#contractseventsmanager-removesubscriber">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">removeSubscriber( Subscriber $subscriber )</code>
<span class="desc">Removes a previously registered subscriber. Detaches every listener the</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `DEFAULT_PRIORITY = 100` `int`

</div>

### Methods

<div class="api-group">Public · 16</div>

#### `addSubscriber()` { #contractseventsmanager-addsubscriber }

```php
public function addSubscriber( Subscriber $subscriber ): void;
```

Registers an event subscriber. The subscriber's getSubscribedEvents()
map is parsed and each entry is attached through the regular listener
pipeline.

#### `arePrioritiesEnabled()` { #contractseventsmanager-areprioritiesenabled }

```php
public function arePrioritiesEnabled(): bool;
```

Returns whether priority ordering is currently enabled.

#### `attach()` { #contractseventsmanager-attach }

```php
public function attach(
    string $eventType,
    mixed $handler,
    int $priority = self::DEFAULT_PRIORITY
): void;
```

Attach a listener to the events manager.

#### `clearSubscribers()` { #contractseventsmanager-clearsubscribers }

```php
public function clearSubscribers(): void;
```

Removes every registered subscriber and detaches each listener they
contributed. Listeners attached via attach() are untouched.

#### `collectResponses()` { #contractseventsmanager-collectresponses }

```php
public function collectResponses( bool $collect ): void;
```

Toggle response collection on/off.

#### `detach()` { #contractseventsmanager-detach }

```php
public function detach(
    string $eventType,
    mixed $handler
): void;
```

Detach a listener from the events manager.

#### `detachAll()` { #contractseventsmanager-detachall }

```php
public function detachAll( string $type = null ): void;
```

Removes all listeners - globally or for a single event type.

#### `enablePriorities()` { #contractseventsmanager-enablepriorities }

```php
public function enablePriorities( bool $enablePriorities ): void;
```

Toggle priority ordering on/off.

#### `fire()` { #contractseventsmanager-fire }

```php
public function fire(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
);
```

Fires an event, notifying the active listeners.

#### `getListeners()` { #contractseventsmanager-getlisteners }

```php
public function getListeners( string $type ): array;
```

Returns all listeners attached to the given event type.

#### `getResponses()` { #contractseventsmanager-getresponses }

```php
public function getResponses(): array;
```

Returns the responses recorded during the last fire (when collecting).

#### `getSubscribers()` { #contractseventsmanager-getsubscribers }

```php
public function getSubscribers(): array;
```

Returns the list of registered subscriber instances.

#### `hasListeners()` { #contractseventsmanager-haslisteners }

```php
public function hasListeners( string $type ): bool;
```

Check whether the given event type has any listeners.

#### `isCollecting()` { #contractseventsmanager-iscollecting }

```php
public function isCollecting(): bool;
```

Check whether the manager is currently collecting responses.

#### `isValidHandler()` { #contractseventsmanager-isvalidhandler }

```php
public function isValidHandler( mixed $handler ): bool;
```

Returns true when the given handler is an object or callable.

#### `removeSubscriber()` { #contractseventsmanager-removesubscriber }

```php
public function removeSubscriber( Subscriber $subscriber ): void;
```

Removes a previously registered subscriber. Detaches every listener the
subscriber declared via getSubscribedEvents(). Idempotent.


## Contracts\Events\Stoppable

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Stoppable.zep){ .src-btn }

Phalcon's local mirror of PSR-14 StoppableEventInterface. Identical shape;
not extended from the PSR interface because the Zephir extension cannot
reference Composer-loaded interfaces at build time. A separate bridge
package exposes a PSR-14 adapter.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\Stoppable`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventsstoppable-ispropagationstopped">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isPropagationStopped()</code>
<span class="desc">Returns true when the event must stop propagating to subsequent</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `isPropagationStopped()` { #contractseventsstoppable-ispropagationstopped }

```php
public function isPropagationStopped(): bool;
```

Returns true when the event must stop propagating to subsequent
listeners.


## Contracts\Events\Subscriber

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Subscriber.zep){ .src-btn }

Contract for event subscriber classes. A subscriber declares the events it
wants to listen to via a static map; Events\Manager parses the map and
attaches each entry as a regular listener.

Accepted value shapes per event key:

  'event:name' => 'methodName'
  'event:name' => ['methodName', priority]
  'event:name' => [
      ['methodName1'],
      ['methodName2', priority],
  ]

Keys can be either a Phalcon event string (e.g. "db:beforeQuery") or a
fully qualified event class name.

Wildcard subscriptions: Phalcon's manager fires both the prefix queue and
the full-name queue (e.g. "db" is fired before "db:beforeQuery"). To
subscribe to every event of a component, use the prefix as the key:

  'db' => 'onAnyDbEvent'   // fires for db:beforeQuery, db:afterQuery, ...

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Events\Subscriber`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventssubscriber-getsubscribedevents">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSubscribedEvents()</code>
<span class="desc">Returns a map of event name =&gt; listener config. Called once per</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getSubscribedEvents()` { #contractseventssubscriber-getsubscribedevents }

```php
public static function getSubscribedEvents(): array;
```

Returns a map of event name => listener config. Called once per
Manager::addSubscriber() / removeSubscriber() call.


## Contracts\Forms\Schema

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Forms/Schema.zep){ .src-btn }

Contract for objects that supply a normalized list of form element
definitions. Implementations may source the definitions from a PHP array,
a JSON document, a YAML file, or any other format.

Each returned definition must be an associative array containing at least:
  - 'type' (string)  - element type key (e.g. 'text', 'select', 'checkgroup')
  - 'name' (string)  - the HTML name attribute value

Optional keys per definition:
  - 'label'      (string)          - visible label text
  - 'default'    (mixed)           - pre-populated default value
  - 'attributes' (array)           - additional HTML attributes
  - 'filters'    (array|string)    - filter names applied on bind()
  - 'validators' (array)           - ValidatorInterface instances
  - 'options'    (array)           - choices for select / checkgroup / radiogroup

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Forms\Schema`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsformsschema-load">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">load()</code>
<span class="desc">Returns an ordered list of normalized element definitions.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `load()` { #contractsformsschema-load }

```php
public function load(): array;
```

Returns an ordered list of normalized element definitions.


## Contracts\Html\Helper\Input\SelectData

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Html/Helper/Input/SelectData.zep){ .src-btn }

Interface for SELECT option data providers.

Return format: [value => label] for flat options;
[groupLabel => [value => label, ...]] for optgroups.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Html\Helper\Input\SelectData`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractshtmlhelperinputselectdata-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAttributes()</code>
<span class="desc">Returns the per-option attribute map.</span>
</a>
<a class="api-item" href="#contractshtmlhelperinputselectdata-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getOptions()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getAttributes()` { #contractshtmlhelperinputselectdata-getattributes }

```php
public function getAttributes(): array;
```

Returns the per-option attribute map.

Format: [optionValue => [attrName => stringValue, ...]].
Implementations must return resolved string values; no escaping,
ordering, or rendering is performed here.

#### `getOptions()` { #contractshtmlhelperinputselectdata-getoptions }

```php
public function getOptions(): array;
```


## Contracts\Mvc\Model\Relation\CacheKeyProvider

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Mvc/Model/Relation/CacheKeyProvider.zep){ .src-btn }

Interface for models that provide a custom unique key for the reusable
records cache in the Model Manager. Implement this interface when the
default object-identity based key (unique_key) does not produce stable
cache hits across multiple object instances that represent the same
database record.

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Mvc\Model\Relation\CacheKeyProvider`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsmvcmodelrelationcachekeyprovider-getuniquekey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getUniqueKey()</code>
<span class="desc">Returns a string that uniquely identifies this model instance for</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getUniqueKey()` { #contractsmvcmodelrelationcachekeyprovider-getuniquekey }

```php
public function getUniqueKey(): string;
```

Returns a string that uniquely identifies this model instance for
use as the key in the reusable records cache.


## Contracts\Paginator\Adapter

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Paginator/Adapter.zep){ .src-btn }

Interface for Phalcon\Paginator adapters

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Paginator\Adapter`**
    - [`Phalcon\Paginator\Adapter\AdapterInterface`](phalcon_paginator.md#paginatoradapteradapterinterface)

</div>

__Uses__ `Phalcon\Paginator\Adapter\AdapterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractspaginatoradapter-getlimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getLimit()</code>
<span class="desc">Get current rows limit</span>
</a>
<a class="api-item" href="#contractspaginatoradapter-paginate">
<code class="vis vis-public">public</code>
<code class="ret">Repository</code>
<code class="sig">paginate()</code>
<span class="desc">Returns a slice of the resultset to show in the pagination</span>
</a>
<a class="api-item" href="#contractspaginatoradapter-setcurrentpage">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">setCurrentPage( int $page )</code>
<span class="desc">Set the current page number</span>
</a>
<a class="api-item" href="#contractspaginatoradapter-setlimit">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">setLimit( int $limit )</code>
<span class="desc">Set current rows limit</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `getLimit()` { #contractspaginatoradapter-getlimit }

```php
public function getLimit(): int;
```

Get current rows limit

#### `paginate()` { #contractspaginatoradapter-paginate }

```php
public function paginate(): Repository;
```

Returns a slice of the resultset to show in the pagination

#### `setCurrentPage()` { #contractspaginatoradapter-setcurrentpage }

```php
public function setCurrentPage( int $page ): AdapterInterface;
```

Set the current page number

#### `setLimit()` { #contractspaginatoradapter-setlimit }

```php
public function setLimit( int $limit ): AdapterInterface;
```

Set current rows limit


## Contracts\Paginator\Repository

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Paginator/Repository.zep){ .src-btn }

Interface for the repository of current state
Phalcon\Paginator\AdapterInterface::paginate()

<div class="api-tree" markdown>

- **`Phalcon\Contracts\Paginator\Repository`**
    - [`Phalcon\Paginator\RepositoryInterface`](phalcon_paginator.md#paginatorrepositoryinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractspaginatorrepository-getaliases">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAliases()</code>
<span class="desc">Gets the aliases for properties repository</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getcurrent">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getCurrent()</code>
<span class="desc">Gets number of the current page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getfirst">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getFirst()</code>
<span class="desc">Gets number of the first page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getitems">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getItems()</code>
<span class="desc">Gets the items on the current page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getlast">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getLast()</code>
<span class="desc">Gets number of the last page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getlimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getLimit()</code>
<span class="desc">Gets current rows limit</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getnext">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getNext()</code>
<span class="desc">Gets number of the next page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getprevious">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getPrevious()</code>
<span class="desc">Gets number of the previous page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-gettotalitems">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getTotalItems()</code>
<span class="desc">Gets the total number of items</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-setaliases">
<code class="vis vis-public">public</code>
<code class="ret">Repository</code>
<code class="sig">setAliases( array $aliases )</code>
<span class="desc">Sets the aliases for properties repository</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-setproperties">
<code class="vis vis-public">public</code>
<code class="ret">Repository</code>
<code class="sig">setProperties( array $properties )</code>
<span class="desc">Sets values for properties of the repository</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `PROPERTY_CURRENT_PAGE = "current"` `string`

-   `PROPERTY_FIRST_PAGE = "first"` `string`

-   `PROPERTY_ITEMS = "items"` `string`

-   `PROPERTY_LAST_PAGE = "last"` `string`

-   `PROPERTY_LIMIT = "limit"` `string`

-   `PROPERTY_NEXT_PAGE = "next"` `string`

-   `PROPERTY_PREVIOUS_PAGE = "previous"` `string`

-   `PROPERTY_TOTAL_ITEMS = "total_items"` `string`

</div>

### Methods

<div class="api-group">Public · 11</div>

#### `getAliases()` { #contractspaginatorrepository-getaliases }

```php
public function getAliases(): array;
```

Gets the aliases for properties repository

#### `getCurrent()` { #contractspaginatorrepository-getcurrent }

```php
public function getCurrent(): int;
```

Gets number of the current page

#### `getFirst()` { #contractspaginatorrepository-getfirst }

```php
public function getFirst(): int;
```

Gets number of the first page

#### `getItems()` { #contractspaginatorrepository-getitems }

```php
public function getItems(): mixed;
```

Gets the items on the current page

#### `getLast()` { #contractspaginatorrepository-getlast }

```php
public function getLast(): int;
```

Gets number of the last page

#### `getLimit()` { #contractspaginatorrepository-getlimit }

```php
public function getLimit(): int;
```

Gets current rows limit

#### `getNext()` { #contractspaginatorrepository-getnext }

```php
public function getNext(): int;
```

Gets number of the next page

#### `getPrevious()` { #contractspaginatorrepository-getprevious }

```php
public function getPrevious(): int;
```

Gets number of the previous page

#### `getTotalItems()` { #contractspaginatorrepository-gettotalitems }

```php
public function getTotalItems(): int;
```

Gets the total number of items

#### `setAliases()` { #contractspaginatorrepository-setaliases }

```php
public function setAliases( array $aliases ): Repository;
```

Sets the aliases for properties repository

#### `setProperties()` { #contractspaginatorrepository-setproperties }

```php
public function setProperties( array $properties ): Repository;
```

Sets values for properties of the repository


## Contracts\Support\Collection

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Support/Collection.zep){ .src-btn }

Canonical contract for Phalcon\Support\Collection.

@extends ArrayAccess<int|string, mixed>
@extends IteratorAggregate<int|string, mixed>

<div class="api-tree" markdown>

- `ArrayAccess`
    - **`Phalcon\Contracts\Support\Collection`** — extends `ArrayAccess`, `IteratorAggregate`
        - [`Phalcon\Support\Collection\CollectionInterface`](phalcon_support.md#supportcollectioncollectioninterface)

</div>

__Uses__ `ArrayAccess` · `IteratorAggregate`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractssupportcollection-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">__get( string $element )</code>
</a>
<a class="api-item" href="#contractssupportcollection-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">__isset( string $element )</code>
</a>
<a class="api-item" href="#contractssupportcollection-__set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">__set(
    string $element,
    mixed $value
)</code>
</a>
<a class="api-item" href="#contractssupportcollection-__unset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">__unset( string $element )</code>
</a>
<a class="api-item" href="#contractssupportcollection-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">clear()</code>
<span class="desc">Clears the internal collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-column">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">column( string $propertyOrMethod )</code>
<span class="desc">Returns the values from a single property/method extracted from every</span>
</a>
<a class="api-item" href="#contractssupportcollection-each">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">each( callable $callback )</code>
<span class="desc">Invokes the callback for every item in the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-filter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">filter( callable $callback )</code>
<span class="desc">Returns a new collection of items for which the callback returns true.</span>
</a>
<a class="api-item" href="#contractssupportcollection-first">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">first()</code>
<span class="desc">Returns the first value in the collection or null when empty.</span>
</a>
<a class="api-item" href="#contractssupportcollection-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">get(
    string $element,
    mixed $defaultValue = null,
    string $cast = null
)</code>
<span class="desc">Returns an element from the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getKeys( bool $insensitive = true )</code>
<span class="desc">Returns the keys (insensitive or not) of the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getType()</code>
<span class="desc">Returns the configured runtime type guard, or null when not set.</span>
</a>
<a class="api-item" href="#contractssupportcollection-getvalues">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getValues()</code>
<span class="desc">Returns the values of the internal array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has( string $element )</code>
<span class="desc">Checks whether an element exists in the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-init">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">init( array $data = [] )</code>
<span class="desc">Initializes the internal array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-isempty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isEmpty()</code>
<span class="desc">Returns true when the collection has no entries.</span>
</a>
<a class="api-item" href="#contractssupportcollection-keys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">keys( bool $insensitive = true )</code>
<span class="desc">Returns the keys (insensitive or not) of the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-last">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">last()</code>
<span class="desc">Returns the last value in the collection or null when empty.</span>
</a>
<a class="api-item" href="#contractssupportcollection-map">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">map( callable $callback )</code>
<span class="desc">Returns a new collection with the callback applied to every value.</span>
</a>
<a class="api-item" href="#contractssupportcollection-reduce">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">reduce(
    callable $callback,
    mixed $initial = null
)</code>
<span class="desc">Reduces the collection to a single value using the callback.</span>
</a>
<a class="api-item" href="#contractssupportcollection-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">remove( string $element )</code>
<span class="desc">Removes the element from the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-replace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">replace( array $data )</code>
<span class="desc">Replaces the collection data with a new array, clearing first.</span>
</a>
<a class="api-item" href="#contractssupportcollection-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">set(
    string $element,
    mixed $value
)</code>
<span class="desc">Stores an element in the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-sort">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">sort(
    callable $callback = null,
    int $order = 4
)</code>
<span class="desc">Returns a new collection sorted by value, preserving keys.</span>
</a>
<a class="api-item" href="#contractssupportcollection-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">toArray()</code>
<span class="desc">Returns the collection as an array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-tojson">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">toJson( int $options = 4194383 )</code>
<span class="desc">Returns the collection serialized as a JSON string.</span>
</a>
<a class="api-item" href="#contractssupportcollection-values">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">values()</code>
<span class="desc">Returns the values of the internal array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-where">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">where(
    string $propertyOrMethod,
    mixed $value
)</code>
<span class="desc">Returns a new collection containing only the items whose</span>
</a>
</div>

### Methods

<div class="api-group">Public · 28</div>

#### `__get()` { #contractssupportcollection-__get }

```php
public function __get( string $element ): mixed;
```

#### `__isset()` { #contractssupportcollection-__isset }

```php
public function __isset( string $element ): bool;
```

#### `__set()` { #contractssupportcollection-__set }

```php
public function __set(
    string $element,
    mixed $value
): void;
```

#### `__unset()` { #contractssupportcollection-__unset }

```php
public function __unset( string $element ): void;
```

#### `clear()` { #contractssupportcollection-clear }

```php
public function clear(): void;
```

Clears the internal collection.

#### `column()` { #contractssupportcollection-column }

```php
public function column( string $propertyOrMethod ): array;
```

Returns the values from a single property/method extracted from every
item in the collection, keyed by the original collection key.

#### `each()` { #contractssupportcollection-each }

```php
public function each( callable $callback ): static;
```

Invokes the callback for every item in the collection.

#### `filter()` { #contractssupportcollection-filter }

```php
public function filter( callable $callback ): static;
```

Returns a new collection of items for which the callback returns true.

#### `first()` { #contractssupportcollection-first }

```php
public function first(): mixed;
```

Returns the first value in the collection or null when empty.

#### `get()` { #contractssupportcollection-get }

```php
public function get(
    string $element,
    mixed $defaultValue = null,
    string $cast = null
): mixed;
```

Returns an element from the collection.

#### `getKeys()` { #contractssupportcollection-getkeys }

```php
public function getKeys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

@deprecated Use {@see self::keys()} instead. Will be removed in a future major release.

#### `getType()` { #contractssupportcollection-gettype }

```php
public function getType(): string|null;
```

Returns the configured runtime type guard, or null when not set.

#### `getValues()` { #contractssupportcollection-getvalues }

```php
public function getValues(): array;
```

Returns the values of the internal array.

@deprecated Use {@see self::values()} instead. Will be removed in a future major release.

#### `has()` { #contractssupportcollection-has }

```php
public function has( string $element ): bool;
```

Checks whether an element exists in the collection.

#### `init()` { #contractssupportcollection-init }

```php
public function init( array $data = [] ): void;
```

Initializes the internal array.

#### `isEmpty()` { #contractssupportcollection-isempty }

```php
public function isEmpty(): bool;
```

Returns true when the collection has no entries.

#### `keys()` { #contractssupportcollection-keys }

```php
public function keys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

#### `last()` { #contractssupportcollection-last }

```php
public function last(): mixed;
```

Returns the last value in the collection or null when empty.

#### `map()` { #contractssupportcollection-map }

```php
public function map( callable $callback ): static;
```

Returns a new collection with the callback applied to every value.

#### `reduce()` { #contractssupportcollection-reduce }

```php
public function reduce(
    callable $callback,
    mixed $initial = null
): mixed;
```

Reduces the collection to a single value using the callback.

#### `remove()` { #contractssupportcollection-remove }

```php
public function remove( string $element ): void;
```

Removes the element from the collection.

#### `replace()` { #contractssupportcollection-replace }

```php
public function replace( array $data ): void;
```

Replaces the collection data with a new array, clearing first.

#### `set()` { #contractssupportcollection-set }

```php
public function set(
    string $element,
    mixed $value
): void;
```

Stores an element in the collection.

#### `sort()` { #contractssupportcollection-sort }

```php
public function sort(
    callable $callback = null,
    int $order = 4
): static;
```

Returns a new collection sorted by value, preserving keys.

#### `toArray()` { #contractssupportcollection-toarray }

```php
public function toArray(): array;
```

Returns the collection as an array.

#### `toJson()` { #contractssupportcollection-tojson }

```php
public function toJson( int $options = 4194383 ): string;
```

Returns the collection serialized as a JSON string.

#### `values()` { #contractssupportcollection-values }

```php
public function values(): array;
```

Returns the values of the internal array.

#### `where()` { #contractssupportcollection-where }

```php
public function where(
    string $propertyOrMethod,
    mixed $value
): static;
```

Returns a new collection containing only the items whose
`propertyOrMethod` strictly equals `$value`.
