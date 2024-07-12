---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## DataMapper\Pdo\Connection 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo`

-   __Uses__
    
    - `InvalidArgumentException`
    - `Phalcon\DataMapper\Pdo\Connection\AbstractConnection`
    - `Phalcon\DataMapper\Pdo\Profiler\Profiler`
    - `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

-   __Extends__
    
    `AbstractConnection`

-   __Implements__
    

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods


### Properties
```php
/**
 * @var array
 */
protected $arguments;

```

### Methods

```php
public function __construct( string $dsn, string $username = null, string $password = null, array $options = [], array $queries = [], ProfilerInterface $profiler = null );
```
Constructor.

This overrides the parent so that it can take connection attributes as a
constructor parameter, and set them after connection.


```php
public function __debugInfo(): array;
```
The purpose of this method is to hide sensitive data from stack traces.


```php
public function connect(): void;
```
Connects to the database.


```php
public function disconnect(): void;
```
Disconnects from the database.




## DataMapper\Pdo\Connection\AbstractConnection ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/AbstractConnection.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo\Connection`

-   __Uses__
    
    - `BadMethodCallException`
    - `Phalcon\DataMapper\Pdo\Exception\CannotBindValue`
    - `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

-   __Extends__
    

-   __Implements__
    
    - `ConnectionInterface`

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods


### Properties
```php
/**
 * @var \PDO
 */
protected $pdo;

/**
 * @var ProfilerInterface
 */
protected $profiler;

