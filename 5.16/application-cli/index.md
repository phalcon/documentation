---
title: "CLI Application"
version: "5.16"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# CLI Application

## Overview

CLI stands for Command Line Interface. CLI applications are executed from the command line or a shell prompt. One of the benefits of CLI applications is that they do not have a view layer (only potentially echoing output on the screen) and can be run more than once at a time. Some common usages are cron job tasks, manipulation scripts, import data scripts, command utilities, and more.

### Structure

You can create a CLI application in Phalcon, using the `Phalcon\Cli\Console` class. This class extends from the main abstract application class and uses a directory in which the `Task` scripts are located. `Task` scripts are classes that extend `Phalcon\Cli\Task` and contain the code that needs to be executed.

The directory structure of a CLI application can look like this:

```bash
src/tasks/MainTask.php
php cli.php
```

In the above example, the `cli.php` is the entry point of our application, while the `src/tasks` directory contains all the task classes that handle each command.

:::info[NOTE]
Each task file and class **must** be suffixed with `Task`. The default task (if no parameters have been passed) is `MainTask`, and the default method to be executed inside a task is `main`
:::

## Bootstrap

As seen above, the entry point of our CLI application is the `cli.php`. In that script, we need to bootstrap our application with relevant services, directives, etc. This is similar to the all-familiar `index.php` that we use for MVC applications.

```php
<?php

declare(strict_types=1);

use Exception;
use Phalcon\Autoload\Loader;
use Phalcon\Cli\Console;
use Phalcon\Cli\Dispatcher;
use Phalcon\Cli\Console\Exception as PhalconException;
use Phalcon\Di\FactoryDefault\Cli as CliDI;
use Throwable;

$loader = new Loader();
$loader->setNamespaces(
[
    'MyApp' => 'src/',
]
);
$loader->register();

$container  = new CliDI();
$dispatcher = new Dispatcher();

$dispatcher->setDefaultNamespace('MyApp\Tasks');
$container->setShared('dispatcher', $dispatcher);

$container->setShared('config', function () {
return include 'app/config/config.php';
});

$console = new Console($container);

$arguments = [];
foreach ($argv as $k => $arg) {
if ($k === 1) {
    $arguments['task'] = $arg;
} elseif ($k === 2) {
    $arguments['action'] = $arg;
} elseif ($k >= 3) {
    $arguments['params'][] = $arg;
}
}

try {
$console->handle($arguments);
} catch (PhalconException $e) {
fwrite(STDERR, $e->getMessage() . PHP_EOL);
exit(1);
} catch (Throwable $throwable) {
fwrite(STDERR, $throwable->getMessage() . PHP_EOL);
exit(1);
} catch (Exception $exception) {
fwrite(STDERR, $exception->getMessage() . PHP_EOL);
exit(1);
}
```

Let's look at the code above in more detail.

First, we need to create all the necessary services for our CLI application. We are going to create a loader to autoload our tasks, the CLI application, a dispatcher, and a CLI Console application. These are the minimum amount of services that we need to instantiate to create a CLI application.

**Loader**

```php
$loader = new Loader();
$loader->setNamespaces(
[
    'MyApp' => 'src/',
]
);
$loader->register();
```

Create the Phalcon autoloader and register the namespace to point to the src/ directory.

:::info[NOTE]
If you decided to use the Composer autoloader in your `composer.json`, you do not need to register the loader in this application
:::

**DI**

```php
$container  = new CliDI();
```

We need a Dependency Injection container. You can use the `Phalcon\Di\FactoryDefault\Cli` container, which already has services registered for you. Alternatively, you can always use the `Phalcon\Di` and register the services you need, one after another.

**Dispatcher**

```php
$dispatcher = new Dispatcher();

$dispatcher->setDefaultNamespace('MyApp\Tasks');
$container->setShared('dispatcher', $dispatcher);
```

CLI applications need a specific dispatcher. `Phalcon\Cli\Dispatcher` offers the same functionality as the main dispatcher for MVC applications, but it is tailored to CLI applications. As expected, we instantiate the dispatcher object, set our default namespace, and then register it in the DI container.

**Config**

```php
$container->setShared(
'config', 
function () {
    return include 'app/config/config.php';
}
);
```

The above snippet is optional but will allow you to access any configuration settings you have set up.

Make sure to update the include path to be relative to where your `cli.php` file is.

**Application**

```php
$console = new Console($container);
```

As mentioned above, a CLI application is handled by the `Phalcon\Cli\Console` class. Here we instantiate it and pass it to the DI container.

