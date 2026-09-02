---
title: "Phalcon Db"
version: "5.20"
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

- **`Phalcon\Db\Adapter\AbstractAdapter`** - implements [`Phalcon\Db\Adapter\AdapterInterface`](#dbadapteradapterinterface), [`Phalcon\Events\EventsAwareInterface`](/5.20/api/phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Db\Adapter\Pdo\AbstractPdo`](#dbadapterpdoabstractpdo)

`Phalcon\Db\CheckInterface` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\CannotInsertWithoutData` · `Phalcon\Db\Exceptions\IncompleteBindTypes` · `Phalcon\Db\Exceptions\InvalidDialectClass` · `Phalcon\Db\Exceptions\InvalidWhereConditions` · `Phalcon\Db\Exceptions\NestedTransactionChangeBlocked` · `Phalcon\Db\Exceptions\SavepointsNotSupported` · `Phalcon\Db\Exceptions\TableMustHaveColumn` · `Phalcon\Db\Exceptions\UpdateFieldCountMismatch` · `Phalcon\Db\Index` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#dbadapterabstractadapter-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"descriptor","default":null}]}>
Phalcon\Db\Adapter constructor
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-addcheck" visibility="public" name="addCheck" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"CheckInterface","name":"check","default":null}]}>
Adds a CHECK constraint to a table. MySQL 8.0.16+ and PostgreSQL
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-addcolumn" visibility="public" name="addColumn" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null}]}>
Adds a column to a table
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-addforeignkey" visibility="public" name="addForeignKey" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ReferenceInterface","name":"reference","default":null}]}>
Adds a foreign key to a table
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-addindex" visibility="public" name="addIndex" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Adds an index to a table
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-addprimarykey" visibility="public" name="addPrimaryKey" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Adds a primary key to a table
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-creatematerializedview" visibility="public" name="createMaterializedView" returnType="bool" params={[{"type":"string","name":"viewName","default":null},{"type":"array","name":"definition","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Creates a materialized view (PostgreSQL only - MySQL and SQLite
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-createsavepoint" visibility="public" name="createSavepoint" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Creates a new savepoint
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-createtable" visibility="public" name="createTable" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"array","name":"definition","default":null}]}>
Creates a table
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-createview" visibility="public" name="createView" returnType="bool" params={[{"type":"string","name":"viewName","default":null},{"type":"array","name":"definition","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Creates a view
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-delete" visibility="public" name="delete" returnType="bool" params={[{"type":"mixed","name":"table","default":null},{"type":"string|null","name":"whereCondition","default":"null"},{"type":"array","name":"placeholders","default":"[]"},{"type":"array","name":"dataTypes","default":"[]"}]}>
Deletes data from a table using custom RBDM SQL syntax
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-describeindexes" visibility="public" name="describeIndexes" returnType="IndexInterface[]" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Lists table indexes
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-describereferences" visibility="public" name="describeReferences" returnType="ReferenceInterface[]" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Lists table references
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-dropcheck" visibility="public" name="dropCheck" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"checkName","default":null}]}>
Drops a CHECK constraint from a table. SQLite throws.
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-dropcolumn" visibility="public" name="dropColumn" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"columnName","default":null}]}>
Drops a column from a table
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-dropforeignkey" visibility="public" name="dropForeignKey" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"referenceName","default":null}]}>
Drops a foreign key from a table
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-dropindex" visibility="public" name="dropIndex" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"mixed","name":"indexName","default":null}]}>
Drop an index from a table
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-dropmaterializedview" visibility="public" name="dropMaterializedView" returnType="bool" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Drops a materialized view (PostgreSQL only).
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-dropprimarykey" visibility="public" name="dropPrimaryKey" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null}]}>
Drops a table's primary key
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-droptable" visibility="public" name="dropTable" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Drops a table from a schema/database
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-dropview" visibility="public" name="dropView" returnType="bool" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Drops a view
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-escapeidentifier" visibility="public" name="escapeIdentifier" returnType="string" params={[{"type":"mixed","name":"identifier","default":null}]}>
Escapes a column/table/schema name
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-fetchall" visibility="public" name="fetchAll" returnType="array" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"int","name":"fetchMode","default":"Enum::FETCH_ASSOC"},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Dumps the complete result of a query into an array
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-fetchcolumn" visibility="public" name="fetchColumn" returnType="string|bool" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array","name":"placeholders","default":"[]"},{"type":"mixed","name":"column","default":"0"}]}>
Returns the n'th field of first row in a SQL query result
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-fetchone" visibility="public" name="fetchOne" returnType="array" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"mixed","name":"fetchMode","default":"Enum::FETCH_ASSOC"},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Returns the first row in a SQL query result
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-forupdate" visibility="public" name="forUpdate" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
Returns a SQL modified with a FOR UPDATE clause. The optional
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getcolumndefinition" visibility="public" name="getColumnDefinition" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
Returns the SQL column definition from a column
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getcolumnlist" visibility="public" name="getColumnList" returnType="string" params={[{"type":"mixed","name":"columnList","default":null}]}>
Gets a list of columns
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getconnectionid" visibility="public" name="getConnectionId" returnType="int" params={[]}>
Gets the active connection unique identifier
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getdefaultidvalue" visibility="public" name="getDefaultIdValue" returnType="RawValue" params={[]}>
Returns the default identity value to be inserted in an identity column
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getdefaultvalue" visibility="public" name="getDefaultValue" returnType="RawValue" params={[]}>
Returns the default value to make the RBDM use the default value declared
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getdescriptor" visibility="public" name="getDescriptor" returnType="array" params={[]}>
Return descriptor used to connect to the active database
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getdialect" visibility="public" name="getDialect" returnType="DialectInterface" params={[]}>
Returns internal dialect instance
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getdialecttype" visibility="public" name="getDialectType" returnType="string" params={[]}>
Name of the dialect used
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-geteventsmanager" visibility="public" name="getEventsManager" returnType="ManagerInterface|null" params={[]}>
Returns the internal event manager
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getnestedtransactionsavepointname" visibility="public" name="getNestedTransactionSavepointName" returnType="string" params={[]}>
Returns the savepoint name to use for nested transactions
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getrealsqlstatement" visibility="public" name="getRealSQLStatement" returnType="string" params={[]}>
Active SQL statement in the object without replace bound parameters
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getsqlbindtypes" visibility="public" name="getSQLBindTypes" returnType="array" params={[]}>
Active SQL statement in the object
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getsqlstatement" visibility="public" name="getSQLStatement" returnType="string" params={[]}>
Active SQL statement in the object
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-getsqlvariables" visibility="public" name="getSQLVariables" returnType="array" params={[]}>
Active SQL variables in the object
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-gettype" visibility="public" name="getType" returnType="string" params={[]}>
Type of database system the adapter is used for
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-insert" visibility="public" name="insert" returnType="bool" params={[{"type":"string","name":"table","default":null},{"type":"array","name":"values","default":null},{"type":"mixed","name":"fields","default":"null"},{"type":"mixed","name":"dataTypes","default":"null"}]}>
Inserts data into a table using custom RDBMS SQL syntax
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-insertasdict" visibility="public" name="insertAsDict" returnType="bool" params={[{"type":"string","name":"table","default":null},{"type":"mixed","name":"data","default":null},{"type":"mixed","name":"dataTypes","default":"null"}]}>
Inserts data into a table using custom RBDM SQL syntax
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-isnestedtransactionswithsavepoints" visibility="public" name="isNestedTransactionsWithSavepoints" returnType="bool" params={[]}>
Returns if nested transactions should use savepoints
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-limit" visibility="public" name="limit" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"mixed","name":"number","default":null}]}>
Appends a LIMIT clause to $sqlQuery argument
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-listtables" visibility="public" name="listTables" returnType="array" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
List all tables on a database
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-listviews" visibility="public" name="listViews" returnType="array" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
List all views on a database
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-modifycolumn" visibility="public" name="modifyColumn" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null},{"type":"ColumnInterface|null","name":"currentColumn","default":"null"}]}>
Modifies a table column based on a definition
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-onconflictupdate" visibility="public" name="onConflictUpdate" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array","name":"conflictColumns","default":null},{"type":"array","name":"updateColumns","default":null}]}>
Appends an `ON CONFLICT (...) DO UPDATE SET col = excluded.col`
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-refreshmaterializedview" visibility="public" name="refreshMaterializedView" returnType="bool" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"concurrent","default":"false"}]}>
Refreshes a materialized view (PostgreSQL only). Pass
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-releasesavepoint" visibility="public" name="releaseSavepoint" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Releases given savepoint
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-returning" visibility="public" name="returning" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array","name":"columns","default":null}]}>
Appends a RETURNING clause to an INSERT/UPDATE/DELETE SQL statement
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-rollbacksavepoint" visibility="public" name="rollbackSavepoint" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Rollbacks given savepoint
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-setdialect" visibility="public" name="setDialect" returnType="" params={[{"type":"DialectInterface","name":"dialect","default":null}]}>
Sets the dialect used to produce the SQL
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-seteventsmanager" visibility="public" name="setEventsManager" returnType="void" params={[{"type":"ManagerInterface","name":"eventsManager","default":null}]}>
Sets the event manager
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-setnestedtransactionswithsavepoints" visibility="public" name="setNestedTransactionsWithSavepoints" returnType="AdapterInterface" params={[{"type":"bool","name":"nestedTransactionsWithSavepoints","default":null}]}>
Set if nested transactions should use savepoints
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-setup" visibility="public" name="setup" returnType="void" params={[{"type":"array","name":"options","default":null}]}>
Enables/disables options in the Database component.
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-sharedlock" visibility="public" name="sharedLock" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
Returns a SQL modified with a shared-lock clause. The optional
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-supportsequences" visibility="public" name="supportSequences" returnType="bool" params={[]}>
Check whether the database system requires a sequence to produce
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-supportsdefaultvalue" visibility="public" name="supportsDefaultValue" returnType="bool" params={[]}>
Check whether the database system support the DEFAULT
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-tableexists" visibility="public" name="tableExists" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.table
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-tableoptions" visibility="public" name="tableOptions" returnType="array" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Gets creation options from a table
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-update" visibility="public" name="update" returnType="bool" params={[{"type":"string","name":"table","default":null},{"type":"mixed","name":"fields","default":null},{"type":"mixed","name":"values","default":null},{"type":"mixed","name":"whereCondition","default":"null"},{"type":"mixed","name":"dataTypes","default":"null"}]}>
Updates data on a table using custom RBDM SQL syntax
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-updateasdict" visibility="public" name="updateAsDict" returnType="bool" params={[{"type":"string","name":"table","default":null},{"type":"mixed","name":"data","default":null},{"type":"mixed","name":"whereCondition","default":"null"},{"type":"mixed","name":"dataTypes","default":"null"}]}>
Updates data on a table using custom RBDM SQL syntax
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-useexplicitidvalue" visibility="public" name="useExplicitIdValue" returnType="bool" params={[]}>
Check whether the database system requires an explicit value for identity
</ApiItem>
<ApiItem href="#dbadapterabstractadapter-viewexists" visibility="public" name="viewExists" returnType="bool" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.view
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="connectionConsecutive" type="int" default="0">
Connection ID
</ApiItem>
<ApiItem kind="property" visibility="protected" name="connectionId" type="int" default="">
Active connection ID
</ApiItem>
<ApiItem kind="property" visibility="protected" name="descriptor" type="array" default="[]">
Descriptor used to connect to a database
</ApiItem>
<ApiItem kind="property" visibility="protected" name="dialect" type="DialectInterface" default="">
Dialect instance
</ApiItem>
<ApiItem kind="property" visibility="protected" name="dialectType" type="string" default="">
Name of the dialect used
</ApiItem>
<ApiItem kind="property" visibility="protected" name="eventsManager" type="ManagerInterface|null" default="null">
Event Manager
</ApiItem>
<ApiItem kind="property" visibility="protected" name="realSqlStatement" type="string" default="">
The real SQL statement - what was executed
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlBindTypes" type="array" default="[]">
Active SQL Bind Types
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlStatement" type="string" default="">
Active SQL Statement
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlVariables" type="array" default="[]">
Active SQL bound parameter variables
</ApiItem>
<ApiItem kind="property" visibility="protected" name="transactionLevel" type="int" default="0">
Current transaction level
</ApiItem>
<ApiItem kind="property" visibility="protected" name="transactionsWithSavepoints" type="bool" default="false">
Whether the database supports transactions with save points
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="string" default="">
Type of database system the adapter is used for
</ApiItem>

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
): IndexInterface[];
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
): ReferenceInterface[];
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
): string|bool;
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
): array;
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

Returns a SQL modified with a FOR UPDATE clause. The optional
`modifier` is passed straight to the dialect (use `Dialect::LOCK_NOWAIT`
/ `Dialect::LOCK_SKIP_LOCKED` / `Dialect::LOCK_NONE`).

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

<h4 id="dbadapterabstractadapter-geteventsmanager"><code>getEventsManager()</code></h4>

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

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
public function setDialect( DialectInterface $dialect );
```

Sets the dialect used to produce the SQL

<h4 id="dbadapterabstractadapter-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the event manager

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
    "bindTypes"  => [PDO::PARAM_INT], // use only if you use $dataTypes param
],
[
    PDO::PARAM_STR
]
);

```

Warning! If $whereCondition is string it not escaped.

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

## Db\Adapter\AdapterInterface

Interface

Phalcon\Db\Adapter\AdapterInterface

- [`Phalcon\Contracts\Db\Adapter\Adapter`](/5.20/api/phalcon_contracts/#contractsdbadapteradapter)
- **`Phalcon\Db\Adapter\AdapterInterface`**

`Phalcon\Contracts\Db\Adapter\Adapter`

## Db\Adapter\PdoFactory

Class

- [`Phalcon\Factory\AbstractConfigFactory`](/5.20/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.20/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Db\Adapter\PdoFactory`**

`Phalcon\Db\Adapter\Pdo\Mysql` · `Phalcon\Db\Adapter\Pdo\Postgresql` · `Phalcon\Db\Adapter\Pdo\Sqlite` · `Phalcon\Db\Exception` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