```

### Methods

```php
public function __call( mixed $name, array $arguments );
```
Proxies to PDO methods created for specific drivers; in particular,
`sqlite` and `pgsql`.


```php
public function beginTransaction(): bool;
```
Begins a transaction. If the profiler is enabled, the operation will
be recorded.


```php
public function commit(): bool;
```
Commits the existing transaction. If the profiler is enabled, the
operation will be recorded.


```php
abstract public function connect(): void;
```
Connects to the database.


```php
abstract public function disconnect(): void;
```
Disconnects from the database.


```php
public function errorCode(): string | null;
```
Gets the most recent error code.


```php
public function errorInfo(): array;
```
Gets the most recent error info.


```php
public function exec( string $statement ): int;
```
Executes an SQL statement and returns the number of affected rows. If
the profiler is enabled, the operation will be recorded.


```php
public function fetchAffected( string $statement, array $values = [] ): int;
```
Performs a statement and returns the number of affected rows.


```php
public function fetchAll( string $statement, array $values = [] ): array;
```
Fetches a sequential array of rows from the database; the rows are
returned as associative arrays.


```php
public function fetchAssoc( string $statement, array $values = [] ): array;
```
Fetches an associative array of rows from the database; the rows are
returned as associative arrays, and the array of rows is keyed on the
first column of each row.

If multiple rows have the same first column value, the last row with
that value will overwrite earlier rows. This method is more resource
intensive and should be avoided if possible.


```php
public function fetchColumn( string $statement, array $values = [], int $column = int ): array;
```
Fetches a column of rows as a sequential array (default first one).


```php
public function fetchGroup( string $statement, array $values = [], int $flags = static-constant-access ): array;
```
Fetches multiple from the database as an associative array. The first
column will be the index key. The default flags are
PDO::FETCH_ASSOC | PDO::FETCH_GROUP


```php
public function fetchObject( string $statement, array $values = [], string $className = string, array $arguments = [] ): object;
```
Fetches one row from the database as an object where the column values
are mapped to object properties.

Since PDO injects property values before invoking the constructor, any
initializations for defaults that you potentially have in your object's
constructor, will override the values that have been injected by
`fetchObject`. The default object returned is `\stdClass`


```php
public function fetchObjects( string $statement, array $values = [], string $className = string, array $arguments = [] ): array;
```
Fetches a sequential array of rows from the database; the rows are
returned as objects where the column values are mapped to object
properties.

Since PDO injects property values before invoking the constructor, any
initializations for defaults that you potentially have in your object's
constructor, will override the values that have been injected by
`fetchObject`. The default object returned is `\stdClass`


```php
public function fetchOne( string $statement, array $values = [] ): array;
```
Fetches one row from the database as an associative array.


```php
public function fetchPairs( string $statement, array $values = [] ): array;
```
Fetches an associative array of rows as key-value pairs (first column is
the key, second column is the value).


```php
public function fetchValue( string $statement, array $values = [] );
```
Fetches the very first value (i.e., first column of the first row).


```php
public function getAdapter(): \PDO;
```
Return the inner PDO (if any)


```php
public function getAttribute( int $attribute ): mixed;
```
Retrieve a database connection attribute


```php
public static function getAvailableDrivers(): array;
```
Return an array of available PDO drivers (empty array if none available)


```php
public function getDriverName(): string;
```
Return the driver name


```php
public function getProfiler(): ProfilerInterface;
```
Returns the Profiler instance.


```php
public function getQuoteNames( string $driver = string ): array;
```
Gets the quote parameters based on the driver


```php
public function inTransaction(): bool;
```
Is a transaction currently active? If the profiler is enabled, the
operation will be recorded. If the profiler is enabled, the operation
will be recorded.


```php
public function isConnected(): bool;
```
Is the PDO connection active?


```php
public function lastInsertId( string $name = null ): string;
```
Returns the last inserted autoincrement sequence value. If the profiler
is enabled, the operation will be recorded.


```php
public function perform( string $statement, array $values = [] ): \PDOStatement;
```
Performs a query with bound values and returns the resulting
PDOStatement; array values will be passed through `quote()` and their
respective placeholders will be replaced in the query string. If the
profiler is enabled, the operation will be recorded.


```php
public function prepare( string $statement, array $options = [] ): \PDOStatement | bool;
```
Prepares an SQL statement for execution.


```php
public function query( string $statement ): \PDOStatement | bool;
```
Queries the database and returns a PDOStatement. If the profiler is
enabled, the operation will be recorded.


```php
public function quote( mixed $value, int $type = static-constant-access ): string;
```
Quotes a value for use in an SQL statement. This differs from
`PDO::quote()` in that it will convert an array into a string of
comma-separated quoted values. The default type is `PDO::PARAM_STR`


```php
public function rollBack(): bool;
```
Rolls back the current transaction, and restores autocommit mode. If the
profiler is enabled, the operation will be recorded.


```php
public function setAttribute( int $attribute, mixed $value ): bool;
```
Set a database connection attribute


```php
public function setProfiler( ProfilerInterface $profiler );
```
Sets the Profiler instance.


```php
protected function fetchData( string $method, array $arguments, string $statement, array $values = [] ): array;
```
Helper method to get data from PDO based on the method passed


```php
protected function performBind( \PDOStatement $statement, mixed $name, mixed $arguments ): void;
```
Bind a value using the proper PDO::PARAM_* type.




## DataMapper\Pdo\Connection\ConnectionInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/ConnectionInterface.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo\Connection`

