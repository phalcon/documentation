# Logger

- - -

## Overview

[Phalcon\Logger\Logger][logger-logger] is a component providing logging services for applications. It offers logging to
different back-ends using different adapters. It also offers transaction logging, configuration options, and different
logging formats. You can use the [Phalcon\Logger\Logger][logger-logger] for any logging need your application has, from
debugging processes to tracing application flow.

The [Phalcon\Logger\Logger][logger-logger] implements methods that are in line with [PSR-3][psr-3] but does not
implement `Psr\Log\LoggerInterface` directly. The [phalcon/bridge-psr3][bridge-psr3] package bridges the two standards
in both directions: the Phalcon logger can be consumed as a PSR-3 logger, and a PSR-3 logger can be used as a Phalcon
log adapter. See the PSR-3 section below for installation and usage.

The [Phalcon\Logger\Logger][logger-logger] implements only the logging functionality and accepts one or more adapters
that would be responsible for doing the work of logging. This implementation separates the responsibilities of the
component and offers an easy way to attach more than one adapter to the logging component so that logging to multiple
adapters can be achieved.

## Adapters

This component makes use of adapters to store the logged messages. The use of adapters allows for a common logging
interface which provides the ability to easily switch back-ends, or use multiple adapters if necessary. The adapters
supported are:

| Adapter                                                | Description                                  |
|--------------------------------------------------------|----------------------------------------------|
| [Phalcon\Logger\Adapter\Noop][logger-adapter-noop]     | Black hole adapter (used for testing mostly) |
| [Phalcon\Logger\Adapter\Stream][logger-adapter-stream] | Logs messages on a file stream               |
| [Phalcon\Logger\Adapter\Syslog][logger-adapter-syslog] | Logs messages to the Syslog                  |

### Stream

This adapter is used when we want to log messages to a particular file stream. This adapter combines the v3 `Stream` and
`File` ones. Usually, this is the most used one: logging to a file in the file system.

### Syslog

This adapter sends messages to the system log. The syslog behavior may vary from one operating system to another.

### Noop

This is a black hole adapter. It sends messages to *infinity and beyond*! This adapter is used mostly for testing or if
you want to joke with a colleague.

## Factory

You can use the [Phalcon\Logger\LoggerFactory][logger-loggerfactory] component to create a logger. For
the [Phalcon\Logger\LoggerFactory][logger-loggerfactory] to work, it needs to be instantiated with
a [Phalcon\Logger\AdapterFactory][logger-adapterfactory]:

```php
<?php

use Phalcon\Logger\LoggerFactory;
use Phalcon\Logger\AdapterFactory;

$adapterFactory = new AdapterFactory();
$loggerFactory  = new LoggerFactory($adapterFactory);
```

### `load()`

[Phalcon\Logger\LoggerFactory][logger-loggerfactory] offers the `load` method, that constructs a logger based on
supplied configuration. The configuration can be an array or a [Phalcon\Config\Config][config] object.

!!! info "NOTE"

    Use Case: Create a Logger with two Stream adapters. One adapter will be called `main` for logging all messages, while the second one will be called `admin`, logging only messages generated in the admin area of our application 

```php
<?php

use Phalcon\Logger\AdapterFactory;
use Phalcon\Logger\LoggerFactory;
use Phalcon\Storage\SerializerFactory;

$config = [
    "name"    => "prod-logger",
    "options" => [
        "adapters" => [
            "main"  => [
                "adapter" => "stream",
                "name"    => "/storage/logs/main.log",
                "options" => []
            ],
            "admin" => [
                "adapter" => "stream",
                "name"    => "/storage/logs/admin.log",
                "options" => []
            ],
        ],
    ],
];

$serializerFactory = new SerializerFactory();
$adapterFactory    = new AdapterFactory();
$loggerFactory     = new LoggerFactory($adapterFactory);

$logger = $loggerFactory->load($config);
```

### `newInstance()`

