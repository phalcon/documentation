---
title: "Phalcon Logger"
version: "5.14"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Logger

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Logger\AbstractLogger

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/AbstractLogger.zep">Source on GitHub</a>

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

<div class="api-tree">

- **`Phalcon\Logger\AbstractLogger`**
- [`Phalcon\Logger\Logger`](#loggerlogger)

</div>

__Uses__ `DateTimeImmutable` · `DateTimeZone` · `Exception` · `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Exceptions\AdapterNotFound` · `Phalcon\Logger\Exceptions\NoAdaptersConfigured`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerabstractlogger-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$adapters</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">DateTimeZone</span> <span class="sv">$timezone</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#loggerabstractlogger-addadapter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addAdapter</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">AdapterInterface</span> <span class="sv">$adapter</span></span>)</code>
<span class="desc">Add an adapter to the stack. For processing we use FIFO</span>
</a>
<a class="api-item" href="#loggerabstractlogger-excludeadapters">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">excludeAdapters</span>( <span class="st">array</span> <span class="sv">$adapters</span><span class="sm"> = []</span> )</code>
<span class="desc">Exclude certain adapters.</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">getAdapter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns an adapter from the stack</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getadapters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAdapters</span>()</code>
<span class="desc">Returns the adapter stack array</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLogLevel</span>()</code>
<span class="desc">Returns the log level</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the name of the logger</span>
</a>
<a class="api-item" href="#loggerabstractlogger-removeadapter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">removeAdapter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Removes an adapter from the stack</span>
</a>
<a class="api-item" href="#loggerabstractlogger-setadapters">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAdapters</span>( <span class="st">array</span> <span class="sv">$adapters</span> )</code>
<span class="desc">Sets the adapters stack overriding what is already there</span>
</a>
<a class="api-item" href="#loggerabstractlogger-setloglevel">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setLogLevel</span>( <span class="st">int</span> <span class="sv">$level</span> )</code>
<span class="desc">Sets the adapters stack overriding what is already there</span>
</a>
<a class="api-item" href="#loggerabstractlogger-addmessage">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addMessage</span>(<span class="prm"><span class="st">int</span> <span class="sv">$level</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Adds a message to each handler for processing</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getlevelnumber">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLevelNumber</span>( <span class="st">mixed</span> <span class="sv">$level</span> )</code>
<span class="desc">Converts the level from string/word to an integer</span>
</a>
<a class="api-item" href="#loggerabstractlogger-getlevels">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getLevels</span>()</code>
<span class="desc">Returns an array of log levels with integer to string conversion</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ALERT</span><span class="sm"> = 2</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">CRITICAL</span><span class="sm"> = 1</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">CUSTOM</span><span class="sm"> = 8</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">DEBUG</span><span class="sm"> = 7</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">EMERGENCY</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ERROR</span><span class="sm"> = 3</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">INFO</span><span class="sm"> = 6</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NOTICE</span><span class="sm"> = 5</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">TRACE</span><span class="sm"> = 9</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">WARNING</span><span class="sm"> = 4</span></code>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterInterface[]</code>
<code class="sig"><span class="sv">$adapters</span><span class="sm"> = []</span></code>
<span class="desc">The adapter stack</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$excluded</span><span class="sm"> = []</span></code>
<span class="desc">The excluded adapters for this log process</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$logLevel</span><span class="sm"> = 8</span></code>
<span class="desc">Minimum log level for the logger</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$name</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">DateTimeZone</code>
<code class="sig"><span class="sv">$timezone</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 10</div>

<h4 id="loggerabstractlogger-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
array $adapters = [],
DateTimeZone $timezone = null
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

<h4 id="loggerabstractlogger-setadapters"><code>setAdapters()</code></h4>

```php
public function setAdapters( array $adapters ): static;
```

Sets the adapters stack overriding what is already there

<h4 id="loggerabstractlogger-setloglevel"><code>setLogLevel()</code></h4>

```php
public function setLogLevel( int $level ): static;
```

Sets the adapters stack overriding what is already there

<div class="api-group">Protected · 3</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/AdapterFactory.zep">Source on GitHub</a>

Factory used to create adapters used for Logging

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.14/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.14/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Logger\AdapterFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">AdapterFactory constructor.</span>
</a>
<a class="api-item" href="#loggeradapterfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$fileName</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#loggeradapterfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#loggeradapterfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/AbstractAdapter.zep">Source on GitHub</a>

Class AbstractAdapter

@property string             $defaultFormatter
@property FormatterInterface $formatter
@property bool               $inTransaction
@property array              $queue

<div class="api-tree">

- **`Phalcon\Logger\Adapter\AbstractAdapter`** — implements [`Phalcon\Logger\Adapter\AdapterInterface`](#loggeradapteradapterinterface)
- [`Phalcon\Logger\Adapter\Noop`](#loggeradapternoop)
- [`Phalcon\Logger\Adapter\Stream`](#loggeradapterstream)
- [`Phalcon\Logger\Adapter\Syslog`](#loggeradaptersyslog)

</div>

__Uses__ `Phalcon\Logger\Exceptions\DeserializationFailed` · `Phalcon\Logger\Exceptions\SerializationFailed` · `Phalcon\Logger\Exceptions\TransactionAlreadyActive` · `Phalcon\Logger\Exceptions\TransactionNotActive` · `Phalcon\Logger\Formatter\FormatterInterface` · `Phalcon\Logger\Formatter\Line` · `Phalcon\Logger\Item`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterabstractadapter-__destruct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__destruct</span>()</code>
<span class="desc">Destructor cleanup</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-__serialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__serialize</span>()</code>
<span class="desc">Prevent serialization</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-__unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">__unserialize</span>( <span class="st">array</span> <span class="sv">$data</span> )</code>
<span class="desc">Prevent unserialization</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-add">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">add</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Adds a message to the queue</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-begin">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">begin</span>()</code>
<span class="desc">Starts a transaction</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-commit">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">commit</span>()</code>
<span class="desc">Commits the internal transaction</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-getformatter">
<code class="vis vis-public">public</code>
<code class="ret">FormatterInterface</code>
<code class="sig"><span class="sf">getFormatter</span>()</code>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-getqueuelimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getQueueLimit</span>()</code>
<span class="desc">Returns the configured transaction-queue cap (0 = unlimited)</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-intransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">inTransaction</span>()</code>
<span class="desc">Returns the whether the logger is currently in an active transaction or</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">process</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Processes the message in the adapter</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-rollback">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">rollback</span>()</code>
<span class="desc">Rollbacks the internal transaction</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-setformatter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">setFormatter</span>( <span class="st">FormatterInterface</span> <span class="sv">$formatter</span> )</code>
<span class="desc">Sets the message formatter</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-setqueuelimit">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">setQueueLimit</span>( <span class="st">int</span> <span class="sv">$queueLimit</span> )</code>
<span class="desc">Sets the maximum number of items retained in the transaction</span>
</a>
<a class="api-item" href="#loggeradapterabstractadapter-getformatteditem">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getFormattedItem</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Returns the formatted item</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultFormatter</span><span class="sm"> = &quot;Phalcon\\Logger\Formatter\\Line&quot;</span></code>
<span class="desc">Name of the default formatter class</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">FormatterInterface|null</code>
<code class="sig"><span class="sv">$formatter</span><span class="sm"> = null</span></code>
<span class="desc">Formatter</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$inTransaction</span><span class="sm"> = false</span></code>
<span class="desc">Tells if there is an active transaction or not</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$queue</span><span class="sm"> = []</span></code>
<span class="desc">Array with messages queued in the transaction</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$queueLimit</span><span class="sm"> = 0</span></code>
<span class="desc">Maximum number of items retained in the transaction queue. 0 (default) keeps the original unbounded behavior; a positive value drops the oldest queued item FIFO before a new one is appended in add().</span>
</div>
</div>

### Methods

<div class="api-group">Public · 13</div>

<h4 id="loggeradapterabstractadapter-__destruct"><code>__destruct()</code></h4>

```php
public function __destruct();
```

Destructor cleanup

<h4 id="loggeradapterabstractadapter-__serialize"><code>__serialize()</code></h4>

```php
public function __serialize(): array;
```

Prevent serialization

<h4 id="loggeradapterabstractadapter-__unserialize"><code>__unserialize()</code></h4>

```php
public function __unserialize( array $data ): void;
```

Prevent unserialization

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

<h4 id="loggeradapterabstractadapter-commit"><code>commit()</code></h4>

```php
public function commit(): AdapterInterface;
```

Commits the internal transaction

<h4 id="loggeradapterabstractadapter-getformatter"><code>getFormatter()</code></h4>

```php
public function getFormatter(): FormatterInterface;
```

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

<div class="api-group">Protected · 1</div>

<h4 id="loggeradapterabstractadapter-getformatteditem"><code>getFormattedItem()</code></h4>

```php
protected function getFormattedItem( Item $item ): string;
```

Returns the formatted item

## Logger\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/AdapterInterface.zep">Source on GitHub</a>

Phalcon\Logger\AdapterInterface

Interface for Phalcon\Logger adapters

<div class="api-tree">

- **`Phalcon\Logger\Adapter\AdapterInterface`**

</div>

__Uses__ `Phalcon\Logger\Formatter\FormatterInterface` · `Phalcon\Logger\Item`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapteradapterinterface-add">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">add</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Adds a message in the queue</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-begin">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">begin</span>()</code>
<span class="desc">Starts a transaction</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes the logger</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-commit">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">commit</span>()</code>
<span class="desc">Commits the internal transaction</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-getformatter">
<code class="vis vis-public">public</code>
<code class="ret">FormatterInterface</code>
<code class="sig"><span class="sf">getFormatter</span>()</code>
<span class="desc">Returns the internal formatter</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-intransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">inTransaction</span>()</code>
<span class="desc">Returns the whether the logger is currently in an active transaction or</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">process</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Processes the message in the adapter</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-rollback">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">rollback</span>()</code>
<span class="desc">Rollbacks the internal transaction</span>
</a>
<a class="api-item" href="#loggeradapteradapterinterface-setformatter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">setFormatter</span>( <span class="st">FormatterInterface</span> <span class="sv">$formatter</span> )</code>
<span class="desc">Sets the message formatter</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

<h4 id="loggeradapteradapterinterface-add"><code>add()</code></h4>

```php
public function add( Item $item ): AdapterInterface;
```

Adds a message in the queue

<h4 id="loggeradapteradapterinterface-begin"><code>begin()</code></h4>

```php
public function begin(): AdapterInterface;
```

Starts a transaction

<h4 id="loggeradapteradapterinterface-close"><code>close()</code></h4>

```php
public function close(): bool;
```

Closes the logger

<h4 id="loggeradapteradapterinterface-commit"><code>commit()</code></h4>

```php
public function commit(): AdapterInterface;
```

Commits the internal transaction

<h4 id="loggeradapteradapterinterface-getformatter"><code>getFormatter()</code></h4>

```php
public function getFormatter(): FormatterInterface;
```

Returns the internal formatter

<h4 id="loggeradapteradapterinterface-intransaction"><code>inTransaction()</code></h4>

```php
public function inTransaction(): bool;
```

Returns the whether the logger is currently in an active transaction or
not

<h4 id="loggeradapteradapterinterface-process"><code>process()</code></h4>

```php
public function process( Item $item ): void;
```

Processes the message in the adapter

<h4 id="loggeradapteradapterinterface-rollback"><code>rollback()</code></h4>

```php
public function rollback(): AdapterInterface;
```

Rollbacks the internal transaction

<h4 id="loggeradapteradapterinterface-setformatter"><code>setFormatter()</code></h4>

```php
public function setFormatter( FormatterInterface $formatter ): AdapterInterface;
```

Sets the message formatter

## Logger\Adapter\Exceptions\FileOpenFailed

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Exceptions/FileOpenFailed.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Logger\Exception`](#loggerexception)
- **`Phalcon\Logger\Adapter\Exceptions\FileOpenFailed`**

</div>

__Uses__ `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterexceptionsfileopenfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="loggeradapterexceptionsfileopenfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string $mode
);
```

## Logger\Adapter\Exceptions\InvalidStreamMode

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Exceptions/InvalidStreamMode.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Logger\Exception`](#loggerexception)
- **`Phalcon\Logger\Adapter\Exceptions\InvalidStreamMode`**

</div>

__Uses__ `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterexceptionsinvalidstreammode-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="loggeradapterexceptionsinvalidstreammode-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Logger\Adapter\Exceptions\SyslogOpenFailed

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Exceptions/SyslogOpenFailed.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Logger\Exception`](#loggerexception)
- **`Phalcon\Logger\Adapter\Exceptions\SyslogOpenFailed`**

</div>

__Uses__ `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterexceptionssyslogopenfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$facility</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="loggeradapterexceptionssyslogopenfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
int $facility
);
```

## Logger\Adapter\Noop

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Noop.zep">Source on GitHub</a>

Class Noop

@package Phalcon\Logger\Adapter

<div class="api-tree">

- [`Phalcon\Logger\Adapter\AbstractAdapter`](#loggeradapterabstractadapter)
- **`Phalcon\Logger\Adapter\Noop`**

</div>

__Uses__ `Phalcon\Logger\Item`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapternoop-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes the stream</span>
</a>
<a class="api-item" href="#loggeradapternoop-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">process</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Processes the message i.e. writes it to the file</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Stream.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Logger\Adapter\AbstractAdapter`](#loggeradapterabstractadapter)
- **`Phalcon\Logger\Adapter\Stream`**

</div>

__Uses__ `Phalcon\Logger\Adapter\Exceptions\FileOpenFailed` · `Phalcon\Logger\Adapter\Exceptions\InvalidStreamMode` · `Phalcon\Logger\Item`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradapterstream-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Stream constructor.</span>
</a>
<a class="api-item" href="#loggeradapterstream-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes the stream</span>
</a>
<a class="api-item" href="#loggeradapterstream-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Stream name</span>
</a>
<a class="api-item" href="#loggeradapterstream-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">process</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Processes the message i.e. writes it to the file</span>
</a>
<a class="api-item" href="#loggeradapterstream-phpfclose">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpFclose</span>( <span class="st">mixed</span> <span class="sv">$handle</span> )</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
<a class="api-item" href="#loggeradapterstream-phpfopen">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpFopen</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span></span>)</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
<a class="api-item" href="#loggeradapterstream-phpfwrite">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpFwrite</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$handle</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span></span>)</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">resource|null</code>
<code class="sig"><span class="sv">$handler</span><span class="sm"> = null</span></code>
<span class="desc">Stream handler resource</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$mode</span><span class="sm"> = &quot;ab&quot;</span></code>
<span class="desc">The file open mode. Defaults to &#039;ab&#039;</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$name</span></code>
<span class="desc">Stream name</span>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

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

<div class="api-group">Protected · 3</div>

<h4 id="loggeradapterstream-phpfclose"><code>phpFclose()</code></h4>

```php
protected function phpFclose( mixed $handle ): bool;
```

@todo to be removed when we get traits

<h4 id="loggeradapterstream-phpfopen"><code>phpFopen()</code></h4>

```php
protected function phpFopen(
string $filename,
string $mode
);
```

@todo to be removed when we get traits

<h4 id="loggeradapterstream-phpfwrite"><code>phpFwrite()</code></h4>

```php
protected function phpFwrite(
mixed $handle,
string $message
);
```

@todo to be removed when we get traits

## Logger\Adapter\Syslog

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Syslog.zep">Source on GitHub</a>

Class Syslog

@property string $defaultFormatter
@property int    $facility
@property string $name
@property bool   $opened
@property int    $option

<div class="api-tree">

- [`Phalcon\Logger\Adapter\AbstractAdapter`](#loggeradapterabstractadapter)
- **`Phalcon\Logger\Adapter\Syslog`**

</div>

__Uses__ `Phalcon\Logger\Adapter\Exceptions\SyslogOpenFailed` · `Phalcon\Logger\Enum` · `Phalcon\Logger\Item`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeradaptersyslog-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Syslog constructor.</span>
</a>
<a class="api-item" href="#loggeradaptersyslog-close">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes the logger</span>
</a>
<a class="api-item" href="#loggeradaptersyslog-process">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">process</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Processes the message i.e. writes it to the syslog</span>
</a>
<a class="api-item" href="#loggeradaptersyslog-openlog">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">openlog</span>(<span class="prm"><span class="st">string</span> <span class="sv">$ident</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$option</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$facility</span></span>)</code>
<span class="desc">Open connection to system logger</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$facility</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$name</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$opened</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$option</span><span class="sm"> = 0</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

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

<div class="api-group">Protected · 1</div>

<h4 id="loggeradaptersyslog-openlog"><code>openlog()</code></h4>

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Enum.zep">Source on GitHub</a>

Log Level Enum constants

<div class="api-tree">

- **`Phalcon\Logger\Enum`**

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ALERT</span><span class="sm"> = 2</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">CRITICAL</span><span class="sm"> = 1</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">CUSTOM</span><span class="sm"> = 8</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">DEBUG</span><span class="sm"> = 7</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">EMERGENCY</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ERROR</span><span class="sm"> = 3</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">INFO</span><span class="sm"> = 6</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NOTICE</span><span class="sm"> = 5</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">TRACE</span><span class="sm"> = 9</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">WARNING</span><span class="sm"> = 4</span></code>
</div>
</div>

## Logger\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exception.zep">Source on GitHub</a>

Phalcon\Logger\Exception

Exceptions thrown in Phalcon\Logger will use this class

<div class="api-tree">

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/AdapterNotFound.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Logger\Exception`](#loggerexception)
- **`Phalcon\Logger\Exceptions\AdapterNotFound`**

</div>

__Uses__ `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionsadapternotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="loggerexceptionsadapternotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Logger\Exceptions\DeserializationFailed

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/DeserializationFailed.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Logger\Exception`](#loggerexception)
- **`Phalcon\Logger\Exceptions\DeserializationFailed`**

</div>

__Uses__ `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionsdeserializationfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="loggerexceptionsdeserializationfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Logger\Exceptions\NoAdaptersConfigured

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/NoAdaptersConfigured.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Logger\Exception`](#loggerexception)
- **`Phalcon\Logger\Exceptions\NoAdaptersConfigured`**

</div>

__Uses__ `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionsnoadaptersconfigured-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="loggerexceptionsnoadaptersconfigured-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Logger\Exceptions\SerializationFailed

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/SerializationFailed.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Logger\Exception`](#loggerexception)
- **`Phalcon\Logger\Exceptions\SerializationFailed`**

</div>

__Uses__ `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionsserializationfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="loggerexceptionsserializationfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Logger\Exceptions\TransactionAlreadyActive

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/TransactionAlreadyActive.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Logger\Exception`](#loggerexception)
- **`Phalcon\Logger\Exceptions\TransactionAlreadyActive`**

</div>

__Uses__ `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionstransactionalreadyactive-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="loggerexceptionstransactionalreadyactive-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Logger\Exceptions\TransactionNotActive

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exceptions/TransactionNotActive.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Logger\Exception`](#loggerexception)
- **`Phalcon\Logger\Exceptions\TransactionNotActive`**

</div>

__Uses__ `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerexceptionstransactionnotactive-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="loggerexceptionstransactionnotactive-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Logger\Formatter\AbstractFormatter

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/AbstractFormatter.zep">Source on GitHub</a>

Class AbstractFormatter

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](/5.14/api/phalcon_support/#supporthelperstrabstractstr)
- **`Phalcon\Logger\Formatter\AbstractFormatter`** — implements [`Phalcon\Logger\Formatter\FormatterInterface`](#loggerformatterformatterinterface)
- [`Phalcon\Logger\Formatter\Json`](#loggerformatterjson)
- [`Phalcon\Logger\Formatter\Line`](#loggerformatterline)

</div>

__Uses__ `DateTimeImmutable` · `Phalcon\Logger\Item` · `Phalcon\Support\Helper\Str\AbstractStr`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerformatterabstractformatter-getdateformat">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDateFormat</span>()</code>
</a>
<a class="api-item" href="#loggerformatterabstractformatter-setdateformat">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDateFormat</span>( <span class="st">string</span> <span class="sv">$format</span> )</code>
</a>
<a class="api-item" href="#loggerformatterabstractformatter-getformatteddate">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getFormattedDate</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Returns the date formatted for the logger.</span>
</a>
<a class="api-item" href="#loggerformatterabstractformatter-getinterpolatedmessage">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getInterpolatedMessage</span>(<span class="prm"><span class="st">Item</span> <span class="sv">$item</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$dateFormat</span><span class="sm"> = &quot;c&quot;</span></code>
<span class="desc">Default date format</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$interpolatorLeft</span><span class="sm"> = &quot;%&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$interpolatorRight</span><span class="sm"> = &quot;%&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="loggerformatterabstractformatter-getdateformat"><code>getDateFormat()</code></h4>

```php
public function getDateFormat(): string;
```

<h4 id="loggerformatterabstractformatter-setdateformat"><code>setDateFormat()</code></h4>

```php
public function setDateFormat( string $format ): void;
```

<div class="api-group">Protected · 2</div>

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

## Logger\Formatter\FormatterInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/FormatterInterface.zep">Source on GitHub</a>

Phalcon\Logger\FormatterInterface

This interface must be implemented by formatters in Phalcon\Logger

<div class="api-tree">

- **`Phalcon\Logger\Formatter\FormatterInterface`**

</div>

__Uses__ `Phalcon\Logger\Item`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerformatterformatterinterface-format">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">format</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Applies a format to an item</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="loggerformatterformatterinterface-format"><code>format()</code></h4>

```php
public function format( Item $item ): string;
```

Applies a format to an item

## Logger\Formatter\Json

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/Json.zep">Source on GitHub</a>

Formats messages using JSON encoding

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](/5.14/api/phalcon_support/#supporthelperstrabstractstr)
- [`Phalcon\Logger\Formatter\AbstractFormatter`](#loggerformatterabstractformatter)
- **`Phalcon\Logger\Formatter\Json`**

</div>

__Uses__ `JsonException` · `Phalcon\Logger\Item`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerformatterjson-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$dateFormat</span><span class="sm"> = &quot;c&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$interpolatorLeft</span><span class="sm"> = &quot;%&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$interpolatorRight</span><span class="sm"> = &quot;%&quot;</span></span>)</code>
<span class="desc">Json constructor.</span>
</a>
<a class="api-item" href="#loggerformatterjson-format">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">format</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Applies a format to a message before sent it to the internal log</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/Line.zep">Source on GitHub</a>

Class Line

<div class="api-tree">

- [`Phalcon\Support\Helper\Str\AbstractStr`](/5.14/api/phalcon_support/#supporthelperstrabstractstr)
- [`Phalcon\Logger\Formatter\AbstractFormatter`](#loggerformatterabstractformatter)
- **`Phalcon\Logger\Formatter\Line`**

</div>

__Uses__ `Exception` · `Phalcon\Logger\Item`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerformatterline-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$format</span><span class="sm"> = &quot;[%date%][%level%] %message%&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$dateFormat</span><span class="sm"> = &quot;c&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$interpolatorLeft</span><span class="sm"> = &quot;%&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$interpolatorRight</span><span class="sm"> = &quot;%&quot;</span></span>)</code>
<span class="desc">Line constructor.</span>
</a>
<a class="api-item" href="#loggerformatterline-format">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">format</span>( <span class="st">Item</span> <span class="sv">$item</span> )</code>
<span class="desc">Applies a format to a message before sent it to the internal log</span>
</a>
<a class="api-item" href="#loggerformatterline-getformat">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getFormat</span>()</code>
<span class="desc">Return the format applied to each message</span>
</a>
<a class="api-item" href="#loggerformatterline-setformat">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setFormat</span>( <span class="st">string</span> <span class="sv">$format</span> )</code>
<span class="desc">Set the format applied to each message</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$format</span></code>
<span class="desc">Format applied to each message</span>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Item.zep">Source on GitHub</a>

Phalcon\Logger\Item

Represents each item in a logging transaction

@property array             $context
@property string            $message
@property int               $level
@property string            $levelName
@property DateTimeImmutable $dateTime

<div class="api-tree">

- **`Phalcon\Logger\Item`**

</div>

__Uses__ `DateTimeImmutable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggeritem-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$levelName</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$level</span>,</span><span class="prm"><span class="st">DateTimeImmutable</span> <span class="sv">$dateTime</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Item constructor.</span>
</a>
<a class="api-item" href="#loggeritem-getcontext">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getContext</span>()</code>
</a>
<a class="api-item" href="#loggeritem-getdatetime">
<code class="vis vis-public">public</code>
<code class="ret">DateTimeImmutable</code>
<code class="sig"><span class="sf">getDateTime</span>()</code>
</a>
<a class="api-item" href="#loggeritem-getlevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLevel</span>()</code>
</a>
<a class="api-item" href="#loggeritem-getlevelname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLevelName</span>()</code>
</a>
<a class="api-item" href="#loggeritem-getmessage">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMessage</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$context</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">DateTimeImmutable</code>
<code class="sig"><span class="sv">$dateTime</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$level</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$levelName</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$message</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Logger.zep">Source on GitHub</a>

Phalcon Logger.

A logger, with various adapters and formatters. A formatter
interface is available as well as an adapter one. Adapters can be created
easily using the built-in AdapterFactory. A LoggerFactory is also available
that allows developers to create new instances of the Logger or load them
from config files (see Phalcon\Config\Config object).

<div class="api-tree">

- [`Phalcon\Logger\AbstractLogger`](#loggerabstractlogger)
- **`Phalcon\Logger\Logger`** — implements [`Phalcon\Logger\LoggerInterface`](#loggerloggerinterface)

</div>

__Uses__ `Exception` · `Phalcon\Logger\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerlogger-alert">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">alert</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Action must be taken immediately.</span>
</a>
<a class="api-item" href="#loggerlogger-critical">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">critical</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Critical conditions.</span>
</a>
<a class="api-item" href="#loggerlogger-debug">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">debug</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Detailed debug information.</span>
</a>
<a class="api-item" href="#loggerlogger-emergency">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">emergency</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">System is unusable.</span>
</a>
<a class="api-item" href="#loggerlogger-error">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">error</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Runtime errors that do not require immediate action but should typically</span>
</a>
<a class="api-item" href="#loggerlogger-info">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">info</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Interesting events.</span>
</a>
<a class="api-item" href="#loggerlogger-log">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">log</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$level</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Logs with an arbitrary level.</span>
</a>
<a class="api-item" href="#loggerlogger-notice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">notice</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Normal but significant events.</span>
</a>
<a class="api-item" href="#loggerlogger-trace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">trace</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Extra-verbose diagnostic output.</span>
</a>
<a class="api-item" href="#loggerlogger-warning">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">warning</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Exceptional occurrences that are not errors.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 10</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/LoggerFactory.zep">Source on GitHub</a>

Factory creating logger objects

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.14/api/phalcon_factory/#factoryabstractconfigfactory)
- **`Phalcon\Logger\LoggerFactory`**

</div>

__Uses__ `DateTimeZone` · `Phalcon\Config\ConfigInterface` · `Phalcon\Factory\AbstractConfigFactory`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerloggerfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">AdapterFactory</span> <span class="sv">$factory</span> )</code>
</a>
<a class="api-item" href="#loggerloggerfactory-load">
<code class="vis vis-public">public</code>
<code class="ret">Logger</code>
<code class="sig"><span class="sf">load</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
<span class="desc">Factory to create an instance from a Config object</span>
</a>
<a class="api-item" href="#loggerloggerfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">Logger</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$adapters</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">DateTimeZone</span> <span class="sv">$timezone</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns a Logger object</span>
</a>
<a class="api-item" href="#loggerloggerfactory-getarrval">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getArrVal</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$index</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">@todo Remove this when we get traits</span>
</a>
<a class="api-item" href="#loggerloggerfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

<h4 id="loggerloggerfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( AdapterFactory $factory );
```

<h4 id="loggerloggerfactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): Logger;
```

Factory to create an instance from a Config object

<h4 id="loggerloggerfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
string $name,
array $adapters = [],
DateTimeZone $timezone = null
): Logger;
```

Returns a Logger object

<div class="api-group">Protected · 2</div>

<h4 id="loggerloggerfactory-getarrval"><code>getArrVal()</code></h4>

```php
protected function getArrVal(
array $collection,
mixed $index,
mixed $defaultValue = null
): mixed;
```

@todo Remove this when we get traits

<h4 id="loggerloggerfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

## Logger\LoggerInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/LoggerInterface.zep">Source on GitHub</a>

Interface for Phalcon based logger objects.

<div class="api-tree">

- **`Phalcon\Logger\LoggerInterface`**

</div>

__Uses__ `Phalcon\Logger\Adapter\AdapterInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#loggerloggerinterface-alert">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">alert</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Action must be taken immediately.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-critical">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">critical</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Critical conditions.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-debug">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">debug</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Detailed debug information.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-emergency">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">emergency</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">System is unusable.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-error">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">error</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Runtime errors that do not require immediate action but should typically</span>
</a>
<a class="api-item" href="#loggerloggerinterface-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">getAdapter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns an adapter from the stack</span>
</a>
<a class="api-item" href="#loggerloggerinterface-getadapters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAdapters</span>()</code>
<span class="desc">Returns the adapter stack array</span>
</a>
<a class="api-item" href="#loggerloggerinterface-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLogLevel</span>()</code>
<span class="desc">Returns the log level</span>
</a>
<a class="api-item" href="#loggerloggerinterface-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the name of the logger</span>
</a>
<a class="api-item" href="#loggerloggerinterface-info">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">info</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Interesting events.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-log">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">log</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$level</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Logs with an arbitrary level.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-notice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">notice</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Normal but significant events.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-trace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">trace</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Extra-verbose diagnostic output.</span>
</a>
<a class="api-item" href="#loggerloggerinterface-warning">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">warning</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Exceptional occurrences that are not errors.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 14</div>

<h4 id="loggerloggerinterface-alert"><code>alert()</code></h4>

```php
public function alert(
string $message,
array $context = []
): void;
```

Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should
trigger the SMS alerts and wake you up.

<h4 id="loggerloggerinterface-critical"><code>critical()</code></h4>

```php
public function critical(
string $message,
array $context = []
): void;
```

Critical conditions.

Example: Application component unavailable, unexpected exception.

<h4 id="loggerloggerinterface-debug"><code>debug()</code></h4>

```php
public function debug(
string $message,
array $context = []
): void;
```

Detailed debug information.

<h4 id="loggerloggerinterface-emergency"><code>emergency()</code></h4>

```php
public function emergency(
string $message,
array $context = []
): void;
```

System is unusable.

<h4 id="loggerloggerinterface-error"><code>error()</code></h4>

```php
public function error(
string $message,
array $context = []
): void;
```

Runtime errors that do not require immediate action but should typically
be logged and monitored.

<h4 id="loggerloggerinterface-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter( string $name ): AdapterInterface;
```

Returns an adapter from the stack

<h4 id="loggerloggerinterface-getadapters"><code>getAdapters()</code></h4>

```php
public function getAdapters(): array;
```

Returns the adapter stack array

<h4 id="loggerloggerinterface-getloglevel"><code>getLogLevel()</code></h4>

```php
public function getLogLevel(): int;
```

Returns the log level

<h4 id="loggerloggerinterface-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the name of the logger

<h4 id="loggerloggerinterface-info"><code>info()</code></h4>

```php
public function info(
string $message,
array $context = []
): void;
```

Interesting events.

Example: User logs in, SQL logs.

<h4 id="loggerloggerinterface-log"><code>log()</code></h4>

```php
public function log(
mixed $level,
string $message,
array $context = []
): void;
```

Logs with an arbitrary level.

<h4 id="loggerloggerinterface-notice"><code>notice()</code></h4>

```php
public function notice(
string $message,
array $context = []
): void;
```

Normal but significant events.

<h4 id="loggerloggerinterface-trace"><code>trace()</code></h4>

```php
public function trace(
string $message,
array $context = []
): void;
```

Extra-verbose diagnostic output.

<h4 id="loggerloggerinterface-warning"><code>warning()</code></h4>

```php
public function warning(
string $message,
array $context = []
): void;
```

Exceptional occurrences that are not errors.

Example: Use of deprecated APIs, poor use of an API, undesirable things
that are not necessarily wrong.

Source: https://docs.phalcon.io/5.14/api/phalcon_logger/index.mdx
