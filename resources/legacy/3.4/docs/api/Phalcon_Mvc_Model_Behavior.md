---
layout: default
title: 'Phalcon\Mvc\Model\Behavior'
---
# Abstract class **Phalcon\Mvc\Model\Behavior**

*implements* [Phalcon\Mvc\Model\BehaviorInterface](Phalcon_Mvc_Model_Behavior.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/behavior.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This is an optional base class for ORM behaviors


## Methods
public  **__construct** ([*array* $options])





protected  **mustTakeAction** (*mixed* $eventName)

Checks whether the behavior must take action on certain event



protected *array* **getOptions** ([*string* $eventName])

Returns the behavior options related to an event



public  **notify** (*mixed* $type, [Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $model)

This method receives the notifications from the EventsManager



public  **missingMethod** ([Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $model, *string* $method, [*array* $arguments])

Acts as fallbacks when a missing method is called on the model




<hr>

# Class **Phalcon\Mvc\Model\Behavior\SoftDelete**

*extends* abstract class [Phalcon\Mvc\Model\Behavior](Phalcon_Mvc_Model_Behavior.md)

*implements* [Phalcon\Mvc\Model\BehaviorInterface](Phalcon_Mvc_Model_Behavior.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/behavior/softdelete.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Instead of permanently delete a record it marks the record as
deleted changing the value of a flag column


## Methods
public  **notify** (*mixed* $type, [Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $model)

Listens for notifications from the models manager



public  **__construct** ([*array* $options]) inherited from [Phalcon\Mvc\Model\Behavior](Phalcon_Mvc_Model_Behavior.md)

Phalcon\Mvc\Model\Behavior



protected  **mustTakeAction** (*mixed* $eventName) inherited from [Phalcon\Mvc\Model\Behavior](Phalcon_Mvc_Model_Behavior.md)

Checks whether the behavior must take action on certain event



protected *array* **getOptions** ([*string* $eventName]) inherited from [Phalcon\Mvc\Model\Behavior](Phalcon_Mvc_Model_Behavior.md)

Returns the behavior options related to an event



public  **missingMethod** ([Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $model, *string* $method, [*array* $arguments]) inherited from [Phalcon\Mvc\Model\Behavior](Phalcon_Mvc_Model_Behavior.md)

Acts as fallbacks when a missing method is called on the model




<hr>

# Class **Phalcon\Mvc\Model\Behavior\Timestampable**

*extends* abstract class [Phalcon\Mvc\Model\Behavior](Phalcon_Mvc_Model_Behavior.md)

*implements* [Phalcon\Mvc\Model\BehaviorInterface](Phalcon_Mvc_Model_Behavior.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/behavior/timestampable.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to automatically update a model’s attribute saving the
datetime when a record is created or updated


## Methods
public  **notify** (*mixed* $type, [Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $model)

Listens for notifications from the models manager



public  **__construct** ([*array* $options]) inherited from [Phalcon\Mvc\Model\Behavior](Phalcon_Mvc_Model_Behavior.md)

Phalcon\Mvc\Model\Behavior



protected  **mustTakeAction** (*mixed* $eventName) inherited from [Phalcon\Mvc\Model\Behavior](Phalcon_Mvc_Model_Behavior.md)

Checks whether the behavior must take action on certain event



protected *array* **getOptions** ([*string* $eventName]) inherited from [Phalcon\Mvc\Model\Behavior](Phalcon_Mvc_Model_Behavior.md)

Returns the behavior options related to an event



public  **missingMethod** ([Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $model, *string* $method, [*array* $arguments]) inherited from [Phalcon\Mvc\Model\Behavior](Phalcon_Mvc_Model_Behavior.md)

Acts as fallbacks when a missing method is called on the model




<hr>

# Interface **Phalcon\Mvc\Model\BehaviorInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/behaviorinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **notify** (*mixed* $type, [Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $model)

...


abstract public  **missingMethod** ([Phalcon\Mvc\ModelInterface](Phalcon_Mvc_Model.md) $model, *mixed* $method, [*mixed* $arguments])

...
