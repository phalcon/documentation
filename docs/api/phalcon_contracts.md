---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Contracts\Db\Adapter\Adapter ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Adapter/Adapter.zep)


-   __Namespace__

    - `Phalcon\Contracts\Db\Adapter`

-   __Uses__
    
    - `Phalcon\Db\ColumnInterface`
    - `Phalcon\Db\DialectInterface`
    - `Phalcon\Db\IndexInterface`
    - `Phalcon\Db\RawValue`
    - `Phalcon\Db\ReferenceInterface`
    - `Phalcon\Db\ResultInterface`

-   __Extends__
    

-   __Implements__
    

Canonical contract for Phalcon\Db adapters.

@todo v7 — these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - addCheck()                : bool
             - createMaterializedView()  : bool
             - dropCheck()               : bool
             - dropMaterializedView()    : bool
             - onConflictUpdate()        : string
             - refreshMaterializedView() : bool
             - returning()               : string


### Methods

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
public function affectedRows(): int;
```
Returns the number of affected rows by the last INSERT/UPDATE/DELETE
reported by the database system


```php
public function begin( bool $nesting = bool ): bool;
```
Starts a transaction in the connection


```php
public function close(): void;
```
Closes active connection returning success. Phalcon automatically closes
and destroys active connections within Phalcon\Db\Pool


```php
public function commit( bool $nesting = bool ): bool;
```
Commits the active transaction in the connection


```php
public function connect( array $descriptor = [] ): void;
```
This method is automatically called in \Phalcon\Db\Adapter\Pdo
constructor. Call it when you need to restore a database connection


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
Deletes data from a table using custom RDBMS SQL syntax


```php
public function describeColumns( string $table, string $schema = null ): ColumnInterface[];
```
Returns an array of Phalcon\Db\Column objects describing a table


```php
public function describeIndexes( string $table, string $schema = null ): IndexInterface[];
```
Lists table indexes


```php
public function describeReferences( string $table, string $schema = null ): ReferenceInterface[];
```
Lists table references


```php
public function dropColumn( string $tableName, string $schemaName, string $columnName ): bool;
```
Drops a column from a table


```php
public function dropForeignKey( string $tableName, string $schemaName, string $referenceName ): bool;
```
Drops a foreign key from a table


```php
public function dropIndex( string $tableName, string $schemaName, string $indexName ): bool;
```
Drop an index from a table


```php
public function dropPrimaryKey( string $tableName, string $schemaName ): bool;
```
Drops primary key from a table


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
public function escapeString( string $str ): string;
```
Escapes a value to avoid SQL injections


```php
public function execute( string $sqlStatement, array $bindParams = [], array $bindTypes = [] ): bool;
```
Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server does not
return any rows


```php
public function fetchAll( string $sqlQuery, int $fetchMode = int, array $bindParams = [], array $bindTypes = [] ): array;
```
Dumps the complete result of a query into an array


```php
public function fetchColumn( string $sqlQuery, array $placeholders = [], mixed $column = int ): string | bool;
```
Returns the n'th field of first row in a SQL query result

```php
// Getting count of robots
$robotsCount = $connection->fetchColumn("SELECT COUNT(*) FROM robots");
print_r($robotsCount);

// Getting name of last edited robot
$robot = $connection->fetchColumn(
    "SELECT id, name FROM robots ORDER BY modified DESC",
    1
);
print_r($robot);
```


```php
public function fetchOne( string $sqlQuery, int $fetchMode = int, array $bindParams = [], array $bindTypes = [] ): array;
```
Returns the first row in a SQL query result


```php
public function forUpdate( string $sqlQuery, string $modifier = string ): string;
```
Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword — pass `Dialect::LOCK_NOWAIT`
or `Dialect::LOCK_SKIP_LOCKED` (or leave as `Dialect::LOCK_NONE`).


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
Return the default identity value to insert in an identity column


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
Returns the name of the dialect used


```php
public function getInternalHandler(): mixed;
```
Return internal PDO handler


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
Active SQL statement in the object


```php
public function getType(): string;
```
Returns type of database system the adapter is used for


