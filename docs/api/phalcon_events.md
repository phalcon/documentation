---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Events\AbstractEventsAware

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/AbstractEventsAware.php){ .src-btn }

This abstract class offers access to the events manager

<div class="api-tree" markdown>

- **`Phalcon\Events\AbstractEventsAware`**
    - [`Phalcon\Queue\Consumer\QueueConsumer`](phalcon_queue.md#queueconsumerqueueconsumer)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsabstracteventsaware-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sf">getEventsManager</span>()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#eventsabstracteventsaware-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setEventsManager</span>( <span class="st">ManagerInterface</span> <span class="sv">$eventsManager</span> )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#eventsabstracteventsaware-firemanagerevent">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">fireManagerEvent</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventName</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$cancellable</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Helper method to fire an event</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sv">$eventsManager</span><span class="sm"> = null</span></code>
</div>
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
): mixed;
```

Helper method to fire an event


## Events\Event

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/Event.php){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Events\Event`** - implements [`Phalcon\Events\EventInterface`](#eventseventinterface), [`Phalcon\Contracts\Events\Stoppable`](phalcon_contracts.md#contractseventsstoppable)

</div>

__Uses__ `Phalcon\Contracts\Events\Stoppable` · `Phalcon\Events\Exceptions\EventNotCancelable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsevent-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">object|null</span> <span class="sv">$source</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$cancelable</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Event constructor.</span>
</a>
<a class="api-item" href="#eventsevent-getdata">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getData</span>()</code>
</a>
<a class="api-item" href="#eventsevent-getsource">
<code class="vis vis-public">public</code>
<code class="ret">object|null</code>
<code class="sig"><span class="sf">getSource</span>()</code>
</a>
<a class="api-item" href="#eventsevent-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
</a>
<a class="api-item" href="#eventsevent-iscancelable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isCancelable</span>()</code>
<span class="desc">Check whether the event is cancelable.</span>
</a>
<a class="api-item" href="#eventsevent-ispropagationstopped">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPropagationStopped</span>()</code>
<span class="desc">Returns whether propagation must stop. PSR-14 alias backed by the same</span>
</a>
<a class="api-item" href="#eventsevent-isstopped">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isStopped</span>()</code>
<span class="desc">Check whether the event is currently stopped.</span>
</a>
<a class="api-item" href="#eventsevent-setdata">
<code class="vis vis-public">public</code>
<code class="ret">EventInterface</code>
<code class="sig"><span class="sf">setData</span>( <span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets event data.</span>
</a>
<a class="api-item" href="#eventsevent-settype">
<code class="vis vis-public">public</code>
<code class="ret">EventInterface</code>
<code class="sig"><span class="sf">setType</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Sets event type.</span>
</a>
<a class="api-item" href="#eventsevent-stop">
<code class="vis vis-public">public</code>
<code class="ret">EventInterface</code>
<code class="sig"><span class="sf">stop</span>()</code>
<span class="desc">Stops the event preventing propagation.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$cancelable</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$data</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">object|null</code>
<code class="sig"><span class="sv">$source</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$stopped</span><span class="sm"> = false</span></code>
<span class="desc">Is event propagation stopped?</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__construct()` { #eventsevent-__construct }

```php
public function __construct(
    string $type,
    object|null $source = null,
    mixed $data = null,
    bool $cancelable = true
);
```

Event constructor.

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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/EventInterface.php){ .src-btn }

Phalcon\Events\EventInterface

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Events\Event`](phalcon_contracts.md#contractseventsevent)
    - **`Phalcon\Events\EventInterface`**

</div>

__Uses__ `Phalcon\Contracts\Events\Event`
{ .api-uses }


## Events\EventsAwareInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/EventsAwareInterface.php){ .src-btn }

Phalcon\Events\EventsAwareInterface

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Events\EventsAware`](phalcon_contracts.md#contractseventseventsaware)
    - **`Phalcon\Events\EventsAwareInterface`**

</div>

__Uses__ `Phalcon\Contracts\Events\EventsAware`
{ .api-uses }


## Events\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/Exception.php){ .src-btn }

Phalcon\Events\Exception

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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/Exceptions/EventNotCancelable.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/Exceptions/InvalidEventHandler.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>()</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/Exceptions/InvalidEventSource.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$sourceType</span></span>)</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/Exceptions/InvalidEventType.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$eventType</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/Exceptions/InvalidSubscriberConfiguration.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$eventName</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/Exceptions/NoListenersForEvent.php){ .src-btn }

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
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$eventType</span> )</code>
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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/Manager.php){ .src-btn }

