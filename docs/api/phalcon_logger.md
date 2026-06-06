---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Logger\AbstractLogger

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/AbstractLogger.zep){ .src-btn }

Abstract Logger Class

Abstract logger class, providing common functionality. A formatter interface
is available as well as an adapter one. Adapters can be created easily using
the built in AdapterFactory. A LoggerFactory is also available that allows
developers to create new instances of the Logger or load them from config
files (see Phalcon\Config\Config object).

@property AdapterInterface[] $adapters
@property array              $excluded
@property int                $logLevel
@property string             $name
@property string             $timezone

<div class="api-tree" markdown>

- **`Phalcon\Logger\AbstractLogger`**
    - [`Phalcon\Logger\Logger`](#loggerlogger)

</div>

__Uses__ `DateTimeImmutable` · `DateTimeZone` · `Exception` · `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Exceptions\AdapterNotFound` · `Phalcon\Logger\Exceptions\NoAdaptersConfigured`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerabstractlogger-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    array $adapters = [],
    DateTimeZone $timezone = null
)</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#loggerabstractlogger-addadapter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">addAdapter(
    string $name,
    AdapterInterface $adapter
)</code>
<span class="desc">Add an adapter to the stack. For processing we use FIFO</span>
</a>
<a class="api-item" href="#loggerabstractlogger-excludeadapters">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">excludeAdapters( array $adapters = [] )</code>
<span class="desc">Exclude certain adapters.</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getAdapter( string $name )</code>
<span class="desc">Returns an adapter from the stack</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getadapters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAdapters()</code>
<span class="desc">Returns the adapter stack array</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getLogLevel()</code>
<span class="desc">Returns the log level</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Returns the name of the logger</span>
</a>
<a class="api-item" href="#loggerabstractlogger-removeadapter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">removeAdapter( string $name )</code>
<span class="desc">Removes an adapter from the stack</span>
</a>
<a class="api-item" href="#loggerabstractlogger-setadapters">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setAdapters( array $adapters )</code>
<span class="desc">Sets the adapters stack overriding what is already there</span>
</a>
<a class="api-item" href="#loggerabstractlogger-setloglevel">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setLogLevel( int $level )</code>
<span class="desc">Sets the adapters stack overriding what is already there</span>
</a>
<a class="api-item" href="#loggerabstractlogger-addmessage">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">addMessage(
    int $level,
    string $message,
    array $context = []
)</code>
<span class="desc">Adds a message to each handler for processing</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getlevelnumber">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig">getLevelNumber( mixed $level )</code>
<span class="desc">Converts the level from string/word to an integer</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getlevels">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getLevels()</code>
<span class="desc">Returns an array of log levels with integer to string conversion</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `ALERT = 2` `int`

-   `CRITICAL = 1` `int`

-   `CUSTOM = 8` `int`

-   `DEBUG = 7` `int`

-   `EMERGENCY = 0` `int`

-   `ERROR = 3` `int`

-   `INFO = 6` `int`

-   `NOTICE = 5` `int`

-   `TRACE = 9` `int`

-   `WARNING = 4` `int`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$adapters = []` `AdapterInterface[]`

    The adapter stack

-   `protected`{ .vis-protected } `$excluded = []` `array`

    The excluded adapters for this log process

-   `protected`{ .vis-protected } `$logLevel = 8` `int`

    Minimum log level for the logger

-   `protected`{ .vis-protected } `$name = ""` `string`

-   `protected`{ .vis-protected } `$timezone` `DateTimeZone`

</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__construct()` { #loggerabstractlogger-__construct }

```php
public function __construct(
    string $name,
    array $adapters = [],
    DateTimeZone $timezone = null
);
```

Constructor.

#### `addAdapter()` { #loggerabstractlogger-addadapter }

```php
public function addAdapter(
    string $name,
    AdapterInterface $adapter
): static;
```

Add an adapter to the stack. For processing we use FIFO

#### `excludeAdapters()` { #loggerabstractlogger-excludeadapters }

```php
public function excludeAdapters( array $adapters = [] ): static;
```

Exclude certain adapters.

#### `getAdapter()` { #loggerabstractlogger-getadapter }

```php
public function getAdapter( string $name ): AdapterInterface;
```

Returns an adapter from the stack

#### `getAdapters()` { #loggerabstractlogger-getadapters }

```php
public function getAdapters(): array;
```

Returns the adapter stack array

#### `getLogLevel()` { #loggerabstractlogger-getloglevel }

```php
public function getLogLevel(): int;
```

Returns the log level

#### `getName()` { #loggerabstractlogger-getname }

```php
public function getName(): string;
```

Returns the name of the logger

#### `removeAdapter()` { #loggerabstractlogger-removeadapter }

```php
public function removeAdapter( string $name ): static;
```

Removes an adapter from the stack

#### `setAdapters()` { #loggerabstractlogger-setadapters }

```php
public function setAdapters( array $adapters ): static;
```

Sets the adapters stack overriding what is already there

#### `setLogLevel()` { #loggerabstractlogger-setloglevel }

```php
public function setLogLevel( int $level ): static;
```

Sets the adapters stack overriding what is already there

<div class="api-group">Protected · 3</div>

#### `addMessage()` { #loggerabstractlogger-addmessage }

```php
protected function addMessage(
    int $level,
    string $message,
    array $context = []
): bool;
```

Adds a message to each handler for processing

#### `getLevelNumber()` { #loggerabstractlogger-getlevelnumber }

```php
protected function getLevelNumber( mixed $level ): int;
```

Converts the level from string/word to an integer

#### `getLevels()` { #loggerabstractlogger-getlevels }

```php
protected function getLevels(): array;
```

Returns an array of log levels with integer to string conversion


## Logger\AdapterFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/AdapterFactory.zep){ .src-btn }

Factory used to create adapters used for Logging

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Logger\AdapterFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $services = [] )</code>
<span class="desc">AdapterFactory constructor.</span>
</a>
<a class="api-item" href="#loggeradapterfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">newInstance(
    string $name,
    string $fileName,
    array $options = []
)</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#loggeradapterfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getExceptionClass()</code>
</a>
<a class="api-item" href="#loggeradapterfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getServices()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #loggeradapterfactory-__construct }

