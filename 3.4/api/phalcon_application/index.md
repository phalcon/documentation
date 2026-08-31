---
title: "Abstract class **Phalcon\\Application**"
version: "3.4"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Abstract class **Phalcon\Application**

*extends* abstract class [Phalcon\Di\Injectable](/3.4/api/phalcon_di/)

*implements* [Phalcon\Events\EventsAwareInterface](/3.4/api/phalcon_events/), [Phalcon\Di\InjectionAwareInterface](/3.4/api/phalcon_di/)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/application.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Base class for Phalcon\Cli\Console and Phalcon\Mvc\Application.

## Methods
public  **__construct** ([[Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector])

Phalcon\Application Constructor

public  **setEventsManager** ([Phalcon\Events\ManagerInterface](/3.4/api/phalcon_events/) $eventsManager)

Sets the events manager

public  **getEventsManager** ()

Returns the internal event manager

public  **registerModules** (*array* $modules, [*mixed* $merge])

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

public  **getModules** ()

Return the modules registered in the application

public  **getModule** (*mixed* $name)

Gets the module definition registered in the application via module name

public  **setDefaultModule** (*mixed* $defaultModule)

Sets the module name to be used if the router doesn't return a valid module

public  **getDefaultModule** ()

Returns the default module name

abstract public  **handle** ()

Handles a request

public  **setDI** ([Phalcon\DiInterface](/3.4/api/phalcon_di/) $dependencyInjector) inherited from [Phalcon\Di\Injectable](/3.4/api/phalcon_di/)

Sets the dependency injector

public  **getDI** () inherited from [Phalcon\Di\Injectable](/3.4/api/phalcon_di/)

Returns the internal dependency injector

public  **__get** (*string* $propertyName) inherited from [Phalcon\Di\Injectable](/3.4/api/phalcon_di/)

Magic method __get

<hr />

---
layout: default
title: 'Phalcon\Application\Exception'
---
# Class **Phalcon\Application\Exception**

*extends* class [Phalcon\Exception](/3.4/api/phalcon_exception/)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/application/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

Source: https://docs.phalcon.io/3.4/api/phalcon_application/index.mdx