Phalcon Events Manager, offers an easy way to intercept and manipulate, if
needed, the normal flow of operation. With the EventsManager the developer
can create hooks or plugins that will offer monitoring of data, manipulation,
conditional execution and much more.

<div class="api-tree" markdown>

- **`Phalcon\Events\Manager`** - implements [`Phalcon\Events\ManagerInterface`](#eventsmanagerinterface), `\Psr\EventDispatcher\EventDispatcherInterface`, [`Phalcon\Contracts\Events\Enumerable`](phalcon_contracts.md#contractseventsenumerable)

</div>

__Uses__ `Closure` · `Phalcon\Contracts\Events\Enumerable` · `Phalcon\Contracts\Events\Stoppable` · `Phalcon\Contracts\Events\Subscriber` · `Phalcon\Db\Event\AbstractModelEvent` · `Phalcon\Db\Event\ModelEventNameEnum` · `Phalcon\Events\Exceptions\InvalidEventHandler` · `Phalcon\Events\Exceptions\InvalidEventType` · `Phalcon\Events\Exceptions\InvalidSubscriberConfiguration` · `Phalcon\Events\Exceptions\NoListenersForEvent` · `Psr\EventDispatcher\EventDispatcherInterface` · `Psr\EventDispatcher\StoppableEventInterface` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventsmanager-addsubscriber">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">addSubscriber</span>( <span class="st">Subscriber</span> <span class="sv">$subscriber</span> )</code>
<span class="desc">Registers an event subscriber. The subscriber&#039;s getSubscribedEvents()</span>
</a>
<a class="api-item" href="#eventsmanager-areprioritiesenabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">arePrioritiesEnabled</span>()</code>
<span class="desc">Returns if priorities are enabled</span>
</a>
<a class="api-item" href="#eventsmanager-attach">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">attach</span>(<span class="prm"><span class="st">array|string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">callable|object</span> <span class="sv">$handler</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$priority</span><span class="sm"> = self::DEFAULT_PRIORITY</span></span>)</code>
<span class="desc">Attach a listener to the events manager</span>
</a>
<a class="api-item" href="#eventsmanager-clearsubscribers">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clearSubscribers</span>()</code>
<span class="desc">Removes every registered subscriber and detaches each listener they</span>
</a>
<a class="api-item" href="#eventsmanager-collectresponses">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">collectResponses</span>( <span class="st">bool</span> <span class="sv">$collect</span> )</code>
<span class="desc">Tells the event manager if it needs to collect all the responses returned</span>
</a>
<a class="api-item" href="#eventsmanager-detach">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">detach</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">callable|object</span> <span class="sv">$handler</span></span>)</code>
<span class="desc">Detach the listener from the events manager</span>
</a>
<a class="api-item" href="#eventsmanager-detachall">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">detachAll</span>( <span class="st">string|null</span> <span class="sv">$type</span><span class="sm"> = null</span> )</code>
<span class="desc">Removes all events from the EventsManager</span>
</a>
<a class="api-item" href="#eventsmanager-dispatch">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">dispatch</span>(<span class="prm"><span class="st">object</span> <span class="sv">$event</span>,</span><span class="prm"><span class="st">array|string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">object|null</span> <span class="sv">$source</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Dispatches an object event to the appropriate event listeners.</span>
</a>
<a class="api-item" href="#eventsmanager-enablepriorities">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">enablePriorities</span>( <span class="st">bool</span> <span class="sv">$enablePriorities</span> )</code>
<span class="desc">Set if priorities are enabled in the EventsManager.</span>
</a>
<a class="api-item" href="#eventsmanager-fire">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">fire</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$cancelable</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Fires an event in the events manager causing the active listeners to be</span>
</a>
<a class="api-item" href="#eventsmanager-fireall">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">fireAll</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$cancelable</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Fires an event and returns every listener&#039;s return value as an indexed</span>
</a>
<a class="api-item" href="#eventsmanager-firequeue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">fireQueue</span>(<span class="prm"><span class="st">array</span> <span class="sv">$queue</span>,</span><span class="prm"><span class="st">EventInterface</span> <span class="sv">$event</span></span>)</code>
<span class="desc">Internal handler to call a queue of events.</span>
</a>
<a class="api-item" href="#eventsmanager-getlistenermap">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getListenerMap</span>()</code>
<span class="desc">Returns every event type that currently has at least one listener,</span>
</a>
<a class="api-item" href="#eventsmanager-getlisteners">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getListeners</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Returns all the attached listeners of a certain type</span>
</a>
<a class="api-item" href="#eventsmanager-getmethodexistscachelimit">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getMethodExistsCacheLimit</span>()</code>
<span class="desc">Returns the configured method_exists-cache cap (0 = unlimited).</span>
</a>
<a class="api-item" href="#eventsmanager-getresponses">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getResponses</span>()</code>
<span class="desc">Returns all the responses returned by every handler executed by the last</span>
</a>
<a class="api-item" href="#eventsmanager-getsubscribers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getSubscribers</span>()</code>
<span class="desc">Returns the list of registered subscriber instances.</span>
</a>
<a class="api-item" href="#eventsmanager-halt">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">halt</span>()</code>
<span class="desc">Manager-level kill switch. After halt(), every fire()/fireAll()/</span>
</a>
<a class="api-item" href="#eventsmanager-haslisteners">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasListeners</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Check whether certain type of event has listeners</span>
</a>
<a class="api-item" href="#eventsmanager-iscollecting">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isCollecting</span>()</code>
<span class="desc">Check if the events manager is collecting all the responses returned by</span>
</a>
<a class="api-item" href="#eventsmanager-ishalted">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isHalted</span>()</code>
<span class="desc">Returns whether the manager-level kill switch is engaged. See halt().</span>
</a>
<a class="api-item" href="#eventsmanager-isstoponfalse">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isStopOnFalse</span>()</code>
<span class="desc">Returns whether the stop-on-false short-circuit is enabled.</span>
</a>
<a class="api-item" href="#eventsmanager-isstrict">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isStrict</span>()</code>
<span class="desc">Returns whether strict mode is enabled.</span>
</a>
<a class="api-item" href="#eventsmanager-isvalidhandler">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isValidHandler</span>( <span class="st">mixed</span> <span class="sv">$handler</span> )</code>
</a>
<a class="api-item" href="#eventsmanager-removesubscriber">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">removeSubscriber</span>( <span class="st">Subscriber</span> <span class="sv">$subscriber</span> )</code>
<span class="desc">Removes a previously registered subscriber. Detaches every listener the</span>
</a>
<a class="api-item" href="#eventsmanager-resume">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resume</span>()</code>
<span class="desc">Clears the manager-level kill switch set by halt().</span>
</a>
<a class="api-item" href="#eventsmanager-setmethodexistscachelimit">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setMethodExistsCacheLimit</span>( <span class="st">int</span> <span class="sv">$methodExistsCacheLimit</span> )</code>
<span class="desc">Caps the number of distinct handler classes retained in the</span>
</a>
<a class="api-item" href="#eventsmanager-setstoponfalse">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setStopOnFalse</span>( <span class="st">bool</span> <span class="sv">$flag</span> )</code>
<span class="desc">Enables/disables the stop-on-false short-circuit. Default off.</span>
</a>
<a class="api-item" href="#eventsmanager-setstrict">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setStrict</span>( <span class="st">bool</span> <span class="sv">$strict</span> )</code>
<span class="desc">Enables/disables strict mode. When true, fire()/fireAll() throw when</span>
</a>
<a class="api-item" href="#eventsmanager-afterfire">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">afterFire</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$status</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$cancelable</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Extension seam invoked after an event has been dispatched to its</span>
</a>
<a class="api-item" href="#eventsmanager-beforefire">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">beforeFire</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventType</span>,</span><span class="prm"><span class="st">object</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$cancelable</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Extension seam invoked before an event is dispatched. The base</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$collect</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$enablePriorities</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$eventNameCache</span><span class="sm"> = []</span></code>
<span class="desc">Parsed-eventType cache. Memoizes the strpos + substr work done in
fire() so the same event name fired repeatedly collapses to a single
hash lookup.

