---
title: "Phalcon Logger"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Logger

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Logger\AbstractLogger

Abstract

Abstract Logger Class

Abstract logger class, providing common functionality. A formatter interface
is available as well as an adapter one. Adapters can be created easily using
the built in AdapterFactory. A LoggerFactory is also available that allows
developers to create new instances of the Logger or load them from config
files (see Phalcon\Config\Config object).

@property AdapterInterface[]     $adapters
@property array&lt;array-key, bool> $excluded
@property int                    $logLevel
@property string                 $name
@property DateTimeZone           $timezone

- **`Phalcon\Logger\AbstractLogger`**
  - [`Phalcon\Logger\Logger`](#loggerlogger)

`DateTimeZone` · `Exception` · `Phalcon\Contracts\Logger\LoggerTypes` · `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Exceptions\AdapterNotFound` · `Phalcon\Logger\Exceptions\NoAdaptersConfigured` · `Phalcon\Time\Clock\ClockInterface` · `Phalcon\Time\Clock\SystemClock`

### Method Summary

- `public __construct(string $name, array $adapters = [], DateTimeZone|null $timezone = null, ClockInterface|null $clock = null)` — Constructor.

- `public addAdapter(string $name, AdapterInterface $adapter): static` — Add an adapter to the stack. For processing we use FIFO

- `public begin(): static` — Starts a transaction on every (non-excluded) adapter in the stack.

- `public commit(): static` — Commits the transaction on every (non-excluded) adapter in the stack.

- `public excludeAdapters(array $adapters = []): static` — Exclude certain adapters.

- `public getAdapter(string $name): AdapterInterface` — Returns an adapter from the stack

- `public getAdapters(): array` — Returns the adapter stack array

- `public getLogLevel(): int` — Returns the log level

- `public getName(): string` — Returns the name of the logger

- `public removeAdapter(string $name): static` — Removes an adapter from the stack

- `public rollback(): static` — Rolls back the transaction on every (non-excluded) adapter in the stack.

- `public setAdapters(array $adapters): static` — Sets the adapters stack overriding what is already there

- `public setLogLevel(int $level): static` — Sets the minimum log level for the logger.

- `protected addMessage(int $level, string $message, array $context = []): bool` — Adds a message to each handler for processing

- `protected getLevelNumber(mixed $level): int` — Converts the level from string/word to an integer

- `protected getLevels(): array` — Returns an array of log levels with integer to string conversion

### Properties

- `protected array $adapters = []` — The adapter stack

- `protected ClockInterface $clock` — Clock used to timestamp log items

- `protected array $excluded = []` — The excluded adapters for this log process

- `protected int $logLevel = Enum::CUSTOM`

- `protected string $name`

- `protected DateTimeZone $timezone`

### Methods

<h4 id="loggerabstractlogger-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    array $adapters = [],
    DateTimeZone|null $timezone = null,
    ClockInterface|null $clock = null
);
```

Constructor.

<h4 id="loggerabstractlogger-addadapter"><code>addAdapter()</code></h4>

```php
public function addAdapter(
    string $name,
    AdapterInterface $adapter
): static;
```

Add an adapter to the stack. For processing we use FIFO

<h4 id="loggerabstractlogger-begin"><code>begin()</code></h4>

```php
public function begin(): static;
```

Starts a transaction on every (non-excluded) adapter in the stack.

<h4 id="loggerabstractlogger-commit"><code>commit()</code></h4>

```php
public function commit(): static;
```

Commits the transaction on every (non-excluded) adapter in the stack.

<h4 id="loggerabstractlogger-excludeadapters"><code>excludeAdapters()</code></h4>

```php
public function excludeAdapters( array $adapters = [] ): static;
```

Exclude certain adapters.

<h4 id="loggerabstractlogger-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter( string $name ): AdapterInterface;
```

Returns an adapter from the stack

<h4 id="loggerabstractlogger-getadapters"><code>getAdapters()</code></h4>

```php
public function getAdapters(): array;
```

Returns the adapter stack array

<h4 id="loggerabstractlogger-getloglevel"><code>getLogLevel()</code></h4>

```php
public function getLogLevel(): int;
```

Returns the log level

<h4 id="loggerabstractlogger-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the name of the logger

