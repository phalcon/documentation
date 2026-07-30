# Container

- - -

## Overview

`Phalcon\Container\Container` is a modern dependency injection container built alongside the existing `Phalcon\Di\Di`. It supports autowiring, service lifetimes, lazy value resolution, service tags, and decorator extension. It is designed for both standard PHP shared-nothing requests and long-running environments (Octane, Swoole, RoadRunner).

`Container` is the recommended choice for new projects. `Phalcon\Di\Di` remains fully supported and is not being removed.

!!! warning "WARNING"

    `Container` cannot be used with components that use the Inversion of Control methodology in Phalcon. That is, the container is available in the component, and it is used to retrieve a different service to be used in that component. An example is the `Response` object which internally retrieves the `Filter` service for filtering. For this to happen, we need to widen the `getDI()` and `setDI()` which will affect backwards compatibility. As such, Container cannot be used out of the box for this version. This refers to the `Registering as the Framework Default` section below. In the next major version we will change the interfaces to offer this functionality.

!!! info "NOTE"

    `Container` does not implement PSR-11 `ContainerInterface`. It implements `ioc-interop/IocContainer` (`getService()`/`hasService()`). A PSR-11 bridge adapter is planned for a future release.

---

## Quick Start

```php
<?php

use Phalcon\Container\Container;

$container = new Container();

$container->set('mailer', Mailer::class);

$mailer = $container->get('mailer');
```

---

## Registering Services

### By Class Name

Pass a fully-qualified class name as a string. The container resolves constructor dependencies automatically on first resolution via autowiring.

```php
<?php

use Phalcon\Container\Container;

$container = new Container();
$container->set('logger', FileLogger::class);
$container->set('mailer', Mailer::class);

// Mailer's constructor receives a FileLogger automatically if type-hinted
$mailer = $container->get('mailer');
```

### By Closure

Pass a closure. The container is passed as the only argument when the closure is invoked.

```php
<?php

use Phalcon\Container\Container;

$container = new Container();
$container->set('db', function (Container $c) {
    return new DatabaseConnection(
        $c->get('db.host'),
        (int) $c->get('db.port'),
    );
});
```

### By Object Instance

Pass an already-constructed object. It is returned as-is on every `get()` call.

```php
<?php

use Phalcon\Container\Container;

$container = new Container();
$container->set('config', new Config(['debug' => true]));
```

---

## Retrieving Services

### `get()` - Shared Instance

Returns a shared (cached) instance for `SCOPED` and `SINGLETON` lifetimes. Calls the definition once and stores the result.

```php
<?php

$mailer = $container->get('mailer');
```

### `new()` - Fresh Instance

Always creates a new instance, bypassing the shared cache, regardless of the service lifetime.

```php
<?php

$mailer = $container->new('mailer');
```

### `has()` - Check

Returns `true` if the name is registered, cached, is a parameter, or is an autowirable class name.

```php
<?php

if ($container->has('mailer')) {
    $mailer = $container->get('mailer');
}
```

### `getServiceNames()` - Registered Definitions

Returns the names of every registered service definition, in registration order. Names that exist only as an alias, a pre-set instance or a parameter are not included, and neither are classes that autowiring would resolve on demand.

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Definition\ServiceLifetime;

$container = new Container();

$container->set('mailer', Mailer::class);
$container->set('logger', Logger::class);
$container->setAlias('log', 'logger');
$container->setInstance('request', $requestObject, ServiceLifetime::SCOPED);
$container->setParameter('db.host', 'localhost');

// ['mailer', 'logger']
$names = $container->getServiceNames();
```

`has()` answers whether one name can be resolved, counting aliases, instances, parameters and autowirable classes. `getServiceNames()` answers the narrower question of what has been explicitly defined, which is what a debug panel, a console command listing services, or a boot-time audit needs.

Pair it with `getDefinition()` to read each definition:

```php
<?php

