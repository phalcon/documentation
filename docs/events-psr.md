# Events Manager (PSR-14)
- - -

## Overview
Starting with Phalcon v6.0, the events system supports [PSR-14][psr-14] compatible event dispatching. This is the recommended approach for all new code. The [Phalcon\Events\Manager][events-manager] now implements `Psr\EventDispatcher\EventDispatcherInterface`, allowing you to dispatch **typed event objects** instead of relying on string-based event names.

The PSR-14 approach offers several advantages:

- **Type safety** - Event listeners receive strongly typed event objects instead of generic `Event` instances
- **IDE support** - Autocompletion and refactoring support for event classes and their properties
- **Interoperability** - Works with any PSR-14 compliant library or framework
- **Clarity** - Each event is a dedicated class with a clear purpose and well-defined data

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\AfterCreateEvent;

$eventsManager = new EventsManager();

// Listen for a specific event class
$eventsManager->attach(
    AfterCreateEvent::class,
    function (AfterCreateEvent $event) {
        echo 'Record created: ' . $event->model->getId();
    }
);
```

!!! info "NOTE"

    The legacy string-based `fire()` method still works for backwards compatibility. You can gradually migrate to PSR-14 style events. See [Legacy Events Manager](events.md) for the old documentation.

## PSR-14 Compliance
The [Phalcon\Events\Manager][events-manager] implements `Psr\EventDispatcher\EventDispatcherInterface` from the [psr/event-dispatcher][psr-14] package. This means:

- The `dispatch()` method accepts any object as an event
- Event listeners are registered via `attach()` using either a class name or a custom string name
- Any PSR-14 compliant listener can work with the Phalcon events manager

```php
<?php

use Psr\EventDispatcher\EventDispatcherInterface;
use Phalcon\Events\Manager as EventsManager;

// The manager satisfies the PSR-14 interface
$eventsManager = new EventsManager();
assert($eventsManager instanceof EventDispatcherInterface);
```

## The `dispatch()` Method
The `dispatch()` method is the PSR-14 compatible way to fire events. It accepts an event object and optional name and source parameters:

```php
public function dispatch(
    object $event,
    string|array|null $name = null,
    ?object $source = null
): mixed
```

| Parameter | Description                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------|
| `$event`  | The event object to dispatch. Can be any object.                                                  |
| `$name`   | Optional event name. If `null`, the event's class name is used as the key. Can be a string or an array of strings (joined with `:`). |
| `$source` | Optional source object that triggered the event.                                                  |

### Dispatching by class name
When no `$name` is provided, listeners are matched by the event object's fully qualified class name:

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\AfterCreateEvent;
use MyApp\Models\Invoices;

$eventsManager = new EventsManager();

// Register listener for the event class
$eventsManager->attach(
    AfterCreateEvent::class,
    function (AfterCreateEvent $event) {
        echo 'Created: ' . get_class($event->model);
    }
);

// Dispatch - listeners attached to AfterCreateEvent::class will fire
$invoice = new Invoices();
$eventsManager->dispatch(new AfterCreateEvent($invoice));
```

### Dispatching by name
You can provide a custom string name to target specific listeners:

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\AfterCreateEvent;
use MyApp\Models\Invoices;

$eventsManager = new EventsManager();

$eventsManager->attach(
    'invoices:afterCreate',
    function (AfterCreateEvent $event) {
        echo 'Invoice created';
    }
);

$invoice = new Invoices();
$eventsManager->dispatch(
    new AfterCreateEvent($invoice),
    'invoices:afterCreate'
);
```

### Dispatching with array names
You can pass an array of strings as the name. They will be joined with `:` to form the event key:

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\AfterCreateEvent;
use MyApp\Models\Invoices;

$eventsManager = new EventsManager();

$eventsManager->attach(
    'MyApp\Models\Invoices:afterCreate',
    function (AfterCreateEvent $event) {
        echo 'Invoice created';
    }
);

$invoice = new Invoices();
$eventsManager->dispatch(
    new AfterCreateEvent($invoice),
    name: [Invoices::class, 'afterCreate']
);
```

