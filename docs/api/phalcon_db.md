---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Db\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/AbstractAdapter.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Db\Adapter\AbstractAdapter`** — implements [`Phalcon\Db\Adapter\AdapterInterface`](#dbadapteradapterinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)
    - [`Phalcon\Db\Adapter\Pdo\AbstractPdo`](#dbadapterpdoabstractpdo)

</div>

__Uses__ `Phalcon\Db\CheckInterface` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\CannotInsertWithoutData` · `Phalcon\Db\Exceptions\IncompleteBindTypes` · `Phalcon\Db\Exceptions\InvalidWhereConditions` · `Phalcon\Db\Exceptions\NestedTransactionChangeBlocked` · `Phalcon\Db\Exceptions\SavepointsNotSupported` · `Phalcon\Db\Exceptions\TableMustHaveColumn` · `Phalcon\Db\Exceptions\UpdateFieldCountMismatch` · `Phalcon\Db\Index` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbadapterabstractadapter-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $descriptor )</code>
<span class="desc">Phalcon\Db\Adapter constructor</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-addcheck">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
)</code>
<span class="desc">Adds a CHECK constraint to a table. MySQL 8.0.16+ and PostgreSQL</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-addcolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
)</code>
<span class="desc">Adds a column to a table</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
)</code>
<span class="desc">Adds a foreign key to a table</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-addindex">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Adds an index to a table</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-addprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Adds a primary key to a table</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-creatematerializedview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">createMaterializedView(
    string $viewName,
    array $definition,
    string $schemaName = null
)</code>
<span class="desc">Creates a materialized view (PostgreSQL only - MySQL and SQLite</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-createsavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">createSavepoint( string $name )</code>
<span class="desc">Creates a new savepoint</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-createtable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">createTable(
    string $tableName,
    string $schemaName,
    array $definition
)</code>
<span class="desc">Creates a table</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-createview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">createView(
    string $viewName,
    array $definition,
    string $schemaName = null
)</code>
<span class="desc">Creates a view</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">delete(
    mixed $table,
    string $whereCondition = null,
    array $placeholders = [],
    array $dataTypes = []
)</code>
<span class="desc">Deletes data from a table using custom RBDM SQL syntax</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">IndexInterface[]</code>
<code class="sig">describeIndexes(
    string $table,
    string $schema = null
)</code>
<span class="desc">Lists table indexes</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">ReferenceInterface[]</code>
<code class="sig">describeReferences(
    string $table,
    string $schema = null
)</code>
<span class="desc">Lists table references</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-dropcheck">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
)</code>
<span class="desc">Drops a CHECK constraint from a table. SQLite throws.</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-dropcolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
)</code>
<span class="desc">Drops a column from a table</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-dropforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
)</code>
<span class="desc">Drops a foreign key from a table</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-dropindex">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropIndex(
    string $tableName,
    string $schemaName,
    mixed $indexName
)</code>
<span class="desc">Drop an index from a table</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-dropmaterializedview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Drops a materialized view (PostgreSQL only).</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-dropprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropPrimaryKey(
    string $tableName,
    string $schemaName
)</code>
<span class="desc">Drops a table&#039;s primary key</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-droptable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropTable(
    string $tableName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Drops a table from a schema/database</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-dropview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Drops a view</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-escapeidentifier">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">escapeIdentifier( mixed $identifier )</code>
<span class="desc">Escapes a column/table/schema name</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchAll(
    string $sqlQuery,
    int $fetchMode = Enum::FETCH_ASSOC,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Dumps the complete result of a query into an array</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-fetchcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string|bool</code>
<code class="sig">fetchColumn(
    string $sqlQuery,
    array $placeholders = [],
    mixed $column = 0
)</code>
<span class="desc">Returns the n&#039;th field of first row in a SQL query result</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-fetchone">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchOne(
    string $sqlQuery,
    mixed $fetchMode = Enum::FETCH_ASSOC,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Returns the first row in a SQL query result</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">forUpdate(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">Returns a SQL modified with a FOR UPDATE clause. The optional</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getcolumndefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getColumnDefinition( ColumnInterface $column )</code>
<span class="desc">Returns the SQL column definition from a column</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getcolumnlist">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getColumnList( mixed $columnList )</code>
<span class="desc">Gets a list of columns</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getconnectionid">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getConnectionId()</code>
<span class="desc">Gets the active connection unique identifier</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getdefaultidvalue">
<code class="vis vis-public">public</code>
<code class="ret">RawValue</code>
<code class="sig">getDefaultIdValue()</code>
<span class="desc">Returns the default identity value to be inserted in an identity column</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getdefaultvalue">
<code class="vis vis-public">public</code>
<code class="ret">RawValue</code>
<code class="sig">getDefaultValue()</code>
<span class="desc">Returns the default value to make the RBDM use the default value declared</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getdescriptor">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getDescriptor()</code>
<span class="desc">Return descriptor used to connect to the active database</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getdialect">
<code class="vis vis-public">public</code>
<code class="ret">DialectInterface</code>
<code class="sig">getDialect()</code>
<span class="desc">Returns internal dialect instance</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getdialecttype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getDialectType()</code>
<span class="desc">Name of the dialect used</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getnestedtransactionsavepointname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNestedTransactionSavepointName()</code>
<span class="desc">Returns the savepoint name to use for nested transactions</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getrealsqlstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getRealSQLStatement()</code>
<span class="desc">Active SQL statement in the object without replace bound parameters</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getsqlbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSQLBindTypes()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getsqlstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSQLStatement()</code>
<span class="desc">Active SQL statement in the object</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-getsqlvariables">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSQLVariables()</code>
<span class="desc">Active SQL variables in the object</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getType()</code>
<span class="desc">Type of database system the adapter is used for</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-insert">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">insert(
    string $table,
    array $values,
    mixed $fields = null,
    mixed $dataTypes = null
)</code>
<span class="desc">Inserts data into a table using custom RDBMS SQL syntax</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-insertasdict">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">insertAsDict(
    string $table,
    mixed $data,
    mixed $dataTypes = null
)</code>
<span class="desc">Inserts data into a table using custom RBDM SQL syntax</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-isnestedtransactionswithsavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isNestedTransactionsWithSavepoints()</code>
<span class="desc">Returns if nested transactions should use savepoints</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-limit">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">limit(
    string $sqlQuery,
    mixed $number
)</code>
<span class="desc">Appends a LIMIT clause to $sqlQuery argument</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-listtables">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">listTables( string $schemaName = null )</code>
<span class="desc">List all tables on a database</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-listviews">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">listViews( string $schemaName = null )</code>
<span class="desc">List all views on a database</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
)</code>
<span class="desc">Modifies a table column based on a definition</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-onconflictupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">onConflictUpdate(
    string $sqlQuery,
    array $conflictColumns,
    array $updateColumns
)</code>
<span class="desc">Appends an `ON CONFLICT (...) DO UPDATE SET col = excluded.col`</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-refreshmaterializedview">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">refreshMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $concurrent = false
)</code>
<span class="desc">Refreshes a materialized view (PostgreSQL only). Pass</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-releasesavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">releaseSavepoint( string $name )</code>
<span class="desc">Releases given savepoint</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-returning">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">returning(
    string $sqlQuery,
    array $columns
)</code>
<span class="desc">Appends a RETURNING clause to an INSERT/UPDATE/DELETE SQL statement</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-rollbacksavepoint">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">rollbackSavepoint( string $name )</code>
<span class="desc">Rollbacks given savepoint</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-setdialect">
<code class="vis vis-public">public</code>
<code class="sig">setDialect( DialectInterface $dialect )</code>
<span class="desc">Sets the dialect used to produce the SQL</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the event manager</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-setnestedtransactionswithsavepoints">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">setNestedTransactionsWithSavepoints( bool $nestedTransactionsWithSavepoints )</code>
<span class="desc">Set if nested transactions should use savepoints</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-setup">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setup( array $options )</code>
<span class="desc">Enables/disables options in the Database component</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">sharedLock(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">Returns a SQL modified with a shared-lock clause. The optional</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-supportsequences">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">supportSequences()</code>
<span class="desc">Check whether the database system requires a sequence to produce</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-supportsdefaultvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">supportsDefaultValue()</code>
<span class="desc">Check whether the database system support the DEFAULT</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-tableexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">tableExists(
    string $tableName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.table</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-tableoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">tableOptions(
    string $tableName,
    string $schemaName = null
)</code>
<span class="desc">Gets creation options from a table</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-update">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">update(
    string $table,
    mixed $fields,
    mixed $values,
    mixed $whereCondition = null,
    mixed $dataTypes = null
)</code>
<span class="desc">Updates data on a table using custom RBDM SQL syntax</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-updateasdict">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">updateAsDict(
    string $table,
    mixed $data,
    mixed $whereCondition = null,
    mixed $dataTypes = null
)</code>
<span class="desc">Updates data on a table using custom RBDM SQL syntax</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-useexplicitidvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">useExplicitIdValue()</code>
<span class="desc">Check whether the database system requires an explicit value for identity</span>
</a>
<a class="api-item" href="#dbadapterabstractadapter-viewexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">viewExists(
    string $viewName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.view</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$connectionConsecutive = 0` `int`

    Connection ID

-   `protected`{ .vis-protected } `$connectionId` `int`

    Active connection ID

-   `protected`{ .vis-protected } `$descriptor = []` `array`

    Descriptor used to connect to a database

-   `protected`{ .vis-protected } `$dialect` `object`

    Dialect instance

-   `protected`{ .vis-protected } `$dialectType` `string`

    Name of the dialect used

-   `protected`{ .vis-protected } `$eventsManager = null` `ManagerInterface|null`

    Event Manager

-   `protected`{ .vis-protected } `$realSqlStatement` `string`

    The real SQL statement - what was executed

-   `protected`{ .vis-protected } `$sqlBindTypes = []` `array`

    Active SQL Bind Types

-   `protected`{ .vis-protected } `$sqlStatement` `string`

    Active SQL Statement

-   `protected`{ .vis-protected } `$sqlVariables = []` `array`

    Active SQL bound parameter variables

-   `protected`{ .vis-protected } `$transactionLevel = 0` `int`

    Current transaction level

-   `protected`{ .vis-protected } `$transactionsWithSavepoints = false` `bool`

    Whether the database supports transactions with save points

-   `protected`{ .vis-protected } `$type` `string`

    Type of database system the adapter is used for

</div>

### Methods

<div class="api-group">Public · 66</div>

#### `__construct()` { #dbadapterabstractadapter-__construct }

```php
public function __construct( array $descriptor );
```

Phalcon\Db\Adapter constructor

#### `addCheck()` { #dbadapterabstractadapter-addcheck }

```php
public function addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
): bool;
```

Adds a CHECK constraint to a table. MySQL 8.0.16+ and PostgreSQL
issue `ALTER TABLE ... ADD CONSTRAINT ... CHECK (...)`; SQLite throws.

#### `addColumn()` { #dbadapterabstractadapter-addcolumn }

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): bool;
```

Adds a column to a table

#### `addForeignKey()` { #dbadapterabstractadapter-addforeignkey }

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): bool;
```

Adds a foreign key to a table

#### `addIndex()` { #dbadapterabstractadapter-addindex }

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): bool;
```

Adds an index to a table

#### `addPrimaryKey()` { #dbadapterabstractadapter-addprimarykey }

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): bool;
```

Adds a primary key to a table

#### `createMaterializedView()` { #dbadapterabstractadapter-creatematerializedview }

```php
public function createMaterializedView(
    string $viewName,
    array $definition,
    string $schemaName = null
): bool;
```

Creates a materialized view (PostgreSQL only - MySQL and SQLite
throw via the dialect).

#### `createSavepoint()` { #dbadapterabstractadapter-createsavepoint }

```php
public function createSavepoint( string $name ): bool;
```

Creates a new savepoint

#### `createTable()` { #dbadapterabstractadapter-createtable }

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): bool;
```

Creates a table

#### `createView()` { #dbadapterabstractadapter-createview }

```php
public function createView(
    string $viewName,
    array $definition,
    string $schemaName = null
): bool;
```

Creates a view

#### `delete()` { #dbadapterabstractadapter-delete }

```php
public function delete(
    mixed $table,
    string $whereCondition = null,
    array $placeholders = [],
    array $dataTypes = []
): bool;
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

#### `describeIndexes()` { #dbadapterabstractadapter-describeindexes }

```php
public function describeIndexes(
    string $table,
    string $schema = null
): IndexInterface[];
```

Lists table indexes

```php
print_r(
    $connection->describeIndexes("robots_parts")
);
```

#### `describeReferences()` { #dbadapterabstractadapter-describereferences }

```php
public function describeReferences(
    string $table,
    string $schema = null
): ReferenceInterface[];
```

Lists table references

```php
print_r(
    $connection->describeReferences("robots_parts")
);
```

#### `dropCheck()` { #dbadapterabstractadapter-dropcheck }

```php
public function dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
): bool;
```

Drops a CHECK constraint from a table. SQLite throws.

#### `dropColumn()` { #dbadapterabstractadapter-dropcolumn }

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): bool;
```

Drops a column from a table

#### `dropForeignKey()` { #dbadapterabstractadapter-dropforeignkey }

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): bool;
```

Drops a foreign key from a table

#### `dropIndex()` { #dbadapterabstractadapter-dropindex }

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    mixed $indexName
): bool;
```

Drop an index from a table

#### `dropMaterializedView()` { #dbadapterabstractadapter-dropmaterializedview }

```php
public function dropMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
): bool;
```

Drops a materialized view (PostgreSQL only).

#### `dropPrimaryKey()` { #dbadapterabstractadapter-dropprimarykey }

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): bool;
```

Drops a table's primary key

#### `dropTable()` { #dbadapterabstractadapter-droptable }

```php
public function dropTable(
    string $tableName,
    string $schemaName = null,
    bool $ifExists = true
): bool;
```

Drops a table from a schema/database

#### `dropView()` { #dbadapterabstractadapter-dropview }

```php
public function dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
): bool;
```

Drops a view

#### `escapeIdentifier()` { #dbadapterabstractadapter-escapeidentifier }

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

#### `fetchAll()` { #dbadapterabstractadapter-fetchall }

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
// Getting all robots with associative indexes only
$robots = $connection->fetchAll(
    "SELECT * FROM robots",
    \Phalcon\Db\Enum::FETCH_ASSOC
);

foreach ($robots as $robot) {
    print_r($robot);
}

 // Getting all robots that contains word "robot" withing the name
$robots = $connection->fetchAll(
    "SELECT * FROM robots WHERE name LIKE :name",
    \Phalcon\Db\Enum::FETCH_ASSOC,
    [
        "name" => "%robot%",
    ]
);
foreach($robots as $robot) {
    print_r($robot);
}
```

#### `fetchColumn()` { #dbadapterabstractadapter-fetchcolumn }

```php
public function fetchColumn(
    string $sqlQuery,
    array $placeholders = [],
    mixed $column = 0
): string|bool;
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

#### `fetchOne()` { #dbadapterabstractadapter-fetchone }

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
// Getting first robot
$robot = $connection->fetchOne("SELECT * FROM robots");
print_r($robot);

// Getting first robot with associative indexes only
$robot = $connection->fetchOne(
    "SELECT * FROM robots",
    \Phalcon\Db\Enum::FETCH_ASSOC
);
print_r($robot);
```

#### `forUpdate()` { #dbadapterabstractadapter-forupdate }

```php
public function forUpdate(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause. The optional
`modifier` is passed straight to the dialect (use `Dialect::LOCK_NOWAIT`
/ `Dialect::LOCK_SKIP_LOCKED` / `Dialect::LOCK_NONE`).

#### `getColumnDefinition()` { #dbadapterabstractadapter-getcolumndefinition }

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Returns the SQL column definition from a column

#### `getColumnList()` { #dbadapterabstractadapter-getcolumnlist }

```php
public function getColumnList( mixed $columnList ): string;
```

Gets a list of columns

#### `getConnectionId()` { #dbadapterabstractadapter-getconnectionid }

```php
public function getConnectionId(): int;
```

Gets the active connection unique identifier

#### `getDefaultIdValue()` { #dbadapterabstractadapter-getdefaultidvalue }

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

#### `getDefaultValue()` { #dbadapterabstractadapter-getdefaultvalue }

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

#### `getDescriptor()` { #dbadapterabstractadapter-getdescriptor }

```php
public function getDescriptor(): array;
```

Return descriptor used to connect to the active database

#### `getDialect()` { #dbadapterabstractadapter-getdialect }

```php
public function getDialect(): DialectInterface;
```

Returns internal dialect instance

#### `getDialectType()` { #dbadapterabstractadapter-getdialecttype }

```php
public function getDialectType(): string;
```

Name of the dialect used

#### `getEventsManager()` { #dbadapterabstractadapter-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `getNestedTransactionSavepointName()` { #dbadapterabstractadapter-getnestedtransactionsavepointname }

```php
public function getNestedTransactionSavepointName(): string;
```

Returns the savepoint name to use for nested transactions

#### `getRealSQLStatement()` { #dbadapterabstractadapter-getrealsqlstatement }

```php
public function getRealSQLStatement(): string;
```

Active SQL statement in the object without replace bound parameters

#### `getSQLBindTypes()` { #dbadapterabstractadapter-getsqlbindtypes }

```php
public function getSQLBindTypes(): array;
```

Active SQL statement in the object

#### `getSQLStatement()` { #dbadapterabstractadapter-getsqlstatement }

```php
public function getSQLStatement(): string;
```

Active SQL statement in the object

#### `getSQLVariables()` { #dbadapterabstractadapter-getsqlvariables }

```php
public function getSQLVariables(): array;
```

Active SQL variables in the object

#### `getType()` { #dbadapterabstractadapter-gettype }

```php
public function getType(): string;
```

Type of database system the adapter is used for

#### `insert()` { #dbadapterabstractadapter-insert }

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
// Inserting a new robot
$success = $connection->insert(
    "robots",
    ["Astro Boy", 1952],
    ["name", "year"]
);

// Next SQL sentence is sent to the database system
INSERT INTO `robots` (`name`, `year`) VALUES ("Astro boy", 1952);
```

#### `insertAsDict()` { #dbadapterabstractadapter-insertasdict }

