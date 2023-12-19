---
layout: default
title: 'Phalcon\Mvc\Collection'
---
# Abstract class **Phalcon\Mvc\Collection**

*implements* [Phalcon\Mvc\EntityInterface](Phalcon_Mvc_EntityInterface.md), [Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Serializable](https://php.net/manual/en/class.serializable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/collection.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This component implements a high level abstraction for NoSQL databases which
works with documents


## Constants
*integer* **OP_NONE**

*integer* **OP_CREATE**

*integer* **OP_UPDATE**

*integer* **OP_DELETE**

*integer* **DIRTY_STATE_PERSISTENT**

*integer* **DIRTY_STATE_TRANSIENT**

*integer* **DIRTY_STATE_DETACHED**

## Methods
final public  **__construct** ([[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector], [[Phalcon\Mvc\Collection\ManagerInterface](Phalcon_Mvc_Collection.md) $modelsManager])

Phalcon\Mvc\Collection constructor



public  **setId** (*mixed* $id)

Sets a value for the _id property, creates a MongoId object if needed



public *MongoId* **getId** ()

Returns the value of the _id property



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injection container



public  **getDI** ()

Returns the dependency injection container



protected  **setEventsManager** ([Phalcon\Mvc\Collection\ManagerInterface](Phalcon_Mvc_Collection.md) $eventsManager)

Sets a custom events manager



protected  **getEventsManager** ()

Returns the custom events manager



public  **getCollectionManager** ()

Returns the models manager related to the entity instance



public  **getReservedAttributes** ()

Returns an array with reserved properties that cannot be part of the insert/update



protected  **useImplicitObjectIds** (*mixed* $useImplicitObjectIds)

Sets if a model must use implicit objects ids



protected  **setSource** (*mixed* $source)

Sets collection name which model should be mapped



public  **getSource** ()

Returns collection name mapped in the model



public  **setConnectionService** (*mixed* $connectionService)

Sets the DependencyInjection connection service name



public  **getConnectionService** ()

Returns DependencyInjection connection service



public *MongoDb* **getConnection** ()

Retrieves a database connection



public *mixed* **readAttribute** (*string* $attribute)

Reads an attribute value by its name

```php
<?php

echo $robot->readAttribute("name");

```



public  **writeAttribute** (*string* $attribute, *mixed* $value)

Writes an attribute value by its name

```php
<?php

$robot->writeAttribute("name", "Rosey");

```



public static  **cloneResult** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $collection, *array* $document)

Returns a cloned collection



protected static *array* **_getResultset** (*array* $params, [Phalcon\Mvc\Collection](Phalcon_Mvc_Micro.md) $collection, *MongoDb* $connection, *boolean* $unique)

Returns a collection resultset



protected static *int* **_getGroupResultset** (*array* $params, [Phalcon\Mvc\Collection](Phalcon_Mvc_Micro.md) $collection, *MongoDb* $connection)

Perform a count over a resultset



final protected *boolean* **_preSave** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector, *boolean* $disableEvents, *boolean* $exists)

Executes internal hooks before save a document



final protected  **_postSave** (*mixed* $disableEvents, *mixed* $success, *mixed* $exists)

Executes internal events after save a document



protected  **validate** (*mixed* $validator)

Executes validators on every validation call

```php
<?php

use Phalcon\Mvc\Model\Validator\ExclusionIn as ExclusionIn;

class Subscriptors extends \Phalcon\Mvc\Collection
{
    public function validation()
    {
        // Old, deprecated syntax, use new one below
        $this->validate(
            new ExclusionIn(
                [
                    "field"  => "status",
                    "domain" => ["A", "I"],
                ]
            )
        );

        if ($this->validationHasFailed() == true) {
            return false;
        }
    }
}

```

