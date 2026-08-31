---
layout: default
title: 'Phalcon\Di'
---
# Class **Phalcon\Di**

*implements* [Phalcon\DiInterface](Phalcon_Di.md), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/di.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Phalcon\Di is a component that implements Dependency Injection/Service Location
of services and it's itself a container for them.

Since Phalcon is highly decoupled, Phalcon\Di is essential to integrate the different
components of the framework. The developer can also use this component to inject dependencies
and manage global instances of the different classes used in the application.

Basically, this component implements the `Inversion of Control` pattern. Applying this,
the objects do not receive their dependencies using setters or constructors, but requesting
a service dependency injector. This reduces the overall complexity, since there is only one
way to get the required dependencies within a component.

Additionally, this pattern increases testability in the code, thus making it less prone to errors.

```php
<?php

use Phalcon\Di;
use Phalcon\Http\Request;

$di = new Di();

// Using a string definition
$di->set("request", Request::class, true);

// Using an anonymous function
$di->setShared(
    "request",
    function () {
        return new Request();
    }
);

$request = $di->getRequest();

```


## Methods
public  **__construct** ()

Phalcon\Di constructor



public  **setInternalEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager)

Sets the internal event manager



public  **getInternalEventsManager** ()

Returns the internal event manager



public  **set** (*mixed* $name, *mixed* $definition, [*mixed* $shared])

Registers a service in the services container



public  **setShared** (*mixed* $name, *mixed* $definition)

Registers an "always shared" service in the services container



public  **remove** (*mixed* $name)

Removes a service in the services container
It also removes any shared instance created for the service



public  **attempt** (*mixed* $name, *mixed* $definition, [*mixed* $shared])

Attempts to register a service in the services container
Only is successful if a service hasn't been registered previously
with the same name



public  **setRaw** (*mixed* $name, [Phalcon\Di\ServiceInterface](Phalcon_Di.md) $rawDefinition)

Sets a service using a raw Phalcon\Di\Service definition



public  **getRaw** (*mixed* $name)

Returns a service definition without resolving



public  **getService** (*mixed* $name)

Returns a Phalcon\Di\Service instance



public  **get** (*mixed* $name, [*mixed* $parameters])

Resolves the service based on its configuration



public *mixed* **getShared** (*string* $name, [*array* $parameters])

Resolves a service, the resolved service is stored in the DI, subsequent
requests for this service will return the same instance



public  **has** (*mixed* $name)

Check whether the DI contains a service by a name



public  **wasFreshInstance** ()

Check whether the last service obtained via getShared produced a fresh instance or an existing one



public  **getServices** ()

Return the services registered in the DI



public  **offsetExists** (*mixed* $name)

Check if a service is registered using the array syntax



public  **offsetSet** (*mixed* $name, *mixed* $definition)

Allows to register a shared service using the array syntax

```php
<?php

$di["request"] = new \Phalcon\Http\Request();

```



public  **offsetGet** (*mixed* $name)

Allows to obtain a shared service using the array syntax

```php
<?php

var_dump($di["request"]);

```



public  **offsetUnset** (*mixed* $name)

Removes a service from the services container using the array syntax



public  **__call** (*mixed* $method, [*mixed* $arguments])

Magic method to get or set services using setters/getters



public  **register** ([Phalcon\Di\ServiceProviderInterface](Phalcon_Di.md) $provider)

Registers a service provider.

```php
<?php

use Phalcon\DiInterface;
use Phalcon\Di\ServiceProviderInterface;

class SomeServiceProvider implements ServiceProviderInterface
{
    public function register(DiInterface $di)
    {
        $di->setShared('service', function () {
            // ...
        });
    }
}

```



public static  **setDefault** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Set a default dependency injection container to be obtained into static methods



public static  **getDefault** ()

Return the latest DI created



public static  **reset** ()

Resets the internal default DI



public  **loadFromYaml** (*mixed* $filePath, [*array* $callbacks])

Loads services from a yaml file.

```php
<?php

$di->loadFromYaml(
    "path/services.yaml",
    [
        "!approot" => function ($value) {
            return dirname(__DIR__) . $value;
        }
    ]
);

```
And the services can be specified in the file as:

