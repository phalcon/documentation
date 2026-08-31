---
title: "Phalcon Contracts"
version: "5.14"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Contracts

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Contracts\Auth\Access\Access

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Access/Access.zep">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Contracts\Auth\Access\Access`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthaccessaccess-allowedif">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">allowedIf</span>()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-getexceptactions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getExceptActions</span>()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-getonlyactions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOnlyActions</span>()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-isallowed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAllowed</span>( <span class="st">string</span> <span class="sv">$actionName</span> )</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-redirectto">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">redirectTo</span>()</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-setexceptactions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setExceptActions</span>( <span class="st">array</span> <span class="sv">$exceptActions</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#contractsauthaccessaccess-setonlyactions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setOnlyActions</span>( <span class="st">array</span> <span class="sv">$onlyActions</span><span class="sm"> = []</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

<h4 id="contractsauthaccessaccess-allowedif"><code>allowedIf()</code></h4>

```php
public function allowedIf(): bool;
```

<h4 id="contractsauthaccessaccess-getexceptactions"><code>getExceptActions()</code></h4>

```php
public function getExceptActions(): array;
```

<h4 id="contractsauthaccessaccess-getonlyactions"><code>getOnlyActions()</code></h4>

```php
public function getOnlyActions(): array;
```

<h4 id="contractsauthaccessaccess-isallowed"><code>isAllowed()</code></h4>

```php
public function isAllowed( string $actionName ): bool;
```

<h4 id="contractsauthaccessaccess-redirectto"><code>redirectTo()</code></h4>

```php
public function redirectTo(): array|null;
```

<h4 id="contractsauthaccessaccess-setexceptactions"><code>setExceptActions()</code></h4>

```php
public function setExceptActions( array $exceptActions = [] ): void;
```

<h4 id="contractsauthaccessaccess-setonlyactions"><code>setOnlyActions()</code></h4>

```php
public function setOnlyActions( array $onlyActions = [] ): void;
```

## Contracts\Auth\Adapter\Adapter

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Adapter/Adapter.zep">Source on GitHub</a>

Authentication adapter contract.

Adapters look users up by credentials or by identifier and verify the
password against the stored hash. The credential payload is intentionally
unsealed: any user-row field may be used as the lookup key, plus an
optional `password` entry that is ignored during the row match and
consumed only by validateCredentials().

<div class="api-tree">

