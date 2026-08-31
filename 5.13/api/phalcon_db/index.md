---
title: "Phalcon Db"
version: "5.13"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Db

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Db\Adapter\AbstractAdapter ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/AbstractAdapter.zep)

-   __Namespace__

    - `Phalcon\Db\Adapter`

-   __Uses__

    - `Phalcon\Db\CheckInterface`
    - `Phalcon\Db\ColumnInterface`
    - `Phalcon\Db\DialectInterface`
    - `Phalcon\Db\Enum`
    - `Phalcon\Db\Exception`
    - `Phalcon\Db\Index`
    - `Phalcon\Db\IndexInterface`
    - `Phalcon\Db\RawValue`
    - `Phalcon\Db\Reference`
    - `Phalcon\Db\ReferenceInterface`
    - `Phalcon\Events\EventsAwareInterface`
    - `Phalcon\Events\ManagerInterface`
    - `Phalcon\Support\Settings`

-   __Extends__

-   __Implements__

    - `AdapterInterface`
    - `EventsAwareInterface`

Base class for Phalcon\Db\Adapter adapters.

This class and its related classes provide a simple SQL database interface
for Phalcon Framework. The Phalcon\Db is the basic class you use to connect
your PHP application to an RDBMS. There is a different adapter class for each
brand of RDBMS.

This component is intended to lower level database operations. If you want to
interact with databases using higher level of abstraction use
Phalcon\Mvc\Model.

Phalcon\Db\AbstractDb is an abstract class. You only can use it with a
database adapter like Phalcon\Db\Adapter\Pdo

```php
use Phalcon\Db;
use Phalcon\Db\Exception;
use Phalcon\Db\Adapter\Pdo\Mysql as MysqlConnection;

try {
$connection = new MysqlConnection(
    [
        "host"     => "192.168.0.11",
        "username" => "sigma",
        "password" => "secret",
        "dbname"   => "blog",
        "port"     => "3306",
    ]
);

$result = $connection->query(
    "SELECTFROM co_invoices LIMIT 5"
);

$result->setFetchMode(Enum::FETCH_NUM);

while ($invoice = $result->fetch()) {
    print_r($invoice);
}
} catch (Exception $e) {
echo $e->getMessage(), PHP_EOL;
}
```

### Properties
```php
/**
 * Connection ID
 *
 * @var int
 */
protected static $connectionConsecutive = ;

/**
 * Active connection ID
 *
 * @var int
 */
protected $connectionId;

/**
 * Descriptor used to connect to a database
 *
 * @var array
 */
protected $descriptor;

/**
 * Dialect instance
 *
 * @var object
 */
protected $dialect;

/**
 * Name of the dialect used
 *
 * @var string
 */
protected $dialectType;

/**
 * Event Manager
 *
 * @var ManagerInterface|null
 */
protected $eventsManager;

/**
 * The real SQL statement - what was executed
 *
 * @var string
 */
protected $realSqlStatement;

/**
 * Active SQL Bind Types
 *
 * @var array
 */
protected $sqlBindTypes;

/**
 * Active SQL Statement
 *
 * @var string
 */
protected $sqlStatement;

/**
 * Active SQL bound parameter variables
 *
 * @var array
 */
protected $sqlVariables;

/**
 * Current transaction level
 *
 * @var int
 */
protected $transactionLevel = ;

/**
 * Whether the database supports transactions with save points
 *
 * @var bool
 */
protected $transactionsWithSavepoints = false;

/**
 * Type of database system the adapter is used for
 *
 * @var string
 */
protected $type;

```

### Methods

```php
public function __construct( array $descriptor );
```
Phalcon\Db\Adapter constructor

```php
public function addCheck( string $tableName, string $schemaName, CheckInterface $check ): bool;
```
Adds a CHECK constraint to a table. MySQL 8.0.16+ and PostgreSQL
issue `ALTER TABLE ... ADD CONSTRAINT ... CHECK (...)`; SQLite throws.

```php
public function addColumn( string $tableName, string $schemaName, ColumnInterface $column ): bool;
```
Adds a column to a table

```php
public function addForeignKey( string $tableName, string $schemaName, ReferenceInterface $reference ): bool;
```
Adds a foreign key to a table

```php
public function addIndex( string $tableName, string $schemaName, IndexInterface $index ): bool;
```
Adds an index to a table

```php
public function addPrimaryKey( string $tableName, string $schemaName, IndexInterface $index ): bool;
```
Adds a primary key to a table

```php
public function createMaterializedView( string $viewName, array $definition, string $schemaName = null ): bool;
```
Creates a materialized view (PostgreSQL only - MySQL and SQLite
throw via the dialect).

```php
public function createSavepoint( string $name ): bool;
```
Creates a new savepoint

```php
public function createTable( string $tableName, string $schemaName, array $definition ): bool;
```
Creates a table

```php
public function createView( string $viewName, array $definition, string $schemaName = null ): bool;
```
Creates a view

```php
public function delete( mixed $table, string $whereCondition = null, array $placeholders = [], array $dataTypes = [] ): bool;
```
Deletes data from a table using custom RBDM SQL syntax

```php
// Deleting existing robot
$success = $connection->delete(
"robots",
"id = 101"
);

// Next SQL sentence is generated
DELETE FROM `robots` WHERE `id` = 101
```

```php
public function describeIndexes( string $table, string $schema = null ): IndexInterface[];
```
Lists table indexes

```php
print_r(
$connection->describeIndexes("robots_parts")
);
```

```php
public function describeReferences( string $table, string $schema = null ): ReferenceInterface[];
```
Lists table references

```php
print_r(
$connection->describeReferences("robots_parts")
);
```

```php
public function dropCheck( string $tableName, string $schemaName, string $checkName ): bool;
```
Drops a CHECK constraint from a table. SQLite throws.

```php
public function dropColumn( string $tableName, string $schemaName, string $columnName ): bool;
```
Drops a column from a table

```php
public function dropForeignKey( string $tableName, string $schemaName, string $referenceName ): bool;
```
Drops a foreign key from a table

```php
public function dropIndex( string $tableName, string $schemaName, mixed $indexName ): bool;
```
Drop an index from a table

```php
public function dropMaterializedView( string $viewName, string $schemaName = null, bool $ifExists = bool ): bool;
```
Drops a materialized view (PostgreSQL only).

```php
public function dropPrimaryKey( string $tableName, string $schemaName ): bool;
```
Drops a table's primary key

```php
public function dropTable( string $tableName, string $schemaName = null, bool $ifExists = bool ): bool;
```
Drops a table from a schema/database

```php
public function dropView( string $viewName, string $schemaName = null, bool $ifExists = bool ): bool;
```
Drops a view

```php
public function escapeIdentifier( mixed $identifier ): string;
```
Escapes a column/table/schema name

```php
$escapedTable = $connection->escapeIdentifier(
"robots"
);

$escapedTable = $connection->escapeIdentifier(
[
    "store",
    "robots",
]
);
```

```php
public function fetchAll( string $sqlQuery, int $fetchMode = static-constant-access, array $bindParams = [], array $bindTypes = [] ): array;
```
Dumps the complete result of a query into an array

```php
// Getting all robots with associative indexes only
$robots = $connection->fetchAll(
"SELECTFROM robots",
\Phalcon\Db\Enum::FETCH_ASSOC
);

foreach ($robots as $robot) {
print_r($robot);
}

 // Getting all robots that contains word "robot" withing the name
$robots = $connection->fetchAll(
"SELECTFROM robots WHERE name LIKE :name",
\Phalcon\Db\Enum::FETCH_ASSOC,
[
    "name" => "%robot%",
]
);
foreach($robots as $robot) {
print_r($robot);
}
```

```php
public function fetchColumn( string $sqlQuery, array $placeholders = [], mixed $column = int ): string | bool;
```
Returns the n'th field of first row in a SQL query result

```php
// Getting count of robots
$robotsCount = $connection->fetchColumn("SELECT count(*) FROM robots");
print_r($robotsCount);

// Getting name of last edited robot
$robot = $connection->fetchColumn(
"SELECT id, name FROM robots ORDER BY modified DESC",
1
);
print_r($robot);
```

```php
public function fetchOne( string $sqlQuery, mixed $fetchMode = static-constant-access, array $bindParams = [], array $bindTypes = [] ): array;
```
Returns the first row in a SQL query result

```php
// Getting first robot
$robot = $connection->fetchOne("SELECTFROM robots");
print_r($robot);

// Getting first robot with associative indexes only
$robot = $connection->fetchOne(
"SELECTFROM robots",
\Phalcon\Db\Enum::FETCH_ASSOC
);
print_r($robot);
```

```php
public function forUpdate( string $sqlQuery, string $modifier = string ): string;
```
Returns a SQL modified with a FOR UPDATE clause. The optional
`modifier` is passed straight to the dialect (use `Dialect::LOCK_NOWAIT`
/ `Dialect::LOCK_SKIP_LOCKED` / `Dialect::LOCK_NONE`).

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```
Returns the SQL column definition from a column

```php
public function getColumnList( mixed $columnList ): string;
```
Gets a list of columns

```php
public function getConnectionId(): int;
```
Gets the active connection unique identifier

```php
public function getDefaultIdValue(): RawValue;
```
Returns the default identity value to be inserted in an identity column

```php
// Inserting a new robot with a valid default value for the column 'id'
$success = $connection->insert(
"robots",
[
    $connection->getDefaultIdValue(),
    "Astro Boy",
    1952,
],
[
    "id",
    "name",
    "year",
]
);
```

```php
public function getDefaultValue(): RawValue;
```
Returns the default value to make the RBDM use the default value declared
in the table definition

```php
// Inserting a new robot with a valid default value for the column 'year'
$success = $connection->insert(
"robots",
[
    "Astro Boy",
    $connection->getDefaultValue()
],
[
    "name",
    "year",
]
);
```

@todo Return NULL if this is not supported by the adapter

```php
public function getDescriptor(): array;
```
Return descriptor used to connect to the active database

```php
public function getDialect(): DialectInterface;
```
Returns internal dialect instance

```php
public function getDialectType(): string;
```
Name of the dialect used

```php
public function getEventsManager(): ManagerInterface | null;
```
Returns the internal event manager

```php
public function getNestedTransactionSavepointName(): string;
```
Returns the savepoint name to use for nested transactions

```php
public function getRealSQLStatement(): string;
```
Active SQL statement in the object without replace bound parameters

```php
public function getSQLBindTypes(): array;
```
Active SQL statement in the object

```php
public function getSQLStatement(): string;
```
Active SQL statement in the object

```php
public function getSQLVariables(): array;
```
Active SQL variables in the object

```php
public function getType(): string;
```
Type of database system the adapter is used for

```php
public function insert( string $table, array $values, mixed $fields = null, mixed $dataTypes = null ): bool;
```
Inserts data into a table using custom RDBMS SQL syntax

```php
// Inserting a new robot
$success = $connection->insert(
"robots",
["Astro Boy", 1952],
["name", "year"]
);

