---
title: "Phalcon Events"
version: "5.13"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Events

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Events\AbstractEventsAware ![Abstract](/assets/images/abstract-green.svg) 

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

## Events\Event ![Final](/assets/images/final-red.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Event.zep)

-   __Namespace__

    - `Phalcon\Events`

-   __Uses__

    - `Phalcon\Contracts\Events\Stoppable`

-   __Extends__

-   __Implements__

    - `EventInterface`
    - `Stoppable`

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
public function isPropagationStopped(): bool;
```
Returns whether propagation must stop. PSR-14 alias backed by the same
`stopped` flag as `isStopped()`; calling `stop()` flips both.

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

## Events\EventInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/EventInterface.zep)

-   __Namespace__

    - `Phalcon\Events`

-   __Uses__

    - `Phalcon\Contracts\Events\Event`

-   __Extends__

    `EventContract`

-   __Implements__

Phalcon\Events\EventInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use \{@see \Phalcon\Contracts\Events\Event\} instead.

## Events\EventsAwareInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/EventsAwareInterface.zep)

-   __Namespace__

    - `Phalcon\Events`

-   __Uses__

    - `Phalcon\Contracts\Events\EventsAware`

-   __Extends__

    `EventsAwareContract`

-   __Implements__

Phalcon\Events\EventsAwareInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use \{@see \Phalcon\Contracts\Events\EventsAware\} instead.

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
    - `Phalcon\Contracts\Events\Subscriber`

-   __Extends__

-   __Implements__

    - `ManagerInterface`

Phalcon Events Manager, offers an easy way to intercept and manipulate, if
needed, the normal flow of operation. With the EventsManager the developer
can create hooks or plugins that will offer monitoring of data, manipulation,
conditional execution and much more.

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
 * Re-entrancy depth of fire()/fireAll(). 0 means no fire is in
 * progress. Incremented on every fire entry, decremented on exit.
 * Used to keep nested fire() calls from clobbering the outer
 * caller's `$this->responses` accumulator.
 *
 * @var int
 */
protected $fireDepth = ;

/**
 * Manager-level kill switch. When true, every fire()/fireAll()/
 * fireQueue() call returns immediately (null or empty array) without
 * dispatching. Cleared by resume(). Survives across fire() calls,
 * unlike Event::stop() which only stops the current dispatch chain.
 *
 * @var bool
 */
protected $halted = false;

/**
 * When true, a listener returning literal `false` (with the event's
 * `cancelable` flag on) short-circuits the dispatch loop and pins
 * the fire() return as `false`. Default off - preserves the pre-5.13
 * "last-wins" contract for codebases that rely on later listeners
 * overriding an earlier false return [#17019].
 *
 * @var bool
 */
protected $stopOnFalse = false;

/**
 * When true, fire()/fireAll() throw on dispatch of an event that
 * has zero matching listeners. Catches typos in dev. Default off.
 *
 * @var bool
 */
protected $strict = false;

/**
 * Parsed-eventType cache. Memoizes the strpos + substr work done in
 * fire() so the same event name fired repeatedly (the common case
 * for db:beforeQuery, model:afterSave, etc.) collapses to a single
 * hash lookup.
 *
 * Shape: `eventNameCache[$eventType] = [typePrefix, eventName]`
 *
 * Unbounded by design - distinct event types in a typical Phalcon
 * application are well under 100 keys, and the cache never needs
 * invalidation (parse is deterministic for a given eventType string).
 *
 * @var array
 */
protected $eventNameCache;

/**
 * Memoized method_exists() results for the OBJECT_METHOD dispatch
 * path in dispatch(). Keyed by `handlerClass => [methodName => bool]`.
 * A class doesn't gain methods at runtime so the lookup is permanent.
 *
 * @var array
 */
protected $methodExistsCache;

/**
 * Memoized getSubscribedEvents() maps keyed by Subscriber class name.
 * The static method's return is stable for the lifetime of a class
 * definition, so the cache never needs invalidation.
 *
 * @var array
 */
protected $subscriberEventsCache;

/**
 * Listener storage. Shape:
 *
 *   events[$eventType] = [
 *       [handler, type, priority]            // types 0, 1, 3
 *       [handler, type, priority, className] // type 2 carries
 *                                            // resolved class name
 *       ...
 *   ]
 *
 * Kept sorted by priority descending when priorities are enabled
 * (FIFO within the same priority); otherwise listeners are simply
 * appended in attach order.
 *
 * `type` is classified once at attach() time so dispatch() can
 * route via a simple branch:
 *
 *   0 - Closure: direct invocation via `{handler}(args)`, no
 *       arg-array alloc per call
 *   1 - [obj, method] array callable: direct dynamic dispatch
 *       `handler[0]->{handler[1]}(args)`
 *   2 - plain object: dynamic dispatch via method named after the
 *       event (the classic Phalcon listener pattern); class name is
 *       captured at attach time to skip get_class() per fire
 *   3 - generic callable (string fn name, invokable object,
 *       [class, staticMethod]): call_user_func_array
 *
 * @var array
 */
protected $events;

/**
 * @var array
 */
protected $responses;

/**
 * @var array
 */
protected $subscribers;

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
Returns if priorities are enabled

```php
final public function attach( string $eventType, mixed $handler, int $priority = static-constant-access ): void;
```
Attach a listener to the events manager

```php
public function clearSubscribers(): void;
```
Removes every registered subscriber and detaches each listener they
contributed. Listeners attached via attach() are untouched.

Iterates a snapshot of `subscribers` so removeSubscriber() can safely
mutate the original property during the walk.

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
final public function fire( string $eventType, object $source, mixed $data = null, bool $cancelable = bool );
```
Fires an event in the events manager causing the active listeners to be
notified about it

