# ADR - Front Controller

- - -

## Overview

The front controller is the entry point of an ADR application. A single call to its `run()` method boots the container, wires the services, handles the incoming request, emits the response, and returns a process exit code.

Phalcon's front controller follows the [front-interop][front-interop] contract, `Phalcon\Contracts\Front\FrontController`:

```php
public function run(): int;   // 0 = success, 1 to 254 = failure
```

The contract is deliberately generic: it describes an entry point into the outermost presentation layer in any context (HTTP, CLI, and so on), so it is not tied to ADR and could be implemented by other stacks as well.

## HttpFront

`Phalcon\ADR\Front\HttpFront` is the ready-to-use HTTP front controller, a concrete subclass of `Phalcon\ADR\Front\AbstractHttpFront`. Its `run()` performs the whole request lifecycle:

1. build the container
2. load the environment and register providers
3. resolve the request and the application from the container
4. handle the request and emit the response
5. return `0`, or hand any `Throwable` to a boot-error handler and return `1`

Bootstrapping an application is a single line, typically in `public/index.php`:

```php
exit((new MyApp\AppFront(dirname(__DIR__)))->run());
```

Note that `run()` returns the exit status rather than calling `exit()` itself, leaving termination to the caller. This is what makes the same front controller usable from a worker loop or a test harness.

## Customizing boot

`AbstractHttpFront` exposes template methods you override to shape the boot process. A typical application supplies its own subclass:

```php
<?php

namespace MyApp;

use Phalcon\ADR\Front\AbstractHttpFront;
use Phalcon\Container\Container;

final class AppFront extends AbstractHttpFront
{
    protected function loadEnvironment(Container $container): void
    {
        // load configuration, .env, and so on
    }

    protected function registerProviders(Container $container): void
    {
        parent::registerProviders($container);   // registers the ADR seams

        $container->get('router')
            ->setBaseNamespace('MyApp\\Action');
    }
}
```

| Method | Purpose |
| ------ | ------- |
| `buildContainer()` | create the DI container (defaults to a new `Phalcon\Container\Container`) |
| `loadEnvironment()` | load configuration before services are registered |
| `registerProviders()` | register services; the default registers the ADR [provider][provider] |
| `handleBootError()` | turn a boot-time `Throwable` into an exit code (defaults to logging and a plain `500`) |

`handleBootError()` covers failures during boot only. Once the application is running, an exception from the pipeline is turned into a response by the [error responder][error-responder], not here.

[front-interop]: https://github.com/front-interop/interface
[provider]: adr-container.md
[error-responder]: adr-error-responder.md