## The `PsrEventInterface`
Phalcon provides a marker interface [Phalcon\Events\PsrEventInterface][events-psreventinterface] to identify PSR-14 style event objects. While any object can be dispatched via `dispatch()`, implementing this interface makes it clear that the event is designed for the PSR-14 flow:

```php
<?php

namespace Phalcon\Events;

interface PsrEventInterface
{
}
```

Implement this interface in your custom event classes:

```php
<?php

namespace MyApp\Events;

use Phalcon\Events\PsrEventInterface;

class OrderShippedEvent implements PsrEventInterface
{
    public function __construct(
        public readonly int $orderId,
        public readonly string $trackingNumber,
    ) {
    }
}
```

## Creating Event Objects
Event objects are simple PHP classes that carry data about something that happened. Unlike the legacy system where event data is passed as loose parameters, PSR-14 events encapsulate all relevant data as typed properties.

### Simple event
```php
<?php

namespace MyApp\Events;

use Phalcon\Events\PsrEventInterface;

class UserRegisteredEvent implements PsrEventInterface
{
    public function __construct(
        public readonly int $userId,
        public readonly string $email,
    ) {
    }
}
```

### Event with model reference
For database model events, Phalcon provides `Phalcon\Db\Event\AbstractModelEvent` as a base class:

```php
<?php

namespace Phalcon\Db\Event;

use Phalcon\Events\PsrEventInterface;
use Phalcon\Mvc\Model;

abstract class AbstractModelEvent implements PsrEventInterface
{
    public function __construct(public Model $model)
    {
    }
}
```

Each specific model event extends this base:

```php
<?php

// These are provided by Phalcon:
use Phalcon\Db\Event\AfterCreateEvent;
use Phalcon\Db\Event\AfterDeleteEvent;
use Phalcon\Db\Event\AfterFetchEvent;
use Phalcon\Db\Event\AfterSaveEvent;
use Phalcon\Db\Event\AfterUpdateEvent;
use Phalcon\Db\Event\NotDeletedEvent;
use Phalcon\Db\Event\NotSavedEvent;
use Phalcon\Db\Event\OnValidationFailsEvent;
use Phalcon\Db\Event\PrepareSaveEvent;
```

Each event class holds a reference to the model that triggered it via the public `$model` property.

## Handlers and Listeners
You can register handlers for PSR-14 events using the same `attach()` method. The key difference is **what the handler receives**: a typed event object instead of a generic `Phalcon\Events\Event`.

### Anonymous function
```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\AfterCreateEvent;

$eventsManager = new EventsManager();

$eventsManager->attach(
    AfterCreateEvent::class,
    function (AfterCreateEvent $event) {
        // Access the model directly from the typed event
        $model = $event->model;
        echo 'New record ID: ' . $model->getId();
    }
);
```

### Listener class with `__invoke`
A listener class implementing `__invoke` will be called automatically:

```php
<?php

namespace MyApp\Listeners;

use Phalcon\Db\Event\AfterCreateEvent;

class AuditCreateListener
{
    public function __invoke(AfterCreateEvent $event): void
    {
        $model = $event->model;
        // Log the creation to an audit table
        error_log('Created: ' . get_class($model) . '#' . $model->getId());
    }
}
```

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\AfterCreateEvent;
use MyApp\Listeners\AuditCreateListener;

$eventsManager = new EventsManager();

$eventsManager->attach(
    AfterCreateEvent::class,
    new AuditCreateListener()
);
```

### Listener class with named methods
When using named event dispatch (e.g. `model:afterCreate`), the events manager will look for a method matching the event name on the listener object:

```php
<?php

namespace MyApp\Listeners;

use Phalcon\Db\Event\AfterCreateEvent;
use Phalcon\Db\Event\AfterDeleteEvent;

class ModelLifecycleListener
{
    public function afterCreate(AfterCreateEvent $event): void
    {
        error_log('Model created: ' . get_class($event->model));
    }

    public function afterDelete(AfterDeleteEvent $event): void
    {
        error_log('Model deleted: ' . get_class($event->model));
    }
}
```

## The `firePsrEvent()` Helper
Components that use the `Phalcon\Events\Traits\EventsAwareTrait` gain access to the `firePsrEvent()` helper method, which is the PSR-14 counterpart to the legacy `fireManagerEvent()`:

```php
protected function firePsrEvent(
    PsrEventInterface $event,
    ?string $name = null
): mixed
```

This method checks if an events manager is set and dispatches the event through it:

```php
<?php

