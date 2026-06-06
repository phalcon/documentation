---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Acl\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Adapter/AbstractAdapter.zep){ .src-btn }

Adapter for Phalcon\Acl adapters

<div class="api-tree" markdown>

- [`Phalcon\Events\AbstractEventsAware`](phalcon_events.md#eventsabstracteventsaware)
    - **`Phalcon\Acl\Adapter\AbstractAdapter`** — implements [`Phalcon\Acl\Adapter\AdapterInterface`](#acladapteradapterinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)
        - [`Phalcon\Acl\Adapter\Memory`](#acladaptermemory)

</div>

__Uses__ `Phalcon\Acl\Enum` · `Phalcon\Events\AbstractEventsAware` · `Phalcon\Events\EventsAwareInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#acladapterabstractadapter-getactiveaccess">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getActiveAccess()</code>
<span class="desc">Active access which the list is checking if some role can access it</span>
</a>
<a class="api-item" href="#acladapterabstractadapter-getactivecomponent">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getActiveComponent()</code>
<span class="desc">Component which the list is checking if some role can access it</span>
</a>
<a class="api-item" href="#acladapterabstractadapter-getactiverole">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getActiveRole()</code>
<span class="desc">Role which the list is checking if it&#039;s allowed to certain</span>
</a>
<a class="api-item" href="#acladapterabstractadapter-getdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getDefaultAction()</code>
<span class="desc">Returns the default ACL access level</span>
</a>
<a class="api-item" href="#acladapterabstractadapter-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefaultAction( int $defaultAccess )</code>
<span class="desc">Sets the default access level (Phalcon\Acl\Enum::ALLOW or Phalcon\Acl\Enum::DENY)</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$accessGranted = Enum::DENY` `int`

    Access Granted

-   `protected`{ .vis-protected } `$activeAccess = null` `string|null`

    Active access which the list is checking if some role can access it

-   `protected`{ .vis-protected } `$activeComponent = null` `string|null`

    Component which the list is checking if some role can access it

-   `protected`{ .vis-protected } `$activeRole = null` `string|null`

    Role which the list is checking if it's allowed to certain
    component/access

-   `protected`{ .vis-protected } `$defaultAccess = Enum::DENY` `int`

    Default access

</div>

### Methods

<div class="api-group">Public · 5</div>

#### `getActiveAccess()` { #acladapterabstractadapter-getactiveaccess }

```php
public function getActiveAccess(): string|null;
```

Active access which the list is checking if some role can access it

#### `getActiveComponent()` { #acladapterabstractadapter-getactivecomponent }

```php
public function getActiveComponent(): string|null;
```

Component which the list is checking if some role can access it

#### `getActiveRole()` { #acladapterabstractadapter-getactiverole }

```php
public function getActiveRole(): string|null;
```

Role which the list is checking if it's allowed to certain
component/access

#### `getDefaultAction()` { #acladapterabstractadapter-getdefaultaction }

```php
public function getDefaultAction(): int;
```

Returns the default ACL access level

#### `setDefaultAction()` { #acladapterabstractadapter-setdefaultaction }

```php
public function setDefaultAction( int $defaultAccess ): void;
```

Sets the default access level (Phalcon\Acl\Enum::ALLOW or Phalcon\Acl\Enum::DENY)


## Acl\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Adapter/AdapterInterface.zep){ .src-btn }

Interface for Phalcon\Acl adapters

<div class="api-tree" markdown>

- **`Phalcon\Acl\Adapter\AdapterInterface`**

</div>

__Uses__ `Phalcon\Acl\ComponentInterface` · `Phalcon\Acl\RoleInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#acladapteradapterinterface-addcomponent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addComponent(
    mixed $componentValue,
    mixed $accessList
)</code>
<span class="desc">Adds a component to the ACL list</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-addcomponentaccess">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addComponentAccess(
    string $componentName,
    mixed $accessList
)</code>
<span class="desc">Adds access to components</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-addinherit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addInherit(
    string $roleName,
    mixed $roleToInherits
)</code>
<span class="desc">Do a role inherit from another existing role</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-addrole">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addRole(
    mixed $role,
    mixed $accessInherits = null
)</code>
<span class="desc">Adds a role to the ACL list. Second parameter lets to inherit access data</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-allow">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">allow(
    string $roleName,
    string $componentName,
    mixed $access,
    mixed $func = null
)</code>
<span class="desc">Allow access to a role on a component</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-deny">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">deny(
    string $roleName,
    string $componentName,
    mixed $access,
    mixed $func = null
)</code>
<span class="desc">Deny access to a role on a component</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-dropcomponentaccess">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">dropComponentAccess(
    string $componentName,
    mixed $accessList
)</code>
<span class="desc">Removes access from a component</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-getactiveaccess">
<code class="vis vis-public">public</code>
<code class="ret">null|string</code>
<code class="sig">getActiveAccess()</code>
<span class="desc">Returns the access which the list is checking if some role can access it</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-getactivecomponent">
<code class="vis vis-public">public</code>
<code class="ret">null|string</code>
<code class="sig">getActiveComponent()</code>
<span class="desc">Returns the component which the list is checking if some role can access</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-getactiverole">
<code class="vis vis-public">public</code>
<code class="ret">null|string</code>
<code class="sig">getActiveRole()</code>
<span class="desc">Returns the role which the list is checking if it&#039;s allowed to certain</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-getcomponents">
<code class="vis vis-public">public</code>
<code class="ret">ComponentInterface[]</code>
<code class="sig">getComponents()</code>
<span class="desc">Return an array with every component registered in the list</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-getdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getDefaultAction()</code>
<span class="desc">Returns the default ACL access level</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-getinheritedroles">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getInheritedRoles( string $roleName = &quot;&quot; )</code>
<span class="desc">Returns the inherited roles for a passed role name. If no role name</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-getnoargumentsdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getNoArgumentsDefaultAction()</code>
<span class="desc">Returns the default ACL access level for no arguments provided in</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-getroles">
<code class="vis vis-public">public</code>
<code class="ret">RoleInterface[]</code>
<code class="sig">getRoles()</code>
<span class="desc">Return an array with every role registered in the list</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-isallowed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isAllowed(
    mixed $roleName,
    mixed $componentName,
    string $access,
    array $parameters = null
)</code>
<span class="desc">Check whether a role is allowed to access an action from a component</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-iscomponent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isComponent( string $componentName )</code>
<span class="desc">Check whether component exist in the components list</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-isrole">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isRole( string $roleName )</code>
<span class="desc">Check whether role exist in the roles list</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefaultAction( int $defaultAccess )</code>
<span class="desc">Sets the default access level (Phalcon\Ac\Enuml::ALLOW or Phalcon\Acl\Enum::DENY)</span>
</a>
<a class="api-item" href="#acladapteradapterinterface-setnoargumentsdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setNoArgumentsDefaultAction( int $defaultAccess )</code>
<span class="desc">Sets the default access level (Phalcon\Acl\Enum::ALLOW or Phalcon\Acl\Enum::DENY)</span>
</a>
</div>

### Methods

<div class="api-group">Public · 20</div>

#### `addComponent()` { #acladapteradapterinterface-addcomponent }

```php
public function addComponent(
    mixed $componentValue,
    mixed $accessList
): bool;
```

Adds a component to the ACL list

Access names can be a particular action, by example
search, update, delete, etc. or a list of them

#### `addComponentAccess()` { #acladapteradapterinterface-addcomponentaccess }

```php
public function addComponentAccess(
    string $componentName,
    mixed $accessList
): bool;
```

Adds access to components

#### `addInherit()` { #acladapteradapterinterface-addinherit }

```php
public function addInherit(
    string $roleName,
    mixed $roleToInherits
): bool;
```

Do a role inherit from another existing role

#### `addRole()` { #acladapteradapterinterface-addrole }

```php
public function addRole(
    mixed $role,
    mixed $accessInherits = null
): bool;
```

Adds a role to the ACL list. Second parameter lets to inherit access data
from other existing role

#### `allow()` { #acladapteradapterinterface-allow }

```php
public function allow(
    string $roleName,
    string $componentName,
    mixed $access,
    mixed $func = null
): void;
```

Allow access to a role on a component

#### `deny()` { #acladapteradapterinterface-deny }

```php
public function deny(
    string $roleName,
    string $componentName,
    mixed $access,
    mixed $func = null
): void;
```

Deny access to a role on a component

#### `dropComponentAccess()` { #acladapteradapterinterface-dropcomponentaccess }

```php
public function dropComponentAccess(
    string $componentName,
    mixed $accessList
): void;
```

Removes access from a component

#### `getActiveAccess()` { #acladapteradapterinterface-getactiveaccess }

```php
public function getActiveAccess(): null|string;
```

Returns the access which the list is checking if some role can access it

#### `getActiveComponent()` { #acladapteradapterinterface-getactivecomponent }

```php
public function getActiveComponent(): null|string;
```

Returns the component which the list is checking if some role can access
it

#### `getActiveRole()` { #acladapteradapterinterface-getactiverole }

```php
public function getActiveRole(): null|string;
```

Returns the role which the list is checking if it's allowed to certain
component/access

#### `getComponents()` { #acladapteradapterinterface-getcomponents }

```php
public function getComponents(): ComponentInterface[];
```

Return an array with every component registered in the list

#### `getDefaultAction()` { #acladapteradapterinterface-getdefaultaction }

```php
public function getDefaultAction(): int;
```

Returns the default ACL access level

#### `getInheritedRoles()` { #acladapteradapterinterface-getinheritedroles }

```php
public function getInheritedRoles( string $roleName = "" ): array;
```

Returns the inherited roles for a passed role name. If no role name
has been specified it will return the whole array. If the role has not
been found it returns an empty array

#### `getNoArgumentsDefaultAction()` { #acladapteradapterinterface-getnoargumentsdefaultaction }

```php
public function getNoArgumentsDefaultAction(): int;
```

Returns the default ACL access level for no arguments provided in
isAllowed action if there exists func for accessKey

#### `getRoles()` { #acladapteradapterinterface-getroles }

```php
public function getRoles(): RoleInterface[];
```

Return an array with every role registered in the list

#### `isAllowed()` { #acladapteradapterinterface-isallowed }

```php
public function isAllowed(
    mixed $roleName,
    mixed $componentName,
    string $access,
    array $parameters = null
): bool;
```

Check whether a role is allowed to access an action from a component

#### `isComponent()` { #acladapteradapterinterface-iscomponent }

```php
public function isComponent( string $componentName ): bool;
```

Check whether component exist in the components list

#### `isRole()` { #acladapteradapterinterface-isrole }

```php
public function isRole( string $roleName ): bool;
```

Check whether role exist in the roles list

#### `setDefaultAction()` { #acladapteradapterinterface-setdefaultaction }

```php
public function setDefaultAction( int $defaultAccess ): void;
```

Sets the default access level (Phalcon\Ac\Enuml::ALLOW or Phalcon\Acl\Enum::DENY)

#### `setNoArgumentsDefaultAction()` { #acladapteradapterinterface-setnoargumentsdefaultaction }

```php
public function setNoArgumentsDefaultAction( int $defaultAccess ): void;
```

Sets the default access level (Phalcon\Acl\Enum::ALLOW or Phalcon\Acl\Enum::DENY)
for no arguments provided in isAllowed action if there exists func for
accessKey


## Acl\Adapter\Memory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Adapter/Memory.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Events\AbstractEventsAware`](phalcon_events.md#eventsabstracteventsaware)
    - [`Phalcon\Acl\Adapter\AbstractAdapter`](#acladapterabstractadapter)
        - **`Phalcon\Acl\Adapter\Memory`**

</div>

__Uses__ `Phalcon\Acl\Component` · `Phalcon\Acl\ComponentAwareInterface` · `Phalcon\Acl\ComponentInterface` · `Phalcon\Acl\Enum` · `Phalcon\Acl\Exceptions\AccessRuleNotFound` · `Phalcon\Acl\Exceptions\CircularInheritanceError` · `Phalcon\Acl\Exceptions\ElementNotFound` · `Phalcon\Acl\Exceptions\InvalidAccessList` · `Phalcon\Acl\Exceptions\InvalidComponentImplementation` · `Phalcon\Acl\Exceptions\InvalidRoleImplementation` · `Phalcon\Acl\Exceptions\InvalidRoleType` · `Phalcon\Acl\Exceptions\MissingFunctionParameters` · `Phalcon\Acl\Exceptions\ParameterTypeMismatch` · `Phalcon\Acl\Exceptions\RoleNotFoundException` · `Phalcon\Acl\Role` · `Phalcon\Acl\RoleAwareInterface` · `Phalcon\Acl\RoleInterface` · `ReflectionClass` · `ReflectionFunction` · `ReflectionNamedType`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#acladaptermemory-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
<span class="desc">Phalcon\Acl\Adapter\Memory constructor</span>
</a>
<a class="api-item" href="#acladaptermemory-addcomponent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addComponent(
    mixed $componentValue,
    mixed $accessList
)</code>
<span class="desc">Adds a component to the ACL list</span>
</a>
<a class="api-item" href="#acladaptermemory-addcomponentaccess">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addComponentAccess(
    string $componentName,
    mixed $accessList
)</code>
<span class="desc">Adds access to components</span>
</a>
<a class="api-item" href="#acladaptermemory-addinherit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addInherit(
    string $roleName,
    mixed $roleToInherits
)</code>
<span class="desc">Do a role inherit from another existing role</span>
</a>
<a class="api-item" href="#acladaptermemory-addrole">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addRole(
    mixed $role,
    mixed $accessInherits = null
)</code>
<span class="desc">Adds a role to the ACL list. Second parameter allows inheriting access data from other existing role</span>
</a>
<a class="api-item" href="#acladaptermemory-allow">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">allow(
    string $roleName,
    string $componentName,
    mixed $access,
    mixed $func = null
)</code>
<span class="desc">Allow access to a role on a component. You can use `*` as wildcard</span>
</a>
<a class="api-item" href="#acladaptermemory-deny">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">deny(
    string $roleName,
    string $componentName,
    mixed $access,
    mixed $func = null
)</code>
<span class="desc">Deny access to a role on a component. You can use `*` as wildcard</span>
</a>
<a class="api-item" href="#acladaptermemory-dropcomponentaccess">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">dropComponentAccess(
    string $componentName,
    mixed $accessList
)</code>
<span class="desc">Removes access from a component</span>
</a>
<a class="api-item" href="#acladaptermemory-getactivefunction">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getActiveFunction()</code>
<span class="desc">Returns the latest function used to acquire access</span>
</a>
<a class="api-item" href="#acladaptermemory-getactivefunctioncustomargumentscount">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getActiveFunctionCustomArgumentsCount()</code>
<span class="desc">Returns number of additional arguments(excluding role and resource) for active function</span>
</a>
<a class="api-item" href="#acladaptermemory-getactivekey">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getActiveKey()</code>
<span class="desc">Returns the latest key used to acquire access</span>
</a>
<a class="api-item" href="#acladaptermemory-getcomponents">
<code class="vis vis-public">public</code>
<code class="ret">ComponentInterface[]</code>
<code class="sig">getComponents()</code>
<span class="desc">Return an array with every component registered in the list</span>
</a>
<a class="api-item" href="#acladaptermemory-getinheritedroles">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getInheritedRoles( string $roleName = &quot;&quot; )</code>
<span class="desc">Returns the inherited roles for a passed role name. If no role name</span>
</a>
<a class="api-item" href="#acladaptermemory-getnoargumentsdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getNoArgumentsDefaultAction()</code>
<span class="desc">Returns the default ACL access level for no arguments provided in</span>
</a>
<a class="api-item" href="#acladaptermemory-getroles">
<code class="vis vis-public">public</code>
<code class="ret">RoleInterface[]</code>
<code class="sig">getRoles()</code>
<span class="desc">Return an array with every role registered in the list</span>
</a>
<a class="api-item" href="#acladaptermemory-isallowed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isAllowed(
    mixed $roleName,
    mixed $componentName,
    string $access,
    array $parameters = null
)</code>
<span class="desc">Check whether a role is allowed to access an action from a component</span>
</a>
<a class="api-item" href="#acladaptermemory-iscomponent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isComponent( string $componentName )</code>
<span class="desc">Check whether component exist in the components list</span>
</a>
<a class="api-item" href="#acladaptermemory-isrole">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isRole( string $roleName )</code>
<span class="desc">Check whether role exist in the roles list</span>
</a>
<a class="api-item" href="#acladaptermemory-setnoargumentsdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setNoArgumentsDefaultAction( int $defaultAccess )</code>
<span class="desc">Sets the default access level (`Phalcon\Enum::ALLOW` or `Phalcon\Enum::DENY`)</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$access` `mixed`

    Access

-   `protected`{ .vis-protected } `$accessList` `mixed`

    Access List

-   `protected`{ .vis-protected } `$activeFunction` `mixed`

    Returns the latest function used to acquire access

-   `protected`{ .vis-protected } `$activeFunctionCustomArgumentsCount = 0` `int`

    Returns number of additional arguments(excluding role and resource) for active function

-   `protected`{ .vis-protected } `$activeKey = null` `string|null`

    Returns the latest key used to acquire access

-   `protected`{ .vis-protected } `$components` `mixed`

    Components

-   `protected`{ .vis-protected } `$componentsNames` `mixed`

    Component Names

-   `protected`{ .vis-protected } `$functions` `mixed`

    Function List

-   `protected`{ .vis-protected } `$noArgumentsDefaultAction = Enum::DENY` `mixed`

    Default action for no arguments is `allow`

-   `protected`{ .vis-protected } `$roleInherits` `mixed`

    Role Inherits

-   `protected`{ .vis-protected } `$roles` `mixed`

    Roles

</div>

### Methods

<div class="api-group">Public · 19</div>

#### `__construct()` { #acladaptermemory-__construct }

```php
public function __construct();
```

Phalcon\Acl\Adapter\Memory constructor

#### `addComponent()` { #acladaptermemory-addcomponent }

```php
public function addComponent(
    mixed $componentValue,
    mixed $accessList
): bool;
```

Adds a component to the ACL list

Access names can be a particular action, by example
search, update, delete, etc. or a list of them

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

#### `addComponentAccess()` { #acladaptermemory-addcomponentaccess }

```php
public function addComponentAccess(
    string $componentName,
    mixed $accessList
): bool;
```

Adds access to components

#### `addInherit()` { #acladaptermemory-addinherit }

```php
public function addInherit(
    string $roleName,
    mixed $roleToInherits
): bool;
```

Do a role inherit from another existing role

```php
$acl->addRole("administrator", "consultant");
$acl->addRole("administrator", ["consultant", "consultant2"]);
```

#### `addRole()` { #acladaptermemory-addrole }

```php
public function addRole(
    mixed $role,
    mixed $accessInherits = null
): bool;
```

Adds a role to the ACL list. Second parameter allows inheriting access data from other existing role

```php
$acl->addRole(
    new Phalcon\Acl\Role("administrator"),
    "consultant"
);