<h4 id="loggerabstractlogger-removeadapter"><code>removeAdapter()</code></h4>

```php
public function removeAdapter( string $name ): static;
```

Removes an adapter from the stack

<h4 id="loggerabstractlogger-rollback"><code>rollback()</code></h4>

```php
public function rollback(): static;
```

Rolls back the transaction on every (non-excluded) adapter in the stack.

<h4 id="loggerabstractlogger-setadapters"><code>setAdapters()</code></h4>

```php
public function setAdapters( array $adapters ): static;
```

Sets the adapters stack overriding what is already there

<h4 id="loggerabstractlogger-setloglevel"><code>setLogLevel()</code></h4>

```php
public function setLogLevel( int $level ): static;
```

Sets the minimum log level for the logger.

An unknown level is not rejected: it is stored as CUSTOM, which sits
between DEBUG and TRACE in the ordering, so the threshold becomes
"everything except TRACE".

<h4 id="loggerabstractlogger-addmessage"><code>addMessage()</code></h4>

```php
protected function addMessage(
    int $level,
    string $message,
    array $context = []
): bool;
```

Adds a message to each handler for processing

<h4 id="loggerabstractlogger-getlevelnumber"><code>getLevelNumber()</code></h4>

```php
protected function getLevelNumber( mixed $level ): int;
```

Converts the level from string/word to an integer

<h4 id="loggerabstractlogger-getlevels"><code>getLevels()</code></h4>

```php
protected function getLevels(): array;
```

Returns an array of log levels with integer to string conversion


## Logger\AdapterFactory

Class