namespace MyApp\Components;

use Phalcon\Events\EventsAwareInterface;
use Phalcon\Events\ManagerInterface;
use Phalcon\Events\PsrEventInterface;
use Phalcon\Events\Traits\EventsAwareTrait;

class PaymentProcessor implements EventsAwareInterface
{
    use EventsAwareTrait;

    public function processPayment(Order $order): void
    {
        $this->firePsrEvent(
            new PaymentStartedEvent($order)
        );

        // ... process payment ...

        $this->firePsrEvent(
            new PaymentCompletedEvent($order, $transactionId)
        );
    }
}
```

## Priorities
Priorities work the same way with PSR-14 events. When attaching listeners, you can set a priority to control execution order:

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\AfterCreateEvent;

$eventsManager = new EventsManager();
$eventsManager->enablePriorities(true);

// This runs first (higher priority)
$eventsManager->attach(
    AfterCreateEvent::class,
    function (AfterCreateEvent $event) {
        echo 'High priority listener';
    },
    200
);

// This runs second (lower priority)
$eventsManager->attach(
    AfterCreateEvent::class,
    function (AfterCreateEvent $event) {
        echo 'Normal priority listener';
    },
    100
);
```

## Backwards Compatibility
The old `fire()` method and the new `dispatch()` method share the same underlying listener queue. This means:

- Listeners registered with `attach()` are triggered by **both** `fire()` and `dispatch()`
- You can gradually migrate from `fire()` to `dispatch()` without breaking existing listeners
- Old-style and new-style listeners can coexist

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Events\Event;

$eventsManager = new EventsManager();

// Old-style listener - still works
$eventsManager->attach(
    'model:afterCreate',
    function (Event $event, $model) {
        echo 'Legacy listener fired';
    }
);

// New-style listener on the same event name
$eventsManager->attach(
    'model:afterCreate',
    function ($event) {
        echo 'PSR-14 listener fired';
    }
);

// Both listeners fire with the old method
$eventsManager->fire('model:afterCreate', $model);

// Both listeners also fire with the new method
$eventsManager->dispatch(new AfterCreateEvent($model), 'model:afterCreate');
```

!!! warning "NOTE"

    When using `fire()` with a string event type that does **not** contain a colon (`:`) and the data parameter is an object, the call is automatically delegated to `dispatch()`. This enables a smooth transition path.

## Migration Guide
To migrate from the legacy event system to PSR-14:

### Step 1: Create event classes
Replace string-based event types with dedicated event classes:

```php
<?php

// Before (legacy):
// $eventsManager->fire('notifications:beforeSend', $this, $data);

// After (PSR-14):
namespace MyApp\Events;

use Phalcon\Events\PsrEventInterface;

class BeforeSendNotificationEvent implements PsrEventInterface
{
    public function __construct(
        public readonly array $recipients,
        public readonly string $message,
    ) {
    }
}
```

### Step 2: Update listeners
Change listeners to accept the typed event object:

```php
<?php

// Before (legacy):
// $eventsManager->attach(
//     'notifications:beforeSend',
//     function (Event $event, $component, $data) {
//         $recipients = $data['recipients'];
//     }
// );

// After (PSR-14):
$eventsManager->attach(
    BeforeSendNotificationEvent::class,
    function (BeforeSendNotificationEvent $event) {
        $recipients = $event->recipients;
    }
);
```

### Step 3: Update dispatching
Replace `fire()` calls with `dispatch()`:

```php
<?php

// Before (legacy):
// $this->eventsManager->fire('notifications:beforeSend', $this, $data);

// After (PSR-14):
$this->eventsManager->dispatch(
    new BeforeSendNotificationEvent(
        recipients: $recipients,
        message: $message,
    )
);
```

Or use the `firePsrEvent()` helper if your class uses `EventsAwareTrait`:

```php
<?php

