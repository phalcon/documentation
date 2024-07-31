# Application
- - -
## Overview
The `Phalcon\Mvc\Application` component encapsulates the operations required to run an MVC application. It integrates all the necessary components and services, providing a full-stack application experience.

## Quick Start
To quickly get started with `Phalcon\Mvc\Application`, you can use the following code snippet:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\Application;

// Create a DI container
$container = new FactoryDefault();

// Create an application instance
$application = new Application($container);

try {
    // Handle the request and send the response
    $response = $application->handle($_SERVER["REQUEST_URI"]);
    $response->send();
} catch (\Exception $e) {
    echo 'Exception: ', $e->getMessage();
}
```

!!! warning "NOTE"

    `handle()` accepts a URI and will not operate without it. You can pass the `$_SERVER["REQUEST_URI"]` as a parameter

## Methods
```php
public function __construct(
    DiInterface $container = null
)
```
Constructor. Accepts a DI container with relevant services

```php
public function getDefaultModule(): string
```
Returns the default module name

```php
public function getEventsManager(): ManagerInterface | null
```
Returns the internal event manager

```php
public function getModule(
    string $name
): array | object
```
Gets the module definition registered in the application via the module name

```php
public function getModules(): array
```
Return the modules registered in the application

```php
public function registerModules(
    array $modules, 
    bool $merge = false
): AbstractApplication
```
Register an array of modules present in the application

```php
$this->registerModules(
    [
        "front" => [
            "className" => \Multi\Front\Module::class,
            "path"      => "../apps/front/Module.php",
        ],
        "back" => [
            "className" => \Multi\Back\Module::class,
            "path"      => "../apps/back/Module.php",
        ],
    ]
);
```

```php
public function setDefaultModule(
    string $defaultModule
): AbstractApplication
```
Sets the module name to be used if the router doesn't return a valid module

```php
public function setEventsManager(
    ManagerInterface $eventsManager
): void
```
Sets the events manager

```php
public function handle(
    string $uri
): ResponseInterface | bool
```
Handles an MVC request. Accepts the server URI (usually `$_SERVER['REQUEST_URI`]`)

```php
public function sendCookiesOnHandleRequest(
    bool $sendCookies
): Application
```
Enables or disables sending cookies by each request handling

```php
public function sendHeadersOnHandleRequest(
    bool $sendHeaders
): Application
```
Enables or disables sending headers by each request handling

```php
public function useImplicitView(
    bool $implicitView
): Application
```
This is enabled by default. The view is implicitly buffering all the output. You can fully disable the view component using this method

## Activation
[Phalcon\Mvc\Application][mvc-application] performs all the work necessary to glue all the necessary components together so that the application can run. There are several ways that you can bootstrap your application. The most common way to bootstrap the application is:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\Application;

$container = new FactoryDefault();

// Services
// ...

// Create an application instance
$application = new Application($container);

try {
    // Handle the request and send the response
    $response = $application->handle(
        $_SERVER["REQUEST_URI"]
    );
    $response->send();
} catch (\Exception $e) {
    echo 'Exception: ', $e->getMessage();
}
```

The core of all the work of the controller occurs when `handle()` is invoked:

```php
<?php

$response = $application->handle(
    $_SERVER["REQUEST_URI"]
);
```

## Manual Bootstrapping
If you prefer not to use [Phalcon\Mvc\Application][mvc-application], you can manually handle the bootstrapping process based on your application's requirements. Below are alternative approaches for manual bootstrapping:

### Standard Web Application
```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\Application;

$container = new FactoryDefault();

// Get the 'router' service
$router = $container['router'];

// Handle the request
$router->handle(
    $_SERVER["REQUEST_URI"]
);

// Get the 'view' service
$view = $container['view'];

// Get the 'dispatcher' service
$dispatcher = $container['dispatcher'];

// Set controller, action, and params based on router
$dispatcher->setControllerName(
    $router->getControllerName()
);

$dispatcher->setActionName(
    $router->getActionName()
);

$dispatcher->setParams(
    $router->getParams()
);

// Start buffering the view output
$view->start();

// Dispatch the request
$dispatcher->dispatch();

// Render the view with controller, action, and params
$view->render(
    $dispatcher->getControllerName(),
    $dispatcher->getActionName(),
    $dispatcher->getParams()
);

// Finish buffering the view output
$view->finish();

// Get the 'response' service
$response = $container['response'];

// Set the response content from the view output
$response->setContent(
    $view->getContent()
);

// Send the response
$response->send();
```

### REST API
```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Http\ResponseInterface;
use Phalcon\Mvc\Application;

$container = new FactoryDefault();

// Get the 'router' service
$router = $container['router'];

// Handle the request
$router->handle(
    $_SERVER["REQUEST_URI"]
);

// Get the 'dispatcher' service
$dispatcher = $container['dispatcher'];

// Set controller, action, and params based on router
$dispatcher->setControllerName(
    $router->getControllerName()
);

$dispatcher->setActionName(
    $router->getActionName()
);

$dispatcher->setParams(
    $router->getParams()
);

// Dispatch the request
$dispatcher->dispatch();

// Get the returned value from the dispatcher
$response = $dispatcher->getReturnedValue();

// If the response is an instance of ResponseInterface, send it
if ($response instanceof ResponseInterface) {
    $response->send();
}
```

### Catching Exceptions
```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Http\ResponseInterface;
use Phalcon\Mvc\Application;
use Phalcon\Mvc\Dispatcher\Exception as DispatcherException;

$container = new FactoryDefault();

// Get the 'router' service
$router = $container['router'];

// Handle the request
$router->handle(
    $_SERVER["REQUEST_URI"]
);

// Get the 'dispatcher' service
$dispatcher = $container['dispatcher'];

// Set controller, action, and params based on router
$dispatcher->setControllerName(
    $router->getControllerName()
);

$dispatcher->setActionName(
    $router->getActionName()
);

$dispatcher->setParams(
    $router->getParams()
);

try {
    // Dispatch the request
    $dispatcher->dispatch();
} catch (DispatcherException $e) {
    // Handle exceptions, for example,
    // forward to a 503 error page
    $dispatcher->setControllerName('errors');
    $dispatcher->setActionName('action503');
    $dispatcher->dispatch();
}

// Get the returned value from the dispatcher
$response = $dispatcher->getReturnedValue();

// If the response is an instance of
// `ResponseInterface`, send it
if ($response instanceof ResponseInterface) {
    $response->send();
}
```

Choose the option that best fits your application's needs. Depending on your requirements, you may have full control over instantiation and component replacement to extend default functionality. The manual bootstrapping method should align with your application's specific use case.

## Single - Multi Module
`Phalcon\Mvc\Application` supports both Single and Multi module MVC structures.

### Single Module
In Single module MVC applications, there is only one module. Namespaces are optional. The structure typically looks like this:

```plaintext
single/
    app/
        controllers/
        models/
        views/
    public/
        css/
        img/
        js/
```
If namespaces are not used, the bootstrap file might look like this:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Autoload\Loader;
use Phalcon\Mvc\Application;
use Phalcon\Mvc\View;

$loader = new Loader();
$loader->setDirectories(
    [
        '../apps/controllers/',
        '../apps/models/',
    ]
);
$loader->register();

$container = new FactoryDefault();

$container->set(
    'view', 
    function () {
        $view = new View();
        $view->setViewsDir('../apps/views/');
    
        return $view;
    }
);

$application = new Application($container);

try {
    // Handle the request and send the response
    $response = $application->handle(
        $_SERVER["REQUEST_URI"]
    );
    $response->send();
} catch (\Exception $e) {
    echo 'Exception: ', $e->getMessage();
}
```
If namespaces are used, the bootstrap changes slightly:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Autoload\Loader;
use Phalcon\Mvc\Application;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\View;

$loader = new Loader();
$loader->setNamespaces(
    [
        'Single\Controllers' => '../apps/controllers/',
        'Single\Models'      => '../apps/models/',
    ]
);
$loader->register();

$container = new FactoryDefault();

$container->set('dispatcher', function () {
    $dispatcher = new Dispatcher();
    $dispatcher->setDefaultNamespace('Single\Controllers');
    
    return $dispatcher;
});

$container->set('view', function () {
    $view = new View();
    $view->setViewsDir('../apps/views/');
    
    return $view;
});

$application = new Application($container);

try {
    // Handle the request and send the response
    $response = $application->handle(
        $_SERVER["REQUEST_URI"]
    );
    $response->send();
} catch (\Exception $e) {
    echo 'Exception: ', $e->getMessage();
}
```

### Multi-Module
A multi-module application utilizes a shared document root for more than one module. Modules help organize components, enhance maintainability, and isolate functionality. Each module must implement the [Phalcon\Mvc\ModuleDefinitionInterface][mvc-moduledefinitioninterface] to ensure proper functionality. The directory structure typically includes subdirectories within the `apps/` directory, where each subdirectory has its MVC structure. Additionally, each module directory contains a `Module.php` file to configure module-specific settings, such as autoloaders and custom services.

**Directory Structure**
```plaintext
multiple/
  apps/
    front/
       controllers/
       models/
       views/
       Module.php
    back/
       controllers/
       models/
       views/
       Module.php
  public/
    css/
    img/
    js/
```
In each module directory, the `Module.php` file is responsible for registering autoloaders and services for the specific module. Here is an example `Module.php` file for the `Multi\Back` module:

```php
<?php

namespace Multi\Back;

use Phalcon\Autoload\Loader;
use Phalcon\Di\DiInterface;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\ModuleDefinitionInterface;
use Phalcon\Mvc\View;

class Module implements ModuleDefinitionInterface
{
    public function registerAutoloaders(DiInterface $container = null)
    {
        $loader = new Loader();
        $loader->setNamespaces(
            [
                'Multi\Back\Controllers' => '../apps/back/controllers/',
                'Multi\Back\Models'      => '../apps/back/models/',
            ]
        );

        $loader->register();
    }

    public function registerServices(DiInterface $container)
    {
        // Dispatcher
        $container->set(
            'dispatcher',
            function () {
                $dispatcher = new Dispatcher();
                $dispatcher->setDefaultNamespace(
                    'Multi\Back\Controllers'
                );

                return $dispatcher;
            }
        );

        // View
        $container->set(
            'view',
            function () {
                $view = new View();
                $view->setViewsDir(
                    '../apps/back/views/'
                );

                return $view;
            }
        );
    }
}
```

**Bootstrap File for Multi-Module Architecture**
The bootstrap file for a multi-module MVC architecture requires a slightly modified setup. The router is explicitly configured, and modules are registered with the application. Here is an example bootstrap file:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\Application;
use Phalcon\Mvc\Router;

$container = new FactoryDefault();

$container->set(
    'router',
    function () {
        $router = new Router();

        $router->setDefaultModule('front');

        $router->add(
            '/login',
            [
                'module'     => 'back',
                'controller' => 'login',
                'action'     => 'index',
            ]
        );

        $router->add(
            '/admin/products/:action',
            [
                'module'     => 'back',
                'controller' => 'products',
                'action'     => 1,
            ]
        );

        $router->add(
            '/products/:action',
            [
                'controller' => 'products',
                'action'     => 1,
            ]
        );

        return $router;
    }
);

$application = new Application($container);

$application->registerModules(
    [
        'front' => [
            'className' => \Multi\Front\Module::class,
            'path'      => '../apps/front/Module.php',
        ],
        'back'  => [
            'className' => \Multi\Back\Module::class,
            'path'      => '../apps/back/Module.php',
        ]
    ]
);

try {
    $response = $application->handle(
        $_SERVER["REQUEST_URI"]
    );

    $response->send();
} catch (\Exception $e) {
    echo $e->getMessage();
}
```
Alternatively, you can keep the module configuration in your bootstrap file using anonymous functions to register modules. Here's an example:

```php
<?php

use Phalcon\Mvc\View;

$view = new View();

// ...

$application->registerModules(
    [
        'front' => function ($container) use ($view) {
            $container->setShared(
                'view',
                function () use ($view) {
                    $view->setViewsDir(
                        '../apps/front/views/'
                    );

                    return $view;
                }
            );
        },
        'back' => function ($container) use ($view) {
            $container->setShared(
                'view',
                function () use ($view) {
                    $view->setViewsDir(
                        '../apps/back/views/'
                    );

                    return $view;
                }
            );
        }
    ]
);
```
When a [Phalcon\Mvc\Application][mvc-application] has modules registered, it's crucial that every matched route returns a valid module. Each registered module has an associated class exposing methods for the module setup.

Module definition classes must implement two methods: `registerAutoloaders()` and `registerServices()`. These methods will be called by the [Phalcon\Mvc\Application][mvc-application] accordingly.

## Exceptions
Any exceptions thrown in the [Phalcon\Mvc\Application][mvc-application] component will be of type [Phalcon\Mvc\Application\Exception][mvc-application-exception] or [Phalcon\Application\Exception][application-exception]. You can use this exception to selectively catch exceptions thrown only from this component.

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\Application;
use Phalcon\Mvc\Application\Exception;

try {
    $container   = new FactoryDefault();

    // ...

    $application = new Application($container);
    $application->registerModules(
        [
            'front' => false,
        ]
    );

    $response = $application->handle(
        $_SERVER["REQUEST_URI"]
    );

    $response->send();
} catch (Exception $e) {
    echo $e->getMessage();
}
```

## Events
[Phalcon\Mvc\Application][mvc-application] can send events to the [EventsManager][events] if present. Events are triggered using the type application. The supported events are:


| Event Name            | Triggered                                                    |
|-----------------------|--------------------------------------------------------------|
| `boot`                | Executed when the application handles its first request      |
| `beforeStartModule`   | Before initializing a module, only when modules are registered |
| `afterStartModule`    | After initializing a module, only when modules are registered  |
| `beforeHandleRequest` | Before execute the dispatch loop                             |
| `afterHandleRequest`  | After execute the dispatch loop                              |

Here's an example of how to attach listeners to this component:

```php
<?php

use Phalcon\Events\Event;
use Phalcon\Events\Manager;

$manager = new Manager();

$application->setEventsManager($manager);

$manager->attach(
    'application',
    function (Event $event, $application) {
        // ...
    }
);
```

## External Resources
* [MVC examples on GitHub][mvc-examples]

[application-abstractapplication]: api/phalcon_application.md#applicationabstractapplication
[application-exception]: api/phalcon_application.md#applicationexception
[mvc-application]: api/phalcon_mvc.md#mvcapplication
[mvc-application-exception]: api/phalcon_mvc.md#mvcapplicationexception
[mvc-moduledefinitioninterface]: api/phalcon_mvc.md#mvcmoduledefinitioninterface
[mvc-examples]: https://github.com/phalcon/mvc
[events]: events.md