```php
<?php

use Phalcon\Validation\Validator\ExclusionIn as ExclusionIn;
use Phalcon\Validation;

class Subscriptors extends \Phalcon\Mvc\Collection
{
    public function validation()
    {
        $validator = new Validation();
        $validator->add("status",
            new ExclusionIn(
                [
                    "domain" => ["A", "I"]
                ]
            )
        );

        return $this->validate($validator);
    }
}

```



public  **validationHasFailed** ()

Check whether validation process has generated any messages

```php
<?php

use Phalcon\Mvc\Model\Validator\ExclusionIn as ExclusionIn;

class Subscriptors extends \Phalcon\Mvc\Collection
{
    public function validation()
    {
        $this->validate(
            new ExclusionIn(
                [
                    "field"  => "status",
                    "domain" => ["A", "I"],
                ]
            )
        );

        if ($this->validationHasFailed() == true) {
            return false;
        }
    }
}

```



public  **fireEvent** (*mixed* $eventName)

Fires an internal event



public  **fireEventCancel** (*mixed* $eventName)

Fires an internal event that cancels the operation



protected  **_cancelOperation** (*mixed* $disableEvents)

Cancel the current operation



protected *boolean* **_exists** (*MongoCollection* $collection)

Checks if the document exists in the collection



public  **getMessages** ()

Returns all the validation messages

```php
<?php

$robot = new Robots();

$robot->type = "mechanical";
$robot->name = "Astro Boy";
$robot->year = 1952;

if ($robot->save() === false) {
    echo "Umh, We can't store robots right now ";

    $messages = $robot->getMessages();

    foreach ($messages as $message) {
        echo $message;
    }
} else {
    echo "Great, a new robot was saved successfully!";
}

```



public  **appendMessage** ([Phalcon\Mvc\Model\MessageInterface](Phalcon_Mvc_Model_Message.md) $message)

Appends a customized message on the validation process

```php
<?php

use \Phalcon\Mvc\Model\Message as Message;

class Robots extends \Phalcon\Mvc\Model
{
    public function beforeSave()
    {
        if ($this->name === "Peter") {
            $message = new Message(
                "Sorry, but a robot cannot be named Peter"
            );

            $this->appendMessage(message);
        }
    }
}

```



protected  **prepareCU** ()

Shared Code for CU Operations
Prepares Collection



public  **save** ()

Creates/Updates a collection based on the values in the attributes



public  **create** ()

Creates a collection based on the values in the attributes



public  **createIfNotExist** (*array* $criteria)

Creates a document based on the values in the attributes, if not found by criteria
Preferred way to avoid duplication is to create index on attribute

```php
<?php

$robot = new Robot();

$robot->name = "MyRobot";
$robot->type = "Droid";

// Create only if robot with same name and type does not exist
$robot->createIfNotExist(
    [
        "name",
        "type",
    ]
);

```



public  **update** ()

Creates/Updates a collection based on the values in the attributes



public static  **findById** (*mixed* $id)

Find a document by its id (_id)

```php
<?php

// Find user by using \MongoId object
$user = Users::findById(
    new \MongoId("545eb081631d16153a293a66")
);

// Find user by using id as sting
$user = Users::findById("45cbc4a0e4123f6920000002");

// Validate input
if ($user = Users::findById($_POST["id"])) {
    // ...
}

```



public static  **findFirst** ([*array* $parameters])

Allows to query the first record that match the specified conditions

```php
<?php

// What's the first robot in the robots table?
$robot = Robots::findFirst();

echo "The robot name is ", $robot->name, "\n";

// What's the first mechanical robot in robots table?
$robot = Robots::findFirst(
    [
        [
            "type" => "mechanical",
        ]
    ]
);

echo "The first mechanical robot name is ", $robot->name, "\n";

// Get first virtual robot ordered by name
$robot = Robots::findFirst(
    [
        [
            "type" => "mechanical",
        ],
        "order" => [
            "name" => 1,
        ],
    ]
);

echo "The first virtual robot name is ", $robot->name, "\n";

// Get first robot by id (_id)
$robot = Robots::findFirst(
    [
        [
            "_id" => new \MongoId("45cbc4a0e4123f6920000002"),
        ]
    ]
);

echo "The robot id is ", $robot->_id, "\n";

```