The [Phalcon\Logger\LoggerFactory][logger-loggerfactory] also offers the `newInstance()` method, which constructs a
logger based on the supplied name and array of relevant adapters. Using the use case above:

```php
<?php

use Phalcon\Logger\Adapter\Stream;
use Phalcon\Logger\AdapterFactory;
use Phalcon\Logger\LoggerFactory;
use Phalcon\Storage\SerializerFactory;

$adapters = [
    "main"  => new Stream("/storage/logs/main.log"),
    "admin" => new Stream("/storage/logs/admin.log"),
];

$serializerFactory = new SerializerFactory();
$adapterFactory    = new AdapterFactory($serializerFactory);
$loggerFactory     = new LoggerFactory($adapterFactory);

$logger = $loggerFactory->newInstance('prod-logger', $adapters);
```

## Creating a Logger

Creating a logger is a multi-step process. First, you create the logger object, and then you attach an adapter to it.
After that, you can start logging messages according to the needs of your application.

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter = new Stream('/storage/logs/main.log');
$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$logger->error('Something went wrong');
```

The above example creates a [Stream][logger-adapter-stream] adapter. We then create a logger object and attach this
adapter to it. Each adapter attached to a logger needs to have a unique name, for the logger to be able to know where to
log the messages. When calling the `error()` method on the logger object, the message is going to be stored in the
`/storage/logs/main.log`.

Since the logger component implements PSR-3, the following methods are available:

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter = new Stream('/storage/logs/main.log');
$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$logger->alert("This is an alert message");
$logger->critical("This is a critical message");
$logger->debug("This is a debug message");
$logger->error("This is an error message");
$logger->emergency("This is an emergency message");
$logger->info("This is an info message");
$logger->log(Logger::CRITICAL, "This is a log message");
$logger->notice("This is a notice message");
$logger->warning("This is a warning message");

```

The log generated is as follows:

```bash
[Tue, 25 Dec 18 12:13:14 -0400][alert] This is an alert message
[Tue, 25 Dec 18 12:13:14 -0400][critical] This is a critical message
[Tue, 25 Dec 18 12:13:14 -0400][debug] This is a debug message
[Tue, 25 Dec 18 12:13:14 -0400][error] This is an error message
[Tue, 25 Dec 18 12:13:14 -0400][emergency] This is an emergency message
[Tue, 25 Dec 18 12:13:14 -0400][info] This is an info message
[Tue, 25 Dec 18 12:13:14 -0400][critical] This is a log message
[Tue, 25 Dec 18 12:13:14 -0400][notice] This is a notice message
[Tue, 25 Dec 18 12:13:14 -0400][warning] This is warning message
```

## Multiple Adapters

[Phalcon\Logger\Logger][logger-logger] can send messages to multiple adapters with a just single call:

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter1 = new Stream('/logs/first-log.log');
$adapter2 = new Stream('/remote/second-log.log');
$adapter3 = new Stream('/manager/third-log.log');

$logger = new Logger(
    'messages',
    [
        'local'   => $adapter1,
        'remote'  => $adapter2,
        'manager' => $adapter3,
    ]
);

$logger->error('Something went wrong');
```

The messages are sent to the handlers in the order they were registered using the [first in first out][fifo] principle.

### Excluding Adapters

[Phalcon\Logger\Logger][logger-logger] also offers the ability to exclude logging to one or more adapters when logging a
message. This is particularly useful when in need of logging a `manager` related message in the `manager` log but not in
the `local` log without having to instantiate a new logger.

With the following setup:

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter1 = new Stream('/logs/first-log.log');
$adapter2 = new Stream('/remote/second-log.log');
$adapter3 = new Stream('/manager/third-log.log');

$logger = new Logger(
    'messages',
    [
        'local'   => $adapter1,
        'remote'  => $adapter2,
        'manager' => $adapter3,
    ]
);
```

we have the following:

```php
<?php

$logger->error('Something went wrong');
```

Log to all adapters

