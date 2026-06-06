---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## DataMapper\Pdo\Connection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection.zep){ .src-btn }

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods

<div class="api-tree" markdown>

- [`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`](#datamapperpdoconnectionabstractconnection)
    - **`Phalcon\DataMapper\Pdo\Connection`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection\AbstractConnection` · `Phalcon\DataMapper\Pdo\Exception\DriverNotSupported` · `Phalcon\DataMapper\Pdo\Profiler\Profiler` · `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnection-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $dsn,
    string $username = null,
    string $password = null,
    array $options = [],
    array $queries = [],
    ProfilerInterface $profiler = null
)</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#datamapperpdoconnection-__debuginfo">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">__debugInfo()</code>
<span class="desc">The purpose of this method is to hide sensitive data from stack traces.</span>
</a>
<a class="api-item" href="#datamapperpdoconnection-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">connect()</code>
<span class="desc">Connects to the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnection-disconnect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">disconnect()</code>
<span class="desc">Disconnects from the database.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$arguments = []` `array`

</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #datamapperpdoconnection-__construct }

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

#### `__debugInfo()` { #datamapperpdoconnection-__debuginfo }

```php
public function __debugInfo(): array;
```

The purpose of this method is to hide sensitive data from stack traces.

#### `connect()` { #datamapperpdoconnection-connect }

```php
public function connect(): void;
```

Connects to the database.

#### `disconnect()` { #datamapperpdoconnection-disconnect }

```php
public function disconnect(): void;
```

Disconnects from the database.


## DataMapper\Pdo\ConnectionLocator

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/ConnectionLocator.zep){ .src-btn }

Manages Connection instances for default, read, and write connections.

<div class="api-tree" markdown>

- **`Phalcon\DataMapper\Pdo\ConnectionLocator`** — implements [`Phalcon\DataMapper\Pdo\ConnectionLocatorInterface`](#datamapperpdoconnectionlocatorinterface)

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection\ConnectionInterface` · `Phalcon\DataMapper\Pdo\Exception\ConnectionNotFound`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectionlocator-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    ConnectionInterface $master,
    array $read = [],
    array $write = []
)</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-getmaster">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig">getMaster()</code>
<span class="desc">Returns the default connection object.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-getread">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig">getRead( string $name = &quot;&quot; )</code>
<span class="desc">Returns a read connection by name; if no name is given, picks a</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-getwrite">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig">getWrite( string $name = &quot;&quot; )</code>
<span class="desc">Returns a write connection by name; if no name is given, picks a</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-setmaster">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setMaster( ConnectionInterface $callableObject )</code>
<span class="desc">Sets the default connection factory.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-setread">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setRead(
    string $name,
    callable $callableObject
)</code>
<span class="desc">Sets a read connection factory by name.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-setwrite">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setWrite(
    string $name,
    callable $callableObject
)</code>
<span class="desc">Sets a write connection factory by name.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocator-getconnection">
<code class="vis vis-protected">protected</code>
<code class="ret">ConnectionInterface</code>
<code class="sig">getConnection(
    string $type,
    string $name = &quot;&quot;
)</code>
<span class="desc">Returns a connection by name.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$master` `ConnectionInterface`

    A default Connection connection factory/instance.

-   `protected`{ .vis-protected } `$read = []` `array`

    A registry of Connection "read" factories/instances.

-   `protected`{ .vis-protected } `$write = []` `array`

    A registry of Connection "write" factories/instances.

</div>

### Methods

<div class="api-group">Public · 7</div>

#### `__construct()` { #datamapperpdoconnectionlocator-__construct }

```php
public function __construct(
    ConnectionInterface $master,
    array $read = [],
    array $write = []
);
```

Constructor.

#### `getMaster()` { #datamapperpdoconnectionlocator-getmaster }

```php
public function getMaster(): ConnectionInterface;
```

Returns the default connection object.

#### `getRead()` { #datamapperpdoconnectionlocator-getread }

```php
public function getRead( string $name = "" ): ConnectionInterface;
```

Returns a read connection by name; if no name is given, picks a
random connection; if no read connections are present, returns the
default connection.

#### `getWrite()` { #datamapperpdoconnectionlocator-getwrite }

```php
public function getWrite( string $name = "" ): ConnectionInterface;
```

Returns a write connection by name; if no name is given, picks a
random connection; if no write connections are present, returns the
default connection.

#### `setMaster()` { #datamapperpdoconnectionlocator-setmaster }

```php
public function setMaster( ConnectionInterface $callableObject ): static;
```

Sets the default connection factory.

#### `setRead()` { #datamapperpdoconnectionlocator-setread }

```php
public function setRead(
    string $name,
    callable $callableObject
): static;
```

Sets a read connection factory by name.

#### `setWrite()` { #datamapperpdoconnectionlocator-setwrite }

```php
public function setWrite(
    string $name,
    callable $callableObject
): static;
```

Sets a write connection factory by name.

<div class="api-group">Protected · 1</div>

#### `getConnection()` { #datamapperpdoconnectionlocator-getconnection }

```php
protected function getConnection(
    string $type,
    string $name = ""
): ConnectionInterface;
```

Returns a connection by name.


## DataMapper\Pdo\ConnectionLocatorInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/ConnectionLocatorInterface.zep){ .src-btn }

Locates PDO connections for default, read, and write databases.

<div class="api-tree" markdown>

- **`Phalcon\DataMapper\Pdo\ConnectionLocatorInterface`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-getmaster">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig">getMaster()</code>
<span class="desc">Returns the default connection object.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-getread">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig">getRead( string $name = &quot;&quot; )</code>
<span class="desc">Returns a read connection by name; if no name is given, picks a</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-getwrite">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionInterface</code>
<code class="sig">getWrite( string $name = &quot;&quot; )</code>
<span class="desc">Returns a write connection by name; if no name is given, picks a</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-setmaster">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionLocatorInterface</code>
<code class="sig">setMaster( ConnectionInterface $callableObject )</code>
<span class="desc">Sets the default connection registry entry.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-setread">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionLocatorInterface</code>
<code class="sig">setRead(
    string $name,
    callable $callableObject
)</code>
<span class="desc">Sets a read connection registry entry by name.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionlocatorinterface-setwrite">
<code class="vis vis-public">public</code>
<code class="ret">ConnectionLocatorInterface</code>
<code class="sig">setWrite(
    string $name,
    callable $callableObject
)</code>
<span class="desc">Sets a write connection registry entry by name.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getMaster()` { #datamapperpdoconnectionlocatorinterface-getmaster }

```php
public function getMaster(): ConnectionInterface;
```

Returns the default connection object.

#### `getRead()` { #datamapperpdoconnectionlocatorinterface-getread }

```php
public function getRead( string $name = "" ): ConnectionInterface;
```

Returns a read connection by name; if no name is given, picks a
random connection; if no read connections are present, returns the
default connection.

#### `getWrite()` { #datamapperpdoconnectionlocatorinterface-getwrite }

```php
public function getWrite( string $name = "" ): ConnectionInterface;
```

Returns a write connection by name; if no name is given, picks a
random connection; if no write connections are present, returns the
default connection.

#### `setMaster()` { #datamapperpdoconnectionlocatorinterface-setmaster }

```php
public function setMaster( ConnectionInterface $callableObject ): ConnectionLocatorInterface;
```

Sets the default connection registry entry.

#### `setRead()` { #datamapperpdoconnectionlocatorinterface-setread }

```php
public function setRead(
    string $name,
    callable $callableObject
): ConnectionLocatorInterface;
```

Sets a read connection registry entry by name.

#### `setWrite()` { #datamapperpdoconnectionlocatorinterface-setwrite }

```php
public function setWrite(
    string $name,
    callable $callableObject
): ConnectionLocatorInterface;
```

Sets a write connection registry entry by name.


## DataMapper\Pdo\Connection\AbstractConnection

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/AbstractConnection.zep){ .src-btn }

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods

<div class="api-tree" markdown>