<ApiItem href="#dbadapterpdofactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"services","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#dbadapterpdofactory-load" visibility="public" name="load" returnType="AdapterInterface" params={[{"type":"mixed","name":"config","default":null}]}>
Factory to create an instance from a Config object
</ApiItem>
<ApiItem href="#dbadapterpdofactory-newinstance" visibility="public" name="newInstance" returnType="AdapterInterface" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"options","default":"[]"}]}>
Create a new instance of the adapter
</ApiItem>
<ApiItem href="#dbadapterpdofactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#dbadapterpdofactory-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the available adapters
</ApiItem>

### Methods

<h4 id="dbadapterpdofactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

Constructor

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

`Phalcon\Db\Adapter\AbstractAdapter` · `Phalcon\Db\Column` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\CannotPrepareStatement` · `Phalcon\Db\Exceptions\InvalidBindParameter` · `Phalcon\Db\Exceptions\MatchedParameterNotFound` · `Phalcon\Db\Exceptions\NoActiveTransaction` · `Phalcon\Db\ResultInterface` · `Phalcon\Db\Result\PdoResult` · `Phalcon\Events\ManagerInterface` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#dbadapterpdoabstractpdo-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"descriptor","default":null}]}>
Constructor for Phalcon\Db\Adapter\Pdo
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-affectedrows" visibility="public" name="affectedRows" returnType="int" params={[]}>
Returns the number of affected rows by the latest INSERT/UPDATE/DELETE
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-begin" visibility="public" name="begin" returnType="bool" params={[{"type":"bool","name":"nesting","default":"true"}]}>
Starts a transaction in the connection
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-close" visibility="public" name="close" returnType="void" params={[]}>
Closes the active connection returning success. Phalcon automatically
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-commit" visibility="public" name="commit" returnType="bool" params={[{"type":"bool","name":"nesting","default":"true"}]}>
Commits the active transaction in the connection
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-connect" visibility="public" name="connect" returnType="void" params={[{"type":"array","name":"descriptor","default":"[]"}]}>
This method is automatically called in \Phalcon\Db\Adapter\Pdo
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-convertboundparams" visibility="public" name="convertBoundParams" returnType="array" params={[{"type":"string","name":"sql","default":null},{"type":"array","name":"params","default":"[]"}]}>
Converts bound parameters such as :name: or ?1 into PDO bind params ?
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-ensureconnection" visibility="public" name="ensureConnection" returnType="void" params={[]}>
Ensures the connection is alive, reconnecting in place if it is not.
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-escapestring" visibility="public" name="escapeString" returnType="string" params={[{"type":"string","name":"str","default":null}]}>
Escapes a value to avoid SQL injections according to the active charset
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-execute" visibility="public" name="execute" returnType="bool" params={[{"type":"string","name":"sqlStatement","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Sends SQL statements to the database server returning the success state.
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-executeprepared" visibility="public" name="executePrepared" returnType="\PDOStatement" params={[{"type":"\\PDOStatement","name":"statement","default":null},{"type":"array","name":"placeholders","default":null},{"type":"array","name":"dataTypes","default":"[]"}]}>
Executes a prepared statement binding. This function uses integer indexes
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-getautoreconnect" visibility="public" name="getAutoReconnect" returnType="bool" params={[]}>
Returns whether transparent auto-reconnect is enabled.
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-geterrorinfo" visibility="public" name="getErrorInfo" returnType="array" params={[]}>
Return the error info, if any
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-getinternalhandler" visibility="public" name="getInternalHandler" returnType="mixed" params={[]}>
Return internal PDO handler
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-gettransactionlevel" visibility="public" name="getTransactionLevel" returnType="int" params={[]}>
Returns the current transaction nesting level
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-isundertransaction" visibility="public" name="isUnderTransaction" returnType="bool" params={[]}>
Checks whether the connection is under a transaction
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-lastinsertid" visibility="public" name="lastInsertId" returnType="string|bool" params={[{"type":"string|null","name":"name","default":"null"}]}>
Returns the insert id for the auto_increment/serial column inserted in
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-ping" visibility="public" name="ping" returnType="bool" params={[]}>
Checks whether the underlying connection is still alive by issuing a
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-prepare" visibility="public" name="prepare" returnType="\PDOStatement" params={[{"type":"string","name":"sqlStatement","default":null}]}>
Returns a PDO prepared statement to be executed with 'executePrepared'
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-query" visibility="public" name="query" returnType="ResultInterface|bool" params={[{"type":"string","name":"sqlStatement","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Sends SQL statements to the database server returning the success state.
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-rollback" visibility="public" name="rollback" returnType="bool" params={[{"type":"bool","name":"nesting","default":"true"}]}>
Rollbacks the active transaction in the connection
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-setautoreconnect" visibility="public" name="setAutoReconnect" returnType="static" params={[{"type":"bool","name":"autoReconnect","default":null}]}>
Enables or disables transparent auto-reconnect on a lost connection.
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-getdsndefaults" visibility="protected" name="getDsnDefaults" returnType="array" params={[]}>
Returns PDO adapter DSN defaults as a key-value map.
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-isconnectionerror" visibility="protected" name="isConnectionError" returnType="bool" params={[{"type":"\\Throwable","name":"exception","default":null}]}>
Recognizes whether an exception represents a lost ("gone away")
</ApiItem>
<ApiItem href="#dbadapterpdoabstractpdo-preparerealsql" visibility="protected" name="prepareRealSql" returnType="void" params={[{"type":"string","name":"statement","default":null},{"type":"array","name":"parameters","default":null}]}>
Constructs the SQL statement (with parameters)
</ApiItem>

### Constants

<ApiItem kind="constant" name="BIND_PATTERN" type="string" default="&quot;/\\?([0-9]+)|:([a-zA-Z0-9_]+):/&quot;">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="affectedRows" type="int" default="0">
Last affected rows
</ApiItem>
<ApiItem kind="property" visibility="protected" name="autoReconnect" type="bool" default="false">
Whether to transparently reconnect and retry once when a query fails
because the connection was lost. Opt-in; off by default.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="pdo" type="\PDO" default="">
PDO Handler
</ApiItem>

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
array $params = []
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
\PDOStatement $statement,
array $placeholders,
array $dataTypes = []
): \PDOStatement;
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
public function lastInsertId( string|null $name = null ): string|bool;
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
public function prepare( string $sqlStatement ): \PDOStatement;
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
): ResultInterface|bool;
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
protected function isConnectionError( \Throwable $exception ): bool;
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

`Phalcon\Db\Adapter\Pdo\AbstractPdo` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingForeignKeyChecks` · `Phalcon\Db\Index` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface`

### Method Summary

<ApiItem href="#dbadapterpdomysql-addforeignkey" visibility="public" name="addForeignKey" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ReferenceInterface","name":"reference","default":null}]}>
Adds a foreign key to a table
</ApiItem>
<ApiItem href="#dbadapterpdomysql-describecolumns" visibility="public" name="describeColumns" returnType="ColumnInterface[]" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Returns an array of Phalcon\Db\Column objects describing a table
</ApiItem>
<ApiItem href="#dbadapterpdomysql-describeindexes" visibility="public" name="describeIndexes" returnType="IndexInterface[]" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Lists table indexes
</ApiItem>
<ApiItem href="#dbadapterpdomysql-describereferences" visibility="public" name="describeReferences" returnType="ReferenceInterface[]" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Lists table references
</ApiItem>
<ApiItem href="#dbadapterpdomysql-getdsndefaults" visibility="protected" name="getDsnDefaults" returnType="array" params={[]}>
Returns PDO adapter DSN defaults as a key-value map.
</ApiItem>
<ApiItem href="#dbadapterpdomysql-isconnectionerror" visibility="protected" name="isConnectionError" returnType="bool" params={[{"type":"\\Throwable","name":"exception","default":null}]}>
Recognizes a MySQL "server has gone away" / "Lost connection" failure
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="dialectType" type="string" default="&quot;mysql&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;mysql&quot;">
</ApiItem>

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

<h4 id="dbadapterpdomysql-describecolumns"><code>describeColumns()</code></h4>

```php
public function describeColumns(
string $table,
string|null $schema = null
): ColumnInterface[];
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
): IndexInterface[];
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
): ReferenceInterface[];
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
protected function isConnectionError( \Throwable $exception ): bool;
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

`Phalcon\Db\Adapter\Pdo\AbstractPdo` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\TableMustHaveColumn` · `Phalcon\Db\RawValue` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface` · `Throwable`

### Method Summary

<ApiItem href="#dbadapterpdopostgresql-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"descriptor","default":null}]}>
Constructor for Phalcon\Db\Adapter\Pdo\Postgresql
</ApiItem>
<ApiItem href="#dbadapterpdopostgresql-connect" visibility="public" name="connect" returnType="void" params={[{"type":"array","name":"descriptor","default":"[]"}]}>
This method is automatically called in Phalcon\Db\Adapter\Pdo
</ApiItem>
<ApiItem href="#dbadapterpdopostgresql-createtable" visibility="public" name="createTable" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"array","name":"definition","default":null}]}>
Creates a table
</ApiItem>
<ApiItem href="#dbadapterpdopostgresql-describecolumns" visibility="public" name="describeColumns" returnType="ColumnInterface[]" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Returns an array of Phalcon\Db\Column objects describing a table
</ApiItem>
<ApiItem href="#dbadapterpdopostgresql-describereferences" visibility="public" name="describeReferences" returnType="ReferenceInterface[]" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Lists table references
</ApiItem>
<ApiItem href="#dbadapterpdopostgresql-getdefaultidvalue" visibility="public" name="getDefaultIdValue" returnType="RawValue" params={[]}>
Returns the default identity value to be inserted in an identity column
</ApiItem>
<ApiItem href="#dbadapterpdopostgresql-modifycolumn" visibility="public" name="modifyColumn" returnType="bool" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null},{"type":"ColumnInterface|null","name":"currentColumn","default":"null"}]}>
Modifies a table column based on a definition
</ApiItem>
<ApiItem href="#dbadapterpdopostgresql-supportsequences" visibility="public" name="supportSequences" returnType="bool" params={[]}>
Check whether the database system requires a sequence to produce
</ApiItem>
<ApiItem href="#dbadapterpdopostgresql-useexplicitidvalue" visibility="public" name="useExplicitIdValue" returnType="bool" params={[]}>
Check whether the database system requires an explicit value for identity
</ApiItem>
<ApiItem href="#dbadapterpdopostgresql-getdsndefaults" visibility="protected" name="getDsnDefaults" returnType="array" params={[]}>
Returns PDO adapter DSN defaults as a key-value map.
</ApiItem>
<ApiItem href="#dbadapterpdopostgresql-isconnectionerror" visibility="protected" name="isConnectionError" returnType="bool" params={[{"type":"\\Throwable","name":"exception","default":null}]}>
Recognizes a PostgreSQL connection-loss failure by SQLSTATE
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="dialectType" type="string" default="&quot;postgresql&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;pgsql&quot;">
</ApiItem>

### Methods

<h4 id="dbadapterpdopostgresql-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $descriptor );
```

Constructor for Phalcon\Db\Adapter\Pdo\Postgresql

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
): ColumnInterface[];
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
): ReferenceInterface[];
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

Modifies a table column based on a definition

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
protected function isConnectionError( \Throwable $exception ): bool;
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

`Phalcon\Db\Adapter\Pdo\AbstractPdo` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingSqliteDatabase` · `Phalcon\Db\Index` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface`

### Method Summary

<ApiItem href="#dbadapterpdosqlite-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"descriptor","default":null}]}>
Constructor for Phalcon\Db\Adapter\Pdo\Sqlite
</ApiItem>
<ApiItem href="#dbadapterpdosqlite-connect" visibility="public" name="connect" returnType="void" params={[{"type":"array","name":"descriptor","default":"[]"}]}>
This method is automatically called in Phalcon\Db\Adapter\Pdo
</ApiItem>
<ApiItem href="#dbadapterpdosqlite-describecolumns" visibility="public" name="describeColumns" returnType="ColumnInterface[]" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Returns an array of Phalcon\Db\Column objects describing a table
</ApiItem>
<ApiItem href="#dbadapterpdosqlite-describeindexes" visibility="public" name="describeIndexes" returnType="IndexInterface[]" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Lists table indexes
</ApiItem>
<ApiItem href="#dbadapterpdosqlite-describereferences" visibility="public" name="describeReferences" returnType="ReferenceInterface[]" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Lists table references
</ApiItem>
<ApiItem href="#dbadapterpdosqlite-getdefaultvalue" visibility="public" name="getDefaultValue" returnType="RawValue" params={[]}>
Returns the default value to make the RBDM use the default value declared
</ApiItem>
<ApiItem href="#dbadapterpdosqlite-supportsdefaultvalue" visibility="public" name="supportsDefaultValue" returnType="bool" params={[]}>
SQLite does not support the DEFAULT keyword
</ApiItem>
<ApiItem href="#dbadapterpdosqlite-useexplicitidvalue" visibility="public" name="useExplicitIdValue" returnType="bool" params={[]}>
Check whether the database system requires an explicit value for identity
</ApiItem>
<ApiItem href="#dbadapterpdosqlite-getdsndefaults" visibility="protected" name="getDsnDefaults" returnType="array" params={[]}>
Returns PDO adapter DSN defaults as a key-value map.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="dialectType" type="string" default="&quot;sqlite&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;sqlite&quot;">
</ApiItem>

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
): ColumnInterface[];
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
): IndexInterface[];
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
): ReferenceInterface[];
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

// Or added to an existing table (MySQL 8.0.16+ and PostgreSQL).
// SQLite cannot add CHECK constraints to existing tables.
$connection->addCheck("products", null, $positivePrice);
```