foreach ($container->getServiceNames() as $name) {
    $definition = $container->getDefinition($name);

    echo $name . ': ' . $definition->getLifetime() . PHP_EOL;
}
```

!!! info "NOTE"

    `getServiceNames()` is declared on `Phalcon\Contracts\Container\Service\Enumerable`, a capability contract separate from `Phalcon\Contracts\Container\Service\Collection`. `Phalcon\Container\Container` implements both. Tooling that reports on a container - a debug panel, a console command - type-hints `Enumerable` and detects support with `instanceof`, rather than depending on the concrete class. `Collection` mirrors the service-interop surface, which has no notion of enumeration, so the capability is stated in a second interface instead of being added to the first.

---

## Service Lifetimes

Three lifetimes are available via `Phalcon\Container\Definition\ServiceLifetime`:

| Constant    | Behavior                                                                                                                             |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `SCOPED`    | Shared within a request. **Default.** In long-running environments, clear per-request via `unsetInstances(ServiceLifetime::SCOPED)`. |
| `SINGLETON` | Shared across all requests. Never cleared automatically.                                                                             |
| `TRANSIENT` | Never cached. A new instance is created on every `get()` call - identical to always calling `new()`.                                 |

In standard PHP (shared-nothing model), `SCOPED` and `SINGLETON` behave identically. The distinction matters only in long-running process environments.

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Definition\ServiceLifetime;

$container = new Container();

$container->set('session', Session::class)
          ->setLifetime(ServiceLifetime::SCOPED);      // cleared per-request (default)

$container->set('config', AppConfig::class)
          ->setLifetime(ServiceLifetime::SINGLETON);   // persists across requests

$container->set('query', QueryBuilder::class)
          ->setLifetime(ServiceLifetime::TRANSIENT);   // always a fresh instance
```

---

## Autowiring

Autowiring is enabled by default. When a class name is registered - or looked up directly by class name - the container uses reflection to resolve constructor dependencies automatically.

```php
<?php

use Phalcon\Container\Container;

class LoggerAwareMailer
{
    public function __construct(private FileLogger $logger) {}
}

$container = new Container();
$container->set('logger', FileLogger::class);
$container->set('mailer', LoggerAwareMailer::class);

// FileLogger is injected into LoggerAwareMailer automatically
$mailer = $container->get('mailer');

// Without defining FileLogger or LoggerAwareMailer
$container = new Container();
$container->set('mailer', LoggerAwareMailer::class);
```

Autowiring can be disabled globally. `setAutowire()` returns the container, so it can be chained with other registration calls:

```php
<?php

$container->setAutowire(false)
          ->setParameter('db.host', 'localhost');
```

When disabled, only explicitly registered services are resolved.

---

## Service Definition

`set()` returns a `ServiceDefinition` object. Use it to configure the service fluently before it is first resolved.

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Definition\ServiceLifetime;

$container = new Container();

$container->set('mailer', Mailer::class)
          ->setLifetime(ServiceLifetime::TRANSIENT)
          ->addTag('notification.sender');
```

### The Freeze Pattern

`ServiceDefinition` is mutable during registration. On first resolution, the container calls `freeze()` on the definition: reflection runs once, constructor arguments are collated and locked, and all setters are disabled. Subsequent resolutions use the pre-computed data with no further reflection overhead.

Attempting to modify a frozen definition - calling `setLifetime()`, `addTag()`, `setArgument()`, etc. - throws `FrozenDefinition`.

### Constructor Argument Overrides

Use `setArgument()` to override specific constructor parameters by name:

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Resolver\Lazy\Lazy;

$container = new Container();

$container->set('db', DatabaseConnection::class)
          ->setArgument('host', Lazy::get('db.host'))
          ->setArgument('port', Lazy::get('db.port'));
```

---

## Interface Binding

Use `bind()` to map an interface to a concrete class. Services that type-hint the interface receive the concrete implementation during autowiring.

```php
<?php

use Phalcon\Container\Container;

$container = new Container();
$container->bind(LoggerInterface::class, FileLogger::class);

// Mailer type-hints LoggerInterface - FileLogger is injected automatically
$container->set('mailer', Mailer::class);

$mailer = $container->get('mailer');
```