Factory used to create adapters used for Logging

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/6.0/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Logger\AdapterFactory`**

`Exception` · `Phalcon\Contracts\Logger\LoggerTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Adapter\Noop` · `Phalcon\Logger\Adapter\Stream` · `Phalcon\Logger\Adapter\Syslog`

### Method Summary

- `public __construct(array $services = [])` — AdapterFactory constructor.

- `public newInstance(string $name, string $fileName, array $options = []): AdapterInterface` — Create a new instance of the adapter

- `protected getExceptionClass(): string`

- `protected getServices(): array` — Returns the available adapters

### Methods

<h4 id="loggeradapterfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

AdapterFactory constructor.

<h4 id="loggeradapterfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
    string $name,
    string $fileName,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<h4 id="loggeradapterfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="loggeradapterfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters


## Logger\Adapter\AbstractAdapter

Abstract

Class AbstractAdapter

- **`Phalcon\Logger\Adapter\AbstractAdapter`** - implements [`Phalcon\Logger\Adapter\AdapterInterface`](#loggeradapteradapterinterface)
  - [`Phalcon\Logger\Adapter\Noop`](#loggeradapternoop)
  - [`Phalcon\Logger\Adapter\Stream`](#loggeradapterstream)
  - [`Phalcon\Logger\Adapter\Syslog`](#loggeradaptersyslog)

`Phalcon\Contracts\Logger\LoggerTypes` · `Phalcon\Logger\Exceptions\DeserializationFailed` · `Phalcon\Logger\Exceptions\SerializationFailed` · `Phalcon\Logger\Exceptions\TransactionAlreadyActive` · `Phalcon\Logger\Exceptions\TransactionNotActive` · `Phalcon\Logger\Formatter\FormatterInterface` · `Phalcon\Logger\Formatter\Line` · `Phalcon\Logger\Item`

### Method Summary

- `public __destruct()` — Destructor cleanup

- `public __serialize(): array`

- `public __unserialize(array $data): void`

- `public add(Item $item): AdapterInterface` — Adds a message to the queue

- `public begin(): AdapterInterface` — Starts a transaction

- `public close(): bool` — Closes the logger

- `public commit(): AdapterInterface` — Commits the internal transaction

- `public getFormatter(): FormatterInterface` — Return the formatter used

- `public getQueueLimit(): int` — Returns the configured transaction-queue cap (0 = unlimited)

- `public inTransaction(): bool` — Returns the whether the logger is currently in an active transaction or

- `public process(Item $item): void` — Processes the message in the adapter

- `public rollback(): AdapterInterface` — Rollbacks the internal transaction

- `public setFormatter(FormatterInterface $formatter): AdapterInterface` — Sets the message formatter

- `public setQueueLimit(int $queueLimit): AdapterInterface` — Sets the maximum number of items retained in the transaction

- `protected getFormattedItem(Item $item): string` — Returns the formatted item

### Properties

- `protected class-string<FormatterInterface> $defaultFormatter = Line::class` — Name of the default formatter class

- `protected FormatterInterface|null $formatter = null` — Formatter

- `protected bool $inTransaction = false` — Tells if there is an active transaction or not

- `protected array $queue = []` — Array with messages queued in the transaction

- `protected int $queueLimit = 0` — Maximum number of items retained in the transaction queue.
  0 (default) keeps the original unbounded behavior; a positive
  value drops the oldest queued item FIFO before a new one is
  appended in add().

### Methods

<h4 id="loggeradapterabstractadapter-__destruct"><code>__destruct()</code></h4>

```php
public function __destruct();
```

Destructor cleanup

Throwing from a destructor is fatal during script shutdown, so an open
transaction is auto-committed here (flushing the queued items) rather
than throwing.

<h4 id="loggeradapterabstractadapter-__serialize"><code>__serialize()</code></h4>

```php
public function __serialize(): array;
```

<h4 id="loggeradapterabstractadapter-__unserialize"><code>__unserialize()</code></h4>

```php
public function __unserialize( array $data ): void;
```

<h4 id="loggeradapterabstractadapter-add"><code>add()</code></h4>

```php
public function add( Item $item ): AdapterInterface;
```

Adds a message to the queue

<h4 id="loggeradapterabstractadapter-begin"><code>begin()</code></h4>

```php
public function begin(): AdapterInterface;
```

Starts a transaction

<h4 id="loggeradapterabstractadapter-close"><code>close()</code></h4>

```php
abstract public function close(): bool;
```

Closes the logger

<h4 id="loggeradapterabstractadapter-commit"><code>commit()</code></h4>

```php
public function commit(): AdapterInterface;
```

Commits the internal transaction

<h4 id="loggeradapterabstractadapter-getformatter"><code>getFormatter()</code></h4>

```php
public function getFormatter(): FormatterInterface;
```

Return the formatter used

<h4 id="loggeradapterabstractadapter-getqueuelimit"><code>getQueueLimit()</code></h4>

```php
public function getQueueLimit(): int;
```

Returns the configured transaction-queue cap (0 = unlimited)

<h4 id="loggeradapterabstractadapter-intransaction"><code>inTransaction()</code></h4>

```php
public function inTransaction(): bool;
```

Returns the whether the logger is currently in an active transaction or
not

<h4 id="loggeradapterabstractadapter-process"><code>process()</code></h4>

```php
abstract public function process( Item $item ): void;
```

Processes the message in the adapter

<h4 id="loggeradapterabstractadapter-rollback"><code>rollback()</code></h4>

```php
public function rollback(): AdapterInterface;
```

Rollbacks the internal transaction

<h4 id="loggeradapterabstractadapter-setformatter"><code>setFormatter()</code></h4>

```php
public function setFormatter( FormatterInterface $formatter ): AdapterInterface;
```

Sets the message formatter

<h4 id="loggeradapterabstractadapter-setqueuelimit"><code>setQueueLimit()</code></h4>

```php
public function setQueueLimit( int $queueLimit ): AdapterInterface;
```

Sets the maximum number of items retained in the transaction
queue. 0 disables the cap (the default; preserves the original
unbounded behavior).

<h4 id="loggeradapterabstractadapter-getformatteditem"><code>getFormattedItem()</code></h4>

```php
protected function getFormattedItem( Item $item ): string;
```

Returns the formatted item


## Logger\Adapter\AdapterInterface

Interface

Phalcon\Logger\AdapterInterface

Interface for Phalcon\Logger adapters

- [`Phalcon\Contracts\Logger\Adapter\Adapter`](/6.0/api/phalcon_contracts/#contractsloggeradapteradapter)
  - **`Phalcon\Logger\Adapter\AdapterInterface`**

`Phalcon\Contracts\Logger\Adapter\Adapter`


## Logger\Adapter\Exceptions\FileOpenFailed

Class

- `\Exception`
  - [`Phalcon\Logger\Exception`](#loggerexception)
    - **`Phalcon\Logger\Adapter\Exceptions\FileOpenFailed`**

`Phalcon\Logger\Exception`

### Method Summary

- `public __construct(string $name, string $mode)`

### Methods

<h4 id="loggeradapterexceptionsfileopenfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    string $mode
);
```


