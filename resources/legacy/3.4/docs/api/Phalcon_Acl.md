---
layout: default
title: 'Phalcon\Acl'
---
# Abstract class **Phalcon\Acl**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Constants
*integer* **ALLOW**

*integer* **DENY**

<hr>

# Abstract class **Phalcon\Acl\Adapter**

*implements* [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl/adapter.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Adapter for Phalcon\Acl adapters


## Methods
public  **getActiveRole** ()

Role which the list is checking if it's allowed to certain resource/access



public  **getActiveResource** ()

Resource which the list is checking if some role can access it



public  **getActiveAccess** ()

Active access which the list is checking if some role can access it



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager)

Sets the events manager



public  **getEventsManager** ()

Returns the internal event manager



public  **setDefaultAction** (*mixed* $defaultAccess)

Sets the default access level (Phalcon\Acl::ALLOW or Phalcon\Acl::DENY)



public  **getDefaultAction** ()

Returns the default ACL access level



abstract public  **setNoArgumentsDefaultAction** (*mixed* $defaultAccess) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **getNoArgumentsDefaultAction** () inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **addRole** (*mixed* $role, [*mixed* $accessInherits]) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **addInherit** (*mixed* $roleName, *mixed* $roleToInherit) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **isRole** (*mixed* $roleName) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **isResource** (*mixed* $resourceName) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **addResource** (*mixed* $resourceObject, *mixed* $accessList) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **addResourceAccess** (*mixed* $resourceName, *mixed* $accessList) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **dropResourceAccess** (*mixed* $resourceName, *mixed* $accessList) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **allow** (*mixed* $roleName, *mixed* $resourceName, *mixed* $access, [*mixed* $func]) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **deny** (*mixed* $roleName, *mixed* $resourceName, *mixed* $access, [*mixed* $func]) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **isAllowed** (*mixed* $roleName, *mixed* $resourceName, *mixed* $access, [*array* $parameters]) inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **getRoles** () inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


