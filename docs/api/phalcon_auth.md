---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Auth\AbstractAuthDispatcherListener

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/AbstractAuthDispatcherListener.zep){ .src-btn }

Shared enforcement algorithm for the Cli, Mvc and Micro auth listeners.
The subclass provides the action name and context from its event source,
the action-kind label used in the access-denied exception, and (Mvc only)
a forward handler for Access::redirectTo().

Enforcement is fail-open: when the manager has no active access
(Manager::getAccess() === null) every dispatch is allowed. A policy
activated via Manager::access() persists across forwards and nested
dispatches in the same request until it is replaced.

<div class="api-tree" markdown>

- **`Phalcon\Auth\AbstractAuthDispatcherListener`**
    - [`Phalcon\Auth\Cli\AuthDispatcherListener`](#authcliauthdispatcherlistener)
    - [`Phalcon\Auth\Micro\AuthMicroListener`](#authmicroauthmicrolistener)
    - [`Phalcon\Auth\Mvc\AuthDispatcherListener`](#authmvcauthdispatcherlistener)

</div>

__Uses__ `Phalcon\Auth\Exceptions\AccessDenied` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Manager`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authabstractauthdispatcherlistener-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">Manager</span> <span class="sv">$manager</span> )</code>
</a>
<a class="api-item" href="#authabstractauthdispatcherlistener-enforce">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">enforce</span>(<span class="prm"><span class="st">string</span> <span class="sv">$actionName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$forwardHandler</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Runs the access check for the given action name. Returns true when</span>
</a>
<a class="api-item" href="#authabstractauthdispatcherlistener-getactiontype">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionType</span>()</code>
<span class="desc">Returns the kind label used by AccessDenied (e.g. &#039;task&#039;, &#039;action&#039;,</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Manager</code>
<code class="sig"><span class="sv">$manager</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #authabstractauthdispatcherlistener-__construct }

```php
public function __construct( Manager $manager );
```

<div class="api-group">Protected · 2</div>

#### `enforce()` { #authabstractauthdispatcherlistener-enforce }

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

#### `getActionType()` { #authabstractauthdispatcherlistener-getactiontype }

```php
abstract protected function getActionType(): string;
```

Returns the kind label used by AccessDenied (e.g. 'task', 'action',
'route').


## Auth\Access\AbstractAccess

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Access/AbstractAccess.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Auth\Access\AbstractAccess`** - implements [`Phalcon\Contracts\Auth\Access\Access`](phalcon_contracts.md#contractsauthaccessaccess)
    - [`Phalcon\Auth\Access\Acl`](#authaccessacl)
    - [`Phalcon\Auth\Access\Auth`](#authaccessauth)
    - [`Phalcon\Auth\Access\Guest`](#authaccessguest)

</div>

__Uses__ `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Guard\Guard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authaccessabstractaccess-getexceptactions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getExceptActions</span>()</code>
</a>
<a class="api-item" href="#authaccessabstractaccess-getonlyactions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOnlyActions</span>()</code>
</a>
<a class="api-item" href="#authaccessabstractaccess-isallowed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAllowed</span>(<span class="prm"><span class="st">Guard</span> <span class="sv">$guard</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$actionName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#authaccessabstractaccess-redirectto">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">redirectTo</span>()</code>
</a>
<a class="api-item" href="#authaccessabstractaccess-setexceptactions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setExceptActions</span>( <span class="st">array</span> <span class="sv">$exceptActions</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#authaccessabstractaccess-setonlyactions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setOnlyActions</span>( <span class="st">array</span> <span class="sv">$onlyActions</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#authaccessabstractaccess-allowedif">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">allowedIf</span>( <span class="st">Guard</span> <span class="sv">$guard</span> )</code>
<span class="desc">Whether the gate&#039;s base condition holds for the given identity.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$exceptActions</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$onlyActions</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getExceptActions()` { #authaccessabstractaccess-getexceptactions }

```php
public function getExceptActions(): array;
```

#### `getOnlyActions()` { #authaccessabstractaccess-getonlyactions }

```php
public function getOnlyActions(): array;
```

#### `isAllowed()` { #authaccessabstractaccess-isallowed }

```php
public function isAllowed(
    Guard $guard,
    string $actionName,
    array $context = []
): bool;
```

#### `redirectTo()` { #authaccessabstractaccess-redirectto }

```php
public function redirectTo(): array|null;
```

#### `setExceptActions()` { #authaccessabstractaccess-setexceptactions }

```php
public function setExceptActions( array $exceptActions = [] ): void;
```

#### `setOnlyActions()` { #authaccessabstractaccess-setonlyactions }

```php
public function setOnlyActions( array $onlyActions = [] ): void;
```

<div class="api-group">Protected · 1</div>

#### `allowedIf()` { #authaccessabstractaccess-allowedif }

```php
abstract protected function allowedIf( Guard $guard ): bool;
```

Whether the gate's base condition holds for the given identity.


## Auth\Access\AccessLocator

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Access/AccessLocator.zep){ .src-btn }

Service locator for Phalcon\Auth access gates. Utilizes the container to
obtain the service. For the Phalcon\Container\Container one can use
autowiring. For the Phalcon\Di\Di, one needs to register the gates in it
to be used here (the binary gates also resolve unregistered through Di's
class builder).

@extends AbstractLocator<Access>

<div class="api-tree" markdown>

- [`Phalcon\Support\AbstractLocator`](phalcon_support.md#supportabstractlocator)
    - **`Phalcon\Auth\Access\AccessLocator`**

</div>

__Uses__ `Phalcon\Auth\Internal\ContainerResolver` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Support\AbstractLocator`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authaccessaccesslocator-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">newInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Resolve a fresh gate instance from the container.</span>
</a>
<a class="api-item" href="#authaccessaccesslocator-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#authaccessaccesslocator-getinterfaceclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getInterfaceClass</span>()</code>
</a>
<a class="api-item" href="#authaccessaccesslocator-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `newInstance()` { #authaccessaccesslocator-newinstance }

```php
public function newInstance( string $name ): object;
```

Resolve a fresh gate instance from the container.

Gates carry per-activation state (the only/except action filters), so
resolution must yield a fresh instance: new() on the Container
bypasses the instance cache; on the legacy Di, get() builds
unregistered classes and non-shared services fresh (register gates
non-shared).

<div class="api-group">Protected · 3</div>

#### `getExceptionClass()` { #authaccessaccesslocator-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getInterfaceClass()` { #authaccessaccesslocator-getinterfaceclass }

```php
protected function getInterfaceClass(): string;
```

#### `getServices()` { #authaccessaccesslocator-getservices }

```php
protected function getServices(): array;
```


## Auth\Access\Acl

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Access/Acl.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Auth\Access\AbstractAccess`](#authaccessabstractaccess)
    - **`Phalcon\Auth\Access\Acl`**

</div>

__Uses__ `Phalcon\Acl\Adapter\AdapterInterface` · `Phalcon\Acl\RoleAwareInterface` · `Phalcon\Auth\Exception` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\Guard\Guard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authaccessacl-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">AdapterInterface</span> <span class="sv">$acl</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#authaccessacl-isallowed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAllowed</span>(<span class="prm"><span class="st">Guard</span> <span class="sv">$guard</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$actionName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#authaccessacl-allowedif">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">allowedIf</span>( <span class="st">Guard</span> <span class="sv">$guard</span> )</code>
<span class="desc">Unused: this gate overrides isAllowed() in full. Fail closed to</span>
</a>
<a class="api-item" href="#authaccessacl-resolverole">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">resolveRole</span>( <span class="st">Guard</span> <span class="sv">$guard</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sv">$acl</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$guestRole</span><span class="sm"> = &quot;guest&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$moduleSeparator</span><span class="sm"> = &quot;:&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #authaccessacl-__construct }

```php
public function __construct(
    AdapterInterface $acl,
    array $options = []
);
```

#### `isAllowed()` { #authaccessacl-isallowed }

```php
public function isAllowed(
    Guard $guard,
    string $actionName,
    array $context = []
): bool;
```

<div class="api-group">Protected · 2</div>

#### `allowedIf()` { #authaccessacl-allowedif }

```php
protected function allowedIf( Guard $guard ): bool;
```

Unused: this gate overrides isAllowed() in full. Fail closed to
satisfy the abstract.

#### `resolveRole()` { #authaccessacl-resolverole }

```php
protected function resolveRole( Guard $guard ): string;
```


## Auth\Access\Auth

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Access/Auth.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Auth\Access\AbstractAccess`](#authaccessabstractaccess)
    - **`Phalcon\Auth\Access\Auth`**

</div>

__Uses__ `Phalcon\Contracts\Auth\Guard\Guard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authaccessauth-allowedif">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">allowedIf</span>( <span class="st">Guard</span> <span class="sv">$guard</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

#### `allowedIf()` { #authaccessauth-allowedif }

```php
protected function allowedIf( Guard $guard ): bool;
```


## Auth\Access\Guest

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Access/Guest.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Auth\Access\AbstractAccess`](#authaccessabstractaccess)
    - **`Phalcon\Auth\Access\Guest`**

</div>

__Uses__ `Phalcon\Contracts\Auth\Guard\Guard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authaccessguest-allowedif">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">allowedIf</span>( <span class="st">Guard</span> <span class="sv">$guard</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

#### `allowedIf()` { #authaccessguest-allowedif }

```php
protected function allowedIf( Guard $guard ): bool;
```


## Auth\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/AbstractAdapter.zep){ .src-btn }

@template TConfig of AdapterConfig

<div class="api-tree" markdown>

- **`Phalcon\Auth\Adapter\AbstractAdapter`** - implements [`Phalcon\Contracts\Auth\Adapter\Adapter`](phalcon_contracts.md#contractsauthadapteradapter)
    - [`Phalcon\Auth\Adapter\AbstractArrayAdapter`](#authadapterabstractarrayadapter)
    - [`Phalcon\Auth\Adapter\Model`](#authadaptermodel)

</div>

__Uses__ `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\Adapter\AdapterConfig` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Encryption\Security\Security`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authadapterabstractadapter-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Security</span> <span class="sv">$hasher</span>,</span><span class="prm"><span class="st">AdapterConfig</span> <span class="sv">$config</span></span>)</code>
</a>
<a class="api-item" href="#authadapterabstractadapter-getconfig">
<code class="vis vis-public">public</code>
<code class="ret">AdapterConfig</code>
<code class="sig"><span class="sf">getConfig</span>()</code>
<span class="desc">Returns the adapter configuration object.</span>
</a>
<a class="api-item" href="#authadapterabstractadapter-getmodel">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getModel</span>()</code>
<span class="desc">Returns the model class name, if configured.</span>
</a>
<a class="api-item" href="#authadapterabstractadapter-validatecredentials">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validateCredentials</span>(<span class="prm"><span class="st">AuthUser</span> <span class="sv">$user</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$credentials</span></span>)</code>
<span class="desc">Validates the supplied plaintext password against the user&#039;s stored hash.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterConfig</code>
<code class="sig"><span class="sv">$config</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Security</code>
<code class="sig"><span class="sv">$hasher</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #authadapterabstractadapter-__construct }

```php
public function __construct(
    Security $hasher,
    AdapterConfig $config
);
```

#### `getConfig()` { #authadapterabstractadapter-getconfig }

```php
public function getConfig(): AdapterConfig;
```

Returns the adapter configuration object.

#### `getModel()` { #authadapterabstractadapter-getmodel }

```php
public function getModel(): string|null;
```

Returns the model class name, if configured.

#### `validateCredentials()` { #authadapterabstractadapter-validatecredentials }

```php
public function validateCredentials(
    AuthUser $user,
    array $credentials
): bool;
```

Validates the supplied plaintext password against the user's stored hash.
Concrete adapters share this implementation; if your data source needs
a different verification strategy, override it.


## Auth\Adapter\AbstractArrayAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/AbstractArrayAdapter.zep){ .src-btn }

Common base for adapters whose user records come from an in-memory list
(Memory and Stream). Subclasses provide the row source via loadUsers();
everything else - credentials matching, hydration, the empty-credentials
guard, and a default linear retrieveById - is shared here.

@template TConfig of AdapterConfig
@extends AbstractAdapter<TConfig>

<div class="api-tree" markdown>

- [`Phalcon\Auth\Adapter\AbstractAdapter`](#authadapterabstractadapter)
    - **`Phalcon\Auth\Adapter\AbstractArrayAdapter`**
        - [`Phalcon\Auth\Adapter\Memory`](#authadaptermemory)
        - [`Phalcon\Auth\Adapter\Stream`](#authadapterstream)

</div>

__Uses__ `Phalcon\Auth\AuthUser` · `Phalcon\Auth\Exceptions\DoesNotImplement` · `Phalcon\Contracts\Auth\Adapter\AdapterConfig` · `Phalcon\Contracts\Auth\AuthUser`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authadapterabstractarrayadapter-retrievebycredentials">
<code class="vis vis-public">public</code>
<code class="ret">AuthUserContract|null</code>
<code class="sig"><span class="sf">retrieveByCredentials</span>( <span class="st">array</span> <span class="sv">$credentials</span> )</code>
<span class="desc">Walks the user list and returns the first row whose non-&#039;password&#039;</span>
</a>
<a class="api-item" href="#authadapterabstractarrayadapter-retrievebyid">
<code class="vis vis-public">public</code>
<code class="ret">AuthUserContract|null</code>
<code class="sig"><span class="sf">retrieveById</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
<span class="desc">Default linear-scan implementation. Memory overrides this for an O(1)</span>
</a>
<a class="api-item" href="#authadapterabstractarrayadapter-hasidentifyingfield">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasIdentifyingField</span>( <span class="st">array</span> <span class="sv">$credentials</span> )</code>
<span class="desc">Tests whether a credentials payload carries at least one identifying</span>
</a>
<a class="api-item" href="#authadapterabstractarrayadapter-hydrate">
<code class="vis vis-protected">protected</code>
<code class="ret">AuthUserContract</code>
<code class="sig"><span class="sf">hydrate</span>( <span class="st">array</span> <span class="sv">$row</span> )</code>
<span class="desc">Hydrates a raw user row into either the configured model class or a</span>
</a>
<a class="api-item" href="#authadapterabstractarrayadapter-loadusers">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">loadUsers</span>()</code>
<span class="desc">Returns the source list of user rows. Concrete subclasses decide</span>
</a>
<a class="api-item" href="#authadapterabstractarrayadapter-matchesrow">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">matchesRow</span>(<span class="prm"><span class="st">array</span> <span class="sv">$row</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$credentials</span></span>)</code>
<span class="desc">Strict per-key match of a row against credentials, skipping &#039;password&#039;.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `retrieveByCredentials()` { #authadapterabstractarrayadapter-retrievebycredentials }

```php
public function retrieveByCredentials( array $credentials ): AuthUserContract|null;
```

Walks the user list and returns the first row whose non-'password'
keys all match strictly. Returns null when no row matches or when
$credentials carries no identifying field at all (only 'password',
or empty) - protects callers from the silent "first row wins" footgun.

#### `retrieveById()` { #authadapterabstractarrayadapter-retrievebyid }

```php
public function retrieveById( mixed $id ): AuthUserContract|null;
```

Default linear-scan implementation. Memory overrides this for an O(1)
id-keyed lookup; Stream uses this as-is.

<div class="api-group">Protected · 4</div>

#### `hasIdentifyingField()` { #authadapterabstractarrayadapter-hasidentifyingfield }

```php
protected function hasIdentifyingField( array $credentials ): bool;
```

Tests whether a credentials payload carries at least one identifying
field (i.e. anything other than 'password'). An empty payload - or a
payload that only contains 'password' - is treated as "no lookup".

#### `hydrate()` { #authadapterabstractarrayadapter-hydrate }

```php
protected function hydrate( array $row ): AuthUserContract;
```

Hydrates a raw user row into either the configured model class or a
Phalcon\Auth\AuthUser value object.

#### `loadUsers()` { #authadapterabstractarrayadapter-loadusers }

```php
abstract protected function loadUsers(): array;
```

Returns the source list of user rows. Concrete subclasses decide
where they come from (config array, JSON file, etc.).

#### `matchesRow()` { #authadapterabstractarrayadapter-matchesrow }

```php
protected function matchesRow(
    array $row,
    array $credentials
): bool;
```

Strict per-key match of a row against credentials, skipping 'password'.


## Auth\Adapter\AdapterLocator

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/AdapterLocator.zep){ .src-btn }

Service locator for Phalcon\Auth adapters. Utilizes the container to
obtain the service. For the Phalcon\Container\Container one can use
autowiring. For the Phalcon\Di\Di, one needs to register the gates in it
to be used here.

@extends AbstractLocator<Adapter>

<div class="api-tree" markdown>

- [`Phalcon\Support\AbstractLocator`](phalcon_support.md#supportabstractlocator)
    - **`Phalcon\Auth\Adapter\AdapterLocator`**

</div>

__Uses__ `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Support\AbstractLocator`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authadapteradapterlocator-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#authadapteradapterlocator-getinterfaceclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getInterfaceClass</span>()</code>
</a>
<a class="api-item" href="#authadapteradapterlocator-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 3</div>

#### `getExceptionClass()` { #authadapteradapterlocator-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getInterfaceClass()` { #authadapteradapterlocator-getinterfaceclass }

```php
protected function getInterfaceClass(): string;
```

#### `getServices()` { #authadapteradapterlocator-getservices }

```php
protected function getServices(): array;
```


## Auth\Adapter\Config\AbstractAdapterConfig

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Config/AbstractAdapterConfig.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Auth\Adapter\Config\AbstractAdapterConfig`** - implements [`Phalcon\Contracts\Auth\Adapter\AdapterConfig`](phalcon_contracts.md#contractsauthadapteradapterconfig)
    - [`Phalcon\Auth\Adapter\Config\MemoryAdapterConfig`](#authadapterconfigmemoryadapterconfig)
    - [`Phalcon\Auth\Adapter\Config\ModelAdapterConfig`](#authadapterconfigmodeladapterconfig)
    - [`Phalcon\Auth\Adapter\Config\StreamAdapterConfig`](#authadapterconfigstreamadapterconfig)

</div>

__Uses__ `Phalcon\Contracts\Auth\Adapter\AdapterConfig`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authadapterconfigabstractadapterconfig-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$model</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#authadapterconfigabstractadapterconfig-getmodel">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getModel</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$model</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #authadapterconfigabstractadapterconfig-__construct }

```php
public function __construct( string $model = null );
```

#### `getModel()` { #authadapterconfigabstractadapterconfig-getmodel }

```php
public function getModel(): string|null;
```


## Auth\Adapter\Config\MemoryAdapterConfig

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Config/MemoryAdapterConfig.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Auth\Adapter\Config\AbstractAdapterConfig`](#authadapterconfigabstractadapterconfig)
    - **`Phalcon\Auth\Adapter\Config\MemoryAdapterConfig`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#authadapterconfigmemoryadapterconfig-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">array</span> <span class="sv">$users</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$model</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#authadapterconfigmemoryadapterconfig-getusers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getUsers</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$users</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #authadapterconfigmemoryadapterconfig-__construct }

```php
public function __construct(
    array $users = [],
    string $model = null
);
```

#### `getUsers()` { #authadapterconfigmemoryadapterconfig-getusers }

```php
public function getUsers(): array;
```


## Auth\Adapter\Config\ModelAdapterConfig

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Config/ModelAdapterConfig.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Auth\Adapter\Config\AbstractAdapterConfig`](#authadapterconfigabstractadapterconfig)
    - **`Phalcon\Auth\Adapter\Config\ModelAdapterConfig`**

</div>

__Uses__ `Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authadapterconfigmodeladapterconfig-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$model</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$idColumn</span><span class="sm"> = &quot;id&quot;</span></span>)</code>
</a>
<a class="api-item" href="#authadapterconfigmodeladapterconfig-getidcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getIdColumn</span>()</code>
</a>
<a class="api-item" href="#authadapterconfigmodeladapterconfig-getmodel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getModel</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$idColumn</span><span class="sm"> = &quot;id&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #authadapterconfigmodeladapterconfig-__construct }

```php
public function __construct(
    string $model,
    string $idColumn = "id"
);
```

#### `getIdColumn()` { #authadapterconfigmodeladapterconfig-getidcolumn }

```php
public function getIdColumn(): string;
```

#### `getModel()` { #authadapterconfigmodeladapterconfig-getmodel }

```php
public function getModel(): string;
```


## Auth\Adapter\Config\StreamAdapterConfig

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Config/StreamAdapterConfig.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Auth\Adapter\Config\AbstractAdapterConfig`](#authadapterconfigabstractadapterconfig)
    - **`Phalcon\Auth\Adapter\Config\StreamAdapterConfig`**

</div>

__Uses__ `Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authadapterconfigstreamadapterconfig-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$model</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#authadapterconfigstreamadapterconfig-getfile">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getFile</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$file</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #authadapterconfigstreamadapterconfig-__construct }

```php
public function __construct(
    string $file,
    string $model = null
);
```

#### `getFile()` { #authadapterconfigstreamadapterconfig-getfile }

```php
public function getFile(): string;
```


## Auth\Adapter\Memory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Memory.zep){ .src-btn }

In-memory adapter - useful for tests and small read-only user lists.

@extends AbstractArrayAdapter<MemoryAdapterConfig>

<div class="api-tree" markdown>

- [`Phalcon\Auth\Adapter\AbstractAdapter`](#authadapterabstractadapter)
    - [`Phalcon\Auth\Adapter\AbstractArrayAdapter`](#authadapterabstractarrayadapter)
        - **`Phalcon\Auth\Adapter\Memory`**

</div>

__Uses__ `Phalcon\Auth\Adapter\Config\MemoryAdapterConfig` · `Phalcon\Auth\Internal\Options` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Encryption\Security\Security`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authadaptermemory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Security</span> <span class="sv">$hasher</span>,</span><span class="prm"><span class="st">MemoryAdapterConfig</span> <span class="sv">$config</span></span>)</code>
</a>
<a class="api-item" href="#authadaptermemory-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromOptions</span>(<span class="prm"><span class="st">Security</span> <span class="sv">$hasher</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
</a>
<a class="api-item" href="#authadaptermemory-retrievebyid">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">retrieveById</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
<span class="desc">Overridden for O(1) lookup via the id index built in the constructor.</span>
</a>
<a class="api-item" href="#authadaptermemory-loadusers">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">loadUsers</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #authadaptermemory-__construct }

```php
public function __construct(
    Security $hasher,
    MemoryAdapterConfig $config
);
```

#### `fromOptions()` { #authadaptermemory-fromoptions }

```php
public static function fromOptions(
    Security $hasher,
    array $options
): static;
```

#### `retrieveById()` { #authadaptermemory-retrievebyid }

```php
public function retrieveById( mixed $id ): AuthUser|null;
```

Overridden for O(1) lookup via the id index built in the constructor.

<div class="api-group">Protected · 1</div>

#### `loadUsers()` { #authadaptermemory-loadusers }

```php
protected function loadUsers(): array;
```


## Auth\Adapter\Model

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Model.zep){ .src-btn }

Phalcon Model-backed adapter.

@extends AbstractAdapter<ModelAdapterConfig>

<div class="api-tree" markdown>

- [`Phalcon\Auth\Adapter\AbstractAdapter`](#authadapterabstractadapter)
    - **`Phalcon\Auth\Adapter\Model`** - implements [`Phalcon\Contracts\Auth\Adapter\RememberAdapter`](phalcon_contracts.md#contractsauthadapterrememberadapter)

</div>

__Uses__ `Phalcon\Auth\Adapter\Config\ModelAdapterConfig` · `Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\DoesNotImplement` · `Phalcon\Auth\Internal\Options` · `Phalcon\Contracts\Auth\Adapter\RememberAdapter` · `Phalcon\Contracts\Auth\AuthRemember` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\RememberToken` · `Phalcon\Contracts\Encryption\Security\Security` · `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authadaptermodel-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Security</span> <span class="sv">$hasher</span>,</span><span class="prm"><span class="st">ModelAdapterConfig</span> <span class="sv">$config</span></span>)</code>
</a>
<a class="api-item" href="#authadaptermodel-createremembertoken">
<code class="vis vis-public">public</code>
<code class="ret">RememberToken</code>
<code class="sig"><span class="sf">createRememberToken</span>( <span class="st">AuthUser</span> <span class="sv">$user</span> )</code>
<span class="desc">Create and persist a new remember token for the user.</span>
</a>
<a class="api-item" href="#authadaptermodel-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromOptions</span>(<span class="prm"><span class="st">Security</span> <span class="sv">$hasher</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
</a>
<a class="api-item" href="#authadaptermodel-retrievebycredentials">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">retrieveByCredentials</span>( <span class="st">array</span> <span class="sv">$credentials</span> )</code>
<span class="desc">Find a user matching the given credentials (excluding &#039;password&#039; key).</span>
</a>
<a class="api-item" href="#authadaptermodel-retrievebyid">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">retrieveById</span>( <span class="st">mixed</span> <span class="sv">$id</span> )</code>
</a>
<a class="api-item" href="#authadaptermodel-retrievebytoken">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">retrieveByToken</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$token</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$userAgent</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Retrieve a user by the remember-me cookie payload.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #authadaptermodel-__construct }

```php
public function __construct(
    Security $hasher,
    ModelAdapterConfig $config
);
```

#### `createRememberToken()` { #authadaptermodel-createremembertoken }

```php
public function createRememberToken( AuthUser $user ): RememberToken;
```

Create and persist a new remember token for the user.

#### `fromOptions()` { #authadaptermodel-fromoptions }

```php
public static function fromOptions(
    Security $hasher,
    array $options
): static;
```

#### `retrieveByCredentials()` { #authadaptermodel-retrievebycredentials }

```php
public function retrieveByCredentials( array $credentials ): AuthUser|null;
```

Find a user matching the given credentials (excluding 'password' key).

#### `retrieveById()` { #authadaptermodel-retrievebyid }

```php
public function retrieveById( mixed $id ): AuthUser|null;
```

#### `retrieveByToken()` { #authadaptermodel-retrievebytoken }

```php
public function retrieveByToken(
    mixed $id,
    string $token,
    string $userAgent = null
): AuthUser|null;
```

Retrieve a user by the remember-me cookie payload.


## Auth\Adapter\Stream

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Adapter/Stream.zep){ .src-btn }

JSON file-backed adapter.

The file must contain a JSON array of user records:
  [{"id":1,"email":"a@b","password":"<hashed>"}, ...]

@extends AbstractArrayAdapter<StreamAdapterConfig>

<div class="api-tree" markdown>

- [`Phalcon\Auth\Adapter\AbstractAdapter`](#authadapterabstractadapter)
    - [`Phalcon\Auth\Adapter\AbstractArrayAdapter`](#authadapterabstractarrayadapter)
        - **`Phalcon\Auth\Adapter\Stream`**

</div>

__Uses__ `InvalidArgumentException` · `Phalcon\Auth\Adapter\Config\StreamAdapterConfig` · `Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\FileCannotRead` · `Phalcon\Auth\Exceptions\FileDoesNotContainJson` · `Phalcon\Auth\Exceptions\FileDoesNotExist` · `Phalcon\Auth\Exceptions\FileNotValidJson` · `Phalcon\Auth\Internal\Options` · `Phalcon\Contracts\Encryption\Security\Security` · `Phalcon\Support\Helper\Json\Decode`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authadapterstream-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Security</span> <span class="sv">$hasher</span>,</span><span class="prm"><span class="st">StreamAdapterConfig</span> <span class="sv">$config</span></span>)</code>
</a>
<a class="api-item" href="#authadapterstream-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromOptions</span>(<span class="prm"><span class="st">Security</span> <span class="sv">$hasher</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
</a>
<a class="api-item" href="#authadapterstream-loadusers">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">loadUsers</span>()</code>
<span class="desc">Loads and decodes the JSON users file. Re-read on every call - if you</span>
</a>
<a class="api-item" href="#authadapterstream-phpfileexists">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpFileExists</span>( <span class="st">string</span> <span class="sv">$filename</span> )</code>
</a>
<a class="api-item" href="#authadapterstream-phpfilegetcontents">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpFileGetContents</span>( <span class="st">string</span> <span class="sv">$filename</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #authadapterstream-__construct }

```php
public function __construct(
    Security $hasher,
    StreamAdapterConfig $config
);
```

#### `fromOptions()` { #authadapterstream-fromoptions }

```php
public static function fromOptions(
    Security $hasher,
    array $options
): static;
```

<div class="api-group">Protected · 3</div>

#### `loadUsers()` { #authadapterstream-loadusers }

```php
protected function loadUsers(): array;
```

Loads and decodes the JSON users file. Re-read on every call - if you
need caching, wrap it.

#### `phpFileExists()` { #authadapterstream-phpfileexists }

```php
protected function phpFileExists( string $filename ): bool;
```

#### `phpFileGetContents()` { #authadapterstream-phpfilegetcontents }

```php
protected function phpFileGetContents( string $filename );
```


## Auth\AuthUser

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/AuthUser.zep){ .src-btn }

Lightweight value object returned by array-backed adapters (Memory, Stream)
when no application model class is configured.

<div class="api-tree" markdown>

- **`Phalcon\Auth\AuthUser`** - implements [`Phalcon\Contracts\Auth\AuthUser`](phalcon_contracts.md#contractsauthauthuser)

</div>

__Uses__ `Phalcon\Auth\Exceptions\DataMustContainIdKey` · `Phalcon\Contracts\Auth\AuthUser`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authauthuser-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$data</span> )</code>
</a>
<a class="api-item" href="#authauthuser-getauthidentifier">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig"><span class="sf">getAuthIdentifier</span>()</code>
</a>
<a class="api-item" href="#authauthuser-getauthpassword">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAuthPassword</span>()</code>
</a>
<a class="api-item" href="#authauthuser-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the underlying data array.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$data</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #authauthuser-__construct }

```php
public function __construct( array $data );
```

#### `getAuthIdentifier()` { #authauthuser-getauthidentifier }

```php
public function getAuthIdentifier(): int|string;
```

#### `getAuthPassword()` { #authauthuser-getauthpassword }

```php
public function getAuthPassword(): string;
```

#### `toArray()` { #authauthuser-toarray }

```php
public function toArray(): array;
```

Returns the underlying data array.


## Auth\Cli\AuthDispatcherListener

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Cli/AuthDispatcherListener.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Auth\AbstractAuthDispatcherListener`](#authabstractauthdispatcherlistener)
    - **`Phalcon\Auth\Cli\AuthDispatcherListener`**

</div>

__Uses__ `Phalcon\Auth\AbstractAuthDispatcherListener` · `Phalcon\Auth\Exception` · `Phalcon\Cli\Dispatcher` · `Phalcon\Events\Event`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authcliauthdispatcherlistener-beforeexecuteroute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">beforeExecuteRoute</span>(<span class="prm"><span class="st">Event</span> <span class="sv">$event</span>,</span><span class="prm"><span class="st">Dispatcher</span> <span class="sv">$dispatcher</span></span>)</code>
</a>
<a class="api-item" href="#authcliauthdispatcherlistener-getactiontype">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionType</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `beforeExecuteRoute()` { #authcliauthdispatcherlistener-beforeexecuteroute }

```php
public function beforeExecuteRoute(
    Event $event,
    Dispatcher $dispatcher
): bool;
```

<div class="api-group">Protected · 1</div>

#### `getActionType()` { #authcliauthdispatcherlistener-getactiontype }

```php
protected function getActionType(): string;
```


## Auth\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Auth will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Auth\Exception`**
        - [`Phalcon\Auth\Exceptions\AccessDenied`](#authexceptionsaccessdenied)
        - [`Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`](#authexceptionsconfigrequiresnonemptyvalue)
        - [`Phalcon\Auth\Exceptions\DataMustContainIdKey`](#authexceptionsdatamustcontainidkey)
        - [`Phalcon\Auth\Exceptions\DoesNotImplement`](#authexceptionsdoesnotimplement)
        - [`Phalcon\Auth\Exceptions\FileCannotRead`](#authexceptionsfilecannotread)
        - [`Phalcon\Auth\Exceptions\FileDoesNotContainJson`](#authexceptionsfiledoesnotcontainjson)
        - [`Phalcon\Auth\Exceptions\FileDoesNotExist`](#authexceptionsfiledoesnotexist)
        - [`Phalcon\Auth\Exceptions\FileNotValidJson`](#authexceptionsfilenotvalidjson)

</div>


## Auth\Exceptions\AccessDenied

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/AccessDenied.zep){ .src-btn }

Access denied exception

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Auth\Exception`](#authexception)
        - **`Phalcon\Auth\Exceptions\AccessDenied`**

</div>

__Uses__ `Phalcon\Auth\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authexceptionsaccessdenied-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #authexceptionsaccessdenied-__construct }

```php
public function __construct(
    string $type,
    string $name
);
```


## Auth\Exceptions\ConfigRequiresNonEmptyValue

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/ConfigRequiresNonEmptyValue.zep){ .src-btn }

Config requires non-empty value

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Auth\Exception`](#authexception)
        - **`Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`**

</div>

__Uses__ `Phalcon\Auth\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authexceptionsconfigrequiresnonemptyvalue-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$configName</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$configKey</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$suffix</span><span class="sm"> = &quot;&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #authexceptionsconfigrequiresnonemptyvalue-__construct }

```php
public function __construct(
    string $configName,
    string $configKey,
    string $suffix = ""
);
```


## Auth\Exceptions\DataMustContainIdKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/DataMustContainIdKey.zep){ .src-btn }

AuthUser data must contain "id"

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Auth\Exception`](#authexception)
        - **`Phalcon\Auth\Exceptions\DataMustContainIdKey`**

</div>

__Uses__ `Phalcon\Auth\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authexceptionsdatamustcontainidkey-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #authexceptionsdatamustcontainidkey-__construct }

```php
public function __construct();
```


## Auth\Exceptions\DoesNotImplement

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/DoesNotImplement.zep){ .src-btn }

Does not implement interface

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Auth\Exception`](#authexception)
        - **`Phalcon\Auth\Exceptions\DoesNotImplement`**

</div>

__Uses__ `Phalcon\Auth\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authexceptionsdoesnotimplement-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #authexceptionsdoesnotimplement-__construct }

```php
public function __construct(
    string $type,
    string $name
);
```


## Auth\Exceptions\FileCannotRead

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/FileCannotRead.zep){ .src-btn }

Cannot read file

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Auth\Exception`](#authexception)
        - **`Phalcon\Auth\Exceptions\FileCannotRead`**

</div>

__Uses__ `Phalcon\Auth\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authexceptionsfilecannotread-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #authexceptionsfilecannotread-__construct }

```php
public function __construct( string $path );
```


## Auth\Exceptions\FileDoesNotContainJson

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/FileDoesNotContainJson.zep){ .src-btn }

File does not contain a JSON array

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Auth\Exception`](#authexception)
        - **`Phalcon\Auth\Exceptions\FileDoesNotContainJson`**

</div>

__Uses__ `Phalcon\Auth\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authexceptionsfiledoesnotcontainjson-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #authexceptionsfiledoesnotcontainjson-__construct }

```php
public function __construct( string $path );
```


## Auth\Exceptions\FileDoesNotExist

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/FileDoesNotExist.zep){ .src-btn }

File does not exist

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Auth\Exception`](#authexception)
        - **`Phalcon\Auth\Exceptions\FileDoesNotExist`**

</div>

__Uses__ `Phalcon\Auth\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authexceptionsfiledoesnotexist-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #authexceptionsfiledoesnotexist-__construct }

```php
public function __construct( string $path );
```


## Auth\Exceptions\FileNotValidJson

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Exceptions/FileNotValidJson.zep){ .src-btn }

Not a valid JSON

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Auth\Exception`](#authexception)
        - **`Phalcon\Auth\Exceptions\FileNotValidJson`**

</div>

__Uses__ `Phalcon\Auth\Exception` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authexceptionsfilenotvalidjson-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">Throwable</span> <span class="sv">$ex</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #authexceptionsfilenotvalidjson-__construct }

```php
public function __construct(
    string $path,
    Throwable $ex
);
```


## Auth\Guard\AbstractGuard

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/AbstractGuard.zep){ .src-btn }

@template TConfig of GuardConfig

<div class="api-tree" markdown>

- [`Phalcon\Events\AbstractEventsAware`](phalcon_events.md#eventsabstracteventsaware)
    - **`Phalcon\Auth\Guard\AbstractGuard`** - implements [`Phalcon\Contracts\Auth\Guard\Guard`](phalcon_contracts.md#contractsauthguardguard)
        - [`Phalcon\Auth\Guard\Session`](#authguardsession)
        - [`Phalcon\Auth\Guard\Token`](#authguardtoken)

</div>

__Uses__ `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\Guard\Guard` · `Phalcon\Contracts\Auth\Guard\GuardConfig` · `Phalcon\Events\AbstractEventsAware`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authguardabstractguard-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Adapter</span> <span class="sv">$adapter</span>,</span><span class="prm"><span class="st">GuardConfig</span> <span class="sv">$config</span></span>)</code>
</a>
<a class="api-item" href="#authguardabstractguard-check">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">check</span>()</code>
</a>
<a class="api-item" href="#authguardabstractguard-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
</a>
<a class="api-item" href="#authguardabstractguard-getconfig">
<code class="vis vis-public">public</code>
<code class="ret">GuardConfig</code>
<code class="sig"><span class="sf">getConfig</span>()</code>
<span class="desc">Returns the guard configuration object.</span>
</a>
<a class="api-item" href="#authguardabstractguard-getlastuserattempted">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">getLastUserAttempted</span>()</code>
</a>
<a class="api-item" href="#authguardabstractguard-guest">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">guest</span>()</code>
</a>
<a class="api-item" href="#authguardabstractguard-hasuser">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasUser</span>()</code>
</a>
<a class="api-item" href="#authguardabstractguard-id">
<code class="vis vis-public">public</code>
<code class="ret">int|string|null</code>
<code class="sig"><span class="sf">id</span>()</code>
</a>
<a class="api-item" href="#authguardabstractguard-setadapter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAdapter</span>( <span class="st">Adapter</span> <span class="sv">$adapter</span> )</code>
</a>
<a class="api-item" href="#authguardabstractguard-setuser">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setUser</span>( <span class="st">AuthUser</span> <span class="sv">$user</span> )</code>
</a>
<a class="api-item" href="#authguardabstractguard-hasvalidcredentials">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasValidCredentials</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$user</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$credentials</span></span>)</code>
<span class="desc">user should be ?AuthUser</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sv">$adapter</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">GuardConfig</code>
<code class="sig"><span class="sv">$config</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AuthUser | null</code>
<code class="sig"><span class="sv">$lastUserAttempted</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AuthUser | null</code>
<code class="sig"><span class="sv">$user</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__construct()` { #authguardabstractguard-__construct }

```php
public function __construct(
    Adapter $adapter,
    GuardConfig $config
);
```

#### `check()` { #authguardabstractguard-check }

```php
public function check(): bool;
```

#### `getAdapter()` { #authguardabstractguard-getadapter }

```php
public function getAdapter(): Adapter;
```

#### `getConfig()` { #authguardabstractguard-getconfig }

```php
public function getConfig(): GuardConfig;
```

Returns the guard configuration object.

#### `getLastUserAttempted()` { #authguardabstractguard-getlastuserattempted }

```php
public function getLastUserAttempted(): AuthUser|null;
```

#### `guest()` { #authguardabstractguard-guest }

```php
public function guest(): bool;
```

#### `hasUser()` { #authguardabstractguard-hasuser }

```php
public function hasUser(): bool;
```

#### `id()` { #authguardabstractguard-id }

```php
public function id(): int|string|null;
```

#### `setAdapter()` { #authguardabstractguard-setadapter }

```php
public function setAdapter( Adapter $adapter ): static;
```

#### `setUser()` { #authguardabstractguard-setuser }

```php
public function setUser( AuthUser $user ): static;
```

<div class="api-group">Protected · 1</div>

#### `hasValidCredentials()` { #authguardabstractguard-hasvalidcredentials }

```php
protected function hasValidCredentials(
    mixed $user,
    array $credentials
): bool;
```

user should be ?AuthUser


## Auth\Guard\Config\AbstractGuardConfig

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/Config/AbstractGuardConfig.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Auth\Guard\Config\AbstractGuardConfig`** - implements [`Phalcon\Contracts\Auth\Guard\GuardConfig`](phalcon_contracts.md#contractsauthguardguardconfig)
    - [`Phalcon\Auth\Guard\Config\SessionGuardConfig`](#authguardconfigsessionguardconfig)
    - [`Phalcon\Auth\Guard\Config\TokenGuardConfig`](#authguardconfigtokenguardconfig)

</div>

__Uses__ `Phalcon\Contracts\Auth\Guard\GuardConfig`
{ .api-uses }


## Auth\Guard\Config\SessionGuardConfig

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/Config/SessionGuardConfig.zep){ .src-btn }

Configuration for the Session guard. Holds the names under which the
session key and remember-me cookie are stored. Defaults to 'auth' and
'remember'; multi-guard apps can pass a $suffix ('web', 'admin', ...)
to derive 'auth_web' / 'remember_web' style names, or override either
full name explicitly.

<div class="api-tree" markdown>

- [`Phalcon\Auth\Guard\Config\AbstractGuardConfig`](#authguardconfigabstractguardconfig)
    - **`Phalcon\Auth\Guard\Config\SessionGuardConfig`**

</div>

__Uses__ `Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authguardconfigsessionguardconfig-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$suffix</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$rememberName</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$rememberTtl</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#authguardconfigsessionguardconfig-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
</a>
<a class="api-item" href="#authguardconfigsessionguardconfig-getremembername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRememberName</span>()</code>
</a>
<a class="api-item" href="#authguardconfigsessionguardconfig-getrememberttl">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getRememberTtl</span>()</code>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">DEFAULT_REMEMBER_TTL</span><span class="sm"> = 31536000</span></code>
<span class="desc">Default remember-me cookie lifetime,
in seconds (365 days).</span>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #authguardconfigsessionguardconfig-__construct }

```php
public function __construct(
    string $suffix = null,
    string $name = null,
    string $rememberName = null,
    mixed $rememberTtl = null
);
```

#### `getName()` { #authguardconfigsessionguardconfig-getname }

```php
public function getName(): string;
```

#### `getRememberName()` { #authguardconfigsessionguardconfig-getremembername }

```php
public function getRememberName(): string;
```

#### `getRememberTtl()` { #authguardconfigsessionguardconfig-getrememberttl }

```php
public function getRememberTtl(): int;
```


## Auth\Guard\Config\TokenGuardConfig

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/Config/TokenGuardConfig.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Auth\Guard\Config\AbstractGuardConfig`](#authguardconfigabstractguardconfig)
    - **`Phalcon\Auth\Guard\Config\TokenGuardConfig`**

</div>

__Uses__ `Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\ConfigRequiresNonEmptyValue`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authguardconfigtokenguardconfig-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$inputKey</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$storageKey</span></span>)</code>
</a>
<a class="api-item" href="#authguardconfigtokenguardconfig-getinputkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getInputKey</span>()</code>
</a>
<a class="api-item" href="#authguardconfigtokenguardconfig-getstoragekey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getStorageKey</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$inputKey</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$storageKey</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #authguardconfigtokenguardconfig-__construct }

```php
public function __construct(
    string $inputKey,
    string $storageKey
);
```

#### `getInputKey()` { #authguardconfigtokenguardconfig-getinputkey }

```php
public function getInputKey(): string;
```

#### `getStorageKey()` { #authguardconfigtokenguardconfig-getstoragekey }

```php
public function getStorageKey(): string;
```


## Auth\Guard\GuardLocator

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/GuardLocator.zep){ .src-btn }

Service locator for Phalcon\Auth guards. Utilizes the container to obtain
the service. For Phalcon\Container\Container one can use autowiring; for
Phalcon\Di\Di, register the guards in it before resolution.

@extends AbstractLocator<Guard>

<div class="api-tree" markdown>

- [`Phalcon\Support\AbstractLocator`](phalcon_support.md#supportabstractlocator)
    - **`Phalcon\Auth\Guard\GuardLocator`**

</div>

__Uses__ `Phalcon\Contracts\Auth\Guard\Guard` · `Phalcon\Support\AbstractLocator`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authguardguardlocator-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#authguardguardlocator-getinterfaceclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getInterfaceClass</span>()</code>
</a>
<a class="api-item" href="#authguardguardlocator-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 3</div>

#### `getExceptionClass()` { #authguardguardlocator-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getInterfaceClass()` { #authguardguardlocator-getinterfaceclass }

```php
protected function getInterfaceClass(): string;
```

#### `getServices()` { #authguardguardlocator-getservices }

```php
protected function getServices(): array;
```


## Auth\Guard\Session

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/Session.zep){ .src-btn }

@extends AbstractGuard<SessionGuardConfig>

<div class="api-tree" markdown>

- [`Phalcon\Events\AbstractEventsAware`](phalcon_events.md#eventsabstracteventsaware)
    - [`Phalcon\Auth\Guard\AbstractGuard`](#authguardabstractguard)
        - **`Phalcon\Auth\Guard\Session`** - implements [`Phalcon\Contracts\Auth\Guard\GuardStateful`](phalcon_contracts.md#contractsauthguardguardstateful), [`Phalcon\Contracts\Auth\Guard\BasicAuth`](phalcon_contracts.md#contractsauthguardbasicauth)

</div>

__Uses__ `DateTimeImmutable` · `Phalcon\Auth\Exception` · `Phalcon\Auth\Exceptions\DoesNotImplement` · `Phalcon\Auth\Guard\Config\SessionGuardConfig` · `Phalcon\Auth\Internal\ContainerResolver` · `Phalcon\Auth\Internal\Options` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\Adapter\RememberAdapter` · `Phalcon\Contracts\Auth\AuthRemember` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\Guard\BasicAuth` · `Phalcon\Contracts\Auth\Guard\GuardStateful` · `Phalcon\Contracts\Auth\RememberToken` · `Phalcon\Http\RequestInterface` · `Phalcon\Http\Response\CookiesInterface` · `Phalcon\Session\ManagerInterface` · `Phalcon\Support\Helper\Json\Encode` · `Phalcon\Time\Clock\ClockInterface` · `Phalcon\Time\Clock\SystemClock`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authguardsession-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Adapter</span> <span class="sv">$adapter</span>,</span><span class="prm"><span class="st">RequestInterface</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">CookiesInterface</span> <span class="sv">$cookies</span>,</span><span class="prm"><span class="st">SessionManagerInterface</span> <span class="sv">$session</span>,</span><span class="prm"><span class="st">SessionGuardConfig</span> <span class="sv">$config</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">ClockInterface</span> <span class="sv">$clock</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#authguardsession-attempt">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">attempt</span>(<span class="prm"><span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#authguardsession-basic">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">basic</span>(<span class="prm"><span class="st">string</span> <span class="sv">$field</span><span class="sm"> = &quot;email&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$extraConditions</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#authguardsession-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromOptions</span>(<span class="prm"><span class="st">Adapter</span> <span class="sv">$adapter</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$container</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
</a>
<a class="api-item" href="#authguardsession-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
</a>
<a class="api-item" href="#authguardsession-getremembername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRememberName</span>()</code>
</a>
<a class="api-item" href="#authguardsession-login">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">login</span>(<span class="prm"><span class="st">AuthUser</span> <span class="sv">$user</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#authguardsession-loginbyid">
<code class="vis vis-public">public</code>
<code class="ret">false|AuthUser</code>
<code class="sig"><span class="sf">loginById</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#authguardsession-logout">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">logout</span>()</code>
</a>
<a class="api-item" href="#authguardsession-once">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">once</span>( <span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#authguardsession-oncebasic">
<code class="vis vis-public">public</code>
<code class="ret">false|AuthUser</code>
<code class="sig"><span class="sf">onceBasic</span>(<span class="prm"><span class="st">string</span> <span class="sv">$field</span><span class="sm"> = &quot;email&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$extraConditions</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#authguardsession-user">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">user</span>()</code>
</a>
<a class="api-item" href="#authguardsession-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>( <span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#authguardsession-viaremember">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">viaRemember</span>()</code>
</a>
<a class="api-item" href="#authguardsession-attemptbasic">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">attemptBasic</span>(<span class="prm"><span class="st">string</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$extraConditions</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#authguardsession-basiccredentials">
<code class="vis vis-protected">protected</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">basicCredentials</span>( <span class="st">string</span> <span class="sv">$field</span> )</code>
</a>
<a class="api-item" href="#authguardsession-createremembertoken">
<code class="vis vis-protected">protected</code>
<code class="ret">RememberToken</code>
<code class="sig"><span class="sf">createRememberToken</span>( <span class="st">AuthUser</span> <span class="sv">$user</span> )</code>
</a>
<a class="api-item" href="#authguardsession-recaller">
<code class="vis vis-protected">protected</code>
<code class="ret">UserRemember|null</code>
<code class="sig"><span class="sf">recaller</span>()</code>
</a>
<a class="api-item" href="#authguardsession-rememberuser">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">rememberUser</span>( <span class="st">AuthUser</span> <span class="sv">$user</span> )</code>
</a>
<a class="api-item" href="#authguardsession-userfromrecaller">
<code class="vis vis-protected">protected</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">userFromRecaller</span>( <span class="st">UserRemember</span> <span class="sv">$recaller</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ClockInterface</code>
<code class="sig"><span class="sv">$clock</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">CookiesInterface</code>
<code class="sig"><span class="sv">$cookies</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sv">$request</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">SessionManagerInterface</code>
<code class="sig"><span class="sv">$session</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$viaRemember</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 14</div>

#### `__construct()` { #authguardsession-__construct }

```php
public function __construct(
    Adapter $adapter,
    RequestInterface $request,
    CookiesInterface $cookies,
    SessionManagerInterface $session,
    SessionGuardConfig $config = null,
    ClockInterface $clock = null
);
```

#### `attempt()` { #authguardsession-attempt }

```php
public function attempt(
    array $credentials = [],
    bool $remember = false
): bool;
```

#### `basic()` { #authguardsession-basic }

```php
public function basic(
    string $field = "email",
    array $extraConditions = []
): bool;
```

#### `fromOptions()` { #authguardsession-fromoptions }

```php
public static function fromOptions(
    Adapter $adapter,
    mixed $container,
    array $options
): static;
```

#### `getName()` { #authguardsession-getname }

```php
public function getName(): string;
```

#### `getRememberName()` { #authguardsession-getremembername }

```php
public function getRememberName(): string;
```

#### `login()` { #authguardsession-login }

```php
public function login(
    AuthUser $user,
    bool $remember = false
): void;
```

#### `loginById()` { #authguardsession-loginbyid }

```php
public function loginById(
    mixed $id,
    bool $remember = false
): false|AuthUser;
```

#### `logout()` { #authguardsession-logout }

```php
public function logout(): void;
```

#### `once()` { #authguardsession-once }

```php
public function once( array $credentials = [] ): bool;
```

#### `onceBasic()` { #authguardsession-oncebasic }

```php
public function onceBasic(
    string $field = "email",
    array $extraConditions = []
): false|AuthUser;
```

#### `user()` { #authguardsession-user }

```php
public function user(): AuthUser|null;
```

#### `validate()` { #authguardsession-validate }

```php
public function validate( array $credentials = [] ): bool;
```

#### `viaRemember()` { #authguardsession-viaremember }

```php
public function viaRemember(): bool;
```

<div class="api-group">Protected · 6</div>

#### `attemptBasic()` { #authguardsession-attemptbasic }

```php
protected function attemptBasic(
    string $field,
    array $extraConditions = []
): bool;
```

#### `basicCredentials()` { #authguardsession-basiccredentials }

```php
protected function basicCredentials( string $field ): array|null;
```

#### `createRememberToken()` { #authguardsession-createremembertoken }

```php
protected function createRememberToken( AuthUser $user ): RememberToken;
```

#### `recaller()` { #authguardsession-recaller }

```php
protected function recaller(): UserRemember|null;
```

#### `rememberUser()` { #authguardsession-rememberuser }

```php
protected function rememberUser( AuthUser $user ): void;
```

#### `userFromRecaller()` { #authguardsession-userfromrecaller }

```php
protected function userFromRecaller( UserRemember $recaller ): AuthUser|null;
```


## Auth\Guard\Token

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/Token.zep){ .src-btn }

@extends AbstractGuard<TokenGuardConfig>

<div class="api-tree" markdown>

- [`Phalcon\Events\AbstractEventsAware`](phalcon_events.md#eventsabstracteventsaware)
    - [`Phalcon\Auth\Guard\AbstractGuard`](#authguardabstractguard)
        - **`Phalcon\Auth\Guard\Token`**

</div>

__Uses__ `Phalcon\Auth\Guard\Config\TokenGuardConfig` · `Phalcon\Auth\Internal\ContainerResolver` · `Phalcon\Auth\Internal\Options` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Http\RequestInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authguardtoken-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Adapter</span> <span class="sv">$adapter</span>,</span><span class="prm"><span class="st">RequestInterface</span> <span class="sv">$request</span>,</span><span class="prm"><span class="st">TokenGuardConfig</span> <span class="sv">$config</span></span>)</code>
</a>
<a class="api-item" href="#authguardtoken-fromoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromOptions</span>(<span class="prm"><span class="st">Adapter</span> <span class="sv">$adapter</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$container</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
</a>
<a class="api-item" href="#authguardtoken-gettokenforrequest">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getTokenForRequest</span>()</code>
</a>
<a class="api-item" href="#authguardtoken-setrequest">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setRequest</span>( <span class="st">RequestInterface</span> <span class="sv">$request</span> )</code>
</a>
<a class="api-item" href="#authguardtoken-user">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">user</span>()</code>
</a>
<a class="api-item" href="#authguardtoken-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>( <span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sv">$request</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #authguardtoken-__construct }

```php
public function __construct(
    Adapter $adapter,
    RequestInterface $request,
    TokenGuardConfig $config
);
```

#### `fromOptions()` { #authguardtoken-fromoptions }

```php
public static function fromOptions(
    Adapter $adapter,
    mixed $container,
    array $options
): static;
```

#### `getTokenForRequest()` { #authguardtoken-gettokenforrequest }

```php
public function getTokenForRequest(): string|null;
```

#### `setRequest()` { #authguardtoken-setrequest }

```php
public function setRequest( RequestInterface $request ): static;
```

#### `user()` { #authguardtoken-user }

```php
public function user(): AuthUser|null;
```

#### `validate()` { #authguardtoken-validate }

```php
public function validate( array $credentials = [] ): bool;
```


## Auth\Guard\UserRemember

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Guard/UserRemember.zep){ .src-btn }

Value object representing the contents of a remember-me cookie.

<div class="api-tree" markdown>

- **`Phalcon\Auth\Guard\UserRemember`**

</div>

__Uses__ `InvalidArgumentException` · `Phalcon\Support\Helper\Json\Decode`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authguarduserremember-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">mixed</span> <span class="sv">$payload</span> )</code>
<span class="desc">Accepts either the raw JSON cookie value (string) or the already</span>
</a>
<a class="api-item" href="#authguarduserremember-getid">
<code class="vis vis-public">public</code>
<code class="ret">int|string|null</code>
<code class="sig"><span class="sf">getId</span>()</code>
</a>
<a class="api-item" href="#authguarduserremember-gettoken">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getToken</span>()</code>
</a>
<a class="api-item" href="#authguarduserremember-getuseragent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getUserAgent</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int|string|null</code>
<code class="sig"><span class="sv">$id</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$token</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$userAgent</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #authguarduserremember-__construct }

```php
public function __construct( mixed $payload );
```

Accepts either the raw JSON cookie value (string) or the already
decoded associative array. Malformed input degrades to an empty
payload so callers can read getters without null-guarding.

#### `getId()` { #authguarduserremember-getid }

```php
public function getId(): int|string|null;
```

#### `getToken()` { #authguarduserremember-gettoken }

```php
public function getToken(): string;
```

#### `getUserAgent()` { #authguarduserremember-getuseragent }

```php
public function getUserAgent(): string;
```


## Auth\Internal\ContainerResolver

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Internal/ContainerResolver.zep){ .src-btn }

Internal single source of truth for resolving services from either the
new Phalcon\Container\Container or the legacy Phalcon\Di\Di. Not part of
the public API.

Intent is Container-first; the legacy Di is supported "with provisions":
definitions must be pre-registered (no autowiring), the one exception
being the fresh path, which lets Di build an unregistered but existing
class via its class builder.

All legacy-Di failures are normalized to Phalcon\Container\Exceptions so
callers and userland catch a single exception family.

<div class="api-tree" markdown>

- **`Phalcon\Auth\Internal\ContainerResolver`**

</div>

__Uses__ `Phalcon\Container\Exceptions\Exception` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authinternalcontainerresolver-ensurecontainer">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">ensureContainer</span>( <span class="st">mixed</span> <span class="sv">$container</span> )</code>
<span class="desc">Validates that the value is a supported container.</span>
</a>
<a class="api-item" href="#authinternalcontainerresolver-requireservice">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">requireService</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$container</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$candidates</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$context</span></span>)</code>
<span class="desc">Resolves the first candidate service name that the container can</span>
</a>
<a class="api-item" href="#authinternalcontainerresolver-resolvefresh">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">resolveFresh</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$container</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span></span>)</code>
<span class="desc">Resolves a fresh instance: new() on the Container (bypasses the</span>
</a>
<a class="api-item" href="#authinternalcontainerresolver-servicecandidates">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">serviceCandidates</span>(<span class="prm"><span class="st">array</span> <span class="sv">$options</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$fqn</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$shortName</span></span>)</code>
<span class="desc">Builds the ordered candidate list for a framework service:</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `ensureContainer()` { #authinternalcontainerresolver-ensurecontainer }

```php
public static function ensureContainer( mixed $container ): void;
```

Validates that the value is a supported container.

#### `requireService()` { #authinternalcontainerresolver-requireservice }

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

#### `resolveFresh()` { #authinternalcontainerresolver-resolvefresh }

```php
public static function resolveFresh(
    mixed $container,
    string $name
): object;
```

Resolves a fresh instance: new() on the Container (bypasses the
instance cache); get() on the legacy Di (fresh for unregistered or
non-shared services). On Di, an unregistered but existing class is
still built via the class builder.

#### `serviceCandidates()` { #authinternalcontainerresolver-servicecandidates }

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

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Internal/Options.zep){ .src-btn }

Internal option-parsing helpers shared by adapter / guard fromOptions()
implementations. Not part of the public API.

<div class="api-tree" markdown>

- **`Phalcon\Auth\Internal\Options`**

</div>

__Uses__ `Phalcon\Auth\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authinternaloptions-arrayoption">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">arrayOption</span>(<span class="prm"><span class="st">array</span> <span class="sv">$options</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$defaultValue</span></span>)</code>
</a>
<a class="api-item" href="#authinternaloptions-requirearray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">requireArray</span>(<span class="prm"><span class="st">array</span> <span class="sv">$options</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$context</span></span>)</code>
</a>
<a class="api-item" href="#authinternaloptions-requirestring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">requireString</span>(<span class="prm"><span class="st">array</span> <span class="sv">$options</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$context</span></span>)</code>
</a>
<a class="api-item" href="#authinternaloptions-stringornull">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">stringOrNull</span>(<span class="prm"><span class="st">array</span> <span class="sv">$options</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `arrayOption()` { #authinternaloptions-arrayoption }

```php
public static function arrayOption(
    array $options,
    string $key,
    array $defaultValue
): array;
```

#### `requireArray()` { #authinternaloptions-requirearray }

```php
public static function requireArray(
    array $options,
    string $key,
    string $context
): array;
```

#### `requireString()` { #authinternaloptions-requirestring }

```php
public static function requireString(
    array $options,
    string $key,
    string $context
): string;
```

#### `stringOrNull()` { #authinternaloptions-stringornull }

```php
public static function stringOrNull(
    array $options,
    string $key
): string|null;
```


## Auth\Manager

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Manager.zep){ .src-btn }

Composes guards (authentication) and access gates (authorization)
behind a single facade. Guard-specific behavior is reached through
Manager::guard(); callers narrow with instanceof against the
relevant capability interface (GuardStateful, BasicAuth, etc.).

<div class="api-tree" markdown>

- **`Phalcon\Auth\Manager`** - implements [`Phalcon\Contracts\Auth\Manager`](phalcon_contracts.md#contractsauthmanager)

</div>

__Uses__ `Phalcon\Auth\Access\AccessLocator` · `Phalcon\Auth\Exceptions\DoesNotImplement` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\AuthUser` · `Phalcon\Contracts\Auth\Guard\Guard` · `Phalcon\Contracts\Auth\Guard\GuardStateful` · `Phalcon\Contracts\Auth\Manager`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authmanager-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">AccessLocator</span> <span class="sv">$accessFactory</span> )</code>
</a>
<a class="api-item" href="#authmanager-access">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">access</span>( <span class="st">string</span> <span class="sv">$accessName</span> )</code>
</a>
<a class="api-item" href="#authmanager-addaccesslist">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">addAccessList</span>( <span class="st">array</span> <span class="sv">$accessList</span> )</code>
</a>
<a class="api-item" href="#authmanager-addguard">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">addGuard</span>(<span class="prm"><span class="st">string</span> <span class="sv">$nameGuard</span>,</span><span class="prm"><span class="st">Guard</span> <span class="sv">$guard</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$isDefault</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#authmanager-attempt">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">attempt</span>(<span class="prm"><span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$remember</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#authmanager-check">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">check</span>()</code>
</a>
<a class="api-item" href="#authmanager-except">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">except</span>( <span class="st">string</span> <span class="sv">$actions</span> )</code>
</a>
<a class="api-item" href="#authmanager-getaccess">
<code class="vis vis-public">public</code>
<code class="ret">Access|null</code>
<code class="sig"><span class="sf">getAccess</span>()</code>
</a>
<a class="api-item" href="#authmanager-getaccesslist">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAccessList</span>()</code>
</a>
<a class="api-item" href="#authmanager-getdefaultguard">
<code class="vis vis-public">public</code>
<code class="ret">Guard|null</code>
<code class="sig"><span class="sf">getDefaultGuard</span>()</code>
</a>
<a class="api-item" href="#authmanager-getguards">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getGuards</span>()</code>
</a>
<a class="api-item" href="#authmanager-guard">
<code class="vis vis-public">public</code>
<code class="ret">Guard</code>
<code class="sig"><span class="sf">guard</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#authmanager-id">
<code class="vis vis-public">public</code>
<code class="ret">int|string|null</code>
<code class="sig"><span class="sf">id</span>()</code>
</a>
<a class="api-item" href="#authmanager-logout">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">logout</span>()</code>
</a>
<a class="api-item" href="#authmanager-only">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">only</span>( <span class="st">string</span> <span class="sv">$actions</span> )</code>
</a>
<a class="api-item" href="#authmanager-setaccess">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">setAccess</span>( <span class="st">Access</span> <span class="sv">$access</span> )</code>
</a>
<a class="api-item" href="#authmanager-setdefaultguard">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">setDefaultGuard</span>( <span class="st">Guard</span> <span class="sv">$guard</span> )</code>
</a>
<a class="api-item" href="#authmanager-user">
<code class="vis vis-public">public</code>
<code class="ret">AuthUser|null</code>
<code class="sig"><span class="sf">user</span>()</code>
</a>
<a class="api-item" href="#authmanager-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>( <span class="st">array</span> <span class="sv">$credentials</span><span class="sm"> = []</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AccessLocator</code>
<code class="sig"><span class="sv">$accessFactory</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Access | null</code>
<code class="sig"><span class="sv">$activeAccess</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Guard | null</code>
<code class="sig"><span class="sv">$defaultGuard</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;string, Guard&gt;</code>
<code class="sig"><span class="sv">$guards</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 19</div>

#### `__construct()` { #authmanager-__construct }

```php
public function __construct( AccessLocator $accessFactory );
```

#### `access()` { #authmanager-access }

```php
public function access( string $accessName ): self;
```

#### `addAccessList()` { #authmanager-addaccesslist }

```php
public function addAccessList( array $accessList ): self;
```

#### `addGuard()` { #authmanager-addguard }

```php
public function addGuard(
    string $nameGuard,
    Guard $guard,
    bool $isDefault = false
): self;
```

#### `attempt()` { #authmanager-attempt }

```php
public function attempt(
    array $credentials = [],
    bool $remember = false
): bool;
```

#### `check()` { #authmanager-check }

```php
public function check(): bool;
```

#### `except()` { #authmanager-except }

```php
public function except( string $actions ): self;
```

#### `getAccess()` { #authmanager-getaccess }

```php
public function getAccess(): Access|null;
```

#### `getAccessList()` { #authmanager-getaccesslist }

```php
public function getAccessList(): array;
```

#### `getDefaultGuard()` { #authmanager-getdefaultguard }

```php
public function getDefaultGuard(): Guard|null;
```

#### `getGuards()` { #authmanager-getguards }

```php
public function getGuards(): array;
```

#### `guard()` { #authmanager-guard }

```php
public function guard( string $name = null ): Guard;
```

#### `id()` { #authmanager-id }

```php
public function id(): int|string|null;
```

#### `logout()` { #authmanager-logout }

```php
public function logout(): void;
```

#### `only()` { #authmanager-only }

```php
public function only( string $actions ): self;
```

#### `setAccess()` { #authmanager-setaccess }

```php
public function setAccess( Access $access ): self;
```

#### `setDefaultGuard()` { #authmanager-setdefaultguard }

```php
public function setDefaultGuard( Guard $guard ): self;
```

#### `user()` { #authmanager-user }

```php
public function user(): AuthUser|null;
```

#### `validate()` { #authmanager-validate }

```php
public function validate( array $credentials = [] ): bool;
```


## Auth\ManagerFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/ManagerFactory.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Auth\ManagerFactory`**

</div>

__Uses__ `Phalcon\Auth\Access\AccessLocator` · `Phalcon\Auth\Adapter\AdapterLocator` · `Phalcon\Auth\Guard\GuardLocator` · `Phalcon\Auth\Internal\ContainerResolver` · `Phalcon\Auth\Internal\Options` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Auth\Access\Access` · `Phalcon\Contracts\Auth\Adapter\Adapter` · `Phalcon\Contracts\Auth\Guard\Guard` · `Phalcon\Contracts\Container\Service\Collection` · `Phalcon\Di\DiInterface` · `Phalcon\Encryption\Security`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authmanagerfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Security</span> <span class="sv">$hasher</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$container</span>,</span><span class="prm"><span class="st">AdapterLocator</span> <span class="sv">$adapterLocator</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">GuardLocator</span> <span class="sv">$guardLocator</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">AccessLocator</span> <span class="sv">$accessLocator</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#authmanagerfactory-load">
<code class="vis vis-public">public</code>
<code class="ret">Manager</code>
<code class="sig"><span class="sf">load</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
</a>
<a class="api-item" href="#authmanagerfactory-buildadapter">
<code class="vis vis-protected">protected</code>
<code class="ret">Adapter</code>
<code class="sig"><span class="sf">buildAdapter</span>(<span class="prm"><span class="st">AdapterLocator</span> <span class="sv">$locator</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$cfg</span></span>)</code>
</a>
<a class="api-item" href="#authmanagerfactory-buildguard">
<code class="vis vis-protected">protected</code>
<code class="ret">Guard</code>
<code class="sig"><span class="sf">buildGuard</span>(<span class="prm"><span class="st">GuardLocator</span> <span class="sv">$locator</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">Adapter</span> <span class="sv">$adapter</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AccessLocator</code>
<code class="sig"><span class="sv">$accessLocator</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterLocator</code>
<code class="sig"><span class="sv">$adapterLocator</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Collection|DiInterface</code>
<code class="sig"><span class="sv">$container</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">GuardLocator</code>
<code class="sig"><span class="sv">$guardLocator</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Security</code>
<code class="sig"><span class="sv">$hasher</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #authmanagerfactory-__construct }

```php
public function __construct(
    Security $hasher,
    mixed $container,
    AdapterLocator $adapterLocator = null,
    GuardLocator $guardLocator = null,
    AccessLocator $accessLocator = null
);
```

#### `load()` { #authmanagerfactory-load }

```php
public function load( mixed $config ): Manager;
```

<div class="api-group">Protected · 2</div>

#### `buildAdapter()` { #authmanagerfactory-buildadapter }

```php
protected function buildAdapter(
    AdapterLocator $locator,
    array $cfg
): Adapter;
```

#### `buildGuard()` { #authmanagerfactory-buildguard }

```php
protected function buildGuard(
    GuardLocator $locator,
    string $type,
    Adapter $adapter,
    array $options
): Guard;
```


## Auth\Micro\AuthMicroListener

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Micro/AuthMicroListener.zep){ .src-btn }

Listener that enforces the active Phalcon\Auth access gate on each Micro
route execution. Attach to the events manager:

  $eventsManager->attach('micro', new AuthMicroListener($manager));
  $app->setEventsManager($eventsManager);

The action name is the matched route's name, falling back to the route
pattern when the route is unnamed. The ACL component is the configured
component name (default 'Micro'). redirectTo() is ignored - Micro has no
forward mechanism.

No-op when no active access has been set on the manager.

<div class="api-tree" markdown>

- [`Phalcon\Auth\AbstractAuthDispatcherListener`](#authabstractauthdispatcherlistener)
    - **`Phalcon\Auth\Micro\AuthMicroListener`**

</div>

__Uses__ `Phalcon\Auth\AbstractAuthDispatcherListener` · `Phalcon\Auth\Exception` · `Phalcon\Contracts\Auth\Manager` · `Phalcon\Events\Event` · `Phalcon\Mvc\Micro` · `Phalcon\Mvc\RouterInterface` · `Phalcon\Mvc\Router\RouteInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authmicroauthmicrolistener-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Manager</span> <span class="sv">$manager</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$componentName</span><span class="sm"> = &quot;Micro&quot;</span></span>)</code>
</a>
<a class="api-item" href="#authmicroauthmicrolistener-beforeexecuteroute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">beforeExecuteRoute</span>(<span class="prm"><span class="st">Event</span> <span class="sv">$event</span>,</span><span class="prm"><span class="st">Micro</span> <span class="sv">$application</span></span>)</code>
</a>
<a class="api-item" href="#authmicroauthmicrolistener-getactiontype">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionType</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$componentName</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #authmicroauthmicrolistener-__construct }

```php
public function __construct(
    Manager $manager,
    string $componentName = "Micro"
);
```

#### `beforeExecuteRoute()` { #authmicroauthmicrolistener-beforeexecuteroute }

```php
public function beforeExecuteRoute(
    Event $event,
    Micro $application
): bool;
```

<div class="api-group">Protected · 1</div>

#### `getActionType()` { #authmicroauthmicrolistener-getactiontype }

```php
protected function getActionType(): string;
```


## Auth\Mvc\AuthDispatcherListener

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Auth/Mvc/AuthDispatcherListener.zep){ .src-btn }

Listener that enforces the active Phalcon\Auth access gate on each MVC
dispatch. Attach to the events manager:

  $eventsManager->attach('dispatch', new AuthDispatcherListener($manager));

No-op when no active access has been set on the manager.

<div class="api-tree" markdown>

- [`Phalcon\Auth\AbstractAuthDispatcherListener`](#authabstractauthdispatcherlistener)
    - **`Phalcon\Auth\Mvc\AuthDispatcherListener`**

</div>

__Uses__ `Phalcon\Auth\AbstractAuthDispatcherListener` · `Phalcon\Auth\Exception` · `Phalcon\Events\Event` · `Phalcon\Mvc\Dispatcher`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#authmvcauthdispatcherlistener-beforeexecuteroute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">beforeExecuteRoute</span>(<span class="prm"><span class="st">Event</span> <span class="sv">$event</span>,</span><span class="prm"><span class="st">Dispatcher</span> <span class="sv">$dispatcher</span></span>)</code>
</a>
<a class="api-item" href="#authmvcauthdispatcherlistener-getactiontype">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getActionType</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `beforeExecuteRoute()` { #authmvcauthdispatcherlistener-beforeexecuteroute }

```php
public function beforeExecuteRoute(
    Event $event,
    Dispatcher $dispatcher
): bool;
```

<div class="api-group">Protected · 1</div>

#### `getActionType()` { #authmvcauthdispatcherlistener-getactiontype }

```php
protected function getActionType(): string;
```