**Arguments**

Our application needs arguments. These come in the form of:

```bash
php ./cli.php argument1 argument2 argument3 ...
```

The first argument relates to the task to be executed. The second is the action, and after that follow the parameters we need to pass.

```php
$arguments = [];
foreach ($argv as $k => $arg) {
if ($k === 1) {
    $arguments['task'] = $arg;
} elseif ($k === 2) {
    $arguments['action'] = $arg;
} elseif ($k >= 3) {
    $arguments['params'][] = $arg;
}
}
```

As you can see in the above, we use the `$argv` to receive what has been passed through the command line, and we split those arguments accordingly to understand what task and action need to be invoked and with what parameters.

So for the following example:

```bash
php ./cli.php users recalculate 10
```

Our application will invoke the `UsersTask`, call the `recalculate` action and pass the parameter `10`.

**Execution**

```php
try {
$console->handle($arguments);
} catch (PhalconException $e) {
fwrite(STDERR, $e->getMessage() . PHP_EOL);
exit(1);
} catch (Throwable $throwable) {
fwrite(STDERR, $throwable->getMessage() . PHP_EOL);
exit(1);
} catch (Exception $exception) {
fwrite(STDERR, $exception->getMessage() . PHP_EOL);
exit(1);
}
```

In the code above, we use our console object and call `handle` with the calculated parameters. The CLI application will do the necessary routing and dispatch the task and action requested. If an exception is thrown, it will be caught by the `catch` statements, and errors will be displayed on the screen accordingly.

## Tasks

Tasks are the equivalent of controllers in an MVC application. Any CLI application needs at least one task called `MainTask` and a `mainAction`. Any task defined needs to have a `mainAction` which will be called if no action is defined. You are not restricted to the number of actions that each task can contain.

An example of a task class (`src/Tasks/MainTask.php`) is:

```php
<?php

declare(strict_types=1);

namespace MyApp\Tasks;

use Phalcon\Cli\Task;

class MainTask extends Task
{
public function mainAction()
{
    // This is the default task and the default action
    echo '000000' . PHP_EOL;
}
}
```

You can implement your tasks by either extending the supplied `Phalcon\Cli\Task` or writing your own class implementing the `Phalcon\Cli\TaskInterface`.

## Actions

As seen above, we have specified the second parameter to be the action. The task can contain more than one action.

```php
<?php

declare(strict_types=1);

namespace MyApp\Tasks;

use Phalcon\Cli\Task;

class UsersTask extends Task
{
public function mainAction()
{
    // This is the default task and the default action
    echo '000000' . PHP_EOL;
}

public function regenerateAction(int $count = 0)
{
    // This is the regenerate action
    echo '111111' . PHP_EOL;
}
}
```

We can then call the `main` action (default action):

```bash
./cli.php users
```

or the regenerate action:

```bash
./cli.php users regenerate
```

Action methods receive the routed parameters as positional arguments, followed by any CLI options the dispatcher collected (appended as trailing arguments). Declare optional trailing parameters in your action to read those options.

## Parameters

You can also pass parameters to actions. An example of how to process the parameters can be found above, in the sample bootstrap file.

```php
<?php

declare(strict_types=1);

namespace MyApp\Tasks;

use Phalcon\Cli\Task;

class UsersTask extends Task
{
public function mainAction()
{
    echo '000000' . PHP_EOL;
}

public function addAction(int $first, int $second)
{
    echo $first + $second . PHP_EOL;
}
}
```

We can then run the following command:

```bash
php cli.php users add 4 5

9
```

Parameters can also be accessed through the `Phalcon\Cli\Dispatcher` which is helpful when passing flags in or an unknown number of parameters.

```php
<?php

declare(strict_types=1);

namespace MyApp\Tasks;

use Phalcon\Cli\Task;

class UsersTask extends Task
{
public function mainAction()
{
    print_r( $this->dispatcher->getParams() );
}

}
```

Running this will then output:

```bash
php cli.php users main additional parameters

Array
(
[0] => additional
[1] => parameters
)
```

## Previous Dispatch Accessors

The [Phalcon\Cli\Dispatcher][cli-dispatcher] exposes the same previous-dispatch getters as `Phalcon\Mvc\Dispatcher`. After a `forward()`, they return the task, action, and namespace that were active before the forward took place.