-   __Uses__
    
    - `Phalcon\DataMapper\Pdo\Exception\CannotBindValue`
    - `Phalcon\DataMapper\Pdo\Parser\ParserInterface`
    - `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

-   __Extends__
    
    `PdoInterface`

-   __Implements__
    

Provides array quoting, profiling, a new `perform()` method, new `fetch*()`
methods


### Methods

```php
public function connect(): void;
```
Connects to the database.


```php
public function disconnect(): void;
```
Disconnects from the database.


```php
public function fetchAffected( string $statement, array $values = [] ): int;
```
Performs a statement and returns the number of affected rows.


```php
public function fetchAll( string $statement, array $values = [] ): array;
```
Fetches a sequential array of rows from the database; the rows are
returned as associative arrays.


```php
public function fetchAssoc( string $statement, array $values = [] ): array;
```
Fetches an associative array of rows from the database; the rows are
returned as associative arrays, and the array of rows is keyed on the
first column of each row.

If multiple rows have the same first column value, the last row with
that value will overwrite earlier rows. This method is more resource
intensive and should be avoided if possible.


```php
public function fetchColumn( string $statement, array $values = [], int $column = int ): array;
```
Fetches a column of rows as a sequential array (default first one).


```php
public function fetchGroup( string $statement, array $values = [], int $flags = static-constant-access ): array;
```
Fetches multiple from the database as an associative array. The first
column will be the index key. The default flags are
PDO::FETCH_ASSOC | PDO::FETCH_GROUP


```php
public function fetchObject( string $statement, array $values = [], string $className = string, array $arguments = [] ): object;
```
Fetches one row from the database as an object where the column values
are mapped to object properties.

Since PDO injects property values before invoking the constructor, any
initializations for defaults that you potentially have in your object's
constructor, will override the values that have been injected by
`fetchObject`. The default object returned is `\stdClass`


```php
public function fetchObjects( string $statement, array $values = [], string $className = string, array $arguments = [] ): array;
```
Fetches a sequential array of rows from the database; the rows are
returned as objects where the column values are mapped to object
properties.

Since PDO injects property values before invoking the constructor, any
initializations for defaults that you potentially have in your object's
constructor, will override the values that have been injected by
`fetchObject`. The default object returned is `\stdClass`


```php
public function fetchOne( string $statement, array $values = [] ): array;
```
Fetches one row from the database as an associative array.


```php
public function fetchPairs( string $statement, array $values = [] ): array;
```
Fetches an associative array of rows as key-value pairs (first column is
the key, second column is the value).


```php
public function fetchValue( string $statement, array $values = [] ): mixed;
```
Fetches the very first value (i.e., first column of the first row).


```php
public function getAdapter(): \PDO;
```
Return the inner PDO (if any)


```php
public function getProfiler(): ProfilerInterface;
```
Returns the Profiler instance.


```php
public function isConnected(): bool;
```
Is the PDO connection active?


```php
public function perform( string $statement, array $values = [] ): \PDOStatement;
```
Performs a query with bound values and returns the resulting
PDOStatement; array values will be passed through `quote()` and their
respective placeholders will be replaced in the query string. If the
profiler is enabled, the operation will be recorded.


```php
public function setProfiler( ProfilerInterface $profiler );
```
Sets the Profiler instance.




## DataMapper\Pdo\Connection\Decorated 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/Decorated.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo\Connection`

-   __Uses__
    
    - `Phalcon\DataMapper\Pdo\Exception\CannotDisconnect`
    - `Phalcon\DataMapper\Pdo\Profiler\Profiler`
    - `Phalcon\DataMapper\Pdo\Profiler\ProfilerInterface`

-   __Extends__
    
    `AbstractConnection`

-   __Implements__
    

Decorates an existing PDO instance with the extended methods.


### Methods

```php
public function __construct( \PDO $pdo, ProfilerInterface $profiler = null );
```
Constructor.

This overrides the parent so that it can take an existing PDO instance
and decorate it with the extended methods.


```php
public function connect(): void;
```
Connects to the database.


```php
public function disconnect(): void;
```
Disconnects from the database; disallowed with decorated PDO connections.

@throws CannotDisconnect




## DataMapper\Pdo\Connection\PdoInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Connection/PdoInterface.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo\Connection`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

An interface to the native PDO object.


### Methods

```php
public function beginTransaction(): bool;
```
Begins a transaction. If the profiler is enabled, the operation will
be recorded.


```php
public function commit(): bool;
```
Commits the existing transaction. If the profiler is enabled, the
operation will be recorded.


```php
public function errorCode(): null | string;
```
Gets the most recent error code.


```php
public function errorInfo(): array;
```
Gets the most recent error info.


```php
public function exec( string $statement ): int;
```
Executes an SQL statement and returns the number of affected rows. If
the profiler is enabled, the operation will be recorded.


```php
public function getAttribute( int $attribute ): mixed;
```
Retrieve a database connection attribute


```php
public static function getAvailableDrivers(): array;
```
Return an array of available PDO drivers (empty array if none available)