```php
public function insert( string $table, array $values, mixed $fields = null, mixed $dataTypes = null ): bool;
```
Inserts data into a table using custom RDBMS SQL syntax


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
public function isUnderTransaction(): bool;
```
Checks whether connection is under database transaction


```php
public function lastInsertId( string $name = null ): string | bool;
```
Returns insert id for the auto_increment column inserted in the last SQL
statement


```php
public function limit( string $sqlQuery, int $number ): string;
```
Appends a LIMIT clause to sqlQuery argument


```php
public function listTables( string $schemaName = null ): array;
```
List all tables on a database


```php
public function listViews( string $schemaName = null ): array;
```
List all views on a database


```php
public function modifyColumn( string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface $currentColumn = null ): bool;
```
Modifies a table column based on a definition


```php
public function query( string $sqlStatement, array $bindParams = [], array $bindTypes = [] ): ResultInterface | bool;
```
Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server returns
rows


```php
public function releaseSavepoint( string $name ): bool;
```
Releases given savepoint


```php
public function rollback( bool $nesting = bool ): bool;
```
Rollbacks the active transaction in the connection


```php
public function rollbackSavepoint( string $name ): bool;
```
Rollbacks given savepoint


```php
public function setNestedTransactionsWithSavepoints( bool $nestedTransactionsWithSavepoints ): Adapter;
```
Set if nested transactions should use savepoints


```php
public function sharedLock( string $sqlQuery, string $modifier = string ): string;
```
Returns a SQL modified with a shared-lock clause. See the dialect's
`sharedLock()` for per-engine semantics. The optional `modifier` is
passed straight through (use `Dialect::LOCK_NOWAIT` /
`Dialect::LOCK_SKIP_LOCKED` for PostgreSQL).


```php
public function supportSequences(): bool;
```
Check whether the database system requires a sequence to produce
auto-numeric values


```php
public function supportsDefaultValue(): bool;
```
SQLite does not support the DEFAULT keyword

@deprecated Will re removed in the next version


```php
public function tableExists( string $tableName, string $schemaName = null ): bool;
```
Generates SQL checking for the existence of a schema.table


```php
public function tableOptions( string $tableName, string $schemaName = null ): array;
```
Gets creation options from a table


```php
public function update( string $table, mixed $fields, mixed $values, mixed $whereCondition = null, mixed $dataTypes = null ): bool;
```
Updates data on a table using custom RDBMS SQL syntax


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




## Contracts\Db\Check ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Check.zep)


-   __Namespace__

    - `Phalcon\Contracts\Db`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Canonical contract for Phalcon\Db\Check.


### Methods

```php
public function getExpression(): string;
```
Gets the CHECK expression (the SQL boolean predicate).


```php
public function getName(): string;
```
Gets the constraint name. An empty string indicates an unnamed CHECK
constraint — the dialect will emit the clause without a `CONSTRAINT`
prefix in that case.




## Contracts\Db\Column ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Column.zep)


-   __Namespace__

    - `Phalcon\Contracts\Db`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Canonical contract for Phalcon\Db\Column.

@todo v7 — these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - getGenerationExpression() : string | null
             - isArray()                 : bool
             - isGenerated()             : bool
             - isGenerationStored()      : bool
             - isInvisible()             : bool


### Methods

```php
public function getAfterPosition(): string | null;
```
Check whether field absolute to position in table


```php
public function getBindType(): int;
```
Returns the type of bind handling


```php
public function getDefault(): mixed;
```
Returns default value of column


```php
public function getName(): string;
```
Returns column name


```php
public function getScale(): int;
```
Returns column scale


```php
public function getSize(): int | string;
```
Returns column size


```php
public function getType(): int | string;
```
Returns column type


```php
public function getTypeReference(): int;
```
Returns column type reference


```php
public function getTypeValues(): array | string;
```
Returns column type values


```php
public function hasDefault(): bool;
```
Check whether column has default value


```php
public function isAutoIncrement(): bool;
```
Auto-Increment


```php
public function isFirst(): bool;
```
Check whether column have first position in table


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




## Contracts\Db\Dialect ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Dialect.zep)


-   __Namespace__

    - `Phalcon\Contracts\Db`

-   __Uses__
    
    - `Phalcon\Db\ColumnInterface`
    - `Phalcon\Db\IndexInterface`
    - `Phalcon\Db\ReferenceInterface`

-   __Extends__
    

-   __Implements__
    

Canonical contract for Phalcon\Db dialects.

@todo v7 — these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - addCheck()                : string
             - createMaterializedView()  : string
             - dropCheck()               : string
             - dropMaterializedView()    : string
             - onConflictUpdate()        : string
             - refreshMaterializedView() : string
             - returning()               : string


### Constants
```php
const LOCK_NONE = ;
const LOCK_NOWAIT = NOWAIT;
const LOCK_SKIP_LOCKED = SKIP LOCKED;
```

### Methods

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
public function createSavepoint( string $name ): string;
```
Generate SQL to create a new savepoint


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
Generates SQL to describe a table