Shape: <code>eventNameCache[$eventType] = [typePrefix, eventName]</code></span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$events</span><span class="sm"> = []</span></code>
<span class="desc">Listener storage. Shape:

  events[$eventType] = [
      [handler, type, priority]            // types 0, 1, 3
      [handler, type, priority, className] // type 2 carries
                                           // resolved class name
      ...
  ]

<code>type</code> is classified once at attach() time so the dispatch loop can
route via a simple branch:

  0 - Closure
  1 - [obj, method] array callable
  2 - plain object: method named after the event
  3 - generic callable (string fn name, invokable object, etc.)</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$fireDepth</span><span class="sm"> = 0</span></code>
<span class="desc">Re-entrancy depth of fire()/fireAll(). 0 means no fire is in progress.
Used to keep nested fire() calls from clobbering the outer caller&#039;s
<code>$this-&gt;responses</code> accumulator.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$halted</span><span class="sm"> = false</span></code>
<span class="desc">Manager-level kill switch. When true, every fire()/fireAll()/
fireQueue() call returns immediately without dispatching. Cleared by
resume().</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$methodExistsCache</span><span class="sm"> = []</span></code>
<span class="desc">Memoized method_exists() results for the plain-object dispatch path.
Keyed by <code>handlerClass =&gt; [methodName =&gt; bool]</code>.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$methodExistsCacheLimit</span><span class="sm"> = 0</span></code>
<span class="desc">Maximum number of distinct handler classes retained in
methodExistsCache. 0 (default) keeps the unbounded behavior.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;array-key, mixed&gt;</code>
<code class="sig"><span class="sv">$responses</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$stopOnFalse</span><span class="sm"> = false</span></code>
<span class="desc">When true, a listener returning literal <code>false</code> (with the event&#039;s
<code>cancelable</code> flag on) short-circuits the dispatch loop and pins the
fire() return as <code>false</code>. Default off.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$strict</span><span class="sm"> = false</span></code>
<span class="desc">When true, fire()/fireAll() throw on dispatch of an event that has zero
matching listeners. Default off.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$subscriberEventsCache</span><span class="sm"> = []</span></code>
<span class="desc">Memoized getSubscribedEvents() maps keyed by Subscriber class name.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$subscribers</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 29</div>

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
    array|string $eventType,
    callable|object $handler,
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
    callable|object $handler
): void;
```

Detach the listener from the events manager

#### `detachAll()` { #eventsmanager-detachall }

```php
public function detachAll( string|null $type = null ): void;
```

Removes all events from the EventsManager

#### `dispatch()` { #eventsmanager-dispatch }

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
{@see StoppableEventInterface} and reports it is stopped.

#### `enablePriorities()` { #eventsmanager-enablepriorities }

```php
public function enablePriorities( bool $enablePriorities ): void;
```

Set if priorities are enabled in the EventsManager.

#### `fire()` { #eventsmanager-fire }

```php
public function fire(
    string $eventType,
    object $source,
    mixed $data = null,
    bool $cancelable = true
): mixed;
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