```php
public function inTransaction(): bool;
```
Is a transaction currently active? If the profiler is enabled, the
operation will be recorded. If the profiler is enabled, the operation
will be recorded.


```php
public function lastInsertId( string $name = null ): string;
```
Returns the last inserted autoincrement sequence value. If the profiler
is enabled, the operation will be recorded.


```php
public function prepare( string $statement, array $options = [] ): \PDOStatement | bool;
```
Prepares an SQL statement for execution.


```php
public function query( string $statement ): \PDOStatement | bool;
```
Queries the database and returns a PDOStatement. If the profiler is
enabled, the operation will be recorded.


```php
public function quote( mixed $value, int $type = static-constant-access ): string;
```
Quotes a value for use in an SQL statement. This differs from
`PDO::quote()` in that it will convert an array into a string of
comma-separated quoted values. The default type is `PDO::PARAM_STR`


```php
public function rollBack(): bool;
```
Rolls back the current transaction, and restores autocommit mode. If the
profiler is enabled, the operation will be recorded.


```php
public function setAttribute( int $attribute, mixed $value ): bool;
```
Set a database connection attribute




## DataMapper\Pdo\ConnectionLocator 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/ConnectionLocator.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo`

-   __Uses__
    
    - `Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`
    - `Phalcon\DataMapper\Pdo\Exception\ConnectionNotFound`

-   __Extends__
    

-   __Implements__
    
    - `ConnectionLocatorInterface`

Manages Connection instances for default, read, and write connections.


### Properties
```php
/**
 * A default Connection connection factory/instance.
 *
 * @var ConnectionInterface
 */
protected $master;

/**
 * A registry of Connection "read" factories/instances.
 *
 * @var array
 */
protected $read;

/**
 * A registry of Connection "write" factories/instances.
 *
 * @var array
 */
protected $write;

/**
 * A collection of resolved instances
 *
 * @var array
 */
private $instances;

```

### Methods

```php
public function __construct( ConnectionInterface $master, array $read = [], array $write = [] );
```
Constructor.


```php
public function getMaster(): ConnectionInterface;
```
Returns the default connection object.


```php
public function getRead( string $name = string ): ConnectionInterface;
```
Returns a read connection by name; if no name is given, picks a
random connection; if no read connections are present, returns the
default connection.


```php
public function getWrite( string $name = string ): ConnectionInterface;
```
Returns a write connection by name; if no name is given, picks a
random connection; if no write connections are present, returns the
default connection.


```php
public function setMaster( ConnectionInterface $callableObject ): ConnectionLocatorInterface;
```
Sets the default connection factory.


```php
public function setRead( string $name, callable $callableObject ): ConnectionLocatorInterface;
```
Sets a read connection factory by name.


```php
public function setWrite( string $name, callable $callableObject ): ConnectionLocatorInterface;
```
Sets a write connection factory by name.


```php
protected function getConnection( string $type, string $name = string ): ConnectionInterface;
```
Returns a connection by name.




## DataMapper\Pdo\ConnectionLocatorInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/ConnectionLocatorInterface.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo`

-   __Uses__
    
    - `Phalcon\DataMapper\Pdo\Connection\ConnectionInterface`

-   __Extends__
    

-   __Implements__
    

Locates PDO connections for default, read, and write databases.


### Methods

```php
public function getMaster(): ConnectionInterface;
```
Returns the default connection object.


```php
public function getRead( string $name = string ): ConnectionInterface;
```
Returns a read connection by name; if no name is given, picks a
random connection; if no read connections are present, returns the
default connection.


```php
public function getWrite( string $name = string ): ConnectionInterface;
```
Returns a write connection by name; if no name is given, picks a
random connection; if no write connections are present, returns the
default connection.


```php
public function setMaster( ConnectionInterface $callableObject ): ConnectionLocatorInterface;
```
Sets the default connection registry entry.


```php
public function setRead( string $name, callable $callableObject ): ConnectionLocatorInterface;
```
Sets a read connection registry entry by name.