- **`Phalcon\Db\Check`** - implements [`Phalcon\Db\CheckInterface`](#dbcheckinterface)

`Phalcon\Db\Exceptions\CheckExpressionRequired` · `Phalcon\Db\Exceptions\InvalidCheckExpression`

### Method Summary

<ApiItem href="#dbcheck-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"definition","default":null}]}>
Phalcon\Db\Check constructor
</ApiItem>
<ApiItem href="#dbcheck-getexpression" visibility="public" name="getExpression" returnType="string" params={[]}>
Returns the CHECK expression
</ApiItem>
<ApiItem href="#dbcheck-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the constraint name (may be an empty string for unnamed)
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="expression" type="string" default="">
The boolean SQL predicate this constraint enforces.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
The CHECK constraint name. An empty string indicates an unnamed
constraint - the dialect will emit the clause without a `CONSTRAINT`
prefix in that case.
</ApiItem>

### Methods

<h4 id="dbcheck-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
array $definition
);
```

Phalcon\Db\Check constructor

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

- [`Phalcon\Contracts\Db\Check`](/5.20/api/phalcon_contracts/#contractsdbcheck)
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

`Phalcon\Db\Exceptions\ColumnTypeRejectsAutoIncrement` · `Phalcon\Db\Exceptions\ColumnTypeRejectsScale` · `Phalcon\Db\Exceptions\ColumnTypeRequired` · `Phalcon\Db\Exceptions\GeneratedAutoIncrementConflict` · `Phalcon\Db\Exceptions\GeneratedDefaultConflict` · `Phalcon\Db\Exceptions\InvalidGenerationExpression`

### Method Summary

<ApiItem href="#dbcolumn-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"definition","default":null}]}>
Phalcon\Db\Column constructor
</ApiItem>
<ApiItem href="#dbcolumn-getafterposition" visibility="public" name="getAfterPosition" returnType="string|null" params={[]}>
Check whether field absolute to position in table
</ApiItem>
<ApiItem href="#dbcolumn-getbindtype" visibility="public" name="getBindType" returnType="int" params={[]}>
Returns the type of bind handling
</ApiItem>
<ApiItem href="#dbcolumn-getcomment" visibility="public" name="getComment" returnType="string|null" params={[]}>
Column's comment
</ApiItem>
<ApiItem href="#dbcolumn-getdefault" visibility="public" name="getDefault" returnType="mixed" params={[]}>
Default column value
</ApiItem>
<ApiItem href="#dbcolumn-getgenerationexpression" visibility="public" name="getGenerationExpression" returnType="string|null" params={[]}>
Returns the generation expression for a generated/computed column.
</ApiItem>
<ApiItem href="#dbcolumn-getname" visibility="public" name="getName" returnType="string" params={[]}>
Column's name
</ApiItem>
<ApiItem href="#dbcolumn-getscale" visibility="public" name="getScale" returnType="int" params={[]}>
Integer column number scale
</ApiItem>
<ApiItem href="#dbcolumn-getsize" visibility="public" name="getSize" returnType="int|string" params={[]}>
Integer column size
</ApiItem>
<ApiItem href="#dbcolumn-gettype" visibility="public" name="getType" returnType="int|string" params={[]}>
Column data type
</ApiItem>
<ApiItem href="#dbcolumn-gettypereference" visibility="public" name="getTypeReference" returnType="int" params={[]}>
Column data type reference
</ApiItem>
<ApiItem href="#dbcolumn-gettypevalues" visibility="public" name="getTypeValues" returnType="array|string" params={[]}>
Column data type values
</ApiItem>
<ApiItem href="#dbcolumn-hasdefault" visibility="public" name="hasDefault" returnType="bool" params={[]}>
Check whether column has default value
</ApiItem>
<ApiItem href="#dbcolumn-isarray" visibility="public" name="isArray" returnType="bool" params={[]}>
Whether the column is an array of its base type. Recognized by the
</ApiItem>
<ApiItem href="#dbcolumn-isautoincrement" visibility="public" name="isAutoIncrement" returnType="bool" params={[]}>
Auto-Increment
</ApiItem>
<ApiItem href="#dbcolumn-isfirst" visibility="public" name="isFirst" returnType="bool" params={[]}>
Check whether column have first position in table
</ApiItem>
<ApiItem href="#dbcolumn-isgenerated" visibility="public" name="isGenerated" returnType="bool" params={[]}>
Whether the column is a generated/computed column.
</ApiItem>
<ApiItem href="#dbcolumn-isgenerationstored" visibility="public" name="isGenerationStored" returnType="bool" params={[]}>
Whether a generated column is `STORED`. `false` means `VIRTUAL`.
</ApiItem>
<ApiItem href="#dbcolumn-isinvisible" visibility="public" name="isInvisible" returnType="bool" params={[]}>
Whether the column is declared `INVISIBLE` (MySQL 8.0.23+). Invisible
</ApiItem>
<ApiItem href="#dbcolumn-isnotnull" visibility="public" name="isNotNull" returnType="bool" params={[]}>
Not null
</ApiItem>
<ApiItem href="#dbcolumn-isnumeric" visibility="public" name="isNumeric" returnType="bool" params={[]}>
Check whether column have an numeric type
</ApiItem>
<ApiItem href="#dbcolumn-isprimary" visibility="public" name="isPrimary" returnType="bool" params={[]}>
Column is part of the primary key?
</ApiItem>
<ApiItem href="#dbcolumn-isunsigned" visibility="public" name="isUnsigned" returnType="bool" params={[]}>
Returns true if number column is unsigned
</ApiItem>

### Constants

<ApiItem kind="constant" name="BIND_PARAM_BLOB" type="int" default="3">
Bind Type Blob
</ApiItem>
<ApiItem kind="constant" name="BIND_PARAM_BOOL" type="int" default="5">
Bind Type Bool
</ApiItem>
<ApiItem kind="constant" name="BIND_PARAM_DECIMAL" type="int" default="32">
Bind Type Decimal
</ApiItem>
<ApiItem kind="constant" name="BIND_PARAM_INT" type="int" default="1">
Bind Type Integer
</ApiItem>
<ApiItem kind="constant" name="BIND_PARAM_NULL" type="int" default="0">
Bind Type Null
</ApiItem>
<ApiItem kind="constant" name="BIND_PARAM_STR" type="int" default="2">
Bind Type String
</ApiItem>
<ApiItem kind="constant" name="BIND_SKIP" type="int" default="1024">
Skip binding by type
</ApiItem>
<ApiItem kind="constant" name="TYPE_BIGINTEGER" type="int" default="14">
Big integer abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_BINARY" type="int" default="27">
Binary abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_BIT" type="int" default="19">
Bit abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_BLOB" type="int" default="11">
Blob abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_BOOLEAN" type="int" default="8">
Bool abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_BYTEA" type="int" default="30">
PostgreSQL `BYTEA` binary type
</ApiItem>
<ApiItem kind="constant" name="TYPE_CHAR" type="int" default="5">
Char abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_CIDR" type="int" default="32">
PostgreSQL `CIDR` network-address type
</ApiItem>
<ApiItem kind="constant" name="TYPE_DATE" type="int" default="1">
Date abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_DATERANGE" type="int" default="39">
PostgreSQL `DATERANGE` range-of-date type
</ApiItem>
<ApiItem kind="constant" name="TYPE_DATETIME" type="int" default="4">
Datetime abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_DECIMAL" type="int" default="3">
Decimal abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_DOUBLE" type="int" default="9">
Double abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_ENUM" type="int" default="18">
Enum abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_FLOAT" type="int" default="7">
Float abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_GEOMETRY" type="int" default="40">
Spatial `GEOMETRY` base type (MySQL 5.7+; PostgreSQL + PostGIS)
</ApiItem>
<ApiItem kind="constant" name="TYPE_GEOMETRYCOLLECTION" type="int" default="47">
Spatial `GEOMETRYCOLLECTION` type (MySQL; PostgreSQL + PostGIS)
</ApiItem>
<ApiItem kind="constant" name="TYPE_INET" type="int" default="31">
PostgreSQL `INET` IPv4/IPv6 address type
</ApiItem>
<ApiItem kind="constant" name="TYPE_INT4RANGE" type="int" default="34">
PostgreSQL `INT4RANGE` range-of-integer type
</ApiItem>
<ApiItem kind="constant" name="TYPE_INT8RANGE" type="int" default="35">
PostgreSQL `INT8RANGE` range-of-bigint type
</ApiItem>
<ApiItem kind="constant" name="TYPE_INTEGER" type="int" default="0">
Int abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_JSON" type="int" default="15">
Json abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_JSONB" type="int" default="16">
Jsonb abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_LINESTRING" type="int" default="42">
Spatial `LINESTRING` type (MySQL; PostgreSQL + PostGIS)
</ApiItem>
<ApiItem kind="constant" name="TYPE_LONGBLOB" type="int" default="13">
Longblob abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_LONGTEXT" type="int" default="24">
Longtext abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_MACADDR" type="int" default="33">
PostgreSQL `MACADDR` MAC-address type
</ApiItem>
<ApiItem kind="constant" name="TYPE_MEDIUMBLOB" type="int" default="12">
Mediumblob abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_MEDIUMINTEGER" type="int" default="21">
Mediumintegerr abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_MEDIUMTEXT" type="int" default="23">
Mediumtext abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_MULTILINESTRING" type="int" default="45">
Spatial `MULTILINESTRING` type (MySQL; PostgreSQL + PostGIS)
</ApiItem>
<ApiItem kind="constant" name="TYPE_MULTIPOINT" type="int" default="44">
Spatial `MULTIPOINT` type (MySQL; PostgreSQL + PostGIS)
</ApiItem>
<ApiItem kind="constant" name="TYPE_MULTIPOLYGON" type="int" default="46">
Spatial `MULTIPOLYGON` type (MySQL; PostgreSQL + PostGIS)
</ApiItem>
<ApiItem kind="constant" name="TYPE_NUMRANGE" type="int" default="36">
PostgreSQL `NUMRANGE` range-of-numeric type
</ApiItem>
<ApiItem kind="constant" name="TYPE_POINT" type="int" default="41">
Spatial `POINT` type (MySQL; PostgreSQL + PostGIS)
</ApiItem>
<ApiItem kind="constant" name="TYPE_POLYGON" type="int" default="43">
Spatial `POLYGON` type (MySQL; PostgreSQL + PostGIS)
</ApiItem>
<ApiItem kind="constant" name="TYPE_SMALLINTEGER" type="int" default="22">
Smallint abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_TEXT" type="int" default="6">
Text abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_TIME" type="int" default="20">
Time abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_TIMESTAMP" type="int" default="17">
Timestamp abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_TINYBLOB" type="int" default="10">
Tinyblob abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_TINYINTEGER" type="int" default="26">
Tinyint abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_TINYTEXT" type="int" default="25">
Tinytext abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_TSRANGE" type="int" default="37">
PostgreSQL `TSRANGE` range-of-timestamp (without time zone) type
</ApiItem>
<ApiItem kind="constant" name="TYPE_TSTZRANGE" type="int" default="38">
PostgreSQL `TSTZRANGE` range-of-timestamp (with time zone) type
</ApiItem>
<ApiItem kind="constant" name="TYPE_UUID" type="int" default="29">
UUID abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_VARBINARY" type="int" default="28">
Varbinary abstract data type
</ApiItem>
<ApiItem kind="constant" name="TYPE_VARCHAR" type="int" default="2">
Varchar abstract data type
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="after" type="string|null" default="null">
Column Position
</ApiItem>
<ApiItem kind="property" visibility="protected" name="autoIncrement" type="bool" default="false">
Column is autoIncrement?
</ApiItem>
<ApiItem kind="property" visibility="protected" name="bindType" type="int" default="2">
Bind Type
</ApiItem>
<ApiItem kind="property" visibility="protected" name="comment" type="string|null" default="null">
Column's comment
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultValue" type="mixed|null" default="null">
Default column value
</ApiItem>
<ApiItem kind="property" visibility="protected" name="first" type="bool" default="false">
Position is first
</ApiItem>
<ApiItem kind="property" visibility="protected" name="generated" type="string|null" default="null">
Generation expression for `GENERATED ALWAYS AS (...)`. Null when the
column is not a generated/computed column.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="generationStored" type="bool" default="false">
Whether a generated column is `STORED` (true) or `VIRTUAL` (false).
Ignored when the column is not generated. PostgreSQL only supports
`STORED` and emits it regardless of this flag.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="invisible" type="bool" default="false">
Whether the column is `INVISIBLE` (MySQL 8.0.23+). Invisible columns
are excluded from `SELECT *` expansion but can still be referenced
explicitly.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isArray" type="bool" default="false">
Whether the column is an array of its base type. Recognized by the
PostgreSQL dialect (e.g. `INTEGER[]`, `TEXT[]`). MySQL and SQLite
ignore the flag.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isNumeric" type="bool" default="false">
The column have some numeric type?
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
Column's name
</ApiItem>
<ApiItem kind="property" visibility="protected" name="notNull" type="bool" default="true">
Column not nullable?

Default SQL definition is NOT NULL.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="primary" type="bool" default="false">
Column is part of the primary key?
</ApiItem>
<ApiItem kind="property" visibility="protected" name="scale" type="int" default="0">
Integer column number scale
</ApiItem>
<ApiItem kind="property" visibility="protected" name="size" type="int|string" default="0">
Integer column size
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="int" default="">
Column data type
</ApiItem>
<ApiItem kind="property" visibility="protected" name="typeReference" type="int" default="-1">
Column data type reference
</ApiItem>
<ApiItem kind="property" visibility="protected" name="typeValues" type="array|string" default="[]">
Column data type values
</ApiItem>
<ApiItem kind="property" visibility="protected" name="unsigned" type="bool" default="false">
Integer column unsigned?
</ApiItem>

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
Returns `null` when the column is not generated.

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
public function getTypeValues(): array|string;
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

Check whether column have first position in table

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
Always meaningful only when `isGenerated()` is `true`.

<h4 id="dbcolumn-isinvisible"><code>isInvisible()</code></h4>

```php
public function isInvisible(): bool;
```

Whether the column is declared `INVISIBLE` (MySQL 8.0.23+). Invisible
columns are excluded from `SELECT *` expansion but can still be
referenced explicitly. PostgreSQL and SQLite have no equivalent and
dialects targeting them ignore the flag.

<h4 id="dbcolumn-isnotnull"><code>isNotNull()</code></h4>

```php
public function isNotNull(): bool;
```

Not null

<h4 id="dbcolumn-isnumeric"><code>isNumeric()</code></h4>

```php
public function isNumeric(): bool;
```

Check whether column have an numeric type

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

- [`Phalcon\Contracts\Db\Column`](/5.20/api/phalcon_contracts/#contractsdbcolumn)
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

`Phalcon\Db\Exceptions\ConflictTargetColumnRequired` · `Phalcon\Db\Exceptions\ConflictUpdateColumnRequired` · `Phalcon\Db\Exceptions\InvalidGroupByExpression` · `Phalcon\Db\Exceptions\InvalidListExpression` · `Phalcon\Db\Exceptions\InvalidOrderByExpression` · `Phalcon\Db\Exceptions\InvalidSqlExpression` · `Phalcon\Db\Exceptions\InvalidSqlExpressionType` · `Phalcon\Db\Exceptions\InvalidUnaryExpression` · `Phalcon\Db\Exceptions\MaterializedViewsNotSupported` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\ReturningNotSupported` · `Phalcon\Db\Exceptions\UnsupportedOperator` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#dbdialect-creatematerializedview" visibility="public" name="createMaterializedView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"array","name":"definition","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL to create a materialized view. Supported by PostgreSQL
</ApiItem>
<ApiItem href="#dbdialect-createsavepoint" visibility="public" name="createSavepoint" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Generate SQL to create a new savepoint
</ApiItem>
<ApiItem href="#dbdialect-dropmaterializedview" visibility="public" name="dropMaterializedView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Generates SQL to drop a materialized view. Supported by PostgreSQL.
</ApiItem>
<ApiItem href="#dbdialect-escape" visibility="public" name="escape" returnType="string" params={[{"type":"string","name":"str","default":null},{"type":"string|null","name":"escapeChar","default":"null"}]}>
Escape identifiers
</ApiItem>
<ApiItem href="#dbdialect-escapeschema" visibility="public" name="escapeSchema" returnType="string" params={[{"type":"string","name":"str","default":null},{"type":"string|null","name":"escapeChar","default":"null"}]}>
Escape Schema
</ApiItem>
<ApiItem href="#dbdialect-forupdate" visibility="public" name="forUpdate" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
</ApiItem>
<ApiItem href="#dbdialect-getcolumnlist" visibility="public" name="getColumnList" returnType="string" params={[{"type":"array","name":"columnList","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Gets a list of columns with escaped identifiers
</ApiItem>
<ApiItem href="#dbdialect-getcustomfunctions" visibility="public" name="getCustomFunctions" returnType="array" params={[]}>
Returns registered functions
</ApiItem>
<ApiItem href="#dbdialect-getsqlcolumn" visibility="public" name="getSqlColumn" returnType="string" params={[{"type":"mixed","name":"column","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve Column expressions
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpression" visibility="public" name="getSqlExpression" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Transforms an intermediate representation for an expression into a database system valid expression
</ApiItem>
<ApiItem href="#dbdialect-getsqltable" visibility="public" name="getSqlTable" returnType="string" params={[{"type":"mixed","name":"table","default":null},{"type":"string|null","name":"escapeChar","default":"null"}]}>
Transform an intermediate representation of a schema/table into a
</ApiItem>
<ApiItem href="#dbdialect-limit" visibility="public" name="limit" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"mixed","name":"number","default":null}]}>
Generates the SQL for LIMIT clause
</ApiItem>
<ApiItem href="#dbdialect-onconflictupdate" visibility="public" name="onConflictUpdate" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array","name":"conflictColumns","default":null},{"type":"array","name":"updateColumns","default":null}]}>
Appends an `ON CONFLICT (col, ...) DO UPDATE SET col = excluded.col`
</ApiItem>
<ApiItem href="#dbdialect-refreshmaterializedview" visibility="public" name="refreshMaterializedView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"concurrent","default":"false"}]}>
Generates SQL to refresh a materialized view. Supported by
</ApiItem>
<ApiItem href="#dbdialect-registercustomfunction" visibility="public" name="registerCustomFunction" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"callable","name":"customFunction","default":null}]}>
Registers custom SQL functions
</ApiItem>
<ApiItem href="#dbdialect-releasesavepoint" visibility="public" name="releaseSavepoint" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Generate SQL to release a savepoint
</ApiItem>
<ApiItem href="#dbdialect-returning" visibility="public" name="returning" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array","name":"columns","default":null}]}>
Returns a SQL statement extended with a `RETURNING` clause so the
</ApiItem>
<ApiItem href="#dbdialect-rollbacksavepoint" visibility="public" name="rollbackSavepoint" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Generate SQL to rollback a savepoint
</ApiItem>
<ApiItem href="#dbdialect-select" visibility="public" name="select" returnType="string" params={[{"type":"array","name":"definition","default":null}]}>
Builds a SELECT statement
</ApiItem>
<ApiItem href="#dbdialect-supportsaltertable" visibility="public" name="supportsAlterTable" returnType="bool" params={[]}>
Checks whether the platform supports the full `ALTER TABLE` matrix:
</ApiItem>
<ApiItem href="#dbdialect-supportsmaterializedviews" visibility="public" name="supportsMaterializedViews" returnType="bool" params={[]}>
Checks whether the platform supports materialized views. Only PostgreSQL
</ApiItem>
<ApiItem href="#dbdialect-supportsonconflictupdate" visibility="public" name="supportsOnConflictUpdate" returnType="bool" params={[]}>
Checks whether the platform supports the `ON CONFLICT (...) DO UPDATE`
</ApiItem>
<ApiItem href="#dbdialect-supportsreleasesavepoints" visibility="public" name="supportsReleaseSavepoints" returnType="bool" params={[]}>
Checks whether the platform supports releasing savepoints.
</ApiItem>
<ApiItem href="#dbdialect-supportsreturning" visibility="public" name="supportsReturning" returnType="bool" params={[]}>
Checks whether the platform supports the `RETURNING` clause. MySQL
</ApiItem>
<ApiItem href="#dbdialect-supportssavepoints" visibility="public" name="supportsSavepoints" returnType="bool" params={[]}>
Checks whether the platform supports savepoints
</ApiItem>
<ApiItem href="#dbdialect-checkcolumntype" visibility="protected" name="checkColumnType" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
Checks the column type and if not string it returns the type reference
</ApiItem>
<ApiItem href="#dbdialect-checkcolumntypesql" visibility="protected" name="checkColumnTypeSql" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
Checks the column type and returns the updated SQL statement
</ApiItem>
<ApiItem href="#dbdialect-escapestringliteral" visibility="protected" name="escapeStringLiteral" returnType="string" params={[{"type":"string","name":"value","default":null}]}>
Escape a string literal for a single quoted SQL string. The standard
</ApiItem>
<ApiItem href="#dbdialect-getcheckclause" visibility="protected" name="getCheckClause" returnType="string" params={[{"type":"CheckInterface","name":"check","default":null},{"type":"string","name":"escapeChar","default":"\"`\""}]}>
Builds a CHECK constraint clause from a `CheckInterface`, using the
</ApiItem>
<ApiItem href="#dbdialect-getcolumnsize" visibility="protected" name="getColumnSize" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
Returns the size of the column enclosed in parentheses
</ApiItem>
<ApiItem href="#dbdialect-getcolumnsizeandscale" visibility="protected" name="getColumnSizeAndScale" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
Returns the column size and scale enclosed in parentheses
</ApiItem>
<ApiItem href="#dbdialect-getgeneratedclause" visibility="protected" name="getGeneratedClause" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null},{"type":"bool","name":"forceStored","default":"false"}]}>
Builds the `GENERATED ALWAYS AS (<expr>) VIRTUAL|STORED` clause for a
</ApiItem>
<ApiItem href="#dbdialect-getindexcolumnlist" visibility="protected" name="getIndexColumnList" returnType="string" params={[{"type":"IndexInterface","name":"index","default":null},{"type":"bool","name":"wrapExpressions","default":"true"}]}>
Builds the per-index parenthesized column list, honoring per-column
</ApiItem>
<ApiItem href="#dbdialect-getlimitvalue" visibility="protected" name="getLimitValue" returnType="string" params={[{"type":"mixed","name":"value","default":null}]}>
Renders a LIMIT/OFFSET value: a bound placeholder passes through, any
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionall" visibility="protected" name="getSqlExpressionAll" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"}]}>
Resolve *
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionbinaryoperations" visibility="protected" name="getSqlExpressionBinaryOperations" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve binary operations expressions
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressioncase" visibility="protected" name="getSqlExpressionCase" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve CASE expressions
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressioncastvalue" visibility="protected" name="getSqlExpressionCastValue" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve CAST of values
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionconvertvalue" visibility="protected" name="getSqlExpressionConvertValue" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve CONVERT of values encodings
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionfrom" visibility="protected" name="getSqlExpressionFrom" returnType="string" params={[{"type":"mixed","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"}]}>
Resolve a FROM clause
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionfunctioncall" visibility="protected" name="getSqlExpressionFunctionCall" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve function calls
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressiongroupby" visibility="protected" name="getSqlExpressionGroupBy" returnType="string" params={[{"type":"mixed","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve a GROUP BY clause
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionhaving" visibility="protected" name="getSqlExpressionHaving" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve a HAVING clause
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionjoins" visibility="protected" name="getSqlExpressionJoins" returnType="string" params={[{"type":"mixed","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve a JOINs clause
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionlimit" visibility="protected" name="getSqlExpressionLimit" returnType="string" params={[{"type":"mixed","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve a LIMIT clause
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionlist" visibility="protected" name="getSqlExpressionList" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve Lists
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionobject" visibility="protected" name="getSqlExpressionObject" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve object expressions
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionorderby" visibility="protected" name="getSqlExpressionOrderBy" returnType="string" params={[{"type":"mixed","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve an ORDER BY clause
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionqualified" visibility="protected" name="getSqlExpressionQualified" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"}]}>
Resolve qualified expressions
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionscalar" visibility="protected" name="getSqlExpressionScalar" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve Column expressions
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionunaryoperations" visibility="protected" name="getSqlExpressionUnaryOperations" returnType="string" params={[{"type":"array","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve unary operations expressions
</ApiItem>
<ApiItem href="#dbdialect-getsqlexpressionwhere" visibility="protected" name="getSqlExpressionWhere" returnType="string" params={[{"type":"mixed","name":"expression","default":null},{"type":"string|null","name":"escapeChar","default":"null"},{"type":"array","name":"bindCounts","default":"[]"}]}>
Resolve a WHERE clause
</ApiItem>
<ApiItem href="#dbdialect-preparecolumnalias" visibility="protected" name="prepareColumnAlias" returnType="string" params={[{"type":"string","name":"qualified","default":null},{"type":"string|null","name":"alias","default":"null"},{"type":"string|null","name":"escapeChar","default":"null"}]}>
Prepares column for this RDBMS
</ApiItem>
<ApiItem href="#dbdialect-preparequalified" visibility="protected" name="prepareQualified" returnType="string" params={[{"type":"string","name":"column","default":null},{"type":"string|null","name":"domain","default":"null"},{"type":"string|null","name":"escapeChar","default":"null"}]}>
Prepares qualified for this RDBMS
</ApiItem>
<ApiItem href="#dbdialect-preparetable" visibility="protected" name="prepareTable" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"},{"type":"string|null","name":"alias","default":"null"},{"type":"string|null","name":"escapeChar","default":"null"}]}>
Prepares table for this RDBMS
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="customFunctions" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="escapeChar" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="guardedOperators" type="array" default="[...]">
Dialect-specific operators that a concrete dialect must opt into
via supportedOperators; using one elsewhere throws.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="supportedOperators" type="array" default="[]">
Subset of guardedOperators that this dialect emits. Overridden per
dialect.
</ApiItem>