$acl->addRole("administrator", "consultant");
$acl->addRole("administrator", ["consultant", "consultant2"]);
```

#### `allow()` { #acladaptermemory-allow }

```php
public function allow(
    string $roleName,
    string $componentName,
    mixed $access,
    mixed $func = null
): void;
```

Allow access to a role on a component. You can use `*` as wildcard

```php
// Allow access to guests to search on customers
$acl->allow("guests", "customers", "search");

// Allow access to guests to search or create on customers
$acl->allow("guests", "customers", ["search", "create"]);

// Allow access to any role to browse on products
$acl->allow("*", "products", "browse");

// Allow access to any role to browse on any component
$acl->allow("*", "*", "browse");
```

#### `deny()` { #acladaptermemory-deny }

```php
public function deny(
    string $roleName,
    string $componentName,
    mixed $access,
    mixed $func = null
): void;
```

Deny access to a role on a component. You can use `*` as wildcard

```php
// Deny access to guests to search on customers
$acl->deny("guests", "customers", "search");

// Deny access to guests to search or create on customers
$acl->deny("guests", "customers", ["search", "create"]);

// Deny access to any role to browse on products
$acl->deny("*", "products", "browse");

// Deny access to any role to browse on any component
$acl->deny("*", "*", "browse");
```

#### `dropComponentAccess()` { #acladaptermemory-dropcomponentaccess }

```php
public function dropComponentAccess(
    string $componentName,
    mixed $accessList
): void;
```

Removes access from a component

#### `getActiveFunction()` { #acladaptermemory-getactivefunction }

```php
public function getActiveFunction(): mixed;
```

Returns the latest function used to acquire access

#### `getActiveFunctionCustomArgumentsCount()` { #acladaptermemory-getactivefunctioncustomargumentscount }

```php
public function getActiveFunctionCustomArgumentsCount(): int;
```

Returns number of additional arguments(excluding role and resource) for active function

#### `getActiveKey()` { #acladaptermemory-getactivekey }

```php
public function getActiveKey(): string|null;
```

Returns the latest key used to acquire access

#### `getComponents()` { #acladaptermemory-getcomponents }

```php
public function getComponents(): ComponentInterface[];
```

Return an array with every component registered in the list

#### `getInheritedRoles()` { #acladaptermemory-getinheritedroles }

```php
public function getInheritedRoles( string $roleName = "" ): array;
```

Returns the inherited roles for a passed role name. If no role name
has been specified it will return the whole array. If the role has not
been found it returns an empty array

#### `getNoArgumentsDefaultAction()` { #acladaptermemory-getnoargumentsdefaultaction }

```php
public function getNoArgumentsDefaultAction(): int;
```

Returns the default ACL access level for no arguments provided in
`isAllowed` action if a `func` (callable) exists for `accessKey`

#### `getRoles()` { #acladaptermemory-getroles }

```php
public function getRoles(): RoleInterface[];
```

Return an array with every role registered in the list

#### `isAllowed()` { #acladaptermemory-isallowed }

```php
public function isAllowed(
    mixed $roleName,
    mixed $componentName,
    string $access,
    array $parameters = null
): bool;
```

Check whether a role is allowed to access an action from a component

```php
// Does andres have access to the customers component to create?
$acl->isAllowed("andres", "Products", "create");

