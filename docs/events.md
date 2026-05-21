# Events Manager

- - -

## Overview

The purpose of this component is to intercept the execution of components in the framework by creating _hooks_. These
hooks allow developers to obtain status information, manipulate data, or change the flow of execution during the process
of a component. The component consists of a [Phalcon\Events\Manager][events-manager] that handles event propagation and
execution of events. The manager contains various [Phalcon\Events\Event][events-event] objects, which contain
information about each hook/event.

```php
<?php

use Phalcon\Events\Event;
use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Adapter\Pdo\Mysql as DbAdapter;

$eventsManager = new EventsManager();

$eventsManager->attach(
    'db:afterQuery',
    function (Event $event, $connection) {
        echo $connection->getSQLStatement();
    }
);

$connection = new DbAdapter(
    [
        'host'     => 'localhost',
        'username' => 'root',
        'password' => 'secret',
        'dbname'   => 'invo',
    ]
);

$connection->setEventsManager($eventsManager);
$connection->query(
    'SELECT * FROM products p WHERE p.status = 1'
);
```

## Naming Convention

Phalcon events use namespaces to avoid naming collisions. Each component in Phalcon occupies a different event
namespace, and you are free to create your own as you see fit. Event names are formatted as `component:event`. For
example, as [Phalcon\Db][db] occupies the `db` namespace, its `afterQuery` event's full name is `db:afterQuery`.

When attaching event listeners to the events manager, you can use `component` to catch all events from that component (
e.g. `db` to catch all the [Phalcon\Db][db] events) or `component:event` to target a specific event (eg.
`db:afterQuery`).

## Manager

The [Phalcon\Events\Manager][events-manager] is the main component that handles all the events in Phalcon. Different
implementations in other frameworks refer to this component as _a handler_. Regardless of the name, the functionality
and purpose are the same.