```php
<?php

declare(strict_types=1);

namespace MyApp\Tasks;

use Phalcon\Cli\Task;

class UsersTask extends Task
{
public function mainAction()
{
    echo $this->dispatcher->getPreviousHandlerName();   // previous task name
    echo $this->dispatcher->getPreviousActionName();    // previous action name
    echo $this->dispatcher->getPreviousNamespaceName(); // previous namespace name
}
}
```

The MVC-specific `getPreviousControllerName()` alias is not part of the CLI dispatcher; use `getPreviousHandlerName()` to read the previous task name.

## Chain

You can also chain tasks. To run them one after another, we need to make a small change in our bootstrap: we need to register our application in the DI container:

```php
// ...
$console = new Console($container);
$container->setShared('console', $console);

$arguments = [];
// ...
```

Now that the console application is inside the DI container, we can access it from any task.

Assume we want to call the `printAction()` from the `Users` task, all we have to do is call it, using the container.

```php
<?php

namespace MyApp\Tasks;

use Phalcon\Cli\Console;
use Phalcon\Cli\Task;

/**
 * @property Console $console
 */
class UsersTask extends Task
{
public function mainAction()
{
    # This is the default task and the default action
    echo '000000' . PHP_EOL;

    # Also handle the `print` action
    $this->console->handle(
        [
            'task'   => 'users',
            'action' => 'print',
        ]
    );
}

public function printAction()
{
    # Print action executed also
    echo '444444' . PHP_EOL;
}
}
```

This technique allows you to run any task and any action from any other task. However, it is not recommended because it could lead to maintenance nightmares. It is better to extend `Phalcon\Cli\Task` and implement your logic there.

## Modules

CLI applications can also handle different modules, the same as MVC applications. You can register different modules in your CLI application to handle different paths of your CLI application. This allows for better organization of your code and grouping of tasks.

You can register a `frontend` and `backend` module for your console application as follows:

```php
<?php

declare(strict_types=1);

use Exception;
use MyApp\Modules\Backend\Module as BackendModule;
use MyApp\Modules\Frontend\Module as FrontendModule;
use Phalcon\Autoload\Loader;
use Phalcon\Cli\Console;
use Phalcon\Cli\Dispatcher;
use Phalcon\Di\FactoryDefault\Cli as CliDI;
use Phalcon\Exception as PhalconException;
use Throwable;

$loader = new Loader();
$loader->setNamespaces(
[
    'MyApp' => 'src/',
]
);
$loader->register();

$container  = new CliDI();
$dispatcher = new Dispatcher();

$dispatcher->setDefaultNamespace('MyApp\Tasks');
$container->setShared('dispatcher', $dispatcher);

$console = new Console($container);

$console->registerModules(
[
    'frontend' => [
        'className' => FrontendModule::class,
        'path'      => './src/frontend/Module.php',
    ],
    'backend' => [
        'className' => BackendModule::class,
        'path'      => './src/backend/Module.php',
    ],
]
);

$arguments = [];
foreach ($argv as $k => $arg) {
if ($k === 1) {
    $arguments['task'] = $arg;
} elseif ($k === 2) {
    $arguments['action'] = $arg;
} elseif ($k >= 3) {
    $arguments['params'][] = $arg;
}
}

try {
$console->handle($arguments);
} catch (PhalconException $e) {
fwrite(STDERR, $e->getMessage() . PHP_EOL);
exit(1);
} catch (Throwable $throwable) {
fwrite(STDERR, $throwable->getMessage() . PHP_EOL);
exit(1);
} catch (Exception $exception) {
fwrite(STDERR, $exception->getMessage() . PHP_EOL);
exit(1);
}
```

The above code assumes that you have structured your directories to contain modules in the `frontend` and `backend` directories.

```bash
src/
src/backend/Module.php
src/frontend/Module.php
php cli.php
```

### Module Definitions

The console processes module definitions the same way as `Phalcon\Mvc\Application`. A module can be defined as an array (as shown above) or as a `Closure`. The closure receives the DI container as its only argument and is invoked when the module starts:

```php
<?php

declare(strict_types=1);

use MyApp\Modules\Backend\ReportWriter;
use Phalcon\Cli\Console;
use Phalcon\Di\DiInterface;
use Phalcon\Di\FactoryDefault\Cli as CliDI;

$container = new CliDI();
$console   = new Console($container);

$console->registerModules(
[
    'backend' => function (DiInterface $container) {
        $container->setShared('reportWriter', ReportWriter::class);
    },
]
);
```

For array definitions, the class named by `className` is resolved from the container and its `registerAutoloaders()` and `registerServices()` methods are called automatically. For closure definitions, the closure body is responsible for any service registration; `registerAutoloaders()` and `registerServices()` are not called.

