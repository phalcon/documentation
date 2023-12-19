---
layout: default
title: 'Phalcon\Db'
---
# Abstract class **Phalcon\Db**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Phalcon\Db and its related classes provide a simple SQL database interface for Phalcon Framework.
The Phalcon\Db is the basic class you use to connect your PHP application to an RDBMS.
There is a different adapter class for each brand of RDBMS.

This component is intended to lower level database operations. If you want to interact with databases using
higher level of abstraction use Phalcon\Mvc\Model.

Phalcon\Db is an abstract class. You only can use it with a database adapter like Phalcon\Db\Adapter\Pdo

```php
<?php

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
        "SELECT * FROM robots LIMIT 5"
    );

    $result->setFetchMode(Db::FETCH_NUM);

    while ($robot = $result->fetch()) {
        print_r($robot);
    }
} catch (Exception $e) {
    echo $e->getMessage(), PHP_EOL;
}

```


## Constants
*integer* **FETCH_LAZY**

*integer* **FETCH_ASSOC**

*integer* **FETCH_NAMED**

*integer* **FETCH_NUM**

*integer* **FETCH_BOTH**

*integer* **FETCH_OBJ**

*integer* **FETCH_BOUND**

*integer* **FETCH_COLUMN**

*integer* **FETCH_CLASS**

*integer* **FETCH_INTO**

*integer* **FETCH_FUNC**

*integer* **FETCH_GROUP**

*integer* **FETCH_UNIQUE**

*integer* **FETCH_KEY_PAIR**

*integer* **FETCH_CLASSTYPE**

*integer* **FETCH_SERIALIZE**

*integer* **FETCH_PROPS_LATE**

## Methods
public static  **setup** (*array* $options)

Enables/disables options in the Database component




<hr>

# Abstract class **Phalcon\Db\Adapter**

*implements* [Phalcon\Db\AdapterInterface](Phalcon_Db.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/adapter.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Base class for Phalcon\Db adapters


## Methods
public  **getDialectType** ()

Name of the dialect used



public  **getType** ()

Type of database system the adapter is used for



public  **getSqlVariables** ()

Active SQL bound parameter variables



public  **__construct** (*array* $descriptor)

Phalcon\Db\Adapter constructor



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager)

Sets the event manager



public  **getEventsManager** ()

Returns the internal event manager



public  **setDialect** ([Phalcon\Db\DialectInterface](Phalcon_Db.md) $dialect)

Sets the dialect used to produce the SQL



public  **getDialect** ()

Returns internal dialect instance



public  **fetchOne** (*mixed* $sqlQuery, [*mixed* $fetchMode], [*mixed* $bindParams], [*mixed* $bindTypes])

Returns the first row in a SQL query result

```php
<?php

// Getting first robot
$robot = $connection->fetchOne("SELECT * FROM robots");
print_r($robot);

// Getting first robot with associative indexes only
$robot = $connection->fetchOne("SELECT * FROM robots", \Phalcon\Db::FETCH_ASSOC);
print_r($robot);

```



public *array* **fetchAll** (*string* $sqlQuery, [*int* $fetchMode], [*array* $bindParams], [*array* $bindTypes])

Dumps the complete result of a query into an array

```php
<?php

// Getting all robots with associative indexes only
$robots = $connection->fetchAll(
    "SELECT * FROM robots",
    \Phalcon\Db::FETCH_ASSOC
);

foreach ($robots as $robot) {
    print_r($robot);
}

 // Getting all robots that contains word "robot" withing the name
$robots = $connection->fetchAll(
    "SELECT * FROM robots WHERE name LIKE :name",
    \Phalcon\Db::FETCH_ASSOC,
    [
        "name" => "%robot%",
    ]
);
foreach($robots as $robot) {
    print_r($robot);
}

```



public *string* | ** **fetchColumn** (*string* $sqlQuery, [*array* $placeholders], [*int* | *string* $column])

Returns the n'th field of first row in a SQL query result

```php
<?php

// Getting count of robots
$robotsCount = $connection->fetchColumn("SELECT count(*) FROM robots");
print_r($robotsCount);

// Getting name of last edited robot
$robot = $connection->fetchColumn(
    "SELECT id, name FROM robots order by modified desc",
    1
);
print_r($robot);

```



public *boolean* **insert** (*string* | *array* $table, *array* $values, [*array* $fields], [*array* $dataTypes])

Inserts data into a table using custom RDBMS SQL syntax

```php
<?php

// Inserting a new robot
$success = $connection->insert(
    "robots",
    ["Astro Boy", 1952],
    ["name", "year"]
);

// Next SQL sentence is sent to the database system
INSERT INTO `robots` (`name`, `year`) VALUES ("Astro boy", 1952);

```



public *boolean* **insertAsDict** (*string* $table, *array* $data, [*array* $dataTypes])

Inserts data into a table using custom RBDM SQL syntax

```php
<?php

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



public *boolean* **update** (*string* | *array* $table, *array* $fields, *array* $values, [*string* | *array* $whereCondition], [*array* $dataTypes])

Updates data on a table using custom RBDM SQL syntax

```php
<?php

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



public *boolean* **updateAsDict** (*string* $table, *array* $data, [*string* $whereCondition], [*array* $dataTypes])

Updates data on a table using custom RBDM SQL syntax
Another, more convenient syntax

```php
<?php

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



public *boolean* **delete** (*string* | *array* $table, [*string* $whereCondition], [*array* $placeholders], [*array* $dataTypes])

Deletes data from a table using custom RBDM SQL syntax

```php
<?php

// Deleting existing robot
$success = $connection->delete(
    "robots",
    "id = 101"
);

// Next SQL sentence is generated
DELETE FROM `robots` WHERE `id` = 101

```



public  **escapeIdentifier** (*array* | *string* $identifier)

Escapes a column/table/schema name

```php
<?php

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



public *string* **getColumnList** (*array* $columnList)

Gets a list of columns



public  **limit** (*mixed* $sqlQuery, *mixed* $number)

Appends a LIMIT clause to $sqlQuery argument

```php
<?php

echo $connection->limit("SELECT * FROM robots", 5);

```



public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName])

Generates SQL checking for the existence of a schema.table

```php
<?php

var_dump(
    $connection->tableExists("blog", "posts")
);

```



public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName])

Generates SQL checking for the existence of a schema.view

```php
<?php

var_dump(
    $connection->viewExists("active_users", "posts")
);

```



public  **forUpdate** (*mixed* $sqlQuery)

Returns a SQL modified with a FOR UPDATE clause



public  **sharedLock** (*mixed* $sqlQuery)

Returns a SQL modified with a LOCK IN SHARE MODE clause



public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition)

Creates a table



public  **dropTable** (*mixed* $tableName, [*mixed* $schemaName], [*mixed* $ifExists])

Drops a table from a schema/database



public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName])

Creates a view



public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists])

Drops a view



public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

Adds a column to a table



public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn])

Modifies a table column based on a definition



public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName)

Drops a column from a table



public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

Adds an index to a table



public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName)

Drop an index from a table



public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

Adds a primary key to a table



public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName)

Drops a table's primary key



public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference)

Adds a foreign key to a table



public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName)

Drops a foreign key from a table



public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

Returns the SQL column definition from a column



public  **listTables** ([*mixed* $schemaName])

List all tables on a database

```php
<?php

print_r(
    $connection->listTables("blog")
);

```



public  **listViews** ([*mixed* $schemaName])

List all views on a database

```php
<?php

print_r(
    $connection->listViews("blog")
);

```



public [Phalcon\Db\Index](Phalcon_Db.md) **describeIndexes** (*string* $table, [*string* $schema])

Lists table indexes

```php
<?php

print_r(
    $connection->describeIndexes("robots_parts")
);

```



public  **describeReferences** (*mixed* $table, [*mixed* $schema])

Lists table references

```php
<?php

print_r(
    $connection->describeReferences("robots_parts")
);

```



public  **tableOptions** (*mixed* $tableName, [*mixed* $schemaName])

Gets creation options from a table

```php
<?php

print_r(
    $connection->tableOptions("robots")
);

```



public  **createSavepoint** (*mixed* $name)

Creates a new savepoint



public  **releaseSavepoint** (*mixed* $name)

Releases given savepoint



public  **rollbackSavepoint** (*mixed* $name)

Rollbacks given savepoint



public  **setNestedTransactionsWithSavepoints** (*mixed* $nestedTransactionsWithSavepoints)

Set if nested transactions should use savepoints



public  **isNestedTransactionsWithSavepoints** ()

Returns if nested transactions should use savepoints



public  **getNestedTransactionSavepointName** ()

Returns the savepoint name to use for nested transactions



public  **getDefaultIdValue** ()

Returns the default identity value to be inserted in an identity column

```php
<?php

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



public  **getDefaultValue** ()

Returns the default value to make the RBDM use the default value declared in the table definition

```php
<?php

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



public  **supportSequences** ()

Check whether the database system requires a sequence to produce auto-numeric values



public  **useExplicitIdValue** ()

Check whether the database system requires an explicit value for identity columns



public  **getDescriptor** ()

Return descriptor used to connect to the active database



public *string* **getConnectionId** ()

Gets the active connection unique identifier



public  **getSQLStatement** ()

Active SQL statement in the object



public  **getRealSQLStatement** ()

Active SQL statement in the object without replace bound parameters



public *array* **getSQLBindTypes** ()

Active SQL statement in the object



abstract public  **connect** ([*array* $descriptor]) inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **query** (*mixed* $sqlStatement, [*mixed* $placeholders], [*mixed* $dataTypes]) inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **execute** (*mixed* $sqlStatement, [*mixed* $placeholders], [*mixed* $dataTypes]) inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **affectedRows** () inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **close** () inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **escapeString** (*mixed* $str) inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **lastInsertId** ([*mixed* $sequenceName]) inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **begin** ([*mixed* $nesting]) inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **rollback** ([*mixed* $nesting]) inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **commit** ([*mixed* $nesting]) inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **isUnderTransaction** () inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **getInternalHandler** () inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...


abstract public  **describeColumns** (*mixed* $table, [*mixed* $schema]) inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...



<hr>

# Abstract class **Phalcon\Db\Adapter\Pdo**

