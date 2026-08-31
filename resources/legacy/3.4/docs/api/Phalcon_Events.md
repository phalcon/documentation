---
layout: default
title: 'Phalcon\Events\Event'
---
# Class **Phalcon\Events\Event**

*implements* [Phalcon\Events\EventInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/events/event.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class offers contextual information of a fired event in the EventsManager


## Methods
public  **getType** ()

Event type



public  **getSource** ()

Event source



public  **getData** ()

Event data



public  **__construct** (*string* $type, *object* $source, [*mixed* $data], [*boolean* $cancelable])

Phalcon\Events\Event constructor



public  **setData** ([*mixed* $data])

Sets event data.



public  **setType** (*mixed* $type)

Sets event type.



public  **stop** ()

Stops the event preventing propagation.

```php
<?php

if ($event->isCancelable()) {
    $event->stop();
}

```



public  **isStopped** ()

Check whether the event is currently stopped.



public  **isCancelable** ()

Check whether the event is cancelable.

```php
<?php

if ($event->isCancelable()) {
    $event->stop();
}

```




<hr>

# Interface **Phalcon\Events\EventInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/events/eventinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getData** ()

...


abstract public  **setData** ([*mixed* $data])

...


abstract public  **getType** ()

...


abstract public  **setType** (*mixed* $type)

...


abstract public  **stop** ()

...


abstract public  **isStopped** ()

...


abstract public  **isCancelable** ()

...



<hr>

# Interface **Phalcon\Events\EventsAwareInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/events/eventsawareinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager)

...


abstract public  **getEventsManager** ()

...



<hr>

# Class **Phalcon\Events\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/events/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Events\Manager**

*implements* [Phalcon\Events\ManagerInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/events/manager.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Phalcon Events Manager, offers an easy way to intercept and manipulate, if needed,
the normal flow of operation. With the EventsManager the developer can create hooks or
plugins that will offer monitoring of data, manipulation, conditional execution and much more.


## Methods
public  **attach** (*string* $eventType, *object* | *callable* $handler, [*int* $priority])

Attach a listener to the events manager



public  **detach** (*string* $eventType, *object* $handler)

Detach the listener from the events manager



public  **enablePriorities** (*mixed* $enablePriorities)

Set if priorities are enabled in the EventsManager



public  **arePrioritiesEnabled** ()

Returns if priorities are enabled



public  **collectResponses** (*mixed* $collect)

Tells the event manager if it needs to collect all the responses returned by every
registered listener in a single fire



public  **isCollecting** ()

Check if the events manager is collecting all all the responses returned by every
registered listener in a single fire



public *array* **getResponses** ()

Returns all the responses returned by every handler executed by the last 'fire' executed



public  **detachAll** ([*mixed* $type])

Removes all events from the EventsManager



final public *mixed* **fireQueue** ([SplPriorityQueue](https://php.net/manual/en/class.splpriorityqueue.php) | *array* $queue, [Phalcon\Events\Event](Phalcon_Events.md) $event)

Internal handler to call a queue of events



public *mixed* **fire** (*string* $eventType, *object* $source, [*mixed* $data], [*boolean* $cancelable])

Fires an event in the events manager causing the active listeners to be notified about it

```php
<?php

$eventsManager->fire("db", $connection);

```



public  **hasListeners** (*mixed* $type)

Check whether certain type of event has listeners



public *array* **getListeners** (*string* $type)

Returns all the attached listeners of a certain type




<hr>

# Interface **Phalcon\Events\ManagerInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/events/managerinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **attach** (*mixed* $eventType, *mixed* $handler)

...


abstract public  **detach** (*mixed* $eventType, *mixed* $handler)

...


abstract public  **detachAll** ([*mixed* $type])

...


abstract public  **fire** (*mixed* $eventType, *mixed* $source, [*mixed* $data])

...


abstract public  **getListeners** (*mixed* $type)

...