```php
public function insertAsDict(
    string $table,
    mixed $data,
    mixed $dataTypes = null
): bool;
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

#### `isNestedTransactionsWithSavepoints()` { #dbadapterabstractadapter-isnestedtransactionswithsavepoints }

```php
public function isNestedTransactionsWithSavepoints(): bool;
```

Returns if nested transactions should use savepoints

#### `limit()` { #dbadapterabstractadapter-limit }

```php
public function limit(
    string $sqlQuery,
    mixed $number
): string;
```

Appends a LIMIT clause to $sqlQuery argument

```php
echo $connection->limit("SELECT * FROM robots", 5);
```

#### `listTables()` { #dbadapterabstractadapter-listtables }

```php
public function listTables( string $schemaName = null ): array;
```

List all tables on a database

```php
print_r(
    $connection->listTables("blog")
);
```

#### `listViews()` { #dbadapterabstractadapter-listviews }

```php
public function listViews( string $schemaName = null ): array;
```

List all views on a database

```php
print_r(
    $connection->listViews("blog")
);
```

#### `modifyColumn()` { #dbadapterabstractadapter-modifycolumn }

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
): bool;
```

Modifies a table column based on a definition

#### `onConflictUpdate()` { #dbadapterabstractadapter-onconflictupdate }

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

#### `refreshMaterializedView()` { #dbadapterabstractadapter-refreshmaterializedview }

```php
public function refreshMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $concurrent = false
): bool;
```

Refreshes a materialized view (PostgreSQL only). Pass
`concurrent = true` for non-blocking refresh.

#### `releaseSavepoint()` { #dbadapterabstractadapter-releasesavepoint }

```php
public function releaseSavepoint( string $name ): bool;
```

Releases given savepoint

#### `returning()` { #dbadapterabstractadapter-returning }

```php
public function returning(
    string $sqlQuery,
    array $columns
): string;
```

Appends a RETURNING clause to an INSERT/UPDATE/DELETE SQL statement
and returns the modified SQL. Supported by PostgreSQL and SQLite 3.35+;
MySQL throws (no RETURNING construct). Pass `["*"]` for `RETURNING *`.

#### `rollbackSavepoint()` { #dbadapterabstractadapter-rollbacksavepoint }

```php
public function rollbackSavepoint( string $name ): bool;
```

Rollbacks given savepoint

#### `setDialect()` { #dbadapterabstractadapter-setdialect }

```php
public function setDialect( DialectInterface $dialect );
```

Sets the dialect used to produce the SQL

#### `setEventsManager()` { #dbadapterabstractadapter-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the event manager

#### `setNestedTransactionsWithSavepoints()` { #dbadapterabstractadapter-setnestedtransactionswithsavepoints }

```php
public function setNestedTransactionsWithSavepoints( bool $nestedTransactionsWithSavepoints ): AdapterInterface;
```

Set if nested transactions should use savepoints

#### `setup()` { #dbadapterabstractadapter-setup }

```php
public static function setup( array $options ): void;
```

Enables/disables options in the Database component

#### `sharedLock()` { #dbadapterabstractadapter-sharedlock }

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a shared-lock clause. The optional
`modifier` is passed straight to the dialect (use
`Dialect::LOCK_NOWAIT` / `Dialect::LOCK_SKIP_LOCKED` for PostgreSQL).

#### `supportSequences()` { #dbadapterabstractadapter-supportsequences }

```php
public function supportSequences(): bool;
```

Check whether the database system requires a sequence to produce
auto-numeric values

#### `supportsDefaultValue()` { #dbadapterabstractadapter-supportsdefaultvalue }

```php
public function supportsDefaultValue(): bool;
```

Check whether the database system support the DEFAULT
keyword (SQLite does not support it)

@deprecated Will re removed in the next version

#### `tableExists()` { #dbadapterabstractadapter-tableexists }

```php
public function tableExists(
    string $tableName,
    string $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.table

```php
var_dump(
    $connection->tableExists("blog", "posts")
);
```

#### `tableOptions()` { #dbadapterabstractadapter-tableoptions }

```php
public function tableOptions(
    string $tableName,
    string $schemaName = null
): array;
```

Gets creation options from a table

```php
print_r(
    $connection->tableOptions("robots")
);
```

#### `update()` { #dbadapterabstractadapter-update }

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

#### `updateAsDict()` { #dbadapterabstractadapter-updateasdict }

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

#### `useExplicitIdValue()` { #dbadapterabstractadapter-useexplicitidvalue }

```php
public function useExplicitIdValue(): bool;
```

Check whether the database system requires an explicit value for identity
columns

#### `viewExists()` { #dbadapterabstractadapter-viewexists }

```php
public function viewExists(
    string $viewName,
    string $schemaName = null
): bool;
```

Generates SQL checking for the existence of a schema.view

```php
var_dump(
    $connection->viewExists("active_users", "posts")
);
```


## Db\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/AdapterInterface.zep){ .src-btn }

Phalcon\Db\Adapter\AdapterInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Db\Adapter\Adapter} instead.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Db\Adapter\Adapter`](phalcon_contracts.md#contractsdbadapteradapter)
    - **`Phalcon\Db\Adapter\AdapterInterface`**

</div>

__Uses__ `Phalcon\Contracts\Db\Adapter\Adapter`
{ .api-uses }


## Db\Adapter\PdoFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/PdoFactory.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Db\Adapter\PdoFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Support\Helper\Arr\Get`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbadapterpdofactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $services = [] )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#dbadapterpdofactory-load">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">load( mixed $config )</code>
<span class="desc">Factory to create an instance from a Config object</span>
</a>
<a class="api-item" href="#dbadapterpdofactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">newInstance(
    string $name,
    array $options = []
)</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#dbadapterpdofactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getExceptionClass()</code>
</a>
<a class="api-item" href="#dbadapterpdofactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getServices()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #dbadapterpdofactory-__construct }

```php
public function __construct( array $services = [] );
```

Constructor

#### `load()` { #dbadapterpdofactory-load }

```php
public function load( mixed $config ): AdapterInterface;
```

Factory to create an instance from a Config object

#### `newInstance()` { #dbadapterpdofactory-newinstance }

```php
public function newInstance(
    string $name,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #dbadapterpdofactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #dbadapterpdofactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Db\Adapter\Pdo\AbstractPdo

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/Pdo/AbstractPdo.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Db\Adapter\AbstractAdapter`](#dbadapterabstractadapter)
    - **`Phalcon\Db\Adapter\Pdo\AbstractPdo`**
        - [`Phalcon\Db\Adapter\Pdo\Mysql`](#dbadapterpdomysql)
        - [`Phalcon\Db\Adapter\Pdo\Postgresql`](#dbadapterpdopostgresql)
        - [`Phalcon\Db\Adapter\Pdo\Sqlite`](#dbadapterpdosqlite)

</div>

__Uses__ `Phalcon\Db\Adapter\AbstractAdapter` · `Phalcon\Db\Column` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\CannotPrepareStatement` · `Phalcon\Db\Exceptions\InvalidBindParameter` · `Phalcon\Db\Exceptions\MatchedParameterNotFound` · `Phalcon\Db\Exceptions\NoActiveTransaction` · `Phalcon\Db\ResultInterface` · `Phalcon\Db\Result\PdoResult` · `Phalcon\Events\ManagerInterface` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbadapterpdoabstractpdo-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $descriptor )</code>
<span class="desc">Constructor for Phalcon\Db\Adapter\Pdo</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-affectedrows">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">affectedRows()</code>
<span class="desc">Returns the number of affected rows by the latest INSERT/UPDATE/DELETE</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-begin">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">begin( bool $nesting = true )</code>
<span class="desc">Starts a transaction in the connection</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-close">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">close()</code>
<span class="desc">Closes the active connection returning success. Phalcon automatically</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-commit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">commit( bool $nesting = true )</code>
<span class="desc">Commits the active transaction in the connection</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">connect( array $descriptor = [] )</code>
<span class="desc">This method is automatically called in \Phalcon\Db\Adapter\Pdo</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-convertboundparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">convertBoundParams(
    string $sql,
    array $params = []
)</code>
<span class="desc">Converts bound parameters such as :name: or ?1 into PDO bind params ?</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-escapestring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">escapeString( string $str )</code>
<span class="desc">Escapes a value to avoid SQL injections according to the active charset</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-execute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">execute(
    string $sqlStatement,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Sends SQL statements to the database server returning the success state.</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-executeprepared">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement</code>
<code class="sig">executePrepared(
    \PDOStatement $statement,
    array $placeholders,
    array $dataTypes = []
)</code>
<span class="desc">Executes a prepared statement binding. This function uses integer indexes</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-geterrorinfo">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getErrorInfo()</code>
<span class="desc">Return the error info, if any</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-getinternalhandler">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getInternalHandler()</code>
<span class="desc">Return internal PDO handler</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-gettransactionlevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getTransactionLevel()</code>
<span class="desc">Returns the current transaction nesting level</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-isundertransaction">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isUnderTransaction()</code>
<span class="desc">Checks whether the connection is under a transaction</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-lastinsertid">
<code class="vis vis-public">public</code>
<code class="ret">string|bool</code>
<code class="sig">lastInsertId( string $name = null )</code>
<span class="desc">Returns the insert id for the auto_increment/serial column inserted in</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-prepare">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement</code>
<code class="sig">prepare( string $sqlStatement )</code>
<span class="desc">Returns a PDO prepared statement to be executed with &#039;executePrepared&#039;</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-query">
<code class="vis vis-public">public</code>
<code class="ret">ResultInterface|bool</code>
<code class="sig">query(
    string $sqlStatement,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Sends SQL statements to the database server returning the success state.</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-rollback">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">rollback( bool $nesting = true )</code>
<span class="desc">Rollbacks the active transaction in the connection</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-getdsndefaults">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getDsnDefaults()</code>
<span class="desc">Returns PDO adapter DSN defaults as a key-value map.</span>
</a>
<a class="api-item" href="#dbadapterpdoabstractpdo-preparerealsql">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">prepareRealSql(
    string $statement,
    array $parameters
)</code>
<span class="desc">Constructs the SQL statement (with parameters)</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `BIND_PATTERN = "/\\?([0-9]+)|:([a-zA-Z0-9_]+):/"` `string`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$affectedRows = 0` `int`

    Last affected rows

-   `protected`{ .vis-protected } `$pdo` `\PDO`

    PDO Handler

</div>

### Methods

<div class="api-group">Public · 18</div>

#### `__construct()` { #dbadapterpdoabstractpdo-__construct }

```php
public function __construct( array $descriptor );
```

Constructor for Phalcon\Db\Adapter\Pdo

#### `affectedRows()` { #dbadapterpdoabstractpdo-affectedrows }

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

#### `begin()` { #dbadapterpdoabstractpdo-begin }

```php
public function begin( bool $nesting = true ): bool;
```

Starts a transaction in the connection

#### `close()` { #dbadapterpdoabstractpdo-close }

```php
public function close(): void;
```

Closes the active connection returning success. Phalcon automatically
closes and destroys active connections when the request ends

#### `commit()` { #dbadapterpdoabstractpdo-commit }

```php
public function commit( bool $nesting = true ): bool;
```

Commits the active transaction in the connection

#### `connect()` { #dbadapterpdoabstractpdo-connect }

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

#### `convertBoundParams()` { #dbadapterpdoabstractpdo-convertboundparams }

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
        "SELECT * FROM robots WHERE name = :name:",
        [
            "Bender",
        ]
    )
);
```

#### `escapeString()` { #dbadapterpdoabstractpdo-escapestring }

```php
public function escapeString( string $str ): string;
```

Escapes a value to avoid SQL injections according to the active charset
in the connection

```php
$escapedStr = $connection->escapeString("some dangerous value");
```

#### `execute()` { #dbadapterpdoabstractpdo-execute }

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

#### `executePrepared()` { #dbadapterpdoabstractpdo-executeprepared }

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
    "SELECT * FROM robots WHERE name = :name"
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

#### `getErrorInfo()` { #dbadapterpdoabstractpdo-geterrorinfo }

```php
public function getErrorInfo(): array;
```

Return the error info, if any

#### `getInternalHandler()` { #dbadapterpdoabstractpdo-getinternalhandler }

```php
public function getInternalHandler(): mixed;
```

Return internal PDO handler

#### `getTransactionLevel()` { #dbadapterpdoabstractpdo-gettransactionlevel }

```php
public function getTransactionLevel(): int;
```

Returns the current transaction nesting level

#### `isUnderTransaction()` { #dbadapterpdoabstractpdo-isundertransaction }

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

#### `lastInsertId()` { #dbadapterpdoabstractpdo-lastinsertid }

```php
public function lastInsertId( string $name = null ): string|bool;
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

#### `prepare()` { #dbadapterpdoabstractpdo-prepare }

```php
public function prepare( string $sqlStatement ): \PDOStatement;
```

Returns a PDO prepared statement to be executed with 'executePrepared'

```php
use Phalcon\Db\Column;

$statement = $db->prepare(
    "SELECT * FROM robots WHERE name = :name"
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

#### `query()` { #dbadapterpdoabstractpdo-query }

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
    "SELECT * FROM robots WHERE type = 'mechanical'"
);

$resultset = $connection->query(
    "SELECT * FROM robots WHERE type = ?",
    [
        "mechanical",
    ]
);
```

#### `rollback()` { #dbadapterpdoabstractpdo-rollback }

```php
public function rollback( bool $nesting = true ): bool;
```

Rollbacks the active transaction in the connection

<div class="api-group">Protected · 2</div>

#### `getDsnDefaults()` { #dbadapterpdoabstractpdo-getdsndefaults }

```php
abstract protected function getDsnDefaults(): array;
```

Returns PDO adapter DSN defaults as a key-value map.

#### `prepareRealSql()` { #dbadapterpdoabstractpdo-preparerealsql }

```php
protected function prepareRealSql(
    string $statement,
    array $parameters
): void;
```

Constructs the SQL statement (with parameters)

@see https://stackoverflow.com/a/8403150


## Db\Adapter\Pdo\Mysql

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/Pdo/Mysql.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Db\Adapter\AbstractAdapter`](#dbadapterabstractadapter)
    - [`Phalcon\Db\Adapter\Pdo\AbstractPdo`](#dbadapterpdoabstractpdo)
        - **`Phalcon\Db\Adapter\Pdo\Mysql`**

</div>

__Uses__ `Phalcon\Db\Adapter\Pdo\AbstractPdo` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingForeignKeyChecks` · `Phalcon\Db\Index` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbadapterpdomysql-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
)</code>
<span class="desc">Adds a foreign key to a table</span>
</a>
<a class="api-item" href="#dbadapterpdomysql-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">ColumnInterface[]</code>
<code class="sig">describeColumns(
    string $table,
    string $schema = null
)</code>
<span class="desc">Returns an array of Phalcon\Db\Column objects describing a table</span>
</a>
<a class="api-item" href="#dbadapterpdomysql-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">IndexInterface[]</code>
<code class="sig">describeIndexes(
    string $table,
    string $schema = null
)</code>
<span class="desc">Lists table indexes</span>
</a>
<a class="api-item" href="#dbadapterpdomysql-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">ReferenceInterface[]</code>
<code class="sig">describeReferences(
    string $table,
    string $schema = null
)</code>
<span class="desc">Lists table references</span>
</a>
<a class="api-item" href="#dbadapterpdomysql-getdsndefaults">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getDsnDefaults()</code>
<span class="desc">Returns PDO adapter DSN defaults as a key-value map.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$dialectType = "mysql"` `string`

-   `protected`{ .vis-protected } `$type = "mysql"` `string`

</div>

### Methods

<div class="api-group">Public · 4</div>

#### `addForeignKey()` { #dbadapterpdomysql-addforeignkey }

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): bool;
```

Adds a foreign key to a table

#### `describeColumns()` { #dbadapterpdomysql-describecolumns }

```php
public function describeColumns(
    string $table,
    string $schema = null
): ColumnInterface[];
```

Returns an array of Phalcon\Db\Column objects describing a table

```php
print_r(
    $connection->describeColumns("posts")
);
```

#### `describeIndexes()` { #dbadapterpdomysql-describeindexes }

```php
public function describeIndexes(
    string $table,
    string $schema = null
): IndexInterface[];
```

Lists table indexes

```php
print_r(
    $connection->describeIndexes("robots_parts")
);
```

#### `describeReferences()` { #dbadapterpdomysql-describereferences }

```php
public function describeReferences(
    string $table,
    string $schema = null
): ReferenceInterface[];
```

Lists table references

```php
print_r(
    $connection->describeReferences("robots_parts")
);
```

<div class="api-group">Protected · 1</div>

#### `getDsnDefaults()` { #dbadapterpdomysql-getdsndefaults }

```php
protected function getDsnDefaults(): array;
```

Returns PDO adapter DSN defaults as a key-value map.


## Db\Adapter\Pdo\Postgresql

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/Pdo/Postgresql.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Db\Adapter\AbstractAdapter`](#dbadapterabstractadapter)
    - [`Phalcon\Db\Adapter\Pdo\AbstractPdo`](#dbadapterpdoabstractpdo)
        - **`Phalcon\Db\Adapter\Pdo\Postgresql`**

</div>

__Uses__ `Phalcon\Db\Adapter\Pdo\AbstractPdo` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\TableMustHaveColumn` · `Phalcon\Db\RawValue` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbadapterpdopostgresql-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $descriptor )</code>
<span class="desc">Constructor for Phalcon\Db\Adapter\Pdo\Postgresql</span>
</a>
<a class="api-item" href="#dbadapterpdopostgresql-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">connect( array $descriptor = [] )</code>
<span class="desc">This method is automatically called in Phalcon\Db\Adapter\Pdo</span>
</a>
<a class="api-item" href="#dbadapterpdopostgresql-createtable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">createTable(
    string $tableName,
    string $schemaName,
    array $definition
)</code>
<span class="desc">Creates a table</span>
</a>
<a class="api-item" href="#dbadapterpdopostgresql-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">ColumnInterface[]</code>
<code class="sig">describeColumns(
    string $table,
    string $schema = null
)</code>
<span class="desc">Returns an array of Phalcon\Db\Column objects describing a table</span>
</a>
<a class="api-item" href="#dbadapterpdopostgresql-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">ReferenceInterface[]</code>
<code class="sig">describeReferences(
    string $table,
    string $schema = null
)</code>
<span class="desc">Lists table references</span>
</a>
<a class="api-item" href="#dbadapterpdopostgresql-getdefaultidvalue">
<code class="vis vis-public">public</code>
<code class="ret">RawValue</code>
<code class="sig">getDefaultIdValue()</code>
<span class="desc">Returns the default identity value to be inserted in an identity column</span>
</a>
<a class="api-item" href="#dbadapterpdopostgresql-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
)</code>
<span class="desc">Modifies a table column based on a definition</span>
</a>
<a class="api-item" href="#dbadapterpdopostgresql-supportsequences">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">supportSequences()</code>
<span class="desc">Check whether the database system requires a sequence to produce</span>
</a>
<a class="api-item" href="#dbadapterpdopostgresql-useexplicitidvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">useExplicitIdValue()</code>
<span class="desc">Check whether the database system requires an explicit value for identity</span>
</a>
<a class="api-item" href="#dbadapterpdopostgresql-getdsndefaults">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getDsnDefaults()</code>
<span class="desc">Returns PDO adapter DSN defaults as a key-value map.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$dialectType = "postgresql"` `string`

-   `protected`{ .vis-protected } `$type = "pgsql"` `string`

</div>

### Methods

<div class="api-group">Public · 9</div>

#### `__construct()` { #dbadapterpdopostgresql-__construct }

```php
public function __construct( array $descriptor );
```

Constructor for Phalcon\Db\Adapter\Pdo\Postgresql

#### `connect()` { #dbadapterpdopostgresql-connect }

```php
public function connect( array $descriptor = [] ): void;
```

This method is automatically called in Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection.

#### `createTable()` { #dbadapterpdopostgresql-createtable }

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): bool;
```