```php
<?php

$logger
    ->excludeAdapters(['local'])
    ->info('This does not go to the "local" logger');
```

Log only to remote and manager

!!! info "NOTE"

    `excludeAdapters()` applies to the next logging call only. The exclusion list is cleared once that call returns - whether or not the message passed the log-level filter - so an exclusion never carries over to a later, unrelated logging call.

!!! warning "WARNING"

    Internally, the component loops through the registered adapters and calls the relevant logging method to achieve logging to multiple adapters. If one of them fails, the loop will break and the remaining adapters (from the loop) will not log the message. In future versions of Phalcon we will be introducing asynchronous logging to alleviate this problem.

## Constants

The class offers a number of constants that can be used to distinguish between log levels. These constants can also be
used as the first parameter in the `log()` method.

| Constant    | Value |
|-------------|:-----:|
| `EMERGENCY` |   0   |
| `CRITICAL`  |   1   |
| `ALERT`     |   2   |
| `ERROR`     |   3   |
| `WARNING`   |   4   |
| `NOTICE`    |   5   |
| `INFO`      |   6   |
| `DEBUG`     |   7   |
| `CUSTOM`    |   8   |
| `TRACE`     |   9   |

## Log Levels

[Phalcon\Logger\Logger][logger-logger] allows you to set the minimum log level for the logger(s) to log. If you set this
integer value, any level higher than the one set will not be logged. Check the values of the constants in the previous
section for the order in which the levels are being set.

In the following example, we set the log level to `ALERT`. We will only see `EMERGENCY`, `CRITICAL`, **and** `ALERT`
messages.

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter = new Stream('/storage/logs/main.log');
$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$logger->setLogLevel(Logger::ALERT);

$logger->alert("This is an alert message");
$logger->critical("This is a critical message");
$logger->debug("This is a debug message");
$logger->error("This is an error message");
$logger->emergency("This is an emergency message");
$logger->info("This is an info message");
$logger->log(Logger::CRITICAL, "This is a log message");
$logger->notice("This is a notice message");
$logger->warning("This is a warning message");

```

The log generated is as follows:

```bash
[Tue, 25 Dec 18 12:13:14 -0400][alert] This is an alert message
[Tue, 25 Dec 18 12:13:14 -0400][critical] This is a critical message
[Tue, 25 Dec 18 12:13:14 -0400][emergency] This is an emergency message
[Tue, 25 Dec 18 12:13:14 -0400][critical] This is a log message
```

The above can be used in situations where you want to log messages above a certain severity based on conditions in your
application such as development mode vs. production.

!!! info "NOTE"

    The log level set is included in the logging. Anything **below** that level (i.e. higher number) will not be logged

!!! info "NOTE"

    Log level names are emitted in lowercase (for example: `error`, `warning`, `info`).

!!! danger "DANGER"

    It is **never** a good idea to suppress logging levels in your application since even warning errors do require CPU cycles to be processed, and neglecting these errors could potentially lead to unintended circumstances 

### Unknown Levels

`CUSTOM` (`8`) doubles as the sink for any level the logger does not recognize. When `log()` receives a level it cannot
map - a misspelled level name or an integer outside the defined constants - the message is recorded at the `CUSTOM`
level instead of raising an exception. The level name is emitted as `custom`.

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter = new Stream('/storage/logs/main.log');
$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

// "warnning" is a typo and is not a known level; it is logged as CUSTOM
$logger->log('warnning', 'Disk space is low');
```

The log generated is as follows:

```bash
[Tue, 25 Dec 18 12:13:14 -0400][custom] Disk space is low
```

`setLogLevel()` follows the same rule: an unrecognized integer is stored as `CUSTOM` rather than throwing. Because
`CUSTOM` (`8`) sits between `DEBUG` (`7`) and `TRACE` (`9`), the resulting threshold emits every level except `TRACE`.

## Trace Level

`trace()` records extra-verbose, fine-grained diagnostic output. Use it for
high-frequency events such as raw socket frames, full HTTP response bodies, or
internal state transitions that are too noisy for `debug()`.

