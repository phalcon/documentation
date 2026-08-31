---
layout: default
title: 'Phalcon\Mvc\Application'
---
# Class **Phalcon\Mvc\Application**

*extends* abstract class [Phalcon\Application](Phalcon_Application.md)

*implements* [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/application.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This component encapsulates all the complex operations behind instantiating every component
needed and integrating it with the rest to allow the MVC pattern to operate as desired.

```php
<?php

use Phalcon\Mvc\Application;

class MyApp extends Application
{
    /**
     * Register the services here to make them general or register
     * in the ModuleDefinition to make them module-specific
     */
    protected function registerServices()
    {

    }

    /**
     * This method registers all the modules in the application
     */
    public function main()
    {
        $this->registerModules(
            [
                "frontend" => [
                    "className" => "Multiple\Frontend\Module",
                    "path"      => "../apps/frontend/Module.php",
                ],
                "backend" => [
                    "className" => "Multiple\Backend\Module",
                    "path"      => "../apps/backend/Module.php",
                ],
            ]
        );
    }
}

$application = new MyApp();

$application->main();

```


## Methods
public  **useImplicitView** (*mixed* $implicitView)

By default. The view is implicitly buffering all the output
You can full disable the view component using this method



public  **handle** ([*mixed* $uri])

Handles a MVC request



public  **__construct** ([[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector]) inherited from [Phalcon\Application](Phalcon_Application.md)

Phalcon\Application



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Application](Phalcon_Application.md)

Sets the events manager



public  **getEventsManager** () inherited from [Phalcon\Application](Phalcon_Application.md)

Returns the internal event manager



public  **registerModules** (*array* $modules, [*mixed* $merge]) inherited from [Phalcon\Application](Phalcon_Application.md)

Register an array of modules present in the application

```php
<?php

$this->registerModules(
    [
        "frontend" => [
            "className" => "Multiple\Frontend\Module",
            "path"      => "../apps/frontend/Module.php",
        ],
        "backend" => [
            "className" => "Multiple\Backend\Module",
            "path"      => "../apps/backend/Module.php",
        ],
    ]
);

```



public  **getModules** () inherited from [Phalcon\Application](Phalcon_Application.md)

Return the modules registered in the application



public  **getModule** (*mixed* $name) inherited from [Phalcon\Application](Phalcon_Application.md)

Gets the module definition registered in the application via module name



public  **setDefaultModule** (*mixed* $defaultModule) inherited from [Phalcon\Application](Phalcon_Application.md)

Sets the module name to be used if the router doesn't return a valid module



public  **getDefaultModule** () inherited from [Phalcon\Application](Phalcon_Application.md)

Returns the default module name



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal dependency injector



public  **__get** (*mixed* $propertyName) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Magic method __get




<hr>

# Class **Phalcon\Mvc\Application\Exception**

*extends* class [Phalcon\Application\Exception](Phalcon_Application.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/application/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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