public static  **find** ([*array* $parameters])

Allows to query a set of records that match the specified conditions

```php
<?php

// How many robots are there?
$robots = Robots::find();

echo "There are ", count($robots), "\n";

// How many mechanical robots are there?
$robots = Robots::find(
    [
        [
            "type" => "mechanical",
        ]
    ]
);

echo "There are ", count(robots), "\n";

// Get and print virtual robots ordered by name
$robots = Robots::findFirst(
    [
        [
            "type" => "virtual"
        ],
        "order" => [
            "name" => 1,
        ]
    ]
);

foreach ($robots as $robot) {
   echo $robot->name, "\n";
}

// Get first 100 virtual robots ordered by name
$robots = Robots::find(
    [
        [
            "type" => "virtual",
        ],
        "order" => [
            "name" => 1,
        ],
        "limit" => 100,
    ]
);

foreach ($robots as $robot) {
   echo $robot->name, "\n";
}

```



public static  **count** ([*array* $parameters])

Perform a count over a collection

```php
<?php

echo "There are ", Robots::count(), " robots";

```



public static  **aggregate** ([*array* $parameters])

Perform an aggregation using the Mongo aggregation framework



public static  **summatory** (*mixed* $field, [*mixed* $conditions], [*mixed* $finalize])

Allows to perform a summatory group for a column in the collection



public  **delete** ()

Deletes a model instance. Returning true on success or false otherwise.

```php
<?php

$robot = Robots::findFirst();

$robot->delete();

$robots = Robots::find();

foreach ($robots as $robot) {
    $robot->delete();
}

```



public  **setDirtyState** (*mixed* $dirtyState)

Sets the dirty state of the object using one of the DIRTY_STATE_* constants



public  **getDirtyState** ()

Returns one of the DIRTY_STATE_* constants telling if the document exists in the collection or not



protected  **addBehavior** ([Phalcon\Mvc\Collection\BehaviorInterface](Phalcon_Mvc_Collection.md) $behavior)

Sets up a behavior in a collection



public  **skipOperation** (*mixed* $skip)

Skips the current operation forcing a success state



public  **toArray** ()

Returns the instance as an array representation

```php
<?php

print_r(
    $robot->toArray()
);

```



public  **serialize** ()

Serializes the object ignoring connections or protected properties



public  **unserialize** (*mixed* $data)

Unserializes the object from a serialized string




<hr>

# Abstract class **Phalcon\Mvc\Collection\Behavior**

