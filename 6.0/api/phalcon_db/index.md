---
title: "Phalcon Db"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Db

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Db\Adapter\AbstractAdapter

Abstract

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
        "SELECT * FROM co_invoices LIMIT 5"
    );

    $result->setFetchMode(Enum::FETCH_NUM);

    while ($invoice = $result->fetch()) {
        print_r($invoice);
    }
} catch (Exception $e) {
    echo $e->getMessage(), PHP_EOL;
}
```

- **`Phalcon\Db\Adapter\AbstractAdapter`** - implements [`Phalcon\Db\Adapter\AdapterInterface`](#dbadapteradapterinterface), [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)
  - [`Phalcon\Db\Adapter\Pdo\AbstractPdo`](#dbadapterpdoabstractpdo)

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\CheckInterface` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\CannotInsertWithoutData` · `Phalcon\Db\Exceptions\IncompleteBindTypes` · `Phalcon\Db\Exceptions\InvalidDialectClass` · `Phalcon\Db\Exceptions\NestedTransactionChangeBlocked` · `Phalcon\Db\Exceptions\SavepointsNotSupported` · `Phalcon\Db\Exceptions\TableMustHaveColumn` · `Phalcon\Db\Exceptions\UpdateFieldCountMismatch` · `Phalcon\Db\Index` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Support\Settings` · `Stringable`

### Method Summary

- `public __construct(array $descriptor)` — Phalcon\Db\Adapter constructor

- `public addCheck(string $tableName, string $schemaName, CheckInterface $check): bool` — Adds a CHECK constraint to a table. MySQL 8.0.16+ and PostgreSQL

- `public addColumn(string $tableName, string $schemaName, ColumnInterface $column): bool` — Adds a column to a table

- `public addForeignKey(string $tableName, string $schemaName, ReferenceInterface $reference): bool` — Adds a foreign key to a table

- `public addIndex(string $tableName, string $schemaName, IndexInterface $index): bool` — Adds an index to a table

- `public addPrimaryKey(string $tableName, string $schemaName, IndexInterface $index): bool` — Adds a primary key to a table

- `public createMaterializedView(string $viewName, array $definition, string|null $schemaName = null): bool` — Creates a materialized view (PostgreSQL only - MySQL and SQLite

- `public createSavepoint(string $name): bool` — Creates a new savepoint

- `public createTable(string $tableName, string $schemaName, array $definition): bool` — Creates a table

- `public createView(string $viewName, array $definition, string|null $schemaName = null): bool` — Creates a view

- `public delete(mixed $table, string|null $whereCondition = null, array $placeholders = [], array $dataTypes = []): bool` — Deletes data from a table using custom RBDM SQL syntax

- `public describeIndexes(string $table, string|null $schema = null): array` — Lists table indexes

- `public describeReferences(string $table, string|null $schema = null): array` — Lists table references

- `public dropCheck(string $tableName, string $schemaName, string $checkName): bool` — Drops a CHECK constraint from a table. SQLite throws.

- `public dropColumn(string $tableName, string $schemaName, string $columnName): bool` — Drops a column from a table

- `public dropForeignKey(string $tableName, string $schemaName, string $referenceName): bool` — Drops a foreign key from a table

- `public dropIndex(string $tableName, string $schemaName, mixed $indexName): bool` — Drop an index from a table

- `public dropMaterializedView(string $viewName, string|null $schemaName = null, bool $ifExists = true): bool` — Drops a materialized view (PostgreSQL only).

- `public dropPrimaryKey(string $tableName, string $schemaName): bool` — Drops a table's primary key

- `public dropTable(string $tableName, string|null $schemaName = null, bool $ifExists = true): bool` — Drops a table from a schema/database

- `public dropView(string $viewName, string|null $schemaName = null, bool $ifExists = true): bool` — Drops a view

- `public escapeIdentifier(mixed $identifier): string` — Escapes a column/table/schema name

- `public fetchAll(string $sqlQuery, int $fetchMode = Enum::FETCH_ASSOC, array $bindParams = [], array $bindTypes = []): array` — Dumps the complete result of a query into an array

- `public fetchColumn(string $sqlQuery, array $placeholders = [], mixed $column = 0): mixed` — Returns the n'th field of first row in a SQL query result

- `public fetchOne(string $sqlQuery, mixed $fetchMode = Enum::FETCH_ASSOC, array $bindParams = [], array $bindTypes = []): array|bool` — Returns the first row in a SQL query result

- `public forUpdate(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified with a FOR UPDATE clause

- `public getColumnDefinition(ColumnInterface $column): string` — Returns the SQL column definition from a column

- `public getColumnList(mixed $columnList): string` — Gets a list of columns

- `public getConnectionId(): int` — Gets the active connection unique identifier

- `public getDefaultIdValue(): RawValue` — Returns the default identity value to be inserted in an identity column

- `public getDefaultValue(): RawValue` — Returns the default value to make the RBDM use the default value declared

- `public getDescriptor(): array` — Return descriptor used to connect to the active database

- `public getDialect(): DialectInterface` — Returns internal dialect instance

- `public getDialectType(): string` — Name of the dialect used

- `public getNestedTransactionSavepointName(): string` — Returns the savepoint name to use for nested transactions

- `public getRealSQLStatement(): string` — Active SQL statement in the object without replace bound parameters

- `public getSQLBindTypes(): array` — Active SQL statement in the object

- `public getSQLStatement(): string` — Active SQL statement in the object

- `public getSQLVariables(): array` — Active SQL variables in the object

- `public getType(): string` — Type of database system the adapter is used for

- `public insert(string $table, array $values, mixed $fields = null, mixed $dataTypes = null): bool` — Inserts data into a table using custom RDBMS SQL syntax

- `public insertAsDict(string $table, mixed $data, mixed $dataTypes = null): bool` — Inserts data into a table using custom RBDM SQL syntax

- `public isNestedTransactionsWithSavepoints(): bool` — Returns if nested transactions should use savepoints

- `public limit(string $sqlQuery, mixed $number): string` — Appends a LIMIT clause to $sqlQuery argument

- `public listTables(string|null $schemaName = null): array` — List all tables on a database

- `public listViews(string|null $schemaName = null): array` — List all views on a database

- `public modifyColumn(string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface|null $currentColumn = null): bool` — Modifies a table column based on a definition

- `public onConflictUpdate(string $sqlQuery, array $conflictColumns, array $updateColumns): string` — Appends an `ON CONFLICT (...) DO UPDATE SET col = excluded.col`

- `public refreshMaterializedView(string $viewName, string|null $schemaName = null, bool $concurrent = false): bool` — Refreshes a materialized view (PostgreSQL only). Pass

- `public releaseSavepoint(string $name): bool` — Releases given savepoint

- `public returning(string $sqlQuery, array $columns): string` — Appends a RETURNING clause to an INSERT/UPDATE/DELETE SQL statement

- `public rollbackSavepoint(string $name): bool` — Rollbacks given savepoint

- `public setDialect(DialectInterface $dialect): void` — Sets the dialect used to produce the SQL

- `public setNestedTransactionsWithSavepoints(bool $nestedTransactionsWithSavepoints): AdapterInterface` — Set if nested transactions should use savepoints

- `public setup(array $options): void` — Enables/disables options in the Database component.

- `public sharedLock(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified with a shared-lock clause. The optional

- `public supportSequences(): bool` — Check whether the database system requires a sequence to produce

- `public supportsDefaultValue(): bool` — Check whether the database system support the DEFAULT

- `public tableExists(string $tableName, string|null $schemaName = null): bool` — Generates SQL checking for the existence of a schema.table

- `public tableOptions(string $tableName, string|null $schemaName = null): array` — Gets creation options from a table

- `public update(string $table, mixed $fields, mixed $values, mixed $whereCondition = null, mixed $dataTypes = null): bool` — Updates data on a table using custom RBDM SQL syntax

- `public updateAsDict(string $table, mixed $data, mixed $whereCondition = null, mixed $dataTypes = null): bool` — Updates data on a table using custom RBDM SQL syntax

- `public useExplicitIdValue(): bool` — Check whether the database system requires an explicit value for identity

- `public viewExists(string $viewName, string|null $schemaName = null): bool` — Generates SQL checking for the existence of a schema.view

- `protected checkSavepoints(): void` — Check if savepoints are supported

### Properties

- `protected int $connectionConsecutive = 0` — Connection ID

- `protected int $connectionId` — Active connection ID

- `protected db_descriptor $descriptor = []` — Descriptor used to connect to a database

- `protected DialectInterface $dialect` — Dialect instance

- `protected string $dialectType` — Name of the dialect used

- `protected string $realSqlStatement = ""` — The real SQL statement - what was executed

- `protected db_bind_types $sqlBindTypes = []` — Active SQL Bind Types

- `protected string $sqlStatement` — Active SQL Statement

- `protected db_bind_params $sqlVariables = []` — Active SQL bound parameter variables

- `protected int $transactionLevel = 0` — Current transaction level

- `protected bool $transactionsWithSavepoints = false` — Whether the database supports transactions with save points

- `protected string $type` — Type of database system the adapter is used for

### Methods

<h4 id="dbadapterabstractadapter-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $descriptor );
```

Phalcon\Db\Adapter constructor

Note: the `options` key is forwarded to the static `setup()` method,
which writes process-global settings affecting every connection in the
process. See `setup()`.

<h4 id="dbadapterabstractadapter-addcheck"><code>addCheck()</code></h4>

```php
public function addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
): bool;
```

Adds a CHECK constraint to a table. MySQL 8.0.16+ and PostgreSQL
issue `ALTER TABLE ... ADD CONSTRAINT ... CHECK (...)`; SQLite throws.

<h4 id="dbadapterabstractadapter-addcolumn"><code>addColumn()</code></h4>

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): bool;
```

Adds a column to a table

<h4 id="dbadapterabstractadapter-addforeignkey"><code>addForeignKey()</code></h4>

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): bool;
```

Adds a foreign key to a table

<h4 id="dbadapterabstractadapter-addindex"><code>addIndex()</code></h4>

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): bool;
```

Adds an index to a table

<h4 id="dbadapterabstractadapter-addprimarykey"><code>addPrimaryKey()</code></h4>

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): bool;
```

Adds a primary key to a table

<h4 id="dbadapterabstractadapter-creatematerializedview"><code>createMaterializedView()</code></h4>

```php
public function createMaterializedView(
    string $viewName,
    array $definition,
    string|null $schemaName = null
): bool;
```

Creates a materialized view (PostgreSQL only - MySQL and SQLite
throw via the dialect).

<h4 id="dbadapterabstractadapter-createsavepoint"><code>createSavepoint()</code></h4>

```php
public function createSavepoint( string $name ): bool;
```

Creates a new savepoint

<h4 id="dbadapterabstractadapter-createtable"><code>createTable()</code></h4>

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): bool;
```

Creates a table

<h4 id="dbadapterabstractadapter-createview"><code>createView()</code></h4>

```php
public function createView(
    string $viewName,
    array $definition,
    string|null $schemaName = null
): bool;
```

Creates a view

<h4 id="dbadapterabstractadapter-delete"><code>delete()</code></h4>

```php
public function delete(
    mixed $table,
    string|null $whereCondition = null,
    array $placeholders = [],
    array $dataTypes = []
): bool;
```

Deletes data from a table using custom RBDM SQL syntax

```php
// Deleting existing invoice
$success = $connection->delete(
    "co_invoices",
    "inv_id = 101"
);

// Next SQL sentence is generated
DELETE FROM `co_invoices` WHERE `inv_id` = 101
```

Warning! If $whereCondition is string it not escaped.

<h4 id="dbadapterabstractadapter-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
    string $table,
    string|null $schema = null
): array;
```

Lists table indexes

```php
print_r(
    $connection->describeIndexes("co_orders_x_products")
);
```

This base implementation consumes the dialect's `describeIndexes()` SQL
as `FETCH_NUM` rows by position: column index 2 is the index key name and
column index 4 is the indexed column name. A custom dialect's
`describeIndexes()` SQL must emit columns in that order, or a custom
adapter must override this method. All bundled adapters except PostgreSQL
override it.

<h4 id="dbadapterabstractadapter-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
    string $table,
    string|null $schema = null
): array;
```

Lists table references

```php
print_r(
    $connection->describeReferences("co_orders_x_products")
);
```

This base implementation consumes the dialect's `describeReferences()`
SQL as `FETCH_NUM` rows by position: index 1 is the local column, index 2
the constraint name, index 3 the referenced schema, index 4 the
referenced table, and index 5 the referenced column. A custom dialect's
`describeReferences()` SQL must emit columns in that order, or a custom
adapter must override this method. Every bundled adapter (MySQL,
PostgreSQL, SQLite) overrides it, so this base implementation has no
in-tree caller and effectively assumes the PostgreSQL row shape.

<h4 id="dbadapterabstractadapter-dropcheck"><code>dropCheck()</code></h4>

```php
public function dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
): bool;
```

Drops a CHECK constraint from a table. SQLite throws.

<h4 id="dbadapterabstractadapter-dropcolumn"><code>dropColumn()</code></h4>

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): bool;
```

Drops a column from a table

<h4 id="dbadapterabstractadapter-dropforeignkey"><code>dropForeignKey()</code></h4>

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): bool;
```

Drops a foreign key from a table

<h4 id="dbadapterabstractadapter-dropindex"><code>dropIndex()</code></h4>

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    mixed $indexName
): bool;
```

Drop an index from a table

<h4 id="dbadapterabstractadapter-dropmaterializedview"><code>dropMaterializedView()</code></h4>

```php
public function dropMaterializedView(
    string $viewName,
    string|null $schemaName = null,
    bool $ifExists = true
): bool;
```

Drops a materialized view (PostgreSQL only).

<h4 id="dbadapterabstractadapter-dropprimarykey"><code>dropPrimaryKey()</code></h4>

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): bool;
```

Drops a table's primary key

<h4 id="dbadapterabstractadapter-droptable"><code>dropTable()</code></h4>

```php
public function dropTable(
    string $tableName,
    string|null $schemaName = null,
    bool $ifExists = true
): bool;
```

Drops a table from a schema/database

<h4 id="dbadapterabstractadapter-dropview"><code>dropView()</code></h4>

```php
public function dropView(
    string $viewName,
    string|null $schemaName = null,
    bool $ifExists = true
): bool;
```

Drops a view

<h4 id="dbadapterabstractadapter-escapeidentifier"><code>escapeIdentifier()</code></h4>

```php
public function escapeIdentifier( mixed $identifier ): string;
```

Escapes a column/table/schema name

```php
$escapedTable = $connection->escapeIdentifier(
    "co_invoices"
);

$escapedTable = $connection->escapeIdentifier(
    [
        "store",
        "co_invoices",
    ]
);
```

<h4 id="dbadapterabstractadapter-fetchall"><code>fetchAll()</code></h4>

```php
public function fetchAll(
    string $sqlQuery,
    int $fetchMode = Enum::FETCH_ASSOC,
    array $bindParams = [],
    array $bindTypes = []
): array;
```

Dumps the complete result of a query into an array

```php
// Getting all invoices with associative indexes only
$invoices = $connection->fetchAll(
    "SELECT * FROM co_invoices",
    \Phalcon\Db\Enum::FETCH_ASSOC
);

foreach ($invoices as $invoice) {
    print_r($invoice);
}

 // Getting all invoices whose title contains the word "Test"
$invoices = $connection->fetchAll(
    "SELECT * FROM co_invoices WHERE inv_title LIKE :inv_title",
    \Phalcon\Db\Enum::FETCH_ASSOC,
    [
        "inv_title" => "%Test%",
    ]
);
foreach($invoices as $invoice) {
    print_r($invoice);
}
```

<h4 id="dbadapterabstractadapter-fetchcolumn"><code>fetchColumn()</code></h4>

```php
public function fetchColumn(
    string $sqlQuery,
    array $placeholders = [],
    mixed $column = 0
): mixed;
```

Returns the n'th field of first row in a SQL query result

```php
// Getting count of invoices
$invoicesCount = $connection->fetchColumn("SELECT count(*) FROM co_invoices");
print_r($invoicesCount);

// Getting the title of the last created invoice
$invoice = $connection->fetchColumn(
    "SELECT inv_id, inv_title FROM co_invoices ORDER BY inv_created_at DESC",
    1
);
print_r($invoice);
```

<h4 id="dbadapterabstractadapter-fetchone"><code>fetchOne()</code></h4>

```php
public function fetchOne(
    string $sqlQuery,
    mixed $fetchMode = Enum::FETCH_ASSOC,
    array $bindParams = [],
    array $bindTypes = []
): array|bool;
```

Returns the first row in a SQL query result

```php
// Getting first invoice
$invoice = $connection->fetchOne("SELECT * FROM co_invoices");
print_r($invoice);

// Getting first invoice with associative indexes only
$invoice = $connection->fetchOne(
    "SELECT * FROM co_invoices",
    \Phalcon\Db\Enum::FETCH_ASSOC
);
print_r($invoice);
```

<h4 id="dbadapterabstractadapter-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause

<h4 id="dbadapterabstractadapter-getcolumndefinition"><code>getColumnDefinition()</code></h4>

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Returns the SQL column definition from a column

<h4 id="dbadapterabstractadapter-getcolumnlist"><code>getColumnList()</code></h4>

```php
public function getColumnList( mixed $columnList ): string;
```

Gets a list of columns

<h4 id="dbadapterabstractadapter-getconnectionid"><code>getConnectionId()</code></h4>

```php
public function getConnectionId(): int;
```

Gets the active connection unique identifier

<h4 id="dbadapterabstractadapter-getdefaultidvalue"><code>getDefaultIdValue()</code></h4>

```php
public function getDefaultIdValue(): RawValue;
```

Returns the default identity value to be inserted in an identity column

```php
// Inserting a new invoice with a valid default value for the column 'inv_id'
$success = $connection->insert(
    "co_invoices",
    [
        $connection->getDefaultIdValue(),
        "Test Invoice",
        100,
    ],
    [
        "inv_id",
        "inv_title",
        "inv_total",
    ]
);
```

<h4 id="dbadapterabstractadapter-getdefaultvalue"><code>getDefaultValue()</code></h4>

```php
public function getDefaultValue(): RawValue;
```

Returns the default value to make the RBDM use the default value declared
in the table definition

```php
// Inserting a new invoice with a valid default value for the column 'inv_total'
$success = $connection->insert(
    "co_invoices",
    [
        "Test Invoice",
        $connection->getDefaultValue()
    ],
    [
        "inv_title",
        "inv_total",
    ]
);
```

@todo Return NULL if this is not supported by the adapter

<h4 id="dbadapterabstractadapter-getdescriptor"><code>getDescriptor()</code></h4>

```php
public function getDescriptor(): array;
```

Return descriptor used to connect to the active database

<h4 id="dbadapterabstractadapter-getdialect"><code>getDialect()</code></h4>

```php
public function getDialect(): DialectInterface;
```

Returns internal dialect instance

<h4 id="dbadapterabstractadapter-getdialecttype"><code>getDialectType()</code></h4>

```php
public function getDialectType(): string;
```

Name of the dialect used

<h4 id="dbadapterabstractadapter-getnestedtransactionsavepointname"><code>getNestedTransactionSavepointName()</code></h4>

```php
public function getNestedTransactionSavepointName(): string;
```

Returns the savepoint name to use for nested transactions

<h4 id="dbadapterabstractadapter-getrealsqlstatement"><code>getRealSQLStatement()</code></h4>

```php
public function getRealSQLStatement(): string;
```

Active SQL statement in the object without replace bound parameters

<h4 id="dbadapterabstractadapter-getsqlbindtypes"><code>getSQLBindTypes()</code></h4>

```php
public function getSQLBindTypes(): array;
```

Active SQL statement in the object

<h4 id="dbadapterabstractadapter-getsqlstatement"><code>getSQLStatement()</code></h4>

```php
public function getSQLStatement(): string;
```

Active SQL statement in the object

<h4 id="dbadapterabstractadapter-getsqlvariables"><code>getSQLVariables()</code></h4>

```php
public function getSQLVariables(): array;
```

Active SQL variables in the object

<h4 id="dbadapterabstractadapter-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Type of database system the adapter is used for

<h4 id="dbadapterabstractadapter-insert"><code>insert()</code></h4>

```php
public function insert(
    string $table,
    array $values,
    mixed $fields = null,
    mixed $dataTypes = null
): bool;
```

Inserts data into a table using custom RDBMS SQL syntax

```php
// Inserting a new invoice
$success = $connection->insert(
    "co_invoices",
    ["Test Invoice", 100],
    ["inv_title", "inv_total"]
);

// Next SQL sentence is sent to the database system
INSERT INTO `co_invoices` (`inv_title`, `inv_total`) VALUES ("Test Invoice", 100);
```

<h4 id="dbadapterabstractadapter-insertasdict"><code>insertAsDict()</code></h4>

```php
public function insertAsDict(
    string $table,
    mixed $data,
    mixed $dataTypes = null
): bool;
```

Inserts data into a table using custom RBDM SQL syntax

```php
// Inserting a new invoice
$success = $connection->insertAsDict(
    "co_invoices",
    [
        "inv_title" => "Test Invoice",
        "inv_total" => 100,
    ]
);

// Next SQL sentence is sent to the database system
INSERT INTO `co_invoices` (`inv_title`, `inv_total`) VALUES ("Test Invoice", 100);
```

<h4 id="dbadapterabstractadapter-isnestedtransactionswithsavepoints"><code>isNestedTransactionsWithSavepoints()</code></h4>

```php
public function isNestedTransactionsWithSavepoints(): bool;
```

Returns if nested transactions should use savepoints

<h4 id="dbadapterabstractadapter-limit"><code>limit()</code></h4>