```php
<?php

myComponent:
    className: \Acme\Components\MyComponent
    shared: true

group:
    className: \Acme\Group
    arguments:
        - type: service
          name: myComponent

user:
   className: \Acme\User

```



public  **loadFromPhp** (*mixed* $filePath)

Loads services from a php config file.

```php
<?php

$di->loadFromPhp("path/services.php");

```
And the services can be specified in the file as:

```php
<?php

return [
     'myComponent' => [
         'className' => '\Acme\Components\MyComponent',
         'shared' => true,
     ],
     'group' => [
         'className' => '\Acme\Group',
         'arguments' => [
             [
                 'type' => 'service',
                 'service' => 'myComponent',
             ],
         ],
     ],
     'user' => [
         'className' => '\Acme\User',
     ],
];

```



protected  **loadFromConfig** ([Phalcon\Config](Phalcon_Config.md) $config)

Loads services from a Config object.




<hr>

# Class **Phalcon\Di\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/di/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Di\FactoryDefault**

*extends* class [Phalcon\Di](Phalcon_Di.md)

*implements* [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php), [Phalcon\DiInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/di/factorydefault.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This is a variant of the standard Phalcon\Di. By default it automatically
registers all the services provided by the framework. Thanks to this, the developer does not need
to register each service individually providing a full stack framework


## Methods
public  **__construct** ()

Phalcon\Di\FactoryDefault constructor



public  **setInternalEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Di](Phalcon_Di.md)

Sets the internal event manager



public  **getInternalEventsManager** () inherited from [Phalcon\Di](Phalcon_Di.md)

Returns the internal event manager



public  **set** (*mixed* $name, *mixed* $definition, [*mixed* $shared]) inherited from [Phalcon\Di](Phalcon_Di.md)

Registers a service in the services container



public  **setShared** (*mixed* $name, *mixed* $definition) inherited from [Phalcon\Di](Phalcon_Di.md)

Registers an "always shared" service in the services container



public  **remove** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Removes a service in the services container
It also removes any shared instance created for the service



public  **attempt** (*mixed* $name, *mixed* $definition, [*mixed* $shared]) inherited from [Phalcon\Di](Phalcon_Di.md)

Attempts to register a service in the services container
Only is successful if a service hasn't been registered previously
with the same name



public  **setRaw** (*mixed* $name, [Phalcon\Di\ServiceInterface](Phalcon_Di.md) $rawDefinition) inherited from [Phalcon\Di](Phalcon_Di.md)

Sets a service using a raw Phalcon\Di\Service definition



public  **getRaw** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Returns a service definition without resolving



public  **getService** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Returns a Phalcon\Di\Service instance



public  **get** (*mixed* $name, [*mixed* $parameters]) inherited from [Phalcon\Di](Phalcon_Di.md)

Resolves the service based on its configuration



public *mixed* **getShared** (*string* $name, [*array* $parameters]) inherited from [Phalcon\Di](Phalcon_Di.md)

Resolves a service, the resolved service is stored in the DI, subsequent
requests for this service will return the same instance



public  **has** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Check whether the DI contains a service by a name



public  **wasFreshInstance** () inherited from [Phalcon\Di](Phalcon_Di.md)

Check whether the last service obtained via getShared produced a fresh instance or an existing one



public  **getServices** () inherited from [Phalcon\Di](Phalcon_Di.md)

Return the services registered in the DI



public  **offsetExists** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Check if a service is registered using the array syntax



public  **offsetSet** (*mixed* $name, *mixed* $definition) inherited from [Phalcon\Di](Phalcon_Di.md)

Allows to register a shared service using the array syntax

```php
<?php

$di["request"] = new \Phalcon\Http\Request();

```



public  **offsetGet** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Allows to obtain a shared service using the array syntax

```php
<?php

var_dump($di["request"]);

```



public  **offsetUnset** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Removes a service from the services container using the array syntax



public  **__call** (*mixed* $method, [*mixed* $arguments]) inherited from [Phalcon\Di](Phalcon_Di.md)