```php
public function __construct( array $services = [] );
```

AdapterFactory constructor.

#### `newInstance()` { #loggeradapterfactory-newinstance }

```php
public function newInstance(
    string $name,
    string $fileName,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #loggeradapterfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #loggeradapterfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Logger\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/AbstractAdapter.zep){ .src-btn }

Class AbstractAdapter

@property string             $defaultFormatter
@property FormatterInterface $formatter
@property bool               $inTransaction
@property array              $queue

<div class="api-tree" markdown>

- **`Phalcon\Logger\Adapter\AbstractAdapter`** — implements [`Phalcon\Logger\Adapter\AdapterInterface`](#loggeradapteradapterinterface)
    - [`Phalcon\Logger\Adapter\Noop`](#loggeradapternoop)
    - [`Phalcon\Logger\Adapter\Stream`](#loggeradapterstream)
    - [`Phalcon\Logger\Adapter\Syslog`](#loggeradaptersyslog)

</div>

__Uses__ `Phalcon\Logger\Exceptions\DeserializationFailed` · `Phalcon\Logger\Exceptions\SerializationFailed` · `Phalcon\Logger\Exceptions\TransactionAlreadyActive` · `Phalcon\Logger\Exceptions\TransactionNotActive` · `Phalcon\Logger\Formatter\FormatterInterface` · `Phalcon\Logger\Formatter\Line` · `Phalcon\Logger\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterabstractadapter-__destruct">
<code class="vis vis-public">public</code>
<code class="sig">__destruct()</code>
<span class="desc">Destructor cleanup</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-__serialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">__serialize()</code>
<span class="desc">Prevent serialization</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-__unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">__unserialize( array $data )</code>
<span class="desc">Prevent unserialization</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-add">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">add( Item $item )</code>
<span class="desc">Adds a message to the queue</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-begin">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">begin()</code>
<span class="desc">Starts a transaction</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-commit">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">commit()</code>
<span class="desc">Commits the internal transaction</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-getformatter">
<code class="vis vis-public">public</code>
<code class="ret">FormatterInterface</code>
<code class="sig">getFormatter()</code>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-getqueuelimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getQueueLimit()</code>
<span class="desc">Returns the configured transaction-queue cap (0 = unlimited)</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-intransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">inTransaction()</code>
<span class="desc">Returns the whether the logger is currently in an active transaction or</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">process( Item $item )</code>
<span class="desc">Processes the message in the adapter</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-rollback">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">rollback()</code>
<span class="desc">Rollbacks the internal transaction</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-setformatter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">setFormatter( FormatterInterface $formatter )</code>
<span class="desc">Sets the message formatter</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-setqueuelimit">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">setQueueLimit( int $queueLimit )</code>
<span class="desc">Sets the maximum number of items retained in the transaction</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-getformatteditem">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getFormattedItem( Item $item )</code>
<span class="desc">Returns the formatted item</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$defaultFormatter = "Phalcon\\Logger\Formatter\\Line"` `string`

    Name of the default formatter class

-   `protected`{ .vis-protected } `$formatter = null` `FormatterInterface|null`

    Formatter

-   `protected`{ .vis-protected } `$inTransaction = false` `bool`

    Tells if there is an active transaction or not

-   `protected`{ .vis-protected } `$queue = []` `array`

    Array with messages queued in the transaction

-   `protected`{ .vis-protected } `$queueLimit = 0` `int`

    Maximum number of items retained in the transaction queue.
    0 (default) keeps the original unbounded behavior; a positive
    value drops the oldest queued item FIFO before a new one is
    appended in add().

</div>

### Methods

<div class="api-group">Public · 13</div>

#### `__destruct()` { #loggeradapterabstractadapter-__destruct }

```php
public function __destruct();
```

Destructor cleanup

#### `__serialize()` { #loggeradapterabstractadapter-__serialize }

```php
public function __serialize(): array;
```

Prevent serialization

#### `__unserialize()` { #loggeradapterabstractadapter-__unserialize }

```php
public function __unserialize( array $data ): void;
```

Prevent unserialization

#### `add()` { #loggeradapterabstractadapter-add }

```php
public function add( Item $item ): AdapterInterface;
```

Adds a message to the queue

#### `begin()` { #loggeradapterabstractadapter-begin }

```php
public function begin(): AdapterInterface;
```

Starts a transaction

#### `commit()` { #loggeradapterabstractadapter-commit }

```php
public function commit(): AdapterInterface;
```

Commits the internal transaction

#### `getFormatter()` { #loggeradapterabstractadapter-getformatter }

```php
public function getFormatter(): FormatterInterface;
```

#### `getQueueLimit()` { #loggeradapterabstractadapter-getqueuelimit }

```php
public function getQueueLimit(): int;
```

Returns the configured transaction-queue cap (0 = unlimited)

#### `inTransaction()` { #loggeradapterabstractadapter-intransaction }

```php
public function inTransaction(): bool;
```

Returns the whether the logger is currently in an active transaction or
not

#### `process()` { #loggeradapterabstractadapter-process }

```php
abstract public function process( Item $item ): void;
```

Processes the message in the adapter

#### `rollback()` { #loggeradapterabstractadapter-rollback }

```php
public function rollback(): AdapterInterface;
```

Rollbacks the internal transaction

#### `setFormatter()` { #loggeradapterabstractadapter-setformatter }

```php
public function setFormatter( FormatterInterface $formatter ): AdapterInterface;
```

Sets the message formatter

#### `setQueueLimit()` { #loggeradapterabstractadapter-setqueuelimit }

```php
public function setQueueLimit( int $queueLimit ): AdapterInterface;
```

Sets the maximum number of items retained in the transaction
queue. 0 disables the cap (the default; preserves the original
unbounded behavior).

<div class="api-group">Protected · 1</div>

#### `getFormattedItem()` { #loggeradapterabstractadapter-getformatteditem }

```php
protected function getFormattedItem( Item $item ): string;
```

Returns the formatted item


## Logger\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/AdapterInterface.zep){ .src-btn }

Phalcon\Logger\AdapterInterface

Interface for Phalcon\Logger adapters

<div class="api-tree" markdown>

- **`Phalcon\Logger\Adapter\AdapterInterface`**

</div>

__Uses__ `Phalcon\Logger\Formatter\FormatterInterface` · `Phalcon\Logger\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapteradapterinterface-add">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">add( Item $item )</code>
<span class="desc">Adds a message in the queue</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-begin">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">begin()</code>
<span class="desc">Starts a transaction</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">close()</code>
<span class="desc">Closes the logger</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-commit">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">commit()</code>
<span class="desc">Commits the internal transaction</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-getformatter">
<code class="vis vis-public">public</code>
<code class="ret">FormatterInterface</code>
<code class="sig">getFormatter()</code>
<span class="desc">Returns the internal formatter</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-intransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">inTransaction()</code>
<span class="desc">Returns the whether the logger is currently in an active transaction or</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">process( Item $item )</code>
<span class="desc">Processes the message in the adapter</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-rollback">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">rollback()</code>
<span class="desc">Rollbacks the internal transaction</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-setformatter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">setFormatter( FormatterInterface $formatter )</code>
<span class="desc">Sets the message formatter</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `add()` { #loggeradapteradapterinterface-add }

```php
public function add( Item $item ): AdapterInterface;
```

Adds a message in the queue

#### `begin()` { #loggeradapteradapterinterface-begin }

```php
public function begin(): AdapterInterface;
```

Starts a transaction

#### `close()` { #loggeradapteradapterinterface-close }

```php
public function close(): bool;
```

Closes the logger

#### `commit()` { #loggeradapteradapterinterface-commit }

```php
public function commit(): AdapterInterface;
```

Commits the internal transaction

#### `getFormatter()` { #loggeradapteradapterinterface-getformatter }

```php
public function getFormatter(): FormatterInterface;
```

Returns the internal formatter

#### `inTransaction()` { #loggeradapteradapterinterface-intransaction }

```php
public function inTransaction(): bool;
```

Returns the whether the logger is currently in an active transaction or
not

#### `process()` { #loggeradapteradapterinterface-process }

```php
public function process( Item $item ): void;
```

Processes the message in the adapter

#### `rollback()` { #loggeradapteradapterinterface-rollback }

```php
public function rollback(): AdapterInterface;
```

Rollbacks the internal transaction

#### `setFormatter()` { #loggeradapteradapterinterface-setformatter }

```php
public function setFormatter( FormatterInterface $formatter ): AdapterInterface;
```

Sets the message formatter


## Logger\Adapter\Exceptions\FileOpenFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Exceptions/FileOpenFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Logger\Exception`](#loggerexception)
        - **`Phalcon\Logger\Adapter\Exceptions\FileOpenFailed`**

</div>

__Uses__ `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterexceptionsfileopenfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $mode
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #loggeradapterexceptionsfileopenfailed-__construct }

```php
public function __construct(
    string $name,
    string $mode
);
```


## Logger\Adapter\Exceptions\InvalidStreamMode

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Exceptions/InvalidStreamMode.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Logger\Exception`](#loggerexception)
        - **`Phalcon\Logger\Adapter\Exceptions\InvalidStreamMode`**

</div>

__Uses__ `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterexceptionsinvalidstreammode-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #loggeradapterexceptionsinvalidstreammode-__construct }

```php
public function __construct();
```


## Logger\Adapter\Exceptions\SyslogOpenFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Exceptions/SyslogOpenFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Logger\Exception`](#loggerexception)
        - **`Phalcon\Logger\Adapter\Exceptions\SyslogOpenFailed`**

</div>

__Uses__ `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterexceptionssyslogopenfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    int $facility
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #loggeradapterexceptionssyslogopenfailed-__construct }

```php
public function __construct(
    string $name,
    int $facility
);
```


## Logger\Adapter\Noop

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Noop.zep){ .src-btn }

Class Noop

@package Phalcon\Logger\Adapter

<div class="api-tree" markdown>

- [`Phalcon\Logger\Adapter\AbstractAdapter`](#loggeradapterabstractadapter)
    - **`Phalcon\Logger\Adapter\Noop`**

</div>

__Uses__ `Phalcon\Logger\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapternoop-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">close()</code>
<span class="desc">Closes the stream</span>
</a>
<a class="api-item" href="#loggeradapternoop-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">process( Item $item )</code>
<span class="desc">Processes the message i.e. writes it to the file</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `close()` { #loggeradapternoop-close }

```php
public function close(): bool;
```

Closes the stream

#### `process()` { #loggeradapternoop-process }

```php
public function process( Item $item ): void;
```

Processes the message i.e. writes it to the file


## Logger\Adapter\Stream

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Stream.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Logger\Adapter\AbstractAdapter`](#loggeradapterabstractadapter)
    - **`Phalcon\Logger\Adapter\Stream`**

</div>

__Uses__ `Phalcon\Logger\Adapter\Exceptions\FileOpenFailed` · `Phalcon\Logger\Adapter\Exceptions\InvalidStreamMode` · `Phalcon\Logger\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterstream-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    array $options = []
)</code>
<span class="desc">Stream constructor.</span>
</a>
<a class="api-item" href="#loggeradapterstream-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">close()</code>
<span class="desc">Closes the stream</span>
</a>
<a class="api-item" href="#loggeradapterstream-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Stream name</span>
</a>
<a class="api-item" href="#loggeradapterstream-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">process( Item $item )</code>
<span class="desc">Processes the message i.e. writes it to the file</span>
</a>
<a class="api-item" href="#loggeradapterstream-phpfclose">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">phpFclose( mixed $handle )</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
<a class="api-item" href="#loggeradapterstream-phpfopen">
<code class="vis vis-protected">protected</code>
<code class="sig">phpFopen(
    string $filename,
    string $mode
)</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
<a class="api-item" href="#loggeradapterstream-phpfwrite">
<code class="vis vis-protected">protected</code>
<code class="sig">phpFwrite(
    mixed $handle,
    string $message
)</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$handler = null` `resource|null`

    Stream handler resource

-   `protected`{ .vis-protected } `$mode = "ab"` `string`

    The file open mode. Defaults to 'ab'

-   `protected`{ .vis-protected } `$name` `string`

    Stream name

</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #loggeradapterstream-__construct }

```php
public function __construct(
    string $name,
    array $options = []
);
```

Stream constructor.

#### `close()` { #loggeradapterstream-close }

```php
public function close(): bool;
```

Closes the stream

#### `getName()` { #loggeradapterstream-getname }

```php
public function getName(): string;
```

Stream name

#### `process()` { #loggeradapterstream-process }

```php
public function process( Item $item ): void;
```

Processes the message i.e. writes it to the file

<div class="api-group">Protected · 3</div>

#### `phpFclose()` { #loggeradapterstream-phpfclose }

```php
protected function phpFclose( mixed $handle ): bool;
```

@todo to be removed when we get traits

#### `phpFopen()` { #loggeradapterstream-phpfopen }

```php
protected function phpFopen(
    string $filename,
    string $mode
);
```

@todo to be removed when we get traits

#### `phpFwrite()` { #loggeradapterstream-phpfwrite }

```php
protected function phpFwrite(
    mixed $handle,
    string $message
);
```

@todo to be removed when we get traits


## Logger\Adapter\Syslog

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Syslog.zep){ .src-btn }

Class Syslog

@property string $defaultFormatter
@property int    $facility
@property string $name
@property bool   $opened
@property int    $option

<div class="api-tree" markdown>

- [`Phalcon\Logger\Adapter\AbstractAdapter`](#loggeradapterabstractadapter)
    - **`Phalcon\Logger\Adapter\Syslog`**

</div>

__Uses__ `Phalcon\Logger\Adapter\Exceptions\SyslogOpenFailed` · `Phalcon\Logger\Enum` · `Phalcon\Logger\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradaptersyslog-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    array $options = []
)</code>
<span class="desc">Syslog constructor.</span>
</a>
<a class="api-item" href="#loggeradaptersyslog-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">close()</code>
<span class="desc">Closes the logger</span>
</a>
<a class="api-item" href="#loggeradaptersyslog-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">process( Item $item )</code>
<span class="desc">Processes the message i.e. writes it to the syslog</span>
</a>
<a class="api-item" href="#loggeradaptersyslog-openlog">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">openlog(
    string $ident,
    int $option,
    int $facility
)</code>
<span class="desc">Open connection to system logger</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$facility = 0` `int`

-   `protected`{ .vis-protected } `$name = ""` `string`

-   `protected`{ .vis-protected } `$opened = false` `bool`

-   `protected`{ .vis-protected } `$option = 0` `int`

</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #loggeradaptersyslog-__construct }

```php
public function __construct(
    string $name,
    array $options = []
);
```

Syslog constructor.

#### `close()` { #loggeradaptersyslog-close }

```php
public function close(): bool;
```

Closes the logger

#### `process()` { #loggeradaptersyslog-process }

```php
public function process( Item $item ): void;
```

Processes the message i.e. writes it to the syslog

<div class="api-group">Protected · 1</div>

#### `openlog()` { #loggeradaptersyslog-openlog }

```php
protected function openlog(
    string $ident,
    int $option,
    int $facility
): bool;
```

Open connection to system logger

@link https://php.net/manual/en/function.openlog.php


## Logger\Enum

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Enum.zep){ .src-btn }

Log Level Enum constants

<div class="api-tree" markdown>

- **`Phalcon\Logger\Enum`**

</div>

### Constants

<div class="api-list" markdown>

-   `ALERT = 2` `int`

-   `CRITICAL = 1` `int`

-   `CUSTOM = 8` `int`

-   `DEBUG = 7` `int`

-   `EMERGENCY = 0` `int`

-   `ERROR = 3` `int`

-   `INFO = 6` `int`

-   `NOTICE = 5` `int`

-   `TRACE = 9` `int`

-   `WARNING = 4` `int`

</div>


## Logger\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exception.zep){ .src-btn }

Phalcon\Logger\Exception

Exceptions thrown in Phalcon\Logger will use this class

<div class="api-tree" markdown>

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

</div>


## Logger\Exceptions\AdapterNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/AdapterNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Logger\Exception`](#loggerexception)
        - **`Phalcon\Logger\Exceptions\AdapterNotFound`**

</div>

__Uses__ `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionsadapternotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #loggerexceptionsadapternotfound-__construct }

```php
public function __construct( string $name );
```


## Logger\Exceptions\DeserializationFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/DeserializationFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Logger\Exception`](#loggerexception)
        - **`Phalcon\Logger\Exceptions\DeserializationFailed`**

</div>

__Uses__ `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionsdeserializationfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #loggerexceptionsdeserializationfailed-__construct }

```php
public function __construct();
```


## Logger\Exceptions\NoAdaptersConfigured

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/NoAdaptersConfigured.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Logger\Exception`](#loggerexception)
        - **`Phalcon\Logger\Exceptions\NoAdaptersConfigured`**

</div>

__Uses__ `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionsnoadaptersconfigured-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #loggerexceptionsnoadaptersconfigured-__construct }

```php
public function __construct();
```


## Logger\Exceptions\SerializationFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/SerializationFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Logger\Exception`](#loggerexception)
        - **`Phalcon\Logger\Exceptions\SerializationFailed`**

</div>

__Uses__ `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionsserializationfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #loggerexceptionsserializationfailed-__construct }

```php
public function __construct();
```


## Logger\Exceptions\TransactionAlreadyActive

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/TransactionAlreadyActive.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Logger\Exception`](#loggerexception)
        - **`Phalcon\Logger\Exceptions\TransactionAlreadyActive`**

</div>

__Uses__ `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionstransactionalreadyactive-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #loggerexceptionstransactionalreadyactive-__construct }

```php
public function __construct();
```


## Logger\Exceptions\TransactionNotActive

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/TransactionNotActive.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Logger\Exception`](#loggerexception)
        - **`Phalcon\Logger\Exceptions\TransactionNotActive`**

</div>

__Uses__ `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionstransactionnotactive-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #loggerexceptionstransactionnotactive-__construct }

```php
public function __construct();
```


## Logger\Formatter\AbstractFormatter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/AbstractFormatter.zep){ .src-btn }

Class AbstractFormatter

<div class="api-tree" markdown>

- [`Phalcon\Support\Helper\Str\AbstractStr`](phalcon_support.md#supporthelperstrabstractstr)
    - **`Phalcon\Logger\Formatter\AbstractFormatter`** — implements [`Phalcon\Logger\Formatter\FormatterInterface`](#loggerformatterformatterinterface)
        - [`Phalcon\Logger\Formatter\Json`](#loggerformatterjson)
        - [`Phalcon\Logger\Formatter\Line`](#loggerformatterline)

</div>

__Uses__ `DateTimeImmutable` · `Phalcon\Logger\Item` · `Phalcon\Support\Helper\Str\AbstractStr`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerformatterabstractformatter-getdateformat">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getDateFormat()</code>
</a>
<a class="api-item" href="#loggerformatterabstractformatter-setdateformat">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDateFormat( string $format )</code>
</a>
<a class="api-item" href="#loggerformatterabstractformatter-getformatteddate">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getFormattedDate( Item $item )</code>
<span class="desc">Returns the date formatted for the logger.</span>
</a>
<a class="api-item" href="#loggerformatterabstractformatter-getinterpolatedmessage">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getInterpolatedMessage(
    Item $item,
    string $message
)</code>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$dateFormat = "c"` `string`

    Default date format

-   `protected`{ .vis-protected } `$interpolatorLeft = "%"` `string`

-   `protected`{ .vis-protected } `$interpolatorRight = "%"` `string`

</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getDateFormat()` { #loggerformatterabstractformatter-getdateformat }

```php
public function getDateFormat(): string;
```

#### `setDateFormat()` { #loggerformatterabstractformatter-setdateformat }

```php
public function setDateFormat( string $format ): void;
```

<div class="api-group">Protected · 2</div>

#### `getFormattedDate()` { #loggerformatterabstractformatter-getformatteddate }

```php
protected function getFormattedDate( Item $item ): string;
```

Returns the date formatted for the logger.

#### `getInterpolatedMessage()` { #loggerformatterabstractformatter-getinterpolatedmessage }

```php
protected function getInterpolatedMessage(
    Item $item,
    string $message
): string;
```


## Logger\Formatter\FormatterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/FormatterInterface.zep){ .src-btn }

Phalcon\Logger\FormatterInterface

This interface must be implemented by formatters in Phalcon\Logger

<div class="api-tree" markdown>

- **`Phalcon\Logger\Formatter\FormatterInterface`**

</div>

__Uses__ `Phalcon\Logger\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerformatterformatterinterface-format">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">format( Item $item )</code>
<span class="desc">Applies a format to an item</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `format()` { #loggerformatterformatterinterface-format }

```php
public function format( Item $item ): string;
```

Applies a format to an item


## Logger\Formatter\Json

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/Json.zep){ .src-btn }

Formats messages using JSON encoding

<div class="api-tree" markdown>

- [`Phalcon\Support\Helper\Str\AbstractStr`](phalcon_support.md#supporthelperstrabstractstr)
    - [`Phalcon\Logger\Formatter\AbstractFormatter`](#loggerformatterabstractformatter)
        - **`Phalcon\Logger\Formatter\Json`**

</div>

__Uses__ `JsonException` · `Phalcon\Logger\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerformatterjson-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $dateFormat = &quot;c&quot;,
    string $interpolatorLeft = &quot;%&quot;,
    string $interpolatorRight = &quot;%&quot;
)</code>
<span class="desc">Json constructor.</span>
</a>
<a class="api-item" href="#loggerformatterjson-format">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">format( Item $item )</code>
<span class="desc">Applies a format to a message before sent it to the internal log</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #loggerformatterjson-__construct }

```php
public function __construct(
    string $dateFormat = "c",
    string $interpolatorLeft = "%",
    string $interpolatorRight = "%"
);
```

Json constructor.

#### `format()` { #loggerformatterjson-format }

```php
public function format( Item $item ): string;
```

Applies a format to a message before sent it to the internal log


## Logger\Formatter\Line

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/Line.zep){ .src-btn }

Class Line

<div class="api-tree" markdown>

- [`Phalcon\Support\Helper\Str\AbstractStr`](phalcon_support.md#supporthelperstrabstractstr)
    - [`Phalcon\Logger\Formatter\AbstractFormatter`](#loggerformatterabstractformatter)
        - **`Phalcon\Logger\Formatter\Line`**

</div>

__Uses__ `Exception` · `Phalcon\Logger\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerformatterline-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $format = &quot;[%date%][%level%] %message%&quot;,
    string $dateFormat = &quot;c&quot;,
    string $interpolatorLeft = &quot;%&quot;,
    string $interpolatorRight = &quot;%&quot;
)</code>
<span class="desc">Line constructor.</span>
</a>
<a class="api-item" href="#loggerformatterline-format">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">format( Item $item )</code>
<span class="desc">Applies a format to a message before sent it to the internal log</span>
</a>
<a class="api-item" href="#loggerformatterline-getformat">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getFormat()</code>
<span class="desc">Return the format applied to each message</span>
</a>
<a class="api-item" href="#loggerformatterline-setformat">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setFormat( string $format )</code>
<span class="desc">Set the format applied to each message</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$format` `string`

    Format applied to each message

</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #loggerformatterline-__construct }

```php
public function __construct(
    string $format = "[%date%][%level%] %message%",
    string $dateFormat = "c",
    string $interpolatorLeft = "%",
    string $interpolatorRight = "%"
);
```

Line constructor.

#### `format()` { #loggerformatterline-format }

```php
public function format( Item $item ): string;
```

Applies a format to a message before sent it to the internal log

#### `getFormat()` { #loggerformatterline-getformat }

```php
public function getFormat(): string;
```

Return the format applied to each message

#### `setFormat()` { #loggerformatterline-setformat }

```php
public function setFormat( string $format ): static;
```

Set the format applied to each message


## Logger\Item

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Item.zep){ .src-btn }

Phalcon\Logger\Item

Represents each item in a logging transaction

@property array             $context
@property string            $message
@property int               $level
@property string            $levelName
@property DateTimeImmutable $dateTime

<div class="api-tree" markdown>

- **`Phalcon\Logger\Item`**

</div>

__Uses__ `DateTimeImmutable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeritem-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $message,
    string $levelName,
    int $level,
    DateTimeImmutable $dateTime,
    array $context = []
)</code>
<span class="desc">Item constructor.</span>
</a>
<a class="api-item" href="#loggeritem-getcontext">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getContext()</code>
</a>
<a class="api-item" href="#loggeritem-getdatetime">
<code class="vis vis-public">public</code>
<code class="ret">DateTimeImmutable</code>
<code class="sig">getDateTime()</code>
</a>
<a class="api-item" href="#loggeritem-getlevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getLevel()</code>
</a>
<a class="api-item" href="#loggeritem-getlevelname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getLevelName()</code>
</a>
<a class="api-item" href="#loggeritem-getmessage">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getMessage()</code>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$context = []` `array`

-   `protected`{ .vis-protected } `$dateTime` `DateTimeImmutable`

-   `protected`{ .vis-protected } `$level` `int`

-   `protected`{ .vis-protected } `$levelName` `string`

-   `protected`{ .vis-protected } `$message` `string`

</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #loggeritem-__construct }

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

#### `getContext()` { #loggeritem-getcontext }

```php
public function getContext(): array;
```

#### `getDateTime()` { #loggeritem-getdatetime }

```php
public function getDateTime(): DateTimeImmutable;
```

#### `getLevel()` { #loggeritem-getlevel }

```php
public function getLevel(): int;
```

#### `getLevelName()` { #loggeritem-getlevelname }

```php
public function getLevelName(): string;
```

#### `getMessage()` { #loggeritem-getmessage }

```php
public function getMessage(): string;
```


## Logger\Logger

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Logger.zep){ .src-btn }

Phalcon Logger.

A logger, with various adapters and formatters. A formatter
interface is available as well as an adapter one. Adapters can be created
easily using the built-in AdapterFactory. A LoggerFactory is also available
that allows developers to create new instances of the Logger or load them
from config files (see Phalcon\Config\Config object).

<div class="api-tree" markdown>

- [`Phalcon\Logger\AbstractLogger`](#loggerabstractlogger)
    - **`Phalcon\Logger\Logger`** — implements [`Phalcon\Logger\LoggerInterface`](#loggerloggerinterface)

</div>

__Uses__ `Exception` · `Phalcon\Logger\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerlogger-alert">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">alert(
    string $message,
    array $context = []
)</code>
<span class="desc">Action must be taken immediately.</span>
</a>
<a class="api-item" href="#loggerlogger-critical">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">critical(
    string $message,
    array $context = []
)</code>
<span class="desc">Critical conditions.</span>
</a>
<a class="api-item" href="#loggerlogger-debug">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">debug(
    string $message,
    array $context = []
)</code>
<span class="desc">Detailed debug information.</span>
</a>
<a class="api-item" href="#loggerlogger-emergency">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">emergency(
    string $message,
    array $context = []
)</code>
<span class="desc">System is unusable.</span>
</a>
<a class="api-item" href="#loggerlogger-error">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">error(
    string $message,
    array $context = []
)</code>
<span class="desc">Runtime errors that do not require immediate action but should typically</span>
</a>
<a class="api-item" href="#loggerlogger-info">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">info(
    string $message,
    array $context = []
)</code>
<span class="desc">Interesting events.</span>
</a>
<a class="api-item" href="#loggerlogger-log">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">log(
    mixed $level,
    string $message,
    array $context = []
)</code>
<span class="desc">Logs with an arbitrary level.</span>
</a>
<a class="api-item" href="#loggerlogger-notice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">notice(
    string $message,
    array $context = []
)</code>
<span class="desc">Normal but significant events.</span>
</a>
<a class="api-item" href="#loggerlogger-trace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">trace(
    string $message,
    array $context = []
)</code>
<span class="desc">Extra-verbose diagnostic output.</span>
</a>
<a class="api-item" href="#loggerlogger-warning">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">warning(
    string $message,
    array $context = []
)</code>
<span class="desc">Exceptional occurrences that are not errors.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 10</div>