### Methods

<h4 id="dbdialect-creatematerializedview"><code>createMaterializedView()</code></h4>

```php
public function createMaterializedView(
string $viewName,
array $definition,
string|null $schemaName = null
): string;
```

Generates SQL to create a materialized view. Supported by PostgreSQL
(`CREATE MATERIALIZED VIEW name AS <sql>`). Other dialects inherit
this throw - MySQL and SQLite have no materialized-view concept.

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

Generates SQL to drop a materialized view. Supported by PostgreSQL.

<h4 id="dbdialect-escape"><code>escape()</code></h4>

```php
final public function escape(
string $str,
string|null $escapeChar = null
): string;
```

Escape identifiers

<h4 id="dbdialect-escapeschema"><code>escapeSchema()</code></h4>

```php
final public function escapeSchema(
string $str,
string|null $escapeChar = null
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

Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword.

```php
$sql = $dialect->forUpdate("SELECT * FROM co_invoices");
echo $sql; // SELECT * FROM co_invoices FOR UPDATE

$sql = $dialect->forUpdate(
"SELECT * FROM co_invoices",
Dialect::LOCK_NOWAIT
);
echo $sql; // SELECT * FROM co_invoices FOR UPDATE NOWAIT

$sql = $dialect->forUpdate(
"SELECT * FROM co_invoices",
Dialect::LOCK_SKIP_LOCKED
);
echo $sql; // SELECT * FROM co_invoices FOR UPDATE SKIP LOCKED
```

<h4 id="dbdialect-getcolumnlist"><code>getColumnList()</code></h4>

```php
final public function getColumnList(
array $columnList,
string|null $escapeChar = null,
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
mixed $column,
string|null $escapeChar = null,
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

Transforms an intermediate representation for an expression into a database system valid expression

<h4 id="dbdialect-getsqltable"><code>getSqlTable()</code></h4>

```php
final public function getSqlTable(
mixed $table,
string|null $escapeChar = null
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
upsert clause to the supplied INSERT statement. The syntax is the
SQL standard form recognized by PostgreSQL (9.5+) and SQLite (3.24+).
MySQL overrides this method to throw because its `ON DUPLICATE KEY
UPDATE` has a different shape (deferred to parser item #23).

<h4 id="dbdialect-refreshmaterializedview"><code>refreshMaterializedView()</code></h4>

```php
public function refreshMaterializedView(
string $viewName,
string|null $schemaName = null,
bool $concurrent = false
): string;
```

Generates SQL to refresh a materialized view. Supported by
PostgreSQL. Pass `concurrent = true` for `REFRESH MATERIALIZED VIEW
CONCURRENTLY ...`, which avoids blocking concurrent SELECTs (requires
the view to have a unique index).

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

Returns a SQL statement extended with a `RETURNING` clause so the
INSERT/UPDATE/DELETE returns rows. Supported by PostgreSQL and
SQLite 3.35+. Pass `["*"]` for `RETURNING *`, or a list of column
names. The base implementation throws - MySQL inherits it because
MySQL has no RETURNING construct.

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
protected function checkColumnType( ColumnInterface $column ): string;
```

Checks the column type and if not string it returns the type reference

<h4 id="dbdialect-checkcolumntypesql"><code>checkColumnTypeSql()</code></h4>

```php
protected function checkColumnTypeSql( ColumnInterface $column ): string;
```

Checks the column type and returns the updated SQL statement

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
provided escape character for the constraint name (so each dialect
gets its native quoting). Returns the clause body - the dialect's
`createTable()` / `addCheck()` is expected to prefix `ADD` or place
the result on its own line as appropriate.

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
not generated. When `forceStored` is `true` the clause is always emitted
as `STORED` regardless of the column's `isGenerationStored()` flag -
PostgreSQL uses this since it only supports stored generated columns.

<h4 id="dbdialect-getindexcolumnlist"><code>getIndexColumnList()</code></h4>

```php
protected function getIndexColumnList(
IndexInterface $index,
bool $wrapExpressions = true
): string;
```

Builds the per-index parenthesized column list, honoring per-column
sort directions when the index declares any. Returns the bare
comma-separated `getColumnList()` output when no directions are set,
preserving the legacy rendering exactly. When directions are set,
each column is followed by ` ASC` or ` DESC`; trailing positions
absent from the directions array default to `ASC`.

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
string|null $escapeChar = null
): string;
```

Resolve *

<h4 id="dbdialect-getsqlexpressionbinaryoperations"><code>getSqlExpressionBinaryOperations()</code></h4>

```php
final protected function getSqlExpressionBinaryOperations(
array $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve binary operations expressions

<h4 id="dbdialect-getsqlexpressioncase"><code>getSqlExpressionCase()</code></h4>

```php
final protected function getSqlExpressionCase(
array $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve CASE expressions

<h4 id="dbdialect-getsqlexpressioncastvalue"><code>getSqlExpressionCastValue()</code></h4>

```php
final protected function getSqlExpressionCastValue(
array $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve CAST of values

<h4 id="dbdialect-getsqlexpressionconvertvalue"><code>getSqlExpressionConvertValue()</code></h4>

```php
final protected function getSqlExpressionConvertValue(
array $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve CONVERT of values encodings

<h4 id="dbdialect-getsqlexpressionfrom"><code>getSqlExpressionFrom()</code></h4>

```php
final protected function getSqlExpressionFrom(
mixed $expression,
string|null $escapeChar = null
): string;
```

Resolve a FROM clause

<h4 id="dbdialect-getsqlexpressionfunctioncall"><code>getSqlExpressionFunctionCall()</code></h4>

```php
final protected function getSqlExpressionFunctionCall(
array $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve function calls

<h4 id="dbdialect-getsqlexpressiongroupby"><code>getSqlExpressionGroupBy()</code></h4>

```php
final protected function getSqlExpressionGroupBy(
mixed $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve a GROUP BY clause

<h4 id="dbdialect-getsqlexpressionhaving"><code>getSqlExpressionHaving()</code></h4>

```php
final protected function getSqlExpressionHaving(
array $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve a HAVING clause

<h4 id="dbdialect-getsqlexpressionjoins"><code>getSqlExpressionJoins()</code></h4>

```php
final protected function getSqlExpressionJoins(
mixed $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve a JOINs clause

<h4 id="dbdialect-getsqlexpressionlimit"><code>getSqlExpressionLimit()</code></h4>

```php
final protected function getSqlExpressionLimit(
mixed $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve a LIMIT clause

<h4 id="dbdialect-getsqlexpressionlist"><code>getSqlExpressionList()</code></h4>

```php
final protected function getSqlExpressionList(
array $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve Lists

<h4 id="dbdialect-getsqlexpressionobject"><code>getSqlExpressionObject()</code></h4>

```php
final protected function getSqlExpressionObject(
array $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve object expressions

<h4 id="dbdialect-getsqlexpressionorderby"><code>getSqlExpressionOrderBy()</code></h4>

```php
final protected function getSqlExpressionOrderBy(
mixed $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve an ORDER BY clause

<h4 id="dbdialect-getsqlexpressionqualified"><code>getSqlExpressionQualified()</code></h4>

```php
final protected function getSqlExpressionQualified(
array $expression,
string|null $escapeChar = null
): string;
```

Resolve qualified expressions

<h4 id="dbdialect-getsqlexpressionscalar"><code>getSqlExpressionScalar()</code></h4>

```php
final protected function getSqlExpressionScalar(
array $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve Column expressions

<h4 id="dbdialect-getsqlexpressionunaryoperations"><code>getSqlExpressionUnaryOperations()</code></h4>

```php
final protected function getSqlExpressionUnaryOperations(
array $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve unary operations expressions

<h4 id="dbdialect-getsqlexpressionwhere"><code>getSqlExpressionWhere()</code></h4>

```php
final protected function getSqlExpressionWhere(
mixed $expression,
string|null $escapeChar = null,
array $bindCounts = []
): string;
```

Resolve a WHERE clause

<h4 id="dbdialect-preparecolumnalias"><code>prepareColumnAlias()</code></h4>

```php
protected function prepareColumnAlias(
string $qualified,
string|null $alias = null,
string|null $escapeChar = null
): string;
```

Prepares column for this RDBMS

<h4 id="dbdialect-preparequalified"><code>prepareQualified()</code></h4>

```php
protected function prepareQualified(
string $column,
string|null $domain = null,
string|null $escapeChar = null
): string;
```

Prepares qualified for this RDBMS

<h4 id="dbdialect-preparetable"><code>prepareTable()</code></h4>

```php
protected function prepareTable(
string $table,
string|null $schema = null,
string|null $alias = null,
string|null $escapeChar = null
): string;
```

Prepares table for this RDBMS

## Db\DialectInterface

Interface

Phalcon\Db\DialectInterface

- [`Phalcon\Contracts\Db\Dialect`](/5.20/api/phalcon_contracts/#contractsdbdialect)
- **`Phalcon\Db\DialectInterface`**

`Phalcon\Contracts\Db\Dialect`

## Db\Dialect\Mysql

Class

Generates database specific SQL for the MySQL RDBMS

- [`Phalcon\Db\Dialect`](#dbdialect)
- **`Phalcon\Db\Dialect\Mysql`**

`Phalcon\Db\CheckInterface` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\MysqlOnConflictNotSupported` · `Phalcon\Db\Exceptions\UnrecognizedDataType` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface`

### Method Summary

<ApiItem href="#dbdialectmysql-addcheck" visibility="public" name="addCheck" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"CheckInterface","name":"check","default":null}]}>
Generates SQL to add a CHECK constraint to an existing table.
</ApiItem>
<ApiItem href="#dbdialectmysql-addcolumn" visibility="public" name="addColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null}]}>
Generates SQL to add a column to a table
</ApiItem>
<ApiItem href="#dbdialectmysql-addforeignkey" visibility="public" name="addForeignKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ReferenceInterface","name":"reference","default":null}]}>
Generates SQL to add an index to a table
</ApiItem>
<ApiItem href="#dbdialectmysql-addindex" visibility="public" name="addIndex" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Generates SQL to add an index to a table
</ApiItem>
<ApiItem href="#dbdialectmysql-addprimarykey" visibility="public" name="addPrimaryKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Generates SQL to add the primary key to a table
</ApiItem>
<ApiItem href="#dbdialectmysql-createtable" visibility="public" name="createTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"array","name":"definition","default":null}]}>
Generates SQL to create a table
</ApiItem>
<ApiItem href="#dbdialectmysql-createview" visibility="public" name="createView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"array","name":"definition","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL to create a view
</ApiItem>
<ApiItem href="#dbdialectmysql-describecolumns" visibility="public" name="describeColumns" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates SQL describing a table
</ApiItem>
<ApiItem href="#dbdialectmysql-describeindexes" visibility="public" name="describeIndexes" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates SQL to query indexes on a table
</ApiItem>
<ApiItem href="#dbdialectmysql-describereferences" visibility="public" name="describeReferences" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates SQL to query foreign keys on a table
</ApiItem>
<ApiItem href="#dbdialectmysql-dropcheck" visibility="public" name="dropCheck" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"checkName","default":null}]}>
Generates SQL to delete a CHECK constraint from a table
</ApiItem>
<ApiItem href="#dbdialectmysql-dropcolumn" visibility="public" name="dropColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"columnName","default":null}]}>
Generates SQL to delete a column from a table
</ApiItem>
<ApiItem href="#dbdialectmysql-dropforeignkey" visibility="public" name="dropForeignKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"referenceName","default":null}]}>
Generates SQL to delete a foreign key from a table
</ApiItem>
<ApiItem href="#dbdialectmysql-dropindex" visibility="public" name="dropIndex" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"indexName","default":null}]}>
Generates SQL to delete an index from a table
</ApiItem>
<ApiItem href="#dbdialectmysql-dropprimarykey" visibility="public" name="dropPrimaryKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null}]}>
Generates SQL to delete primary key from a table
</ApiItem>
<ApiItem href="#dbdialectmysql-droptable" visibility="public" name="dropTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Generates SQL to drop a table
</ApiItem>
<ApiItem href="#dbdialectmysql-dropview" visibility="public" name="dropView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Generates SQL to drop a view
</ApiItem>
<ApiItem href="#dbdialectmysql-getcolumndefinition" visibility="public" name="getColumnDefinition" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
Gets the column name in MySQL
</ApiItem>
<ApiItem href="#dbdialectmysql-getforeignkeychecks" visibility="public" name="getForeignKeyChecks" returnType="string" params={[]}>
Generates SQL to check DB parameter FOREIGN_KEY_CHECKS.
</ApiItem>
<ApiItem href="#dbdialectmysql-listtables" visibility="public" name="listTables" returnType="string" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
List all tables in database
</ApiItem>
<ApiItem href="#dbdialectmysql-listviews" visibility="public" name="listViews" returnType="string" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates the SQL to list all views of a schema or user
</ApiItem>
<ApiItem href="#dbdialectmysql-modifycolumn" visibility="public" name="modifyColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null},{"type":"ColumnInterface|null","name":"currentColumn","default":"null"}]}>
Generates SQL to modify a column in a table
</ApiItem>
<ApiItem href="#dbdialectmysql-onconflictupdate" visibility="public" name="onConflictUpdate" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array","name":"conflictColumns","default":null},{"type":"array","name":"updateColumns","default":null}]}>
MySQL does not support the SQL-standard `ON CONFLICT DO UPDATE`
</ApiItem>
<ApiItem href="#dbdialectmysql-sharedlock" visibility="public" name="sharedLock" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
Returns a SQL modified with a LOCK IN SHARE MODE clause. The `modifier`
</ApiItem>
<ApiItem href="#dbdialectmysql-supportsonconflictupdate" visibility="public" name="supportsOnConflictUpdate" returnType="bool" params={[]}>
MySQL does not support the SQL-standard `ON CONFLICT (...) DO UPDATE`
</ApiItem>
<ApiItem href="#dbdialectmysql-tableexists" visibility="public" name="tableExists" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.table
</ApiItem>
<ApiItem href="#dbdialectmysql-tableoptions" visibility="public" name="tableOptions" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates the SQL to describe the table creation options
</ApiItem>
<ApiItem href="#dbdialectmysql-truncatetable" visibility="public" name="truncateTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null}]}>
Generates SQL to truncate a table
</ApiItem>
<ApiItem href="#dbdialectmysql-viewexists" visibility="public" name="viewExists" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.view
</ApiItem>
<ApiItem href="#dbdialectmysql-escapestringliteral" visibility="protected" name="escapeStringLiteral" returnType="string" params={[{"type":"string","name":"value","default":null}]}>
Escape a string literal for a single quoted SQL string. MySQL treats the
</ApiItem>
<ApiItem href="#dbdialectmysql-gettableoptions" visibility="protected" name="getTableOptions" returnType="string" params={[{"type":"array","name":"definition","default":null}]}>
Generates SQL to add the table creation options
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="escapeChar" type="string" default="&quot;`&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="supportedOperators" type="array" default="[...]">
</ApiItem>

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

Generates SQL to delete a CHECK constraint from a table

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
upsert syntax - it has its own `INSERT ... ON DUPLICATE KEY UPDATE`
which requires PHQL grammar work (deferred). The base helper is
overridden here to throw, preventing accidental emission of invalid
SQL on MySQL connections.

<h4 id="dbdialectmysql-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock(
string $sqlQuery,
string $modifier = ""
): string;
```

Returns a SQL modified with a LOCK IN SHARE MODE clause. The `modifier`
argument is accepted for signature parity with the contract but is
silently ignored on MySQL - its legacy `LOCK IN SHARE MODE` syntax has
no `NOWAIT` / `SKIP LOCKED` variant. Callers needing those modifiers
should target PostgreSQL or stay on `forUpdate()`.

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
string $schemaName
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

<h4 id="dbdialectmysql-gettableoptions"><code>getTableOptions()</code></h4>

```php
protected function getTableOptions( array $definition ): string;
```

Generates SQL to add the table creation options

## Db\Dialect\Postgresql

Class

Generates database specific SQL for the PostgreSQL RDBMS

- [`Phalcon\Db\Dialect`](#dbdialect)
- **`Phalcon\Db\Dialect\Postgresql`**

`Phalcon\Db\CheckInterface` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\ReturningRequiresColumn` · `Phalcon\Db\Exceptions\UnrecognizedDataType` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface`

### Method Summary

<ApiItem href="#dbdialectpostgresql-addcheck" visibility="public" name="addCheck" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"CheckInterface","name":"check","default":null}]}>
Generates SQL to add a CHECK constraint to an existing table.
</ApiItem>
<ApiItem href="#dbdialectpostgresql-addcolumn" visibility="public" name="addColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null}]}>
Generates SQL to add a column to a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-addforeignkey" visibility="public" name="addForeignKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ReferenceInterface","name":"reference","default":null}]}>
Generates SQL to add an index to a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-addindex" visibility="public" name="addIndex" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Generates SQL to add an index to a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-addprimarykey" visibility="public" name="addPrimaryKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Generates SQL to add the primary key to a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-creatematerializedview" visibility="public" name="createMaterializedView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"array","name":"definition","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL to create a materialized view.
</ApiItem>
<ApiItem href="#dbdialectpostgresql-createtable" visibility="public" name="createTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"array","name":"definition","default":null}]}>
Generates SQL to create a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-createview" visibility="public" name="createView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"array","name":"definition","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL to create a view
</ApiItem>
<ApiItem href="#dbdialectpostgresql-describecolumns" visibility="public" name="describeColumns" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates SQL describing a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-describeindexes" visibility="public" name="describeIndexes" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates SQL to query indexes on a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-describereferences" visibility="public" name="describeReferences" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates SQL to query foreign keys on a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-dropcheck" visibility="public" name="dropCheck" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"checkName","default":null}]}>
Generates SQL to delete a CHECK constraint from a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-dropcolumn" visibility="public" name="dropColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"columnName","default":null}]}>
Generates SQL to delete a column from a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-dropforeignkey" visibility="public" name="dropForeignKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"referenceName","default":null}]}>
Generates SQL to delete a foreign key from a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-dropindex" visibility="public" name="dropIndex" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"indexName","default":null}]}>
Generates SQL to delete an index from a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-dropmaterializedview" visibility="public" name="dropMaterializedView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Generates SQL to drop a materialized view.
</ApiItem>
<ApiItem href="#dbdialectpostgresql-dropprimarykey" visibility="public" name="dropPrimaryKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null}]}>
Generates SQL to delete primary key from a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-droptable" visibility="public" name="dropTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Generates SQL to drop a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-dropview" visibility="public" name="dropView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Generates SQL to drop a view
</ApiItem>
<ApiItem href="#dbdialectpostgresql-getcolumndefinition" visibility="public" name="getColumnDefinition" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
Gets the column name in PostgreSQL
</ApiItem>
<ApiItem href="#dbdialectpostgresql-listtables" visibility="public" name="listTables" returnType="string" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
List all tables in database
</ApiItem>
<ApiItem href="#dbdialectpostgresql-listviews" visibility="public" name="listViews" returnType="string" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates the SQL to list all views of a schema or user
</ApiItem>
<ApiItem href="#dbdialectpostgresql-modifycolumn" visibility="public" name="modifyColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null},{"type":"ColumnInterface|null","name":"currentColumn","default":"null"}]}>
Generates SQL to modify a column in a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-refreshmaterializedview" visibility="public" name="refreshMaterializedView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"concurrent","default":"false"}]}>
Generates SQL to refresh a materialized view. When `concurrent` is
</ApiItem>
<ApiItem href="#dbdialectpostgresql-returning" visibility="public" name="returning" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array","name":"columns","default":null}]}>
Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE
</ApiItem>
<ApiItem href="#dbdialectpostgresql-sharedlock" visibility="public" name="sharedLock" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
Returns a SQL modified with a `FOR SHARE` clause - PostgreSQL's
</ApiItem>
<ApiItem href="#dbdialectpostgresql-supportsmaterializedviews" visibility="public" name="supportsMaterializedViews" returnType="bool" params={[]}>
PostgreSQL supports materialized views (`CREATE MATERIALIZED VIEW`).
</ApiItem>
<ApiItem href="#dbdialectpostgresql-supportsreturning" visibility="public" name="supportsReturning" returnType="bool" params={[]}>
PostgreSQL supports the `RETURNING` clause.
</ApiItem>
<ApiItem href="#dbdialectpostgresql-tableexists" visibility="public" name="tableExists" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-tableoptions" visibility="public" name="tableOptions" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates the SQL to describe the table creation options
</ApiItem>
<ApiItem href="#dbdialectpostgresql-truncatetable" visibility="public" name="truncateTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null}]}>
Generates SQL to truncate a table
</ApiItem>
<ApiItem href="#dbdialectpostgresql-viewexists" visibility="public" name="viewExists" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.view
</ApiItem>
<ApiItem href="#dbdialectpostgresql-castdefault" visibility="protected" name="castDefault" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
</ApiItem>
<ApiItem href="#dbdialectpostgresql-gettableoptions" visibility="protected" name="getTableOptions" returnType="string" params={[{"type":"array","name":"definition","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="escapeChar" type="string" default="&quot;\&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="supportedOperators" type="array" default="[...]">
</ApiItem>

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

Generates SQL to delete a CHECK constraint from a table

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

Generates SQL to refresh a materialized view. When `concurrent` is
true, emits `REFRESH MATERIALIZED VIEW CONCURRENTLY ...` (avoids
blocking concurrent SELECTs; requires a unique index on the view).

<h4 id="dbdialectpostgresql-returning"><code>returning()</code></h4>

```php
public function returning(
string $sqlQuery,
array $columns
): string;
```

Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE
statement. Pass `["*"]` for `RETURNING *`, or a list of column names.

<h4 id="dbdialectpostgresql-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock(
string $sqlQuery,
string $modifier = ""
): string;
```

Returns a SQL modified with a `FOR SHARE` clause - PostgreSQL's
equivalent of MySQL's `LOCK IN SHARE MODE`. The optional `modifier`
appends a row-lock disposition keyword (pass `Dialect::LOCK_NOWAIT`
or `Dialect::LOCK_SKIP_LOCKED`).

```php
echo $dialect->sharedLock("SELECT * FROM co_invoices");
// SELECT * FROM co_invoices FOR SHARE

echo $dialect->sharedLock(
"SELECT * FROM co_invoices",
Dialect::LOCK_NOWAIT
);
// SELECT * FROM co_invoices FOR SHARE NOWAIT
```

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
string $schemaName
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

`Phalcon\Db\CheckInterface` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\ReturningRequiresColumn` · `Phalcon\Db\Exceptions\SqliteAlterCheckNotSupported` · `Phalcon\Db\Exceptions\SqliteAlterColumnNotSupported` · `Phalcon\Db\Exceptions\SqliteAlterForeignKeyNotSupported` · `Phalcon\Db\Exceptions\SqliteAlterPrimaryKeyNotSupported` · `Phalcon\Db\Exceptions\SqliteDropCheckNotSupported` · `Phalcon\Db\Exceptions\SqliteDropForeignKeyNotSupported` · `Phalcon\Db\Exceptions\SqliteDropPrimaryKeyNotSupported` · `Phalcon\Db\Exceptions\UnrecognizedDataType` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface`

### Method Summary

<ApiItem href="#dbdialectsqlite-addcheck" visibility="public" name="addCheck" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"CheckInterface","name":"check","default":null}]}>
SQLite cannot ALTER an existing table to add a CHECK constraint;
</ApiItem>
<ApiItem href="#dbdialectsqlite-addcolumn" visibility="public" name="addColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null}]}>
Generates SQL to add a column to a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-addforeignkey" visibility="public" name="addForeignKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ReferenceInterface","name":"reference","default":null}]}>
Generates SQL to add an index to a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-addindex" visibility="public" name="addIndex" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Generates SQL to add an index to a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-addprimarykey" visibility="public" name="addPrimaryKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"IndexInterface","name":"index","default":null}]}>
Generates SQL to add the primary key to a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-createtable" visibility="public" name="createTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"array","name":"definition","default":null}]}>
Generates SQL to create a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-createview" visibility="public" name="createView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"array","name":"definition","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL to create a view
</ApiItem>
<ApiItem href="#dbdialectsqlite-describecolumns" visibility="public" name="describeColumns" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates SQL describing a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-describeindex" visibility="public" name="describeIndex" returnType="string" params={[{"type":"string","name":"index","default":null}]}>
Generates SQL to query indexes detail on a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-describeindexes" visibility="public" name="describeIndexes" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates SQL to query indexes on a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-describereferences" visibility="public" name="describeReferences" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates SQL to query foreign keys on a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-dropcheck" visibility="public" name="dropCheck" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"checkName","default":null}]}>
SQLite cannot DROP a CHECK constraint from an existing table.
</ApiItem>
<ApiItem href="#dbdialectsqlite-dropcolumn" visibility="public" name="dropColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"columnName","default":null}]}>
Generates SQL to delete a column from a table.
</ApiItem>
<ApiItem href="#dbdialectsqlite-dropforeignkey" visibility="public" name="dropForeignKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"referenceName","default":null}]}>
Generates SQL to delete a foreign key from a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-dropindex" visibility="public" name="dropIndex" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"string","name":"indexName","default":null}]}>
Generates SQL to delete an index from a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-dropprimarykey" visibility="public" name="dropPrimaryKey" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null}]}>
Generates SQL to delete primary key from a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-droptable" visibility="public" name="dropTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Generates SQL to drop a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-dropview" visibility="public" name="dropView" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"},{"type":"bool","name":"ifExists","default":"true"}]}>
Generates SQL to drop a view
</ApiItem>
<ApiItem href="#dbdialectsqlite-forupdate" visibility="public" name="forUpdate" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
Returns a SQL modified with a FOR UPDATE clause. SQLite has no
</ApiItem>
<ApiItem href="#dbdialectsqlite-getcolumndefinition" visibility="public" name="getColumnDefinition" returnType="string" params={[{"type":"ColumnInterface","name":"column","default":null}]}>
Gets the column name in SQLite
</ApiItem>
<ApiItem href="#dbdialectsqlite-listindexessql" visibility="public" name="listIndexesSql" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"},{"type":"string|null","name":"keyName","default":"null"}]}>
Generates the SQL to get query list of indexes
</ApiItem>
<ApiItem href="#dbdialectsqlite-listtables" visibility="public" name="listTables" returnType="string" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
List all tables in database
</ApiItem>
<ApiItem href="#dbdialectsqlite-listviews" visibility="public" name="listViews" returnType="string" params={[{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates the SQL to list all views of a schema or user
</ApiItem>
<ApiItem href="#dbdialectsqlite-modifycolumn" visibility="public" name="modifyColumn" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null},{"type":"ColumnInterface","name":"column","default":null},{"type":"ColumnInterface|null","name":"currentColumn","default":"null"}]}>
Generates SQL to modify a column in a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-returning" visibility="public" name="returning" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"array","name":"columns","default":null}]}>
Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE
</ApiItem>
<ApiItem href="#dbdialectsqlite-sharedlock" visibility="public" name="sharedLock" returnType="string" params={[{"type":"string","name":"sqlQuery","default":null},{"type":"string","name":"modifier","default":"\"\""}]}>
SQLite has no row-level shared-lock construct, so the original query
</ApiItem>
<ApiItem href="#dbdialectsqlite-supportsaltertable" visibility="public" name="supportsAlterTable" returnType="bool" params={[]}>
SQLite cannot modify existing columns or add/drop foreign keys, primary
</ApiItem>
<ApiItem href="#dbdialectsqlite-supportsreturning" visibility="public" name="supportsReturning" returnType="bool" params={[]}>
SQLite (3.35+) supports the `RETURNING` clause.
</ApiItem>
<ApiItem href="#dbdialectsqlite-tableexists" visibility="public" name="tableExists" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.table
</ApiItem>
<ApiItem href="#dbdialectsqlite-tableoptions" visibility="public" name="tableOptions" returnType="string" params={[{"type":"string","name":"table","default":null},{"type":"string|null","name":"schema","default":"null"}]}>
Generates the SQL to describe the table creation options
</ApiItem>
<ApiItem href="#dbdialectsqlite-truncatetable" visibility="public" name="truncateTable" returnType="string" params={[{"type":"string","name":"tableName","default":null},{"type":"string","name":"schemaName","default":null}]}>
Generates SQL to truncate a table
</ApiItem>
<ApiItem href="#dbdialectsqlite-viewexists" visibility="public" name="viewExists" returnType="string" params={[{"type":"string","name":"viewName","default":null},{"type":"string|null","name":"schemaName","default":"null"}]}>
Generates SQL checking for the existence of a schema.view
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="escapeChar" type="string" default="&quot;\&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="supportedOperators" type="array" default="[...]">
</ApiItem>