Magic method to get or set services using setters/getters



public  **register** ([Phalcon\Di\ServiceProviderInterface](Phalcon_Di.md) $provider) inherited from [Phalcon\Di](Phalcon_Di.md)

Registers a service provider.

```php
<?php

use Phalcon\DiInterface;
use Phalcon\Di\ServiceProviderInterface;

class SomeServiceProvider implements ServiceProviderInterface
{
    public function register(DiInterface $di)
    {
        $di->setShared('service', function () {
            // ...
        });
    }
}

```



public static  **setDefault** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di](Phalcon_Di.md)

Set a default dependency injection container to be obtained into static methods



public static  **getDefault** () inherited from [Phalcon\Di](Phalcon_Di.md)

Return the latest DI created



public static  **reset** () inherited from [Phalcon\Di](Phalcon_Di.md)

Resets the internal default DI



public  **loadFromYaml** (*mixed* $filePath, [*array* $callbacks]) inherited from [Phalcon\Di](Phalcon_Di.md)

Loads services from a yaml file.

```php
<?php

$di->loadFromYaml(
    "path/services.yaml",
    [
        "!approot" => function ($value) {
            return dirname(__DIR__) . $value;
        }
    ]
);

```
And the services can be specified in the file as:

```php
<?php

myComponent:
    className: \Acme\Components\MyComponent
    shared: true

group:
    className: \Acme\Group
    arguments:
        - type: service
          name: myComponent

user:
   className: \Acme\User

```



public  **loadFromPhp** (*mixed* $filePath) inherited from [Phalcon\Di](Phalcon_Di.md)

Loads services from a php config file.

```php
<?php

$di->loadFromPhp("path/services.php");

```
And the services can be specified in the file as:

```php
<?php

return [
     'myComponent' => [
         'className' => '\Acme\Components\MyComponent',
         'shared' => true,
     ],
     'group' => [
         'className' => '\Acme\Group',
         'arguments' => [
             [
                 'type' => 'service',
                 'service' => 'myComponent',
             ],
         ],
     ],
     'user' => [
         'className' => '\Acme\User',
     ],
];

```



protected  **loadFromConfig** ([Phalcon\Config](Phalcon_Config.md) $config) inherited from [Phalcon\Di](Phalcon_Di.md)

Loads services from a Config object.




<hr>

# Class **Phalcon\Di\FactoryDefault\Cli**

*extends* class [Phalcon\Di\FactoryDefault](Phalcon_Di.md)

*implements* [Phalcon\DiInterface](Phalcon_Di.md), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/di/factorydefault/cli.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This is a variant of the standard Phalcon\Di. By default it automatically
registers all the services provided by the framework.
Thanks to this, the developer does not need to register each service individually.
This class is specially suitable for CLI applications


## Methods
public  **__construct** ()

Phalcon\Di\FactoryDefault\Cli constructor



public  **setInternalEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Di](Phalcon_Di.md)

Sets the internal event manager



public  **getInternalEventsManager** () inherited from [Phalcon\Di](Phalcon_Di.md)

Returns the internal event manager



public  **set** (*mixed* $name, *mixed* $definition, [*mixed* $shared]) inherited from [Phalcon\Di](Phalcon_Di.md)

Registers a service in the services container



public  **setShared** (*mixed* $name, *mixed* $definition) inherited from [Phalcon\Di](Phalcon_Di.md)

Registers an "always shared" service in the services container



public  **remove** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Removes a service in the services container
It also removes any shared instance created for the service



public  **attempt** (*mixed* $name, *mixed* $definition, [*mixed* $shared]) inherited from [Phalcon\Di](Phalcon_Di.md)

Attempts to register a service in the services container
Only is successful if a service hasn't been registered previously
with the same name



public  **setRaw** (*mixed* $name, [Phalcon\Di\ServiceInterface](Phalcon_Di.md) $rawDefinition) inherited from [Phalcon\Di](Phalcon_Di.md)

Sets a service using a raw Phalcon\Di\Service definition



public  **getRaw** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Returns a service definition without resolving