The component stores listeners in priority-sorted arrays keyed by event type. Each listener is registered with a
priority (default `100`); when the matching event fires, the manager iterates the queue in order. Priorities are
disabled by default - call [`enablePriorities(true)`](#manager) to honor them.

The methods exposed by the manager are:

```php
public function addSubscriber(Subscriber $subscriber): void
```

Registers an event subscriber. The subscriber's `getSubscribedEvents()` map is parsed and each entry is attached through
the regular listener pipeline. See [Subscribers](#subscribers).

```php
final public function attach(
    string $eventType, 
    mixed $handler, 
    int $priority = self::DEFAULT_PRIORITY
): void
```

Attaches a listener to the events manager. The `handler` is an object or a `callable`.

```php
public function arePrioritiesEnabled(): bool
```

Returns if priorities are enabled.

```php
public function clearSubscribers(): void
```

Removes every registered subscriber and detaches each listener they contributed. Listeners attached via `attach()` are
untouched.

```php
public function collectResponses(bool $collect): void
```

Tells the event manager whether to collect responses returned by every registered listener in a single `fire` call.

```php
public function detach(string $eventType, mixed $handler): void
```

Detaches the listener from the events manager. When the last listener for an event type is removed, the event-type key
is dropped entirely so `hasListeners()` reports the truth.

```php
public function detachAll(string $type = null): void
```

Removes all events from the events manager. With a `$type` argument, removes only the queue for that event type.

```php
public function enablePriorities(bool $enablePriorities): void
```

Sets whether priorities are honored when dispatching (default `false`).

```php
final public function fire(
    string $eventType, 
    object $source, 
    mixed $data = null, 
    bool $cancelable = true
): mixed
```

Fires an event causing the active listeners to be notified. Returns the last non-`null` listener return value (or the
stopping listener's return value when `$event->stop()` is called).

```php
public function fireAll(
    string $eventType, 
    object $source, 
    mixed $data = null, 
    bool $cancelable = true
): array
```

Fires an event and returns every listener's return value as an indexed array. Independent of `collectResponses()`.
See [All Responses](#all-responses).

```php
final public function fireQueue(array $queue, EventInterface $event): mixed
```

Internal handler to call a queue of events. Kept at this signature for backward compatibility with direct callers; the
framework's own `fire()` path uses a private typed dispatch helper instead.

```php
public function getListeners(string $type): array
```

Returns all the attached listeners of a certain event type.

```php
public function getResponses(): array
```

Returns the responses collected by the last `fire()` call when `collectResponses(true)` is in effect.

```php
public function getSubscribers(): array
```

Returns the list of registered subscriber instances.

```php
public function halt(): void
```

Engages the manager-level kill switch - see [Kill Switch](#kill-switch).

```php
public function hasListeners(string $type): bool
```

Checks whether a certain event type has listeners.

```php
public function isCollecting(): bool
```

Returns whether the manager is currently collecting responses.

```php
public function isHalted(): bool
```

Returns whether the manager-level kill switch is engaged.

```php
public function isStopOnFalse(): bool
```

Returns whether the stop-on-`false` short-circuit is enabled - see [Stop on False](#stop-on-false).

```php
public function isStrict(): bool
```

Returns whether strict mode is enabled - see [Strict Mode](#strict-mode).

```php
public function isValidHandler(mixed $handler): bool
```

Checks whether the handler is an object or a callable.

```php
public function removeSubscriber(Subscriber $subscriber): void
```

Removes a previously registered subscriber. Idempotent.

```php
public function resume(): void
```

Clears the manager-level kill switch set by `halt()`.

```php
public function setStopOnFalse(bool $flag): void
```

Enables the opt-in per-event short-circuit on a `false` listener return - see [Stop on False](#stop-on-false).

```php
public function setStrict(bool $strict): void
```

Toggles strict mode - see [Strict Mode](#strict-mode).

## Usage

If you are using the [Phalcon\Di\FactoryDefault][di-factorydefaul] DI container,
the [Phalcon\Events\Manager][events-manager] is already registered for you with the name `eventsManager`. This is a
_global_ events manager. However, you are not restricted to use only that one. You can always create a separate manager
to handle events for any component that you require.

The following example shows how you can create a query logging mechanism using the _global_ events manager:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Events\Event;
use Phalcon\Db\Adapter\Pdo\Mysql as DbAdapter;

$container     = Di::getDefault();
$eventsManager = $container->get('eventsManager');

$eventsManager->attach(
    'db:afterQuery',
    function (Event $event, $connection) {
        echo $connection->getSQLStatement();
    }
);

$connection = new DbAdapter(
    [
        'host'     => 'localhost',
        'username' => 'root',
        'password' => 'secret',
        'dbname'   => 'invo',
    ]
);

$connection->setEventsManager($eventsManager);
$connection->query(
    'SELECT * FROM products p WHERE p.status = 1'
);
```

or if you want a separate events manager:

```php
<?php

use Phalcon\Events\Event;
use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Adapter\Pdo\Mysql as DbAdapter;

$eventsManager = new EventsManager();
$eventsManager->attach(
    'db:afterQuery',
    function (Event $event, $connection) {
        echo $connection->getSQLStatement();
    }
);

$connection = new DbAdapter(
    [
        'host'     => 'localhost',
        'username' => 'root',
        'password' => 'secret',
        'dbname'   => 'invo',
    ]
);

$connection->setEventsManager($eventsManager);
$connection->query(
    'SELECT * FROM products p WHERE p.status = 1'
);
```

In the above example, we are using the events manager to listen to the `afterQuery` event produced by the `db` service,
in this case, MySQL. We use the `attach` method to attach our event to the manager and use the `db:afterQuery` event. We
add an anonymous function as the handler for this event, which accepts a [Phalcon\Events\Event][events-event] as the
first parameter. This object contains contextual information regarding the event that has been fired. The database
connection object as the second. Using the connection variable we print out the SQL statement. You can always pass a
third parameter with arbitrary data specific to the event, or even a logger object in the anonymous function so that you
can log your queries in a separate log file.

!!! warning "WARNING"

    You must explicitly set the Events Manager to a component using the `setEventsManager()` method in order for that component to trigger events. You can create a new Events Manager instance for each component, or you can set the same Events Manager to multiple components as the naming convention will avoid conflicts

## Handlers

The events manager wires a handler to an event. A handler is a piece of code that will do something when the event
fires. As seen in the above example, you can use an anonymous function as your handler:

```php
<?php

use Phalcon\Events\Event;
use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Adapter\Pdo\Mysql as DbAdapter;

$eventsManager = new EventsManager();
$eventsManager->attach(
    'db:afterQuery',
    function (Event $event, $connection) {
        echo $connection->getSQLStatement();
    }
);

$connection = new DbAdapter(
    [
        'host'     => 'localhost',
        'username' => 'root',
        'password' => 'secret',
        'dbname'   => 'invo',
    ]
);

$connection->setEventsManager($eventsManager);
$connection->query(
    'SELECT * FROM products p WHERE p.status = 1'
);
```

You can also create a _listener_ class, which offers more flexibility. In a listener, you can listen to multiple events
and even extend [Phalcon\Di\Injectable][di-injectable] which will give you fill access to the services of the Di
container. The example above can be enhanced by implementing the following listener:

```php
<?php

namespace MyApp\Listeners;

use Phalcon\Logger;
use Phalcon\Config;
use Phalcon\Db\AdapterInterface;
use Phalcon\Di\Injectable;
use Phalcon\Events\Event;

/**
 * Class QueryListener
 *
 * @property Config $config
 * @property Logger $logger
 */
class QueryListener extends Injectable
{
    public function beforeQuery(Event $event, AdapterInterface $connection)
    {
        if ($this->config->path('app.logLevel') > 1) {
            $this->logger->info(
                sprintf(
                    '%s - [%s]',
                    $connection->getSQLStatement(),
                    json_encode($connection->getSQLVariables())
                )
            );
        }
    }

    public function rollbackTransaction(Event $event)
    {
        if ($this->config->path('app.logLevel') > 1) {
            $this->logger->warning($event->getType());
        }
    }
}
```

Attaching the listener to our events manager is very simple:

```php
<?php

$eventsManager->attach(
    'db',
    new QueryListener()
);
```

The resulting behavior will be that if the `app.logLevel` configuration variable is set to greater than `1` (
representing that we are in development mode), all queries will be logged along with the actual parameters that were
bound to each query. Additionally, we will log every time we have a rollback in a transaction.

Another handy listener is the `404` one:

```php
<?php

namespace MyApp\Listeners\Dispatcher;

use Phalcon\Logger;
use Phalcon\Di\Injectable;
use Phalcon\Events\Event;
use Phalcon\Mvc\Dispatcher;
use MyApp\Auth\Adapters\AbstractAdapter;

/**
 * Class NotFoundListener
 *
 * @property AbstractAdapter $auth
 * @property Logger          $logger
 */
class NotFoundListener extends Injectable
{
    public function beforeException(
        Event $event, 
        Dispatcher $dispatcher, 
        \Exception $ex
    ) {
        switch ($ex->getCode()) {
            case Dispatcher::EXCEPTION_HANDLER_NOT_FOUND:
            case Dispatcher::EXCEPTION_ACTION_NOT_FOUND:
                $dispatcher->setModuleName('main');
                $params = [
                    'namespace'  => 'MyApp\Controllers',
                    'controller' => 'session',
                    'action'     => 'fourohfour',
                ];

                /**
                 * 404 not logged in
                 */
                if (true !== $this->auth->isLoggedIn()) {
                    $params['action'] = 'login';
                }

                $dispatcher->forward($params);

                return false;
            default:
                $this->logger->error($ex->getMessage());
                $this->logger->error($ex->getTraceAsString());

                return false;
        }
    }
}
``` 

and attaching it to the events manager:

```php
<?php

$eventsManager->attach(
    'dispatch:beforeException',
    new NotFoundListener(),
    200
);
```

First, we attach the listener to the `dispatcher` component and the `beforeException` event. This means that the events
manager will fire only for that event calling our listener. We could have just changed the hook point to `dispatcher` so
that we are able in the future to add more dispatcher events in the same listener.

The `beforeException` function accepts the `$event` as the first parameter, the `$dispatcher` as the second, and the
`$ex` exception thrown from the dispatcher component. Using those, we can then figure out if a handler (or controller)
or an action was not found. If that is the case, we forward the user to a specific module, controller, and action. If
our user is not logged in, then we send them to the login page. Alternatively, we just log the exception message in our
logger.

The example demonstrates clearly the power of the events manager, and how you can alter the flow of the application
using listeners.

## Subscribers

Subscribers group multiple listeners for a single class behind a static `getSubscribedEvents()` method, similar to the
pattern in Symfony's EventDispatcher. The events manager parses that map once at registration time and attaches each
entry through the regular listener pipeline - no reflection at fire time.

Implement the [Phalcon\Contracts\Events\Subscriber][events-subscriber] contract on the class. Each entry in
`getSubscribedEvents()` accepts three shapes:

- `'event:name' => 'methodName'` - plain method name
- `'event:name' => ['methodName', priority]` - method with priority
- `'event:name' => [['methodA', priorityA], ['methodB', priorityB]]` - multiple listeners for the same event

```php
<?php

namespace MyApp\Listeners;

use Phalcon\Contracts\Events\Subscriber;
use Phalcon\Events\Event;
use Phalcon\Mvc\Model;

class AuditSubscriber implements Subscriber
{
    public static function getSubscribedEvents(): array
    {
        return [
            'model:beforeSave'   => 'recordIntent',
            'model:afterSave'    => ['logSave', 150],
            'model:beforeDelete' => [
                ['markForArchive', 200],
                ['notifyAuditor', 100],
            ],
        ];
    }

    public function recordIntent(Event $event, Model $model): void
    {
        // ...
    }

    public function logSave(Event $event, Model $model): void
    {
        // ...
    }

    public function markForArchive(Event $event, Model $model): void
    {
        // ...
    }

    public function notifyAuditor(Event $event, Model $model): void
    {
        // ...
    }
}
```

Register and manage subscribers through the dedicated API:

```php
<?php

use MyApp\Listeners\AuditSubscriber;
use Phalcon\Events\Manager as EventsManager;

$eventsManager = new EventsManager();
$subscriber    = new AuditSubscriber();

$eventsManager->addSubscriber($subscriber);

// Inspect what is registered.
$registered = $eventsManager->getSubscribers();

// Remove a specific subscriber, or remove every one in a single call.
$eventsManager->removeSubscriber($subscriber);
$eventsManager->clearSubscribers();
```

`addSubscriber()` reads `getSubscribedEvents()` once and caches the resulting map per class name, so registering several
instances of the same subscriber class does not re-invoke the static method. `removeSubscriber()` is idempotent -
removing an instance that was never added (or already removed) is a no-op. `clearSubscribers()` detaches every listener
contributed by every registered subscriber; listeners attached via `attach()` are untouched.

!!! info "NOTE"

    Subscribers are keyed internally by `spl_object_id()`, so re-adding the same instance is a no-op. Registering two distinct instances of the same subscriber class is allowed and attaches the listeners twice.

## Events: Trigger

You can create components in your application that trigger events to an events manager. Listeners attached to those
events will be invoked when the events are fired. In order to create a component that triggers events, we need to
implement the [Phalcon\Events\EventsAwareInterface][events-eventsawareinterface].

### Custom Component

Let's consider the following example:

```php
<?php

namespace MyApp\Components;

use Phalcon\Di\Injectable;
use Phalcon\Events\EventsAwareInterface;
use Phalcon\Events\ManagerInterface;

/**
 * @property ManagerInterface $eventsManager
 * @property Logger           $logger
 */
class NotificationsAware extends Injectable implements EventsAwareInterface
{
    protected $eventsManager;
    
    public function getEventsManager()
    {
        return $this->eventsManager;
    }

    public function setEventsManager(ManagerInterface $eventsManager)
    {
        $this->eventsManager = $eventsManager;
    }


    public function process()
    {
        $this->eventsManager->fire('notifications:beforeSend', $this);

        $this->logger->info('Processing.... ');

        $this->eventsManager->fire('notifications:afterSend', $this);
    }
}
```

The above component implements the [Phalcon\Events\EventsAwareInterface][events-eventsawareinterface] and as a result,
it uses the `getEventsManager` and `setEventsManager`. The last method is what does the work. In this example we want to
send some notifications to users and want to fire an event before and after the notification is sent.

We chose to name the component `notification` and the events are called `beforeSend` and `afterSend`. In the `process`
method, you can add any code you need in between the calls to fire the relevant events. Additionally, you can inject
more data in this component that would help with your implementation and processing of the notifications.

### Custom Listener

Now we need to create a listener for this component:

```php
<?php

namespace MyApp\Listeners;

use Phalcon\Events\Event;
use Phalcon\Logger;

/**
 * @property Logger $logger
 */
class MotificationsListener
{
    /**
     * @var Logger
     */
    private $logger;

    public function __construct(Logger $logger)
    {
        $this->logger = $logger;
    }

    public function afterSend(
        Event $event, 
        NotificationsAware $component
    ) {
        $this->logger->info('After Notification');
    }

    public function beforeSend(
        Event $event, 
        NotificationsAware $component
    ) {
        $this->logger->info('Before Notification');
    }
}
```

Putting it all together

```php
<?php

use MyApp\Components\NotificationAware;
use MyApp\Listeners\MotificationsListener;
use Phalcon\Events\Manager as EventsManager;

$eventsManager = new EventsManager();
$component     = new NotificationAware();

$component->setEventsManager($eventsManager);

$eventsManager->attach(
    'notifications',
    new NotificationsListener()
);

$component->process();
```

When `process` is executed, the two methods in the listener will be executed. Your log will then have the following
entries:

```txt
[2019-12-25 01:02:03][INFO] Before Notification
[2019-12-25 01:02:03][INFO] Processing...
[2019-12-25 01:02:03][INFO] After Notification
```

### Custom Data

Additional data may also be passed when triggering an event using the third parameter of `fire()`:

```php
<?php

$data = [
    'name'     => 'Darth Vader',
    'password' => '12345',
];

$eventsManager->fire('notifications:afterSend', $this, $data);
```

In a listener the third parameter also receives data:

```php
<?php

use Phalcon\Events\Event;

$data = [
    'name'     => 'Darth Vader',
    'password' => '12345',
];

$eventsManager->attach(
    'notifications',
    function (Event $event, $component, $data) {
        print_r($data);
    }
);

$eventsManager->attach(
    'notifications',
    function (Event $event, $component) {
        print_r($event->getData());
    }
);
```

## Propagation

An events manager can have multiple listeners attached to it. Once an event fires, all listeners that can be notified
for the particular event will be notified. This is the default behavior but can be altered if need be by stopping the
propagation early:

```php
<?php

use Phalcon\Events\Event;

$eventsManager->attach(
    'db',
    function (Event $event, $connection) {
        if ('2019-01-01' < date('Y-m-d')) {
            $event->stop();
        }
    }
);
```

In the above simple example, we stop all events if today is earlier than `2019-01-01`.

## Cancellation

By default, all events are cancelable. However, you might want to set a particular event to not be cancelable, allowing
the particular event to fire on all available listeners that implement it.

```php
<?php

use Phalcon\Events\Event;

$eventsManager->attach(
    'db',
    function (Event $event, $connection) {
        if ($event->isCancelable()) {
            $event->stop();
        }
    }
);
```

In the above example, if the event is cancelable, we will stop propagation. You can set a particular event to **not** be
cancelable by utilizing the fourth parameter of `fire()`:

```php
<?php

$eventsManager->fire('notifications:afterSend', $this, $data, false);
```

The `afterSend` event will no longer be cancelable and will execute on all listeners that implement it.

!!! warning "WARNING"

    You can stop the execution by returning `false` in your event (but not always). For instance, if you attach an event to `dispatch:beforeDispatchLoop` and your listener returns `false` the dispatch process will be halted. This is true if you only have **one listener** listening to the `dispatch:beforeDispatchLoop` event which returns `false`. If two listeners are attached to the event and the second one that executes returns `true` then the process will continue. If you wish to stop any subsequent events from firing, you will have to issue a `stop()` in your listener on the Event object - or enable [Stop on False](#stop-on-false) so the manager treats a `false` return as a hard cancel.

## Stop on False

`setStopOnFalse(true)` enables an opt-in per-event short-circuit. When the flag is on and the fire's `cancelable`
argument is also `true`, a listener returning literal `false` halts the dispatch loop for that event and pins the
`fire()` return value as `false`. Later listeners attached to the same event do not run, and a subsequent listener
returning `true` cannot revive the chain.

```php
<?php

use Phalcon\Events\Manager as EventsManager;

$eventsManager = new EventsManager();
$eventsManager->setStopOnFalse(true);

$eventsManager->attach(
    'orders:beforePay',
    function ($event, $order) {
        return $order->isValid();
    }
);

$eventsManager->attach(
    'orders:beforePay',
    function ($event, $order) {
        // Skipped entirely if the first listener returned false.
        return $order->reserveStock();
    }
);

$result = $eventsManager->fire('orders:beforePay', $order);
// $result === false when the first listener returns false
```

Default is off, preserving the historical last-wins return-value behavior so existing code is unaffected.
`isStopOnFalse()` reports the current state. The flag is independent of [`halt()`](#kill-switch) and `$event->stop()` -
it only governs how the dispatch loop reacts to a literal `false` listener return.

## Kill Switch

`halt()` engages a manager-level kill switch that survives across `fire()` calls. Once halted, every subsequent
`fire()`, `fireAll()`, and `fireQueue()` call returns immediately (`null` or `[]`) without dispatching, until `resume()`
clears the flag. Use this when a listener needs to abort all downstream event activity for the rest of a request - a
failed authorization check, a fatal configuration error, or a circuit breaker tripping.

```php
<?php

use Phalcon\Events\Event;
use Phalcon\Events\Manager as EventsManager;

$eventsManager = new EventsManager();

$eventsManager->attach(
    'app:beforeRequest',
    function (Event $event, $app) use ($eventsManager) {
        if (true !== $app->shouldContinue()) {
            $eventsManager->halt();
        }
    }
);

// After the listener trips halt(), no other event fires.
$eventsManager->fire('app:beforeRequest', $app);

$eventsManager->isHalted();                       // true
$eventsManager->fire('app:somethingElse', $app);  // returns null, no dispatch

// Lift the kill switch when normal operation should resume.
$eventsManager->resume();
```

`halt()` is distinct from `$event->stop()`. `stop()` only halts the current dispatch chain on the Event instance;
`halt()` survives across `fire()` boundaries on the manager itself.

## Priorities

When attaching listeners you can set a specific priority. Setting up priorities when attaching listeners to your events
manager defines the order in which they are called:

```php
<?php

use Phalcon\Events\Manager as EventsManager;

$eventsManager = new EventsManager();

$eventsManager->enablePriorities(true);

$eventsManager->attach(
    'db', 
    new QueryListener(), 
    150
);
$eventsManager->attach(
    'db', 
    new QueryListener(), 
    100
);
$eventsManager->attach(
    'db', 
    new QueryListener(), 
    50
); 
```

!!! info "NOTE"

    In order for the priorities to work `enablePriorities()` has to be called with `true` to enable them. Priorities are disabled by default

!!! warning "WARNING"

    A high priority number means that the listener will be processed before those with lower priorities

## Responses

The events manager can also collect any responses returned by each event and return them back using the `getResponses()`
method. The method returns an array with the responses:

```php
<?php

use Phalcon\Events\Manager as EventsManager;

$eventsManager = new EventsManager();

$eventsManager->collectResponses(true);

$eventsManager->attach(
    'custom:custom',
    function () {
        return 'first response';
    }
);

$eventsManager->attach(
    'custom:custom',
    function () {
        return 'second response';
    }
);

$eventsManager->fire('custom:custom', $eventsManager, null);

print_r($eventsManager->getResponses());
```

The above example produces:

```bash
[
    0 => 'first response',
    1 => 'second response',
]
```

!!! info "NOTE"

    In order for responses to be collected, `collectResponses()` has to be called with `true` to enable collection.

### All Responses

`fireAll()` returns every listener's return value as an indexed array in a single call - without enabling
`collectResponses()` and without depending on `getResponses()`:

```php
<?php

use Phalcon\Events\Manager as EventsManager;

$eventsManager = new EventsManager();

$eventsManager->attach(
    'reports:collect',
    function () {
        return 'metrics';
    }
);

$eventsManager->attach(
    'reports:collect',
    function () {
        return 'audit';
    }
);

$results = $eventsManager->fireAll('reports:collect', $context);
// $results === ['metrics', 'audit']
```

`fireAll()` stashes the caller's `$this->responses` state on entry and restores it on exit, so a `fireAll()` call from
inside a `collect`-mode `fire()` does not pollute the outer accumulator. Nested `fire()` calls also stash and restore
their outer accumulator on a per-call basis, eliminating cross-fire response clobbering.

## Strict Mode

Strict mode throws `Phalcon\Events\Exception` when an event is fired with no matching listeners. Useful in development
for catching typos in event names that would otherwise dispatch silently.

```php
<?php

use Phalcon\Events\Exception;
use Phalcon\Events\Manager as EventsManager;

$eventsManager = new EventsManager();
$eventsManager->setStrict(true);

try {
    $eventsManager->fire('typo:eventName', $source);
} catch (Exception $ex) {
    echo $ex->getMessage();
    // "No listeners attached for event typo:eventName"
}
```

`setStrict(true)` toggles the flag; `isStrict()` reports the current state. Default is `false`, so existing application
code is unaffected. Strict mode applies to both `fire()` and `fireAll()`.

## Controllers

Controllers act as listeners already registered in the events manager. As a result, you only need to create a method
with the same name as a registered event, and it will be fired.

For instance, if we want to send a user to the `/login` page if they are not logged in, we can add the following code in
our master controller:

```php
<?php

namespace MyApp\Controller;

use Phalcon\Logger;
use Phalcon\Dispatcher;
use Phalcon\Http\Response;
use Phalcon\Mvc\Controller;
use MyApp\Auth\Adapters\AbstractAdapter;

/**
 * Class BaseController
 *
 * @property AbstractAdapter $auth
 * @property Logger          $logger
 * @property Response        $response
 */
class BaseController extends Controller
{
    public function beforeExecuteRoute(Dispatcher $dispatcher)
    {
        /**
         * Send them to the login page if no identity exists
         */
        if (true !== $this->auth->isLoggedIn()) {
            $this->response->redirect(
                '/login',
                true
            );

            return false;
        }

        return true;
    }
}
``` 

Execute the code before the router, so we can determine if the user is logged in or not. If not, forward them to the
login page.

## Models

Similar to Controllers, Models also act as listeners already registered in the events manager. As a result, you only
need to create a method with the same name as a registered event, and it will be fired.

In the following example, we are using the `beforeCreate` event, to automatically calculate an invoice number:

```php
<?php

namespace MyApp\Models;

use Phalcon\Mvc\Model;

use function str_pad;

/**
 * Class Invoices
 *
 * @property string $inv_created_at
 * @property int    $inv_cst_id
 * @property int    $inv_id
 * @property string $inv_number
 * @property string $inv_title
 * @property float  $inv_total
 */
class Invoices extends Model
{
    /**
     * @var int
     */
    public $inv_cst_id;

    /**
     * @var string
     */
    public $inv_created_at;

    /**
     * @var int
     */
    public $inv_id;

    /**
     * @var string
     */
    public $inv_number;

    /**
     * @var string
     */
    public $inv_title;

    /**
     * @var float
     */
    public $inv_total;

    public function beforeCreate()
    {
        $date     = date('YmdHis');
        $customer = substr(
            str_pad(
                $this->inv_cst_id, 6, '0', STR_PAD_LEFT
            ),
            -6
        );

        $this->inv_number = 'INV-' . $customer . '-' . $date;
    }
}
``` 

## Contracts

The canonical contracts for the Events component live under the `Phalcon\Contracts\Events\` namespace:

| Contract                                                      | Replaces                              |
|---------------------------------------------------------------|---------------------------------------|
| [Phalcon\Contracts\Events\Event][contracts-event]             | `Phalcon\Events\EventInterface`       |
| [Phalcon\Contracts\Events\EventsAware][contracts-eventsaware] | `Phalcon\Events\EventsAwareInterface` |
| [Phalcon\Contracts\Events\Manager][contracts-manager]         | `Phalcon\Events\ManagerInterface`     |
| [Phalcon\Contracts\Events\Stoppable][contracts-stoppable]     | _new - PSR-14-shaped mirror_          |
| [Phalcon\Contracts\Events\Subscriber][events-subscriber]      | _new - Symfony-style subscribers_     |

The legacy `Phalcon\Events\*Interface` types are kept as thin extensions of their canonical counterparts and are marked
`@deprecated`. Existing implementors and typehints continue to work; new code should target the canonical contracts
directly.

### Stoppable Events

[Phalcon\Contracts\Events\Stoppable][contracts-stoppable] mirrors PSR-14's `StoppableEventInterface` with a single
`isPropagationStopped(): bool` method. [Phalcon\Events\Event][events-event] implements it and routes the call through
the same internal `stopped` flag as `isStopped()`, so calling `$event->stop()` flips both accessors and a PSR-14-aware
library reading `isPropagationStopped()` sees the same state.

!!! info "NOTE"

    [Phalcon\Events\Event][events-event] is declared `final` to enable C-level direct dispatch on its per-fire getters. If you previously subclassed it, build a sibling class that implements [Phalcon\Contracts\Events\Event][contracts-event] instead.

## Custom Manager

The [Phalcon\Contracts\Events\Manager][contracts-manager] contract must be implemented to create your own events manager
replacing the one provided by Phalcon. The legacy [Phalcon\Events\ManagerInterface][events-managerinterface] alias is
also accepted for backward compatibility.

```php
<?php

namespace MyApp\Events;

use Phalcon\Contracts\Events\Manager as ManagerInterface;

class EventsManager implements ManagerInterface
{
    /**
     * @param string          $eventType
     * @param object|callable $handler
     */
    public function attach(string $eventType, $handler);

    /**
     * @param string          $eventType
     * @param object|callable $handler
     */
    public function detach(string $eventType, $handler);

    /**
     * @param string $type
     */
    public function detachAll(string $type = null);

    /**
     * @param string $eventType
     * @param object $source
     * @param mixed  $data
     * @param mixed  $cancelable
     * 
     * @return mixed
     */
    public function fire(
        string $eventType, 
        $source, 
        $data = null, 
        bool $cancelable = false
    );

    /**
     * @param string $type
     *
     * @return array
     */
    public function getListeners(string $type): array;

    /**
     * @param string $type
     *
     * @return bool
     */
    public function hasListeners(string $type): bool;
}
```

## List of Events

The events available in Phalcon are:

| Component                   | Event                                | Parameters                                              |
|-----------------------------|--------------------------------------|---------------------------------------------------------|
| [ACL][acl]                  | `acl:afterCheckAccess`               | Acl                                                     |
| [ACL][acl]                  | `acl:beforeCheckAccess`              | Acl                                                     |
| [Application][application]  | `application:afterHandleRequest`     | Application, Controller                                 |
| [Application][application]  | `application:afterStartModule`       | Application, Module                                     |
| [Application][application]  | `application:beforeHandleRequest`    | Application, Dispatcher                                 |
| [Application][application]  | `application:beforeSendResponse`     | Application, Response                                   |
| [Application][application]  | `application:beforeStartModule`      | Application, Module                                     |
| [Application][application]  | `application:boot`                   | Application                                             |
| [Application][application]  | `application:viewRender`             | Application, View                                       |
| [Cache][cache]              | `cache:afterSet`                     | Cache                                                   |
| [Cache][cache]              | `cache:afterGet`                     | Cache                                                   |
| [Cache][cache]              | `cache:afterHas`                     | Cache                                                   |
| [Cache][cache]              | `cache:afterIncrement`               | Cache                                                   |
| [Cache][cache]              | `cache:afterDecrement`               | Cache                                                   |
| [Cache][cache]              | `cache:afterDelete`                  | Cache                                                   |
| [Cache][cache]              | `cache:beforeSet`                    | Cache                                                   |
| [Cache][cache]              | `cache:beforeGet`                    | Cache                                                   |
| [Cache][cache]              | `cache:beforeHas`                    | Cache                                                   |
| [Cache][cache]              | `cache:beforeIncrement`              | Cache                                                   |
| [Cache][cache]              | `cache:beforeDecrement`              | Cache                                                   |
| [Cache][cache]              | `cache:beforeDelete`                 | Cache                                                   |
| [CLI][application-cli]      | `dispatch:beforeException`           | Console, Exception                                      |
| [Console][application-cli]  | `console:afterHandleTask`            | Console, Task                                           |
| [Console][application-cli]  | `console:afterStartModule`           | Console, Module                                         |
| [Console][application-cli]  | `console:beforeHandleTask`           | Console, Dispatcher                                     |
| [Console][application-cli]  | `console:beforeStartModule`          | Console, Module                                         |
| [Console][application-cli]  | `console:boot`                       | Console                                                 |
| [Db][db-layer]              | `db:afterQuery`                      | Db                                                      |
| [Db][db-layer]              | `db:beforeQuery`                     | Db                                                      |
| [Db][db-layer]              | `db:beginTransaction`                | Db                                                      |
| [Db][db-layer]              | `db:createSavepoint`                 | Db, Savepoint Name                                      |
| [Db][db-layer]              | `db:commitTransaction`               | Db                                                      |
| [Db][db-layer]              | `db:releaseSavepoint`                | Db, Savepoint Name                                      |
| [Db][db-layer]              | `db:rollbackTransaction`             | Db                                                      |
| [Db][db-layer]              | `db:rollbackSavepoint`               | Db, Savepoint Name                                      |
| [Dispatcher][dispatcher]    | `dispatch:afterBinding`              | Dispatcher                                              |
| [Dispatcher][dispatcher]    | `dispatch:afterCallAction`           | Dispatcher                                              |
| [Dispatcher][dispatcher]    | `dispatch:afterDispatch`             | Dispatcher                                              |
| [Dispatcher][dispatcher]    | `dispatch:afterDispatchLoop`         | Dispatcher                                              |
| [Dispatcher][dispatcher]    | `dispatch:afterExecuteRoute`         | Dispatcher                                              |
| [Dispatcher][dispatcher]    | `dispatch:afterInitialize`           | Dispatcher                                              |
| [Dispatcher][dispatcher]    | `dispatch:beforeDispatch`            | Dispatcher                                              |
| [Dispatcher][dispatcher]    | `dispatch:beforeCallAction`          | Dispatcher                                              |
| [Dispatcher][dispatcher]    | `dispatch:beforeDispatchLoop`        | Dispatcher                                              |
| [Dispatcher][dispatcher]    | `dispatch:beforeException`           | Dispatcher, Exception                                   |
| [Dispatcher][dispatcher]    | `dispatch:beforeExecuteRoute`        | Dispatcher                                              |
| [Dispatcher][dispatcher]    | `dispatch:beforeForward`             | Dispatcher, array  (MVC Dispatcher)                     |
| [Dispatcher][dispatcher]    | `dispatch:beforeNotFoundAction`      | Dispatcher                                              |
| [Loader][autoload]          | `loader:afterCheckClass`             | Loader, Class Name                                      |
| [Loader][autoload]          | `loader:beforeCheckClass`            | Loader, Class Name                                      |
| [Loader][autoload]          | `loader:beforeCheckPath`             | Loader                                                  |
| [Loader][autoload]          | `loader:pathFound`                   | Loader, File Path                                       |
| [Micro][application-micro]  | `micro:afterBinding`                 | Micro                                                   |
| [Micro][application-micro]  | `micro:afterHandleRoute`             | Micro, return value mixed                               |
| [Micro][application-micro]  | `micro:afterExecuteRoute`            | Micro                                                   |
| [Micro][application-micro]  | `micro:beforeException`              | Micro, Exception                                        |
| [Micro][application-micro]  | `micro:beforeExecuteRoute`           | Micro                                                   |
| [Micro][application-micro]  | `micro:beforeHandleRoute`            | Micro                                                   |
| [Micro][application-micro]  | `micro:beforeNotFound`               | Micro                                                   |
| [Model][db-models]          | `model:afterCreate`                  | Model                                                   |
| [Model][db-models]          | `model:afterDelete`                  | Model                                                   |
| [Model][db-models]          | `model:afterFetch`                   | Model                                                   |
| [Model][db-models]          | `model:afterSave`                    | Model                                                   |
| [Model][db-models]          | `model:afterUpdate`                  | Model                                                   |
| [Model][db-models]          | `model:afterValidation`              | Model                                                   |
| [Model][db-models]          | `model:afterValidationOnCreate`      | Model                                                   |
| [Model][db-models]          | `model:afterValidationOnUpdate`      | Model                                                   |
| [Model][db-models]          | `model:beforeDelete`                 | Model                                                   |
| [Model][db-models]          | `model:beforeCreate`                 | Model                                                   |
| [Model][db-models]          | `model:beforeSave`                   | Model                                                   |
| [Model][db-models]          | `model:beforeUpdate`                 | Model                                                   |
| [Model][db-models]          | `model:beforeValidation`             | Model                                                   |
| [Model][db-models]          | `model:beforeValidationOnCreate`     | Model                                                   |
| [Model][db-models]          | `model:beforeValidationOnUpdate`     | Model                                                   |
| [Model][db-models]          | `model:notDeleted`                   | Model                                                   |
| [Model][db-models]          | `model:notSaved`                     | Model                                                   |
| [Model][db-models]          | `model:onValidationFails`            | Model                                                   |
| [Model][db-models]          | `model:prepareSave`                  | Model                                                   |
| [Model][db-models]          | `model:validation`                   | Model                                                   |
| [Models Manager][db-models] | `modelsManager:afterInitialize`      | Manager, Model                                          |
| [Request][request]          | `request:afterAuthorizationResolve`  | Request, ['server' => Server array]                     |
| [Request][request]          | `request:beforeAuthorizationResolve` | Request, ['headers' => [Headers], 'server' => [Server]] |
| [Response][response]        | `response:afterSendHeaders`          | Response                                                |
| [Response][response]        | `response:beforeSendHeaders`         | Response                                                |
| [Router][routing]           | `router:afterCheckRoutes`            | Router                                                  |
| [Router][routing]           | `router:beforeCheckRoutes`           | Router                                                  |
| [Router][routing]           | `router:beforeCheckRoute`            | Router, Route                                           |
| [Router][routing]           | `router:beforeMount`                 | Router, Group                                           |
| [Router][routing]           | `router:matchedRoute`                | Router, Route                                           |
| [Router][routing]           | `router:notMatchedRoute`             | Router, Route                                           |
| [Storage][storage]          | `storage:afterSet`                   | Storage                                                 |
| [Storage][storage]          | `storage:afterGet`                   | Storage                                                 |
| [Storage][storage]          | `storage:afterHas`                   | Storage                                                 |
| [Storage][storage]          | `storage:afterIncrement`             | Storage                                                 |
| [Storage][storage]          | `storage:afterDecrement`             | Storage                                                 |
| [Storage][storage]          | `storage:afterDelete`                | Storage                                                 |
| [Storage][storage]          | `storage:beforeSet`                  | Storage                                                 |
| [Storage][storage]          | `storage:beforeGet`                  | Storage                                                 |
| [Storage][storage]          | `storage:beforeHas`                  | Storage                                                 |
| [Storage][storage]          | `storage:beforeIncrement`            | Storage                                                 |
| [Storage][storage]          | `storage:beforeDecrement`            | Storage                                                 |
| [Storage][storage]          | `storage:beforeDelete`               | Storage                                                 |
| [View][views]               | `view:afterCompile`                  | Volt                                                    |
| [View][views]               | `view:afterRender`                   | View                                                    |
| [View][views]               | `view:afterRenderView`               | View                                                    |
| [View][views]               | `view:beforeCompile`                 | Volt                                                    |
| [View][views]               | `view:beforeRender`                  | View                                                    |
| [View][views]               | `view:beforeRenderView`              | View, View Engine Path                                  |
| [View][views]               | `view:notFoundView`                  | View, View Engine Path                                  |
| [Volt][volt]                | `compileFilter`                      | Volt, [name, arguments, function arguments]             |
| [Volt][volt]                | `compileFunction`                    | Volt, [name, arguments, function arguments]             |
| [Volt][volt]                | `compileStatement`                   | Volt, [statement]                                       |
| [Volt][volt]                | `resolveExpression`                  | Volt, [expression]                                      |

## Exceptions

Any exceptions thrown in the Events component will be of type [Phalcon\Events\Exception][events-exception]. You can use
this exception to selectively catch exceptions thrown only from this component.

```php
<?php

use Phalcon\Events\EventsManager;
use Phalcon\Events\Exception;

try {
    $eventsManager = new EventsManager();
    $eventsManager->attach('custom:custom', true);
} catch (Exception $ex) {
    echo $ex->getMessage();
}
```

### Granular Exceptions

As of 5.13.1 the component raises granular subclasses of `Phalcon\Events\Exception` so callers can catch a specific
failure mode. Existing `catch (Phalcon\Events\Exception $e)` blocks continue to work unchanged.

| Class                                                      | Parent                     | Thrown when                                                                    |
|------------------------------------------------------------|----------------------------|--------------------------------------------------------------------------------|
| `Phalcon\Events\Exceptions\EventNotCancelable`             | `Phalcon\Events\Exception` | `stop()` is called on an event that was registered as non-cancellable.         |
| `Phalcon\Events\Exceptions\InvalidEventHandler`            | `Phalcon\Events\Exception` | A handler registered against an event is not callable or an object.            |
| `Phalcon\Events\Exceptions\InvalidEventSource`             | `Phalcon\Events\Exception` | The event's source argument is not a valid origin.                             |
| `Phalcon\Events\Exceptions\InvalidEventType`               | `Phalcon\Events\Exception` | An event name does not follow the `type:event` convention.                     |
| `Phalcon\Events\Exceptions\InvalidSubscriberConfiguration` | `Phalcon\Events\Exception` | An object subscribed via `attach()` does not implement the expected interface. |
| `Phalcon\Events\Exceptions\NoListenersForEvent`            | `Phalcon\Events\Exception` | Strict mode is enabled and an event is fired that has no registered listeners. |

[contracts-event]: api/phalcon_contracts.md#contractseventsevent

[contracts-eventsaware]: api/phalcon_contracts.md#contractseventseventsaware

[contracts-manager]: api/phalcon_contracts.md#contractseventsmanager

[contracts-stoppable]: api/phalcon_contracts.md#contractseventsstoppable

[db]: api/phalcon_db.md

[di-factorydefaul]: api/phalcon_di.md#difactorydefault

[di-injectable]: api/phalcon_di.md#diinjectable

[events-event]: api/phalcon_events.md#eventsevent

[events-eventinterface]: api/phalcon_events.md#eventseventinterface

[events-eventsawareinterface]: api/phalcon_events.md#eventseventsawareinterface

[events-exception]: api/phalcon_events.md#eventsexception

[events-manager]: api/phalcon_events.md#eventsmanager

[events-managerinterface]: api/phalcon_events.md#eventsmanagerinterface

[events-subscriber]: api/phalcon_contracts.md#contractseventssubscriber

[mvc-controller]: api/phalcon_mvc.md#mvccontroller

[mvc-model]: api/phalcon_mvc.md#mvcmodel

[acl]: acl.md

[application]: application.md

[application-cli]: application-cli.md

[cache]: cache.md

[storage]: storage.md

[db-layer]: db-layer.md

[dispatcher]: dispatcher.md

[autoload]: autoload.md

[application-micro]: application-micro.md

[db-models]: db-models.md

[request]: request.md

[response]: response.md

[routing]: routing.md

[views]: views.md

[volt]: volt.md                