- **`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`** — implements [`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`](#datamapperpdoconnectionconnectioninterface)
    - [`Phalcon\DataMapper\Pdo\Connection`](#datamapperpdoconnection)
    - [`Phalcon\DataMapper\Pdo\Connection\Decorated`](#datamapperpdoconnectiondecorated)

</div>

__Uses__ `BadMethodCallException` · `Phalcon\DataMapper\Pdo\Exception\UnknownDriverMethod` · `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-__call">
<code class="vis vis-public">public</code>
<code class="sig">__call(
    mixed $name,
    array $arguments
)</code>
<span class="desc">Proxies to PDO methods created for specific drivers; in particular,</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-begintransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">beginTransaction()</code>
<span class="desc">Begins a transaction. If the profiler is enabled, the operation will</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-commit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">commit()</code>
<span class="desc">Commits the existing transaction. If the profiler is enabled, the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">connect()</code>
<span class="desc">Connects to the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-disconnect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">disconnect()</code>
<span class="desc">Disconnects from the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-errorcode">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">errorCode()</code>
<span class="desc">Gets the most recent error code.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-errorinfo">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">errorInfo()</code>
<span class="desc">Gets the most recent error info.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-exec">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">exec( string $statement )</code>
<span class="desc">Executes an SQL statement and returns the number of affected rows. If</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchaffected">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">fetchAffected(
    string $statement,
    array $values = []
)</code>
<span class="desc">Performs a statement and returns the number of affected rows.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchAll(
    string $statement,
    array $values = []
)</code>
<span class="desc">Fetches a sequential array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchassoc">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchAssoc(
    string $statement,
    array $values = []
)</code>
<span class="desc">Fetches an associative array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchcolumn">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchColumn(
    string $statement,
    array $values = [],
    int $column = 0
)</code>
<span class="desc">Fetches a column of rows as a sequential array (default first one).</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchgroup">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchGroup(
    string $statement,
    array $values = [],
    int $flags = \PDO::FETCH_ASSOC
)</code>
<span class="desc">Fetches multiple from the database as an associative array. The first</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchobject">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig">fetchObject(
    string $statement,
    array $values = [],
    string $className = &quot;stdClass&quot;,
    array $arguments = []
)</code>
<span class="desc">Fetches one row from the database as an object where the column values</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchobjects">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchObjects(
    string $statement,
    array $values = [],
    string $className = &quot;stdClass&quot;,
    array $arguments = []
)</code>
<span class="desc">Fetches a sequential array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchone">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchOne(
    string $statement,
    array $values = []
)</code>
<span class="desc">Fetches one row from the database as an associative array.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchpairs">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchPairs(
    string $statement,
    array $values = []
)</code>
<span class="desc">Fetches an associative array of rows as key-value pairs (first column is</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchvalue">
<code class="vis vis-public">public</code>
<code class="sig">fetchValue(
    string $statement,
    array $values = []
)</code>
<span class="desc">Fetches the very first value (i.e., first column of the first row).</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">\PDO</code>
<code class="sig">getAdapter()</code>
<span class="desc">Return the inner PDO (if any)</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getattribute">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getAttribute( int $attribute )</code>
<span class="desc">Retrieve a database connection attribute</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getavailabledrivers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAvailableDrivers()</code>
<span class="desc">Return an array of available PDO drivers (empty array if none available)</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getdrivername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getDriverName()</code>
<span class="desc">Return the driver name</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getprofiler">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig">getProfiler()</code>
<span class="desc">Returns the Profiler instance.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-getquotenames">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getQuoteNames( string $driver = &quot;&quot; )</code>
<span class="desc">Gets the quote parameters based on the driver</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-intransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">inTransaction()</code>
<span class="desc">Is a transaction currently active? If the profiler is enabled, the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-isconnected">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isConnected()</code>
<span class="desc">Is the PDO connection active?</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-lastinsertid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">lastInsertId( string $name = null )</code>
<span class="desc">Returns the last inserted autoincrement sequence value. If the profiler</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-perform">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement</code>
<code class="sig">perform(
    string $statement,
    array $values = []
)</code>
<span class="desc">Performs a query with bound values and returns the resulting</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-prepare">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement|bool</code>
<code class="sig">prepare(
    string $statement,
    array $options = []
)</code>
<span class="desc">Prepares an SQL statement for execution.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-query">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement|bool</code>
<code class="sig">query( string $statement )</code>
<span class="desc">Queries the database and returns a PDOStatement. If the profiler is</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-quote">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">quote(
    mixed $value,
    int $type = \PDO::PARAM_STR
)</code>
<span class="desc">Quotes a value for use in an SQL statement. This differs from</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-rollback">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">rollBack()</code>
<span class="desc">Rolls back the current transaction, and restores autocommit mode. If the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-setattribute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">setAttribute(
    int $attribute,
    mixed $value
)</code>
<span class="desc">Set a database connection attribute</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-setprofiler">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setProfiler( ProfilerInterface $profiler )</code>
<span class="desc">Sets the Profiler instance.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-fetchdata">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">fetchData(
    string $method,
    array $arguments,
    string $statement,
    array $values = []
)</code>
<span class="desc">Helper method to get data from PDO based on the method passed</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionabstractconnection-performbind">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">performBind(
    \PDOStatement $statement,
    mixed $name,
    mixed $arguments
)</code>
<span class="desc">Bind a value using the proper PDO::PARAM_* type.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$pdo` `\PDO`

-   `protected`{ .vis-protected } `$profiler` `ProfilerInterface`

</div>

### Methods

<div class="api-group">Public · 34</div>

#### `__call()` { #datamapperpdoconnectionabstractconnection-__call }

```php
public function __call(
    mixed $name,
    array $arguments
);
```

Proxies to PDO methods created for specific drivers; in particular,
`sqlite` and `pgsql`.

#### `beginTransaction()` { #datamapperpdoconnectionabstractconnection-begintransaction }

```php
public function beginTransaction(): bool;
```

Begins a transaction. If the profiler is enabled, the operation will
be recorded.

#### `commit()` { #datamapperpdoconnectionabstractconnection-commit }

```php
public function commit(): bool;
```

Commits the existing transaction. If the profiler is enabled, the
operation will be recorded.

#### `connect()` { #datamapperpdoconnectionabstractconnection-connect }

```php
abstract public function connect(): void;
```

Connects to the database.

#### `disconnect()` { #datamapperpdoconnectionabstractconnection-disconnect }

```php
abstract public function disconnect(): void;
```

Disconnects from the database.

#### `errorCode()` { #datamapperpdoconnectionabstractconnection-errorcode }

```php
public function errorCode(): string|null;
```

Gets the most recent error code.

#### `errorInfo()` { #datamapperpdoconnectionabstractconnection-errorinfo }

```php
public function errorInfo(): array;
```

Gets the most recent error info.

#### `exec()` { #datamapperpdoconnectionabstractconnection-exec }

```php
public function exec( string $statement ): int;
```

Executes an SQL statement and returns the number of affected rows. If
the profiler is enabled, the operation will be recorded.

#### `fetchAffected()` { #datamapperpdoconnectionabstractconnection-fetchaffected }

```php
public function fetchAffected(
    string $statement,
    array $values = []
): int;
```

Performs a statement and returns the number of affected rows.

#### `fetchAll()` { #datamapperpdoconnectionabstractconnection-fetchall }

```php
public function fetchAll(
    string $statement,
    array $values = []
): array;
```

Fetches a sequential array of rows from the database; the rows are
returned as associative arrays.

#### `fetchAssoc()` { #datamapperpdoconnectionabstractconnection-fetchassoc }

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

#### `fetchColumn()` { #datamapperpdoconnectionabstractconnection-fetchcolumn }

```php
public function fetchColumn(
    string $statement,
    array $values = [],
    int $column = 0
): array;
```

Fetches a column of rows as a sequential array (default first one).

#### `fetchGroup()` { #datamapperpdoconnectionabstractconnection-fetchgroup }

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

#### `fetchObject()` { #datamapperpdoconnectionabstractconnection-fetchobject }

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

#### `fetchObjects()` { #datamapperpdoconnectionabstractconnection-fetchobjects }

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

#### `fetchOne()` { #datamapperpdoconnectionabstractconnection-fetchone }

```php
public function fetchOne(
    string $statement,
    array $values = []
): array;
```

Fetches one row from the database as an associative array.

#### `fetchPairs()` { #datamapperpdoconnectionabstractconnection-fetchpairs }

```php
public function fetchPairs(
    string $statement,
    array $values = []
): array;
```

Fetches an associative array of rows as key-value pairs (first column is
the key, second column is the value).

#### `fetchValue()` { #datamapperpdoconnectionabstractconnection-fetchvalue }

```php
public function fetchValue(
    string $statement,
    array $values = []
);
```

Fetches the very first value (i.e., first column of the first row).

#### `getAdapter()` { #datamapperpdoconnectionabstractconnection-getadapter }

```php
public function getAdapter(): \PDO;
```

Return the inner PDO (if any)

#### `getAttribute()` { #datamapperpdoconnectionabstractconnection-getattribute }

```php
public function getAttribute( int $attribute ): mixed;
```

Retrieve a database connection attribute

#### `getAvailableDrivers()` { #datamapperpdoconnectionabstractconnection-getavailabledrivers }

```php
public static function getAvailableDrivers(): array;
```

Return an array of available PDO drivers (empty array if none available)

#### `getDriverName()` { #datamapperpdoconnectionabstractconnection-getdrivername }

```php
public function getDriverName(): string;
```

Return the driver name

#### `getProfiler()` { #datamapperpdoconnectionabstractconnection-getprofiler }

```php
public function getProfiler(): ProfilerInterface;
```

Returns the Profiler instance.

#### `getQuoteNames()` { #datamapperpdoconnectionabstractconnection-getquotenames }

```php
public function getQuoteNames( string $driver = "" ): array;
```

Gets the quote parameters based on the driver

#### `inTransaction()` { #datamapperpdoconnectionabstractconnection-intransaction }

```php
public function inTransaction(): bool;
```

Is a transaction currently active? If the profiler is enabled, the
operation will be recorded. If the profiler is enabled, the operation
will be recorded.

#### `isConnected()` { #datamapperpdoconnectionabstractconnection-isconnected }

```php
public function isConnected(): bool;
```

Is the PDO connection active?

#### `lastInsertId()` { #datamapperpdoconnectionabstractconnection-lastinsertid }

```php
public function lastInsertId( string $name = null ): string;
```

Returns the last inserted autoincrement sequence value. If the profiler
is enabled, the operation will be recorded.

#### `perform()` { #datamapperpdoconnectionabstractconnection-perform }

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

#### `prepare()` { #datamapperpdoconnectionabstractconnection-prepare }

```php
public function prepare(
    string $statement,
    array $options = []
): \PDOStatement|bool;
```

Prepares an SQL statement for execution.

#### `query()` { #datamapperpdoconnectionabstractconnection-query }

```php
public function query( string $statement ): \PDOStatement|bool;
```

Queries the database and returns a PDOStatement. If the profiler is
enabled, the operation will be recorded.

#### `quote()` { #datamapperpdoconnectionabstractconnection-quote }

```php
public function quote(
    mixed $value,
    int $type = \PDO::PARAM_STR
): string;
```

Quotes a value for use in an SQL statement. This differs from
`PDO::quote()` in that it will convert an array into a string of
comma-separated quoted values. The default type is `PDO::PARAM_STR`

#### `rollBack()` { #datamapperpdoconnectionabstractconnection-rollback }

```php
public function rollBack(): bool;
```

Rolls back the current transaction, and restores autocommit mode. If the
profiler is enabled, the operation will be recorded.

#### `setAttribute()` { #datamapperpdoconnectionabstractconnection-setattribute }

```php
public function setAttribute(
    int $attribute,
    mixed $value
): bool;
```

Set a database connection attribute

#### `setProfiler()` { #datamapperpdoconnectionabstractconnection-setprofiler }

```php
public function setProfiler( ProfilerInterface $profiler ): static;
```

Sets the Profiler instance.

<div class="api-group">Protected · 2</div>

#### `fetchData()` { #datamapperpdoconnectionabstractconnection-fetchdata }

```php
protected function fetchData(
    string $method,
    array $arguments,
    string $statement,
    array $values = []
): array;
```

Helper method to get data from PDO based on the method passed

#### `performBind()` { #datamapperpdoconnectionabstractconnection-performbind }

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/ConnectionInterface.zep){ .src-btn }

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods

<div class="api-tree" markdown>

- [`Phalcon\DataMapper\Pdo\Connection\PdoInterface`](#datamapperpdoconnectionpdointerface)
    - **`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">connect()</code>
<span class="desc">Connects to the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-disconnect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">disconnect()</code>
<span class="desc">Disconnects from the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchaffected">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">fetchAffected(
    string $statement,
    array $values = []
)</code>
<span class="desc">Performs a statement and returns the number of affected rows.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchAll(
    string $statement,
    array $values = []
)</code>
<span class="desc">Fetches a sequential array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchassoc">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchAssoc(
    string $statement,
    array $values = []
)</code>
<span class="desc">Fetches an associative array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchcolumn">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchColumn(
    string $statement,
    array $values = [],
    int $column = 0
)</code>
<span class="desc">Fetches a column of rows as a sequential array (default first one).</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchgroup">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchGroup(
    string $statement,
    array $values = [],
    int $flags = \PDO::FETCH_ASSOC
)</code>
<span class="desc">Fetches multiple from the database as an associative array. The first</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchobject">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig">fetchObject(
    string $statement,
    array $values = [],
    string $className = &quot;stdClass&quot;,
    array $arguments = []
)</code>
<span class="desc">Fetches one row from the database as an object where the column values</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchobjects">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchObjects(
    string $statement,
    array $values = [],
    string $className = &quot;stdClass&quot;,
    array $arguments = []
)</code>
<span class="desc">Fetches a sequential array of rows from the database; the rows are</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchone">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchOne(
    string $statement,
    array $values = []
)</code>
<span class="desc">Fetches one row from the database as an associative array.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchpairs">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchPairs(
    string $statement,
    array $values = []
)</code>
<span class="desc">Fetches an associative array of rows as key-value pairs (first column is</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-fetchvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">fetchValue(
    string $statement,
    array $values = []
)</code>
<span class="desc">Fetches the very first value (i.e., first column of the first row).</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">\PDO</code>
<code class="sig">getAdapter()</code>
<span class="desc">Return the inner PDO (if any)</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-getprofiler">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig">getProfiler()</code>
<span class="desc">Returns the Profiler instance.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-isconnected">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isConnected()</code>
<span class="desc">Is the PDO connection active?</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-perform">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement</code>
<code class="sig">perform(
    string $statement,
    array $values = []
)</code>
<span class="desc">Performs a query with bound values and returns the resulting</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionconnectioninterface-setprofiler">
<code class="vis vis-public">public</code>
<code class="sig">setProfiler( ProfilerInterface $profiler )</code>
<span class="desc">Sets the Profiler instance.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `connect()` { #datamapperpdoconnectionconnectioninterface-connect }

```php
public function connect(): void;
```

Connects to the database.

#### `disconnect()` { #datamapperpdoconnectionconnectioninterface-disconnect }

```php
public function disconnect(): void;
```

Disconnects from the database.

#### `fetchAffected()` { #datamapperpdoconnectionconnectioninterface-fetchaffected }

```php
public function fetchAffected(
    string $statement,
    array $values = []
): int;
```

Performs a statement and returns the number of affected rows.

#### `fetchAll()` { #datamapperpdoconnectionconnectioninterface-fetchall }

```php
public function fetchAll(
    string $statement,
    array $values = []
): array;
```

Fetches a sequential array of rows from the database; the rows are
returned as associative arrays.

#### `fetchAssoc()` { #datamapperpdoconnectionconnectioninterface-fetchassoc }

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

#### `fetchColumn()` { #datamapperpdoconnectionconnectioninterface-fetchcolumn }

```php
public function fetchColumn(
    string $statement,
    array $values = [],
    int $column = 0
): array;
```

Fetches a column of rows as a sequential array (default first one).

#### `fetchGroup()` { #datamapperpdoconnectionconnectioninterface-fetchgroup }

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

#### `fetchObject()` { #datamapperpdoconnectionconnectioninterface-fetchobject }

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

#### `fetchObjects()` { #datamapperpdoconnectionconnectioninterface-fetchobjects }

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

#### `fetchOne()` { #datamapperpdoconnectionconnectioninterface-fetchone }

```php
public function fetchOne(
    string $statement,
    array $values = []
): array;
```

Fetches one row from the database as an associative array.

#### `fetchPairs()` { #datamapperpdoconnectionconnectioninterface-fetchpairs }

```php
public function fetchPairs(
    string $statement,
    array $values = []
): array;
```

Fetches an associative array of rows as key-value pairs (first column is
the key, second column is the value).

#### `fetchValue()` { #datamapperpdoconnectionconnectioninterface-fetchvalue }

```php
public function fetchValue(
    string $statement,
    array $values = []
): mixed;
```

Fetches the very first value (i.e., first column of the first row).

#### `getAdapter()` { #datamapperpdoconnectionconnectioninterface-getadapter }

```php
public function getAdapter(): \PDO;
```

Return the inner PDO (if any)

#### `getProfiler()` { #datamapperpdoconnectionconnectioninterface-getprofiler }

```php
public function getProfiler(): ProfilerInterface;
```

Returns the Profiler instance.

#### `isConnected()` { #datamapperpdoconnectionconnectioninterface-isconnected }

```php
public function isConnected(): bool;
```

Is the PDO connection active?

#### `perform()` { #datamapperpdoconnectionconnectioninterface-perform }

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

#### `setProfiler()` { #datamapperpdoconnectionconnectioninterface-setprofiler }

```php
public function setProfiler( ProfilerInterface $profiler );
```

Sets the Profiler instance.


## DataMapper\Pdo\Connection\Decorated

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/Decorated.zep){ .src-btn }

Decorates an existing PDO instance with the extended methods.

<div class="api-tree" markdown>

- [`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`](#datamapperpdoconnectionabstractconnection)
    - **`Phalcon\DataMapper\Pdo\Connection\Decorated`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Exception\CannotDisconnect` · `Phalcon\DataMapper\Pdo\Profiler\Profiler` · `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectiondecorated-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    \PDO $pdo,
    ProfilerInterface $profiler = null
)</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectiondecorated-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">connect()</code>
<span class="desc">Connects to the database.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectiondecorated-disconnect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">disconnect()</code>
<span class="desc">Disconnects from the database; disallowed with decorated PDO connections.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #datamapperpdoconnectiondecorated-__construct }

```php
public function __construct(
    \PDO $pdo,
    ProfilerInterface $profiler = null
);
```

Constructor.

This overrides the parent so that it can take an existing PDO instance
and decorate it with the extended methods.

#### `connect()` { #datamapperpdoconnectiondecorated-connect }

```php
public function connect(): void;
```

Connects to the database.

#### `disconnect()` { #datamapperpdoconnectiondecorated-disconnect }

```php
public function disconnect(): void;
```

Disconnects from the database; disallowed with decorated PDO connections.


## DataMapper\Pdo\Connection\PdoInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/PdoInterface.zep){ .src-btn }

An interface to the native PDO object.

<div class="api-tree" markdown>

- **`Phalcon\DataMapper\Pdo\Connection\PdoInterface`**
    - [`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`](#datamapperpdoconnectionconnectioninterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoconnectionpdointerface-begintransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">beginTransaction()</code>
<span class="desc">Begins a transaction. If the profiler is enabled, the operation will</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-commit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">commit()</code>
<span class="desc">Commits the existing transaction. If the profiler is enabled, the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-errorcode">
<code class="vis vis-public">public</code>
<code class="ret">null|string</code>
<code class="sig">errorCode()</code>
<span class="desc">Gets the most recent error code.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-errorinfo">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">errorInfo()</code>
<span class="desc">Gets the most recent error info.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-exec">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">exec( string $statement )</code>
<span class="desc">Executes an SQL statement and returns the number of affected rows. If</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-getattribute">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getAttribute( int $attribute )</code>
<span class="desc">Retrieve a database connection attribute</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-getavailabledrivers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAvailableDrivers()</code>
<span class="desc">Return an array of available PDO drivers (empty array if none available)</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-intransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">inTransaction()</code>
<span class="desc">Is a transaction currently active? If the profiler is enabled, the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-lastinsertid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">lastInsertId( string $name = null )</code>
<span class="desc">Returns the last inserted autoincrement sequence value. If the profiler</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-prepare">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement|bool</code>
<code class="sig">prepare(
    string $statement,
    array $options = []
)</code>
<span class="desc">Prepares an SQL statement for execution.</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-query">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement|bool</code>
<code class="sig">query( string $statement )</code>
<span class="desc">Queries the database and returns a PDOStatement. If the profiler is</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-quote">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">quote(
    mixed $value,
    int $type = \PDO::PARAM_STR
)</code>
<span class="desc">Quotes a value for use in an SQL statement. This differs from</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-rollback">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">rollBack()</code>
<span class="desc">Rolls back the current transaction, and restores autocommit mode. If the</span>
</a>
<a class="api-item" href="#datamapperpdoconnectionpdointerface-setattribute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">setAttribute(
    int $attribute,
    mixed $value
)</code>
<span class="desc">Set a database connection attribute</span>
</a>
</div>

### Methods

<div class="api-group">Public · 14</div>

#### `beginTransaction()` { #datamapperpdoconnectionpdointerface-begintransaction }

```php
public function beginTransaction(): bool;
```

Begins a transaction. If the profiler is enabled, the operation will
be recorded.

#### `commit()` { #datamapperpdoconnectionpdointerface-commit }

```php
public function commit(): bool;
```

Commits the existing transaction. If the profiler is enabled, the
operation will be recorded.

#### `errorCode()` { #datamapperpdoconnectionpdointerface-errorcode }

```php
public function errorCode(): null|string;
```

Gets the most recent error code.

#### `errorInfo()` { #datamapperpdoconnectionpdointerface-errorinfo }

```php
public function errorInfo(): array;
```

Gets the most recent error info.

#### `exec()` { #datamapperpdoconnectionpdointerface-exec }

```php
public function exec( string $statement ): int;
```

Executes an SQL statement and returns the number of affected rows. If
the profiler is enabled, the operation will be recorded.

#### `getAttribute()` { #datamapperpdoconnectionpdointerface-getattribute }

```php
public function getAttribute( int $attribute ): mixed;
```

Retrieve a database connection attribute

#### `getAvailableDrivers()` { #datamapperpdoconnectionpdointerface-getavailabledrivers }

```php
public static function getAvailableDrivers(): array;
```

Return an array of available PDO drivers (empty array if none available)

#### `inTransaction()` { #datamapperpdoconnectionpdointerface-intransaction }

```php
public function inTransaction(): bool;
```

Is a transaction currently active? If the profiler is enabled, the
operation will be recorded. If the profiler is enabled, the operation
will be recorded.

#### `lastInsertId()` { #datamapperpdoconnectionpdointerface-lastinsertid }

```php
public function lastInsertId( string $name = null ): string;
```

Returns the last inserted autoincrement sequence value. If the profiler
is enabled, the operation will be recorded.

#### `prepare()` { #datamapperpdoconnectionpdointerface-prepare }

```php
public function prepare(
    string $statement,
    array $options = []
): \PDOStatement|bool;
```

Prepares an SQL statement for execution.

#### `query()` { #datamapperpdoconnectionpdointerface-query }

```php
public function query( string $statement ): \PDOStatement|bool;
```

Queries the database and returns a PDOStatement. If the profiler is
enabled, the operation will be recorded.

#### `quote()` { #datamapperpdoconnectionpdointerface-quote }

```php
public function quote(
    mixed $value,
    int $type = \PDO::PARAM_STR
): string;
```

Quotes a value for use in an SQL statement. This differs from
`PDO::quote()` in that it will convert an array into a string of
comma-separated quoted values. The default type is `PDO::PARAM_STR`

#### `rollBack()` { #datamapperpdoconnectionpdointerface-rollback }

```php
public function rollBack(): bool;
```

Rolls back the current transaction, and restores autocommit mode. If the
profiler is enabled, the operation will be recorded.

#### `setAttribute()` { #datamapperpdoconnectionpdointerface-setattribute }

```php
public function setAttribute(
    int $attribute,
    mixed $value
): bool;
```

Set a database connection attribute


## DataMapper\Pdo\Exception\CannotDisconnect

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/CannotDisconnect.zep){ .src-btn }

ExtendedPdo could not disconnect; e.g., because its PDO connection was
created externally and then injected.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\DataMapper\Pdo\Exception\Exception`](#datamapperpdoexceptionexception)
        - **`Phalcon\DataMapper\Pdo\Exception\CannotDisconnect`**

</div>


## DataMapper\Pdo\Exception\ConnectionNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/ConnectionNotFound.zep){ .src-btn }

Locator could not find a named connection.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\DataMapper\Pdo\Exception\Exception`](#datamapperpdoexceptionexception)
        - **`Phalcon\DataMapper\Pdo\Exception\ConnectionNotFound`**

</div>


## DataMapper\Pdo\Exception\DriverNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/DriverNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `InvalidArgumentException`
    - **`Phalcon\DataMapper\Pdo\Exception\DriverNotSupported`**

</div>

__Uses__ `InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoexceptiondrivernotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $driver )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #datamapperpdoexceptiondrivernotsupported-__construct }

```php
public function __construct( string $driver );
```


## DataMapper\Pdo\Exception\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/Exception.zep){ .src-btn }

Base Exception class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\DataMapper\Pdo\Exception\Exception`**
        - [`Phalcon\DataMapper\Pdo\Exception\CannotDisconnect`](#datamapperpdoexceptioncannotdisconnect)
        - [`Phalcon\DataMapper\Pdo\Exception\ConnectionNotFound`](#datamapperpdoexceptionconnectionnotfound)

</div>


## DataMapper\Pdo\Exception\UnknownDriverMethod

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/UnknownDriverMethod.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `BadMethodCallException`
    - **`Phalcon\DataMapper\Pdo\Exception\UnknownDriverMethod`**

</div>

__Uses__ `BadMethodCallException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoexceptionunknowndrivermethod-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $message )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #datamapperpdoexceptionunknowndrivermethod-__construct }

```php
public function __construct( string $message );
```


## DataMapper\Pdo\Exception\UnknownQueryMethod

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/UnknownQueryMethod.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `BadMethodCallException`
    - **`Phalcon\DataMapper\Pdo\Exception\UnknownQueryMethod`**

</div>

__Uses__ `BadMethodCallException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoexceptionunknownquerymethod-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $method )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #datamapperpdoexceptionunknownquerymethod-__construct }

```php
public function __construct( string $method );
```


## DataMapper\Pdo\Profiler\MemoryLogger

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Profiler/MemoryLogger.zep){ .src-btn }

A memory-based logger.

<div class="api-tree" markdown>

- **`Phalcon\DataMapper\Pdo\Profiler\MemoryLogger`** — implements [`Phalcon\Logger\LoggerInterface`](phalcon_logger.md#loggerloggerinterface)

</div>

__Uses__ `Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Adapter\Noop` · `Phalcon\Logger\Enum` · `Phalcon\Logger\LoggerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoprofilermemorylogger-alert">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">alert(
    string $message,
    array $context = []
)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-critical">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">critical(
    string $message,
    array $context = []
)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-debug">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">debug(
    string $message,
    array $context = []
)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-emergency">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">emergency(
    string $message,
    array $context = []
)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-error">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">error(
    string $message,
    array $context = []
)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getAdapter( string $name )</code>
<span class="desc">Returns an adapter from the stack</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-getadapters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAdapters()</code>
<span class="desc">Returns the adapter stack array</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getLogLevel()</code>
<span class="desc">Returns the log level</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getMessages()</code>
<span class="desc">Returns the logged messages.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Returns the name of the logger</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-info">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">info(
    string $message,
    array $context = []
)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-log">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">log(
    mixed $level,
    string $message,
    array $context = []
)</code>
<span class="desc">Logs a message.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-notice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">notice(
    string $message,
    array $context = []
)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-trace">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">trace(
    string $message,
    array $context = []
)</code>
</a>
<a class="api-item" href="#datamapperpdoprofilermemorylogger-warning">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">warning(
    string $message,
    array $context = []
)</code>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$messages = []` `array`

</div>

### Methods

<div class="api-group">Public · 15</div>

#### `alert()` { #datamapperpdoprofilermemorylogger-alert }

```php
public function alert(
    string $message,
    array $context = []
): void;
```

#### `critical()` { #datamapperpdoprofilermemorylogger-critical }

```php
public function critical(
    string $message,
    array $context = []
): void;
```

#### `debug()` { #datamapperpdoprofilermemorylogger-debug }

```php
public function debug(
    string $message,
    array $context = []
): void;
```

#### `emergency()` { #datamapperpdoprofilermemorylogger-emergency }

```php
public function emergency(
    string $message,
    array $context = []
): void;
```

#### `error()` { #datamapperpdoprofilermemorylogger-error }

```php
public function error(
    string $message,
    array $context = []
): void;
```

#### `getAdapter()` { #datamapperpdoprofilermemorylogger-getadapter }

```php
public function getAdapter( string $name ): AdapterInterface;
```

Returns an adapter from the stack

#### `getAdapters()` { #datamapperpdoprofilermemorylogger-getadapters }

```php
public function getAdapters(): array;
```

Returns the adapter stack array

#### `getLogLevel()` { #datamapperpdoprofilermemorylogger-getloglevel }

```php
public function getLogLevel(): int;
```

Returns the log level

#### `getMessages()` { #datamapperpdoprofilermemorylogger-getmessages }

```php
public function getMessages(): array;
```

Returns the logged messages.

#### `getName()` { #datamapperpdoprofilermemorylogger-getname }

```php
public function getName(): string;
```

Returns the name of the logger

#### `info()` { #datamapperpdoprofilermemorylogger-info }

```php
public function info(
    string $message,
    array $context = []
): void;
```

#### `log()` { #datamapperpdoprofilermemorylogger-log }

```php
public function log(
    mixed $level,
    string $message,
    array $context = []
): void;
```

Logs a message.

#### `notice()` { #datamapperpdoprofilermemorylogger-notice }

```php
public function notice(
    string $message,
    array $context = []
): void;
```

#### `trace()` { #datamapperpdoprofilermemorylogger-trace }

```php
public function trace(
    string $message,
    array $context = []
): void;
```

#### `warning()` { #datamapperpdoprofilermemorylogger-warning }

```php
public function warning(
    string $message,
    array $context = []
): void;
```


## DataMapper\Pdo\Profiler\Profiler

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Profiler/Profiler.zep){ .src-btn }

Sends query profiles to a logger.

<div class="api-tree" markdown>

- **`Phalcon\DataMapper\Pdo\Profiler\Profiler`** — implements [`Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`](#datamapperpdoprofilerprofilerinterface)

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Exception\Exception` · `Phalcon\Logger\Enum` · `Phalcon\Logger\LoggerInterface` · `Phalcon\Support\Helper\Json\Encode`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoprofilerprofiler-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( LoggerInterface $logger = null )</code>
<span class="desc">Constructor.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-finish">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">finish(
    string $statement = null,
    array $values = []
)</code>
<span class="desc">Finishes and logs a profile entry.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-getlogformat">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getLogFormat()</code>
<span class="desc">Returns the log message format string, with placeholders.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getLogLevel()</code>
<span class="desc">Returns the level at which to log profile messages.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-getlogger">
<code class="vis vis-public">public</code>
<code class="ret">LoggerInterface</code>
<code class="sig">getLogger()</code>
<span class="desc">Returns the underlying logger instance.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-isactive">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isActive()</code>
<span class="desc">Returns true if logging is active.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-setactive">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig">setActive( bool $active )</code>
<span class="desc">Enable or disable profiler logging.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-setlogformat">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig">setLogFormat( string $logFormat )</code>
<span class="desc">Sets the log message format string, with placeholders.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-setloglevel">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig">setLogLevel( string $logLevel )</code>
<span class="desc">Level at which to log profile messages.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofiler-start">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">start( string $method )</code>
<span class="desc">Starts a profile entry.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$active = false` `bool`

-   `protected`{ .vis-protected } `$context = []` `array`

-   `protected`{ .vis-protected } `$logFormat = ""` `string`

-   `protected`{ .vis-protected } `$logLevel = 0` `int`

-   `protected`{ .vis-protected } `$logger` `LoggerInterface`

</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__construct()` { #datamapperpdoprofilerprofiler-__construct }

```php
public function __construct( LoggerInterface $logger = null );
```

Constructor.

#### `finish()` { #datamapperpdoprofilerprofiler-finish }

```php
public function finish(
    string $statement = null,
    array $values = []
): void;
```

Finishes and logs a profile entry.

#### `getLogFormat()` { #datamapperpdoprofilerprofiler-getlogformat }

```php
public function getLogFormat(): string;
```

Returns the log message format string, with placeholders.

#### `getLogLevel()` { #datamapperpdoprofilerprofiler-getloglevel }

```php
public function getLogLevel(): string;
```

Returns the level at which to log profile messages.

#### `getLogger()` { #datamapperpdoprofilerprofiler-getlogger }

```php
public function getLogger(): LoggerInterface;
```

Returns the underlying logger instance.

#### `isActive()` { #datamapperpdoprofilerprofiler-isactive }

```php
public function isActive(): bool;
```

Returns true if logging is active.

#### `setActive()` { #datamapperpdoprofilerprofiler-setactive }

```php
public function setActive( bool $active ): ProfilerInterface;
```

Enable or disable profiler logging.

#### `setLogFormat()` { #datamapperpdoprofilerprofiler-setlogformat }

```php
public function setLogFormat( string $logFormat ): ProfilerInterface;
```

Sets the log message format string, with placeholders.

#### `setLogLevel()` { #datamapperpdoprofilerprofiler-setloglevel }

```php
public function setLogLevel( string $logLevel ): ProfilerInterface;
```

Level at which to log profile messages.

#### `start()` { #datamapperpdoprofilerprofiler-start }

```php
public function start( string $method ): void;
```

Starts a profile entry.


## DataMapper\Pdo\Profiler\ProfilerInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Profiler/ProfilerInterface.zep){ .src-btn }

Interface to send query profiles to a logger.

<div class="api-tree" markdown>

- **`Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`**

</div>

__Uses__ `Phalcon\Logger\LoggerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-finish">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">finish(
    string $statement = null,
    array $values = []
)</code>
<span class="desc">Finishes and logs a profile entry.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-getlogformat">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getLogFormat()</code>
<span class="desc">Returns the log message format string, with placeholders.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-getloglevel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getLogLevel()</code>
<span class="desc">Returns the level at which to log profile messages.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-getlogger">
<code class="vis vis-public">public</code>
<code class="ret">LoggerInterface</code>
<code class="sig">getLogger()</code>
<span class="desc">Returns the underlying logger instance.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-isactive">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isActive()</code>
<span class="desc">Returns true if logging is active.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-setactive">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig">setActive( bool $active )</code>
<span class="desc">Enable or disable profiler logging.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-setlogformat">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig">setLogFormat( string $logFormat )</code>
<span class="desc">Sets the log message format string, with placeholders.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-setloglevel">
<code class="vis vis-public">public</code>
<code class="ret">ProfilerInterface</code>
<code class="sig">setLogLevel( string $logLevel )</code>
<span class="desc">Level at which to log profile messages.</span>
</a>
<a class="api-item" href="#datamapperpdoprofilerprofilerinterface-start">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">start( string $method )</code>
<span class="desc">Starts a profile entry.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `finish()` { #datamapperpdoprofilerprofilerinterface-finish }

```php
public function finish(
    string $statement = null,
    array $values = []
): void;
```

Finishes and logs a profile entry.

#### `getLogFormat()` { #datamapperpdoprofilerprofilerinterface-getlogformat }

```php
public function getLogFormat(): string;
```

Returns the log message format string, with placeholders.

#### `getLogLevel()` { #datamapperpdoprofilerprofilerinterface-getloglevel }

```php
public function getLogLevel(): string;
```

Returns the level at which to log profile messages.

#### `getLogger()` { #datamapperpdoprofilerprofilerinterface-getlogger }

```php
public function getLogger(): LoggerInterface;
```

Returns the underlying logger instance.

#### `isActive()` { #datamapperpdoprofilerprofilerinterface-isactive }

```php
public function isActive(): bool;
```

Returns true if logging is active.

#### `setActive()` { #datamapperpdoprofilerprofilerinterface-setactive }

```php
public function setActive( bool $active ): ProfilerInterface;
```

Enable or disable profiler logging.

#### `setLogFormat()` { #datamapperpdoprofilerprofilerinterface-setlogformat }

```php
public function setLogFormat( string $logFormat ): ProfilerInterface;
```

Sets the log message format string, with placeholders.

#### `setLogLevel()` { #datamapperpdoprofilerprofilerinterface-setloglevel }

```php
public function setLogLevel( string $logLevel ): ProfilerInterface;
```

Level at which to log profile messages.

#### `start()` { #datamapperpdoprofilerprofilerinterface-start }

```php
public function start( string $method ): void;
```

Starts a profile entry.


## DataMapper\Query\AbstractConditions

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/AbstractConditions.zep){ .src-btn }

Class AbstractConditions

<div class="api-tree" markdown>

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
<code class="sig">andWhere(
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Sets a `AND` for a `WHERE` condition</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-appendwhere">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig">appendWhere(
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Concatenates to the most recent `WHERE` clause</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-limit">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig">limit( int $limit )</code>
<span class="desc">Sets the `LIMIT` clause</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-offset">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig">offset( int $offset )</code>
<span class="desc">Sets the `OFFSET` clause</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-orwhere">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig">orWhere(
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Sets a `OR` for a `WHERE` condition</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-orderby">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig">orderBy( mixed $orderBy )</code>
<span class="desc">Sets the `ORDER BY`</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-where">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig">where(
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Sets a `WHERE` condition</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-whereequals">
<code class="vis vis-public">public</code>
<code class="ret">AbstractConditions</code>
<code class="sig">whereEquals( array $columnsValues )</code>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-addcondition">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">addCondition(
    string $store,
    string $andor,
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Appends a conditional</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-appendcondition">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">appendCondition(
    string $store,
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Concatenates a conditional</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildby">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">buildBy( string $type )</code>
<span class="desc">Builds a `BY` list</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildcondition">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">buildCondition( string $type )</code>
<span class="desc">Builds the conditional string</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildlimit">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">buildLimit()</code>
<span class="desc">Builds the `LIMIT` clause</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildlimitcommon">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">buildLimitCommon()</code>
<span class="desc">Builds the `LIMIT` clause for all drivers</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildlimitearly">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">buildLimitEarly()</code>
<span class="desc">Builds the early `LIMIT` clause - MS SQLServer</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-buildlimitsqlsrv">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">buildLimitSqlsrv()</code>
<span class="desc">Builds the `LIMIT` clause for MSSQLServer</span>
</a>
<a class="api-item" href="#datamapperqueryabstractconditions-processvalue">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">processValue(
    string $store,
    mixed $data
)</code>
<span class="desc">Processes a value (array or string) and merges it with the store</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `andWhere()` { #datamapperqueryabstractconditions-andwhere }

```php
public function andWhere(
    string $condition,
    mixed $value = null,
    int $type = -1
): AbstractConditions;
```

Sets a `AND` for a `WHERE` condition

#### `appendWhere()` { #datamapperqueryabstractconditions-appendwhere }

```php
public function appendWhere(
    string $condition,
    mixed $value = null,
    int $type = -1
): AbstractConditions;
```

Concatenates to the most recent `WHERE` clause

#### `limit()` { #datamapperqueryabstractconditions-limit }

```php
public function limit( int $limit ): AbstractConditions;
```

Sets the `LIMIT` clause

#### `offset()` { #datamapperqueryabstractconditions-offset }

```php
public function offset( int $offset ): AbstractConditions;
```

Sets the `OFFSET` clause

#### `orWhere()` { #datamapperqueryabstractconditions-orwhere }

```php
public function orWhere(
    string $condition,
    mixed $value = null,
    int $type = -1
): AbstractConditions;
```

Sets a `OR` for a `WHERE` condition

#### `orderBy()` { #datamapperqueryabstractconditions-orderby }

```php
public function orderBy( mixed $orderBy ): AbstractConditions;
```

Sets the `ORDER BY`

#### `where()` { #datamapperqueryabstractconditions-where }

```php
public function where(
    string $condition,
    mixed $value = null,
    int $type = -1
): AbstractConditions;
```

Sets a `WHERE` condition

#### `whereEquals()` { #datamapperqueryabstractconditions-whereequals }

```php
public function whereEquals( array $columnsValues ): AbstractConditions;
```

<div class="api-group">Protected · 9</div>

#### `addCondition()` { #datamapperqueryabstractconditions-addcondition }

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

#### `appendCondition()` { #datamapperqueryabstractconditions-appendcondition }

```php
protected function appendCondition(
    string $store,
    string $condition,
    mixed $value = null,
    int $type = -1
): void;
```

Concatenates a conditional

#### `buildBy()` { #datamapperqueryabstractconditions-buildby }

```php
protected function buildBy( string $type ): string;
```

Builds a `BY` list

#### `buildCondition()` { #datamapperqueryabstractconditions-buildcondition }

```php
protected function buildCondition( string $type ): string;
```

Builds the conditional string

#### `buildLimit()` { #datamapperqueryabstractconditions-buildlimit }

```php
protected function buildLimit(): string;
```

Builds the `LIMIT` clause

#### `buildLimitCommon()` { #datamapperqueryabstractconditions-buildlimitcommon }

```php
protected function buildLimitCommon(): string;
```

Builds the `LIMIT` clause for all drivers

#### `buildLimitEarly()` { #datamapperqueryabstractconditions-buildlimitearly }

```php
protected function buildLimitEarly(): string;
```

Builds the early `LIMIT` clause - MS SQLServer

#### `buildLimitSqlsrv()` { #datamapperqueryabstractconditions-buildlimitsqlsrv }

```php
protected function buildLimitSqlsrv(): string;
```

Builds the `LIMIT` clause for MSSQLServer

#### `processValue()` { #datamapperqueryabstractconditions-processvalue }

```php
protected function processValue(
    string $store,
    mixed $data
): void;
```

Processes a value (array or string) and merges it with the store


## DataMapper\Query\AbstractQuery

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/AbstractQuery.zep){ .src-btn }

Class AbstractQuery

<div class="api-tree" markdown>

- **`Phalcon\DataMapper\Query\AbstractQuery`**
    - [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
    - [`Phalcon\DataMapper\Query\Insert`](#datamapperqueryinsert)

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryabstractquery-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    Connection $connection,
    Bind $bind
)</code>
<span class="desc">AbstractQuery constructor.</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-bindinline">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">bindInline(
    mixed $value,
    int $type = -1
)</code>
<span class="desc">Binds a value inline</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-bindvalue">
<code class="vis vis-public">public</code>
<code class="ret">AbstractQuery</code>
<code class="sig">bindValue(
    string $key,
    mixed $value,
    int $type = -1
)</code>
<span class="desc">Binds a value - auto-detects the type if necessary</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-bindvalues">
<code class="vis vis-public">public</code>
<code class="ret">AbstractQuery</code>
<code class="sig">bindValues( array $values )</code>
<span class="desc">Binds an array of values</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-getbindvalues">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindValues()</code>
<span class="desc">Returns all the bound values</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getStatement()</code>
<span class="desc">Return the generated statement</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-perform">
<code class="vis vis-public">public</code>
<code class="sig">perform()</code>
<span class="desc">Performs a statement in the connection</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-quoteidentifier">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">quoteIdentifier(
    string $name,
    int $type = \PDO::PARAM_STR
)</code>
<span class="desc">Quotes the identifier</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Resets the internal array</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetcolumns">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resetColumns()</code>
<span class="desc">Resets the columns</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetflags">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resetFlags()</code>
<span class="desc">Resets the flags</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetfrom">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resetFrom()</code>
<span class="desc">Resets the from</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetgroupby">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resetGroupBy()</code>
<span class="desc">Resets the group by</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resethaving">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resetHaving()</code>
<span class="desc">Resets the having</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetlimit">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resetLimit()</code>
<span class="desc">Resets the limit and offset</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetorderby">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resetOrderBy()</code>
<span class="desc">Resets the order by</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-resetwhere">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resetWhere()</code>
<span class="desc">Resets the where</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-setflag">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setFlag(
    string $flag,
    bool $enable = true
)</code>
<span class="desc">Sets a flag for the query such as &quot;DISTINCT&quot;</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-buildflags">
<code class="vis vis-protected">protected</code>
<code class="sig">buildFlags()</code>
<span class="desc">Builds the flags statement(s)</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-buildreturning">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">buildReturning()</code>
<span class="desc">Builds the `RETURNING` clause</span>
</a>
<a class="api-item" href="#datamapperqueryabstractquery-indent">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">indent(
    array $collection,
    string $glue = &quot;&quot;
)</code>
<span class="desc">Indents a collection</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$bind` `Bind`

-   `protected`{ .vis-protected } `$connection` `Connection`

-   `protected`{ .vis-protected } `$store = []` `array`

</div>

### Methods

<div class="api-group">Public · 18</div>

#### `__construct()` { #datamapperqueryabstractquery-__construct }

```php
public function __construct(
    Connection $connection,
    Bind $bind
);
```

AbstractQuery constructor.

#### `bindInline()` { #datamapperqueryabstractquery-bindinline }

```php
public function bindInline(
    mixed $value,
    int $type = -1
): string;
```

Binds a value inline

#### `bindValue()` { #datamapperqueryabstractquery-bindvalue }

```php
public function bindValue(
    string $key,
    mixed $value,
    int $type = -1
): AbstractQuery;
```

Binds a value - auto-detects the type if necessary

#### `bindValues()` { #datamapperqueryabstractquery-bindvalues }

```php
public function bindValues( array $values ): AbstractQuery;
```

Binds an array of values

#### `getBindValues()` { #datamapperqueryabstractquery-getbindvalues }

```php
public function getBindValues(): array;
```

Returns all the bound values

#### `getStatement()` { #datamapperqueryabstractquery-getstatement }

```php
abstract public function getStatement(): string;
```

Return the generated statement

#### `perform()` { #datamapperqueryabstractquery-perform }

```php
public function perform();
```

Performs a statement in the connection

#### `quoteIdentifier()` { #datamapperqueryabstractquery-quoteidentifier }

```php
public function quoteIdentifier(
    string $name,
    int $type = \PDO::PARAM_STR
): string;
```

Quotes the identifier

#### `reset()` { #datamapperqueryabstractquery-reset }

```php
public function reset(): void;
```

Resets the internal array

#### `resetColumns()` { #datamapperqueryabstractquery-resetcolumns }

```php
public function resetColumns(): void;
```

Resets the columns

#### `resetFlags()` { #datamapperqueryabstractquery-resetflags }

```php
public function resetFlags(): void;
```

Resets the flags

#### `resetFrom()` { #datamapperqueryabstractquery-resetfrom }

```php
public function resetFrom(): void;
```

Resets the from

#### `resetGroupBy()` { #datamapperqueryabstractquery-resetgroupby }

```php
public function resetGroupBy(): void;
```

Resets the group by

#### `resetHaving()` { #datamapperqueryabstractquery-resethaving }

```php
public function resetHaving(): void;
```

Resets the having

#### `resetLimit()` { #datamapperqueryabstractquery-resetlimit }

```php
public function resetLimit(): void;
```

Resets the limit and offset

#### `resetOrderBy()` { #datamapperqueryabstractquery-resetorderby }

```php
public function resetOrderBy(): void;
```

Resets the order by

#### `resetWhere()` { #datamapperqueryabstractquery-resetwhere }

```php
public function resetWhere(): void;
```

Resets the where

#### `setFlag()` { #datamapperqueryabstractquery-setflag }

```php
public function setFlag(
    string $flag,
    bool $enable = true
): void;
```

Sets a flag for the query such as "DISTINCT"

<div class="api-group">Protected · 3</div>

#### `buildFlags()` { #datamapperqueryabstractquery-buildflags }

```php
protected function buildFlags();
```

Builds the flags statement(s)

#### `buildReturning()` { #datamapperqueryabstractquery-buildreturning }

```php
protected function buildReturning(): string;
```

Builds the `RETURNING` clause

#### `indent()` { #datamapperqueryabstractquery-indent }

```php
protected function indent(
    array $collection,
    string $glue = ""
): string;
```

Indents a collection


## DataMapper\Query\Bind

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Bind.zep){ .src-btn }