`TRACE` has the value `9`. It is more verbose than `DEBUG` (`7`) and `CUSTOM`
(`8`), making it the most verbose level the logger emits. `TRACE` is an
additional level; the existing `CUSTOM` level and its `custom` label are
unchanged.

`trace()` is opt-in. The default minimum log level is `CUSTOM` (`8`), and the
logger only emits a message when its level is at or below the configured
minimum. Because `TRACE` (`9`) is higher than the default, trace messages are
suppressed until you lower the threshold with `setLogLevel()`.

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter = new Stream('/storage/logs/main.log');
$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

// Suppressed: the default minimum level is CUSTOM (8), TRACE (9) is higher
$logger->trace('This message is not logged at the default level');

$logger->setLogLevel(Logger::TRACE);

// Emitted: the minimum level now includes TRACE
$logger->trace('Raw response body: {"status":"ok"}');
```

The log generated is as follows:

```bash
[Tue, 25 Dec 18 12:13:14 -0400][trace] Raw response body: {"status":"ok"}
```

The level name is emitted in lowercase as `trace`. When the
[Syslog][logger-adapter-syslog] adapter receives a `trace` message, it maps the
level to `LOG_DEBUG`.

## Transactions

[Phalcon\Logger\Logger][logger-logger] also offers the ability to queue the messages in your logger, and then _commit_
them all together in the log file. This is similar to a database transaction with `begin` and `commit`. Each adapter
exposes the following methods:

| Name                    | Description                                    |
|-------------------------|------------------------------------------------|
| `begin(): void`         | begins the logging transaction                 |
| `inTransaction(): bool` | if you are in a transaction or not             |
| `commit(): void`        | writes all the queued messages in the log file |

Since the functionality is available at the adapter level, you can program your logger to use transactions on a
per-adapter basis.

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter1 = new Stream('/logs/first-log.log');
$adapter2 = new Stream('/remote/second-log.log');
$adapter3 = new Stream('/manager/third-log.log');

$logger = new Logger(
    'messages',
    [
        'local'   => $adapter1,
        'remote'  => $adapter2,
        'manager' => $adapter3,
    ]
);

$logger->getAdapter('manager')->begin();

$logger->error('Something happened');

$logger->getAdapter('manager')->commit();
```

In the example above, we register three adapters. We set the `manager` logger to be in transaction mode. As soon as we
call:

```php
$logger->error('Something happened');
```

the message will be logged in both `local` and `remote` adapters. It will be queued for the `manager` adapter and not
logged until we call the `commit` method in the `manager` adapter.

!!! info "NOTE"

    If you set one or more adapters to be in transaction mode (i.e. call `begin`) and forget to call `commit`, The adapter will call `commit` for you right before it is destroyed.

### Logger-Level Transactions

[Phalcon\Logger\Logger][logger-logger] also exposes `begin()`, `commit()`, and `rollback()` directly. Each method fans
the call out to every registered adapter that has not been excluded, so a single transaction can span the whole adapter
stack without reaching into each adapter individually.

| Name                 | Description                                                |
|----------------------|------------------------------------------------------------|
| `begin(): static`    | starts a transaction on every non-excluded adapter         |
| `commit(): static`   | writes the queued messages on every non-excluded adapter   |
| `rollback(): static` | discards the queued messages on every non-excluded adapter |

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter1 = new Stream('/logs/first-log.log');
$adapter2 = new Stream('/remote/second-log.log');

$logger = new Logger(
    'messages',
    [
        'local'  => $adapter1,
        'remote' => $adapter2,
    ]
);

$logger->begin();

$logger->error('Something happened');
$logger->info('Processing complete');