### Methods

<h4 id="dbdialectsqlite-addcheck"><code>addCheck()</code></h4>

```php
public function addCheck(
string $tableName,
string $schemaName,
CheckInterface $check
): string;
```

SQLite cannot ALTER an existing table to add a CHECK constraint;
the constraint must be declared at CREATE TABLE time.

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

Generates SQL to delete a column from a table.

SQLite 3.35+ supports `ALTER TABLE ... DROP COLUMN ...` directly. On
older versions the server rejects the statement at execution time;
cphalcon no longer pre-empts that rejection at the dialect level so
callers on 3.35+ can use the feature.

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

Returns a SQL modified with a FOR UPDATE clause. SQLite has no
row-level locking, so the original query is returned unchanged
regardless of the `modifier` argument (`NOWAIT` / `SKIP LOCKED` are
silently ignored).

<h4 id="dbdialectsqlite-getcolumndefinition"><code>getColumnDefinition()</code></h4>

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in SQLite

<h4 id="dbdialectsqlite-listindexessql"><code>listIndexesSql()</code></h4>

```php
public function listIndexesSql(
string $table,
string|null $schema = null,
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
statement. Supported by SQLite 3.35+. Pass `["*"]` for `RETURNING *`,
or a list of column names.

<h4 id="dbdialectsqlite-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock(
string $sqlQuery,
string $modifier = ""
): string;
```

