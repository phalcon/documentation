---
title: "Database Abstraction Layer"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Database Abstraction Layer

## Overview

The components under the `Phalcon\Db` namespace are the ones responsible for powering the  [Phalcon\Mvc\Model][mvc-model] class - the `Model` in MVC for the framework. It consists of an independent high-level abstraction layer for database systems completely written in C.

This component allows for a lower level of database manipulation than using traditional models.

## Adapters

This component makes use of adapters to encapsulate specific database system details. Phalcon uses PDO to connect to databases. The following database engines are supported:

| Class                                                          | Description                                                                                                                                                                                                                          |
|----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Phalcon\Db\Adapter\Pdo\Mysql][db-adapter-pdo-mysql]           | Is the world's most used relational database management system (RDBMS) that runs as a server providing multi-user access to several databases                                                                                        |
| [Phalcon\Db\Adapter\Pdo\Postgresql][db-adapter-pdo-postgresql] | PostgreSQL is an open-source relational database system. It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness. |
| [Phalcon\Db\Adapter\Pdo\Sqlite][db-adapter-pdo-sqlite]         | SQLite is a software library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine                                                                                                     |

### Constants

The [Phalcon\Db\Enum][db-enum] class exposes several constants that can be used on the DB layer.

- `FETCH_ASSOC`      = `\Pdo::FETCH_ASSOC`
- `FETCH_BOTH`       = `\Pdo::FETCH_BOTH`
- `FETCH_BOUND`      = `\Pdo::FETCH_BOUND`
- `FETCH_CLASS`      = `\Pdo::FETCH_CLASS`
- `FETCH_CLASSTYPE`  = `\Pdo::FETCH_CLASSTYPE`
- `FETCH_COLUMN`     = `\Pdo::FETCH_COLUMN`
- `FETCH_FUNC`       = `\Pdo::FETCH_FUNC`
- `FETCH_GROUP`      = `\Pdo::FETCH_GROUP`
- `FETCH_INTO`       = `\Pdo::FETCH_INTO`
- `FETCH_KEY_PAIR`   = `\Pdo::FETCH_KEY_PAIR`
- `FETCH_LAZY`       = `\Pdo::FETCH_LAZY`
- `FETCH_NAMED`      = `\Pdo::FETCH_NAMED`
- `FETCH_NUM`        = `\Pdo::FETCH_NUM`
- `FETCH_OBJ`        = `\Pdo::FETCH_OBJ`
- `FETCH_PROPS_LATE` = `\Pdo::FETCH_PROPS_LATE`
- `FETCH_SERIALIZE`  = `\Pdo::FETCH_SERIALIZE`
- `FETCH_UNIQUE`     = `\Pdo::FETCH_UNIQUE`

Additional constants are available in the [Phalcon\Db\Column][db-column] object. This object is used to describe a column (or field) in a database table. These constants also define which types are supported by the ORM.

**Bind Types**

| Type                 | Description  |
|----------------------|--------------|
| `BIND_PARAM_BLOB`    | Blob         |
| `BIND_PARAM_BOOL`    | Bool         |
| `BIND_PARAM_DECIMAL` | Decimal      |
| `BIND_PARAM_INT`     | Integer      |
| `BIND_PARAM_NULL`    | Null         |
| `BIND_PARAM_STR`     | String       |
| `BIND_SKIP`          | Skip binding |

**Column Types**

| Type                 | Description    |
|----------------------|----------------|
| `TYPE_BIGINTEGER`    | Big integer    |
| `TYPE_BINARY`        | Binary         |
| `TYPE_BIT`           | Bit            |
| `TYPE_BLOB`          | Blob           |
| `TYPE_BOOLEAN`       | Boolean        |
| `TYPE_CHAR`          | Char           |
| `TYPE_DATE`          | Date           |
| `TYPE_DATETIME`      | Datetime       |
| `TYPE_DECIMAL`       | Decimal        |
| `TYPE_DOUBLE`        | Double         |
| `TYPE_ENUM`          | Enum           |
| `TYPE_FLOAT`         | Float          |
| `TYPE_INTEGER`       | Integer        |
| `TYPE_JSON`          | JSON           |
| `TYPE_JSONB`         | JSONB          |
| `TYPE_LONGBLOB`      | Long Blob      |
| `TYPE_LONGTEXT`      | Long Text      |
| `TYPE_MEDIUMBLOB`    | Medium Blob    |
| `TYPE_MEDIUMINTEGER` | Medium Integer |
| `TYPE_MEDIUMTEXT`    | Medium Text    |
| `TYPE_SMALLINTEGER`  | Small Integer  |
| `TYPE_TEXT`          | Text           |
| `TYPE_TIME`          | Time           |
| `TYPE_TIMESTAMP`     | Timestamp      |
| `TYPE_TINYBLOB`      | Tiny Blob      |
| `TYPE_TINYINTEGER`   | Tiny Integer   |
| `TYPE_TINYTEXT`      | Tiny Text      |
| `TYPE_UUID`          | UUID           |
| `TYPE_VARBINARY`     | Varbinary      |
| `TYPE_VARCHAR`       | Varchar        |

`TYPE_UUID` maps to the PostgreSQL native `uuid` column type via `Phalcon\Db\Adapter\Pdo\Postgresql` and `Phalcon\Db\Dialect\Postgresql`. Other adapters fall back to a string representation.

**PostgreSQL-specific Column Types**

The constants below describe column types that only have a native definition in PostgreSQL. They are recognized by the `Phalcon\Db\Dialect\Postgresql` dialect; MySQL and SQLite dialects fall back to the `VARCHAR` `default` branch. Choose a portable base type if your schema targets multiple engines.

| Type             | PostgreSQL keyword | Description                                   |
|------------------|--------------------|-----------------------------------------------|
| `TYPE_BYTEA`     | `BYTEA`            | Variable-length binary data (PostgreSQL BLOB) |
| `TYPE_CIDR`      | `CIDR`             | IPv4 / IPv6 network address                   |
| `TYPE_DATERANGE` | `DATERANGE`        | Range of dates                                |
| `TYPE_INET`      | `INET`             | IPv4 / IPv6 host address                      |
| `TYPE_INT4RANGE` | `INT4RANGE`        | Range of `integer` values                     |
| `TYPE_INT8RANGE` | `INT8RANGE`        | Range of `bigint` values                      |
| `TYPE_MACADDR`   | `MACADDR`          | MAC address                                   |
| `TYPE_NUMRANGE`  | `NUMRANGE`         | Range of `numeric` values                     |
| `TYPE_TSRANGE`   | `TSRANGE`          | Range of `timestamp without time zone`        |
| `TYPE_TSTZRANGE` | `TSTZRANGE`        | Range of `timestamp with time zone`           |

**Spatial Column Types**

The constants below describe spatial types defined natively by MySQL (5.7+) and through the PostGIS extension on PostgreSQL. SQLite has no native spatial type and the SQLite dialect leaves these constants in the `default` branch.

| Type                      | DDL keyword          | Description                                  |
|---------------------------|----------------------|----------------------------------------------|
| `TYPE_GEOMETRY`           | `GEOMETRY`           | Generic spatial value                        |
| `TYPE_GEOMETRYCOLLECTION` | `GEOMETRYCOLLECTION` | Collection of spatial values                 |
| `TYPE_LINESTRING`         | `LINESTRING`         | Single line as an ordered sequence of points |
| `TYPE_MULTILINESTRING`    | `MULTILINESTRING`    | Collection of `LINESTRING` values            |
| `TYPE_MULTIPOINT`         | `MULTIPOINT`         | Collection of `POINT` values                 |
| `TYPE_MULTIPOLYGON`       | `MULTIPOLYGON`       | Collection of `POLYGON` values               |
| `TYPE_POINT`              | `POINT`              | Single (x, y) point                          |
| `TYPE_POLYGON`            | `POLYGON`            | Closed planar region                         |

:::info[NOTE]
Selecting a spatial column with `SELECT col FROM table` returns the raw WKB byte string. Use `ST_AsText(col)` / `ST_AsBinary(col)` / `ST_AsGeoJSON(col)` (PostGIS) server-side to receive a human-readable representation.
:::

:::info[NOTE]
Depending on your RDBMS, certain types will not be available (e.g. `JSON` is not supported for Sqlite).
:::

### Methods

```php
public function addColumn(
string $tableName, 
string $schemaName, 
ColumnInterface $column
): bool
```

Adds a column to a table

```php
public function addIndex(
string $tableName, 
string $schemaName,
IndexInterface $index
): bool
```

Adds an index to a table

```php
public function addForeignKey(
string $tableName, 
string $schemaName, 
ReferenceInterface $reference
): bool
```

Adds a foreign key to a table

```php
public function addPrimaryKey(
string $tableName, 
string $schemaName, 
IndexInterface $index
): bool
```

Adds a primary key to a table

```php
public function affectedRows(): int
```

Returns the number of affected rows by the last `INSERT`/`UPDATE`/`DELETE` reported by the database system

```php
public function begin(
bool $nesting = true
): bool
```

Starts a transaction in the connection

```php
public function close(): void
```

Closes active connection returning success. Phalcon automatically closes and destroys active connections

```php
public function commit(
bool $nesting = true
): bool
```

Commits the active transaction in the connection

```php
public function connect(
array $descriptor = []
): void
```

This method is automatically called in [Phalcon\Db\Adapter\Pdo\AbstractPdo][db-adapter-pdo-abstractpdo] constructor. Call it when you need to restore a database connection

```php
public function createSavepoint(
string $name
): bool
```

Creates a new savepoint

```php
public function createTable(
string $tableName, 
string $schemaName, 
array $definition
): bool
```

Creates a table

```php
public function createView(
string $viewName, 
array $definition, 
string $schemaName = null
): bool
```

Creates a view

```php
public function delete(
mixed $table, 
string $whereCondition = null, 
array $placeholders = [], 
array $dataTypes = []
): bool
```

Deletes data from a table using custom RDBMS SQL syntax

```php
public function describeColumns(
string $table, 
string $schema = null
): ColumnInterface[]
```

Returns an array of Phalcon\Db\Column objects describing a table

```php
public function describeIndexes(
string $table, 
string $schema = null
): IndexInterface[]
```

Lists table indexes

```php
public function describeReferences(
string $table, 
string $schema = null
): ReferenceInterface[]
```

Lists table references

```php
public function dropColumn(
string $tableName, 
string $schemaName, 
string $columnName
): bool
```

Drops a column from a table

```php
public function dropForeignKey(
string $tableName, 
string $schemaName, 
string $referenceName
): bool
```

Drops a foreign key from a table

```php
public function dropIndex(
string $tableName, 
string $schemaName, 
string $indexName
): bool
```

Drop an index from a table

```php
public function dropPrimaryKey(
string $tableName, 
string $schemaName
): bool
```

Drops primary key from a table

```php
public function dropTable(
string $tableName, 
string $schemaName = null, 
bool $ifExists = true
): bool
```

Drops a table from a schema/database

```php
public function dropView(
string $viewName, 
string $schemaName = null, 
bool $ifExists = true
): bool
```

Drops a view

```php
public function escapeIdentifier(
mixed $identifier
): string
```

Escapes a column/table/schema name.

```php
public function escapeString(string $str): string
```

Escapes a value to avoid SQL injections

```php
public function execute(
string $sqlStatement, 
array $bindParams = [], 
array $bindTypes = []
): bool
```

Sends SQL statements to the database server returning the success state. Use this method only when the SQL statement sent to the server does not return any rows

```php
public function fetchAll(
string $sqlQuery, 
int $fetchMode = 2, 
array $bindParams = [], 
array $bindTypes = []
): array
```

Dumps the complete result of a query into an array

```php
public function fetchColumn(
string $sqlQuery, 
array $placeholders = [], 
mixed $column = 0
): string | bool
```

Returns the nth field of the first row in a SQL query result

```php
$invoicesCount = $connection
->fetchColumn('SELECT count(*) FROM co_invoices');
print_r($invoicesCount);

$invoice = $connection->fetchColumn(
'SELECT inv_id, inv_title 
FROM co_invoices
ORDER BY inv_created_at DESC',
[],
1
);
print_r($invoice);
```