public  **getService** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Returns a Phalcon\Di\Service instance



public  **get** (*mixed* $name, [*mixed* $parameters]) inherited from [Phalcon\Di](Phalcon_Di.md)

Resolves the service based on its configuration



public *mixed* **getShared** (*string* $name, [*array* $parameters]) inherited from [Phalcon\Di](Phalcon_Di.md)

Resolves a service, the resolved service is stored in the DI, subsequent
requests for this service will return the same instance



public  **has** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Check whether the DI contains a service by a name



public  **wasFreshInstance** () inherited from [Phalcon\Di](Phalcon_Di.md)

Check whether the last service obtained via getShared produced a fresh instance or an existing one



public  **getServices** () inherited from [Phalcon\Di](Phalcon_Di.md)

Return the services registered in the DI



public  **offsetExists** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Check if a service is registered using the array syntax



public  **offsetSet** (*mixed* $name, *mixed* $definition) inherited from [Phalcon\Di](Phalcon_Di.md)

Allows to register a shared service using the array syntax

```php
<?php

$di["request"] = new \Phalcon\Http\Request();

```



public  **offsetGet** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Allows to obtain a shared service using the array syntax

```php
<?php

var_dump($di["request"]);

```



public  **offsetUnset** (*mixed* $name) inherited from [Phalcon\Di](Phalcon_Di.md)

Removes a service from the services container using the array syntax



public  **__call** (*mixed* $method, [*mixed* $arguments]) inherited from [Phalcon\Di](Phalcon_Di.md)

Magic method to get or set services using setters/getters



public  **register** ([Phalcon\Di\ServiceProviderInterface](Phalcon_Di.md) $provider) inherited from [Phalcon\Di](Phalcon_Di.md)

Registers a service provider.

```php
<?php

use Phalcon\DiInterface;
use Phalcon\Di\ServiceProviderInterface;

class SomeServiceProvider implements ServiceProviderInterface
{
    public function register(DiInterface $di)
    {
        $di->setShared('service', function () {
            // ...
        });
    }
}

```



public static  **setDefault** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di](Phalcon_Di.md)

Set a default dependency injection container to be obtained into static methods



public static  **getDefault** () inherited from [Phalcon\Di](Phalcon_Di.md)

Return the latest DI created



public static  **reset** () inherited from [Phalcon\Di](Phalcon_Di.md)

Resets the internal default DI



public  **loadFromYaml** (*mixed* $filePath, [*array* $callbacks]) inherited from [Phalcon\Di](Phalcon_Di.md)

Loads services from a yaml file.

```php
<?php

$di->loadFromYaml(
    "path/services.yaml",
    [
        "!approot" => function ($value) {
            return dirname(__DIR__) . $value;
        }
    ]
);

```
And the services can be specified in the file as:

```php
<?php

myComponent:
    className: \Acme\Components\MyComponent
    shared: true

group:
    className: \Acme\Group
    arguments:
        - type: service
          name: myComponent

user:
   className: \Acme\User

```



public  **loadFromPhp** (*mixed* $filePath) inherited from [Phalcon\Di](Phalcon_Di.md)

Loads services from a php config file.

```php
<?php

$di->loadFromPhp("path/services.php");

```
And the services can be specified in the file as:

```php
<?php

return [
     'myComponent' => [
         'className' => '\Acme\Components\MyComponent',
         'shared' => true,
     ],
     'group' => [
         'className' => '\Acme\Group',
         'arguments' => [
             [
                 'type' => 'service',
                 'service' => 'myComponent',
             ],
         ],
     ],
     'user' => [
         'className' => '\Acme\User',
     ],
];

```



protected  **loadFromConfig** ([Phalcon\Config](Phalcon_Config.md) $config) inherited from [Phalcon\Di](Phalcon_Di.md)

Loads services from a Config object.




<hr>

# Abstract class **Phalcon\Di\Injectable**

*implements* [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/di/injectable.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class allows to access services in the services container by just only accessing a public property
with the same name of a registered service


## Methods
public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injector



public  **getDI** ()

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager)

Sets the event manager