// Next SQL sentence is sent to the database system
INSERT INTO `robots` (`name`, `year`) VALUES ("Astro boy", 1952);
```

```php
public function insertAsDict( string $table, mixed $data, mixed $dataTypes = null ): bool;
```
Inserts data into a table using custom RBDM SQL syntax

```php
// Inserting a new robot
$success = $connection->insertAsDict(
"robots",
[
    "name" => "Astro Boy",
    "year" => 1952,
]
);

// Next SQL sentence is sent to the database system
INSERT INTO `robots` (`name`, `year`) VALUES ("Astro boy", 1952);
```

```php
public function isNestedTransactionsWithSavepoints(): bool;
```
Returns if nested transactions should use savepoints

```php
public function limit( string $sqlQuery, int $number ): string;
```
Appends a LIMIT clause to $sqlQuery argument

```php
echo $connection->limit("SELECTFROM robots", 5);
```

```php
public function listTables( string $schemaName = null ): array;
```
List all tables on a database

```php
print_r(
$connection->listTables("blog")
);
```

```php
public function listViews( string $schemaName = null ): array;
```
List all views on a database

```php
print_r(
$connection->listViews("blog")
);
```

```php
public function modifyColumn( string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface $currentColumn = null ): bool;
```
Modifies a table column based on a definition

```php
public function onConflictUpdate( string $sqlQuery, array $conflictColumns, array $updateColumns ): string;
```
Appends an `ON CONFLICT (...) DO UPDATE SET col = excluded.col`
upsert clause to the supplied INSERT statement. Supported by
PostgreSQL and SQLite 3.24+; MySQL throws.

```php
public function refreshMaterializedView( string $viewName, string $schemaName = null, bool $concurrent = bool ): bool;
```
Refreshes a materialized view (PostgreSQL only). Pass
`concurrent = true` for non-blocking refresh.

```php
public function releaseSavepoint( string $name ): bool;
```
Releases given savepoint

```php
public function returning( string $sqlQuery, array $columns ): string;
```
Appends a RETURNING clause to an INSERT/UPDATE/DELETE SQL statement
and returns the modified SQL. Supported by PostgreSQL and SQLite 3.35+;
MySQL throws (no RETURNING construct). Pass `["*"]` for `RETURNING`.

```php
public function rollbackSavepoint( string $name ): bool;
```
Rollbacks given savepoint

```php
public function setDialect( DialectInterface $dialect );
```
Sets the dialect used to produce the SQL

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```
Sets the event manager

```php
public function setNestedTransactionsWithSavepoints( bool $nestedTransactionsWithSavepoints ): AdapterInterface;
```
Set if nested transactions should use savepoints

```php
public static function setup( array $options ): void;
```
Enables/disables options in the Database component

```php
public function sharedLock( string $sqlQuery, string $modifier = string ): string;
```
Returns a SQL modified with a shared-lock clause. The optional
`modifier` is passed straight to the dialect (use
`Dialect::LOCK_NOWAIT` / `Dialect::LOCK_SKIP_LOCKED` for PostgreSQL).

```php
public function supportSequences(): bool;
```
Check whether the database system requires a sequence to produce
auto-numeric values

```php
public function supportsDefaultValue(): bool;
```
Check whether the database system support the DEFAULT
keyword (SQLite does not support it)

@deprecated Will re removed in the next version

```php
public function tableExists( string $tableName, string $schemaName = null ): bool;
```
Generates SQL checking for the existence of a schema.table

```php
var_dump(
$connection->tableExists("blog", "posts")
);
```

```php
public function tableOptions( string $tableName, string $schemaName = null ): array;
```
Gets creation options from a table

```php
print_r(
$connection->tableOptions("robots")
);
```

```php
public function update( string $table, mixed $fields, mixed $values, mixed $whereCondition = null, mixed $dataTypes = null ): bool;
```
Updates data on a table using custom RBDM SQL syntax

```php
// Updating existing robot
$success = $connection->update(
"robots",
["name"],
["New Astro Boy"],
"id = 101"
);

// Next SQL sentence is sent to the database system
UPDATE `robots` SET `name` = "Astro boy" WHERE id = 101

// Updating existing robot with array condition and $dataTypes
$success = $connection->update(
"robots",
["name"],
["New Astro Boy"],
[
    "conditions" => "id = ?",
    "bind"       => [$some_unsafe_id],
    "bindTypes"  => [PDO::PARAM_INT], // use only if you use $dataTypes param
],
[
    PDO::PARAM_STR
]
);

```

Warning! If $whereCondition is string it not escaped.

```php
public function updateAsDict( string $table, mixed $data, mixed $whereCondition = null, mixed $dataTypes = null ): bool;
```
Updates data on a table using custom RBDM SQL syntax
Another, more convenient syntax

```php
// Updating existing robot
$success = $connection->updateAsDict(
"robots",
[
    "name" => "New Astro Boy",
],
"id = 101"
);

// Next SQL sentence is sent to the database system
UPDATE `robots` SET `name` = "Astro boy" WHERE id = 101
```

```php
public function useExplicitIdValue(): bool;
```
Check whether the database system requires an explicit value for identity
columns

```php
public function viewExists( string $viewName, string $schemaName = null ): bool;
```
Generates SQL checking for the existence of a schema.view

```php
var_dump(
$connection->viewExists("active_users", "posts")
);
```

## Db\Adapter\AdapterInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/AdapterInterface.zep)

-   __Namespace__

    - `Phalcon\Db\Adapter`

-   __Uses__

    - `Phalcon\Contracts\Db\Adapter\Adapter`

-   __Extends__

    `AdapterContract`

-   __Implements__

Phalcon\Db\Adapter\AdapterInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use \{@see \Phalcon\Contracts\Db\Adapter\Adapter\} instead.

## Db\Adapter\Pdo\AbstractPdo ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/Pdo/AbstractPdo.zep)

-   __Namespace__

    - `Phalcon\Db\Adapter\Pdo`

-   __Uses__

    - `Phalcon\Db\Adapter\AbstractAdapter`
    - `Phalcon\Db\Column`
    - `Phalcon\Db\Exception`
    - `Phalcon\Db\ResultInterface`
    - `Phalcon\Db\Result\PdoResult`
    - `Phalcon\Events\ManagerInterface`
    - `Phalcon\Support\Settings`

-   __Extends__

    `AbstractAdapter`

-   __Implements__

Phalcon\Db\Adapter\Pdo is the Phalcon\Db that internally uses PDO to connect
to a database

```php
use Phalcon\Db\Adapter\Pdo\Mysql;

$config = [
"host"     => "localhost",
"dbname"   => "blog",
"port"     => 3306,
"username" => "sigma",
"password" => "secret",
];

$connection = new Mysql($config);
```

### Properties
```php
/**
 * Last affected rows
 *
 * @var int
 */
protected $affectedRows = ;

/**
 * PDO Handler
 *
 * @var \PDO
 */
protected $pdo;

```

### Methods

```php
public function __construct( array $descriptor );
```
Constructor for Phalcon\Db\Adapter\Pdo

```php
public function affectedRows(): int;
```
Returns the number of affected rows by the latest INSERT/UPDATE/DELETE
executed in the database system

```php
$connection->execute(
"DELETE FROM robots"
);

echo $connection->affectedRows(), " were deleted";
```

```php
public function begin( bool $nesting = bool ): bool;
```
Starts a transaction in the connection

```php
public function close(): void;
```
Closes the active connection returning success. Phalcon automatically
closes and destroys active connections when the request ends

```php
public function commit( bool $nesting = bool ): bool;
```
Commits the active transaction in the connection

```php
public function connect( array $descriptor = [] ): void;
```
This method is automatically called in \Phalcon\Db\Adapter\Pdo
constructor.

Call it when you need to restore a database connection.

```php
use Phalcon\Db\Adapter\Pdo\Mysql;

// Make a connection
$connection = new Mysql(
[
    "host"     => "localhost",
    "username" => "sigma",
    "password" => "secret",
    "dbname"   => "blog",
    "port"     => 3306,
]
);

// Reconnect
$connection->connect();
```

```php
public function convertBoundParams( string $sql, array $params = [] ): array;
```
Converts bound parameters such as :name: or ?1 into PDO bind params ?

```php
print_r(
$connection->convertBoundParams(
    "SELECTFROM robots WHERE name = :name:",
    [
        "Bender",
    ]
)
);
```

```php
public function escapeString( string $str ): string;
```
Escapes a value to avoid SQL injections according to the active charset
in the connection

```php
$escapedStr = $connection->escapeString("some dangerous value");
```

```php
public function execute( string $sqlStatement, array $bindParams = [], array $bindTypes = [] ): bool;
```
Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server does not
return any rows

```php
// Inserting data
$success = $connection->execute(
"INSERT INTO robots VALUES (1, 'Astro Boy')"
);

$success = $connection->execute(
"INSERT INTO robots VALUES (?, ?)",
[
    1,
    "Astro Boy",
]
);
```

```php
public function executePrepared( \PDOStatement $statement, array $placeholders, mixed $dataTypes ): \PDOStatement;
```
Executes a prepared statement binding. This function uses integer indexes
starting from zero

```php
use Phalcon\Db\Column;

$statement = $db->prepare(
"SELECTFROM robots WHERE name = :name"
);

$result = $connection->executePrepared(
$statement,
[
    "name" => "Voltron",
],
[
    "name" => Column::BIND_PARAM_STR,
]
);
```