```php
public function fetchOne(
string $sqlQuery, 
int $fetchMode = 2, 
array $bindParams = [], 
array $bindTypes = []
): array
```

Returns the first row in an SQL query result

```php
public function forUpdate(
string $sqlQuery
): string
```

Returns a SQL modified with a FOR UPDATE clause

```php
public function getColumnDefinition(
ColumnInterface $column
): string
```

Returns the SQL column definition from a column

```php
public function getColumnList(
mixed $columnList
): string
```

Gets a list of columns

```php
public function getConnectionId(): string
```

Gets the active connection unique identifier

```php
public function getDefaultValue(): RawValue
```

Return the default value to make the RBDM use the default value declared in the table definition

```php
public function getDescriptor(): array
```

Return descriptor used to connect to the active database

```php
public function getDialect(): DialectInterface
```

Returns internal dialect instance

```php
public function getDialectType(): string
```

Returns the name of the dialect used

```php
public function getDefaultIdValue(): RawValue
```

Return the default identity value to insert in an identity column

```php
public function getErrorInfo(): array
```

Return the last error information

```php
public function getInternalHandler(): mixed
```

Return internal PDO handler

```php
public function getNestedTransactionSavepointName(): string
```

Returns the savepoint name to use for nested transactions

```php
public function getRealSQLStatement(): string
```

Active SQL statement in the object without replacing bound parameters

```php
public function getSQLStatement(): string
```

Active SQL statement in the object

```php
public function getSQLBindTypes(): array
```

Active SQL statement in the object

```php
public function getSQLVariables(): array
```

Active SQL statement in the object

```php
public function getType(): string
```

Returns the type of database system the adapter is used for

```php
public function insert(
string $table, 
array $values, 
mixed $fields = null, 
mixed $dataTypes = null
): bool
```

Inserts data into a table using custom RDBMS SQL syntax

```php
public function insertAsDict(
string $table, 
mixed $data, 
mixed $dataTypes = null
): bool
```

Inserts data into a table using custom RBDM SQL syntax

```php
$success = $connection->insertAsDict(
'co_invoices',
[
    'inv_cst_id' => 1,
    'inv_title'  => 'Invoice for ACME Inc.',
]
);

// SQL
// INSERT INTO `co_invoices` 
//     ( `inv_cst_id`, `inv_title` ) 
// VALUES 
//     ( 1, 'Invoice for ACME Inc.' )
```

```php
public function isNestedTransactionsWithSavepoints(): bool
```

Returns if nested transactions should use savepoints

```php
public function isUnderTransaction(): bool
```

Check whether the connection is under a database transaction

```php
public function lastInsertId(
mixed $sequenceName = null
): string | bool
```

Returns insert id for the auto_increment column inserted in the last SQL statement

```php
public function limit(
string $sqlQuery, 
int $number
): string
```

Appends a LIMIT clause to sqlQuery argument

```php
public function listTables(
string $schemaName = null
): array
```

List all tables on a database

```php
public function listViews(
string $schemaName = null
): array
```

List all views on a database

```php
public function modifyColumn(
string $tableName, 
string $schemaName, 
ColumnInterface $column, 
ColumnInterface $currentColumn = null
): bool
```

Modifies a table column based on a definition

```php
public function query(
string $sqlStatement, 
array $bindParams = [], 
array $bindTypes = []
): ResultInterface | bool
```

Sends SQL statements to the database server returning the success state. Use this method only when the SQL statement sent to the server returns rows

```php
public function releaseSavepoint(
string $name
): bool
```

Releases given savepoint

```php
public function rollback(
bool $nesting = true
): bool
```

Rollbacks the active transaction in the connection

```php
public function rollbackSavepoint(
string $name
): bool
```

Rollbacks given savepoint

```php
public function sharedLock(
string $sqlQuery
): string
```

Returns a SQL modified with a LOCK IN SHARE MODE clause

```php
public function setNestedTransactionsWithSavepoints(
bool $nestedTransactionsWithSavepoints
): AdapterInterface
```

Set if nested transactions should use savepoints

```php
public function supportsDefaultValue(): bool
```

Check whether the database system supports a default value

```php
public function supportSequences(): bool
```

Check whether the database system requires a sequence to produce auto-numeric values

```php
public function tableExists(
string $tableName, 
string $schemaName = null
): bool
```

Generates SQL checking for the existence of a `schema.table`

```php
public function tableOptions(
string $tableName, 
string $schemaName = null
): array
```

Gets creation options from a table

```php
public function update(
string $table, 
mixed $fields, 
mixed $values, 
mixed $whereCondition = null, 
mixed $dataTypes = null
): bool
```

Updates data on a table using custom RDBMS SQL syntax

```php
public function updateAsDict(
string $table, 
mixed $data, 
mixed $whereCondition = null, 
mixed $dataTypes = null
): bool
```

Updates data on a table using custom RBDM SQL syntax. Another more convenient syntax

```php
$success = $connection->updateAsDict(
'co_invoices',
[
    'inv_title' => 'Invoice for ACME Inc.',
],
'inv_id = 1'
);

// SQL
// UPDATE `co_invoices` 
// SET    `inv_title` = 'Invoice for ACME Inc.' 
// WHERE   inv_id = 1
```

```php
public function useExplicitIdValue(): bool
```

Check whether the database system requires an explicit value for identity columns

```php
public function viewExists(
string $viewName, 
string $schemaName = null
): bool
```

Generates SQL checking for the existence of a schema view

### Custom

The [Phalcon\Db\AdapterInterface][db-adapter-adapterinterface] interface must be implemented to create your database adapters or extend the existing ones. Additionally, you can extend the [Phalcon\Db\AbstractAdapter][db-adapter-abstractadapter] that already has some implementation for your custom adapter.

### Escaping

Escaping identifiers is enabled by default. However, if you need to disable this feature, you can do so using the `setup()` method:

```php
<?php

\Phalcon\Db::setup(
[
    'escapeIdentifiers' => false,
]
);
```

:::warning[SECURITY]
`CHECK` constraint expressions, generated-column expressions, and view definition bodies are emitted into the DDL verbatim, exactly as provided. They are treated as developer-authored SQL, the same as [Phalcon\Db\RawValue][db-rawvalue]. Never build these from untrusted input.
:::

## Factory

### `newInstance()`

Although all adapter classes can be instantiated using the `new` keyword, Phalcon offers the [Phalcon\Db\Adapter\PdoFactory][db-adapter-pdofactory] class, so that you can instantiate PDO adapter instances. All the above adapters are registered in the factory and lazy loaded when called. The factory allows you to register additional (custom) adapter classes. The only thing to consider is choosing the name of the adapter in comparison to the existing ones. If you define the same name, you will overwrite the built-in one. The objects are cached in the factory so if you call the `newInstance()` method with the same parameters during the same request, you will get the same object back.

The reserved names are:

| Name         | Adapter                                                        |
|--------------|----------------------------------------------------------------|
| `mysql`      | [Phalcon\Db\Adapter\Pdo\Mysql][db-adapter-pdo-mysql]           |
| `postgresql` | [Phalcon\Db\Adapter\Pdo\Postgresql][db-adapter-pdo-postgresql] |
| `sqlite`     | [Phalcon\Db\Adapter\Pdo\Sqlite][db-adapter-pdo-sqlite]         |

The example below shows how you can create a MySQL adapter with the `new` keyword or the factory:

```php
<?php

use Phalcon\Db\Adapter\Pdo\Mysql;

$connection = new Mysql(
[
    'host'     => 'localhost',
    'username' => 'root',
    'password' => '',
    'dbname'   => 'test',
]
);
```

```php
<?php

use Phalcon\Db\Adapter\PdoFactory;

$factory    = new PdoFactory();
$connection = $factory
->newInstance(
    'mysql',
    [
        'host'     => 'localhost',
        'username' => 'root',
        'password' => '',
        'dbname'   => 'test',
    ]
)
;
```

### `load()`

You can also use the `load()` method to create an adapter using a configuration object or an array. The example below uses an `ini` file to instantiate the database connection using `load()`. The `load()` method accepts a `Phalcon\Config\Config` object or an array with two elements: the name of the adapter (`adapter`) and options for the adapter (`options`).

```
[database]
adapter = mysql
options.host = DATA_MYSQL_HOST
options.username = DATA_MYSQL_USER
options.password = DATA_MYSQL_PASS
options.dbname = DATA_MYSQL_NAME
options.port = DATA_MYSQL_PORT
options.charset = DATA_MYSQL_CHARSET
```

```php
<?php

use Phalcon\Config\Adapter\Ini;
use Phalcon\Di\Di;
use Phalcon\Db\Adapter\PdoFactory;

$container = new Di();

$config = new Ini('config.ini');

$container->set('config', $config);

$container->set(
'db', 
function () {
    return (new PdoFactory())->load($this->config->database);
}
);
```

## Dialects

### Built In

Phalcon encapsulates the specific details of each database engine in dialects. [Phalcon\Db\Dialect][db-dialect] provides common functions and SQL generators to the adapters.

| Class                                                  | Description                                         |
|--------------------------------------------------------|-----------------------------------------------------|
| [Phalcon\Db\Dialect\Mysql][db-dialect-mysql]           | SQL specific dialect for MySQL database system      |
| [Phalcon\Db\Dialect\Postgresql][db-dialect-postgresql] | SQL specific dialect for PostgreSQL database system |
| [Phalcon\Db\Dialect\Sqlite][db-dialect-sqlite]         | SQL specific dialect for SQLite database system     |

### Custom

The [Phalcon\Db\DialectInterface][db-dialectinterface] interface must be implemented to create your database dialects or extend the existing ones. You can also enhance your current dialect by adding more commands/methods that PHQL will understand. For instance, when using the MySQL adapter, you might want to allow PHQL to recognize the `MATCH ... AGAINST ...` syntax. We associate that syntax with `MATCH_AGAINST`

We instantiate the dialect. We add the custom function so that PHQL understands what to do when it finds it during the parsing process. In the example below, we register a new custom function called `MATCH_AGAINST`. After that, all we have to do is add the customized dialect object to our connection.

```php
<?php

use Phalcon\Db\Dialect\Mysql as SqlDialect;
use Phalcon\Db\Adapter\Pdo\Mysql as Connection;

$dialect = new SqlDialect();

$dialect->registerCustomFunction(
'MATCH_AGAINST',
function ($dialect, $expression) {
    $arguments = $expression['arguments'];
    return sprintf(
        ' MATCH (%s) AGAINST (%s)',
        $dialect->getSqlExpression($arguments[0]),
        $dialect->getSqlExpression($arguments[1])
     );
}
);

$connection = new Connection(
[
    'host'          => 'localhost',
    'username'      => 'root',
    'password'      => '',
    'dbname'        => 'test',
    'dialectClass'  => $dialect,
]
);
```

We can now use this new function in PHQL, which in turn will translate it to the proper SQL syntax:

```php
<?php

$phql = '
  SELECT *
  FROM   Invoices
  WHERE  MATCH_AGAINST(title, :pattern:)';

$posts = $modelsManager->executeQuery(
$phql,
[
    'pattern' => $pattern,
]
);
```

:::info[NOTE]
There are more examples of how to extend PHQL in the [PHQL][db-phql] document.
:::

## Connect

To create a connection it's necessary to instantiate the adapter class. It only requires an array with the connection parameters. The example below shows how to create a connection passing both required and optional parameters:

| Adapter      | Parameter    | Status   |
|--------------|--------------|----------|
| `MySQL`      | `host`       | required |
|              | `username`   | required |
|              | `password`   | required |
|              | `dbname`     | required |
|              | `persistent` | optional |
| `PostgreSQL` | `host`       | required |
|              | `username`   | required |
|              | `password`   | required |
|              | `dbname`     | required |
|              | `schema`     | optional |
| `Sqlite`     | `dbname`     | required |

Connecting to each adapter can be achieved by either the factory as demonstrated above or by passing the relevant options to the constructor of each class.