```php
public function describeIndexes( string $table, string $schema = null ): string;
```
Generates SQL to query indexes on a table


```php
public function describeReferences( string $table, string $schema = null ): string;
```
Generates SQL to query foreign keys on a table


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
public function dropTable( string $tableName, string $schemaName, bool $ifExists = bool ): string;
```
Generates SQL to drop a table


```php
public function dropView( string $viewName, string $schemaName = null, bool $ifExists = bool ): string;
```
Generates SQL to drop a view


```php
public function forUpdate( string $sqlQuery, string $modifier = string ): string;
```
Returns a SQL modified with a FOR UPDATE clause. The optional `modifier`
appends a row-lock disposition keyword — pass `Dialect::LOCK_NOWAIT`
or `Dialect::LOCK_SKIP_LOCKED` (or leave as `Dialect::LOCK_NONE`).


```php
public function getColumnDefinition( ColumnInterface $column ): string;
```
Gets the column name in RDBMS


```php
public function getColumnList( array $columnList ): string;
```
Gets a list of columns


```php
public function getCustomFunctions(): array;
```
Returns registered functions


```php
public function getSqlExpression( array $expression, string $escapeChar = null, array $bindCounts = [] ): string;
```
Transforms an intermediate representation for an expression into a
database system valid expression


```php
public function limit( string $sqlQuery, mixed $number ): string;
```
Generates the SQL for LIMIT clause


```php
public function listTables( string $schemaName = null ): string;
```
List all tables in database


```php
public function modifyColumn( string $tableName, string $schemaName, ColumnInterface $column, ColumnInterface $currentColumn = null ): string;
```
Generates SQL to modify a column in a table


```php
public function registerCustomFunction( string $name, callable $customFunction ): \Phalcon\Db\Dialect;
```
Registers custom SQL functions


```php
public function releaseSavepoint( string $name ): string;
```
Generate SQL to release a savepoint


```php
public function rollbackSavepoint( string $name ): string;
```
Generate SQL to rollback a savepoint


```php
public function select( array $definition ): string;
```
Builds a SELECT statement


```php
public function sharedLock( string $sqlQuery, string $modifier = string ): string;
```
Returns a SQL modified with a shared-lock clause. MySQL emits
`LOCK IN SHARE MODE`; PostgreSQL emits `FOR SHARE`; SQLite returns the
original query unchanged. The optional `modifier` appends a row-lock
disposition keyword (`Dialect::LOCK_NOWAIT` / `Dialect::LOCK_SKIP_LOCKED`)
for PostgreSQL — MySQL's legacy `LOCK IN SHARE MODE` does not support
modifiers, so non-empty values are silently ignored on MySQL.


```php
public function supportsReleaseSavepoints(): bool;
```
Checks whether the platform supports releasing savepoints.


```php
public function supportsSavepoints(): bool;
```
Checks whether the platform supports savepoints


```php
public function tableExists( string $tableName, string $schemaName = null ): string;
```
Generates SQL checking for the existence of a schema.table


```php
public function tableOptions( string $table, string $schema = null ): string;
```
Generates the SQL to describe the table creation options


```php
public function viewExists( string $viewName, string $schemaName = null ): string;
```
Generates SQL checking for the existence of a schema.view




## Contracts\Db\Index ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Index.zep)


-   __Namespace__

    - `Phalcon\Contracts\Db`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Canonical contract for Phalcon\Db\Index.

@todo v7 — these will become required interface members. They are
           omitted from the v5 line to avoid breaking third-party
           implementors:
             - getDirections() : array
             - getWhere()      : string
             - isConcurrent()  : bool
             - isInvisible()   : bool


### Methods

```php
public function getColumns(): array;
```
Gets the columns that corresponds the index


```php
public function getName(): string;
```
Gets the index name


```php
public function getType(): string;
```
Gets the index type




## Contracts\Db\Reference ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Reference.zep)


-   __Namespace__

    - `Phalcon\Contracts\Db`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Canonical contract for Phalcon\Db\Reference.


### Methods

```php
public function getColumns(): array;
```
Gets local columns which reference is based


```php
public function getName(): string;
```
Gets the index name


```php
public function getOnDelete(): string | null;
```
Gets the referenced on delete


```php
public function getOnUpdate(): string | null;
```
Gets the referenced on update


```php
public function getReferencedColumns(): array;
```
Gets referenced columns


```php
public function getReferencedSchema(): string | null;
```
Gets the schema where referenced table is


```php
public function getReferencedTable(): string;
```
Gets the referenced table


```php
public function getSchemaName(): string | null;
```
Gets the schema where referenced table is




## Contracts\Db\Result ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Db/Result.zep)


-   __Namespace__

    - `Phalcon\Contracts\Db`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Canonical contract for Phalcon\Db result objects.


### Methods

```php
public function dataSeek( int $number );
```
Moves internal resultset cursor to another position letting us to fetch a
certain row


```php
public function execute(): bool;
```
Allows to execute the statement again. Some database systems don't
support scrollable cursors. So, as cursors are forward only, we need to
execute the cursor again to fetch rows from the beginning


```php
public function fetch(): mixed;
```
Fetches an array/object of strings that corresponds to the fetched row,
or FALSE if there are no more rows. This method is affected by the active
fetch flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`