// Do guests have access to any component to edit?
$acl->isAllowed("guests", "*", "edit");
```

#### `isComponent()` { #acladaptermemory-iscomponent }

```php
public function isComponent( string $componentName ): bool;
```

Check whether component exist in the components list

#### `isRole()` { #acladaptermemory-isrole }

```php
public function isRole( string $roleName ): bool;
```

Check whether role exist in the roles list

#### `setNoArgumentsDefaultAction()` { #acladaptermemory-setnoargumentsdefaultaction }

```php
public function setNoArgumentsDefaultAction( int $defaultAccess ): void;
```

Sets the default access level (`Phalcon\Enum::ALLOW` or `Phalcon\Enum::DENY`)
for no arguments provided in isAllowed action if there exists func for
accessKey


## Acl\Component

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Component.zep){ .src-btn }

This class defines component entity and its description

<div class="api-tree" markdown>

- **`Phalcon\Acl\Component`** — implements [`Phalcon\Acl\ComponentInterface`](#aclcomponentinterface)

</div>

__Uses__ `Phalcon\Acl\Exceptions\ForbiddenWildcard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclcomponent-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $description = null
)</code>
<span class="desc">Phalcon\Acl\Component constructor</span>
</a>
<a class="api-item" href="#aclcomponent-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">__toString()</code>
</a>
<a class="api-item" href="#aclcomponent-getdescription">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getDescription()</code>
</a>
<a class="api-item" href="#aclcomponent-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #aclcomponent-__construct }