```php
<?php

use Phalcon\Db\Adapter\Pdo\Mysql;
use Phalcon\Db\Adapter\Pdo\Postgresql;
use Phalcon\Db\Adapter\Pdo\Sqlite;

$config = [
'host'     => '127.0.0.1',
'username' => 'mike',
'password' => 'sigma',
'dbname'   => 'test_db',
];

$connection = new Mysql($config);

$config = [
'host'     => 'localhost',
'username' => 'postgres',
'password' => 'secret1',
'dbname'   => 'template',
];

$connection = new Postgresql($config);

$config = [
'dbname' => '/path/to/database.db',
];
$connection = new Sqlite($config);
```

**Additional PDO options**

You can set PDO options at connection time by passing the parameters `options`:

```php
<?php

use Phalcon\Db\Adapter\Pdo\Mysql;

$connection = new Mysql(
[
    'host'     => 'localhost',
    'username' => 'root',
    'password' => 'sigma',
    'dbname'   => 'test_db',
    'options'  => [
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'",
        PDO::ATTR_CASE               => PDO::CASE_LOWER,
    ]
]
);
```

## Connection Liveness and Auto-Reconnect

Long-running processes such as queue workers, daemons, and CLI loops can hold a connection open longer than the database server permits. When the server closes an idle connection (for example through the MySQL `wait_timeout` setting), the next query fails with a "server has gone away" error. The PDO adapters provide a liveness probe, an in-place reconnect, and an opt-in transparent retry to handle this.

- MySQL recognizes a lost connection from driver error codes `2006` and `2013`
- PostgreSQL recognizes it from SQLSTATE `08003`, `08006`, `57P01`, `57P02`, and `57P03`, with a message fallback
- SQLite is file-based and has no "gone away" condition, so auto-reconnect is a no-op

**Checking the connection**

`ping()` runs a `SELECT 1` and returns `true` when the connection is alive, or `false` when there is no handle or the probe fails. `ensureConnection()` calls `ping()` and reconnects in place when the probe fails. Call it at the top of a long-running loop iteration.

```php
<?php

use Phalcon\Db\Adapter\Pdo\Mysql;

$connection = new Mysql(
[
    'host'     => 'localhost',
    'username' => 'root',
    'password' => 'secret',
    'dbname'   => 'tutorial',
]
);

$connection->ensureConnection();

$invoices = $connection->fetchAll('SELECT * FROM co_invoices');
```

**Automatic reconnect**

Auto-reconnect is disabled by default. Enable it with the `autoReconnect` descriptor key or the `setAutoReconnect()` method. When it is enabled and a query fails on a lost connection outside a transaction, `execute()` and `query()` reconnect and retry the statement once. A failure inside a transaction is re-thrown without a retry, because the transaction state is lost when the connection drops and only the caller can restart it. `getAutoReconnect()` returns the current setting.

```php
<?php

use Phalcon\Db\Adapter\Pdo\Mysql;

$connection = new Mysql(
[
    'host'          => 'localhost',
    'username'      => 'root',
    'password'      => 'secret',
    'dbname'        => 'tutorial',
    'autoReconnect' => true,
]
);

// Or toggle it at runtime
$connection->setAutoReconnect(true);
```

When a lost connection is detected and auto-reconnect is enabled, the adapter fires the `db:connectionLost` event before it reconnects. Bind an [Events Manager][events] to act on it.

```php
<?php

use Phalcon\Db\Adapter\Pdo\Mysql;
use Phalcon\Events\Event;
use Phalcon\Events\Manager;

$manager = new Manager();

$manager->attach(
'db:connectionLost',
function (Event $event, $connection) {
    // log the loss, increment a metric, etc.
}
);

$connection = new Mysql(
[
    'host'          => 'localhost',
    'username'      => 'root',
    'password'      => 'secret',
    'dbname'        => 'tutorial',
    'autoReconnect' => true,
]
);

$connection->setEventsManager($manager);
```

## Create

To insert a row in the database, you can use raw SQL or use the methods presented by the adapter:

```php
<?php

$sql     = "
INSERT INTO `co_invoices` 
( `inv_cst_id`, `inv_title` ) 
VALUES 
( 1, 'Invoice for ACME Inc.' )
";
$success = $connection->execute($sql);
```

Raw SQL

```php
<?php

$sql     = '
INSERT INTO `co_invoices` 
( `inv_cst_id`, `inv_title` ) 
VALUES 
( ?, ? )
';
$success = $connection->execute(
$sql,
[
    1,
    'Invoice for ACME Inc.',
]
);
```

Placeholders

```php
<?php

$success = $connection->insert(
'co_invoices',
[
    1,
    'Invoice for ACME Inc.',
],
[
    'inv_cst_id',
    'inv_title', 
]
);
```

Dynamic generation

```php
<?php

$success = $connection->insertAsDict(
'co_invoices',
[
    'inv_cst_id' => 1,
    'inv_title'  => 'Invoice for ACME Inc.',
]
);
```

Dynamic generation (alternative syntax)

## Update

To update a row in the database, you can use raw SQL or use the methods presented by the adapter:

```php
<?php

$sql     = "
UPDATE 
`co_invoices` 
SET 
`inv_cst_id`= 1, 
`inv_title` = 'Invoice for ACME Inc.'
WHERE
`inv_id` = 4
";
$success = $connection->execute($sql);
```

Raw SQL

```php
<?php

$sql     = "
UPDATE 
`co_invoices` 
SET 
`inv_cst_id`= ?, 
`inv_title` = ?
WHERE
`inv_id` = ?
";
$success = $connection->execute(
$sql,
[
    1,
    'Invoice for ACME Inc.',
    4,
]
);
```

Placeholders

```php
<?php

$success = $connection->update(
'co_invoices',
[
    'inv_cst_id',
    'inv_title',
],
[
    1,
    'Invoice for ACME Inc.',
],
'inv_id = 4'
);
```

Dynamic generation

:::danger[DANGER]
With the syntax above, the variables for the `where` part of the `update` (`inv_id = 4`) are not escaped!
:::

```php
<?php

$success = $connection->updateAsDict(
'co_invoices',
[
    'inv_cst_id' => 1,
    'inv_title'  => 'Invoice for ACME Inc.',
],
'inv_id = 4'
);
```

Dynamic generation (alternative syntax)

:::danger[DANGER]
With the syntax above, the variables for the `where` part of the `update` (`inv_id = 4`) are not escaped!
:::

```php
<?php

$success = $connection->update(
'co_invoices',
[
    'inv_cst_id',
    'inv_title',
],
[
    1,
    'Invoice for ACME Inc.',
],
[
    'conditions' => 'id = ?',
    'bind'       => [
        4
    ],
    'bindTypes'  => [
        \PDO::PARAM_INT
    ],
]
);
```

With conditionals escaped

```php
<?php

$success = $connection->updateAsDict(
'co_invoices',
[
    'inv_cst_id' => 1,
    'inv_title'  => 'Invoice for ACME Inc.',
],
[
    'conditions' => 'id = ?',
    'bind'       => [
        4
    ],
    'bindTypes'  => [
        \PDO::PARAM_INT
    ],
]
);
```

With conditionals escaped (alternative syntax)

## Delete

```php
<?php

$sql     = '
DELETE FROM
   `co_invoices` 
WHERE
   `inv_id` = 4
';
$success = $connection->execute($sql);
```

Raw SQL

```php
<?php

$sql     = '
DELETE FROM
   `co_invoices` 
WHERE
   `inv_id` = ?
';
$success = $connection->execute(
$sql, 
[
    4
]
);
```

Placeholders

```php
<?php

$success = $connection->delete(
'co_invoices',
'inv_id = ?',
[
    4,
]
);
```

Dynamic generation

## Parameters

The `Phalcon\Db` adapters provide several methods to query rows from tables. The specific SQL syntax of the target database engine is required in this case:

```php
<?php

$sql = '
SELECT 
inv_id,
inv_title
FROM 
co_invoices
ORDER BY 
inv_created_at
';
$result = $connection->query($sql);
while ($invoice = $result->fetch()) {
   echo $invoice['inv_title'];
}

$invoices = $connection->fetchAll($sql);
foreach ($invoices as $invoice) {
   echo $invoice['inv_title'];
}

$invoice = $connection->fetchOne($sql);
```

By default, these calls create arrays with both associative and numeric indexes. For methods like `fetchArray()`, `fetch()` and `dataSeek()` you can change this behavior by using `Phalcon\Db\Result::setFetchMode()`. For methods like `fetchAll()` or `fetchOne()` you can use the `$fetchMode` argument.

The `fetchMode` receives a constant, defining which kind of index is required.

| Constant                        | Description                                                |
|---------------------------------|------------------------------------------------------------|
| `Phalcon\Db\Enum::FETCH_NUM`    | Return an array with numeric indexes                       |
| `Phalcon\Db\Enum::FETCH_ASSOC`  | Return an array with associative indexes                   |
| `Phalcon\Db\Enum::FETCH_BOTH`   | Return an array with both associative and numeric indexes  |
| `Phalcon\Db\Enum::FETCH_GROUP`  | Return an array of grouped associative and numeric indexes |
| `Phalcon\Db\Enum::FETCH_OBJ`    | Return an object instead of an array                       |
| `Phalcon\Db\Enum::FETCH_COLUMN` | Returns a string for single row or array multiple rows     |

There are many other constants that can be used similar to PDO:FETCH_* constants

```php
<?php

$sql = '
SELECT 
inv_id,
inv_title
FROM 
co_invoices
ORDER BY 
inv_created_at
';
$result = $connection->query($sql);

$result->setFetchMode(
Phalcon\Db\Enum::FETCH_NUM
);

while ($invoice = $result->fetch()) {
   echo $invoice[0];
}

$invoices = $connection->fetchAll($sql, Phalcon\Db\Enum::FETCH_ASSOC);
// or using the previous query() method
$invoices = $result->fetchAll(Phalcon\Db\Enum::FETCH_ASSOC);

foreach ($invoices as $invoice) {
   echo $invoice['inv_title'];
}

$invoice = $connection->fetchOne($sql, Phalcon\Db\Enum::FETCH_ASSOC);
```

The `query()` method returns an instance of [Phalcon\Db\Result\Pdo][db-result-pdo]. These objects encapsulate all the functionality related to the returned resultset i.e. traversing, seeking specific records, `count` etc.

```php
<?php

$sql = '
SELECT 
inv_id,
inv_title
FROM 
co_invoices
ORDER BY 
inv_created_at
';
$result = $connection->query($sql);

while ($invoice = $result->fetch()) {
   echo $invoice['name'];
}

$result->seek(2);

$invoice = $result->fetch();

echo $result->numRows();
```

### Binding

Bound parameters are also supported. Although there is a minimal performance impact by using bound parameters, you are highly encouraged to use this methodology to eliminate the possibility of your code being subject to SQL injection attacks. Both string and positional placeholders are supported.

```php
<?php

$sql = '
SELECT 
inv_id,
inv_title
FROM 
co_invoices
WHERE
inv_cst_id = ?
ORDER BY 
inv_created_at
';

$result = $connection->query(
$sql,
[
    4,
]
);
```

Binding with numeric placeholders

```php
<?php

$sql     = "
UPDATE 
`co_invoices` 
SET 
`inv_cst_id`= :cstId, 
`inv_title` = :title
WHERE
`inv_id` = :id
";
$success = $connection->query(
$sql,
[
    'cstId' => 1,
    'title' => 'Invoice for ACME Inc.',
    'id'    => 4,
]
);
```

Binding with named placeholders

When using numeric placeholders, you will need to define them as integers i.e. `1` or `2`. In this case `'1'` or `'2'` are considered strings and not numbers, so the placeholder could not be successfully replaced. With any adapter, data are automatically escaped using [PDO Quote][pdo_quote]. This function takes into account the connection charset, therefore it is recommended to define the correct charset in the connection parameters or your database server configuration, as a wrong charset will produce undesired effects when storing or retrieving data.

Also, you can pass your parameters directly to the `execute` or `query` methods. In this case bound parameters are directly passed to PDO:

```php
<?php

$sql = '
SELECT 
inv_id,
inv_title
FROM 
co_invoices
WHERE
inv_cst_id = ?
ORDER BY 
inv_created_at
';

$result = $connection->query(
$sql,
[
    1 => 4,
]
);
```

Binding with PDO placeholders

### Typed

Placeholders allowed you to bind parameters to avoid SQL injections:

```php
<?php

$phql = '
SELECT 
inv_id,
inv_title
FROM 
Invoices
WHERE
inv_cst_id = :customerId:
ORDER BY 
inv_created_at
';

$invoices = $this
->modelsManager
->executeQuery(
    $phql,
    [
        'customerId' => 4,
    ]
)
;
```

However, some database systems require additional actions when using placeholders such as specifying the type of the bound parameter:

```php
<?php

use Phalcon\Db\Column;

// ...

$phql = '
SELECT 
inv_id,
inv_title
FROM 
Invoices
WHERE
inv_cst_id = :customerId:
ORDER BY 
inv_created_at
';

$invoices = $this
->modelsManager
->executeQuery(
    $phql,
    [
        'customerId' => 4,
    ],
    Column::BIND_PARAM_INT
)
;
```

You can use typed placeholders in your parameters, instead of specifying the bind type in `executeQuery()`:

```php
<?php

$phql = '
SELECT 
inv_id,
inv_title
FROM 
Invoices
WHERE
inv_cst_id = {customerId:int}
ORDER BY 
inv_created_at
';

$invoices = $this
->modelsManager
->executeQuery(
    $phql,
    [
        'customerId' => 4,
    ],
)
;

$phql = '
SELECT 
inv_id,
inv_title
FROM 
Invoices
WHERE
inv_title <> {title:str}
ORDER BY 
inv_created_at
';

$invoices = $this
->modelsManager
->executeQuery(
    $phql,
    [
        'title' => 'Invoice for ACME Inc',
    ],
)
;
```

You can also omit the type if you do not need to specify it:

```php
<?php

$phql = '
SELECT 
inv_id,
inv_title
FROM 
Invoices
WHERE
inv_cst_id = {customerId}
ORDER BY 
inv_created_at
';

$invoices = $this
->modelsManager
->executeQuery(
    $phql,
    [
        'customerId' => 4,
    ],
)
;
```

Typed placeholders are also more flexible since we can now bind a static array without having to pass each element independently as a placeholder:

```php
<?php

$phql = '
SELECT 
inv_id,
inv_title
FROM 
Invoices
WHERE
inv_cst_id IN ({ids:array})
ORDER BY 
inv_created_at
';

$invoices = $this
->modelsManager
->executeQuery(
    $phql,
    [
        'ids' => [1, 3, 5],
    ],
)
;
```

The following types are available:

| Bind Type | Bind Type Constant                | Example             |
|-----------|-----------------------------------|---------------------|
| str       | `Column::BIND_PARAM_STR`          | `{name:str}`        |
| int       | `Column::BIND_PARAM_INT`          | `{number:int}`      |
| double    | `Column::BIND_PARAM_DECIMAL`      | `{price:double}`    |
| bool      | `Column::BIND_PARAM_BOOL`         | `{enabled:bool}`    |
| blob      | `Column::BIND_PARAM_BLOB`         | `{image:blob}`      |
| null      | `Column::BIND_PARAM_NULL`         | `{exists:null}`     |
| array     | Array of `Column::BIND_PARAM_STR` | `{codes:array}`     |
| array-str | Array of `Column::BIND_PARAM_STR` | `{names:array-str}` |
| array-int | Array of `Column::BIND_PARAM_INT` | `{flags:array-int}` |

### Cast

By default, bound parameters are not cast in the PHP userland to the specified bind types. This option allows you to make Phalcon cast values before binding them with PDO. A common scenario is when passing a string to a `LIMIT`/`OFFSET` placeholder:

```php
<?php

$number = '100';
$phql   = '
SELECT 
inv_id,
inv_title
FROM 
Invoices
LIMIT 
{number:int}
';

$invoices = $modelsManager->executeQuery(
$phql,
[
    'number' => $number,
]
);
```

This causes the following exception:

```
Fatal error: Uncaught exception 'PDOException' with message 
'SQLSTATE[42000]: Syntax error or access violation: 1064. 
You have an error in your SQL syntax; check the manual that 
corresponds to your MySQL server version for the right
syntax to use near ''100'' at line 1' in ....
```

This happens because `'100'` is a string variable. It is fixable by casting the value to an integer first:

```php
<?php

$number = '100';
$phql   = '
SELECT 
inv_id,
inv_title
FROM 
Invoices
LIMIT 
{number:int}
';

$invoices = $modelsManager->executeQuery(
$phql,
[
    'number' => (int) $number,
]
);
```

However, this solution requires that the developer pay special attention to how bound parameters are passed and their types. To make this task easier and avoid unexpected exceptions you can instruct Phalcon to do this casting for you:

```php
<?php

\Phalcon\Db::setup(
[
    'forceCasting' => true,
]
);
```

The following actions are performed according to the bind type specified:

| Bind Type                    | Action                                 |
|------------------------------|----------------------------------------|
| `Column::BIND_PARAM_STR`     | Cast the value as a native PHP string  |
| `Column::BIND_PARAM_INT`     | Cast the value as a native PHP integer |
| `Column::BIND_PARAM_BOOL`    | Cast the value as a native PHP boolean |
| `Column::BIND_PARAM_DECIMAL` | Cast the value as a native PHP double  |

### Hydration

Values returned from the database system are always represented as string values by PDO, no matter if the value belongs to a `numeric` or `boolean` type column. This happens because some column types cannot be represented with their corresponding PHP native types due to their size limitations. For instance, a `BIGINT` in MySQL can store large integer numbers that cannot be represented as a 32bit integer in PHP. Because of that, PDO and the ORM by default, make the safe decision of leaving all values as strings.

You can set up the ORM to automatically cast those types to their corresponding PHP native types:

```php
<?php

use Phalcon\Mvc\Model;

Model::setup(
[
    'castOnHydrate' => true,
]
);
```

This way you can use strict operators or make assumptions about the type of variables:

```php
<?php

$invoice = Invoices::findFirst();
if (11 === $invoice->inv_id) {
echo $invoice->inv_title;
}
```

:::info[NOTE]
If you wish to return the primary key when using the `lastInsertId` as an `integer`, you can use the `castLastInsertIdToInt => true` feature on the model.
:::

## Transactions

Working with transactions is supported the same way as with PDO. Using transactions increases performance in most database systems and also ensures data integrity:

```php
<?php

try {
$connection->begin();

$connection->execute('DELETE FROM `co_invoices` WHERE `inv_id` = 1');
$connection->execute('DELETE FROM `co_invoices` WHERE `inv_id` = 2');
$connection->execute('DELETE FROM `co_invoices` WHERE `inv_id` = 3');

$connection->commit();
} catch (Exception $e) {
$connection->rollback();
}
```

In addition to standard transactions, the adapters provide built-in support for [nested transactions][nested_transactions], if the database system used supports them. When you call `begin()` for a second time a nested transaction is created:

```php
<?php

try {
$connection->begin();

$connection->execute('DELETE FROM `co_invoices` WHERE `inv_id` = 1');

try {
    $connection->begin();

    $connection->execute('DELETE FROM `co_invoices` WHERE `inv_id` = 2');
    $connection->execute('DELETE FROM `co_invoices` WHERE `inv_id` = 3');

    $connection->commit();
} catch (Exception $e) {
    $connection->rollback();
}

$connection->execute('DELETE FROM `co_invoices` WHERE `inv_id` = 4');

$connection->commit();
} catch (Exception $e) {
$connection->rollback();
}
```

## Events

The adapters also send events to an [Events Manager][events] if it is present. If an event returns `false` it can stop the current operation. The following events are supported:

| Event Name            | Triggered                           | Can stop |
|-----------------------|-------------------------------------|:--------:|
| `afterQuery`          | After a query is executed           |    No    |
| `beforeQuery`         | Before a query is executed          |   Yes    |
| `connectionLost`      | After a lost connection is detected |    No    |
| `beginTransaction`    | Before a transaction starts         |    No    |
| `createSavepoint`     | Before a savepoint is created       |    No    |
| `commitTransaction`   | Before a transaction is committed   |    No    |
| `releaseSavepoint`    | Before a savepoint is released      |    No    |
| `rollbackTransaction` | Before a transaction is rolled back |    No    |
| `rollbackSavepoint`   | Before a savepoint is rolled back   |    No    |

If you bind an [Events Manager][events] to the database connection, all the events with the type `db` will be enabled and fired for the relevant listeners.

```php
<?php

use Phalcon\Events\Manager;
use Phalcon\Db\Adapter\Pdo\Mysql;

$manager = new Manager();

$manager->attach('db', $listener);

$connection = new Mysql(
[
    'host'     => 'localhost',
    'username' => 'root',
    'password' => 'secret',
    'dbname'   => 'tutorial',
]
);

$connection->setEventsManager($manager);
```

You can use the power of these events to shield your application from dangerous SQL operations.

```php
<?php

use Phalcon\Events\Event;

$manager->attach(
'db:beforeQuery',
function (Event $event, $connection) {
    $sql = $connection->getSQLStatement();

    if (true === preg_match('/DROP|ALTER/i', $sql)) {
        return false;
    }

    return true;
}
);
```

## Profiling

The adapter includes the [Phalcon\Db\Profiler][db-profiler] component, which is used to analyze the performance of database operations to diagnose performance problems and discover bottlenecks.

```php
<?php

use Phalcon\Events\Event;
use Phalcon\Events\Manager;
use Phalcon\Db\Profiler;

$manager  = new Manager();
$profiler = new Profiler();

$manager->attach(
'db',
function (Event $event, $connection) use ($profiler) {
    if ($event->getType() === 'beforeQuery') {
        $sql = $connection->getSQLStatement();
        $profiler->startProfile($sql);
    }

    if ($event->getType() === 'afterQuery') {
        $profiler->stopProfile();
    }
}
);

$connection->setEventsManager($manager);

$sql = '
SELECT 
inv_id,
inv_title
FROM 
co_invoices
';
$connection->query($sql);

$profile = $profiler->getLastProfile();

echo 'SQL Statement: ', $profile->getSQLStatement(), PHP_EOL,
 'Start Time: ', $profile->getInitialTime(), PHP_EOL,
 'Final Time: ', $profile->getFinalTime(), PHP_EOL,
 'Total Elapsed Time: ', $profile->getTotalElapsedSeconds(), PHP_EOL;
```

The profiler exposes the `getProfiles()` method, returning an array of `Phalcon\Db\Profiler\Item` objects. Each object contains relevant statistics, including calculations for seconds, microseconds, and nanoseconds.

You can also create your profile class based on the [Phalcon\Db\Profiler][db-profiler] class to record real-time statistics of the statements that are sent to the database:

```php
<?php

use Phalcon\Events\Manager;
use Phalcon\Db\Profiler;
use Phalcon\Db\Profiler\Item;

class DbProfiler extends Profiler
{
public function beforeStartProfile(Item $profile)
{
    echo $profile->getSQLStatement();
}

public function afterEndProfile(Item $profile)
{
    echo $profile->getTotalElapsedSeconds();
}
}

$manager  = new Manager();
$listener = new DbProfiler();

$manager->attach('db', $listener);
```

### Capping Profile Retention

By default the profiler keeps every recorded profile for the lifetime of the instance. In long-running PHP processes (Swoole, RoadRunner, queue workers) this grows without bound. Call `setMaxProfiles()` to keep only the most recent N entries; the oldest is dropped FIFO before each new `stopProfile()` append.

```php
<?php

use Phalcon\Db\Profiler;

$profiler = new Profiler();
$profiler->setMaxProfiles(500);

// ... drive queries through the events manager ...

// getProfiles() now returns at most 500 items.
$recent = $profiler->getProfiles();
```

The default value `0` preserves the original unbounded behavior, so existing application code is unaffected. `getMaxProfiles()` returns the current cap. Calling `reset()` continues to clear the buffer regardless of the cap.

## Logging

