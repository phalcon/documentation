---
title: "Phalcon Events"
version: "5.21"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Events

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Events\AbstractEventsAware

Abstract

This abstract class offers access to the events manager

- **`Phalcon\Events\AbstractEventsAware`**
  - [`Phalcon\Acl\Adapter\AbstractAdapter`](/5.21/api/phalcon_acl/#acladapterabstractadapter)
  - [`Phalcon\Queue\Consumer\QueueConsumer`](/5.21/api/phalcon_queue/#queueconsumerqueueconsumer)

`Phalcon\Events\ManagerInterface`

### Method Summary

- `public getEventsManager(): ManagerInterface|null` — Returns the internal event manager

- `public setEventsManager(ManagerInterface $eventsManager): void` — Sets the events manager

- `protected fireManagerEvent(string $eventName, mixed $data = null, bool $cancellable = true, bool $stopOnFalse = false): mixed|bool` — Helper method to fire an event

### Properties

- `protected ManagerInterface|null $eventsManager = null`

### Methods

<h4 id="eventsabstracteventsaware-geteventsmanager"><code>getEventsManager()</code></h4>

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

<h4 id="eventsabstracteventsaware-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

<h4 id="eventsabstracteventsaware-firemanagerevent"><code>fireManagerEvent()</code></h4>

```php
protected function fireManagerEvent(
    string $eventName,
    mixed $data = null,
    bool $cancellable = true,
    bool $stopOnFalse = false
): mixed|bool;
```

Helper method to fire an event


## Events\Event

Class

This class offers contextual information of a fired event in the
EventsManager

```php
Phalcon\Events\Event;

$event = new Event("db:afterQuery", $this, ["data" => "mydata"], true);
if ($event->isCancelable()) {
    $event->stop();
}
```

- **`Phalcon\Events\Event`** - implements [`Phalcon\Events\EventInterface`](#eventseventinterface), [`Phalcon\Contracts\Events\Stoppable`](/5.21/api/phalcon_contracts/#contractseventsstoppable)

`Phalcon\Contracts\Events\Stoppable` · `Phalcon\Events\Exceptions\EventNotCancelable` · `Phalcon\Events\Exceptions\InvalidEventSource`

### Method Summary

- `public __construct(string $type, mixed $source = null, mixed $data = null, bool $cancelable = true)` — Phalcon\Events\Event constructor

- `public getData(): mixed`

- `public getSource(): object|null`

- `public getType(): string`

- `public isCancelable(): bool` — Check whether the event is cancelable.

- `public isPropagationStopped(): bool` — Returns whether propagation must stop. PSR-14 alias backed by the same

- `public isStopped(): bool` — Check whether the event is currently stopped.

- `public setData(mixed $data = null): EventInterface` — Sets event data.

- `public setType(string $type): EventInterface` — Sets event type.

- `public stop(): EventInterface` — Stops the event preventing propagation.

### Properties

- `protected bool $cancelable` — Is event cancelable?

- `protected mixed $data` — Event data

- `protected object|null $source = null` — Event source

- `protected bool $stopped = false` — Is event propagation stopped?

- `protected string $type` — Event type

### Methods

<h4 id="eventsevent-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $type,
    mixed $source = null,
    mixed $data = null,
    bool $cancelable = true
);
```

Phalcon\Events\Event constructor

<h4 id="eventsevent-getdata"><code>getData()</code></h4>

```php
public function getData(): mixed;
```

<h4 id="eventsevent-getsource"><code>getSource()</code></h4>

```php
public function getSource(): object|null;
```

<h4 id="eventsevent-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

<h4 id="eventsevent-iscancelable"><code>isCancelable()</code></h4>

```php
public function isCancelable(): bool;
```

Check whether the event is cancelable.

```php
if ($event->isCancelable()) {
    $event->stop();
}
```

<h4 id="eventsevent-ispropagationstopped"><code>isPropagationStopped()</code></h4>

```php
public function isPropagationStopped(): bool;
```

Returns whether propagation must stop. PSR-14 alias backed by the same
`stopped` flag as `isStopped()`; calling `stop()` flips both.

<h4 id="eventsevent-isstopped"><code>isStopped()</code></h4>

```php
public function isStopped(): bool;
```

Check whether the event is currently stopped.

<h4 id="eventsevent-setdata"><code>setData()</code></h4>

```php
public function setData( mixed $data = null ): EventInterface;
```

Sets event data.

<h4 id="eventsevent-settype"><code>setType()</code></h4>

```php
public function setType( string $type ): EventInterface;
```

Sets event type.

<h4 id="eventsevent-stop"><code>stop()</code></h4>

```php
public function stop(): EventInterface;
```

Stops the event preventing propagation.

```php
if ($event->isCancelable()) {
    $event->stop();
}
```


## Events\EventInterface

Interface

Phalcon\Events\EventInterface

- [`Phalcon\Contracts\Events\Event`](/5.21/api/phalcon_contracts/#contractseventsevent)
  - **`Phalcon\Events\EventInterface`**

`Phalcon\Contracts\Events\Event`


## Events\EventsAwareInterface

Interface

Phalcon\Events\EventsAwareInterface

- [`Phalcon\Contracts\Events\EventsAware`](/5.21/api/phalcon_contracts/#contractseventseventsaware)
  - **`Phalcon\Events\EventsAwareInterface`**

`Phalcon\Contracts\Events\EventsAware`


## Events\Exception

Class

Exceptions thrown in Phalcon\Events will use this class

- `\Exception`
  - **`Phalcon\Events\Exception`**
    - [`Phalcon\Events\Exceptions\EventNotCancelable`](#eventsexceptionseventnotcancelable)
    - [`Phalcon\Events\Exceptions\InvalidEventHandler`](#eventsexceptionsinvalideventhandler)
    - [`Phalcon\Events\Exceptions\InvalidEventSource`](#eventsexceptionsinvalideventsource)
    - [`Phalcon\Events\Exceptions\InvalidEventType`](#eventsexceptionsinvalideventtype)
    - [`Phalcon\Events\Exceptions\InvalidSubscriberConfiguration`](#eventsexceptionsinvalidsubscriberconfiguration)
    - [`Phalcon\Events\Exceptions\NoListenersForEvent`](#eventsexceptionsnolistenersforevent)


## Events\Exceptions\EventNotCancelable

Class

- `\Exception`
  - [`Phalcon\Events\Exception`](#eventsexception)
    - **`Phalcon\Events\Exceptions\EventNotCancelable`**

`Phalcon\Events\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="eventsexceptionseventnotcancelable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Events\Exceptions\InvalidEventHandler

Class

- `\Exception`
  - [`Phalcon\Events\Exception`](#eventsexception)
    - **`Phalcon\Events\Exceptions\InvalidEventHandler`**

`Phalcon\Events\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="eventsexceptionsinvalideventhandler-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Events\Exceptions\InvalidEventSource

Class

- `\Exception`
  - [`Phalcon\Events\Exception`](#eventsexception)
    - **`Phalcon\Events\Exceptions\InvalidEventSource`**

`Phalcon\Events\Exception`

### Method Summary

- `public __construct(string $type, string $sourceType)`

### Methods

<h4 id="eventsexceptionsinvalideventsource-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $type,
    string $sourceType
);
```


## Events\Exceptions\InvalidEventType

Class

- `\Exception`
  - [`Phalcon\Events\Exception`](#eventsexception)
    - **`Phalcon\Events\Exceptions\InvalidEventType`**

`Phalcon\Events\Exception`

### Method Summary

- `public __construct(string $eventType)`

### Methods

<h4 id="eventsexceptionsinvalideventtype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $eventType );
```


## Events\Exceptions\InvalidSubscriberConfiguration

Class

- `\Exception`
  - [`Phalcon\Events\Exception`](#eventsexception)
    - **`Phalcon\Events\Exceptions\InvalidSubscriberConfiguration`**

`Phalcon\Events\Exception`

### Method Summary

- `public __construct(string $eventName)`

### Methods

<h4 id="eventsexceptionsinvalidsubscriberconfiguration-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $eventName );
```


## Events\Exceptions\NoListenersForEvent

Class

- `\Exception`
  - [`Phalcon\Events\Exception`](#eventsexception)
    - **`Phalcon\Events\Exceptions\NoListenersForEvent`**

`Phalcon\Events\Exception`

### Method Summary

- `public __construct(string $eventType)`

### Methods

<h4 id="eventsexceptionsnolistenersforevent-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $eventType );
```


## Events\Manager

Class

Phalcon Events Manager, offers an easy way to intercept and manipulate, if
needed, the normal flow of operation. With the EventsManager the developer
can create hooks or plugins that will offer monitoring of data, manipulation,
conditional execution and much more.

- **`Phalcon\Events\Manager`** - implements [`Phalcon\Events\ManagerInterface`](#eventsmanagerinterface), [`Phalcon\Contracts\Events\Enumerable`](/5.21/api/phalcon_contracts/#contractseventsenumerable)

`Closure` · `Phalcon\Contracts\Events\Enumerable` · `Phalcon\Contracts\Events\Stoppable` · `Phalcon\Contracts\Events\Subscriber` · `Phalcon\Events\Exceptions\InvalidEventHandler` · `Phalcon\Events\Exceptions\InvalidEventType` · `Phalcon\Events\Exceptions\InvalidSubscriberConfiguration` · `Phalcon\Events\Exceptions\NoListenersForEvent`

### Method Summary

- `public addSubscriber(Subscriber $subscriber): void` — Registers an event subscriber. The subscriber's getSubscribedEvents()

- `public arePrioritiesEnabled(): bool` — Returns if priorities are enabled

- `public attach(string $eventType, mixed $handler, int $priority = self::DEFAULT_PRIORITY): void` — Attach a listener to the events manager

- `public clearSubscribers(): void` — Removes every registered subscriber and detaches each listener they

- `public collectResponses(bool $collect): void` — Tells the event manager if it needs to collect all the responses returned

- `public detach(string $eventType, mixed $handler): void` — Detach the listener from the events manager

- `public detachAll(string|null $type = null): void` — Removes all events from the EventsManager

- `public dispatch(object $event, mixed $name = null, mixed $source = null)` — Dispatches an object event to its listeners, routed by an explicit name

- `public enablePriorities(bool $enablePriorities): void` — Set if priorities are enabled in the EventsManager.

- `public fire(string $eventType, object $source, mixed $data = null, bool $cancelable = true, mixed $stopOnFalse = null)` — Fires an event in the events manager causing the active listeners to be

- `public fireAll(string $eventType, object $source, mixed $data = null, bool $cancelable = true): array` — Fires an event and returns every listener's return value as an

- `public fireQueue(array $queue, EventInterface $event)` — Internal handler to call a queue of events.

- `public getListenerMap(): array` — Returns every event type that currently has at least one listener,

- `public getListeners(string $type): array` — Returns all the attached listeners of a certain type

- `public getMethodExistsCacheLimit(): int` — Returns the configured method\_exists-cache cap (0 = unlimited).

- `public getResponses(): array` — Returns all the responses returned by every handler executed by the last

- `public getSubscribers(): array` — Returns the list of registered subscriber instances. Useful for

- `public halt(): void` — Manager-level kill switch. After halt(), every fire()/fireAll()/

- `public hasListeners(string $type): bool` — Check whether certain type of event has listeners

- `public isCollecting(): bool` — Check if the events manager is collecting all all the responses returned

- `public isHalted(): bool` — Returns whether the manager-level kill switch is engaged. See halt().

- `public isStopOnFalse(): bool` — Returns whether the stop-on-false short-circuit is enabled.

- `public isStrict(): bool` — Returns whether strict mode is enabled. When true, fire()/fireAll()

- `public isValidHandler(mixed $handler): bool`

- `public removeSubscriber(Subscriber $subscriber): void` — Removes a previously registered subscriber. Detaches every listener the

- `public resume(): void` — Clears the manager-level kill switch set by halt(). Subsequent

- `public setMethodExistsCacheLimit(int $methodExistsCacheLimit): void` — Caps the number of distinct handler classes retained in the

- `public setStopOnFalse(bool $flag): void` — Enables/disables the stop-on-false short-circuit. When true, a

- `public setStrict(bool $strict): void` — Enables/disables strict mode. When true, fire()/fireAll() throw

- `protected afterFire(mixed $status, string $eventType, object $source, mixed $data = null, bool $cancelable = true): mixed` — Extension seam invoked after an event has been dispatched to its

- `protected beforeFire(string $eventType, object $source, mixed $data = null, bool $cancelable = true): bool` — Extension seam invoked before an event is dispatched. The base

### Properties

- `protected bool $collect = false`

- `protected bool $enablePriorities = false`

- `protected array $eventNameCache = []` — Parsed-eventType cache. Memoizes the strpos + substr work done in
  fire() so the same event name fired repeatedly (the common case
  for db:beforeQuery, model:afterSave, etc.) collapses to a single
  hash lookup.

  Shape: `eventNameCache[$eventType] = [typePrefix, eventName]`

  Unbounded by design - distinct event types in a typical Phalcon
  application are well under 100 keys, and the cache never needs
  invalidation (parse is deterministic for a given eventType string).

- `protected array $events = []` — Listener storage. Shape:

  events\[$eventType] = \[
  \[handler, type, priority]            // types 0, 1, 3
  \[handler, type, priority, className] // type 2 carries
  // resolved class name
  ...
  ]

  Kept sorted by priority descending when priorities are enabled
  (FIFO within the same priority); otherwise listeners are simply
  appended in attach order.

  `type` is classified once at attach() time so dispatch() can
  route via a simple branch:

  0 - Closure: direct invocation via `{handler}(args)`, no
  arg-array alloc per call
  1 - \[obj, method] array callable: direct dynamic dispatch
  `handler[0]->{handler[1]}(args)`
  2 - plain object: dynamic dispatch via method named after the
  event (the classic Phalcon listener pattern); class name is
  captured at attach time to skip get\_class() per fire
  3 - generic callable (string fn name, invokable object,
  \[class, staticMethod]): call\_user\_func\_array

- `protected int $fireDepth = 0` — Re-entrancy depth of fire()/fireAll(). 0 means no fire is in
  progress. Incremented on every fire entry, decremented on exit.
  Used to keep nested fire() calls from clobbering the outer
  caller's `$this->responses` accumulator.

- `protected bool $halted = false` — Manager-level kill switch. When true, every fire()/fireAll()/
  fireQueue() call returns immediately (null or empty array) without
  dispatching. Cleared by resume(). Survives across fire() calls,
  unlike Event::stop() which only stops the current dispatch chain.

- `protected array $methodExistsCache = []` — Memoized method\_exists() results for the OBJECT\_METHOD dispatch
  path in dispatch(). Keyed by `handlerClass => [methodName => bool]`.
  A class doesn't gain methods at runtime so the lookup is permanent.

- `protected int $methodExistsCacheLimit = 0` — Maximum number of distinct handler classes retained in
  methodExistsCache. 0 (default) keeps the original unbounded
  behavior; a positive value clears the cache when adding a new
  class would exceed it. Re-warming is cheap (method\_exists is
  O(1)) and the cap is meant for very long-lived workers that see
  many distinct listener classes over time.

- `protected array $responses = []`

- `protected bool $stopOnFalse = false` — When true, a listener returning literal `false` (with the event's
  `cancelable` flag on) short-circuits the dispatch loop and pins
  the fire() return as `false`. Default off - preserves the pre-5.13
  "last-wins" contract for codebases that rely on later listeners
  overriding an earlier false return \[#17019].

- `protected bool $strict = false` — When true, fire()/fireAll() throw on dispatch of an event that
  has zero matching listeners. Catches typos in dev. Default off.

- `protected array $subscriberEventsCache = []` — Memoized getSubscribedEvents() maps keyed by Subscriber class name.
  The static method's return is stable for the lifetime of a class
  definition, so the cache never needs invalidation.

- `protected array $subscribers = []`

### Methods

<h4 id="eventsmanager-addsubscriber"><code>addSubscriber()</code></h4>

```php
public function addSubscriber( Subscriber $subscriber ): void;
```

Registers an event subscriber. The subscriber's getSubscribedEvents()
map is parsed and each entry is attached through the regular listener
pipeline.

<h4 id="eventsmanager-areprioritiesenabled"><code>arePrioritiesEnabled()</code></h4>

```php
public function arePrioritiesEnabled(): bool;
```

Returns if priorities are enabled

<h4 id="eventsmanager-attach"><code>attach()</code></h4>

```php
final public function attach(
    string $eventType,
    mixed $handler,
    int $priority = self::DEFAULT_PRIORITY
): void;
```

Attach a listener to the events manager

<h4 id="eventsmanager-clearsubscribers"><code>clearSubscribers()</code></h4>

```php
public function clearSubscribers(): void;
```

Removes every registered subscriber and detaches each listener they
contributed. Listeners attached via attach() are untouched.

Iterates a snapshot of `subscribers` so removeSubscriber() can safely
mutate the original property during the walk.

<h4 id="eventsmanager-collectresponses"><code>collectResponses()</code></h4>

```php
public function collectResponses( bool $collect ): void;
```

Tells the event manager if it needs to collect all the responses returned
by every registered listener in a single fire

<h4 id="eventsmanager-detach"><code>detach()</code></h4>

```php
public function detach(
    string $eventType,
    mixed $handler
): void;
```

Detach the listener from the events manager

<h4 id="eventsmanager-detachall"><code>detachAll()</code></h4>

```php
public function detachAll( string|null $type = null ): void;
```

Removes all events from the EventsManager

<h4 id="eventsmanager-dispatch"><code>dispatch()</code></h4>

```php
public function dispatch(
    object $event,
    mixed $name = null,
    mixed $source = null
);
```

Dispatches an object event to its listeners, routed by an explicit name
(a string, or a [class, method] array) or, failing that, by the event's
class name. Listeners receive the event object. Propagation stops when
the event implements Phalcon\Contracts\Events\Stoppable and reports it
is stopped.

<h4 id="eventsmanager-enablepriorities"><code>enablePriorities()</code></h4>

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

<h4 id="eventsmanager-fire"><code>fire()</code></h4>

```php
public function fire(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true,
    mixed $stopOnFalse = null
);
```

Fires an event in the events manager causing the active listeners to be
notified about it

```php
$eventsManager->fire("db", $connection);
```

<h4 id="eventsmanager-fireall"><code>fireAll()</code></h4>

```php
public function fireAll(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
): array;
```

Fires an event and returns every listener's return value as an
indexed array. Independent of collectResponses(); the caller's
collected state on `$this->responses` is preserved (stashed and
restored across the call).

```php
$results = $eventsManager->fireAll("db:beforeQuery", $connection);
```

<h4 id="eventsmanager-firequeue"><code>fireQueue()</code></h4>

```php
final public function fireQueue(
    array $queue,
    EventInterface $event
);
```

Internal handler to call a queue of events.

Kept at its original 2-arg signature for BC; thin wrapper around
the private `dispatch()` helper. Direct callers pay the cost of
re-extracting metadata from the Event; the framework's own fire()
path bypasses this wrapper and calls dispatch() with hoisted args.

<h4 id="eventsmanager-getlistenermap"><code>getListenerMap()</code></h4>

```php
public function getListenerMap(): array;
```

Returns every event type that currently has at least one listener,
mapped to that type's listeners. Types contributed by subscribers are
included, because addSubscriber() attaches through the regular listener
pipeline.

Unwrapping is delegated to getListeners() so the internal shape of
this->events is read in exactly one place.

<h4 id="eventsmanager-getlisteners"><code>getListeners()</code></h4>

```php
public function getListeners( string $type ): array;
```

Returns all the attached listeners of a certain type

<h4 id="eventsmanager-getmethodexistscachelimit"><code>getMethodExistsCacheLimit()</code></h4>

```php
public function getMethodExistsCacheLimit(): int;
```

Returns the configured method_exists-cache cap (0 = unlimited).
See setMethodExistsCacheLimit().

<h4 id="eventsmanager-getresponses"><code>getResponses()</code></h4>

```php
public function getResponses(): array;
```

Returns all the responses returned by every handler executed by the last
'fire' executed

<h4 id="eventsmanager-getsubscribers"><code>getSubscribers()</code></h4>

```php
public function getSubscribers(): array;
```

Returns the list of registered subscriber instances. Useful for
introspection and test setup/teardown.

<h4 id="eventsmanager-halt"><code>halt()</code></h4>

```php
public function halt(): void;
```

Manager-level kill switch. After halt(), every fire()/fireAll()/
fireQueue() call returns immediately without dispatching, until
resume() is called. Use this when a listener needs to abort all
subsequent event activity for the lifetime of the manager (e.g.
a security check that cancels everything downstream).

<h4 id="eventsmanager-haslisteners"><code>hasListeners()</code></h4>

```php
public function hasListeners( string $type ): bool;
```

Check whether certain type of event has listeners

<h4 id="eventsmanager-iscollecting"><code>isCollecting()</code></h4>

```php
public function isCollecting(): bool;
```

Check if the events manager is collecting all all the responses returned
by every registered listener in a single fire

<h4 id="eventsmanager-ishalted"><code>isHalted()</code></h4>

```php
public function isHalted(): bool;
```

Returns whether the manager-level kill switch is engaged. See halt().

<h4 id="eventsmanager-isstoponfalse"><code>isStopOnFalse()</code></h4>

```php
public function isStopOnFalse(): bool;
```

Returns whether the stop-on-false short-circuit is enabled.
See setStopOnFalse().

<h4 id="eventsmanager-isstrict"><code>isStrict()</code></h4>

```php
public function isStrict(): bool;
```

Returns whether strict mode is enabled. When true, fire()/fireAll()
throw when an event has no matching listeners - useful in dev to
catch typos. Default off.

<h4 id="eventsmanager-isvalidhandler"><code>isValidHandler()</code></h4>

```php
public function isValidHandler( mixed $handler ): bool;
```

<h4 id="eventsmanager-removesubscriber"><code>removeSubscriber()</code></h4>

```php
public function removeSubscriber( Subscriber $subscriber ): void;
```

Removes a previously registered subscriber. Detaches every listener the
subscriber declared via getSubscribedEvents(). Idempotent - calling
with a subscriber that was never added (or already removed) is a no-op.

<h4 id="eventsmanager-resume"><code>resume()</code></h4>

```php
public function resume(): void;
```

Clears the manager-level kill switch set by halt(). Subsequent
fire()/fireAll()/fireQueue() calls resume normal dispatch.

<h4 id="eventsmanager-setmethodexistscachelimit"><code>setMethodExistsCacheLimit()</code></h4>

```php
public function setMethodExistsCacheLimit( int $methodExistsCacheLimit ): void;
```

Caps the number of distinct handler classes retained in the
method_exists memoization cache. 0 disables the cap (the
default; preserves the original unbounded behavior). When the
cap is exceeded, the cache is cleared and re-warms on subsequent
fires.

<h4 id="eventsmanager-setstoponfalse"><code>setStopOnFalse()</code></h4>

```php
public function setStopOnFalse( bool $flag ): void;
```

Enables/disables the stop-on-false short-circuit. When true, a
listener returning literal `false` (with cancelable=true) stops
the current event's queue and pins the fire() return as `false`.
Later listeners cannot overwrite the cancel. Default off.

Independent of halt() / event->stop() - only governs how the
dispatch loop reacts to a `false` listener return.

<h4 id="eventsmanager-setstrict"><code>setStrict()</code></h4>

```php
public function setStrict( bool $strict ): void;
```

Enables/disables strict mode. When true, fire()/fireAll() throw
when dispatching an event with zero matching listeners.

<h4 id="eventsmanager-afterfire"><code>afterFire()</code></h4>

```php
protected function afterFire(
    mixed $status,
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
): mixed;
```

Extension seam invoked after an event has been dispatched to its
listener queues. Receives the computed dispatch result as `status`
and returns the value fire() hands back to its caller; the base
implementation returns `status` unchanged. A subclass can override
it to run bookkeeping or to post-process / rewrite the result.

Only called when the event was actually dispatched; the halted and
no-listener short-circuits in fire() return before reaching it.

<h4 id="eventsmanager-beforefire"><code>beforeFire()</code></h4>

```php
protected function beforeFire(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
): bool;
```

Extension seam invoked before an event is dispatched. The base
implementation returns true, so dispatch proceeds unchanged. A
subclass can override it to inspect the source and data and, by
returning false, abort the dispatch entirely - for example to
redirect a deferred event onto an external queue. Invoked before the
no-listener short-circuits, so it sees every fire(), including those
with no locally attached listeners.


## Events\ManagerInterface

Interface

Phalcon\Events\ManagerInterface

- [`Phalcon\Contracts\Events\Manager`](/5.21/api/phalcon_contracts/#contractseventsmanager)
  - **`Phalcon\Events\ManagerInterface`**

`Phalcon\Contracts\Events\Manager`


## Events\Traits\EventsAwareTrait

Trait

- **`Phalcon\Events\Traits\EventsAwareTrait`**

`Phalcon\Events\Exception` · `Phalcon\Events\ManagerInterface`

[`Phalcon\Application\AbstractApplication`](/5.21/api/phalcon_application/#applicationabstractapplication) · [`Phalcon\Auth\Guard\AbstractGuard`](/5.21/api/phalcon_auth/#authguardabstractguard) · [`Phalcon\Autoload\Loader`](/5.21/api/phalcon_autoload/#autoloadloader) · [`Phalcon\Cache\AbstractCache`](/5.21/api/phalcon_cache/#cacheabstractcache) · [`Phalcon\Cli\Task`](/5.21/api/phalcon_cli/#clitask) · [`Phalcon\DataMapper\Pdo\ConnectionLocator`](/5.21/api/phalcon_datamapper/#datamapperpdoconnectionlocator) · [`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`](/5.21/api/phalcon_datamapper/#datamapperpdoconnectionabstractconnection) · [`Phalcon\Dispatcher\AbstractDispatcher`](/5.21/api/phalcon_dispatcher/#dispatcherabstractdispatcher) · [`Phalcon\Http\Request`](/5.21/api/phalcon_http/#httprequest) · [`Phalcon\Http\Response`](/5.21/api/phalcon_http/#httpresponse) · [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.21/api/phalcon_storage/#storageadapterabstractadapter)

### Method Summary

- `public getEventsManager(): ManagerInterface|null` — Returns the internal event manager

- `public setEventsManager(ManagerInterface $eventsManager): void` — Sets the events manager

- `protected fireManagerEvent(string $eventName, mixed $data = null, bool $cancellable = true, bool $stopOnFalse = false): mixed` — Helper method to fire an event

### Properties

- `protected ManagerInterface|null $eventsManager = null`

### Methods

<h4 id="eventstraitseventsawaretrait-geteventsmanager"><code>getEventsManager()</code></h4>

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

<h4 id="eventstraitseventsawaretrait-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

<h4 id="eventstraitseventsawaretrait-firemanagerevent"><code>fireManagerEvent()</code></h4>

```php
protected function fireManagerEvent(
    string $eventName,
    mixed $data = null,
    bool $cancellable = true,
    bool $stopOnFalse = false
): mixed;
```

Helper method to fire an event

Source: https://docs.phalcon.io/5.21/api/phalcon_events/index.mdx
