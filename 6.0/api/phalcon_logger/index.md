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

@property AdapterInterface[] $adapters
@property array&lt;array-key, bool> $excluded
@property int                $logLevel
@property string             $name
@property DateTimeZone       $timezone

- **`Phalcon\Logger\AbstractLogger`**
- [`Phalcon\Logger\Logger`](#loggerlogger)

`DateTimeZone` · `Exception` · `Phalcon\Contracts\Logger\LoggerTypes` · `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Exceptions\AdapterNotFound` · `Phalcon\Logger\Exceptions\NoAdaptersConfigured` · `Phalcon\Time\Clock\ClockInterface` · `Phalcon\Time\Clock\SystemClock`

### Method Summary

<ApiItem href="#loggerabstractlogger-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"adapters","default":"[]"},{"type":"DateTimeZone|null","name":"timezone","default":"null"},{"type":"ClockInterface|null","name":"clock","default":"null"}]}>
Constructor.
</ApiItem>
<ApiItem href="#loggerabstractlogger-addadapter" visibility="public" name="addAdapter" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"AdapterInterface","name":"adapter","default":null}]}>
Add an adapter to the stack. For processing we use FIFO
</ApiItem>
<ApiItem href="#loggerabstractlogger-begin" visibility="public" name="begin" returnType="static" params={[]}>
Starts a transaction on every (non-excluded) adapter in the stack.
</ApiItem>
<ApiItem href="#loggerabstractlogger-commit" visibility="public" name="commit" returnType="static" params={[]}>
Commits the transaction on every (non-excluded) adapter in the stack.
</ApiItem>
<ApiItem href="#loggerabstractlogger-excludeadapters" visibility="public" name="excludeAdapters" returnType="static" params={[{"type":"array","name":"adapters","default":"[]"}]}>
Exclude certain adapters.
</ApiItem>
<ApiItem href="#loggerabstractlogger-getadapter" visibility="public" name="getAdapter" returnType="AdapterInterface" params={[{"type":"string","name":"name","default":null}]}>
Returns an adapter from the stack
</ApiItem>
<ApiItem href="#loggerabstractlogger-getadapters" visibility="public" name="getAdapters" returnType="array" params={[]}>
Returns the adapter stack array
</ApiItem>
<ApiItem href="#loggerabstractlogger-getloglevel" visibility="public" name="getLogLevel" returnType="int" params={[]}>
Returns the log level
</ApiItem>
<ApiItem href="#loggerabstractlogger-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the name of the logger
</ApiItem>
<ApiItem href="#loggerabstractlogger-removeadapter" visibility="public" name="removeAdapter" returnType="static" params={[{"type":"string","name":"name","default":null}]}>
Removes an adapter from the stack
</ApiItem>
<ApiItem href="#loggerabstractlogger-rollback" visibility="public" name="rollback" returnType="static" params={[]}>
Rolls back the transaction on every (non-excluded) adapter in the stack.
</ApiItem>
<ApiItem href="#loggerabstractlogger-setadapters" visibility="public" name="setAdapters" returnType="static" params={[{"type":"array","name":"adapters","default":null}]}>
Sets the adapters stack overriding what is already there
</ApiItem>
<ApiItem href="#loggerabstractlogger-setloglevel" visibility="public" name="setLogLevel" returnType="static" params={[{"type":"int","name":"level","default":null}]}>
Sets the minimum log level for the logger.
</ApiItem>
<ApiItem href="#loggerabstractlogger-addmessage" visibility="protected" name="addMessage" returnType="bool" params={[{"type":"int","name":"level","default":null},{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Adds a message to each handler for processing
</ApiItem>
<ApiItem href="#loggerabstractlogger-getlevelnumber" visibility="protected" name="getLevelNumber" returnType="int" params={[{"type":"mixed","name":"level","default":null}]}>
Converts the level from string/word to an integer
</ApiItem>
<ApiItem href="#loggerabstractlogger-getlevels" visibility="protected" name="getLevels" returnType="array" params={[]}>
Returns an array of log levels with integer to string conversion
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="adapters" type="array" default="[]">
The adapter stack
</ApiItem>
<ApiItem kind="property" visibility="protected" name="clock" type="ClockInterface" default="">
Clock used to timestamp log items
</ApiItem>
<ApiItem kind="property" visibility="protected" name="excluded" type="array" default="[]">
The excluded adapters for this log process
</ApiItem>
<ApiItem kind="property" visibility="protected" name="logLevel" type="int" default="Enum::CUSTOM">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="timezone" type="DateTimeZone" default="">
</ApiItem>

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

`Exception` · `Phalcon\Contracts\Logger\LoggerTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Adapter\Noop` · `Phalcon\Logger\Adapter\Stream` · `Phalcon\Logger\Adapter\Syslog` · `Throwable`

### Method Summary

<ApiItem href="#loggeradapterfactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"services","default":"[]"}]}>
AdapterFactory constructor.
</ApiItem>
<ApiItem href="#loggeradapterfactory-newinstance" visibility="public" name="newInstance" returnType="AdapterInterface" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"fileName","default":null},{"type":"array","name":"options","default":"[]"}]}>
Create a new instance of the adapter
</ApiItem>
<ApiItem href="#loggeradapterfactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#loggeradapterfactory-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the available adapters
</ApiItem>

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

