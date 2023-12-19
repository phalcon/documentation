---
layout: default
title: 'Phalcon\Mvc\Model\Resultset'
---
# Abstract class **Phalcon\Mvc\Model\Resultset**

*implements* [Phalcon\Mvc\Model\ResultsetInterface](Phalcon_Mvc_Model_Resultset.md), [Iterator](https://php.net/manual/en/class.iterator.php), [Traversable](https://php.net/manual/en/class.traversable.php), [SeekableIterator](https://php.net/manual/en/class.seekableiterator.php), [Countable](https://php.net/manual/en/class.countable.php), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php), [Serializable](https://php.net/manual/en/class.serializable.php), [JsonSerializable](https://php.net/manual/en/class.jsonserializable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/resultset.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This component allows to Phalcon\Mvc\Model returns large resultsets with the minimum memory consumption
Resultsets can be traversed using a standard foreach or a while statement. If a resultset is serialized
it will dump all the rows into a big array. Then unserialize will retrieve the rows as they were before
serializing.

```php
<?php

// Using a standard foreach
$robots = Robots::find(
    [
        "type = 'virtual'",
        "order" => "name",
    ]
);

foreach ($robots as robot) {
    echo robot->name, "\n";
}

// Using a while
$robots = Robots::find(
    [
        "type = 'virtual'",
        "order" => "name",
    ]
);

$robots->rewind();

while ($robots->valid()) {
    $robot = $robots->current();

    echo $robot->name, "\n";

    $robots->next();
}

```


## Constants
*integer* **TYPE_RESULT_FULL**

*integer* **TYPE_RESULT_PARTIAL**

*integer* **HYDRATE_RECORDS**

*integer* **HYDRATE_OBJECTS**

*integer* **HYDRATE_ARRAYS**

## Methods
public  **__construct** ([Phalcon\Db\ResultInterface](Phalcon_Db.md) | *false* $result, [[Phalcon\Cache\BackendInterface](Phalcon_Cache.md) $cache])

Phalcon\Mvc\Model\Resultset constructor



public  **next** ()

Moves cursor to next row in the resultset



public  **valid** ()

Check whether internal resource has rows to fetch



public  **key** ()

Gets pointer number of active row in the resultset



final public  **rewind** ()

Rewinds resultset to its beginning



final public  **seek** (*mixed* $position)

Changes internal pointer to a specific position in the resultset
Set new position if required and set this->_row



final public  **count** ()

Counts how many rows are in the resultset



public  **offsetExists** (*mixed* $index)

Checks whether offset exists in the resultset



public  **offsetGet** (*mixed* $index)

Gets row in a specific position of the resultset



public  **offsetSet** (*int* $index, [Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $value)

Resultsets cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface



public  **offsetUnset** (*mixed* $offset)

Resultsets cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface



public  **getType** ()

Returns the internal type of data retrieval that the resultset is using



public  **getFirst** ()

Get first row in the resultset



public  **getLast** ()

Get last row in the resultset



public  **setIsFresh** (*mixed* $isFresh)

Set if the resultset is fresh or an old one cached



public  **isFresh** ()

Tell if the resultset if fresh or an old one cached



public  **setHydrateMode** (*mixed* $hydrateMode)

Sets the hydration mode in the resultset



public  **getHydrateMode** ()

Returns the current hydration mode



public  **getCache** ()

Returns the associated cache for the resultset



public  **getMessages** ()

Returns the error messages produced by a batch operation



public *boolean* **update** (*array* $data, [[Closure](https://php.net/manual/en/class.closure.php) $conditionCallback])

Updates every record in the resultset



public  **delete** ([[Closure](https://php.net/manual/en/class.closure.php) $conditionCallback])

Deletes every record in the resultset



public [Phalcon\Mvc\Model](Phalcon_Mvc_Model.md) **filter** (*callback* $filter)

Filters a resultset returning only those the developer requires

```php
<?php

$filtered = $robots->filter(
    function ($robot) {
        if ($robot->id < 3) {
            return $robot;
        }
    }
);

```



public *array* **jsonSerialize** ()

Returns serialised model objects as array for json_encode.
Calls jsonSerialize on each object if present

```php
<?php

$robots = Robots::find();
echo json_encode($robots);

```



abstract public  **toArray** () inherited from [Phalcon\Mvc\Model\ResultsetInterface](Phalcon_Mvc_Model_Resultset.md)

...


abstract public  **current** () inherited from [Iterator](https://php.net/manual/en/class.iterator.php)

...


abstract public  **serialize** () inherited from [Serializable](https://php.net/manual/en/class.serializable.php)

...


abstract public  **unserialize** (*mixed* $serialized) inherited from [Serializable](https://php.net/manual/en/class.serializable.php)

...



<hr>

# Class **Phalcon\Mvc\Model\Resultset\Complex**

*extends* abstract class [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

*implements* [JsonSerializable](https://php.net/manual/en/class.jsonserializable.php), [Serializable](https://php.net/manual/en/class.serializable.php), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php), [Countable](https://php.net/manual/en/class.countable.php), [SeekableIterator](https://php.net/manual/en/class.seekableiterator.php), [Traversable](https://php.net/manual/en/class.traversable.php), [Iterator](https://php.net/manual/en/class.iterator.php), [Phalcon\Mvc\Model\ResultsetInterface](Phalcon_Mvc_Model_Resultset.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/resultset/complex.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Complex resultsets may include complete objects and scalar values.
This class builds every complex row as it is required


## Constants
*integer* **TYPE_RESULT_FULL**

*integer* **TYPE_RESULT_PARTIAL**

*integer* **HYDRATE_RECORDS**

*integer* **HYDRATE_OBJECTS**

*integer* **HYDRATE_ARRAYS**

## Methods
public  **__construct** (*array* $columnTypes, [[Phalcon\Db\ResultInterface](Phalcon_Db.md) $result], [[Phalcon\Cache\BackendInterface](Phalcon_Cache.md) $cache])

Phalcon\Mvc\Model\Resultset\Complex constructor



final public  **current** ()

Returns current row in the resultset



public  **toArray** ()

Returns a complete resultset as an array, if the resultset has a big number of rows
it could consume more memory than currently it does.



public  **serialize** ()

Serializing a resultset will dump all related rows into a big array



public  **unserialize** (*mixed* $data)

Unserializing a resultset will allow to only works on the rows present in the saved state



public  **next** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Moves cursor to next row in the resultset



public  **valid** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Check whether internal resource has rows to fetch



public  **key** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Gets pointer number of active row in the resultset



final public  **rewind** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Rewinds resultset to its beginning



final public  **seek** (*mixed* $position) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Changes internal pointer to a specific position in the resultset
Set new position if required and set this->_row



final public  **count** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Counts how many rows are in the resultset



public  **offsetExists** (*mixed* $index) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Checks whether offset exists in the resultset



public  **offsetGet** (*mixed* $index) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Gets row in a specific position of the resultset



public  **offsetSet** (*int* $index, [Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $value) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Resultsets cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface



public  **offsetUnset** (*mixed* $offset) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Resultsets cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface



public  **getType** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Returns the internal type of data retrieval that the resultset is using



public  **getFirst** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Get first row in the resultset



public  **getLast** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Get last row in the resultset



public  **setIsFresh** (*mixed* $isFresh) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Set if the resultset is fresh or an old one cached



public  **isFresh** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Tell if the resultset if fresh or an old one cached



public  **setHydrateMode** (*mixed* $hydrateMode) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Sets the hydration mode in the resultset



public  **getHydrateMode** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Returns the current hydration mode



public  **getCache** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Returns the associated cache for the resultset



public  **getMessages** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Returns the error messages produced by a batch operation



public *boolean* **update** (*array* $data, [[Closure](https://php.net/manual/en/class.closure.php) $conditionCallback]) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Updates every record in the resultset



public  **delete** ([[Closure](https://php.net/manual/en/class.closure.php) $conditionCallback]) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Deletes every record in the resultset



public [Phalcon\Mvc\Model](Phalcon_Mvc_Model.md) **filter** (*callback* $filter) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Filters a resultset returning only those the developer requires

```php
<?php

$filtered = $robots->filter(
    function ($robot) {
        if ($robot->id < 3) {
            return $robot;
        }
    }
);

```



public *array* **jsonSerialize** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Returns serialised model objects as array for json_encode.
Calls jsonSerialize on each object if present

```php
<?php

$robots = Robots::find();
echo json_encode($robots);

```




<hr>

# Class **Phalcon\Mvc\Model\Resultset\Simple**

*extends* abstract class [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

*implements* [JsonSerializable](https://php.net/manual/en/class.jsonserializable.php), [Serializable](https://php.net/manual/en/class.serializable.php), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php), [Countable](https://php.net/manual/en/class.countable.php), [SeekableIterator](https://php.net/manual/en/class.seekableiterator.php), [Traversable](https://php.net/manual/en/class.traversable.php), [Iterator](https://php.net/manual/en/class.iterator.php), [Phalcon\Mvc\Model\ResultsetInterface](Phalcon_Mvc_Model_Resultset.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/resultset/simple.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Simple resultsets only contains a complete objects
This class builds every complete object as it is required


## Constants
*integer* **TYPE_RESULT_FULL**

*integer* **TYPE_RESULT_PARTIAL**

*integer* **HYDRATE_RECORDS**

*integer* **HYDRATE_OBJECTS**

*integer* **HYDRATE_ARRAYS**

## Methods
public  **__construct** (*array* $columnMap, [Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) | [Phalcon\Mvc\Model\Row](Phalcon_Mvc_Model_Row.md) $model, [Phalcon\Db\Result\Pdo](Phalcon_Db.md) | *null* $result, [[Phalcon\Cache\BackendInterface](Phalcon_Cache.md) $cache], [*boolean* $keepSnapshots])

Phalcon\Mvc\Model\Resultset\Simple constructor



final public  **current** ()

Returns current row in the resultset



public  **toArray** ([*mixed* $renameColumns])

Returns a complete resultset as an array, if the resultset has a big number of rows
it could consume more memory than currently it does. Export the resultset to an array
couldn't be faster with a large number of records



public  **serialize** ()

Serializing a resultset will dump all related rows into a big array



public  **unserialize** (*mixed* $data)

Unserializing a resultset will allow to only works on the rows present in the saved state



public  **next** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Moves cursor to next row in the resultset



public  **valid** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Check whether internal resource has rows to fetch



public  **key** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Gets pointer number of active row in the resultset



final public  **rewind** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Rewinds resultset to its beginning



final public  **seek** (*mixed* $position) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Changes the internal pointer to a specific position in the resultset. 
Set the new position if required, and then set this->_row



final public  **count** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Counts how many rows are in the resultset



public  **offsetExists** (*mixed* $index) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Checks whether offset exists in the resultset



public  **offsetGet** (*mixed* $index) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Gets row in a specific position of the resultset



public  **offsetSet** (*int* $index, [Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $value) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Resultsets cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface



public  **offsetUnset** (*mixed* $offset) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Resultsets cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface



public  **getType** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Returns the internal type of data retrieval that the resultset is using



public  **getFirst** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Get first row in the resultset



public  **getLast** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Get last row in the resultset



public  **setIsFresh** (*mixed* $isFresh) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Set if the resultset is fresh or an old one cached



public  **isFresh** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Tell if the resultset if fresh or an old one cached



public  **setHydrateMode** (*mixed* $hydrateMode) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Sets the hydration mode in the resultset



public  **getHydrateMode** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Returns the current hydration mode



public  **getCache** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Returns the associated cache for the resultset



public  **getMessages** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Returns the error messages produced by a batch operation



public *boolean* **update** (*array* $data, [[Closure](https://php.net/manual/en/class.closure.php) $conditionCallback]) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Updates every record in the resultset



public  **delete** ([[Closure](https://php.net/manual/en/class.closure.php) $conditionCallback]) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Deletes every record in the resultset



public [Phalcon\Mvc\Model](Phalcon_Mvc_Model.md) **filter** (*callback* $filter) inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Filters a resultset returning only those the developer requires

```php
<?php

$filtered = $robots->filter(
    function ($robot) {
        if ($robot->id < 3) {
            return $robot;
        }
    }
);

```



public *array* **jsonSerialize** () inherited from [Phalcon\Mvc\Model\Resultset](Phalcon_Mvc_Model_Resultset.md)

Returns serialised model objects as array for json_encode.
Calls jsonSerialize on each object if present

```php
<?php

$robots = Robots::find();
echo json_encode($robots);

```




<hr>

# Interface **Phalcon\Mvc\Model\ResultsetInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/resultsetinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getType** ()

...


abstract public  **getFirst** ()

...


abstract public  **getLast** ()

...


abstract public  **setIsFresh** (*mixed* $isFresh)

...


abstract public  **isFresh** ()

...


abstract public  **getCache** ()

...


abstract public  **toArray** ()

...