```php
public function getErrorInfo(): array;
```
Return the error info, if any

```php
public function getInternalHandler(): mixed;
```
Return internal PDO handler

```php
public function getTransactionLevel(): int;
```
Returns the current transaction nesting level

```php
public function isUnderTransaction(): bool;
```
Checks whether the connection is under a transaction

```php
$connection->begin();

// true
var_dump(
$connection->isUnderTransaction()
);
```

```php
public function lastInsertId( string $name = null ): string | bool;
```
Returns the insert id for the auto_increment/serial column inserted in
the latest executed SQL statement

```php
// Inserting a new robot
$success = $connection->insert(
"robots",
[
    "Astro Boy",
    1952,
],
[
    "name",
    "year",
]
);

// Getting the generated id
$id = $connection->lastInsertId();
```

```php
public function prepare( string $sqlStatement ): \PDOStatement;
```
Returns a PDO prepared statement to be executed with 'executePrepared'

```php
use Phalcon\Db\Column;

$statement = $db->prepare(
"SELECTFROM robots WHERE name = :name"
);

$result = $connection->executePrepared(
$statement,
[
    "name" => "Voltron",
],
[
    "name" => Column::BIND_PARAM_INT,
]
);
```

```php
public function query( string $sqlStatement, array $bindParams = [], array $bindTypes = [] ): ResultInterface | bool;
```
Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server is
returning rows

```php
// Querying data
$resultset = $connection->query(
"SELECTFROM robots WHERE type = 'mechanical'"
);

$resultset = $connection->query(
"SELECTFROM robots WHERE type = ?",
[
    "mechanical",
]
);
```

```php
public function rollback( bool $nesting = bool ): bool;
```
Rollbacks the active transaction in the connection

```php
abstract protected function getDsnDefaults(): array;
```
Returns PDO adapter DSN defaults as a key-value map.

```php
protected function prepareRealSql( string $statement, array $parameters ): void;
```
Constructs the SQL statement (with parameters)

@see https://stackoverflow.com/a/8403150

## Db\Adapter\Pdo\Mysql 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/Pdo/Mysql.zep)

-   __Namespace__

    - `Phalcon\Db\Adapter\Pdo`

-   __Uses__

    - `Phalcon\Db\Adapter\Pdo\AbstractPdo`
    - `Phalcon\Db\Column`
    - `Phalcon\Db\ColumnInterface`
    - `Phalcon\Db\Enum`
    - `Phalcon\Db\Exception`
    - `Phalcon\Db\Index`
    - `Phalcon\Db\IndexInterface`
    - `Phalcon\Db\Reference`
    - `Phalcon\Db\ReferenceInterface`

-   __Extends__

    `PdoAdapter`

-   __Implements__

Specific functions for the MySQL database system

```php
use Phalcon\Db\Adapter\Pdo\Mysql;

$config = [
"host"     => "localhost",
"dbname"   => "blog",
"port"     => 3306,
"username" => "sigma",
"password" => "secret",
];

$connection = new Mysql($config);
```

### Properties
```php
/**
 * @var string
 */
protected $dialectType = mysql;

/**
 * @var string
 */
protected $type = mysql;

```

### Methods

```php
public function addForeignKey( string $tableName, string $schemaName, ReferenceInterface $reference ): bool;
```
Adds a foreign key to a table

```php
public function describeColumns( string $table, string $schema = null ): ColumnInterface[];
```
Returns an array of Phalcon\Db\Column objects describing a table

```php
print_r(
$connection->describeColumns("posts")
);
```

```php
public function describeIndexes( string $table, string $schema = null ): IndexInterface[];
```
Lists table indexes

```php
print_r(
$connection->describeIndexes("robots_parts")
);
```

```php
public function describeReferences( string $table, string $schema = null ): ReferenceInterface[];
```
Lists table references

```php
print_r(
$connection->describeReferences("robots_parts")
);
```

```php
protected function getDsnDefaults(): array;
```
Returns PDO adapter DSN defaults as a key-value map.

## Db\Adapter\Pdo\Postgresql 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/Pdo/Postgresql.zep)

-   __Namespace__

    - `Phalcon\Db\Adapter\Pdo`

-   __Uses__

    - `Phalcon\Db\Adapter\Pdo\AbstractPdo`
    - `Phalcon\Db\Column`
    - `Phalcon\Db\ColumnInterface`
    - `Phalcon\Db\Enum`
    - `Phalcon\Db\Exception`
    - `Phalcon\Db\RawValue`
    - `Phalcon\Db\Reference`
    - `Phalcon\Db\ReferenceInterface`
    - `Throwable`

-   __Extends__

    `PdoAdapter`

-   __Implements__

Specific functions for the PostgreSQL database system

```php
use Phalcon\Db\Adapter\Pdo\Postgresql;

$config = [
"host"     => "localhost",
"dbname"   => "blog",
"port"     => 5432,
"username" => "postgres",
"password" => "secret",
];

$connection = new Postgresql($config);
```

### Properties
```php
/**
 * @var string
 */
protected $dialectType = postgresql;

/**
 * @var string
 */
protected $type = pgsql;

```

### Methods

```php
public function __construct( array $descriptor );
```
Constructor for Phalcon\Db\Adapter\Pdo\Postgresql

```php
public function connect( array $descriptor = [] ): void;
```
This method is automatically called in Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection.

```php
public function createTable( string $tableName, string $schemaName, array $definition ): bool;
```
Creates a table

```php
public function describeColumns( string $table, string $schema = null ): ColumnInterface[];
```
Returns an array of Phalcon\Db\Column objects describing a table

```php
print_r(
$connection->describeColumns("posts")
);
```

```php
public function describeReferences( string $table, string $schema = null ): ReferenceInterface[];
```
Lists table references

```php
print_r(
$connection->describeReferences("robots_parts")
);
```

```php
public function getDefaultIdValue(): RawValue;
```
Returns the default identity value to be inserted in an identity column

```php
// Inserting a new robot with a valid default value for the column 'id'
$success = $connection->insert(
"robots",
[
    $connection->getDefaultIdValue(),
    "Astro Boy",
    1952,
],
[
    "id",
    "name",
    "year",
]
);
```

```php
public function modifyColumn( string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface $currentColumn = null ): bool;
```
Modifies a table column based on a definition

```php
public function supportSequences(): bool;
```
Check whether the database system requires a sequence to produce
auto-numeric values

```php
public function useExplicitIdValue(): bool;
```
Check whether the database system requires an explicit value for identity
columns

```php
protected function getDsnDefaults(): array;
```
Returns PDO adapter DSN defaults as a key-value map.

## Db\Adapter\Pdo\Sqlite 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/Pdo/Sqlite.zep)

-   __Namespace__

    - `Phalcon\Db\Adapter\Pdo`

-   __Uses__

    - `Phalcon\Db\Adapter\Pdo\AbstractPdo`
    - `Phalcon\Db\Column`
    - `Phalcon\Db\ColumnInterface`
    - `Phalcon\Db\Enum`
    - `Phalcon\Db\Exception`
    - `Phalcon\Db\Index`
    - `Phalcon\Db\IndexInterface`
    - `Phalcon\Db\RawValue`
    - `Phalcon\Db\Reference`
    - `Phalcon\Db\ReferenceInterface`

-   __Extends__

    `PdoAdapter`

-   __Implements__

Specific functions for the SQLite database system

```php
use Phalcon\Db\Adapter\Pdo\Sqlite;

$connection = new Sqlite(
[
    "dbname" => "/tmp/test.sqlite",
]
);
```

### Properties
```php
/**
 * @var string
 */
protected $dialectType = sqlite;

/**
 * @var string
 */
protected $type = sqlite;

```

### Methods

```php
public function __construct( array $descriptor );
```
Constructor for Phalcon\Db\Adapter\Pdo\Sqlite

```php
public function connect( array $descriptor = [] ): void;
```
This method is automatically called in Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection.

```php
public function describeColumns( string $table, string $schema = null ): ColumnInterface[];
```
Returns an array of Phalcon\Db\Column objects describing a table

```php
print_r(
$connection->describeColumns("posts")
);
```

```php
public function describeIndexes( string $table, string $schema = null ): IndexInterface[];
```
Lists table indexes

```php
print_r(
$connection->describeIndexes("robots_parts")
);
```

```php
public function describeReferences( string $table, string $schema = null ): ReferenceInterface[];
```
Lists table references

```php
public function getDefaultValue(): RawValue;
```
Returns the default value to make the RBDM use the default value declared
in the table definition

```php
// Inserting a new robot with a valid default value for the column 'year'
$success = $connection->insert(
"robots",
[
    "Astro Boy",
    $connection->getDefaultValue(),
],
[
    "name",
    "year",
]
);
```

```php
public function supportsDefaultValue(): bool;
```
SQLite does not support the DEFAULT keyword

@deprecated Will re removed in the next version

```php
public function useExplicitIdValue(): bool;
```
Check whether the database system requires an explicit value for identity
columns

```php
protected function getDsnDefaults(): array;
```
Returns PDO adapter DSN defaults as a key-value map.

## Db\Adapter\PdoFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/PdoFactory.zep)

-   __Namespace__

    - `Phalcon\Db\Adapter`

-   __Uses__

    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Support\Helper\Arr\Get`

-   __Extends__

    `AbstractFactory`

-   __Implements__

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

### Methods

```php
public function __construct( array $services = [] );
```
Constructor

```php
public function load( mixed $config ): AdapterInterface;
```
Factory to create an instance from a Config object

```php
public function newInstance( string $name, array $options = [] ): AdapterInterface;
```
Create a new instance of the adapter

```php
protected function getExceptionClass(): string;
```

```php
protected function getServices(): array;
```
Returns the available adapters

## Db\Check 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Check.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

-   __Extends__

-   __Implements__

    - `CheckInterface`

Allows to define `CHECK` constraints on tables. CHECK constraints enforce
a boolean SQL predicate on each row of the table; rows that fail the
predicate are rejected at INSERT/UPDATE time.

```php
use Phalcon\Db\Check;