*extends* abstract class [Phalcon\Db\Adapter](Phalcon_Db.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/adapter/pdo.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Phalcon\Db\Adapter\Pdo is the Phalcon\Db that internally uses PDO to connect to a database

```php
<?php

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


## Methods
public  **__construct** (*array* $descriptor)

Constructor for Phalcon\Db\Adapter\Pdo



public  **connect** ([*array* $descriptor])

This method is automatically called in \Phalcon\Db\Adapter\Pdo constructor.
Call it when you need to restore a database connection.

```php
<?php

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



public  **prepare** (*mixed* $sqlStatement)

Returns a PDO prepared statement to be executed with 'executePrepared'

```php
<?php

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



public [PDOStatement](https://php.net/manual/en/class.pdostatement.php) **executePrepared** ([PDOStatement](https://php.net/manual/en/class.pdostatement.php) $statement, *array* $placeholders, *array* $dataTypes)

Executes a prepared statement binding. This function uses integer indexes starting from zero

```php
<?php

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



public  **query** (*mixed* $sqlStatement, [*mixed* $bindParams], [*mixed* $bindTypes])

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server is returning rows

```php
<?php

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



public  **execute** (*mixed* $sqlStatement, [*mixed* $bindParams], [*mixed* $bindTypes])

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server doesn't return any rows

```php
<?php

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



public  **affectedRows** ()

Returns the number of affected rows by the latest INSERT/UPDATE/DELETE executed in the database system

```php
<?php

$connection->execute(
    "DELETE FROM robots"
);

echo $connection->affectedRows(), " were deleted";

```



public  **close** ()

Closes the active connection returning success. Phalcon automatically closes and destroys
active connections when the request ends



public  **escapeString** (*mixed* $str)

Escapes a value to avoid SQL injections according to the active charset in the connection

```php
<?php

$escapedStr = $connection->escapeString("some dangerous value");

```



public  **convertBoundParams** (*mixed* $sql, [*array* $params])

Converts bound parameters such as :name: or ?1 into PDO bind params ?

```php
<?php

print_r(
    $connection->convertBoundParams(
        "SELECT * FROM robots WHERE name = :name:",
        [
            "Bender",
        ]
    )
);

```



public *int* | *boolean* **lastInsertId** ([*string* $sequenceName])

Returns the insert id for the auto_increment/serial column inserted in the latest executed SQL statement

```php
<?php

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



public  **begin** ([*mixed* $nesting])

Starts a transaction in the connection



public  **rollback** ([*mixed* $nesting])

Rollbacks the active transaction in the connection



public  **commit** ([*mixed* $nesting])

Commits the active transaction in the connection



public  **getTransactionLevel** ()

Returns the current transaction nesting level



public  **isUnderTransaction** ()

Checks whether the connection is under a transaction

```php
<?php

$connection->begin();

// true
var_dump(
    $connection->isUnderTransaction()
);

```



public  **getInternalHandler** ()

Return internal PDO handler



public *array* **getErrorInfo** ()

Return the error info, if any



public  **getDialectType** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Name of the dialect used



public  **getType** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Type of database system the adapter is used for



public  **getSqlVariables** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL bound parameter variables



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the internal event manager



public  **setDialect** ([Phalcon\Db\DialectInterface](Phalcon_Db.md) $dialect) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Sets the dialect used to produce the SQL



public  **getDialect** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns internal dialect instance



public  **fetchOne** (*mixed* $sqlQuery, [*mixed* $fetchMode], [*mixed* $bindParams], [*mixed* $bindTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the first row in a SQL query result

```php
<?php

// Getting first robot
$robot = $connection->fetchOne("SELECT * FROM robots");
print_r($robot);

// Getting first robot with associative indexes only
$robot = $connection->fetchOne("SELECT * FROM robots", \Phalcon\Db::FETCH_ASSOC);
print_r($robot);

```



public *array* **fetchAll** (*string* $sqlQuery, [*int* $fetchMode], [*array* $bindParams], [*array* $bindTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Dumps the complete result of a query into an array

```php
<?php

// Getting all robots with associative indexes only
$robots = $connection->fetchAll(
    "SELECT * FROM robots",
    \Phalcon\Db::FETCH_ASSOC
);

foreach ($robots as $robot) {
    print_r($robot);
}

 // Getting all robots that contains word "robot" withing the name
$robots = $connection->fetchAll(
    "SELECT * FROM robots WHERE name LIKE :name",
    \Phalcon\Db::FETCH_ASSOC,
    [
        "name" => "%robot%",
    ]
);
foreach($robots as $robot) {
    print_r($robot);
}

```



public *string* | ** **fetchColumn** (*string* $sqlQuery, [*array* $placeholders], [*int* | *string* $column]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the n'th field of first row in a SQL query result

```php
<?php

// Getting count of robots
$robotsCount = $connection->fetchColumn("SELECT count(*) FROM robots");
print_r($robotsCount);

// Getting name of last edited robot
$robot = $connection->fetchColumn(
    "SELECT id, name FROM robots order by modified desc",
    1
);
print_r($robot);

```



public *boolean* **insert** (*string* | *array* $table, *array* $values, [*array* $fields], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Inserts data into a table using custom RDBMS SQL syntax

```php
<?php

// Inserting a new robot
$success = $connection->insert(
    "robots",
    ["Astro Boy", 1952],
    ["name", "year"]
);

// Next SQL sentence is sent to the database system
INSERT INTO `robots` (`name`, `year`) VALUES ("Astro boy", 1952);

```



public *boolean* **insertAsDict** (*string* $table, *array* $data, [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Inserts data into a table using custom RBDM SQL syntax

```php
<?php

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



public *boolean* **update** (*string* | *array* $table, *array* $fields, *array* $values, [*string* | *array* $whereCondition], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Updates data on a table using custom RBDM SQL syntax

```php
<?php

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



public *boolean* **updateAsDict** (*string* $table, *array* $data, [*string* $whereCondition], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Updates data on a table using custom RBDM SQL syntax
Another, more convenient syntax

```php
<?php

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



public *boolean* **delete** (*string* | *array* $table, [*string* $whereCondition], [*array* $placeholders], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Deletes data from a table using custom RBDM SQL syntax

```php
<?php

// Deleting existing robot
$success = $connection->delete(
    "robots",
    "id = 101"
);

// Next SQL sentence is generated
DELETE FROM `robots` WHERE `id` = 101

```



public  **escapeIdentifier** (*array* | *string* $identifier) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Escapes a column/table/schema name

```php
<?php

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



public *string* **getColumnList** (*array* $columnList) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets a list of columns



public  **limit** (*mixed* $sqlQuery, *mixed* $number) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Appends a LIMIT clause to $sqlQuery argument

```php
<?php

echo $connection->limit("SELECT * FROM robots", 5);

```



public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Generates SQL checking for the existence of a schema.table

```php
<?php

var_dump(
    $connection->tableExists("blog", "posts")
);

```



public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Generates SQL checking for the existence of a schema.view

```php
<?php

var_dump(
    $connection->viewExists("active_users", "posts")
);

```



public  **forUpdate** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns a SQL modified with a FOR UPDATE clause



public  **sharedLock** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns a SQL modified with a LOCK IN SHARE MODE clause



public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a table



public  **dropTable** (*mixed* $tableName, [*mixed* $schemaName], [*mixed* $ifExists]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a table from a schema/database



public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a view



public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a view



public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a column to a table



public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Modifies a table column based on a definition



public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a column from a table



public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds an index to a table



public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drop an index from a table



public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a primary key to a table



public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a table's primary key



public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a foreign key to a table



public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a foreign key from a table



public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the SQL column definition from a column



public  **listTables** ([*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

List all tables on a database

```php
<?php

print_r(
    $connection->listTables("blog")
);

```



public  **listViews** ([*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

List all views on a database

```php
<?php

print_r(
    $connection->listViews("blog")
);

```



public [Phalcon\Db\Index](Phalcon_Db.md) **describeIndexes** (*string* $table, [*string* $schema]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Lists table indexes

```php
<?php

print_r(
    $connection->describeIndexes("robots_parts")
);

```



public  **describeReferences** (*mixed* $table, [*mixed* $schema]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Lists table references

```php
<?php

print_r(
    $connection->describeReferences("robots_parts")
);

```



public  **tableOptions** (*mixed* $tableName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets creation options from a table

```php
<?php

print_r(
    $connection->tableOptions("robots")
);

```



public  **createSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a new savepoint



public  **releaseSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Releases given savepoint



public  **rollbackSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Rollbacks given savepoint



public  **setNestedTransactionsWithSavepoints** (*mixed* $nestedTransactionsWithSavepoints) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Set if nested transactions should use savepoints



public  **isNestedTransactionsWithSavepoints** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns if nested transactions should use savepoints



public  **getNestedTransactionSavepointName** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the savepoint name to use for nested transactions



public  **getDefaultIdValue** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the default identity value to be inserted in an identity column

```php
<?php

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



public  **getDefaultValue** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the default value to make the RBDM use the default value declared in the table definition

```php
<?php

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



public  **supportSequences** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Check whether the database system requires a sequence to produce auto-numeric values



public  **useExplicitIdValue** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Check whether the database system requires an explicit value for identity columns



public  **getDescriptor** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Return descriptor used to connect to the active database



public *string* **getConnectionId** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets the active connection unique identifier



public  **getSQLStatement** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object



public  **getRealSQLStatement** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object without replace bound parameters



public *array* **getSQLBindTypes** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object



abstract public  **describeColumns** (*mixed* $table, [*mixed* $schema]) inherited from [Phalcon\Db\AdapterInterface](Phalcon_Db.md)

...



<hr>

# Class **Phalcon\Db\Adapter\Pdo\Factory**

*extends* abstract class [Phalcon\Factory](Phalcon_Factory.md)

*implements* [Phalcon\FactoryInterface](Phalcon_Factory.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/adapter/pdo/factory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Loads PDO Adapter class using 'adapter' option

```php
<?php

use Phalcon\Db\Adapter\Pdo\Factory;

$options = [
    "host"     => "localhost",
    "dbname"   => "blog",
    "port"     => 3306,
    "username" => "sigma",
    "password" => "secret",
    "adapter"  => "mysql",
];
$db = Factory::load($options);

```


## Methods
public static  **load** ([Phalcon\Config](Phalcon_Config.md) | *array* $config)





protected static  **loadClass** (*mixed* $namespace, *mixed* $config) inherited from [Phalcon\Factory](Phalcon_Factory.md)

...



<hr>

# Class **Phalcon\Db\Adapter\Pdo\Mysql**

*extends* abstract class [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

*implements* [Phalcon\Db\AdapterInterface](Phalcon_Db.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/adapter/pdo/mysql.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Specific functions for the Mysql database system

```php
<?php

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


## Methods
public  **describeColumns** (*mixed* $table, [*mixed* $schema])

Returns an array of Phalcon\Db\Column objects describing a table

```php
<?php

print_r(
    $connection->describeColumns("posts")
);

```



public [Phalcon\Db\IndexInterface](Phalcon_Db.md) **describeIndexes** (*string* $table, [*string* $schema])

Lists table indexes

```php
<?php

print_r(
    $connection->describeIndexes("robots_parts")
);

```



public  **describeReferences** (*mixed* $table, [*mixed* $schema])

Lists table references

```php
<?php

print_r(
    $connection->describeReferences("robots_parts")
);

```



public  **__construct** (*array* $descriptor) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Constructor for Phalcon\Db\Adapter\Pdo



public  **connect** ([*array* $descriptor]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

This method is automatically called in \Phalcon\Db\Adapter\Pdo constructor.
Call it when you need to restore a database connection.

```php
<?php

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



public  **prepare** (*mixed* $sqlStatement) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns a PDO prepared statement to be executed with 'executePrepared'

```php
<?php

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



public [PDOStatement](https://php.net/manual/en/class.pdostatement.php) **executePrepared** ([PDOStatement](https://php.net/manual/en/class.pdostatement.php) $statement, *array* $placeholders, *array* $dataTypes) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Executes a prepared statement binding. This function uses integer indexes starting from zero

```php
<?php

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



public  **query** (*mixed* $sqlStatement, [*mixed* $bindParams], [*mixed* $bindTypes]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server is returning rows

```php
<?php

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



public  **execute** (*mixed* $sqlStatement, [*mixed* $bindParams], [*mixed* $bindTypes]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server doesn't return any rows

```php
<?php

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



public  **affectedRows** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns the number of affected rows by the latest INSERT/UPDATE/DELETE executed in the database system

```php
<?php

$connection->execute(
    "DELETE FROM robots"
);

echo $connection->affectedRows(), " were deleted";

```



public  **close** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Closes the active connection returning success. Phalcon automatically closes and destroys
active connections when the request ends



public  **escapeString** (*mixed* $str) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Escapes a value to avoid SQL injections according to the active charset in the connection

```php
<?php

$escapedStr = $connection->escapeString("some dangerous value");

```



public  **convertBoundParams** (*mixed* $sql, [*array* $params]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Converts bound parameters such as :name: or ?1 into PDO bind params ?

```php
<?php

print_r(
    $connection->convertBoundParams(
        "SELECT * FROM robots WHERE name = :name:",
        [
            "Bender",
        ]
    )
);

```



public *int* | *boolean* **lastInsertId** ([*string* $sequenceName]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns the insert id for the auto_increment/serial column inserted in the latest executed SQL statement

```php
<?php

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



public  **begin** ([*mixed* $nesting]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Starts a transaction in the connection



public  **rollback** ([*mixed* $nesting]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Rollbacks the active transaction in the connection



public  **commit** ([*mixed* $nesting]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Commits the active transaction in the connection



public  **getTransactionLevel** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns the current transaction nesting level



public  **isUnderTransaction** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Checks whether the connection is under a transaction

```php
<?php

$connection->begin();

// true
var_dump(
    $connection->isUnderTransaction()
);

```



public  **getInternalHandler** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Return internal PDO handler



public *array* **getErrorInfo** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Return the error info, if any



public  **getDialectType** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Name of the dialect used



public  **getType** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Type of database system the adapter is used for



public  **getSqlVariables** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL bound parameter variables



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the internal event manager



public  **setDialect** ([Phalcon\Db\DialectInterface](Phalcon_Db.md) $dialect) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Sets the dialect used to produce the SQL



public  **getDialect** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns internal dialect instance



public  **fetchOne** (*mixed* $sqlQuery, [*mixed* $fetchMode], [*mixed* $bindParams], [*mixed* $bindTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the first row in a SQL query result

```php
<?php

// Getting first robot
$robot = $connection->fetchOne("SELECT * FROM robots");
print_r($robot);

// Getting first robot with associative indexes only
$robot = $connection->fetchOne("SELECT * FROM robots", \Phalcon\Db::FETCH_ASSOC);
print_r($robot);

```



public *array* **fetchAll** (*string* $sqlQuery, [*int* $fetchMode], [*array* $bindParams], [*array* $bindTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Dumps the complete result of a query into an array

```php
<?php

// Getting all robots with associative indexes only
$robots = $connection->fetchAll(
    "SELECT * FROM robots",
    \Phalcon\Db::FETCH_ASSOC
);

foreach ($robots as $robot) {
    print_r($robot);
}

 // Getting all robots that contains word "robot" withing the name
$robots = $connection->fetchAll(
    "SELECT * FROM robots WHERE name LIKE :name",
    \Phalcon\Db::FETCH_ASSOC,
    [
        "name" => "%robot%",
    ]
);
foreach($robots as $robot) {
    print_r($robot);
}

```



public *string* | ** **fetchColumn** (*string* $sqlQuery, [*array* $placeholders], [*int* | *string* $column]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the n'th field of first row in a SQL query result

```php
<?php

// Getting count of robots
$robotsCount = $connection->fetchColumn("SELECT count(*) FROM robots");
print_r($robotsCount);

// Getting name of last edited robot
$robot = $connection->fetchColumn(
    "SELECT id, name FROM robots order by modified desc",
    1
);
print_r($robot);

```



public *boolean* **insert** (*string* | *array* $table, *array* $values, [*array* $fields], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Inserts data into a table using custom RDBMS SQL syntax

```php
<?php

// Inserting a new robot
$success = $connection->insert(
    "robots",
    ["Astro Boy", 1952],
    ["name", "year"]
);

// Next SQL sentence is sent to the database system
INSERT INTO `robots` (`name`, `year`) VALUES ("Astro boy", 1952);

```



public *boolean* **insertAsDict** (*string* $table, *array* $data, [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Inserts data into a table using custom RBDM SQL syntax

```php
<?php

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



public *boolean* **update** (*string* | *array* $table, *array* $fields, *array* $values, [*string* | *array* $whereCondition], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Updates data on a table using custom RBDM SQL syntax

```php
<?php

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



public *boolean* **updateAsDict** (*string* $table, *array* $data, [*string* $whereCondition], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Updates data on a table using custom RBDM SQL syntax
Another, more convenient syntax

```php
<?php

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



public *boolean* **delete** (*string* | *array* $table, [*string* $whereCondition], [*array* $placeholders], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Deletes data from a table using custom RBDM SQL syntax

```php
<?php

// Deleting existing robot
$success = $connection->delete(
    "robots",
    "id = 101"
);

// Next SQL sentence is generated
DELETE FROM `robots` WHERE `id` = 101

```



public  **escapeIdentifier** (*array* | *string* $identifier) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Escapes a column/table/schema name

```php
<?php

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



public *string* **getColumnList** (*array* $columnList) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets a list of columns



public  **limit** (*mixed* $sqlQuery, *mixed* $number) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Appends a LIMIT clause to $sqlQuery argument

```php
<?php

echo $connection->limit("SELECT * FROM robots", 5);

```



public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Generates SQL checking for the existence of a schema.table

```php
<?php

var_dump(
    $connection->tableExists("blog", "posts")
);

```



public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Generates SQL checking for the existence of a schema.view

```php
<?php

var_dump(
    $connection->viewExists("active_users", "posts")
);

```



public  **forUpdate** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns a SQL modified with a FOR UPDATE clause



public  **sharedLock** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns a SQL modified with a LOCK IN SHARE MODE clause



public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a table



public  **dropTable** (*mixed* $tableName, [*mixed* $schemaName], [*mixed* $ifExists]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a table from a schema/database



public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a view



public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a view



public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a column to a table



public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Modifies a table column based on a definition



public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a column from a table



public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds an index to a table



public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drop an index from a table



public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a primary key to a table



public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a table's primary key



public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a foreign key to a table



public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a foreign key from a table



public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the SQL column definition from a column



public  **listTables** ([*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

List all tables on a database

```php
<?php

print_r(
    $connection->listTables("blog")
);

```



public  **listViews** ([*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

List all views on a database

```php
<?php

print_r(
    $connection->listViews("blog")
);

```



public  **tableOptions** (*mixed* $tableName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets creation options from a table

```php
<?php

print_r(
    $connection->tableOptions("robots")
);

```



public  **createSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a new savepoint



public  **releaseSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Releases given savepoint



public  **rollbackSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Rollbacks given savepoint



public  **setNestedTransactionsWithSavepoints** (*mixed* $nestedTransactionsWithSavepoints) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Set if nested transactions should use savepoints



public  **isNestedTransactionsWithSavepoints** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns if nested transactions should use savepoints



public  **getNestedTransactionSavepointName** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the savepoint name to use for nested transactions



public  **getDefaultIdValue** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the default identity value to be inserted in an identity column

```php
<?php

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



public  **getDefaultValue** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the default value to make the RBDM use the default value declared in the table definition

```php
<?php

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



public  **supportSequences** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Check whether the database system requires a sequence to produce auto-numeric values



public  **useExplicitIdValue** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Check whether the database system requires an explicit value for identity columns



public  **getDescriptor** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Return descriptor used to connect to the active database



public *string* **getConnectionId** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets the active connection unique identifier



public  **getSQLStatement** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object



public  **getRealSQLStatement** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object without replace bound parameters



public *array* **getSQLBindTypes** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object




<hr>

# Class **Phalcon\Db\Adapter\Pdo\Postgresql**

*extends* abstract class [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

*implements* [Phalcon\Db\AdapterInterface](Phalcon_Db.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/adapter/pdo/postgresql.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Specific functions for the Postgresql database system

```php
<?php

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


## Methods
public  **connect** ([*array* $descriptor])

This method is automatically called in Phalcon\Db\Adapter\Pdo constructor.
Call it when you need to restore a database connection.



public  **describeColumns** (*mixed* $table, [*mixed* $schema])

Returns an array of Phalcon\Db\Column objects describing a table

```php
<?php

print_r(
    $connection->describeColumns("posts")
);

```



public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition)

Creates a table



public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn])

Modifies a table column based on a definition



public  **useExplicitIdValue** ()

Check whether the database system requires an explicit value for identity columns



public  **getDefaultIdValue** ()

Returns the default identity value to be inserted in an identity column

```php
<?php

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



public  **supportSequences** ()

Check whether the database system requires a sequence to produce auto-numeric values



public  **__construct** (*array* $descriptor) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Constructor for Phalcon\Db\Adapter\Pdo



public  **prepare** (*mixed* $sqlStatement) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns a PDO prepared statement to be executed with 'executePrepared'

```php
<?php

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



public [PDOStatement](https://php.net/manual/en/class.pdostatement.php) **executePrepared** ([PDOStatement](https://php.net/manual/en/class.pdostatement.php) $statement, *array* $placeholders, *array* $dataTypes) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Executes a prepared statement binding. This function uses integer indexes starting from zero

```php
<?php

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



public  **query** (*mixed* $sqlStatement, [*mixed* $bindParams], [*mixed* $bindTypes]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server is returning rows

```php
<?php

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



public  **execute** (*mixed* $sqlStatement, [*mixed* $bindParams], [*mixed* $bindTypes]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server doesn't return any rows

```php
<?php

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



public  **affectedRows** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns the number of affected rows by the latest INSERT/UPDATE/DELETE executed in the database system

```php
<?php

$connection->execute(
    "DELETE FROM robots"
);

echo $connection->affectedRows(), " were deleted";

```



public  **close** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Closes the active connection returning success. Phalcon automatically closes and destroys
active connections when the request ends



public  **escapeString** (*mixed* $str) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Escapes a value to avoid SQL injections according to the active charset in the connection

```php
<?php

$escapedStr = $connection->escapeString("some dangerous value");

```



public  **convertBoundParams** (*mixed* $sql, [*array* $params]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Converts bound parameters such as :name: or ?1 into PDO bind params ?

```php
<?php

print_r(
    $connection->convertBoundParams(
        "SELECT * FROM robots WHERE name = :name:",
        [
            "Bender",
        ]
    )
);

```



public *int* | *boolean* **lastInsertId** ([*string* $sequenceName]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns the insert id for the auto_increment/serial column inserted in the latest executed SQL statement

```php
<?php

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



public  **begin** ([*mixed* $nesting]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Starts a transaction in the connection



public  **rollback** ([*mixed* $nesting]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Rollbacks the active transaction in the connection



public  **commit** ([*mixed* $nesting]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Commits the active transaction in the connection



public  **getTransactionLevel** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns the current transaction nesting level



public  **isUnderTransaction** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Checks whether the connection is under a transaction

```php
<?php

$connection->begin();

// true
var_dump(
    $connection->isUnderTransaction()
);

```



public  **getInternalHandler** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Return internal PDO handler



public *array* **getErrorInfo** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Return the error info, if any



public  **getDialectType** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Name of the dialect used



public  **getType** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Type of database system the adapter is used for



public  **getSqlVariables** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL bound parameter variables



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the internal event manager



public  **setDialect** ([Phalcon\Db\DialectInterface](Phalcon_Db.md) $dialect) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Sets the dialect used to produce the SQL



public  **getDialect** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns internal dialect instance



public  **fetchOne** (*mixed* $sqlQuery, [*mixed* $fetchMode], [*mixed* $bindParams], [*mixed* $bindTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the first row in a SQL query result

```php
<?php

// Getting first robot
$robot = $connection->fetchOne("SELECT * FROM robots");
print_r($robot);

// Getting first robot with associative indexes only
$robot = $connection->fetchOne("SELECT * FROM robots", \Phalcon\Db::FETCH_ASSOC);
print_r($robot);

```



public *array* **fetchAll** (*string* $sqlQuery, [*int* $fetchMode], [*array* $bindParams], [*array* $bindTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Dumps the complete result of a query into an array

```php
<?php

// Getting all robots with associative indexes only
$robots = $connection->fetchAll(
    "SELECT * FROM robots",
    \Phalcon\Db::FETCH_ASSOC
);

foreach ($robots as $robot) {
    print_r($robot);
}

 // Getting all robots that contains word "robot" withing the name
$robots = $connection->fetchAll(
    "SELECT * FROM robots WHERE name LIKE :name",
    \Phalcon\Db::FETCH_ASSOC,
    [
        "name" => "%robot%",
    ]
);
foreach($robots as $robot) {
    print_r($robot);
}

```



public *string* | ** **fetchColumn** (*string* $sqlQuery, [*array* $placeholders], [*int* | *string* $column]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the n'th field of first row in a SQL query result

```php
<?php

// Getting count of robots
$robotsCount = $connection->fetchColumn("SELECT count(*) FROM robots");
print_r($robotsCount);

// Getting name of last edited robot
$robot = $connection->fetchColumn(
    "SELECT id, name FROM robots order by modified desc",
    1
);
print_r($robot);

```



public *boolean* **insert** (*string* | *array* $table, *array* $values, [*array* $fields], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Inserts data into a table using custom RDBMS SQL syntax

```php
<?php

// Inserting a new robot
$success = $connection->insert(
    "robots",
    ["Astro Boy", 1952],
    ["name", "year"]
);

// Next SQL sentence is sent to the database system
INSERT INTO `robots` (`name`, `year`) VALUES ("Astro boy", 1952);

```



public *boolean* **insertAsDict** (*string* $table, *array* $data, [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Inserts data into a table using custom RBDM SQL syntax

```php
<?php

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



public *boolean* **update** (*string* | *array* $table, *array* $fields, *array* $values, [*string* | *array* $whereCondition], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Updates data on a table using custom RBDM SQL syntax

```php
<?php

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



public *boolean* **updateAsDict** (*string* $table, *array* $data, [*string* $whereCondition], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Updates data on a table using custom RBDM SQL syntax
Another, more convenient syntax

```php
<?php

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



public *boolean* **delete** (*string* | *array* $table, [*string* $whereCondition], [*array* $placeholders], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Deletes data from a table using custom RBDM SQL syntax

```php
<?php

// Deleting existing robot
$success = $connection->delete(
    "robots",
    "id = 101"
);

// Next SQL sentence is generated
DELETE FROM `robots` WHERE `id` = 101

```



public  **escapeIdentifier** (*array* | *string* $identifier) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Escapes a column/table/schema name

```php
<?php

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



public *string* **getColumnList** (*array* $columnList) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets a list of columns



public  **limit** (*mixed* $sqlQuery, *mixed* $number) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Appends a LIMIT clause to $sqlQuery argument

```php
<?php

echo $connection->limit("SELECT * FROM robots", 5);

```



public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Generates SQL checking for the existence of a schema.table

```php
<?php

var_dump(
    $connection->tableExists("blog", "posts")
);

```



public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Generates SQL checking for the existence of a schema.view

```php
<?php

var_dump(
    $connection->viewExists("active_users", "posts")
);

```



public  **forUpdate** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns a SQL modified with a FOR UPDATE clause



public  **sharedLock** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns a SQL modified with a LOCK IN SHARE MODE clause



public  **dropTable** (*mixed* $tableName, [*mixed* $schemaName], [*mixed* $ifExists]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a table from a schema/database



public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a view



public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a view



public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a column to a table



public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a column from a table



public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds an index to a table



public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drop an index from a table



public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a primary key to a table



public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a table's primary key



public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a foreign key to a table



public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a foreign key from a table



public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the SQL column definition from a column



public  **listTables** ([*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

List all tables on a database

```php
<?php

print_r(
    $connection->listTables("blog")
);

```



public  **listViews** ([*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

List all views on a database

```php
<?php

print_r(
    $connection->listViews("blog")
);

```



public [Phalcon\Db\Index](Phalcon_Db.md) **describeIndexes** (*string* $table, [*string* $schema]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Lists table indexes

```php
<?php

print_r(
    $connection->describeIndexes("robots_parts")
);

```



public  **describeReferences** (*mixed* $table, [*mixed* $schema]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Lists table references

```php
<?php

print_r(
    $connection->describeReferences("robots_parts")
);

```



public  **tableOptions** (*mixed* $tableName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets creation options from a table

```php
<?php

print_r(
    $connection->tableOptions("robots")
);

```



public  **createSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a new savepoint



public  **releaseSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Releases given savepoint



public  **rollbackSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Rollbacks given savepoint



public  **setNestedTransactionsWithSavepoints** (*mixed* $nestedTransactionsWithSavepoints) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Set if nested transactions should use savepoints



public  **isNestedTransactionsWithSavepoints** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns if nested transactions should use savepoints



public  **getNestedTransactionSavepointName** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the savepoint name to use for nested transactions



public  **getDefaultValue** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the default value to make the RBDM use the default value declared in the table definition

```php
<?php

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



public  **getDescriptor** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Return descriptor used to connect to the active database



public *string* **getConnectionId** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets the active connection unique identifier



public  **getSQLStatement** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object



public  **getRealSQLStatement** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object without replace bound parameters



public *array* **getSQLBindTypes** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object




<hr>

# Class **Phalcon\Db\Adapter\Pdo\Sqlite**

*extends* abstract class [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

*implements* [Phalcon\Db\AdapterInterface](Phalcon_Db.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/adapter/pdo/sqlite.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Specific functions for the Sqlite database system

```php
<?php

use Phalcon\Db\Adapter\Pdo\Sqlite;

$connection = new Sqlite(
    [
        "dbname" => "/tmp/test.sqlite",
    ]
);

```


## Methods
public  **connect** ([*array* $descriptor])

This method is automatically called in Phalcon\Db\Adapter\Pdo constructor.
Call it when you need to restore a database connection.



public  **describeColumns** (*mixed* $table, [*mixed* $schema])

Returns an array of Phalcon\Db\Column objects describing a table

```php
<?php

print_r(
    $connection->describeColumns("posts")
);

```



public [Phalcon\Db\IndexInterface](Phalcon_Db.md) **describeIndexes** (*string* $table, [*string* $schema])

Lists table indexes

```php
<?php

print_r(
    $connection->describeIndexes("robots_parts")
);

```



public [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) **describeReferences** (*string* $table, [*string* $schema])

Lists table references



public  **useExplicitIdValue** ()

Check whether the database system requires an explicit value for identity columns



public  **getDefaultValue** ()

Returns the default value to make the RBDM use the default value declared in the table definition

```php
<?php

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



public  **__construct** (*array* $descriptor) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Constructor for Phalcon\Db\Adapter\Pdo



public  **prepare** (*mixed* $sqlStatement) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns a PDO prepared statement to be executed with 'executePrepared'

```php
<?php

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



public [PDOStatement](https://php.net/manual/en/class.pdostatement.php) **executePrepared** ([PDOStatement](https://php.net/manual/en/class.pdostatement.php) $statement, *array* $placeholders, *array* $dataTypes) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Executes a prepared statement binding. This function uses integer indexes starting from zero

```php
<?php

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



public  **query** (*mixed* $sqlStatement, [*mixed* $bindParams], [*mixed* $bindTypes]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server is returning rows

```php
<?php

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



public  **execute** (*mixed* $sqlStatement, [*mixed* $bindParams], [*mixed* $bindTypes]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Sends SQL statements to the database server returning the success state.
Use this method only when the SQL statement sent to the server doesn't return any rows

```php
<?php

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



public  **affectedRows** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns the number of affected rows by the latest INSERT/UPDATE/DELETE executed in the database system

```php
<?php

$connection->execute(
    "DELETE FROM robots"
);

echo $connection->affectedRows(), " were deleted";

```



public  **close** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Closes the active connection returning success. Phalcon automatically closes and destroys
active connections when the request ends



public  **escapeString** (*mixed* $str) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Escapes a value to avoid SQL injections according to the active charset in the connection

```php
<?php

$escapedStr = $connection->escapeString("some dangerous value");

```



public  **convertBoundParams** (*mixed* $sql, [*array* $params]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Converts bound parameters such as :name: or ?1 into PDO bind params ?

```php
<?php

print_r(
    $connection->convertBoundParams(
        "SELECT * FROM robots WHERE name = :name:",
        [
            "Bender",
        ]
    )
);

```



public *int* | *boolean* **lastInsertId** ([*string* $sequenceName]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns the insert id for the auto_increment/serial column inserted in the latest executed SQL statement

```php
<?php

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



public  **begin** ([*mixed* $nesting]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Starts a transaction in the connection



public  **rollback** ([*mixed* $nesting]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Rollbacks the active transaction in the connection



public  **commit** ([*mixed* $nesting]) inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Commits the active transaction in the connection



public  **getTransactionLevel** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Returns the current transaction nesting level



public  **isUnderTransaction** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Checks whether the connection is under a transaction

```php
<?php

$connection->begin();

// true
var_dump(
    $connection->isUnderTransaction()
);

```



public  **getInternalHandler** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Return internal PDO handler



public *array* **getErrorInfo** () inherited from [Phalcon\Db\Adapter\Pdo](Phalcon_Db.md)

Return the error info, if any



public  **getDialectType** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Name of the dialect used



public  **getType** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Type of database system the adapter is used for



public  **getSqlVariables** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL bound parameter variables



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the internal event manager



public  **setDialect** ([Phalcon\Db\DialectInterface](Phalcon_Db.md) $dialect) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Sets the dialect used to produce the SQL



public  **getDialect** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns internal dialect instance



public  **fetchOne** (*mixed* $sqlQuery, [*mixed* $fetchMode], [*mixed* $bindParams], [*mixed* $bindTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the first row in a SQL query result

```php
<?php

// Getting first robot
$robot = $connection->fetchOne("SELECT * FROM robots");
print_r($robot);

// Getting first robot with associative indexes only
$robot = $connection->fetchOne("SELECT * FROM robots", \Phalcon\Db::FETCH_ASSOC);
print_r($robot);

```



public *array* **fetchAll** (*string* $sqlQuery, [*int* $fetchMode], [*array* $bindParams], [*array* $bindTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Dumps the complete result of a query into an array

```php
<?php

// Getting all robots with associative indexes only
$robots = $connection->fetchAll(
    "SELECT * FROM robots",
    \Phalcon\Db::FETCH_ASSOC
);

foreach ($robots as $robot) {
    print_r($robot);
}

 // Getting all robots that contains word "robot" withing the name
$robots = $connection->fetchAll(
    "SELECT * FROM robots WHERE name LIKE :name",
    \Phalcon\Db::FETCH_ASSOC,
    [
        "name" => "%robot%",
    ]
);
foreach($robots as $robot) {
    print_r($robot);
}

```



public *string* | ** **fetchColumn** (*string* $sqlQuery, [*array* $placeholders], [*int* | *string* $column]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the n'th field of first row in a SQL query result

```php
<?php

// Getting count of robots
$robotsCount = $connection->fetchColumn("SELECT count(*) FROM robots");
print_r($robotsCount);

// Getting name of last edited robot
$robot = $connection->fetchColumn(
    "SELECT id, name FROM robots order by modified desc",
    1
);
print_r($robot);

```



public *boolean* **insert** (*string* | *array* $table, *array* $values, [*array* $fields], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Inserts data into a table using custom RDBMS SQL syntax

```php
<?php

// Inserting a new robot
$success = $connection->insert(
    "robots",
    ["Astro Boy", 1952],
    ["name", "year"]
);

// Next SQL sentence is sent to the database system
INSERT INTO `robots` (`name`, `year`) VALUES ("Astro boy", 1952);

```



public *boolean* **insertAsDict** (*string* $table, *array* $data, [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Inserts data into a table using custom RBDM SQL syntax

```php
<?php

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



public *boolean* **update** (*string* | *array* $table, *array* $fields, *array* $values, [*string* | *array* $whereCondition], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Updates data on a table using custom RBDM SQL syntax

```php
<?php

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



public *boolean* **updateAsDict** (*string* $table, *array* $data, [*string* $whereCondition], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Updates data on a table using custom RBDM SQL syntax
Another, more convenient syntax

```php
<?php

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



public *boolean* **delete** (*string* | *array* $table, [*string* $whereCondition], [*array* $placeholders], [*array* $dataTypes]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Deletes data from a table using custom RBDM SQL syntax

```php
<?php

// Deleting existing robot
$success = $connection->delete(
    "robots",
    "id = 101"
);

// Next SQL sentence is generated
DELETE FROM `robots` WHERE `id` = 101

```



public  **escapeIdentifier** (*array* | *string* $identifier) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Escapes a column/table/schema name

```php
<?php

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



public *string* **getColumnList** (*array* $columnList) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets a list of columns



public  **limit** (*mixed* $sqlQuery, *mixed* $number) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Appends a LIMIT clause to $sqlQuery argument

```php
<?php

echo $connection->limit("SELECT * FROM robots", 5);

```



public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Generates SQL checking for the existence of a schema.table

```php
<?php

var_dump(
    $connection->tableExists("blog", "posts")
);

```



public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Generates SQL checking for the existence of a schema.view

```php
<?php

var_dump(
    $connection->viewExists("active_users", "posts")
);

```



public  **forUpdate** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns a SQL modified with a FOR UPDATE clause



public  **sharedLock** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns a SQL modified with a LOCK IN SHARE MODE clause



public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a table



public  **dropTable** (*mixed* $tableName, [*mixed* $schemaName], [*mixed* $ifExists]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a table from a schema/database



public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a view



public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a view



public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a column to a table



public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Modifies a table column based on a definition



public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a column from a table



public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds an index to a table



public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drop an index from a table



public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a primary key to a table



public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a table's primary key



public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Adds a foreign key to a table



public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Drops a foreign key from a table



public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the SQL column definition from a column



public  **listTables** ([*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

List all tables on a database

```php
<?php

print_r(
    $connection->listTables("blog")
);

```



public  **listViews** ([*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

List all views on a database

```php
<?php

print_r(
    $connection->listViews("blog")
);

```



public  **tableOptions** (*mixed* $tableName, [*mixed* $schemaName]) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets creation options from a table

```php
<?php

print_r(
    $connection->tableOptions("robots")
);

```



public  **createSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Creates a new savepoint



public  **releaseSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Releases given savepoint



public  **rollbackSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Rollbacks given savepoint



public  **setNestedTransactionsWithSavepoints** (*mixed* $nestedTransactionsWithSavepoints) inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Set if nested transactions should use savepoints



public  **isNestedTransactionsWithSavepoints** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns if nested transactions should use savepoints



public  **getNestedTransactionSavepointName** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the savepoint name to use for nested transactions



public  **getDefaultIdValue** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Returns the default identity value to be inserted in an identity column

```php
<?php

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



public  **supportSequences** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Check whether the database system requires a sequence to produce auto-numeric values



public  **getDescriptor** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Return descriptor used to connect to the active database



public *string* **getConnectionId** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Gets the active connection unique identifier



public  **getSQLStatement** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object



public  **getRealSQLStatement** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object without replace bound parameters



public *array* **getSQLBindTypes** () inherited from [Phalcon\Db\Adapter](Phalcon_Db.md)

Active SQL statement in the object




<hr>

# Interface **Phalcon\Db\AdapterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/adapterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **fetchOne** (*mixed* $sqlQuery, [*mixed* $fetchMode], [*mixed* $placeholders])

...


abstract public  **fetchAll** (*mixed* $sqlQuery, [*mixed* $fetchMode], [*mixed* $placeholders])

...


abstract public  **insert** (*mixed* $table, *array* $values, [*mixed* $fields], [*mixed* $dataTypes])

...


abstract public  **update** (*mixed* $table, *mixed* $fields, *mixed* $values, [*mixed* $whereCondition], [*mixed* $dataTypes])

...


abstract public  **delete** (*mixed* $table, [*mixed* $whereCondition], [*mixed* $placeholders], [*mixed* $dataTypes])

...


abstract public  **getColumnList** (*mixed* $columnList)

...


abstract public  **limit** (*mixed* $sqlQuery, *mixed* $number)

...


abstract public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName])

...


abstract public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName])

...


abstract public  **forUpdate** (*mixed* $sqlQuery)

...


abstract public  **sharedLock** (*mixed* $sqlQuery)

...


abstract public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition)

...


abstract public  **dropTable** (*mixed* $tableName, [*mixed* $schemaName], [*mixed* $ifExists])

...


abstract public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName])

...


abstract public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists])

...


abstract public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

...


abstract public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn])

...


abstract public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName)

...


abstract public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

...


abstract public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName)

...


abstract public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

...


abstract public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName)

...


abstract public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference)

...


abstract public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName)

...


abstract public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

...


abstract public  **listTables** ([*mixed* $schemaName])

...


abstract public  **listViews** ([*mixed* $schemaName])

...


abstract public  **getDescriptor** ()

...


abstract public  **getConnectionId** ()

...


abstract public  **getSQLStatement** ()

...


abstract public  **getRealSQLStatement** ()

...


abstract public  **getSQLVariables** ()

...


abstract public  **getSQLBindTypes** ()

...


abstract public  **getType** ()

...


abstract public  **getDialectType** ()

...


abstract public  **getDialect** ()

...


abstract public  **connect** ([*array* $descriptor])

...


abstract public  **query** (*mixed* $sqlStatement, [*mixed* $placeholders], [*mixed* $dataTypes])

...


abstract public  **execute** (*mixed* $sqlStatement, [*mixed* $placeholders], [*mixed* $dataTypes])

...


abstract public  **affectedRows** ()

...


abstract public  **close** ()

...


abstract public  **escapeIdentifier** (*mixed* $identifier)

...


abstract public  **escapeString** (*mixed* $str)

...


abstract public  **lastInsertId** ([*mixed* $sequenceName])

...


abstract public  **begin** ([*mixed* $nesting])

...


abstract public  **rollback** ([*mixed* $nesting])

...


abstract public  **commit** ([*mixed* $nesting])

...


abstract public  **isUnderTransaction** ()

...


abstract public  **getInternalHandler** ()

...


abstract public  **describeIndexes** (*mixed* $table, [*mixed* $schema])

...


abstract public  **describeReferences** (*mixed* $table, [*mixed* $schema])

...


abstract public  **tableOptions** (*mixed* $tableName, [*mixed* $schemaName])

...


abstract public  **useExplicitIdValue** ()

...


abstract public  **getDefaultIdValue** ()

...


abstract public  **supportSequences** ()

...


abstract public  **createSavepoint** (*mixed* $name)

...


abstract public  **releaseSavepoint** (*mixed* $name)

...


abstract public  **rollbackSavepoint** (*mixed* $name)

...


abstract public  **setNestedTransactionsWithSavepoints** (*mixed* $nestedTransactionsWithSavepoints)

...


abstract public  **isNestedTransactionsWithSavepoints** ()

...


abstract public  **getNestedTransactionSavepointName** ()

...


abstract public  **describeColumns** (*mixed* $table, [*mixed* $schema])

...



<hr>

# Class **Phalcon\Db\Column**

*implements* [Phalcon\Db\ColumnInterface](Phalcon_Db.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/column.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to define columns to be used on create or alter table operations

```php
<?php

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
    ]
);

// Add column to existing table
$connection->addColumn("robots", null, $column);

```


## Constants
*integer* **TYPE_INTEGER**

*integer* **TYPE_DATE**

*integer* **TYPE_VARCHAR**

*integer* **TYPE_DECIMAL**

*integer* **TYPE_DATETIME**

*integer* **TYPE_CHAR**

*integer* **TYPE_TEXT**

*integer* **TYPE_FLOAT**

*integer* **TYPE_BOOLEAN**

*integer* **TYPE_DOUBLE**

*integer* **TYPE_TINYBLOB**

*integer* **TYPE_BLOB**

*integer* **TYPE_MEDIUMBLOB**

*integer* **TYPE_LONGBLOB**

*integer* **TYPE_BIGINTEGER**

*integer* **TYPE_JSON**

*integer* **TYPE_JSONB**

*integer* **TYPE_TIMESTAMP**

*integer* **BIND_PARAM_NULL**

*integer* **BIND_PARAM_INT**

*integer* **BIND_PARAM_STR**

*integer* **BIND_PARAM_BLOB**

*integer* **BIND_PARAM_BOOL**

*integer* **BIND_PARAM_DECIMAL**

*integer* **BIND_SKIP**

## Methods
public  **getName** ()

Column's name



public  **getSchemaName** ()

Schema which table related is



public  **getType** ()

Column data type



public  **getTypeReference** ()

Column data type reference



public  **getTypeValues** ()

Column data type values



public  **getSize** ()

Integer column size



public  **getScale** ()

Integer column number scale



public  **getDefault** ()

Default column value



public  **__construct** (*mixed* $name, *array* $definition)

Phalcon\Db\Column constructor



public  **isUnsigned** ()

Returns true if number column is unsigned



public  **isNotNull** ()

Not null



public  **isPrimary** ()

Column is part of the primary key?



public  **isAutoIncrement** ()

Auto-Increment



public  **isNumeric** ()

Check whether column have an numeric type



public  **isFirst** ()

Check whether column have first position in table



public *string* **getAfterPosition** ()

Check whether field absolute to position in table



public  **getBindType** ()

Returns the type of bind handling



public static  **__set_state** (*array* $data)

Restores the internal state of a Phalcon\Db\Column object



public  **hasDefault** ()

Check whether column has default value




<hr>

# Interface **Phalcon\Db\ColumnInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/columninterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getSchemaName** ()

...


abstract public  **getName** ()

...


abstract public  **getType** ()

...


abstract public  **getTypeReference** ()

...


abstract public  **getTypeValues** ()

...


abstract public  **getSize** ()

...


abstract public  **getScale** ()

...


abstract public  **isUnsigned** ()

...


abstract public  **isNotNull** ()

...


abstract public  **isPrimary** ()

...


abstract public  **isAutoIncrement** ()

...


abstract public  **isNumeric** ()

...


abstract public  **isFirst** ()

...


abstract public  **getAfterPosition** ()

...


abstract public  **getBindType** ()

...


abstract public  **getDefault** ()

...


abstract public  **hasDefault** ()

...


abstract public static  **__set_state** (*array* $data)

...



<hr>

# Abstract class **Phalcon\Db\Dialect**

*implements* [Phalcon\Db\DialectInterface](Phalcon_Db.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/dialect.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This is the base class to each database dialect. This implements
common methods to transform intermediate code into its RDBMS related syntax


## Methods
public  **registerCustomFunction** (*mixed* $name, *mixed* $customFunction)

Registers custom SQL functions



public  **getCustomFunctions** ()

Returns registered functions



final public  **escapeSchema** (*mixed* $str, [*mixed* $escapeChar])

Escape Schema



final public  **escape** (*mixed* $str, [*mixed* $escapeChar])

Escape identifiers



public  **limit** (*mixed* $sqlQuery, *mixed* $number)

Generates the SQL for LIMIT clause

```php
<?php

$sql = $dialect->limit("SELECT * FROM robots", 10);
echo $sql; // SELECT * FROM robots LIMIT 10

$sql = $dialect->limit("SELECT * FROM robots", [10, 50]);
echo $sql; // SELECT * FROM robots LIMIT 10 OFFSET 50

```



public  **forUpdate** (*mixed* $sqlQuery)

Returns a SQL modified with a FOR UPDATE clause

```php
<?php

$sql = $dialect->forUpdate("SELECT * FROM robots");
echo $sql; // SELECT * FROM robots FOR UPDATE

```



public  **sharedLock** (*mixed* $sqlQuery)

Returns a SQL modified with a LOCK IN SHARE MODE clause

```php
<?php

$sql = $dialect->sharedLock("SELECT * FROM robots");
echo $sql; // SELECT * FROM robots LOCK IN SHARE MODE

```



final public  **getColumnList** (*array* $columnList, [*mixed* $escapeChar], [*mixed* $bindCounts])

Gets a list of columns with escaped identifiers

```php
<?php

echo $dialect->getColumnList(
    [
        "column1",
        "column",
    ]
);

```



final public  **getSqlColumn** (*mixed* $column, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve Column expressions



public  **getSqlExpression** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Transforms an intermediate representation for an expression into a database system valid expression



final public  **getSqlTable** (*mixed* $table, [*mixed* $escapeChar])

Transform an intermediate representation of a schema/table into a database system valid expression



public  **select** (*array* $definition)

Builds a SELECT statement



public  **supportsSavepoints** ()

Checks whether the platform supports savepoints



public  **supportsReleaseSavepoints** ()

Checks whether the platform supports releasing savepoints.



public  **createSavepoint** (*mixed* $name)

Generate SQL to create a new savepoint



public  **releaseSavepoint** (*mixed* $name)

Generate SQL to release a savepoint



public  **rollbackSavepoint** (*mixed* $name)

Generate SQL to rollback a savepoint



final protected  **getSqlExpressionScalar** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve Column expressions



final protected  **getSqlExpressionObject** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve object expressions



final protected  **getSqlExpressionQualified** (*array* $expression, [*mixed* $escapeChar])

Resolve qualified expressions



final protected  **getSqlExpressionBinaryOperations** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve binary operations expressions



final protected  **getSqlExpressionUnaryOperations** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve unary operations expressions



final protected  **getSqlExpressionFunctionCall** (*array* $expression, *mixed* $escapeChar, [*mixed* $bindCounts])

Resolve function calls



final protected  **getSqlExpressionList** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve Lists



final protected  **getSqlExpressionAll** (*array* $expression, [*mixed* $escapeChar])

Resolve *



final protected  **getSqlExpressionCastValue** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve CAST of values



final protected  **getSqlExpressionConvertValue** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve CONVERT of values encodings



final protected  **getSqlExpressionCase** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve CASE expressions



final protected  **getSqlExpressionFrom** (*mixed* $expression, [*mixed* $escapeChar])

Resolve a FROM clause



final protected  **getSqlExpressionJoins** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve a JOINs clause



final protected  **getSqlExpressionWhere** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve a WHERE clause



final protected  **getSqlExpressionGroupBy** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve a GROUP BY clause



final protected  **getSqlExpressionHaving** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve a HAVING clause



final protected  **getSqlExpressionOrderBy** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve an ORDER BY clause



final protected  **getSqlExpressionLimit** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts])

Resolve a LIMIT clause



protected  **prepareColumnAlias** (*mixed* $qualified, [*mixed* $alias], [*mixed* $escapeChar])

Prepares column for this RDBMS



protected  **prepareTable** (*mixed* $table, [*mixed* $schema], [*mixed* $alias], [*mixed* $escapeChar])

Prepares table for this RDBMS



protected  **prepareQualified** (*mixed* $column, [*mixed* $domain], [*mixed* $escapeChar])

Prepares qualified for this RDBMS



abstract public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn]) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName]) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **dropTable** (*mixed* $tableName, *mixed* $schemaName) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists]) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName]) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName]) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **describeColumns** (*mixed* $table, [*mixed* $schema]) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **listTables** ([*mixed* $schemaName]) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **describeIndexes** (*mixed* $table, [*mixed* $schema]) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **describeReferences** (*mixed* $table, [*mixed* $schema]) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...


abstract public  **tableOptions** (*mixed* $table, [*mixed* $schema]) inherited from [Phalcon\Db\DialectInterface](Phalcon_Db.md)

...



<hr>

# Class **Phalcon\Db\Dialect\Mysql**

*extends* abstract class [Phalcon\Db\Dialect](Phalcon_Db.md)

*implements* [Phalcon\Db\DialectInterface](Phalcon_Db.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/dialect/mysql.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Generates database specific SQL for the MySQL RDBMS


## Methods
public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

Gets the column name in MySQL



public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

Generates SQL to add a column to a table



public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn])

Generates SQL to modify a column in a table



public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName)

Generates SQL to delete a column from a table



public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

Generates SQL to add an index to a table



public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName)

Generates SQL to delete an index from a table



public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

Generates SQL to add the primary key to a table



public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName)

Generates SQL to delete primary key from a table



public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference)

Generates SQL to add an index to a table



public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName)

Generates SQL to delete a foreign key from a table



public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition)

Generates SQL to create a table



public  **truncateTable** (*mixed* $tableName, *mixed* $schemaName)

Generates SQL to truncate a table



public  **dropTable** (*mixed* $tableName, [*mixed* $schemaName], [*mixed* $ifExists])

Generates SQL to drop a table



public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName])

Generates SQL to create a view



public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists])

Generates SQL to drop a view



public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName])

Generates SQL checking for the existence of a schema.table

```php
<?php

echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");

```



public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName])

Generates SQL checking for the existence of a schema.view



public  **describeColumns** (*mixed* $table, [*mixed* $schema])

Generates SQL describing a table

```php
<?php

print_r(
    $dialect->describeColumns("posts")
);

```



public  **listTables** ([*mixed* $schemaName])

List all tables in database

```php
<?php

print_r(
    $dialect->listTables("blog")
);

```



public  **listViews** ([*mixed* $schemaName])

Generates the SQL to list all views of a schema or user



public  **describeIndexes** (*mixed* $table, [*mixed* $schema])

Generates SQL to query indexes on a table



public  **describeReferences** (*mixed* $table, [*mixed* $schema])

Generates SQL to query foreign keys on a table



public  **tableOptions** (*mixed* $table, [*mixed* $schema])

Generates the SQL to describe the table creation options



protected  **_getTableOptions** (*array* $definition)

Generates SQL to add the table creation options



public  **registerCustomFunction** (*mixed* $name, *mixed* $customFunction) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Registers custom SQL functions



public  **getCustomFunctions** () inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Returns registered functions



final public  **escapeSchema** (*mixed* $str, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Escape Schema



final public  **escape** (*mixed* $str, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Escape identifiers



public  **limit** (*mixed* $sqlQuery, *mixed* $number) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generates the SQL for LIMIT clause

```php
<?php

$sql = $dialect->limit("SELECT * FROM robots", 10);
echo $sql; // SELECT * FROM robots LIMIT 10

$sql = $dialect->limit("SELECT * FROM robots", [10, 50]);
echo $sql; // SELECT * FROM robots LIMIT 10 OFFSET 50

```



public  **forUpdate** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Returns a SQL modified with a FOR UPDATE clause

```php
<?php

$sql = $dialect->forUpdate("SELECT * FROM robots");
echo $sql; // SELECT * FROM robots FOR UPDATE

```



public  **sharedLock** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Returns a SQL modified with a LOCK IN SHARE MODE clause

```php
<?php

$sql = $dialect->sharedLock("SELECT * FROM robots");
echo $sql; // SELECT * FROM robots LOCK IN SHARE MODE

```



final public  **getColumnList** (*array* $columnList, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Gets a list of columns with escaped identifiers

```php
<?php

echo $dialect->getColumnList(
    [
        "column1",
        "column",
    ]
);

```



final public  **getSqlColumn** (*mixed* $column, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve Column expressions



public  **getSqlExpression** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Transforms an intermediate representation for an expression into a database system valid expression



final public  **getSqlTable** (*mixed* $table, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Transform an intermediate representation of a schema/table into a database system valid expression



public  **select** (*array* $definition) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Builds a SELECT statement



public  **supportsSavepoints** () inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Checks whether the platform supports savepoints



public  **supportsReleaseSavepoints** () inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Checks whether the platform supports releasing savepoints.



public  **createSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generate SQL to create a new savepoint



public  **releaseSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generate SQL to release a savepoint



public  **rollbackSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generate SQL to rollback a savepoint



final protected  **getSqlExpressionScalar** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve Column expressions



final protected  **getSqlExpressionObject** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve object expressions



final protected  **getSqlExpressionQualified** (*array* $expression, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve qualified expressions



final protected  **getSqlExpressionBinaryOperations** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve binary operations expressions



final protected  **getSqlExpressionUnaryOperations** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve unary operations expressions



final protected  **getSqlExpressionFunctionCall** (*array* $expression, *mixed* $escapeChar, [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve function calls



final protected  **getSqlExpressionList** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve Lists



final protected  **getSqlExpressionAll** (*array* $expression, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve *



final protected  **getSqlExpressionCastValue** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve CAST of values



final protected  **getSqlExpressionConvertValue** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve CONVERT of values encodings



final protected  **getSqlExpressionCase** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve CASE expressions



final protected  **getSqlExpressionFrom** (*mixed* $expression, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a FROM clause



final protected  **getSqlExpressionJoins** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a JOINs clause



final protected  **getSqlExpressionWhere** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a WHERE clause



final protected  **getSqlExpressionGroupBy** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a GROUP BY clause



final protected  **getSqlExpressionHaving** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a HAVING clause



final protected  **getSqlExpressionOrderBy** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve an ORDER BY clause



final protected  **getSqlExpressionLimit** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a LIMIT clause



protected  **prepareColumnAlias** (*mixed* $qualified, [*mixed* $alias], [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Prepares column for this RDBMS



protected  **prepareTable** (*mixed* $table, [*mixed* $schema], [*mixed* $alias], [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Prepares table for this RDBMS



protected  **prepareQualified** (*mixed* $column, [*mixed* $domain], [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Prepares qualified for this RDBMS




<hr>

# Class **Phalcon\Db\Dialect\Postgresql**

*extends* abstract class [Phalcon\Db\Dialect](Phalcon_Db.md)

*implements* [Phalcon\Db\DialectInterface](Phalcon_Db.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/dialect/postgresql.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Generates database specific SQL for the PostgreSQL RDBMS


## Methods
public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

Gets the column name in PostgreSQL



public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

Generates SQL to add a column to a table



public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn])

Generates SQL to modify a column in a table



public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName)

Generates SQL to delete a column from a table



public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

Generates SQL to add an index to a table



public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName)

Generates SQL to delete an index from a table



public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

Generates SQL to add the primary key to a table



public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName)

Generates SQL to delete primary key from a table



public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference)

Generates SQL to add an index to a table



public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName)

Generates SQL to delete a foreign key from a table



public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition)

Generates SQL to create a table



public  **truncateTable** (*mixed* $tableName, *mixed* $schemaName)

Generates SQL to truncate a table



public  **dropTable** (*mixed* $tableName, [*mixed* $schemaName], [*mixed* $ifExists])

Generates SQL to drop a table



public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName])

Generates SQL to create a view



public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists])

Generates SQL to drop a view



public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName])

Generates SQL checking for the existence of a schema.table

```php
<?php

echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");

```



public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName])

Generates SQL checking for the existence of a schema.view



public  **describeColumns** (*mixed* $table, [*mixed* $schema])

Generates SQL describing a table

```php
<?php

print_r(
    $dialect->describeColumns("posts")
);

```



public  **listTables** ([*mixed* $schemaName])

List all tables in database

```php
<?php

print_r(
    $dialect->listTables("blog")
);

```



public *string* **listViews** ([*string* $schemaName])

Generates the SQL to list all views of a schema or user



public  **describeIndexes** (*mixed* $table, [*mixed* $schema])

Generates SQL to query indexes on a table



public  **describeReferences** (*mixed* $table, [*mixed* $schema])

Generates SQL to query foreign keys on a table



public  **tableOptions** (*mixed* $table, [*mixed* $schema])

Generates the SQL to describe the table creation options



protected  **_castDefault** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

...


protected  **_getTableOptions** (*array* $definition)

...


public  **registerCustomFunction** (*mixed* $name, *mixed* $customFunction) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Registers custom SQL functions



public  **getCustomFunctions** () inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Returns registered functions



final public  **escapeSchema** (*mixed* $str, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Escape Schema



final public  **escape** (*mixed* $str, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Escape identifiers



public  **limit** (*mixed* $sqlQuery, *mixed* $number) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generates the SQL for LIMIT clause

```php
<?php

$sql = $dialect->limit("SELECT * FROM robots", 10);
echo $sql; // SELECT * FROM robots LIMIT 10

$sql = $dialect->limit("SELECT * FROM robots", [10, 50]);
echo $sql; // SELECT * FROM robots LIMIT 10 OFFSET 50

```



public  **forUpdate** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Returns a SQL modified with a FOR UPDATE clause

```php
<?php

$sql = $dialect->forUpdate("SELECT * FROM robots");
echo $sql; // SELECT * FROM robots FOR UPDATE

```



public  **sharedLock** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Returns a SQL modified with a LOCK IN SHARE MODE clause

```php
<?php

$sql = $dialect->sharedLock("SELECT * FROM robots");
echo $sql; // SELECT * FROM robots LOCK IN SHARE MODE

```



final public  **getColumnList** (*array* $columnList, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Gets a list of columns with escaped identifiers

```php
<?php

echo $dialect->getColumnList(
    [
        "column1",
        "column",
    ]
);

```



final public  **getSqlColumn** (*mixed* $column, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve Column expressions



public  **getSqlExpression** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Transforms an intermediate representation for an expression into a database system valid expression



final public  **getSqlTable** (*mixed* $table, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Transform an intermediate representation of a schema/table into a database system valid expression



public  **select** (*array* $definition) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Builds a SELECT statement



public  **supportsSavepoints** () inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Checks whether the platform supports savepoints



public  **supportsReleaseSavepoints** () inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Checks whether the platform supports releasing savepoints.



public  **createSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generate SQL to create a new savepoint



public  **releaseSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generate SQL to release a savepoint



public  **rollbackSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generate SQL to rollback a savepoint



final protected  **getSqlExpressionScalar** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve Column expressions



final protected  **getSqlExpressionObject** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve object expressions



final protected  **getSqlExpressionQualified** (*array* $expression, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve qualified expressions



final protected  **getSqlExpressionBinaryOperations** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve binary operations expressions



final protected  **getSqlExpressionUnaryOperations** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve unary operations expressions



final protected  **getSqlExpressionFunctionCall** (*array* $expression, *mixed* $escapeChar, [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve function calls



final protected  **getSqlExpressionList** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve Lists



final protected  **getSqlExpressionAll** (*array* $expression, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve *



final protected  **getSqlExpressionCastValue** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve CAST of values



final protected  **getSqlExpressionConvertValue** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve CONVERT of values encodings



final protected  **getSqlExpressionCase** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve CASE expressions



final protected  **getSqlExpressionFrom** (*mixed* $expression, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a FROM clause



final protected  **getSqlExpressionJoins** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a JOINs clause



final protected  **getSqlExpressionWhere** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a WHERE clause



final protected  **getSqlExpressionGroupBy** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a GROUP BY clause



final protected  **getSqlExpressionHaving** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a HAVING clause



final protected  **getSqlExpressionOrderBy** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve an ORDER BY clause



final protected  **getSqlExpressionLimit** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a LIMIT clause



protected  **prepareColumnAlias** (*mixed* $qualified, [*mixed* $alias], [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Prepares column for this RDBMS



protected  **prepareTable** (*mixed* $table, [*mixed* $schema], [*mixed* $alias], [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Prepares table for this RDBMS



protected  **prepareQualified** (*mixed* $column, [*mixed* $domain], [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Prepares qualified for this RDBMS




<hr>

# Class **Phalcon\Db\Dialect\Sqlite**

*extends* abstract class [Phalcon\Db\Dialect](Phalcon_Db.md)

*implements* [Phalcon\Db\DialectInterface](Phalcon_Db.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/dialect/sqlite.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Generates database specific SQL for the Sqlite RDBMS


## Methods
public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

Gets the column name in SQLite



public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

Generates SQL to add a column to a table



public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn])

Generates SQL to modify a column in a table



public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName)

Generates SQL to delete a column from a table



public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

Generates SQL to add an index to a table



public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName)

Generates SQL to delete an index from a table



public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

Generates SQL to add the primary key to a table



public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName)

Generates SQL to delete primary key from a table



public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference)

Generates SQL to add an index to a table



public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName)

Generates SQL to delete a foreign key from a table



public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition)

Generates SQL to create a table



public  **truncateTable** (*mixed* $tableName, *mixed* $schemaName)

Generates SQL to truncate a table



public  **dropTable** (*mixed* $tableName, [*mixed* $schemaName], [*mixed* $ifExists])

Generates SQL to drop a table



public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName])

Generates SQL to create a view



public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists])

Generates SQL to drop a view



public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName])

Generates SQL checking for the existence of a schema.table

```php
<?php

echo $dialect->tableExists("posts", "blog");

echo $dialect->tableExists("posts");

```



public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName])

Generates SQL checking for the existence of a schema.view



public  **describeColumns** (*mixed* $table, [*mixed* $schema])

Generates SQL describing a table

```php
<?php

print_r(
    $dialect->describeColumns("posts")
);

```



public  **listTables** ([*mixed* $schemaName])

List all tables in database

```php
<?php

print_r(
    $dialect->listTables("blog")
);

```



public  **listViews** ([*mixed* $schemaName])

Generates the SQL to list all views of a schema or user



public  **listIndexesSql** (*mixed* $table, [*mixed* $schema], [*mixed* $keyName])

Generates the SQL to get query list of indexes

```php
<?php

print_r(
    $dialect->listIndexesSql("blog")
);

```



public  **describeIndexes** (*mixed* $table, [*mixed* $schema])

Generates SQL to query indexes on a table



public  **describeIndex** (*mixed* $index)

Generates SQL to query indexes detail on a table



public  **describeReferences** (*mixed* $table, [*mixed* $schema])

Generates SQL to query foreign keys on a table



public  **tableOptions** (*mixed* $table, [*mixed* $schema])

Generates the SQL to describe the table creation options



public  **registerCustomFunction** (*mixed* $name, *mixed* $customFunction) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Registers custom SQL functions



public  **getCustomFunctions** () inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Returns registered functions



final public  **escapeSchema** (*mixed* $str, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Escape Schema



final public  **escape** (*mixed* $str, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Escape identifiers



public  **limit** (*mixed* $sqlQuery, *mixed* $number) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generates the SQL for LIMIT clause

```php
<?php

$sql = $dialect->limit("SELECT * FROM robots", 10);
echo $sql; // SELECT * FROM robots LIMIT 10

$sql = $dialect->limit("SELECT * FROM robots", [10, 50]);
echo $sql; // SELECT * FROM robots LIMIT 10 OFFSET 50

```



public  **forUpdate** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Returns a SQL modified with a FOR UPDATE clause

```php
<?php

$sql = $dialect->forUpdate("SELECT * FROM robots");
echo $sql; // SELECT * FROM robots FOR UPDATE

```



public  **sharedLock** (*mixed* $sqlQuery) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Returns a SQL modified with a LOCK IN SHARE MODE clause

```php
<?php

$sql = $dialect->sharedLock("SELECT * FROM robots");
echo $sql; // SELECT * FROM robots LOCK IN SHARE MODE

```



final public  **getColumnList** (*array* $columnList, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Gets a list of columns with escaped identifiers

```php
<?php

echo $dialect->getColumnList(
    [
        "column1",
        "column",
    ]
);

```



final public  **getSqlColumn** (*mixed* $column, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve Column expressions



public  **getSqlExpression** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Transforms an intermediate representation for an expression into a database system valid expression



final public  **getSqlTable** (*mixed* $table, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Transform an intermediate representation of a schema/table into a database system valid expression



public  **select** (*array* $definition) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Builds a SELECT statement



public  **supportsSavepoints** () inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Checks whether the platform supports savepoints



public  **supportsReleaseSavepoints** () inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Checks whether the platform supports releasing savepoints.



public  **createSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generate SQL to create a new savepoint



public  **releaseSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generate SQL to release a savepoint



public  **rollbackSavepoint** (*mixed* $name) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Generate SQL to rollback a savepoint



final protected  **getSqlExpressionScalar** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve Column expressions



final protected  **getSqlExpressionObject** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve object expressions



final protected  **getSqlExpressionQualified** (*array* $expression, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve qualified expressions



final protected  **getSqlExpressionBinaryOperations** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve binary operations expressions



final protected  **getSqlExpressionUnaryOperations** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve unary operations expressions



final protected  **getSqlExpressionFunctionCall** (*array* $expression, *mixed* $escapeChar, [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve function calls



final protected  **getSqlExpressionList** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve Lists



final protected  **getSqlExpressionAll** (*array* $expression, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve *



final protected  **getSqlExpressionCastValue** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve CAST of values



final protected  **getSqlExpressionConvertValue** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve CONVERT of values encodings



final protected  **getSqlExpressionCase** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve CASE expressions



final protected  **getSqlExpressionFrom** (*mixed* $expression, [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a FROM clause



final protected  **getSqlExpressionJoins** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a JOINs clause



final protected  **getSqlExpressionWhere** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a WHERE clause



final protected  **getSqlExpressionGroupBy** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a GROUP BY clause



final protected  **getSqlExpressionHaving** (*array* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a HAVING clause



final protected  **getSqlExpressionOrderBy** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve an ORDER BY clause



final protected  **getSqlExpressionLimit** (*mixed* $expression, [*mixed* $escapeChar], [*mixed* $bindCounts]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Resolve a LIMIT clause



protected  **prepareColumnAlias** (*mixed* $qualified, [*mixed* $alias], [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Prepares column for this RDBMS



protected  **prepareTable** (*mixed* $table, [*mixed* $schema], [*mixed* $alias], [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Prepares table for this RDBMS



protected  **prepareQualified** (*mixed* $column, [*mixed* $domain], [*mixed* $escapeChar]) inherited from [Phalcon\Db\Dialect](Phalcon_Db.md)

Prepares qualified for this RDBMS




<hr>

# Interface **Phalcon\Db\DialectInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/dialectinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **limit** (*mixed* $sqlQuery, *mixed* $number)

...


abstract public  **forUpdate** (*mixed* $sqlQuery)

...


abstract public  **sharedLock** (*mixed* $sqlQuery)

...


abstract public  **select** (*array* $definition)

...


abstract public  **getColumnList** (*array* $columnList)

...


abstract public  **getColumnDefinition** ([Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

...


abstract public  **addColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column)

...


abstract public  **modifyColumn** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ColumnInterface](Phalcon_Db.md) $column, [[Phalcon\Db\ColumnInterface](Phalcon_Db.md) $currentColumn])

...


abstract public  **dropColumn** (*mixed* $tableName, *mixed* $schemaName, *mixed* $columnName)

...


abstract public  **addIndex** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

...


abstract public  **dropIndex** (*mixed* $tableName, *mixed* $schemaName, *mixed* $indexName)

...


abstract public  **addPrimaryKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\IndexInterface](Phalcon_Db.md) $index)

...


abstract public  **dropPrimaryKey** (*mixed* $tableName, *mixed* $schemaName)

...


abstract public  **addForeignKey** (*mixed* $tableName, *mixed* $schemaName, [Phalcon\Db\ReferenceInterface](Phalcon_Db.md) $reference)

...


abstract public  **dropForeignKey** (*mixed* $tableName, *mixed* $schemaName, *mixed* $referenceName)

...


abstract public  **createTable** (*mixed* $tableName, *mixed* $schemaName, *array* $definition)

...


abstract public  **createView** (*mixed* $viewName, *array* $definition, [*mixed* $schemaName])

...


abstract public  **dropTable** (*mixed* $tableName, *mixed* $schemaName)

...


abstract public  **dropView** (*mixed* $viewName, [*mixed* $schemaName], [*mixed* $ifExists])

...


abstract public  **tableExists** (*mixed* $tableName, [*mixed* $schemaName])

...


abstract public  **viewExists** (*mixed* $viewName, [*mixed* $schemaName])

...


abstract public  **describeColumns** (*mixed* $table, [*mixed* $schema])

...


abstract public  **listTables** ([*mixed* $schemaName])

...


abstract public  **describeIndexes** (*mixed* $table, [*mixed* $schema])

...


abstract public  **describeReferences** (*mixed* $table, [*mixed* $schema])

...


abstract public  **tableOptions** (*mixed* $table, [*mixed* $schema])

...


abstract public  **supportsSavepoints** ()

...


abstract public  **supportsReleaseSavepoints** ()

...


abstract public  **createSavepoint** (*mixed* $name)

...


abstract public  **releaseSavepoint** (*mixed* $name)

...


abstract public  **rollbackSavepoint** (*mixed* $name)

...



<hr>

# Class **Phalcon\Db\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Db\Index**

*implements* [Phalcon\Db\IndexInterface](Phalcon_Db.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/index.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to define indexes to be used on tables. Indexes are a common way
to enhance database performance. An index allows the database server to find
and retrieve specific rows much faster than it could do without an index

```php
<?php

// Define new unique index
$index_unique = new \Phalcon\Db\Index(
    'column_UNIQUE',
    [
        'column',
        'column'
    ],
    'UNIQUE'
);

// Define new primary index
$index_primary = new \Phalcon\Db\Index(
    'PRIMARY',
    [
        'column'
    ]
);

// Add index to existing table
$connection->addIndex("robots", null, $index_unique);
$connection->addIndex("robots", null, $index_primary);

```


## Methods
public  **getName** ()

Index name



public  **getColumns** ()

Index columns



public  **getType** ()

Index type



public  **__construct** (*mixed* $name, *array* $columns, [*mixed* $type])

Phalcon\Db\Index constructor



public static  **__set_state** (*array* $data)

Restore a Phalcon\Db\Index object from export




<hr>

# Interface **Phalcon\Db\IndexInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/indexinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getName** ()

...


abstract public  **getColumns** ()

...


abstract public  **getType** ()

...


abstract public static  **__set_state** (*array* $data)

...



<hr>

# Class **Phalcon\Db\Profiler**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/profiler.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Instances of Phalcon\Db can generate execution profiles
on SQL statements sent to the relational database. Profiled
information includes execution time in milliseconds.
This helps you to identify bottlenecks in your applications.

```php
<?php

$profiler = new \Phalcon\Db\Profiler();

// Set the connection profiler
$connection->setProfiler($profiler);

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


## Methods
public [Phalcon\Db\Profiler](Phalcon_Db.md) **startProfile** (*string* $sqlStatement, [*mixed* $sqlVariables], [*mixed* $sqlBindTypes])

Starts the profile of a SQL sentence



public  **stopProfile** ()

Stops the active profile



public  **getNumberTotalStatements** ()

Returns the total number of SQL statements processed



public  **getTotalElapsedSeconds** ()

Returns the total time in seconds spent by the profiles



public  **getProfiles** ()

Returns all the processed profiles



public  **reset** ()

Resets the profiler, cleaning up all the profiles



public  **getLastProfile** ()

Returns the last profile executed in the profiler




<hr>

# Class **Phalcon\Db\Profiler\Item**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/profiler/item.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class identifies each profile in a Phalcon\Db\Profiler


## Methods
public  **setSqlStatement** (*mixed* $sqlStatement)

SQL statement related to the profile



public  **getSqlStatement** ()

SQL statement related to the profile



public  **setSqlVariables** (*array* $sqlVariables)

SQL variables related to the profile



public  **getSqlVariables** ()

SQL variables related to the profile



public  **setSqlBindTypes** (*array* $sqlBindTypes)

SQL bind types related to the profile



public  **getSqlBindTypes** ()

SQL bind types related to the profile



public  **setInitialTime** (*mixed* $initialTime)

Timestamp when the profile started



public  **getInitialTime** ()

Timestamp when the profile started



public  **setFinalTime** (*mixed* $finalTime)

Timestamp when the profile ended



public  **getFinalTime** ()

Timestamp when the profile ended



public  **getTotalElapsedSeconds** ()

Returns the total time in seconds spent by the profile




<hr>

# Class **Phalcon\Db\RawValue**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/rawvalue.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class allows to insert/update raw data without quoting or formatting.

The next example shows how to use the MySQL now() function as a field value.

```php
<?php

$subscriber = new Subscribers();

$subscriber->email     = "andres@phalcon.io";
$subscriber->createdAt = new \Phalcon\Db\RawValue("now()");

$subscriber->save();

```


## Methods
public  **getValue** ()

Raw value without quoting or formatting



public  **__toString** ()

Raw value without quoting or formatting



public  **__construct** (*mixed* $value)

Phalcon\Db\RawValue constructor




<hr>

# Class **Phalcon\Db\Reference**

*implements* [Phalcon\Db\ReferenceInterface](Phalcon_Db.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/reference.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to define reference constraints on tables

```php
<?php

$reference = new \Phalcon\Db\Reference(
    "field_fk",
    [
        "referencedSchema"  => "invoicing",
        "referencedTable"   => "products",
        "columns"           => [
            "product_type",
            "product_code",
        ],
        "referencedColumns" => [
            "type",
            "code",
        ],
    ]
);

```


## Methods
public  **getName** ()

Constraint name



public  **getSchemaName** ()

...


public  **getReferencedSchema** ()

...


public  **getReferencedTable** ()

Referenced Table



public  **getColumns** ()

Local reference columns



public  **getReferencedColumns** ()

Referenced Columns



public  **getOnDelete** ()

ON DELETE



public  **getOnUpdate** ()

ON UPDATE



public  **__construct** (*mixed* $name, *array* $definition)

Phalcon\Db\Reference constructor



public static  **__set_state** (*array* $data)

Restore a Phalcon\Db\Reference object from export




<hr>

# Interface **Phalcon\Db\ReferenceInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/referenceinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getName** ()

...


abstract public  **getSchemaName** ()

...


abstract public  **getReferencedSchema** ()

...


abstract public  **getColumns** ()

...


abstract public  **getReferencedTable** ()

...


abstract public  **getReferencedColumns** ()

...


abstract public  **getOnDelete** ()

...


abstract public  **getOnUpdate** ()

...


abstract public static  **__set_state** (*array* $data)

...



<hr>

# Class **Phalcon\Db\Result\Pdo**

*implements* [Phalcon\Db\ResultInterface](Phalcon_Db.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/result/pdo.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Encapsulates the resultset internals

```php
<?php

$result = $connection->query("SELECT * FROM robots ORDER BY name");

$result->setFetchMode(
    \Phalcon\Db::FETCH_NUM
);

while ($robot = $result->fetchArray()) {
    print_r($robot);
}

```


## Methods
public  **__construct** ([Phalcon\Db\AdapterInterface](Phalcon_Db.md) $connection, [PDOStatement](https://php.net/manual/en/class.pdostatement.php) $result, [*string* $sqlStatement], [*array* $bindParams], [*array* $bindTypes])

Phalcon\Db\Result\Pdo constructor



public  **execute** ()

Allows to execute the statement again. Some database systems don't support scrollable cursors,
So, as cursors are forward only, we need to execute the cursor again to fetch rows from the begining



public  **fetch** ([*mixed* $fetchStyle], [*mixed* $cursorOrientation], [*mixed* $cursorOffset])

Fetches an array/object of strings that corresponds to the fetched row, or FALSE if there are no more rows.
This method is affected by the active fetch flag set using Phalcon\Db\Result\Pdo::setFetchMode

```php
<?php

$result = $connection->query("SELECT * FROM robots ORDER BY name");

$result->setFetchMode(
    \Phalcon\Db::FETCH_OBJ
);

while ($robot = $result->fetch()) {
    echo $robot->name;
}

```



public  **fetchArray** ()

Returns an array of strings that corresponds to the fetched row, or FALSE if there are no more rows.
This method is affected by the active fetch flag set using Phalcon\Db\Result\Pdo::setFetchMode

```php
<?php

$result = $connection->query("SELECT * FROM robots ORDER BY name");

$result->setFetchMode(
    \Phalcon\Db::FETCH_NUM
);

while ($robot = result->fetchArray()) {
    print_r($robot);
}

```



public  **fetchAll** ([*mixed* $fetchStyle], [*mixed* $fetchArgument], [*mixed* $ctorArgs])

Returns an array of arrays containing all the records in the result
This method is affected by the active fetch flag set using Phalcon\Db\Result\Pdo::setFetchMode

```php
<?php

$result = $connection->query(
    "SELECT * FROM robots ORDER BY name"
);

$robots = $result->fetchAll();

```



public  **numRows** ()

Gets number of rows returned by a resultset

```php
<?php

$result = $connection->query(
    "SELECT * FROM robots ORDER BY name"
);

echo "There are ", $result->numRows(), " rows in the resultset";

```



public  **dataSeek** (*mixed* $number)

Moves internal resultset cursor to another position letting us to fetch a certain row

```php
<?php

$result = $connection->query(
    "SELECT * FROM robots ORDER BY name"
);

// Move to third row on result
$result->dataSeek(2);

// Fetch third row
$row = $result->fetch();

```



public  **setFetchMode** (*mixed* $fetchMode, [*mixed* $colNoOrClassNameOrObject], [*mixed* $ctorargs])

Changes the fetching mode affecting Phalcon\Db\Result\Pdo::fetch()

```php
<?php

// Return array with integer indexes
$result->setFetchMode(
    \Phalcon\Db::FETCH_NUM
);

// Return associative array without integer indexes
$result->setFetchMode(
    \Phalcon\Db::FETCH_ASSOC
);

// Return associative array together with integer indexes
$result->setFetchMode(
    \Phalcon\Db::FETCH_BOTH
);

// Return an object
$result->setFetchMode(
    \Phalcon\Db::FETCH_OBJ
);

```



public  **getInternalResult** ()

Gets the internal PDO result object




<hr>

# Interface **Phalcon\Db\ResultInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/db/resultinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **execute** ()

...


abstract public  **fetch** ()

...


abstract public  **fetchArray** ()

...


abstract public  **fetchAll** ()

...


abstract public  **numRows** ()

...


abstract public  **dataSeek** (*mixed* $number)

...


abstract public  **setFetchMode** (*mixed* $fetchMode)

...


abstract public  **getInternalResult** ()

...
