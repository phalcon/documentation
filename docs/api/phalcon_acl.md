---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Acl\Adapter\AbstractAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Adapter/AbstractAdapter.zep)


-   __Namespace__

    - `Phalcon\Acl\Adapter`

-   __Uses__
    
    - `Phalcon\Acl\Enum`
    - `Phalcon\Events\AbstractEventsAware`
    - `Phalcon\Events\EventsAwareInterface`

-   __Extends__
    
    `AbstractEventsAware`

-   __Implements__
    
    - `AdapterInterface`
    - `EventsAwareInterface`

Adapter for Phalcon\Acl adapters


### Properties
```php
/**
 * Access Granted
 *
 * @var bool
 */
protected $accessGranted = false;

/**
 * Active access which the list is checking if some role can access it
 *
 * @var string|null
 */
protected $activeAccess;

/**
 * Component which the list is checking if some role can access it
 *
 * @var string|null
 */
protected $activeComponent;

/**
 * Role which the list is checking if it's allowed to certain
 * component/access
 *
 * @var string|null
 */
protected $activeRole;

/**
 * Default access
 *
 * @var int
 */
protected $defaultAccess;

```

### Methods

```php
public function getActiveAccess(): string | null;
```
Active access which the list is checking if some role can access it


```php
public function getActiveComponent(): string | null;
```
Component which the list is checking if some role can access it


```php
public function getActiveRole(): string | null;
```
Role which the list is checking if it's allowed to certain
component/access


```php
public function getDefaultAction(): int;
```
Returns the default ACL access level


```php
public function setDefaultAction( int $defaultAccess ): void;
```
Sets the default access level (Phalcon\Acl\Enum::ALLOW or Phalcon\Acl\Enum::DENY)




## Acl\Adapter\AdapterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Adapter/AdapterInterface.zep)


-   __Namespace__

    - `Phalcon\Acl\Adapter`

-   __Uses__
    
    - `Phalcon\Acl\ComponentInterface`
    - `Phalcon\Acl\RoleInterface`

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Acl adapters


### Methods

```php
public function addComponent( mixed $componentValue, mixed $accessList ): bool;
```
Adds a component to the ACL list

Access names can be a particular action, by example
search, update, delete, etc. or a list of them


```php
public function addComponentAccess( string $componentName, mixed $accessList ): bool;
```
Adds access to components


```php
public function addInherit( string $roleName, mixed $roleToInherits ): bool;
```
Do a role inherit from another existing role


```php
public function addRole( mixed $role, mixed $accessInherits = null ): bool;
```
Adds a role to the ACL list. Second parameter lets to inherit access data
from other existing role


```php
public function allow( string $roleName, string $componentName, mixed $access, mixed $func = null ): void;
```
Allow access to a role on a component


```php
public function deny( string $roleName, string $componentName, mixed $access, mixed $func = null ): void;
```
Deny access to a role on a component


```php
public function dropComponentAccess( string $componentName, mixed $accessList ): void;
```
Removes access from a component


```php
public function getActiveAccess(): null | string;
```
Returns the access which the list is checking if some role can access it


```php
public function getActiveComponent(): null | string;
```
Returns the component which the list is checking if some role can access
it


```php
public function getActiveRole(): null | string;
```
Returns the role which the list is checking if it's allowed to certain
component/access


```php
public function getComponents(): ComponentInterface[];
```
Return an array with every component registered in the list


```php
public function getDefaultAction(): int;
```
Returns the default ACL access level


```php
public function getInheritedRoles( string $roleName = string ): array;
```
Returns the inherited roles for a passed role name. If no role name
has been specified it will return the whole array. If the role has not
been found it returns an empty array


```php
public function getNoArgumentsDefaultAction(): int;
```
Returns the default ACL access level for no arguments provided in
isAllowed action if there exists func for accessKey


```php
public function getRoles(): RoleInterface[];
```
Return an array with every role registered in the list


```php
public function isAllowed( mixed $roleName, mixed $componentName, string $access, array $parameters = null ): bool;
```
Check whether a role is allowed to access an action from a component


```php
public function isComponent( string $componentName ): bool;
```
Check whether component exist in the components list


```php
public function isRole( string $roleName ): bool;
```
Check whether role exist in the roles list


```php
public function setDefaultAction( int $defaultAccess ): void;
```
Sets the default access level (Phalcon\Ac\Enuml::ALLOW or Phalcon\Acl\Enum::DENY)


```php
public function setNoArgumentsDefaultAction( int $defaultAccess ): void;
```
Sets the default access level (Phalcon\Acl\Enum::ALLOW or Phalcon\Acl\Enum::DENY)
for no arguments provided in isAllowed action if there exists func for
accessKey




## Acl\Adapter\Memory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Adapter/Memory.zep)


-   __Namespace__

    - `Phalcon\Acl\Adapter`

-   __Uses__
    
    - `Phalcon\Acl\Component`
    - `Phalcon\Acl\ComponentAwareInterface`
    - `Phalcon\Acl\ComponentInterface`
    - `Phalcon\Acl\Enum`
    - `Phalcon\Acl\Exception`
    - `Phalcon\Acl\Role`
    - `Phalcon\Acl\RoleAwareInterface`
    - `Phalcon\Acl\RoleInterface`
    - `ReflectionClass`
    - `ReflectionFunction`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

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