```php
public function setWrite( string $name, callable $callableObject ): ConnectionLocatorInterface;
```
Sets a write connection registry entry by name.




## DataMapper\Pdo\Exception\CannotDisconnect 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/CannotDisconnect.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo\Exception`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

ExtendedPdo could not disconnect; e.g., because its PDO connection was
created externally and then injected.



## DataMapper\Pdo\Exception\ConnectionNotFound 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/ConnectionNotFound.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo\Exception`

-   __Uses__
    

-   __Extends__
    
    `Exception`

-   __Implements__
    

Locator could not find a named connection.



## DataMapper\Pdo\Exception\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Exception/Exception.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo\Exception`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Base Exception class



## DataMapper\Pdo\Profiler\MemoryLogger 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Profiler/MemoryLogger.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo\Profiler`

-   __Uses__
    
    - `Phalcon\Logger\Adapter\AdapterInterface`
    - `Phalcon\Logger\Adapter\Noop`
    - `Phalcon\Logger\Enum`
    - `Phalcon\Logger\LoggerInterface`

-   __Extends__
    

-   __Implements__
    
    - `LoggerInterface`

A memory-based logger.


### Properties
```php
/**
 * @var array
 */
protected $messages;

```

### Methods

```php
public function alert( string $message, array $context = [] ): void;
```



```php
public function critical( string $message, array $context = [] ): void;
```



```php
public function debug( string $message, array $context = [] ): void;
```



```php
public function emergency( string $message, array $context = [] ): void;
```



```php
public function error( string $message, array $context = [] ): void;
```



```php
public function getAdapter( string $name ): AdapterInterface;
```
Returns an adapter from the stack


```php
public function getAdapters(): array;
```
Returns the adapter stack array


```php
public function getLogLevel(): int;
```
Returns the log level


```php
public function getMessages(): array;
```
Returns the logged messages.


```php
public function getName(): string;
```
Returns the name of the logger


```php
public function info( string $message, array $context = [] ): void;
```



```php
public function log( mixed $level, string $message, array $context = [] ): void;
```
Logs a message.


```php
public function notice( string $message, array $context = [] ): void;
```



```php
public function warning( string $message, array $context = [] ): void;
```





## DataMapper\Pdo\Profiler\Profiler 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Profiler/Profiler.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo\Profiler`

-   __Uses__
    
    - `Phalcon\DataMapper\Pdo\Exception\Exception`
    - `Phalcon\Logger\Enum`
    - `Phalcon\Logger\LoggerInterface`
    - `Phalcon\Support\Helper\Json\Encode`

-   __Extends__
    

-   __Implements__
    
    - `ProfilerInterface`

Sends query profiles to a logger.


### Properties
```php
/**
 * @var bool
 */
protected $active = false;

/**
 * @var array
 */
protected $context;

/**
 * @var string
 */
protected $logFormat = ;

/**
 * @var int
 */
protected $logLevel = ;

/**
 * @var LoggerInterface
 */
protected $logger;

/**
 * @var Encode
 */
private $encode;

```

### Methods

```php
public function __construct( LoggerInterface $logger = null );
```
Constructor.


```php
public function finish( string $statement = null, array $values = [] ): void;
```
Finishes and logs a profile entry.


```php
public function getLogFormat(): string;
```
Returns the log message format string, with placeholders.


```php
public function getLogLevel(): string;
```
Returns the level at which to log profile messages.


```php
public function getLogger(): LoggerInterface;
```
Returns the underlying logger instance.


```php
public function isActive(): bool;
```
Returns true if logging is active.


```php
public function setActive( bool $active ): ProfilerInterface;
```
Enable or disable profiler logging.


```php
public function setLogFormat( string $logFormat ): ProfilerInterface;
```
Sets the log message format string, with placeholders.


```php
public function setLogLevel( string $logLevel ): ProfilerInterface;
```
Level at which to log profile messages.


```php
public function start( string $method ): void;
```
Starts a profile entry.




## DataMapper\Pdo\Profiler\ProfilerInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Pdo/Profiler/ProfilerInterface.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Pdo\Profiler`