Creates a table

#### `describeColumns()` { #dbadapterpdopostgresql-describecolumns }

```php
public function describeColumns(
    string $table,
    string $schema = null
): ColumnInterface[];
```

Returns an array of Phalcon\Db\Column objects describing a table

```php
print_r(
    $connection->describeColumns("posts")
);
```

#### `describeReferences()` { #dbadapterpdopostgresql-describereferences }

```php
public function describeReferences(
    string $table,
    string $schema = null
): ReferenceInterface[];
```

Lists table references

```php
print_r(
    $connection->describeReferences("robots_parts")
);
```

#### `getDefaultIdValue()` { #dbadapterpdopostgresql-getdefaultidvalue }

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

#### `modifyColumn()` { #dbadapterpdopostgresql-modifycolumn }

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
): bool;
```

Modifies a table column based on a definition

#### `supportSequences()` { #dbadapterpdopostgresql-supportsequences }

```php
public function supportSequences(): bool;
```

Check whether the database system requires a sequence to produce
auto-numeric values

#### `useExplicitIdValue()` { #dbadapterpdopostgresql-useexplicitidvalue }

```php
public function useExplicitIdValue(): bool;
```

Check whether the database system requires an explicit value for identity
columns

<div class="api-group">Protected · 1</div>

#### `getDsnDefaults()` { #dbadapterpdopostgresql-getdsndefaults }

```php
protected function getDsnDefaults(): array;
```

Returns PDO adapter DSN defaults as a key-value map.


## Db\Adapter\Pdo\Sqlite

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Adapter/Pdo/Sqlite.zep){ .src-btn }

Specific functions for the SQLite database system

```php
use Phalcon\Db\Adapter\Pdo\Sqlite;

$connection = new Sqlite(
    [
        "dbname" => "/tmp/test.sqlite",
    ]
);
```

<div class="api-tree" markdown>

- [`Phalcon\Db\Adapter\AbstractAdapter`](#dbadapterabstractadapter)
    - [`Phalcon\Db\Adapter\Pdo\AbstractPdo`](#dbadapterpdoabstractpdo)
        - **`Phalcon\Db\Adapter\Pdo\Sqlite`**

</div>

__Uses__ `Phalcon\Db\Adapter\Pdo\AbstractPdo` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingSqliteDatabase` · `Phalcon\Db\Index` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\Reference` · `Phalcon\Db\ReferenceInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbadapterpdosqlite-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $descriptor )</code>
<span class="desc">Constructor for Phalcon\Db\Adapter\Pdo\Sqlite</span>
</a>
<a class="api-item" href="#dbadapterpdosqlite-connect">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">connect( array $descriptor = [] )</code>
<span class="desc">This method is automatically called in Phalcon\Db\Adapter\Pdo</span>
</a>
<a class="api-item" href="#dbadapterpdosqlite-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">ColumnInterface[]</code>
<code class="sig">describeColumns(
    string $table,
    string $schema = null
)</code>
<span class="desc">Returns an array of Phalcon\Db\Column objects describing a table</span>
</a>
<a class="api-item" href="#dbadapterpdosqlite-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">IndexInterface[]</code>
<code class="sig">describeIndexes(
    string $table,
    string $schema = null
)</code>
<span class="desc">Lists table indexes</span>
</a>
<a class="api-item" href="#dbadapterpdosqlite-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">ReferenceInterface[]</code>
<code class="sig">describeReferences(
    string $table,
    string $schema = null
)</code>
<span class="desc">Lists table references</span>
</a>
<a class="api-item" href="#dbadapterpdosqlite-getdefaultvalue">
<code class="vis vis-public">public</code>
<code class="ret">RawValue</code>
<code class="sig">getDefaultValue()</code>
<span class="desc">Returns the default value to make the RBDM use the default value declared</span>
</a>
<a class="api-item" href="#dbadapterpdosqlite-supportsdefaultvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">supportsDefaultValue()</code>
<span class="desc">SQLite does not support the DEFAULT keyword</span>
</a>
<a class="api-item" href="#dbadapterpdosqlite-useexplicitidvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">useExplicitIdValue()</code>
<span class="desc">Check whether the database system requires an explicit value for identity</span>
</a>
<a class="api-item" href="#dbadapterpdosqlite-getdsndefaults">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getDsnDefaults()</code>
<span class="desc">Returns PDO adapter DSN defaults as a key-value map.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$dialectType = "sqlite"` `string`

-   `protected`{ .vis-protected } `$type = "sqlite"` `string`

</div>

### Methods

<div class="api-group">Public · 8</div>

#### `__construct()` { #dbadapterpdosqlite-__construct }

```php
public function __construct( array $descriptor );
```

Constructor for Phalcon\Db\Adapter\Pdo\Sqlite

#### `connect()` { #dbadapterpdosqlite-connect }

```php
public function connect( array $descriptor = [] ): void;
```

This method is automatically called in Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection.

#### `describeColumns()` { #dbadapterpdosqlite-describecolumns }

```php
public function describeColumns(
    string $table,
    string $schema = null
): ColumnInterface[];
```

Returns an array of Phalcon\Db\Column objects describing a table

```php
print_r(
    $connection->describeColumns("posts")
);
```

#### `describeIndexes()` { #dbadapterpdosqlite-describeindexes }

```php
public function describeIndexes(
    string $table,
    string $schema = null
): IndexInterface[];
```

Lists table indexes

```php
print_r(
    $connection->describeIndexes("robots_parts")
);
```

#### `describeReferences()` { #dbadapterpdosqlite-describereferences }

```php
public function describeReferences(
    string $table,
    string $schema = null
): ReferenceInterface[];
```

Lists table references

#### `getDefaultValue()` { #dbadapterpdosqlite-getdefaultvalue }

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

#### `supportsDefaultValue()` { #dbadapterpdosqlite-supportsdefaultvalue }

```php
public function supportsDefaultValue(): bool;
```

SQLite does not support the DEFAULT keyword

@deprecated Will re removed in the next version

#### `useExplicitIdValue()` { #dbadapterpdosqlite-useexplicitidvalue }

```php
public function useExplicitIdValue(): bool;
```

Check whether the database system requires an explicit value for identity
columns

<div class="api-group">Protected · 1</div>

#### `getDsnDefaults()` { #dbadapterpdosqlite-getdsndefaults }

```php
protected function getDsnDefaults(): array;
```

Returns PDO adapter DSN defaults as a key-value map.


## Db\Check

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Check.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Db\Check`** — implements [`Phalcon\Db\CheckInterface`](#dbcheckinterface)

</div>

__Uses__ `Phalcon\Db\Exceptions\CheckExpressionRequired` · `Phalcon\Db\Exceptions\InvalidCheckExpression`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbcheck-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    array $definition
)</code>
<span class="desc">Phalcon\Db\Check constructor</span>
</a>
<a class="api-item" href="#dbcheck-getexpression">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getExpression()</code>
<span class="desc">Returns the CHECK expression</span>
</a>
<a class="api-item" href="#dbcheck-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Returns the constraint name (may be an empty string for unnamed)</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$expression` `string`

    The boolean SQL predicate this constraint enforces.

-   `protected`{ .vis-protected } `$name` `string`

    The CHECK constraint name. An empty string indicates an unnamed
    constraint - the dialect will emit the clause without a `CONSTRAINT`
    prefix in that case.

</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #dbcheck-__construct }

```php
public function __construct(
    string $name,
    array $definition
);
```

Phalcon\Db\Check constructor

#### `getExpression()` { #dbcheck-getexpression }

```php
public function getExpression(): string;
```

Returns the CHECK expression

#### `getName()` { #dbcheck-getname }

```php
public function getName(): string;
```

Returns the constraint name (may be an empty string for unnamed)


## Db\CheckInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/CheckInterface.zep){ .src-btn }

Phalcon\Db\CheckInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Db\Check} instead.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Db\Check`](phalcon_contracts.md#contractsdbcheck)
    - **`Phalcon\Db\CheckInterface`**

</div>

__Uses__ `Phalcon\Contracts\Db\Check`
{ .api-uses }


## Db\Column

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Column.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Db\Column`** — implements [`Phalcon\Db\ColumnInterface`](#dbcolumninterface)

</div>

__Uses__ `Phalcon\Db\Exceptions\ColumnTypeRejectsAutoIncrement` · `Phalcon\Db\Exceptions\ColumnTypeRejectsScale` · `Phalcon\Db\Exceptions\ColumnTypeRequired` · `Phalcon\Db\Exceptions\GeneratedAutoIncrementConflict` · `Phalcon\Db\Exceptions\GeneratedDefaultConflict` · `Phalcon\Db\Exceptions\InvalidGenerationExpression`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbcolumn-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    array $definition
)</code>
<span class="desc">Phalcon\Db\Column constructor</span>
</a>
<a class="api-item" href="#dbcolumn-getafterposition">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getAfterPosition()</code>
<span class="desc">Check whether field absolute to position in table</span>
</a>
<a class="api-item" href="#dbcolumn-getbindtype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getBindType()</code>
<span class="desc">Returns the type of bind handling</span>
</a>
<a class="api-item" href="#dbcolumn-getcomment">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getComment()</code>
<span class="desc">Column&#039;s comment</span>
</a>
<a class="api-item" href="#dbcolumn-getdefault">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getDefault()</code>
<span class="desc">Default column value</span>
</a>
<a class="api-item" href="#dbcolumn-getgenerationexpression">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getGenerationExpression()</code>
<span class="desc">Returns the generation expression for a generated/computed column.</span>
</a>
<a class="api-item" href="#dbcolumn-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Column&#039;s name</span>
</a>
<a class="api-item" href="#dbcolumn-getscale">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getScale()</code>
<span class="desc">Integer column number scale</span>
</a>
<a class="api-item" href="#dbcolumn-getsize">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig">getSize()</code>
<span class="desc">Integer column size</span>
</a>
<a class="api-item" href="#dbcolumn-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int|string</code>
<code class="sig">getType()</code>
<span class="desc">Column data type</span>
</a>
<a class="api-item" href="#dbcolumn-gettypereference">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getTypeReference()</code>
<span class="desc">Column data type reference</span>
</a>
<a class="api-item" href="#dbcolumn-gettypevalues">
<code class="vis vis-public">public</code>
<code class="ret">array|string</code>
<code class="sig">getTypeValues()</code>
<span class="desc">Column data type values</span>
</a>
<a class="api-item" href="#dbcolumn-hasdefault">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasDefault()</code>
<span class="desc">Check whether column has default value</span>
</a>
<a class="api-item" href="#dbcolumn-isarray">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isArray()</code>
<span class="desc">Whether the column is an array of its base type. Recognized by the</span>
</a>
<a class="api-item" href="#dbcolumn-isautoincrement">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isAutoIncrement()</code>
<span class="desc">Auto-Increment</span>
</a>
<a class="api-item" href="#dbcolumn-isfirst">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isFirst()</code>
<span class="desc">Check whether column have first position in table</span>
</a>
<a class="api-item" href="#dbcolumn-isgenerated">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isGenerated()</code>
<span class="desc">Whether the column is a generated/computed column.</span>
</a>
<a class="api-item" href="#dbcolumn-isgenerationstored">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isGenerationStored()</code>
<span class="desc">Whether a generated column is `STORED`. `false` means `VIRTUAL`.</span>
</a>
<a class="api-item" href="#dbcolumn-isinvisible">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isInvisible()</code>
<span class="desc">Whether the column is declared `INVISIBLE` (MySQL 8.0.23+). Invisible</span>
</a>
<a class="api-item" href="#dbcolumn-isnotnull">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isNotNull()</code>
<span class="desc">Not null</span>
</a>
<a class="api-item" href="#dbcolumn-isnumeric">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isNumeric()</code>
<span class="desc">Check whether column have an numeric type</span>
</a>
<a class="api-item" href="#dbcolumn-isprimary">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isPrimary()</code>
<span class="desc">Column is part of the primary key?</span>
</a>
<a class="api-item" href="#dbcolumn-isunsigned">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isUnsigned()</code>
<span class="desc">Returns true if number column is unsigned</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `BIND_PARAM_BLOB = 3` `int`

    Bind Type Blob

-   `BIND_PARAM_BOOL = 5` `int`

    Bind Type Bool

-   `BIND_PARAM_DECIMAL = 32` `int`

    Bind Type Decimal

-   `BIND_PARAM_INT = 1` `int`

    Bind Type Integer

-   `BIND_PARAM_NULL = 0` `int`

    Bind Type Null

-   `BIND_PARAM_STR = 2` `int`

    Bind Type String

-   `BIND_SKIP = 1024` `int`

    Skip binding by type

-   `TYPE_BIGINTEGER = 14` `int`

    Big integer abstract data type

-   `TYPE_BINARY = 27` `int`

    Binary abstract data type

-   `TYPE_BIT = 19` `int`

    Bit abstract data type

-   `TYPE_BLOB = 11` `int`

    Blob abstract data type

-   `TYPE_BOOLEAN = 8` `int`

    Bool abstract data type

-   `TYPE_BYTEA = 30` `int`

    PostgreSQL `BYTEA` binary type

-   `TYPE_CHAR = 5` `int`

    Char abstract data type

-   `TYPE_CIDR = 32` `int`

    PostgreSQL `CIDR` network-address type

-   `TYPE_DATE = 1` `int`

    Date abstract data type

-   `TYPE_DATERANGE = 39` `int`

    PostgreSQL `DATERANGE` range-of-date type

-   `TYPE_DATETIME = 4` `int`

    Datetime abstract data type

-   `TYPE_DECIMAL = 3` `int`

    Decimal abstract data type

-   `TYPE_DOUBLE = 9` `int`

    Double abstract data type

-   `TYPE_ENUM = 18` `int`

    Enum abstract data type

-   `TYPE_FLOAT = 7` `int`

    Float abstract data type

-   `TYPE_GEOMETRY = 40` `int`

    Spatial `GEOMETRY` base type (MySQL 5.7+; PostgreSQL + PostGIS)

-   `TYPE_GEOMETRYCOLLECTION = 47` `int`

    Spatial `GEOMETRYCOLLECTION` type (MySQL; PostgreSQL + PostGIS)

-   `TYPE_INET = 31` `int`

    PostgreSQL `INET` IPv4/IPv6 address type

-   `TYPE_INT4RANGE = 34` `int`

    PostgreSQL `INT4RANGE` range-of-integer type

-   `TYPE_INT8RANGE = 35` `int`

    PostgreSQL `INT8RANGE` range-of-bigint type

-   `TYPE_INTEGER = 0` `int`

    Int abstract data type

-   `TYPE_JSON = 15` `int`

    Json abstract data type

-   `TYPE_JSONB = 16` `int`

    Jsonb abstract data type

-   `TYPE_LINESTRING = 42` `int`

    Spatial `LINESTRING` type (MySQL; PostgreSQL + PostGIS)

-   `TYPE_LONGBLOB = 13` `int`

    Longblob abstract data type

-   `TYPE_LONGTEXT = 24` `int`

    Longtext abstract data type

-   `TYPE_MACADDR = 33` `int`

    PostgreSQL `MACADDR` MAC-address type

-   `TYPE_MEDIUMBLOB = 12` `int`

    Mediumblob abstract data type

-   `TYPE_MEDIUMINTEGER = 21` `int`

    Mediumintegerr abstract data type

-   `TYPE_MEDIUMTEXT = 23` `int`

    Mediumtext abstract data type

-   `TYPE_MULTILINESTRING = 45` `int`

    Spatial `MULTILINESTRING` type (MySQL; PostgreSQL + PostGIS)

-   `TYPE_MULTIPOINT = 44` `int`

    Spatial `MULTIPOINT` type (MySQL; PostgreSQL + PostGIS)

-   `TYPE_MULTIPOLYGON = 46` `int`

    Spatial `MULTIPOLYGON` type (MySQL; PostgreSQL + PostGIS)

-   `TYPE_NUMRANGE = 36` `int`

    PostgreSQL `NUMRANGE` range-of-numeric type

-   `TYPE_POINT = 41` `int`

    Spatial `POINT` type (MySQL; PostgreSQL + PostGIS)

-   `TYPE_POLYGON = 43` `int`

    Spatial `POLYGON` type (MySQL; PostgreSQL + PostGIS)

-   `TYPE_SMALLINTEGER = 22` `int`

    Smallint abstract data type

-   `TYPE_TEXT = 6` `int`

    Text abstract data type

-   `TYPE_TIME = 20` `int`

    Time abstract data type

-   `TYPE_TIMESTAMP = 17` `int`

    Timestamp abstract data type

-   `TYPE_TINYBLOB = 10` `int`

    Tinyblob abstract data type

-   `TYPE_TINYINTEGER = 26` `int`

    Tinyint abstract data type

-   `TYPE_TINYTEXT = 25` `int`

    Tinytext abstract data type

-   `TYPE_TSRANGE = 37` `int`

    PostgreSQL `TSRANGE` range-of-timestamp (without time zone) type

-   `TYPE_TSTZRANGE = 38` `int`

    PostgreSQL `TSTZRANGE` range-of-timestamp (with time zone) type

-   `TYPE_UUID = 29` `int`

    UUID abstract data type