Using high-level abstraction components such as the `Phalcon\Db` adapters to access the database, makes it difficult to understand which statements are sent to the database system. The [Phalcon\Logger\Logger][logger] component interacts with the `Phalcon\Db` adapters offering logging capabilities on the database abstraction level.

```php
<?php

use Phalcon\Events\Event;
use Phalcon\Events\Manager;
use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter = new Stream('/storage/logs/queries.log');
$logger  = new Logger(
'messages',
[
    'main' => $adapter,
]
);

$manager = new Manager();

$manager->attach(
'db:beforeQuery',
function (Event $event, $connection) use ($logger) {
    $sql = $connection->getSQLStatement();

    $logger->info(
        sprintf(
            '%s - [%s]',
            $connection->getSQLStatement(),
            json_encode($connection->getSQLVariables())
        )
    );
}
);

$connection->setEventsManager($manager);

$connection->insert(
'products',
[
    'Hot pepper',
    3.50,
],
[
    'name',
    'price',
]
);
$connection->insert(
'co_invoices',
[
    1,
    'Invoice for ACME Inc.',
],
[
    'inv_cst_id',
    'inv_title', 
]
);
```

As above, the file `/storage/logs/queries.log` will contain something like this:

```
[2019-12-25 01:02:03][INFO] INSERT INTO `co_invoices` 
SET (`inv_cst_id`, `inv_title`) 
VALUES (1, 'Invoice for ACME Inc.')
```

The listener will also work with models and their operations. It will also include all bound parameters that the query uses at the end of the logged statement.

```
[2019-12-25 01:02:03][INFO] SELECT `co_customers`.`cst_id`, 
...,
FROM `co_customers` 
WHERE LOWER(`co_customers`.`cst_email`) = :cst_email 
LIMIT :APL0 - [{"emp_email":"team@phalcon.ld","APL0":1}]
```

## Tables

### Describe

The `Phalcon\Db` adapters also provide methods to retrieve detailed information about tables and views:

```php
<?php

$tables = $connection->listTables('phalcon_db');
```

Get tables on the `phalcon_db` database

```php
<?php

$exists = $connection->tableExists('co_invoices');
```

Check if there is a table called `co_invoices` in the database.

```php
<?php

$fields = $connection->describeColumns('co_invoices');
foreach ($fields as $field) {
echo 'Column Type: ', $field['Type'];
}
```

Print the name and data types of the `co_invoices` table

```php
<?php

$indexes = $connection->describeIndexes('co_invoices');
foreach ($indexes as $index) {
print_r(
    $index->getColumns()
);
}
```

Print the indexes in the `co_invoices` table

```php
<?php

$references = $connection->describeReferences('co_invoices');
foreach ($references as $reference) {
print_r(
    $reference->getReferencedColumns()
);
}
```

Print the foreign keys on the 'co_invoices' table

A table description is very similar to the MySQL `DESCRIBE` command, it contains the following information:

| Field        | Type        | Key                                                | Null                               |
|--------------|-------------|----------------------------------------------------|------------------------------------|
| Field's name | Column Type | Is the column part of the primary key or an index? | Does the column allow null values? |

Methods to get information about views are also implemented for every supported database system:

```php
<?php

$tables = $connection->listViews('phalcon_db');
```

Get views on the `phalcon_db` database

```php
<?php

$exists = $connection->viewExists('vw_invoices');
```

Check if there is a view `vw_invoices` in the database

### Create

Different database systems (MySQL, Postgresql, etc.) offer the ability to create, alter or drop tables with the use of commands such as `CREATE`, `ALTER`, or `DROP`. The SQL syntax differs based on which database system is used. `Phalcon\Db` adapters offer a unified interface to alter tables, without the need to differentiate the SQL syntax based on the target storage system.

An example of how to create a table is shown below:

```php
<?php

use \Phalcon\Db\Column as Column;

$connection->createTable(
'co_invoices',
null,
[
   'columns' => [
        new Column(
            'inv_id',
            [
                'type'          => Column::TYPE_INTEGER,
                'size'          => 10,
                'notNull'       => true,
                'autoIncrement' => true,
                'primary'       => true,
            ]
        ),
        new Column(
            'inv_cst_id',
            [
                'type'    => Column::TYPE_INTEGER,
                'size'    => 11,
                'notNull' => true,
            ]
        ),
        new Column(
            'inv_title',
            [
                'type'    => Column::TYPE_VARCHAR,
                'size'    => 100,
                'notNull' => true,
            ]
        ),
    ]
]
);
```

The `createTable` method accepts an associative array describing the table. Columns are defined with the class [Phalcon\Db\Column][db-column]. The table below shows the options available to define a column:

| Option             | Description                                                                                                                                                                              | Optional |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------:|
| `after`            | Column must be placed after indicated column                                                                                                                                             |   Yes    |
| `array`            | `true` marks a PostgreSQL array column (e.g. `INTEGER[]`). MySQL and SQLite ignore the flag                                                                                              |   Yes    |
| `autoIncrement`    | Set whether this column will be auto-incremented by the database. Only one column in the table can have this attribute                                                                   |   Yes    |
| `bind`             | One of the `BIND_TYPE_*` constants telling how the column must be bound before saving it                                                                                                 |   Yes    |
| `comment`          | Column comment string (rendered as a `COMMENT` clause on MySQL and `COMMENT ON COLUMN` on PostgreSQL)                                                                                    |   Yes    |
| `default`          | Default value. Accepts a scalar (quoted), `'CURRENT_TIMESTAMP'` / `'NULL'` keywords (unquoted), or a `Phalcon\Db\RawValue` instance (emitted verbatim - see *Default value expressions*) |   Yes    |
| `first`            | Column must be placed at first position in the column order                                                                                                                              |   Yes    |
| `generated`        | SQL expression for a generated/computed column. When set, `default` and `autoIncrement` are not allowed                                                                                  |   Yes    |
| `generationStored` | `true` emits `STORED`, `false` (default) emits `VIRTUAL`. Only meaningful with `generated`. PostgreSQL always emits `STORED`                                                             |   Yes    |
| `invisible`        | `true` declares an INVISIBLE column (MySQL 8.0.23+). PostgreSQL and SQLite ignore the flag                                                                                               |   Yes    |
| `notNull`          | Column cannot store null values                                                                                                                                                             |   Yes    |
| `primary`          | `true` if the column is part of the table's primary key                                                                                                                                  |   Yes    |
| `scale`            | `DECIMAL` or `NUMBER` columns maybe have a scale to specify how many decimals should be stored                                                                                           |   Yes    |
| `size`             | Some types of columns like `VARCHAR` or `INTEGER` may have a specific size                                                                                                               |   Yes    |
| `type`             | Column type. Must be a [Phalcon\Db\Column][db-column] constant (see below for a list)                                                                                                    |    No    |
| `unsigned`         | `INTEGER` columns may be `signed` or `unsigned`. This option does not apply to other types of columns                                                                                    |   Yes    |

The following database column types are supported by the adapters:

* `Phalcon\Db\Column::TYPE_INTEGER`
* `Phalcon\Db\Column::TYPE_DATE`
* `Phalcon\Db\Column::TYPE_VARCHAR`
* `Phalcon\Db\Column::TYPE_DECIMAL`
* `Phalcon\Db\Column::TYPE_DATETIME`
* `Phalcon\Db\Column::TYPE_CHAR`
* `Phalcon\Db\Column::TYPE_TEXT`

The associative array passed in `createTable()` can have the following keys:

| Index        | Description                                                                               | Optional |
|--------------|-------------------------------------------------------------------------------------------|:--------:|
| `columns`    | An array with columns defined with [Phalcon\Db\Column][db-column]                         |    No    |
| `indexes`    | An array with indexes defined with [Phalcon\Db\Index][db-index]                           |   Yes    |
| `references` | An array with references (foreign keys) defined with [Phalcon\Db\Reference][db-reference] |   Yes    |
| `checks`     | An array with CHECK constraints defined with `Phalcon\Db\Check` - see *CHECK constraints* |   Yes    |
| `options`    | An array with database-specific creation options (`TABLE_COMMENT` - see *Table Comments*) |   Yes    |

### Alter

As your application grows, you might need to alter your database, as part of a refactoring or adding new features. Not all database systems allow you to modify existing columns or add columns between two existing ones. [Phalcon\Db][db-column] is limited by these constraints.

```php
<?php

use Phalcon\Db\Column as Column;

$connection->addColumn(
'co_invoices',
null,
new Column(
    'inv_status_flag',
    [
        'type'    => Column::TYPE_INTEGER,
        'size'    => 1,
        'notNull' => true,
        'default' => 0,
        'after'   => 'inv_cst_id',
    ]
)
);

$connection->modifyColumn(
'co_invoices',
null,
new Column(
    'inv_status_flag',
    [
        'type'    => Column::TYPE_INTEGER,
        'size'    => 2,
        'notNull' => true,
    ]
)
);

$connection->dropColumn(
'co_invoices',
null,
'inv_status_flag'
);
```

### Drop

To drop an existing table from the current database, use the `dropTable` method. To drop a table from a custom database, you can use the second parameter to set the database name.

```php
<?php

$connection->dropTable('co_invoices');
```

Drop the table `co_invoices` from the active database

```php
<?php

$connection->dropTable('co_invoices', 'phalcon_db');
```

Drop the table `co_invoices` from the database `phalcon_db`

## Modern Database Features

The following sections document column, index, and query features available across MySQL, PostgreSQL, and SQLite. Each subsection lists the engines that support the feature and the API surface used to drive it from `Phalcon\Db`.

### Generated Columns

A generated (computed) column derives its value from an SQL expression evaluated on every row.

- MySQL 5.7+ supports both `VIRTUAL` and `STORED` generated columns
- PostgreSQL 12+ supports only `STORED` generated columns
- SQLite 3.31+ supports both `VIRTUAL` and `STORED` generated columns

Use the `generated` key on the column definition to provide the SQL expression; use `generationStored` to choose storage:

```php
<?php

use Phalcon\Db\Column;

$total = new Column(
'line_total',
[
    'type'             => Column::TYPE_DECIMAL,
    'size'             => 10,
    'scale'            => 2,
    'generated'        => 'unit_price * quantity',
    'generationStored' => true,         // false (default) emits VIRTUAL
    'notNull'          => true,
]
);

$connection->addColumn('invoice_lines', null, $total);
```

The dialect emits:

```sql
ALTER TABLE `invoice_lines` ADD `line_total` DECIMAL(10,2)
GENERATED ALWAYS AS (unit_price * quantity) STORED NOT NULL
```

A `Phalcon\Db\Column` with `generated` set rejects `default` and `autoIncrement` - both throw `Phalcon\Db\Exception` from the constructor because the underlying engines do not allow them on generated columns. Use `Column::isGenerated()`, `Column::isGenerationStored()`, and `Column::getGenerationExpression()` to inspect a column.

`Phalcon\Db\Adapter\Pdo\Mysql::describeColumns()` and `Phalcon\Db\Adapter\Pdo\Postgresql::describeColumns()` reverse-engineer the flag and the expression. `Phalcon\Db\Adapter\Pdo\Sqlite::describeColumns()` reports only `isGenerated()` and `isGenerationStored()` - SQLite does not expose the expression through any pragma, so `getGenerationExpression()` round-trips as an empty string.

### Default Value Expressions

Default values that are not plain scalars - for example MySQL 8.0.13+ `DEFAULT (UUID())`, PostgreSQL `DEFAULT gen_random_uuid()`, or SQLite 3.31+ `DEFAULT strftime('%s','now')` - must be wrapped in `Phalcon\Db\RawValue` so the dialect emits them verbatim instead of quoting:

```php
<?php

use Phalcon\Db\Column;
use Phalcon\Db\RawValue;

$id = new Column(
'id',
[
    'type'    => Column::TYPE_CHAR,
    'size'    => 36,
    'default' => new RawValue('gen_random_uuid()'),  // PostgreSQL
    'notNull' => true,
    'primary' => true,
]
);
```