`bind()` is a semantic wrapper around `set()` and returns a `ServiceDefinition` for further configuration.

---

## Aliases

Register a short name that points to an existing service. The alias chain is resolved transparently on every `get()` or `has()` call.

```php
<?php

use Phalcon\Container\Container;

$container = new Container();
$container->set(LoggerInterface::class, FileLogger::class);
$container->setAlias(LoggerInterface::class, 'logger');

// Both names resolve to the same shared instance
$a = $container->get(LoggerInterface::class);
$b = $container->get('logger');
```

!!! info "NOTE"

    Circular aliases are detected at registration time and throw `CircularAliasFound`.

---

## Parameters

Parameters store scalar values (strings, integers, arrays, environment variables) separately from services. They are retrieved via `get()` the same as services.

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Resolver\Lazy\Lazy;

$container = new Container();

$container
    ->setParameter('db.name', 'my_database')
    ->setParameter('db.host', Lazy::env('DB_HOST'))
    ->setParameter('db.port', Lazy::env('DB_PORT', 'int'))
    ->setParameter('app.allowed_ips', Lazy::csEnv('ALLOWED_IPS'));

// Retrieve
$host = $container->get('db.host');
$port = $container->get('db.port');
```

`Resolvable` parameter values (such as `Lazy::env()`) are resolved on first `get()` and their result is cached back.

---

## Lazy Values

`Phalcon\Container\Resolver\Lazy\Lazy` is a static factory that provides convenient construction of all lazy value types. Import one class instead of twelve separate ones.

```php
<?php

use Phalcon\Container\Resolver\Lazy\Lazy;
```

| Factory Method                                                 | Purpose                                                         |
|----------------------------------------------------------------|-----------------------------------------------------------------|
| `Lazy::get(string $id)`                                        | Resolves a service by name via `get()`                          |
| `Lazy::newInstance(string $id)`                                | Creates a fresh instance via `new()`                            |
| `Lazy::call(callable $callable)`                               | Calls a callable, passing the container                         |
| `Lazy::getCall(string $id, string $method, array $args)`       | Gets a shared service then calls a method on it                 |
| `Lazy::newCall(string $id, string $method, array $args)`       | Creates a fresh instance then calls a method on it              |
| `Lazy::staticCall(string $className, string $method, array $args)` | Calls a static method on a class                                |
| `Lazy::functionCall(string $function, array $args)`            | Calls a plain PHP function                                      |
| `Lazy::arrayValues(array $values)`                             | Resolves an array of lazy values recursively                    |
| `Lazy::callableGet(string $id)`                                | Returns a closure wrapping `get($id)`                           |
| `Lazy::callableNew(string $id)`                                | Returns a closure wrapping `new($id)`                           |
| `Lazy::env(string $name, string $type = null)`                 | Reads an environment variable with optional type casting        |
| `Lazy::csEnv(string $name, string $type = null)`               | Reads a comma-separated environment variable into a typed array |

### Usage

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Resolver\Lazy\Lazy;

$container = new Container();

$container
    ->setParameter('db.host', Lazy::env('DB_HOST'))
    ->setParameter('db.port', Lazy::env('DB_PORT', 'int'));

$container->set('db', DatabaseConnection::class)
          ->setArgument('host', Lazy::get('db.host'))
          ->setArgument('port', Lazy::get('db.port'));

// Static factory
$container->setParameter('app.version', Lazy::staticCall(AppVersion::class, 'current', []));

// Callable wrappers - useful for passing lazy service references
$getMailer = $container->callableGet('mailer');  // Closure: fn() => $container->get('mailer')
$newMailer  = $container->callableNew('mailer');  // Closure: fn() => $container->new('mailer')
```

---

## Service Tags

Tag services to group them by a label. Retrieve all tagged services as resolved instances with `getByTag()`.

```php
<?php

use Phalcon\Container\Container;

$container = new Container();

$container->set('subscriber.email', EmailSubscriber::class)
          ->addTag('event.subscriber');
$container->set('subscriber.log', LogSubscriber::class)
          ->addTag('event.subscriber');

// Returns [EmailSubscriber instance, LogSubscriber instance]
$subscribers = $container->getByTag('event.subscriber');

foreach ($subscribers as $subscriber) {
    $subscriber->onEvent($event);
}
```