-   `TYPE_VARBINARY = 28` `int`

    Varbinary abstract data type

-   `TYPE_VARCHAR = 2` `int`

    Varchar abstract data type

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$after = null` `string|null`

    Column Position

-   `protected`{ .vis-protected } `$autoIncrement = false` `bool`

    Column is autoIncrement?

-   `protected`{ .vis-protected } `$bindType = 2` `int`

    Bind Type

-   `protected`{ .vis-protected } `$comment = null` `string|null`

    Column's comment

-   `protected`{ .vis-protected } `$defaultValue = null` `mixed|null`

    Default column value

-   `protected`{ .vis-protected } `$first = false` `bool`

    Position is first

-   `protected`{ .vis-protected } `$generated = null` `string|null`

    Generation expression for `GENERATED ALWAYS AS (...)`. Null when the
    column is not a generated/computed column.

-   `protected`{ .vis-protected } `$generationStored = false` `bool`

    Whether a generated column is `STORED` (true) or `VIRTUAL` (false).
    Ignored when the column is not generated. PostgreSQL only supports
    `STORED` and emits it regardless of this flag.

-   `protected`{ .vis-protected } `$invisible = false` `bool`

    Whether the column is `INVISIBLE` (MySQL 8.0.23+). Invisible columns
    are excluded from `SELECT *` expansion but can still be referenced
    explicitly.

-   `protected`{ .vis-protected } `$isArray = false` `bool`

    Whether the column is an array of its base type. Recognized by the
    PostgreSQL dialect (e.g. `INTEGER[]`, `TEXT[]`). MySQL and SQLite
    ignore the flag.

-   `protected`{ .vis-protected } `$isNumeric = false` `bool`

    The column have some numeric type?

-   `protected`{ .vis-protected } `$name` `string`

    Column's name

-   `protected`{ .vis-protected } `$notNull = true` `bool`

    Column not nullable?

    Default SQL definition is NOT NULL.

-   `protected`{ .vis-protected } `$primary = false` `bool`

    Column is part of the primary key?

-   `protected`{ .vis-protected } `$scale = 0` `int`

    Integer column number scale

-   `protected`{ .vis-protected } `$size = 0` `int|string`

    Integer column size

-   `protected`{ .vis-protected } `$type` `int`

    Column data type

-   `protected`{ .vis-protected } `$typeReference = -1` `int`

    Column data type reference

-   `protected`{ .vis-protected } `$typeValues = []` `array|string`

    Column data type values

-   `protected`{ .vis-protected } `$unsigned = false` `bool`

    Integer column unsigned?

</div>

### Methods

<div class="api-group">Public · 23</div>

#### `__construct()` { #dbcolumn-__construct }

```php
public function __construct(
    string $name,
    array $definition
);
```

Phalcon\Db\Column constructor

#### `getAfterPosition()` { #dbcolumn-getafterposition }

```php
public function getAfterPosition(): string|null;
```

Check whether field absolute to position in table

#### `getBindType()` { #dbcolumn-getbindtype }

```php
public function getBindType(): int;
```

Returns the type of bind handling

#### `getComment()` { #dbcolumn-getcomment }

```php
public function getComment(): string|null;
```

Column's comment

#### `getDefault()` { #dbcolumn-getdefault }

```php
public function getDefault(): mixed;
```

Default column value

#### `getGenerationExpression()` { #dbcolumn-getgenerationexpression }

```php
public function getGenerationExpression(): string|null;
```

Returns the generation expression for a generated/computed column.
Returns `null` when the column is not generated.

#### `getName()` { #dbcolumn-getname }

```php
public function getName(): string;
```

Column's name

#### `getScale()` { #dbcolumn-getscale }

```php
public function getScale(): int;
```

Integer column number scale

#### `getSize()` { #dbcolumn-getsize }

```php
public function getSize(): int|string;
```

Integer column size

#### `getType()` { #dbcolumn-gettype }

```php
public function getType(): int|string;
```

Column data type

#### `getTypeReference()` { #dbcolumn-gettypereference }

```php
public function getTypeReference(): int;
```

Column data type reference

#### `getTypeValues()` { #dbcolumn-gettypevalues }

```php
public function getTypeValues(): array|string;
```

Column data type values

#### `hasDefault()` { #dbcolumn-hasdefault }

```php
public function hasDefault(): bool;
```

Check whether column has default value

#### `isArray()` { #dbcolumn-isarray }

```php
public function isArray(): bool;
```

Whether the column is an array of its base type. Recognized by the
PostgreSQL dialect (e.g. `INTEGER[]`, `TEXT[]`); MySQL and SQLite
ignore the flag.

#### `isAutoIncrement()` { #dbcolumn-isautoincrement }

```php
public function isAutoIncrement(): bool;
```

Auto-Increment

#### `isFirst()` { #dbcolumn-isfirst }

```php
public function isFirst(): bool;
```

Check whether column have first position in table

#### `isGenerated()` { #dbcolumn-isgenerated }

```php
public function isGenerated(): bool;
```

Whether the column is a generated/computed column.

#### `isGenerationStored()` { #dbcolumn-isgenerationstored }

```php
public function isGenerationStored(): bool;
```

Whether a generated column is `STORED`. `false` means `VIRTUAL`.
Always meaningful only when `isGenerated()` is `true`.

#### `isInvisible()` { #dbcolumn-isinvisible }

```php
public function isInvisible(): bool;
```

Whether the column is declared `INVISIBLE` (MySQL 8.0.23+). Invisible
columns are excluded from `SELECT *` expansion but can still be
referenced explicitly. PostgreSQL and SQLite have no equivalent and
dialects targeting them ignore the flag.

#### `isNotNull()` { #dbcolumn-isnotnull }

```php
public function isNotNull(): bool;
```

Not null

#### `isNumeric()` { #dbcolumn-isnumeric }

```php
public function isNumeric(): bool;
```

Check whether column have an numeric type

#### `isPrimary()` { #dbcolumn-isprimary }

```php
public function isPrimary(): bool;
```

Column is part of the primary key?

#### `isUnsigned()` { #dbcolumn-isunsigned }

```php
public function isUnsigned(): bool;
```

Returns true if number column is unsigned


## Db\ColumnInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/ColumnInterface.zep){ .src-btn }

Phalcon\Db\ColumnInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Db\Column} instead.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Db\Column`](phalcon_contracts.md#contractsdbcolumn)
    - **`Phalcon\Db\ColumnInterface`**

</div>

__Uses__ `Phalcon\Contracts\Db\Column`
{ .api-uses }


## Db\Dialect

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Dialect.zep){ .src-btn }

This is the base class to each database dialect. This implements
common methods to transform intermediate code into its RDBMS related syntax

<div class="api-tree" markdown>