$logger->commit();
```

Both messages are queued on the `local` and `remote` adapters while the transaction is open, then written to both log
files when `commit()` is called. Call `rollback()` in place of `commit()` to discard the queued messages instead of
writing them. Each method returns the logger instance, so the calls can be chained.

Calling `begin()` while a transaction is already open throws `Phalcon\Logger\Exceptions\TransactionAlreadyActive`.

### Capping the Transaction Queue

By default the transaction queue holds every message between `begin()` and `commit()`. In long-running processes that batch many messages per transaction this grows without bound. Call `setQueueLimit()` on the adapter to keep only the most recent N items; the oldest is dropped FIFO before each new `add()` call.

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter = new Stream('/var/log/application.log');
$adapter->setQueueLimit(1000);

$logger = new Logger('messages', ['file' => $adapter]);

$adapter->begin();

for ($i = 0; $i < 5000; $i++) {
    $logger->info('record ' . $i);
}

$adapter->commit();
// At commit() the queue holds the most recent 1000 messages;
// the older 4000 were evicted FIFO during add().
```

The default value `0` preserves the original unbounded behavior. `getQueueLimit()` returns the current cap. `rollback()` continues to drop the queue regardless of the cap.

## Message Formatting

This component makes use of `formatters` to format messages before sending them to the backend. The formatters available
are:

| Adapter                                                | Description                                  |
|--------------------------------------------------------|----------------------------------------------|
| [Phalcon\Logger\Formatter\Line][logger-formatter-line] | Formats the message on a single line of text |
| [Phalcon\Logger\Formatter\Json][logger-formatter-json] | Formats the message in a JSON string         |

### Line Formatter

Formats the messages using a one-line string. The default logging format is:

```bash
[%date%][%level%] %message%
```

#### Message Format

If the default format of the message does not fit the needs of your application you can change it using the
`setFormat()` method. The log format variables allowed are:

| Variable    | Description                                 |
|-------------|---------------------------------------------|
| `%message%` | The message itself is expected to be logged |
| `%date%`    | Date the message was added                  |
| `%level%`   | Lowercase string with message level         |

The following example demonstrates how to change the message format:

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;
use Phalcon\Logger\Formatter\Line;

$formatter = new Line('[%level%] - [%date%] - %message%');
$adapter   = new Stream('/storage/logs/main.log');

$adapter->setFormatter($formatter);

$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$logger->error('Something went wrong');
```

which produces:

```bash
[alert] - [Tue, 25 Dec 18 12:13:14 -0400] - Something went wrong
```

If you do not want to use the constructor to change the message, you can always use the `setFormat()` on the formatter:

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;
use Phalcon\Logger\Formatter\Line;

$formatter = new Line();
$formatter->setFormat('[%level%] - [%date%] - %message%');

$adapter = new Stream('/storage/logs/main.log');

$adapter->setFormatter($formatter);

$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$logger->error('Something went wrong');
```

#### Date Format

The default date format is:

```bash
"D, d M y H:i:s O"
```

If the default format of the message does not fit the needs of your application you can change it using the
`setDateFormat()` method. The method accepts a string with characters that correspond to date formats. For all available
formats, please consult [this page][date-formats].

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;
use Phalcon\Logger\Formatter\Line;

$formatter = new Line();
$formatter->setDateFormat('Ymd-His');

$adapter = new Stream('/storage/logs/main.log');

$adapter->setFormatter($formatter);

$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$logger->error('Something went wrong'); 
```

which produces:

```bash
[error] - [20181225-121314] - Something went wrong
```

### JSON Formatter

Formats the messages returning a JSON string:

```json
{
    "level"     : "Level of the message",
    "message"   : "The message",
    "timestamp" : "The date as defined in the date format"
}
```

!!! info "NOTE"

    The `format()` method encodes JSON with the following options by default (79):
    - `JSON_HEX_TAG`
    - `JSON_HEX_APOS`
    - `JSON_HEX_AMP`
    - `JSON_HEX_QUOT`
    - `JSON_UNESCAPED_SLASHES`
    - `JSON_THROW_ON_ERROR`

#### Date Format

The default date format is:

```bash
"D, d M y H:i:s O"
```

If the default format of the message does not fit the needs of your application you can change it using the
`setDateFormat()` method. The method accepts a string with characters that correspond to date formats. For all available
formats, please consult [this page][date-formats].

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;
use Phalcon\Logger\Formatter\Line;

$formatter = new Line();
$formatter->setDateFormat('Ymd-His');

$adapter = new Stream('/storage/logs/main.log');
$adapter->setFormatter($formatter);

$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$logger->error('Something went wrong');
```