```php
public function fetchAll(): array;
```
Returns an array of arrays containing all the records in the result. This
method is affected by the active fetch flag set using
`Phalcon\Db\Result\Pdo::setFetchMode()`


```php
public function fetchArray(): mixed;
```
Returns an array of strings that corresponds to the fetched row, or FALSE
if there are no more rows. This method is affected by the active fetch
flag set using `Phalcon\Db\Result\Pdo::setFetchMode()`


```php
public function getInternalResult(): \PDOStatement;
```
Gets the internal PDO result object


```php
public function numRows(): int;
```
Gets number of rows returned by a resultset


```php
public function setFetchMode( int $fetchMode ): bool;
```
Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()




## Contracts\Encryption\Security\CryptoUtils ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/CryptoUtils.zep)


-   __Namespace__

    - `Phalcon\Contracts\Encryption\Security`

-   __Uses__
    
    - `Phalcon\Encryption\Security\Random`

-   __Extends__
    

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function computeHmac( string $data, string $key, string $algo, bool $raw = bool ): string;
```



```php
public function getRandom(): Random;
```



```php
public function getRandomBytes(): int;
```



```php
public function getSaltBytes( int $numberBytes = int ): string;
```



```php
public function setRandomBytes( int $randomBytes ): Security;
```





## Contracts\Encryption\Security\CsrfProtection ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/CsrfProtection.zep)


-   __Namespace__

    - `Phalcon\Contracts\Encryption\Security`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function checkToken( string $tokenKey = null, mixed $tokenValue = null, bool $destroyIfValid = bool ): bool;
```



```php
public function destroyToken(): Security;
```



```php
public function getRequestToken(): string | null;
```



```php
public function getSessionToken(): string | null;
```



```php
public function getToken(): string | null;
```



```php
public function getTokenKey(): string | null;
```





## Contracts\Encryption\Security\PasswordSecurity ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/PasswordSecurity.zep)


-   __Namespace__

    - `Phalcon\Contracts\Encryption\Security`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function checkHash( string $password, string $passwordHash, int $maxPassLength = int ): bool;