```php
public function __construct(
    string $name,
    string $description = null
);
```

Phalcon\Acl\Component constructor

#### `__toString()` { #aclcomponent-__tostring }

```php
public function __toString(): string;
```

#### `getDescription()` { #aclcomponent-getdescription }

```php
public function getDescription(): string|null;
```

#### `getName()` { #aclcomponent-getname }

```php
public function getName(): string;
```


## Acl\ComponentAwareInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/ComponentAwareInterface.zep){ .src-btn }

Interface for classes which could be used in allow method as RESOURCE

<div class="api-tree" markdown>

- **`Phalcon\Acl\ComponentAwareInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclcomponentawareinterface-getcomponentname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getComponentName()</code>
<span class="desc">Returns component name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getComponentName()` { #aclcomponentawareinterface-getcomponentname }

```php
public function getComponentName(): string;
```

Returns component name


## Acl\ComponentInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/ComponentInterface.zep){ .src-btn }

Interface for Phalcon\Acl\Component

<div class="api-tree" markdown>

- **`Phalcon\Acl\ComponentInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclcomponentinterface-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">__toString()</code>
<span class="desc">Magic method __toString</span>
</a>
<a class="api-item" href="#aclcomponentinterface-getdescription">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getDescription()</code>
<span class="desc">Returns component description</span>
</a>
<a class="api-item" href="#aclcomponentinterface-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Returns the component name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__toString()` { #aclcomponentinterface-__tostring }

```php
public function __toString(): string;
```

Magic method __toString

#### `getDescription()` { #aclcomponentinterface-getdescription }

```php
public function getDescription(): string|null;
```

Returns component description

#### `getName()` { #aclcomponentinterface-getname }

```php
public function getName(): string;
```

Returns the component name


## Acl\Enum

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Enum.zep){ .src-btn }

Constants for Phalcon\Acl\Adapter adapters

<div class="api-tree" markdown>

- **`Phalcon\Acl\Enum`**

</div>

### Constants

<div class="api-list" markdown>

-   `ALLOW = 1` `int`

-   `DENY = 0` `int`

</div>


## Acl\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exception.zep){ .src-btn }

Class for exceptions thrown by Phalcon\Acl

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Acl\Exception`**
        - [`Phalcon\Acl\Exceptions\AccessRuleNotFound`](#aclexceptionsaccessrulenotfound)
        - [`Phalcon\Acl\Exceptions\CircularInheritanceError`](#aclexceptionscircularinheritanceerror)
        - [`Phalcon\Acl\Exceptions\ElementNotFound`](#aclexceptionselementnotfound)
        - [`Phalcon\Acl\Exceptions\ForbiddenWildcard`](#aclexceptionsforbiddenwildcard)
        - [`Phalcon\Acl\Exceptions\InvalidAccessList`](#aclexceptionsinvalidaccesslist)
        - [`Phalcon\Acl\Exceptions\InvalidComponentImplementation`](#aclexceptionsinvalidcomponentimplementation)
        - [`Phalcon\Acl\Exceptions\InvalidRoleImplementation`](#aclexceptionsinvalidroleimplementation)
        - [`Phalcon\Acl\Exceptions\InvalidRoleType`](#aclexceptionsinvalidroletype)
        - [`Phalcon\Acl\Exceptions\MissingFunctionParameters`](#aclexceptionsmissingfunctionparameters)
        - [`Phalcon\Acl\Exceptions\ParameterTypeMismatch`](#aclexceptionsparametertypemismatch)
        - [`Phalcon\Acl\Exceptions\RoleNotFoundException`](#aclexceptionsrolenotfoundexception)

</div>


## Acl\Exceptions\AccessRuleNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/AccessRuleNotFound.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\AccessRuleNotFound`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclexceptionsaccessrulenotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $accessName,
    string $componentName
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #aclexceptionsaccessrulenotfound-__construct }

```php
public function __construct(
    string $accessName,
    string $componentName
);
```


## Acl\Exceptions\CircularInheritanceError

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/CircularInheritanceError.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\CircularInheritanceError`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclexceptionscircularinheritanceerror-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $roleName )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #aclexceptionscircularinheritanceerror-__construct }

```php
public function __construct( string $roleName );
```


## Acl\Exceptions\ElementNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/ElementNotFound.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\ElementNotFound`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }


## Acl\Exceptions\ForbiddenWildcard

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/ForbiddenWildcard.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\ForbiddenWildcard`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclexceptionsforbiddenwildcard-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $elementType )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #aclexceptionsforbiddenwildcard-__construct }

```php
public function __construct( string $elementType );
```


## Acl\Exceptions\InvalidAccessList

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/InvalidAccessList.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\InvalidAccessList`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclexceptionsinvalidaccesslist-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #aclexceptionsinvalidaccesslist-__construct }

```php
public function __construct();
```


## Acl\Exceptions\InvalidComponentImplementation

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/InvalidComponentImplementation.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\InvalidComponentImplementation`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclexceptionsinvalidcomponentimplementation-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #aclexceptionsinvalidcomponentimplementation-__construct }

```php
public function __construct();
```


## Acl\Exceptions\InvalidRoleImplementation

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/InvalidRoleImplementation.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\InvalidRoleImplementation`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclexceptionsinvalidroleimplementation-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #aclexceptionsinvalidroleimplementation-__construct }

```php
public function __construct();
```


## Acl\Exceptions\InvalidRoleType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/InvalidRoleType.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\InvalidRoleType`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclexceptionsinvalidroletype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #aclexceptionsinvalidroletype-__construct }

```php
public function __construct();
```


