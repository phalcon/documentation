---
title: "Phalcon Events"
version: "6.0"
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
- [`Phalcon\Acl\Adapter\AbstractAdapter`](/6.0/api/phalcon_acl/#acladapterabstractadapter)
- [`Phalcon\Queue\Consumer\QueueConsumer`](/6.0/api/phalcon_queue/#queueconsumerqueueconsumer)

### Method Summary

<ApiItem href="#eventsabstracteventsaware-geteventsmanager" visibility="public" name="getEventsManager" returnType="ManagerInterface|null" params={[]}>
Returns the internal event manager
</ApiItem>
<ApiItem href="#eventsabstracteventsaware-seteventsmanager" visibility="public" name="setEventsManager" returnType="void" params={[{"type":"ManagerInterface","name":"eventsManager","default":null}]}>
Sets the events manager
</ApiItem>
<ApiItem href="#eventsabstracteventsaware-firemanagerevent" visibility="protected" name="fireManagerEvent" returnType="mixed" params={[{"type":"string","name":"eventName","default":null},{"type":"mixed","name":"data","default":"null"},{"type":"bool","name":"cancellable","default":"true"},{"type":"bool","name":"stopOnFalse","default":"false"}]}>
Helper method to fire an event
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="eventsManager" type="ManagerInterface|null" default="null">
</ApiItem>

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
): mixed;
```

Helper method to fire an event

## Events\Event

Class

Phalcon\Events\Event

This class offers contextual information of a fired event in the
EventsManager

```php
Phalcon\Events\Event;

$event = new Event("db:afterQuery", $this, ["data" => "mydata"], true);
if ($event->isCancelable()) {
$event->stop();
}
```

- **`Phalcon\Events\Event`** - implements [`Phalcon\Events\EventInterface`](#eventseventinterface), [`Phalcon\Contracts\Events\Stoppable`](/6.0/api/phalcon_contracts/#contractseventsstoppable)

`Phalcon\Contracts\Events\Stoppable` · `Phalcon\Events\Exceptions\EventNotCancelable`

### Method Summary

<ApiItem href="#eventsevent-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null},{"type":"object|null","name":"source","default":"null"},{"type":"mixed","name":"data","default":"null"},{"type":"bool","name":"cancelable","default":"true"}]}>
Event constructor.
</ApiItem>
<ApiItem href="#eventsevent-getdata" visibility="public" name="getData" returnType="mixed" params={[]}>
</ApiItem>
<ApiItem href="#eventsevent-getsource" visibility="public" name="getSource" returnType="object|null" params={[]}>
</ApiItem>
<ApiItem href="#eventsevent-gettype" visibility="public" name="getType" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#eventsevent-iscancelable" visibility="public" name="isCancelable" returnType="bool" params={[]}>
Check whether the event is cancelable.
</ApiItem>
<ApiItem href="#eventsevent-ispropagationstopped" visibility="public" name="isPropagationStopped" returnType="bool" params={[]}>
Returns whether propagation must stop. PSR-14 alias backed by the same
</ApiItem>
<ApiItem href="#eventsevent-isstopped" visibility="public" name="isStopped" returnType="bool" params={[]}>
Check whether the event is currently stopped.
</ApiItem>
<ApiItem href="#eventsevent-setdata" visibility="public" name="setData" returnType="EventInterface" params={[{"type":"mixed","name":"data","default":"null"}]}>
Sets event data.
</ApiItem>
<ApiItem href="#eventsevent-settype" visibility="public" name="setType" returnType="EventInterface" params={[{"type":"string","name":"type","default":null}]}>
Sets event type.
</ApiItem>
<ApiItem href="#eventsevent-stop" visibility="public" name="stop" returnType="EventInterface" params={[]}>
Stops the event preventing propagation.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="cancelable" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="data" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="source" type="object|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="stopped" type="bool" default="false">
Is event propagation stopped?
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="string" default="">
</ApiItem>

### Methods

<h4 id="eventsevent-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $type,
object|null $source = null,
mixed $data = null,
bool $cancelable = true
);
```

Event constructor.

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

- [`Phalcon\Contracts\Events\Event`](/6.0/api/phalcon_contracts/#contractseventsevent)
- **`Phalcon\Events\EventInterface`**

`Phalcon\Contracts\Events\Event`

## Events\EventsAwareInterface

Interface

Phalcon\Events\EventsAwareInterface

- [`Phalcon\Contracts\Events\EventsAware`](/6.0/api/phalcon_contracts/#contractseventseventsaware)
- **`Phalcon\Events\EventsAwareInterface`**

`Phalcon\Contracts\Events\EventsAware`

## Events\Exception

Class

Phalcon\Events\Exception

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

<ApiItem href="#eventsexceptionseventnotcancelable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#eventsexceptionsinvalideventhandler-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#eventsexceptionsinvalideventsource-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null},{"type":"string","name":"sourceType","default":null}]}>
</ApiItem>

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

<ApiItem href="#eventsexceptionsinvalideventtype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"eventType","default":null}]}>
</ApiItem>

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

<ApiItem href="#eventsexceptionsinvalidsubscriberconfiguration-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"eventName","default":null}]}>
</ApiItem>

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

<ApiItem href="#eventsexceptionsnolistenersforevent-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"eventType","default":null}]}>
</ApiItem>

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

- **`Phalcon\Events\Manager`** - implements [`Phalcon\Events\ManagerInterface`](#eventsmanagerinterface), `\Psr\EventDispatcher\EventDispatcherInterface`, [`Phalcon\Contracts\Events\Enumerable`](/6.0/api/phalcon_contracts/#contractseventsenumerable)

`Closure` · `Phalcon\Contracts\Events\Enumerable` · `Phalcon\Contracts\Events\Stoppable` · `Phalcon\Contracts\Events\Subscriber` · `Phalcon\Db\Event\AbstractModelEvent` · `Phalcon\Db\Event\ModelEventNameEnum` · `Phalcon\Events\Exceptions\InvalidEventHandler` · `Phalcon\Events\Exceptions\InvalidEventType` · `Phalcon\Events\Exceptions\InvalidSubscriberConfiguration` · `Phalcon\Events\Exceptions\NoListenersForEvent` · `Psr\EventDispatcher\EventDispatcherInterface` · `Psr\EventDispatcher\StoppableEventInterface` · `Throwable`

### Method Summary

<ApiItem href="#eventsmanager-addsubscriber" visibility="public" name="addSubscriber" returnType="void" params={[{"type":"Subscriber","name":"subscriber","default":null}]}>
Registers an event subscriber. The subscriber's getSubscribedEvents()
</ApiItem>
<ApiItem href="#eventsmanager-areprioritiesenabled" visibility="public" name="arePrioritiesEnabled" returnType="bool" params={[]}>
Returns if priorities are enabled
</ApiItem>
<ApiItem href="#eventsmanager-attach" visibility="public" name="attach" returnType="void" params={[{"type":"array|string","name":"eventType","default":null},{"type":"callable|object","name":"handler","default":null},{"type":"int","name":"priority","default":"self::DEFAULT_PRIORITY"}]}>
Attach a listener to the events manager
</ApiItem>
<ApiItem href="#eventsmanager-clearsubscribers" visibility="public" name="clearSubscribers" returnType="void" params={[]}>
Removes every registered subscriber and detaches each listener they
</ApiItem>
<ApiItem href="#eventsmanager-collectresponses" visibility="public" name="collectResponses" returnType="void" params={[{"type":"bool","name":"collect","default":null}]}>
Tells the event manager if it needs to collect all the responses returned
</ApiItem>
<ApiItem href="#eventsmanager-detach" visibility="public" name="detach" returnType="void" params={[{"type":"string","name":"eventType","default":null},{"type":"callable|object","name":"handler","default":null}]}>
Detach the listener from the events manager
</ApiItem>
<ApiItem href="#eventsmanager-detachall" visibility="public" name="detachAll" returnType="void" params={[{"type":"string|null","name":"type","default":"null"}]}>
Removes all events from the EventsManager
</ApiItem>
<ApiItem href="#eventsmanager-dispatch" visibility="public" name="dispatch" returnType="mixed" params={[{"type":"object","name":"event","default":null},{"type":"array|string|null","name":"name","default":"null"},{"type":"object|null","name":"source","default":"null"}]}>
Dispatches an object event to the appropriate event listeners.
</ApiItem>
<ApiItem href="#eventsmanager-enablepriorities" visibility="public" name="enablePriorities" returnType="void" params={[{"type":"bool","name":"enablePriorities","default":null}]}>
Set if priorities are enabled in the EventsManager.
</ApiItem>
<ApiItem href="#eventsmanager-fire" visibility="public" name="fire" returnType="mixed" params={[{"type":"string","name":"eventType","default":null},{"type":"object","name":"source","default":null},{"type":"mixed","name":"data","default":"null"},{"type":"bool","name":"cancelable","default":"true"},{"type":"bool|null","name":"stopOnFalse","default":"null"}]}>
Fires an event in the events manager causing the active listeners to be
</ApiItem>
<ApiItem href="#eventsmanager-fireall" visibility="public" name="fireAll" returnType="array" params={[{"type":"string","name":"eventType","default":null},{"type":"object","name":"source","default":null},{"type":"mixed","name":"data","default":"null"},{"type":"bool","name":"cancelable","default":"true"}]}>
Fires an event and returns every listener's return value as an indexed
</ApiItem>
<ApiItem href="#eventsmanager-firequeue" visibility="public" name="fireQueue" returnType="mixed" params={[{"type":"array","name":"queue","default":null},{"type":"EventInterface","name":"event","default":null}]}>
Internal handler to call a queue of events.
</ApiItem>
<ApiItem href="#eventsmanager-getlistenermap" visibility="public" name="getListenerMap" returnType="array" params={[]}>
Returns every event type that currently has at least one listener,
</ApiItem>
<ApiItem href="#eventsmanager-getlisteners" visibility="public" name="getListeners" returnType="array" params={[{"type":"string","name":"type","default":null}]}>
Returns all the attached listeners of a certain type
</ApiItem>
<ApiItem href="#eventsmanager-getmethodexistscachelimit" visibility="public" name="getMethodExistsCacheLimit" returnType="int" params={[]}>
Returns the configured method_exists-cache cap (0 = unlimited).
</ApiItem>
<ApiItem href="#eventsmanager-getresponses" visibility="public" name="getResponses" returnType="array" params={[]}>
Returns all the responses returned by every handler executed by the last
</ApiItem>
<ApiItem href="#eventsmanager-getsubscribers" visibility="public" name="getSubscribers" returnType="array" params={[]}>
Returns the list of registered subscriber instances.
</ApiItem>
<ApiItem href="#eventsmanager-halt" visibility="public" name="halt" returnType="void" params={[]}>
Manager-level kill switch. After halt(), every fire()/fireAll()/
</ApiItem>
<ApiItem href="#eventsmanager-haslisteners" visibility="public" name="hasListeners" returnType="bool" params={[{"type":"string","name":"type","default":null}]}>
Check whether certain type of event has listeners
</ApiItem>
<ApiItem href="#eventsmanager-iscollecting" visibility="public" name="isCollecting" returnType="bool" params={[]}>
Check if the events manager is collecting all the responses returned by
</ApiItem>
<ApiItem href="#eventsmanager-ishalted" visibility="public" name="isHalted" returnType="bool" params={[]}>
Returns whether the manager-level kill switch is engaged. See halt().
</ApiItem>
<ApiItem href="#eventsmanager-isstoponfalse" visibility="public" name="isStopOnFalse" returnType="bool" params={[]}>
Returns whether the stop-on-false short-circuit is enabled.
</ApiItem>
<ApiItem href="#eventsmanager-isstrict" visibility="public" name="isStrict" returnType="bool" params={[]}>
Returns whether strict mode is enabled.
</ApiItem>
<ApiItem href="#eventsmanager-isvalidhandler" visibility="public" name="isValidHandler" returnType="bool" params={[{"type":"mixed","name":"handler","default":null}]}>
</ApiItem>
<ApiItem href="#eventsmanager-removesubscriber" visibility="public" name="removeSubscriber" returnType="void" params={[{"type":"Subscriber","name":"subscriber","default":null}]}>
Removes a previously registered subscriber. Detaches every listener the
</ApiItem>
<ApiItem href="#eventsmanager-resume" visibility="public" name="resume" returnType="void" params={[]}>
Clears the manager-level kill switch set by halt().
</ApiItem>
<ApiItem href="#eventsmanager-setmethodexistscachelimit" visibility="public" name="setMethodExistsCacheLimit" returnType="void" params={[{"type":"int","name":"methodExistsCacheLimit","default":null}]}>
Caps the number of distinct handler classes retained in the
</ApiItem>
<ApiItem href="#eventsmanager-setstoponfalse" visibility="public" name="setStopOnFalse" returnType="void" params={[{"type":"bool","name":"flag","default":null}]}>
Enables/disables the stop-on-false short-circuit. Default off.
</ApiItem>
<ApiItem href="#eventsmanager-setstrict" visibility="public" name="setStrict" returnType="void" params={[{"type":"bool","name":"strict","default":null}]}>
Enables/disables strict mode. When true, fire()/fireAll() throw when
</ApiItem>
<ApiItem href="#eventsmanager-afterfire" visibility="protected" name="afterFire" returnType="mixed" params={[{"type":"mixed","name":"status","default":null},{"type":"string","name":"eventType","default":null},{"type":"object","name":"source","default":null},{"type":"mixed","name":"data","default":"null"},{"type":"bool","name":"cancelable","default":"true"}]}>
Extension seam invoked after an event has been dispatched to its
</ApiItem>
<ApiItem href="#eventsmanager-beforefire" visibility="protected" name="beforeFire" returnType="bool" params={[{"type":"string","name":"eventType","default":null},{"type":"object","name":"source","default":null},{"type":"mixed","name":"data","default":"null"},{"type":"bool","name":"cancelable","default":"true"}]}>
Extension seam invoked before an event is dispatched. The base
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="collect" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="enablePriorities" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="eventNameCache" type="array" default="[]">
Parsed-eventType cache. Memoizes the strpos + substr work done in
fire() so the same event name fired repeatedly collapses to a single
hash lookup.

Shape: `eventNameCache[$eventType] = [typePrefix, eventName]`
</ApiItem>
<ApiItem kind="property" visibility="protected" name="events" type="array" default="[]">
Listener storage. Shape:

  events[$eventType] = [
      [handler, type, priority]            // types 0, 1, 3
      [handler, type, priority, className] // type 2 carries
                                           // resolved class name
      ...
  ]

`type` is classified once at attach() time so the dispatch loop can
route via a simple branch:

  0 - Closure
  1 - [obj, method] array callable
  2 - plain object: method named after the event
  3 - generic callable (string fn name, invokable object, etc.)
</ApiItem>
<ApiItem kind="property" visibility="protected" name="fireDepth" type="int" default="0">
Re-entrancy depth of fire()/fireAll(). 0 means no fire is in progress.
Used to keep nested fire() calls from clobbering the outer caller's
`$this->responses` accumulator.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="halted" type="bool" default="false">
Manager-level kill switch. When true, every fire()/fireAll()/
fireQueue() call returns immediately without dispatching. Cleared by
resume().
</ApiItem>
<ApiItem kind="property" visibility="protected" name="methodExistsCache" type="array" default="[]">
Memoized method_exists() results for the plain-object dispatch path.
Keyed by `handlerClass => [methodName => bool]`.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="methodExistsCacheLimit" type="int" default="0">
Maximum number of distinct handler classes retained in
methodExistsCache. 0 (default) keeps the unbounded behavior.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="responses" type="array&lt;array-key, mixed&gt;" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="stopOnFalse" type="bool" default="false">
When true, a listener returning literal `false` (with the event's
`cancelable` flag on) short-circuits the dispatch loop and pins the
fire() return as `false`. Default off.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="strict" type="bool" default="false">
When true, fire()/fireAll() throw on dispatch of an event that has zero
matching listeners. Default off.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="subscriberEventsCache" type="array" default="[]">
Memoized getSubscribedEvents() maps keyed by Subscriber class name.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="subscribers" type="array" default="[]">
</ApiItem>

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
array|string $eventType,
callable|object $handler,
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
callable|object $handler
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
array|string|null $name = null,
object|null $source = null
): mixed;
```

Dispatches an object event to the appropriate event listeners.

PSR-14 shaped: listeners receive the (possibly mutated) event object.
Propagation stops when the event implements
\{@see StoppableEventInterface\} and reports it is stopped.

<h4 id="eventsmanager-enablepriorities"><code>enablePriorities()</code></h4>

```php
public function enablePriorities( bool $enablePriorities ): void;
```

Set if priorities are enabled in the EventsManager.

<h4 id="eventsmanager-fire"><code>fire()</code></h4>

```php
public function fire(
string $eventType,
object $source,
mixed $data = null,
bool $cancelable = true,
bool|null $stopOnFalse = null
): mixed;
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

Fires an event and returns every listener's return value as an indexed
array. Independent of collectResponses(); the caller's collected state
on `$this->responses` is preserved (stashed and restored).

<h4 id="eventsmanager-firequeue"><code>fireQueue()</code></h4>

```php
final public function fireQueue(
array $queue,
EventInterface $event
): mixed;
```

Internal handler to call a queue of events.

Kept as a thin BC wrapper around the private dispatch loop.

<h4 id="eventsmanager-getlistenermap"><code>getListenerMap()</code></h4>

```php
public function getListenerMap(): array;
```

Returns every event type that currently has at least one listener,
mapped to that type's listeners. Types contributed by subscribers are
included, because addSubscriber() attaches through the regular listener
pipeline.

Unwrapping is delegated to getListeners() so the internal shape of
$this->events is read in exactly one place.

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

Returns the list of registered subscriber instances.

<h4 id="eventsmanager-halt"><code>halt()</code></h4>

```php
public function halt(): void;
```

Manager-level kill switch. After halt(), every fire()/fireAll()/
fireQueue() call returns immediately without dispatching, until
resume() is called.

<h4 id="eventsmanager-haslisteners"><code>hasListeners()</code></h4>

```php
public function hasListeners( string $type ): bool;
```

Check whether certain type of event has listeners

<h4 id="eventsmanager-iscollecting"><code>isCollecting()</code></h4>

```php
public function isCollecting(): bool;
```

Check if the events manager is collecting all the responses returned by
every registered listener in a single fire

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

<h4 id="eventsmanager-isstrict"><code>isStrict()</code></h4>

```php
public function isStrict(): bool;
```

Returns whether strict mode is enabled.

<h4 id="eventsmanager-isvalidhandler"><code>isValidHandler()</code></h4>

```php
public function isValidHandler( mixed $handler ): bool;
```

<h4 id="eventsmanager-removesubscriber"><code>removeSubscriber()</code></h4>

```php
public function removeSubscriber( Subscriber $subscriber ): void;
```

Removes a previously registered subscriber. Detaches every listener the
subscriber declared via getSubscribedEvents(). Idempotent.

<h4 id="eventsmanager-resume"><code>resume()</code></h4>

```php
public function resume(): void;
```

Clears the manager-level kill switch set by halt().

<h4 id="eventsmanager-setmethodexistscachelimit"><code>setMethodExistsCacheLimit()</code></h4>

```php
public function setMethodExistsCacheLimit( int $methodExistsCacheLimit ): void;
```

Caps the number of distinct handler classes retained in the
method_exists memoization cache. 0 disables the cap.

<h4 id="eventsmanager-setstoponfalse"><code>setStopOnFalse()</code></h4>

```php
public function setStopOnFalse( bool $flag ): void;
```

Enables/disables the stop-on-false short-circuit. Default off.

<h4 id="eventsmanager-setstrict"><code>setStrict()</code></h4>

```php
public function setStrict( bool $strict ): void;
```

Enables/disables strict mode. When true, fire()/fireAll() throw when
dispatching an event with zero matching listeners.

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
listener queues. The base implementation returns `status` unchanged.

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
implementation returns true, so dispatch proceeds. Returning false
aborts the dispatch entirely.

## Events\ManagerInterface

Interface

Phalcon\Events\ManagerInterface

- [`Phalcon\Contracts\Events\Manager`](/6.0/api/phalcon_contracts/#contractseventsmanager)
- **`Phalcon\Events\ManagerInterface`**

`Phalcon\Contracts\Events\Manager`

## Events\PsrEventInterface

Interface

- **`Phalcon\Events\PsrEventInterface`**

## Events\Traits\EventsAwareTrait

Trait

- **`Phalcon\Events\Traits\EventsAwareTrait`**

`Phalcon\Events\Exception` · `Phalcon\Events\Manager` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\PsrEventInterface`

[`Phalcon\Application\AbstractApplication`](/6.0/api/phalcon_application/#applicationabstractapplication) · [`Phalcon\Auth\Guard\AbstractGuard`](/6.0/api/phalcon_auth/#authguardabstractguard) · [`Phalcon\Autoload\Loader`](/6.0/api/phalcon_autoload/#autoloadloader) · [`Phalcon\Cache\AbstractCache`](/6.0/api/phalcon_cache/#cacheabstractcache) · [`Phalcon\Cli\Task`](/6.0/api/phalcon_cli/#clitask) · [`Phalcon\DataMapper\Pdo\ConnectionLocator`](/6.0/api/phalcon_datamapper/#datamapperpdoconnectionlocator) · [`Phalcon\DataMapper\Pdo\Connection\AbstractConnection`](/6.0/api/phalcon_datamapper/#datamapperpdoconnectionabstractconnection) · [`Phalcon\Db\Adapter\AbstractAdapter`](/6.0/api/phalcon_db/#dbadapterabstractadapter) · [`Phalcon\Di\Di`](/6.0/api/phalcon_di/#didi) · [`Phalcon\Dispatcher\AbstractDispatcher`](/6.0/api/phalcon_dispatcher/#dispatcherabstractdispatcher) · [`Phalcon\Http\Request`](/6.0/api/phalcon_http/#httprequest) · [`Phalcon\Http\Response`](/6.0/api/phalcon_http/#httpresponse) · [`Phalcon\Mvc\Controller`](/6.0/api/phalcon_mvc/#mvccontroller) · [`Phalcon\Mvc\Dispatcher`](/6.0/api/phalcon_mvc/#mvcdispatcher) · [`Phalcon\Mvc\Micro`](/6.0/api/phalcon_mvc/#mvcmicro) · [`Phalcon\Mvc\Model\Manager`](/6.0/api/phalcon_mvc/#mvcmodelmanager) · [`Phalcon\Mvc\Router`](/6.0/api/phalcon_mvc/#mvcrouter) · [`Phalcon\Mvc\View`](/6.0/api/phalcon_mvc/#mvcview) · [`Phalcon\Mvc\View\Engine\AbstractEngine`](/6.0/api/phalcon_mvc/#mvcviewengineabstractengine) · [`Phalcon\Mvc\View\Simple`](/6.0/api/phalcon_mvc/#mvcviewsimple) · [`Phalcon\Storage\Adapter\AbstractAdapter`](/6.0/api/phalcon_storage/#storageadapterabstractadapter)

### Method Summary

<ApiItem href="#eventstraitseventsawaretrait-geteventsmanager" visibility="public" name="getEventsManager" returnType="ManagerInterface|null" params={[]}>
Returns the internal event manager
</ApiItem>
<ApiItem href="#eventstraitseventsawaretrait-seteventsmanager" visibility="public" name="setEventsManager" returnType="void" params={[{"type":"ManagerInterface","name":"eventsManager","default":null}]}>
Sets the events manager
</ApiItem>
<ApiItem href="#eventstraitseventsawaretrait-firemanagerevent" visibility="protected" name="fireManagerEvent" returnType="" params={[{"type":"string","name":"eventName","default":null},{"type":"mixed","name":"data","default":"null"},{"type":"bool","name":"cancellable","default":"true"},{"type":"bool","name":"stopOnFalse","default":"false"}]}>
Helper method to fire an event
</ApiItem>
<ApiItem href="#eventstraitseventsawaretrait-firepsrevent" visibility="protected" name="firePsrEvent" returnType="mixed" params={[{"type":"PsrEventInterface","name":"event","default":null},{"type":"string|null","name":"name","default":"null"}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="eventsManager" type="ManagerInterface|null" default="null">
</ApiItem>

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
);
```

Helper method to fire an event

<h4 id="eventstraitseventsawaretrait-firepsrevent"><code>firePsrEvent()</code></h4>

```php
protected function firePsrEvent(
PsrEventInterface $event,
string|null $name = null
): mixed;
```

Source: https://docs.phalcon.io/6.0/api/phalcon_events/index.mdx
