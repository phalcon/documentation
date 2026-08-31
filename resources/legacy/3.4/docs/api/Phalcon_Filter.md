---
layout: default
title: 'Phalcon\Filter'
---
# Class **Phalcon\Filter**

*implements* [Phalcon\FilterInterface](Phalcon_Filter.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/filter.zep" class="btn btn-default btn-sm">Source on GitHub</a>

The Phalcon\Filter component provides a set of commonly needed data filters. It provides
object oriented wrappers to the php filter extension. Also allows the developer to
define his/her own filters

```php
<?php

$filter = new \Phalcon\Filter();

$filter->sanitize("some(one)@exa\mple.com", "email"); // returns "someone@example.com"
$filter->sanitize("hello<<", "string"); // returns "hello"
$filter->sanitize("!100a019", "int"); // returns "100019"
$filter->sanitize("!100a019.01a", "float"); // returns "100019.01"

```


## Constants
*string* **FILTER_EMAIL**

*string* **FILTER_ABSINT**

*string* **FILTER_INT**

*string* **FILTER_INT_CAST**

*string* **FILTER_STRING**

*string* **FILTER_FLOAT**

*string* **FILTER_FLOAT_CAST**

*string* **FILTER_ALPHANUM**

*string* **FILTER_TRIM**

*string* **FILTER_STRIPTAGS**

*string* **FILTER_LOWER**

*string* **FILTER_UPPER**

*string* **FILTER_URL**

*string* **FILTER_SPECIAL_CHARS**

## Methods
public  **add** (*mixed* $name, *mixed* $handler)

Adds a user-defined filter



public  **sanitize** (*mixed* $value, *mixed* $filters, [*mixed* $noRecursive])

Sanitizes a value with a specified single or set of filters



protected  **_sanitize** (*mixed* $value, *mixed* $filter)

Internal sanitize wrapper to filter_var



public  **getFilters** ()

Return the user-defined filters in the instance




<hr>

# Class **Phalcon\Filter\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/filter/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Interface **Phalcon\Filter\UserFilterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/filter/userfilterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **filter** (*mixed* $value)

...



<hr>

# Interface **Phalcon\FilterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/filterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **add** (*mixed* $name, *mixed* $handler)

...


abstract public  **sanitize** (*mixed* $value, *mixed* $filters)

...


abstract public  **getFilters** ()

...