Class Bind

<div class="api-tree" markdown>

- **`Phalcon\DataMapper\Query\Bind`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperquerybind-bindinline">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">bindInline(
    mixed $value,
    int $type = -1
)</code>
</a>
<a class="api-item" href="#datamapperquerybind-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">remove( string $key )</code>
<span class="desc">Removes a value from the store</span>
</a>
<a class="api-item" href="#datamapperquerybind-setvalue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setValue(
    string $key,
    mixed $value,
    int $type = -1
)</code>
<span class="desc">Sets a value</span>
</a>
<a class="api-item" href="#datamapperquerybind-setvalues">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setValues(
    array $values,
    int $type = -1
)</code>
<span class="desc">Sets values from an array</span>
</a>
<a class="api-item" href="#datamapperquerybind-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">toArray()</code>
<span class="desc">Returns the internal collection</span>
</a>
<a class="api-item" href="#datamapperquerybind-gettype">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig">getType( mixed $value )</code>
<span class="desc">Auto detects the PDO type</span>
</a>
<a class="api-item" href="#datamapperquerybind-inlinearray">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">inlineArray(
    array $data,
    int $type
)</code>
<span class="desc">Processes an array - if passed as an `inline` parameter</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$inlineCount = 0` `int`

-   `protected`{ .vis-protected } `$store = []` `array`

</div>

### Methods

<div class="api-group">Public · 5</div>

#### `bindInline()` { #datamapperquerybind-bindinline }

```php
public function bindInline(
    mixed $value,
    int $type = -1
): string;
```

#### `remove()` { #datamapperquerybind-remove }

```php
public function remove( string $key ): void;
```

Removes a value from the store

#### `setValue()` { #datamapperquerybind-setvalue }

```php
public function setValue(
    string $key,
    mixed $value,
    int $type = -1
): void;
```

Sets a value

#### `setValues()` { #datamapperquerybind-setvalues }

```php
public function setValues(
    array $values,
    int $type = -1
): void;
```

Sets values from an array

#### `toArray()` { #datamapperquerybind-toarray }

```php
public function toArray(): array;
```

Returns the internal collection

<div class="api-group">Protected · 2</div>

#### `getType()` { #datamapperquerybind-gettype }

```php
protected function getType( mixed $value ): int;
```

Auto detects the PDO type

#### `inlineArray()` { #datamapperquerybind-inlinearray }

```php
protected function inlineArray(
    array $data,
    int $type
): string;
```

Processes an array - if passed as an `inline` parameter


## DataMapper\Query\Delete

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Delete.zep){ .src-btn }

Delete Query

<div class="api-tree" markdown>

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
    - [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
        - **`Phalcon\DataMapper\Query\Delete`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperquerydelete-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    Connection $connection,
    Bind $bind
)</code>
<span class="desc">Delete constructor.</span>
</a>
<a class="api-item" href="#datamapperquerydelete-from">
<code class="vis vis-public">public</code>
<code class="ret">Delete</code>
<code class="sig">from( string $table )</code>
<span class="desc">Adds table(s) in the query</span>
</a>
<a class="api-item" href="#datamapperquerydelete-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getStatement()</code>
</a>
<a class="api-item" href="#datamapperquerydelete-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Resets the internal store</span>
</a>
<a class="api-item" href="#datamapperquerydelete-returning">
<code class="vis vis-public">public</code>
<code class="ret">Delete</code>
<code class="sig">returning( array $columns )</code>
<span class="desc">Adds the `RETURNING` clause</span>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `__construct()` { #datamapperquerydelete-__construct }

```php
public function __construct(
    Connection $connection,
    Bind $bind
);
```

Delete constructor.

#### `from()` { #datamapperquerydelete-from }

```php
public function from( string $table ): Delete;
```

Adds table(s) in the query

#### `getStatement()` { #datamapperquerydelete-getstatement }

```php
public function getStatement(): string;
```

#### `reset()` { #datamapperquerydelete-reset }

```php
public function reset(): void;
```

Resets the internal store

#### `returning()` { #datamapperquerydelete-returning }

```php
public function returning( array $columns ): Delete;
```

Adds the `RETURNING` clause


## DataMapper\Query\Insert

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Insert.zep){ .src-btn }

Insert Query

<div class="api-tree" markdown>

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
    - **`Phalcon\DataMapper\Query\Insert`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryinsert-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    Connection $connection,
    Bind $bind
)</code>
<span class="desc">Insert constructor.</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-column">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig">column(
    string $column,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Sets a column for the `INSERT` query</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-columns">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig">columns( array $columns )</code>
<span class="desc">Mass sets columns and values for the `INSERT`</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-getlastinsertid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getLastInsertId( string $name = null )</code>
<span class="desc">Returns the id of the last inserted record</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getStatement()</code>
</a>
<a class="api-item" href="#datamapperqueryinsert-into">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig">into( string $table )</code>
<span class="desc">Adds table(s) in the query</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Resets the internal store</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-returning">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig">returning( array $columns )</code>
<span class="desc">Adds the `RETURNING` clause</span>
</a>
<a class="api-item" href="#datamapperqueryinsert-set">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig">set(
    string $column,
    mixed $value = null
)</code>
<span class="desc">Sets a column = value condition</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `__construct()` { #datamapperqueryinsert-__construct }

```php
public function __construct(
    Connection $connection,
    Bind $bind
);
```

Insert constructor.

#### `column()` { #datamapperqueryinsert-column }

```php
public function column(
    string $column,
    mixed $value = null,
    int $type = -1
): Insert;
```

Sets a column for the `INSERT` query

#### `columns()` { #datamapperqueryinsert-columns }

```php
public function columns( array $columns ): Insert;
```

Mass sets columns and values for the `INSERT`

#### `getLastInsertId()` { #datamapperqueryinsert-getlastinsertid }

```php
public function getLastInsertId( string $name = null ): string;
```

Returns the id of the last inserted record

#### `getStatement()` { #datamapperqueryinsert-getstatement }

```php
public function getStatement(): string;
```

#### `into()` { #datamapperqueryinsert-into }

```php
public function into( string $table ): Insert;
```

Adds table(s) in the query

#### `reset()` { #datamapperqueryinsert-reset }

```php
public function reset(): void;
```

Resets the internal store

#### `returning()` { #datamapperqueryinsert-returning }

```php
public function returning( array $columns ): Insert;
```

Adds the `RETURNING` clause

#### `set()` { #datamapperqueryinsert-set }

```php
public function set(
    string $column,
    mixed $value = null
): Insert;
```

Sets a column = value condition


## DataMapper\Query\QueryFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/QueryFactory.zep){ .src-btn }

QueryFactory

<div class="api-tree" markdown>

- **`Phalcon\DataMapper\Query\QueryFactory`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryqueryfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $selectClass = &quot;&quot; )</code>
<span class="desc">QueryFactory constructor.</span>
</a>
<a class="api-item" href="#datamapperqueryqueryfactory-newbind">
<code class="vis vis-public">public</code>
<code class="ret">Bind</code>
<code class="sig">newBind()</code>
<span class="desc">Create a new Bind object</span>
</a>
<a class="api-item" href="#datamapperqueryqueryfactory-newdelete">
<code class="vis vis-public">public</code>
<code class="ret">Delete</code>
<code class="sig">newDelete( Connection $connection )</code>
<span class="desc">Create a new Delete object</span>
</a>
<a class="api-item" href="#datamapperqueryqueryfactory-newinsert">
<code class="vis vis-public">public</code>
<code class="ret">Insert</code>
<code class="sig">newInsert( Connection $connection )</code>
<span class="desc">Create a new Insert object</span>
</a>
<a class="api-item" href="#datamapperqueryqueryfactory-newselect">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">newSelect( Connection $connection )</code>
<span class="desc">Create a new Select object</span>
</a>
<a class="api-item" href="#datamapperqueryqueryfactory-newupdate">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig">newUpdate( Connection $connection )</code>
<span class="desc">Create a new Update object</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$selectClass = ""` `string`