abstract public  **getResources** () inherited from [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

...


<hr>


# Class **Phalcon\Acl\Adapter\Memory**

*extends* abstract class [Phalcon\Acl\Adapter](Phalcon_Acl.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Acl\AdapterInterface](Phalcon_Acl.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl/adapter/memory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Manages ACL lists in memory

```php
<?php

$acl = new \Phalcon\Acl\Adapter\Memory();

$acl->setDefaultAction(
    \Phalcon\Acl::DENY
);

// Register roles
$roles = [
    "users"  => new \Phalcon\Acl\Role("Users"),
    "guests" => new \Phalcon\Acl\Role("Guests"),
];
foreach ($roles as $role) {
    $acl->addRole($role);
}

// Private area resources
$privateResources = [
    "companies" => ["index", "search", "new", "edit", "save", "create", "delete"],
    "products"  => ["index", "search", "new", "edit", "save", "create", "delete"],
    "invoices"  => ["index", "profile"],
];

foreach ($privateResources as $resourceName => $actions) {
    $acl->addResource(
        new \Phalcon\Acl\Resource($resourceName),
        $actions
    );
}

// Public area resources
$publicResources = [
    "index"   => ["index"],
    "about"   => ["index"],
    "session" => ["index", "register", "start", "end"],
    "contact" => ["index", "send"],
];

foreach ($publicResources as $resourceName => $actions) {
    $acl->addResource(
        new \Phalcon\Acl\Resource($resourceName),
        $actions
    );
}

// Grant access to public areas to both users and guests
foreach ($roles as $role){
    foreach ($publicResources as $resource => $actions) {
        $acl->allow($role->getName(), $resource, "*");
    }
}

// Grant access to private area to role Users
foreach ($privateResources as $resource => $actions) {
    foreach ($actions as $action) {
        $acl->allow("Users", $resource, $action);
    }
}

```


## Methods
public  **__construct** ()

Phalcon\Acl\Adapter\Memory constructor



public  **addRole** (*RoleInterface* | *string* $role, [*array* | *string* $accessInherits])

Adds a role to the ACL list. Second parameter allows inheriting access data from other existing role
Example:

```php
<?php

$acl->addRole(
    new Phalcon\Acl\Role("administrator"),
    "consultant"
);

$acl->addRole("administrator", "consultant");

```



public  **addInherit** (*mixed* $roleName, *mixed* $roleToInherit)

Do a role inherit from another existing role



public  **isRole** (*mixed* $roleName)

Check whether role exist in the roles list



public  **isResource** (*mixed* $resourceName)

Check whether resource exist in the resources list



public  **addResource** ([Phalcon\Acl\Resource](Phalcon_Acl.md) | *string* $resourceValue, *array* | *string* $accessList)

Adds a resource to the ACL list
Access names can be a particular action, by example
search, update, delete, etc or a list of them
Example:

```php
<?php

// Add a resource to the the list allowing access to an action
$acl->addResource(
    new Phalcon\Acl\Resource("customers"),
    "search"
);

$acl->addResource("customers", "search");

// Add a resource  with an access list
$acl->addResource(
    new Phalcon\Acl\Resource("customers"),
    [
        "create",
        "search",
    ]
);

$acl->addResource(
    "customers",
    [
        "create",
        "search",
    ]
);

```



public  **addResourceAccess** (*mixed* $resourceName, *array* | *string* $accessList)

Adds access to resources



public  **dropResourceAccess** (*mixed* $resourceName, *array* | *string* $accessList)

Removes an access from a resource



protected  **_allowOrDeny** (*mixed* $roleName, *mixed* $resourceName, *mixed* $access, *mixed* $action, [*mixed* $func])

Checks if a role has access to a resource



public  **allow** (*mixed* $roleName, *mixed* $resourceName, *mixed* $access, [*mixed* $func])

Allow access to a role on a resource
You can use '*' as wildcard
Example:

```php
<?php

//Allow access to guests to search on customers
$acl->allow("guests", "customers", "search");

//Allow access to guests to search or create on customers
$acl->allow("guests", "customers", ["search", "create"]);

//Allow access to any role to browse on products
$acl->allow("*", "products", "browse");

//Allow access to any role to browse on any resource
$acl->allow("*", "*", "browse");

```



public  **deny** (*mixed* $roleName, *mixed* $resourceName, *mixed* $access, [*mixed* $func])

Deny access to a role on a resource
You can use '*' as wildcard
Example:

```php
<?php

//Deny access to guests to search on customers
$acl->deny("guests", "customers", "search");

//Deny access to guests to search or create on customers
$acl->deny("guests", "customers", ["search", "create"]);

//Deny access to any role to browse on products
$acl->deny("*", "products", "browse");

//Deny access to any role to browse on any resource
$acl->deny("*", "*", "browse");

```



public  **isAllowed** (*RoleInterface* | *RoleAware* | *string* $roleName, *ResourceInterface* | *ResourceAware* | *string* $resourceName, *mixed* $access, [*array* $parameters])

Check whether a role is allowed to access an action from a resource

```php
<?php

//Does andres have access to the customers resource to create?
$acl->isAllowed("andres", "Products", "create");

//Do guests have access to any resource to edit?
$acl->isAllowed("guests", "*", "edit");

```



public  **setNoArgumentsDefaultAction** (*mixed* $defaultAccess)

Sets the default access level (Phalcon\Acl::ALLOW or Phalcon\Acl::DENY)
for no arguments provided in isAllowed action if there exists func for
accessKey



public  **getNoArgumentsDefaultAction** ()

Returns the default ACL access level for no arguments provided in
isAllowed action if there exists func for accessKey



public  **getRoles** ()

Return an array with every role registered in the list



public  **getResources** ()

Return an array with every resource registered in the list



public  **getActiveRole** () inherited from [Phalcon\Acl\Adapter](Phalcon_Acl.md)

Role which the list is checking if it's allowed to certain resource/access



public  **getActiveResource** () inherited from [Phalcon\Acl\Adapter](Phalcon_Acl.md)

Resource which the list is checking if some role can access it



public  **getActiveAccess** () inherited from [Phalcon\Acl\Adapter](Phalcon_Acl.md)

Active access which the list is checking if some role can access it



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Acl\Adapter](Phalcon_Acl.md)

Sets the events manager



public  **getEventsManager** () inherited from [Phalcon\Acl\Adapter](Phalcon_Acl.md)

Returns the internal event manager



public  **setDefaultAction** (*mixed* $defaultAccess) inherited from [Phalcon\Acl\Adapter](Phalcon_Acl.md)

Sets the default access level (Phalcon\Acl::ALLOW or Phalcon\Acl::DENY)



public  **getDefaultAction** () inherited from [Phalcon\Acl\Adapter](Phalcon_Acl.md)

Returns the default ACL access level



<hr>

# Interface **Phalcon\Acl\AdapterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl/adapterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setDefaultAction** (*mixed* $defaultAccess)

Sets the default access level (Phalcon\Acl::ALLOW or Phalcon\Acl::DENY)


abstract public  **getDefaultAction** ()

Returns the default ACL access level


abstract public  **setNoArgumentsDefaultAction** (*mixed* $defaultAccess)

Sets the default access level (Phalcon\Acl::ALLOW or Phalcon\Acl::DENY) for no arguments provided in isAllowed action if there exists func for accessKey


abstract public  **getNoArgumentsDefaultAction** ()

Returns the default ACL access level for no arguments provided in isAllowed action if there exists func for accessKey


abstract public  **addRole** (*mixed* $role, [*mixed* $accessInherits])

Adds a role to the ACL list. Second parameter lets to inherit access data from other existing role


abstract public  **addInherit** (*mixed* $roleName, *mixed* $roleToInherit)

Do a role inherit from another existing role


abstract public  **isRole** (*mixed* $roleName)

Check whether role exist in the roles list


abstract public  **isResource** (*mixed* $resourceName)

Check whether resource exist in the resources list


abstract public  **addResource** (*mixed* $resourceObject, *mixed* $accessList)

Adds a resource to the ACL list
Access names can be a particular action, by example search, update, delete, etc or a list of them


abstract public  **addResourceAccess** (*mixed* $resourceName, *mixed* $accessList)

Adds access to resources


abstract public  **dropResourceAccess** (*mixed* $resourceName, *mixed* $accessList)

Removes an access from a resource


abstract public  **allow** (*mixed* $roleName, *mixed* $resourceName, *mixed* $access, [*mixed* $func])

Allow access to a role on a resource


abstract public  **deny** (*mixed* $roleName, *mixed* $resourceName, *mixed* $access, [*mixed* $func])

Deny access to a role on a resource


abstract public  **isAllowed** (*mixed* $roleName, *mixed* $resourceName, *mixed* $access, [*array* $parameters])

Check whether a role is allowed to access an action from a resource


abstract public  **getActiveRole** ()

Returns the role which the list is checking if it's allowed to certain resource/access


abstract public  **getActiveResource** ()

Returns the resource which the list is checking if some role can access it


abstract public  **getActiveAccess** ()

Returns the access which the list is checking if some role can access it


abstract public  **getRoles** ()

Return an array with every role registered in the list


abstract public  **getResources** ()

Return an array with every resource registered in the list


<hr>


# Class **Phalcon\Acl\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception



<hr>


# Class **Phalcon\Acl\Resource**

*implements* [Phalcon\Acl\ResourceInterface](Phalcon_Acl.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl/resource.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class defines resource entity and its description


## Methods
public  **getName** ()

Resource name



public  **__toString** ()

Resource name



public  **getDescription** ()

Resource description



public  **__construct** (*mixed* $name, [*mixed* $description])

Phalcon\Acl\Resource constructor


<hr>


# Interface **Phalcon\Acl\ResourceAware**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl/resourceaware.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getResourceName** ()

Returns resource name

<hr>


# Interface **Phalcon\Acl\ResourceInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl/resourceinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getName** ()

Returns the resource name


abstract public  **getDescription** ()

Returns resource description


abstract public  **__toString** ()

Magic method __toString

<hr>


# Class **Phalcon\Acl\Role**

*implements* [Phalcon\Acl\RoleInterface](Phalcon_Acl.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl/role.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class defines role entity and its description


## Methods
public  **getName** ()

Role name



public  **__toString** ()

Role name



public  **getDescription** ()

Role description



public  **__construct** (*mixed* $name, [*mixed* $description])

Phalcon\Acl\Role constructor


<hr>


# Interface **Phalcon\Acl\RoleAware**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl/roleaware.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getRoleName** ()

Returns role name

<hr>


# Interface **Phalcon\Acl\RoleInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/acl/roleinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getName** ()

Returns the role name


abstract public  **getDescription** ()

Returns role description


abstract public  **__toString** ()

Magic method __toString