<ApiItem href="#loggeradapterabstractadapter-__destruct" visibility="public" name="__destruct" returnType="" params={[]}>
Destructor cleanup
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-__serialize" visibility="public" name="__serialize" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-__unserialize" visibility="public" name="__unserialize" returnType="void" params={[{"type":"array","name":"data","default":null}]}>
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-add" visibility="public" name="add" returnType="AdapterInterface" params={[{"type":"Item","name":"item","default":null}]}>
Adds a message to the queue
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-begin" visibility="public" name="begin" returnType="AdapterInterface" params={[]}>
Starts a transaction
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-close" visibility="public" name="close" returnType="bool" params={[]}>
Closes the logger
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-commit" visibility="public" name="commit" returnType="AdapterInterface" params={[]}>
Commits the internal transaction
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-getformatter" visibility="public" name="getFormatter" returnType="FormatterInterface" params={[]}>
Return the formatter used
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-getqueuelimit" visibility="public" name="getQueueLimit" returnType="int" params={[]}>
Returns the configured transaction-queue cap (0 = unlimited)
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-intransaction" visibility="public" name="inTransaction" returnType="bool" params={[]}>
Returns the whether the logger is currently in an active transaction or
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-process" visibility="public" name="process" returnType="void" params={[{"type":"Item","name":"item","default":null}]}>
Processes the message in the adapter
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-rollback" visibility="public" name="rollback" returnType="AdapterInterface" params={[]}>
Rollbacks the internal transaction
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-setformatter" visibility="public" name="setFormatter" returnType="AdapterInterface" params={[{"type":"FormatterInterface","name":"formatter","default":null}]}>
Sets the message formatter
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-setqueuelimit" visibility="public" name="setQueueLimit" returnType="AdapterInterface" params={[{"type":"int","name":"queueLimit","default":null}]}>
Sets the maximum number of items retained in the transaction
</ApiItem>
<ApiItem href="#loggeradapterabstractadapter-getformatteditem" visibility="protected" name="getFormattedItem" returnType="string" params={[{"type":"Item","name":"item","default":null}]}>
Returns the formatted item
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="defaultFormatter" type="class-string&lt;FormatterInterface&gt;" default="Line::class">
Name of the default formatter class
</ApiItem>
<ApiItem kind="property" visibility="protected" name="formatter" type="FormatterInterface|null" default="null">
Formatter
</ApiItem>
<ApiItem kind="property" visibility="protected" name="inTransaction" type="bool" default="false">
Tells if there is an active transaction or not
</ApiItem>
<ApiItem kind="property" visibility="protected" name="queue" type="array" default="[]">
Array with messages queued in the transaction
</ApiItem>
<ApiItem kind="property" visibility="protected" name="queueLimit" type="int" default="0">
Maximum number of items retained in the transaction queue.
0 (default) keeps the original unbounded behavior; a positive
value drops the oldest queued item FIFO before a new one is
appended in add().
</ApiItem>

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

<ApiItem href="#loggeradapterexceptionsfileopenfailed-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"mode","default":null}]}>
</ApiItem>

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

<ApiItem href="#loggeradapterexceptionsinvalidstreammode-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#loggeradapterexceptionssyslogopenfailed-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"int","name":"facility","default":null}]}>
</ApiItem>

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

<ApiItem href="#loggeradapternoop-close" visibility="public" name="close" returnType="bool" params={[]}>
Closes the stream
</ApiItem>
<ApiItem href="#loggeradapternoop-process" visibility="public" name="process" returnType="void" params={[{"type":"Item","name":"item","default":null}]}>
Processes the message i.e. writes it to the file
</ApiItem>

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