```php
public function limit(
    string $sqlQuery,
    mixed $number
): string;
```

Appends a LIMIT clause to $sqlQuery argument

```php
echo $connection->limit("SELECT * FROM co_invoices", 5);
```

<h4 id="dbadapterabstractadapter-listtables"><code>listTables()</code></h4>

```php
public function listTables( string|null $schemaName = null ): array;
```

List all tables on a database

```php
print_r(
    $connection->listTables("blog")
);
```

@todo optimize this

<h4 id="dbadapterabstractadapter-listviews"><code>listViews()</code></h4>

```php
public function listViews( string|null $schemaName = null ): array;
```

List all views on a database

```php
print_r(
    $connection->listViews("blog")
);
```

<h4 id="dbadapterabstractadapter-modifycolumn"><code>modifyColumn()</code></h4>

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface|null $currentColumn = null
): bool;
```

Modifies a table column based on a definition

<h4 id="dbadapterabstractadapter-onconflictupdate"><code>onConflictUpdate()</code></h4>

```php
public function onConflictUpdate(
    string $sqlQuery,
    array $conflictColumns,
    array $updateColumns
): string;
```

Appends an `ON CONFLICT (...) DO UPDATE SET col = excluded.col`
upsert clause to the supplied INSERT statement. Supported by
PostgreSQL and SQLite 3.24+; MySQL throws.

<h4 id="dbadapterabstractadapter-refreshmaterializedview"><code>refreshMaterializedView()</code></h4>

```php
public function refreshMaterializedView(
    string $viewName,
    string|null $schemaName = null,
    bool $concurrent = false
): bool;
```

Refreshes a materialized view (PostgreSQL only). Pass
`concurrent = true` for non-blocking refresh.

<h4 id="dbadapterabstractadapter-releasesavepoint"><code>releaseSavepoint()</code></h4>

```php
public function releaseSavepoint( string $name ): bool;
```

Releases given savepoint

<h4 id="dbadapterabstractadapter-returning"><code>returning()</code></h4>

```php
public function returning(
    string $sqlQuery,
    array $columns
): string;
```

Appends a RETURNING clause to an INSERT/UPDATE/DELETE SQL statement
and returns the modified SQL. Supported by PostgreSQL and SQLite 3.35+;
MySQL throws (no RETURNING construct). Pass `["*"]` for `RETURNING *`.

<h4 id="dbadapterabstractadapter-rollbacksavepoint"><code>rollbackSavepoint()</code></h4>

```php
public function rollbackSavepoint( string $name ): bool;
```

Rollbacks given savepoint

<h4 id="dbadapterabstractadapter-setdialect"><code>setDialect()</code></h4>

```php
public function setDialect( DialectInterface $dialect ): void;
```

Sets the dialect used to produce the SQL

<h4 id="dbadapterabstractadapter-setnestedtransactionswithsavepoints"><code>setNestedTransactionsWithSavepoints()</code></h4>

```php
public function setNestedTransactionsWithSavepoints( bool $nestedTransactionsWithSavepoints ): AdapterInterface;
```

Set if nested transactions should use savepoints

<h4 id="dbadapterabstractadapter-setup"><code>setup()</code></h4>

```php
public static function setup( array $options ): void;
```

Enables/disables options in the Database component.

The flags are stored as process-global `Phalcon\Support\Settings`
(`db.escape_identifiers`, `db.force_casting`) and therefore affect every
connection in the process at once, last-writer-wins. Call this once at
bootstrap; it is not per-connection configuration. Because the
constructor calls `setup()` whenever a descriptor carries an `options`
key, constructing one adapter with `options` can change the SQL another,
already-configured connection generates.

<h4 id="dbadapterabstractadapter-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a shared-lock clause. The optional
`modifier` is passed straight to the dialect (use
`Dialect::LOCK_NOWAIT` / `Dialect::LOCK_SKIP_LOCKED` for PostgreSQL).

<h4 id="dbadapterabstractadapter-supportsequences"><code>supportSequences()</code></h4>

```php
public function supportSequences(): bool;
```

Check whether the database system requires a sequence to produce
auto-numeric values

<h4 id="dbadapterabstractadapter-supportsdefaultvalue"><code>supportsDefaultValue()</code></h4>

```php
public function supportsDefaultValue(): bool;
```

Check whether the database system support the DEFAULT
keyword (SQLite does not support it)

<h4 id="dbadapterabstractadapter-tableexists"><code>tableExists()</code></h4>

```php
public function tableExists(
    string $tableName,
    string|null $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.table

```php
var_dump(
    $connection->tableExists("blog", "posts")
);
```

<h4 id="dbadapterabstractadapter-tableoptions"><code>tableOptions()</code></h4>

```php
public function tableOptions(
    string $tableName,
    string|null $schemaName = null
): array;
```

Gets creation options from a table

```php
print_r(
    $connection->tableOptions("co_invoices")
);
```

<h4 id="dbadapterabstractadapter-update"><code>update()</code></h4>

```php
public function update(
    string $table,
    mixed $fields,
    mixed $values,
    mixed $whereCondition = null,
    mixed $dataTypes = null
): bool;
```

Updates data on a table using custom RBDM SQL syntax

```php
// Updating existing invoice
$success = $connection->update(
    "co_invoices",
    ["inv_title"],
    ["New Test Invoice"],
    "inv_id = 101"
);

// Next SQL sentence is sent to the database system
UPDATE `co_invoices` SET `inv_title` = "New Test Invoice" WHERE inv_id = 101

// Updating existing invoice with array condition and $dataTypes
$success = $connection->update(
    "co_invoices",
    ["inv_title"],
    ["New Test Invoice"],
    [
        "conditions" => "inv_id = ?",
        "bind"       => [$some_unsafe_id],
        "bindTypes"  => [PDO::PARAM_INT], // use only if you use
        $dataTypes param
    ],
    [
        PDO::PARAM_STR
    ]
);

```

Warning! If $whereCondition is string, it is not escaped.

<h4 id="dbadapterabstractadapter-updateasdict"><code>updateAsDict()</code></h4>

```php
public function updateAsDict(
    string $table,
    mixed $data,
    mixed $whereCondition = null,
    mixed $dataTypes = null
): bool;
```

Updates data on a table using custom RBDM SQL syntax
Another, more convenient syntax

```php
// Updating existing invoice
$success = $connection->updateAsDict(
    "co_invoices",
    [
        "inv_title" => "New Test Invoice",
    ],
    "inv_id = 101"
);

// Next SQL sentence is sent to the database system
UPDATE `co_invoices` SET `inv_title` = "New Test Invoice" WHERE inv_id = 101
```

<h4 id="dbadapterabstractadapter-useexplicitidvalue"><code>useExplicitIdValue()</code></h4>

```php
public function useExplicitIdValue(): bool;
```

Check whether the database system requires an explicit value for identity
columns

<h4 id="dbadapterabstractadapter-viewexists"><code>viewExists()</code></h4>

```php
public function viewExists(
    string $viewName,
    string|null $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.view

```php
var_dump(
    $connection->viewExists("active_users", "posts")
);
```

<h4 id="dbadapterabstractadapter-checksavepoints"><code>checkSavepoints()</code></h4>

```php
protected function checkSavepoints(): void;
```

Check if savepoints are supported


## Db\Adapter\AdapterInterface

Interface

Phalcon\Db\Adapter\AdapterInterface

- [`Phalcon\Contracts\Db\Adapter\Adapter`](/6.0/api/phalcon_contracts/#contractsdbadapteradapter)
  - **`Phalcon\Db\Adapter\AdapterInterface`**

`Phalcon\Contracts\Db\Adapter\Adapter`


## Db\Adapter\PdoFactory

Class

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/6.0/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Db\Adapter\PdoFactory`**

`Exception` · `Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Adapter\Pdo\Mysql` · `Phalcon\Db\Adapter\Pdo\Postgresql` · `Phalcon\Db\Adapter\Pdo\Sqlite` · `Phalcon\Db\Exception` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Support\Exception`

### Method Summary

- `public __construct(array $services = [])` — Constructor.

- `public load(mixed $config): AdapterInterface` — Factory to create an instance from a Config object

- `public newInstance(string $name, array $options = []): AdapterInterface` — Create a new instance of the adapter

- `protected getExceptionClass(): string`

- `protected getServices(): array` — Returns the available adapters

### Methods

<h4 id="dbadapterpdofactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

Constructor.

<h4 id="dbadapterpdofactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): AdapterInterface;
```

Factory to create an instance from a Config object

<h4 id="dbadapterpdofactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
    string $name,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<h4 id="dbadapterpdofactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="dbadapterpdofactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters


## Db\Adapter\Pdo\AbstractPdo

Abstract

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

- [`Phalcon\Db\Adapter\AbstractAdapter`](#dbadapterabstractadapter)
  - **`Phalcon\Db\Adapter\Pdo\AbstractPdo`**
    - [`Phalcon\Db\Adapter\Pdo\Mysql`](#dbadapterpdomysql)
    - [`Phalcon\Db\Adapter\Pdo\Postgresql`](#dbadapterpdopostgresql)
    - [`Phalcon\Db\Adapter\Pdo\Sqlite`](#dbadapterpdosqlite)

`PDO` · `PDOException` · `PDOStatement` · `Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Adapter\AbstractAdapter` · `Phalcon\Db\Column` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\CannotPrepareStatement` · `Phalcon\Db\Exceptions\InvalidBindParameter` · `Phalcon\Db\Exceptions\MatchedParameterNotFound` · `Phalcon\Db\Exceptions\NoActiveTransaction` · `Phalcon\Db\ResultInterface` · `Phalcon\Db\Result\PdoResult` · `Phalcon\Events\Exception` · `Phalcon\Support\Settings` · `Throwable`

### Method Summary

- `public __construct(array $descriptor)` — Constructor for Phalcon\Db\Adapter\Pdo

- `public affectedRows(): int` — Returns the number of affected rows by the latest INSERT/UPDATE/DELETE

- `public begin(bool $nesting = true): bool` — Starts a transaction in the connection

- `public close(): void` — Closes the active connection returning success. Phalcon automatically

- `public commit(bool $nesting = true): bool` — Commits the active transaction in the connection

- `public connect(array $descriptor = []): void` — This method is automatically called in \Phalcon\Db\Adapter\Pdo

- `public convertBoundParams(string $sql, array $parameters = []): array` — Converts bound parameters such as :name: or ?1 into PDO bind params ?

- `public ensureConnection(): void` — Ensures the connection is alive, reconnecting in place if it is not.

- `public escapeString(string $str): string` — Escapes a value to avoid SQL injections according to the active charset

- `public execute(string $sqlStatement, array $bindParams = [], array $bindTypes = []): bool` — Sends SQL statements to the database server returning the success state.

- `public executePrepared(PDOStatement $statement, array $placeholders, array $dataTypes = []): PDOStatement` — Executes a prepared statement binding. This function uses integer indexes

- `public getAutoReconnect(): bool` — Returns whether transparent auto-reconnect is enabled.

- `public getErrorInfo(): array` — Return the error info, if any

- `public getInternalHandler(): mixed` — Return internal PDO handler

- `public getTransactionLevel(): int` — Returns the current transaction nesting level

- `public isUnderTransaction(): bool` — Checks whether the connection is under a transaction

- `public lastInsertId(string|null $name = null): bool|string` — Returns the insert id for the auto\_increment/serial column inserted in

- `public ping(): bool` — Checks whether the underlying connection is still alive by issuing a

- `public prepare(string $sqlStatement): PDOStatement` — Returns a PDO prepared statement to be executed with 'executePrepared'

- `public query(string $sqlStatement, array $bindParams = [], array $bindTypes = []): bool|ResultInterface` — Sends SQL statements to the database server returning the success state.

- `public rollback(bool $nesting = true): bool` — Rollbacks the active transaction in the connection

- `public setAutoReconnect(bool $autoReconnect): static` — Enables or disables transparent auto-reconnect on a lost connection.

- `protected getDsnDefaults(): array` — Returns PDO adapter DSN defaults as a key-value map.

- `protected isConnectionError(Throwable $exception): bool` — Recognizes whether an exception represents a lost ("gone away")

- `protected prepareRealSql(string $statement, array $parameters): void` — Constructs the SQL statement (with parameters)

### Properties

- `protected int $affectedRows = 0` — Last affected rows

- `protected bool $autoReconnect = false` — Whether to transparently reconnect and retry once when a query fails
  because the connection was lost. Opt-in; off by default.

- `protected PDO|null $pdo = null` — PDO Handler

### Methods

<h4 id="dbadapterpdoabstractpdo-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $descriptor );
```

Constructor for Phalcon\Db\Adapter\Pdo

<h4 id="dbadapterpdoabstractpdo-affectedrows"><code>affectedRows()</code></h4>

```php
public function affectedRows(): int;
```

Returns the number of affected rows by the latest INSERT/UPDATE/DELETE
executed in the database system

```php
$connection->execute(
    "DELETE FROM co_invoices"
);

echo $connection->affectedRows(), " were deleted";
```

<h4 id="dbadapterpdoabstractpdo-begin"><code>begin()</code></h4>

```php
public function begin( bool $nesting = true ): bool;
```

Starts a transaction in the connection

<h4 id="dbadapterpdoabstractpdo-close"><code>close()</code></h4>

```php
public function close(): void;
```

Closes the active connection returning success. Phalcon automatically
closes and destroys active connections when the request ends

<h4 id="dbadapterpdoabstractpdo-commit"><code>commit()</code></h4>

```php
public function commit( bool $nesting = true ): bool;
```

Commits the active transaction in the connection

<h4 id="dbadapterpdoabstractpdo-connect"><code>connect()</code></h4>

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

<h4 id="dbadapterpdoabstractpdo-convertboundparams"><code>convertBoundParams()</code></h4>

```php
public function convertBoundParams(
    string $sql,
    array $parameters = []
): array;
```

Converts bound parameters such as :name: or ?1 into PDO bind params ?

```php
print_r(
    $connection->convertBoundParams(
        "SELECT * FROM co_invoices WHERE inv_title = :inv_title:",
        [
            "Test Invoice",
        ]
    )
);
```

<h4 id="dbadapterpdoabstractpdo-ensureconnection"><code>ensureConnection()</code></h4>

```php
public function ensureConnection(): void;
```

Ensures the connection is alive, reconnecting in place if it is not.

<h4 id="dbadapterpdoabstractpdo-escapestring"><code>escapeString()</code></h4>

```php
public function escapeString( string $str ): string;
```

Escapes a value to avoid SQL injections according to the active charset
in the connection

```php
$escapedStr = $connection->escapeString("some dangerous value");
```

<h4 id="dbadapterpdoabstractpdo-execute"><code>execute()</code></h4>

```php
public function execute(
    string $sqlStatement,
    array $bindParams = [],
    array $bindTypes = []
): bool;
```

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server does not
return any rows

```php
// Inserting data
$success = $connection->execute(
    "INSERT INTO co_invoices VALUES (1, 'Test Invoice')"
);

$success = $connection->execute(
    "INSERT INTO co_invoices VALUES (?, ?)",
    [
        1,
        "Test Invoice",
    ]
);
```

<h4 id="dbadapterpdoabstractpdo-executeprepared"><code>executePrepared()</code></h4>

```php
public function executePrepared(
    PDOStatement $statement,
    array $placeholders,
    array $dataTypes = []
): PDOStatement;
```

Executes a prepared statement binding. This function uses integer indexes
starting from zero

```php
use Phalcon\Db\Column;

$statement = $db->prepare(
    "SELECT * FROM co_invoices WHERE inv_title = :inv_title"
);

$result = $connection->executePrepared(
    $statement,
    [
        "inv_title" => "Test Invoice",
    ],
    [
        "inv_title" => Column::BIND_PARAM_STR,
    ]
);
```

<h4 id="dbadapterpdoabstractpdo-getautoreconnect"><code>getAutoReconnect()</code></h4>

```php
public function getAutoReconnect(): bool;
```

Returns whether transparent auto-reconnect is enabled.

<h4 id="dbadapterpdoabstractpdo-geterrorinfo"><code>getErrorInfo()</code></h4>

```php
public function getErrorInfo(): array;
```

Return the error info, if any

<h4 id="dbadapterpdoabstractpdo-getinternalhandler"><code>getInternalHandler()</code></h4>

```php
public function getInternalHandler(): mixed;
```

Return internal PDO handler

<h4 id="dbadapterpdoabstractpdo-gettransactionlevel"><code>getTransactionLevel()</code></h4>

```php
public function getTransactionLevel(): int;
```

Returns the current transaction nesting level

<h4 id="dbadapterpdoabstractpdo-isundertransaction"><code>isUnderTransaction()</code></h4>

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

<h4 id="dbadapterpdoabstractpdo-lastinsertid"><code>lastInsertId()</code></h4>

```php
public function lastInsertId( string|null $name = null ): bool|string;
```

Returns the insert id for the auto_increment/serial column inserted in
the latest executed SQL statement

```php
// Inserting a new invoice
$success = $connection->insert(
    "co_invoices",
    [
        "Test Invoice",
        100,
    ],
    [
        "inv_title",
        "inv_total",
    ]
);

// Getting the generated id
$id = $connection->lastInsertId();
```

<h4 id="dbadapterpdoabstractpdo-ping"><code>ping()</code></h4>

```php
public function ping(): bool;
```

Checks whether the underlying connection is still alive by issuing a
trivial query. Returns false if there is no handle or the probe fails.

<h4 id="dbadapterpdoabstractpdo-prepare"><code>prepare()</code></h4>

```php
public function prepare( string $sqlStatement ): PDOStatement;
```

Returns a PDO prepared statement to be executed with 'executePrepared'

```php
use Phalcon\Db\Column;

$statement = $db->prepare(
    "SELECT * FROM co_invoices WHERE inv_title = :inv_title"
);

$result = $connection->executePrepared(
    $statement,
    [
        "inv_title" => "Test Invoice",
    ],
    [
        "inv_title" => Column::BIND_PARAM_INT,
    ]
);
```

<h4 id="dbadapterpdoabstractpdo-query"><code>query()</code></h4>

```php
public function query(
    string $sqlStatement,
    array $bindParams = [],
    array $bindTypes = []
): bool|ResultInterface;
```

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server is
returning rows

```php
// Querying data
$resultset = $connection->query(
    "SELECT * FROM co_invoices WHERE inv_status_flag = 1"
);

$resultset = $connection->query(
    "SELECT * FROM co_invoices WHERE inv_status_flag = ?",
    [
        1,
    ]
);
```

<h4 id="dbadapterpdoabstractpdo-rollback"><code>rollback()</code></h4>

```php
public function rollback( bool $nesting = true ): bool;
```

Rollbacks the active transaction in the connection

<h4 id="dbadapterpdoabstractpdo-setautoreconnect"><code>setAutoReconnect()</code></h4>

```php
public function setAutoReconnect( bool $autoReconnect ): static;
```

Enables or disables transparent auto-reconnect on a lost connection.

<h4 id="dbadapterpdoabstractpdo-getdsndefaults"><code>getDsnDefaults()</code></h4>

```php
abstract protected function getDsnDefaults(): array;
```

Returns PDO adapter DSN defaults as a key-value map.

<h4 id="dbadapterpdoabstractpdo-isconnectionerror"><code>isConnectionError()</code></h4>

```php
protected function isConnectionError( Throwable $exception ): bool;
```

Recognizes whether an exception represents a lost ("gone away")
connection. The base adapter cannot know driver specifics, so it
returns false; concrete adapters override this.

<h4 id="dbadapterpdoabstractpdo-preparerealsql"><code>prepareRealSql()</code></h4>

```php
protected function prepareRealSql(
    string $statement,
    array $parameters
): void;
```

Constructs the SQL statement (with parameters)

@see https://stackoverflow.com/a/8403150


## Db\Adapter\Pdo\Mysql

Class

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

- [`Phalcon\Db\Adapter\AbstractAdapter`](#dbadapterabstractadapter)
  - [`Phalcon\Db\Adapter\Pdo\AbstractPdo`](#dbadapterpdoabstractpdo)
    - **`Phalcon\Db\Adapter\Pdo\Mysql`**

`PDO` · `PDOException` · `Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Adapter\Pdo\AbstractPdo` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect\Mysql` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingForeignKeyChecks` · `Phalcon\Db\Index` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface` · `Throwable`

### Method Summary

- `public addForeignKey(string $tableName, string $schemaName, ReferenceInterface $reference): bool` — Adds a foreign key to a table

- `public connect(array $descriptor = []): void` — Constructor for Phalcon\Db\Adapter\Pdo

- `public describeColumns(string $table, string|null $schema = null): array` — Returns an array of Phalcon\Db\Column objects describing a table

- `public describeIndexes(string $table, string|null $schema = null): array` — Lists table indexes

- `public describeReferences(string $table, string|null $schema = null): array` — Lists table references

- `protected getDsnDefaults(): array` — Returns PDO adapter DSN defaults as a key-value map.

- `protected isConnectionError(Throwable $exception): bool` — Recognizes a MySQL "server has gone away" / "Lost connection" failure

### Properties

- `protected string $dialectType = "mysql"`

- `protected string $type = "mysql"`

### Methods

<h4 id="dbadapterpdomysql-addforeignkey"><code>addForeignKey()</code></h4>

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): bool;
```

Adds a foreign key to a table

<h4 id="dbadapterpdomysql-connect"><code>connect()</code></h4>

```php
public function connect( array $descriptor = [] ): void;
```

Constructor for Phalcon\Db\Adapter\Pdo

<h4 id="dbadapterpdomysql-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
    string $table,
    string|null $schema = null
): array;
```

Returns an array of Phalcon\Db\Column objects describing a table

```php
print_r(
    $connection->describeColumns("posts")
);
```

<h4 id="dbadapterpdomysql-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
    string $table,
    string|null $schema = null
): array;
```

Lists table indexes

```php
print_r(
    $connection->describeIndexes("co_orders_x_products")
);
```

<h4 id="dbadapterpdomysql-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
    string $table,
    string|null $schema = null
): array;
```

Lists table references

```php
print_r(
    $connection->describeReferences("co_orders_x_products")
);
```

<h4 id="dbadapterpdomysql-getdsndefaults"><code>getDsnDefaults()</code></h4>

```php
protected function getDsnDefaults(): array;
```

Returns PDO adapter DSN defaults as a key-value map.

<h4 id="dbadapterpdomysql-isconnectionerror"><code>isConnectionError()</code></h4>

```php
protected function isConnectionError( Throwable $exception ): bool;
```

Recognizes a MySQL "server has gone away" / "Lost connection" failure
by the driver error code (2006 / 2013) with a message fallback.


## Db\Adapter\Pdo\Postgresql

Class

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

- [`Phalcon\Db\Adapter\AbstractAdapter`](#dbadapterabstractadapter)
  - [`Phalcon\Db\Adapter\Pdo\AbstractPdo`](#dbadapterpdoabstractpdo)
    - **`Phalcon\Db\Adapter\Pdo\Postgresql`**

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Adapter\Pdo\AbstractPdo` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\TableMustHaveColumn` · `Phalcon\Db\RawValue` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface` · `Throwable`

### Method Summary

- `public __construct(array $descriptor)`

- `public connect(array $descriptor = []): void` — This method is automatically called in Phalcon\Db\Adapter\Pdo

- `public createTable(string $tableName, string $schemaName, array $definition): bool` — Creates a table

- `public describeColumns(string $table, string|null $schema = null): array` — Returns an array of Phalcon\Db\Column objects describing a table

- `public describeReferences(string $table, string|null $schema = null): array` — Lists table references

- `public getDefaultIdValue(): RawValue` — Returns the default identity value to be inserted in an identity column

- `public modifyColumn(string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface|null $currentColumn = null): bool` — Modifies a table column based on a $definition

- `public supportSequences(): bool` — Check whether the database system requires a sequence to produce

- `public useExplicitIdValue(): bool` — Check whether the database system requires an explicit value for identity

- `protected getDsnDefaults(): array` — Returns PDO adapter DSN defaults as a key-value map.

- `protected isConnectionError(Throwable $exception): bool` — Recognizes a PostgreSQL connection-loss failure by SQLSTATE

### Properties

- `protected string $dialectType = "postgresql"`

- `protected string $type = "pgsql"`

### Methods

<h4 id="dbadapterpdopostgresql-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $descriptor );
```

<h4 id="dbadapterpdopostgresql-connect"><code>connect()</code></h4>

```php
public function connect( array $descriptor = [] ): void;
```

This method is automatically called in Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection.

<h4 id="dbadapterpdopostgresql-createtable"><code>createTable()</code></h4>

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): bool;
```

Creates a table

<h4 id="dbadapterpdopostgresql-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
    string $table,
    string|null $schema = null
): array;
```

Returns an array of Phalcon\Db\Column objects describing a table

```php
print_r(
    $connection->describeColumns("posts")
);
```

<h4 id="dbadapterpdopostgresql-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
    string $table,
    string|null $schema = null
): array;
```

Lists table references

```php
print_r(
    $connection->describeReferences("co_orders_x_products")
);
```

<h4 id="dbadapterpdopostgresql-getdefaultidvalue"><code>getDefaultIdValue()</code></h4>

```php
public function getDefaultIdValue(): RawValue;
```

Returns the default identity value to be inserted in an identity column

```php
// Inserting a new invoice with a valid default value for the column 'inv_id'
$success = $connection->insert(
    "co_invoices",
    [
        $connection->getDefaultIdValue(),
        "Test Invoice",
        100,
    ],
    [
        "inv_id",
        "inv_title",
        "inv_total",
    ]
);
```

<h4 id="dbadapterpdopostgresql-modifycolumn"><code>modifyColumn()</code></h4>

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface|null $currentColumn = null
): bool;
```

Modifies a table column based on a $definition

<h4 id="dbadapterpdopostgresql-supportsequences"><code>supportSequences()</code></h4>

```php
public function supportSequences(): bool;
```

Check whether the database system requires a sequence to produce
auto-numeric values

<h4 id="dbadapterpdopostgresql-useexplicitidvalue"><code>useExplicitIdValue()</code></h4>

```php
public function useExplicitIdValue(): bool;
```

Check whether the database system requires an explicit value for identity
columns

<h4 id="dbadapterpdopostgresql-getdsndefaults"><code>getDsnDefaults()</code></h4>

```php
protected function getDsnDefaults(): array;
```

Returns PDO adapter DSN defaults as a key-value map.

<h4 id="dbadapterpdopostgresql-isconnectionerror"><code>isConnectionError()</code></h4>

```php
protected function isConnectionError( Throwable $exception ): bool;
```

Recognizes a PostgreSQL connection-loss failure by SQLSTATE
(connection exception class 08, or admin/crash shutdown 57P0x) with a
message fallback.


## Db\Adapter\Pdo\Sqlite

Class

Specific functions for the SQLite database system

```php
use Phalcon\Db\Adapter\Pdo\Sqlite;

$connection = new Sqlite(
    [
        "dbname" => "/tmp/test.sqlite",
    ]
);
```

- [`Phalcon\Db\Adapter\AbstractAdapter`](#dbadapterabstractadapter)
  - [`Phalcon\Db\Adapter\Pdo\AbstractPdo`](#dbadapterpdoabstractpdo)
    - **`Phalcon\Db\Adapter\Pdo\Sqlite`**

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Adapter\Pdo\AbstractPdo` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect\Sqlite` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingSqliteDatabase` · `Phalcon\Db\Index` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface`

### Method Summary

- `public __construct(array $descriptor)` — Constructor for Phalcon\Db\Adapter\Pdo\Sqlite

- `public connect(array $descriptor = []): void` — This method is automatically called in Phalcon\Db\Adapter\Pdo

- `public describeColumns(string $table, string|null $schema = null): array` — Returns an array of Phalcon\Db\Column objects describing a table

- `public describeIndexes(string $table, string|null $schema = null): array` — Lists table indexes

- `public describeReferences(string $table, string|null $schema = null): array` — Lists table references

- `public getDefaultValue(): RawValue` — Returns the default value to make the RBDM use the default value declared

- `public supportsDefaultValue(): bool` — SQLite does not support the DEFAULT keyword

- `public useExplicitIdValue(): bool` — Check whether the database system requires an explicit value for identity

- `protected getDsnDefaults(): array` — Returns PDO adapter DSN defaults as a key-value map.

### Properties

- `protected string $dialectType = "sqlite"`

- `protected string $type = "sqlite"`

### Methods

<h4 id="dbadapterpdosqlite-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $descriptor );
```

Constructor for Phalcon\Db\Adapter\Pdo\Sqlite

<h4 id="dbadapterpdosqlite-connect"><code>connect()</code></h4>

```php
public function connect( array $descriptor = [] ): void;
```

This method is automatically called in Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection.

<h4 id="dbadapterpdosqlite-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
    string $table,
    string|null $schema = null
): array;
```

Returns an array of Phalcon\Db\Column objects describing a table

```php
print_r(
    $connection->describeColumns("posts")
);
```

<h4 id="dbadapterpdosqlite-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
    string $table,
    string|null $schema = null
): array;
```

Lists table indexes

```php
print_r(
    $connection->describeIndexes("co_orders_x_products")
);
```

<h4 id="dbadapterpdosqlite-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
    string $table,
    string|null $schema = null
): array;
```

Lists table references

<h4 id="dbadapterpdosqlite-getdefaultvalue"><code>getDefaultValue()</code></h4>

```php
public function getDefaultValue(): RawValue;
```

Returns the default value to make the RBDM use the default value declared
in the table definition

```php
// Inserting a new invoice with a valid default value for the column 'inv_total'
$success = $connection->insert(
    "co_invoices",
    [
        "Test Invoice",
        $connection->getDefaultValue(),
    ],
    [
        "inv_title",
        "inv_total",
    ]
);
```

<h4 id="dbadapterpdosqlite-supportsdefaultvalue"><code>supportsDefaultValue()</code></h4>

```php
public function supportsDefaultValue(): bool;
```

SQLite does not support the DEFAULT keyword

<h4 id="dbadapterpdosqlite-useexplicitidvalue"><code>useExplicitIdValue()</code></h4>

```php
public function useExplicitIdValue(): bool;
```

Check whether the database system requires an explicit value for identity
columns

<h4 id="dbadapterpdosqlite-getdsndefaults"><code>getDsnDefaults()</code></h4>

```php
protected function getDsnDefaults(): array;
```

Returns PDO adapter DSN defaults as a key-value map.


## Db\Check

Class

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
```

- **`Phalcon\Db\Check`** - implements [`Phalcon\Db\CheckInterface`](#dbcheckinterface)

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Exceptions\CheckExpressionRequired` · `Phalcon\Db\Exceptions\InvalidCheckExpression`

### Method Summary

- `public __construct(string $name, array $definition)` — Phalcon\Db\Check constructor.

- `public getExpression(): string` — Returns the CHECK expression

- `public getName(): string` — Returns the constraint name (may be an empty string for unnamed)

### Properties

- `protected string $expression` — The boolean SQL predicate this constraint enforces.

- `protected string $name` — The CHECK constraint name. An empty string indicates an unnamed
  constraint - the dialect will emit the clause without a `CONSTRAINT`
  prefix in that case.

### Methods

<h4 id="dbcheck-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    array $definition
);
```

Phalcon\Db\Check constructor.

<h4 id="dbcheck-getexpression"><code>getExpression()</code></h4>

```php
public function getExpression(): string;
```

Returns the CHECK expression

<h4 id="dbcheck-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the constraint name (may be an empty string for unnamed)


## Db\CheckInterface

Interface

Phalcon\Db\CheckInterface

- [`Phalcon\Contracts\Db\Check`](/6.0/api/phalcon_contracts/#contractsdbcheck)
  - **`Phalcon\Db\CheckInterface`**

`Phalcon\Contracts\Db\Check`


## Db\Column

Class

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
$connection->addColumn("co_invoices", null, $column);
```

- **`Phalcon\Db\Column`** - implements [`Phalcon\Db\ColumnInterface`](#dbcolumninterface)

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Exceptions\ColumnTypeRejectsAutoIncrement` · `Phalcon\Db\Exceptions\ColumnTypeRejectsScale` · `Phalcon\Db\Exceptions\ColumnTypeRequired` · `Phalcon\Db\Exceptions\GeneratedAutoIncrementConflict` · `Phalcon\Db\Exceptions\GeneratedDefaultConflict` · `Phalcon\Db\Exceptions\InvalidGenerationExpression`

### Method Summary

- `public __construct(string $name, array $definition)` — Phalcon\Db\Column constructor

- `public getAfterPosition(): string|null` — Check whether field absolute to position in table

- `public getBindType(): int` — Returns the type of bind handling

- `public getComment(): string|null` — Column's comment

- `public getDefault(): mixed` — Default column value

- `public getGenerationExpression(): string|null` — Returns the generation expression for a generated/computed column.

- `public getName(): string` — Column's name

- `public getScale(): int` — Integer column number scale

- `public getSize(): int|string` — Integer column size

- `public getType(): int|string` — Column data type

- `public getTypeReference(): int` — Column data type reference

- `public getTypeValues(): array|int|string` — Column data type values

- `public hasDefault(): bool` — Check whether column has default value

- `public isArray(): bool` — Whether the column is an array of its base type. Recognized by the

- `public isAutoIncrement(): bool` — Auto-Increment

- `public isFirst(): bool` — Check whether column has the first position in the table

- `public isGenerated(): bool` — Whether the column is a generated/computed column.

- `public isGenerationStored(): bool` — Whether a generated column is `STORED`. `false` means `VIRTUAL`.

- `public isInvisible(): bool` — Whether the column is declared `INVISIBLE` (MySQL 8.0.23+).

- `public isNotNull(): bool` — Not null

- `public isNumeric(): bool` — Check whether column have a numeric type

- `public isPrimary(): bool` — Column is part of the primary key?

- `public isUnsigned(): bool` — Returns true if number column is unsigned

### Constants

- `const int BIND_PARAM_BLOB = 3` — Bind Type Blob

- `const int BIND_PARAM_BOOL = 5` — Bind Type Bool

- `const int BIND_PARAM_DECIMAL = 32` — Bind Type Decimal

- `const int BIND_PARAM_INT = 1` — Bind Type Integer

- `const int BIND_PARAM_NULL = 0` — Bind Type Null

- `const int BIND_PARAM_STR = 2` — Bind Type String

- `const int BIND_SKIP = 1024` — Skip binding by type

- `const int TYPE_BIGINTEGER = 14` — Big integer abstract data type

- `const int TYPE_BINARY = 27` — Binary abstract data type

- `const int TYPE_BIT = 19` — Bit abstract data type

- `const int TYPE_BLOB = 11` — Blob abstract data type

- `const int TYPE_BOOLEAN = 8` — Bool abstract data type

- `const int TYPE_BYTEA = 30` — PostgreSQL `BYTEA` binary type

- `const int TYPE_CHAR = 5` — Char abstract data type

- `const int TYPE_CIDR = 32` — PostgreSQL `CIDR` network-address type

- `const int TYPE_DATE = 1` — Date abstract data type

- `const int TYPE_DATERANGE = 39` — PostgreSQL `DATERANGE` range-of-date type

- `const int TYPE_DATETIME = 4` — Datetime abstract data type

- `const int TYPE_DECIMAL = 3` — Decimal abstract data type

- `const int TYPE_DOUBLE = 9` — Double abstract data type

- `const int TYPE_ENUM = 18` — Enum abstract data type

- `const int TYPE_FLOAT = 7` — Float abstract data type

- `const int TYPE_GEOMETRY = 40` — Spatial `GEOMETRY` base type (MySQL 5.7+; PostgreSQL + PostGIS)

- `const int TYPE_GEOMETRYCOLLECTION = 47` — Spatial `GEOMETRYCOLLECTION` type

- `const int TYPE_INET = 31` — PostgreSQL `INET` IPv4/IPv6 address type

- `const int TYPE_INT4RANGE = 34` — PostgreSQL `INT4RANGE` range-of-integer type

- `const int TYPE_INT8RANGE = 35` — PostgreSQL `INT8RANGE` range-of-bigint type

- `const int TYPE_INTEGER = 0` — Int abstract data type

- `const int TYPE_JSON = 15` — Json abstract data type

- `const int TYPE_JSONB = 16` — Jsonb abstract data type

- `const int TYPE_LINESTRING = 42` — Spatial `LINESTRING` type

- `const int TYPE_LONGBLOB = 13` — Longblob abstract data type

- `const int TYPE_LONGTEXT = 24` — Longtext abstract data type

- `const int TYPE_MACADDR = 33` — PostgreSQL `MACADDR` MAC-address type

- `const int TYPE_MEDIUMBLOB = 12` — Mediumblob abstract data type

- `const int TYPE_MEDIUMINTEGER = 21` — Mediumintegerr abstract data type

- `const int TYPE_MEDIUMTEXT = 23` — Mediumtext abstract data type

- `const int TYPE_MULTILINESTRING = 45` — Spatial `MULTILINESTRING` type

- `const int TYPE_MULTIPOINT = 44` — Spatial `MULTIPOINT` type

- `const int TYPE_MULTIPOLYGON = 46` — Spatial `MULTIPOLYGON` type

- `const int TYPE_NUMRANGE = 36` — PostgreSQL `NUMRANGE` range-of-numeric type

- `const int TYPE_POINT = 41` — Spatial `POINT` type

- `const int TYPE_POLYGON = 43` — Spatial `POLYGON` type

- `const int TYPE_SMALLINTEGER = 22` — Smallint abstract data type

- `const int TYPE_TEXT = 6` — Text abstract data type

- `const int TYPE_TIME = 20` — Time abstract data type

- `const int TYPE_TIMESTAMP = 17` — Timestamp abstract data type

- `const int TYPE_TINYBLOB = 10` — Tinyblob abstract data type

- `const int TYPE_TINYINTEGER = 26` — Tinyint abstract data type

- `const int TYPE_TINYTEXT = 25` — Tinytext abstract data type

- `const int TYPE_TSRANGE = 37` — PostgreSQL `TSRANGE` range-of-timestamp (without time zone) type

- `const int TYPE_TSTZRANGE = 38` — PostgreSQL `TSTZRANGE` range-of-timestamp (with time zone) type

- `const int TYPE_UUID = 29` — UUID abstract data type

- `const int TYPE_VARBINARY = 28` — Varbinary abstract data type

- `const int TYPE_VARCHAR = 2` — Varchar abstract data type

### Properties

- `protected string|null $after = null` — Column Position

- `protected int $bindType = 2` — Bind Type

- `protected string|null $comment = null` — Column's comment

- `protected mixed|null $defaultValue = null` — Default column value

- `protected string|null $generated = null` — Generation expression for `GENERATED ALWAYS AS (...)`. Null when the
  column is not generated.

- `protected bool $generationStored = false` — Whether a generated column is `STORED` (true) or `VIRTUAL` (false).
  PostgreSQL only supports `STORED` and emits it regardless of this
  flag.

- `protected bool $isArray = false` — Whether the column is an array of its base type (PostgreSQL).

- `protected bool $isAutoIncrement = false` — Column is autoIncrement?

- `protected bool $isFirst = false` — Position is first

- `protected bool $isInvisible = false` — Whether the column is declared `INVISIBLE` (MySQL 8.0.23+).

- `protected bool $isNotNull = true` — Column not nullable?

  Default SQL definition is NOT NULL.

- `protected bool $isNumeric = false` — The column have some numeric type?

- `protected bool $isPrimary = false` — Column is part of the primary key?

- `protected bool $isUnsigned = false` — Integer column unsigned?

- `protected string $name`

- `protected int $scale = 0` — Integer column number scale

- `protected int|string $size = 0` — Integer column size

- `protected int|string $type` — Column data type

- `protected int $typeReference = -1` — Column data type reference

- `protected array<array-key, string>|int|string $typeValues = []` — Column data type values

### Methods

<h4 id="dbcolumn-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    array $definition
);
```

Phalcon\Db\Column constructor

<h4 id="dbcolumn-getafterposition"><code>getAfterPosition()</code></h4>

```php
public function getAfterPosition(): string|null;
```

Check whether field absolute to position in table

<h4 id="dbcolumn-getbindtype"><code>getBindType()</code></h4>

```php
public function getBindType(): int;
```

Returns the type of bind handling

<h4 id="dbcolumn-getcomment"><code>getComment()</code></h4>

```php
public function getComment(): string|null;
```

Column's comment

<h4 id="dbcolumn-getdefault"><code>getDefault()</code></h4>

```php
public function getDefault(): mixed;
```

Default column value

<h4 id="dbcolumn-getgenerationexpression"><code>getGenerationExpression()</code></h4>

```php
public function getGenerationExpression(): string|null;
```

Returns the generation expression for a generated/computed column.
Returns null when the column is not generated.

<h4 id="dbcolumn-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Column's name

<h4 id="dbcolumn-getscale"><code>getScale()</code></h4>

```php
public function getScale(): int;
```

Integer column number scale

<h4 id="dbcolumn-getsize"><code>getSize()</code></h4>

```php
public function getSize(): int|string;
```

Integer column size

<h4 id="dbcolumn-gettype"><code>getType()</code></h4>

```php
public function getType(): int|string;
```

Column data type

<h4 id="dbcolumn-gettypereference"><code>getTypeReference()</code></h4>

```php
public function getTypeReference(): int;
```

Column data type reference

<h4 id="dbcolumn-gettypevalues"><code>getTypeValues()</code></h4>

```php
public function getTypeValues(): array|int|string;
```

Column data type values

<h4 id="dbcolumn-hasdefault"><code>hasDefault()</code></h4>

```php
public function hasDefault(): bool;
```

Check whether column has default value

<h4 id="dbcolumn-isarray"><code>isArray()</code></h4>

```php
public function isArray(): bool;
```

Whether the column is an array of its base type. Recognized by the
PostgreSQL dialect (e.g. `INTEGER[]`, `TEXT[]`); MySQL and SQLite
ignore the flag.

<h4 id="dbcolumn-isautoincrement"><code>isAutoIncrement()</code></h4>

```php
public function isAutoIncrement(): bool;
```

Auto-Increment

<h4 id="dbcolumn-isfirst"><code>isFirst()</code></h4>

```php
public function isFirst(): bool;
```

Check whether column has the first position in the table

<h4 id="dbcolumn-isgenerated"><code>isGenerated()</code></h4>

```php
public function isGenerated(): bool;
```

Whether the column is a generated/computed column.

<h4 id="dbcolumn-isgenerationstored"><code>isGenerationStored()</code></h4>

```php
public function isGenerationStored(): bool;
```

Whether a generated column is `STORED`. `false` means `VIRTUAL`.

<h4 id="dbcolumn-isinvisible"><code>isInvisible()</code></h4>

```php
public function isInvisible(): bool;
```

Whether the column is declared `INVISIBLE` (MySQL 8.0.23+).

<h4 id="dbcolumn-isnotnull"><code>isNotNull()</code></h4>

```php
public function isNotNull(): bool;
```

Not null

<h4 id="dbcolumn-isnumeric"><code>isNumeric()</code></h4>

```php
public function isNumeric(): bool;
```

Check whether column have a numeric type

<h4 id="dbcolumn-isprimary"><code>isPrimary()</code></h4>

```php
public function isPrimary(): bool;
```

Column is part of the primary key?

<h4 id="dbcolumn-isunsigned"><code>isUnsigned()</code></h4>

```php
public function isUnsigned(): bool;
```

Returns true if number column is unsigned


## Db\ColumnInterface

Interface

Phalcon\Db\ColumnInterface

- [`Phalcon\Contracts\Db\Column`](/6.0/api/phalcon_contracts/#contractsdbcolumn)
  - **`Phalcon\Db\ColumnInterface`**

`Phalcon\Contracts\Db\Column`


## Db\Dialect

Abstract

This is the base class to each database dialect. This implements
common methods to transform intermediate code into its RDBMS related syntax

- **`Phalcon\Db\Dialect`** - implements [`Phalcon\Db\DialectInterface`](#dbdialectinterface)
  - [`Phalcon\Db\Dialect\Mysql`](#dbdialectmysql)
  - [`Phalcon\Db\Dialect\Postgresql`](#dbdialectpostgresql)
  - [`Phalcon\Db\Dialect\Sqlite`](#dbdialectsqlite)

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Exceptions\ConflictTargetColumnRequired` · `Phalcon\Db\Exceptions\ConflictUpdateColumnRequired` · `Phalcon\Db\Exceptions\InvalidGroupByExpression` · `Phalcon\Db\Exceptions\InvalidListExpression` · `Phalcon\Db\Exceptions\InvalidOrderByExpression` · `Phalcon\Db\Exceptions\InvalidSqlExpression` · `Phalcon\Db\Exceptions\InvalidSqlExpressionType` · `Phalcon\Db\Exceptions\InvalidUnaryExpression` · `Phalcon\Db\Exceptions\MaterializedViewsNotSupported` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\ReturningNotSupported` · `Phalcon\Db\Exceptions\UnsupportedOperator` · `Phalcon\Support\Settings`

### Method Summary

- `public createMaterializedView(string $viewName, array $definition, string|null $schemaName = null): string` — Generates SQL to create a materialized view. Supported by PostgreSQL;

- `public createSavepoint(string $name): string` — Generate SQL to create a new savepoint

- `public dropMaterializedView(string $viewName, string|null $schemaName = null, bool $ifExists = true): string` — Generates SQL to drop a materialized view (PostgreSQL only).

- `public escape(string $input, string $escapeChar = ""): string` — Escape identifiers

- `public escapeSchema(string $input, string $escapeChar = ""): string` — Escape Schema

- `public forUpdate(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified with a FOR UPDATE clause. The optional

- `public getColumnList(array $columnList, string $escapeChar = "", array $bindCounts = []): string` — Gets a list of columns with escaped identifiers

- `public getCustomFunctions(): array` — Returns registered functions

- `public getSqlColumn(array|string $column, string $escapeChar = "", array $bindCounts = []): string` — Resolve Column expressions

- `public getSqlExpression(array $expression, string|null $escapeChar = null, array $bindCounts = []): string` — Transforms an intermediate representation for an expression into a

- `public getSqlTable(array|string $tableName, string $escapeChar = ""): string` — Transform an intermediate representation of a schema/table into a

- `public limit(string $sqlQuery, mixed $number): string` — Generates the SQL for LIMIT clause

- `public onConflictUpdate(string $sqlQuery, array $conflictColumns, array $updateColumns): string` — Appends an `ON CONFLICT (col, ...) DO UPDATE SET col = excluded.col`

- `public refreshMaterializedView(string $viewName, string|null $schemaName = null, bool $concurrent = false): string` — Generates SQL to refresh a materialized view (PostgreSQL only).

- `public registerCustomFunction(string $name, callable $customFunction): static` — Registers custom SQL functions

- `public releaseSavepoint(string $name): string` — Generate SQL to release a savepoint

- `public returning(string $sqlQuery, array $columns): string` — Returns a SQL statement extended with a `RETURNING` clause.

- `public rollbackSavepoint(string $name): string` — Generate SQL to rollback a savepoint

- `public select(array $definition): string` — Builds a SELECT statement

- `public supportsAlterTable(): bool` — Checks whether the platform supports the full `ALTER TABLE` matrix:

- `public supportsMaterializedViews(): bool` — Checks whether the platform supports materialized views. Only PostgreSQL

- `public supportsOnConflictUpdate(): bool` — Checks whether the platform supports the `ON CONFLICT (...) DO UPDATE`

- `public supportsReleaseSavepoints(): bool` — Checks whether the platform supports releasing savepoints.

- `public supportsReturning(): bool` — Checks whether the platform supports the `RETURNING` clause. MySQL

- `public supportsSavepoints(): bool` — Checks whether the platform supports savepoints

- `protected checkColumnType(ColumnInterface $column): int` — Checks the column type and if not string it returns the type reference

- `protected checkColumnTypeSql(ColumnInterface $column): string` — Checks the column type and returns the updated SQL statement

- `protected escapeStringLiteral(string $value): string` — Escape a string literal for a single quoted SQL string. The standard

- ``protected getCheckClause(CheckInterface $check, string $escapeChar = "`"): string`` — Builds a CHECK constraint clause from a `CheckInterface`, using the

- `protected getColumnSize(ColumnInterface $column): string` — Returns the size of the column enclosed in parentheses

- `protected getColumnSizeAndScale(ColumnInterface $column): string` — Returns the column size and scale enclosed in parentheses

- `protected getGeneratedClause(ColumnInterface $column, bool $forceStored = false): string` — Builds the `GENERATED ALWAYS AS (<expr>) VIRTUAL|STORED` clause for a

- `protected getIndexColumnList(IndexInterface $index, bool $wrapExpressions = true): string` — Builds the per-index parenthesized column list, honoring per-column

- `protected getLimitValue(mixed $value): string` — Renders a LIMIT/OFFSET value: a bound placeholder passes through, any

- `protected getSqlExpressionAll(array $expression, string $escapeChar = ""): string` — Resolve \*

- `protected getSqlExpressionBinaryOperations(array $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve binary operations expressions

- `protected getSqlExpressionCase(array $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve CASE expressions

- `protected getSqlExpressionCastValue(array $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve CAST of values

- `protected getSqlExpressionConvertValue(array $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve CONVERT of values encodings

- `protected getSqlExpressionFrom(array|string $expression, string $escapeChar = ""): string` — Resolve a FROM clause

- `protected getSqlExpressionFunctionCall(array $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve function calls

- `protected getSqlExpressionGroupBy(array|string $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve a GROUP BY clause

- `protected getSqlExpressionHaving(array $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve a HAVING clause

- `protected getSqlExpressionJoins(array|string $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve a JOINs clause

- `protected getSqlExpressionLimit(array|string $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve a LIMIT clause

- `protected getSqlExpressionList(array $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve Lists

- `protected getSqlExpressionObject(array $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve object expressions

- `protected getSqlExpressionOrderBy(array|string $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve an ORDER BY clause

- `protected getSqlExpressionQualified(array $expression, string $escapeChar = ""): string` — Resolve qualified expressions

- `protected getSqlExpressionScalar(array $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve Column expressions

- `protected getSqlExpressionUnaryOperations(array $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve unary operations expressions

- `protected getSqlExpressionWhere(array|string $expression, string $escapeChar = "", array $bindCounts = []): string` — Resolve a WHERE clause

- `protected prepareColumnAlias(string $qualified, string $alias = "", string $escapeChar = ""): string` — Prepares column for this RDBMS

- `protected prepareQualified(string $column, string $domain = "", string $escapeChar = ""): string` — Prepares qualified for this RDBMS

- `protected prepareTable(string $tableName, string|null $schemaName = null, string $alias = "", string $escapeChar = ""): string` — Prepares table for this RDBMS

### Properties

- `protected db_custom_functions $customFunctions = []`

- `protected string $escapeChar`

- `protected list<string> $guardedOperators = [...]` — Dialect-specific operators that a concrete dialect must opt into via
  $supportedOperators; using one elsewhere throws.

- `protected list<string> $supportedOperators = []` — Subset of $guardedOperators that this dialect emits. Overridden per
  dialect.

### Methods

<h4 id="dbdialect-creatematerializedview"><code>createMaterializedView()</code></h4>

```php
public function createMaterializedView(
    string $viewName,
    array $definition,
    string|null $schemaName = null
): string;
```

Generates SQL to create a materialized view. Supported by PostgreSQL;
MySQL and SQLite inherit this throw.

<h4 id="dbdialect-createsavepoint"><code>createSavepoint()</code></h4>

```php
public function createSavepoint( string $name ): string;
```

Generate SQL to create a new savepoint

<h4 id="dbdialect-dropmaterializedview"><code>dropMaterializedView()</code></h4>

```php
public function dropMaterializedView(
    string $viewName,
    string|null $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a materialized view (PostgreSQL only).

<h4 id="dbdialect-escape"><code>escape()</code></h4>

```php
final public function escape(
    string $input,
    string $escapeChar = ""
): string;
```

Escape identifiers

<h4 id="dbdialect-escapeschema"><code>escapeSchema()</code></h4>

```php
final public function escapeSchema(
    string $input,
    string $escapeChar = ""
): string;
```

Escape Schema

<h4 id="dbdialect-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause. The optional
`modifier` appends a row-lock disposition keyword.

```php
$sql = $dialect->forUpdate("SELECT * FROM co_invoices");
echo $sql; // SELECT * FROM co_invoices FOR UPDATE

$sql = $dialect->forUpdate(
    "SELECT * FROM co_invoices",
    Dialect::LOCK_NOWAIT
);
echo $sql; // SELECT * FROM co_invoices FOR UPDATE NOWAIT
```

<h4 id="dbdialect-getcolumnlist"><code>getColumnList()</code></h4>

```php
final public function getColumnList(
    array $columnList,
    string $escapeChar = "",
    array $bindCounts = []
): string;
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

<h4 id="dbdialect-getcustomfunctions"><code>getCustomFunctions()</code></h4>

```php
public function getCustomFunctions(): array;
```

Returns registered functions

<h4 id="dbdialect-getsqlcolumn"><code>getSqlColumn()</code></h4>

```php
final public function getSqlColumn(
    array|string $column,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve Column expressions

<h4 id="dbdialect-getsqlexpression"><code>getSqlExpression()</code></h4>

```php
public function getSqlExpression(
    array $expression,
    string|null $escapeChar = null,
    array $bindCounts = []
): string;
```

Transforms an intermediate representation for an expression into a
database system valid expression

<h4 id="dbdialect-getsqltable"><code>getSqlTable()</code></h4>

```php
final public function getSqlTable(
    array|string $tableName,
    string $escapeChar = ""
): string;
```

Transform an intermediate representation of a schema/table into a
database system valid expression

<h4 id="dbdialect-limit"><code>limit()</code></h4>

```php
public function limit(
    string $sqlQuery,
    mixed $number
): string;
```

Generates the SQL for LIMIT clause

```php
// SELECT * FROM co_invoices LIMIT 10
echo $dialect->limit(
    "SELECT * FROM co_invoices",
    10
);

// SELECT * FROM co_invoices LIMIT 10 OFFSET 50
echo $dialect->limit(
    "SELECT * FROM co_invoices",
    [10, 50]
);
```

<h4 id="dbdialect-onconflictupdate"><code>onConflictUpdate()</code></h4>

```php
public function onConflictUpdate(
    string $sqlQuery,
    array $conflictColumns,
    array $updateColumns
): string;
```

Appends an `ON CONFLICT (col, ...) DO UPDATE SET col = excluded.col`
upsert clause to the supplied INSERT statement. Supported by
PostgreSQL 9.5+ and SQLite 3.24+. MySQL overrides this method to
throw.

<h4 id="dbdialect-refreshmaterializedview"><code>refreshMaterializedView()</code></h4>

```php
public function refreshMaterializedView(
    string $viewName,
    string|null $schemaName = null,
    bool $concurrent = false
): string;
```

Generates SQL to refresh a materialized view (PostgreSQL only).

<h4 id="dbdialect-registercustomfunction"><code>registerCustomFunction()</code></h4>

```php
public function registerCustomFunction(
    string $name,
    callable $customFunction
): static;
```

Registers custom SQL functions

<h4 id="dbdialect-releasesavepoint"><code>releaseSavepoint()</code></h4>

```php
public function releaseSavepoint( string $name ): string;
```

Generate SQL to release a savepoint

<h4 id="dbdialect-returning"><code>returning()</code></h4>

```php
public function returning(
    string $sqlQuery,
    array $columns
): string;
```

Returns a SQL statement extended with a `RETURNING` clause.
Supported by PostgreSQL and SQLite 3.35+; MySQL inherits the throw.

<h4 id="dbdialect-rollbacksavepoint"><code>rollbackSavepoint()</code></h4>

```php
public function rollbackSavepoint( string $name ): string;
```

Generate SQL to rollback a savepoint

<h4 id="dbdialect-select"><code>select()</code></h4>

```php
public function select( array $definition ): string;
```

Builds a SELECT statement

<h4 id="dbdialect-supportsaltertable"><code>supportsAlterTable()</code></h4>

```php
public function supportsAlterTable(): bool;
```

Checks whether the platform supports the full `ALTER TABLE` matrix:
modifying existing columns and adding or dropping foreign keys, primary
keys, and check constraints. SQLite returns false - those operations
throw a dedicated `Sqlite*NotSupported` exception there (basic
`ADD COLUMN` remains available).

<h4 id="dbdialect-supportsmaterializedviews"><code>supportsMaterializedViews()</code></h4>

```php
public function supportsMaterializedViews(): bool;
```

Checks whether the platform supports materialized views. Only PostgreSQL
returns true; `createMaterializedView()` throws on the other dialects.

<h4 id="dbdialect-supportsonconflictupdate"><code>supportsOnConflictUpdate()</code></h4>

```php
public function supportsOnConflictUpdate(): bool;
```

Checks whether the platform supports the `ON CONFLICT (...) DO UPDATE`
upsert clause. MySQL returns false; `onConflictUpdate()` throws there.

<h4 id="dbdialect-supportsreleasesavepoints"><code>supportsReleaseSavepoints()</code></h4>

```php
public function supportsReleaseSavepoints(): bool;
```

Checks whether the platform supports releasing savepoints.

<h4 id="dbdialect-supportsreturning"><code>supportsReturning()</code></h4>

```php
public function supportsReturning(): bool;
```

Checks whether the platform supports the `RETURNING` clause. MySQL
returns false; `returning()` throws there.

<h4 id="dbdialect-supportssavepoints"><code>supportsSavepoints()</code></h4>

```php
public function supportsSavepoints(): bool;
```

Checks whether the platform supports savepoints

<h4 id="dbdialect-checkcolumntype"><code>checkColumnType()</code></h4>

```php
protected function checkColumnType( ColumnInterface $column ): int;
```

Checks the column type and if not string it returns the type reference

@todo this always returns the type beceuse type is never string

<h4 id="dbdialect-checkcolumntypesql"><code>checkColumnTypeSql()</code></h4>

```php
protected function checkColumnTypeSql( ColumnInterface $column ): string;
```

Checks the column type and returns the updated SQL statement

@todo check this one also

<h4 id="dbdialect-escapestringliteral"><code>escapeStringLiteral()</code></h4>

```php
protected function escapeStringLiteral( string $value ): string;
```

Escape a string literal for a single quoted SQL string. The standard
way doubles the single quotes. A dialect where the backslash is an
escape character must override this method.

<h4 id="dbdialect-getcheckclause"><code>getCheckClause()</code></h4>

```php
protected function getCheckClause(
    CheckInterface $check,
    string $escapeChar = "`"
): string;
```

Builds a CHECK constraint clause from a `CheckInterface`, using the
provided escape character for the constraint name.

<h4 id="dbdialect-getcolumnsize"><code>getColumnSize()</code></h4>

```php
protected function getColumnSize( ColumnInterface $column ): string;
```

Returns the size of the column enclosed in parentheses

<h4 id="dbdialect-getcolumnsizeandscale"><code>getColumnSizeAndScale()</code></h4>

```php
protected function getColumnSizeAndScale( ColumnInterface $column ): string;
```

Returns the column size and scale enclosed in parentheses

<h4 id="dbdialect-getgeneratedclause"><code>getGeneratedClause()</code></h4>

```php
protected function getGeneratedClause(
    ColumnInterface $column,
    bool $forceStored = false
): string;
```

Builds the `GENERATED ALWAYS AS (<expr>) VIRTUAL|STORED` clause for a
generated/computed column. Returns an empty string when the column is
not generated. When `forceStored` is `true` the clause is always
emitted as `STORED` (PostgreSQL uses this).

<h4 id="dbdialect-getindexcolumnlist"><code>getIndexColumnList()</code></h4>

```php
protected function getIndexColumnList(
    IndexInterface $index,
    bool $wrapExpressions = true
): string;
```

Builds the per-index parenthesized column list, honoring per-column
sort directions and `RawValue` expression entries.

<h4 id="dbdialect-getlimitvalue"><code>getLimitValue()</code></h4>

```php
protected function getLimitValue( mixed $value ): string;
```

Renders a LIMIT/OFFSET value: a bound placeholder passes through, any
other value is coerced to an integer to prevent SQL injection.

<h4 id="dbdialect-getsqlexpressionall"><code>getSqlExpressionAll()</code></h4>

```php
final protected function getSqlExpressionAll(
    array $expression,
    string $escapeChar = ""
): string;
```

Resolve *

<h4 id="dbdialect-getsqlexpressionbinaryoperations"><code>getSqlExpressionBinaryOperations()</code></h4>

```php
final protected function getSqlExpressionBinaryOperations(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve binary operations expressions

<h4 id="dbdialect-getsqlexpressioncase"><code>getSqlExpressionCase()</code></h4>

```php
final protected function getSqlExpressionCase(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve CASE expressions

<h4 id="dbdialect-getsqlexpressioncastvalue"><code>getSqlExpressionCastValue()</code></h4>

```php
final protected function getSqlExpressionCastValue(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve CAST of values

<h4 id="dbdialect-getsqlexpressionconvertvalue"><code>getSqlExpressionConvertValue()</code></h4>

```php
final protected function getSqlExpressionConvertValue(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve CONVERT of values encodings

<h4 id="dbdialect-getsqlexpressionfrom"><code>getSqlExpressionFrom()</code></h4>

```php
final protected function getSqlExpressionFrom(
    array|string $expression,
    string $escapeChar = ""
): string;
```

Resolve a FROM clause

<h4 id="dbdialect-getsqlexpressionfunctioncall"><code>getSqlExpressionFunctionCall()</code></h4>

```php
final protected function getSqlExpressionFunctionCall(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve function calls

<h4 id="dbdialect-getsqlexpressiongroupby"><code>getSqlExpressionGroupBy()</code></h4>

```php
final protected function getSqlExpressionGroupBy(
    array|string $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve a GROUP BY clause

<h4 id="dbdialect-getsqlexpressionhaving"><code>getSqlExpressionHaving()</code></h4>

```php
final protected function getSqlExpressionHaving(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve a HAVING clause

<h4 id="dbdialect-getsqlexpressionjoins"><code>getSqlExpressionJoins()</code></h4>

```php
final protected function getSqlExpressionJoins(
    array|string $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve a JOINs clause

@todo Isn't expression just an array?

<h4 id="dbdialect-getsqlexpressionlimit"><code>getSqlExpressionLimit()</code></h4>

```php
final protected function getSqlExpressionLimit(
    array|string $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve a LIMIT clause

<h4 id="dbdialect-getsqlexpressionlist"><code>getSqlExpressionList()</code></h4>

```php
final protected function getSqlExpressionList(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve Lists

<h4 id="dbdialect-getsqlexpressionobject"><code>getSqlExpressionObject()</code></h4>

```php
final protected function getSqlExpressionObject(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve object expressions

<h4 id="dbdialect-getsqlexpressionorderby"><code>getSqlExpressionOrderBy()</code></h4>

```php
final protected function getSqlExpressionOrderBy(
    array|string $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve an ORDER BY clause

<h4 id="dbdialect-getsqlexpressionqualified"><code>getSqlExpressionQualified()</code></h4>

```php
final protected function getSqlExpressionQualified(
    array $expression,
    string $escapeChar = ""
): string;
```

Resolve qualified expressions

<h4 id="dbdialect-getsqlexpressionscalar"><code>getSqlExpressionScalar()</code></h4>

```php
final protected function getSqlExpressionScalar(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve Column expressions

<h4 id="dbdialect-getsqlexpressionunaryoperations"><code>getSqlExpressionUnaryOperations()</code></h4>

```php
final protected function getSqlExpressionUnaryOperations(
    array $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve unary operations expressions

<h4 id="dbdialect-getsqlexpressionwhere"><code>getSqlExpressionWhere()</code></h4>

```php
final protected function getSqlExpressionWhere(
    array|string $expression,
    string $escapeChar = "",
    array $bindCounts = []
): string;
```

Resolve a WHERE clause

<h4 id="dbdialect-preparecolumnalias"><code>prepareColumnAlias()</code></h4>

```php
protected function prepareColumnAlias(
    string $qualified,
    string $alias = "",
    string $escapeChar = ""
): string;
```

Prepares column for this RDBMS

<h4 id="dbdialect-preparequalified"><code>prepareQualified()</code></h4>

```php
protected function prepareQualified(
    string $column,
    string $domain = "",
    string $escapeChar = ""
): string;
```

Prepares qualified for this RDBMS

<h4 id="dbdialect-preparetable"><code>prepareTable()</code></h4>

```php
protected function prepareTable(
    string $tableName,
    string|null $schemaName = null,
    string $alias = "",
    string $escapeChar = ""
): string;
```

Prepares table for this RDBMS


## Db\DialectInterface

Interface

Phalcon\Db\DialectInterface

- [`Phalcon\Contracts\Db\Dialect`](/6.0/api/phalcon_contracts/#contractsdbdialect)
  - **`Phalcon\Db\DialectInterface`**

`Phalcon\Contracts\Db\Dialect`


## Db\Dialect\Mysql

Class

Generates database specific SQL for the MySQL RDBMS

- [`Phalcon\Db\Dialect`](#dbdialect)
  - **`Phalcon\Db\Dialect\Mysql`**

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\CheckInterface` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\Dialect\Traits\TextTrait` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\MysqlOnConflictNotSupported` · `Phalcon\Db\Exceptions\UnrecognizedDataType` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\ReferenceInterface`

### Method Summary

- `public addCheck(string $tableName, string $schemaName, CheckInterface $check): string` — Generates SQL to add a CHECK constraint to an existing table.

- `public addColumn(string $tableName, string $schemaName, ColumnInterface $column): string` — Generates SQL to add a column to a table

- `public addForeignKey(string $tableName, string $schemaName, ReferenceInterface $reference): string` — Generates SQL to add an index to a table

- `public addIndex(string $tableName, string $schemaName, IndexInterface $index): string` — Generates SQL to add an index to a table

- `public addPrimaryKey(string $tableName, string $schemaName, IndexInterface $index): string` — Generates SQL to add the primary key to a table

- `public createTable(string $tableName, string $schemaName, array $definition): string` — Generates SQL to create a table

- `public createView(string $viewName, array $definition, string|null $schemaName = null): string` — Generates SQL to create a view

- `public describeColumns(string $table, string|null $schema = null): string` — Generates SQL describing a table

- `public describeIndexes(string $table, string|null $schema = null): string` — Generates SQL to query indexes on a table

- `public describeReferences(string $table, string|null $schema = null): string` — Generates SQL to query foreign keys on a table

- `public dropCheck(string $tableName, string $schemaName, string $checkName): string` — Generates SQL to delete a CHECK constraint from a table.

- `public dropColumn(string $tableName, string $schemaName, string $columnName): string` — Generates SQL to delete a column from a table

- `public dropForeignKey(string $tableName, string $schemaName, string $referenceName): string` — Generates SQL to delete a foreign key from a table

- `public dropIndex(string $tableName, string $schemaName, string $indexName): string` — Generates SQL to delete an index from a table

- `public dropPrimaryKey(string $tableName, string $schemaName): string` — Generates SQL to delete primary key from a table

- `public dropTable(string $tableName, string|null $schemaName = null, bool $ifExists = true): string` — Generates SQL to drop a table

- `public dropView(string $viewName, string|null $schemaName = null, bool $ifExists = true): string` — Generates SQL to drop a view

- `public getColumnDefinition(ColumnInterface $column): string` — Gets the column name in MySQL

- `public getForeignKeyChecks(): string` — Generates SQL to check DB parameter FOREIGN\_KEY\_CHECKS.

- `public listTables(string|null $schemaName = null): string` — List all tables in database

- `public listViews(string|null $schemaName = null): string` — Generates the SQL to list all views of a schema or user

- `public modifyColumn(string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface|null $currentColumn = null): string` — Generates SQL to modify a column in a table

- `public onConflictUpdate(string $sqlQuery, array $conflictColumns, array $updateColumns): string` — MySQL does not support the SQL-standard `ON CONFLICT DO UPDATE`

- `public sharedLock(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified with a LOCK IN SHARE MODE clause

- `public supportsOnConflictUpdate(): bool` — MySQL does not support the SQL-standard `ON CONFLICT (...) DO UPDATE`

- `public tableExists(string $tableName, string|null $schemaName = null): string` — Generates SQL checking for the existence of a schema.table

- `public tableOptions(string $table, string|null $schema = null): string` — Generates the SQL to describe the table creation options

- `public truncateTable(string $tableName, string $schemaName = ""): string` — Generates SQL to truncate a table

- `public viewExists(string $viewName, string|null $schemaName = null): string` — Generates SQL checking for the existence of a schema.view

- `protected escapeStringLiteral(string $value): string` — Escape a string literal for a single quoted SQL string. MySQL treats the

### Properties

- ``protected string $escapeChar = "`"``

- `protected list<string> $supportedOperators = [...]`

### Methods

<h4 id="dbdialectmysql-addcheck"><code>addCheck()</code></h4>

```php
public function addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
): string;
```

Generates SQL to add a CHECK constraint to an existing table.
Enforced by MySQL 8.0.16+.

<h4 id="dbdialectmysql-addcolumn"><code>addColumn()</code></h4>

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): string;
```

Generates SQL to add a column to a table

<h4 id="dbdialectmysql-addforeignkey"><code>addForeignKey()</code></h4>

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): string;
```

Generates SQL to add an index to a table

<h4 id="dbdialectmysql-addindex"><code>addIndex()</code></h4>

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add an index to a table

<h4 id="dbdialectmysql-addprimarykey"><code>addPrimaryKey()</code></h4>

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add the primary key to a table

<h4 id="dbdialectmysql-createtable"><code>createTable()</code></h4>

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): string;
```

Generates SQL to create a table

<h4 id="dbdialectmysql-createview"><code>createView()</code></h4>

```php
public function createView(
    string $viewName,
    array $definition,
    string|null $schemaName = null
): string;
```

Generates SQL to create a view

<h4 id="dbdialectmysql-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
    string $table,
    string|null $schema = null
): string;
```

Generates SQL describing a table

```php
print_r(
    $dialect->describeColumns("posts")
);
```

<h4 id="dbdialectmysql-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
    string $table,
    string|null $schema = null
): string;
```

Generates SQL to query indexes on a table

<h4 id="dbdialectmysql-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
    string $table,
    string|null $schema = null
): string;
```

Generates SQL to query foreign keys on a table

<h4 id="dbdialectmysql-dropcheck"><code>dropCheck()</code></h4>

```php
public function dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
): string;
```

Generates SQL to delete a CHECK constraint from a table.

<h4 id="dbdialectmysql-dropcolumn"><code>dropColumn()</code></h4>

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): string;
```

Generates SQL to delete a column from a table

<h4 id="dbdialectmysql-dropforeignkey"><code>dropForeignKey()</code></h4>

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): string;
```

Generates SQL to delete a foreign key from a table

<h4 id="dbdialectmysql-dropindex"><code>dropIndex()</code></h4>

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
): string;
```

Generates SQL to delete an index from a table

<h4 id="dbdialectmysql-dropprimarykey"><code>dropPrimaryKey()</code></h4>

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to delete primary key from a table

<h4 id="dbdialectmysql-droptable"><code>dropTable()</code></h4>

```php
public function dropTable(
    string $tableName,
    string|null $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a table

<h4 id="dbdialectmysql-dropview"><code>dropView()</code></h4>

```php
public function dropView(
    string $viewName,
    string|null $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a view

<h4 id="dbdialectmysql-getcolumndefinition"><code>getColumnDefinition()</code></h4>

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in MySQL

<h4 id="dbdialectmysql-getforeignkeychecks"><code>getForeignKeyChecks()</code></h4>

```php
public function getForeignKeyChecks(): string;
```

Generates SQL to check DB parameter FOREIGN_KEY_CHECKS.

<h4 id="dbdialectmysql-listtables"><code>listTables()</code></h4>

```php
public function listTables( string|null $schemaName = null ): string;
```

List all tables in database

```php
print_r(
    $dialect->listTables("blog")
);
```

<h4 id="dbdialectmysql-listviews"><code>listViews()</code></h4>

```php
public function listViews( string|null $schemaName = null ): string;
```

Generates the SQL to list all views of a schema or user

<h4 id="dbdialectmysql-modifycolumn"><code>modifyColumn()</code></h4>

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface|null $currentColumn = null
): string;
```

Generates SQL to modify a column in a table

<h4 id="dbdialectmysql-onconflictupdate"><code>onConflictUpdate()</code></h4>

```php
public function onConflictUpdate(
    string $sqlQuery,
    array $conflictColumns,
    array $updateColumns
): string;
```

MySQL does not support the SQL-standard `ON CONFLICT DO UPDATE`
upsert syntax - it has its own `INSERT ... ON DUPLICATE KEY UPDATE`.

<h4 id="dbdialectmysql-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a LOCK IN SHARE MODE clause

```php
$sql = $dialect->sharedLock("SELECT * FROM co_invoices");

echo $sql; // SELECT * FROM co_invoices LOCK IN SHARE MODE
```

<h4 id="dbdialectmysql-supportsonconflictupdate"><code>supportsOnConflictUpdate()</code></h4>

```php
public function supportsOnConflictUpdate(): bool;
```

MySQL does not support the SQL-standard `ON CONFLICT (...) DO UPDATE`
upsert clause; `onConflictUpdate()` throws.

<h4 id="dbdialectmysql-tableexists"><code>tableExists()</code></h4>

```php
public function tableExists(
    string $tableName,
    string|null $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.table

```php
echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");
```

<h4 id="dbdialectmysql-tableoptions"><code>tableOptions()</code></h4>

```php
public function tableOptions(
    string $table,
    string|null $schema = null
): string;
```

Generates the SQL to describe the table creation options

<h4 id="dbdialectmysql-truncatetable"><code>truncateTable()</code></h4>

```php
public function truncateTable(
    string $tableName,
    string $schemaName = ""
): string;
```

Generates SQL to truncate a table

<h4 id="dbdialectmysql-viewexists"><code>viewExists()</code></h4>

```php
public function viewExists(
    string $viewName,
    string|null $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.view

<h4 id="dbdialectmysql-escapestringliteral"><code>escapeStringLiteral()</code></h4>

```php
protected function escapeStringLiteral( string $value ): string;
```

Escape a string literal for a single quoted SQL string. MySQL treats the
backslash as an escape character, so it must be doubled together with the
single quote.


## Db\Dialect\Postgresql

Class

Generates database specific SQL for the PostgreSQL RDBMS

- [`Phalcon\Db\Dialect`](#dbdialect)
  - **`Phalcon\Db\Dialect\Postgresql`**

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\CheckInterface` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\ReturningRequiresColumn` · `Phalcon\Db\Exceptions\UnrecognizedDataType` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface`

### Method Summary

- `public addCheck(string $tableName, string $schemaName, CheckInterface $check): string` — Generates SQL to add a CHECK constraint to an existing table.

- `public addColumn(string $tableName, string $schemaName, ColumnInterface $column): string` — Generates SQL to add a column to a table

- `public addForeignKey(string $tableName, string $schemaName, ReferenceInterface $reference): string` — Generates SQL to add an index to a table

- `public addIndex(string $tableName, string $schemaName, IndexInterface $index): string` — Generates SQL to add an index to a table

- `public addPrimaryKey(string $tableName, string $schemaName, IndexInterface $index): string` — Generates SQL to add the primary key to a table

- `public createMaterializedView(string $viewName, array $definition, string|null $schemaName = null): string` — Generates SQL to create a materialized view.

- `public createTable(string $tableName, string $schemaName, array $definition): string` — Generates SQL to create a table

- `public createView(string $viewName, array $definition, string|null $schemaName = null): string` — Generates SQL to create a view

- `public describeColumns(string $table, string|null $schema = null): string` — Generates SQL describing a table

- `public describeIndexes(string $table, string|null $schema = null): string` — Generates SQL to query indexes on a table

- `public describeReferences(string $table, string|null $schema = null): string` — Generates SQL to query foreign keys on a table

- `public dropCheck(string $tableName, string $schemaName, string $checkName): string` — Generates SQL to delete a CHECK constraint from a table.

- `public dropColumn(string $tableName, string $schemaName, string $columnName): string` — Generates SQL to delete a column from a table

- `public dropForeignKey(string $tableName, string $schemaName, string $referenceName): string` — Generates SQL to delete a foreign key from a table

- `public dropIndex(string $tableName, string $schemaName, string $indexName): string` — Generates SQL to delete an index from a table

- `public dropMaterializedView(string $viewName, string|null $schemaName = null, bool $ifExists = true): string` — Generates SQL to drop a materialized view.

- `public dropPrimaryKey(string $tableName, string $schemaName): string` — Generates SQL to delete primary key from a table

- `public dropTable(string $tableName, string|null $schemaName = null, bool $ifExists = true): string` — Generates SQL to drop a table

- `public dropView(string $viewName, string|null $schemaName = null, bool $ifExists = true): string` — Generates SQL to drop a view

- `public getColumnDefinition(ColumnInterface $column): string` — Gets the column name in PostgreSQL

- `public listTables(string|null $schemaName = null): string` — List all tables in database

- `public listViews(string|null $schemaName = null): string` — Generates the SQL to list all views of a schema or user

- `public modifyColumn(string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface|null $currentColumn = null): string` — Generates SQL to modify a column in a table

- `public refreshMaterializedView(string $viewName, string|null $schemaName = null, bool $concurrent = false): string` — Generates SQL to refresh a materialized view.

- `public returning(string $sqlQuery, array $columns): string` — Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE

- `public sharedLock(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified a shared lock statement. For now this method

- `public supportsMaterializedViews(): bool` — PostgreSQL supports materialized views (`CREATE MATERIALIZED VIEW`).

- `public supportsReturning(): bool` — PostgreSQL supports the `RETURNING` clause.

- `public tableExists(string $tableName, string|null $schemaName = null): string` — Generates SQL checking for the existence of a schema.table

- `public tableOptions(string $table, string|null $schema = null): string` — Generates the SQL to describe the table creation options

- `public truncateTable(string $tableName, string|null $schemaName = ""): string` — Generates SQL to truncate a table

- `public viewExists(string $viewName, string|null $schemaName = null): string` — Generates SQL checking for the existence of a schema.view

- `protected castDefault(ColumnInterface $column): string`

- `protected getTableOptions(array $definition): string`

### Properties

- `protected string $escapeChar = "\""`

- `protected list<string> $supportedOperators = [...]`

### Methods

<h4 id="dbdialectpostgresql-addcheck"><code>addCheck()</code></h4>

```php
public function addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
): string;
```

Generates SQL to add a CHECK constraint to an existing table.

<h4 id="dbdialectpostgresql-addcolumn"><code>addColumn()</code></h4>

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): string;
```

Generates SQL to add a column to a table

<h4 id="dbdialectpostgresql-addforeignkey"><code>addForeignKey()</code></h4>

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): string;
```

Generates SQL to add an index to a table

<h4 id="dbdialectpostgresql-addindex"><code>addIndex()</code></h4>

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add an index to a table

<h4 id="dbdialectpostgresql-addprimarykey"><code>addPrimaryKey()</code></h4>

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add the primary key to a table

<h4 id="dbdialectpostgresql-creatematerializedview"><code>createMaterializedView()</code></h4>

```php
public function createMaterializedView(
    string $viewName,
    array $definition,
    string|null $schemaName = null
): string;
```

Generates SQL to create a materialized view.

<h4 id="dbdialectpostgresql-createtable"><code>createTable()</code></h4>

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): string;
```

Generates SQL to create a table

<h4 id="dbdialectpostgresql-createview"><code>createView()</code></h4>

```php
public function createView(
    string $viewName,
    array $definition,
    string|null $schemaName = null
): string;
```

Generates SQL to create a view

<h4 id="dbdialectpostgresql-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
    string $table,
    string|null $schema = null
): string;
```

Generates SQL describing a table

```php
print_r(
    $dialect->describeColumns("posts")
);
```

<h4 id="dbdialectpostgresql-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
    string $table,
    string|null $schema = null
): string;
```

Generates SQL to query indexes on a table

<h4 id="dbdialectpostgresql-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
    string $table,
    string|null $schema = null
): string;
```

Generates SQL to query foreign keys on a table

<h4 id="dbdialectpostgresql-dropcheck"><code>dropCheck()</code></h4>

```php
public function dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
): string;
```

Generates SQL to delete a CHECK constraint from a table.

<h4 id="dbdialectpostgresql-dropcolumn"><code>dropColumn()</code></h4>

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): string;
```

Generates SQL to delete a column from a table

<h4 id="dbdialectpostgresql-dropforeignkey"><code>dropForeignKey()</code></h4>

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): string;
```

Generates SQL to delete a foreign key from a table

<h4 id="dbdialectpostgresql-dropindex"><code>dropIndex()</code></h4>

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
): string;
```

Generates SQL to delete an index from a table

<h4 id="dbdialectpostgresql-dropmaterializedview"><code>dropMaterializedView()</code></h4>

```php
public function dropMaterializedView(
    string $viewName,
    string|null $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a materialized view.

<h4 id="dbdialectpostgresql-dropprimarykey"><code>dropPrimaryKey()</code></h4>

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to delete primary key from a table

<h4 id="dbdialectpostgresql-droptable"><code>dropTable()</code></h4>

```php
public function dropTable(
    string $tableName,
    string|null $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a table

<h4 id="dbdialectpostgresql-dropview"><code>dropView()</code></h4>

```php
public function dropView(
    string $viewName,
    string|null $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a view

<h4 id="dbdialectpostgresql-getcolumndefinition"><code>getColumnDefinition()</code></h4>

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in PostgreSQL

<h4 id="dbdialectpostgresql-listtables"><code>listTables()</code></h4>

```php
public function listTables( string|null $schemaName = null ): string;
```

List all tables in database

```php
print_r(
    $dialect->listTables("blog")
);
```

<h4 id="dbdialectpostgresql-listviews"><code>listViews()</code></h4>

```php
public function listViews( string|null $schemaName = null ): string;
```

Generates the SQL to list all views of a schema or user

<h4 id="dbdialectpostgresql-modifycolumn"><code>modifyColumn()</code></h4>

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface|null $currentColumn = null
): string;
```

Generates SQL to modify a column in a table

<h4 id="dbdialectpostgresql-refreshmaterializedview"><code>refreshMaterializedView()</code></h4>

```php
public function refreshMaterializedView(
    string $viewName,
    string|null $schemaName = null,
    bool $concurrent = false
): string;
```

Generates SQL to refresh a materialized view.

<h4 id="dbdialectpostgresql-returning"><code>returning()</code></h4>

```php
public function returning(
    string $sqlQuery,
    array $columns
): string;
```

Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE
statement.

<h4 id="dbdialectpostgresql-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified a shared lock statement. For now this method
returns the original query

<h4 id="dbdialectpostgresql-supportsmaterializedviews"><code>supportsMaterializedViews()</code></h4>

```php
public function supportsMaterializedViews(): bool;
```

PostgreSQL supports materialized views (`CREATE MATERIALIZED VIEW`).

<h4 id="dbdialectpostgresql-supportsreturning"><code>supportsReturning()</code></h4>

```php
public function supportsReturning(): bool;
```

PostgreSQL supports the `RETURNING` clause.

<h4 id="dbdialectpostgresql-tableexists"><code>tableExists()</code></h4>

```php
public function tableExists(
    string $tableName,
    string|null $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.table

```php
echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");
```

<h4 id="dbdialectpostgresql-tableoptions"><code>tableOptions()</code></h4>

```php
public function tableOptions(
    string $table,
    string|null $schema = null
): string;
```

Generates the SQL to describe the table creation options

<h4 id="dbdialectpostgresql-truncatetable"><code>truncateTable()</code></h4>

```php
public function truncateTable(
    string $tableName,
    string|null $schemaName = ""
): string;
```

Generates SQL to truncate a table

<h4 id="dbdialectpostgresql-viewexists"><code>viewExists()</code></h4>

```php
public function viewExists(
    string $viewName,
    string|null $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.view

<h4 id="dbdialectpostgresql-castdefault"><code>castDefault()</code></h4>

```php
protected function castDefault( ColumnInterface $column ): string;
```

<h4 id="dbdialectpostgresql-gettableoptions"><code>getTableOptions()</code></h4>

```php
protected function getTableOptions( array $definition ): string;
```


## Db\Dialect\Sqlite

Class

Generates database specific SQL for the SQLite RDBMS

- [`Phalcon\Db\Dialect`](#dbdialect)
  - **`Phalcon\Db\Dialect\Sqlite`**

`Phalcon\Db\CheckInterface` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\Dialect\Traits\TextTrait` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\ReturningRequiresColumn` · `Phalcon\Db\Exceptions\SqliteAlterCheckNotSupported` · `Phalcon\Db\Exceptions\SqliteAlterColumnNotSupported` · `Phalcon\Db\Exceptions\SqliteAlterForeignKeyNotSupported` · `Phalcon\Db\Exceptions\SqliteAlterPrimaryKeyNotSupported` · `Phalcon\Db\Exceptions\SqliteDropCheckNotSupported` · `Phalcon\Db\Exceptions\SqliteDropForeignKeyNotSupported` · `Phalcon\Db\Exceptions\SqliteDropPrimaryKeyNotSupported` · `Phalcon\Db\Exceptions\UnrecognizedDataType` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface`

### Method Summary

- `public addCheck(string $tableName, string $schemaName, CheckInterface $check): string` — SQLite cannot ALTER an existing table to add a CHECK constraint.

- `public addColumn(string $tableName, string $schemaName, ColumnInterface $column): string` — Generates SQL to add a column to a table

- `public addForeignKey(string $tableName, string $schemaName, ReferenceInterface $reference): string` — Generates SQL to add an index to a table

- `public addIndex(string $tableName, string $schemaName, IndexInterface $index): string` — Generates SQL to add an index to a table

- `public addPrimaryKey(string $tableName, string $schemaName, IndexInterface $index): string` — Generates SQL to add the primary key to a table

- `public createTable(string $tableName, string $schemaName, array $definition): string` — Generates SQL to create a table

- `public createView(string $viewName, array $definition, string|null $schemaName = null): string` — Generates SQL to create a view

- `public describeColumns(string $table, string|null $schema = null): string` — Generates SQL describing a table

- `public describeIndex(string $index): string` — Generates SQL to query indexes detail on a table

- `public describeIndexes(string $table, string|null $schema = null): string` — Generates SQL to query indexes on a table

- `public describeReferences(string $table, string|null $schema = null): string` — Generates SQL to query foreign keys on a table

- `public dropCheck(string $tableName, string $schemaName, string $checkName): string` — SQLite cannot DROP a CHECK constraint from an existing table.

- `public dropColumn(string $tableName, string $schemaName, string $columnName): string` — Generates SQL to delete a column from a table

- `public dropForeignKey(string $tableName, string $schemaName, string $referenceName): string` — Generates SQL to delete a foreign key from a table

- `public dropIndex(string $tableName, string $schemaName, string $indexName): string` — Generates SQL to delete an index from a table

- `public dropPrimaryKey(string $tableName, string $schemaName): string` — Generates SQL to delete primary key from a table

- `public dropTable(string $tableName, string|null $schemaName = null, bool $ifExists = true): string` — Generates SQL to drop a table

- `public dropView(string $viewName, string|null $schemaName = null, bool $ifExists = true): string` — Generates SQL to drop a view

- `public forUpdate(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified with a FOR UPDATE clause. For SQLite, it returns

- `public getColumnDefinition(ColumnInterface $column): string` — Gets the column name in SQLite

- `public listIndexesSql(string $tableName, string|null $schemaName = null, string|null $keyName = null): string` — Generates the SQL to get query list of indexes

- `public listTables(string|null $schemaName = null): string` — List all tables in database

- `public listViews(string|null $schemaName = null): string` — Generates the SQL to list all views of a schema or user

- `public modifyColumn(string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface|null $currentColumn = null): string` — Generates SQL to modify a column in a table

- `public returning(string $sqlQuery, array $columns): string` — Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE

- `public sharedLock(string $sqlQuery, string $modifier = ""): string` — Returns a SQL modified a shared lock statement. For now this method

- `public supportsAlterTable(): bool` — SQLite cannot modify existing columns or add/drop foreign keys, primary

- `public supportsReturning(): bool` — SQLite (3.35+) supports the `RETURNING` clause.

- `public tableExists(string $tableName, string|null $schemaName = null): string` — Generates SQL checking for the existence of a schema.table

- `public tableOptions(string $table, string|null $schema = null): string` — Generates the SQL to describe the table creation options

- `public truncateTable(string $tableName, string|null $schemaName = ""): string` — Generates SQL to truncate a table

- `public viewExists(string $viewName, string|null $schemaName = null): string` — Generates SQL checking for the existence of a schema.view

### Properties

- `protected string $escapeChar = "\""`

- `protected list<string> $supportedOperators = [...]`

### Methods

<h4 id="dbdialectsqlite-addcheck"><code>addCheck()</code></h4>

```php
public function addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
): string;
```

SQLite cannot ALTER an existing table to add a CHECK constraint.

<h4 id="dbdialectsqlite-addcolumn"><code>addColumn()</code></h4>

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): string;
```

Generates SQL to add a column to a table

<h4 id="dbdialectsqlite-addforeignkey"><code>addForeignKey()</code></h4>

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): string;
```

Generates SQL to add an index to a table

<h4 id="dbdialectsqlite-addindex"><code>addIndex()</code></h4>

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add an index to a table

<h4 id="dbdialectsqlite-addprimarykey"><code>addPrimaryKey()</code></h4>

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add the primary key to a table

<h4 id="dbdialectsqlite-createtable"><code>createTable()</code></h4>

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): string;
```

Generates SQL to create a table

<h4 id="dbdialectsqlite-createview"><code>createView()</code></h4>

```php
public function createView(
    string $viewName,
    array $definition,
    string|null $schemaName = null
): string;
```

Generates SQL to create a view

<h4 id="dbdialectsqlite-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
    string $table,
    string|null $schema = null
): string;
```

Generates SQL describing a table

```php
print_r(
    $dialect->describeColumns("posts")
);
```

<h4 id="dbdialectsqlite-describeindex"><code>describeIndex()</code></h4>

```php
public function describeIndex( string $index ): string;
```

Generates SQL to query indexes detail on a table

<h4 id="dbdialectsqlite-describeindexes"><code>describeIndexes()</code></h4>

```php
public function describeIndexes(
    string $table,
    string|null $schema = null
): string;
```

Generates SQL to query indexes on a table

<h4 id="dbdialectsqlite-describereferences"><code>describeReferences()</code></h4>

```php
public function describeReferences(
    string $table,
    string|null $schema = null
): string;
```

Generates SQL to query foreign keys on a table

<h4 id="dbdialectsqlite-dropcheck"><code>dropCheck()</code></h4>

```php
public function dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
): string;
```

SQLite cannot DROP a CHECK constraint from an existing table.

<h4 id="dbdialectsqlite-dropcolumn"><code>dropColumn()</code></h4>

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): string;
```

Generates SQL to delete a column from a table

<h4 id="dbdialectsqlite-dropforeignkey"><code>dropForeignKey()</code></h4>

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): string;
```

Generates SQL to delete a foreign key from a table

<h4 id="dbdialectsqlite-dropindex"><code>dropIndex()</code></h4>

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
): string;
```

Generates SQL to delete an index from a table

<h4 id="dbdialectsqlite-dropprimarykey"><code>dropPrimaryKey()</code></h4>

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to delete primary key from a table

<h4 id="dbdialectsqlite-droptable"><code>dropTable()</code></h4>

```php
public function dropTable(
    string $tableName,
    string|null $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a table

<h4 id="dbdialectsqlite-dropview"><code>dropView()</code></h4>

```php
public function dropView(
    string $viewName,
    string|null $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a view

<h4 id="dbdialectsqlite-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause. For SQLite, it returns
the original query

<h4 id="dbdialectsqlite-getcolumndefinition"><code>getColumnDefinition()</code></h4>

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in SQLite

<h4 id="dbdialectsqlite-listindexessql"><code>listIndexesSql()</code></h4>

```php
public function listIndexesSql(
    string $tableName,
    string|null $schemaName = null,
    string|null $keyName = null
): string;
```

Generates the SQL to get query list of indexes

```php
print_r(
    $dialect->listIndexesSql("blog")
);
```

<h4 id="dbdialectsqlite-listtables"><code>listTables()</code></h4>

```php
public function listTables( string|null $schemaName = null ): string;
```

List all tables in database

```php
print_r(
    $dialect->listTables("blog")
);
```

<h4 id="dbdialectsqlite-listviews"><code>listViews()</code></h4>

```php
public function listViews( string|null $schemaName = null ): string;
```

Generates the SQL to list all views of a schema or user

<h4 id="dbdialectsqlite-modifycolumn"><code>modifyColumn()</code></h4>

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface|null $currentColumn = null
): string;
```

Generates SQL to modify a column in a table

<h4 id="dbdialectsqlite-returning"><code>returning()</code></h4>

```php
public function returning(
    string $sqlQuery,
    array $columns
): string;
```

Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE
statement. SQLite 3.35+.

<h4 id="dbdialectsqlite-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified a shared lock statement. For now this method
returns the original query

<h4 id="dbdialectsqlite-supportsaltertable"><code>supportsAlterTable()</code></h4>

```php
public function supportsAlterTable(): bool;
```

SQLite cannot modify existing columns or add/drop foreign keys, primary
keys, or check constraints through `ALTER TABLE`; those operations throw
a dedicated `Sqlite*NotSupported` exception.

<h4 id="dbdialectsqlite-supportsreturning"><code>supportsReturning()</code></h4>

```php
public function supportsReturning(): bool;
```

SQLite (3.35+) supports the `RETURNING` clause.

<h4 id="dbdialectsqlite-tableexists"><code>tableExists()</code></h4>

```php
public function tableExists(
    string $tableName,
    string|null $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.table

```php
echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");
```

<h4 id="dbdialectsqlite-tableoptions"><code>tableOptions()</code></h4>

```php
public function tableOptions(
    string $table,
    string|null $schema = null
): string;
```

Generates the SQL to describe the table creation options

<h4 id="dbdialectsqlite-truncatetable"><code>truncateTable()</code></h4>

```php
public function truncateTable(
    string $tableName,
    string|null $schemaName = ""
): string;
```

Generates SQL to truncate a table

<h4 id="dbdialectsqlite-viewexists"><code>viewExists()</code></h4>

```php
public function viewExists(
    string $viewName,
    string|null $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.view


## Db\Dialect\Traits\TextTrait

Trait

- **`Phalcon\Db\Dialect\Traits\TextTrait`**

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Exception` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface`

[`Phalcon\Db\Dialect\Mysql`](#dbdialectmysql) · [`Phalcon\Db\Dialect\Sqlite`](#dbdialectsqlite)

### Method Summary

- `protected alter(string $tableName, string|null $schemaName = null): string`

- `protected alterTableDrop(string $object, string $item, string $tableName, string $schemaName): string`

- `protected checkColumnComment(ColumnInterface $column): string`

- `protected checkColumnFirstAfterPositions(ColumnInterface $column): string`

- `protected checkColumnHasDefault(ColumnInterface $column): string`

- `protected checkColumnIsAutoIncrement(ColumnInterface $column): string`

- `protected checkColumnIsGenerated(ColumnInterface $column): string` — Emits the GENERATED ALWAYS AS (...) VIRTUAL|STORED clause. Wraps the

- `protected checkColumnIsInvisible(ColumnInterface $column): string` — Emits the INVISIBLE keyword for MySQL 8.0.23+ invisible columns.

- `protected checkColumnIsNull(ColumnInterface $column): string`

- `protected checkColumnIsPrimary(ColumnInterface $column): string`

- `protected checkColumnSizeAndScale(ColumnInterface $column): string` — Checks if the size and/or scale are present and encloses those values

- `protected checkColumnUnsigned(ColumnInterface $column): string` — Checks if a column is unsigned or not and returns the relevant SQL syntax

- `protected checkReferenceConstraint(ReferenceInterface $reference): string`

- `protected checkReferenceOnDelete(ReferenceInterface $reference): string`

- `protected checkReferenceOnUpdate(ReferenceInterface $reference): string`

- ``protected delimit(string $identifier, string $delimiter = "`"): string``

- `protected drop(string $type): string`

- `protected exists(bool $exists): string`

- `protected getExistsSql(string $table, string $viewName, string|null $schemaName): string`

- `protected getMysqlSchemaString(string|null $schemaName): string`

- `protected getNullString(): string`

- `protected getTableChecks(array $definition): array` — Returns the list of CONSTRAINT ... CHECK (...) lines for createTable.

- `protected getTableColumns(array $definition): array` — The caller rejects a definition without a column list, so the shape

- `protected getTableIndexes(array $definition): array`

- `protected getTableOptions(array $definition): string` — Generates SQL to add the table creation options. The caller emits the

- `protected getTableReferences(array $definition): array`

- `protected wrap(string $identifier): string`

### Methods

<h4 id="dbdialecttraitstexttrait-alter"><code>alter()</code></h4>

```php
protected function alter(
    string $tableName,
    string|null $schemaName = null
): string;
```

<h4 id="dbdialecttraitstexttrait-altertabledrop"><code>alterTableDrop()</code></h4>

```php
protected function alterTableDrop(
    string $object,
    string $item,
    string $tableName,
    string $schemaName
): string;
```

<h4 id="dbdialecttraitstexttrait-checkcolumncomment"><code>checkColumnComment()</code></h4>

```php
protected function checkColumnComment( ColumnInterface $column ): string;
```

<h4 id="dbdialecttraitstexttrait-checkcolumnfirstafterpositions"><code>checkColumnFirstAfterPositions()</code></h4>

```php
protected function checkColumnFirstAfterPositions( ColumnInterface $column ): string;
```

<h4 id="dbdialecttraitstexttrait-checkcolumnhasdefault"><code>checkColumnHasDefault()</code></h4>

```php
protected function checkColumnHasDefault( ColumnInterface $column ): string;
```

<h4 id="dbdialecttraitstexttrait-checkcolumnisautoincrement"><code>checkColumnIsAutoIncrement()</code></h4>

```php
protected function checkColumnIsAutoIncrement( ColumnInterface $column ): string;
```

<h4 id="dbdialecttraitstexttrait-checkcolumnisgenerated"><code>checkColumnIsGenerated()</code></h4>

```php
protected function checkColumnIsGenerated( ColumnInterface $column ): string;
```

Emits the GENERATED ALWAYS AS (...) VIRTUAL|STORED clause. Wraps the
shared dialect helper for trait users.

<h4 id="dbdialecttraitstexttrait-checkcolumnisinvisible"><code>checkColumnIsInvisible()</code></h4>

```php
protected function checkColumnIsInvisible( ColumnInterface $column ): string;
```

Emits the INVISIBLE keyword for MySQL 8.0.23+ invisible columns.
Other dialects override this trait helper to return an empty string.

<h4 id="dbdialecttraitstexttrait-checkcolumnisnull"><code>checkColumnIsNull()</code></h4>

```php
protected function checkColumnIsNull( ColumnInterface $column ): string;
```

<h4 id="dbdialecttraitstexttrait-checkcolumnisprimary"><code>checkColumnIsPrimary()</code></h4>

```php
protected function checkColumnIsPrimary( ColumnInterface $column ): string;
```

<h4 id="dbdialecttraitstexttrait-checkcolumnsizeandscale"><code>checkColumnSizeAndScale()</code></h4>

```php
protected function checkColumnSizeAndScale( ColumnInterface $column ): string;
```

Checks if the size and/or scale are present and encloses those values
in parentheses if need be

<h4 id="dbdialecttraitstexttrait-checkcolumnunsigned"><code>checkColumnUnsigned()</code></h4>

```php
protected function checkColumnUnsigned( ColumnInterface $column ): string;
```

Checks if a column is unsigned or not and returns the relevant SQL syntax

<h4 id="dbdialecttraitstexttrait-checkreferenceconstraint"><code>checkReferenceConstraint()</code></h4>

```php
protected function checkReferenceConstraint( ReferenceInterface $reference ): string;
```

<h4 id="dbdialecttraitstexttrait-checkreferenceondelete"><code>checkReferenceOnDelete()</code></h4>

```php
protected function checkReferenceOnDelete( ReferenceInterface $reference ): string;
```

<h4 id="dbdialecttraitstexttrait-checkreferenceonupdate"><code>checkReferenceOnUpdate()</code></h4>

```php
protected function checkReferenceOnUpdate( ReferenceInterface $reference ): string;
```

<h4 id="dbdialecttraitstexttrait-delimit"><code>delimit()</code></h4>

```php
protected function delimit(
    string $identifier,
    string $delimiter = "`"
): string;
```

<h4 id="dbdialecttraitstexttrait-drop"><code>drop()</code></h4>

```php
protected function drop( string $type ): string;
```

<h4 id="dbdialecttraitstexttrait-exists"><code>exists()</code></h4>

```php
protected function exists( bool $exists ): string;
```

<h4 id="dbdialecttraitstexttrait-getexistssql"><code>getExistsSql()</code></h4>

```php
protected function getExistsSql(
    string $table,
    string $viewName,
    string|null $schemaName
): string;
```

<h4 id="dbdialecttraitstexttrait-getmysqlschemastring"><code>getMysqlSchemaString()</code></h4>

```php
protected function getMysqlSchemaString( string|null $schemaName ): string;
```

<h4 id="dbdialecttraitstexttrait-getnullstring"><code>getNullString()</code></h4>

```php
protected function getNullString(): string;
```

<h4 id="dbdialecttraitstexttrait-gettablechecks"><code>getTableChecks()</code></h4>

```php
protected function getTableChecks( array $definition ): array;
```

Returns the list of CONSTRAINT ... CHECK (...) lines for createTable.
Uses the dialect's escape character via the shared getCheckClause()
helper.

<h4 id="dbdialecttraitstexttrait-gettablecolumns"><code>getTableColumns()</code></h4>

```php
protected function getTableColumns( array $definition ): array;
```

The caller rejects a definition without a column list, so the shape
below is narrower than `db_table_definition`.

<h4 id="dbdialecttraitstexttrait-gettableindexes"><code>getTableIndexes()</code></h4>

```php
protected function getTableIndexes( array $definition ): array;
```

<h4 id="dbdialecttraitstexttrait-gettableoptions"><code>getTableOptions()</code></h4>

```php
protected function getTableOptions( array $definition ): string;
```

Generates SQL to add the table creation options. The caller emits the
clause only when the definition carries the options, so the shape
below is narrower than `db_table_definition`.

<h4 id="dbdialecttraitstexttrait-gettablereferences"><code>getTableReferences()</code></h4>

```php
protected function getTableReferences( array $definition ): array;
```

<h4 id="dbdialecttraitstexttrait-wrap"><code>wrap()</code></h4>

```php
protected function wrap( string $identifier ): string;
```


## Db\Enum

Class

Constants for Phalcon\Db

- **`Phalcon\Db\Enum`**

`PDO`

### Constants

- `const mixed FETCH_ASSOC = PDO::FETCH_ASSOC`

- `const mixed FETCH_BOTH = PDO::FETCH_BOTH`

- `const mixed FETCH_BOUND = PDO::FETCH_BOUND`

- `const mixed FETCH_CLASS = PDO::FETCH_CLASS`

- `const mixed FETCH_CLASSTYPE = PDO::FETCH_CLASSTYPE`

- `const mixed FETCH_COLUMN = PDO::FETCH_COLUMN`

- `const mixed FETCH_DEFAULT = PDO::FETCH_DEFAULT`

- `const mixed FETCH_FUNC = PDO::FETCH_FUNC`

- `const mixed FETCH_GROUP = PDO::FETCH_GROUP`

- `const mixed FETCH_INTO = PDO::FETCH_INTO`

- `const mixed FETCH_KEY_PAIR = PDO::FETCH_KEY_PAIR`

- `const mixed FETCH_LAZY = PDO::FETCH_LAZY`

- `const mixed FETCH_NAMED = PDO::FETCH_NAMED`

- `const mixed FETCH_NUM = PDO::FETCH_NUM`

- `const mixed FETCH_OBJ = PDO::FETCH_OBJ`

- `const mixed FETCH_ORI_NEXT = PDO::FETCH_ORI_NEXT`

- `const mixed FETCH_PROPS_LATE = PDO::FETCH_PROPS_LATE`

- `const mixed FETCH_SERIALIZE = PDO::FETCH_SERIALIZE`

- `const mixed FETCH_UNIQUE = PDO::FETCH_UNIQUE`


## Db\Exception

Class

Exceptions thrown in Phalcon\Db will use this class

- `\Exception`
  - **`Phalcon\Db\Exception`**
    - [`Phalcon\Db\Exceptions\CannotInsertWithoutData`](#dbexceptionscannotinsertwithoutdata)
    - [`Phalcon\Db\Exceptions\CannotPrepareStatement`](#dbexceptionscannotpreparestatement)
    - [`Phalcon\Db\Exceptions\CheckExpressionRequired`](#dbexceptionscheckexpressionrequired)
    - [`Phalcon\Db\Exceptions\ColumnTypeRejectsAutoIncrement`](#dbexceptionscolumntyperejectsautoincrement)
    - [`Phalcon\Db\Exceptions\ColumnTypeRejectsScale`](#dbexceptionscolumntyperejectsscale)
    - [`Phalcon\Db\Exceptions\ColumnTypeRequired`](#dbexceptionscolumntyperequired)
    - [`Phalcon\Db\Exceptions\ConflictTargetColumnRequired`](#dbexceptionsconflicttargetcolumnrequired)
    - [`Phalcon\Db\Exceptions\ConflictUpdateColumnRequired`](#dbexceptionsconflictupdatecolumnrequired)
    - [`Phalcon\Db\Exceptions\ForeignKeyColumnsRequired`](#dbexceptionsforeignkeycolumnsrequired)
    - [`Phalcon\Db\Exceptions\GeneratedAutoIncrementConflict`](#dbexceptionsgeneratedautoincrementconflict)
    - [`Phalcon\Db\Exceptions\GeneratedDefaultConflict`](#dbexceptionsgenerateddefaultconflict)
    - [`Phalcon\Db\Exceptions\IncompleteBindTypes`](#dbexceptionsincompletebindtypes)
    - [`Phalcon\Db\Exceptions\InvalidBindParameter`](#dbexceptionsinvalidbindparameter)
    - [`Phalcon\Db\Exceptions\InvalidCheckExpression`](#dbexceptionsinvalidcheckexpression)
    - [`Phalcon\Db\Exceptions\InvalidDialectClass`](#dbexceptionsinvaliddialectclass)
    - [`Phalcon\Db\Exceptions\InvalidGenerationExpression`](#dbexceptionsinvalidgenerationexpression)
    - [`Phalcon\Db\Exceptions\InvalidGroupByExpression`](#dbexceptionsinvalidgroupbyexpression)
    - [`Phalcon\Db\Exceptions\InvalidIndexColumns`](#dbexceptionsinvalidindexcolumns)
    - [`Phalcon\Db\Exceptions\InvalidIndexDirections`](#dbexceptionsinvalidindexdirections)
    - [`Phalcon\Db\Exceptions\InvalidIndexWhere`](#dbexceptionsinvalidindexwhere)
    - [`Phalcon\Db\Exceptions\InvalidListExpression`](#dbexceptionsinvalidlistexpression)
    - [`Phalcon\Db\Exceptions\InvalidOrderByExpression`](#dbexceptionsinvalidorderbyexpression)
    - [`Phalcon\Db\Exceptions\InvalidSqlExpression`](#dbexceptionsinvalidsqlexpression)
    - [`Phalcon\Db\Exceptions\InvalidSqlExpressionType`](#dbexceptionsinvalidsqlexpressiontype)
    - [`Phalcon\Db\Exceptions\InvalidUnaryExpression`](#dbexceptionsinvalidunaryexpression)
    - [`Phalcon\Db\Exceptions\InvalidWhereConditions`](#dbexceptionsinvalidwhereconditions)
    - [`Phalcon\Db\Exceptions\InvalidWkb`](#dbexceptionsinvalidwkb)
    - [`Phalcon\Db\Exceptions\MatchedParameterNotFound`](#dbexceptionsmatchedparameternotfound)
    - [`Phalcon\Db\Exceptions\MaterializedViewsNotSupported`](#dbexceptionsmaterializedviewsnotsupported)
    - [`Phalcon\Db\Exceptions\MissingDefinitionKey`](#dbexceptionsmissingdefinitionkey)
    - [`Phalcon\Db\Exceptions\MissingForeignKeyChecks`](#dbexceptionsmissingforeignkeychecks)
    - [`Phalcon\Db\Exceptions\MissingSqliteDatabase`](#dbexceptionsmissingsqlitedatabase)
    - [`Phalcon\Db\Exceptions\MysqlOnConflictNotSupported`](#dbexceptionsmysqlonconflictnotsupported)
    - [`Phalcon\Db\Exceptions\NestedTransactionChangeBlocked`](#dbexceptionsnestedtransactionchangeblocked)
    - [`Phalcon\Db\Exceptions\NoActiveTransaction`](#dbexceptionsnoactivetransaction)
    - [`Phalcon\Db\Exceptions\ReferencedColumnCountMismatch`](#dbexceptionsreferencedcolumncountmismatch)
    - [`Phalcon\Db\Exceptions\ReferencedColumnsRequired`](#dbexceptionsreferencedcolumnsrequired)
    - [`Phalcon\Db\Exceptions\ReferencedTableRequired`](#dbexceptionsreferencedtablerequired)
    - [`Phalcon\Db\Exceptions\ReturningNotSupported`](#dbexceptionsreturningnotsupported)
    - [`Phalcon\Db\Exceptions\ReturningRequiresColumn`](#dbexceptionsreturningrequirescolumn)
    - [`Phalcon\Db\Exceptions\SavepointsNotSupported`](#dbexceptionssavepointsnotsupported)
    - [`Phalcon\Db\Exceptions\SqliteAlterCheckNotSupported`](#dbexceptionssqlitealterchecknotsupported)
    - [`Phalcon\Db\Exceptions\SqliteAlterColumnNotSupported`](#dbexceptionssqlitealtercolumnnotsupported)
    - [`Phalcon\Db\Exceptions\SqliteAlterForeignKeyNotSupported`](#dbexceptionssqlitealterforeignkeynotsupported)
    - [`Phalcon\Db\Exceptions\SqliteAlterPrimaryKeyNotSupported`](#dbexceptionssqlitealterprimarykeynotsupported)
    - [`Phalcon\Db\Exceptions\SqliteDropCheckNotSupported`](#dbexceptionssqlitedropchecknotsupported)
    - [`Phalcon\Db\Exceptions\SqliteDropForeignKeyNotSupported`](#dbexceptionssqlitedropforeignkeynotsupported)
    - [`Phalcon\Db\Exceptions\SqliteDropPrimaryKeyNotSupported`](#dbexceptionssqlitedropprimarykeynotsupported)
    - [`Phalcon\Db\Exceptions\TableMustHaveColumn`](#dbexceptionstablemusthavecolumn)
    - [`Phalcon\Db\Exceptions\UnrecognizedDataType`](#dbexceptionsunrecognizeddatatype)
    - [`Phalcon\Db\Exceptions\UnsupportedOperator`](#dbexceptionsunsupportedoperator)
    - [`Phalcon\Db\Exceptions\UpdateFieldCountMismatch`](#dbexceptionsupdatefieldcountmismatch)


## Db\Exceptions\CannotInsertWithoutData

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\CannotInsertWithoutData`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct(string $table)`

### Methods

<h4 id="dbexceptionscannotinsertwithoutdata-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $table );
```


## Db\Exceptions\CannotPrepareStatement

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\CannotPrepareStatement`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionscannotpreparestatement-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\CheckExpressionRequired

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\CheckExpressionRequired`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionscheckexpressionrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ColumnTypeRejectsAutoIncrement

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ColumnTypeRejectsAutoIncrement`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionscolumntyperejectsautoincrement-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ColumnTypeRejectsScale

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ColumnTypeRejectsScale`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionscolumntyperejectsscale-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ColumnTypeRequired

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ColumnTypeRequired`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionscolumntyperequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ConflictTargetColumnRequired

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ConflictTargetColumnRequired`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsconflicttargetcolumnrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ConflictUpdateColumnRequired

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ConflictUpdateColumnRequired`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsconflictupdatecolumnrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ForeignKeyColumnsRequired

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ForeignKeyColumnsRequired`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsforeignkeycolumnsrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\GeneratedAutoIncrementConflict

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\GeneratedAutoIncrementConflict`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsgeneratedautoincrementconflict-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\GeneratedDefaultConflict

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\GeneratedDefaultConflict`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsgenerateddefaultconflict-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\IncompleteBindTypes

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\IncompleteBindTypes`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsincompletebindtypes-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidBindParameter

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidBindParameter`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidbindparameter-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidCheckExpression

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidCheckExpression`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidcheckexpression-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidDialectClass

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidDialectClass`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct(string $className)`

### Methods

<h4 id="dbexceptionsinvaliddialectclass-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```


## Db\Exceptions\InvalidGenerationExpression

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidGenerationExpression`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidgenerationexpression-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidGroupByExpression

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidGroupByExpression`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidgroupbyexpression-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidIndexColumns

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidIndexColumns`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidindexcolumns-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidIndexDirections

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidIndexDirections`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidindexdirections-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidIndexWhere

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidIndexWhere`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidindexwhere-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidListExpression

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidListExpression`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidlistexpression-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidOrderByExpression

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidOrderByExpression`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidorderbyexpression-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidSqlExpression

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidSqlExpression`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidsqlexpression-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidSqlExpressionType

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidSqlExpressionType`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct(string $type)`

### Methods

<h4 id="dbexceptionsinvalidsqlexpressiontype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type );
```


## Db\Exceptions\InvalidUnaryExpression

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidUnaryExpression`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidunaryexpression-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidWhereConditions

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidWhereConditions`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsinvalidwhereconditions-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\InvalidWkb

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\InvalidWkb`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct(string $reason)`

### Methods

<h4 id="dbexceptionsinvalidwkb-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $reason );
```


## Db\Exceptions\MatchedParameterNotFound

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\MatchedParameterNotFound`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsmatchedparameternotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\MaterializedViewsNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\MaterializedViewsNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsmaterializedviewsnotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\MissingDefinitionKey

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\MissingDefinitionKey`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct(string $key)`

### Methods

<h4 id="dbexceptionsmissingdefinitionkey-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $key );
```


## Db\Exceptions\MissingForeignKeyChecks

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\MissingForeignKeyChecks`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsmissingforeignkeychecks-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\MissingSqliteDatabase

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\MissingSqliteDatabase`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsmissingsqlitedatabase-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\MysqlOnConflictNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\MysqlOnConflictNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsmysqlonconflictnotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\NestedTransactionChangeBlocked

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\NestedTransactionChangeBlocked`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsnestedtransactionchangeblocked-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\NoActiveTransaction

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\NoActiveTransaction`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsnoactivetransaction-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ReferencedColumnCountMismatch

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ReferencedColumnCountMismatch`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsreferencedcolumncountmismatch-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ReferencedColumnsRequired

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ReferencedColumnsRequired`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsreferencedcolumnsrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ReferencedTableRequired

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ReferencedTableRequired`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsreferencedtablerequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ReturningNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ReturningNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsreturningnotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\ReturningRequiresColumn

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\ReturningRequiresColumn`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsreturningrequirescolumn-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\SavepointsNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\SavepointsNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionssavepointsnotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\SqliteAlterCheckNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\SqliteAlterCheckNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionssqlitealterchecknotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\SqliteAlterColumnNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\SqliteAlterColumnNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionssqlitealtercolumnnotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\SqliteAlterForeignKeyNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\SqliteAlterForeignKeyNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionssqlitealterforeignkeynotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\SqliteAlterPrimaryKeyNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\SqliteAlterPrimaryKeyNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionssqlitealterprimarykeynotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\SqliteDropCheckNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\SqliteDropCheckNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionssqlitedropchecknotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\SqliteDropForeignKeyNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\SqliteDropForeignKeyNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionssqlitedropforeignkeynotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\SqliteDropPrimaryKeyNotSupported

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\SqliteDropPrimaryKeyNotSupported`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionssqlitedropprimarykeynotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\TableMustHaveColumn

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\TableMustHaveColumn`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionstablemusthavecolumn-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Exceptions\UnrecognizedDataType

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\UnrecognizedDataType`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct(string $dialect, string $column)`

### Methods

<h4 id="dbexceptionsunrecognizeddatatype-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $dialect,
    string $column
);
```


## Db\Exceptions\UnsupportedOperator

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\UnsupportedOperator`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct(string $operator)`

### Methods

<h4 id="dbexceptionsunsupportedoperator-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $operator );
```


## Db\Exceptions\UpdateFieldCountMismatch

Class

- `\Exception`
  - [`Phalcon\Db\Exception`](#dbexception)
    - **`Phalcon\Db\Exceptions\UpdateFieldCountMismatch`**

`Phalcon\Db\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="dbexceptionsupdatefieldcountmismatch-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Db\Geometry\AbstractGeometry

Abstract

- **`Phalcon\Db\Geometry\AbstractGeometry`** - implements [`Phalcon\Db\Geometry\GeometryInterface`](#dbgeometrygeometryinterface)
  - [`Phalcon\Db\Geometry\GeometryCollection`](#dbgeometrygeometrycollection)
  - [`Phalcon\Db\Geometry\LineString`](#dbgeometrylinestring)
  - [`Phalcon\Db\Geometry\MultiLineString`](#dbgeometrymultilinestring)
  - [`Phalcon\Db\Geometry\MultiPoint`](#dbgeometrymultipoint)
  - [`Phalcon\Db\Geometry\MultiPolygon`](#dbgeometrymultipolygon)
  - [`Phalcon\Db\Geometry\Point`](#dbgeometrypoint)
  - [`Phalcon\Db\Geometry\Polygon`](#dbgeometrypolygon)

### Method Summary

- `public __toString(): string`

- `public getSrid(): int`

- `public getType(): int`

- `public toWkt(): string`

### Properties

- `protected int $srid = 0`

### Methods

<h4 id="dbgeometryabstractgeometry-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

<h4 id="dbgeometryabstractgeometry-getsrid"><code>getSrid()</code></h4>

```php
public function getSrid(): int;
```

<h4 id="dbgeometryabstractgeometry-gettype"><code>getType()</code></h4>

```php
abstract public function getType(): int;
```

<h4 id="dbgeometryabstractgeometry-towkt"><code>toWkt()</code></h4>

```php
abstract public function toWkt(): string;
```


## Db\Geometry\GeometryCollection

Class

- [`Phalcon\Db\Geometry\AbstractGeometry`](#dbgeometryabstractgeometry)
  - **`Phalcon\Db\Geometry\GeometryCollection`**

`Phalcon\Db\Column`

### Method Summary

- `public __construct(array $geometries, int $srid = 0)`

- `public getGeometries(): array`

- `public getType(): int`

- `public toWkt(): string`

### Properties

- `protected list<GeometryInterface> $geometries`

### Methods

<h4 id="dbgeometrygeometrycollection-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    array $geometries,
    int $srid = 0
);
```

<h4 id="dbgeometrygeometrycollection-getgeometries"><code>getGeometries()</code></h4>

```php
public function getGeometries(): array;
```

<h4 id="dbgeometrygeometrycollection-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

<h4 id="dbgeometrygeometrycollection-towkt"><code>toWkt()</code></h4>

```php
public function toWkt(): string;
```


## Db\Geometry\GeometryInterface

Interface

Phalcon\Db\Geometry\GeometryInterface

- [`Phalcon\Contracts\Db\Geometry\Geometry`](/6.0/api/phalcon_contracts/#contractsdbgeometrygeometry)
  - **`Phalcon\Db\Geometry\GeometryInterface`**

`Phalcon\Contracts\Db\Geometry\Geometry`


## Db\Geometry\LineString

Class

- [`Phalcon\Db\Geometry\AbstractGeometry`](#dbgeometryabstractgeometry)
  - **`Phalcon\Db\Geometry\LineString`**

`Phalcon\Db\Column`

### Method Summary

- `public __construct(array $points, int $srid = 0)`

- `public getPoints(): array`

- `public getType(): int`

- `public pointsWkt(): string`

- `public toWkt(): string`

### Properties

- `protected list<Point> $points`

### Methods

<h4 id="dbgeometrylinestring-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    array $points,
    int $srid = 0
);
```

<h4 id="dbgeometrylinestring-getpoints"><code>getPoints()</code></h4>

```php
public function getPoints(): array;
```

<h4 id="dbgeometrylinestring-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

<h4 id="dbgeometrylinestring-pointswkt"><code>pointsWkt()</code></h4>

```php
public function pointsWkt(): string;
```

<h4 id="dbgeometrylinestring-towkt"><code>toWkt()</code></h4>

```php
public function toWkt(): string;
```


## Db\Geometry\MultiLineString

Class

- [`Phalcon\Db\Geometry\AbstractGeometry`](#dbgeometryabstractgeometry)
  - **`Phalcon\Db\Geometry\MultiLineString`**

`Phalcon\Db\Column`

### Method Summary

- `public __construct(array $lineStrings, int $srid = 0)`

- `public getLineStrings(): array`

- `public getType(): int`

- `public toWkt(): string`

### Properties

- `protected list<LineString> $lineStrings`

### Methods

<h4 id="dbgeometrymultilinestring-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    array $lineStrings,
    int $srid = 0
);
```

<h4 id="dbgeometrymultilinestring-getlinestrings"><code>getLineStrings()</code></h4>

```php
public function getLineStrings(): array;
```

<h4 id="dbgeometrymultilinestring-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

<h4 id="dbgeometrymultilinestring-towkt"><code>toWkt()</code></h4>

```php
public function toWkt(): string;
```


## Db\Geometry\MultiPoint

Class

- [`Phalcon\Db\Geometry\AbstractGeometry`](#dbgeometryabstractgeometry)
  - **`Phalcon\Db\Geometry\MultiPoint`**

`Phalcon\Db\Column`

### Method Summary

- `public __construct(array $points, int $srid = 0)`

- `public getPoints(): array`

- `public getType(): int`

- `public toWkt(): string`

### Properties

- `protected list<Point> $points`

### Methods

<h4 id="dbgeometrymultipoint-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    array $points,
    int $srid = 0
);
```

<h4 id="dbgeometrymultipoint-getpoints"><code>getPoints()</code></h4>

```php
public function getPoints(): array;
```

<h4 id="dbgeometrymultipoint-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

<h4 id="dbgeometrymultipoint-towkt"><code>toWkt()</code></h4>

```php
public function toWkt(): string;
```


## Db\Geometry\MultiPolygon

Class

- [`Phalcon\Db\Geometry\AbstractGeometry`](#dbgeometryabstractgeometry)
  - **`Phalcon\Db\Geometry\MultiPolygon`**

`Phalcon\Db\Column`

### Method Summary

- `public __construct(array $polygons, int $srid = 0)`

- `public getPolygons(): array`

- `public getType(): int`

- `public toWkt(): string`

### Properties

- `protected list<Polygon> $polygons`

### Methods

<h4 id="dbgeometrymultipolygon-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    array $polygons,
    int $srid = 0
);
```

<h4 id="dbgeometrymultipolygon-getpolygons"><code>getPolygons()</code></h4>

```php
public function getPolygons(): array;
```

<h4 id="dbgeometrymultipolygon-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

<h4 id="dbgeometrymultipolygon-towkt"><code>toWkt()</code></h4>

```php
public function toWkt(): string;
```


## Db\Geometry\Point

Class

- [`Phalcon\Db\Geometry\AbstractGeometry`](#dbgeometryabstractgeometry)
  - **`Phalcon\Db\Geometry\Point`**

`Phalcon\Db\Column`

### Method Summary

- `public __construct(float $x, float $y, int $srid = 0)`

- `public coordsWkt(): string`

- `public getType(): int`

- `public getX(): float`

- `public getY(): float`

- `public toWkt(): string`

### Properties

- `protected float $x`

- `protected float $y`

### Methods

<h4 id="dbgeometrypoint-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    float $x,
    float $y,
    int $srid = 0
);
```

<h4 id="dbgeometrypoint-coordswkt"><code>coordsWkt()</code></h4>

```php
public function coordsWkt(): string;
```

<h4 id="dbgeometrypoint-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

<h4 id="dbgeometrypoint-getx"><code>getX()</code></h4>

```php
public function getX(): float;
```

<h4 id="dbgeometrypoint-gety"><code>getY()</code></h4>

```php
public function getY(): float;
```

<h4 id="dbgeometrypoint-towkt"><code>toWkt()</code></h4>

```php
public function toWkt(): string;
```


## Db\Geometry\Polygon

Class

- [`Phalcon\Db\Geometry\AbstractGeometry`](#dbgeometryabstractgeometry)
  - **`Phalcon\Db\Geometry\Polygon`**

`Phalcon\Db\Column`

### Method Summary

- `public __construct(array $rings, int $srid = 0)`

- `public getRings(): array`

- `public getType(): int`

- `public ringsWkt(): string`

- `public toWkt(): string`

### Properties

- `protected list<list<Point>> $rings`

### Methods

<h4 id="dbgeometrypolygon-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    array $rings,
    int $srid = 0
);
```

<h4 id="dbgeometrypolygon-getrings"><code>getRings()</code></h4>

```php
public function getRings(): array;
```

<h4 id="dbgeometrypolygon-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

<h4 id="dbgeometrypolygon-ringswkt"><code>ringsWkt()</code></h4>

```php
public function ringsWkt(): string;
```

<h4 id="dbgeometrypolygon-towkt"><code>toWkt()</code></h4>

```php
public function toWkt(): string;
```


## Db\Geometry\WkbParser

Class

Decodes a spatial column value into a geometry value object.

Handles MySQL's internal format (4-byte little-endian SRID prefix followed
by standard OGC WKB) and PostGIS EWKB returned as a hex string. 2D only:
any Z/M ordinates are read past and discarded.

- **`Phalcon\Db\Geometry\WkbParser`**

`Phalcon\Db\Exceptions\InvalidWkb`

### Method Summary

- `public parse(string $raw): GeometryInterface`

- `protected readByte(): int`

- `protected readDouble(bool $little): float`

- `protected readGeometry(int $outerSrid, int $depth = 0): GeometryInterface`

- `protected readPoint(bool $little, bool $hasZ, bool $hasM, int $srid): Point`

- `protected readPointList(bool $little, bool $hasZ, bool $hasM): array`

- `protected readRingList(bool $little, bool $hasZ, bool $hasM): array`

- `protected readUint32(bool $little): int`

- `protected skipExtraOrdinates(bool $little, bool $hasZ, bool $hasM): void`

### Properties

- `protected string $buffer = ""`

- `protected int $length = 0`

- `protected int $position = 0`

### Methods

<h4 id="dbgeometrywkbparser-parse"><code>parse()</code></h4>

```php
public function parse( string $raw ): GeometryInterface;
```

<h4 id="dbgeometrywkbparser-readbyte"><code>readByte()</code></h4>

```php
protected function readByte(): int;
```

<h4 id="dbgeometrywkbparser-readdouble"><code>readDouble()</code></h4>

```php
protected function readDouble( bool $little ): float;
```

<h4 id="dbgeometrywkbparser-readgeometry"><code>readGeometry()</code></h4>

```php
protected function readGeometry(
    int $outerSrid,
    int $depth = 0
): GeometryInterface;
```

<h4 id="dbgeometrywkbparser-readpoint"><code>readPoint()</code></h4>

```php
protected function readPoint(
    bool $little,
    bool $hasZ,
    bool $hasM,
    int $srid
): Point;
```

<h4 id="dbgeometrywkbparser-readpointlist"><code>readPointList()</code></h4>

```php
protected function readPointList(
    bool $little,
    bool $hasZ,
    bool $hasM
): array;
```

<h4 id="dbgeometrywkbparser-readringlist"><code>readRingList()</code></h4>

```php
protected function readRingList(
    bool $little,
    bool $hasZ,
    bool $hasM
): array;
```

<h4 id="dbgeometrywkbparser-readuint32"><code>readUint32()</code></h4>

```php
protected function readUint32( bool $little ): int;
```

<h4 id="dbgeometrywkbparser-skipextraordinates"><code>skipExtraOrdinates()</code></h4>

```php
protected function skipExtraOrdinates(
    bool $little,
    bool $hasZ,
    bool $hasM
): void;
```


## Db\Index

Class

Allows to define indexes to be used on tables. Indexes are a common way
to enhance database performance. An index allows the database server to find
and retrieve specific rows much faster than it could do without an index.

The constructor accepts either the legacy positional form (a plain array
of column names) or a definition-array form (an associative array with a
`columns` key); the latter is the path used by features such as
`invisible` (MySQL 8.0+), `directions`, `where`, and `concurrently`.

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
        'columns'    => ['col1'],
        'type'       => '',
        'invisible'  => true,
        'directions' => ['DESC'],
    ]
);
```

- **`Phalcon\Db\Index`** - implements [`Phalcon\Db\IndexInterface`](#dbindexinterface)

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Exceptions\InvalidIndexColumns` · `Phalcon\Db\Exceptions\InvalidIndexDirections` · `Phalcon\Db\Exceptions\InvalidIndexWhere`

### Method Summary

- `public __construct(string $name, array $columnsOrDefinition, string $type = "")` — Phalcon\Db\Index constructor.

- `public getColumns(): array` — Index columns

- `public getDirections(): array` — Returns the per-column sort directions array (`ASC` / `DESC`).

- `public getName(): string` — Index name

- `public getType(): string` — Index type

- `public getWhere(): string` — Returns the partial-index `WHERE` predicate, or an empty string when

- `public isConcurrent(): bool` — Whether the index is built `CONCURRENTLY` (PostgreSQL only).

- `public isInvisible(): bool` — Whether the index is declared `INVISIBLE` (MySQL 8.0+).

### Properties

- `protected db_index_columns $columns` — Index columns. Entries may be plain strings (column names) or
  `Phalcon\Db\RawValue` instances (functional/expression index entries).

- `protected bool $concurrent = false` — Whether to build the index without taking a strong lock that blocks
  writes - emits `CONCURRENTLY` between `INDEX` and the index name on
  PostgreSQL. MySQL and SQLite ignore the flag.

- `protected db_index_directions $directions = []` — Per-column sort directions (`ASC` / `DESC`). Empty array means
  "emit no per-column direction" - preserves the legacy plain
  `(col1, col2)` rendering.

- `protected bool $invisible = false` — Whether the index is declared `INVISIBLE` (MySQL 8.0+).

- `protected string $name`

- `protected string $type = ""`

- `protected string $where = ""` — Optional partial-index `WHERE` predicate. Supported by PostgreSQL and
  SQLite. Empty string means no predicate.

### Methods

<h4 id="dbindex-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    array $columnsOrDefinition,
    string $type = ""
);
```

Phalcon\Db\Index constructor.

Accepts either the legacy positional form `(name, columns, type)` or
a definition-array form `(name, ["columns" => [...], "type" => "...",
"invisible" => true, ...])`. Detection is based on the presence of a
`columns` key in the second argument; when present, the third
positional `type` argument is ignored in favor of the definition.

<h4 id="dbindex-getcolumns"><code>getColumns()</code></h4>

```php
public function getColumns(): array;
```

Index columns

<h4 id="dbindex-getdirections"><code>getDirections()</code></h4>

```php
public function getDirections(): array;
```

Returns the per-column sort directions array (`ASC` / `DESC`).
Empty array means the index was declared without explicit per-column
directions.

<h4 id="dbindex-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Index name

<h4 id="dbindex-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Index type

<h4 id="dbindex-getwhere"><code>getWhere()</code></h4>

```php
public function getWhere(): string;
```

Returns the partial-index `WHERE` predicate, or an empty string when
the index has none.

<h4 id="dbindex-isconcurrent"><code>isConcurrent()</code></h4>

```php
public function isConcurrent(): bool;
```

Whether the index is built `CONCURRENTLY` (PostgreSQL only).

<h4 id="dbindex-isinvisible"><code>isInvisible()</code></h4>

```php
public function isInvisible(): bool;
```

Whether the index is declared `INVISIBLE` (MySQL 8.0+).


## Db\IndexInterface

Interface

Phalcon\Db\IndexInterface

- [`Phalcon\Contracts\Db\Index`](/6.0/api/phalcon_contracts/#contractsdbindex)
  - **`Phalcon\Db\IndexInterface`**

`Phalcon\Contracts\Db\Index`


## Db\Profiler

Class

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

- **`Phalcon\Db\Profiler`**

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Profiler\Item` · `Phalcon\Db\Traits\ElapsedTimeTrait`

### Method Summary

- `public getLastProfile(): Item|null` — Returns the last profile executed in the profiler

- `public getMaxProfiles(): int` — Returns the configured maximum number of retained profiles

- `public getNumberTotalStatements(): int` — Returns the total number of SQL statements processed

- `public getProfiles(): array` — Returns all the processed profiles

- `public getTotalElapsedNanoseconds(): float` — Returns the total time in nanoseconds spent by the profiles

- `public reset(): static` — Resets the profiler, cleaning up all the profiles

- `public setMaxProfiles(int $maxProfiles): static` — Sets the maximum number of retained profiles. 0 disables the cap

- `public startProfile(string $sqlStatement, array $sqlVariables = [], array $sqlBindTypes = []): static` — Starts the profile of a SQL sentence

- `public stopProfile(): static` — Stops the active profile

### Properties

- `protected Item|null $activeProfile = null` — Active Item

- `protected db_profiler_items $allProfiles = []` — All the Items in the active profile

- `protected int $maxProfiles = 0` — Maximum number of profiles to retain. 0 (default) keeps the
  original unbounded behavior; a positive value drops the oldest
  profile FIFO before a new one is appended.

- `protected float $totalNanoseconds = 0` — Total time spent by all profiles to complete in nanoseconds

### Methods

<h4 id="dbprofiler-getlastprofile"><code>getLastProfile()</code></h4>

```php
public function getLastProfile(): Item|null;
```

Returns the last profile executed in the profiler

<h4 id="dbprofiler-getmaxprofiles"><code>getMaxProfiles()</code></h4>

```php
public function getMaxProfiles(): int;
```

Returns the configured maximum number of retained profiles
(0 = unlimited)

<h4 id="dbprofiler-getnumbertotalstatements"><code>getNumberTotalStatements()</code></h4>

```php
public function getNumberTotalStatements(): int;
```

Returns the total number of SQL statements processed

<h4 id="dbprofiler-getprofiles"><code>getProfiles()</code></h4>

```php
public function getProfiles(): array;
```

Returns all the processed profiles

<h4 id="dbprofiler-gettotalelapsednanoseconds"><code>getTotalElapsedNanoseconds()</code></h4>

```php
public function getTotalElapsedNanoseconds(): float;
```

Returns the total time in nanoseconds spent by the profiles

<h4 id="dbprofiler-reset"><code>reset()</code></h4>

```php
public function reset(): static;
```

Resets the profiler, cleaning up all the profiles

<h4 id="dbprofiler-setmaxprofiles"><code>setMaxProfiles()</code></h4>

```php
public function setMaxProfiles( int $maxProfiles ): static;
```

Sets the maximum number of retained profiles. 0 disables the cap
(the default; preserves the original unbounded behavior).

<h4 id="dbprofiler-startprofile"><code>startProfile()</code></h4>

```php
public function startProfile(
    string $sqlStatement,
    array $sqlVariables = [],
    array $sqlBindTypes = []
): static;
```

Starts the profile of a SQL sentence

<h4 id="dbprofiler-stopprofile"><code>stopProfile()</code></h4>

```php
public function stopProfile(): static;
```

Stops the active profile


## Db\Profiler\Item

Class

This class identifies each profile in a Phalcon\Db\Profiler

- **`Phalcon\Db\Profiler\Item`**

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Traits\ElapsedTimeTrait`

### Method Summary

- `public getFinalTime(): float` — Return the timestamp when the profile ended

- `public getInitialTime(): float` — Return the timestamp when the profile started

- `public getSqlBindTypes(): array` — Return the SQL bind types related to the profile

- `public getSqlStatement(): string` — Return the SQL statement related to the profile

- `public getSqlVariables(): array` — Return the SQL variables related to the profile

- `public getTotalElapsedNanoseconds(): float` — Returns the total time in nanoseconds spent by the profile

- `public setFinalTime(float $finalTime): static` — Return the timestamp when the profile ended

- `public setInitialTime(float $initialTime): static` — Return the timestamp when the profile started

- `public setSqlBindTypes(array $sqlBindTypes): static` — Return the SQL bind types related to the profile

- `public setSqlStatement(string $sqlStatement): static` — Return the SQL statement related to the profile

- `public setSqlVariables(array $sqlVariables): static` — Return the SQL variables related to the profile

### Properties

- `protected float $finalTime` — Timestamp when the profile ended

- `protected float $initialTime` — Timestamp when the profile started

- `protected db_bind_types $sqlBindTypes` — SQL bind types related to the profile

- `protected string $sqlStatement` — SQL statement related to the profile

- `protected db_bind_params $sqlVariables` — SQL variables related to the profile

### Methods

<h4 id="dbprofileritem-getfinaltime"><code>getFinalTime()</code></h4>

```php
public function getFinalTime(): float;
```

Return the timestamp when the profile ended

<h4 id="dbprofileritem-getinitialtime"><code>getInitialTime()</code></h4>

```php
public function getInitialTime(): float;
```

Return the timestamp when the profile started

<h4 id="dbprofileritem-getsqlbindtypes"><code>getSqlBindTypes()</code></h4>

```php
public function getSqlBindTypes(): array;
```

Return the SQL bind types related to the profile

<h4 id="dbprofileritem-getsqlstatement"><code>getSqlStatement()</code></h4>

```php
public function getSqlStatement(): string;
```

Return the SQL statement related to the profile

<h4 id="dbprofileritem-getsqlvariables"><code>getSqlVariables()</code></h4>

```php
public function getSqlVariables(): array;
```

Return the SQL variables related to the profile

<h4 id="dbprofileritem-gettotalelapsednanoseconds"><code>getTotalElapsedNanoseconds()</code></h4>

```php
public function getTotalElapsedNanoseconds(): float;
```

Returns the total time in nanoseconds spent by the profile

<h4 id="dbprofileritem-setfinaltime"><code>setFinalTime()</code></h4>

```php
public function setFinalTime( float $finalTime ): static;
```

Return the timestamp when the profile ended

<h4 id="dbprofileritem-setinitialtime"><code>setInitialTime()</code></h4>

```php
public function setInitialTime( float $initialTime ): static;
```

Return the timestamp when the profile started

<h4 id="dbprofileritem-setsqlbindtypes"><code>setSqlBindTypes()</code></h4>

```php
public function setSqlBindTypes( array $sqlBindTypes ): static;
```

Return the SQL bind types related to the profile

<h4 id="dbprofileritem-setsqlstatement"><code>setSqlStatement()</code></h4>

```php
public function setSqlStatement( string $sqlStatement ): static;
```

Return the SQL statement related to the profile

<h4 id="dbprofileritem-setsqlvariables"><code>setSqlVariables()</code></h4>

```php
public function setSqlVariables( array $sqlVariables ): static;
```

Return the SQL variables related to the profile


## Db\RawValue

Class

This class allows to insert/update raw data without quoting or formatting.

The next example shows how to use the MySQL now() function as a field value.

```php
$subscriber = new Subscribers();

$subscriber->email     = "andres@phalcon.io";
$subscriber->createdAt = new \Phalcon\Db\RawValue("now()");

$subscriber->save();
```

WARNING: a RawValue is emitted into the SQL verbatim, with no quoting or
escaping - including a RawValue passed as a query bind-parameter value, which
is spliced into the compiled SQL string rather than bound. Never wrap
request-derived or otherwise untrusted data in a RawValue; use ordinary bind
parameters for those. RawValue is only for developer-authored SQL fragments
(for example database functions such as now()).

- **`Phalcon\Db\RawValue`**

### Method Summary

- `public __construct(mixed $value = null)` — Phalcon\Db\RawValue constructor

- `public __toString(): string`

- `public getValue(): string`

### Properties

- `protected string $value` — Raw value without quoting or formatting

### Methods

<h4 id="dbrawvalue-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $value = null );
```

Phalcon\Db\RawValue constructor

<h4 id="dbrawvalue-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

<h4 id="dbrawvalue-getvalue"><code>getValue()</code></h4>

```php
public function getValue(): string;
```


## Db\Reference

Class

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

- **`Phalcon\Db\Reference`** - implements [`Phalcon\Db\ReferenceInterface`](#dbreferenceinterface)

`Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Exceptions\ForeignKeyColumnsRequired` · `Phalcon\Db\Exceptions\ReferencedColumnCountMismatch` · `Phalcon\Db\Exceptions\ReferencedColumnsRequired` · `Phalcon\Db\Exceptions\ReferencedTableRequired`

### Method Summary

- `public __construct(string $name, array $definition)` — Phalcon\Db\Reference constructor

- `public getColumns(): array` — Local reference columns

- `public getName(): string` — Constraint name

- `public getOnDelete(): string|null` — ON DELETE

- `public getOnUpdate(): string|null` — ON UPDATE

- `public getReferencedColumns(): array` — Referenced Columns

- `public getReferencedSchema(): string|null` — Referenced Schema

- `public getReferencedTable(): string` — Referenced Table

- `public getSchemaName(): string|null` — Schema name

### Properties

- `protected db_column_names $columns` — Local reference columns

- `protected string $name`

- `protected string|null $onDelete = null` — ON DELETE

- `protected string|null $onUpdate = null` — ON UPDATE

- `protected db_column_names $referencedColumns` — Referenced Columns

- `protected string|null $referencedSchema = null` — Referenced Schema

- `protected string $referencedTable` — Referenced Table

- `protected string|null $schemaName = null` — Schema name

### Methods

<h4 id="dbreference-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    array $definition
);
```

Phalcon\Db\Reference constructor

<h4 id="dbreference-getcolumns"><code>getColumns()</code></h4>

```php
public function getColumns(): array;
```

Local reference columns

<h4 id="dbreference-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Constraint name

<h4 id="dbreference-getondelete"><code>getOnDelete()</code></h4>

```php
public function getOnDelete(): string|null;
```

ON DELETE

<h4 id="dbreference-getonupdate"><code>getOnUpdate()</code></h4>

```php
public function getOnUpdate(): string|null;
```

ON UPDATE

<h4 id="dbreference-getreferencedcolumns"><code>getReferencedColumns()</code></h4>

```php
public function getReferencedColumns(): array;
```

Referenced Columns

<h4 id="dbreference-getreferencedschema"><code>getReferencedSchema()</code></h4>

```php
public function getReferencedSchema(): string|null;
```

Referenced Schema

<h4 id="dbreference-getreferencedtable"><code>getReferencedTable()</code></h4>

```php
public function getReferencedTable(): string;
```

Referenced Table

<h4 id="dbreference-getschemaname"><code>getSchemaName()</code></h4>

```php
public function getSchemaName(): string|null;
```

Schema name


## Db\ReferenceInterface

Interface

Phalcon\Db\ReferenceInterface

- [`Phalcon\Contracts\Db\Reference`](/6.0/api/phalcon_contracts/#contractsdbreference)
  - **`Phalcon\Db\ReferenceInterface`**

`Phalcon\Contracts\Db\Reference`


## Db\ResultInterface

Interface

Phalcon\Db\ResultInterface

- [`Phalcon\Contracts\Db\Result`](/6.0/api/phalcon_contracts/#contractsdbresult)
  - **`Phalcon\Db\ResultInterface`**

`Phalcon\Contracts\Db\Result`


## Db\Result\PdoResult

Class

Encapsulates the resultset internals

```php
$result = $connection->query("SELECT * FROM co_invoices ORDER BY inv_title");

$result->setFetchMode(
    \Phalcon\Db\Enum::FETCH_NUM
);

while ($invoice = $result->fetchArray()) {
    print_r($invoice);
}
```

- **`Phalcon\Db\Result\PdoResult`** - implements [`Phalcon\Db\ResultInterface`](#dbresultinterface)

`PDO` · `PDOStatement` · `Phalcon\Contracts\Db\DbTypes` · `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\ResultInterface`

### Method Summary

- `public __construct(AdapterInterface $connection, PDOStatement $pdoStatement, string $sqlStatement = "", array $bindParams = [], array $bindTypes = [])` — Phalcon\Db\Result\Pdo constructor

- `public dataSeek(int $number): void` — Moves internal resultset cursor to another position letting us to fetch a

- `public execute(): bool` — Allows to execute the statement again. Some database systems don't

- `public fetch(int|null $fetchStyle = null, int $cursorOrientation = Enum::FETCH_ORI_NEXT, int $cursorOffset = 0): mixed` — Fetches an array/object of strings that corresponds to the fetched row,

- `public fetchAll(int $mode = Enum::FETCH_DEFAULT, mixed $fetchArgument = Enum::FETCH_ORI_NEXT, array|null $constructorArgs = null): array` — Returns an array of arrays containing all the records in the result

- `public fetchArray(): mixed` — Returns an array of strings that corresponds to the fetched row, or FALSE

- `public getInternalResult(): PDOStatement` — Gets the internal PDO result object

- `public numRows(): int` — Gets number of rows returned by a resultset

- `public setFetchMode(int $fetchMode, object|string|null $colNoOrClassNameOrObject = null, mixed $ctorargs = null): bool` — Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()

### Properties

- `protected array $bindParams = []`

- `protected array $bindTypes = []`

- `protected AdapterInterface $connection`

- `protected int $fetchMode = Enum::FETCH_DEFAULT` — Active fetch mode

- `protected PDOStatement $pdoStatement`

- `protected mixed $result`

- `protected int|null $rowCount = null`

- `protected string $sqlStatement = ""`

### Methods

<h4 id="dbresultpdoresult-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    AdapterInterface $connection,
    PDOStatement $pdoStatement,
    string $sqlStatement = "",
    array $bindParams = [],
    array $bindTypes = []
);
```

Phalcon\Db\Result\Pdo constructor

<h4 id="dbresultpdoresult-dataseek"><code>dataSeek()</code></h4>

```php
public function dataSeek( int $number ): void;
```

Moves internal resultset cursor to another position letting us to fetch a
certain row

```php
$result = $connection->query(
    "SELECT * FROM co_invoices ORDER BY inv_title"
);

// Move to third row on result
$result->dataSeek(2);

// Fetch third row
$row = $result->fetch();
```

<h4 id="dbresultpdoresult-execute"><code>execute()</code></h4>

```php
public function execute(): bool;
```

Allows to execute the statement again. Some database systems don't
support scrollable cursors. So, as cursors are forward only, we need to
execute the cursor again to fetch rows from the beginning

<h4 id="dbresultpdoresult-fetch"><code>fetch()</code></h4>

```php
public function fetch(
    int|null $fetchStyle = null,
    int $cursorOrientation = Enum::FETCH_ORI_NEXT,
    int $cursorOffset = 0
): mixed;
```

Fetches an array/object of strings that corresponds to the fetched row,
or FALSE if there are no more rows. This method is affected by the active
fetch flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

```php
$result = $connection->query("SELECT * FROM co_invoices ORDER BY inv_title");

$result->setFetchMode(
    \Phalcon\Enum::FETCH_OBJ
);

while ($invoice = $result->fetch()) {
    echo $invoice->inv_title;
}
```

<h4 id="dbresultpdoresult-fetchall"><code>fetchAll()</code></h4>

```php
public function fetchAll(
    int $mode = Enum::FETCH_DEFAULT,
    mixed $fetchArgument = Enum::FETCH_ORI_NEXT,
    array|null $constructorArgs = null
): array;
```

Returns an array of arrays containing all the records in the result
This method is affected by the active fetch flag set using
`Phalcon\Db\Result\Pdo::setFetchMode()`

```php
$result = $connection->query(
    "SELECT * FROM co_invoices ORDER BY inv_title"
);

$invoices = $result->fetchAll();
```

<h4 id="dbresultpdoresult-fetcharray"><code>fetchArray()</code></h4>

```php
public function fetchArray(): mixed;
```

Returns an array of strings that corresponds to the fetched row, or FALSE
if there are no more rows. This method is affected by the active fetch
flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

```php
$result = $connection->query("SELECT * FROM co_invoices ORDER BY inv_title");

$result->setFetchMode(
    \Phalcon\Enum::FETCH_NUM
);

while ($invoice = result->fetchArray()) {
    print_r($invoice);
}
```

<h4 id="dbresultpdoresult-getinternalresult"><code>getInternalResult()</code></h4>

```php
public function getInternalResult(): PDOStatement;
```

Gets the internal PDO result object

<h4 id="dbresultpdoresult-numrows"><code>numRows()</code></h4>

```php
public function numRows(): int;
```

Gets number of rows returned by a resultset

```php
$result = $connection->query(
    "SELECT * FROM co_invoices ORDER BY inv_title"
);

echo "There are ", $result->numRows(), " rows in the resultset";
```

<h4 id="dbresultpdoresult-setfetchmode"><code>setFetchMode()</code></h4>

```php
public function setFetchMode(
    int $fetchMode,
    object|string|null $colNoOrClassNameOrObject = null,
    mixed $ctorargs = null
): bool;
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


## Db\Traits\ElapsedTimeTrait

Trait

Derives elapsed milliseconds and seconds from the nanosecond total that the
using class exposes through getTotalElapsedNanoseconds().

- **`Phalcon\Db\Traits\ElapsedTimeTrait`**

[`Phalcon\Db\Profiler`](#dbprofiler) · [`Phalcon\Db\Profiler\Item`](#dbprofileritem)

### Method Summary

- `public getTotalElapsedMilliseconds(): float` — Returns the total time in milliseconds spent by the profiles

- `public getTotalElapsedNanoseconds(): float` — Returns the total time in nanoseconds spent by the profiles. Implemented

- `public getTotalElapsedSeconds(): float` — Returns the total time in seconds spent by the profiles

### Methods

<h4 id="dbtraitselapsedtimetrait-gettotalelapsedmilliseconds"><code>getTotalElapsedMilliseconds()</code></h4>

```php
public function getTotalElapsedMilliseconds(): float;
```

Returns the total time in milliseconds spent by the profiles

<h4 id="dbtraitselapsedtimetrait-gettotalelapsednanoseconds"><code>getTotalElapsedNanoseconds()</code></h4>

```php
abstract public function getTotalElapsedNanoseconds(): float;
```

Returns the total time in nanoseconds spent by the profiles. Implemented
by the using class.

<h4 id="dbtraitselapsedtimetrait-gettotalelapsedseconds"><code>getTotalElapsedSeconds()</code></h4>

```php
public function getTotalElapsedSeconds(): float;
```

Returns the total time in seconds spent by the profiles

Source: https://docs.phalcon.io/6.0/api/phalcon_db/index.mdx