public  **getEventsManager** ()

Returns the internal event manager



public  **__get** (*string* $propertyName)

Magic method __get to easily get access to services through the name of them



<hr>

# Interface **Phalcon\Di\InjectionAwareInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/di/injectionawareinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

...


abstract public  **getDI** ()

...



<hr>

# Class **Phalcon\Di\Service**

*implements* [Phalcon\Di\ServiceInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/di/service.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents individually a service in the services container

```php
<?php

$service = new \Phalcon\Di\Service(
    "request",
    "Phalcon\Http\Request"
);

$request = service->resolve();
```

## Methods
final public  **__construct** (*string* $name, *mixed* $definition, [*boolean* $shared])





public  **getName** ()

Returns the service's name



public  **setShared** (*mixed* $shared)

Sets if the service is shared or not



public  **isShared** ()

Check whether the service is shared or not



public  **setSharedInstance** (*mixed* $sharedInstance)

Sets/Resets the shared instance related to the service



public  **setDefinition** (*mixed* $definition)

Set the service definition



public *mixed* **getDefinition** ()

Returns the service definition



public *mixed* **resolve** ([*array* $parameters], [[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector])

Resolves the service



public  **setParameter** (*mixed* $position, *array* $parameter)

Changes a parameter in the definition without resolve the service



public *array* **getParameter** (*int* $position)

Returns a parameter in a specific position



public  **isResolved** ()

Returns true if the service was resolved



public static  **__set_state** (*array* $attributes)

Restore the internal state of a service




<hr>

# Class **Phalcon\Di\Service\Builder**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/di/service/builder.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class builds instances based on complex definitions


## Methods
private *mixed* **_buildParameter** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector, *int* $position, *array* $argument)

Resolves a constructor/call parameter



private  **_buildParameters** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector, *array* $arguments)

Resolves an array of parameters



public *mixed* **build** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector, *array* $definition, [*array* $parameters])

Builds a service using a complex service definition




<hr>

# Interface **Phalcon\Di\ServiceInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/di/serviceinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getName** ()

...


abstract public  **setShared** (*mixed* $shared)

...


abstract public  **isShared** ()

...


abstract public  **setDefinition** (*mixed* $definition)

...


abstract public  **getDefinition** ()

...


abstract public  **resolve** ([*mixed* $parameters], [[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector])

...


abstract public  **setParameter** (*mixed* $position, *array* $parameter)

...


abstract public static  **__set_state** (*array* $attributes)

...



<hr>

# Interface **Phalcon\Di\ServiceProviderInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/di/serviceproviderinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **register** ([Phalcon\DiInterface](Phalcon_Di.md) $di)

...



<hr>

# Interface **Phalcon\DiInterface**

*implements* [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/diinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **set** (*mixed* $name, *mixed* $definition, [*mixed* $shared])

...


abstract public  **setShared** (*mixed* $name, *mixed* $definition)

...


abstract public  **remove** (*mixed* $name)

...


abstract public  **attempt** (*mixed* $name, *mixed* $definition, [*mixed* $shared])

...


abstract public  **get** (*mixed* $name, [*mixed* $parameters])

...


abstract public  **getShared** (*mixed* $name, [*mixed* $parameters])

...


abstract public  **setRaw** (*mixed* $name, [Phalcon\Di\ServiceInterface](Phalcon_Di.md) $rawDefinition)

...


abstract public  **getRaw** (*mixed* $name)

...


abstract public  **getService** (*mixed* $name)

...


abstract public  **has** (*mixed* $name)

...


abstract public  **wasFreshInstance** ()

...


abstract public  **getServices** ()

...


abstract public static  **setDefault** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

...


abstract public static  **getDefault** ()

...


abstract public static  **reset** ()

...


abstract public  **offsetExists** (*mixed* $offset) inherited from [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

...


abstract public  **offsetGet** (*mixed* $offset) inherited from [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

...


abstract public  **offsetSet** (*mixed* $offset, *mixed* $value) inherited from [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

...


abstract public  **offsetUnset** (*mixed* $offset) inherited from [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

...