*implements* [Phalcon\Mvc\Collection\BehaviorInterface](Phalcon_Mvc_Collection.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/collection/behavior.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This is an optional base class for ORM behaviors


## Methods
public  **__construct** ([*array* $options])





protected  **mustTakeAction** (*mixed* $eventName)

Checks whether the behavior must take action on certain event



protected *array* **getOptions** ([*string* $eventName])

Returns the behavior options related to an event



public  **notify** (*mixed* $type, [Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

This method receives the notifications from the EventsManager



public  **missingMethod** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, *mixed* $method, [*mixed* $arguments])

Acts as fallbacks when a missing method is called on the collection




<hr>

# Class **Phalcon\Mvc\Collection\Behavior\SoftDelete**

*extends* abstract class [Phalcon\Mvc\Collection\Behavior](Phalcon_Mvc_Collection.md)

*implements* [Phalcon\Mvc\Collection\BehaviorInterface](Phalcon_Mvc_Collection.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/collection/behavior/softdelete.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Instead of permanently delete a record it marks the record as
deleted changing the value of a flag column


## Methods
public  **notify** (*mixed* $type, [Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

Listens for notifications from the models manager



public  **__construct** ([*array* $options]) inherited from [Phalcon\Mvc\Collection\Behavior](Phalcon_Mvc_Collection.md)

Phalcon\Mvc\Collection\Behavior



protected  **mustTakeAction** (*mixed* $eventName) inherited from [Phalcon\Mvc\Collection\Behavior](Phalcon_Mvc_Collection.md)

Checks whether the behavior must take action on certain event



protected *array* **getOptions** ([*string* $eventName]) inherited from [Phalcon\Mvc\Collection\Behavior](Phalcon_Mvc_Collection.md)

Returns the behavior options related to an event



public  **missingMethod** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, *mixed* $method, [*mixed* $arguments]) inherited from [Phalcon\Mvc\Collection\Behavior](Phalcon_Mvc_Collection.md)

Acts as fallbacks when a missing method is called on the collection




<hr>

# Class **Phalcon\Mvc\Collection\Behavior\Timestampable**

*extends* abstract class [Phalcon\Mvc\Collection\Behavior](Phalcon_Mvc_Collection.md)

*implements* [Phalcon\Mvc\Collection\BehaviorInterface](Phalcon_Mvc_Collection.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/collection/behavior/timestampable.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to automatically update a model’s attribute saving the
datetime when a record is created or updated


## Methods
public  **notify** (*mixed* $type, [Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

Listens for notifications from the models manager



public  **__construct** ([*array* $options]) inherited from [Phalcon\Mvc\Collection\Behavior](Phalcon_Mvc_Collection.md)

Phalcon\Mvc\Collection\Behavior



protected  **mustTakeAction** (*mixed* $eventName) inherited from [Phalcon\Mvc\Collection\Behavior](Phalcon_Mvc_Collection.md)

Checks whether the behavior must take action on certain event



protected *array* **getOptions** ([*string* $eventName]) inherited from [Phalcon\Mvc\Collection\Behavior](Phalcon_Mvc_Collection.md)

Returns the behavior options related to an event



public  **missingMethod** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, *mixed* $method, [*mixed* $arguments]) inherited from [Phalcon\Mvc\Collection\Behavior](Phalcon_Mvc_Collection.md)

Acts as fallbacks when a missing method is called on the collection




<hr>

# Interface **Phalcon\Mvc\Collection\BehaviorInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/collection/behaviorinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **notify** (*mixed* $type, [Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $collection)

...


abstract public  **missingMethod** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $collection, *mixed* $method, [*mixed* $arguments])

...



<hr>

# Class **Phalcon\Mvc\Collection\Document**

*implements* [Phalcon\Mvc\EntityInterface](Phalcon_Mvc_EntityInterface.md), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/collection/document.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This component allows Phalcon\Mvc\Collection to return rows without an associated entity.
This objects implements the ArrayAccess interface to allow access the object as object->x or array[x].


## Methods
public *boolean* **offsetExists** (*int* $index)

Checks whether an offset exists in the document



public  **offsetGet** (*mixed* $index)

Returns the value of a field using the ArrayAccess interfase



public  **offsetSet** (*mixed* $index, *mixed* $value)

Change a value using the ArrayAccess interface



public  **offsetUnset** (*string* $offset)

Rows cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface



public *mixed* **readAttribute** (*string* $attribute)

Reads an attribute value by its name

```php
<?php

 echo $robot->readAttribute("name");

```



public  **writeAttribute** (*string* $attribute, *mixed* $value)

Writes an attribute value by its name

```php
<?php

 $robot->writeAttribute("name", "Rosey");

```



public *array* **toArray** ()

Returns the instance as an array representation




<hr>

# Class **Phalcon\Mvc\Collection\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/collection/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Mvc\Collection\Manager**

*implements* [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/collection/manager.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This components controls the initialization of models, keeping record of relations
between the different models of the application.

A CollectionManager is injected to a model via a Dependency Injector Container such as Phalcon\Di.

```php
<?php

$di = new \Phalcon\Di();

$di->set(
    "collectionManager",
    function () {
        return new \Phalcon\Mvc\Collection\Manager();
    }
);

$robot = new Robots($di);

```


## Methods
public  **getServiceName** ()

...


public  **setServiceName** (*mixed* $serviceName)

...


public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the DependencyInjector container



public  **getDI** ()

Returns the DependencyInjector container



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager)

Sets the event manager



public  **getEventsManager** ()

Returns the internal event manager



public  **setCustomEventsManager** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, [Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager)

Sets a custom events manager for a specific model



public  **getCustomEventsManager** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

Returns a custom events manager related to a model



public  **initialize** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

Initializes a model in the models manager



public  **isInitialized** (*mixed* $modelName)

Check whether a model is already initialized



public  **getLastInitialized** ()

Get the latest initialized model



public  **setConnectionService** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, *mixed* $connectionService)

Sets a connection service for a specific model



public  **getConnectionService** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

Gets a connection service for a specific model



public  **useImplicitObjectIds** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, *mixed* $useImplicitObjectIds)

Sets whether a model must use implicit objects ids



public  **isUsingImplicitObjectIds** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

Checks if a model is using implicit object ids



public *Mongo* **getConnection** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

Returns the connection related to a model



public  **notifyEvent** (*mixed* $eventName, [Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

Receives events generated in the models and dispatches them to an events-manager if available
Notify the behaviors that are listening in the model



public  **missingMethod** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, *mixed* $eventName, *mixed* $data)

Dispatch an event to the listeners and behaviors
This method expects that the endpoint listeners/behaviors returns true
meaning that at least one was implemented



public  **addBehavior** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, [Phalcon\Mvc\Collection\BehaviorInterface](Phalcon_Mvc_Collection.md) $behavior)

Binds a behavior to a model




<hr>

# Interface **Phalcon\Mvc\Collection\ManagerInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/collection/managerinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setCustomEventsManager** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, [Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager)

...


abstract public  **getCustomEventsManager** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

...


abstract public  **initialize** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

...


abstract public  **isInitialized** (*mixed* $modelName)

...


abstract public  **getLastInitialized** ()

...


abstract public  **setConnectionService** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, *mixed* $connectionService)

...


abstract public  **useImplicitObjectIds** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, *mixed* $useImplicitObjectIds)

...


abstract public  **isUsingImplicitObjectIds** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

...


abstract public  **getConnection** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

...


abstract public  **notifyEvent** (*mixed* $eventName, [Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model)

...


abstract public  **addBehavior** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $model, [Phalcon\Mvc\Collection\BehaviorInterface](Phalcon_Mvc_Collection.md) $behavior)

...



<hr>

# Interface **Phalcon\Mvc\CollectionInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/collectioninterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setId** (*mixed* $id)

...


abstract public  **getId** ()

...


abstract public  **getReservedAttributes** ()

...


abstract public  **getSource** ()

...


abstract public  **setConnectionService** (*mixed* $connectionService)

...


abstract public  **getConnection** ()

...


abstract public  **setDirtyState** (*mixed* $dirtyState)

...


abstract public  **getDirtyState** ()

...


abstract public static  **cloneResult** ([Phalcon\Mvc\CollectionInterface](Phalcon_Mvc_Micro.md) $collection, *array* $document)

...


abstract public  **fireEvent** (*mixed* $eventName)

...


abstract public  **fireEventCancel** (*mixed* $eventName)

...


abstract public  **validationHasFailed** ()

...


abstract public  **getMessages** ()

...


abstract public  **appendMessage** ([Phalcon\Mvc\Model\MessageInterface](Phalcon_Mvc_Model_Message.md) $message)

...


abstract public  **save** ()

...


abstract public static  **findById** (*mixed* $id)

...


abstract public static  **findFirst** ([*array* $parameters])

...


abstract public static  **find** ([*array* $parameters])

...


abstract public static  **count** ([*array* $parameters])

...


abstract public  **delete** ()

...