#### `alert()` { #loggerlogger-alert }

```php
public function alert(
    string $message,
    array $context = []
): void;
```

Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should
trigger the SMS alerts and wake you up.

#### `critical()` { #loggerlogger-critical }

```php
public function critical(
    string $message,
    array $context = []
): void;
```

Critical conditions.

Example: Application component unavailable, unexpected exception.

#### `debug()` { #loggerlogger-debug }

```php
public function debug(
    string $message,
    array $context = []
): void;
```

Detailed debug information.

#### `emergency()` { #loggerlogger-emergency }

```php
public function emergency(
    string $message,
    array $context = []
): void;
```

System is unusable.

#### `error()` { #loggerlogger-error }

```php
public function error(
    string $message,
    array $context = []
): void;
```

Runtime errors that do not require immediate action but should typically
be logged and monitored.

#### `info()` { #loggerlogger-info }

```php
public function info(
    string $message,
    array $context = []
): void;
```

Interesting events.

Example: User logs in, SQL logs.

#### `log()` { #loggerlogger-log }

```php
public function log(
    mixed $level,
    string $message,
    array $context = []
): void;
```

Logs with an arbitrary level.

#### `notice()` { #loggerlogger-notice }

```php
public function notice(
    string $message,
    array $context = []
): void;
```