<ApiItem href="#loggeradapterstream-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"options","default":"[]"}]}>
Stream constructor.
</ApiItem>
<ApiItem href="#loggeradapterstream-close" visibility="public" name="close" returnType="bool" params={[]}>
Closes the stream
</ApiItem>
<ApiItem href="#loggeradapterstream-getname" visibility="public" name="getName" returnType="string" params={[]}>
Stream name
</ApiItem>
<ApiItem href="#loggeradapterstream-process" visibility="public" name="process" returnType="void" params={[{"type":"Item","name":"item","default":null}]}>
Processes the message i.e. writes it to the file
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="handler" type="resource|null" default="null">
Stream handler resource
</ApiItem>
<ApiItem kind="property" visibility="protected" name="mode" type="string" default="&quot;ab&quot;">
The file open mode. Defaults to 'ab'
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
</ApiItem>

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

<ApiItem href="#loggeradaptersyslog-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"options","default":"[]"}]}>
Syslog constructor.
</ApiItem>
<ApiItem href="#loggeradaptersyslog-close" visibility="public" name="close" returnType="bool" params={[]}>
Closes the logger
</ApiItem>
<ApiItem href="#loggeradaptersyslog-process" visibility="public" name="process" returnType="void" params={[{"type":"Item","name":"item","default":null}]}>
Processes the message i.e. writes it to the syslog
</ApiItem>
<ApiItem href="#loggeradaptersyslog-openlog" visibility="protected" name="openlog" returnType="bool" params={[{"type":"string","name":"ident","default":null},{"type":"int","name":"option","default":null},{"type":"int","name":"facility","default":null}]}>
Open connection to system logger
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="facility" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="opened" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="option" type="int" default="0">
</ApiItem>

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

<ApiItem kind="constant" name="ALERT" type="int" default="2">
</ApiItem>
<ApiItem kind="constant" name="CRITICAL" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="CUSTOM" type="int" default="8">
Default threshold and fallback sink. It sits between DEBUG (7) and
TRACE (9) in the ordering, so the default log level excludes TRACE.
It is also the fallback for unknown message levels and invalid
setLogLevel() values.
</ApiItem>
<ApiItem kind="constant" name="DEBUG" type="int" default="7">
</ApiItem>
<ApiItem kind="constant" name="EMERGENCY" type="int" default="0">
</ApiItem>
<ApiItem kind="constant" name="ERROR" type="int" default="3">
</ApiItem>
<ApiItem kind="constant" name="INFO" type="int" default="6">
</ApiItem>
<ApiItem kind="constant" name="NOTICE" type="int" default="5">
</ApiItem>
<ApiItem kind="constant" name="TRACE" type="int" default="9">
</ApiItem>
<ApiItem kind="constant" name="WARNING" type="int" default="4">
</ApiItem>

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

<ApiItem href="#loggerexceptionsadapternotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

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

<ApiItem href="#loggerexceptionsdeserializationfailed-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#loggerexceptionsnoadaptersconfigured-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#loggerexceptionsserializationfailed-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#loggerexceptionstransactionalreadyactive-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#loggerexceptionstransactionnotactive-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#loggerformatterabstractformatter-getdateformat" visibility="public" name="getDateFormat" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#loggerformatterabstractformatter-setdateformat" visibility="public" name="setDateFormat" returnType="void" params={[{"type":"string","name":"format","default":null}]}>
</ApiItem>
<ApiItem href="#loggerformatterabstractformatter-getformatteddate" visibility="protected" name="getFormattedDate" returnType="string" params={[{"type":"Item","name":"item","default":null}]}>
Returns the date formatted for the logger.
</ApiItem>
<ApiItem href="#loggerformatterabstractformatter-getinterpolatedmessage" visibility="protected" name="getInterpolatedMessage" returnType="string" params={[{"type":"Item","name":"item","default":null},{"type":"string","name":"message","default":null}]}>
Returns the interpolated message, replacing context placeholders.
</ApiItem>
<ApiItem href="#loggerformatterabstractformatter-stringifycontext" visibility="protected" name="stringifyContext" returnType="array" params={[{"type":"array","name":"context","default":null}]}>
Reduces the log context to the string map interpolation requires.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="dateFormat" type="string" default="&quot;c&quot;">
Default date format
</ApiItem>
<ApiItem kind="property" visibility="protected" name="interpolatorLeft" type="string" default="&quot;%&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="interpolatorRight" type="string" default="&quot;%&quot;">
</ApiItem>

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

<ApiItem href="#loggerformatterjson-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"dateFormat","default":"\"c\""},{"type":"string","name":"interpolatorLeft","default":"\"%\""},{"type":"string","name":"interpolatorRight","default":"\"%\""}]}>
Json constructor.
</ApiItem>
<ApiItem href="#loggerformatterjson-format" visibility="public" name="format" returnType="string" params={[{"type":"Item","name":"item","default":null}]}>
Applies a format to a message before sent it to the internal log
</ApiItem>

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