---

## Service Extension (Decoration)

Decorate an existing service definition with additional callables that run after instantiation. Each extender receives the current instance and the container, and must return the (modified) instance.

```php
<?php

use Phalcon\Container\Container;

$container = new Container();

// On the definition - fluent, before first resolution
$container->set('mailer', Mailer::class)
          ->addExtender(function (Mailer $mailer, Container $c) {
              $mailer->setLogger($c->get('logger'));
              return $mailer;
          });

// Via the container - after registration, before first resolution
$container->extend('mailer', function (Mailer $mailer, Container $c) {
    $mailer->setDebug(true);
    return $mailer;
});
```

Calling `extend()` after the service has already been resolved throws `CannotExtendResolved`.

---

## Service Providers

Service providers encapsulate related service registrations into a dedicated class. They implement `Phalcon\Contracts\Container\Service\Provider`.

```php
<?php

use Phalcon\Contracts\Container\Service\Collection;
use Phalcon\Contracts\Container\Service\Provider;
use Phalcon\Container\Resolver\Lazy\Lazy;

class DatabaseProvider implements Provider
{
    public function provide(Collection $services): void
    {
        $services
            ->setParameter('db.host', Lazy::env('DB_HOST'))
            ->setParameter('db.port', Lazy::env('DB_PORT', 'int'))
            ->setParameter('db.name', Lazy::env('DB_NAME'));

        $services->set('db', function (object $c) {
            return new DatabaseConnection(
                $c->get('db.host'),
                $c->get('db.port'),
                $c->get('db.name'),
            );
        });
    }
}
```

---

## ContainerFactory

`Phalcon\Container\ContainerFactory` bootstraps a fully configured `Container` from a set of `Provider` instances, keeping the `Container` constructor lean.

```php
<?php

use Phalcon\Container\ContainerFactory;

$container = (new ContainerFactory())
    ->addProvider(new DatabaseProvider())
    ->addProvider(new MailProvider())
    ->addProvider(new CacheProvider())
    ->newContainer();
```

`newContainer()` creates a fresh `Container`, calls `$provider->provide($container)` on each registered provider in order, and returns the fully configured container.

---

## Built-in Service Providers

Phalcon ships two ready-made providers that register the standard framework services, so a `Container` can stand in for `Phalcon\Di\FactoryDefault` without listing every service by hand.

| Provider | Registers |
|---|---|
| `Phalcon\Container\Provider\Web` | The standard set of services that `Phalcon\Di\FactoryDefault` pre-registers for web (MVC) applications. |
| `Phalcon\Container\Provider\Cli` | The standard set of services that `Phalcon\Di\FactoryDefault\Cli` pre-registers for CLI applications. |

```php
<?php

use Phalcon\Container\ContainerFactory;
use Phalcon\Container\Provider\Web;

$container = (new ContainerFactory())
    ->addProvider(new Web())
    ->newContainer();
```

---

## Using Container Without Di

`Container` can be used as the primary - or sole - dependency injection mechanism in your application. `Phalcon\Di\Di` is not required.

### Standalone Bootstrap

Use `ContainerFactory` with service providers to build a fully configured container, then pass it directly to `Phalcon\Mvc\Application` in place of `Di`.

```php
<?php

use Phalcon\Container\ContainerFactory;
use Phalcon\Mvc\Application;
use Phalcon\Mvc\View;
use Phalcon\Mvc\Url;

$container = (new ContainerFactory())
    ->addProvider(new RouterProvider())
    ->addProvider(new ViewProvider())
    ->addProvider(new DatabaseProvider())
    ->addProvider(new MailProvider())
    ->newContainer();

$application = new Application($container);

$response = $application->handle($_SERVER['REQUEST_URI']);
$response->send();
```

### Registering as the Framework Default

Passing `Container` to `Di::setDefault()` makes it available to any component extending `Phalcon\Di\Injectable` - including controllers. Magic property access (`$this->serviceName`) resolves services from `Container` automatically.