A module name that was never registered raises `Phalcon\Application\Exceptions\ModuleNotRegistered`. A definition that is neither an array nor a `Closure` raises `Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition`. That exception names the offending module and the reason it was rejected.

### Methods

The CLI application offers the following methods:

```php
public function getDefaultModule(): string
```

Returns the default module name

```php
public function getModule(string $name): array | object
```

Gets the module definition registered in the application via module name

```php
public function getModules(): array
```

Return the modules registered in the application

```php
public function registerModules(array $modules, bool $merge = false): AbstractApplication
```

Register an array of modules present in the application

```php
public function setDefaultModule(string $defaultModule): AbstractApplication
```

Sets the module name to be used if the router does not return a valid module

## Routes

The CLI application has its own router. By default, the Phalcon CLI application uses the [Phalcon\Cli\Router][cli-router] object, but you can implement your own by using the [Phalcon\Cli\RouterInterface][cli-routerinterface].

### Default Routes

Similar to an MVC application, the [Phalcon\Cli\Router][cli-router] uses [Phalcon\Cli\Router\Route][cli-router-route] objects to store the route information. You can always implement your own objects by implementing the [Phalcon\Cli\Router\RouteInterface][cli-router-routeinterface].

These routes support regex parameters, such as `a-zA-Z0-9`, and also provide additional placeholders:

| Placeholder  | Description                                |
|--------------|--------------------------------------------|
| `:module`    | The module (need to set modules first)     |
| `:task`      | The task name                              |
| `:namespace` | The namespace name                         |
| `:action`    | The action                                 |
| `:params`    | Any parameters                             |
| `:int`       | Whether this is an integer route parameter |

The default routes are:

- `/:task/:action`
- `/:task/:action/:params`

If you prefer not to use the default routes, you can disable them by passing `false` when constructing the [Phalcon\Cli\Router][cli-router] object:

```php
<?php

declare(strict_types=1);

use Phalcon\Cli\Router;

$router = new Router(false);
```

For more details about routes and route classes, you can refer to the [Routing][routing] page.

### Router Behavior

Several behaviors are specific to [Phalcon\Cli\Router][cli-router] and its routes:

- `beforeMatch()` validates its callback at registration. Passing a non-callable throws `Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable` at the registration line, not later inside `handle()`.
- `handle()` returns the router instance. A string argument (or none) is matched against the registered routes; an array argument bypasses matching and is used as the already-resolved `module`/`task`/`action`/`params`, so `wasMatched()` stays `false` and `getMatchedRoute()` returns `null`.
- `getParameters()` returns the processed parameters. The older `getParams()` is deprecated in its favor.
- [Phalcon\Cli\Router\Route][cli-router-route] `::delimiter()` sets a process-global delimiter that each route captures at construction. Set it once during bootstrap, before any routes are created. `Route::reset()` rewinds the internal route-id sequence and is intended for test isolation only.
- The router always constructs the concrete [Phalcon\Cli\Router\Route][cli-router-route]; there is no injection point for an externally built route, so [Phalcon\Cli\Router\RouteInterface][cli-router-routeinterface] is a marker for type hints. The fluent route API (`beforeMatch()`, `convert()`) lives on the concrete `Route`.

```php
<?php

declare(strict_types=1);

use Phalcon\Cli\Router;
use Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable;

$router = new Router();

try {
// A non-callable beforeMatch is rejected at registration
$router->add('users')
       ->beforeMatch('not-a-callback');
} catch (BeforeMatchNotCallable $ex) {
echo $ex->getMessage();
}

// handle() returns the router instance
$result = $router->handle('users');

echo $result->getTaskName();
```

## Events

CLI applications in Phalcon are [event-aware][events], allowing you to utilize the `setEventsManager` and `getEventsManager` methods to access the events manager. The following events are available:

| Event               | Stop | Description                                                                                                            |
|---------------------|:----:|------------------------------------------------------------------------------------------------------------------------|
| `afterHandleTask`   | Yes  | Called after the task is handled. It allows you to perform actions after the task execution.                           |
| `afterStartModule`  | Yes  | Called after processing a module (if modules are used). Useful for post-processing tasks after a module is executed.   |
| `beforeHandleTask`  |  No  | Called before the task is handled. It provides an opportunity to perform actions before the task execution.            |
| `beforeStartModule` | Yes  | Called before processing a module (if modules are used). Useful for pre-processing tasks before a module is executed.  |
| `boot`              | Yes  | Called when the application boots. It is useful for performing actions during the application's bootstrapping process. |

