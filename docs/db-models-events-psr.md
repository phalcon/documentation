# Model Events (PSR-14)
- - -

## Overview
Starting with Phalcon v6.0, model lifecycle events are dispatched as **typed PSR-14 event objects** in addition to the legacy string-based system. Each event is represented by a dedicated class under `Phalcon\Db\Event`, carrying a direct reference to the model that triggered it. This replaces the generic `Phalcon\Events\Event` object with strongly typed, purpose-specific events.

For the general PSR-14 events system overview, see [PSR-14 Events](events-psr.md).

!!! info "NOTE"

    The legacy string-based model events (`model:beforeCreate`, etc.) continue to work. The PSR-14 events are dispatched **in addition** to the legacy events, so existing code is not affected. See [Legacy Model Events](db-models-events.md) for the old documentation.

## Event Classes
Phalcon provides the following PSR-14 event classes for model lifecycle events. All extend `Phalcon\Db\Event\AbstractModelEvent` and implement `Phalcon\Events\PsrEventInterface`:

| Event Class                                          | Lifecycle          | Cancellable | Description                                       |
|------------------------------------------------------|--------------------|-------------|---------------------------------------------------|
| `Phalcon\Db\Event\AfterCreateEvent`                  | Insert             | No          | Fired after creating a record                     |
| `Phalcon\Db\Event\AfterDeleteEvent`                  | Delete             | No          | Fired after deleting a record                     |
| `Phalcon\Db\Event\AfterFetchEvent`                   | Fetch              | No          | Fired after fetching a record                     |
| `Phalcon\Db\Event\AfterSaveEvent`                    | Insert/Update      | No          | Fired after saving a record                       |
| `Phalcon\Db\Event\AfterUpdateEvent`                  | Update             | No          | Fired after updating a record                     |
| `Phalcon\Db\Event\AfterValidationEvent`              | Insert/Update      | Yes         | Fired after validation completes                  |
| `Phalcon\Db\Event\AfterValidationOnCreateEvent`      | Insert             | Yes         | Fired after validation on create                  |
| `Phalcon\Db\Event\AfterValidationOnUpdateEvent`      | Update             | Yes         | Fired after validation on update                  |
| `Phalcon\Db\Event\BeforeCreateEvent`                 | Insert             | Yes         | Fired before creating a record                    |
| `Phalcon\Db\Event\BeforeDeleteEvent`                 | Delete             | Yes         | Fired before deleting a record                    |
| `Phalcon\Db\Event\BeforeSaveEvent`                   | Insert/Update      | Yes         | Fired before saving a record                      |
| `Phalcon\Db\Event\BeforeUpdateEvent`                 | Update             | Yes         | Fired before updating a record                    |
| `Phalcon\Db\Event\BeforeValidationEvent`             | Insert/Update      | Yes         | Fired before validation starts                    |
| `Phalcon\Db\Event\BeforeValidationOnCreateEvent`     | Insert             | Yes         | Fired before validation on create                 |
| `Phalcon\Db\Event\BeforeValidationOnUpdateEvent`     | Update             | Yes         | Fired before validation on update                 |
| `Phalcon\Db\Event\NotDeletedEvent`                   | Delete             | No          | Fired when a delete fails                         |
| `Phalcon\Db\Event\NotSavedEvent`                     | Insert/Update      | No          | Fired when a save fails                           |
| `Phalcon\Db\Event\OnValidationFailsEvent`            | Insert/Update      | No          | Fired when validation fails                       |
| `Phalcon\Db\Event\PrepareSaveEvent`                  | Insert/Update      | No          | Fired before saving, allows data manipulation     |
| `Phalcon\Db\Event\ValidationEvent`                   | Insert/Update      | Yes         | Fired during validation                           |

### AbstractModelEvent
All model event classes extend a common base:

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

The `$model` property gives you direct, typed access to the model instance that triggered the event.

### AbstractCancellableModelEvent
The 11 cancellable model events (those marked "Yes" in the Cancellable column above) extend `AbstractCancellableModelEvent` instead of `AbstractModelEvent` directly. This class implements PSR-14's `StoppableEventInterface`, giving listeners a standard way to cancel model operations:

```php
<?php

namespace Phalcon\Db\Event;

use Psr\EventDispatcher\StoppableEventInterface;

abstract class AbstractCancellableModelEvent extends AbstractModelEvent implements StoppableEventInterface
{
    private bool $cancelled = false;

    public function cancel(): void
    {
        $this->cancelled = true;
    }

    public function isPropagationStopped(): bool
    {
        return $this->cancelled;
    }
}
```

When a listener calls `$event->cancel()`:

1. No further listeners in the current `fireQueue()` call are invoked
2. No further classes in the model hierarchy are dispatched to
3. The `fireEventCancel()` method returns `false`, aborting the model operation (e.g. preventing a save or delete)

### Concrete event classes
Each non-cancellable event class is a simple extension of the base:

```php
<?php

namespace Phalcon\Db\Event;

class AfterCreateEvent extends AbstractModelEvent
{
}

class AfterDeleteEvent extends AbstractModelEvent
{
}

class PrepareSaveEvent extends AbstractModelEvent
{
}

// ... and so on for each non-cancellable event type
```

Cancellable events extend `AbstractCancellableModelEvent`:

```php
<?php

namespace Phalcon\Db\Event;

class BeforeCreateEvent extends AbstractCancellableModelEvent
{
}

class BeforeDeleteEvent extends AbstractCancellableModelEvent
{
}

class ValidationEvent extends AbstractCancellableModelEvent
{
}

// ... and so on for each cancellable event type
```

## How Events Are Dispatched
When a model triggers a lifecycle event (e.g. during `save()`), the following happens:

1. The model's own event method is called if it exists (e.g. `$model->prepareSave()`)
2. The `modelsEventFactory` service creates the appropriate PSR-14 event object
3. For **each class** in the model's hierarchy (the model class, its parent classes, and its interfaces), the events manager dispatches:
   - A **wildcard** event keyed by the class name (e.g. `MyApp\Models\Invoices`)
   - A **specific** event keyed by class and event name (e.g. `MyApp\Models\Invoices:prepareSave`)
4. The legacy `modelsManager->notifyEvent()` is also called for backwards compatibility

This hierarchy dispatch means a single listener attached to a parent class or interface will fire for **all** models in that hierarchy.

## ModelEventNameEnum
The `Phalcon\Db\Event\ModelEventNameEnum` enum maps string event names to their PSR-14 event classes:

```php
<?php

namespace Phalcon\Db\Event;

enum ModelEventNameEnum: string
{
    case AFTER_CREATE                = 'afterCreate';
    case AFTER_DELETE                = 'afterDelete';
    case AFTER_FETCH                 = 'afterFetch';
    case AFTER_SAVE                  = 'afterSave';
    case AFTER_UPDATE                = 'afterUpdate';
    case AFTER_VALIDATION            = 'afterValidation';
    case AFTER_VALIDATION_ON_CREATE  = 'afterValidationOnCreate';
    case AFTER_VALIDATION_ON_UPDATE  = 'afterValidationOnUpdate';
    case BEFORE_CREATE               = 'beforeCreate';
    case BEFORE_DELETE               = 'beforeDelete';
    case BEFORE_SAVE                 = 'beforeSave';
    case BEFORE_UPDATE               = 'beforeUpdate';
    case BEFORE_VALIDATION           = 'beforeValidation';
    case BEFORE_VALIDATION_ON_CREATE = 'beforeValidationOnCreate';
    case BEFORE_VALIDATION_ON_UPDATE = 'beforeValidationOnUpdate';
    case NOT_DELETED                 = 'notDeleted';
    case NOT_SAVED                   = 'notSaved';
    case ON_VALIDATION_FAILS         = 'onValidationFails';
    case PREPARE_SAVE                = 'prepareSave';
    case VALIDATION                  = 'validation';
}
```

This enum is used internally by the `Factory` class and the events manager to resolve event names to classes and vice versa.

## Event Factory
The `Phalcon\Db\Event\Factory` creates PSR-14 event objects from string event names. It is registered in the DI container as the `modelsEventFactory` service:

```php
<?php

namespace Phalcon\Db\Event;

use Phalcon\Di\Di;
use Phalcon\Events\PsrEventInterface;
use Phalcon\Mvc\Model;

class Factory
{
    public function __construct(protected Di $di)
    {
    }

    public function create($eventName, Model $model): ?PsrEventInterface
    {
        try {
            $className = ModelEventNameEnum::getEventClass($eventName);
            return $this->di->get($className, [$model]);
        } catch (UnknownEventTypeException $e) {
            return null;
        }
    }
}
```

The factory returns `null` for unknown event names, allowing the legacy system to handle them gracefully.

## Listening to Model Events

### Using anonymous functions
The simplest way to listen for model events is with a closure. Attach it using the model class name combined with the event name:

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\AfterCreateEvent;
use MyApp\Models\Invoices;

$eventsManager = new EventsManager();

// Listen to afterCreate on Invoices specifically
$eventsManager->attach(
    [Invoices::class, 'afterCreate'],
    function (AfterCreateEvent $event) {
        $invoice = $event->model;
        echo 'Invoice created: ' . $invoice->inv_number;
    }
);