- **`Phalcon\Db\Dialect`** — implements [`Phalcon\Db\DialectInterface`](#dbdialectinterface)
    - [`Phalcon\Db\Dialect\Mysql`](#dbdialectmysql)
    - [`Phalcon\Db\Dialect\Postgresql`](#dbdialectpostgresql)
    - [`Phalcon\Db\Dialect\Sqlite`](#dbdialectsqlite)

</div>

__Uses__ `Phalcon\Db\Exceptions\ConflictTargetColumnRequired` · `Phalcon\Db\Exceptions\ConflictUpdateColumnRequired` · `Phalcon\Db\Exceptions\InvalidGroupByExpression` · `Phalcon\Db\Exceptions\InvalidListExpression` · `Phalcon\Db\Exceptions\InvalidOrderByExpression` · `Phalcon\Db\Exceptions\InvalidSqlExpression` · `Phalcon\Db\Exceptions\InvalidSqlExpressionType` · `Phalcon\Db\Exceptions\InvalidUnaryExpression` · `Phalcon\Db\Exceptions\MaterializedViewsNotSupported` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\ReturningNotSupported` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbdialect-creatematerializedview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createMaterializedView(
    string $viewName,
    array $definition,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL to create a materialized view. Supported by PostgreSQL</span>
</a>
<a class="api-item" href="#dbdialect-createsavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createSavepoint( string $name )</code>
<span class="desc">Generate SQL to create a new savepoint</span>
</a>
<a class="api-item" href="#dbdialect-dropmaterializedview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Generates SQL to drop a materialized view. Supported by PostgreSQL.</span>
</a>
<a class="api-item" href="#dbdialect-escape">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">escape(
    string $str,
    string $escapeChar = null
)</code>
<span class="desc">Escape identifiers</span>
</a>
<a class="api-item" href="#dbdialect-escapeschema">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">escapeSchema(
    string $str,
    string $escapeChar = null
)</code>
<span class="desc">Escape Schema</span>
</a>
<a class="api-item" href="#dbdialect-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">forUpdate(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`</span>
</a>
<a class="api-item" href="#dbdialect-getcolumnlist">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getColumnList(
    array $columnList,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Gets a list of columns with escaped identifiers</span>
</a>
<a class="api-item" href="#dbdialect-getcustomfunctions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getCustomFunctions()</code>
<span class="desc">Returns registered functions</span>
</a>
<a class="api-item" href="#dbdialect-getsqlcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSqlColumn(
    mixed $column,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve Column expressions</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpression">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSqlExpression(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Transforms an intermediate representation for an expression into a database system valid expression</span>
</a>
<a class="api-item" href="#dbdialect-getsqltable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSqlTable(
    mixed $table,
    string $escapeChar = null
)</code>
<span class="desc">Transform an intermediate representation of a schema/table into a</span>
</a>
<a class="api-item" href="#dbdialect-limit">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">limit(
    string $sqlQuery,
    mixed $number
)</code>
<span class="desc">Generates the SQL for LIMIT clause</span>
</a>
<a class="api-item" href="#dbdialect-onconflictupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">onConflictUpdate(
    string $sqlQuery,
    array $conflictColumns,
    array $updateColumns
)</code>
<span class="desc">Appends an `ON CONFLICT (col, ...) DO UPDATE SET col = excluded.col`</span>
</a>
<a class="api-item" href="#dbdialect-refreshmaterializedview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">refreshMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $concurrent = false
)</code>
<span class="desc">Generates SQL to refresh a materialized view. Supported by</span>
</a>
<a class="api-item" href="#dbdialect-registercustomfunction">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">registerCustomFunction(
    string $name,
    callable $customFunction
)</code>
<span class="desc">Registers custom SQL functions</span>
</a>
<a class="api-item" href="#dbdialect-releasesavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">releaseSavepoint( string $name )</code>
<span class="desc">Generate SQL to release a savepoint</span>
</a>
<a class="api-item" href="#dbdialect-returning">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">returning(
    string $sqlQuery,
    array $columns
)</code>
<span class="desc">Returns a SQL statement extended with a `RETURNING` clause so the</span>
</a>
<a class="api-item" href="#dbdialect-rollbacksavepoint">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">rollbackSavepoint( string $name )</code>
<span class="desc">Generate SQL to rollback a savepoint</span>
</a>
<a class="api-item" href="#dbdialect-select">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">select( array $definition )</code>
<span class="desc">Builds a SELECT statement</span>
</a>
<a class="api-item" href="#dbdialect-supportsreleasesavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">supportsReleaseSavepoints()</code>
<span class="desc">Checks whether the platform supports releasing savepoints.</span>
</a>
<a class="api-item" href="#dbdialect-supportssavepoints">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">supportsSavepoints()</code>
<span class="desc">Checks whether the platform supports savepoints</span>
</a>
<a class="api-item" href="#dbdialect-checkcolumntype">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">checkColumnType( ColumnInterface $column )</code>
<span class="desc">Checks the column type and if not string it returns the type reference</span>
</a>
<a class="api-item" href="#dbdialect-checkcolumntypesql">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">checkColumnTypeSql( ColumnInterface $column )</code>
<span class="desc">Checks the column type and returns the updated SQL statement</span>
</a>
<a class="api-item" href="#dbdialect-getcheckclause">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getCheckClause(
    CheckInterface $check,
    string $escapeChar = &quot;`&quot;
)</code>
<span class="desc">Builds a CHECK constraint clause from a `CheckInterface`, using the</span>
</a>
<a class="api-item" href="#dbdialect-getcolumnsize">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getColumnSize( ColumnInterface $column )</code>
<span class="desc">Returns the size of the column enclosed in parentheses</span>
</a>
<a class="api-item" href="#dbdialect-getcolumnsizeandscale">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getColumnSizeAndScale( ColumnInterface $column )</code>
<span class="desc">Returns the column size and scale enclosed in parentheses</span>
</a>
<a class="api-item" href="#dbdialect-getgeneratedclause">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getGeneratedClause(
    ColumnInterface $column,
    bool $forceStored = false
)</code>
<span class="desc">Builds the `GENERATED ALWAYS AS (&lt;expr&gt;) VIRTUAL|STORED` clause for a</span>
</a>
<a class="api-item" href="#dbdialect-getindexcolumnlist">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getIndexColumnList(
    IndexInterface $index,
    bool $wrapExpressions = true
)</code>
<span class="desc">Builds the per-index parenthesized column list, honoring per-column</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionall">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionAll(
    array $expression,
    string $escapeChar = null
)</code>
<span class="desc">Resolve *</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionbinaryoperations">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionBinaryOperations(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve binary operations expressions</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressioncase">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionCase(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve CASE expressions</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressioncastvalue">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionCastValue(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve CAST of values</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionconvertvalue">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionConvertValue(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve CONVERT of values encodings</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionfrom">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionFrom(
    mixed $expression,
    string $escapeChar = null
)</code>
<span class="desc">Resolve a FROM clause</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionfunctioncall">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionFunctionCall(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve function calls</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressiongroupby">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionGroupBy(
    mixed $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve a GROUP BY clause</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionhaving">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionHaving(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve a HAVING clause</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionjoins">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionJoins(
    mixed $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve a JOINs clause</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionlimit">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionLimit(
    mixed $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve a LIMIT clause</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionlist">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionList(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve Lists</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionobject">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionObject(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve object expressions</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionorderby">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionOrderBy(
    mixed $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve an ORDER BY clause</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionqualified">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionQualified(
    array $expression,
    string $escapeChar = null
)</code>
<span class="desc">Resolve qualified expressions</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionscalar">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionScalar(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve Column expressions</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionunaryoperations">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionUnaryOperations(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve unary operations expressions</span>
</a>
<a class="api-item" href="#dbdialect-getsqlexpressionwhere">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getSqlExpressionWhere(
    mixed $expression,
    string $escapeChar = null,
    array $bindCounts = []
)</code>
<span class="desc">Resolve a WHERE clause</span>
</a>
<a class="api-item" href="#dbdialect-preparecolumnalias">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">prepareColumnAlias(
    string $qualified,
    string $alias = null,
    string $escapeChar = null
)</code>
<span class="desc">Prepares column for this RDBMS</span>
</a>
<a class="api-item" href="#dbdialect-preparequalified">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">prepareQualified(
    string $column,
    string $domain = null,
    string $escapeChar = null
)</code>
<span class="desc">Prepares qualified for this RDBMS</span>
</a>
<a class="api-item" href="#dbdialect-preparetable">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">prepareTable(
    string $table,
    string $schema = null,
    string $alias = null,
    string $escapeChar = null
)</code>
<span class="desc">Prepares table for this RDBMS</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$customFunctions = []` `array`

-   `protected`{ .vis-protected } `$escapeChar` `string`

</div>

### Methods

<div class="api-group">Public · 21</div>

#### `createMaterializedView()` { #dbdialect-creatematerializedview }

```php
public function createMaterializedView(
    string $viewName,
    array $definition,
    string $schemaName = null
): string;
```

Generates SQL to create a materialized view. Supported by PostgreSQL
(`CREATE MATERIALIZED VIEW name AS <sql>`). Other dialects inherit
this throw - MySQL and SQLite have no materialized-view concept.

#### `createSavepoint()` { #dbdialect-createsavepoint }

```php
public function createSavepoint( string $name ): string;
```

Generate SQL to create a new savepoint

#### `dropMaterializedView()` { #dbdialect-dropmaterializedview }

```php
public function dropMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a materialized view. Supported by PostgreSQL.

#### `escape()` { #dbdialect-escape }

```php
final public function escape(
    string $str,
    string $escapeChar = null
): string;
```

Escape identifiers

#### `escapeSchema()` { #dbdialect-escapeschema }

```php
final public function escapeSchema(
    string $str,
    string $escapeChar = null
): string;
```

Escape Schema

#### `forUpdate()` { #dbdialect-forupdate }

```php
public function forUpdate(
    string $sqlQuery,
    string $modifier = ""
): string;
```

Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword.

```php
$sql = $dialect->forUpdate("SELECT * FROM robots");
echo $sql; // SELECT * FROM robots FOR UPDATE

$sql = $dialect->forUpdate(
    "SELECT * FROM robots",
    Dialect::LOCK_NOWAIT
);
echo $sql; // SELECT * FROM robots FOR UPDATE NOWAIT

$sql = $dialect->forUpdate(
    "SELECT * FROM robots",
    Dialect::LOCK_SKIP_LOCKED
);
echo $sql; // SELECT * FROM robots FOR UPDATE SKIP LOCKED
```

#### `getColumnList()` { #dbdialect-getcolumnlist }

```php
final public function getColumnList(
    array $columnList,
    string $escapeChar = null,
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

#### `getCustomFunctions()` { #dbdialect-getcustomfunctions }

```php
public function getCustomFunctions(): array;
```

Returns registered functions

#### `getSqlColumn()` { #dbdialect-getsqlcolumn }

```php
final public function getSqlColumn(
    mixed $column,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve Column expressions

#### `getSqlExpression()` { #dbdialect-getsqlexpression }

```php
public function getSqlExpression(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Transforms an intermediate representation for an expression into a database system valid expression

#### `getSqlTable()` { #dbdialect-getsqltable }

```php
final public function getSqlTable(
    mixed $table,
    string $escapeChar = null
): string;
```

Transform an intermediate representation of a schema/table into a
database system valid expression

#### `limit()` { #dbdialect-limit }

```php
public function limit(
    string $sqlQuery,
    mixed $number
): string;
```

Generates the SQL for LIMIT clause

```php
// SELECT * FROM robots LIMIT 10
echo $dialect->limit(
    "SELECT * FROM robots",
    10
);

// SELECT * FROM robots LIMIT 10 OFFSET 50
echo $dialect->limit(
    "SELECT * FROM robots",
    [10, 50]
);
```

#### `onConflictUpdate()` { #dbdialect-onconflictupdate }

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

#### `refreshMaterializedView()` { #dbdialect-refreshmaterializedview }

```php
public function refreshMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $concurrent = false
): string;
```

Generates SQL to refresh a materialized view. Supported by
PostgreSQL. Pass `concurrent = true` for `REFRESH MATERIALIZED VIEW
CONCURRENTLY ...`, which avoids blocking concurrent SELECTs (requires
the view to have a unique index).

#### `registerCustomFunction()` { #dbdialect-registercustomfunction }

```php
public function registerCustomFunction(
    string $name,
    callable $customFunction
): static;
```

Registers custom SQL functions

#### `releaseSavepoint()` { #dbdialect-releasesavepoint }

```php
public function releaseSavepoint( string $name ): string;
```

Generate SQL to release a savepoint

#### `returning()` { #dbdialect-returning }

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

#### `rollbackSavepoint()` { #dbdialect-rollbacksavepoint }

```php
public function rollbackSavepoint( string $name ): string;
```

Generate SQL to rollback a savepoint

#### `select()` { #dbdialect-select }

```php
public function select( array $definition ): string;
```

Builds a SELECT statement

#### `supportsReleaseSavepoints()` { #dbdialect-supportsreleasesavepoints }

```php
public function supportsReleaseSavepoints(): bool;
```

Checks whether the platform supports releasing savepoints.

#### `supportsSavepoints()` { #dbdialect-supportssavepoints }

```php
public function supportsSavepoints(): bool;
```

Checks whether the platform supports savepoints

<div class="api-group">Protected · 28</div>

#### `checkColumnType()` { #dbdialect-checkcolumntype }

```php
protected function checkColumnType( ColumnInterface $column ): string;
```

Checks the column type and if not string it returns the type reference

#### `checkColumnTypeSql()` { #dbdialect-checkcolumntypesql }

```php
protected function checkColumnTypeSql( ColumnInterface $column ): string;
```

Checks the column type and returns the updated SQL statement

#### `getCheckClause()` { #dbdialect-getcheckclause }

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

#### `getColumnSize()` { #dbdialect-getcolumnsize }

```php
protected function getColumnSize( ColumnInterface $column ): string;
```

Returns the size of the column enclosed in parentheses

#### `getColumnSizeAndScale()` { #dbdialect-getcolumnsizeandscale }

```php
protected function getColumnSizeAndScale( ColumnInterface $column ): string;
```

Returns the column size and scale enclosed in parentheses

#### `getGeneratedClause()` { #dbdialect-getgeneratedclause }

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

#### `getIndexColumnList()` { #dbdialect-getindexcolumnlist }

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

#### `getSqlExpressionAll()` { #dbdialect-getsqlexpressionall }

```php
final protected function getSqlExpressionAll(
    array $expression,
    string $escapeChar = null
): string;
```

Resolve *

#### `getSqlExpressionBinaryOperations()` { #dbdialect-getsqlexpressionbinaryoperations }

```php
final protected function getSqlExpressionBinaryOperations(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve binary operations expressions

#### `getSqlExpressionCase()` { #dbdialect-getsqlexpressioncase }

```php
final protected function getSqlExpressionCase(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve CASE expressions

#### `getSqlExpressionCastValue()` { #dbdialect-getsqlexpressioncastvalue }

```php
final protected function getSqlExpressionCastValue(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve CAST of values

#### `getSqlExpressionConvertValue()` { #dbdialect-getsqlexpressionconvertvalue }

```php
final protected function getSqlExpressionConvertValue(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve CONVERT of values encodings

#### `getSqlExpressionFrom()` { #dbdialect-getsqlexpressionfrom }

```php
final protected function getSqlExpressionFrom(
    mixed $expression,
    string $escapeChar = null
): string;
```

Resolve a FROM clause

#### `getSqlExpressionFunctionCall()` { #dbdialect-getsqlexpressionfunctioncall }

```php
final protected function getSqlExpressionFunctionCall(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve function calls

#### `getSqlExpressionGroupBy()` { #dbdialect-getsqlexpressiongroupby }

```php
final protected function getSqlExpressionGroupBy(
    mixed $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve a GROUP BY clause

#### `getSqlExpressionHaving()` { #dbdialect-getsqlexpressionhaving }

```php
final protected function getSqlExpressionHaving(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve a HAVING clause

#### `getSqlExpressionJoins()` { #dbdialect-getsqlexpressionjoins }

```php
final protected function getSqlExpressionJoins(
    mixed $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve a JOINs clause

#### `getSqlExpressionLimit()` { #dbdialect-getsqlexpressionlimit }

```php
final protected function getSqlExpressionLimit(
    mixed $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve a LIMIT clause

#### `getSqlExpressionList()` { #dbdialect-getsqlexpressionlist }

```php
final protected function getSqlExpressionList(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve Lists

#### `getSqlExpressionObject()` { #dbdialect-getsqlexpressionobject }

```php
final protected function getSqlExpressionObject(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve object expressions

#### `getSqlExpressionOrderBy()` { #dbdialect-getsqlexpressionorderby }

```php
final protected function getSqlExpressionOrderBy(
    mixed $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve an ORDER BY clause

#### `getSqlExpressionQualified()` { #dbdialect-getsqlexpressionqualified }

```php
final protected function getSqlExpressionQualified(
    array $expression,
    string $escapeChar = null
): string;
```

Resolve qualified expressions

#### `getSqlExpressionScalar()` { #dbdialect-getsqlexpressionscalar }

```php
final protected function getSqlExpressionScalar(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve Column expressions

#### `getSqlExpressionUnaryOperations()` { #dbdialect-getsqlexpressionunaryoperations }

```php
final protected function getSqlExpressionUnaryOperations(
    array $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve unary operations expressions

#### `getSqlExpressionWhere()` { #dbdialect-getsqlexpressionwhere }

```php
final protected function getSqlExpressionWhere(
    mixed $expression,
    string $escapeChar = null,
    array $bindCounts = []
): string;
```

Resolve a WHERE clause

#### `prepareColumnAlias()` { #dbdialect-preparecolumnalias }

```php
protected function prepareColumnAlias(
    string $qualified,
    string $alias = null,
    string $escapeChar = null
): string;
```

Prepares column for this RDBMS

#### `prepareQualified()` { #dbdialect-preparequalified }

```php
protected function prepareQualified(
    string $column,
    string $domain = null,
    string $escapeChar = null
): string;
```

Prepares qualified for this RDBMS

#### `prepareTable()` { #dbdialect-preparetable }

```php
protected function prepareTable(
    string $table,
    string $schema = null,
    string $alias = null,
    string $escapeChar = null
): string;
```

Prepares table for this RDBMS


## Db\DialectInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/DialectInterface.zep){ .src-btn }

Phalcon\Db\DialectInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Db\Dialect} instead.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Db\Dialect`](phalcon_contracts.md#contractsdbdialect)
    - **`Phalcon\Db\DialectInterface`**

</div>

__Uses__ `Phalcon\Contracts\Db\Dialect`
{ .api-uses }


## Db\Dialect\Mysql

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Dialect/Mysql.zep){ .src-btn }

Generates database specific SQL for the MySQL RDBMS

<div class="api-tree" markdown>

- [`Phalcon\Db\Dialect`](#dbdialect)
    - **`Phalcon\Db\Dialect\Mysql`**

</div>

__Uses__ `Phalcon\Db\CheckInterface` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\MysqlOnConflictNotSupported` · `Phalcon\Db\Exceptions\UnrecognizedDataType` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbdialectmysql-addcheck">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
)</code>
<span class="desc">Generates SQL to add a CHECK constraint to an existing table.</span>
</a>
<a class="api-item" href="#dbdialectmysql-addcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
)</code>
<span class="desc">Generates SQL to add a column to a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-addindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-addprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Generates SQL to add the primary key to a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-createtable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createTable(
    string $tableName,
    string $schemaName,
    array $definition
)</code>
<span class="desc">Generates SQL to create a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-createview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createView(
    string $viewName,
    array $definition,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL to create a view</span>
</a>
<a class="api-item" href="#dbdialectmysql-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeColumns(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL describing a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeIndexes(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL to query indexes on a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeReferences(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL to query foreign keys on a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-dropcheck">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
)</code>
<span class="desc">Generates SQL to delete a CHECK constraint from a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-dropcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
)</code>
<span class="desc">Generates SQL to delete a column from a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-dropforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
)</code>
<span class="desc">Generates SQL to delete a foreign key from a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-dropindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
)</code>
<span class="desc">Generates SQL to delete an index from a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-dropprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropPrimaryKey(
    string $tableName,
    string $schemaName
)</code>
<span class="desc">Generates SQL to delete primary key from a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-droptable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropTable(
    string $tableName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Generates SQL to drop a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-dropview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Generates SQL to drop a view</span>
</a>
<a class="api-item" href="#dbdialectmysql-getcolumndefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getColumnDefinition( ColumnInterface $column )</code>
<span class="desc">Gets the column name in MySQL</span>
</a>
<a class="api-item" href="#dbdialectmysql-getforeignkeychecks">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getForeignKeyChecks()</code>
<span class="desc">Generates SQL to check DB parameter FOREIGN_KEY_CHECKS.</span>
</a>
<a class="api-item" href="#dbdialectmysql-listtables">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">listTables( string $schemaName = null )</code>
<span class="desc">List all tables in database</span>
</a>
<a class="api-item" href="#dbdialectmysql-listviews">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">listViews( string $schemaName = null )</code>
<span class="desc">Generates the SQL to list all views of a schema or user</span>
</a>
<a class="api-item" href="#dbdialectmysql-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
)</code>
<span class="desc">Generates SQL to modify a column in a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-onconflictupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">onConflictUpdate(
    string $sqlQuery,
    array $conflictColumns,
    array $updateColumns
)</code>
<span class="desc">MySQL does not support the SQL-standard `ON CONFLICT DO UPDATE`</span>
</a>
<a class="api-item" href="#dbdialectmysql-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">sharedLock(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">Returns a SQL modified with a LOCK IN SHARE MODE clause. The `modifier`</span>
</a>
<a class="api-item" href="#dbdialectmysql-tableexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">tableExists(
    string $tableName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.table</span>
</a>
<a class="api-item" href="#dbdialectmysql-tableoptions">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">tableOptions(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates the SQL to describe the table creation options</span>
</a>
<a class="api-item" href="#dbdialectmysql-truncatetable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">truncateTable(
    string $tableName,
    string $schemaName
)</code>
<span class="desc">Generates SQL to truncate a table</span>
</a>
<a class="api-item" href="#dbdialectmysql-viewexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">viewExists(
    string $viewName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.view</span>
</a>
<a class="api-item" href="#dbdialectmysql-gettableoptions">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getTableOptions( array $definition )</code>
<span class="desc">Generates SQL to add the table creation options</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$escapeChar = "`"` `string`

</div>

### Methods

<div class="api-group">Public · 28</div>

#### `addCheck()` { #dbdialectmysql-addcheck }

```php
public function addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
): string;
```

Generates SQL to add a CHECK constraint to an existing table.
Enforced by MySQL 8.0.16+.

#### `addColumn()` { #dbdialectmysql-addcolumn }

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): string;
```

Generates SQL to add a column to a table

#### `addForeignKey()` { #dbdialectmysql-addforeignkey }

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): string;
```

Generates SQL to add an index to a table

#### `addIndex()` { #dbdialectmysql-addindex }

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add an index to a table

#### `addPrimaryKey()` { #dbdialectmysql-addprimarykey }

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add the primary key to a table

#### `createTable()` { #dbdialectmysql-createtable }

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): string;
```

Generates SQL to create a table

#### `createView()` { #dbdialectmysql-createview }

```php
public function createView(
    string $viewName,
    array $definition,
    string $schemaName = null
): string;
```

Generates SQL to create a view

#### `describeColumns()` { #dbdialectmysql-describecolumns }

```php
public function describeColumns(
    string $table,
    string $schema = null
): string;
```

Generates SQL describing a table

```php
print_r(
    $dialect->describeColumns("posts")
);
```

#### `describeIndexes()` { #dbdialectmysql-describeindexes }

```php
public function describeIndexes(
    string $table,
    string $schema = null
): string;
```

Generates SQL to query indexes on a table

#### `describeReferences()` { #dbdialectmysql-describereferences }

```php
public function describeReferences(
    string $table,
    string $schema = null
): string;
```

Generates SQL to query foreign keys on a table

#### `dropCheck()` { #dbdialectmysql-dropcheck }

```php
public function dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
): string;
```

Generates SQL to delete a CHECK constraint from a table

#### `dropColumn()` { #dbdialectmysql-dropcolumn }

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): string;
```

Generates SQL to delete a column from a table

#### `dropForeignKey()` { #dbdialectmysql-dropforeignkey }

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): string;
```

Generates SQL to delete a foreign key from a table

#### `dropIndex()` { #dbdialectmysql-dropindex }

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
): string;
```

Generates SQL to delete an index from a table

#### `dropPrimaryKey()` { #dbdialectmysql-dropprimarykey }

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to delete primary key from a table

#### `dropTable()` { #dbdialectmysql-droptable }

```php
public function dropTable(
    string $tableName,
    string $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a table

#### `dropView()` { #dbdialectmysql-dropview }

```php
public function dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a view

#### `getColumnDefinition()` { #dbdialectmysql-getcolumndefinition }

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in MySQL

#### `getForeignKeyChecks()` { #dbdialectmysql-getforeignkeychecks }

```php
public function getForeignKeyChecks(): string;
```

Generates SQL to check DB parameter FOREIGN_KEY_CHECKS.

#### `listTables()` { #dbdialectmysql-listtables }

```php
public function listTables( string $schemaName = null ): string;
```

List all tables in database

```php
print_r(
    $dialect->listTables("blog")
);
```

#### `listViews()` { #dbdialectmysql-listviews }

```php
public function listViews( string $schemaName = null ): string;
```

Generates the SQL to list all views of a schema or user

#### `modifyColumn()` { #dbdialectmysql-modifycolumn }

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
): string;
```

Generates SQL to modify a column in a table

#### `onConflictUpdate()` { #dbdialectmysql-onconflictupdate }

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

#### `sharedLock()` { #dbdialectmysql-sharedlock }

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
$sql = $dialect->sharedLock("SELECT * FROM robots");

echo $sql; // SELECT * FROM robots LOCK IN SHARE MODE
```

#### `tableExists()` { #dbdialectmysql-tableexists }

```php
public function tableExists(
    string $tableName,
    string $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.table

```php
echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");
```

#### `tableOptions()` { #dbdialectmysql-tableoptions }

```php
public function tableOptions(
    string $table,
    string $schema = null
): string;
```

Generates the SQL to describe the table creation options

#### `truncateTable()` { #dbdialectmysql-truncatetable }

```php
public function truncateTable(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to truncate a table

#### `viewExists()` { #dbdialectmysql-viewexists }

```php
public function viewExists(
    string $viewName,
    string $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.view

<div class="api-group">Protected · 1</div>

#### `getTableOptions()` { #dbdialectmysql-gettableoptions }

```php
protected function getTableOptions( array $definition ): string;
```

Generates SQL to add the table creation options


## Db\Dialect\Postgresql

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Dialect/Postgresql.zep){ .src-btn }

Generates database specific SQL for the PostgreSQL RDBMS

<div class="api-tree" markdown>

- [`Phalcon\Db\Dialect`](#dbdialect)
    - **`Phalcon\Db\Dialect\Postgresql`**

</div>

__Uses__ `Phalcon\Db\CheckInterface` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\ReturningRequiresColumn` · `Phalcon\Db\Exceptions\UnrecognizedDataType` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbdialectpostgresql-addcheck">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
)</code>
<span class="desc">Generates SQL to add a CHECK constraint to an existing table.</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-addcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
)</code>
<span class="desc">Generates SQL to add a column to a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-addindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-addprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Generates SQL to add the primary key to a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-creatematerializedview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createMaterializedView(
    string $viewName,
    array $definition,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL to create a materialized view.</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-createtable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createTable(
    string $tableName,
    string $schemaName,
    array $definition
)</code>
<span class="desc">Generates SQL to create a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-createview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createView(
    string $viewName,
    array $definition,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL to create a view</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeColumns(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL describing a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeIndexes(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL to query indexes on a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeReferences(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL to query foreign keys on a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-dropcheck">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
)</code>
<span class="desc">Generates SQL to delete a CHECK constraint from a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-dropcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
)</code>
<span class="desc">Generates SQL to delete a column from a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-dropforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
)</code>
<span class="desc">Generates SQL to delete a foreign key from a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-dropindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
)</code>
<span class="desc">Generates SQL to delete an index from a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-dropmaterializedview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Generates SQL to drop a materialized view.</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-dropprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropPrimaryKey(
    string $tableName,
    string $schemaName
)</code>
<span class="desc">Generates SQL to delete primary key from a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-droptable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropTable(
    string $tableName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Generates SQL to drop a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-dropview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Generates SQL to drop a view</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-getcolumndefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getColumnDefinition( ColumnInterface $column )</code>
<span class="desc">Gets the column name in PostgreSQL</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-listtables">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">listTables( string $schemaName = null )</code>
<span class="desc">List all tables in database</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-listviews">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">listViews( string $schemaName = null )</code>
<span class="desc">Generates the SQL to list all views of a schema or user</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
)</code>
<span class="desc">Generates SQL to modify a column in a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-refreshmaterializedview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">refreshMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $concurrent = false
)</code>
<span class="desc">Generates SQL to refresh a materialized view. When `concurrent` is</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-returning">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">returning(
    string $sqlQuery,
    array $columns
)</code>
<span class="desc">Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">sharedLock(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">Returns a SQL modified with a `FOR SHARE` clause - PostgreSQL&#039;s</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-tableexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">tableExists(
    string $tableName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-tableoptions">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">tableOptions(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates the SQL to describe the table creation options</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-truncatetable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">truncateTable(
    string $tableName,
    string $schemaName
)</code>
<span class="desc">Generates SQL to truncate a table</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-viewexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">viewExists(
    string $viewName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.view</span>
</a>
<a class="api-item" href="#dbdialectpostgresql-castdefault">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">castDefault( ColumnInterface $column )</code>
</a>
<a class="api-item" href="#dbdialectpostgresql-gettableoptions">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getTableOptions( array $definition )</code>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$escapeChar = "\""` `string`

</div>

### Methods

<div class="api-group">Public · 30</div>

#### `addCheck()` { #dbdialectpostgresql-addcheck }

```php
public function addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
): string;
```

Generates SQL to add a CHECK constraint to an existing table.

#### `addColumn()` { #dbdialectpostgresql-addcolumn }

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): string;
```

Generates SQL to add a column to a table

#### `addForeignKey()` { #dbdialectpostgresql-addforeignkey }

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): string;
```

Generates SQL to add an index to a table

#### `addIndex()` { #dbdialectpostgresql-addindex }

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add an index to a table

#### `addPrimaryKey()` { #dbdialectpostgresql-addprimarykey }

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add the primary key to a table

#### `createMaterializedView()` { #dbdialectpostgresql-creatematerializedview }

```php
public function createMaterializedView(
    string $viewName,
    array $definition,
    string $schemaName = null
): string;
```

Generates SQL to create a materialized view.

#### `createTable()` { #dbdialectpostgresql-createtable }

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): string;
```

Generates SQL to create a table

#### `createView()` { #dbdialectpostgresql-createview }

```php
public function createView(
    string $viewName,
    array $definition,
    string $schemaName = null
): string;
```

Generates SQL to create a view

#### `describeColumns()` { #dbdialectpostgresql-describecolumns }

```php
public function describeColumns(
    string $table,
    string $schema = null
): string;
```

Generates SQL describing a table

```php
print_r(
    $dialect->describeColumns("posts")
);
```

#### `describeIndexes()` { #dbdialectpostgresql-describeindexes }

```php
public function describeIndexes(
    string $table,
    string $schema = null
): string;
```

Generates SQL to query indexes on a table

#### `describeReferences()` { #dbdialectpostgresql-describereferences }

```php
public function describeReferences(
    string $table,
    string $schema = null
): string;
```

Generates SQL to query foreign keys on a table

#### `dropCheck()` { #dbdialectpostgresql-dropcheck }

```php
public function dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
): string;
```

Generates SQL to delete a CHECK constraint from a table

#### `dropColumn()` { #dbdialectpostgresql-dropcolumn }

```php
public function dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
): string;
```

Generates SQL to delete a column from a table

#### `dropForeignKey()` { #dbdialectpostgresql-dropforeignkey }

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): string;
```

Generates SQL to delete a foreign key from a table

#### `dropIndex()` { #dbdialectpostgresql-dropindex }

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
): string;
```

Generates SQL to delete an index from a table

#### `dropMaterializedView()` { #dbdialectpostgresql-dropmaterializedview }

```php
public function dropMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a materialized view.