Fires an event and returns every listener's return value as an indexed
array. Independent of collectResponses(); the caller's collected state
on `$this->responses` is preserved (stashed and restored).

#### `fireQueue()` { #eventsmanager-firequeue }

```php
final public function fireQueue(
    array $queue,
    EventInterface $event
): mixed;
```

Internal handler to call a queue of events.

Kept as a thin BC wrapper around the private dispatch loop.

#### `getListenerMap()` { #eventsmanager-getlistenermap }

```php
public function getListenerMap(): array;
```

Returns every event type that currently has at least one listener,
mapped to that type's listeners. Types contributed by subscribers are
included, because addSubscriber() attaches through the regular listener
pipeline.

Unwrapping is delegated to getListeners() so the internal shape of
$this->events is read in exactly one place.

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

Returns the list of registered subscriber instances.

#### `halt()` { #eventsmanager-halt }

```php
public function halt(): void;
```

Manager-level kill switch. After halt(), every fire()/fireAll()/
fireQueue() call returns immediately without dispatching, until
resume() is called.

#### `hasListeners()` { #eventsmanager-haslisteners }

```php
public function hasListeners( string $type ): bool;
```

Check whether certain type of event has listeners

#### `isCollecting()` { #eventsmanager-iscollecting }

```php
public function isCollecting(): bool;
```

Check if the events manager is collecting all the responses returned by
every registered listener in a single fire

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

#### `isStrict()` { #eventsmanager-isstrict }

```php
public function isStrict(): bool;
```

Returns whether strict mode is enabled.

#### `isValidHandler()` { #eventsmanager-isvalidhandler }

```php
public function isValidHandler( mixed $handler ): bool;
```

#### `removeSubscriber()` { #eventsmanager-removesubscriber }

```php
public function removeSubscriber( Subscriber $subscriber ): void;
```

Removes a previously registered subscriber. Detaches every listener the
subscriber declared via getSubscribedEvents(). Idempotent.

#### `resume()` { #eventsmanager-resume }

```php
public function resume(): void;
```

Clears the manager-level kill switch set by halt().

#### `setMethodExistsCacheLimit()` { #eventsmanager-setmethodexistscachelimit }

```php
public function setMethodExistsCacheLimit( int $methodExistsCacheLimit ): void;
```

Caps the number of distinct handler classes retained in the
method_exists memoization cache. 0 disables the cap.