SQLite has no row-level shared-lock construct, so the original query
is returned unchanged regardless of the `modifier` argument.

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
string $schemaName
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

## Db\Enum

Class

Constants for Phalcon\Db

- **`Phalcon\Db\Enum`**

### Constants

<ApiItem kind="constant" name="FETCH_ASSOC" type="int" default="\PDO::FETCH_ASSOC">
</ApiItem>
<ApiItem kind="constant" name="FETCH_BOTH" type="int" default="\PDO::FETCH_BOTH">
</ApiItem>
<ApiItem kind="constant" name="FETCH_BOUND" type="int" default="\PDO::FETCH_BOUND">
</ApiItem>
<ApiItem kind="constant" name="FETCH_CLASS" type="int" default="\PDO::FETCH_CLASS">
</ApiItem>
<ApiItem kind="constant" name="FETCH_CLASSTYPE" type="int" default="\PDO::FETCH_CLASSTYPE">
</ApiItem>
<ApiItem kind="constant" name="FETCH_COLUMN" type="int" default="\PDO::FETCH_COLUMN">
</ApiItem>
<ApiItem kind="constant" name="FETCH_DEFAULT" type="int" default="\PDO::FETCH_DEFAULT">
</ApiItem>
<ApiItem kind="constant" name="FETCH_FUNC" type="int" default="\PDO::FETCH_FUNC">
</ApiItem>
<ApiItem kind="constant" name="FETCH_GROUP" type="int" default="\PDO::FETCH_GROUP">
</ApiItem>
<ApiItem kind="constant" name="FETCH_INTO" type="int" default="\PDO::FETCH_INTO">
</ApiItem>
<ApiItem kind="constant" name="FETCH_KEY_PAIR" type="int" default="\PDO::FETCH_KEY_PAIR">
</ApiItem>
<ApiItem kind="constant" name="FETCH_LAZY" type="int" default="\PDO::FETCH_LAZY">
</ApiItem>
<ApiItem kind="constant" name="FETCH_NAMED" type="int" default="\PDO::FETCH_NAMED">
</ApiItem>
<ApiItem kind="constant" name="FETCH_NUM" type="int" default="\PDO::FETCH_NUM">
</ApiItem>
<ApiItem kind="constant" name="FETCH_OBJ" type="int" default="\PDO::FETCH_OBJ">
</ApiItem>
<ApiItem kind="constant" name="FETCH_ORI_NEXT" type="int" default="\PDO::FETCH_ORI_NEXT">
</ApiItem>
<ApiItem kind="constant" name="FETCH_PROPS_LATE" type="int" default="\PDO::FETCH_PROPS_LATE">
</ApiItem>
<ApiItem kind="constant" name="FETCH_SERIALIZE" type="int" default="\PDO::FETCH_SERIALIZE">
</ApiItem>
<ApiItem kind="constant" name="FETCH_UNIQUE" type="int" default="\PDO::FETCH_UNIQUE">
</ApiItem>

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