$positivePrice = new Check(
"chk_price_positive",
[
    "expression" => "price > 0",
]
);

// Used inside a createTable() definition
$connection->createTable(
"products",
null,
[
    "columns" => [ ... ],
    "checks"  => [$positivePrice],
]
);

// Or added to an existing table (MySQL 8.0.16+ and PostgreSQL).
// SQLite cannot add CHECK constraints to existing tables.
$connection->addCheck("products", null, $positivePrice);
```

### Properties
```php
/**
 * The boolean SQL predicate this constraint enforces.
 *
 * @var string
 */
protected $expression;

/**
 * The CHECK constraint name. An empty string indicates an unnamed
 * constraint - the dialect will emit the clause without a `CONSTRAINT`
 * prefix in that case.
 *
 * @var string
 */
protected $name;

```

### Methods

```php
public function __construct( string $name, array $definition );
```
Phalcon\Db\Check constructor

```php
public function getExpression(): string;
```
Returns the CHECK expression

```php
public function getName(): string;
```
Returns the constraint name (may be an empty string for unnamed)

## Db\CheckInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/CheckInterface.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

    - `Phalcon\Contracts\Db\Check`

-   __Extends__

    `CheckContract`

-   __Implements__

Phalcon\Db\CheckInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use \{@see \Phalcon\Contracts\Db\Check\} instead.

## Db\Column 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Column.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

-   __Extends__

-   __Implements__

    - `ColumnInterface`

Allows to define columns to be used on create or alter table operations

```php
use Phalcon\Db\Column as Column;

// Column definition
$column = new Column(
"id",
[
    "type"          => Column::TYPE_INTEGER,
    "size"          => 10,
    "unsigned"      => true,
    "notNull"       => true,
    "autoIncrement" => true,
    "first"         => true,
    "comment"       => "",
]
);

// Add column to existing table
$connection->addColumn("robots", null, $column);
```

### Constants
```php
const BIND_PARAM_BLOB = 3;
const BIND_PARAM_BOOL = 5;
const BIND_PARAM_DECIMAL = 32;
const BIND_PARAM_INT = 1;
const BIND_PARAM_NULL = 0;
const BIND_PARAM_STR = 2;
const BIND_SKIP = 1024;
const TYPE_BIGINTEGER = 14;
const TYPE_BINARY = 27;
const TYPE_BIT = 19;
const TYPE_BLOB = 11;
const TYPE_BOOLEAN = 8;
const TYPE_BYTEA = 30;
const TYPE_CHAR = 5;
const TYPE_CIDR = 32;
const TYPE_DATE = 1;
const TYPE_DATERANGE = 39;
const TYPE_DATETIME = 4;
const TYPE_DECIMAL = 3;
const TYPE_DOUBLE = 9;
const TYPE_ENUM = 18;
const TYPE_FLOAT = 7;
const TYPE_GEOMETRY = 40;
const TYPE_GEOMETRYCOLLECTION = 47;
const TYPE_INET = 31;
const TYPE_INT4RANGE = 34;
const TYPE_INT8RANGE = 35;
const TYPE_INTEGER = 0;
const TYPE_JSON = 15;
const TYPE_JSONB = 16;
const TYPE_LINESTRING = 42;
const TYPE_LONGBLOB = 13;
const TYPE_LONGTEXT = 24;
const TYPE_MACADDR = 33;
const TYPE_MEDIUMBLOB = 12;
const TYPE_MEDIUMINTEGER = 21;
const TYPE_MEDIUMTEXT = 23;
const TYPE_MULTILINESTRING = 45;
const TYPE_MULTIPOINT = 44;
const TYPE_MULTIPOLYGON = 46;
const TYPE_NUMRANGE = 36;
const TYPE_POINT = 41;
const TYPE_POLYGON = 43;
const TYPE_SMALLINTEGER = 22;
const TYPE_TEXT = 6;
const TYPE_TIME = 20;
const TYPE_TIMESTAMP = 17;
const TYPE_TINYBLOB = 10;
const TYPE_TINYINTEGER = 26;
const TYPE_TINYTEXT = 25;
const TYPE_TSRANGE = 37;
const TYPE_TSTZRANGE = 38;
const TYPE_UUID = 29;
const TYPE_VARBINARY = 28;
const TYPE_VARCHAR = 2;
```

### Properties
```php
/**
 * Column Position
 *
 * @var string|null
 */
protected $after;

/**
 * Whether the column is an array of its base type. Recognized by the
 * PostgreSQL dialect (e.g. `INTEGER[]`, `TEXT[]`). MySQL and SQLite
 * ignore the flag.
 *
 * @var bool
 */
protected $isArray = false;

/**
 * Column is autoIncrement?
 *
 * @var bool
 */
protected $autoIncrement = false;

/**
 * Bind Type
 *
 * @var int
 */
protected $bindType = 2;

/**
 * Column's comment
 *
 * @var string|null
 */
protected $comment;

/**
 * Default column value
 *
 * @var mixed|null
 */
protected $defaultValue;

/**
 * Position is first
 *
 * @var bool
 */
protected $first = false;

/**
 * Generation expression for `GENERATED ALWAYS AS (...)`. Null when the
 * column is not a generated/computed column.
 *
 * @var string|null
 */
protected $generated;

/**
 * Whether a generated column is `STORED` (true) or `VIRTUAL` (false).
 * Ignored when the column is not generated. PostgreSQL only supports
 * `STORED` and emits it regardless of this flag.
 *
 * @var bool
 */
protected $generationStored = false;

/**
 * The column have some numeric type?
 *
 * @var bool
 */
protected $isNumeric = false;

/**
 * Whether the column is `INVISIBLE` (MySQL 8.0.23+). Invisible columns
 * are excluded from `SELECT *` expansion but can still be referenced
 * explicitly.
 *
 * @var bool
 */
protected $invisible = false;

/**
 * Column's name
 *
 * @var string
 */
protected $name;

/**
 * Column not nullable?
 *
 * Default SQL definition is NOT NULL.
 *
 * @var bool
 */
protected $notNull = true;

/**
 * Column is part of the primary key?
 *
 * @var bool
 */
protected $primary = false;

/**
 * Integer column number scale
 *
 * @var int
 */
protected $scale = ;

/**
 * Integer column size
 *
 * @var int|string
 */
protected $size = ;

/**
 * Column data type
 *
 * @var int
 */
protected $type;

/**
 * Column data type reference
 *
 * @var int
 */
protected $typeReference = -1;

/**
 * Column data type values
 *
 * @var array|string
 */
protected $typeValues;

/**
 * Integer column unsigned?
 *
 * @var bool
 */
protected $unsigned = false;

```

### Methods

```php
public function __construct( string $name, array $definition );
```
Phalcon\Db\Column constructor

```php
public function getAfterPosition(): string | null;
```
Check whether field absolute to position in table

```php
public function getBindType(): int;
```
Returns the type of bind handling

```php
public function getComment(): string | null;
```
Column's comment

```php
public function getDefault(): mixed;
```
Default column value

```php
public function getGenerationExpression(): string | null;
```
Returns the generation expression for a generated/computed column.
Returns `null` when the column is not generated.

```php
public function getName(): string;
```
Column's name

```php
public function getScale(): int;
```
Integer column number scale

```php
public function getSize(): int | string;
```
Integer column size

```php
public function getType(): int | string;
```
Column data type

```php
public function getTypeReference(): int;
```
Column data type reference

```php
public function getTypeValues(): array | string;
```
Column data type values

```php
public function hasDefault(): bool;
```
Check whether column has default value

```php
public function isArray(): bool;
```
Whether the column is an array of its base type. Recognized by the
PostgreSQL dialect (e.g. `INTEGER[]`, `TEXT[]`); MySQL and SQLite
ignore the flag.

```php
public function isAutoIncrement(): bool;
```
Auto-Increment

```php
public function isFirst(): bool;
```
Check whether column have first position in table

```php
public function isGenerated(): bool;
```
Whether the column is a generated/computed column.

```php
public function isGenerationStored(): bool;
```
Whether a generated column is `STORED`. `false` means `VIRTUAL`.
Always meaningful only when `isGenerated()` is `true`.

```php
public function isInvisible(): bool;
```
Whether the column is declared `INVISIBLE` (MySQL 8.0.23+). Invisible
columns are excluded from `SELECT` expansion but can still be
referenced explicitly. PostgreSQL and SQLite have no equivalent and
dialects targeting them ignore the flag.

```php
public function isNotNull(): bool;
```
Not null

```php
public function isNumeric(): bool;
```
Check whether column have an numeric type

```php
public function isPrimary(): bool;
```
Column is part of the primary key?

```php
public function isUnsigned(): bool;
```
Returns true if number column is unsigned

## Db\ColumnInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/ColumnInterface.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

    - `Phalcon\Contracts\Db\Column`

-   __Extends__

    `ColumnContract`

-   __Implements__

Phalcon\Db\ColumnInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use \{@see \Phalcon\Contracts\Db\Column\} instead.

## Db\Dialect ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Dialect.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

    - `Phalcon\Support\Settings`

-   __Extends__

-   __Implements__

    - `DialectInterface`

This is the base class to each database dialect. This implements
common methods to transform intermediate code into its RDBMS related syntax

### Properties
```php
/**
 * @var string
 */
protected $escapeChar;

/**
 * @var array
 */
protected $customFunctions;

```

### Methods

```php
public function createMaterializedView( string $viewName, array $definition, string $schemaName = null ): string;
```
Generates SQL to create a materialized view. Supported by PostgreSQL
(`CREATE MATERIALIZED VIEW name AS <sql>`). Other dialects inherit
this throw - MySQL and SQLite have no materialized-view concept.

```php
public function createSavepoint( string $name ): string;
```
Generate SQL to create a new savepoint

```php
public function dropMaterializedView( string $viewName, string $schemaName = null, bool $ifExists = bool ): string;
```
Generates SQL to drop a materialized view. Supported by PostgreSQL.

```php
final public function escape( string $str, string $escapeChar = null ): string;
```
Escape identifiers

```php
final public function escapeSchema( string $str, string $escapeChar = null ): string;
```
Escape Schema

```php
public function forUpdate( string $sqlQuery, string $modifier = string ): string;
```
Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword.

```php
$sql = $dialect->forUpdate("SELECTFROM robots");
echo $sql; // SELECTFROM robots FOR UPDATE