Normal but significant events.

#### `trace()` { #loggerlogger-trace }

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

#### `warning()` { #loggerlogger-warning }

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

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/LoggerFactory.zep){ .src-btn }

Factory creating logger objects

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - **`Phalcon\Logger\LoggerFactory`**

</div>

__Uses__ `DateTimeZone` · `Phalcon\Config\ConfigInterface` · `Phalcon\Factory\AbstractConfigFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerloggerfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( AdapterFactory $factory )</code>
</a>
<a class="api-item" href="#loggerloggerfactory-load">
<code class="vis vis-public">public</code>
<code class="ret">Logger</code>
<code class="sig">load( mixed $config )</code>
<span class="desc">Factory to create an instance from a Config object</span>
</a>
<a class="api-item" href="#loggerloggerfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">Logger</code>
<code class="sig">newInstance(
    string $name,
    array $adapters = [],
    DateTimeZone $timezone = null
)</code>
<span class="desc">Returns a Logger object</span>
</a>
<a class="api-item" href="#loggerloggerfactory-getarrval">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig">getArrVal(
    array $collection,
    mixed $index,
    mixed $defaultValue = null
)</code>
<span class="desc">@todo Remove this when we get traits</span>
</a>
<a class="api-item" href="#loggerloggerfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getExceptionClass()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #loggerloggerfactory-__construct }

```php
public function __construct( AdapterFactory $factory );
```

#### `load()` { #loggerloggerfactory-load }

```php
public function load( mixed $config ): Logger;
```

Factory to create an instance from a Config object

#### `newInstance()` { #loggerloggerfactory-newinstance }

```php
public function newInstance(
    string $name,
    array $adapters = [],
    DateTimeZone $timezone = null
): Logger;
```

Returns a Logger object

<div class="api-group">Protected · 2</div>

#### `getArrVal()` { #loggerloggerfactory-getarrval }

```php
protected function getArrVal(
    array $collection,
    mixed $index,
    mixed $defaultValue = null
): mixed;
```

@todo Remove this when we get traits

#### `getExceptionClass()` { #loggerloggerfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```


