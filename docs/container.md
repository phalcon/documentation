# Container
- - -

## Overview

`Phalcon\Container\Container` is a modern dependency injection container built alongside the existing `Phalcon\Di\Di`. It supports autowiring, service lifetimes, lazy value resolution, service tags, and decorator extension. It is designed for both standard PHP shared-nothing requests and long-running environments (Octane, Swoole, RoadRunner).

`Container` is the recommended choice for new projects. `Phalcon\Di\Di` remains fully supported and is not being removed.

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

Attempting to modify a frozen definition - calling `setLifetime()`, `addTag()`, `setArgument()`, etc. - throws `Invalid`.

### Constructor Argument Overrides

Use `setArgument()` to override specific constructor parameters by name:

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Resolver\Lazy\LazyFactory;

$container = new Container();

$container->set('db', DatabaseConnection::class)
          ->setArgument('host', LazyFactory::get('db.host'))
          ->setArgument('port', LazyFactory::get('db.port'));
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

    Circular aliases are detected at registration time and throw `Invalid`.

---

## Parameters

Parameters store scalar values (strings, integers, arrays, environment variables) separately from services. They are retrieved via `get()` the same as services.

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Resolver\Lazy\LazyFactory;

$container = new Container();

$container
    ->setParameter('db.name', 'my_database')
    ->setParameter('db.host', LazyFactory::env('DB_HOST'))
    ->setParameter('db.port', LazyFactory::env('DB_PORT', 'int'))
    ->setParameter('app.allowed_ips', LazyFactory::csEnv('ALLOWED_IPS'));

// Retrieve
$host = $container->get('db.host');
$port = $container->get('db.port');
```

`Resolvable` parameter values (such as `LazyFactory::env()`) are resolved on first `get()` and their result is cached back.

---

## Lazy Values

`Phalcon\Container\Resolver\Lazy\LazyFactory` is a static factory that provides convenient construction of all lazy value types. Import one class instead of thirteen separate ones.

```php
<?php

use Phalcon\Container\Resolver\Lazy\LazyFactory;
```

| Factory Method                                                              | Purpose                                                                     |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `LazyFactory::get(string $id)`                                              | Resolves a service by name via `get()`                                      |
| `LazyFactory::newInstance(string $id)`                                      | Creates a fresh instance via `new()`                                        |
| `LazyFactory::call(callable $callable)`                                     | Calls a callable, passing the container                                     |
| `LazyFactory::getCall(string $id, string $method, array $args)`             | Gets a shared service then calls a method on it                             |
| `LazyFactory::newCall(string $id, string $method, array $args)`             | Creates a fresh instance then calls a method on it                          |
| `LazyFactory::staticCall(string $className, string $method, array $args)`   | Calls a static method on a class                                            |
| `LazyFactory::functionCall(string $function, array $args)`                  | Calls a plain PHP function                                                  |
| `LazyFactory::arrayValues(array $values)`                                   | Resolves an array of lazy values recursively                                |
| `LazyFactory::callableGet(string $id)`                                      | Returns a closure wrapping `get($id)`                                       |
| `LazyFactory::callableNew(string $id)`                                      | Returns a closure wrapping `new($id)`                                       |
| `LazyFactory::env(string $name, string $type = null)`                       | Reads an environment variable; throws if not defined                        |
| `LazyFactory::envDefault(string $name, mixed $default, string $type = null)`| Reads an environment variable; returns `$default` if not defined            |
| `LazyFactory::csEnv(string $name, string $type = null)`                     | Reads a comma-separated environment variable into a typed array             |

### Usage

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Resolver\Lazy\LazyFactory;

$container = new Container();

// Required env var — throws NotFound if absent
$container
    ->setParameter('db.host', LazyFactory::env('DB_HOST'))
    ->setParameter('db.port', LazyFactory::env('DB_PORT', 'int'));

// Optional env var — returns the default value if absent
$container
    ->setParameter('log.name', LazyFactory::envDefault('LOG_FILENAME', 'app'))
    ->setParameter('log.path', LazyFactory::envDefault('LOG_PATH', 'storage/logs/'))
    ->setParameter('db.port',  LazyFactory::envDefault('DB_PORT', 3306, 'int'));

$container->set('db', DatabaseConnection::class)
          ->setArgument('host', LazyFactory::get('db.host'))
          ->setArgument('port', LazyFactory::get('db.port'));

// Static factory
$container->setParameter('app.version', LazyFactory::staticCall(AppVersion::class, 'current', []));

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

Calling `extend()` after the service has already been resolved throws `Invalid`.

---

## Service Providers

Service providers encapsulate related service registrations into a dedicated class. They implement `Phalcon\Container\Service\Provider`.

```php
<?php

use Phalcon\Container\Service\Collection;
use Phalcon\Container\Service\Provider;
use Phalcon\Container\Resolver\Lazy\LazyFactory;

class DatabaseProvider implements Provider
{
    public function provide(Collection $services): void
    {
        $services
            ->setParameter('db.host', LazyFactory::env('DB_HOST'))
            ->setParameter('db.port', LazyFactory::env('DB_PORT', 'int'))
            ->setParameter('db.name', LazyFactory::env('DB_NAME'));

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

use Phalcon\Container\Service\Collection;
use Phalcon\Container\Service\Provider;
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

// Inject pre-built instances — setInstance() is fluent
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

Exceptions thrown by `Container` are either `Phalcon\Container\Exception\Invalid` or `Phalcon\Container\Exception\NotFound`. Both implement `Phalcon\Container\Exception\ContainerThrowable`.

```php
<?php

use Phalcon\Container\Container;
use Phalcon\Container\Exception\ContainerThrowable;
use Phalcon\Container\Exception\NotFound;

$container = new Container();

try {
    $service = $container->get('unknown-service');
} catch (NotFound $ex) {
    echo 'Service not found: ' . $ex->getMessage();
} catch (ContainerThrowable $ex) {
    echo 'Container error: ' . $ex->getMessage();
}
```

| Exception | Thrown when |
|---|---|
| `NotFound` | `get()` or `new()` called for an unregistered, non-autowirable name; a parameter or instance lookup finds no match |
| `Invalid` | Circular alias detected; no processor found for a definition; extending an already-resolved service; mutating a frozen definition |

[container]: api/phalcon_container.md#container
[container-factory]: api/phalcon_container.md#containerfactory
[container-throwable]: api/phalcon_container.md#containerexceptioncontainerthrowable
[container-invalid]: api/phalcon_container.md#containerexceptioninvalid
[container-notfound]: api/phalcon_container.md#containerexceptionnotfound
[container-servicelifetime]: api/phalcon_container.md#containerdefinitionservicelifetime
[container-servicedefinition]: api/phalcon_container.md#containerdefinitionservicedefinition
[di]: di.md
[application]: application.md