$sql = $dialect->forUpdate(
"SELECTFROM robots",
Dialect::LOCK_NOWAIT
);
echo $sql; // SELECTFROM robots FOR UPDATE NOWAIT

$sql = $dialect->forUpdate(
"SELECTFROM robots",
Dialect::LOCK_SKIP_LOCKED
);
echo $sql; // SELECTFROM robots FOR UPDATE SKIP LOCKED
```

```php
final public function getColumnList( array $columnList, string $escapeChar = null, array $bindCounts = [] ): string;
```
Gets a list of columns with escaped identifiers

```php
echo $dialect->getColumnList(
[
    "column1",
    "column",
]
);
```

```php
public function getCustomFunctions(): array;
```
Returns registered functions

```php
final public function getSqlColumn( mixed $column, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve Column expressions

```php
public function getSqlExpression( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Transforms an intermediate representation for an expression into a database system valid expression

```php
final public function getSqlTable( mixed $table, string $escapeChar = null ): string;
```
Transform an intermediate representation of a schema/table into a
database system valid expression

```php
public function limit( string $sqlQuery, mixed $number ): string;
```
Generates the SQL for LIMIT clause

```php
// SELECTFROM robots LIMIT 10
echo $dialect->limit(
"SELECTFROM robots",
10
);

// SELECTFROM robots LIMIT 10 OFFSET 50
echo $dialect->limit(
"SELECTFROM robots",
[10, 50]
);
```

```php
public function onConflictUpdate( string $sqlQuery, array $conflictColumns, array $updateColumns ): string;
```
Appends an `ON CONFLICT (col, ...) DO UPDATE SET col = excluded.col`
upsert clause to the supplied INSERT statement. The syntax is the
SQL standard form recognized by PostgreSQL (9.5+) and SQLite (3.24+).
MySQL overrides this method to throw because its `ON DUPLICATE KEY
UPDATE` has a different shape (deferred to parser item #23).

```php
public function refreshMaterializedView( string $viewName, string $schemaName = null, bool $concurrent = bool ): string;
```
Generates SQL to refresh a materialized view. Supported by
PostgreSQL. Pass `concurrent = true` for `REFRESH MATERIALIZED VIEW
CONCURRENTLY ...`, which avoids blocking concurrent SELECTs (requires
the view to have a unique index).

```php
public function registerCustomFunction( string $name, callable $customFunction ): Dialect;
```
Registers custom SQL functions

```php
public function releaseSavepoint( string $name ): string;
```
Generate SQL to release a savepoint

```php
public function returning( string $sqlQuery, array $columns ): string;
```
Returns a SQL statement extended with a `RETURNING` clause so the
INSERT/UPDATE/DELETE returns rows. Supported by PostgreSQL and
SQLite 3.35+. Pass `["*"]` for `RETURNING`, or a list of column
names. The base implementation throws - MySQL inherits it because
MySQL has no RETURNING construct.

```php
public function rollbackSavepoint( string $name ): string;
```
Generate SQL to rollback a savepoint

```php
public function select( array $definition ): string;
```
Builds a SELECT statement

```php
public function supportsReleaseSavepoints(): bool;
```
Checks whether the platform supports releasing savepoints.

```php
public function supportsSavepoints(): bool;
```
Checks whether the platform supports savepoints

```php
protected function checkColumnType( ColumnInterface $column ): string;
```
Checks the column type and if not string it returns the type reference

```php
protected function checkColumnTypeSql( ColumnInterface $column ): string;
```
Checks the column type and returns the updated SQL statement

```php
protected function getCheckClause( CheckInterface $check, string $escapeChar = string ): string;
```
Builds a CHECK constraint clause from a `CheckInterface`, using the
provided escape character for the constraint name (so each dialect
gets its native quoting). Returns the clause body - the dialect's
`createTable()` / `addCheck()` is expected to prefix `ADD` or place
the result on its own line as appropriate.

```php
protected function getColumnSize( ColumnInterface $column ): string;
```
Returns the size of the column enclosed in parentheses

```php
protected function getColumnSizeAndScale( ColumnInterface $column ): string;
```
Returns the column size and scale enclosed in parentheses

```php
protected function getGeneratedClause( ColumnInterface $column, bool $forceStored = bool ): string;
```
Builds the `GENERATED ALWAYS AS (<expr>) VIRTUAL|STORED` clause for a
generated/computed column. Returns an empty string when the column is
not generated. When `forceStored` is `true` the clause is always emitted
as `STORED` regardless of the column's `isGenerationStored()` flag -
PostgreSQL uses this since it only supports stored generated columns.

```php
protected function getIndexColumnList( IndexInterface $index, bool $wrapExpressions = bool ): string;
```
Builds the per-index parenthesized column list, honoring per-column
sort directions when the index declares any. Returns the bare
comma-separated `getColumnList()` output when no directions are set,
preserving the legacy rendering exactly. When directions are set,
each column is followed by ` ASC` or ` DESC`; trailing positions
absent from the directions array default to `ASC`.

```php
final protected function getSqlExpressionAll( array $expression, string $escapeChar = null ): string;
```
Resolve

```php
final protected function getSqlExpressionBinaryOperations( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve binary operations expressions

```php
final protected function getSqlExpressionCase( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve CASE expressions

```php
final protected function getSqlExpressionCastValue( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve CAST of values

```php
final protected function getSqlExpressionConvertValue( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve CONVERT of values encodings

```php
final protected function getSqlExpressionFrom( mixed $expression, string $escapeChar = null ): string;
```
Resolve a FROM clause

```php
final protected function getSqlExpressionFunctionCall( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve function calls

```php
final protected function getSqlExpressionGroupBy( mixed $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve a GROUP BY clause

```php
final protected function getSqlExpressionHaving( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve a HAVING clause

```php
final protected function getSqlExpressionJoins( mixed $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve a JOINs clause

```php
final protected function getSqlExpressionLimit( mixed $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve a LIMIT clause

```php
final protected function getSqlExpressionList( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve Lists

```php
final protected function getSqlExpressionObject( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve object expressions

```php
final protected function getSqlExpressionOrderBy( mixed $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve an ORDER BY clause

```php
final protected function getSqlExpressionQualified( array $expression, string $escapeChar = null ): string;
```
Resolve qualified expressions

```php
final protected function getSqlExpressionScalar( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve Column expressions

```php
final protected function getSqlExpressionUnaryOperations( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve unary operations expressions

```php
final protected function getSqlExpressionWhere( mixed $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Resolve a WHERE clause

```php
protected function prepareColumnAlias( string $qualified, string $alias = null, string $escapeChar = null ): string;
```
Prepares column for this RDBMS

```php
protected function prepareQualified( string $column, string $domain = null, string $escapeChar = null ): string;
```
Prepares qualified for this RDBMS

```php
protected function prepareTable( string $table, string $schema = null, string $alias = null, string $escapeChar = null ): string;
```
Prepares table for this RDBMS

## Db\Dialect\Mysql 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Dialect/Mysql.zep)

-   __Namespace__

    - `Phalcon\Db\Dialect`

-   __Uses__

    - `Phalcon\Db\CheckInterface`
    - `Phalcon\Db\Column`
    - `Phalcon\Db\ColumnInterface`
    - `Phalcon\Db\Dialect`
    - `Phalcon\Db\DialectInterface`
    - `Phalcon\Db\Exception`
    - `Phalcon\Db\IndexInterface`
    - `Phalcon\Db\RawValue`
    - `Phalcon\Db\ReferenceInterface`

-   __Extends__

    `Dialect`

-   __Implements__

Generates database specific SQL for the MySQL RDBMS

### Properties
```php
/**
 * @var string
 */
protected $escapeChar = `;

```

### Methods

```php
public function addCheck( string $tableName, string $schemaName, CheckInterface $check ): string;
```
Generates SQL to add a CHECK constraint to an existing table.
Enforced by MySQL 8.0.16+.

```php
public function addColumn( string $tableName, string $schemaName, ColumnInterface $column ): string;
```
Generates SQL to add a column to a table

```php
public function addForeignKey( string $tableName, string $schemaName, ReferenceInterface $reference ): string;
```
Generates SQL to add an index to a table

```php
public function addIndex( string $tableName, string $schemaName, IndexInterface $index ): string;
```
Generates SQL to add an index to a table

```php
public function addPrimaryKey( string $tableName, string $schemaName, IndexInterface $index ): string;
```
Generates SQL to add the primary key to a table

```php
public function createTable( string $tableName, string $schemaName, array $definition ): string;
```
Generates SQL to create a table

```php
public function createView( string $viewName, array $definition, string $schemaName = null ): string;
```
Generates SQL to create a view

```php
public function describeColumns( string $table, string $schema = null ): string;
```
Generates SQL describing a table

```php
print_r(
$dialect->describeColumns("posts")
);
```

```php
public function describeIndexes( string $table, string $schema = null ): string;
```
Generates SQL to query indexes on a table

```php
public function describeReferences( string $table, string $schema = null ): string;
```
Generates SQL to query foreign keys on a table

```php
public function dropCheck( string $tableName, string $schemaName, string $checkName ): string;
```
Generates SQL to delete a CHECK constraint from a table

```php
public function dropColumn( string $tableName, string $schemaName, string $columnName ): string;
```
Generates SQL to delete a column from a table

```php
public function dropForeignKey( string $tableName, string $schemaName, string $referenceName ): string;
```
Generates SQL to delete a foreign key from a table

```php
public function dropIndex( string $tableName, string $schemaName, string $indexName ): string;
```
Generates SQL to delete an index from a table

```php
public function dropPrimaryKey( string $tableName, string $schemaName ): string;
```
Generates SQL to delete primary key from a table

```php
public function dropTable( string $tableName, string $schemaName = null, bool $ifExists = bool ): string;
```
Generates SQL to drop a table

```php
public function dropView( string $viewName, string $schemaName = null, bool $ifExists = bool ): string;
```
Generates SQL to drop a view

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```
Gets the column name in MySQL

```php
public function getForeignKeyChecks(): string;
```
Generates SQL to check DB parameter FOREIGN_KEY_CHECKS.

```php
public function listTables( string $schemaName = null ): string;
```
List all tables in database

```php
print_r(
$dialect->listTables("blog")
);
```

```php
public function listViews( string $schemaName = null ): string;
```
Generates the SQL to list all views of a schema or user

```php
public function modifyColumn( string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface $currentColumn = null ): string;
```
Generates SQL to modify a column in a table

```php
public function onConflictUpdate( string $sqlQuery, array $conflictColumns, array $updateColumns ): string;
```
MySQL does not support the SQL-standard `ON CONFLICT DO UPDATE`
upsert syntax - it has its own `INSERT ... ON DUPLICATE KEY UPDATE`
which requires PHQL grammar work (deferred). The base helper is
overridden here to throw, preventing accidental emission of invalid
SQL on MySQL connections.

```php
public function sharedLock( string $sqlQuery, string $modifier = string ): string;
```
Returns a SQL modified with a LOCK IN SHARE MODE clause. The `modifier`
argument is accepted for signature parity with the contract but is
silently ignored on MySQL - its legacy `LOCK IN SHARE MODE` syntax has
no `NOWAIT` / `SKIP LOCKED` variant. Callers needing those modifiers
should target PostgreSQL or stay on `forUpdate()`.

```php
$sql = $dialect->sharedLock("SELECTFROM robots");

echo $sql; // SELECTFROM robots LOCK IN SHARE MODE
```

```php
public function tableExists( string $tableName, string $schemaName = null ): string;
```
Generates SQL checking for the existence of a schema.table

```php
echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");
```

```php
public function tableOptions( string $table, string $schema = null ): string;
```
Generates the SQL to describe the table creation options

```php
public function truncateTable( string $tableName, string $schemaName ): string;
```
Generates SQL to truncate a table

```php
public function viewExists( string $viewName, string $schemaName = null ): string;
```
Generates SQL checking for the existence of a schema.view

```php
protected function getTableOptions( array $definition ): string;
```
Generates SQL to add the table creation options

## Db\Dialect\Postgresql 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Dialect/Postgresql.zep)

-   __Namespace__

    - `Phalcon\Db\Dialect`

-   __Uses__

    - `Phalcon\Db\CheckInterface`
    - `Phalcon\Db\Column`
    - `Phalcon\Db\ColumnInterface`
    - `Phalcon\Db\Dialect`
    - `Phalcon\Db\DialectInterface`
    - `Phalcon\Db\Exception`
    - `Phalcon\Db\IndexInterface`
    - `Phalcon\Db\RawValue`
    - `Phalcon\Db\ReferenceInterface`

-   __Extends__

    `Dialect`

-   __Implements__

Generates database specific SQL for the PostgreSQL RDBMS

### Properties
```php
/**
 * @var string
 */
protected $escapeChar = \";

```

### Methods

```php
public function addCheck( string $tableName, string $schemaName, CheckInterface $check ): string;
```
Generates SQL to add a CHECK constraint to an existing table.

```php
public function addColumn( string $tableName, string $schemaName, ColumnInterface $column ): string;
```
Generates SQL to add a column to a table

```php
public function addForeignKey( string $tableName, string $schemaName, ReferenceInterface $reference ): string;
```
Generates SQL to add an index to a table

```php
public function addIndex( string $tableName, string $schemaName, IndexInterface $index ): string;
```
Generates SQL to add an index to a table

```php
public function addPrimaryKey( string $tableName, string $schemaName, IndexInterface $index ): string;
```
Generates SQL to add the primary key to a table

```php
public function createMaterializedView( string $viewName, array $definition, string $schemaName = null ): string;
```
Generates SQL to create a materialized view.

```php
public function createTable( string $tableName, string $schemaName, array $definition ): string;
```
Generates SQL to create a table

```php
public function createView( string $viewName, array $definition, string $schemaName = null ): string;
```
Generates SQL to create a view

```php
public function describeColumns( string $table, string $schema = null ): string;
```
Generates SQL describing a table

```php
print_r(
$dialect->describeColumns("posts")
);
```

```php
public function describeIndexes( string $table, string $schema = null ): string;
```
Generates SQL to query indexes on a table

```php
public function describeReferences( string $table, string $schema = null ): string;
```
Generates SQL to query foreign keys on a table

```php
public function dropCheck( string $tableName, string $schemaName, string $checkName ): string;
```
Generates SQL to delete a CHECK constraint from a table

```php
public function dropColumn( string $tableName, string $schemaName, string $columnName ): string;
```
Generates SQL to delete a column from a table

```php
public function dropForeignKey( string $tableName, string $schemaName, string $referenceName ): string;
```
Generates SQL to delete a foreign key from a table

```php
public function dropIndex( string $tableName, string $schemaName, string $indexName ): string;
```
Generates SQL to delete an index from a table

```php
public function dropMaterializedView( string $viewName, string $schemaName = null, bool $ifExists = bool ): string;
```
Generates SQL to drop a materialized view.

```php
public function dropPrimaryKey( string $tableName, string $schemaName ): string;
```
Generates SQL to delete primary key from a table

```php
public function dropTable( string $tableName, string $schemaName = null, bool $ifExists = bool ): string;
```
Generates SQL to drop a table

```php
public function dropView( string $viewName, string $schemaName = null, bool $ifExists = bool ): string;
```
Generates SQL to drop a view

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```
Gets the column name in PostgreSQL

```php
public function listTables( string $schemaName = null ): string;
```
List all tables in database

```php
print_r(
$dialect->listTables("blog")
);
```

```php
public function listViews( string $schemaName = null ): string;
```
Generates the SQL to list all views of a schema or user

```php
public function modifyColumn( string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface $currentColumn = null ): string;
```
Generates SQL to modify a column in a table

```php
public function refreshMaterializedView( string $viewName, string $schemaName = null, bool $concurrent = bool ): string;
```
Generates SQL to refresh a materialized view. When `concurrent` is
true, emits `REFRESH MATERIALIZED VIEW CONCURRENTLY ...` (avoids
blocking concurrent SELECTs; requires a unique index on the view).

```php
public function returning( string $sqlQuery, array $columns ): string;
```
Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE
statement. Pass `["*"]` for `RETURNING`, or a list of column names.

```php
public function sharedLock( string $sqlQuery, string $modifier = string ): string;
```
Returns a SQL modified with a `FOR SHARE` clause - PostgreSQL's
equivalent of MySQL's `LOCK IN SHARE MODE`. The optional `modifier`
appends a row-lock disposition keyword (pass `Dialect::LOCK_NOWAIT`
or `Dialect::LOCK_SKIP_LOCKED`).

```php
echo $dialect->sharedLock("SELECTFROM robots");
// SELECTFROM robots FOR SHARE

echo $dialect->sharedLock(
"SELECTFROM robots",
Dialect::LOCK_NOWAIT
);
// SELECTFROM robots FOR SHARE NOWAIT
```

```php
public function tableExists( string $tableName, string $schemaName = null ): string;
```
Generates SQL checking for the existence of a schema.table

```php
echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");
```

```php
public function tableOptions( string $table, string $schema = null ): string;
```
Generates the SQL to describe the table creation options

```php
public function truncateTable( string $tableName, string $schemaName ): string;
```
Generates SQL to truncate a table

```php
public function viewExists( string $viewName, string $schemaName = null ): string;
```
Generates SQL checking for the existence of a schema.view

```php
protected function castDefault( ColumnInterface $column ): string;
```

```php
protected function getTableOptions( array $definition ): string;
```

## Db\Dialect\Sqlite 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Dialect/Sqlite.zep)

-   __Namespace__

    - `Phalcon\Db\Dialect`

-   __Uses__

    - `Phalcon\Db\CheckInterface`
    - `Phalcon\Db\Column`
    - `Phalcon\Db\ColumnInterface`
    - `Phalcon\Db\Dialect`
    - `Phalcon\Db\DialectInterface`
    - `Phalcon\Db\Exception`
    - `Phalcon\Db\IndexInterface`
    - `Phalcon\Db\RawValue`
    - `Phalcon\Db\ReferenceInterface`

-   __Extends__

    `Dialect`

-   __Implements__

Generates database specific SQL for the SQLite RDBMS

### Properties
```php
/**
 * @var string
 */
protected $escapeChar = \";

```

### Methods

```php
public function addCheck( string $tableName, string $schemaName, CheckInterface $check ): string;
```
SQLite cannot ALTER an existing table to add a CHECK constraint;
the constraint must be declared at CREATE TABLE time.

```php
public function addColumn( string $tableName, string $schemaName, ColumnInterface $column ): string;
```
Generates SQL to add a column to a table

```php
public function addForeignKey( string $tableName, string $schemaName, ReferenceInterface $reference ): string;
```
Generates SQL to add an index to a table

```php
public function addIndex( string $tableName, string $schemaName, IndexInterface $index ): string;
```
Generates SQL to add an index to a table

```php
public function addPrimaryKey( string $tableName, string $schemaName, IndexInterface $index ): string;
```
Generates SQL to add the primary key to a table

```php
public function createTable( string $tableName, string $schemaName, array $definition ): string;
```
Generates SQL to create a table

```php
public function createView( string $viewName, array $definition, string $schemaName = null ): string;
```
Generates SQL to create a view

```php
public function describeColumns( string $table, string $schema = null ): string;
```
Generates SQL describing a table

```php
print_r(
$dialect->describeColumns("posts")
);
```

```php
public function describeIndex( string $index ): string;
```
Generates SQL to query indexes detail on a table

```php
public function describeIndexes( string $table, string $schema = null ): string;
```
Generates SQL to query indexes on a table

```php
public function describeReferences( string $table, string $schema = null ): string;
```
Generates SQL to query foreign keys on a table

```php
public function dropCheck( string $tableName, string $schemaName, string $checkName ): string;
```
SQLite cannot DROP a CHECK constraint from an existing table.

```php
public function dropColumn( string $tableName, string $schemaName, string $columnName ): string;
```
Generates SQL to delete a column from a table.

SQLite 3.35+ supports `ALTER TABLE ... DROP COLUMN ...` directly. On
older versions the server rejects the statement at execution time;
cphalcon no longer pre-empts that rejection at the dialect level so
callers on 3.35+ can use the feature.

```php
public function dropForeignKey( string $tableName, string $schemaName, string $referenceName ): string;
```
Generates SQL to delete a foreign key from a table

```php
public function dropIndex( string $tableName, string $schemaName, string $indexName ): string;
```
Generates SQL to delete an index from a table

```php
public function dropPrimaryKey( string $tableName, string $schemaName ): string;
```
Generates SQL to delete primary key from a table

```php
public function dropTable( string $tableName, string $schemaName = null, bool $ifExists = bool ): string;
```
Generates SQL to drop a table

```php
public function dropView( string $viewName, string $schemaName = null, bool $ifExists = bool ): string;
```
Generates SQL to drop a view

```php
public function forUpdate( string $sqlQuery, string $modifier = string ): string;
```
Returns a SQL modified with a FOR UPDATE clause. SQLite has no
row-level locking, so the original query is returned unchanged
regardless of the `modifier` argument (`NOWAIT` / `SKIP LOCKED` are
silently ignored).

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```
Gets the column name in SQLite

```php
public function listIndexesSql( string $table, string $schema = null, string $keyName = null ): string;
```
Generates the SQL to get query list of indexes

```php
print_r(
$dialect->listIndexesSql("blog")
);
```

```php
public function listTables( string $schemaName = null ): string;
```
List all tables in database

```php
print_r(
$dialect->listTables("blog")
);
```

```php
public function listViews( string $schemaName = null ): string;
```
Generates the SQL to list all views of a schema or user

```php
public function modifyColumn( string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface $currentColumn = null ): string;
```
Generates SQL to modify a column in a table

```php
public function returning( string $sqlQuery, array $columns ): string;
```
Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE
statement. Supported by SQLite 3.35+. Pass `["*"]` for `RETURNING`,
or a list of column names.

```php
public function sharedLock( string $sqlQuery, string $modifier = string ): string;
```
SQLite has no row-level shared-lock construct, so the original query
is returned unchanged regardless of the `modifier` argument.

```php
public function tableExists( string $tableName, string $schemaName = null ): string;
```
Generates SQL checking for the existence of a schema.table

```php
echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");
```

```php
public function tableOptions( string $table, string $schema = null ): string;
```
Generates the SQL to describe the table creation options

```php
public function truncateTable( string $tableName, string $schemaName ): string;
```
Generates SQL to truncate a table

```php
public function viewExists( string $viewName, string $schemaName = null ): string;
```
Generates SQL checking for the existence of a schema.view

## Db\DialectInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/DialectInterface.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

    - `Phalcon\Contracts\Db\Dialect`

-   __Extends__

    `DialectContract`

-   __Implements__

Phalcon\Db\DialectInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use \{@see \Phalcon\Contracts\Db\Dialect\} instead.

## Db\Enum 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Enum.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

-   __Extends__

-   __Implements__

Constants for Phalcon\Db

### Constants
```php
const FETCH_ASSOC;
const FETCH_BOTH;
const FETCH_BOUND;
const FETCH_CLASS;
const FETCH_CLASSTYPE;
const FETCH_COLUMN;
const FETCH_DEFAULT;
const FETCH_FUNC;
const FETCH_GROUP;
const FETCH_INTO;
const FETCH_KEY_PAIR;
const FETCH_LAZY;
const FETCH_NAMED;
const FETCH_NUM;
const FETCH_OBJ;
const FETCH_ORI_NEXT;
const FETCH_PROPS_LATE;
const FETCH_SERIALIZE;
const FETCH_UNIQUE;
```

## Db\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exception.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

-   __Extends__

    `\Exception`

-   __Implements__

Exceptions thrown in Phalcon\Db will use this class

## Db\Index 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Index.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

-   __Extends__

-   __Implements__

    - `IndexInterface`

Allows to define indexes to be used on tables. Indexes are a common way
to enhance database performance. An index allows the database server to find
and retrieve specific rows much faster than it could do without an index.

The constructor accepts either the legacy positional form (a plain array
of column names) or a definition-array form (an associative array with a
`columns` key); the latter is the path used by features such as
`invisible` (MySQL 8.0+) and is the form that future per-index modifiers
will extend.

```php
// Legacy positional form
$unique = new \Phalcon\Db\Index(
'column_UNIQUE',
[
    'column',
],
'UNIQUE'
);

$primary = new \Phalcon\Db\Index(
'PRIMARY',
[
    'column',
]
);

// Definition-array form (MySQL 8.0+ invisible index)
$hidden = new \Phalcon\Db\Index(
'idx_hidden',
[
    'columns'   => ['col1'],
    'type'      => '',
    'invisible' => true,
]
);

$connection->addIndex("robots", null, $unique);
$connection->addIndex("robots", null, $primary);
$connection->addIndex("robots", null, $hidden);
```

### Properties
```php
/**
 * Index columns
 *
 * @var array
 */
protected $columns;

/**
 * Whether to build the index without taking a strong lock that blocks
 * writes - emits `CONCURRENTLY` between `INDEX` and the index name on
 * PostgreSQL (`CREATE INDEX CONCURRENTLY name ON ...`). MySQL and
 * SQLite have no equivalent and ignore the flag.
 *
 * @var bool
 */
protected $concurrent = false;

/**
 * Per-column sort directions (`ASC` / `DESC`). Empty array means
 * "emit no per-column direction" - preserves the legacy plain
 * `(col1, col2)` rendering. When populated, entries shorter than
 * the columns list default to `ASC` for the missing positions.
 *
 * @var array
 */
protected $directions;

/**
 * Whether the index is declared `INVISIBLE` (MySQL 8.0+). Invisible
 * indexes are ignored by the optimizer - useful for testing what
 * happens when an index is removed before actually dropping it.
 * PostgreSQL and SQLite have no equivalent and ignore the flag.
 *
 * @var bool
 */
protected $invisible = false;

/**
 * Index name
 *
 * @var string
 */
protected $name;

/**
 * Index type
 *
 * @var string
 */
protected $type = ;

/**
 * Optional partial-index `WHERE` predicate. Supported by PostgreSQL and
 * SQLite (`CREATE INDEX ... WHERE <expr>`); MySQL has no partial-index
 * concept and its dialect ignores this value. Empty string means no
 * predicate.
 *
 * @var string
 */
protected $where = ;

```

### Methods

```php
public function __construct( string $name, array $columnsOrDefinition, string $type = string );
```
Phalcon\Db\Index constructor.

Accepts either the legacy positional form `(name, columns, type)` or a
definition-array form `(name, ["columns" => [...], "type" => "...",
"invisible" => true, ...])`. Detection is based on the presence of a
`columns` key in the second argument; when present, the third
positional `type` argument is ignored in favor of the definition.

```php
public function getColumns(): array;
```
Index columns

```php
public function getDirections(): array;
```
Returns the per-column sort directions array (`ASC` / `DESC`).
Empty array means the index was declared without explicit per-column
directions and dialects emit the columns plainly. When populated,
entries are aligned with `getColumns()`; missing trailing positions
default to `ASC` at emission time.

```php
public function getName(): string;
```
Index name

```php
public function getType(): string;
```
Index type

```php
public function getWhere(): string;
```
Returns the partial-index `WHERE` predicate, or an empty string when
the index has none. Supported by PostgreSQL and SQLite; ignored by
the MySQL dialect (MySQL has no partial-index feature).

```php
public function isConcurrent(): bool;
```
Whether the index is built `CONCURRENTLY` (PostgreSQL only). MySQL
and SQLite have no equivalent and ignore the flag.

```php
public function isInvisible(): bool;
```
Whether the index is declared `INVISIBLE` (MySQL 8.0+). Invisible
indexes are ignored by the optimizer but still maintained, so they
can be flipped back to visible without a rebuild.

## Db\IndexInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/IndexInterface.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

    - `Phalcon\Contracts\Db\Index`

-   __Extends__

    `IndexContract`

-   __Implements__

Phalcon\Db\IndexInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use \{@see \Phalcon\Contracts\Db\Index\} instead.

## Db\Profiler 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Profiler.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

    - `Phalcon\Db\Profiler\Item`

-   __Extends__

-   __Implements__

Instances of Phalcon\Db can generate execution profiles
on SQL statements sent to the relational database. Profiled
information includes execution time in milliseconds.
This helps you to identify bottlenecks in your applications.

```php
use Phalcon\Db\Profiler;
use Phalcon\Events\Event;
use Phalcon\Events\Manager;

$profiler = new Profiler();
$eventsManager = new Manager();

$eventsManager->attach(
"db",
function (Event $event, $connection) use ($profiler) {
    if ($event->getType() === "beforeQuery") {
        $sql = $connection->getSQLStatement();

        // Start a profile with the active connection
        $profiler->startProfile($sql);
    }

    if ($event->getType() === "afterQuery") {
        // Stop the active profile
        $profiler->stopProfile();
    }
}
);

// Set the event manager on the connection
$connection->setEventsManager($eventsManager);

$sql = "SELECT buyer_name, quantity, product_name
FROM buyers LEFT JOIN products ON
buyers.pid=products.id";

// Execute a SQL statement
$connection->query($sql);

// Get the last profile in the profiler
$profile = $profiler->getLastProfile();

echo "SQL Statement: ", $profile->getSQLStatement(), "\n";
echo "Start Time: ", $profile->getInitialTime(), "\n";
echo "Final Time: ", $profile->getFinalTime(), "\n";
echo "Total Elapsed Time: ", $profile->getTotalElapsedSeconds(), "\n";
```

### Properties
```php
/**
 * Active Item
 *
 * @var Item
 */
protected $activeProfile;

/**
 * All the Items in the active profile
 *
 * @var Item[]
 */
protected $allProfiles;

/**
 * Total time spent by all profiles to complete in nanoseconds
 *
 * @var float
 */
protected $totalNanoseconds = ;

```

### Methods

```php
public function getLastProfile(): Item;
```
Returns the last profile executed in the profiler

```php
public function getNumberTotalStatements(): int;
```
Returns the total number of SQL statements processed

```php
public function getProfiles(): Item[];
```
Returns all the processed profiles

```php
public function getTotalElapsedMilliseconds(): double;
```
Returns the total time in milliseconds spent by the profiles

```php
public function getTotalElapsedNanoseconds(): double;
```
Returns the total time in nanoseconds spent by the profiles

```php
public function getTotalElapsedSeconds(): double;
```
Returns the total time in seconds spent by the profiles

```php
public function reset(): Profiler;
```
Resets the profiler, cleaning up all the profiles

```php
public function startProfile( string $sqlStatement, array $sqlVariables = [], array $sqlBindTypes = [] ): Profiler;
```
Starts the profile of a SQL sentence

```php
public function stopProfile(): Profiler;
```
Stops the active profile

## Db\Profiler\Item 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Profiler/Item.zep)

-   __Namespace__

    - `Phalcon\Db\Profiler`

-   __Uses__

-   __Extends__

-   __Implements__

This class identifies each profile in a Phalcon\Db\Profiler

### Properties
```php
/**
 * Timestamp when the profile ended
 *
 * @var double
 */
protected $finalTime;

/**
 * Timestamp when the profile started
 *
 * @var double
 */
protected $initialTime;

/**
 * SQL bind types related to the profile
 *
 * @var array
 */
protected $sqlBindTypes;

/**
 * SQL statement related to the profile
 *
 * @var string
 */
protected $sqlStatement;

/**
 * SQL variables related to the profile
 *
 * @var array
 */
protected $sqlVariables;

```

### Methods

```php
public function getFinalTime(): double;
```
Return the timestamp when the profile ended

```php
public function getInitialTime(): double;
```
Return the timestamp when the profile started

```php
public function getSqlBindTypes(): array;
```
Return the SQL bind types related to the profile

```php
public function getSqlStatement(): string;
```
Return the SQL statement related to the profile

```php
public function getSqlVariables(): array;
```
Return the SQL variables related to the profile

```php
public function getTotalElapsedMilliseconds(): double;
```
Returns the total time in milliseconds spent by the profile

```php
public function getTotalElapsedNanoseconds(): double;
```
Returns the total time in nanoseconds spent by the profile

```php
public function getTotalElapsedSeconds(): double;
```
Returns the total time in seconds spent by the profile

```php
public function setFinalTime( double $finalTime ): Item;
```
Return the timestamp when the profile ended

```php
public function setInitialTime( double $initialTime ): Item;
```
Return the timestamp when the profile started

```php
public function setSqlBindTypes( array $sqlBindTypes ): Item;
```
Return the SQL bind types related to the profile

```php
public function setSqlStatement( string $sqlStatement ): Item;
```
Return the SQL statement related to the profile

```php
public function setSqlVariables( array $sqlVariables ): Item;
```
Return the SQL variables related to the profile

## Db\RawValue 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/RawValue.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

-   __Extends__

-   __Implements__

This class allows to insert/update raw data without quoting or formatting.

The next example shows how to use the MySQL now() function as a field value.

```php
$subscriber = new Subscribers();

$subscriber->email     = "andres@phalcon.io";
$subscriber->createdAt = new \Phalcon\Db\RawValue("now()");

$subscriber->save();
```

### Properties
```php
/**
 * Raw value without quoting or formatting
 *
 * @var string
 */
protected $value;

```

### Methods

```php
public function __construct( mixed $value );
```
Phalcon\Db\RawValue constructor

```php
public function __toString(): string;
```

```php
public function getValue(): string;
```

## Db\Reference 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Reference.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

-   __Extends__

-   __Implements__

    - `ReferenceInterface`

Allows to define reference constraints on tables

```php
$reference = new \Phalcon\Db\Reference(
"field_fk",
[
    "referencedSchema"  => "invoicing",
    "referencedTable"   => "products",
    "columns"           => [
        "producttype",
        "product_code",
    ],
    "referencedColumns" => [
        "type",
        "code",
    ],
]
);
```

### Properties
```php
/**
 * Local reference columns
 *
 * @var array
 */
protected $columns;

/**
 * Constraint name
 *
 * @var string
 */
protected $name;

/**
 * Referenced Columns
 *
 * @var array
 */
protected $referencedColumns;

/**
 * Referenced Schema
 *
 * @var string
 */
protected $referencedSchema;

/**
 * Referenced Table
 *
 * @var string
 */
protected $referencedTable;

/**
 * Schema name
 *
 * @var string
 */
protected $schemaName;

/**
 * ON DELETE
 *
 * @var string
 */
protected $onDelete;

/**
 * ON UPDATE
 *
 * @var string
 */
protected $onUpdate;

```

### Methods

```php
public function __construct( string $name, array $definition );
```
Phalcon\Db\Reference constructor

```php
public function getColumns(): array;
```
Local reference columns

```php
public function getName(): string;
```
Constraint name

```php
public function getOnDelete(): string | null;
```
ON DELETE

```php
public function getOnUpdate(): string | null;
```
ON UPDATE

```php
public function getReferencedColumns(): array;
```
Referenced Columns

```php
public function getReferencedSchema(): string | null;
```
Referenced Schema

```php
public function getReferencedTable(): string;
```
Referenced Table

```php
public function getSchemaName(): string | null;
```
Schema name

## Db\ReferenceInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/ReferenceInterface.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

    - `Phalcon\Contracts\Db\Reference`

-   __Extends__

    `ReferenceContract`

-   __Implements__

Phalcon\Db\ReferenceInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use \{@see \Phalcon\Contracts\Db\Reference\} instead.

## Db\Result\PdoResult 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Result/PdoResult.zep)

-   __Namespace__

    - `Phalcon\Db\Result`

-   __Uses__

    - `Phalcon\Db\Adapter\AdapterInterface`
    - `Phalcon\Db\Enum`
    - `Phalcon\Db\ResultInterface`

-   __Extends__

-   __Implements__

    - `ResultInterface`

Encapsulates the resultset internals

```php
$result = $connection->query("SELECTFROM robots ORDER BY name");

$result->setFetchMode(
\Phalcon\Db\Enum::FETCH_NUM
);

while ($robot = $result->fetchArray()) {
print_r($robot);
}
```

### Properties
```php
/**
 * @var array
 */
protected $bindParams;

/**
 * @var array
 */
protected $bindTypes;

/**
 * @var AdapterInterface
 */
protected $connection;

/**
 * Active fetch mode
 *
 * @var int
 */
protected $fetchMode;

/**
 * Internal resultset
 *
 * @var \PDOStatement
 */
protected $pdoStatement;

/**
 * @var mixed
 * TODO: Check if this property is used
 */
protected $result;

/**
 * @var int|null
 */
protected $rowCount;

/**
 * @var string|null
 */
protected $sqlStatement;

```

### Methods

```php
public function __construct( AdapterInterface $connection, \PDOStatement $result, mixed $sqlStatement = null, mixed $bindParams = null, mixed $bindTypes = null );
```
Phalcon\Db\Result\Pdo constructor

```php
public function dataSeek( int $number ): void;
```
Moves internal resultset cursor to another position letting us to fetch a
certain row

```php
$result = $connection->query(
"SELECTFROM robots ORDER BY name"
);

// Move to third row on result
$result->dataSeek(2);

// Fetch third row
$row = $result->fetch();
```

```php
public function execute(): bool;
```
Allows to execute the statement again. Some database systems don't
support scrollable cursors. So, as cursors are forward only, we need to
execute the cursor again to fetch rows from the beginning

```php
public function fetch( int $fetchStyle = null, int $cursorOrientation = static-constant-access, int $cursorOffset = int );
```
Fetches an array/object of strings that corresponds to the fetched row,
or FALSE if there are no more rows. This method is affected by the active
fetch flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

```php
$result = $connection->query("SELECTFROM robots ORDER BY name");

$result->setFetchMode(
\Phalcon\Enum::FETCH_OBJ
);

while ($robot = $result->fetch()) {
echo $robot->name;
}
```

```php
public function fetchAll( int $mode = static-constant-access, mixed $fetchArgument = static-constant-access, mixed $constructorArgs = null ): array;
```
Returns an array of arrays containing all the records in the result
This method is affected by the active fetch flag set using
`Phalcon\Db\Result\Pdo::setFetchMode()`

```php
$result = $connection->query(
"SELECTFROM robots ORDER BY name"
);

$robots = $result->fetchAll();
```

```php
public function fetchArray();
```
Returns an array of strings that corresponds to the fetched row, or FALSE
if there are no more rows. This method is affected by the active fetch
flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

```php
$result = $connection->query("SELECTFROM robots ORDER BY name");

$result->setFetchMode(
\Phalcon\Enum::FETCH_NUM
);

while ($robot = result->fetchArray()) {
print_r($robot);
}
```

```php
public function getInternalResult(): \PDOStatement;
```
Gets the internal PDO result object

```php
public function numRows(): int;
```
Gets number of rows returned by a resultset

```php
$result = $connection->query(
"SELECTFROM robots ORDER BY name"
);

echo "There are ", $result->numRows(), " rows in the resultset";
```

```php
public function setFetchMode( int $fetchMode, mixed $colNoOrClassNameOrObject = null, mixed $ctorargs = null ): bool;
```
Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()

```php
// Return array with integer indexes
$result->setFetchMode(
\Phalcon\Enum::FETCH_NUM
);

// Return associative array without integer indexes
$result->setFetchMode(
\Phalcon\Enum::FETCH_ASSOC
);

// Return associative array together with integer indexes
$result->setFetchMode(
\Phalcon\Enum::FETCH_BOTH
);

// Return an object
$result->setFetchMode(
\Phalcon\Enum::FETCH_OBJ
);
```

## Db\ResultInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/ResultInterface.zep)

-   __Namespace__

    - `Phalcon\Db`

-   __Uses__

    - `Phalcon\Contracts\Db\Result`

-   __Extends__

    `ResultContract`

-   __Implements__

Phalcon\Db\ResultInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use \{@see \Phalcon\Contracts\Db\Result\} instead.

Source: https://docs.phalcon.io/5.13/api/phalcon_db/index.mdx