```php
$eventsManager->fire("db", $connection);
```

```php
public function fireAll( string $eventType, object $source, mixed $data = null, bool $cancelable = bool ): array;
```
Fires an event and returns every listener's return value as an
indexed array. Independent of collectResponses(); the caller's
collected state on `$this->responses` is preserved (stashed and
restored across the call).

```php
$results = $eventsManager->fireAll("db:beforeQuery", $connection);
```

```php
final public function fireQueue( array $queue, EventInterface $event );
```
Internal handler to call a queue of events.

Kept at its original 2-arg signature for BC; thin wrapper around
the private `dispatch()` helper. Direct callers pay the cost of
re-extracting metadata from the Event; the framework's own fire()
path bypasses this wrapper and calls dispatch() with hoisted args.

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
public function getSubscribers(): array;
```
Returns the list of registered subscriber instances. Useful for
introspection and test setup/teardown.

```php
public function halt(): void;
```
Manager-level kill switch. After halt(), every fire()/fireAll()/
fireQueue() call returns immediately without dispatching, until
resume() is called. Use this when a listener needs to abort all
subsequent event activity for the lifetime of the manager (e.g.
a security check that cancels everything downstream).

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
public function isHalted(): bool;
```
Returns whether the manager-level kill switch is engaged. See halt().

```php
public function isStopOnFalse(): bool;
```
Returns whether the stop-on-false short-circuit is enabled.
See setStopOnFalse().

```php
public function isStrict(): bool;
```
Returns whether strict mode is enabled. When true, fire()/fireAll()
throw when an event has no matching listeners - useful in dev to
catch typos. Default off.

```php
public function isValidHandler( mixed $handler ): bool;
```

```php
public function removeSubscriber( Subscriber $subscriber ): void;
```
Removes a previously registered subscriber. Detaches every listener the
subscriber declared via getSubscribedEvents(). Idempotent - calling
with a subscriber that was never added (or already removed) is a no-op.

```php
public function resume(): void;
```
Clears the manager-level kill switch set by halt(). Subsequent
fire()/fireAll()/fireQueue() calls resume normal dispatch.

```php
public function setStopOnFalse( bool $flag ): void;
```
Enables/disables the stop-on-false short-circuit. When true, a
listener returning literal `false` (with cancelable=true) stops
the current event's queue and pins the fire() return as `false`.
Later listeners cannot overwrite the cancel. Default off.

Independent of halt() / event->stop() - only governs how the
dispatch loop reacts to a `false` listener return.

```php
public function setStrict( bool $strict ): void;
```
Enables/disables strict mode. When true, fire()/fireAll() throw
when dispatching an event with zero matching listeners.

## Events\ManagerInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/ManagerInterface.zep)

-   __Namespace__

    - `Phalcon\Events`

-   __Uses__

    - `Phalcon\Contracts\Events\Manager`

-   __Extends__

    `ManagerContract`

-   __Implements__

Phalcon\Events\ManagerInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use \{@see \Phalcon\Contracts\Events\Manager\} instead.

Source: https://docs.phalcon.io/5.13/api/phalcon_events/index.mdx