<ApiItem href="#dbexceptionscannotinsertwithoutdata-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"table","default":null}]}>
</ApiItem>

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

<ApiItem href="#dbexceptionscannotpreparestatement-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionscheckexpressionrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionscolumntyperejectsautoincrement-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionscolumntyperejectsscale-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionscolumntyperequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsconflicttargetcolumnrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsconflictupdatecolumnrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsforeignkeycolumnsrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsgeneratedautoincrementconflict-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsgenerateddefaultconflict-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsincompletebindtypes-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidbindparameter-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidcheckexpression-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvaliddialectclass-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidgenerationexpression-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidgroupbyexpression-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidindexcolumns-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidindexdirections-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidindexwhere-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidlistexpression-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidorderbyexpression-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidsqlexpression-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidsqlexpressiontype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null}]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidunaryexpression-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidwhereconditions-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsinvalidwkb-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"reason","default":null}]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsmatchedparameternotfound-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsmaterializedviewsnotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsmissingdefinitionkey-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"key","default":null}]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsmissingforeignkeychecks-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsmissingsqlitedatabase-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsmysqlonconflictnotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsnestedtransactionchangeblocked-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsnoactivetransaction-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsreferencedcolumncountmismatch-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsreferencedcolumnsrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsreferencedtablerequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsreturningnotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsreturningrequirescolumn-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionssavepointsnotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionssqlitealterchecknotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionssqlitealtercolumnnotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionssqlitealterforeignkeynotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionssqlitealterprimarykeynotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionssqlitedropchecknotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionssqlitedropforeignkeynotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionssqlitedropprimarykeynotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionstablemusthavecolumn-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsunrecognizeddatatype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"dialect","default":null},{"type":"string","name":"column","default":null}]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsunsupportedoperator-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"operator","default":null}]}>
</ApiItem>

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

<ApiItem href="#dbexceptionsupdatefieldcountmismatch-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#dbgeometryabstractgeometry-__tostring" visibility="public" name="__toString" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometryabstractgeometry-getsrid" visibility="public" name="getSrid" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometryabstractgeometry-gettype" visibility="public" name="getType" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometryabstractgeometry-towkt" visibility="public" name="toWkt" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="srid" type="int" default="0">
</ApiItem>

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

<ApiItem href="#dbgeometrygeometrycollection-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"geometries","default":null},{"type":"int","name":"srid","default":"0"}]}>
</ApiItem>
<ApiItem href="#dbgeometrygeometrycollection-getgeometries" visibility="public" name="getGeometries" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrygeometrycollection-gettype" visibility="public" name="getType" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrygeometrycollection-towkt" visibility="public" name="toWkt" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="geometries" type="array" default="">
</ApiItem>

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