-   __Uses__
    
    - `Phalcon\Logger\LoggerInterface`

-   __Extends__
    

-   __Implements__
    

Interface to send query profiles to a logger.


### Methods

```php
public function finish( string $statement = null, array $values = [] ): void;
```
Finishes and logs a profile entry.


```php
public function getLogFormat(): string;
```
Returns the log message format string, with placeholders.


```php
public function getLogLevel(): string;
```
Returns the level at which to log profile messages.


```php
public function getLogger(): LoggerInterface;
```
Returns the underlying logger instance.


```php
public function isActive(): bool;
```
Returns true if logging is active.


```php
public function setActive( bool $active ): ProfilerInterface;
```
Enable or disable profiler logging.


```php
public function setLogFormat( string $logFormat ): ProfilerInterface;
```
Sets the log message format string, with placeholders.


```php
public function setLogLevel( string $logLevel ): ProfilerInterface;
```
Level at which to log profile messages.


```php
public function start( string $method ): void;
```
Starts a profile entry.




## DataMapper\Query\AbstractConditions ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/AbstractConditions.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Query`

-   __Uses__
    

-   __Extends__
    
    `AbstractQuery`

-   __Implements__
    

Class AbstractConditions


### Methods

```php
public function andWhere( string $condition, mixed $value = null, int $type = int ): AbstractConditions;
```
Sets a `AND` for a `WHERE` condition


```php
public function appendWhere( string $condition, mixed $value = null, int $type = int ): AbstractConditions;
```
Concatenates to the most recent `WHERE` clause


```php
public function limit( int $limit ): AbstractConditions;
```
Sets the `LIMIT` clause


```php
public function offset( int $offset ): AbstractConditions;
```
Sets the `OFFSET` clause


```php
public function orWhere( string $condition, mixed $value = null, int $type = int ): AbstractConditions;
```
Sets a `OR` for a `WHERE` condition


```php
public function orderBy( mixed $orderBy ): AbstractConditions;
```
Sets the `ORDER BY`


```php
public function where( string $condition, mixed $value = null, int $type = int ): AbstractConditions;
```
Sets a `WHERE` condition


```php
public function whereEquals( array $columnsValues ): AbstractConditions;
```



```php
protected function addCondition( string $store, string $andor, string $condition, mixed $value = null, int $type = int ): void;
```
Appends a conditional


```php
protected function appendCondition( string $store, string $condition, mixed $value = null, int $type = int ): void;
```
Concatenates a conditional


```php
protected function buildBy( string $type ): string;
```
Builds a `BY` list


```php
protected function buildCondition( string $type ): string;
```
Builds the conditional string


```php
protected function buildLimit(): string;
```
Builds the `LIMIT` clause


```php
protected function buildLimitCommon(): string;
```
Builds the `LIMIT` clause for all drivers


```php
protected function buildLimitEarly(): string;
```
Builds the early `LIMIT` clause - MS SQLServer


```php
protected function buildLimitSqlsrv(): string;
```
Builds the `LIMIT` clause for MSSQLServer


```php
protected function processValue( string $store, mixed $data ): void;
```
Processes a value (array or string) and merges it with the store




## DataMapper\Query\AbstractQuery ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/AbstractQuery.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Query`

-   __Uses__
    
    - `Phalcon\DataMapper\Pdo\Connection`

-   __Extends__
    

-   __Implements__
    

Class AbstractQuery


### Properties
```php
/**
 * @var Bind
 */
protected $bind;

/**
 * @var Connection
 */
protected $connection;

/**
 * @var array
 */
protected $store;

```

### Methods

```php
public function __construct( Connection $connection, Bind $bind );
```
AbstractQuery constructor.


```php
public function bindInline( mixed $value, int $type = int ): string;
```
Binds a value inline


```php
public function bindValue( string $key, mixed $value, int $type = int ): AbstractQuery;
```
Binds a value - auto-detects the type if necessary


```php
public function bindValues( array $values ): AbstractQuery;
```
Binds an array of values