#### `setStopOnFalse()` { #eventsmanager-setstoponfalse }

```php
public function setStopOnFalse( bool $flag ): void;
```

Enables/disables the stop-on-false short-circuit. Default off.

#### `setStrict()` { #eventsmanager-setstrict }

```php
public function setStrict( bool $strict ): void;
```

Enables/disables strict mode. When true, fire()/fireAll() throw when
dispatching an event with zero matching listeners.

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
listener queues. The base implementation returns `status` unchanged.

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
implementation returns true, so dispatch proceeds. Returning false
aborts the dispatch entirely.


## Events\ManagerInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/ManagerInterface.php){ .src-btn }

Phalcon\Events\ManagerInterface

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Events\Manager`](phalcon_contracts.md#contractseventsmanager)
    - **`Phalcon\Events\ManagerInterface`**

</div>

__Uses__ `Phalcon\Contracts\Events\Manager`
{ .api-uses }


## Events\PsrEventInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/PsrEventInterface.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Events\PsrEventInterface`**

</div>


## Events\Traits\EventsAwareTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Events/Traits/EventsAwareTrait.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Events\Traits\EventsAwareTrait`**

</div>

__Uses__ `Phalcon\Events\Exception` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\PsrEventInterface`
{ .api-uses }

__Used by__ [`Phalcon\Application\AbstractApplication`](phalcon_application.md#applicationabstractapplication) · [`Phalcon\Auth\Guard\AbstractGuard`](phalcon_auth.md#authguardabstractguard) · [`Phalcon\Autoload\Loader`](phalcon_autoload.md#autoloadloader) · [`Phalcon\Cache\AbstractCache`](phalcon_cache.md#cacheabstractcache) · [`Phalcon\Cli\Task`](phalcon_cli.md#clitask) · [`Phalcon\Db\Adapter\AbstractAdapter`](phalcon_db.md#dbadapterabstractadapter) · [`Phalcon\Di\Di`](phalcon_di.md#didi) · [`Phalcon\Dispatcher\AbstractDispatcher`](phalcon_dispatcher.md#dispatcherabstractdispatcher) · [`Phalcon\Http\Request`](phalcon_http.md#httprequest) · [`Phalcon\Http\Response`](phalcon_http.md#httpresponse) · [`Phalcon\Mvc\Controller`](phalcon_mvc.md#mvccontroller) · [`Phalcon\Mvc\Dispatcher`](phalcon_mvc.md#mvcdispatcher) · [`Phalcon\Mvc\Micro`](phalcon_mvc.md#mvcmicro) · [`Phalcon\Mvc\Model\Manager`](phalcon_mvc.md#mvcmodelmanager) · [`Phalcon\Mvc\Router`](phalcon_mvc.md#mvcrouter) · [`Phalcon\Mvc\View`](phalcon_mvc.md#mvcview) · [`Phalcon\Mvc\View\Engine\AbstractEngine`](phalcon_mvc.md#mvcviewengineabstractengine) · [`Phalcon\Mvc\View\Simple`](phalcon_mvc.md#mvcviewsimple) · [`Phalcon\Storage\Adapter\AbstractAdapter`](phalcon_storage.md#storageadapterabstractadapter)
{ .api-used-by }

### Method Summary

<div class="api-list">
<a class="api-item" href="#eventstraitseventsawaretrait-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sf">getEventsManager</span>()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#eventstraitseventsawaretrait-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setEventsManager</span>( <span class="st">ManagerInterface</span> <span class="sv">$eventsManager</span> )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#eventstraitseventsawaretrait-firemanagerevent">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">fireManagerEvent</span>(<span class="prm"><span class="st">string</span> <span class="sv">$eventName</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$cancellable</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Helper method to fire an event</span>
</a>
<a class="api-item" href="#eventstraitseventsawaretrait-firepsrevent">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">firePsrEvent</span>(<span class="prm"><span class="st">PsrEventInterface</span> <span class="sv">$event</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sv">$eventsManager</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getEventsManager()` { #eventstraitseventsawaretrait-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `setEventsManager()` { #eventstraitseventsawaretrait-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

<div class="api-group">Protected · 2</div>

#### `fireManagerEvent()` { #eventstraitseventsawaretrait-firemanagerevent }

```php
protected function fireManagerEvent(
    string $eventName,
    mixed $data = null,
    bool $cancellable = true
);
```

Helper method to fire an event

#### `firePsrEvent()` { #eventstraitseventsawaretrait-firepsrevent }

```php
protected function firePsrEvent(
    PsrEventInterface $event,
    string|null $name = null
): mixed;
```