which produces:

```json
{
    "level"     : "error",
    "message"   : "Something went wrong",
    "timestamp" : "20181225-121314"
}
```

### Custom Formatter

The [Phalcon\Logger\Formatter\FormatterInterface][logger-formatter-formatterinterface] interface must be implemented in
order to create your own formatter or extend the existing ones. Additionally, you can reuse
the [Phalcon\Logger\Formatter\AbstractFormatter][logger-formatter-abstractformatter] abstract class.

## Interpolation

The logger also supports interpolation. There are times that you might need to inject additional text in your logging
messages; text that is dynamically created by your application. This can be easily achieved by sending an array as the
second parameter of the logging method (i.e. `error`, `info`, `alert` etc.). The array holds keys and values, where the
key is the placeholder in the message and the value is what will be injected in the message.

The following example demonstrates interpolation by injecting into the message the parameter "framework" and "secs".

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter = new Stream('/storage/logs/main.log');
$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$message = '%framework% executed the "Hello World" test in %secs% second(s)';
$context = [
    'framework' => 'Phalcon',
    'secs'      => 1,
];

$logger->info($message, $context);
```

!!! warning "WARNING"

    At the moment, changing the interpolation placeholders is not available. We will introduce this feature in future versions of Phalcon.

## Item

The formatter classes above accept a [Phalcon\Logger\Item][logger-item] object. The object contains all the necessary
data required for the logging process. It is used as a transport of data from the logger to the formatter.

!!! warning "WARNING"

    In v5 the object now accepts a `\DateTimeImmutable` object as the `$dateTime` parameter

## Examples

### Stream

Logging to a file:

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter = new Stream('/storage/logs/main.log');
$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

// Log to all adapters
$logger->error('Something went wrong');
```

The stream logger writes messages to a valid registered stream in PHP. A list of streams is
available [here][stream-wrappers]. Logging to a stream

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter = new Stream('php://stderr');
$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$logger->error('Something went wrong');
```

### Syslog

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Syslog;

// Setting identity/mode/facility
$adapter = new Syslog(
    'ident-name',
    [
        'option'   => LOG_NDELAY,
        'facility' => LOG_MAIL,
    ]
);

$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$logger->error('Something went wrong');
```

### Noop

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Noop;

$adapter = new Noop('nothing');
$logger  = new Logger(
    'messages',
    [
        'main' => $adapter,
    ]
);

$logger->error('Something went wrong');
```

### Custom Adapters

The [Phalcon\Logger\AdapterInterface][logger-adapter-adapterinterface] interface must be implemented in order to create
your own logger adapters or extend the existing ones. You can also take advantage of the functionality
in [Phalcon\Logger\Adapter\AbstractAdapter][logger-adapter-abstractadapter] abstract class.

### Abstract Classes

There are three abstract classes that offer useful functionality when creating custom objects:

- [Phalcon\Logger\AbstractLogger][logger-abstractlogger]
- [Phalcon\Logger\Adapter\AbstractAdapter][logger-adapter-abstractadapter]
- [Phalcon\Logger\Formatter\AbstractFormatter][logger-formatter-abstractformatter].

## Dependency Injection

You can register as many loggers as you want in the [Phalcon\Di\FactoryDefault][factorydefault] container. An example of
the registration of the service as well as accessing it is below:

```php
<?php

use Phalcon\Di\Di;
use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$container = new Di();

$container->set(
    'logger',
    function () {
        $adapter = new Stream('/storage/logs/main.log');
        $logger  = new Logger(
            'messages',
            [
                'main' => $adapter,
            ]
        );

        return $logger;
    }
);