```php
public function getBindValues(): array;
```
Returns all the bound values


```php
abstract public function getStatement(): string;
```
Return the generated statement


```php
public function perform();
```
Performs a statement in the connection


```php
public function quoteIdentifier( string $name, int $type = static-constant-access ): string;
```
Quotes the identifier


```php
public function reset(): void;
```
Resets the internal array


```php
public function resetColumns(): void;
```
Resets the columns


```php
public function resetFlags(): void;
```
Resets the flags


```php
public function resetFrom(): void;
```
Resets the from


```php
public function resetGroupBy(): void;
```
Resets the group by


```php
public function resetHaving(): void;
```
Resets the having


```php
public function resetLimit(): void;
```
Resets the limit and offset


```php
public function resetOrderBy(): void;
```
Resets the order by


```php
public function resetWhere(): void;
```
Resets the where


```php
public function setFlag( string $flag, bool $enable = bool ): void;
```
Sets a flag for the query such as "DISTINCT"


```php
protected function buildFlags();
```
Builds the flags statement(s)


```php
protected function buildReturning(): string;
```
Builds the `RETURNING` clause


```php
protected function indent( array $collection, string $glue = string ): string;
```
Indents a collection




## DataMapper\Query\Bind 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Bind.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Query`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Class Bind


### Properties
```php
/**
 * @var int
 */
protected $inlineCount = ;

/**
 * @var array
 */
protected $store;

```

### Methods

```php
public function bindInline( mixed $value, int $type = int ): string;
```



```php
public function remove( string $key ): void;
```
Removes a value from the store


```php
public function setValue( string $key, mixed $value, int $type = int ): void;
```
Sets a value


```php
public function setValues( array $values, int $type = int ): void;
```
Sets values from an array


```php
public function toArray(): array;
```
Returns the internal collection


```php
protected function getType( mixed $value ): int;
```
Auto detects the PDO type


```php
protected function inlineArray( array $data, int $type ): string;
```
Processes an array - if passed as an `inline` parameter




## DataMapper\Query\Delete 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Delete.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Query`

-   __Uses__
    
    - `Phalcon\DataMapper\Pdo\Connection`

-   __Extends__
    
    `AbstractConditions`

-   __Implements__
    

Delete Query


### Methods

```php
public function __construct( Connection $connection, Bind $bind );
```
Delete constructor.


```php
public function from( string $table ): Delete;
```
Adds table(s) in the query


```php
public function getStatement(): string;
```



```php
public function reset(): void;
```
Resets the internal store


```php
public function returning( array $columns ): Delete;
```
Adds the `RETURNING` clause




## DataMapper\Query\Insert 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Insert.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Query`

-   __Uses__
    
    - `Phalcon\DataMapper\Pdo\Connection`

-   __Extends__
    
    `AbstractQuery`

-   __Implements__
    

Insert Query


### Methods

```php
public function __construct( Connection $connection, Bind $bind );
```
Insert constructor.


```php
public function column( string $column, mixed $value = null, int $type = int ): Insert;
```
Sets a column for the `INSERT` query


```php
public function columns( array $columns ): Insert;
```
Mass sets columns and values for the `INSERT`


```php
public function getLastInsertId( string $name = null ): string;
```
Returns the id of the last inserted record


```php
public function getStatement(): string;
```



```php
public function into( string $table ): Insert;
```
Adds table(s) in the query


```php
public function reset(): void;
```
Resets the internal store


```php
public function returning( array $columns ): Insert;
```
Adds the `RETURNING` clause


```php
public function set( string $column, mixed $value = null ): Insert;
```
Sets a column = value condition




## DataMapper\Query\QueryFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/QueryFactory.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Query`

-   __Uses__
    
    - `Phalcon\DataMapper\Pdo\Connection`

-   __Extends__
    

-   __Implements__
    

QueryFactory


### Properties
```php
/**
 * @var string
 */
protected $selectClass = ;

```

### Methods

```php
public function __construct( string $selectClass = string );
```
QueryFactory constructor.