```php
<?php

use Phalcon\Container\ContainerFactory;
use Phalcon\Di\Di;

$container = (new ContainerFactory())
    ->addProvider(new AppServiceProvider())
    ->newContainer();

Di::setDefault($container);
```

With this in place, a controller accessing `$this->logger` or `$this->db` will resolve those services from `Container` rather than `Di`.

### Service Provider Example for MVC Services

When using `Container` as the sole container, all services that `Phalcon\Mvc\Application` depends on must be registered - the same services that `FactoryDefault` would otherwise pre-register.

```php
<?php

use Phalcon\Contracts\Container\Service\Collection;
use Phalcon\Contracts\Container\Service\Provider;
use Phalcon\Mvc\Router;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\View;
use Phalcon\Mvc\Url;
use Phalcon\Http\Request;
use Phalcon\Http\Response;

class MvcProvider implements Provider
{
    public function provide(Collection $services): void
    {
        $services->set('router', Router::class);
        $services->set('dispatcher', Dispatcher::class);
        $services->set('request', Request::class);
        $services->set('response', Response::class);

        $services->set('view', function (object $c) {
            $view = new View();
            $view->setViewsDir(APP_PATH . '/views/');
            return $view;
        });

        $services->set('url', function (object $c) {
            $url = new Url();
            $url->setBaseUri('/');
            return $url;
        });
    }
}
```

!!! info "NOTE"

    `FactoryDefault` pre-registers all standard Phalcon services for convenience. When using `Container` directly, register only the services your application actually uses - which also means you start with no unnecessary overhead.

---

## Instance Management

For advanced use cases - such as long-running process request boundaries - shared instances can be managed directly.

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Definition\ServiceLifetime;

$container = new Container();

// Inject pre-built instances - setInstance() is fluent
$container
    ->setInstance('request', $requestObject, ServiceLifetime::SCOPED)
    ->setInstance('response', $responseObject, ServiceLifetime::SCOPED);

// Clear all SCOPED instances at request end (Octane / Swoole pattern)
$container->unsetInstances(ServiceLifetime::SCOPED);

// Remove a single cached instance
$container->unsetInstance('session');
```

---

## Exceptions

Every exception thrown by `Container` lives under the `Phalcon\Container\Exceptions` namespace and extends `Phalcon\Container\Exceptions\Exception`, which implements the `Phalcon\Container\Exceptions\ContainerThrowable` interface. Catch the interface to handle any container failure, or catch a specific subclass to react to a single cause.

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Exceptions\ContainerThrowable;
use Phalcon\Container\Exceptions\ServiceNotFound;

$container = new Container();

try {
    $service = $container->get('unknown-service');
} catch (ServiceNotFound $ex) {
    echo 'Service not found: ' . $ex->getMessage();
} catch (ContainerThrowable $ex) {
    echo 'Container error: ' . $ex->getMessage();
}
```

| Exception | Thrown when |
|---|---|
| `ServiceNotFound` | `get()` or `new()` is called for an unregistered, non-autowirable name |
| `ServiceNotRegistered` | `getService()` is called for a name that was never registered |
| `InstanceNotFound` | `getInstance()` finds no cached instance for the name |
| `ParameterNotFound` | `getParameter()` finds no parameter for the name |
| `CircularAliasFound` | An alias chain points back to itself (detected at registration) |
| `FrozenDefinition` | A frozen definition is mutated (`setLifetime()`, `addTag()`, `setArgument()`, ...) |
| `CannotExtendResolved` | `extend()` is called after the service has already been resolved |
| `CannotResolveParameter` | Autowiring cannot resolve a constructor parameter |
| `NoProcessorFound` | No processor matches a definition during resolution |
| `NoClassSet` | A class-backed definition is resolved with no class set |
| `NoFactorySet` | A factory-backed definition is resolved with no factory set |
| `InvalidExtender` | An extender returns a non-object |
| `EnvNotDefined` | `Lazy::env()` reads an environment variable that is not defined |