</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #datamapperqueryqueryfactory-__construct }

```php
public function __construct( string $selectClass = "" );
```

QueryFactory constructor.

#### `newBind()` { #datamapperqueryqueryfactory-newbind }

```php
public function newBind(): Bind;
```

Create a new Bind object

#### `newDelete()` { #datamapperqueryqueryfactory-newdelete }

```php
public function newDelete( Connection $connection ): Delete;
```

Create a new Delete object

#### `newInsert()` { #datamapperqueryqueryfactory-newinsert }

```php
public function newInsert( Connection $connection ): Insert;
```

Create a new Insert object

#### `newSelect()` { #datamapperqueryqueryfactory-newselect }

```php
public function newSelect( Connection $connection ): Select;
```

Create a new Select object

#### `newUpdate()` { #datamapperqueryqueryfactory-newupdate }

```php
public function newUpdate( Connection $connection ): Update;
```

Create a new Update object


## DataMapper\Query\Select

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Select.zep){ .src-btn }

Select Query

<div class="api-tree" markdown>

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
    - [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
        - **`Phalcon\DataMapper\Query\Select`**

</div>

__Uses__ `BadMethodCallException` · `Phalcon\DataMapper\Pdo\Exception\UnknownQueryMethod`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryselect-__call">
<code class="vis vis-public">public</code>
<code class="sig">__call(
    string $method,
    array $params
)</code>
<span class="desc">Proxied methods to the connection</span>
</a>
<a class="api-item" href="#datamapperqueryselect-andhaving">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">andHaving(
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Sets a `AND` for a `HAVING` condition</span>
</a>
<a class="api-item" href="#datamapperqueryselect-appendhaving">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">appendHaving(
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Concatenates to the most recent `HAVING` clause</span>
</a>
<a class="api-item" href="#datamapperqueryselect-appendjoin">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">appendJoin(
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Concatenates to the most recent `JOIN` clause</span>
</a>
<a class="api-item" href="#datamapperqueryselect-asalias">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">asAlias( string $asAlias )</code>
<span class="desc">The `AS` statement for the query - useful in sub-queries</span>
</a>
<a class="api-item" href="#datamapperqueryselect-columns">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">columns( array $columns )</code>
<span class="desc">The columns to select from. If a key is set in the array element, the</span>
</a>
<a class="api-item" href="#datamapperqueryselect-distinct">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">distinct( bool $enable = true )</code>
</a>
<a class="api-item" href="#datamapperqueryselect-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">forUpdate( bool $enable = true )</code>
<span class="desc">Enable the `FOR UPDATE` for the query</span>
</a>
<a class="api-item" href="#datamapperqueryselect-from">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">from( string $table )</code>
<span class="desc">Adds table(s) in the query</span>
</a>
<a class="api-item" href="#datamapperqueryselect-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getStatement()</code>
<span class="desc">Returns the compiled SQL statement</span>
</a>
<a class="api-item" href="#datamapperqueryselect-groupby">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">groupBy( mixed $groupBy )</code>
<span class="desc">Sets the `GROUP BY`</span>
</a>
<a class="api-item" href="#datamapperqueryselect-hascolumns">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasColumns()</code>
<span class="desc">Whether the query has columns or not</span>
</a>
<a class="api-item" href="#datamapperqueryselect-having">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">having(
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Sets a `HAVING` condition</span>
</a>
<a class="api-item" href="#datamapperqueryselect-join">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">join(
    string $join,
    string $table,
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Sets a &#039;JOIN&#039; condition</span>
</a>
<a class="api-item" href="#datamapperqueryselect-orhaving">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">orHaving(
    string $condition,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Sets a `OR` for a `HAVING` condition</span>
</a>
<a class="api-item" href="#datamapperqueryselect-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Resets the internal collections</span>
</a>
<a class="api-item" href="#datamapperqueryselect-subselect">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">subSelect()</code>
<span class="desc">Start a sub-select</span>
</a>
<a class="api-item" href="#datamapperqueryselect-union">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">union()</code>
<span class="desc">Start a `UNION`</span>
</a>
<a class="api-item" href="#datamapperqueryselect-unionall">
<code class="vis vis-public">public</code>
<code class="ret">Select</code>
<code class="sig">unionAll()</code>
<span class="desc">Start a `UNION ALL`</span>
</a>
<a class="api-item" href="#datamapperqueryselect-getcurrentstatement">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getCurrentStatement( string $suffix = &quot;&quot; )</code>
<span class="desc">Statement builder</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `JOIN_INNER = "INNER"` `string`

-   `JOIN_LEFT = "LEFT"` `string`

-   `JOIN_NATURAL = "NATURAL"` `string`

-   `JOIN_RIGHT = "RIGHT"` `string`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$asAlias = ""` `string`

-   `protected`{ .vis-protected } `$forUpdate = false` `bool`

</div>

### Methods

<div class="api-group">Public · 19</div>

#### `__call()` { #datamapperqueryselect-__call }

```php
public function __call(
    string $method,
    array $params
);
```

Proxied methods to the connection

#### `andHaving()` { #datamapperqueryselect-andhaving }

```php
public function andHaving(
    string $condition,
    mixed $value = null,
    int $type = -1
): Select;
```

Sets a `AND` for a `HAVING` condition

#### `appendHaving()` { #datamapperqueryselect-appendhaving }

```php
public function appendHaving(
    string $condition,
    mixed $value = null,
    int $type = -1
): Select;
```

Concatenates to the most recent `HAVING` clause

#### `appendJoin()` { #datamapperqueryselect-appendjoin }

```php
public function appendJoin(
    string $condition,
    mixed $value = null,
    int $type = -1
): Select;
```

Concatenates to the most recent `JOIN` clause

#### `asAlias()` { #datamapperqueryselect-asalias }

```php
public function asAlias( string $asAlias ): Select;
```

The `AS` statement for the query - useful in sub-queries

#### `columns()` { #datamapperqueryselect-columns }

```php
public function columns( array $columns ): Select;
```

The columns to select from. If a key is set in the array element, the
key will be used as the alias

#### `distinct()` { #datamapperqueryselect-distinct }

```php
public function distinct( bool $enable = true ): Select;
```

#### `forUpdate()` { #datamapperqueryselect-forupdate }

```php
public function forUpdate( bool $enable = true ): Select;
```

Enable the `FOR UPDATE` for the query

#### `from()` { #datamapperqueryselect-from }

```php
public function from( string $table ): Select;
```

Adds table(s) in the query

#### `getStatement()` { #datamapperqueryselect-getstatement }

```php
public function getStatement(): string;
```

Returns the compiled SQL statement

#### `groupBy()` { #datamapperqueryselect-groupby }

```php
public function groupBy( mixed $groupBy ): Select;
```

Sets the `GROUP BY`

#### `hasColumns()` { #datamapperqueryselect-hascolumns }

```php
public function hasColumns(): bool;
```

Whether the query has columns or not

#### `having()` { #datamapperqueryselect-having }

```php
public function having(
    string $condition,
    mixed $value = null,
    int $type = -1
): Select;
```

Sets a `HAVING` condition

#### `join()` { #datamapperqueryselect-join }

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

#### `orHaving()` { #datamapperqueryselect-orhaving }

```php
public function orHaving(
    string $condition,
    mixed $value = null,
    int $type = -1
): Select;
```

Sets a `OR` for a `HAVING` condition

#### `reset()` { #datamapperqueryselect-reset }

```php
public function reset(): void;
```

Resets the internal collections

#### `subSelect()` { #datamapperqueryselect-subselect }

```php
public function subSelect(): Select;
```

Start a sub-select

#### `union()` { #datamapperqueryselect-union }

```php
public function union(): Select;
```

Start a `UNION`

#### `unionAll()` { #datamapperqueryselect-unionall }

```php
public function unionAll(): Select;
```

Start a `UNION ALL`

<div class="api-group">Protected · 1</div>

#### `getCurrentStatement()` { #datamapperqueryselect-getcurrentstatement }

```php
protected function getCurrentStatement( string $suffix = "" ): string;
```

Statement builder


## DataMapper\Query\Update

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Update.zep){ .src-btn }

Update Query

<div class="api-tree" markdown>

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
    - [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
        - **`Phalcon\DataMapper\Query\Update`**

</div>

__Uses__ `Phalcon\DataMapper\Pdo\Connection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#datamapperqueryupdate-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    Connection $connection,
    Bind $bind
)</code>
<span class="desc">Update constructor.</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-column">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig">column(
    string $column,
    mixed $value = null,
    int $type = -1
)</code>
<span class="desc">Sets a column for the `UPDATE` query</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-columns">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig">columns( array $columns )</code>
<span class="desc">Mass sets columns and values for the `UPDATE`</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-from">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig">from( string $table )</code>
<span class="desc">Adds table(s) in the query</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getStatement()</code>
</a>
<a class="api-item" href="#datamapperqueryupdate-hascolumns">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasColumns()</code>
<span class="desc">Whether the query has columns or not</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Resets the internal store</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-returning">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig">returning( array $columns )</code>
<span class="desc">Adds the `RETURNING` clause</span>
</a>
<a class="api-item" href="#datamapperqueryupdate-set">
<code class="vis vis-public">public</code>
<code class="ret">Update</code>
<code class="sig">set(
    string $column,
    mixed $value = null
)</code>
<span class="desc">Sets a column = value condition</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `__construct()` { #datamapperqueryupdate-__construct }

```php
public function __construct(
    Connection $connection,
    Bind $bind
);
```

Update constructor.

#### `column()` { #datamapperqueryupdate-column }

```php
public function column(
    string $column,
    mixed $value = null,
    int $type = -1
): Update;
```

Sets a column for the `UPDATE` query

#### `columns()` { #datamapperqueryupdate-columns }

```php
public function columns( array $columns ): Update;
```

Mass sets columns and values for the `UPDATE`

#### `from()` { #datamapperqueryupdate-from }

```php
public function from( string $table ): Update;
```

Adds table(s) in the query

#### `getStatement()` { #datamapperqueryupdate-getstatement }

```php
public function getStatement(): string;
```

#### `hasColumns()` { #datamapperqueryupdate-hascolumns }

```php
public function hasColumns(): bool;
```

Whether the query has columns or not

#### `reset()` { #datamapperqueryupdate-reset }

```php
public function reset(): void;
```

Resets the internal store

#### `returning()` { #datamapperqueryupdate-returning }

```php
public function returning( array $columns ): Update;
```

Adds the `RETURNING` clause

#### `set()` { #datamapperqueryupdate-set }

```php
public function set(
    string $column,
    mixed $value = null
): Update;
```

Sets a column = value condition
