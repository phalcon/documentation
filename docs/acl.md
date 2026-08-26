# Access Control Lists (ACL)

- - -

## Overview

The [Phalcon\Acl][acl-acl] component offers a lightweight and straightforward method for managing Access Control Lists (ACLs) and associated permissions. ACLs play a crucial role in regulating access to areas and underlying objects within an application.

In programming, ACLs typically involve two key entities: the object seeking access (Role) and the object being accessed (Component or Resource). For Phalcon, these are called [Roles][acl-role] and [Components][acl-component]. Looking at a practical scenario, [Roles][acl-role] define the groups of users, and [Components][acl-component] represent areas of the application.

!!! info "Use Case"

    An accounting application needs to have different groups of users have access to various areas of the application.

    **Role**

    - Administrator Access

    - Accounting Department Access

    - Manager Access

    - Guest Access
    
    **Component**

    - Login page

    - Admin page

    - Invoices page

    - Reports page

In this example, a [Role][acl-role] indicates who needs access to a specific [Component][acl-component]. A [Component][acl-component] represents an area of the application. Using the [Phalcon\Acl][acl-acl] component, you can establish associations between these [Roles][acl-role] and [Components][acl-component], enhancing the application's security by allowing only specific roles to access designated components.

## Activation

[Phalcon\Acl][acl-acl] uses adapters to manage roles and components. Two adapters are built in: [Phalcon\Acl\Adapter\Memory][acl-adapter-memory] and [Phalcon\Acl\Adapter\Storage](#storage-adapter). The memory adapter is fast but non-persistent, so you should persist the ACL (cache or file) in production to avoid rebuilding it on every request. The [storage adapter](#storage-adapter) does this for you by saving the whole policy to a [Phalcon\Storage][storage] backend.

The [Phalcon\Acl][acl-acl] constructor takes an adapter as its first parameter for retrieving information related to the control list.

```php
<?php

use Phalcon\Acl\Adapter\Memory;

$acl = new Memory();
```

The default action is `Phalcon\Acl\Enum::DENY` for any [Role][acl-role] or [Component][acl-component]. This default setting ensures that only the developer or application explicitly allows access to specific components, not the ACL component itself.

```php
<?php

use Phalcon\Acl\Enum;
use Phalcon\Acl\Adapter\Memory;

$acl = new Memory();

$acl->setDefaultAction(Enum::ALLOW);
```

## Constants

The [Phalcon\Acl\Enum][acl-enum] class provides two constants for defining access levels:

- `Phalcon\Acl\Enum::ALLOW` (`1`)
- `Phalcon\Acl\Enum::DENY` (`0` - default)

These constants help specify access levels within your ACL.

## Adding Roles

[Phalcon\Acl\Roles][acl-role] represent objects that can or cannot access a set of [Components][acl-component] in the ACL. There are two methods for adding roles:

* Using a [Phalcon\Acl\Role][acl-role] object
* Using a string, representing the role name

In the example below, roles related to the outlined use case are added to the ACL:

Using [Phalcon\Acl\Role][acl-role] objects:

```php
<?php

use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Role;

$acl = new Memory();

$roleAdmins     = new Role('admins', 'Administrator Access');
$roleAccounting = new Role('accounting', 'Accounting Department Access'); 

$acl->addRole($roleAdmins);
$acl->addRole($roleAccounting);
```

Using strings:

```php
<?php

use Phalcon\Acl\Adapter\Memory;

$acl = new Memory();

$acl->addRole('manager');
$acl->addRole('guest');
```

## Adding Components

A [Component][acl-component] in the context of Phalcon\Acl represents an area of the application where access is controlled. In an MVC application, this typically corresponds to a Controller. Although not required, you can use the [Phalcon\Acl\Component][acl-component] class to define components in the application. It is important to add related actions to a component so that the ACL understands what it should control.

There are two ways to add components to our list:

* By using a [Phalcon\Acl\Component][acl-component] object.
* Using a string, representing the name of the component.

Similar to the `addRole` method, the addComponent method requires a name for the component and an optional description.

### Component objects:

```php
<?php

use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Component;

$acl = new Memory();

$admin   = new Component('admin', 'Administration Pages');
$reports = new Component('reports', 'Reports Pages');

$acl->addComponent(
    $admin,
    [
        'dashboard',
        'users',
    ]
);

$acl->addComponent(
    $reports,
    [
        'list',
        'add',
    ]
);
```

### Strings:

```php
<?php

use Phalcon\Acl\Adapter\Memory;

$acl = new Memory();

$acl->addComponent(
    'admin',
    [
        'dashboard',
        'users',
    ]
);

$acl->addComponent(
    'reports',
    [
        'list',
        'add',
    ]
);
```

!!! warning "Reserved character"

    Role, component and access names cannot contain the `!` character. It separates the role, component and access parts of the keys that the adapter stores internally, so a name that contains it would make two different rules share one key. `Phalcon\Acl\Exceptions\ForbiddenDelimiter` is thrown for such a name.

## Defining Access Controls

After defining both the `Roles` and `Components`, the next step is to tie them together to create the access list. This is a critical step, as a small mistake here can inadvertently allow access to roles for components that the developer did not intend to. As mentioned earlier, the default access action for [Phalcon\Acl][acl-acl] is `Phalcon\Acl\Enum::DENY`, following the [whitelist][whitelist] approach.

To associate Roles and Components, you use the `allow()` and `deny()` methods provided by the [Phalcon\Acl\Memory][acl-adapter-memory] class.

**Example:**

```php
<?php

use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Role;
use Phalcon\Acl\Component;

$acl = new Memory();

$acl->addRole('manager');
$acl->addRole('accounting');
$acl->addRole('guest');

$acl->addComponent(
    'admin',
    [
        'dashboard',
        'users',
        'view',
    ]
);

$acl->addComponent(
    'reports',
    [
        'list',
        'add',
        'view',
    ]
);

$acl->addComponent(
    'session',
    [
        'login',
        'logout',
    ]
);

$acl->allow('manager', 'admin', 'dashboard');
$acl->allow('manager', 'reports', ['list', 'add']);
$acl->allow('accounting', 'reports', '*');
$acl->allow('*', 'session', '*');
$acl->allow('*', '*', 'view');
$acl->deny('guest', '*', 'view');
```

In the above example:

* `$acl->allow('manager', 'admin', 'dashboard');`: For the `manager` role, allow access to the `admin` component and `dashboard` action. In MVC terms, this allows the `manager` role to access the `admin` controller and `dashboard` action.
* `$acl->allow('manager', 'reports', ['list', 'add']);`: You can pass an array as the `action` parameter when invoking the `allow()` method. This line means that for the `manager` role, allow access to the `reports` component and `list` and `add` actions. In MVC terms, this allows the `manager` role to access the `reports` controller and `list` and `add` actions.
* `$acl->allow('*', 'session', '*');`: Wildcards can be used for mass matching roles, components, or actions. This line allows every role to access every action in the `session` component.
* `$acl->allow('*', '*', 'view');`: This line gives access to the `view` action to every role. In MVC terms, it allows any role to access any controller that exposes a `viewAction`.
* `$acl->deny('guest', '*', 'view');`: For the `guest` role, deny access to all components with the `view` action. Despite the default access level being `Acl\Enum::DENY`, this line specifically denies the `view` action to all roles and components. It ensures that the `guest` role only has access to the `session` component and the `login` and `logout` actions since guests are not logged into the application.
* `$acl->allow('*', '*', 'view');`: This line gives access to the `view` action to every role.
* `$acl->deny('guest', '*', 'view');`: This line excludes the `guest` role from the `view` access:

!!! danger "DANGER"

    Please be **VERY** careful when using the `*` wildcard. It is possible to make a mistake and the wildcard, although it seems convenient, it may allow users to access areas of your application that they are not supposed to. The best way to be 100% sure is to write tests specifically to test the permissions and the ACL. These can be done in the `unit` test suite by instantiating the component and then checking the `isAllowed()` if it is `true` or `false`.
    
    There are plenty of tests in our GitHub repository (`tests` folder) to offer guidance and ideas.

## Querying

Once the list is defined, you can query it to check if a particular role has access to a specific component and action using the isAllowed() method.

**Example:**

```php
<?php

use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Role;
use Phalcon\Acl\Component;

$acl = new Memory();

// (Roles and Components setup...)

// Check permissions
$acl->isAllowed('manager', 'admin', 'dashboard'); // true - explicitly defined
$acl->isAllowed('manager', 'session', 'login');   // true - defined with wildcard
$acl->isAllowed('accounting', 'reports', 'view'); // true - defined with wildcard
$acl->isAllowed('guest', 'reports', 'view');      // false - explicitly defined
$acl->isAllowed('guest', 'reports', 'add');       // false - default access level
```

In the above example, the `isAllowed()` method checks whether a role has permission to access a specific component and action. It returns `true` if access is allowed, and `false` otherwise. This method is valuable for implementing role-based access control in your application.

## Function-Based Access

Depending on the needs of your application, you might require an additional layer of calculations to allow or deny access to users through the ACL. The `isAllowed()` method in Phalcon's ACL accepts a fourth parameter, which is a `callable` such as an anonymous function. To take advantage of this functionality, you need to define your function when calling the `allow()` method for the role and component you need. For example, assume you need to allow access to all `manager` roles to the `admin` component except if their name is 'Bob.' To achieve this, you register an anonymous function that checks this condition.

**Example:**

```php
<?php

use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Role;
use Phalcon\Acl\Component;

$acl = new Memory();

// Add roles
$acl->addRole('manager');

// Add components
$acl->addComponent(
    'admin',
    [
        'dashboard',
        'users',
        'view',
    ]
);

// Set access level for `role` into `components` with a custom function
$acl->allow(
    'manager',
    'admin',
    'dashboard',
    function ($name) {
        return boolval('Bob' !== $name);
    }
);
```

Now that the callable is defined in the ACL, you need to call the `isAllowed()` method with an array as the fourth parameter:

**Example:**

```php
<?php

use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Role;
use Phalcon\Acl\Component;

$acl = new Memory();

// Add roles
$acl->addRole('manager');

// Add components
$acl->addComponent(
    'admin',
    [
        'dashboard',
        'users',
        'view',
    ]
);

// Set access level for `role` into `components` with a custom function
$acl->allow(
    'manager',
    'admin',
    'dashboard',
    function ($name) {
        return boolval('Bob' !== $name);
    }
);

// Returns `true`
$acl->isAllowed(
    'manager',
    'admin',
    'dashboard',
    [
        'name' => 'John',
    ]
);

// Returns `false`
$acl->isAllowed(
    'manager',
    'admin',
    'dashboard',
    [
        'name' => 'Bob',
    ]
);
```

!!! info "NOTE"

    The fourth parameter must be an array. Each array element represents a parameter that your anonymous function accepts. The key of the element is the name of the parameter, while the value is what will be passed as the value of that parameter to the function.

You can also omit to pass the fourth parameter to `isAllowed()` if you wish. The default action for a call to `isAllowed()` without the last parameter is `Acl\Enum::DENY`. To change this behavior, you can make a call to `setNoArgumentsDefaultAction()`:

**Example:**

```php
<?php

use Phalcon\Acl\Enum;
use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Role;
use Phalcon\Acl\Component;

$acl = new Memory();

// Add roles
$acl->addRole('manager');

// Add components
$acl->addComponent(
    'admin',
    [
        'dashboard',
        'users',
        'view',
    ]
);

// Set access level for `role` into `components` with a custom function
$acl->allow(
    'manager',
    'admin',
    'dashboard',
    function ($name) {
        return boolval('Bob' !== $name);
    }
);

// Returns `false`
$acl->isAllowed('manager', 'admin', 'dashboard');

$acl->setNoArgumentsDefaultAction(
    Enum::ALLOW
);

// Returns `true`
$acl->isAllowed('manager', 'admin', 'dashboard');
```

## Custom Objects

Phalcon allows developers to define their own role and component objects. These objects must implement the supplied interfaces:

* [Phalcon\Acl\RoleAwareInterface][acl-roleaware] for Role
* [Phalcon\Acl\ComponentAwareInterface][acl-componentaware] for Component

!!! info

    These two interfaces are deprecated bridges to `Phalcon\Contracts\Acl\RoleAware` and `Phalcon\Contracts\Acl\ComponentAware`. The examples below still work unchanged; new code should implement the contracts. See [Contracts](#contracts).

### Role

You can implement the [Phalcon\Acl\RoleAwareInterface][acl-roleaware] in your custom class with its own logic. The example below shows a new role object called `ManagerRole`:

```php
<?php

use Phalcon\Acl\RoleAwareInterface;

// Create our class, which will be used as roleName
class ManagerRole implements RoleAwareInterface
{
    protected $id;

    protected $roleName;

    public function __construct($id, $roleName)
    {
        $this->id = $id;
        $this->roleName = $roleName;
    }

    public function getId()
    {
        return $this->id;
    }

    // Implemented function from RoleAware Interface
    public function getRoleName()
    {
        return $this->roleName;
    }
}
```

### Component

You can implement the [Phalcon\Acl\ComponentAwareInterface][acl-componentaware] in your custom class with its own logic. The example below shows a new role object called `ReportsComponent`:

```php
<?php

use Phalcon\Acl\ComponentAwareInterface;

// Create our class, which will be used as componentName
class ReportsComponent implements ComponentAwareInterface
{
    protected $id;

    protected $componentName;

    protected $userId;

    public function __construct($id, $componentName, $userId)
    {
        $this->id = $id;
        $this->componentName = $componentName;
        $this->userId = $userId;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getUserId()
    {
        return $this->userId;
    }

    // Implemented function from ComponentAware Interface
    public function getComponentName()
    {
        return $this->componentName;
    }
}
```

### ACL

These objects can now be used in your ACL.

```php
<?php

use ManagerRole;
use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Role;
use Phalcon\Acl\Component;
use ReportsComponent;

$acl = new Memory();

// Add roles
$acl->addRole('manager');

// Add components
$acl->addComponent(
    'reports',
    [
        'list',
        'add',
        'view',
    ]
);

// Now tie them all together with a custom function.
// The `ManagerRole` and `ModelSubject` parameters are necessary
// for the custom function to work
$acl->allow(
    'manager', 
    'reports', 
    'list',
    function (ManagerRole $manager, ReportsComponent $model) {
        return boolval($manager->getId() === $model->getUserId());
    }
);

// Create the custom objects
$levelOne = new ManagerRole(1, 'manager-1');
$levelTwo = new ManagerRole(2, 'manager');
$admin    = new ManagerRole(3, 'manager');

// id - name - userId
$reports  = new ReportsComponent(2, 'reports', 2);

// Check whether our user objects have access. Returns `false`
$acl->isAllowed($levelOne, $reports, 'list');

// Returns `true`
$acl->isAllowed($levelTwo, $reports, 'list');

// Returns `false`
$acl->isAllowed($admin, $reports, 'list');
```

The second call for `$levelTwo` evaluates `true` since the `getUserId()` returns `2` which in turn is evaluated in our custom function. Also, note that in the custom function for `allow()`, the objects are automatically bound, providing all the data necessary for the custom function to work. The custom function can accept any number of additional parameters. The order of the parameters defined in the `function()` constructor does not matter because the objects will be automatically discovered and bound.

## Roles Inheritance

To remove duplication and increase efficiency in your application, the ACL offers inheritance in roles. This means that you can define one [Phalcon\Acl\Role][acl-role] as a base and then inherit from it, offering access to supersets or subsets of components. To use role inheritance, you need to pass the inherited role as the second parameter of the method call when adding that role to the list.

**Example:**

```php
<?php

use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Role;

$acl = new Memory();

// Create roles
$manager    = new Role('Managers');
$accounting = new Role('Accounting Department');
$guest      = new Role('Guests');

// Add the `guest` role to the ACL
$acl->addRole($guest);

// Add the `accounting` role inheriting from `guest`
$acl->addRole($accounting, $guest);

// Add the `manager` role inheriting from `accounting`
$acl->addRole($manager, $accounting);
```

Whatever access `guests` have will be propagated to `accounting`, and in turn, `accounting` will be propagated to `manager`. You can also pass an array of roles as the second parameter of `addRole`, offering more flexibility.

## Roles Relationships

Based on the application design, you might prefer to add all the roles first and then define the relationships between them.

**Example:**

```php
<?php

use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Role;

$acl = new Memory();

// Create roles
$manager    = new Role('Managers');
$accounting = new Role('Accounting Department');
$guest      = new Role('Guests');

// Add all the roles
$acl->addRole($manager);
$acl->addRole($accounting);
$acl->addRole($guest);

// Add the inheritance
$acl->addInherit($manager, $accounting);
$acl->addInherit($accounting, $guest);
```

## Serialization

[Phalcon\Acl][acl-acl] can be serialized and stored in a cache system to improve efficiency. You can store the serialized object in APC, session, the file system, database, Redis, etc. This way, you can retrieve the ACL quickly without having to read the underlying data that creates the ACL, nor will you have to compute the ACL in every request.

**Example:**

```php
<?php

use Phalcon\Acl\Adapter\Memory;

$aclFile = 'app/security/acl.cache';

// Check whether ACL data already exist
if (!is_file($aclFile)) {
    // The ACL does not exist - build it
    $acl = new Memory();

    // Define roles, components, access, etc.
    // ...

    // Store serialized list into a plain file
    file_put_contents(
        $aclFile,
        serialize($acl)
    );
} else {
    // Restore the ACL object from the serialized file
    $acl = unserialize(
        file_get_contents($aclFile)
    );
}

// Use the ACL list as needed
if ($acl->isAllowed('manager', 'admin', 'dashboard')) {
    echo 'Access granted!';
} else {
    echo 'Access denied :(';
}
```

It is a good practice to not serialize the ACL during development to ensure that your ACL is rebuilt with every request, while other adapters or means of serializing and storing the ACL in production.

## Storage Adapter

`Phalcon\Acl\Adapter\Storage` extends the memory adapter and persists the whole policy to any [Phalcon\Storage][storage] backend - Redis, Apcu, Stream or Memcached. It replaces the manual `serialize()`/`unserialize()` step shown above: the policy is saved as a single snapshot and reloaded automatically when the adapter is constructed.

The constructor takes a storage adapter and an optional cache key (default `acl-data`). All access checks still run in memory, exactly as they do with the memory adapter; the backend is only a snapshot store.

```php
<?php

use Phalcon\Acl\Adapter\Storage;
use Phalcon\Storage\Adapter\Stream;
use Phalcon\Storage\SerializerFactory;

$backend = new Stream(
    new SerializerFactory(),
    [
        'storageDir' => '/app/storage/acl',
    ]
);

// Loads an existing snapshot from the backend if one is present
$acl = new Storage($backend, 'acl-data');

// Build the policy once
$acl->addRole('manager');
$acl->addComponent('reports', ['list', 'add', 'view']);
$acl->allow('manager', 'reports', 'list');

// Persist the snapshot to the backend
$acl->save();
```

On a later request, constructing the adapter against the same backend restores the policy without rebuilding it:

```php
<?php

use Phalcon\Acl\Adapter\Storage;
use Phalcon\Storage\Adapter\Stream;
use Phalcon\Storage\SerializerFactory;

$backend = new Stream(
    new SerializerFactory(),
    [
        'storageDir' => '/app/storage/acl',
    ]
);

// The constructor calls load(), repopulating roles, components and access
$acl = new Storage($backend, 'acl-data');

// Returns `true` from the restored snapshot
$acl->isAllowed('manager', 'reports', 'list');
```

The adapter implements the `Phalcon\Contracts\Acl\Adapter\Persistable` contract, which declares `save(): bool` and `load(): bool`. `save()` writes the current policy; `load()` replaces the in-memory policy with the stored snapshot and returns `false` when the backend holds no snapshot, leaving an empty policy.

!!! warning "Callable rules are not persisted"

    Function-based rules registered through the closure form of `allow()` and `deny()` are not part of the snapshot, because closures cannot be serialized. The static rule set and role inheritance are saved in full, but any closure rules must be re-registered in code after the adapter loads. See [Function-Based Access](#function-based-access).

## Events

[Phalcon\Acl][acl-acl] can work in conjunction with the [Events Manager][events] if present, to fire events to your application. Events are triggered using the type `acl`. Events that return `false` can stop the active role. The following events are available:

| Event Name          | Triggered                                                | Can stop role? |
|---------------------|----------------------------------------------------------|:--------------:|
| `afterCheckAccess`  | Triggered after checking if a role/component has access  |       No       |
| `beforeCheckAccess` | Triggered before checking if a role/component has access |      Yes       |

**Example:**

```php
<?php

use Phalcon\Acl\Adapter\Memory;
use Phalcon\Events\Event;
use Phalcon\Events\Manager;

// ...

// Create an event manager
$eventsManager = new Manager();

// Attach a listener for type `acl`
$eventsManager->attach(
    'acl:beforeCheckAccess',
    function (Event $event, $acl) {
        echo $acl->getActiveRole() . PHP_EOL;

        echo $acl->getActiveComponent() . PHP_EOL;

        echo $acl->getActiveAccess() . PHP_EOL;
    }
);

$acl = new Memory();

// Setup the `$acl`
// ...

// Bind the eventsManager to the ACL component
$acl->setEventsManager($eventsManager);
```

## Custom

Implement the `Phalcon\Contracts\Acl\Adapter\Adapter` contract to create your own ACL adapter or extend an existing one. The legacy [Phalcon\Acl\Adapter\AdapterInterface][acl-adapter-adapterinterface] interface still works - it now extends that contract - but it is deprecated. See [Contracts](#contracts).

## Contracts

The ACL interfaces now live in the `Phalcon\Contracts\Acl` namespace, which is their canonical home. The new `Phalcon\Contracts\Acl\Adapter\Persistable` contract used by the [storage adapter](#storage-adapter) is defined there as well.

The legacy interfaces remain as deprecated bridges that extend the new contracts, so existing type hints and `instanceof` checks keep working without any change. New code should use the replacements below.

| Deprecated interface                   | Replacement contract                    |
|----------------------------------------|-----------------------------------------|
| `Phalcon\Acl\Adapter\AdapterInterface` | `Phalcon\Contracts\Acl\Adapter\Adapter` |
| `Phalcon\Acl\RoleInterface`            | `Phalcon\Contracts\Acl\Role`            |
| `Phalcon\Acl\ComponentInterface`       | `Phalcon\Contracts\Acl\Component`       |
| `Phalcon\Acl\RoleAwareInterface`       | `Phalcon\Contracts\Acl\RoleAware`       |
| `Phalcon\Acl\ComponentAwareInterface`  | `Phalcon\Contracts\Acl\ComponentAware`  |

`Phalcon\Acl\Adapter\Memory::getActiveKey()` is also deprecated. Use `getActiveRole()`, `getActiveComponent()` and `getActiveAccess()` to read the role, component and access currently being checked.

## Exceptions

Any exceptions thrown in the [Phalcon\Acl][acl-acl] namespace will be of type [Phalcon\Acl\Exception][acl-exception]. You can use this exception to selectively catch exceptions thrown only from this component.

**Example:**

```php
<?php

use Phalcon\Acl\Adapter\Memory;
use Phalcon\Acl\Component;
use Phalcon\Acl\Exception;

try {
    $acl   = new Memory();
    $admin = new Component('*');
} catch (Exception $ex) {
    echo $ex->getMessage();
}
```

### Granular Exceptions

The component raises granular subclasses of `Phalcon\Acl\Exception` so callers can catch a specific failure mode. Legacy `catch (Phalcon\Acl\Exception $e)` still works because every subclass extends the umbrella type.

| Class                                                   | Parent                  | Thrown when                                                          |
|---------------------------------------------------------|-------------------------|----------------------------------------------------------------------|
| `Phalcon\Acl\Exceptions\AccessRuleNotFound`             | `Phalcon\Acl\Exception` | An access entry cannot be located while resolving permissions.       |
| `Phalcon\Acl\Exceptions\CircularInheritanceError`       | `Phalcon\Acl\Exception` | A role inherits from itself directly or transitively.                |
| `Phalcon\Acl\Exceptions\ElementNotFound`                | `Phalcon\Acl\Exception` | A referenced role or component is missing from the ACL.              |
| `Phalcon\Acl\Exceptions\ForbiddenWildcard`              | `Phalcon\Acl\Exception` | A role or component is named `*` (the wildcard is reserved).         |
| `Phalcon\Acl\Exceptions\InvalidAccessList`              | `Phalcon\Acl\Exception` | The supplied access list value is not an array or string.            |
| `Phalcon\Acl\Exceptions\InvalidComponentImplementation` | `Phalcon\Acl\Exception` | A component-aware object does not implement the expected interface.  |
| `Phalcon\Acl\Exceptions\InvalidRoleImplementation`      | `Phalcon\Acl\Exception` | A role-aware object does not implement the expected interface.       |
| `Phalcon\Acl\Exceptions\InvalidRoleType`                | `Phalcon\Acl\Exception` | A role argument is not a string and not a `RoleInterface`.           |
| `Phalcon\Acl\Exceptions\MissingFunctionParameters`      | `Phalcon\Acl\Exception` | A function-based rule is called with fewer parameters than declared. |
| `Phalcon\Acl\Exceptions\ParameterTypeMismatch`          | `Phalcon\Acl\Exception` | A function-based rule receives a parameter of the wrong type.        |
| `Phalcon\Acl\Exceptions\RoleNotFoundException`          | `Phalcon\Acl\Exception` | A role referenced by inheritance does not exist.                     |

[acl]: https://en.wikipedia.org/wiki/Access_control_list
[acl-acl]: api/phalcon_acl.md
[acl-adapter-abstractadapter]: api/phalcon_acl.md#acladapterabstractadapter
[acl-adapter-adapterinterface]: api/phalcon_acl.md#acladapteradapterinterface
[acl-adapter-memory]: api/phalcon_acl.md#acladaptermemory
[acl-component]: api/phalcon_acl.md#aclcomponent
[acl-componentaware]: api/phalcon_acl.md#aclcomponentawareinterface
[acl-componentinterface]: api/phalcon_acl.md#aclcomponentinterface
[acl-enum]: api/phalcon_acl.md#aclenum
[acl-exception]: api/phalcon_acl.md#aclexception
[acl-role]: api/phalcon_acl.md#aclrole
[acl-roleaware]: api/phalcon_acl.md#aclroleawareinterface
[acl-roleinterface]: api/phalcon_acl.md#aclroleawareinterface
[codeception]: https://codeception.com
[events]: events.md
[storage]: storage.md
[whitelist]: https://en.wikipedia.org/wiki/Whitelisting
