---
layout: default
title: 'Phalcon\Debug'
---
# Class **Phalcon\Debug**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/debug.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Provides debug capabilities to Phalcon applications


## Methods
public  **setUri** (*mixed* $uri)

Change the base URI for static resources



public  **setShowBackTrace** (*mixed* $showBackTrace)

Sets if files the exception's backtrace must be showed



public  **setShowFiles** (*mixed* $showFiles)

Set if files part of the backtrace must be shown in the output



public  **setShowFileFragment** (*mixed* $showFileFragment)

Sets if files must be completely opened and showed in the output
or just the fragment related to the exception



public  **listen** ([*mixed* $exceptions], [*mixed* $lowSeverity])

Listen for uncaught exceptions and unsilent notices or warnings



public  **listenExceptions** ()

Listen for uncaught exceptions



public  **listenLowSeverity** ()

Listen for unsilent notices or warnings



public  **halt** ()

Halts the request showing a backtrace



public  **debugVar** (*mixed* $varz, [*mixed* $key])

Adds a variable to the debug output



public  **clearVars** ()

Clears are variables added previously



protected  **_escapeString** (*mixed* $value)

Escapes a string with htmlentities



protected  **_getArrayDump** (*array* $argument, [*mixed* $n])

Produces a recursive representation of an array



protected  **_getVarDump** (*mixed* $variable)

Produces an string representation of a variable



public  **getMajorVersion** ()

Returns the major framework's version



public  **getVersion** ()

Generates a link to the current version documentation



public  **getCssSources** ()

Returns the css sources



public  **getJsSources** ()

Returns the javascript sources



final protected  **showTraceItem** (*mixed* $n, *array* $trace)

Shows a backtrace item



public  **onUncaughtLowSeverity** (*mixed* $severity, *mixed* $message, *mixed* $file, *mixed* $line, *mixed* $context)

Throws an exception when a notice or warning is raised



public  **onUncaughtException** ([Exception](https://php.net/manual/en/class.exception.php) $exception)

Handles uncaught exceptions




<hr>

# Class **Phalcon\Debug\Dump**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/debug/dump.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Dumps information about a variable(s)

```php
<?php

$foo = 123;

echo (new \Phalcon\Debug\Dump())->variable($foo, "foo");

```

```php
<?php

$foo = "string";
$bar = ["key" => "value"];
$baz = new stdClass();

echo (new \Phalcon\Debug\Dump())->variables($foo, $bar, $baz);

```


## Methods
public  **getDetailed** ()

...


public  **setDetailed** (*mixed* $detailed)

...


public  **__construct** ([*array* $styles], [*mixed* $detailed])

Phalcon\Debug\Dump constructor



public  **all** ()

Alias of variables() method



protected  **getStyle** (*mixed* $type)

Get style for type



public  **setStyles** ([*array* $styles])

Set styles for vars type



public  **one** (*mixed* $variable, [*mixed* $name])

Alias of variable() method



protected  **output** (*mixed* $variable, [*mixed* $name], [*mixed* $tab])

Prepare an HTML string of information about a single variable.



public  **variable** (*mixed* $variable, [*mixed* $name])

Returns an HTML string of information about a single variable.

```php
<?php

echo (new \Phalcon\Debug\Dump())->variable($foo, "foo");

```



public  **variables** ()

Returns an HTML string of debugging information about any number of
variables, each wrapped in a "pre" tag.

```php
<?php

$foo = "string";
$bar = ["key" => "value"];
$baz = new stdClass();

echo (new \Phalcon\Debug\Dump())->variables($foo, $bar, $baz);

```



public  **toJson** (*mixed* $variable)

Returns an JSON string of information about a single variable.

```php
<?php

$foo = [
    "key" => "value",
];

echo (new \Phalcon\Debug\Dump())->toJson($foo);

$foo = new stdClass();
$foo->bar = "buz";

echo (new \Phalcon\Debug\Dump())->toJson($foo);

```




<hr>

# Class **Phalcon\Debug\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/debug/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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