// accessing it later:
$logger = $container->getShared('logger');

```

## PSR-3

[Phalcon\Logger\Logger][logger-logger] implements methods that are in line with [PSR-3][psr-3] but does not implement
`Psr\Log\LoggerInterface` directly. The [phalcon/bridge-psr3][bridge-psr3] package bridges the two standards in both
directions.

- Requires PHP 8.1 or later
- Works with the Phalcon C extension or the `phalcon/phalcon` package
- Targets `psr/log` (PSR-3) version 3

Install the package with composer:

```sh
composer require phalcon/bridge-psr3
```

The package provides two classes, one for each direction.

### Phalcon Logger as a PSR-3 Logger

`Phalcon\Bridge\Psr3\Logger` is a `Psr\Log\LoggerInterface` backed by Phalcon logging adapters. Use it when a component
requires a PSR-3 logger and the output needs to pass through Phalcon. The constructor matches
[Phalcon\Logger\Logger][logger-logger]: a name and an array of named adapters.

```php
<?php

use Phalcon\Bridge\Psr3\Logger;
use Phalcon\Logger\Adapter\Stream;

$logger = new Logger(
    'application',
    [
        'main' => new Stream('/storage/logs/application.log'),
    ]
);

// $logger is a Psr\Log\LoggerInterface
$logger->info('Order placed');
$logger->error('Payment gateway timed out');
```

The returned object can be passed to any consumer that type-hints `Psr\Log\LoggerInterface`.

### PSR-3 Logger as a Phalcon Adapter

`Phalcon\Bridge\Psr3\Adapter` is a Phalcon log adapter that forwards every message to a wrapped
`Psr\Log\LoggerInterface`. Use it when a PSR-3 logger already exists, such as Monolog, and it needs to act as a Phalcon
logging back-end. Register it on a [Phalcon\Logger\Logger][logger-logger] like any other adapter.

```php
<?php

use Monolog\Logger as Monolog;
use Phalcon\Bridge\Psr3\Adapter;
use Phalcon\Logger\Logger;

$psr = new Monolog('application');

$logger = new Logger(
    'application',
    [
        'psr' => new Adapter($psr),
    ]
);

// The message is forwarded to the PSR-3 logger
$logger->warning('Disk space is low');
```

The result is a [Phalcon\Logger\Logger][logger-logger], so it can be injected wherever Phalcon expects a logger, such as
the DataMapper profiler.

Phalcon level names map to the matching PSR-3 levels. The two Phalcon-only levels, `CUSTOM` (`8`) and `TRACE` (`9`), are
forwarded to the PSR-3 `debug` level, because PSR-3 defines no equivalent.

## Contracts

The canonical interfaces for this component live in the `Phalcon\Contracts\Logger` namespace, with the `Interface`
suffix dropped. `Phalcon\Logger\LoggerInterface`, `Phalcon\Logger\Adapter\AdapterInterface`, and
`Phalcon\Logger\Formatter\FormatterInterface` remain available: each now extends its contract and is deprecated.
Existing implementations and type hints keep working unchanged; new code should target the contracts.

| Deprecated interface                          | Canonical contract                             |
|-----------------------------------------------|------------------------------------------------|
| `Phalcon\Logger\LoggerInterface`              | `Phalcon\Contracts\Logger\Logger`              |
| `Phalcon\Logger\Adapter\AdapterInterface`     | `Phalcon\Contracts\Logger\Adapter\Adapter`     |
| `Phalcon\Logger\Formatter\FormatterInterface` | `Phalcon\Contracts\Logger\Formatter\Formatter` |

## Exceptions

Any exceptions thrown in the Logger component will be of type [Phalcon\Logger\Exception][logger-exception]. You can use
this exception to selectively catch exceptions thrown only from this component.

```php
<?php

use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;
use Phalcon\Logger\Exception;