```



```php
public function getDefaultHash(): int;
```



```php
public function getHashInformation( string $hash ): array;
```



```php
public function getWorkFactor(): int;
```



```php
public function hash( string $password, array $options = [] ): string;
```



```php
public function isLegacyHash( string $passwordHash ): bool;
```



```php
public function setDefaultHash( int $defaultHash ): Security;
```



```php
public function setWorkFactor( int $workFactor ): Security;
```





## Contracts\Encryption\Security\Security ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Encryption/Security/Security.zep)


-   __Namespace__

    - `Phalcon\Contracts\Encryption\Security`

-   __Uses__
    

-   __Extends__
    
    `CryptoUtils`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.



## Contracts\Events\Event ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Event.zep)


-   __Namespace__

    - `Phalcon\Contracts\Events`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Canonical contract for Phalcon\Events\Event.


### Methods

```php
public function getData(): mixed;
```
Gets event data


```php
public function getType(): mixed;
```
Gets event type


```php
public function isCancelable(): bool;
```
Check whether the event is cancelable


```php
public function isStopped(): bool;
```
Check whether the event is currently stopped


```php
public function setData( mixed $data = null ): Event;
```
Sets event data


```php
public function setType( string $type ): Event;
```
Sets event type


```php
public function stop(): Event;
```
Stops the event preventing propagation




## Contracts\Events\EventsAware ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/EventsAware.zep)


-   __Namespace__

    - `Phalcon\Contracts\Events`

-   __Uses__
    
    - `Phalcon\Events\ManagerInterface`

-   __Extends__
    

-   __Implements__
    

Canonical contract for Phalcon\Events\EventsAwareInterface. Implemented by
components that accept an events manager and dispatch through it.

Cross-references the legacy ManagerInterface (not the canonical Manager
contract) to preserve LSP for the many AbstractEventsAware subclasses that
already type-hint ManagerInterface. ManagerInterface extends Manager, so
this remains type-compatible with any code that needs the canonical surface.


### Methods

```php
public function getEventsManager(): ManagerInterface | null;
```
Returns the internal events manager


```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```
Sets the events manager




## Contracts\Events\Manager ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Manager.zep)


-   __Namespace__

    - `Phalcon\Contracts\Events`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Canonical contract for Phalcon\Events\Manager.


### Constants
```php
const DEFAULT_PRIORITY = 100;
```

### Methods

```php
public function addSubscriber( Subscriber $subscriber ): void;
```
Registers an event subscriber. The subscriber's getSubscribedEvents()
map is parsed and each entry is attached through the regular listener
pipeline.


```php
public function arePrioritiesEnabled(): bool;
```
Returns whether priority ordering is currently enabled.


```php
public function attach( string $eventType, mixed $handler, int $priority = static-constant-access ): void;
```
Attach a listener to the events manager.


```php
public function clearSubscribers(): void;
```
Removes every registered subscriber and detaches each listener they
contributed. Listeners attached via attach() are untouched.


```php
public function collectResponses( bool $collect ): void;
```
Toggle response collection on/off.


```php
public function detach( string $eventType, mixed $handler ): void;
```
Detach a listener from the events manager.


```php
public function detachAll( string $type = null ): void;
```
Removes all listeners — globally or for a single event type.


```php
public function enablePriorities( bool $enablePriorities ): void;
```
Toggle priority ordering on/off.


```php
public function fire( string $eventType, object $source, mixed $data = null, bool $cancelable = bool );
```
Fires an event, notifying the active listeners.


```php
public function getListeners( string $type ): array;
```
Returns all listeners attached to the given event type.


```php
public function getResponses(): array;
```
Returns the responses recorded during the last fire (when collecting).


```php
public function getSubscribers(): array;
```
Returns the list of registered subscriber instances.


```php
public function hasListeners( string $type ): bool;
```
Check whether the given event type has any listeners.


```php
public function isCollecting(): bool;
```
Check whether the manager is currently collecting responses.


```php
public function isValidHandler( mixed $handler ): bool;
```
Returns true when the given handler is an object or callable.


```php
public function removeSubscriber( Subscriber $subscriber ): void;
```
Removes a previously registered subscriber. Detaches every listener the
subscriber declared via getSubscribedEvents(). Idempotent.




## Contracts\Events\Stoppable ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Stoppable.zep)


-   __Namespace__

    - `Phalcon\Contracts\Events`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon's local mirror of PSR-14 StoppableEventInterface. Identical shape;
not extended from the PSR interface because the Zephir extension cannot
reference Composer-loaded interfaces at build time. A separate bridge
package exposes a PSR-14 adapter.


### Methods

```php
public function isPropagationStopped(): bool;
```
Returns true when the event must stop propagating to subsequent
listeners.




## Contracts\Events\Subscriber ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Events/Subscriber.zep)


-   __Namespace__

    - `Phalcon\Contracts\Events`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Contract for event subscriber classes. A subscriber declares the events it
wants to listen to via a static map; Events\Manager parses the map and
attaches each entry as a regular listener.

Accepted value shapes per event key:

  'event:name' => 'methodName'
  'event:name' => ['methodName', priority]
  'event:name' => [
      ['methodName1'],
      ['methodName2', priority],
  ]

Keys can be either a Phalcon event string (e.g. "db:beforeQuery") or a
fully qualified event class name.

Wildcard subscriptions: Phalcon's manager fires both the prefix queue and
the full-name queue (e.g. "db" is fired before "db:beforeQuery"). To
subscribe to every event of a component, use the prefix as the key:

  'db' => 'onAnyDbEvent'   // fires for db:beforeQuery, db:afterQuery, ...


### Methods

```php
public static function getSubscribedEvents(): array;
```
Returns a map of event name => listener config. Called once per
Manager::addSubscriber() / removeSubscriber() call.




## Contracts\Forms\Schema ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Forms/Schema.zep)


-   __Namespace__

    - `Phalcon\Contracts\Forms`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Contract for objects that supply a normalized list of form element
definitions. Implementations may source the definitions from a PHP array,
a JSON document, a YAML file, or any other format.

Each returned definition must be an associative array containing at least:
  - 'type' (string)  — element type key (e.g. 'text', 'select', 'checkgroup')
  - 'name' (string)  — the HTML name attribute value

Optional keys per definition:
  - 'label'      (string)          — visible label text
  - 'default'    (mixed)           — pre-populated default value
  - 'attributes' (array)           — additional HTML attributes
  - 'filters'    (array|string)    — filter names applied on bind()
  - 'validators' (array)           — ValidatorInterface instances
  - 'options'    (array)           — choices for select / checkgroup / radiogroup


### Methods

```php
public function load(): array;
```
Returns an ordered list of normalized element definitions.




## Contracts\Html\Helper\Input\SelectData ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Html/Helper/Input/SelectData.zep)


-   __Namespace__

    - `Phalcon\Contracts\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for SELECT option data providers.

