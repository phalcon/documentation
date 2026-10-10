---
title: "Phalcon Datamapper"
version: "5.21"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Datamapper

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## DataMapper\Pdo\Connection

Class

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods

- [`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`](#datamapperpdoconnectionabstractconnection)
  - **`Phalcon\DataMapper\Pdo\Connection`**

`Phalcon\DataMapper\Pdo\Connection\AbstractConnection` · `Phalcon\DataMapper\Pdo\Exception\DriverNotSupported` · `Phalcon\DataMapper\Pdo\Profiler\Profiler` · `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

### Method Summary

- `public __construct(string $dsn, string|null $username = null, string|null $password = null, array $options = [], array $queries = [], ProfilerInterface|null $profiler = null)` — Constructor.

- `public __debugInfo(): array` — The purpose of this method is to hide sensitive data from stack traces.

- `public connect(): void` — Connects to the database.

- `public disconnect(): void` — Disconnects from the database.

### Properties

- `protected array $arguments = []`

### Methods

<h4 id="datamapperpdoconnection-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $dsn,
    string|null $username = null,
    string|null $password = null,
    array $options = [],
    array $queries = [],
    ProfilerInterface|null $profiler = null
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

Class

Manages Connection instances for default, read, and write connections.

The locator gives its events manager to each connection that it returns,
so connections that are built on demand also fire the DataMapper events.

- **`Phalcon\DataMapper\Pdo\ConnectionLocator`** - implements [`Phalcon\DataMapper\Pdo\ConnectionLocatorInterface`](#datamapperpdoconnectionlocatorinterface), [`Phalcon\Contracts\Events\EventsAware`](/5.21/api/phalcon_contracts/#contractseventseventsaware)

`Phalcon\Contracts\Events\EventsAware` · `Phalcon\DataMapper\Pdo\Connection\ConnectionInterface` · `Phalcon\DataMapper\Pdo\Exception\ConnectionNotFound` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait`

### Method Summary

- `public __construct(ConnectionInterface $master, array $read = [], array $write = [])` — Constructor.

- `public getMaster(): ConnectionInterface` — Returns the default connection object.

- `public getRead(string $name = ""): ConnectionInterface` — Returns a read connection by name; if no name is given, picks a

- `public getWrite(string $name = ""): ConnectionInterface` — Returns a write connection by name; if no name is given, picks a

- `public setMaster(ConnectionInterface $callableObject): static` — Sets the default connection factory.

- `public setRead(string $name, callable $callableObject): static` — Sets a read connection factory by name.

- `public setWrite(string $name, callable $callableObject): static` — Sets a write connection factory by name.

- `protected getConnection(string $type, string $name = ""): ConnectionInterface` — Returns a connection by name.

### Properties

- `protected ConnectionInterface $master` — A default Connection connection factory/instance.

- `protected array $read = []` — A registry of Connection "read" factories/instances.

- `protected array $write = []` — A registry of Connection "write" factories/instances.

### Methods

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

<h4 id="datamapperpdoconnectionlocator-getconnection"><code>getConnection()</code></h4>

```php
protected function getConnection(
    string $type,
    string $name = ""
): ConnectionInterface;
```

Returns a connection by name.


## DataMapper\Pdo\ConnectionLocatorInterface

Interface

Locates PDO connections for default, read, and write databases.

- **`Phalcon\DataMapper\Pdo\ConnectionLocatorInterface`**

`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`

### Method Summary

- `public getMaster(): ConnectionInterface` — Returns the default connection object.

- `public getRead(string $name = ""): ConnectionInterface` — Returns a read connection by name; if no name is given, picks a

- `public getWrite(string $name = ""): ConnectionInterface` — Returns a write connection by name; if no name is given, picks a

- `public setMaster(ConnectionInterface $callableObject): ConnectionLocatorInterface` — Sets the default connection registry entry.

- `public setRead(string $name, callable $callableObject): ConnectionLocatorInterface` — Sets a read connection registry entry by name.

- `public setWrite(string $name, callable $callableObject): ConnectionLocatorInterface` — Sets a write connection registry entry by name.

### Methods

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

Abstract

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods

Connections fire the lifecycle events in Phalcon\DataMapper\Pdo\Events when
an events manager is set. ConnectionInterface does not declare the events
manager methods; the EventsAware contract is applied here so that existing
implementations of the interface keep working.

- **`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`** - implements [`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`](#datamapperpdoconnectionconnectioninterface), [`Phalcon\Contracts\Events\EventsAware`](/5.21/api/phalcon_contracts/#contractseventseventsaware)
  - [`Phalcon\DataMapper\Pdo\Connection`](#datamapperpdoconnection)
  - [`Phalcon\DataMapper\Pdo\Connection\Decorated`](#datamapperpdoconnectiondecorated)

`BadMethodCallException` · `Phalcon\Contracts\Events\EventsAware` · `Phalcon\DataMapper\Pdo\Events` · `Phalcon\DataMapper\Pdo\Exception\OperationCancelled` · `Phalcon\DataMapper\Pdo\Exception\UnknownDriverMethod` · `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait`

### Method Summary

- `public __call(mixed $name, array $arguments)` — Proxies to PDO methods created for specific drivers; in particular,

- `public beginTransaction(): bool` — Begins a transaction. If the profiler is enabled, the operation will

- `public commit(): bool` — Commits the existing transaction. If the profiler is enabled, the

- `public connect(): void` — Connects to the database.

- `public disconnect(): void` — Disconnects from the database.

- `public ensureConnection(): void` — Ensures the connection is alive, reconnecting in place if it is not.

- `public errorCode(): string|null` — Gets the most recent error code.

- `public errorInfo(): array` — Gets the most recent error info.

- `public exec(string $statement): int` — Executes an SQL statement and returns the number of affected rows. If

- `public fetchAffected(string $statement, array $values = []): int` — Performs a statement and returns the number of affected rows.

- `public fetchAll(string $statement, array $values = []): array` — Fetches a sequential array of rows from the database; the rows are

- `public fetchAssoc(string $statement, array $values = []): array` — Fetches an associative array of rows from the database; the rows are

- `public fetchColumn(string $statement, array $values = [], int $column = 0): array` — Fetches a column of rows as a sequential array (default first one).

- `public fetchGroup(string $statement, array $values = [], int $flags = \PDO::FETCH_ASSOC): array` — Fetches multiple from the database as an associative array. The first

- `public fetchObject(string $statement, array $values = [], string $className = "stdClass", array $arguments = []): object` — Fetches one row from the database as an object where the column values

- `public fetchObjects(string $statement, array $values = [], string $className = "stdClass", array $arguments = []): array` — Fetches a sequential array of rows from the database; the rows are

- `public fetchOne(string $statement, array $values = []): array` — Fetches one row from the database as an associative array.

- `public fetchPairs(string $statement, array $values = []): array` — Fetches an associative array of rows as key-value pairs (first column is

- `public fetchValue(string $statement, array $values = [])` — Fetches the very first value (i.e., first column of the first row).

- `public getAdapter(): \PDO` — Return the inner PDO (if any)

- `public getAttribute(int $attribute): mixed` — Retrieve a database connection attribute

- `public getAutoReconnect(): bool` — Returns whether transparent auto-reconnect is enabled.

- `public getAvailableDrivers(): array` — Return an array of available PDO drivers (empty array if none available)

- `public getDriverName(): string` — Return the driver name

- `public getProfiler(): ProfilerInterface` — Returns the Profiler instance.

- `public getQuoteNames(string $driver = ""): array` — Gets the quote parameters based on the driver

- `public inTransaction(): bool` — Is a transaction currently active? If the profiler is enabled, the

- `public isConnected(): bool` — Is the PDO connection active?

- `public lastInsertId(string|null $name = null): string` — Returns the last inserted autoincrement sequence value. If the profiler

- `public perform(string $statement, array $values = []): \PDOStatement` — Performs a query with bound values and returns the resulting

- `public ping(): bool` — Checks whether the underlying connection is still alive by issuing a

- `public prepare(string $statement, array $options = []): \PDOStatement|bool` — Prepares an SQL statement for execution.

- `public query(string $statement): \PDOStatement|bool` — Queries the database and returns a PDOStatement. If the profiler is

- `public quote(mixed $value, int $type = \PDO::PARAM_STR): string` — Quotes a value for use in an SQL statement. This differs from

- `public rollBack(): bool` — Rolls back the current transaction, and restores autocommit mode. If the

- `public setAttribute(int $attribute, mixed $value): bool` — Set a database connection attribute

- `public setAutoReconnect(bool $autoReconnect): static` — Enables or disables transparent auto-reconnect on a lost connection.

- `public setProfiler(ProfilerInterface $profiler): static` — Sets the Profiler instance.

- `protected fetchData(string $method, array $arguments, string $statement, array $values = []): array` — Helper method to get data from PDO based on the method passed

- `protected fireBefore(string $eventName, mixed $data = null): void` — Fires a cancellable "before" event. A listener cancels by stopping the

- `protected isConnectionError(\Throwable $exception): bool` — Recognizes a lost ("gone away") connection. Detection is driver-agnostic:

- `protected performBind(\PDOStatement $statement, mixed $name, mixed $arguments): void` — Bind a value using the proper PDO::PARAM\_\* type.

### Properties

- `protected bool $autoReconnect = false` — Whether to transparently reconnect and retry once when a statement fails
  because the connection was lost. Opt-in; off by default.

- `protected \PDO $pdo`

- `protected ProfilerInterface $profiler`

- `protected int $transactionLevel = 0` — Current transaction nesting level. Tracked locally rather than via
  PDO::inTransaction() because some drivers report a broken connection as
  being "in transaction".

### Methods

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

<h4 id="datamapperpdoconnectionabstractconnection-ensureconnection"><code>ensureConnection()</code></h4>

```php
public function ensureConnection(): void;
```

Ensures the connection is alive, reconnecting in place if it is not.
disconnect() is required first because connect() is idempotent and will
not rebuild a dead-but-present handle.

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

<h4 id="datamapperpdoconnectionabstractconnection-getautoreconnect"><code>getAutoReconnect()</code></h4>

```php
public function getAutoReconnect(): bool;
```

Returns whether transparent auto-reconnect is enabled.

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
public function lastInsertId( string|null $name = null ): string;
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

<h4 id="datamapperpdoconnectionabstractconnection-ping"><code>ping()</code></h4>

```php
public function ping(): bool;
```

Checks whether the underlying connection is still alive by issuing a
trivial query. Returns false if there is no handle or the probe fails.

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

<h4 id="datamapperpdoconnectionabstractconnection-setautoreconnect"><code>setAutoReconnect()</code></h4>

```php
public function setAutoReconnect( bool $autoReconnect ): static;
```

Enables or disables transparent auto-reconnect on a lost connection.

<h4 id="datamapperpdoconnectionabstractconnection-setprofiler"><code>setProfiler()</code></h4>

```php
public function setProfiler( ProfilerInterface $profiler ): static;
```

Sets the Profiler instance.

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

<h4 id="datamapperpdoconnectionabstractconnection-firebefore"><code>fireBefore()</code></h4>

```php
protected function fireBefore(
    string $eventName,
    mixed $data = null
): void;
```

Fires a cancellable "before" event. A listener cancels by stopping the
event and returning false; see Phalcon\DataMapper\Pdo\Events for the
required idiom. The operation does not run when it is cancelled.

<h4 id="datamapperpdoconnectionabstractconnection-isconnectionerror"><code>isConnectionError()</code></h4>

```php
protected function isConnectionError( \Throwable $exception ): bool;
```

Recognizes a lost ("gone away") connection. Detection is driver-agnostic:
the driver name is not queried because the underlying connection may be
dead by this point. The MySQL error codes and PostgreSQL SQLSTATEs do not
overlap, so all known signatures are checked unconditionally.

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

Interface

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods

- [`Phalcon\DataMapper\Pdo\Connection\PdoInterface`](#datamapperpdoconnectionpdointerface)
  - **`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`**

`Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

### Method Summary

- `public connect(): void` — Connects to the database.

- `public disconnect(): void` — Disconnects from the database.

- `public fetchAffected(string $statement, array $values = []): int` — Performs a statement and returns the number of affected rows.

- `public fetchAll(string $statement, array $values = []): array` — Fetches a sequential array of rows from the database; the rows are

- `public fetchAssoc(string $statement, array $values = []): array` — Fetches an associative array of rows from the database; the rows are

- `public fetchColumn(string $statement, array $values = [], int $column = 0): array` — Fetches a column of rows as a sequential array (default first one).

- `public fetchGroup(string $statement, array $values = [], int $flags = \PDO::FETCH_ASSOC): array` — Fetches multiple from the database as an associative array. The first

- `public fetchObject(string $statement, array $values = [], string $className = "stdClass", array $arguments = []): object` — Fetches one row from the database as an object where the column values

- `public fetchObjects(string $statement, array $values = [], string $className = "stdClass", array $arguments = []): array` — Fetches a sequential array of rows from the database; the rows are

- `public fetchOne(string $statement, array $values = []): array` — Fetches one row from the database as an associative array.

- `public fetchPairs(string $statement, array $values = []): array` — Fetches an associative array of rows as key-value pairs (first column is

- `public fetchValue(string $statement, array $values = []): mixed` — Fetches the very first value (i.e., first column of the first row).

- `public getAdapter(): \PDO` — Return the inner PDO (if any)

- `public getProfiler(): ProfilerInterface` — Returns the Profiler instance.

- `public isConnected(): bool` — Is the PDO connection active?

- `public perform(string $statement, array $values = []): \PDOStatement` — Performs a query with bound values and returns the resulting

- `public setProfiler(ProfilerInterface $profiler)` — Sets the Profiler instance.

### Methods

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

Class

Decorates an existing PDO instance with the extended methods.

- [`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`](#datamapperpdoconnectionabstractconnection)
  - **`Phalcon\DataMapper\Pdo\Connection\Decorated`**

`Phalcon\DataMapper\Pdo\Exception\CannotDisconnect` · `Phalcon\DataMapper\Pdo\Profiler\Profiler` · `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

### Method Summary

- `public __construct(\PDO $pdo, ProfilerInterface|null $profiler = null)` — Constructor.

- `public connect(): void` — Connects to the database.

- `public disconnect(): void` — Disconnects from the database; disallowed with decorated PDO connections.

### Methods

<h4 id="datamapperpdoconnectiondecorated-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    \PDO $pdo,
    ProfilerInterface|null $profiler = null
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

Interface

An interface to the native PDO object.

- **`Phalcon\DataMapper\Pdo\Connection\PdoInterface`**
  - [`Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`](#datamapperpdoconnectionconnectioninterface)

### Method Summary

- `public beginTransaction(): bool` — Begins a transaction. If the profiler is enabled, the operation will

- `public commit(): bool` — Commits the existing transaction. If the profiler is enabled, the

- `public errorCode(): null|string` — Gets the most recent error code.

- `public errorInfo(): array` — Gets the most recent error info.

- `public exec(string $statement): int` — Executes an SQL statement and returns the number of affected rows. If

- `public getAttribute(int $attribute): mixed` — Retrieve a database connection attribute

- `public getAvailableDrivers(): array` — Return an array of available PDO drivers (empty array if none available)

- `public inTransaction(): bool` — Is a transaction currently active? If the profiler is enabled, the

- `public lastInsertId(string|null $name = null): string` — Returns the last inserted autoincrement sequence value. If the profiler

- `public prepare(string $statement, array $options = []): \PDOStatement|bool` — Prepares an SQL statement for execution.

- `public query(string $statement): \PDOStatement|bool` — Queries the database and returns a PDOStatement. If the profiler is

- `public quote(mixed $value, int $type = \PDO::PARAM_STR): string` — Quotes a value for use in an SQL statement. This differs from

- `public rollBack(): bool` — Rolls back the current transaction, and restores autocommit mode. If the

- `public setAttribute(int $attribute, mixed $value): bool` — Set a database connection attribute

### Methods

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
public function lastInsertId( string|null $name = null ): string;
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


## DataMapper\Pdo\Events

Class

Lifecycle event names fired by the DataMapper connections through
Phalcon\Events\Manager. One public constant per event.

The `before*` events are cancellable. To cancel an operation, a listener
must stop the event and return false:

$manager->attach(
Events::BEFORE\_PERFORM,
function ($event) \{
$event->stop();

return false;
}
);

Both parts are necessary. `stop()` alone abandons the queue but returns
the listener's own value, which the connection cannot tell apart from
"no listeners". `return false` alone is replaced by any later non-null
return while the manager's stopOnFalse mode is off, which is the default.
A cancelled operation throws
Phalcon\DataMapper\Pdo\Exception\OperationCancelled.

The `after*` events are not cancellable. The operation is complete when
they fire.

There are two groups of events. The operation events - perform, exec,
query and the three transaction events - belong to one operation each.
`prepare()` has no operation events because `perform()` calls it, and
nested events for one logical operation give listeners two counts of the
same work. The connection events - connect, disconnect and connectionLost
- report a change of the connection state. They fire each time the state
changes, whichever method causes it. An automatic reconnect from any
method therefore reports the lost connection and the new one.

- **`Phalcon\DataMapper\Pdo\Events`**

### Constants

- `const string AFTER_BEGIN_TRANSACTION = "dm:afterBeginTransaction"`

- `const string AFTER_COMMIT = "dm:afterCommit"`

- `const string AFTER_CONNECT = "dm:afterConnect"`

- `const string AFTER_DISCONNECT = "dm:afterDisconnect"`

- `const string AFTER_EXEC = "dm:afterExec"`

- `const string AFTER_PERFORM = "dm:afterPerform"`

- `const string AFTER_QUERY = "dm:afterQuery"`

- `const string AFTER_ROLLBACK = "dm:afterRollBack"`

- `const string BEFORE_BEGIN_TRANSACTION = "dm:beforeBeginTransaction"`

- `const string BEFORE_COMMIT = "dm:beforeCommit"`

- `const string BEFORE_CONNECT = "dm:beforeConnect"`

- `const string BEFORE_DISCONNECT = "dm:beforeDisconnect"`

- `const string BEFORE_EXEC = "dm:beforeExec"`

- `const string BEFORE_PERFORM = "dm:beforePerform"`

- `const string BEFORE_QUERY = "dm:beforeQuery"`

- `const string BEFORE_ROLLBACK = "dm:beforeRollBack"`

- `const string CONNECTION_LOST = "dm:connectionLost"`


## DataMapper\Pdo\Exception\CannotDisconnect

Class

ExtendedPdo could not disconnect; e.g., because its PDO connection was
created externally and then injected.

- `\Exception`
  - [`Phalcon\DataMapper\Pdo\Exception\Exception`](#datamapperpdoexceptionexception)
    - **`Phalcon\DataMapper\Pdo\Exception\CannotDisconnect`**


## DataMapper\Pdo\Exception\ConnectionNotFound

Class

Locator could not find a named connection.

- `\Exception`
  - [`Phalcon\DataMapper\Pdo\Exception\Exception`](#datamapperpdoexceptionexception)
    - **`Phalcon\DataMapper\Pdo\Exception\ConnectionNotFound`**


## DataMapper\Pdo\Exception\DriverNotSupported

Class

- `\InvalidArgumentException`
  - **`Phalcon\DataMapper\Pdo\Exception\DriverNotSupported`**

`InvalidArgumentException`

### Method Summary

- `public __construct(string $driver)`

### Methods

<h4 id="datamapperpdoexceptiondrivernotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $driver );
```


## DataMapper\Pdo\Exception\Exception

Class

Base Exception class

- `\Exception`
  - **`Phalcon\DataMapper\Pdo\Exception\Exception`**
    - [`Phalcon\DataMapper\Pdo\Exception\CannotDisconnect`](#datamapperpdoexceptioncannotdisconnect)
    - [`Phalcon\DataMapper\Pdo\Exception\ConnectionNotFound`](#datamapperpdoexceptionconnectionnotfound)
    - [`Phalcon\DataMapper\Pdo\Exception\OperationCancelled`](#datamapperpdoexceptionoperationcancelled)


## DataMapper\Pdo\Exception\OperationCancelled

Class

A listener cancelled a cancellable "before" event, so the operation did
not run. This is a deliberate cancellation, not a database failure. Catch
this class to tell the two apart.

- `\Exception`
  - [`Phalcon\DataMapper\Pdo\Exception\Exception`](#datamapperpdoexceptionexception)
    - **`Phalcon\DataMapper\Pdo\Exception\OperationCancelled`**

### Method Summary

- `public __construct(string $eventName)`

### Methods

<h4 id="datamapperpdoexceptionoperationcancelled-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $eventName );
```


## DataMapper\Pdo\Exception\UnknownDriverMethod

Class

- `\BadMethodCallException`
  - **`Phalcon\DataMapper\Pdo\Exception\UnknownDriverMethod`**

`BadMethodCallException`

### Method Summary

- `public __construct(string $message)`

### Methods

<h4 id="datamapperpdoexceptionunknowndrivermethod-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $message );
```


## DataMapper\Pdo\Exception\UnknownQueryMethod

Class

- `\BadMethodCallException`
  - **`Phalcon\DataMapper\Pdo\Exception\UnknownQueryMethod`**

`BadMethodCallException`

### Method Summary

- `public __construct(string $method)`

### Methods

<h4 id="datamapperpdoexceptionunknownquerymethod-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $method );
```


## DataMapper\Pdo\Profiler\MemoryLogger

Class

A memory-based logger.

- **`Phalcon\DataMapper\Pdo\Profiler\MemoryLogger`** - implements [`Phalcon\Logger\LoggerInterface`](/5.21/api/phalcon_logger/#loggerloggerinterface)

`Phalcon\Logger\Adapter\AdapterInterface` · `Phalcon\Logger\Adapter\Noop` · `Phalcon\Logger\Enum` · `Phalcon\Logger\LoggerInterface`

### Method Summary

- `public alert(string $message, array $context = []): void`

- `public critical(string $message, array $context = []): void`

- `public debug(string $message, array $context = []): void`

- `public emergency(string $message, array $context = []): void`

- `public error(string $message, array $context = []): void`

- `public getAdapter(string $name): AdapterInterface` — Returns an adapter from the stack

- `public getAdapters(): array` — Returns the adapter stack array

- `public getLogLevel(): int` — Returns the log level

- `public getMessages(): array` — Returns the logged messages.

- `public getName(): string` — Returns the name of the logger

- `public info(string $message, array $context = []): void`

- `public log(mixed $level, string $message, array $context = []): void` — Logs a message.

- `public notice(string $message, array $context = []): void`

- `public trace(string $message, array $context = []): void`

- `public warning(string $message, array $context = []): void`

### Properties

- `protected array $messages = []`

### Methods

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

Class

Sends query profiles to a logger.

- **`Phalcon\DataMapper\Pdo\Profiler\Profiler`** - implements [`Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`](#datamapperpdoprofilerprofilerinterface)

`Phalcon\DataMapper\Pdo\Exception\Exception` · `Phalcon\Logger\Enum` · `Phalcon\Logger\LoggerInterface` · `Phalcon\Support\Helper\Json\Encode`

### Method Summary

- `public __construct(LoggerInterface|null $logger = null)` — Constructor.

- `public finish(string|null $statement = null, array $values = []): void` — Finishes and logs a profile entry.

- `public getLogFormat(): string` — Returns the log message format string, with placeholders.

- `public getLogLevel(): string` — Returns the level at which to log profile messages.

- `public getLogger(): LoggerInterface` — Returns the underlying logger instance.

- `public isActive(): bool` — Returns true if logging is active.

- `public setActive(bool $active): ProfilerInterface` — Enable or disable profiler logging.

- `public setLogFormat(string $logFormat): ProfilerInterface` — Sets the log message format string, with placeholders.

- `public setLogLevel(string $logLevel): ProfilerInterface` — Level at which to log profile messages.

- `public start(string $method): void` — Starts a profile entry.

### Properties

- `protected bool $active = false`

- `protected array $context = []`

- `protected string $logFormat = ""`

- `protected int|string $logLevel = 0`

- `protected LoggerInterface $logger`

### Methods

<h4 id="datamapperpdoprofilerprofiler-__construct"><code>__construct()</code></h4>

```php
public function __construct( LoggerInterface|null $logger = null );
```

Constructor.

<h4 id="datamapperpdoprofilerprofiler-finish"><code>finish()</code></h4>

```php
public function finish(
    string|null $statement = null,
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

Interface

Interface to send query profiles to a logger.

- **`Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`**

`Phalcon\Logger\LoggerInterface`

### Method Summary

- `public finish(string|null $statement = null, array $values = []): void` — Finishes and logs a profile entry.

- `public getLogFormat(): string` — Returns the log message format string, with placeholders.

- `public getLogLevel(): string` — Returns the level at which to log profile messages.

- `public getLogger(): LoggerInterface` — Returns the underlying logger instance.

- `public isActive(): bool` — Returns true if logging is active.

- `public setActive(bool $active): ProfilerInterface` — Enable or disable profiler logging.

- `public setLogFormat(string $logFormat): ProfilerInterface` — Sets the log message format string, with placeholders.

- `public setLogLevel(string $logLevel): ProfilerInterface` — Level at which to log profile messages.

- `public start(string $method): void` — Starts a profile entry.

### Methods

<h4 id="datamapperpdoprofilerprofilerinterface-finish"><code>finish()</code></h4>

```php
public function finish(
    string|null $statement = null,
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

Abstract

Class AbstractConditions

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
  - **`Phalcon\DataMapper\Query\AbstractConditions`**
    - [`Phalcon\DataMapper\Query\Delete`](#datamapperquerydelete)
    - [`Phalcon\DataMapper\Query\Select`](#datamapperqueryselect)
    - [`Phalcon\DataMapper\Query\Update`](#datamapperqueryupdate)

### Method Summary

- `public andWhere(string $condition, mixed $value = null, int $type = -1): AbstractConditions` — Sets a `AND` for a `WHERE` condition

- `public appendWhere(string $condition, mixed $value = null, int $type = -1): AbstractConditions` — Concatenates to the most recent `WHERE` clause

- `public limit(int $limit): AbstractConditions` — Sets the `LIMIT` clause

- `public offset(int $offset): AbstractConditions` — Sets the `OFFSET` clause

- `public orWhere(string $condition, mixed $value = null, int $type = -1): AbstractConditions` — Sets a `OR` for a `WHERE` condition

- `public orderBy(mixed $orderBy): AbstractConditions` — Sets the `ORDER BY`

- `public where(string $condition, mixed $value = null, int $type = -1): AbstractConditions` — Sets a `WHERE` condition

- `public whereEquals(array $columnsValues): AbstractConditions`

- `protected addCondition(string $store, string $andor, string $condition, mixed $value = null, int $type = -1): void` — Appends a conditional

- `protected appendCondition(string $store, string $condition, mixed $value = null, int $type = -1): void` — Concatenates a conditional

- `protected buildBy(string $type): string` — Builds a `BY` list

- `protected buildCondition(string $type): string` — Builds the conditional string

- `protected buildLimit(): string` — Builds the `LIMIT` clause

- `protected buildLimitCommon(): string` — Builds the `LIMIT` clause for all drivers

- `protected buildLimitEarly(): string` — Builds the early `LIMIT` clause - MS SQLServer

- `protected buildLimitSqlsrv(): string` — Builds the `LIMIT` clause for MSSQLServer

- `protected processValue(string $store, mixed $data): void` — Processes a value (array or string) and merges it with the store

### Methods

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

Abstract

Class AbstractQuery

- **`Phalcon\DataMapper\Query\AbstractQuery`**
  - [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
  - [`Phalcon\DataMapper\Query\Insert`](#datamapperqueryinsert)

`Phalcon\DataMapper\Pdo\Connection`

### Method Summary

- `public __construct(Connection $connection, Bind $bind)` — AbstractQuery constructor.

- `public bindInline(mixed $value, int $type = -1): string` — Binds a value inline

- `public bindValue(string $key, mixed $value, int $type = -1): AbstractQuery` — Binds a value - auto-detects the type if necessary

- `public bindValues(array $values): AbstractQuery` — Binds an array of values

- `public getBindValues(): array` — Returns all the bound values

- `public getStatement(): string` — Return the generated statement

- `public perform()` — Performs a statement in the connection

- `public quoteIdentifier(string $name, int $type = \PDO::PARAM_STR): string` — Quotes the identifier

- `public reset(): void` — Resets the internal array

- `public resetColumns(): void` — Resets the columns

- `public resetFlags(): void` — Resets the flags

- `public resetFrom(): void` — Resets the from

- `public resetGroupBy(): void` — Resets the group by

- `public resetHaving(): void` — Resets the having

- `public resetLimit(): void` — Resets the limit and offset

- `public resetOrderBy(): void` — Resets the order by

- `public resetWhere(): void` — Resets the where

- `public setFlag(string $flag, bool $enable = true): void` — Sets a flag for the query such as "DISTINCT"

- `protected buildFlags()` — Builds the flags statement(s)

- `protected buildReturning(): string` — Builds the `RETURNING` clause

- `protected indent(array $collection, string $glue = ""): string` — Indents a collection

### Properties

- `protected Bind $bind`

- `protected Connection $connection`

- `protected array $store = []`

### Methods

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

Class

Class Bind

- **`Phalcon\DataMapper\Query\Bind`**

### Method Summary

- `public bindInline(mixed $value, int $type = -1): string`

- `public remove(string $key): void` — Removes a value from the store

- `public setValue(string $key, mixed $value, int $type = -1): void` — Sets a value

- `public setValues(array $values, int $type = -1): void` — Sets values from an array

- `public toArray(): array` — Returns the internal collection

- `protected getType(mixed $value): int` — Auto detects the PDO type

- `protected inlineArray(array $data, int $type): string` — Processes an array - if passed as an `inline` parameter

### Properties

- `protected int $inlineCount = 0`

- `protected array $store = []`

### Methods

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

Class

Delete Query

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
  - [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
    - **`Phalcon\DataMapper\Query\Delete`**

`Phalcon\DataMapper\Pdo\Connection`

### Method Summary

- `public __construct(Connection $connection, Bind $bind)` — Delete constructor.

- `public from(string $table): Delete` — Adds table(s) in the query

- `public getStatement(): string`

- `public reset(): void` — Resets the internal store

- `public returning(array $columns): Delete` — Adds the `RETURNING` clause

### Methods

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

Class

Insert Query

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
  - **`Phalcon\DataMapper\Query\Insert`**

`Phalcon\DataMapper\Pdo\Connection`

### Method Summary

- `public __construct(Connection $connection, Bind $bind)` — Insert constructor.

- `public column(string $column, mixed $value = null, int $type = -1): Insert` — Sets a column for the `INSERT` query

- `public columns(array $columns): Insert` — Mass sets columns and values for the `INSERT`

- `public getLastInsertId(string|null $name = null): string` — Returns the id of the last inserted record

- `public getStatement(): string`

- `public into(string $table): Insert` — Adds table(s) in the query

- `public reset(): void` — Resets the internal store

- `public returning(array $columns): Insert` — Adds the `RETURNING` clause

- `public set(string $column, mixed $value = null): Insert` — Sets a column = value condition

### Methods

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
public function getLastInsertId( string|null $name = null ): string;
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

Class

QueryFactory

- **`Phalcon\DataMapper\Query\QueryFactory`**

`Phalcon\DataMapper\Pdo\Connection`

### Method Summary

- `public __construct(string $selectClass = "")` — QueryFactory constructor.

- `public newBind(): Bind` — Create a new Bind object

- `public newDelete(Connection $connection): Delete` — Create a new Delete object

- `public newInsert(Connection $connection): Insert` — Create a new Insert object

- `public newSelect(Connection $connection): Select` — Create a new Select object

- `public newUpdate(Connection $connection): Update` — Create a new Update object

### Properties

- `protected string $selectClass = ""`

### Methods

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

Class

Select Query

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
  - [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
    - **`Phalcon\DataMapper\Query\Select`**

`BadMethodCallException` · `Phalcon\DataMapper\Pdo\Exception\UnknownQueryMethod`

### Method Summary

- `public __call(string $method, array $params)` — Proxied methods to the connection

- `public andHaving(string $condition, mixed $value = null, int $type = -1): Select` — Sets a `AND` for a `HAVING` condition

- `public appendHaving(string $condition, mixed $value = null, int $type = -1): Select` — Concatenates to the most recent `HAVING` clause

- `public appendJoin(string $condition, mixed $value = null, int $type = -1): Select` — Concatenates to the most recent `JOIN` clause

- `public asAlias(string $asAlias): Select` — The `AS` statement for the query - useful in sub-queries

- `public columns(array $columns): Select` — The columns to select from. If a key is set in the array element, the

- `public distinct(bool $enable = true): Select`

- `public forUpdate(bool $enable = true): Select` — Enable the `FOR UPDATE` for the query

- `public from(string $table): Select` — Adds table(s) in the query

- `public getStatement(): string` — Returns the compiled SQL statement

- `public groupBy(mixed $groupBy): Select` — Sets the `GROUP BY`

- `public hasColumns(): bool` — Whether the query has columns or not

- `public having(string $condition, mixed $value = null, int $type = -1): Select` — Sets a `HAVING` condition

- `public join(string $join, string $table, string $condition, mixed $value = null, int $type = -1): Select` — Sets a 'JOIN' condition

- `public orHaving(string $condition, mixed $value = null, int $type = -1): Select` — Sets a `OR` for a `HAVING` condition

- `public reset(): void` — Resets the internal collections

- `public subSelect(): Select` — Start a sub-select

- `public union(): Select` — Start a `UNION`

- `public unionAll(): Select` — Start a `UNION ALL`

- `protected getCurrentStatement(string $suffix = ""): string` — Statement builder

### Constants

- `const string JOIN_INNER = "INNER"`

- `const string JOIN_LEFT = "LEFT"`

- `const string JOIN_NATURAL = "NATURAL"`

- `const string JOIN_RIGHT = "RIGHT"`

### Properties

- `protected string $asAlias = ""`

- `protected bool $forUpdate = false`

### Methods

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

<h4 id="datamapperqueryselect-getcurrentstatement"><code>getCurrentStatement()</code></h4>

```php
protected function getCurrentStatement( string $suffix = "" ): string;
```

Statement builder


## DataMapper\Query\Update

Class

Update Query

- [`Phalcon\DataMapper\Query\AbstractQuery`](#datamapperqueryabstractquery)
  - [`Phalcon\DataMapper\Query\AbstractConditions`](#datamapperqueryabstractconditions)
    - **`Phalcon\DataMapper\Query\Update`**

`Phalcon\DataMapper\Pdo\Connection`

### Method Summary

- `public __construct(Connection $connection, Bind $bind)` — Update constructor.

- `public column(string $column, mixed $value = null, int $type = -1): Update` — Sets a column for the `UPDATE` query

- `public columns(array $columns): Update` — Mass sets columns and values for the `UPDATE`

- `public from(string $table): Update` — Adds table(s) in the query

- `public getStatement(): string`

- `public hasColumns(): bool` — Whether the query has columns or not

- `public reset(): void` — Resets the internal store

- `public returning(array $columns): Update` — Adds the `RETURNING` clause

- `public set(string $column, mixed $value = null): Update` — Sets a column = value condition

### Methods

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

Source: https://docs.phalcon.io/5.21/api/phalcon_datamapper/index.mdx