try {
    $adapter = new Stream('/storage/logs/main.log');
    $logger  = new Logger(
        'messages',
        [
            'main' => $adapter,
        ]
    );

    $logger->error('Something went wrong');
} catch (Exception $ex) {
    echo $ex->getMessage();
}
```

### Granular Exceptions

As of 5.14 the component raises granular subclasses of `Phalcon\Logger\Exception` so callers can catch a specific
failure mode. Existing `catch (Phalcon\Logger\Exception $e)` blocks continue to work unchanged.

| Class                                                 | Parent                     | Thrown when                                                                        |
|-------------------------------------------------------|----------------------------|------------------------------------------------------------------------------------|
| `Phalcon\Logger\Exceptions\AdapterNotFound`           | `Phalcon\Logger\Exception` | A named adapter is requested from the logger but has not been registered.          |
| `Phalcon\Logger\Exceptions\DeserializationFailed`     | `Phalcon\Logger\Exception` | A formatter cannot unserialize a previously serialized log item.                   |
| `Phalcon\Logger\Exceptions\NoAdaptersConfigured`      | `Phalcon\Logger\Exception` | The logger is constructed without any adapters and a write is attempted.           |
| `Phalcon\Logger\Exceptions\SerializationFailed`       | `Phalcon\Logger\Exception` | A formatter cannot serialize a log item to its wire format.                        |
| `Phalcon\Logger\Exceptions\TransactionAlreadyActive`  | `Phalcon\Logger\Exception` | `begin()` is called while a transaction is already in progress.                    |
| `Phalcon\Logger\Exceptions\TransactionNotActive`      | `Phalcon\Logger\Exception` | `commit()` or `rollback()` is called without an active transaction.                |
| `Phalcon\Logger\Adapter\Exceptions\FileOpenFailed`    | `Phalcon\Logger\Exception` | The `Stream` adapter cannot open the target file for writing.                      |
| `Phalcon\Logger\Adapter\Exceptions\InvalidStreamMode` | `Phalcon\Logger\Exception` | The `Stream` adapter is configured with a file-mode that is not append-compatible. |
| `Phalcon\Logger\Adapter\Exceptions\SyslogOpenFailed`  | `Phalcon\Logger\Exception` | The `Syslog` adapter cannot open the syslog connection.                            |

[date-formats]: https://www.php.net/manual/en/function.date.php

[fifo]: https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)

[config]: api/phalcon_config.md/#configconfig

[factorydefault]: api/phalcon_di.md/#difactorydefault

[logger-logger]: api/phalcon_logger.md#loggerlogger

[logger-abstractlogger]: api/phalcon_logger.md#loggerabstractlogger

[logger-adapter-noop]: api/phalcon_logger.md#loggeradapternoop

[logger-adapter-stream]: api/phalcon_logger.md#loggeradapterstream

[logger-adapter-syslog]: api/phalcon_logger.md#loggeradaptersyslog

[logger-loggerfactory]: api/phalcon_logger.md#loggerloggerfactory

[logger-adapterfactory]: api/phalcon_logger.md#loggeradapterfactory

[logger-formatter-line]: api/phalcon_logger.md#loggerformatterline

[logger-formatter-json]: api/phalcon_logger.md#loggerformatterjson

[logger-formatter-formatterinterface]: api/phalcon_logger.md#loggerformatterformatterinterface

[logger-adapter-adapterinterface]: api/phalcon_logger.md#loggeradapteradapterinterface

[logger-formatter-abstractformatter]: api/phalcon_logger.md#loggerformatterabstractformatter

[logger-adapter-abstractadapter]: api/phalcon_logger.md#loggeradapterabstractadapter

[logger-exception]: api/phalcon_logger.md#loggerexception

[logger-item]: api/phalcon_logger.md#loggeritem

[bridge-psr3]: https://github.com/phalcon/bridge-psr3

[psr-3]: https://www.php-fig.org/psr/psr-3/

[stream-wrappers]: https://php.net/manual/en/wrappers.php