#### `dropPrimaryKey()` { #dbdialectpostgresql-dropprimarykey }

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to delete primary key from a table

#### `dropTable()` { #dbdialectpostgresql-droptable }

```php
public function dropTable(
    string $tableName,
    string $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a table

#### `dropView()` { #dbdialectpostgresql-dropview }

```php
public function dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a view

#### `getColumnDefinition()` { #dbdialectpostgresql-getcolumndefinition }

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in PostgreSQL

#### `listTables()` { #dbdialectpostgresql-listtables }

```php
public function listTables( string $schemaName = null ): string;
```

List all tables in database

```php
print_r(
    $dialect->listTables("blog")
);
```

#### `listViews()` { #dbdialectpostgresql-listviews }

```php
public function listViews( string $schemaName = null ): string;
```

Generates the SQL to list all views of a schema or user

#### `modifyColumn()` { #dbdialectpostgresql-modifycolumn }

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
): string;
```

Generates SQL to modify a column in a table

#### `refreshMaterializedView()` { #dbdialectpostgresql-refreshmaterializedview }

```php
public function refreshMaterializedView(
    string $viewName,
    string $schemaName = null,
    bool $concurrent = false
): string;
```

Generates SQL to refresh a materialized view. When `concurrent` is
true, emits `REFRESH MATERIALIZED VIEW CONCURRENTLY ...` (avoids
blocking concurrent SELECTs; requires a unique index on the view).

#### `returning()` { #dbdialectpostgresql-returning }

```php
public function returning(
    string $sqlQuery,
    array $columns
): string;
```

Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE
statement. Pass `["*"]` for `RETURNING *`, or a list of column names.

#### `sharedLock()` { #dbdialectpostgresql-sharedlock }

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
echo $dialect->sharedLock("SELECT * FROM robots");
// SELECT * FROM robots FOR SHARE

echo $dialect->sharedLock(
    "SELECT * FROM robots",
    Dialect::LOCK_NOWAIT
);
// SELECT * FROM robots FOR SHARE NOWAIT
```

#### `tableExists()` { #dbdialectpostgresql-tableexists }

```php
public function tableExists(
    string $tableName,
    string $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.table

```php
echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");
```

#### `tableOptions()` { #dbdialectpostgresql-tableoptions }

```php
public function tableOptions(
    string $table,
    string $schema = null
): string;
```

Generates the SQL to describe the table creation options

#### `truncateTable()` { #dbdialectpostgresql-truncatetable }

```php
public function truncateTable(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to truncate a table

#### `viewExists()` { #dbdialectpostgresql-viewexists }

```php
public function viewExists(
    string $viewName,
    string $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.view

<div class="api-group">Protected · 2</div>

#### `castDefault()` { #dbdialectpostgresql-castdefault }

```php
protected function castDefault( ColumnInterface $column ): string;
```

#### `getTableOptions()` { #dbdialectpostgresql-gettableoptions }

```php
protected function getTableOptions( array $definition ): string;
```


## Db\Dialect\Sqlite

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Dialect/Sqlite.zep){ .src-btn }

Generates database specific SQL for the SQLite RDBMS

<div class="api-tree" markdown>

- [`Phalcon\Db\Dialect`](#dbdialect)
    - **`Phalcon\Db\Dialect\Sqlite`**

</div>

__Uses__ `Phalcon\Db\CheckInterface` · `Phalcon\Db\Column` · `Phalcon\Db\ColumnInterface` · `Phalcon\Db\Dialect` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\Exception` · `Phalcon\Db\Exceptions\MissingDefinitionKey` · `Phalcon\Db\Exceptions\ReturningRequiresColumn` · `Phalcon\Db\Exceptions\SqliteAlterCheckNotSupported` · `Phalcon\Db\Exceptions\SqliteAlterColumnNotSupported` · `Phalcon\Db\Exceptions\SqliteAlterForeignKeyNotSupported` · `Phalcon\Db\Exceptions\SqliteAlterPrimaryKeyNotSupported` · `Phalcon\Db\Exceptions\SqliteDropCheckNotSupported` · `Phalcon\Db\Exceptions\SqliteDropForeignKeyNotSupported` · `Phalcon\Db\Exceptions\SqliteDropPrimaryKeyNotSupported` · `Phalcon\Db\Exceptions\UnrecognizedDataType` · `Phalcon\Db\IndexInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ReferenceInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbdialectsqlite-addcheck">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
)</code>
<span class="desc">SQLite cannot ALTER an existing table to add a CHECK constraint;</span>
</a>
<a class="api-item" href="#dbdialectsqlite-addcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
)</code>
<span class="desc">Generates SQL to add a column to a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-addforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-addindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Generates SQL to add an index to a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-addprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
)</code>
<span class="desc">Generates SQL to add the primary key to a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-createtable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createTable(
    string $tableName,
    string $schemaName,
    array $definition
)</code>
<span class="desc">Generates SQL to create a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-createview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">createView(
    string $viewName,
    array $definition,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL to create a view</span>
</a>
<a class="api-item" href="#dbdialectsqlite-describecolumns">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeColumns(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL describing a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-describeindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeIndex( string $index )</code>
<span class="desc">Generates SQL to query indexes detail on a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-describeindexes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeIndexes(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL to query indexes on a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-describereferences">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">describeReferences(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates SQL to query foreign keys on a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-dropcheck">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
)</code>
<span class="desc">SQLite cannot DROP a CHECK constraint from an existing table.</span>
</a>
<a class="api-item" href="#dbdialectsqlite-dropcolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropColumn(
    string $tableName,
    string $schemaName,
    string $columnName
)</code>
<span class="desc">Generates SQL to delete a column from a table.</span>
</a>
<a class="api-item" href="#dbdialectsqlite-dropforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
)</code>
<span class="desc">Generates SQL to delete a foreign key from a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-dropindex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
)</code>
<span class="desc">Generates SQL to delete an index from a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-dropprimarykey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropPrimaryKey(
    string $tableName,
    string $schemaName
)</code>
<span class="desc">Generates SQL to delete primary key from a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-droptable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropTable(
    string $tableName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Generates SQL to drop a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-dropview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
)</code>
<span class="desc">Generates SQL to drop a view</span>
</a>
<a class="api-item" href="#dbdialectsqlite-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">forUpdate(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">Returns a SQL modified with a FOR UPDATE clause. SQLite has no</span>
</a>
<a class="api-item" href="#dbdialectsqlite-getcolumndefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getColumnDefinition( ColumnInterface $column )</code>
<span class="desc">Gets the column name in SQLite</span>
</a>
<a class="api-item" href="#dbdialectsqlite-listindexessql">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">listIndexesSql(
    string $table,
    string $schema = null,
    string $keyName = null
)</code>
<span class="desc">Generates the SQL to get query list of indexes</span>
</a>
<a class="api-item" href="#dbdialectsqlite-listtables">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">listTables( string $schemaName = null )</code>
<span class="desc">List all tables in database</span>
</a>
<a class="api-item" href="#dbdialectsqlite-listviews">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">listViews( string $schemaName = null )</code>
<span class="desc">Generates the SQL to list all views of a schema or user</span>
</a>
<a class="api-item" href="#dbdialectsqlite-modifycolumn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
)</code>
<span class="desc">Generates SQL to modify a column in a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-returning">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">returning(
    string $sqlQuery,
    array $columns
)</code>
<span class="desc">Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE</span>
</a>
<a class="api-item" href="#dbdialectsqlite-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">sharedLock(
    string $sqlQuery,
    string $modifier = &quot;&quot;
)</code>
<span class="desc">SQLite has no row-level shared-lock construct, so the original query</span>
</a>
<a class="api-item" href="#dbdialectsqlite-tableexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">tableExists(
    string $tableName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-tableoptions">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">tableOptions(
    string $table,
    string $schema = null
)</code>
<span class="desc">Generates the SQL to describe the table creation options</span>
</a>
<a class="api-item" href="#dbdialectsqlite-truncatetable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">truncateTable(
    string $tableName,
    string $schemaName
)</code>
<span class="desc">Generates SQL to truncate a table</span>
</a>
<a class="api-item" href="#dbdialectsqlite-viewexists">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">viewExists(
    string $viewName,
    string $schemaName = null
)</code>
<span class="desc">Generates SQL checking for the existence of a schema.view</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$escapeChar = "\""` `string`

</div>

### Methods

<div class="api-group">Public · 30</div>

#### `addCheck()` { #dbdialectsqlite-addcheck }

```php
public function addCheck(
    string $tableName,
    string $schemaName,
    CheckInterface $check
): string;
```

SQLite cannot ALTER an existing table to add a CHECK constraint;
the constraint must be declared at CREATE TABLE time.

#### `addColumn()` { #dbdialectsqlite-addcolumn }

```php
public function addColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column
): string;
```

Generates SQL to add a column to a table

#### `addForeignKey()` { #dbdialectsqlite-addforeignkey }

```php
public function addForeignKey(
    string $tableName,
    string $schemaName,
    ReferenceInterface $reference
): string;
```

Generates SQL to add an index to a table

#### `addIndex()` { #dbdialectsqlite-addindex }

```php
public function addIndex(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add an index to a table

#### `addPrimaryKey()` { #dbdialectsqlite-addprimarykey }

```php
public function addPrimaryKey(
    string $tableName,
    string $schemaName,
    IndexInterface $index
): string;
```

Generates SQL to add the primary key to a table

#### `createTable()` { #dbdialectsqlite-createtable }

```php
public function createTable(
    string $tableName,
    string $schemaName,
    array $definition
): string;
```

Generates SQL to create a table

#### `createView()` { #dbdialectsqlite-createview }

```php
public function createView(
    string $viewName,
    array $definition,
    string $schemaName = null
): string;
```

Generates SQL to create a view

#### `describeColumns()` { #dbdialectsqlite-describecolumns }

```php
public function describeColumns(
    string $table,
    string $schema = null
): string;
```

Generates SQL describing a table

```php
print_r(
    $dialect->describeColumns("posts")
);
```

#### `describeIndex()` { #dbdialectsqlite-describeindex }

```php
public function describeIndex( string $index ): string;
```

Generates SQL to query indexes detail on a table

#### `describeIndexes()` { #dbdialectsqlite-describeindexes }

```php
public function describeIndexes(
    string $table,
    string $schema = null
): string;
```

Generates SQL to query indexes on a table

#### `describeReferences()` { #dbdialectsqlite-describereferences }

```php
public function describeReferences(
    string $table,
    string $schema = null
): string;
```

Generates SQL to query foreign keys on a table

#### `dropCheck()` { #dbdialectsqlite-dropcheck }

```php
public function dropCheck(
    string $tableName,
    string $schemaName,
    string $checkName
): string;
```

SQLite cannot DROP a CHECK constraint from an existing table.

#### `dropColumn()` { #dbdialectsqlite-dropcolumn }

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

#### `dropForeignKey()` { #dbdialectsqlite-dropforeignkey }

```php
public function dropForeignKey(
    string $tableName,
    string $schemaName,
    string $referenceName
): string;
```

Generates SQL to delete a foreign key from a table

#### `dropIndex()` { #dbdialectsqlite-dropindex }

```php
public function dropIndex(
    string $tableName,
    string $schemaName,
    string $indexName
): string;
```

Generates SQL to delete an index from a table

#### `dropPrimaryKey()` { #dbdialectsqlite-dropprimarykey }

```php
public function dropPrimaryKey(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to delete primary key from a table

#### `dropTable()` { #dbdialectsqlite-droptable }

```php
public function dropTable(
    string $tableName,
    string $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a table

#### `dropView()` { #dbdialectsqlite-dropview }

```php
public function dropView(
    string $viewName,
    string $schemaName = null,
    bool $ifExists = true
): string;
```

Generates SQL to drop a view

#### `forUpdate()` { #dbdialectsqlite-forupdate }

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

#### `getColumnDefinition()` { #dbdialectsqlite-getcolumndefinition }

```php
public function getColumnDefinition( ColumnInterface $column ): string;
```

Gets the column name in SQLite

#### `listIndexesSql()` { #dbdialectsqlite-listindexessql }

```php
public function listIndexesSql(
    string $table,
    string $schema = null,
    string $keyName = null
): string;
```

Generates the SQL to get query list of indexes

```php
print_r(
    $dialect->listIndexesSql("blog")
);
```

#### `listTables()` { #dbdialectsqlite-listtables }

```php
public function listTables( string $schemaName = null ): string;
```

List all tables in database

```php
print_r(
    $dialect->listTables("blog")
);
```

#### `listViews()` { #dbdialectsqlite-listviews }

```php
public function listViews( string $schemaName = null ): string;
```

Generates the SQL to list all views of a schema or user

#### `modifyColumn()` { #dbdialectsqlite-modifycolumn }

```php
public function modifyColumn(
    string $tableName,
    string $schemaName,
    ColumnInterface $column,
    ColumnInterface $currentColumn = null
): string;
```

Generates SQL to modify a column in a table

#### `returning()` { #dbdialectsqlite-returning }

```php
public function returning(
    string $sqlQuery,
    array $columns
): string;
```

Appends a `RETURNING` clause to the supplied INSERT/UPDATE/DELETE
statement. Supported by SQLite 3.35+. Pass `["*"]` for `RETURNING *`,
or a list of column names.

#### `sharedLock()` { #dbdialectsqlite-sharedlock }

```php
public function sharedLock(
    string $sqlQuery,
    string $modifier = ""
): string;
```

SQLite has no row-level shared-lock construct, so the original query
is returned unchanged regardless of the `modifier` argument.

#### `tableExists()` { #dbdialectsqlite-tableexists }

```php
public function tableExists(
    string $tableName,
    string $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.table

```php
echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");
```

#### `tableOptions()` { #dbdialectsqlite-tableoptions }

```php
public function tableOptions(
    string $table,
    string $schema = null
): string;
```

Generates the SQL to describe the table creation options

#### `truncateTable()` { #dbdialectsqlite-truncatetable }

```php
public function truncateTable(
    string $tableName,
    string $schemaName
): string;
```

Generates SQL to truncate a table

#### `viewExists()` { #dbdialectsqlite-viewexists }

```php
public function viewExists(
    string $viewName,
    string $schemaName = null
): string;
```

Generates SQL checking for the existence of a schema.view


## Db\Enum

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Enum.zep){ .src-btn }

Constants for Phalcon\Db

<div class="api-tree" markdown>

- **`Phalcon\Db\Enum`**

</div>

### Constants

<div class="api-list" markdown>

-   `FETCH_ASSOC = \PDO::FETCH_ASSOC` `int`

-   `FETCH_BOTH = \PDO::FETCH_BOTH` `int`

-   `FETCH_BOUND = \PDO::FETCH_BOUND` `int`

-   `FETCH_CLASS = \PDO::FETCH_CLASS` `int`

-   `FETCH_CLASSTYPE = \PDO::FETCH_CLASSTYPE` `int`

-   `FETCH_COLUMN = \PDO::FETCH_COLUMN` `int`

-   `FETCH_DEFAULT = \PDO::FETCH_DEFAULT` `int`

-   `FETCH_FUNC = \PDO::FETCH_FUNC` `int`

-   `FETCH_GROUP = \PDO::FETCH_GROUP` `int`

-   `FETCH_INTO = \PDO::FETCH_INTO` `int`

-   `FETCH_KEY_PAIR = \PDO::FETCH_KEY_PAIR` `int`

-   `FETCH_LAZY = \PDO::FETCH_LAZY` `int`

-   `FETCH_NAMED = \PDO::FETCH_NAMED` `int`

-   `FETCH_NUM = \PDO::FETCH_NUM` `int`

-   `FETCH_OBJ = \PDO::FETCH_OBJ` `int`

-   `FETCH_ORI_NEXT = \PDO::FETCH_ORI_NEXT` `int`

-   `FETCH_PROPS_LATE = \PDO::FETCH_PROPS_LATE` `int`

-   `FETCH_SERIALIZE = \PDO::FETCH_SERIALIZE` `int`

-   `FETCH_UNIQUE = \PDO::FETCH_UNIQUE` `int`

</div>


## Db\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Db will use this class

<div class="api-tree" markdown>

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
        - [`Phalcon\Db\Exceptions\UpdateFieldCountMismatch`](#dbexceptionsupdatefieldcountmismatch)

</div>


## Db\Exceptions\CannotInsertWithoutData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/CannotInsertWithoutData.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\CannotInsertWithoutData`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionscannotinsertwithoutdata-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $table )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionscannotinsertwithoutdata-__construct }

```php
public function __construct( string $table );
```


## Db\Exceptions\CannotPrepareStatement

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/CannotPrepareStatement.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\CannotPrepareStatement`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionscannotpreparestatement-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionscannotpreparestatement-__construct }

```php
public function __construct();
```


## Db\Exceptions\CheckExpressionRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/CheckExpressionRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\CheckExpressionRequired`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionscheckexpressionrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionscheckexpressionrequired-__construct }

```php
public function __construct();
```


## Db\Exceptions\ColumnTypeRejectsAutoIncrement

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ColumnTypeRejectsAutoIncrement.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ColumnTypeRejectsAutoIncrement`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionscolumntyperejectsautoincrement-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionscolumntyperejectsautoincrement-__construct }

```php
public function __construct();
```


## Db\Exceptions\ColumnTypeRejectsScale

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ColumnTypeRejectsScale.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ColumnTypeRejectsScale`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionscolumntyperejectsscale-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionscolumntyperejectsscale-__construct }

```php
public function __construct();
```


## Db\Exceptions\ColumnTypeRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ColumnTypeRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ColumnTypeRequired`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionscolumntyperequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionscolumntyperequired-__construct }

```php
public function __construct();
```


## Db\Exceptions\ConflictTargetColumnRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ConflictTargetColumnRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ConflictTargetColumnRequired`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsconflicttargetcolumnrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsconflicttargetcolumnrequired-__construct }

```php
public function __construct();
```


## Db\Exceptions\ConflictUpdateColumnRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ConflictUpdateColumnRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ConflictUpdateColumnRequired`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsconflictupdatecolumnrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsconflictupdatecolumnrequired-__construct }

```php
public function __construct();
```


## Db\Exceptions\ForeignKeyColumnsRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ForeignKeyColumnsRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ForeignKeyColumnsRequired`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsforeignkeycolumnsrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsforeignkeycolumnsrequired-__construct }

```php
public function __construct();
```


## Db\Exceptions\GeneratedAutoIncrementConflict

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/GeneratedAutoIncrementConflict.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\GeneratedAutoIncrementConflict`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsgeneratedautoincrementconflict-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsgeneratedautoincrementconflict-__construct }

```php
public function __construct();
```


## Db\Exceptions\GeneratedDefaultConflict

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/GeneratedDefaultConflict.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\GeneratedDefaultConflict`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsgenerateddefaultconflict-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsgenerateddefaultconflict-__construct }