```php
public function newBind(): Bind;
```
Create a new Bind object


```php
public function newDelete( Connection $connection ): Delete;
```
Create a new Delete object


```php
public function newInsert( Connection $connection ): Insert;
```
Create a new Insert object


```php
public function newSelect( Connection $connection ): Select;
```
Create a new Select object


```php
public function newUpdate( Connection $connection ): Update;
```
Create a new Update object




## DataMapper\Query\Select 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Select.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Query`

-   __Uses__
    
    - `BadMethodCallException`

-   __Extends__
    
    `AbstractConditions`

-   __Implements__
    

Select Query


### Constants
```php
const JOIN_INNER = INNER;
const JOIN_LEFT = LEFT;
const JOIN_NATURAL = NATURAL;
const JOIN_RIGHT = RIGHT;
```

### Properties
```php
/**
 * @var string
 */
protected $asAlias = ;

/**
 * @var bool
 */
protected $forUpdate = false;

```

### Methods

```php
public function __call( string $method, array $params );
```
Proxied methods to the connection


```php
public function andHaving( string $condition, mixed $value = null, int $type = int ): Select;
```
Sets a `AND` for a `HAVING` condition


```php
public function appendHaving( string $condition, mixed $value = null, int $type = int ): Select;
```
Concatenates to the most recent `HAVING` clause


```php
public function appendJoin( string $condition, mixed $value = null, int $type = int ): Select;
```
Concatenates to the most recent `JOIN` clause


```php
public function asAlias( string $asAlias ): Select;
```
The `AS` statement for the query - useful in sub-queries


```php
public function columns( array $columns ): Select;
```
The columns to select from. If a key is set in the array element, the
key will be used as the alias


```php
public function distinct( bool $enable = bool ): Select;
```



```php
public function forUpdate( bool $enable = bool ): Select;
```
Enable the `FOR UPDATE` for the query


```php
public function from( string $table ): Select;
```
Adds table(s) in the query


```php
public function getStatement(): string;
```
Returns the compiled SQL statement


```php
public function groupBy( mixed $groupBy ): Select;
```
Sets the `GROUP BY`


```php
public function hasColumns(): bool;
```
Whether the query has columns or not


```php
public function having( string $condition, mixed $value = null, int $type = int ): Select;
```
Sets a `HAVING` condition


```php
public function join( string $join, string $table, string $condition, mixed $value = null, int $type = int ): Select;
```
Sets a 'JOIN' condition


```php
public function orHaving( string $condition, mixed $value = null, int $type = int ): Select;
```
Sets a `OR` for a `HAVING` condition


```php
public function reset(): void;
```
Resets the internal collections


```php
public function subSelect(): Select;
```
Start a sub-select


```php
public function union(): Select;
```
Start a `UNION`


```php
public function unionAll(): Select;
```
Start a `UNION ALL`


```php
protected function getCurrentStatement( string $suffix = string ): string;
```
Statement builder




## DataMapper\Query\Update 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/DataMapper/Query/Update.zep)


-   __Namespace__

    - `Phalcon\DataMapper\Query`

-   __Uses__
    
    - `Phalcon\DataMapper\Pdo\Connection`

-   __Extends__
    
    `AbstractConditions`

-   __Implements__
    

Update Query


### Methods

```php
public function __construct( Connection $connection, Bind $bind );
```
Update constructor.


```php
public function column( string $column, mixed $value = null, int $type = int ): Update;
```
Sets a column for the `UPDATE` query


```php
public function columns( array $columns ): Update;
```
Mass sets columns and values for the `UPDATE`


```php
public function from( string $table ): Update;
```
Adds table(s) in the query


```php
public function getStatement(): string;
```



```php
public function hasColumns(): bool;
```
Whether the query has columns or not


```php
public function reset(): void;
```
Resets the internal store


```php
public function returning( array $columns ): Update;
```
Adds the `RETURNING` clause


```php
public function set( string $column, mixed $value = null ): Update;
```
Sets a column = value condition