## Acl\Exceptions\MissingFunctionParameters

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/MissingFunctionParameters.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\MissingFunctionParameters`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }


## Acl\Exceptions\ParameterTypeMismatch

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/ParameterTypeMismatch.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\ParameterTypeMismatch`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }


## Acl\Exceptions\RoleNotFoundException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exceptions/RoleNotFoundException.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Acl\Exception`](#aclexception)
        - **`Phalcon\Acl\Exceptions\RoleNotFoundException`**

</div>

__Uses__ `Phalcon\Acl\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclexceptionsrolenotfoundexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $roleName )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #aclexceptionsrolenotfoundexception-__construct }

```php
public function __construct( string $roleName );
```


## Acl\Role

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Role.zep){ .src-btn }

This class defines role entity and its description

<div class="api-tree" markdown>

- **`Phalcon\Acl\Role`** — implements [`Phalcon\Acl\RoleInterface`](#aclroleinterface)

</div>

__Uses__ `Phalcon\Acl\Exceptions\ForbiddenWildcard`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclrole-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $description = null
)</code>
<span class="desc">Phalcon\Acl\Role constructor</span>
</a>
<a class="api-item" href="#aclrole-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">__toString()</code>
</a>
<a class="api-item" href="#aclrole-getdescription">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getDescription()</code>
</a>
<a class="api-item" href="#aclrole-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #aclrole-__construct }

```php
public function __construct(
    string $name,
    string $description = null
);
```

Phalcon\Acl\Role constructor

#### `__toString()` { #aclrole-__tostring }

```php
public function __toString(): string;
```

#### `getDescription()` { #aclrole-getdescription }

```php
public function getDescription(): string|null;
```

#### `getName()` { #aclrole-getname }

```php
public function getName(): string;
```


## Acl\RoleAwareInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/RoleAwareInterface.zep){ .src-btn }

Interface for classes which could be used in allow method as ROLE

<div class="api-tree" markdown>

- **`Phalcon\Acl\RoleAwareInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclroleawareinterface-getrolename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getRoleName()</code>
<span class="desc">Returns role name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getRoleName()` { #aclroleawareinterface-getrolename }

```php
public function getRoleName(): string;
```

Returns role name


## Acl\RoleInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/RoleInterface.zep){ .src-btn }

Interface for Phalcon\Acl\Role

<div class="api-tree" markdown>

- **`Phalcon\Acl\RoleInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#aclroleinterface-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">__toString()</code>
<span class="desc">Magic method __toString</span>
</a>
<a class="api-item" href="#aclroleinterface-getdescription">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getDescription()</code>
<span class="desc">Returns role description</span>
</a>
<a class="api-item" href="#aclroleinterface-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Returns the role name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__toString()` { #aclroleinterface-__tostring }

```php
public function __toString(): string;
```

Magic method __toString

#### `getDescription()` { #aclroleinterface-getdescription }

```php
public function getDescription(): string|null;
```

Returns role description

#### `getName()` { #aclroleinterface-getname }

```php
public function getName(): string;
```

Returns the role name
