---
layout: default
title: 'Phalcon\Logger'
---
# Abstract class **Phalcon\Logger**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Constants
*integer* **SPECIAL**

*integer* **CUSTOM**

*integer* **DEBUG**

*integer* **INFO**

*integer* **NOTICE**

*integer* **WARNING**

*integer* **ERROR**

*integer* **ALERT**

*integer* **CRITICAL**

*integer* **EMERGENCE**

*integer* **EMERGENCY**


<hr>

# Abstract class **Phalcon\Logger\Adapter**

*implements* [Phalcon\Logger\AdapterInterface](Phalcon_Logger.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/adapter.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Base class for Phalcon\Logger adapters


## Methods
public  **setLogLevel** (*mixed* $level)

Filters the logs sent to the handlers that are less or equal than a specific level



public  **getLogLevel** ()

Returns the current log level



public  **setFormatter** ([Phalcon\Logger\FormatterInterface](Phalcon_Logger.md) $formatter)

Sets the message formatter



public  **begin** ()

Starts a transaction



public  **commit** ()

Commits the internal transaction



public  **rollback** ()

Rollbacks the internal transaction



public  **isTransaction** ()

Returns the whether the logger is currently in an active transaction or not



public  **critical** (*mixed* $message, [*array* $context])

Sends/Writes a critical message to the log



public  **emergency** (*mixed* $message, [*array* $context])

Sends/Writes an emergency message to the log



public  **debug** (*mixed* $message, [*array* $context])

Sends/Writes a debug message to the log



public  **error** (*mixed* $message, [*array* $context])

Sends/Writes an error message to the log



public  **info** (*mixed* $message, [*array* $context])

Sends/Writes an info message to the log



public  **notice** (*mixed* $message, [*array* $context])

Sends/Writes a notice message to the log



public  **warning** (*mixed* $message, [*array* $context])

Sends/Writes a warning message to the log



public  **alert** (*mixed* $message, [*array* $context])

Sends/Writes an alert message to the log



public  **log** (*mixed* $type, [*mixed* $message], [*array* $context])

Logs messages to the internal logger. Appends logs to the logger



abstract public  **getFormatter** () inherited from [Phalcon\Logger\AdapterInterface](Phalcon_Logger.md)

...


abstract public  **close** () inherited from [Phalcon\Logger\AdapterInterface](Phalcon_Logger.md)

...



<hr>

# Class **Phalcon\Logger\Adapter\File**

*extends* abstract class [Phalcon\Logger\Adapter](Phalcon_Logger.md)

*implements* [Phalcon\Logger\AdapterInterface](Phalcon_Logger.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/adapter/file.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Adapter to store logs in plain text files

```php
<?php

$logger = new \Phalcon\Logger\Adapter\File("app/logs/test.log");

$logger->log("This is a message");
$logger->log(\Phalcon\Logger::ERROR, "This is an error");
$logger->error("This is another error");

$logger->close();

```


## Methods
public  **getPath** ()

File Path



public  **__construct** (*string* $name, [*array* $options])

Phalcon\Logger\Adapter\File constructor



public  **getFormatter** ()

Returns the internal formatter



public  **logInternal** (*mixed* $message, *mixed* $type, *mixed* $time, *array* $context)

Writes the log to the file itself



public  **close** ()

Closes the logger



public  **__wakeup** ()

Opens the internal file handler after unserialization



public  **setLogLevel** (*mixed* $level) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Filters the logs sent to the handlers that are less or equal than a specific level



public  **getLogLevel** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Returns the current log level



public  **setFormatter** ([Phalcon\Logger\FormatterInterface](Phalcon_Logger.md) $formatter) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sets the message formatter



public  **begin** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Starts a transaction



public  **commit** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Commits the internal transaction



public  **rollback** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Rollbacks the internal transaction



public  **isTransaction** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Returns the whether the logger is currently in an active transaction or not



public  **critical** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a critical message to the log



public  **emergency** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an emergency message to the log



public  **debug** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a debug message to the log



public  **error** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an error message to the log



public  **info** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an info message to the log



public  **notice** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a notice message to the log



public  **warning** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a warning message to the log



public  **alert** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an alert message to the log



public  **log** (*mixed* $type, [*mixed* $message], [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Logs messages to the internal logger. Appends logs to the logger




<hr>

# Class **Phalcon\Logger\Adapter\Firephp**

*extends* abstract class [Phalcon\Logger\Adapter](Phalcon_Logger.md)

*implements* [Phalcon\Logger\AdapterInterface](Phalcon_Logger.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/adapter/firephp.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Sends logs to FirePHP

```php
<?php

use Phalcon\Logger\Adapter\Firephp;
use Phalcon\Logger;

$logger = new Firephp();

$logger->log(Logger::ERROR, "This is an error");
$logger->error("This is another error");

```


## Methods
public  **getFormatter** ()

Returns the internal formatter



public  **logInternal** (*mixed* $message, *mixed* $type, *mixed* $time, *array* $context)

Writes the log to the stream itself



public  **close** ()

Closes the logger



public  **setLogLevel** (*mixed* $level) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Filters the logs sent to the handlers that are less or equal than a specific level



public  **getLogLevel** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Returns the current log level



public  **setFormatter** ([Phalcon\Logger\FormatterInterface](Phalcon_Logger.md) $formatter) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sets the message formatter



public  **begin** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Starts a transaction



public  **commit** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Commits the internal transaction



public  **rollback** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Rollbacks the internal transaction



public  **isTransaction** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Returns the whether the logger is currently in an active transaction or not



public  **critical** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a critical message to the log



public  **emergency** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an emergency message to the log



public  **debug** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a debug message to the log



public  **error** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an error message to the log



public  **info** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an info message to the log



public  **notice** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a notice message to the log



public  **warning** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a warning message to the log



public  **alert** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an alert message to the log



public  **log** (*mixed* $type, [*mixed* $message], [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Logs messages to the internal logger. Appends logs to the logger




<hr>

# Class **Phalcon\Logger\Adapter\Stream**

*extends* abstract class [Phalcon\Logger\Adapter](Phalcon_Logger.md)

*implements* [Phalcon\Logger\AdapterInterface](Phalcon_Logger.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/adapter/stream.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Sends logs to a valid PHP stream

```php
<?php

use Phalcon\Logger;
use Phalcon\Logger\Adapter\Stream;

$logger = new Stream("php://stderr");

$logger->log("This is a message");
$logger->log(Logger::ERROR, "This is an error");
$logger->error("This is another error");

```


## Methods
public  **__construct** (*string* $name, [*array* $options])

Phalcon\Logger\Adapter\Stream constructor



public  **getFormatter** ()

Returns the internal formatter



public  **logInternal** (*mixed* $message, *mixed* $type, *mixed* $time, *array* $context)

Writes the log to the stream itself



public  **close** ()

Closes the logger



public  **setLogLevel** (*mixed* $level) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Filters the logs sent to the handlers that are less or equal than a specific level



public  **getLogLevel** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Returns the current log level



public  **setFormatter** ([Phalcon\Logger\FormatterInterface](Phalcon_Logger.md) $formatter) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sets the message formatter



public  **begin** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Starts a transaction



public  **commit** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Commits the internal transaction



public  **rollback** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Rollbacks the internal transaction



public  **isTransaction** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Returns the whether the logger is currently in an active transaction or not



public  **critical** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a critical message to the log



public  **emergency** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an emergency message to the log



public  **debug** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a debug message to the log



public  **error** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an error message to the log



public  **info** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an info message to the log



public  **notice** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a notice message to the log



public  **warning** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a warning message to the log



public  **alert** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an alert message to the log



public  **log** (*mixed* $type, [*mixed* $message], [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Logs messages to the internal logger. Appends logs to the logger




<hr>

# Class **Phalcon\Logger\Adapter\Syslog**

*extends* abstract class [Phalcon\Logger\Adapter](Phalcon_Logger.md)

*implements* [Phalcon\Logger\AdapterInterface](Phalcon_Logger.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/adapter/syslog.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Sends logs to the system logger

```php
<?php

use Phalcon\Logger;
use Phalcon\Logger\Adapter\Syslog;

// LOG_USER is the only valid log type under Windows operating systems
$logger = new Syslog(
    "ident",
    [
        "option"   => LOG_CONS | LOG_NDELAY | LOG_PID,
        "facility" => LOG_USER,
    ]
);

$logger->log("This is a message");
$logger->log(Logger::ERROR, "This is an error");
$logger->error("This is another error");

```


## Methods
public  **__construct** (*string* $name, [*array* $options])

Phalcon\Logger\Adapter\Syslog constructor



public  **getFormatter** ()

Returns the internal formatter



public  **logInternal** (*mixed* $message, *mixed* $type, *mixed* $time, *array* $context)

Writes the log to the stream itself



public  **close** ()

Closes the logger



public  **setLogLevel** (*mixed* $level) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Filters the logs sent to the handlers that are less or equal than a specific level



public  **getLogLevel** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Returns the current log level



public  **setFormatter** ([Phalcon\Logger\FormatterInterface](Phalcon_Logger.md) $formatter) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sets the message formatter



public  **begin** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Starts a transaction



public  **commit** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Commits the internal transaction



public  **rollback** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Rollbacks the internal transaction



public  **isTransaction** () inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Returns the whether the logger is currently in an active transaction or not



public  **critical** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a critical message to the log



public  **emergency** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an emergency message to the log



public  **debug** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a debug message to the log



public  **error** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an error message to the log



public  **info** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an info message to the log



public  **notice** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a notice message to the log



public  **warning** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes a warning message to the log



public  **alert** (*mixed* $message, [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Sends/Writes an alert message to the log



public  **log** (*mixed* $type, [*mixed* $message], [*array* $context]) inherited from [Phalcon\Logger\Adapter](Phalcon_Logger.md)

Logs messages to the internal logger. Appends logs to the logger




<hr>

# Interface **Phalcon\Logger\AdapterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/adapterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setFormatter** ([Phalcon\Logger\FormatterInterface](Phalcon_Logger.md) $formatter)

...


abstract public  **getFormatter** ()

...


abstract public  **setLogLevel** (*mixed* $level)

...


abstract public  **getLogLevel** ()

...


abstract public  **log** (*mixed* $type, [*mixed* $message], [*array* $context])

...


abstract public  **begin** ()

...


abstract public  **commit** ()

...


abstract public  **rollback** ()

...


abstract public  **close** ()

...


abstract public  **debug** (*mixed* $message, [*array* $context])

...


abstract public  **error** (*mixed* $message, [*array* $context])

...


abstract public  **info** (*mixed* $message, [*array* $context])

...


abstract public  **notice** (*mixed* $message, [*array* $context])

...


abstract public  **warning** (*mixed* $message, [*array* $context])

...


abstract public  **alert** (*mixed* $message, [*array* $context])

...


abstract public  **emergency** (*mixed* $message, [*array* $context])

...



<hr>

# Class **Phalcon\Logger\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Logger\Factory**

*extends* abstract class [Phalcon\Factory](Phalcon_Factory.md)

*implements* [Phalcon\FactoryInterface](Phalcon_Factory.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/factory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Loads Logger Adapter class using 'adapter' option

```php
<?php

use Phalcon\Logger\Factory;

$options = [
    "name"    => "log.txt",
    "adapter" => "file",
];
$logger = Factory::load($options);

```


## Methods
public static  **load** ([Phalcon\Config](Phalcon_Config.md) | *array* $config)





protected static  **loadClass** (*mixed* $namespace, *mixed* $config)

...



<hr>

# Abstract class **Phalcon\Logger\Formatter**

*implements* [Phalcon\Logger\FormatterInterface](Phalcon_Logger.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/formatter.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This is a base class for logger formatters


## Methods
public  **getTypeString** (*mixed* $type)

Returns the string meaning of a logger constant



public  **interpolate** (*string* $message, [*array* $context])

Interpolates context values into the message placeholders



abstract public  **format** (*mixed* $message, *mixed* $type, *mixed* $timestamp, [*mixed* $context]) inherited from [Phalcon\Logger\FormatterInterface](Phalcon_Logger.md)

...



<hr>

# Class **Phalcon\Logger\Formatter\Firephp**

*extends* abstract class [Phalcon\Logger\Formatter](Phalcon_Logger.md)

*implements* [Phalcon\Logger\FormatterInterface](Phalcon_Logger.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/formatter/firephp.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Formats messages so that they can be sent to FirePHP


## Methods
public  **getTypeString** (*mixed* $type)

Returns the string meaning of a logger constant



public  **setShowBacktrace** ([*mixed* $isShow])

Returns the string meaning of a logger constant



public  **getShowBacktrace** ()

Returns the string meaning of a logger constant



public  **enableLabels** ([*mixed* $isEnable])

Returns the string meaning of a logger constant



public  **labelsEnabled** ()

Returns the labels enabled



public *string* **format** (*string* $message, *int* $type, *int* $timestamp, [*array* $context])

Applies a format to a message before sending it to the log



public  **interpolate** (*string* $message, [*array* $context]) inherited from [Phalcon\Logger\Formatter](Phalcon_Logger.md)

Interpolates context values into the message placeholders




<hr>

# Class **Phalcon\Logger\Formatter\Json**

*extends* abstract class [Phalcon\Logger\Formatter](Phalcon_Logger.md)

*implements* [Phalcon\Logger\FormatterInterface](Phalcon_Logger.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/formatter/json.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Formats messages using JSON encoding


## Methods
public *string* **format** (*string* $message, *int* $type, *int* $timestamp, [*array* $context])

Applies a format to a message before sent it to the internal log



public  **getTypeString** (*mixed* $type) inherited from [Phalcon\Logger\Formatter](Phalcon_Logger.md)

Returns the string meaning of a logger constant



public  **interpolate** (*string* $message, [*array* $context]) inherited from [Phalcon\Logger\Formatter](Phalcon_Logger.md)

Interpolates context values into the message placeholders




<hr>

# Class **Phalcon\Logger\Formatter\Line**

*extends* abstract class [Phalcon\Logger\Formatter](Phalcon_Logger.md)

*implements* [Phalcon\Logger\FormatterInterface](Phalcon_Logger.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/formatter/line.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Formats messages using an one-line string


## Methods
public  **getDateFormat** ()

Default date format



public  **setDateFormat** (*mixed* $dateFormat)

Default date format



public  **getFormat** ()

Format applied to each message



public  **setFormat** (*mixed* $format)

Format applied to each message



public  **__construct** ([*string* $format], [*string* $dateFormat])

Phalcon\Logger\Formatter\Line construct



public *string* **format** (*string* $message, *int* $type, *int* $timestamp, [*array* $context])

Applies a format to a message before sent it to the internal log



public  **getTypeString** (*mixed* $type) inherited from [Phalcon\Logger\Formatter](Phalcon_Logger.md)

Returns the string meaning of a logger constant



public  **interpolate** (*string* $message, [*array* $context]) inherited from [Phalcon\Logger\Formatter](Phalcon_Logger.md)

Interpolates context values into the message placeholders




<hr>

# Class **Phalcon\Logger\Formatter\Syslog**

*extends* abstract class [Phalcon\Logger\Formatter](Phalcon_Logger.md)

*implements* [Phalcon\Logger\FormatterInterface](Phalcon_Logger.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/formatter/syslog.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Prepares a message to be used in a Syslog backend


## Methods
public *array* **format** (*string* $message, *int* $type, *int* $timestamp, [*array* $context])

Applies a format to a message before sent it to the internal log



public  **getTypeString** (*mixed* $type) inherited from [Phalcon\Logger\Formatter](Phalcon_Logger.md)

Returns the string meaning of a logger constant



public  **interpolate** (*string* $message, [*array* $context]) inherited from [Phalcon\Logger\Formatter](Phalcon_Logger.md)

Interpolates context values into the message placeholders




<hr>

# Interface **Phalcon\Logger\FormatterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/formatterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **format** (*mixed* $message, *mixed* $type, *mixed* $timestamp, [*mixed* $context])

...



<hr>

# Class **Phalcon\Logger\Item**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/item.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents each item in a logging transaction


## Methods
public  **getType** ()

Log type



public  **getMessage** ()

Log message



public  **getTime** ()

Log timestamp



public  **getContext** ()

...


public  **__construct** (*string* $message, *integer* $type, [*integer* $time], [*array* $context])

Phalcon\Logger\Item constructor




<hr>

# Class **Phalcon\Logger\Multiple**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/logger/multiple.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Handles multiples logger handlers


## Methods
public  **getLoggers** ()

...


public  **getFormatter** ()

...


public  **getLogLevel** ()

...


public  **push** ([Phalcon\Logger\AdapterInterface](Phalcon_Logger.md) $logger)

Pushes a logger to the logger tail



public  **setFormatter** ([Phalcon\Logger\FormatterInterface](Phalcon_Logger.md) $formatter)

Sets a global formatter



public  **setLogLevel** (*mixed* $level)

Sets a global level



public  **log** (*mixed* $type, [*mixed* $message], [*array* $context])

Sends a message to each registered logger



public  **critical** (*mixed* $message, [*array* $context])

Sends/Writes an critical message to the log



public  **emergency** (*mixed* $message, [*array* $context])

Sends/Writes an emergency message to the log



public  **debug** (*mixed* $message, [*array* $context])

Sends/Writes a debug message to the log



public  **error** (*mixed* $message, [*array* $context])

Sends/Writes an error message to the log



public  **info** (*mixed* $message, [*array* $context])

Sends/Writes an info message to the log



public  **notice** (*mixed* $message, [*array* $context])

Sends/Writes a notice message to the log



public  **warning** (*mixed* $message, [*array* $context])

Sends/Writes a warning message to the log



public  **alert** (*mixed* $message, [*array* $context])

Sends/Writes an alert message to the log
