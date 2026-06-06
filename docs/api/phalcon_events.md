---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Events\AbstractEventsAware

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/AbstractEventsAware.zep){ .src-btn }

This abstract class offers access to the events manager

<div class="api-tree" markdown>

- **`Phalcon\Events\AbstractEventsAware`**
    - [`Phalcon\Acl\Adapter\AbstractAdapter`](phalcon_acl.md#acladapterabstractadapter)
    - [`Phalcon\Auth\Guard\AbstractGuard`](phalcon_auth.md#authguardabstractguard)
    - [`Phalcon\Autoload\Loader`](phalcon_autoload.md#autoloadloader)

</div>

__Uses__ `Phalcon\Events\ManagerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsabstracteventsaware-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#eventsabstracteventsaware-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#eventsabstracteventsaware-firemanagerevent">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed|bool</code>
<code class="sig">fireManagerEvent(
    string $eventName,
    mixed $data = null,
    bool $cancellable = true
)</code>
<span class="desc">Helper method to fire an event</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$eventsManager = null` `ManagerInterface|null`

</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getEventsManager()` { #eventsabstracteventsaware-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `setEventsManager()` { #eventsabstracteventsaware-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

<div class="api-group">Protected · 1</div>

#### `fireManagerEvent()` { #eventsabstracteventsaware-firemanagerevent }

```php
protected function fireManagerEvent(
    string $eventName,
    mixed $data = null,
    bool $cancellable = true
): mixed|bool;
```

Helper method to fire an event


## Events\Event

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Event.zep){ .src-btn }

This class offers contextual information of a fired event in the
EventsManager

```php
Phalcon\Events\Event;

$event = new Event("db:afterQuery", $this, ["data" => "mydata"], true);
if ($event->isCancelable()) {
    $event->stop();
}
```

<div class="api-tree" markdown>

- **`Phalcon\Events\Event`** — implements [`Phalcon\Events\EventInterface`](#eventseventinterface), [`Phalcon\Contracts\Events\Stoppable`](phalcon_contracts.md#contractseventsstoppable)

</div>

__Uses__ `Phalcon\Contracts\Events\Stoppable` · `Phalcon\Events\Exceptions\EventNotCancelable` · `Phalcon\Events\Exceptions\InvalidEventSource`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsevent-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $type,
    mixed $source = null,
    mixed $data = null,
    bool $cancelable = true
)</code>
<span class="desc">Phalcon\Events\Event constructor</span>
</a>
<a class="api-item" href="#eventsevent-getdata">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getData()</code>
</a>
<a class="api-item" href="#eventsevent-getsource">
<code class="vis vis-public">public</code>
<code class="ret">object|null</code>
<code class="sig">getSource()</code>
</a>
<a class="api-item" href="#eventsevent-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getType()</code>
</a>
<a class="api-item" href="#eventsevent-iscancelable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isCancelable()</code>
<span class="desc">Check whether the event is cancelable.</span>
</a>
<a class="api-item" href="#eventsevent-ispropagationstopped">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isPropagationStopped()</code>
<span class="desc">Returns whether propagation must stop. PSR-14 alias backed by the same</span>
</a>
<a class="api-item" href="#eventsevent-isstopped">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isStopped()</code>
<span class="desc">Check whether the event is currently stopped.</span>
</a>
<a class="api-item" href="#eventsevent-setdata">
<code class="vis vis-public">public</code>
<code class="ret">EventInterface</code>
<code class="sig">setData( mixed $data = null )</code>
<span class="desc">Sets event data.</span>
</a>
<a class="api-item" href="#eventsevent-settype">
<code class="vis vis-public">public</code>
<code class="ret">EventInterface</code>
<code class="sig">setType( string $type )</code>
<span class="desc">Sets event type.</span>
</a>
<a class="api-item" href="#eventsevent-stop">
<code class="vis vis-public">public</code>
<code class="ret">EventInterface</code>
<code class="sig">stop()</code>
<span class="desc">Stops the event preventing propagation.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$cancelable` `bool`

    Is event cancelable?

-   `protected`{ .vis-protected } `$data` `mixed`

    Event data

-   `protected`{ .vis-protected } `$source = null` `object|null`

    Event source

-   `protected`{ .vis-protected } `$stopped = false` `bool`

    Is event propagation stopped?

-   `protected`{ .vis-protected } `$type` `string`

    Event type

</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__construct()` { #eventsevent-__construct }

```php
public function __construct(
    string $type,
    mixed $source = null,
    mixed $data = null,
    bool $cancelable = true
);
```

Phalcon\Events\Event constructor

#### `getData()` { #eventsevent-getdata }

```php
public function getData(): mixed;
```

#### `getSource()` { #eventsevent-getsource }

```php
public function getSource(): object|null;
```

#### `getType()` { #eventsevent-gettype }

```php
public function getType(): string;
```

#### `isCancelable()` { #eventsevent-iscancelable }

```php
public function isCancelable(): bool;
```

Check whether the event is cancelable.

```php
if ($event->isCancelable()) {
    $event->stop();
}
```

#### `isPropagationStopped()` { #eventsevent-ispropagationstopped }

```php
public function isPropagationStopped(): bool;
```

Returns whether propagation must stop. PSR-14 alias backed by the same
`stopped` flag as `isStopped()`; calling `stop()` flips both.

#### `isStopped()` { #eventsevent-isstopped }

```php
public function isStopped(): bool;
```

Check whether the event is currently stopped.

#### `setData()` { #eventsevent-setdata }

```php
public function setData( mixed $data = null ): EventInterface;
```

Sets event data.

#### `setType()` { #eventsevent-settype }

```php
public function setType( string $type ): EventInterface;
```

Sets event type.

#### `stop()` { #eventsevent-stop }

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

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/EventInterface.zep){ .src-btn }

Phalcon\Events\EventInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Events\Event} instead.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Events\Event`](phalcon_contracts.md#contractseventsevent)
    - **`Phalcon\Events\EventInterface`**

</div>

__Uses__ `Phalcon\Contracts\Events\Event`
{ .api-uses }


## Events\EventsAwareInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/EventsAwareInterface.zep){ .src-btn }

Phalcon\Events\EventsAwareInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Events\EventsAware} instead.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Events\EventsAware`](phalcon_contracts.md#contractseventseventsaware)
    - **`Phalcon\Events\EventsAwareInterface`**

</div>

__Uses__ `Phalcon\Contracts\Events\EventsAware`
{ .api-uses }


## Events\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Events will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Events\Exception`**
        - [`Phalcon\Events\Exceptions\EventNotCancelable`](#eventsexceptionseventnotcancelable)
        - [`Phalcon\Events\Exceptions\InvalidEventHandler`](#eventsexceptionsinvalideventhandler)
        - [`Phalcon\Events\Exceptions\InvalidEventSource`](#eventsexceptionsinvalideventsource)
        - [`Phalcon\Events\Exceptions\InvalidEventType`](#eventsexceptionsinvalideventtype)
        - [`Phalcon\Events\Exceptions\InvalidSubscriberConfiguration`](#eventsexceptionsinvalidsubscriberconfiguration)
        - [`Phalcon\Events\Exceptions\NoListenersForEvent`](#eventsexceptionsnolistenersforevent)

</div>


## Events\Exceptions\EventNotCancelable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Exceptions/EventNotCancelable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Events\Exception`](#eventsexception)
        - **`Phalcon\Events\Exceptions\EventNotCancelable`**

</div>

__Uses__ `Phalcon\Events\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsexceptionseventnotcancelable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #eventsexceptionseventnotcancelable-__construct }

```php
public function __construct();
```


## Events\Exceptions\InvalidEventHandler

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Exceptions/InvalidEventHandler.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Events\Exception`](#eventsexception)
        - **`Phalcon\Events\Exceptions\InvalidEventHandler`**

</div>

__Uses__ `Phalcon\Events\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsexceptionsinvalideventhandler-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #eventsexceptionsinvalideventhandler-__construct }

```php
public function __construct();
```


## Events\Exceptions\InvalidEventSource

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Exceptions/InvalidEventSource.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Events\Exception`](#eventsexception)
        - **`Phalcon\Events\Exceptions\InvalidEventSource`**

</div>

__Uses__ `Phalcon\Events\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsexceptionsinvalideventsource-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $type,
    string $sourceType
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #eventsexceptionsinvalideventsource-__construct }

```php
public function __construct(
    string $type,
    string $sourceType
);
```


## Events\Exceptions\InvalidEventType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Exceptions/InvalidEventType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Events\Exception`](#eventsexception)
        - **`Phalcon\Events\Exceptions\InvalidEventType`**

</div>

__Uses__ `Phalcon\Events\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsexceptionsinvalideventtype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $eventType )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #eventsexceptionsinvalideventtype-__construct }

```php
public function __construct( string $eventType );
```


## Events\Exceptions\InvalidSubscriberConfiguration

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Exceptions/InvalidSubscriberConfiguration.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Events\Exception`](#eventsexception)
        - **`Phalcon\Events\Exceptions\InvalidSubscriberConfiguration`**

</div>

__Uses__ `Phalcon\Events\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsexceptionsinvalidsubscriberconfiguration-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $eventName )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #eventsexceptionsinvalidsubscriberconfiguration-__construct }

```php
public function __construct( string $eventName );
```


## Events\Exceptions\NoListenersForEvent

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Exceptions/NoListenersForEvent.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Events\Exception`](#eventsexception)
        - **`Phalcon\Events\Exceptions\NoListenersForEvent`**

</div>

__Uses__ `Phalcon\Events\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsexceptionsnolistenersforevent-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $eventType )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #eventsexceptionsnolistenersforevent-__construct }

```php
public function __construct( string $eventType );
```


## Events\Manager

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/Manager.zep){ .src-btn }

Phalcon Events Manager, offers an easy way to intercept and manipulate, if
needed, the normal flow of operation. With the EventsManager the developer
can create hooks or plugins that will offer monitoring of data, manipulation,
conditional execution and much more.

<div class="api-tree" markdown>

- **`Phalcon\Events\Manager`** — implements [`Phalcon\Events\ManagerInterface`](#eventsmanagerinterface)

</div>

__Uses__ `Closure` · `Phalcon\Contracts\Events\Subscriber` · `Phalcon\Events\Exceptions\InvalidEventHandler` · `Phalcon\Events\Exceptions\InvalidEventType` · `Phalcon\Events\Exceptions\InvalidSubscriberConfiguration` · `Phalcon\Events\Exceptions\NoListenersForEvent`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsmanager-addsubscriber">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">addSubscriber( Subscriber $subscriber )</code>
<span class="desc">Registers an event subscriber. The subscriber&#039;s getSubscribedEvents()</span>
</a>
<a class="api-item" href="#eventsmanager-areprioritiesenabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">arePrioritiesEnabled()</code>
<span class="desc">Returns if priorities are enabled</span>
</a>
<a class="api-item" href="#eventsmanager-attach">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">attach(
    string $eventType,
    mixed $handler,
    int $priority = self::DEFAULT_PRIORITY
)</code>
<span class="desc">Attach a listener to the events manager</span>
</a>
<a class="api-item" href="#eventsmanager-clearsubscribers">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">clearSubscribers()</code>
<span class="desc">Removes every registered subscriber and detaches each listener they</span>
</a>
<a class="api-item" href="#eventsmanager-collectresponses">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">collectResponses( bool $collect )</code>
<span class="desc">Tells the event manager if it needs to collect all the responses returned</span>
</a>
<a class="api-item" href="#eventsmanager-detach">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">detach(
    string $eventType,
    mixed $handler
)</code>
<span class="desc">Detach the listener from the events manager</span>
</a>
<a class="api-item" href="#eventsmanager-detachall">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">detachAll( string $type = null )</code>
<span class="desc">Removes all events from the EventsManager</span>
</a>
<a class="api-item" href="#eventsmanager-enablepriorities">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">enablePriorities( bool $enablePriorities )</code>
<span class="desc">Set if priorities are enabled in the EventsManager.</span>
</a>
<a class="api-item" href="#eventsmanager-fire">
<code class="vis vis-public">public</code>
<code class="sig">fire(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
)</code>
<span class="desc">Fires an event in the events manager causing the active listeners to be</span>
</a>
<a class="api-item" href="#eventsmanager-fireall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">fireAll(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
)</code>
<span class="desc">Fires an event and returns every listener&#039;s return value as an</span>
</a>
<a class="api-item" href="#eventsmanager-firequeue">
<code class="vis vis-public">public</code>
<code class="sig">fireQueue(
    array $queue,
    EventInterface $event
)</code>
<span class="desc">Internal handler to call a queue of events.</span>
</a>
<a class="api-item" href="#eventsmanager-getlisteners">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getListeners( string $type )</code>
<span class="desc">Returns all the attached listeners of a certain type</span>
</a>
<a class="api-item" href="#eventsmanager-getmethodexistscachelimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getMethodExistsCacheLimit()</code>
<span class="desc">Returns the configured method_exists-cache cap (0 = unlimited).</span>
</a>
<a class="api-item" href="#eventsmanager-getresponses">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getResponses()</code>
<span class="desc">Returns all the responses returned by every handler executed by the last</span>
</a>
<a class="api-item" href="#eventsmanager-getsubscribers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSubscribers()</code>
<span class="desc">Returns the list of registered subscriber instances. Useful for</span>
</a>
<a class="api-item" href="#eventsmanager-halt">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">halt()</code>
<span class="desc">Manager-level kill switch. After halt(), every fire()/fireAll()/</span>
</a>
<a class="api-item" href="#eventsmanager-haslisteners">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasListeners( string $type )</code>
<span class="desc">Check whether certain type of event has listeners</span>
</a>
<a class="api-item" href="#eventsmanager-iscollecting">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isCollecting()</code>
<span class="desc">Check if the events manager is collecting all all the responses returned</span>
</a>
<a class="api-item" href="#eventsmanager-ishalted">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isHalted()</code>
<span class="desc">Returns whether the manager-level kill switch is engaged. See halt().</span>
</a>
<a class="api-item" href="#eventsmanager-isstoponfalse">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isStopOnFalse()</code>
<span class="desc">Returns whether the stop-on-false short-circuit is enabled.</span>
</a>
<a class="api-item" href="#eventsmanager-isstrict">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isStrict()</code>
<span class="desc">Returns whether strict mode is enabled. When true, fire()/fireAll()</span>
</a>
<a class="api-item" href="#eventsmanager-isvalidhandler">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isValidHandler( mixed $handler )</code>
</a>
<a class="api-item" href="#eventsmanager-removesubscriber">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">removeSubscriber( Subscriber $subscriber )</code>
<span class="desc">Removes a previously registered subscriber. Detaches every listener the</span>
</a>
<a class="api-item" href="#eventsmanager-resume">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resume()</code>
<span class="desc">Clears the manager-level kill switch set by halt(). Subsequent</span>
</a>
<a class="api-item" href="#eventsmanager-setmethodexistscachelimit">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setMethodExistsCacheLimit( int $methodExistsCacheLimit )</code>
<span class="desc">Caps the number of distinct handler classes retained in the</span>
</a>
<a class="api-item" href="#eventsmanager-setstoponfalse">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setStopOnFalse( bool $flag )</code>
<span class="desc">Enables/disables the stop-on-false short-circuit. When true, a</span>
</a>
<a class="api-item" href="#eventsmanager-setstrict">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setStrict( bool $strict )</code>
<span class="desc">Enables/disables strict mode. When true, fire()/fireAll() throw</span>
</a>
<a class="api-item" href="#eventsmanager-afterfire">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig">afterFire(
    mixed $status,
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
)</code>
<span class="desc">Extension seam invoked after an event has been dispatched to its</span>
</a>
<a class="api-item" href="#eventsmanager-beforefire">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">beforeFire(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
)</code>
<span class="desc">Extension seam invoked before an event is dispatched. The base</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$collect = false` `bool`

-   `protected`{ .vis-protected } `$enablePriorities = false` `bool`

-   `protected`{ .vis-protected } `$eventNameCache = []` `array`

    Parsed-eventType cache. Memoizes the strpos + substr work done in
    fire() so the same event name fired repeatedly (the common case
    for db:beforeQuery, model:afterSave, etc.) collapses to a single
    hash lookup.

    Shape: `eventNameCache[$eventType] = [typePrefix, eventName]`

    Unbounded by design - distinct event types in a typical Phalcon
    application are well under 100 keys, and the cache never needs
    invalidation (parse is deterministic for a given eventType string).

-   `protected`{ .vis-protected } `$events = []` `array`

    Listener storage. Shape:

      events[$eventType] = [
          [handler, type, priority]            // types 0, 1, 3
          [handler, type, priority, className] // type 2 carries
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
      1 - [obj, method] array callable: direct dynamic dispatch
          `handler[0]->{handler[1]}(args)`
      2 - plain object: dynamic dispatch via method named after the
          event (the classic Phalcon listener pattern); class name is
          captured at attach time to skip get_class() per fire
      3 - generic callable (string fn name, invokable object,
          [class, staticMethod]): call_user_func_array

-   `protected`{ .vis-protected } `$fireDepth = 0` `int`

    Re-entrancy depth of fire()/fireAll(). 0 means no fire is in
    progress. Incremented on every fire entry, decremented on exit.
    Used to keep nested fire() calls from clobbering the outer
    caller's `$this->responses` accumulator.

-   `protected`{ .vis-protected } `$halted = false` `bool`

    Manager-level kill switch. When true, every fire()/fireAll()/
    fireQueue() call returns immediately (null or empty array) without
    dispatching. Cleared by resume(). Survives across fire() calls,
    unlike Event::stop() which only stops the current dispatch chain.

-   `protected`{ .vis-protected } `$methodExistsCache = []` `array`

    Memoized method_exists() results for the OBJECT_METHOD dispatch
    path in dispatch(). Keyed by `handlerClass => [methodName => bool]`.
    A class doesn't gain methods at runtime so the lookup is permanent.

-   `protected`{ .vis-protected } `$methodExistsCacheLimit = 0` `int`

    Maximum number of distinct handler classes retained in
    methodExistsCache. 0 (default) keeps the original unbounded
    behavior; a positive value clears the cache when adding a new
    class would exceed it. Re-warming is cheap (method_exists is
    O(1)) and the cap is meant for very long-lived workers that see
    many distinct listener classes over time.

-   `protected`{ .vis-protected } `$responses = []` `array`

-   `protected`{ .vis-protected } `$stopOnFalse = false` `bool`

    When true, a listener returning literal `false` (with the event's
    `cancelable` flag on) short-circuits the dispatch loop and pins
    the fire() return as `false`. Default off - preserves the pre-5.13
    "last-wins" contract for codebases that rely on later listeners
    overriding an earlier false return [#17019].

-   `protected`{ .vis-protected } `$strict = false` `bool`

    When true, fire()/fireAll() throw on dispatch of an event that
    has zero matching listeners. Catches typos in dev. Default off.

-   `protected`{ .vis-protected } `$subscriberEventsCache = []` `array`

    Memoized getSubscribedEvents() maps keyed by Subscriber class name.
    The static method's return is stable for the lifetime of a class
    definition, so the cache never needs invalidation.

-   `protected`{ .vis-protected } `$subscribers = []` `array`

</div>

### Methods

<div class="api-group">Public · 27</div>

#### `addSubscriber()` { #eventsmanager-addsubscriber }

```php
public function addSubscriber( Subscriber $subscriber ): void;
```

Registers an event subscriber. The subscriber's getSubscribedEvents()
map is parsed and each entry is attached through the regular listener
pipeline.

#### `arePrioritiesEnabled()` { #eventsmanager-areprioritiesenabled }

```php
public function arePrioritiesEnabled(): bool;
```

Returns if priorities are enabled

#### `attach()` { #eventsmanager-attach }

```php
final public function attach(
    string $eventType,
    mixed $handler,
    int $priority = self::DEFAULT_PRIORITY
): void;
```

Attach a listener to the events manager

#### `clearSubscribers()` { #eventsmanager-clearsubscribers }

```php
public function clearSubscribers(): void;
```

Removes every registered subscriber and detaches each listener they
contributed. Listeners attached via attach() are untouched.

Iterates a snapshot of `subscribers` so removeSubscriber() can safely
mutate the original property during the walk.

#### `collectResponses()` { #eventsmanager-collectresponses }

```php
public function collectResponses( bool $collect ): void;
```

Tells the event manager if it needs to collect all the responses returned
by every registered listener in a single fire

#### `detach()` { #eventsmanager-detach }

```php
public function detach(
    string $eventType,
    mixed $handler
): void;
```

Detach the listener from the events manager

#### `detachAll()` { #eventsmanager-detachall }

```php
public function detachAll( string $type = null ): void;
```

Removes all events from the EventsManager

#### `enablePriorities()` { #eventsmanager-enablepriorities }

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

#### `fire()` { #eventsmanager-fire }

```php
public function fire(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
);
```

Fires an event in the events manager causing the active listeners to be
notified about it

```php
$eventsManager->fire("db", $connection);
```

#### `fireAll()` { #eventsmanager-fireall }

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

#### `fireQueue()` { #eventsmanager-firequeue }

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

#### `getListeners()` { #eventsmanager-getlisteners }

```php
public function getListeners( string $type ): array;
```

Returns all the attached listeners of a certain type

#### `getMethodExistsCacheLimit()` { #eventsmanager-getmethodexistscachelimit }

```php
public function getMethodExistsCacheLimit(): int;
```

Returns the configured method_exists-cache cap (0 = unlimited).
See setMethodExistsCacheLimit().

#### `getResponses()` { #eventsmanager-getresponses }

```php
public function getResponses(): array;
```

Returns all the responses returned by every handler executed by the last
'fire' executed

#### `getSubscribers()` { #eventsmanager-getsubscribers }

```php
public function getSubscribers(): array;
```

Returns the list of registered subscriber instances. Useful for
introspection and test setup/teardown.

#### `halt()` { #eventsmanager-halt }

```php
public function halt(): void;
```

Manager-level kill switch. After halt(), every fire()/fireAll()/
fireQueue() call returns immediately without dispatching, until
resume() is called. Use this when a listener needs to abort all
subsequent event activity for the lifetime of the manager (e.g.
a security check that cancels everything downstream).

#### `hasListeners()` { #eventsmanager-haslisteners }

```php
public function hasListeners( string $type ): bool;
```

Check whether certain type of event has listeners

#### `isCollecting()` { #eventsmanager-iscollecting }

```php
public function isCollecting(): bool;
```

Check if the events manager is collecting all all the responses returned
by every registered listener in a single fire

#### `isHalted()` { #eventsmanager-ishalted }

```php
public function isHalted(): bool;
```

Returns whether the manager-level kill switch is engaged. See halt().

#### `isStopOnFalse()` { #eventsmanager-isstoponfalse }

```php
public function isStopOnFalse(): bool;
```

Returns whether the stop-on-false short-circuit is enabled.
See setStopOnFalse().

#### `isStrict()` { #eventsmanager-isstrict }

```php
public function isStrict(): bool;
```

Returns whether strict mode is enabled. When true, fire()/fireAll()
throw when an event has no matching listeners - useful in dev to
catch typos. Default off.

#### `isValidHandler()` { #eventsmanager-isvalidhandler }

```php
public function isValidHandler( mixed $handler ): bool;
```

#### `removeSubscriber()` { #eventsmanager-removesubscriber }

```php
public function removeSubscriber( Subscriber $subscriber ): void;
```

Removes a previously registered subscriber. Detaches every listener the
subscriber declared via getSubscribedEvents(). Idempotent - calling
with a subscriber that was never added (or already removed) is a no-op.

#### `resume()` { #eventsmanager-resume }

```php
public function resume(): void;
```

Clears the manager-level kill switch set by halt(). Subsequent
fire()/fireAll()/fireQueue() calls resume normal dispatch.

#### `setMethodExistsCacheLimit()` { #eventsmanager-setmethodexistscachelimit }

```php
public function setMethodExistsCacheLimit( int $methodExistsCacheLimit ): void;
```

Caps the number of distinct handler classes retained in the
method_exists memoization cache. 0 disables the cap (the
default; preserves the original unbounded behavior). When the
cap is exceeded, the cache is cleared and re-warms on subsequent
fires.

#### `setStopOnFalse()` { #eventsmanager-setstoponfalse }

```php
public function setStopOnFalse( bool $flag ): void;
```

Enables/disables the stop-on-false short-circuit. When true, a
listener returning literal `false` (with cancelable=true) stops
the current event's queue and pins the fire() return as `false`.
Later listeners cannot overwrite the cancel. Default off.

Independent of halt() / event->stop() - only governs how the
dispatch loop reacts to a `false` listener return.

#### `setStrict()` { #eventsmanager-setstrict }

```php
public function setStrict( bool $strict ): void;
```

Enables/disables strict mode. When true, fire()/fireAll() throw
when dispatching an event with zero matching listeners.

<div class="api-group">Protected · 2</div>

#### `afterFire()` { #eventsmanager-afterfire }

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

#### `beforeFire()` { #eventsmanager-beforefire }

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

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Events/ManagerInterface.zep){ .src-btn }

Phalcon\Events\ManagerInterface

@psalm-suppress DeprecatedInterface
@deprecated Will be removed in a future major release.
            Use {@see \Phalcon\Contracts\Events\Manager} instead.

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Events\Manager`](phalcon_contracts.md#contractseventsmanager)
    - **`Phalcon\Events\ManagerInterface`**

</div>

__Uses__ `Phalcon\Contracts\Events\Manager`
{ .api-uses }