## Logger\LoggerInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/LoggerInterface.zep){ .src-btn }

Interface for Phalcon based logger objects.

<div class="api-tree" markdown>

- **`Phalcon\Logger\LoggerInterface`**

</div>

__Uses__ `Phalcon\Logger\Adapter\AdapterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerloggerinterface-alert">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">alert(
    string $message,
    array $context = []
)</code>
<span class="desc">Action must be taken immediately.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-critical">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">critical(
    string $message,
    array $context = []
)</code>
<span class="desc">Critical conditions.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-debug">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">debug(
    string $message,
    array $context = []
)</code>
<span class="desc">Detailed debug information.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-emergency">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">emergency(
    string $message,
    array $context = []
)</code>
<span class="desc">System is unusable.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-error">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">error(
    string $message,
    array $context = []
)</code>
<span class="desc">Runtime errors that do not require immediate action but should typically</span>
</a>
<a class="api-item" href="#loggerloggerinterface-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getAdapter( string $name )</code>
<span class="desc">Returns an adapter from the stack</span>
</a>
<a class="api-item" href="#loggerloggerinterface-getadapters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAdapters()</code>
<span class="desc">Returns the adapter stack array</span>
</a>
<a class="api-item" href="#loggerloggerinterface-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getLogLevel()</code>
<span class="desc">Returns the log level</span>
</a>
<a class="api-item" href="#loggerloggerinterface-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Returns the name of the logger</span>
</a>
<a class="api-item" href="#loggerloggerinterface-info">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">info(
    string $message,
    array $context = []
)</code>
<span class="desc">Interesting events.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-log">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">log(
    mixed $level,
    string $message,
    array $context = []
)</code>
<span class="desc">Logs with an arbitrary level.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-notice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">notice(
    string $message,
    array $context = []
)</code>
<span class="desc">Normal but significant events.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-trace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">trace(
    string $message,
    array $context = []
)</code>
<span class="desc">Extra-verbose diagnostic output.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-warning">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">warning(
    string $message,
    array $context = []
)</code>
<span class="desc">Exceptional occurrences that are not errors.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 14</div>

#### `alert()` { #loggerloggerinterface-alert }

```php
public function alert(
    string $message,
    array $context = []
): void;
```

Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should
trigger the SMS alerts and wake you up.

#### `critical()` { #loggerloggerinterface-critical }

```php
public function critical(
    string $message,
    array $context = []
): void;
```

Critical conditions.

Example: Application component unavailable, unexpected exception.

#### `debug()` { #loggerloggerinterface-debug }

```php
public function debug(
    string $message,
    array $context = []
): void;
```

Detailed debug information.

#### `emergency()` { #loggerloggerinterface-emergency }

```php
public function emergency(
    string $message,
    array $context = []
): void;
```

System is unusable.

#### `error()` { #loggerloggerinterface-error }

```php
public function error(
    string $message,
    array $context = []
): void;
```

Runtime errors that do not require immediate action but should typically
be logged and monitored.

#### `getAdapter()` { #loggerloggerinterface-getadapter }

```php
public function getAdapter( string $name ): AdapterInterface;
```

Returns an adapter from the stack

#### `getAdapters()` { #loggerloggerinterface-getadapters }

```php
public function getAdapters(): array;
```

Returns the adapter stack array

#### `getLogLevel()` { #loggerloggerinterface-getloglevel }

```php
public function getLogLevel(): int;
```

Returns the log level

#### `getName()` { #loggerloggerinterface-getname }

```php
public function getName(): string;
```

Returns the name of the logger

#### `info()` { #loggerloggerinterface-info }

```php
public function info(
    string $message,
    array $context = []
): void;
```

Interesting events.

Example: User logs in, SQL logs.

#### `log()` { #loggerloggerinterface-log }

```php
public function log(
    mixed $level,
    string $message,
    array $context = []
): void;
```

Logs with an arbitrary level.

#### `notice()` { #loggerloggerinterface-notice }

```php
public function notice(
    string $message,
    array $context = []
): void;
```

Normal but significant events.

#### `trace()` { #loggerloggerinterface-trace }

```php
public function trace(
    string $message,
    array $context = []
): void;
```

Extra-verbose diagnostic output.

#### `warning()` { #loggerloggerinterface-warning }

```php
public function warning(
    string $message,
    array $context = []
): void;
```

Exceptional occurrences that are not errors.

Example: Use of deprecated APIs, poor use of an API, undesirable things
that are not necessarily wrong.