Plain scalar values, the keywords `NULL` / `CURRENT_TIMESTAMP`, and numeric values continue to behave as before. The `RawValue` path is required only when the default is an SQL expression.

### Reading Column Defaults on MariaDB

`Phalcon\Db\Adapter\Pdo\Mysql::describeColumns()` reports the value a column defaults to, regardless of how the server stores that information.

- MySQL 8.0 returns `INFORMATION_SCHEMA.COLUMNS.COLUMN_DEFAULT` as the resolved literal
- MariaDB 10.2.7+ returns it as the DDL source, so string, date and time literals arrive wrapped in single quotes
- PostgreSQL and SQLite are served by their own adapters and are unaffected

The adapter identifies MariaDB from the server version, then removes the quoting and resolves the escape sequences inside the literal before building the `Phalcon\Db\Column`. `Phalcon\Db\Column::getDefault()` returns the stored value on both engines.

```php
<?php

$columns = $connection->describeColumns('co_invoices');

foreach ($columns as $column) {
echo $column->getName(), ' => ', var_export($column->getDefault(), true), PHP_EOL;
}
```

For the declarations below, `getDefault()` returns the same value on MySQL and MariaDB:

| Column declaration                       | `getDefault()` |
|------------------------------------------|----------------|
| `VARCHAR(2) NOT NULL DEFAULT 'fi'`       | `fi`           |
| `TIME NOT NULL DEFAULT '08:00:00'`       | `08:00:00`     |
| `VARCHAR(20) NOT NULL DEFAULT 'it''s'`   | `it's`         |
| `DECIMAL(10,4) NOT NULL DEFAULT 14.5678` | `14.5678`      |
| `BIT(1) NOT NULL DEFAULT b'1'`           | `b'1'`         |
| `VARCHAR(10) DEFAULT NULL`               | `null`         |

A column declared `DEFAULT NULL` reports PHP `null` rather than the string `NULL`.

Two cases are reported as the server renders them, and are not normalized. An expression default such as `DEFAULT (CONCAT('a','b'))` reports `concat('a','b')` on MariaDB and `concat(_latin1\'a\',_latin1\'b\')` on MySQL. A column declared `DEFAULT CURRENT_TIMESTAMP` reports `CURRENT_TIMESTAMP` on MySQL and `current_timestamp()` on MariaDB. Compare these case-insensitively when the value can come from either engine.

MariaDB releases before 10.2.7 do not quote literal defaults at all. Those values pass through unchanged.

### Invisible Columns (MySQL 8.0.23+)

An `INVISIBLE` column is hidden from `SELECT *` expansion but can still be referenced explicitly. It is useful when phasing a legacy column out of read paths before dropping it.

```php
<?php

use Phalcon\Db\Column;

$legacy = new Column(
'legacy_id',
[
    'type'      => Column::TYPE_INTEGER,
    'size'      => 11,
    'notNull'   => true,
    'invisible' => true,
]
);

$connection->addColumn('robots', null, $legacy);
```

The MySQL dialect emits `INVISIBLE` immediately after the `NOT NULL` / `NULL` clause. PostgreSQL and SQLite have no equivalent concept and ignore the flag. Use `Column::isInvisible()` to inspect.

### Array Columns (PostgreSQL)

PostgreSQL allows any base type to be declared as an array (e.g. `INTEGER[]`, `TEXT[]`, `INET[]`).

```php
<?php

use Phalcon\Db\Column;

$tags = new Column(
'tags',
[
    'type'    => Column::TYPE_INTEGER,
    'array'   => true,
    'notNull' => true,
]
);

$connection->addColumn('articles', null, $tags);
// ALTER TABLE "articles" ADD COLUMN "tags" INT[] NOT NULL
```

`Column::isArray()` reports the flag. MySQL and SQLite dialects ignore it. `Phalcon\Db\Adapter\Pdo\Postgresql::describeColumns()` reverse-engineers the flag when `information_schema.columns.data_type` reports `ARRAY`.

### Spatial / Geometry Columns

Eight spatial types are exposed via dedicated `Column::TYPE_*` constants - see the *Spatial Column Types* table earlier in this document.

```php
<?php

use Phalcon\Db\Column;

$location = new Column(
'location',
[
    'type'    => Column::TYPE_POINT,
    'notNull' => true,
]
);

$connection->createTable(
'places',
null,
[
    'columns' => [
        new Column(
            'id',
            [
                'type'          => Column::TYPE_INTEGER,
                'primary'       => true,
                'autoIncrement' => true,
                'notNull'       => true,
            ]
        ),
        $location,
    ],
]
);
```

MySQL recognizes the keywords natively from 5.7. PostgreSQL needs the PostGIS extension installed. SQLite has no native spatial support and falls through to `VARCHAR` for these constants.

When selecting a spatial column directly, the underlying engine returns the raw WKB byte string. Project a server-side conversion in the SELECT to receive a usable representation:

```sql
SELECT id, ST_AsText(location) AS location FROM places;
```

The `Phalcon\Db\Geometry` namespace provides value objects for the eight geometry types: `Point`, `LineString`, `Polygon`, `MultiPoint`, `MultiLineString`, `MultiPolygon`, `GeometryCollection`, and the shared `GeometryInterface`. Each object exposes its coordinates and SRID and renders Well-Known Text through `toWkt()` (also available through `__toString()`).

The geometry value objects implement the canonical `Phalcon\Contracts\Db\Geometry\Geometry` contract (`getSrid()`, `getType()`, `toWkt()`). New code should type-hint that contract; `Phalcon\Db\Geometry\GeometryInterface` remains as a deprecated alias that extends it and will be removed in a future major version.

`Phalcon\Db\Geometry\WkbParser` decodes a raw column value into the matching object. It accepts MySQL SRID-prefixed WKB and PostGIS EWKB. Coordinates are read in two dimensions; any Z or M ordinates are discarded.

```php
<?php

use Phalcon\Db\Geometry\WkbParser;

// $raw is the value returned by the database for a POINT column
$point = (new WkbParser())->parse($raw);

echo $point->getX();    // 1
echo $point->getY();    // 2
echo $point->getSrid(); // 4326
echo $point->toWkt();   // POINT(1 2)
```

A value that cannot be decoded throws `Phalcon\Db\Exceptions\InvalidWkb`.

Models hydrate spatial columns into these objects on read when `orm.cast_on_hydrate` is enabled. See [Spatial Column Hydration](/5.20/db-models/) in the models documentation.

### CHECK Constraints

A `CHECK` constraint enforces a boolean SQL predicate on every row of a table; rows that fail the predicate are rejected at `INSERT` / `UPDATE` time.

- MySQL 8.0.16+ enforces CHECK constraints
- PostgreSQL has always enforced CHECK constraints
- SQLite has always enforced CHECK constraints

Use the `Phalcon\Db\Check` class. Its definition array accepts a single `expression` key (a non-empty SQL string):

```php
<?php

use Phalcon\Db\Check;
use Phalcon\Db\Column;

$positivePrice = new Check(
'chk_price_positive',
[
    'expression' => 'price > 0',
]
);

$connection->createTable(
'products',
null,
[
    'columns' => [
        new Column(
            'id',
            [
                'type'          => Column::TYPE_INTEGER,
                'primary'       => true,
                'autoIncrement' => true,
                'notNull'       => true,
            ]
        ),
        new Column(
            'price',
            [
                'type'    => Column::TYPE_DECIMAL,
                'size'    => 10,
                'scale'   => 2,
                'notNull' => true,
            ]
        ),
    ],
    'checks' => [$positivePrice],
]
);
```

The first argument is the constraint name. Pass an empty string for an anonymous check; the dialect omits the `CONSTRAINT <name>` prefix in that case.

CHECK constraints can also be added to or removed from an existing table on MySQL and PostgreSQL. SQLite cannot - its CHECK constraints can only be declared at `CREATE TABLE` time:

```php
<?php

$connection->addCheck('products', null, $positivePrice);
$connection->dropCheck('products', null, 'chk_price_positive');
```

Reverse-engineering of CHECK constraints from `information_schema.CHECK_CONSTRAINTS` is not currently exposed through `describeReferences()` - the constraints exist on the table but are not enumerated by the adapter.

### Advanced Index Features

#### Definition-Array Constructor

The `Phalcon\Db\Index` constructor now accepts either the legacy positional form or a definition-array form. The definition-array form is required to opt in to invisible / descending / partial / functional / concurrent indexes:

```php
<?php

use Phalcon\Db\Index;

// Legacy positional form (unchanged)
$idxA = new Index('idx_email', ['email'], 'UNIQUE');

// Definition-array form
$idxB = new Index(
'idx_email',
[
    'columns'    => ['email'],
    'type'       => 'UNIQUE',
    'invisible'  => true,                 // MySQL 8.0+
    'directions' => ['DESC'],             // per-column ASC / DESC
    'where'      => 'active = true',      // partial index, PgSQL + SQLite
    'concurrently' => true,               // PostgreSQL
]
);
```

Detection is based on the presence of a `columns` key in the second argument. When the definition form is used the third positional `type` argument is ignored - `type` is taken from the definition array.

The definition-array path throws `Phalcon\Db\Exception` if `columns` is not an array, if `directions` is not an array, or if `where` is not a string.

#### Invisible Indexes (MySQL 8.0+)

An invisible index is maintained by the engine but ignored by the query planner. Use it to validate that a table still performs adequately after a planned index drop without paying for the rebuild on rollback.

```php
<?php

use Phalcon\Db\Index;

$idx = new Index(
'idx_hidden',
[
    'columns'   => ['email'],
    'type'      => 'UNIQUE',
    'invisible' => true,
]
);

$connection->addIndex('robots', null, $idx);
// ALTER TABLE `robots` ADD UNIQUE INDEX `idx_hidden` (`email`) INVISIBLE
```

`Index::isInvisible()` reports the flag at runtime. `Phalcon\Db\Adapter\Pdo\Mysql::describeIndexes()` reverse-engineers it from the `Visible` column of `SHOW INDEXES` (MySQL 8.0+; absent on 5.7, which defaults to visible). PostgreSQL and SQLite ignore the flag.

#### Descending Indexes

Per-column `ASC` / `DESC` directions are declared with the `directions` key - a parallel array, one entry per column. Missing trailing positions default to `ASC`.

```php
<?php

use Phalcon\Db\Index;

$idx = new Index(
'idx_recent_active',
[
    'columns'    => ['created_at', 'status'],
    'directions' => ['DESC', 'ASC'],
]
);

$connection->addIndex('events', null, $idx);
// ALTER TABLE `events` ADD INDEX `idx_recent_active`
//     (`created_at` DESC, `status` ASC)
```

Honored by MySQL 8.0+ (5.7 parsed `DESC` but ignored it at the optimizer level), PostgreSQL, and SQLite. `Index::getDirections()` returns the configured list; an empty array preserves the legacy plain `(col1, col2)` rendering.

`Phalcon\Db\Adapter\Pdo\Mysql::describeIndexes()` reverse-engineers directions from the `Collation` field of `SHOW INDEXES` (`A`=ASC, `D`=DESC). PostgreSQL and SQLite reverse-engineering of directions is deferred.

#### Partial Indexes

PostgreSQL and SQLite allow an index to be restricted to rows matching a predicate.

```php
<?php

use Phalcon\Db\Index;

$idx = new Index(
'idx_active_users',
[
    'columns' => ['email'],
    'where'   => 'active = true',
]
);

$connection->addIndex('users', null, $idx);
// CREATE INDEX "idx_active_users" ON "users" ("email") WHERE active = true
```

MySQL has no partial-index feature and its dialect silently drops the predicate.

#### Functional / Expression Indexes

Index entries may be plain column names (escaped as identifiers) or `Phalcon\Db\RawValue` instances (emitted verbatim). The two may be mixed within a single index:

```php
<?php

use Phalcon\Db\Index;
use Phalcon\Db\RawValue;

$idx = new Index(
'idx_lower_email',
[
    'columns' => [
        'tenant_id',
        new RawValue('LOWER(email)'),
    ],
]
);

$connection->addIndex('users', null, $idx);
```

