---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Mvc\Application

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Application.zep){ .src-btn }

Phalcon\Mvc\Application

This component encapsulates all the complex operations behind instantiating
every component needed and integrating it with the rest to allow the MVC
pattern to operate as desired.

```php
use Phalcon\Mvc\Application;

class MyApp extends Application
{
    /**
     * Register the services here to make them general or register
     * in the ModuleDefinition to make them module-specific
     *\/
    protected function registerServices()
    {

    }

    /**
     * This method registers all the modules in the application
     *\/
    public function main()
    {
        $this->registerModules(
            [
                "frontend" => [
                    "className" => "Multiple\\Frontend\\Module",
                    "path"      => "../apps/frontend/Module.php",
                ],
                "backend" => [
                    "className" => "Multiple\\Backend\\Module",
                    "path"      => "../apps/backend/Module.php",
                ],
            ]
        );
    }
}

$application = new MyApp();

$application->main();
```

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - [`Phalcon\Application\AbstractApplication`](phalcon_application.md#applicationabstractapplication)
            - **`Phalcon\Mvc\Application`**

</div>

__Uses__ `Closure` · `Phalcon\Application\AbstractApplication` · `Phalcon\Di\DiInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Http\ResponseInterface` · `Phalcon\Mvc\Application\Exception` · `Phalcon\Mvc\Application\Exceptions\ContainerRequired` · `Phalcon\Mvc\Application\Exceptions\InvalidModuleDefinition` · `Phalcon\Mvc\Application\Exceptions\ModuleDefinitionPathNotFound` · `Phalcon\Mvc\ModuleDefinitionInterface` · `Phalcon\Mvc\Router\RouteInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcapplication-handle">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface|bool</code>
<code class="sig">handle( string $uri )</code>
<span class="desc">Handles a MVC request</span>
</a>
<a class="api-item" href="#mvcapplication-sendcookiesonhandlerequest">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">sendCookiesOnHandleRequest( bool $sendCookies )</code>
<span class="desc">Enables or disables sending cookies by each request handling</span>
</a>
<a class="api-item" href="#mvcapplication-sendheadersonhandlerequest">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">sendHeadersOnHandleRequest( bool $sendHeaders )</code>
<span class="desc">Enables or disables sending headers by each request handling</span>
</a>
<a class="api-item" href="#mvcapplication-useimplicitview">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">useImplicitView( bool $implicitView )</code>
<span class="desc">By default. The view is implicitly buffering all the output</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$implicitView = true` `bool`

-   `protected`{ .vis-protected } `$sendCookies = true` `bool`

-   `protected`{ .vis-protected } `$sendHeaders = true` `bool`

</div>

### Methods

<div class="api-group">Public · 4</div>

#### `handle()` { #mvcapplication-handle }

```php
public function handle( string $uri ): ResponseInterface|bool;
```

Handles a MVC request

#### `sendCookiesOnHandleRequest()` { #mvcapplication-sendcookiesonhandlerequest }

```php
public function sendCookiesOnHandleRequest( bool $sendCookies ): static;
```

Enables or disables sending cookies by each request handling

#### `sendHeadersOnHandleRequest()` { #mvcapplication-sendheadersonhandlerequest }

```php
public function sendHeadersOnHandleRequest( bool $sendHeaders ): static;
```

Enables or disables sending headers by each request handling

#### `useImplicitView()` { #mvcapplication-useimplicitview }

```php
public function useImplicitView( bool $implicitView ): static;
```

By default. The view is implicitly buffering all the output
You can full disable the view component using this method


## Mvc\Application\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Application/Exception.zep){ .src-btn }

Phalcon\Mvc\Application\Exception

Exceptions thrown in Phalcon\Mvc\Application class will use this class

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Application\Exception`](phalcon_application.md#applicationexception)
        - **`Phalcon\Mvc\Application\Exception`**
            - [`Phalcon\Mvc\Application\Exceptions\ContainerRequired`](#mvcapplicationexceptionscontainerrequired)
            - [`Phalcon\Mvc\Application\Exceptions\InvalidModuleDefinition`](#mvcapplicationexceptionsinvalidmoduledefinition)
            - [`Phalcon\Mvc\Application\Exceptions\ModuleDefinitionPathNotFound`](#mvcapplicationexceptionsmoduledefinitionpathnotfound)

</div>


## Mvc\Application\Exceptions\ContainerRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Application/Exceptions/ContainerRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Application\Exception`](phalcon_application.md#applicationexception)
        - [`Phalcon\Mvc\Application\Exception`](#mvcapplicationexception)
            - **`Phalcon\Mvc\Application\Exceptions\ContainerRequired`**

</div>

__Uses__ `Phalcon\Mvc\Application\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcapplicationexceptionscontainerrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcapplicationexceptionscontainerrequired-__construct }

```php
public function __construct();
```


## Mvc\Application\Exceptions\InvalidModuleDefinition

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Application/Exceptions/InvalidModuleDefinition.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Application\Exception`](phalcon_application.md#applicationexception)
        - [`Phalcon\Mvc\Application\Exception`](#mvcapplicationexception)
            - **`Phalcon\Mvc\Application\Exceptions\InvalidModuleDefinition`**

</div>

__Uses__ `Phalcon\Mvc\Application\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcapplicationexceptionsinvalidmoduledefinition-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcapplicationexceptionsinvalidmoduledefinition-__construct }

```php
public function __construct();
```


## Mvc\Application\Exceptions\ModuleDefinitionPathNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Application/Exceptions/ModuleDefinitionPathNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Application\Exception`](phalcon_application.md#applicationexception)
        - [`Phalcon\Mvc\Application\Exception`](#mvcapplicationexception)
            - **`Phalcon\Mvc\Application\Exceptions\ModuleDefinitionPathNotFound`**

</div>

__Uses__ `Phalcon\Mvc\Application\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcapplicationexceptionsmoduledefinitionpathnotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $path )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcapplicationexceptionsmoduledefinitionpathnotfound-__construct }

```php
public function __construct( string $path );
```


## Mvc\Controller

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Controller.zep){ .src-btn }

Phalcon\Mvc\Controller

Every application controller should extend this class that encapsulates all
the controller functionality

The controllers provide the “flow” between models and views. Controllers are
responsible for processing the incoming requests from the web browser,
interrogating the models for data, and passing that data on to the views for
presentation.

```php
<?php

class PeopleController extends \Phalcon\Mvc\Controller
{
    // This action will be executed by default
    public function indexAction()
    {

    }

    public function findAction()
    {

    }

    public function saveAction()
    {
        // Forwards flow to the index action
        return $this->dispatcher->forward(
            [
                "controller" => "people",
                "action"     => "index",
            ]
        );
    }
}
```

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - **`Phalcon\Mvc\Controller`** — implements [`Phalcon\Mvc\ControllerInterface`](#mvccontrollerinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)

</div>

__Uses__ `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvccontroller-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
<span class="desc">Phalcon\Mvc\Controller constructor</span>
</a>
<a class="api-item" href="#mvccontroller-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#mvccontroller-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#mvccontroller-firemanagerevent">
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

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #mvccontroller-__construct }

```php
final public function __construct();
```

Phalcon\Mvc\Controller constructor

#### `getEventsManager()` { #mvccontroller-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `setEventsManager()` { #mvccontroller-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

<div class="api-group">Protected · 1</div>

#### `fireManagerEvent()` { #mvccontroller-firemanagerevent }

```php
protected function fireManagerEvent(
    string $eventName,
    mixed $data = null,
    bool $cancellable = true
): mixed|bool;
```

Helper method to fire an event


## Mvc\ControllerInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/ControllerInterface.zep){ .src-btn }

Phalcon\Mvc\ControllerInterface

Interface for controller handlers

<div class="api-tree" markdown>

- **`Phalcon\Mvc\ControllerInterface`**

</div>


## Mvc\Controller\BindModelInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Controller/BindModelInterface.zep){ .src-btn }

Phalcon\Mvc\Controller\BindModelInterface

Interface for Phalcon\Mvc\Controller

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Controller\BindModelInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvccontrollerbindmodelinterface-getmodelname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getModelName()</code>
<span class="desc">Return the model name associated with this controller</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getModelName()` { #mvccontrollerbindmodelinterface-getmodelname }

```php
public static function getModelName(): string;
```

Return the model name associated with this controller


## Mvc\Dispatcher

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Dispatcher.zep){ .src-btn }

Dispatching is the process of taking the request object, extracting the
module name, controller name, action name, and optional parameters contained
in it, and then instantiating a controller and calling an action of that
controller.

```php
$di = new \Phalcon\Di\Di();

$dispatcher = new \Phalcon\Mvc\Dispatcher();

$dispatcher->setDI($di);

$dispatcher->setControllerName("posts");
$dispatcher->setActionName("index");
$dispatcher->setParams([]);

$controller = $dispatcher->dispatch();
```

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - [`Phalcon\Dispatcher\AbstractDispatcher`](phalcon_dispatcher.md#dispatcherabstractdispatcher)
            - **`Phalcon\Mvc\Dispatcher`** — implements [`Phalcon\Mvc\DispatcherInterface`](#mvcdispatcherinterface)

</div>

__Uses__ `Phalcon\Dispatcher\AbstractDispatcher` · `Phalcon\Events\ManagerInterface` · `Phalcon\Http\ResponseInterface` · `Phalcon\Mvc\Dispatcher\Exception` · `Phalcon\Mvc\Dispatcher\Exceptions\ResponseServiceUnavailable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcdispatcher-forward">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">forward( array $forward )</code>
<span class="desc">Forwards the execution flow to another controller/action.</span>
</a>
<a class="api-item" href="#mvcdispatcher-getactivecontroller">
<code class="vis vis-public">public</code>
<code class="ret">ControllerInterface</code>
<code class="sig">getActiveController()</code>
<span class="desc">Returns the active controller in the dispatcher</span>
</a>
<a class="api-item" href="#mvcdispatcher-getcontrollerclass">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getControllerClass()</code>
<span class="desc">Possible controller class name that will be located to dispatch the</span>
</a>
<a class="api-item" href="#mvcdispatcher-getcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getControllerName()</code>
<span class="desc">Gets last dispatched controller name</span>
</a>
<a class="api-item" href="#mvcdispatcher-getlastcontroller">
<code class="vis vis-public">public</code>
<code class="ret">ControllerInterface</code>
<code class="sig">getLastController()</code>
<span class="desc">Returns the latest dispatched controller</span>
</a>
<a class="api-item" href="#mvcdispatcher-getpreviousactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPreviousActionName()</code>
<span class="desc">Gets previous dispatched action name</span>
</a>
<a class="api-item" href="#mvcdispatcher-getpreviouscontrollername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPreviousControllerName()</code>
<span class="desc">Gets previous dispatched controller name</span>
</a>
<a class="api-item" href="#mvcdispatcher-getpreviousnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPreviousNamespaceName()</code>
<span class="desc">Gets previous dispatched namespace name</span>
</a>
<a class="api-item" href="#mvcdispatcher-setcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherInterface</code>
<code class="sig">setControllerName( string $controllerName )</code>
<span class="desc">Sets the controller name to be dispatched</span>
</a>
<a class="api-item" href="#mvcdispatcher-setcontrollersuffix">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherInterface</code>
<code class="sig">setControllerSuffix( string $controllerSuffix )</code>
<span class="desc">Sets the default controller suffix</span>
</a>
<a class="api-item" href="#mvcdispatcher-setdefaultcontroller">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherInterface</code>
<code class="sig">setDefaultController( string $controllerName )</code>
<span class="desc">Sets the default controller name</span>
</a>
<a class="api-item" href="#mvcdispatcher-handleexception">
<code class="vis vis-protected">protected</code>
<code class="sig">handleException( \Exception $exception )</code>
<span class="desc">Handles a user exception</span>
</a>
<a class="api-item" href="#mvcdispatcher-throwdispatchexception">
<code class="vis vis-protected">protected</code>
<code class="sig">throwDispatchException(
    string $message,
    int $exceptionCode = 0
)</code>
<span class="desc">Throws an internal exception</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$defaultAction = "index"` `string`

-   `protected`{ .vis-protected } `$defaultHandler = "index"` `string`

-   `protected`{ .vis-protected } `$handlerSuffix = "Controller"` `string`

</div>

### Methods

<div class="api-group">Public · 11</div>

#### `forward()` { #mvcdispatcher-forward }

```php
public function forward( array $forward ): void;
```

Forwards the execution flow to another controller/action.

```php
use Phalcon\Events\Event;
use Phalcon\Mvc\Dispatcher;
use App\Backend\Bootstrap as Backend;
use App\Frontend\Bootstrap as Frontend;

// Registering modules
$modules = [
    "frontend" => [
        "className" => Frontend::class,
        "path"      => __DIR__ . "/app/Modules/Frontend/Bootstrap.php",
        "metadata"  => [
            "controllersNamespace" => "App\Frontend\Controllers",
        ],
    ],
    "backend" => [
        "className" => Backend::class,
        "path"      => __DIR__ . "/app/Modules/Backend/Bootstrap.php",
        "metadata"  => [
            "controllersNamespace" => "App\Backend\Controllers",
        ],
    ],
];

$application->registerModules($modules);

// Setting beforeForward listener
$eventsManager  = $di->getShared("eventsManager");

$eventsManager->attach(
    "dispatch:beforeForward",
    function(Event $event, Dispatcher $dispatcher, array $forward) use ($modules) {
        $metadata = $modules[$forward["module"]]["metadata"];

        $dispatcher->setModuleName(
            $forward["module"]
        );

        $dispatcher->setNamespaceName(
            $metadata["controllersNamespace"]
        );
    }
);

// Forward
$this->dispatcher->forward(
    [
        "module"     => "backend",
        "controller" => "posts",
        "action"     => "index",
    ]
);
```

#### `getActiveController()` { #mvcdispatcher-getactivecontroller }

```php
public function getActiveController(): ControllerInterface;
```

Returns the active controller in the dispatcher

#### `getControllerClass()` { #mvcdispatcher-getcontrollerclass }

```php
public function getControllerClass(): string;
```

Possible controller class name that will be located to dispatch the
request

#### `getControllerName()` { #mvcdispatcher-getcontrollername }

```php
public function getControllerName(): string;
```

Gets last dispatched controller name

#### `getLastController()` { #mvcdispatcher-getlastcontroller }

```php
public function getLastController(): ControllerInterface;
```

Returns the latest dispatched controller

#### `getPreviousActionName()` { #mvcdispatcher-getpreviousactionname }

```php
public function getPreviousActionName(): string;
```

Gets previous dispatched action name

#### `getPreviousControllerName()` { #mvcdispatcher-getpreviouscontrollername }

```php
public function getPreviousControllerName(): string;
```

Gets previous dispatched controller name

#### `getPreviousNamespaceName()` { #mvcdispatcher-getpreviousnamespacename }

```php
public function getPreviousNamespaceName(): string;
```

Gets previous dispatched namespace name

#### `setControllerName()` { #mvcdispatcher-setcontrollername }

```php
public function setControllerName( string $controllerName ): DispatcherInterface;
```

Sets the controller name to be dispatched

#### `setControllerSuffix()` { #mvcdispatcher-setcontrollersuffix }

```php
public function setControllerSuffix( string $controllerSuffix ): DispatcherInterface;
```

Sets the default controller suffix

#### `setDefaultController()` { #mvcdispatcher-setdefaultcontroller }

```php
public function setDefaultController( string $controllerName ): DispatcherInterface;
```

Sets the default controller name

<div class="api-group">Protected · 2</div>

#### `handleException()` { #mvcdispatcher-handleexception }

```php
protected function handleException( \Exception $exception );
```

Handles a user exception

#### `throwDispatchException()` { #mvcdispatcher-throwdispatchexception }

```php
protected function throwDispatchException(
    string $message,
    int $exceptionCode = 0
);
```

Throws an internal exception


## Mvc\DispatcherInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/DispatcherInterface.zep){ .src-btn }

Phalcon\Mvc\DispatcherInterface

Interface for Phalcon\Mvc\Dispatcher

<div class="api-tree" markdown>

- [`Phalcon\Dispatcher\DispatcherInterface`](phalcon_dispatcher.md#dispatcherdispatcherinterface)
    - **`Phalcon\Mvc\DispatcherInterface`**

</div>

__Uses__ `Phalcon\Dispatcher\DispatcherInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcdispatcherinterface-getactivecontroller">
<code class="vis vis-public">public</code>
<code class="ret">ControllerInterface|null</code>
<code class="sig">getActiveController()</code>
<span class="desc">Returns the active controller in the dispatcher</span>
</a>
<a class="api-item" href="#mvcdispatcherinterface-getcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getControllerName()</code>
<span class="desc">Gets last dispatched controller name</span>
</a>
<a class="api-item" href="#mvcdispatcherinterface-getlastcontroller">
<code class="vis vis-public">public</code>
<code class="ret">ControllerInterface|null</code>
<code class="sig">getLastController()</code>
<span class="desc">Returns the latest dispatched controller</span>
</a>
<a class="api-item" href="#mvcdispatcherinterface-setcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherInterfaceBase</code>
<code class="sig">setControllerName( string $controllerName )</code>
<span class="desc">Sets the controller name to be dispatched</span>
</a>
<a class="api-item" href="#mvcdispatcherinterface-setcontrollersuffix">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherInterfaceBase</code>
<code class="sig">setControllerSuffix( string $controllerSuffix )</code>
<span class="desc">Sets the default controller suffix</span>
</a>
<a class="api-item" href="#mvcdispatcherinterface-setdefaultcontroller">
<code class="vis vis-public">public</code>
<code class="ret">DispatcherInterfaceBase</code>
<code class="sig">setDefaultController( string $controllerName )</code>
<span class="desc">Sets the default controller name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getActiveController()` { #mvcdispatcherinterface-getactivecontroller }

```php
public function getActiveController(): ControllerInterface|null;
```

Returns the active controller in the dispatcher

#### `getControllerName()` { #mvcdispatcherinterface-getcontrollername }

```php
public function getControllerName(): string;
```

Gets last dispatched controller name

#### `getLastController()` { #mvcdispatcherinterface-getlastcontroller }

```php
public function getLastController(): ControllerInterface|null;
```

Returns the latest dispatched controller

#### `setControllerName()` { #mvcdispatcherinterface-setcontrollername }

```php
public function setControllerName( string $controllerName ): DispatcherInterfaceBase;
```

Sets the controller name to be dispatched

#### `setControllerSuffix()` { #mvcdispatcherinterface-setcontrollersuffix }

```php
public function setControllerSuffix( string $controllerSuffix ): DispatcherInterfaceBase;
```

Sets the default controller suffix

#### `setDefaultController()` { #mvcdispatcherinterface-setdefaultcontroller }

```php
public function setDefaultController( string $controllerName ): DispatcherInterfaceBase;
```

Sets the default controller name


## Mvc\Dispatcher\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Dispatcher/Exception.zep){ .src-btn }

Phalcon\Mvc\Dispatcher\Exception

Exceptions thrown in Phalcon\Mvc\Dispatcher will use this class

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Dispatcher\Exception`](phalcon_dispatcher.md#dispatcherexception)
        - **`Phalcon\Mvc\Dispatcher\Exception`**
            - [`Phalcon\Mvc\Dispatcher\Exceptions\ResponseServiceUnavailable`](#mvcdispatcherexceptionsresponseserviceunavailable)

</div>


## Mvc\Dispatcher\Exceptions\ResponseServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Dispatcher/Exceptions/ResponseServiceUnavailable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Dispatcher\Exception`](phalcon_dispatcher.md#dispatcherexception)
        - [`Phalcon\Mvc\Dispatcher\Exception`](#mvcdispatcherexception)
            - **`Phalcon\Mvc\Dispatcher\Exceptions\ResponseServiceUnavailable`**

</div>

__Uses__ `Phalcon\Mvc\Dispatcher\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcdispatcherexceptionsresponseserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcdispatcherexceptionsresponseserviceunavailable-__construct }

```php
public function __construct();
```


## Mvc\EntityInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/EntityInterface.zep){ .src-btn }

Phalcon\Mvc\EntityInterface

Interface for Phalcon\Mvc\Collection and Phalcon\Mvc\Model

<div class="api-tree" markdown>

- **`Phalcon\Mvc\EntityInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcentityinterface-readattribute">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">readAttribute( string $attribute )</code>
<span class="desc">Reads an attribute value by its name</span>
</a>
<a class="api-item" href="#mvcentityinterface-writeattribute">
<code class="vis vis-public">public</code>
<code class="sig">writeAttribute(
    string $attribute,
    mixed $value
)</code>
<span class="desc">Writes an attribute value by its name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `readAttribute()` { #mvcentityinterface-readattribute }

```php
public function readAttribute( string $attribute ): mixed|null;
```

Reads an attribute value by its name

#### `writeAttribute()` { #mvcentityinterface-writeattribute }

```php
public function writeAttribute(
    string $attribute,
    mixed $value
);
```

Writes an attribute value by its name


## Mvc\Micro

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro.zep){ .src-btn }

Phalcon\Mvc\Micro

With Phalcon you can create "Micro-Framework like" applications. By doing
this, you only need to write a minimal amount of code to create a PHP
application. Micro applications are suitable to small applications, APIs and
prototypes in a practical way.

```php
$app = new \Phalcon\Mvc\Micro();

$app->get(
    "/say/welcome/{name}",
    function ($name) {
        echo "<h1>Welcome $name!</h1>";
    }
);

$app->handle("/say/welcome/Phalcon");
```

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - **`Phalcon\Mvc\Micro`** — implements `ArrayAccess`, [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)

</div>

__Uses__ `ArrayAccess` · `Closure` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Di\FactoryDefault` · `Phalcon\Di\Injectable` · `Phalcon\Di\ServiceInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Http\ResponseInterface` · `Phalcon\Mvc\Micro\Collection` · `Phalcon\Mvc\Micro\CollectionInterface` · `Phalcon\Mvc\Micro\Exception` · `Phalcon\Mvc\Micro\Exceptions\ContainerRequired` · `Phalcon\Mvc\Micro\Exceptions\ErrorHandlerNotCallable` · `Phalcon\Mvc\Micro\Exceptions\HandlerNotCallable` · `Phalcon\Mvc\Micro\Exceptions\InvalidRegisteredHandler` · `Phalcon\Mvc\Micro\Exceptions\MissingCollectionMainHandler` · `Phalcon\Mvc\Micro\Exceptions\NoHandlersToMount` · `Phalcon\Mvc\Micro\Exceptions\NoMatchedRouteHandler` · `Phalcon\Mvc\Micro\Exceptions\NotFoundHandlerNotCallable` · `Phalcon\Mvc\Micro\Exceptions\ResponseHandlerNotCallable` · `Phalcon\Mvc\Micro\LazyLoader` · `Phalcon\Mvc\Micro\MiddlewareInterface` · `Phalcon\Mvc\Model\BinderInterface` · `Phalcon\Mvc\Router\RouteInterface` · `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicro-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( DiInterface $container = null )</code>
<span class="desc">Phalcon\Mvc\Micro constructor</span>
</a>
<a class="api-item" href="#mvcmicro-after">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">after( mixed $handler )</code>
<span class="desc">Appends an &#039;after&#039; middleware to be called after execute the route</span>
</a>
<a class="api-item" href="#mvcmicro-afterbinding">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">afterBinding( mixed $handler )</code>
<span class="desc">Appends a afterBinding middleware to be called after model binding</span>
</a>
<a class="api-item" href="#mvcmicro-before">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">before( mixed $handler )</code>
<span class="desc">Appends a before middleware to be called before execute the route</span>
</a>
<a class="api-item" href="#mvcmicro-delete">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">delete(
    string $routePattern,
    mixed $handler
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is DELETE</span>
</a>
<a class="api-item" href="#mvcmicro-error">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">error( mixed $handler )</code>
<span class="desc">Sets a handler that will be called when an exception is thrown handling</span>
</a>
<a class="api-item" href="#mvcmicro-finish">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">finish( mixed $handler )</code>
<span class="desc">Appends a &#039;finish&#039; middleware to be called when the request is finished</span>
</a>
<a class="api-item" href="#mvcmicro-get">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">get(
    string $routePattern,
    mixed $handler
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is GET</span>
</a>
<a class="api-item" href="#mvcmicro-getactivehandler">
<code class="vis vis-public">public</code>
<code class="sig">getActiveHandler()</code>
<span class="desc">Return the handler that will be called for the matched route</span>
</a>
<a class="api-item" href="#mvcmicro-getboundmodels">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBoundModels()</code>
<span class="desc">Returns bound models from binder instance</span>
</a>
<a class="api-item" href="#mvcmicro-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#mvcmicro-gethandlers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getHandlers()</code>
<span class="desc">Returns the internal handlers attached to the application</span>
</a>
<a class="api-item" href="#mvcmicro-getmodelbinder">
<code class="vis vis-public">public</code>
<code class="ret">BinderInterface|null</code>
<code class="sig">getModelBinder()</code>
<span class="desc">Gets model binder</span>
</a>
<a class="api-item" href="#mvcmicro-getreturnedvalue">
<code class="vis vis-public">public</code>
<code class="sig">getReturnedValue()</code>
<span class="desc">Returns the value returned by the executed handler</span>
</a>
<a class="api-item" href="#mvcmicro-getrouter">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig">getRouter()</code>
<span class="desc">Returns the internal router used by the application</span>
</a>
<a class="api-item" href="#mvcmicro-getservice">
<code class="vis vis-public">public</code>
<code class="sig">getService( string $serviceName )</code>
<span class="desc">Obtains a service from the DI</span>
</a>
<a class="api-item" href="#mvcmicro-getsharedservice">
<code class="vis vis-public">public</code>
<code class="sig">getSharedService( string $serviceName )</code>
<span class="desc">Obtains a shared service from the DI</span>
</a>
<a class="api-item" href="#mvcmicro-handle">
<code class="vis vis-public">public</code>
<code class="sig">handle( string $uri )</code>
<span class="desc">Handle the whole request</span>
</a>
<a class="api-item" href="#mvcmicro-hasservice">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasService( string $serviceName )</code>
<span class="desc">Checks if a service is registered in the DI</span>
</a>
<a class="api-item" href="#mvcmicro-head">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">head(
    string $routePattern,
    mixed $handler
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is HEAD</span>
</a>
<a class="api-item" href="#mvcmicro-map">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">map(
    string $routePattern,
    mixed $handler
)</code>
<span class="desc">Maps a route to a handler without any HTTP method constraint</span>
</a>
<a class="api-item" href="#mvcmicro-mount">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">mount( CollectionInterface $collection )</code>
<span class="desc">Mounts a collection of handlers</span>
</a>
<a class="api-item" href="#mvcmicro-notfound">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">notFound( mixed $handler )</code>
<span class="desc">Sets a handler that will be called when the router does not match any of</span>
</a>
<a class="api-item" href="#mvcmicro-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">offsetExists( mixed $offset )</code>
<span class="desc">Check if a service is registered in the internal services container using</span>
</a>
<a class="api-item" href="#mvcmicro-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">offsetGet( mixed $offset )</code>
<span class="desc">Allows to obtain a shared service in the internal services container</span>
</a>
<a class="api-item" href="#mvcmicro-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">offsetSet(
    mixed $offset,
    mixed $value
)</code>
<span class="desc">Allows to register a shared service in the internal services container</span>
</a>
<a class="api-item" href="#mvcmicro-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">offsetUnset( mixed $offset )</code>
<span class="desc">Removes a service from the internal services container using the array</span>
</a>
<a class="api-item" href="#mvcmicro-options">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">options(
    string $routePattern,
    mixed $handler
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is OPTIONS</span>
</a>
<a class="api-item" href="#mvcmicro-patch">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">patch(
    string $routePattern,
    mixed $handler
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is PATCH</span>
</a>
<a class="api-item" href="#mvcmicro-post">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">post(
    string $routePattern,
    mixed $handler
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is POST</span>
</a>
<a class="api-item" href="#mvcmicro-put">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">put(
    string $routePattern,
    mixed $handler
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is PUT</span>
</a>
<a class="api-item" href="#mvcmicro-setactivehandler">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">setActiveHandler( mixed $activeHandler )</code>
<span class="desc">Sets externally the handler that must be called by the matched route</span>
</a>
<a class="api-item" href="#mvcmicro-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the DependencyInjector container</span>
</a>
<a class="api-item" href="#mvcmicro-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#mvcmicro-setmodelbinder">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setModelBinder(
    BinderInterface $modelBinder,
    mixed $cache = null
)</code>
<span class="desc">Sets model binder</span>
</a>
<a class="api-item" href="#mvcmicro-setresponsehandler">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setResponseHandler( mixed $handler )</code>
<span class="desc">Appends a custom &#039;response&#039; handler to be called instead of the default</span>
</a>
<a class="api-item" href="#mvcmicro-setservice">
<code class="vis vis-public">public</code>
<code class="ret">ServiceInterface</code>
<code class="sig">setService(
    string $serviceName,
    mixed $definition,
    bool $isShared = false
)</code>
<span class="desc">Sets a service from the DI</span>
</a>
<a class="api-item" href="#mvcmicro-stop">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">stop()</code>
<span class="desc">Stops the middleware execution avoiding than other middlewares be</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$activeHandler = null` `callable|null`

-   `protected`{ .vis-protected } `$afterBindingHandlers = []` `array`

-   `protected`{ .vis-protected } `$afterHandlers = []` `array`

-   `protected`{ .vis-protected } `$beforeHandlers = []` `array`

-   `protected`{ .vis-protected } `$container = null` `DiInterface|null`

-   `protected`{ .vis-protected } `$errorHandler = null` `callable|null`

-   `protected`{ .vis-protected } `$eventsManager = null` `ManagerInterface|null`

-   `protected`{ .vis-protected } `$finishHandlers = []` `array`

-   `protected`{ .vis-protected } `$handlers = []` `array`

-   `protected`{ .vis-protected } `$modelBinder = null` `BinderInterface|null`

-   `protected`{ .vis-protected } `$notFoundHandler = null` `callable|null`

-   `protected`{ .vis-protected } `$responseHandler = null` `callable|null`

-   `protected`{ .vis-protected } `$returnedValue = null` `mixed|null`

-   `protected`{ .vis-protected } `$router = null` `RouterInterface|null`

-   `protected`{ .vis-protected } `$stopped = false` `bool`

</div>

### Methods

<div class="api-group">Public · 38</div>

#### `__construct()` { #mvcmicro-__construct }

```php
public function __construct( DiInterface $container = null );
```

Phalcon\Mvc\Micro constructor

#### `after()` { #mvcmicro-after }

```php
public function after( mixed $handler ): static;
```

Appends an 'after' middleware to be called after execute the route

#### `afterBinding()` { #mvcmicro-afterbinding }

```php
public function afterBinding( mixed $handler ): static;
```

Appends a afterBinding middleware to be called after model binding

#### `before()` { #mvcmicro-before }

```php
public function before( mixed $handler ): static;
```

Appends a before middleware to be called before execute the route

#### `delete()` { #mvcmicro-delete }

```php
public function delete(
    string $routePattern,
    mixed $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is DELETE

#### `error()` { #mvcmicro-error }

```php
public function error( mixed $handler ): static;
```

Sets a handler that will be called when an exception is thrown handling
the route

#### `finish()` { #mvcmicro-finish }

```php
public function finish( mixed $handler ): static;
```

Appends a 'finish' middleware to be called when the request is finished

#### `get()` { #mvcmicro-get }

```php
public function get(
    string $routePattern,
    mixed $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is GET

#### `getActiveHandler()` { #mvcmicro-getactivehandler }

```php
public function getActiveHandler();
```

Return the handler that will be called for the matched route

#### `getBoundModels()` { #mvcmicro-getboundmodels }

```php
public function getBoundModels(): array;
```

Returns bound models from binder instance

#### `getEventsManager()` { #mvcmicro-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `getHandlers()` { #mvcmicro-gethandlers }

```php
public function getHandlers(): array;
```

Returns the internal handlers attached to the application

#### `getModelBinder()` { #mvcmicro-getmodelbinder }

```php
public function getModelBinder(): BinderInterface|null;
```

Gets model binder

#### `getReturnedValue()` { #mvcmicro-getreturnedvalue }

```php
public function getReturnedValue();
```

Returns the value returned by the executed handler

#### `getRouter()` { #mvcmicro-getrouter }

```php
public function getRouter(): RouterInterface;
```

Returns the internal router used by the application

#### `getService()` { #mvcmicro-getservice }

```php
public function getService( string $serviceName );
```

Obtains a service from the DI

#### `getSharedService()` { #mvcmicro-getsharedservice }

```php
public function getSharedService( string $serviceName );
```

Obtains a shared service from the DI

#### `handle()` { #mvcmicro-handle }

```php
public function handle( string $uri );
```

Handle the whole request

#### `hasService()` { #mvcmicro-hasservice }

```php
public function hasService( string $serviceName ): bool;
```

Checks if a service is registered in the DI

#### `head()` { #mvcmicro-head }

```php
public function head(
    string $routePattern,
    mixed $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is HEAD

#### `map()` { #mvcmicro-map }

```php
public function map(
    string $routePattern,
    mixed $handler
): RouteInterface;
```

Maps a route to a handler without any HTTP method constraint

#### `mount()` { #mvcmicro-mount }

```php
public function mount( CollectionInterface $collection ): static;
```

Mounts a collection of handlers

#### `notFound()` { #mvcmicro-notfound }

```php
public function notFound( mixed $handler ): static;
```

Sets a handler that will be called when the router does not match any of
the defined routes

#### `offsetExists()` { #mvcmicro-offsetexists }

```php
public function offsetExists( mixed $offset ): bool;
```

Check if a service is registered in the internal services container using
the array syntax

#### `offsetGet()` { #mvcmicro-offsetget }

```php
public function offsetGet( mixed $offset ): mixed;
```

Allows to obtain a shared service in the internal services container
using the array syntax

```php
var_dump(
    $app["request"]
);
```

#### `offsetSet()` { #mvcmicro-offsetset }

```php
public function offsetSet(
    mixed $offset,
    mixed $value
): void;
```

Allows to register a shared service in the internal services container
using the array syntax

```php
   $app["request"] = new \Phalcon\Http\Request();
```

#### `offsetUnset()` { #mvcmicro-offsetunset }

```php
public function offsetUnset( mixed $offset ): void;
```

Removes a service from the internal services container using the array
syntax

#### `options()` { #mvcmicro-options }

```php
public function options(
    string $routePattern,
    mixed $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is OPTIONS

#### `patch()` { #mvcmicro-patch }

```php
public function patch(
    string $routePattern,
    mixed $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is PATCH

#### `post()` { #mvcmicro-post }

```php
public function post(
    string $routePattern,
    mixed $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is POST

#### `put()` { #mvcmicro-put }

```php
public function put(
    string $routePattern,
    mixed $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is PUT

#### `setActiveHandler()` { #mvcmicro-setactivehandler }

```php
public function setActiveHandler( mixed $activeHandler ): self;
```

Sets externally the handler that must be called by the matched route

#### `setDI()` { #mvcmicro-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the DependencyInjector container

#### `setEventsManager()` { #mvcmicro-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

#### `setModelBinder()` { #mvcmicro-setmodelbinder }

```php
public function setModelBinder(
    BinderInterface $modelBinder,
    mixed $cache = null
): static;
```

Sets model binder

```php
$micro = new Micro($di);

$micro->setModelBinder(
    new Binder(),
    'cache'
);
```

#### `setResponseHandler()` { #mvcmicro-setresponsehandler }

```php
public function setResponseHandler( mixed $handler ): static;
```

Appends a custom 'response' handler to be called instead of the default
response handler

#### `setService()` { #mvcmicro-setservice }

```php
public function setService(
    string $serviceName,
    mixed $definition,
    bool $isShared = false
): ServiceInterface;
```

Sets a service from the DI

#### `stop()` { #mvcmicro-stop }

```php
public function stop(): void;
```

Stops the middleware execution avoiding than other middlewares be
executed


## Mvc\Micro\Collection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Collection.zep){ .src-btn }

Phalcon\Mvc\Micro\Collection

Groups Micro-Mvc handlers as controllers

```php
$app = new \Phalcon\Mvc\Micro();

$collection = new Collection();

$collection->setHandler(
    new PostsController()
);

$collection->get("/posts/edit/{id}", "edit");

$app->mount($collection);
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Micro\Collection`** — implements [`Phalcon\Mvc\Micro\CollectionInterface`](#mvcmicrocollectioninterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicrocollection-delete">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">delete(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is DELETE.</span>
</a>
<a class="api-item" href="#mvcmicrocollection-get">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">get(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is GET.</span>
</a>
<a class="api-item" href="#mvcmicrocollection-gethandler">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getHandler()</code>
<span class="desc">Returns the main handler</span>
</a>
<a class="api-item" href="#mvcmicrocollection-gethandlers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getHandlers()</code>
<span class="desc">Returns the registered handlers</span>
</a>
<a class="api-item" href="#mvcmicrocollection-getprefix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPrefix()</code>
<span class="desc">Returns the collection prefix if any</span>
</a>
<a class="api-item" href="#mvcmicrocollection-head">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">head(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is HEAD.</span>
</a>
<a class="api-item" href="#mvcmicrocollection-islazy">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isLazy()</code>
<span class="desc">Returns if the main handler must be lazy loaded</span>
</a>
<a class="api-item" href="#mvcmicrocollection-map">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">map(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler.</span>
</a>
<a class="api-item" href="#mvcmicrocollection-mapvia">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">mapVia(
    string $routePattern,
    callable $handler,
    mixed $method,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler via methods.</span>
</a>
<a class="api-item" href="#mvcmicrocollection-options">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">options(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is</span>
</a>
<a class="api-item" href="#mvcmicrocollection-patch">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">patch(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is PATCH.</span>
</a>
<a class="api-item" href="#mvcmicrocollection-post">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">post(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is POST.</span>
</a>
<a class="api-item" href="#mvcmicrocollection-put">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">put(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is PUT.</span>
</a>
<a class="api-item" href="#mvcmicrocollection-sethandler">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">setHandler(
    mixed $handler,
    bool $isLazy = false
)</code>
<span class="desc">Sets the main handler.</span>
</a>
<a class="api-item" href="#mvcmicrocollection-setlazy">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">setLazy( bool $isLazy )</code>
<span class="desc">Sets if the main handler must be lazy loaded</span>
</a>
<a class="api-item" href="#mvcmicrocollection-setprefix">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">setPrefix( string $prefix )</code>
<span class="desc">Sets a prefix for all routes added to the collection</span>
</a>
<a class="api-item" href="#mvcmicrocollection-addmap">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">addMap(
    mixed $method,
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Internal function to add a handler to the group.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$handler` `callable`

-   `protected`{ .vis-protected } `$handlers = []` `array`

-   `protected`{ .vis-protected } `$isLazy = false` `bool`

-   `protected`{ .vis-protected } `$prefix = ""` `string`

</div>

### Methods

<div class="api-group">Public · 16</div>

#### `delete()` { #mvcmicrocollection-delete }

```php
public function delete(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is DELETE.

#### `get()` { #mvcmicrocollection-get }

```php
public function get(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is GET.

#### `getHandler()` { #mvcmicrocollection-gethandler }

```php
public function getHandler(): mixed;
```

Returns the main handler

#### `getHandlers()` { #mvcmicrocollection-gethandlers }

```php
public function getHandlers(): array;
```

Returns the registered handlers

#### `getPrefix()` { #mvcmicrocollection-getprefix }

```php
public function getPrefix(): string;
```

Returns the collection prefix if any

#### `head()` { #mvcmicrocollection-head }

```php
public function head(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is HEAD.

#### `isLazy()` { #mvcmicrocollection-islazy }

```php
public function isLazy(): bool;
```

Returns if the main handler must be lazy loaded

#### `map()` { #mvcmicrocollection-map }

```php
public function map(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler.

#### `mapVia()` { #mvcmicrocollection-mapvia }

```php
public function mapVia(
    string $routePattern,
    callable $handler,
    mixed $method,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler via methods.

```php
$collection->mapVia(
    "/test",
    "indexAction",
    ["POST", "GET"],
    "test"
);
```

#### `options()` { #mvcmicrocollection-options }

```php
public function options(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is
OPTIONS.

#### `patch()` { #mvcmicrocollection-patch }

```php
public function patch(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is PATCH.

#### `post()` { #mvcmicrocollection-post }

```php
public function post(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is POST.

#### `put()` { #mvcmicrocollection-put }

```php
public function put(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is PUT.

#### `setHandler()` { #mvcmicrocollection-sethandler }

```php
public function setHandler(
    mixed $handler,
    bool $isLazy = false
): CollectionInterface;
```

Sets the main handler.

#### `setLazy()` { #mvcmicrocollection-setlazy }

```php
public function setLazy( bool $isLazy ): CollectionInterface;
```

Sets if the main handler must be lazy loaded

#### `setPrefix()` { #mvcmicrocollection-setprefix }

```php
public function setPrefix( string $prefix ): CollectionInterface;
```

Sets a prefix for all routes added to the collection

<div class="api-group">Protected · 1</div>

#### `addMap()` { #mvcmicrocollection-addmap }

```php
protected function addMap(
    mixed $method,
    string $routePattern,
    callable $handler,
    string $name = null
): void;
```

Internal function to add a handler to the group.


## Mvc\Micro\CollectionInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/CollectionInterface.zep){ .src-btn }

Phalcon\Mvc\Micro\CollectionInterface

Interface for Phalcon\Mvc\Micro\Collection

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Micro\CollectionInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicrocollectioninterface-delete">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">delete(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is DELETE</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-get">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">get(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is GET</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-gethandler">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getHandler()</code>
<span class="desc">Returns the main handler</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-gethandlers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getHandlers()</code>
<span class="desc">Returns the registered handlers</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-getprefix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPrefix()</code>
<span class="desc">Returns the collection prefix if any</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-head">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">head(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is HEAD</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-islazy">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isLazy()</code>
<span class="desc">Returns if the main handler must be lazy loaded</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-map">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">map(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-options">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">options(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is OPTIONS</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-patch">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">patch(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is PATCH</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-post">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">post(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is POST</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-put">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">put(
    string $routePattern,
    callable $handler,
    string $name = null
)</code>
<span class="desc">Maps a route to a handler that only matches if the HTTP method is PUT</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-sethandler">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">setHandler(
    mixed $handler,
    bool $isLazy = false
)</code>
<span class="desc">Sets the main handler</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-setlazy">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">setLazy( bool $isLazy )</code>
<span class="desc">Sets if the main handler must be lazy loaded</span>
</a>
<a class="api-item" href="#mvcmicrocollectioninterface-setprefix">
<code class="vis vis-public">public</code>
<code class="ret">CollectionInterface</code>
<code class="sig">setPrefix( string $prefix )</code>
<span class="desc">Sets a prefix for all routes added to the collection</span>
</a>
</div>

### Methods

<div class="api-group">Public · 15</div>

#### `delete()` { #mvcmicrocollectioninterface-delete }

```php
public function delete(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is DELETE

#### `get()` { #mvcmicrocollectioninterface-get }

```php
public function get(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is GET

#### `getHandler()` { #mvcmicrocollectioninterface-gethandler }

```php
public function getHandler(): mixed;
```

Returns the main handler

#### `getHandlers()` { #mvcmicrocollectioninterface-gethandlers }

```php
public function getHandlers(): array;
```

Returns the registered handlers

#### `getPrefix()` { #mvcmicrocollectioninterface-getprefix }

```php
public function getPrefix(): string;
```

Returns the collection prefix if any

#### `head()` { #mvcmicrocollectioninterface-head }

```php
public function head(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is HEAD

#### `isLazy()` { #mvcmicrocollectioninterface-islazy }

```php
public function isLazy(): bool;
```

Returns if the main handler must be lazy loaded

#### `map()` { #mvcmicrocollectioninterface-map }

```php
public function map(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler

#### `options()` { #mvcmicrocollectioninterface-options }

```php
public function options(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is OPTIONS

#### `patch()` { #mvcmicrocollectioninterface-patch }

```php
public function patch(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is PATCH

#### `post()` { #mvcmicrocollectioninterface-post }

```php
public function post(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is POST

#### `put()` { #mvcmicrocollectioninterface-put }

```php
public function put(
    string $routePattern,
    callable $handler,
    string $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is PUT

#### `setHandler()` { #mvcmicrocollectioninterface-sethandler }

```php
public function setHandler(
    mixed $handler,
    bool $isLazy = false
): CollectionInterface;
```

Sets the main handler

#### `setLazy()` { #mvcmicrocollectioninterface-setlazy }

```php
public function setLazy( bool $isLazy ): CollectionInterface;
```

Sets if the main handler must be lazy loaded

#### `setPrefix()` { #mvcmicrocollectioninterface-setprefix }

```php
public function setPrefix( string $prefix ): CollectionInterface;
```

Sets a prefix for all routes added to the collection


## Mvc\Micro\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Mvc\Micro will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Mvc\Micro\Exception`**
        - [`Phalcon\Mvc\Micro\Exceptions\ContainerRequired`](#mvcmicroexceptionscontainerrequired)
        - [`Phalcon\Mvc\Micro\Exceptions\ErrorHandlerNotCallable`](#mvcmicroexceptionserrorhandlernotcallable)
        - [`Phalcon\Mvc\Micro\Exceptions\HandlerNotCallable`](#mvcmicroexceptionshandlernotcallable)
        - [`Phalcon\Mvc\Micro\Exceptions\InvalidRegisteredHandler`](#mvcmicroexceptionsinvalidregisteredhandler)
        - [`Phalcon\Mvc\Micro\Exceptions\LazyHandlerNotFound`](#mvcmicroexceptionslazyhandlernotfound)
        - [`Phalcon\Mvc\Micro\Exceptions\MissingCollectionMainHandler`](#mvcmicroexceptionsmissingcollectionmainhandler)
        - [`Phalcon\Mvc\Micro\Exceptions\NoHandlersToMount`](#mvcmicroexceptionsnohandlerstomount)
        - [`Phalcon\Mvc\Micro\Exceptions\NoMatchedRouteHandler`](#mvcmicroexceptionsnomatchedroutehandler)
        - [`Phalcon\Mvc\Micro\Exceptions\NotFoundHandlerNotCallable`](#mvcmicroexceptionsnotfoundhandlernotcallable)
        - [`Phalcon\Mvc\Micro\Exceptions\ResponseHandlerNotCallable`](#mvcmicroexceptionsresponsehandlernotcallable)

</div>


## Mvc\Micro\Exceptions\ContainerRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exceptions/ContainerRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
        - **`Phalcon\Mvc\Micro\Exceptions\ContainerRequired`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicroexceptionscontainerrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmicroexceptionscontainerrequired-__construct }

```php
public function __construct();
```


## Mvc\Micro\Exceptions\ErrorHandlerNotCallable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exceptions/ErrorHandlerNotCallable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
        - **`Phalcon\Mvc\Micro\Exceptions\ErrorHandlerNotCallable`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicroexceptionserrorhandlernotcallable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmicroexceptionserrorhandlernotcallable-__construct }

```php
public function __construct();
```


## Mvc\Micro\Exceptions\HandlerNotCallable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exceptions/HandlerNotCallable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
        - **`Phalcon\Mvc\Micro\Exceptions\HandlerNotCallable`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicroexceptionshandlernotcallable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $type )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmicroexceptionshandlernotcallable-__construct }

```php
public function __construct( string $type );
```


## Mvc\Micro\Exceptions\InvalidRegisteredHandler

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exceptions/InvalidRegisteredHandler.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
        - **`Phalcon\Mvc\Micro\Exceptions\InvalidRegisteredHandler`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicroexceptionsinvalidregisteredhandler-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmicroexceptionsinvalidregisteredhandler-__construct }

```php
public function __construct();
```


## Mvc\Micro\Exceptions\LazyHandlerNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exceptions/LazyHandlerNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
        - **`Phalcon\Mvc\Micro\Exceptions\LazyHandlerNotFound`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicroexceptionslazyhandlernotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $definition )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmicroexceptionslazyhandlernotfound-__construct }

```php
public function __construct( string $definition );
```


## Mvc\Micro\Exceptions\MissingCollectionMainHandler

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exceptions/MissingCollectionMainHandler.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
        - **`Phalcon\Mvc\Micro\Exceptions\MissingCollectionMainHandler`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicroexceptionsmissingcollectionmainhandler-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmicroexceptionsmissingcollectionmainhandler-__construct }

```php
public function __construct();
```


## Mvc\Micro\Exceptions\NoHandlersToMount

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exceptions/NoHandlersToMount.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
        - **`Phalcon\Mvc\Micro\Exceptions\NoHandlersToMount`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicroexceptionsnohandlerstomount-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmicroexceptionsnohandlerstomount-__construct }

```php
public function __construct();
```


## Mvc\Micro\Exceptions\NoMatchedRouteHandler

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exceptions/NoMatchedRouteHandler.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
        - **`Phalcon\Mvc\Micro\Exceptions\NoMatchedRouteHandler`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicroexceptionsnomatchedroutehandler-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmicroexceptionsnomatchedroutehandler-__construct }

```php
public function __construct();
```


## Mvc\Micro\Exceptions\NotFoundHandlerNotCallable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exceptions/NotFoundHandlerNotCallable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
        - **`Phalcon\Mvc\Micro\Exceptions\NotFoundHandlerNotCallable`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicroexceptionsnotfoundhandlernotcallable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmicroexceptionsnotfoundhandlernotcallable-__construct }

```php
public function __construct();
```


## Mvc\Micro\Exceptions\ResponseHandlerNotCallable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/Exceptions/ResponseHandlerNotCallable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
        - **`Phalcon\Mvc\Micro\Exceptions\ResponseHandlerNotCallable`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicroexceptionsresponsehandlernotcallable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmicroexceptionsresponsehandlernotcallable-__construct }

```php
public function __construct();
```


## Mvc\Micro\LazyLoader

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/LazyLoader.zep){ .src-btn }

Phalcon\Mvc\Micro\LazyLoader

Lazy-Load of handlers for Mvc\Micro using auto-loading

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Micro\LazyLoader`**

</div>

__Uses__ `Phalcon\Mvc\Micro\Exceptions\LazyHandlerNotFound` · `Phalcon\Mvc\Model\BinderInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicrolazyloader-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $definition )</code>
<span class="desc">Phalcon\Mvc\Micro\LazyLoader constructor</span>
</a>
<a class="api-item" href="#mvcmicrolazyloader-callmethod">
<code class="vis vis-public">public</code>
<code class="sig">callMethod(
    string $method,
    mixed $arguments,
    BinderInterface $modelBinder = null
)</code>
<span class="desc">Calling __call method</span>
</a>
<a class="api-item" href="#mvcmicrolazyloader-getdefinition">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getDefinition()</code>
</a>
<a class="api-item" href="#mvcmicrolazyloader-gethandler">
<code class="vis vis-public">public</code>
<code class="ret">object|null</code>
<code class="sig">getHandler()</code>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$definition` `string`

-   `protected`{ .vis-protected } `$handler = null` `object|null`

</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #mvcmicrolazyloader-__construct }

```php
public function __construct( string $definition );
```

Phalcon\Mvc\Micro\LazyLoader constructor

#### `callMethod()` { #mvcmicrolazyloader-callmethod }

```php
public function callMethod(
    string $method,
    mixed $arguments,
    BinderInterface $modelBinder = null
);
```

Calling __call method

#### `getDefinition()` { #mvcmicrolazyloader-getdefinition }

```php
public function getDefinition(): string;
```

#### `getHandler()` { #mvcmicrolazyloader-gethandler }

```php
public function getHandler(): object|null;
```


## Mvc\Micro\MiddlewareInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Micro/MiddlewareInterface.zep){ .src-btn }

Allows to implement Phalcon\Mvc\Micro middleware in classes

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Micro\MiddlewareInterface`**

</div>

__Uses__ `Phalcon\Mvc\Micro`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmicromiddlewareinterface-call">
<code class="vis vis-public">public</code>
<code class="sig">call( Micro $application )</code>
<span class="desc">Calls the middleware</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `call()` { #mvcmicromiddlewareinterface-call }

```php
public function call( Micro $application );
```

Calls the middleware


## Mvc\Model

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model.zep){ .src-btn }

Phalcon\Mvc\Model

Phalcon\Mvc\Model connects business objects and database tables to create a
persistable domain model where logic and data are presented in one wrapping.
It‘s an implementation of the object-relational mapping (ORM).

A model represents the information (data) of the application and the rules to
manipulate that data. Models are primarily used for managing the rules of
interaction with a corresponding database table. In most cases, each table in
your database will correspond to one model in your application. The bulk of
your application's business logic will be concentrated in the models.

Phalcon\Mvc\Model is the first ORM written in Zephir/C languages for PHP,
giving to developers high performance when interacting with databases while
is also easy to use.

```php
$robot = new Robots();

$robot->type = "mechanical";
$robot->name = "Astro Boy";
$robot->year = 1952;

if ($robot->save() === false) {
    echo "Umh, We can store robots: ";

    $messages = $robot->getMessages();

    foreach ($messages as $message) {
        echo $message;
    }
} else {
    echo "Great, a new robot was saved successfully!";
}
```
@template T of static

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Mvc\Model`** — implements [`Phalcon\Mvc\EntityInterface`](#mvcentityinterface), [`Phalcon\Mvc\ModelInterface`](#mvcmodelinterface), [`Phalcon\Mvc\Model\ResultInterface`](#mvcmodelresultinterface), `Serializable`, `JsonSerializable`

</div>

__Uses__ `JsonSerializable` · `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Db\Column` · `Phalcon\Db\Enum` · `Phalcon\Db\RawValue` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\Validation\ValidationInterface` · `Phalcon\Messages\Message` · `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\BehaviorInterface` · `Phalcon\Mvc\Model\Criteria` · `Phalcon\Mvc\Model\CriteriaInterface` · `Phalcon\Mvc\Model\Exception` · `Phalcon\Mvc\Model\Exceptions\BelongsToRequiresObject` · `Phalcon\Mvc\Model\Exceptions\BindTypeNotDefined` · `Phalcon\Mvc\Model\Exceptions\CannotResolveAttribute` · `Phalcon\Mvc\Model\Exceptions\ColumnNotInMap` · `Phalcon\Mvc\Model\Exceptions\ColumnNotInTableColumns` · `Phalcon\Mvc\Model\Exceptions\ColumnNotInTableMap` · `Phalcon\Mvc\Model\Exceptions\DataTypeNotDefined` · `Phalcon\Mvc\Model\Exceptions\IdentityNotInColumnMap` · `Phalcon\Mvc\Model\Exceptions\IdentityNotInTableColumns` · `Phalcon\Mvc\Model\Exceptions\InvalidDumpResultKey` · `Phalcon\Mvc\Model\Exceptions\InvalidFindParameters` · `Phalcon\Mvc\Model\Exceptions\InvalidModelsManagerService` · `Phalcon\Mvc\Model\Exceptions\InvalidModelsMetadataService` · `Phalcon\Mvc\Model\Exceptions\MethodNotFound` · `Phalcon\Mvc\Model\Exceptions\ModelOrmServicesUnavailable` · `Phalcon\Mvc\Model\Exceptions\PrimaryKeyAttributeNotSet` · `Phalcon\Mvc\Model\Exceptions\PrimaryKeyRequired` · `Phalcon\Mvc\Model\Exceptions\PropertyNotAccessible` · `Phalcon\Mvc\Model\Exceptions\RecordCannotRefresh` · `Phalcon\Mvc\Model\Exceptions\RecordNotPersisted` · `Phalcon\Mvc\Model\Exceptions\RelationNotDefined` · `Phalcon\Mvc\Model\Exceptions\RelationRequiresObjectOrArray` · `Phalcon\Mvc\Model\Exceptions\SnapshotsDisabled` · `Phalcon\Mvc\Model\Exceptions\StaticMethodRequiresOneArgument` · `Phalcon\Mvc\Model\Exceptions\UpdateSnapshotDisabled` · `Phalcon\Mvc\Model\ManagerInterface` · `Phalcon\Mvc\Model\MetaDataInterface` · `Phalcon\Mvc\Model\Query` · `Phalcon\Mvc\Model\QueryInterface` · `Phalcon\Mvc\Model\Query\Builder` · `Phalcon\Mvc\Model\Query\BuilderInterface` · `Phalcon\Mvc\Model\Relation` · `Phalcon\Mvc\Model\RelationInterface` · `Phalcon\Mvc\Model\ResultInterface` · `Phalcon\Mvc\Model\Resultset` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Mvc\Model\TransactionInterface` · `Phalcon\Mvc\Model\ValidationFailed` · `Phalcon\Support\Collection` · `Phalcon\Support\Collection\CollectionInterface` · `Phalcon\Support\Settings` · `Serializable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodel-__call">
<code class="vis vis-public">public</code>
<code class="sig">__call(
    string $method,
    array $arguments
)</code>
<span class="desc">Handles method calls when a method is not implemented</span>
</a>
<a class="api-item" href="#mvcmodel-__callstatic">
<code class="vis vis-public">public</code>
<code class="sig">__callStatic(
    string $method,
    array $arguments
)</code>
<span class="desc">Handles method calls when a static method is not implemented</span>
</a>
<a class="api-item" href="#mvcmodel-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    mixed $data = null,
    DiInterface $container = null,
    ManagerInterface $modelsManager = null
)</code>
<span class="desc">Phalcon\Mvc\Model constructor</span>
</a>
<a class="api-item" href="#mvcmodel-__get">
<code class="vis vis-public">public</code>
<code class="sig">__get( string $property )</code>
<span class="desc">Magic method to get related records using the relation alias as a</span>
</a>
<a class="api-item" href="#mvcmodel-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">__isset( string $property )</code>
<span class="desc">Magic method to check if a property is a valid relation</span>
</a>
<a class="api-item" href="#mvcmodel-__serialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">__serialize()</code>
<span class="desc">Serializes a model</span>
</a>
<a class="api-item" href="#mvcmodel-__set">
<code class="vis vis-public">public</code>
<code class="sig">__set(
    string $property,
    mixed $value
)</code>
<span class="desc">Magic method to assign values to the the model</span>
</a>
<a class="api-item" href="#mvcmodel-__unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">__unserialize( array $data )</code>
<span class="desc">Unserializes an array to the model</span>
</a>
<a class="api-item" href="#mvcmodel-addbehavior">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">addBehavior( BehaviorInterface $behavior )</code>
<span class="desc">Setups a behavior in a model</span>
</a>
<a class="api-item" href="#mvcmodel-appendmessage">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">appendMessage( MessageInterface $message )</code>
<span class="desc">Appends a customized message on the validation process</span>
</a>
<a class="api-item" href="#mvcmodel-appendmessagesfrom">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">appendMessagesFrom( mixed $model )</code>
<span class="desc">**</span>
</a>
<a class="api-item" href="#mvcmodel-assign">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">assign(
    array $data,
    mixed $whiteList = null,
    mixed $dataColumnMap = null
)</code>
<span class="desc">Assigns values to a model from an array</span>
</a>
<a class="api-item" href="#mvcmodel-average">
<code class="vis vis-public">public</code>
<code class="ret">double|ResultsetInterface</code>
<code class="sig">average( array $parameters = [] )</code>
<span class="desc">Returns the average value on a column for a result-set of rows matching</span>
</a>
<a class="api-item" href="#mvcmodel-cloneresult">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">cloneResult(
    ModelInterface $base,
    array $data,
    int $dirtyState = 0
)</code>
<span class="desc">Assigns values to a model from an array returning a new model</span>
</a>
<a class="api-item" href="#mvcmodel-cloneresultmap">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">cloneResultMap(
    mixed $base,
    array $data,
    mixed $columnMap,
    int $dirtyState = 0,
    bool $keepSnapshots = null
)</code>
<span class="desc">Assigns values to a model from an array, returning a new model.</span>
</a>
<a class="api-item" href="#mvcmodel-cloneresultmaphydrate">
<code class="vis vis-public">public</code>
<code class="sig">cloneResultMapHydrate(
    array $data,
    mixed $columnMap,
    int $hydrationMode
)</code>
<span class="desc">Returns an hydrated result based on the data and the column map</span>
</a>
<a class="api-item" href="#mvcmodel-count">
<code class="vis vis-public">public</code>
<code class="ret">int|ResultsetInterface</code>
<code class="sig">count( mixed $parameters = null )</code>
<span class="desc">Counts how many records match the specified conditions.</span>
</a>
<a class="api-item" href="#mvcmodel-create">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">create()</code>
<span class="desc">Inserts a model instance. If the instance already exists in the</span>
</a>
<a class="api-item" href="#mvcmodel-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">delete()</code>
<span class="desc">Deletes a model instance. Returning true on success or false otherwise.</span>
</a>
<a class="api-item" href="#mvcmodel-dosave">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">doSave( CollectionInterface $visited )</code>
<span class="desc">Inserted or updates model instance, expects a visited list of objects.</span>
</a>
<a class="api-item" href="#mvcmodel-dump">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">dump()</code>
<span class="desc">Returns a simple representation of the object that can be used with</span>
</a>
<a class="api-item" href="#mvcmodel-find">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface</code>
<code class="sig">find( mixed $parameters = null )</code>
<span class="desc">Query for a set of records that match the specified conditions</span>
</a>
<a class="api-item" href="#mvcmodel-findfirst">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">findFirst( mixed $parameters = null )</code>
<span class="desc">Query the first record that matches the specified conditions</span>
</a>
<a class="api-item" href="#mvcmodel-fireevent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">fireEvent( string $eventName )</code>
<span class="desc">Fires an event, implicitly calls behaviors and listeners in the events</span>
</a>
<a class="api-item" href="#mvcmodel-fireeventcancel">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">fireEventCancel( string $eventName )</code>
<span class="desc">Fires an event, implicitly calls behaviors and listeners in the events</span>
</a>
<a class="api-item" href="#mvcmodel-getchangedfields">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getChangedFields()</code>
<span class="desc">Returns a list of changed values.</span>
</a>
<a class="api-item" href="#mvcmodel-getdirtystate">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getDirtyState()</code>
<span class="desc">Returns one of the DIRTY_STATE_* constants telling if the record exists</span>
</a>
<a class="api-item" href="#mvcmodel-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">EventsManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the custom events manager or null if there is no custom events manager</span>
</a>
<a class="api-item" href="#mvcmodel-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface[]</code>
<code class="sig">getMessages( mixed $filter = null )</code>
<span class="desc">Returns array of validation messages</span>
</a>
<a class="api-item" href="#mvcmodel-getmodelsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig">getModelsManager()</code>
<span class="desc">Returns the models manager related to the entity instance</span>
</a>
<a class="api-item" href="#mvcmodel-getmodelsmetadata">
<code class="vis vis-public">public</code>
<code class="ret">MetaDataInterface</code>
<code class="sig">getModelsMetaData()</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#mvcmodel-getoldsnapshotdata">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getOldSnapshotData()</code>
<span class="desc">Returns the internal old snapshot data</span>
</a>
<a class="api-item" href="#mvcmodel-getoperationmade">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getOperationMade()</code>
<span class="desc">Returns the type of the latest operation performed by the ORM</span>
</a>
<a class="api-item" href="#mvcmodel-getreadconnection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getReadConnection()</code>
<span class="desc">Gets the connection used to read data for the model</span>
</a>
<a class="api-item" href="#mvcmodel-getreadconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getReadConnectionService()</code>
<span class="desc">Returns the DependencyInjection connection service name used to read data</span>
</a>
<a class="api-item" href="#mvcmodel-getrelated">
<code class="vis vis-public">public</code>
<code class="sig">getRelated(
    string $alias,
    mixed $arguments = null
)</code>
<span class="desc">Returns related records based on defined relations</span>
</a>
<a class="api-item" href="#mvcmodel-getschema">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getSchema()</code>
<span class="desc">Returns schema name where the mapped table is located</span>
</a>
<a class="api-item" href="#mvcmodel-getsnapshotdata">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSnapshotData()</code>
<span class="desc">Returns the internal snapshot data</span>
</a>
<a class="api-item" href="#mvcmodel-getsource">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSource()</code>
<span class="desc">Returns the table name mapped in the model</span>
</a>
<a class="api-item" href="#mvcmodel-gettransaction">
<code class="vis vis-public">public</code>
<code class="ret">TransactionInterface|null</code>
<code class="sig">getTransaction()</code>
</a>
<a class="api-item" href="#mvcmodel-getupdatedfields">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getUpdatedFields()</code>
<span class="desc">Returns a list of updated values.</span>
</a>
<a class="api-item" href="#mvcmodel-getwriteconnection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getWriteConnection()</code>
<span class="desc">Gets the connection used to write data to the model</span>
</a>
<a class="api-item" href="#mvcmodel-getwriteconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getWriteConnectionService()</code>
<span class="desc">Returns the DependencyInjection connection service name used to write</span>
</a>
<a class="api-item" href="#mvcmodel-haschanged">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasChanged(
    mixed $fieldName = null,
    bool $allFields = false
)</code>
<span class="desc">Check if a specific attribute has changed</span>
</a>
<a class="api-item" href="#mvcmodel-hassnapshotdata">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasSnapshotData()</code>
<span class="desc">Checks if the object has internal snapshot data</span>
</a>
<a class="api-item" href="#mvcmodel-hasupdated">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasUpdated(
    mixed $fieldName = null,
    bool $allFields = false
)</code>
<span class="desc">Check if a specific attribute was updated</span>
</a>
<a class="api-item" href="#mvcmodel-isrelationshiploaded">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isRelationshipLoaded( string $relationshipAlias )</code>
<span class="desc">Checks if saved related records have already been loaded.</span>
</a>
<a class="api-item" href="#mvcmodel-jsonserialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">jsonSerialize()</code>
<span class="desc">Serializes the object for json_encode</span>
</a>
<a class="api-item" href="#mvcmodel-maximum">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">maximum( mixed $parameters = null )</code>
<span class="desc">Returns the maximum value of a column for a result-set of rows that match</span>
</a>
<a class="api-item" href="#mvcmodel-minimum">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">minimum( mixed $parameters = null )</code>
<span class="desc">Returns the minimum value of a column for a result-set of rows that match</span>
</a>
<a class="api-item" href="#mvcmodel-query">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">query( DiInterface $container = null )</code>
<span class="desc">Create a criteria for a specific model</span>
</a>
<a class="api-item" href="#mvcmodel-readattribute">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">readAttribute( string $attribute )</code>
<span class="desc">Reads an attribute value by its name</span>
</a>
<a class="api-item" href="#mvcmodel-refresh">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">refresh()</code>
<span class="desc">Refreshes the model attributes re-querying the record from the database</span>
</a>
<a class="api-item" href="#mvcmodel-save">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">save()</code>
<span class="desc">Inserts or updates a model instance. Returning true on success or false</span>
</a>
<a class="api-item" href="#mvcmodel-serialize">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">serialize()</code>
<span class="desc">Serializes the object ignoring connections, services, related objects or</span>
</a>
<a class="api-item" href="#mvcmodel-setconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setConnectionService( string $connectionService )</code>
<span class="desc">Sets the DependencyInjection connection service name</span>
</a>
<a class="api-item" href="#mvcmodel-setdirtystate">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|bool</code>
<code class="sig">setDirtyState( int $dirtyState )</code>
<span class="desc">Sets the dirty state of the object using one of the DIRTY_STATE_* constants</span>
</a>
<a class="api-item" href="#mvcmodel-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="sig">setEventsManager( EventsManagerInterface $eventsManager )</code>
<span class="desc">Sets a custom events manager</span>
</a>
<a class="api-item" href="#mvcmodel-setoldsnapshotdata">
<code class="vis vis-public">public</code>
<code class="sig">setOldSnapshotData(
    array $data,
    mixed $columnMap = null
)</code>
<span class="desc">Sets the record&#039;s old snapshot data.</span>
</a>
<a class="api-item" href="#mvcmodel-setreadconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setReadConnectionService( string $connectionService )</code>
<span class="desc">Sets the DependencyInjection connection service name used to read data</span>
</a>
<a class="api-item" href="#mvcmodel-setsnapshotdata">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setSnapshotData(
    array $data,
    mixed $columnMap = null
)</code>
<span class="desc">Sets the record&#039;s snapshot data.</span>
</a>
<a class="api-item" href="#mvcmodel-setsync">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">setSync(
    mixed $elements = null,
    bool $enabled = true
)</code>
<span class="desc">Marks one or more many-to-many relationships to be synchronized (or not)</span>
</a>
<a class="api-item" href="#mvcmodel-settransaction">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">setTransaction( TransactionInterface $transaction )</code>
<span class="desc">Sets a transaction related to the Model instance</span>
</a>
<a class="api-item" href="#mvcmodel-setwriteconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setWriteConnectionService( string $connectionService )</code>
<span class="desc">Sets the DependencyInjection connection service name used to write data</span>
</a>
<a class="api-item" href="#mvcmodel-setup">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setup( array $options )</code>
<span class="desc">Enables/disables options in the ORM</span>
</a>
<a class="api-item" href="#mvcmodel-skipoperation">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">skipOperation( bool $skip )</code>
<span class="desc">Skips the current operation forcing a success state</span>
</a>
<a class="api-item" href="#mvcmodel-sum">
<code class="vis vis-public">public</code>
<code class="ret">double|ResultsetInterface</code>
<code class="sig">sum( mixed $parameters = null )</code>
<span class="desc">Calculates the sum on a column for a result-set of rows that match the</span>
</a>
<a class="api-item" href="#mvcmodel-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">toArray(
    mixed $columns = null,
    mixed $useGetter = true
)</code>
<span class="desc">Returns the instance as an array representation</span>
</a>
<a class="api-item" href="#mvcmodel-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">unserialize( string $data )</code>
<span class="desc">Unserializes the object from a serialized string</span>
</a>
<a class="api-item" href="#mvcmodel-update">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">update()</code>
<span class="desc">Updates a model instance. If the instance does not exist in the</span>
</a>
<a class="api-item" href="#mvcmodel-validationhasfailed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">validationHasFailed()</code>
<span class="desc">Check whether validation process has generated any messages</span>
</a>
<a class="api-item" href="#mvcmodel-writeattribute">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">writeAttribute(
    string $attribute,
    mixed $value
)</code>
<span class="desc">Writes an attribute value by its name</span>
</a>
<a class="api-item" href="#mvcmodel-allowemptystringvalues">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">allowEmptyStringValues( array $attributes )</code>
<span class="desc">Sets a list of attributes that must be skipped from the</span>
</a>
<a class="api-item" href="#mvcmodel-belongsto">
<code class="vis vis-protected">protected</code>
<code class="ret">Relation</code>
<code class="sig">belongsTo(
    mixed $fields,
    string $referenceModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup a reverse 1-1 or n-1 relation between two models</span>
</a>
<a class="api-item" href="#mvcmodel-canceloperation">
<code class="vis vis-protected">protected</code>
<code class="sig">cancelOperation()</code>
<span class="desc">Cancel the current operation</span>
</a>
<a class="api-item" href="#mvcmodel-checkforeignkeysrestrict">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">checkForeignKeysRestrict()</code>
<span class="desc">Reads &quot;belongs to&quot; relations and check the virtual foreign keys when</span>
</a>
<a class="api-item" href="#mvcmodel-checkforeignkeysreversecascade">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">checkForeignKeysReverseCascade()</code>
<span class="desc">Reads both &quot;hasMany&quot; and &quot;hasOne&quot; relations and checks the virtual</span>
</a>
<a class="api-item" href="#mvcmodel-checkforeignkeysreverserestrict">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">checkForeignKeysReverseRestrict()</code>
<span class="desc">Reads both &quot;hasMany&quot; and &quot;hasOne&quot; relations and checks the virtual</span>
</a>
<a class="api-item" href="#mvcmodel-collectrelatedtosave">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">collectRelatedToSave()</code>
<span class="desc">Collects previously queried (belongs-to, has-one and has-one-through)</span>
</a>
<a class="api-item" href="#mvcmodel-dolowinsert">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">doLowInsert(
    MetaDataInterface $metaData,
    AdapterInterface $connection,
    mixed $table,
    mixed $identityField
)</code>
<span class="desc">Sends a pre-build INSERT SQL statement to the relational database system</span>
</a>
<a class="api-item" href="#mvcmodel-dolowupdate">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">doLowUpdate(
    MetaDataInterface $metaData,
    AdapterInterface $connection,
    mixed $table
)</code>
<span class="desc">Sends a pre-build UPDATE SQL statement to the relational database system</span>
</a>
<a class="api-item" href="#mvcmodel-getrelatedrecords">
<code class="vis vis-protected">protected</code>
<code class="sig">getRelatedRecords(
    string $modelName,
    string $method,
    array $arguments
)</code>
<span class="desc">Returns related records defined relations depending on the method name.</span>
</a>
<a class="api-item" href="#mvcmodel-groupresult">
<code class="vis vis-protected">protected</code>
<code class="ret">ResultsetInterface</code>
<code class="sig">groupResult(
    string $functionName,
    string $alias,
    mixed $parameters = null
)</code>
<span class="desc">Generate a PHQL SELECT statement for an aggregate</span>
</a>
<a class="api-item" href="#mvcmodel-has">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">has(
    MetaDataInterface $metaData,
    AdapterInterface $connection
)</code>
<span class="desc">Checks whether the current record already exists</span>
</a>
<a class="api-item" href="#mvcmodel-hasmany">
<code class="vis vis-protected">protected</code>
<code class="ret">Relation</code>
<code class="sig">hasMany(
    mixed $fields,
    string $referenceModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup a 1-n relation between two models</span>
</a>
<a class="api-item" href="#mvcmodel-hasmanytomany">
<code class="vis vis-protected">protected</code>
<code class="ret">Relation</code>
<code class="sig">hasManyToMany(
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referenceModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup an n-n relation between two models, through an intermediate</span>
</a>
<a class="api-item" href="#mvcmodel-hasone">
<code class="vis vis-protected">protected</code>
<code class="ret">Relation</code>
<code class="sig">hasOne(
    mixed $fields,
    string $referenceModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup a 1-1 relation between two models</span>
</a>
<a class="api-item" href="#mvcmodel-hasonethrough">
<code class="vis vis-protected">protected</code>
<code class="ret">Relation</code>
<code class="sig">hasOneThrough(
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referenceModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup a 1-1 relation between two models, through an intermediate</span>
</a>
<a class="api-item" href="#mvcmodel-invokefinder">
<code class="vis vis-protected">protected</code>
<code class="sig">invokeFinder(
    string $method,
    array $arguments
)</code>
<span class="desc">Try to check if the query must invoke a finder</span>
</a>
<a class="api-item" href="#mvcmodel-keepsnapshots">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">keepSnapshots( bool $keepSnapshot )</code>
<span class="desc">Sets if the model must keep the original record snapshot in memory</span>
</a>
<a class="api-item" href="#mvcmodel-possiblesetter">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">possibleSetter(
    string $property,
    mixed $value
)</code>
<span class="desc">Check for, and attempt to use, possible setter.</span>
</a>
<a class="api-item" href="#mvcmodel-postsave">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">postSave(
    bool $success,
    bool $exists
)</code>
<span class="desc">Executes internal events after save a record</span>
</a>
<a class="api-item" href="#mvcmodel-postsaverelatedrecords">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">postSaveRelatedRecords(
    AdapterInterface $connection,
    mixed $related,
    CollectionInterface $visited
)</code>
<span class="desc">Save the related records assigned in the has-one/has-many relations</span>
</a>
<a class="api-item" href="#mvcmodel-presave">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">preSave(
    MetaDataInterface $metaData,
    bool $exists,
    mixed $identityField
)</code>
<span class="desc">Executes internal hooks before save a record</span>
</a>
<a class="api-item" href="#mvcmodel-presaverelatedrecords">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">preSaveRelatedRecords(
    AdapterInterface $connection,
    mixed $related,
    CollectionInterface $visited
)</code>
<span class="desc">Saves related records that must be stored prior to save the master record</span>
</a>
<a class="api-item" href="#mvcmodel-setschema">
<code class="vis vis-protected">protected</code>
<code class="ret">ModelInterface</code>
<code class="sig">setSchema( string $schema )</code>
<span class="desc">Sets schema name where the mapped table is located</span>
</a>
<a class="api-item" href="#mvcmodel-setsource">
<code class="vis vis-protected">protected</code>
<code class="ret">ModelInterface</code>
<code class="sig">setSource( string $source )</code>
<span class="desc">Sets the table name to which model should be mapped</span>
</a>
<a class="api-item" href="#mvcmodel-skipattributes">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">skipAttributes( array $attributes )</code>
<span class="desc">Sets a list of attributes that must be skipped from the</span>
</a>
<a class="api-item" href="#mvcmodel-skipattributesoncreate">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">skipAttributesOnCreate( array $attributes )</code>
<span class="desc">Sets a list of attributes that must be skipped from the</span>
</a>
<a class="api-item" href="#mvcmodel-skipattributesonupdate">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">skipAttributesOnUpdate( array $attributes )</code>
<span class="desc">Sets a list of attributes that must be skipped from the</span>
</a>
<a class="api-item" href="#mvcmodel-usedynamicupdate">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">useDynamicUpdate( bool $dynamicUpdate )</code>
<span class="desc">Sets if a model must use dynamic update instead of the all-field update</span>
</a>
<a class="api-item" href="#mvcmodel-validate">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">validate( ValidationInterface $validator )</code>
<span class="desc">Executes validators on every validation call</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `DIRTY_STATE_DETACHED = 2` `int`

-   `DIRTY_STATE_PERSISTENT = 0` `int`

-   `DIRTY_STATE_TRANSIENT = 1` `int`

-   `OP_CREATE = 1` `int`

-   `OP_DELETE = 3` `int`

-   `OP_NONE = 0` `int`

-   `OP_UPDATE = 2` `int`

-   `TRANSACTION_INDEX = "transaction"` `string`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$dirtyRelated = []` `array`

-   `protected`{ .vis-protected } `$dirtyState = 1` `int`

-   `protected`{ .vis-protected } `$errorMessages = []` `array`

-   `protected`{ .vis-protected } `$modelsManager = null` `ManagerInterface|null`

-   `protected`{ .vis-protected } `$modelsMetaData = null` `MetaDataInterface|null`

-   `protected`{ .vis-protected } `$oldSnapshot = []` `array`

-   `protected`{ .vis-protected } `$operationMade = 0` `int`

-   `protected`{ .vis-protected } `$rawValues = []` `array`

-   `protected`{ .vis-protected } `$related = []` `array`

-   `protected`{ .vis-protected } `$skipped = false` `bool`

-   `protected`{ .vis-protected } `$snapshot = []` `array`

-   `protected`{ .vis-protected } `$syncRelated = []` `array`

    Per-save many-to-many sync overrides, keyed by lowercased relation
    alias (or "*" wildcard) => bool. Cleared after each save().

-   `protected`{ .vis-protected } `$transaction = null` `TransactionInterface|null`

-   `protected`{ .vis-protected } `$uniqueKey = null` `string|null`

-   `protected`{ .vis-protected } `$uniqueParams = []` `array`

-   `protected`{ .vis-protected } `$uniqueTypes = []` `array`

</div>

### Methods

<div class="api-group">Public · 72</div>

#### `__call()` { #mvcmodel-__call }

```php
public function __call(
    string $method,
    array $arguments
);
```

Handles method calls when a method is not implemented

#### `__callStatic()` { #mvcmodel-__callstatic }

```php
public static function __callStatic(
    string $method,
    array $arguments
);
```

Handles method calls when a static method is not implemented

#### `__construct()` { #mvcmodel-__construct }

```php
final public function __construct(
    mixed $data = null,
    DiInterface $container = null,
    ManagerInterface $modelsManager = null
);
```

Phalcon\Mvc\Model constructor

#### `__get()` { #mvcmodel-__get }

```php
public function __get( string $property );
```

Magic method to get related records using the relation alias as a
property

#### `__isset()` { #mvcmodel-__isset }

```php
public function __isset( string $property ): bool;
```

Magic method to check if a property is a valid relation

#### `__serialize()` { #mvcmodel-__serialize }

```php
public function __serialize(): array;
```

Serializes a model

#### `__set()` { #mvcmodel-__set }

```php
public function __set(
    string $property,
    mixed $value
);
```

Magic method to assign values to the the model

#### `__unserialize()` { #mvcmodel-__unserialize }

```php
public function __unserialize( array $data ): void;
```

Unserializes an array to the model

#### `addBehavior()` { #mvcmodel-addbehavior }

```php
public function addBehavior( BehaviorInterface $behavior ): void;
```

Setups a behavior in a model

```php
use Phalcon\Mvc\Model;
use Phalcon\Mvc\Model\Behavior\Timestampable;

class Robots extends Model
{
    public function initialize()
    {
        $this->addBehavior(
            new Timestampable(
                [
                    "beforeCreate" => [
                        "field"  => "created_at",
                        "format" => "Y-m-d",
                    ],
                ]
            )
        );

        $this->addBehavior(
            new Timestampable(
                [
                    "beforeUpdate" => [
                        "field"  => "updated_at",
                        "format" => "Y-m-d",
                    ],
                ]
            )
        );
    }
}
```

#### `appendMessage()` { #mvcmodel-appendmessage }

```php
public function appendMessage( MessageInterface $message ): ModelInterface;
```

Appends a customized message on the validation process

```php
use Phalcon\Mvc\Model;
use Phalcon\Messages\Message as Message;

class Robots extends Model
{
    public function beforeSave()
    {
        if ($this->name === "Peter") {
            $message = new Message(
                "Sorry, but a robot cannot be named Peter"
            );

            $this->appendMessage($message);
        }
    }
}
```

#### `appendMessagesFrom()` { #mvcmodel-appendmessagesfrom }

```php
public inline function appendMessagesFrom( mixed $model ): void;
```

**
Append messages to this model from another Model.

#### `assign()` { #mvcmodel-assign }

```php
public function assign(
    array $data,
    mixed $whiteList = null,
    mixed $dataColumnMap = null
): ModelInterface;
```

Assigns values to a model from an array

```php
$robot->assign(
    [
        "type" => "mechanical",
        "name" => "Astro Boy",
        "year" => 1952,
    ]
);

// Assign by db row, column map needed
$robot->assign(
    $dbRow,
    [
        "db_type" => "type",
        "db_name" => "name",
        "db_year" => "year",
    ]
);

// Allow assign only name and year
$robot->assign(
    $_POST,
    [
        "name",
        "year",
    ]
);

// By default assign method will use setters if exist, you can disable it by using ini_set to directly use properties

ini_set("phalcon.orm.disable_assign_setters", true);

$robot->assign(
    $_POST,
    [
        "name",
        "year",
    ]
);
```

#### `average()` { #mvcmodel-average }

```php
public static function average( array $parameters = [] ): double|ResultsetInterface;
```

Returns the average value on a column for a result-set of rows matching
the specified conditions.

Returned value will be a float for simple queries or a ResultsetInterface
instance for when the GROUP condition is used. The results will
contain the average of each group.

```php
// What's the average price of robots?
$average = Robots::average(
    [
        "column" => "price",
    ]
);

echo "The average price is ", $average, "\n";

// What's the average price of mechanical robots?
$average = Robots::average(
    [
        "type = 'mechanical'",
        "column" => "price",
    ]
);

echo "The average price of mechanical robots is ", $average, "\n";
```

#### `cloneResult()` { #mvcmodel-cloneresult }

```php
public static function cloneResult(
    ModelInterface $base,
    array $data,
    int $dirtyState = 0
): ModelInterface;
```

Assigns values to a model from an array returning a new model

```php
$robot = Phalcon\Mvc\Model::cloneResult(
    new Robots(),
    [
        "type" => "mechanical",
        "name" => "Astro Boy",
        "year" => 1952,
    ]
);
```

#### `cloneResultMap()` { #mvcmodel-cloneresultmap }

```php
public static function cloneResultMap(
    mixed $base,
    array $data,
    mixed $columnMap,
    int $dirtyState = 0,
    bool $keepSnapshots = null
): ModelInterface;
```

Assigns values to a model from an array, returning a new model.

```php
$robot = \Phalcon\Mvc\Model::cloneResultMap(
    new Robots(),
    [
        "type" => "mechanical",
        "name" => "Astro Boy",
        "year" => 1952,
    ]
);
```

#### `cloneResultMapHydrate()` { #mvcmodel-cloneresultmaphydrate }

```php
public static function cloneResultMapHydrate(
    array $data,
    mixed $columnMap,
    int $hydrationMode
);
```

Returns an hydrated result based on the data and the column map

#### `count()` { #mvcmodel-count }

```php
public static function count( mixed $parameters = null ): int|ResultsetInterface;
```

Counts how many records match the specified conditions.

Returns an integer for simple queries or a ResultsetInterface
instance for when the GROUP condition is used. The results will
contain the count of each group.

```php
// How many robots are there?
$number = Robots::count();

echo "There are ", $number, "\n";

// How many mechanical robots are there?
$number = Robots::count("type = 'mechanical'");

echo "There are ", $number, " mechanical robots\n";
```

#### `create()` { #mvcmodel-create }

```php
public function create(): bool;
```

Inserts a model instance. If the instance already exists in the
persistence it will throw an exception
Returning true on success or false otherwise.

```php
// Creating a new robot
$robot = new Robots();

$robot->type = "mechanical";
$robot->name = "Astro Boy";
$robot->year = 1952;

$robot->create();

// Passing an array to create
$robot = new Robots();

$robot->assign(
    [
        "type" => "mechanical",
        "name" => "Astro Boy",
        "year" => 1952,
    ]
);

$robot->create();
```

#### `delete()` { #mvcmodel-delete }

```php
public function delete(): bool;
```

Deletes a model instance. Returning true on success or false otherwise.

```php
$robot = Robots::findFirst("id=100");

$robot->delete();

$robots = Robots::find("type = 'mechanical'");

foreach ($robots as $robot) {
    $robot->delete();
}
```

#### `doSave()` { #mvcmodel-dosave }

```php
public function doSave( CollectionInterface $visited ): bool;
```

Inserted or updates model instance, expects a visited list of objects.

#### `dump()` { #mvcmodel-dump }

```php
public function dump(): array;
```

Returns a simple representation of the object that can be used with
`var_dump()`

```php
var_dump(
    $robot->dump()
);
```

#### `find()` { #mvcmodel-find }

```php
public static function find( mixed $parameters = null ): ResultsetInterface;
```

Query for a set of records that match the specified conditions

```php
// How many robots are there?
$robots = Robots::find();

echo "There are ", count($robots), "\n";

// How many mechanical robots are there?
$robots = Robots::find(
    "type = 'mechanical'"
);

echo "There are ", count($robots), "\n";

// Get and print virtual robots ordered by name
$robots = Robots::find(
    [
        "type = 'virtual'",
        "order" => "name",
    ]
);

foreach ($robots as $robot) {
    echo $robot->name, "\n";
}

// Get first 100 virtual robots ordered by name
$robots = Robots::find(
    [
        "type = 'virtual'",
        "order" => "name",
        "limit" => 100,
    ]
);

foreach ($robots as $robot) {
    echo $robot->name, "\n";
}

// encapsulate find it into an running transaction esp. useful for application unit-tests
// or complex business logic where we wanna control which transactions are used.

$myTransaction = new Transaction(\Phalcon\Di\Di::getDefault());
$myTransaction->begin();

$newRobot = new Robot();
$newRobot->setTransaction($myTransaction);

$newRobot->assign(
    [
        'name' => 'test',
        'type' => 'mechanical',
        'year' => 1944,
    ]
);

$newRobot->save();

$resultInsideTransaction = Robot::find(
    [
        'name' => 'test',
        Model::TRANSACTION_INDEX => $myTransaction,
    ]
);

$resultOutsideTransaction = Robot::find(['name' => 'test']);

foreach ($setInsideTransaction as $robot) {
    echo $robot->name, "\n";
}

foreach ($setOutsideTransaction as $robot) {
    echo $robot->name, "\n";
}

// reverts all not commited changes
$myTransaction->rollback();

// creating two different transactions
$myTransaction1 = new Transaction(\Phalcon\Di\Di::getDefault());
$myTransaction1->begin();
$myTransaction2 = new Transaction(\Phalcon\Di\Di::getDefault());
$myTransaction2->begin();

 // add a new robots
$firstNewRobot = new Robot();
$firstNewRobot->setTransaction($myTransaction1);
$firstNewRobot->assign(
    [
        'name' => 'first-transaction-robot',
        'type' => 'mechanical',
        'year' => 1944,
    ]
);
$firstNewRobot->save();

$secondNewRobot = new Robot();
$secondNewRobot->setTransaction($myTransaction2);
$secondNewRobot->assign(
    [
        'name' => 'second-transaction-robot',
        'type' => 'fictional',
        'year' => 1984,
    ]
);
$secondNewRobot->save();

// this transaction will find the robot.
$resultInFirstTransaction = Robot::find(
    [
        'name'                   => 'first-transaction-robot',
        Model::TRANSACTION_INDEX => $myTransaction1,
    ]
);

// this transaction won't find the robot.
$resultInSecondTransaction = Robot::find(
    [
        'name'                   => 'first-transaction-robot',
        Model::TRANSACTION_INDEX => $myTransaction2,
    ]
);

// this transaction won't find the robot.
$resultOutsideAnyExplicitTransaction = Robot::find(
    [
        'name' => 'first-transaction-robot',
    ]
);

// this transaction won't find the robot.
$resultInFirstTransaction = Robot::find(
    [
        'name'                   => 'second-transaction-robot',
        Model::TRANSACTION_INDEX => $myTransaction2,
    ]
);

// this transaction will find the robot.
$resultInSecondTransaction = Robot::find(
    [
        'name'                   => 'second-transaction-robot',
        Model::TRANSACTION_INDEX => $myTransaction1,
    ]
);

// this transaction won't find the robot.
$resultOutsideAnyExplicitTransaction = Robot::find(
    [
        'name' => 'second-transaction-robot',
    ]
);

$transaction1->rollback();
$transaction2->rollback();
```

#### `findFirst()` { #mvcmodel-findfirst }

```php
public static function findFirst( mixed $parameters = null ): mixed|null;
```

Query the first record that matches the specified conditions

```php
// What's the first robot in robots table?
$robot = Robots::findFirst();

echo "The robot name is ", $robot->name;

// What's the first mechanical robot in robots table?
$robot = Robots::findFirst(
    "type = 'mechanical'"
);

echo "The first mechanical robot name is ", $robot->name;

// Get first virtual robot ordered by name
$robot = Robots::findFirst(
    [
        "type = 'virtual'",
        "order" => "name",
    ]
);

echo "The first virtual robot name is ", $robot->name;

// behaviour with transaction
$myTransaction = new Transaction(\Phalcon\Di\Di::getDefault());
$myTransaction->begin();

$newRobot = new Robot();
$newRobot->setTransaction($myTransaction);
$newRobot->assign(
    [
        'name' => 'test',
        'type' => 'mechanical',
        'year' => 1944,
    ]
);
$newRobot->save();

$findsARobot = Robot::findFirst(
    [
        'name'                   => 'test',
        Model::TRANSACTION_INDEX => $myTransaction,
    ]
);

$doesNotFindARobot = Robot::findFirst(
    [
        'name' => 'test',
    ]
);

var_dump($findARobot);
var_dump($doesNotFindARobot);

$transaction->commit();

$doesFindTheRobotNow = Robot::findFirst(
    [
        'name' => 'test',
    ]
);
```

#### `fireEvent()` { #mvcmodel-fireevent }

```php
public function fireEvent( string $eventName ): bool;
```

Fires an event, implicitly calls behaviors and listeners in the events
manager are notified

#### `fireEventCancel()` { #mvcmodel-fireeventcancel }

```php
public function fireEventCancel( string $eventName ): bool;
```

Fires an event, implicitly calls behaviors and listeners in the events
manager are notified
This method stops if one of the callbacks/listeners returns bool false

#### `getChangedFields()` { #mvcmodel-getchangedfields }

```php
public function getChangedFields(): array;
```

Returns a list of changed values.

```php
$robots = Robots::findFirst();
print_r($robots->getChangedFields()); // []

$robots->deleted = 'Y';

$robots->getChangedFields();
print_r($robots->getChangedFields()); // ["deleted"]
```

#### `getDirtyState()` { #mvcmodel-getdirtystate }

```php
public function getDirtyState(): int;
```

Returns one of the DIRTY_STATE_* constants telling if the record exists
in the database or not

#### `getEventsManager()` { #mvcmodel-geteventsmanager }

```php
public function getEventsManager(): EventsManagerInterface|null;
```

Returns the custom events manager or null if there is no custom events manager

#### `getMessages()` { #mvcmodel-getmessages }

```php
public function getMessages( mixed $filter = null ): MessageInterface[];
```

Returns array of validation messages

```php
$robot = new Robots();

$robot->type = "mechanical";
$robot->name = "Astro Boy";
$robot->year = 1952;

if ($robot->save() === false) {
    echo "Umh, We can't store robots right now ";

    $messages = $robot->getMessages();

    foreach ($messages as $message) {
        echo $message;
    }
} else {
    echo "Great, a new robot was saved successfully!";
}
```

#### `getModelsManager()` { #mvcmodel-getmodelsmanager }

```php
public function getModelsManager(): ManagerInterface;
```

Returns the models manager related to the entity instance

#### `getModelsMetaData()` { #mvcmodel-getmodelsmetadata }

```php
public function getModelsMetaData(): MetaDataInterface;
```

{@inheritdoc}

#### `getOldSnapshotData()` { #mvcmodel-getoldsnapshotdata }

```php
public function getOldSnapshotData(): array;
```

Returns the internal old snapshot data

#### `getOperationMade()` { #mvcmodel-getoperationmade }

```php
public function getOperationMade(): int;
```

Returns the type of the latest operation performed by the ORM
Returns one of the OP_* class constants

#### `getReadConnection()` { #mvcmodel-getreadconnection }

```php
final public function getReadConnection(): AdapterInterface;
```

Gets the connection used to read data for the model

#### `getReadConnectionService()` { #mvcmodel-getreadconnectionservice }

```php
final public function getReadConnectionService(): string;
```

Returns the DependencyInjection connection service name used to read data
related the model

#### `getRelated()` { #mvcmodel-getrelated }

```php
public function getRelated(
    string $alias,
    mixed $arguments = null
);
```

Returns related records based on defined relations

#### `getSchema()` { #mvcmodel-getschema }

```php
final public function getSchema(): string|null;
```

Returns schema name where the mapped table is located

#### `getSnapshotData()` { #mvcmodel-getsnapshotdata }

```php
public function getSnapshotData(): array;
```

Returns the internal snapshot data

#### `getSource()` { #mvcmodel-getsource }

```php
final public function getSource(): string;
```

Returns the table name mapped in the model

#### `getTransaction()` { #mvcmodel-gettransaction }

```php
public function getTransaction(): TransactionInterface|null;
```

#### `getUpdatedFields()` { #mvcmodel-getupdatedfields }

```php
public function getUpdatedFields(): array;
```

Returns a list of updated values.

```php
$robots = Robots::findFirst();
print_r($robots->getChangedFields()); // []

$robots->deleted = 'Y';

$robots->getChangedFields();
print_r($robots->getChangedFields()); // ["deleted"]
$robots->save();
print_r($robots->getChangedFields()); // []
print_r($robots->getUpdatedFields()); // ["deleted"]
```

#### `getWriteConnection()` { #mvcmodel-getwriteconnection }

```php
final public function getWriteConnection(): AdapterInterface;
```

Gets the connection used to write data to the model

#### `getWriteConnectionService()` { #mvcmodel-getwriteconnectionservice }

```php
final public function getWriteConnectionService(): string;
```

Returns the DependencyInjection connection service name used to write
data related to the model

#### `hasChanged()` { #mvcmodel-haschanged }

```php
public function hasChanged(
    mixed $fieldName = null,
    bool $allFields = false
): bool;
```

Check if a specific attribute has changed
This only works if the model is keeping data snapshots

```php
$robot = new Robots();

$robot->type = "mechanical";
$robot->name = "Astro Boy";
$robot->year = 1952;

$robot->create();

$robot->type = "hydraulic";

$hasChanged = $robot->hasChanged("type"); // returns true
$hasChanged = $robot->hasChanged(["type", "name"]); // returns true
$hasChanged = $robot->hasChanged(["type", "name"], true); // returns false
```

#### `hasSnapshotData()` { #mvcmodel-hassnapshotdata }

```php
public function hasSnapshotData(): bool;
```

Checks if the object has internal snapshot data

#### `hasUpdated()` { #mvcmodel-hasupdated }

```php
public function hasUpdated(
    mixed $fieldName = null,
    bool $allFields = false
): bool;
```

Check if a specific attribute was updated
This only works if the model is keeping data snapshots

#### `isRelationshipLoaded()` { #mvcmodel-isrelationshiploaded }

```php
public function isRelationshipLoaded( string $relationshipAlias ): bool;
```

Checks if saved related records have already been loaded.

Only returns true if the records were previously fetched
through the model without any additional parameters.

```php
$robot = Robots::findFirst();
var_dump($robot->isRelationshipLoaded('robotsParts')); // false

$robotsParts = $robot->getRobotsParts(['id > 0']);
var_dump($robot->isRelationshipLoaded('robotsParts')); // false

$robotsParts = $robot->getRobotsParts(); // or $robot->robotsParts
var_dump($robot->isRelationshipLoaded('robotsParts')); // true

$robot->robotsParts = [new RobotsParts()];
var_dump($robot->isRelationshipLoaded('robotsParts')); // false
```

#### `jsonSerialize()` { #mvcmodel-jsonserialize }

```php
public function jsonSerialize(): array;
```

Serializes the object for json_encode

```php
echo json_encode($robot);
```

#### `maximum()` { #mvcmodel-maximum }

```php
public static function maximum( mixed $parameters = null ): mixed;
```

Returns the maximum value of a column for a result-set of rows that match
the specified conditions

```php
// What is the maximum robot id?
$id = Robots::maximum(
    [
        "column" => "id",
    ]
);

echo "The maximum robot id is: ", $id, "\n";

// What is the maximum id of mechanical robots?
$sum = Robots::maximum(
    [
        "type = 'mechanical'",
        "column" => "id",
    ]
);

echo "The maximum robot id of mechanical robots is ", $id, "\n";
```

#### `minimum()` { #mvcmodel-minimum }

```php
public static function minimum( mixed $parameters = null ): mixed;
```

Returns the minimum value of a column for a result-set of rows that match
the specified conditions

```php
// What is the minimum robot id?
$id = Robots::minimum(
    [
        "column" => "id",
    ]
);

echo "The minimum robot id is: ", $id;

// What is the minimum id of mechanical robots?
$sum = Robots::minimum(
    [
        "type = 'mechanical'",
        "column" => "id",
    ]
);

echo "The minimum robot id of mechanical robots is ", $id;
```

#### `query()` { #mvcmodel-query }

```php
public static function query( DiInterface $container = null ): CriteriaInterface;
```

Create a criteria for a specific model

#### `readAttribute()` { #mvcmodel-readattribute }

```php
public function readAttribute( string $attribute ): mixed|null;
```

Reads an attribute value by its name

```php
echo $robot->readAttribute("name");
```

#### `refresh()` { #mvcmodel-refresh }

```php
public function refresh(): ModelInterface;
```

Refreshes the model attributes re-querying the record from the database

#### `save()` { #mvcmodel-save }

```php
public function save(): bool;
```

Inserts or updates a model instance. Returning true on success or false
otherwise.

```php
// Creating a new robot
$robot = new Robots();

$robot->type = "mechanical";
$robot->name = "Astro Boy";
$robot->year = 1952;

$robot->save();

// Updating a robot name
$robot = Robots::findFirst("id = 100");

$robot->name = "Biomass";

$robot->save();
```

#### `serialize()` { #mvcmodel-serialize }

```php
public function serialize(): string|null;
```

Serializes the object ignoring connections, services, related objects or
static properties

#### `setConnectionService()` { #mvcmodel-setconnectionservice }

```php
final public function setConnectionService( string $connectionService ): void;
```

Sets the DependencyInjection connection service name

#### `setDirtyState()` { #mvcmodel-setdirtystate }

```php
public function setDirtyState( int $dirtyState ): ModelInterface|bool;
```

Sets the dirty state of the object using one of the DIRTY_STATE_* constants

#### `setEventsManager()` { #mvcmodel-seteventsmanager }

```php
public function setEventsManager( EventsManagerInterface $eventsManager );
```

Sets a custom events manager

#### `setOldSnapshotData()` { #mvcmodel-setoldsnapshotdata }

```php
public function setOldSnapshotData(
    array $data,
    mixed $columnMap = null
);
```

Sets the record's old snapshot data.
This method is used internally to set old snapshot data when the model
was set up to keep snapshot data

#### `setReadConnectionService()` { #mvcmodel-setreadconnectionservice }

```php
final public function setReadConnectionService( string $connectionService ): void;
```

Sets the DependencyInjection connection service name used to read data

#### `setSnapshotData()` { #mvcmodel-setsnapshotdata }

```php
public function setSnapshotData(
    array $data,
    mixed $columnMap = null
): void;
```

Sets the record's snapshot data.
This method is used internally to set snapshot data when the model was
set up to keep snapshot data

#### `setSync()` { #mvcmodel-setsync }

```php
public function setSync(
    mixed $elements = null,
    bool $enabled = true
): ModelInterface;
```

Marks one or more many-to-many relationships to be synchronized (or not)
on the next save() call, overriding the relation's `sync` option for that
save only. The flag is cleared after save().

When syncing is enabled, intermediate rows for related records no longer
present in the assigned array are deleted.

```php
// Sync only the "tags" relationship on this save
$post->setSync("tags")->save();

// Sync every many-to-many relationship on this save
$post->setSync()->save();

// Disable syncing for every relationship on this save
$post->setSync("*", false)->save();

// Disable syncing for specific relationships on this save
$post->setSync(["tags", "categories"], false)->save();
```

#### `setTransaction()` { #mvcmodel-settransaction }

```php
public function setTransaction( TransactionInterface $transaction ): ModelInterface;
```

Sets a transaction related to the Model instance

```php
use Phalcon\Mvc\Model\Transaction\Manager as TxManager;
use Phalcon\Mvc\Model\Transaction\Failed as TxFailed;

try {
    $txManager = new TxManager();

    $transaction = $txManager->get();

    $robot = new Robots();

    $robot->setTransaction($transaction);

    $robot->name       = "WALL·E";
    $robot->created_at = date("Y-m-d");

    if ($robot->save() === false) {
        $transaction->rollback("Can't save robot");
    }

    $robotPart = new RobotParts();

    $robotPart->setTransaction($transaction);

    $robotPart->type = "head";

    if ($robotPart->save() === false) {
        $transaction->rollback("Robot part cannot be saved");
    }

    $transaction->commit();
} catch (TxFailed $e) {
    echo "Failed, reason: ", $e->getMessage();
}
```

#### `setWriteConnectionService()` { #mvcmodel-setwriteconnectionservice }

```php
final public function setWriteConnectionService( string $connectionService ): void;
```

Sets the DependencyInjection connection service name used to write data

#### `setup()` { #mvcmodel-setup }

```php
public static function setup( array $options ): void;
```

Enables/disables options in the ORM

#### `skipOperation()` { #mvcmodel-skipoperation }

```php
public function skipOperation( bool $skip ): void;
```

Skips the current operation forcing a success state

#### `sum()` { #mvcmodel-sum }

```php
public static function sum( mixed $parameters = null ): double|ResultsetInterface;
```

Calculates the sum on a column for a result-set of rows that match the
specified conditions

```php
// How much are all robots?
$sum = Robots::sum(
    [
        "column" => "price",
    ]
);

echo "The total price of robots is ", $sum, "\n";

// How much are mechanical robots?
$sum = Robots::sum(
    [
        "type = 'mechanical'",
        "column" => "price",
    ]
);

echo "The total price of mechanical robots is  ", $sum, "\n";
```

#### `toArray()` { #mvcmodel-toarray }

```php
public function toArray(
    mixed $columns = null,
    mixed $useGetter = true
): array;
```

Returns the instance as an array representation

```php
print_r(
    $robot->toArray()
);
```

#### `unserialize()` { #mvcmodel-unserialize }

```php
public function unserialize( string $data ): void;
```

Unserializes the object from a serialized string

#### `update()` { #mvcmodel-update }

```php
public function update(): bool;
```

Updates a model instance. If the instance does not exist in the
persistence it will throw an exception. Returning `true` on success or
`false` otherwise.

```php
<?php

use MyApp\Models\Invoices;

$invoice = Invoices::findFirst('inv_id = 4');

$invoice->inv_total = 120;

$invoice->update();
```

!!! warning "NOTE"

    When retrieving the record with `findFirst()`, you need to get the full
    object back (no `columns` definition) but also retrieve it using the
    primary key. If not, the ORM will issue an `INSERT` instead of `UPDATE`.

#### `validationHasFailed()` { #mvcmodel-validationhasfailed }

```php
public function validationHasFailed(): bool;
```

Check whether validation process has generated any messages

```php
use Phalcon\Mvc\Model;
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\ExclusionIn;

class Subscriptors extends Model
{
    public function validation()
    {
        $validator = new Validation();

        $validator->validate(
            "status",
            new ExclusionIn(
                [
                    "domain" => [
                        "A",
                        "I",
                    ],
                ]
            )
        );

        return $this->validate($validator);
    }
}
```

#### `writeAttribute()` { #mvcmodel-writeattribute }

```php
public function writeAttribute(
    string $attribute,
    mixed $value
): void;
```

Writes an attribute value by its name

```php
$robot->writeAttribute("name", "Rosey");
```

<div class="api-group">Protected · 30</div>

#### `allowEmptyStringValues()` { #mvcmodel-allowemptystringvalues }

```php
protected function allowEmptyStringValues( array $attributes ): void;
```

Sets a list of attributes that must be skipped from the
generated UPDATE statement

```php
class Robots extends \Phalcon\Mvc\Model
{
    public function initialize()
    {
        $this->allowEmptyStringValues(
            [
                "name",
            ]
        );
    }
}
```

#### `belongsTo()` { #mvcmodel-belongsto }

```php
protected function belongsTo(
    mixed $fields,
    string $referenceModel,
    mixed $referencedFields,
    array $options = []
): Relation;
```

Setup a reverse 1-1 or n-1 relation between two models

```php
class RobotsParts extends \Phalcon\Mvc\Model
{
    public function initialize()
    {
        $this->belongsTo(
            "robots_id",
            Robots::class,
            "id"
        );
    }
}
```

#### `cancelOperation()` { #mvcmodel-canceloperation }

```php
protected function cancelOperation();
```

Cancel the current operation

#### `checkForeignKeysRestrict()` { #mvcmodel-checkforeignkeysrestrict }

```php
final protected function checkForeignKeysRestrict(): bool;
```

Reads "belongs to" relations and check the virtual foreign keys when
inserting or updating records to verify that inserted/updated values are
present in the related entity

#### `checkForeignKeysReverseCascade()` { #mvcmodel-checkforeignkeysreversecascade }

```php
final protected function checkForeignKeysReverseCascade(): bool;
```

Reads both "hasMany" and "hasOne" relations and checks the virtual
foreign keys (cascade) when deleting records

#### `checkForeignKeysReverseRestrict()` { #mvcmodel-checkforeignkeysreverserestrict }

```php
final protected function checkForeignKeysReverseRestrict(): bool;
```

Reads both "hasMany" and "hasOne" relations and checks the virtual
foreign keys (restrict) when deleting records

#### `collectRelatedToSave()` { #mvcmodel-collectrelatedtosave }

```php
protected function collectRelatedToSave(): array;
```

Collects previously queried (belongs-to, has-one and has-one-through)
related records along with freshly added one

#### `doLowInsert()` { #mvcmodel-dolowinsert }

```php
protected function doLowInsert(
    MetaDataInterface $metaData,
    AdapterInterface $connection,
    mixed $table,
    mixed $identityField
): bool;
```

Sends a pre-build INSERT SQL statement to the relational database system

#### `doLowUpdate()` { #mvcmodel-dolowupdate }

```php
protected function doLowUpdate(
    MetaDataInterface $metaData,
    AdapterInterface $connection,
    mixed $table
): bool;
```

Sends a pre-build UPDATE SQL statement to the relational database system

#### `getRelatedRecords()` { #mvcmodel-getrelatedrecords }

```php
protected function getRelatedRecords(
    string $modelName,
    string $method,
    array $arguments
);
```

Returns related records defined relations depending on the method name.
Returns false if the relation is non-existent.

#### `groupResult()` { #mvcmodel-groupresult }

```php
protected static function groupResult(
    string $functionName,
    string $alias,
    mixed $parameters = null
): ResultsetInterface;
```

Generate a PHQL SELECT statement for an aggregate

#### `has()` { #mvcmodel-has }

```php
protected function has(
    MetaDataInterface $metaData,
    AdapterInterface $connection
): bool;
```

Checks whether the current record already exists

#### `hasMany()` { #mvcmodel-hasmany }

```php
protected function hasMany(
    mixed $fields,
    string $referenceModel,
    mixed $referencedFields,
    array $options = []
): Relation;
```

Setup a 1-n relation between two models

```php
class Robots extends \Phalcon\Mvc\Model
{
    public function initialize()
    {
        $this->hasMany(
            "id",
            RobotsParts::class,
            "robots_id"
        );
    }
}
```

#### `hasManyToMany()` { #mvcmodel-hasmanytomany }

```php
protected function hasManyToMany(
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referenceModel,
    mixed $referencedFields,
    array $options = []
): Relation;
```

Setup an n-n relation between two models, through an intermediate
relation

```php
class Robots extends \Phalcon\Mvc\Model
{
    public function initialize()
    {
        // Setup a many-to-many relation to Parts through RobotsParts
        $this->hasManyToMany(
            "id",
            RobotsParts::class,
            "robots_id",
            "parts_id",
            Parts::class,
            "id",
        );
    }
}
```

#### `hasOne()` { #mvcmodel-hasone }

```php
protected function hasOne(
    mixed $fields,
    string $referenceModel,
    mixed $referencedFields,
    array $options = []
): Relation;
```

Setup a 1-1 relation between two models

```php
class Robots extends \Phalcon\Mvc\Model
{
    public function initialize()
    {
        $this->hasOne(
            "id",
            RobotsDescription::class,
            "robots_id"
        );
    }
}
```

#### `hasOneThrough()` { #mvcmodel-hasonethrough }

```php
protected function hasOneThrough(
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referenceModel,
    mixed $referencedFields,
    array $options = []
): Relation;
```

Setup a 1-1 relation between two models, through an intermediate
relation

```php
class Robots extends \Phalcon\Mvc\Model
{
    public function initialize()
    {
        // Setup a 1-1 relation to one item from Parts through RobotsParts
        $this->hasOneThrough(
            "id",
            RobotsParts::class,
            "robots_id",
            "parts_id",
            Parts::class,
            "id",
        );
    }
}
```

#### `invokeFinder()` { #mvcmodel-invokefinder }

```php
protected final static function invokeFinder(
    string $method,
    array $arguments
);
```

Try to check if the query must invoke a finder

#### `keepSnapshots()` { #mvcmodel-keepsnapshots }

```php
protected function keepSnapshots( bool $keepSnapshot ): void;
```

Sets if the model must keep the original record snapshot in memory

```php
use Phalcon\Mvc\Model;

class Robots extends Model
{
    public function initialize()
    {
        $this->keepSnapshots(true);
    }
}
```

#### `possibleSetter()` { #mvcmodel-possiblesetter }

```php
final protected function possibleSetter(
    string $property,
    mixed $value
): bool;
```

Check for, and attempt to use, possible setter.

#### `postSave()` { #mvcmodel-postsave }

```php
protected function postSave(
    bool $success,
    bool $exists
): bool;
```

Executes internal events after save a record

#### `postSaveRelatedRecords()` { #mvcmodel-postsaverelatedrecords }

```php
protected function postSaveRelatedRecords(
    AdapterInterface $connection,
    mixed $related,
    CollectionInterface $visited
): bool;
```

Save the related records assigned in the has-one/has-many relations

#### `preSave()` { #mvcmodel-presave }

```php
protected function preSave(
    MetaDataInterface $metaData,
    bool $exists,
    mixed $identityField
): bool;
```

Executes internal hooks before save a record

#### `preSaveRelatedRecords()` { #mvcmodel-presaverelatedrecords }

```php
protected function preSaveRelatedRecords(
    AdapterInterface $connection,
    mixed $related,
    CollectionInterface $visited
): bool;
```

Saves related records that must be stored prior to save the master record

#### `setSchema()` { #mvcmodel-setschema }

```php
final protected function setSchema( string $schema ): ModelInterface;
```

Sets schema name where the mapped table is located

#### `setSource()` { #mvcmodel-setsource }

```php
final protected function setSource( string $source ): ModelInterface;
```

Sets the table name to which model should be mapped

#### `skipAttributes()` { #mvcmodel-skipattributes }

```php
protected function skipAttributes( array $attributes ): void;
```

Sets a list of attributes that must be skipped from the
generated INSERT/UPDATE statement

```php
class Robots extends \Phalcon\Mvc\Model
{
    public function initialize()
    {
        $this->skipAttributes(
            [
                "price",
            ]
        );
    }
}
```

#### `skipAttributesOnCreate()` { #mvcmodel-skipattributesoncreate }

```php
protected function skipAttributesOnCreate( array $attributes ): void;
```

Sets a list of attributes that must be skipped from the
generated INSERT statement

```php
class Robots extends \Phalcon\Mvc\Model
{
    public function initialize()
    {
        $this->skipAttributesOnCreate(
            [
                "created_at",
            ]
        );
    }
}
```

#### `skipAttributesOnUpdate()` { #mvcmodel-skipattributesonupdate }

```php
protected function skipAttributesOnUpdate( array $attributes ): void;
```

Sets a list of attributes that must be skipped from the
generated UPDATE statement

```php
class Robots extends \Phalcon\Mvc\Model
{
    public function initialize()
    {
        $this->skipAttributesOnUpdate(
            [
                "modified_in",
            ]
        );
    }
}
```

#### `useDynamicUpdate()` { #mvcmodel-usedynamicupdate }

```php
protected function useDynamicUpdate( bool $dynamicUpdate ): void;
```

Sets if a model must use dynamic update instead of the all-field update

```php
use Phalcon\Mvc\Model;

class Robots extends Model
{
    public function initialize()
    {
        $this->useDynamicUpdate(true);
    }
}
```

#### `validate()` { #mvcmodel-validate }

```php
protected function validate( ValidationInterface $validator ): bool;
```

Executes validators on every validation call

```php
use Phalcon\Mvc\Model;
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\ExclusionIn;

class Subscriptors extends Model
{
    public function validation()
    {
        $validator = new Validation();

        $validator->add(
            "status",
            new ExclusionIn(
                [
                    "domain" => [
                        "A",
                        "I",
                    ],
                ]
            )
        );

        return $this->validate($validator);
    }
}
```


## Mvc\ModelInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/ModelInterface.zep){ .src-btn }

Phalcon\Mvc\ModelInterface

Interface for Phalcon\Mvc\Model

@template T

<div class="api-tree" markdown>

- **`Phalcon\Mvc\ModelInterface`**

</div>

__Uses__ `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\Model\CriteriaInterface` · `Phalcon\Mvc\Model\MetaDataInterface` · `Phalcon\Mvc\Model\ResultInterface` · `Phalcon\Mvc\Model\Resultset` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Mvc\Model\TransactionInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelinterface-appendmessage">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">appendMessage( MessageInterface $message )</code>
<span class="desc">Appends a customized message on the validation process</span>
</a>
<a class="api-item" href="#mvcmodelinterface-assign">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">assign(
    array $data,
    mixed $whiteList = null,
    mixed $dataColumnMap = null
)</code>
<span class="desc">Assigns values to a model from an array</span>
</a>
<a class="api-item" href="#mvcmodelinterface-average">
<code class="vis vis-public">public</code>
<code class="ret">double|ResultsetInterface</code>
<code class="sig">average( array $parameters = [] )</code>
<span class="desc">Allows to calculate the average value on a column matching the specified</span>
</a>
<a class="api-item" href="#mvcmodelinterface-cloneresult">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">cloneResult(
    ModelInterface $base,
    array $data,
    int $dirtyState = 0
)</code>
<span class="desc">Assigns values to a model from an array returning a new model</span>
</a>
<a class="api-item" href="#mvcmodelinterface-cloneresultmap">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">cloneResultMap(
    mixed $base,
    array $data,
    mixed $columnMap,
    int $dirtyState = 0,
    bool $keepSnapshots = false
)</code>
<span class="desc">Assigns values to a model from an array returning a new model</span>
</a>
<a class="api-item" href="#mvcmodelinterface-cloneresultmaphydrate">
<code class="vis vis-public">public</code>
<code class="sig">cloneResultMapHydrate(
    array $data,
    mixed $columnMap,
    int $hydrationMode
)</code>
<span class="desc">Returns an hydrated result based on the data and the column map</span>
</a>
<a class="api-item" href="#mvcmodelinterface-count">
<code class="vis vis-public">public</code>
<code class="ret">int|ResultsetInterface</code>
<code class="sig">count( mixed $parameters = null )</code>
<span class="desc">Allows to count how many records match the specified conditions</span>
</a>
<a class="api-item" href="#mvcmodelinterface-create">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">create()</code>
<span class="desc">Inserts a model instance. If the instance already exists in the</span>
</a>
<a class="api-item" href="#mvcmodelinterface-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">delete()</code>
<span class="desc">Deletes a model instance. Returning true on success or false otherwise.</span>
</a>
<a class="api-item" href="#mvcmodelinterface-find">
<code class="vis vis-public">public</code>
<code class="sig">find( mixed $parameters = null )</code>
<span class="desc">Allows to query a set of records that match the specified conditions</span>
</a>
<a class="api-item" href="#mvcmodelinterface-findfirst">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">findFirst( mixed $parameters = null )</code>
<span class="desc">Allows to query the first record that match the specified conditions</span>
</a>
<a class="api-item" href="#mvcmodelinterface-fireevent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">fireEvent( string $eventName )</code>
<span class="desc">Fires an event, implicitly calls behaviors and listeners in the events</span>
</a>
<a class="api-item" href="#mvcmodelinterface-fireeventcancel">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">fireEventCancel( string $eventName )</code>
<span class="desc">Fires an event, implicitly calls behaviors and listeners in the events</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getdirtystate">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getDirtyState()</code>
<span class="desc">Returns one of the DIRTY_STATE_* constants telling if the record exists</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface[]</code>
<code class="sig">getMessages()</code>
<span class="desc">Returns array of validation messages</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getmodelsmetadata">
<code class="vis vis-public">public</code>
<code class="ret">MetaDataInterface</code>
<code class="sig">getModelsMetaData()</code>
<span class="desc">Returns the models meta-data service related to the entity instance.</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getoperationmade">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getOperationMade()</code>
<span class="desc">Returns the type of the latest operation performed by the ORM</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getreadconnection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getReadConnection()</code>
<span class="desc">Gets internal database connection</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getreadconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getReadConnectionService()</code>
<span class="desc">Returns DependencyInjection connection service used to read data</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getrelated">
<code class="vis vis-public">public</code>
<code class="sig">getRelated(
    string $alias,
    mixed $arguments = null
)</code>
<span class="desc">Returns related records based on defined relations</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getschema">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getSchema()</code>
<span class="desc">Returns schema name where table mapped is located</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getsource">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSource()</code>
<span class="desc">Returns table name mapped in the model</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getwriteconnection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getWriteConnection()</code>
<span class="desc">Gets internal database connection</span>
</a>
<a class="api-item" href="#mvcmodelinterface-getwriteconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getWriteConnectionService()</code>
<span class="desc">Returns DependencyInjection connection service used to write data</span>
</a>
<a class="api-item" href="#mvcmodelinterface-maximum">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">maximum( mixed $parameters = null )</code>
<span class="desc">Allows to get the maximum value of a column that match the specified</span>
</a>
<a class="api-item" href="#mvcmodelinterface-minimum">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">minimum( mixed $parameters = null )</code>
<span class="desc">Allows to get the minimum value of a column that match the specified</span>
</a>
<a class="api-item" href="#mvcmodelinterface-query">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">query( DiInterface $container = null )</code>
<span class="desc">Create a criteria for a specific model</span>
</a>
<a class="api-item" href="#mvcmodelinterface-refresh">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">refresh()</code>
<span class="desc">Refreshes the model attributes re-querying the record from the database</span>
</a>
<a class="api-item" href="#mvcmodelinterface-save">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">save()</code>
<span class="desc">Inserts or updates a model instance. Returning true on success or false</span>
</a>
<a class="api-item" href="#mvcmodelinterface-setconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setConnectionService( string $connectionService )</code>
<span class="desc">Sets both read/write connection services</span>
</a>
<a class="api-item" href="#mvcmodelinterface-setdirtystate">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|bool</code>
<code class="sig">setDirtyState( int $dirtyState )</code>
<span class="desc">Sets the dirty state of the object using one of the DIRTY_STATE_*</span>
</a>
<a class="api-item" href="#mvcmodelinterface-setreadconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setReadConnectionService( string $connectionService )</code>
<span class="desc">Sets the DependencyInjection connection service used to read data</span>
</a>
<a class="api-item" href="#mvcmodelinterface-setsnapshotdata">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setSnapshotData(
    array $data,
    mixed $columnMap = null
)</code>
<span class="desc">Sets the record&#039;s snapshot data. This method is used internally to set</span>
</a>
<a class="api-item" href="#mvcmodelinterface-setsync">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">setSync(
    mixed $elements = null,
    bool $enabled = true
)</code>
<span class="desc">Marks one or more many-to-many relationships to be synchronized (or not)</span>
</a>
<a class="api-item" href="#mvcmodelinterface-settransaction">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">setTransaction( TransactionInterface $transaction )</code>
<span class="desc">Sets a transaction related to the Model instance</span>
</a>
<a class="api-item" href="#mvcmodelinterface-setwriteconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setWriteConnectionService( string $connectionService )</code>
<span class="desc">Sets the DependencyInjection connection service used to write data</span>
</a>
<a class="api-item" href="#mvcmodelinterface-skipoperation">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">skipOperation( bool $skip )</code>
<span class="desc">Skips the current operation forcing a success state</span>
</a>
<a class="api-item" href="#mvcmodelinterface-sum">
<code class="vis vis-public">public</code>
<code class="ret">double|ResultsetInterface</code>
<code class="sig">sum( mixed $parameters = null )</code>
<span class="desc">Allows to calculate a sum on a column that match the specified conditions</span>
</a>
<a class="api-item" href="#mvcmodelinterface-update">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">update()</code>
<span class="desc">Updates a model instance. If the instance does not exist in the</span>
</a>
<a class="api-item" href="#mvcmodelinterface-validationhasfailed">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">validationHasFailed()</code>
<span class="desc">Check whether validation process has generated any messages</span>
</a>
</div>

### Methods

<div class="api-group">Public · 40</div>

#### `appendMessage()` { #mvcmodelinterface-appendmessage }

```php
public function appendMessage( MessageInterface $message ): ModelInterface;
```

Appends a customized message on the validation process

#### `assign()` { #mvcmodelinterface-assign }

```php
public function assign(
    array $data,
    mixed $whiteList = null,
    mixed $dataColumnMap = null
): ModelInterface;
```

Assigns values to a model from an array

#### `average()` { #mvcmodelinterface-average }

```php
public static function average( array $parameters = [] ): double|ResultsetInterface;
```

Allows to calculate the average value on a column matching the specified
conditions

#### `cloneResult()` { #mvcmodelinterface-cloneresult }

```php
public static function cloneResult(
    ModelInterface $base,
    array $data,
    int $dirtyState = 0
): ModelInterface;
```

Assigns values to a model from an array returning a new model

#### `cloneResultMap()` { #mvcmodelinterface-cloneresultmap }

```php
public static function cloneResultMap(
    mixed $base,
    array $data,
    mixed $columnMap,
    int $dirtyState = 0,
    bool $keepSnapshots = false
): ModelInterface;
```

Assigns values to a model from an array returning a new model

#### `cloneResultMapHydrate()` { #mvcmodelinterface-cloneresultmaphydrate }

```php
public static function cloneResultMapHydrate(
    array $data,
    mixed $columnMap,
    int $hydrationMode
);
```

Returns an hydrated result based on the data and the column map

#### `count()` { #mvcmodelinterface-count }

```php
public static function count( mixed $parameters = null ): int|ResultsetInterface;
```

Allows to count how many records match the specified conditions

Returns an integer for simple queries or a ResultsetInterface
instance for when the GROUP condition is used. The results will
contain the count of each group.

#### `create()` { #mvcmodelinterface-create }

```php
public function create(): bool;
```

Inserts a model instance. If the instance already exists in the
persistence it will throw an exception. Returning true on success or
false otherwise.

#### `delete()` { #mvcmodelinterface-delete }

```php
public function delete(): bool;
```

Deletes a model instance. Returning true on success or false otherwise.

#### `find()` { #mvcmodelinterface-find }

```php
public static function find( mixed $parameters = null );
```

Allows to query a set of records that match the specified conditions

#### `findFirst()` { #mvcmodelinterface-findfirst }

```php
public static function findFirst( mixed $parameters = null ): mixed|null;
```

Allows to query the first record that match the specified conditions

TODO: Current method signature must be reviewed in v5. As it must return only ?ModelInterface (it also returns Row).
@see https://github.com/phalcon/cphalcon/issues/15212
@see https://github.com/phalcon/cphalcon/issues/15883

#### `fireEvent()` { #mvcmodelinterface-fireevent }

```php
public function fireEvent( string $eventName ): bool;
```

Fires an event, implicitly calls behaviors and listeners in the events
manager are notified

#### `fireEventCancel()` { #mvcmodelinterface-fireeventcancel }

```php
public function fireEventCancel( string $eventName ): bool;
```

Fires an event, implicitly calls behaviors and listeners in the events
manager are notified. This method stops if one of the callbacks/listeners
returns bool false

#### `getDirtyState()` { #mvcmodelinterface-getdirtystate }

```php
public function getDirtyState(): int;
```

Returns one of the DIRTY_STATE_* constants telling if the record exists
in the database or not

#### `getMessages()` { #mvcmodelinterface-getmessages }

```php
public function getMessages(): MessageInterface[];
```

Returns array of validation messages

#### `getModelsMetaData()` { #mvcmodelinterface-getmodelsmetadata }

```php
public function getModelsMetaData(): MetaDataInterface;
```

Returns the models meta-data service related to the entity instance.

#### `getOperationMade()` { #mvcmodelinterface-getoperationmade }

```php
public function getOperationMade(): int;
```

Returns the type of the latest operation performed by the ORM
Returns one of the OP_* class constants

#### `getReadConnection()` { #mvcmodelinterface-getreadconnection }

```php
public function getReadConnection(): AdapterInterface;
```

Gets internal database connection

#### `getReadConnectionService()` { #mvcmodelinterface-getreadconnectionservice }

```php
public function getReadConnectionService(): string;
```

Returns DependencyInjection connection service used to read data

#### `getRelated()` { #mvcmodelinterface-getrelated }

```php
public function getRelated(
    string $alias,
    mixed $arguments = null
);
```

Returns related records based on defined relations

#### `getSchema()` { #mvcmodelinterface-getschema }

```php
public function getSchema(): string|null;
```

Returns schema name where table mapped is located

#### `getSource()` { #mvcmodelinterface-getsource }

```php
public function getSource(): string;
```

Returns table name mapped in the model

#### `getWriteConnection()` { #mvcmodelinterface-getwriteconnection }

```php
public function getWriteConnection(): AdapterInterface;
```

Gets internal database connection

#### `getWriteConnectionService()` { #mvcmodelinterface-getwriteconnectionservice }

```php
public function getWriteConnectionService(): string;
```

Returns DependencyInjection connection service used to write data

#### `maximum()` { #mvcmodelinterface-maximum }

```php
public static function maximum( mixed $parameters = null ): mixed;
```

Allows to get the maximum value of a column that match the specified
conditions

#### `minimum()` { #mvcmodelinterface-minimum }

```php
public static function minimum( mixed $parameters = null ): mixed;
```

Allows to get the minimum value of a column that match the specified
conditions

#### `query()` { #mvcmodelinterface-query }

```php
public static function query( DiInterface $container = null ): CriteriaInterface;
```

Create a criteria for a specific model

#### `refresh()` { #mvcmodelinterface-refresh }

```php
public function refresh(): ModelInterface;
```

Refreshes the model attributes re-querying the record from the database

#### `save()` { #mvcmodelinterface-save }

```php
public function save(): bool;
```

Inserts or updates a model instance. Returning true on success or false
otherwise.

#### `setConnectionService()` { #mvcmodelinterface-setconnectionservice }

```php
public function setConnectionService( string $connectionService ): void;
```

Sets both read/write connection services

#### `setDirtyState()` { #mvcmodelinterface-setdirtystate }

```php
public function setDirtyState( int $dirtyState ): ModelInterface|bool;
```

Sets the dirty state of the object using one of the DIRTY_STATE_*
constants

#### `setReadConnectionService()` { #mvcmodelinterface-setreadconnectionservice }

```php
public function setReadConnectionService( string $connectionService ): void;
```

Sets the DependencyInjection connection service used to read data

#### `setSnapshotData()` { #mvcmodelinterface-setsnapshotdata }

```php
public function setSnapshotData(
    array $data,
    mixed $columnMap = null
): void;
```

Sets the record's snapshot data. This method is used internally to set
snapshot data when the model was set up to keep snapshot data

#### `setSync()` { #mvcmodelinterface-setsync }

```php
public function setSync(
    mixed $elements = null,
    bool $enabled = true
): ModelInterface;
```

Marks one or more many-to-many relationships to be synchronized (or not)
on the next save() call.

#### `setTransaction()` { #mvcmodelinterface-settransaction }

```php
public function setTransaction( TransactionInterface $transaction ): ModelInterface;
```

Sets a transaction related to the Model instance

#### `setWriteConnectionService()` { #mvcmodelinterface-setwriteconnectionservice }

```php
public function setWriteConnectionService( string $connectionService ): void;
```

Sets the DependencyInjection connection service used to write data

#### `skipOperation()` { #mvcmodelinterface-skipoperation }

```php
public function skipOperation( bool $skip ): void;
```

Skips the current operation forcing a success state

#### `sum()` { #mvcmodelinterface-sum }

```php
public static function sum( mixed $parameters = null ): double|ResultsetInterface;
```

Allows to calculate a sum on a column that match the specified conditions

#### `update()` { #mvcmodelinterface-update }

```php
public function update(): bool;
```

Updates a model instance. If the instance does not exist in the
persistence it will throw an exception. Returning true on success or
false otherwise.

#### `validationHasFailed()` { #mvcmodelinterface-validationhasfailed }

```php
public function validationHasFailed(): bool;
```

Check whether validation process has generated any messages


## Mvc\Model\Behavior

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Behavior.zep){ .src-btn }

Phalcon\Mvc\Model\Behavior

This is an optional base class for ORM behaviors

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Behavior`** — implements [`Phalcon\Mvc\Model\BehaviorInterface`](#mvcmodelbehaviorinterface)
    - [`Phalcon\Mvc\Model\Behavior\SoftDelete`](#mvcmodelbehaviorsoftdelete)
    - [`Phalcon\Mvc\Model\Behavior\Timestampable`](#mvcmodelbehaviortimestampable)

</div>

__Uses__ `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelbehavior-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $options = [] )</code>
<span class="desc">Phalcon\Mvc\Model\Behavior</span>
</a>
<a class="api-item" href="#mvcmodelbehavior-missingmethod">
<code class="vis vis-public">public</code>
<code class="sig">missingMethod(
    ModelInterface $model,
    string $method,
    array $arguments = []
)</code>
<span class="desc">Acts as fallbacks when a missing method is called on the model</span>
</a>
<a class="api-item" href="#mvcmodelbehavior-notify">
<code class="vis vis-public">public</code>
<code class="sig">notify(
    string $type,
    ModelInterface $model
)</code>
<span class="desc">This method receives the notifications from the EventsManager</span>
</a>
<a class="api-item" href="#mvcmodelbehavior-getoptions">
<code class="vis vis-protected">protected</code>
<code class="sig">getOptions( string $eventName = null )</code>
<span class="desc">Returns the behavior options related to an event</span>
</a>
<a class="api-item" href="#mvcmodelbehavior-musttakeaction">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">mustTakeAction( string $eventName )</code>
<span class="desc">Checks whether the behavior must take action on certain event</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$options` `array`

</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #mvcmodelbehavior-__construct }

```php
public function __construct( array $options = [] );
```

Phalcon\Mvc\Model\Behavior

#### `missingMethod()` { #mvcmodelbehavior-missingmethod }

```php
public function missingMethod(
    ModelInterface $model,
    string $method,
    array $arguments = []
);
```

Acts as fallbacks when a missing method is called on the model

#### `notify()` { #mvcmodelbehavior-notify }

```php
public function notify(
    string $type,
    ModelInterface $model
);
```

This method receives the notifications from the EventsManager

<div class="api-group">Protected · 2</div>

#### `getOptions()` { #mvcmodelbehavior-getoptions }

```php
protected function getOptions( string $eventName = null );
```

Returns the behavior options related to an event

#### `mustTakeAction()` { #mvcmodelbehavior-musttakeaction }

```php
protected function mustTakeAction( string $eventName ): bool;
```

Checks whether the behavior must take action on certain event


## Mvc\Model\BehaviorInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/BehaviorInterface.zep){ .src-btn }

Phalcon\Mvc\Model\BehaviorInterface

Interface for Phalcon\Mvc\Model\Behavior

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\BehaviorInterface`**

</div>

__Uses__ `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelbehaviorinterface-missingmethod">
<code class="vis vis-public">public</code>
<code class="sig">missingMethod(
    ModelInterface $model,
    string $method,
    array $arguments = []
)</code>
<span class="desc">Calls a method when it&#039;s missing in the model</span>
</a>
<a class="api-item" href="#mvcmodelbehaviorinterface-notify">
<code class="vis vis-public">public</code>
<code class="sig">notify(
    string $type,
    ModelInterface $model
)</code>
<span class="desc">This method receives the notifications from the EventsManager</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `missingMethod()` { #mvcmodelbehaviorinterface-missingmethod }

```php
public function missingMethod(
    ModelInterface $model,
    string $method,
    array $arguments = []
);
```

Calls a method when it's missing in the model

#### `notify()` { #mvcmodelbehaviorinterface-notify }

```php
public function notify(
    string $type,
    ModelInterface $model
);
```

This method receives the notifications from the EventsManager


## Mvc\Model\Behavior\Exceptions\MissingRequiredOption

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Behavior/Exceptions/MissingRequiredOption.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Behavior\Exceptions\MissingRequiredOption`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelbehaviorexceptionsmissingrequiredoption-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $option )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelbehaviorexceptionsmissingrequiredoption-__construct }

```php
public function __construct( string $option );
```


## Mvc\Model\Behavior\SoftDelete

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Behavior/SoftDelete.zep){ .src-btn }

Phalcon\Mvc\Model\Behavior\SoftDelete

Instead of permanently delete a record it marks the record as deleted
changing the value of a flag column

<div class="api-tree" markdown>

- [`Phalcon\Mvc\Model\Behavior`](#mvcmodelbehavior)
    - **`Phalcon\Mvc\Model\Behavior\SoftDelete`**

</div>

__Uses__ `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Behavior` · `Phalcon\Mvc\Model\Behavior\Exceptions\MissingRequiredOption` · `Phalcon\Mvc\Model\Exception` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelbehaviorsoftdelete-notify">
<code class="vis vis-public">public</code>
<code class="sig">notify(
    string $type,
    ModelInterface $model
)</code>
<span class="desc">Listens for notifications from the models manager</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `notify()` { #mvcmodelbehaviorsoftdelete-notify }

```php
public function notify(
    string $type,
    ModelInterface $model
);
```

Listens for notifications from the models manager


## Mvc\Model\Behavior\Timestampable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Behavior/Timestampable.zep){ .src-btn }

Phalcon\Mvc\Model\Behavior\Timestampable

Allows to automatically update a model’s attribute saving the datetime when a
record is created or updated

<div class="api-tree" markdown>

- [`Phalcon\Mvc\Model\Behavior`](#mvcmodelbehavior)
    - **`Phalcon\Mvc\Model\Behavior\Timestampable`**

</div>

__Uses__ `Closure` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Behavior` · `Phalcon\Mvc\Model\Behavior\Exceptions\MissingRequiredOption` · `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelbehaviortimestampable-notify">
<code class="vis vis-public">public</code>
<code class="sig">notify(
    string $type,
    ModelInterface $model
)</code>
<span class="desc">Listens for notifications from the models manager</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `notify()` { #mvcmodelbehaviortimestampable-notify }

```php
public function notify(
    string $type,
    ModelInterface $model
);
```

Listens for notifications from the models manager


## Mvc\Model\Binder

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Binder.zep){ .src-btn }

Phalcon\Mvc\Model\Binder

This is an class for binding models into params for handler

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Binder`** — implements [`Phalcon\Mvc\Model\BinderInterface`](#mvcmodelbinderinterface)

</div>

__Uses__ `Closure` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Mvc\Controller\BindModelInterface` · `Phalcon\Mvc\Model\Binder\BindableInterface` · `Phalcon\Mvc\Model\Exceptions\HandlerMustImplementBindable` · `Phalcon\Mvc\Model\Exceptions\InvalidGetModelNameReturn` · `Phalcon\Mvc\Model\Exceptions\MissingMethodName` · `Phalcon\Mvc\Model\Exceptions\MissingModelClassName` · `ReflectionFunction` · `ReflectionMethod` · `ReflectionNamedType`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelbinder-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( AdapterInterface $cache = null )</code>
<span class="desc">Phalcon\Mvc\Model\Binder constructor</span>
</a>
<a class="api-item" href="#mvcmodelbinder-bindtohandler">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">bindToHandler(
    object $handler,
    array $params,
    string $cacheKey,
    string $methodName = null
)</code>
<span class="desc">Bind models into params in proper handler</span>
</a>
<a class="api-item" href="#mvcmodelbinder-getboundmodels">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBoundModels()</code>
<span class="desc">Return the active bound models</span>
</a>
<a class="api-item" href="#mvcmodelbinder-getcache">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getCache()</code>
<span class="desc">Sets cache instance</span>
</a>
<a class="api-item" href="#mvcmodelbinder-getoriginalvalues">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getOriginalValues()</code>
<span class="desc">Return the array for original values</span>
</a>
<a class="api-item" href="#mvcmodelbinder-setcache">
<code class="vis vis-public">public</code>
<code class="ret">BinderInterface</code>
<code class="sig">setCache( AdapterInterface $cache )</code>
<span class="desc">Gets cache instance</span>
</a>
<a class="api-item" href="#mvcmodelbinder-findboundmodel">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed|bool</code>
<code class="sig">findBoundModel(
    mixed $paramValue,
    string $className
)</code>
<span class="desc">Find the model by param value.</span>
</a>
<a class="api-item" href="#mvcmodelbinder-getparamsfromcache">
<code class="vis vis-protected">protected</code>
<code class="ret">array|null</code>
<code class="sig">getParamsFromCache( string $cacheKey )</code>
<span class="desc">Get params classes from cache by key</span>
</a>
<a class="api-item" href="#mvcmodelbinder-getparamsfromreflection">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getParamsFromReflection(
    object $handler,
    array $params,
    string $cacheKey,
    string $methodName
)</code>
<span class="desc">Get modified params for handler using reflection</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$boundModels = []` `array`

    Array for storing active bound models

-   `protected`{ .vis-protected } `$cache` `AdapterInterface|null`

    Cache object used for caching parameters for model binding

-   `protected`{ .vis-protected } `$internalCache = []` `array`

    Internal cache for caching parameters for model binding during request

-   `protected`{ .vis-protected } `$originalValues = []` `array`

    Array for original values

</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #mvcmodelbinder-__construct }

```php
public function __construct( AdapterInterface $cache = null );
```

Phalcon\Mvc\Model\Binder constructor

#### `bindToHandler()` { #mvcmodelbinder-bindtohandler }

```php
public function bindToHandler(
    object $handler,
    array $params,
    string $cacheKey,
    string $methodName = null
): array;
```

Bind models into params in proper handler

#### `getBoundModels()` { #mvcmodelbinder-getboundmodels }

```php
public function getBoundModels(): array;
```

Return the active bound models

#### `getCache()` { #mvcmodelbinder-getcache }

```php
public function getCache(): AdapterInterface;
```

Sets cache instance

#### `getOriginalValues()` { #mvcmodelbinder-getoriginalvalues }

```php
public function getOriginalValues(): array;
```

Return the array for original values

#### `setCache()` { #mvcmodelbinder-setcache }

```php
public function setCache( AdapterInterface $cache ): BinderInterface;
```

Gets cache instance

<div class="api-group">Protected · 3</div>

#### `findBoundModel()` { #mvcmodelbinder-findboundmodel }

```php
protected function findBoundModel(
    mixed $paramValue,
    string $className
): mixed|bool;
```

Find the model by param value.

#### `getParamsFromCache()` { #mvcmodelbinder-getparamsfromcache }

```php
protected function getParamsFromCache( string $cacheKey ): array|null;
```

Get params classes from cache by key

#### `getParamsFromReflection()` { #mvcmodelbinder-getparamsfromreflection }

```php
protected function getParamsFromReflection(
    object $handler,
    array $params,
    string $cacheKey,
    string $methodName
): array;
```

Get modified params for handler using reflection


## Mvc\Model\BinderInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/BinderInterface.zep){ .src-btn }

Phalcon\Mvc\Model\BinderInterface

Interface for Phalcon\Mvc\Model\Binder

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\BinderInterface`**

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelbinderinterface-bindtohandler">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">bindToHandler(
    object $handler,
    array $params,
    string $cacheKey,
    string $methodName = null
)</code>
<span class="desc">Bind models into params in proper handler</span>
</a>
<a class="api-item" href="#mvcmodelbinderinterface-getboundmodels">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBoundModels()</code>
<span class="desc">Gets active bound models</span>
</a>
<a class="api-item" href="#mvcmodelbinderinterface-getcache">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getCache()</code>
<span class="desc">Gets cache instance</span>
</a>
<a class="api-item" href="#mvcmodelbinderinterface-setcache">
<code class="vis vis-public">public</code>
<code class="ret">BinderInterface</code>
<code class="sig">setCache( AdapterInterface $cache )</code>
<span class="desc">Sets cache instance</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `bindToHandler()` { #mvcmodelbinderinterface-bindtohandler }

```php
public function bindToHandler(
    object $handler,
    array $params,
    string $cacheKey,
    string $methodName = null
): array;
```

Bind models into params in proper handler

#### `getBoundModels()` { #mvcmodelbinderinterface-getboundmodels }

```php
public function getBoundModels(): array;
```

Gets active bound models

#### `getCache()` { #mvcmodelbinderinterface-getcache }

```php
public function getCache(): AdapterInterface;
```

Gets cache instance

#### `setCache()` { #mvcmodelbinderinterface-setcache }

```php
public function setCache( AdapterInterface $cache ): BinderInterface;
```

Sets cache instance


## Mvc\Model\Binder\BindableInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Binder/BindableInterface.zep){ .src-btn }

Phalcon\Mvc\Model\Binder\BindableInterface

Interface for bindable classes

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Binder\BindableInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelbinderbindableinterface-getmodelname">
<code class="vis vis-public">public</code>
<code class="ret">string|array</code>
<code class="sig">getModelName()</code>
<span class="desc">Return the model name or models names and parameters keys associated with</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getModelName()` { #mvcmodelbinderbindableinterface-getmodelname }

```php
public function getModelName(): string|array;
```

Return the model name or models names and parameters keys associated with
this class


## Mvc\Model\Criteria

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Criteria.zep){ .src-btn }

This class is used to build the array parameter required by
Phalcon\Mvc\Model::find() and Phalcon\Mvc\Model::findFirst() using an
object-oriented interface.

```php
<?php

$invoices = Invoices::query()
    ->where("inv_cst_id = :customerId:")
    ->andWhere("inv_created_date < '2000-01-01'")
    ->bind(["customerId" => 1])
    ->limit(5, 10)
    ->orderBy("inv_title")
    ->execute();
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Criteria`** — implements [`Phalcon\Mvc\Model\CriteriaInterface`](#mvcmodelcriteriainterface), [`Phalcon\Di\InjectionAwareInterface`](phalcon_di.md#diinjectionawareinterface)

</div>

__Uses__ `Phalcon\Db\Column` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Mvc\Model\Exceptions\InvalidModelName` · `Phalcon\Mvc\Model\Query\BuilderInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelcriteria-andwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">andWhere(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
)</code>
<span class="desc">Appends a condition to the current conditions using an AND operator</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-betweenwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">betweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum
)</code>
<span class="desc">Appends a BETWEEN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-bind">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">bind(
    array $bindParams,
    bool $merge = false
)</code>
<span class="desc">Sets the bound parameters in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-bindtypes">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">bindTypes( array $bindTypes )</code>
<span class="desc">Sets the bind types in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-cache">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">cache( array $cache )</code>
<span class="desc">Sets the cache options in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-columns">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">columns( mixed $columns )</code>
<span class="desc">Sets the columns to be queried. The columns can be either a `string` or</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-conditions">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">conditions( string $conditions )</code>
<span class="desc">Adds the conditions parameter to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-createbuilder">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">createBuilder()</code>
<span class="desc">Creates a query builder from criteria.</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-distinct">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">distinct( mixed $distinct )</code>
<span class="desc">Sets SELECT DISTINCT / SELECT ALL flag</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-execute">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface</code>
<code class="sig">execute()</code>
<span class="desc">Executes a find using the parameters built with the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">forUpdate( bool $forUpdate = true )</code>
<span class="desc">Adds the &quot;for_update&quot; parameter to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-frominput">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">fromInput(
    DiInterface $container,
    string $modelName,
    array $data,
    string $operator = &quot;AND&quot;
)</code>
<span class="desc">Builds a Phalcon\Mvc\Model\Criteria based on an input array like $_POST</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-getcolumns">
<code class="vis vis-public">public</code>
<code class="ret">string|array|null</code>
<code class="sig">getColumns()</code>
<span class="desc">Returns the columns to be queried</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-getconditions">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getConditions()</code>
<span class="desc">Returns the conditions parameter in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Returns the DependencyInjector container</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-getgroupby">
<code class="vis vis-public">public</code>
<code class="sig">getGroupBy()</code>
<span class="desc">Returns the group clause in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-gethaving">
<code class="vis vis-public">public</code>
<code class="sig">getHaving()</code>
<span class="desc">Returns the having clause in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-getlimit">
<code class="vis vis-public">public</code>
<code class="ret">int|array|null</code>
<code class="sig">getLimit()</code>
<span class="desc">Returns the limit parameter in the criteria, which will be</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-getmodelname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getModelName()</code>
<span class="desc">Returns an internal model name on which the criteria will be applied</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-getorderby">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getOrderBy()</code>
<span class="desc">Returns the order clause in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParams()</code>
<span class="desc">Returns all the parameters defined in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-getwhere">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getWhere()</code>
<span class="desc">Returns the conditions parameter in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-groupby">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">groupBy( mixed $group )</code>
<span class="desc">Adds the group-by clause to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-having">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">having( mixed $having )</code>
<span class="desc">Adds the having clause to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-inwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">inWhere(
    string $expr,
    array $values
)</code>
<span class="desc">Appends an IN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-innerjoin">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">innerJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
)</code>
<span class="desc">Adds an INNER join to the query</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-join">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">join(
    string $model,
    mixed $conditions = null,
    mixed $alias = null,
    mixed $type = null
)</code>
<span class="desc">Adds an INNER join to the query</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-leftjoin">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">leftJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
)</code>
<span class="desc">Adds a LEFT join to the query</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-limit">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">limit(
    int $limit,
    int $offset = 0
)</code>
<span class="desc">Adds the limit parameter to the criteria.</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-notbetweenwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">notBetweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum
)</code>
<span class="desc">Appends a NOT BETWEEN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-notinwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">notInWhere(
    string $expr,
    array $values
)</code>
<span class="desc">Appends a NOT IN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-orwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">orWhere(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
)</code>
<span class="desc">Appends a condition to the current conditions using an OR operator</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-orderby">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">orderBy( string $orderColumns )</code>
<span class="desc">Adds the order-by clause to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-rightjoin">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">rightJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
)</code>
<span class="desc">Adds a RIGHT join to the query</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the DependencyInjector container</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-setmodelname">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">setModelName( string $modelName )</code>
<span class="desc">Set a model on which the query will be executed</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">sharedLock( bool $sharedLock = true )</code>
<span class="desc">Adds the &quot;shared_lock&quot; parameter to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteria-where">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">where(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
)</code>
<span class="desc">Sets the conditions parameter in the criteria</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$bindParams` `array`

-   `protected`{ .vis-protected } `$bindTypes` `array`

-   `protected`{ .vis-protected } `$hiddenParamNumber = 0` `int`

-   `protected`{ .vis-protected } `$model = null` `string|null`

-   `protected`{ .vis-protected } `$params = []` `array`

</div>

### Methods

<div class="api-group">Public · 38</div>

#### `andWhere()` { #mvcmodelcriteria-andwhere }

```php
public function andWhere(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
): CriteriaInterface;
```

Appends a condition to the current conditions using an AND operator

#### `betweenWhere()` { #mvcmodelcriteria-betweenwhere }

```php
public function betweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum
): CriteriaInterface;
```

Appends a BETWEEN condition to the current conditions

```php
$criteria->betweenWhere("price", 100.25, 200.50);
```

#### `bind()` { #mvcmodelcriteria-bind }

```php
public function bind(
    array $bindParams,
    bool $merge = false
): CriteriaInterface;
```

Sets the bound parameters in the criteria
This method replaces all previously set bound parameters

#### `bindTypes()` { #mvcmodelcriteria-bindtypes }

```php
public function bindTypes( array $bindTypes ): CriteriaInterface;
```

Sets the bind types in the criteria
This method replaces all previously set bound parameters

#### `cache()` { #mvcmodelcriteria-cache }

```php
public function cache( array $cache ): CriteriaInterface;
```

Sets the cache options in the criteria
This method replaces all previously set cache options

#### `columns()` { #mvcmodelcriteria-columns }

```php
public function columns( mixed $columns ): CriteriaInterface;
```

Sets the columns to be queried. The columns can be either a `string` or
an `array` of strings. If the argument is a (single, non-embedded) string,
its content can specify one or more columns, separated by commas, the same
way that one uses the SQL select statement. You can use aliases, aggregate
functions, etc. If you need to reference other models you will need to
reference them with their namespaces.

When using an array as a parameter, you will need to specify one field
per array element. If a non-numeric key is defined in the array, it will
be used as the alias in the query

```php
<?php

// String, comma separated values
$criteria->columns("id, category");

// Array, one column per element
$criteria->columns(
    [
        "inv_id",
        "inv_total",
    ]
);

// Array with named key. The name of the key acts as an
// alias (`AS` clause)
$criteria->columns(
    [
        "inv_cst_id",
        "total_invoices" => "COUNT(*)",
    ]
);

// Different models
$criteria->columns(
    [
        "\Phalcon\Models\Invoices.*",
        "\Phalcon\Models\Customers.cst_name_first",
        "\Phalcon\Models\Customers.cst_name_last",
    ]
);
```

#### `conditions()` { #mvcmodelcriteria-conditions }

```php
public function conditions( string $conditions ): CriteriaInterface;
```

Adds the conditions parameter to the criteria

#### `createBuilder()` { #mvcmodelcriteria-createbuilder }

```php
public function createBuilder(): BuilderInterface;
```

Creates a query builder from criteria.

<?php

$invoices = Invoices::query()
    ->where("inv_cst_id = :customerId:")
    ->bind(["customerId" => 1])
    ->createBuilder();
```

#### `distinct()` { #mvcmodelcriteria-distinct }

```php
public function distinct( mixed $distinct ): CriteriaInterface;
```

Sets SELECT DISTINCT / SELECT ALL flag

#### `execute()` { #mvcmodelcriteria-execute }

```php
public function execute(): ResultsetInterface;
```

Executes a find using the parameters built with the criteria

#### `forUpdate()` { #mvcmodelcriteria-forupdate }

```php
public function forUpdate( bool $forUpdate = true ): CriteriaInterface;
```

Adds the "for_update" parameter to the criteria

#### `fromInput()` { #mvcmodelcriteria-frominput }

```php
public static function fromInput(
    DiInterface $container,
    string $modelName,
    array $data,
    string $operator = "AND"
): CriteriaInterface;
```

Builds a Phalcon\Mvc\Model\Criteria based on an input array like $_POST

#### `getColumns()` { #mvcmodelcriteria-getcolumns }

```php
public function getColumns(): string|array|null;
```

Returns the columns to be queried

#### `getConditions()` { #mvcmodelcriteria-getconditions }

```php
public function getConditions(): string|null;
```

Returns the conditions parameter in the criteria

#### `getDI()` { #mvcmodelcriteria-getdi }

```php
public function getDI(): DiInterface;
```

Returns the DependencyInjector container

#### `getGroupBy()` { #mvcmodelcriteria-getgroupby }

```php
public function getGroupBy();
```

Returns the group clause in the criteria

#### `getHaving()` { #mvcmodelcriteria-gethaving }

```php
public function getHaving();
```

Returns the having clause in the criteria

#### `getLimit()` { #mvcmodelcriteria-getlimit }

```php
public function getLimit(): int|array|null;
```

Returns the limit parameter in the criteria, which will be

- An integer if 'limit' was set without an 'offset'
- An array with 'number' and 'offset' keys if an offset was set with the limit
- NULL if limit has not been set

#### `getModelName()` { #mvcmodelcriteria-getmodelname }

```php
public function getModelName(): string;
```

Returns an internal model name on which the criteria will be applied

#### `getOrderBy()` { #mvcmodelcriteria-getorderby }

```php
public function getOrderBy(): string|null;
```

Returns the order clause in the criteria

#### `getParams()` { #mvcmodelcriteria-getparams }

```php
public function getParams(): array;
```

Returns all the parameters defined in the criteria

#### `getWhere()` { #mvcmodelcriteria-getwhere }

```php
public function getWhere(): string|null;
```

Returns the conditions parameter in the criteria

#### `groupBy()` { #mvcmodelcriteria-groupby }

```php
public function groupBy( mixed $group ): CriteriaInterface;
```

Adds the group-by clause to the criteria

#### `having()` { #mvcmodelcriteria-having }

```php
public function having( mixed $having ): CriteriaInterface;
```

Adds the having clause to the criteria

#### `inWhere()` { #mvcmodelcriteria-inwhere }

```php
public function inWhere(
    string $expr,
    array $values
): CriteriaInterface;
```

Appends an IN condition to the current conditions

```php
$criteria->inWhere("id", [1, 2, 3]);
```

#### `innerJoin()` { #mvcmodelcriteria-innerjoin }

```php
public function innerJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
): CriteriaInterface;
```

Adds an INNER join to the query

```php
<?php

$criteria->innerJoin(
    Invoices::class
);

$criteria->innerJoin(
    Invoices::class,
    "inv_cst_id = Customers.cst_id"
);

$criteria->innerJoin(
    Invoices::class,
    "i.inv_cst_id = Customers.cst_id",
    "i"
);
```

#### `join()` { #mvcmodelcriteria-join }

```php
public function join(
    string $model,
    mixed $conditions = null,
    mixed $alias = null,
    mixed $type = null
): CriteriaInterface;
```

Adds an INNER join to the query

```php
<?php

$criteria->join(
    Invoices::class
);

$criteria->join(
    Invoices::class,
    "inv_cst_id = Customers.cst_id"
);

$criteria->join(
    Invoices::class,
    "i.inv_cst_id = Customers.cst_id",
    "i"
);

$criteria->join(
    Invoices::class,
    "i.inv_cst_id = Customers.cst_id",
    "i",
    "LEFT"
);
```

#### `leftJoin()` { #mvcmodelcriteria-leftjoin }

```php
public function leftJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
): CriteriaInterface;
```

Adds a LEFT join to the query

```php
<?php

$criteria->leftJoin(
    Invoices::class,
    "i.inv_cst_id = Customers.cst_id",
    "i"
);
```

#### `limit()` { #mvcmodelcriteria-limit }

```php
public function limit(
    int $limit,
    int $offset = 0
): CriteriaInterface;
```

Adds the limit parameter to the criteria.

```php
$criteria->limit(100);
$criteria->limit(100, 200);
$criteria->limit("100", "200");
```

#### `notBetweenWhere()` { #mvcmodelcriteria-notbetweenwhere }

```php
public function notBetweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum
): CriteriaInterface;
```

Appends a NOT BETWEEN condition to the current conditions

```php
$criteria->notBetweenWhere("price", 100.25, 200.50);
```

#### `notInWhere()` { #mvcmodelcriteria-notinwhere }

```php
public function notInWhere(
    string $expr,
    array $values
): CriteriaInterface;
```

Appends a NOT IN condition to the current conditions

```php
$criteria->notInWhere("id", [1, 2, 3]);
```

#### `orWhere()` { #mvcmodelcriteria-orwhere }

```php
public function orWhere(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
): CriteriaInterface;
```

Appends a condition to the current conditions using an OR operator

#### `orderBy()` { #mvcmodelcriteria-orderby }

```php
public function orderBy( string $orderColumns ): CriteriaInterface;
```

Adds the order-by clause to the criteria

#### `rightJoin()` { #mvcmodelcriteria-rightjoin }

```php
public function rightJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
): CriteriaInterface;
```

Adds a RIGHT join to the query

```php
<?php

$criteria->rightJoin(
    Invoices::class,
    "i.inv_cst_id = Customers.cst_id",
    "i"
);
```

#### `setDI()` { #mvcmodelcriteria-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the DependencyInjector container

#### `setModelName()` { #mvcmodelcriteria-setmodelname }

```php
public function setModelName( string $modelName ): CriteriaInterface;
```

Set a model on which the query will be executed

#### `sharedLock()` { #mvcmodelcriteria-sharedlock }

```php
public function sharedLock( bool $sharedLock = true ): CriteriaInterface;
```

Adds the "shared_lock" parameter to the criteria

#### `where()` { #mvcmodelcriteria-where }

```php
public function where(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
): CriteriaInterface;
```

Sets the conditions parameter in the criteria


## Mvc\Model\CriteriaInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/CriteriaInterface.zep){ .src-btn }

Phalcon\Mvc\Model\CriteriaInterface

Interface for Phalcon\Mvc\Model\Criteria

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\CriteriaInterface`**

</div>

__Uses__ `Phalcon\Di\DiInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelcriteriainterface-andwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">andWhere(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
)</code>
<span class="desc">Appends a condition to the current conditions using an AND operator</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-betweenwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">betweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum
)</code>
<span class="desc">Appends a BETWEEN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-bind">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">bind( array $bindParams )</code>
<span class="desc">Sets the bound parameters in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-bindtypes">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">bindTypes( array $bindTypes )</code>
<span class="desc">Sets the bind types in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-cache">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">cache( array $cache )</code>
<span class="desc">Sets the cache options in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-conditions">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">conditions( string $conditions )</code>
<span class="desc">Adds the conditions parameter to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-distinct">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">distinct( mixed $distinct )</code>
<span class="desc">Sets SELECT DISTINCT / SELECT ALL flag</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-execute">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface</code>
<code class="sig">execute()</code>
<span class="desc">Executes a find using the parameters built with the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">forUpdate( bool $forUpdate = true )</code>
<span class="desc">Sets the &quot;for_update&quot; parameter to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-getcolumns">
<code class="vis vis-public">public</code>
<code class="ret">string|array|null</code>
<code class="sig">getColumns()</code>
<span class="desc">Returns the columns to be queried</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-getconditions">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getConditions()</code>
<span class="desc">Returns the conditions parameter in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-getgroupby">
<code class="vis vis-public">public</code>
<code class="sig">getGroupBy()</code>
<span class="desc">Returns the group clause in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-gethaving">
<code class="vis vis-public">public</code>
<code class="sig">getHaving()</code>
<span class="desc">Returns the having clause in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-getlimit">
<code class="vis vis-public">public</code>
<code class="ret">int|array|null</code>
<code class="sig">getLimit()</code>
<span class="desc">Returns the limit parameter in the criteria, which will be</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-getmodelname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getModelName()</code>
<span class="desc">Returns an internal model name on which the criteria will be applied</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-getorderby">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getOrderBy()</code>
<span class="desc">Returns the order parameter in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParams()</code>
<span class="desc">Returns all the parameters defined in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-getwhere">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getWhere()</code>
<span class="desc">Returns the conditions parameter in the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-groupby">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">groupBy( mixed $group )</code>
<span class="desc">Adds the group-by clause to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-having">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">having( mixed $having )</code>
<span class="desc">Adds the having clause to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-inwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">inWhere(
    string $expr,
    array $values
)</code>
<span class="desc">Appends an IN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-innerjoin">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">innerJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
)</code>
<span class="desc">Adds an INNER join to the query</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-leftjoin">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">leftJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
)</code>
<span class="desc">Adds a LEFT join to the query</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-limit">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">limit(
    int $limit,
    int $offset = 0
)</code>
<span class="desc">Sets the limit parameter to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-notbetweenwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">notBetweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum
)</code>
<span class="desc">Appends a NOT BETWEEN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-notinwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">notInWhere(
    string $expr,
    array $values
)</code>
<span class="desc">Appends a NOT IN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-orwhere">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">orWhere(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
)</code>
<span class="desc">Appends a condition to the current conditions using an OR operator</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-orderby">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">orderBy( string $orderColumns )</code>
<span class="desc">Adds the order-by parameter to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-rightjoin">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">rightJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
)</code>
<span class="desc">Adds a RIGHT join to the query</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-setmodelname">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">setModelName( string $modelName )</code>
<span class="desc">Set a model on which the query will be executed</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-sharedlock">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">sharedLock( bool $sharedLock = true )</code>
<span class="desc">Sets the &quot;shared_lock&quot; parameter to the criteria</span>
</a>
<a class="api-item" href="#mvcmodelcriteriainterface-where">
<code class="vis vis-public">public</code>
<code class="ret">CriteriaInterface</code>
<code class="sig">where(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
)</code>
<span class="desc">Sets the conditions parameter in the criteria</span>
</a>
</div>

### Methods

<div class="api-group">Public · 32</div>

#### `andWhere()` { #mvcmodelcriteriainterface-andwhere }

```php
public function andWhere(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
): CriteriaInterface;
```

Appends a condition to the current conditions using an AND operator

#### `betweenWhere()` { #mvcmodelcriteriainterface-betweenwhere }

```php
public function betweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum
): CriteriaInterface;
```

Appends a BETWEEN condition to the current conditions

```php
$criteria->betweenWhere("price", 100.25, 200.50);
```

#### `bind()` { #mvcmodelcriteriainterface-bind }

```php
public function bind( array $bindParams ): CriteriaInterface;
```

Sets the bound parameters in the criteria
This method replaces all previously set bound parameters

#### `bindTypes()` { #mvcmodelcriteriainterface-bindtypes }

```php
public function bindTypes( array $bindTypes ): CriteriaInterface;
```

Sets the bind types in the criteria
This method replaces all previously set bound parameters

#### `cache()` { #mvcmodelcriteriainterface-cache }

```php
public function cache( array $cache ): CriteriaInterface;
```

Sets the cache options in the criteria
This method replaces all previously set cache options

#### `conditions()` { #mvcmodelcriteriainterface-conditions }

```php
public function conditions( string $conditions ): CriteriaInterface;
```

Adds the conditions parameter to the criteria

#### `distinct()` { #mvcmodelcriteriainterface-distinct }

```php
public function distinct( mixed $distinct ): CriteriaInterface;
```

Sets SELECT DISTINCT / SELECT ALL flag

#### `execute()` { #mvcmodelcriteriainterface-execute }

```php
public function execute(): ResultsetInterface;
```

Executes a find using the parameters built with the criteria

#### `forUpdate()` { #mvcmodelcriteriainterface-forupdate }

```php
public function forUpdate( bool $forUpdate = true ): CriteriaInterface;
```

Sets the "for_update" parameter to the criteria

#### `getColumns()` { #mvcmodelcriteriainterface-getcolumns }

```php
public function getColumns(): string|array|null;
```

Returns the columns to be queried

#### `getConditions()` { #mvcmodelcriteriainterface-getconditions }

```php
public function getConditions(): string|null;
```

Returns the conditions parameter in the criteria

#### `getGroupBy()` { #mvcmodelcriteriainterface-getgroupby }

```php
public function getGroupBy();
```

Returns the group clause in the criteria

#### `getHaving()` { #mvcmodelcriteriainterface-gethaving }

```php
public function getHaving();
```

Returns the having clause in the criteria

#### `getLimit()` { #mvcmodelcriteriainterface-getlimit }

```php
public function getLimit(): int|array|null;
```

Returns the limit parameter in the criteria, which will be

- An integer if 'limit' was set without an 'offset'
- An array with 'number' and 'offset' keys if an offset was set with the limit
- NULL if limit has not been set

#### `getModelName()` { #mvcmodelcriteriainterface-getmodelname }

```php
public function getModelName(): string;
```

Returns an internal model name on which the criteria will be applied

#### `getOrderBy()` { #mvcmodelcriteriainterface-getorderby }

```php
public function getOrderBy(): string|null;
```

Returns the order parameter in the criteria

#### `getParams()` { #mvcmodelcriteriainterface-getparams }

```php
public function getParams(): array;
```

Returns all the parameters defined in the criteria

#### `getWhere()` { #mvcmodelcriteriainterface-getwhere }

```php
public function getWhere(): string|null;
```

Returns the conditions parameter in the criteria

#### `groupBy()` { #mvcmodelcriteriainterface-groupby }

```php
public function groupBy( mixed $group ): CriteriaInterface;
```

Adds the group-by clause to the criteria

#### `having()` { #mvcmodelcriteriainterface-having }

```php
public function having( mixed $having ): CriteriaInterface;
```

Adds the having clause to the criteria

#### `inWhere()` { #mvcmodelcriteriainterface-inwhere }

```php
public function inWhere(
    string $expr,
    array $values
): CriteriaInterface;
```

Appends an IN condition to the current conditions

```php
$criteria->inWhere("id", [1, 2, 3]);
```

#### `innerJoin()` { #mvcmodelcriteriainterface-innerjoin }

```php
public function innerJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
): CriteriaInterface;
```

Adds an INNER join to the query

```php
$criteria->innerJoin(
    Robots::class
);

$criteria->innerJoin(
    Robots::class,
    "r.id = RobotsParts.robots_id"
);

$criteria->innerJoin(
    Robots::class,
    "r.id = RobotsParts.robots_id",
    "r"
);
```

#### `leftJoin()` { #mvcmodelcriteriainterface-leftjoin }

```php
public function leftJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
): CriteriaInterface;
```

Adds a LEFT join to the query

```php
$criteria->leftJoin(
    Robots::class,
    "r.id = RobotsParts.robots_id",
    "r"
);
```

#### `limit()` { #mvcmodelcriteriainterface-limit }

```php
public function limit(
    int $limit,
    int $offset = 0
): CriteriaInterface;
```

Sets the limit parameter to the criteria

#### `notBetweenWhere()` { #mvcmodelcriteriainterface-notbetweenwhere }

```php
public function notBetweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum
): CriteriaInterface;
```

Appends a NOT BETWEEN condition to the current conditions

```php
$criteria->notBetweenWhere("price", 100.25, 200.50);
```

#### `notInWhere()` { #mvcmodelcriteriainterface-notinwhere }

```php
public function notInWhere(
    string $expr,
    array $values
): CriteriaInterface;
```

Appends a NOT IN condition to the current conditions

```php
$criteria->notInWhere("id", [1, 2, 3]);
```

#### `orWhere()` { #mvcmodelcriteriainterface-orwhere }

```php
public function orWhere(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
): CriteriaInterface;
```

Appends a condition to the current conditions using an OR operator

#### `orderBy()` { #mvcmodelcriteriainterface-orderby }

```php
public function orderBy( string $orderColumns ): CriteriaInterface;
```

Adds the order-by parameter to the criteria

#### `rightJoin()` { #mvcmodelcriteriainterface-rightjoin }

```php
public function rightJoin(
    string $model,
    mixed $conditions = null,
    mixed $alias = null
): CriteriaInterface;
```

Adds a RIGHT join to the query

```php
$criteria->rightJoin(
    Robots::class,
    "r.id = RobotsParts.robots_id",
    "r"
);
```

#### `setModelName()` { #mvcmodelcriteriainterface-setmodelname }

```php
public function setModelName( string $modelName ): CriteriaInterface;
```

Set a model on which the query will be executed

#### `sharedLock()` { #mvcmodelcriteriainterface-sharedlock }

```php
public function sharedLock( bool $sharedLock = true ): CriteriaInterface;
```

Sets the "shared_lock" parameter to the criteria

#### `where()` { #mvcmodelcriteriainterface-where }

```php
public function where(
    string $conditions,
    mixed $bindParams = null,
    mixed $bindTypes = null
): CriteriaInterface;
```

Sets the conditions parameter in the criteria


## Mvc\Model\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exception.zep){ .src-btn }

Phalcon\Mvc\Model\Exception

Exceptions thrown in Phalcon\Mvc\Model\* classes will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Mvc\Model\Exception`**
        - [`Phalcon\Mvc\Model\Behavior\Exceptions\MissingRequiredOption`](#mvcmodelbehaviorexceptionsmissingrequiredoption)
        - [`Phalcon\Mvc\Model\Exceptions\BelongsToRequiresObject`](#mvcmodelexceptionsbelongstorequiresobject)
        - [`Phalcon\Mvc\Model\Exceptions\BindTypeNotDefined`](#mvcmodelexceptionsbindtypenotdefined)
        - [`Phalcon\Mvc\Model\Exceptions\CannotResolveAttribute`](#mvcmodelexceptionscannotresolveattribute)
        - [`Phalcon\Mvc\Model\Exceptions\ColumnNotInMap`](#mvcmodelexceptionscolumnnotinmap)
        - [`Phalcon\Mvc\Model\Exceptions\ColumnNotInTableColumns`](#mvcmodelexceptionscolumnnotintablecolumns)
        - [`Phalcon\Mvc\Model\Exceptions\ColumnNotInTableMap`](#mvcmodelexceptionscolumnnotintablemap)
        - [`Phalcon\Mvc\Model\Exceptions\CorruptColumnType`](#mvcmodelexceptionscorruptcolumntype)
        - [`Phalcon\Mvc\Model\Exceptions\CursorIsImmutable`](#mvcmodelexceptionscursorisimmutable)
        - [`Phalcon\Mvc\Model\Exceptions\DataTypeNotDefined`](#mvcmodelexceptionsdatatypenotdefined)
        - [`Phalcon\Mvc\Model\Exceptions\HandlerMustImplementBindable`](#mvcmodelexceptionshandlermustimplementbindable)
        - [`Phalcon\Mvc\Model\Exceptions\IdentityNotInColumnMap`](#mvcmodelexceptionsidentitynotincolumnmap)
        - [`Phalcon\Mvc\Model\Exceptions\IdentityNotInTableColumns`](#mvcmodelexceptionsidentitynotintablecolumns)
        - [`Phalcon\Mvc\Model\Exceptions\IndexNotInCursor`](#mvcmodelexceptionsindexnotincursor)
        - [`Phalcon\Mvc\Model\Exceptions\IndexNotInRow`](#mvcmodelexceptionsindexnotinrow)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidConnectionService`](#mvcmodelexceptionsinvalidconnectionservice)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidContainer`](#mvcmodelexceptionsinvalidcontainer)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidDumpResultKey`](#mvcmodelexceptionsinvaliddumpresultkey)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidFindParameters`](#mvcmodelexceptionsinvalidfindparameters)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidGetModelNameReturn`](#mvcmodelexceptionsinvalidgetmodelnamereturn)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidModelName`](#mvcmodelexceptionsinvalidmodelname)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidModelsManagerService`](#mvcmodelexceptionsinvalidmodelsmanagerservice)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidModelsMetadataService`](#mvcmodelexceptionsinvalidmodelsmetadataservice)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidResultsetCacheService`](#mvcmodelexceptionsinvalidresultsetcacheservice)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidReturnedRecord`](#mvcmodelexceptionsinvalidreturnedrecord)
        - [`Phalcon\Mvc\Model\Exceptions\InvalidSerializationData`](#mvcmodelexceptionsinvalidserializationdata)
        - [`Phalcon\Mvc\Model\Exceptions\ManagerOrmServicesUnavailable`](#mvcmodelexceptionsmanagerormservicesunavailable)
        - [`Phalcon\Mvc\Model\Exceptions\MethodNotFound`](#mvcmodelexceptionsmethodnotfound)
        - [`Phalcon\Mvc\Model\Exceptions\MissingMethodName`](#mvcmodelexceptionsmissingmethodname)
        - [`Phalcon\Mvc\Model\Exceptions\MissingModelClassName`](#mvcmodelexceptionsmissingmodelclassname)
        - [`Phalcon\Mvc\Model\Exceptions\ModelCouldNotLoad`](#mvcmodelexceptionsmodelcouldnotload)
        - [`Phalcon\Mvc\Model\Exceptions\ModelOrmServicesUnavailable`](#mvcmodelexceptionsmodelormservicesunavailable)
        - [`Phalcon\Mvc\Model\Exceptions\PrimaryKeyAttributeNotSet`](#mvcmodelexceptionsprimarykeyattributenotset)
        - [`Phalcon\Mvc\Model\Exceptions\PrimaryKeyRequired`](#mvcmodelexceptionsprimarykeyrequired)
        - [`Phalcon\Mvc\Model\Exceptions\PropertyNotAccessible`](#mvcmodelexceptionspropertynotaccessible)
        - [`Phalcon\Mvc\Model\Exceptions\RecordCannotRefresh`](#mvcmodelexceptionsrecordcannotrefresh)
        - [`Phalcon\Mvc\Model\Exceptions\RecordNotPersisted`](#mvcmodelexceptionsrecordnotpersisted)
        - [`Phalcon\Mvc\Model\Exceptions\ReferencedFieldsMismatch`](#mvcmodelexceptionsreferencedfieldsmismatch)
        - [`Phalcon\Mvc\Model\Exceptions\RelationAliasMustBeString`](#mvcmodelexceptionsrelationaliasmustbestring)
        - [`Phalcon\Mvc\Model\Exceptions\RelationNotDefined`](#mvcmodelexceptionsrelationnotdefined)
        - [`Phalcon\Mvc\Model\Exceptions\RelationRequiresObjectOrArray`](#mvcmodelexceptionsrelationrequiresobjectorarray)
        - [`Phalcon\Mvc\Model\Exceptions\ResultsetColumnNotInMap`](#mvcmodelexceptionsresultsetcolumnnotinmap)
        - [`Phalcon\Mvc\Model\Exceptions\RowIsImmutable`](#mvcmodelexceptionsrowisimmutable)
        - [`Phalcon\Mvc\Model\Exceptions\SnapshotsDisabled`](#mvcmodelexceptionssnapshotsdisabled)
        - [`Phalcon\Mvc\Model\Exceptions\StaticMethodRequiresOneArgument`](#mvcmodelexceptionsstaticmethodrequiresoneargument)
        - [`Phalcon\Mvc\Model\Exceptions\UnknownRelationType`](#mvcmodelexceptionsunknownrelationtype)
        - [`Phalcon\Mvc\Model\Exceptions\UpdateSnapshotDisabled`](#mvcmodelexceptionsupdatesnapshotdisabled)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\CannotObtainTableColumns`](#mvcmodelmetadataexceptionscannotobtaintablecolumns)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\ColumnMapNotArray`](#mvcmodelmetadataexceptionscolumnmapnotarray)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\ContainerRequired`](#mvcmodelmetadataexceptionscontainerrequired)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\CorruptedMetaData`](#mvcmodelmetadataexceptionscorruptedmetadata)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\InvalidContainer`](#mvcmodelmetadataexceptionsinvalidcontainer)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\InvalidMetaDataForModel`](#mvcmodelmetadataexceptionsinvalidmetadataformodel)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\MetaDataDirectoryNotWritable`](#mvcmodelmetadataexceptionsmetadatadirectorynotwritable)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\MetaDataStrategyFailed`](#mvcmodelmetadataexceptionsmetadatastrategyfailed)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\NoAnnotationsForClass`](#mvcmodelmetadataexceptionsnoannotationsforclass)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\NoPropertyAnnotationsForClass`](#mvcmodelmetadataexceptionsnopropertyannotationsforclass)
        - [`Phalcon\Mvc\Model\MetaData\Exceptions\TableNotInDatabase`](#mvcmodelmetadataexceptionstablenotindatabase)
        - [`Phalcon\Mvc\Model\Query\Exceptions\AmbiguousColumn`](#mvcmodelqueryexceptionsambiguouscolumn)
        - [`Phalcon\Mvc\Model\Query\Exceptions\AmbiguousJoinRelation`](#mvcmodelqueryexceptionsambiguousjoinrelation)
        - [`Phalcon\Mvc\Model\Query\Exceptions\BindParameterNotInPlaceholders`](#mvcmodelqueryexceptionsbindparameternotinplaceholders)
        - [`Phalcon\Mvc\Model\Query\Exceptions\BindTypeRequiresArray`](#mvcmodelqueryexceptionsbindtyperequiresarray)
        - [`Phalcon\Mvc\Model\Query\Exceptions\BindValueRequired`](#mvcmodelqueryexceptionsbindvaluerequired)
        - [`Phalcon\Mvc\Model\Query\Exceptions\Builder\BuilderColumnNotInMap`](#mvcmodelqueryexceptionsbuilderbuildercolumnnotinmap)
        - [`Phalcon\Mvc\Model\Query\Exceptions\Builder\BuilderConditionInvalid`](#mvcmodelqueryexceptionsbuilderbuilderconditioninvalid)
        - [`Phalcon\Mvc\Model\Query\Exceptions\Builder\ModelRequired`](#mvcmodelqueryexceptionsbuildermodelrequired)
        - [`Phalcon\Mvc\Model\Query\Exceptions\Builder\NoPrimaryKey`](#mvcmodelqueryexceptionsbuildernoprimarykey)
        - [`Phalcon\Mvc\Model\Query\Exceptions\Builder\OperatorNotAvailable`](#mvcmodelqueryexceptionsbuilderoperatornotavailable)
        - [`Phalcon\Mvc\Model\Query\Exceptions\ColumnNotInDomain`](#mvcmodelqueryexceptionscolumnnotindomain)
        - [`Phalcon\Mvc\Model\Query\Exceptions\ColumnNotInSelectedModels`](#mvcmodelqueryexceptionscolumnnotinselectedmodels)
        - [`Phalcon\Mvc\Model\Query\Exceptions\CorruptedAst`](#mvcmodelqueryexceptionscorruptedast)
        - [`Phalcon\Mvc\Model\Query\Exceptions\CorruptedDeleteAst`](#mvcmodelqueryexceptionscorrupteddeleteast)
        - [`Phalcon\Mvc\Model\Query\Exceptions\CorruptedInsertAst`](#mvcmodelqueryexceptionscorruptedinsertast)
        - [`Phalcon\Mvc\Model\Query\Exceptions\CorruptedSelectAst`](#mvcmodelqueryexceptionscorruptedselectast)
        - [`Phalcon\Mvc\Model\Query\Exceptions\CorruptedUpdateAst`](#mvcmodelqueryexceptionscorruptedupdateast)
        - [`Phalcon\Mvc\Model\Query\Exceptions\DeleteMultipleNotSupported`](#mvcmodelqueryexceptionsdeletemultiplenotsupported)
        - [`Phalcon\Mvc\Model\Query\Exceptions\DuplicateAlias`](#mvcmodelqueryexceptionsduplicatealias)
        - [`Phalcon\Mvc\Model\Query\Exceptions\EmptyArrayPlaceholderValue`](#mvcmodelqueryexceptionsemptyarrayplaceholdervalue)
        - [`Phalcon\Mvc\Model\Query\Exceptions\InsertColumnCountMismatch`](#mvcmodelqueryexceptionsinsertcolumncountmismatch)
        - [`Phalcon\Mvc\Model\Query\Exceptions\InvalidCachedResultset`](#mvcmodelqueryexceptionsinvalidcachedresultset)
        - [`Phalcon\Mvc\Model\Query\Exceptions\InvalidCachingOptions`](#mvcmodelqueryexceptionsinvalidcachingoptions)
        - [`Phalcon\Mvc\Model\Query\Exceptions\InvalidColumnDefinition`](#mvcmodelqueryexceptionsinvalidcolumndefinition)
        - [`Phalcon\Mvc\Model\Query\Exceptions\InvalidInjectedManager`](#mvcmodelqueryexceptionsinvalidinjectedmanager)
        - [`Phalcon\Mvc\Model\Query\Exceptions\InvalidInjectedMetadata`](#mvcmodelqueryexceptionsinvalidinjectedmetadata)
        - [`Phalcon\Mvc\Model\Query\Exceptions\InvalidQueryCacheService`](#mvcmodelqueryexceptionsinvalidquerycacheservice)
        - [`Phalcon\Mvc\Model\Query\Exceptions\InvalidResultsetClass`](#mvcmodelqueryexceptionsinvalidresultsetclass)
        - [`Phalcon\Mvc\Model\Query\Exceptions\JoinAliasAlreadyUsed`](#mvcmodelqueryexceptionsjoinaliasalreadyused)
        - [`Phalcon\Mvc\Model\Query\Exceptions\JoinFieldCountMismatch`](#mvcmodelqueryexceptionsjoinfieldcountmismatch)
        - [`Phalcon\Mvc\Model\Query\Exceptions\MissingCacheKey`](#mvcmodelqueryexceptionsmissingcachekey)
        - [`Phalcon\Mvc\Model\Query\Exceptions\MissingMetaData`](#mvcmodelqueryexceptionsmissingmetadata)
        - [`Phalcon\Mvc\Model\Query\Exceptions\MissingModelAttribute`](#mvcmodelqueryexceptionsmissingmodelattribute)
        - [`Phalcon\Mvc\Model\Query\Exceptions\MissingModelsManager`](#mvcmodelqueryexceptionsmissingmodelsmanager)
        - [`Phalcon\Mvc\Model\Query\Exceptions\MixedDatabaseSystems`](#mvcmodelqueryexceptionsmixeddatabasesystems)
        - [`Phalcon\Mvc\Model\Query\Exceptions\ModelSourceNotFound`](#mvcmodelqueryexceptionsmodelsourcenotfound)
        - [`Phalcon\Mvc\Model\Query\Exceptions\ModelsListNotLoaded`](#mvcmodelqueryexceptionsmodelslistnotloaded)
        - [`Phalcon\Mvc\Model\Query\Exceptions\MultipleSqlStatementsNotSupported`](#mvcmodelqueryexceptionsmultiplesqlstatementsnotsupported)
        - [`Phalcon\Mvc\Model\Query\Exceptions\NoModelForAlias`](#mvcmodelqueryexceptionsnomodelforalias)
        - [`Phalcon\Mvc\Model\Query\Exceptions\PhqlColumnNotInMap`](#mvcmodelqueryexceptionsphqlcolumnnotinmap)
        - [`Phalcon\Mvc\Model\Query\Exceptions\ReadConnectionMissing`](#mvcmodelqueryexceptionsreadconnectionmissing)
        - [`Phalcon\Mvc\Model\Query\Exceptions\RelationshipNotFound`](#mvcmodelqueryexceptionsrelationshipnotfound)
        - [`Phalcon\Mvc\Model\Query\Exceptions\ResultsetClassNotFound`](#mvcmodelqueryexceptionsresultsetclassnotfound)
        - [`Phalcon\Mvc\Model\Query\Exceptions\ResultsetNonCacheable`](#mvcmodelqueryexceptionsresultsetnoncacheable)
        - [`Phalcon\Mvc\Model\Query\Exceptions\UnknownBindType`](#mvcmodelqueryexceptionsunknownbindtype)
        - [`Phalcon\Mvc\Model\Query\Exceptions\UnknownColumnType`](#mvcmodelqueryexceptionsunknowncolumntype)
        - [`Phalcon\Mvc\Model\Query\Exceptions\UnknownJoinType`](#mvcmodelqueryexceptionsunknownjointype)
        - [`Phalcon\Mvc\Model\Query\Exceptions\UnknownModelOrAlias`](#mvcmodelqueryexceptionsunknownmodeloralias)
        - [`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpression`](#mvcmodelqueryexceptionsunknownphqlexpression)
        - [`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpressionType`](#mvcmodelqueryexceptionsunknownphqlexpressiontype)
        - [`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlStatement`](#mvcmodelqueryexceptionsunknownphqlstatement)
        - [`Phalcon\Mvc\Model\Query\Exceptions\UpdateMultipleNotSupported`](#mvcmodelqueryexceptionsupdatemultiplenotsupported)
        - [`Phalcon\Mvc\Model\Query\Exceptions\WriteConnectionMissing`](#mvcmodelqueryexceptionswriteconnectionmissing)
        - [`Phalcon\Mvc\Model\Transaction\Exception`](#mvcmodeltransactionexception)
        - [`Phalcon\Mvc\Model\ValidationFailed`](#mvcmodelvalidationfailed)

</div>


## Mvc\Model\Exceptions\BelongsToRequiresObject

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/BelongsToRequiresObject.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\BelongsToRequiresObject`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsbelongstorequiresobject-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $className,
    string $relationName
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsbelongstorequiresobject-__construct }

```php
public function __construct(
    string $className,
    string $relationName
);
```


## Mvc\Model\Exceptions\BindTypeNotDefined

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/BindTypeNotDefined.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\BindTypeNotDefined`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsbindtypenotdefined-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $column,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsbindtypenotdefined-__construct }

```php
public function __construct(
    string $column,
    string $className
);
```


## Mvc\Model\Exceptions\CannotResolveAttribute

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/CannotResolveAttribute.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\CannotResolveAttribute`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionscannotresolveattribute-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $attribute,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionscannotresolveattribute-__construct }

```php
public function __construct(
    string $attribute,
    string $className
);
```


## Mvc\Model\Exceptions\ColumnNotInMap

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/ColumnNotInMap.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\ColumnNotInMap`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionscolumnnotinmap-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $column,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionscolumnnotinmap-__construct }

```php
public function __construct(
    string $column,
    string $className
);
```


## Mvc\Model\Exceptions\ColumnNotInTableColumns

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/ColumnNotInTableColumns.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\ColumnNotInTableColumns`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionscolumnnotintablecolumns-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $column,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionscolumnnotintablecolumns-__construct }

```php
public function __construct(
    string $column,
    string $className
);
```


## Mvc\Model\Exceptions\ColumnNotInTableMap

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/ColumnNotInTableMap.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\ColumnNotInTableMap`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionscolumnnotintablemap-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $column,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionscolumnnotintablemap-__construct }

```php
public function __construct(
    string $column,
    string $className
);
```


## Mvc\Model\Exceptions\CorruptColumnType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/CorruptColumnType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\CorruptColumnType`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionscorruptcolumntype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionscorruptcolumntype-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\CursorIsImmutable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/CursorIsImmutable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\CursorIsImmutable`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionscursorisimmutable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionscursorisimmutable-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\DataTypeNotDefined

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/DataTypeNotDefined.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\DataTypeNotDefined`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsdatatypenotdefined-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $column,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsdatatypenotdefined-__construct }

```php
public function __construct(
    string $column,
    string $className
);
```


## Mvc\Model\Exceptions\HandlerMustImplementBindable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/HandlerMustImplementBindable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\HandlerMustImplementBindable`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionshandlermustimplementbindable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionshandlermustimplementbindable-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\IdentityNotInColumnMap

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/IdentityNotInColumnMap.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\IdentityNotInColumnMap`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsidentitynotincolumnmap-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $identityField,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsidentitynotincolumnmap-__construct }

```php
public function __construct(
    string $identityField,
    string $className
);
```


## Mvc\Model\Exceptions\IdentityNotInTableColumns

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/IdentityNotInTableColumns.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\IdentityNotInTableColumns`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsidentitynotintablecolumns-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $identityField,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsidentitynotintablecolumns-__construct }

```php
public function __construct(
    string $identityField,
    string $className
);
```


## Mvc\Model\Exceptions\IndexNotInCursor

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/IndexNotInCursor.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\IndexNotInCursor`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsindexnotincursor-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsindexnotincursor-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\IndexNotInRow

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/IndexNotInRow.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\IndexNotInRow`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsindexnotinrow-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsindexnotinrow-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\InvalidConnectionService

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidConnectionService.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidConnectionService`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvalidconnectionservice-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvalidconnectionservice-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\InvalidContainer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidContainer.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidContainer`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvalidcontainer-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvalidcontainer-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\InvalidDumpResultKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidDumpResultKey.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidDumpResultKey`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvaliddumpresultkey-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvaliddumpresultkey-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Exceptions\InvalidFindParameters

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidFindParameters.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidFindParameters`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvalidfindparameters-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvalidfindparameters-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Exceptions\InvalidGetModelNameReturn

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidGetModelNameReturn.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidGetModelNameReturn`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvalidgetmodelnamereturn-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvalidgetmodelnamereturn-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\InvalidModelName

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidModelName.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidModelName`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvalidmodelname-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvalidmodelname-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\InvalidModelsManagerService

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidModelsManagerService.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidModelsManagerService`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvalidmodelsmanagerservice-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvalidmodelsmanagerservice-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Exceptions\InvalidModelsMetadataService

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidModelsMetadataService.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidModelsMetadataService`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvalidmodelsmetadataservice-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvalidmodelsmetadataservice-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Exceptions\InvalidResultsetCacheService

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidResultsetCacheService.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidResultsetCacheService`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvalidresultsetcacheservice-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvalidresultsetcacheservice-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\InvalidReturnedRecord

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidReturnedRecord.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidReturnedRecord`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvalidreturnedrecord-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvalidreturnedrecord-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\InvalidSerializationData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/InvalidSerializationData.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\InvalidSerializationData`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsinvalidserializationdata-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsinvalidserializationdata-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\ManagerOrmServicesUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/ManagerOrmServicesUnavailable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\ManagerOrmServicesUnavailable`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsmanagerormservicesunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsmanagerormservicesunavailable-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\MethodNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/MethodNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\MethodNotFound`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsmethodnotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $method,
    string $modelName
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsmethodnotfound-__construct }

```php
public function __construct(
    string $method,
    string $modelName
);
```


## Mvc\Model\Exceptions\MissingMethodName

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/MissingMethodName.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\MissingMethodName`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsmissingmethodname-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsmissingmethodname-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\MissingModelClassName

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/MissingModelClassName.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\MissingModelClassName`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsmissingmodelclassname-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $paramKey )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsmissingmodelclassname-__construct }

```php
public function __construct( string $paramKey );
```


## Mvc\Model\Exceptions\ModelCouldNotLoad

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/ModelCouldNotLoad.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\ModelCouldNotLoad`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsmodelcouldnotload-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $modelName )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsmodelcouldnotload-__construct }

```php
public function __construct( string $modelName );
```


## Mvc\Model\Exceptions\ModelOrmServicesUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/ModelOrmServicesUnavailable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\ModelOrmServicesUnavailable`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsmodelormservicesunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsmodelormservicesunavailable-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Exceptions\PrimaryKeyAttributeNotSet

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/PrimaryKeyAttributeNotSet.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\PrimaryKeyAttributeNotSet`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsprimarykeyattributenotset-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $attribute,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsprimarykeyattributenotset-__construct }

```php
public function __construct(
    string $attribute,
    string $className
);
```


## Mvc\Model\Exceptions\PrimaryKeyRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/PrimaryKeyRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\PrimaryKeyRequired`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsprimarykeyrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsprimarykeyrequired-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Exceptions\PropertyNotAccessible

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/PropertyNotAccessible.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\PropertyNotAccessible`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionspropertynotaccessible-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $property,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionspropertynotaccessible-__construct }

```php
public function __construct(
    string $property,
    string $className
);
```


## Mvc\Model\Exceptions\RecordCannotRefresh

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/RecordCannotRefresh.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\RecordCannotRefresh`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsrecordcannotrefresh-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsrecordcannotrefresh-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Exceptions\RecordNotPersisted

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/RecordNotPersisted.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\RecordNotPersisted`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsrecordnotpersisted-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsrecordnotpersisted-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Exceptions\ReferencedFieldsMismatch

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/ReferencedFieldsMismatch.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\ReferencedFieldsMismatch`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsreferencedfieldsmismatch-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $relationType,
    string $entityName,
    string $referencedEntity
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsreferencedfieldsmismatch-__construct }

```php
public function __construct(
    string $relationType,
    string $entityName,
    string $referencedEntity
);
```


## Mvc\Model\Exceptions\RelationAliasMustBeString

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/RelationAliasMustBeString.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\RelationAliasMustBeString`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsrelationaliasmustbestring-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $relationType,
    string $entityName,
    string $referencedEntity
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsrelationaliasmustbestring-__construct }

```php
public function __construct(
    string $relationType,
    string $entityName,
    string $referencedEntity
);
```


## Mvc\Model\Exceptions\RelationNotDefined

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/RelationNotDefined.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\RelationNotDefined`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsrelationnotdefined-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $className,
    string $alias
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsrelationnotdefined-__construct }

```php
public function __construct(
    string $className,
    string $alias
);
```


## Mvc\Model\Exceptions\RelationRequiresObjectOrArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/RelationRequiresObjectOrArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\RelationRequiresObjectOrArray`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsrelationrequiresobjectorarray-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $className,
    string $relationName
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsrelationrequiresobjectorarray-__construct }

```php
public function __construct(
    string $className,
    string $relationName
);
```


## Mvc\Model\Exceptions\ResultsetColumnNotInMap

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/ResultsetColumnNotInMap.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\ResultsetColumnNotInMap`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsresultsetcolumnnotinmap-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $key )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsresultsetcolumnnotinmap-__construct }

```php
public function __construct( string $key );
```


## Mvc\Model\Exceptions\RowIsImmutable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/RowIsImmutable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\RowIsImmutable`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsrowisimmutable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsrowisimmutable-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\SnapshotsDisabled

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/SnapshotsDisabled.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\SnapshotsDisabled`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionssnapshotsdisabled-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionssnapshotsdisabled-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Exceptions\StaticMethodRequiresOneArgument

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/StaticMethodRequiresOneArgument.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\StaticMethodRequiresOneArgument`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsstaticmethodrequiresoneargument-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $method,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsstaticmethodrequiresoneargument-__construct }

```php
public function __construct(
    string $method,
    string $className
);
```


## Mvc\Model\Exceptions\UnknownRelationType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/UnknownRelationType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\UnknownRelationType`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsunknownrelationtype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsunknownrelationtype-__construct }

```php
public function __construct();
```


## Mvc\Model\Exceptions\UpdateSnapshotDisabled

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Exceptions/UpdateSnapshotDisabled.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Exceptions\UpdateSnapshotDisabled`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelexceptionsupdatesnapshotdisabled-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelexceptionsupdatesnapshotdisabled-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Manager

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Manager.zep){ .src-btn }

Phalcon\Mvc\Model\Manager

This components controls the initialization of models, keeping record of
relations between the different models of the application.

A ModelsManager is injected to a model via a Dependency Injector/Services
Container such as Phalcon\Di\Di.

```php
use Phalcon\Di\Di;
use Phalcon\Mvc\Model\Manager as ModelsManager;

$di = new Di();

$di->set(
    "modelsManager",
    function() {
        return new ModelsManager();
    }
);

$robot = new Robots($di);
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Manager`** — implements [`Phalcon\Mvc\Model\ManagerInterface`](#mvcmodelmanagerinterface), [`Phalcon\Di\InjectionAwareInterface`](phalcon_di.md#diinjectionawareinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)

</div>

__Uses__ `Phalcon\Contracts\Mvc\Model\Relation\CacheKeyProvider` · `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Exceptions\InvalidConnectionService` · `Phalcon\Mvc\Model\Exceptions\ManagerOrmServicesUnavailable` · `Phalcon\Mvc\Model\Exceptions\ModelCouldNotLoad` · `Phalcon\Mvc\Model\Exceptions\ReferencedFieldsMismatch` · `Phalcon\Mvc\Model\Exceptions\RelationAliasMustBeString` · `Phalcon\Mvc\Model\Exceptions\UnknownRelationType` · `Phalcon\Mvc\Model\Query\Builder` · `Phalcon\Mvc\Model\Query\BuilderInterface` · `Phalcon\Mvc\Model\Query\StatusInterface` · `Phalcon\Support\Settings` · `ReflectionClass` · `ReflectionProperty`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmanager-__destruct">
<code class="vis vis-public">public</code>
<code class="sig">__destruct()</code>
<span class="desc">Destroys the current PHQL cache</span>
</a>
<a class="api-item" href="#mvcmodelmanager-addbehavior">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">addBehavior(
    ModelInterface $model,
    BehaviorInterface $behavior
)</code>
<span class="desc">Binds a behavior to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-addbelongsto">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface</code>
<code class="sig">addBelongsTo(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup a relation reverse many to one between two models</span>
</a>
<a class="api-item" href="#mvcmodelmanager-addhasmany">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface</code>
<code class="sig">addHasMany(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup a relation 1-n between two models</span>
</a>
<a class="api-item" href="#mvcmodelmanager-addhasmanytomany">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface</code>
<code class="sig">addHasManyToMany(
    ModelInterface $model,
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setups a relation n-m between two models</span>
</a>
<a class="api-item" href="#mvcmodelmanager-addhasone">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface</code>
<code class="sig">addHasOne(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup a 1-1 relation between two models</span>
</a>
<a class="api-item" href="#mvcmodelmanager-addhasonethrough">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface</code>
<code class="sig">addHasOneThrough(
    ModelInterface $model,
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setups a relation 1-1 between two models using an intermediate model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-clearreusableobjects">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">clearReusableObjects()</code>
<span class="desc">Clears the internal reusable list</span>
</a>
<a class="api-item" href="#mvcmodelmanager-createbuilder">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">createBuilder( mixed $params = null )</code>
<span class="desc">Creates a Phalcon\Mvc\Model\Query\Builder</span>
</a>
<a class="api-item" href="#mvcmodelmanager-createquery">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">createQuery( string $phql )</code>
<span class="desc">Creates a Phalcon\Mvc\Model\Query without execute it</span>
</a>
<a class="api-item" href="#mvcmodelmanager-executequery">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">executeQuery(
    string $phql,
    mixed $placeholders = null,
    mixed $types = null
)</code>
<span class="desc">Creates a Phalcon\Mvc\Model\Query and execute it</span>
</a>
<a class="api-item" href="#mvcmodelmanager-existsbelongsto">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">existsBelongsTo(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a belongsTo relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-existshasmany">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">existsHasMany(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasMany relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-existshasmanytomany">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">existsHasManyToMany(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasManyToMany relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-existshasone">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">existsHasOne(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasOne relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-existshasonethrough">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">existsHasOneThrough(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasOneThrough relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getbelongsto">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|array</code>
<code class="sig">getBelongsTo( ModelInterface $model )</code>
<span class="desc">Gets all the belongsTo relations defined in a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getbelongstorecords">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface|bool</code>
<code class="sig">getBelongsToRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
)</code>
<span class="desc">Gets belongsTo related records from a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getbuilder">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface|null</code>
<code class="sig">getBuilder()</code>
<span class="desc">Returns the newly created Phalcon\Mvc\Model\Query\Builder or null</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getConnectionService(
    ModelInterface $model,
    array $connectionServices
)</code>
<span class="desc">Returns the connection service name used to read or write data related to</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getcustomeventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">EventsManagerInterface|null</code>
<code class="sig">getCustomEventsManager( ModelInterface $model )</code>
<span class="desc">Returns a custom events manager related to a model or null if there is</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Returns the DependencyInjector container</span>
</a>
<a class="api-item" href="#mvcmodelmanager-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">EventsManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#mvcmodelmanager-gethasmany">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|array</code>
<code class="sig">getHasMany( ModelInterface $model )</code>
<span class="desc">Gets hasMany relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-gethasmanyrecords">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface|bool</code>
<code class="sig">getHasManyRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
)</code>
<span class="desc">Gets hasMany related records from a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-gethasmanytomany">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|array</code>
<code class="sig">getHasManyToMany( ModelInterface $model )</code>
<span class="desc">Gets hasManyToMany relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-gethasone">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getHasOne( ModelInterface $model )</code>
<span class="desc">Gets hasOne relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-gethasoneandhasmany">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]</code>
<code class="sig">getHasOneAndHasMany( ModelInterface $model )</code>
<span class="desc">Gets hasOne relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-gethasonerecords">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|bool</code>
<code class="sig">getHasOneRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
)</code>
<span class="desc">Gets belongsTo related records from a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-gethasonethrough">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|array</code>
<code class="sig">getHasOneThrough( ModelInterface $model )</code>
<span class="desc">Gets hasOneThrough relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getlastinitialized">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|null</code>
<code class="sig">getLastInitialized()</code>
<span class="desc">Get last initialized model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getlastquery">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">getLastQuery()</code>
<span class="desc">Returns the last query created or executed in the models manager</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getmodelprefix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getModelPrefix()</code>
<span class="desc">Returns the prefix for all model sources.</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getmodelschema">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getModelSchema( ModelInterface $model )</code>
<span class="desc">Returns the mapped schema for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getmodelsource">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getModelSource( ModelInterface $model )</code>
<span class="desc">Returns the mapped source for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getreadconnection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getReadConnection( ModelInterface $model )</code>
<span class="desc">Returns the connection to read data related to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getreadconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getReadConnectionService( ModelInterface $model )</code>
<span class="desc">Returns the connection service name used to read data related to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getrelationbyalias">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface|bool</code>
<code class="sig">getRelationByAlias(
    string $modelName,
    string $alias
)</code>
<span class="desc">Returns a relation by its alias</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getrelationrecords">
<code class="vis vis-public">public</code>
<code class="sig">getRelationRecords(
    RelationInterface $relation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
)</code>
<span class="desc">Helper method to query records based on a relation definition</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getrelations">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]</code>
<code class="sig">getRelations( string $modelName )</code>
<span class="desc">Query all the relationships defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getrelationsbetween">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|bool</code>
<code class="sig">getRelationsBetween(
    string $first,
    string $second
)</code>
<span class="desc">Query the first relationship defined between two models</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getreusablerecords">
<code class="vis vis-public">public</code>
<code class="sig">getReusableRecords(
    string $modelName,
    string $key
)</code>
<span class="desc">Returns a reusable object from the internal list</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getwriteconnection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getWriteConnection( ModelInterface $model )</code>
<span class="desc">Returns the connection to write data related to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getwriteconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getWriteConnectionService( ModelInterface $model )</code>
<span class="desc">Returns the connection service name used to write data related to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-hasbelongsto">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasBelongsTo(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a belongsTo relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-hashasmany">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasHasMany(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasMany relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-hashasmanytomany">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasHasManyToMany(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasManyToMany relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-hashasone">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasHasOne(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasOne relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-hashasonethrough">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasHasOneThrough(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasOneThrough relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-initialize">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">initialize( ModelInterface $model )</code>
<span class="desc">Initializes a model in the model manager</span>
</a>
<a class="api-item" href="#mvcmodelmanager-isinitialized">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isInitialized( string $className )</code>
<span class="desc">Check whether a model is already initialized</span>
</a>
<a class="api-item" href="#mvcmodelmanager-iskeepingsnapshots">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isKeepingSnapshots( ModelInterface $model )</code>
<span class="desc">Checks if a model is keeping snapshots for the queried records</span>
</a>
<a class="api-item" href="#mvcmodelmanager-isusingdynamicupdate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isUsingDynamicUpdate( ModelInterface $model )</code>
<span class="desc">Checks if a model is using dynamic update instead of all-field update</span>
</a>
<a class="api-item" href="#mvcmodelmanager-isvisiblemodelproperty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isVisibleModelProperty(
    ModelInterface $model,
    string $property
)</code>
<span class="desc">Check whether a model property is declared as public.</span>
</a>
<a class="api-item" href="#mvcmodelmanager-keepsnapshots">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">keepSnapshots(
    ModelInterface $model,
    bool $keepSnapshots
)</code>
<span class="desc">Sets if a model must keep snapshots</span>
</a>
<a class="api-item" href="#mvcmodelmanager-load">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">load( string $modelName )</code>
<span class="desc">Loads a model throwing an exception if it does not exist</span>
</a>
<a class="api-item" href="#mvcmodelmanager-missingmethod">
<code class="vis vis-public">public</code>
<code class="sig">missingMethod(
    ModelInterface $model,
    string $eventName,
    mixed $data
)</code>
<span class="desc">Dispatch an event to the listeners and behaviors</span>
</a>
<a class="api-item" href="#mvcmodelmanager-notifyevent">
<code class="vis vis-public">public</code>
<code class="sig">notifyEvent(
    string $eventName,
    ModelInterface $model
)</code>
<span class="desc">Receives events generated in the models and dispatches them to an</span>
</a>
<a class="api-item" href="#mvcmodelmanager-removebehavior">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">removeBehavior(
    ModelInterface $model,
    string $behaviorClass
)</code>
<span class="desc">Removes a behavior from a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-setconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setConnectionService(
    ModelInterface $model,
    string $connectionService
)</code>
<span class="desc">Sets both write and read connection service for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-setcustomeventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setCustomEventsManager(
    ModelInterface $model,
    EventsManagerInterface $eventsManager
)</code>
<span class="desc">Sets a custom events manager for a specific model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the DependencyInjector container</span>
</a>
<a class="api-item" href="#mvcmodelmanager-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( EventsManagerInterface $eventsManager )</code>
<span class="desc">Sets a global events manager</span>
</a>
<a class="api-item" href="#mvcmodelmanager-setmodelprefix">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setModelPrefix( string $prefix )</code>
<span class="desc">Sets the prefix for all model sources.</span>
</a>
<a class="api-item" href="#mvcmodelmanager-setmodelschema">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setModelSchema(
    ModelInterface $model,
    string $schema
)</code>
<span class="desc">Sets the mapped schema for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-setmodelsource">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setModelSource(
    ModelInterface $model,
    string $source
)</code>
<span class="desc">Sets the mapped source for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-setreadconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setReadConnectionService(
    ModelInterface $model,
    string $connectionService
)</code>
<span class="desc">Sets read connection service for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-setreusablerecords">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setReusableRecords(
    string $modelName,
    string $key,
    mixed $records
)</code>
<span class="desc">Stores a reusable record in the internal list</span>
</a>
<a class="api-item" href="#mvcmodelmanager-setwriteconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setWriteConnectionService(
    ModelInterface $model,
    string $connectionService
)</code>
<span class="desc">Sets write connection service for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-usedynamicupdate">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">useDynamicUpdate(
    ModelInterface $model,
    bool $dynamicUpdate
)</code>
<span class="desc">Sets if a model must use dynamic update instead of the all-field update</span>
</a>
<a class="api-item" href="#mvcmodelmanager-getconnection">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getConnection(
    ModelInterface $model,
    array $connectionServices
)</code>
<span class="desc">Returns the connection to read or write data related to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanager-mergefindparameters">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">mergeFindParameters(
    mixed $findParamsOne,
    mixed $findParamsTwo
)</code>
<span class="desc">Merge two arrays of find parameters</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$aliases = []` `array`

-   `protected`{ .vis-protected } `$behaviors = []` `array`

    Models' behaviors

-   `protected`{ .vis-protected } `$belongsTo = []` `array`

    Belongs to relations

-   `protected`{ .vis-protected } `$belongsToSingle = []` `array`

    All the relationships by model

-   `protected`{ .vis-protected } `$builder = null` `BuilderInterface|null`

-   `protected`{ .vis-protected } `$container = null` `DiInterface|null`

-   `protected`{ .vis-protected } `$customEventsManager = []` `array`

-   `protected`{ .vis-protected } `$dynamicUpdate = []` `array`

    Does the model use dynamic update, instead of updating all rows?

-   `protected`{ .vis-protected } `$eventsManager = null` `EventsManagerInterface|null`

-   `protected`{ .vis-protected } `$hasMany = []` `array`

    Has many relations

-   `protected`{ .vis-protected } `$hasManySingle = []` `array`

    Has many relations by model

-   `protected`{ .vis-protected } `$hasManyToMany = []` `array`

    Has many-Through relations

-   `protected`{ .vis-protected } `$hasManyToManySingle = []` `array`

    Has many-Through relations by model

-   `protected`{ .vis-protected } `$hasOne = []` `array`

    Has one relations

-   `protected`{ .vis-protected } `$hasOneSingle = []` `array`

    Has one relations by model

-   `protected`{ .vis-protected } `$hasOneThrough = []` `array`

    Has one through relations

-   `protected`{ .vis-protected } `$hasOneThroughSingle = []` `array`

    Has one through relations by model

-   `protected`{ .vis-protected } `$initialized = []` `array`

    Mark initialized models

-   `protected`{ .vis-protected } `$keepSnapshots = []` `array`

-   `protected`{ .vis-protected } `$lastInitialized = null` `ModelInterface|null`

    Last model initialized

-   `protected`{ .vis-protected } `$lastQuery = null` `QueryInterface|null`

    Last query created/executed

-   `protected`{ .vis-protected } `$modelVisibility = []` `array`

-   `protected`{ .vis-protected } `$prefix = ""` `string`

-   `protected`{ .vis-protected } `$readConnectionServices = []` `array`

-   `protected`{ .vis-protected } `$reusable = []` `array`

    Stores a list of reusable instances

-   `protected`{ .vis-protected } `$schemas = []` `array`

-   `protected`{ .vis-protected } `$sources = []` `array`

-   `protected`{ .vis-protected } `$writeConnectionServices = []` `array`

</div>

### Methods

<div class="api-group">Public · 70</div>

#### `__destruct()` { #mvcmodelmanager-__destruct }

```php
public function __destruct();
```

Destroys the current PHQL cache

#### `addBehavior()` { #mvcmodelmanager-addbehavior }

```php
public function addBehavior(
    ModelInterface $model,
    BehaviorInterface $behavior
): void;
```

Binds a behavior to a model

#### `addBelongsTo()` { #mvcmodelmanager-addbelongsto }

```php
public function addBelongsTo(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
): RelationInterface;
```

Setup a relation reverse many to one between two models

#### `addHasMany()` { #mvcmodelmanager-addhasmany }

```php
public function addHasMany(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
): RelationInterface;
```

Setup a relation 1-n between two models

#### `addHasManyToMany()` { #mvcmodelmanager-addhasmanytomany }

```php
public function addHasManyToMany(
    ModelInterface $model,
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
): RelationInterface;
```

Setups a relation n-m between two models

#### `addHasOne()` { #mvcmodelmanager-addhasone }

```php
public function addHasOne(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
): RelationInterface;
```

Setup a 1-1 relation between two models

#### `addHasOneThrough()` { #mvcmodelmanager-addhasonethrough }

```php
public function addHasOneThrough(
    ModelInterface $model,
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
): RelationInterface;
```

Setups a relation 1-1 between two models using an intermediate model

#### `clearReusableObjects()` { #mvcmodelmanager-clearreusableobjects }

```php
public function clearReusableObjects(): void;
```

Clears the internal reusable list

#### `createBuilder()` { #mvcmodelmanager-createbuilder }

```php
public function createBuilder( mixed $params = null ): BuilderInterface;
```

Creates a Phalcon\Mvc\Model\Query\Builder

#### `createQuery()` { #mvcmodelmanager-createquery }

```php
public function createQuery( string $phql ): QueryInterface;
```

Creates a Phalcon\Mvc\Model\Query without execute it

#### `executeQuery()` { #mvcmodelmanager-executequery }

```php
public function executeQuery(
    string $phql,
    mixed $placeholders = null,
    mixed $types = null
): mixed;
```

Creates a Phalcon\Mvc\Model\Query and execute it

```php
$model = new Robots();
$manager = $model->getModelsManager();

// \Phalcon\Mvc\Model\Resultset\Simple
$manager->executeQuery('SELECT * FROM Robots');

// \Phalcon\Mvc\Model\Resultset\Complex
$manager->executeQuery('SELECT COUNT(type) FROM Robots GROUP BY type');

// \Phalcon\Mvc\Model\Query\StatusInterface
$manager->executeQuery('INSERT INTO Robots (id) VALUES (1)');

// \Phalcon\Mvc\Model\Query\StatusInterface
$manager->executeQuery('UPDATE Robots SET id = 0 WHERE id = :id:', ['id' => 1]);

// \Phalcon\Mvc\Model\Query\StatusInterface
$manager->executeQuery('DELETE FROM Robots WHERE id = :id:', ['id' => 1]);
```

#### `existsBelongsTo()` { #mvcmodelmanager-existsbelongsto }

```php
public function existsBelongsTo(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a belongsTo relation with another model
@deprecated

#### `existsHasMany()` { #mvcmodelmanager-existshasmany }

```php
public function existsHasMany(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasMany relation with another model
@deprecated

#### `existsHasManyToMany()` { #mvcmodelmanager-existshasmanytomany }

```php
public function existsHasManyToMany(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasManyToMany relation with another model
@deprecated

#### `existsHasOne()` { #mvcmodelmanager-existshasone }

```php
public function existsHasOne(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasOne relation with another model
@deprecated

#### `existsHasOneThrough()` { #mvcmodelmanager-existshasonethrough }

```php
public function existsHasOneThrough(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasOneThrough relation with another model
@deprecated

#### `getBelongsTo()` { #mvcmodelmanager-getbelongsto }

```php
public function getBelongsTo( ModelInterface $model ): RelationInterface[]|array;
```

Gets all the belongsTo relations defined in a model

```php
$relations = $modelsManager->getBelongsTo(
    new Robots()
);
```

#### `getBelongsToRecords()` { #mvcmodelmanager-getbelongstorecords }

```php
public function getBelongsToRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
): ResultsetInterface|bool;
```

Gets belongsTo related records from a model

#### `getBuilder()` { #mvcmodelmanager-getbuilder }

```php
public function getBuilder(): BuilderInterface|null;
```

Returns the newly created Phalcon\Mvc\Model\Query\Builder or null

#### `getConnectionService()` { #mvcmodelmanager-getconnectionservice }

```php
public function getConnectionService(
    ModelInterface $model,
    array $connectionServices
): string;
```

Returns the connection service name used to read or write data related to
a model depending on the connection services

#### `getCustomEventsManager()` { #mvcmodelmanager-getcustomeventsmanager }

```php
public function getCustomEventsManager( ModelInterface $model ): EventsManagerInterface|null;
```

Returns a custom events manager related to a model or null if there is
no related events manager

#### `getDI()` { #mvcmodelmanager-getdi }

```php
public function getDI(): DiInterface;
```

Returns the DependencyInjector container

#### `getEventsManager()` { #mvcmodelmanager-geteventsmanager }

```php
public function getEventsManager(): EventsManagerInterface|null;
```

Returns the internal event manager

#### `getHasMany()` { #mvcmodelmanager-gethasmany }

```php
public function getHasMany( ModelInterface $model ): RelationInterface[]|array;
```

Gets hasMany relations defined on a model

#### `getHasManyRecords()` { #mvcmodelmanager-gethasmanyrecords }

```php
public function getHasManyRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
): ResultsetInterface|bool;
```

Gets hasMany related records from a model

#### `getHasManyToMany()` { #mvcmodelmanager-gethasmanytomany }

```php
public function getHasManyToMany( ModelInterface $model ): RelationInterface[]|array;
```

Gets hasManyToMany relations defined on a model

#### `getHasOne()` { #mvcmodelmanager-gethasone }

```php
public function getHasOne( ModelInterface $model ): array;
```

Gets hasOne relations defined on a model

#### `getHasOneAndHasMany()` { #mvcmodelmanager-gethasoneandhasmany }

```php
public function getHasOneAndHasMany( ModelInterface $model ): RelationInterface[];
```

Gets hasOne relations defined on a model

#### `getHasOneRecords()` { #mvcmodelmanager-gethasonerecords }

```php
public function getHasOneRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
): ModelInterface|bool;
```

Gets belongsTo related records from a model

#### `getHasOneThrough()` { #mvcmodelmanager-gethasonethrough }

```php
public function getHasOneThrough( ModelInterface $model ): RelationInterface[]|array;
```

Gets hasOneThrough relations defined on a model

#### `getLastInitialized()` { #mvcmodelmanager-getlastinitialized }

```php
public function getLastInitialized(): ModelInterface|null;
```

Get last initialized model

#### `getLastQuery()` { #mvcmodelmanager-getlastquery }

```php
public function getLastQuery(): QueryInterface;
```

Returns the last query created or executed in the models manager

#### `getModelPrefix()` { #mvcmodelmanager-getmodelprefix }

```php
public function getModelPrefix(): string;
```

Returns the prefix for all model sources.

#### `getModelSchema()` { #mvcmodelmanager-getmodelschema }

```php
public function getModelSchema( ModelInterface $model ): string|null;
```

Returns the mapped schema for a model

#### `getModelSource()` { #mvcmodelmanager-getmodelsource }

```php
public function getModelSource( ModelInterface $model ): string;
```

Returns the mapped source for a model

#### `getReadConnection()` { #mvcmodelmanager-getreadconnection }

```php
public function getReadConnection( ModelInterface $model ): AdapterInterface;
```

Returns the connection to read data related to a model

#### `getReadConnectionService()` { #mvcmodelmanager-getreadconnectionservice }

```php
public function getReadConnectionService( ModelInterface $model ): string;
```

Returns the connection service name used to read data related to a model

#### `getRelationByAlias()` { #mvcmodelmanager-getrelationbyalias }

```php
public function getRelationByAlias(
    string $modelName,
    string $alias
): RelationInterface|bool;
```

Returns a relation by its alias

#### `getRelationRecords()` { #mvcmodelmanager-getrelationrecords }

```php
public function getRelationRecords(
    RelationInterface $relation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
);
```

Helper method to query records based on a relation definition

#### `getRelations()` { #mvcmodelmanager-getrelations }

```php
public function getRelations( string $modelName ): RelationInterface[];
```

Query all the relationships defined on a model

#### `getRelationsBetween()` { #mvcmodelmanager-getrelationsbetween }

```php
public function getRelationsBetween(
    string $first,
    string $second
): RelationInterface[]|bool;
```

Query the first relationship defined between two models

#### `getReusableRecords()` { #mvcmodelmanager-getreusablerecords }

```php
public function getReusableRecords(
    string $modelName,
    string $key
);
```

Returns a reusable object from the internal list

#### `getWriteConnection()` { #mvcmodelmanager-getwriteconnection }

```php
public function getWriteConnection( ModelInterface $model ): AdapterInterface;
```

Returns the connection to write data related to a model

#### `getWriteConnectionService()` { #mvcmodelmanager-getwriteconnectionservice }

```php
public function getWriteConnectionService( ModelInterface $model ): string;
```

Returns the connection service name used to write data related to a model

#### `hasBelongsTo()` { #mvcmodelmanager-hasbelongsto }

```php
public function hasBelongsTo(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a belongsTo relation with another model

#### `hasHasMany()` { #mvcmodelmanager-hashasmany }

```php
public function hasHasMany(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasMany relation with another model

#### `hasHasManyToMany()` { #mvcmodelmanager-hashasmanytomany }

```php
public function hasHasManyToMany(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasManyToMany relation with another model

#### `hasHasOne()` { #mvcmodelmanager-hashasone }

```php
public function hasHasOne(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasOne relation with another model

#### `hasHasOneThrough()` { #mvcmodelmanager-hashasonethrough }

```php
public function hasHasOneThrough(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasOneThrough relation with another model

#### `initialize()` { #mvcmodelmanager-initialize }

```php
public function initialize( ModelInterface $model ): bool;
```

Initializes a model in the model manager

#### `isInitialized()` { #mvcmodelmanager-isinitialized }

```php
public function isInitialized( string $className ): bool;
```

Check whether a model is already initialized

#### `isKeepingSnapshots()` { #mvcmodelmanager-iskeepingsnapshots }

```php
public function isKeepingSnapshots( ModelInterface $model ): bool;
```

Checks if a model is keeping snapshots for the queried records

#### `isUsingDynamicUpdate()` { #mvcmodelmanager-isusingdynamicupdate }

```php
public function isUsingDynamicUpdate( ModelInterface $model ): bool;
```

Checks if a model is using dynamic update instead of all-field update

#### `isVisibleModelProperty()` { #mvcmodelmanager-isvisiblemodelproperty }

```php
final public function isVisibleModelProperty(
    ModelInterface $model,
    string $property
): bool;
```

Check whether a model property is declared as public.

```php
$isPublic = $manager->isVisibleModelProperty(
    new Robots(),
    "name"
);
```

#### `keepSnapshots()` { #mvcmodelmanager-keepsnapshots }

```php
public function keepSnapshots(
    ModelInterface $model,
    bool $keepSnapshots
): void;
```

Sets if a model must keep snapshots

#### `load()` { #mvcmodelmanager-load }

```php
public function load( string $modelName ): ModelInterface;
```

Loads a model throwing an exception if it does not exist

#### `missingMethod()` { #mvcmodelmanager-missingmethod }

```php
public function missingMethod(
    ModelInterface $model,
    string $eventName,
    mixed $data
);
```

Dispatch an event to the listeners and behaviors
This method expects that the endpoint listeners/behaviors returns true
meaning that a least one was implemented

#### `notifyEvent()` { #mvcmodelmanager-notifyevent }

```php
public function notifyEvent(
    string $eventName,
    ModelInterface $model
);
```

Receives events generated in the models and dispatches them to an
events-manager if available. Notify the behaviors that are listening in
the model

#### `removeBehavior()` { #mvcmodelmanager-removebehavior }

```php
public function removeBehavior(
    ModelInterface $model,
    string $behaviorClass
): void;
```

Removes a behavior from a model

#### `setConnectionService()` { #mvcmodelmanager-setconnectionservice }

```php
public function setConnectionService(
    ModelInterface $model,
    string $connectionService
): void;
```

Sets both write and read connection service for a model

#### `setCustomEventsManager()` { #mvcmodelmanager-setcustomeventsmanager }

```php
public function setCustomEventsManager(
    ModelInterface $model,
    EventsManagerInterface $eventsManager
): void;
```

Sets a custom events manager for a specific model

#### `setDI()` { #mvcmodelmanager-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the DependencyInjector container

#### `setEventsManager()` { #mvcmodelmanager-seteventsmanager }

```php
public function setEventsManager( EventsManagerInterface $eventsManager ): void;
```

Sets a global events manager

#### `setModelPrefix()` { #mvcmodelmanager-setmodelprefix }

```php
public function setModelPrefix( string $prefix ): void;
```

Sets the prefix for all model sources.

```php
use Phalcon\Mvc\Model\Manager;

$di->set(
    "modelsManager",
    function () {
        $modelsManager = new Manager();

        $modelsManager->setModelPrefix("wp_");

        return $modelsManager;
    }
);

$robots = new Robots();

echo $robots->getSource(); // wp_robots
```

$param string $prefix

#### `setModelSchema()` { #mvcmodelmanager-setmodelschema }

```php
public function setModelSchema(
    ModelInterface $model,
    string $schema
): void;
```

Sets the mapped schema for a model

#### `setModelSource()` { #mvcmodelmanager-setmodelsource }

```php
public function setModelSource(
    ModelInterface $model,
    string $source
): void;
```

Sets the mapped source for a model

#### `setReadConnectionService()` { #mvcmodelmanager-setreadconnectionservice }

```php
public function setReadConnectionService(
    ModelInterface $model,
    string $connectionService
): void;
```

Sets read connection service for a model

#### `setReusableRecords()` { #mvcmodelmanager-setreusablerecords }

```php
public function setReusableRecords(
    string $modelName,
    string $key,
    mixed $records
): void;
```

Stores a reusable record in the internal list

#### `setWriteConnectionService()` { #mvcmodelmanager-setwriteconnectionservice }

```php
public function setWriteConnectionService(
    ModelInterface $model,
    string $connectionService
): void;
```

Sets write connection service for a model

#### `useDynamicUpdate()` { #mvcmodelmanager-usedynamicupdate }

```php
public function useDynamicUpdate(
    ModelInterface $model,
    bool $dynamicUpdate
): void;
```

Sets if a model must use dynamic update instead of the all-field update

<div class="api-group">Protected · 2</div>

#### `getConnection()` { #mvcmodelmanager-getconnection }

```php
protected function getConnection(
    ModelInterface $model,
    array $connectionServices
): AdapterInterface;
```

Returns the connection to read or write data related to a model
depending on the connection services.

#### `mergeFindParameters()` { #mvcmodelmanager-mergefindparameters }

```php
final protected function mergeFindParameters(
    mixed $findParamsOne,
    mixed $findParamsTwo
): array;
```

Merge two arrays of find parameters


## Mvc\Model\ManagerInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/ManagerInterface.zep){ .src-btn }

Phalcon\Mvc\Model\ManagerInterface

Interface for Phalcon\Mvc\Model\Manager

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\ManagerInterface`**

</div>

__Uses__ `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Query\BuilderInterface` · `Phalcon\Mvc\Model\Query\StatusInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmanagerinterface-addbehavior">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">addBehavior(
    ModelInterface $model,
    BehaviorInterface $behavior
)</code>
<span class="desc">Binds a behavior to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-addbelongsto">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface</code>
<code class="sig">addBelongsTo(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup a relation reverse 1-1  between two models</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-addhasmany">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface</code>
<code class="sig">addHasMany(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup a relation 1-n between two models</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-addhasmanytomany">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface</code>
<code class="sig">addHasManyToMany(
    ModelInterface $model,
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setups a relation n-m between two models</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-addhasone">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface</code>
<code class="sig">addHasOne(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setup a 1-1 relation between two models</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-addhasonethrough">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface</code>
<code class="sig">addHasOneThrough(
    ModelInterface $model,
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Setups a 1-1 relation between two models using an intermediate table</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-clearreusableobjects">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">clearReusableObjects()</code>
<span class="desc">Clears the internal reusable list</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-createbuilder">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">createBuilder( mixed $params = null )</code>
<span class="desc">Creates a Phalcon\Mvc\Model\Query\Builder</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-createquery">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">createQuery( string $phql )</code>
<span class="desc">Creates a Phalcon\Mvc\Model\Query without execute it</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-executequery">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">executeQuery(
    string $phql,
    mixed $placeholders = null,
    mixed $types = null
)</code>
<span class="desc">Creates a Phalcon\Mvc\Model\Query and execute it</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getbelongsto">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|array</code>
<code class="sig">getBelongsTo( ModelInterface $model )</code>
<span class="desc">Gets belongsTo relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getbelongstorecords">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface|bool</code>
<code class="sig">getBelongsToRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
)</code>
<span class="desc">Gets belongsTo related records from a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getbuilder">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface|null</code>
<code class="sig">getBuilder()</code>
<span class="desc">Returns the newly created Phalcon\Mvc\Model\Query\Builder or null</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-gethasmany">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|array</code>
<code class="sig">getHasMany( ModelInterface $model )</code>
<span class="desc">Gets hasMany relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-gethasmanyrecords">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface|bool</code>
<code class="sig">getHasManyRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
)</code>
<span class="desc">Gets hasMany related records from a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-gethasmanytomany">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|array</code>
<code class="sig">getHasManyToMany( ModelInterface $model )</code>
<span class="desc">Gets hasManyToMany relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-gethasone">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|array</code>
<code class="sig">getHasOne( ModelInterface $model )</code>
<span class="desc">Gets hasOne relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-gethasoneandhasmany">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]</code>
<code class="sig">getHasOneAndHasMany( ModelInterface $model )</code>
<span class="desc">Gets hasOne relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-gethasonerecords">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|bool</code>
<code class="sig">getHasOneRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
)</code>
<span class="desc">Gets hasOne related records from a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-gethasonethrough">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|array</code>
<code class="sig">getHasOneThrough( ModelInterface $model )</code>
<span class="desc">Gets hasOneThrough relations defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getlastinitialized">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|null</code>
<code class="sig">getLastInitialized()</code>
<span class="desc">Get last initialized model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getlastquery">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">getLastQuery()</code>
<span class="desc">Returns the last query created or executed in the models manager</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getmodelschema">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getModelSchema( ModelInterface $model )</code>
<span class="desc">Returns the mapped schema for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getmodelsource">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getModelSource( ModelInterface $model )</code>
<span class="desc">Returns the mapped source for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getreadconnection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getReadConnection( ModelInterface $model )</code>
<span class="desc">Returns the connection to read data related to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getreadconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getReadConnectionService( ModelInterface $model )</code>
<span class="desc">Returns the connection service name used to read data related to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getrelationbyalias">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface|bool</code>
<code class="sig">getRelationByAlias(
    string $modelName,
    string $alias
)</code>
<span class="desc">Returns a relation by its alias</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getrelationrecords">
<code class="vis vis-public">public</code>
<code class="sig">getRelationRecords(
    RelationInterface $relation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
)</code>
<span class="desc">Helper method to query records based on a relation definition</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getrelations">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]</code>
<code class="sig">getRelations( string $modelName )</code>
<span class="desc">Query all the relationships defined on a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getrelationsbetween">
<code class="vis vis-public">public</code>
<code class="ret">RelationInterface[]|bool</code>
<code class="sig">getRelationsBetween(
    string $first,
    string $second
)</code>
<span class="desc">Query the relations between two models</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getreusablerecords">
<code class="vis vis-public">public</code>
<code class="sig">getReusableRecords(
    string $modelName,
    string $key
)</code>
<span class="desc">Returns a reusable object from the internal list</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getwriteconnection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getWriteConnection( ModelInterface $model )</code>
<span class="desc">Returns the connection to write data related to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-getwriteconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getWriteConnectionService( ModelInterface $model )</code>
<span class="desc">Returns the connection service name used to write data related to a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-hasbelongsto">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasBelongsTo(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a belongsTo relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-hashasmany">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasHasMany(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasMany relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-hashasmanytomany">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasHasManyToMany(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasManyToMany relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-hashasone">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasHasOne(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasOne relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-hashasonethrough">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasHasOneThrough(
    string $modelName,
    string $modelRelation
)</code>
<span class="desc">Checks whether a model has a hasOneThrough relation with another model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-initialize">
<code class="vis vis-public">public</code>
<code class="sig">initialize( ModelInterface $model )</code>
<span class="desc">Initializes a model in the model manager</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-isinitialized">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isInitialized( string $className )</code>
<span class="desc">Check of a model is already initialized</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-iskeepingsnapshots">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isKeepingSnapshots( ModelInterface $model )</code>
<span class="desc">Checks if a model is keeping snapshots for the queried records</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-isusingdynamicupdate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isUsingDynamicUpdate( ModelInterface $model )</code>
<span class="desc">Checks if a model is using dynamic update instead of all-field update</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-isvisiblemodelproperty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isVisibleModelProperty(
    ModelInterface $model,
    string $property
)</code>
<span class="desc">Check whether a model property is declared as public.</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-keepsnapshots">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">keepSnapshots(
    ModelInterface $model,
    bool $keepSnapshots
)</code>
<span class="desc">Sets if a model must keep snapshots</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-load">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">load( string $modelName )</code>
<span class="desc">Loads a model throwing an exception if it does not exist</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-missingmethod">
<code class="vis vis-public">public</code>
<code class="sig">missingMethod(
    ModelInterface $model,
    string $eventName,
    mixed $data
)</code>
<span class="desc">Dispatch an event to the listeners and behaviors</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-notifyevent">
<code class="vis vis-public">public</code>
<code class="sig">notifyEvent(
    string $eventName,
    ModelInterface $model
)</code>
<span class="desc">Receives events generated in the models and dispatches them to an events-manager if available</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-removebehavior">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">removeBehavior(
    ModelInterface $model,
    string $behaviorClass
)</code>
<span class="desc">Removes a behavior from a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-setconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setConnectionService(
    ModelInterface $model,
    string $connectionService
)</code>
<span class="desc">Sets both write and read connection service for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-setmodelschema">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setModelSchema(
    ModelInterface $model,
    string $schema
)</code>
<span class="desc">Sets the mapped schema for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-setmodelsource">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setModelSource(
    ModelInterface $model,
    string $source
)</code>
<span class="desc">Sets the mapped source for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-setreadconnectionservice">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setReadConnectionService(
    ModelInterface $model,
    string $connectionService
)</code>
<span class="desc">Sets read connection service for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-setreusablerecords">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setReusableRecords(
    string $modelName,
    string $key,
    mixed $records
)</code>
<span class="desc">Stores a reusable record in the internal list</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-setwriteconnectionservice">
<code class="vis vis-public">public</code>
<code class="sig">setWriteConnectionService(
    ModelInterface $model,
    string $connectionService
)</code>
<span class="desc">Sets write connection service for a model</span>
</a>
<a class="api-item" href="#mvcmodelmanagerinterface-usedynamicupdate">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">useDynamicUpdate(
    ModelInterface $model,
    bool $dynamicUpdate
)</code>
<span class="desc">Sets if a model must use dynamic update instead of the all-field update</span>
</a>
</div>

### Methods

<div class="api-group">Public · 55</div>

#### `addBehavior()` { #mvcmodelmanagerinterface-addbehavior }

```php
public function addBehavior(
    ModelInterface $model,
    BehaviorInterface $behavior
): void;
```

Binds a behavior to a model

#### `addBelongsTo()` { #mvcmodelmanagerinterface-addbelongsto }

```php
public function addBelongsTo(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
): RelationInterface;
```

Setup a relation reverse 1-1  between two models

#### `addHasMany()` { #mvcmodelmanagerinterface-addhasmany }

```php
public function addHasMany(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
): RelationInterface;
```

Setup a relation 1-n between two models

#### `addHasManyToMany()` { #mvcmodelmanagerinterface-addhasmanytomany }

```php
public function addHasManyToMany(
    ModelInterface $model,
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
): RelationInterface;
```

Setups a relation n-m between two models

#### `addHasOne()` { #mvcmodelmanagerinterface-addhasone }

```php
public function addHasOne(
    ModelInterface $model,
    mixed $fields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
): RelationInterface;
```

Setup a 1-1 relation between two models

#### `addHasOneThrough()` { #mvcmodelmanagerinterface-addhasonethrough }

```php
public function addHasOneThrough(
    ModelInterface $model,
    mixed $fields,
    string $intermediateModel,
    mixed $intermediateFields,
    mixed $intermediateReferencedFields,
    string $referencedModel,
    mixed $referencedFields,
    array $options = []
): RelationInterface;
```

Setups a 1-1 relation between two models using an intermediate table

#### `clearReusableObjects()` { #mvcmodelmanagerinterface-clearreusableobjects }

```php
public function clearReusableObjects(): void;
```

Clears the internal reusable list

#### `createBuilder()` { #mvcmodelmanagerinterface-createbuilder }

```php
public function createBuilder( mixed $params = null ): BuilderInterface;
```

Creates a Phalcon\Mvc\Model\Query\Builder

#### `createQuery()` { #mvcmodelmanagerinterface-createquery }

```php
public function createQuery( string $phql ): QueryInterface;
```

Creates a Phalcon\Mvc\Model\Query without execute it

#### `executeQuery()` { #mvcmodelmanagerinterface-executequery }

```php
public function executeQuery(
    string $phql,
    mixed $placeholders = null,
    mixed $types = null
): mixed;
```

Creates a Phalcon\Mvc\Model\Query and execute it

#### `getBelongsTo()` { #mvcmodelmanagerinterface-getbelongsto }

```php
public function getBelongsTo( ModelInterface $model ): RelationInterface[]|array;
```

Gets belongsTo relations defined on a model

#### `getBelongsToRecords()` { #mvcmodelmanagerinterface-getbelongstorecords }

```php
public function getBelongsToRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
): ResultsetInterface|bool;
```

Gets belongsTo related records from a model

#### `getBuilder()` { #mvcmodelmanagerinterface-getbuilder }

```php
public function getBuilder(): BuilderInterface|null;
```

Returns the newly created Phalcon\Mvc\Model\Query\Builder or null

#### `getHasMany()` { #mvcmodelmanagerinterface-gethasmany }

```php
public function getHasMany( ModelInterface $model ): RelationInterface[]|array;
```

Gets hasMany relations defined on a model

#### `getHasManyRecords()` { #mvcmodelmanagerinterface-gethasmanyrecords }

```php
public function getHasManyRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
): ResultsetInterface|bool;
```

Gets hasMany related records from a model

#### `getHasManyToMany()` { #mvcmodelmanagerinterface-gethasmanytomany }

```php
public function getHasManyToMany( ModelInterface $model ): RelationInterface[]|array;
```

Gets hasManyToMany relations defined on a model

#### `getHasOne()` { #mvcmodelmanagerinterface-gethasone }

```php
public function getHasOne( ModelInterface $model ): RelationInterface[]|array;
```

Gets hasOne relations defined on a model

#### `getHasOneAndHasMany()` { #mvcmodelmanagerinterface-gethasoneandhasmany }

```php
public function getHasOneAndHasMany( ModelInterface $model ): RelationInterface[];
```

Gets hasOne relations defined on a model

#### `getHasOneRecords()` { #mvcmodelmanagerinterface-gethasonerecords }

```php
public function getHasOneRecords(
    string $modelName,
    string $modelRelation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
): ModelInterface|bool;
```

Gets hasOne related records from a model

#### `getHasOneThrough()` { #mvcmodelmanagerinterface-gethasonethrough }

```php
public function getHasOneThrough( ModelInterface $model ): RelationInterface[]|array;
```

Gets hasOneThrough relations defined on a model

#### `getLastInitialized()` { #mvcmodelmanagerinterface-getlastinitialized }

```php
public function getLastInitialized(): ModelInterface|null;
```

Get last initialized model

#### `getLastQuery()` { #mvcmodelmanagerinterface-getlastquery }

```php
public function getLastQuery(): QueryInterface;
```

Returns the last query created or executed in the models manager

#### `getModelSchema()` { #mvcmodelmanagerinterface-getmodelschema }

```php
public function getModelSchema( ModelInterface $model ): string|null;
```

Returns the mapped schema for a model

#### `getModelSource()` { #mvcmodelmanagerinterface-getmodelsource }

```php
public function getModelSource( ModelInterface $model ): string;
```

Returns the mapped source for a model

#### `getReadConnection()` { #mvcmodelmanagerinterface-getreadconnection }

```php
public function getReadConnection( ModelInterface $model ): AdapterInterface;
```

Returns the connection to read data related to a model

#### `getReadConnectionService()` { #mvcmodelmanagerinterface-getreadconnectionservice }

```php
public function getReadConnectionService( ModelInterface $model ): string;
```

Returns the connection service name used to read data related to a model

#### `getRelationByAlias()` { #mvcmodelmanagerinterface-getrelationbyalias }

```php
public function getRelationByAlias(
    string $modelName,
    string $alias
): RelationInterface|bool;
```

Returns a relation by its alias

#### `getRelationRecords()` { #mvcmodelmanagerinterface-getrelationrecords }

```php
public function getRelationRecords(
    RelationInterface $relation,
    ModelInterface $record,
    mixed $parameters = null,
    string $method = null
);
```

Helper method to query records based on a relation definition

#### `getRelations()` { #mvcmodelmanagerinterface-getrelations }

```php
public function getRelations( string $modelName ): RelationInterface[];
```

Query all the relationships defined on a model

#### `getRelationsBetween()` { #mvcmodelmanagerinterface-getrelationsbetween }

```php
public function getRelationsBetween(
    string $first,
    string $second
): RelationInterface[]|bool;
```

Query the relations between two models

#### `getReusableRecords()` { #mvcmodelmanagerinterface-getreusablerecords }

```php
public function getReusableRecords(
    string $modelName,
    string $key
);
```

Returns a reusable object from the internal list

#### `getWriteConnection()` { #mvcmodelmanagerinterface-getwriteconnection }

```php
public function getWriteConnection( ModelInterface $model ): AdapterInterface;
```

Returns the connection to write data related to a model

#### `getWriteConnectionService()` { #mvcmodelmanagerinterface-getwriteconnectionservice }

```php
public function getWriteConnectionService( ModelInterface $model ): string;
```

Returns the connection service name used to write data related to a model

#### `hasBelongsTo()` { #mvcmodelmanagerinterface-hasbelongsto }

```php
public function hasBelongsTo(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a belongsTo relation with another model

#### `hasHasMany()` { #mvcmodelmanagerinterface-hashasmany }

```php
public function hasHasMany(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasMany relation with another model

#### `hasHasManyToMany()` { #mvcmodelmanagerinterface-hashasmanytomany }

```php
public function hasHasManyToMany(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasManyToMany relation with another model

#### `hasHasOne()` { #mvcmodelmanagerinterface-hashasone }

```php
public function hasHasOne(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasOne relation with another model

#### `hasHasOneThrough()` { #mvcmodelmanagerinterface-hashasonethrough }

```php
public function hasHasOneThrough(
    string $modelName,
    string $modelRelation
): bool;
```

Checks whether a model has a hasOneThrough relation with another model

#### `initialize()` { #mvcmodelmanagerinterface-initialize }

```php
public function initialize( ModelInterface $model );
```

Initializes a model in the model manager

#### `isInitialized()` { #mvcmodelmanagerinterface-isinitialized }

```php
public function isInitialized( string $className ): bool;
```

Check of a model is already initialized

#### `isKeepingSnapshots()` { #mvcmodelmanagerinterface-iskeepingsnapshots }

```php
public function isKeepingSnapshots( ModelInterface $model ): bool;
```

Checks if a model is keeping snapshots for the queried records

#### `isUsingDynamicUpdate()` { #mvcmodelmanagerinterface-isusingdynamicupdate }

```php
public function isUsingDynamicUpdate( ModelInterface $model ): bool;
```

Checks if a model is using dynamic update instead of all-field update

#### `isVisibleModelProperty()` { #mvcmodelmanagerinterface-isvisiblemodelproperty }

```php
public function isVisibleModelProperty(
    ModelInterface $model,
    string $property
): bool;
```

Check whether a model property is declared as public.

```php
$isPublic = $manager->isVisibleModelProperty(
    new Robots(),
    "name"
);
```

#### `keepSnapshots()` { #mvcmodelmanagerinterface-keepsnapshots }

```php
public function keepSnapshots(
    ModelInterface $model,
    bool $keepSnapshots
): void;
```

Sets if a model must keep snapshots

#### `load()` { #mvcmodelmanagerinterface-load }

```php
public function load( string $modelName ): ModelInterface;
```

Loads a model throwing an exception if it does not exist

#### `missingMethod()` { #mvcmodelmanagerinterface-missingmethod }

```php
public function missingMethod(
    ModelInterface $model,
    string $eventName,
    mixed $data
);
```

Dispatch an event to the listeners and behaviors
This method expects that the endpoint listeners/behaviors returns true
meaning that a least one is implemented

#### `notifyEvent()` { #mvcmodelmanagerinterface-notifyevent }

```php
public function notifyEvent(
    string $eventName,
    ModelInterface $model
);
```

Receives events generated in the models and dispatches them to an events-manager if available
Notify the behaviors that are listening in the model

#### `removeBehavior()` { #mvcmodelmanagerinterface-removebehavior }

```php
public function removeBehavior(
    ModelInterface $model,
    string $behaviorClass
): void;
```

Removes a behavior from a model

#### `setConnectionService()` { #mvcmodelmanagerinterface-setconnectionservice }

```php
public function setConnectionService(
    ModelInterface $model,
    string $connectionService
): void;
```

Sets both write and read connection service for a model

#### `setModelSchema()` { #mvcmodelmanagerinterface-setmodelschema }

```php
public function setModelSchema(
    ModelInterface $model,
    string $schema
): void;
```

Sets the mapped schema for a model

#### `setModelSource()` { #mvcmodelmanagerinterface-setmodelsource }

```php
public function setModelSource(
    ModelInterface $model,
    string $source
): void;
```

Sets the mapped source for a model

#### `setReadConnectionService()` { #mvcmodelmanagerinterface-setreadconnectionservice }

```php
public function setReadConnectionService(
    ModelInterface $model,
    string $connectionService
): void;
```

Sets read connection service for a model

#### `setReusableRecords()` { #mvcmodelmanagerinterface-setreusablerecords }

```php
public function setReusableRecords(
    string $modelName,
    string $key,
    mixed $records
): void;
```

Stores a reusable record in the internal list

#### `setWriteConnectionService()` { #mvcmodelmanagerinterface-setwriteconnectionservice }

```php
public function setWriteConnectionService(
    ModelInterface $model,
    string $connectionService
);
```

Sets write connection service for a model

#### `useDynamicUpdate()` { #mvcmodelmanagerinterface-usedynamicupdate }

```php
public function useDynamicUpdate(
    ModelInterface $model,
    bool $dynamicUpdate
): void;
```

Sets if a model must use dynamic update instead of the all-field update


## Mvc\Model\MetaData

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData.zep){ .src-btn }

Phalcon\Mvc\Model\MetaData

Because Phalcon\Mvc\Model requires meta-data like field names, data types,
primary keys, etc. This component collect them and store for further
querying by Phalcon\Mvc\Model. Phalcon\Mvc\Model\MetaData can also use
adapters to store temporarily or permanently the meta-data.

A standard Phalcon\Mvc\Model\MetaData can be used to query model attributes:

```php
$metaData = new \Phalcon\Mvc\Model\MetaData\Memory();

$attributes = $metaData->getAttributes(
    new Robots()
);

print_r($attributes);
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\MetaData`** — implements [`Phalcon\Di\InjectionAwareInterface`](phalcon_di.md#diinjectionawareinterface), [`Phalcon\Mvc\Model\MetaDataInterface`](#mvcmodelmetadatainterface)
    - [`Phalcon\Mvc\Model\MetaData\Apcu`](#mvcmodelmetadataapcu)
    - [`Phalcon\Mvc\Model\MetaData\Libmemcached`](#mvcmodelmetadatalibmemcached)
    - [`Phalcon\Mvc\Model\MetaData\Memory`](#mvcmodelmetadatamemory)
    - [`Phalcon\Mvc\Model\MetaData\Redis`](#mvcmodelmetadataredis)
    - [`Phalcon\Mvc\Model\MetaData\Stream`](#mvcmodelmetadatastream)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\MetaData\Exceptions\ContainerRequired` · `Phalcon\Mvc\Model\MetaData\Exceptions\CorruptedMetaData` · `Phalcon\Mvc\Model\MetaData\Exceptions\InvalidMetaDataForModel` · `Phalcon\Mvc\Model\MetaData\Exceptions\MetaDataStrategyFailed` · `Phalcon\Mvc\Model\MetaData\Strategy\Introspection` · `Phalcon\Mvc\Model\MetaData\Strategy\StrategyInterface` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadata-getadapter">
<code class="vis vis-public">public</code>
<code class="ret">CacheAdapterInterface|null</code>
<code class="sig">getAdapter()</code>
<span class="desc">Return the internal cache adapter</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAttributes( ModelInterface $model )</code>
<span class="desc">Returns table attributes names (fields)</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getautomaticcreateattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAutomaticCreateAttributes( ModelInterface $model )</code>
<span class="desc">Returns attributes that must be ignored from the INSERT SQL generation</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getautomaticupdateattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAutomaticUpdateAttributes( ModelInterface $model )</code>
<span class="desc">Returns attributes that must be ignored from the UPDATE SQL generation</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindTypes( ModelInterface $model )</code>
<span class="desc">Returns attributes and their bind data types</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getcolumnmap">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">getColumnMap( ModelInterface $model )</code>
<span class="desc">Returns the column map if any</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getcolumnmapuniquekey">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getColumnMapUniqueKey( ModelInterface $model )</code>
<span class="desc">Returns a ColumnMap Unique key for meta-data is created using className</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Returns the DependencyInjector container</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getdatatypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getDataTypes( ModelInterface $model )</code>
<span class="desc">Returns attributes and their data types</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getdatatypesnumeric">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getDataTypesNumeric( ModelInterface $model )</code>
<span class="desc">Returns attributes which types are numerical</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getdefaultvalues">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getDefaultValues( ModelInterface $model )</code>
<span class="desc">Returns attributes (which have default values) and their default values</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getemptystringattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getEmptyStringAttributes( ModelInterface $model )</code>
<span class="desc">Returns attributes allow empty strings</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getidentityfield">
<code class="vis vis-public">public</code>
<code class="ret">bool|string|null</code>
<code class="sig">getIdentityField( ModelInterface $model )</code>
<span class="desc">Returns the name of identity field (if one is present)</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getmetadatauniquekey">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getMetaDataUniqueKey( ModelInterface $model )</code>
<span class="desc">Returns a MetaData Unique key for meta-data is created using className</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getmodeluuid">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getModelUUID(
    ModelInterface $model,
    array $row
)</code>
<span class="desc">Returns the model UniqueID based on model and array row primary key(s) value(s)</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getnonprimarykeyattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getNonPrimaryKeyAttributes( ModelInterface $model )</code>
<span class="desc">Returns an array of fields which are not part of the primary key</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getnotnullattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getNotNullAttributes( ModelInterface $model )</code>
<span class="desc">Returns an array of not null attributes</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getprimarykeyattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getPrimaryKeyAttributes( ModelInterface $model )</code>
<span class="desc">Returns an array of fields which are part of the primary key</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getreversecolumnmap">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">getReverseColumnMap( ModelInterface $model )</code>
<span class="desc">Returns the reverse column map if any</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getstrategy">
<code class="vis vis-public">public</code>
<code class="ret">StrategyInterface</code>
<code class="sig">getStrategy()</code>
<span class="desc">Return the strategy to obtain the meta-data</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-hasattribute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasAttribute(
    ModelInterface $model,
    string $attribute
)</code>
<span class="desc">Check if a model has certain attribute</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-isempty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isEmpty()</code>
<span class="desc">Checks if the internal meta-data container is empty</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-modelequals">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">modelEquals(
    ModelInterface $first,
    ModelInterface $other
)</code>
<span class="desc">Compares if two models are the same in memory</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-read">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">read( mixed $key )</code>
<span class="desc">Reads metadata from the adapter</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-readcolumnmap">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">readColumnMap( ModelInterface $model )</code>
<span class="desc">Reads the ordered/reversed column map for certain model</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-readcolumnmapindex">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">readColumnMapIndex(
    ModelInterface $model,
    int $index
)</code>
<span class="desc">Reads column-map information for certain model using a MODEL_* constant</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-readmetadata">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">readMetaData( ModelInterface $model )</code>
<span class="desc">Reads the complete meta-data for certain model</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-readmetadataindex">
<code class="vis vis-public">public</code>
<code class="ret">array|string|null</code>
<code class="sig">readMetaDataIndex(
    ModelInterface $model,
    int $index
)</code>
<span class="desc">Reads meta-data for certain model</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Resets internal meta-data in order to regenerate it</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-setautomaticcreateattributes">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setAutomaticCreateAttributes(
    ModelInterface $model,
    array $attributes
)</code>
<span class="desc">Set the attributes that must be ignored from the INSERT SQL generation</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-setautomaticupdateattributes">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setAutomaticUpdateAttributes(
    ModelInterface $model,
    array $attributes
)</code>
<span class="desc">Set the attributes that must be ignored from the UPDATE SQL generation</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the DependencyInjector container</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-setemptystringattributes">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEmptyStringAttributes(
    ModelInterface $model,
    array $attributes
)</code>
<span class="desc">Set the attributes that allow empty string values</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-setstrategy">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setStrategy( StrategyInterface $strategy )</code>
<span class="desc">Set the meta-data extraction strategy</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-write">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">write(
    string $key,
    array $data
)</code>
<span class="desc">Writes the metadata to adapter</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-writemetadataindex">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">writeMetaDataIndex(
    ModelInterface $model,
    int $index,
    mixed $data
)</code>
<span class="desc">Writes meta-data for certain model using a MODEL_* constant</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-getarrval">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig">getArrVal(
    array $collection,
    mixed $index,
    mixed $defaultValue = null
)</code>
<span class="desc">@todo Remove this when we get traits</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-initialize">
<code class="vis vis-protected">protected</code>
<code class="sig">initialize(
    ModelInterface $model,
    mixed $key,
    mixed $table,
    mixed $schema
)</code>
<span class="desc">Initialize old behaviour for compatability</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-initializecolumnmap">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">initializeColumnMap(
    ModelInterface $model,
    mixed $key
)</code>
<span class="desc">Initialize ColumnMap for a certain table</span>
</a>
<a class="api-item" href="#mvcmodelmetadata-initializemetadata">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">initializeMetaData(
    ModelInterface $model,
    mixed $key
)</code>
<span class="desc">Initialize the metadata for certain table</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `MODELS_ATTRIBUTES = 0` `int`

-   `MODELS_AUTOMATIC_DEFAULT_INSERT = 10` `int`

-   `MODELS_AUTOMATIC_DEFAULT_UPDATE = 11` `int`

-   `MODELS_COLUMN_MAP = 0` `int`

-   `MODELS_DATA_TYPES = 4` `int`

-   `MODELS_DATA_TYPES_BIND = 9` `int`

-   `MODELS_DATA_TYPES_NUMERIC = 5` `int`

-   `MODELS_DATE_AT = 6` `int`

-   `MODELS_DATE_IN = 7` `int`

-   `MODELS_DEFAULT_VALUES = 12` `int`

-   `MODELS_EMPTY_STRING_VALUES = 13` `int`

-   `MODELS_IDENTITY_COLUMN = 8` `int`

-   `MODELS_NON_PRIMARY_KEY = 2` `int`

-   `MODELS_NOT_NULL = 3` `int`

-   `MODELS_PRIMARY_KEY = 1` `int`

-   `MODELS_REVERSE_COLUMN_MAP = 1` `int`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$adapter = null` `CacheAdapterInterface|null`

-   `protected`{ .vis-protected } `$columnMap = []` `array`

-   `protected`{ .vis-protected } `$container = null` `DiInterface|null`

-   `protected`{ .vis-protected } `$metaData = []` `array`

-   `protected`{ .vis-protected } `$pendingMetaDataWrites = []` `array`

    Holds metadata index writes that arrived before the model's metadata was
    properly initialized (e.g. skipAttributes() called in a parent model's
    initialize() while the child's source had not yet been set).  Applied
    inside initializeMetaData() after the real schema is loaded.

-   `protected`{ .vis-protected } `$strategy = null` `StrategyInterface|null`

</div>

### Methods

<div class="api-group">Public · 36</div>

#### `getAdapter()` { #mvcmodelmetadata-getadapter }

```php
public function getAdapter(): CacheAdapterInterface|null;
```

Return the internal cache adapter

#### `getAttributes()` { #mvcmodelmetadata-getattributes }

```php
public function getAttributes( ModelInterface $model ): array;
```

Returns table attributes names (fields)

```php
print_r(
    $metaData->getAttributes(
        new Robots()
    )
);
```

#### `getAutomaticCreateAttributes()` { #mvcmodelmetadata-getautomaticcreateattributes }

```php
public function getAutomaticCreateAttributes( ModelInterface $model ): array;
```

Returns attributes that must be ignored from the INSERT SQL generation

```php
print_r(
    $metaData->getAutomaticCreateAttributes(
        new Robots()
    )
);
```

#### `getAutomaticUpdateAttributes()` { #mvcmodelmetadata-getautomaticupdateattributes }

```php
public function getAutomaticUpdateAttributes( ModelInterface $model ): array;
```

Returns attributes that must be ignored from the UPDATE SQL generation

```php
print_r(
    $metaData->getAutomaticUpdateAttributes(
        new Robots()
    )
);
```

#### `getBindTypes()` { #mvcmodelmetadata-getbindtypes }

```php
public function getBindTypes( ModelInterface $model ): array;
```

Returns attributes and their bind data types

```php
print_r(
    $metaData->getBindTypes(
        new Robots()
    )
);
```

#### `getColumnMap()` { #mvcmodelmetadata-getcolumnmap }

```php
public function getColumnMap( ModelInterface $model ): array|null;
```

Returns the column map if any

```php
print_r(
    $metaData->getColumnMap(
        new Robots()
    )
);
```

#### `getColumnMapUniqueKey()` { #mvcmodelmetadata-getcolumnmapuniquekey }

```php
public final function getColumnMapUniqueKey( ModelInterface $model ): string|null;
```

Returns a ColumnMap Unique key for meta-data is created using className

#### `getDI()` { #mvcmodelmetadata-getdi }

```php
public function getDI(): DiInterface;
```

Returns the DependencyInjector container

#### `getDataTypes()` { #mvcmodelmetadata-getdatatypes }

```php
public function getDataTypes( ModelInterface $model ): array;
```

Returns attributes and their data types

```php
print_r(
    $metaData->getDataTypes(
        new Robots()
    )
);
```

#### `getDataTypesNumeric()` { #mvcmodelmetadata-getdatatypesnumeric }

```php
public function getDataTypesNumeric( ModelInterface $model ): array;
```

Returns attributes which types are numerical

```php
print_r(
    $metaData->getDataTypesNumeric(
        new Robots()
    )
);
```

#### `getDefaultValues()` { #mvcmodelmetadata-getdefaultvalues }

```php
public function getDefaultValues( ModelInterface $model ): array;
```

Returns attributes (which have default values) and their default values

```php
print_r(
    $metaData->getDefaultValues(
        new Robots()
    )
);
```

#### `getEmptyStringAttributes()` { #mvcmodelmetadata-getemptystringattributes }

```php
public function getEmptyStringAttributes( ModelInterface $model ): array;
```

Returns attributes allow empty strings

```php
print_r(
    $metaData->getEmptyStringAttributes(
        new Robots()
    )
);
```

#### `getIdentityField()` { #mvcmodelmetadata-getidentityfield }

```php
public function getIdentityField( ModelInterface $model ): bool|string|null;
```

Returns the name of identity field (if one is present)

```php
print_r(
    $metaData->getIdentityField(
        new Robots()
    )
);
```

#### `getMetaDataUniqueKey()` { #mvcmodelmetadata-getmetadatauniquekey }

```php
public final function getMetaDataUniqueKey( ModelInterface $model ): string|null;
```

Returns a MetaData Unique key for meta-data is created using className

#### `getModelUUID()` { #mvcmodelmetadata-getmodeluuid }

```php
public function getModelUUID(
    ModelInterface $model,
    array $row
): string|null;
```

Returns the model UniqueID based on model and array row primary key(s) value(s)

#### `getNonPrimaryKeyAttributes()` { #mvcmodelmetadata-getnonprimarykeyattributes }

```php
public function getNonPrimaryKeyAttributes( ModelInterface $model ): array;
```

Returns an array of fields which are not part of the primary key

```php
print_r(
    $metaData->getNonPrimaryKeyAttributes(
        new Robots()
    )
);
```

#### `getNotNullAttributes()` { #mvcmodelmetadata-getnotnullattributes }

```php
public function getNotNullAttributes( ModelInterface $model ): array;
```

Returns an array of not null attributes

```php
print_r(
    $metaData->getNotNullAttributes(
        new Robots()
    )
);
```

#### `getPrimaryKeyAttributes()` { #mvcmodelmetadata-getprimarykeyattributes }

```php
public function getPrimaryKeyAttributes( ModelInterface $model ): array;
```

Returns an array of fields which are part of the primary key

```php
print_r(
    $metaData->getPrimaryKeyAttributes(
        new Robots()
    )
);
```

#### `getReverseColumnMap()` { #mvcmodelmetadata-getreversecolumnmap }

```php
public function getReverseColumnMap( ModelInterface $model ): array|null;
```

Returns the reverse column map if any

```php
print_r(
    $metaData->getReverseColumnMap(
        new Robots()
    )
);
```

#### `getStrategy()` { #mvcmodelmetadata-getstrategy }

```php
public function getStrategy(): StrategyInterface;
```

Return the strategy to obtain the meta-data

#### `hasAttribute()` { #mvcmodelmetadata-hasattribute }

```php
public function hasAttribute(
    ModelInterface $model,
    string $attribute
): bool;
```

Check if a model has certain attribute

```php
var_dump(
    $metaData->hasAttribute(
        new Robots(),
        "name"
    )
);
```

#### `isEmpty()` { #mvcmodelmetadata-isempty }

```php
public function isEmpty(): bool;
```

Checks if the internal meta-data container is empty

```php
var_dump(
    $metaData->isEmpty()
);
```

#### `modelEquals()` { #mvcmodelmetadata-modelequals }

```php
public function modelEquals(
    ModelInterface $first,
    ModelInterface $other
): bool;
```

Compares if two models are the same in memory

#### `read()` { #mvcmodelmetadata-read }

```php
public function read( mixed $key ): array|null;
```

Reads metadata from the adapter

#### `readColumnMap()` { #mvcmodelmetadata-readcolumnmap }

```php
final public function readColumnMap( ModelInterface $model ): array|null;
```

Reads the ordered/reversed column map for certain model

```php
print_r(
    $metaData->readColumnMap(
        new Robots()
    )
);
```

#### `readColumnMapIndex()` { #mvcmodelmetadata-readcolumnmapindex }

```php
final public function readColumnMapIndex(
    ModelInterface $model,
    int $index
): array|null;
```

Reads column-map information for certain model using a MODEL_* constant

```php
print_r(
    $metaData->readColumnMapIndex(
        new Robots(),
        MetaData::MODELS_REVERSE_COLUMN_MAP
    )
);
```

#### `readMetaData()` { #mvcmodelmetadata-readmetadata }

```php
final public function readMetaData( ModelInterface $model ): array|null;
```

Reads the complete meta-data for certain model

```php
print_r(
    $metaData->readMetaData(
        new Robots()
    )
);
```

#### `readMetaDataIndex()` { #mvcmodelmetadata-readmetadataindex }

```php
final public function readMetaDataIndex(
    ModelInterface $model,
    int $index
): array|string|null;
```

Reads meta-data for certain model

```php
print_r(
    $metaData->readMetaDataIndex(
        new Robots(),
        0
    )
);
```

#### `reset()` { #mvcmodelmetadata-reset }

```php
public function reset(): void;
```

Resets internal meta-data in order to regenerate it

```php
$metaData->reset();
```

#### `setAutomaticCreateAttributes()` { #mvcmodelmetadata-setautomaticcreateattributes }

```php
public function setAutomaticCreateAttributes(
    ModelInterface $model,
    array $attributes
): void;
```

Set the attributes that must be ignored from the INSERT SQL generation

```php
$metaData->setAutomaticCreateAttributes(
    new Robots(),
    [
        "created_at" => true,
    ]
);
```

#### `setAutomaticUpdateAttributes()` { #mvcmodelmetadata-setautomaticupdateattributes }

```php
public function setAutomaticUpdateAttributes(
    ModelInterface $model,
    array $attributes
): void;
```

Set the attributes that must be ignored from the UPDATE SQL generation

```php
$metaData->setAutomaticUpdateAttributes(
    new Robots(),
    [
        "modified_at" => true,
    ]
);
```

#### `setDI()` { #mvcmodelmetadata-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the DependencyInjector container

#### `setEmptyStringAttributes()` { #mvcmodelmetadata-setemptystringattributes }

```php
public function setEmptyStringAttributes(
    ModelInterface $model,
    array $attributes
): void;
```

Set the attributes that allow empty string values

```php
$metaData->setEmptyStringAttributes(
    new Robots(),
    [
        "name" => true,
    ]
);
```

#### `setStrategy()` { #mvcmodelmetadata-setstrategy }

```php
public function setStrategy( StrategyInterface $strategy ): void;
```

Set the meta-data extraction strategy

#### `write()` { #mvcmodelmetadata-write }

```php
public function write(
    string $key,
    array $data
): void;
```

Writes the metadata to adapter

#### `writeMetaDataIndex()` { #mvcmodelmetadata-writemetadataindex }

```php
final public function writeMetaDataIndex(
    ModelInterface $model,
    int $index,
    mixed $data
): void;
```

Writes meta-data for certain model using a MODEL_* constant

```php
print_r(
    $metaData->writeColumnMapIndex(
        new Robots(),
        MetaData::MODELS_REVERSE_COLUMN_MAP,
        [
            "leName" => "name",
        ]
    )
);
```

<div class="api-group">Protected · 4</div>

#### `getArrVal()` { #mvcmodelmetadata-getarrval }

```php
protected function getArrVal(
    array $collection,
    mixed $index,
    mixed $defaultValue = null
): mixed;
```

@todo Remove this when we get traits

#### `initialize()` { #mvcmodelmetadata-initialize }

```php
final protected function initialize(
    ModelInterface $model,
    mixed $key,
    mixed $table,
    mixed $schema
);
```

Initialize old behaviour for compatability

#### `initializeColumnMap()` { #mvcmodelmetadata-initializecolumnmap }

```php
final protected function initializeColumnMap(
    ModelInterface $model,
    mixed $key
): bool;
```

Initialize ColumnMap for a certain table

#### `initializeMetaData()` { #mvcmodelmetadata-initializemetadata }

```php
final protected function initializeMetaData(
    ModelInterface $model,
    mixed $key
): bool;
```

Initialize the metadata for certain table


## Mvc\Model\MetaDataInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaDataInterface.zep){ .src-btn }

Phalcon\Mvc\Model\MetaDataInterface

Interface for Phalcon\Mvc\Model\MetaData

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\MetaDataInterface`**

</div>

__Uses__ `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\MetaData\Strategy\StrategyInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadatainterface-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAttributes( ModelInterface $model )</code>
<span class="desc">Returns table attributes names (fields)</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getautomaticcreateattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAutomaticCreateAttributes( ModelInterface $model )</code>
<span class="desc">Returns attributes that must be ignored from the INSERT SQL generation</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getautomaticupdateattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAutomaticUpdateAttributes( ModelInterface $model )</code>
<span class="desc">Returns attributes that must be ignored from the UPDATE SQL generation</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindTypes( ModelInterface $model )</code>
<span class="desc">Returns attributes and their bind data types</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getcolumnmap">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">getColumnMap( ModelInterface $model )</code>
<span class="desc">Returns the column map if any</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getdatatypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getDataTypes( ModelInterface $model )</code>
<span class="desc">Returns attributes and their data types</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getdatatypesnumeric">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getDataTypesNumeric( ModelInterface $model )</code>
<span class="desc">Returns attributes which types are numerical</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getdefaultvalues">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getDefaultValues( ModelInterface $model )</code>
<span class="desc">Returns attributes (which have default values) and their default values</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getemptystringattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getEmptyStringAttributes( ModelInterface $model )</code>
<span class="desc">Returns attributes allow empty strings</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getidentityfield">
<code class="vis vis-public">public</code>
<code class="ret">bool|string|null</code>
<code class="sig">getIdentityField( ModelInterface $model )</code>
<span class="desc">Returns the name of identity field (if one is present)</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getnonprimarykeyattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getNonPrimaryKeyAttributes( ModelInterface $model )</code>
<span class="desc">Returns an array of fields which are not part of the primary key</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getnotnullattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getNotNullAttributes( ModelInterface $model )</code>
<span class="desc">Returns an array of not null attributes</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getprimarykeyattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getPrimaryKeyAttributes( ModelInterface $model )</code>
<span class="desc">Returns an array of fields which are part of the primary key</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getreversecolumnmap">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">getReverseColumnMap( ModelInterface $model )</code>
<span class="desc">Returns the reverse column map if any</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-getstrategy">
<code class="vis vis-public">public</code>
<code class="ret">StrategyInterface</code>
<code class="sig">getStrategy()</code>
<span class="desc">Return the strategy to obtain the meta-data</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-hasattribute">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasAttribute(
    ModelInterface $model,
    string $attribute
)</code>
<span class="desc">Check if a model has certain attribute</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-isempty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isEmpty()</code>
<span class="desc">Checks if the internal meta-data container is empty</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-read">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">read( string $key )</code>
<span class="desc">Reads meta-data from the adapter</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-readcolumnmap">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">readColumnMap( ModelInterface $model )</code>
<span class="desc">Reads the ordered/reversed column map for certain model</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-readcolumnmapindex">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">readColumnMapIndex(
    ModelInterface $model,
    int $index
)</code>
<span class="desc">Reads column-map information for certain model using a MODEL_* constant</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-readmetadata">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">readMetaData( ModelInterface $model )</code>
<span class="desc">Reads meta-data for certain model</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-readmetadataindex">
<code class="vis vis-public">public</code>
<code class="ret">array|string|null</code>
<code class="sig">readMetaDataIndex(
    ModelInterface $model,
    int $index
)</code>
<span class="desc">Reads meta-data for certain model using a MODEL_* constant</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-reset">
<code class="vis vis-public">public</code>
<code class="sig">reset()</code>
<span class="desc">Resets internal meta-data in order to regenerate it</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-setautomaticcreateattributes">
<code class="vis vis-public">public</code>
<code class="sig">setAutomaticCreateAttributes(
    ModelInterface $model,
    array $attributes
)</code>
<span class="desc">Set the attributes that must be ignored from the INSERT SQL generation</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-setautomaticupdateattributes">
<code class="vis vis-public">public</code>
<code class="sig">setAutomaticUpdateAttributes(
    ModelInterface $model,
    array $attributes
)</code>
<span class="desc">Set the attributes that must be ignored from the UPDATE SQL generation</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-setemptystringattributes">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEmptyStringAttributes(
    ModelInterface $model,
    array $attributes
)</code>
<span class="desc">Set the attributes that allow empty string values</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-setstrategy">
<code class="vis vis-public">public</code>
<code class="sig">setStrategy( StrategyInterface $strategy )</code>
<span class="desc">Set the meta-data extraction strategy</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-write">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">write(
    string $key,
    array $data
)</code>
<span class="desc">Writes meta-data to the adapter</span>
</a>
<a class="api-item" href="#mvcmodelmetadatainterface-writemetadataindex">
<code class="vis vis-public">public</code>
<code class="sig">writeMetaDataIndex(
    ModelInterface $model,
    int $index,
    mixed $data
)</code>
<span class="desc">Writes meta-data for certain model using a MODEL_* constant</span>
</a>
</div>

### Methods

<div class="api-group">Public · 29</div>

#### `getAttributes()` { #mvcmodelmetadatainterface-getattributes }

```php
public function getAttributes( ModelInterface $model ): array;
```

Returns table attributes names (fields)

#### `getAutomaticCreateAttributes()` { #mvcmodelmetadatainterface-getautomaticcreateattributes }

```php
public function getAutomaticCreateAttributes( ModelInterface $model ): array;
```

Returns attributes that must be ignored from the INSERT SQL generation

#### `getAutomaticUpdateAttributes()` { #mvcmodelmetadatainterface-getautomaticupdateattributes }

```php
public function getAutomaticUpdateAttributes( ModelInterface $model ): array;
```

Returns attributes that must be ignored from the UPDATE SQL generation

#### `getBindTypes()` { #mvcmodelmetadatainterface-getbindtypes }

```php
public function getBindTypes( ModelInterface $model ): array;
```

Returns attributes and their bind data types

#### `getColumnMap()` { #mvcmodelmetadatainterface-getcolumnmap }

```php
public function getColumnMap( ModelInterface $model ): array|null;
```

Returns the column map if any

#### `getDataTypes()` { #mvcmodelmetadatainterface-getdatatypes }

```php
public function getDataTypes( ModelInterface $model ): array;
```

Returns attributes and their data types

#### `getDataTypesNumeric()` { #mvcmodelmetadatainterface-getdatatypesnumeric }

```php
public function getDataTypesNumeric( ModelInterface $model ): array;
```

Returns attributes which types are numerical

#### `getDefaultValues()` { #mvcmodelmetadatainterface-getdefaultvalues }

```php
public function getDefaultValues( ModelInterface $model ): array;
```

Returns attributes (which have default values) and their default values

#### `getEmptyStringAttributes()` { #mvcmodelmetadatainterface-getemptystringattributes }

```php
public function getEmptyStringAttributes( ModelInterface $model ): array;
```

Returns attributes allow empty strings

#### `getIdentityField()` { #mvcmodelmetadatainterface-getidentityfield }

```php
public function getIdentityField( ModelInterface $model ): bool|string|null;
```

Returns the name of identity field (if one is present)

#### `getNonPrimaryKeyAttributes()` { #mvcmodelmetadatainterface-getnonprimarykeyattributes }

```php
public function getNonPrimaryKeyAttributes( ModelInterface $model ): array;
```

Returns an array of fields which are not part of the primary key

#### `getNotNullAttributes()` { #mvcmodelmetadatainterface-getnotnullattributes }

```php
public function getNotNullAttributes( ModelInterface $model ): array;
```

Returns an array of not null attributes

#### `getPrimaryKeyAttributes()` { #mvcmodelmetadatainterface-getprimarykeyattributes }

```php
public function getPrimaryKeyAttributes( ModelInterface $model ): array;
```

Returns an array of fields which are part of the primary key

#### `getReverseColumnMap()` { #mvcmodelmetadatainterface-getreversecolumnmap }

```php
public function getReverseColumnMap( ModelInterface $model ): array|null;
```

Returns the reverse column map if any

#### `getStrategy()` { #mvcmodelmetadatainterface-getstrategy }

```php
public function getStrategy(): StrategyInterface;
```

Return the strategy to obtain the meta-data

#### `hasAttribute()` { #mvcmodelmetadatainterface-hasattribute }

```php
public function hasAttribute(
    ModelInterface $model,
    string $attribute
): bool;
```

Check if a model has certain attribute

#### `isEmpty()` { #mvcmodelmetadatainterface-isempty }

```php
public function isEmpty(): bool;
```

Checks if the internal meta-data container is empty

#### `read()` { #mvcmodelmetadatainterface-read }

```php
public function read( string $key ): array|null;
```

Reads meta-data from the adapter

#### `readColumnMap()` { #mvcmodelmetadatainterface-readcolumnmap }

```php
public function readColumnMap( ModelInterface $model ): array|null;
```

Reads the ordered/reversed column map for certain model

#### `readColumnMapIndex()` { #mvcmodelmetadatainterface-readcolumnmapindex }

```php
public function readColumnMapIndex(
    ModelInterface $model,
    int $index
): array|null;
```

Reads column-map information for certain model using a MODEL_* constant

#### `readMetaData()` { #mvcmodelmetadatainterface-readmetadata }

```php
public function readMetaData( ModelInterface $model ): array|null;
```

Reads meta-data for certain model

#### `readMetaDataIndex()` { #mvcmodelmetadatainterface-readmetadataindex }

```php
public function readMetaDataIndex(
    ModelInterface $model,
    int $index
): array|string|null;
```

Reads meta-data for certain model using a MODEL_* constant

#### `reset()` { #mvcmodelmetadatainterface-reset }

```php
public function reset();
```

Resets internal meta-data in order to regenerate it

#### `setAutomaticCreateAttributes()` { #mvcmodelmetadatainterface-setautomaticcreateattributes }

```php
public function setAutomaticCreateAttributes(
    ModelInterface $model,
    array $attributes
);
```

Set the attributes that must be ignored from the INSERT SQL generation

#### `setAutomaticUpdateAttributes()` { #mvcmodelmetadatainterface-setautomaticupdateattributes }

```php
public function setAutomaticUpdateAttributes(
    ModelInterface $model,
    array $attributes
);
```

Set the attributes that must be ignored from the UPDATE SQL generation

#### `setEmptyStringAttributes()` { #mvcmodelmetadatainterface-setemptystringattributes }

```php
public function setEmptyStringAttributes(
    ModelInterface $model,
    array $attributes
): void;
```

Set the attributes that allow empty string values

#### `setStrategy()` { #mvcmodelmetadatainterface-setstrategy }

```php
public function setStrategy( StrategyInterface $strategy );
```

Set the meta-data extraction strategy

#### `write()` { #mvcmodelmetadatainterface-write }

```php
public function write(
    string $key,
    array $data
): void;
```

Writes meta-data to the adapter

#### `writeMetaDataIndex()` { #mvcmodelmetadatainterface-writemetadataindex }

```php
public function writeMetaDataIndex(
    ModelInterface $model,
    int $index,
    mixed $data
);
```

Writes meta-data for certain model using a MODEL_* constant


## Mvc\Model\MetaData\Apcu

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Apcu.zep){ .src-btn }

Phalcon\Mvc\Model\MetaData\Apcu

Stores model meta-data in the APCu cache. Data will erased if the web server is restarted

By default meta-data is stored for 48 hours (172800 seconds)

You can query the meta-data by printing apcu_fetch('$PMM$') or apcu_fetch('$PMM$my-app-id')

```php
$metaData = new \Phalcon\Mvc\Model\MetaData\Apcu(
    [
        "prefix"   => "my-app-id",
        "lifetime" => 86400,
    ]
);
```

<div class="api-tree" markdown>

- [`Phalcon\Mvc\Model\MetaData`](#mvcmodelmetadata)
    - **`Phalcon\Mvc\Model\MetaData\Apcu`**

</div>

__Uses__ `Phalcon\Cache\AdapterFactory` · `Phalcon\Mvc\Model\MetaData`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataapcu-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    AdapterFactory $factory,
    array $options = null
)</code>
<span class="desc">Phalcon\Mvc\Model\MetaData\Apcu constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataapcu-__construct }

```php
public function __construct(
    AdapterFactory $factory,
    array $options = null
);
```

Phalcon\Mvc\Model\MetaData\Apcu constructor


## Mvc\Model\MetaData\Exceptions\CannotObtainTableColumns

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/CannotObtainTableColumns.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\CannotObtainTableColumns`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionscannotobtaintablecolumns-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $completeTable,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionscannotobtaintablecolumns-__construct }

```php
public function __construct(
    string $completeTable,
    string $className
);
```


## Mvc\Model\MetaData\Exceptions\ColumnMapNotArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/ColumnMapNotArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\ColumnMapNotArray`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionscolumnmapnotarray-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionscolumnmapnotarray-__construct }

```php
public function __construct();
```


## Mvc\Model\MetaData\Exceptions\ContainerRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/ContainerRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\ContainerRequired`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionscontainerrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionscontainerrequired-__construct }

```php
public function __construct();
```


## Mvc\Model\MetaData\Exceptions\CorruptedMetaData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/CorruptedMetaData.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\CorruptedMetaData`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionscorruptedmetadata-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionscorruptedmetadata-__construct }

```php
public function __construct();
```


## Mvc\Model\MetaData\Exceptions\InvalidContainer

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/InvalidContainer.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\InvalidContainer`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionsinvalidcontainer-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionsinvalidcontainer-__construct }

```php
public function __construct();
```


## Mvc\Model\MetaData\Exceptions\InvalidMetaDataForModel

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/InvalidMetaDataForModel.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\InvalidMetaDataForModel`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionsinvalidmetadataformodel-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $modelName )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionsinvalidmetadataformodel-__construct }

```php
public function __construct( string $modelName );
```


## Mvc\Model\MetaData\Exceptions\MetaDataDirectoryNotWritable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/MetaDataDirectoryNotWritable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\MetaDataDirectoryNotWritable`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionsmetadatadirectorynotwritable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionsmetadatadirectorynotwritable-__construct }

```php
public function __construct();
```


## Mvc\Model\MetaData\Exceptions\MetaDataStrategyFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/MetaDataStrategyFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\MetaDataStrategyFailed`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionsmetadatastrategyfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $message )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionsmetadatastrategyfailed-__construct }

```php
public function __construct( string $message );
```


## Mvc\Model\MetaData\Exceptions\NoAnnotationsForClass

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/NoAnnotationsForClass.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\NoAnnotationsForClass`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionsnoannotationsforclass-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionsnoannotationsforclass-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\MetaData\Exceptions\NoPropertyAnnotationsForClass

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/NoPropertyAnnotationsForClass.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\NoPropertyAnnotationsForClass`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionsnopropertyannotationsforclass-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionsnopropertyannotationsforclass-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\MetaData\Exceptions\TableNotInDatabase

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Exceptions/TableNotInDatabase.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\MetaData\Exceptions\TableNotInDatabase`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataexceptionstablenotindatabase-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $completeTable,
    string $className
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelmetadataexceptionstablenotindatabase-__construct }

```php
public function __construct(
    string $completeTable,
    string $className
);
```


## Mvc\Model\MetaData\Libmemcached

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Libmemcached.zep){ .src-btn }

Phalcon\Mvc\Model\MetaData\Libmemcached

Stores model meta-data in the Memcache.

By default meta-data is stored for 48 hours (172800 seconds)

<div class="api-tree" markdown>

- [`Phalcon\Mvc\Model\MetaData`](#mvcmodelmetadata)
    - **`Phalcon\Mvc\Model\MetaData\Libmemcached`**

</div>

__Uses__ `Phalcon\Cache\AdapterFactory` · `Phalcon\Mvc\Model\MetaData`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadatalibmemcached-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    AdapterFactory $factory,
    array $options = []
)</code>
<span class="desc">Phalcon\Mvc\Model\MetaData\Libmemcached constructor</span>
</a>
<a class="api-item" href="#mvcmodelmetadatalibmemcached-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Flush Memcache data and resets internal meta-data in order to regenerate it</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #mvcmodelmetadatalibmemcached-__construct }

```php
public function __construct(
    AdapterFactory $factory,
    array $options = []
);
```

Phalcon\Mvc\Model\MetaData\Libmemcached constructor

#### `reset()` { #mvcmodelmetadatalibmemcached-reset }

```php
public function reset(): void;
```

Flush Memcache data and resets internal meta-data in order to regenerate it


## Mvc\Model\MetaData\Memory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Memory.zep){ .src-btn }

Phalcon\Mvc\Model\MetaData\Memory

Stores model meta-data in memory. Data will be erased when the request finishes

<div class="api-tree" markdown>

- [`Phalcon\Mvc\Model\MetaData`](#mvcmodelmetadata)
    - **`Phalcon\Mvc\Model\MetaData\Memory`**

</div>

__Uses__ `Phalcon\Mvc\Model\MetaData`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadatamemory-read">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">read( mixed $key )</code>
<span class="desc">Reads the meta-data from temporal memory</span>
</a>
<a class="api-item" href="#mvcmodelmetadatamemory-write">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">write(
    mixed $key,
    array $data
)</code>
<span class="desc">Writes the meta-data to temporal memory</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `read()` { #mvcmodelmetadatamemory-read }

```php
public function read( mixed $key ): array|null;
```

Reads the meta-data from temporal memory

#### `write()` { #mvcmodelmetadatamemory-write }

```php
public function write(
    mixed $key,
    array $data
): void;
```

Writes the meta-data to temporal memory


## Mvc\Model\MetaData\Redis

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Redis.zep){ .src-btn }

Phalcon\Mvc\Model\MetaData\Redis

Stores model meta-data in the Redis.

By default meta-data is stored for 48 hours (172800 seconds)

```php
use Phalcon\Mvc\Model\MetaData\Redis;

$metaData = new Redis(
    [
        "host"       => "127.0.0.1",
        "port"       => 6379,
        "persistent" => 0,
        "lifetime"   => 172800,
        "index"      => 2,
    ]
);
```

<div class="api-tree" markdown>

- [`Phalcon\Mvc\Model\MetaData`](#mvcmodelmetadata)
    - **`Phalcon\Mvc\Model\MetaData\Redis`**

</div>

__Uses__ `Phalcon\Cache\AdapterFactory` · `Phalcon\Mvc\Model\MetaData`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadataredis-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    AdapterFactory $factory,
    array $options = []
)</code>
<span class="desc">Phalcon\Mvc\Model\MetaData\Redis constructor</span>
</a>
<a class="api-item" href="#mvcmodelmetadataredis-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Flush Redis data and resets internal meta-data in order to regenerate it</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #mvcmodelmetadataredis-__construct }

```php
public function __construct(
    AdapterFactory $factory,
    array $options = []
);
```

Phalcon\Mvc\Model\MetaData\Redis constructor

#### `reset()` { #mvcmodelmetadataredis-reset }

```php
public function reset(): void;
```

Flush Redis data and resets internal meta-data in order to regenerate it


## Mvc\Model\MetaData\Strategy\Annotations

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Strategy/Annotations.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\MetaData\Strategy\Annotations`** — implements [`Phalcon\Mvc\Model\MetaData\Strategy\StrategyInterface`](#mvcmodelmetadatastrategystrategyinterface)

</div>

__Uses__ `Phalcon\Db\Column` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\MetaData` · `Phalcon\Mvc\Model\MetaData\Exceptions\InvalidContainer` · `Phalcon\Mvc\Model\MetaData\Exceptions\NoAnnotationsForClass` · `Phalcon\Mvc\Model\MetaData\Exceptions\NoPropertyAnnotationsForClass`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadatastrategyannotations-getcolumnmaps">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getColumnMaps(
    ModelInterface $model,
    DiInterface $container
)</code>
<span class="desc">Read the model&#039;s column map, this can&#039;t be inferred</span>
</a>
<a class="api-item" href="#mvcmodelmetadatastrategyannotations-getmetadata">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getMetaData(
    ModelInterface $model,
    DiInterface $container
)</code>
<span class="desc">The meta-data is obtained by reading the column descriptions from the database information schema</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getColumnMaps()` { #mvcmodelmetadatastrategyannotations-getcolumnmaps }

```php
final public function getColumnMaps(
    ModelInterface $model,
    DiInterface $container
): array;
```

Read the model's column map, this can't be inferred

#### `getMetaData()` { #mvcmodelmetadatastrategyannotations-getmetadata }

```php
final public function getMetaData(
    ModelInterface $model,
    DiInterface $container
): array;
```

The meta-data is obtained by reading the column descriptions from the database information schema


## Mvc\Model\MetaData\Strategy\Introspection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Strategy/Introspection.zep){ .src-btn }

Queries the table meta-data in order to introspect the model's metadata

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\MetaData\Strategy\Introspection`** — implements [`Phalcon\Mvc\Model\MetaData\Strategy\StrategyInterface`](#mvcmodelmetadatastrategystrategyinterface)

</div>

__Uses__ `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\MetaData` · `Phalcon\Mvc\Model\MetaData\Exceptions\CannotObtainTableColumns` · `Phalcon\Mvc\Model\MetaData\Exceptions\ColumnMapNotArray` · `Phalcon\Mvc\Model\MetaData\Exceptions\TableNotInDatabase`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadatastrategyintrospection-getcolumnmaps">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getColumnMaps(
    ModelInterface $model,
    DiInterface $container
)</code>
<span class="desc">Read the model&#039;s column map, this can&#039;t be inferred</span>
</a>
<a class="api-item" href="#mvcmodelmetadatastrategyintrospection-getmetadata">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getMetaData(
    ModelInterface $model,
    DiInterface $container
)</code>
<span class="desc">The meta-data is obtained by reading the column descriptions from the database information schema</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getColumnMaps()` { #mvcmodelmetadatastrategyintrospection-getcolumnmaps }

```php
final public function getColumnMaps(
    ModelInterface $model,
    DiInterface $container
): array;
```

Read the model's column map, this can't be inferred

#### `getMetaData()` { #mvcmodelmetadatastrategyintrospection-getmetadata }

```php
final public function getMetaData(
    ModelInterface $model,
    DiInterface $container
): array;
```

The meta-data is obtained by reading the column descriptions from the database information schema


## Mvc\Model\MetaData\Strategy\StrategyInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Strategy/StrategyInterface.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\MetaData\Strategy\StrategyInterface`**

</div>

__Uses__ `Phalcon\Di\DiInterface` · `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadatastrategystrategyinterface-getcolumnmaps">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getColumnMaps(
    ModelInterface $model,
    DiInterface $container
)</code>
<span class="desc">Read the model&#039;s column map, this can&#039;t be inferred</span>
</a>
<a class="api-item" href="#mvcmodelmetadatastrategystrategyinterface-getmetadata">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getMetaData(
    ModelInterface $model,
    DiInterface $container
)</code>
<span class="desc">The meta-data is obtained by reading the column descriptions from the database information schema</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getColumnMaps()` { #mvcmodelmetadatastrategystrategyinterface-getcolumnmaps }

```php
public function getColumnMaps(
    ModelInterface $model,
    DiInterface $container
): array;
```

Read the model's column map, this can't be inferred

@todo Not implemented

#### `getMetaData()` { #mvcmodelmetadatastrategystrategyinterface-getmetadata }

```php
public function getMetaData(
    ModelInterface $model,
    DiInterface $container
): array;
```

The meta-data is obtained by reading the column descriptions from the database information schema


## Mvc\Model\MetaData\Stream

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/MetaData/Stream.zep){ .src-btn }

Phalcon\Mvc\Model\MetaData\Stream

Stores model meta-data in PHP files.

```php
$metaData = new \Phalcon\Mvc\Model\MetaData\Files(
    [
        "metaDataDir" => "app/cache/metadata/",
    ]
);
```

<div class="api-tree" markdown>

- [`Phalcon\Mvc\Model\MetaData`](#mvcmodelmetadata)
    - **`Phalcon\Mvc\Model\MetaData\Stream`**

</div>

__Uses__ `Phalcon\Mvc\Model\MetaData` · `Phalcon\Mvc\Model\MetaData\Exceptions\MetaDataDirectoryNotWritable` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelmetadatastream-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $options = [] )</code>
<span class="desc">Phalcon\Mvc\Model\MetaData\Files constructor</span>
</a>
<a class="api-item" href="#mvcmodelmetadatastream-read">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig">read( mixed $key )</code>
<span class="desc">Reads meta-data from files</span>
</a>
<a class="api-item" href="#mvcmodelmetadatastream-write">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">write(
    mixed $key,
    array $data
)</code>
<span class="desc">Writes the meta-data to files</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$metaDataDir = "./"` `string`

</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #mvcmodelmetadatastream-__construct }

```php
public function __construct( array $options = [] );
```

Phalcon\Mvc\Model\MetaData\Files constructor

#### `read()` { #mvcmodelmetadatastream-read }

```php
public function read( mixed $key ): array|null;
```

Reads meta-data from files

#### `write()` { #mvcmodelmetadatastream-write }

```php
public function write(
    mixed $key,
    array $data
): void;
```

Writes the meta-data to files


## Mvc\Model\Query

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query.zep){ .src-btn }

Phalcon\Mvc\Model\Query

This class takes a PHQL intermediate representation and executes it.

```php
$phql = "SELECT c.price*0.16 AS taxes, c.* FROM Cars AS c JOIN Brands AS b
         WHERE b.name = :name: ORDER BY c.name";

$result = $manager->executeQuery(
    $phql,
    [
        "name" => "Lamborghini",
    ]
);

foreach ($result as $row) {
    echo "Name: ",  $row->cars->name, "\n";
    echo "Price: ", $row->cars->price, "\n";
    echo "Taxes: ", $row->taxes, "\n";
}

// with transaction
use Phalcon\Mvc\Model\Query;
use Phalcon\Mvc\Model\Transaction;

// $di needs to have the service "db" registered for this to work
$di = Phalcon\Di\FactoryDefault::getDefault();

$phql = 'SELECT * FROM robot';

$myTransaction = new Transaction($di);
$myTransaction->begin();

$newRobot = new Robot();
$newRobot->setTransaction($myTransaction);
$newRobot->type = "mechanical";
$newRobot->name = "Astro Boy";
$newRobot->year = 1952;
$newRobot->save();

$queryWithTransaction = new Query($phql, $di);
$queryWithTransaction->setTransaction($myTransaction);

$resultWithEntries = $queryWithTransaction->execute();

$queryWithOutTransaction = new Query($phql, $di);
$resultWithOutEntries = $queryWithTransaction->execute();
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Query`** — implements [`Phalcon\Mvc\Model\QueryInterface`](#mvcmodelqueryinterface), [`Phalcon\Di\InjectionAwareInterface`](phalcon_di.md#diinjectionawareinterface)

</div>

__Uses__ `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Db\Column` · `Phalcon\Db\DialectInterface` · `Phalcon\Db\RawValue` · `Phalcon\Db\ResultInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Query\Exceptions\AmbiguousColumn` · `Phalcon\Mvc\Model\Query\Exceptions\AmbiguousJoinRelation` · `Phalcon\Mvc\Model\Query\Exceptions\BindParameterNotInPlaceholders` · `Phalcon\Mvc\Model\Query\Exceptions\BindTypeRequiresArray` · `Phalcon\Mvc\Model\Query\Exceptions\BindValueRequired` · `Phalcon\Mvc\Model\Query\Exceptions\ColumnNotInDomain` · `Phalcon\Mvc\Model\Query\Exceptions\ColumnNotInSelectedModels` · `Phalcon\Mvc\Model\Query\Exceptions\CorruptedAst` · `Phalcon\Mvc\Model\Query\Exceptions\CorruptedDeleteAst` · `Phalcon\Mvc\Model\Query\Exceptions\CorruptedInsertAst` · `Phalcon\Mvc\Model\Query\Exceptions\CorruptedSelectAst` · `Phalcon\Mvc\Model\Query\Exceptions\CorruptedUpdateAst` · `Phalcon\Mvc\Model\Query\Exceptions\DeleteMultipleNotSupported` · `Phalcon\Mvc\Model\Query\Exceptions\DuplicateAlias` · `Phalcon\Mvc\Model\Query\Exceptions\EmptyArrayPlaceholderValue` · `Phalcon\Mvc\Model\Query\Exceptions\InsertColumnCountMismatch` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidCachedResultset` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidCachingOptions` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidColumnDefinition` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidInjectedManager` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidInjectedMetadata` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidQueryCacheService` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidResultsetClass` · `Phalcon\Mvc\Model\Query\Exceptions\JoinAliasAlreadyUsed` · `Phalcon\Mvc\Model\Query\Exceptions\JoinFieldCountMismatch` · `Phalcon\Mvc\Model\Query\Exceptions\MissingCacheKey` · `Phalcon\Mvc\Model\Query\Exceptions\MissingMetaData` · `Phalcon\Mvc\Model\Query\Exceptions\MissingModelAttribute` · `Phalcon\Mvc\Model\Query\Exceptions\MissingModelsManager` · `Phalcon\Mvc\Model\Query\Exceptions\MixedDatabaseSystems` · `Phalcon\Mvc\Model\Query\Exceptions\ModelSourceNotFound` · `Phalcon\Mvc\Model\Query\Exceptions\ModelsListNotLoaded` · `Phalcon\Mvc\Model\Query\Exceptions\MultipleSqlStatementsNotSupported` · `Phalcon\Mvc\Model\Query\Exceptions\NoModelForAlias` · `Phalcon\Mvc\Model\Query\Exceptions\PhqlColumnNotInMap` · `Phalcon\Mvc\Model\Query\Exceptions\ReadConnectionMissing` · `Phalcon\Mvc\Model\Query\Exceptions\RelationshipNotFound` · `Phalcon\Mvc\Model\Query\Exceptions\ResultsetClassNotFound` · `Phalcon\Mvc\Model\Query\Exceptions\ResultsetNonCacheable` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownBindType` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownColumnType` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownJoinType` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownModelOrAlias` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpression` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpressionType` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlStatement` · `Phalcon\Mvc\Model\Query\Exceptions\UpdateMultipleNotSupported` · `Phalcon\Mvc\Model\Query\Exceptions\WriteConnectionMissing` · `Phalcon\Mvc\Model\Query\Lang` · `Phalcon\Mvc\Model\Query\Status` · `Phalcon\Mvc\Model\Query\StatusInterface` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Mvc\Model\Resultset\Complex` · `Phalcon\Mvc\Model\Resultset\Simple` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelquery-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $phql = null,
    DiInterface $container = null,
    array $options = []
)</code>
<span class="desc">Phalcon\Mvc\Model\Query constructor</span>
</a>
<a class="api-item" href="#mvcmodelquery-cache">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">cache( array $cacheOptions )</code>
<span class="desc">Sets the cache parameters of the query</span>
</a>
<a class="api-item" href="#mvcmodelquery-clean">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">clean()</code>
<span class="desc">Destroys the internal PHQL cache</span>
</a>
<a class="api-item" href="#mvcmodelquery-execute">
<code class="vis vis-public">public</code>
<code class="sig">execute(
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Executes a parsed PHQL statement</span>
</a>
<a class="api-item" href="#mvcmodelquery-getbindparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindParams()</code>
<span class="desc">Returns default bind params</span>
</a>
<a class="api-item" href="#mvcmodelquery-getbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindTypes()</code>
<span class="desc">Returns default bind types</span>
</a>
<a class="api-item" href="#mvcmodelquery-getcache">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getCache()</code>
<span class="desc">Returns the current cache backend instance</span>
</a>
<a class="api-item" href="#mvcmodelquery-getcacheoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getCacheOptions()</code>
<span class="desc">Returns the current cache options</span>
</a>
<a class="api-item" href="#mvcmodelquery-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Returns the dependency injection container</span>
</a>
<a class="api-item" href="#mvcmodelquery-getintermediate">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getIntermediate()</code>
<span class="desc">Returns the intermediate representation of the PHQL statement</span>
</a>
<a class="api-item" href="#mvcmodelquery-getsingleresult">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">getSingleResult(
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Executes the query returning the first result</span>
</a>
<a class="api-item" href="#mvcmodelquery-getsql">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSql()</code>
<span class="desc">Returns an associative array with the SQL to be generated by the internal PHQL,</span>
</a>
<a class="api-item" href="#mvcmodelquery-gettransaction">
<code class="vis vis-public">public</code>
<code class="ret">TransactionInterface|null</code>
<code class="sig">getTransaction()</code>
</a>
<a class="api-item" href="#mvcmodelquery-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getType()</code>
<span class="desc">Gets the type of PHQL statement executed</span>
</a>
<a class="api-item" href="#mvcmodelquery-getuniquerow">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">getUniqueRow()</code>
<span class="desc">Check if the query is programmed to get only the first row in the</span>
</a>
<a class="api-item" href="#mvcmodelquery-parse">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">parse()</code>
<span class="desc">Parses the intermediate code produced by Phalcon\Mvc\Model\Query\Lang</span>
</a>
<a class="api-item" href="#mvcmodelquery-setbindparams">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setBindParams(
    array $bindParams,
    bool $merge = false
)</code>
<span class="desc">Set default bind parameters</span>
</a>
<a class="api-item" href="#mvcmodelquery-setbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setBindTypes(
    array $bindTypes,
    bool $merge = false
)</code>
<span class="desc">Set default bind parameters</span>
</a>
<a class="api-item" href="#mvcmodelquery-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the dependency injection container</span>
</a>
<a class="api-item" href="#mvcmodelquery-setintermediate">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setIntermediate( array $intermediate )</code>
<span class="desc">Allows to set the IR to be executed</span>
</a>
<a class="api-item" href="#mvcmodelquery-setsharedlock">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setSharedLock( bool $sharedLock = false )</code>
<span class="desc">Set SHARED LOCK clause</span>
</a>
<a class="api-item" href="#mvcmodelquery-settransaction">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setTransaction( TransactionInterface $transaction )</code>
<span class="desc">allows to wrap a transaction around all queries</span>
</a>
<a class="api-item" href="#mvcmodelquery-settype">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setType( int $type )</code>
<span class="desc">Sets the type of PHQL statement to be executed</span>
</a>
<a class="api-item" href="#mvcmodelquery-setuniquerow">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setUniqueRow( bool $uniqueRow )</code>
<span class="desc">Tells to the query if only the first row in the resultset must be</span>
</a>
<a class="api-item" href="#mvcmodelquery-executedelete">
<code class="vis vis-protected">protected</code>
<code class="ret">StatusInterface</code>
<code class="sig">executeDelete(
    array $intermediate,
    array $bindParams,
    array $bindTypes
)</code>
<span class="desc">Executes the DELETE intermediate representation producing a</span>
</a>
<a class="api-item" href="#mvcmodelquery-executeinsert">
<code class="vis vis-protected">protected</code>
<code class="ret">StatusInterface</code>
<code class="sig">executeInsert(
    array $intermediate,
    array $bindParams,
    array $bindTypes
)</code>
<span class="desc">Executes the INSERT intermediate representation producing a</span>
</a>
<a class="api-item" href="#mvcmodelquery-executeselect">
<code class="vis vis-protected">protected</code>
<code class="ret">ResultsetInterface|array</code>
<code class="sig">executeSelect(
    array $intermediate,
    array $bindParams,
    array $bindTypes,
    bool $simulate = false
)</code>
<span class="desc">Executes the SELECT intermediate representation producing a</span>
</a>
<a class="api-item" href="#mvcmodelquery-executeupdate">
<code class="vis vis-protected">protected</code>
<code class="ret">StatusInterface</code>
<code class="sig">executeUpdate(
    array $intermediate,
    array $bindParams,
    array $bindTypes
)</code>
<span class="desc">Executes the UPDATE intermediate representation producing a</span>
</a>
<a class="api-item" href="#mvcmodelquery-getcallargument">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getCallArgument( array $argument )</code>
<span class="desc">Resolves an expression in a single call argument</span>
</a>
<a class="api-item" href="#mvcmodelquery-getcaseexpression">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getCaseExpression( array $expr )</code>
<span class="desc">Resolves an expression in a single call argument</span>
</a>
<a class="api-item" href="#mvcmodelquery-getexpression">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getExpression(
    array $expr,
    bool $quoting = true
)</code>
<span class="desc">Resolves an expression from its intermediate code into an array</span>
</a>
<a class="api-item" href="#mvcmodelquery-getfunctioncall">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getFunctionCall( array $expr )</code>
<span class="desc">Resolves an expression in a single call argument</span>
</a>
<a class="api-item" href="#mvcmodelquery-getgroupclause">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getGroupClause( array $group )</code>
<span class="desc">Returns a processed group clause for a SELECT statement</span>
</a>
<a class="api-item" href="#mvcmodelquery-getjoin">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getJoin(
    ManagerInterface $manager,
    array $join
)</code>
<span class="desc">Resolves a JOIN clause checking if the associated models exist</span>
</a>
<a class="api-item" href="#mvcmodelquery-getjointype">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getJoinType( array $join )</code>
<span class="desc">Resolves a JOIN type</span>
</a>
<a class="api-item" href="#mvcmodelquery-getjoins">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getJoins( array $select )</code>
<span class="desc">Processes the JOINs in the query returning an internal representation for</span>
</a>
<a class="api-item" href="#mvcmodelquery-getlimitclause">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getLimitClause( array $limitClause )</code>
<span class="desc">Returns a processed limit clause for a SELECT statement</span>
</a>
<a class="api-item" href="#mvcmodelquery-getmultijoin">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getMultiJoin(
    string $joinType,
    mixed $joinSource,
    string $modelAlias,
    string $joinAlias,
    RelationInterface $relation
)</code>
<span class="desc">Resolves joins involving many-to-many relations</span>
</a>
<a class="api-item" href="#mvcmodelquery-getorderclause">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getOrderClause( mixed $order )</code>
<span class="desc">Returns a processed order clause for a SELECT statement</span>
</a>
<a class="api-item" href="#mvcmodelquery-getqualified">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getQualified( array $expr )</code>
<span class="desc">Replaces the model&#039;s name to its source name in a qualified-name</span>
</a>
<a class="api-item" href="#mvcmodelquery-getreadconnection">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getReadConnection(
    ModelInterface $model,
    array $intermediate = null,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Gets the read connection from the model if there is no transaction set</span>
</a>
<a class="api-item" href="#mvcmodelquery-getrelatedrecords">
<code class="vis vis-protected">protected</code>
<code class="ret">ResultsetInterface</code>
<code class="sig">getRelatedRecords(
    ModelInterface $model,
    array $intermediate,
    array $bindParams,
    array $bindTypes
)</code>
<span class="desc">Query the records on which the UPDATE/DELETE operation will be done</span>
</a>
<a class="api-item" href="#mvcmodelquery-getselectcolumn">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getSelectColumn( array $column )</code>
<span class="desc">Resolves a column from its intermediate representation into an array</span>
</a>
<a class="api-item" href="#mvcmodelquery-getsinglejoin">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getSingleJoin(
    string $joinType,
    mixed $joinSource,
    string $modelAlias,
    string $joinAlias,
    RelationInterface $relation
)</code>
<span class="desc">Resolves joins involving has-one/belongs-to/has-many relations</span>
</a>
<a class="api-item" href="#mvcmodelquery-gettable">
<code class="vis vis-protected">protected</code>
<code class="sig">getTable(
    ManagerInterface $manager,
    array $qualifiedName
)</code>
<span class="desc">Resolves a table in a SELECT statement checking if the model exists</span>
</a>
<a class="api-item" href="#mvcmodelquery-getwriteconnection">
<code class="vis vis-protected">protected</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getWriteConnection(
    ModelInterface $model,
    array $intermediate = null,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Gets the write connection from the model if there is no transaction</span>
</a>
<a class="api-item" href="#mvcmodelquery-preparedelete">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">prepareDelete()</code>
<span class="desc">Analyzes a DELETE intermediate code and produces an array to be executed</span>
</a>
<a class="api-item" href="#mvcmodelquery-prepareinsert">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">prepareInsert()</code>
<span class="desc">Analyzes an INSERT intermediate code and produces an array to be executed</span>
</a>
<a class="api-item" href="#mvcmodelquery-prepareselect">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">prepareSelect(
    mixed $ast = null,
    bool $merge = false
)</code>
<span class="desc">Analyzes a SELECT intermediate code and produces an array to be executed later</span>
</a>
<a class="api-item" href="#mvcmodelquery-prepareupdate">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">prepareUpdate()</code>
<span class="desc">Analyzes an UPDATE intermediate code and produces an array to be executed</span>
</a>
<a class="api-item" href="#mvcmodelquery-refreshschemasinintermediate">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">refreshSchemasInIntermediate( array $irPhql )</code>
<span class="desc">Refreshes the schema/source of every model referenced in a cached</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `TYPE_DELETE = 303` `int`

-   `TYPE_INSERT = 306` `int`

-   `TYPE_SELECT = 309` `int`

-   `TYPE_UPDATE = 300` `int`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$ast` `array`

-   `protected`{ .vis-protected } `$bindParams = []` `array`

-   `protected`{ .vis-protected } `$bindTypes = []` `array`

-   `protected`{ .vis-protected } `$cache = null` `mixed|null`

-   `protected`{ .vis-protected } `$cacheOptions` `array|null`

-   `protected`{ .vis-protected } `$container = null` `DiInterface|null`

-   `protected`{ .vis-protected } `$enableImplicitJoins` `bool`

-   `protected`{ .vis-protected } `$intermediate` `array`

-   `protected`{ .vis-protected } `$internalPhqlCache` `array|null`

-   `protected`{ .vis-protected } `$manager = null` `\Phalcon\Mvc\Model\ManagerInterface|null`

-   `protected`{ .vis-protected } `$metaData = null` `\Phalcon\Mvc\Model\MetaDataInterface|null`

-   `protected`{ .vis-protected } `$models = []` `array`

-   `protected`{ .vis-protected } `$modelsInstances = []` `array`

-   `protected`{ .vis-protected } `$nestingLevel = -1` `int`

-   `protected`{ .vis-protected } `$phql = null` `string|null`

-   `protected`{ .vis-protected } `$sharedLock = false` `bool`

-   `protected`{ .vis-protected } `$sqlAliases = []` `array`

-   `protected`{ .vis-protected } `$sqlAliasesModels = []` `array`

-   `protected`{ .vis-protected } `$sqlAliasesModelsInstances = []` `array`

-   `protected`{ .vis-protected } `$sqlColumnAliases = []` `array`

-   `protected`{ .vis-protected } `$sqlModelsAliases = []` `array`

-   `protected`{ .vis-protected } `$transaction = null` `TransactionInterface|null`

    TransactionInterface so that the query can wrap a transaction
    around batch updates and intermediate selects within the transaction.
    however if a model got a transaction set inside it will use the local
    transaction instead of this one

-   `protected`{ .vis-protected } `$type` `int|null`

-   `protected`{ .vis-protected } `$uniqueRow = false` `bool`

</div>

### Methods

<div class="api-group">Public · 24</div>

#### `__construct()` { #mvcmodelquery-__construct }

```php
public function __construct(
    string $phql = null,
    DiInterface $container = null,
    array $options = []
);
```

Phalcon\Mvc\Model\Query constructor

#### `cache()` { #mvcmodelquery-cache }

```php
public function cache( array $cacheOptions ): QueryInterface;
```

Sets the cache parameters of the query

#### `clean()` { #mvcmodelquery-clean }

```php
public static function clean(): void;
```

Destroys the internal PHQL cache

#### `execute()` { #mvcmodelquery-execute }

```php
public function execute(
    array $bindParams = [],
    array $bindTypes = []
);
```

Executes a parsed PHQL statement

#### `getBindParams()` { #mvcmodelquery-getbindparams }

```php
public function getBindParams(): array;
```

Returns default bind params

#### `getBindTypes()` { #mvcmodelquery-getbindtypes }

```php
public function getBindTypes(): array;
```

Returns default bind types

#### `getCache()` { #mvcmodelquery-getcache }

```php
public function getCache(): AdapterInterface;
```

Returns the current cache backend instance

#### `getCacheOptions()` { #mvcmodelquery-getcacheoptions }

```php
public function getCacheOptions(): array;
```

Returns the current cache options

#### `getDI()` { #mvcmodelquery-getdi }

```php
public function getDI(): DiInterface;
```

Returns the dependency injection container

#### `getIntermediate()` { #mvcmodelquery-getintermediate }

```php
public function getIntermediate(): array;
```

Returns the intermediate representation of the PHQL statement

#### `getSingleResult()` { #mvcmodelquery-getsingleresult }

```php
public function getSingleResult(
    array $bindParams = [],
    array $bindTypes = []
): ModelInterface;
```

Executes the query returning the first result

#### `getSql()` { #mvcmodelquery-getsql }

```php
public function getSql(): array;
```

Returns an associative array with the SQL to be generated by the internal PHQL,
and arrays with bound parameters and their types (only works in SELECT statements).

```php
[
    'sql' => 'SELECT * FROM parts WHERE robot = :robot',
    'bind' => ['robot' => 123],
    'bindTypes => ['robot' => 1] // 1 corresponds to int
]
```

#### `getTransaction()` { #mvcmodelquery-gettransaction }

```php
public function getTransaction(): TransactionInterface|null;
```

#### `getType()` { #mvcmodelquery-gettype }

```php
public function getType(): int;
```

Gets the type of PHQL statement executed

#### `getUniqueRow()` { #mvcmodelquery-getuniquerow }

```php
public function getUniqueRow(): bool;
```

Check if the query is programmed to get only the first row in the
resultset

#### `parse()` { #mvcmodelquery-parse }

```php
public function parse(): array;
```

Parses the intermediate code produced by Phalcon\Mvc\Model\Query\Lang
generating another intermediate representation that could be executed by
Phalcon\Mvc\Model\Query

#### `setBindParams()` { #mvcmodelquery-setbindparams }

```php
public function setBindParams(
    array $bindParams,
    bool $merge = false
): QueryInterface;
```

Set default bind parameters

#### `setBindTypes()` { #mvcmodelquery-setbindtypes }

```php
public function setBindTypes(
    array $bindTypes,
    bool $merge = false
): QueryInterface;
```

Set default bind parameters

#### `setDI()` { #mvcmodelquery-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injection container

#### `setIntermediate()` { #mvcmodelquery-setintermediate }

```php
public function setIntermediate( array $intermediate ): QueryInterface;
```

Allows to set the IR to be executed

#### `setSharedLock()` { #mvcmodelquery-setsharedlock }

```php
public function setSharedLock( bool $sharedLock = false ): QueryInterface;
```

Set SHARED LOCK clause

#### `setTransaction()` { #mvcmodelquery-settransaction }

```php
public function setTransaction( TransactionInterface $transaction ): QueryInterface;
```

allows to wrap a transaction around all queries

#### `setType()` { #mvcmodelquery-settype }

```php
public function setType( int $type ): QueryInterface;
```

Sets the type of PHQL statement to be executed

#### `setUniqueRow()` { #mvcmodelquery-setuniquerow }

```php
public function setUniqueRow( bool $uniqueRow ): QueryInterface;
```

Tells to the query if only the first row in the resultset must be
returned

<div class="api-group">Protected · 27</div>

#### `executeDelete()` { #mvcmodelquery-executedelete }

```php
final protected function executeDelete(
    array $intermediate,
    array $bindParams,
    array $bindTypes
): StatusInterface;
```

Executes the DELETE intermediate representation producing a
Phalcon\Mvc\Model\Query\Status

#### `executeInsert()` { #mvcmodelquery-executeinsert }

```php
final protected function executeInsert(
    array $intermediate,
    array $bindParams,
    array $bindTypes
): StatusInterface;
```

Executes the INSERT intermediate representation producing a
Phalcon\Mvc\Model\Query\Status

#### `executeSelect()` { #mvcmodelquery-executeselect }

```php
final protected function executeSelect(
    array $intermediate,
    array $bindParams,
    array $bindTypes,
    bool $simulate = false
): ResultsetInterface|array;
```

Executes the SELECT intermediate representation producing a
Phalcon\Mvc\Model\Resultset

#### `executeUpdate()` { #mvcmodelquery-executeupdate }

```php
final protected function executeUpdate(
    array $intermediate,
    array $bindParams,
    array $bindTypes
): StatusInterface;
```

Executes the UPDATE intermediate representation producing a
Phalcon\Mvc\Model\Query\Status

#### `getCallArgument()` { #mvcmodelquery-getcallargument }

```php
final protected function getCallArgument( array $argument ): array;
```

Resolves an expression in a single call argument

#### `getCaseExpression()` { #mvcmodelquery-getcaseexpression }

```php
final protected function getCaseExpression( array $expr ): array;
```

Resolves an expression in a single call argument

#### `getExpression()` { #mvcmodelquery-getexpression }

```php
final protected function getExpression(
    array $expr,
    bool $quoting = true
): array;
```

Resolves an expression from its intermediate code into an array

#### `getFunctionCall()` { #mvcmodelquery-getfunctioncall }

```php
final protected function getFunctionCall( array $expr ): array;
```

Resolves an expression in a single call argument

#### `getGroupClause()` { #mvcmodelquery-getgroupclause }

```php
final protected function getGroupClause( array $group ): array;
```

Returns a processed group clause for a SELECT statement

#### `getJoin()` { #mvcmodelquery-getjoin }

```php
final protected function getJoin(
    ManagerInterface $manager,
    array $join
): array;
```

Resolves a JOIN clause checking if the associated models exist

#### `getJoinType()` { #mvcmodelquery-getjointype }

```php
final protected function getJoinType( array $join ): string;
```

Resolves a JOIN type

#### `getJoins()` { #mvcmodelquery-getjoins }

```php
final protected function getJoins( array $select ): array;
```

Processes the JOINs in the query returning an internal representation for
the database dialect

#### `getLimitClause()` { #mvcmodelquery-getlimitclause }

```php
final protected function getLimitClause( array $limitClause ): array;
```

Returns a processed limit clause for a SELECT statement

#### `getMultiJoin()` { #mvcmodelquery-getmultijoin }

```php
final protected function getMultiJoin(
    string $joinType,
    mixed $joinSource,
    string $modelAlias,
    string $joinAlias,
    RelationInterface $relation
): array;
```

Resolves joins involving many-to-many relations

#### `getOrderClause()` { #mvcmodelquery-getorderclause }

```php
final protected function getOrderClause( mixed $order ): array;
```

Returns a processed order clause for a SELECT statement

#### `getQualified()` { #mvcmodelquery-getqualified }

```php
final protected function getQualified( array $expr ): array;
```

Replaces the model's name to its source name in a qualified-name
expression

#### `getReadConnection()` { #mvcmodelquery-getreadconnection }

```php
protected function getReadConnection(
    ModelInterface $model,
    array $intermediate = null,
    array $bindParams = [],
    array $bindTypes = []
): AdapterInterface;
```

Gets the read connection from the model if there is no transaction set
inside the query object

#### `getRelatedRecords()` { #mvcmodelquery-getrelatedrecords }

```php
final protected function getRelatedRecords(
    ModelInterface $model,
    array $intermediate,
    array $bindParams,
    array $bindTypes
): ResultsetInterface;
```

Query the records on which the UPDATE/DELETE operation will be done

#### `getSelectColumn()` { #mvcmodelquery-getselectcolumn }

```php
final protected function getSelectColumn( array $column ): array;
```

Resolves a column from its intermediate representation into an array
used to determine if the resultset produced is simple or complex

#### `getSingleJoin()` { #mvcmodelquery-getsinglejoin }

```php
final protected function getSingleJoin(
    string $joinType,
    mixed $joinSource,
    string $modelAlias,
    string $joinAlias,
    RelationInterface $relation
): array;
```

Resolves joins involving has-one/belongs-to/has-many relations

#### `getTable()` { #mvcmodelquery-gettable }

```php
final protected function getTable(
    ManagerInterface $manager,
    array $qualifiedName
);
```

Resolves a table in a SELECT statement checking if the model exists

#### `getWriteConnection()` { #mvcmodelquery-getwriteconnection }

```php
protected function getWriteConnection(
    ModelInterface $model,
    array $intermediate = null,
    array $bindParams = [],
    array $bindTypes = []
): AdapterInterface;
```

Gets the write connection from the model if there is no transaction
inside the query object

#### `prepareDelete()` { #mvcmodelquery-preparedelete }

```php
final protected function prepareDelete(): array;
```

Analyzes a DELETE intermediate code and produces an array to be executed
later

#### `prepareInsert()` { #mvcmodelquery-prepareinsert }

```php
final protected function prepareInsert(): array;
```

Analyzes an INSERT intermediate code and produces an array to be executed
later

#### `prepareSelect()` { #mvcmodelquery-prepareselect }

```php
final protected function prepareSelect(
    mixed $ast = null,
    bool $merge = false
): array;
```

Analyzes a SELECT intermediate code and produces an array to be executed later

#### `prepareUpdate()` { #mvcmodelquery-prepareupdate }

```php
final protected function prepareUpdate(): array;
```

Analyzes an UPDATE intermediate code and produces an array to be executed
later

#### `refreshSchemasInIntermediate()` { #mvcmodelquery-refreshschemasinintermediate }

```php
final protected function refreshSchemasInIntermediate( array $irPhql ): array;
```

Refreshes the schema/source of every model referenced in a cached
intermediate representation. The PHQL cache is keyed by the PHQL
string only, so a model that switches its schema or source at
runtime (for instance via setSchema()/setSource() in initialize())
would otherwise see the value frozen at first parse. See #17020.


## Mvc\Model\QueryInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/QueryInterface.zep){ .src-btn }

Phalcon\Mvc\Model\QueryInterface

Interface for Phalcon\Mvc\Model\Query

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\QueryInterface`**

</div>

__Uses__ `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryinterface-cache">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">cache( array $cacheOptions )</code>
<span class="desc">Sets the cache parameters of the query</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-execute">
<code class="vis vis-public">public</code>
<code class="sig">execute(
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Executes a parsed PHQL statement</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-getbindparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindParams()</code>
<span class="desc">Returns default bind params</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-getbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindTypes()</code>
<span class="desc">Returns default bind types</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-getcacheoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getCacheOptions()</code>
<span class="desc">Returns the current cache options</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-getsingleresult">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">getSingleResult(
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Executes the query returning the first result</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-getsql">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getSql()</code>
<span class="desc">Returns the SQL to be generated by the internal PHQL (only works in SELECT statements)</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-getuniquerow">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">getUniqueRow()</code>
<span class="desc">Check if the query is programmed to get only the first row in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-parse">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">parse()</code>
<span class="desc">Parses the intermediate code produced by Phalcon\Mvc\Model\Query\Lang generating another</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-setbindparams">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setBindParams(
    array $bindParams,
    bool $merge = false
)</code>
<span class="desc">Set default bind parameters</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-setbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setBindTypes(
    array $bindTypes,
    bool $merge = false
)</code>
<span class="desc">Set default bind parameters</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-setsharedlock">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setSharedLock( bool $sharedLock = false )</code>
<span class="desc">Set SHARED LOCK clause</span>
</a>
<a class="api-item" href="#mvcmodelqueryinterface-setuniquerow">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">setUniqueRow( bool $uniqueRow )</code>
<span class="desc">Tells to the query if only the first row in the resultset must be returned</span>
</a>
</div>

### Methods

<div class="api-group">Public · 13</div>

#### `cache()` { #mvcmodelqueryinterface-cache }

```php
public function cache( array $cacheOptions ): QueryInterface;
```

Sets the cache parameters of the query

#### `execute()` { #mvcmodelqueryinterface-execute }

```php
public function execute(
    array $bindParams = [],
    array $bindTypes = []
);
```

Executes a parsed PHQL statement

#### `getBindParams()` { #mvcmodelqueryinterface-getbindparams }

```php
public function getBindParams(): array;
```

Returns default bind params

#### `getBindTypes()` { #mvcmodelqueryinterface-getbindtypes }

```php
public function getBindTypes(): array;
```

Returns default bind types

#### `getCacheOptions()` { #mvcmodelqueryinterface-getcacheoptions }

```php
public function getCacheOptions(): array;
```

Returns the current cache options

#### `getSingleResult()` { #mvcmodelqueryinterface-getsingleresult }

```php
public function getSingleResult(
    array $bindParams = [],
    array $bindTypes = []
): ModelInterface;
```

Executes the query returning the first result

#### `getSql()` { #mvcmodelqueryinterface-getsql }

```php
public function getSql(): array;
```

Returns the SQL to be generated by the internal PHQL (only works in SELECT statements)

#### `getUniqueRow()` { #mvcmodelqueryinterface-getuniquerow }

```php
public function getUniqueRow(): bool;
```

Check if the query is programmed to get only the first row in the resultset

#### `parse()` { #mvcmodelqueryinterface-parse }

```php
public function parse(): array;
```

Parses the intermediate code produced by Phalcon\Mvc\Model\Query\Lang generating another
intermediate representation that could be executed by Phalcon\Mvc\Model\Query

#### `setBindParams()` { #mvcmodelqueryinterface-setbindparams }

```php
public function setBindParams(
    array $bindParams,
    bool $merge = false
): QueryInterface;
```

Set default bind parameters

#### `setBindTypes()` { #mvcmodelqueryinterface-setbindtypes }

```php
public function setBindTypes(
    array $bindTypes,
    bool $merge = false
): QueryInterface;
```

Set default bind parameters

#### `setSharedLock()` { #mvcmodelqueryinterface-setsharedlock }

```php
public function setSharedLock( bool $sharedLock = false ): QueryInterface;
```

Set SHARED LOCK clause

#### `setUniqueRow()` { #mvcmodelqueryinterface-setuniquerow }

```php
public function setUniqueRow( bool $uniqueRow ): QueryInterface;
```

Tells to the query if only the first row in the resultset must be returned


## Mvc\Model\Query\Builder

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Builder.zep){ .src-btn }

Helps to create PHQL queries using an OO interface

```php
$params = [
    "models"     => [
        Users::class,
    ],
    "columns"    => ["id", "name", "status"],
    "conditions" => [
        [
            "created > :min: AND created < :max:",
            [
                "min" => "2013-01-01",
                "max" => "2014-01-01",
            ],
            [
                "min" => PDO::PARAM_STR,
                "max" => PDO::PARAM_STR,
            ],
        ],
    ],
    // or "conditions" => "created > '2013-01-01' AND created < '2014-01-01'",
    "group"      => ["id", "name"],
    "having"     => "name = 'Kamil'",
    "order"      => ["name", "id"],
    "limit"      => 20,
    "offset"     => 20,
    // or "limit" => [20, 20],
];

$queryBuilder = new \Phalcon\Mvc\Model\Query\Builder($params);
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Query\Builder`** — implements [`Phalcon\Mvc\Model\Query\BuilderInterface`](#mvcmodelquerybuilderinterface), [`Phalcon\Di\InjectionAwareInterface`](phalcon_di.md#diinjectionawareinterface)

</div>

__Uses__ `Phalcon\Db\Column` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Mvc\Model\Exception` · `Phalcon\Mvc\Model\Exceptions\ManagerOrmServicesUnavailable` · `Phalcon\Mvc\Model\QueryInterface` · `Phalcon\Mvc\Model\Query\Exceptions\Builder\BuilderColumnNotInMap` · `Phalcon\Mvc\Model\Query\Exceptions\Builder\BuilderConditionInvalid` · `Phalcon\Mvc\Model\Query\Exceptions\Builder\ModelRequired` · `Phalcon\Mvc\Model\Query\Exceptions\Builder\NoPrimaryKey` · `Phalcon\Mvc\Model\Query\Exceptions\Builder\OperatorNotAvailable` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelquerybuilder-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    mixed $params = null,
    DiInterface $container = null
)</code>
<span class="desc">Phalcon\Mvc\Model\Query\Builder constructor</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-addfrom">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">addFrom(
    string $model,
    string $alias = null
)</code>
<span class="desc">Add a model to take part of the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-andhaving">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">andHaving(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Appends a condition to the current HAVING conditions clause using a AND operator</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-andwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">andWhere(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Appends a condition to the current WHERE conditions using a AND operator</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-autoescape">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">autoescape( string $identifier )</code>
<span class="desc">Automatically escapes identifiers but only if they need to be escaped.</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-betweenhaving">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">betweenHaving(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends a BETWEEN condition to the current HAVING conditions clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-betweenwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">betweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends a BETWEEN condition to the current WHERE conditions</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-columns">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">columns( mixed $columns )</code>
<span class="desc">Sets the columns to be queried. The columns can be either a `string` or</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-distinct">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">distinct( mixed $distinct )</code>
<span class="desc">Sets SELECT DISTINCT / SELECT ALL flag</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">forUpdate( bool $forUpdate )</code>
<span class="desc">Sets a FOR UPDATE clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-from">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">from( mixed $models )</code>
<span class="desc">Sets the models who makes part of the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getbindparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindParams()</code>
<span class="desc">Returns default bind params</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindTypes()</code>
<span class="desc">Returns default bind types</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getcolumns">
<code class="vis vis-public">public</code>
<code class="sig">getColumns()</code>
<span class="desc">Return the columns to be queried</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Returns the DependencyInjector container</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getdistinct">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">getDistinct()</code>
<span class="desc">Returns SELECT DISTINCT / SELECT ALL flag</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getfrom">
<code class="vis vis-public">public</code>
<code class="sig">getFrom()</code>
<span class="desc">Return the models who makes part of the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getgroupby">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getGroupBy()</code>
<span class="desc">Returns the GROUP BY clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-gethaving">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getHaving()</code>
<span class="desc">Return the current having clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getjoins">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getJoins()</code>
<span class="desc">Return join parts of the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getlimit">
<code class="vis vis-public">public</code>
<code class="sig">getLimit()</code>
<span class="desc">Returns the current LIMIT clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getmodels">
<code class="vis vis-public">public</code>
<code class="ret">string|array|null</code>
<code class="sig">getModels()</code>
<span class="desc">Returns the models involved in the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getoffset">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getOffset()</code>
<span class="desc">Returns the current OFFSET clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getorderby">
<code class="vis vis-public">public</code>
<code class="sig">getOrderBy()</code>
<span class="desc">Returns the set ORDER BY clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getphql">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPhql()</code>
<span class="desc">Returns a PHQL statement built based on the builder parameters</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getquery">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">getQuery()</code>
<span class="desc">Returns the query built</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-getwhere">
<code class="vis vis-public">public</code>
<code class="sig">getWhere()</code>
<span class="desc">Return the conditions for the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-groupby">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">groupBy( mixed $group )</code>
<span class="desc">Sets a GROUP BY clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-having">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">having(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Sets the HAVING condition clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-inhaving">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">inHaving(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends an IN condition to the current HAVING conditions clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-inwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">inWhere(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends an IN condition to the current WHERE conditions</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-innerjoin">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">innerJoin(
    string $model,
    string $conditions = null,
    string $alias = null
)</code>
<span class="desc">Adds an INNER join to the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-join">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">join(
    string $model,
    string $conditions = null,
    string $alias = null,
    string $type = null
)</code>
<span class="desc">Adds an :type: join (by default type - INNER) to the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-leftjoin">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">leftJoin(
    string $model,
    string $conditions = null,
    string $alias = null
)</code>
<span class="desc">Adds a LEFT join to the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-limit">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">limit(
    int $limit,
    mixed $offset = null
)</code>
<span class="desc">Sets a LIMIT clause, optionally an offset clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-notbetweenhaving">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">notBetweenHaving(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends a NOT BETWEEN condition to the current HAVING conditions clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-notbetweenwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">notBetweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends a NOT BETWEEN condition to the current WHERE conditions</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-notinhaving">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">notInHaving(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends a NOT IN condition to the current HAVING conditions clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-notinwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">notInWhere(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends a NOT IN condition to the current WHERE conditions</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-offset">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">offset( int $offset )</code>
<span class="desc">Sets an OFFSET clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-orhaving">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">orHaving(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Appends a condition to the current HAVING conditions clause using an OR operator</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-orwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">orWhere(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Appends a condition to the current conditions using an OR operator</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-orderby">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">orderBy( mixed $orderBy )</code>
<span class="desc">Sets an ORDER BY condition clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-rightjoin">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">rightJoin(
    string $model,
    string $conditions = null,
    string $alias = null
)</code>
<span class="desc">Adds a RIGHT join to the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-setbindparams">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">setBindParams(
    array $bindParams,
    bool $merge = false
)</code>
<span class="desc">Set default bind parameters</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-setbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">setBindTypes(
    array $bindTypes,
    bool $merge = false
)</code>
<span class="desc">Set default bind types</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the DependencyInjector container</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-where">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">where(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Sets the query WHERE conditions</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-conditionbetween">
<code class="vis vis-protected">protected</code>
<code class="ret">BuilderInterface</code>
<code class="sig">conditionBetween(
    string $clause,
    string $operator,
    string $expr,
    mixed $minimum,
    mixed $maximum
)</code>
<span class="desc">Appends a BETWEEN condition</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-conditionin">
<code class="vis vis-protected">protected</code>
<code class="ret">BuilderInterface</code>
<code class="sig">conditionIn(
    string $clause,
    string $operator,
    string $expr,
    array $values
)</code>
<span class="desc">Appends an IN condition</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-conditionnotbetween">
<code class="vis vis-protected">protected</code>
<code class="ret">BuilderInterface</code>
<code class="sig">conditionNotBetween(
    string $clause,
    string $operator,
    string $expr,
    mixed $minimum,
    mixed $maximum
)</code>
<span class="desc">Appends a NOT BETWEEN condition</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilder-conditionnotin">
<code class="vis vis-protected">protected</code>
<code class="ret">BuilderInterface</code>
<code class="sig">conditionNotIn(
    string $clause,
    string $operator,
    string $expr,
    array $values
)</code>
<span class="desc">Appends a NOT IN condition</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$bindParams = []` `array`

-   `protected`{ .vis-protected } `$bindTypes = []` `array`

-   `protected`{ .vis-protected } `$columns = null` `array|string|null`

-   `protected`{ .vis-protected } `$conditions = null` `array|string|null`

-   `protected`{ .vis-protected } `$container` `DiInterface|null`

-   `protected`{ .vis-protected } `$distinct = null` `mixed`

-   `protected`{ .vis-protected } `$forUpdate = false` `bool`

-   `protected`{ .vis-protected } `$group = []` `array`

-   `protected`{ .vis-protected } `$having = null` `string|null`

-   `protected`{ .vis-protected } `$hiddenParamNumber = 0` `int`

-   `protected`{ .vis-protected } `$joins = []` `array`

-   `protected`{ .vis-protected } `$limit` `array|string`

-   `protected`{ .vis-protected } `$models` `array|string`

-   `protected`{ .vis-protected } `$offset = 0` `int`

-   `protected`{ .vis-protected } `$order` `array|string`

-   `protected`{ .vis-protected } `$sharedLock = false` `bool`

</div>

### Methods

<div class="api-group">Public · 48</div>

#### `__construct()` { #mvcmodelquerybuilder-__construct }

```php
public function __construct(
    mixed $params = null,
    DiInterface $container = null
);
```

Phalcon\Mvc\Model\Query\Builder constructor

#### `addFrom()` { #mvcmodelquerybuilder-addfrom }

```php
public function addFrom(
    string $model,
    string $alias = null
): BuilderInterface;
```

Add a model to take part of the query

```php
// Load data from models Robots
$builder->addFrom(
    Robots::class
);

// Load data from model 'Robots' using 'r' as alias in PHQL
$builder->addFrom(
    Robots::class,
    "r"
);
```

#### `andHaving()` { #mvcmodelquerybuilder-andhaving }

```php
public function andHaving(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
): BuilderInterface;
```

Appends a condition to the current HAVING conditions clause using a AND operator

```php
$builder->andHaving("SUM(Robots.price) > 0");

$builder->andHaving(
    "SUM(Robots.price) > :sum:",
    [
        "sum" => 100,
    ]
);
```

#### `andWhere()` { #mvcmodelquerybuilder-andwhere }

```php
public function andWhere(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
): BuilderInterface;
```

Appends a condition to the current WHERE conditions using a AND operator

```php
$builder->andWhere("name = 'Peter'");

$builder->andWhere(
    "name = :name: AND id > :id:",
    [
        "name" => "Peter",
        "id"   => 100,
    ]
);
```

#### `autoescape()` { #mvcmodelquerybuilder-autoescape }

```php
final public function autoescape( string $identifier ): string;
```

Automatically escapes identifiers but only if they need to be escaped.

#### `betweenHaving()` { #mvcmodelquerybuilder-betweenhaving }

```php
public function betweenHaving(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a BETWEEN condition to the current HAVING conditions clause

```php
$builder->betweenHaving("SUM(Robots.price)", 100.25, 200.50);
```

#### `betweenWhere()` { #mvcmodelquerybuilder-betweenwhere }

```php
public function betweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a BETWEEN condition to the current WHERE conditions

```php
$builder->betweenWhere("price", 100.25, 200.50);
```

#### `columns()` { #mvcmodelquerybuilder-columns }

```php
public function columns( mixed $columns ): BuilderInterface;
```

Sets the columns to be queried. The columns can be either a `string` or
an `array` of strings. If the argument is a (single, non-embedded) string,
its content can specify one or more columns, separated by commas, the same
way that one uses the SQL select statement. You can use aliases, aggregate
functions, etc. If you need to reference other models you will need to
reference them with their namespaces.

When using an array as a parameter, you will need to specify one field
per array element. If a non-numeric key is defined in the array, it will
be used as the alias in the query

```php
<?php

// String, comma separated values
$builder->columns("id, category");

// Array, one column per element
$builder->columns(
    [
        "inv_id",
        "inv_total",
    ]
);

// Array with named key. The name of the key acts as an
// alias (`AS` clause)
$builder->columns(
    [
        "inv_cst_id",
        "total_invoices" => "COUNT(*)",
    ]
);

// Different models
$builder->columns(
    [
        "\Phalcon\Models\Invoices.*",
        "\Phalcon\Models\Customers.cst_name_first",
        "\Phalcon\Models\Customers.cst_name_last",
    ]
);
```

#### `distinct()` { #mvcmodelquerybuilder-distinct }

```php
public function distinct( mixed $distinct ): BuilderInterface;
```

Sets SELECT DISTINCT / SELECT ALL flag

```php
$builder->distinct("status");
$builder->distinct(null);
```

#### `forUpdate()` { #mvcmodelquerybuilder-forupdate }

```php
public function forUpdate( bool $forUpdate ): BuilderInterface;
```

Sets a FOR UPDATE clause

```php
$builder->forUpdate(true);
```

#### `from()` { #mvcmodelquerybuilder-from }

```php
public function from( mixed $models ): BuilderInterface;
```

Sets the models who makes part of the query

```php
$builder->from(
    Robots::class
);

$builder->from(
    [
        Robots::class,
        RobotsParts::class,
    ]
);

$builder->from(
    [
        "r"  => Robots::class,
        "rp" => RobotsParts::class,
    ]
);
```

#### `getBindParams()` { #mvcmodelquerybuilder-getbindparams }

```php
public function getBindParams(): array;
```

Returns default bind params

#### `getBindTypes()` { #mvcmodelquerybuilder-getbindtypes }

```php
public function getBindTypes(): array;
```

Returns default bind types

#### `getColumns()` { #mvcmodelquerybuilder-getcolumns }

```php
public function getColumns();
```

Return the columns to be queried

#### `getDI()` { #mvcmodelquerybuilder-getdi }

```php
public function getDI(): DiInterface;
```

Returns the DependencyInjector container

#### `getDistinct()` { #mvcmodelquerybuilder-getdistinct }

```php
public function getDistinct(): bool;
```

Returns SELECT DISTINCT / SELECT ALL flag

#### `getFrom()` { #mvcmodelquerybuilder-getfrom }

```php
public function getFrom();
```

Return the models who makes part of the query

#### `getGroupBy()` { #mvcmodelquerybuilder-getgroupby }

```php
public function getGroupBy(): array;
```

Returns the GROUP BY clause

#### `getHaving()` { #mvcmodelquerybuilder-gethaving }

```php
public function getHaving(): string|null;
```

Return the current having clause

#### `getJoins()` { #mvcmodelquerybuilder-getjoins }

```php
public function getJoins(): array;
```

Return join parts of the query

#### `getLimit()` { #mvcmodelquerybuilder-getlimit }

```php
public function getLimit();
```

Returns the current LIMIT clause

#### `getModels()` { #mvcmodelquerybuilder-getmodels }

```php
public function getModels(): string|array|null;
```

Returns the models involved in the query

#### `getOffset()` { #mvcmodelquerybuilder-getoffset }

```php
public function getOffset(): int;
```

Returns the current OFFSET clause

#### `getOrderBy()` { #mvcmodelquerybuilder-getorderby }

```php
public function getOrderBy();
```

Returns the set ORDER BY clause

#### `getPhql()` { #mvcmodelquerybuilder-getphql }

```php
final public function getPhql(): string;
```

Returns a PHQL statement built based on the builder parameters

#### `getQuery()` { #mvcmodelquerybuilder-getquery }

```php
public function getQuery(): QueryInterface;
```

Returns the query built

#### `getWhere()` { #mvcmodelquerybuilder-getwhere }

```php
public function getWhere();
```

Return the conditions for the query

#### `groupBy()` { #mvcmodelquerybuilder-groupby }

```php
public function groupBy( mixed $group ): BuilderInterface;
```

Sets a GROUP BY clause

```php
$builder->groupBy(
    [
        "Robots.name",
    ]
);
```

#### `having()` { #mvcmodelquerybuilder-having }

```php
public function having(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
): BuilderInterface;
```

Sets the HAVING condition clause

```php
$builder->having("SUM(Robots.price) > 0");

$builder->having(
    "SUM(Robots.price) > :sum:",
    [
        "sum" => 100,
    ]
);
```

#### `inHaving()` { #mvcmodelquerybuilder-inhaving }

```php
public function inHaving(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends an IN condition to the current HAVING conditions clause

```php
$builder->inHaving("SUM(Robots.price)", [100, 200]);
```

#### `inWhere()` { #mvcmodelquerybuilder-inwhere }

```php
public function inWhere(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends an IN condition to the current WHERE conditions

```php
$builder->inWhere(
    "id",
    [1, 2, 3]
);
```

#### `innerJoin()` { #mvcmodelquerybuilder-innerjoin }

```php
public function innerJoin(
    string $model,
    string $conditions = null,
    string $alias = null
): BuilderInterface;
```

Adds an INNER join to the query

```php
// Inner Join model 'Robots' with automatic conditions and alias
$builder->innerJoin(
    Robots::class
);

// Inner Join model 'Robots' specifying conditions
$builder->innerJoin(
    Robots::class,
    "Robots.id = RobotsParts.robots_id"
);

// Inner Join model 'Robots' specifying conditions and alias
$builder->innerJoin(
    Robots::class,
    "r.id = RobotsParts.robots_id",
    "r"
);
```

#### `join()` { #mvcmodelquerybuilder-join }

```php
public function join(
    string $model,
    string $conditions = null,
    string $alias = null,
    string $type = null
): BuilderInterface;
```

Adds an :type: join (by default type - INNER) to the query

```php
// Inner Join model 'Robots' with automatic conditions and alias
$builder->join(
    Robots::class
);

// Inner Join model 'Robots' specifying conditions
$builder->join(
    Robots::class,
    "Robots.id = RobotsParts.robots_id"
);

// Inner Join model 'Robots' specifying conditions and alias
$builder->join(
    Robots::class,
    "r.id = RobotsParts.robots_id",
    "r"
);

// Left Join model 'Robots' specifying conditions, alias and type of join
$builder->join(
    Robots::class,
    "r.id = RobotsParts.robots_id",
    "r",
    "LEFT"
);
```

#### `leftJoin()` { #mvcmodelquerybuilder-leftjoin }

```php
public function leftJoin(
    string $model,
    string $conditions = null,
    string $alias = null
): BuilderInterface;
```

Adds a LEFT join to the query

```php
$builder->leftJoin(
    Robots::class,
    "r.id = RobotsParts.robots_id",
    "r"
);
```

#### `limit()` { #mvcmodelquerybuilder-limit }

```php
public function limit(
    int $limit,
    mixed $offset = null
): BuilderInterface;
```

Sets a LIMIT clause, optionally an offset clause

```php
$builder->limit(100);
$builder->limit(100, 20);
$builder->limit("100", "20");
```

#### `notBetweenHaving()` { #mvcmodelquerybuilder-notbetweenhaving }

```php
public function notBetweenHaving(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a NOT BETWEEN condition to the current HAVING conditions clause

```php
$builder->notBetweenHaving("SUM(Robots.price)", 100.25, 200.50);
```

#### `notBetweenWhere()` { #mvcmodelquerybuilder-notbetweenwhere }

```php
public function notBetweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a NOT BETWEEN condition to the current WHERE conditions

```php
$builder->notBetweenWhere("price", 100.25, 200.50);
```

#### `notInHaving()` { #mvcmodelquerybuilder-notinhaving }

```php
public function notInHaving(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a NOT IN condition to the current HAVING conditions clause

```php
$builder->notInHaving("SUM(Robots.price)", [100, 200]);
```

#### `notInWhere()` { #mvcmodelquerybuilder-notinwhere }

```php
public function notInWhere(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a NOT IN condition to the current WHERE conditions

```php
$builder->notInWhere("id", [1, 2, 3]);
```

#### `offset()` { #mvcmodelquerybuilder-offset }

```php
public function offset( int $offset ): BuilderInterface;
```

Sets an OFFSET clause

```php
$builder->offset(30);
```

#### `orHaving()` { #mvcmodelquerybuilder-orhaving }

```php
public function orHaving(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
): BuilderInterface;
```

Appends a condition to the current HAVING conditions clause using an OR operator

```php
$builder->orHaving("SUM(Robots.price) > 0");

$builder->orHaving(
    "SUM(Robots.price) > :sum:",
    [
        "sum" => 100,
    ]
);
```

#### `orWhere()` { #mvcmodelquerybuilder-orwhere }

```php
public function orWhere(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
): BuilderInterface;
```

Appends a condition to the current conditions using an OR operator

```php
$builder->orWhere("name = 'Peter'");

$builder->orWhere(
    "name = :name: AND id > :id:",
    [
        "name" => "Peter",
        "id"   => 100,
    ]
);
```

#### `orderBy()` { #mvcmodelquerybuilder-orderby }

```php
public function orderBy( mixed $orderBy ): BuilderInterface;
```

Sets an ORDER BY condition clause

```php
$builder->orderBy("Robots.name");
$builder->orderBy(["1", "Robots.name"]);
$builder->orderBy(["Robots.name DESC"]);
```

#### `rightJoin()` { #mvcmodelquerybuilder-rightjoin }

```php
public function rightJoin(
    string $model,
    string $conditions = null,
    string $alias = null
): BuilderInterface;
```

Adds a RIGHT join to the query

```php
$builder->rightJoin(
    Robots::class,
    "r.id = RobotsParts.robots_id",
    "r"
);
```

#### `setBindParams()` { #mvcmodelquerybuilder-setbindparams }

```php
public function setBindParams(
    array $bindParams,
    bool $merge = false
): BuilderInterface;
```

Set default bind parameters

#### `setBindTypes()` { #mvcmodelquerybuilder-setbindtypes }

```php
public function setBindTypes(
    array $bindTypes,
    bool $merge = false
): BuilderInterface;
```

Set default bind types

#### `setDI()` { #mvcmodelquerybuilder-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the DependencyInjector container

#### `where()` { #mvcmodelquerybuilder-where }

```php
public function where(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
): BuilderInterface;
```

Sets the query WHERE conditions

```php
$builder->where(100);

$builder->where("name = 'Peter'");

$builder->where(
    "name = :name: AND id > :id:",
    [
        "name" => "Peter",
        "id"   => 100,
    ]
);
```

<div class="api-group">Protected · 4</div>

#### `conditionBetween()` { #mvcmodelquerybuilder-conditionbetween }

```php
protected function conditionBetween(
    string $clause,
    string $operator,
    string $expr,
    mixed $minimum,
    mixed $maximum
): BuilderInterface;
```

Appends a BETWEEN condition

#### `conditionIn()` { #mvcmodelquerybuilder-conditionin }

```php
protected function conditionIn(
    string $clause,
    string $operator,
    string $expr,
    array $values
): BuilderInterface;
```

Appends an IN condition

#### `conditionNotBetween()` { #mvcmodelquerybuilder-conditionnotbetween }

```php
protected function conditionNotBetween(
    string $clause,
    string $operator,
    string $expr,
    mixed $minimum,
    mixed $maximum
): BuilderInterface;
```

Appends a NOT BETWEEN condition

#### `conditionNotIn()` { #mvcmodelquerybuilder-conditionnotin }

```php
protected function conditionNotIn(
    string $clause,
    string $operator,
    string $expr,
    array $values
): BuilderInterface;
```

Appends a NOT IN condition


## Mvc\Model\Query\BuilderInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/BuilderInterface.zep){ .src-btn }

Interface for Phalcon\Mvc\Model\Query\Builder

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Query\BuilderInterface`**

</div>

__Uses__ `Phalcon\Mvc\Model\QueryInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelquerybuilderinterface-addfrom">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">addFrom(
    string $model,
    string $alias = null
)</code>
<span class="desc">Add a model to take part of the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-andwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">andWhere(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Appends a condition to the current conditions using a AND operator</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-betweenwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">betweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends a BETWEEN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-columns">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">columns( mixed $columns )</code>
<span class="desc">Sets the columns to be queried. The columns can be either a `string` or</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-distinct">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">distinct( mixed $distinct )</code>
<span class="desc">Sets SELECT DISTINCT / SELECT ALL flag</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-forupdate">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">forUpdate( bool $forUpdate )</code>
<span class="desc">Sets a FOR UPDATE clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-from">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">from( mixed $models )</code>
<span class="desc">Sets the models who makes part of the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getbindparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindParams()</code>
<span class="desc">Returns default bind params</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getBindTypes()</code>
<span class="desc">Returns default bind types</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getcolumns">
<code class="vis vis-public">public</code>
<code class="sig">getColumns()</code>
<span class="desc">Return the columns to be queried</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getdistinct">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">getDistinct()</code>
<span class="desc">Returns SELECT DISTINCT / SELECT ALL flag</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getfrom">
<code class="vis vis-public">public</code>
<code class="sig">getFrom()</code>
<span class="desc">Return the models who makes part of the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getgroupby">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getGroupBy()</code>
<span class="desc">Returns the GROUP BY clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-gethaving">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getHaving()</code>
<span class="desc">Returns the HAVING condition clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getjoins">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getJoins()</code>
<span class="desc">Return join parts of the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getlimit">
<code class="vis vis-public">public</code>
<code class="sig">getLimit()</code>
<span class="desc">Returns the current LIMIT clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getmodels">
<code class="vis vis-public">public</code>
<code class="ret">string|array|null</code>
<code class="sig">getModels()</code>
<span class="desc">Returns the models involved in the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getoffset">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getOffset()</code>
<span class="desc">Returns the current OFFSET clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getorderby">
<code class="vis vis-public">public</code>
<code class="sig">getOrderBy()</code>
<span class="desc">Return the set ORDER BY clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getphql">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPhql()</code>
<span class="desc">Returns a PHQL statement built based on the builder parameters</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getquery">
<code class="vis vis-public">public</code>
<code class="ret">QueryInterface</code>
<code class="sig">getQuery()</code>
<span class="desc">Returns the query built</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-getwhere">
<code class="vis vis-public">public</code>
<code class="sig">getWhere()</code>
<span class="desc">Return the conditions for the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-groupby">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">groupBy( mixed $group )</code>
<span class="desc">Sets a GROUP BY clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-having">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">having(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Sets a HAVING condition clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-inwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">inWhere(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends an IN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-innerjoin">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">innerJoin(
    string $model,
    string $conditions = null,
    string $alias = null
)</code>
<span class="desc">Adds an INNER join to the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-join">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">join(
    string $model,
    string $conditions = null,
    string $alias = null
)</code>
<span class="desc">Adds an :type: join (by default type - INNER) to the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-leftjoin">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">leftJoin(
    string $model,
    string $conditions = null,
    string $alias = null
)</code>
<span class="desc">Adds a LEFT join to the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-limit">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">limit(
    int $limit,
    mixed $offset = null
)</code>
<span class="desc">Sets a LIMIT clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-notbetweenwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">notBetweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends a NOT BETWEEN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-notinwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">notInWhere(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
)</code>
<span class="desc">Appends a NOT IN condition to the current conditions</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-offset">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">offset( int $offset )</code>
<span class="desc">Sets an OFFSET clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-orwhere">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">orWhere(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Appends a condition to the current conditions using an OR operator</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-orderby">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">orderBy( mixed $orderBy )</code>
<span class="desc">Sets an ORDER BY condition clause</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-rightjoin">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">rightJoin(
    string $model,
    string $conditions = null,
    string $alias = null
)</code>
<span class="desc">Adds a RIGHT join to the query</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-setbindparams">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">setBindParams(
    array $bindParams,
    bool $merge = false
)</code>
<span class="desc">Set default bind parameters</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-setbindtypes">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">setBindTypes(
    array $bindTypes,
    bool $merge = false
)</code>
<span class="desc">Set default bind types</span>
</a>
<a class="api-item" href="#mvcmodelquerybuilderinterface-where">
<code class="vis vis-public">public</code>
<code class="ret">BuilderInterface</code>
<code class="sig">where(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
)</code>
<span class="desc">Sets conditions for the query</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `OPERATOR_AND = "and"` `string`

-   `OPERATOR_OR = "or"` `string`

</div>

### Methods

<div class="api-group">Public · 38</div>

#### `addFrom()` { #mvcmodelquerybuilderinterface-addfrom }

```php
public function addFrom(
    string $model,
    string $alias = null
): BuilderInterface;
```

Add a model to take part of the query

#### `andWhere()` { #mvcmodelquerybuilderinterface-andwhere }

```php
public function andWhere(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
): BuilderInterface;
```

Appends a condition to the current conditions using a AND operator

#### `betweenWhere()` { #mvcmodelquerybuilderinterface-betweenwhere }

```php
public function betweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a BETWEEN condition to the current conditions

#### `columns()` { #mvcmodelquerybuilderinterface-columns }

```php
public function columns( mixed $columns ): BuilderInterface;
```

Sets the columns to be queried. The columns can be either a `string` or
an `array` of strings. If the argument is a (single, non-embedded) string,
its content can specify one or more columns, separated by commas, the same
way that one uses the SQL select statement. You can use aliases, aggregate
functions, etc. If you need to reference other models you will need to
reference them with their namespaces.

When using an array as a parameter, you will need to specify one field
per array element. If a non-numeric key is defined in the array, it will
be used as the alias in the query

```php
<?php

// String, comma separated values
$builder->columns("id, name");

// Array, one column per element
$builder->columns(
    [
        "id",
        "name",
    ]
);

// Array, named keys. The name of the key acts as an alias (`AS` clause)
$builder->columns(
    [
        "name",
        "number" => "COUNT(*)",
    ]
);

// Different models
$builder->columns(
    [
        "\Phalcon\Models\Invoices.*",
        "\Phalcon\Models\Customers.cst_name_first",
        "\Phalcon\Models\Customers.cst_name_last",
    ]
);
```

#### `distinct()` { #mvcmodelquerybuilderinterface-distinct }

```php
public function distinct( mixed $distinct ): BuilderInterface;
```

Sets SELECT DISTINCT / SELECT ALL flag

```php
$builder->distinct("status");
$builder->distinct(null);
```

#### `forUpdate()` { #mvcmodelquerybuilderinterface-forupdate }

```php
public function forUpdate( bool $forUpdate ): BuilderInterface;
```

Sets a FOR UPDATE clause

```php
$builder->forUpdate(true);
```

#### `from()` { #mvcmodelquerybuilderinterface-from }

```php
public function from( mixed $models ): BuilderInterface;
```

Sets the models who makes part of the query

#### `getBindParams()` { #mvcmodelquerybuilderinterface-getbindparams }

```php
public function getBindParams(): array;
```

Returns default bind params

#### `getBindTypes()` { #mvcmodelquerybuilderinterface-getbindtypes }

```php
public function getBindTypes(): array;
```

Returns default bind types

#### `getColumns()` { #mvcmodelquerybuilderinterface-getcolumns }

```php
public function getColumns();
```

Return the columns to be queried

#### `getDistinct()` { #mvcmodelquerybuilderinterface-getdistinct }

```php
public function getDistinct(): bool;
```

Returns SELECT DISTINCT / SELECT ALL flag

#### `getFrom()` { #mvcmodelquerybuilderinterface-getfrom }

```php
public function getFrom();
```

Return the models who makes part of the query

#### `getGroupBy()` { #mvcmodelquerybuilderinterface-getgroupby }

```php
public function getGroupBy(): array;
```

Returns the GROUP BY clause

#### `getHaving()` { #mvcmodelquerybuilderinterface-gethaving }

```php
public function getHaving(): string|null;
```

Returns the HAVING condition clause

#### `getJoins()` { #mvcmodelquerybuilderinterface-getjoins }

```php
public function getJoins(): array;
```

Return join parts of the query

#### `getLimit()` { #mvcmodelquerybuilderinterface-getlimit }

```php
public function getLimit();
```

Returns the current LIMIT clause

#### `getModels()` { #mvcmodelquerybuilderinterface-getmodels }

```php
public function getModels(): string|array|null;
```

Returns the models involved in the query

#### `getOffset()` { #mvcmodelquerybuilderinterface-getoffset }

```php
public function getOffset(): int;
```

Returns the current OFFSET clause

#### `getOrderBy()` { #mvcmodelquerybuilderinterface-getorderby }

```php
public function getOrderBy();
```

Return the set ORDER BY clause

#### `getPhql()` { #mvcmodelquerybuilderinterface-getphql }

```php
public function getPhql(): string;
```

Returns a PHQL statement built based on the builder parameters

#### `getQuery()` { #mvcmodelquerybuilderinterface-getquery }

```php
public function getQuery(): QueryInterface;
```

Returns the query built

#### `getWhere()` { #mvcmodelquerybuilderinterface-getwhere }

```php
public function getWhere();
```

Return the conditions for the query

#### `groupBy()` { #mvcmodelquerybuilderinterface-groupby }

```php
public function groupBy( mixed $group ): BuilderInterface;
```

Sets a GROUP BY clause

#### `having()` { #mvcmodelquerybuilderinterface-having }

```php
public function having(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
): BuilderInterface;
```

Sets a HAVING condition clause

#### `inWhere()` { #mvcmodelquerybuilderinterface-inwhere }

```php
public function inWhere(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends an IN condition to the current conditions

#### `innerJoin()` { #mvcmodelquerybuilderinterface-innerjoin }

```php
public function innerJoin(
    string $model,
    string $conditions = null,
    string $alias = null
): BuilderInterface;
```

Adds an INNER join to the query

#### `join()` { #mvcmodelquerybuilderinterface-join }

```php
public function join(
    string $model,
    string $conditions = null,
    string $alias = null
): BuilderInterface;
```

Adds an :type: join (by default type - INNER) to the query

#### `leftJoin()` { #mvcmodelquerybuilderinterface-leftjoin }

```php
public function leftJoin(
    string $model,
    string $conditions = null,
    string $alias = null
): BuilderInterface;
```

Adds a LEFT join to the query

#### `limit()` { #mvcmodelquerybuilderinterface-limit }

```php
public function limit(
    int $limit,
    mixed $offset = null
): BuilderInterface;
```

Sets a LIMIT clause

#### `notBetweenWhere()` { #mvcmodelquerybuilderinterface-notbetweenwhere }

```php
public function notBetweenWhere(
    string $expr,
    mixed $minimum,
    mixed $maximum,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a NOT BETWEEN condition to the current conditions

#### `notInWhere()` { #mvcmodelquerybuilderinterface-notinwhere }

```php
public function notInWhere(
    string $expr,
    array $values,
    string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a NOT IN condition to the current conditions

#### `offset()` { #mvcmodelquerybuilderinterface-offset }

```php
public function offset( int $offset ): BuilderInterface;
```

Sets an OFFSET clause

#### `orWhere()` { #mvcmodelquerybuilderinterface-orwhere }

```php
public function orWhere(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
): BuilderInterface;
```

Appends a condition to the current conditions using an OR operator

#### `orderBy()` { #mvcmodelquerybuilderinterface-orderby }

```php
public function orderBy( mixed $orderBy ): BuilderInterface;
```

Sets an ORDER BY condition clause

#### `rightJoin()` { #mvcmodelquerybuilderinterface-rightjoin }

```php
public function rightJoin(
    string $model,
    string $conditions = null,
    string $alias = null
): BuilderInterface;
```

Adds a RIGHT join to the query

#### `setBindParams()` { #mvcmodelquerybuilderinterface-setbindparams }

```php
public function setBindParams(
    array $bindParams,
    bool $merge = false
): BuilderInterface;
```

Set default bind parameters

#### `setBindTypes()` { #mvcmodelquerybuilderinterface-setbindtypes }

```php
public function setBindTypes(
    array $bindTypes,
    bool $merge = false
): BuilderInterface;
```

Set default bind types

#### `where()` { #mvcmodelquerybuilderinterface-where }

```php
public function where(
    string $conditions,
    array $bindParams = [],
    array $bindTypes = []
): BuilderInterface;
```

Sets conditions for the query


## Mvc\Model\Query\Exceptions\AmbiguousColumn

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/AmbiguousColumn.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\AmbiguousColumn`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsambiguouscolumn-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsambiguouscolumn-__construct }

```php
public function __construct(
    string $name,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\AmbiguousJoinRelation

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/AmbiguousJoinRelation.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\AmbiguousJoinRelation`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsambiguousjoinrelation-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $from,
    string $join,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsambiguousjoinrelation-__construct }

```php
public function __construct(
    string $from,
    string $join,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\BindParameterNotInPlaceholders

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/BindParameterNotInPlaceholders.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\BindParameterNotInPlaceholders`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsbindparameternotinplaceholders-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $wildcard )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsbindparameternotinplaceholders-__construct }

```php
public function __construct( string $wildcard );
```


## Mvc\Model\Query\Exceptions\BindTypeRequiresArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/BindTypeRequiresArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\BindTypeRequiresArray`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsbindtyperequiresarray-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsbindtyperequiresarray-__construct }

```php
public function __construct( string $name );
```


## Mvc\Model\Query\Exceptions\BindValueRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/BindValueRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\BindValueRequired`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsbindvaluerequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsbindvaluerequired-__construct }

```php
public function __construct( string $name );
```


## Mvc\Model\Query\Exceptions\Builder\BuilderColumnNotInMap

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/Builder/BuilderColumnNotInMap.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\Builder\BuilderColumnNotInMap`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsbuilderbuildercolumnnotinmap-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $column )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsbuilderbuildercolumnnotinmap-__construct }

```php
public function __construct( string $column );
```


## Mvc\Model\Query\Exceptions\Builder\BuilderConditionInvalid

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/Builder/BuilderConditionInvalid.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\Builder\BuilderConditionInvalid`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsbuilderbuilderconditioninvalid-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsbuilderbuilderconditioninvalid-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\Builder\ModelRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/Builder/ModelRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\Builder\ModelRequired`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsbuildermodelrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsbuildermodelrequired-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\Builder\NoPrimaryKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/Builder/NoPrimaryKey.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\Builder\NoPrimaryKey`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsbuildernoprimarykey-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsbuildernoprimarykey-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\Builder\OperatorNotAvailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/Builder/OperatorNotAvailable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\Builder\OperatorNotAvailable`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsbuilderoperatornotavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $operator )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsbuilderoperatornotavailable-__construct }

```php
public function __construct( string $operator );
```


## Mvc\Model\Query\Exceptions\ColumnNotInDomain

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/ColumnNotInDomain.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\ColumnNotInDomain`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionscolumnnotindomain-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $model,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionscolumnnotindomain-__construct }

```php
public function __construct(
    string $name,
    string $model,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\ColumnNotInSelectedModels

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/ColumnNotInSelectedModels.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\ColumnNotInSelectedModels`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionscolumnnotinselectedmodels-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $tag,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionscolumnnotinselectedmodels-__construct }

```php
public function __construct(
    string $name,
    string $tag,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\CorruptedAst

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/CorruptedAst.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\CorruptedAst`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionscorruptedast-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionscorruptedast-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\CorruptedDeleteAst

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/CorruptedDeleteAst.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\CorruptedDeleteAst`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionscorrupteddeleteast-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionscorrupteddeleteast-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\CorruptedInsertAst

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/CorruptedInsertAst.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\CorruptedInsertAst`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionscorruptedinsertast-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionscorruptedinsertast-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\CorruptedSelectAst

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/CorruptedSelectAst.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\CorruptedSelectAst`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionscorruptedselectast-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionscorruptedselectast-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\CorruptedUpdateAst

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/CorruptedUpdateAst.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\CorruptedUpdateAst`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionscorruptedupdateast-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionscorruptedupdateast-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\DeleteMultipleNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/DeleteMultipleNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\DeleteMultipleNotSupported`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsdeletemultiplenotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsdeletemultiplenotsupported-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\DuplicateAlias

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/DuplicateAlias.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\DuplicateAlias`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsduplicatealias-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsduplicatealias-__construct }

```php
public function __construct(
    string $name,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\EmptyArrayPlaceholderValue

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/EmptyArrayPlaceholderValue.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\EmptyArrayPlaceholderValue`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsemptyarrayplaceholdervalue-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsemptyarrayplaceholdervalue-__construct }

```php
public function __construct( string $name );
```


## Mvc\Model\Query\Exceptions\InsertColumnCountMismatch

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/InsertColumnCountMismatch.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\InsertColumnCountMismatch`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsinsertcolumncountmismatch-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsinsertcolumncountmismatch-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\InvalidCachedResultset

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/InvalidCachedResultset.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\InvalidCachedResultset`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsinvalidcachedresultset-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsinvalidcachedresultset-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\InvalidCachingOptions

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/InvalidCachingOptions.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\InvalidCachingOptions`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsinvalidcachingoptions-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsinvalidcachingoptions-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\InvalidColumnDefinition

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/InvalidColumnDefinition.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\InvalidColumnDefinition`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsinvalidcolumndefinition-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsinvalidcolumndefinition-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\InvalidInjectedManager

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/InvalidInjectedManager.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\InvalidInjectedManager`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsinvalidinjectedmanager-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsinvalidinjectedmanager-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\InvalidInjectedMetadata

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/InvalidInjectedMetadata.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\InvalidInjectedMetadata`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsinvalidinjectedmetadata-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsinvalidinjectedmetadata-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\InvalidQueryCacheService

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/InvalidQueryCacheService.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\InvalidQueryCacheService`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsinvalidquerycacheservice-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsinvalidquerycacheservice-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\InvalidResultsetClass

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/InvalidResultsetClass.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\InvalidResultsetClass`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsinvalidresultsetclass-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsinvalidresultsetclass-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Query\Exceptions\JoinAliasAlreadyUsed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/JoinAliasAlreadyUsed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\JoinAliasAlreadyUsed`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsjoinaliasalreadyused-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $alias,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsjoinaliasalreadyused-__construct }

```php
public function __construct(
    string $alias,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\JoinFieldCountMismatch

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/JoinFieldCountMismatch.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\JoinFieldCountMismatch`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsjoinfieldcountmismatch-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $model,
    string $join,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsjoinfieldcountmismatch-__construct }

```php
public function __construct(
    string $model,
    string $join,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\MissingCacheKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/MissingCacheKey.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\MissingCacheKey`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsmissingcachekey-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsmissingcachekey-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\MissingMetaData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/MissingMetaData.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\MissingMetaData`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsmissingmetadata-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsmissingmetadata-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\MissingModelAttribute

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/MissingModelAttribute.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\MissingModelAttribute`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsmissingmodelattribute-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $model,
    string $attribute,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsmissingmodelattribute-__construct }

```php
public function __construct(
    string $model,
    string $attribute,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\MissingModelsManager

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/MissingModelsManager.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\MissingModelsManager`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsmissingmodelsmanager-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsmissingmodelsmanager-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\MixedDatabaseSystems

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/MixedDatabaseSystems.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\MixedDatabaseSystems`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsmixeddatabasesystems-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsmixeddatabasesystems-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\ModelSourceNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/ModelSourceNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\ModelSourceNotFound`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsmodelsourcenotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsmodelsourcenotfound-__construct }

```php
public function __construct(
    string $name,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\ModelsListNotLoaded

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/ModelsListNotLoaded.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\ModelsListNotLoaded`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsmodelslistnotloaded-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsmodelslistnotloaded-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\MultipleSqlStatementsNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/MultipleSqlStatementsNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\MultipleSqlStatementsNotSupported`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsmultiplesqlstatementsnotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsmultiplesqlstatementsnotsupported-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\NoModelForAlias

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/NoModelForAlias.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\NoModelForAlias`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsnomodelforalias-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $model,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsnomodelforalias-__construct }

```php
public function __construct(
    string $model,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\PhqlColumnNotInMap

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/PhqlColumnNotInMap.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\PhqlColumnNotInMap`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsphqlcolumnnotinmap-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $fieldName )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsphqlcolumnnotinmap-__construct }

```php
public function __construct( string $fieldName );
```


## Mvc\Model\Query\Exceptions\ReadConnectionMissing

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/ReadConnectionMissing.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\ReadConnectionMissing`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsreadconnectionmissing-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsreadconnectionmissing-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\RelationshipNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/RelationshipNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\RelationshipNotFound`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsrelationshipnotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $model,
    string $relationship,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsrelationshipnotfound-__construct }

```php
public function __construct(
    string $model,
    string $relationship,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\ResultsetClassNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/ResultsetClassNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\ResultsetClassNotFound`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsresultsetclassnotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $className )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsresultsetclassnotfound-__construct }

```php
public function __construct( string $className );
```


## Mvc\Model\Query\Exceptions\ResultsetNonCacheable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/ResultsetNonCacheable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\ResultsetNonCacheable`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsresultsetnoncacheable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsresultsetnoncacheable-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\UnknownBindType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/UnknownBindType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\UnknownBindType`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsunknownbindtype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $type )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsunknownbindtype-__construct }

```php
public function __construct( string $type );
```


## Mvc\Model\Query\Exceptions\UnknownColumnType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/UnknownColumnType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\UnknownColumnType`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsunknowncolumntype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $type )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsunknowncolumntype-__construct }

```php
public function __construct( string $type );
```


## Mvc\Model\Query\Exceptions\UnknownJoinType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/UnknownJoinType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\UnknownJoinType`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsunknownjointype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $type,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsunknownjointype-__construct }

```php
public function __construct(
    string $type,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\UnknownModelOrAlias

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/UnknownModelOrAlias.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\UnknownModelOrAlias`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsunknownmodeloralias-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $model,
    string $tag,
    string $phql
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsunknownmodeloralias-__construct }

```php
public function __construct(
    string $model,
    string $tag,
    string $phql
);
```


## Mvc\Model\Query\Exceptions\UnknownPhqlExpression

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/UnknownPhqlExpression.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpression`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsunknownphqlexpression-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsunknownphqlexpression-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\UnknownPhqlExpressionType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/UnknownPhqlExpressionType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpressionType`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsunknownphqlexpressiontype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $type )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsunknownphqlexpressiontype-__construct }

```php
public function __construct( string $type );
```


## Mvc\Model\Query\Exceptions\UnknownPhqlStatement

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/UnknownPhqlStatement.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlStatement`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsunknownphqlstatement-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $type )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsunknownphqlstatement-__construct }

```php
public function __construct( string $type );
```


## Mvc\Model\Query\Exceptions\UpdateMultipleNotSupported

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/UpdateMultipleNotSupported.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\UpdateMultipleNotSupported`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionsupdatemultiplenotsupported-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionsupdatemultiplenotsupported-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Exceptions\WriteConnectionMissing

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Exceptions/WriteConnectionMissing.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Query\Exceptions\WriteConnectionMissing`**

</div>

__Uses__ `Phalcon\Mvc\Model\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelqueryexceptionswriteconnectionmissing-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcmodelqueryexceptionswriteconnectionmissing-__construct }

```php
public function __construct();
```


## Mvc\Model\Query\Lang

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Lang.zep){ .src-btn }

Phalcon\Mvc\Model\Query\Lang

PHQL is implemented as a parser (written in C) that translates syntax in
that of the target RDBMS. It allows Phalcon to offer a unified SQL language to
the developer, while internally doing all the work of translating PHQL
instructions to the most optimal SQL instructions depending on the
RDBMS type associated with a model.

To achieve the highest performance possible, we wrote a parser that uses
the same technology as SQLite. This technology provides a small in-memory
parser with a very low memory footprint that is also thread-safe.

```php
use Phalcon\Mvc\Model\Query\Lang;

$intermediate = Lang::parsePHQL(
    "SELECT r.* FROM Robots r LIMIT 10"
);
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Query\Lang`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelquerylang-parsephql">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">parsePHQL( string $phql )</code>
<span class="desc">Parses a PHQL statement returning an intermediate representation (IR)</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `parsePHQL()` { #mvcmodelquerylang-parsephql }

```php
public static function parsePHQL( string $phql ): array;
```

Parses a PHQL statement returning an intermediate representation (IR)


## Mvc\Model\Query\Status

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/Status.zep){ .src-btn }

This class represents the status returned by a PHQL
statement like INSERT, UPDATE or DELETE. It offers context
information and the related messages produced by the
model which finally executes the operations when it fails

```php
$phql = "UPDATE Robots SET name = :name:, type = :type:, year = :year: WHERE id = :id:";

$status = $app->modelsManager->executeQuery(
    $phql,
    [
        "id"   => 100,
        "name" => "Astroy Boy",
        "type" => "mechanical",
        "year" => 1959,
    ]
);

// Check if the update was successful
if ($status->success()) {
    echo "OK";
}
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Query\Status`** — implements [`Phalcon\Mvc\Model\Query\StatusInterface`](#mvcmodelquerystatusinterface)

</div>

__Uses__ `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelquerystatus-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    bool $success,
    ModelInterface $model = null
)</code>
<span class="desc">Phalcon\Mvc\Model\Query\Status</span>
</a>
<a class="api-item" href="#mvcmodelquerystatus-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface[]</code>
<code class="sig">getMessages()</code>
<span class="desc">Returns the messages produced because of a failed operation</span>
</a>
<a class="api-item" href="#mvcmodelquerystatus-getmodel">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|null</code>
<code class="sig">getModel()</code>
<span class="desc">Returns the model that executed the action</span>
</a>
<a class="api-item" href="#mvcmodelquerystatus-success">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">success()</code>
<span class="desc">Allows to check if the executed operation was successful</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$model` `ModelInterface|null`

-   `protected`{ .vis-protected } `$success` `bool`

</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #mvcmodelquerystatus-__construct }

```php
public function __construct(
    bool $success,
    ModelInterface $model = null
);
```

Phalcon\Mvc\Model\Query\Status

#### `getMessages()` { #mvcmodelquerystatus-getmessages }

```php
public function getMessages(): MessageInterface[];
```

Returns the messages produced because of a failed operation

#### `getModel()` { #mvcmodelquerystatus-getmodel }

```php
public function getModel(): ModelInterface|null;
```

Returns the model that executed the action

#### `success()` { #mvcmodelquerystatus-success }

```php
public function success(): bool;
```

Allows to check if the executed operation was successful


## Mvc\Model\Query\StatusInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Query/StatusInterface.zep){ .src-btn }

Interface for Phalcon\Mvc\Model\Query\Status

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Query\StatusInterface`**

</div>

__Uses__ `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelquerystatusinterface-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface[]</code>
<code class="sig">getMessages()</code>
<span class="desc">Returns the messages produced by an operation failed</span>
</a>
<a class="api-item" href="#mvcmodelquerystatusinterface-getmodel">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|null</code>
<code class="sig">getModel()</code>
<span class="desc">Returns the model which executed the action</span>
</a>
<a class="api-item" href="#mvcmodelquerystatusinterface-success">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">success()</code>
<span class="desc">Allows to check if the executed operation was successful</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `getMessages()` { #mvcmodelquerystatusinterface-getmessages }

```php
public function getMessages(): MessageInterface[];
```

Returns the messages produced by an operation failed

#### `getModel()` { #mvcmodelquerystatusinterface-getmodel }

```php
public function getModel(): ModelInterface|null;
```

Returns the model which executed the action

#### `success()` { #mvcmodelquerystatusinterface-success }

```php
public function success(): bool;
```

Allows to check if the executed operation was successful


## Mvc\Model\Relation

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Relation.zep){ .src-btn }

Phalcon\Mvc\Model\Relation

This class represents a relationship between two models

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Relation`** — implements [`Phalcon\Mvc\Model\RelationInterface`](#mvcmodelrelationinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelrelation-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    int $type,
    string $referencedModel,
    mixed $fields,
    mixed $referencedFields,
    array $options = []
)</code>
<span class="desc">Phalcon\Mvc\Model\Relation constructor</span>
</a>
<a class="api-item" href="#mvcmodelrelation-getfields">
<code class="vis vis-public">public</code>
<code class="sig">getFields()</code>
<span class="desc">Returns the fields</span>
</a>
<a class="api-item" href="#mvcmodelrelation-getforeignkey">
<code class="vis vis-public">public</code>
<code class="sig">getForeignKey()</code>
<span class="desc">Returns the foreign key configuration</span>
</a>
<a class="api-item" href="#mvcmodelrelation-getintermediatefields">
<code class="vis vis-public">public</code>
<code class="sig">getIntermediateFields()</code>
<span class="desc">Gets the intermediate fields for has-*-through relations</span>
</a>
<a class="api-item" href="#mvcmodelrelation-getintermediatemodel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getIntermediateModel()</code>
<span class="desc">Gets the intermediate model for has-*-through relations</span>
</a>
<a class="api-item" href="#mvcmodelrelation-getintermediatereferencedfields">
<code class="vis vis-public">public</code>
<code class="sig">getIntermediateReferencedFields()</code>
<span class="desc">Gets the intermediate referenced fields for has-*-through relations</span>
</a>
<a class="api-item" href="#mvcmodelrelation-getoption">
<code class="vis vis-public">public</code>
<code class="sig">getOption( string $name )</code>
<span class="desc">Returns an option by the specified name</span>
</a>
<a class="api-item" href="#mvcmodelrelation-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getOptions()</code>
<span class="desc">Returns the options</span>
</a>
<a class="api-item" href="#mvcmodelrelation-getparams">
<code class="vis vis-public">public</code>
<code class="sig">getParams()</code>
<span class="desc">Returns parameters that must be always used when the related records are obtained</span>
</a>
<a class="api-item" href="#mvcmodelrelation-getreferencedfields">
<code class="vis vis-public">public</code>
<code class="sig">getReferencedFields()</code>
<span class="desc">Returns the referenced fields</span>
</a>
<a class="api-item" href="#mvcmodelrelation-getreferencedmodel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getReferencedModel()</code>
<span class="desc">Returns the referenced model</span>
</a>
<a class="api-item" href="#mvcmodelrelation-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getType()</code>
<span class="desc">Returns the relation type</span>
</a>
<a class="api-item" href="#mvcmodelrelation-isforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isForeignKey()</code>
<span class="desc">Check whether the relation act as a foreign key</span>
</a>
<a class="api-item" href="#mvcmodelrelation-isreusable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isReusable()</code>
<span class="desc">Check if records returned by getting belongs-to/has-many are implicitly cached during the current request</span>
</a>
<a class="api-item" href="#mvcmodelrelation-isthrough">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isThrough()</code>
<span class="desc">Check whether the relation is a &#039;many-to-many&#039; relation or not</span>
</a>
<a class="api-item" href="#mvcmodelrelation-setintermediaterelation">
<code class="vis vis-public">public</code>
<code class="sig">setIntermediateRelation(
    mixed $intermediateFields,
    string $intermediateModel,
    mixed $intermediateReferencedFields
)</code>
<span class="desc">Sets the intermediate model data for has-*-through relations</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `ACTION_CASCADE = 2` `int`

-   `ACTION_RESTRICT = 1` `int`

-   `BELONGS_TO = 0` `int`

-   `HAS_MANY = 2` `int`

-   `HAS_MANY_THROUGH = 4` `int`

-   `HAS_ONE = 1` `int`

-   `HAS_ONE_THROUGH = 3` `int`

-   `NO_ACTION = 0` `int`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$fields` `array|string`

-   `protected`{ .vis-protected } `$intermediateFields` `array|string`

-   `protected`{ .vis-protected } `$intermediateModel = null` `string|null`

-   `protected`{ .vis-protected } `$intermediateReferencedFields` `array|string`

-   `protected`{ .vis-protected } `$options = []` `array`

-   `protected`{ .vis-protected } `$referencedFields` `array|string`

-   `protected`{ .vis-protected } `$referencedModel` `string`

-   `protected`{ .vis-protected } `$type` `int`

</div>

### Methods

<div class="api-group">Public · 16</div>

#### `__construct()` { #mvcmodelrelation-__construct }

```php
public function __construct(
    int $type,
    string $referencedModel,
    mixed $fields,
    mixed $referencedFields,
    array $options = []
);
```

Phalcon\Mvc\Model\Relation constructor

#### `getFields()` { #mvcmodelrelation-getfields }

```php
public function getFields();
```

Returns the fields

#### `getForeignKey()` { #mvcmodelrelation-getforeignkey }

```php
public function getForeignKey();
```

Returns the foreign key configuration

#### `getIntermediateFields()` { #mvcmodelrelation-getintermediatefields }

```php
public function getIntermediateFields();
```

Gets the intermediate fields for has-*-through relations

#### `getIntermediateModel()` { #mvcmodelrelation-getintermediatemodel }

```php
public function getIntermediateModel(): string;
```

Gets the intermediate model for has-*-through relations

#### `getIntermediateReferencedFields()` { #mvcmodelrelation-getintermediatereferencedfields }

```php
public function getIntermediateReferencedFields();
```

Gets the intermediate referenced fields for has-*-through relations

#### `getOption()` { #mvcmodelrelation-getoption }

```php
public function getOption( string $name );
```

Returns an option by the specified name
If the option does not exist null is returned

#### `getOptions()` { #mvcmodelrelation-getoptions }

```php
public function getOptions(): array;
```

Returns the options

#### `getParams()` { #mvcmodelrelation-getparams }

```php
public function getParams();
```

Returns parameters that must be always used when the related records are obtained

#### `getReferencedFields()` { #mvcmodelrelation-getreferencedfields }

```php
public function getReferencedFields();
```

Returns the referenced fields

#### `getReferencedModel()` { #mvcmodelrelation-getreferencedmodel }

```php
public function getReferencedModel(): string;
```

Returns the referenced model

#### `getType()` { #mvcmodelrelation-gettype }

```php
public function getType(): int;
```

Returns the relation type

#### `isForeignKey()` { #mvcmodelrelation-isforeignkey }

```php
public function isForeignKey(): bool;
```

Check whether the relation act as a foreign key

#### `isReusable()` { #mvcmodelrelation-isreusable }

```php
public function isReusable(): bool;
```

Check if records returned by getting belongs-to/has-many are implicitly cached during the current request

#### `isThrough()` { #mvcmodelrelation-isthrough }

```php
public function isThrough(): bool;
```

Check whether the relation is a 'many-to-many' relation or not

#### `setIntermediateRelation()` { #mvcmodelrelation-setintermediaterelation }

```php
public function setIntermediateRelation(
    mixed $intermediateFields,
    string $intermediateModel,
    mixed $intermediateReferencedFields
);
```

Sets the intermediate model data for has-*-through relations


## Mvc\Model\RelationInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/RelationInterface.zep){ .src-btn }

Phalcon\Mvc\Model\RelationInterface

Interface for Phalcon\Mvc\Model\Relation

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\RelationInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelrelationinterface-getfields">
<code class="vis vis-public">public</code>
<code class="sig">getFields()</code>
<span class="desc">Returns the fields</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-getforeignkey">
<code class="vis vis-public">public</code>
<code class="sig">getForeignKey()</code>
<span class="desc">Returns the foreign key configuration</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-getintermediatefields">
<code class="vis vis-public">public</code>
<code class="sig">getIntermediateFields()</code>
<span class="desc">Gets the intermediate fields for has-*-through relations</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-getintermediatemodel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getIntermediateModel()</code>
<span class="desc">Gets the intermediate model for has-*-through relations</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-getintermediatereferencedfields">
<code class="vis vis-public">public</code>
<code class="sig">getIntermediateReferencedFields()</code>
<span class="desc">Gets the intermediate referenced fields for has-*-through relations</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-getoption">
<code class="vis vis-public">public</code>
<code class="sig">getOption( string $name )</code>
<span class="desc">Returns an option by the specified name</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getOptions()</code>
<span class="desc">Returns the options</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-getparams">
<code class="vis vis-public">public</code>
<code class="sig">getParams()</code>
<span class="desc">Returns parameters that must be always used when the related records are obtained</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-getreferencedfields">
<code class="vis vis-public">public</code>
<code class="sig">getReferencedFields()</code>
<span class="desc">Returns the referenced fields</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-getreferencedmodel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getReferencedModel()</code>
<span class="desc">Returns the referenced model</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getType()</code>
<span class="desc">Returns the relations type</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-isforeignkey">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isForeignKey()</code>
<span class="desc">Check whether the relation act as a foreign key</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-isreusable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isReusable()</code>
<span class="desc">Check if records returned by getting belongs-to/has-many are implicitly cached during the current request</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-isthrough">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isThrough()</code>
<span class="desc">Check whether the relation is a &#039;many-to-many&#039; relation or not</span>
</a>
<a class="api-item" href="#mvcmodelrelationinterface-setintermediaterelation">
<code class="vis vis-public">public</code>
<code class="sig">setIntermediateRelation(
    mixed $intermediateFields,
    string $intermediateModel,
    mixed $intermediateReferencedFields
)</code>
<span class="desc">Sets the intermediate model data for has-*-through relations</span>
</a>
</div>

### Methods

<div class="api-group">Public · 15</div>

#### `getFields()` { #mvcmodelrelationinterface-getfields }

```php
public function getFields();
```

Returns the fields

#### `getForeignKey()` { #mvcmodelrelationinterface-getforeignkey }

```php
public function getForeignKey();
```

Returns the foreign key configuration

#### `getIntermediateFields()` { #mvcmodelrelationinterface-getintermediatefields }

```php
public function getIntermediateFields();
```

Gets the intermediate fields for has-*-through relations

#### `getIntermediateModel()` { #mvcmodelrelationinterface-getintermediatemodel }

```php
public function getIntermediateModel(): string;
```

Gets the intermediate model for has-*-through relations

#### `getIntermediateReferencedFields()` { #mvcmodelrelationinterface-getintermediatereferencedfields }

```php
public function getIntermediateReferencedFields();
```

Gets the intermediate referenced fields for has-*-through relations

#### `getOption()` { #mvcmodelrelationinterface-getoption }

```php
public function getOption( string $name );
```

Returns an option by the specified name
If the option does not exist null is returned

#### `getOptions()` { #mvcmodelrelationinterface-getoptions }

```php
public function getOptions(): array;
```

Returns the options

#### `getParams()` { #mvcmodelrelationinterface-getparams }

```php
public function getParams();
```

Returns parameters that must be always used when the related records are obtained

#### `getReferencedFields()` { #mvcmodelrelationinterface-getreferencedfields }

```php
public function getReferencedFields();
```

Returns the referenced fields

#### `getReferencedModel()` { #mvcmodelrelationinterface-getreferencedmodel }

```php
public function getReferencedModel(): string;
```

Returns the referenced model

#### `getType()` { #mvcmodelrelationinterface-gettype }

```php
public function getType(): int;
```

Returns the relations type

#### `isForeignKey()` { #mvcmodelrelationinterface-isforeignkey }

```php
public function isForeignKey(): bool;
```

Check whether the relation act as a foreign key

#### `isReusable()` { #mvcmodelrelationinterface-isreusable }

```php
public function isReusable(): bool;
```

Check if records returned by getting belongs-to/has-many are implicitly cached during the current request

#### `isThrough()` { #mvcmodelrelationinterface-isthrough }

```php
public function isThrough(): bool;
```

Check whether the relation is a 'many-to-many' relation or not

#### `setIntermediateRelation()` { #mvcmodelrelationinterface-setintermediaterelation }

```php
public function setIntermediateRelation(
    mixed $intermediateFields,
    string $intermediateModel,
    mixed $intermediateReferencedFields
);
```

Sets the intermediate model data for has-*-through relations


## Mvc\Model\ResultInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/ResultInterface.zep){ .src-btn }

Phalcon\Mvc\Model\ResultInterface

All single objects passed as base objects to Resultsets must implement this interface

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\ResultInterface`**

</div>

__Uses__ `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelresultinterface-setdirtystate">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|bool</code>
<code class="sig">setDirtyState( int $dirtyState )</code>
<span class="desc">Sets the object&#039;s state</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `setDirtyState()` { #mvcmodelresultinterface-setdirtystate }

```php
public function setDirtyState( int $dirtyState ): ModelInterface|bool;
```

Sets the object's state


## Mvc\Model\Resultset

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Resultset.zep){ .src-btn }

Phalcon\Mvc\Model\Resultset

This component allows to Phalcon\Mvc\Model returns large resultsets with the minimum memory consumption
Resultsets can be traversed using a standard foreach or a while statement. If a resultset is serialized
it will dump all the rows into a big array. Then unserialize will retrieve the rows as they were before
serializing.

```php

// Using a standard foreach
$robots = Robots::find(
    [
        "type = 'virtual'",
        "order" => "name",
    ]
);

foreach ($robots as robot) {
    echo robot->name, "\n";
}

// Using a while
$robots = Robots::find(
    [
        "type = 'virtual'",
        "order" => "name",
    ]
);

$robots->rewind();

while ($robots->valid()) {
    $robot = $robots->current();

    echo $robot->name, "\n";

    $robots->next();
}
```
@template TKey
@template TValue
@implements Iterator<TKey, TValue>
@implements ArrayAccess<TKey, TValue>

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Resultset`** — implements [`Phalcon\Mvc\Model\ResultsetInterface`](#mvcmodelresultsetinterface), `Iterator`, `SeekableIterator`, `Countable`, `ArrayAccess`, `Serializable`, `JsonSerializable`
    - [`Phalcon\Mvc\Model\Resultset\Complex`](#mvcmodelresultsetcomplex)
    - [`Phalcon\Mvc\Model\Resultset\Simple`](#mvcmodelresultsetsimple)

</div>

__Uses__ `ArrayAccess` · `Closure` · `Countable` · `Iterator` · `JsonSerializable` · `Phalcon\Cache\CacheInterface` · `Phalcon\Db\Enum` · `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\Model` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Exceptions\CursorIsImmutable` · `Phalcon\Mvc\Model\Exceptions\IndexNotInCursor` · `Phalcon\Mvc\Model\Exceptions\InvalidResultsetCacheService` · `Phalcon\Mvc\Model\Exceptions\InvalidReturnedRecord` · `Phalcon\Storage\Serializer\SerializerInterface` · `Phalcon\Support\Settings` · `SeekableIterator` · `Serializable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelresultset-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    mixed $result,
    mixed $cache = null
)</code>
<span class="desc">Phalcon\Mvc\Model\Resultset constructor</span>
</a>
<a class="api-item" href="#mvcmodelresultset-count">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">count()</code>
<span class="desc">Counts how many rows are in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">delete( Closure $conditionCallback = null )</code>
<span class="desc">Deletes every record in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-filter">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface[]</code>
<code class="sig">filter( callable $filter )</code>
<span class="desc">Filters a resultset returning only those the developer requires</span>
</a>
<a class="api-item" href="#mvcmodelresultset-getcache">
<code class="vis vis-public">public</code>
<code class="ret">CacheInterface|null</code>
<code class="sig">getCache()</code>
<span class="desc">Returns the associated cache for the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-getfirst">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">getFirst()</code>
<span class="desc">Get first row in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-gethydratemode">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getHydrateMode()</code>
<span class="desc">Returns the current hydration mode</span>
</a>
<a class="api-item" href="#mvcmodelresultset-getlast">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|null</code>
<code class="sig">getLast()</code>
<span class="desc">Get last row in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface[]</code>
<code class="sig">getMessages()</code>
<span class="desc">Returns the error messages produced by a batch operation</span>
</a>
<a class="api-item" href="#mvcmodelresultset-getresult">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getResult()</code>
</a>
<a class="api-item" href="#mvcmodelresultset-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getType()</code>
<span class="desc">Returns the internal type of data retrieval that the resultset is using</span>
</a>
<a class="api-item" href="#mvcmodelresultset-isfresh">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isFresh()</code>
<span class="desc">Tell if the resultset if fresh or an old one cached</span>
</a>
<a class="api-item" href="#mvcmodelresultset-jsonserialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">jsonSerialize()</code>
<span class="desc">Returns serialised model objects as array for json_encode.</span>
</a>
<a class="api-item" href="#mvcmodelresultset-key">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig">key()</code>
<span class="desc">Gets pointer number of active row in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-next">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">next()</code>
<span class="desc">Moves cursor to next row in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">offsetExists( mixed $index )</code>
<span class="desc">Checks whether offset exists in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">offsetGet( mixed $index )</code>
<span class="desc">Gets row in a specific position of the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">offsetSet(
    mixed $offset,
    mixed $value
)</code>
<span class="desc">Resultsets cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface</span>
</a>
<a class="api-item" href="#mvcmodelresultset-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">offsetUnset( mixed $offset )</code>
<span class="desc">Resultsets cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface</span>
</a>
<a class="api-item" href="#mvcmodelresultset-refresh">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">refresh()</code>
</a>
<a class="api-item" href="#mvcmodelresultset-rewind">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">rewind()</code>
<span class="desc">Rewinds resultset to its beginning</span>
</a>
<a class="api-item" href="#mvcmodelresultset-seek">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">seek( mixed $position )</code>
<span class="desc">Changes the internal pointer to a specific position in the resultset.</span>
</a>
<a class="api-item" href="#mvcmodelresultset-sethydratemode">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface</code>
<code class="sig">setHydrateMode( int $hydrateMode )</code>
<span class="desc">Sets the hydration mode in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-setisfresh">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface</code>
<code class="sig">setIsFresh( bool $isFresh )</code>
<span class="desc">Set if the resultset is fresh or an old one cached</span>
</a>
<a class="api-item" href="#mvcmodelresultset-update">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">update(
    mixed $data,
    Closure $conditionCallback = null
)</code>
<span class="desc">Updates every record in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultset-valid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">valid()</code>
<span class="desc">Check whether internal resource has rows to fetch</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `HYDRATE_ARRAYS = 1` `int`

-   `HYDRATE_OBJECTS = 2` `int`

-   `HYDRATE_RECORDS = 0` `int`

-   `TYPE_RESULT_FULL = 0` `int`

-   `TYPE_RESULT_PARTIAL = 1` `int`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$activeRow = null` `mixed|null`

-   `protected`{ .vis-protected } `$cache = null` `CacheInterface|null`

-   `protected`{ .vis-protected } `$count = 0` `int`

-   `protected`{ .vis-protected } `$errorMessages = []` `array`

-   `protected`{ .vis-protected } `$hydrateMode = 0` `int`

-   `protected`{ .vis-protected } `$isFresh = true` `bool`

-   `protected`{ .vis-protected } `$pointer = 0` `int`

-   `protected`{ .vis-protected } `$result` `ResultInterface|bool`

    Phalcon\Db\ResultInterface or false for empty resultset

-   `protected`{ .vis-protected } `$row = null` `mixed|null`

-   `protected`{ .vis-protected } `$rows = null` `array|null`

</div>

### Methods

<div class="api-group">Public · 26</div>

#### `__construct()` { #mvcmodelresultset-__construct }

```php
public function __construct(
    mixed $result,
    mixed $cache = null
);
```

Phalcon\Mvc\Model\Resultset constructor

#### `count()` { #mvcmodelresultset-count }

```php
final public function count(): int;
```

Counts how many rows are in the resultset

#### `delete()` { #mvcmodelresultset-delete }

```php
public function delete( Closure $conditionCallback = null ): bool;
```

Deletes every record in the resultset

#### `filter()` { #mvcmodelresultset-filter }

```php
public function filter( callable $filter ): ModelInterface[];
```

Filters a resultset returning only those the developer requires

```php
$filtered = $robots->filter(
    function ($robot) {
        if ($robot->id < 3) {
            return $robot;
        }
    }
);
```

#### `getCache()` { #mvcmodelresultset-getcache }

```php
public function getCache(): CacheInterface|null;
```

Returns the associated cache for the resultset

#### `getFirst()` { #mvcmodelresultset-getfirst }

```php
public function getFirst(): mixed|null;
```

Get first row in the resultset

```php
$model = new Robots();
$manager = $model->getModelsManager();

// \Robots
$manager->createQuery('SELECT * FROM Robots')
        ->execute()
        ->getFirst();

// \Phalcon\Mvc\Model\Row
$manager->createQuery('SELECT r.id FROM Robots AS r')
        ->execute()
        ->getFirst();

// NULL
$manager->createQuery('SELECT r.id FROM Robots AS r WHERE r.name = "NON-EXISTENT"')
        ->execute()
        ->getFirst();
```

#### `getHydrateMode()` { #mvcmodelresultset-gethydratemode }

```php
public function getHydrateMode(): int;
```

Returns the current hydration mode

#### `getLast()` { #mvcmodelresultset-getlast }

```php
public function getLast(): ModelInterface|null;
```

Get last row in the resultset

#### `getMessages()` { #mvcmodelresultset-getmessages }

```php
public function getMessages(): MessageInterface[];
```

Returns the error messages produced by a batch operation

#### `getResult()` { #mvcmodelresultset-getresult }

```php
public function getResult(): mixed;
```

#### `getType()` { #mvcmodelresultset-gettype }

```php
public function getType(): int;
```

Returns the internal type of data retrieval that the resultset is using

#### `isFresh()` { #mvcmodelresultset-isfresh }

```php
public function isFresh(): bool;
```

Tell if the resultset if fresh or an old one cached

#### `jsonSerialize()` { #mvcmodelresultset-jsonserialize }

```php
public function jsonSerialize(): array;
```

Returns serialised model objects as array for json_encode.
Calls jsonSerialize on each object if present

```php
$robots = Robots::find();

echo json_encode($robots);
```

#### `key()` { #mvcmodelresultset-key }

```php
public function key(): int|null;
```

Gets pointer number of active row in the resultset

#### `next()` { #mvcmodelresultset-next }

```php
public function next(): void;
```

Moves cursor to next row in the resultset

#### `offsetExists()` { #mvcmodelresultset-offsetexists }

```php
public function offsetExists( mixed $index ): bool;
```

Checks whether offset exists in the resultset

#### `offsetGet()` { #mvcmodelresultset-offsetget }

```php
public function offsetGet( mixed $index ): mixed;
```

Gets row in a specific position of the resultset

#### `offsetSet()` { #mvcmodelresultset-offsetset }

```php
public function offsetSet(
    mixed $offset,
    mixed $value
): void;
```

Resultsets cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface

#### `offsetUnset()` { #mvcmodelresultset-offsetunset }

```php
public function offsetUnset( mixed $offset ): void;
```

Resultsets cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface

#### `refresh()` { #mvcmodelresultset-refresh }

```php
public function refresh(): bool;
```

#### `rewind()` { #mvcmodelresultset-rewind }

```php
final public function rewind(): void;
```

Rewinds resultset to its beginning

#### `seek()` { #mvcmodelresultset-seek }

```php
final public function seek( mixed $position ): void;
```

Changes the internal pointer to a specific position in the resultset.
Set the new position if required, and then set this->row

#### `setHydrateMode()` { #mvcmodelresultset-sethydratemode }

```php
public function setHydrateMode( int $hydrateMode ): ResultsetInterface;
```

Sets the hydration mode in the resultset

#### `setIsFresh()` { #mvcmodelresultset-setisfresh }

```php
public function setIsFresh( bool $isFresh ): ResultsetInterface;
```

Set if the resultset is fresh or an old one cached

#### `update()` { #mvcmodelresultset-update }

```php
public function update(
    mixed $data,
    Closure $conditionCallback = null
): bool;
```

Updates every record in the resultset

#### `valid()` { #mvcmodelresultset-valid }

```php
public function valid(): bool;
```

Check whether internal resource has rows to fetch


## Mvc\Model\ResultsetInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/ResultsetInterface.zep){ .src-btn }

Phalcon\Mvc\Model\ResultsetInterface

Interface for Phalcon\Mvc\Model\Resultset

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\ResultsetInterface`**

</div>

__Uses__ `Closure` · `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelresultsetinterface-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">delete( Closure $conditionCallback = null )</code>
<span class="desc">Deletes every record in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-filter">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface[]</code>
<code class="sig">filter( callable $filter )</code>
<span class="desc">Filters a resultset returning only those the developer requires</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-getcache">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">getCache()</code>
<span class="desc">Returns the associated cache for the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-getfirst">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">getFirst()</code>
<span class="desc">Get first row in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-gethydratemode">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getHydrateMode()</code>
<span class="desc">Returns the current hydration mode</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-getlast">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|null</code>
<code class="sig">getLast()</code>
<span class="desc">Get last row in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface[]</code>
<code class="sig">getMessages()</code>
<span class="desc">Returns the error messages produced by a batch operation</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getType()</code>
<span class="desc">Returns the internal type of data retrieval that the resultset is using</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-isfresh">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isFresh()</code>
<span class="desc">Tell if the resultset if fresh or an old one cached</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-sethydratemode">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface</code>
<code class="sig">setHydrateMode( int $hydrateMode )</code>
<span class="desc">Sets the hydration mode in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-setisfresh">
<code class="vis vis-public">public</code>
<code class="ret">ResultsetInterface</code>
<code class="sig">setIsFresh( bool $isFresh )</code>
<span class="desc">Set if the resultset is fresh or an old one cached</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">toArray()</code>
<span class="desc">Returns a complete resultset as an array, if the resultset has a big number of rows</span>
</a>
<a class="api-item" href="#mvcmodelresultsetinterface-update">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">update(
    mixed $data,
    Closure $conditionCallback = null
)</code>
<span class="desc">Updates every record in the resultset</span>
</a>
</div>

### Methods

<div class="api-group">Public · 13</div>

#### `delete()` { #mvcmodelresultsetinterface-delete }

```php
public function delete( Closure $conditionCallback = null ): bool;
```

Deletes every record in the resultset

#### `filter()` { #mvcmodelresultsetinterface-filter }

```php
public function filter( callable $filter ): ModelInterface[];
```

Filters a resultset returning only those the developer requires

```php
$filtered = $robots->filter(
    function ($robot) {
        if ($robot->id < 3) {
            return $robot;
        }
    }
);
```

#### `getCache()` { #mvcmodelresultsetinterface-getcache }

```php
public function getCache(): mixed|null;
```

Returns the associated cache for the resultset

#### `getFirst()` { #mvcmodelresultsetinterface-getfirst }

```php
public function getFirst(): mixed|null;
```

Get first row in the resultset

#### `getHydrateMode()` { #mvcmodelresultsetinterface-gethydratemode }

```php
public function getHydrateMode(): int;
```

Returns the current hydration mode

#### `getLast()` { #mvcmodelresultsetinterface-getlast }

```php
public function getLast(): ModelInterface|null;
```

Get last row in the resultset

#### `getMessages()` { #mvcmodelresultsetinterface-getmessages }

```php
public function getMessages(): MessageInterface[];
```

Returns the error messages produced by a batch operation

#### `getType()` { #mvcmodelresultsetinterface-gettype }

```php
public function getType(): int;
```

Returns the internal type of data retrieval that the resultset is using

#### `isFresh()` { #mvcmodelresultsetinterface-isfresh }

```php
public function isFresh(): bool;
```

Tell if the resultset if fresh or an old one cached

#### `setHydrateMode()` { #mvcmodelresultsetinterface-sethydratemode }

```php
public function setHydrateMode( int $hydrateMode ): ResultsetInterface;
```

Sets the hydration mode in the resultset

#### `setIsFresh()` { #mvcmodelresultsetinterface-setisfresh }

```php
public function setIsFresh( bool $isFresh ): ResultsetInterface;
```

Set if the resultset is fresh or an old one cached

#### `toArray()` { #mvcmodelresultsetinterface-toarray }

```php
public function toArray(): array;
```

Returns a complete resultset as an array, if the resultset has a big number of rows
it could consume more memory than currently it does.

#### `update()` { #mvcmodelresultsetinterface-update }

```php
public function update(
    mixed $data,
    Closure $conditionCallback = null
): bool;
```

Updates every record in the resultset


## Mvc\Model\Resultset\Complex

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Resultset/Complex.zep){ .src-btn }

Phalcon\Mvc\Model\Resultset\Complex

Complex resultsets may include complete objects and scalar values.
This class builds every complex row as it is required

@template TKey of int
@template TValue of mixed

<div class="api-tree" markdown>

- [`Phalcon\Mvc\Model\Resultset`](#mvcmodelresultset)
    - **`Phalcon\Mvc\Model\Resultset\Complex`**

</div>

__Uses__ `Phalcon\Db\ResultInterface` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\Model` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Exception` · `Phalcon\Mvc\Model\Exceptions\CorruptColumnType` · `Phalcon\Mvc\Model\Exceptions\InvalidContainer` · `Phalcon\Mvc\Model\Exceptions\InvalidSerializationData` · `Phalcon\Mvc\Model\Resultset` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Mvc\Model\Row` · `Phalcon\Storage\Serializer\SerializerInterface` · `Phalcon\Support\Settings` · `stdClass`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelresultsetcomplex-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    mixed $columnTypes,
    ResultInterface $result = null,
    mixed $cache = null
)</code>
<span class="desc">Phalcon\Mvc\Model\Resultset\Complex constructor</span>
</a>
<a class="api-item" href="#mvcmodelresultsetcomplex-__serialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">__serialize()</code>
</a>
<a class="api-item" href="#mvcmodelresultsetcomplex-__unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">__unserialize( array $data )</code>
</a>
<a class="api-item" href="#mvcmodelresultsetcomplex-current">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">current()</code>
<span class="desc">Returns current row in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultsetcomplex-serialize">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">serialize()</code>
<span class="desc">Serializing a resultset will dump all related rows into a big array,</span>
</a>
<a class="api-item" href="#mvcmodelresultsetcomplex-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">toArray()</code>
<span class="desc">Returns a complete resultset as an array, if the resultset has a big</span>
</a>
<a class="api-item" href="#mvcmodelresultsetcomplex-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">unserialize( mixed $data )</code>
<span class="desc">Unserializing a resultset will allow to only works on the rows present in the saved state</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$columnTypes` `array`

-   `protected`{ .vis-protected } `$disableHydration = false` `bool`

    Unserialised result-set hydrated all rows already. unserialise() sets
    disableHydration to true

</div>

### Methods

<div class="api-group">Public · 7</div>

#### `__construct()` { #mvcmodelresultsetcomplex-__construct }

```php
public function __construct(
    mixed $columnTypes,
    ResultInterface $result = null,
    mixed $cache = null
);
```

Phalcon\Mvc\Model\Resultset\Complex constructor

#### `__serialize()` { #mvcmodelresultsetcomplex-__serialize }

```php
public function __serialize(): array;
```

#### `__unserialize()` { #mvcmodelresultsetcomplex-__unserialize }

```php
public function __unserialize( array $data ): void;
```

#### `current()` { #mvcmodelresultsetcomplex-current }

```php
final public function current(): mixed;
```

Returns current row in the resultset

#### `serialize()` { #mvcmodelresultsetcomplex-serialize }

```php
public function serialize(): string;
```

Serializing a resultset will dump all related rows into a big array,
serialize it and return the resulting string

#### `toArray()` { #mvcmodelresultsetcomplex-toarray }

```php
public function toArray(): array;
```

Returns a complete resultset as an array, if the resultset has a big
number of rows it could consume more memory than currently it does.

#### `unserialize()` { #mvcmodelresultsetcomplex-unserialize }

```php
public function unserialize( mixed $data ): void;
```

Unserializing a resultset will allow to only works on the rows present in the saved state


## Mvc\Model\Resultset\Simple

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Resultset/Simple.zep){ .src-btn }

Phalcon\Mvc\Model\Resultset\Simple

Simple resultsets only contains a complete objects
This class builds every complete object as it is required

@template TKey of int
@template TValue of \Phalcon\Mvc\ModelInterface

<div class="api-tree" markdown>

- [`Phalcon\Mvc\Model\Resultset`](#mvcmodelresultset)
    - **`Phalcon\Mvc\Model\Resultset\Simple`**

</div>

__Uses__ `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\Model` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Exception` · `Phalcon\Mvc\Model\Exceptions\InvalidContainer` · `Phalcon\Mvc\Model\Exceptions\InvalidSerializationData` · `Phalcon\Mvc\Model\Exceptions\ResultsetColumnNotInMap` · `Phalcon\Mvc\Model\Resultset` · `Phalcon\Mvc\Model\Row` · `Phalcon\Storage\Serializer\SerializerInterface` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelresultsetsimple-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    mixed $columnMap,
    mixed $model,
    mixed $result,
    mixed $cache = null,
    bool $keepSnapshots = false
)</code>
<span class="desc">Phalcon\Mvc\Model\Resultset\Simple constructor</span>
</a>
<a class="api-item" href="#mvcmodelresultsetsimple-__serialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">__serialize()</code>
</a>
<a class="api-item" href="#mvcmodelresultsetsimple-__unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">__unserialize( array $data )</code>
</a>
<a class="api-item" href="#mvcmodelresultsetsimple-current">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|Row|null</code>
<code class="sig">current()</code>
<span class="desc">Returns current row in the resultset</span>
</a>
<a class="api-item" href="#mvcmodelresultsetsimple-serialize">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">serialize()</code>
<span class="desc">Serializing a resultset will dump all related rows into a big array</span>
</a>
<a class="api-item" href="#mvcmodelresultsetsimple-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">toArray( bool $renameColumns = true )</code>
<span class="desc">Returns a complete resultset as an array, if the resultset has a big</span>
</a>
<a class="api-item" href="#mvcmodelresultsetsimple-unserialize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">unserialize( mixed $data )</code>
<span class="desc">Unserializing a resultset will allow to only works on the rows present in</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$columnMap` `array|string`

-   `protected`{ .vis-protected } `$keepSnapshots = false` `bool`

-   `protected`{ .vis-protected } `$model` `ModelInterface|Row`

</div>

### Methods

<div class="api-group">Public · 7</div>

#### `__construct()` { #mvcmodelresultsetsimple-__construct }

```php
public function __construct(
    mixed $columnMap,
    mixed $model,
    mixed $result,
    mixed $cache = null,
    bool $keepSnapshots = false
);
```

Phalcon\Mvc\Model\Resultset\Simple constructor

#### `__serialize()` { #mvcmodelresultsetsimple-__serialize }

```php
public function __serialize(): array;
```

#### `__unserialize()` { #mvcmodelresultsetsimple-__unserialize }

```php
public function __unserialize( array $data ): void;
```

#### `current()` { #mvcmodelresultsetsimple-current }

```php
final public function current(): ModelInterface|Row|null;
```

Returns current row in the resultset

#### `serialize()` { #mvcmodelresultsetsimple-serialize }

```php
public function serialize(): string;
```

Serializing a resultset will dump all related rows into a big array

#### `toArray()` { #mvcmodelresultsetsimple-toarray }

```php
public function toArray( bool $renameColumns = true ): array;
```

Returns a complete resultset as an array, if the resultset has a big
number of rows it could consume more memory than currently it does.
Export the resultset to an array couldn't be faster with a large number
of records

#### `unserialize()` { #mvcmodelresultsetsimple-unserialize }

```php
public function unserialize( mixed $data ): void;
```

Unserializing a resultset will allow to only works on the rows present in
the saved state


## Mvc\Model\Row

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Row.zep){ .src-btn }

This component allows Phalcon\Mvc\Model to return rows without an associated entity.
This objects implements the ArrayAccess interface to allow access the object as object->x or array[x].

<div class="api-tree" markdown>

- `\stdClass`
    - **`Phalcon\Mvc\Model\Row`** — implements [`Phalcon\Mvc\EntityInterface`](#mvcentityinterface), [`Phalcon\Mvc\Model\ResultInterface`](#mvcmodelresultinterface), `ArrayAccess`, `JsonSerializable`

</div>

__Uses__ `ArrayAccess` · `JsonSerializable` · `Phalcon\Mvc\EntityInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Exceptions\IndexNotInRow` · `Phalcon\Mvc\Model\Exceptions\RowIsImmutable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelrow-jsonserialize">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">jsonSerialize()</code>
<span class="desc">Serializes the object for json_encode</span>
</a>
<a class="api-item" href="#mvcmodelrow-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">offsetExists( mixed $index )</code>
<span class="desc">Checks whether offset exists in the row. Returns true when the property</span>
</a>
<a class="api-item" href="#mvcmodelrow-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">offsetGet( mixed $index )</code>
<span class="desc">Gets a record in a specific position of the row</span>
</a>
<a class="api-item" href="#mvcmodelrow-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">offsetSet(
    mixed $offset,
    mixed $value
)</code>
<span class="desc">Rows cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface</span>
</a>
<a class="api-item" href="#mvcmodelrow-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">offsetUnset( mixed $offset )</code>
<span class="desc">Rows cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface</span>
</a>
<a class="api-item" href="#mvcmodelrow-readattribute">
<code class="vis vis-public">public</code>
<code class="sig">readAttribute( string $attribute )</code>
<span class="desc">Reads an attribute value by its name</span>
</a>
<a class="api-item" href="#mvcmodelrow-setdirtystate">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|bool</code>
<code class="sig">setDirtyState( int $dirtyState )</code>
<span class="desc">Set the current object&#039;s state</span>
</a>
<a class="api-item" href="#mvcmodelrow-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">toArray()</code>
<span class="desc">Returns the instance as an array representation</span>
</a>
<a class="api-item" href="#mvcmodelrow-writeattribute">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">writeAttribute(
    string $attribute,
    mixed $value
)</code>
<span class="desc">Writes an attribute value by its name</span>
</a>
</div>

### Methods

<div class="api-group">Public · 9</div>

#### `jsonSerialize()` { #mvcmodelrow-jsonserialize }

```php
public function jsonSerialize(): array;
```

Serializes the object for json_encode

#### `offsetExists()` { #mvcmodelrow-offsetexists }

```php
public function offsetExists( mixed $index ): bool;
```

Checks whether offset exists in the row. Returns true when the property
is present on the row, regardless of whether its value is null - column
presence is the contract, not value truthiness.

#### `offsetGet()` { #mvcmodelrow-offsetget }

```php
public function offsetGet( mixed $index ): mixed;
```

Gets a record in a specific position of the row

#### `offsetSet()` { #mvcmodelrow-offsetset }

```php
public function offsetSet(
    mixed $offset,
    mixed $value
): void;
```

Rows cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface

#### `offsetUnset()` { #mvcmodelrow-offsetunset }

```php
public function offsetUnset( mixed $offset ): void;
```

Rows cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface

#### `readAttribute()` { #mvcmodelrow-readattribute }

```php
public function readAttribute( string $attribute );
```

Reads an attribute value by its name

```php
echo $robot->readAttribute("name");
```

#### `setDirtyState()` { #mvcmodelrow-setdirtystate }

```php
public function setDirtyState( int $dirtyState ): ModelInterface|bool;
```

Set the current object's state

#### `toArray()` { #mvcmodelrow-toarray }

```php
public function toArray(): array;
```

Returns the instance as an array representation

#### `writeAttribute()` { #mvcmodelrow-writeattribute }

```php
public function writeAttribute(
    string $attribute,
    mixed $value
): void;
```

Writes an attribute value by its name

```php
$robot->writeAttribute("name", "Rosey");
```


## Mvc\Model\Transaction

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Transaction.zep){ .src-btn }

Transactions are protective blocks where SQL statements are only permanent if
they can all succeed as one atomic action. Phalcon\Transaction is intended to
be used with Phalcon_Model_Base. Phalcon Transactions should be created using
Phalcon\Transaction\Manager.

```php
use Phalcon\Mvc\Model\Transaction\Failed;
use Phalcon\Mvc\Model\Transaction\Manager;

try {
    $manager = new Manager();

    $transaction = $manager->get();

    $robot = new Robots();

    $robot->setTransaction($transaction);

    $robot->name       = "WALL·E";
    $robot->created_at = date("Y-m-d");

    if ($robot->save() === false) {
        $transaction->rollback("Can't save robot");
    }

    $robotPart = new RobotParts();

    $robotPart->setTransaction($transaction);

    $robotPart->type = "head";

    if ($robotPart->save() === false) {
        $transaction->rollback("Can't save robot part");
    }

    $transaction->commit();
} catch(Failed $e) {
    echo "Failed, reason: ", $e->getMessage();
}
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Transaction`** — implements [`Phalcon\Mvc\Model\TransactionInterface`](#mvcmodeltransactioninterface)

</div>

__Uses__ `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\TransactionInterface` · `Phalcon\Mvc\Model\Transaction\Failed` · `Phalcon\Mvc\Model\Transaction\ManagerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodeltransaction-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    DiInterface $container,
    bool $autoBegin = false,
    string $service = &quot;db&quot;
)</code>
<span class="desc">Phalcon\Mvc\Model\Transaction constructor</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-begin">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">begin()</code>
<span class="desc">Starts the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-commit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">commit()</code>
<span class="desc">Commits the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-getconnection">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">getConnection()</code>
<span class="desc">Returns the connection related to transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getMessages()</code>
<span class="desc">Returns validations messages from last save try</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-ismanaged">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isManaged()</code>
<span class="desc">Checks whether transaction is managed by a transaction manager</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-isvalid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isValid()</code>
<span class="desc">Checks whether internal connection is under an active transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-rollback">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">rollback(
    string $rollbackMessage = null,
    ModelInterface $rollbackRecord = null
)</code>
<span class="desc">Rollbacks the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-setisnewtransaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setIsNewTransaction( bool $isNew )</code>
<span class="desc">Sets if is a reused transaction or new once</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-setrollbackonabort">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setRollbackOnAbort( bool $rollbackOnAbort )</code>
<span class="desc">Sets flag to rollback on abort the HTTP connection</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-setrollbackedrecord">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setRollbackedRecord( ModelInterface $record )</code>
<span class="desc">Sets object which generates rollback action</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-settransactionmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setTransactionManager( ManagerInterface $manager )</code>
<span class="desc">Sets transaction manager related to the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransaction-throwrollbackexception">
<code class="vis vis-public">public</code>
<code class="ret">TransactionInterface</code>
<code class="sig">throwRollbackException( bool $status )</code>
<span class="desc">Enables throwing exception</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$activeTransaction = false` `bool`

-   `protected`{ .vis-protected } `$connection` `AdapterInterface`

-   `protected`{ .vis-protected } `$isNewTransaction = true` `bool`

-   `protected`{ .vis-protected } `$manager = null` `ManagerInterface|null`

-   `protected`{ .vis-protected } `$messages = []` `array`

-   `protected`{ .vis-protected } `$rollbackOnAbort = false` `bool`

-   `protected`{ .vis-protected } `$rollbackRecord = null` `ModelInterface|null`

-   `protected`{ .vis-protected } `$rollbackThrowException = false` `bool`

</div>

### Methods

<div class="api-group">Public · 13</div>

#### `__construct()` { #mvcmodeltransaction-__construct }

```php
public function __construct(
    DiInterface $container,
    bool $autoBegin = false,
    string $service = "db"
);
```

Phalcon\Mvc\Model\Transaction constructor

#### `begin()` { #mvcmodeltransaction-begin }

```php
public function begin(): bool;
```

Starts the transaction

#### `commit()` { #mvcmodeltransaction-commit }

```php
public function commit(): bool;
```

Commits the transaction

#### `getConnection()` { #mvcmodeltransaction-getconnection }

```php
public function getConnection(): AdapterInterface;
```

Returns the connection related to transaction

#### `getMessages()` { #mvcmodeltransaction-getmessages }

```php
public function getMessages(): array;
```

Returns validations messages from last save try

#### `isManaged()` { #mvcmodeltransaction-ismanaged }

```php
public function isManaged(): bool;
```

Checks whether transaction is managed by a transaction manager

#### `isValid()` { #mvcmodeltransaction-isvalid }

```php
public function isValid(): bool;
```

Checks whether internal connection is under an active transaction

#### `rollback()` { #mvcmodeltransaction-rollback }

```php
public function rollback(
    string $rollbackMessage = null,
    ModelInterface $rollbackRecord = null
): bool;
```

Rollbacks the transaction

#### `setIsNewTransaction()` { #mvcmodeltransaction-setisnewtransaction }

```php
public function setIsNewTransaction( bool $isNew ): void;
```

Sets if is a reused transaction or new once

#### `setRollbackOnAbort()` { #mvcmodeltransaction-setrollbackonabort }

```php
public function setRollbackOnAbort( bool $rollbackOnAbort ): void;
```

Sets flag to rollback on abort the HTTP connection

#### `setRollbackedRecord()` { #mvcmodeltransaction-setrollbackedrecord }

```php
public function setRollbackedRecord( ModelInterface $record ): void;
```

Sets object which generates rollback action

#### `setTransactionManager()` { #mvcmodeltransaction-settransactionmanager }

```php
public function setTransactionManager( ManagerInterface $manager ): void;
```

Sets transaction manager related to the transaction

#### `throwRollbackException()` { #mvcmodeltransaction-throwrollbackexception }

```php
public function throwRollbackException( bool $status ): TransactionInterface;
```

Enables throwing exception


## Mvc\Model\TransactionInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/TransactionInterface.zep){ .src-btn }

Interface for Phalcon\Mvc\Model\Transaction

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\TransactionInterface`**

</div>

__Uses__ `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Transaction\ManagerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodeltransactioninterface-begin">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">begin()</code>
<span class="desc">Starts the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-commit">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">commit()</code>
<span class="desc">Commits the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-getconnection">
<code class="vis vis-public">public</code>
<code class="ret">\Phalcon\Db\Adapter\AdapterInterface</code>
<code class="sig">getConnection()</code>
<span class="desc">Returns connection related to transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getMessages()</code>
<span class="desc">Returns validations messages from last save try</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-ismanaged">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isManaged()</code>
<span class="desc">Checks whether transaction is managed by a transaction manager</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-isvalid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isValid()</code>
<span class="desc">Checks whether internal connection is under an active transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-rollback">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">rollback(
    string $rollbackMessage = null,
    ModelInterface $rollbackRecord = null
)</code>
<span class="desc">Rollbacks the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-setisnewtransaction">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setIsNewTransaction( bool $isNew )</code>
<span class="desc">Sets if is a reused transaction or new once</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-setrollbackonabort">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setRollbackOnAbort( bool $rollbackOnAbort )</code>
<span class="desc">Sets flag to rollback on abort the HTTP connection</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-setrollbackedrecord">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setRollbackedRecord( ModelInterface $record )</code>
<span class="desc">Sets object which generates rollback action</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-settransactionmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setTransactionManager( ManagerInterface $manager )</code>
<span class="desc">Sets transaction manager related to the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactioninterface-throwrollbackexception">
<code class="vis vis-public">public</code>
<code class="ret">TransactionInterface</code>
<code class="sig">throwRollbackException( bool $status )</code>
<span class="desc">Enables throwing exception</span>
</a>
</div>

### Methods

<div class="api-group">Public · 12</div>

#### `begin()` { #mvcmodeltransactioninterface-begin }

```php
public function begin(): bool;
```

Starts the transaction

#### `commit()` { #mvcmodeltransactioninterface-commit }

```php
public function commit(): bool;
```

Commits the transaction

#### `getConnection()` { #mvcmodeltransactioninterface-getconnection }

```php
public function getConnection(): \Phalcon\Db\Adapter\AdapterInterface;
```

Returns connection related to transaction

#### `getMessages()` { #mvcmodeltransactioninterface-getmessages }

```php
public function getMessages(): array;
```

Returns validations messages from last save try

#### `isManaged()` { #mvcmodeltransactioninterface-ismanaged }

```php
public function isManaged(): bool;
```

Checks whether transaction is managed by a transaction manager

#### `isValid()` { #mvcmodeltransactioninterface-isvalid }

```php
public function isValid(): bool;
```

Checks whether internal connection is under an active transaction

#### `rollback()` { #mvcmodeltransactioninterface-rollback }

```php
public function rollback(
    string $rollbackMessage = null,
    ModelInterface $rollbackRecord = null
): bool;
```

Rollbacks the transaction

#### `setIsNewTransaction()` { #mvcmodeltransactioninterface-setisnewtransaction }

```php
public function setIsNewTransaction( bool $isNew ): void;
```

Sets if is a reused transaction or new once

#### `setRollbackOnAbort()` { #mvcmodeltransactioninterface-setrollbackonabort }

```php
public function setRollbackOnAbort( bool $rollbackOnAbort ): void;
```

Sets flag to rollback on abort the HTTP connection

#### `setRollbackedRecord()` { #mvcmodeltransactioninterface-setrollbackedrecord }

```php
public function setRollbackedRecord( ModelInterface $record ): void;
```

Sets object which generates rollback action

#### `setTransactionManager()` { #mvcmodeltransactioninterface-settransactionmanager }

```php
public function setTransactionManager( ManagerInterface $manager ): void;
```

Sets transaction manager related to the transaction

#### `throwRollbackException()` { #mvcmodeltransactioninterface-throwrollbackexception }

```php
public function throwRollbackException( bool $status ): TransactionInterface;
```

Enables throwing exception


## Mvc\Model\Transaction\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Transaction/Exception.zep){ .src-btn }

Phalcon\Mvc\Model\Transaction\Exception

Exceptions thrown in Phalcon\Mvc\Model\Transaction will use this class

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\Transaction\Exception`**
            - [`Phalcon\Mvc\Model\Transaction\Failed`](#mvcmodeltransactionfailed)

</div>


## Mvc\Model\Transaction\Failed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Transaction/Failed.zep){ .src-btn }

Phalcon\Mvc\Model\Transaction\Failed

This class will be thrown to exit a try/catch block for isolated transactions

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - [`Phalcon\Mvc\Model\Transaction\Exception`](#mvcmodeltransactionexception)
            - **`Phalcon\Mvc\Model\Transaction\Failed`**

</div>

__Uses__ `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodeltransactionfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $message,
    ModelInterface $record = null
)</code>
<span class="desc">Phalcon\Mvc\Model\Transaction\Failed constructor</span>
</a>
<a class="api-item" href="#mvcmodeltransactionfailed-getrecord">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface|null</code>
<code class="sig">getRecord()</code>
<span class="desc">Returns validation record messages which stop the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactionfailed-getrecordmessages">
<code class="vis vis-public">public</code>
<code class="ret">array|string</code>
<code class="sig">getRecordMessages()</code>
<span class="desc">Returns validation record messages which stop the transaction</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$record = null` `ModelInterface|null`

</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #mvcmodeltransactionfailed-__construct }

```php
public function __construct(
    string $message,
    ModelInterface $record = null
);
```

Phalcon\Mvc\Model\Transaction\Failed constructor

#### `getRecord()` { #mvcmodeltransactionfailed-getrecord }

```php
public function getRecord(): ModelInterface|null;
```

Returns validation record messages which stop the transaction

#### `getRecordMessages()` { #mvcmodeltransactionfailed-getrecordmessages }

```php
public function getRecordMessages(): array|string;
```

Returns validation record messages which stop the transaction


## Mvc\Model\Transaction\Manager

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Transaction/Manager.zep){ .src-btn }

A transaction acts on a single database connection. If you have multiple
class-specific databases, the transaction will not protect interaction among
them.

This class manages the objects that compose a transaction.
A transaction produces a unique connection that is passed to every object
part of the transaction.

```php
use Phalcon\Mvc\Model\Transaction\Failed;
use Phalcon\Mvc\Model\Transaction\Manager;

try {
   $transactionManager = new Manager();

   $transaction = $transactionManager->get();

   $robot = new Robots();

   $robot->setTransaction($transaction);

   $robot->name       = "WALL·E";
   $robot->created_at = date("Y-m-d");

   if ($robot->save() === false) {
       $transaction->rollback("Can't save robot");
   }

   $robotPart = new RobotParts();

   $robotPart->setTransaction($transaction);

   $robotPart->type = "head";

   if ($robotPart->save() === false) {
       $transaction->rollback("Can't save robot part");
   }

   $transaction->commit();
} catch (Failed $e) {
   echo "Failed, reason: ", $e->getMessage();
}
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Transaction\Manager`** — implements [`Phalcon\Mvc\Model\Transaction\ManagerInterface`](#mvcmodeltransactionmanagerinterface), [`Phalcon\Di\InjectionAwareInterface`](phalcon_di.md#diinjectionawareinterface)

</div>

__Uses__ `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Mvc\Model\Exceptions\ManagerOrmServicesUnavailable` · `Phalcon\Mvc\Model\Transaction` · `Phalcon\Mvc\Model\TransactionInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodeltransactionmanager-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( DiInterface $container = null )</code>
<span class="desc">Phalcon\Mvc\Model\Transaction\Manager constructor</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-collecttransactions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">collectTransactions()</code>
<span class="desc">Remove all the transactions from the manager</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-commit">
<code class="vis vis-public">public</code>
<code class="sig">commit()</code>
<span class="desc">Commits active transactions within the manager</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-get">
<code class="vis vis-public">public</code>
<code class="ret">TransactionInterface</code>
<code class="sig">get( bool $autoBegin = true )</code>
<span class="desc">Returns a new \Phalcon\Mvc\Model\Transaction or an already created once</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Returns the dependency injection container</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-getdbservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getDbService()</code>
<span class="desc">Returns the database service used to isolate the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-getorcreatetransaction">
<code class="vis vis-public">public</code>
<code class="ret">TransactionInterface</code>
<code class="sig">getOrCreateTransaction( bool $autoBegin = true )</code>
<span class="desc">Create/Returns a new transaction or an existing one</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-getrollbackpendent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">getRollbackPendent()</code>
<span class="desc">Check if the transaction manager is registering a shutdown function to</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has()</code>
<span class="desc">Checks whether the manager has an active transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-notifycommit">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">notifyCommit( TransactionInterface $transaction )</code>
<span class="desc">Notifies the manager about a committed transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-notifyrollback">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">notifyRollback( TransactionInterface $transaction )</code>
<span class="desc">Notifies the manager about a rollbacked transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-rollback">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">rollback( bool $collect = true )</code>
<span class="desc">Rollbacks active transactions within the manager</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-rollbackpendent">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">rollbackPendent()</code>
<span class="desc">Rollbacks active transactions within the manager</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the dependency injection container</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-setdbservice">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig">setDbService( string $service )</code>
<span class="desc">Sets the database service used to run the isolated transactions</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-setrollbackpendent">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig">setRollbackPendent( bool $rollbackPendent )</code>
<span class="desc">Set if the transaction manager must register a shutdown function to clean</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanager-collecttransaction">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">collectTransaction( TransactionInterface $transaction )</code>
<span class="desc">Removes transactions from the TransactionManager</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$container` `DiInterface|null`

-   `protected`{ .vis-protected } `$initialized = false` `bool`

-   `protected`{ .vis-protected } `$number = 0` `int`

-   `protected`{ .vis-protected } `$rollbackPendent = true` `bool`

-   `protected`{ .vis-protected } `$service = "db"` `string`

-   `protected`{ .vis-protected } `$transactions = []` `array`

</div>

### Methods

<div class="api-group">Public · 16</div>

#### `__construct()` { #mvcmodeltransactionmanager-__construct }

```php
public function __construct( DiInterface $container = null );
```

Phalcon\Mvc\Model\Transaction\Manager constructor

#### `collectTransactions()` { #mvcmodeltransactionmanager-collecttransactions }

```php
public function collectTransactions(): void;
```

Remove all the transactions from the manager

#### `commit()` { #mvcmodeltransactionmanager-commit }

```php
public function commit();
```

Commits active transactions within the manager

#### `get()` { #mvcmodeltransactionmanager-get }

```php
public function get( bool $autoBegin = true ): TransactionInterface;
```

Returns a new \Phalcon\Mvc\Model\Transaction or an already created once
This method registers a shutdown function to rollback active connections

#### `getDI()` { #mvcmodeltransactionmanager-getdi }

```php
public function getDI(): DiInterface;
```

Returns the dependency injection container

#### `getDbService()` { #mvcmodeltransactionmanager-getdbservice }

```php
public function getDbService(): string;
```

Returns the database service used to isolate the transaction

#### `getOrCreateTransaction()` { #mvcmodeltransactionmanager-getorcreatetransaction }

```php
public function getOrCreateTransaction( bool $autoBegin = true ): TransactionInterface;
```

Create/Returns a new transaction or an existing one

#### `getRollbackPendent()` { #mvcmodeltransactionmanager-getrollbackpendent }

```php
public function getRollbackPendent(): bool;
```

Check if the transaction manager is registering a shutdown function to
clean up pendent transactions

#### `has()` { #mvcmodeltransactionmanager-has }

```php
public function has(): bool;
```

Checks whether the manager has an active transaction

#### `notifyCommit()` { #mvcmodeltransactionmanager-notifycommit }

```php
public function notifyCommit( TransactionInterface $transaction ): void;
```

Notifies the manager about a committed transaction

#### `notifyRollback()` { #mvcmodeltransactionmanager-notifyrollback }

```php
public function notifyRollback( TransactionInterface $transaction ): void;
```

Notifies the manager about a rollbacked transaction

#### `rollback()` { #mvcmodeltransactionmanager-rollback }

```php
public function rollback( bool $collect = true ): void;
```

Rollbacks active transactions within the manager
Collect will remove the transaction from the manager

#### `rollbackPendent()` { #mvcmodeltransactionmanager-rollbackpendent }

```php
public function rollbackPendent(): void;
```

Rollbacks active transactions within the manager

#### `setDI()` { #mvcmodeltransactionmanager-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injection container

#### `setDbService()` { #mvcmodeltransactionmanager-setdbservice }

```php
public function setDbService( string $service ): ManagerInterface;
```

Sets the database service used to run the isolated transactions

#### `setRollbackPendent()` { #mvcmodeltransactionmanager-setrollbackpendent }

```php
public function setRollbackPendent( bool $rollbackPendent ): ManagerInterface;
```

Set if the transaction manager must register a shutdown function to clean
up pendent transactions

<div class="api-group">Protected · 1</div>

#### `collectTransaction()` { #mvcmodeltransactionmanager-collecttransaction }

```php
protected function collectTransaction( TransactionInterface $transaction ): void;
```

Removes transactions from the TransactionManager


## Mvc\Model\Transaction\ManagerInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/Transaction/ManagerInterface.zep){ .src-btn }

Phalcon\Mvc\Model\Transaction\ManagerInterface

Interface for Phalcon\Mvc\Model\Transaction\Manager

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Model\Transaction\ManagerInterface`**

</div>

__Uses__ `Phalcon\Mvc\Model\TransactionInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-collecttransactions">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">collectTransactions()</code>
<span class="desc">Remove all the transactions from the manager</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-commit">
<code class="vis vis-public">public</code>
<code class="sig">commit()</code>
<span class="desc">Commits active transactions within the manager</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">TransactionInterface</code>
<code class="sig">get( bool $autoBegin = true )</code>
<span class="desc">Returns a new \Phalcon\Mvc\Model\Transaction or an already created once</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-getdbservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getDbService()</code>
<span class="desc">Returns the database service used to isolate the transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-getrollbackpendent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">getRollbackPendent()</code>
<span class="desc">Check if the transaction manager is registering a shutdown function to clean up pendent transactions</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has()</code>
<span class="desc">Checks whether manager has an active transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-notifycommit">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">notifyCommit( TransactionInterface $transaction )</code>
<span class="desc">Notifies the manager about a committed transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-notifyrollback">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">notifyRollback( TransactionInterface $transaction )</code>
<span class="desc">Notifies the manager about a rollbacked transaction</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-rollback">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">rollback( bool $collect = false )</code>
<span class="desc">Rollbacks active transactions within the manager</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-rollbackpendent">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">rollbackPendent()</code>
<span class="desc">Rollbacks active transactions within the manager</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-setdbservice">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig">setDbService( string $service )</code>
<span class="desc">Sets the database service used to run the isolated transactions</span>
</a>
<a class="api-item" href="#mvcmodeltransactionmanagerinterface-setrollbackpendent">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface</code>
<code class="sig">setRollbackPendent( bool $rollbackPendent )</code>
<span class="desc">Set if the transaction manager must register a shutdown function to clean up pendent transactions</span>
</a>
</div>

### Methods

<div class="api-group">Public · 12</div>

#### `collectTransactions()` { #mvcmodeltransactionmanagerinterface-collecttransactions }

```php
public function collectTransactions(): void;
```

Remove all the transactions from the manager

#### `commit()` { #mvcmodeltransactionmanagerinterface-commit }

```php
public function commit();
```

Commits active transactions within the manager

#### `get()` { #mvcmodeltransactionmanagerinterface-get }

```php
public function get( bool $autoBegin = true ): TransactionInterface;
```

Returns a new \Phalcon\Mvc\Model\Transaction or an already created once

#### `getDbService()` { #mvcmodeltransactionmanagerinterface-getdbservice }

```php
public function getDbService(): string;
```

Returns the database service used to isolate the transaction

#### `getRollbackPendent()` { #mvcmodeltransactionmanagerinterface-getrollbackpendent }

```php
public function getRollbackPendent(): bool;
```

Check if the transaction manager is registering a shutdown function to clean up pendent transactions

#### `has()` { #mvcmodeltransactionmanagerinterface-has }

```php
public function has(): bool;
```

Checks whether manager has an active transaction

#### `notifyCommit()` { #mvcmodeltransactionmanagerinterface-notifycommit }

```php
public function notifyCommit( TransactionInterface $transaction ): void;
```

Notifies the manager about a committed transaction

#### `notifyRollback()` { #mvcmodeltransactionmanagerinterface-notifyrollback }

```php
public function notifyRollback( TransactionInterface $transaction ): void;
```

Notifies the manager about a rollbacked transaction

#### `rollback()` { #mvcmodeltransactionmanagerinterface-rollback }

```php
public function rollback( bool $collect = false ): void;
```

Rollbacks active transactions within the manager
Collect will remove transaction from the manager

#### `rollbackPendent()` { #mvcmodeltransactionmanagerinterface-rollbackpendent }

```php
public function rollbackPendent(): void;
```

Rollbacks active transactions within the manager

#### `setDbService()` { #mvcmodeltransactionmanagerinterface-setdbservice }

```php
public function setDbService( string $service ): ManagerInterface;
```

Sets the database service used to run the isolated transactions

#### `setRollbackPendent()` { #mvcmodeltransactionmanagerinterface-setrollbackpendent }

```php
public function setRollbackPendent( bool $rollbackPendent ): ManagerInterface;
```

Set if the transaction manager must register a shutdown function to clean up pendent transactions


## Mvc\Model\ValidationFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Model/ValidationFailed.zep){ .src-btn }

Phalcon\Mvc\Model\ValidationFailed

This exception is generated when a model fails to save a record
Phalcon\Mvc\Model must be set up to have this behavior

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
        - **`Phalcon\Mvc\Model\ValidationFailed`**

</div>

__Uses__ `Phalcon\Messages\Message` · `Phalcon\Mvc\ModelInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmodelvalidationfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    ModelInterface $model,
    array $validationMessages
)</code>
<span class="desc">Phalcon\Mvc\Model\ValidationFailed constructor</span>
</a>
<a class="api-item" href="#mvcmodelvalidationfailed-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">Message[]</code>
<code class="sig">getMessages()</code>
<span class="desc">Returns the complete group of messages produced in the validation</span>
</a>
<a class="api-item" href="#mvcmodelvalidationfailed-getmodel">
<code class="vis vis-public">public</code>
<code class="ret">ModelInterface</code>
<code class="sig">getModel()</code>
<span class="desc">Returns the model that generated the messages</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$model` `ModelInterface`

-   `protected`{ .vis-protected } `$validationMessages = []` `array`

</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #mvcmodelvalidationfailed-__construct }

```php
public function __construct(
    ModelInterface $model,
    array $validationMessages
);
```

Phalcon\Mvc\Model\ValidationFailed constructor

#### `getMessages()` { #mvcmodelvalidationfailed-getmessages }

```php
public function getMessages(): Message[];
```

Returns the complete group of messages produced in the validation

#### `getModel()` { #mvcmodelvalidationfailed-getmodel }

```php
public function getModel(): ModelInterface;
```

Returns the model that generated the messages


## Mvc\ModuleDefinitionInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/ModuleDefinitionInterface.zep){ .src-btn }

This interface must be implemented by class module definitions

<div class="api-tree" markdown>

- **`Phalcon\Mvc\ModuleDefinitionInterface`**

</div>

__Uses__ `Phalcon\Di\DiInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcmoduledefinitioninterface-registerautoloaders">
<code class="vis vis-public">public</code>
<code class="sig">registerAutoloaders( DiInterface $container = null )</code>
<span class="desc">Registers an autoloader related to the module</span>
</a>
<a class="api-item" href="#mvcmoduledefinitioninterface-registerservices">
<code class="vis vis-public">public</code>
<code class="sig">registerServices( DiInterface $container )</code>
<span class="desc">Registers services related to the module</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `registerAutoloaders()` { #mvcmoduledefinitioninterface-registerautoloaders }

```php
public function registerAutoloaders( DiInterface $container = null );
```

Registers an autoloader related to the module

#### `registerServices()` { #mvcmoduledefinitioninterface-registerservices }

```php
public function registerServices( DiInterface $container );
```

Registers services related to the module


## Mvc\Router

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router.zep){ .src-btn }

Phalcon\Mvc\Router

Phalcon\Mvc\Router is the standard framework router. Routing is the
process of taking a URI endpoint (that part of the URI which comes after the
base URL) and decomposing it into parameters to determine which module,
controller, and action of that controller should receive the request

```php
use Phalcon\Mvc\Router;

$router = new Router();

$router->add(
    "/documentation/{chapter}/{name}\.{type:[a-z]+}",
    [
        "controller" => "documentation",
        "action"     => "show",
    ]
);

$router->handle(
    "/documentation/1/examples.html"
);

echo $router->getControllerName();
```

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Mvc\Router`** — implements [`Phalcon\Mvc\RouterInterface`](#mvcrouterinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)
            - [`Phalcon\Mvc\Router\Annotations`](#mvcrouterannotations)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Config\ConfigInterface` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Http\RequestInterface` · `Phalcon\Mvc\Router\Exception` · `Phalcon\Mvc\Router\Exceptions\BeforeMatchNotCallable` · `Phalcon\Mvc\Router\Exceptions\ConfigKeyMustBeArray` · `Phalcon\Mvc\Router\Exceptions\EmptyGroupOfRoutes` · `Phalcon\Mvc\Router\Exceptions\GroupRoutesMustBeArray` · `Phalcon\Mvc\Router\Exceptions\InvalidConfigSource` · `Phalcon\Mvc\Router\Exceptions\InvalidNotFoundPaths` · `Phalcon\Mvc\Router\Exceptions\InvalidRoutePosition` · `Phalcon\Mvc\Router\Exceptions\MissingGroupRouteKey` · `Phalcon\Mvc\Router\Exceptions\MissingRouteConfigKey` · `Phalcon\Mvc\Router\Exceptions\RequestServiceUnavailable` · `Phalcon\Mvc\Router\Exceptions\UnknownHttpMethod` · `Phalcon\Mvc\Router\Exceptions\WrongPathsKey` · `Phalcon\Mvc\Router\Group` · `Phalcon\Mvc\Router\GroupInterface` · `Phalcon\Mvc\Router\Route` · `Phalcon\Mvc\Router\RouteInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouter-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( bool $defaultRoutes = true )</code>
<span class="desc">Phalcon\Mvc\Router constructor</span>
</a>
<a class="api-item" href="#mvcrouter-add">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">add(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router without any HTTP constraint</span>
</a>
<a class="api-item" href="#mvcrouter-addconnect">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addConnect(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is CONNECT</span>
</a>
<a class="api-item" href="#mvcrouter-adddelete">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addDelete(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is DELETE</span>
</a>
<a class="api-item" href="#mvcrouter-addget">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addGet(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is GET</span>
</a>
<a class="api-item" href="#mvcrouter-addhead">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addHead(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is HEAD</span>
</a>
<a class="api-item" href="#mvcrouter-addoptions">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addOptions(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Add a route to the router that only match if the HTTP method is OPTIONS</span>
</a>
<a class="api-item" href="#mvcrouter-addpatch">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPatch(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PATCH</span>
</a>
<a class="api-item" href="#mvcrouter-addpost">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPost(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is POST</span>
</a>
<a class="api-item" href="#mvcrouter-addpurge">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPurge(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PURGE</span>
</a>
<a class="api-item" href="#mvcrouter-addput">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPut(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PUT</span>
</a>
<a class="api-item" href="#mvcrouter-addtrace">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addTrace(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is TRACE</span>
</a>
<a class="api-item" href="#mvcrouter-attach">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">attach(
    RouteInterface $route,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Attach Route object to the routes stack.</span>
</a>
<a class="api-item" href="#mvcrouter-builddispatcherdump">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">buildDispatcherDump()</code>
<span class="desc">Produces a pure-data array describing every piece of state needed</span>
</a>
<a class="api-item" href="#mvcrouter-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">clear()</code>
<span class="desc">Removes all the pre-defined routes</span>
</a>
<a class="api-item" href="#mvcrouter-dumpdispatcher">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">dumpDispatcher( string $path )</code>
<span class="desc">File-shaped helper around buildDispatcherDump(). Writes the dump as</span>
</a>
<a class="api-item" href="#mvcrouter-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getActionName()</code>
<span class="desc">Returns the processed action name</span>
</a>
<a class="api-item" href="#mvcrouter-getcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getControllerName()</code>
<span class="desc">Returns the processed controller name</span>
</a>
<a class="api-item" href="#mvcrouter-getdefaults">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getDefaults()</code>
<span class="desc">Returns an array of default parameters</span>
</a>
<a class="api-item" href="#mvcrouter-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#mvcrouter-getkeyrouteids">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getKeyRouteIds()</code>
</a>
<a class="api-item" href="#mvcrouter-getkeyroutenames">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getKeyRouteNames()</code>
</a>
<a class="api-item" href="#mvcrouter-getmatchedroute">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface|null</code>
<code class="sig">getMatchedRoute()</code>
<span class="desc">Returns the route that matches the handled URI</span>
</a>
<a class="api-item" href="#mvcrouter-getmatches">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getMatches()</code>
<span class="desc">Returns the sub expressions in the regular expression matched</span>
</a>
<a class="api-item" href="#mvcrouter-getmethodroutes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getMethodRoutes()</code>
<span class="desc">Returns the routes indexed by HTTP method.</span>
</a>
<a class="api-item" href="#mvcrouter-getmodulename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getModuleName()</code>
<span class="desc">Returns the processed module name</span>
</a>
<a class="api-item" href="#mvcrouter-getnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNamespaceName()</code>
<span class="desc">Returns the processed namespace name</span>
</a>
<a class="api-item" href="#mvcrouter-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParams()</code>
<span class="desc">Returns the processed parameters</span>
</a>
<a class="api-item" href="#mvcrouter-getrewriteuri">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getRewriteUri()</code>
<span class="desc">Get rewrite info. This info is read from $_GET[&quot;_url&quot;].</span>
</a>
<a class="api-item" href="#mvcrouter-getroutebyid">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface|bool</code>
<code class="sig">getRouteById( mixed $routeId )</code>
<span class="desc">Returns a route object by its id</span>
</a>
<a class="api-item" href="#mvcrouter-getroutebyname">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface|bool</code>
<code class="sig">getRouteByName( string $name )</code>
<span class="desc">Returns a route object by its name</span>
</a>
<a class="api-item" href="#mvcrouter-getroutes">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface[]</code>
<code class="sig">getRoutes()</code>
<span class="desc">Returns all the routes defined in the router</span>
</a>
<a class="api-item" href="#mvcrouter-handle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">handle( string $uri )</code>
<span class="desc">Handles routing information received from the rewrite engine</span>
</a>
<a class="api-item" href="#mvcrouter-isexactcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isExactControllerName()</code>
<span class="desc">Returns whether controller name should not be mangled</span>
</a>
<a class="api-item" href="#mvcrouter-loaddispatcher">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">loadDispatcher( string $path )</code>
<span class="desc">File-shaped helper around loadDispatcherFromArray(). Includes the</span>
</a>
<a class="api-item" href="#mvcrouter-loaddispatcherfromarray">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">loadDispatcherFromArray( array $dump )</code>
<span class="desc">Inverse of buildDispatcherDump(). Reconstructs every Route from the</span>
</a>
<a class="api-item" href="#mvcrouter-loadfromconfig">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">loadFromConfig( mixed $config )</code>
<span class="desc">Loads routes from an array or Phalcon\Config\Config instance.</span>
</a>
<a class="api-item" href="#mvcrouter-mount">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">mount( GroupInterface $group )</code>
<span class="desc">Mounts a group of routes in the router</span>
</a>
<a class="api-item" href="#mvcrouter-notfound">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">notFound( mixed $paths )</code>
<span class="desc">Set a group of paths to be returned when none of the defined routes are</span>
</a>
<a class="api-item" href="#mvcrouter-removeextraslashes">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">removeExtraSlashes( bool $remove )</code>
<span class="desc">Set whether router must remove the extra slashes in the handled routes</span>
</a>
<a class="api-item" href="#mvcrouter-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setDefaultAction( string $actionName )</code>
<span class="desc">Sets the default action name</span>
</a>
<a class="api-item" href="#mvcrouter-setdefaultcontroller">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setDefaultController( string $controllerName )</code>
<span class="desc">Sets the default controller name</span>
</a>
<a class="api-item" href="#mvcrouter-setdefaultmodule">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setDefaultModule( string $moduleName )</code>
<span class="desc">Sets the name of the default module</span>
</a>
<a class="api-item" href="#mvcrouter-setdefaultnamespace">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setDefaultNamespace( string $namespaceName )</code>
<span class="desc">Sets the name of the default namespace</span>
</a>
<a class="api-item" href="#mvcrouter-setdefaults">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setDefaults( array $defaults )</code>
<span class="desc">Sets an array of default paths. If a route is missing a path the router</span>
</a>
<a class="api-item" href="#mvcrouter-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#mvcrouter-setkeyrouteids">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setKeyRouteIds( array $routeIds )</code>
</a>
<a class="api-item" href="#mvcrouter-setkeyroutenames">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setKeyRouteNames( array $routeNames )</code>
</a>
<a class="api-item" href="#mvcrouter-seturisource">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setUriSource( int $uriSource )</code>
<span class="desc">Sets the URI source. One of the URI_SOURCE_* constants</span>
</a>
<a class="api-item" href="#mvcrouter-usecache">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">useCache(
    CacheAdapterInterface $cache,
    string $key = &quot;phalcon.router.dispatcher&quot;
)</code>
<span class="desc">Cache-instance convenience wrapper. On cache hit, restores the</span>
</a>
<a class="api-item" href="#mvcrouter-wasmatched">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">wasMatched()</code>
<span class="desc">Checks if the router matches any of the defined routes</span>
</a>
<a class="api-item" href="#mvcrouter-addroutefromconfig">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">addRouteFromConfig( array $routeData )</code>
<span class="desc">Adds a single route from a config array entry. Used by loadFromConfig.</span>
</a>
<a class="api-item" href="#mvcrouter-extractrealuri">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">extractRealUri( string $uri )</code>
</a>
<a class="api-item" href="#mvcrouter-mountgroupfromconfig">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">mountGroupFromConfig( array $groupData )</code>
<span class="desc">Builds a Group from a config entry and mounts it. Used by loadFromConfig.</span>
</a>
<a class="api-item" href="#mvcrouter-rebuildmethodindex">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">rebuildMethodIndex()</code>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `POSITION_FIRST = 0` `int`

-   `POSITION_LAST = 1` `int`

-   `REGEX_CHUNK_SIZE = 10` `int`

    Number of alternatives per combined-regex chunk. Empirically derived
    (FastRoute uses ~10) - keeps each chunk below PCRE's optimizer cliff.

-   `URI_SOURCE_GET_URL = 0` `int`

-   `URI_SOURCE_SERVER_REQUEST_URI = 1` `int`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$action = ""` `string`

-   `protected`{ .vis-protected } `$candidatesByMethod = []` `array`

    Pre-merged per-method candidate buckets in attach order. For each HTTP
    method seen on any registered route, the bucket contains the
    method-specific routes followed by the "*" (no-constraint) routes.
    The "*" key itself holds only the no-constraint routes - used when the
    request method has no specific bucket.

    Built in rebuildMethodIndex(); consumed by handle() in reverse.

-   `protected`{ .vis-protected } `$combinedRegexByMethod = []` `array`

    Combined PCRE pattern per method bucket (chunked list of strings).
    Each chunk uses (?|...) branch reset and (*:N) mark labels. Built
    only when the bucket meets gating: no hostname routes; standard
    pattern shape.

-   `protected`{ .vis-protected } `$combinedRegexDisabled = []` `array`

    Boolean per method bucket: true when the combined regex cannot be
    built (hostname route present, exotic pattern shape, etc.).

-   `protected`{ .vis-protected } `$combinedRegexMarkMap = []` `array`

    Map from MARK label back to the route index in
    candidatesByMethod[method]. One per chunk.

      combinedRegexMarkMap[method][chunkIdx][markLabel] = routeIdx

-   `protected`{ .vis-protected } `$controller = ""` `string`

-   `protected`{ .vis-protected } `$defaultAction = ""` `string`

-   `protected`{ .vis-protected } `$defaultController = ""` `string`

-   `protected`{ .vis-protected } `$defaultModule = ""` `string`

-   `protected`{ .vis-protected } `$defaultNamespace = ""` `string`

-   `protected`{ .vis-protected } `$defaultParams = []` `array`

-   `protected`{ .vis-protected } `$eventsManager` `ManagerInterface|null`

-   `protected`{ .vis-protected } `$hostnameByMethod = []` `array`

    Per-method buckets of routes with hostname constraints, grouped by
    raw hostname string. Routes are referenced by their index into
    candidatesByMethod[method]. Built in rebuildMethodIndex().

    Shape: hostnameByMethod[method][hostname] = list of route indices.

-   `protected`{ .vis-protected } `$hostnameLessByMethod = []` `array`

    Per-method indices of routes without a hostname constraint, in
    attach order.

    Shape: hostnameLessByMethod[method] = list of route indices into
    candidatesByMethod[method].

-   `protected`{ .vis-protected } `$keyRouteIds = []` `array`

-   `protected`{ .vis-protected } `$keyRouteNames = []` `array`

-   `protected`{ .vis-protected } `$matchedRoute = null` `RouteInterface|null`

-   `protected`{ .vis-protected } `$matches = []` `array`

-   `protected`{ .vis-protected } `$methodRoutes = []` `array`

-   `protected`{ .vis-protected } `$methodRoutesDirty = true` `bool`

-   `protected`{ .vis-protected } `$module = ""` `string`

-   `protected`{ .vis-protected } `$namespaceName = ""` `string`

-   `protected`{ .vis-protected } `$notFoundPaths = null` `array|string|null`

-   `protected`{ .vis-protected } `$params = []` `array`

-   `protected`{ .vis-protected } `$pendingCache = null` `CacheAdapterInterface|null`

    Lazy-write cache target set by useCache(). When non-null, handle()
    writes buildDispatcherDump() to this cache after a successful
    rebuild on cache miss, then clears the property to skip subsequent
    writes.

-   `protected`{ .vis-protected } `$pendingCacheKey = ""` `string`

-   `protected`{ .vis-protected } `$removeExtraSlashes = false` `bool`

-   `protected`{ .vis-protected } `$routeMeta = []` `array`

    Single-source per-route metadata cache. One entry per route, keyed
    by the route's intrinsic id. Replaces the previous per-method-bucket
    replication of metadata arrays. Built once in rebuildMethodIndex().

    Shape: routeMeta[routeId] = [
        "pattern":     string,        // compiled pattern
        "isRegex":     bool,
        "hostname":    string|null,
        "hostRegex":   string|null,
        "beforeMatch": callable|null
      ]

-   `protected`{ .vis-protected } `$routes = []` `array`

-   `protected`{ .vis-protected } `$staticByMethod = []` `array`

    Static-route hash, populated by rebuildMethodIndex(). For each method
    bucket (including "*"), maps URI => list of routes whose compiled
    pattern is a literal string equal to that URI.

-   `protected`{ .vis-protected } `$staticShadowedByMethod = []` `array`

    Shadow-detection map. If staticShadowedByMethod[method][uri] is set,
    the static URI in that bucket is shadowed by a later-attached regex
    route - the fast path MUST NOT be used; fall through to the dynamic
    loop so the regex wins (reverse-iteration semantics).

-   `protected`{ .vis-protected } `$uriSource = self::URI_SOURCE_GET_URL` `int`

-   `protected`{ .vis-protected } `$wasMatched = false` `bool`

</div>

### Methods

<div class="api-group">Public · 51</div>

#### `__construct()` { #mvcrouter-__construct }

```php
public function __construct( bool $defaultRoutes = true );
```

Phalcon\Mvc\Router constructor

#### `add()` { #mvcrouter-add }

```php
public function add(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router without any HTTP constraint

```php
use Phalcon\Mvc\Router;

$router->add("/about", "About::index");

$router->add(
    "/about",
    "About::index",
    ["GET", "POST"]
);

$router->add(
    "/about",
    "About::index",
    ["GET", "POST"],
    Router::POSITION_FIRST
);
```

#### `addConnect()` { #mvcrouter-addconnect }

```php
public function addConnect(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is CONNECT

#### `addDelete()` { #mvcrouter-adddelete }

```php
public function addDelete(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is DELETE

#### `addGet()` { #mvcrouter-addget }

```php
public function addGet(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is GET

#### `addHead()` { #mvcrouter-addhead }

```php
public function addHead(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is HEAD

#### `addOptions()` { #mvcrouter-addoptions }

```php
public function addOptions(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Add a route to the router that only match if the HTTP method is OPTIONS

#### `addPatch()` { #mvcrouter-addpatch }

```php
public function addPatch(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PATCH

#### `addPost()` { #mvcrouter-addpost }

```php
public function addPost(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is POST

#### `addPurge()` { #mvcrouter-addpurge }

```php
public function addPurge(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PURGE
(Squid and Varnish support)

#### `addPut()` { #mvcrouter-addput }

```php
public function addPut(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PUT

#### `addTrace()` { #mvcrouter-addtrace }

```php
public function addTrace(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is TRACE

#### `attach()` { #mvcrouter-attach }

```php
public function attach(
    RouteInterface $route,
    int $position = Router::POSITION_LAST
): static;
```

Attach Route object to the routes stack.

```php
use Phalcon\Mvc\Router;
use Phalcon\Mvc\Router\Route;

class CustomRoute extends Route {
     // ...
}

$router = new Router();

$router->attach(
    new CustomRoute("/about", "About::index", ["GET", "HEAD"]),
    Router::POSITION_FIRST
);
```

#### `buildDispatcherDump()` { #mvcrouter-builddispatcherdump }

```php
public function buildDispatcherDump(): array;
```

Produces a pure-data array describing every piece of state needed
to reconstruct this router. The returned array is var_export-able
(no objects, no closures). Used by dumpDispatcher() and by
Phalcon\Cache integration via useCache().

Throws when a route has a Closure beforeMatch or converter - those
cannot be cached.

#### `clear()` { #mvcrouter-clear }

```php
public function clear(): void;
```

Removes all the pre-defined routes

#### `dumpDispatcher()` { #mvcrouter-dumpdispatcher }

```php
public function dumpDispatcher( string $path ): void;
```

File-shaped helper around buildDispatcherDump(). Writes the dump as
a `<?php return [...];` file, atomically (temp + rename) so concurrent
dumps don't corrupt the result.

#### `getActionName()` { #mvcrouter-getactionname }

```php
public function getActionName(): string;
```

Returns the processed action name

#### `getControllerName()` { #mvcrouter-getcontrollername }

```php
public function getControllerName(): string;
```

Returns the processed controller name

#### `getDefaults()` { #mvcrouter-getdefaults }

```php
public function getDefaults(): array;
```

Returns an array of default parameters

#### `getEventsManager()` { #mvcrouter-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `getKeyRouteIds()` { #mvcrouter-getkeyrouteids }

```php
public function getKeyRouteIds(): array;
```

#### `getKeyRouteNames()` { #mvcrouter-getkeyroutenames }

```php
public function getKeyRouteNames(): array;
```

#### `getMatchedRoute()` { #mvcrouter-getmatchedroute }

```php
public function getMatchedRoute(): RouteInterface|null;
```

Returns the route that matches the handled URI

#### `getMatches()` { #mvcrouter-getmatches }

```php
public function getMatches(): array;
```

Returns the sub expressions in the regular expression matched

#### `getMethodRoutes()` { #mvcrouter-getmethodroutes }

```php
public function getMethodRoutes(): array;
```

Returns the routes indexed by HTTP method.
Routes with no HTTP constraint are stored under the "*" key.

#### `getModuleName()` { #mvcrouter-getmodulename }

```php
public function getModuleName(): string;
```

Returns the processed module name

#### `getNamespaceName()` { #mvcrouter-getnamespacename }

```php
public function getNamespaceName(): string;
```

Returns the processed namespace name

#### `getParams()` { #mvcrouter-getparams }

```php
public function getParams(): array;
```

Returns the processed parameters

#### `getRewriteUri()` { #mvcrouter-getrewriteuri }

```php
public function getRewriteUri(): string;
```

Get rewrite info. This info is read from $_GET["_url"].
This returns '/' if the rewrite information cannot be read

#### `getRouteById()` { #mvcrouter-getroutebyid }

```php
public function getRouteById( mixed $routeId ): RouteInterface|bool;
```

Returns a route object by its id

#### `getRouteByName()` { #mvcrouter-getroutebyname }

```php
public function getRouteByName( string $name ): RouteInterface|bool;
```

Returns a route object by its name

#### `getRoutes()` { #mvcrouter-getroutes }

```php
public function getRoutes(): RouteInterface[];
```

Returns all the routes defined in the router

#### `handle()` { #mvcrouter-handle }

```php
public function handle( string $uri ): void;
```

Handles routing information received from the rewrite engine

```php
// Passing a URL
$router->handle("/posts/edit/1");
```

#### `isExactControllerName()` { #mvcrouter-isexactcontrollername }

```php
public function isExactControllerName(): bool;
```

Returns whether controller name should not be mangled

#### `loadDispatcher()` { #mvcrouter-loaddispatcher }

```php
public function loadDispatcher( string $path ): void;
```

File-shaped helper around loadDispatcherFromArray(). Includes the
file (opcache-friendly) and forwards the return value.

#### `loadDispatcherFromArray()` { #mvcrouter-loaddispatcherfromarray }

```php
public function loadDispatcherFromArray( array $dump ): void;
```

Inverse of buildDispatcherDump(). Reconstructs every Route from the
scalar `routes` entries (preserving subclass and routeId), restores
every index, and marks the indexes clean so handle() skips rebuild.

#### `loadFromConfig()` { #mvcrouter-loadfromconfig }

```php
public function loadFromConfig( mixed $config ): static;
```

Loads routes from an array or Phalcon\Config\Config instance.

```php
$router->loadFromConfig(
     [
         'routes' => [
             [
                 'method'  => 'get',
                 'pattern' => '/users',
                 'paths'   => 'Users::index',
             ],
         ],
     ]
 );
```

#### `mount()` { #mvcrouter-mount }

```php
public function mount( GroupInterface $group ): static;
```

Mounts a group of routes in the router

#### `notFound()` { #mvcrouter-notfound }

```php
public function notFound( mixed $paths ): static;
```

Set a group of paths to be returned when none of the defined routes are
matched

#### `removeExtraSlashes()` { #mvcrouter-removeextraslashes }

```php
public function removeExtraSlashes( bool $remove ): static;
```

Set whether router must remove the extra slashes in the handled routes

#### `setDefaultAction()` { #mvcrouter-setdefaultaction }

```php
public function setDefaultAction( string $actionName ): static;
```

Sets the default action name

#### `setDefaultController()` { #mvcrouter-setdefaultcontroller }

```php
public function setDefaultController( string $controllerName ): static;
```

Sets the default controller name

#### `setDefaultModule()` { #mvcrouter-setdefaultmodule }

```php
public function setDefaultModule( string $moduleName ): static;
```

Sets the name of the default module

#### `setDefaultNamespace()` { #mvcrouter-setdefaultnamespace }

```php
public function setDefaultNamespace( string $namespaceName ): static;
```

Sets the name of the default namespace

@parma string namespaceName

#### `setDefaults()` { #mvcrouter-setdefaults }

```php
public function setDefaults( array $defaults ): static;
```

Sets an array of default paths. If a route is missing a path the router
will use the defined here. This method must not be used to set a 404
route

```php
$router->setDefaults(
    [
        "module" => "common",
        "action" => "index",
    ]
);
```

#### `setEventsManager()` { #mvcrouter-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

#### `setKeyRouteIds()` { #mvcrouter-setkeyrouteids }

```php
public function setKeyRouteIds( array $routeIds ): static;
```

#### `setKeyRouteNames()` { #mvcrouter-setkeyroutenames }

```php
public function setKeyRouteNames( array $routeNames ): static;
```

#### `setUriSource()` { #mvcrouter-seturisource }

```php
public function setUriSource( int $uriSource ): static;
```

Sets the URI source. One of the URI_SOURCE_* constants

```php
$router->setUriSource(
    Router::URI_SOURCE_SERVER_REQUEST_URI
);
```

#### `useCache()` { #mvcrouter-usecache }

```php
public function useCache(
    CacheAdapterInterface $cache,
    string $key = "phalcon.router.dispatcher"
): void;
```

Cache-instance convenience wrapper. On cache hit, restores the
dispatcher immediately. On miss, defers cache population until the
next handle() completes - at which point buildDispatcherDump() is
written to the cache key.

#### `wasMatched()` { #mvcrouter-wasmatched }

```php
public function wasMatched(): bool;
```

Checks if the router matches any of the defined routes

<div class="api-group">Protected · 4</div>

#### `addRouteFromConfig()` { #mvcrouter-addroutefromconfig }

```php
protected function addRouteFromConfig( array $routeData ): void;
```

Adds a single route from a config array entry. Used by loadFromConfig.

#### `extractRealUri()` { #mvcrouter-extractrealuri }

```php
protected function extractRealUri( string $uri ): string;
```

#### `mountGroupFromConfig()` { #mvcrouter-mountgroupfromconfig }

```php
protected function mountGroupFromConfig( array $groupData ): void;
```

Builds a Group from a config entry and mounts it. Used by loadFromConfig.

#### `rebuildMethodIndex()` { #mvcrouter-rebuildmethodindex }

```php
protected function rebuildMethodIndex(): void;
```


## Mvc\RouterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/RouterInterface.zep){ .src-btn }

Interface for Phalcon\Mvc\Router

<div class="api-tree" markdown>

- **`Phalcon\Mvc\RouterInterface`**

</div>

__Uses__ `Phalcon\Mvc\Router\GroupInterface` · `Phalcon\Mvc\Router\RouteInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterinterface-add">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">add(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router on any HTTP method</span>
</a>
<a class="api-item" href="#mvcrouterinterface-addconnect">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addConnect(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is CONNECT</span>
</a>
<a class="api-item" href="#mvcrouterinterface-adddelete">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addDelete(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is DELETE</span>
</a>
<a class="api-item" href="#mvcrouterinterface-addget">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addGet(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is GET</span>
</a>
<a class="api-item" href="#mvcrouterinterface-addhead">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addHead(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is HEAD</span>
</a>
<a class="api-item" href="#mvcrouterinterface-addoptions">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addOptions(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Add a route to the router that only match if the HTTP method is OPTIONS</span>
</a>
<a class="api-item" href="#mvcrouterinterface-addpatch">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPatch(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PATCH</span>
</a>
<a class="api-item" href="#mvcrouterinterface-addpost">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPost(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is POST</span>
</a>
<a class="api-item" href="#mvcrouterinterface-addpurge">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPurge(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PURGE</span>
</a>
<a class="api-item" href="#mvcrouterinterface-addput">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPut(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PUT</span>
</a>
<a class="api-item" href="#mvcrouterinterface-addtrace">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addTrace(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is TRACE</span>
</a>
<a class="api-item" href="#mvcrouterinterface-attach">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig">attach(
    RouteInterface $route,
    int $position = Router::POSITION_LAST
)</code>
<span class="desc">Attach Route object to the routes stack.</span>
</a>
<a class="api-item" href="#mvcrouterinterface-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">clear()</code>
<span class="desc">Removes all the defined routes</span>
</a>
<a class="api-item" href="#mvcrouterinterface-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getActionName()</code>
<span class="desc">Returns processed action name</span>
</a>
<a class="api-item" href="#mvcrouterinterface-getcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getControllerName()</code>
<span class="desc">Returns processed controller name</span>
</a>
<a class="api-item" href="#mvcrouterinterface-getmatchedroute">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface|null</code>
<code class="sig">getMatchedRoute()</code>
<span class="desc">Returns the route that matches the handled URI</span>
</a>
<a class="api-item" href="#mvcrouterinterface-getmatches">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getMatches()</code>
<span class="desc">Return the sub expressions in the regular expression matched</span>
</a>
<a class="api-item" href="#mvcrouterinterface-getmodulename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getModuleName()</code>
<span class="desc">Returns processed module name</span>
</a>
<a class="api-item" href="#mvcrouterinterface-getnamespacename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNamespaceName()</code>
<span class="desc">Returns processed namespace name</span>
</a>
<a class="api-item" href="#mvcrouterinterface-getparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParams()</code>
<span class="desc">Returns processed extra params</span>
</a>
<a class="api-item" href="#mvcrouterinterface-getroutebyid">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface|bool</code>
<code class="sig">getRouteById( mixed $routeId )</code>
<span class="desc">Returns a route object by its id</span>
</a>
<a class="api-item" href="#mvcrouterinterface-getroutebyname">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface|bool</code>
<code class="sig">getRouteByName( string $name )</code>
<span class="desc">Returns a route object by its name</span>
</a>
<a class="api-item" href="#mvcrouterinterface-getroutes">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface[]</code>
<code class="sig">getRoutes()</code>
<span class="desc">Return all the routes defined in the router</span>
</a>
<a class="api-item" href="#mvcrouterinterface-handle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">handle( string $uri )</code>
<span class="desc">Handles routing information received from the rewrite engine</span>
</a>
<a class="api-item" href="#mvcrouterinterface-loadfromconfig">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig">loadFromConfig( mixed $config )</code>
<span class="desc">Loads routes from an array or Phalcon\Config\Config instance.</span>
</a>
<a class="api-item" href="#mvcrouterinterface-mount">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig">mount( GroupInterface $group )</code>
<span class="desc">Mounts a group of routes in the router</span>
</a>
<a class="api-item" href="#mvcrouterinterface-setdefaultaction">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig">setDefaultAction( string $actionName )</code>
<span class="desc">Sets the default action name</span>
</a>
<a class="api-item" href="#mvcrouterinterface-setdefaultcontroller">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig">setDefaultController( string $controllerName )</code>
<span class="desc">Sets the default controller name</span>
</a>
<a class="api-item" href="#mvcrouterinterface-setdefaultmodule">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig">setDefaultModule( string $moduleName )</code>
<span class="desc">Sets the name of the default module</span>
</a>
<a class="api-item" href="#mvcrouterinterface-setdefaults">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig">setDefaults( array $defaults )</code>
<span class="desc">Sets an array of default paths</span>
</a>
<a class="api-item" href="#mvcrouterinterface-wasmatched">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">wasMatched()</code>
<span class="desc">Check if the router matches any of the defined routes</span>
</a>
</div>

### Methods

<div class="api-group">Public · 31</div>

#### `add()` { #mvcrouterinterface-add }

```php
public function add(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router on any HTTP method

#### `addConnect()` { #mvcrouterinterface-addconnect }

```php
public function addConnect(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is CONNECT

#### `addDelete()` { #mvcrouterinterface-adddelete }

```php
public function addDelete(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is DELETE

#### `addGet()` { #mvcrouterinterface-addget }

```php
public function addGet(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is GET

#### `addHead()` { #mvcrouterinterface-addhead }

```php
public function addHead(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is HEAD

#### `addOptions()` { #mvcrouterinterface-addoptions }

```php
public function addOptions(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Add a route to the router that only match if the HTTP method is OPTIONS

#### `addPatch()` { #mvcrouterinterface-addpatch }

```php
public function addPatch(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PATCH

#### `addPost()` { #mvcrouterinterface-addpost }

```php
public function addPost(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is POST

#### `addPurge()` { #mvcrouterinterface-addpurge }

```php
public function addPurge(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PURGE
(Squid and Varnish support)

#### `addPut()` { #mvcrouterinterface-addput }

```php
public function addPut(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PUT

#### `addTrace()` { #mvcrouterinterface-addtrace }

```php
public function addTrace(
    string $pattern,
    mixed $paths = null,
    int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is TRACE

#### `attach()` { #mvcrouterinterface-attach }

```php
public function attach(
    RouteInterface $route,
    int $position = Router::POSITION_LAST
): RouterInterface;
```

Attach Route object to the routes stack.

#### `clear()` { #mvcrouterinterface-clear }

```php
public function clear(): void;
```

Removes all the defined routes

#### `getActionName()` { #mvcrouterinterface-getactionname }

```php
public function getActionName(): string;
```

Returns processed action name

#### `getControllerName()` { #mvcrouterinterface-getcontrollername }

```php
public function getControllerName(): string;
```

Returns processed controller name

#### `getMatchedRoute()` { #mvcrouterinterface-getmatchedroute }

```php
public function getMatchedRoute(): RouteInterface|null;
```

Returns the route that matches the handled URI

#### `getMatches()` { #mvcrouterinterface-getmatches }

```php
public function getMatches(): array;
```

Return the sub expressions in the regular expression matched

#### `getModuleName()` { #mvcrouterinterface-getmodulename }

```php
public function getModuleName(): string;
```

Returns processed module name

#### `getNamespaceName()` { #mvcrouterinterface-getnamespacename }

```php
public function getNamespaceName(): string;
```

Returns processed namespace name

#### `getParams()` { #mvcrouterinterface-getparams }

```php
public function getParams(): array;
```

Returns processed extra params

#### `getRouteById()` { #mvcrouterinterface-getroutebyid }

```php
public function getRouteById( mixed $routeId ): RouteInterface|bool;
```

Returns a route object by its id

#### `getRouteByName()` { #mvcrouterinterface-getroutebyname }

```php
public function getRouteByName( string $name ): RouteInterface|bool;
```

Returns a route object by its name

#### `getRoutes()` { #mvcrouterinterface-getroutes }

```php
public function getRoutes(): RouteInterface[];
```

Return all the routes defined in the router

#### `handle()` { #mvcrouterinterface-handle }

```php
public function handle( string $uri ): void;
```

Handles routing information received from the rewrite engine

#### `loadFromConfig()` { #mvcrouterinterface-loadfromconfig }

```php
public function loadFromConfig( mixed $config ): RouterInterface;
```

Loads routes from an array or Phalcon\Config\Config instance.

#### `mount()` { #mvcrouterinterface-mount }

```php
public function mount( GroupInterface $group ): RouterInterface;
```

Mounts a group of routes in the router

#### `setDefaultAction()` { #mvcrouterinterface-setdefaultaction }

```php
public function setDefaultAction( string $actionName ): RouterInterface;
```

Sets the default action name

#### `setDefaultController()` { #mvcrouterinterface-setdefaultcontroller }

```php
public function setDefaultController( string $controllerName ): RouterInterface;
```

Sets the default controller name

#### `setDefaultModule()` { #mvcrouterinterface-setdefaultmodule }

```php
public function setDefaultModule( string $moduleName ): RouterInterface;
```

Sets the name of the default module

#### `setDefaults()` { #mvcrouterinterface-setdefaults }

```php
public function setDefaults( array $defaults ): RouterInterface;
```

Sets an array of default paths

#### `wasMatched()` { #mvcrouterinterface-wasmatched }

```php
public function wasMatched(): bool;
```

Check if the router matches any of the defined routes


## Mvc\Router\Annotations

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Annotations.zep){ .src-btn }

Phalcon\Mvc\Router\Annotations

A router that reads routes annotations from classes/resources

```php
use Phalcon\Mvc\Router\Annotations;

$di->setShared(
    "router",
    function() {
        // Use the annotations router
        $router = new Annotations(false);

        // This will do the same as above but only if the handled uri starts with /robots
        $router->addResource("Robots", "/robots");

        return $router;
    }
);
```

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - [`Phalcon\Mvc\Router`](#mvcrouter)
            - **`Phalcon\Mvc\Router\Annotations`**

</div>

__Uses__ `Phalcon\Annotations\Annotation` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\Router\Exceptions\AnnotationsServiceUnavailable` · `Phalcon\Mvc\Router\Exceptions\InvalidCallbackParameter`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterannotations-addmoduleresource">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">addModuleResource(
    string $module,
    string $handler,
    string $prefix = null
)</code>
<span class="desc">Adds a resource to the annotations handler</span>
</a>
<a class="api-item" href="#mvcrouterannotations-addresource">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">addResource(
    string $handler,
    string $prefix = null
)</code>
<span class="desc">Adds a resource to the annotations handler</span>
</a>
<a class="api-item" href="#mvcrouterannotations-getactionpreformatcallback">
<code class="vis vis-public">public</code>
<code class="sig">getActionPreformatCallback()</code>
</a>
<a class="api-item" href="#mvcrouterannotations-getresources">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getResources()</code>
<span class="desc">Return the registered resources</span>
</a>
<a class="api-item" href="#mvcrouterannotations-handle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">handle( string $uri )</code>
<span class="desc">Produce the routing parameters from the rewrite information</span>
</a>
<a class="api-item" href="#mvcrouterannotations-processactionannotation">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">processActionAnnotation(
    string $module,
    string $namespaceName,
    string $controller,
    string $action,
    Annotation $annotation
)</code>
<span class="desc">Checks for annotations in the public methods of the controller</span>
</a>
<a class="api-item" href="#mvcrouterannotations-processcontrollerannotation">
<code class="vis vis-public">public</code>
<code class="sig">processControllerAnnotation(
    string $handler,
    Annotation $annotation
)</code>
<span class="desc">Checks for annotations in the controller docblock</span>
</a>
<a class="api-item" href="#mvcrouterannotations-setactionpreformatcallback">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">setActionPreformatCallback( mixed $callback = null )</code>
<span class="desc">Sets the action preformat callback</span>
</a>
<a class="api-item" href="#mvcrouterannotations-setactionsuffix">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">setActionSuffix( string $actionSuffix )</code>
<span class="desc">Changes the action method suffix</span>
</a>
<a class="api-item" href="#mvcrouterannotations-setcontrollersuffix">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig">setControllerSuffix( string $controllerSuffix )</code>
<span class="desc">Changes the controller class suffix</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$actionPreformatCallback = null` `callable|string|null`

-   `protected`{ .vis-protected } `$actionSuffix = "Action"` `string`

-   `protected`{ .vis-protected } `$controllerSuffix = "Controller"` `string`

-   `protected`{ .vis-protected } `$handlers = []` `array`

-   `protected`{ .vis-protected } `$routePrefix = ""` `string`

</div>

### Methods

<div class="api-group">Public · 10</div>

#### `addModuleResource()` { #mvcrouterannotations-addmoduleresource }

```php
public function addModuleResource(
    string $module,
    string $handler,
    string $prefix = null
): static;
```

Adds a resource to the annotations handler
A resource is a class that contains routing annotations
The class is located in a module

#### `addResource()` { #mvcrouterannotations-addresource }

```php
public function addResource(
    string $handler,
    string $prefix = null
): static;
```

Adds a resource to the annotations handler
A resource is a class that contains routing annotations

#### `getActionPreformatCallback()` { #mvcrouterannotations-getactionpreformatcallback }

```php
public function getActionPreformatCallback();
```

#### `getResources()` { #mvcrouterannotations-getresources }

```php
public function getResources(): array;
```

Return the registered resources

#### `handle()` { #mvcrouterannotations-handle }

```php
public function handle( string $uri ): void;
```

Produce the routing parameters from the rewrite information

#### `processActionAnnotation()` { #mvcrouterannotations-processactionannotation }

```php
public function processActionAnnotation(
    string $module,
    string $namespaceName,
    string $controller,
    string $action,
    Annotation $annotation
): void;
```

Checks for annotations in the public methods of the controller

#### `processControllerAnnotation()` { #mvcrouterannotations-processcontrollerannotation }

```php
public function processControllerAnnotation(
    string $handler,
    Annotation $annotation
);
```

Checks for annotations in the controller docblock

#### `setActionPreformatCallback()` { #mvcrouterannotations-setactionpreformatcallback }

```php
public function setActionPreformatCallback( mixed $callback = null ): self;
```

Sets the action preformat callback
$action here already without suffix 'Action'

```php
// Array as callback
$annotationRouter->setActionPreformatCallback(
     [
         new Uncamelize(),
         '__invoke'
     ]
 );

// Function as callback
$annotationRouter->setActionPreformatCallback(
    function ($action) {
        return $action;
    }
);

// String as callback
$annotationRouter->setActionPreformatCallback('strtolower');

// If empty method constructor called [null], sets uncamelize with - delimiter
$annotationRouter->setActionPreformatCallback();
```

#### `setActionSuffix()` { #mvcrouterannotations-setactionsuffix }

```php
public function setActionSuffix( string $actionSuffix ): self;
```

Changes the action method suffix

#### `setControllerSuffix()` { #mvcrouterannotations-setcontrollersuffix }

```php
public function setControllerSuffix( string $controllerSuffix ): self;
```

Changes the controller class suffix


## Mvc\Router\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exception.zep){ .src-btn }

Phalcon\Mvc\Router\Exception

Exceptions thrown in Phalcon\Mvc\Router will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Mvc\Router\Exception`**
        - [`Phalcon\Mvc\Router\Exceptions\AnnotationsServiceUnavailable`](#mvcrouterexceptionsannotationsserviceunavailable)
        - [`Phalcon\Mvc\Router\Exceptions\BeforeMatchNotCallable`](#mvcrouterexceptionsbeforematchnotcallable)
        - [`Phalcon\Mvc\Router\Exceptions\ConfigKeyMustBeArray`](#mvcrouterexceptionsconfigkeymustbearray)
        - [`Phalcon\Mvc\Router\Exceptions\EmptyGroupOfRoutes`](#mvcrouterexceptionsemptygroupofroutes)
        - [`Phalcon\Mvc\Router\Exceptions\GroupRoutesMustBeArray`](#mvcrouterexceptionsgrouproutesmustbearray)
        - [`Phalcon\Mvc\Router\Exceptions\InvalidCallbackParameter`](#mvcrouterexceptionsinvalidcallbackparameter)
        - [`Phalcon\Mvc\Router\Exceptions\InvalidConfigSource`](#mvcrouterexceptionsinvalidconfigsource)
        - [`Phalcon\Mvc\Router\Exceptions\InvalidNotFoundPaths`](#mvcrouterexceptionsinvalidnotfoundpaths)
        - [`Phalcon\Mvc\Router\Exceptions\InvalidRoutePaths`](#mvcrouterexceptionsinvalidroutepaths)
        - [`Phalcon\Mvc\Router\Exceptions\InvalidRoutePosition`](#mvcrouterexceptionsinvalidrouteposition)
        - [`Phalcon\Mvc\Router\Exceptions\InvalidRouterFactoryConfig`](#mvcrouterexceptionsinvalidrouterfactoryconfig)
        - [`Phalcon\Mvc\Router\Exceptions\MissingGroupRouteKey`](#mvcrouterexceptionsmissinggrouproutekey)
        - [`Phalcon\Mvc\Router\Exceptions\MissingRouteConfigKey`](#mvcrouterexceptionsmissingrouteconfigkey)
        - [`Phalcon\Mvc\Router\Exceptions\RequestServiceUnavailable`](#mvcrouterexceptionsrequestserviceunavailable)
        - [`Phalcon\Mvc\Router\Exceptions\UnknownHttpMethod`](#mvcrouterexceptionsunknownhttpmethod)
        - [`Phalcon\Mvc\Router\Exceptions\WrongPathsKey`](#mvcrouterexceptionswrongpathskey)

</div>


## Mvc\Router\Exceptions\AnnotationsServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/AnnotationsServiceUnavailable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\AnnotationsServiceUnavailable`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsannotationsserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsannotationsserviceunavailable-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\BeforeMatchNotCallable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/BeforeMatchNotCallable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\BeforeMatchNotCallable`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsbeforematchnotcallable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsbeforematchnotcallable-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\ConfigKeyMustBeArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/ConfigKeyMustBeArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\ConfigKeyMustBeArray`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsconfigkeymustbearray-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $key )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsconfigkeymustbearray-__construct }

```php
public function __construct( string $key );
```


## Mvc\Router\Exceptions\EmptyGroupOfRoutes

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/EmptyGroupOfRoutes.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\EmptyGroupOfRoutes`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsemptygroupofroutes-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsemptygroupofroutes-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\GroupRoutesMustBeArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/GroupRoutesMustBeArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\GroupRoutesMustBeArray`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsgrouproutesmustbearray-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsgrouproutesmustbearray-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\InvalidCallbackParameter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/InvalidCallbackParameter.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\InvalidCallbackParameter`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsinvalidcallbackparameter-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsinvalidcallbackparameter-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\InvalidConfigSource

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/InvalidConfigSource.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\InvalidConfigSource`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsinvalidconfigsource-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsinvalidconfigsource-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\InvalidNotFoundPaths

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/InvalidNotFoundPaths.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\InvalidNotFoundPaths`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsinvalidnotfoundpaths-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsinvalidnotfoundpaths-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\InvalidRoutePaths

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/InvalidRoutePaths.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\InvalidRoutePaths`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsinvalidroutepaths-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsinvalidroutepaths-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\InvalidRoutePosition

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/InvalidRoutePosition.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\InvalidRoutePosition`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsinvalidrouteposition-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsinvalidrouteposition-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\InvalidRouterFactoryConfig

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/InvalidRouterFactoryConfig.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\InvalidRouterFactoryConfig`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsinvalidrouterfactoryconfig-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsinvalidrouterfactoryconfig-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\MissingGroupRouteKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/MissingGroupRouteKey.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\MissingGroupRouteKey`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsmissinggrouproutekey-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $key )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsmissinggrouproutekey-__construct }

```php
public function __construct( string $key );
```


## Mvc\Router\Exceptions\MissingRouteConfigKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/MissingRouteConfigKey.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\MissingRouteConfigKey`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsmissingrouteconfigkey-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $key )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsmissingrouteconfigkey-__construct }

```php
public function __construct( string $key );
```


## Mvc\Router\Exceptions\RequestServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/RequestServiceUnavailable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\RequestServiceUnavailable`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsrequestserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsrequestserviceunavailable-__construct }

```php
public function __construct();
```


## Mvc\Router\Exceptions\UnknownHttpMethod

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/UnknownHttpMethod.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\UnknownHttpMethod`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionsunknownhttpmethod-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $method )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionsunknownhttpmethod-__construct }

```php
public function __construct( string $method );
```


## Mvc\Router\Exceptions\WrongPathsKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Exceptions/WrongPathsKey.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
        - **`Phalcon\Mvc\Router\Exceptions\WrongPathsKey`**

</div>

__Uses__ `Phalcon\Mvc\Router\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterexceptionswrongpathskey-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $part )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcrouterexceptionswrongpathskey-__construct }

```php
public function __construct( string $part );
```


## Mvc\Router\Group

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Group.zep){ .src-btn }

Helper class to create a group of routes with common attributes

```php
$router = new \Phalcon\Mvc\Router();

//Create a group with a common module and controller
$blog = new Group(
    [
        "module"     => "blog",
        "controller" => "index",
    ]
);

//All the routes start with /blog
$blog->setPrefix("/blog");

//Add a route to the group
$blog->add(
    "/save",
    [
        "action" => "save",
    ]
);

//Add another route to the group
$blog->add(
    "/edit/{id}",
    [
        "action" => "edit",
    ]
);

//This route maps to a controller different than the default
$blog->add(
    "/blog",
    [
        "controller" => "about",
        "action"     => "index",
    ]
);

//Add the group to the router
$router->mount($blog);
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Router\Group`** — implements [`Phalcon\Mvc\Router\GroupInterface`](#mvcroutergroupinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcroutergroup-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( mixed $paths = null )</code>
<span class="desc">Phalcon\Mvc\Router\Group constructor</span>
</a>
<a class="api-item" href="#mvcroutergroup-add">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">add(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null
)</code>
<span class="desc">Adds a route to the router on any HTTP method</span>
</a>
<a class="api-item" href="#mvcroutergroup-addconnect">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addConnect(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is CONNECT</span>
</a>
<a class="api-item" href="#mvcroutergroup-adddelete">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addDelete(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is DELETE</span>
</a>
<a class="api-item" href="#mvcroutergroup-addget">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addGet(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is GET</span>
</a>
<a class="api-item" href="#mvcroutergroup-addhead">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addHead(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is HEAD</span>
</a>
<a class="api-item" href="#mvcroutergroup-addoptions">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addOptions(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Add a route to the router that only match if the HTTP method is OPTIONS</span>
</a>
<a class="api-item" href="#mvcroutergroup-addpatch">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPatch(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PATCH</span>
</a>
<a class="api-item" href="#mvcroutergroup-addpost">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPost(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is POST</span>
</a>
<a class="api-item" href="#mvcroutergroup-addpurge">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPurge(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PURGE</span>
</a>
<a class="api-item" href="#mvcroutergroup-addput">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPut(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PUT</span>
</a>
<a class="api-item" href="#mvcroutergroup-addtrace">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addTrace(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is TRACE</span>
</a>
<a class="api-item" href="#mvcroutergroup-beforematch">
<code class="vis vis-public">public</code>
<code class="ret">GroupInterface</code>
<code class="sig">beforeMatch( callable $beforeMatch )</code>
<span class="desc">Sets a callback that is called if the route is matched.</span>
</a>
<a class="api-item" href="#mvcroutergroup-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">clear()</code>
<span class="desc">Removes all the pre-defined routes</span>
</a>
<a class="api-item" href="#mvcroutergroup-getbeforematch">
<code class="vis vis-public">public</code>
<code class="ret">callable|null</code>
<code class="sig">getBeforeMatch()</code>
<span class="desc">Returns the &#039;before match&#039; callback if any</span>
</a>
<a class="api-item" href="#mvcroutergroup-gethostname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getHostname()</code>
<span class="desc">Returns the hostname restriction</span>
</a>
<a class="api-item" href="#mvcroutergroup-getpaths">
<code class="vis vis-public">public</code>
<code class="ret">array|string|null</code>
<code class="sig">getPaths()</code>
<span class="desc">Returns the common paths defined for this group</span>
</a>
<a class="api-item" href="#mvcroutergroup-getprefix">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getPrefix()</code>
<span class="desc">Returns the common prefix for all the routes</span>
</a>
<a class="api-item" href="#mvcroutergroup-getroutes">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface[]</code>
<code class="sig">getRoutes()</code>
<span class="desc">Returns the routes added to the group</span>
</a>
<a class="api-item" href="#mvcroutergroup-sethostname">
<code class="vis vis-public">public</code>
<code class="ret">GroupInterface</code>
<code class="sig">setHostname( string $hostname )</code>
<span class="desc">Set a hostname restriction for all the routes in the group</span>
</a>
<a class="api-item" href="#mvcroutergroup-setpaths">
<code class="vis vis-public">public</code>
<code class="ret">GroupInterface</code>
<code class="sig">setPaths( mixed $paths )</code>
<span class="desc">Set common paths for all the routes in the group</span>
</a>
<a class="api-item" href="#mvcroutergroup-setprefix">
<code class="vis vis-public">public</code>
<code class="ret">GroupInterface</code>
<code class="sig">setPrefix( string $prefix )</code>
<span class="desc">Set a common uri prefix for all the routes in this group</span>
</a>
<a class="api-item" href="#mvcroutergroup-addroute">
<code class="vis vis-protected">protected</code>
<code class="ret">RouteInterface</code>
<code class="sig">addRoute(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null
)</code>
<span class="desc">Adds a route applying the common attributes</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$beforeMatch = null` `callable|null`

-   `protected`{ .vis-protected } `$hostname = null` `string|null`

-   `protected`{ .vis-protected } `$paths = null` `array|string|null`

-   `protected`{ .vis-protected } `$prefix = null` `string|null`

-   `protected`{ .vis-protected } `$routes = []` `array`

</div>

### Methods

<div class="api-group">Public · 22</div>

#### `__construct()` { #mvcroutergroup-__construct }

```php
public function __construct( mixed $paths = null );
```

Phalcon\Mvc\Router\Group constructor

#### `add()` { #mvcroutergroup-add }

```php
public function add(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null
): RouteInterface;
```

Adds a route to the router on any HTTP method

```php
$router->add("/about", "About::index");
```

#### `addConnect()` { #mvcroutergroup-addconnect }

```php
public function addConnect(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is CONNECT

#### `addDelete()` { #mvcroutergroup-adddelete }

```php
public function addDelete(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is DELETE

#### `addGet()` { #mvcroutergroup-addget }

```php
public function addGet(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is GET

#### `addHead()` { #mvcroutergroup-addhead }

```php
public function addHead(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is HEAD

#### `addOptions()` { #mvcroutergroup-addoptions }

```php
public function addOptions(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Add a route to the router that only match if the HTTP method is OPTIONS

#### `addPatch()` { #mvcroutergroup-addpatch }

```php
public function addPatch(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PATCH

#### `addPost()` { #mvcroutergroup-addpost }

```php
public function addPost(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is POST

#### `addPurge()` { #mvcroutergroup-addpurge }

```php
public function addPurge(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PURGE

#### `addPut()` { #mvcroutergroup-addput }

```php
public function addPut(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PUT

#### `addTrace()` { #mvcroutergroup-addtrace }

```php
public function addTrace(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is TRACE

#### `beforeMatch()` { #mvcroutergroup-beforematch }

```php
public function beforeMatch( callable $beforeMatch ): GroupInterface;
```

Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched

#### `clear()` { #mvcroutergroup-clear }

```php
public function clear(): void;
```

Removes all the pre-defined routes

#### `getBeforeMatch()` { #mvcroutergroup-getbeforematch }

```php
public function getBeforeMatch(): callable|null;
```

Returns the 'before match' callback if any

#### `getHostname()` { #mvcroutergroup-gethostname }

```php
public function getHostname(): string|null;
```

Returns the hostname restriction

#### `getPaths()` { #mvcroutergroup-getpaths }

```php
public function getPaths(): array|string|null;
```

Returns the common paths defined for this group

#### `getPrefix()` { #mvcroutergroup-getprefix }

```php
public function getPrefix(): string|null;
```

Returns the common prefix for all the routes

#### `getRoutes()` { #mvcroutergroup-getroutes }

```php
public function getRoutes(): RouteInterface[];
```

Returns the routes added to the group

#### `setHostname()` { #mvcroutergroup-sethostname }

```php
public function setHostname( string $hostname ): GroupInterface;
```

Set a hostname restriction for all the routes in the group

#### `setPaths()` { #mvcroutergroup-setpaths }

```php
public function setPaths( mixed $paths ): GroupInterface;
```

Set common paths for all the routes in the group

#### `setPrefix()` { #mvcroutergroup-setprefix }

```php
public function setPrefix( string $prefix ): GroupInterface;
```

Set a common uri prefix for all the routes in this group

<div class="api-group">Protected · 1</div>

#### `addRoute()` { #mvcroutergroup-addroute }

```php
protected function addRoute(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null
): RouteInterface;
```

Adds a route applying the common attributes


## Mvc\Router\GroupInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/GroupInterface.zep){ .src-btn }

```php
$router = new \Phalcon\Mvc\Router();

// Create a group with a common module and controller
$blog = new Group(
    [
        "module"     => "blog",
        "controller" => "index",
    ]
);

// All the routes start with /blog
$blog->setPrefix("/blog");

// Add a route to the group
$blog->add(
    "/save",
    [
        "action" => "save",
    ]
);

// Add another route to the group
$blog->add(
    "/edit/{id}",
    [
        "action" => "edit",
    ]
);

// This route maps to a controller different than the default
$blog->add(
    "/blog",
    [
        "controller" => "about",
        "action"     => "index",
    ]
);

// Add the group to the router
$router->mount($blog);
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Router\GroupInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcroutergroupinterface-add">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">add(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null
)</code>
<span class="desc">Adds a route to the router on any HTTP method</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-addconnect">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addConnect(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is CONNECT</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-adddelete">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addDelete(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is DELETE</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-addget">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addGet(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is GET</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-addhead">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addHead(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is HEAD</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-addoptions">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addOptions(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Add a route to the router that only match if the HTTP method is OPTIONS</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-addpatch">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPatch(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PATCH</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-addpost">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPost(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is POST</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-addpurge">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPurge(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PURGE</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-addput">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addPut(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is PUT</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-addtrace">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">addTrace(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Adds a route to the router that only match if the HTTP method is TRACE</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-beforematch">
<code class="vis vis-public">public</code>
<code class="ret">GroupInterface</code>
<code class="sig">beforeMatch( callable $beforeMatch )</code>
<span class="desc">Sets a callback that is called if the route is matched.</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">clear()</code>
<span class="desc">Removes all the pre-defined routes</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-getbeforematch">
<code class="vis vis-public">public</code>
<code class="ret">callable|null</code>
<code class="sig">getBeforeMatch()</code>
<span class="desc">Returns the &#039;before match&#039; callback if any</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-gethostname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getHostname()</code>
<span class="desc">Returns the hostname restriction</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-getpaths">
<code class="vis vis-public">public</code>
<code class="ret">array|string|null</code>
<code class="sig">getPaths()</code>
<span class="desc">Returns the common paths defined for this group</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-getprefix">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getPrefix()</code>
<span class="desc">Returns the common prefix for all the routes</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-getroutes">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface[]</code>
<code class="sig">getRoutes()</code>
<span class="desc">Returns the routes added to the group</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-sethostname">
<code class="vis vis-public">public</code>
<code class="ret">GroupInterface</code>
<code class="sig">setHostname( string $hostname )</code>
<span class="desc">Set a hostname restriction for all the routes in the group</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-setpaths">
<code class="vis vis-public">public</code>
<code class="ret">GroupInterface</code>
<code class="sig">setPaths( mixed $paths )</code>
<span class="desc">Set common paths for all the routes in the group</span>
</a>
<a class="api-item" href="#mvcroutergroupinterface-setprefix">
<code class="vis vis-public">public</code>
<code class="ret">GroupInterface</code>
<code class="sig">setPrefix( string $prefix )</code>
<span class="desc">Set a common uri prefix for all the routes in this group</span>
</a>
</div>

### Methods

<div class="api-group">Public · 21</div>

#### `add()` { #mvcroutergroupinterface-add }

```php
public function add(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null
): RouteInterface;
```

Adds a route to the router on any HTTP method

```php
router->add("/about", "About::index");
```

#### `addConnect()` { #mvcroutergroupinterface-addconnect }

```php
public function addConnect(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is CONNECT

#### `addDelete()` { #mvcroutergroupinterface-adddelete }

```php
public function addDelete(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is DELETE

#### `addGet()` { #mvcroutergroupinterface-addget }

```php
public function addGet(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is GET

#### `addHead()` { #mvcroutergroupinterface-addhead }

```php
public function addHead(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is HEAD

#### `addOptions()` { #mvcroutergroupinterface-addoptions }

```php
public function addOptions(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Add a route to the router that only match if the HTTP method is OPTIONS

#### `addPatch()` { #mvcroutergroupinterface-addpatch }

```php
public function addPatch(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PATCH

#### `addPost()` { #mvcroutergroupinterface-addpost }

```php
public function addPost(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is POST

#### `addPurge()` { #mvcroutergroupinterface-addpurge }

```php
public function addPurge(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PURGE

#### `addPut()` { #mvcroutergroupinterface-addput }

```php
public function addPut(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PUT

#### `addTrace()` { #mvcroutergroupinterface-addtrace }

```php
public function addTrace(
    string $pattern,
    mixed $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is TRACE

#### `beforeMatch()` { #mvcroutergroupinterface-beforematch }

```php
public function beforeMatch( callable $beforeMatch ): GroupInterface;
```

Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched

#### `clear()` { #mvcroutergroupinterface-clear }

```php
public function clear(): void;
```

Removes all the pre-defined routes

#### `getBeforeMatch()` { #mvcroutergroupinterface-getbeforematch }

```php
public function getBeforeMatch(): callable|null;
```

Returns the 'before match' callback if any

#### `getHostname()` { #mvcroutergroupinterface-gethostname }

```php
public function getHostname(): string|null;
```

Returns the hostname restriction

#### `getPaths()` { #mvcroutergroupinterface-getpaths }

```php
public function getPaths(): array|string|null;
```

Returns the common paths defined for this group

#### `getPrefix()` { #mvcroutergroupinterface-getprefix }

```php
public function getPrefix(): string|null;
```

Returns the common prefix for all the routes

#### `getRoutes()` { #mvcroutergroupinterface-getroutes }

```php
public function getRoutes(): RouteInterface[];
```

Returns the routes added to the group

#### `setHostname()` { #mvcroutergroupinterface-sethostname }

```php
public function setHostname( string $hostname ): GroupInterface;
```

Set a hostname restriction for all the routes in the group

#### `setPaths()` { #mvcroutergroupinterface-setpaths }

```php
public function setPaths( mixed $paths ): GroupInterface;
```

Set common paths for all the routes in the group

#### `setPrefix()` { #mvcroutergroupinterface-setprefix }

```php
public function setPrefix( string $prefix ): GroupInterface;
```

Set a common uri prefix for all the routes in this group


## Mvc\Router\Route

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/Route.zep){ .src-btn }

This class represents every route added to the router

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Router\Route`** — implements [`Phalcon\Mvc\Router\RouteInterface`](#mvcrouterrouteinterface)

</div>

__Uses__ `Phalcon\Mvc\Router\Exceptions\InvalidRoutePaths`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterroute-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null
)</code>
<span class="desc">Phalcon\Mvc\Router\Route constructor</span>
</a>
<a class="api-item" href="#mvcrouterroute-beforematch">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">beforeMatch( callable $callback )</code>
<span class="desc">Sets a callback that is called if the route is matched.</span>
</a>
<a class="api-item" href="#mvcrouterroute-compilepattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compilePattern( string $pattern )</code>
<span class="desc">Replaces placeholders from pattern returning a valid PCRE regular expression</span>
</a>
<a class="api-item" href="#mvcrouterroute-convert">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">convert(
    string $name,
    mixed $converter
)</code>
<span class="desc">{@inheritdoc}</span>
</a>
<a class="api-item" href="#mvcrouterroute-extractnamedparams">
<code class="vis vis-public">public</code>
<code class="ret">array|bool</code>
<code class="sig">extractNamedParams( string $pattern )</code>
<span class="desc">Extracts parameters from a string</span>
</a>
<a class="api-item" href="#mvcrouterroute-getbeforematch">
<code class="vis vis-public">public</code>
<code class="ret">callable|null</code>
<code class="sig">getBeforeMatch()</code>
<span class="desc">Returns the &#039;before match&#039; callback if any</span>
</a>
<a class="api-item" href="#mvcrouterroute-getcompiledhostname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getCompiledHostName()</code>
<span class="desc">Returns the compiled hostname regex, or null when the hostname is</span>
</a>
<a class="api-item" href="#mvcrouterroute-getcompiledpattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getCompiledPattern()</code>
<span class="desc">Returns the route&#039;s compiled pattern</span>
</a>
<a class="api-item" href="#mvcrouterroute-getconverters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getConverters()</code>
<span class="desc">Returns the router converter</span>
</a>
<a class="api-item" href="#mvcrouterroute-getgroup">
<code class="vis vis-public">public</code>
<code class="ret">GroupInterface|null</code>
<code class="sig">getGroup()</code>
<span class="desc">Returns the group associated with the route</span>
</a>
<a class="api-item" href="#mvcrouterroute-gethostname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getHostname()</code>
<span class="desc">Returns the hostname restriction if any</span>
</a>
<a class="api-item" href="#mvcrouterroute-gethttpmethods">
<code class="vis vis-public">public</code>
<code class="ret">array|string|null</code>
<code class="sig">getHttpMethods()</code>
<span class="desc">Returns the HTTP methods that constraint matching the route</span>
</a>
<a class="api-item" href="#mvcrouterroute-getmatch">
<code class="vis vis-public">public</code>
<code class="ret">callable|null</code>
<code class="sig">getMatch()</code>
<span class="desc">Returns the &#039;match&#039; callback if any</span>
</a>
<a class="api-item" href="#mvcrouterroute-getname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getName()</code>
<span class="desc">Returns the route&#039;s name</span>
</a>
<a class="api-item" href="#mvcrouterroute-getpaths">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getPaths()</code>
<span class="desc">Returns the paths</span>
</a>
<a class="api-item" href="#mvcrouterroute-getpattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPattern()</code>
<span class="desc">Returns the route&#039;s pattern</span>
</a>
<a class="api-item" href="#mvcrouterroute-getreversedpaths">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getReversedPaths()</code>
<span class="desc">Returns the paths using positions as keys and names as values</span>
</a>
<a class="api-item" href="#mvcrouterroute-getrouteid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getRouteId()</code>
<span class="desc">Returns the route&#039;s id</span>
</a>
<a class="api-item" href="#mvcrouterroute-getroutepaths">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getRoutePaths( mixed $paths = null )</code>
<span class="desc">Returns routePaths</span>
</a>
<a class="api-item" href="#mvcrouterroute-match">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">match( mixed $callback )</code>
<span class="desc">Allows to set a callback to handle the request directly in the route</span>
</a>
<a class="api-item" href="#mvcrouterroute-reconfigure">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reConfigure(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Reconfigure the route adding a new pattern and a set of paths</span>
</a>
<a class="api-item" href="#mvcrouterroute-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Resets the internal route id generator</span>
</a>
<a class="api-item" href="#mvcrouterroute-setgroup">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">setGroup( GroupInterface $group )</code>
<span class="desc">Sets the group associated with the route</span>
</a>
<a class="api-item" href="#mvcrouterroute-sethostname">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">setHostname( string $hostname )</code>
<span class="desc">Sets a hostname restriction to the route</span>
</a>
<a class="api-item" href="#mvcrouterroute-sethttpmethods">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">setHttpMethods( mixed $httpMethods )</code>
<span class="desc">Sets a set of HTTP methods that constraint the matching of the route (alias of via)</span>
</a>
<a class="api-item" href="#mvcrouterroute-setname">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">setName( string $name )</code>
<span class="desc">Sets the route&#039;s name</span>
</a>
<a class="api-item" href="#mvcrouterroute-setrouteid">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">setRouteId( string $routeId )</code>
<span class="desc">Sets the route&#039;s id. Intended for restoring cached routes - most</span>
</a>
<a class="api-item" href="#mvcrouterroute-via">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">via( mixed $httpMethods )</code>
<span class="desc">Set one or more HTTP methods that constraint the matching of the route</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$beforeMatch = null` `callable|null`

-   `protected`{ .vis-protected } `$compiledHostName = false` `string|null|false`

    Cached compiled hostname regex. `false` means "not yet computed";
    `null` means "hostname is literal - use string equality"; any string
    means "use this as the PCRE pattern."

-   `protected`{ .vis-protected } `$compiledPattern = null` `string|null`

-   `protected`{ .vis-protected } `$converters = []` `array`

-   `protected`{ .vis-protected } `$group = null` `GroupInterface|null`

-   `protected`{ .vis-protected } `$hostname = null` `string|null`

-   `protected`{ .vis-protected } `$match = null` `callable|null`

-   `protected`{ .vis-protected } `$methods = []` `array|string|null`

-   `protected`{ .vis-protected } `$name = null` `string|null`

-   `protected`{ .vis-protected } `$paths = []` `array`

-   `protected`{ .vis-protected } `$pattern` `string`

-   `protected`{ .vis-protected } `$routeId = ""` `string`

-   `protected`{ .vis-protected } `$uniqueId = 0` `int`

</div>

### Methods

<div class="api-group">Public · 28</div>

#### `__construct()` { #mvcrouterroute-__construct }

```php
public function __construct(
    string $pattern,
    mixed $paths = null,
    mixed $httpMethods = null
);
```

Phalcon\Mvc\Router\Route constructor

#### `beforeMatch()` { #mvcrouterroute-beforematch }

```php
public function beforeMatch( callable $callback ): RouteInterface;
```

Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched

```php
$router->add(
    "/login",
    [
        "module"     => "admin",
        "controller" => "session",
    ]
)->beforeMatch(
    function ($uri, $route) {
        // Check if the request was made with Ajax
        if ($_SERVER["HTTP_X_REQUESTED_WITH"] === "xmlhttprequest") {
            return false;
        }

        return true;
    }
);
```

#### `compilePattern()` { #mvcrouterroute-compilepattern }

```php
public function compilePattern( string $pattern ): string;
```

Replaces placeholders from pattern returning a valid PCRE regular expression

#### `convert()` { #mvcrouterroute-convert }

```php
public function convert(
    string $name,
    mixed $converter
): RouteInterface;
```

{@inheritdoc}

#### `extractNamedParams()` { #mvcrouterroute-extractnamedparams }

```php
public function extractNamedParams( string $pattern ): array|bool;
```

Extracts parameters from a string

#### `getBeforeMatch()` { #mvcrouterroute-getbeforematch }

```php
public function getBeforeMatch(): callable|null;
```

Returns the 'before match' callback if any

#### `getCompiledHostName()` { #mvcrouterroute-getcompiledhostname }

```php
public function getCompiledHostName(): string|null;
```

Returns the compiled hostname regex, or null when the hostname is
literal and a string-equality comparison should be used.

The result is cached after first computation; setHostname() clears
the cache.

#### `getCompiledPattern()` { #mvcrouterroute-getcompiledpattern }

```php
public function getCompiledPattern(): string;
```

Returns the route's compiled pattern

#### `getConverters()` { #mvcrouterroute-getconverters }

```php
public function getConverters(): array;
```

Returns the router converter

#### `getGroup()` { #mvcrouterroute-getgroup }

```php
public function getGroup(): GroupInterface|null;
```

Returns the group associated with the route

#### `getHostname()` { #mvcrouterroute-gethostname }

```php
public function getHostname(): string|null;
```

Returns the hostname restriction if any

#### `getHttpMethods()` { #mvcrouterroute-gethttpmethods }

```php
public function getHttpMethods(): array|string|null;
```

Returns the HTTP methods that constraint matching the route

#### `getMatch()` { #mvcrouterroute-getmatch }

```php
public function getMatch(): callable|null;
```

Returns the 'match' callback if any

#### `getName()` { #mvcrouterroute-getname }

```php
public function getName(): string|null;
```

Returns the route's name

#### `getPaths()` { #mvcrouterroute-getpaths }

```php
public function getPaths(): array;
```

Returns the paths

#### `getPattern()` { #mvcrouterroute-getpattern }

```php
public function getPattern(): string;
```

Returns the route's pattern

#### `getReversedPaths()` { #mvcrouterroute-getreversedpaths }

```php
public function getReversedPaths(): array;
```

Returns the paths using positions as keys and names as values

#### `getRouteId()` { #mvcrouterroute-getrouteid }

```php
public function getRouteId(): string;
```

Returns the route's id

#### `getRoutePaths()` { #mvcrouterroute-getroutepaths }

```php
public static function getRoutePaths( mixed $paths = null ): array;
```

Returns routePaths

#### `match()` { #mvcrouterroute-match }

```php
public function match( mixed $callback ): RouteInterface;
```

Allows to set a callback to handle the request directly in the route

```php
$router->add(
    "/help",
    []
)->match(
    function () {
        return $this->getResponse()->redirect("https://support.google.com/", true);
    }
);
```

#### `reConfigure()` { #mvcrouterroute-reconfigure }

```php
public function reConfigure(
    string $pattern,
    mixed $paths = null
): void;
```

Reconfigure the route adding a new pattern and a set of paths

#### `reset()` { #mvcrouterroute-reset }

```php
public static function reset(): void;
```

Resets the internal route id generator

#### `setGroup()` { #mvcrouterroute-setgroup }

```php
public function setGroup( GroupInterface $group ): RouteInterface;
```

Sets the group associated with the route

#### `setHostname()` { #mvcrouterroute-sethostname }

```php
public function setHostname( string $hostname ): RouteInterface;
```

Sets a hostname restriction to the route

```php
$route->setHostname("localhost");
```

#### `setHttpMethods()` { #mvcrouterroute-sethttpmethods }

```php
public function setHttpMethods( mixed $httpMethods ): RouteInterface;
```

Sets a set of HTTP methods that constraint the matching of the route (alias of via)

```php
$route->setHttpMethods("GET");

$route->setHttpMethods(
    [
        "GET",
        "POST",
    ]
);
```

#### `setName()` { #mvcrouterroute-setname }

```php
public function setName( string $name ): RouteInterface;
```

Sets the route's name

```php
$router->add(
    "/about",
    [
        "controller" => "about",
    ]
)->setName("about");
```

#### `setRouteId()` { #mvcrouterroute-setrouteid }

```php
public function setRouteId( string $routeId ): RouteInterface;
```

Sets the route's id. Intended for restoring cached routes - most
applications should rely on the auto-incrementing id assigned by
the constructor.

#### `via()` { #mvcrouterroute-via }

```php
public function via( mixed $httpMethods ): RouteInterface;
```

Set one or more HTTP methods that constraint the matching of the route

```php
$route->via("GET");

$route->via(
    [
        "GET",
        "POST",
    ]
);
```


## Mvc\Router\RouteInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/RouteInterface.zep){ .src-btn }

Interface for Phalcon\Mvc\Router\Route

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Router\RouteInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterrouteinterface-compilepattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compilePattern( string $pattern )</code>
<span class="desc">Replaces placeholders from pattern returning a valid PCRE regular expression</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-convert">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">convert(
    string $name,
    mixed $converter
)</code>
<span class="desc">Adds a converter to perform an additional transformation for certain parameter.</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-getcompiledpattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getCompiledPattern()</code>
<span class="desc">Returns the route&#039;s pattern</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-gethostname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getHostname()</code>
<span class="desc">Returns the hostname restriction if any</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-gethttpmethods">
<code class="vis vis-public">public</code>
<code class="ret">array|string|null</code>
<code class="sig">getHttpMethods()</code>
<span class="desc">Returns the HTTP methods that constraint matching the route</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-getname">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getName()</code>
<span class="desc">Returns the route&#039;s name</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-getpaths">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getPaths()</code>
<span class="desc">Returns the paths</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-getpattern">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPattern()</code>
<span class="desc">Returns the route&#039;s pattern</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-getreversedpaths">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getReversedPaths()</code>
<span class="desc">Returns the paths using positions as keys and names as values</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-getrouteid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getRouteId()</code>
<span class="desc">Returns the route&#039;s id</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-reconfigure">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reConfigure(
    string $pattern,
    mixed $paths = null
)</code>
<span class="desc">Reconfigure the route adding a new pattern and a set of paths</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">reset()</code>
<span class="desc">Resets the internal route id generator</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-sethostname">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">setHostname( string $hostname )</code>
<span class="desc">Sets a hostname restriction to the route</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-sethttpmethods">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">setHttpMethods( mixed $httpMethods )</code>
<span class="desc">Sets a set of HTTP methods that constraint the matching of the route</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-setname">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">setName( string $name )</code>
<span class="desc">Sets the route&#039;s name</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-setrouteid">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">setRouteId( string $routeId )</code>
<span class="desc">Sets the route&#039;s id (intended for restoring cached routes)</span>
</a>
<a class="api-item" href="#mvcrouterrouteinterface-via">
<code class="vis vis-public">public</code>
<code class="ret">RouteInterface</code>
<code class="sig">via( mixed $httpMethods )</code>
<span class="desc">Set one or more HTTP methods that constraint the matching of the route</span>
</a>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `compilePattern()` { #mvcrouterrouteinterface-compilepattern }

```php
public function compilePattern( string $pattern ): string;
```

Replaces placeholders from pattern returning a valid PCRE regular expression

#### `convert()` { #mvcrouterrouteinterface-convert }

```php
public function convert(
    string $name,
    mixed $converter
): RouteInterface;
```

Adds a converter to perform an additional transformation for certain parameter.

#### `getCompiledPattern()` { #mvcrouterrouteinterface-getcompiledpattern }

```php
public function getCompiledPattern(): string;
```

Returns the route's pattern

#### `getHostname()` { #mvcrouterrouteinterface-gethostname }

```php
public function getHostname(): string|null;
```

Returns the hostname restriction if any

#### `getHttpMethods()` { #mvcrouterrouteinterface-gethttpmethods }

```php
public function getHttpMethods(): array|string|null;
```

Returns the HTTP methods that constraint matching the route

#### `getName()` { #mvcrouterrouteinterface-getname }

```php
public function getName(): string|null;
```

Returns the route's name

#### `getPaths()` { #mvcrouterrouteinterface-getpaths }

```php
public function getPaths(): array;
```

Returns the paths

#### `getPattern()` { #mvcrouterrouteinterface-getpattern }

```php
public function getPattern(): string;
```

Returns the route's pattern

#### `getReversedPaths()` { #mvcrouterrouteinterface-getreversedpaths }

```php
public function getReversedPaths(): array;
```

Returns the paths using positions as keys and names as values

#### `getRouteId()` { #mvcrouterrouteinterface-getrouteid }

```php
public function getRouteId(): string;
```

Returns the route's id

#### `reConfigure()` { #mvcrouterrouteinterface-reconfigure }

```php
public function reConfigure(
    string $pattern,
    mixed $paths = null
): void;
```

Reconfigure the route adding a new pattern and a set of paths

#### `reset()` { #mvcrouterrouteinterface-reset }

```php
public static function reset(): void;
```

Resets the internal route id generator

#### `setHostname()` { #mvcrouterrouteinterface-sethostname }

```php
public function setHostname( string $hostname ): RouteInterface;
```

Sets a hostname restriction to the route

#### `setHttpMethods()` { #mvcrouterrouteinterface-sethttpmethods }

```php
public function setHttpMethods( mixed $httpMethods ): RouteInterface;
```

Sets a set of HTTP methods that constraint the matching of the route

#### `setName()` { #mvcrouterrouteinterface-setname }

```php
public function setName( string $name ): RouteInterface;
```

Sets the route's name

#### `setRouteId()` { #mvcrouterrouteinterface-setrouteid }

```php
public function setRouteId( string $routeId ): RouteInterface;
```

Sets the route's id (intended for restoring cached routes)

#### `via()` { #mvcrouterrouteinterface-via }

```php
public function via( mixed $httpMethods ): RouteInterface;
```

Set one or more HTTP methods that constraint the matching of the route


## Mvc\Router\RouterFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Router/RouterFactory.zep){ .src-btn }

Phalcon\Mvc\Router\RouterFactory

Builds a Router from an array or ConfigInterface and loads routes via
Router::loadFromConfig.

```php
use Phalcon\Mvc\Router\RouterFactory;

$router = (new RouterFactory())->load(
    [
        "defaultRoutes" : false,
        "routes" : [
            ["method" : "get", "pattern" : "/users", "paths" : "Users::index"]
        ]
    ]
);
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Router\RouterFactory`**

</div>

__Uses__ `Phalcon\Config\ConfigInterface` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\RouterInterface` · `Phalcon\Mvc\Router\Exceptions\InvalidRouterFactoryConfig`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcrouterrouterfactory-load">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig">load( mixed $config )</code>
<span class="desc">Builds a Router from a config array or ConfigInterface and loads routes.</span>
</a>
<a class="api-item" href="#mvcrouterrouterfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">RouterInterface</code>
<code class="sig">newInstance( bool $defaultRoutes = true )</code>
<span class="desc">Returns a bare Router instance.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `load()` { #mvcrouterrouterfactory-load }

```php
public function load( mixed $config ): RouterInterface;
```

Builds a Router from a config array or ConfigInterface and loads routes.

#### `newInstance()` { #mvcrouterrouterfactory-newinstance }

```php
public function newInstance( bool $defaultRoutes = true ): RouterInterface;
```

Returns a bare Router instance.


## Mvc\Url

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Url.zep){ .src-btn }

This component helps in the generation of: URIs, URLs and Paths

```php
// Generate a URL appending the URI to the base URI
echo $url->get("products/edit/1");

// Generate a URL for a predefined route
echo $url->get(
    [
        "for"   => "blog-post",
        "title" => "some-cool-stuff",
        "year"  => "2012",
    ]
);
```

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Mvc\Url`** — implements [`Phalcon\Mvc\Url\UrlInterface`](#mvcurlurlinterface)

</div>

__Uses__ `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\RouterInterface` · `Phalcon\Mvc\Router\RouteInterface` · `Phalcon\Mvc\Url\Exception` · `Phalcon\Mvc\Url\Exceptions\MissingRouteName` · `Phalcon\Mvc\Url\Exceptions\RouteNotFound` · `Phalcon\Mvc\Url\Exceptions\RouterServiceUnavailable` · `Phalcon\Mvc\Url\UrlInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcurl-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( RouterInterface $router = null )</code>
</a>
<a class="api-item" href="#mvcurl-get">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">get(
    mixed $uri = null,
    mixed $arguments = null,
    bool $local = null,
    mixed $baseUri = null,
    bool $replaceArgs = false
)</code>
<span class="desc">Generates a URL</span>
</a>
<a class="api-item" href="#mvcurl-getbasepath">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getBasePath()</code>
<span class="desc">Returns the base path</span>
</a>
<a class="api-item" href="#mvcurl-getbaseuri">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getBaseUri()</code>
<span class="desc">Returns the prefix for all the generated urls. By default /</span>
</a>
<a class="api-item" href="#mvcurl-getstatic">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getStatic( mixed $uri = null )</code>
<span class="desc">Generates a URL for a static resource</span>
</a>
<a class="api-item" href="#mvcurl-getstaticbaseuri">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getStaticBaseUri()</code>
<span class="desc">Returns the prefix for all the generated static urls. By default /</span>
</a>
<a class="api-item" href="#mvcurl-path">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">path( string $path = null )</code>
<span class="desc">Generates a local path</span>
</a>
<a class="api-item" href="#mvcurl-setbasepath">
<code class="vis vis-public">public</code>
<code class="ret">UrlInterface</code>
<code class="sig">setBasePath( string $basePath )</code>
<span class="desc">Sets a base path for all the generated paths</span>
</a>
<a class="api-item" href="#mvcurl-setbaseuri">
<code class="vis vis-public">public</code>
<code class="ret">UrlInterface</code>
<code class="sig">setBaseUri( string $baseUri )</code>
<span class="desc">Sets a prefix for all the URIs to be generated</span>
</a>
<a class="api-item" href="#mvcurl-setstaticbaseuri">
<code class="vis vis-public">public</code>
<code class="ret">UrlInterface</code>
<code class="sig">setStaticBaseUri( string $staticBaseUri )</code>
<span class="desc">Sets a prefix for all static URLs generated</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$basePath = null` `null | string`

-   `protected`{ .vis-protected } `$baseUri = null` `null | string`

-   `protected`{ .vis-protected } `$router = null` `RouterInterface | null`

-   `protected`{ .vis-protected } `$staticBaseUri = null` `null | string`

</div>

### Methods

<div class="api-group">Public · 10</div>

#### `__construct()` { #mvcurl-__construct }

```php
public function __construct( RouterInterface $router = null );
```

#### `get()` { #mvcurl-get }

```php
public function get(
    mixed $uri = null,
    mixed $arguments = null,
    bool $local = null,
    mixed $baseUri = null,
    bool $replaceArgs = false
): string;
```

Generates a URL

```php
// Generate a URL appending the URI to the base URI
echo $url->get("products/edit/1");

// Generate a URL for a predefined route
echo $url->get(
    [
        "for"   => "blog-post",
        "title" => "some-cool-stuff",
        "year"  => "2015",
    ]
);

// Generate a URL with GET arguments (/show/products?id=1&name=Carrots)
echo $url->get(
    "show/products",
    [
        "id"   => 1,
        "name" => "Carrots",
    ]
);

// Generate an absolute URL by setting the third parameter as false.
echo $url->get(
    "https://phalcon.io/",
    null,
    false
);

// Override existing query string keys instead of appending duplicates.
// Without the fifth argument: "http://example.com?page=1&page=5".
// With it set to true:        "http://example.com?page=5".
echo $url->get(
    "http://example.com?page=1",
    ["page" => 5],
    null,
    null,
    true
);
```

#### `getBasePath()` { #mvcurl-getbasepath }

```php
public function getBasePath(): string|null;
```

Returns the base path

#### `getBaseUri()` { #mvcurl-getbaseuri }

```php
public function getBaseUri(): string;
```

Returns the prefix for all the generated urls. By default /

#### `getStatic()` { #mvcurl-getstatic }

```php
public function getStatic( mixed $uri = null ): string;
```

Generates a URL for a static resource

```php
// Generate a URL for a static resource
echo $url->getStatic("img/logo.png");

// Generate a URL for a static predefined route
echo $url->getStatic(
    [
        "for" => "logo-cdn",
    ]
);
```

#### `getStaticBaseUri()` { #mvcurl-getstaticbaseuri }

```php
public function getStaticBaseUri(): string;
```

Returns the prefix for all the generated static urls. By default /

#### `path()` { #mvcurl-path }

```php
public function path( string $path = null ): string;
```

Generates a local path

#### `setBasePath()` { #mvcurl-setbasepath }

```php
public function setBasePath( string $basePath ): UrlInterface;
```

Sets a base path for all the generated paths

```php
$url->setBasePath("/var/www/htdocs/");
```

#### `setBaseUri()` { #mvcurl-setbaseuri }

```php
public function setBaseUri( string $baseUri ): UrlInterface;
```

Sets a prefix for all the URIs to be generated

```php
$url->setBaseUri("/invo/");

$url->setBaseUri("/invo/index.php/");
```

#### `setStaticBaseUri()` { #mvcurl-setstaticbaseuri }

```php
public function setStaticBaseUri( string $staticBaseUri ): UrlInterface;
```

Sets a prefix for all static URLs generated

```php
$url->setStaticBaseUri("/invo/");
```


## Mvc\Url\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Url/Exception.zep){ .src-btn }

Phalcon\Mvc\Url\Exception

Exceptions thrown in Phalcon\Mvc\Url will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Mvc\Url\Exception`**
        - [`Phalcon\Mvc\Url\Exceptions\MissingRouteName`](#mvcurlexceptionsmissingroutename)
        - [`Phalcon\Mvc\Url\Exceptions\RouteNotFound`](#mvcurlexceptionsroutenotfound)
        - [`Phalcon\Mvc\Url\Exceptions\RouterServiceUnavailable`](#mvcurlexceptionsrouterserviceunavailable)

</div>


## Mvc\Url\Exceptions\MissingRouteName

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Url/Exceptions/MissingRouteName.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Url\Exception`](#mvcurlexception)
        - **`Phalcon\Mvc\Url\Exceptions\MissingRouteName`**

</div>

__Uses__ `Phalcon\Mvc\Url\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcurlexceptionsmissingroutename-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcurlexceptionsmissingroutename-__construct }

```php
public function __construct();
```


## Mvc\Url\Exceptions\RouteNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Url/Exceptions/RouteNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Url\Exception`](#mvcurlexception)
        - **`Phalcon\Mvc\Url\Exceptions\RouteNotFound`**

</div>

__Uses__ `Phalcon\Mvc\Url\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcurlexceptionsroutenotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcurlexceptionsroutenotfound-__construct }

```php
public function __construct( string $name );
```


## Mvc\Url\Exceptions\RouterServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Url/Exceptions/RouterServiceUnavailable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\Url\Exception`](#mvcurlexception)
        - **`Phalcon\Mvc\Url\Exceptions\RouterServiceUnavailable`**

</div>

__Uses__ `Phalcon\Mvc\Url\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcurlexceptionsrouterserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcurlexceptionsrouterserviceunavailable-__construct }

```php
public function __construct();
```


## Mvc\Url\UrlInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/Url/UrlInterface.zep){ .src-btn }

Interface for Phalcon\Mvc\Url\UrlInterface

<div class="api-tree" markdown>

- **`Phalcon\Mvc\Url\UrlInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcurlurlinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">get(
    mixed $uri = null,
    mixed $arguments = null,
    bool $local = null,
    mixed $baseUri = null,
    bool $replaceArgs = false
)</code>
<span class="desc">Generates a URL</span>
</a>
<a class="api-item" href="#mvcurlurlinterface-getbasepath">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getBasePath()</code>
<span class="desc">Returns a base path</span>
</a>
<a class="api-item" href="#mvcurlurlinterface-getbaseuri">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getBaseUri()</code>
<span class="desc">Returns the prefix for all the generated urls. By default /</span>
</a>
<a class="api-item" href="#mvcurlurlinterface-path">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">path( string $path = null )</code>
<span class="desc">Generates a local path</span>
</a>
<a class="api-item" href="#mvcurlurlinterface-setbasepath">
<code class="vis vis-public">public</code>
<code class="ret">UrlInterface</code>
<code class="sig">setBasePath( string $basePath )</code>
<span class="desc">Sets a base paths for all the generated paths</span>
</a>
<a class="api-item" href="#mvcurlurlinterface-setbaseuri">
<code class="vis vis-public">public</code>
<code class="ret">UrlInterface</code>
<code class="sig">setBaseUri( string $baseUri )</code>
<span class="desc">Sets a prefix to all the urls generated</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `get()` { #mvcurlurlinterface-get }

```php
public function get(
    mixed $uri = null,
    mixed $arguments = null,
    bool $local = null,
    mixed $baseUri = null,
    bool $replaceArgs = false
): string;
```

Generates a URL

#### `getBasePath()` { #mvcurlurlinterface-getbasepath }

```php
public function getBasePath(): string|null;
```

Returns a base path

#### `getBaseUri()` { #mvcurlurlinterface-getbaseuri }

```php
public function getBaseUri(): string;
```

Returns the prefix for all the generated urls. By default /

#### `path()` { #mvcurlurlinterface-path }

```php
public function path( string $path = null ): string;
```

Generates a local path

#### `setBasePath()` { #mvcurlurlinterface-setbasepath }

```php
public function setBasePath( string $basePath ): UrlInterface;
```

Sets a base paths for all the generated paths

#### `setBaseUri()` { #mvcurlurlinterface-setbaseuri }

```php
public function setBaseUri( string $baseUri ): UrlInterface;
```

Sets a prefix to all the urls generated


## Mvc\View

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View.zep){ .src-btn }

Phalcon\Mvc\View is a class for working with the "view" portion of the
model-view-controller pattern. That is, it exists to help keep the view
script separate from the model and controller scripts. It provides a system
of helpers, output filters, and variable escaping.

```php
use Phalcon\Mvc\View;

$view = new View();

// Setting views directory
$view->setViewsDir("app/views/");

$view->start();

// Shows recent posts view (app/views/posts/recent.phtml)
$view->render("posts", "recent");
$view->finish();

// Printing views output
echo $view->getContent();
```

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - **`Phalcon\Mvc\View`** — implements [`Phalcon\Mvc\ViewInterface`](#mvcviewinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)

</div>

__Uses__ `Closure` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Mvc\View\Engine\Php` · `Phalcon\Mvc\View\Exception` · `Phalcon\Mvc\View\Exceptions\InvalidEngineRegistration` · `Phalcon\Mvc\View\Exceptions\InvalidViewsDirType` · `Phalcon\Mvc\View\Exceptions\ViewNotFound` · `Phalcon\Mvc\View\Exceptions\ViewServicesUnavailable` · `Phalcon\Mvc\View\Exceptions\ViewsDirItemMustBeString`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcview-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $options = [] )</code>
<span class="desc">Phalcon\Mvc\View constructor</span>
</a>
<a class="api-item" href="#mvcview-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">__get( string $key )</code>
<span class="desc">Magic method to retrieve a variable passed to the view</span>
</a>
<a class="api-item" href="#mvcview-__isset">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">__isset( string $key )</code>
<span class="desc">Magic method to retrieve if a variable is set in the view</span>
</a>
<a class="api-item" href="#mvcview-__set">
<code class="vis vis-public">public</code>
<code class="sig">__set(
    string $key,
    mixed $value
)</code>
<span class="desc">Magic method to pass variables to the views</span>
</a>
<a class="api-item" href="#mvcview-cleantemplateafter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">cleanTemplateAfter()</code>
<span class="desc">Resets any template before layouts</span>
</a>
<a class="api-item" href="#mvcview-cleantemplatebefore">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">cleanTemplateBefore()</code>
<span class="desc">Resets any &quot;template before&quot; layouts</span>
</a>
<a class="api-item" href="#mvcview-disable">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">disable()</code>
<span class="desc">Disables the auto-rendering process</span>
</a>
<a class="api-item" href="#mvcview-disablelevel">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">disableLevel( mixed $level )</code>
<span class="desc">Disables a specific level of rendering</span>
</a>
<a class="api-item" href="#mvcview-enable">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">enable()</code>
<span class="desc">Enables the auto-rendering process</span>
</a>
<a class="api-item" href="#mvcview-exists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">exists( string $view )</code>
<span class="desc">Checks whether view exists</span>
</a>
<a class="api-item" href="#mvcview-finish">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">finish()</code>
<span class="desc">Finishes the render process by stopping the output buffering</span>
</a>
<a class="api-item" href="#mvcview-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getActionName()</code>
<span class="desc">Gets the name of the action rendered</span>
</a>
<a class="api-item" href="#mvcview-getactiverenderpath">
<code class="vis vis-public">public</code>
<code class="ret">string|array</code>
<code class="sig">getActiveRenderPath()</code>
<span class="desc">Returns the path (or paths) of the views that are currently rendered</span>
</a>
<a class="api-item" href="#mvcview-getbasepath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getBasePath()</code>
<span class="desc">Gets base path</span>
</a>
<a class="api-item" href="#mvcview-getcontent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getContent()</code>
<span class="desc">Returns output from another view stage</span>
</a>
<a class="api-item" href="#mvcview-getcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getControllerName()</code>
<span class="desc">Gets the name of the controller rendered</span>
</a>
<a class="api-item" href="#mvcview-getcurrentrenderlevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getCurrentRenderLevel()</code>
</a>
<a class="api-item" href="#mvcview-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#mvcview-getlayout">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getLayout()</code>
<span class="desc">Returns the name of the main view</span>
</a>
<a class="api-item" href="#mvcview-getlayoutsdir">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getLayoutsDir()</code>
<span class="desc">Gets the current layouts sub-directory</span>
</a>
<a class="api-item" href="#mvcview-getmainview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getMainView()</code>
<span class="desc">Returns the name of the main view</span>
</a>
<a class="api-item" href="#mvcview-getparamstoview">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParamsToView()</code>
<span class="desc">Returns parameters to views</span>
</a>
<a class="api-item" href="#mvcview-getpartial">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPartial(
    string $partialPath,
    mixed $params = null
)</code>
<span class="desc">Renders a partial view</span>
</a>
<a class="api-item" href="#mvcview-getpartialsdir">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPartialsDir()</code>
<span class="desc">Gets the current partials sub-directory</span>
</a>
<a class="api-item" href="#mvcview-getregisteredengines">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getRegisteredEngines()</code>
</a>
<a class="api-item" href="#mvcview-getrender">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getRender(
    string $controllerName,
    string $actionName,
    array $params = [],
    mixed $configCallback = null
)</code>
<span class="desc">Perform the automatic rendering returning the output as a string</span>
</a>
<a class="api-item" href="#mvcview-getrenderlevel">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getRenderLevel()</code>
</a>
<a class="api-item" href="#mvcview-getvar">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">getVar( string $key )</code>
<span class="desc">Returns a parameter previously set in the view</span>
</a>
<a class="api-item" href="#mvcview-getviewsdir">
<code class="vis vis-public">public</code>
<code class="ret">string|array</code>
<code class="sig">getViewsDir()</code>
<span class="desc">Gets views directory</span>
</a>
<a class="api-item" href="#mvcview-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has( string $view )</code>
<span class="desc">Checks whether view exists</span>
</a>
<a class="api-item" href="#mvcview-isdisabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isDisabled()</code>
<span class="desc">Whether automatic rendering is enabled</span>
</a>
<a class="api-item" href="#mvcview-partial">
<code class="vis vis-public">public</code>
<code class="sig">partial(
    string $partialPath,
    mixed $params = null
)</code>
<span class="desc">Renders a partial view</span>
</a>
<a class="api-item" href="#mvcview-pick">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">pick( mixed $renderView )</code>
<span class="desc">Choose a different view to render instead of last-controller/last-action</span>
</a>
<a class="api-item" href="#mvcview-processrender">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">processRender(
    string $controllerName,
    string $actionName,
    array $params = [],
    bool $fireEvents = true
)</code>
<span class="desc">Processes the view and templates; Fires events if needed</span>
</a>
<a class="api-item" href="#mvcview-registerengines">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">registerEngines( array $engines )</code>
<span class="desc">Register templating engines</span>
</a>
<a class="api-item" href="#mvcview-render">
<code class="vis vis-public">public</code>
<code class="ret">static|false</code>
<code class="sig">render(
    string $controllerName,
    string $actionName,
    array $params = []
)</code>
<span class="desc">Executes render process from dispatching data</span>
</a>
<a class="api-item" href="#mvcview-reset">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">reset()</code>
<span class="desc">Resets the view component to its factory default values</span>
</a>
<a class="api-item" href="#mvcview-setbasepath">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setBasePath( string $basePath )</code>
<span class="desc">Sets base path. Depending of your platform, always add a trailing slash</span>
</a>
<a class="api-item" href="#mvcview-setcontent">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setContent( string $content )</code>
<span class="desc">Externally sets the view content</span>
</a>
<a class="api-item" href="#mvcview-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#mvcview-setlayout">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setLayout( string $layout )</code>
<span class="desc">Change the layout to be used instead of using the name of the latest</span>
</a>
<a class="api-item" href="#mvcview-setlayoutsdir">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setLayoutsDir( string $layoutsDir )</code>
<span class="desc">Sets the layouts sub-directory. Must be a directory under the views</span>
</a>
<a class="api-item" href="#mvcview-setmainview">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setMainView( string $viewPath )</code>
<span class="desc">Sets default view name. Must be a file without extension in the views</span>
</a>
<a class="api-item" href="#mvcview-setparamtoview">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setParamToView(
    string $key,
    mixed $value
)</code>
<span class="desc">Adds parameters to views (alias of setVar)</span>
</a>
<a class="api-item" href="#mvcview-setpartialsdir">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setPartialsDir( string $partialsDir )</code>
<span class="desc">Sets a partials sub-directory. Must be a directory under the views</span>
</a>
<a class="api-item" href="#mvcview-setrenderlevel">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setRenderLevel( int $level )</code>
<span class="desc">Sets the render level for the view</span>
</a>
<a class="api-item" href="#mvcview-settemplateafter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setTemplateAfter( mixed $templateAfter )</code>
<span class="desc">Sets a &quot;template after&quot; controller layout</span>
</a>
<a class="api-item" href="#mvcview-settemplatebefore">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setTemplateBefore( mixed $templateBefore )</code>
<span class="desc">Sets a template before the controller layout</span>
</a>
<a class="api-item" href="#mvcview-setvar">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setVar(
    string $key,
    mixed $value
)</code>
<span class="desc">Set a single view parameter</span>
</a>
<a class="api-item" href="#mvcview-setvars">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setVars(
    array $params,
    bool $merge = true
)</code>
<span class="desc">Set all the render params</span>
</a>
<a class="api-item" href="#mvcview-setviewsdir">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setViewsDir( mixed $viewsDir )</code>
<span class="desc">Sets the views directory. Depending of your platform,</span>
</a>
<a class="api-item" href="#mvcview-start">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">start()</code>
<span class="desc">Starts rendering process enabling the output buffering</span>
</a>
<a class="api-item" href="#mvcview-tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">toString(
    string $controllerName,
    string $actionName,
    array $params = []
)</code>
<span class="desc">Renders the view and returns it as a string</span>
</a>
<a class="api-item" href="#mvcview-enginerender">
<code class="vis vis-protected">protected</code>
<code class="sig">engineRender(
    array $engines,
    string $viewPath,
    bool $silence,
    bool $mustClean = true
)</code>
<span class="desc">Checks whether view exists on registered extensions and render it</span>
</a>
<a class="api-item" href="#mvcview-getviewsdirs">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getViewsDirs()</code>
<span class="desc">Gets views directories</span>
</a>
<a class="api-item" href="#mvcview-isabsolutepath">
<code class="vis vis-protected">protected</code>
<code class="sig">isAbsolutePath( string $path )</code>
<span class="desc">Checks if a path is absolute or not</span>
</a>
<a class="api-item" href="#mvcview-loadtemplateengines">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">loadTemplateEngines()</code>
<span class="desc">Loads registered template engines, if none is registered it will use</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `LEVEL_ACTION_VIEW = 1` `int`

    Render Level: To the action view

-   `LEVEL_AFTER_TEMPLATE = 4` `int`

    Render Level: Render to the templates "after"

-   `LEVEL_BEFORE_TEMPLATE = 2` `int`

    Render Level: To the templates "before"

-   `LEVEL_LAYOUT = 3` `int`

    Render Level: To the controller layout

-   `LEVEL_MAIN_LAYOUT = 5` `int`

    Render Level: To the main layout

-   `LEVEL_NO_RENDER = 0` `int`

    Render Level: No render any view

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$actionName` `string`

-   `protected`{ .vis-protected } `$activeRenderPaths` `array`

-   `protected`{ .vis-protected } `$basePath = ""` `string`

-   `protected`{ .vis-protected } `$content = ""` `string`

-   `protected`{ .vis-protected } `$controllerName` `string`

-   `protected`{ .vis-protected } `$currentRenderLevel = 0` `int`

-   `protected`{ .vis-protected } `$disabled = false` `bool`

-   `protected`{ .vis-protected } `$disabledLevels = []` `array`

-   `protected`{ .vis-protected } `$engines = false` `array|bool`

-   `protected`{ .vis-protected } `$eventsManager` `ManagerInterface|null`

-   `protected`{ .vis-protected } `$layout = null` `string|null`

-   `protected`{ .vis-protected } `$layoutsDir = ""` `string`

-   `protected`{ .vis-protected } `$mainView = "index"` `string`

-   `protected`{ .vis-protected } `$options = []` `array`

-   `protected`{ .vis-protected } `$params = []` `array`

-   `protected`{ .vis-protected } `$partialsDir = ""` `string`

-   `protected`{ .vis-protected } `$pickView` `array|null`

-   `protected`{ .vis-protected } `$registeredEngines = []` `array`

-   `protected`{ .vis-protected } `$renderLevel = 5` `int`

-   `protected`{ .vis-protected } `$templatesAfter = []` `array`

-   `protected`{ .vis-protected } `$templatesBefore = []` `array`

-   `protected`{ .vis-protected } `$viewParams = []` `array`

-   `protected`{ .vis-protected } `$viewsDirs = []` `array`

</div>

### Methods

<div class="api-group">Public · 53</div>

#### `__construct()` { #mvcview-__construct }

```php
public function __construct( array $options = [] );
```

Phalcon\Mvc\View constructor

#### `__get()` { #mvcview-__get }

```php
public function __get( string $key ): mixed|null;
```

Magic method to retrieve a variable passed to the view

```php
echo $this->view->products;
```

#### `__isset()` { #mvcview-__isset }

```php
public function __isset( string $key ): bool;
```

Magic method to retrieve if a variable is set in the view

```php
echo isset($this->view->products);
```

#### `__set()` { #mvcview-__set }

```php
public function __set(
    string $key,
    mixed $value
);
```

Magic method to pass variables to the views

```php
$this->view->products = $products;
```

#### `cleanTemplateAfter()` { #mvcview-cleantemplateafter }

```php
public function cleanTemplateAfter(): static;
```

Resets any template before layouts

#### `cleanTemplateBefore()` { #mvcview-cleantemplatebefore }

```php
public function cleanTemplateBefore(): static;
```

Resets any "template before" layouts

#### `disable()` { #mvcview-disable }

```php
public function disable(): static;
```

Disables the auto-rendering process

#### `disableLevel()` { #mvcview-disablelevel }

```php
public function disableLevel( mixed $level ): static;
```

Disables a specific level of rendering

```php
// Render all levels except ACTION level
$this->view->disableLevel(
    View::LEVEL_ACTION_VIEW
);
```

#### `enable()` { #mvcview-enable }

```php
public function enable(): static;
```

Enables the auto-rendering process

#### `exists()` { #mvcview-exists }

```php
public function exists( string $view ): bool;
```

Checks whether view exists
@deprecated

#### `finish()` { #mvcview-finish }

```php
public function finish(): static;
```

Finishes the render process by stopping the output buffering

#### `getActionName()` { #mvcview-getactionname }

```php
public function getActionName(): string;
```

Gets the name of the action rendered

#### `getActiveRenderPath()` { #mvcview-getactiverenderpath }

```php
public function getActiveRenderPath(): string|array;
```

Returns the path (or paths) of the views that are currently rendered

#### `getBasePath()` { #mvcview-getbasepath }

```php
public function getBasePath(): string;
```

Gets base path

#### `getContent()` { #mvcview-getcontent }

```php
public function getContent(): string;
```

Returns output from another view stage

#### `getControllerName()` { #mvcview-getcontrollername }

```php
public function getControllerName(): string;
```

Gets the name of the controller rendered

#### `getCurrentRenderLevel()` { #mvcview-getcurrentrenderlevel }

```php
public function getCurrentRenderLevel(): int;
```

#### `getEventsManager()` { #mvcview-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `getLayout()` { #mvcview-getlayout }

```php
public function getLayout(): string|null;
```

Returns the name of the main view

#### `getLayoutsDir()` { #mvcview-getlayoutsdir }

```php
public function getLayoutsDir(): string;
```

Gets the current layouts sub-directory

#### `getMainView()` { #mvcview-getmainview }

```php
public function getMainView(): string;
```

Returns the name of the main view

#### `getParamsToView()` { #mvcview-getparamstoview }

```php
public function getParamsToView(): array;
```

Returns parameters to views

#### `getPartial()` { #mvcview-getpartial }

```php
public function getPartial(
    string $partialPath,
    mixed $params = null
): string;
```

Renders a partial view

```php
// Retrieve the contents of a partial
echo $this->getPartial("shared/footer");
```

```php
// Retrieve the contents of a partial with arguments
echo $this->getPartial(
    "shared/footer",
    [
        "content" => $html,
    ]
);
```

#### `getPartialsDir()` { #mvcview-getpartialsdir }

```php
public function getPartialsDir(): string;
```

Gets the current partials sub-directory

#### `getRegisteredEngines()` { #mvcview-getregisteredengines }

```php
public function getRegisteredEngines(): array;
```

#### `getRender()` { #mvcview-getrender }

```php
public function getRender(
    string $controllerName,
    string $actionName,
    array $params = [],
    mixed $configCallback = null
): string;
```

Perform the automatic rendering returning the output as a string

```php
$template = $this->view->getRender(
    "products",
    "show",
    [
        "products" => $products,
    ]
);
```

#### `getRenderLevel()` { #mvcview-getrenderlevel }

```php
public function getRenderLevel(): int;
```

#### `getVar()` { #mvcview-getvar }

```php
public function getVar( string $key ): mixed|null;
```

Returns a parameter previously set in the view

#### `getViewsDir()` { #mvcview-getviewsdir }

```php
public function getViewsDir(): string|array;
```

Gets views directory

#### `has()` { #mvcview-has }

```php
public function has( string $view ): bool;
```

Checks whether view exists

#### `isDisabled()` { #mvcview-isdisabled }

```php
public function isDisabled(): bool;
```

Whether automatic rendering is enabled

#### `partial()` { #mvcview-partial }

```php
public function partial(
    string $partialPath,
    mixed $params = null
);
```

Renders a partial view

```php
// Show a partial inside another view
$this->partial("shared/footer");
```

```php
// Show a partial inside another view with parameters
$this->partial(
    "shared/footer",
    [
        "content" => $html,
    ]
);
```

#### `pick()` { #mvcview-pick }

```php
public function pick( mixed $renderView ): static;
```

Choose a different view to render instead of last-controller/last-action

```php
use Phalcon\Mvc\Controller;

class ProductsController extends Controller
{
    public function saveAction()
    {
        // Do some save stuff...

        // Then show the list view
        $this->view->pick("products/list");
    }
}
```

#### `processRender()` { #mvcview-processrender }

```php
public function processRender(
    string $controllerName,
    string $actionName,
    array $params = [],
    bool $fireEvents = true
): bool;
```

Processes the view and templates; Fires events if needed

#### `registerEngines()` { #mvcview-registerengines }

```php
public function registerEngines( array $engines ): static;
```

Register templating engines

```php
$this->view->registerEngines(
    [
        ".phtml" => \Phalcon\Mvc\View\Engine\Php::class,
        ".volt"  => \Phalcon\Mvc\View\Engine\Volt::class,
        ".mhtml" => \MyCustomEngine::class,
    ]
);
```

#### `render()` { #mvcview-render }

```php
public function render(
    string $controllerName,
    string $actionName,
    array $params = []
): static|false;
```

Executes render process from dispatching data

```php
// Shows recent posts view (app/views/posts/recent.phtml)
$view->start()->render("posts", "recent")->finish();
```

#### `reset()` { #mvcview-reset }

```php
public function reset(): static;
```

Resets the view component to its factory default values

#### `setBasePath()` { #mvcview-setbasepath }

```php
public function setBasePath( string $basePath ): static;
```

Sets base path. Depending of your platform, always add a trailing slash
or backslash

```php
$view->setBasePath(__DIR__ . "/");
```

#### `setContent()` { #mvcview-setcontent }

```php
public function setContent( string $content ): static;
```

Externally sets the view content

```php
$this->view->setContent("<h1>hello</h1>");
```

#### `setEventsManager()` { #mvcview-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

#### `setLayout()` { #mvcview-setlayout }

```php
public function setLayout( string $layout ): static;
```

Change the layout to be used instead of using the name of the latest
controller name

```php
$this->view->setLayout("main");
```

#### `setLayoutsDir()` { #mvcview-setlayoutsdir }

```php
public function setLayoutsDir( string $layoutsDir ): static;
```

Sets the layouts sub-directory. Must be a directory under the views
directory. Depending of your platform, always add a trailing slash or
backslash

```php
$view->setLayoutsDir("../common/layouts/");
```

#### `setMainView()` { #mvcview-setmainview }

```php
public function setMainView( string $viewPath ): static;
```

Sets default view name. Must be a file without extension in the views
directory

```php
// Renders as main view views-dir/base.phtml
$this->view->setMainView("base");
```

#### `setParamToView()` { #mvcview-setparamtoview }

```php
public function setParamToView(
    string $key,
    mixed $value
): static;
```

Adds parameters to views (alias of setVar)

```php
$this->view->setParamToView("products", $products);
```

#### `setPartialsDir()` { #mvcview-setpartialsdir }

```php
public function setPartialsDir( string $partialsDir ): static;
```

Sets a partials sub-directory. Must be a directory under the views
directory. Depending of your platform, always add a trailing slash or
backslash

```php
$view->setPartialsDir("../common/partials/");
```

#### `setRenderLevel()` { #mvcview-setrenderlevel }

```php
public function setRenderLevel( int $level ): static;
```

Sets the render level for the view

```php
// Render the view related to the controller only
$this->view->setRenderLevel(
    View::LEVEL_LAYOUT
);
```

#### `setTemplateAfter()` { #mvcview-settemplateafter }

```php
public function setTemplateAfter( mixed $templateAfter ): static;
```

Sets a "template after" controller layout

#### `setTemplateBefore()` { #mvcview-settemplatebefore }

```php
public function setTemplateBefore( mixed $templateBefore ): static;
```

Sets a template before the controller layout

#### `setVar()` { #mvcview-setvar }

```php
public function setVar(
    string $key,
    mixed $value
): static;
```

Set a single view parameter

```php
$this->view->setVar("products", $products);
```

#### `setVars()` { #mvcview-setvars }

```php
public function setVars(
    array $params,
    bool $merge = true
): static;
```

Set all the render params

```php
$this->view->setVars(
    [
        "products" => $products,
    ]
);
```

#### `setViewsDir()` { #mvcview-setviewsdir }

```php
public function setViewsDir( mixed $viewsDir ): static;
```

Sets the views directory. Depending of your platform,
always add a trailing slash or backslash

#### `start()` { #mvcview-start }

```php
public function start(): static;
```

Starts rendering process enabling the output buffering

#### `toString()` { #mvcview-tostring }

```php
public function toString(
    string $controllerName,
    string $actionName,
    array $params = []
): string;
```

Renders the view and returns it as a string

<div class="api-group">Protected · 4</div>

#### `engineRender()` { #mvcview-enginerender }

```php
protected function engineRender(
    array $engines,
    string $viewPath,
    bool $silence,
    bool $mustClean = true
);
```

Checks whether view exists on registered extensions and render it

#### `getViewsDirs()` { #mvcview-getviewsdirs }

```php
protected function getViewsDirs(): array;
```

Gets views directories

#### `isAbsolutePath()` { #mvcview-isabsolutepath }

```php
final protected function isAbsolutePath( string $path );
```

Checks if a path is absolute or not

#### `loadTemplateEngines()` { #mvcview-loadtemplateengines }

```php
protected function loadTemplateEngines(): array;
```

Loads registered template engines, if none is registered it will use
Phalcon\Mvc\View\Engine\Php


## Mvc\ViewBaseInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/ViewBaseInterface.zep){ .src-btn }

Interface for Phalcon\Mvc\View and Phalcon\Mvc\View\Simple

<div class="api-tree" markdown>

- **`Phalcon\Mvc\ViewBaseInterface`**
    - [`Phalcon\Mvc\ViewInterface`](#mvcviewinterface)

</div>

__Uses__ `Phalcon\Cache\Adapter\AdapterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewbaseinterface-getcontent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getContent()</code>
<span class="desc">Returns cached output from another view stage</span>
</a>
<a class="api-item" href="#mvcviewbaseinterface-getparamstoview">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParamsToView()</code>
<span class="desc">Returns parameters to views</span>
</a>
<a class="api-item" href="#mvcviewbaseinterface-getviewsdir">
<code class="vis vis-public">public</code>
<code class="ret">string|array</code>
<code class="sig">getViewsDir()</code>
<span class="desc">Gets views directory</span>
</a>
<a class="api-item" href="#mvcviewbaseinterface-partial">
<code class="vis vis-public">public</code>
<code class="sig">partial(
    string $partialPath,
    mixed $params = null
)</code>
<span class="desc">Renders a partial view</span>
</a>
<a class="api-item" href="#mvcviewbaseinterface-setcontent">
<code class="vis vis-public">public</code>
<code class="sig">setContent( string $content )</code>
<span class="desc">Externally sets the view content</span>
</a>
<a class="api-item" href="#mvcviewbaseinterface-setparamtoview">
<code class="vis vis-public">public</code>
<code class="sig">setParamToView(
    string $key,
    mixed $value
)</code>
<span class="desc">Adds parameters to views (alias of setVar)</span>
</a>
<a class="api-item" href="#mvcviewbaseinterface-setvar">
<code class="vis vis-public">public</code>
<code class="sig">setVar(
    string $key,
    mixed $value
)</code>
<span class="desc">Adds parameters to views</span>
</a>
<a class="api-item" href="#mvcviewbaseinterface-setviewsdir">
<code class="vis vis-public">public</code>
<code class="sig">setViewsDir( string $viewsDir )</code>
<span class="desc">Sets views directory. Depending of your platform, always add a trailing</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `getContent()` { #mvcviewbaseinterface-getcontent }

```php
public function getContent(): string;
```

Returns cached output from another view stage

#### `getParamsToView()` { #mvcviewbaseinterface-getparamstoview }

```php
public function getParamsToView(): array;
```

Returns parameters to views

#### `getViewsDir()` { #mvcviewbaseinterface-getviewsdir }

```php
public function getViewsDir(): string|array;
```

Gets views directory

#### `partial()` { #mvcviewbaseinterface-partial }

```php
public function partial(
    string $partialPath,
    mixed $params = null
);
```

Renders a partial view

#### `setContent()` { #mvcviewbaseinterface-setcontent }

```php
public function setContent( string $content );
```

Externally sets the view content

#### `setParamToView()` { #mvcviewbaseinterface-setparamtoview }

```php
public function setParamToView(
    string $key,
    mixed $value
);
```

Adds parameters to views (alias of setVar)

#### `setVar()` { #mvcviewbaseinterface-setvar }

```php
public function setVar(
    string $key,
    mixed $value
);
```

Adds parameters to views

#### `setViewsDir()` { #mvcviewbaseinterface-setviewsdir }

```php
public function setViewsDir( string $viewsDir );
```

Sets views directory. Depending of your platform, always add a trailing
slash or backslash


## Mvc\ViewInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/ViewInterface.zep){ .src-btn }

Interface for Phalcon\Mvc\View

<div class="api-tree" markdown>

- [`Phalcon\Mvc\ViewBaseInterface`](#mvcviewbaseinterface)
    - **`Phalcon\Mvc\ViewInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewinterface-cleantemplateafter">
<code class="vis vis-public">public</code>
<code class="sig">cleanTemplateAfter()</code>
<span class="desc">Resets any template before layouts</span>
</a>
<a class="api-item" href="#mvcviewinterface-cleantemplatebefore">
<code class="vis vis-public">public</code>
<code class="sig">cleanTemplateBefore()</code>
<span class="desc">Resets any template before layouts</span>
</a>
<a class="api-item" href="#mvcviewinterface-disable">
<code class="vis vis-public">public</code>
<code class="sig">disable()</code>
<span class="desc">Disables the auto-rendering process</span>
</a>
<a class="api-item" href="#mvcviewinterface-enable">
<code class="vis vis-public">public</code>
<code class="sig">enable()</code>
<span class="desc">Enables the auto-rendering process</span>
</a>
<a class="api-item" href="#mvcviewinterface-finish">
<code class="vis vis-public">public</code>
<code class="sig">finish()</code>
<span class="desc">Finishes the render process by stopping the output buffering</span>
</a>
<a class="api-item" href="#mvcviewinterface-getactionname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getActionName()</code>
<span class="desc">Gets the name of the action rendered</span>
</a>
<a class="api-item" href="#mvcviewinterface-getactiverenderpath">
<code class="vis vis-public">public</code>
<code class="ret">string|array</code>
<code class="sig">getActiveRenderPath()</code>
<span class="desc">Returns the path of the view that is currently rendered</span>
</a>
<a class="api-item" href="#mvcviewinterface-getbasepath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getBasePath()</code>
<span class="desc">Gets base path</span>
</a>
<a class="api-item" href="#mvcviewinterface-getcontrollername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getControllerName()</code>
<span class="desc">Gets the name of the controller rendered</span>
</a>
<a class="api-item" href="#mvcviewinterface-getlayout">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getLayout()</code>
<span class="desc">Returns the name of the main view</span>
</a>
<a class="api-item" href="#mvcviewinterface-getlayoutsdir">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getLayoutsDir()</code>
<span class="desc">Gets the current layouts sub-directory</span>
</a>
<a class="api-item" href="#mvcviewinterface-getmainview">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getMainView()</code>
<span class="desc">Returns the name of the main view</span>
</a>
<a class="api-item" href="#mvcviewinterface-getpartialsdir">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPartialsDir()</code>
<span class="desc">Gets the current partials sub-directory</span>
</a>
<a class="api-item" href="#mvcviewinterface-isdisabled">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isDisabled()</code>
<span class="desc">Whether the automatic rendering is disabled</span>
</a>
<a class="api-item" href="#mvcviewinterface-pick">
<code class="vis vis-public">public</code>
<code class="sig">pick( string $renderView )</code>
<span class="desc">Choose a view different to render than last-controller/last-action</span>
</a>
<a class="api-item" href="#mvcviewinterface-registerengines">
<code class="vis vis-public">public</code>
<code class="sig">registerEngines( array $engines )</code>
<span class="desc">Register templating engines</span>
</a>
<a class="api-item" href="#mvcviewinterface-render">
<code class="vis vis-public">public</code>
<code class="ret">ViewInterface|bool</code>
<code class="sig">render(
    string $controllerName,
    string $actionName,
    array $params = []
)</code>
<span class="desc">Executes render process from dispatching data</span>
</a>
<a class="api-item" href="#mvcviewinterface-reset">
<code class="vis vis-public">public</code>
<code class="sig">reset()</code>
<span class="desc">Resets the view component to its factory default values</span>
</a>
<a class="api-item" href="#mvcviewinterface-setbasepath">
<code class="vis vis-public">public</code>
<code class="sig">setBasePath( string $basePath )</code>
<span class="desc">Sets base path. Depending of your platform, always add a trailing slash</span>
</a>
<a class="api-item" href="#mvcviewinterface-setlayout">
<code class="vis vis-public">public</code>
<code class="sig">setLayout( string $layout )</code>
<span class="desc">Change the layout to be used instead of using the name of the latest</span>
</a>
<a class="api-item" href="#mvcviewinterface-setlayoutsdir">
<code class="vis vis-public">public</code>
<code class="sig">setLayoutsDir( string $layoutsDir )</code>
<span class="desc">Sets the layouts sub-directory. Must be a directory under the views</span>
</a>
<a class="api-item" href="#mvcviewinterface-setmainview">
<code class="vis vis-public">public</code>
<code class="sig">setMainView( string $viewPath )</code>
<span class="desc">Sets default view name. Must be a file without extension in the views</span>
</a>
<a class="api-item" href="#mvcviewinterface-setpartialsdir">
<code class="vis vis-public">public</code>
<code class="sig">setPartialsDir( string $partialsDir )</code>
<span class="desc">Sets a partials sub-directory. Must be a directory under the views</span>
</a>
<a class="api-item" href="#mvcviewinterface-setrenderlevel">
<code class="vis vis-public">public</code>
<code class="ret">ViewInterface</code>
<code class="sig">setRenderLevel( int $level )</code>
<span class="desc">Sets the render level for the view</span>
</a>
<a class="api-item" href="#mvcviewinterface-settemplateafter">
<code class="vis vis-public">public</code>
<code class="sig">setTemplateAfter( mixed $templateAfter )</code>
<span class="desc">Appends template after controller layout</span>
</a>
<a class="api-item" href="#mvcviewinterface-settemplatebefore">
<code class="vis vis-public">public</code>
<code class="sig">setTemplateBefore( mixed $templateBefore )</code>
<span class="desc">Appends template before controller layout</span>
</a>
<a class="api-item" href="#mvcviewinterface-start">
<code class="vis vis-public">public</code>
<code class="sig">start()</code>
<span class="desc">Starts rendering process enabling the output buffering</span>
</a>
</div>

### Methods

<div class="api-group">Public · 27</div>

#### `cleanTemplateAfter()` { #mvcviewinterface-cleantemplateafter }

```php
public function cleanTemplateAfter();
```

Resets any template before layouts

#### `cleanTemplateBefore()` { #mvcviewinterface-cleantemplatebefore }

```php
public function cleanTemplateBefore();
```

Resets any template before layouts

#### `disable()` { #mvcviewinterface-disable }

```php
public function disable();
```

Disables the auto-rendering process

#### `enable()` { #mvcviewinterface-enable }

```php
public function enable();
```

Enables the auto-rendering process

#### `finish()` { #mvcviewinterface-finish }

```php
public function finish();
```

Finishes the render process by stopping the output buffering

#### `getActionName()` { #mvcviewinterface-getactionname }

```php
public function getActionName(): string;
```

Gets the name of the action rendered

#### `getActiveRenderPath()` { #mvcviewinterface-getactiverenderpath }

```php
public function getActiveRenderPath(): string|array;
```

Returns the path of the view that is currently rendered

#### `getBasePath()` { #mvcviewinterface-getbasepath }

```php
public function getBasePath(): string;
```

Gets base path

#### `getControllerName()` { #mvcviewinterface-getcontrollername }

```php
public function getControllerName(): string;
```

Gets the name of the controller rendered

#### `getLayout()` { #mvcviewinterface-getlayout }

```php
public function getLayout(): string|null;
```

Returns the name of the main view

#### `getLayoutsDir()` { #mvcviewinterface-getlayoutsdir }

```php
public function getLayoutsDir(): string;
```

Gets the current layouts sub-directory

#### `getMainView()` { #mvcviewinterface-getmainview }

```php
public function getMainView(): string;
```

Returns the name of the main view

#### `getPartialsDir()` { #mvcviewinterface-getpartialsdir }

```php
public function getPartialsDir(): string;
```

Gets the current partials sub-directory

#### `isDisabled()` { #mvcviewinterface-isdisabled }

```php
public function isDisabled(): bool;
```

Whether the automatic rendering is disabled

#### `pick()` { #mvcviewinterface-pick }

```php
public function pick( string $renderView );
```

Choose a view different to render than last-controller/last-action

#### `registerEngines()` { #mvcviewinterface-registerengines }

```php
public function registerEngines( array $engines );
```

Register templating engines

#### `render()` { #mvcviewinterface-render }

```php
public function render(
    string $controllerName,
    string $actionName,
    array $params = []
): ViewInterface|bool;
```

Executes render process from dispatching data

#### `reset()` { #mvcviewinterface-reset }

```php
public function reset();
```

Resets the view component to its factory default values

#### `setBasePath()` { #mvcviewinterface-setbasepath }

```php
public function setBasePath( string $basePath );
```

Sets base path. Depending of your platform, always add a trailing slash
or backslash

#### `setLayout()` { #mvcviewinterface-setlayout }

```php
public function setLayout( string $layout );
```

Change the layout to be used instead of using the name of the latest
controller name

#### `setLayoutsDir()` { #mvcviewinterface-setlayoutsdir }

```php
public function setLayoutsDir( string $layoutsDir );
```

Sets the layouts sub-directory. Must be a directory under the views
directory. Depending of your platform, always add a trailing slash or
backslash

#### `setMainView()` { #mvcviewinterface-setmainview }

```php
public function setMainView( string $viewPath );
```

Sets default view name. Must be a file without extension in the views
directory

#### `setPartialsDir()` { #mvcviewinterface-setpartialsdir }

```php
public function setPartialsDir( string $partialsDir );
```

Sets a partials sub-directory. Must be a directory under the views
directory. Depending of your platform, always add a trailing slash or
backslash

#### `setRenderLevel()` { #mvcviewinterface-setrenderlevel }

```php
public function setRenderLevel( int $level ): ViewInterface;
```

Sets the render level for the view

#### `setTemplateAfter()` { #mvcviewinterface-settemplateafter }

```php
public function setTemplateAfter( mixed $templateAfter );
```

Appends template after controller layout

#### `setTemplateBefore()` { #mvcviewinterface-settemplatebefore }

```php
public function setTemplateBefore( mixed $templateBefore );
```

Appends template before controller layout

#### `start()` { #mvcviewinterface-start }

```php
public function start();
```

Starts rendering process enabling the output buffering


## Mvc\View\Engine\AbstractEngine

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/AbstractEngine.zep){ .src-btn }

All the template engine adapters must inherit this class. This provides
basic interfacing between the engine and the Phalcon\Mvc\View component.

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - **`Phalcon\Mvc\View\Engine\AbstractEngine`** — implements [`Phalcon\Mvc\View\Engine\EngineInterface`](#mvcviewengineengineinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)
            - [`Phalcon\Mvc\View\Engine\Php`](#mvcviewenginephp)
            - [`Phalcon\Mvc\View\Engine\Volt`](#mvcviewenginevolt)

</div>

__Uses__ `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Mvc\ViewBaseInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewengineabstractengine-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    ViewBaseInterface $view,
    DiInterface $container = null
)</code>
<span class="desc">Phalcon\Mvc\View\Engine constructor</span>
</a>
<a class="api-item" href="#mvcviewengineabstractengine-getcontent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getContent()</code>
<span class="desc">Returns cached output on another view stage</span>
</a>
<a class="api-item" href="#mvcviewengineabstractengine-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#mvcviewengineabstractengine-getview">
<code class="vis vis-public">public</code>
<code class="ret">ViewBaseInterface</code>
<code class="sig">getView()</code>
<span class="desc">Returns the view component related to the adapter</span>
</a>
<a class="api-item" href="#mvcviewengineabstractengine-partial">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">partial(
    string $partialPath,
    mixed $params = null
)</code>
<span class="desc">Renders a partial inside another view</span>
</a>
<a class="api-item" href="#mvcviewengineabstractengine-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#mvcviewengineabstractengine-firemanagerevent">
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

-   `protected`{ .vis-protected } `$view` `ViewBaseInterface`

</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #mvcviewengineabstractengine-__construct }

```php
public function __construct(
    ViewBaseInterface $view,
    DiInterface $container = null
);
```

Phalcon\Mvc\View\Engine constructor

#### `getContent()` { #mvcviewengineabstractengine-getcontent }

```php
public function getContent(): string;
```

Returns cached output on another view stage

#### `getEventsManager()` { #mvcviewengineabstractengine-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `getView()` { #mvcviewengineabstractengine-getview }

```php
public function getView(): ViewBaseInterface;
```

Returns the view component related to the adapter

#### `partial()` { #mvcviewengineabstractengine-partial }

```php
public function partial(
    string $partialPath,
    mixed $params = null
): void;
```

Renders a partial inside another view

#### `setEventsManager()` { #mvcviewengineabstractengine-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

<div class="api-group">Protected · 1</div>

#### `fireManagerEvent()` { #mvcviewengineabstractengine-firemanagerevent }

```php
protected function fireManagerEvent(
    string $eventName,
    mixed $data = null,
    bool $cancellable = true
): mixed|bool;
```

Helper method to fire an event


## Mvc\View\Engine\EngineInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/EngineInterface.zep){ .src-btn }

Interface for Phalcon\Mvc\View engine adapters

<div class="api-tree" markdown>

- **`Phalcon\Mvc\View\Engine\EngineInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewengineengineinterface-getcontent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getContent()</code>
<span class="desc">Returns cached output on another view stage</span>
</a>
<a class="api-item" href="#mvcviewengineengineinterface-partial">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">partial(
    string $partialPath,
    mixed $params = null
)</code>
<span class="desc">Renders a partial inside another view</span>
</a>
<a class="api-item" href="#mvcviewengineengineinterface-render">
<code class="vis vis-public">public</code>
<code class="sig">render(
    string $path,
    mixed $params,
    bool $mustClean = false
)</code>
<span class="desc">Renders a view using the template engine</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `getContent()` { #mvcviewengineengineinterface-getcontent }

```php
public function getContent(): string;
```

Returns cached output on another view stage

#### `partial()` { #mvcviewengineengineinterface-partial }

```php
public function partial(
    string $partialPath,
    mixed $params = null
): void;
```

Renders a partial inside another view

#### `render()` { #mvcviewengineengineinterface-render }

```php
public function render(
    string $path,
    mixed $params,
    bool $mustClean = false
);
```

Renders a view using the template engine

TODO: Change params to array type


## Mvc\View\Engine\Php

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Php.zep){ .src-btn }

Adapter to use PHP itself as templating engine

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - [`Phalcon\Mvc\View\Engine\AbstractEngine`](#mvcviewengineabstractengine)
            - **`Phalcon\Mvc\View\Engine\Php`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginephp-render">
<code class="vis vis-public">public</code>
<code class="sig">render(
    string $path,
    mixed $params,
    bool $mustClean = false
)</code>
<span class="desc">Renders a view using the template engine</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `render()` { #mvcviewenginephp-render }

```php
public function render(
    string $path,
    mixed $params,
    bool $mustClean = false
);
```

Renders a view using the template engine


## Mvc\View\Engine\Volt

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt.zep){ .src-btn }

Designer friendly and fast template engine for PHP written in Zephir/C

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - [`Phalcon\Mvc\View\Engine\AbstractEngine`](#mvcviewengineabstractengine)
            - **`Phalcon\Mvc\View\Engine\Volt`** — implements [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)

</div>

__Uses__ `Phalcon\Di\DiInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Html\Link\Link` · `Phalcon\Html\Link\Serializer\Header` · `Phalcon\Mvc\View\Engine\Volt\Compiler` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidHaystack` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\MacroNotFound` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\MbstringRequired` · `Phalcon\Mvc\View\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevolt-callmacro">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">callMacro(
    string $name,
    array $arguments = []
)</code>
<span class="desc">Checks if a macro is defined and calls it</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-convertencoding">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">convertEncoding(
    string $text,
    string $from,
    string $to
)</code>
<span class="desc">Performs a string conversion</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-getcompiler">
<code class="vis vis-public">public</code>
<code class="ret">Compiler</code>
<code class="sig">getCompiler()</code>
<span class="desc">Returns the Volt&#039;s compiler</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getOptions()</code>
<span class="desc">Return Volt&#039;s options</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-isincluded">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isIncluded(
    mixed $needle,
    mixed $haystack
)</code>
<span class="desc">Checks if the needle is included in the haystack</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-length">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">length( mixed $item )</code>
<span class="desc">Length filter. If an array/object is passed a count is performed otherwise a strlen/mb_strlen</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-preload">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">preload( mixed $parameters )</code>
<span class="desc">Parses the preload element passed and sets the necessary link headers</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-render">
<code class="vis vis-public">public</code>
<code class="sig">render(
    string $path,
    mixed $params,
    bool $mustClean = false
)</code>
<span class="desc">Renders a view using the template engine</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-setoptions">
<code class="vis vis-public">public</code>
<code class="sig">setOptions( array $options )</code>
<span class="desc">Set Volt&#039;s options</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-slice">
<code class="vis vis-public">public</code>
<code class="sig">slice(
    mixed $value,
    int $start = 0,
    mixed $end = null
)</code>
<span class="desc">Extracts a slice from a string/array/traversable object value</span>
</a>
<a class="api-item" href="#mvcviewenginevolt-sort">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">sort( array $value )</code>
<span class="desc">Sorts an array</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$compiler` `Compiler`

-   `protected`{ .vis-protected } `$eventsManager` `ManagerInterface|null`

-   `protected`{ .vis-protected } `$macros = []` `array`

-   `protected`{ .vis-protected } `$options = []` `array`

</div>

### Methods

<div class="api-group">Public · 13</div>

#### `callMacro()` { #mvcviewenginevolt-callmacro }

```php
public function callMacro(
    string $name,
    array $arguments = []
): mixed;
```

Checks if a macro is defined and calls it

@params string name
@params array arguments

#### `convertEncoding()` { #mvcviewenginevolt-convertencoding }

```php
public function convertEncoding(
    string $text,
    string $from,
    string $to
): string;
```

Performs a string conversion

#### `getCompiler()` { #mvcviewenginevolt-getcompiler }

```php
public function getCompiler(): Compiler;
```

Returns the Volt's compiler

#### `getEventsManager()` { #mvcviewenginevolt-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `getOptions()` { #mvcviewenginevolt-getoptions }

```php
public function getOptions(): array;
```

Return Volt's options

#### `isIncluded()` { #mvcviewenginevolt-isincluded }

```php
public function isIncluded(
    mixed $needle,
    mixed $haystack
): bool;
```

Checks if the needle is included in the haystack

#### `length()` { #mvcviewenginevolt-length }

```php
public function length( mixed $item ): int;
```

Length filter. If an array/object is passed a count is performed otherwise a strlen/mb_strlen

#### `preload()` { #mvcviewenginevolt-preload }

```php
public function preload( mixed $parameters ): string;
```

Parses the preload element passed and sets the necessary link headers
@todo find a better way to handle this

#### `render()` { #mvcviewenginevolt-render }

```php
public function render(
    string $path,
    mixed $params,
    bool $mustClean = false
);
```

Renders a view using the template engine

#### `setEventsManager()` { #mvcviewenginevolt-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

#### `setOptions()` { #mvcviewenginevolt-setoptions }

```php
public function setOptions( array $options );
```

Set Volt's options

#### `slice()` { #mvcviewenginevolt-slice }

```php
public function slice(
    mixed $value,
    int $start = 0,
    mixed $end = null
);
```

Extracts a slice from a string/array/traversable object value

#### `sort()` { #mvcviewenginevolt-sort }

```php
public function sort( array $value ): array;
```

Sorts an array


## Mvc\View\Engine\Volt\Compiler

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Compiler.zep){ .src-btn }

This class reads and compiles Volt templates into PHP plain code

```php
$compiler = new \Phalcon\Mvc\View\Engine\Volt\Compiler();

$compiler->compile("views/partials/header.volt");

require $compiler->getCompiledTemplatePath();
```

<div class="api-tree" markdown>

- **`Phalcon\Mvc\View\Engine\Volt\Compiler`** — implements [`Phalcon\Di\InjectionAwareInterface`](phalcon_di.md#diinjectionawareinterface)

</div>

__Uses__ `Closure` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Mvc\ViewBaseInterface` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\CannotOpenCompiledFile` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\CorruptedStatement` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\CorruptedStatementWithData` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidCompilationPrefix` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidExtension` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidIntermediateRepresentation` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidOptionType` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidPathClosureReturn` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidPathType` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidStatement` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidUserFilterDefinition` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidUserFunctionDefinition` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\MacroAlreadyDefined` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplateFileNotFound` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplateFileNotOpenable` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplatePathCollision` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltExpression` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilter` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilterType` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltStatement` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\VoltDirectoryNotWritable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltcompiler-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( ViewBaseInterface $view = null )</code>
<span class="desc">Phalcon\Mvc\View\Engine\Volt\Compiler</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-addextension">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">addExtension( mixed $extension )</code>
<span class="desc">Registers a Volt&#039;s extension</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-addfilter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">addFilter(
    string $name,
    mixed $definition
)</code>
<span class="desc">Register a new filter in the compiler</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-addfunction">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">addFunction(
    string $name,
    mixed $definition
)</code>
<span class="desc">Register a new function in the compiler</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-attributereader">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">attributeReader( array $expr )</code>
<span class="desc">Resolves attribute reading</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compile">
<code class="vis vis-public">public</code>
<code class="sig">compile(
    string $templatePath,
    bool $extendsMode = false
)</code>
<span class="desc">Compiles a template into a file applying the compiler options</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compileautoescape">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileAutoEscape(
    array $statement,
    bool $extendsMode
)</code>
<span class="desc">Compiles a &quot;autoescape&quot; statement returning PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compilecall">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileCall(
    array $statement,
    bool $extendsMode
)</code>
<span class="desc">Compiles calls to macros</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compilecase">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileCase(
    array $statement,
    bool $caseClause = true
)</code>
<span class="desc">Compiles a &quot;case&quot;/&quot;default&quot; clause returning PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compiledo">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileDo( array $statement )</code>
<span class="desc">Compiles a &quot;do&quot; statement returning PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compileecho">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileEcho( array $statement )</code>
<span class="desc">Compiles a {% raw %}`{{` `}}`{% endraw %} statement returning PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compileelseif">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileElseIf( array $statement )</code>
<span class="desc">Compiles a &quot;elseif&quot; statement returning PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compilefile">
<code class="vis vis-public">public</code>
<code class="sig">compileFile(
    string $path,
    string $compiledPath,
    bool $extendsMode = false
)</code>
<span class="desc">Compiles a template into a file forcing the destination path</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compileforelse">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileForElse()</code>
<span class="desc">Generates a &#039;forelse&#039; PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compileforeach">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileForeach(
    array $statement,
    bool $extendsMode = false
)</code>
<span class="desc">Compiles a &quot;foreach&quot; intermediate code representation into plain PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compileif">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileIf(
    array $statement,
    bool $extendsMode = false
)</code>
<span class="desc">Compiles a &#039;if&#039; statement returning PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compileinclude">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileInclude( array $statement )</code>
<span class="desc">Compiles a &#039;include&#039; statement returning PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compilemacro">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileMacro(
    array $statement,
    bool $extendsMode
)</code>
<span class="desc">Compiles macros</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compilereturn">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileReturn( array $statement )</code>
<span class="desc">Compiles a &quot;return&quot; statement returning PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compileset">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileSet( array $statement )</code>
<span class="desc">Compiles a &quot;set&quot; statement returning PHP code. The method accepts an</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compilestring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileString(
    string $viewCode,
    bool $extendsMode = false
)</code>
<span class="desc">Compiles a template into a string</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compileswitch">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">compileSwitch(
    array $statement,
    bool $extendsMode = false
)</code>
<span class="desc">Compiles a &#039;switch&#039; statement returning PHP code</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-expression">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">expression(
    array $expr,
    bool $doubleQuotes = false
)</code>
<span class="desc">Resolves an expression node in an AST volt tree</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-fireextensionevent">
<code class="vis vis-public">public</code>
<code class="sig">fireExtensionEvent(
    string $name,
    array $arguments = []
)</code>
<span class="desc">Fires an event to registered extensions</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-functioncall">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">functionCall(
    array $expr,
    bool $doubleQuotes = false
)</code>
<span class="desc">Resolves function intermediate code into PHP function calls</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-getcompiledtemplatepath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getCompiledTemplatePath()</code>
<span class="desc">Returns the path to the last compiled template</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Returns the internal dependency injector</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-getextensions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getExtensions()</code>
<span class="desc">Returns the list of extensions registered in Volt</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-getfilters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getFilters()</code>
<span class="desc">Register the user registered filters</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-getfunctions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getFunctions()</code>
<span class="desc">Register the user registered functions</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-getoption">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getOption( string $option )</code>
<span class="desc">Returns a compiler&#039;s option</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getOptions()</code>
<span class="desc">Returns the compiler options</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-gettemplatepath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getTemplatePath()</code>
<span class="desc">Returns the path that is currently being compiled</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-getuniqueprefix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getUniquePrefix()</code>
<span class="desc">Return a unique prefix to be used as prefix for compiled variables and</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-parse">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">parse( string $viewCode )</code>
<span class="desc">Parses a Volt template returning its intermediate representation</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-resolvetest">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">resolveTest(
    array $test,
    string $left
)</code>
<span class="desc">Resolves filter intermediate code into a valid PHP expression</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the dependency injector</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-setoption">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setOption(
    string $option,
    mixed $value
)</code>
<span class="desc">Sets a single compiler option</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setOptions( array $options )</code>
<span class="desc">Sets the compiler options</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-setuniqueprefix">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setUniquePrefix( string $prefix )</code>
<span class="desc">Set a unique prefix to be used as prefix for compiled variables</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-compilesource">
<code class="vis vis-protected">protected</code>
<code class="ret">array|string</code>
<code class="sig">compileSource(
    string $viewCode,
    bool $extendsMode = false
)</code>
<span class="desc">Compiles a Volt source code returning a PHP plain version</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-getfinalpath">
<code class="vis vis-protected">protected</code>
<code class="sig">getFinalPath( string $path )</code>
<span class="desc">Gets the final path with VIEW</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-resolvefilter">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">resolveFilter(
    array $filter,
    string $left
)</code>
<span class="desc">Resolves filter intermediate code into PHP function calls</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-statementlist">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">statementList(
    array $statements,
    bool $extendsMode = false
)</code>
<span class="desc">Traverses a statement list compiling each of its nodes</span>
</a>
<a class="api-item" href="#mvcviewenginevoltcompiler-statementlistorextends">
<code class="vis vis-protected">protected</code>
<code class="sig">statementListOrExtends( mixed $statements )</code>
<span class="desc">Compiles a block of statements</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$autoescape = false` `bool`

-   `protected`{ .vis-protected } `$blockLevel = 0` `int`

-   `protected`{ .vis-protected } `$blocks` `array|null`

    TODO: Make array only?

-   `protected`{ .vis-protected } `$compiledTemplatePath` `string|null`

-   `protected`{ .vis-protected } `$container = null` `DiInterface|null`

-   `protected`{ .vis-protected } `$currentBlock = null` `string|null`

-   `protected`{ .vis-protected } `$currentPath = null` `string|null`

-   `protected`{ .vis-protected } `$exprLevel = 0` `int`

-   `protected`{ .vis-protected } `$extended = false` `bool`

-   `protected`{ .vis-protected } `$extendedBlocks` `array|bool`

    TODO: Make it always array

-   `protected`{ .vis-protected } `$extensions = []` `array`

-   `protected`{ .vis-protected } `$filters = []` `array`

-   `protected`{ .vis-protected } `$forElsePointers = []` `array`

-   `protected`{ .vis-protected } `$foreachLevel = 0` `int`

-   `protected`{ .vis-protected } `$functions = []` `array`

-   `protected`{ .vis-protected } `$level = 0` `int`

-   `protected`{ .vis-protected } `$loopPointers = []` `array`

-   `protected`{ .vis-protected } `$macros = []` `array`

-   `protected`{ .vis-protected } `$options = []` `array`

-   `protected`{ .vis-protected } `$prefix = ""` `string`

-   `protected`{ .vis-protected } `$view` `ViewBaseInterface|null`

</div>

### Methods

<div class="api-group">Public · 40</div>

#### `__construct()` { #mvcviewenginevoltcompiler-__construct }

```php
public function __construct( ViewBaseInterface $view = null );
```

Phalcon\Mvc\View\Engine\Volt\Compiler

#### `addExtension()` { #mvcviewenginevoltcompiler-addextension }

```php
public function addExtension( mixed $extension ): static;
```

Registers a Volt's extension

#### `addFilter()` { #mvcviewenginevoltcompiler-addfilter }

```php
public function addFilter(
    string $name,
    mixed $definition
): static;
```

Register a new filter in the compiler

#### `addFunction()` { #mvcviewenginevoltcompiler-addfunction }

```php
public function addFunction(
    string $name,
    mixed $definition
): static;
```

Register a new function in the compiler

#### `attributeReader()` { #mvcviewenginevoltcompiler-attributereader }

```php
public function attributeReader( array $expr ): string;
```

Resolves attribute reading

#### `compile()` { #mvcviewenginevoltcompiler-compile }

```php
public function compile(
    string $templatePath,
    bool $extendsMode = false
);
```

Compiles a template into a file applying the compiler options
This method does not return the compiled path if the template was not compiled

```php
$compiler->compile("views/layouts/main.volt");

require $compiler->getCompiledTemplatePath();
```

#### `compileAutoEscape()` { #mvcviewenginevoltcompiler-compileautoescape }

```php
public function compileAutoEscape(
    array $statement,
    bool $extendsMode
): string;
```

Compiles a "autoescape" statement returning PHP code

#### `compileCall()` { #mvcviewenginevoltcompiler-compilecall }

```php
public function compileCall(
    array $statement,
    bool $extendsMode
): string;
```

Compiles calls to macros

#### `compileCase()` { #mvcviewenginevoltcompiler-compilecase }

```php
public function compileCase(
    array $statement,
    bool $caseClause = true
): string;
```

Compiles a "case"/"default" clause returning PHP code

#### `compileDo()` { #mvcviewenginevoltcompiler-compiledo }

```php
public function compileDo( array $statement ): string;
```

Compiles a "do" statement returning PHP code

#### `compileEcho()` { #mvcviewenginevoltcompiler-compileecho }

```php
public function compileEcho( array $statement ): string;
```

Compiles a {% raw %}`{{` `}}`{% endraw %} statement returning PHP code

#### `compileElseIf()` { #mvcviewenginevoltcompiler-compileelseif }

```php
public function compileElseIf( array $statement ): string;
```

Compiles a "elseif" statement returning PHP code

#### `compileFile()` { #mvcviewenginevoltcompiler-compilefile }

```php
public function compileFile(
    string $path,
    string $compiledPath,
    bool $extendsMode = false
);
```

Compiles a template into a file forcing the destination path

```php
$compiler->compileFile(
    "views/layouts/main.volt",
    "views/layouts/main.volt.php"
);
```

#### `compileForElse()` { #mvcviewenginevoltcompiler-compileforelse }

```php
public function compileForElse(): string;
```

Generates a 'forelse' PHP code

#### `compileForeach()` { #mvcviewenginevoltcompiler-compileforeach }

```php
public function compileForeach(
    array $statement,
    bool $extendsMode = false
): string;
```

Compiles a "foreach" intermediate code representation into plain PHP code

#### `compileIf()` { #mvcviewenginevoltcompiler-compileif }

```php
public function compileIf(
    array $statement,
    bool $extendsMode = false
): string;
```

Compiles a 'if' statement returning PHP code

#### `compileInclude()` { #mvcviewenginevoltcompiler-compileinclude }

```php
public function compileInclude( array $statement ): string;
```

Compiles a 'include' statement returning PHP code

#### `compileMacro()` { #mvcviewenginevoltcompiler-compilemacro }

```php
public function compileMacro(
    array $statement,
    bool $extendsMode
): string;
```

Compiles macros

#### `compileReturn()` { #mvcviewenginevoltcompiler-compilereturn }

```php
public function compileReturn( array $statement ): string;
```

Compiles a "return" statement returning PHP code

#### `compileSet()` { #mvcviewenginevoltcompiler-compileset }

```php
public function compileSet( array $statement ): string;
```

Compiles a "set" statement returning PHP code. The method accepts an
array produced by the Volt parser and creates the `set` statement in PHP.
This method is not particularly useful in development, since it requires
advanced knowledge of the Volt parser.

```php
<?php

use Phalcon\Mvc\View\Engine\Volt\Compiler;

$compiler = new Compiler();

// {% set a = ['first': 1] %}

$source = [
    "type" => 306,
    "assignments" => [
        [
            "variable" => [
                "type" => 265,
                "value" => "a",
                "file" => "eval code",
                "line" => 1
            ],
            "op" => 61,
            "expr" => [
                "type" => 360,
                "left" => [
                    [
                        "expr" => [
                            "type" => 258,
                            "value" => "1",
                            "file" => "eval code",
                            "line" => 1
                        ],
                        "name" => "first",
                        "file" => "eval code",
                        "line" => 1
                    ]
                ],
                "file" => "eval code",
                "line" => 1
            ],
            "file" => "eval code",
            "line" => 1
        ]
    ]
];

echo $compiler->compileSet($source);
// <?php $a = ['first' => 1]; ?>";
```

#### `compileString()` { #mvcviewenginevoltcompiler-compilestring }

```php
public function compileString(
    string $viewCode,
    bool $extendsMode = false
): string;
```

Compiles a template into a string

```php
echo $compiler->compileString({% raw %}'{{ "hello world" }}'{% endraw %});
```

#### `compileSwitch()` { #mvcviewenginevoltcompiler-compileswitch }

```php
public function compileSwitch(
    array $statement,
    bool $extendsMode = false
): string;
```

Compiles a 'switch' statement returning PHP code

#### `expression()` { #mvcviewenginevoltcompiler-expression }

```php
final public function expression(
    array $expr,
    bool $doubleQuotes = false
): string;
```

Resolves an expression node in an AST volt tree

#### `fireExtensionEvent()` { #mvcviewenginevoltcompiler-fireextensionevent }

```php
final public function fireExtensionEvent(
    string $name,
    array $arguments = []
);
```

Fires an event to registered extensions

#### `functionCall()` { #mvcviewenginevoltcompiler-functioncall }

```php
public function functionCall(
    array $expr,
    bool $doubleQuotes = false
): string;
```

Resolves function intermediate code into PHP function calls

#### `getCompiledTemplatePath()` { #mvcviewenginevoltcompiler-getcompiledtemplatepath }

```php
public function getCompiledTemplatePath(): string;
```

Returns the path to the last compiled template

#### `getDI()` { #mvcviewenginevoltcompiler-getdi }

```php
public function getDI(): DiInterface;
```

Returns the internal dependency injector

#### `getExtensions()` { #mvcviewenginevoltcompiler-getextensions }

```php
public function getExtensions(): array;
```

Returns the list of extensions registered in Volt

#### `getFilters()` { #mvcviewenginevoltcompiler-getfilters }

```php
public function getFilters(): array;
```

Register the user registered filters

#### `getFunctions()` { #mvcviewenginevoltcompiler-getfunctions }

```php
public function getFunctions(): array;
```

Register the user registered functions

#### `getOption()` { #mvcviewenginevoltcompiler-getoption }

```php
public function getOption( string $option ): string|null;
```

Returns a compiler's option

#### `getOptions()` { #mvcviewenginevoltcompiler-getoptions }

```php
public function getOptions(): array;
```

Returns the compiler options

#### `getTemplatePath()` { #mvcviewenginevoltcompiler-gettemplatepath }

```php
public function getTemplatePath(): string;
```

Returns the path that is currently being compiled

#### `getUniquePrefix()` { #mvcviewenginevoltcompiler-getuniqueprefix }

```php
public function getUniquePrefix(): string;
```

Return a unique prefix to be used as prefix for compiled variables and
contexts

#### `parse()` { #mvcviewenginevoltcompiler-parse }

```php
public function parse( string $viewCode ): array;
```

Parses a Volt template returning its intermediate representation

```php
print_r(
    $compiler->parse("{% raw %}{{ 3 + 2 }}{% endraw %}")
);
```

#### `resolveTest()` { #mvcviewenginevoltcompiler-resolvetest }

```php
public function resolveTest(
    array $test,
    string $left
): string;
```

Resolves filter intermediate code into a valid PHP expression

#### `setDI()` { #mvcviewenginevoltcompiler-setdi }

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector

#### `setOption()` { #mvcviewenginevoltcompiler-setoption }

```php
public function setOption(
    string $option,
    mixed $value
): static;
```

Sets a single compiler option

#### `setOptions()` { #mvcviewenginevoltcompiler-setoptions }

```php
public function setOptions( array $options ): static;
```

Sets the compiler options

#### `setUniquePrefix()` { #mvcviewenginevoltcompiler-setuniqueprefix }

```php
public function setUniquePrefix( string $prefix ): static;
```

Set a unique prefix to be used as prefix for compiled variables

<div class="api-group">Protected · 5</div>

#### `compileSource()` { #mvcviewenginevoltcompiler-compilesource }

```php
protected function compileSource(
    string $viewCode,
    bool $extendsMode = false
): array|string;
```

Compiles a Volt source code returning a PHP plain version

#### `getFinalPath()` { #mvcviewenginevoltcompiler-getfinalpath }

```php
protected function getFinalPath( string $path );
```

Gets the final path with VIEW

#### `resolveFilter()` { #mvcviewenginevoltcompiler-resolvefilter }

```php
final protected function resolveFilter(
    array $filter,
    string $left
): string;
```

Resolves filter intermediate code into PHP function calls

#### `statementList()` { #mvcviewenginevoltcompiler-statementlist }

```php
final protected function statementList(
    array $statements,
    bool $extendsMode = false
): string;
```

Traverses a statement list compiling each of its nodes

#### `statementListOrExtends()` { #mvcviewenginevoltcompiler-statementlistorextends }

```php
final protected function statementListOrExtends( mixed $statements );
```

Compiles a block of statements


## Mvc\View\Engine\Volt\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exception.zep){ .src-btn }

Class for exceptions thrown by Phalcon\Mvc\View

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - **`Phalcon\Mvc\View\Engine\Volt\Exception`**
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\CannotOpenCompiledFile`](#mvcviewenginevoltexceptionscannotopencompiledfile)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\CorruptedStatement`](#mvcviewenginevoltexceptionscorruptedstatement)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\CorruptedStatementWithData`](#mvcviewenginevoltexceptionscorruptedstatementwithdata)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidCompilationPrefix`](#mvcviewenginevoltexceptionsinvalidcompilationprefix)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidExtension`](#mvcviewenginevoltexceptionsinvalidextension)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidHaystack`](#mvcviewenginevoltexceptionsinvalidhaystack)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidIntermediateRepresentation`](#mvcviewenginevoltexceptionsinvalidintermediaterepresentation)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidOptionType`](#mvcviewenginevoltexceptionsinvalidoptiontype)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidPathClosureReturn`](#mvcviewenginevoltexceptionsinvalidpathclosurereturn)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidPathType`](#mvcviewenginevoltexceptionsinvalidpathtype)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidStatement`](#mvcviewenginevoltexceptionsinvalidstatement)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidUserFilterDefinition`](#mvcviewenginevoltexceptionsinvaliduserfilterdefinition)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidUserFunctionDefinition`](#mvcviewenginevoltexceptionsinvaliduserfunctiondefinition)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\MacroAlreadyDefined`](#mvcviewenginevoltexceptionsmacroalreadydefined)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\MacroNotFound`](#mvcviewenginevoltexceptionsmacronotfound)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\MbstringRequired`](#mvcviewenginevoltexceptionsmbstringrequired)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplateFileNotFound`](#mvcviewenginevoltexceptionstemplatefilenotfound)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplateFileNotOpenable`](#mvcviewenginevoltexceptionstemplatefilenotopenable)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplatePathCollision`](#mvcviewenginevoltexceptionstemplatepathcollision)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltExpression`](#mvcviewenginevoltexceptionsunknownvoltexpression)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilter`](#mvcviewenginevoltexceptionsunknownvoltfilter)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilterType`](#mvcviewenginevoltexceptionsunknownvoltfiltertype)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltStatement`](#mvcviewenginevoltexceptionsunknownvoltstatement)
            - [`Phalcon\Mvc\View\Engine\Volt\Exceptions\VoltDirectoryNotWritable`](#mvcviewenginevoltexceptionsvoltdirectorynotwritable)

</div>

__Uses__ `Phalcon\Mvc\View\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $message = &quot;&quot;,
    array $statement = [],
    int $code = 0,
    \Exception $previous = null
)</code>
</a>
<a class="api-item" href="#mvcviewenginevoltexception-getstatement">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getStatement()</code>
<span class="desc">Gets currently parsed statement (if any).</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$statement = []` `array`

</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #mvcviewenginevoltexception-__construct }

```php
public function __construct(
    string $message = "",
    array $statement = [],
    int $code = 0,
    \Exception $previous = null
);
```

#### `getStatement()` { #mvcviewenginevoltexception-getstatement }

```php
public function getStatement(): array;
```

Gets currently parsed statement (if any).


## Mvc\View\Engine\Volt\Exceptions\CannotOpenCompiledFile

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/CannotOpenCompiledFile.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\CannotOpenCompiledFile`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionscannotopencompiledfile-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $path )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionscannotopencompiledfile-__construct }

```php
public function __construct( string $path );
```


## Mvc\View\Engine\Volt\Exceptions\CorruptedStatement

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/CorruptedStatement.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\CorruptedStatement`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionscorruptedstatement-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionscorruptedstatement-__construct }

```php
public function __construct();
```


## Mvc\View\Engine\Volt\Exceptions\CorruptedStatementWithData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/CorruptedStatementWithData.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\CorruptedStatementWithData`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionscorruptedstatementwithdata-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $statement )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionscorruptedstatementwithdata-__construct }

```php
public function __construct( array $statement );
```


## Mvc\View\Engine\Volt\Exceptions\InvalidCompilationPrefix

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/InvalidCompilationPrefix.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidCompilationPrefix`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsinvalidcompilationprefix-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsinvalidcompilationprefix-__construct }

```php
public function __construct();
```


## Mvc\View\Engine\Volt\Exceptions\InvalidExtension

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/InvalidExtension.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidExtension`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsinvalidextension-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsinvalidextension-__construct }

```php
public function __construct();
```


## Mvc\View\Engine\Volt\Exceptions\InvalidHaystack

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/InvalidHaystack.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidHaystack`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsinvalidhaystack-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsinvalidhaystack-__construct }

```php
public function __construct();
```


## Mvc\View\Engine\Volt\Exceptions\InvalidIntermediateRepresentation

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/InvalidIntermediateRepresentation.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidIntermediateRepresentation`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsinvalidintermediaterepresentation-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsinvalidintermediaterepresentation-__construct }

```php
public function __construct();
```


## Mvc\View\Engine\Volt\Exceptions\InvalidOptionType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/InvalidOptionType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidOptionType`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsinvalidoptiontype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $option,
    string $type
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsinvalidoptiontype-__construct }

```php
public function __construct(
    string $option,
    string $type
);
```


## Mvc\View\Engine\Volt\Exceptions\InvalidPathClosureReturn

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/InvalidPathClosureReturn.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidPathClosureReturn`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsinvalidpathclosurereturn-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsinvalidpathclosurereturn-__construct }

```php
public function __construct();
```


## Mvc\View\Engine\Volt\Exceptions\InvalidPathType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/InvalidPathType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidPathType`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsinvalidpathtype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsinvalidpathtype-__construct }

```php
public function __construct();
```


## Mvc\View\Engine\Volt\Exceptions\InvalidStatement

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/InvalidStatement.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidStatement`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsinvalidstatement-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $file,
    int $line,
    array $statement
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsinvalidstatement-__construct }

```php
public function __construct(
    string $file,
    int $line,
    array $statement
);
```


## Mvc\View\Engine\Volt\Exceptions\InvalidUserFilterDefinition

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/InvalidUserFilterDefinition.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidUserFilterDefinition`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsinvaliduserfilterdefinition-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $file,
    int $line
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsinvaliduserfilterdefinition-__construct }

```php
public function __construct(
    string $name,
    string $file,
    int $line
);
```


## Mvc\View\Engine\Volt\Exceptions\InvalidUserFunctionDefinition

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/InvalidUserFunctionDefinition.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidUserFunctionDefinition`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsinvaliduserfunctiondefinition-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $file,
    int $line
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsinvaliduserfunctiondefinition-__construct }

```php
public function __construct(
    string $name,
    string $file,
    int $line
);
```


## Mvc\View\Engine\Volt\Exceptions\MacroAlreadyDefined

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/MacroAlreadyDefined.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\MacroAlreadyDefined`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsmacroalreadydefined-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsmacroalreadydefined-__construct }

```php
public function __construct( string $name );
```


## Mvc\View\Engine\Volt\Exceptions\MacroNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/MacroNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\MacroNotFound`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsmacronotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsmacronotfound-__construct }

```php
public function __construct( string $name );
```


## Mvc\View\Engine\Volt\Exceptions\MbstringRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/MbstringRequired.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\MbstringRequired`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsmbstringrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsmbstringrequired-__construct }

```php
public function __construct();
```


## Mvc\View\Engine\Volt\Exceptions\TemplateFileNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/TemplateFileNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplateFileNotFound`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionstemplatefilenotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $path )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionstemplatefilenotfound-__construct }

```php
public function __construct( string $path );
```


## Mvc\View\Engine\Volt\Exceptions\TemplateFileNotOpenable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/TemplateFileNotOpenable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplateFileNotOpenable`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionstemplatefilenotopenable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $path )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionstemplatefilenotopenable-__construct }

```php
public function __construct( string $path );
```


## Mvc\View\Engine\Volt\Exceptions\TemplatePathCollision

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/TemplatePathCollision.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplatePathCollision`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionstemplatepathcollision-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionstemplatepathcollision-__construct }

```php
public function __construct();
```


## Mvc\View\Engine\Volt\Exceptions\UnknownVoltExpression

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/UnknownVoltExpression.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltExpression`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsunknownvoltexpression-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    int $type,
    string $file,
    int $line
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsunknownvoltexpression-__construct }

```php
public function __construct(
    int $type,
    string $file,
    int $line
);
```


## Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/UnknownVoltFilter.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilter`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsunknownvoltfilter-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $name,
    string $file,
    int $line
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsunknownvoltfilter-__construct }

```php
public function __construct(
    string $name,
    string $file,
    int $line
);
```


## Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilterType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/UnknownVoltFilterType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilterType`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsunknownvoltfiltertype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $file,
    int $line
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsunknownvoltfiltertype-__construct }

```php
public function __construct(
    string $file,
    int $line
);
```


## Mvc\View\Engine\Volt\Exceptions\UnknownVoltStatement

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/UnknownVoltStatement.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltStatement`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsunknownvoltstatement-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    int $type,
    string $file,
    int $line
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsunknownvoltstatement-__construct }

```php
public function __construct(
    int $type,
    string $file,
    int $line
);
```


## Mvc\View\Engine\Volt\Exceptions\VoltDirectoryNotWritable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Engine/Volt/Exceptions/VoltDirectoryNotWritable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
            - **`Phalcon\Mvc\View\Engine\Volt\Exceptions\VoltDirectoryNotWritable`**

</div>

__Uses__ `Phalcon\Mvc\View\Engine\Volt\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewenginevoltexceptionsvoltdirectorynotwritable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewenginevoltexceptionsvoltdirectorynotwritable-__construct }

```php
public function __construct();
```


## Mvc\View\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Exception.zep){ .src-btn }

Phalcon\Mvc\View\Exception

Class for exceptions thrown by Phalcon\Mvc\View

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Mvc\View\Exception`**
        - [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
        - [`Phalcon\Mvc\View\Exceptions\InvalidEngineRegistration`](#mvcviewexceptionsinvalidengineregistration)
        - [`Phalcon\Mvc\View\Exceptions\InvalidViewsDirType`](#mvcviewexceptionsinvalidviewsdirtype)
        - [`Phalcon\Mvc\View\Exceptions\SimpleViewNotFound`](#mvcviewexceptionssimpleviewnotfound)
        - [`Phalcon\Mvc\View\Exceptions\SimpleViewServicesUnavailable`](#mvcviewexceptionssimpleviewservicesunavailable)
        - [`Phalcon\Mvc\View\Exceptions\ViewNotFound`](#mvcviewexceptionsviewnotfound)
        - [`Phalcon\Mvc\View\Exceptions\ViewServicesUnavailable`](#mvcviewexceptionsviewservicesunavailable)
        - [`Phalcon\Mvc\View\Exceptions\ViewsDirItemMustBeString`](#mvcviewexceptionsviewsdiritemmustbestring)

</div>


## Mvc\View\Exceptions\InvalidEngineRegistration

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Exceptions/InvalidEngineRegistration.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - **`Phalcon\Mvc\View\Exceptions\InvalidEngineRegistration`**

</div>

__Uses__ `Phalcon\Mvc\View\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewexceptionsinvalidengineregistration-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $extension )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewexceptionsinvalidengineregistration-__construct }

```php
public function __construct( string $extension );
```


## Mvc\View\Exceptions\InvalidViewsDirType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Exceptions/InvalidViewsDirType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - **`Phalcon\Mvc\View\Exceptions\InvalidViewsDirType`**

</div>

__Uses__ `Phalcon\Mvc\View\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewexceptionsinvalidviewsdirtype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewexceptionsinvalidviewsdirtype-__construct }

```php
public function __construct();
```


## Mvc\View\Exceptions\SimpleViewNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Exceptions/SimpleViewNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - **`Phalcon\Mvc\View\Exceptions\SimpleViewNotFound`**

</div>

__Uses__ `Phalcon\Mvc\View\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewexceptionssimpleviewnotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $viewsDirPath )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewexceptionssimpleviewnotfound-__construct }

```php
public function __construct( string $viewsDirPath );
```


## Mvc\View\Exceptions\SimpleViewServicesUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Exceptions/SimpleViewServicesUnavailable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - **`Phalcon\Mvc\View\Exceptions\SimpleViewServicesUnavailable`**

</div>

__Uses__ `Phalcon\Mvc\View\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewexceptionssimpleviewservicesunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewexceptionssimpleviewservicesunavailable-__construct }

```php
public function __construct();
```


## Mvc\View\Exceptions\ViewNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Exceptions/ViewNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - **`Phalcon\Mvc\View\Exceptions\ViewNotFound`**

</div>

__Uses__ `Phalcon\Mvc\View\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewexceptionsviewnotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $viewPath )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewexceptionsviewnotfound-__construct }

```php
public function __construct( string $viewPath );
```


## Mvc\View\Exceptions\ViewServicesUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Exceptions/ViewServicesUnavailable.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - **`Phalcon\Mvc\View\Exceptions\ViewServicesUnavailable`**

</div>

__Uses__ `Phalcon\Mvc\View\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewexceptionsviewservicesunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewexceptionsviewservicesunavailable-__construct }

```php
public function __construct();
```


## Mvc\View\Exceptions\ViewsDirItemMustBeString

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Exceptions/ViewsDirItemMustBeString.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
        - **`Phalcon\Mvc\View\Exceptions\ViewsDirItemMustBeString`**

</div>

__Uses__ `Phalcon\Mvc\View\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewexceptionsviewsdiritemmustbestring-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #mvcviewexceptionsviewsdiritemmustbestring-__construct }

```php
public function __construct();
```


## Mvc\View\Simple

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Mvc/View/Simple.zep){ .src-btn }

This component allows to render views without hierarchical levels

```php
use Phalcon\Mvc\View\Simple as View;

$view = new View();

// Render a view
echo $view->render(
    "templates/my-view",
    [
        "some" => $param,
    ]
);

// Or with filename with extension
echo $view->render(
    "templates/my-view.volt",
    [
        "parameter" => $here,
    ]
);
```

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - **`Phalcon\Mvc\View\Simple`** — implements [`Phalcon\Mvc\ViewBaseInterface`](#mvcviewbaseinterface), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface)

</div>

__Uses__ `Closure` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Mvc\ViewBaseInterface` · `Phalcon\Mvc\View\Engine\EngineInterface` · `Phalcon\Mvc\View\Engine\Php` · `Phalcon\Mvc\View\Exceptions\InvalidEngineRegistration` · `Phalcon\Mvc\View\Exceptions\SimpleViewNotFound` · `Phalcon\Mvc\View\Exceptions\SimpleViewServicesUnavailable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#mvcviewsimple-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $options = [] )</code>
<span class="desc">Phalcon\Mvc\View\Simple constructor</span>
</a>
<a class="api-item" href="#mvcviewsimple-__get">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">__get( string $key )</code>
<span class="desc">Magic method to retrieve a variable passed to the view</span>
</a>
<a class="api-item" href="#mvcviewsimple-__set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">__set(
    string $key,
    mixed $value
)</code>
<span class="desc">Magic method to pass variables to the views</span>
</a>
<a class="api-item" href="#mvcviewsimple-getactiverenderpath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getActiveRenderPath()</code>
<span class="desc">Returns the path of the view that is currently rendered</span>
</a>
<a class="api-item" href="#mvcviewsimple-getcontent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getContent()</code>
<span class="desc">Returns output from another view stage</span>
</a>
<a class="api-item" href="#mvcviewsimple-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig">getEventsManager()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#mvcviewsimple-getparamstoview">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getParamsToView()</code>
<span class="desc">Returns parameters to views</span>
</a>
<a class="api-item" href="#mvcviewsimple-getregisteredengines">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getRegisteredEngines()</code>
</a>
<a class="api-item" href="#mvcviewsimple-getvar">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">getVar( string $key )</code>
<span class="desc">Returns a parameter previously set in the view</span>
</a>
<a class="api-item" href="#mvcviewsimple-getviewsdir">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getViewsDir()</code>
<span class="desc">Gets views directory</span>
</a>
<a class="api-item" href="#mvcviewsimple-partial">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">partial(
    string $partialPath,
    mixed $params = null
)</code>
<span class="desc">Renders a partial view</span>
</a>
<a class="api-item" href="#mvcviewsimple-registerengines">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">registerEngines( array $engines )</code>
<span class="desc">Register templating engines</span>
</a>
<a class="api-item" href="#mvcviewsimple-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">render(
    string $path,
    array $params = []
)</code>
<span class="desc">Renders a view</span>
</a>
<a class="api-item" href="#mvcviewsimple-setcontent">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setContent( string $content )</code>
<span class="desc">Externally sets the view content</span>
</a>
<a class="api-item" href="#mvcviewsimple-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setEventsManager( ManagerInterface $eventsManager )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#mvcviewsimple-setparamtoview">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setParamToView(
    string $key,
    mixed $value
)</code>
<span class="desc">Adds parameters to views (alias of setVar)</span>
</a>
<a class="api-item" href="#mvcviewsimple-setvar">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setVar(
    string $key,
    mixed $value
)</code>
<span class="desc">Set a single view parameter</span>
</a>
<a class="api-item" href="#mvcviewsimple-setvars">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setVars(
    array $params,
    bool $merge = true
)</code>
<span class="desc">Set all the render params</span>
</a>
<a class="api-item" href="#mvcviewsimple-setviewsdir">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setViewsDir( string $viewsDir )</code>
<span class="desc">Sets views directory</span>
</a>
<a class="api-item" href="#mvcviewsimple-internalrender">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">internalRender(
    string $path,
    mixed $params
)</code>
<span class="desc">Tries to render the view with every engine registered in the component</span>
</a>
<a class="api-item" href="#mvcviewsimple-loadtemplateengines">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">loadTemplateEngines()</code>
<span class="desc">Loads registered template engines, if none are registered it will use</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$activeRenderPath` `string`

-   `protected`{ .vis-protected } `$content` `string`

-   `protected`{ .vis-protected } `$engines = false` `EngineInterface[]|false`

-   `protected`{ .vis-protected } `$eventsManager` `ManagerInterface|null`

-   `protected`{ .vis-protected } `$options = []` `array`

-   `protected`{ .vis-protected } `$registeredEngines = []` `array`

-   `protected`{ .vis-protected } `$viewParams = []` `array`

-   `protected`{ .vis-protected } `$viewsDir` `string`

</div>

### Methods

<div class="api-group">Public · 19</div>

#### `__construct()` { #mvcviewsimple-__construct }

```php
public function __construct( array $options = [] );
```

Phalcon\Mvc\View\Simple constructor

#### `__get()` { #mvcviewsimple-__get }

```php
public function __get( string $key ): mixed|null;
```

Magic method to retrieve a variable passed to the view

```php
echo $this->view->products;
```

#### `__set()` { #mvcviewsimple-__set }

```php
public function __set(
    string $key,
    mixed $value
): void;
```

Magic method to pass variables to the views

```php
$this->view->products = $products;
```

#### `getActiveRenderPath()` { #mvcviewsimple-getactiverenderpath }

```php
public function getActiveRenderPath(): string;
```

Returns the path of the view that is currently rendered

#### `getContent()` { #mvcviewsimple-getcontent }

```php
public function getContent(): string;
```

Returns output from another view stage

#### `getEventsManager()` { #mvcviewsimple-geteventsmanager }

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

#### `getParamsToView()` { #mvcviewsimple-getparamstoview }

```php
public function getParamsToView(): array;
```

Returns parameters to views

#### `getRegisteredEngines()` { #mvcviewsimple-getregisteredengines }

```php
public function getRegisteredEngines(): array;
```

#### `getVar()` { #mvcviewsimple-getvar }

```php
public function getVar( string $key ): mixed|null;
```

Returns a parameter previously set in the view

#### `getViewsDir()` { #mvcviewsimple-getviewsdir }

```php
public function getViewsDir(): string;
```

Gets views directory

#### `partial()` { #mvcviewsimple-partial }

```php
public function partial(
    string $partialPath,
    mixed $params = null
): void;
```

Renders a partial view

```php
// Show a partial inside another view
$this->partial("shared/footer");
```

```php
// Show a partial inside another view with parameters
$this->partial(
    "shared/footer",
    [
        "content" => $html,
    ]
);
```

#### `registerEngines()` { #mvcviewsimple-registerengines }

```php
public function registerEngines( array $engines ): void;
```

Register templating engines

```php
$this->view->registerEngines(
    [
        ".phtml" => \Phalcon\Mvc\View\Engine\Php::class,
        ".volt"  => \Phalcon\Mvc\View\Engine\Volt::class,
        ".mhtml" => \MyCustomEngine::class,
    ]
);
```

#### `render()` { #mvcviewsimple-render }

```php
public function render(
    string $path,
    array $params = []
): string;
```

Renders a view

#### `setContent()` { #mvcviewsimple-setcontent }

```php
public function setContent( string $content ): static;
```

Externally sets the view content

```php
$this->view->setContent("<h1>hello</h1>");
```

#### `setEventsManager()` { #mvcviewsimple-seteventsmanager }

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

#### `setParamToView()` { #mvcviewsimple-setparamtoview }

```php
public function setParamToView(
    string $key,
    mixed $value
): static;
```

Adds parameters to views (alias of setVar)

```php
$this->view->setParamToView("products", $products);
```

#### `setVar()` { #mvcviewsimple-setvar }

```php
public function setVar(
    string $key,
    mixed $value
): static;
```

Set a single view parameter

```php
$this->view->setVar("products", $products);
```

#### `setVars()` { #mvcviewsimple-setvars }

```php
public function setVars(
    array $params,
    bool $merge = true
): static;
```

Set all the render params

```php
$this->view->setVars(
    [
        "products" => $products,
    ]
);
```

#### `setViewsDir()` { #mvcviewsimple-setviewsdir }

```php
public function setViewsDir( string $viewsDir ): void;
```

Sets views directory

<div class="api-group">Protected · 2</div>

#### `internalRender()` { #mvcviewsimple-internalrender }

```php
final protected function internalRender(
    string $path,
    mixed $params
): void;
```

Tries to render the view with every engine registered in the component

#### `loadTemplateEngines()` { #mvcviewsimple-loadtemplateengines }

```php
protected function loadTemplateEngines(): array;
```

Loads registered template engines, if none are registered it will use
Phalcon\Mvc\View\Engine\Php