<ApiItem href="#loggerformatterline-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"format","default":"\"[%date%][%level%] %message%\""},{"type":"string","name":"dateFormat","default":"\"c\""},{"type":"string","name":"interpolatorLeft","default":"\"%\""},{"type":"string","name":"interpolatorRight","default":"\"%\""}]}>
Line constructor.
</ApiItem>
<ApiItem href="#loggerformatterline-format" visibility="public" name="format" returnType="string" params={[{"type":"Item","name":"item","default":null}]}>
Applies a format to a message before sent it to the internal log
</ApiItem>
<ApiItem href="#loggerformatterline-getformat" visibility="public" name="getFormat" returnType="string" params={[]}>
Return the format applied to each message
</ApiItem>
<ApiItem href="#loggerformatterline-setformat" visibility="public" name="setFormat" returnType="static" params={[{"type":"string","name":"format","default":null}]}>
Set the format applied to each message
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="format" type="string" default="&quot;[%date%][%level%] %message%&quot;">
</ApiItem>

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
@property string            $message
@property int               $level
@property string            $levelName
@property DateTimeImmutable $dateTime

- **`Phalcon\Logger\Item`**

`DateTimeImmutable` · `Phalcon\Contracts\Logger\LoggerTypes`

### Method Summary

<ApiItem href="#loggeritem-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"message","default":null},{"type":"string","name":"levelName","default":null},{"type":"int","name":"level","default":null},{"type":"DateTimeImmutable","name":"dateTime","default":null},{"type":"array","name":"context","default":"[]"}]}>
Item constructor.
</ApiItem>
<ApiItem href="#loggeritem-getcontext" visibility="public" name="getContext" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#loggeritem-getdatetime" visibility="public" name="getDateTime" returnType="DateTimeImmutable" params={[]}>
</ApiItem>
<ApiItem href="#loggeritem-getlevel" visibility="public" name="getLevel" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#loggeritem-getlevelname" visibility="public" name="getLevelName" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#loggeritem-getmessage" visibility="public" name="getMessage" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="context" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="dateTime" type="DateTimeImmutable" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="level" type="int" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="levelName" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="message" type="string" default="">
</ApiItem>

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

<ApiItem href="#loggerlogger-alert" visibility="public" name="alert" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Action must be taken immediately.
</ApiItem>
<ApiItem href="#loggerlogger-critical" visibility="public" name="critical" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Critical conditions.
</ApiItem>
<ApiItem href="#loggerlogger-debug" visibility="public" name="debug" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Detailed debug information.
</ApiItem>
<ApiItem href="#loggerlogger-emergency" visibility="public" name="emergency" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
System is unusable.
</ApiItem>
<ApiItem href="#loggerlogger-error" visibility="public" name="error" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Runtime errors that do not require immediate action but should typically
</ApiItem>
<ApiItem href="#loggerlogger-info" visibility="public" name="info" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Interesting events.
</ApiItem>
<ApiItem href="#loggerlogger-log" visibility="public" name="log" returnType="void" params={[{"type":"mixed","name":"level","default":null},{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Logs with an arbitrary level.
</ApiItem>
<ApiItem href="#loggerlogger-notice" visibility="public" name="notice" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Normal but significant events.
</ApiItem>
<ApiItem href="#loggerlogger-trace" visibility="public" name="trace" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Extra-verbose diagnostic output.
</ApiItem>
<ApiItem href="#loggerlogger-warning" visibility="public" name="warning" returnType="void" params={[{"type":"string","name":"message","default":null},{"type":"array","name":"context","default":"[]"}]}>
Exceptional occurrences that are not errors.
</ApiItem>

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

`DateTimeZone` · `Exception` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Logger\LoggerTypes` · `Phalcon\Factory\AbstractConfigFactory` · `Throwable`

### Method Summary

<ApiItem href="#loggerloggerfactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"AdapterFactory","name":"factory","default":null}]}>
Constructor
</ApiItem>
<ApiItem href="#loggerloggerfactory-load" visibility="public" name="load" returnType="Logger" params={[{"type":"mixed","name":"config","default":null}]}>
Factory to create an instance from a Config object
</ApiItem>
<ApiItem href="#loggerloggerfactory-newinstance" visibility="public" name="newInstance" returnType="Logger" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"adapters","default":"[]"},{"type":"DateTimeZone|null","name":"timezone","default":"null"}]}>
Returns a Logger object
</ApiItem>
<ApiItem href="#loggerloggerfactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
</ApiItem>

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