## Logger\Adapter\Exceptions\InvalidStreamMode

Class

- `\Exception`
  - [`Phalcon\Logger\Exception`](#loggerexception)
    - **`Phalcon\Logger\Adapter\Exceptions\InvalidStreamMode`**

`Phalcon\Logger\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="loggeradapterexceptionsinvalidstreammode-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Logger\Adapter\Exceptions\SyslogOpenFailed

Class

- `\Exception`
  - [`Phalcon\Logger\Exception`](#loggerexception)
    - **`Phalcon\Logger\Adapter\Exceptions\SyslogOpenFailed`**

`Phalcon\Logger\Exception`

### Method Summary

- `public __construct(string $name, int $facility)`

### Methods

<h4 id="loggeradapterexceptionssyslogopenfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    int $facility
);
```


## Logger\Adapter\Noop

Class

Class Noop

@package Phalcon\Logger\Adapter

- [`Phalcon\Logger\Adapter\AbstractAdapter`](#loggeradapterabstractadapter)
  - **`Phalcon\Logger\Adapter\Noop`**

`Phalcon\Logger\Item`

### Method Summary

- `public close(): bool` — Closes the stream

- `public process(Item $item): void` — Processes the message i.e. writes it to the file

### Methods

<h4 id="loggeradapternoop-close"><code>close()</code></h4>

```php
public function close(): bool;
```

Closes the stream

<h4 id="loggeradapternoop-process"><code>process()</code></h4>

```php
public function process( Item $item ): void;
```

Processes the message i.e. writes it to the file


## Logger\Adapter\Stream

Class

Phalcon\Logger\Adapter\Stream

Adapter to store logs in plain text files

```php
$logger = new \Phalcon\Logger\Adapter\Stream('app/logs/test.log');

$logger->log('This is a message');
$logger->log(\Phalcon\Logger\Enum::ERROR, 'This is an error');
$logger->error('This is another error');

$logger->close();
```

@property resource|null $handler
@property string        $mode
@property string        $name

- [`Phalcon\Logger\Adapter\AbstractAdapter`](#loggeradapterabstractadapter)
  - **`Phalcon\Logger\Adapter\Stream`**

`Phalcon\Contracts\Logger\LoggerTypes` · `Phalcon\Logger\Adapter\Exceptions\FileOpenFailed` · `Phalcon\Logger\Adapter\Exceptions\InvalidStreamMode` · `Phalcon\Logger\Item` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

- `public __construct(string $name, array $options = [])` — Stream constructor.

- `public close(): bool` — Closes the stream

- `public getName(): string` — Stream name

- `public process(Item $item): void` — Processes the message i.e. writes it to the file

### Properties

- `protected resource|null $handler = null` — Stream handler resource

- `protected string $mode = "ab"` — The file open mode. Defaults to 'ab'

- `protected string $name`

### Methods

<h4 id="loggeradapterstream-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    array $options = []
);
```

Stream constructor.

<h4 id="loggeradapterstream-close"><code>close()</code></h4>

```php
public function close(): bool;
```

Closes the stream

<h4 id="loggeradapterstream-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Stream name

<h4 id="loggeradapterstream-process"><code>process()</code></h4>

```php
public function process( Item $item ): void;
```

Processes the message i.e. writes it to the file


## Logger\Adapter\Syslog

Class

Class Syslog

@property string $defaultFormatter
@property int    $facility
@property string $name
@property bool   $opened
@property int    $option

- [`Phalcon\Logger\Adapter\AbstractAdapter`](#loggeradapterabstractadapter)
  - **`Phalcon\Logger\Adapter\Syslog`**

`Phalcon\Contracts\Logger\LoggerTypes` · `Phalcon\Logger\Adapter\Exceptions\SyslogOpenFailed` · `Phalcon\Logger\Enum` · `Phalcon\Logger\Item`

### Method Summary

- `public __construct(string $name, array $options = [])` — Syslog constructor.

- `public close(): bool` — Closes the logger

- `public process(Item $item): void` — Processes the message i.e. writes it to the syslog

- `protected openlog(string $ident, int $option, int $facility): bool` — Open connection to system logger

### Properties

- `protected int $facility = 0`

- `protected string $name`

- `protected bool $opened = false`

- `protected int $option = 0`

### Methods

<h4 id="loggeradaptersyslog-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    array $options = []
);
```

Syslog constructor.

<h4 id="loggeradaptersyslog-close"><code>close()</code></h4>

```php
public function close(): bool;
```

Closes the logger

<h4 id="loggeradaptersyslog-process"><code>process()</code></h4>

```php
public function process( Item $item ): void;
```

Processes the message i.e. writes it to the syslog

<h4 id="loggeradaptersyslog-openlog"><code>openlog()</code></h4>

```php
protected function openlog(
    string $ident,
    int $option,
    int $facility
): bool;
```

Open connection to system logger


## Logger\Enum

Class

Log Level Enum constants

- **`Phalcon\Logger\Enum`**

### Constants

- `const int ALERT = 2`

- `const int CRITICAL = 1`

- `const int CUSTOM = 8` — Default threshold and fallback sink. It sits between DEBUG (7) and
  TRACE (9) in the ordering, so the default log level excludes TRACE.
  It is also the fallback for unknown message levels and invalid
  setLogLevel() values.

- `const int DEBUG = 7`

- `const int EMERGENCY = 0`

- `const int ERROR = 3`

- `const int INFO = 6`

- `const int NOTICE = 5`

- `const int TRACE = 9`

- `const int WARNING = 4`


## Logger\Exception

Class

Phalcon\Logger\Exception

Exceptions thrown in Phalcon\Logger will use this class

- `\Exception`
  - **`Phalcon\Logger\Exception`**
    - [`Phalcon\Logger\Adapter\Exceptions\FileOpenFailed`](#loggeradapterexceptionsfileopenfailed)
    - [`Phalcon\Logger\Adapter\Exceptions\InvalidStreamMode`](#loggeradapterexceptionsinvalidstreammode)
    - [`Phalcon\Logger\Adapter\Exceptions\SyslogOpenFailed`](#loggeradapterexceptionssyslogopenfailed)
    - [`Phalcon\Logger\Exceptions\AdapterNotFound`](#loggerexceptionsadapternotfound)
    - [`Phalcon\Logger\Exceptions\DeserializationFailed`](#loggerexceptionsdeserializationfailed)
    - [`Phalcon\Logger\Exceptions\NoAdaptersConfigured`](#loggerexceptionsnoadaptersconfigured)
    - [`Phalcon\Logger\Exceptions\SerializationFailed`](#loggerexceptionsserializationfailed)
    - [`Phalcon\Logger\Exceptions\TransactionAlreadyActive`](#loggerexceptionstransactionalreadyactive)
    - [`Phalcon\Logger\Exceptions\TransactionNotActive`](#loggerexceptionstransactionnotactive)


## Logger\Exceptions\AdapterNotFound

Class

- `\Exception`
  - [`Phalcon\Logger\Exception`](#loggerexception)
    - **`Phalcon\Logger\Exceptions\AdapterNotFound`**

`Phalcon\Logger\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="loggerexceptionsadapternotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Logger\Exceptions\DeserializationFailed

Class

- `\Exception`
  - [`Phalcon\Logger\Exception`](#loggerexception)
    - **`Phalcon\Logger\Exceptions\DeserializationFailed`**

`Phalcon\Logger\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="loggerexceptionsdeserializationfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Logger\Exceptions\NoAdaptersConfigured

Class

- `\Exception`
  - [`Phalcon\Logger\Exception`](#loggerexception)
    - **`Phalcon\Logger\Exceptions\NoAdaptersConfigured`**

`Phalcon\Logger\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="loggerexceptionsnoadaptersconfigured-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Logger\Exceptions\SerializationFailed

Class

- `\Exception`
  - [`Phalcon\Logger\Exception`](#loggerexception)
    - **`Phalcon\Logger\Exceptions\SerializationFailed`**

`Phalcon\Logger\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="loggerexceptionsserializationfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Logger\Exceptions\TransactionAlreadyActive

Class

- `\Exception`
  - [`Phalcon\Logger\Exception`](#loggerexception)
    - **`Phalcon\Logger\Exceptions\TransactionAlreadyActive`**

`Phalcon\Logger\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="loggerexceptionstransactionalreadyactive-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Logger\Exceptions\TransactionNotActive

Class

- `\Exception`
  - [`Phalcon\Logger\Exception`](#loggerexception)
    - **`Phalcon\Logger\Exceptions\TransactionNotActive`**

`Phalcon\Logger\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="loggerexceptionstransactionnotactive-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Logger\Formatter\AbstractFormatter

Abstract

Class AbstractFormatter

- **`Phalcon\Logger\Formatter\AbstractFormatter`** - implements [`Phalcon\Logger\Formatter\FormatterInterface`](#loggerformatterformatterinterface)
  - [`Phalcon\Logger\Formatter\Json`](#loggerformatterjson)
  - [`Phalcon\Logger\Formatter\Line`](#loggerformatterline)

`Phalcon\Contracts\Logger\LoggerTypes` · `Phalcon\Logger\Item` · `Phalcon\Traits\Support\Helper\Str\InterpolateTrait` · `Stringable`

### Method Summary

- `public getDateFormat(): string`

- `public setDateFormat(string $format): void`

- `protected getFormattedDate(Item $item): string` — Returns the date formatted for the logger.

- `protected getInterpolatedMessage(Item $item, string $message): string` — Returns the interpolated message, replacing context placeholders.

- `protected stringifyContext(array $context): array` — Reduces the log context to the string map interpolation requires.

### Properties

- `protected string $dateFormat = "c"` — Default date format

- `protected string $interpolatorLeft = "%"`

- `protected string $interpolatorRight = "%"`

### Methods

<h4 id="loggerformatterabstractformatter-getdateformat"><code>getDateFormat()</code></h4>

```php
public function getDateFormat(): string;
```

<h4 id="loggerformatterabstractformatter-setdateformat"><code>setDateFormat()</code></h4>

```php
public function setDateFormat( string $format ): void;
```

<h4 id="loggerformatterabstractformatter-getformatteddate"><code>getFormattedDate()</code></h4>

```php
protected function getFormattedDate( Item $item ): string;
```

Returns the date formatted for the logger.

<h4 id="loggerformatterabstractformatter-getinterpolatedmessage"><code>getInterpolatedMessage()</code></h4>

```php
protected function getInterpolatedMessage(
    Item $item,
    string $message
): string;
```

Returns the interpolated message, replacing context placeholders.

<h4 id="loggerformatterabstractformatter-stringifycontext"><code>stringifyContext()</code></h4>

```php
protected function stringifyContext( array $context ): array;
```

Reduces the log context to the string map interpolation requires.

Log context is PSR-3 shaped, so its values are arbitrary, while
interpolation replaces a placeholder with a string. Anything that
cannot be expressed as one - an array, an object without
`__toString()` - substitutes as an empty string, so a placeholder is
never left dangling and a non-stringable value can never abort the
formatter mid-log.


## Logger\Formatter\FormatterInterface

Interface

Phalcon\Logger\FormatterInterface

This interface must be implemented by formatters in Phalcon\Logger

- [`Phalcon\Contracts\Logger\Formatter\Formatter`](/6.0/api/phalcon_contracts/#contractsloggerformatterformatter)
  - **`Phalcon\Logger\Formatter\FormatterInterface`**

`Phalcon\Contracts\Logger\Formatter\Formatter`


## Logger\Formatter\Json

Class

Formats messages using JSON encoding

- [`Phalcon\Logger\Formatter\AbstractFormatter`](#loggerformatterabstractformatter)
  - **`Phalcon\Logger\Formatter\Json`**

`JsonException` · `Phalcon\Logger\Item` · `Phalcon\Traits\Support\Helper\Json\EncodeTrait`

### Method Summary

- `public __construct(string $dateFormat = "c", string $interpolatorLeft = "%", string $interpolatorRight = "%")` — Json constructor.

- `public format(Item $item): string` — Applies a format to a message before sent it to the internal log

### Methods

<h4 id="loggerformatterjson-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $dateFormat = "c",
    string $interpolatorLeft = "%",
    string $interpolatorRight = "%"
);
```

Json constructor.

<h4 id="loggerformatterjson-format"><code>format()</code></h4>

```php
public function format( Item $item ): string;
```

Applies a format to a message before sent it to the internal log


## Logger\Formatter\Line

Class

Class Line

- [`Phalcon\Logger\Formatter\AbstractFormatter`](#loggerformatterabstractformatter)
  - **`Phalcon\Logger\Formatter\Line`**

`Exception` · `Phalcon\Logger\Item`

### Method Summary

- `public __construct(string $format = "[%date%][%level%] %message%", string $dateFormat = "c", string $interpolatorLeft = "%", string $interpolatorRight = "%")` — Line constructor.

- `public format(Item $item): string` — Applies a format to a message before sent it to the internal log

- `public getFormat(): string` — Return the format applied to each message

- `public setFormat(string $format): static` — Set the format applied to each message

### Properties

- `protected string $format = "[%date%][%level%] %message%"`

### Methods

<h4 id="loggerformatterline-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $format = "[%date%][%level%] %message%",
    string $dateFormat = "c",
    string $interpolatorLeft = "%",
    string $interpolatorRight = "%"
);
```

Line constructor.

<h4 id="loggerformatterline-format"><code>format()</code></h4>

```php
public function format( Item $item ): string;
```

Applies a format to a message before sent it to the internal log

<h4 id="loggerformatterline-getformat"><code>getFormat()</code></h4>

```php
public function getFormat(): string;
```

Return the format applied to each message

<h4 id="loggerformatterline-setformat"><code>setFormat()</code></h4>

```php
public function setFormat( string $format ): static;
```

Set the format applied to each message


## Logger\Item

Class

Phalcon\Logger\Item

Represents each item in a logging transaction

@property array&lt;string, mixed> $context
@property string               $message
@property int                  $level
@property string               $levelName
@property DateTimeImmutable    $dateTime

- **`Phalcon\Logger\Item`**

`DateTimeImmutable` · `Phalcon\Contracts\Logger\LoggerTypes`

### Method Summary

- `public __construct(string $message, string $levelName, int $level, DateTimeImmutable $dateTime, array $context = [])` — Item constructor.

- `public getContext(): array`

- `public getDateTime(): DateTimeImmutable`

- `public getLevel(): int`

- `public getLevelName(): string`

- `public getMessage(): string`

### Properties

- `protected array $context = []`

- `protected DateTimeImmutable $dateTime`

- `protected int $level`

- `protected string $levelName`

- `protected string $message`

### Methods

<h4 id="loggeritem-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $message,
    string $levelName,
    int $level,
    DateTimeImmutable $dateTime,
    array $context = []
);
```

Item constructor.

<h4 id="loggeritem-getcontext"><code>getContext()</code></h4>

```php
public function getContext(): array;
```

<h4 id="loggeritem-getdatetime"><code>getDateTime()</code></h4>

```php
public function getDateTime(): DateTimeImmutable;
```

<h4 id="loggeritem-getlevel"><code>getLevel()</code></h4>

```php
public function getLevel(): int;
```

<h4 id="loggeritem-getlevelname"><code>getLevelName()</code></h4>

```php
public function getLevelName(): string;
```

<h4 id="loggeritem-getmessage"><code>getMessage()</code></h4>

```php
public function getMessage(): string;
```


## Logger\Logger

Class

Phalcon Logger.

A logger, with various adapters and formatters. A formatter
interface is available as well as an adapter one. Adapters can be created
easily using the built-in AdapterFactory. A LoggerFactory is also available
that allows developers to create new instances of the Logger or load them
from config files (see Phalcon\Config\Config object).

- [`Phalcon\Logger\AbstractLogger`](#loggerabstractlogger)
  - **`Phalcon\Logger\Logger`** - implements [`Phalcon\Logger\LoggerInterface`](#loggerloggerinterface)

`Phalcon\Contracts\Logger\LoggerTypes`

### Method Summary

- `public alert(string $message, array $context = []): void` — Action must be taken immediately.

- `public critical(string $message, array $context = []): void` — Critical conditions.

- `public debug(string $message, array $context = []): void` — Detailed debug information.

- `public emergency(string $message, array $context = []): void` — System is unusable.

- `public error(string $message, array $context = []): void` — Runtime errors that do not require immediate action but should typically

- `public info(string $message, array $context = []): void` — Interesting events.

- `public log(mixed $level, string $message, array $context = []): void` — Logs with an arbitrary level.

- `public notice(string $message, array $context = []): void` — Normal but significant events.

- `public trace(string $message, array $context = []): void` — Extra-verbose diagnostic output.

- `public warning(string $message, array $context = []): void` — Exceptional occurrences that are not errors.

### Methods

<h4 id="loggerlogger-alert"><code>alert()</code></h4>

```php
public function alert(
    string $message,
    array $context = []
): void;
```

Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should
trigger the SMS alerts and wake you up.

<h4 id="loggerlogger-critical"><code>critical()</code></h4>

```php
public function critical(
    string $message,
    array $context = []
): void;
```

Critical conditions.

Example: Application component unavailable, unexpected exception.

<h4 id="loggerlogger-debug"><code>debug()</code></h4>

```php
public function debug(
    string $message,
    array $context = []
): void;
```

Detailed debug information.

<h4 id="loggerlogger-emergency"><code>emergency()</code></h4>

```php
public function emergency(
    string $message,
    array $context = []
): void;
```

System is unusable.

<h4 id="loggerlogger-error"><code>error()</code></h4>

```php
public function error(
    string $message,
    array $context = []
): void;
```

Runtime errors that do not require immediate action but should typically
be logged and monitored.

<h4 id="loggerlogger-info"><code>info()</code></h4>

```php
public function info(
    string $message,
    array $context = []
): void;
```

Interesting events.

Example: User logs in, SQL logs.

<h4 id="loggerlogger-log"><code>log()</code></h4>

```php
public function log(
    mixed $level,
    string $message,
    array $context = []
): void;
```

Logs with an arbitrary level.

An unknown level (a typo or an unmapped value) is not rejected; it maps
to the CUSTOM level and is logged, rather than raising an exception.

<h4 id="loggerlogger-notice"><code>notice()</code></h4>

```php
public function notice(
    string $message,
    array $context = []
): void;
```

Normal but significant events.

<h4 id="loggerlogger-trace"><code>trace()</code></h4>

```php
public function trace(
    string $message,
    array $context = []
): void;
```

Extra-verbose diagnostic output.

Use for high-frequency, fine-grained events such as raw socket frames,
HTTP response bodies, or internal state transitions that are too noisy
for DEBUG.

<h4 id="loggerlogger-warning"><code>warning()</code></h4>

```php
public function warning(
    string $message,
    array $context = []
): void;
```

Exceptional occurrences that are not errors.

Example: Use of deprecated APIs, poor use of an API, undesirable things
that are not necessarily wrong.


## Logger\LoggerFactory

Class

Factory creating logger objects

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
  - **`Phalcon\Logger\LoggerFactory`**

`DateTimeZone` · `Exception` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Logger\LoggerTypes` · `Phalcon\Factory\AbstractConfigFactory`

### Method Summary

- `public __construct(AdapterFactory $factory)` — Constructor

- `public load(mixed $config): Logger` — Factory to create an instance from a Config object

- `public newInstance(string $name, array $adapters = [], DateTimeZone|null $timezone = null): Logger` — Returns a Logger object

- `protected getExceptionClass(): string`

### Methods

<h4 id="loggerloggerfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( AdapterFactory $factory );
```

Constructor

<h4 id="loggerloggerfactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): Logger;
```

Factory to create an instance from a Config object

The adapter list lives under `options`, not at the top level.

<h4 id="loggerloggerfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
    string $name,
    array $adapters = [],
    DateTimeZone|null $timezone = null
): Logger;
```

Returns a Logger object

<h4 id="loggerloggerfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```


## Logger\LoggerInterface

Interface

Interface for Phalcon based logger objects.

- [`Phalcon\Contracts\Logger\Logger`](/6.0/api/phalcon_contracts/#contractsloggerlogger)
  - **`Phalcon\Logger\LoggerInterface`**

`Phalcon\Contracts\Logger\Logger`

Source: https://docs.phalcon.io/6.0/api/phalcon_logger/index.mdx