The MySQL and PostgreSQL dialects wrap each expression entry in extra parentheses (`KEY idx (\`tenant_id\`, (LOWER( email)))`); SQLite emits the expression directly. Expressions compose with `directions` and `where` without any additional API surface.

#### Concurrent Index Creation (PostgreSQL)

`CREATE INDEX CONCURRENTLY` builds the index without taking the strong lock that normally blocks writers - useful when adding an index to a large table in production.

```php
<?php

use Phalcon\Db\Index;

$idx = new Index(
'idx_orders_status',
[
    'columns'      => ['status'],
    'concurrently' => true,
]
);

$connection->addIndex('orders', null, $idx);
// CREATE INDEX CONCURRENTLY "idx_orders_status" ON "orders" ("status")
```

MySQL and SQLite have no equivalent feature and silently ignore the flag.

### Row Locking

The `forUpdate()` and `sharedLock()` SQL transformers accept an optional second argument that appends a row-lock disposition keyword. Use the constants on `Phalcon\Contracts\Db\Dialect` (also reachable as `Phalcon\Db\Dialect::LOCK_*` via inheritance):

| Constant                    | Keyword       | Behavior                                   |
|-----------------------------|---------------|--------------------------------------------|
| `Dialect::LOCK_NONE`        | `''` (empty)  | Default - no modifier                      |
| `Dialect::LOCK_NOWAIT`      | `NOWAIT`      | Fail immediately if a needed row is locked |
| `Dialect::LOCK_SKIP_LOCKED` | `SKIP LOCKED` | Skip already-locked rows                   |

`NOWAIT` and `SKIP LOCKED` are recognized by MySQL 8.0+ and PostgreSQL 9.5+. SQLite has no row-level locking and silently ignores the modifier. MySQL's legacy `LOCK IN SHARE MODE` syntax produced by `sharedLock()` does not accept these modifiers either; the MySQL `sharedLock()` accepts the second argument for signature parity but ignores it.

```php
<?php

use Phalcon\Db\Dialect;
use Phalcon\Db\Enum;

$sql = "SELECT * FROM jobs WHERE state = 'queued' LIMIT 10";

// Pop a batch of jobs without contending with peer workers
$batch = $connection->fetchAll(
$connection->forUpdate($sql, Dialect::LOCK_SKIP_LOCKED)
);

// PostgreSQL - FOR SHARE NOWAIT
$rows = $connection->fetchAll(
$connection->sharedLock(
    'SELECT * FROM accounts WHERE id = :id',
    Dialect::LOCK_NOWAIT
),
Enum::FETCH_ASSOC,
['id' => 42]
);
```

`sharedLock()` emits:

- **MySQL** - `<sql> LOCK IN SHARE MODE` (modifier ignored)
- **PostgreSQL** - `<sql> FOR SHARE [NOWAIT|SKIP LOCKED]`
- **SQLite** - `<sql>` unchanged

### Upserts - `ON CONFLICT DO UPDATE`

PostgreSQL 9.5+ and SQLite 3.24+ accept the SQL-standard `ON CONFLICT (col) DO UPDATE SET other = excluded.other` upsert syntax. Use `onConflictUpdate()` on the dialect or adapter to append the clause to an existing `INSERT` statement:

```php
<?php

$sql = "INSERT INTO products (sku, name, price) VALUES (?, ?, ?)";

$upsertSql = $connection->onConflictUpdate(
$sql,
['sku'],          // conflict-target columns
['name', 'price'] // columns to overwrite with EXCLUDED.*
);

$connection->execute(
$upsertSql,
['SKU-001', 'Widget', 9.99]
);
// INSERT INTO products (sku, name, price) VALUES (?, ?, ?)
//   ON CONFLICT ("sku") DO UPDATE SET
//     "name" = excluded."name", "price" = excluded."price"
```

`Phalcon\Db\Dialect\Mysql::onConflictUpdate()` throws `Phalcon\Db\Exception` because MySQL's equivalent uses the incompatible `INSERT ... ON DUPLICATE KEY UPDATE` syntax. Use raw SQL on MySQL until a dedicated helper ships.

Passing an empty `conflictColumns` or `updateColumns` array throws.

### `RETURNING` Clauses

PostgreSQL and SQLite 3.35+ allow `INSERT` / `UPDATE` / `DELETE` to return rows. `returning()` on the dialect or adapter appends the clause:

```php
<?php

$sql = "INSERT INTO articles (slug, title) VALUES ('hello', 'Hello')";

// Specific columns
$withReturning = $connection->returning($sql, ['id', 'created_at']);
$row = $connection->fetchOne($withReturning);

// All columns
$withReturning = $connection->returning(
"UPDATE articles SET title = 'Updated' WHERE id = 42",
['*']
);
$row = $connection->fetchOne($withReturning);
```

`Phalcon\Db\Dialect\Mysql::returning()` throws (no `RETURNING` construct). An empty `columns` array throws on every dialect.

### Materialized Views (PostgreSQL)

A materialized view caches the result of a query as a real table; you control when it is refreshed.

```php
<?php

// Create
$connection->createMaterializedView(
'top_orders',
[
    'sql' => 'SELECT customer_id, SUM(total) AS total
              FROM orders
              GROUP BY customer_id
              ORDER BY total DESC
              LIMIT 100',
],
'public'
);

// Refresh (concurrent = non-blocking; requires a unique index on the view)
$connection->refreshMaterializedView('top_orders', 'public', true);

// Drop
$connection->dropMaterializedView('top_orders', 'public');
```

The MySQL and SQLite dialects throw `Phalcon\Db\Exception` from each of the three methods - neither engine has a materialized-view concept.

### Capability Detection

Several of the features above are supported by only some engines; the unsupported dialects throw a `Phalcon\Db\Exception` rather than emit invalid SQL. Each optional capability has a predicate on the dialect, so portable code can check support before calling instead of catching the exception:

| Predicate                     | MySQL | PostgreSQL | SQLite |
|-------------------------------|-------|------------|--------|
| `supportsReturning()`         | no    | yes        | yes    |
| `supportsOnConflictUpdate()`  | no    | yes        | yes    |
| `supportsMaterializedViews()` | no    | yes        | no     |
| `supportsAlterTable()`        | yes   | yes        | no     |

`supportsAlterTable()` returns `false` on SQLite because it cannot modify existing columns or add or drop foreign keys, primary keys, or check constraints through `ALTER TABLE`; basic `ADD COLUMN` and `DROP COLUMN` remain available. The related `supportsSavepoints()` and `supportsReleaseSavepoints()` predicates report transaction-savepoint support.

Read a predicate through the dialect, reachable from the adapter with `getDialect()`:

```php
<?php

use Phalcon\Db\Adapter\Pdo\Postgresql;

$connection = new Postgresql(
[
    'host'     => '127.0.0.1',
    'username' => 'postgres',
    'password' => 'secret',
    'dbname'   => 'store',
]
);

$dialect = $connection->getDialect();

if ($dialect->supportsReturning()) {
$sql = $connection->returning(
    "INSERT INTO articles (slug, title) VALUES ('hello', 'Hello')",
    ['id']
);

$row = $connection->fetchOne($sql);
}
```

The predicates are declared on `Phalcon\Db\Dialect` with defaults matching the base behavior and overridden per dialect. The matching exceptions (`Phalcon\Db\Dialect\Mysql::returning()` and the others) remain as the enforcement backstop.

### SQLite `DROP COLUMN`

SQLite 3.35+ supports `ALTER TABLE ... DROP COLUMN ...` natively. `Phalcon\Db\Dialect\Sqlite::dropColumn()` now emits the statement (previously it threw unconditionally). On older SQLite versions the server itself rejects the statement at execution time.

```php
<?php

$connection->dropColumn('events', null, 'legacy_payload');
// ALTER TABLE "events" DROP COLUMN "legacy_payload"
```

`addPrimaryKey()`, `dropPrimaryKey()`, `modifyColumn()`, `addForeignKey()`, `dropForeignKey()`, `addCheck()`, and `dropCheck()` continue to throw on SQLite because of genuine engine limitations (table rebuild required).

### Table Comments

A table comment stores a human-readable description with the table definition in the database catalog.

- MySQL emits a `COMMENT='...'` table option on `CREATE TABLE`
- PostgreSQL emits a separate `COMMENT ON TABLE ... IS '...';` statement after the `CREATE TABLE` statement
- SQLite has no native table comment and ignores the option

Pass the comment in the `TABLE_COMMENT` key of the `options` array in the `createTable()` definition:

```php
<?php

use Phalcon\Db\Column;

$connection->createTable(
'co_invoices',
null,
[
    'columns' => [
        new Column(
            'inv_id',
            [
                'type'          => Column::TYPE_INTEGER,
                'size'          => 10,
                'notNull'       => true,
                'autoIncrement' => true,
                'primary'       => true,
            ]
        ),
    ],
    'options' => [
        'TABLE_COMMENT' => 'Customer invoices',
    ],
]
);
```

```sql
-- MySQL
CREATE TABLE `co_invoices` (...) COMMENT='Customer invoices';

-- PostgreSQL
CREATE TABLE "co_invoices" (...); COMMENT ON TABLE "co_invoices" IS 'Customer invoices';
```

Comment values are escaped by doubling single quotes; the PostgreSQL `COMMENT ON COLUMN` emission for the column-level `comment` option is escaped the same way. To read a comment back from a live database, call `tableOptions()` on the adapter: MySQL and PostgreSQL return the comment in the `table_comment` element of the result; SQLite returns an empty array.

## The `Phalcon\Contracts\Db` Namespace

The Db layer interfaces have been promoted to a new `Phalcon\Contracts\Db` namespace as part of an ongoing migration to a canonical contracts package. The new contracts are:

| Contract                               | Replaces                              |
|----------------------------------------|---------------------------------------|
| `Phalcon\Contracts\Db\Adapter\Adapter` | `Phalcon\Db\Adapter\AdapterInterface` |
| `Phalcon\Contracts\Db\Check`           | `Phalcon\Db\CheckInterface`           |
| `Phalcon\Contracts\Db\Column`          | `Phalcon\Db\ColumnInterface`          |
| `Phalcon\Contracts\Db\Dialect`         | `Phalcon\Db\DialectInterface`         |
| `Phalcon\Contracts\Db\Index`           | `Phalcon\Db\IndexInterface`           |
| `Phalcon\Contracts\Db\Reference`       | `Phalcon\Db\ReferenceInterface`       |
| `Phalcon\Contracts\Db\Result`          | `Phalcon\Db\ResultInterface`          |

The legacy `Phalcon\Db\*Interface` types are kept as thin `@deprecated` extensions of the contracts so existing typehints (`function fooBar(ColumnInterface $col)`) and implementations (`class MyColumn implements ColumnInterface`) continue to work unchanged.

For new code prefer typehinting against the contracts:

```php
<?php

use Phalcon\Contracts\Db\Column;

function describe(Column $column): string
{
return sprintf(
    '%s (%s)',
    $column->getName(),
    $column->getType()
);
}
```

A small number of methods that landed in this release are intentionally **not** declared on the contracts in the v5 / v6 line - they would be a breaking change for third-party implementors. They are documented in the class-level `@todo v7` block on each contract and are reachable on the concrete classes:

- `Phalcon\Db\Column`: `getGenerationExpression()`, `isArray()`, `isGenerated()`, `isGenerationStored()`, `isInvisible()`
- `Phalcon\Db\Index`: `getDirections()`, `getWhere()`, `isConcurrent()`, `isInvisible()`
- `Phalcon\Db\Check`: provided by the new contract; no legacy concern
- `Phalcon\Db\Dialect` (and the three concrete dialect subclasses): `addCheck()`, `dropCheck()`, `createMaterializedView()`, `dropMaterializedView()`, `refreshMaterializedView()`, `onConflictUpdate()`, `returning()`
- `Phalcon\Db\Adapter\AbstractAdapter`: the same method set as `Phalcon\Db\Dialect`, returning `bool` from `addCheck()` / `dropCheck()` / the materialized-view methods, and `string` from the SQL-transformer methods ( `onConflictUpdate()`, `returning()`)