$invoice = new Invoices();
$invoice->setEventsManager($eventsManager);
$invoice->inv_cst_id = 10;
$invoice->inv_title  = 'Invoice for ACME Inc.';
$invoice->inv_total  = 500.00;
$invoice->save(); // Triggers AfterCreateEvent
```

### Using a listener class
Create a listener class with methods named after the events. The events manager will automatically call the matching method:

```php
<?php

namespace MyApp\Listeners;

use Phalcon\Db\Event\PrepareSaveEvent;
use Phalcon\Db\Event\AfterCreateEvent;
use Phalcon\Db\Event\AfterDeleteEvent;

class InvoiceLifecycleListener
{
    public function prepareSave(PrepareSaveEvent $event): void
    {
        $invoice = $event->model;
        // Auto-generate invoice number before saving
        if (empty($invoice->inv_number)) {
            $invoice->inv_number = 'INV-' . date('YmdHis');
        }
    }

    public function afterCreate(AfterCreateEvent $event): void
    {
        $invoice = $event->model;
        // Send notification about new invoice
        error_log('New invoice created: ' . $invoice->inv_number);
    }

    public function afterDelete(AfterDeleteEvent $event): void
    {
        $invoice = $event->model;
        error_log('Invoice deleted: ' . $invoice->inv_number);
    }
}
```

Attach the listener using the model's class name as a wildcard - the events manager calls the appropriate method for each event type:

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use MyApp\Models\Invoices;
use MyApp\Listeners\InvoiceLifecycleListener;

$eventsManager = new EventsManager();

// Wildcard: listen to ALL events on Invoices
$eventsManager->attach(
    Invoices::class,
    new InvoiceLifecycleListener()
);

$invoice = new Invoices();
$invoice->setEventsManager($eventsManager);
$invoice->inv_cst_id = 10;
$invoice->inv_title  = 'Invoice for ACME Inc.';
$invoice->inv_total  = 500.00;
$invoice->save();
// Calls: InvoiceLifecycleListener::prepareSave()
// Calls: InvoiceLifecycleListener::afterCreate()
```

### Using `__invoke`
A listener class with `__invoke` receives every event dispatched to it:

```php
<?php

namespace MyApp\Listeners;

use Phalcon\Db\Event\AbstractModelEvent;

class ModelEventLogger
{
    public function __invoke(AbstractModelEvent $event): void
    {
        error_log(
            sprintf(
                '[%s] %s on %s',
                date('Y-m-d H:i:s'),
                $event::class,
                get_class($event->model)
            )
        );
    }
}
```

## Cancelling Model Operations
Cancellable events implement `Psr\EventDispatcher\StoppableEventInterface`. A listener can call `$event->cancel()` to abort the model operation:

```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\BeforeCreateEvent;
use MyApp\Models\Invoices;

$eventsManager = new EventsManager();

// Prevent creating invoices with zero total
$eventsManager->attach(
    [Invoices::class, 'beforeCreate'],
    function (BeforeCreateEvent $event) {
        if ($event->model->inv_total <= 0) {
            // Cancel the create operation
            $event->cancel();
        }
    }
);

$invoice = new Invoices();
$invoice->setEventsManager($eventsManager);
$invoice->inv_cst_id = 10;
$invoice->inv_title  = 'Invalid Invoice';
$invoice->inv_total  = 0;
$invoice->save(); // Will NOT create the record - the beforeCreate was cancelled
```

!!! info "NOTE"

    Only the 11 cancellable events (listed with "Yes" in the Cancellable column) support `cancel()`. Non-cancellable events like `AfterCreateEvent` or `PrepareSaveEvent` do not implement `StoppableEventInterface`.

## Interface-Based Event Listening
The class hierarchy dispatch enables a powerful pattern: listen to events on an **interface** so your listener fires for all models that implement it.

### Define an interface
```php
<?php

namespace MyApp\Models;

interface AuditableInterface
{
    public function getFieldsToAudit(): ?array;
}
```

### Implement on your models
```php
<?php

namespace MyApp\Models;

use Phalcon\Mvc\Model;

class Invoices extends Model implements AuditableInterface
{
    public int $inv_id;
    public int $inv_cst_id;
    public string $inv_title;
    public float $inv_total;

    public function getFieldsToAudit(): ?array
    {
        return ['inv_total', 'inv_title'];
    }
}

class Users extends Model implements AuditableInterface
{
    public int $id;
    public string $email;
    public bool $is_active;

    public function getFieldsToAudit(): ?array
    {
        return ['email', 'is_active'];
    }
}
```

