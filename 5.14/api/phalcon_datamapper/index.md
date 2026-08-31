---
title: "Phalcon Datamapper"
version: "5.14"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Datamapper

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## DataMapper\Pdo\Connection

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection.zep">Source on GitHub</a>

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods

<div class="api-tree">

- [`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`](#datamapperpdoconnectionabstractconnection)
- **`Phalcon\DataMapper\Pdo\Connection`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection\AbstractConnection` · `Phalcon\DataMapper\Pdo\Exception\DriverNotSupported` · `Phalcon\DataMapper\Pdo\Profiler\Profiler` · `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnection-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$dsn</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$username</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$password</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$queries</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">ProfilerInterface</span> <span class="sv">$profiler</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#datamapperpdoconnection-__debuginfo">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">__debugInfo</span>()</code>
<span class="desc">The purpose of this method is to hide sensitive data from stack traces.</span>
</a>
<a class="api-item" href="#datamapperpdoconnection-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">connect</span>()</code>
<span class="desc">Connects to the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnection-disconnect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">disconnect</span>()</code>
<span class="desc">Disconnects from the database.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$arguments</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

<h4 id="datamapperpdoconnection-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $dsn,
string $username = null,
string $password = null,
array $options = [],
array $queries = [],
ProfilerInterface $profiler = null
);
```

Constructor.

This overrides the parent so that it can take connection attributes as a
constructor parameter, and set them after connection.

<h4 id="datamapperpdoconnection-__debuginfo"><code>__debugInfo()</code></h4>

```php
public function __debugInfo(): array;
```

The purpose of this method is to hide sensitive data from stack traces.

<h4 id="datamapperpdoconnection-connect"><code>connect()</code></h4>

```php
public function connect(): void;
```

Connects to the database.

<h4 id="datamapperpdoconnection-disconnect"><code>disconnect()</code></h4>

```php
public function disconnect(): void;
```

Disconnects from the database.

## DataMapper\Pdo\ConnectionLocator

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/ConnectionLocator.zep">Source on GitHub</a>

Manages Connection instances for default, read, and write connections.

<div class="api-tree">

- **`Phalcon\DataMapper\Pdo\ConnectionLocator`** — implements [`Phalcon\DataMapper\Pdo\ConnectionLocatorInterface`](#datamapperpdoconnectionlocatorinterface)

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection\ConnectionInterface` · `Phalcon\DataMapper\Pdo\Exception\ConnectionNotFound`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectionlocator-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">ConnectionInterface</span> <span class="sv">$master</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$read</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$write</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-getmaster">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig"><span class="sf">getMaster</span>()</code>
<span class="desc">Returns the default connection object.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-getread">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig"><span class="sf">getRead</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Returns a read connection by name; if no name is given, picks a</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-getwrite">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig"><span class="sf">getWrite</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Returns a write connection by name; if no name is given, picks a</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-setmaster">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setMaster</span>( <span class="st">ConnectionInterface</span> <span class="sv">$callableObject</span> )</code>
<span class="desc">Sets the default connection factory.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-setread">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setRead</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callableObject</span></span>)</code>
<span class="desc">Sets a read connection factory by name.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-setwrite">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setWrite</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callableObject</span></span>)</code>
<span class="desc">Sets a write connection factory by name.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-getconnection">
<code class="vis vis-protected">protected</code>
<code class="ret">ConnectionInterface</code>
<code class="sig"><span class="sf">getConnection</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns a connection by name.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ConnectionInterface</code>
<code class="sig"><span class="sv">$master</span></code>
<span class="desc">A default Connection connection factory/instance.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$read</span><span class="sm"> = []</span></code>
<span class="desc">A registry of Connection &quot;read&quot; factories/instances.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$write</span><span class="sm"> = []</span></code>
<span class="desc">A registry of Connection &quot;write&quot; factories/instances.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 7</div>

<h4 id="datamapperpdoconnectionlocator-__construct"><code>__construct()</code></h4>

```php
public function __construct(
ConnectionInterface $master,
array $read = [],
array $write = []
);
```

Constructor.

<h4 id="datamapperpdoconnectionlocator-getmaster"><code>getMaster()</code></h4>

```php
public function getMaster(): ConnectionInterface;
```

Returns the default connection object.

<h4 id="datamapperpdoconnectionlocator-getread"><code>getRead()</code></h4>

```php
public function getRead( string $name = "" ): ConnectionInterface;
```

Returns a read connection by name; if no name is given, picks a
random connection; if no read connections are present, returns the
default connection.

<h4 id="datamapperpdoconnectionlocator-getwrite"><code>getWrite()</code></h4>

```php
public function getWrite( string $name = "" ): ConnectionInterface;
```

Returns a write connection by name; if no name is given, picks a
random connection; if no write connections are present, returns the
default connection.

<h4 id="datamapperpdoconnectionlocator-setmaster"><code>setMaster()</code></h4>

```php
public function setMaster( ConnectionInterface $callableObject ): static;
```

Sets the default connection factory.

<h4 id="datamapperpdoconnectionlocator-setread"><code>setRead()</code></h4>

```php
public function setRead(
string $name,
callable $callableObject
): static;
```

Sets a read connection factory by name.

<h4 id="datamapperpdoconnectionlocator-setwrite"><code>setWrite()</code></h4>

```php
public function setWrite(
string $name,
callable $callableObject
): static;
```

Sets a write connection factory by name.

<div class="api-group">Protected · 1</div>

<h4 id="datamapperpdoconnectionlocator-getconnection"><code>getConnection()</code></h4>

```php
protected function getConnection(
string $type,
string $name = ""
): ConnectionInterface;
```

Returns a connection by name.

## DataMapper\Pdo\ConnectionLocatorInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/ConnectionLocatorInterface.zep">Source on GitHub</a>

Locates PDO connections for default, read, and write databases.

<div class="api-tree">

- **`Phalcon\DataMapper\Pdo\ConnectionLocatorInterface`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-getmaster">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig"><span class="sf">getMaster</span>()</code>
<span class="desc">Returns the default connection object.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-getread">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig"><span class="sf">getRead</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Returns a read connection by name; if no name is given, picks a</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-getwrite">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig"><span class="sf">getWrite</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Returns a write connection by name; if no name is given, picks a</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-setmaster">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionLocatorInterface</code>
<code class="sig"><span class="sf">setMaster</span>( <span class="st">ConnectionInterface</span> <span class="sv">$callableObject</span> )</code>
<span class="desc">Sets the default connection registry entry.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-setread">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionLocatorInterface</code>
<code class="sig"><span class="sf">setRead</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callableObject</span></span>)</code>
<span class="desc">Sets a read connection registry entry by name.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-setwrite">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionLocatorInterface</code>
<code class="sig"><span class="sf">setWrite</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">callable</span> <span class="sv">$callableObject</span></span>)</code>
<span class="desc">Sets a write connection registry entry by name.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

<h4 id="datamapperpdoconnectionlocatorinterface-getmaster"><code>getMaster()</code></h4>

```php
public function getMaster(): ConnectionInterface;
```

Returns the default connection object.

<h4 id="datamapperpdoconnectionlocatorinterface-getread"><code>getRead()</code></h4>

```php
public function getRead( string $name = "" ): ConnectionInterface;
```

Returns a read connection by name; if no name is given, picks a
random connection; if no read connections are present, returns the
default connection.

<h4 id="datamapperpdoconnectionlocatorinterface-getwrite"><code>getWrite()</code></h4>

```php
public function getWrite( string $name = "" ): ConnectionInterface;
```

Returns a write connection by name; if no name is given, picks a
random connection; if no write connections are present, returns the
default connection.

<h4 id="datamapperpdoconnectionlocatorinterface-setmaster"><code>setMaster()</code></h4>

```php
public function setMaster( ConnectionInterface $callableObject ): ConnectionLocatorInterface;
```

Sets the default connection registry entry.

<h4 id="datamapperpdoconnectionlocatorinterface-setread"><code>setRead()</code></h4>

```php
public function setRead(
string $name,
callable $callableObject
): ConnectionLocatorInterface;
```

Sets a read connection registry entry by name.

<h4 id="datamapperpdoconnectionlocatorinterface-setwrite"><code>setWrite()</code></h4>

```php
public function setWrite(
string $name,
callable $callableObject
): ConnectionLocatorInterface;
```

Sets a write connection registry entry by name.

## DataMapper\Pdo\Connection\AbstractConnection

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/AbstractConnection.zep">Source on GitHub</a>

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods

<div class="api-tree">