Return format: [value => label] for flat options;
[groupLabel => [value => label, ...]] for optgroups.


### Methods

```php
public function getAttributes(): array;
```
Returns the per-option attribute map.

Format: [optionValue => [attrName => stringValue, ...]].
Implementations must return resolved string values; no escaping,
ordering, or rendering is performed here.


```php
public function getOptions(): array;
```





## Contracts\Mvc\Model\Relation\CacheKeyProvider ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Mvc/Model/Relation/CacheKeyProvider.zep)


-   __Namespace__

    - `Phalcon\Contracts\Mvc\Model\Relation`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for models that provide a custom unique key for the reusable
records cache in the Model Manager. Implement this interface when the
default object-identity based key (unique_key) does not produce stable
cache hits across multiple object instances that represent the same
database record.


### Methods

```php
public function getUniqueKey(): string;
```
Returns a string that uniquely identifies this model instance for
use as the key in the reusable records cache.




## Contracts\Paginator\Adapter ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Paginator/Adapter.zep)


-   __Namespace__

    - `Phalcon\Contracts\Paginator`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Paginator adapters


### Methods

```php
public function getLimit(): int;
```
Get current rows limit


```php
public function paginate(): Repository;
```
Returns a slice of the resultset to show in the pagination


```php
public function setCurrentPage( int $page );
```
Set the current page number


```php
public function setLimit( int $limit );
```
Set current rows limit




## Contracts\Paginator\Repository ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Paginator/Repository.zep)


-   __Namespace__

    - `Phalcon\Contracts\Paginator`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for the repository of current state
Phalcon\Paginator\AdapterInterface::paginate()


### Constants
```php
const PROPERTY_CURRENT_PAGE = current;
const PROPERTY_FIRST_PAGE = first;
const PROPERTY_ITEMS = items;
const PROPERTY_LAST_PAGE = last;
const PROPERTY_LIMIT = limit;
const PROPERTY_NEXT_PAGE = next;
const PROPERTY_PREVIOUS_PAGE = previous;
const PROPERTY_TOTAL_ITEMS = total_items;
```

### Methods

```php
public function getAliases(): array;
```
Gets the aliases for properties repository


```php
public function getCurrent(): int;
```
Gets number of the current page