```php
public function __construct();
```


## Db\Exceptions\IncompleteBindTypes

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/IncompleteBindTypes.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\IncompleteBindTypes`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsincompletebindtypes-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsincompletebindtypes-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidBindParameter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidBindParameter.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidBindParameter`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidbindparameter-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidbindparameter-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidCheckExpression

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidCheckExpression.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidCheckExpression`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidcheckexpression-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidcheckexpression-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidGenerationExpression

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidGenerationExpression.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidGenerationExpression`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidgenerationexpression-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidgenerationexpression-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidGroupByExpression

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidGroupByExpression.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidGroupByExpression`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidgroupbyexpression-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidgroupbyexpression-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidIndexColumns

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidIndexColumns.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidIndexColumns`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidindexcolumns-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidindexcolumns-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidIndexDirections

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidIndexDirections.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidIndexDirections`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidindexdirections-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidindexdirections-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidIndexWhere

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidIndexWhere.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidIndexWhere`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidindexwhere-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidindexwhere-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidListExpression

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidListExpression.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidListExpression`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidlistexpression-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidlistexpression-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidOrderByExpression

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidOrderByExpression.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidOrderByExpression`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidorderbyexpression-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidorderbyexpression-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidSqlExpression

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidSqlExpression.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidSqlExpression`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidsqlexpression-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidsqlexpression-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidSqlExpressionType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidSqlExpressionType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidSqlExpressionType`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidsqlexpressiontype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $type )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidsqlexpressiontype-__construct }

```php
public function __construct( string $type );
```


## Db\Exceptions\InvalidUnaryExpression

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidUnaryExpression.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidUnaryExpression`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidunaryexpression-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidunaryexpression-__construct }

```php
public function __construct();
```


## Db\Exceptions\InvalidWhereConditions

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/InvalidWhereConditions.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\InvalidWhereConditions`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsinvalidwhereconditions-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsinvalidwhereconditions-__construct }

```php
public function __construct();
```


## Db\Exceptions\MatchedParameterNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/MatchedParameterNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\MatchedParameterNotFound`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsmatchedparameternotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsmatchedparameternotfound-__construct }

```php
public function __construct();
```


## Db\Exceptions\MaterializedViewsNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/MaterializedViewsNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\MaterializedViewsNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsmaterializedviewsnotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsmaterializedviewsnotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\MissingDefinitionKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/MissingDefinitionKey.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\MissingDefinitionKey`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsmissingdefinitionkey-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $key )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsmissingdefinitionkey-__construct }

```php
public function __construct( string $key );
```


## Db\Exceptions\MissingForeignKeyChecks

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/MissingForeignKeyChecks.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\MissingForeignKeyChecks`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsmissingforeignkeychecks-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsmissingforeignkeychecks-__construct }

```php
public function __construct();
```


## Db\Exceptions\MissingSqliteDatabase

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/MissingSqliteDatabase.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\MissingSqliteDatabase`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsmissingsqlitedatabase-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsmissingsqlitedatabase-__construct }

```php
public function __construct();
```


## Db\Exceptions\MysqlOnConflictNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/MysqlOnConflictNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\MysqlOnConflictNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsmysqlonconflictnotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsmysqlonconflictnotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\NestedTransactionChangeBlocked

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/NestedTransactionChangeBlocked.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\NestedTransactionChangeBlocked`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsnestedtransactionchangeblocked-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsnestedtransactionchangeblocked-__construct }

```php
public function __construct();
```


## Db\Exceptions\NoActiveTransaction

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/NoActiveTransaction.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\NoActiveTransaction`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsnoactivetransaction-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsnoactivetransaction-__construct }

```php
public function __construct();
```


## Db\Exceptions\ReferencedColumnCountMismatch

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ReferencedColumnCountMismatch.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ReferencedColumnCountMismatch`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsreferencedcolumncountmismatch-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsreferencedcolumncountmismatch-__construct }

```php
public function __construct();
```


## Db\Exceptions\ReferencedColumnsRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ReferencedColumnsRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ReferencedColumnsRequired`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsreferencedcolumnsrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsreferencedcolumnsrequired-__construct }

```php
public function __construct();
```


## Db\Exceptions\ReferencedTableRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ReferencedTableRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ReferencedTableRequired`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsreferencedtablerequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsreferencedtablerequired-__construct }

```php
public function __construct();
```


## Db\Exceptions\ReturningNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ReturningNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ReturningNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsreturningnotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsreturningnotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\ReturningRequiresColumn

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/ReturningRequiresColumn.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\ReturningRequiresColumn`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsreturningrequirescolumn-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsreturningrequirescolumn-__construct }

```php
public function __construct();
```


## Db\Exceptions\SavepointsNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/SavepointsNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\SavepointsNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionssavepointsnotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionssavepointsnotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\SqliteAlterCheckNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/SqliteAlterCheckNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\SqliteAlterCheckNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionssqlitealterchecknotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionssqlitealterchecknotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\SqliteAlterColumnNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/SqliteAlterColumnNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\SqliteAlterColumnNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionssqlitealtercolumnnotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionssqlitealtercolumnnotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\SqliteAlterForeignKeyNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/SqliteAlterForeignKeyNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\SqliteAlterForeignKeyNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionssqlitealterforeignkeynotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionssqlitealterforeignkeynotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\SqliteAlterPrimaryKeyNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/SqliteAlterPrimaryKeyNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\SqliteAlterPrimaryKeyNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionssqlitealterprimarykeynotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionssqlitealterprimarykeynotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\SqliteDropCheckNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/SqliteDropCheckNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\SqliteDropCheckNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionssqlitedropchecknotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionssqlitedropchecknotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\SqliteDropForeignKeyNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/SqliteDropForeignKeyNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\SqliteDropForeignKeyNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionssqlitedropforeignkeynotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionssqlitedropforeignkeynotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\SqliteDropPrimaryKeyNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/SqliteDropPrimaryKeyNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\SqliteDropPrimaryKeyNotSupported`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionssqlitedropprimarykeynotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionssqlitedropprimarykeynotsupported-__construct }

```php
public function __construct();
```


## Db\Exceptions\TableMustHaveColumn

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/TableMustHaveColumn.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\TableMustHaveColumn`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionstablemusthavecolumn-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionstablemusthavecolumn-__construct }

```php
public function __construct();
```


## Db\Exceptions\UnrecognizedDataType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/UnrecognizedDataType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\UnrecognizedDataType`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsunrecognizeddatatype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $dialect,
    string $column
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsunrecognizeddatatype-__construct }

```php
public function __construct(
    string $dialect,
    string $column
);
```


## Db\Exceptions\UpdateFieldCountMismatch

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Exceptions/UpdateFieldCountMismatch.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Db\Exception`](#dbexception)
        - **`Phalcon\Db\Exceptions\UpdateFieldCountMismatch`**

</div>

__Uses__ `Phalcon\Db\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbexceptionsupdatefieldcountmismatch-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #dbexceptionsupdatefieldcountmismatch-__construct }

```php
public function __construct();
```


## Db\Index

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Index.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Db\Index`** — implements [`Phalcon\Db\IndexInterface`](#dbindexinterface)

</div>

__Uses__ `Phalcon\Db\Exceptions\InvalidIndexColumns` · `Phalcon\Db\Exceptions\InvalidIndexDirections` · `Phalcon\Db\Exceptions\InvalidIndexWhere`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbindex-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    array $columnsOrDefinition,
    string $type = &quot;&quot;
)</code>
<span class="desc">Phalcon\Db\Index constructor.</span>
</a>
<a class="api-item" href="#dbindex-getcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getColumns()</code>
<span class="desc">Index columns</span>
</a>
<a class="api-item" href="#dbindex-getdirections">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getDirections()</code>
<span class="desc">Returns the per-column sort directions array (`ASC` / `DESC`).</span>
</a>
<a class="api-item" href="#dbindex-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Index name</span>
</a>
<a class="api-item" href="#dbindex-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getType()</code>
<span class="desc">Index type</span>
</a>
<a class="api-item" href="#dbindex-getwhere">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getWhere()</code>
<span class="desc">Returns the partial-index `WHERE` predicate, or an empty string when</span>
</a>
<a class="api-item" href="#dbindex-isconcurrent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isConcurrent()</code>
<span class="desc">Whether the index is built `CONCURRENTLY` (PostgreSQL only). MySQL</span>
</a>
<a class="api-item" href="#dbindex-isinvisible">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isInvisible()</code>
<span class="desc">Whether the index is declared `INVISIBLE` (MySQL 8.0+). Invisible</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$columns` `array`

    Index columns

-   `protected`{ .vis-protected } `$concurrent = false` `bool`

    Whether to build the index without taking a strong lock that blocks
    writes - emits `CONCURRENTLY` between `INDEX` and the index name on
    PostgreSQL (`CREATE INDEX CONCURRENTLY name ON ...`). MySQL and
    SQLite have no equivalent and ignore the flag.

-   `protected`{ .vis-protected } `$directions = []` `array`

    Per-column sort directions (`ASC` / `DESC`). Empty array means
    "emit no per-column direction" - preserves the legacy plain
    `(col1, col2)` rendering. When populated, entries shorter than
    the columns list default to `ASC` for the missing positions.

-   `protected`{ .vis-protected } `$invisible = false` `bool`

    Whether the index is declared `INVISIBLE` (MySQL 8.0+). Invisible
    indexes are ignored by the optimizer - useful for testing what
    happens when an index is removed before actually dropping it.
    PostgreSQL and SQLite have no equivalent and ignore the flag.

-   `protected`{ .vis-protected } `$name` `string`

    Index name

-   `protected`{ .vis-protected } `$type = ""` `string`

    Index type

-   `protected`{ .vis-protected } `$where = ""` `string`

    Optional partial-index `WHERE` predicate. Supported by PostgreSQL and
    SQLite (`CREATE INDEX ... WHERE <expr>`); MySQL has no partial-index
    concept and its dialect ignores this value. Empty string means no
    predicate.

</div>

### Methods

<div class="api-group">Public · 8</div>

#### `__construct()` { #dbindex-__construct }

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

#### `getColumns()` { #dbindex-getcolumns }

```php
public function getColumns(): array;
```

Index columns

#### `getDirections()` { #dbindex-getdirections }

```php
public function getDirections(): array;
```

Returns the per-column sort directions array (`ASC` / `DESC`).
Empty array means the index was declared without explicit per-column
directions and dialects emit the columns plainly. When populated,
entries are aligned with `getColumns()`; missing trailing positions
default to `ASC` at emission time.

#### `getName()` { #dbindex-getname }

```php
public function getName(): string;
```

Index name

#### `getType()` { #dbindex-gettype }

```php
public function getType(): string;
```

Index type

#### `getWhere()` { #dbindex-getwhere }

```php
public function getWhere(): string;
```

Returns the partial-index `WHERE` predicate, or an empty string when
the index has none. Supported by PostgreSQL and SQLite; ignored by
the MySQL dialect (MySQL has no partial-index feature).

#### `isConcurrent()` { #dbindex-isconcurrent }

```php
public function isConcurrent(): bool;
```

Whether the index is built `CONCURRENTLY` (PostgreSQL only). MySQL
and SQLite have no equivalent and ignore the flag.

#### `isInvisible()` { #dbindex-isinvisible }

```php
public function isInvisible(): bool;
```

Whether the index is declared `INVISIBLE` (MySQL 8.0+). Invisible
indexes are ignored by the optimizer but still maintained, so they
can be flipped back to visible without a rebuild.


## Db\IndexInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/IndexInterface.zep){ .src-btn }

Phalcon\Db\IndexInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Db\Index} instead.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Db\Index`](phalcon_contracts.md#contractsdbindex)
    - **`Phalcon\Db\IndexInterface`**

</div>

__Uses__ `Phalcon\Contracts\Db\Index`
{ .api-uses }


## Db\Profiler

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Profiler.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Db\Profiler`**

</div>

