---
layout: default
title: 'Phalcon\Mvc\Model\Query'
---
# Class **Phalcon\Mvc\Model\Query**

*implements* [Phalcon\Mvc\Model\QueryInterface](Phalcon_Mvc_Model_Query.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/query.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class takes a PHQL intermediate representation and executes it.

```php
<?php

$phql = "SELECT c.price*0.16 AS taxes, c.* FROM Cars AS c JOIN Brands AS b
         WHERE b.name = :name: ORDER BY c.name";

$result = $manager->executeQuery(
    $phql,
    [
        "name" => "Lamborghini",
    ]
);

foreach ($result as $row) {
    echo "Name: ",  $row->cars->name, "\n";
    echo "Price: ", $row->cars->price, "\n";
    echo "Taxes: ", $row->taxes, "\n";
}

```


## Constants
*integer* **TYPE_SELECT**

*integer* **TYPE_INSERT**

*integer* **TYPE_UPDATE**

*integer* **TYPE_DELETE**

## Methods
public  **__construct** ([*string* $phql], [[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector], [*mixed* $options])

Phalcon\Mvc\Model\Query constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injection container



public  **getDI** ()

Returns the dependency injection container



public  **setUniqueRow** (*mixed* $uniqueRow)

Tells to the query if only the first row in the resultset must be returned



public  **getUniqueRow** ()

Check if the query is programmed to get only the first row in the resultset



final protected  **_getQualified** (*array* $expr)

Replaces the model's name to its source name in a qualified-name expression



final protected  **_getCallArgument** (*array* $argument)

Resolves an expression in a single call argument



final protected  **_getCaseExpression** (*array* $expr)

Resolves an expression in a single call argument



final protected  **_getFunctionCall** (*array* $expr)

Resolves an expression in a single call argument



final protected *string* **_getExpression** (*array* $expr, [*boolean* $quoting])

Resolves an expression from its intermediate code into a string



final protected  **_getSelectColumn** (*array* $column)

Resolves a column from its intermediate representation into an array used to determine
if the resultset produced is simple or complex



final protected *string* **_getTable** ([Phalcon\Mvc\Model\ManagerInterface](Phalcon_Mvc_Model_Manager.md) $manager, *array* $qualifiedName)

Resolves a table in a SELECT statement checking if the model exists



final protected  **_getJoin** ([Phalcon\Mvc\Model\ManagerInterface](Phalcon_Mvc_Model_Manager.md) $manager, *mixed* $join)

Resolves a JOIN clause checking if the associated models exist



final protected *string* **_getJoinType** (*array* $join)

Resolves a JOIN type



final protected *array* **_getSingleJoin** (*string* $joinType, *string* $joinSource, *string* $modelAlias, *string* $joinAlias, [Phalcon\Mvc\Model\RelationInterface](Phalcon_Mvc_Model_Relation.md) $relation)

Resolves joins involving has-one/belongs-to/has-many relations



final protected *array* **_getMultiJoin** (*string* $joinType, *string* $joinSource, *string* $modelAlias, *string* $joinAlias, [Phalcon\Mvc\Model\RelationInterface](Phalcon_Mvc_Model_Relation.md) $relation)

Resolves joins involving many-to-many relations



final protected *array* **_getJoins** (*array* $select)

Processes the JOINs in the query returning an internal representation for the database dialect



final protected *array* **_getOrderClause** (*array* | *string* $order)

Returns a processed order clause for a SELECT statement



final protected  **_getGroupClause** (*array* $group)

Returns a processed group clause for a SELECT statement



final protected  **_getLimitClause** (*array* $limitClause)

Returns a processed limit clause for a SELECT statement



final protected  **_prepareSelect** ([*mixed* $ast], [*mixed* $merge])

Analyzes a SELECT intermediate code and produces an array to be executed later



final protected  **_prepareInsert** ()

Analyzes an INSERT intermediate code and produces an array to be executed later



final protected  **_prepareUpdate** ()

Analyzes an UPDATE intermediate code and produces an array to be executed later



final protected  **_prepareDelete** ()

Analyzes a DELETE intermediate code and produces an array to be executed later



public  **parse** ()

Parses the intermediate code produced by Phalcon\Mvc\Model\Query\Lang generating another
intermediate representation that could be executed by Phalcon\Mvc\Model\Query



public  **getCache** ()

Returns the current cache backend instance



final protected  **_executeSelect** (*mixed* $intermediate, *mixed* $bindParams, *mixed* $bindTypes, [*mixed* $simulate])

Executes the SELECT intermediate representation producing a Phalcon\Mvc\Model\Resultset



final protected [Phalcon\Mvc\Model\Query\StatusInterface](Phalcon_Mvc_Model_Query.md) **_executeInsert** (*array* $intermediate, *array* $bindParams, *array* $bindTypes)

Executes the INSERT intermediate representation producing a Phalcon\Mvc\Model\Query\Status



final protected [Phalcon\Mvc\Model\Query\StatusInterface](Phalcon_Mvc_Model_Query.md) **_executeUpdate** (*array* $intermediate, *array* $bindParams, *array* $bindTypes)

Executes the UPDATE intermediate representation producing a Phalcon\Mvc\Model\Query\Status



final protected [Phalcon\Mvc\Model\Query\StatusInterface](Phalcon_Mvc_Model_Query.md) **_executeDelete** (*array* $intermediate, *array* $bindParams, *array* $bindTypes)

Executes the DELETE intermediate representation producing a Phalcon\Mvc\Model\Query\Status



final protected [Phalcon\Mvc\Model\ResultsetInterface](Phalcon_Mvc_Model_Resultset.md) **_getRelatedRecords** ([Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $model, *array* $intermediate, *array* $bindParams, *array* $bindTypes)

Query the records on which the UPDATE/DELETE operation well be done



public *mixed* **execute** ([*array* $bindParams], [*array* $bindTypes])

Executes a parsed PHQL statement



public [Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) **getSingleResult** ([*array* $bindParams], [*array* $bindTypes])

Executes the query returning the first result



public  **setType** (*mixed* $type)

Sets the type of PHQL statement to be executed



public  **getType** ()

Gets the type of PHQL statement executed



public  **setBindParams** (*array* $bindParams, [*mixed* $merge])

Set default bind parameters



public *array* **getBindParams** ()

Returns default bind params



public  **setBindTypes** (*array* $bindTypes, [*mixed* $merge])

Set default bind parameters



public  **setSharedLock** ([*mixed* $sharedLock])

Set SHARED LOCK clause



public *array* **getBindTypes** ()

Returns default bind types



public  **setIntermediate** (*array* $intermediate)

Allows to set the IR to be executed



public *array* **getIntermediate** ()

Returns the intermediate representation of the PHQL statement



public  **cache** (*mixed* $cacheOptions)

Sets the cache parameters of the query



public  **getCacheOptions** ()

Returns the current cache options



public  **getSql** ()

Returns the SQL to be generated by the internal PHQL (only works in SELECT statements)



public static  **clean** ()

Destroys the internal PHQL cache




<hr>

# Class **Phalcon\Mvc\Model\Query\Builder**

*implements* [Phalcon\Mvc\Model\Query\BuilderInterface](Phalcon_Mvc_Model_Query.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/query/builder.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Helps to create PHQL queries using an OO interface

```php
<?php

$params = [
    "models"     => ["Users"],
    "columns"    => ["id", "name", "status"],
    "conditions" => [
        [
            "created > :min: AND created < :max:",
            [
                "min" => "2013-01-01",
                "max" => "2014-01-01",
            ],
            [
                "min" => PDO::PARAM_STR,
                "max" => PDO::PARAM_STR,
            ],
        ],
    ],
    // or "conditions" => "created > '2013-01-01' AND created < '2014-01-01'",
    "group"      => ["id", "name"],
    "having"     => "name = 'Kamil'",
    "order"      => ["name", "id"],
    "limit"      => 20,
    "offset"     => 20,
    // or "limit" => [20, 20],
];

$queryBuilder = new \Phalcon\Mvc\Model\Query\Builder($params);

```


## Constants
*string* **OPERATOR_OR**

*string* **OPERATOR_AND**

## Methods
public  **__construct** ([*mixed* $params], [[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector])

Phalcon\Mvc\Model\Query\Builder constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the DependencyInjector container



public  **getDI** ()

Returns the DependencyInjector container



public  **distinct** (*mixed* $distinct)

Sets SELECT DISTINCT / SELECT ALL flag

```php
<?php

$builder->distinct("status");
$builder->distinct(null);

```



public  **getDistinct** ()

Returns SELECT DISTINCT / SELECT ALL flag



public  **columns** (*mixed* $columns)

Sets the columns to be queried

```php
<?php

$builder->columns("id, name");

$builder->columns(
    [
        "id",
        "name",
    ]
);

$builder->columns(
    [
        "name",
        "number" => "COUNT(*)",
    ]
);

```



public *string* | *array* **getColumns** ()

Return the columns to be queried



public  **from** (*mixed* $models)

Sets the models who makes part of the query

```php
<?php

$builder->from("Robots");

$builder->from(
    [
        "Robots",
        "RobotsParts",
    ]
);

$builder->from(
    [
        "r"  => "Robots",
        "rp" => "RobotsParts",
    ]
);

```



public  **addFrom** (*mixed* $model, [*mixed* $alias], [*mixed* $with])

Add a model to take part of the query

```php
<?php

// Load data from models Robots
$builder->addFrom("Robots");

// Load data from model 'Robots' using 'r' as alias in PHQL
$builder->addFrom("Robots", "r");

// Load data from model 'Robots' using 'r' as alias in PHQL
// and eager load model 'RobotsParts'
$builder->addFrom("Robots", "r", "RobotsParts");

// Load data from model 'Robots' using 'r' as alias in PHQL
// and eager load models 'RobotsParts' and 'Parts'
$builder->addFrom(
    "Robots",
    "r",
    [
        "RobotsParts",
        "Parts",
    ]
);

```



public *string* | *array* **getFrom** ()

Return the models who makes part of the query



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **join** (*string* $model, [*string* $conditions], [*string* $alias], [*string* $type])

Adds an :type: join (by default type - INNER) to the query

```php
<?php

// Inner Join model 'Robots' with automatic conditions and alias
$builder->join("Robots");

// Inner Join model 'Robots' specifying conditions
$builder->join("Robots", "Robots.id = RobotsParts.robots_id");

// Inner Join model 'Robots' specifying conditions and alias
$builder->join("Robots", "r.id = RobotsParts.robots_id", "r");

// Left Join model 'Robots' specifying conditions, alias and type of join
$builder->join("Robots", "r.id = RobotsParts.robots_id", "r", "LEFT");

```



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **innerJoin** (*string* $model, [*string* $conditions], [*string* $alias])

Adds an INNER join to the query

```php
<?php

// Inner Join model 'Robots' with automatic conditions and alias
$builder->innerJoin("Robots");

// Inner Join model 'Robots' specifying conditions
$builder->innerJoin("Robots", "Robots.id = RobotsParts.robots_id");

// Inner Join model 'Robots' specifying conditions and alias
$builder->innerJoin("Robots", "r.id = RobotsParts.robots_id", "r");

```



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **leftJoin** (*string* $model, [*string* $conditions], [*string* $alias])

Adds a LEFT join to the query

```php
<?php

$builder->leftJoin("Robots", "r.id = RobotsParts.robots_id", "r");

```



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **rightJoin** (*string* $model, [*string* $conditions], [*string* $alias])

Adds a RIGHT join to the query

```php
<?php

$builder->rightJoin("Robots", "r.id = RobotsParts.robots_id", "r");

```



public *array* **getJoins** ()

Return join parts of the query



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **where** (*mixed* $conditions, [*array* $bindParams], [*array* $bindTypes])

Sets the query WHERE conditions

```php
<?php

$builder->where(100);

$builder->where("name = 'Peter'");

$builder->where(
    "name = :name: AND id > :id:",
    [
        "name" => "Peter",
        "id"   => 100,
    ]
);

```



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **andWhere** (*string* $conditions, [*array* $bindParams], [*array* $bindTypes])

Appends a condition to the current WHERE conditions using a AND operator

```php
<?php

$builder->andWhere("name = 'Peter'");

$builder->andWhere(
    "name = :name: AND id > :id:",
    [
        "name" => "Peter",
        "id"   => 100,
    ]
);

```



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **orWhere** (*string* $conditions, [*array* $bindParams], [*array* $bindTypes])

Appends a condition to the current conditions using an OR operator

```php
<?php

$builder->orWhere("name = 'Peter'");

$builder->orWhere(
    "name = :name: AND id > :id:",
    [
        "name" => "Peter",
        "id"   => 100,
    ]
);

```



public  **betweenWhere** (*mixed* $expr, *mixed* $minimum, *mixed* $maximum, [*mixed* $operator])

Appends a BETWEEN condition to the current WHERE conditions

```php
<?php

$builder->betweenWhere("price", 100.25, 200.50);

```



public  **notBetweenWhere** (*mixed* $expr, *mixed* $minimum, *mixed* $maximum, [*mixed* $operator])

Appends a NOT BETWEEN condition to the current WHERE conditions

```php
<?php

$builder->notBetweenWhere("price", 100.25, 200.50);

```



public  **inWhere** (*mixed* $expr, *array* $values, [*mixed* $operator])

Appends an IN condition to the current WHERE conditions

```php
<?php

$builder->inWhere("id", [1, 2, 3]);

```



public  **notInWhere** (*mixed* $expr, *array* $values, [*mixed* $operator])

Appends a NOT IN condition to the current WHERE conditions

```php
<?php

$builder->notInWhere("id", [1, 2, 3]);

```



public *string* | *array* **getWhere** ()

Return the conditions for the query



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **orderBy** (*string* | *array* $orderBy)

Sets an ORDER BY condition clause

```php
<?php

$builder->orderBy("Robots.name");
$builder->orderBy(["1", "Robots.name"]);

```



public *string* | *array* **getOrderBy** ()

Returns the set ORDER BY clause



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **having** (*mixed* $conditions, [*array* $bindParams], [*array* $bindTypes])

Sets the HAVING condition clause

```php
<?php

$builder->having("SUM(Robots.price) > 0");

$builder->having(
		"SUM(Robots.price) > :sum:",
  	[
   		"sum" => 100,
     ]
);

```



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **andHaving** (*string* $conditions, [*array* $bindParams], [*array* $bindTypes])

Appends a condition to the current HAVING conditions clause using a AND operator

```php
<?php

$builder->andHaving("SUM(Robots.price) > 0");

$builder->andHaving(
		"SUM(Robots.price) > :sum:",
  	[
   		"sum" => 100,
     ]
);

```



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **orHaving** (*string* $conditions, [*array* $bindParams], [*array* $bindTypes])

Appends a condition to the current HAVING conditions clause using an OR operator

```php
<?php

$builder->orHaving("SUM(Robots.price) > 0");

$builder->orHaving(
		"SUM(Robots.price) > :sum:",
  	[
   		"sum" => 100,
     ]
);

```



public  **betweenHaving** (*mixed* $expr, *mixed* $minimum, *mixed* $maximum, [*mixed* $operator])

Appends a BETWEEN condition to the current HAVING conditions clause

```php
<?php

$builder->betweenHaving("SUM(Robots.price)", 100.25, 200.50);

```



public  **notBetweenHaving** (*mixed* $expr, *mixed* $minimum, *mixed* $maximum, [*mixed* $operator])

Appends a NOT BETWEEN condition to the current HAVING conditions clause

```php
<?php

$builder->notBetweenHaving("SUM(Robots.price)", 100.25, 200.50);

```



public  **inHaving** (*mixed* $expr, *array* $values, [*mixed* $operator])

Appends an IN condition to the current HAVING conditions clause

```php
<?php

$builder->inHaving("SUM(Robots.price)", [100, 200]);

```



public  **notInHaving** (*mixed* $expr, *array* $values, [*mixed* $operator])

Appends a NOT IN condition to the current HAVING conditions clause

```php
<?php

$builder->notInHaving("SUM(Robots.price)", [100, 200]);

```



public *string* **getHaving** ()

Return the current having clause



public  **forUpdate** (*mixed* $forUpdate)

Sets a FOR UPDATE clause

```php
<?php

$builder->forUpdate(true);

```



public  **limit** (*mixed* $limit, [*mixed* $offset])

Sets a LIMIT clause, optionally an offset clause

```php
<?php

$builder->limit(100);
$builder->limit(100, 20);
$builder->limit("100", "20");

```



public *string* | *array* **getLimit** ()

Returns the current LIMIT clause



public  **offset** (*mixed* $offset)

Sets an OFFSET clause

```php
<?php

$builder->offset(30);

```



public *string* | *array* **getOffset** ()

Returns the current OFFSET clause



public [Phalcon\Mvc\Model\Query\Builder](Phalcon_Mvc_Model_Query.md) **groupBy** (*string* | *array* $group)

Sets a GROUP BY clause

```php
<?php

$builder->groupBy(
    [
        "Robots.name",
    ]
);

```



public *string* **getGroupBy** ()

Returns the GROUP BY clause



final public *string* **getPhql** ()

Returns a PHQL statement built based on the builder parameters



public  **getQuery** ()

Returns the query built



final public  **autoescape** (*mixed* $identifier)

Automatically escapes identifiers but only if they need to be escaped.



private  **_conditionBetween** (*mixed* $clause, *mixed* $operator, *mixed* $expr, *mixed* $minimum, *mixed* $maximum)

Appends a BETWEEN condition



private  **_conditionNotBetween** (*mixed* $clause, *mixed* $operator, *mixed* $expr, *mixed* $minimum, *mixed* $maximum)

Appends a NOT BETWEEN condition



private  **_conditionIn** (*mixed* $clause, *mixed* $operator, *mixed* $expr, *array* $values)

Appends an IN condition



private  **_conditionNotIn** (*mixed* $clause, *mixed* $operator, *mixed* $expr, *array* $values)

Appends a NOT IN condition




<hr>

# Interface **Phalcon\Mvc\Model\Query\BuilderInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/query/builderinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Constants
*string* **OPERATOR_OR**

*string* **OPERATOR_AND**

## Methods
abstract public  **columns** (*mixed* $columns)

...


abstract public  **getColumns** ()

...


abstract public  **from** (*mixed* $models)

...


abstract public  **addFrom** (*mixed* $model, [*mixed* $alias])

...


abstract public  **getFrom** ()

...


abstract public  **join** (*mixed* $model, [*mixed* $conditions], [*mixed* $alias], [*mixed* $type])

...


abstract public  **innerJoin** (*mixed* $model, [*mixed* $conditions], [*mixed* $alias])

...


abstract public  **leftJoin** (*mixed* $model, [*mixed* $conditions], [*mixed* $alias])

...


abstract public  **rightJoin** (*mixed* $model, [*mixed* $conditions], [*mixed* $alias])

...


abstract public  **getJoins** ()

...


abstract public  **where** (*mixed* $conditions, [*mixed* $bindParams], [*mixed* $bindTypes])

...


abstract public  **andWhere** (*mixed* $conditions, [*mixed* $bindParams], [*mixed* $bindTypes])

...


abstract public  **orWhere** (*mixed* $conditions, [*mixed* $bindParams], [*mixed* $bindTypes])

...


abstract public  **betweenWhere** (*mixed* $expr, *mixed* $minimum, *mixed* $maximum, [*mixed* $operator])

...


abstract public  **notBetweenWhere** (*mixed* $expr, *mixed* $minimum, *mixed* $maximum, [*mixed* $operator])

...


abstract public  **inWhere** (*mixed* $expr, *array* $values, [*mixed* $operator])

...


abstract public  **notInWhere** (*mixed* $expr, *array* $values, [*mixed* $operator])

...


abstract public  **getWhere** ()

...


abstract public  **orderBy** (*mixed* $orderBy)

...


abstract public  **getOrderBy** ()

...


abstract public  **having** (*mixed* $having)

...


abstract public  **getHaving** ()

...


abstract public  **limit** (*mixed* $limit, [*mixed* $offset])

...


abstract public  **getLimit** ()

...


abstract public  **groupBy** (*mixed* $group)

...


abstract public  **getGroupBy** ()

...


abstract public  **getPhql** ()

...


abstract public  **getQuery** ()

...



<hr>

# Abstract class **Phalcon\Mvc\Model\Query\Lang**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/query/lang.zep" class="btn btn-default btn-sm">Source on GitHub</a>

PHQL is implemented as a parser (written in C) that translates syntax in
that of the target RDBMS. It allows Phalcon to offer a unified SQL language to
the developer, while internally doing all the work of translating PHQL
instructions to the most optimal SQL instructions depending on the
RDBMS type associated with a model.

To achieve the highest performance possible, we wrote a parser that uses
the same technology as SQLite. This technology provides a small in-memory
parser with a very low memory footprint that is also thread-safe.

```php
<?php

$intermediate = Phalcon\Mvc\Model\Query\Lang::parsePHQL("SELECT r.* FROM Robots r LIMIT 10");

```


## Methods
public static *string* **parsePHQL** (*string* $phql)

Parses a PHQL statement returning an intermediate representation (IR)




<hr>

# Class **Phalcon\Mvc\Model\Query\Status**

*implements* [Phalcon\Mvc\Model\Query\StatusInterface](Phalcon_Mvc_Model_Query.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/query/status.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class represents the status returned by a PHQL
statement like INSERT, UPDATE or DELETE. It offers context
information and the related messages produced by the
model which finally executes the operations when it fails

```php
<?php

$phql = "UPDATE Robots SET name = :name:, type = :type:, year = :year: WHERE id = :id:";

$status = $app->modelsManager->executeQuery(
    $phql,
    [
        "id"   => 100,
        "name" => "Astroy Boy",
        "type" => "mechanical",
        "year" => 1959,
    ]
);

// Check if the update was successful
if ($status->success() === true) {
    echo "OK";
}

```


## Methods
public  **__construct** (*mixed* $success, [[Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $model])





public  **getModel** ()

Returns the model that executed the action



public  **getMessages** ()

Returns the messages produced because of a failed operation



public  **success** ()

Allows to check if the executed operation was successful




<hr>

# Interface **Phalcon\Mvc\Model\Query\StatusInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/query/statusinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getModel** ()

...


abstract public  **getMessages** ()

...


abstract public  **success** ()

...



<hr>

# Interface **Phalcon\Mvc\Model\QueryInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/queryinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **parse** ()

...


abstract public  **cache** (*mixed* $cacheOptions)

...


abstract public  **getCacheOptions** ()

...


abstract public  **setUniqueRow** (*mixed* $uniqueRow)

...


abstract public  **getUniqueRow** ()

...


abstract public  **execute** ([*mixed* $bindParams], [*mixed* $bindTypes])

...