- [`Phalcon\Contracts\Db\Geometry\Geometry`](/5.20/api/phalcon_contracts/#contractsdbgeometrygeometry)
- **`Phalcon\Db\Geometry\GeometryInterface`**

`Phalcon\Contracts\Db\Geometry\Geometry`

## Db\Geometry\LineString

Class

- [`Phalcon\Db\Geometry\AbstractGeometry`](#dbgeometryabstractgeometry)
- **`Phalcon\Db\Geometry\LineString`**

`Phalcon\Db\Column`

### Method Summary

<ApiItem href="#dbgeometrylinestring-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"points","default":null},{"type":"int","name":"srid","default":"0"}]}>
</ApiItem>
<ApiItem href="#dbgeometrylinestring-getpoints" visibility="public" name="getPoints" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrylinestring-gettype" visibility="public" name="getType" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrylinestring-pointswkt" visibility="public" name="pointsWkt" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrylinestring-towkt" visibility="public" name="toWkt" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="points" type="array" default="">
</ApiItem>

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

<ApiItem href="#dbgeometrymultilinestring-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"lineStrings","default":null},{"type":"int","name":"srid","default":"0"}]}>
</ApiItem>
<ApiItem href="#dbgeometrymultilinestring-getlinestrings" visibility="public" name="getLineStrings" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrymultilinestring-gettype" visibility="public" name="getType" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrymultilinestring-towkt" visibility="public" name="toWkt" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="lineStrings" type="array" default="">
</ApiItem>

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

<ApiItem href="#dbgeometrymultipoint-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"points","default":null},{"type":"int","name":"srid","default":"0"}]}>
</ApiItem>
<ApiItem href="#dbgeometrymultipoint-getpoints" visibility="public" name="getPoints" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrymultipoint-gettype" visibility="public" name="getType" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrymultipoint-towkt" visibility="public" name="toWkt" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="points" type="array" default="">
</ApiItem>

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

<ApiItem href="#dbgeometrymultipolygon-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"polygons","default":null},{"type":"int","name":"srid","default":"0"}]}>
</ApiItem>
<ApiItem href="#dbgeometrymultipolygon-getpolygons" visibility="public" name="getPolygons" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrymultipolygon-gettype" visibility="public" name="getType" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrymultipolygon-towkt" visibility="public" name="toWkt" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="polygons" type="array" default="">
</ApiItem>

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

<ApiItem href="#dbgeometrypoint-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"float","name":"x","default":null},{"type":"float","name":"y","default":null},{"type":"int","name":"srid","default":"0"}]}>
</ApiItem>
<ApiItem href="#dbgeometrypoint-coordswkt" visibility="public" name="coordsWkt" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrypoint-gettype" visibility="public" name="getType" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrypoint-getx" visibility="public" name="getX" returnType="float" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrypoint-gety" visibility="public" name="getY" returnType="float" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrypoint-towkt" visibility="public" name="toWkt" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="x" type="float" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="y" type="float" default="">
</ApiItem>

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

<ApiItem href="#dbgeometrypolygon-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"rings","default":null},{"type":"int","name":"srid","default":"0"}]}>
</ApiItem>
<ApiItem href="#dbgeometrypolygon-getrings" visibility="public" name="getRings" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrypolygon-gettype" visibility="public" name="getType" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrypolygon-ringswkt" visibility="public" name="ringsWkt" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrypolygon-towkt" visibility="public" name="toWkt" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="rings" type="array" default="">
</ApiItem>

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

<ApiItem href="#dbgeometrywkbparser-parse" visibility="public" name="parse" returnType="GeometryInterface" params={[{"type":"string","name":"raw","default":null}]}>
</ApiItem>
<ApiItem href="#dbgeometrywkbparser-readbyte" visibility="protected" name="readByte" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#dbgeometrywkbparser-readdouble" visibility="protected" name="readDouble" returnType="float" params={[{"type":"bool","name":"little","default":null}]}>
</ApiItem>
<ApiItem href="#dbgeometrywkbparser-readgeometry" visibility="protected" name="readGeometry" returnType="GeometryInterface" params={[{"type":"int","name":"outerSrid","default":null},{"type":"int","name":"depth","default":"0"}]}>
</ApiItem>
<ApiItem href="#dbgeometrywkbparser-readpoint" visibility="protected" name="readPoint" returnType="Point" params={[{"type":"bool","name":"little","default":null},{"type":"bool","name":"hasZ","default":null},{"type":"bool","name":"hasM","default":null},{"type":"int","name":"srid","default":null}]}>
</ApiItem>
<ApiItem href="#dbgeometrywkbparser-readpointlist" visibility="protected" name="readPointList" returnType="array" params={[{"type":"bool","name":"little","default":null},{"type":"bool","name":"hasZ","default":null},{"type":"bool","name":"hasM","default":null}]}>
</ApiItem>
<ApiItem href="#dbgeometrywkbparser-readringlist" visibility="protected" name="readRingList" returnType="array" params={[{"type":"bool","name":"little","default":null},{"type":"bool","name":"hasZ","default":null},{"type":"bool","name":"hasM","default":null}]}>
</ApiItem>
<ApiItem href="#dbgeometrywkbparser-readuint32" visibility="protected" name="readUint32" returnType="int" params={[{"type":"bool","name":"little","default":null}]}>
</ApiItem>
<ApiItem href="#dbgeometrywkbparser-skipextraordinates" visibility="protected" name="skipExtraOrdinates" returnType="void" params={[{"type":"bool","name":"little","default":null},{"type":"bool","name":"hasZ","default":null},{"type":"bool","name":"hasM","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="buffer" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="length" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="position" type="int" default="0">
</ApiItem>

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

$connection->addIndex("co_invoices", null, $unique);
$connection->addIndex("co_invoices", null, $primary);
$connection->addIndex("co_invoices", null, $hidden);
```

- **`Phalcon\Db\Index`** - implements [`Phalcon\Db\IndexInterface`](#dbindexinterface)

`Phalcon\Db\Exceptions\InvalidIndexColumns` · `Phalcon\Db\Exceptions\InvalidIndexDirections` · `Phalcon\Db\Exceptions\InvalidIndexWhere`

### Method Summary

<ApiItem href="#dbindex-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"columnsOrDefinition","default":null},{"type":"string","name":"type","default":"\"\""}]}>
Phalcon\Db\Index constructor.
</ApiItem>
<ApiItem href="#dbindex-getcolumns" visibility="public" name="getColumns" returnType="array" params={[]}>
Index columns
</ApiItem>
<ApiItem href="#dbindex-getdirections" visibility="public" name="getDirections" returnType="array" params={[]}>
Returns the per-column sort directions array (`ASC` / `DESC`).
</ApiItem>
<ApiItem href="#dbindex-getname" visibility="public" name="getName" returnType="string" params={[]}>
Index name
</ApiItem>
<ApiItem href="#dbindex-gettype" visibility="public" name="getType" returnType="string" params={[]}>
Index type
</ApiItem>
<ApiItem href="#dbindex-getwhere" visibility="public" name="getWhere" returnType="string" params={[]}>
Returns the partial-index `WHERE` predicate, or an empty string when
</ApiItem>
<ApiItem href="#dbindex-isconcurrent" visibility="public" name="isConcurrent" returnType="bool" params={[]}>
Whether the index is built `CONCURRENTLY` (PostgreSQL only). MySQL
</ApiItem>
<ApiItem href="#dbindex-isinvisible" visibility="public" name="isInvisible" returnType="bool" params={[]}>
Whether the index is declared `INVISIBLE` (MySQL 8.0+). Invisible
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="columns" type="array" default="">
Index columns
</ApiItem>
<ApiItem kind="property" visibility="protected" name="concurrent" type="bool" default="false">
Whether to build the index without taking a strong lock that blocks
writes - emits `CONCURRENTLY` between `INDEX` and the index name on
PostgreSQL (`CREATE INDEX CONCURRENTLY name ON ...`). MySQL and
SQLite have no equivalent and ignore the flag.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="directions" type="array" default="[]">
Per-column sort directions (`ASC` / `DESC`). Empty array means
"emit no per-column direction" - preserves the legacy plain
`(col1, col2)` rendering. When populated, entries shorter than
the columns list default to `ASC` for the missing positions.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="invisible" type="bool" default="false">
Whether the index is declared `INVISIBLE` (MySQL 8.0+). Invisible
indexes are ignored by the optimizer - useful for testing what
happens when an index is removed before actually dropping it.
PostgreSQL and SQLite have no equivalent and ignore the flag.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
Index name
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;&quot;">
Index type
</ApiItem>
<ApiItem kind="property" visibility="protected" name="where" type="string" default="&quot;&quot;">
Optional partial-index `WHERE` predicate. Supported by PostgreSQL and
SQLite (`CREATE INDEX ... WHERE <expr>`); MySQL has no partial-index
concept and its dialect ignores this value. Empty string means no
predicate.
</ApiItem>

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

Accepts either the legacy positional form `(name, columns, type)` or a
definition-array form `(name, ["columns" => [...], "type" => "...",
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
directions and dialects emit the columns plainly. When populated,
entries are aligned with `getColumns()`; missing trailing positions
default to `ASC` at emission time.

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
the index has none. Supported by PostgreSQL and SQLite; ignored by
the MySQL dialect (MySQL has no partial-index feature).

<h4 id="dbindex-isconcurrent"><code>isConcurrent()</code></h4>

```php
public function isConcurrent(): bool;
```

Whether the index is built `CONCURRENTLY` (PostgreSQL only). MySQL
and SQLite have no equivalent and ignore the flag.

<h4 id="dbindex-isinvisible"><code>isInvisible()</code></h4>

```php
public function isInvisible(): bool;
```

Whether the index is declared `INVISIBLE` (MySQL 8.0+). Invisible
indexes are ignored by the optimizer but still maintained, so they
can be flipped back to visible without a rebuild.

## Db\IndexInterface

Interface

Phalcon\Db\IndexInterface

- [`Phalcon\Contracts\Db\Index`](/5.20/api/phalcon_contracts/#contractsdbindex)
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

`Phalcon\Db\Profiler\Item` · `Phalcon\Db\Traits\ElapsedTimeTrait`

### Method Summary

<ApiItem href="#dbprofiler-getlastprofile" visibility="public" name="getLastProfile" returnType="Item" params={[]}>
Returns the last profile executed in the profiler
</ApiItem>
<ApiItem href="#dbprofiler-getmaxprofiles" visibility="public" name="getMaxProfiles" returnType="int" params={[]}>
Returns the configured maximum number of retained profiles
</ApiItem>
<ApiItem href="#dbprofiler-getnumbertotalstatements" visibility="public" name="getNumberTotalStatements" returnType="int" params={[]}>
Returns the total number of SQL statements processed
</ApiItem>
<ApiItem href="#dbprofiler-getprofiles" visibility="public" name="getProfiles" returnType="Item[]" params={[]}>
Returns all the processed profiles
</ApiItem>
<ApiItem href="#dbprofiler-gettotalelapsednanoseconds" visibility="public" name="getTotalElapsedNanoseconds" returnType="float" params={[]}>
Returns the total time in nanoseconds spent by the profiles
</ApiItem>
<ApiItem href="#dbprofiler-reset" visibility="public" name="reset" returnType="static" params={[]}>
Resets the profiler, cleaning up all the profiles
</ApiItem>
<ApiItem href="#dbprofiler-setmaxprofiles" visibility="public" name="setMaxProfiles" returnType="static" params={[{"type":"int","name":"maxProfiles","default":null}]}>
Sets the maximum number of retained profiles. 0 disables the cap
</ApiItem>
<ApiItem href="#dbprofiler-startprofile" visibility="public" name="startProfile" returnType="static" params={[{"type":"string","name":"sqlStatement","default":null},{"type":"array","name":"sqlVariables","default":"[]"},{"type":"array","name":"sqlBindTypes","default":"[]"}]}>
Starts the profile of a SQL sentence
</ApiItem>
<ApiItem href="#dbprofiler-stopprofile" visibility="public" name="stopProfile" returnType="static" params={[]}>
Stops the active profile
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="activeProfile" type="Item" default="">
Active Item
</ApiItem>
<ApiItem kind="property" visibility="protected" name="allProfiles" type="Item[]" default="">
All the Items in the active profile
</ApiItem>
<ApiItem kind="property" visibility="protected" name="maxProfiles" type="int" default="0">
Maximum number of profiles to retain. 0 (default) keeps the
original unbounded behavior; a positive value drops the oldest
profile FIFO before a new one is appended.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="totalNanoseconds" type="float" default="0">
Total time spent by all profiles to complete in nanoseconds
</ApiItem>

### Methods

<h4 id="dbprofiler-getlastprofile"><code>getLastProfile()</code></h4>

```php
public function getLastProfile(): Item;
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
public function getProfiles(): Item[];
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

`Phalcon\Db\Traits\ElapsedTimeTrait`

### Method Summary

<ApiItem href="#dbprofileritem-getfinaltime" visibility="public" name="getFinalTime" returnType="float" params={[]}>
Return the timestamp when the profile ended
</ApiItem>
<ApiItem href="#dbprofileritem-getinitialtime" visibility="public" name="getInitialTime" returnType="float" params={[]}>
Return the timestamp when the profile started
</ApiItem>
<ApiItem href="#dbprofileritem-getsqlbindtypes" visibility="public" name="getSqlBindTypes" returnType="array" params={[]}>
Return the SQL bind types related to the profile
</ApiItem>
<ApiItem href="#dbprofileritem-getsqlstatement" visibility="public" name="getSqlStatement" returnType="string" params={[]}>
Return the SQL statement related to the profile
</ApiItem>
<ApiItem href="#dbprofileritem-getsqlvariables" visibility="public" name="getSqlVariables" returnType="array" params={[]}>
Return the SQL variables related to the profile
</ApiItem>
<ApiItem href="#dbprofileritem-gettotalelapsednanoseconds" visibility="public" name="getTotalElapsedNanoseconds" returnType="float" params={[]}>
Returns the total time in nanoseconds spent by the profile
</ApiItem>
<ApiItem href="#dbprofileritem-setfinaltime" visibility="public" name="setFinalTime" returnType="static" params={[{"type":"float","name":"finalTime","default":null}]}>
Return the timestamp when the profile ended
</ApiItem>
<ApiItem href="#dbprofileritem-setinitialtime" visibility="public" name="setInitialTime" returnType="static" params={[{"type":"float","name":"initialTime","default":null}]}>
Return the timestamp when the profile started
</ApiItem>
<ApiItem href="#dbprofileritem-setsqlbindtypes" visibility="public" name="setSqlBindTypes" returnType="static" params={[{"type":"array","name":"sqlBindTypes","default":null}]}>
Return the SQL bind types related to the profile
</ApiItem>
<ApiItem href="#dbprofileritem-setsqlstatement" visibility="public" name="setSqlStatement" returnType="static" params={[{"type":"string","name":"sqlStatement","default":null}]}>
Return the SQL statement related to the profile
</ApiItem>
<ApiItem href="#dbprofileritem-setsqlvariables" visibility="public" name="setSqlVariables" returnType="static" params={[{"type":"array","name":"sqlVariables","default":null}]}>
Return the SQL variables related to the profile
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="finalTime" type="double" default="">
Timestamp when the profile ended
</ApiItem>
<ApiItem kind="property" visibility="protected" name="initialTime" type="double" default="">
Timestamp when the profile started
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlBindTypes" type="array" default="">
SQL bind types related to the profile
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlStatement" type="string" default="">
SQL statement related to the profile
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlVariables" type="array" default="">
SQL variables related to the profile
</ApiItem>

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

<ApiItem href="#dbrawvalue-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"value","default":null}]}>
Phalcon\Db\RawValue constructor
</ApiItem>
<ApiItem href="#dbrawvalue-__tostring" visibility="public" name="__toString" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#dbrawvalue-getvalue" visibility="public" name="getValue" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="value" type="string" default="">
Raw value without quoting or formatting
</ApiItem>

### Methods

<h4 id="dbrawvalue-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $value );
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

`Phalcon\Db\Exceptions\ForeignKeyColumnsRequired` · `Phalcon\Db\Exceptions\ReferencedColumnCountMismatch` · `Phalcon\Db\Exceptions\ReferencedColumnsRequired` · `Phalcon\Db\Exceptions\ReferencedTableRequired`

### Method Summary

<ApiItem href="#dbreference-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"definition","default":null}]}>
Phalcon\Db\Reference constructor
</ApiItem>
<ApiItem href="#dbreference-getcolumns" visibility="public" name="getColumns" returnType="array" params={[]}>
Local reference columns
</ApiItem>
<ApiItem href="#dbreference-getname" visibility="public" name="getName" returnType="string" params={[]}>
Constraint name
</ApiItem>
<ApiItem href="#dbreference-getondelete" visibility="public" name="getOnDelete" returnType="string|null" params={[]}>
ON DELETE
</ApiItem>
<ApiItem href="#dbreference-getonupdate" visibility="public" name="getOnUpdate" returnType="string|null" params={[]}>
ON UPDATE
</ApiItem>
<ApiItem href="#dbreference-getreferencedcolumns" visibility="public" name="getReferencedColumns" returnType="array" params={[]}>
Referenced Columns
</ApiItem>
<ApiItem href="#dbreference-getreferencedschema" visibility="public" name="getReferencedSchema" returnType="string|null" params={[]}>
Referenced Schema
</ApiItem>
<ApiItem href="#dbreference-getreferencedtable" visibility="public" name="getReferencedTable" returnType="string" params={[]}>
Referenced Table
</ApiItem>
<ApiItem href="#dbreference-getschemaname" visibility="public" name="getSchemaName" returnType="string|null" params={[]}>
Schema name
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="columns" type="array" default="">
Local reference columns
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
Constraint name
</ApiItem>
<ApiItem kind="property" visibility="protected" name="onDelete" type="string" default="">
ON DELETE
</ApiItem>
<ApiItem kind="property" visibility="protected" name="onUpdate" type="string" default="">
ON UPDATE
</ApiItem>
<ApiItem kind="property" visibility="protected" name="referencedColumns" type="array" default="">
Referenced Columns
</ApiItem>
<ApiItem kind="property" visibility="protected" name="referencedSchema" type="string" default="">
Referenced Schema
</ApiItem>
<ApiItem kind="property" visibility="protected" name="referencedTable" type="string" default="">
Referenced Table
</ApiItem>
<ApiItem kind="property" visibility="protected" name="schemaName" type="string" default="">
Schema name
</ApiItem>

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

- [`Phalcon\Contracts\Db\Reference`](/5.20/api/phalcon_contracts/#contractsdbreference)
- **`Phalcon\Db\ReferenceInterface`**

`Phalcon\Contracts\Db\Reference`

## Db\ResultInterface

Interface

Phalcon\Db\ResultInterface

- [`Phalcon\Contracts\Db\Result`](/5.20/api/phalcon_contracts/#contractsdbresult)
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

`Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\ResultInterface`

### Method Summary

<ApiItem href="#dbresultpdoresult-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"AdapterInterface","name":"connection","default":null},{"type":"\\PDOStatement","name":"result","default":null},{"type":"mixed","name":"sqlStatement","default":"null"},{"type":"mixed","name":"bindParams","default":"null"},{"type":"mixed","name":"bindTypes","default":"null"}]}>
Phalcon\Db\Result\Pdo constructor
</ApiItem>
<ApiItem href="#dbresultpdoresult-dataseek" visibility="public" name="dataSeek" returnType="void" params={[{"type":"int","name":"number","default":null}]}>
Moves internal resultset cursor to another position letting us to fetch a
</ApiItem>
<ApiItem href="#dbresultpdoresult-execute" visibility="public" name="execute" returnType="bool" params={[]}>
Allows to execute the statement again. Some database systems don't
</ApiItem>
<ApiItem href="#dbresultpdoresult-fetch" visibility="public" name="fetch" returnType="" params={[{"type":"int|null","name":"fetchStyle","default":"null"},{"type":"int","name":"cursorOrientation","default":"Enum::FETCH_ORI_NEXT"},{"type":"int","name":"cursorOffset","default":"0"}]}>
Fetches an array/object of strings that corresponds to the fetched row,
</ApiItem>
<ApiItem href="#dbresultpdoresult-fetchall" visibility="public" name="fetchAll" returnType="array" params={[{"type":"int","name":"mode","default":"Enum::FETCH_DEFAULT"},{"type":"mixed","name":"fetchArgument","default":"Enum::FETCH_ORI_NEXT"},{"type":"mixed","name":"constructorArgs","default":"null"}]}>
Returns an array of arrays containing all the records in the result
</ApiItem>
<ApiItem href="#dbresultpdoresult-fetcharray" visibility="public" name="fetchArray" returnType="" params={[]}>
Returns an array of strings that corresponds to the fetched row, or FALSE
</ApiItem>
<ApiItem href="#dbresultpdoresult-getinternalresult" visibility="public" name="getInternalResult" returnType="\PDOStatement" params={[]}>
Gets the internal PDO result object
</ApiItem>
<ApiItem href="#dbresultpdoresult-numrows" visibility="public" name="numRows" returnType="int" params={[]}>
Gets number of rows returned by a resultset
</ApiItem>
<ApiItem href="#dbresultpdoresult-setfetchmode" visibility="public" name="setFetchMode" returnType="bool" params={[{"type":"int","name":"fetchMode","default":null},{"type":"mixed","name":"colNoOrClassNameOrObject","default":"null"},{"type":"mixed","name":"ctorargs","default":"null"}]}>
Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="bindParams" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="bindTypes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="connection" type="AdapterInterface" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="fetchMode" type="int" default="Enum::FETCH_DEFAULT">
Active fetch mode
</ApiItem>
<ApiItem kind="property" visibility="protected" name="pdoStatement" type="\PDOStatement" default="">
Internal resultset
</ApiItem>
<ApiItem kind="property" visibility="protected" name="result" type="mixed" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="rowCount" type="int|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlStatement" type="string|null" default="null">
</ApiItem>

### Methods

<h4 id="dbresultpdoresult-__construct"><code>__construct()</code></h4>

```php
public function __construct(
AdapterInterface $connection,
\PDOStatement $result,
mixed $sqlStatement = null,
mixed $bindParams = null,
mixed $bindTypes = null
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
);
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
mixed $constructorArgs = null
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
public function fetchArray();
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
public function getInternalResult(): \PDOStatement;
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
mixed $colNoOrClassNameOrObject = null,
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

<ApiItem href="#dbtraitselapsedtimetrait-gettotalelapsedmilliseconds" visibility="public" name="getTotalElapsedMilliseconds" returnType="float" params={[]}>
Returns the total time in milliseconds spent by the profiles
</ApiItem>
<ApiItem href="#dbtraitselapsedtimetrait-gettotalelapsednanoseconds" visibility="public" name="getTotalElapsedNanoseconds" returnType="float" params={[]}>
Returns the total time in nanoseconds spent by the profiles. Implemented
</ApiItem>
<ApiItem href="#dbtraitselapsedtimetrait-gettotalelapsedseconds" visibility="public" name="getTotalElapsedSeconds" returnType="float" params={[]}>
Returns the total time in seconds spent by the profiles
</ApiItem>

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

Source: https://docs.phalcon.io/5.20/api/phalcon_db/index.mdx