### Properties
```php
/**
 * Access
 *
 * @var mixed
 */
protected $access;

/**
 * Access List
 *
 * @var mixed
 */
protected $accessList;

/**
 * Returns the latest function used to acquire access
 *
 * @var mixed
 */
protected $activeFunction;

/**
 * Returns number of additional arguments(excluding role and resource) for active function
 *
 * @var int
 */
protected $activeFunctionCustomArgumentsCount = ;

/**
 * Returns the latest key used to acquire access
 *
 * @var string|null
 */
protected $activeKey;

/**
 * Components
 *
 * @var mixed
 */
protected $components;

/**
 * Component Names
 *
 * @var mixed
 */
protected $componentsNames;

/**
 * Function List
 *
 * @var mixed
 */
protected $func;

/**
 * Default action for no arguments is `allow`
 *
 * @var mixed
 */
protected $noArgumentsDefaultAction;

/**
 * Roles
 *
 * @var mixed
 */
protected $roles;

/**
 * Role Inherits
 *
 * @var mixed
 */
protected $roleInherits;

```

### Methods

```php
public function __construct();
```
Phalcon\Acl\Adapter\Memory constructor


```php
public function addComponent( mixed $componentValue, mixed $accessList ): bool;
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


```php
public function addComponentAccess( string $componentName, mixed $accessList ): bool;
```
Adds access to components


```php
public function addInherit( string $roleName, mixed $roleToInherits ): bool;
```
Do a role inherit from another existing role

```php
$acl->addRole("administrator", "consultant");
$acl->addRole("administrator", ["consultant", "consultant2"]);
```


```php
public function addRole( mixed $role, mixed $accessInherits = null ): bool;
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


```php
public function allow( string $roleName, string $componentName, mixed $access, mixed $func = null ): void;
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


```php
public function deny( string $roleName, string $componentName, mixed $access, mixed $func = null ): void;
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


```php
public function dropComponentAccess( string $componentName, mixed $accessList ): void;
```
Removes access from a component


```php
public function getActiveFunction(): mixed;
```
Returns the latest function used to acquire access


```php
public function getActiveFunctionCustomArgumentsCount(): int;
```
Returns number of additional arguments(excluding role and resource) for active function


```php
public function getActiveKey(): string | null;
```
Returns the latest key used to acquire access


```php
public function getComponents(): ComponentInterface[];
```
Return an array with every component registered in the list


```php
public function getInheritedRoles( string $roleName = string ): array;
```
Returns the inherited roles for a passed role name. If no role name
has been specified it will return the whole array. If the role has not
been found it returns an empty array


```php
public function getNoArgumentsDefaultAction(): int;
```
Returns the default ACL access level for no arguments provided in
`isAllowed` action if a `func` (callable) exists for `accessKey`


```php
public function getRoles(): RoleInterface[];
```
Return an array with every role registered in the list


```php
public function isAllowed( mixed $roleName, mixed $componentName, string $access, array $parameters = null ): bool;
```
Check whether a role is allowed to access an action from a component

```php
// Does andres have access to the customers component to create?
$acl->isAllowed("andres", "Products", "create");

// Do guests have access to any component to edit?
$acl->isAllowed("guests", "*", "edit");
```


```php
public function isComponent( string $componentName ): bool;
```
Check whether component exist in the components list


```php
public function isRole( string $roleName ): bool;
```
Check whether role exist in the roles list


```php
public function setNoArgumentsDefaultAction( int $defaultAccess ): void;
```
Sets the default access level (`Phalcon\Enum::ALLOW` or `Phalcon\Enum::DENY`)
for no arguments provided in isAllowed action if there exists func for
accessKey




## Acl\Component 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Component.zep)


-   __Namespace__

    - `Phalcon\Acl`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    
    - `ComponentInterface`

This class defines component entity and its description


### Properties
```php
/**
 * Component description
 *
 * @var string
 */
private $description;

/**
 * Component name
 *
 * @var string
 */
private $name;

```

### Methods

```php
public function __construct( string $name, string $description = null );
```
Phalcon\Acl\Component constructor


```php
public function __toString(): string;
```



```php
public function getDescription(): string;
```



```php
public function getName(): string;
```





## Acl\ComponentAwareInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/ComponentAwareInterface.zep)


-   __Namespace__

    - `Phalcon\Acl`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for classes which could be used in allow method as RESOURCE


### Methods

```php
public function getComponentName(): string;
```
Returns component name




## Acl\ComponentInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/ComponentInterface.zep)


-   __Namespace__

    - `Phalcon\Acl`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Acl\Component


### Methods

```php
public function __toString(): string;
```
Magic method __toString


```php
public function getDescription(): string;
```
Returns component description


```php
public function getName(): string;
```
Returns the component name




## Acl\Enum 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Enum.zep)


-   __Namespace__

    - `Phalcon\Acl`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Constants for Phalcon\Acl\Adapter adapters


### Constants
```php
const ALLOW = 1;
const DENY = 0;
```


## Acl\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Exception.zep)


-   __Namespace__

    - `Phalcon\Acl`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Class for exceptions thrown by Phalcon\Acl



## Acl\Role 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/Role.zep)


-   __Namespace__

    - `Phalcon\Acl`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    
    - `RoleInterface`

This class defines role entity and its description


### Properties
```php
/**
 * Role description
 *
 * @var string
 */
private $description;

/**
 * Role name
 *
 * @var string
 */
private $name;

```

### Methods

```php
public function __construct( string $name, string $description = null );
```
Phalcon\Acl\Role constructor


```php
public function __toString(): string;
```



```php
public function getDescription(): string;
```



```php
public function getName(): string;
```





## Acl\RoleAwareInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/RoleAwareInterface.zep)


-   __Namespace__

    - `Phalcon\Acl`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for classes which could be used in allow method as ROLE


### Methods

```php
public function getRoleName(): string;
```
Returns role name




## Acl\RoleInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Acl/RoleInterface.zep)


-   __Namespace__

    - `Phalcon\Acl`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Acl\Role


### Methods

```php
public function __toString(): string;
```
Magic method __toString


```php
public function getDescription(): string;
```
Returns role description


```php
public function getName(): string;
```
Returns the role name