### Register one listener for all auditable models
```php
<?php

use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Event\AfterSaveEvent;
use MyApp\Models\AuditableInterface;

$eventsManager = new EventsManager();

// This fires for BOTH Invoices and Users (and any other AuditableInterface)
$eventsManager->attach(
    [AuditableInterface::class, 'afterSave'],
    function (AfterSaveEvent $event) {
        $model = $event->model;
        if ($model instanceof AuditableInterface) {
            $fields = $model->getFieldsToAudit();
            // Write audit log for the changed fields...
            error_log('Audit: ' . get_class($model) . ' saved. Tracking: ' . implode(', ', $fields));
        }
    }
);
```

## DI Container Setup
The `modelsEventFactory` service is automatically registered when using `Phalcon\Di\FactoryDefault`. If you are setting up the DI container manually, register it like this:

```php
<?php

use Phalcon\Di\Di;
use Phalcon\Db\Event\Factory as ModelEventFactory;

$container = new Di();

$container->setShared(
    'modelsEventFactory',
    function () use ($container) {
        return new ModelEventFactory($container);
    }
);
```

## Full Database Example
Here is a complete example showing the PSR-14 event system with database models:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Events\Manager as EventsManager;
use Phalcon\Db\Adapter\Pdo\Mysql;
use Phalcon\Db\Event\PrepareSaveEvent;
use Phalcon\Db\Event\AfterCreateEvent;
use Phalcon\Db\Event\AfterSaveEvent;
use Phalcon\Db\Event\NotSavedEvent;

// Setup DI
$container = new FactoryDefault();

$container->set('db', function () {
    return new Mysql([
        'host'     => 'localhost',
        'username' => 'root',
        'password' => 'secret',
        'dbname'   => 'myapp',
    ]);
});

// Create events manager
$eventsManager = new EventsManager();

// Listener class for Invoices
class InvoiceEventHandler
{
    public function prepareSave(PrepareSaveEvent $event): void
    {
        $invoice = $event->model;
        echo get_class($invoice) . " is being prepared for save\n";
    }

    public function afterCreate(AfterCreateEvent $event): void
    {
        $invoice = $event->model;
        echo "Invoice #{$invoice->inv_id} created\n";
    }

    public function afterSave(AfterSaveEvent $event): void
    {
        $invoice = $event->model;
        echo "Invoice #{$invoice->inv_id} saved\n";
    }
}

// Attach handler to Invoice model events
$eventsManager->attach(
    \MyApp\Models\Invoices::class,
    new InvoiceEventHandler()
);

// Also listen to save failures with a closure
$eventsManager->attach(
    [\MyApp\Models\Invoices::class, 'notSaved'],
    function (NotSavedEvent $event) {
        $invoice = $event->model;
        error_log('Failed to save invoice: ' . implode(', ', $invoice->getMessages()));
    }
);

// Use the model
$invoice = new \MyApp\Models\Invoices();
$invoice->setEventsManager($eventsManager);
$invoice->inv_cst_id = 10;
$invoice->inv_title  = 'Invoice for ACME Inc.';
$invoice->inv_total  = 1500.00;
$invoice->save();
// Output:
// MyApp\Models\Invoices is being prepared for save
// Invoice #1 created
// Invoice #1 saved
```

## Logging SQL Statements
The database layer events work the same way with the PSR-14 system. You can still use the events manager to log SQL statements:

```php
<?php

use Phalcon\Db\Adapter\Pdo\Mysql;
use Phalcon\Di\FactoryDefault;
use Phalcon\Events\Manager;
use Phalcon\Logger\Logger;
use Phalcon\Logger\Adapter\Stream;

$container = new FactoryDefault();
$container->set(
    'db',
    function () {
        $eventsManager = new Manager();
        $adapter = new Stream('/storage/logs/db.log');
        $logger  = new Logger(
            'messages',
            [
                'main' => $adapter,
            ]
        );

        $eventsManager->attach(
            'db:beforeQuery',
            function ($event, $connection) use ($logger) {
                $logger->info(
                    $connection->getSQLStatement()
                );
            }
        );

        $connection = new Mysql(
            [
                'host'     => 'localhost',
                'username' => 'root',
                'password' => 'secret',
                'dbname'   => 'phalcon',
            ]
        );

        $connection->setEventsManager($eventsManager);

        return $connection;
    }
);
```

!!! info "NOTE"

    Database layer events (`db:beforeQuery`, `db:afterQuery`, etc.) currently still use the legacy string-based system. The PSR-14 typed event objects are available for **model lifecycle** events (`afterCreate`, `afterDelete`, `prepareSave`, etc.).

[db]: api/phalcon_db.md
[events-manager]: api/phalcon_events.md#eventsmanager
[events-psr]: events-psr.md
[logger]: logger.md
[mvc-model]: api/phalcon_mvc.md#mvcmodel