```php
public function getFirst(): int;
```
Gets number of the first page


```php
public function getItems(): mixed;
```
Gets the items on the current page


```php
public function getLast(): int;
```
Gets number of the last page


```php
public function getLimit(): int;
```
Gets current rows limit


```php
public function getNext(): int;
```
Gets number of the next page


```php
public function getPrevious(): int;
```
Gets number of the previous page


```php
public function getTotalItems(): int;
```
Gets the total number of items


```php
public function setAliases( array $aliases ): Repository;
```
Sets the aliases for properties repository


```php
public function setProperties( array $properties ): Repository;
```
Sets values for properties of the repository




## Contracts\Support\Collection ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Contracts/Support/Collection.zep)


-   __Namespace__

    - `Phalcon\Contracts\Support`

-   __Uses__
    
    - `ArrayAccess`
    - `IteratorAggregate`

-   __Extends__
    
    `ArrayAccess`

-   __Implements__
    

Canonical contract for Phalcon\Support\Collection.

@phpstan-template T

@extends ArrayAccess<int|string, mixed>
@extends IteratorAggregate<int|string, mixed>


### Methods

```php
public function __get( string $element ): mixed;
```



```php
public function __isset( string $element ): bool;
```



```php
public function __set( string $element, mixed $value ): void;
```



```php
public function __unset( string $element ): void;
```



```php
public function clear(): void;
```
Clears the internal collection.


```php
public function column( string $propertyOrMethod ): array;
```
Returns the values from a single property/method extracted from every
item in the collection, keyed by the original collection key.


```php
public function each( callable $callback ): Collection;
```
Invokes the callback for every item in the collection.

@phpstan-param callable(T, array-key): mixed $callback


```php
public function filter( callable $callback ): Collection;
```
Returns a new collection of items for which the callback returns true.

@phpstan-param  callable(T, array-key): bool $callback
@phpstan-return static<T>


```php
public function first(): mixed;
```
Returns the first value in the collection or null when empty.

@phpstan-return T|null


```php
public function get( string $element, mixed $defaultValue = null, string $cast = null ): mixed;
```
Returns an element from the collection.


```php
public function getKeys( bool $insensitive = bool ): array;
```
Returns the keys (insensitive or not) of the collection.

@deprecated Use {@see self::keys()} instead. Will be removed in a future major release.


```php
public function getType(): string | null;
```
Returns the configured runtime type guard, or null when not set.


```php
public function getValues(): array;
```
Returns the values of the internal array.

@deprecated Use {@see self::values()} instead. Will be removed in a future major release.


```php
public function has( string $element ): bool;
```
Checks whether an element exists in the collection.


```php
public function init( array $data = [] ): void;
```
Initializes the internal array.


```php
public function isEmpty(): bool;
```
Returns true when the collection has no entries.


```php
public function keys( bool $insensitive = bool ): array;
```
Returns the keys (insensitive or not) of the collection.


```php
public function last(): mixed;
```
Returns the last value in the collection or null when empty.

@phpstan-return T|null


```php
public function map( callable $callback ): Collection;
```
Returns a new collection with the callback applied to every value.

@phpstan-param callable(T, array-key): mixed $callback


```php
public function reduce( callable $callback, mixed $initial = null ): mixed;
```
Reduces the collection to a single value using the callback.

@phpstan-param callable(mixed, T, array-key): mixed $callback


```php
public function remove( string $element ): void;
```
Removes the element from the collection.


```php
public function replace( array $data ): void;
```
Replaces the collection data with a new array, clearing first.


```php
public function set( string $element, mixed $value ): void;
```
Stores an element in the collection.

@phpstan-param T $value


```php
public function sort( callable $callback = null, int $order = int ): Collection;
```
Returns a new collection sorted by value, preserving keys.

@phpstan-return static<T>


```php
public function toArray(): array;
```
Returns the collection as an array.

@phpstan-return array<array-key, T>


```php
public function toJson( int $options = int ): string;
```
Returns the collection serialized as a JSON string.


```php
public function values(): array;
```
Returns the values of the internal array.


```php
public function where( string $propertyOrMethod, mixed $value ): Collection;
```
Returns a new collection containing only the items whose
`propertyOrMethod` strictly equals `$value`.

@phpstan-return static<T>