__Uses__ `Phalcon\Db\Profiler\Item`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbprofiler-getlastprofile">
<code class="vis vis-public">public</code>
<code class="ret">Item</code>
<code class="sig">getLastProfile()</code>
<span class="desc">Returns the last profile executed in the profiler</span>
</a>
<a class="api-item" href="#dbprofiler-getmaxprofiles">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getMaxProfiles()</code>
<span class="desc">Returns the configured maximum number of retained profiles</span>
</a>
<a class="api-item" href="#dbprofiler-getnumbertotalstatements">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getNumberTotalStatements()</code>
<span class="desc">Returns the total number of SQL statements processed</span>
</a>
<a class="api-item" href="#dbprofiler-getprofiles">
<code class="vis vis-public">public</code>
<code class="ret">Item[]</code>
<code class="sig">getProfiles()</code>
<span class="desc">Returns all the processed profiles</span>
</a>
<a class="api-item" href="#dbprofiler-gettotalelapsedmilliseconds">
<code class="vis vis-public">public</code>
<code class="ret">double</code>
<code class="sig">getTotalElapsedMilliseconds()</code>
<span class="desc">Returns the total time in milliseconds spent by the profiles</span>
</a>
<a class="api-item" href="#dbprofiler-gettotalelapsednanoseconds">
<code class="vis vis-public">public</code>
<code class="ret">double</code>
<code class="sig">getTotalElapsedNanoseconds()</code>
<span class="desc">Returns the total time in nanoseconds spent by the profiles</span>
</a>
<a class="api-item" href="#dbprofiler-gettotalelapsedseconds">
<code class="vis vis-public">public</code>
<code class="ret">double</code>
<code class="sig">getTotalElapsedSeconds()</code>
<span class="desc">Returns the total time in seconds spent by the profiles</span>
</a>
<a class="api-item" href="#dbprofiler-reset">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">reset()</code>
<span class="desc">Resets the profiler, cleaning up all the profiles</span>
</a>
<a class="api-item" href="#dbprofiler-setmaxprofiles">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setMaxProfiles( int $maxProfiles )</code>
<span class="desc">Sets the maximum number of retained profiles. 0 disables the cap</span>
</a>
<a class="api-item" href="#dbprofiler-startprofile">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">startProfile(
    string $sqlStatement,
    array $sqlVariables = [],
    array $sqlBindTypes = []
)</code>
<span class="desc">Starts the profile of a SQL sentence</span>
</a>
<a class="api-item" href="#dbprofiler-stopprofile">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">stopProfile()</code>
<span class="desc">Stops the active profile</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$activeProfile` `Item`

    Active Item

-   `protected`{ .vis-protected } `$allProfiles` `Item[]`

    All the Items in the active profile

-   `protected`{ .vis-protected } `$maxProfiles = 0` `int`

    Maximum number of profiles to retain. 0 (default) keeps the
    original unbounded behavior; a positive value drops the oldest
    profile FIFO before a new one is appended.

-   `protected`{ .vis-protected } `$totalNanoseconds = 0` `float`

    Total time spent by all profiles to complete in nanoseconds

</div>

### Methods

<div class="api-group">Public · 11</div>

#### `getLastProfile()` { #dbprofiler-getlastprofile }

```php
public function getLastProfile(): Item;
```

Returns the last profile executed in the profiler

#### `getMaxProfiles()` { #dbprofiler-getmaxprofiles }

```php
public function getMaxProfiles(): int;
```

Returns the configured maximum number of retained profiles
(0 = unlimited)

#### `getNumberTotalStatements()` { #dbprofiler-getnumbertotalstatements }

```php
public function getNumberTotalStatements(): int;
```

Returns the total number of SQL statements processed

#### `getProfiles()` { #dbprofiler-getprofiles }

```php
public function getProfiles(): Item[];
```

Returns all the processed profiles

#### `getTotalElapsedMilliseconds()` { #dbprofiler-gettotalelapsedmilliseconds }

```php
public function getTotalElapsedMilliseconds(): double;
```

Returns the total time in milliseconds spent by the profiles

#### `getTotalElapsedNanoseconds()` { #dbprofiler-gettotalelapsednanoseconds }

```php
public function getTotalElapsedNanoseconds(): double;
```

Returns the total time in nanoseconds spent by the profiles

#### `getTotalElapsedSeconds()` { #dbprofiler-gettotalelapsedseconds }

```php
public function getTotalElapsedSeconds(): double;
```

Returns the total time in seconds spent by the profiles

#### `reset()` { #dbprofiler-reset }

```php
public function reset(): static;
```

Resets the profiler, cleaning up all the profiles

#### `setMaxProfiles()` { #dbprofiler-setmaxprofiles }

```php
public function setMaxProfiles( int $maxProfiles ): static;
```

Sets the maximum number of retained profiles. 0 disables the cap
(the default; preserves the original unbounded behavior).

#### `startProfile()` { #dbprofiler-startprofile }

```php
public function startProfile(
    string $sqlStatement,
    array $sqlVariables = [],
    array $sqlBindTypes = []
): static;
```

Starts the profile of a SQL sentence

#### `stopProfile()` { #dbprofiler-stopprofile }

```php
public function stopProfile(): static;
```

Stops the active profile


## Db\Profiler\Item

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Profiler/Item.zep){ .src-btn }

This class identifies each profile in a Phalcon\Db\Profiler

<div class="api-tree" markdown>

- **`Phalcon\Db\Profiler\Item`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbprofileritem-getfinaltime">
<code class="vis vis-public">public</code>
<code class="ret">double</code>
<code class="sig">getFinalTime()</code>
<span class="desc">Return the timestamp when the profile ended</span>
</a>
<a class="api-item" href="#dbprofileritem-getinitialtime">
<code class="vis vis-public">public</code>
<code class="ret">double</code>
<code class="sig">getInitialTime()</code>
<span class="desc">Return the timestamp when the profile started</span>
</a>
<a class="api-item" href="#dbprofileritem-getsqlbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSqlBindTypes()</code>
<span class="desc">Return the SQL bind types related to the profile</span>
</a>
<a class="api-item" href="#dbprofileritem-getsqlstatement">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSqlStatement()</code>
<span class="desc">Return the SQL statement related to the profile</span>
</a>
<a class="api-item" href="#dbprofileritem-getsqlvariables">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSqlVariables()</code>
<span class="desc">Return the SQL variables related to the profile</span>
</a>
<a class="api-item" href="#dbprofileritem-gettotalelapsedmilliseconds">
<code class="vis vis-public">public</code>
<code class="ret">double</code>
<code class="sig">getTotalElapsedMilliseconds()</code>
<span class="desc">Returns the total time in milliseconds spent by the profile</span>
</a>
<a class="api-item" href="#dbprofileritem-gettotalelapsednanoseconds">
<code class="vis vis-public">public</code>
<code class="ret">double</code>
<code class="sig">getTotalElapsedNanoseconds()</code>
<span class="desc">Returns the total time in nanoseconds spent by the profile</span>
</a>
<a class="api-item" href="#dbprofileritem-gettotalelapsedseconds">
<code class="vis vis-public">public</code>
<code class="ret">double</code>
<code class="sig">getTotalElapsedSeconds()</code>
<span class="desc">Returns the total time in seconds spent by the profile</span>
</a>
<a class="api-item" href="#dbprofileritem-setfinaltime">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setFinalTime( double $finalTime )</code>
<span class="desc">Return the timestamp when the profile ended</span>
</a>
<a class="api-item" href="#dbprofileritem-setinitialtime">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setInitialTime( double $initialTime )</code>
<span class="desc">Return the timestamp when the profile started</span>
</a>
<a class="api-item" href="#dbprofileritem-setsqlbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setSqlBindTypes( array $sqlBindTypes )</code>
<span class="desc">Return the SQL bind types related to the profile</span>
</a>
<a class="api-item" href="#dbprofileritem-setsqlstatement">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setSqlStatement( string $sqlStatement )</code>
<span class="desc">Return the SQL statement related to the profile</span>
</a>
<a class="api-item" href="#dbprofileritem-setsqlvariables">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setSqlVariables( array $sqlVariables )</code>
<span class="desc">Return the SQL variables related to the profile</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$finalTime` `double`

    Timestamp when the profile ended

-   `protected`{ .vis-protected } `$initialTime` `double`

    Timestamp when the profile started

-   `protected`{ .vis-protected } `$sqlBindTypes` `array`

    SQL bind types related to the profile

-   `protected`{ .vis-protected } `$sqlStatement` `string`

    SQL statement related to the profile

-   `protected`{ .vis-protected } `$sqlVariables` `array`

    SQL variables related to the profile

</div>

### Methods

<div class="api-group">Public · 13</div>

#### `getFinalTime()` { #dbprofileritem-getfinaltime }

```php
public function getFinalTime(): double;
```

Return the timestamp when the profile ended

#### `getInitialTime()` { #dbprofileritem-getinitialtime }

```php
public function getInitialTime(): double;
```

Return the timestamp when the profile started

#### `getSqlBindTypes()` { #dbprofileritem-getsqlbindtypes }

```php
public function getSqlBindTypes(): array;
```

Return the SQL bind types related to the profile

#### `getSqlStatement()` { #dbprofileritem-getsqlstatement }

```php
public function getSqlStatement(): string;
```

Return the SQL statement related to the profile

#### `getSqlVariables()` { #dbprofileritem-getsqlvariables }

```php
public function getSqlVariables(): array;
```

Return the SQL variables related to the profile

#### `getTotalElapsedMilliseconds()` { #dbprofileritem-gettotalelapsedmilliseconds }

```php
public function getTotalElapsedMilliseconds(): double;
```

Returns the total time in milliseconds spent by the profile

#### `getTotalElapsedNanoseconds()` { #dbprofileritem-gettotalelapsednanoseconds }

```php
public function getTotalElapsedNanoseconds(): double;
```

Returns the total time in nanoseconds spent by the profile

#### `getTotalElapsedSeconds()` { #dbprofileritem-gettotalelapsedseconds }

```php
public function getTotalElapsedSeconds(): double;
```

Returns the total time in seconds spent by the profile

#### `setFinalTime()` { #dbprofileritem-setfinaltime }

```php
public function setFinalTime( double $finalTime ): static;
```

Return the timestamp when the profile ended

#### `setInitialTime()` { #dbprofileritem-setinitialtime }

```php
public function setInitialTime( double $initialTime ): static;
```

Return the timestamp when the profile started

#### `setSqlBindTypes()` { #dbprofileritem-setsqlbindtypes }

```php
public function setSqlBindTypes( array $sqlBindTypes ): static;
```

Return the SQL bind types related to the profile

#### `setSqlStatement()` { #dbprofileritem-setsqlstatement }

```php
public function setSqlStatement( string $sqlStatement ): static;
```

Return the SQL statement related to the profile

#### `setSqlVariables()` { #dbprofileritem-setsqlvariables }

```php
public function setSqlVariables( array $sqlVariables ): static;
```

Return the SQL variables related to the profile


## Db\RawValue

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/RawValue.zep){ .src-btn }

This class allows to insert/update raw data without quoting or formatting.

The next example shows how to use the MySQL now() function as a field value.

```php
$subscriber = new Subscribers();

$subscriber->email     = "andres@phalcon.io";
$subscriber->createdAt = new \Phalcon\Db\RawValue("now()");

$subscriber->save();
```

<div class="api-tree" markdown>

- **`Phalcon\Db\RawValue`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbrawvalue-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( mixed $value )</code>
<span class="desc">Phalcon\Db\RawValue constructor</span>
</a>
<a class="api-item" href="#dbrawvalue-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">__toString()</code>
</a>
<a class="api-item" href="#dbrawvalue-getvalue">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getValue()</code>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$value` `string`

    Raw value without quoting or formatting

</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #dbrawvalue-__construct }

```php
public function __construct( mixed $value );
```

Phalcon\Db\RawValue constructor

#### `__toString()` { #dbrawvalue-__tostring }

```php
public function __toString(): string;
```

#### `getValue()` { #dbrawvalue-getvalue }

```php
public function getValue(): string;
```


## Db\Reference

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Reference.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Db\Reference`** — implements [`Phalcon\Db\ReferenceInterface`](#dbreferenceinterface)

</div>

__Uses__ `Phalcon\Db\Exceptions\ForeignKeyColumnsRequired` · `Phalcon\Db\Exceptions\ReferencedColumnCountMismatch` · `Phalcon\Db\Exceptions\ReferencedColumnsRequired` · `Phalcon\Db\Exceptions\ReferencedTableRequired`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbreference-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    array $definition
)</code>
<span class="desc">Phalcon\Db\Reference constructor</span>
</a>
<a class="api-item" href="#dbreference-getcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getColumns()</code>
<span class="desc">Local reference columns</span>
</a>
<a class="api-item" href="#dbreference-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getName()</code>
<span class="desc">Constraint name</span>
</a>
<a class="api-item" href="#dbreference-getondelete">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getOnDelete()</code>
<span class="desc">ON DELETE</span>
</a>
<a class="api-item" href="#dbreference-getonupdate">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getOnUpdate()</code>
<span class="desc">ON UPDATE</span>
</a>
<a class="api-item" href="#dbreference-getreferencedcolumns">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getReferencedColumns()</code>
<span class="desc">Referenced Columns</span>
</a>
<a class="api-item" href="#dbreference-getreferencedschema">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getReferencedSchema()</code>
<span class="desc">Referenced Schema</span>
</a>
<a class="api-item" href="#dbreference-getreferencedtable">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getReferencedTable()</code>
<span class="desc">Referenced Table</span>
</a>
<a class="api-item" href="#dbreference-getschemaname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getSchemaName()</code>
<span class="desc">Schema name</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$columns` `array`

    Local reference columns

-   `protected`{ .vis-protected } `$name` `string`

    Constraint name

-   `protected`{ .vis-protected } `$onDelete` `string`

    ON DELETE

-   `protected`{ .vis-protected } `$onUpdate` `string`

    ON UPDATE

-   `protected`{ .vis-protected } `$referencedColumns` `array`

    Referenced Columns

-   `protected`{ .vis-protected } `$referencedSchema` `string`

    Referenced Schema

-   `protected`{ .vis-protected } `$referencedTable` `string`

    Referenced Table

-   `protected`{ .vis-protected } `$schemaName` `string`

    Schema name

</div>

### Methods

<div class="api-group">Public · 9</div>

#### `__construct()` { #dbreference-__construct }

```php
public function __construct(
    string $name,
    array $definition
);
```

Phalcon\Db\Reference constructor

#### `getColumns()` { #dbreference-getcolumns }

```php
public function getColumns(): array;
```

Local reference columns

#### `getName()` { #dbreference-getname }

```php
public function getName(): string;
```

Constraint name

#### `getOnDelete()` { #dbreference-getondelete }

```php
public function getOnDelete(): string|null;
```

ON DELETE

#### `getOnUpdate()` { #dbreference-getonupdate }

```php
public function getOnUpdate(): string|null;
```

ON UPDATE

#### `getReferencedColumns()` { #dbreference-getreferencedcolumns }

```php
public function getReferencedColumns(): array;
```

Referenced Columns

#### `getReferencedSchema()` { #dbreference-getreferencedschema }

```php
public function getReferencedSchema(): string|null;
```

Referenced Schema

#### `getReferencedTable()` { #dbreference-getreferencedtable }

```php
public function getReferencedTable(): string;
```

Referenced Table

#### `getSchemaName()` { #dbreference-getschemaname }

```php
public function getSchemaName(): string|null;
```

Schema name


## Db\ReferenceInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/ReferenceInterface.zep){ .src-btn }

Phalcon\Db\ReferenceInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Db\Reference} instead.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Db\Reference`](phalcon_contracts.md#contractsdbreference)
    - **`Phalcon\Db\ReferenceInterface`**

</div>

__Uses__ `Phalcon\Contracts\Db\Reference`
{ .api-uses }


## Db\ResultInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/ResultInterface.zep){ .src-btn }

Phalcon\Db\ResultInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Db\Result} instead.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Db\Result`](phalcon_contracts.md#contractsdbresult)
    - **`Phalcon\Db\ResultInterface`**

</div>

__Uses__ `Phalcon\Contracts\Db\Result`
{ .api-uses }


## Db\Result\PdoResult

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Db/Result/PdoResult.zep){ .src-btn }

Encapsulates the resultset internals

```php
$result = $connection->query("SELECT * FROM robots ORDER BY name");

$result->setFetchMode(
    \Phalcon\Db\Enum::FETCH_NUM
);

while ($robot = $result->fetchArray()) {
    print_r($robot);
}
```

<div class="api-tree" markdown>

- **`Phalcon\Db\Result\PdoResult`** — implements [`Phalcon\Db\ResultInterface`](#dbresultinterface)

</div>

__Uses__ `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Db\Enum` · `Phalcon\Db\ResultInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#dbresultpdoresult-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    AdapterInterface $connection,
    \PDOStatement $result,
    mixed $sqlStatement = null,
    mixed $bindParams = null,
    mixed $bindTypes = null
)</code>
<span class="desc">Phalcon\Db\Result\Pdo constructor</span>
</a>
<a class="api-item" href="#dbresultpdoresult-dataseek">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">dataSeek( int $number )</code>
<span class="desc">Moves internal resultset cursor to another position letting us to fetch a</span>
</a>
<a class="api-item" href="#dbresultpdoresult-execute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">execute()</code>
<span class="desc">Allows to execute the statement again. Some database systems don&#039;t</span>
</a>
<a class="api-item" href="#dbresultpdoresult-fetch">
<code class="vis vis-public">public</code>
<code class="sig">fetch(
    int $fetchStyle = null,
    int $cursorOrientation = Enum::FETCH_ORI_NEXT,
    int $cursorOffset = 0
)</code>
<span class="desc">Fetches an array/object of strings that corresponds to the fetched row,</span>
</a>
<a class="api-item" href="#dbresultpdoresult-fetchall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fetchAll(
    int $mode = Enum::FETCH_DEFAULT,
    mixed $fetchArgument = Enum::FETCH_ORI_NEXT,
    mixed $constructorArgs = null
)</code>
<span class="desc">Returns an array of arrays containing all the records in the result</span>
</a>
<a class="api-item" href="#dbresultpdoresult-fetcharray">
<code class="vis vis-public">public</code>
<code class="sig">fetchArray()</code>
<span class="desc">Returns an array of strings that corresponds to the fetched row, or FALSE</span>
</a>
<a class="api-item" href="#dbresultpdoresult-getinternalresult">
<code class="vis vis-public">public</code>
<code class="ret">\PDOStatement</code>
<code class="sig">getInternalResult()</code>
<span class="desc">Gets the internal PDO result object</span>
</a>
<a class="api-item" href="#dbresultpdoresult-numrows">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">numRows()</code>
<span class="desc">Gets number of rows returned by a resultset</span>
</a>
<a class="api-item" href="#dbresultpdoresult-setfetchmode">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">setFetchMode(
    int $fetchMode,
    mixed $colNoOrClassNameOrObject = null,
    mixed $ctorargs = null
)</code>
<span class="desc">Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$bindParams = []` `array`

-   `protected`{ .vis-protected } `$bindTypes = []` `array`

-   `protected`{ .vis-protected } `$connection` `AdapterInterface`

-   `protected`{ .vis-protected } `$fetchMode = Enum::FETCH_DEFAULT` `int`

    Active fetch mode

-   `protected`{ .vis-protected } `$pdoStatement` `\PDOStatement`

    Internal resultset

-   `protected`{ .vis-protected } `$result` `mixed`

-   `protected`{ .vis-protected } `$rowCount = null` `int|null`

-   `protected`{ .vis-protected } `$sqlStatement = null` `string|null`

</div>

### Methods

<div class="api-group">Public · 9</div>

#### `__construct()` { #dbresultpdoresult-__construct }

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

#### `dataSeek()` { #dbresultpdoresult-dataseek }

```php
public function dataSeek( int $number ): void;
```

Moves internal resultset cursor to another position letting us to fetch a
certain row

```php
$result = $connection->query(
    "SELECT * FROM robots ORDER BY name"
);

// Move to third row on result
$result->dataSeek(2);

// Fetch third row
$row = $result->fetch();
```

#### `execute()` { #dbresultpdoresult-execute }

```php
public function execute(): bool;
```

Allows to execute the statement again. Some database systems don't
support scrollable cursors. So, as cursors are forward only, we need to
execute the cursor again to fetch rows from the beginning

#### `fetch()` { #dbresultpdoresult-fetch }

```php
public function fetch(
    int $fetchStyle = null,
    int $cursorOrientation = Enum::FETCH_ORI_NEXT,
    int $cursorOffset = 0
);
```

Fetches an array/object of strings that corresponds to the fetched row,
or FALSE if there are no more rows. This method is affected by the active
fetch flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

```php
$result = $connection->query("SELECT * FROM robots ORDER BY name");

$result->setFetchMode(
    \Phalcon\Enum::FETCH_OBJ
);

while ($robot = $result->fetch()) {
    echo $robot->name;
}
```

#### `fetchAll()` { #dbresultpdoresult-fetchall }

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
    "SELECT * FROM robots ORDER BY name"
);

$robots = $result->fetchAll();
```

#### `fetchArray()` { #dbresultpdoresult-fetcharray }

```php
public function fetchArray();
```

Returns an array of strings that corresponds to the fetched row, or FALSE
if there are no more rows. This method is affected by the active fetch
flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`

```php
$result = $connection->query("SELECT * FROM robots ORDER BY name");

$result->setFetchMode(
    \Phalcon\Enum::FETCH_NUM
);

while ($robot = result->fetchArray()) {
    print_r($robot);
}
```

#### `getInternalResult()` { #dbresultpdoresult-getinternalresult }

```php
public function getInternalResult(): \PDOStatement;
```

Gets the internal PDO result object

#### `numRows()` { #dbresultpdoresult-numrows }

```php
public function numRows(): int;
```

Gets number of rows returned by a resultset

```php
$result = $connection->query(
    "SELECT * FROM robots ORDER BY name"
);

echo "There are ", $result->numRows(), " rows in the resultset";
```

#### `setFetchMode()` { #dbresultpdoresult-setfetchmode }

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
