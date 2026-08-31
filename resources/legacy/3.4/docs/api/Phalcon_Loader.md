---
layout: default
title: 'Phalcon\Loader'
---
# Class **Phalcon\Loader**

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/loader.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This component helps to load your project classes automatically based on some conventions

```php
<?php

use Phalcon\Loader;

// Creates the autoloader
$loader = new Loader();

// Register some namespaces
$loader->registerNamespaces(
    [
        "Example\Base"    => "vendor/example/base/",
        "Example\Adapter" => "vendor/example/adapter/",
        "Example"          => "vendor/example/",
    ]
);

// Register autoloader
$loader->register();

// Requiring this class will automatically include file vendor/example/adapter/Some.php
$adapter = new \Example\Adapter\Some();

```


## Methods
public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager)

Sets the events manager



public  **getEventsManager** ()

Returns the internal event manager



public  **setExtensions** (*array* $extensions)

Sets an array of file extensions that the loader must try in each attempt to locate the file



public  **getExtensions** ()

Returns the file extensions registered in the loader



public  **registerNamespaces** (*array* $namespaces, [*mixed* $merge])

Register namespaces and their related directories



public **setFileCheckingCallback** (*mixed* $callback = null): [Phalcon\Loader](Phalcon_Loader.md)

Sets the file check callback.

```php
<?php

// Default behavior.
$loader->setFileCheckingCallback("is_file");

// Faster than `is_file()`, but implies some issues if
// the file is removed from the filesystem.
$loader->setFileCheckingCallback("stream_resolve_include_path");

// Do not check file existence.
$loader->setFileCheckingCallback(null);
```

A [Phalcon\Loader\Exception](Phalcon_Loader.md) is thrown if the $callback parameter is not a `callable` or `null`;



protected  **prepareNamespace** (*array* $namespace)

...


public  **getNamespaces** ()

Returns the namespaces currently registered in the autoloader



public  **registerDirs** (*array* $directories, [*mixed* $merge])

Register directories in which "not found" classes could be found



public  **getDirs** ()

Returns the directories currently registered in the autoloader



public  **registerFiles** (*array* $files, [*mixed* $merge])

Registers files that are "non-classes" hence need a "require". This is very useful for including files that only
have functions



public  **getFiles** ()

Returns the files currently registered in the autoloader



public  **registerClasses** (*array* $classes, [*mixed* $merge])

Register classes and their locations



public  **getClasses** ()

Returns the class-map currently registered in the autoloader



public  **register** ([*mixed* $prepend])

Register the autoload method



public  **unregister** ()

Unregister the autoload method



public  **loadFiles** ()

Checks if a file exists and then adds the file by doing virtual require



public  **autoLoad** (*mixed* $className)

Autoloads the registered classes



public  **getFoundPath** ()

Get the path when a class was found



public  **getCheckedPath** ()

Get the path the loader is checking for a path




<hr>

# Class **Phalcon\Loader\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/loader/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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