Unlike [Phalcon\Mvc\Application][mvc-application], where `afterStartModule` is a notification whose return value is ignored, the console honors a `false` return from `afterStartModule` and aborts handling (shown as `Stop = Yes` above).

If you are using the [Phalcon\Cli\Dispatcher][cli-dispatcher], you can also leverage the `beforeException` event, which can stop operations and is fired from the dispatcher object.

These events offer hooks into different stages of the CLI application's lifecycle, enabling you to execute custom logic at specific points in the application flow.

## Exceptions

Any exception thrown in the `Phalcon\Cli\Console` component will be of type `Phalcon\Cli\Console\Exception`, which allows you to trap the exception specifically. The one exception to this rule is an unregistered module name, which raises `Phalcon\Application\Exceptions\ModuleNotRegistered` - a subclass of `Phalcon\Application\Exception`, shared with `Phalcon\Mvc\Application`.

### Granular Exceptions

The CLI Console and Router raise granular subclasses of their respective `Exception` types so callers can catch a specific failure mode. Existing `catch (Phalcon\Cli\Console\Exception $e)` / `catch (Phalcon\Cli\Router\Exception $e)` blocks continue to work unchanged.

Module processing is aligned with `Phalcon\Mvc\Application`. An unregistered module name raises `Phalcon\Application\Exceptions\ModuleNotRegistered`, which extends `Phalcon\Application\Exception` - **not** `Phalcon\Cli\Console\Exception`. A `catch (Phalcon\Cli\Console\Exception $e)` block does not trap an unregistered module; catch `Phalcon\Application\Exception` or the granular subclass instead.

| Class                                                         | Parent                          | Thrown when                                                      |
|---------------------------------------------------------------|---------------------------------|------------------------------------------------------------------|
| `Phalcon\Application\Exceptions\ModuleNotRegistered`          | `Phalcon\Application\Exception` | A module name passed to `handle()` was never registered.         |
| `Phalcon\Cli\Console\Exceptions\ContainerRequired`            | `Phalcon\Cli\Console\Exception` | The console is invoked without a DI container.                   |
| `Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition`      | `Phalcon\Cli\Console\Exception` | A module definition is neither an array nor a `Closure`.         |
| `Phalcon\Cli\Console\Exceptions\ModuleDefinitionPathNotFound` | `Phalcon\Cli\Console\Exception` | A module definition `path` points at a file that does not exist. |
| `Phalcon\Cli\Router\Exceptions\BeforeMatchNotCallable`        | `Phalcon\Cli\Router\Exception`  | A route `beforeMatch` callback is not callable.                  |
| `Phalcon\Cli\Router\Exceptions\InvalidRoutePaths`             | `Phalcon\Cli\Router\Exception`  | Route paths cannot be processed to a routable array.             |
| `Phalcon\Cli\Router\Exceptions\RouterArgumentsInvalidType`    | `Phalcon\Cli\Router\Exception`  | Arguments passed to `handle()` are not a string or array.        |

`Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition` reports which module was rejected and why. The constructor accepts an optional module name and reason, both folded into the exception message. Both parameters are optional, so `new InvalidModuleDefinition()` still produces the base `Invalid module definition` message.

```php
<?php

use Phalcon\Cli\Console\Exceptions\InvalidModuleDefinition;

$exception = new InvalidModuleDefinition(
'backend',
'The module definition object must be a Closure'
);

echo $exception->getMessage();
// Invalid module definition for module 'backend': The module definition object must be a Closure
```

The three router exceptions carry context in their messages. `BeforeMatchNotCallable` and `InvalidRoutePaths` include the route pattern, and `RouterArgumentsInvalidType` includes the received type. The constructor parameter is optional in each, so the base messages are unchanged when no context is supplied.

[cli-dispatcher]: /5.16/api/phalcon_cli/#clidispatcher
[cli-router]: /5.16/api/phalcon_cli/#clirouter
[cli-router-route]: /5.16/api/phalcon_cli/#clirouterroute
[cli-router-routeinterface]: /5.16/api/phalcon_cli/#clirouterrouteinterface
[cli-routerinterface]: /5.16/api/phalcon_cli/#clirouterinterface
[events]: /5.16/events/
[mvc-application]: /5.16/api/phalcon_mvc/#mvcapplication
[routing]: /5.16/routing/

Source: https://docs.phalcon.io/5.16/application-cli/index.mdx