- **`Phalcon\Contracts\Auth\Adapter\Adapter`**
- [`Phalcon\Contracts\Auth\Adapter\RememberAdapter`](#contractsauthadapterrememberadapter)

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Encryption\Security\Security`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthadapteradapter-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromOptions</span>(<span class="prm"><span class="st">Security</span> <span class="sv">$hasher</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
<span class="desc">Build an adapter from a flat options map. Used by ManagerFactory to</span>
</a>
<a class="api-item" href="#contractsauthadapteradapter-retrievebycredentials">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">retrieveByCredentials</span>( <span class="st">array</span> <span class="sv">$credentials</span> )</code>
<span class="desc">Find a user matching the given credentials (e.g. [&#039;email&#039; =&gt; &#039;a@b&#039;]).</span>
</a>
<a class="api-item" href="#contractsauthadapteradapter-retrievebyid">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">retrieveById</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
<span class="desc">Find a user by their unique identifier.</span>
</a>
<a class="api-item" href="#contractsauthadapteradapter-validatecredentials">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validateCredentials</span>(<span class="prm"><span class="st">AuthUser</span> <span class="sv">$user</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$credentials</span></span>)</code>
<span class="desc">Validate the provided credentials against the given user.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

<h4 id="contractsauthadapteradapter-fromoptions"><code>fromOptions()</code></h4>

```php
public static function fromOptions(
Security $hasher,
array $options
): static;
```

Build an adapter from a flat options map. Used by ManagerFactory to
wire adapters from the application config; each implementation is
free to interpret the option keys it cares about.

<h4 id="contractsauthadapteradapter-retrievebycredentials"><code>retrieveByCredentials()</code></h4>

```php
public function retrieveByCredentials( array $credentials ): AuthUser|null;
```

Find a user matching the given credentials (e.g. ['email' => 'a@b']).
The 'password' key, if present, is ignored during the lookup.
Returns null if no user matches.

<h4 id="contractsauthadapteradapter-retrievebyid"><code>retrieveById()</code></h4>

```php
public function retrieveById( mixed $id ): AuthUser|null;
```

Find a user by their unique identifier.

<h4 id="contractsauthadapteradapter-validatecredentials"><code>validateCredentials()</code></h4>

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Adapter/AdapterConfig.zep">Source on GitHub</a>

Authentication adapter configuration contract.

Per-adapter config shape is intentionally adapter-specific (e.g. Stream
exposes getFile(), Memory exposes getUsers()); the only field shared across
all adapters is the optional model class used during user hydration.

<div class="api-tree">

- **`Phalcon\Contracts\Auth\Adapter\AdapterConfig`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthadapteradapterconfig-getmodel">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getModel</span>()</code>
<span class="desc">Returns the user-model class name to hydrate, if configured.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="contractsauthadapteradapterconfig-getmodel"><code>getModel()</code></h4>

```php
public function getModel(): string|null;
```

Returns the user-model class name to hydrate, if configured.

## Contracts\Auth\Adapter\RememberAdapter

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Adapter/RememberAdapter.zep">Source on GitHub</a>

Capability extension implemented by adapters that support remember-me.

<div class="api-tree">

- [`Phalcon\Contracts\Auth\Adapter\Adapter`](#contractsauthadapteradapter)
- **`Phalcon\Contracts\Auth\Adapter\RememberAdapter`**

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\RememberToken`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthadapterrememberadapter-createremembertoken">
<code class="vis vis-public">public</code>
<code class="ret">RememberToken</code>
<code class="sig"><span class="sf">createRememberToken</span>( <span class="st">AuthUser</span> <span class="sv">$user</span> )</code>
<span class="desc">Create and persist a new remember token for the user.</span>
</a>
<a class="api-item" href="#contractsauthadapterrememberadapter-retrievebytoken">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">retrieveByToken</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$token</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$userAgent</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Retrieve a user by the remember-me cookie payload.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="contractsauthadapterrememberadapter-createremembertoken"><code>createRememberToken()</code></h4>

```php
public function createRememberToken( AuthUser $user ): RememberToken;
```

Create and persist a new remember token for the user.

<h4 id="contractsauthadapterrememberadapter-retrievebytoken"><code>retrieveByToken()</code></h4>

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/AuthRemember.zep">Source on GitHub</a>

Implemented by authenticatable models that support remember-me tokens.
This is intentionally separate from AuthUser so that adapters which do
not support remember-me are not forced to implement it.

<div class="api-tree">

- **`Phalcon\Contracts\Auth\AuthRemember`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthauthremember-createremembertoken">
<code class="vis vis-public">public</code>
<code class="ret">RememberToken</code>
<code class="sig"><span class="sf">createRememberToken</span>(<span class="prm"><span class="st">string</span> <span class="sv">$token</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$userAgent</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Persists a new remember token for the user.</span>
</a>
<a class="api-item" href="#contractsauthauthremember-getremembertoken">
<code class="vis vis-public">public</code>
<code class="ret">RememberToken|null</code>
<code class="sig"><span class="sf">getRememberToken</span>( <span class="st">string</span> <span class="sv">$token</span> )</code>
<span class="desc">Returns the remember token entry matching the given token value,</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="contractsauthauthremember-createremembertoken"><code>createRememberToken()</code></h4>

```php
public function createRememberToken(
string $token,
string $userAgent = null
): RememberToken;
```

Persists a new remember token for the user.

<h4 id="contractsauthauthremember-getremembertoken"><code>getRememberToken()</code></h4>

```php
public function getRememberToken( string $token ): RememberToken|null;
```

Returns the remember token entry matching the given token value,
or null if not found.

## Contracts\Auth\AuthUser

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/AuthUser.zep">Source on GitHub</a>

Implemented by user models that can be authenticated.

<div class="api-tree">

- **`Phalcon\Contracts\Auth\AuthUser`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthauthuser-getauthidentifier">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig"><span class="sf">getAuthIdentifier</span>()</code>
<span class="desc">Returns the unique identifier for the authenticatable user</span>
</a>
<a class="api-item" href="#contractsauthauthuser-getauthpassword">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAuthPassword</span>()</code>
<span class="desc">Returns the hashed password for the authenticatable user.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="contractsauthauthuser-getauthidentifier"><code>getAuthIdentifier()</code></h4>

```php
public function getAuthIdentifier(): int|string;
```

Returns the unique identifier for the authenticatable user
(e.g. the primary key). Implementations MUST return a non-null
scalar; if a record cannot produce one, the implementation should
fail at construction time rather than returning null.

<h4 id="contractsauthauthuser-getauthpassword"><code>getAuthPassword()</code></h4>

```php
public function getAuthPassword(): string;
```

Returns the hashed password for the authenticatable user.

## Contracts\Auth\Guard\BasicAuth

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Guard/BasicAuth.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-auth
@link    https://github.com/sinbadxiii/cphalcon-auth

<div class="api-tree">

- **`Phalcon\Contracts\Auth\Guard\BasicAuth`**

</div>

__Uses__ `Phalcon\Contracts\Auth\AuthUser`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthguardbasicauth-basic">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">basic</span>(<span class="prm"><span class="st">string</span> <span class="sv">$field</span><span class="sm"> = &quot;email&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$extraConditions</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Authenticate against HTTP Basic credentials. Returns true on success.</span>
</a>
<a class="api-item" href="#contractsauthguardbasicauth-oncebasic">
<code class="vis vis-public">public</code>
<code class="ret">false|AuthUser</code>
<code class="sig"><span class="sf">onceBasic</span>(<span class="prm"><span class="st">string</span> <span class="sv">$field</span><span class="sm"> = &quot;email&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$extraConditions</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Like basic() but does not persist; returns the resolved user on success</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="contractsauthguardbasicauth-basic"><code>basic()</code></h4>

```php
public function basic(
string $field = "email",
array $extraConditions = []
): bool;
```

Authenticate against HTTP Basic credentials. Returns true on success.

<h4 id="contractsauthguardbasicauth-oncebasic"><code>onceBasic()</code></h4>

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Guard/Guard.zep">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Contracts\Auth\Guard\Guard`**

</div>

__Uses__ `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Container\Service\Collection`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthguardguard-check">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">check</span>()</code>
<span class="desc">Whether the current request is authenticated.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromOptions</span>(<span class="prm"><span class="st">Adapter</span> <span class="sv">$adapter</span>,</span><span class="prm"><span class="st">Collection</span> <span class="sv">$container</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
<span class="desc">Build a guard from an adapter, the application container, and a flat</span>
</a>
<a class="api-item" href="#contractsauthguardguard-getlastuserattempted">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">getLastUserAttempted</span>()</code>
<span class="desc">Returns the last user the guard tried to authenticate during this</span>
</a>
<a class="api-item" href="#contractsauthguardguard-guest">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">guest</span>()</code>
<span class="desc">Whether the current request is unauthenticated.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-hasuser">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasUser</span>()</code>
<span class="desc">Whether the guard currently holds a resolved user.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-id">
<code class="vis vis-public">public</code>
<code class="ret">int|string|null</code>
<code class="sig"><span class="sf">id</span>()</code>
<span class="desc">Returns the authenticated user&#039;s identifier, or null when no</span>
</a>
<a class="api-item" href="#contractsauthguardguard-setuser">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setUser</span>( <span class="st">AuthUser</span> <span class="sv">$user</span> )</code>
<span class="desc">Sets the current user explicitly. Returns $this for fluent chaining.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-user">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">user</span>()</code>
<span class="desc">Returns the resolved user for the current request, or null.</span>
</a>
<a class="api-item" href="#contractsauthguardguard-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>( <span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span> )</code>
<span class="desc">Validates the given credentials without logging in.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

<h4 id="contractsauthguardguard-check"><code>check()</code></h4>

```php
public function check(): bool;
```

Whether the current request is authenticated.

<h4 id="contractsauthguardguard-fromoptions"><code>fromOptions()</code></h4>

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

<h4 id="contractsauthguardguard-getlastuserattempted"><code>getLastUserAttempted()</code></h4>

```php
public function getLastUserAttempted(): AuthUser|null;
```

Returns the last user the guard tried to authenticate during this
request, regardless of success.

<h4 id="contractsauthguardguard-guest"><code>guest()</code></h4>

```php
public function guest(): bool;
```

Whether the current request is unauthenticated.

<h4 id="contractsauthguardguard-hasuser"><code>hasUser()</code></h4>

```php
public function hasUser(): bool;
```

Whether the guard currently holds a resolved user.

<h4 id="contractsauthguardguard-id"><code>id()</code></h4>

```php
public function id(): int|string|null;
```

Returns the authenticated user's identifier, or null when no
authenticated user is present.

<h4 id="contractsauthguardguard-setuser"><code>setUser()</code></h4>

```php
public function setUser( AuthUser $user ): static;
```

Sets the current user explicitly. Returns $this for fluent chaining.

<h4 id="contractsauthguardguard-user"><code>user()</code></h4>

```php
public function user(): AuthUser|null;
```

Returns the resolved user for the current request, or null.

<h4 id="contractsauthguardguard-validate"><code>validate()</code></h4>

```php
public function validate( array $credentials = [] ): bool;
```

Validates the given credentials without logging in.

## Contracts\Auth\Guard\GuardConfig

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Guard/GuardConfig.zep">Source on GitHub</a>

Authentication guard configuration contract.

Per-guard config shape is intentionally guard-specific (e.g. Token exposes
getInputKey()/getStorageKey(); Session has no required config today).
The contract carries no methods of its own - it only marks the type so
AbstractGuard can accept any guard config uniformly.

<div class="api-tree">

- **`Phalcon\Contracts\Auth\Guard\GuardConfig`**

</div>

## Contracts\Auth\Guard\GuardStateful

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Guard/GuardStateful.zep">Source on GitHub</a>

Implemented by guards backed by persistent state (sessions/cookies).

<div class="api-tree">

- **`Phalcon\Contracts\Auth\Guard\GuardStateful`**

</div>

__Uses__ `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthUser`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthguardguardstateful-attempt">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">attempt</span>(<span class="prm"><span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Attempts to authenticate the user with the given credentials and, on</span>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-login">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">login</span>(<span class="prm"><span class="st">AuthUser</span> <span class="sv">$user</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-loginbyid">
<code class="vis vis-public">public</code>
<code class="ret">false|AuthUser</code>
<code class="sig"><span class="sf">loginById</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Logs in the user identified by $id. Returns the resolved user on</span>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-logout">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">logout</span>()</code>
</a>
<a class="api-item" href="#contractsauthguardguardstateful-viaremember">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">viaRemember</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

<h4 id="contractsauthguardguardstateful-attempt"><code>attempt()</code></h4>

```php
public function attempt(
array $credentials = [],
bool $remember = false
): bool;
```

Attempts to authenticate the user with the given credentials and, on
success, persists the resulting state on the guard.

<h4 id="contractsauthguardguardstateful-login"><code>login()</code></h4>

```php
public function login(
AuthUser $user,
bool $remember = false
): void;
```

<h4 id="contractsauthguardguardstateful-loginbyid"><code>loginById()</code></h4>

```php
public function loginById(
mixed $id,
bool $remember = false
): false|AuthUser;
```

Logs in the user identified by $id. Returns the resolved user on
success or false when no user matches the id.

<h4 id="contractsauthguardguardstateful-logout"><code>logout()</code></h4>

```php
public function logout(): void;
```

<h4 id="contractsauthguardguardstateful-viaremember"><code>viaRemember()</code></h4>

```php
public function viaRemember(): bool;
```

## Contracts\Auth\Manager

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/Manager.zep">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Contracts\Auth\Manager`**

</div>

__Uses__ `Phalcon\Auth\Exception` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\Guard\Guard`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthmanager-access">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">access</span>( <span class="st">string</span> <span class="sv">$accessName</span> )</code>
</a>
<a class="api-item" href="#contractsauthmanager-addaccesslist">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">addAccessList</span>( <span class="st">array</span> <span class="sv">$accessList</span> )</code>
</a>
<a class="api-item" href="#contractsauthmanager-addguard">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">addGuard</span>(<span class="prm"><span class="st">string</span> <span class="sv">$nameGuard</span>,</span><span class="prm"><span class="st">Guard</span> <span class="sv">$guard</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$isDefault</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#contractsauthmanager-attempt">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">attempt</span>(<span class="prm"><span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#contractsauthmanager-check">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">check</span>()</code>
<span class="desc">Whether the default guard reports the current request as authenticated.</span>
</a>
<a class="api-item" href="#contractsauthmanager-except">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">except</span>( <span class="st">string</span> <span class="sv">$actions</span> )</code>
<span class="desc">Restricts the active access gate to skip the listed action names.</span>
</a>
<a class="api-item" href="#contractsauthmanager-getaccess">
<code class="vis vis-public">public</code>
<code class="ret">Access|null</code>
<code class="sig"><span class="sf">getAccess</span>()</code>
</a>
<a class="api-item" href="#contractsauthmanager-getaccesslist">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAccessList</span>()</code>
</a>
<a class="api-item" href="#contractsauthmanager-getdefaultguard">
<code class="vis vis-public">public</code>
<code class="ret">Guard|null</code>
<code class="sig"><span class="sf">getDefaultGuard</span>()</code>
</a>
<a class="api-item" href="#contractsauthmanager-getguards">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getGuards</span>()</code>
</a>
<a class="api-item" href="#contractsauthmanager-guard">
<code class="vis vis-public">public</code>
<code class="ret">Guard</code>
<code class="sig"><span class="sf">guard</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns the named guard, or the default guard when $name is null.</span>
</a>
<a class="api-item" href="#contractsauthmanager-id">
<code class="vis vis-public">public</code>
<code class="ret">int|string|null</code>
<code class="sig"><span class="sf">id</span>()</code>
<span class="desc">Returns the authenticated user&#039;s identifier from the default guard,</span>
</a>
<a class="api-item" href="#contractsauthmanager-logout">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">logout</span>()</code>
<span class="desc">Logs the current user out via the default guard.</span>
</a>
<a class="api-item" href="#contractsauthmanager-only">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">only</span>( <span class="st">string</span> <span class="sv">$actions</span> )</code>
<span class="desc">Restricts the active access gate to apply only to the listed action names.</span>
</a>
<a class="api-item" href="#contractsauthmanager-setaccess">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">setAccess</span>( <span class="st">Access</span> <span class="sv">$access</span> )</code>
</a>
<a class="api-item" href="#contractsauthmanager-setdefaultguard">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">setDefaultGuard</span>( <span class="st">Guard</span> <span class="sv">$guard</span> )</code>
</a>
<a class="api-item" href="#contractsauthmanager-user">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">user</span>()</code>
<span class="desc">Returns the resolved user from the default guard, or null.</span>
</a>
<a class="api-item" href="#contractsauthmanager-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>( <span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span> )</code>
<span class="desc">Validates the given credentials against the default guard without</span>
</a>
</div>

### Methods

<div class="api-group">Public · 18</div>

<h4 id="contractsauthmanager-access"><code>access()</code></h4>

```php
public function access( string $accessName ): self;
```

<h4 id="contractsauthmanager-addaccesslist"><code>addAccessList()</code></h4>

```php
public function addAccessList( array $accessList ): self;
```

<h4 id="contractsauthmanager-addguard"><code>addGuard()</code></h4>

```php
public function addGuard(
string $nameGuard,
Guard $guard,
bool $isDefault = false
): self;
```

<h4 id="contractsauthmanager-attempt"><code>attempt()</code></h4>

```php
public function attempt(
array $credentials = [],
bool $remember = false
): bool;
```

<h4 id="contractsauthmanager-check"><code>check()</code></h4>

```php
public function check(): bool;
```

Whether the default guard reports the current request as authenticated.

<h4 id="contractsauthmanager-except"><code>except()</code></h4>

```php
public function except( string $actions ): self;
```

Restricts the active access gate to skip the listed action names.

<h4 id="contractsauthmanager-getaccess"><code>getAccess()</code></h4>

```php
public function getAccess(): Access|null;
```

<h4 id="contractsauthmanager-getaccesslist"><code>getAccessList()</code></h4>

```php
public function getAccessList(): array;
```

<h4 id="contractsauthmanager-getdefaultguard"><code>getDefaultGuard()</code></h4>

```php
public function getDefaultGuard(): Guard|null;
```

<h4 id="contractsauthmanager-getguards"><code>getGuards()</code></h4>

```php
public function getGuards(): array;
```

<h4 id="contractsauthmanager-guard"><code>guard()</code></h4>

```php
public function guard( string $name = null ): Guard;
```

Returns the named guard, or the default guard when $name is null.

<h4 id="contractsauthmanager-id"><code>id()</code></h4>

```php
public function id(): int|string|null;
```

Returns the authenticated user's identifier from the default guard,
or null when no authenticated user is present.

<h4 id="contractsauthmanager-logout"><code>logout()</code></h4>

```php
public function logout(): void;
```

Logs the current user out via the default guard.

<h4 id="contractsauthmanager-only"><code>only()</code></h4>

```php
public function only( string $actions ): self;
```

Restricts the active access gate to apply only to the listed action names.

<h4 id="contractsauthmanager-setaccess"><code>setAccess()</code></h4>

```php
public function setAccess( Access $access ): self;
```

<h4 id="contractsauthmanager-setdefaultguard"><code>setDefaultGuard()</code></h4>

```php
public function setDefaultGuard( Guard $guard ): self;
```

<h4 id="contractsauthmanager-user"><code>user()</code></h4>

```php
public function user(): AuthUser|null;
```

Returns the resolved user from the default guard, or null.

<h4 id="contractsauthmanager-validate"><code>validate()</code></h4>

```php
public function validate( array $credentials = [] ): bool;
```

Validates the given credentials against the default guard without
logging in.

## Contracts\Auth\RememberToken

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Auth/RememberToken.zep">Source on GitHub</a>

A persisted remember-me token row.

<div class="api-tree">

- **`Phalcon\Contracts\Auth\RememberToken`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsauthremembertoken-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">delete</span>()</code>
<span class="desc">Deletes the token from storage.</span>
</a>
<a class="api-item" href="#contractsauthremembertoken-gettoken">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getToken</span>()</code>
<span class="desc">Returns the token value stored for this remember entry.</span>
</a>
<a class="api-item" href="#contractsauthremembertoken-getuseragent">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getUserAgent</span>()</code>
<span class="desc">Returns the user agent associated with this token, if any.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

<h4 id="contractsauthremembertoken-delete"><code>delete()</code></h4>

```php
public function delete(): bool;
```

Deletes the token from storage.

<h4 id="contractsauthremembertoken-gettoken"><code>getToken()</code></h4>

```php
public function getToken(): string;
```

Returns the token value stored for this remember entry.

<h4 id="contractsauthremembertoken-getuseragent"><code>getUserAgent()</code></h4>

```php
public function getUserAgent(): string|null;
```

Returns the user agent associated with this token, if any.

## Contracts\Container\Ioc\IocContainer

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Ioc/IocContainer.zep">Source on GitHub</a>

[_IocContainer_][] affords obtaining services by name.

- Notes:

- **This interface does not afford service management.** The container
      will need to obtain services somehow, e.g. from a [Service-Interop][]
      implementation.

<div class="api-tree">

- **`Phalcon\Contracts\Container\Ioc\IocContainer`**
- [`Phalcon\Contracts\Container\Service\Collection`](#contractscontainerservicecollection)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontaineriocioccontainer-getservice">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">getService</span>( <span class="st">string</span> <span class="sv">$serviceName</span> )</code>
<span class="desc">Returns an instance of the <code>$serviceName</code>.</span>
</a>
<a class="api-item" href="#contractscontaineriocioccontainer-hasservice">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasService</span>( <span class="st">string</span> <span class="sv">$serviceName</span> )</code>
<span class="desc">Is the container able to return an instance of the <code>$serviceName</code>?</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="contractscontaineriocioccontainer-getservice"><code>getService()</code></h4>

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

<h4 id="contractscontaineriocioccontainer-hasservice"><code>hasService()</code></h4>

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Ioc/IocContainerFactory.zep">Source on GitHub</a>

[_IocContainerFactory_][] affords obtaining a new instance of
[_IocContainer_][].

<div class="api-tree">

- **`Phalcon\Contracts\Container\Ioc\IocContainerFactory`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontaineriocioccontainerfactory-newcontainer">
<code class="vis vis-public">public</code>
<code class="ret">IocContainer</code>
<code class="sig"><span class="sf">newContainer</span>()</code>
<span class="desc">Returns a new instance of [_IocContainer_][].</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="contractscontaineriocioccontainerfactory-newcontainer"><code>newContainer()</code></h4>

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Ioc/IocThrowable.zep">Source on GitHub</a>

[_IocThrowable_][] extends [_Throwable_][] to mark an [_Exception_][] as
IOC-related.

It adds no class members.

<div class="api-tree">

- `Throwable`
- **`Phalcon\Contracts\Container\Ioc\IocThrowable`**
- [`Phalcon\Container\Exceptions\ContainerThrowable`](/5.14/api/phalcon_container/#containerexceptionscontainerthrowable)

</div>

__Uses__ `Throwable`

## Contracts\Container\Ioc\IocTypeAliases

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Ioc/IocTypeAliases.zep">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Contracts\Container\Ioc\IocTypeAliases`**

</div>

## Contracts\Container\Resolver\ReflectionMethodResolver

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Resolver/ReflectionMethodResolver.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

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

<div class="api-tree">

- **`Phalcon\Contracts\Container\Resolver\ReflectionMethodResolver`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionMethod`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverreflectionmethodresolver-resolvemethod">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resolveMethod</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">ReflectionMethod</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$instance</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="contractscontainerresolverreflectionmethodresolver-resolvemethod"><code>resolveMethod()</code></h4>

```php
public function resolveMethod(
IocContainer $ioc,
ReflectionMethod $method,
object $instance
): void;
```

## Contracts\Container\Resolver\ReflectionParameterResolver

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Resolver/ReflectionParameterResolver.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

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

<div class="api-tree">

- **`Phalcon\Contracts\Container\Resolver\ReflectionParameterResolver`**
- [`Phalcon\Contracts\Container\Resolver\ResolverService`](#contractscontainerresolverresolverservice)

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionParameter`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverreflectionparameterresolver-resolveparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveParameter</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">ReflectionParameter</span> <span class="sv">$parameter</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="contractscontainerresolverreflectionparameterresolver-resolveparameter"><code>resolveParameter()</code></h4>

```php
public function resolveParameter(
IocContainer $ioc,
ReflectionParameter $parameter
): mixed;
```

## Contracts\Container\Resolver\Resolvable

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Resolver/Resolvable.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

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

<div class="api-tree">

- **`Phalcon\Contracts\Container\Resolver\Resolvable`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverresolvable-resolve">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolve</span>( <span class="st">IocContainer</span> <span class="sv">$ioc</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="contractscontainerresolverresolvable-resolve"><code>resolve()</code></h4>

```php
public function resolve( IocContainer $ioc ): mixed;
```

## Contracts\Container\Resolver\ResolverService

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Resolver/ResolverService.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

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

<div class="api-tree">

- [`Phalcon\Contracts\Container\Resolver\ReflectionParameterResolver`](#contractscontainerresolverreflectionparameterresolver)
- **`Phalcon\Contracts\Container\Resolver\ResolverService`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer` · `ReflectionMethod` · `ReflectionParameter` · `ReflectionType`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerresolverresolverservice-isresolvableclass">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isResolvableClass</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolvecall">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveCall</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callableObject</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolveclass">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">resolveClass</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$className</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolvemethod">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resolveMethod</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">ReflectionMethod</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$instance</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolveparameters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">resolveParameters</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerresolverresolverservice-resolvetype">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">resolveType</span>(<span class="prm"><span class="st">IocContainer</span> <span class="sv">$ioc</span>,</span><span class="prm"><span class="st">ReflectionType</span> <span class="sv">$type</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

<h4 id="contractscontainerresolverresolverservice-isresolvableclass"><code>isResolvableClass()</code></h4>

```php
public function isResolvableClass( string $className ): bool;
```

<h4 id="contractscontainerresolverresolverservice-resolvecall"><code>resolveCall()</code></h4>

```php
public function resolveCall(
IocContainer $ioc,
callable $callableObject,
array $arguments
): mixed;
```

<h4 id="contractscontainerresolverresolverservice-resolveclass"><code>resolveClass()</code></h4>

```php
public function resolveClass(
IocContainer $ioc,
string $className,
array $arguments
): object;
```

<h4 id="contractscontainerresolverresolverservice-resolvemethod"><code>resolveMethod()</code></h4>

```php
public function resolveMethod(
IocContainer $ioc,
ReflectionMethod $method,
object $instance
): void;
```

<h4 id="contractscontainerresolverresolverservice-resolveparameters"><code>resolveParameters()</code></h4>

```php
public function resolveParameters(
IocContainer $ioc,
array $parameters,
array $arguments
): array;
```

<h4 id="contractscontainerresolverresolverservice-resolvetype"><code>resolveType()</code></h4>

```php
public function resolveType(
IocContainer $ioc,
ReflectionType $type
): mixed;
```

## Contracts\Container\Resolver\ResolverThrowable

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Resolver/ResolverThrowable.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

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

<div class="api-tree">

- `Throwable`
- **`Phalcon\Contracts\Container\Resolver\ResolverThrowable`**

</div>

__Uses__ `Throwable`

## Contracts\Container\Service\Collection

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Service/Collection.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

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

<div class="api-tree">

- [`Phalcon\Contracts\Container\Ioc\IocContainer`](#contractscontaineriocioccontainer)
- **`Phalcon\Contracts\Container\Service\Collection`**

</div>

__Uses__ `Closure` · `Phalcon\Container\Definition\ServiceDefinition` · `Phalcon\Container\Resolver\Resolver` · `Phalcon\Contracts\Container\Ioc\IocContainer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerservicecollection-bind">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">bind</span>(<span class="prm"><span class="st">string</span> <span class="sv">$interfaceName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$concrete</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-callableget">
<code class="vis vis-public">public</code>
<code class="ret">Closure</code>
<code class="sig"><span class="sf">callableGet</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-callablenew">
<code class="vis vis-public">public</code>
<code class="ret">Closure</code>
<code class="sig"><span class="sf">callableNew</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-extend">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">extend</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callableObject</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getalias">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAlias</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getbytag">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getByTag</span>( <span class="st">string</span> <span class="sv">$tag</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getdefinition">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">getDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getinstance">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">getInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-getresolver">
<code class="vis vis-public">public</code>
<code class="ret">Resolver</code>
<code class="sig"><span class="sf">getResolver</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasalias">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasAlias</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasdefinition">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasinstance">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-hasparameter">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-isautowireenabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAutowireEnabled</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-new">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">new</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-newdefinition">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">newDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-set">
<code class="vis vis-public">public</code>
<code class="ret">ServiceDefinition</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setalias">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAlias</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$alias</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setautowire">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAutowire</span>( <span class="st">bool</span> <span class="sv">$enabled</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setdefinition">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDefinition</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">ServiceDefinition</span> <span class="sv">$definition</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setinstance">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$instance</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$lifetime</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-setparameter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setParameter</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetalias">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetAlias</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetdefinition">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetDefinition</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetinstance">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetinstances">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetInstances</span>( <span class="st">string</span> <span class="sv">$lifetime</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicecollection-unsetparameter">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">unsetParameter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 30</div>

<h4 id="contractscontainerservicecollection-bind"><code>bind()</code></h4>

```php
public function bind(
string $interfaceName,
string $concrete
): ServiceDefinition;
```

<h4 id="contractscontainerservicecollection-callableget"><code>callableGet()</code></h4>

```php
public function callableGet( string $name ): Closure;
```

<h4 id="contractscontainerservicecollection-callablenew"><code>callableNew()</code></h4>

```php
public function callableNew( string $name ): Closure;
```

<h4 id="contractscontainerservicecollection-extend"><code>extend()</code></h4>

```php
public function extend(
string $name,
callable $callableObject
): void;
```

<h4 id="contractscontainerservicecollection-get"><code>get()</code></h4>

```php
public function get( string $name ): mixed;
```

<h4 id="contractscontainerservicecollection-getalias"><code>getAlias()</code></h4>

```php
public function getAlias( string $name ): string;
```

<h4 id="contractscontainerservicecollection-getbytag"><code>getByTag()</code></h4>

```php
public function getByTag( string $tag ): array;
```

<h4 id="contractscontainerservicecollection-getdefinition"><code>getDefinition()</code></h4>

```php
public function getDefinition( string $name ): ServiceDefinition;
```

<h4 id="contractscontainerservicecollection-getinstance"><code>getInstance()</code></h4>

```php
public function getInstance( string $name ): object;
```

<h4 id="contractscontainerservicecollection-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter( string $name ): mixed;
```

<h4 id="contractscontainerservicecollection-getresolver"><code>getResolver()</code></h4>

```php
public function getResolver(): Resolver;
```

<h4 id="contractscontainerservicecollection-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

<h4 id="contractscontainerservicecollection-hasalias"><code>hasAlias()</code></h4>

```php
public function hasAlias( string $name ): bool;
```

<h4 id="contractscontainerservicecollection-hasdefinition"><code>hasDefinition()</code></h4>

```php
public function hasDefinition( string $name ): bool;
```

<h4 id="contractscontainerservicecollection-hasinstance"><code>hasInstance()</code></h4>

```php
public function hasInstance( string $name ): bool;
```

<h4 id="contractscontainerservicecollection-hasparameter"><code>hasParameter()</code></h4>

```php
public function hasParameter( string $name ): bool;
```

<h4 id="contractscontainerservicecollection-isautowireenabled"><code>isAutowireEnabled()</code></h4>

```php
public function isAutowireEnabled(): bool;
```

<h4 id="contractscontainerservicecollection-new"><code>new()</code></h4>

```php
public function new( string $name ): mixed;
```

<h4 id="contractscontainerservicecollection-newdefinition"><code>newDefinition()</code></h4>

```php
public function newDefinition( string $name ): ServiceDefinition;
```

<h4 id="contractscontainerservicecollection-set"><code>set()</code></h4>

```php
public function set(
string $name,
mixed $definition
): ServiceDefinition;
```

<h4 id="contractscontainerservicecollection-setalias"><code>setAlias()</code></h4>

```php
public function setAlias(
string $name,
string $alias
): static;
```

<h4 id="contractscontainerservicecollection-setautowire"><code>setAutowire()</code></h4>

```php
public function setAutowire( bool $enabled ): static;
```

<h4 id="contractscontainerservicecollection-setdefinition"><code>setDefinition()</code></h4>

```php
public function setDefinition(
string $name,
ServiceDefinition $definition
): static;
```

<h4 id="contractscontainerservicecollection-setinstance"><code>setInstance()</code></h4>

```php
public function setInstance(
string $name,
object $instance,
string $lifetime
): static;
```

<h4 id="contractscontainerservicecollection-setparameter"><code>setParameter()</code></h4>

```php
public function setParameter(
string $name,
mixed $value
): static;
```

<h4 id="contractscontainerservicecollection-unsetalias"><code>unsetAlias()</code></h4>

```php
public function unsetAlias( string $name ): void;
```

<h4 id="contractscontainerservicecollection-unsetdefinition"><code>unsetDefinition()</code></h4>

```php
public function unsetDefinition( string $name ): void;
```

<h4 id="contractscontainerservicecollection-unsetinstance"><code>unsetInstance()</code></h4>

```php
public function unsetInstance( string $name ): void;
```

<h4 id="contractscontainerservicecollection-unsetinstances"><code>unsetInstances()</code></h4>

```php
public function unsetInstances( string $lifetime ): void;
```

<h4 id="contractscontainerservicecollection-unsetparameter"><code>unsetParameter()</code></h4>

```php
public function unsetParameter( string $name ): void;
```

## Contracts\Container\Service\Definition

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Service/Definition.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

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

<div class="api-tree">

- **`Phalcon\Contracts\Container\Service\Definition`**

</div>

__Uses__ `Phalcon\Contracts\Container\Ioc\IocContainer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerservicedefinition-addextender">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addExtender</span>( <span class="st">callable</span> <span class="sv">$extender</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-buildservice">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">buildService</span>( <span class="st">IocContainer</span> <span class="sv">$ioc</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getclass">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getClass</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getextenders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getExtenders</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getfactory">
<code class="vis vis-public">public</code>
<code class="ret">callable</code>
<code class="sig"><span class="sf">getFactory</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getlifetime">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLifetime</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-getservicename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getServiceName</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-hasclass">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasClass</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-hasextenders">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasExtenders</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-hasfactory">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasFactory</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setclass">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setClass</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setextenders">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setExtenders</span>( <span class="st">array</span> <span class="sv">$extenders</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setfactory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setFactory</span>( <span class="st">callable</span> <span class="sv">$factory</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-setlifetime">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setLifetime</span>( <span class="st">string</span> <span class="sv">$lifetime</span> )</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-unsetclass">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">unsetClass</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-unsetextenders">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">unsetExtenders</span>()</code>
</a>
<a class="api-item" href="#contractscontainerservicedefinition-unsetfactory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">unsetFactory</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 17</div>

<h4 id="contractscontainerservicedefinition-addextender"><code>addExtender()</code></h4>

```php
public function addExtender( callable $extender ): static;
```

<h4 id="contractscontainerservicedefinition-buildservice"><code>buildService()</code></h4>

```php
public function buildService( IocContainer $ioc ): object;
```

<h4 id="contractscontainerservicedefinition-getclass"><code>getClass()</code></h4>

```php
public function getClass(): string;
```

<h4 id="contractscontainerservicedefinition-getextenders"><code>getExtenders()</code></h4>

```php
public function getExtenders(): array;
```

<h4 id="contractscontainerservicedefinition-getfactory"><code>getFactory()</code></h4>

```php
public function getFactory(): callable;
```

<h4 id="contractscontainerservicedefinition-getlifetime"><code>getLifetime()</code></h4>

```php
public function getLifetime(): string;
```

<h4 id="contractscontainerservicedefinition-getservicename"><code>getServiceName()</code></h4>

```php
public function getServiceName(): string;
```

<h4 id="contractscontainerservicedefinition-hasclass"><code>hasClass()</code></h4>

```php
public function hasClass(): bool;
```

<h4 id="contractscontainerservicedefinition-hasextenders"><code>hasExtenders()</code></h4>

```php
public function hasExtenders(): bool;
```

<h4 id="contractscontainerservicedefinition-hasfactory"><code>hasFactory()</code></h4>

```php
public function hasFactory(): bool;
```

<h4 id="contractscontainerservicedefinition-setclass"><code>setClass()</code></h4>

```php
public function setClass( string $className ): static;
```

<h4 id="contractscontainerservicedefinition-setextenders"><code>setExtenders()</code></h4>

```php
public function setExtenders( array $extenders ): static;
```

<h4 id="contractscontainerservicedefinition-setfactory"><code>setFactory()</code></h4>

```php
public function setFactory( callable $factory ): static;
```

<h4 id="contractscontainerservicedefinition-setlifetime"><code>setLifetime()</code></h4>

```php
public function setLifetime( string $lifetime ): static;
```

<h4 id="contractscontainerservicedefinition-unsetclass"><code>unsetClass()</code></h4>

```php
public function unsetClass(): static;
```

<h4 id="contractscontainerservicedefinition-unsetextenders"><code>unsetExtenders()</code></h4>

```php
public function unsetExtenders(): static;
```

<h4 id="contractscontainerservicedefinition-unsetfactory"><code>unsetFactory()</code></h4>

```php
public function unsetFactory(): static;
```

## Contracts\Container\Service\Provider

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Service/Provider.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

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

<div class="api-tree">

- **`Phalcon\Contracts\Container\Service\Provider`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractscontainerserviceprovider-provide">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">provide</span>( <span class="st">Collection</span> <span class="sv">$services</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="contractscontainerserviceprovider-provide"><code>provide()</code></h4>

```php
public function provide( Collection $services ): void;
```

## Contracts\Container\Service\Throwable

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Container/Service/Throwable.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

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

<div class="api-tree">

- `PhpThrowable`
- **`Phalcon\Contracts\Container\Service\Throwable`**

</div>

__Uses__ `Throwable`

## Contracts\Db\Adapter\Adapter

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Adapter/Adapter.zep">Source on GitHub</a>

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

<div class="api-tree">

- **`Phalcon\Contracts\Db\Adapter\Adapter`**
- [`Phalcon\Db\Adapter\AdapterInterface`](/5.14/api/phalcon_db/#dbadapteradapterinterface)

</div>

__Uses__ `Phalcon\Db\ColumnInterface` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface` · `Phalcon\Db\ResultInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbadapteradapter-addcolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ColumnInterface</span> <span class="sv">$column</span></span>)</code>
<span class="desc">Adds a column to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addForeignKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ReferenceInterface</span> <span class="sv">$reference</span></span>)</code>
<span class="desc">Adds a foreign key to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-addindex">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addIndex</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">IndexInterface</span> <span class="sv">$index</span></span>)</code>
<span class="desc">Adds an index to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-addprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addPrimaryKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">IndexInterface</span> <span class="sv">$index</span></span>)</code>
<span class="desc">Adds a primary key to a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-affectedrows">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">affectedRows</span>()</code>
<span class="desc">Returns the number of affected rows by the last INSERT/UPDATE/DELETE</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-begin">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">begin</span>( <span class="st">bool</span> <span class="sv">$nesting</span><span class="sm"> = true</span> )</code>
<span class="desc">Starts a transaction in the connection</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-close">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes active connection returning success. Phalcon automatically closes</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-commit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">commit</span>( <span class="st">bool</span> <span class="sv">$nesting</span><span class="sm"> = true</span> )</code>
<span class="desc">Commits the active transaction in the connection</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">connect</span>( <span class="st">array</span> <span class="sv">$descriptor</span><span class="sm"> = []</span> )</code>
<span class="desc">This method is automatically called in \Phalcon\Db\Adapter\Pdo</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-createsavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">createSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Creates a new savepoint</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-createtable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">createTable</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Creates a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-createview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">createView</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Creates a view</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">delete</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$whereCondition</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$dataTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Deletes data from a table using custom RDBMS SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">ColumnInterface[]</code>
<code class="sig"><span class="sf">describeColumns</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schema</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns an array of Phalcon\Db\Column objects describing a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">IndexInterface[]</code>
<code class="sig"><span class="sf">describeIndexes</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schema</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Lists table indexes</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">ReferenceInterface[]</code>
<code class="sig"><span class="sf">describeReferences</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schema</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Lists table references</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropcolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$columnName</span></span>)</code>
<span class="desc">Drops a column from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropForeignKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$referenceName</span></span>)</code>
<span class="desc">Drops a foreign key from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropindex">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropIndex</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$indexName</span></span>)</code>
<span class="desc">Drop an index from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropPrimaryKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span></span>)</code>
<span class="desc">Drops primary key from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-droptable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropTable</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ifExists</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Drops a table from a schema/database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-dropview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">dropView</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ifExists</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Drops a view</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-escapeidentifier">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeIdentifier</span>( <span class="st">mixed</span> <span class="sv">$identifier</span> )</code>
<span class="desc">Escapes a column/table/schema name</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-escapestring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeString</span>( <span class="st">string</span> <span class="sv">$str</span> )</code>
<span class="desc">Escapes a value to avoid SQL injections</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-execute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">execute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlStatement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindParams</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Sends SQL statements to the database server returning the success state.</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchAll</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$fetchMode</span><span class="sm"> = 2</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindParams</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Dumps the complete result of a query into an array</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-fetchcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string|bool</code>
<code class="sig"><span class="sf">fetchColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$column</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Returns the n&#039;th field of first row in a SQL query result</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-fetchone">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchOne</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$fetchMode</span><span class="sm"> = 2</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindParams</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns the first row in a SQL query result</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">forUpdate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$modifier</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns a SQL modified with a FOR UPDATE clause. The optional <code>modifier</code></span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getcolumndefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getColumnDefinition</span>( <span class="st">ColumnInterface</span> <span class="sv">$column</span> )</code>
<span class="desc">Returns the SQL column definition from a column</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getcolumnlist">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getColumnList</span>( <span class="st">mixed</span> <span class="sv">$columnList</span> )</code>
<span class="desc">Gets a list of columns</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getconnectionid">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getConnectionId</span>()</code>
<span class="desc">Gets the active connection unique identifier</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdefaultidvalue">
<code class="vis vis-public">public</code>
<code class="ret">RawValue</code>
<code class="sig"><span class="sf">getDefaultIdValue</span>()</code>
<span class="desc">Return the default identity value to insert in an identity column</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdefaultvalue">
<code class="vis vis-public">public</code>
<code class="ret">RawValue|null</code>
<code class="sig"><span class="sf">getDefaultValue</span>()</code>
<span class="desc">Returns the default value to make the RBDM use the default value declared</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdescriptor">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getDescriptor</span>()</code>
<span class="desc">Return descriptor used to connect to the active database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdialect">
<code class="vis vis-public">public</code>
<code class="ret">DialectInterface</code>
<code class="sig"><span class="sf">getDialect</span>()</code>
<span class="desc">Returns internal dialect instance</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getdialecttype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDialectType</span>()</code>
<span class="desc">Returns the name of the dialect used</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getinternalhandler">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getInternalHandler</span>()</code>
<span class="desc">Return internal PDO handler</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getnestedtransactionsavepointname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getNestedTransactionSavepointName</span>()</code>
<span class="desc">Returns the savepoint name to use for nested transactions</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getrealsqlstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRealSQLStatement</span>()</code>
<span class="desc">Active SQL statement in the object without replace bound parameters</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getsqlbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getSQLBindTypes</span>()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getsqlstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getSQLStatement</span>()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-getsqlvariables">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getSQLVariables</span>()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns type of database system the adapter is used for</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-insert">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">insert</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$fields</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$dataTypes</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Inserts data into a table using custom RDBMS SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-insertasdict">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">insertAsDict</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$dataTypes</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Inserts data into a table using custom RBDM SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-isnestedtransactionswithsavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isNestedTransactionsWithSavepoints</span>()</code>
<span class="desc">Returns if nested transactions should use savepoints</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-isundertransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isUnderTransaction</span>()</code>
<span class="desc">Checks whether connection is under database transaction</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-lastinsertid">
<code class="vis vis-public">public</code>
<code class="ret">string|bool</code>
<code class="sig"><span class="sf">lastInsertId</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns insert id for the auto_increment column inserted in the last SQL</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-limit">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">limit</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$number</span></span>)</code>
<span class="desc">Appends a LIMIT clause to sqlQuery argument</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-listtables">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">listTables</span>( <span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span> )</code>
<span class="desc">List all tables on a database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-listviews">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">listViews</span>( <span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span> )</code>
<span class="desc">List all views on a database</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">modifyColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ColumnInterface</span> <span class="sv">$column</span>,</span><span class="prm"><span class="st">ColumnInterface</span> <span class="sv">$currentColumn</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Modifies a table column based on a definition</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-query">
<code class="vis vis-public">public</code>
<code class="ret">ResultInterface|bool</code>
<code class="sig"><span class="sf">query</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlStatement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindParams</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindTypes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Sends SQL statements to the database server returning the success state.</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-releasesavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">releaseSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Releases given savepoint</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-rollback">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">rollback</span>( <span class="st">bool</span> <span class="sv">$nesting</span><span class="sm"> = true</span> )</code>
<span class="desc">Rollbacks the active transaction in the connection</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-rollbacksavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">rollbackSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Rollbacks given savepoint</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-setnestedtransactionswithsavepoints">
<code class="vis vis-public">public</code>
<code class="ret">\Phalcon\Db\Adapter\AdapterInterface</code>
<code class="sig"><span class="sf">setNestedTransactionsWithSavepoints</span>( <span class="st">bool</span> <span class="sv">$nestedTransactionsWithSavepoints</span> )</code>
<span class="desc">Set if nested transactions should use savepoints</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">sharedLock</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$modifier</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns a SQL modified with a shared-lock clause. See the dialect&#039;s</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-supportsequences">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">supportSequences</span>()</code>
<span class="desc">Check whether the database system requires a sequence to produce</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-supportsdefaultvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">supportsDefaultValue</span>()</code>
<span class="desc">SQLite does not support the DEFAULT keyword</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-tableexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">tableExists</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL checking for the existence of a schema.table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-tableoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">tableOptions</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets creation options from a table</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-update">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">update</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$fields</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$whereCondition</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$dataTypes</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Updates data on a table using custom RDBMS SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-updateasdict">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">updateAsDict</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$whereCondition</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$dataTypes</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Updates data on a table using custom RBDM SQL syntax</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-useexplicitidvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">useExplicitIdValue</span>()</code>
<span class="desc">Check whether the database system requires an explicit value for identity</span>
</a>
<a class="api-item" href="#contractsdbadapteradapter-viewexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">viewExists</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL checking for the existence of a schema.view</span>
</a>
</div>

### Methods

<div class="api-group">Public · 67</div>

<h4 id="contractsdbadapteradapter-addcolumn"><code>addColumn()</code></h4>

```php
public function addColumn(
string $tableName,
string $schemaName,
ColumnInterface $column
): bool;
```

Adds a column to a table

<h4 id="contractsdbadapteradapter-addforeignkey"><code>addForeignKey()</code></h4>

```php
public function addForeignKey(
string $tableName,
string $schemaName,
ReferenceInterface $reference
): bool;
```

Adds a foreign key to a table

<h4 id="contractsdbadapteradapter-addindex"><code>addIndex()</code></h4>

```php
public function addIndex(
string $tableName,
string $schemaName,
IndexInterface $index
): bool;
```

Adds an index to a table

<h4 id="contractsdbadapteradapter-addprimarykey"><code>addPrimaryKey()</code></h4>

```php
public function addPrimaryKey(
string $tableName,
string $schemaName,
IndexInterface $index
): bool;
```

Adds a primary key to a table

<h4 id="contractsdbadapteradapter-affectedrows"><code>affectedRows()</code></h4>

```php
public function affectedRows(): int;
```

Returns the number of affected rows by the last INSERT/UPDATE/DELETE
reported by the database system

<h4 id="contractsdbadapteradapter-begin"><code>begin()</code></h4>

```php
public function begin( bool $nesting = true ): bool;
```

Starts a transaction in the connection

<h4 id="contractsdbadapteradapter-close"><code>close()</code></h4>

```php
public function close(): void;
```

Closes active connection returning success. Phalcon automatically closes
and destroys active connections within Phalcon\Db\Pool

<h4 id="contractsdbadapteradapter-commit"><code>commit()</code></h4>

```php
public function commit( bool $nesting = true ): bool;
```

Commits the active transaction in the connection

<h4 id="contractsdbadapteradapter-connect"><code>connect()</code></h4>

```php
public function connect( array $descriptor = [] ): void;
```

This method is automatically called in \Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection

<h4 id="contractsdbadapteradapter-createsavepoint"><code>createSavepoint()</code></h4>

```php
public function createSavepoint( string $name ): bool;
```

Creates a new savepoint

<h4 id="contractsdbadapteradapter-createtable"><code>createTable()</code></h4>

```php
public function createTable(
string $tableName,
string $schemaName,
array $definition
): bool;
```

Creates a table

<h4 id="contractsdbadapteradapter-createview"><code>createView()</code></h4>

```php
public function createView(
string $viewName,
array $definition,
string $schemaName = null
): bool;
```

Creates a view

<h4 id="contractsdbadapteradapter-delete"><code>delete()</code></h4>

```php
public function delete(
mixed $table,
string $whereCondition = null,
array $placeholders = [],
array $dataTypes = []
): bool;
```

Deletes data from a table using custom RDBMS SQL syntax

<h4 id="contractsdbadapteradapter-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
string $table,
string $schema = null
): ColumnInterface[];
```

Returns an array of Phalcon\Db\Column objects describing a table

<h4 id="contractsdbadapteradapter-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
string $table,
string $schema = null
): IndexInterface[];
```

Lists table indexes

<h4 id="contractsdbadapteradapter-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
string $table,
string $schema = null
): ReferenceInterface[];
```

Lists table references

<h4 id="contractsdbadapteradapter-dropcolumn"><code>dropColumn()</code></h4>

```php
public function dropColumn(
string $tableName,
string $schemaName,
string $columnName
): bool;
```

Drops a column from a table

<h4 id="contractsdbadapteradapter-dropforeignkey"><code>dropForeignKey()</code></h4>

```php
public function dropForeignKey(
string $tableName,
string $schemaName,
string $referenceName
): bool;
```

Drops a foreign key from a table

<h4 id="contractsdbadapteradapter-dropindex"><code>dropIndex()</code></h4>

```php
public function dropIndex(
string $tableName,
string $schemaName,
string $indexName
): bool;
```

Drop an index from a table

<h4 id="contractsdbadapteradapter-dropprimarykey"><code>dropPrimaryKey()</code></h4>

```php
public function dropPrimaryKey(
string $tableName,
string $schemaName
): bool;
```

Drops primary key from a table

<h4 id="contractsdbadapteradapter-droptable"><code>dropTable()</code></h4>

```php
public function dropTable(
string $tableName,
string $schemaName = null,
bool $ifExists = true
): bool;
```

Drops a table from a schema/database

<h4 id="contractsdbadapteradapter-dropview"><code>dropView()</code></h4>

```php
public function dropView(
string $viewName,
string $schemaName = null,
bool $ifExists = true
): bool;
```

Drops a view

<h4 id="contractsdbadapteradapter-escapeidentifier"><code>escapeIdentifier()</code></h4>

```php
public function escapeIdentifier( mixed $identifier ): string;
```

Escapes a column/table/schema name

<h4 id="contractsdbadapteradapter-escapestring"><code>escapeString()</code></h4>

```php
public function escapeString( string $str ): string;
```

Escapes a value to avoid SQL injections

<h4 id="contractsdbadapteradapter-execute"><code>execute()</code></h4>

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

<h4 id="contractsdbadapteradapter-fetchall"><code>fetchAll()</code></h4>

```php
public function fetchAll(
string $sqlQuery,
int $fetchMode = 2,
array $bindParams = [],
array $bindTypes = []
): array;
```

Dumps the complete result of a query into an array

<h4 id="contractsdbadapteradapter-fetchcolumn"><code>fetchColumn()</code></h4>

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

<h4 id="contractsdbadapteradapter-fetchone"><code>fetchOne()</code></h4>

```php
public function fetchOne(
string $sqlQuery,
int $fetchMode = 2,
array $bindParams = [],
array $bindTypes = []
): array;
```

Returns the first row in a SQL query result

<h4 id="contractsdbadapteradapter-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate(
string $sqlQuery,
string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword - pass `Dialect::LOCK_NOWAIT`
or `Dialect::LOCK_SKIP_LOCKED` (or leave as `Dialect::LOCK_NONE`).

<h4 id="contractsdbadapteradapter-getcolumndefinition"><code>getColumnDefinition()</code></h4>

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Returns the SQL column definition from a column

<h4 id="contractsdbadapteradapter-getcolumnlist"><code>getColumnList()</code></h4>

```php
public function getColumnList( mixed $columnList ): string;
```

Gets a list of columns

<h4 id="contractsdbadapteradapter-getconnectionid"><code>getConnectionId()</code></h4>

```php
public function getConnectionId(): int;
```

Gets the active connection unique identifier

<h4 id="contractsdbadapteradapter-getdefaultidvalue"><code>getDefaultIdValue()</code></h4>

```php
public function getDefaultIdValue(): RawValue;
```

Return the default identity value to insert in an identity column

<h4 id="contractsdbadapteradapter-getdefaultvalue"><code>getDefaultValue()</code></h4>

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

<h4 id="contractsdbadapteradapter-getdescriptor"><code>getDescriptor()</code></h4>

```php
public function getDescriptor(): array;
```

Return descriptor used to connect to the active database

<h4 id="contractsdbadapteradapter-getdialect"><code>getDialect()</code></h4>

```php
public function getDialect(): DialectInterface;
```

Returns internal dialect instance

<h4 id="contractsdbadapteradapter-getdialecttype"><code>getDialectType()</code></h4>

```php
public function getDialectType(): string;
```

Returns the name of the dialect used

<h4 id="contractsdbadapteradapter-getinternalhandler"><code>getInternalHandler()</code></h4>

```php
public function getInternalHandler(): mixed;
```

Return internal PDO handler

<h4 id="contractsdbadapteradapter-getnestedtransactionsavepointname"><code>getNestedTransactionSavepointName()</code></h4>

```php
public function getNestedTransactionSavepointName(): string;
```

Returns the savepoint name to use for nested transactions

<h4 id="contractsdbadapteradapter-getrealsqlstatement"><code>getRealSQLStatement()</code></h4>

```php
public function getRealSQLStatement(): string;
```

Active SQL statement in the object without replace bound parameters

<h4 id="contractsdbadapteradapter-getsqlbindtypes"><code>getSQLBindTypes()</code></h4>

```php
public function getSQLBindTypes(): array;
```

Active SQL statement in the object

<h4 id="contractsdbadapteradapter-getsqlstatement"><code>getSQLStatement()</code></h4>

```php
public function getSQLStatement(): string;
```

Active SQL statement in the object

<h4 id="contractsdbadapteradapter-getsqlvariables"><code>getSQLVariables()</code></h4>

```php
public function getSQLVariables(): array;
```

Active SQL statement in the object

<h4 id="contractsdbadapteradapter-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Returns type of database system the adapter is used for

<h4 id="contractsdbadapteradapter-insert"><code>insert()</code></h4>

```php
public function insert(
string $table,
array $values,
mixed $fields = null,
mixed $dataTypes = null
): bool;
```

Inserts data into a table using custom RDBMS SQL syntax

<h4 id="contractsdbadapteradapter-insertasdict"><code>insertAsDict()</code></h4>

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

<h4 id="contractsdbadapteradapter-isnestedtransactionswithsavepoints"><code>isNestedTransactionsWithSavepoints()</code></h4>

```php
public function isNestedTransactionsWithSavepoints(): bool;
```

Returns if nested transactions should use savepoints

<h4 id="contractsdbadapteradapter-isundertransaction"><code>isUnderTransaction()</code></h4>

```php
public function isUnderTransaction(): bool;
```

Checks whether connection is under database transaction

<h4 id="contractsdbadapteradapter-lastinsertid"><code>lastInsertId()</code></h4>

```php
public function lastInsertId( string $name = null ): string|bool;
```

Returns insert id for the auto_increment column inserted in the last SQL
statement

<h4 id="contractsdbadapteradapter-limit"><code>limit()</code></h4>

```php
public function limit(
string $sqlQuery,
mixed $number
): string;
```

Appends a LIMIT clause to sqlQuery argument

<h4 id="contractsdbadapteradapter-listtables"><code>listTables()</code></h4>

```php
public function listTables( string $schemaName = null ): array;
```

List all tables on a database

<h4 id="contractsdbadapteradapter-listviews"><code>listViews()</code></h4>

```php
public function listViews( string $schemaName = null ): array;
```

List all views on a database

<h4 id="contractsdbadapteradapter-modifycolumn"><code>modifyColumn()</code></h4>

```php
public function modifyColumn(
string $tableName,
string $schemaName,
ColumnInterface $column,
ColumnInterface $currentColumn = null
): bool;
```

Modifies a table column based on a definition

<h4 id="contractsdbadapteradapter-query"><code>query()</code></h4>

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

<h4 id="contractsdbadapteradapter-releasesavepoint"><code>releaseSavepoint()</code></h4>

```php
public function releaseSavepoint( string $name ): bool;
```

Releases given savepoint

<h4 id="contractsdbadapteradapter-rollback"><code>rollback()</code></h4>

```php
public function rollback( bool $nesting = true ): bool;
```

Rollbacks the active transaction in the connection

<h4 id="contractsdbadapteradapter-rollbacksavepoint"><code>rollbackSavepoint()</code></h4>

```php
public function rollbackSavepoint( string $name ): bool;
```

Rollbacks given savepoint

<h4 id="contractsdbadapteradapter-setnestedtransactionswithsavepoints"><code>setNestedTransactionsWithSavepoints()</code></h4>

```php
public function setNestedTransactionsWithSavepoints( bool $nestedTransactionsWithSavepoints ): \Phalcon\Db\Adapter\AdapterInterface;
```

Set if nested transactions should use savepoints

<h4 id="contractsdbadapteradapter-sharedlock"><code>sharedLock()</code></h4>

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

<h4 id="contractsdbadapteradapter-supportsequences"><code>supportSequences()</code></h4>

```php
public function supportSequences(): bool;
```

Check whether the database system requires a sequence to produce
auto-numeric values

<h4 id="contractsdbadapteradapter-supportsdefaultvalue"><code>supportsDefaultValue()</code></h4>

```php
public function supportsDefaultValue(): bool;
```

SQLite does not support the DEFAULT keyword

@deprecated Will re removed in the next version

<h4 id="contractsdbadapteradapter-tableexists"><code>tableExists()</code></h4>

```php
public function tableExists(
string $tableName,
string $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.table

<h4 id="contractsdbadapteradapter-tableoptions"><code>tableOptions()</code></h4>

```php
public function tableOptions(
string $tableName,
string $schemaName = null
): array;
```

Gets creation options from a table

<h4 id="contractsdbadapteradapter-update"><code>update()</code></h4>

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

<h4 id="contractsdbadapteradapter-updateasdict"><code>updateAsDict()</code></h4>

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

<h4 id="contractsdbadapteradapter-useexplicitidvalue"><code>useExplicitIdValue()</code></h4>

```php
public function useExplicitIdValue(): bool;
```

Check whether the database system requires an explicit value for identity
columns

<h4 id="contractsdbadapteradapter-viewexists"><code>viewExists()</code></h4>

```php
public function viewExists(
string $viewName,
string $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.view

## Contracts\Db\Check

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Check.zep">Source on GitHub</a>

Canonical contract for Phalcon\Db\Check.

<div class="api-tree">

- **`Phalcon\Contracts\Db\Check`**
- [`Phalcon\Db\CheckInterface`](/5.14/api/phalcon_db/#dbcheckinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbcheck-getexpression">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExpression</span>()</code>
<span class="desc">Gets the CHECK expression (the SQL boolean predicate).</span>
</a>
<a class="api-item" href="#contractsdbcheck-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Gets the constraint name. An empty string indicates an unnamed CHECK</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="contractsdbcheck-getexpression"><code>getExpression()</code></h4>

```php
public function getExpression(): string;
```

Gets the CHECK expression (the SQL boolean predicate).

<h4 id="contractsdbcheck-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Gets the constraint name. An empty string indicates an unnamed CHECK
constraint - the dialect will emit the clause without a `CONSTRAINT`
prefix in that case.

## Contracts\Db\Column

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Column.zep">Source on GitHub</a>

Canonical contract for Phalcon\Db\Column.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - getGenerationExpression() : string | null
             - isArray()                 : bool
             - isGenerated()             : bool
             - isGenerationStored()      : bool
             - isInvisible()             : bool

<div class="api-tree">

- **`Phalcon\Contracts\Db\Column`**
- [`Phalcon\Db\ColumnInterface`](/5.14/api/phalcon_db/#dbcolumninterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbcolumn-getafterposition">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getAfterPosition</span>()</code>
<span class="desc">Check whether field absolute to position in table</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getbindtype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getBindType</span>()</code>
<span class="desc">Returns the type of bind handling</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getdefault">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getDefault</span>()</code>
<span class="desc">Returns default value of column</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns column name</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getscale">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getScale</span>()</code>
<span class="desc">Returns column scale</span>
</a>
<a class="api-item" href="#contractsdbcolumn-getsize">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig"><span class="sf">getSize</span>()</code>
<span class="desc">Returns column size</span>
</a>
<a class="api-item" href="#contractsdbcolumn-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns column type</span>
</a>
<a class="api-item" href="#contractsdbcolumn-gettypereference">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getTypeReference</span>()</code>
<span class="desc">Returns column type reference</span>
</a>
<a class="api-item" href="#contractsdbcolumn-gettypevalues">
<code class="vis vis-public">public</code>
<code class="ret">array|string|int</code>
<code class="sig"><span class="sf">getTypeValues</span>()</code>
<span class="desc">Returns column type values</span>
</a>
<a class="api-item" href="#contractsdbcolumn-hasdefault">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasDefault</span>()</code>
<span class="desc">Check whether column has default value</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isautoincrement">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAutoIncrement</span>()</code>
<span class="desc">Auto-Increment</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isfirst">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isFirst</span>()</code>
<span class="desc">Check whether column have first position in table</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isnotnull">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isNotNull</span>()</code>
<span class="desc">Not null</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isnumeric">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isNumeric</span>()</code>
<span class="desc">Check whether column have an numeric type</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isprimary">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPrimary</span>()</code>
<span class="desc">Column is part of the primary key?</span>
</a>
<a class="api-item" href="#contractsdbcolumn-isunsigned">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isUnsigned</span>()</code>
<span class="desc">Returns true if number column is unsigned</span>
</a>
</div>

### Methods

<div class="api-group">Public · 16</div>

<h4 id="contractsdbcolumn-getafterposition"><code>getAfterPosition()</code></h4>

```php
public function getAfterPosition(): string|null;
```

Check whether field absolute to position in table

<h4 id="contractsdbcolumn-getbindtype"><code>getBindType()</code></h4>

```php
public function getBindType(): int;
```

Returns the type of bind handling

<h4 id="contractsdbcolumn-getdefault"><code>getDefault()</code></h4>

```php
public function getDefault(): mixed;
```

Returns default value of column

<h4 id="contractsdbcolumn-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns column name

<h4 id="contractsdbcolumn-getscale"><code>getScale()</code></h4>

```php
public function getScale(): int;
```

Returns column scale

<h4 id="contractsdbcolumn-getsize"><code>getSize()</code></h4>

```php
public function getSize(): int|string;
```

Returns column size

<h4 id="contractsdbcolumn-gettype"><code>getType()</code></h4>

```php
public function getType(): int|string;
```

Returns column type

<h4 id="contractsdbcolumn-gettypereference"><code>getTypeReference()</code></h4>

```php
public function getTypeReference(): int;
```

Returns column type reference

<h4 id="contractsdbcolumn-gettypevalues"><code>getTypeValues()</code></h4>

```php
public function getTypeValues(): array|string|int;
```

Returns column type values

<h4 id="contractsdbcolumn-hasdefault"><code>hasDefault()</code></h4>

```php
public function hasDefault(): bool;
```

Check whether column has default value

<h4 id="contractsdbcolumn-isautoincrement"><code>isAutoIncrement()</code></h4>

```php
public function isAutoIncrement(): bool;
```

Auto-Increment

<h4 id="contractsdbcolumn-isfirst"><code>isFirst()</code></h4>

```php
public function isFirst(): bool;
```

Check whether column have first position in table

<h4 id="contractsdbcolumn-isnotnull"><code>isNotNull()</code></h4>

```php
public function isNotNull(): bool;
```

Not null

<h4 id="contractsdbcolumn-isnumeric"><code>isNumeric()</code></h4>

```php
public function isNumeric(): bool;
```

Check whether column have an numeric type

<h4 id="contractsdbcolumn-isprimary"><code>isPrimary()</code></h4>

```php
public function isPrimary(): bool;
```

Column is part of the primary key?

<h4 id="contractsdbcolumn-isunsigned"><code>isUnsigned()</code></h4>

```php
public function isUnsigned(): bool;
```

Returns true if number column is unsigned

## Contracts\Db\Dialect

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Dialect.zep">Source on GitHub</a>

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

<div class="api-tree">

- **`Phalcon\Contracts\Db\Dialect`**
- [`Phalcon\Db\DialectInterface`](/5.14/api/phalcon_db/#dbdialectinterface)

</div>

__Uses__ `Phalcon\Db\ColumnInterface` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\ReferenceInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbdialect-addcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">addColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ColumnInterface</span> <span class="sv">$column</span></span>)</code>
<span class="desc">Generates SQL to add a column to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">addForeignKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ReferenceInterface</span> <span class="sv">$reference</span></span>)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-addindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">addIndex</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">IndexInterface</span> <span class="sv">$index</span></span>)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-addprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">addPrimaryKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">IndexInterface</span> <span class="sv">$index</span></span>)</code>
<span class="desc">Generates SQL to add the primary key to a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-createsavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">createSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Generate SQL to create a new savepoint</span>
</a>
<a class="api-item" href="#contractsdbdialect-createtable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">createTable</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Generates SQL to create a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-createview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">createView</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL to create a view</span>
</a>
<a class="api-item" href="#contractsdbdialect-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">describeColumns</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schema</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL to describe a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">describeIndexes</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schema</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL to query indexes on a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">describeReferences</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schema</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL to query foreign keys on a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$columnName</span></span>)</code>
<span class="desc">Generates SQL to delete a column from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropForeignKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$referenceName</span></span>)</code>
<span class="desc">Generates SQL to delete a foreign key from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropIndex</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$indexName</span></span>)</code>
<span class="desc">Generates SQL to delete an index from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropPrimaryKey</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span></span>)</code>
<span class="desc">Generates SQL to delete primary key from a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-droptable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropTable</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ifExists</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Generates SQL to drop a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-dropview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dropView</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ifExists</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Generates SQL to drop a view</span>
</a>
<a class="api-item" href="#contractsdbdialect-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">forUpdate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$modifier</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns a SQL modified with a FOR UPDATE clause. The optional <code>modifier</code></span>
</a>
<a class="api-item" href="#contractsdbdialect-getcolumndefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getColumnDefinition</span>( <span class="st">ColumnInterface</span> <span class="sv">$column</span> )</code>
<span class="desc">Gets the column name in RDBMS</span>
</a>
<a class="api-item" href="#contractsdbdialect-getcolumnlist">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getColumnList</span>( <span class="st">array</span> <span class="sv">$columnList</span> )</code>
<span class="desc">Gets a list of columns</span>
</a>
<a class="api-item" href="#contractsdbdialect-getcustomfunctions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getCustomFunctions</span>()</code>
<span class="desc">Returns registered functions</span>
</a>
<a class="api-item" href="#contractsdbdialect-getsqlexpression">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getSqlExpression</span>(<span class="prm"><span class="st">array</span> <span class="sv">$expression</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$escapeChar</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$bindCounts</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Transforms an intermediate representation for an expression into a</span>
</a>
<a class="api-item" href="#contractsdbdialect-limit">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">limit</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$number</span></span>)</code>
<span class="desc">Generates the SQL for LIMIT clause</span>
</a>
<a class="api-item" href="#contractsdbdialect-listtables">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">listTables</span>( <span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span> )</code>
<span class="desc">List all tables in database</span>
</a>
<a class="api-item" href="#contractsdbdialect-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">modifyColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span>,</span><span class="prm"><span class="st">ColumnInterface</span> <span class="sv">$column</span>,</span><span class="prm"><span class="st">ColumnInterface</span> <span class="sv">$currentColumn</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL to modify a column in a table</span>
</a>
<a class="api-item" href="#contractsdbdialect-registercustomfunction">
<code class="vis vis-public">public</code>
<code class="ret">\Phalcon\Db\Dialect</code>
<code class="sig"><span class="sf">registerCustomFunction</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$customFunction</span></span>)</code>
<span class="desc">Registers custom SQL functions</span>
</a>
<a class="api-item" href="#contractsdbdialect-releasesavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">releaseSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Generate SQL to release a savepoint</span>
</a>
<a class="api-item" href="#contractsdbdialect-rollbacksavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">rollbackSavepoint</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Generate SQL to rollback a savepoint</span>
</a>
<a class="api-item" href="#contractsdbdialect-select">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">select</span>( <span class="st">array</span> <span class="sv">$definition</span> )</code>
<span class="desc">Builds a SELECT statement</span>
</a>
<a class="api-item" href="#contractsdbdialect-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">sharedLock</span>(<span class="prm"><span class="st">string</span> <span class="sv">$sqlQuery</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$modifier</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns a SQL modified with a shared-lock clause. MySQL emits</span>
</a>
<a class="api-item" href="#contractsdbdialect-supportsreleasesavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">supportsReleaseSavepoints</span>()</code>
<span class="desc">Checks whether the platform supports releasing savepoints.</span>
</a>
<a class="api-item" href="#contractsdbdialect-supportssavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">supportsSavepoints</span>()</code>
<span class="desc">Checks whether the platform supports savepoints</span>
</a>
<a class="api-item" href="#contractsdbdialect-tableexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">tableExists</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tableName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL checking for the existence of a schema.table</span>
</a>
<a class="api-item" href="#contractsdbdialect-tableoptions">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">tableOptions</span>(<span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schema</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates the SQL to describe the table creation options</span>
</a>
<a class="api-item" href="#contractsdbdialect-viewexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">viewExists</span>(<span class="prm"><span class="st">string</span> <span class="sv">$viewName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$schemaName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates SQL checking for the existence of a schema.view</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">LOCK_NONE</span><span class="sm"> = &quot;&quot;</span></code>
<span class="desc">No row-lock modifier - the default behavior for <code>forUpdate()</code>.</span>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">LOCK_NOWAIT</span><span class="sm"> = &quot;NOWAIT&quot;</span></code>
<span class="desc">Append <code>NOWAIT</code> to the <code>FOR UPDATE</code> clause - the query fails immediately if a row it needs is locked instead of blocking. MySQL 8.0+ and PostgreSQL 9.5+ recognize this. SQLite has no row-level locking and silently ignores the modifier.</span>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">LOCK_SKIP_LOCKED</span><span class="sm"> = &quot;SKIP LOCKED&quot;</span></code>
<span class="desc">Append <code>SKIP LOCKED</code> to the <code>FOR UPDATE</code> clause - the query returns rows that are not currently locked and silently skips ones that are. MySQL 8.0+ and PostgreSQL 9.5+ recognize this. SQLite ignores it.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 34</div>

<h4 id="contractsdbdialect-addcolumn"><code>addColumn()</code></h4>

```php
public function addColumn(
string $tableName,
string $schemaName,
ColumnInterface $column
): string;
```

Generates SQL to add a column to a table

<h4 id="contractsdbdialect-addforeignkey"><code>addForeignKey()</code></h4>

```php
public function addForeignKey(
string $tableName,
string $schemaName,
ReferenceInterface $reference
): string;
```

Generates SQL to add an index to a table

<h4 id="contractsdbdialect-addindex"><code>addIndex()</code></h4>

```php
public function addIndex(
string $tableName,
string $schemaName,
IndexInterface $index
): string;
```

Generates SQL to add an index to a table

<h4 id="contractsdbdialect-addprimarykey"><code>addPrimaryKey()</code></h4>

```php
public function addPrimaryKey(
string $tableName,
string $schemaName,
IndexInterface $index
): string;
```

Generates SQL to add the primary key to a table

<h4 id="contractsdbdialect-createsavepoint"><code>createSavepoint()</code></h4>

```php
public function createSavepoint( string $name ): string;
```

Generate SQL to create a new savepoint

<h4 id="contractsdbdialect-createtable"><code>createTable()</code></h4>

```php
public function createTable(
string $tableName,
string $schemaName,
array $definition
): string;
```

Generates SQL to create a table

<h4 id="contractsdbdialect-createview"><code>createView()</code></h4>

```php
public function createView(
string $viewName,
array $definition,
string $schemaName = null
): string;
```

Generates SQL to create a view

<h4 id="contractsdbdialect-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
string $table,
string $schema = null
): string;
```

Generates SQL to describe a table

<h4 id="contractsdbdialect-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
string $table,
string $schema = null
): string;
```

Generates SQL to query indexes on a table

<h4 id="contractsdbdialect-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
string $table,
string $schema = null
): string;
```

Generates SQL to query foreign keys on a table

<h4 id="contractsdbdialect-dropcolumn"><code>dropColumn()</code></h4>

```php
public function dropColumn(
string $tableName,
string $schemaName,
string $columnName
): string;
```

Generates SQL to delete a column from a table

<h4 id="contractsdbdialect-dropforeignkey"><code>dropForeignKey()</code></h4>

```php
public function dropForeignKey(
string $tableName,
string $schemaName,
string $referenceName
): string;
```

Generates SQL to delete a foreign key from a table

<h4 id="contractsdbdialect-dropindex"><code>dropIndex()</code></h4>

```php
public function dropIndex(
string $tableName,
string $schemaName,
string $indexName
): string;
```

Generates SQL to delete an index from a table

<h4 id="contractsdbdialect-dropprimarykey"><code>dropPrimaryKey()</code></h4>

```php
public function dropPrimaryKey(
string $tableName,
string $schemaName
): string;
```

Generates SQL to delete primary key from a table

<h4 id="contractsdbdialect-droptable"><code>dropTable()</code></h4>

```php
public function dropTable(
string $tableName,
string $schemaName,
bool $ifExists = true
): string;
```

Generates SQL to drop a table

<h4 id="contractsdbdialect-dropview"><code>dropView()</code></h4>

```php
public function dropView(
string $viewName,
string $schemaName = null,
bool $ifExists = true
): string;
```

Generates SQL to drop a view

<h4 id="contractsdbdialect-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate(
string $sqlQuery,
string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword - pass `Dialect::LOCK_NOWAIT`
or `Dialect::LOCK_SKIP_LOCKED` (or leave as `Dialect::LOCK_NONE`).

<h4 id="contractsdbdialect-getcolumndefinition"><code>getColumnDefinition()</code></h4>

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in RDBMS

<h4 id="contractsdbdialect-getcolumnlist"><code>getColumnList()</code></h4>

```php
public function getColumnList( array $columnList ): string;
```

Gets a list of columns

<h4 id="contractsdbdialect-getcustomfunctions"><code>getCustomFunctions()</code></h4>

```php
public function getCustomFunctions(): array;
```

Returns registered functions

<h4 id="contractsdbdialect-getsqlexpression"><code>getSqlExpression()</code></h4>

```php
public function getSqlExpression(
array $expression,
string $escapeChar = null,
array $bindCounts = []
): string;
```

Transforms an intermediate representation for an expression into a
database system valid expression

<h4 id="contractsdbdialect-limit"><code>limit()</code></h4>

```php
public function limit(
string $sqlQuery,
mixed $number
): string;
```

Generates the SQL for LIMIT clause

<h4 id="contractsdbdialect-listtables"><code>listTables()</code></h4>

```php
public function listTables( string $schemaName = null ): string;
```

List all tables in database

<h4 id="contractsdbdialect-modifycolumn"><code>modifyColumn()</code></h4>

```php
public function modifyColumn(
string $tableName,
string $schemaName,
ColumnInterface $column,
ColumnInterface $currentColumn = null
): string;
```

Generates SQL to modify a column in a table

<h4 id="contractsdbdialect-registercustomfunction"><code>registerCustomFunction()</code></h4>

```php
public function registerCustomFunction(
string $name,
callable $customFunction
): \Phalcon\Db\Dialect;
```

Registers custom SQL functions

<h4 id="contractsdbdialect-releasesavepoint"><code>releaseSavepoint()</code></h4>

```php
public function releaseSavepoint( string $name ): string;
```

Generate SQL to release a savepoint

<h4 id="contractsdbdialect-rollbacksavepoint"><code>rollbackSavepoint()</code></h4>

```php
public function rollbackSavepoint( string $name ): string;
```

Generate SQL to rollback a savepoint

<h4 id="contractsdbdialect-select"><code>select()</code></h4>

```php
public function select( array $definition ): string;
```

Builds a SELECT statement

<h4 id="contractsdbdialect-sharedlock"><code>sharedLock()</code></h4>

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

<h4 id="contractsdbdialect-supportsreleasesavepoints"><code>supportsReleaseSavepoints()</code></h4>

```php
public function supportsReleaseSavepoints(): bool;
```

Checks whether the platform supports releasing savepoints.

<h4 id="contractsdbdialect-supportssavepoints"><code>supportsSavepoints()</code></h4>

```php
public function supportsSavepoints(): bool;
```

Checks whether the platform supports savepoints

<h4 id="contractsdbdialect-tableexists"><code>tableExists()</code></h4>

```php
public function tableExists(
string $tableName,
string $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.table

<h4 id="contractsdbdialect-tableoptions"><code>tableOptions()</code></h4>

```php
public function tableOptions(
string $table,
string $schema = null
): string;
```

Generates the SQL to describe the table creation options

<h4 id="contractsdbdialect-viewexists"><code>viewExists()</code></h4>

```php
public function viewExists(
string $viewName,
string $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.view

## Contracts\Db\Index

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Index.zep">Source on GitHub</a>

Canonical contract for Phalcon\Db\Index.

@todo v7 - these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - getDirections() : array
             - getWhere()      : string
             - isConcurrent()  : bool
             - isInvisible()   : bool

<div class="api-tree">

- **`Phalcon\Contracts\Db\Index`**
- [`Phalcon\Db\IndexInterface`](/5.14/api/phalcon_db/#dbindexinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbindex-getcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getColumns</span>()</code>
<span class="desc">Gets the columns that corresponds the index</span>
</a>
<a class="api-item" href="#contractsdbindex-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Gets the index name</span>
</a>
<a class="api-item" href="#contractsdbindex-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Gets the index type</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

<h4 id="contractsdbindex-getcolumns"><code>getColumns()</code></h4>

```php
public function getColumns(): array;
```

Gets the columns that corresponds the index

<h4 id="contractsdbindex-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Gets the index name

<h4 id="contractsdbindex-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Gets the index type

## Contracts\Db\Reference

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Reference.zep">Source on GitHub</a>

Canonical contract for Phalcon\Db\Reference.

<div class="api-tree">

- **`Phalcon\Contracts\Db\Reference`**
- [`Phalcon\Db\ReferenceInterface`](/5.14/api/phalcon_db/#dbreferenceinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbreference-getcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getColumns</span>()</code>
<span class="desc">Gets local columns which reference is based</span>
</a>
<a class="api-item" href="#contractsdbreference-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Gets the index name</span>
</a>
<a class="api-item" href="#contractsdbreference-getondelete">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getOnDelete</span>()</code>
<span class="desc">Gets the referenced on delete</span>
</a>
<a class="api-item" href="#contractsdbreference-getonupdate">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getOnUpdate</span>()</code>
<span class="desc">Gets the referenced on update</span>
</a>
<a class="api-item" href="#contractsdbreference-getreferencedcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getReferencedColumns</span>()</code>
<span class="desc">Gets referenced columns</span>
</a>
<a class="api-item" href="#contractsdbreference-getreferencedschema">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getReferencedSchema</span>()</code>
<span class="desc">Gets the schema where referenced table is</span>
</a>
<a class="api-item" href="#contractsdbreference-getreferencedtable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getReferencedTable</span>()</code>
<span class="desc">Gets the referenced table</span>
</a>
<a class="api-item" href="#contractsdbreference-getschemaname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getSchemaName</span>()</code>
<span class="desc">Gets the schema where referenced table is</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

<h4 id="contractsdbreference-getcolumns"><code>getColumns()</code></h4>

```php
public function getColumns(): array;
```

Gets local columns which reference is based

<h4 id="contractsdbreference-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Gets the index name

<h4 id="contractsdbreference-getondelete"><code>getOnDelete()</code></h4>

```php
public function getOnDelete(): string|null;
```

Gets the referenced on delete

<h4 id="contractsdbreference-getonupdate"><code>getOnUpdate()</code></h4>

```php
public function getOnUpdate(): string|null;
```

Gets the referenced on update

<h4 id="contractsdbreference-getreferencedcolumns"><code>getReferencedColumns()</code></h4>

```php
public function getReferencedColumns(): array;
```

Gets referenced columns

<h4 id="contractsdbreference-getreferencedschema"><code>getReferencedSchema()</code></h4>

```php
public function getReferencedSchema(): string|null;
```

Gets the schema where referenced table is

<h4 id="contractsdbreference-getreferencedtable"><code>getReferencedTable()</code></h4>

```php
public function getReferencedTable(): string;
```

Gets the referenced table

<h4 id="contractsdbreference-getschemaname"><code>getSchemaName()</code></h4>

```php
public function getSchemaName(): string|null;
```

Gets the schema where referenced table is

## Contracts\Db\Result

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Result.zep">Source on GitHub</a>

Canonical contract for Phalcon\Db result objects.

<div class="api-tree">

- **`Phalcon\Contracts\Db\Result`**
- [`Phalcon\Db\ResultInterface`](/5.14/api/phalcon_db/#dbresultinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsdbresult-dataseek">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">dataSeek</span>( <span class="st">int</span> <span class="sv">$number</span> )</code>
<span class="desc">Moves internal resultset cursor to another position letting us to fetch a</span>
</a>
<a class="api-item" href="#contractsdbresult-execute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">execute</span>()</code>
<span class="desc">Allows to execute the statement again. Some database systems don&#039;t</span>
</a>
<a class="api-item" href="#contractsdbresult-fetch">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">fetch</span>()</code>
<span class="desc">Fetches an array/object of strings that corresponds to the fetched row,</span>
</a>
<a class="api-item" href="#contractsdbresult-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchAll</span>()</code>
<span class="desc">Returns an array of arrays containing all the records in the result. This</span>
</a>
<a class="api-item" href="#contractsdbresult-fetcharray">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">fetchArray</span>()</code>
<span class="desc">Returns an array of strings that corresponds to the fetched row, or FALSE</span>
</a>
<a class="api-item" href="#contractsdbresult-getinternalresult">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement</code>
<code class="sig"><span class="sf">getInternalResult</span>()</code>
<span class="desc">Gets the internal PDO result object</span>
</a>
<a class="api-item" href="#contractsdbresult-numrows">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">numRows</span>()</code>
<span class="desc">Gets number of rows returned by a resultset</span>
</a>
<a class="api-item" href="#contractsdbresult-setfetchmode">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setFetchMode</span>( <span class="st">int</span> <span class="sv">$fetchMode</span> )</code>
<span class="desc">Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

<h4 id="contractsdbresult-dataseek"><code>dataSeek()</code></h4>

```php
public function dataSeek( int $number );
```

Moves internal resultset cursor to another position letting us to fetch a
certain row

<h4 id="contractsdbresult-execute"><code>execute()</code></h4>

```php
public function execute(): bool;
```

Allows to execute the statement again. Some database systems don't
support scrollable cursors. So, as cursors are forward only, we need to
execute the cursor again to fetch rows from the beginning

<h4 id="contractsdbresult-fetch"><code>fetch()</code></h4>

```php
public function fetch(): mixed;
```

Fetches an array/object of strings that corresponds to the fetched row,
or FALSE if there are no more rows. This method is affected by the active
fetch flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

<h4 id="contractsdbresult-fetchall"><code>fetchAll()</code></h4>

```php
public function fetchAll(): array;
```

Returns an array of arrays containing all the records in the result. This
method is affected by the active fetch flag set using
`Phalcon\Db\Result\Pdo::setFetchMode()`

<h4 id="contractsdbresult-fetcharray"><code>fetchArray()</code></h4>

```php
public function fetchArray(): mixed;
```

Returns an array of strings that corresponds to the fetched row, or FALSE
if there are no more rows. This method is affected by the active fetch
flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

<h4 id="contractsdbresult-getinternalresult"><code>getInternalResult()</code></h4>

```php
public function getInternalResult(): \PDOStatement;
```

Gets the internal PDO result object

<h4 id="contractsdbresult-numrows"><code>numRows()</code></h4>

```php
public function numRows(): int;
```

Gets number of rows returned by a resultset

<h4 id="contractsdbresult-setfetchmode"><code>setFetchMode()</code></h4>

```php
public function setFetchMode( int $fetchMode ): bool;
```

Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()

## Contracts\Encryption\Security\CryptoUtils

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/CryptoUtils.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- **`Phalcon\Contracts\Encryption\Security\CryptoUtils`**
- [`Phalcon\Contracts\Encryption\Security\Security`](#contractsencryptionsecuritysecurity)

</div>

__Uses__ `Phalcon\Encryption\Security\Random`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-computehmac">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">computeHmac</span>(<span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$algorithm</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-getrandom">
<code class="vis vis-public">public</code>
<code class="ret">Random</code>
<code class="sig"><span class="sf">getRandom</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-getrandombytes">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getRandomBytes</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-getsaltbytes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getSaltBytes</span>( <span class="st">int</span> <span class="sv">$numberBytes</span><span class="sm"> = 0</span> )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycryptoutils-setrandombytes">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig"><span class="sf">setRandomBytes</span>( <span class="st">int</span> <span class="sv">$randomBytes</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

<h4 id="contractsencryptionsecuritycryptoutils-computehmac"><code>computeHmac()</code></h4>

```php
public function computeHmac(
string $data,
string $key,
string $algorithm,
bool $raw = false
): string;
```

<h4 id="contractsencryptionsecuritycryptoutils-getrandom"><code>getRandom()</code></h4>

```php
public function getRandom(): Random;
```

<h4 id="contractsencryptionsecuritycryptoutils-getrandombytes"><code>getRandomBytes()</code></h4>

```php
public function getRandomBytes(): int;
```

<h4 id="contractsencryptionsecuritycryptoutils-getsaltbytes"><code>getSaltBytes()</code></h4>

```php
public function getSaltBytes( int $numberBytes = 0 ): string;
```

<h4 id="contractsencryptionsecuritycryptoutils-setrandombytes"><code>setRandomBytes()</code></h4>

```php
public function setRandomBytes( int $randomBytes ): Security;
```

## Contracts\Encryption\Security\CsrfProtection

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/CsrfProtection.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- **`Phalcon\Contracts\Encryption\Security\CsrfProtection`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-checktoken">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">checkToken</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tokenKey</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$tokenValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$destroyIfValid</span><span class="sm"> = true</span></span>)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-destroytoken">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig"><span class="sf">destroyToken</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-getrequesttoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getRequestToken</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-getsessiontoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getSessionToken</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-gettoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getToken</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritycsrfprotection-gettokenkey">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getTokenKey</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

<h4 id="contractsencryptionsecuritycsrfprotection-checktoken"><code>checkToken()</code></h4>

```php
public function checkToken(
string $tokenKey = null,
mixed $tokenValue = null,
bool $destroyIfValid = true
): bool;
```

<h4 id="contractsencryptionsecuritycsrfprotection-destroytoken"><code>destroyToken()</code></h4>

```php
public function destroyToken(): Security;
```

<h4 id="contractsencryptionsecuritycsrfprotection-getrequesttoken"><code>getRequestToken()</code></h4>

```php
public function getRequestToken(): string|null;
```

<h4 id="contractsencryptionsecuritycsrfprotection-getsessiontoken"><code>getSessionToken()</code></h4>

```php
public function getSessionToken(): string|null;
```

<h4 id="contractsencryptionsecuritycsrfprotection-gettoken"><code>getToken()</code></h4>

```php
public function getToken(): string|null;
```

<h4 id="contractsencryptionsecuritycsrfprotection-gettokenkey"><code>getTokenKey()</code></h4>

```php
public function getTokenKey(): string|null;
```

## Contracts\Encryption\Security\PasswordSecurity

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/PasswordSecurity.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- **`Phalcon\Contracts\Encryption\Security\PasswordSecurity`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-checkhash">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">checkHash</span>(<span class="prm"><span class="st">string</span> <span class="sv">$password</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$passwordHash</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$maxPassLength</span><span class="sm"> = 0</span></span>)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-getdefaulthash">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getDefaultHash</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-gethashinformation">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHashInformation</span>( <span class="st">string</span> <span class="sv">$hash</span> )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-getworkfactor">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getWorkFactor</span>()</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-hash">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">hash</span>(<span class="prm"><span class="st">string</span> <span class="sv">$password</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-islegacyhash">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isLegacyHash</span>( <span class="st">string</span> <span class="sv">$passwordHash</span> )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-setdefaulthash">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig"><span class="sf">setDefaultHash</span>( <span class="st">int</span> <span class="sv">$defaultHash</span> )</code>
</a>
<a class="api-item" href="#contractsencryptionsecuritypasswordsecurity-setworkfactor">
<code class="vis vis-public">public</code>
<code class="ret">Security</code>
<code class="sig"><span class="sf">setWorkFactor</span>( <span class="st">int</span> <span class="sv">$workFactor</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

<h4 id="contractsencryptionsecuritypasswordsecurity-checkhash"><code>checkHash()</code></h4>

```php
public function checkHash(
string $password,
string $passwordHash,
int $maxPassLength = 0
): bool;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-getdefaulthash"><code>getDefaultHash()</code></h4>

```php
public function getDefaultHash(): int;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-gethashinformation"><code>getHashInformation()</code></h4>

```php
public function getHashInformation( string $hash ): array;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-getworkfactor"><code>getWorkFactor()</code></h4>

```php
public function getWorkFactor(): int;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-hash"><code>hash()</code></h4>

```php
public function hash(
string $password,
array $options = []
): string;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-islegacyhash"><code>isLegacyHash()</code></h4>

```php
public function isLegacyHash( string $passwordHash ): bool;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-setdefaulthash"><code>setDefaultHash()</code></h4>

```php
public function setDefaultHash( int $defaultHash ): Security;
```

<h4 id="contractsencryptionsecuritypasswordsecurity-setworkfactor"><code>setWorkFactor()</code></h4>

```php
public function setWorkFactor( int $workFactor ): Security;
```

## Contracts\Encryption\Security\Security

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/Security.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- [`Phalcon\Contracts\Encryption\Security\CryptoUtils`](#contractsencryptionsecuritycryptoutils)
- **`Phalcon\Contracts\Encryption\Security\Security`** — extends [`Phalcon\Contracts\Encryption\Security\CryptoUtils`](#contractsencryptionsecuritycryptoutils), [`Phalcon\Contracts\Encryption\Security\CsrfProtection`](#contractsencryptionsecuritycsrfprotection), [`Phalcon\Contracts\Encryption\Security\PasswordSecurity`](#contractsencryptionsecuritypasswordsecurity)

</div>

## Contracts\Events\Event

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Event.zep">Source on GitHub</a>

Canonical contract for Phalcon\Events\Event.

<div class="api-tree">

- **`Phalcon\Contracts\Events\Event`**
- [`Phalcon\Events\EventInterface`](/5.14/api/phalcon_events/#eventseventinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventsevent-getdata">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getData</span>()</code>
<span class="desc">Gets event data</span>
</a>
<a class="api-item" href="#contractseventsevent-gettype">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Gets event type</span>
</a>
<a class="api-item" href="#contractseventsevent-iscancelable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isCancelable</span>()</code>
<span class="desc">Check whether the event is cancelable</span>
</a>
<a class="api-item" href="#contractseventsevent-isstopped">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isStopped</span>()</code>
<span class="desc">Check whether the event is currently stopped</span>
</a>
<a class="api-item" href="#contractseventsevent-setdata">
<code class="vis vis-public">public</code>
<code class="ret">Event</code>
<code class="sig"><span class="sf">setData</span>( <span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets event data</span>
</a>
<a class="api-item" href="#contractseventsevent-settype">
<code class="vis vis-public">public</code>
<code class="ret">Event</code>
<code class="sig"><span class="sf">setType</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Sets event type</span>
</a>
<a class="api-item" href="#contractseventsevent-stop">
<code class="vis vis-public">public</code>
<code class="ret">Event</code>
<code class="sig"><span class="sf">stop</span>()</code>
<span class="desc">Stops the event preventing propagation</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

<h4 id="contractseventsevent-getdata"><code>getData()</code></h4>

```php
public function getData(): mixed;
```

Gets event data

<h4 id="contractseventsevent-gettype"><code>getType()</code></h4>

```php
public function getType(): mixed;
```

Gets event type

<h4 id="contractseventsevent-iscancelable"><code>isCancelable()</code></h4>

```php
public function isCancelable(): bool;
```

Check whether the event is cancelable

<h4 id="contractseventsevent-isstopped"><code>isStopped()</code></h4>

```php
public function isStopped(): bool;
```

Check whether the event is currently stopped

<h4 id="contractseventsevent-setdata"><code>setData()</code></h4>

```php
public function setData( mixed $data = null ): Event;
```

Sets event data

<h4 id="contractseventsevent-settype"><code>setType()</code></h4>

```php
public function setType( string $type ): Event;
```

Sets event type

<h4 id="contractseventsevent-stop"><code>stop()</code></h4>

```php
public function stop(): Event;
```

Stops the event preventing propagation

## Contracts\Events\EventsAware

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/EventsAware.zep">Source on GitHub</a>

Canonical contract for Phalcon\Events\EventsAwareInterface. Implemented by
components that accept an events manager and dispatch through it.

Cross-references the legacy ManagerInterface (not the canonical Manager
contract) to preserve LSP for the many AbstractEventsAware subclasses that
already type-hint ManagerInterface. ManagerInterface extends Manager, so
this remains type-compatible with any code that needs the canonical surface.

<div class="api-tree">

- **`Phalcon\Contracts\Events\EventsAware`**
- [`Phalcon\Events\EventsAwareInterface`](/5.14/api/phalcon_events/#eventseventsawareinterface)

</div>

__Uses__ `Phalcon\Events\ManagerInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventseventsaware-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sf">getEventsManager</span>()</code>
<span class="desc">Returns the internal events manager</span>
</a>
<a class="api-item" href="#contractseventseventsaware-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setEventsManager</span>( <span class="st">ManagerInterface</span> <span class="sv">$eventsManager</span> )</code>
<span class="desc">Sets the events manager</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="contractseventseventsaware-geteventsmanager"><code>getEventsManager()</code></h4>

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal events manager

<h4 id="contractseventseventsaware-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

## Contracts\Events\Manager

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Manager.zep">Source on GitHub</a>

Canonical contract for Phalcon\Events\Manager.

<div class="api-tree">

- **`Phalcon\Contracts\Events\Manager`**
- [`Phalcon\Events\ManagerInterface`](/5.14/api/phalcon_events/#eventsmanagerinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventsmanager-addsubscriber">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">addSubscriber</span>( <span class="st">Subscriber</span> <span class="sv">$subscriber</span> )</code>
<span class="desc">Registers an event subscriber. The subscriber&#039;s getSubscribedEvents()</span>
</a>
<a class="api-item" href="#contractseventsmanager-areprioritiesenabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">arePrioritiesEnabled</span>()</code>
<span class="desc">Returns whether priority ordering is currently enabled.</span>
</a>
<a class="api-item" href="#contractseventsmanager-attach">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">attach</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$handler</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$priority</span><span class="sm"> = self::DEFAULT_PRIORITY</span></span>)</code>
<span class="desc">Attach a listener to the events manager.</span>
</a>
<a class="api-item" href="#contractseventsmanager-clearsubscribers">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clearSubscribers</span>()</code>
<span class="desc">Removes every registered subscriber and detaches each listener they</span>
</a>
<a class="api-item" href="#contractseventsmanager-collectresponses">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">collectResponses</span>( <span class="st">bool</span> <span class="sv">$collect</span> )</code>
<span class="desc">Toggle response collection on/off.</span>
</a>
<a class="api-item" href="#contractseventsmanager-detach">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">detach</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$handler</span></span>)</code>
<span class="desc">Detach a listener from the events manager.</span>
</a>
<a class="api-item" href="#contractseventsmanager-detachall">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">detachAll</span>( <span class="st">string</span> <span class="sv">$type</span><span class="sm"> = null</span> )</code>
<span class="desc">Removes all listeners - globally or for a single event type.</span>
</a>
<a class="api-item" href="#contractseventsmanager-enablepriorities">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">enablePriorities</span>( <span class="st">bool</span> <span class="sv">$enablePriorities</span> )</code>
<span class="desc">Toggle priority ordering on/off.</span>
</a>
<a class="api-item" href="#contractseventsmanager-fire">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">fire</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$cancelable</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Fires an event, notifying the active listeners.</span>
</a>
<a class="api-item" href="#contractseventsmanager-getlisteners">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getListeners</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Returns all listeners attached to the given event type.</span>
</a>
<a class="api-item" href="#contractseventsmanager-getresponses">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getResponses</span>()</code>
<span class="desc">Returns the responses recorded during the last fire (when collecting).</span>
</a>
<a class="api-item" href="#contractseventsmanager-getsubscribers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getSubscribers</span>()</code>
<span class="desc">Returns the list of registered subscriber instances.</span>
</a>
<a class="api-item" href="#contractseventsmanager-haslisteners">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasListeners</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Check whether the given event type has any listeners.</span>
</a>
<a class="api-item" href="#contractseventsmanager-iscollecting">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isCollecting</span>()</code>
<span class="desc">Check whether the manager is currently collecting responses.</span>
</a>
<a class="api-item" href="#contractseventsmanager-isvalidhandler">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isValidHandler</span>( <span class="st">mixed</span> <span class="sv">$handler</span> )</code>
<span class="desc">Returns true when the given handler is an object or callable.</span>
</a>
<a class="api-item" href="#contractseventsmanager-removesubscriber">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">removeSubscriber</span>( <span class="st">Subscriber</span> <span class="sv">$subscriber</span> )</code>
<span class="desc">Removes a previously registered subscriber. Detaches every listener the</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">DEFAULT_PRIORITY</span><span class="sm"> = 100</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 16</div>

<h4 id="contractseventsmanager-addsubscriber"><code>addSubscriber()</code></h4>

```php
public function addSubscriber( Subscriber $subscriber ): void;
```

Registers an event subscriber. The subscriber's getSubscribedEvents()
map is parsed and each entry is attached through the regular listener
pipeline.

<h4 id="contractseventsmanager-areprioritiesenabled"><code>arePrioritiesEnabled()</code></h4>

```php
public function arePrioritiesEnabled(): bool;
```

Returns whether priority ordering is currently enabled.

<h4 id="contractseventsmanager-attach"><code>attach()</code></h4>

```php
public function attach(
string $eventType,
mixed $handler,
int $priority = self::DEFAULT_PRIORITY
): void;
```

Attach a listener to the events manager.

<h4 id="contractseventsmanager-clearsubscribers"><code>clearSubscribers()</code></h4>

```php
public function clearSubscribers(): void;
```

Removes every registered subscriber and detaches each listener they
contributed. Listeners attached via attach() are untouched.

<h4 id="contractseventsmanager-collectresponses"><code>collectResponses()</code></h4>

```php
public function collectResponses( bool $collect ): void;
```

Toggle response collection on/off.

<h4 id="contractseventsmanager-detach"><code>detach()</code></h4>

```php
public function detach(
string $eventType,
mixed $handler
): void;
```

Detach a listener from the events manager.

<h4 id="contractseventsmanager-detachall"><code>detachAll()</code></h4>

```php
public function detachAll( string $type = null ): void;
```

Removes all listeners - globally or for a single event type.

<h4 id="contractseventsmanager-enablepriorities"><code>enablePriorities()</code></h4>

```php
public function enablePriorities( bool $enablePriorities ): void;
```

Toggle priority ordering on/off.

<h4 id="contractseventsmanager-fire"><code>fire()</code></h4>

```php
public function fire(
string $eventType,
object $source,
mixed $data = null,
bool $cancelable = true
);
```

Fires an event, notifying the active listeners.

<h4 id="contractseventsmanager-getlisteners"><code>getListeners()</code></h4>

```php
public function getListeners( string $type ): array;
```

Returns all listeners attached to the given event type.

<h4 id="contractseventsmanager-getresponses"><code>getResponses()</code></h4>

```php
public function getResponses(): array;
```

Returns the responses recorded during the last fire (when collecting).

<h4 id="contractseventsmanager-getsubscribers"><code>getSubscribers()</code></h4>

```php
public function getSubscribers(): array;
```

Returns the list of registered subscriber instances.

<h4 id="contractseventsmanager-haslisteners"><code>hasListeners()</code></h4>

```php
public function hasListeners( string $type ): bool;
```

Check whether the given event type has any listeners.

<h4 id="contractseventsmanager-iscollecting"><code>isCollecting()</code></h4>

```php
public function isCollecting(): bool;
```

Check whether the manager is currently collecting responses.

<h4 id="contractseventsmanager-isvalidhandler"><code>isValidHandler()</code></h4>

```php
public function isValidHandler( mixed $handler ): bool;
```

Returns true when the given handler is an object or callable.

<h4 id="contractseventsmanager-removesubscriber"><code>removeSubscriber()</code></h4>

```php
public function removeSubscriber( Subscriber $subscriber ): void;
```

Removes a previously registered subscriber. Detaches every listener the
subscriber declared via getSubscribedEvents(). Idempotent.

## Contracts\Events\Stoppable

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Stoppable.zep">Source on GitHub</a>

Phalcon's local mirror of PSR-14 StoppableEventInterface. Identical shape;
not extended from the PSR interface because the Zephir extension cannot
reference Composer-loaded interfaces at build time. A separate bridge
package exposes a PSR-14 adapter.

<div class="api-tree">

- **`Phalcon\Contracts\Events\Stoppable`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventsstoppable-ispropagationstopped">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPropagationStopped</span>()</code>
<span class="desc">Returns true when the event must stop propagating to subsequent</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="contractseventsstoppable-ispropagationstopped"><code>isPropagationStopped()</code></h4>

```php
public function isPropagationStopped(): bool;
```

Returns true when the event must stop propagating to subsequent
listeners.

## Contracts\Events\Subscriber

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Subscriber.zep">Source on GitHub</a>

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

<div class="api-tree">

- **`Phalcon\Contracts\Events\Subscriber`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractseventssubscriber-getsubscribedevents">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getSubscribedEvents</span>()</code>
<span class="desc">Returns a map of event name =&gt; listener config. Called once per</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="contractseventssubscriber-getsubscribedevents"><code>getSubscribedEvents()</code></h4>

```php
public static function getSubscribedEvents(): array;
```

Returns a map of event name => listener config. Called once per
Manager::addSubscriber() / removeSubscriber() call.

## Contracts\Forms\Schema

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Forms/Schema.zep">Source on GitHub</a>

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

<div class="api-tree">

- **`Phalcon\Contracts\Forms\Schema`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsformsschema-load">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">load</span>()</code>
<span class="desc">Returns an ordered list of normalized element definitions.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="contractsformsschema-load"><code>load()</code></h4>

```php
public function load(): array;
```

Returns an ordered list of normalized element definitions.

## Contracts\Html\Helper\Input\SelectData

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Html/Helper/Input/SelectData.zep">Source on GitHub</a>

Interface for SELECT option data providers.

Return format: [value => label] for flat options;
[groupLabel => [value => label, ...]] for optgroups.

<div class="api-tree">

- **`Phalcon\Contracts\Html\Helper\Input\SelectData`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractshtmlhelperinputselectdata-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Returns the per-option attribute map.</span>
</a>
<a class="api-item" href="#contractshtmlhelperinputselectdata-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="contractshtmlhelperinputselectdata-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Returns the per-option attribute map.

Format: [optionValue => [attrName => stringValue, ...]].
Implementations must return resolved string values; no escaping,
ordering, or rendering is performed here.

<h4 id="contractshtmlhelperinputselectdata-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

## Contracts\Mvc\Model\Relation\CacheKeyProvider

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Mvc/Model/Relation/CacheKeyProvider.zep">Source on GitHub</a>

Interface for models that provide a custom unique key for the reusable
records cache in the Model Manager. Implement this interface when the
default object-identity based key (unique_key) does not produce stable
cache hits across multiple object instances that represent the same
database record.

<div class="api-tree">

- **`Phalcon\Contracts\Mvc\Model\Relation\CacheKeyProvider`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractsmvcmodelrelationcachekeyprovider-getuniquekey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getUniqueKey</span>()</code>
<span class="desc">Returns a string that uniquely identifies this model instance for</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="contractsmvcmodelrelationcachekeyprovider-getuniquekey"><code>getUniqueKey()</code></h4>

```php
public function getUniqueKey(): string;
```

Returns a string that uniquely identifies this model instance for
use as the key in the reusable records cache.

## Contracts\Paginator\Adapter

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Paginator/Adapter.zep">Source on GitHub</a>

Interface for Phalcon\Paginator adapters

<div class="api-tree">

- **`Phalcon\Contracts\Paginator\Adapter`**
- [`Phalcon\Paginator\Adapter\AdapterInterface`](/5.14/api/phalcon_paginator/#paginatoradapteradapterinterface)

</div>

__Uses__ `Phalcon\Paginator\Adapter\AdapterInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractspaginatoradapter-getlimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLimit</span>()</code>
<span class="desc">Get current rows limit</span>
</a>
<a class="api-item" href="#contractspaginatoradapter-paginate">
<code class="vis vis-public">public</code>
<code class="ret">Repository</code>
<code class="sig"><span class="sf">paginate</span>()</code>
<span class="desc">Returns a slice of the resultset to show in the pagination</span>
</a>
<a class="api-item" href="#contractspaginatoradapter-setcurrentpage">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">setCurrentPage</span>( <span class="st">int</span> <span class="sv">$page</span> )</code>
<span class="desc">Set the current page number</span>
</a>
<a class="api-item" href="#contractspaginatoradapter-setlimit">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">setLimit</span>( <span class="st">int</span> <span class="sv">$limit</span> )</code>
<span class="desc">Set current rows limit</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

<h4 id="contractspaginatoradapter-getlimit"><code>getLimit()</code></h4>

```php
public function getLimit(): int;
```

Get current rows limit

<h4 id="contractspaginatoradapter-paginate"><code>paginate()</code></h4>

```php
public function paginate(): Repository;
```

Returns a slice of the resultset to show in the pagination

<h4 id="contractspaginatoradapter-setcurrentpage"><code>setCurrentPage()</code></h4>

```php
public function setCurrentPage( int $page ): AdapterInterface;
```

Set the current page number

<h4 id="contractspaginatoradapter-setlimit"><code>setLimit()</code></h4>

```php
public function setLimit( int $limit ): AdapterInterface;
```

Set current rows limit

## Contracts\Paginator\Repository

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Paginator/Repository.zep">Source on GitHub</a>

Interface for the repository of current state
Phalcon\Paginator\AdapterInterface::paginate()

<div class="api-tree">

- **`Phalcon\Contracts\Paginator\Repository`**
- [`Phalcon\Paginator\RepositoryInterface`](/5.14/api/phalcon_paginator/#paginatorrepositoryinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractspaginatorrepository-getaliases">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAliases</span>()</code>
<span class="desc">Gets the aliases for properties repository</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getcurrent">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getCurrent</span>()</code>
<span class="desc">Gets number of the current page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getfirst">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getFirst</span>()</code>
<span class="desc">Gets number of the first page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getitems">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getItems</span>()</code>
<span class="desc">Gets the items on the current page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getlast">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLast</span>()</code>
<span class="desc">Gets number of the last page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getlimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLimit</span>()</code>
<span class="desc">Gets current rows limit</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getnext">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getNext</span>()</code>
<span class="desc">Gets number of the next page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-getprevious">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getPrevious</span>()</code>
<span class="desc">Gets number of the previous page</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-gettotalitems">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getTotalItems</span>()</code>
<span class="desc">Gets the total number of items</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-setaliases">
<code class="vis vis-public">public</code>
<code class="ret">Repository</code>
<code class="sig"><span class="sf">setAliases</span>( <span class="st">array</span> <span class="sv">$aliases</span> )</code>
<span class="desc">Sets the aliases for properties repository</span>
</a>
<a class="api-item" href="#contractspaginatorrepository-setproperties">
<code class="vis vis-public">public</code>
<code class="ret">Repository</code>
<code class="sig"><span class="sf">setProperties</span>( <span class="st">array</span> <span class="sv">$properties</span> )</code>
<span class="desc">Sets values for properties of the repository</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_CURRENT_PAGE</span><span class="sm"> = &quot;current&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_FIRST_PAGE</span><span class="sm"> = &quot;first&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_ITEMS</span><span class="sm"> = &quot;items&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_LAST_PAGE</span><span class="sm"> = &quot;last&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_LIMIT</span><span class="sm"> = &quot;limit&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_NEXT_PAGE</span><span class="sm"> = &quot;next&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_PREVIOUS_PAGE</span><span class="sm"> = &quot;previous&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROPERTY_TOTAL_ITEMS</span><span class="sm"> = &quot;total_items&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

<h4 id="contractspaginatorrepository-getaliases"><code>getAliases()</code></h4>

```php
public function getAliases(): array;
```

Gets the aliases for properties repository

<h4 id="contractspaginatorrepository-getcurrent"><code>getCurrent()</code></h4>

```php
public function getCurrent(): int;
```

Gets number of the current page

<h4 id="contractspaginatorrepository-getfirst"><code>getFirst()</code></h4>

```php
public function getFirst(): int;
```

Gets number of the first page

<h4 id="contractspaginatorrepository-getitems"><code>getItems()</code></h4>

```php
public function getItems(): mixed;
```

Gets the items on the current page

<h4 id="contractspaginatorrepository-getlast"><code>getLast()</code></h4>

```php
public function getLast(): int;
```

Gets number of the last page

<h4 id="contractspaginatorrepository-getlimit"><code>getLimit()</code></h4>

```php
public function getLimit(): int;
```

Gets current rows limit

<h4 id="contractspaginatorrepository-getnext"><code>getNext()</code></h4>

```php
public function getNext(): int;
```

Gets number of the next page

<h4 id="contractspaginatorrepository-getprevious"><code>getPrevious()</code></h4>

```php
public function getPrevious(): int;
```

Gets number of the previous page

<h4 id="contractspaginatorrepository-gettotalitems"><code>getTotalItems()</code></h4>

```php
public function getTotalItems(): int;
```

Gets the total number of items

<h4 id="contractspaginatorrepository-setaliases"><code>setAliases()</code></h4>

```php
public function setAliases( array $aliases ): Repository;
```

Sets the aliases for properties repository

<h4 id="contractspaginatorrepository-setproperties"><code>setProperties()</code></h4>

```php
public function setProperties( array $properties ): Repository;
```

Sets values for properties of the repository

## Contracts\Support\Collection

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Support/Collection.zep">Source on GitHub</a>

Canonical contract for Phalcon\Support\Collection.

@extends ArrayAccess&lt;int|string, mixed>
@extends IteratorAggregate&lt;int|string, mixed>

<div class="api-tree">

- `ArrayAccess`
- **`Phalcon\Contracts\Support\Collection`** — extends `ArrayAccess`, `IteratorAggregate`
- [`Phalcon\Support\Collection\CollectionInterface`](/5.14/api/phalcon_support/#supportcollectioncollectioninterface)

</div>

__Uses__ `ArrayAccess` · `IteratorAggregate`

### Method Summary

<div class="api-list">
<a class="api-item" href="#contractssupportcollection-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">__get</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#contractssupportcollection-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">__isset</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#contractssupportcollection-__set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
<a class="api-item" href="#contractssupportcollection-__unset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unset</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
</a>
<a class="api-item" href="#contractssupportcollection-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Clears the internal collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-column">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">column</span>( <span class="st">string</span> <span class="sv">$propertyOrMethod</span> )</code>
<span class="desc">Returns the values from a single property/method extracted from every</span>
</a>
<a class="api-item" href="#contractssupportcollection-each">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">each</span>( <span class="st">callable</span> <span class="sv">$callback</span> )</code>
<span class="desc">Invokes the callback for every item in the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-filter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">filter</span>( <span class="st">callable</span> <span class="sv">$callback</span> )</code>
<span class="desc">Returns a new collection of items for which the callback returns true.</span>
</a>
<a class="api-item" href="#contractssupportcollection-first">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">first</span>()</code>
<span class="desc">Returns the first value in the collection or null when empty.</span>
</a>
<a class="api-item" href="#contractssupportcollection-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$cast</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns an element from the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-getkeys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getKeys</span>( <span class="st">bool</span> <span class="sv">$insensitive</span><span class="sm"> = true</span> )</code>
<span class="desc">Returns the keys (insensitive or not) of the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns the configured runtime type guard, or null when not set.</span>
</a>
<a class="api-item" href="#contractssupportcollection-getvalues">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getValues</span>()</code>
<span class="desc">Returns the values of the internal array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Checks whether an element exists in the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-init">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">init</span>( <span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span> )</code>
<span class="desc">Initializes the internal array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-isempty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isEmpty</span>()</code>
<span class="desc">Returns true when the collection has no entries.</span>
</a>
<a class="api-item" href="#contractssupportcollection-keys">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">keys</span>( <span class="st">bool</span> <span class="sv">$insensitive</span><span class="sm"> = true</span> )</code>
<span class="desc">Returns the keys (insensitive or not) of the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-last">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">last</span>()</code>
<span class="desc">Returns the last value in the collection or null when empty.</span>
</a>
<a class="api-item" href="#contractssupportcollection-map">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">map</span>( <span class="st">callable</span> <span class="sv">$callback</span> )</code>
<span class="desc">Returns a new collection with the callback applied to every value.</span>
</a>
<a class="api-item" href="#contractssupportcollection-reduce">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">reduce</span>(<span class="prm"><span class="st">callable</span> <span class="sv">$callback</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$initial</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Reduces the collection to a single value using the callback.</span>
</a>
<a class="api-item" href="#contractssupportcollection-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$element</span> )</code>
<span class="desc">Removes the element from the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-replace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">replace</span>( <span class="st">array</span> <span class="sv">$data</span> )</code>
<span class="desc">Replaces the collection data with a new array, clearing first.</span>
</a>
<a class="api-item" href="#contractssupportcollection-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Stores an element in the collection.</span>
</a>
<a class="api-item" href="#contractssupportcollection-sort">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">sort</span>(<span class="prm"><span class="st">callable</span> <span class="sv">$callback</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$order</span><span class="sm"> = 4</span></span>)</code>
<span class="desc">Returns a new collection sorted by value, preserving keys.</span>
</a>
<a class="api-item" href="#contractssupportcollection-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the collection as an array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-tojson">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toJson</span>( <span class="st">int</span> <span class="sv">$options</span><span class="sm"> = 4194383</span> )</code>
<span class="desc">Returns the collection serialized as a JSON string.</span>
</a>
<a class="api-item" href="#contractssupportcollection-values">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">values</span>()</code>
<span class="desc">Returns the values of the internal array.</span>
</a>
<a class="api-item" href="#contractssupportcollection-where">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">where</span>(<span class="prm"><span class="st">string</span> <span class="sv">$propertyOrMethod</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Returns a new collection containing only the items whose</span>
</a>
</div>

### Methods

<div class="api-group">Public · 28</div>

<h4 id="contractssupportcollection-__get"><code>__get()</code></h4>

```php
public function __get( string $element ): mixed;
```

<h4 id="contractssupportcollection-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $element ): bool;
```

<h4 id="contractssupportcollection-__set"><code>__set()</code></h4>

```php
public function __set(
string $element,
mixed $value
): void;
```

<h4 id="contractssupportcollection-__unset"><code>__unset()</code></h4>

```php
public function __unset( string $element ): void;
```

<h4 id="contractssupportcollection-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Clears the internal collection.

<h4 id="contractssupportcollection-column"><code>column()</code></h4>

```php
public function column( string $propertyOrMethod ): array;
```

Returns the values from a single property/method extracted from every
item in the collection, keyed by the original collection key.

<h4 id="contractssupportcollection-each"><code>each()</code></h4>

```php
public function each( callable $callback ): static;
```

Invokes the callback for every item in the collection.

<h4 id="contractssupportcollection-filter"><code>filter()</code></h4>

```php
public function filter( callable $callback ): static;
```

Returns a new collection of items for which the callback returns true.

<h4 id="contractssupportcollection-first"><code>first()</code></h4>

```php
public function first(): mixed;
```

Returns the first value in the collection or null when empty.

<h4 id="contractssupportcollection-get"><code>get()</code></h4>

```php
public function get(
string $element,
mixed $defaultValue = null,
string $cast = null
): mixed;
```

Returns an element from the collection.

<h4 id="contractssupportcollection-getkeys"><code>getKeys()</code></h4>

```php
public function getKeys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

@deprecated Use \{@see self::keys()\} instead. Will be removed in a future major release.

<h4 id="contractssupportcollection-gettype"><code>getType()</code></h4>

```php
public function getType(): string|null;
```

Returns the configured runtime type guard, or null when not set.

<h4 id="contractssupportcollection-getvalues"><code>getValues()</code></h4>

```php
public function getValues(): array;
```

Returns the values of the internal array.

@deprecated Use \{@see self::values()\} instead. Will be removed in a future major release.

<h4 id="contractssupportcollection-has"><code>has()</code></h4>

```php
public function has( string $element ): bool;
```

Checks whether an element exists in the collection.

<h4 id="contractssupportcollection-init"><code>init()</code></h4>

```php
public function init( array $data = [] ): void;
```

Initializes the internal array.

<h4 id="contractssupportcollection-isempty"><code>isEmpty()</code></h4>

```php
public function isEmpty(): bool;
```

Returns true when the collection has no entries.

<h4 id="contractssupportcollection-keys"><code>keys()</code></h4>

```php
public function keys( bool $insensitive = true ): array;
```

Returns the keys (insensitive or not) of the collection.

<h4 id="contractssupportcollection-last"><code>last()</code></h4>

```php
public function last(): mixed;
```

Returns the last value in the collection or null when empty.

<h4 id="contractssupportcollection-map"><code>map()</code></h4>

```php
public function map( callable $callback ): static;
```

Returns a new collection with the callback applied to every value.

<h4 id="contractssupportcollection-reduce"><code>reduce()</code></h4>

```php
public function reduce(
callable $callback,
mixed $initial = null
): mixed;
```

Reduces the collection to a single value using the callback.

<h4 id="contractssupportcollection-remove"><code>remove()</code></h4>

```php
public function remove( string $element ): void;
```

Removes the element from the collection.

<h4 id="contractssupportcollection-replace"><code>replace()</code></h4>

```php
public function replace( array $data ): void;
```

Replaces the collection data with a new array, clearing first.

<h4 id="contractssupportcollection-set"><code>set()</code></h4>

```php
public function set(
string $element,
mixed $value
): void;
```

Stores an element in the collection.

<h4 id="contractssupportcollection-sort"><code>sort()</code></h4>

```php
public function sort(
callable $callback = null,
int $order = 4
): static;
```

Returns a new collection sorted by value, preserving keys.

<h4 id="contractssupportcollection-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the collection as an array.

<h4 id="contractssupportcollection-tojson"><code>toJson()</code></h4>

```php
public function toJson( int $options = 4194383 ): string;
```

Returns the collection serialized as a JSON string.

<h4 id="contractssupportcollection-values"><code>values()</code></h4>

```php
public function values(): array;
```

Returns the values of the internal array.

<h4 id="contractssupportcollection-where"><code>where()</code></h4>

```php
public function where(
string $propertyOrMethod,
mixed $value
): static;
```

Returns a new collection containing only the items whose
`propertyOrMethod` strictly equals `$value`.

Source: https://docs.phalcon.io/5.14/api/phalcon_contracts/index.mdx
