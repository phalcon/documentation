---
title: "Phalcon Acl"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Acl

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Acl\AbstractElement

Abstract

Shared base for ACL Role and Component entities: a name and an optional
description.

@todo Remove in v7. Kept only for backwards compatibility; the logic now
      lives in `Phalcon\Acl\Traits\ItemTrait` - compose that trait directly
      instead of extending this class.

- **`Phalcon\Acl\AbstractElement`**
- [`Phalcon\Acl\Component`](#aclcomponent)
- [`Phalcon\Acl\Role`](#aclrole)

`Phalcon\Acl\Traits\ItemTrait`

## Acl\Adapter\AbstractAdapter

Abstract

Functionality common to all adapters

- [`Phalcon\Events\AbstractEventsAware`](../phalcon_events/#eventsabstracteventsaware)
- **`Phalcon\Acl\Adapter\AbstractAdapter`** - implements [`Phalcon\Acl\Adapter\AdapterInterface`](#acladapteradapterinterface), [`Phalcon\Events\EventsAwareInterface`](../phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Acl\Adapter\Memory`](#acladaptermemory)

`Phalcon\Acl\Enum` · `Phalcon\Events\AbstractEventsAware` · `Phalcon\Events\EventsAwareInterface`

### Method Summary

<ApiItem href="#acladapterabstractadapter-getactiveaccess" visibility="public" name="getActiveAccess" returnType="string|null" params={[]}>
Returns the access which the list is checking if a role can access it
</ApiItem>
<ApiItem href="#acladapterabstractadapter-getactivecomponent" visibility="public" name="getActiveComponent" returnType="string|null" params={[]}>
Returns the component which the list is checking if some role can access
</ApiItem>
<ApiItem href="#acladapterabstractadapter-getactiverole" visibility="public" name="getActiveRole" returnType="string|null" params={[]}>
Returns the role which the list is checking if it's allowed to certain
</ApiItem>
<ApiItem href="#acladapterabstractadapter-getdefaultaction" visibility="public" name="getDefaultAction" returnType="int" params={[]}>
Returns the default action
</ApiItem>
<ApiItem href="#acladapterabstractadapter-setdefaultaction" visibility="public" name="setDefaultAction" returnType="void" params={[{"type":"int","name":"defaultAccess","default":null}]}>
Sets the default access level
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="accessGranted" type="int" default="Enum::DENY">
Access Granted
</ApiItem>
<ApiItem kind="property" visibility="protected" name="activeAccess" type="string|null" default="null">
Active access which the list is checking if some role can access it
</ApiItem>
<ApiItem kind="property" visibility="protected" name="activeComponent" type="string|null" default="null">
Component which the list is checking if some role can access it
</ApiItem>
<ApiItem kind="property" visibility="protected" name="activeRole" type="string|null" default="null">
Role which the list is checking if it's allowed to certain
component/access
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultAccess" type="int" default="Enum::DENY">
Default access
</ApiItem>

### Methods

<h4 id="acladapterabstractadapter-getactiveaccess"><code>getActiveAccess()</code></h4>

```php
public function getActiveAccess(): string|null;
```

Returns the access which the list is checking if a role can access it

<h4 id="acladapterabstractadapter-getactivecomponent"><code>getActiveComponent()</code></h4>

```php
public function getActiveComponent(): string|null;
```

Returns the component which the list is checking if some role can access
it

<h4 id="acladapterabstractadapter-getactiverole"><code>getActiveRole()</code></h4>

```php
public function getActiveRole(): string|null;
```

Returns the role which the list is checking if it's allowed to certain
component/access

<h4 id="acladapterabstractadapter-getdefaultaction"><code>getDefaultAction()</code></h4>

```php
public function getDefaultAction(): int;
```

Returns the default action

<h4 id="acladapterabstractadapter-setdefaultaction"><code>setDefaultAction()</code></h4>

```php
public function setDefaultAction( int $defaultAccess ): void;
```

Sets the default access level
(Phalcon\Acl\Enum::ALLOW or Phalcon\Acl\Enum::DENY)

## Acl\Adapter\AdapterInterface

Interface

Interface for Phalcon\Acl adapters

- [`Phalcon\Contracts\Acl\Adapter\Adapter`](../phalcon_contracts/#contractsacladapteradapter)
- **`Phalcon\Acl\Adapter\AdapterInterface`**

`Phalcon\Contracts\Acl\Adapter\Adapter`

## Acl\Adapter\Memory

Class

Manages ACL lists in memory

```php
$acl = new \Phalcon\Acl\Adapter\Memory();

$acl->setDefaultAction(
\Phalcon\Acl\Enum::DENY
);

// Register roles
$roles = [
"users"  => new \Phalcon\Acl\Role("Users"),
"guests" => new \Phalcon\Acl\Role("Guests"),
];
foreach ($roles as $role) {
$acl->addRole($role);
}

// Private area components
$privateComponents = [
"companies" => ["index", "search", "new", "edit", "save", "create", "delete"],
"products"  => ["index", "search", "new", "edit", "save", "create", "delete"],
"invoices"  => ["index", "profile"],
];

foreach ($privateComponents as $componentName => $actions) {
$acl->addComponent(
    new \Phalcon\Acl\Component($componentName),
    $actions
);
}

// Public area components
$publicComponents = [
"index"   => ["index"],
"about"   => ["index"],
"session" => ["index", "register", "start", "end"],
"contact" => ["index", "send"],
];

foreach ($publicComponents as $componentName => $actions) {
$acl->addComponent(
    new \Phalcon\Acl\Component($componentName),
    $actions
);
}

// Grant access to public areas to both users and guests
foreach ($roles as $role) {
foreach ($publicComponents as $component => $actions) {
    $acl->allow($role->getName(), $component, "*");
}
}

// Grant access to private area to role Users
foreach ($privateComponents as $component => $actions) {
foreach ($actions as $action) {
    $acl->allow("Users", $component, $action);
}
}
```

- [`Phalcon\Events\AbstractEventsAware`](../phalcon_events/#eventsabstracteventsaware)
- [`Phalcon\Acl\Adapter\AbstractAdapter`](#acladapterabstractadapter)
- **`Phalcon\Acl\Adapter\Memory`**
- [`Phalcon\Acl\Adapter\Storage`](#acladapterstorage)

`Closure` · `Phalcon\Acl\Component` · `Phalcon\Acl\ComponentAwareInterface` · `Phalcon\Acl\ComponentInterface` · `Phalcon\Acl\Enum` · `Phalcon\Acl\Exceptions\AccessRuleNotFound` · `Phalcon\Acl\Exceptions\CircularInheritanceError` · `Phalcon\Acl\Exceptions\ElementNotFound` · `Phalcon\Acl\Exceptions\ForbiddenDelimiter` · `Phalcon\Acl\Exceptions\InvalidAccessList` · `Phalcon\Acl\Exceptions\InvalidComponentImplementation` · `Phalcon\Acl\Exceptions\InvalidRoleImplementation` · `Phalcon\Acl\Exceptions\InvalidRoleType` · `Phalcon\Acl\Exceptions\MissingFunctionParameters` · `Phalcon\Acl\Exceptions\ParameterTypeMismatch` · `Phalcon\Acl\Exceptions\RoleNotFoundException` · `Phalcon\Acl\Role` · `Phalcon\Acl\RoleAwareInterface` · `Phalcon\Acl\RoleInterface` · `Phalcon\Contracts\Acl\AclTypes` · `ReflectionClass` · `ReflectionException` · `ReflectionFunction` · `ReflectionNamedType`

### Method Summary

<ApiItem href="#acladaptermemory-addcomponent" visibility="public" name="addComponent" returnType="bool" params={[{"type":"mixed","name":"componentValue","default":null},{"type":"mixed","name":"accessList","default":null}]}>
Adds a component to the ACL list
</ApiItem>
<ApiItem href="#acladaptermemory-addcomponentaccess" visibility="public" name="addComponentAccess" returnType="bool" params={[{"type":"string","name":"componentName","default":null},{"type":"mixed","name":"accessList","default":null}]}>
Adds access to components
</ApiItem>
<ApiItem href="#acladaptermemory-addinherit" visibility="public" name="addInherit" returnType="bool" params={[{"type":"string","name":"roleName","default":null},{"type":"array|RoleInterface|string","name":"roleToInherit","default":null}]}>
Add a role which inherits from an existing role
</ApiItem>
<ApiItem href="#acladaptermemory-addrole" visibility="public" name="addRole" returnType="bool" params={[{"type":"mixed","name":"role","default":null},{"type":"mixed","name":"accessInherits","default":"null"}]}>
Adds a role to the ACL list. The second parameter lets to inherit access
</ApiItem>
<ApiItem href="#acladaptermemory-allow" visibility="public" name="allow" returnType="void" params={[{"type":"string","name":"roleName","default":null},{"type":"string","name":"componentName","default":null},{"type":"mixed","name":"access","default":null},{"type":"mixed","name":"func","default":"null"}]}>
Allow access to a role on a component. You can use `*` as wildcard
</ApiItem>
<ApiItem href="#acladaptermemory-deny" visibility="public" name="deny" returnType="void" params={[{"type":"string","name":"roleName","default":null},{"type":"string","name":"componentName","default":null},{"type":"mixed","name":"access","default":null},{"type":"mixed","name":"func","default":"null"}]}>
Deny access to a role on a component. You can use `*` as wildcard
</ApiItem>
<ApiItem href="#acladaptermemory-dropcomponentaccess" visibility="public" name="dropComponentAccess" returnType="void" params={[{"type":"string","name":"componentName","default":null},{"type":"mixed","name":"accessList","default":null}]}>
Removes access from a component
</ApiItem>
<ApiItem href="#acladaptermemory-getactivefunction" visibility="public" name="getActiveFunction" returnType="mixed" params={[]}>
Returns the latest function used to acquire access
</ApiItem>
<ApiItem href="#acladaptermemory-getactivefunctioncustomargumentscount" visibility="public" name="getActiveFunctionCustomArgumentsCount" returnType="int" params={[]}>
Returns number of additional arguments(excluding role and resource) for active function
</ApiItem>
<ApiItem href="#acladaptermemory-getactivekey" visibility="public" name="getActiveKey" returnType="string|null" params={[]}>
Returns the last composite key used to acquire access.
</ApiItem>
<ApiItem href="#acladaptermemory-getcomponents" visibility="public" name="getComponents" returnType="array|null" params={[]}>
Return an array with every component registered in the list
</ApiItem>
<ApiItem href="#acladaptermemory-getinheritedroles" visibility="public" name="getInheritedRoles" returnType="array" params={[{"type":"string","name":"roleName","default":"\"\""}]}>
Returns the inherited roles for a passed role name. If no role name
</ApiItem>
<ApiItem href="#acladaptermemory-getnoargumentsdefaultaction" visibility="public" name="getNoArgumentsDefaultAction" returnType="int" params={[]}>
Returns the default ACL access level for no arguments provided in
</ApiItem>
<ApiItem href="#acladaptermemory-getroles" visibility="public" name="getRoles" returnType="array" params={[]}>
Return an array with every role registered in the list
</ApiItem>
<ApiItem href="#acladaptermemory-isallowed" visibility="public" name="isAllowed" returnType="bool" params={[{"type":"mixed","name":"roleName","default":null},{"type":"mixed","name":"componentName","default":null},{"type":"string","name":"access","default":null},{"type":"array|null","name":"parameters","default":"null"}]}>
Check whether a role is allowed to access an action from a component
</ApiItem>
<ApiItem href="#acladaptermemory-iscomponent" visibility="public" name="isComponent" returnType="bool" params={[{"type":"string","name":"componentName","default":null}]}>
Check whether component exist in the components list
</ApiItem>
<ApiItem href="#acladaptermemory-isrole" visibility="public" name="isRole" returnType="bool" params={[{"type":"string","name":"roleName","default":null}]}>
Check whether role exist in the roles list
</ApiItem>
<ApiItem href="#acladaptermemory-setnoargumentsdefaultaction" visibility="public" name="setNoArgumentsDefaultAction" returnType="void" params={[{"type":"int","name":"defaultAccess","default":null}]}>
Sets the default access level (`Phalcon\Enum::ALLOW` or
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="access" type="array&lt;string, int&gt;" default="[]">
Access
</ApiItem>
<ApiItem kind="property" visibility="protected" name="accessList" type="array&lt;string, bool&gt;" default="[...]">
Access List
</ApiItem>
<ApiItem kind="property" visibility="protected" name="activeFunction" type="mixed" default="">
Returns the latest function used to acquire access
</ApiItem>
<ApiItem kind="property" visibility="protected" name="activeFunctionCustomArgumentsCount" type="int" default="0">
Returns number of additional arguments(excluding role and resource) for
active function
</ApiItem>
<ApiItem kind="property" visibility="protected" name="activeKey" type="string|null" default="null">
Returns the latest key used to acquire access
</ApiItem>
<ApiItem kind="property" visibility="protected" name="components" type="acl_components" default="[]">
Components
</ApiItem>
<ApiItem kind="property" visibility="protected" name="componentsNames" type="array&lt;string, bool&gt;" default="[...]">
Component Names
</ApiItem>
<ApiItem kind="property" visibility="protected" name="functions" type="array&lt;string, callable|string&gt;" default="[]">
Function List
</ApiItem>
<ApiItem kind="property" visibility="protected" name="noArgumentsDefaultAction" type="int" default="Enum::DENY">
Default action for no arguments is `deny`
</ApiItem>
<ApiItem kind="property" visibility="protected" name="roleInherits" type="array&lt;string, array&lt;int, string&gt;&gt;" default="[]">
Role Inherits
</ApiItem>
<ApiItem kind="property" visibility="protected" name="roles" type="array&lt;string, RoleInterface&gt;" default="[]">
Roles
</ApiItem>

### Methods

<h4 id="acladaptermemory-addcomponent"><code>addComponent()</code></h4>

```php
public function addComponent(
mixed $componentValue,
mixed $accessList
): bool;
```

Adds a component to the ACL list

Access names can be a particular action, for instance `search`, `update`
`delete` etc. or a list of them.

Example:
```php
// Add a component to the list allowing access to an action
$acl->addComponent(
new Phalcon\Acl\Component("customers"),
"search"
);

$acl->addComponent("customers", "search");

// Add a component  with an access list
$acl->addComponent(
new Phalcon\Acl\Component("customers"),
[
    "create",
    "search",
]
);

$acl->addComponent(
"customers",
[
    "create",
    "search",
]
);
```

<h4 id="acladaptermemory-addcomponentaccess"><code>addComponentAccess()</code></h4>

```php
public function addComponentAccess(
string $componentName,
mixed $accessList
): bool;
```

Adds access to components

The guard below is the validation, so the parameter stays `mixed` here.
The accepted values are documented on the contract.

<h4 id="acladaptermemory-addinherit"><code>addInherit()</code></h4>

```php
public function addInherit(
string $roleName,
array|RoleInterface|string $roleToInherit
): bool;
```

Add a role which inherits from an existing role

```php
$acl->addRole("administrator", "consultant");
$acl->addRole("administrator", ["consultant", "consultant2"]);
```

<h4 id="acladaptermemory-addrole"><code>addRole()</code></h4>

```php
public function addRole(
mixed $role,
mixed $accessInherits = null
): bool;
```

Adds a role to the ACL list. The second parameter lets to inherit access
from an existing role

```php
$acl->addRole(
new Phalcon\Acl\Role("administrator"),
"consultant"
);

$acl->addRole("administrator", "consultant");
$acl->addRole("administrator", ["consultant", "consultant2"]);
```

<h4 id="acladaptermemory-allow"><code>allow()</code></h4>

```php
public function allow(
string $roleName,
string $componentName,
mixed $access,
mixed $func = null
): void;
```

Allow access to a role on a component. You can use `*` as wildcard

A `*` role is an eager snapshot: it expands to the roles that exist when
`allow()` is called, so roles added afterwards do not inherit the grant.

```php
// Allow access to guests to search on customers
$acl->allow("guests", "customers", "search");

// Allow access to guests to search or create on customers
$acl->allow("guests", "customers", ["search", "create"]);

// Allow access to any role to browse on products
$acl->allow("*", "products", "browse");

// Allow access to any role to perform any action on any component
$acl->allow("*", "*", "*");
```

<h4 id="acladaptermemory-deny"><code>deny()</code></h4>

```php
public function deny(
string $roleName,
string $componentName,
mixed $access,
mixed $func = null
): void;
```

Deny access to a role on a component. You can use `*` as wildcard

A `*` role is an eager snapshot: it expands to the roles that exist when
`deny()` is called, so roles added afterwards do not inherit the rule.

```php
// Deny access to guests to search on customers
$acl->deny("guests", "customers", "search");

// Deny access to guests to search or create on customers
$acl->deny("guests", "customers", ["search", "create"]);

// Deny access to any role to browse on products
$acl->deny("*", "products", "browse");

// Deny access to any role to perform any action on any component
$acl->deny("*", "*", "*");
```

<h4 id="acladaptermemory-dropcomponentaccess"><code>dropComponentAccess()</code></h4>

```php
public function dropComponentAccess(
string $componentName,
mixed $accessList
): void;
```

Removes access from a component

<h4 id="acladaptermemory-getactivefunction"><code>getActiveFunction()</code></h4>

```php
public function getActiveFunction(): mixed;
```

Returns the latest function used to acquire access

<h4 id="acladaptermemory-getactivefunctioncustomargumentscount"><code>getActiveFunctionCustomArgumentsCount()</code></h4>

```php
public function getActiveFunctionCustomArgumentsCount(): int;
```

Returns number of additional arguments(excluding role and resource) for active function

<h4 id="acladaptermemory-getactivekey"><code>getActiveKey()</code></h4>

```php
public function getActiveKey(): string|null;
```

Returns the last composite key used to acquire access.

<h4 id="acladaptermemory-getcomponents"><code>getComponents()</code></h4>

```php
public function getComponents(): array|null;
```

Return an array with every component registered in the list

<h4 id="acladaptermemory-getinheritedroles"><code>getInheritedRoles()</code></h4>

```php
public function getInheritedRoles( string $roleName = "" ): array;
```

Returns the inherited roles for a passed role name. If no role name
has been specified it will return the whole array. If the role has not
been found it returns an empty array

<h4 id="acladaptermemory-getnoargumentsdefaultaction"><code>getNoArgumentsDefaultAction()</code></h4>

```php
public function getNoArgumentsDefaultAction(): int;
```

Returns the default ACL access level for no arguments provided in
`isAllowed` action if a `func` (callable) exists for `accessKey`

<h4 id="acladaptermemory-getroles"><code>getRoles()</code></h4>

```php
public function getRoles(): array;
```

Return an array with every role registered in the list

<h4 id="acladaptermemory-isallowed"><code>isAllowed()</code></h4>

```php
public function isAllowed(
mixed $roleName,
mixed $componentName,
string $access,
array|null $parameters = null
): bool;
```

Check whether a role is allowed to access an action from a component

```php
// Does andres have access to the customers component to create?
$acl->isAllowed("andres", "Products", "create");

// Do guests have access to any component to edit?
$acl->isAllowed("guests", "*", "edit");
```

<h4 id="acladaptermemory-iscomponent"><code>isComponent()</code></h4>

```php
public function isComponent( string $componentName ): bool;
```

Check whether component exist in the components list

<h4 id="acladaptermemory-isrole"><code>isRole()</code></h4>

```php
public function isRole( string $roleName ): bool;
```

Check whether role exist in the roles list

<h4 id="acladaptermemory-setnoargumentsdefaultaction"><code>setNoArgumentsDefaultAction()</code></h4>

```php
public function setNoArgumentsDefaultAction( int $defaultAccess ): void;
```

Sets the default access level (`Phalcon\Enum::ALLOW` or
`Phalcon\Enum::DENY`) for no arguments provided in isAllowed action if
there exists func for accessKey

## Acl\Adapter\Storage

Class

ACL adapter that persists its policy to any Phalcon\Storage backend
(Redis, Apcu, Stream, Memcached, ...) as a whole-policy snapshot.

The snapshot is a versioned, scalar-only structure: roles and components are
stored as `name => description` maps and rebuilt into objects on load, so the
snapshot round-trips through any serializer (php, json, igbinary, msgpack).

Callable (closure) rules are not serializable. Any access key backed by a
closure is persisted as DENY, so a reloaded policy fails closed until the
closure is re-registered after load().

Single-writer contract: mutations are in-memory until save() is called, and
save() writes the whole snapshot (last-write-wins, no atomic check-and-set).
Use external locking when multiple processes write the same key.

@see Persistable

- [`Phalcon\Events\AbstractEventsAware`](../phalcon_events/#eventsabstracteventsaware)
- [`Phalcon\Acl\Adapter\AbstractAdapter`](#acladapterabstractadapter)
- [`Phalcon\Acl\Adapter\Memory`](#acladaptermemory)
- **`Phalcon\Acl\Adapter\Storage`** - implements [`Phalcon\Contracts\Acl\Adapter\Persistable`](../phalcon_contracts/#contractsacladapterpersistable)

`Phalcon\Acl\Component` · `Phalcon\Acl\Enum` · `Phalcon\Acl\Exceptions\InvalidSnapshot` · `Phalcon\Acl\Role` · `Phalcon\Contracts\Acl\AclTypes` · `Phalcon\Contracts\Acl\Adapter\Persistable` · `Phalcon\Storage\Adapter\AdapterInterface` · `Throwable`

### Method Summary

<ApiItem href="#acladapterstorage-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"StorageInterface","name":"storage","default":null},{"type":"string","name":"key","default":"\"acl-data\""}]}>
</ApiItem>
<ApiItem href="#acladapterstorage-load" visibility="public" name="load" returnType="bool" params={[]}>
Loads the policy snapshot from the backing store, replacing current
</ApiItem>
<ApiItem href="#acladapterstorage-save" visibility="public" name="save" returnType="bool" params={[]}>
Persists the policy snapshot. Closure-backed access keys are written as
</ApiItem>

### Constants

<ApiItem kind="constant" name="SNAPSHOT_VERSION" type="int" default="1">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="key" type="string" default="&quot;acl-data&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="storage" type="StorageInterface" default="">
</ApiItem>

### Methods

<h4 id="acladapterstorage-__construct"><code>__construct()</code></h4>

```php
public function __construct(
StorageInterface $storage,
string $key = "acl-data"
);
```

<h4 id="acladapterstorage-load"><code>load()</code></h4>

```php
public function load(): bool;
```

Loads the policy snapshot from the backing store, replacing current
in-memory state. Returns false when no compatible snapshot exists; throws
Phalcon\Acl\Exceptions\InvalidSnapshot on an incompatible version or a
malformed structure.

<h4 id="acladapterstorage-save"><code>save()</code></h4>

```php
public function save(): bool;
```

Persists the policy snapshot. Closure-backed access keys are written as
DENY (fail closed); roles/components are written as scalar name =>
description maps for serializer independence.

## Acl\Component

Class

This class defines component entity and its description

- [`Phalcon\Acl\AbstractElement`](#aclabstractelement)
- **`Phalcon\Acl\Component`** - implements [`Phalcon\Acl\ComponentInterface`](#aclcomponentinterface)

`Phalcon\Acl\Exceptions\ForbiddenDelimiter` · `Phalcon\Acl\Exceptions\ForbiddenWildcard`

### Method Summary

<ApiItem href="#aclcomponent-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string|null","name":"description","default":"null"}]}>
Component constructor.
</ApiItem>

### Methods

<h4 id="aclcomponent-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string|null $description = null
);
```

Component constructor.

## Acl\ComponentAwareInterface

Interface

Interface for ACL Component aware objects

- [`Phalcon\Contracts\Acl\ComponentAware`](../phalcon_contracts/#contractsaclcomponentaware)
- **`Phalcon\Acl\ComponentAwareInterface`**

`Phalcon\Contracts\Acl\ComponentAware`

## Acl\ComponentInterface

Interface

Interface for Phalcon\Acl\Component

- [`Phalcon\Contracts\Acl\Component`](../phalcon_contracts/#contractsaclcomponent)
- **`Phalcon\Acl\ComponentInterface`**

`Phalcon\Contracts\Acl\Component`

## Acl\Enum

Class

Constants for Phalcon\Acl\Adapter adapters

- **`Phalcon\Acl\Enum`**

### Constants

<ApiItem kind="constant" name="ALLOW" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="DENY" type="int" default="0">
</ApiItem>

## Acl\Exception

Class

Class for exceptions thrown by Phalcon\Acl

- `\Exception`
- **`Phalcon\Acl\Exception`**
- [`Phalcon\Acl\Exceptions\AccessRuleNotFound`](#aclexceptionsaccessrulenotfound)
- [`Phalcon\Acl\Exceptions\CircularInheritanceError`](#aclexceptionscircularinheritanceerror)
- [`Phalcon\Acl\Exceptions\ElementNotFound`](#aclexceptionselementnotfound)
- [`Phalcon\Acl\Exceptions\ForbiddenDelimiter`](#aclexceptionsforbiddendelimiter)
- [`Phalcon\Acl\Exceptions\ForbiddenWildcard`](#aclexceptionsforbiddenwildcard)
- [`Phalcon\Acl\Exceptions\InvalidAccessList`](#aclexceptionsinvalidaccesslist)
- [`Phalcon\Acl\Exceptions\InvalidComponentImplementation`](#aclexceptionsinvalidcomponentimplementation)
- [`Phalcon\Acl\Exceptions\InvalidRoleImplementation`](#aclexceptionsinvalidroleimplementation)
- [`Phalcon\Acl\Exceptions\InvalidRoleType`](#aclexceptionsinvalidroletype)
- [`Phalcon\Acl\Exceptions\InvalidSnapshot`](#aclexceptionsinvalidsnapshot)
- [`Phalcon\Acl\Exceptions\MissingFunctionParameters`](#aclexceptionsmissingfunctionparameters)
- [`Phalcon\Acl\Exceptions\ParameterTypeMismatch`](#aclexceptionsparametertypemismatch)
- [`Phalcon\Acl\Exceptions\RoleNotFoundException`](#aclexceptionsrolenotfoundexception)

## Acl\Exceptions\AccessRuleNotFound

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\AccessRuleNotFound`**

`Phalcon\Acl\Exception`

### Method Summary

<ApiItem href="#aclexceptionsaccessrulenotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"accessName","default":null},{"type":"string","name":"componentName","default":null}]}>
</ApiItem>

### Methods

<h4 id="aclexceptionsaccessrulenotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $accessName,
string $componentName
);
```

## Acl\Exceptions\CircularInheritanceError

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\CircularInheritanceError`**

`Phalcon\Acl\Exception`

### Method Summary

<ApiItem href="#aclexceptionscircularinheritanceerror-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"roleName","default":null}]}>
</ApiItem>

### Methods

<h4 id="aclexceptionscircularinheritanceerror-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $roleName );
```

## Acl\Exceptions\ElementNotFound

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\ElementNotFound`**

`Phalcon\Acl\Exception`

## Acl\Exceptions\ForbiddenDelimiter

Class

The "!" character separates the role, component and access parts of the
internal ACL keys, so a name that contains it would make two different
tuples share one key.

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\ForbiddenDelimiter`**

`Phalcon\Acl\Exception`

### Method Summary

<ApiItem href="#aclexceptionsforbiddendelimiter-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"elementType","default":null}]}>
</ApiItem>

### Methods

<h4 id="aclexceptionsforbiddendelimiter-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $elementType );
```

## Acl\Exceptions\ForbiddenWildcard

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\ForbiddenWildcard`**

`Phalcon\Acl\Exception`

### Method Summary

<ApiItem href="#aclexceptionsforbiddenwildcard-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"elementType","default":null}]}>
</ApiItem>

### Methods

<h4 id="aclexceptionsforbiddenwildcard-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $elementType );
```

## Acl\Exceptions\InvalidAccessList

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\InvalidAccessList`**

`Phalcon\Acl\Exception`

### Method Summary

<ApiItem href="#aclexceptionsinvalidaccesslist-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="aclexceptionsinvalidaccesslist-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Acl\Exceptions\InvalidComponentImplementation

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\InvalidComponentImplementation`**

`Phalcon\Acl\Exception`

### Method Summary

<ApiItem href="#aclexceptionsinvalidcomponentimplementation-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="aclexceptionsinvalidcomponentimplementation-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Acl\Exceptions\InvalidRoleImplementation

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\InvalidRoleImplementation`**

`Phalcon\Acl\Exception`

### Method Summary

<ApiItem href="#aclexceptionsinvalidroleimplementation-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="aclexceptionsinvalidroleimplementation-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Acl\Exceptions\InvalidRoleType

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\InvalidRoleType`**

`Phalcon\Acl\Exception`

### Method Summary

<ApiItem href="#aclexceptionsinvalidroletype-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="aclexceptionsinvalidroletype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Acl\Exceptions\InvalidSnapshot

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\InvalidSnapshot`**

`Phalcon\Acl\Exception`

## Acl\Exceptions\MissingFunctionParameters

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\MissingFunctionParameters`**

`Phalcon\Acl\Exception`

## Acl\Exceptions\ParameterTypeMismatch

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\ParameterTypeMismatch`**

`Phalcon\Acl\Exception`

## Acl\Exceptions\RoleNotFoundException

Class

- `\Exception`
- [`Phalcon\Acl\Exception`](#aclexception)
- **`Phalcon\Acl\Exceptions\RoleNotFoundException`**

`Phalcon\Acl\Exception`

### Method Summary

<ApiItem href="#aclexceptionsrolenotfoundexception-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"roleName","default":null}]}>
</ApiItem>

### Methods

<h4 id="aclexceptionsrolenotfoundexception-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $roleName );
```

## Acl\Role

Class

This class defines role entity and its description

- [`Phalcon\Acl\AbstractElement`](#aclabstractelement)
- **`Phalcon\Acl\Role`** - implements [`Phalcon\Acl\RoleInterface`](#aclroleinterface)

`Phalcon\Acl\Exceptions\ForbiddenDelimiter` · `Phalcon\Acl\Exceptions\ForbiddenWildcard`

### Method Summary

<ApiItem href="#aclrole-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string|null","name":"description","default":"null"}]}>
Role constructor.
</ApiItem>

### Methods

<h4 id="aclrole-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string|null $description = null
);
```

Role constructor.

## Acl\RoleAwareInterface

Interface

Interface for ACL Role aware objects

- [`Phalcon\Contracts\Acl\RoleAware`](../phalcon_contracts/#contractsaclroleaware)
- **`Phalcon\Acl\RoleAwareInterface`**

`Phalcon\Contracts\Acl\RoleAware`

## Acl\RoleInterface

Interface

Interface for Phalcon\Acl\Role

- [`Phalcon\Contracts\Acl\Role`](../phalcon_contracts/#contractsaclrole)
- **`Phalcon\Acl\RoleInterface`**

`Phalcon\Contracts\Acl\Role`

## Acl\Traits\ItemTrait

Trait

This class defines role/component names and their descriptions

- **`Phalcon\Acl\Traits\ItemTrait`**

[`Phalcon\Acl\AbstractElement`](#aclabstractelement)

### Method Summary

<ApiItem href="#acltraitsitemtrait-__tostring" visibility="public" name="__toString" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#acltraitsitemtrait-getdescription" visibility="public" name="getDescription" returnType="string|null" params={[]}>
</ApiItem>
<ApiItem href="#acltraitsitemtrait-getname" visibility="public" name="getName" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="description" type="string|null" default="null">
Role/Component description
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
Role/Component name
</ApiItem>

### Methods

<h4 id="acltraitsitemtrait-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

<h4 id="acltraitsitemtrait-getdescription"><code>getDescription()</code></h4>

```php
public function getDescription(): string|null;
```

<h4 id="acltraitsitemtrait-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Source: https://docs.phalcon.io/6.0/api/phalcon_acl/index.mdx
