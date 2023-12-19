---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Events\AbstractEventsAware ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/AbstractEventsAware.zep)


-   __Namespace__

    - `Phalcon\Events`

-   __Uses__
    
    - `Phalcon\Events\ManagerInterface`

-   __Extends__
    

-   __Implements__
    

This abstract class offers access to the events manager


### Properties
```php
/**
 * @var ManagerInterface|null
 */
protected $eventsManager;

```

### Methods

```php
public function getEventsManager(): ManagerInterface | null;
```
Returns the internal event manager


```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```
Sets the events manager


```php
protected function fireManagerEvent( string $eventName, mixed $data = null, bool $cancellable = bool ): mixed | bool;
```
Helper method to fire an event




## Events\Event 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Event.zep)


-   __Namespace__

    - `Phalcon\Events`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    
    - `EventInterface`

This class offers contextual information of a fired event in the
EventsManager

```php
Phalcon\Events\Event;

$event = new Event("db:afterQuery", $this, ["data" => "mydata"], true);
if ($event->isCancelable()) {
    $event->stop();
}
```


### Properties
```php
/**
 * Is event cancelable?
 *
 * @var bool
 */
protected $cancelable;

/**
 * Event data
 *
 * @var mixed
 */
protected $data;

/**
 * Event source
 *
 * @var object|null
 */
protected $source;

/**
 * Is event propagation stopped?
 *
 * @var bool
 */
protected $stopped = false;

/**
 * Event type
 *
 * @var string
 */
protected $type;

```

### Methods

```php
public function __construct( string $type, mixed $source = null, mixed $data = null, bool $cancelable = bool );
```
Phalcon\Events\Event constructor


```php
public function getData(): mixed;
```



```php
public function getSource(): object | null;
```



```php
public function getType(): string;
```



```php
public function isCancelable(): bool;
```
Check whether the event is cancelable.

```php
if ($event->isCancelable()) {
    $event->stop();
}
```


```php
public function isStopped(): bool;
```
Check whether the event is currently stopped.


```php
public function setData( mixed $data = null ): EventInterface;
```
Sets event data.


```php
public function setType( string $type ): EventInterface;
```
Sets event type.


```php
public function stop(): EventInterface;
```
Stops the event preventing propagation.

```php
if ($event->isCancelable()) {
    $event->stop();
}
```




## Events\EventInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/EventInterface.zep)


-   __Namespace__

    - `Phalcon\Events`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Events\Event class


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
public function setData( mixed $data = null ): EventInterface;
```
Sets event data


```php
public function setType( string $type ): EventInterface;
```
Sets event type


```php
public function stop(): EventInterface;
```
Stops the event preventing propagation




## Events\EventsAwareInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/EventsAwareInterface.zep)


-   __Namespace__

    - `Phalcon\Events`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

This interface must for those classes that accept an EventsManager and
dispatch events


### Methods

```php
public function getEventsManager(): ManagerInterface | null;
```
Returns the internal event manager


```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```
Sets the events manager




## Events\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Exception.zep)


-   __Namespace__

    - `Phalcon\Events`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Events will use this class



## Events\Manager 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Manager.zep)


-   __Namespace__

    - `Phalcon\Events`

-   __Uses__
    
    - `Closure`
    - `SplPriorityQueue`

-   __Extends__
    

-   __Implements__
    
    - `ManagerInterface`

Phalcon Events Manager, offers an easy way to intercept and manipulate, if
needed, the normal flow of operation. With the EventsManager the developer
can create hooks or plugins that will offer monitoring of data, manipulation,
conditional execution and much more.


### Constants
```php
const DEFAULT_PRIORITY = 100;
```

### Properties
```php
/**
 * @var bool
 */
protected $collect = false;

/**
 * @var bool
 */
protected $enablePriorities = false;

/**
 * @var array
 */
protected $events;

/**
 * @var array
 */
protected $responses;

```

### Methods

```php
public function arePrioritiesEnabled(): bool;
```
Returns if priorities are enabled


```php
public function attach( string $eventType, mixed $handler, int $priority = static-constant-access ): void;
```
Attach a listener to the events manager


```php
public function collectResponses( bool $collect ): void;
```
Tells the event manager if it needs to collect all the responses returned
by every registered listener in a single fire


```php
public function detach( string $eventType, mixed $handler ): void;
```
Detach the listener from the events manager


```php
public function detachAll( string $type = null ): void;
```
Removes all events from the EventsManager


```php
public function enablePriorities( bool $enablePriorities ): void;
```
Set if priorities are enabled in the EventsManager.

A priority queue of events is a data structure similar
to a regular queue of events: we can also put and extract
elements from it. The difference is that each element in a
priority queue is associated with a value called priority.
This value is used to order elements of a queue: elements
with higher priority are retrieved before the elements with
lower priority.


```php
public function fire( string $eventType, object $source, mixed $data = null, bool $cancelable = bool );
```
Fires an event in the events manager causing the active listeners to be
notified about it

```php
$eventsManager->fire("db", $connection);
```


```php
final public function fireQueue( SplPriorityQueue $queue, EventInterface $event );
```
Internal handler to call a queue of events


```php
public function getListeners( string $type ): array;
```
Returns all the attached listeners of a certain type


```php
public function getResponses(): array;
```
Returns all the responses returned by every handler executed by the last
'fire' executed


```php
public function hasListeners( string $type ): bool;
```
Check whether certain type of event has listeners


```php
public function isCollecting(): bool;
```
Check if the events manager is collecting all all the responses returned
by every registered listener in a single fire


```php
public function isValidHandler( mixed $handler ): bool;
```





## Events\ManagerInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/ManagerInterface.zep)


-   __Namespace__

    - `Phalcon\Events`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Events managers.


### Methods

```php
public function attach( string $eventType, mixed $handler ): void;
```
Attach a listener to the events manager


```php
public function detach( string $eventType, mixed $handler ): void;
```
Detach the listener from the events manager


```php
public function detachAll( string $type = null ): void;
```
Removes all events from the EventsManager


```php
public function fire( string $eventType, object $source, mixed $data = null, bool $cancelable = bool );
```
Fires an event in the events manager causing the active listeners to be
notified about it


```php
public function getListeners( string $type ): array;
```
Returns all the attached listeners of a certain type


```php
public function hasListeners( string $type ): bool;
```
Check whether certain type of event has listeners