- **`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`** — implements [`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`](#datamapperpdoconnectionconnectioninterface)
- [`Phalcon\DataMapper\Pdo\Connection`](#datamapperpdoconnection)
- [`Phalcon\DataMapper\Pdo\Connection\Decorated`](#datamapperpdoconnectiondecorated)

</div>

__Uses__ `BadMethodCallException` · `Phalcon\DataMapper\Pdo\Exception\UnknownDriverMethod` · `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-__call">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__call</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
<span class="desc">Proxies to PDO methods created for specific drivers; in particular,</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-begintransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">beginTransaction</span>()</code>
<span class="desc">Begins a transaction. If the profiler is enabled, the operation will</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-commit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">commit</span>()</code>
<span class="desc">Commits the existing transaction. If the profiler is enabled, the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">connect</span>()</code>
<span class="desc">Connects to the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-disconnect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">disconnect</span>()</code>
<span class="desc">Disconnects from the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-errorcode">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">errorCode</span>()</code>
<span class="desc">Gets the most recent error code.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-errorinfo">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">errorInfo</span>()</code>
<span class="desc">Gets the most recent error info.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-exec">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">exec</span>( <span class="st">string</span> <span class="sv">$statement</span> )</code>
<span class="desc">Executes an SQL statement and returns the number of affected rows. If</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchaffected">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">fetchAffected</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Performs a statement and returns the number of affected rows.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchAll</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches a sequential array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchassoc">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchAssoc</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches an associative array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchcolumn">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$column</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Fetches a column of rows as a sequential array (default first one).</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchgroup">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchGroup</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$flags</span><span class="sm"> = \PDO::FETCH_ASSOC</span></span>)</code>
<span class="desc">Fetches multiple from the database as an associative array. The first</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchobject">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">fetchObject</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$className</span><span class="sm"> = &quot;stdClass&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches one row from the database as an object where the column values</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchobjects">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchObjects</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$className</span><span class="sm"> = &quot;stdClass&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches a sequential array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchone">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchOne</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches one row from the database as an associative array.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchpairs">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchPairs</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches an associative array of rows as key-value pairs (first column is</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchvalue">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">fetchValue</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches the very first value (i.e., first column of the first row).</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">\PDO</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
<span class="desc">Return the inner PDO (if any)</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getattribute">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getAttribute</span>( <span class="st">int</span> <span class="sv">$attribute</span> )</code>
<span class="desc">Retrieve a database connection attribute</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getavailabledrivers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAvailableDrivers</span>()</code>
<span class="desc">Return an array of available PDO drivers (empty array if none available)</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getdrivername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDriverName</span>()</code>
<span class="desc">Return the driver name</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getprofiler">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig"><span class="sf">getProfiler</span>()</code>
<span class="desc">Returns the Profiler instance.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getquotenames">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getQuoteNames</span>( <span class="st">string</span> <span class="sv">$driver</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Gets the quote parameters based on the driver</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-intransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">inTransaction</span>()</code>
<span class="desc">Is a transaction currently active? If the profiler is enabled, the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-isconnected">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isConnected</span>()</code>
<span class="desc">Is the PDO connection active?</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-lastinsertid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">lastInsertId</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns the last inserted autoincrement sequence value. If the profiler</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-perform">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement</code>
<code class="sig"><span class="sf">perform</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Performs a query with bound values and returns the resulting</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-prepare">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement|bool</code>
<code class="sig"><span class="sf">prepare</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Prepares an SQL statement for execution.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-query">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement|bool</code>
<code class="sig"><span class="sf">query</span>( <span class="st">string</span> <span class="sv">$statement</span> )</code>
<span class="desc">Queries the database and returns a PDOStatement. If the profiler is</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-quote">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">quote</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = \PDO::PARAM_STR</span></span>)</code>
<span class="desc">Quotes a value for use in an SQL statement. This differs from</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-rollback">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">rollBack</span>()</code>
<span class="desc">Rolls back the current transaction, and restores autocommit mode. If the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-setattribute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setAttribute</span>(<span class="prm"><span class="st">int</span> <span class="sv">$attribute</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set a database connection attribute</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-setprofiler">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setProfiler</span>( <span class="st">ProfilerInterface</span> <span class="sv">$profiler</span> )</code>
<span class="desc">Sets the Profiler instance.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchdata">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchData</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Helper method to get data from PDO based on the method passed</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-performbind">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">performBind</span>(<span class="prm"><span class="st">\PDOStatement</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$arguments</span></span>)</code>
<span class="desc">Bind a value using the proper PDO::PARAM_* type.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">\PDO</code>
<code class="sig"><span class="sv">$pdo</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ProfilerInterface</code>
<code class="sig"><span class="sv">$profiler</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 34</div>

<h4 id="datamapperpdoconnectionabstractconnection-__call"><code>__call()</code></h4>

```php
public function __call(
mixed $name,
array $arguments
);
```

Proxies to PDO methods created for specific drivers; in particular,
`sqlite` and `pgsql`.

<h4 id="datamapperpdoconnectionabstractconnection-begintransaction"><code>beginTransaction()</code></h4>

```php
public function beginTransaction(): bool;
```

Begins a transaction. If the profiler is enabled, the operation will
be recorded.

<h4 id="datamapperpdoconnectionabstractconnection-commit"><code>commit()</code></h4>

```php
public function commit(): bool;
```

Commits the existing transaction. If the profiler is enabled, the
operation will be recorded.

<h4 id="datamapperpdoconnectionabstractconnection-connect"><code>connect()</code></h4>

```php
abstract public function connect(): void;
```

Connects to the database.

<h4 id="datamapperpdoconnectionabstractconnection-disconnect"><code>disconnect()</code></h4>

```php
abstract public function disconnect(): void;
```

Disconnects from the database.

<h4 id="datamapperpdoconnectionabstractconnection-errorcode"><code>errorCode()</code></h4>

```php
public function errorCode(): string|null;
```

Gets the most recent error code.

<h4 id="datamapperpdoconnectionabstractconnection-errorinfo"><code>errorInfo()</code></h4>

```php
public function errorInfo(): array;
```

Gets the most recent error info.

<h4 id="datamapperpdoconnectionabstractconnection-exec"><code>exec()</code></h4>

```php
public function exec( string $statement ): int;
```

Executes an SQL statement and returns the number of affected rows. If
the profiler is enabled, the operation will be recorded.

<h4 id="datamapperpdoconnectionabstractconnection-fetchaffected"><code>fetchAffected()</code></h4>

```php
public function fetchAffected(
string $statement,
array $values = []
): int;
```

Performs a statement and returns the number of affected rows.

<h4 id="datamapperpdoconnectionabstractconnection-fetchall"><code>fetchAll()</code></h4>

```php
public function fetchAll(
string $statement,
array $values = []
): array;
```

Fetches a sequential array of rows from the database; the rows are
returned as associative arrays.

<h4 id="datamapperpdoconnectionabstractconnection-fetchassoc"><code>fetchAssoc()</code></h4>

```php
public function fetchAssoc(
string $statement,
array $values = []
): array;
```

Fetches an associative array of rows from the database; the rows are
returned as associative arrays, and the array of rows is keyed on the
first column of each row.

If multiple rows have the same first column value, the last row with
that value will overwrite earlier rows. This method is more resource
intensive and should be avoided if possible.

<h4 id="datamapperpdoconnectionabstractconnection-fetchcolumn"><code>fetchColumn()</code></h4>

```php
public function fetchColumn(
string $statement,
array $values = [],
int $column = 0
): array;
```

Fetches a column of rows as a sequential array (default first one).

<h4 id="datamapperpdoconnectionabstractconnection-fetchgroup"><code>fetchGroup()</code></h4>

```php
public function fetchGroup(
string $statement,
array $values = [],
int $flags = \PDO::FETCH_ASSOC
): array;
```

Fetches multiple from the database as an associative array. The first
column will be the index key. The default flags are
PDO::FETCH_ASSOC | PDO::FETCH_GROUP

<h4 id="datamapperpdoconnectionabstractconnection-fetchobject"><code>fetchObject()</code></h4>

```php
public function fetchObject(
string $statement,
array $values = [],
string $className = "stdClass",
array $arguments = []
): object;
```

Fetches one row from the database as an object where the column values
are mapped to object properties.

Since PDO injects property values before invoking the constructor, any
initializations for defaults that you potentially have in your object's
constructor, will override the values that have been injected by
`fetchObject`. The default object returned is `\stdClass`

<h4 id="datamapperpdoconnectionabstractconnection-fetchobjects"><code>fetchObjects()</code></h4>

```php
public function fetchObjects(
string $statement,
array $values = [],
string $className = "stdClass",
array $arguments = []
): array;
```

Fetches a sequential array of rows from the database; the rows are
returned as objects where the column values are mapped to object
properties.

Since PDO injects property values before invoking the constructor, any
initializations for defaults that you potentially have in your object's
constructor, will override the values that have been injected by
`fetchObject`. The default object returned is `\stdClass`

<h4 id="datamapperpdoconnectionabstractconnection-fetchone"><code>fetchOne()</code></h4>

```php
public function fetchOne(
string $statement,
array $values = []
): array;
```

Fetches one row from the database as an associative array.

<h4 id="datamapperpdoconnectionabstractconnection-fetchpairs"><code>fetchPairs()</code></h4>

```php
public function fetchPairs(
string $statement,
array $values = []
): array;
```

Fetches an associative array of rows as key-value pairs (first column is
the key, second column is the value).

<h4 id="datamapperpdoconnectionabstractconnection-fetchvalue"><code>fetchValue()</code></h4>

```php
public function fetchValue(
string $statement,
array $values = []
);
```

Fetches the very first value (i.e., first column of the first row).

<h4 id="datamapperpdoconnectionabstractconnection-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): \PDO;
```

Return the inner PDO (if any)

<h4 id="datamapperpdoconnectionabstractconnection-getattribute"><code>getAttribute()</code></h4>

```php
public function getAttribute( int $attribute ): mixed;
```

Retrieve a database connection attribute

<h4 id="datamapperpdoconnectionabstractconnection-getavailabledrivers"><code>getAvailableDrivers()</code></h4>

```php
public static function getAvailableDrivers(): array;
```

Return an array of available PDO drivers (empty array if none available)

<h4 id="datamapperpdoconnectionabstractconnection-getdrivername"><code>getDriverName()</code></h4>

```php
public function getDriverName(): string;
```

Return the driver name

<h4 id="datamapperpdoconnectionabstractconnection-getprofiler"><code>getProfiler()</code></h4>

```php
public function getProfiler(): ProfilerInterface;
```

Returns the Profiler instance.

<h4 id="datamapperpdoconnectionabstractconnection-getquotenames"><code>getQuoteNames()</code></h4>

```php
public function getQuoteNames( string $driver = "" ): array;
```

Gets the quote parameters based on the driver

<h4 id="datamapperpdoconnectionabstractconnection-intransaction"><code>inTransaction()</code></h4>

```php
public function inTransaction(): bool;
```

Is a transaction currently active? If the profiler is enabled, the
operation will be recorded. If the profiler is enabled, the operation
will be recorded.

<h4 id="datamapperpdoconnectionabstractconnection-isconnected"><code>isConnected()</code></h4>

```php
public function isConnected(): bool;
```

Is the PDO connection active?

<h4 id="datamapperpdoconnectionabstractconnection-lastinsertid"><code>lastInsertId()</code></h4>

```php
public function lastInsertId( string $name = null ): string;
```

Returns the last inserted autoincrement sequence value. If the profiler
is enabled, the operation will be recorded.

<h4 id="datamapperpdoconnectionabstractconnection-perform"><code>perform()</code></h4>

```php
public function perform(
string $statement,
array $values = []
): \PDOStatement;
```

Performs a query with bound values and returns the resulting
PDOStatement; array values will be passed through `quote()` and their
respective placeholders will be replaced in the query string. If the
profiler is enabled, the operation will be recorded.

<h4 id="datamapperpdoconnectionabstractconnection-prepare"><code>prepare()</code></h4>

```php
public function prepare(
string $statement,
array $options = []
): \PDOStatement|bool;
```

Prepares an SQL statement for execution.

<h4 id="datamapperpdoconnectionabstractconnection-query"><code>query()</code></h4>

```php
public function query( string $statement ): \PDOStatement|bool;
```

Queries the database and returns a PDOStatement. If the profiler is
enabled, the operation will be recorded.

<h4 id="datamapperpdoconnectionabstractconnection-quote"><code>quote()</code></h4>

```php
public function quote(
mixed $value,
int $type = \PDO::PARAM_STR
): string;
```

Quotes a value for use in an SQL statement. This differs from
`PDO::quote()` in that it will convert an array into a string of
comma-separated quoted values. The default type is `PDO::PARAM_STR`

<h4 id="datamapperpdoconnectionabstractconnection-rollback"><code>rollBack()</code></h4>

```php
public function rollBack(): bool;
```

Rolls back the current transaction, and restores autocommit mode. If the
profiler is enabled, the operation will be recorded.

<h4 id="datamapperpdoconnectionabstractconnection-setattribute"><code>setAttribute()</code></h4>

```php
public function setAttribute(
int $attribute,
mixed $value
): bool;
```

Set a database connection attribute

<h4 id="datamapperpdoconnectionabstractconnection-setprofiler"><code>setProfiler()</code></h4>

```php
public function setProfiler( ProfilerInterface $profiler ): static;
```

Sets the Profiler instance.

<div class="api-group">Protected · 2</div>

<h4 id="datamapperpdoconnectionabstractconnection-fetchdata"><code>fetchData()</code></h4>

```php
protected function fetchData(
string $method,
array $arguments,
string $statement,
array $values = []
): array;
```

Helper method to get data from PDO based on the method passed

<h4 id="datamapperpdoconnectionabstractconnection-performbind"><code>performBind()</code></h4>

```php
protected function performBind(
\PDOStatement $statement,
mixed $name,
mixed $arguments
): void;
```

Bind a value using the proper PDO::PARAM_* type.

## DataMapper\Pdo\Connection\ConnectionInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/ConnectionInterface.zep">Source on GitHub</a>

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods

<div class="api-tree">

- [`Phalcon\DataMapper\Pdo\Connection\PdoInterface`](#datamapperpdoconnectionpdointerface)
- **`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">connect</span>()</code>
<span class="desc">Connects to the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-disconnect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">disconnect</span>()</code>
<span class="desc">Disconnects from the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchaffected">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">fetchAffected</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Performs a statement and returns the number of affected rows.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchAll</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches a sequential array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchassoc">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchAssoc</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches an associative array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchcolumn">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchColumn</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$column</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Fetches a column of rows as a sequential array (default first one).</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchgroup">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchGroup</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$flags</span><span class="sm"> = \PDO::FETCH_ASSOC</span></span>)</code>
<span class="desc">Fetches multiple from the database as an associative array. The first</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchobject">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">fetchObject</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$className</span><span class="sm"> = &quot;stdClass&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches one row from the database as an object where the column values</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchobjects">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchObjects</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$className</span><span class="sm"> = &quot;stdClass&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches a sequential array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchone">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchOne</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches one row from the database as an associative array.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchpairs">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fetchPairs</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches an associative array of rows as key-value pairs (first column is</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">fetchValue</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Fetches the very first value (i.e., first column of the first row).</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">\PDO</code>
<code class="sig"><span class="sf">getAdapter</span>()</code>
<span class="desc">Return the inner PDO (if any)</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-getprofiler">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig"><span class="sf">getProfiler</span>()</code>
<span class="desc">Returns the Profiler instance.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-isconnected">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isConnected</span>()</code>
<span class="desc">Is the PDO connection active?</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-perform">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement</code>
<code class="sig"><span class="sf">perform</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Performs a query with bound values and returns the resulting</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-setprofiler">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">setProfiler</span>( <span class="st">ProfilerInterface</span> <span class="sv">$profiler</span> )</code>
<span class="desc">Sets the Profiler instance.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 17</div>

<h4 id="datamapperpdoconnectionconnectioninterface-connect"><code>connect()</code></h4>

```php
public function connect(): void;
```

Connects to the database.

<h4 id="datamapperpdoconnectionconnectioninterface-disconnect"><code>disconnect()</code></h4>

```php
public function disconnect(): void;
```

Disconnects from the database.

<h4 id="datamapperpdoconnectionconnectioninterface-fetchaffected"><code>fetchAffected()</code></h4>

```php
public function fetchAffected(
string $statement,
array $values = []
): int;
```

Performs a statement and returns the number of affected rows.

<h4 id="datamapperpdoconnectionconnectioninterface-fetchall"><code>fetchAll()</code></h4>

```php
public function fetchAll(
string $statement,
array $values = []
): array;
```

Fetches a sequential array of rows from the database; the rows are
returned as associative arrays.

<h4 id="datamapperpdoconnectionconnectioninterface-fetchassoc"><code>fetchAssoc()</code></h4>

```php
public function fetchAssoc(
string $statement,
array $values = []
): array;
```

Fetches an associative array of rows from the database; the rows are
returned as associative arrays, and the array of rows is keyed on the
first column of each row.

If multiple rows have the same first column value, the last row with
that value will overwrite earlier rows. This method is more resource
intensive and should be avoided if possible.

<h4 id="datamapperpdoconnectionconnectioninterface-fetchcolumn"><code>fetchColumn()</code></h4>

```php
public function fetchColumn(
string $statement,
array $values = [],
int $column = 0
): array;
```

Fetches a column of rows as a sequential array (default first one).

<h4 id="datamapperpdoconnectionconnectioninterface-fetchgroup"><code>fetchGroup()</code></h4>

```php
public function fetchGroup(
string $statement,
array $values = [],
int $flags = \PDO::FETCH_ASSOC
): array;
```

Fetches multiple from the database as an associative array. The first
column will be the index key. The default flags are
PDO::FETCH_ASSOC | PDO::FETCH_GROUP

<h4 id="datamapperpdoconnectionconnectioninterface-fetchobject"><code>fetchObject()</code></h4>

```php
public function fetchObject(
string $statement,
array $values = [],
string $className = "stdClass",
array $arguments = []
): object;
```

Fetches one row from the database as an object where the column values
are mapped to object properties.

Since PDO injects property values before invoking the constructor, any
initializations for defaults that you potentially have in your object's
constructor, will override the values that have been injected by
`fetchObject`. The default object returned is `\stdClass`

<h4 id="datamapperpdoconnectionconnectioninterface-fetchobjects"><code>fetchObjects()</code></h4>

```php
public function fetchObjects(
string $statement,
array $values = [],
string $className = "stdClass",
array $arguments = []
): array;
```

Fetches a sequential array of rows from the database; the rows are
returned as objects where the column values are mapped to object
properties.

Since PDO injects property values before invoking the constructor, any
initializations for defaults that you potentially have in your object's
constructor, will override the values that have been injected by
`fetchObject`. The default object returned is `\stdClass`

<h4 id="datamapperpdoconnectionconnectioninterface-fetchone"><code>fetchOne()</code></h4>

```php
public function fetchOne(
string $statement,
array $values = []
): array;
```

Fetches one row from the database as an associative array.

<h4 id="datamapperpdoconnectionconnectioninterface-fetchpairs"><code>fetchPairs()</code></h4>

```php
public function fetchPairs(
string $statement,
array $values = []
): array;
```

Fetches an associative array of rows as key-value pairs (first column is
the key, second column is the value).

<h4 id="datamapperpdoconnectionconnectioninterface-fetchvalue"><code>fetchValue()</code></h4>

```php
public function fetchValue(
string $statement,
array $values = []
): mixed;
```

Fetches the very first value (i.e., first column of the first row).

<h4 id="datamapperpdoconnectionconnectioninterface-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): \PDO;
```

Return the inner PDO (if any)

<h4 id="datamapperpdoconnectionconnectioninterface-getprofiler"><code>getProfiler()</code></h4>

```php
public function getProfiler(): ProfilerInterface;
```

Returns the Profiler instance.

<h4 id="datamapperpdoconnectionconnectioninterface-isconnected"><code>isConnected()</code></h4>

```php
public function isConnected(): bool;
```

Is the PDO connection active?

<h4 id="datamapperpdoconnectionconnectioninterface-perform"><code>perform()</code></h4>

```php
public function perform(
string $statement,
array $values = []
): \PDOStatement;
```

Performs a query with bound values and returns the resulting
PDOStatement; array values will be passed through `quote()` and their
respective placeholders will be replaced in the query string. If the
profiler is enabled, the operation will be recorded.

<h4 id="datamapperpdoconnectionconnectioninterface-setprofiler"><code>setProfiler()</code></h4>

```php
public function setProfiler( ProfilerInterface $profiler );
```

Sets the Profiler instance.

## DataMapper\Pdo\Connection\Decorated

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/Decorated.zep">Source on GitHub</a>

Decorates an existing PDO instance with the extended methods.

<div class="api-tree">

- [`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`](#datamapperpdoconnectionabstractconnection)
- **`Phalcon\DataMapper\Pdo\Connection\Decorated`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Exception\CannotDisconnect` · `Phalcon\DataMapper\Pdo\Profiler\Profiler` · `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectiondecorated-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">\PDO</span> <span class="sv">$pdo</span>,</span><span class="prm"><span class="st">ProfilerInterface</span> <span class="sv">$profiler</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectiondecorated-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">connect</span>()</code>
<span class="desc">Connects to the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectiondecorated-disconnect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">disconnect</span>()</code>
<span class="desc">Disconnects from the database; disallowed with decorated PDO connections.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

<h4 id="datamapperpdoconnectiondecorated-__construct"><code>__construct()</code></h4>

```php
public function __construct(
\PDO $pdo,
ProfilerInterface $profiler = null
);
```

Constructor.

This overrides the parent so that it can take an existing PDO instance
and decorate it with the extended methods.

<h4 id="datamapperpdoconnectiondecorated-connect"><code>connect()</code></h4>

```php
public function connect(): void;
```

Connects to the database.

<h4 id="datamapperpdoconnectiondecorated-disconnect"><code>disconnect()</code></h4>

```php
public function disconnect(): void;
```

Disconnects from the database; disallowed with decorated PDO connections.

## DataMapper\Pdo\Connection\PdoInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/PdoInterface.zep">Source on GitHub</a>

An interface to the native PDO object.

<div class="api-tree">

- **`Phalcon\DataMapper\Pdo\Connection\PdoInterface`**
- [`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`](#datamapperpdoconnectionconnectioninterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectionpdointerface-begintransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">beginTransaction</span>()</code>
<span class="desc">Begins a transaction. If the profiler is enabled, the operation will</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-commit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">commit</span>()</code>
<span class="desc">Commits the existing transaction. If the profiler is enabled, the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-errorcode">
<code class="vis vis-public">public</code>
<code class="ret">null|string</code>
<code class="sig"><span class="sf">errorCode</span>()</code>
<span class="desc">Gets the most recent error code.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-errorinfo">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">errorInfo</span>()</code>
<span class="desc">Gets the most recent error info.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-exec">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">exec</span>( <span class="st">string</span> <span class="sv">$statement</span> )</code>
<span class="desc">Executes an SQL statement and returns the number of affected rows. If</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-getattribute">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getAttribute</span>( <span class="st">int</span> <span class="sv">$attribute</span> )</code>
<span class="desc">Retrieve a database connection attribute</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-getavailabledrivers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAvailableDrivers</span>()</code>
<span class="desc">Return an array of available PDO drivers (empty array if none available)</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-intransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">inTransaction</span>()</code>
<span class="desc">Is a transaction currently active? If the profiler is enabled, the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-lastinsertid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">lastInsertId</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns the last inserted autoincrement sequence value. If the profiler</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-prepare">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement|bool</code>
<code class="sig"><span class="sf">prepare</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Prepares an SQL statement for execution.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-query">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement|bool</code>
<code class="sig"><span class="sf">query</span>( <span class="st">string</span> <span class="sv">$statement</span> )</code>
<span class="desc">Queries the database and returns a PDOStatement. If the profiler is</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-quote">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">quote</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = \PDO::PARAM_STR</span></span>)</code>
<span class="desc">Quotes a value for use in an SQL statement. This differs from</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-rollback">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">rollBack</span>()</code>
<span class="desc">Rolls back the current transaction, and restores autocommit mode. If the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-setattribute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">setAttribute</span>(<span class="prm"><span class="st">int</span> <span class="sv">$attribute</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Set a database connection attribute</span>
</a>
</div>

### Methods

<div class="api-group">Public · 14</div>

<h4 id="datamapperpdoconnectionpdointerface-begintransaction"><code>beginTransaction()</code></h4>

```php
public function beginTransaction(): bool;
```

Begins a transaction. If the profiler is enabled, the operation will
be recorded.

<h4 id="datamapperpdoconnectionpdointerface-commit"><code>commit()</code></h4>

```php
public function commit(): bool;
```

Commits the existing transaction. If the profiler is enabled, the
operation will be recorded.

<h4 id="datamapperpdoconnectionpdointerface-errorcode"><code>errorCode()</code></h4>

```php
public function errorCode(): null|string;
```

Gets the most recent error code.

<h4 id="datamapperpdoconnectionpdointerface-errorinfo"><code>errorInfo()</code></h4>

```php
public function errorInfo(): array;
```

Gets the most recent error info.

<h4 id="datamapperpdoconnectionpdointerface-exec"><code>exec()</code></h4>

```php
public function exec( string $statement ): int;
```

Executes an SQL statement and returns the number of affected rows. If
the profiler is enabled, the operation will be recorded.

<h4 id="datamapperpdoconnectionpdointerface-getattribute"><code>getAttribute()</code></h4>

```php
public function getAttribute( int $attribute ): mixed;
```

Retrieve a database connection attribute

<h4 id="datamapperpdoconnectionpdointerface-getavailabledrivers"><code>getAvailableDrivers()</code></h4>

```php
public static function getAvailableDrivers(): array;
```

Return an array of available PDO drivers (empty array if none available)

<h4 id="datamapperpdoconnectionpdointerface-intransaction"><code>inTransaction()</code></h4>

```php
public function inTransaction(): bool;
```

Is a transaction currently active? If the profiler is enabled, the
operation will be recorded. If the profiler is enabled, the operation
will be recorded.

<h4 id="datamapperpdoconnectionpdointerface-lastinsertid"><code>lastInsertId()</code></h4>

```php
public function lastInsertId( string $name = null ): string;
```

Returns the last inserted autoincrement sequence value. If the profiler
is enabled, the operation will be recorded.

<h4 id="datamapperpdoconnectionpdointerface-prepare"><code>prepare()</code></h4>

```php
public function prepare(
string $statement,
array $options = []
): \PDOStatement|bool;
```

Prepares an SQL statement for execution.

<h4 id="datamapperpdoconnectionpdointerface-query"><code>query()</code></h4>

```php
public function query( string $statement ): \PDOStatement|bool;
```

Queries the database and returns a PDOStatement. If the profiler is
enabled, the operation will be recorded.

<h4 id="datamapperpdoconnectionpdointerface-quote"><code>quote()</code></h4>

```php
public function quote(
mixed $value,
int $type = \PDO::PARAM_STR
): string;
```

Quotes a value for use in an SQL statement. This differs from
`PDO::quote()` in that it will convert an array into a string of
comma-separated quoted values. The default type is `PDO::PARAM_STR`

<h4 id="datamapperpdoconnectionpdointerface-rollback"><code>rollBack()</code></h4>

```php
public function rollBack(): bool;
```

Rolls back the current transaction, and restores autocommit mode. If the
profiler is enabled, the operation will be recorded.

<h4 id="datamapperpdoconnectionpdointerface-setattribute"><code>setAttribute()</code></h4>

```php
public function setAttribute(
int $attribute,
mixed $value
): bool;
```

Set a database connection attribute

## DataMapper\Pdo\Exception\CannotDisconnect

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/CannotDisconnect.zep">Source on GitHub</a>

ExtendedPdo could not disconnect; e.g., because its PDO connection was
created externally and then injected.

<div class="api-tree">

- `\Exception`
- [`Phalcon\DataMapper\Pdo\Exception\Exception`](#datamapperpdoexceptionexception)
- **`Phalcon\DataMapper\Pdo\Exception\CannotDisconnect`**

</div>

## DataMapper\Pdo\Exception\ConnectionNotFound

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/ConnectionNotFound.zep">Source on GitHub</a>

Locator could not find a named connection.

<div class="api-tree">

- `\Exception`
- [`Phalcon\DataMapper\Pdo\Exception\Exception`](#datamapperpdoexceptionexception)
- **`Phalcon\DataMapper\Pdo\Exception\ConnectionNotFound`**

</div>

## DataMapper\Pdo\Exception\DriverNotSupported

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/DriverNotSupported.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `InvalidArgumentException`
- **`Phalcon\DataMapper\Pdo\Exception\DriverNotSupported`**

</div>

__Uses__ `InvalidArgumentException`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoexceptiondrivernotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$driver</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="datamapperpdoexceptiondrivernotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $driver );
```

## DataMapper\Pdo\Exception\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/Exception.zep">Source on GitHub</a>

Base Exception class

<div class="api-tree">

- `\Exception`
- **`Phalcon\DataMapper\Pdo\Exception\Exception`**
- [`Phalcon\DataMapper\Pdo\Exception\CannotDisconnect`](#datamapperpdoexceptioncannotdisconnect)
- [`Phalcon\DataMapper\Pdo\Exception\ConnectionNotFound`](#datamapperpdoexceptionconnectionnotfound)

</div>

## DataMapper\Pdo\Exception\UnknownDriverMethod

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/UnknownDriverMethod.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `BadMethodCallException`
- **`Phalcon\DataMapper\Pdo\Exception\UnknownDriverMethod`**

</div>

__Uses__ `BadMethodCallException`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoexceptionunknowndrivermethod-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="datamapperpdoexceptionunknowndrivermethod-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $message );
```

## DataMapper\Pdo\Exception\UnknownQueryMethod

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/UnknownQueryMethod.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `BadMethodCallException`
- **`Phalcon\DataMapper\Pdo\Exception\UnknownQueryMethod`**

</div>

__Uses__ `BadMethodCallException`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoexceptionunknownquerymethod-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$method</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="datamapperpdoexceptionunknownquerymethod-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $method );
```

## DataMapper\Pdo\Profiler\MemoryLogger

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Profiler/MemoryLogger.zep">Source on GitHub</a>

A memory-based logger.

<div class="api-tree">

- **`Phalcon\DataMapper\Pdo\Profiler\MemoryLogger`** — implements [`Phalcon\Logger\LoggerInterface`](/5.14/api/phalcon_logger/#loggerloggerinterface)

</div>

__Uses__ `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Adapter\Noop` · `Phalcon\Logger\Enum` · `Phalcon\Logger\LoggerInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoprofilermemorylogger-alert">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">alert</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-critical">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">critical</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-debug">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">debug</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-emergency">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">emergency</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-error">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">error</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">getAdapter</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns an adapter from the stack</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-getadapters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAdapters</span>()</code>
<span class="desc">Returns the adapter stack array</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getLogLevel</span>()</code>
<span class="desc">Returns the log level</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getMessages</span>()</code>
<span class="desc">Returns the logged messages.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the name of the logger</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-info">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">info</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-log">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">log</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$level</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Logs a message.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-notice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">notice</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-trace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">trace</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-warning">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">warning</span>(<span class="prm"><span class="st">string</span> <span class="sv">$message</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$messages</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 15</div>

<h4 id="datamapperpdoprofilermemorylogger-alert"><code>alert()</code></h4>

```php
public function alert(
string $message,
array $context = []
): void;
```

<h4 id="datamapperpdoprofilermemorylogger-critical"><code>critical()</code></h4>

```php
public function critical(
string $message,
array $context = []
): void;
```

<h4 id="datamapperpdoprofilermemorylogger-debug"><code>debug()</code></h4>

```php
public function debug(
string $message,
array $context = []
): void;
```

<h4 id="datamapperpdoprofilermemorylogger-emergency"><code>emergency()</code></h4>

```php
public function emergency(
string $message,
array $context = []
): void;
```

<h4 id="datamapperpdoprofilermemorylogger-error"><code>error()</code></h4>

```php
public function error(
string $message,
array $context = []
): void;
```

<h4 id="datamapperpdoprofilermemorylogger-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter( string $name ): AdapterInterface;
```

Returns an adapter from the stack

<h4 id="datamapperpdoprofilermemorylogger-getadapters"><code>getAdapters()</code></h4>

```php
public function getAdapters(): array;
```

Returns the adapter stack array

<h4 id="datamapperpdoprofilermemorylogger-getloglevel"><code>getLogLevel()</code></h4>

```php
public function getLogLevel(): int;
```

Returns the log level

<h4 id="datamapperpdoprofilermemorylogger-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): array;
```

Returns the logged messages.

<h4 id="datamapperpdoprofilermemorylogger-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the name of the logger

<h4 id="datamapperpdoprofilermemorylogger-info"><code>info()</code></h4>

```php
public function info(
string $message,
array $context = []
): void;
```

<h4 id="datamapperpdoprofilermemorylogger-log"><code>log()</code></h4>

```php
public function log(
mixed $level,
string $message,
array $context = []
): void;
```

Logs a message.

<h4 id="datamapperpdoprofilermemorylogger-notice"><code>notice()</code></h4>

```php
public function notice(
string $message,
array $context = []
): void;
```

<h4 id="datamapperpdoprofilermemorylogger-trace"><code>trace()</code></h4>

```php
public function trace(
string $message,
array $context = []
): void;
```

<h4 id="datamapperpdoprofilermemorylogger-warning"><code>warning()</code></h4>

```php
public function warning(
string $message,
array $context = []
): void;
```

## DataMapper\Pdo\Profiler\Profiler

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Profiler/Profiler.zep">Source on GitHub</a>

Sends query profiles to a logger.

<div class="api-tree">

- **`Phalcon\DataMapper\Pdo\Profiler\Profiler`** — implements [`Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`](#datamapperpdoprofilerprofilerinterface)

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Exception\Exception` · `Phalcon\Logger\Enum` · `Phalcon\Logger\LoggerInterface` · `Phalcon\Support\Helper\Json\Encode`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoprofilerprofiler-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">LoggerInterface</span> <span class="sv">$logger</span><span class="sm"> = null</span> )</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-finish">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">finish</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Finishes and logs a profile entry.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-getlogformat">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLogFormat</span>()</code>
<span class="desc">Returns the log message format string, with placeholders.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLogLevel</span>()</code>
<span class="desc">Returns the level at which to log profile messages.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-getlogger">
<code class="vis vis-public">public</code>
<code class="ret">LoggerInterface</code>
<code class="sig"><span class="sf">getLogger</span>()</code>
<span class="desc">Returns the underlying logger instance.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-isactive">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isActive</span>()</code>
<span class="desc">Returns true if logging is active.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-setactive">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig"><span class="sf">setActive</span>( <span class="st">bool</span> <span class="sv">$active</span> )</code>
<span class="desc">Enable or disable profiler logging.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-setlogformat">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig"><span class="sf">setLogFormat</span>( <span class="st">string</span> <span class="sv">$logFormat</span> )</code>
<span class="desc">Sets the log message format string, with placeholders.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-setloglevel">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig"><span class="sf">setLogLevel</span>( <span class="st">string</span> <span class="sv">$logLevel</span> )</code>
<span class="desc">Level at which to log profile messages.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-start">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">start</span>( <span class="st">string</span> <span class="sv">$method</span> )</code>
<span class="desc">Starts a profile entry.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$active</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$context</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$logFormat</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$logLevel</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">LoggerInterface</code>
<code class="sig"><span class="sv">$logger</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 10</div>

<h4 id="datamapperpdoprofilerprofiler-__construct"><code>__construct()</code></h4>

```php
public function __construct( LoggerInterface $logger = null );
```

Constructor.

<h4 id="datamapperpdoprofilerprofiler-finish"><code>finish()</code></h4>

```php
public function finish(
string $statement = null,
array $values = []
): void;
```

Finishes and logs a profile entry.

<h4 id="datamapperpdoprofilerprofiler-getlogformat"><code>getLogFormat()</code></h4>

```php
public function getLogFormat(): string;
```

Returns the log message format string, with placeholders.

<h4 id="datamapperpdoprofilerprofiler-getloglevel"><code>getLogLevel()</code></h4>

```php
public function getLogLevel(): string;
```

Returns the level at which to log profile messages.

<h4 id="datamapperpdoprofilerprofiler-getlogger"><code>getLogger()</code></h4>

```php
public function getLogger(): LoggerInterface;
```

Returns the underlying logger instance.

<h4 id="datamapperpdoprofilerprofiler-isactive"><code>isActive()</code></h4>

```php
public function isActive(): bool;
```

Returns true if logging is active.

<h4 id="datamapperpdoprofilerprofiler-setactive"><code>setActive()</code></h4>

```php
public function setActive( bool $active ): ProfilerInterface;
```

Enable or disable profiler logging.

<h4 id="datamapperpdoprofilerprofiler-setlogformat"><code>setLogFormat()</code></h4>

```php
public function setLogFormat( string $logFormat ): ProfilerInterface;
```

Sets the log message format string, with placeholders.

<h4 id="datamapperpdoprofilerprofiler-setloglevel"><code>setLogLevel()</code></h4>

```php
public function setLogLevel( string $logLevel ): ProfilerInterface;
```

Level at which to log profile messages.

<h4 id="datamapperpdoprofilerprofiler-start"><code>start()</code></h4>

```php
public function start( string $method ): void;
```

Starts a profile entry.

## DataMapper\Pdo\Profiler\ProfilerInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Profiler/ProfilerInterface.zep">Source on GitHub</a>

Interface to send query profiles to a logger.

<div class="api-tree">

- **`Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`**

</div>

__Uses__ `Phalcon\Logger\LoggerInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-finish">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">finish</span>(<span class="prm"><span class="st">string</span> <span class="sv">$statement</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Finishes and logs a profile entry.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-getlogformat">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLogFormat</span>()</code>
<span class="desc">Returns the log message format string, with placeholders.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLogLevel</span>()</code>
<span class="desc">Returns the level at which to log profile messages.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-getlogger">
<code class="vis vis-public">public</code>
<code class="ret">LoggerInterface</code>
<code class="sig"><span class="sf">getLogger</span>()</code>
<span class="desc">Returns the underlying logger instance.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-isactive">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isActive</span>()</code>
<span class="desc">Returns true if logging is active.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-setactive">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig"><span class="sf">setActive</span>( <span class="st">bool</span> <span class="sv">$active</span> )</code>
<span class="desc">Enable or disable profiler logging.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-setlogformat">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig"><span class="sf">setLogFormat</span>( <span class="st">string</span> <span class="sv">$logFormat</span> )</code>
<span class="desc">Sets the log message format string, with placeholders.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-setloglevel">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig"><span class="sf">setLogLevel</span>( <span class="st">string</span> <span class="sv">$logLevel</span> )</code>
<span class="desc">Level at which to log profile messages.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-start">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">start</span>( <span class="st">string</span> <span class="sv">$method</span> )</code>
<span class="desc">Starts a profile entry.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

<h4 id="datamapperpdoprofilerprofilerinterface-finish"><code>finish()</code></h4>

```php
public function finish(
string $statement = null,
array $values = []
): void;
```

Finishes and logs a profile entry.

<h4 id="datamapperpdoprofilerprofilerinterface-getlogformat"><code>getLogFormat()</code></h4>

```php
public function getLogFormat(): string;
```

Returns the log message format string, with placeholders.

<h4 id="datamapperpdoprofilerprofilerinterface-getloglevel"><code>getLogLevel()</code></h4>

```php
public function getLogLevel(): string;
```

Returns the level at which to log profile messages.

<h4 id="datamapperpdoprofilerprofilerinterface-getlogger"><code>getLogger()</code></h4>

```php
public function getLogger(): LoggerInterface;
```

Returns the underlying logger instance.

<h4 id="datamapperpdoprofilerprofilerinterface-isactive"><code>isActive()</code></h4>

```php
public function isActive(): bool;
```

Returns true if logging is active.

<h4 id="datamapperpdoprofilerprofilerinterface-setactive"><code>setActive()</code></h4>

```php
public function setActive( bool $active ): ProfilerInterface;
```

Enable or disable profiler logging.

<h4 id="datamapperpdoprofilerprofilerinterface-setlogformat"><code>setLogFormat()</code></h4>

```php
public function setLogFormat( string $logFormat ): ProfilerInterface;
```

Sets the log message format string, with placeholders.

<h4 id="datamapperpdoprofilerprofilerinterface-setloglevel"><code>setLogLevel()</code></h4>

```php
public function setLogLevel( string $logLevel ): ProfilerInterface;
```

Level at which to log profile messages.

<h4 id="datamapperpdoprofilerprofilerinterface-start"><code>start()</code></h4>

```php
public function start( string $method ): void;
```

Starts a profile entry.

## DataMapper\Query\AbstractConditions

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/AbstractConditions.zep">Source on GitHub</a>

Class AbstractConditions

<div class="api-tree">

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
- **`Phalcon\DataMapper\Query\AbstractConditions`**
- [`Phalcon\DataMapper\Query\Delete`](#datamapperquerydelete)
- [`Phalcon\DataMapper\Query\Select`](#datamapperqueryselect)
- [`Phalcon\DataMapper\Query\Update`](#datamapperqueryupdate)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryabstractconditions-andwhere">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig"><span class="sf">andWhere</span>(<span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets a <code>AND</code> for a <code>WHERE</code> condition</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-appendwhere">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig"><span class="sf">appendWhere</span>(<span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Concatenates to the most recent <code>WHERE</code> clause</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-limit">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig"><span class="sf">limit</span>( <span class="st">int</span> <span class="sv">$limit</span> )</code>
<span class="desc">Sets the <code>LIMIT</code> clause</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-offset">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig"><span class="sf">offset</span>( <span class="st">int</span> <span class="sv">$offset</span> )</code>
<span class="desc">Sets the <code>OFFSET</code> clause</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-orwhere">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig"><span class="sf">orWhere</span>(<span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets a <code>OR</code> for a <code>WHERE</code> condition</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-orderby">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig"><span class="sf">orderBy</span>( <span class="st">mixed</span> <span class="sv">$orderBy</span> )</code>
<span class="desc">Sets the <code>ORDER BY</code></span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-where">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig"><span class="sf">where</span>(<span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets a <code>WHERE</code> condition</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-whereequals">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig"><span class="sf">whereEquals</span>( <span class="st">array</span> <span class="sv">$columnsValues</span> )</code>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-addcondition">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">addCondition</span>(<span class="prm"><span class="st">string</span> <span class="sv">$store</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$andor</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Appends a conditional</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-appendcondition">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">appendCondition</span>(<span class="prm"><span class="st">string</span> <span class="sv">$store</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Concatenates a conditional</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildby">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">buildBy</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Builds a <code>BY</code> list</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildcondition">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">buildCondition</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Builds the conditional string</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildlimit">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">buildLimit</span>()</code>
<span class="desc">Builds the <code>LIMIT</code> clause</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildlimitcommon">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">buildLimitCommon</span>()</code>
<span class="desc">Builds the <code>LIMIT</code> clause for all drivers</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildlimitearly">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">buildLimitEarly</span>()</code>
<span class="desc">Builds the early <code>LIMIT</code> clause - MS SQLServer</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildlimitsqlsrv">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">buildLimitSqlsrv</span>()</code>
<span class="desc">Builds the <code>LIMIT</code> clause for MSSQLServer</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-processvalue">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processValue</span>(<span class="prm"><span class="st">string</span> <span class="sv">$store</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span></span>)</code>
<span class="desc">Processes a value (array or string) and merges it with the store</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

<h4 id="datamapperqueryabstractconditions-andwhere"><code>andWhere()</code></h4>

```php
public function andWhere(
string $condition,
mixed $value = null,
int $type = -1
): AbstractConditions;
```

Sets a `AND` for a `WHERE` condition

<h4 id="datamapperqueryabstractconditions-appendwhere"><code>appendWhere()</code></h4>

```php
public function appendWhere(
string $condition,
mixed $value = null,
int $type = -1
): AbstractConditions;
```

Concatenates to the most recent `WHERE` clause

<h4 id="datamapperqueryabstractconditions-limit"><code>limit()</code></h4>

```php
public function limit( int $limit ): AbstractConditions;
```

Sets the `LIMIT` clause

<h4 id="datamapperqueryabstractconditions-offset"><code>offset()</code></h4>

```php
public function offset( int $offset ): AbstractConditions;
```

Sets the `OFFSET` clause

<h4 id="datamapperqueryabstractconditions-orwhere"><code>orWhere()</code></h4>

```php
public function orWhere(
string $condition,
mixed $value = null,
int $type = -1
): AbstractConditions;
```

Sets a `OR` for a `WHERE` condition

<h4 id="datamapperqueryabstractconditions-orderby"><code>orderBy()</code></h4>

```php
public function orderBy( mixed $orderBy ): AbstractConditions;
```

Sets the `ORDER BY`

<h4 id="datamapperqueryabstractconditions-where"><code>where()</code></h4>

```php
public function where(
string $condition,
mixed $value = null,
int $type = -1
): AbstractConditions;
```

Sets a `WHERE` condition

<h4 id="datamapperqueryabstractconditions-whereequals"><code>whereEquals()</code></h4>

```php
public function whereEquals( array $columnsValues ): AbstractConditions;
```

<div class="api-group">Protected · 9</div>

<h4 id="datamapperqueryabstractconditions-addcondition"><code>addCondition()</code></h4>

```php
protected function addCondition(
string $store,
string $andor,
string $condition,
mixed $value = null,
int $type = -1
): void;
```

Appends a conditional

<h4 id="datamapperqueryabstractconditions-appendcondition"><code>appendCondition()</code></h4>

```php
protected function appendCondition(
string $store,
string $condition,
mixed $value = null,
int $type = -1
): void;
```

Concatenates a conditional

<h4 id="datamapperqueryabstractconditions-buildby"><code>buildBy()</code></h4>

```php
protected function buildBy( string $type ): string;
```

Builds a `BY` list

<h4 id="datamapperqueryabstractconditions-buildcondition"><code>buildCondition()</code></h4>

```php
protected function buildCondition( string $type ): string;
```

Builds the conditional string

<h4 id="datamapperqueryabstractconditions-buildlimit"><code>buildLimit()</code></h4>

```php
protected function buildLimit(): string;
```

Builds the `LIMIT` clause

<h4 id="datamapperqueryabstractconditions-buildlimitcommon"><code>buildLimitCommon()</code></h4>

```php
protected function buildLimitCommon(): string;
```

Builds the `LIMIT` clause for all drivers

<h4 id="datamapperqueryabstractconditions-buildlimitearly"><code>buildLimitEarly()</code></h4>

```php
protected function buildLimitEarly(): string;
```

Builds the early `LIMIT` clause - MS SQLServer

<h4 id="datamapperqueryabstractconditions-buildlimitsqlsrv"><code>buildLimitSqlsrv()</code></h4>

```php
protected function buildLimitSqlsrv(): string;
```

Builds the `LIMIT` clause for MSSQLServer

<h4 id="datamapperqueryabstractconditions-processvalue"><code>processValue()</code></h4>

```php
protected function processValue(
string $store,
mixed $data
): void;
```

Processes a value (array or string) and merges it with the store

## DataMapper\Query\AbstractQuery

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/AbstractQuery.zep">Source on GitHub</a>

Class AbstractQuery

<div class="api-tree">

- **`Phalcon\DataMapper\Query\AbstractQuery`**
- [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
- [`Phalcon\DataMapper\Query\Insert`](#datamapperqueryinsert)

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryabstractquery-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Connection</span> <span class="sv">$connection</span>,</span><span class="prm"><span class="st">Bind</span> <span class="sv">$bind</span></span>)</code>
<span class="desc">AbstractQuery constructor.</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-bindinline">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">bindInline</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Binds a value inline</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-bindvalue">
<code class="vis vis-public">public</code>
<code class="ret">AbstractQuery</code>
<code class="sig"><span class="sf">bindValue</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Binds a value - auto-detects the type if necessary</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-bindvalues">
<code class="vis vis-public">public</code>
<code class="ret">AbstractQuery</code>
<code class="sig"><span class="sf">bindValues</span>( <span class="st">array</span> <span class="sv">$values</span> )</code>
<span class="desc">Binds an array of values</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-getbindvalues">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getBindValues</span>()</code>
<span class="desc">Returns all the bound values</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getStatement</span>()</code>
<span class="desc">Return the generated statement</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-perform">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">perform</span>()</code>
<span class="desc">Performs a statement in the connection</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-quoteidentifier">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">quoteIdentifier</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = \PDO::PARAM_STR</span></span>)</code>
<span class="desc">Quotes the identifier</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Resets the internal array</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetcolumns">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resetColumns</span>()</code>
<span class="desc">Resets the columns</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetflags">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resetFlags</span>()</code>
<span class="desc">Resets the flags</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetfrom">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resetFrom</span>()</code>
<span class="desc">Resets the from</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetgroupby">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resetGroupBy</span>()</code>
<span class="desc">Resets the group by</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resethaving">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resetHaving</span>()</code>
<span class="desc">Resets the having</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetlimit">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resetLimit</span>()</code>
<span class="desc">Resets the limit and offset</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetorderby">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resetOrderBy</span>()</code>
<span class="desc">Resets the order by</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetwhere">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resetWhere</span>()</code>
<span class="desc">Resets the where</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-setflag">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setFlag</span>(<span class="prm"><span class="st">string</span> <span class="sv">$flag</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$enable</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Sets a flag for the query such as &quot;DISTINCT&quot;</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-buildflags">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">buildFlags</span>()</code>
<span class="desc">Builds the flags statement(s)</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-buildreturning">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">buildReturning</span>()</code>
<span class="desc">Builds the <code>RETURNING</code> clause</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-indent">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">indent</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$glue</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Indents a collection</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Bind</code>
<code class="sig"><span class="sv">$bind</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Connection</code>
<code class="sig"><span class="sv">$connection</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$store</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 18</div>

<h4 id="datamapperqueryabstractquery-__construct"><code>__construct()</code></h4>

```php
public function __construct(
Connection $connection,
Bind $bind
);
```

AbstractQuery constructor.

<h4 id="datamapperqueryabstractquery-bindinline"><code>bindInline()</code></h4>

```php
public function bindInline(
mixed $value,
int $type = -1
): string;
```

Binds a value inline

<h4 id="datamapperqueryabstractquery-bindvalue"><code>bindValue()</code></h4>

```php
public function bindValue(
string $key,
mixed $value,
int $type = -1
): AbstractQuery;
```

Binds a value - auto-detects the type if necessary

<h4 id="datamapperqueryabstractquery-bindvalues"><code>bindValues()</code></h4>

```php
public function bindValues( array $values ): AbstractQuery;
```

Binds an array of values

<h4 id="datamapperqueryabstractquery-getbindvalues"><code>getBindValues()</code></h4>

```php
public function getBindValues(): array;
```

Returns all the bound values

<h4 id="datamapperqueryabstractquery-getstatement"><code>getStatement()</code></h4>

```php
abstract public function getStatement(): string;
```

Return the generated statement

<h4 id="datamapperqueryabstractquery-perform"><code>perform()</code></h4>

```php
public function perform();
```

Performs a statement in the connection

<h4 id="datamapperqueryabstractquery-quoteidentifier"><code>quoteIdentifier()</code></h4>

```php
public function quoteIdentifier(
string $name,
int $type = \PDO::PARAM_STR
): string;
```

Quotes the identifier

<h4 id="datamapperqueryabstractquery-reset"><code>reset()</code></h4>

```php
public function reset(): void;
```

Resets the internal array

<h4 id="datamapperqueryabstractquery-resetcolumns"><code>resetColumns()</code></h4>

```php
public function resetColumns(): void;
```

Resets the columns

<h4 id="datamapperqueryabstractquery-resetflags"><code>resetFlags()</code></h4>

```php
public function resetFlags(): void;
```

Resets the flags

<h4 id="datamapperqueryabstractquery-resetfrom"><code>resetFrom()</code></h4>

```php
public function resetFrom(): void;
```

Resets the from

<h4 id="datamapperqueryabstractquery-resetgroupby"><code>resetGroupBy()</code></h4>

```php
public function resetGroupBy(): void;
```

Resets the group by

<h4 id="datamapperqueryabstractquery-resethaving"><code>resetHaving()</code></h4>

```php
public function resetHaving(): void;
```

Resets the having

<h4 id="datamapperqueryabstractquery-resetlimit"><code>resetLimit()</code></h4>

```php
public function resetLimit(): void;
```

Resets the limit and offset

<h4 id="datamapperqueryabstractquery-resetorderby"><code>resetOrderBy()</code></h4>

```php
public function resetOrderBy(): void;
```

Resets the order by

<h4 id="datamapperqueryabstractquery-resetwhere"><code>resetWhere()</code></h4>

```php
public function resetWhere(): void;
```

Resets the where

<h4 id="datamapperqueryabstractquery-setflag"><code>setFlag()</code></h4>

```php
public function setFlag(
string $flag,
bool $enable = true
): void;
```

Sets a flag for the query such as "DISTINCT"

<div class="api-group">Protected · 3</div>

<h4 id="datamapperqueryabstractquery-buildflags"><code>buildFlags()</code></h4>

```php
protected function buildFlags();
```

Builds the flags statement(s)

<h4 id="datamapperqueryabstractquery-buildreturning"><code>buildReturning()</code></h4>

```php
protected function buildReturning(): string;
```

Builds the `RETURNING` clause

<h4 id="datamapperqueryabstractquery-indent"><code>indent()</code></h4>

```php
protected function indent(
array $collection,
string $glue = ""
): string;
```

Indents a collection

## DataMapper\Query\Bind

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Bind.zep">Source on GitHub</a>

Class Bind

<div class="api-tree">

- **`Phalcon\DataMapper\Query\Bind`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperquerybind-bindinline">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">bindInline</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
</a>
<a class="api-item" href="#datamapperquerybind-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Removes a value from the store</span>
</a>
<a class="api-item" href="#datamapperquerybind-setvalue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setValue</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets a value</span>
</a>
<a class="api-item" href="#datamapperquerybind-setvalues">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setValues</span>(<span class="prm"><span class="st">array</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets values from an array</span>
</a>
<a class="api-item" href="#datamapperquerybind-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the internal collection</span>
</a>
<a class="api-item" href="#datamapperquerybind-gettype">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getType</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Auto detects the PDO type</span>
</a>
<a class="api-item" href="#datamapperquerybind-inlinearray">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">inlineArray</span>(<span class="prm"><span class="st">array</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span></span>)</code>
<span class="desc">Processes an array - if passed as an <code>inline</code> parameter</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$inlineCount</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$store</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

<h4 id="datamapperquerybind-bindinline"><code>bindInline()</code></h4>

```php
public function bindInline(
mixed $value,
int $type = -1
): string;
```

<h4 id="datamapperquerybind-remove"><code>remove()</code></h4>

```php
public function remove( string $key ): void;
```

Removes a value from the store

<h4 id="datamapperquerybind-setvalue"><code>setValue()</code></h4>

```php
public function setValue(
string $key,
mixed $value,
int $type = -1
): void;
```

Sets a value

<h4 id="datamapperquerybind-setvalues"><code>setValues()</code></h4>

```php
public function setValues(
array $values,
int $type = -1
): void;
```

Sets values from an array

<h4 id="datamapperquerybind-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the internal collection

<div class="api-group">Protected · 2</div>

<h4 id="datamapperquerybind-gettype"><code>getType()</code></h4>

```php
protected function getType( mixed $value ): int;
```

Auto detects the PDO type

<h4 id="datamapperquerybind-inlinearray"><code>inlineArray()</code></h4>

```php
protected function inlineArray(
array $data,
int $type
): string;
```

Processes an array - if passed as an `inline` parameter

## DataMapper\Query\Delete

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Delete.zep">Source on GitHub</a>

Delete Query

<div class="api-tree">

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
- [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
- **`Phalcon\DataMapper\Query\Delete`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperquerydelete-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Connection</span> <span class="sv">$connection</span>,</span><span class="prm"><span class="st">Bind</span> <span class="sv">$bind</span></span>)</code>
<span class="desc">Delete constructor.</span>
</a>
<a class="api-item" href="#datamapperquerydelete-from">
<code class="vis vis-public">public</code>
<code class="ret">Delete</code>
<code class="sig"><span class="sf">from</span>( <span class="st">string</span> <span class="sv">$table</span> )</code>
<span class="desc">Adds table(s) in the query</span>
</a>
<a class="api-item" href="#datamapperquerydelete-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getStatement</span>()</code>
</a>
<a class="api-item" href="#datamapperquerydelete-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Resets the internal store</span>
</a>
<a class="api-item" href="#datamapperquerydelete-returning">
<code class="vis vis-public">public</code>
<code class="ret">Delete</code>
<code class="sig"><span class="sf">returning</span>( <span class="st">array</span> <span class="sv">$columns</span> )</code>
<span class="desc">Adds the <code>RETURNING</code> clause</span>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

<h4 id="datamapperquerydelete-__construct"><code>__construct()</code></h4>

```php
public function __construct(
Connection $connection,
Bind $bind
);
```

Delete constructor.

<h4 id="datamapperquerydelete-from"><code>from()</code></h4>

```php
public function from( string $table ): Delete;
```

Adds table(s) in the query

<h4 id="datamapperquerydelete-getstatement"><code>getStatement()</code></h4>

```php
public function getStatement(): string;
```

<h4 id="datamapperquerydelete-reset"><code>reset()</code></h4>

```php
public function reset(): void;
```

Resets the internal store

<h4 id="datamapperquerydelete-returning"><code>returning()</code></h4>

```php
public function returning( array $columns ): Delete;
```

Adds the `RETURNING` clause

## DataMapper\Query\Insert

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Insert.zep">Source on GitHub</a>

Insert Query

<div class="api-tree">

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
- **`Phalcon\DataMapper\Query\Insert`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryinsert-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Connection</span> <span class="sv">$connection</span>,</span><span class="prm"><span class="st">Bind</span> <span class="sv">$bind</span></span>)</code>
<span class="desc">Insert constructor.</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-column">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig"><span class="sf">column</span>(<span class="prm"><span class="st">string</span> <span class="sv">$column</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets a column for the <code>INSERT</code> query</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-columns">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig"><span class="sf">columns</span>( <span class="st">array</span> <span class="sv">$columns</span> )</code>
<span class="desc">Mass sets columns and values for the <code>INSERT</code></span>
</a>
<a class="api-item" href="#datamapperqueryinsert-getlastinsertid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLastInsertId</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns the id of the last inserted record</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getStatement</span>()</code>
</a>
<a class="api-item" href="#datamapperqueryinsert-into">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig"><span class="sf">into</span>( <span class="st">string</span> <span class="sv">$table</span> )</code>
<span class="desc">Adds table(s) in the query</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Resets the internal store</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-returning">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig"><span class="sf">returning</span>( <span class="st">array</span> <span class="sv">$columns</span> )</code>
<span class="desc">Adds the <code>RETURNING</code> clause</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-set">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$column</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets a column = value condition</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

<h4 id="datamapperqueryinsert-__construct"><code>__construct()</code></h4>

```php
public function __construct(
Connection $connection,
Bind $bind
);
```

Insert constructor.

<h4 id="datamapperqueryinsert-column"><code>column()</code></h4>

```php
public function column(
string $column,
mixed $value = null,
int $type = -1
): Insert;
```

Sets a column for the `INSERT` query

<h4 id="datamapperqueryinsert-columns"><code>columns()</code></h4>

```php
public function columns( array $columns ): Insert;
```

Mass sets columns and values for the `INSERT`

<h4 id="datamapperqueryinsert-getlastinsertid"><code>getLastInsertId()</code></h4>

```php
public function getLastInsertId( string $name = null ): string;
```

Returns the id of the last inserted record

<h4 id="datamapperqueryinsert-getstatement"><code>getStatement()</code></h4>

```php
public function getStatement(): string;
```

<h4 id="datamapperqueryinsert-into"><code>into()</code></h4>

```php
public function into( string $table ): Insert;
```

Adds table(s) in the query

<h4 id="datamapperqueryinsert-reset"><code>reset()</code></h4>

```php
public function reset(): void;
```

Resets the internal store

<h4 id="datamapperqueryinsert-returning"><code>returning()</code></h4>

```php
public function returning( array $columns ): Insert;
```

Adds the `RETURNING` clause

<h4 id="datamapperqueryinsert-set"><code>set()</code></h4>

```php
public function set(
string $column,
mixed $value = null
): Insert;
```

Sets a column = value condition

## DataMapper\Query\QueryFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/QueryFactory.zep">Source on GitHub</a>

QueryFactory

<div class="api-tree">

- **`Phalcon\DataMapper\Query\QueryFactory`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryqueryfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$selectClass</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">QueryFactory constructor.</span>
</a>
<a class="api-item" href="#datamapperqueryqueryfactory-newbind">
<code class="vis vis-public">public</code>
<code class="ret">Bind</code>
<code class="sig"><span class="sf">newBind</span>()</code>
<span class="desc">Create a new Bind object</span>
</a>
<a class="api-item" href="#datamapperqueryqueryfactory-newdelete">
<code class="vis vis-public">public</code>
<code class="ret">Delete</code>
<code class="sig"><span class="sf">newDelete</span>( <span class="st">Connection</span> <span class="sv">$connection</span> )</code>
<span class="desc">Create a new Delete object</span>
</a>
<a class="api-item" href="#datamapperqueryqueryfactory-newinsert">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig"><span class="sf">newInsert</span>( <span class="st">Connection</span> <span class="sv">$connection</span> )</code>
<span class="desc">Create a new Insert object</span>
</a>
<a class="api-item" href="#datamapperqueryqueryfactory-newselect">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">newSelect</span>( <span class="st">Connection</span> <span class="sv">$connection</span> )</code>
<span class="desc">Create a new Select object</span>
</a>
<a class="api-item" href="#datamapperqueryqueryfactory-newupdate">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig"><span class="sf">newUpdate</span>( <span class="st">Connection</span> <span class="sv">$connection</span> )</code>
<span class="desc">Create a new Update object</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$selectClass</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

<h4 id="datamapperqueryqueryfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $selectClass = "" );
```

QueryFactory constructor.

<h4 id="datamapperqueryqueryfactory-newbind"><code>newBind()</code></h4>

```php
public function newBind(): Bind;
```

Create a new Bind object

<h4 id="datamapperqueryqueryfactory-newdelete"><code>newDelete()</code></h4>

```php
public function newDelete( Connection $connection ): Delete;
```

Create a new Delete object

<h4 id="datamapperqueryqueryfactory-newinsert"><code>newInsert()</code></h4>

```php
public function newInsert( Connection $connection ): Insert;
```

Create a new Insert object

<h4 id="datamapperqueryqueryfactory-newselect"><code>newSelect()</code></h4>

```php
public function newSelect( Connection $connection ): Select;
```

Create a new Select object

<h4 id="datamapperqueryqueryfactory-newupdate"><code>newUpdate()</code></h4>

```php
public function newUpdate( Connection $connection ): Update;
```

Create a new Update object

## DataMapper\Query\Select

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Select.zep">Source on GitHub</a>

Select Query

<div class="api-tree">

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
- [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
- **`Phalcon\DataMapper\Query\Select`**

</div>

__Uses__ `BadMethodCallException` · `Phalcon\DataMapper\Pdo\Exception\UnknownQueryMethod`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryselect-__call">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__call</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$params</span></span>)</code>
<span class="desc">Proxied methods to the connection</span>
</a>
<a class="api-item" href="#datamapperqueryselect-andhaving">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">andHaving</span>(<span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets a <code>AND</code> for a <code>HAVING</code> condition</span>
</a>
<a class="api-item" href="#datamapperqueryselect-appendhaving">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">appendHaving</span>(<span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Concatenates to the most recent <code>HAVING</code> clause</span>
</a>
<a class="api-item" href="#datamapperqueryselect-appendjoin">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">appendJoin</span>(<span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Concatenates to the most recent <code>JOIN</code> clause</span>
</a>
<a class="api-item" href="#datamapperqueryselect-asalias">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">asAlias</span>( <span class="st">string</span> <span class="sv">$asAlias</span> )</code>
<span class="desc">The <code>AS</code> statement for the query - useful in sub-queries</span>
</a>
<a class="api-item" href="#datamapperqueryselect-columns">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">columns</span>( <span class="st">array</span> <span class="sv">$columns</span> )</code>
<span class="desc">The columns to select from. If a key is set in the array element, the</span>
</a>
<a class="api-item" href="#datamapperqueryselect-distinct">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">distinct</span>( <span class="st">bool</span> <span class="sv">$enable</span><span class="sm"> = true</span> )</code>
</a>
<a class="api-item" href="#datamapperqueryselect-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">forUpdate</span>( <span class="st">bool</span> <span class="sv">$enable</span><span class="sm"> = true</span> )</code>
<span class="desc">Enable the <code>FOR UPDATE</code> for the query</span>
</a>
<a class="api-item" href="#datamapperqueryselect-from">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">from</span>( <span class="st">string</span> <span class="sv">$table</span> )</code>
<span class="desc">Adds table(s) in the query</span>
</a>
<a class="api-item" href="#datamapperqueryselect-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getStatement</span>()</code>
<span class="desc">Returns the compiled SQL statement</span>
</a>
<a class="api-item" href="#datamapperqueryselect-groupby">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">groupBy</span>( <span class="st">mixed</span> <span class="sv">$groupBy</span> )</code>
<span class="desc">Sets the <code>GROUP BY</code></span>
</a>
<a class="api-item" href="#datamapperqueryselect-hascolumns">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasColumns</span>()</code>
<span class="desc">Whether the query has columns or not</span>
</a>
<a class="api-item" href="#datamapperqueryselect-having">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">having</span>(<span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets a <code>HAVING</code> condition</span>
</a>
<a class="api-item" href="#datamapperqueryselect-join">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">join</span>(<span class="prm"><span class="st">string</span> <span class="sv">$join</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$table</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets a &#039;JOIN&#039; condition</span>
</a>
<a class="api-item" href="#datamapperqueryselect-orhaving">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">orHaving</span>(<span class="prm"><span class="st">string</span> <span class="sv">$condition</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets a <code>OR</code> for a <code>HAVING</code> condition</span>
</a>
<a class="api-item" href="#datamapperqueryselect-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Resets the internal collections</span>
</a>
<a class="api-item" href="#datamapperqueryselect-subselect">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">subSelect</span>()</code>
<span class="desc">Start a sub-select</span>
</a>
<a class="api-item" href="#datamapperqueryselect-union">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">union</span>()</code>
<span class="desc">Start a <code>UNION</code></span>
</a>
<a class="api-item" href="#datamapperqueryselect-unionall">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig"><span class="sf">unionAll</span>()</code>
<span class="desc">Start a <code>UNION ALL</code></span>
</a>
<a class="api-item" href="#datamapperqueryselect-getcurrentstatement">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getCurrentStatement</span>( <span class="st">string</span> <span class="sv">$suffix</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Statement builder</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">JOIN_INNER</span><span class="sm"> = &quot;INNER&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">JOIN_LEFT</span><span class="sm"> = &quot;LEFT&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">JOIN_NATURAL</span><span class="sm"> = &quot;NATURAL&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">JOIN_RIGHT</span><span class="sm"> = &quot;RIGHT&quot;</span></code>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$asAlias</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$forUpdate</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 19</div>

<h4 id="datamapperqueryselect-__call"><code>__call()</code></h4>

```php
public function __call(
string $method,
array $params
);
```

Proxied methods to the connection

<h4 id="datamapperqueryselect-andhaving"><code>andHaving()</code></h4>

```php
public function andHaving(
string $condition,
mixed $value = null,
int $type = -1
): Select;
```

Sets a `AND` for a `HAVING` condition

<h4 id="datamapperqueryselect-appendhaving"><code>appendHaving()</code></h4>

```php
public function appendHaving(
string $condition,
mixed $value = null,
int $type = -1
): Select;
```

Concatenates to the most recent `HAVING` clause

<h4 id="datamapperqueryselect-appendjoin"><code>appendJoin()</code></h4>

```php
public function appendJoin(
string $condition,
mixed $value = null,
int $type = -1
): Select;
```

Concatenates to the most recent `JOIN` clause

<h4 id="datamapperqueryselect-asalias"><code>asAlias()</code></h4>

```php
public function asAlias( string $asAlias ): Select;
```

The `AS` statement for the query - useful in sub-queries

<h4 id="datamapperqueryselect-columns"><code>columns()</code></h4>

```php
public function columns( array $columns ): Select;
```

The columns to select from. If a key is set in the array element, the
key will be used as the alias

<h4 id="datamapperqueryselect-distinct"><code>distinct()</code></h4>

```php
public function distinct( bool $enable = true ): Select;
```

<h4 id="datamapperqueryselect-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate( bool $enable = true ): Select;
```

Enable the `FOR UPDATE` for the query

<h4 id="datamapperqueryselect-from"><code>from()</code></h4>

```php
public function from( string $table ): Select;
```

Adds table(s) in the query

<h4 id="datamapperqueryselect-getstatement"><code>getStatement()</code></h4>

```php
public function getStatement(): string;
```

Returns the compiled SQL statement

<h4 id="datamapperqueryselect-groupby"><code>groupBy()</code></h4>

```php
public function groupBy( mixed $groupBy ): Select;
```

Sets the `GROUP BY`

<h4 id="datamapperqueryselect-hascolumns"><code>hasColumns()</code></h4>

```php
public function hasColumns(): bool;
```

Whether the query has columns or not

<h4 id="datamapperqueryselect-having"><code>having()</code></h4>

```php
public function having(
string $condition,
mixed $value = null,
int $type = -1
): Select;
```

Sets a `HAVING` condition

<h4 id="datamapperqueryselect-join"><code>join()</code></h4>

```php
public function join(
string $join,
string $table,
string $condition,
mixed $value = null,
int $type = -1
): Select;
```

Sets a 'JOIN' condition

<h4 id="datamapperqueryselect-orhaving"><code>orHaving()</code></h4>

```php
public function orHaving(
string $condition,
mixed $value = null,
int $type = -1
): Select;
```

Sets a `OR` for a `HAVING` condition

<h4 id="datamapperqueryselect-reset"><code>reset()</code></h4>

```php
public function reset(): void;
```

Resets the internal collections

<h4 id="datamapperqueryselect-subselect"><code>subSelect()</code></h4>

```php
public function subSelect(): Select;
```

Start a sub-select

<h4 id="datamapperqueryselect-union"><code>union()</code></h4>

```php
public function union(): Select;
```

Start a `UNION`

<h4 id="datamapperqueryselect-unionall"><code>unionAll()</code></h4>

```php
public function unionAll(): Select;
```

Start a `UNION ALL`

<div class="api-group">Protected · 1</div>

<h4 id="datamapperqueryselect-getcurrentstatement"><code>getCurrentStatement()</code></h4>

```php
protected function getCurrentStatement( string $suffix = "" ): string;
```

Statement builder

## DataMapper\Query\Update

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Update.zep">Source on GitHub</a>

Update Query

<div class="api-tree">

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
- [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
- **`Phalcon\DataMapper\Query\Update`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection`

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryupdate-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">Connection</span> <span class="sv">$connection</span>,</span><span class="prm"><span class="st">Bind</span> <span class="sv">$bind</span></span>)</code>
<span class="desc">Update constructor.</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-column">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig"><span class="sf">column</span>(<span class="prm"><span class="st">string</span> <span class="sv">$column</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Sets a column for the <code>UPDATE</code> query</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-columns">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig"><span class="sf">columns</span>( <span class="st">array</span> <span class="sv">$columns</span> )</code>
<span class="desc">Mass sets columns and values for the <code>UPDATE</code></span>
</a>
<a class="api-item" href="#datamapperqueryupdate-from">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig"><span class="sf">from</span>( <span class="st">string</span> <span class="sv">$table</span> )</code>
<span class="desc">Adds table(s) in the query</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getStatement</span>()</code>
</a>
<a class="api-item" href="#datamapperqueryupdate-hascolumns">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasColumns</span>()</code>
<span class="desc">Whether the query has columns or not</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Resets the internal store</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-returning">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig"><span class="sf">returning</span>( <span class="st">array</span> <span class="sv">$columns</span> )</code>
<span class="desc">Adds the <code>RETURNING</code> clause</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-set">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$column</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets a column = value condition</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

<h4 id="datamapperqueryupdate-__construct"><code>__construct()</code></h4>

```php
public function __construct(
Connection $connection,
Bind $bind
);
```

Update constructor.

<h4 id="datamapperqueryupdate-column"><code>column()</code></h4>

```php
public function column(
string $column,
mixed $value = null,
int $type = -1
): Update;
```

Sets a column for the `UPDATE` query

<h4 id="datamapperqueryupdate-columns"><code>columns()</code></h4>

```php
public function columns( array $columns ): Update;
```

Mass sets columns and values for the `UPDATE`

<h4 id="datamapperqueryupdate-from"><code>from()</code></h4>

```php
public function from( string $table ): Update;
```

Adds table(s) in the query

<h4 id="datamapperqueryupdate-getstatement"><code>getStatement()</code></h4>

```php
public function getStatement(): string;
```

<h4 id="datamapperqueryupdate-hascolumns"><code>hasColumns()</code></h4>

```php
public function hasColumns(): bool;
```

Whether the query has columns or not

<h4 id="datamapperqueryupdate-reset"><code>reset()</code></h4>

```php
public function reset(): void;
```

Resets the internal store

<h4 id="datamapperqueryupdate-returning"><code>returning()</code></h4>

```php
public function returning( array $columns ): Update;
```

Adds the `RETURNING` clause

<h4 id="datamapperqueryupdate-set"><code>set()</code></h4>

```php
public function set(
string $column,
mixed $value = null
): Update;
```

Sets a column = value condition

Source: https://docs.phalcon.io/5.14/api/phalcon_datamapper/index.mdx