// Using the trait helper:
$this->firePsrEvent(
    new BeforeSendNotificationEvent(
        recipients: $recipients,
        message: $message,
    )
);
```

## Class Hierarchy Dispatch
One of the most powerful features of the PSR-14 event system in Phalcon is **class hierarchy dispatch**. When a component dispatches an event using class-based names, the events manager can resolve listeners registered against the dispatching object's class, any of its parent classes, or any interface it implements. This is a general-purpose mechanism that works with **any** event-aware component -- not just models.

The `dispatch()` method accepts an array as the `$name` parameter (e.g. `[ClassName::class, 'eventName']`), which the manager joins into a single key with `:`. A component can iterate over its own class hierarchy and dispatch the same event object under each class name, so a single listener attached to a parent class or interface fires for every subclass.

The examples below use database models to illustrate the pattern, but the same approach applies to any component that dispatches events through the events manager.

### Listening by class name
You can attach listeners using the fully qualified class name of the object that triggers the event. The listener receives the typed PSR-14 event object:

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\PrepareSaveEvent;

$eventsManager = new EventsManager();

// Listen to ALL events on the Invoices model (wildcard -- keyed by class name only)
$eventsManager->attach(
    \MyApp\Models\Invoices::class,
    new SomeEventHandler()
);

// Listen to a specific event on the Invoices model (keyed by class name + event name)
$eventsManager->attach(
    [\MyApp\Models\Invoices::class, 'prepareSave'],
    function (PrepareSaveEvent $event) {
        echo 'Preparing to save invoice: ' . $event->model->inv_number;
    }
);
```

When the component dispatches an event, two lookups happen for each class in the hierarchy:

1. A **wildcard** event keyed by the class name alone (e.g. `MyApp\Models\Invoices`)
2. A **specific** event keyed by class name + event name (e.g. `MyApp\Models\Invoices:prepareSave`)

### Interface-based listeners
Because the dispatch walks the full class hierarchy, you can register a listener on an **interface** and it will fire for every object that implements it. This is ideal for cross-cutting concerns such as auditing, caching, or access control.

Define an interface:

```php
<?php

interface AuditableInterface
{
    public function getFieldsToAudit(): ?array;
}

class Invoices extends \Phalcon\Mvc\Model implements AuditableInterface
{
    public function getFieldsToAudit(): ?array
    {
        return ['inv_total', 'inv_title'];
    }
}

class Users extends \Phalcon\Mvc\Model implements AuditableInterface
{
    public function getFieldsToAudit(): ?array
    {
        return ['email', 'is_active'];
    }
}
```

Register one listener for the interface -- it fires for **all** objects implementing it:

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\AfterSaveEvent;

$eventsManager = new EventsManager();

// This fires for BOTH Invoices and Users -- and any future AuditableInterface implementor
$eventsManager->attach(
    [AuditableInterface::class, 'afterSave'],
    function (AfterSaveEvent $event) {
        $model = $event->model;
        if ($model instanceof AuditableInterface) {
            $fields = $model->getFieldsToAudit();
            // Record audit log for changed fields...
        }
    }
);
```

### Applying hierarchy dispatch in your own components
You can use the same pattern in any event-aware component you build. The key is to iterate over the class hierarchy when dispatching:

```php
<?php

namespace MyApp\Components;

use Phalcon\Events\EventsAwareInterface;
use Phalcon\Events\Traits\EventsAwareTrait;

class PaymentGateway implements EventsAwareInterface
{
    use EventsAwareTrait;

    public function charge(Order $order): void
    {
        $event = new PaymentChargedEvent($order);

        if ($em = $this->getEventsManager()) {
            // Walk the hierarchy so listeners on interfaces/parents also fire
            foreach ([static::class, ...class_parents($this), ...class_implements($this)] as $className) {
                $em->dispatch($event, name: $className, source: $this);
                $em->dispatch($event, name: [$className, 'charge'], source: $this);
            }
        }
    }
}
```

Now a listener on a `PaymentProviderInterface` that `PaymentGateway` implements would fire automatically, just like the model example above.

## Database Example
For a complete example of PSR-14 events in action, see [PSR-14 Model Events](db-models-events-psr.md) which demonstrates the typed event system using database model lifecycle events.

[events-manager]: api/phalcon_events.md#eventsmanager
[events-psreventinterface]: api/phalcon_events.md
[psr-14]: https://www.php-fig.org/psr/psr-14/