These will be promoted to required interface members in v7. Until then, call them on the concrete classes or typehint against the abstract `Phalcon\Db\Dialect` / `Phalcon\Db\Adapter\AbstractAdapter` types.

## Exceptions

Any exceptions thrown in the `Phalcon\Db` namespace will be of type `Phalcon\Db\Exception`. You can use this exception to selectively catch exceptions thrown only from this component.

### Granular Exceptions

As of 5.14 the component raises granular subclasses of `Phalcon\Db\Exception` so callers can catch a specific failure mode. Every subclass extends `Phalcon\Db\Exception`, so existing `catch (Phalcon\Db\Exception $e)` blocks continue to work unchanged.

| Class                                                     | Parent                 | Thrown when                                                                                  |
|-----------------------------------------------------------|------------------------|----------------------------------------------------------------------------------------------|
| `Phalcon\Db\Exceptions\CannotInsertWithoutData`           | `Phalcon\Db\Exception` | `insert()` is called with no values.                                                         |
| `Phalcon\Db\Exceptions\CannotPrepareStatement`            | `Phalcon\Db\Exception` | The PDO driver fails to prepare a statement.                                                 |
| `Phalcon\Db\Exceptions\CheckExpressionRequired`           | `Phalcon\Db\Exception` | A `CHECK` constraint definition is missing its expression.                                   |
| `Phalcon\Db\Exceptions\ColumnTypeRejectsAutoIncrement`    | `Phalcon\Db\Exception` | A non-numeric column is marked `autoIncrement`.                                              |
| `Phalcon\Db\Exceptions\ColumnTypeRejectsScale`            | `Phalcon\Db\Exception` | A column type that has no fractional component is given a `scale`.                           |
| `Phalcon\Db\Exceptions\ColumnTypeRequired`                | `Phalcon\Db\Exception` | A column definition is missing its `type` key.                                               |
| `Phalcon\Db\Exceptions\ConflictTargetColumnRequired`      | `Phalcon\Db\Exception` | An `ON CONFLICT` clause has no target column.                                                |
| `Phalcon\Db\Exceptions\ConflictUpdateColumnRequired`      | `Phalcon\Db\Exception` | An `ON CONFLICT ... DO UPDATE` clause has no update column list.                             |
| `Phalcon\Db\Exceptions\ForeignKeyColumnsRequired`         | `Phalcon\Db\Exception` | A foreign-key definition omits its local columns.                                            |
| `Phalcon\Db\Exceptions\GeneratedAutoIncrementConflict`    | `Phalcon\Db\Exception` | A generated column is also marked `autoIncrement`.                                           |
| `Phalcon\Db\Exceptions\GeneratedDefaultConflict`          | `Phalcon\Db\Exception` | A generated column also declares a `default` value.                                          |
| `Phalcon\Db\Exceptions\IncompleteBindTypes`               | `Phalcon\Db\Exception` | The number of bind types does not match the number of bind parameters.                       |
| `Phalcon\Db\Exceptions\InvalidBindParameter`              | `Phalcon\Db\Exception` | A bind parameter cannot be processed (wrong type or unsupported value).                      |
| `Phalcon\Db\Exceptions\InvalidCheckExpression`            | `Phalcon\Db\Exception` | A `CHECK` constraint expression is not a string.                                             |
| `Phalcon\Db\Exceptions\InvalidGenerationExpression`       | `Phalcon\Db\Exception` | A column's `generated` expression is missing or not a string.                                |
| `Phalcon\Db\Exceptions\InvalidGroupByExpression`          | `Phalcon\Db\Exception` | A `GROUP BY` element is not a string or array.                                               |
| `Phalcon\Db\Exceptions\InvalidIndexColumns`               | `Phalcon\Db\Exception` | An index definition has no columns.                                                          |
| `Phalcon\Db\Exceptions\InvalidIndexDirections`            | `Phalcon\Db\Exception` | An index `directions` array has the wrong length or invalid entries.                         |
| `Phalcon\Db\Exceptions\InvalidIndexWhere`                 | `Phalcon\Db\Exception` | An index `where` clause is not a string.                                                     |
| `Phalcon\Db\Exceptions\InvalidListExpression`             | `Phalcon\Db\Exception` | A `LIST` SQL expression is not an array of values.                                           |
| `Phalcon\Db\Exceptions\InvalidOrderByExpression`          | `Phalcon\Db\Exception` | An `ORDER BY` element is not a string or array.                                              |
| `Phalcon\Db\Exceptions\InvalidSqlExpression`              | `Phalcon\Db\Exception` | A SQL expression definition is missing its `type` key.                                       |
| `Phalcon\Db\Exceptions\InvalidSqlExpressionType`          | `Phalcon\Db\Exception` | A SQL expression has an unrecognized `type`.                                                 |
| `Phalcon\Db\Exceptions\InvalidUnaryExpression`            | `Phalcon\Db\Exception` | A unary SQL expression is missing its operand.                                               |
| `Phalcon\Db\Exceptions\InvalidWhereConditions`            | `Phalcon\Db\Exception` | A `WHERE` condition is not a string or array.                                                |
| `Phalcon\Db\Exceptions\MatchedParameterNotFound`          | `Phalcon\Db\Exception` | A named bind parameter referenced in SQL is missing from the supplied parameters.            |
| `Phalcon\Db\Exceptions\MaterializedViewsNotSupported`     | `Phalcon\Db\Exception` | A materialized-view method is called on a dialect that does not support them (MySQL/SQLite). |
| `Phalcon\Db\Exceptions\MissingDefinitionKey`              | `Phalcon\Db\Exception` | A table or column definition array is missing a required key.                                |
| `Phalcon\Db\Exceptions\MissingForeignKeyChecks`           | `Phalcon\Db\Exception` | `foreign_key_checks()` is called on a dialect that does not expose the setting.              |
| `Phalcon\Db\Exceptions\MissingSqliteDatabase`             | `Phalcon\Db\Exception` | The SQLite adapter is instantiated without a `dbname`.                                       |
| `Phalcon\Db\Exceptions\MysqlOnConflictNotSupported`       | `Phalcon\Db\Exception` | `ON CONFLICT` is invoked against the MySQL dialect (which uses `ON DUPLICATE KEY UPDATE`).   |
| `Phalcon\Db\Exceptions\NestedTransactionChangeBlocked`    | `Phalcon\Db\Exception` | Nested-transaction mode is toggled while a transaction is already open.                      |
| `Phalcon\Db\Exceptions\NoActiveTransaction`               | `Phalcon\Db\Exception` | `commit()` or `rollback()` is called without an active transaction.                          |
| `Phalcon\Db\Exceptions\ReferencedColumnCountMismatch`     | `Phalcon\Db\Exception` | A foreign-key local/referenced column count mismatch.                                        |
| `Phalcon\Db\Exceptions\ReferencedColumnsRequired`         | `Phalcon\Db\Exception` | A foreign-key definition omits its referenced columns.                                       |
| `Phalcon\Db\Exceptions\ReferencedTableRequired`           | `Phalcon\Db\Exception` | A foreign-key definition omits its referenced table.                                         |
| `Phalcon\Db\Exceptions\ReturningNotSupported`             | `Phalcon\Db\Exception` | A `RETURNING` clause is used on a dialect that does not support it (MySQL).                  |
| `Phalcon\Db\Exceptions\ReturningRequiresColumn`           | `Phalcon\Db\Exception` | A `RETURNING` clause is invoked without any column names.                                    |
| `Phalcon\Db\Exceptions\SavepointsNotSupported`            | `Phalcon\Db\Exception` | Savepoint operations are requested on a connection that does not support them.               |
| `Phalcon\Db\Exceptions\SqliteAlterCheckNotSupported`      | `Phalcon\Db\Exception` | SQLite cannot `ALTER TABLE` to add or modify a `CHECK` constraint.                           |
| `Phalcon\Db\Exceptions\SqliteAlterColumnNotSupported`     | `Phalcon\Db\Exception` | SQLite cannot `ALTER TABLE` to modify a column in place.                                     |
| `Phalcon\Db\Exceptions\SqliteAlterForeignKeyNotSupported` | `Phalcon\Db\Exception` | SQLite cannot `ALTER TABLE` to add or modify a foreign key.                                  |
| `Phalcon\Db\Exceptions\SqliteAlterPrimaryKeyNotSupported` | `Phalcon\Db\Exception` | SQLite cannot `ALTER TABLE` to add or modify a primary key.                                  |
| `Phalcon\Db\Exceptions\SqliteDropCheckNotSupported`       | `Phalcon\Db\Exception` | SQLite cannot drop a `CHECK` constraint with `ALTER TABLE`.                                  |
| `Phalcon\Db\Exceptions\SqliteDropForeignKeyNotSupported`  | `Phalcon\Db\Exception` | SQLite cannot drop a foreign-key constraint with `ALTER TABLE`.                              |
| `Phalcon\Db\Exceptions\SqliteDropPrimaryKeyNotSupported`  | `Phalcon\Db\Exception` | SQLite cannot drop a primary-key constraint with `ALTER TABLE`.                              |
| `Phalcon\Db\Exceptions\TableMustHaveColumn`               | `Phalcon\Db\Exception` | A `createTable()` call is made with no columns.                                              |
| `Phalcon\Db\Exceptions\UnrecognizedDataType`              | `Phalcon\Db\Exception` | A column declares a data type the dialect cannot map.                                        |
| `Phalcon\Db\Exceptions\UpdateFieldCountMismatch`          | `Phalcon\Db\Exception` | The number of update fields does not match the number of bound values.                       |

[db-adapter-abstractadapter]: /5.20/api/phalcon_db/#dbadapterabstractadapter
[db-adapter-adapterinterface]: /5.20/api/phalcon_db/#dbadapteradapterinterface
[db-adapter-pdo-abstractpdo]: /5.20/api/phalcon_db/#dbadapterpdoabstractpdo
[db-adapter-pdo-mysql]: /5.20/api/phalcon_db/#dbadapterpdomysql
[db-adapter-pdo-postgresql]: /5.20/api/phalcon_db/#dbadapterpdopostgresql
[db-adapter-pdo-sqlite]: /5.20/api/phalcon_db/#dbadapterpdosqlite
[db-adapter-pdofactory]: /5.20/api/phalcon_db/#dbadapterpdofactory
[db-column]: /5.20/api/phalcon_db/#dbcolumn
[db-columninterface]: /5.20/api/phalcon_db/#dbcolumninterface
[db-dialect]: /5.20/api/phalcon_db/#dbdialect
[db-dialect-mysql]: /5.20/api/phalcon_db/#dbdialectmysql
[db-dialect-postgresql]: /5.20/api/phalcon_db/#dbdialectpostgresql
[db-dialect-sqlite]: /5.20/api/phalcon_db/#dbdialectsqlite
[db-dialectinterface]: /5.20/api/phalcon_db/#dbdialectinterface
[db-enum]: /5.20/api/phalcon_db/#dbenum
[db-exception]: /5.20/api/phalcon_db/#dbexception
[db-index]: /5.20/api/phalcon_db/#dbindex
[db-indexinterface]: /5.20/api/phalcon_db/#dbindexinterface
[db-phql]: /5.20/db-phql/
[db-profiler]: /5.20/api/phalcon_db/#dbprofiler
[db-profiler-item]: /5.20/api/phalcon_db/#dbprofileritem
[db-rawvalue]: /5.20/api/phalcon_db/#dbrawvalue
[db-reference]: /5.20/api/phalcon_db/#dbreference
[db-referenceinterface]: /5.20/api/phalcon_db/#dbreferenceinterface
[db-result-pdo]: /5.20/api/phalcon_db/#dbresultpdoresult
[db-resultinterface]: /5.20/api/phalcon_db/#dbresultinterface
[events]: /5.20/events/
[logger]: /5.20/logger/
[mvc-model]: /5.20/api/phalcon_mvc/#mvcmodel
[nested_transactions]: https://en.wikipedia.org/wiki/Nested_transaction
[pdo_quote]: https://www.php.net/manual/en/pdo.quote.php

Source: https://docs.phalcon.io/5.20/db-layer/index.mdx
