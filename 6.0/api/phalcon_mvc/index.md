---
title: "Phalcon Mvc"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Mvc

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Mvc\Application

Class

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

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- [`Phalcon\Application\AbstractApplication`](/6.0/api/phalcon_application/#applicationabstractapplication)
- **`Phalcon\Mvc\Application`**

`Closure` · `Phalcon\Application\AbstractApplication` · `Phalcon\Application\Exception` · `Phalcon\Di\DiInterface` · `Phalcon\Events\Exception` · `Phalcon\Http\ResponseInterface` · `Phalcon\Mvc\Application\Exception` · `Phalcon\Mvc\Application\Exceptions\ContainerRequired` · `Phalcon\Mvc\Application\Exceptions\InvalidModuleDefinition` · `Phalcon\Mvc\Application\Exceptions\ModuleDefinitionPathNotFound` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

<ApiItem href="#mvcapplication-handle" visibility="public" name="handle" returnType="bool|ResponseInterface" params={[{"type":"string","name":"uri","default":null}]}>
Handles a MVC request
</ApiItem>
<ApiItem href="#mvcapplication-sendcookiesonhandlerequest" visibility="public" name="sendCookiesOnHandleRequest" returnType="static" params={[{"type":"bool","name":"sendCookies","default":null}]}>
Enables or disables sending cookies by each request handling
</ApiItem>
<ApiItem href="#mvcapplication-sendheadersonhandlerequest" visibility="public" name="sendHeadersOnHandleRequest" returnType="static" params={[{"type":"bool","name":"sendHeaders","default":null}]}>
Enables or disables sending headers by each request handling
</ApiItem>
<ApiItem href="#mvcapplication-useimplicitview" visibility="public" name="useImplicitView" returnType="static" params={[{"type":"bool","name":"implicitView","default":null}]}>
By default, the view is implicitly buffering all the output
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="implicitView" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sendCookies" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sendHeaders" type="bool" default="true">
</ApiItem>

### Methods

<h4 id="mvcapplication-handle"><code>handle()</code></h4>

```php
public function handle( string $uri ): bool|ResponseInterface;
```

Handles a MVC request

<h4 id="mvcapplication-sendcookiesonhandlerequest"><code>sendCookiesOnHandleRequest()</code></h4>

```php
public function sendCookiesOnHandleRequest( bool $sendCookies ): static;
```

Enables or disables sending cookies by each request handling

<h4 id="mvcapplication-sendheadersonhandlerequest"><code>sendHeadersOnHandleRequest()</code></h4>

```php
public function sendHeadersOnHandleRequest( bool $sendHeaders ): static;
```

Enables or disables sending headers by each request handling

<h4 id="mvcapplication-useimplicitview"><code>useImplicitView()</code></h4>

```php
public function useImplicitView( bool $implicitView ): static;
```

By default, the view is implicitly buffering all the output
You can full disable the view component using this method

## Mvc\Application\Exception

Class

Exceptions thrown in Phalcon\Mvc\Application class will use this class

- `\Exception`
- [`Phalcon\Application\Exception`](/6.0/api/phalcon_application/#applicationexception)
- **`Phalcon\Mvc\Application\Exception`**
- [`Phalcon\Mvc\Application\Exceptions\ContainerRequired`](#mvcapplicationexceptionscontainerrequired)
- [`Phalcon\Mvc\Application\Exceptions\InvalidModuleDefinition`](#mvcapplicationexceptionsinvalidmoduledefinition)
- [`Phalcon\Mvc\Application\Exceptions\ModuleDefinitionPathNotFound`](#mvcapplicationexceptionsmoduledefinitionpathnotfound)

## Mvc\Application\Exceptions\ContainerRequired

Class

- `\Exception`
- [`Phalcon\Application\Exception`](/6.0/api/phalcon_application/#applicationexception)
- [`Phalcon\Mvc\Application\Exception`](#mvcapplicationexception)
- **`Phalcon\Mvc\Application\Exceptions\ContainerRequired`**

`Phalcon\Mvc\Application\Exception`

### Method Summary

<ApiItem href="#mvcapplicationexceptionscontainerrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcapplicationexceptionscontainerrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Application\Exceptions\InvalidModuleDefinition

Class

- `\Exception`
- [`Phalcon\Application\Exception`](/6.0/api/phalcon_application/#applicationexception)
- [`Phalcon\Mvc\Application\Exception`](#mvcapplicationexception)
- **`Phalcon\Mvc\Application\Exceptions\InvalidModuleDefinition`**

`Phalcon\Mvc\Application\Exception`

### Method Summary

<ApiItem href="#mvcapplicationexceptionsinvalidmoduledefinition-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string|null","name":"name","default":"null"},{"type":"string|null","name":"reason","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="mvcapplicationexceptionsinvalidmoduledefinition-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string|null $name = null,
string|null $reason = null
);
```

## Mvc\Application\Exceptions\ModuleDefinitionPathNotFound

Class

- `\Exception`
- [`Phalcon\Application\Exception`](/6.0/api/phalcon_application/#applicationexception)
- [`Phalcon\Mvc\Application\Exception`](#mvcapplicationexception)
- **`Phalcon\Mvc\Application\Exceptions\ModuleDefinitionPathNotFound`**

`Phalcon\Mvc\Application\Exception`

### Method Summary

<ApiItem href="#mvcapplicationexceptionsmoduledefinitionpathnotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"path","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcapplicationexceptionsmoduledefinitionpathnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```

## Mvc\Controller

Abstract

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

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- **`Phalcon\Mvc\Controller`** - implements [`Phalcon\Mvc\ControllerInterface`](#mvccontrollerinterface), [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)

`Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Traits\EventsAwareTrait`

### Method Summary

<ApiItem href="#mvccontroller-__construct" visibility="public" name="__construct" returnType="" params={[]}>
Phalcon\Mvc\Controller constructor
</ApiItem>

### Methods

<h4 id="mvccontroller-__construct"><code>__construct()</code></h4>

```php
final public function __construct();
```

Phalcon\Mvc\Controller constructor

## Mvc\ControllerInterface

Interface

Interface for controller handlers

- **`Phalcon\Mvc\ControllerInterface`**

## Mvc\Controller\BindModelInterface

Interface

Interface for Phalcon\Mvc\Controller

- **`Phalcon\Mvc\Controller\BindModelInterface`**

### Method Summary

<ApiItem href="#mvccontrollerbindmodelinterface-getmodelname" visibility="public" name="getModelName" returnType="string" params={[]}>
Return the model name associated with this controller
</ApiItem>

### Methods

<h4 id="mvccontrollerbindmodelinterface-getmodelname"><code>getModelName()</code></h4>

```php
public static function getModelName(): string;
```

Return the model name associated with this controller

## Mvc\Dispatcher

Class

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

- `\stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/6.0/api/phalcon_di/#diabstractinjectionaware)
- [`Phalcon\Dispatcher\AbstractDispatcher`](/6.0/api/phalcon_dispatcher/#dispatcherabstractdispatcher)
- **`Phalcon\Mvc\Dispatcher`** - implements [`Phalcon\Mvc\DispatcherInterface`](#mvcdispatcherinterface)

`Exception` · `Phalcon\Contracts\Dispatcher\DispatcherTypes` · `Phalcon\Di\DiInterface` · `Phalcon\Dispatcher\AbstractDispatcher` · `Phalcon\Dispatcher\Exception` · `Phalcon\Events\Exception` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Http\ResponseInterface` · `Phalcon\Mvc\Dispatcher\Exception` · `Phalcon\Mvc\Dispatcher\Exceptions\ResponseServiceUnavailable`

### Method Summary

<ApiItem href="#mvcdispatcher-forward" visibility="public" name="forward" returnType="void" params={[{"type":"array","name":"forward","default":null}]}>
Forwards the execution flow to another controller/action.
</ApiItem>
<ApiItem href="#mvcdispatcher-getactivecontroller" visibility="public" name="getActiveController" returnType="ControllerInterface|null" params={[]}>
Returns the active controller in the dispatcher
</ApiItem>
<ApiItem href="#mvcdispatcher-getcontrollerclass" visibility="public" name="getControllerClass" returnType="string" params={[]}>
Possible controller class name that will be located to dispatch the
</ApiItem>
<ApiItem href="#mvcdispatcher-getcontrollername" visibility="public" name="getControllerName" returnType="string" params={[]}>
Gets last dispatched controller name
</ApiItem>
<ApiItem href="#mvcdispatcher-getlastcontroller" visibility="public" name="getLastController" returnType="ControllerInterface|null" params={[]}>
Returns the latest dispatched controller
</ApiItem>
<ApiItem href="#mvcdispatcher-getpreviouscontrollername" visibility="public" name="getPreviousControllerName" returnType="string" params={[]}>
Gets previous dispatched controller name
</ApiItem>
<ApiItem href="#mvcdispatcher-setcontrollername" visibility="public" name="setControllerName" returnType="DispatcherInterface" params={[{"type":"string","name":"controllerName","default":null}]}>
Sets the controller name to be dispatched
</ApiItem>
<ApiItem href="#mvcdispatcher-setcontrollersuffix" visibility="public" name="setControllerSuffix" returnType="DispatcherInterface" params={[{"type":"string","name":"controllerSuffix","default":null}]}>
Sets the default controller suffix
</ApiItem>
<ApiItem href="#mvcdispatcher-setdefaultcontroller" visibility="public" name="setDefaultController" returnType="DispatcherInterface" params={[{"type":"string","name":"controllerName","default":null}]}>
Sets the default controller name
</ApiItem>
<ApiItem href="#mvcdispatcher-handleexception" visibility="protected" name="handleException" returnType="" params={[{"type":"BaseException","name":"exception","default":null}]}>
Handles a user exception
</ApiItem>
<ApiItem href="#mvcdispatcher-throwdispatchexception" visibility="protected" name="throwDispatchException" returnType="bool" params={[{"type":"string","name":"message","default":null},{"type":"int","name":"exceptionCode","default":"0"}]}>
Throws an internal exception
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="defaultAction" type="string" default="&quot;index&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultHandler" type="string" default="&quot;index&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="handlerSuffix" type="string" default="&quot;Controller&quot;">
</ApiItem>

### Methods

<h4 id="mvcdispatcher-forward"><code>forward()</code></h4>

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

<h4 id="mvcdispatcher-getactivecontroller"><code>getActiveController()</code></h4>

```php
public function getActiveController(): ControllerInterface|null;
```

Returns the active controller in the dispatcher

<h4 id="mvcdispatcher-getcontrollerclass"><code>getControllerClass()</code></h4>

```php
public function getControllerClass(): string;
```

Possible controller class name that will be located to dispatch the
request

<h4 id="mvcdispatcher-getcontrollername"><code>getControllerName()</code></h4>

```php
public function getControllerName(): string;
```

Gets last dispatched controller name

<h4 id="mvcdispatcher-getlastcontroller"><code>getLastController()</code></h4>

```php
public function getLastController(): ControllerInterface|null;
```

Returns the latest dispatched controller

<h4 id="mvcdispatcher-getpreviouscontrollername"><code>getPreviousControllerName()</code></h4>

```php
public function getPreviousControllerName(): string;
```

Gets previous dispatched controller name

Note: This is an Mvc-specific alias for the base
getPreviousHandlerName().

<h4 id="mvcdispatcher-setcontrollername"><code>setControllerName()</code></h4>

```php
public function setControllerName( string $controllerName ): DispatcherInterface;
```

Sets the controller name to be dispatched

<h4 id="mvcdispatcher-setcontrollersuffix"><code>setControllerSuffix()</code></h4>

```php
public function setControllerSuffix( string $controllerSuffix ): DispatcherInterface;
```

Sets the default controller suffix

<h4 id="mvcdispatcher-setdefaultcontroller"><code>setDefaultController()</code></h4>

```php
public function setDefaultController( string $controllerName ): DispatcherInterface;
```

Sets the default controller name

<h4 id="mvcdispatcher-handleexception"><code>handleException()</code></h4>

```php
protected function handleException( BaseException $exception );
```

Handles a user exception

<h4 id="mvcdispatcher-throwdispatchexception"><code>throwDispatchException()</code></h4>

```php
protected function throwDispatchException(
string $message,
int $exceptionCode = 0
): bool;
```

Throws an internal exception

## Mvc\DispatcherInterface

Interface

Interface for Phalcon\Mvc\Dispatcher

- [`Phalcon\Contracts\Dispatcher\Dispatcher`](/6.0/api/phalcon_contracts/#contractsdispatcherdispatcher)
- [`Phalcon\Contracts\Mvc\Dispatcher`](/6.0/api/phalcon_contracts/#contractsmvcdispatcher)
- **`Phalcon\Mvc\DispatcherInterface`**

`Phalcon\Contracts\Mvc\Dispatcher`

## Mvc\Dispatcher\Exception

Class

Exceptions thrown in Phalcon\Mvc\Dispatcher will use this class

- `\Exception`
- [`Phalcon\Dispatcher\Exception`](/6.0/api/phalcon_dispatcher/#dispatcherexception)
- **`Phalcon\Mvc\Dispatcher\Exception`**
- [`Phalcon\Mvc\Dispatcher\Exceptions\ResponseServiceUnavailable`](#mvcdispatcherexceptionsresponseserviceunavailable)

## Mvc\Dispatcher\Exceptions\ResponseServiceUnavailable

Class

- `\Exception`
- [`Phalcon\Dispatcher\Exception`](/6.0/api/phalcon_dispatcher/#dispatcherexception)
- [`Phalcon\Mvc\Dispatcher\Exception`](#mvcdispatcherexception)
- **`Phalcon\Mvc\Dispatcher\Exceptions\ResponseServiceUnavailable`**

`Phalcon\Mvc\Dispatcher\Exception`

### Method Summary

<ApiItem href="#mvcdispatcherexceptionsresponseserviceunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcdispatcherexceptionsresponseserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\EntityInterface

Interface

Phalcon\Mvc\EntityInterface

Interface for Phalcon\Mvc\Collection and Phalcon\Mvc\Model

- **`Phalcon\Mvc\EntityInterface`**

### Method Summary

<ApiItem href="#mvcentityinterface-readattribute" visibility="public" name="readAttribute" returnType="mixed" params={[{"type":"string","name":"attribute","default":null}]}>
Reads an attribute value by its name
</ApiItem>
<ApiItem href="#mvcentityinterface-writeattribute" visibility="public" name="writeAttribute" returnType="void" params={[{"type":"string","name":"attribute","default":null},{"type":"mixed","name":"value","default":null}]}>
Writes an attribute value by its name
</ApiItem>

### Methods

<h4 id="mvcentityinterface-readattribute"><code>readAttribute()</code></h4>

```php
public function readAttribute( string $attribute ): mixed;
```

Reads an attribute value by its name

<h4 id="mvcentityinterface-writeattribute"><code>writeAttribute()</code></h4>

```php
public function writeAttribute(
string $attribute,
mixed $value
): void;
```

Writes an attribute value by its name

## Mvc\Event\ApplicationBootEvent

Class

- **`Phalcon\Mvc\Event\ApplicationBootEvent`** - implements [`Phalcon\Events\PsrEventInterface`](/6.0/api/phalcon_events/#eventspsreventinterface)

`Phalcon\Events\PsrEventInterface`

## Mvc\Micro

Class

With Phalcon, you can create "Micro-Framework like" applications. By doing
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

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- **`Phalcon\Mvc\Micro`** - implements `\ArrayAccess`, [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)

`ArrayAccess` · `Closure` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Di\FactoryDefault` · `Phalcon\Di\Injectable` · `Phalcon\Di\ServiceInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Exception` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Http\ResponseInterface` · `Phalcon\Mvc\Micro\CollectionInterface` · `Phalcon\Mvc\Micro\Exception` · `Phalcon\Mvc\Micro\Exceptions\ContainerRequired` · `Phalcon\Mvc\Micro\Exceptions\HandlerNotCallable` · `Phalcon\Mvc\Micro\Exceptions\InvalidRegisteredHandler` · `Phalcon\Mvc\Micro\Exceptions\MissingCollectionMainHandler` · `Phalcon\Mvc\Micro\Exceptions\NoHandlersToMount` · `Phalcon\Mvc\Micro\Exceptions\NoMatchedRouteHandler` · `Phalcon\Mvc\Micro\Exceptions\NotFoundHandlerNotCallable` · `Phalcon\Mvc\Micro\Exceptions\ResponseHandlerNotCallable` · `Phalcon\Mvc\Micro\LazyLoader` · `Phalcon\Mvc\Micro\MiddlewareInterface` · `Phalcon\Mvc\Model\BinderInterface` · `Phalcon\Mvc\Router\RouteInterface` · `Throwable`

### Method Summary

<ApiItem href="#mvcmicro-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"DiInterface|null","name":"container","default":"null"}]}>
Phalcon\Mvc\Micro constructor
</ApiItem>
<ApiItem href="#mvcmicro-after" visibility="public" name="after" returnType="static" params={[{"type":"callable|MiddlewareInterface","name":"handler","default":null}]}>
Appends an 'after' middleware to be called after execute the route
</ApiItem>
<ApiItem href="#mvcmicro-afterbinding" visibility="public" name="afterBinding" returnType="static" params={[{"type":"callable|MiddlewareInterface","name":"handler","default":null}]}>
Appends a afterBinding middleware to be called after model binding
</ApiItem>
<ApiItem href="#mvcmicro-before" visibility="public" name="before" returnType="static" params={[{"type":"callable|MiddlewareInterface","name":"handler","default":null}]}>
Appends a before middleware to be called before execute the route
</ApiItem>
<ApiItem href="#mvcmicro-delete" visibility="public" name="delete" returnType="RouteInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"array|callable","name":"handler","default":null}]}>
Maps a route to a handler that only matches if the HTTP method is DELETE
</ApiItem>
<ApiItem href="#mvcmicro-error" visibility="public" name="error" returnType="static" params={[{"type":"callable","name":"handler","default":null}]}>
Sets a handler that will be called when an exception is thrown handling
</ApiItem>
<ApiItem href="#mvcmicro-finish" visibility="public" name="finish" returnType="static" params={[{"type":"callable|MiddlewareInterface","name":"handler","default":null}]}>
Appends a 'finish' middleware to be called when the request is finished
</ApiItem>
<ApiItem href="#mvcmicro-get" visibility="public" name="get" returnType="RouteInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"array|callable","name":"handler","default":null}]}>
Maps a route to a handler that only matches if the HTTP method is GET
</ApiItem>
<ApiItem href="#mvcmicro-getactivehandler" visibility="public" name="getActiveHandler" returnType="mixed" params={[]}>
Return the handler that will be called for the matched route
</ApiItem>
<ApiItem href="#mvcmicro-getboundmodels" visibility="public" name="getBoundModels" returnType="array" params={[]}>
Returns bound models from binder instance
</ApiItem>
<ApiItem href="#mvcmicro-gethandlers" visibility="public" name="getHandlers" returnType="array" params={[]}>
Returns the internal handlers attached to the application
</ApiItem>
<ApiItem href="#mvcmicro-getmodelbinder" visibility="public" name="getModelBinder" returnType="BinderInterface|null" params={[]}>
Gets model binder
</ApiItem>
<ApiItem href="#mvcmicro-getreturnedvalue" visibility="public" name="getReturnedValue" returnType="mixed" params={[]}>
Returns the value returned by the executed handler
</ApiItem>
<ApiItem href="#mvcmicro-getrouter" visibility="public" name="getRouter" returnType="RouterInterface" params={[]}>
Returns the internal router used by the application
</ApiItem>
<ApiItem href="#mvcmicro-getservice" visibility="public" name="getService" returnType="" params={[{"type":"string","name":"serviceName","default":null}]}>
Obtains a service from the DI
</ApiItem>
<ApiItem href="#mvcmicro-getsharedservice" visibility="public" name="getSharedService" returnType="" params={[{"type":"string","name":"serviceName","default":null}]}>
Obtains a shared service from the DI
</ApiItem>
<ApiItem href="#mvcmicro-handle" visibility="public" name="handle" returnType="mixed" params={[{"type":"string","name":"uri","default":null}]}>
Handle the whole request
</ApiItem>
<ApiItem href="#mvcmicro-hasservice" visibility="public" name="hasService" returnType="bool" params={[{"type":"string","name":"serviceName","default":null}]}>
Checks if a service is registered in the DI
</ApiItem>
<ApiItem href="#mvcmicro-head" visibility="public" name="head" returnType="RouteInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"array|callable","name":"handler","default":null}]}>
Maps a route to a handler that only matches if the HTTP method is HEAD
</ApiItem>
<ApiItem href="#mvcmicro-map" visibility="public" name="map" returnType="RouteInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"array|callable","name":"handler","default":null}]}>
Maps a route to a handler without any HTTP method constraint
</ApiItem>
<ApiItem href="#mvcmicro-mount" visibility="public" name="mount" returnType="static" params={[{"type":"CollectionInterface","name":"collection","default":null}]}>
Mounts a collection of handlers
</ApiItem>
<ApiItem href="#mvcmicro-notfound" visibility="public" name="notFound" returnType="static" params={[{"type":"callable","name":"handler","default":null}]}>
Sets a handler that will be called when the router does not match any of
</ApiItem>
<ApiItem href="#mvcmicro-offsetexists" visibility="public" name="offsetExists" returnType="bool" params={[{"type":"mixed","name":"offset","default":null}]}>
Check if a service is registered in the internal services container using
</ApiItem>
<ApiItem href="#mvcmicro-offsetget" visibility="public" name="offsetGet" returnType="mixed" params={[{"type":"mixed","name":"offset","default":null}]}>
Allows to obtain a shared service in the internal services container
</ApiItem>
<ApiItem href="#mvcmicro-offsetset" visibility="public" name="offsetSet" returnType="void" params={[{"type":"mixed","name":"offset","default":null},{"type":"mixed","name":"value","default":null}]}>
Allows to register a shared service in the internal services container
</ApiItem>
<ApiItem href="#mvcmicro-offsetunset" visibility="public" name="offsetUnset" returnType="void" params={[{"type":"mixed","name":"offset","default":null}]}>
Removes a service from the internal services container using the array
</ApiItem>
<ApiItem href="#mvcmicro-options" visibility="public" name="options" returnType="RouteInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"array|callable","name":"handler","default":null}]}>
Maps a route to a handler that only matches if the HTTP method is OPTIONS
</ApiItem>
<ApiItem href="#mvcmicro-patch" visibility="public" name="patch" returnType="RouteInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"array|callable","name":"handler","default":null}]}>
Maps a route to a handler that only matches if the HTTP method is PATCH
</ApiItem>
<ApiItem href="#mvcmicro-post" visibility="public" name="post" returnType="RouteInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"array|callable","name":"handler","default":null}]}>
Maps a route to a handler that only matches if the HTTP method is POST
</ApiItem>
<ApiItem href="#mvcmicro-put" visibility="public" name="put" returnType="RouteInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"array|callable","name":"handler","default":null}]}>
Maps a route to a handler that only matches if the HTTP method is PUT
</ApiItem>
<ApiItem href="#mvcmicro-setactivehandler" visibility="public" name="setActiveHandler" returnType="static" params={[{"type":"callable","name":"activeHandler","default":null}]}>
Sets externally the handler that must be called by the matched route
</ApiItem>
<ApiItem href="#mvcmicro-setmodelbinder" visibility="public" name="setModelBinder" returnType="static" params={[{"type":"BinderInterface","name":"modelBinder","default":null},{"type":"AdapterInterface|string|null","name":"cache","default":"null"}]}>
Sets model binder
</ApiItem>
<ApiItem href="#mvcmicro-setresponsehandler" visibility="public" name="setResponseHandler" returnType="static" params={[{"type":"callable","name":"handler","default":null}]}>
Appends a custom 'response' handler to be called instead of the default
</ApiItem>
<ApiItem href="#mvcmicro-setservice" visibility="public" name="setService" returnType="ServiceInterface" params={[{"type":"string","name":"serviceName","default":null},{"type":"mixed","name":"definition","default":null},{"type":"bool","name":"isShared","default":"false"}]}>
Sets a service from the DI
</ApiItem>
<ApiItem href="#mvcmicro-stop" visibility="public" name="stop" returnType="void" params={[]}>
Stops the middleware execution avoiding than other middlewares be
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="activeHandler" type="callable|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="afterBindingHandlers" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="afterHandlers" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="beforeHandlers" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="errorHandler" type="callable|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="finishHandlers" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="handlers" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="modelBinder" type="BinderInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="notFoundHandler" type="callable|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="responseHandler" type="callable|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="returnedValue" type="mixed|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="router" type="RouterInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="stopped" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="mvcmicro-__construct"><code>__construct()</code></h4>

```php
public function __construct( DiInterface|null $container = null );
```

Phalcon\Mvc\Micro constructor

<h4 id="mvcmicro-after"><code>after()</code></h4>

```php
public function after( callable|MiddlewareInterface $handler ): static;
```

Appends an 'after' middleware to be called after execute the route

<h4 id="mvcmicro-afterbinding"><code>afterBinding()</code></h4>

```php
public function afterBinding( callable|MiddlewareInterface $handler ): static;
```

Appends a afterBinding middleware to be called after model binding

<h4 id="mvcmicro-before"><code>before()</code></h4>

```php
public function before( callable|MiddlewareInterface $handler ): static;
```

Appends a before middleware to be called before execute the route

<h4 id="mvcmicro-delete"><code>delete()</code></h4>

```php
public function delete(
string $routePattern,
array|callable $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is DELETE

<h4 id="mvcmicro-error"><code>error()</code></h4>

```php
public function error( callable $handler ): static;
```

Sets a handler that will be called when an exception is thrown handling
the route

<h4 id="mvcmicro-finish"><code>finish()</code></h4>

```php
public function finish( callable|MiddlewareInterface $handler ): static;
```

Appends a 'finish' middleware to be called when the request is finished

<h4 id="mvcmicro-get"><code>get()</code></h4>

```php
public function get(
string $routePattern,
array|callable $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is GET

<h4 id="mvcmicro-getactivehandler"><code>getActiveHandler()</code></h4>

```php
public function getActiveHandler(): mixed;
```

Return the handler that will be called for the matched route

<h4 id="mvcmicro-getboundmodels"><code>getBoundModels()</code></h4>

```php
public function getBoundModels(): array;
```

Returns bound models from binder instance

<h4 id="mvcmicro-gethandlers"><code>getHandlers()</code></h4>

```php
public function getHandlers(): array;
```

Returns the internal handlers attached to the application

<h4 id="mvcmicro-getmodelbinder"><code>getModelBinder()</code></h4>

```php
public function getModelBinder(): BinderInterface|null;
```

Gets model binder

<h4 id="mvcmicro-getreturnedvalue"><code>getReturnedValue()</code></h4>

```php
public function getReturnedValue(): mixed;
```

Returns the value returned by the executed handler

<h4 id="mvcmicro-getrouter"><code>getRouter()</code></h4>

```php
public function getRouter(): RouterInterface;
```

Returns the internal router used by the application

<h4 id="mvcmicro-getservice"><code>getService()</code></h4>

```php
public function getService( string $serviceName );
```

Obtains a service from the DI

<h4 id="mvcmicro-getsharedservice"><code>getSharedService()</code></h4>

```php
public function getSharedService( string $serviceName );
```

Obtains a shared service from the DI

<h4 id="mvcmicro-handle"><code>handle()</code></h4>

```php
public function handle( string $uri ): mixed;
```

Handle the whole request

<h4 id="mvcmicro-hasservice"><code>hasService()</code></h4>

```php
public function hasService( string $serviceName ): bool;
```

Checks if a service is registered in the DI

<h4 id="mvcmicro-head"><code>head()</code></h4>

```php
public function head(
string $routePattern,
array|callable $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is HEAD

<h4 id="mvcmicro-map"><code>map()</code></h4>

```php
public function map(
string $routePattern,
array|callable $handler
): RouteInterface;
```

Maps a route to a handler without any HTTP method constraint

<h4 id="mvcmicro-mount"><code>mount()</code></h4>

```php
public function mount( CollectionInterface $collection ): static;
```

Mounts a collection of handlers

<h4 id="mvcmicro-notfound"><code>notFound()</code></h4>

```php
public function notFound( callable $handler ): static;
```

Sets a handler that will be called when the router does not match any of
the defined routes

<h4 id="mvcmicro-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $offset ): bool;
```

Check if a service is registered in the internal services container using
the array syntax

<h4 id="mvcmicro-offsetget"><code>offsetGet()</code></h4>

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

<h4 id="mvcmicro-offsetset"><code>offsetSet()</code></h4>

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

<h4 id="mvcmicro-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $offset ): void;
```

Removes a service from the internal services container using the array
syntax

<h4 id="mvcmicro-options"><code>options()</code></h4>

```php
public function options(
string $routePattern,
array|callable $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is OPTIONS

<h4 id="mvcmicro-patch"><code>patch()</code></h4>

```php
public function patch(
string $routePattern,
array|callable $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is PATCH

<h4 id="mvcmicro-post"><code>post()</code></h4>

```php
public function post(
string $routePattern,
array|callable $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is POST

<h4 id="mvcmicro-put"><code>put()</code></h4>

```php
public function put(
string $routePattern,
array|callable $handler
): RouteInterface;
```

Maps a route to a handler that only matches if the HTTP method is PUT

<h4 id="mvcmicro-setactivehandler"><code>setActiveHandler()</code></h4>

```php
public function setActiveHandler( callable $activeHandler ): static;
```

Sets externally the handler that must be called by the matched route

<h4 id="mvcmicro-setmodelbinder"><code>setModelBinder()</code></h4>

```php
public function setModelBinder(
BinderInterface $modelBinder,
AdapterInterface|string|null $cache = null
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

<h4 id="mvcmicro-setresponsehandler"><code>setResponseHandler()</code></h4>

```php
public function setResponseHandler( callable $handler ): static;
```

Appends a custom 'response' handler to be called instead of the default
response handler

<h4 id="mvcmicro-setservice"><code>setService()</code></h4>

```php
public function setService(
string $serviceName,
mixed $definition,
bool $isShared = false
): ServiceInterface;
```

Sets a service from the DI

<h4 id="mvcmicro-stop"><code>stop()</code></h4>

```php
public function stop(): void;
```

Stops the middleware execution avoiding than other middlewares be
executed

## Mvc\Micro\Collection

Class

Groups Micro-Mvc handlers as controllers

```php
$app = new \Phalcon\Mvc\Micro();

$collection = new Collection();

$collection->setHandler(
new PostsController()
);

$collection->get('/posts/edit/{id}', 'edit');

$app->mount($collection);
```

- **`Phalcon\Mvc\Micro\Collection`** - implements [`Phalcon\Mvc\Micro\CollectionInterface`](#mvcmicrocollectioninterface)

### Method Summary

<ApiItem href="#mvcmicrocollection-delete" visibility="public" name="delete" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable|string","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is DELETE.
</ApiItem>
<ApiItem href="#mvcmicrocollection-get" visibility="public" name="get" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable|string","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is GET.
</ApiItem>
<ApiItem href="#mvcmicrocollection-gethandler" visibility="public" name="getHandler" returnType="mixed" params={[]}>
Returns the main handler
</ApiItem>
<ApiItem href="#mvcmicrocollection-gethandlers" visibility="public" name="getHandlers" returnType="array" params={[]}>
Returns the registered handlers
</ApiItem>
<ApiItem href="#mvcmicrocollection-getprefix" visibility="public" name="getPrefix" returnType="string" params={[]}>
Returns the collection prefix if any
</ApiItem>
<ApiItem href="#mvcmicrocollection-head" visibility="public" name="head" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable|string","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is HEAD.
</ApiItem>
<ApiItem href="#mvcmicrocollection-islazy" visibility="public" name="isLazy" returnType="bool" params={[]}>
Returns if the main handler must be lazy loaded
</ApiItem>
<ApiItem href="#mvcmicrocollection-map" visibility="public" name="map" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable|string","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler.
</ApiItem>
<ApiItem href="#mvcmicrocollection-mapvia" visibility="public" name="mapVia" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable|string","name":"handler","default":null},{"type":"array|string","name":"method","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler via methods.
</ApiItem>
<ApiItem href="#mvcmicrocollection-options" visibility="public" name="options" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable|string","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is
</ApiItem>
<ApiItem href="#mvcmicrocollection-patch" visibility="public" name="patch" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable|string","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is PATCH.
</ApiItem>
<ApiItem href="#mvcmicrocollection-post" visibility="public" name="post" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable|string","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is POST.
</ApiItem>
<ApiItem href="#mvcmicrocollection-put" visibility="public" name="put" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable|string","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is PUT.
</ApiItem>
<ApiItem href="#mvcmicrocollection-sethandler" visibility="public" name="setHandler" returnType="CollectionInterface" params={[{"type":"mixed","name":"handler","default":null},{"type":"bool","name":"isLazy","default":"false"}]}>
Sets the main handler.
</ApiItem>
<ApiItem href="#mvcmicrocollection-setlazy" visibility="public" name="setLazy" returnType="CollectionInterface" params={[{"type":"bool","name":"isLazy","default":null}]}>
Sets if the main handler must be lazy loaded
</ApiItem>
<ApiItem href="#mvcmicrocollection-setprefix" visibility="public" name="setPrefix" returnType="CollectionInterface" params={[{"type":"string","name":"prefix","default":null}]}>
Sets a prefix for all routes added to the collection
</ApiItem>
<ApiItem href="#mvcmicrocollection-addmap" visibility="protected" name="addMap" returnType="void" params={[{"type":"array|string","name":"method","default":null},{"type":"string","name":"routePattern","default":null},{"type":"callable|string","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Internal function to add a handler to the group.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="handler" type="callable" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="handlers" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isLazy" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="prefix" type="string" default="&quot;&quot;">
</ApiItem>

### Methods

<h4 id="mvcmicrocollection-delete"><code>delete()</code></h4>

```php
public function delete(
string $routePattern,
callable|string $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is DELETE.

<h4 id="mvcmicrocollection-get"><code>get()</code></h4>

```php
public function get(
string $routePattern,
callable|string $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is GET.

<h4 id="mvcmicrocollection-gethandler"><code>getHandler()</code></h4>

```php
public function getHandler(): mixed;
```

Returns the main handler

<h4 id="mvcmicrocollection-gethandlers"><code>getHandlers()</code></h4>

```php
public function getHandlers(): array;
```

Returns the registered handlers

<h4 id="mvcmicrocollection-getprefix"><code>getPrefix()</code></h4>

```php
public function getPrefix(): string;
```

Returns the collection prefix if any

<h4 id="mvcmicrocollection-head"><code>head()</code></h4>

```php
public function head(
string $routePattern,
callable|string $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is HEAD.

<h4 id="mvcmicrocollection-islazy"><code>isLazy()</code></h4>

```php
public function isLazy(): bool;
```

Returns if the main handler must be lazy loaded

<h4 id="mvcmicrocollection-map"><code>map()</code></h4>

```php
public function map(
string $routePattern,
callable|string $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler.

<h4 id="mvcmicrocollection-mapvia"><code>mapVia()</code></h4>

```php
public function mapVia(
string $routePattern,
callable|string $handler,
array|string $method,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler via methods.

```php
$collection->mapVia(
'/test',
'indexAction',
['POST', 'GET'],
'test'
);
```

<h4 id="mvcmicrocollection-options"><code>options()</code></h4>

```php
public function options(
string $routePattern,
callable|string $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is
OPTIONS.

<h4 id="mvcmicrocollection-patch"><code>patch()</code></h4>

```php
public function patch(
string $routePattern,
callable|string $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is PATCH.

<h4 id="mvcmicrocollection-post"><code>post()</code></h4>

```php
public function post(
string $routePattern,
callable|string $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is POST.

<h4 id="mvcmicrocollection-put"><code>put()</code></h4>

```php
public function put(
string $routePattern,
callable|string $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is PUT.

<h4 id="mvcmicrocollection-sethandler"><code>setHandler()</code></h4>

```php
public function setHandler(
mixed $handler,
bool $isLazy = false
): CollectionInterface;
```

Sets the main handler.

<h4 id="mvcmicrocollection-setlazy"><code>setLazy()</code></h4>

```php
public function setLazy( bool $isLazy ): CollectionInterface;
```

Sets if the main handler must be lazy loaded

<h4 id="mvcmicrocollection-setprefix"><code>setPrefix()</code></h4>

```php
public function setPrefix( string $prefix ): CollectionInterface;
```

Sets a prefix for all routes added to the collection

<h4 id="mvcmicrocollection-addmap"><code>addMap()</code></h4>

```php
protected function addMap(
array|string $method,
string $routePattern,
callable|string $handler,
string|null $name = null
): void;
```

Internal function to add a handler to the group.

## Mvc\Micro\CollectionInterface

Interface

Interface for Phalcon\Mvc\Micro\Collection

- **`Phalcon\Mvc\Micro\CollectionInterface`**

### Method Summary

<ApiItem href="#mvcmicrocollectioninterface-delete" visibility="public" name="delete" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is DELETE
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-get" visibility="public" name="get" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is GET
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-gethandler" visibility="public" name="getHandler" returnType="mixed" params={[]}>
Returns the main handler
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-gethandlers" visibility="public" name="getHandlers" returnType="array" params={[]}>
Returns the registered handlers
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-getprefix" visibility="public" name="getPrefix" returnType="string" params={[]}>
Returns the collection prefix if any
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-head" visibility="public" name="head" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is HEAD
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-islazy" visibility="public" name="isLazy" returnType="bool" params={[]}>
Returns if the main handler must be lazy loaded
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-map" visibility="public" name="map" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-options" visibility="public" name="options" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is OPTIONS
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-patch" visibility="public" name="patch" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is PATCH
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-post" visibility="public" name="post" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is POST
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-put" visibility="public" name="put" returnType="CollectionInterface" params={[{"type":"string","name":"routePattern","default":null},{"type":"callable","name":"handler","default":null},{"type":"string|null","name":"name","default":"null"}]}>
Maps a route to a handler that only matches if the HTTP method is PUT
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-sethandler" visibility="public" name="setHandler" returnType="CollectionInterface" params={[{"type":"mixed","name":"handler","default":null},{"type":"bool","name":"isLazy","default":"false"}]}>
Sets the main handler
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-setlazy" visibility="public" name="setLazy" returnType="CollectionInterface" params={[{"type":"bool","name":"isLazy","default":null}]}>
Sets if the main handler must be lazy loaded
</ApiItem>
<ApiItem href="#mvcmicrocollectioninterface-setprefix" visibility="public" name="setPrefix" returnType="CollectionInterface" params={[{"type":"string","name":"prefix","default":null}]}>
Sets a prefix for all routes added to the collection
</ApiItem>

### Methods

<h4 id="mvcmicrocollectioninterface-delete"><code>delete()</code></h4>

```php
public function delete(
string $routePattern,
callable $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is DELETE

<h4 id="mvcmicrocollectioninterface-get"><code>get()</code></h4>

```php
public function get(
string $routePattern,
callable $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is GET

<h4 id="mvcmicrocollectioninterface-gethandler"><code>getHandler()</code></h4>

```php
public function getHandler(): mixed;
```

Returns the main handler

<h4 id="mvcmicrocollectioninterface-gethandlers"><code>getHandlers()</code></h4>

```php
public function getHandlers(): array;
```

Returns the registered handlers

<h4 id="mvcmicrocollectioninterface-getprefix"><code>getPrefix()</code></h4>

```php
public function getPrefix(): string;
```

Returns the collection prefix if any

<h4 id="mvcmicrocollectioninterface-head"><code>head()</code></h4>

```php
public function head(
string $routePattern,
callable $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is HEAD

<h4 id="mvcmicrocollectioninterface-islazy"><code>isLazy()</code></h4>

```php
public function isLazy(): bool;
```

Returns if the main handler must be lazy loaded

<h4 id="mvcmicrocollectioninterface-map"><code>map()</code></h4>

```php
public function map(
string $routePattern,
callable $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler

<h4 id="mvcmicrocollectioninterface-options"><code>options()</code></h4>

```php
public function options(
string $routePattern,
callable $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is OPTIONS

<h4 id="mvcmicrocollectioninterface-patch"><code>patch()</code></h4>

```php
public function patch(
string $routePattern,
callable $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is PATCH

<h4 id="mvcmicrocollectioninterface-post"><code>post()</code></h4>

```php
public function post(
string $routePattern,
callable $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is POST

<h4 id="mvcmicrocollectioninterface-put"><code>put()</code></h4>

```php
public function put(
string $routePattern,
callable $handler,
string|null $name = null
): CollectionInterface;
```

Maps a route to a handler that only matches if the HTTP method is PUT

<h4 id="mvcmicrocollectioninterface-sethandler"><code>setHandler()</code></h4>

```php
public function setHandler(
mixed $handler,
bool $isLazy = false
): CollectionInterface;
```

Sets the main handler

<h4 id="mvcmicrocollectioninterface-setlazy"><code>setLazy()</code></h4>

```php
public function setLazy( bool $isLazy ): CollectionInterface;
```

Sets if the main handler must be lazy loaded

<h4 id="mvcmicrocollectioninterface-setprefix"><code>setPrefix()</code></h4>

```php
public function setPrefix( string $prefix ): CollectionInterface;
```

Sets a prefix for all routes added to the collection

## Mvc\Micro\Exception

Class

Exceptions thrown in Phalcon\Mvc\Micro will use this class

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

## Mvc\Micro\Exceptions\ContainerRequired

Class

- `\Exception`
- [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
- **`Phalcon\Mvc\Micro\Exceptions\ContainerRequired`**

`Phalcon\Mvc\Micro\Exception`

### Method Summary

<ApiItem href="#mvcmicroexceptionscontainerrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmicroexceptionscontainerrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Micro\Exceptions\ErrorHandlerNotCallable

Class

- `\Exception`
- [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
- **`Phalcon\Mvc\Micro\Exceptions\ErrorHandlerNotCallable`**

`Phalcon\Mvc\Micro\Exception`

### Method Summary

<ApiItem href="#mvcmicroexceptionserrorhandlernotcallable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmicroexceptionserrorhandlernotcallable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Micro\Exceptions\HandlerNotCallable

Class

- `\Exception`
- [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
- **`Phalcon\Mvc\Micro\Exceptions\HandlerNotCallable`**

`Phalcon\Mvc\Micro\Exception`

### Method Summary

<ApiItem href="#mvcmicroexceptionshandlernotcallable-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmicroexceptionshandlernotcallable-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type );
```

## Mvc\Micro\Exceptions\InvalidRegisteredHandler

Class

- `\Exception`
- [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
- **`Phalcon\Mvc\Micro\Exceptions\InvalidRegisteredHandler`**

`Phalcon\Mvc\Micro\Exception`

### Method Summary

<ApiItem href="#mvcmicroexceptionsinvalidregisteredhandler-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmicroexceptionsinvalidregisteredhandler-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Micro\Exceptions\LazyHandlerNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
- **`Phalcon\Mvc\Micro\Exceptions\LazyHandlerNotFound`**

`Phalcon\Mvc\Micro\Exception`

### Method Summary

<ApiItem href="#mvcmicroexceptionslazyhandlernotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"definition","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmicroexceptionslazyhandlernotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $definition );
```

## Mvc\Micro\Exceptions\MissingCollectionMainHandler

Class

- `\Exception`
- [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
- **`Phalcon\Mvc\Micro\Exceptions\MissingCollectionMainHandler`**

`Phalcon\Mvc\Micro\Exception`

### Method Summary

<ApiItem href="#mvcmicroexceptionsmissingcollectionmainhandler-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmicroexceptionsmissingcollectionmainhandler-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Micro\Exceptions\NoHandlersToMount

Class

- `\Exception`
- [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
- **`Phalcon\Mvc\Micro\Exceptions\NoHandlersToMount`**

`Phalcon\Mvc\Micro\Exception`

### Method Summary

<ApiItem href="#mvcmicroexceptionsnohandlerstomount-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmicroexceptionsnohandlerstomount-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Micro\Exceptions\NoMatchedRouteHandler

Class

- `\Exception`
- [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
- **`Phalcon\Mvc\Micro\Exceptions\NoMatchedRouteHandler`**

`Phalcon\Mvc\Micro\Exception`

### Method Summary

<ApiItem href="#mvcmicroexceptionsnomatchedroutehandler-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmicroexceptionsnomatchedroutehandler-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Micro\Exceptions\NotFoundHandlerNotCallable

Class

- `\Exception`
- [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
- **`Phalcon\Mvc\Micro\Exceptions\NotFoundHandlerNotCallable`**

`Phalcon\Mvc\Micro\Exception`

### Method Summary

<ApiItem href="#mvcmicroexceptionsnotfoundhandlernotcallable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmicroexceptionsnotfoundhandlernotcallable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Micro\Exceptions\ResponseHandlerNotCallable

Class

- `\Exception`
- [`Phalcon\Mvc\Micro\Exception`](#mvcmicroexception)
- **`Phalcon\Mvc\Micro\Exceptions\ResponseHandlerNotCallable`**

`Phalcon\Mvc\Micro\Exception`

### Method Summary

<ApiItem href="#mvcmicroexceptionsresponsehandlernotcallable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmicroexceptionsresponsehandlernotcallable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Micro\LazyLoader

Class

Lazy-Load of handlers for Mvc\Micro using auto-loading

- **`Phalcon\Mvc\Micro\LazyLoader`**

`Phalcon\Mvc\Micro\Exceptions\LazyHandlerNotFound` · `Phalcon\Mvc\Model\BinderInterface`

### Method Summary

<ApiItem href="#mvcmicrolazyloader-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"definition","default":null}]}>
Phalcon\Mvc\Micro\LazyLoader constructor
</ApiItem>
<ApiItem href="#mvcmicrolazyloader-callmethod" visibility="public" name="callMethod" returnType="mixed" params={[{"type":"string","name":"method","default":null},{"type":"array","name":"arguments","default":null},{"type":"BinderInterface|null","name":"modelBinder","default":"null"}]}>
Calling __call method
</ApiItem>
<ApiItem href="#mvcmicrolazyloader-getdefinition" visibility="public" name="getDefinition" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#mvcmicrolazyloader-gethandler" visibility="public" name="getHandler" returnType="object|null" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="definition" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="handler" type="object|null" default="null">
</ApiItem>

### Methods

<h4 id="mvcmicrolazyloader-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $definition );
```

Phalcon\Mvc\Micro\LazyLoader constructor

<h4 id="mvcmicrolazyloader-callmethod"><code>callMethod()</code></h4>

```php
public function callMethod(
string $method,
array $arguments,
BinderInterface|null $modelBinder = null
): mixed;
```

Calling __call method

<h4 id="mvcmicrolazyloader-getdefinition"><code>getDefinition()</code></h4>

```php
public function getDefinition(): string;
```

<h4 id="mvcmicrolazyloader-gethandler"><code>getHandler()</code></h4>

```php
public function getHandler(): object|null;
```

## Mvc\Micro\MiddlewareInterface

Interface

Allows to implement Phalcon\Mvc\Micro middleware in classes

- **`Phalcon\Mvc\Micro\MiddlewareInterface`**

`Phalcon\Mvc\Micro`

### Method Summary

<ApiItem href="#mvcmicromiddlewareinterface-call" visibility="public" name="call" returnType="" params={[{"type":"Micro","name":"application","default":null}]}>
Calls the middleware
</ApiItem>

### Methods

<h4 id="mvcmicromiddlewareinterface-call"><code>call()</code></h4>

```php
public function call( Micro $application );
```

Calls the middleware

## Mvc\Model

Abstract

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
$invoice = new Invoices();

$invoice->inv_status_flag = "mechanical";
$invoice->inv_title = "Test Invoice";
$invoice->inv_total = 1952;

if ($invoice->save() === false) {
echo "Umh, We can store invoices: ";

$messages = $invoice->getMessages();

foreach ($messages as $message) {
    echo $message;
}
} else {
echo "Great, a new invoice was saved successfully!";
}
```

Magic property and method resolution:

`__get($property)` resolves in order: a relation alias (returning unsaved
`dirtyRelated` records first, then a non-reusable single related model held
in the `related` cache - resultsets and reusable relations are never served
from that cache - otherwise the freshly fetched related records); then a
`get<Property>()` getter when one exists; otherwise it raises an
"undefined property" notice and returns null.

`__call()` / `__callStatic($method, $arguments)` resolve the `findBy<Field>`,
`findFirstBy<Field>`, and `countBy<Field>` magic finders through
`invokeFinder()`. The instance `__call()` additionally tries relation getters
and a behavior/listener `missingMethod()` hook. An unresolved method throws
`Phalcon\Mvc\Model\Exceptions\MethodNotFound`.

@template T of static

- `\stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/6.0/api/phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Mvc\Model`** - implements [`Phalcon\Mvc\EntityInterface`](#mvcentityinterface), [`Phalcon\Mvc\ModelInterface`](#mvcmodelinterface), [`Phalcon\Mvc\Model\ResultInterface`](#mvcmodelresultinterface), `\JsonSerializable`

`JsonSerializable` · `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Db\Column` · `Phalcon\Db\Enum` · `Phalcon\Db\Exceptions\InvalidWkb` · `Phalcon\Db\Geometry\WkbParser` · `Phalcon\Db\RawValue` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\Validation\ValidationInterface` · `Phalcon\Logger\LoggerInterface` · `Phalcon\Messages\Message` · `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\Model\BehaviorInterface` · `Phalcon\Mvc\Model\Criteria` · `Phalcon\Mvc\Model\CriteriaInterface` · `Phalcon\Mvc\Model\Eager\Loader` · `Phalcon\Mvc\Model\Eager\PathTree` · `Phalcon\Mvc\Model\Exception` · `Phalcon\Mvc\Model\Exceptions\BelongsToRequiresObject` · `Phalcon\Mvc\Model\Exceptions\BindTypeNotDefined` · `Phalcon\Mvc\Model\Exceptions\CannotResolveAttribute` · `Phalcon\Mvc\Model\Exceptions\ColumnNotInMap` · `Phalcon\Mvc\Model\Exceptions\ColumnNotInTableColumns` · `Phalcon\Mvc\Model\Exceptions\ColumnNotInTableMap` · `Phalcon\Mvc\Model\Exceptions\DataTypeNotDefined` · `Phalcon\Mvc\Model\Exceptions\IdentityNotInColumnMap` · `Phalcon\Mvc\Model\Exceptions\IdentityNotInTableColumns` · `Phalcon\Mvc\Model\Exceptions\InvalidDumpResultKey` · `Phalcon\Mvc\Model\Exceptions\InvalidEagerParameter` · `Phalcon\Mvc\Model\Exceptions\InvalidFindParameters` · `Phalcon\Mvc\Model\Exceptions\InvalidModelsManagerService` · `Phalcon\Mvc\Model\Exceptions\InvalidModelsMetadataService` · `Phalcon\Mvc\Model\Exceptions\MethodNotFound` · `Phalcon\Mvc\Model\Exceptions\ModelOrmServicesUnavailable` · `Phalcon\Mvc\Model\Exceptions\PrimaryKeyAttributeNotSet` · `Phalcon\Mvc\Model\Exceptions\PrimaryKeyRequired` · `Phalcon\Mvc\Model\Exceptions\PropertyNotAccessible` · `Phalcon\Mvc\Model\Exceptions\RecordCannotRefresh` · `Phalcon\Mvc\Model\Exceptions\RecordNotPersisted` · `Phalcon\Mvc\Model\Exceptions\RelationNotDefined` · `Phalcon\Mvc\Model\Exceptions\RelationRequiresObjectOrArray` · `Phalcon\Mvc\Model\Exceptions\SnapshotsDisabled` · `Phalcon\Mvc\Model\Exceptions\StaticMethodRequiresOneArgument` · `Phalcon\Mvc\Model\Exceptions\UnsupportedEagerHydration` · `Phalcon\Mvc\Model\Exceptions\UnsupportedEagerResultset` · `Phalcon\Mvc\Model\Exceptions\UpdateSnapshotDisabled` · `Phalcon\Mvc\Model\Hydration\CloneResultMapHydrate` · `Phalcon\Mvc\Model\ManagerInterface` · `Phalcon\Mvc\Model\MetaDataInterface` · `Phalcon\Mvc\Model\QueryInterface` · `Phalcon\Mvc\Model\Relation` · `Phalcon\Mvc\Model\ResultInterface` · `Phalcon\Mvc\Model\Resultset` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Mvc\Model\Resultset\Simple` · `Phalcon\Mvc\Model\Row` · `Phalcon\Mvc\Model\TransactionInterface` · `Phalcon\Mvc\Model\ValidationFailed` · `Phalcon\Support\Collection` · `Phalcon\Support\Collection\CollectionInterface` · `Phalcon\Support\Settings` · `Phalcon\Traits\Support\Helper\Str\CamelizeTrait` · `Phalcon\Traits\Support\Helper\Str\UncamelizeTrait` · `Psr\EventDispatcher\StoppableEventInterface` · `Throwable`

### Method Summary

<ApiItem href="#mvcmodel-__call" visibility="public" name="__call" returnType="" params={[{"type":"string","name":"method","default":null},{"type":"array","name":"arguments","default":null}]}>
Handles method calls when a method is not implemented
</ApiItem>
<ApiItem href="#mvcmodel-__callstatic" visibility="public" name="__callStatic" returnType="" params={[{"type":"string","name":"method","default":null},{"type":"array","name":"arguments","default":null}]}>
Handles method calls when a static method is not implemented
</ApiItem>
<ApiItem href="#mvcmodel-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array|null","name":"data","default":"null"},{"type":"DiInterface|null","name":"container","default":"null"},{"type":"ManagerInterface|null","name":"modelsManager","default":"null"}]}>
Phalcon\Mvc\Model constructor
</ApiItem>
<ApiItem href="#mvcmodel-__get" visibility="public" name="__get" returnType="" params={[{"type":"string","name":"property","default":null}]}>
Magic method to get related records using the relation alias as a
</ApiItem>
<ApiItem href="#mvcmodel-__isset" visibility="public" name="__isset" returnType="bool" params={[{"type":"string","name":"property","default":null}]}>
Magic method to check if a property is a valid relation
</ApiItem>
<ApiItem href="#mvcmodel-__serialize" visibility="public" name="__serialize" returnType="array" params={[]}>
Serializes a model
</ApiItem>
<ApiItem href="#mvcmodel-__set" visibility="public" name="__set" returnType="" params={[{"type":"string","name":"property","default":null},{"type":"mixed","name":"value","default":null}]}>
Magic method to assign values to the the model
</ApiItem>
<ApiItem href="#mvcmodel-__unserialize" visibility="public" name="__unserialize" returnType="void" params={[{"type":"array","name":"data","default":null}]}>
Unserializes an array to the model
</ApiItem>
<ApiItem href="#mvcmodel-addbehavior" visibility="public" name="addBehavior" returnType="void" params={[{"type":"BehaviorInterface","name":"behavior","default":null}]}>
Setups a behavior in a model
</ApiItem>
<ApiItem href="#mvcmodel-appendmessage" visibility="public" name="appendMessage" returnType="ModelInterface" params={[{"type":"MessageInterface","name":"message","default":null}]}>
Appends a customized message on the validation process
</ApiItem>
<ApiItem href="#mvcmodel-appendmessagesfrom" visibility="public" name="appendMessagesFrom" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Append messages to this model from another Model.
</ApiItem>
<ApiItem href="#mvcmodel-assign" visibility="public" name="assign" returnType="ModelInterface" params={[{"type":"array","name":"data","default":null},{"type":"mixed","name":"whiteList","default":"null"},{"type":"mixed","name":"dataColumnMap","default":"null"}]}>
Assigns values to a model from an array
</ApiItem>
<ApiItem href="#mvcmodel-average" visibility="public" name="average" returnType="float|ResultsetInterface" params={[{"type":"array","name":"parameters","default":"[]"}]}>
Returns the average value on a column for a result-set of rows matching
</ApiItem>
<ApiItem href="#mvcmodel-cloneresult" visibility="public" name="cloneResult" returnType="ModelInterface" params={[{"type":"ModelInterface","name":"base","default":null},{"type":"array","name":"data","default":null},{"type":"int","name":"dirtyState","default":"0"}]}>
Assigns values to a model from an array returning a new model
</ApiItem>
<ApiItem href="#mvcmodel-cloneresultmap" visibility="public" name="cloneResultMap" returnType="ModelInterface|ResultInterface" params={[{"type":"mixed","name":"base","default":null},{"type":"array","name":"data","default":null},{"type":"mixed","name":"columnMap","default":null},{"type":"int","name":"dirtyState","default":"0"},{"type":"bool|null","name":"keepSnapshots","default":"null"}]}>
Assigns values to a model from an array, returning a new model.
</ApiItem>
<ApiItem href="#mvcmodel-cloneresultmaphydrate" visibility="public" name="cloneResultMapHydrate" returnType="" params={[{"type":"array","name":"data","default":null},{"type":"mixed","name":"columnMap","default":null},{"type":"int","name":"hydrationMode","default":null}]}>
Returns an hydrated result based on the data and the column map
</ApiItem>
<ApiItem href="#mvcmodel-count" visibility="public" name="count" returnType="int|ResultsetInterface" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Counts how many records match the specified conditions.
</ApiItem>
<ApiItem href="#mvcmodel-create" visibility="public" name="create" returnType="bool" params={[]}>
Inserts a model instance. If the instance already exists in the
</ApiItem>
<ApiItem href="#mvcmodel-delete" visibility="public" name="delete" returnType="bool" params={[]}>
Deletes a model instance. Returning true on success or false otherwise.
</ApiItem>
<ApiItem href="#mvcmodel-dosave" visibility="public" name="doSave" returnType="bool" params={[{"type":"CollectionInterface","name":"visited","default":null}]}>
Inserted or updates model instance, expects a visited list of objects.
</ApiItem>
<ApiItem href="#mvcmodel-dump" visibility="public" name="dump" returnType="array" params={[]}>
Returns a simple representation of the object that can be used with
</ApiItem>
<ApiItem href="#mvcmodel-find" visibility="public" name="find" returnType="ResultsetInterface" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Query for a set of records that match the specified conditions
</ApiItem>
<ApiItem href="#mvcmodel-findfirst" visibility="public" name="findFirst" returnType="" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Query the first record that matches the specified conditions
</ApiItem>
<ApiItem href="#mvcmodel-fireevent" visibility="public" name="fireEvent" returnType="bool|null" params={[{"type":"string","name":"eventName","default":null}]}>
Fires an event, implicitly calls behaviors and listeners in the events
</ApiItem>
<ApiItem href="#mvcmodel-fireeventcancel" visibility="public" name="fireEventCancel" returnType="bool|null" params={[{"type":"string","name":"eventName","default":null}]}>
Fires an event, implicitly calls behaviors and listeners in the events
</ApiItem>
<ApiItem href="#mvcmodel-getchangedfields" visibility="public" name="getChangedFields" returnType="array" params={[]}>
Returns a list of changed values.
</ApiItem>
<ApiItem href="#mvcmodel-getdirtystate" visibility="public" name="getDirtyState" returnType="int" params={[]}>
Returns one of the DIRTY_STATE_* constants telling if the record exists
</ApiItem>
<ApiItem href="#mvcmodel-geteventsmanager" visibility="public" name="getEventsManager" returnType="EventsManagerInterface|null" params={[]}>
Returns the custom events manager or null if there is no custom events manager
</ApiItem>
<ApiItem href="#mvcmodel-getmessages" visibility="public" name="getMessages" returnType="array" params={[{"type":"array|string|null","name":"filter","default":"null"}]}>
Returns array of validation messages
</ApiItem>
<ApiItem href="#mvcmodel-getmodelsmanager" visibility="public" name="getModelsManager" returnType="ManagerInterface" params={[]}>
Returns the models manager related to the entity instance
</ApiItem>
<ApiItem href="#mvcmodel-getmodelsmetadata" visibility="public" name="getModelsMetaData" returnType="MetaDataInterface" params={[]}>
\{@inheritdoc\}
</ApiItem>
<ApiItem href="#mvcmodel-getoldsnapshotdata" visibility="public" name="getOldSnapshotData" returnType="array" params={[]}>
Returns the internal old snapshot data
</ApiItem>
<ApiItem href="#mvcmodel-getoperationmade" visibility="public" name="getOperationMade" returnType="int" params={[]}>
Returns the type of the latest operation performed by the ORM
</ApiItem>
<ApiItem href="#mvcmodel-getreadconnection" visibility="public" name="getReadConnection" returnType="AdapterInterface" params={[]}>
Gets the connection used to read data for the model
</ApiItem>
<ApiItem href="#mvcmodel-getreadconnectionservice" visibility="public" name="getReadConnectionService" returnType="string" params={[]}>
Returns the DependencyInjection connection service name used to read data
</ApiItem>
<ApiItem href="#mvcmodel-getrelated" visibility="public" name="getRelated" returnType="mixed" params={[{"type":"string","name":"alias","default":null},{"type":"mixed","name":"arguments","default":"null"}]}>
Returns related records based on defined relations
</ApiItem>
<ApiItem href="#mvcmodel-getschema" visibility="public" name="getSchema" returnType="string|null" params={[]}>
Returns schema name where the mapped table is located
</ApiItem>
<ApiItem href="#mvcmodel-getsnapshotdata" visibility="public" name="getSnapshotData" returnType="array" params={[]}>
Returns the internal snapshot data
</ApiItem>
<ApiItem href="#mvcmodel-getsource" visibility="public" name="getSource" returnType="string" params={[]}>
Returns the table name mapped in the model
</ApiItem>
<ApiItem href="#mvcmodel-gettransaction" visibility="public" name="getTransaction" returnType="TransactionInterface|null" params={[]}>
</ApiItem>
<ApiItem href="#mvcmodel-getupdatedfields" visibility="public" name="getUpdatedFields" returnType="array" params={[]}>
Returns a list of updated values.
</ApiItem>
<ApiItem href="#mvcmodel-getwriteconnection" visibility="public" name="getWriteConnection" returnType="AdapterInterface" params={[]}>
Gets the connection used to write data to the model
</ApiItem>
<ApiItem href="#mvcmodel-getwriteconnectionservice" visibility="public" name="getWriteConnectionService" returnType="string" params={[]}>
Returns the DependencyInjection connection service name used to write
</ApiItem>
<ApiItem href="#mvcmodel-haschanged" visibility="public" name="hasChanged" returnType="bool" params={[{"type":"mixed","name":"fieldName","default":"null"},{"type":"bool","name":"allFields","default":"false"}]}>
Check if a specific attribute has changed
</ApiItem>
<ApiItem href="#mvcmodel-hassnapshotdata" visibility="public" name="hasSnapshotData" returnType="bool" params={[]}>
Checks if the object has internal snapshot data
</ApiItem>
<ApiItem href="#mvcmodel-hasupdated" visibility="public" name="hasUpdated" returnType="bool" params={[{"type":"mixed","name":"fieldName","default":"null"},{"type":"bool","name":"allFields","default":"false"}]}>
Check if a specific attribute was updated
</ApiItem>
<ApiItem href="#mvcmodel-isrelationshiploaded" visibility="public" name="isRelationshipLoaded" returnType="bool" params={[{"type":"string","name":"relationshipAlias","default":null}]}>
Checks if saved related records have already been loaded.
</ApiItem>
<ApiItem href="#mvcmodel-jsonserialize" visibility="public" name="jsonSerialize" returnType="array" params={[]}>
Serializes the object for json_encode
</ApiItem>
<ApiItem href="#mvcmodel-maximum" visibility="public" name="maximum" returnType="mixed" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Returns the maximum value of a column for a result-set of rows that match
</ApiItem>
<ApiItem href="#mvcmodel-minimum" visibility="public" name="minimum" returnType="mixed" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Returns the minimum value of a column for a result-set of rows that match
</ApiItem>
<ApiItem href="#mvcmodel-query" visibility="public" name="query" returnType="CriteriaInterface" params={[{"type":"DiInterface|null","name":"container","default":"null"}]}>
Create a criteria for a specific model
</ApiItem>
<ApiItem href="#mvcmodel-readattribute" visibility="public" name="readAttribute" returnType="mixed" params={[{"type":"string","name":"attribute","default":null}]}>
Reads an attribute value by its name
</ApiItem>
<ApiItem href="#mvcmodel-refresh" visibility="public" name="refresh" returnType="ModelInterface" params={[]}>
Refreshes the model attributes re-querying the record from the database
</ApiItem>
<ApiItem href="#mvcmodel-save" visibility="public" name="save" returnType="bool" params={[]}>
Inserts or updates a model instance. Returning true on success or false
</ApiItem>
<ApiItem href="#mvcmodel-serialize" visibility="public" name="serialize" returnType="string|null" params={[]}>
Serializes the object ignoring connections, services, related objects or
</ApiItem>
<ApiItem href="#mvcmodel-setconnectionservice" visibility="public" name="setConnectionService" returnType="void" params={[{"type":"string","name":"connectionService","default":null}]}>
Sets the DependencyInjection connection service name
</ApiItem>
<ApiItem href="#mvcmodel-setdirtystate" visibility="public" name="setDirtyState" returnType="bool|ModelInterface" params={[{"type":"int","name":"dirtyState","default":null}]}>
Sets the dirty state of the object using one of the DIRTY_STATE_* constants
</ApiItem>
<ApiItem href="#mvcmodel-seteventsmanager" visibility="public" name="setEventsManager" returnType="" params={[{"type":"EventsManagerInterface","name":"eventsManager","default":null}]}>
Sets a custom events manager
</ApiItem>
<ApiItem href="#mvcmodel-setoldsnapshotdata" visibility="public" name="setOldSnapshotData" returnType="" params={[{"type":"array","name":"data","default":null},{"type":"mixed","name":"columnMap","default":"null"}]}>
Sets the record's old snapshot data.
</ApiItem>
<ApiItem href="#mvcmodel-setreadconnectionservice" visibility="public" name="setReadConnectionService" returnType="void" params={[{"type":"string","name":"connectionService","default":null}]}>
Sets the DependencyInjection connection service name used to read data
</ApiItem>
<ApiItem href="#mvcmodel-setrelated" visibility="public" name="setRelated" returnType="ModelInterface" params={[{"type":"string","name":"alias","default":null},{"type":"mixed","name":"records","default":null}]}>
Stores related records in the relation cache, so that a subsequent
</ApiItem>
<ApiItem href="#mvcmodel-setsnapshotdata" visibility="public" name="setSnapshotData" returnType="void" params={[{"type":"array","name":"data","default":null},{"type":"mixed","name":"columnMap","default":"null"}]}>
Sets the record's snapshot data.
</ApiItem>
<ApiItem href="#mvcmodel-setsync" visibility="public" name="setSync" returnType="ModelInterface" params={[{"type":"mixed","name":"elements","default":"null"},{"type":"bool","name":"enabled","default":"true"}]}>
Marks one or more many-to-many relationships to be synchronized (or not)
</ApiItem>
<ApiItem href="#mvcmodel-settransaction" visibility="public" name="setTransaction" returnType="ModelInterface" params={[{"type":"TransactionInterface","name":"transaction","default":null}]}>
Sets a transaction related to the Model instance
</ApiItem>
<ApiItem href="#mvcmodel-setwriteconnectionservice" visibility="public" name="setWriteConnectionService" returnType="void" params={[{"type":"string","name":"connectionService","default":null}]}>
Sets the DependencyInjection connection service name used to write data
</ApiItem>
<ApiItem href="#mvcmodel-setup" visibility="public" name="setup" returnType="void" params={[{"type":"array","name":"options","default":null}]}>
Enables/disables options in the ORM.
</ApiItem>
<ApiItem href="#mvcmodel-skipoperation" visibility="public" name="skipOperation" returnType="void" params={[{"type":"bool","name":"skip","default":null}]}>
Skips the current operation forcing a success state
</ApiItem>
<ApiItem href="#mvcmodel-sum" visibility="public" name="sum" returnType="float|ResultsetInterface" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Calculates the sum on a column for a result-set of rows that match the
</ApiItem>
<ApiItem href="#mvcmodel-toarray" visibility="public" name="toArray" returnType="array" params={[{"type":"mixed","name":"columns","default":"null"},{"type":"bool","name":"useGetter","default":"true"}]}>
Returns the instance as an array representation
</ApiItem>
<ApiItem href="#mvcmodel-unserialize" visibility="public" name="unserialize" returnType="" params={[{"type":"string","name":"data","default":null}]}>
Unserializes the object from a serialized string
</ApiItem>
<ApiItem href="#mvcmodel-update" visibility="public" name="update" returnType="bool" params={[]}>
Updates a model instance. If the instance does not exist in the
</ApiItem>
<ApiItem href="#mvcmodel-validationhasfailed" visibility="public" name="validationHasFailed" returnType="bool" params={[]}>
Check whether validation process has generated any messages
</ApiItem>
<ApiItem href="#mvcmodel-writeattribute" visibility="public" name="writeAttribute" returnType="void" params={[{"type":"string","name":"attribute","default":null},{"type":"mixed","name":"value","default":null}]}>
Writes an attribute value by its name
</ApiItem>
<ApiItem href="#mvcmodel-allowemptystringvalues" visibility="protected" name="allowEmptyStringValues" returnType="void" params={[{"type":"array","name":"attributes","default":null}]}>
Sets a list of attributes that must be skipped from the
</ApiItem>
<ApiItem href="#mvcmodel-belongsto" visibility="protected" name="belongsTo" returnType="Relation" params={[{"type":"mixed","name":"fields","default":null},{"type":"string","name":"referenceModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup a reverse 1-1 or n-1 relation between two models
</ApiItem>
<ApiItem href="#mvcmodel-canceloperation" visibility="protected" name="cancelOperation" returnType="void" params={[]}>
Cancel the current operation
</ApiItem>
<ApiItem href="#mvcmodel-checkforeignkeysrestrict" visibility="protected" name="checkForeignKeysRestrict" returnType="bool" params={[]}>
Reads "belongs to" relations and check the virtual foreign keys when
</ApiItem>
<ApiItem href="#mvcmodel-checkforeignkeysreversecascade" visibility="protected" name="checkForeignKeysReverseCascade" returnType="bool" params={[]}>
Reads both "hasMany" and "hasOne" relations and checks the virtual
</ApiItem>
<ApiItem href="#mvcmodel-checkforeignkeysreverserestrict" visibility="protected" name="checkForeignKeysReverseRestrict" returnType="bool" params={[]}>
Reads both "hasMany" and "hasOne" relations and checks the virtual
</ApiItem>
<ApiItem href="#mvcmodel-collectrelatedtosave" visibility="protected" name="collectRelatedToSave" returnType="array" params={[]}>
Collects previously queried (belongs-to, has-one and has-one-through)
</ApiItem>
<ApiItem href="#mvcmodel-dolowinsert" visibility="protected" name="doLowInsert" returnType="bool" params={[{"type":"MetaDataInterface","name":"metaData","default":null},{"type":"AdapterInterface","name":"connection","default":null},{"type":"array|string","name":"table","default":null},{"type":"bool|string","name":"identityField","default":null}]}>
Sends a pre-build INSERT SQL statement to the relational database system
</ApiItem>
<ApiItem href="#mvcmodel-dolowupdate" visibility="protected" name="doLowUpdate" returnType="bool" params={[{"type":"MetaDataInterface","name":"metaData","default":null},{"type":"AdapterInterface","name":"connection","default":null},{"type":"array|string","name":"table","default":null}]}>
Sends a pre-build UPDATE SQL statement to the relational database system
</ApiItem>
<ApiItem href="#mvcmodel-geteventlogger" visibility="protected" name="getEventLogger" returnType="LoggerInterface|null" params={[{"type":"object|null","name":"container","default":null}]}>
Resolves an optional logger from the container. Returns null when
</ApiItem>
<ApiItem href="#mvcmodel-getrelatedrecords" visibility="protected" name="getRelatedRecords" returnType="" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"method","default":null},{"type":"array","name":"arguments","default":null}]}>
Returns related records defined relations depending on the method name.
</ApiItem>
<ApiItem href="#mvcmodel-groupresult" visibility="protected" name="groupResult" returnType="mixed" params={[{"type":"string","name":"functionName","default":null},{"type":"string","name":"alias","default":null},{"type":"array|string|null","name":"parameters","default":"null"}]}>
Generate a PHQL SELECT statement for an aggregate
</ApiItem>
<ApiItem href="#mvcmodel-has" visibility="protected" name="has" returnType="bool" params={[{"type":"MetaDataInterface","name":"metaData","default":null},{"type":"AdapterInterface","name":"connection","default":null}]}>
Checks whether the current record already exists
</ApiItem>
<ApiItem href="#mvcmodel-hasmany" visibility="protected" name="hasMany" returnType="Relation" params={[{"type":"mixed","name":"fields","default":null},{"type":"string","name":"referenceModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup a 1-n relation between two models
</ApiItem>
<ApiItem href="#mvcmodel-hasmanytomany" visibility="protected" name="hasManyToMany" returnType="Relation" params={[{"type":"mixed","name":"fields","default":null},{"type":"string","name":"intermediateModel","default":null},{"type":"mixed","name":"intermediateFields","default":null},{"type":"mixed","name":"intermediateReferencedFields","default":null},{"type":"string","name":"referenceModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup an n-n relation between two models, through an intermediate
</ApiItem>
<ApiItem href="#mvcmodel-hasone" visibility="protected" name="hasOne" returnType="Relation" params={[{"type":"mixed","name":"fields","default":null},{"type":"string","name":"referenceModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup a 1-1 relation between two models
</ApiItem>
<ApiItem href="#mvcmodel-hasonethrough" visibility="protected" name="hasOneThrough" returnType="Relation" params={[{"type":"mixed","name":"fields","default":null},{"type":"string","name":"intermediateModel","default":null},{"type":"mixed","name":"intermediateFields","default":null},{"type":"mixed","name":"intermediateReferencedFields","default":null},{"type":"string","name":"referenceModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup a 1-1 relation between two models, through an intermediate
</ApiItem>
<ApiItem href="#mvcmodel-invokefinder" visibility="protected" name="invokeFinder" returnType="" params={[{"type":"string","name":"method","default":null},{"type":"array","name":"arguments","default":null}]}>
Try to check if the query must invoke a finder
</ApiItem>
<ApiItem href="#mvcmodel-keepsnapshots" visibility="protected" name="keepSnapshots" returnType="void" params={[{"type":"bool","name":"keepSnapshot","default":null}]}>
Sets if the model must keep the original record snapshot in memory
</ApiItem>
<ApiItem href="#mvcmodel-possiblesetter" visibility="protected" name="possibleSetter" returnType="bool" params={[{"type":"string","name":"property","default":null},{"type":"mixed","name":"value","default":null}]}>
Check for, and attempt to use, possible setter.
</ApiItem>
<ApiItem href="#mvcmodel-postsave" visibility="protected" name="postSave" returnType="bool" params={[{"type":"bool","name":"success","default":null},{"type":"bool","name":"exists","default":null}]}>
Executes internal events after save a record
</ApiItem>
<ApiItem href="#mvcmodel-postsaverelatedrecords" visibility="protected" name="postSaveRelatedRecords" returnType="bool" params={[{"type":"AdapterInterface","name":"connection","default":null},{"type":"array","name":"related","default":null},{"type":"CollectionInterface","name":"visited","default":null}]}>
Save the related records assigned in the has-one/has-many relations
</ApiItem>
<ApiItem href="#mvcmodel-presave" visibility="protected" name="preSave" returnType="bool" params={[{"type":"MetaDataInterface","name":"metaData","default":null},{"type":"bool","name":"exists","default":null},{"type":"mixed","name":"identityField","default":null}]}>
Executes internal hooks before save a record
</ApiItem>
<ApiItem href="#mvcmodel-presaverelatedrecords" visibility="protected" name="preSaveRelatedRecords" returnType="bool" params={[{"type":"AdapterInterface","name":"connection","default":null},{"type":"array","name":"related","default":null},{"type":"CollectionInterface","name":"visited","default":null}]}>
Saves related records that must be stored prior to save the master record
</ApiItem>
<ApiItem href="#mvcmodel-setschema" visibility="protected" name="setSchema" returnType="ModelInterface" params={[{"type":"string","name":"schema","default":null}]}>
Sets schema name where the mapped table is located
</ApiItem>
<ApiItem href="#mvcmodel-setsource" visibility="protected" name="setSource" returnType="ModelInterface" params={[{"type":"string","name":"source","default":null}]}>
Sets the table name to which model should be mapped
</ApiItem>
<ApiItem href="#mvcmodel-skipattributes" visibility="protected" name="skipAttributes" returnType="void" params={[{"type":"array","name":"attributes","default":null}]}>
Sets a list of attributes that must be skipped from the
</ApiItem>
<ApiItem href="#mvcmodel-skipattributesoncreate" visibility="protected" name="skipAttributesOnCreate" returnType="void" params={[{"type":"array","name":"attributes","default":null}]}>
Sets a list of attributes that must be skipped from the
</ApiItem>
<ApiItem href="#mvcmodel-skipattributesonupdate" visibility="protected" name="skipAttributesOnUpdate" returnType="void" params={[{"type":"array","name":"attributes","default":null}]}>
Sets a list of attributes that must be skipped from the
</ApiItem>
<ApiItem href="#mvcmodel-usedynamicupdate" visibility="protected" name="useDynamicUpdate" returnType="void" params={[{"type":"bool","name":"dynamicUpdate","default":null}]}>
Sets if a model must use dynamic update instead of the all-field update
</ApiItem>
<ApiItem href="#mvcmodel-validate" visibility="protected" name="validate" returnType="bool" params={[{"type":"ValidationInterface","name":"validator","default":null}]}>
Executes validators on every validation call
</ApiItem>

### Constants

<ApiItem kind="constant" name="DIRTY_STATE_DETACHED" type="int" default="2">
</ApiItem>
<ApiItem kind="constant" name="DIRTY_STATE_PERSISTENT" type="int" default="0">
</ApiItem>
<ApiItem kind="constant" name="DIRTY_STATE_TRANSIENT" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="OP_CREATE" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="OP_DELETE" type="int" default="3">
</ApiItem>
<ApiItem kind="constant" name="OP_NONE" type="int" default="0">
</ApiItem>
<ApiItem kind="constant" name="OP_UPDATE" type="int" default="2">
</ApiItem>
<ApiItem kind="constant" name="TRANSACTION_INDEX" type="string" default="&quot;transaction&quot;">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="dirtyRelated" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="dirtyState" type="int" default="1">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="errorMessages" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="modelsManager" type="ManagerInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="modelsMetaData" type="MetaDataInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="oldSnapshot" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="operationMade" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="rawValues" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="related" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="skipped" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="snapshot" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="syncRelated" type="array" default="[]">
Per-save many-to-many sync overrides, keyed by lowercased relation
alias (or "*" wildcard) => bool. Cleared after each save().
</ApiItem>
<ApiItem kind="property" visibility="protected" name="transaction" type="TransactionInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="uniqueKey" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="uniqueParams" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="uniqueTypes" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="mvcmodel-__call"><code>__call()</code></h4>

```php
public function __call(
string $method,
array $arguments
);
```

Handles method calls when a method is not implemented

<h4 id="mvcmodel-__callstatic"><code>__callStatic()</code></h4>

```php
public static function __callStatic(
string $method,
array $arguments
);
```

Handles method calls when a static method is not implemented

<h4 id="mvcmodel-__construct"><code>__construct()</code></h4>

```php
final public function __construct(
array|null $data = null,
DiInterface|null $container = null,
ManagerInterface|null $modelsManager = null
);
```

Phalcon\Mvc\Model constructor

<h4 id="mvcmodel-__get"><code>__get()</code></h4>

```php
public function __get( string $property );
```

Magic method to get related records using the relation alias as a
property

<h4 id="mvcmodel-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $property ): bool;
```

Magic method to check if a property is a valid relation

<h4 id="mvcmodel-__serialize"><code>__serialize()</code></h4>

```php
public function __serialize(): array;
```

Serializes a model

<h4 id="mvcmodel-__set"><code>__set()</code></h4>

```php
public function __set(
string $property,
mixed $value
);
```

Magic method to assign values to the the model

<h4 id="mvcmodel-__unserialize"><code>__unserialize()</code></h4>

```php
public function __unserialize( array $data ): void;
```

Unserializes an array to the model

<h4 id="mvcmodel-addbehavior"><code>addBehavior()</code></h4>

```php
public function addBehavior( BehaviorInterface $behavior ): void;
```

Setups a behavior in a model

```php
use Phalcon\Mvc\Model;
use Phalcon\Mvc\Model\Behavior\Timestampable;

class Invoices extends Model
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

<h4 id="mvcmodel-appendmessage"><code>appendMessage()</code></h4>

```php
public function appendMessage( MessageInterface $message ): ModelInterface;
```

Appends a customized message on the validation process

```php
use Phalcon\Mvc\Model;
use Phalcon\Messages\Message as Message;

class Invoices extends Model
{
public function beforeSave()
{
    if ($this->name === "Peter") {
        $message = new Message(
            "Sorry, but an invoice cannot be named Peter"
        );

        $this->appendMessage($message);
    }
}
}
```

<h4 id="mvcmodel-appendmessagesfrom"><code>appendMessagesFrom()</code></h4>

```php
public function appendMessagesFrom( ModelInterface $model ): void;
```

Append messages to this model from another Model.

<h4 id="mvcmodel-assign"><code>assign()</code></h4>

```php
public function assign(
array $data,
mixed $whiteList = null,
mixed $dataColumnMap = null
): ModelInterface;
```

Assigns values to a model from an array

```php
$invoice->assign(
[
    "type" => "mechanical",
    "name" => "Test Invoice",
    "inv_total" => 100,
]
);

// Assign by db row, column map needed
$invoice->assign(
$dbRow,
[
    "db_type" => "type",
    "db_name" => "name",
    "db_year" => "year",
]
);

// Allow assign only name and year
$invoice->assign(
$_POST,
[
    "inv_title",
    "inv_total",
]
);

// By default assign method will use setters if exist, you can disable
// it by using ini_set to directly use properties

ini_set("orm.disable_assign_setters", true);

$invoice->assign(
$_POST,
[
    "inv_title",
    "inv_total",
]
);
```

<h4 id="mvcmodel-average"><code>average()</code></h4>

```php
public static function average( array $parameters = [] ): float|ResultsetInterface;
```

Returns the average value on a column for a result-set of rows matching
the specified conditions.

Returned value will be a float for simple queries or a ResultsetInterface
instance for when the GROUP condition is used. The results will
contain the average of each group.

```php
// What's the average price of invoices?
$average = Invoices::average(
[
    "column" => "inv_total",
]
);

echo "The average price is ", $average, "\n";

// What's the average price of paid invoices?
$average = Invoices::average(
[
    "inv_status_flag = 1",
    "column" => "inv_total",
]
);

echo "The average price of paid invoices is ", $average, "\n";
```

<h4 id="mvcmodel-cloneresult"><code>cloneResult()</code></h4>

```php
public static function cloneResult(
ModelInterface $base,
array $data,
int $dirtyState = 0
): ModelInterface;
```

Assigns values to a model from an array returning a new model

```php
$invoice = Phalcon\Mvc\Model::cloneResult(
new Invoices(),
[
    "type" => "mechanical",
    "name" => "Test Invoice",
    "inv_total" => 100,
]
);
```

<h4 id="mvcmodel-cloneresultmap"><code>cloneResultMap()</code></h4>

```php
public static function cloneResultMap(
mixed $base,
array $data,
mixed $columnMap,
int $dirtyState = 0,
bool|null $keepSnapshots = null
): ModelInterface|ResultInterface;
```

Assigns values to a model from an array, returning a new model.

```php
$invoice = \Phalcon\Mvc\Model::cloneResultMap(
new Invoices(),
[
    "type" => "mechanical",
    "name" => "Test Invoice",
    "inv_total" => 100,
]
);
```

<h4 id="mvcmodel-cloneresultmaphydrate"><code>cloneResultMapHydrate()</code></h4>

```php
public static function cloneResultMapHydrate(
array $data,
mixed $columnMap,
int $hydrationMode
);
```

Returns an hydrated result based on the data and the column map

<h4 id="mvcmodel-count"><code>count()</code></h4>

```php
public static function count( mixed $parameters = null ): int|ResultsetInterface;
```

Counts how many records match the specified conditions.

Returns an integer for simple queries or a ResultsetInterface
instance for when the GROUP condition is used. The results will
contain the count of each group.

```php
// How many invoices are there?
$number = Invoices::count();

echo "There are ", $number, "\n";

// How many paid invoices are there?
$number = Invoices::count("inv_status_flag = 1");

echo "There are ", $number, " paid invoices\n";
```

<h4 id="mvcmodel-create"><code>create()</code></h4>

```php
public function create(): bool;
```

Inserts a model instance. If the instance already exists in the
persistence it will throw an exception
Returning true on success or false otherwise.

```php
// Creating a new invoice
$invoice = new Invoices();

$invoice->inv_status_flag = "mechanical";
$invoice->inv_title = "Test Invoice";
$invoice->inv_total = 1952;

$invoice->create();

// Passing an array to create
$invoice = new Invoices();

$invoice->assign(
[
    "type" => "mechanical",
    "name" => "Test Invoice",
    "inv_total" => 100,
]
);

$invoice->create();
```

<h4 id="mvcmodel-delete"><code>delete()</code></h4>

```php
public function delete(): bool;
```

Deletes a model instance. Returning true on success or false otherwise.

```php
$invoice = Invoices::findFirst("id=100");

$invoice->delete();

$invoices = Invoices::find("inv_status_flag = 1");

foreach ($invoices as $invoice) {
$invoice->delete();
}
```

<h4 id="mvcmodel-dosave"><code>doSave()</code></h4>

```php
public function doSave( CollectionInterface $visited ): bool;
```

Inserted or updates model instance, expects a visited list of objects.

<h4 id="mvcmodel-dump"><code>dump()</code></h4>

```php
public function dump(): array;
```

Returns a simple representation of the object that can be used with
`var_dump()`

```php
var_dump(
$invoice->dump()
);
```

<h4 id="mvcmodel-find"><code>find()</code></h4>

```php
public static function find( mixed $parameters = null ): ResultsetInterface;
```

Query for a set of records that match the specified conditions

```php
// How many invoices are there?
$invoices = Invoices::find();

echo "There are ", count($invoices), "\n";

// How many paid invoices are there?
$invoices = Invoices::find(
"inv_status_flag = 1"
);

echo "There are ", count($invoices), "\n";

// Get and print virtual invoices ordered by name
$invoices = Invoices::find(
[
    "type = 'virtual'",
    "order" => "name",
]
);

foreach ($invoices as $invoice) {
echo $invoice->inv_title, "\n";
}

// Get first 100 virtual invoices ordered by name
$invoices = Invoices::find(
[
    "type = 'virtual'",
    "order" => "name",
    "limit" => 100,
]
);

foreach ($invoices as $invoice) {
echo $invoice->inv_title, "\n";
}

// encapsulate find it into an running transaction esp. useful for application unit-tests
// or complex business logic where we wanna control which transactions are used.

$myTransaction = new Transaction(\Phalcon\Di\Di::getDefault());
$myTransaction->begin();

$newInvoices = new Invoices();
$newInvoices->setTransaction($myTransaction);

$newInvoices->assign(
[
    'name' => 'test',
    'type' => 'mechanical',
    'year' => 1944,
]
);

$newInvoices->save();

$resultInsideTransaction = Invoices::find(
[
    'name' => 'test',
    Model::TRANSACTION_INDEX => $myTransaction,
]
);

$resultOutsideTransaction = Invoices::find(['name' => 'test']);

foreach ($setInsideTransaction as $invoice) {
echo $invoice->inv_title, "\n";
}

foreach ($setOutsideTransaction as $invoice) {
echo $invoice->inv_title, "\n";
}

// reverts all not commited changes
$myTransaction->rollback();

// creating two different transactions
$myTransaction1 = new Transaction(\Phalcon\Di\Di::getDefault());
$myTransaction1->begin();
$myTransaction2 = new Transaction(\Phalcon\Di\Di::getDefault());
$myTransaction2->begin();

 // add a new invoices
$firstNewInvoices = new Invoices();
$firstNewInvoices->setTransaction($myTransaction1);
$firstNewInvoices->assign(
[
    'name' => 'first-transaction-invoice',
    'type' => 'mechanical',
    'year' => 1944,
]
);
$firstNewInvoices->save();

$secondNewInvoices = new Invoices();
$secondNewInvoices->setTransaction($myTransaction2);
$secondNewInvoices->assign(
[
    'name' => 'second-transaction-invoice',
    'type' => 'fictional',
    'year' => 1984,
]
);
$secondNewInvoices->save();

// this transaction will find the invoice.
$resultInFirstTransaction = Invoices::find(
[
    'name'                   => 'first-transaction-invoice',
    Model::TRANSACTION_INDEX => $myTransaction1,
]
);

// this transaction won't find the invoice.
$resultInSecondTransaction = Invoices::find(
[
    'name'                   => 'first-transaction-invoice',
    Model::TRANSACTION_INDEX => $myTransaction2,
]
);

// this transaction won't find the invoice.
$resultOutsideAnyExplicitTransaction = Invoices::find(
[
    'name' => 'first-transaction-invoice',
]
);

// this transaction won't find the invoice.
$resultInFirstTransaction = Invoices::find(
[
    'name'                   => 'second-transaction-invoice',
    Model::TRANSACTION_INDEX => $myTransaction2,
]
);

// this transaction will find the invoice.
$resultInSecondTransaction = Invoices::find(
[
    'name'                   => 'second-transaction-invoice',
    Model::TRANSACTION_INDEX => $myTransaction1,
]
);

// this transaction won't find the invoice.
$resultOutsideAnyExplicitTransaction = Invoices::find(
[
    'name' => 'second-transaction-invoice',
]
);

$transaction1->rollback();
$transaction2->rollback();
```

@option string "conditions"
@option string "columns"
@option array  "bind"
@option array  "bindTypes"
@option string "order"
@option int    "limit"
@option int    "offset"
@option string "group"
@option bool   "for_updated"
@option bool   "shared_lock"
@option array  "cache" \{
@option string "lifetime"
@option string "key"
     \},
@option ?bool  "hydration"
\}

<h4 id="mvcmodel-findfirst"><code>findFirst()</code></h4>

```php
public static function findFirst( mixed $parameters = null );
```

Query the first record that matches the specified conditions

```php
// What's the first invoice in invoices table?
$invoice = Invoices::findFirst();

echo "The invoice name is ", $invoice->inv_title;

// What's the first paid invoice in invoices table?
$invoice = Invoices::findFirst(
"inv_status_flag = 1"
);

echo "The first paid invoice name is ", $invoice->inv_title;

// Get first virtual invoice ordered by name
$invoice = Invoices::findFirst(
[
    "type = 'virtual'",
    "order" => "name",
]
);

echo "The first virtual invoice name is ", $invoice->inv_title;

// behavior with transaction
$myTransaction = new Transaction(\Phalcon\Di\Di::getDefault());
$myTransaction->begin();

$newInvoices = new Invoices();
$newInvoices->setTransaction($myTransaction);
$newInvoices->assign(
[
    'name' => 'test',
    'type' => 'mechanical',
    'year' => 1944,
]
);
$newInvoices->save();

$findsAInvoices = Invoices::findFirst(
[
    'name'                   => 'test',
    Model::TRANSACTION_INDEX => $myTransaction,
]
);

$doesNotFindAInvoices = Invoices::findFirst(
[
    'name' => 'test',
]
);

var_dump($findAInvoices);
var_dump($doesNotFindAInvoices);

$transaction->commit();

$doesFindTheInvoicesNow = Invoices::findFirst(
[
    'name' => 'test',
]
);
```

@option string "conditions"
@option string "columns"
@option array  "bind"
@option array  "bindTypes"
@option string "order"
@option int    "limit"
@option int    "offset"
@option string "group"
@option bool   "for_updated"
@option bool   "shared_lock"
@option array  "cache" \{
@option string "lifetime"
@option string "key"
     \},
@option ?bool  "hydration"
\}

<h4 id="mvcmodel-fireevent"><code>fireEvent()</code></h4>

```php
public function fireEvent( string $eventName ): bool|null;
```

Fires an event, implicitly calls behaviors and listeners in the events
manager are notified

<h4 id="mvcmodel-fireeventcancel"><code>fireEventCancel()</code></h4>

```php
public function fireEventCancel( string $eventName ): bool|null;
```

Fires an event, implicitly calls behaviors and listeners in the events
manager are notified
This method stops if one of the callbacks/listeners returns bool false

<h4 id="mvcmodel-getchangedfields"><code>getChangedFields()</code></h4>

```php
public function getChangedFields(): array;
```

Returns a list of changed values.

```php
$invoices = Invoices::findFirst();
print_r($invoices->getChangedFields()); // []

$invoices->deleted = 'Y';

$invoices->getChangedFields();
print_r($invoices->getChangedFields()); // ["deleted"]
```

<h4 id="mvcmodel-getdirtystate"><code>getDirtyState()</code></h4>

```php
public function getDirtyState(): int;
```

Returns one of the DIRTY_STATE_* constants telling if the record exists
in the database or not

<h4 id="mvcmodel-geteventsmanager"><code>getEventsManager()</code></h4>

```php
public function getEventsManager(): EventsManagerInterface|null;
```

Returns the custom events manager or null if there is no custom events manager

<h4 id="mvcmodel-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages( array|string|null $filter = null ): array;
```

Returns array of validation messages

```php
$invoice = new Invoices();

$invoice->inv_status_flag = "mechanical";
$invoice->inv_title = "Test Invoice";
$invoice->inv_total = 1952;

if ($invoice->save() === false) {
echo "Umh, We can't store invoices right now ";

$messages = $invoice->getMessages();

foreach ($messages as $message) {
    echo $message;
}
} else {
echo "Great, a new invoice was saved successfully!";
}
```

<h4 id="mvcmodel-getmodelsmanager"><code>getModelsManager()</code></h4>

```php
public function getModelsManager(): ManagerInterface;
```

Returns the models manager related to the entity instance

<h4 id="mvcmodel-getmodelsmetadata"><code>getModelsMetaData()</code></h4>

```php
public function getModelsMetaData(): MetaDataInterface;
```

\{@inheritdoc\}

<h4 id="mvcmodel-getoldsnapshotdata"><code>getOldSnapshotData()</code></h4>

```php
public function getOldSnapshotData(): array;
```

Returns the internal old snapshot data

<h4 id="mvcmodel-getoperationmade"><code>getOperationMade()</code></h4>

```php
public function getOperationMade(): int;
```

Returns the type of the latest operation performed by the ORM
Returns one of the OP_* class constants

<h4 id="mvcmodel-getreadconnection"><code>getReadConnection()</code></h4>

```php
final public function getReadConnection(): AdapterInterface;
```

Gets the connection used to read data for the model

<h4 id="mvcmodel-getreadconnectionservice"><code>getReadConnectionService()</code></h4>

```php
final public function getReadConnectionService(): string;
```

Returns the DependencyInjection connection service name used to read data
related the model

<h4 id="mvcmodel-getrelated"><code>getRelated()</code></h4>

```php
public function getRelated(
string $alias,
mixed $arguments = null
): mixed;
```

Returns related records based on defined relations

<h4 id="mvcmodel-getschema"><code>getSchema()</code></h4>

```php
final public function getSchema(): string|null;
```

Returns schema name where the mapped table is located

<h4 id="mvcmodel-getsnapshotdata"><code>getSnapshotData()</code></h4>

```php
public function getSnapshotData(): array;
```

Returns the internal snapshot data

<h4 id="mvcmodel-getsource"><code>getSource()</code></h4>

```php
final public function getSource(): string;
```

Returns the table name mapped in the model

<h4 id="mvcmodel-gettransaction"><code>getTransaction()</code></h4>

```php
public function getTransaction(): TransactionInterface|null;
```

<h4 id="mvcmodel-getupdatedfields"><code>getUpdatedFields()</code></h4>

```php
public function getUpdatedFields(): array;
```

Returns a list of updated values.

```php
$invoices = Invoices::findFirst();
print_r($invoices->getChangedFields()); // []

$invoices->deleted = 'Y';

$invoices->getChangedFields();
print_r($invoices->getChangedFields()); // ["deleted"]
$invoices->save();
print_r($invoices->getChangedFields()); // []
print_r($invoices->getUpdatedFields()); // ["deleted"]
```

<h4 id="mvcmodel-getwriteconnection"><code>getWriteConnection()</code></h4>

```php
final public function getWriteConnection(): AdapterInterface;
```

Gets the connection used to write data to the model

<h4 id="mvcmodel-getwriteconnectionservice"><code>getWriteConnectionService()</code></h4>

```php
final public function getWriteConnectionService(): string;
```

Returns the DependencyInjection connection service name used to write
data related to the model

<h4 id="mvcmodel-haschanged"><code>hasChanged()</code></h4>

```php
public function hasChanged(
mixed $fieldName = null,
bool $allFields = false
): bool;
```

Check if a specific attribute has changed
This only works if the model is keeping data snapshots

```php
$invoice = new Invoices();

$invoice->inv_status_flag = "mechanical";
$invoice->inv_title = "Test Invoice";
$invoice->inv_total = 1952;

$invoice->create();

$invoice->inv_status_flag = "hydraulic";

$hasChanged = $invoice->hasChanged("type"); // returns true
$hasChanged = $invoice->hasChanged(["type", "name"]); // returns true
$hasChanged = $invoice->hasChanged(["type", "name"], true); // returns false
```

<h4 id="mvcmodel-hassnapshotdata"><code>hasSnapshotData()</code></h4>

```php
public function hasSnapshotData(): bool;
```

Checks if the object has internal snapshot data

<h4 id="mvcmodel-hasupdated"><code>hasUpdated()</code></h4>

```php
public function hasUpdated(
mixed $fieldName = null,
bool $allFields = false
): bool;
```

Check if a specific attribute was updated
This only works if the model is keeping data snapshots

<h4 id="mvcmodel-isrelationshiploaded"><code>isRelationshipLoaded()</code></h4>

```php
public function isRelationshipLoaded( string $relationshipAlias ): bool;
```

Checks if saved related records have already been loaded.

Only returns true if the records were previously fetched
through the model without any additional parameters.

```php
$invoice = Invoices::findFirst();
var_dump($invoice->isRelationshipLoaded('ordersProducts')); // false

$invoicesParts = $invoice->getOrdersProducts(['id > 0']);
var_dump($invoice->isRelationshipLoaded('ordersProducts')); // false

$invoicesParts = $invoice->getOrdersProducts(); // or $invoice->ordersProducts
var_dump($invoice->isRelationshipLoaded('ordersProducts')); // true

$invoice->ordersProducts = [new OrdersProducts()];
var_dump($invoice->isRelationshipLoaded('ordersProducts')); // false
```

<h4 id="mvcmodel-jsonserialize"><code>jsonSerialize()</code></h4>

```php
public function jsonSerialize(): array;
```

Serializes the object for json_encode

```php
echo json_encode($invoice);
```

<h4 id="mvcmodel-maximum"><code>maximum()</code></h4>

```php
public static function maximum( mixed $parameters = null ): mixed;
```

Returns the maximum value of a column for a result-set of rows that match
the specified conditions

```php
// What is the maximum invoice id?
$id = Invoices::maximum(
[
    "column" => "id",
]
);

echo "The maximum invoice id is: ", $id, "\n";

// What is the maximum id of paid invoices?
$sum = Invoices::maximum(
[
    "inv_status_flag = 1",
    "column" => "id",
]
);

echo "The maximum invoice id of paid invoices is ", $id, "\n";
```

<h4 id="mvcmodel-minimum"><code>minimum()</code></h4>

```php
public static function minimum( mixed $parameters = null ): mixed;
```

Returns the minimum value of a column for a result-set of rows that match
the specified conditions

```php
// What is the minimum invoice id?
$id = Invoices::minimum(
[
    "column" => "id",
]
);

echo "The minimum invoice id is: ", $id;

// What is the minimum id of paid invoices?
$sum = Invoices::minimum(
[
    "inv_status_flag = 1",
    "column" => "id",
]
);

echo "The minimum invoice id of paid invoices is ", $id;
```

<h4 id="mvcmodel-query"><code>query()</code></h4>

```php
public static function query( DiInterface|null $container = null ): CriteriaInterface;
```

Create a criteria for a specific model

<h4 id="mvcmodel-readattribute"><code>readAttribute()</code></h4>

```php
public function readAttribute( string $attribute ): mixed;
```

Reads an attribute value by its name

```php
echo $invoice->readAttribute("name");
```

<h4 id="mvcmodel-refresh"><code>refresh()</code></h4>

```php
public function refresh(): ModelInterface;
```

Refreshes the model attributes re-querying the record from the database

<h4 id="mvcmodel-save"><code>save()</code></h4>

```php
public function save(): bool;
```

Inserts or updates a model instance. Returning true on success or false
otherwise.

```php
// Creating a new invoice
$invoice = new Invoices();

$invoice->inv_status_flag = "mechanical";
$invoice->inv_title = "Test Invoice";
$invoice->inv_total = 1952;

$invoice->save();

// Updating an invoice name
$invoice = Invoices::findFirst("id = 100");

$invoice->inv_title = "Biomass";

$invoice->save();
```

<h4 id="mvcmodel-serialize"><code>serialize()</code></h4>

```php
public function serialize(): string|null;
```

Serializes the object ignoring connections, services, related objects or
static properties

<h4 id="mvcmodel-setconnectionservice"><code>setConnectionService()</code></h4>

```php
final public function setConnectionService( string $connectionService ): void;
```

Sets the DependencyInjection connection service name

<h4 id="mvcmodel-setdirtystate"><code>setDirtyState()</code></h4>

```php
public function setDirtyState( int $dirtyState ): bool|ModelInterface;
```

Sets the dirty state of the object using one of the DIRTY_STATE_* constants

<h4 id="mvcmodel-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( EventsManagerInterface $eventsManager );
```

Sets a custom events manager

<h4 id="mvcmodel-setoldsnapshotdata"><code>setOldSnapshotData()</code></h4>

```php
public function setOldSnapshotData(
array $data,
mixed $columnMap = null
);
```

Sets the record's old snapshot data.
This method is used internally to set old snapshot data when the model
was set up to keep snapshot data

<h4 id="mvcmodel-setreadconnectionservice"><code>setReadConnectionService()</code></h4>

```php
final public function setReadConnectionService( string $connectionService ): void;
```

Sets the DependencyInjection connection service name used to read data

<h4 id="mvcmodel-setrelated"><code>setRelated()</code></h4>

```php
public function setRelated(
string $alias,
mixed $records
): ModelInterface;
```

Stores related records in the relation cache, so that a subsequent
getRelated() or property access returns them without querying.

This is the write side of the cache getRelated() already reads. The value
lands in `related`, never in `dirtyRelated`.

That is not the same as leaving save() untouched. collectRelatedToSave()
promotes a `related` entry into `dirtyRelated` when the entry is a single
ModelInterface that is new or has changed, so passing such a record here
does cascade on the next save(). Arrays, resultsets, and unchanged
records carrying snapshot data are skipped - which is why eager loading,
the caller this exists for, never triggers a cascade.

<h4 id="mvcmodel-setsnapshotdata"><code>setSnapshotData()</code></h4>

```php
public function setSnapshotData(
array $data,
mixed $columnMap = null
): void;
```

Sets the record's snapshot data.
This method is used internally to set snapshot data when the model was
set up to keep snapshot data

<h4 id="mvcmodel-setsync"><code>setSync()</code></h4>

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

<h4 id="mvcmodel-settransaction"><code>setTransaction()</code></h4>

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

$invoice = new Invoices();

$invoice->setTransaction($transaction);

$invoice->inv_title       = "WALL·E";
$invoice->created_at = date("Y-m-d");

if ($invoice->save() === false) {
    $transaction->rollback("Can't save invoice");
}

$invoicePart = new OrdersProducts();

$invoicePart->setTransaction($transaction);

$invoicePart->type = "head";

if ($invoicePart->save() === false) {
    $transaction->rollback("Invoices part cannot be saved");
}

$transaction->commit();
} catch (TxFailed $e) {
echo "Failed, reason: ", $e->getMessage();
}
```

<h4 id="mvcmodel-setwriteconnectionservice"><code>setWriteConnectionService()</code></h4>

```php
final public function setWriteConnectionService( string $connectionService ): void;
```

Sets the DependencyInjection connection service name used to write data

<h4 id="mvcmodel-setup"><code>setup()</code></h4>

```php
public static function setup( array $options ): void;
```

Enables/disables options in the ORM.

The options are written to process-global `Phalcon\Support\Settings`
(`orm.*` flags) and therefore affect every model in the process at once.
Call this once during bootstrap; it is not per-model or per-container
configuration, and one application's `setup()` reconfigures the ORM for
every other user in the same process.

<h4 id="mvcmodel-skipoperation"><code>skipOperation()</code></h4>

```php
public function skipOperation( bool $skip ): void;
```

Skips the current operation forcing a success state

<h4 id="mvcmodel-sum"><code>sum()</code></h4>

```php
public static function sum( mixed $parameters = null ): float|ResultsetInterface;
```

Calculates the sum on a column for a result-set of rows that match the
specified conditions

```php
// How much are all invoices?
$sum = Invoices::sum(
[
    "column" => "inv_total",
]
);

echo "The total price of invoices is ", $sum, "\n";

// How much are paid invoices?
$sum = Invoices::sum(
[
    "inv_status_flag = 1",
    "column" => "inv_total",
]
);

echo "The total price of paid invoices is  ", $sum, "\n";
```

<h4 id="mvcmodel-toarray"><code>toArray()</code></h4>

```php
public function toArray(
mixed $columns = null,
bool $useGetter = true
): array;
```

Returns the instance as an array representation

```php
print_r(
$invoice->toArray()
);
```

<h4 id="mvcmodel-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( string $data );
```

Unserializes the object from a serialized string

<h4 id="mvcmodel-update"><code>update()</code></h4>

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

<h4 id="mvcmodel-validationhasfailed"><code>validationHasFailed()</code></h4>

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

<h4 id="mvcmodel-writeattribute"><code>writeAttribute()</code></h4>

```php
public function writeAttribute(
string $attribute,
mixed $value
): void;
```

Writes an attribute value by its name

```php
$invoice->writeAttribute("name", "Rosey");
```

<h4 id="mvcmodel-allowemptystringvalues"><code>allowEmptyStringValues()</code></h4>

```php
protected function allowEmptyStringValues( array $attributes ): void;
```

Sets a list of attributes that must be skipped from the
generated UPDATE statement

```php
class Invoices extends \Phalcon\Mvc\Model
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

<h4 id="mvcmodel-belongsto"><code>belongsTo()</code></h4>

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
class OrdersProducts extends \Phalcon\Mvc\Model
{
public function initialize()
{
    $this->belongsTo(
        "oxp_ord_id",
        Invoices::class,
        "id"
    );
}
}
```

@option bool   "reusable"
@option string "alias"
@option array  "foreignKey" \{
@option string|null "message"
@option bool        "allowNulls"
@option string|null "action"
     \}
@option array params \{
@option string "conditions"
@option string "columns"
@option array  "bind"
@option array  "bindTypes"
@option string "order"
@option int    "limit"
@option int    "offset"
@option string "group"
@option bool   "for_updated"
@option bool   "shared_lock"
@option array  "cache" \{
@option int    "lifetime"
@option string "key"
         \}
@option string "hydration"
\}

<h4 id="mvcmodel-canceloperation"><code>cancelOperation()</code></h4>

```php
protected function cancelOperation(): void;
```

Cancel the current operation

<h4 id="mvcmodel-checkforeignkeysrestrict"><code>checkForeignKeysRestrict()</code></h4>

```php
final protected function checkForeignKeysRestrict(): bool;
```

Reads "belongs to" relations and check the virtual foreign keys when
inserting or updating records to verify that inserted/updated values are
present in the related entity

<h4 id="mvcmodel-checkforeignkeysreversecascade"><code>checkForeignKeysReverseCascade()</code></h4>

```php
final protected function checkForeignKeysReverseCascade(): bool;
```

Reads both "hasMany" and "hasOne" relations and checks the virtual
foreign keys (cascade) when deleting records

<h4 id="mvcmodel-checkforeignkeysreverserestrict"><code>checkForeignKeysReverseRestrict()</code></h4>

```php
final protected function checkForeignKeysReverseRestrict(): bool;
```

Reads both "hasMany" and "hasOne" relations and checks the virtual
foreign keys (restrict) when deleting records

<h4 id="mvcmodel-collectrelatedtosave"><code>collectRelatedToSave()</code></h4>

```php
protected function collectRelatedToSave(): array;
```

Collects previously queried (belongs-to, has-one and has-one-through)
related records along with freshly added one

<h4 id="mvcmodel-dolowinsert"><code>doLowInsert()</code></h4>

```php
protected function doLowInsert(
MetaDataInterface $metaData,
AdapterInterface $connection,
array|string $table,
bool|string $identityField
): bool;
```

Sends a pre-build INSERT SQL statement to the relational database system

<h4 id="mvcmodel-dolowupdate"><code>doLowUpdate()</code></h4>

```php
protected function doLowUpdate(
MetaDataInterface $metaData,
AdapterInterface $connection,
array|string $table
): bool;
```

Sends a pre-build UPDATE SQL statement to the relational database system

<h4 id="mvcmodel-geteventlogger"><code>getEventLogger()</code></h4>

```php
protected function getEventLogger( object|null $container ): LoggerInterface|null;
```

Resolves an optional logger from the container. Returns null when
no logger service is registered: logging model-event dispatch errors is
best-effort and must not abort the operation. The container's get()
throws on a missing service, so has() is checked first.

<h4 id="mvcmodel-getrelatedrecords"><code>getRelatedRecords()</code></h4>

```php
protected function getRelatedRecords(
string $modelName,
string $method,
array $arguments
);
```

Returns related records defined relations depending on the method name.
Returns false if the relation is non-existent.

<h4 id="mvcmodel-groupresult"><code>groupResult()</code></h4>

```php
protected static function groupResult(
string $functionName,
string $alias,
array|string|null $parameters = null
): mixed;
```

Generate a PHQL SELECT statement for an aggregate

<h4 id="mvcmodel-has"><code>has()</code></h4>

```php
protected function has(
MetaDataInterface $metaData,
AdapterInterface $connection
): bool;
```

Checks whether the current record already exists

<h4 id="mvcmodel-hasmany"><code>hasMany()</code></h4>

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
class Invoices extends \Phalcon\Mvc\Model
{
public function initialize()
{
    $this->hasMany(
        "id",
        OrdersProducts::class,
        "oxp_ord_id"
    );
}
}
```

@option bool   "reusable"
@option string "alias"
@option array  "foreignKey" \{
@option string|null "message"
@option bool        "allowNulls"
@option string|null "action"
     \}
@option array params \{
@option string "conditions"
@option string "columns"
@option array  "bind"
@option array  "bindTypes"
@option string "order"
@option int    "limit"
@option int    "offset"
@option string "group"
@option bool   "for_updated"
@option bool   "shared_lock"
@option array  "cache" \{
@option int    "lifetime"
@option string "key"
         \}
@option string "hydration"
\}

<h4 id="mvcmodel-hasmanytomany"><code>hasManyToMany()</code></h4>

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
class Invoices extends \Phalcon\Mvc\Model
{
public function initialize()
{
    // Setup a many-to-many relation to Parts through OrdersProducts
    $this->hasManyToMany(
        "id",
        OrdersProducts::class,
        "oxp_ord_id",
        "oxp_prd_id",
        Products::class,
        "id",
    );
}
}
```

@option bool   "reusable"
@option string "alias"
@option array  "foreignKey" \{
@option string|null "message"
@option bool        "allowNulls"
@option string|null "action"
     \}
@option array params \{
@option string "conditions"
@option string "columns"
@option array  "bind"
@option array  "bindTypes"
@option string "order"
@option int    "limit"
@option int    "offset"
@option string "group"
@option bool   "for_updated"
@option bool   "shared_lock"
@option array  "cache" \{
@option int    "lifetime"
@option string "key"
         \}
@option string "hydration"
\}

<h4 id="mvcmodel-hasone"><code>hasOne()</code></h4>

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
class Invoices extends \Phalcon\Mvc\Model
{
public function initialize()
{
    $this->hasOne(
        "id",
        InvoicesDescription::class,
        "oxp_ord_id"
    );
}
}
```

@option bool   "reusable"
@option string "alias"
@option array  "foreignKey" \{
@option string|null "message"
@option bool        "allowNulls"
@option string|null "action"
     \}
@option array params \{
@option string "conditions"
@option string "columns"
@option array  "bind"
@option array  "bindTypes"
@option string "order"
@option int    "limit"
@option int    "offset"
@option string "group"
@option bool   "for_updated"
@option bool   "shared_lock"
@option array  "cache" \{
@option int    "lifetime"
@option string "key"
         \}
@option string "hydration"
\}

<h4 id="mvcmodel-hasonethrough"><code>hasOneThrough()</code></h4>

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
class Invoices extends \Phalcon\Mvc\Model
{
public function initialize()
{
    // Setup a 1-1 relation to one item from Parts through OrdersProducts
    $this->hasOneThrough(
        "id",
        OrdersProducts::class,
        "oxp_ord_id",
        "oxp_prd_id",
        Products::class,
        "id",
    );
}
}
```

@option bool   "reusable"
@option string "alias"
@option array  "foreignKey" \{
@option string|null "message"
@option bool        "allowNulls"
@option string|null "action"
     \}
@option array params \{
@option string "conditions"
@option string "columns"
@option array  "bind"
@option array  "bindTypes"
@option string "order"
@option int    "limit"
@option int    "offset"
@option string "group"
@option bool   "for_updated"
@option bool   "shared_lock"
@option array  "cache" \{
@option int    "lifetime"
@option string "key"
         \}
@option string "hydration"
\}

<h4 id="mvcmodel-invokefinder"><code>invokeFinder()</code></h4>

```php
final protected static function invokeFinder(
string $method,
array $arguments
);
```

Try to check if the query must invoke a finder

<h4 id="mvcmodel-keepsnapshots"><code>keepSnapshots()</code></h4>

```php
protected function keepSnapshots( bool $keepSnapshot ): void;
```

Sets if the model must keep the original record snapshot in memory

```php
use Phalcon\Mvc\Model;

class Invoices extends Model
{
public function initialize()
{
    $this->keepSnapshots(true);
}
}
```

<h4 id="mvcmodel-possiblesetter"><code>possibleSetter()</code></h4>

```php
final protected function possibleSetter(
string $property,
mixed $value
): bool;
```

Check for, and attempt to use, possible setter.

<h4 id="mvcmodel-postsave"><code>postSave()</code></h4>

```php
protected function postSave(
bool $success,
bool $exists
): bool;
```

Executes internal events after save a record

<h4 id="mvcmodel-postsaverelatedrecords"><code>postSaveRelatedRecords()</code></h4>

```php
protected function postSaveRelatedRecords(
AdapterInterface $connection,
array $related,
CollectionInterface $visited
): bool;
```

Save the related records assigned in the has-one/has-many relations

<h4 id="mvcmodel-presave"><code>preSave()</code></h4>

```php
protected function preSave(
MetaDataInterface $metaData,
bool $exists,
mixed $identityField
): bool;
```

Executes internal hooks before save a record

<h4 id="mvcmodel-presaverelatedrecords"><code>preSaveRelatedRecords()</code></h4>

```php
protected function preSaveRelatedRecords(
AdapterInterface $connection,
array $related,
CollectionInterface $visited
): bool;
```

Saves related records that must be stored prior to save the master record

<h4 id="mvcmodel-setschema"><code>setSchema()</code></h4>

```php
final protected function setSchema( string $schema ): ModelInterface;
```

Sets schema name where the mapped table is located

<h4 id="mvcmodel-setsource"><code>setSource()</code></h4>

```php
final protected function setSource( string $source ): ModelInterface;
```

Sets the table name to which model should be mapped

<h4 id="mvcmodel-skipattributes"><code>skipAttributes()</code></h4>

```php
protected function skipAttributes( array $attributes ): void;
```

Sets a list of attributes that must be skipped from the
generated INSERT/UPDATE statement

```php
class Invoices extends \Phalcon\Mvc\Model
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

<h4 id="mvcmodel-skipattributesoncreate"><code>skipAttributesOnCreate()</code></h4>

```php
protected function skipAttributesOnCreate( array $attributes ): void;
```

Sets a list of attributes that must be skipped from the
generated INSERT statement

```php
class Invoices extends \Phalcon\Mvc\Model
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

<h4 id="mvcmodel-skipattributesonupdate"><code>skipAttributesOnUpdate()</code></h4>

```php
protected function skipAttributesOnUpdate( array $attributes ): void;
```

Sets a list of attributes that must be skipped from the
generated UPDATE statement

```php
class Invoices extends \Phalcon\Mvc\Model
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

<h4 id="mvcmodel-usedynamicupdate"><code>useDynamicUpdate()</code></h4>

```php
protected function useDynamicUpdate( bool $dynamicUpdate ): void;
```

Sets if a model must use dynamic update instead of the all-field update

```php
use Phalcon\Mvc\Model;

class Invoices extends Model
{
public function initialize()
{
    $this->useDynamicUpdate(true);
}
}
```

<h4 id="mvcmodel-validate"><code>validate()</code></h4>

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

Interface

Interface for Phalcon\Mvc\Model

@template T

- **`Phalcon\Mvc\ModelInterface`**

`Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\Model\CriteriaInterface` · `Phalcon\Mvc\Model\MetaDataInterface` · `Phalcon\Mvc\Model\ResultInterface` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Mvc\Model\Row` · `Phalcon\Mvc\Model\TransactionInterface`

### Method Summary

<ApiItem href="#mvcmodelinterface-appendmessage" visibility="public" name="appendMessage" returnType="ModelInterface" params={[{"type":"MessageInterface","name":"message","default":null}]}>
Appends a customized message on the validation process
</ApiItem>
<ApiItem href="#mvcmodelinterface-assign" visibility="public" name="assign" returnType="ModelInterface" params={[{"type":"array","name":"data","default":null},{"type":"mixed","name":"whiteList","default":"null"},{"type":"mixed","name":"dataColumnMap","default":"null"}]}>
Assigns values to a model from an array
</ApiItem>
<ApiItem href="#mvcmodelinterface-average" visibility="public" name="average" returnType="float|ResultsetInterface" params={[{"type":"array","name":"parameters","default":"[]"}]}>
Allows to calculate the average value on a column matching the specified
</ApiItem>
<ApiItem href="#mvcmodelinterface-cloneresult" visibility="public" name="cloneResult" returnType="ModelInterface" params={[{"type":"ModelInterface","name":"base","default":null},{"type":"array","name":"data","default":null},{"type":"int","name":"dirtyState","default":"0"}]}>
Assigns values to a model from an array returning a new model
</ApiItem>
<ApiItem href="#mvcmodelinterface-cloneresultmap" visibility="public" name="cloneResultMap" returnType="ModelInterface|ResultInterface" params={[{"type":"mixed","name":"base","default":null},{"type":"array","name":"data","default":null},{"type":"mixed","name":"columnMap","default":null},{"type":"int","name":"dirtyState","default":"0"},{"type":"bool","name":"keepSnapshots","default":"false"}]}>
Assigns values to a model from an array returning a new model
</ApiItem>
<ApiItem href="#mvcmodelinterface-cloneresultmaphydrate" visibility="public" name="cloneResultMapHydrate" returnType="" params={[{"type":"array","name":"data","default":null},{"type":"mixed","name":"columnMap","default":null},{"type":"int","name":"hydrationMode","default":null}]}>
Returns a hydrated result based on the data and the column map
</ApiItem>
<ApiItem href="#mvcmodelinterface-count" visibility="public" name="count" returnType="int|ResultsetInterface" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Allows to count how many records match the specified conditions
</ApiItem>
<ApiItem href="#mvcmodelinterface-create" visibility="public" name="create" returnType="bool" params={[]}>
Inserts a model instance. If the instance already exists in the
</ApiItem>
<ApiItem href="#mvcmodelinterface-delete" visibility="public" name="delete" returnType="bool" params={[]}>
Deletes a model instance. Returning true on success or false otherwise.
</ApiItem>
<ApiItem href="#mvcmodelinterface-find" visibility="public" name="find" returnType="" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Allows to query a set of records that match the specified conditions.
</ApiItem>
<ApiItem href="#mvcmodelinterface-findfirst" visibility="public" name="findFirst" returnType="" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Allows to query the first record that match the specified conditions
</ApiItem>
<ApiItem href="#mvcmodelinterface-fireevent" visibility="public" name="fireEvent" returnType="bool|null" params={[{"type":"string","name":"eventName","default":null}]}>
Fires an event, implicitly calls behaviors and listeners in the events
</ApiItem>
<ApiItem href="#mvcmodelinterface-fireeventcancel" visibility="public" name="fireEventCancel" returnType="bool|null" params={[{"type":"string","name":"eventName","default":null}]}>
Fires an event, implicitly calls behaviors and listeners in the events
</ApiItem>
<ApiItem href="#mvcmodelinterface-getdirtystate" visibility="public" name="getDirtyState" returnType="int" params={[]}>
Returns one of the DIRTY_STATE_* constants telling if the record exists
</ApiItem>
<ApiItem href="#mvcmodelinterface-getmessages" visibility="public" name="getMessages" returnType="array" params={[]}>
Returns array of validation messages
</ApiItem>
<ApiItem href="#mvcmodelinterface-getmodelsmetadata" visibility="public" name="getModelsMetaData" returnType="MetaDataInterface" params={[]}>
Returns the models meta-data service related to the entity instance.
</ApiItem>
<ApiItem href="#mvcmodelinterface-getoperationmade" visibility="public" name="getOperationMade" returnType="int" params={[]}>
Returns the type of the latest operation performed by the ORM
</ApiItem>
<ApiItem href="#mvcmodelinterface-getreadconnection" visibility="public" name="getReadConnection" returnType="AdapterInterface" params={[]}>
Gets internal database connection
</ApiItem>
<ApiItem href="#mvcmodelinterface-getreadconnectionservice" visibility="public" name="getReadConnectionService" returnType="string" params={[]}>
Returns DependencyInjection connection service used to read data
</ApiItem>
<ApiItem href="#mvcmodelinterface-getrelated" visibility="public" name="getRelated" returnType="" params={[{"type":"string","name":"alias","default":null},{"type":"mixed","name":"arguments","default":"null"}]}>
Returns related records based on defined relations
</ApiItem>
<ApiItem href="#mvcmodelinterface-getschema" visibility="public" name="getSchema" returnType="string|null" params={[]}>
Returns schema name where table mapped is located
</ApiItem>
<ApiItem href="#mvcmodelinterface-getsource" visibility="public" name="getSource" returnType="string" params={[]}>
Returns table name mapped in the model
</ApiItem>
<ApiItem href="#mvcmodelinterface-getwriteconnection" visibility="public" name="getWriteConnection" returnType="AdapterInterface" params={[]}>
Gets internal database connection
</ApiItem>
<ApiItem href="#mvcmodelinterface-getwriteconnectionservice" visibility="public" name="getWriteConnectionService" returnType="string" params={[]}>
Returns DependencyInjection connection service used to write data
</ApiItem>
<ApiItem href="#mvcmodelinterface-maximum" visibility="public" name="maximum" returnType="mixed" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Allows to get the maximum value of a column that match the specified
</ApiItem>
<ApiItem href="#mvcmodelinterface-minimum" visibility="public" name="minimum" returnType="mixed" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Allows to get the minimum value of a column that match the specified
</ApiItem>
<ApiItem href="#mvcmodelinterface-query" visibility="public" name="query" returnType="CriteriaInterface" params={[{"type":"DiInterface|null","name":"container","default":"null"}]}>
Create a criteria for a specific model
</ApiItem>
<ApiItem href="#mvcmodelinterface-refresh" visibility="public" name="refresh" returnType="ModelInterface" params={[]}>
Refreshes the model attributes re-querying the record from the database
</ApiItem>
<ApiItem href="#mvcmodelinterface-save" visibility="public" name="save" returnType="bool" params={[]}>
Inserts or updates a model instance. Returning true on success or false
</ApiItem>
<ApiItem href="#mvcmodelinterface-setconnectionservice" visibility="public" name="setConnectionService" returnType="void" params={[{"type":"string","name":"connectionService","default":null}]}>
Sets both read/write connection services
</ApiItem>
<ApiItem href="#mvcmodelinterface-setdirtystate" visibility="public" name="setDirtyState" returnType="bool|ModelInterface" params={[{"type":"int","name":"dirtyState","default":null}]}>
Sets the dirty state of the object using one of the DIRTY_STATE_*
</ApiItem>
<ApiItem href="#mvcmodelinterface-setreadconnectionservice" visibility="public" name="setReadConnectionService" returnType="void" params={[{"type":"string","name":"connectionService","default":null}]}>
Sets the DependencyInjection connection service used to read data
</ApiItem>
<ApiItem href="#mvcmodelinterface-setsnapshotdata" visibility="public" name="setSnapshotData" returnType="void" params={[{"type":"array","name":"data","default":null},{"type":"mixed","name":"columnMap","default":"null"}]}>
Sets the record's snapshot data. This method is used internally to set
</ApiItem>
<ApiItem href="#mvcmodelinterface-setsync" visibility="public" name="setSync" returnType="ModelInterface" params={[{"type":"mixed","name":"elements","default":"null"},{"type":"bool","name":"enabled","default":"true"}]}>
Marks one or more many-to-many relationships to be synchronized (or not)
</ApiItem>
<ApiItem href="#mvcmodelinterface-settransaction" visibility="public" name="setTransaction" returnType="ModelInterface" params={[{"type":"TransactionInterface","name":"transaction","default":null}]}>
Sets a transaction related to the Model instance
</ApiItem>
<ApiItem href="#mvcmodelinterface-setwriteconnectionservice" visibility="public" name="setWriteConnectionService" returnType="void" params={[{"type":"string","name":"connectionService","default":null}]}>
Sets the DependencyInjection connection service used to write data
</ApiItem>
<ApiItem href="#mvcmodelinterface-skipoperation" visibility="public" name="skipOperation" returnType="void" params={[{"type":"bool","name":"skip","default":null}]}>
Skips the current operation forcing a success state
</ApiItem>
<ApiItem href="#mvcmodelinterface-sum" visibility="public" name="sum" returnType="float|ResultsetInterface" params={[{"type":"mixed","name":"parameters","default":"null"}]}>
Allows to calculate a sum on a column that match the specified conditions
</ApiItem>
<ApiItem href="#mvcmodelinterface-update" visibility="public" name="update" returnType="bool" params={[]}>
Updates a model instance. If the instance does not exist in the
</ApiItem>
<ApiItem href="#mvcmodelinterface-validationhasfailed" visibility="public" name="validationHasFailed" returnType="bool" params={[]}>
Check whether validation process has generated any messages
</ApiItem>

### Methods

<h4 id="mvcmodelinterface-appendmessage"><code>appendMessage()</code></h4>

```php
public function appendMessage( MessageInterface $message ): ModelInterface;
```

Appends a customized message on the validation process

<h4 id="mvcmodelinterface-assign"><code>assign()</code></h4>

```php
public function assign(
array $data,
mixed $whiteList = null,
mixed $dataColumnMap = null
): ModelInterface;
```

Assigns values to a model from an array

<h4 id="mvcmodelinterface-average"><code>average()</code></h4>

```php
public static function average( array $parameters = [] ): float|ResultsetInterface;
```

Allows to calculate the average value on a column matching the specified
conditions

<h4 id="mvcmodelinterface-cloneresult"><code>cloneResult()</code></h4>

```php
public static function cloneResult(
ModelInterface $base,
array $data,
int $dirtyState = 0
): ModelInterface;
```

Assigns values to a model from an array returning a new model

<h4 id="mvcmodelinterface-cloneresultmap"><code>cloneResultMap()</code></h4>

```php
public static function cloneResultMap(
mixed $base,
array $data,
mixed $columnMap,
int $dirtyState = 0,
bool $keepSnapshots = false
): ModelInterface|ResultInterface;
```

Assigns values to a model from an array returning a new model

<h4 id="mvcmodelinterface-cloneresultmaphydrate"><code>cloneResultMapHydrate()</code></h4>

```php
public static function cloneResultMapHydrate(
array $data,
mixed $columnMap,
int $hydrationMode
);
```

Returns a hydrated result based on the data and the column map

<h4 id="mvcmodelinterface-count"><code>count()</code></h4>

```php
public static function count( mixed $parameters = null ): int|ResultsetInterface;
```

Allows to count how many records match the specified conditions

Returns an integer for simple queries or a ResultsetInterface
instance for when the GROUP condition is used. The results will
contain the count of each group.

<h4 id="mvcmodelinterface-create"><code>create()</code></h4>

```php
public function create(): bool;
```

Inserts a model instance. If the instance already exists in the
persistence it will throw an exception. Returning true on success or
false otherwise.

<h4 id="mvcmodelinterface-delete"><code>delete()</code></h4>

```php
public function delete(): bool;
```

Deletes a model instance. Returning true on success or false otherwise.

<h4 id="mvcmodelinterface-find"><code>find()</code></h4>

```php
public static function find( mixed $parameters = null );
```

Allows to query a set of records that match the specified conditions.

This is one of four ways to express a query against a model, each with an
intended lane:

- find-parameter arrays (this method) for simple lookups;
- `Phalcon\Mvc\Model\Query\Builder` as the canonical programmatic API;
- `Phalcon\Mvc\Model\Criteria` as request-bound convenience;
- raw PHQL via `Phalcon\Mvc\Model\Query` for everything else.

<h4 id="mvcmodelinterface-findfirst"><code>findFirst()</code></h4>

```php
public static function findFirst( mixed $parameters = null );
```

Allows to query the first record that match the specified conditions

TODO: Current method signature must be reviewed in v5.
      As it must return only ?ModelInterface (it also returns Row).

@see https://github.com/phalcon/cphalcon/issues/15212
@see https://github.com/phalcon/cphalcon/issues/15883

<h4 id="mvcmodelinterface-fireevent"><code>fireEvent()</code></h4>

```php
public function fireEvent( string $eventName ): bool|null;
```

Fires an event, implicitly calls behaviors and listeners in the events
manager are notified

<h4 id="mvcmodelinterface-fireeventcancel"><code>fireEventCancel()</code></h4>

```php
public function fireEventCancel( string $eventName ): bool|null;
```

Fires an event, implicitly calls behaviors and listeners in the events
manager are notified. This method stops if one of the callbacks/listeners
returns bool false

<h4 id="mvcmodelinterface-getdirtystate"><code>getDirtyState()</code></h4>

```php
public function getDirtyState(): int;
```

Returns one of the DIRTY_STATE_* constants telling if the record exists
in the database or not

<h4 id="mvcmodelinterface-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): array;
```

Returns array of validation messages

<h4 id="mvcmodelinterface-getmodelsmetadata"><code>getModelsMetaData()</code></h4>

```php
public function getModelsMetaData(): MetaDataInterface;
```

Returns the models meta-data service related to the entity instance.

<h4 id="mvcmodelinterface-getoperationmade"><code>getOperationMade()</code></h4>

```php
public function getOperationMade(): int;
```

Returns the type of the latest operation performed by the ORM
Returns one of the OP_* class constants

<h4 id="mvcmodelinterface-getreadconnection"><code>getReadConnection()</code></h4>

```php
public function getReadConnection(): AdapterInterface;
```

Gets internal database connection

<h4 id="mvcmodelinterface-getreadconnectionservice"><code>getReadConnectionService()</code></h4>

```php
public function getReadConnectionService(): string;
```

Returns DependencyInjection connection service used to read data

<h4 id="mvcmodelinterface-getrelated"><code>getRelated()</code></h4>

```php
public function getRelated(
string $alias,
mixed $arguments = null
);
```

Returns related records based on defined relations

<h4 id="mvcmodelinterface-getschema"><code>getSchema()</code></h4>

```php
public function getSchema(): string|null;
```

Returns schema name where table mapped is located

<h4 id="mvcmodelinterface-getsource"><code>getSource()</code></h4>

```php
public function getSource(): string;
```

Returns table name mapped in the model

<h4 id="mvcmodelinterface-getwriteconnection"><code>getWriteConnection()</code></h4>

```php
public function getWriteConnection(): AdapterInterface;
```

Gets internal database connection

<h4 id="mvcmodelinterface-getwriteconnectionservice"><code>getWriteConnectionService()</code></h4>

```php
public function getWriteConnectionService(): string;
```

Returns DependencyInjection connection service used to write data

<h4 id="mvcmodelinterface-maximum"><code>maximum()</code></h4>

```php
public static function maximum( mixed $parameters = null ): mixed;
```

Allows to get the maximum value of a column that match the specified
conditions

<h4 id="mvcmodelinterface-minimum"><code>minimum()</code></h4>

```php
public static function minimum( mixed $parameters = null ): mixed;
```

Allows to get the minimum value of a column that match the specified
conditions

<h4 id="mvcmodelinterface-query"><code>query()</code></h4>

```php
public static function query( DiInterface|null $container = null ): CriteriaInterface;
```

Create a criteria for a specific model

<h4 id="mvcmodelinterface-refresh"><code>refresh()</code></h4>

```php
public function refresh(): ModelInterface;
```

Refreshes the model attributes re-querying the record from the database

<h4 id="mvcmodelinterface-save"><code>save()</code></h4>

```php
public function save(): bool;
```

Inserts or updates a model instance. Returning true on success or false
otherwise.

<h4 id="mvcmodelinterface-setconnectionservice"><code>setConnectionService()</code></h4>

```php
public function setConnectionService( string $connectionService ): void;
```

Sets both read/write connection services

<h4 id="mvcmodelinterface-setdirtystate"><code>setDirtyState()</code></h4>

```php
public function setDirtyState( int $dirtyState ): bool|ModelInterface;
```

Sets the dirty state of the object using one of the DIRTY_STATE_*
constants

<h4 id="mvcmodelinterface-setreadconnectionservice"><code>setReadConnectionService()</code></h4>

```php
public function setReadConnectionService( string $connectionService ): void;
```

Sets the DependencyInjection connection service used to read data

<h4 id="mvcmodelinterface-setsnapshotdata"><code>setSnapshotData()</code></h4>

```php
public function setSnapshotData(
array $data,
mixed $columnMap = null
): void;
```

Sets the record's snapshot data. This method is used internally to set
snapshot data when the model was set up to keep snapshot data

<h4 id="mvcmodelinterface-setsync"><code>setSync()</code></h4>

```php
public function setSync(
mixed $elements = null,
bool $enabled = true
): ModelInterface;
```

Marks one or more many-to-many relationships to be synchronized (or not)
on the next save() call.

<h4 id="mvcmodelinterface-settransaction"><code>setTransaction()</code></h4>

```php
public function setTransaction( TransactionInterface $transaction ): ModelInterface;
```

Sets a transaction related to the Model instance

<h4 id="mvcmodelinterface-setwriteconnectionservice"><code>setWriteConnectionService()</code></h4>

```php
public function setWriteConnectionService( string $connectionService ): void;
```

Sets the DependencyInjection connection service used to write data

<h4 id="mvcmodelinterface-skipoperation"><code>skipOperation()</code></h4>

```php
public function skipOperation( bool $skip ): void;
```

Skips the current operation forcing a success state

<h4 id="mvcmodelinterface-sum"><code>sum()</code></h4>

```php
public static function sum( mixed $parameters = null ): float|ResultsetInterface;
```

Allows to calculate a sum on a column that match the specified conditions

<h4 id="mvcmodelinterface-update"><code>update()</code></h4>

```php
public function update(): bool;
```

Updates a model instance. If the instance does not exist in the
persistence it will throw an exception. Returning true on success or
false otherwise.

<h4 id="mvcmodelinterface-validationhasfailed"><code>validationHasFailed()</code></h4>

```php
public function validationHasFailed(): bool;
```

Check whether validation process has generated any messages

## Mvc\Model\Behavior

Abstract

This is an optional base class for ORM behaviors

- **`Phalcon\Mvc\Model\Behavior`** - implements [`Phalcon\Mvc\Model\BehaviorInterface`](#mvcmodelbehaviorinterface)
- [`Phalcon\Mvc\Model\Behavior\SoftDelete`](#mvcmodelbehaviorsoftdelete)
- [`Phalcon\Mvc\Model\Behavior\Timestampable`](#mvcmodelbehaviortimestampable)

`Phalcon\Mvc\ModelInterface`

### Method Summary

<ApiItem href="#mvcmodelbehavior-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Mvc\Model\Behavior
</ApiItem>
<ApiItem href="#mvcmodelbehavior-missingmethod" visibility="public" name="missingMethod" returnType="" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"method","default":null},{"type":"array","name":"arguments","default":"[]"}]}>
Acts as fallbacks when a missing method is called on the model
</ApiItem>
<ApiItem href="#mvcmodelbehavior-notify" visibility="public" name="notify" returnType="" params={[{"type":"string","name":"type","default":null},{"type":"ModelInterface","name":"model","default":null}]}>
This method receives the notifications from the EventsManager
</ApiItem>
<ApiItem href="#mvcmodelbehavior-getoptions" visibility="protected" name="getOptions" returnType="" params={[{"type":"string|null","name":"eventName","default":"null"}]}>
Returns the behavior options related to an event
</ApiItem>
<ApiItem href="#mvcmodelbehavior-musttakeaction" visibility="protected" name="mustTakeAction" returnType="bool" params={[{"type":"string","name":"eventName","default":null}]}>
Checks whether the behavior must take action on certain event
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="mvcmodelbehavior-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Phalcon\Mvc\Model\Behavior

<h4 id="mvcmodelbehavior-missingmethod"><code>missingMethod()</code></h4>

```php
public function missingMethod(
ModelInterface $model,
string $method,
array $arguments = []
);
```

Acts as fallbacks when a missing method is called on the model

<h4 id="mvcmodelbehavior-notify"><code>notify()</code></h4>

```php
public function notify(
string $type,
ModelInterface $model
);
```

This method receives the notifications from the EventsManager

<h4 id="mvcmodelbehavior-getoptions"><code>getOptions()</code></h4>

```php
protected function getOptions( string|null $eventName = null );
```

Returns the behavior options related to an event

<h4 id="mvcmodelbehavior-musttakeaction"><code>mustTakeAction()</code></h4>

```php
protected function mustTakeAction( string $eventName ): bool;
```

Checks whether the behavior must take action on certain event

## Mvc\Model\BehaviorInterface

Interface

Interface for Phalcon\Mvc\Model\Behavior

- **`Phalcon\Mvc\Model\BehaviorInterface`**

`Phalcon\Mvc\ModelInterface`

### Method Summary

<ApiItem href="#mvcmodelbehaviorinterface-missingmethod" visibility="public" name="missingMethod" returnType="" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"method","default":null},{"type":"array","name":"arguments","default":"[]"}]}>
Calls a method when it's missing in the model
</ApiItem>
<ApiItem href="#mvcmodelbehaviorinterface-notify" visibility="public" name="notify" returnType="" params={[{"type":"string","name":"type","default":null},{"type":"ModelInterface","name":"model","default":null}]}>
This method receives the notifications from the EventsManager
</ApiItem>

### Methods

<h4 id="mvcmodelbehaviorinterface-missingmethod"><code>missingMethod()</code></h4>

```php
public function missingMethod(
ModelInterface $model,
string $method,
array $arguments = []
);
```

Calls a method when it's missing in the model

<h4 id="mvcmodelbehaviorinterface-notify"><code>notify()</code></h4>

```php
public function notify(
string $type,
ModelInterface $model
);
```

This method receives the notifications from the EventsManager

## Mvc\Model\Behavior\Exceptions\MissingRequiredOption

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Behavior\Exceptions\MissingRequiredOption`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelbehaviorexceptionsmissingrequiredoption-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"option","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelbehaviorexceptionsmissingrequiredoption-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $option );
```

## Mvc\Model\Behavior\SoftDelete

Class

Instead of permanently delete a record it marks the record as deleted
changing the value of a flag column

- [`Phalcon\Mvc\Model\Behavior`](#mvcmodelbehavior)
- **`Phalcon\Mvc\Model\Behavior\SoftDelete`**

`Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Behavior` · `Phalcon\Mvc\Model\Behavior\Exceptions\MissingRequiredOption` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#mvcmodelbehaviorsoftdelete-notify" visibility="public" name="notify" returnType="" params={[{"type":"string","name":"type","default":null},{"type":"ModelInterface","name":"model","default":null}]}>
Listens for notifications from the models manager
</ApiItem>

### Methods

<h4 id="mvcmodelbehaviorsoftdelete-notify"><code>notify()</code></h4>

```php
public function notify(
string $type,
ModelInterface $model
);
```

Listens for notifications from the models manager

## Mvc\Model\Behavior\Timestampable

Class

Allows to automatically update a model’s attribute saving the datetime when a
record is created or updated

- [`Phalcon\Mvc\Model\Behavior`](#mvcmodelbehavior)
- **`Phalcon\Mvc\Model\Behavior\Timestampable`**

`Closure` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Behavior` · `Phalcon\Mvc\Model\Behavior\Exceptions\MissingRequiredOption` · `Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelbehaviortimestampable-notify" visibility="public" name="notify" returnType="" params={[{"type":"string","name":"type","default":null},{"type":"ModelInterface","name":"model","default":null}]}>
Listens for notifications from the models manager
</ApiItem>

### Methods

<h4 id="mvcmodelbehaviortimestampable-notify"><code>notify()</code></h4>

```php
public function notify(
string $type,
ModelInterface $model
);
```

Listens for notifications from the models manager

## Mvc\Model\Binder

Class

This is a class for binding models into params for handler

- **`Phalcon\Mvc\Model\Binder`** - implements [`Phalcon\Mvc\Model\BinderInterface`](#mvcmodelbinderinterface)

`Closure` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Mvc\Controller\BindModelInterface` · `Phalcon\Mvc\Model\Binder\BindableInterface` · `Phalcon\Mvc\Model\Exceptions\HandlerMustImplementBindable` · `Phalcon\Mvc\Model\Exceptions\InvalidGetModelNameReturn` · `Phalcon\Mvc\Model\Exceptions\MissingMethodName` · `Phalcon\Mvc\Model\Exceptions\MissingModelClassName` · `ReflectionException` · `ReflectionFunction` · `ReflectionMethod` · `ReflectionNamedType`

### Method Summary

<ApiItem href="#mvcmodelbinder-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"AdapterInterface|null","name":"cache","default":"null"}]}>
Phalcon\Mvc\Model\Binder constructor
</ApiItem>
<ApiItem href="#mvcmodelbinder-bindtohandler" visibility="public" name="bindToHandler" returnType="array" params={[{"type":"object","name":"handler","default":null},{"type":"array","name":"params","default":null},{"type":"string","name":"cacheKey","default":null},{"type":"string|null","name":"methodName","default":"null"}]}>
Bind models into params in proper handler
</ApiItem>
<ApiItem href="#mvcmodelbinder-getboundmodels" visibility="public" name="getBoundModels" returnType="array" params={[]}>
Return the active bound models
</ApiItem>
<ApiItem href="#mvcmodelbinder-getcache" visibility="public" name="getCache" returnType="AdapterInterface" params={[]}>
Sets cache instance
</ApiItem>
<ApiItem href="#mvcmodelbinder-getoriginalvalues" visibility="public" name="getOriginalValues" returnType="array" params={[]}>
Return the array for original values
</ApiItem>
<ApiItem href="#mvcmodelbinder-setcache" visibility="public" name="setCache" returnType="BinderInterface" params={[{"type":"AdapterInterface","name":"cache","default":null}]}>
Gets cache instance
</ApiItem>
<ApiItem href="#mvcmodelbinder-findboundmodel" visibility="protected" name="findBoundModel" returnType="" params={[{"type":"mixed","name":"paramValue","default":null},{"type":"string","name":"className","default":null}]}>
Find the model by param value.
</ApiItem>
<ApiItem href="#mvcmodelbinder-getparamsfromcache" visibility="protected" name="getParamsFromCache" returnType="array|null" params={[{"type":"string","name":"cacheKey","default":null}]}>
Get params classes from cache by key
</ApiItem>
<ApiItem href="#mvcmodelbinder-getparamsfromreflection" visibility="protected" name="getParamsFromReflection" returnType="array" params={[{"type":"object","name":"handler","default":null},{"type":"array","name":"params","default":null},{"type":"string","name":"cacheKey","default":null},{"type":"string","name":"methodName","default":null}]}>
Get modified params for handler using reflection
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="boundModels" type="array" default="[]">
Array for storing active bound models
</ApiItem>
<ApiItem kind="property" visibility="protected" name="cache" type="AdapterInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="internalCache" type="array" default="[]">
Internal cache for caching parameters for model binding during request
</ApiItem>
<ApiItem kind="property" visibility="protected" name="originalValues" type="array" default="[]">
Array for original values
</ApiItem>

### Methods

<h4 id="mvcmodelbinder-__construct"><code>__construct()</code></h4>

```php
public function __construct( AdapterInterface|null $cache = null );
```

Phalcon\Mvc\Model\Binder constructor

<h4 id="mvcmodelbinder-bindtohandler"><code>bindToHandler()</code></h4>

```php
public function bindToHandler(
object $handler,
array $params,
string $cacheKey,
string|null $methodName = null
): array;
```

Bind models into params in proper handler

<h4 id="mvcmodelbinder-getboundmodels"><code>getBoundModels()</code></h4>

```php
public function getBoundModels(): array;
```

Return the active bound models

<h4 id="mvcmodelbinder-getcache"><code>getCache()</code></h4>

```php
public function getCache(): AdapterInterface;
```

Sets cache instance

<h4 id="mvcmodelbinder-getoriginalvalues"><code>getOriginalValues()</code></h4>

```php
public function getOriginalValues(): array;
```

Return the array for original values

<h4 id="mvcmodelbinder-setcache"><code>setCache()</code></h4>

```php
public function setCache( AdapterInterface $cache ): BinderInterface;
```

Gets cache instance

<h4 id="mvcmodelbinder-findboundmodel"><code>findBoundModel()</code></h4>

```php
protected function findBoundModel(
mixed $paramValue,
string $className
);
```

Find the model by param value.

<h4 id="mvcmodelbinder-getparamsfromcache"><code>getParamsFromCache()</code></h4>

```php
protected function getParamsFromCache( string $cacheKey ): array|null;
```

Get params classes from cache by key

<h4 id="mvcmodelbinder-getparamsfromreflection"><code>getParamsFromReflection()</code></h4>

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

Interface

Phalcon\Mvc\Model\BinderInterface

Interface for Phalcon\Mvc\Model\Binder

- **`Phalcon\Mvc\Model\BinderInterface`**

`Phalcon\Cache\Adapter\AdapterInterface`

### Method Summary

<ApiItem href="#mvcmodelbinderinterface-bindtohandler" visibility="public" name="bindToHandler" returnType="array" params={[{"type":"object","name":"handler","default":null},{"type":"array","name":"params","default":null},{"type":"string","name":"cacheKey","default":null},{"type":"string|null","name":"methodName","default":"null"}]}>
Bind models into params in proper handler
</ApiItem>
<ApiItem href="#mvcmodelbinderinterface-getboundmodels" visibility="public" name="getBoundModels" returnType="array" params={[]}>
Gets active bound models
</ApiItem>
<ApiItem href="#mvcmodelbinderinterface-getcache" visibility="public" name="getCache" returnType="AdapterInterface" params={[]}>
Gets cache instance
</ApiItem>
<ApiItem href="#mvcmodelbinderinterface-setcache" visibility="public" name="setCache" returnType="BinderInterface" params={[{"type":"AdapterInterface","name":"cache","default":null}]}>
Sets cache instance
</ApiItem>

### Methods

<h4 id="mvcmodelbinderinterface-bindtohandler"><code>bindToHandler()</code></h4>

```php
public function bindToHandler(
object $handler,
array $params,
string $cacheKey,
string|null $methodName = null
): array;
```

Bind models into params in proper handler

<h4 id="mvcmodelbinderinterface-getboundmodels"><code>getBoundModels()</code></h4>

```php
public function getBoundModels(): array;
```

Gets active bound models

<h4 id="mvcmodelbinderinterface-getcache"><code>getCache()</code></h4>

```php
public function getCache(): AdapterInterface;
```

Gets cache instance

<h4 id="mvcmodelbinderinterface-setcache"><code>setCache()</code></h4>

```php
public function setCache( AdapterInterface $cache ): BinderInterface;
```

Sets cache instance

## Mvc\Model\Binder\BindableInterface

Interface

Interface for bindable classes

- **`Phalcon\Mvc\Model\Binder\BindableInterface`**

### Method Summary

<ApiItem href="#mvcmodelbinderbindableinterface-getmodelname" visibility="public" name="getModelName" returnType="array|string" params={[]}>
Return the model name or models names and parameters keys associated with
</ApiItem>

### Methods

<h4 id="mvcmodelbinderbindableinterface-getmodelname"><code>getModelName()</code></h4>

```php
public function getModelName(): array|string;
```

Return the model name or models names and parameters keys associated with
this class

## Mvc\Model\Criteria

Class

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

- **`Phalcon\Mvc\Model\Criteria`** - implements [`Phalcon\Mvc\Model\CriteriaInterface`](#mvcmodelcriteriainterface), [`Phalcon\Di\InjectionAwareInterface`](/6.0/api/phalcon_di/#diinjectionawareinterface)

`Phalcon\Db\Column` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Mvc\Model\Exceptions\InvalidModelName` · `Phalcon\Mvc\Model\Query\BuilderInterface`

### Method Summary

<ApiItem href="#mvcmodelcriteria-andwhere" visibility="public" name="andWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array|null","name":"bindParams","default":"null"},{"type":"array|null","name":"bindTypes","default":"null"}]}>
Appends a condition to the current conditions using an AND operator
</ApiItem>
<ApiItem href="#mvcmodelcriteria-betweenwhere" visibility="public" name="betweenWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null}]}>
Appends a BETWEEN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelcriteria-bind" visibility="public" name="bind" returnType="CriteriaInterface" params={[{"type":"array","name":"bindParams","default":null},{"type":"bool","name":"merge","default":"false"}]}>
Sets the bound parameters in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-bindtypes" visibility="public" name="bindTypes" returnType="CriteriaInterface" params={[{"type":"array","name":"bindTypes","default":null}]}>
Sets the bind types in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-cache" visibility="public" name="cache" returnType="CriteriaInterface" params={[{"type":"array","name":"cache","default":null}]}>
Sets the cache options in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-columns" visibility="public" name="columns" returnType="CriteriaInterface" params={[{"type":"array|string","name":"columns","default":null}]}>
Sets the columns to be queried. The columns can be either a `string` or
</ApiItem>
<ApiItem href="#mvcmodelcriteria-conditions" visibility="public" name="conditions" returnType="CriteriaInterface" params={[{"type":"string","name":"conditions","default":null}]}>
Adds the conditions parameter to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-createbuilder" visibility="public" name="createBuilder" returnType="BuilderInterface" params={[]}>
Creates a query builder from criteria.
</ApiItem>
<ApiItem href="#mvcmodelcriteria-distinct" visibility="public" name="distinct" returnType="CriteriaInterface" params={[{"type":"mixed","name":"distinct","default":null}]}>
Sets SELECT DISTINCT / SELECT ALL flag
</ApiItem>
<ApiItem href="#mvcmodelcriteria-eager" visibility="public" name="eager" returnType="Criteria" params={[{"type":"array","name":"paths","default":null}]}>
Pre-loads the named relations when the criteria is executed
</ApiItem>
<ApiItem href="#mvcmodelcriteria-execute" visibility="public" name="execute" returnType="ResultsetInterface" params={[]}>
Executes a find using the parameters built with the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-forupdate" visibility="public" name="forUpdate" returnType="CriteriaInterface" params={[{"type":"bool","name":"forUpdate","default":"true"}]}>
Adds the "for_update" parameter to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-frominput" visibility="public" name="fromInput" returnType="CriteriaInterface" params={[{"type":"DiInterface","name":"container","default":null},{"type":"string","name":"modelName","default":null},{"type":"array","name":"data","default":null},{"type":"string","name":"operator","default":"\"AND\""}]}>
Builds a Phalcon\Mvc\Model\Criteria based on an input array like $_POST
</ApiItem>
<ApiItem href="#mvcmodelcriteria-getcolumns" visibility="public" name="getColumns" returnType="array|string|null" params={[]}>
Returns the columns to be queried
</ApiItem>
<ApiItem href="#mvcmodelcriteria-getconditions" visibility="public" name="getConditions" returnType="string|null" params={[]}>
Returns the conditions parameter in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-getdi" visibility="public" name="getDI" returnType="DiInterface" params={[]}>
Returns the DependencyInjector container
</ApiItem>
<ApiItem href="#mvcmodelcriteria-getgroupby" visibility="public" name="getGroupBy" returnType="" params={[]}>
Returns the group clause in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-gethaving" visibility="public" name="getHaving" returnType="" params={[]}>
Returns the having clause in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-getlimit" visibility="public" name="getLimit" returnType="array|int|null" params={[]}>
Returns the limit parameter in the criteria, which will be
</ApiItem>
<ApiItem href="#mvcmodelcriteria-getmodelname" visibility="public" name="getModelName" returnType="string" params={[]}>
Returns an internal model name on which the criteria will be applied
</ApiItem>
<ApiItem href="#mvcmodelcriteria-getorderby" visibility="public" name="getOrderBy" returnType="string|null" params={[]}>
Returns the order clause in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-getparams" visibility="public" name="getParams" returnType="array" params={[]}>
Returns all the parameters defined in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-getwhere" visibility="public" name="getWhere" returnType="string|null" params={[]}>
Returns the conditions parameter in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-groupby" visibility="public" name="groupBy" returnType="CriteriaInterface" params={[{"type":"mixed","name":"group","default":null}]}>
Adds the group-by clause to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-having" visibility="public" name="having" returnType="CriteriaInterface" params={[{"type":"mixed","name":"having","default":null}]}>
Adds the having clause to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-inwhere" visibility="public" name="inWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null}]}>
Appends an IN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelcriteria-innerjoin" visibility="public" name="innerJoin" returnType="CriteriaInterface" params={[{"type":"string","name":"model","default":null},{"type":"mixed","name":"conditions","default":"null"},{"type":"mixed","name":"alias","default":"null"}]}>
Adds an INNER join to the query
</ApiItem>
<ApiItem href="#mvcmodelcriteria-join" visibility="public" name="join" returnType="CriteriaInterface" params={[{"type":"string","name":"model","default":null},{"type":"mixed","name":"conditions","default":"null"},{"type":"mixed","name":"alias","default":"null"},{"type":"mixed","name":"type","default":"null"}]}>
Adds an INNER join to the query
</ApiItem>
<ApiItem href="#mvcmodelcriteria-leftjoin" visibility="public" name="leftJoin" returnType="CriteriaInterface" params={[{"type":"string","name":"model","default":null},{"type":"mixed","name":"conditions","default":"null"},{"type":"mixed","name":"alias","default":"null"}]}>
Adds a LEFT join to the query
</ApiItem>
<ApiItem href="#mvcmodelcriteria-limit" visibility="public" name="limit" returnType="CriteriaInterface" params={[{"type":"int","name":"limit","default":null},{"type":"int","name":"offset","default":"0"}]}>
Adds the limit parameter to the criteria.
</ApiItem>
<ApiItem href="#mvcmodelcriteria-notbetweenwhere" visibility="public" name="notBetweenWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null}]}>
Appends a NOT BETWEEN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelcriteria-notinwhere" visibility="public" name="notInWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null}]}>
Appends a NOT IN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelcriteria-orwhere" visibility="public" name="orWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array|null","name":"bindParams","default":"null"},{"type":"array|null","name":"bindTypes","default":"null"}]}>
Appends a condition to the current conditions using an OR operator
</ApiItem>
<ApiItem href="#mvcmodelcriteria-orderby" visibility="public" name="orderBy" returnType="CriteriaInterface" params={[{"type":"string","name":"orderColumns","default":null}]}>
Adds the order-by clause to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-rightjoin" visibility="public" name="rightJoin" returnType="CriteriaInterface" params={[{"type":"string","name":"model","default":null},{"type":"mixed","name":"conditions","default":"null"},{"type":"mixed","name":"alias","default":"null"}]}>
Adds a RIGHT join to the query
</ApiItem>
<ApiItem href="#mvcmodelcriteria-setdi" visibility="public" name="setDI" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Sets the DependencyInjector container
</ApiItem>
<ApiItem href="#mvcmodelcriteria-setmodelname" visibility="public" name="setModelName" returnType="CriteriaInterface" params={[{"type":"string","name":"modelName","default":null}]}>
Set a model on which the query will be executed
</ApiItem>
<ApiItem href="#mvcmodelcriteria-sharedlock" visibility="public" name="sharedLock" returnType="CriteriaInterface" params={[{"type":"bool","name":"sharedLock","default":"true"}]}>
Adds the "shared_lock" parameter to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteria-where" visibility="public" name="where" returnType="CriteriaInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array|null","name":"bindParams","default":"null"},{"type":"array|null","name":"bindTypes","default":"null"}]}>
Sets the conditions parameter in the criteria
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="bindParams" type="array" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="bindTypes" type="array" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hiddenParamNumber" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="model" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="params" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="mvcmodelcriteria-andwhere"><code>andWhere()</code></h4>

```php
public function andWhere(
string $conditions,
array|null $bindParams = null,
array|null $bindTypes = null
): CriteriaInterface;
```

Appends a condition to the current conditions using an AND operator

<h4 id="mvcmodelcriteria-betweenwhere"><code>betweenWhere()</code></h4>

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

<h4 id="mvcmodelcriteria-bind"><code>bind()</code></h4>

```php
public function bind(
array $bindParams,
bool $merge = false
): CriteriaInterface;
```

Sets the bound parameters in the criteria
This method replaces all previously set bound parameters

<h4 id="mvcmodelcriteria-bindtypes"><code>bindTypes()</code></h4>

```php
public function bindTypes( array $bindTypes ): CriteriaInterface;
```

Sets the bind types in the criteria
This method replaces all previously set bound parameters

<h4 id="mvcmodelcriteria-cache"><code>cache()</code></h4>

```php
public function cache( array $cache ): CriteriaInterface;
```

Sets the cache options in the criteria
This method replaces all previously set cache options

<h4 id="mvcmodelcriteria-columns"><code>columns()</code></h4>

```php
public function columns( array|string $columns ): CriteriaInterface;
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

<h4 id="mvcmodelcriteria-conditions"><code>conditions()</code></h4>

```php
public function conditions( string $conditions ): CriteriaInterface;
```

Adds the conditions parameter to the criteria

<h4 id="mvcmodelcriteria-createbuilder"><code>createBuilder()</code></h4>

```php
public function createBuilder(): BuilderInterface;
```

Creates a query builder from criteria.

```php
<?php

$invoices = Invoices::query()
->where("inv_cst_id = :customerId:")
->bind(["customerId" => 1])
->createBuilder();
```

<h4 id="mvcmodelcriteria-distinct"><code>distinct()</code></h4>

```php
public function distinct( mixed $distinct ): CriteriaInterface;
```

Sets SELECT DISTINCT / SELECT ALL flag

<h4 id="mvcmodelcriteria-eager"><code>eager()</code></h4>

```php
public function eager( array $paths ): Criteria;
```

Pre-loads the named relations when the criteria is executed

```php
$invoices = Invoices::query()
->eager(["customer"])
->where("inv_total > 100")
->execute();
```

execute() forwards the parameters to Model::find(), which owns the
loading, so this is a pass-through and takes the same shape: an array of
dot-delimited relation paths, optionally `path => options`.

Returns the concrete criteria rather than the interface because the
method is deliberately not part of CriteriaInterface - adding it there
would break every userland implementation.

<h4 id="mvcmodelcriteria-execute"><code>execute()</code></h4>

```php
public function execute(): ResultsetInterface;
```

Executes a find using the parameters built with the criteria

<h4 id="mvcmodelcriteria-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate( bool $forUpdate = true ): CriteriaInterface;
```

Adds the "for_update" parameter to the criteria

<h4 id="mvcmodelcriteria-frominput"><code>fromInput()</code></h4>

```php
public static function fromInput(
DiInterface $container,
string $modelName,
array $data,
string $operator = "AND"
): CriteriaInterface;
```

Builds a Phalcon\Mvc\Model\Criteria based on an input array like $_POST

<h4 id="mvcmodelcriteria-getcolumns"><code>getColumns()</code></h4>

```php
public function getColumns(): array|string|null;
```

Returns the columns to be queried

<h4 id="mvcmodelcriteria-getconditions"><code>getConditions()</code></h4>

```php
public function getConditions(): string|null;
```

Returns the conditions parameter in the criteria

<h4 id="mvcmodelcriteria-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface;
```

Returns the DependencyInjector container

<h4 id="mvcmodelcriteria-getgroupby"><code>getGroupBy()</code></h4>

```php
public function getGroupBy();
```

Returns the group clause in the criteria

<h4 id="mvcmodelcriteria-gethaving"><code>getHaving()</code></h4>

```php
public function getHaving();
```

Returns the having clause in the criteria

<h4 id="mvcmodelcriteria-getlimit"><code>getLimit()</code></h4>

```php
public function getLimit(): array|int|null;
```

Returns the limit parameter in the criteria, which will be

- An integer if 'limit' was set without an 'offset'
- An array with 'number' and 'offset' keys if an offset was set with the limit
- NULL if limit has not been set

<h4 id="mvcmodelcriteria-getmodelname"><code>getModelName()</code></h4>

```php
public function getModelName(): string;
```

Returns an internal model name on which the criteria will be applied

<h4 id="mvcmodelcriteria-getorderby"><code>getOrderBy()</code></h4>

```php
public function getOrderBy(): string|null;
```

Returns the order clause in the criteria

<h4 id="mvcmodelcriteria-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array;
```

Returns all the parameters defined in the criteria

<h4 id="mvcmodelcriteria-getwhere"><code>getWhere()</code></h4>

```php
public function getWhere(): string|null;
```

Returns the conditions parameter in the criteria

<h4 id="mvcmodelcriteria-groupby"><code>groupBy()</code></h4>

```php
public function groupBy( mixed $group ): CriteriaInterface;
```

Adds the group-by clause to the criteria

<h4 id="mvcmodelcriteria-having"><code>having()</code></h4>

```php
public function having( mixed $having ): CriteriaInterface;
```

Adds the having clause to the criteria

<h4 id="mvcmodelcriteria-inwhere"><code>inWhere()</code></h4>

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

<h4 id="mvcmodelcriteria-innerjoin"><code>innerJoin()</code></h4>

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

<h4 id="mvcmodelcriteria-join"><code>join()</code></h4>

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

<h4 id="mvcmodelcriteria-leftjoin"><code>leftJoin()</code></h4>

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

<h4 id="mvcmodelcriteria-limit"><code>limit()</code></h4>

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

<h4 id="mvcmodelcriteria-notbetweenwhere"><code>notBetweenWhere()</code></h4>

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

<h4 id="mvcmodelcriteria-notinwhere"><code>notInWhere()</code></h4>

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

<h4 id="mvcmodelcriteria-orwhere"><code>orWhere()</code></h4>

```php
public function orWhere(
string $conditions,
array|null $bindParams = null,
array|null $bindTypes = null
): CriteriaInterface;
```

Appends a condition to the current conditions using an OR operator

<h4 id="mvcmodelcriteria-orderby"><code>orderBy()</code></h4>

```php
public function orderBy( string $orderColumns ): CriteriaInterface;
```

Adds the order-by clause to the criteria

<h4 id="mvcmodelcriteria-rightjoin"><code>rightJoin()</code></h4>

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

<h4 id="mvcmodelcriteria-setdi"><code>setDI()</code></h4>

```php
public function setDI( DiInterface $container ): void;
```

Sets the DependencyInjector container

<h4 id="mvcmodelcriteria-setmodelname"><code>setModelName()</code></h4>

```php
public function setModelName( string $modelName ): CriteriaInterface;
```

Set a model on which the query will be executed

<h4 id="mvcmodelcriteria-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock( bool $sharedLock = true ): CriteriaInterface;
```

Adds the "shared_lock" parameter to the criteria

<h4 id="mvcmodelcriteria-where"><code>where()</code></h4>

```php
public function where(
string $conditions,
array|null $bindParams = null,
array|null $bindTypes = null
): CriteriaInterface;
```

Sets the conditions parameter in the criteria

## Mvc\Model\CriteriaInterface

Interface

Interface for Phalcon\Mvc\Model\Criteria

- **`Phalcon\Mvc\Model\CriteriaInterface`**

### Method Summary

<ApiItem href="#mvcmodelcriteriainterface-andwhere" visibility="public" name="andWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array|null","name":"bindParams","default":"null"},{"type":"array|null","name":"bindTypes","default":"null"}]}>
Appends a condition to the current conditions using an AND operator
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-betweenwhere" visibility="public" name="betweenWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null}]}>
Appends a BETWEEN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-bind" visibility="public" name="bind" returnType="CriteriaInterface" params={[{"type":"array","name":"bindParams","default":null}]}>
Sets the bound parameters in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-bindtypes" visibility="public" name="bindTypes" returnType="CriteriaInterface" params={[{"type":"array","name":"bindTypes","default":null}]}>
Sets the bind types in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-cache" visibility="public" name="cache" returnType="CriteriaInterface" params={[{"type":"array","name":"cache","default":null}]}>
Sets the cache options in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-conditions" visibility="public" name="conditions" returnType="CriteriaInterface" params={[{"type":"string","name":"conditions","default":null}]}>
Adds the conditions parameter to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-distinct" visibility="public" name="distinct" returnType="CriteriaInterface" params={[{"type":"mixed","name":"distinct","default":null}]}>
Sets SELECT DISTINCT / SELECT ALL flag
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-execute" visibility="public" name="execute" returnType="ResultsetInterface" params={[]}>
Executes a find using the parameters built with the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-forupdate" visibility="public" name="forUpdate" returnType="CriteriaInterface" params={[{"type":"bool","name":"forUpdate","default":"true"}]}>
Sets the "for_update" parameter to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-getcolumns" visibility="public" name="getColumns" returnType="array|string|null" params={[]}>
Returns the columns to be queried
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-getconditions" visibility="public" name="getConditions" returnType="string|null" params={[]}>
Returns the conditions parameter in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-getgroupby" visibility="public" name="getGroupBy" returnType="" params={[]}>
Returns the group clause in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-gethaving" visibility="public" name="getHaving" returnType="" params={[]}>
Returns the having clause in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-getlimit" visibility="public" name="getLimit" returnType="array|int|null" params={[]}>
Returns the limit parameter in the criteria, which will be
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-getmodelname" visibility="public" name="getModelName" returnType="string" params={[]}>
Returns an internal model name on which the criteria will be applied
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-getorderby" visibility="public" name="getOrderBy" returnType="string|null" params={[]}>
Returns the order parameter in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-getparams" visibility="public" name="getParams" returnType="array" params={[]}>
Returns all the parameters defined in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-getwhere" visibility="public" name="getWhere" returnType="string|null" params={[]}>
Returns the conditions parameter in the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-groupby" visibility="public" name="groupBy" returnType="CriteriaInterface" params={[{"type":"mixed","name":"group","default":null}]}>
Adds the group-by clause to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-having" visibility="public" name="having" returnType="CriteriaInterface" params={[{"type":"mixed","name":"having","default":null}]}>
Adds the having clause to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-inwhere" visibility="public" name="inWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null}]}>
Appends an IN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-innerjoin" visibility="public" name="innerJoin" returnType="CriteriaInterface" params={[{"type":"string","name":"model","default":null},{"type":"mixed","name":"conditions","default":"null"},{"type":"mixed","name":"alias","default":"null"}]}>
Adds an INNER join to the query
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-leftjoin" visibility="public" name="leftJoin" returnType="CriteriaInterface" params={[{"type":"string","name":"model","default":null},{"type":"mixed","name":"conditions","default":"null"},{"type":"mixed","name":"alias","default":"null"}]}>
Adds a LEFT join to the query
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-limit" visibility="public" name="limit" returnType="CriteriaInterface" params={[{"type":"int","name":"limit","default":null},{"type":"int","name":"offset","default":"0"}]}>
Sets the limit parameter to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-notbetweenwhere" visibility="public" name="notBetweenWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null}]}>
Appends a NOT BETWEEN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-notinwhere" visibility="public" name="notInWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null}]}>
Appends a NOT IN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-orwhere" visibility="public" name="orWhere" returnType="CriteriaInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array|null","name":"bindParams","default":"null"},{"type":"array|null","name":"bindTypes","default":"null"}]}>
Appends a condition to the current conditions using an OR operator
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-orderby" visibility="public" name="orderBy" returnType="CriteriaInterface" params={[{"type":"string","name":"orderColumns","default":null}]}>
Adds the order-by parameter to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-rightjoin" visibility="public" name="rightJoin" returnType="CriteriaInterface" params={[{"type":"string","name":"model","default":null},{"type":"mixed","name":"conditions","default":"null"},{"type":"mixed","name":"alias","default":"null"}]}>
Adds a RIGHT join to the query
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-setmodelname" visibility="public" name="setModelName" returnType="CriteriaInterface" params={[{"type":"string","name":"modelName","default":null}]}>
Set a model on which the query will be executed
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-sharedlock" visibility="public" name="sharedLock" returnType="CriteriaInterface" params={[{"type":"bool","name":"sharedLock","default":"true"}]}>
Sets the "shared_lock" parameter to the criteria
</ApiItem>
<ApiItem href="#mvcmodelcriteriainterface-where" visibility="public" name="where" returnType="CriteriaInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array|null","name":"bindParams","default":"null"},{"type":"array|null","name":"bindTypes","default":"null"}]}>
Sets the conditions parameter in the criteria
</ApiItem>

### Methods

<h4 id="mvcmodelcriteriainterface-andwhere"><code>andWhere()</code></h4>

```php
public function andWhere(
string $conditions,
array|null $bindParams = null,
array|null $bindTypes = null
): CriteriaInterface;
```

Appends a condition to the current conditions using an AND operator

<h4 id="mvcmodelcriteriainterface-betweenwhere"><code>betweenWhere()</code></h4>

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

<h4 id="mvcmodelcriteriainterface-bind"><code>bind()</code></h4>

```php
public function bind( array $bindParams ): CriteriaInterface;
```

Sets the bound parameters in the criteria
This method replaces all previously set bound parameters

<h4 id="mvcmodelcriteriainterface-bindtypes"><code>bindTypes()</code></h4>

```php
public function bindTypes( array $bindTypes ): CriteriaInterface;
```

Sets the bind types in the criteria
This method replaces all previously set bound parameters

<h4 id="mvcmodelcriteriainterface-cache"><code>cache()</code></h4>

```php
public function cache( array $cache ): CriteriaInterface;
```

Sets the cache options in the criteria
This method replaces all previously set cache options

<h4 id="mvcmodelcriteriainterface-conditions"><code>conditions()</code></h4>

```php
public function conditions( string $conditions ): CriteriaInterface;
```

Adds the conditions parameter to the criteria

<h4 id="mvcmodelcriteriainterface-distinct"><code>distinct()</code></h4>

```php
public function distinct( mixed $distinct ): CriteriaInterface;
```

Sets SELECT DISTINCT / SELECT ALL flag

<h4 id="mvcmodelcriteriainterface-execute"><code>execute()</code></h4>

```php
public function execute(): ResultsetInterface;
```

Executes a find using the parameters built with the criteria

<h4 id="mvcmodelcriteriainterface-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate( bool $forUpdate = true ): CriteriaInterface;
```

Sets the "for_update" parameter to the criteria

<h4 id="mvcmodelcriteriainterface-getcolumns"><code>getColumns()</code></h4>

```php
public function getColumns(): array|string|null;
```

Returns the columns to be queried

<h4 id="mvcmodelcriteriainterface-getconditions"><code>getConditions()</code></h4>

```php
public function getConditions(): string|null;
```

Returns the conditions parameter in the criteria

<h4 id="mvcmodelcriteriainterface-getgroupby"><code>getGroupBy()</code></h4>

```php
public function getGroupBy();
```

Returns the group clause in the criteria

<h4 id="mvcmodelcriteriainterface-gethaving"><code>getHaving()</code></h4>

```php
public function getHaving();
```

Returns the having clause in the criteria

<h4 id="mvcmodelcriteriainterface-getlimit"><code>getLimit()</code></h4>

```php
public function getLimit(): array|int|null;
```

Returns the limit parameter in the criteria, which will be

- An integer if 'limit' was set without an 'offset'
- An array with 'number' and 'offset' keys if an offset was set with the limit
- NULL if limit has not been set

<h4 id="mvcmodelcriteriainterface-getmodelname"><code>getModelName()</code></h4>

```php
public function getModelName(): string;
```

Returns an internal model name on which the criteria will be applied

<h4 id="mvcmodelcriteriainterface-getorderby"><code>getOrderBy()</code></h4>

```php
public function getOrderBy(): string|null;
```

Returns the order parameter in the criteria

<h4 id="mvcmodelcriteriainterface-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array;
```

Returns all the parameters defined in the criteria

<h4 id="mvcmodelcriteriainterface-getwhere"><code>getWhere()</code></h4>

```php
public function getWhere(): string|null;
```

Returns the conditions parameter in the criteria

<h4 id="mvcmodelcriteriainterface-groupby"><code>groupBy()</code></h4>

```php
public function groupBy( mixed $group ): CriteriaInterface;
```

Adds the group-by clause to the criteria

<h4 id="mvcmodelcriteriainterface-having"><code>having()</code></h4>

```php
public function having( mixed $having ): CriteriaInterface;
```

Adds the having clause to the criteria

<h4 id="mvcmodelcriteriainterface-inwhere"><code>inWhere()</code></h4>

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

<h4 id="mvcmodelcriteriainterface-innerjoin"><code>innerJoin()</code></h4>

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
Orders::class
);

$criteria->innerJoin(
Orders::class,
"r.ord_id = OrdersProducts.oxp_ord_id"
);

$criteria->innerJoin(
Orders::class,
"r.ord_id = OrdersProducts.oxp_ord_id",
"r"
);
```

<h4 id="mvcmodelcriteriainterface-leftjoin"><code>leftJoin()</code></h4>

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
Orders::class,
"r.ord_id = OrdersProducts.oxp_ord_id",
"r"
);
```

<h4 id="mvcmodelcriteriainterface-limit"><code>limit()</code></h4>

```php
public function limit(
int $limit,
int $offset = 0
): CriteriaInterface;
```

Sets the limit parameter to the criteria

<h4 id="mvcmodelcriteriainterface-notbetweenwhere"><code>notBetweenWhere()</code></h4>

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

<h4 id="mvcmodelcriteriainterface-notinwhere"><code>notInWhere()</code></h4>

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

<h4 id="mvcmodelcriteriainterface-orwhere"><code>orWhere()</code></h4>

```php
public function orWhere(
string $conditions,
array|null $bindParams = null,
array|null $bindTypes = null
): CriteriaInterface;
```

Appends a condition to the current conditions using an OR operator

<h4 id="mvcmodelcriteriainterface-orderby"><code>orderBy()</code></h4>

```php
public function orderBy( string $orderColumns ): CriteriaInterface;
```

Adds the order-by parameter to the criteria

<h4 id="mvcmodelcriteriainterface-rightjoin"><code>rightJoin()</code></h4>

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
Orders::class,
"r.ord_id = OrdersProducts.oxp_ord_id",
"r"
);
```

<h4 id="mvcmodelcriteriainterface-setmodelname"><code>setModelName()</code></h4>

```php
public function setModelName( string $modelName ): CriteriaInterface;
```

Set a model on which the query will be executed

<h4 id="mvcmodelcriteriainterface-sharedlock"><code>sharedLock()</code></h4>

```php
public function sharedLock( bool $sharedLock = true ): CriteriaInterface;
```

Sets the "shared_lock" parameter to the criteria

<h4 id="mvcmodelcriteriainterface-where"><code>where()</code></h4>

```php
public function where(
string $conditions,
array|null $bindParams = null,
array|null $bindTypes = null
): CriteriaInterface;
```

Sets the conditions parameter in the criteria

## Mvc\Model\Eager\Loader

Class

Loads model relations in bulk - a bounded number of queries per relation
node rather than one per record - and applies the result to records as they
are hydrated.

- **`Phalcon\Mvc\Model\Eager\Loader`**

`Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Exceptions\EagerRowLimitExceeded` · `Phalcon\Mvc\Model\Exceptions\MissingEagerKeyColumn` · `Phalcon\Mvc\Model\Exceptions\UnknownEagerRelation` · `Phalcon\Mvc\Model\Manager` · `Phalcon\Mvc\Model\ManagerInterface` · `Phalcon\Mvc\Model\Relation` · `Phalcon\Mvc\Model\RelationInterface` · `Phalcon\Mvc\Model\Resultset\Simple`

### Method Summary

<ApiItem href="#mvcmodeleagerloader-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"ManagerInterface","name":"manager","default":null}]}>
</ApiItem>
<ApiItem href="#mvcmodeleagerloader-apply" visibility="public" name="apply" returnType="void" params={[{"type":"object","name":"record","default":null},{"type":"array","name":"eagerMap","default":null}]}>
Applies a pre-built eager map to a single record.
</ApiItem>
<ApiItem href="#mvcmodeleagerloader-buildkey" visibility="public" name="buildKey" returnType="string" params={[{"type":"array","name":"values","default":null}]}>
Builds the lookup key for a set of key-field values.
</ApiItem>
<ApiItem href="#mvcmodeleagerloader-loadresultset" visibility="public" name="loadResultset" returnType="void" params={[{"type":"Simple","name":"resultset","default":null},{"type":"string","name":"modelName","default":null},{"type":"array","name":"tree","default":null}]}>
Loads a relation tree for a root resultset.
</ApiItem>
<ApiItem href="#mvcmodeleagerloader-buildmap" visibility="protected" name="buildMap" returnType="array" params={[{"type":"array","name":"parents","default":null},{"type":"string","name":"modelName","default":null},{"type":"array","name":"tree","default":null}]}>
Builds one level of the map.
</ApiItem>
<ApiItem href="#mvcmodeleagerloader-buildnode" visibility="protected" name="buildNode" returnType="array" params={[{"type":"RelationInterface","name":"relation","default":null},{"type":"string","name":"alias","default":null},{"type":"array","name":"parents","default":null},{"type":"array","name":"node","default":null}]}>
Builds a single map node: one query, indexed by the referenced field.
</ApiItem>
<ApiItem href="#mvcmodeleagerloader-buildthroughnode" visibility="protected" name="buildThroughNode" returnType="array" params={[{"type":"RelationInterface","name":"relation","default":null},{"type":"string","name":"alias","default":null},{"type":"array","name":"parents","default":null},{"type":"array","name":"node","default":null}]}>
Through-relations in two steps rather than a join.
</ApiItem>
<ApiItem href="#mvcmodeleagerloader-collectkeys" visibility="protected" name="collectKeys" returnType="array" params={[{"type":"array","name":"parents","default":null},{"type":"array","name":"fields","default":null},{"type":"string","name":"alias","default":null}]}>
Distinct, non-null local key tuples across the parent set.
</ApiItem>
<ApiItem href="#mvcmodeleagerloader-fetchreferenced" visibility="protected" name="fetchReferenced" returnType="Simple" params={[{"type":"RelationInterface","name":"relation","default":null},{"type":"string","name":"alias","default":null},{"type":"array","name":"keys","default":null},{"type":"array","name":"options","default":null}]}>
One query per relation node. An empty key set issues none at all -
</ApiItem>
<ApiItem href="#mvcmodeleagerloader-normalizefields" visibility="protected" name="normalizeFields" returnType="array" params={[{"type":"mixed","name":"fields","default":null}]}>
Relation fields are declared as a string for a single column and an
</ApiItem>
<ApiItem href="#mvcmodeleagerloader-recordkey" visibility="protected" name="recordKey" returnType="string" params={[{"type":"object","name":"record","default":null},{"type":"array","name":"fields","default":null}]}>
Lookup key for an already-hydrated record.
</ApiItem>

### Constants

<ApiItem kind="constant" name="MAX_ROWS_PER_LEVEL" type="int" default="100000">
Maximum number of rows a single relation node may return before the load
is refused. Guards against a to-many hop that follows a to-one hop, which
can fan out to an entire table.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="manager" type="ManagerInterface" default="">
</ApiItem>

### Methods

<h4 id="mvcmodeleagerloader-__construct"><code>__construct()</code></h4>

```php
public function __construct( ManagerInterface $manager );
```

<h4 id="mvcmodeleagerloader-apply"><code>apply()</code></h4>

```php
public static function apply(
object $record,
array $eagerMap
): void;
```

Applies a pre-built eager map to a single record.

Shared by Resultset\Simple::current(), which stamps records as they are
hydrated, and by the loader itself, which stamps instances it retains.

Both Model and Row implement readAttribute(), so key extraction is
uniform; only the write differs. A Row is what a column-restricted
select produces, and it has no relation cache.

<h4 id="mvcmodeleagerloader-buildkey"><code>buildKey()</code></h4>

```php
public static function buildKey( array $values ): string;
```

Builds the lookup key for a set of key-field values.

Always a string. A single value is cast, which also neutralizes the
PostgreSQL-integer / MySQL-string mismatch for the same column. Multiple
values are length-prefixed so ["a|b", "c"] cannot collide with
["a", "b|c"].

<h4 id="mvcmodeleagerloader-loadresultset"><code>loadResultset()</code></h4>

```php
public function loadResultset(
Simple $resultset,
string $modelName,
array $tree
): void;
```

Loads a relation tree for a root resultset.

The resultset is materialized first: at this point the statement has run
but no row has been consumed, so fetching every row costs nothing extra
and gives the key values without a second pass over the cursor.

<h4 id="mvcmodeleagerloader-buildmap"><code>buildMap()</code></h4>

```php
protected function buildMap(
array $parents,
string $modelName,
array $tree
): array;
```

Builds one level of the map.

<h4 id="mvcmodeleagerloader-buildnode"><code>buildNode()</code></h4>

```php
protected function buildNode(
RelationInterface $relation,
string $alias,
array $parents,
array $node
): array;
```

Builds a single map node: one query, indexed by the referenced field.

<h4 id="mvcmodeleagerloader-buildthroughnode"><code>buildThroughNode()</code></h4>

```php
protected function buildThroughNode(
RelationInterface $relation,
string $alias,
array $parents,
array $node
): array;
```

Through-relations in two steps rather than a join.

Step one fetches (parentKey, referencedKey) pairs from the intermediate
model; step two fetches the referenced rows for the keys those pairs
collected. The pairs then attribute referenced rows back to parents
without a synthetic column in the select list, and without the row
multiplication an inner join would cause.

<h4 id="mvcmodeleagerloader-collectkeys"><code>collectKeys()</code></h4>

```php
protected function collectKeys(
array $parents,
array $fields,
string $alias
): array;
```

Distinct, non-null local key tuples across the parent set.

<h4 id="mvcmodeleagerloader-fetchreferenced"><code>fetchReferenced()</code></h4>

```php
protected function fetchReferenced(
RelationInterface $relation,
string $alias,
array $keys,
array $options
): Simple;
```

One query per relation node. An empty key set issues none at all -
WHERE IN () is a syntax error and there is nothing to attribute.

<h4 id="mvcmodeleagerloader-normalizefields"><code>normalizeFields()</code></h4>

```php
protected function normalizeFields( mixed $fields ): array;
```

Relation fields are declared as a string for a single column and an
array for a composite key. Normalizing removes that fork everywhere
downstream.

<h4 id="mvcmodeleagerloader-recordkey"><code>recordKey()</code></h4>

```php
protected function recordKey(
object $record,
array $fields
): string;
```

Lookup key for an already-hydrated record.

## Mvc\Model\Eager\PathTree

Class

Turns the `eager` find parameter into a tree.

Elements are either a bare path string or `path => options`. A path implies
every one of its prefixes and prefixes are merged, so ["customer",
"customer.country"] and ["customer.country"] produce the same two-node tree.
The number of queries an eager load costs follows the number of nodes in
this tree, not the number of elements supplied.

- **`Phalcon\Mvc\Model\Eager\PathTree`**

`Phalcon\Mvc\Model\Exceptions\InvalidEagerPath` · `Phalcon\Mvc\Model\Exceptions\UnsupportedEagerOption`

### Method Summary

<ApiItem href="#mvcmodeleagerpathtree-parse" visibility="public" name="parse" returnType="array" params={[{"type":"array","name":"spec","default":null}]}>
</ApiItem>

### Constants

<ApiItem kind="constant" name="MAX_DEPTH" type="int" default="5">
Longest path accepted. Depth alone is not what makes an eager load
expensive, but an unbounded path is never intentional.
</ApiItem>

### Methods

<h4 id="mvcmodeleagerpathtree-parse"><code>parse()</code></h4>

```php
public static function parse( array $spec ): array;
```

## Mvc\Model\Exception

Class

Phalcon\Mvc\Model\Exception

Exceptions thrown in Phalcon\Mvc\Model\* classes will use this class

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
- [`Phalcon\Mvc\Model\Exceptions\EagerRowLimitExceeded`](#mvcmodelexceptionseagerrowlimitexceeded)
- [`Phalcon\Mvc\Model\Exceptions\HandlerMustImplementBindable`](#mvcmodelexceptionshandlermustimplementbindable)
- [`Phalcon\Mvc\Model\Exceptions\IdentityNotInColumnMap`](#mvcmodelexceptionsidentitynotincolumnmap)
- [`Phalcon\Mvc\Model\Exceptions\IdentityNotInTableColumns`](#mvcmodelexceptionsidentitynotintablecolumns)
- [`Phalcon\Mvc\Model\Exceptions\IndexNotInCursor`](#mvcmodelexceptionsindexnotincursor)
- [`Phalcon\Mvc\Model\Exceptions\IndexNotInRow`](#mvcmodelexceptionsindexnotinrow)
- [`Phalcon\Mvc\Model\Exceptions\InvalidConnectionService`](#mvcmodelexceptionsinvalidconnectionservice)
- [`Phalcon\Mvc\Model\Exceptions\InvalidContainer`](#mvcmodelexceptionsinvalidcontainer)
- [`Phalcon\Mvc\Model\Exceptions\InvalidDumpResultKey`](#mvcmodelexceptionsinvaliddumpresultkey)
- [`Phalcon\Mvc\Model\Exceptions\InvalidEagerParameter`](#mvcmodelexceptionsinvalideagerparameter)
- [`Phalcon\Mvc\Model\Exceptions\InvalidEagerPath`](#mvcmodelexceptionsinvalideagerpath)
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
- [`Phalcon\Mvc\Model\Exceptions\MissingEagerKeyColumn`](#mvcmodelexceptionsmissingeagerkeycolumn)
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
- [`Phalcon\Mvc\Model\Exceptions\UnknownEagerRelation`](#mvcmodelexceptionsunknowneagerrelation)
- [`Phalcon\Mvc\Model\Exceptions\UnknownRelationType`](#mvcmodelexceptionsunknownrelationtype)
- [`Phalcon\Mvc\Model\Exceptions\UnsupportedEagerHydration`](#mvcmodelexceptionsunsupportedeagerhydration)
- [`Phalcon\Mvc\Model\Exceptions\UnsupportedEagerOption`](#mvcmodelexceptionsunsupportedeageroption)
- [`Phalcon\Mvc\Model\Exceptions\UnsupportedEagerResultset`](#mvcmodelexceptionsunsupportedeagerresultset)
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
- [`Phalcon\Mvc\Model\Query\Exceptions\InvalidResultsetRowClass`](#mvcmodelqueryexceptionsinvalidresultsetrowclass)
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
- [`Phalcon\Mvc\Model\Query\Exceptions\ResultsetRowClassNotFound`](#mvcmodelqueryexceptionsresultsetrowclassnotfound)
- [`Phalcon\Mvc\Model\Query\Exceptions\UnknownBindType`](#mvcmodelqueryexceptionsunknownbindtype)
- [`Phalcon\Mvc\Model\Query\Exceptions\UnknownColumnType`](#mvcmodelqueryexceptionsunknowncolumntype)
- [`Phalcon\Mvc\Model\Query\Exceptions\UnknownJoinType`](#mvcmodelqueryexceptionsunknownjointype)
- [`Phalcon\Mvc\Model\Query\Exceptions\UnknownModelOrAlias`](#mvcmodelqueryexceptionsunknownmodeloralias)
- [`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpression`](#mvcmodelqueryexceptionsunknownphqlexpression)
- [`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpressionType`](#mvcmodelqueryexceptionsunknownphqlexpressiontype)
- [`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlStatement`](#mvcmodelqueryexceptionsunknownphqlstatement)
- [`Phalcon\Mvc\Model\Query\Exceptions\UnsafeIdentifier`](#mvcmodelqueryexceptionsunsafeidentifier)
- [`Phalcon\Mvc\Model\Query\Exceptions\UpdateMultipleNotSupported`](#mvcmodelqueryexceptionsupdatemultiplenotsupported)
- [`Phalcon\Mvc\Model\Query\Exceptions\WriteConnectionMissing`](#mvcmodelqueryexceptionswriteconnectionmissing)
- [`Phalcon\Mvc\Model\Transaction\Exception`](#mvcmodeltransactionexception)
- [`Phalcon\Mvc\Model\ValidationFailed`](#mvcmodelvalidationfailed)

## Mvc\Model\Exceptions\BelongsToRequiresObject

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\BelongsToRequiresObject`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsbelongstorequiresobject-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null},{"type":"string","name":"relationName","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsbelongstorequiresobject-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $className,
string $relationName
);
```

## Mvc\Model\Exceptions\BindTypeNotDefined

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\BindTypeNotDefined`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsbindtypenotdefined-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"column","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsbindtypenotdefined-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $column,
string $className
);
```

## Mvc\Model\Exceptions\CannotResolveAttribute

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\CannotResolveAttribute`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionscannotresolveattribute-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"attribute","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionscannotresolveattribute-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $attribute,
string $className
);
```

## Mvc\Model\Exceptions\ColumnNotInMap

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\ColumnNotInMap`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionscolumnnotinmap-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"column","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionscolumnnotinmap-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $column,
string $className
);
```

## Mvc\Model\Exceptions\ColumnNotInTableColumns

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\ColumnNotInTableColumns`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionscolumnnotintablecolumns-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"column","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionscolumnnotintablecolumns-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $column,
string $className
);
```

## Mvc\Model\Exceptions\ColumnNotInTableMap

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\ColumnNotInTableMap`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionscolumnnotintablemap-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"column","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionscolumnnotintablemap-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $column,
string $className
);
```

## Mvc\Model\Exceptions\CorruptColumnType

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\CorruptColumnType`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionscorruptcolumntype-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionscorruptcolumntype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\CursorIsImmutable

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\CursorIsImmutable`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionscursorisimmutable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionscursorisimmutable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\DataTypeNotDefined

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\DataTypeNotDefined`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsdatatypenotdefined-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"column","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsdatatypenotdefined-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $column,
string $className
);
```

## Mvc\Model\Exceptions\EagerRowLimitExceeded

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\EagerRowLimitExceeded`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionseagerrowlimitexceeded-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"modelName","default":null},{"type":"int","name":"rowCount","default":null},{"type":"int","name":"limit","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionseagerrowlimitexceeded-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $modelName,
int $rowCount,
int $limit
);
```

## Mvc\Model\Exceptions\HandlerMustImplementBindable

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\HandlerMustImplementBindable`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionshandlermustimplementbindable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionshandlermustimplementbindable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\IdentityNotInColumnMap

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\IdentityNotInColumnMap`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsidentitynotincolumnmap-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"identityField","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsidentitynotincolumnmap-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $identityField,
string $className
);
```

## Mvc\Model\Exceptions\IdentityNotInTableColumns

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\IdentityNotInTableColumns`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsidentitynotintablecolumns-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"identityField","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsidentitynotintablecolumns-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $identityField,
string $className
);
```

## Mvc\Model\Exceptions\IndexNotInCursor

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\IndexNotInCursor`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsindexnotincursor-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsindexnotincursor-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\IndexNotInRow

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\IndexNotInRow`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsindexnotinrow-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsindexnotinrow-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\InvalidConnectionService

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidConnectionService`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalidconnectionservice-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalidconnectionservice-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\InvalidContainer

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidContainer`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalidcontainer-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalidcontainer-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\InvalidDumpResultKey

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidDumpResultKey`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvaliddumpresultkey-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvaliddumpresultkey-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Exceptions\InvalidEagerParameter

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidEagerParameter`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalideagerparameter-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalideagerparameter-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\InvalidEagerPath

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidEagerPath`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalideagerpath-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"path","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalideagerpath-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```

## Mvc\Model\Exceptions\InvalidFindParameters

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidFindParameters`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalidfindparameters-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalidfindparameters-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Exceptions\InvalidGetModelNameReturn

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidGetModelNameReturn`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalidgetmodelnamereturn-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalidgetmodelnamereturn-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\InvalidModelName

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidModelName`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalidmodelname-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalidmodelname-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\InvalidModelsManagerService

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidModelsManagerService`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalidmodelsmanagerservice-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalidmodelsmanagerservice-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Exceptions\InvalidModelsMetadataService

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidModelsMetadataService`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalidmodelsmetadataservice-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalidmodelsmetadataservice-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Exceptions\InvalidResultsetCacheService

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidResultsetCacheService`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalidresultsetcacheservice-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalidresultsetcacheservice-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\InvalidReturnedRecord

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidReturnedRecord`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalidreturnedrecord-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalidreturnedrecord-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\InvalidSerializationData

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\InvalidSerializationData`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsinvalidserializationdata-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsinvalidserializationdata-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\ManagerOrmServicesUnavailable

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\ManagerOrmServicesUnavailable`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsmanagerormservicesunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsmanagerormservicesunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\MethodNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\MethodNotFound`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsmethodnotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"method","default":null},{"type":"string","name":"modelName","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsmethodnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $method,
string $modelName
);
```

## Mvc\Model\Exceptions\MissingEagerKeyColumn

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\MissingEagerKeyColumn`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsmissingeagerkeycolumn-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"alias","default":null},{"type":"string","name":"column","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsmissingeagerkeycolumn-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $alias,
string $column
);
```

## Mvc\Model\Exceptions\MissingMethodName

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\MissingMethodName`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsmissingmethodname-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsmissingmethodname-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\MissingModelClassName

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\MissingModelClassName`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsmissingmodelclassname-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"paramKey","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsmissingmodelclassname-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $paramKey );
```

## Mvc\Model\Exceptions\ModelCouldNotLoad

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\ModelCouldNotLoad`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsmodelcouldnotload-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"modelName","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsmodelcouldnotload-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $modelName );
```

## Mvc\Model\Exceptions\ModelOrmServicesUnavailable

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\ModelOrmServicesUnavailable`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsmodelormservicesunavailable-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsmodelormservicesunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Exceptions\PrimaryKeyAttributeNotSet

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\PrimaryKeyAttributeNotSet`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsprimarykeyattributenotset-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"attribute","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsprimarykeyattributenotset-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $attribute,
string $className
);
```

## Mvc\Model\Exceptions\PrimaryKeyRequired

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\PrimaryKeyRequired`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsprimarykeyrequired-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsprimarykeyrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Exceptions\PropertyNotAccessible

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\PropertyNotAccessible`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionspropertynotaccessible-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"property","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionspropertynotaccessible-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $property,
string $className
);
```

## Mvc\Model\Exceptions\RecordCannotRefresh

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\RecordCannotRefresh`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsrecordcannotrefresh-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsrecordcannotrefresh-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Exceptions\RecordNotPersisted

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\RecordNotPersisted`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsrecordnotpersisted-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsrecordnotpersisted-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Exceptions\ReferencedFieldsMismatch

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\ReferencedFieldsMismatch`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsreferencedfieldsmismatch-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"relationType","default":null},{"type":"string","name":"entityName","default":null},{"type":"string","name":"referencedEntity","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsreferencedfieldsmismatch-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $relationType,
string $entityName,
string $referencedEntity
);
```

## Mvc\Model\Exceptions\RelationAliasMustBeString

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\RelationAliasMustBeString`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsrelationaliasmustbestring-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"relationType","default":null},{"type":"string","name":"entityName","default":null},{"type":"string","name":"referencedEntity","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsrelationaliasmustbestring-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $relationType,
string $entityName,
string $referencedEntity
);
```

## Mvc\Model\Exceptions\RelationNotDefined

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\RelationNotDefined`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsrelationnotdefined-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null},{"type":"string","name":"alias","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsrelationnotdefined-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $className,
string $alias
);
```

## Mvc\Model\Exceptions\RelationRequiresObjectOrArray

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\RelationRequiresObjectOrArray`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsrelationrequiresobjectorarray-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null},{"type":"string","name":"relationName","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsrelationrequiresobjectorarray-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $className,
string $relationName
);
```

## Mvc\Model\Exceptions\ResultsetColumnNotInMap

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\ResultsetColumnNotInMap`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsresultsetcolumnnotinmap-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"key","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsresultsetcolumnnotinmap-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $key );
```

## Mvc\Model\Exceptions\RowIsImmutable

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\RowIsImmutable`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsrowisimmutable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsrowisimmutable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\SnapshotsDisabled

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\SnapshotsDisabled`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionssnapshotsdisabled-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionssnapshotsdisabled-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Exceptions\StaticMethodRequiresOneArgument

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\StaticMethodRequiresOneArgument`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsstaticmethodrequiresoneargument-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"method","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsstaticmethodrequiresoneargument-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $method,
string $className
);
```

## Mvc\Model\Exceptions\UnknownEagerRelation

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\UnknownEagerRelation`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsunknowneagerrelation-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"alias","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsunknowneagerrelation-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $modelName,
string $alias
);
```

## Mvc\Model\Exceptions\UnknownRelationType

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\UnknownRelationType`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsunknownrelationtype-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsunknownrelationtype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\UnsupportedEagerHydration

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\UnsupportedEagerHydration`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsunsupportedeagerhydration-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsunsupportedeagerhydration-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Exceptions\UnsupportedEagerOption

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\UnsupportedEagerOption`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsunsupportedeageroption-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"option","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsunsupportedeageroption-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $option );
```

## Mvc\Model\Exceptions\UnsupportedEagerResultset

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\UnsupportedEagerResultset`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsunsupportedeagerresultset-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsunsupportedeagerresultset-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Exceptions\UpdateSnapshotDisabled

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Exceptions\UpdateSnapshotDisabled`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelexceptionsupdatesnapshotdisabled-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelexceptionsupdatesnapshotdisabled-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Hydration\CaseInsensitiveColumnMap

Class

- **`Phalcon\Mvc\Model\Hydration\CaseInsensitiveColumnMap`**

### Method Summary

<ApiItem href="#mvcmodelhydrationcaseinsensitivecolumnmap-caseinsensitivecolumnmap" visibility="public" name="caseInsensitiveColumnMap" returnType="string" params={[{"type":"array","name":"columnMap","default":null},{"type":"string","name":"key","default":null}]}>
Attempts to find key case-insensitively
</ApiItem>

### Methods

<h4 id="mvcmodelhydrationcaseinsensitivecolumnmap-caseinsensitivecolumnmap"><code>caseInsensitiveColumnMap()</code></h4>

```php
public static function caseInsensitiveColumnMap(
array $columnMap,
string $key
): string;
```

Attempts to find key case-insensitively

## Mvc\Model\Hydration\CloneResultMapHydrate

Class

- **`Phalcon\Mvc\Model\Hydration\CloneResultMapHydrate`**

`Phalcon\Mvc\Model\Exceptions\ColumnNotInMap` · `Phalcon\Mvc\Model\Resultset` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#mvcmodelhydrationcloneresultmaphydrate-cloneresultmaphydrate" visibility="public" name="cloneResultMapHydrate" returnType="" params={[{"type":"array","name":"data","default":null},{"type":"mixed","name":"columnMap","default":null},{"type":"int","name":"hydrationMode","default":null},{"type":"string","name":"calledClass","default":"\"Phalcon\\\\Mvc\\\\Model\""}]}>
Returns an hydrated result based on the data and the column map
</ApiItem>

### Methods

<h4 id="mvcmodelhydrationcloneresultmaphydrate-cloneresultmaphydrate"><code>cloneResultMapHydrate()</code></h4>

```php
public static function cloneResultMapHydrate(
array $data,
mixed $columnMap,
int $hydrationMode,
string $calledClass = "Phalcon\\Mvc\\Model"
);
```

Returns an hydrated result based on the data and the column map

## Mvc\Model\Manager

Class

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

$invoice = new Invoices($di);
```

- **`Phalcon\Mvc\Model\Manager`** - implements [`Phalcon\Mvc\Model\ManagerInterface`](#mvcmodelmanagerinterface), [`Phalcon\Di\InjectionAwareInterface`](/6.0/api/phalcon_di/#diinjectionawareinterface), [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)

`Phalcon\Contracts\Mvc\Model\Relation\CacheKeyProvider` · `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Di\Traits\InjectionAwareTrait` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Exception` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Mvc\Model` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Exceptions\InvalidConnectionService` · `Phalcon\Mvc\Model\Exceptions\ManagerOrmServicesUnavailable` · `Phalcon\Mvc\Model\Exceptions\ModelCouldNotLoad` · `Phalcon\Mvc\Model\Exceptions\ReferencedFieldsMismatch` · `Phalcon\Mvc\Model\Exceptions\RelationAliasMustBeString` · `Phalcon\Mvc\Model\Exceptions\UnknownRelationType` · `Phalcon\Mvc\Model\Query\BuilderInterface` · `Phalcon\Mvc\Model\Query\StatusInterface` · `Phalcon\Mvc\Model\Resultset\Simple` · `Phalcon\Support\Settings` · `Phalcon\Traits\Support\Helper\Str\UncamelizeTrait` · `ReflectionClass` · `ReflectionException` · `ReflectionProperty`

### Method Summary

<ApiItem href="#mvcmodelmanager-__destruct" visibility="public" name="__destruct" returnType="" params={[]}>
Destroys the current PHQL cache
</ApiItem>
<ApiItem href="#mvcmodelmanager-addbehavior" visibility="public" name="addBehavior" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"BehaviorInterface","name":"behavior","default":null}]}>
Binds a behavior to a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-addbelongsto" visibility="public" name="addBelongsTo" returnType="RelationInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"fields","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup a relation reverse many to one between two models
</ApiItem>
<ApiItem href="#mvcmodelmanager-addhasmany" visibility="public" name="addHasMany" returnType="RelationInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"fields","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup a relation 1-n between two models
</ApiItem>
<ApiItem href="#mvcmodelmanager-addhasmanytomany" visibility="public" name="addHasManyToMany" returnType="RelationInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"fields","default":null},{"type":"string","name":"intermediateModel","default":null},{"type":"mixed","name":"intermediateFields","default":null},{"type":"mixed","name":"intermediateReferencedFields","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setups a relation n-m between two models
</ApiItem>
<ApiItem href="#mvcmodelmanager-addhasone" visibility="public" name="addHasOne" returnType="RelationInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"fields","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup a 1-1 relation between two models
</ApiItem>
<ApiItem href="#mvcmodelmanager-addhasonethrough" visibility="public" name="addHasOneThrough" returnType="RelationInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"fields","default":null},{"type":"string","name":"intermediateModel","default":null},{"type":"mixed","name":"intermediateFields","default":null},{"type":"mixed","name":"intermediateReferencedFields","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setups a relation 1-1 between two models using an intermediate model
</ApiItem>
<ApiItem href="#mvcmodelmanager-clearreusableobjects" visibility="public" name="clearReusableObjects" returnType="void" params={[]}>
Clears the internal reusable list
</ApiItem>
<ApiItem href="#mvcmodelmanager-createbuilder" visibility="public" name="createBuilder" returnType="BuilderInterface" params={[{"type":"array|string|null","name":"params","default":"null"}]}>
Creates a Phalcon\Mvc\Model\Query\Builder
</ApiItem>
<ApiItem href="#mvcmodelmanager-createquery" visibility="public" name="createQuery" returnType="QueryInterface" params={[{"type":"string","name":"phql","default":null}]}>
Creates a Phalcon\Mvc\Model\Query without execute it
</ApiItem>
<ApiItem href="#mvcmodelmanager-executequery" visibility="public" name="executeQuery" returnType="mixed" params={[{"type":"string","name":"phql","default":null},{"type":"array|null","name":"placeholders","default":"null"},{"type":"array|null","name":"types","default":"null"}]}>
Creates a Phalcon\Mvc\Model\Query and execute it
</ApiItem>
<ApiItem href="#mvcmodelmanager-getbelongsto" visibility="public" name="getBelongsTo" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets all the belongsTo relations defined in a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-getbelongstorecords" visibility="public" name="getBelongsToRecords" returnType="bool|ResultsetInterface" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null},{"type":"ModelInterface","name":"record","default":null},{"type":"mixed","name":"parameters","default":"null"},{"type":"string|null","name":"method","default":"null"}]}>
Gets belongsTo related records from a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-getbuilder" visibility="public" name="getBuilder" returnType="BuilderInterface|null" params={[]}>
Returns the newly created Phalcon\Mvc\Model\Query\Builder or null
</ApiItem>
<ApiItem href="#mvcmodelmanager-getconnectionservice" visibility="public" name="getConnectionService" returnType="string" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"connectionServices","default":null}]}>
Returns the connection service name used to read or write data related to
</ApiItem>
<ApiItem href="#mvcmodelmanager-getcustomeventsmanager" visibility="public" name="getCustomEventsManager" returnType="EventsManagerInterface|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns a custom events manager related to a model or null if there is
</ApiItem>
<ApiItem href="#mvcmodelmanager-gethasmany" visibility="public" name="getHasMany" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets hasMany relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-gethasmanyrecords" visibility="public" name="getHasManyRecords" returnType="bool|ResultsetInterface" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null},{"type":"ModelInterface","name":"record","default":null},{"type":"mixed","name":"parameters","default":"null"},{"type":"string|null","name":"method","default":"null"}]}>
Gets hasMany related records from a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-gethasmanytomany" visibility="public" name="getHasManyToMany" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets hasManyToMany relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-gethasone" visibility="public" name="getHasOne" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets hasOne relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-gethasoneandhasmany" visibility="public" name="getHasOneAndHasMany" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets hasOne relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-gethasonerecords" visibility="public" name="getHasOneRecords" returnType="bool|ModelInterface" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null},{"type":"ModelInterface","name":"record","default":null},{"type":"mixed","name":"parameters","default":"null"},{"type":"string|null","name":"method","default":"null"}]}>
Gets belongsTo related records from a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-gethasonethrough" visibility="public" name="getHasOneThrough" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets hasOneThrough relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-getlastinitialized" visibility="public" name="getLastInitialized" returnType="ModelInterface|null" params={[]}>
Get last initialized model
</ApiItem>
<ApiItem href="#mvcmodelmanager-getlastquery" visibility="public" name="getLastQuery" returnType="QueryInterface" params={[]}>
Returns the last query created or executed in the models manager
</ApiItem>
<ApiItem href="#mvcmodelmanager-getmodelprefix" visibility="public" name="getModelPrefix" returnType="string" params={[]}>
Returns the prefix for all model sources.
</ApiItem>
<ApiItem href="#mvcmodelmanager-getmodelschema" visibility="public" name="getModelSchema" returnType="string|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the mapped schema for a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-getmodelsource" visibility="public" name="getModelSource" returnType="string" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the mapped source for a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-getreadconnection" visibility="public" name="getReadConnection" returnType="AdapterInterface" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the connection to read data related to a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-getreadconnectionservice" visibility="public" name="getReadConnectionService" returnType="string" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the connection service name used to read data related to a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-getrelationbyalias" visibility="public" name="getRelationByAlias" returnType="bool|RelationInterface" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"alias","default":null}]}>
Returns a relation by its alias
</ApiItem>
<ApiItem href="#mvcmodelmanager-getrelationrecords" visibility="public" name="getRelationRecords" returnType="" params={[{"type":"RelationInterface","name":"relation","default":null},{"type":"ModelInterface","name":"record","default":null},{"type":"array|string|null","name":"parameters","default":"null"},{"type":"string|null","name":"method","default":"null"}]}>
Helper method to query records based on a relation definition
</ApiItem>
<ApiItem href="#mvcmodelmanager-getrelations" visibility="public" name="getRelations" returnType="array" params={[{"type":"string","name":"modelName","default":null}]}>
Query all the relationships defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-getrelationsbetween" visibility="public" name="getRelationsBetween" returnType="array|bool" params={[{"type":"string","name":"first","default":null},{"type":"string","name":"second","default":null}]}>
Query the first relationship defined between two models
</ApiItem>
<ApiItem href="#mvcmodelmanager-getreusablerecords" visibility="public" name="getReusableRecords" returnType="" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"key","default":null}]}>
Returns a reusable object from the internal list
</ApiItem>
<ApiItem href="#mvcmodelmanager-getwriteconnection" visibility="public" name="getWriteConnection" returnType="AdapterInterface" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the connection to write data related to a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-getwriteconnectionservice" visibility="public" name="getWriteConnectionService" returnType="string" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the connection service name used to write data related to a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-hasbelongsto" visibility="public" name="hasBelongsTo" returnType="bool" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null}]}>
Checks whether a model has a belongsTo relation with another model
</ApiItem>
<ApiItem href="#mvcmodelmanager-hashasmany" visibility="public" name="hasHasMany" returnType="bool" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null}]}>
Checks whether a model has a hasMany relation with another model
</ApiItem>
<ApiItem href="#mvcmodelmanager-hashasmanytomany" visibility="public" name="hasHasManyToMany" returnType="bool" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null}]}>
Checks whether a model has a hasManyToMany relation with another model
</ApiItem>
<ApiItem href="#mvcmodelmanager-hashasone" visibility="public" name="hasHasOne" returnType="bool" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null}]}>
Checks whether a model has a hasOne relation with another model
</ApiItem>
<ApiItem href="#mvcmodelmanager-hashasonethrough" visibility="public" name="hasHasOneThrough" returnType="bool" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null}]}>
Checks whether a model has a hasOneThrough relation with another model
</ApiItem>
<ApiItem href="#mvcmodelmanager-initialize" visibility="public" name="initialize" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Initializes a model in the model manager
</ApiItem>
<ApiItem href="#mvcmodelmanager-isinitialized" visibility="public" name="isInitialized" returnType="bool" params={[{"type":"string","name":"className","default":null}]}>
Check whether a model is already initialized
</ApiItem>
<ApiItem href="#mvcmodelmanager-iskeepingsnapshots" visibility="public" name="isKeepingSnapshots" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Checks if a model is keeping snapshots for the queried records
</ApiItem>
<ApiItem href="#mvcmodelmanager-isusingdynamicupdate" visibility="public" name="isUsingDynamicUpdate" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Checks if a model is using dynamic update instead of all-field update
</ApiItem>
<ApiItem href="#mvcmodelmanager-isvisiblemodelproperty" visibility="public" name="isVisibleModelProperty" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"property","default":null}]}>
Check whether a model property is declared as public.
</ApiItem>
<ApiItem href="#mvcmodelmanager-keepsnapshots" visibility="public" name="keepSnapshots" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"bool","name":"keepSnapshots","default":null}]}>
Sets if a model must keep snapshots
</ApiItem>
<ApiItem href="#mvcmodelmanager-load" visibility="public" name="load" returnType="ModelInterface" params={[{"type":"string","name":"modelName","default":null}]}>
Loads a model throwing an exception if it does not exist
</ApiItem>
<ApiItem href="#mvcmodelmanager-mergefindparameters" visibility="public" name="mergeFindParameters" returnType="array" params={[{"type":"mixed","name":"findParamsOne","default":null},{"type":"mixed","name":"findParamsTwo","default":null}]}>
Merge two arrays of find parameters
</ApiItem>
<ApiItem href="#mvcmodelmanager-missingmethod" visibility="public" name="missingMethod" returnType="mixed" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"eventName","default":null},{"type":"mixed","name":"data","default":null}]}>
Dispatch an event to the listeners and behaviors
</ApiItem>
<ApiItem href="#mvcmodelmanager-notifyevent" visibility="public" name="notifyEvent" returnType="" params={[{"type":"string","name":"eventName","default":null},{"type":"ModelInterface","name":"model","default":null}]}>
Receives events generated in the models and dispatches them to an
</ApiItem>
<ApiItem href="#mvcmodelmanager-registerwrite" visibility="public" name="registerWrite" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Marks the model's write connection service as written-to for the
</ApiItem>
<ApiItem href="#mvcmodelmanager-removebehavior" visibility="public" name="removeBehavior" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"behaviorClass","default":null}]}>
Removes a behavior from a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-resetconnectionstate" visibility="public" name="resetConnectionState" returnType="void" params={[]}>
Clears the per-request sticky write tracking. Call this between
</ApiItem>
<ApiItem href="#mvcmodelmanager-setconnectionservice" visibility="public" name="setConnectionService" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"connectionService","default":null}]}>
Sets both write and read connection service for a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-setcustomeventsmanager" visibility="public" name="setCustomEventsManager" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"EventsManagerInterface","name":"eventsManager","default":null}]}>
Sets a custom events manager for a specific model
</ApiItem>
<ApiItem href="#mvcmodelmanager-setmodelprefix" visibility="public" name="setModelPrefix" returnType="void" params={[{"type":"string","name":"prefix","default":null}]}>
Sets the prefix for all model sources.
</ApiItem>
<ApiItem href="#mvcmodelmanager-setmodelschema" visibility="public" name="setModelSchema" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"schema","default":null}]}>
Sets the mapped schema for a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-setmodelsource" visibility="public" name="setModelSource" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"source","default":null}]}>
Sets the mapped source for a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-setreadconnectionservice" visibility="public" name="setReadConnectionService" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"connectionService","default":null}]}>
Sets read connection service for a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-setreusablerecords" visibility="public" name="setReusableRecords" returnType="void" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"key","default":null},{"type":"mixed","name":"records","default":null}]}>
Stores a reusable record in the internal list
</ApiItem>
<ApiItem href="#mvcmodelmanager-setsticky" visibility="public" name="setSticky" returnType="void" params={[{"type":"bool","name":"sticky","default":null}]}>
Enables or disables sticky connections. When enabled, once a model has
</ApiItem>
<ApiItem href="#mvcmodelmanager-setwriteconnectionservice" visibility="public" name="setWriteConnectionService" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"connectionService","default":null}]}>
Sets write connection service for a model
</ApiItem>
<ApiItem href="#mvcmodelmanager-usedynamicupdate" visibility="public" name="useDynamicUpdate" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"bool","name":"dynamicUpdate","default":null}]}>
Sets if a model must use dynamic update instead of the all-field update
</ApiItem>
<ApiItem href="#mvcmodelmanager-getconnection" visibility="protected" name="getConnection" returnType="AdapterInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"connectionServices","default":null}]}>
Returns the connection to read or write data related to a model
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="aliases" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="behaviors" type="array" default="[]">
Models' behaviors
</ApiItem>
<ApiItem kind="property" visibility="protected" name="belongsTo" type="array" default="[]">
Belongs to relations
</ApiItem>
<ApiItem kind="property" visibility="protected" name="belongsToSingle" type="array" default="[]">
All the relationships by model
</ApiItem>
<ApiItem kind="property" visibility="protected" name="builder" type="BuilderInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="customEventsManager" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="dirtyWriteServices" type="array" default="[]">
Write connection services that have been written to during the current
request cycle. Used by the sticky mechanism to route reads to the write
connection after a write.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="dynamicUpdate" type="array" default="[]">
Does the model use dynamic update, instead of updating all rows?
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hasMany" type="array" default="[]">
Has many relations
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hasManySingle" type="array" default="[]">
Has many relations by model
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hasManyToMany" type="array" default="[]">
Has many-Through relations
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hasManyToManySingle" type="array" default="[]">
Has many-Through relations by model
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hasOne" type="array" default="[]">
Has one relations
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hasOneSingle" type="array" default="[]">
Has one relations by model
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hasOneThrough" type="array" default="[]">
Has one through relations
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hasOneThroughSingle" type="array" default="[]">
Has one through relations by model
</ApiItem>
<ApiItem kind="property" visibility="protected" name="initialized" type="array" default="[]">
Mark initialized models
</ApiItem>
<ApiItem kind="property" visibility="protected" name="keepSnapshots" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="lastInitialized" type="ModelInterface|null" default="null">
Last model initialized
</ApiItem>
<ApiItem kind="property" visibility="protected" name="lastQuery" type="QueryInterface|null" default="null">
Last query created/executed
</ApiItem>
<ApiItem kind="property" visibility="protected" name="modelVisibility" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="prefix" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="readConnectionServices" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="reusable" type="array" default="[]">
Stores a list of reusable instances
</ApiItem>
<ApiItem kind="property" visibility="protected" name="schemas" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sources" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sticky" type="bool" default="false">
Whether reads should stick to the write connection after a write has
occurred during the current request cycle.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="writeConnectionServices" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="mvcmodelmanager-__destruct"><code>__destruct()</code></h4>

```php
public function __destruct();
```

Destroys the current PHQL cache

<h4 id="mvcmodelmanager-addbehavior"><code>addBehavior()</code></h4>

```php
public function addBehavior(
ModelInterface $model,
BehaviorInterface $behavior
): void;
```

Binds a behavior to a model

<h4 id="mvcmodelmanager-addbelongsto"><code>addBelongsTo()</code></h4>

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

<h4 id="mvcmodelmanager-addhasmany"><code>addHasMany()</code></h4>

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

<h4 id="mvcmodelmanager-addhasmanytomany"><code>addHasManyToMany()</code></h4>

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

<h4 id="mvcmodelmanager-addhasone"><code>addHasOne()</code></h4>

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

<h4 id="mvcmodelmanager-addhasonethrough"><code>addHasOneThrough()</code></h4>

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

<h4 id="mvcmodelmanager-clearreusableobjects"><code>clearReusableObjects()</code></h4>

```php
public function clearReusableObjects(): void;
```

Clears the internal reusable list

<h4 id="mvcmodelmanager-createbuilder"><code>createBuilder()</code></h4>

```php
public function createBuilder( array|string|null $params = null ): BuilderInterface;
```

Creates a Phalcon\Mvc\Model\Query\Builder

<h4 id="mvcmodelmanager-createquery"><code>createQuery()</code></h4>

```php
public function createQuery( string $phql ): QueryInterface;
```

Creates a Phalcon\Mvc\Model\Query without execute it

<h4 id="mvcmodelmanager-executequery"><code>executeQuery()</code></h4>

```php
public function executeQuery(
string $phql,
array|null $placeholders = null,
array|null $types = null
): mixed;
```

Creates a Phalcon\Mvc\Model\Query and execute it

```php
$model = new Invoices();
$manager = $model->getModelsManager();

// \Phalcon\Mvc\Model\Resultset\Simple
$manager->executeQuery('SELECT * FROM Invoices');

// \Phalcon\Mvc\Model\Resultset\Complex
$manager->executeQuery('SELECT COUNT(inv_status_flag) FROM Invoices GROUP BY inv_status_flag');

// \Phalcon\Mvc\Model\Query\StatusInterface
$manager->executeQuery('INSERT INTO Invoices (inv_id) VALUES (1)');

// \Phalcon\Mvc\Model\Query\StatusInterface
$manager->executeQuery('UPDATE Invoices SET inv_id = 0 WHERE inv_id = :id:', ['id' => 1]);

// \Phalcon\Mvc\Model\Query\StatusInterface
$manager->executeQuery('DELETE FROM Invoices WHERE inv_id = :id:', ['id' => 1]);
```

<h4 id="mvcmodelmanager-getbelongsto"><code>getBelongsTo()</code></h4>

```php
public function getBelongsTo( ModelInterface $model ): array;
```

Gets all the belongsTo relations defined in a model

```php
$relations = $modelsManager->getBelongsTo(
new Invoices()
);
```

<h4 id="mvcmodelmanager-getbelongstorecords"><code>getBelongsToRecords()</code></h4>

```php
public function getBelongsToRecords(
string $modelName,
string $modelRelation,
ModelInterface $record,
mixed $parameters = null,
string|null $method = null
): bool|ResultsetInterface;
```

Gets belongsTo related records from a model

<h4 id="mvcmodelmanager-getbuilder"><code>getBuilder()</code></h4>

```php
public function getBuilder(): BuilderInterface|null;
```

Returns the newly created Phalcon\Mvc\Model\Query\Builder or null

<h4 id="mvcmodelmanager-getconnectionservice"><code>getConnectionService()</code></h4>

```php
public function getConnectionService(
ModelInterface $model,
array $connectionServices
): string;
```

Returns the connection service name used to read or write data related to
a model depending on the connection services

<h4 id="mvcmodelmanager-getcustomeventsmanager"><code>getCustomEventsManager()</code></h4>

```php
public function getCustomEventsManager( ModelInterface $model ): EventsManagerInterface|null;
```

Returns a custom events manager related to a model or null if there is
no related events manager

<h4 id="mvcmodelmanager-gethasmany"><code>getHasMany()</code></h4>

```php
public function getHasMany( ModelInterface $model ): array;
```

Gets hasMany relations defined on a model

<h4 id="mvcmodelmanager-gethasmanyrecords"><code>getHasManyRecords()</code></h4>

```php
public function getHasManyRecords(
string $modelName,
string $modelRelation,
ModelInterface $record,
mixed $parameters = null,
string|null $method = null
): bool|ResultsetInterface;
```

Gets hasMany related records from a model

<h4 id="mvcmodelmanager-gethasmanytomany"><code>getHasManyToMany()</code></h4>

```php
public function getHasManyToMany( ModelInterface $model ): array;
```

Gets hasManyToMany relations defined on a model

<h4 id="mvcmodelmanager-gethasone"><code>getHasOne()</code></h4>

```php
public function getHasOne( ModelInterface $model ): array;
```

Gets hasOne relations defined on a model

<h4 id="mvcmodelmanager-gethasoneandhasmany"><code>getHasOneAndHasMany()</code></h4>

```php
public function getHasOneAndHasMany( ModelInterface $model ): array;
```

Gets hasOne relations defined on a model

<h4 id="mvcmodelmanager-gethasonerecords"><code>getHasOneRecords()</code></h4>

```php
public function getHasOneRecords(
string $modelName,
string $modelRelation,
ModelInterface $record,
mixed $parameters = null,
string|null $method = null
): bool|ModelInterface;
```

Gets belongsTo related records from a model

<h4 id="mvcmodelmanager-gethasonethrough"><code>getHasOneThrough()</code></h4>

```php
public function getHasOneThrough( ModelInterface $model ): array;
```

Gets hasOneThrough relations defined on a model

<h4 id="mvcmodelmanager-getlastinitialized"><code>getLastInitialized()</code></h4>

```php
public function getLastInitialized(): ModelInterface|null;
```

Get last initialized model

<h4 id="mvcmodelmanager-getlastquery"><code>getLastQuery()</code></h4>

```php
public function getLastQuery(): QueryInterface;
```

Returns the last query created or executed in the models manager

<h4 id="mvcmodelmanager-getmodelprefix"><code>getModelPrefix()</code></h4>

```php
public function getModelPrefix(): string;
```

Returns the prefix for all model sources.

<h4 id="mvcmodelmanager-getmodelschema"><code>getModelSchema()</code></h4>

```php
public function getModelSchema( ModelInterface $model ): string|null;
```

Returns the mapped schema for a model

<h4 id="mvcmodelmanager-getmodelsource"><code>getModelSource()</code></h4>

```php
public function getModelSource( ModelInterface $model ): string;
```

Returns the mapped source for a model

<h4 id="mvcmodelmanager-getreadconnection"><code>getReadConnection()</code></h4>

```php
public function getReadConnection( ModelInterface $model ): AdapterInterface;
```

Returns the connection to read data related to a model

<h4 id="mvcmodelmanager-getreadconnectionservice"><code>getReadConnectionService()</code></h4>

```php
public function getReadConnectionService( ModelInterface $model ): string;
```

Returns the connection service name used to read data related to a model

<h4 id="mvcmodelmanager-getrelationbyalias"><code>getRelationByAlias()</code></h4>

```php
public function getRelationByAlias(
string $modelName,
string $alias
): bool|RelationInterface;
```

Returns a relation by its alias

<h4 id="mvcmodelmanager-getrelationrecords"><code>getRelationRecords()</code></h4>

```php
public function getRelationRecords(
RelationInterface $relation,
ModelInterface $record,
array|string|null $parameters = null,
string|null $method = null
);
```

Helper method to query records based on a relation definition

<h4 id="mvcmodelmanager-getrelations"><code>getRelations()</code></h4>

```php
public function getRelations( string $modelName ): array;
```

Query all the relationships defined on a model

<h4 id="mvcmodelmanager-getrelationsbetween"><code>getRelationsBetween()</code></h4>

```php
public function getRelationsBetween(
string $first,
string $second
): array|bool;
```

Query the first relationship defined between two models

<h4 id="mvcmodelmanager-getreusablerecords"><code>getReusableRecords()</code></h4>

```php
public function getReusableRecords(
string $modelName,
string $key
);
```

Returns a reusable object from the internal list

<h4 id="mvcmodelmanager-getwriteconnection"><code>getWriteConnection()</code></h4>

```php
public function getWriteConnection( ModelInterface $model ): AdapterInterface;
```

Returns the connection to write data related to a model

<h4 id="mvcmodelmanager-getwriteconnectionservice"><code>getWriteConnectionService()</code></h4>

```php
public function getWriteConnectionService( ModelInterface $model ): string;
```

Returns the connection service name used to write data related to a model

<h4 id="mvcmodelmanager-hasbelongsto"><code>hasBelongsTo()</code></h4>

```php
public function hasBelongsTo(
string $modelName,
string $modelRelation
): bool;
```

Checks whether a model has a belongsTo relation with another model

<h4 id="mvcmodelmanager-hashasmany"><code>hasHasMany()</code></h4>

```php
public function hasHasMany(
string $modelName,
string $modelRelation
): bool;
```

Checks whether a model has a hasMany relation with another model

<h4 id="mvcmodelmanager-hashasmanytomany"><code>hasHasManyToMany()</code></h4>

```php
public function hasHasManyToMany(
string $modelName,
string $modelRelation
): bool;
```

Checks whether a model has a hasManyToMany relation with another model

<h4 id="mvcmodelmanager-hashasone"><code>hasHasOne()</code></h4>

```php
public function hasHasOne(
string $modelName,
string $modelRelation
): bool;
```

Checks whether a model has a hasOne relation with another model

<h4 id="mvcmodelmanager-hashasonethrough"><code>hasHasOneThrough()</code></h4>

```php
public function hasHasOneThrough(
string $modelName,
string $modelRelation
): bool;
```

Checks whether a model has a hasOneThrough relation with another model

<h4 id="mvcmodelmanager-initialize"><code>initialize()</code></h4>

```php
public function initialize( ModelInterface $model ): bool;
```

Initializes a model in the model manager

<h4 id="mvcmodelmanager-isinitialized"><code>isInitialized()</code></h4>

```php
public function isInitialized( string $className ): bool;
```

Check whether a model is already initialized

<h4 id="mvcmodelmanager-iskeepingsnapshots"><code>isKeepingSnapshots()</code></h4>

```php
public function isKeepingSnapshots( ModelInterface $model ): bool;
```

Checks if a model is keeping snapshots for the queried records

<h4 id="mvcmodelmanager-isusingdynamicupdate"><code>isUsingDynamicUpdate()</code></h4>

```php
public function isUsingDynamicUpdate( ModelInterface $model ): bool;
```

Checks if a model is using dynamic update instead of all-field update

<h4 id="mvcmodelmanager-isvisiblemodelproperty"><code>isVisibleModelProperty()</code></h4>

```php
final public function isVisibleModelProperty(
ModelInterface $model,
string $property
): bool;
```

Check whether a model property is declared as public.

```php
$isPublic = $manager->isVisibleModelProperty(
new Invoices(),
"name"
);
```

<h4 id="mvcmodelmanager-keepsnapshots"><code>keepSnapshots()</code></h4>

```php
public function keepSnapshots(
ModelInterface $model,
bool $keepSnapshots
): void;
```

Sets if a model must keep snapshots

<h4 id="mvcmodelmanager-load"><code>load()</code></h4>

```php
public function load( string $modelName ): ModelInterface;
```

Loads a model throwing an exception if it does not exist

<h4 id="mvcmodelmanager-mergefindparameters"><code>mergeFindParameters()</code></h4>

```php
final public static function mergeFindParameters(
mixed $findParamsOne,
mixed $findParamsTwo
): array;
```

Merge two arrays of find parameters

The order matters. Conditions coming from key 0 or "conditions" are
ANDed in argument order; `bind` and `bindTypes` are merged for the
second argument only and assigned outright for the first. Pass the
parameters whose bindings must survive as the second argument.

Static because it reads nothing but its arguments, and public so bulk
loaders can reuse the merge instead of duplicating these semantics.

<h4 id="mvcmodelmanager-missingmethod"><code>missingMethod()</code></h4>

```php
public function missingMethod(
ModelInterface $model,
string $eventName,
mixed $data
): mixed;
```

Dispatch an event to the listeners and behaviors
This method expects that the endpoint listeners/behaviors returns true
meaning that a least one was implemented

<h4 id="mvcmodelmanager-notifyevent"><code>notifyEvent()</code></h4>

```php
public function notifyEvent(
string $eventName,
ModelInterface $model
);
```

Receives events generated in the models and dispatches them to an
events-manager if available. Notify the behaviors that are listening in
the model

<h4 id="mvcmodelmanager-registerwrite"><code>registerWrite()</code></h4>

```php
public function registerWrite( ModelInterface $model ): void;
```

Marks the model's write connection service as written-to for the
current request cycle. Used by the sticky mechanism to route
subsequent reads to the write connection.

<h4 id="mvcmodelmanager-removebehavior"><code>removeBehavior()</code></h4>

```php
public function removeBehavior(
ModelInterface $model,
string $behaviorClass
): void;
```

Removes a behavior from a model

<h4 id="mvcmodelmanager-resetconnectionstate"><code>resetConnectionState()</code></h4>

```php
public function resetConnectionState(): void;
```

Clears the per-request sticky write tracking. Call this between
requests in long-running runtimes (e.g. Swoole, RoadRunner) where the
manager instance is reused across requests.

<h4 id="mvcmodelmanager-setconnectionservice"><code>setConnectionService()</code></h4>

```php
public function setConnectionService(
ModelInterface $model,
string $connectionService
): void;
```

Sets both write and read connection service for a model

<h4 id="mvcmodelmanager-setcustomeventsmanager"><code>setCustomEventsManager()</code></h4>

```php
public function setCustomEventsManager(
ModelInterface $model,
EventsManagerInterface $eventsManager
): void;
```

Sets a custom events manager for a specific model

<h4 id="mvcmodelmanager-setmodelprefix"><code>setModelPrefix()</code></h4>

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

$invoices = new Invoices();

echo $invoices->getSource(); // wp_co_invoices
```

$param string $prefix

<h4 id="mvcmodelmanager-setmodelschema"><code>setModelSchema()</code></h4>

```php
public function setModelSchema(
ModelInterface $model,
string $schema
): void;
```

Sets the mapped schema for a model

<h4 id="mvcmodelmanager-setmodelsource"><code>setModelSource()</code></h4>

```php
public function setModelSource(
ModelInterface $model,
string $source
): void;
```

Sets the mapped source for a model

<h4 id="mvcmodelmanager-setreadconnectionservice"><code>setReadConnectionService()</code></h4>

```php
public function setReadConnectionService(
ModelInterface $model,
string $connectionService
): void;
```

Sets read connection service for a model

<h4 id="mvcmodelmanager-setreusablerecords"><code>setReusableRecords()</code></h4>

```php
public function setReusableRecords(
string $modelName,
string $key,
mixed $records
): void;
```

Stores a reusable record in the internal list

<h4 id="mvcmodelmanager-setsticky"><code>setSticky()</code></h4>

```php
public function setSticky( bool $sticky ): void;
```

Enables or disables sticky connections. When enabled, once a model has
written to its write connection during the current request cycle, any
further reads for that write service use the write connection.

<h4 id="mvcmodelmanager-setwriteconnectionservice"><code>setWriteConnectionService()</code></h4>

```php
public function setWriteConnectionService(
ModelInterface $model,
string $connectionService
): void;
```

Sets write connection service for a model

<h4 id="mvcmodelmanager-usedynamicupdate"><code>useDynamicUpdate()</code></h4>

```php
public function useDynamicUpdate(
ModelInterface $model,
bool $dynamicUpdate
): void;
```

Sets if a model must use dynamic update instead of the all-field update

<h4 id="mvcmodelmanager-getconnection"><code>getConnection()</code></h4>

```php
protected function getConnection(
ModelInterface $model,
array $connectionServices
): AdapterInterface;
```

Returns the connection to read or write data related to a model
depending on the connection services.

## Mvc\Model\ManagerInterface

Interface

Interface for Phalcon\Mvc\Model\Manager

- **`Phalcon\Mvc\Model\ManagerInterface`**

`Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Query\BuilderInterface` · `Phalcon\Mvc\Model\Query\StatusInterface` · `Phalcon\Mvc\Model\Resultset\Simple`

### Method Summary

<ApiItem href="#mvcmodelmanagerinterface-addbehavior" visibility="public" name="addBehavior" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"BehaviorInterface","name":"behavior","default":null}]}>
Binds a behavior to a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-addbelongsto" visibility="public" name="addBelongsTo" returnType="RelationInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"fields","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup a relation reverse 1-1  between two models
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-addhasmany" visibility="public" name="addHasMany" returnType="RelationInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"fields","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup a relation 1-n between two models
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-addhasmanytomany" visibility="public" name="addHasManyToMany" returnType="RelationInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"fields","default":null},{"type":"string","name":"intermediateModel","default":null},{"type":"mixed","name":"intermediateFields","default":null},{"type":"mixed","name":"intermediateReferencedFields","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setups a relation n-m between two models
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-addhasone" visibility="public" name="addHasOne" returnType="RelationInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"fields","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setup a 1-1 relation between two models
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-addhasonethrough" visibility="public" name="addHasOneThrough" returnType="RelationInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"fields","default":null},{"type":"string","name":"intermediateModel","default":null},{"type":"mixed","name":"intermediateFields","default":null},{"type":"mixed","name":"intermediateReferencedFields","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"mixed","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Setups a 1-1 relation between two models using an intermediate table
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-clearreusableobjects" visibility="public" name="clearReusableObjects" returnType="void" params={[]}>
Clears the internal reusable list
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-createbuilder" visibility="public" name="createBuilder" returnType="BuilderInterface" params={[{"type":"array|string|null","name":"params","default":"null"}]}>
Creates a Phalcon\Mvc\Model\Query\Builder
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-createquery" visibility="public" name="createQuery" returnType="QueryInterface" params={[{"type":"string","name":"phql","default":null}]}>
Creates a Phalcon\Mvc\Model\Query without execute it
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-executequery" visibility="public" name="executeQuery" returnType="mixed" params={[{"type":"string","name":"phql","default":null},{"type":"array|null","name":"placeholders","default":"null"},{"type":"array|null","name":"types","default":"null"}]}>
Creates a Phalcon\Mvc\Model\Query and execute it
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getbelongsto" visibility="public" name="getBelongsTo" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets belongsTo relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getbelongstorecords" visibility="public" name="getBelongsToRecords" returnType="bool|ResultsetInterface" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null},{"type":"ModelInterface","name":"record","default":null},{"type":"array|string|null","name":"parameters","default":"null"},{"type":"string|null","name":"method","default":"null"}]}>
Gets belongsTo related records from a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getbuilder" visibility="public" name="getBuilder" returnType="BuilderInterface|null" params={[]}>
Returns the newly created Phalcon\Mvc\Model\Query\Builder or null
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-gethasmany" visibility="public" name="getHasMany" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets hasMany relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-gethasmanyrecords" visibility="public" name="getHasManyRecords" returnType="bool|ResultsetInterface" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null},{"type":"ModelInterface","name":"record","default":null},{"type":"array|string|null","name":"parameters","default":"null"},{"type":"string|null","name":"method","default":"null"}]}>
Gets hasMany related records from a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-gethasmanytomany" visibility="public" name="getHasManyToMany" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets hasManyToMany relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-gethasone" visibility="public" name="getHasOne" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets hasOne relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-gethasoneandhasmany" visibility="public" name="getHasOneAndHasMany" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets hasOne relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-gethasonerecords" visibility="public" name="getHasOneRecords" returnType="bool|ModelInterface" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null},{"type":"ModelInterface","name":"record","default":null},{"type":"array|string|null","name":"parameters","default":"null"},{"type":"string|null","name":"method","default":"null"}]}>
Gets hasOne related records from a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-gethasonethrough" visibility="public" name="getHasOneThrough" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Gets hasOneThrough relations defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getlastinitialized" visibility="public" name="getLastInitialized" returnType="ModelInterface|null" params={[]}>
Get last initialized model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getlastquery" visibility="public" name="getLastQuery" returnType="QueryInterface" params={[]}>
Returns the last query created or executed in the models manager
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getmodelschema" visibility="public" name="getModelSchema" returnType="string|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the mapped schema for a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getmodelsource" visibility="public" name="getModelSource" returnType="string" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the mapped source for a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getreadconnection" visibility="public" name="getReadConnection" returnType="AdapterInterface" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the connection to read data related to a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getreadconnectionservice" visibility="public" name="getReadConnectionService" returnType="string" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the connection service name used to read data related to a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getrelationbyalias" visibility="public" name="getRelationByAlias" returnType="bool|RelationInterface" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"alias","default":null}]}>
Returns a relation by its alias
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getrelationrecords" visibility="public" name="getRelationRecords" returnType="" params={[{"type":"RelationInterface","name":"relation","default":null},{"type":"ModelInterface","name":"record","default":null},{"type":"array|string|null","name":"parameters","default":"null"},{"type":"string|null","name":"method","default":"null"}]}>
Helper method to query records based on a relation definition
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getrelations" visibility="public" name="getRelations" returnType="array" params={[{"type":"string","name":"modelName","default":null}]}>
Query all the relationships defined on a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getrelationsbetween" visibility="public" name="getRelationsBetween" returnType="array|bool" params={[{"type":"string","name":"first","default":null},{"type":"string","name":"second","default":null}]}>
Query the relations between two models
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getreusablerecords" visibility="public" name="getReusableRecords" returnType="" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"key","default":null}]}>
Returns a reusable object from the internal list
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getwriteconnection" visibility="public" name="getWriteConnection" returnType="AdapterInterface" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the connection to write data related to a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-getwriteconnectionservice" visibility="public" name="getWriteConnectionService" returnType="string" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the connection service name used to write data related to a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-hasbelongsto" visibility="public" name="hasBelongsTo" returnType="bool" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null}]}>
Checks whether a model has a belongsTo relation with another model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-hashasmany" visibility="public" name="hasHasMany" returnType="bool" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null}]}>
Checks whether a model has a hasMany relation with another model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-hashasmanytomany" visibility="public" name="hasHasManyToMany" returnType="bool" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null}]}>
Checks whether a model has a hasManyToMany relation with another model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-hashasone" visibility="public" name="hasHasOne" returnType="bool" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null}]}>
Checks whether a model has a hasOne relation with another model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-hashasonethrough" visibility="public" name="hasHasOneThrough" returnType="bool" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"modelRelation","default":null}]}>
Checks whether a model has a hasOneThrough relation with another model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-initialize" visibility="public" name="initialize" returnType="" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Initializes a model in the model manager
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-isinitialized" visibility="public" name="isInitialized" returnType="bool" params={[{"type":"string","name":"className","default":null}]}>
Check of a model is already initialized
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-iskeepingsnapshots" visibility="public" name="isKeepingSnapshots" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Checks if a model is keeping snapshots for the queried records
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-isusingdynamicupdate" visibility="public" name="isUsingDynamicUpdate" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Checks if a model is using dynamic update instead of all-field update
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-isvisiblemodelproperty" visibility="public" name="isVisibleModelProperty" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"property","default":null}]}>
Check whether a model property is declared as public.
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-keepsnapshots" visibility="public" name="keepSnapshots" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"bool","name":"keepSnapshots","default":null}]}>
Sets if a model must keep snapshots
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-load" visibility="public" name="load" returnType="ModelInterface" params={[{"type":"string","name":"modelName","default":null}]}>
Loads a model throwing an exception if it does not exist
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-missingmethod" visibility="public" name="missingMethod" returnType="" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"eventName","default":null},{"type":"mixed","name":"data","default":null}]}>
Dispatch an event to the listeners and behaviors
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-notifyevent" visibility="public" name="notifyEvent" returnType="" params={[{"type":"string","name":"eventName","default":null},{"type":"ModelInterface","name":"model","default":null}]}>
Receives events generated in the models and dispatches them to an
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-registerwrite" visibility="public" name="registerWrite" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Marks the model's write connection service as written-to for the
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-removebehavior" visibility="public" name="removeBehavior" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"behaviorClass","default":null}]}>
Removes a behavior from a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-resetconnectionstate" visibility="public" name="resetConnectionState" returnType="void" params={[]}>
Clears the per-request sticky write tracking
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-setconnectionservice" visibility="public" name="setConnectionService" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"connectionService","default":null}]}>
Sets both write and read connection service for a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-setmodelschema" visibility="public" name="setModelSchema" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"schema","default":null}]}>
Sets the mapped schema for a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-setmodelsource" visibility="public" name="setModelSource" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"source","default":null}]}>
Sets the mapped source for a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-setreadconnectionservice" visibility="public" name="setReadConnectionService" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"connectionService","default":null}]}>
Sets read connection service for a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-setreusablerecords" visibility="public" name="setReusableRecords" returnType="void" params={[{"type":"string","name":"modelName","default":null},{"type":"string","name":"key","default":null},{"type":"mixed","name":"records","default":null}]}>
Stores a reusable record in the internal list
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-setsticky" visibility="public" name="setSticky" returnType="void" params={[{"type":"bool","name":"sticky","default":null}]}>
Enables or disables sticky connections
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-setwriteconnectionservice" visibility="public" name="setWriteConnectionService" returnType="" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"connectionService","default":null}]}>
Sets write connection service for a model
</ApiItem>
<ApiItem href="#mvcmodelmanagerinterface-usedynamicupdate" visibility="public" name="useDynamicUpdate" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"bool","name":"dynamicUpdate","default":null}]}>
Sets if a model must use dynamic update instead of the all-field update
</ApiItem>

### Methods

<h4 id="mvcmodelmanagerinterface-addbehavior"><code>addBehavior()</code></h4>

```php
public function addBehavior(
ModelInterface $model,
BehaviorInterface $behavior
): void;
```

Binds a behavior to a model

<h4 id="mvcmodelmanagerinterface-addbelongsto"><code>addBelongsTo()</code></h4>

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

<h4 id="mvcmodelmanagerinterface-addhasmany"><code>addHasMany()</code></h4>

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

<h4 id="mvcmodelmanagerinterface-addhasmanytomany"><code>addHasManyToMany()</code></h4>

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

<h4 id="mvcmodelmanagerinterface-addhasone"><code>addHasOne()</code></h4>

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

<h4 id="mvcmodelmanagerinterface-addhasonethrough"><code>addHasOneThrough()</code></h4>

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

<h4 id="mvcmodelmanagerinterface-clearreusableobjects"><code>clearReusableObjects()</code></h4>

```php
public function clearReusableObjects(): void;
```

Clears the internal reusable list

<h4 id="mvcmodelmanagerinterface-createbuilder"><code>createBuilder()</code></h4>

```php
public function createBuilder( array|string|null $params = null ): BuilderInterface;
```

Creates a Phalcon\Mvc\Model\Query\Builder

<h4 id="mvcmodelmanagerinterface-createquery"><code>createQuery()</code></h4>

```php
public function createQuery( string $phql ): QueryInterface;
```

Creates a Phalcon\Mvc\Model\Query without execute it

<h4 id="mvcmodelmanagerinterface-executequery"><code>executeQuery()</code></h4>

```php
public function executeQuery(
string $phql,
array|null $placeholders = null,
array|null $types = null
): mixed;
```

Creates a Phalcon\Mvc\Model\Query and execute it

<h4 id="mvcmodelmanagerinterface-getbelongsto"><code>getBelongsTo()</code></h4>

```php
public function getBelongsTo( ModelInterface $model ): array;
```

Gets belongsTo relations defined on a model

<h4 id="mvcmodelmanagerinterface-getbelongstorecords"><code>getBelongsToRecords()</code></h4>

```php
public function getBelongsToRecords(
string $modelName,
string $modelRelation,
ModelInterface $record,
array|string|null $parameters = null,
string|null $method = null
): bool|ResultsetInterface;
```

Gets belongsTo related records from a model

<h4 id="mvcmodelmanagerinterface-getbuilder"><code>getBuilder()</code></h4>

```php
public function getBuilder(): BuilderInterface|null;
```

Returns the newly created Phalcon\Mvc\Model\Query\Builder or null

<h4 id="mvcmodelmanagerinterface-gethasmany"><code>getHasMany()</code></h4>

```php
public function getHasMany( ModelInterface $model ): array;
```

Gets hasMany relations defined on a model

<h4 id="mvcmodelmanagerinterface-gethasmanyrecords"><code>getHasManyRecords()</code></h4>

```php
public function getHasManyRecords(
string $modelName,
string $modelRelation,
ModelInterface $record,
array|string|null $parameters = null,
string|null $method = null
): bool|ResultsetInterface;
```

Gets hasMany related records from a model

<h4 id="mvcmodelmanagerinterface-gethasmanytomany"><code>getHasManyToMany()</code></h4>

```php
public function getHasManyToMany( ModelInterface $model ): array;
```

Gets hasManyToMany relations defined on a model

<h4 id="mvcmodelmanagerinterface-gethasone"><code>getHasOne()</code></h4>

```php
public function getHasOne( ModelInterface $model ): array;
```

Gets hasOne relations defined on a model

<h4 id="mvcmodelmanagerinterface-gethasoneandhasmany"><code>getHasOneAndHasMany()</code></h4>

```php
public function getHasOneAndHasMany( ModelInterface $model ): array;
```

Gets hasOne relations defined on a model

<h4 id="mvcmodelmanagerinterface-gethasonerecords"><code>getHasOneRecords()</code></h4>

```php
public function getHasOneRecords(
string $modelName,
string $modelRelation,
ModelInterface $record,
array|string|null $parameters = null,
string|null $method = null
): bool|ModelInterface;
```

Gets hasOne related records from a model

<h4 id="mvcmodelmanagerinterface-gethasonethrough"><code>getHasOneThrough()</code></h4>

```php
public function getHasOneThrough( ModelInterface $model ): array;
```

Gets hasOneThrough relations defined on a model

<h4 id="mvcmodelmanagerinterface-getlastinitialized"><code>getLastInitialized()</code></h4>

```php
public function getLastInitialized(): ModelInterface|null;
```

Get last initialized model

<h4 id="mvcmodelmanagerinterface-getlastquery"><code>getLastQuery()</code></h4>

```php
public function getLastQuery(): QueryInterface;
```

Returns the last query created or executed in the models manager

<h4 id="mvcmodelmanagerinterface-getmodelschema"><code>getModelSchema()</code></h4>

```php
public function getModelSchema( ModelInterface $model ): string|null;
```

Returns the mapped schema for a model

<h4 id="mvcmodelmanagerinterface-getmodelsource"><code>getModelSource()</code></h4>

```php
public function getModelSource( ModelInterface $model ): string;
```

Returns the mapped source for a model

<h4 id="mvcmodelmanagerinterface-getreadconnection"><code>getReadConnection()</code></h4>

```php
public function getReadConnection( ModelInterface $model ): AdapterInterface;
```

Returns the connection to read data related to a model

<h4 id="mvcmodelmanagerinterface-getreadconnectionservice"><code>getReadConnectionService()</code></h4>

```php
public function getReadConnectionService( ModelInterface $model ): string;
```

Returns the connection service name used to read data related to a model

<h4 id="mvcmodelmanagerinterface-getrelationbyalias"><code>getRelationByAlias()</code></h4>

```php
public function getRelationByAlias(
string $modelName,
string $alias
): bool|RelationInterface;
```

Returns a relation by its alias

<h4 id="mvcmodelmanagerinterface-getrelationrecords"><code>getRelationRecords()</code></h4>

```php
public function getRelationRecords(
RelationInterface $relation,
ModelInterface $record,
array|string|null $parameters = null,
string|null $method = null
);
```

Helper method to query records based on a relation definition

<h4 id="mvcmodelmanagerinterface-getrelations"><code>getRelations()</code></h4>

```php
public function getRelations( string $modelName ): array;
```

Query all the relationships defined on a model

<h4 id="mvcmodelmanagerinterface-getrelationsbetween"><code>getRelationsBetween()</code></h4>

```php
public function getRelationsBetween(
string $first,
string $second
): array|bool;
```

Query the relations between two models

<h4 id="mvcmodelmanagerinterface-getreusablerecords"><code>getReusableRecords()</code></h4>

```php
public function getReusableRecords(
string $modelName,
string $key
);
```

Returns a reusable object from the internal list

<h4 id="mvcmodelmanagerinterface-getwriteconnection"><code>getWriteConnection()</code></h4>

```php
public function getWriteConnection( ModelInterface $model ): AdapterInterface;
```

Returns the connection to write data related to a model

<h4 id="mvcmodelmanagerinterface-getwriteconnectionservice"><code>getWriteConnectionService()</code></h4>

```php
public function getWriteConnectionService( ModelInterface $model ): string;
```

Returns the connection service name used to write data related to a model

<h4 id="mvcmodelmanagerinterface-hasbelongsto"><code>hasBelongsTo()</code></h4>

```php
public function hasBelongsTo(
string $modelName,
string $modelRelation
): bool;
```

Checks whether a model has a belongsTo relation with another model

<h4 id="mvcmodelmanagerinterface-hashasmany"><code>hasHasMany()</code></h4>

```php
public function hasHasMany(
string $modelName,
string $modelRelation
): bool;
```

Checks whether a model has a hasMany relation with another model

<h4 id="mvcmodelmanagerinterface-hashasmanytomany"><code>hasHasManyToMany()</code></h4>

```php
public function hasHasManyToMany(
string $modelName,
string $modelRelation
): bool;
```

Checks whether a model has a hasManyToMany relation with another model

<h4 id="mvcmodelmanagerinterface-hashasone"><code>hasHasOne()</code></h4>

```php
public function hasHasOne(
string $modelName,
string $modelRelation
): bool;
```

Checks whether a model has a hasOne relation with another model

<h4 id="mvcmodelmanagerinterface-hashasonethrough"><code>hasHasOneThrough()</code></h4>

```php
public function hasHasOneThrough(
string $modelName,
string $modelRelation
): bool;
```

Checks whether a model has a hasOneThrough relation with another model

<h4 id="mvcmodelmanagerinterface-initialize"><code>initialize()</code></h4>

```php
public function initialize( ModelInterface $model );
```

Initializes a model in the model manager

<h4 id="mvcmodelmanagerinterface-isinitialized"><code>isInitialized()</code></h4>

```php
public function isInitialized( string $className ): bool;
```

Check of a model is already initialized

<h4 id="mvcmodelmanagerinterface-iskeepingsnapshots"><code>isKeepingSnapshots()</code></h4>

```php
public function isKeepingSnapshots( ModelInterface $model ): bool;
```

Checks if a model is keeping snapshots for the queried records

<h4 id="mvcmodelmanagerinterface-isusingdynamicupdate"><code>isUsingDynamicUpdate()</code></h4>

```php
public function isUsingDynamicUpdate( ModelInterface $model ): bool;
```

Checks if a model is using dynamic update instead of all-field update

<h4 id="mvcmodelmanagerinterface-isvisiblemodelproperty"><code>isVisibleModelProperty()</code></h4>

```php
public function isVisibleModelProperty(
ModelInterface $model,
string $property
): bool;
```

Check whether a model property is declared as public.

```php
$isPublic = $manager->isVisibleModelProperty(
new Invoices(),
"inv_title"
);
```

<h4 id="mvcmodelmanagerinterface-keepsnapshots"><code>keepSnapshots()</code></h4>

```php
public function keepSnapshots(
ModelInterface $model,
bool $keepSnapshots
): void;
```

Sets if a model must keep snapshots

<h4 id="mvcmodelmanagerinterface-load"><code>load()</code></h4>

```php
public function load( string $modelName ): ModelInterface;
```

Loads a model throwing an exception if it does not exist

<h4 id="mvcmodelmanagerinterface-missingmethod"><code>missingMethod()</code></h4>

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

<h4 id="mvcmodelmanagerinterface-notifyevent"><code>notifyEvent()</code></h4>

```php
public function notifyEvent(
string $eventName,
ModelInterface $model
);
```

Receives events generated in the models and dispatches them to an
events-manager if available. Notify the behaviors that are listening
in the model

<h4 id="mvcmodelmanagerinterface-registerwrite"><code>registerWrite()</code></h4>

```php
public function registerWrite( ModelInterface $model ): void;
```

Marks the model's write connection service as written-to for the
current request cycle (sticky connections)

<h4 id="mvcmodelmanagerinterface-removebehavior"><code>removeBehavior()</code></h4>

```php
public function removeBehavior(
ModelInterface $model,
string $behaviorClass
): void;
```

Removes a behavior from a model

<h4 id="mvcmodelmanagerinterface-resetconnectionstate"><code>resetConnectionState()</code></h4>

```php
public function resetConnectionState(): void;
```

Clears the per-request sticky write tracking

<h4 id="mvcmodelmanagerinterface-setconnectionservice"><code>setConnectionService()</code></h4>

```php
public function setConnectionService(
ModelInterface $model,
string $connectionService
): void;
```

Sets both write and read connection service for a model

<h4 id="mvcmodelmanagerinterface-setmodelschema"><code>setModelSchema()</code></h4>

```php
public function setModelSchema(
ModelInterface $model,
string $schema
): void;
```

Sets the mapped schema for a model

<h4 id="mvcmodelmanagerinterface-setmodelsource"><code>setModelSource()</code></h4>

```php
public function setModelSource(
ModelInterface $model,
string $source
): void;
```

Sets the mapped source for a model

<h4 id="mvcmodelmanagerinterface-setreadconnectionservice"><code>setReadConnectionService()</code></h4>

```php
public function setReadConnectionService(
ModelInterface $model,
string $connectionService
): void;
```

Sets read connection service for a model

<h4 id="mvcmodelmanagerinterface-setreusablerecords"><code>setReusableRecords()</code></h4>

```php
public function setReusableRecords(
string $modelName,
string $key,
mixed $records
): void;
```

Stores a reusable record in the internal list

<h4 id="mvcmodelmanagerinterface-setsticky"><code>setSticky()</code></h4>

```php
public function setSticky( bool $sticky ): void;
```

Enables or disables sticky connections

<h4 id="mvcmodelmanagerinterface-setwriteconnectionservice"><code>setWriteConnectionService()</code></h4>

```php
public function setWriteConnectionService(
ModelInterface $model,
string $connectionService
);
```

Sets write connection service for a model

<h4 id="mvcmodelmanagerinterface-usedynamicupdate"><code>useDynamicUpdate()</code></h4>

```php
public function useDynamicUpdate(
ModelInterface $model,
bool $dynamicUpdate
): void;
```

Sets if a model must use dynamic update instead of the all-field update

## Mvc\Model\MetaData

Abstract

Because Phalcon\Mvc\Model requires meta-data like field names, data types,
primary keys, etc. This component collect them and store for further
querying by Phalcon\Mvc\Model. Phalcon\Mvc\Model\MetaData can also use
adapters to store temporarily or permanently the meta-data.

A standard Phalcon\Mvc\Model\MetaData can be used to query model attributes:

```php
$metaData = new \Phalcon\Mvc\Model\MetaData\Memory();

$attributes = $metaData->getAttributes(
new Invoices()
);

print_r($attributes);
```

Each model's metadata is stored as two positional arrays addressed by two
constant families. Both families count from 0 and therefore share numeric
values, so a metadata array is only meaningful together with the family that
indexes it. The metadata cache adapters persist these arrays verbatim, so the
slot layout is a stored format: reordering a slot invalidates existing
caches.

Attribute metadata array (`MODELS_*` family):

| Slot | Constant                          | Contents                                        |
|------|-----------------------------------|-------------------------------------------------|
| 0    | `MODELS_ATTRIBUTES`               | All mapped attribute (column) names             |
| 1    | `MODELS_PRIMARY_KEY`              | Primary-key attributes                          |
| 2    | `MODELS_NON_PRIMARY_KEY`          | Non-primary-key attributes                      |
| 3    | `MODELS_NOT_NULL`                 | Attributes declared `NOT NULL`                  |
| 4    | `MODELS_DATA_TYPES`               | attribute => column data type                   |
| 5    | `MODELS_DATA_TYPES_NUMERIC`       | Attributes with a numeric type                  |
| 6    | `MODELS_DATE_AT`                  | Reserved (declared, currently unused)           |
| 7    | `MODELS_DATE_IN`                  | Reserved (declared, currently unused)           |
| 8    | `MODELS_IDENTITY_COLUMN`          | The auto-increment identity attribute           |
| 9    | `MODELS_DATA_TYPES_BIND`          | attribute => PDO bind type                      |
| 10   | `MODELS_AUTOMATIC_DEFAULT_INSERT` | Attributes omitted from `INSERT` (DB-defaulted) |
| 11   | `MODELS_AUTOMATIC_DEFAULT_UPDATE` | Attributes omitted from `UPDATE` (DB-defaulted) |
| 12   | `MODELS_DEFAULT_VALUES`           | attribute => default value                      |
| 13   | `MODELS_EMPTY_STRING_VALUES`      | Attributes that keep `''` instead of `NULL`     |

Column-map array (`MODELS_COLUMN_MAP` family), present only when a column map
is defined:

| Slot | Constant                    | Contents            |
|------|-----------------------------|---------------------|
| 0    | `MODELS_COLUMN_MAP`         | column => attribute |
| 1    | `MODELS_REVERSE_COLUMN_MAP` | attribute => column |

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- **`Phalcon\Mvc\Model\MetaData`** - implements [`Phalcon\Mvc\Model\MetaDataInterface`](#mvcmodelmetadatainterface)
- [`Phalcon\Mvc\Model\MetaData\Apcu`](#mvcmodelmetadataapcu)
- [`Phalcon\Mvc\Model\MetaData\Libmemcached`](#mvcmodelmetadatalibmemcached)
- [`Phalcon\Mvc\Model\MetaData\Memory`](#mvcmodelmetadatamemory)
- [`Phalcon\Mvc\Model\MetaData\Redis`](#mvcmodelmetadataredis)
- [`Phalcon\Mvc\Model\MetaData\Stream`](#mvcmodelmetadatastream)

`Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\MetaData\Exceptions\CorruptedMetaData` · `Phalcon\Mvc\Model\MetaData\Exceptions\MetaDataStrategyFailed` · `Phalcon\Mvc\Model\MetaData\Strategy\Introspection` · `Phalcon\Mvc\Model\MetaData\Strategy\StrategyInterface` · `Phalcon\Support\Settings` · `Phalcon\Traits\Php\IniTrait`

### Method Summary

<ApiItem href="#mvcmodelmetadata-getadapter" visibility="public" name="getAdapter" returnType="CacheAdapterInterface|null" params={[]}>
Return the internal cache adapter
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getattributes" visibility="public" name="getAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns table attributes names (fields)
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getautomaticcreateattributes" visibility="public" name="getAutomaticCreateAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes that must be ignored from the INSERT SQL generation
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getautomaticupdateattributes" visibility="public" name="getAutomaticUpdateAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes that must be ignored from the UPDATE SQL generation
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getbindtypes" visibility="public" name="getBindTypes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes and their bind data types
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getcolumnmap" visibility="public" name="getColumnMap" returnType="array|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the column map if any
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getcolumnmapuniquekey" visibility="public" name="getColumnMapUniqueKey" returnType="string|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns a ColumnMap Unique key for meta-data is created using className
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getdi" visibility="public" name="getDI" returnType="DiInterface" params={[]}>
Returns the DependencyInjector container
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getdatatypes" visibility="public" name="getDataTypes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes and their data types
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getdatatypesnumeric" visibility="public" name="getDataTypesNumeric" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes which types are numerical
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getdefaultvalues" visibility="public" name="getDefaultValues" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes (which have default values) and their default values
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getemptystringattributes" visibility="public" name="getEmptyStringAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes allow empty strings
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getidentityfield" visibility="public" name="getIdentityField" returnType="bool|string|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the name of identity field (if one is present)
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getmetadatauniquekey" visibility="public" name="getMetaDataUniqueKey" returnType="string|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns a MetaData Unique key for meta-data is created using className
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getmodeluuid" visibility="public" name="getModelUUID" returnType="string|null" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"row","default":null}]}>
Returns the model UniqueID based on model and array row primary key(s) value(s)
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getnonprimarykeyattributes" visibility="public" name="getNonPrimaryKeyAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns an array of fields which are not part of the primary key
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getnotnullattributes" visibility="public" name="getNotNullAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns an array of not null attributes
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getprimarykeyattributes" visibility="public" name="getPrimaryKeyAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns an array of fields which are part of the primary key
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getreversecolumnmap" visibility="public" name="getReverseColumnMap" returnType="array|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the reverse column map if any
</ApiItem>
<ApiItem href="#mvcmodelmetadata-getstrategy" visibility="public" name="getStrategy" returnType="StrategyInterface" params={[]}>
Return the strategy to obtain the meta-data
</ApiItem>
<ApiItem href="#mvcmodelmetadata-hasattribute" visibility="public" name="hasAttribute" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"attribute","default":null}]}>
Check if a model has certain attribute
</ApiItem>
<ApiItem href="#mvcmodelmetadata-isempty" visibility="public" name="isEmpty" returnType="bool" params={[]}>
Checks if the internal meta-data container is empty
</ApiItem>
<ApiItem href="#mvcmodelmetadata-modelequals" visibility="public" name="modelEquals" returnType="bool" params={[{"type":"ModelInterface","name":"first","default":null},{"type":"ModelInterface","name":"other","default":null}]}>
Compares if two models are the same in memory
</ApiItem>
<ApiItem href="#mvcmodelmetadata-read" visibility="public" name="read" returnType="array|null" params={[{"type":"string|null","name":"key","default":null}]}>
Reads metadata from the adapter
</ApiItem>
<ApiItem href="#mvcmodelmetadata-readcolumnmap" visibility="public" name="readColumnMap" returnType="array|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Reads the ordered/reversed column map for certain model
</ApiItem>
<ApiItem href="#mvcmodelmetadata-readcolumnmapindex" visibility="public" name="readColumnMapIndex" returnType="array|null" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"int","name":"index","default":null}]}>
Reads column-map information for certain model using a MODEL_* constant
</ApiItem>
<ApiItem href="#mvcmodelmetadata-readmetadata" visibility="public" name="readMetaData" returnType="array|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Reads the complete meta-data for certain model
</ApiItem>
<ApiItem href="#mvcmodelmetadata-readmetadataindex" visibility="public" name="readMetaDataIndex" returnType="array|bool|string|null" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"int","name":"index","default":null}]}>
Reads meta-data for certain model
</ApiItem>
<ApiItem href="#mvcmodelmetadata-reset" visibility="public" name="reset" returnType="void" params={[]}>
Resets internal meta-data in order to regenerate it
</ApiItem>
<ApiItem href="#mvcmodelmetadata-setautomaticcreateattributes" visibility="public" name="setAutomaticCreateAttributes" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"attributes","default":null}]}>
Set the attributes that must be ignored from the INSERT SQL generation
</ApiItem>
<ApiItem href="#mvcmodelmetadata-setautomaticupdateattributes" visibility="public" name="setAutomaticUpdateAttributes" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"attributes","default":null}]}>
Set the attributes that must be ignored from the UPDATE SQL generation
</ApiItem>
<ApiItem href="#mvcmodelmetadata-setemptystringattributes" visibility="public" name="setEmptyStringAttributes" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"attributes","default":null}]}>
Initialize old behavior for compatability
</ApiItem>
<ApiItem href="#mvcmodelmetadata-setstrategy" visibility="public" name="setStrategy" returnType="void" params={[{"type":"StrategyInterface","name":"strategy","default":null}]}>
Set the meta-data extraction strategy
</ApiItem>
<ApiItem href="#mvcmodelmetadata-write" visibility="public" name="write" returnType="void" params={[{"type":"string","name":"key","default":null},{"type":"array","name":"data","default":null}]}>
Writes the metadata to adapter
</ApiItem>
<ApiItem href="#mvcmodelmetadata-writemetadataindex" visibility="public" name="writeMetaDataIndex" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"int","name":"index","default":null},{"type":"mixed","name":"data","default":null}]}>
Writes meta-data for certain model using a MODEL_* constant
</ApiItem>
<ApiItem href="#mvcmodelmetadata-initialize" visibility="protected" name="initialize" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"key","default":null},{"type":"mixed","name":"table","default":null},{"type":"mixed","name":"schema","default":null}]}>
Initialize old behavior for compatability
</ApiItem>
<ApiItem href="#mvcmodelmetadata-initializecolumnmap" visibility="protected" name="initializeColumnMap" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"mixed","name":"key","default":null}]}>
Initialize ColumnMap for a certain table
</ApiItem>
<ApiItem href="#mvcmodelmetadata-initializemetadata" visibility="protected" name="initializeMetaData" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string|null","name":"key","default":null}]}>
Initialize the metadata for certain table
</ApiItem>

### Constants

<ApiItem kind="constant" name="MODELS_ATTRIBUTES" type="int" default="0">
</ApiItem>
<ApiItem kind="constant" name="MODELS_AUTOMATIC_DEFAULT_INSERT" type="int" default="10">
</ApiItem>
<ApiItem kind="constant" name="MODELS_AUTOMATIC_DEFAULT_UPDATE" type="int" default="11">
</ApiItem>
<ApiItem kind="constant" name="MODELS_COLUMN_MAP" type="int" default="0">
</ApiItem>
<ApiItem kind="constant" name="MODELS_DATA_TYPES" type="int" default="4">
</ApiItem>
<ApiItem kind="constant" name="MODELS_DATA_TYPES_BIND" type="int" default="9">
</ApiItem>
<ApiItem kind="constant" name="MODELS_DATA_TYPES_NUMERIC" type="int" default="5">
</ApiItem>
<ApiItem kind="constant" name="MODELS_DATE_AT" type="int" default="6">
</ApiItem>
<ApiItem kind="constant" name="MODELS_DATE_IN" type="int" default="7">
</ApiItem>
<ApiItem kind="constant" name="MODELS_DEFAULT_VALUES" type="int" default="12">
</ApiItem>
<ApiItem kind="constant" name="MODELS_EMPTY_STRING_VALUES" type="int" default="13">
</ApiItem>
<ApiItem kind="constant" name="MODELS_IDENTITY_COLUMN" type="int" default="8">
</ApiItem>
<ApiItem kind="constant" name="MODELS_NON_PRIMARY_KEY" type="int" default="2">
</ApiItem>
<ApiItem kind="constant" name="MODELS_NOT_NULL" type="int" default="3">
</ApiItem>
<ApiItem kind="constant" name="MODELS_PRIMARY_KEY" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="MODELS_REVERSE_COLUMN_MAP" type="int" default="1">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="adapter" type="CacheAdapterInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="columnMap" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="container" type="DiInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="metaData" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="pendingMetaDataWrites" type="array" default="[]">
Holds metadata index writes that arrived before the model's metadata was
properly initialized (e.g. skipAttributes() called in a parent model's
initialize() while the child's source had not yet been set).  Applied
inside initializeMetaData() after the real schema is loaded.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="strategy" type="StrategyInterface|null" default="null">
</ApiItem>

### Methods

<h4 id="mvcmodelmetadata-getadapter"><code>getAdapter()</code></h4>

```php
public function getAdapter(): CacheAdapterInterface|null;
```

Return the internal cache adapter

<h4 id="mvcmodelmetadata-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes( ModelInterface $model ): array;
```

Returns table attributes names (fields)

```php
print_r(
$metaData->getAttributes(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getautomaticcreateattributes"><code>getAutomaticCreateAttributes()</code></h4>

```php
public function getAutomaticCreateAttributes( ModelInterface $model ): array;
```

Returns attributes that must be ignored from the INSERT SQL generation

```php
print_r(eadColumnMapIndex)
)
);
```

<h4 id="mvcmodelmetadata-getautomaticupdateattributes"><code>getAutomaticUpdateAttributes()</code></h4>

```php
public function getAutomaticUpdateAttributes( ModelInterface $model ): array;
```

Returns attributes that must be ignored from the UPDATE SQL generation

```php
print_r(
$metaData->getAutomaticUpdateAttributes(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getbindtypes"><code>getBindTypes()</code></h4>

```php
public function getBindTypes( ModelInterface $model ): array;
```

Returns attributes and their bind data types

```php
print_r(
$metaData->getBindTypes(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getcolumnmap"><code>getColumnMap()</code></h4>

```php
public function getColumnMap( ModelInterface $model ): array|null;
```

Returns the column map if any

```php
print_r(
$metaData->getColumnMap(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getcolumnmapuniquekey"><code>getColumnMapUniqueKey()</code></h4>

```php
final public function getColumnMapUniqueKey( ModelInterface $model ): string|null;
```

Returns a ColumnMap Unique key for meta-data is created using className

<h4 id="mvcmodelmetadata-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface;
```

Returns the DependencyInjector container

<h4 id="mvcmodelmetadata-getdatatypes"><code>getDataTypes()</code></h4>

```php
public function getDataTypes( ModelInterface $model ): array;
```

Returns attributes and their data types

```php
print_r(
$metaData->getDataTypes(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getdatatypesnumeric"><code>getDataTypesNumeric()</code></h4>

```php
public function getDataTypesNumeric( ModelInterface $model ): array;
```

Returns attributes which types are numerical

```php
print_r(
$metaData->getDataTypesNumeric(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getdefaultvalues"><code>getDefaultValues()</code></h4>

```php
public function getDefaultValues( ModelInterface $model ): array;
```

Returns attributes (which have default values) and their default values

```php
print_r(
$metaData->getDefaultValues(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getemptystringattributes"><code>getEmptyStringAttributes()</code></h4>

```php
public function getEmptyStringAttributes( ModelInterface $model ): array;
```

Returns attributes allow empty strings

```php
print_r(
$metaData->getEmptyStringAttributes(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getidentityfield"><code>getIdentityField()</code></h4>

```php
public function getIdentityField( ModelInterface $model ): bool|string|null;
```

Returns the name of identity field (if one is present)

```php
print_r(
$metaData->getIdentityField(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getmetadatauniquekey"><code>getMetaDataUniqueKey()</code></h4>

```php
final public function getMetaDataUniqueKey( ModelInterface $model ): string|null;
```

Returns a MetaData Unique key for meta-data is created using className

<h4 id="mvcmodelmetadata-getmodeluuid"><code>getModelUUID()</code></h4>

```php
public function getModelUUID(
ModelInterface $model,
array $row
): string|null;
```

Returns the model UniqueID based on model and array row primary key(s) value(s)

<h4 id="mvcmodelmetadata-getnonprimarykeyattributes"><code>getNonPrimaryKeyAttributes()</code></h4>

```php
public function getNonPrimaryKeyAttributes( ModelInterface $model ): array;
```

Returns an array of fields which are not part of the primary key

```php
print_r(
$metaData->getNonPrimaryKeyAttributes(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getnotnullattributes"><code>getNotNullAttributes()</code></h4>

```php
public function getNotNullAttributes( ModelInterface $model ): array;
```

Returns an array of not null attributes

```php
print_r(
$metaData->getNotNullAttributes(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getprimarykeyattributes"><code>getPrimaryKeyAttributes()</code></h4>

```php
public function getPrimaryKeyAttributes( ModelInterface $model ): array;
```

Returns an array of fields which are part of the primary key

```php
print_r(
$metaData->getPrimaryKeyAttributes(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getreversecolumnmap"><code>getReverseColumnMap()</code></h4>

```php
public function getReverseColumnMap( ModelInterface $model ): array|null;
```

Returns the reverse column map if any

```php
print_r(
$metaData->getReverseColumnMap(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-getstrategy"><code>getStrategy()</code></h4>

```php
public function getStrategy(): StrategyInterface;
```

Return the strategy to obtain the meta-data

<h4 id="mvcmodelmetadata-hasattribute"><code>hasAttribute()</code></h4>

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
    new Invoices(),
    "name"
)
);
```

<h4 id="mvcmodelmetadata-isempty"><code>isEmpty()</code></h4>

```php
public function isEmpty(): bool;
```

Checks if the internal meta-data container is empty

```php
var_dump(
$metaData->isEmpty()
);
```

<h4 id="mvcmodelmetadata-modelequals"><code>modelEquals()</code></h4>

```php
public function modelEquals(
ModelInterface $first,
ModelInterface $other
): bool;
```

Compares if two models are the same in memory

<h4 id="mvcmodelmetadata-read"><code>read()</code></h4>

```php
public function read( string|null $key ): array|null;
```

Reads metadata from the adapter

<h4 id="mvcmodelmetadata-readcolumnmap"><code>readColumnMap()</code></h4>

```php
final public function readColumnMap( ModelInterface $model ): array|null;
```

Reads the ordered/reversed column map for certain model

```php
print_r(
$metaData->readColumnMap(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-readcolumnmapindex"><code>readColumnMapIndex()</code></h4>

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
    new Invoices(),
    MetaData::MODELS_REVERSE_COLUMN_MAP
)
);
```

<h4 id="mvcmodelmetadata-readmetadata"><code>readMetaData()</code></h4>

```php
final public function readMetaData( ModelInterface $model ): array|null;
```

Reads the complete meta-data for certain model

```php
print_r(
$metaData->readMetaData(
    new Invoices()
)
);
```

<h4 id="mvcmodelmetadata-readmetadataindex"><code>readMetaDataIndex()</code></h4>

```php
final public function readMetaDataIndex(
ModelInterface $model,
int $index
): array|bool|string|null;
```

Reads meta-data for certain model

```php
print_r(
$metaData->readMetaDataIndex(
    new Invoices(),
    0
)
);
```

<h4 id="mvcmodelmetadata-reset"><code>reset()</code></h4>

```php
public function reset(): void;
```

Resets internal meta-data in order to regenerate it

```php
$metaData->reset();
```

<h4 id="mvcmodelmetadata-setautomaticcreateattributes"><code>setAutomaticCreateAttributes()</code></h4>

```php
public function setAutomaticCreateAttributes(
ModelInterface $model,
array $attributes
): void;
```

Set the attributes that must be ignored from the INSERT SQL generation

```php
$metaData->setAutomaticCreateAttributes(
new Invoices(),
[
    "created_at" => true,
]
);
```

<h4 id="mvcmodelmetadata-setautomaticupdateattributes"><code>setAutomaticUpdateAttributes()</code></h4>

```php
public function setAutomaticUpdateAttributes(
ModelInterface $model,
array $attributes
): void;
```

Set the attributes that must be ignored from the UPDATE SQL generation

```php
$metaData->setAutomaticUpdateAttributes(
new Invoices(),
[
    "modified_at" => true,
]
);
```

<h4 id="mvcmodelmetadata-setemptystringattributes"><code>setEmptyStringAttributes()</code></h4>

```php
public function setEmptyStringAttributes(
ModelInterface $model,
array $attributes
): void;
```

Initialize old behavior for compatability

Set the attributes that allow empty string values

```php
$metaData->setEmptyStringAttributes(
new Invoices(),
[
    "name" => true,
]
);
```

<h4 id="mvcmodelmetadata-setstrategy"><code>setStrategy()</code></h4>

```php
public function setStrategy( StrategyInterface $strategy ): void;
```

Set the meta-data extraction strategy

<h4 id="mvcmodelmetadata-write"><code>write()</code></h4>

```php
public function write(
string $key,
array $data
): void;
```

Writes the metadata to adapter

<h4 id="mvcmodelmetadata-writemetadataindex"><code>writeMetaDataIndex()</code></h4>

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
    new Invoices(),
    MetaData::MODELS_REVERSE_COLUMN_MAP,
    [
        "leName" => "name",
    ]
)
);
```

<h4 id="mvcmodelmetadata-initialize"><code>initialize()</code></h4>

```php
final protected function initialize(
ModelInterface $model,
string $key,
mixed $table,
mixed $schema
): void;
```

Initialize old behavior for compatability

<h4 id="mvcmodelmetadata-initializecolumnmap"><code>initializeColumnMap()</code></h4>

```php
final protected function initializeColumnMap(
ModelInterface $model,
mixed $key
): bool;
```

Initialize ColumnMap for a certain table

<h4 id="mvcmodelmetadata-initializemetadata"><code>initializeMetaData()</code></h4>

```php
final protected function initializeMetaData(
ModelInterface $model,
string|null $key
): bool;
```

Initialize the metadata for certain table

## Mvc\Model\MetaDataInterface

Interface

Phalcon\Mvc\Model\MetaDataInterface

Interface for Phalcon\Mvc\Model\MetaData

- **`Phalcon\Mvc\Model\MetaDataInterface`**

`Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\MetaData\Strategy\StrategyInterface`

### Method Summary

<ApiItem href="#mvcmodelmetadatainterface-getattributes" visibility="public" name="getAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns table attributes names (fields)
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getautomaticcreateattributes" visibility="public" name="getAutomaticCreateAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes that must be ignored from the INSERT SQL generation
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getautomaticupdateattributes" visibility="public" name="getAutomaticUpdateAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes that must be ignored from the UPDATE SQL generation
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getbindtypes" visibility="public" name="getBindTypes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes and their bind data types
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getcolumnmap" visibility="public" name="getColumnMap" returnType="array|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the column map if any
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getdatatypes" visibility="public" name="getDataTypes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes and their data types
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getdatatypesnumeric" visibility="public" name="getDataTypesNumeric" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes which types are numerical
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getdefaultvalues" visibility="public" name="getDefaultValues" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes (which have default values) and their default values
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getemptystringattributes" visibility="public" name="getEmptyStringAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns attributes allow empty strings
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getidentityfield" visibility="public" name="getIdentityField" returnType="bool|string|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the name of identity field (if one is present)
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getnonprimarykeyattributes" visibility="public" name="getNonPrimaryKeyAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns an array of fields which are not part of the primary key
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getnotnullattributes" visibility="public" name="getNotNullAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns an array of not null attributes
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getprimarykeyattributes" visibility="public" name="getPrimaryKeyAttributes" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns an array of fields which are part of the primary key
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getreversecolumnmap" visibility="public" name="getReverseColumnMap" returnType="array|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Returns the reverse column map if any
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-getstrategy" visibility="public" name="getStrategy" returnType="StrategyInterface" params={[]}>
Return the strategy to obtain the meta-data
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-hasattribute" visibility="public" name="hasAttribute" returnType="bool" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"string","name":"attribute","default":null}]}>
Check if a model has certain attribute
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-isempty" visibility="public" name="isEmpty" returnType="bool" params={[]}>
Checks if the internal meta-data container is empty
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-read" visibility="public" name="read" returnType="array|null" params={[{"type":"string","name":"key","default":null}]}>
Reads meta-data from the adapter
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-readcolumnmap" visibility="public" name="readColumnMap" returnType="array|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Reads the ordered/reversed column map for certain model
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-readcolumnmapindex" visibility="public" name="readColumnMapIndex" returnType="array|null" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"int","name":"index","default":null}]}>
Reads column-map information for certain model using a MODEL_* constant
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-readmetadata" visibility="public" name="readMetaData" returnType="array|null" params={[{"type":"ModelInterface","name":"model","default":null}]}>
Reads meta-data for certain model
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-readmetadataindex" visibility="public" name="readMetaDataIndex" returnType="array|bool|string|null" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"int","name":"index","default":null}]}>
Reads meta-data for certain model using a MODEL_* constant
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-reset" visibility="public" name="reset" returnType="" params={[]}>
Resets internal meta-data in order to regenerate it
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-setautomaticcreateattributes" visibility="public" name="setAutomaticCreateAttributes" returnType="" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"attributes","default":null}]}>
Set the attributes that must be ignored from the INSERT SQL generation
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-setautomaticupdateattributes" visibility="public" name="setAutomaticUpdateAttributes" returnType="" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"attributes","default":null}]}>
Set the attributes that must be ignored from the UPDATE SQL generation
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-setemptystringattributes" visibility="public" name="setEmptyStringAttributes" returnType="void" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"attributes","default":null}]}>
Set the attributes that allow empty string values
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-setstrategy" visibility="public" name="setStrategy" returnType="" params={[{"type":"StrategyInterface","name":"strategy","default":null}]}>
Set the meta-data extraction strategy
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-write" visibility="public" name="write" returnType="void" params={[{"type":"string","name":"key","default":null},{"type":"array","name":"data","default":null}]}>
Writes meta-data to the adapter
</ApiItem>
<ApiItem href="#mvcmodelmetadatainterface-writemetadataindex" visibility="public" name="writeMetaDataIndex" returnType="" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"int","name":"index","default":null},{"type":"mixed","name":"data","default":null}]}>
Writes meta-data for certain model using a MODEL_* constant
</ApiItem>

### Methods

<h4 id="mvcmodelmetadatainterface-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes( ModelInterface $model ): array;
```

Returns table attributes names (fields)

<h4 id="mvcmodelmetadatainterface-getautomaticcreateattributes"><code>getAutomaticCreateAttributes()</code></h4>

```php
public function getAutomaticCreateAttributes( ModelInterface $model ): array;
```

Returns attributes that must be ignored from the INSERT SQL generation

<h4 id="mvcmodelmetadatainterface-getautomaticupdateattributes"><code>getAutomaticUpdateAttributes()</code></h4>

```php
public function getAutomaticUpdateAttributes( ModelInterface $model ): array;
```

Returns attributes that must be ignored from the UPDATE SQL generation

<h4 id="mvcmodelmetadatainterface-getbindtypes"><code>getBindTypes()</code></h4>

```php
public function getBindTypes( ModelInterface $model ): array;
```

Returns attributes and their bind data types

<h4 id="mvcmodelmetadatainterface-getcolumnmap"><code>getColumnMap()</code></h4>

```php
public function getColumnMap( ModelInterface $model ): array|null;
```

Returns the column map if any

<h4 id="mvcmodelmetadatainterface-getdatatypes"><code>getDataTypes()</code></h4>

```php
public function getDataTypes( ModelInterface $model ): array;
```

Returns attributes and their data types

<h4 id="mvcmodelmetadatainterface-getdatatypesnumeric"><code>getDataTypesNumeric()</code></h4>

```php
public function getDataTypesNumeric( ModelInterface $model ): array;
```

Returns attributes which types are numerical

<h4 id="mvcmodelmetadatainterface-getdefaultvalues"><code>getDefaultValues()</code></h4>

```php
public function getDefaultValues( ModelInterface $model ): array;
```

Returns attributes (which have default values) and their default values

<h4 id="mvcmodelmetadatainterface-getemptystringattributes"><code>getEmptyStringAttributes()</code></h4>

```php
public function getEmptyStringAttributes( ModelInterface $model ): array;
```

Returns attributes allow empty strings

<h4 id="mvcmodelmetadatainterface-getidentityfield"><code>getIdentityField()</code></h4>

```php
public function getIdentityField( ModelInterface $model ): bool|string|null;
```

Returns the name of identity field (if one is present)

<h4 id="mvcmodelmetadatainterface-getnonprimarykeyattributes"><code>getNonPrimaryKeyAttributes()</code></h4>

```php
public function getNonPrimaryKeyAttributes( ModelInterface $model ): array;
```

Returns an array of fields which are not part of the primary key

<h4 id="mvcmodelmetadatainterface-getnotnullattributes"><code>getNotNullAttributes()</code></h4>

```php
public function getNotNullAttributes( ModelInterface $model ): array;
```

Returns an array of not null attributes

<h4 id="mvcmodelmetadatainterface-getprimarykeyattributes"><code>getPrimaryKeyAttributes()</code></h4>

```php
public function getPrimaryKeyAttributes( ModelInterface $model ): array;
```

Returns an array of fields which are part of the primary key

<h4 id="mvcmodelmetadatainterface-getreversecolumnmap"><code>getReverseColumnMap()</code></h4>

```php
public function getReverseColumnMap( ModelInterface $model ): array|null;
```

Returns the reverse column map if any

<h4 id="mvcmodelmetadatainterface-getstrategy"><code>getStrategy()</code></h4>

```php
public function getStrategy(): StrategyInterface;
```

Return the strategy to obtain the meta-data

<h4 id="mvcmodelmetadatainterface-hasattribute"><code>hasAttribute()</code></h4>

```php
public function hasAttribute(
ModelInterface $model,
string $attribute
): bool;
```

Check if a model has certain attribute

<h4 id="mvcmodelmetadatainterface-isempty"><code>isEmpty()</code></h4>

```php
public function isEmpty(): bool;
```

Checks if the internal meta-data container is empty

<h4 id="mvcmodelmetadatainterface-read"><code>read()</code></h4>

```php
public function read( string $key ): array|null;
```

Reads meta-data from the adapter

<h4 id="mvcmodelmetadatainterface-readcolumnmap"><code>readColumnMap()</code></h4>

```php
public function readColumnMap( ModelInterface $model ): array|null;
```

Reads the ordered/reversed column map for certain model

<h4 id="mvcmodelmetadatainterface-readcolumnmapindex"><code>readColumnMapIndex()</code></h4>

```php
public function readColumnMapIndex(
ModelInterface $model,
int $index
): array|null;
```

Reads column-map information for certain model using a MODEL_* constant

<h4 id="mvcmodelmetadatainterface-readmetadata"><code>readMetaData()</code></h4>

```php
public function readMetaData( ModelInterface $model ): array|null;
```

Reads meta-data for certain model

<h4 id="mvcmodelmetadatainterface-readmetadataindex"><code>readMetaDataIndex()</code></h4>

```php
public function readMetaDataIndex(
ModelInterface $model,
int $index
): array|bool|string|null;
```

Reads meta-data for certain model using a MODEL_* constant

<h4 id="mvcmodelmetadatainterface-reset"><code>reset()</code></h4>

```php
public function reset();
```

Resets internal meta-data in order to regenerate it

<h4 id="mvcmodelmetadatainterface-setautomaticcreateattributes"><code>setAutomaticCreateAttributes()</code></h4>

```php
public function setAutomaticCreateAttributes(
ModelInterface $model,
array $attributes
);
```

Set the attributes that must be ignored from the INSERT SQL generation

<h4 id="mvcmodelmetadatainterface-setautomaticupdateattributes"><code>setAutomaticUpdateAttributes()</code></h4>

```php
public function setAutomaticUpdateAttributes(
ModelInterface $model,
array $attributes
);
```

Set the attributes that must be ignored from the UPDATE SQL generation

<h4 id="mvcmodelmetadatainterface-setemptystringattributes"><code>setEmptyStringAttributes()</code></h4>

```php
public function setEmptyStringAttributes(
ModelInterface $model,
array $attributes
): void;
```

Set the attributes that allow empty string values

<h4 id="mvcmodelmetadatainterface-setstrategy"><code>setStrategy()</code></h4>

```php
public function setStrategy( StrategyInterface $strategy );
```

Set the meta-data extraction strategy

<h4 id="mvcmodelmetadatainterface-write"><code>write()</code></h4>

```php
public function write(
string $key,
array $data
): void;
```

Writes meta-data to the adapter

<h4 id="mvcmodelmetadatainterface-writemetadataindex"><code>writeMetaDataIndex()</code></h4>

```php
public function writeMetaDataIndex(
ModelInterface $model,
int $index,
mixed $data
);
```

Writes meta-data for certain model using a MODEL_* constant

## Mvc\Model\MetaData\Apcu

Class

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

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- [`Phalcon\Mvc\Model\MetaData`](#mvcmodelmetadata)
- **`Phalcon\Mvc\Model\MetaData\Apcu`**

`Exception` · `Phalcon\Cache\AdapterFactory` · `Phalcon\Mvc\Model\MetaData`

### Method Summary

<ApiItem href="#mvcmodelmetadataapcu-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"AdapterFactory","name":"factory","default":null},{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Mvc\Model\MetaData\Apcu constructor
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataapcu-__construct"><code>__construct()</code></h4>

```php
public function __construct(
AdapterFactory $factory,
array $options = []
);
```

Phalcon\Mvc\Model\MetaData\Apcu constructor

## Mvc\Model\MetaData\Exceptions\CannotObtainTableColumns

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\CannotObtainTableColumns`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionscannotobtaintablecolumns-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"completeTable","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionscannotobtaintablecolumns-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $completeTable,
string $className
);
```

## Mvc\Model\MetaData\Exceptions\ColumnMapNotArray

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\ColumnMapNotArray`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionscolumnmapnotarray-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionscolumnmapnotarray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\MetaData\Exceptions\ContainerRequired

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\ContainerRequired`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionscontainerrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionscontainerrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\MetaData\Exceptions\CorruptedMetaData

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\CorruptedMetaData`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionscorruptedmetadata-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionscorruptedmetadata-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\MetaData\Exceptions\InvalidContainer

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\InvalidContainer`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionsinvalidcontainer-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionsinvalidcontainer-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\MetaData\Exceptions\InvalidMetaDataForModel

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\InvalidMetaDataForModel`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionsinvalidmetadataformodel-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"modelName","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionsinvalidmetadataformodel-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $modelName );
```

## Mvc\Model\MetaData\Exceptions\MetaDataDirectoryNotWritable

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\MetaDataDirectoryNotWritable`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionsmetadatadirectorynotwritable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionsmetadatadirectorynotwritable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\MetaData\Exceptions\MetaDataStrategyFailed

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\MetaDataStrategyFailed`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionsmetadatastrategyfailed-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"message","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionsmetadatastrategyfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $message );
```

## Mvc\Model\MetaData\Exceptions\NoAnnotationsForClass

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\NoAnnotationsForClass`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionsnoannotationsforclass-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionsnoannotationsforclass-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\MetaData\Exceptions\NoPropertyAnnotationsForClass

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\NoPropertyAnnotationsForClass`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionsnopropertyannotationsforclass-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionsnopropertyannotationsforclass-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\MetaData\Exceptions\TableNotInDatabase

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\MetaData\Exceptions\TableNotInDatabase`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelmetadataexceptionstablenotindatabase-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"completeTable","default":null},{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataexceptionstablenotindatabase-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $completeTable,
string $className
);
```

## Mvc\Model\MetaData\Libmemcached

Class

Stores model meta-data in the Memcache.

By default meta-data is stored for 48 hours (172800 seconds)

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- [`Phalcon\Mvc\Model\MetaData`](#mvcmodelmetadata)
- **`Phalcon\Mvc\Model\MetaData\Libmemcached`**

`Exception` · `Phalcon\Cache\AdapterFactory` · `Phalcon\Mvc\Model\MetaData`

### Method Summary

<ApiItem href="#mvcmodelmetadatalibmemcached-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"AdapterFactory","name":"factory","default":null},{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Mvc\Model\MetaData\Libmemcached constructor
</ApiItem>
<ApiItem href="#mvcmodelmetadatalibmemcached-reset" visibility="public" name="reset" returnType="void" params={[]}>
Flush Memcache data and resets internal meta-data in order to regenerate it
</ApiItem>

### Methods

<h4 id="mvcmodelmetadatalibmemcached-__construct"><code>__construct()</code></h4>

```php
public function __construct(
AdapterFactory $factory,
array $options = []
);
```

Phalcon\Mvc\Model\MetaData\Libmemcached constructor

<h4 id="mvcmodelmetadatalibmemcached-reset"><code>reset()</code></h4>

```php
public function reset(): void;
```

Flush Memcache data and resets internal meta-data in order to regenerate it

## Mvc\Model\MetaData\Memory

Class

Stores model meta-data in memory. Data will be erased when the request
finishes

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- [`Phalcon\Mvc\Model\MetaData`](#mvcmodelmetadata)
- **`Phalcon\Mvc\Model\MetaData\Memory`**

`Phalcon\Mvc\Model\MetaData`

### Method Summary

<ApiItem href="#mvcmodelmetadatamemory-read" visibility="public" name="read" returnType="array|null" params={[{"type":"string|null","name":"key","default":null}]}>
Reads the meta-data from temporal memory
</ApiItem>
<ApiItem href="#mvcmodelmetadatamemory-write" visibility="public" name="write" returnType="void" params={[{"type":"string|null","name":"key","default":null},{"type":"array","name":"data","default":null}]}>
Writes the meta-data to temporal memory
</ApiItem>

### Methods

<h4 id="mvcmodelmetadatamemory-read"><code>read()</code></h4>

```php
public function read( string|null $key ): array|null;
```

Reads the meta-data from temporal memory

<h4 id="mvcmodelmetadatamemory-write"><code>write()</code></h4>

```php
public function write(
string|null $key,
array $data
): void;
```

Writes the meta-data to temporal memory

## Mvc\Model\MetaData\Redis

Class

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

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- [`Phalcon\Mvc\Model\MetaData`](#mvcmodelmetadata)
- **`Phalcon\Mvc\Model\MetaData\Redis`**

`Exception` · `Phalcon\Cache\AdapterFactory` · `Phalcon\Mvc\Model\MetaData`

### Method Summary

<ApiItem href="#mvcmodelmetadataredis-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"AdapterFactory","name":"factory","default":null},{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Mvc\Model\MetaData\Redis constructor
</ApiItem>
<ApiItem href="#mvcmodelmetadataredis-reset" visibility="public" name="reset" returnType="void" params={[]}>
Flush Redis data and resets internal meta-data in order to regenerate it
</ApiItem>

### Methods

<h4 id="mvcmodelmetadataredis-__construct"><code>__construct()</code></h4>

```php
public function __construct(
AdapterFactory $factory,
array $options = []
);
```

Phalcon\Mvc\Model\MetaData\Redis constructor

<h4 id="mvcmodelmetadataredis-reset"><code>reset()</code></h4>

```php
public function reset(): void;
```

Flush Redis data and resets internal meta-data in order to regenerate it

## Mvc\Model\MetaData\Strategy\Annotations

Class

- **`Phalcon\Mvc\Model\MetaData\Strategy\Annotations`** - implements [`Phalcon\Mvc\Model\MetaData\Strategy\StrategyInterface`](#mvcmodelmetadatastrategystrategyinterface)

`Phalcon\Annotations\Parser\Collection` · `Phalcon\Db\Column` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Exception` · `Phalcon\Mvc\Model\MetaData` · `Phalcon\Mvc\Model\MetaData\Exceptions\InvalidContainer` · `Phalcon\Mvc\Model\MetaData\Exceptions\NoAnnotationsForClass` · `Phalcon\Mvc\Model\MetaData\Exceptions\NoPropertyAnnotationsForClass`

### Method Summary

<ApiItem href="#mvcmodelmetadatastrategyannotations-getcolumnmaps" visibility="public" name="getColumnMaps" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"DiInterface","name":"container","default":null}]}>
Read the model's column map, this can't be inferred
</ApiItem>
<ApiItem href="#mvcmodelmetadatastrategyannotations-getmetadata" visibility="public" name="getMetaData" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"DiInterface","name":"container","default":null}]}>
The meta-data is obtained by reading the column descriptions from the database information schema
</ApiItem>

### Methods

<h4 id="mvcmodelmetadatastrategyannotations-getcolumnmaps"><code>getColumnMaps()</code></h4>

```php
public function getColumnMaps(
ModelInterface $model,
DiInterface $container
): array;
```

Read the model's column map, this can't be inferred

<h4 id="mvcmodelmetadatastrategyannotations-getmetadata"><code>getMetaData()</code></h4>

```php
public function getMetaData(
ModelInterface $model,
DiInterface $container
): array;
```

The meta-data is obtained by reading the column descriptions from the database information schema

## Mvc\Model\MetaData\Strategy\Introspection

Class

Queries the table meta-data in order to introspect the model's metadata

- **`Phalcon\Mvc\Model\MetaData\Strategy\Introspection`** - implements [`Phalcon\Mvc\Model\MetaData\Strategy\StrategyInterface`](#mvcmodelmetadatastrategystrategyinterface)

`Phalcon\Di\DiInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\MetaData` · `Phalcon\Mvc\Model\MetaData\Exceptions\CannotObtainTableColumns` · `Phalcon\Mvc\Model\MetaData\Exceptions\ColumnMapNotArray` · `Phalcon\Mvc\Model\MetaData\Exceptions\TableNotInDatabase`

### Method Summary

<ApiItem href="#mvcmodelmetadatastrategyintrospection-getcolumnmaps" visibility="public" name="getColumnMaps" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"DiInterface","name":"container","default":null}]}>
Read the model's column map, this can't be inferred
</ApiItem>
<ApiItem href="#mvcmodelmetadatastrategyintrospection-getmetadata" visibility="public" name="getMetaData" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"DiInterface","name":"container","default":null}]}>
The meta-data is obtained by reading the column descriptions from the database information schema
</ApiItem>

### Methods

<h4 id="mvcmodelmetadatastrategyintrospection-getcolumnmaps"><code>getColumnMaps()</code></h4>

```php
final public function getColumnMaps(
ModelInterface $model,
DiInterface $container
): array;
```

Read the model's column map, this can't be inferred

<h4 id="mvcmodelmetadatastrategyintrospection-getmetadata"><code>getMetaData()</code></h4>

```php
final public function getMetaData(
ModelInterface $model,
DiInterface $container
): array;
```

The meta-data is obtained by reading the column descriptions from the database information schema

## Mvc\Model\MetaData\Strategy\StrategyInterface

Interface

- **`Phalcon\Mvc\Model\MetaData\Strategy\StrategyInterface`**

`Phalcon\Di\DiInterface` · `Phalcon\Mvc\ModelInterface`

### Method Summary

<ApiItem href="#mvcmodelmetadatastrategystrategyinterface-getcolumnmaps" visibility="public" name="getColumnMaps" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"DiInterface","name":"container","default":null}]}>
Read the model's column map, this can't be inferred
</ApiItem>
<ApiItem href="#mvcmodelmetadatastrategystrategyinterface-getmetadata" visibility="public" name="getMetaData" returnType="array" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"DiInterface","name":"container","default":null}]}>
The meta-data is obtained by reading the column descriptions from the
</ApiItem>

### Methods

<h4 id="mvcmodelmetadatastrategystrategyinterface-getcolumnmaps"><code>getColumnMaps()</code></h4>

```php
public function getColumnMaps(
ModelInterface $model,
DiInterface $container
): array;
```

Read the model's column map, this can't be inferred

<h4 id="mvcmodelmetadatastrategystrategyinterface-getmetadata"><code>getMetaData()</code></h4>

```php
public function getMetaData(
ModelInterface $model,
DiInterface $container
): array;
```

The meta-data is obtained by reading the column descriptions from the
database information schema

## Mvc\Model\MetaData\Stream

Class

Phalcon\Mvc\Model\MetaData\Stream

Stores model meta-data in PHP files.

```php
$metaData = new \Phalcon\Mvc\Model\MetaData\Files(
[
    "metaDataDir" => "app/cache/metadata/",
]
);
```

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- [`Phalcon\Mvc\Model\MetaData`](#mvcmodelmetadata)
- **`Phalcon\Mvc\Model\MetaData\Stream`**

`Phalcon\Mvc\Model\Exception` · `Phalcon\Mvc\Model\MetaData` · `Phalcon\Mvc\Model\MetaData\Exceptions\MetaDataDirectoryNotWritable` · `Phalcon\Support\Settings` · `Phalcon\Support\Traits\FilePathTrait`

### Method Summary

<ApiItem href="#mvcmodelmetadatastream-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Mvc\Model\MetaData\Files constructor
</ApiItem>
<ApiItem href="#mvcmodelmetadatastream-read" visibility="public" name="read" returnType="array|null" params={[{"type":"string|null","name":"key","default":null}]}>
Reads meta-data from files
</ApiItem>
<ApiItem href="#mvcmodelmetadatastream-write" visibility="public" name="write" returnType="void" params={[{"type":"string|null","name":"key","default":null},{"type":"array","name":"data","default":null}]}>
Writes the meta-data to files
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="metaDataDir" type="string" default="&quot;./&quot;">
</ApiItem>

### Methods

<h4 id="mvcmodelmetadatastream-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Phalcon\Mvc\Model\MetaData\Files constructor

<h4 id="mvcmodelmetadatastream-read"><code>read()</code></h4>

```php
public function read( string|null $key ): array|null;
```

Reads meta-data from files

<h4 id="mvcmodelmetadatastream-write"><code>write()</code></h4>

```php
public function write(
string|null $key,
array $data
): void;
```

Writes the meta-data to files

## Mvc\Model\Query

Class

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

$phql = 'SELECT * FROM Invoices';

$myTransaction = new Transaction($di);
$myTransaction->begin();

$newInvoice = new Invoices();
$newInvoice->setTransaction($myTransaction);
$newInvoice->inv_status_flag = 1;
$newInvoice->inv_title = "Test Invoice";
$newInvoice->inv_total = 100;
$newInvoice->save();

$queryWithTransaction = new Query($phql, $di);
$queryWithTransaction->setTransaction($myTransaction);

$resultWithEntries = $queryWithTransaction->execute();

$queryWithOutTransaction = new Query($phql, $di);
$resultWithOutEntries = $queryWithTransaction->execute();
```

- **`Phalcon\Mvc\Model\Query`** - implements [`Phalcon\Mvc\Model\QueryInterface`](#mvcmodelqueryinterface), [`Phalcon\Di\InjectionAwareInterface`](/6.0/api/phalcon_di/#diinjectionawareinterface)

`PDOException` · `Phalcon\Cache\CacheInterface` · `Phalcon\Cache\Exception\InvalidArgumentException` · `Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Db\Column` · `Phalcon\Db\RawValue` · `Phalcon\Db\ResultInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Di\Traits\InjectionAwareTrait` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Query\Exceptions\AmbiguousColumn` · `Phalcon\Mvc\Model\Query\Exceptions\AmbiguousJoinRelation` · `Phalcon\Mvc\Model\Query\Exceptions\BindParameterNotInPlaceholders` · `Phalcon\Mvc\Model\Query\Exceptions\BindTypeRequiresArray` · `Phalcon\Mvc\Model\Query\Exceptions\BindValueRequired` · `Phalcon\Mvc\Model\Query\Exceptions\ColumnNotInDomain` · `Phalcon\Mvc\Model\Query\Exceptions\ColumnNotInSelectedModels` · `Phalcon\Mvc\Model\Query\Exceptions\CorruptedAst` · `Phalcon\Mvc\Model\Query\Exceptions\CorruptedDeleteAst` · `Phalcon\Mvc\Model\Query\Exceptions\CorruptedInsertAst` · `Phalcon\Mvc\Model\Query\Exceptions\CorruptedSelectAst` · `Phalcon\Mvc\Model\Query\Exceptions\CorruptedUpdateAst` · `Phalcon\Mvc\Model\Query\Exceptions\DeleteMultipleNotSupported` · `Phalcon\Mvc\Model\Query\Exceptions\DuplicateAlias` · `Phalcon\Mvc\Model\Query\Exceptions\EmptyArrayPlaceholderValue` · `Phalcon\Mvc\Model\Query\Exceptions\InsertColumnCountMismatch` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidCachedResultset` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidColumnDefinition` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidInjectedManager` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidInjectedMetadata` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidQueryCacheService` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidResultsetClass` · `Phalcon\Mvc\Model\Query\Exceptions\InvalidResultsetRowClass` · `Phalcon\Mvc\Model\Query\Exceptions\JoinAliasAlreadyUsed` · `Phalcon\Mvc\Model\Query\Exceptions\JoinFieldCountMismatch` · `Phalcon\Mvc\Model\Query\Exceptions\MissingCacheKey` · `Phalcon\Mvc\Model\Query\Exceptions\MissingMetaData` · `Phalcon\Mvc\Model\Query\Exceptions\MissingModelAttribute` · `Phalcon\Mvc\Model\Query\Exceptions\MissingModelsManager` · `Phalcon\Mvc\Model\Query\Exceptions\MixedDatabaseSystems` · `Phalcon\Mvc\Model\Query\Exceptions\ModelSourceNotFound` · `Phalcon\Mvc\Model\Query\Exceptions\ModelsListNotLoaded` · `Phalcon\Mvc\Model\Query\Exceptions\MultipleSqlStatementsNotSupported` · `Phalcon\Mvc\Model\Query\Exceptions\NoModelForAlias` · `Phalcon\Mvc\Model\Query\Exceptions\PhqlColumnNotInMap` · `Phalcon\Mvc\Model\Query\Exceptions\ReadConnectionMissing` · `Phalcon\Mvc\Model\Query\Exceptions\RelationshipNotFound` · `Phalcon\Mvc\Model\Query\Exceptions\ResultsetClassNotFound` · `Phalcon\Mvc\Model\Query\Exceptions\ResultsetNonCacheable` · `Phalcon\Mvc\Model\Query\Exceptions\ResultsetRowClassNotFound` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownBindType` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownColumnType` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownJoinType` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownModelOrAlias` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpression` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpressionType` · `Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlStatement` · `Phalcon\Mvc\Model\Query\Exceptions\UnsafeIdentifier` · `Phalcon\Mvc\Model\Query\Exceptions\UpdateMultipleNotSupported` · `Phalcon\Mvc\Model\Query\Exceptions\WriteConnectionMissing` · `Phalcon\Mvc\Model\Query\Status` · `Phalcon\Mvc\Model\Query\StatusInterface` · `Phalcon\Mvc\Model\Resultset\Complex` · `Phalcon\Mvc\Model\Resultset\Simple` · `Phalcon\Phql\Parser` · `Phalcon\Phql\Scanner\Opcode` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#mvcmodelquery-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string|null","name":"phql","default":"null"},{"type":"DiInterface|null","name":"container","default":"null"},{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Mvc\Model\Query constructor
</ApiItem>
<ApiItem href="#mvcmodelquery-cache" visibility="public" name="cache" returnType="QueryInterface" params={[{"type":"array","name":"cacheOptions","default":null}]}>
Sets the cache parameters of the query
</ApiItem>
<ApiItem href="#mvcmodelquery-clean" visibility="public" name="clean" returnType="void" params={[]}>
Destroys the internal PHQL cache
</ApiItem>
<ApiItem href="#mvcmodelquery-execute" visibility="public" name="execute" returnType="mixed" params={[{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Executes a parsed PHQL statement
</ApiItem>
<ApiItem href="#mvcmodelquery-getbindparams" visibility="public" name="getBindParams" returnType="array" params={[]}>
Returns default bind params
</ApiItem>
<ApiItem href="#mvcmodelquery-getbindtypes" visibility="public" name="getBindTypes" returnType="array" params={[]}>
Returns default bind types
</ApiItem>
<ApiItem href="#mvcmodelquery-getcache" visibility="public" name="getCache" returnType="CacheInterface|null" params={[]}>
Returns the current cache backend instance
</ApiItem>
<ApiItem href="#mvcmodelquery-getcacheoptions" visibility="public" name="getCacheOptions" returnType="array" params={[]}>
Returns the current cache options
</ApiItem>
<ApiItem href="#mvcmodelquery-getintermediate" visibility="public" name="getIntermediate" returnType="array" params={[]}>
Returns the intermediate representation of the PHQL statement
</ApiItem>
<ApiItem href="#mvcmodelquery-getresultsetrowclass" visibility="public" name="getResultsetRowClass" returnType="string" params={[]}>
Returns the class that will be used to hydrate rows that are not mapped
</ApiItem>
<ApiItem href="#mvcmodelquery-getsingleresult" visibility="public" name="getSingleResult" returnType="ModelInterface" params={[{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Executes the query returning the first result
</ApiItem>
<ApiItem href="#mvcmodelquery-getsql" visibility="public" name="getSql" returnType="array" params={[]}>
Returns an associative array with the SQL to be generated by the internal PHQL,
</ApiItem>
<ApiItem href="#mvcmodelquery-gettransaction" visibility="public" name="getTransaction" returnType="TransactionInterface|null" params={[]}>
</ApiItem>
<ApiItem href="#mvcmodelquery-gettype" visibility="public" name="getType" returnType="int" params={[]}>
Gets the type of PHQL statement executed
</ApiItem>
<ApiItem href="#mvcmodelquery-getuniquerow" visibility="public" name="getUniqueRow" returnType="bool" params={[]}>
Check if the query is programmed to get only the first row in the
</ApiItem>
<ApiItem href="#mvcmodelquery-parse" visibility="public" name="parse" returnType="array" params={[]}>
Parses the intermediate code produced by Phalcon\Mvc\Model\Query\Lang
</ApiItem>
<ApiItem href="#mvcmodelquery-setbindparams" visibility="public" name="setBindParams" returnType="QueryInterface" params={[{"type":"array","name":"bindParams","default":null},{"type":"bool","name":"merge","default":"false"}]}>
Set default bind parameters
</ApiItem>
<ApiItem href="#mvcmodelquery-setbindtypes" visibility="public" name="setBindTypes" returnType="QueryInterface" params={[{"type":"array","name":"bindTypes","default":null},{"type":"bool","name":"merge","default":"false"}]}>
Set default bind parameters
</ApiItem>
<ApiItem href="#mvcmodelquery-setdi" visibility="public" name="setDI" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Sets the dependency injection container
</ApiItem>
<ApiItem href="#mvcmodelquery-setintermediate" visibility="public" name="setIntermediate" returnType="QueryInterface" params={[{"type":"array","name":"intermediate","default":null}]}>
Allows to set the IR to be executed
</ApiItem>
<ApiItem href="#mvcmodelquery-setresultsetrowclass" visibility="public" name="setResultsetRowClass" returnType="QueryInterface" params={[{"type":"string","name":"resultsetRowClass","default":null}]}>
Sets the class used to hydrate rows that are not mapped to a model
</ApiItem>
<ApiItem href="#mvcmodelquery-setsharedlock" visibility="public" name="setSharedLock" returnType="QueryInterface" params={[{"type":"bool","name":"sharedLock","default":"false"}]}>
Set SHARED LOCK clause
</ApiItem>
<ApiItem href="#mvcmodelquery-settransaction" visibility="public" name="setTransaction" returnType="QueryInterface" params={[{"type":"TransactionInterface","name":"transaction","default":null}]}>
allows to wrap a transaction around all queries
</ApiItem>
<ApiItem href="#mvcmodelquery-settype" visibility="public" name="setType" returnType="QueryInterface" params={[{"type":"int","name":"type","default":null}]}>
Sets the type of PHQL statement to be executed
</ApiItem>
<ApiItem href="#mvcmodelquery-setuniquerow" visibility="public" name="setUniqueRow" returnType="QueryInterface" params={[{"type":"bool","name":"uniqueRow","default":null}]}>
Tells to the query if only the first row in the resultset must be
</ApiItem>
<ApiItem href="#mvcmodelquery-executedelete" visibility="protected" name="executeDelete" returnType="StatusInterface" params={[{"type":"array","name":"intermediate","default":null},{"type":"array","name":"bindParams","default":null},{"type":"array","name":"bindTypes","default":null}]}>
Executes the DELETE intermediate representation producing a
</ApiItem>
<ApiItem href="#mvcmodelquery-executeinsert" visibility="protected" name="executeInsert" returnType="StatusInterface" params={[{"type":"array","name":"intermediate","default":null},{"type":"array","name":"bindParams","default":null},{"type":"array","name":"bindTypes","default":null}]}>
Executes the INSERT intermediate representation producing a
</ApiItem>
<ApiItem href="#mvcmodelquery-executeselect" visibility="protected" name="executeSelect" returnType="array|ResultsetInterface" params={[{"type":"array","name":"intermediate","default":null},{"type":"array","name":"bindParams","default":null},{"type":"array","name":"bindTypes","default":null},{"type":"bool","name":"simulate","default":"false"}]}>
Executes the SELECT intermediate representation producing a
</ApiItem>
<ApiItem href="#mvcmodelquery-executeupdate" visibility="protected" name="executeUpdate" returnType="StatusInterface" params={[{"type":"array","name":"intermediate","default":null},{"type":"array","name":"bindParams","default":null},{"type":"array","name":"bindTypes","default":null}]}>
Executes the UPDATE intermediate representation producing a
</ApiItem>
<ApiItem href="#mvcmodelquery-getcallargument" visibility="protected" name="getCallArgument" returnType="array" params={[{"type":"array","name":"argument","default":null}]}>
Resolves an expression in a single call argument
</ApiItem>
<ApiItem href="#mvcmodelquery-getcaseexpression" visibility="protected" name="getCaseExpression" returnType="array" params={[{"type":"array","name":"expr","default":null}]}>
Resolves an expression in a single call argument
</ApiItem>
<ApiItem href="#mvcmodelquery-getexpression" visibility="protected" name="getExpression" returnType="array" params={[{"type":"array","name":"expr","default":null},{"type":"bool","name":"quoting","default":"true"}]}>
Resolves an expression from its intermediate code into an array
</ApiItem>
<ApiItem href="#mvcmodelquery-getfunctioncall" visibility="protected" name="getFunctionCall" returnType="array" params={[{"type":"array","name":"expr","default":null}]}>
Resolves an expression in a single call argument
</ApiItem>
<ApiItem href="#mvcmodelquery-getgroupclause" visibility="protected" name="getGroupClause" returnType="array" params={[{"type":"array","name":"group","default":null}]}>
Returns a processed group clause for a SELECT statement
</ApiItem>
<ApiItem href="#mvcmodelquery-getjoin" visibility="protected" name="getJoin" returnType="array" params={[{"type":"ManagerInterface","name":"manager","default":null},{"type":"array","name":"join","default":null}]}>
Resolves a JOIN clause checking if the associated models exist
</ApiItem>
<ApiItem href="#mvcmodelquery-getjointype" visibility="protected" name="getJoinType" returnType="string" params={[{"type":"array","name":"join","default":null}]}>
Resolves a JOIN type
</ApiItem>
<ApiItem href="#mvcmodelquery-getjoins" visibility="protected" name="getJoins" returnType="array" params={[{"type":"array","name":"select","default":null}]}>
Processes the JOINs in the query returning an internal representation for
</ApiItem>
<ApiItem href="#mvcmodelquery-getlimitclause" visibility="protected" name="getLimitClause" returnType="array" params={[{"type":"array","name":"limitClause","default":null}]}>
Returns a processed limit clause for a SELECT statement
</ApiItem>
<ApiItem href="#mvcmodelquery-getmultijoin" visibility="protected" name="getMultiJoin" returnType="array" params={[{"type":"string","name":"joinType","default":null},{"type":"mixed","name":"joinSource","default":null},{"type":"string","name":"modelAlias","default":null},{"type":"string","name":"joinAlias","default":null},{"type":"RelationInterface","name":"relation","default":null}]}>
Resolves joins involving many-to-many relations
</ApiItem>
<ApiItem href="#mvcmodelquery-getorderclause" visibility="protected" name="getOrderClause" returnType="array" params={[{"type":"array|string","name":"order","default":null}]}>
Returns a processed order clause for a SELECT statement
</ApiItem>
<ApiItem href="#mvcmodelquery-getqualified" visibility="protected" name="getQualified" returnType="array" params={[{"type":"array","name":"expr","default":null}]}>
Replaces the model's name to its source name in a qualified-name
</ApiItem>
<ApiItem href="#mvcmodelquery-getreadconnection" visibility="protected" name="getReadConnection" returnType="AdapterInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array|null","name":"intermediate","default":"null"},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Gets the read connection from the model if there is no transaction set
</ApiItem>
<ApiItem href="#mvcmodelquery-getrelatedrecords" visibility="protected" name="getRelatedRecords" returnType="ResultsetInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"intermediate","default":null},{"type":"array","name":"bindParams","default":null},{"type":"array","name":"bindTypes","default":null}]}>
Query the records on which the UPDATE/DELETE operation will be done
</ApiItem>
<ApiItem href="#mvcmodelquery-getselectcolumn" visibility="protected" name="getSelectColumn" returnType="array" params={[{"type":"array","name":"column","default":null}]}>
Resolves a column from its intermediate representation into an array
</ApiItem>
<ApiItem href="#mvcmodelquery-getsinglejoin" visibility="protected" name="getSingleJoin" returnType="array" params={[{"type":"string","name":"joinType","default":null},{"type":"string","name":"joinSource","default":null},{"type":"string","name":"modelAlias","default":null},{"type":"string","name":"joinAlias","default":null},{"type":"RelationInterface","name":"relation","default":null}]}>
Resolves joins involving has-one/belongs-to/has-many relations
</ApiItem>
<ApiItem href="#mvcmodelquery-gettable" visibility="protected" name="getTable" returnType="array|string" params={[{"type":"ManagerInterface","name":"manager","default":null},{"type":"array","name":"qualifiedName","default":null}]}>
Resolves a table in a SELECT statement checking if the model exists
</ApiItem>
<ApiItem href="#mvcmodelquery-getwriteconnection" visibility="protected" name="getWriteConnection" returnType="AdapterInterface" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array|null","name":"intermediate","default":"null"},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Gets the write connection from the model if there is no transaction
</ApiItem>
<ApiItem href="#mvcmodelquery-preparedelete" visibility="protected" name="prepareDelete" returnType="array" params={[]}>
Analyzes a DELETE intermediate code and produces an array to be executed
</ApiItem>
<ApiItem href="#mvcmodelquery-prepareinsert" visibility="protected" name="prepareInsert" returnType="array" params={[]}>
Analyzes an INSERT intermediate code and produces an array to be executed
</ApiItem>
<ApiItem href="#mvcmodelquery-prepareselect" visibility="protected" name="prepareSelect" returnType="array" params={[{"type":"mixed","name":"ast","default":"null"},{"type":"bool","name":"merge","default":"false"}]}>
Analyzes a SELECT intermediate code and produces an array to be executed later
</ApiItem>
<ApiItem href="#mvcmodelquery-prepareupdate" visibility="protected" name="prepareUpdate" returnType="array" params={[]}>
Analyzes an UPDATE intermediate code and produces an array to be executed
</ApiItem>
<ApiItem href="#mvcmodelquery-refreshschemasinintermediate" visibility="protected" name="refreshSchemasInIntermediate" returnType="array" params={[{"type":"array","name":"irPhql","default":null}]}>
Refreshes the schema/source of every model referenced in a cached
</ApiItem>

### Constants

<ApiItem kind="constant" name="TYPE_DELETE" type="int" default="303">
</ApiItem>
<ApiItem kind="constant" name="TYPE_INSERT" type="int" default="306">
</ApiItem>
<ApiItem kind="constant" name="TYPE_SELECT" type="int" default="309">
</ApiItem>
<ApiItem kind="constant" name="TYPE_UPDATE" type="int" default="300">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="ast" type="array" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="bindParams" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="bindTypes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="cache" type="CacheInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="cacheOptions" type="array|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="enableImplicitJoins" type="bool" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="intermediate" type="array|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="internalPhqlCache" type="array|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="manager" type="ManagerInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="metaData" type="MetaDataInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="models" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="modelsInstances" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="nestingLevel" type="int" default="-1">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="parser" type="Parser" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="phql" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="resultsetRowClass" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sharedLock" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlAliases" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlAliasesModels" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlAliasesModelsInstances" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlColumnAliases" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sqlModelsAliases" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="transaction" type="TransactionInterface|null" default="null">
TransactionInterface so that the query can wrap a transaction
around batch updates and intermediate selects within the transaction.
however if a model got a transaction set inside it will use the local
transaction instead of this one
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="int|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="uniqueRow" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="mvcmodelquery-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string|null $phql = null,
DiInterface|null $container = null,
array $options = []
);
```

Phalcon\Mvc\Model\Query constructor

<h4 id="mvcmodelquery-cache"><code>cache()</code></h4>

```php
public function cache( array $cacheOptions ): QueryInterface;
```

Sets the cache parameters of the query

<h4 id="mvcmodelquery-clean"><code>clean()</code></h4>

```php
public static function clean(): void;
```

Destroys the internal PHQL cache

<h4 id="mvcmodelquery-execute"><code>execute()</code></h4>

```php
public function execute(
array $bindParams = [],
array $bindTypes = []
): mixed;
```

Executes a parsed PHQL statement

<h4 id="mvcmodelquery-getbindparams"><code>getBindParams()</code></h4>

```php
public function getBindParams(): array;
```

Returns default bind params

<h4 id="mvcmodelquery-getbindtypes"><code>getBindTypes()</code></h4>

```php
public function getBindTypes(): array;
```

Returns default bind types

<h4 id="mvcmodelquery-getcache"><code>getCache()</code></h4>

```php
public function getCache(): CacheInterface|null;
```

Returns the current cache backend instance

<h4 id="mvcmodelquery-getcacheoptions"><code>getCacheOptions()</code></h4>

```php
public function getCacheOptions(): array;
```

Returns the current cache options

<h4 id="mvcmodelquery-getintermediate"><code>getIntermediate()</code></h4>

```php
public function getIntermediate(): array;
```

Returns the intermediate representation of the PHQL statement

<h4 id="mvcmodelquery-getresultsetrowclass"><code>getResultsetRowClass()</code></h4>

```php
public function getResultsetRowClass(): string;
```

Returns the class that will be used to hydrate rows that are not mapped
to a model (custom columns/joins). An empty string means the default
Phalcon\Mvc\Model\Row is used.

<h4 id="mvcmodelquery-getsingleresult"><code>getSingleResult()</code></h4>

```php
public function getSingleResult(
array $bindParams = [],
array $bindTypes = []
): ModelInterface;
```

Executes the query returning the first result

<h4 id="mvcmodelquery-getsql"><code>getSql()</code></h4>

```php
public function getSql(): array;
```

Returns an associative array with the SQL to be generated by the internal PHQL,
and arrays with bound parameters and their types (only works in SELECT statements).

```php
[
'sql' => 'SELECT * FROM co_invoices WHERE inv_cst_id = :cst_id',
'bind' => ['cst_id' => 123],
'bindTypes => ['cst_id' => 1] // 1 corresponds to int
]
```

<h4 id="mvcmodelquery-gettransaction"><code>getTransaction()</code></h4>

```php
public function getTransaction(): TransactionInterface|null;
```

<h4 id="mvcmodelquery-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

Gets the type of PHQL statement executed

<h4 id="mvcmodelquery-getuniquerow"><code>getUniqueRow()</code></h4>

```php
public function getUniqueRow(): bool;
```

Check if the query is programmed to get only the first row in the
resultset

<h4 id="mvcmodelquery-parse"><code>parse()</code></h4>

```php
public function parse(): array;
```

Parses the intermediate code produced by Phalcon\Mvc\Model\Query\Lang
generating another intermediate representation that could be executed by
Phalcon\Mvc\Model\Query

<h4 id="mvcmodelquery-setbindparams"><code>setBindParams()</code></h4>

```php
public function setBindParams(
array $bindParams,
bool $merge = false
): QueryInterface;
```

Set default bind parameters

<h4 id="mvcmodelquery-setbindtypes"><code>setBindTypes()</code></h4>

```php
public function setBindTypes(
array $bindTypes,
bool $merge = false
): QueryInterface;
```

Set default bind parameters

<h4 id="mvcmodelquery-setdi"><code>setDI()</code></h4>

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injection container

<h4 id="mvcmodelquery-setintermediate"><code>setIntermediate()</code></h4>

```php
public function setIntermediate( array $intermediate ): QueryInterface;
```

Allows to set the IR to be executed

<h4 id="mvcmodelquery-setresultsetrowclass"><code>setResultsetRowClass()</code></h4>

```php
public function setResultsetRowClass( string $resultsetRowClass ): QueryInterface;
```

Sets the class used to hydrate rows that are not mapped to a model
(custom columns/joins). The class must be a subclass of
Phalcon\Mvc\Model\Row.

<h4 id="mvcmodelquery-setsharedlock"><code>setSharedLock()</code></h4>

```php
public function setSharedLock( bool $sharedLock = false ): QueryInterface;
```

Set SHARED LOCK clause

<h4 id="mvcmodelquery-settransaction"><code>setTransaction()</code></h4>

```php
public function setTransaction( TransactionInterface $transaction ): QueryInterface;
```

allows to wrap a transaction around all queries

<h4 id="mvcmodelquery-settype"><code>setType()</code></h4>

```php
public function setType( int $type ): QueryInterface;
```

Sets the type of PHQL statement to be executed

<h4 id="mvcmodelquery-setuniquerow"><code>setUniqueRow()</code></h4>

```php
public function setUniqueRow( bool $uniqueRow ): QueryInterface;
```

Tells to the query if only the first row in the resultset must be
returned

<h4 id="mvcmodelquery-executedelete"><code>executeDelete()</code></h4>

```php
final protected function executeDelete(
array $intermediate,
array $bindParams,
array $bindTypes
): StatusInterface;
```

Executes the DELETE intermediate representation producing a
Phalcon\Mvc\Model\Query\Status

<h4 id="mvcmodelquery-executeinsert"><code>executeInsert()</code></h4>

```php
final protected function executeInsert(
array $intermediate,
array $bindParams,
array $bindTypes
): StatusInterface;
```

Executes the INSERT intermediate representation producing a
Phalcon\Mvc\Model\Query\Status

<h4 id="mvcmodelquery-executeselect"><code>executeSelect()</code></h4>

```php
final protected function executeSelect(
array $intermediate,
array $bindParams,
array $bindTypes,
bool $simulate = false
): array|ResultsetInterface;
```

Executes the SELECT intermediate representation producing a
Phalcon\Mvc\Model\Resultset

<h4 id="mvcmodelquery-executeupdate"><code>executeUpdate()</code></h4>

```php
final protected function executeUpdate(
array $intermediate,
array $bindParams,
array $bindTypes
): StatusInterface;
```

Executes the UPDATE intermediate representation producing a
Phalcon\Mvc\Model\Query\Status

<h4 id="mvcmodelquery-getcallargument"><code>getCallArgument()</code></h4>

```php
final protected function getCallArgument( array $argument ): array;
```

Resolves an expression in a single call argument

<h4 id="mvcmodelquery-getcaseexpression"><code>getCaseExpression()</code></h4>

```php
final protected function getCaseExpression( array $expr ): array;
```

Resolves an expression in a single call argument

<h4 id="mvcmodelquery-getexpression"><code>getExpression()</code></h4>

```php
final protected function getExpression(
array $expr,
bool $quoting = true
): array;
```

Resolves an expression from its intermediate code into an array

<h4 id="mvcmodelquery-getfunctioncall"><code>getFunctionCall()</code></h4>

```php
final protected function getFunctionCall( array $expr ): array;
```

Resolves an expression in a single call argument

<h4 id="mvcmodelquery-getgroupclause"><code>getGroupClause()</code></h4>

```php
final protected function getGroupClause( array $group ): array;
```

Returns a processed group clause for a SELECT statement

<h4 id="mvcmodelquery-getjoin"><code>getJoin()</code></h4>

```php
final protected function getJoin(
ManagerInterface $manager,
array $join
): array;
```

Resolves a JOIN clause checking if the associated models exist

<h4 id="mvcmodelquery-getjointype"><code>getJoinType()</code></h4>

```php
final protected function getJoinType( array $join ): string;
```

Resolves a JOIN type

<h4 id="mvcmodelquery-getjoins"><code>getJoins()</code></h4>

```php
final protected function getJoins( array $select ): array;
```

Processes the JOINs in the query returning an internal representation for
the database dialect

<h4 id="mvcmodelquery-getlimitclause"><code>getLimitClause()</code></h4>

```php
final protected function getLimitClause( array $limitClause ): array;
```

Returns a processed limit clause for a SELECT statement

<h4 id="mvcmodelquery-getmultijoin"><code>getMultiJoin()</code></h4>

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

<h4 id="mvcmodelquery-getorderclause"><code>getOrderClause()</code></h4>

```php
final protected function getOrderClause( array|string $order ): array;
```

Returns a processed order clause for a SELECT statement

<h4 id="mvcmodelquery-getqualified"><code>getQualified()</code></h4>

```php
final protected function getQualified( array $expr ): array;
```

Replaces the model's name to its source name in a qualified-name
expression

<h4 id="mvcmodelquery-getreadconnection"><code>getReadConnection()</code></h4>

```php
protected function getReadConnection(
ModelInterface $model,
array|null $intermediate = null,
array $bindParams = [],
array $bindTypes = []
): AdapterInterface;
```

Gets the read connection from the model if there is no transaction set
inside the query object

<h4 id="mvcmodelquery-getrelatedrecords"><code>getRelatedRecords()</code></h4>

```php
final protected function getRelatedRecords(
ModelInterface $model,
array $intermediate,
array $bindParams,
array $bindTypes
): ResultsetInterface;
```

Query the records on which the UPDATE/DELETE operation will be done

<h4 id="mvcmodelquery-getselectcolumn"><code>getSelectColumn()</code></h4>

```php
final protected function getSelectColumn( array $column ): array;
```

Resolves a column from its intermediate representation into an array
used to determine if the resultset produced is simple or complex

<h4 id="mvcmodelquery-getsinglejoin"><code>getSingleJoin()</code></h4>

```php
final protected function getSingleJoin(
string $joinType,
string $joinSource,
string $modelAlias,
string $joinAlias,
RelationInterface $relation
): array;
```

Resolves joins involving has-one/belongs-to/has-many relations

<h4 id="mvcmodelquery-gettable"><code>getTable()</code></h4>

```php
final protected function getTable(
ManagerInterface $manager,
array $qualifiedName
): array|string;
```

Resolves a table in a SELECT statement checking if the model exists

<h4 id="mvcmodelquery-getwriteconnection"><code>getWriteConnection()</code></h4>

```php
protected function getWriteConnection(
ModelInterface $model,
array|null $intermediate = null,
array $bindParams = [],
array $bindTypes = []
): AdapterInterface;
```

Gets the write connection from the model if there is no transaction
inside the query object

<h4 id="mvcmodelquery-preparedelete"><code>prepareDelete()</code></h4>

```php
final protected function prepareDelete(): array;
```

Analyzes a DELETE intermediate code and produces an array to be executed
later

<h4 id="mvcmodelquery-prepareinsert"><code>prepareInsert()</code></h4>

```php
final protected function prepareInsert(): array;
```

Analyzes an INSERT intermediate code and produces an array to be executed
later

<h4 id="mvcmodelquery-prepareselect"><code>prepareSelect()</code></h4>

```php
final protected function prepareSelect(
mixed $ast = null,
bool $merge = false
): array;
```

Analyzes a SELECT intermediate code and produces an array to be executed later

<h4 id="mvcmodelquery-prepareupdate"><code>prepareUpdate()</code></h4>

```php
final protected function prepareUpdate(): array;
```

Analyzes an UPDATE intermediate code and produces an array to be executed
later

<h4 id="mvcmodelquery-refreshschemasinintermediate"><code>refreshSchemasInIntermediate()</code></h4>

```php
final protected function refreshSchemasInIntermediate( array $irPhql ): array;
```

Refreshes the schema/source of every model referenced in a cached
intermediate representation. The PHQL cache is keyed by the PHQL
string only, so a model that switches its schema or source at
runtime (for instance via setSchema()/setSource() in initialize())
would otherwise see the value frozen at first parse. See #17020.

## Mvc\Model\QueryInterface

Interface

Interface for Phalcon\Mvc\Model\Query

- **`Phalcon\Mvc\Model\QueryInterface`**

`Phalcon\Mvc\ModelInterface`

### Method Summary

<ApiItem href="#mvcmodelqueryinterface-cache" visibility="public" name="cache" returnType="QueryInterface" params={[{"type":"array","name":"cacheOptions","default":null}]}>
Sets the cache parameters of the query
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-execute" visibility="public" name="execute" returnType="mixed" params={[{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Executes a parsed PHQL statement
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-getbindparams" visibility="public" name="getBindParams" returnType="array" params={[]}>
Returns default bind params
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-getbindtypes" visibility="public" name="getBindTypes" returnType="array" params={[]}>
Returns default bind types
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-getcacheoptions" visibility="public" name="getCacheOptions" returnType="array" params={[]}>
Returns the current cache options
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-getsingleresult" visibility="public" name="getSingleResult" returnType="ModelInterface" params={[{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Executes the query returning the first result
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-getsql" visibility="public" name="getSql" returnType="array" params={[]}>
Returns the SQL to be generated by the internal PHQL (only works
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-getuniquerow" visibility="public" name="getUniqueRow" returnType="bool" params={[]}>
Check if the query is programmed to get only the first row in
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-parse" visibility="public" name="parse" returnType="array" params={[]}>
Parses the intermediate code produced by Phalcon\Mvc\Model\Query\Lang
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-setbindparams" visibility="public" name="setBindParams" returnType="QueryInterface" params={[{"type":"array","name":"bindParams","default":null},{"type":"bool","name":"merge","default":"false"}]}>
Set default bind parameters
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-setbindtypes" visibility="public" name="setBindTypes" returnType="QueryInterface" params={[{"type":"array","name":"bindTypes","default":null},{"type":"bool","name":"merge","default":"false"}]}>
Set default bind parameters
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-setsharedlock" visibility="public" name="setSharedLock" returnType="QueryInterface" params={[{"type":"bool","name":"sharedLock","default":"false"}]}>
Set SHARED LOCK clause
</ApiItem>
<ApiItem href="#mvcmodelqueryinterface-setuniquerow" visibility="public" name="setUniqueRow" returnType="QueryInterface" params={[{"type":"bool","name":"uniqueRow","default":null}]}>
Tells to the query if only the first row in the resultset must be returned
</ApiItem>

### Methods

<h4 id="mvcmodelqueryinterface-cache"><code>cache()</code></h4>

```php
public function cache( array $cacheOptions ): QueryInterface;
```

Sets the cache parameters of the query

<h4 id="mvcmodelqueryinterface-execute"><code>execute()</code></h4>

```php
public function execute(
array $bindParams = [],
array $bindTypes = []
): mixed;
```

Executes a parsed PHQL statement

<h4 id="mvcmodelqueryinterface-getbindparams"><code>getBindParams()</code></h4>

```php
public function getBindParams(): array;
```

Returns default bind params

<h4 id="mvcmodelqueryinterface-getbindtypes"><code>getBindTypes()</code></h4>

```php
public function getBindTypes(): array;
```

Returns default bind types

<h4 id="mvcmodelqueryinterface-getcacheoptions"><code>getCacheOptions()</code></h4>

```php
public function getCacheOptions(): array;
```

Returns the current cache options

<h4 id="mvcmodelqueryinterface-getsingleresult"><code>getSingleResult()</code></h4>

```php
public function getSingleResult(
array $bindParams = [],
array $bindTypes = []
): ModelInterface;
```

Executes the query returning the first result

<h4 id="mvcmodelqueryinterface-getsql"><code>getSql()</code></h4>

```php
public function getSql(): array;
```

Returns the SQL to be generated by the internal PHQL (only works
in SELECT statements)

<h4 id="mvcmodelqueryinterface-getuniquerow"><code>getUniqueRow()</code></h4>

```php
public function getUniqueRow(): bool;
```

Check if the query is programmed to get only the first row in
the resultset

<h4 id="mvcmodelqueryinterface-parse"><code>parse()</code></h4>

```php
public function parse(): array;
```

Parses the intermediate code produced by Phalcon\Mvc\Model\Query\Lang
generating another intermediate representation that could be executed
by Phalcon\Mvc\Model\Query

<h4 id="mvcmodelqueryinterface-setbindparams"><code>setBindParams()</code></h4>

```php
public function setBindParams(
array $bindParams,
bool $merge = false
): QueryInterface;
```

Set default bind parameters

<h4 id="mvcmodelqueryinterface-setbindtypes"><code>setBindTypes()</code></h4>

```php
public function setBindTypes(
array $bindTypes,
bool $merge = false
): QueryInterface;
```

Set default bind parameters

<h4 id="mvcmodelqueryinterface-setsharedlock"><code>setSharedLock()</code></h4>

```php
public function setSharedLock( bool $sharedLock = false ): QueryInterface;
```

Set SHARED LOCK clause

<h4 id="mvcmodelqueryinterface-setuniquerow"><code>setUniqueRow()</code></h4>

```php
public function setUniqueRow( bool $uniqueRow ): QueryInterface;
```

Tells to the query if only the first row in the resultset must be returned

## Mvc\Model\Query\Builder

Class

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

- **`Phalcon\Mvc\Model\Query\Builder`** - implements [`Phalcon\Mvc\Model\Query\BuilderInterface`](#mvcmodelquerybuilderinterface), [`Phalcon\Di\InjectionAwareInterface`](/6.0/api/phalcon_di/#diinjectionawareinterface)

`Phalcon\Db\Column` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Mvc\Model\Exception` · `Phalcon\Mvc\Model\Exceptions\ManagerOrmServicesUnavailable` · `Phalcon\Mvc\Model\QueryInterface` · `Phalcon\Mvc\Model\Query\Exceptions\Builder\BuilderColumnNotInMap` · `Phalcon\Mvc\Model\Query\Exceptions\Builder\BuilderConditionInvalid` · `Phalcon\Mvc\Model\Query\Exceptions\Builder\ModelRequired` · `Phalcon\Mvc\Model\Query\Exceptions\Builder\NoPrimaryKey` · `Phalcon\Mvc\Model\Query\Exceptions\Builder\OperatorNotAvailable` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#mvcmodelquerybuilder-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array|string|null","name":"params","default":"null"},{"type":"DiInterface|null","name":"container","default":"null"}]}>
Phalcon\Mvc\Model\Query\Builder constructor
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-addfrom" visibility="public" name="addFrom" returnType="BuilderInterface" params={[{"type":"string","name":"model","default":null},{"type":"string|null","name":"alias","default":"null"}]}>
Add a model to take part of the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-andhaving" visibility="public" name="andHaving" returnType="BuilderInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Appends a condition to the current HAVING conditions clause using a AND operator
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-andwhere" visibility="public" name="andWhere" returnType="BuilderInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Appends a condition to the current WHERE conditions using a AND operator
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-autoescape" visibility="public" name="autoescape" returnType="string" params={[{"type":"string","name":"identifier","default":null}]}>
Automatically escapes identifiers but only if they need to be escaped.
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-betweenhaving" visibility="public" name="betweenHaving" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends a BETWEEN condition to the current HAVING conditions clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-betweenwhere" visibility="public" name="betweenWhere" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends a BETWEEN condition to the current WHERE conditions
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-columns" visibility="public" name="columns" returnType="BuilderInterface" params={[{"type":"array|string","name":"columns","default":null}]}>
Sets the columns to be queried. The columns can be either a `string` or
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-distinct" visibility="public" name="distinct" returnType="BuilderInterface" params={[{"type":"mixed","name":"distinct","default":null}]}>
Sets SELECT DISTINCT / SELECT ALL flag
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-forupdate" visibility="public" name="forUpdate" returnType="BuilderInterface" params={[{"type":"bool","name":"forUpdate","default":null}]}>
Sets a FOR UPDATE clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-from" visibility="public" name="from" returnType="BuilderInterface" params={[{"type":"mixed","name":"models","default":null}]}>
Sets the models who makes part of the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getbindparams" visibility="public" name="getBindParams" returnType="array" params={[]}>
Returns default bind params
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getbindtypes" visibility="public" name="getBindTypes" returnType="array" params={[]}>
Returns default bind types
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getcolumns" visibility="public" name="getColumns" returnType="array|string|null" params={[]}>
Return the columns to be queried
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getdi" visibility="public" name="getDI" returnType="DiInterface" params={[]}>
Returns the DependencyInjector container
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getdistinct" visibility="public" name="getDistinct" returnType="bool" params={[]}>
Returns SELECT DISTINCT / SELECT ALL flag
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getfrom" visibility="public" name="getFrom" returnType="array|string|null" params={[]}>
Return the models who makes part of the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getgroupby" visibility="public" name="getGroupBy" returnType="array" params={[]}>
Returns the GROUP BY clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-gethaving" visibility="public" name="getHaving" returnType="string|null" params={[]}>
Return the current having clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getjoins" visibility="public" name="getJoins" returnType="array" params={[]}>
Return join parts of the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getlimit" visibility="public" name="getLimit" returnType="" params={[]}>
Returns the current LIMIT clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getmodels" visibility="public" name="getModels" returnType="array|string|null" params={[]}>
Returns the models involved in the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getoffset" visibility="public" name="getOffset" returnType="int" params={[]}>
Returns the current OFFSET clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getorderby" visibility="public" name="getOrderBy" returnType="array|string|null" params={[]}>
Returns the set ORDER BY clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getphql" visibility="public" name="getPhql" returnType="string" params={[]}>
Returns a PHQL statement built based on the builder parameters
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getquery" visibility="public" name="getQuery" returnType="QueryInterface" params={[]}>
Returns the query built
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getresultsetrowclass" visibility="public" name="getResultsetRowClass" returnType="string" params={[]}>
Returns the class that will be used to hydrate rows that are not mapped
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-getwhere" visibility="public" name="getWhere" returnType="array|string|null" params={[]}>
Return the conditions for the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-groupby" visibility="public" name="groupBy" returnType="BuilderInterface" params={[{"type":"mixed","name":"group","default":null}]}>
Sets a GROUP BY clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-having" visibility="public" name="having" returnType="BuilderInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Sets the HAVING condition clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-inhaving" visibility="public" name="inHaving" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends an IN condition to the current HAVING conditions clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-inwhere" visibility="public" name="inWhere" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends an IN condition to the current WHERE conditions
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-innerjoin" visibility="public" name="innerJoin" returnType="BuilderInterface" params={[{"type":"string","name":"model","default":null},{"type":"string|null","name":"conditions","default":"null"},{"type":"string|null","name":"alias","default":"null"}]}>
Adds an INNER join to the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-join" visibility="public" name="join" returnType="BuilderInterface" params={[{"type":"string","name":"model","default":null},{"type":"string|null","name":"conditions","default":"null"},{"type":"string|null","name":"alias","default":"null"},{"type":"string|null","name":"type","default":"null"}]}>
Adds an :type: join (by default type - INNER) to the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-leftjoin" visibility="public" name="leftJoin" returnType="BuilderInterface" params={[{"type":"string","name":"model","default":null},{"type":"string|null","name":"conditions","default":"null"},{"type":"string|null","name":"alias","default":"null"}]}>
Adds a LEFT join to the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-limit" visibility="public" name="limit" returnType="BuilderInterface" params={[{"type":"int","name":"limit","default":null},{"type":"mixed","name":"offset","default":"null"}]}>
Sets a LIMIT clause, optionally an offset clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-notbetweenhaving" visibility="public" name="notBetweenHaving" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends a NOT BETWEEN condition to the current HAVING conditions clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-notbetweenwhere" visibility="public" name="notBetweenWhere" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends a NOT BETWEEN condition to the current WHERE conditions
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-notinhaving" visibility="public" name="notInHaving" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends a NOT IN condition to the current HAVING conditions clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-notinwhere" visibility="public" name="notInWhere" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends a NOT IN condition to the current WHERE conditions
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-offset" visibility="public" name="offset" returnType="BuilderInterface" params={[{"type":"int","name":"offset","default":null}]}>
Sets an OFFSET clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-orhaving" visibility="public" name="orHaving" returnType="BuilderInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Appends a condition to the current HAVING conditions clause using an OR operator
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-orwhere" visibility="public" name="orWhere" returnType="BuilderInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Appends a condition to the current conditions using an OR operator
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-orderby" visibility="public" name="orderBy" returnType="BuilderInterface" params={[{"type":"array|string|null","name":"orderBy","default":null}]}>
Sets an ORDER BY condition clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-rightjoin" visibility="public" name="rightJoin" returnType="BuilderInterface" params={[{"type":"string","name":"model","default":null},{"type":"string|null","name":"conditions","default":"null"},{"type":"string|null","name":"alias","default":"null"}]}>
Adds a RIGHT join to the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-setbindparams" visibility="public" name="setBindParams" returnType="BuilderInterface" params={[{"type":"array","name":"bindParams","default":null},{"type":"bool","name":"merge","default":"false"}]}>
Set default bind parameters
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-setbindtypes" visibility="public" name="setBindTypes" returnType="BuilderInterface" params={[{"type":"array","name":"bindTypes","default":null},{"type":"bool","name":"merge","default":"false"}]}>
Set default bind types
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-setdi" visibility="public" name="setDI" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Sets the DependencyInjector container
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-setresultsetrowclass" visibility="public" name="setResultsetRowClass" returnType="BuilderInterface" params={[{"type":"string","name":"resultsetRowClass","default":null}]}>
Sets the class used to hydrate rows that are not mapped to a model
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-where" visibility="public" name="where" returnType="BuilderInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Sets the query WHERE conditions
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-conditionbetween" visibility="protected" name="conditionBetween" returnType="BuilderInterface" params={[{"type":"string","name":"clause","default":null},{"type":"string","name":"operator","default":null},{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null}]}>
Appends a BETWEEN condition
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-conditionin" visibility="protected" name="conditionIn" returnType="BuilderInterface" params={[{"type":"string","name":"clause","default":null},{"type":"string","name":"operator","default":null},{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null}]}>
Appends an IN condition
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-conditionnotbetween" visibility="protected" name="conditionNotBetween" returnType="BuilderInterface" params={[{"type":"string","name":"clause","default":null},{"type":"string","name":"operator","default":null},{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null}]}>
Appends a NOT BETWEEN condition
</ApiItem>
<ApiItem href="#mvcmodelquerybuilder-conditionnotin" visibility="protected" name="conditionNotIn" returnType="BuilderInterface" params={[{"type":"string","name":"clause","default":null},{"type":"string","name":"operator","default":null},{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null}]}>
Appends a NOT IN condition
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="bindParams" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="bindTypes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="columns" type="array|string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="conditions" type="array|int|string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="container" type="object|null" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="distinct" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="forUpdate" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="group" type="array|null" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="having" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hiddenParamNumber" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="joins" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="limit" type="array|int|string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="models" type="array|string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="offset" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="order" type="array|string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="resultsetRowClass" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sharedLock" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="mvcmodelquerybuilder-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array|string|null $params = null,
DiInterface|null $container = null
);
```

Phalcon\Mvc\Model\Query\Builder constructor

<h4 id="mvcmodelquerybuilder-addfrom"><code>addFrom()</code></h4>

```php
public function addFrom(
string $model,
string|null $alias = null
): BuilderInterface;
```

Add a model to take part of the query

```php
// Load data from models Invoices
$builder->addFrom(
Invoices::class
);

// Load data from model 'Invoices' using 'r' as alias in PHQL
$builder->addFrom(
Invoices::class,
"r"
);
```

<h4 id="mvcmodelquerybuilder-andhaving"><code>andHaving()</code></h4>

```php
public function andHaving(
string $conditions,
array $bindParams = [],
array $bindTypes = []
): BuilderInterface;
```

Appends a condition to the current HAVING conditions clause using a AND operator

```php
$builder->andHaving("SUM(Invoices.inv_total) > 0");

$builder->andHaving(
"SUM(Invoices.inv_total) > :sum:",
[
    "sum" => 100,
]
);
```

<h4 id="mvcmodelquerybuilder-andwhere"><code>andWhere()</code></h4>

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

<h4 id="mvcmodelquerybuilder-autoescape"><code>autoescape()</code></h4>

```php
final public function autoescape( string $identifier ): string;
```

Automatically escapes identifiers but only if they need to be escaped.

<h4 id="mvcmodelquerybuilder-betweenhaving"><code>betweenHaving()</code></h4>

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
$builder->betweenHaving("SUM(Invoices.inv_total)", 100.25, 200.50);
```

<h4 id="mvcmodelquerybuilder-betweenwhere"><code>betweenWhere()</code></h4>

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

<h4 id="mvcmodelquerybuilder-columns"><code>columns()</code></h4>

```php
public function columns( array|string $columns ): BuilderInterface;
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

<h4 id="mvcmodelquerybuilder-distinct"><code>distinct()</code></h4>

```php
public function distinct( mixed $distinct ): BuilderInterface;
```

Sets SELECT DISTINCT / SELECT ALL flag

```php
$builder->distinct("status");
$builder->distinct(null);
```

<h4 id="mvcmodelquerybuilder-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate( bool $forUpdate ): BuilderInterface;
```

Sets a FOR UPDATE clause

```php
$builder->forUpdate(true);
```

<h4 id="mvcmodelquerybuilder-from"><code>from()</code></h4>

```php
public function from( mixed $models ): BuilderInterface;
```

Sets the models who makes part of the query

```php
$builder->from(
Invoices::class
);

$builder->from(
[
    Invoices::class,
    OrdersProducts::class,
]
);

$builder->from(
[
    "r"  => Invoices::class,
    "rp" => OrdersProducts::class,
]
);
```

<h4 id="mvcmodelquerybuilder-getbindparams"><code>getBindParams()</code></h4>

```php
public function getBindParams(): array;
```

Returns default bind params

<h4 id="mvcmodelquerybuilder-getbindtypes"><code>getBindTypes()</code></h4>

```php
public function getBindTypes(): array;
```

Returns default bind types

<h4 id="mvcmodelquerybuilder-getcolumns"><code>getColumns()</code></h4>

```php
public function getColumns(): array|string|null;
```

Return the columns to be queried

<h4 id="mvcmodelquerybuilder-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface;
```

Returns the DependencyInjector container

<h4 id="mvcmodelquerybuilder-getdistinct"><code>getDistinct()</code></h4>

```php
public function getDistinct(): bool;
```

Returns SELECT DISTINCT / SELECT ALL flag

<h4 id="mvcmodelquerybuilder-getfrom"><code>getFrom()</code></h4>

```php
public function getFrom(): array|string|null;
```

Return the models who makes part of the query

<h4 id="mvcmodelquerybuilder-getgroupby"><code>getGroupBy()</code></h4>

```php
public function getGroupBy(): array;
```

Returns the GROUP BY clause

<h4 id="mvcmodelquerybuilder-gethaving"><code>getHaving()</code></h4>

```php
public function getHaving(): string|null;
```

Return the current having clause

<h4 id="mvcmodelquerybuilder-getjoins"><code>getJoins()</code></h4>

```php
public function getJoins(): array;
```

Return join parts of the query

<h4 id="mvcmodelquerybuilder-getlimit"><code>getLimit()</code></h4>

```php
public function getLimit();
```

Returns the current LIMIT clause

<h4 id="mvcmodelquerybuilder-getmodels"><code>getModels()</code></h4>

```php
public function getModels(): array|string|null;
```

Returns the models involved in the query

<h4 id="mvcmodelquerybuilder-getoffset"><code>getOffset()</code></h4>

```php
public function getOffset(): int;
```

Returns the current OFFSET clause

<h4 id="mvcmodelquerybuilder-getorderby"><code>getOrderBy()</code></h4>

```php
public function getOrderBy(): array|string|null;
```

Returns the set ORDER BY clause

<h4 id="mvcmodelquerybuilder-getphql"><code>getPhql()</code></h4>

```php
final public function getPhql(): string;
```

Returns a PHQL statement built based on the builder parameters

<h4 id="mvcmodelquerybuilder-getquery"><code>getQuery()</code></h4>

```php
public function getQuery(): QueryInterface;
```

Returns the query built

<h4 id="mvcmodelquerybuilder-getresultsetrowclass"><code>getResultsetRowClass()</code></h4>

```php
public function getResultsetRowClass(): string;
```

Returns the class that will be used to hydrate rows that are not mapped
to a model (custom columns/joins). An empty string means the default
Phalcon\Mvc\Model\Row is used.

<h4 id="mvcmodelquerybuilder-getwhere"><code>getWhere()</code></h4>

```php
public function getWhere(): array|string|null;
```

Return the conditions for the query

<h4 id="mvcmodelquerybuilder-groupby"><code>groupBy()</code></h4>

```php
public function groupBy( mixed $group ): BuilderInterface;
```

Sets a GROUP BY clause

```php
$builder->groupBy(
[
    "Invoices.inv_title",
]
);
```

Passing null (or an empty array) clears the clause; the PHQL generator
treats both as "no GROUP BY".

<h4 id="mvcmodelquerybuilder-having"><code>having()</code></h4>

```php
public function having(
string $conditions,
array $bindParams = [],
array $bindTypes = []
): BuilderInterface;
```

Sets the HAVING condition clause

```php
$builder->having("SUM(Invoices.inv_total) > 0");

$builder->having(
"SUM(Invoices.inv_total) > :sum:",
[
    "sum" => 100,
]
);
```

<h4 id="mvcmodelquerybuilder-inhaving"><code>inHaving()</code></h4>

```php
public function inHaving(
string $expr,
array $values,
string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends an IN condition to the current HAVING conditions clause

```php
$builder->inHaving("SUM(Invoices.inv_total)", [100, 200]);
```

<h4 id="mvcmodelquerybuilder-inwhere"><code>inWhere()</code></h4>

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

<h4 id="mvcmodelquerybuilder-innerjoin"><code>innerJoin()</code></h4>

```php
public function innerJoin(
string $model,
string|null $conditions = null,
string|null $alias = null
): BuilderInterface;
```

Adds an INNER join to the query

```php
// Inner Join model 'Invoices' with automatic conditions and alias
$builder->innerJoin(
Invoices::class
);

// Inner Join model 'Invoices' specifying conditions
$builder->innerJoin(
Invoices::class,
"Invoices.inv_id = OrdersProducts.oxp_ord_id"
);

// Inner Join model 'Invoices' specifying conditions and alias
$builder->innerJoin(
Invoices::class,
"r.inv_id = OrdersProducts.oxp_ord_id",
"r"
);
```

<h4 id="mvcmodelquerybuilder-join"><code>join()</code></h4>

```php
public function join(
string $model,
string|null $conditions = null,
string|null $alias = null,
string|null $type = null
): BuilderInterface;
```

Adds an :type: join (by default type - INNER) to the query

```php
// Inner Join model 'Invoices' with automatic conditions and alias
$builder->join(
Invoices::class
);

// Inner Join model 'Invoices' specifying conditions
$builder->join(
Invoices::class,
"Invoices.inv_id = OrdersProducts.oxp_ord_id"
);

// Inner Join model 'Invoices' specifying conditions and alias
$builder->join(
Invoices::class,
"r.inv_id = OrdersProducts.oxp_ord_id",
"r"
);

// Left Join model 'Invoices' specifying conditions, alias and type of join
$builder->join(
Invoices::class,
"r.inv_id = OrdersProducts.oxp_ord_id",
"r",
"LEFT"
);
```

<h4 id="mvcmodelquerybuilder-leftjoin"><code>leftJoin()</code></h4>

```php
public function leftJoin(
string $model,
string|null $conditions = null,
string|null $alias = null
): BuilderInterface;
```

Adds a LEFT join to the query

```php
$builder->leftJoin(
Invoices::class,
"r.inv_id = OrdersProducts.oxp_ord_id",
"r"
);
```

<h4 id="mvcmodelquerybuilder-limit"><code>limit()</code></h4>

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

<h4 id="mvcmodelquerybuilder-notbetweenhaving"><code>notBetweenHaving()</code></h4>

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
$builder->notBetweenHaving("SUM(Invoices.inv_total)", 100.25, 200.50);
```

<h4 id="mvcmodelquerybuilder-notbetweenwhere"><code>notBetweenWhere()</code></h4>

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

<h4 id="mvcmodelquerybuilder-notinhaving"><code>notInHaving()</code></h4>

```php
public function notInHaving(
string $expr,
array $values,
string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a NOT IN condition to the current HAVING conditions clause

```php
$builder->notInHaving("SUM(Invoices.inv_total)", [100, 200]);
```

<h4 id="mvcmodelquerybuilder-notinwhere"><code>notInWhere()</code></h4>

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

<h4 id="mvcmodelquerybuilder-offset"><code>offset()</code></h4>

```php
public function offset( int $offset ): BuilderInterface;
```

Sets an OFFSET clause

```php
$builder->offset(30);
```

<h4 id="mvcmodelquerybuilder-orhaving"><code>orHaving()</code></h4>

```php
public function orHaving(
string $conditions,
array $bindParams = [],
array $bindTypes = []
): BuilderInterface;
```

Appends a condition to the current HAVING conditions clause using an OR operator

```php
$builder->orHaving("SUM(Invoices.inv_total) > 0");

$builder->orHaving(
"SUM(Invoices.inv_total) > :sum:",
[
    "sum" => 100,
]
);
```

<h4 id="mvcmodelquerybuilder-orwhere"><code>orWhere()</code></h4>

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

<h4 id="mvcmodelquerybuilder-orderby"><code>orderBy()</code></h4>

```php
public function orderBy( array|string|null $orderBy ): BuilderInterface;
```

Sets an ORDER BY condition clause

```php
$builder->orderBy("Invoices.inv_title");
$builder->orderBy(["1", "Invoices.inv_title"]);
$builder->orderBy(["Invoices.inv_title DESC"]);
```

<h4 id="mvcmodelquerybuilder-rightjoin"><code>rightJoin()</code></h4>

```php
public function rightJoin(
string $model,
string|null $conditions = null,
string|null $alias = null
): BuilderInterface;
```

Adds a RIGHT join to the query

```php
$builder->rightJoin(
Invoices::class,
"r.inv_id = OrdersProducts.oxp_ord_id",
"r"
);
```

<h4 id="mvcmodelquerybuilder-setbindparams"><code>setBindParams()</code></h4>

```php
public function setBindParams(
array $bindParams,
bool $merge = false
): BuilderInterface;
```

Set default bind parameters

<h4 id="mvcmodelquerybuilder-setbindtypes"><code>setBindTypes()</code></h4>

```php
public function setBindTypes(
array $bindTypes,
bool $merge = false
): BuilderInterface;
```

Set default bind types

<h4 id="mvcmodelquerybuilder-setdi"><code>setDI()</code></h4>

```php
public function setDI( DiInterface $container ): void;
```

Sets the DependencyInjector container

<h4 id="mvcmodelquerybuilder-setresultsetrowclass"><code>setResultsetRowClass()</code></h4>

```php
public function setResultsetRowClass( string $resultsetRowClass ): BuilderInterface;
```

Sets the class used to hydrate rows that are not mapped to a model
(custom columns/joins). The class must be a subclass of
Phalcon\Mvc\Model\Row. Validation is performed by the underlying
Phalcon\Mvc\Model\Query when the query is built.

<h4 id="mvcmodelquerybuilder-where"><code>where()</code></h4>

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

<h4 id="mvcmodelquerybuilder-conditionbetween"><code>conditionBetween()</code></h4>

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

<h4 id="mvcmodelquerybuilder-conditionin"><code>conditionIn()</code></h4>

```php
protected function conditionIn(
string $clause,
string $operator,
string $expr,
array $values
): BuilderInterface;
```

Appends an IN condition

<h4 id="mvcmodelquerybuilder-conditionnotbetween"><code>conditionNotBetween()</code></h4>

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

<h4 id="mvcmodelquerybuilder-conditionnotin"><code>conditionNotIn()</code></h4>

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

Interface

Interface for Phalcon\Mvc\Model\Query\Builder

- **`Phalcon\Mvc\Model\Query\BuilderInterface`**

`Phalcon\Mvc\Model\QueryInterface`

### Method Summary

<ApiItem href="#mvcmodelquerybuilderinterface-addfrom" visibility="public" name="addFrom" returnType="BuilderInterface" params={[{"type":"string","name":"model","default":null},{"type":"string|null","name":"alias","default":"null"}]}>
Add a model to take part of the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-andwhere" visibility="public" name="andWhere" returnType="BuilderInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Appends a condition to the current conditions using a AND operator
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-betweenwhere" visibility="public" name="betweenWhere" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends a BETWEEN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-columns" visibility="public" name="columns" returnType="BuilderInterface" params={[{"type":"array|string","name":"columns","default":null}]}>
Sets the columns to be queried. The columns can be either a `string` or
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-distinct" visibility="public" name="distinct" returnType="BuilderInterface" params={[{"type":"mixed","name":"distinct","default":null}]}>
Sets SELECT DISTINCT / SELECT ALL flag
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-forupdate" visibility="public" name="forUpdate" returnType="BuilderInterface" params={[{"type":"bool","name":"forUpdate","default":null}]}>
Sets a FOR UPDATE clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-from" visibility="public" name="from" returnType="BuilderInterface" params={[{"type":"array|string","name":"models","default":null}]}>
Sets the models who makes part of the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getbindparams" visibility="public" name="getBindParams" returnType="array" params={[]}>
Returns default bind params
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getbindtypes" visibility="public" name="getBindTypes" returnType="array" params={[]}>
Returns default bind types
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getcolumns" visibility="public" name="getColumns" returnType="array|string|null" params={[]}>
Return the columns to be queried
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getdistinct" visibility="public" name="getDistinct" returnType="bool" params={[]}>
Returns SELECT DISTINCT / SELECT ALL flag
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getfrom" visibility="public" name="getFrom" returnType="array|string|null" params={[]}>
Return the models who makes part of the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getgroupby" visibility="public" name="getGroupBy" returnType="array" params={[]}>
Returns the GROUP BY clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-gethaving" visibility="public" name="getHaving" returnType="string|null" params={[]}>
Returns the HAVING condition clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getjoins" visibility="public" name="getJoins" returnType="array" params={[]}>
Return join parts of the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getlimit" visibility="public" name="getLimit" returnType="" params={[]}>
Returns the current LIMIT clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getmodels" visibility="public" name="getModels" returnType="array|string|null" params={[]}>
Returns the models involved in the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getoffset" visibility="public" name="getOffset" returnType="int" params={[]}>
Returns the current OFFSET clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getorderby" visibility="public" name="getOrderBy" returnType="array|string|null" params={[]}>
Return the set ORDER BY clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getphql" visibility="public" name="getPhql" returnType="string" params={[]}>
Returns a PHQL statement built based on the builder parameters
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getquery" visibility="public" name="getQuery" returnType="QueryInterface" params={[]}>
Returns the query built
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-getwhere" visibility="public" name="getWhere" returnType="array|string|null" params={[]}>
Return the conditions for the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-groupby" visibility="public" name="groupBy" returnType="BuilderInterface" params={[{"type":"mixed","name":"group","default":null}]}>
Sets a GROUP BY clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-having" visibility="public" name="having" returnType="BuilderInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Sets a HAVING condition clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-inwhere" visibility="public" name="inWhere" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends an IN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-innerjoin" visibility="public" name="innerJoin" returnType="BuilderInterface" params={[{"type":"string","name":"model","default":null},{"type":"string|null","name":"conditions","default":"null"},{"type":"string|null","name":"alias","default":"null"}]}>
Adds an INNER join to the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-join" visibility="public" name="join" returnType="BuilderInterface" params={[{"type":"string","name":"model","default":null},{"type":"string|null","name":"conditions","default":"null"},{"type":"string|null","name":"alias","default":"null"}]}>
Adds an :type: join (by default type - INNER) to the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-leftjoin" visibility="public" name="leftJoin" returnType="BuilderInterface" params={[{"type":"string","name":"model","default":null},{"type":"string|null","name":"conditions","default":"null"},{"type":"string|null","name":"alias","default":"null"}]}>
Adds a LEFT join to the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-limit" visibility="public" name="limit" returnType="BuilderInterface" params={[{"type":"int","name":"limit","default":null},{"type":"mixed","name":"offset","default":"null"}]}>
Sets a LIMIT clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-notbetweenwhere" visibility="public" name="notBetweenWhere" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"mixed","name":"minimum","default":null},{"type":"mixed","name":"maximum","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends a NOT BETWEEN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-notinwhere" visibility="public" name="notInWhere" returnType="BuilderInterface" params={[{"type":"string","name":"expr","default":null},{"type":"array","name":"values","default":null},{"type":"string","name":"operator","default":"BuilderInterface::OPERATOR_AND"}]}>
Appends a NOT IN condition to the current conditions
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-offset" visibility="public" name="offset" returnType="BuilderInterface" params={[{"type":"int","name":"offset","default":null}]}>
Sets an OFFSET clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-orwhere" visibility="public" name="orWhere" returnType="BuilderInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Appends a condition to the current conditions using an OR operator
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-orderby" visibility="public" name="orderBy" returnType="BuilderInterface" params={[{"type":"array|string","name":"orderBy","default":null}]}>
Sets an ORDER BY condition clause
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-rightjoin" visibility="public" name="rightJoin" returnType="BuilderInterface" params={[{"type":"string","name":"model","default":null},{"type":"string|null","name":"conditions","default":"null"},{"type":"string|null","name":"alias","default":"null"}]}>
Adds a RIGHT join to the query
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-setbindparams" visibility="public" name="setBindParams" returnType="BuilderInterface" params={[{"type":"array","name":"bindParams","default":null},{"type":"bool","name":"merge","default":"false"}]}>
Set default bind parameters
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-setbindtypes" visibility="public" name="setBindTypes" returnType="BuilderInterface" params={[{"type":"array","name":"bindTypes","default":null},{"type":"bool","name":"merge","default":"false"}]}>
Set default bind types
</ApiItem>
<ApiItem href="#mvcmodelquerybuilderinterface-where" visibility="public" name="where" returnType="BuilderInterface" params={[{"type":"string","name":"conditions","default":null},{"type":"array","name":"bindParams","default":"[]"},{"type":"array","name":"bindTypes","default":"[]"}]}>
Sets conditions for the query
</ApiItem>

### Constants

<ApiItem kind="constant" name="OPERATOR_AND" type="string" default="&quot;and&quot;">
</ApiItem>
<ApiItem kind="constant" name="OPERATOR_OR" type="string" default="&quot;or&quot;">
</ApiItem>

### Methods

<h4 id="mvcmodelquerybuilderinterface-addfrom"><code>addFrom()</code></h4>

```php
public function addFrom(
string $model,
string|null $alias = null
): BuilderInterface;
```

Add a model to take part of the query

<h4 id="mvcmodelquerybuilderinterface-andwhere"><code>andWhere()</code></h4>

```php
public function andWhere(
string $conditions,
array $bindParams = [],
array $bindTypes = []
): BuilderInterface;
```

Appends a condition to the current conditions using a AND operator

<h4 id="mvcmodelquerybuilderinterface-betweenwhere"><code>betweenWhere()</code></h4>

```php
public function betweenWhere(
string $expr,
mixed $minimum,
mixed $maximum,
string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a BETWEEN condition to the current conditions

<h4 id="mvcmodelquerybuilderinterface-columns"><code>columns()</code></h4>

```php
public function columns( array|string $columns ): BuilderInterface;
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
    "inv_id",
    "inv_title",
]
);

// Array, named keys. The name of the key acts as an alias (`AS` clause)
$builder->columns(
[
    "inv_title",
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

<h4 id="mvcmodelquerybuilderinterface-distinct"><code>distinct()</code></h4>

```php
public function distinct( mixed $distinct ): BuilderInterface;
```

Sets SELECT DISTINCT / SELECT ALL flag

```php
$builder->distinct("status");
$builder->distinct(null);
```

<h4 id="mvcmodelquerybuilderinterface-forupdate"><code>forUpdate()</code></h4>

```php
public function forUpdate( bool $forUpdate ): BuilderInterface;
```

Sets a FOR UPDATE clause

```php
$builder->forUpdate(true);
```

<h4 id="mvcmodelquerybuilderinterface-from"><code>from()</code></h4>

```php
public function from( array|string $models ): BuilderInterface;
```

Sets the models who makes part of the query

<h4 id="mvcmodelquerybuilderinterface-getbindparams"><code>getBindParams()</code></h4>

```php
public function getBindParams(): array;
```

Returns default bind params

<h4 id="mvcmodelquerybuilderinterface-getbindtypes"><code>getBindTypes()</code></h4>

```php
public function getBindTypes(): array;
```

Returns default bind types

<h4 id="mvcmodelquerybuilderinterface-getcolumns"><code>getColumns()</code></h4>

```php
public function getColumns(): array|string|null;
```

Return the columns to be queried

<h4 id="mvcmodelquerybuilderinterface-getdistinct"><code>getDistinct()</code></h4>

```php
public function getDistinct(): bool;
```

Returns SELECT DISTINCT / SELECT ALL flag

<h4 id="mvcmodelquerybuilderinterface-getfrom"><code>getFrom()</code></h4>

```php
public function getFrom(): array|string|null;
```

Return the models who makes part of the query

<h4 id="mvcmodelquerybuilderinterface-getgroupby"><code>getGroupBy()</code></h4>

```php
public function getGroupBy(): array;
```

Returns the GROUP BY clause

<h4 id="mvcmodelquerybuilderinterface-gethaving"><code>getHaving()</code></h4>

```php
public function getHaving(): string|null;
```

Returns the HAVING condition clause

<h4 id="mvcmodelquerybuilderinterface-getjoins"><code>getJoins()</code></h4>

```php
public function getJoins(): array;
```

Return join parts of the query

<h4 id="mvcmodelquerybuilderinterface-getlimit"><code>getLimit()</code></h4>

```php
public function getLimit();
```

Returns the current LIMIT clause

<h4 id="mvcmodelquerybuilderinterface-getmodels"><code>getModels()</code></h4>

```php
public function getModels(): array|string|null;
```

Returns the models involved in the query

<h4 id="mvcmodelquerybuilderinterface-getoffset"><code>getOffset()</code></h4>

```php
public function getOffset(): int;
```

Returns the current OFFSET clause

<h4 id="mvcmodelquerybuilderinterface-getorderby"><code>getOrderBy()</code></h4>

```php
public function getOrderBy(): array|string|null;
```

Return the set ORDER BY clause

<h4 id="mvcmodelquerybuilderinterface-getphql"><code>getPhql()</code></h4>

```php
public function getPhql(): string;
```

Returns a PHQL statement built based on the builder parameters

<h4 id="mvcmodelquerybuilderinterface-getquery"><code>getQuery()</code></h4>

```php
public function getQuery(): QueryInterface;
```

Returns the query built

<h4 id="mvcmodelquerybuilderinterface-getwhere"><code>getWhere()</code></h4>

```php
public function getWhere(): array|string|null;
```

Return the conditions for the query

<h4 id="mvcmodelquerybuilderinterface-groupby"><code>groupBy()</code></h4>

```php
public function groupBy( mixed $group ): BuilderInterface;
```

Sets a GROUP BY clause

<h4 id="mvcmodelquerybuilderinterface-having"><code>having()</code></h4>

```php
public function having(
string $conditions,
array $bindParams = [],
array $bindTypes = []
): BuilderInterface;
```

Sets a HAVING condition clause

<h4 id="mvcmodelquerybuilderinterface-inwhere"><code>inWhere()</code></h4>

```php
public function inWhere(
string $expr,
array $values,
string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends an IN condition to the current conditions

<h4 id="mvcmodelquerybuilderinterface-innerjoin"><code>innerJoin()</code></h4>

```php
public function innerJoin(
string $model,
string|null $conditions = null,
string|null $alias = null
): BuilderInterface;
```

Adds an INNER join to the query

<h4 id="mvcmodelquerybuilderinterface-join"><code>join()</code></h4>

```php
public function join(
string $model,
string|null $conditions = null,
string|null $alias = null
): BuilderInterface;
```

Adds an :type: join (by default type - INNER) to the query

<h4 id="mvcmodelquerybuilderinterface-leftjoin"><code>leftJoin()</code></h4>

```php
public function leftJoin(
string $model,
string|null $conditions = null,
string|null $alias = null
): BuilderInterface;
```

Adds a LEFT join to the query

<h4 id="mvcmodelquerybuilderinterface-limit"><code>limit()</code></h4>

```php
public function limit(
int $limit,
mixed $offset = null
): BuilderInterface;
```

Sets a LIMIT clause

<h4 id="mvcmodelquerybuilderinterface-notbetweenwhere"><code>notBetweenWhere()</code></h4>

```php
public function notBetweenWhere(
string $expr,
mixed $minimum,
mixed $maximum,
string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a NOT BETWEEN condition to the current conditions

<h4 id="mvcmodelquerybuilderinterface-notinwhere"><code>notInWhere()</code></h4>

```php
public function notInWhere(
string $expr,
array $values,
string $operator = BuilderInterface::OPERATOR_AND
): BuilderInterface;
```

Appends a NOT IN condition to the current conditions

<h4 id="mvcmodelquerybuilderinterface-offset"><code>offset()</code></h4>

```php
public function offset( int $offset ): BuilderInterface;
```

Sets an OFFSET clause

<h4 id="mvcmodelquerybuilderinterface-orwhere"><code>orWhere()</code></h4>

```php
public function orWhere(
string $conditions,
array $bindParams = [],
array $bindTypes = []
): BuilderInterface;
```

Appends a condition to the current conditions using an OR operator

<h4 id="mvcmodelquerybuilderinterface-orderby"><code>orderBy()</code></h4>

```php
public function orderBy( array|string $orderBy ): BuilderInterface;
```

Sets an ORDER BY condition clause

<h4 id="mvcmodelquerybuilderinterface-rightjoin"><code>rightJoin()</code></h4>

```php
public function rightJoin(
string $model,
string|null $conditions = null,
string|null $alias = null
): BuilderInterface;
```

Adds a RIGHT join to the query

<h4 id="mvcmodelquerybuilderinterface-setbindparams"><code>setBindParams()</code></h4>

```php
public function setBindParams(
array $bindParams,
bool $merge = false
): BuilderInterface;
```

Set default bind parameters

<h4 id="mvcmodelquerybuilderinterface-setbindtypes"><code>setBindTypes()</code></h4>

```php
public function setBindTypes(
array $bindTypes,
bool $merge = false
): BuilderInterface;
```

Set default bind types

<h4 id="mvcmodelquerybuilderinterface-where"><code>where()</code></h4>

```php
public function where(
string $conditions,
array $bindParams = [],
array $bindTypes = []
): BuilderInterface;
```

Sets conditions for the query

## Mvc\Model\Query\Exceptions\AmbiguousColumn

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\AmbiguousColumn`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsambiguouscolumn-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsambiguouscolumn-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string $phql
);
```

## Mvc\Model\Query\Exceptions\AmbiguousJoinRelation

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\AmbiguousJoinRelation`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsambiguousjoinrelation-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"from","default":null},{"type":"string","name":"join","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsambiguousjoinrelation-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $from,
string $join,
string $phql
);
```

## Mvc\Model\Query\Exceptions\BindParameterNotInPlaceholders

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\BindParameterNotInPlaceholders`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsbindparameternotinplaceholders-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"wildcard","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsbindparameternotinplaceholders-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $wildcard );
```

## Mvc\Model\Query\Exceptions\BindTypeRequiresArray

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\BindTypeRequiresArray`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsbindtyperequiresarray-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsbindtyperequiresarray-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Mvc\Model\Query\Exceptions\BindValueRequired

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\BindValueRequired`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsbindvaluerequired-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsbindvaluerequired-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Mvc\Model\Query\Exceptions\Builder\BuilderColumnNotInMap

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\Builder\BuilderColumnNotInMap`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsbuilderbuildercolumnnotinmap-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"column","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsbuilderbuildercolumnnotinmap-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $column );
```

## Mvc\Model\Query\Exceptions\Builder\BuilderConditionInvalid

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\Builder\BuilderConditionInvalid`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsbuilderbuilderconditioninvalid-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsbuilderbuilderconditioninvalid-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\Builder\ModelRequired

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\Builder\ModelRequired`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsbuildermodelrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsbuildermodelrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\Builder\NoPrimaryKey

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\Builder\NoPrimaryKey`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsbuildernoprimarykey-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsbuildernoprimarykey-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\Builder\OperatorNotAvailable

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\Builder\OperatorNotAvailable`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsbuilderoperatornotavailable-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"operator","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsbuilderoperatornotavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $operator );
```

## Mvc\Model\Query\Exceptions\ColumnNotInDomain

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\ColumnNotInDomain`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionscolumnnotindomain-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"model","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionscolumnnotindomain-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string $model,
string $phql
);
```

## Mvc\Model\Query\Exceptions\ColumnNotInSelectedModels

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\ColumnNotInSelectedModels`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionscolumnnotinselectedmodels-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"tag","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionscolumnnotinselectedmodels-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string $tag,
string $phql
);
```

## Mvc\Model\Query\Exceptions\CorruptedAst

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\CorruptedAst`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionscorruptedast-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionscorruptedast-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\CorruptedDeleteAst

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\CorruptedDeleteAst`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionscorrupteddeleteast-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionscorrupteddeleteast-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\CorruptedInsertAst

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\CorruptedInsertAst`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionscorruptedinsertast-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionscorruptedinsertast-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\CorruptedSelectAst

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\CorruptedSelectAst`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionscorruptedselectast-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionscorruptedselectast-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\CorruptedUpdateAst

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\CorruptedUpdateAst`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionscorruptedupdateast-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionscorruptedupdateast-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\DeleteMultipleNotSupported

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\DeleteMultipleNotSupported`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsdeletemultiplenotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsdeletemultiplenotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\DuplicateAlias

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\DuplicateAlias`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsduplicatealias-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsduplicatealias-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string $phql
);
```

## Mvc\Model\Query\Exceptions\EmptyArrayPlaceholderValue

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\EmptyArrayPlaceholderValue`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsemptyarrayplaceholdervalue-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsemptyarrayplaceholdervalue-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Mvc\Model\Query\Exceptions\InsertColumnCountMismatch

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\InsertColumnCountMismatch`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsinsertcolumncountmismatch-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsinsertcolumncountmismatch-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\InvalidCachedResultset

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\InvalidCachedResultset`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsinvalidcachedresultset-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsinvalidcachedresultset-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\InvalidCachingOptions

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\InvalidCachingOptions`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsinvalidcachingoptions-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsinvalidcachingoptions-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\InvalidColumnDefinition

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\InvalidColumnDefinition`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsinvalidcolumndefinition-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsinvalidcolumndefinition-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\InvalidInjectedManager

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\InvalidInjectedManager`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsinvalidinjectedmanager-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsinvalidinjectedmanager-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\InvalidInjectedMetadata

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\InvalidInjectedMetadata`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsinvalidinjectedmetadata-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsinvalidinjectedmetadata-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\InvalidQueryCacheService

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\InvalidQueryCacheService`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsinvalidquerycacheservice-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsinvalidquerycacheservice-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\InvalidResultsetClass

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\InvalidResultsetClass`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsinvalidresultsetclass-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsinvalidresultsetclass-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Query\Exceptions\InvalidResultsetRowClass

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\InvalidResultsetRowClass`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsinvalidresultsetrowclass-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsinvalidresultsetrowclass-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Query\Exceptions\JoinAliasAlreadyUsed

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\JoinAliasAlreadyUsed`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsjoinaliasalreadyused-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"alias","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsjoinaliasalreadyused-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $alias,
string $phql
);
```

## Mvc\Model\Query\Exceptions\JoinFieldCountMismatch

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\JoinFieldCountMismatch`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsjoinfieldcountmismatch-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"model","default":null},{"type":"string","name":"join","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsjoinfieldcountmismatch-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $model,
string $join,
string $phql
);
```

## Mvc\Model\Query\Exceptions\MissingCacheKey

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\MissingCacheKey`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsmissingcachekey-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsmissingcachekey-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\MissingMetaData

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\MissingMetaData`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsmissingmetadata-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsmissingmetadata-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\MissingModelAttribute

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\MissingModelAttribute`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsmissingmodelattribute-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"model","default":null},{"type":"string","name":"attribute","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsmissingmodelattribute-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $model,
string $attribute,
string $phql
);
```

## Mvc\Model\Query\Exceptions\MissingModelsManager

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\MissingModelsManager`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsmissingmodelsmanager-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsmissingmodelsmanager-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\MixedDatabaseSystems

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\MixedDatabaseSystems`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsmixeddatabasesystems-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsmixeddatabasesystems-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\ModelSourceNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\ModelSourceNotFound`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsmodelsourcenotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsmodelsourcenotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string $phql
);
```

## Mvc\Model\Query\Exceptions\ModelsListNotLoaded

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\ModelsListNotLoaded`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsmodelslistnotloaded-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsmodelslistnotloaded-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\MultipleSqlStatementsNotSupported

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\MultipleSqlStatementsNotSupported`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsmultiplesqlstatementsnotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsmultiplesqlstatementsnotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\NoModelForAlias

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\NoModelForAlias`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsnomodelforalias-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"model","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsnomodelforalias-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $model,
string $phql
);
```

## Mvc\Model\Query\Exceptions\PhqlColumnNotInMap

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\PhqlColumnNotInMap`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsphqlcolumnnotinmap-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"fieldName","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsphqlcolumnnotinmap-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $fieldName );
```

## Mvc\Model\Query\Exceptions\ReadConnectionMissing

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\ReadConnectionMissing`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsreadconnectionmissing-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsreadconnectionmissing-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\RelationshipNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\RelationshipNotFound`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsrelationshipnotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"model","default":null},{"type":"string","name":"relationship","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsrelationshipnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $model,
string $relationship,
string $phql
);
```

## Mvc\Model\Query\Exceptions\ResultsetClassNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\ResultsetClassNotFound`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsresultsetclassnotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsresultsetclassnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Query\Exceptions\ResultsetNonCacheable

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\ResultsetNonCacheable`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsresultsetnoncacheable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsresultsetnoncacheable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\ResultsetRowClassNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\ResultsetRowClassNotFound`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsresultsetrowclassnotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsresultsetrowclassnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Mvc\Model\Query\Exceptions\UnknownBindType

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\UnknownBindType`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsunknownbindtype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsunknownbindtype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type );
```

## Mvc\Model\Query\Exceptions\UnknownColumnType

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\UnknownColumnType`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsunknowncolumntype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsunknowncolumntype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type );
```

## Mvc\Model\Query\Exceptions\UnknownJoinType

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\UnknownJoinType`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsunknownjointype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsunknownjointype-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $type,
string $phql
);
```

## Mvc\Model\Query\Exceptions\UnknownModelOrAlias

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\UnknownModelOrAlias`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsunknownmodeloralias-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"model","default":null},{"type":"string","name":"tag","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsunknownmodeloralias-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $model,
string $tag,
string $phql
);
```

## Mvc\Model\Query\Exceptions\UnknownPhqlExpression

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpression`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsunknownphqlexpression-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsunknownphqlexpression-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\UnknownPhqlExpressionType

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlExpressionType`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsunknownphqlexpressiontype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsunknownphqlexpressiontype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type );
```

## Mvc\Model\Query\Exceptions\UnknownPhqlStatement

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\UnknownPhqlStatement`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsunknownphqlstatement-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsunknownphqlstatement-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type );
```

## Mvc\Model\Query\Exceptions\UnsafeIdentifier

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\UnsafeIdentifier`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsunsafeidentifier-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"identifier","default":null},{"type":"string","name":"phql","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsunsafeidentifier-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $identifier,
string $phql
);
```

## Mvc\Model\Query\Exceptions\UpdateMultipleNotSupported

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\UpdateMultipleNotSupported`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionsupdatemultiplenotsupported-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionsupdatemultiplenotsupported-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Exceptions\WriteConnectionMissing

Class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Query\Exceptions\WriteConnectionMissing`**

`Phalcon\Mvc\Model\Exception`

### Method Summary

<ApiItem href="#mvcmodelqueryexceptionswriteconnectionmissing-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcmodelqueryexceptionswriteconnectionmissing-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Model\Query\Status

Class

This class represents the status returned by a PHQL
statement like INSERT, UPDATE or DELETE. It offers context
information and the related messages produced by the
model which finally executes the operations when it fails

```php
$phql = "UPDATE Invoices
 SET inv_title = :inv_title:,
     inv_status_flag = :inv_status_flag:,
     inv_total = :inv_total:
 WHERE inv_id = :inv_id:";

$status = $app->modelsManager->executeQuery(
$phql,
[
    "inv_id"          => 100,
    "inv_title"       => "Test Invoice",
    "inv_status_flag" => 1,
    "inv_total"       => 1959,
]
);

// Check if the update was successful
if ($status->success()) {
echo "OK";
}
```

- **`Phalcon\Mvc\Model\Query\Status`** - implements [`Phalcon\Mvc\Model\Query\StatusInterface`](#mvcmodelquerystatusinterface)

`Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface`

### Method Summary

<ApiItem href="#mvcmodelquerystatus-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"bool","name":"success","default":null},{"type":"ModelInterface|null","name":"model","default":"null"}]}>
Phalcon\Mvc\Model\Query\Status
</ApiItem>
<ApiItem href="#mvcmodelquerystatus-getmessages" visibility="public" name="getMessages" returnType="array" params={[]}>
Returns the messages produced because of a failed operation
</ApiItem>
<ApiItem href="#mvcmodelquerystatus-getmodel" visibility="public" name="getModel" returnType="ModelInterface|null" params={[]}>
Returns the model that executed the action
</ApiItem>
<ApiItem href="#mvcmodelquerystatus-success" visibility="public" name="success" returnType="bool" params={[]}>
Allows to check if the executed operation was successful
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="model" type="ModelInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="success" type="bool" default="">
</ApiItem>

### Methods

<h4 id="mvcmodelquerystatus-__construct"><code>__construct()</code></h4>

```php
public function __construct(
bool $success,
ModelInterface|null $model = null
);
```

Phalcon\Mvc\Model\Query\Status

<h4 id="mvcmodelquerystatus-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): array;
```

Returns the messages produced because of a failed operation

<h4 id="mvcmodelquerystatus-getmodel"><code>getModel()</code></h4>

```php
public function getModel(): ModelInterface|null;
```

Returns the model that executed the action

<h4 id="mvcmodelquerystatus-success"><code>success()</code></h4>

```php
public function success(): bool;
```

Allows to check if the executed operation was successful

## Mvc\Model\Query\StatusInterface

Interface

Interface for Phalcon\Mvc\Model\Query\Status

- **`Phalcon\Mvc\Model\Query\StatusInterface`**

`Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface`

### Method Summary

<ApiItem href="#mvcmodelquerystatusinterface-getmessages" visibility="public" name="getMessages" returnType="array" params={[]}>
Returns the messages produced by an operation failed
</ApiItem>
<ApiItem href="#mvcmodelquerystatusinterface-getmodel" visibility="public" name="getModel" returnType="ModelInterface|null" params={[]}>
Returns the model which executed the action
</ApiItem>
<ApiItem href="#mvcmodelquerystatusinterface-success" visibility="public" name="success" returnType="bool" params={[]}>
Allows to check if the executed operation was successful
</ApiItem>

### Methods

<h4 id="mvcmodelquerystatusinterface-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): array;
```

Returns the messages produced by an operation failed

<h4 id="mvcmodelquerystatusinterface-getmodel"><code>getModel()</code></h4>

```php
public function getModel(): ModelInterface|null;
```

Returns the model which executed the action

<h4 id="mvcmodelquerystatusinterface-success"><code>success()</code></h4>

```php
public function success(): bool;
```

Allows to check if the executed operation was successful

## Mvc\Model\Relation

Class

This class represents a relationship between two models

- **`Phalcon\Mvc\Model\Relation`** - implements [`Phalcon\Mvc\Model\RelationInterface`](#mvcmodelrelationinterface)

### Method Summary

<ApiItem href="#mvcmodelrelation-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"type","default":null},{"type":"string","name":"referencedModel","default":null},{"type":"array|string","name":"fields","default":null},{"type":"array|string","name":"referencedFields","default":null},{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Mvc\Model\Relation constructor
</ApiItem>
<ApiItem href="#mvcmodelrelation-getfields" visibility="public" name="getFields" returnType="array|string" params={[]}>
Returns the fields
</ApiItem>
<ApiItem href="#mvcmodelrelation-getforeignkey" visibility="public" name="getForeignKey" returnType="array|bool|string" params={[]}>
Returns the foreign key configuration
</ApiItem>
<ApiItem href="#mvcmodelrelation-getintermediatefields" visibility="public" name="getIntermediateFields" returnType="array|string" params={[]}>
Gets the intermediate fields for has-*-through relations
</ApiItem>
<ApiItem href="#mvcmodelrelation-getintermediatemodel" visibility="public" name="getIntermediateModel" returnType="string" params={[]}>
Gets the intermediate model for has-*-through relations
</ApiItem>
<ApiItem href="#mvcmodelrelation-getintermediatereferencedfields" visibility="public" name="getIntermediateReferencedFields" returnType="array|string" params={[]}>
Gets the intermediate referenced fields for has-*-through relations
</ApiItem>
<ApiItem href="#mvcmodelrelation-getoption" visibility="public" name="getOption" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
Returns an option by the specified name
</ApiItem>
<ApiItem href="#mvcmodelrelation-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
Returns the options
</ApiItem>
<ApiItem href="#mvcmodelrelation-getparams" visibility="public" name="getParams" returnType="array|false" params={[]}>
Returns parameters that must be always used when the related records are obtained
</ApiItem>
<ApiItem href="#mvcmodelrelation-getreferencedfields" visibility="public" name="getReferencedFields" returnType="array|string" params={[]}>
Returns the referenced fields
</ApiItem>
<ApiItem href="#mvcmodelrelation-getreferencedmodel" visibility="public" name="getReferencedModel" returnType="string" params={[]}>
Returns the referenced model
</ApiItem>
<ApiItem href="#mvcmodelrelation-gettype" visibility="public" name="getType" returnType="int" params={[]}>
Returns the relation type
</ApiItem>
<ApiItem href="#mvcmodelrelation-isforeignkey" visibility="public" name="isForeignKey" returnType="bool" params={[]}>
Check whether the relation act as a foreign key
</ApiItem>
<ApiItem href="#mvcmodelrelation-isreusable" visibility="public" name="isReusable" returnType="bool" params={[]}>
Check if records returned by getting belongs-to/has-many are implicitly cached during the current request
</ApiItem>
<ApiItem href="#mvcmodelrelation-isthrough" visibility="public" name="isThrough" returnType="bool" params={[]}>
Check whether the relation is a 'many-to-many' relation or not
</ApiItem>
<ApiItem href="#mvcmodelrelation-setintermediaterelation" visibility="public" name="setIntermediateRelation" returnType="void" params={[{"type":"array|string","name":"intermediateFields","default":null},{"type":"string","name":"intermediateModel","default":null},{"type":"array|string","name":"intermediateReferencedFields","default":null}]}>
Sets the intermediate model data for has-*-through relations
</ApiItem>

### Constants

<ApiItem kind="constant" name="ACTION_CASCADE" type="int" default="2">
</ApiItem>
<ApiItem kind="constant" name="ACTION_RESTRICT" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="BELONGS_TO" type="int" default="0">
</ApiItem>
<ApiItem kind="constant" name="HAS_MANY" type="int" default="2">
</ApiItem>
<ApiItem kind="constant" name="HAS_MANY_THROUGH" type="int" default="4">
</ApiItem>
<ApiItem kind="constant" name="HAS_ONE" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="HAS_ONE_THROUGH" type="int" default="3">
</ApiItem>
<ApiItem kind="constant" name="NO_ACTION" type="int" default="0">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="fields" type="array|string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="intermediateFields" type="array|string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="intermediateModel" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="intermediateReferencedFields" type="array|string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="referencedFields" type="array|string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="referencedModel" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="int" default="">
</ApiItem>

### Methods

<h4 id="mvcmodelrelation-__construct"><code>__construct()</code></h4>

```php
public function __construct(
int $type,
string $referencedModel,
array|string $fields,
array|string $referencedFields,
array $options = []
);
```

Phalcon\Mvc\Model\Relation constructor

<h4 id="mvcmodelrelation-getfields"><code>getFields()</code></h4>

```php
public function getFields(): array|string;
```

Returns the fields

<h4 id="mvcmodelrelation-getforeignkey"><code>getForeignKey()</code></h4>

```php
public function getForeignKey(): array|bool|string;
```

Returns the foreign key configuration

<h4 id="mvcmodelrelation-getintermediatefields"><code>getIntermediateFields()</code></h4>

```php
public function getIntermediateFields(): array|string;
```

Gets the intermediate fields for has-*-through relations

<h4 id="mvcmodelrelation-getintermediatemodel"><code>getIntermediateModel()</code></h4>

```php
public function getIntermediateModel(): string;
```

Gets the intermediate model for has-*-through relations

<h4 id="mvcmodelrelation-getintermediatereferencedfields"><code>getIntermediateReferencedFields()</code></h4>

```php
public function getIntermediateReferencedFields(): array|string;
```

Gets the intermediate referenced fields for has-*-through relations

<h4 id="mvcmodelrelation-getoption"><code>getOption()</code></h4>

```php
public function getOption( string $name ): mixed;
```

Returns an option by the specified name
If the option does not exist null is returned

<h4 id="mvcmodelrelation-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Returns the options

<h4 id="mvcmodelrelation-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array|false;
```

Returns parameters that must be always used when the related records are obtained

<h4 id="mvcmodelrelation-getreferencedfields"><code>getReferencedFields()</code></h4>

```php
public function getReferencedFields(): array|string;
```

Returns the referenced fields

<h4 id="mvcmodelrelation-getreferencedmodel"><code>getReferencedModel()</code></h4>

```php
public function getReferencedModel(): string;
```

Returns the referenced model

<h4 id="mvcmodelrelation-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

Returns the relation type

<h4 id="mvcmodelrelation-isforeignkey"><code>isForeignKey()</code></h4>

```php
public function isForeignKey(): bool;
```

Check whether the relation act as a foreign key

<h4 id="mvcmodelrelation-isreusable"><code>isReusable()</code></h4>

```php
public function isReusable(): bool;
```

Check if records returned by getting belongs-to/has-many are implicitly cached during the current request

<h4 id="mvcmodelrelation-isthrough"><code>isThrough()</code></h4>

```php
public function isThrough(): bool;
```

Check whether the relation is a 'many-to-many' relation or not

<h4 id="mvcmodelrelation-setintermediaterelation"><code>setIntermediateRelation()</code></h4>

```php
public function setIntermediateRelation(
array|string $intermediateFields,
string $intermediateModel,
array|string $intermediateReferencedFields
): void;
```

Sets the intermediate model data for has-*-through relations

## Mvc\Model\RelationInterface

Interface

Interface for Phalcon\Mvc\Model\Relation

- **`Phalcon\Mvc\Model\RelationInterface`**

### Method Summary

<ApiItem href="#mvcmodelrelationinterface-getfields" visibility="public" name="getFields" returnType="array|string" params={[]}>
Returns the fields
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-getforeignkey" visibility="public" name="getForeignKey" returnType="array|bool|string" params={[]}>
Returns the foreign key configuration
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-getintermediatefields" visibility="public" name="getIntermediateFields" returnType="array|string" params={[]}>
Gets the intermediate fields for has-*-through relations
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-getintermediatemodel" visibility="public" name="getIntermediateModel" returnType="string" params={[]}>
Gets the intermediate model for has-*-through relations
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-getintermediatereferencedfields" visibility="public" name="getIntermediateReferencedFields" returnType="array|string" params={[]}>
Gets the intermediate referenced fields for has-*-through relations
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-getoption" visibility="public" name="getOption" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
Returns an option by the specified name
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
Returns the options
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-getparams" visibility="public" name="getParams" returnType="array|false" params={[]}>
Returns parameters that must be always used when the related records are obtained
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-getreferencedfields" visibility="public" name="getReferencedFields" returnType="array|string" params={[]}>
Returns the referenced fields
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-getreferencedmodel" visibility="public" name="getReferencedModel" returnType="string" params={[]}>
Returns the referenced model
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-gettype" visibility="public" name="getType" returnType="int" params={[]}>
Returns the relations type
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-isforeignkey" visibility="public" name="isForeignKey" returnType="bool" params={[]}>
Check whether the relation act as a foreign key
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-isreusable" visibility="public" name="isReusable" returnType="bool" params={[]}>
Check if records returned by getting belongs-to/has-many are implicitly
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-isthrough" visibility="public" name="isThrough" returnType="bool" params={[]}>
Check whether the relation is a 'many-to-many' relation or not
</ApiItem>
<ApiItem href="#mvcmodelrelationinterface-setintermediaterelation" visibility="public" name="setIntermediateRelation" returnType="" params={[{"type":"array|string","name":"intermediateFields","default":null},{"type":"string","name":"intermediateModel","default":null},{"type":"array|string","name":"intermediateReferencedFields","default":null}]}>
Sets the intermediate model data for has-*-through relations
</ApiItem>

### Methods

<h4 id="mvcmodelrelationinterface-getfields"><code>getFields()</code></h4>

```php
public function getFields(): array|string;
```

Returns the fields

<h4 id="mvcmodelrelationinterface-getforeignkey"><code>getForeignKey()</code></h4>

```php
public function getForeignKey(): array|bool|string;
```

Returns the foreign key configuration

<h4 id="mvcmodelrelationinterface-getintermediatefields"><code>getIntermediateFields()</code></h4>

```php
public function getIntermediateFields(): array|string;
```

Gets the intermediate fields for has-*-through relations

<h4 id="mvcmodelrelationinterface-getintermediatemodel"><code>getIntermediateModel()</code></h4>

```php
public function getIntermediateModel(): string;
```

Gets the intermediate model for has-*-through relations

<h4 id="mvcmodelrelationinterface-getintermediatereferencedfields"><code>getIntermediateReferencedFields()</code></h4>

```php
public function getIntermediateReferencedFields(): array|string;
```

Gets the intermediate referenced fields for has-*-through relations

<h4 id="mvcmodelrelationinterface-getoption"><code>getOption()</code></h4>

```php
public function getOption( string $name ): mixed;
```

Returns an option by the specified name
If the option does not exist null is returned

<h4 id="mvcmodelrelationinterface-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Returns the options

<h4 id="mvcmodelrelationinterface-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array|false;
```

Returns parameters that must be always used when the related records are obtained

<h4 id="mvcmodelrelationinterface-getreferencedfields"><code>getReferencedFields()</code></h4>

```php
public function getReferencedFields(): array|string;
```

Returns the referenced fields

<h4 id="mvcmodelrelationinterface-getreferencedmodel"><code>getReferencedModel()</code></h4>

```php
public function getReferencedModel(): string;
```

Returns the referenced model

<h4 id="mvcmodelrelationinterface-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

Returns the relations type

<h4 id="mvcmodelrelationinterface-isforeignkey"><code>isForeignKey()</code></h4>

```php
public function isForeignKey(): bool;
```

Check whether the relation act as a foreign key

<h4 id="mvcmodelrelationinterface-isreusable"><code>isReusable()</code></h4>

```php
public function isReusable(): bool;
```

Check if records returned by getting belongs-to/has-many are implicitly
cached during the current request

<h4 id="mvcmodelrelationinterface-isthrough"><code>isThrough()</code></h4>

```php
public function isThrough(): bool;
```

Check whether the relation is a 'many-to-many' relation or not

<h4 id="mvcmodelrelationinterface-setintermediaterelation"><code>setIntermediateRelation()</code></h4>

```php
public function setIntermediateRelation(
array|string $intermediateFields,
string $intermediateModel,
array|string $intermediateReferencedFields
);
```

Sets the intermediate model data for has-*-through relations

## Mvc\Model\ResultInterface

Interface

Phalcon\Mvc\Model\ResultInterface

All single objects passed as base objects to Resultsets must implement this interface

- **`Phalcon\Mvc\Model\ResultInterface`**

`Phalcon\Mvc\ModelInterface`

### Method Summary

<ApiItem href="#mvcmodelresultinterface-setdirtystate" visibility="public" name="setDirtyState" returnType="bool|ModelInterface" params={[{"type":"int","name":"dirtyState","default":null}]}>
Sets the object's state
</ApiItem>

### Methods

<h4 id="mvcmodelresultinterface-setdirtystate"><code>setDirtyState()</code></h4>

```php
public function setDirtyState( int $dirtyState ): bool|ModelInterface;
```

Sets the object's state

## Mvc\Model\Resultset

Abstract

This component allows to Phalcon\Mvc\Model returns large resultsets with
the minimum memory consumption. Resultsets can be traversed using a standard
foreach or a while statement. If a resultset is serialized it will dump all
the rows into a big array. Then unserialize will retrieve the rows as they
were before serializing.

```php

// Using a standard foreach
$invoices = Invoices::find(
[
    "inv_status_flag = 1",
    "order" => "inv_title",
]
);

foreach ($invoices as invoice) {
echo invoice->inv_title, "\n";
}

// Using a while
$invoices = Invoices::find(
[
    "inv_status_flag = 1",
    "order" => "inv_title",
]
);

$invoices->rewind();

while ($invoices->valid()) {
$invoice = $invoices->current();

echo $invoice->inv_title, "\n";

$invoices->next();
}
```

@template TKey
@template TValue
@implements Iterator&lt;TKey, TValue>

- **`Phalcon\Mvc\Model\Resultset`** - implements [`Phalcon\Mvc\Model\ResultsetInterface`](#mvcmodelresultsetinterface), `\Iterator`, `\SeekableIterator`, `\Countable`, `\ArrayAccess`, `\JsonSerializable`
- [`Phalcon\Mvc\Model\Resultset\Complex`](#mvcmodelresultsetcomplex)
- [`Phalcon\Mvc\Model\Resultset\Simple`](#mvcmodelresultsetsimple)

`ArrayAccess` · `Closure` · `Countable` · `Iterator` · `JsonSerializable` · `Phalcon\Db\Enum` · `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Exceptions\CursorIsImmutable` · `Phalcon\Mvc\Model\Exceptions\IndexNotInCursor` · `Phalcon\Mvc\Model\Exceptions\InvalidResultsetCacheService` · `Phalcon\Mvc\Model\Exceptions\InvalidReturnedRecord` · `Phalcon\Support\Settings` · `SeekableIterator`

### Method Summary

<ApiItem href="#mvcmodelresultset-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"result","default":null},{"type":"mixed","name":"cache","default":"null"}]}>
Phalcon\Mvc\Model\Resultset constructor
</ApiItem>
<ApiItem href="#mvcmodelresultset-count" visibility="public" name="count" returnType="int" params={[]}>
Counts how many rows are in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-delete" visibility="public" name="delete" returnType="bool" params={[{"type":"Closure|null","name":"conditionCallback","default":"null"}]}>
Deletes every record in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-filter" visibility="public" name="filter" returnType="array" params={[{"type":"callable","name":"filter","default":null}]}>
Filters a resultset returning only those the developer requires
</ApiItem>
<ApiItem href="#mvcmodelresultset-getcache" visibility="public" name="getCache" returnType="mixed" params={[]}>
Returns the associated cache for the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-getfirst" visibility="public" name="getFirst" returnType="mixed" params={[]}>
Get first row in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-gethydratemode" visibility="public" name="getHydrateMode" returnType="int" params={[]}>
Returns the current hydration mode
</ApiItem>
<ApiItem href="#mvcmodelresultset-getlast" visibility="public" name="getLast" returnType="ModelInterface|Row|null" params={[]}>
Get last row in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-getmessages" visibility="public" name="getMessages" returnType="array" params={[]}>
Returns the error messages produced by a batch operation
</ApiItem>
<ApiItem href="#mvcmodelresultset-getresult" visibility="public" name="getResult" returnType="mixed" params={[]}>
</ApiItem>
<ApiItem href="#mvcmodelresultset-gettype" visibility="public" name="getType" returnType="int" params={[]}>
Returns the internal type of data retrieval that the resultset is using
</ApiItem>
<ApiItem href="#mvcmodelresultset-isfresh" visibility="public" name="isFresh" returnType="bool" params={[]}>
Tell if the resultset if fresh or an old one cached
</ApiItem>
<ApiItem href="#mvcmodelresultset-jsonserialize" visibility="public" name="jsonSerialize" returnType="array" params={[]}>
Returns serialised model objects as array for json_encode.
</ApiItem>
<ApiItem href="#mvcmodelresultset-key" visibility="public" name="key" returnType="int|null" params={[]}>
Gets pointer number of active row in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-materialize" visibility="public" name="materialize" returnType="void" params={[]}>
Fetches every remaining row of the underlying cursor into memory,
</ApiItem>
<ApiItem href="#mvcmodelresultset-next" visibility="public" name="next" returnType="void" params={[]}>
Moves cursor to next row in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-offsetexists" visibility="public" name="offsetExists" returnType="bool" params={[{"type":"mixed","name":"index","default":null}]}>
Checks whether offset exists in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-offsetget" visibility="public" name="offsetGet" returnType="mixed" params={[{"type":"mixed","name":"index","default":null}]}>
Gets row in a specific position of the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-offsetset" visibility="public" name="offsetSet" returnType="void" params={[{"type":"mixed","name":"offset","default":null},{"type":"mixed","name":"value","default":null}]}>
Resultsets cannot be changed. It has only been implemented to meet the
</ApiItem>
<ApiItem href="#mvcmodelresultset-offsetunset" visibility="public" name="offsetUnset" returnType="void" params={[{"type":"mixed","name":"offset","default":null}]}>
Resultsets cannot be changed. It has only been implemented to meet the
</ApiItem>
<ApiItem href="#mvcmodelresultset-refresh" visibility="public" name="refresh" returnType="bool" params={[]}>
</ApiItem>
<ApiItem href="#mvcmodelresultset-rewind" visibility="public" name="rewind" returnType="void" params={[]}>
Rewinds resultset to its beginning
</ApiItem>
<ApiItem href="#mvcmodelresultset-seek" visibility="public" name="seek" returnType="void" params={[{"type":"mixed","name":"position","default":null}]}>
Changes the internal pointer to a specific position in the resultset.
</ApiItem>
<ApiItem href="#mvcmodelresultset-sethydratemode" visibility="public" name="setHydrateMode" returnType="ResultsetInterface" params={[{"type":"int","name":"hydrateMode","default":null}]}>
Sets the hydration mode in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-setisfresh" visibility="public" name="setIsFresh" returnType="ResultsetInterface" params={[{"type":"bool","name":"isFresh","default":null}]}>
Set if the resultset is fresh or an old one cached
</ApiItem>
<ApiItem href="#mvcmodelresultset-update" visibility="public" name="update" returnType="bool" params={[{"type":"mixed","name":"data","default":null},{"type":"Closure|null","name":"conditionCallback","default":"null"}]}>
Updates every record in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultset-valid" visibility="public" name="valid" returnType="bool" params={[]}>
Check whether internal resource has rows to fetch
</ApiItem>

### Constants

<ApiItem kind="constant" name="HYDRATE_ARRAYS" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="HYDRATE_OBJECTS" type="int" default="2">
</ApiItem>
<ApiItem kind="constant" name="HYDRATE_RECORDS" type="int" default="0">
</ApiItem>
<ApiItem kind="constant" name="TYPE_RESULT_FULL" type="int" default="0">
</ApiItem>
<ApiItem kind="constant" name="TYPE_RESULT_PARTIAL" type="int" default="1">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="activeRow" type="mixed|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="cache" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="count" type="int|null" default="null">
Number of rows, or null while it has not been worked out yet. Resolved
lazily by count() - asking the driver up front costs SQLite an extra
statement on every single result-set.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="errorMessages" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hydrateMode" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isFresh" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="pointer" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="result" type="bool|ResultInterface" default="null">
Phalcon\Db\ResultInterface or false for empty resultset
</ApiItem>
<ApiItem kind="property" visibility="protected" name="row" type="mixed|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="rows" type="array|null" default="null">
</ApiItem>

### Methods

<h4 id="mvcmodelresultset-__construct"><code>__construct()</code></h4>

```php
public function __construct(
mixed $result,
mixed $cache = null
);
```

Phalcon\Mvc\Model\Resultset constructor

<h4 id="mvcmodelresultset-count"><code>count()</code></h4>

```php
final public function count(): int;
```

Counts how many rows are in the resultset

<h4 id="mvcmodelresultset-delete"><code>delete()</code></h4>

```php
public function delete( Closure|null $conditionCallback = null ): bool;
```

Deletes every record in the resultset

<h4 id="mvcmodelresultset-filter"><code>filter()</code></h4>

```php
public function filter( callable $filter ): array;
```

Filters a resultset returning only those the developer requires

```php
$filtered = $invoices->filter(
function ($invoice) {
    if ($invoice->inv_id < 3) {
        return $invoice;
    }
}
);
```

<h4 id="mvcmodelresultset-getcache"><code>getCache()</code></h4>

```php
public function getCache(): mixed;
```

Returns the associated cache for the resultset

<h4 id="mvcmodelresultset-getfirst"><code>getFirst()</code></h4>

```php
public function getFirst(): mixed;
```

Get first row in the resultset

```php
$model = new Invoices();
$manager = $model->getModelsManager();

// \Invoices
$manager->createQuery('SELECT * FROM Invoices')
    ->execute()
    ->getFirst();

// \Phalcon\Mvc\Model\Row
$manager->createQuery('SELECT r.inv_id FROM Invoices AS r')
    ->execute()
    ->getFirst();

// NULL
$manager->createQuery('SELECT r.inv_id FROM Invoices AS r WHERE r.inv_title = "NON-EXISTENT"')
    ->execute()
    ->getFirst();
```

<h4 id="mvcmodelresultset-gethydratemode"><code>getHydrateMode()</code></h4>

```php
public function getHydrateMode(): int;
```

Returns the current hydration mode

<h4 id="mvcmodelresultset-getlast"><code>getLast()</code></h4>

```php
public function getLast(): ModelInterface|Row|null;
```

Get last row in the resultset

<h4 id="mvcmodelresultset-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): array;
```

Returns the error messages produced by a batch operation

<h4 id="mvcmodelresultset-getresult"><code>getResult()</code></h4>

```php
public function getResult(): mixed;
```

<h4 id="mvcmodelresultset-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

Returns the internal type of data retrieval that the resultset is using

<h4 id="mvcmodelresultset-isfresh"><code>isFresh()</code></h4>

```php
public function isFresh(): bool;
```

Tell if the resultset if fresh or an old one cached

<h4 id="mvcmodelresultset-jsonserialize"><code>jsonSerialize()</code></h4>

```php
public function jsonSerialize(): array;
```

Returns serialised model objects as array for json_encode.
Calls jsonSerialize on each object if present

```php
$invoices = Invoices::find();

echo json_encode($invoices);
```

<h4 id="mvcmodelresultset-key"><code>key()</code></h4>

```php
public function key(): int|null;
```

Gets pointer number of active row in the resultset

<h4 id="mvcmodelresultset-materialize"><code>materialize()</code></h4>

```php
public function materialize(): void;
```

Fetches every remaining row of the underlying cursor into memory,
turning the resultset into TYPE_RESULT_FULL.

Free when called before the cursor has been advanced: the statement has
already been executed by Model\Query::executeSelect() and only the row
the constructor consumed is missing from the cursor, so no re-execution
takes place. Idempotent.

<h4 id="mvcmodelresultset-next"><code>next()</code></h4>

```php
public function next(): void;
```

Moves cursor to next row in the resultset

<h4 id="mvcmodelresultset-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $index ): bool;
```

Checks whether offset exists in the resultset

<h4 id="mvcmodelresultset-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $index ): mixed;
```

Gets row in a specific position of the resultset

<h4 id="mvcmodelresultset-offsetset"><code>offsetSet()</code></h4>

```php
public function offsetSet(
mixed $offset,
mixed $value
): void;
```

Resultsets cannot be changed. It has only been implemented to meet the
definition of the ArrayAccess interface

<h4 id="mvcmodelresultset-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $offset ): void;
```

Resultsets cannot be changed. It has only been implemented to meet the
definition of the ArrayAccess interface

<h4 id="mvcmodelresultset-refresh"><code>refresh()</code></h4>

```php
public function refresh(): bool;
```

<h4 id="mvcmodelresultset-rewind"><code>rewind()</code></h4>

```php
final public function rewind(): void;
```

Rewinds resultset to its beginning

<h4 id="mvcmodelresultset-seek"><code>seek()</code></h4>

```php
final public function seek( mixed $position ): void;
```

Changes the internal pointer to a specific position in the resultset.
Set the new position if required, and then set this->row

<h4 id="mvcmodelresultset-sethydratemode"><code>setHydrateMode()</code></h4>

```php
public function setHydrateMode( int $hydrateMode ): ResultsetInterface;
```

Sets the hydration mode in the resultset

<h4 id="mvcmodelresultset-setisfresh"><code>setIsFresh()</code></h4>

```php
public function setIsFresh( bool $isFresh ): ResultsetInterface;
```

Set if the resultset is fresh or an old one cached

<h4 id="mvcmodelresultset-update"><code>update()</code></h4>

```php
public function update(
mixed $data,
Closure|null $conditionCallback = null
): bool;
```

Updates every record in the resultset

<h4 id="mvcmodelresultset-valid"><code>valid()</code></h4>

```php
public function valid(): bool;
```

Check whether internal resource has rows to fetch

Driven by the row the cursor is parked on rather than by the count, so
that a plain traversal never has to ask the driver how many rows there
are - on SQLite that answer costs a second statement.

## Mvc\Model\ResultsetInterface

Interface

Interface for Phalcon\Mvc\Model\Resultset

- **`Phalcon\Mvc\Model\ResultsetInterface`**

`Closure` · `Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface`

### Method Summary

<ApiItem href="#mvcmodelresultsetinterface-delete" visibility="public" name="delete" returnType="bool" params={[{"type":"Closure|null","name":"conditionCallback","default":"null"}]}>
Deletes every record in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-filter" visibility="public" name="filter" returnType="array" params={[{"type":"callable","name":"filter","default":null}]}>
Filters a resultset returning only those the developer requires
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-getcache" visibility="public" name="getCache" returnType="mixed" params={[]}>
Returns the associated cache for the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-getfirst" visibility="public" name="getFirst" returnType="mixed" params={[]}>
Get first row in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-gethydratemode" visibility="public" name="getHydrateMode" returnType="int" params={[]}>
Returns the current hydration mode
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-getlast" visibility="public" name="getLast" returnType="ModelInterface|Row|null" params={[]}>
Get last row in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-getmessages" visibility="public" name="getMessages" returnType="array" params={[]}>
Returns the error messages produced by a batch operation
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-gettype" visibility="public" name="getType" returnType="int" params={[]}>
Returns the internal type of data retrieval that the resultset is using
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-isfresh" visibility="public" name="isFresh" returnType="bool" params={[]}>
Tell if the resultset is fresh or an old one cached
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-sethydratemode" visibility="public" name="setHydrateMode" returnType="ResultsetInterface" params={[{"type":"int","name":"hydrateMode","default":null}]}>
Sets the hydration mode in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-setisfresh" visibility="public" name="setIsFresh" returnType="ResultsetInterface" params={[{"type":"bool","name":"isFresh","default":null}]}>
Set if the resultset is fresh or an old one cached
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-toarray" visibility="public" name="toArray" returnType="array" params={[]}>
Returns a complete resultset as an array, if the resultset has a big
</ApiItem>
<ApiItem href="#mvcmodelresultsetinterface-update" visibility="public" name="update" returnType="bool" params={[{"type":"mixed","name":"data","default":null},{"type":"Closure|null","name":"conditionCallback","default":"null"}]}>
Updates every record in the resultset
</ApiItem>

### Methods

<h4 id="mvcmodelresultsetinterface-delete"><code>delete()</code></h4>

```php
public function delete( Closure|null $conditionCallback = null ): bool;
```

Deletes every record in the resultset

<h4 id="mvcmodelresultsetinterface-filter"><code>filter()</code></h4>

```php
public function filter( callable $filter ): array;
```

Filters a resultset returning only those the developer requires

```php
$filtered = $invoices->filter(
function ($invoice) {
    if ($invoice->inv_id < 3) {
        return $invoice;
    }
}
);
```

<h4 id="mvcmodelresultsetinterface-getcache"><code>getCache()</code></h4>

```php
public function getCache(): mixed;
```

Returns the associated cache for the resultset

<h4 id="mvcmodelresultsetinterface-getfirst"><code>getFirst()</code></h4>

```php
public function getFirst(): mixed;
```

Get first row in the resultset

<h4 id="mvcmodelresultsetinterface-gethydratemode"><code>getHydrateMode()</code></h4>

```php
public function getHydrateMode(): int;
```

Returns the current hydration mode

<h4 id="mvcmodelresultsetinterface-getlast"><code>getLast()</code></h4>

```php
public function getLast(): ModelInterface|Row|null;
```

Get last row in the resultset

<h4 id="mvcmodelresultsetinterface-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): array;
```

Returns the error messages produced by a batch operation

<h4 id="mvcmodelresultsetinterface-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

Returns the internal type of data retrieval that the resultset is using

<h4 id="mvcmodelresultsetinterface-isfresh"><code>isFresh()</code></h4>

```php
public function isFresh(): bool;
```

Tell if the resultset is fresh or an old one cached

<h4 id="mvcmodelresultsetinterface-sethydratemode"><code>setHydrateMode()</code></h4>

```php
public function setHydrateMode( int $hydrateMode ): ResultsetInterface;
```

Sets the hydration mode in the resultset

<h4 id="mvcmodelresultsetinterface-setisfresh"><code>setIsFresh()</code></h4>

```php
public function setIsFresh( bool $isFresh ): ResultsetInterface;
```

Set if the resultset is fresh or an old one cached

<h4 id="mvcmodelresultsetinterface-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns a complete resultset as an array, if the resultset has a big
number of rows it could consume more memory than currently it does.

<h4 id="mvcmodelresultsetinterface-update"><code>update()</code></h4>

```php
public function update(
mixed $data,
Closure|null $conditionCallback = null
): bool;
```

Updates every record in the resultset

## Mvc\Model\Resultset\Complex

Class

Complex resultsets may include complete objects and scalar values.
This class builds every complex row as it is required

@template TKey of int
@template TValue of mixed

- [`Phalcon\Mvc\Model\Resultset`](#mvcmodelresultset)
- **`Phalcon\Mvc\Model\Resultset\Complex`**

`Phalcon\Db\ResultInterface` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\Model` · `Phalcon\Mvc\Model\Exception` · `Phalcon\Mvc\Model\Exceptions\CorruptColumnType` · `Phalcon\Mvc\Model\Exceptions\InvalidContainer` · `Phalcon\Mvc\Model\Exceptions\InvalidSerializationData` · `Phalcon\Mvc\Model\Resultset` · `Phalcon\Mvc\Model\Row` · `Phalcon\Support\Settings` · `stdClass`

### Method Summary

<ApiItem href="#mvcmodelresultsetcomplex-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array|null","name":"columnTypes","default":null},{"type":"ResultInterface|null","name":"result","default":"null"},{"type":"mixed","name":"cache","default":"null"},{"type":"string","name":"resultsetRowClass","default":"\"\""}]}>
Phalcon\Mvc\Model\Resultset\Complex constructor
</ApiItem>
<ApiItem href="#mvcmodelresultsetcomplex-__serialize" visibility="public" name="__serialize" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#mvcmodelresultsetcomplex-__unserialize" visibility="public" name="__unserialize" returnType="void" params={[{"type":"array","name":"data","default":null}]}>
</ApiItem>
<ApiItem href="#mvcmodelresultsetcomplex-current" visibility="public" name="current" returnType="mixed" params={[]}>
Returns current row in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultsetcomplex-serialize" visibility="public" name="serialize" returnType="string" params={[]}>
Serializing a resultset will dump all related rows into a big array,
</ApiItem>
<ApiItem href="#mvcmodelresultsetcomplex-toarray" visibility="public" name="toArray" returnType="array" params={[]}>
Returns a complete resultset as an array, if the resultset has a big
</ApiItem>
<ApiItem href="#mvcmodelresultsetcomplex-unserialize" visibility="public" name="unserialize" returnType="void" params={[{"type":"mixed","name":"data","default":null}]}>
Unserializing a resultset will allow to only works on the rows present
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="columnTypes" type="array|null" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="disableHydration" type="bool" default="false">
Unserialised result-set hydrated all rows already. unserialise() sets
disableHydration to true
</ApiItem>
<ApiItem kind="property" visibility="protected" name="resultsetRowClass" type="string" default="&quot;&quot;">
</ApiItem>

### Methods

<h4 id="mvcmodelresultsetcomplex-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array|null $columnTypes,
ResultInterface|null $result = null,
mixed $cache = null,
string $resultsetRowClass = ""
);
```

Phalcon\Mvc\Model\Resultset\Complex constructor

<h4 id="mvcmodelresultsetcomplex-__serialize"><code>__serialize()</code></h4>

```php
public function __serialize(): array;
```

<h4 id="mvcmodelresultsetcomplex-__unserialize"><code>__unserialize()</code></h4>

```php
public function __unserialize( array $data ): void;
```

<h4 id="mvcmodelresultsetcomplex-current"><code>current()</code></h4>

```php
final public function current(): mixed;
```

Returns current row in the resultset

<h4 id="mvcmodelresultsetcomplex-serialize"><code>serialize()</code></h4>

```php
public function serialize(): string;
```

Serializing a resultset will dump all related rows into a big array,
serialize it and return the resulting string

<h4 id="mvcmodelresultsetcomplex-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns a complete resultset as an array, if the resultset has a big
number of rows it could consume more memory than currently it does.

<h4 id="mvcmodelresultsetcomplex-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( mixed $data ): void;
```

Unserializing a resultset will allow to only works on the rows present
in the saved state

## Mvc\Model\Resultset\Simple

Class

Simple resultsets only contains a complete objects
This class builds every complete object as it is required

- [`Phalcon\Mvc\Model\Resultset`](#mvcmodelresultset)
- **`Phalcon\Mvc\Model\Resultset\Simple`**

`Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\Model` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Eager\Loader` · `Phalcon\Mvc\Model\Exception` · `Phalcon\Mvc\Model\Exceptions\InvalidContainer` · `Phalcon\Mvc\Model\Exceptions\InvalidSerializationData` · `Phalcon\Mvc\Model\Exceptions\ResultsetColumnNotInMap` · `Phalcon\Mvc\Model\ResultInterface` · `Phalcon\Mvc\Model\Resultset` · `Phalcon\Mvc\Model\Row` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#mvcmodelresultsetsimple-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"columnMap","default":null},{"type":"mixed","name":"model","default":null},{"type":"mixed","name":"result","default":null},{"type":"mixed","name":"cache","default":"null"},{"type":"bool","name":"keepSnapshots","default":"false"}]}>
Phalcon\Mvc\Model\Resultset\Simple constructor
</ApiItem>
<ApiItem href="#mvcmodelresultsetsimple-__serialize" visibility="public" name="__serialize" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#mvcmodelresultsetsimple-__unserialize" visibility="public" name="__unserialize" returnType="void" params={[{"type":"array","name":"data","default":null}]}>
</ApiItem>
<ApiItem href="#mvcmodelresultsetsimple-current" visibility="public" name="current" returnType="ModelInterface|Row|null" params={[]}>
Returns current row in the resultset
</ApiItem>
<ApiItem href="#mvcmodelresultsetsimple-serialize" visibility="public" name="serialize" returnType="string" params={[]}>
Serializing a resultset will dump all related rows into a big array
</ApiItem>
<ApiItem href="#mvcmodelresultsetsimple-seteagermap" visibility="public" name="setEagerMap" returnType="void" params={[{"type":"array","name":"eagerMap","default":null}]}>
Attaches a pre-loaded relation map, applied to every record as it is
</ApiItem>
<ApiItem href="#mvcmodelresultsetsimple-slicerows" visibility="public" name="sliceRows" returnType="Simple" params={[{"type":"array","name":"indexes","default":null}]}>
Builds a new resultset of the same concrete class over the rows at the
</ApiItem>
<ApiItem href="#mvcmodelresultsetsimple-toarray" visibility="public" name="toArray" returnType="array" params={[{"type":"bool","name":"renameColumns","default":"true"}]}>
Returns a complete resultset as an array, if the resultset has a big
</ApiItem>
<ApiItem href="#mvcmodelresultsetsimple-unserialize" visibility="public" name="unserialize" returnType="void" params={[{"type":"mixed","name":"data","default":null}]}>
Unserializing a resultset will allow to only works on the rows present in
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="columnMap" type="mixed" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="eagerMap" type="array|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="keepSnapshots" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="model" type="mixed" default="">
</ApiItem>

### Methods

<h4 id="mvcmodelresultsetsimple-__construct"><code>__construct()</code></h4>

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

<h4 id="mvcmodelresultsetsimple-__serialize"><code>__serialize()</code></h4>

```php
public function __serialize(): array;
```

<h4 id="mvcmodelresultsetsimple-__unserialize"><code>__unserialize()</code></h4>

```php
public function __unserialize( array $data ): void;
```

<h4 id="mvcmodelresultsetsimple-current"><code>current()</code></h4>

```php
final public function current(): ModelInterface|Row|null;
```

Returns current row in the resultset

<h4 id="mvcmodelresultsetsimple-serialize"><code>serialize()</code></h4>

```php
public function serialize(): string;
```

Serializing a resultset will dump all related rows into a big array

<h4 id="mvcmodelresultsetsimple-seteagermap"><code>setEagerMap()</code></h4>

```php
public function setEagerMap( array $eagerMap ): void;
```

Attaches a pre-loaded relation map, applied to every record as it is
hydrated.

Records in a resultset are transient - seek() clears activeRow on every
move and current() re-hydrates from the raw row - so hydration is the
only durable point at which relations can be stamped.

<h4 id="mvcmodelresultsetsimple-slicerows"><code>sliceRows()</code></h4>

```php
public function sliceRows( array $indexes ): Simple;
```

Builds a new resultset of the same concrete class over the rows at the
given positions, preserving the column map, record prototype and
snapshot behavior of this resultset.

<h4 id="mvcmodelresultsetsimple-toarray"><code>toArray()</code></h4>

```php
public function toArray( bool $renameColumns = true ): array;
```

Returns a complete resultset as an array, if the resultset has a big
number of rows it could consume more memory than currently it does.
Export the resultset to an array couldn't be faster with a large number
of records

<h4 id="mvcmodelresultsetsimple-unserialize"><code>unserialize()</code></h4>

```php
public function unserialize( mixed $data ): void;
```

Unserializing a resultset will allow to only works on the rows present in
the saved state

## Mvc\Model\Row

Class

This component allows Phalcon\Mvc\Model to return rows without an associated entity.
This objects implements the ArrayAccess interface to allow access the object as object->x or array[x].

- `\stdClass`
- **`Phalcon\Mvc\Model\Row`** - implements [`Phalcon\Mvc\EntityInterface`](#mvcentityinterface), [`Phalcon\Mvc\Model\ResultInterface`](#mvcmodelresultinterface), `\ArrayAccess`, `\JsonSerializable`

`ArrayAccess` · `JsonSerializable` · `Phalcon\Mvc\EntityInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Exceptions\IndexNotInRow` · `Phalcon\Mvc\Model\Exceptions\RowIsImmutable` · `stdClass`

### Method Summary

<ApiItem href="#mvcmodelrow-jsonserialize" visibility="public" name="jsonSerialize" returnType="array" params={[]}>
Serializes the object for json_encode
</ApiItem>
<ApiItem href="#mvcmodelrow-offsetexists" visibility="public" name="offsetExists" returnType="bool" params={[{"type":"mixed","name":"offset","default":null}]}>
Checks whether offset exists in the row
</ApiItem>
<ApiItem href="#mvcmodelrow-offsetget" visibility="public" name="offsetGet" returnType="mixed" params={[{"type":"mixed","name":"offset","default":null}]}>
Gets a record in a specific position of the row
</ApiItem>
<ApiItem href="#mvcmodelrow-offsetset" visibility="public" name="offsetSet" returnType="void" params={[{"type":"mixed","name":"offset","default":null},{"type":"mixed","name":"value","default":null}]}>
Rows cannot be changed. It has only been implemented to meet the
</ApiItem>
<ApiItem href="#mvcmodelrow-offsetunset" visibility="public" name="offsetUnset" returnType="void" params={[{"type":"mixed","name":"offset","default":null}]}>
Rows cannot be changed. It has only been implemented to meet the
</ApiItem>
<ApiItem href="#mvcmodelrow-readattribute" visibility="public" name="readAttribute" returnType="mixed" params={[{"type":"string","name":"attribute","default":null}]}>
Reads an attribute value by its name
</ApiItem>
<ApiItem href="#mvcmodelrow-setdirtystate" visibility="public" name="setDirtyState" returnType="bool|ModelInterface" params={[{"type":"int","name":"dirtyState","default":null}]}>
Set the current object's state
</ApiItem>
<ApiItem href="#mvcmodelrow-toarray" visibility="public" name="toArray" returnType="array" params={[]}>
Returns the instance as an array representation
</ApiItem>
<ApiItem href="#mvcmodelrow-writeattribute" visibility="public" name="writeAttribute" returnType="void" params={[{"type":"string","name":"attribute","default":null},{"type":"mixed","name":"value","default":null}]}>
Writes an attribute value by its name
</ApiItem>

### Methods

<h4 id="mvcmodelrow-jsonserialize"><code>jsonSerialize()</code></h4>

```php
public function jsonSerialize(): array;
```

Serializes the object for json_encode

<h4 id="mvcmodelrow-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $offset ): bool;
```

Checks whether offset exists in the row

<h4 id="mvcmodelrow-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $offset ): mixed;
```

Gets a record in a specific position of the row

<h4 id="mvcmodelrow-offsetset"><code>offsetSet()</code></h4>

```php
public function offsetSet(
mixed $offset,
mixed $value
): void;
```

Rows cannot be changed. It has only been implemented to meet the
definition of the ArrayAccess interface

<h4 id="mvcmodelrow-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $offset ): void;
```

Rows cannot be changed. It has only been implemented to meet the
definition of the ArrayAccess interface

<h4 id="mvcmodelrow-readattribute"><code>readAttribute()</code></h4>

```php
public function readAttribute( string $attribute ): mixed;
```

Reads an attribute value by its name

```php
echo $invoice->readAttribute("inv_title");
```

<h4 id="mvcmodelrow-setdirtystate"><code>setDirtyState()</code></h4>

```php
public function setDirtyState( int $dirtyState ): bool|ModelInterface;
```

Set the current object's state

<h4 id="mvcmodelrow-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the instance as an array representation

<h4 id="mvcmodelrow-writeattribute"><code>writeAttribute()</code></h4>

```php
public function writeAttribute(
string $attribute,
mixed $value
): void;
```

Writes an attribute value by its name

```php
$invoice->writeAttribute("inv_title", "Test Invoice");
```

## Mvc\Model\Transaction

Class

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

$invoice = new Invoices();

$invoice->setTransaction($transaction);

$invoice->inv_title    = "Test Invoice";
$invoice->inv_created_at = date("Y-m-d");

if ($invoice->save() === false) {
    $transaction->rollback("Can't save invoice");
}

$product = new Products();

$product->setTransaction($transaction);

$product->prd_name = "Widget";

if ($product->save() === false) {
    $transaction->rollback("Can't save product");
}

$transaction->commit();
} catch(Failed $e) {
echo "Failed, reason: ", $e->getMessage();
}
```

- **`Phalcon\Mvc\Model\Transaction`** - implements [`Phalcon\Mvc\Model\TransactionInterface`](#mvcmodeltransactioninterface)

`Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Transaction\Failed` · `Phalcon\Mvc\Model\Transaction\ManagerInterface`

### Method Summary

<ApiItem href="#mvcmodeltransaction-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"DiInterface","name":"container","default":null},{"type":"bool","name":"autoBegin","default":"false"},{"type":"string","name":"service","default":"\"db\""}]}>
Phalcon\Mvc\Model\Transaction constructor
</ApiItem>
<ApiItem href="#mvcmodeltransaction-begin" visibility="public" name="begin" returnType="bool" params={[]}>
Starts the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransaction-commit" visibility="public" name="commit" returnType="bool" params={[]}>
Commits the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransaction-getconnection" visibility="public" name="getConnection" returnType="AdapterInterface" params={[]}>
Returns the connection related to transaction
</ApiItem>
<ApiItem href="#mvcmodeltransaction-getmessages" visibility="public" name="getMessages" returnType="array" params={[]}>
Returns validations messages from last save try
</ApiItem>
<ApiItem href="#mvcmodeltransaction-ismanaged" visibility="public" name="isManaged" returnType="bool" params={[]}>
Checks whether transaction is managed by a transaction manager
</ApiItem>
<ApiItem href="#mvcmodeltransaction-isvalid" visibility="public" name="isValid" returnType="bool" params={[]}>
Checks whether internal connection is under an active transaction
</ApiItem>
<ApiItem href="#mvcmodeltransaction-rollback" visibility="public" name="rollback" returnType="bool" params={[{"type":"string|null","name":"rollbackMessage","default":"null"},{"type":"ModelInterface|null","name":"rollbackRecord","default":"null"}]}>
Rollbacks the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransaction-setisnewtransaction" visibility="public" name="setIsNewTransaction" returnType="void" params={[{"type":"bool","name":"isNew","default":null}]}>
Sets if is a reused transaction or new once
</ApiItem>
<ApiItem href="#mvcmodeltransaction-setrollbackonabort" visibility="public" name="setRollbackOnAbort" returnType="void" params={[{"type":"bool","name":"rollbackOnAbort","default":null}]}>
Sets flag to rollback on abort the HTTP connection
</ApiItem>
<ApiItem href="#mvcmodeltransaction-setrollbackedrecord" visibility="public" name="setRollbackedRecord" returnType="void" params={[{"type":"ModelInterface","name":"record","default":null}]}>
Sets object which generates rollback action
</ApiItem>
<ApiItem href="#mvcmodeltransaction-settransactionmanager" visibility="public" name="setTransactionManager" returnType="void" params={[{"type":"ManagerInterface","name":"manager","default":null}]}>
Sets transaction manager related to the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransaction-throwrollbackexception" visibility="public" name="throwRollbackException" returnType="TransactionInterface" params={[{"type":"bool","name":"status","default":null}]}>
Enables throwing exception
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="activeTransaction" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="connection" type="AdapterInterface" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isNewTransaction" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="manager" type="ManagerInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="messages" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="rollbackOnAbort" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="rollbackRecord" type="ModelInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="rollbackThrowException" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="mvcmodeltransaction-__construct"><code>__construct()</code></h4>

```php
public function __construct(
DiInterface $container,
bool $autoBegin = false,
string $service = "db"
);
```

Phalcon\Mvc\Model\Transaction constructor

<h4 id="mvcmodeltransaction-begin"><code>begin()</code></h4>

```php
public function begin(): bool;
```

Starts the transaction

<h4 id="mvcmodeltransaction-commit"><code>commit()</code></h4>

```php
public function commit(): bool;
```

Commits the transaction

<h4 id="mvcmodeltransaction-getconnection"><code>getConnection()</code></h4>

```php
public function getConnection(): AdapterInterface;
```

Returns the connection related to transaction

<h4 id="mvcmodeltransaction-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): array;
```

Returns validations messages from last save try

<h4 id="mvcmodeltransaction-ismanaged"><code>isManaged()</code></h4>

```php
public function isManaged(): bool;
```

Checks whether transaction is managed by a transaction manager

<h4 id="mvcmodeltransaction-isvalid"><code>isValid()</code></h4>

```php
public function isValid(): bool;
```

Checks whether internal connection is under an active transaction

<h4 id="mvcmodeltransaction-rollback"><code>rollback()</code></h4>

```php
public function rollback(
string|null $rollbackMessage = null,
ModelInterface|null $rollbackRecord = null
): bool;
```

Rollbacks the transaction

<h4 id="mvcmodeltransaction-setisnewtransaction"><code>setIsNewTransaction()</code></h4>

```php
public function setIsNewTransaction( bool $isNew ): void;
```

Sets if is a reused transaction or new once

<h4 id="mvcmodeltransaction-setrollbackonabort"><code>setRollbackOnAbort()</code></h4>

```php
public function setRollbackOnAbort( bool $rollbackOnAbort ): void;
```

Sets flag to rollback on abort the HTTP connection

<h4 id="mvcmodeltransaction-setrollbackedrecord"><code>setRollbackedRecord()</code></h4>

```php
public function setRollbackedRecord( ModelInterface $record ): void;
```

Sets object which generates rollback action

<h4 id="mvcmodeltransaction-settransactionmanager"><code>setTransactionManager()</code></h4>

```php
public function setTransactionManager( ManagerInterface $manager ): void;
```

Sets transaction manager related to the transaction

<h4 id="mvcmodeltransaction-throwrollbackexception"><code>throwRollbackException()</code></h4>

```php
public function throwRollbackException( bool $status ): TransactionInterface;
```

Enables throwing exception

## Mvc\Model\TransactionInterface

Interface

Interface for Phalcon\Mvc\Model\Transaction

- **`Phalcon\Mvc\Model\TransactionInterface`**

`Phalcon\Db\Adapter\AdapterInterface` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Mvc\Model\Transaction\ManagerInterface`

### Method Summary

<ApiItem href="#mvcmodeltransactioninterface-begin" visibility="public" name="begin" returnType="bool" params={[]}>
Starts the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-commit" visibility="public" name="commit" returnType="bool" params={[]}>
Commits the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-getconnection" visibility="public" name="getConnection" returnType="AdapterInterface" params={[]}>
Returns connection related to transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-getmessages" visibility="public" name="getMessages" returnType="array" params={[]}>
Returns validations messages from last save try
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-ismanaged" visibility="public" name="isManaged" returnType="bool" params={[]}>
Checks whether transaction is managed by a transaction manager
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-isvalid" visibility="public" name="isValid" returnType="bool" params={[]}>
Checks whether internal connection is under an active transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-rollback" visibility="public" name="rollback" returnType="bool" params={[{"type":"string|null","name":"rollbackMessage","default":"null"},{"type":"ModelInterface|null","name":"rollbackRecord","default":"null"}]}>
Rollbacks the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-setisnewtransaction" visibility="public" name="setIsNewTransaction" returnType="void" params={[{"type":"bool","name":"isNew","default":null}]}>
Sets if is a reused transaction or new once
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-setrollbackonabort" visibility="public" name="setRollbackOnAbort" returnType="void" params={[{"type":"bool","name":"rollbackOnAbort","default":null}]}>
Sets flag to rollback on abort the HTTP connection
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-setrollbackedrecord" visibility="public" name="setRollbackedRecord" returnType="void" params={[{"type":"ModelInterface","name":"record","default":null}]}>
Sets object which generates rollback action
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-settransactionmanager" visibility="public" name="setTransactionManager" returnType="void" params={[{"type":"ManagerInterface","name":"manager","default":null}]}>
Sets transaction manager related to the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactioninterface-throwrollbackexception" visibility="public" name="throwRollbackException" returnType="TransactionInterface" params={[{"type":"bool","name":"status","default":null}]}>
Enables throwing exception
</ApiItem>

### Methods

<h4 id="mvcmodeltransactioninterface-begin"><code>begin()</code></h4>

```php
public function begin(): bool;
```

Starts the transaction

<h4 id="mvcmodeltransactioninterface-commit"><code>commit()</code></h4>

```php
public function commit(): bool;
```

Commits the transaction

<h4 id="mvcmodeltransactioninterface-getconnection"><code>getConnection()</code></h4>

```php
public function getConnection(): AdapterInterface;
```

Returns connection related to transaction

<h4 id="mvcmodeltransactioninterface-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): array;
```

Returns validations messages from last save try

<h4 id="mvcmodeltransactioninterface-ismanaged"><code>isManaged()</code></h4>

```php
public function isManaged(): bool;
```

Checks whether transaction is managed by a transaction manager

<h4 id="mvcmodeltransactioninterface-isvalid"><code>isValid()</code></h4>

```php
public function isValid(): bool;
```

Checks whether internal connection is under an active transaction

<h4 id="mvcmodeltransactioninterface-rollback"><code>rollback()</code></h4>

```php
public function rollback(
string|null $rollbackMessage = null,
ModelInterface|null $rollbackRecord = null
): bool;
```

Rollbacks the transaction

<h4 id="mvcmodeltransactioninterface-setisnewtransaction"><code>setIsNewTransaction()</code></h4>

```php
public function setIsNewTransaction( bool $isNew ): void;
```

Sets if is a reused transaction or new once

<h4 id="mvcmodeltransactioninterface-setrollbackonabort"><code>setRollbackOnAbort()</code></h4>

```php
public function setRollbackOnAbort( bool $rollbackOnAbort ): void;
```

Sets flag to rollback on abort the HTTP connection

<h4 id="mvcmodeltransactioninterface-setrollbackedrecord"><code>setRollbackedRecord()</code></h4>

```php
public function setRollbackedRecord( ModelInterface $record ): void;
```

Sets object which generates rollback action

<h4 id="mvcmodeltransactioninterface-settransactionmanager"><code>setTransactionManager()</code></h4>

```php
public function setTransactionManager( ManagerInterface $manager ): void;
```

Sets transaction manager related to the transaction

<h4 id="mvcmodeltransactioninterface-throwrollbackexception"><code>throwRollbackException()</code></h4>

```php
public function throwRollbackException( bool $status ): TransactionInterface;
```

Enables throwing exception

## Mvc\Model\Transaction\Exception

Class

Exceptions thrown in Phalcon\Mvc\Model\Transaction will use this class

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\Transaction\Exception`**
- [`Phalcon\Mvc\Model\Transaction\Failed`](#mvcmodeltransactionfailed)

## Mvc\Model\Transaction\Failed

Class

Phalcon\Mvc\Model\Transaction\Failed

This class will be thrown to exit a try/catch block for isolated transactions

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- [`Phalcon\Mvc\Model\Transaction\Exception`](#mvcmodeltransactionexception)
- **`Phalcon\Mvc\Model\Transaction\Failed`**

`Phalcon\Messages\MessageInterface` · `Phalcon\Mvc\ModelInterface`

### Method Summary

<ApiItem href="#mvcmodeltransactionfailed-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"message","default":null},{"type":"ModelInterface|null","name":"record","default":"null"}]}>
Constructor
</ApiItem>
<ApiItem href="#mvcmodeltransactionfailed-getrecord" visibility="public" name="getRecord" returnType="ModelInterface|null" params={[]}>
Returns validation record messages which stop the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactionfailed-getrecordmessages" visibility="public" name="getRecordMessages" returnType="array|string" params={[]}>
Returns validation record messages which stop the transaction
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="record" type="ModelInterface|null" default="null">
</ApiItem>

### Methods

<h4 id="mvcmodeltransactionfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $message,
ModelInterface|null $record = null
);
```

Constructor

<h4 id="mvcmodeltransactionfailed-getrecord"><code>getRecord()</code></h4>

```php
public function getRecord(): ModelInterface|null;
```

Returns validation record messages which stop the transaction

<h4 id="mvcmodeltransactionfailed-getrecordmessages"><code>getRecordMessages()</code></h4>

```php
public function getRecordMessages(): array|string;
```

Returns validation record messages which stop the transaction

## Mvc\Model\Transaction\Manager

Class

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

   $invoice = new Invoices();

   $invoice->setTransaction($transaction);

   $invoice->inv_title       = "Test Invoice";
   $invoice->inv_created_at = date("Y-m-d");

   if ($invoice->save() === false) {
   $transaction->rollback("Can't save invoice");
   }

   $product = new Products();

   $product->setTransaction($transaction);

   $product->prd_name = "Widget";

   if ($product->save() === false) {
   $transaction->rollback("Can't save product");
   }

   $transaction->commit();
} catch (Failed $e) {
   echo "Failed, reason: ", $e->getMessage();
}
```

- **`Phalcon\Mvc\Model\Transaction\Manager`** - implements [`Phalcon\Mvc\Model\Transaction\ManagerInterface`](#mvcmodeltransactionmanagerinterface), [`Phalcon\Di\InjectionAwareInterface`](/6.0/api/phalcon_di/#diinjectionawareinterface)

`Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Mvc\Model\Exceptions\ManagerOrmServicesUnavailable` · `Phalcon\Mvc\Model\Transaction` · `Phalcon\Mvc\Model\TransactionInterface`

### Method Summary

<ApiItem href="#mvcmodeltransactionmanager-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"object|null","name":"container","default":"null"}]}>
Phalcon\Mvc\Model\Transaction\Manager constructor
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-collecttransactions" visibility="public" name="collectTransactions" returnType="void" params={[]}>
Remove all the transactions from the manager
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-commit" visibility="public" name="commit" returnType="void" params={[]}>
Commits active transactions within the manager
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-get" visibility="public" name="get" returnType="TransactionInterface" params={[{"type":"bool","name":"autoBegin","default":"true"}]}>
Returns a new \Phalcon\Mvc\Model\Transaction or an already created once
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-getdi" visibility="public" name="getDI" returnType="DiInterface|null" params={[]}>
Returns the dependency injection container
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-getdbservice" visibility="public" name="getDbService" returnType="string" params={[]}>
Returns the database service used to isolate the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-getorcreatetransaction" visibility="public" name="getOrCreateTransaction" returnType="TransactionInterface" params={[{"type":"bool","name":"autoBegin","default":"true"}]}>
Create/Returns a new transaction or an existing one
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-getrollbackpendent" visibility="public" name="getRollbackPendent" returnType="bool" params={[]}>
Check if the transaction manager is registering a shutdown function to
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-has" visibility="public" name="has" returnType="bool" params={[]}>
Checks whether the manager has an active transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-notifycommit" visibility="public" name="notifyCommit" returnType="void" params={[{"type":"TransactionInterface","name":"transaction","default":null}]}>
Notifies the manager about a committed transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-notifyrollback" visibility="public" name="notifyRollback" returnType="void" params={[{"type":"TransactionInterface","name":"transaction","default":null}]}>
Notifies the manager about a rollbacked transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-rollback" visibility="public" name="rollback" returnType="void" params={[{"type":"bool","name":"collect","default":"true"}]}>
Rollbacks active transactions within the manager
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-rollbackpendent" visibility="public" name="rollbackPendent" returnType="void" params={[]}>
Rollbacks active transactions within the manager
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-setdi" visibility="public" name="setDI" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Sets the dependency injection container
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-setdbservice" visibility="public" name="setDbService" returnType="ManagerInterface" params={[{"type":"string","name":"service","default":null}]}>
Sets the database service used to run the isolated transactions
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-setrollbackpendent" visibility="public" name="setRollbackPendent" returnType="ManagerInterface" params={[{"type":"bool","name":"rollbackPendent","default":null}]}>
Set if the transaction manager must register a shutdown function to clean
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanager-collecttransaction" visibility="protected" name="collectTransaction" returnType="void" params={[{"type":"TransactionInterface","name":"transaction","default":null}]}>
Removes transactions from the TransactionManager
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="container" type="object|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="initialized" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="number" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="rollbackPendent" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="service" type="string" default="&quot;db&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="transactions" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="mvcmodeltransactionmanager-__construct"><code>__construct()</code></h4>

```php
public function __construct( object|null $container = null );
```

Phalcon\Mvc\Model\Transaction\Manager constructor

<h4 id="mvcmodeltransactionmanager-collecttransactions"><code>collectTransactions()</code></h4>

```php
public function collectTransactions(): void;
```

Remove all the transactions from the manager

<h4 id="mvcmodeltransactionmanager-commit"><code>commit()</code></h4>

```php
public function commit(): void;
```

Commits active transactions within the manager

<h4 id="mvcmodeltransactionmanager-get"><code>get()</code></h4>

```php
public function get( bool $autoBegin = true ): TransactionInterface;
```

Returns a new \Phalcon\Mvc\Model\Transaction or an already created once
This method registers a shutdown function to rollback active connections

<h4 id="mvcmodeltransactionmanager-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface|null;
```

Returns the dependency injection container

<h4 id="mvcmodeltransactionmanager-getdbservice"><code>getDbService()</code></h4>

```php
public function getDbService(): string;
```

Returns the database service used to isolate the transaction

<h4 id="mvcmodeltransactionmanager-getorcreatetransaction"><code>getOrCreateTransaction()</code></h4>

```php
public function getOrCreateTransaction( bool $autoBegin = true ): TransactionInterface;
```

Create/Returns a new transaction or an existing one

<h4 id="mvcmodeltransactionmanager-getrollbackpendent"><code>getRollbackPendent()</code></h4>

```php
public function getRollbackPendent(): bool;
```

Check if the transaction manager is registering a shutdown function to
clean up pendent transactions

<h4 id="mvcmodeltransactionmanager-has"><code>has()</code></h4>

```php
public function has(): bool;
```

Checks whether the manager has an active transaction

<h4 id="mvcmodeltransactionmanager-notifycommit"><code>notifyCommit()</code></h4>

```php
public function notifyCommit( TransactionInterface $transaction ): void;
```

Notifies the manager about a committed transaction

<h4 id="mvcmodeltransactionmanager-notifyrollback"><code>notifyRollback()</code></h4>

```php
public function notifyRollback( TransactionInterface $transaction ): void;
```

Notifies the manager about a rollbacked transaction

<h4 id="mvcmodeltransactionmanager-rollback"><code>rollback()</code></h4>

```php
public function rollback( bool $collect = true ): void;
```

Rollbacks active transactions within the manager
Collect will remove the transaction from the manager

<h4 id="mvcmodeltransactionmanager-rollbackpendent"><code>rollbackPendent()</code></h4>

```php
public function rollbackPendent(): void;
```

Rollbacks active transactions within the manager

<h4 id="mvcmodeltransactionmanager-setdi"><code>setDI()</code></h4>

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injection container

<h4 id="mvcmodeltransactionmanager-setdbservice"><code>setDbService()</code></h4>

```php
public function setDbService( string $service ): ManagerInterface;
```

Sets the database service used to run the isolated transactions

<h4 id="mvcmodeltransactionmanager-setrollbackpendent"><code>setRollbackPendent()</code></h4>

```php
public function setRollbackPendent( bool $rollbackPendent ): ManagerInterface;
```

Set if the transaction manager must register a shutdown function to clean
up pendent transactions

<h4 id="mvcmodeltransactionmanager-collecttransaction"><code>collectTransaction()</code></h4>

```php
protected function collectTransaction( TransactionInterface $transaction ): void;
```

Removes transactions from the TransactionManager

## Mvc\Model\Transaction\ManagerInterface

Interface

Phalcon\Mvc\Model\Transaction\ManagerInterface

Interface for Phalcon\Mvc\Model\Transaction\Manager

- **`Phalcon\Mvc\Model\Transaction\ManagerInterface`**

`Phalcon\Mvc\Model\TransactionInterface`

### Method Summary

<ApiItem href="#mvcmodeltransactionmanagerinterface-collecttransactions" visibility="public" name="collectTransactions" returnType="void" params={[]}>
Remove all the transactions from the manager
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-commit" visibility="public" name="commit" returnType="" params={[]}>
Commits active transactions within the manager
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-get" visibility="public" name="get" returnType="TransactionInterface" params={[{"type":"bool","name":"autoBegin","default":"true"}]}>
Returns a new \Phalcon\Mvc\Model\Transaction or an already created once
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-getdbservice" visibility="public" name="getDbService" returnType="string" params={[]}>
Returns the database service used to isolate the transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-getrollbackpendent" visibility="public" name="getRollbackPendent" returnType="bool" params={[]}>
Check if the transaction manager is registering a shutdown function to
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-has" visibility="public" name="has" returnType="bool" params={[]}>
Checks whether manager has an active transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-notifycommit" visibility="public" name="notifyCommit" returnType="void" params={[{"type":"TransactionInterface","name":"transaction","default":null}]}>
Notifies the manager about a committed transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-notifyrollback" visibility="public" name="notifyRollback" returnType="void" params={[{"type":"TransactionInterface","name":"transaction","default":null}]}>
Notifies the manager about a rollbacked transaction
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-rollback" visibility="public" name="rollback" returnType="void" params={[{"type":"bool","name":"collect","default":"false"}]}>
Rollbacks active transactions within the manager
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-rollbackpendent" visibility="public" name="rollbackPendent" returnType="void" params={[]}>
Rollbacks active transactions within the manager
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-setdbservice" visibility="public" name="setDbService" returnType="ManagerInterface" params={[{"type":"string","name":"service","default":null}]}>
Sets the database service used to run the isolated transactions
</ApiItem>
<ApiItem href="#mvcmodeltransactionmanagerinterface-setrollbackpendent" visibility="public" name="setRollbackPendent" returnType="ManagerInterface" params={[{"type":"bool","name":"rollbackPendent","default":null}]}>
Set if the transaction manager must register a shutdown function to clean up pendent transactions
</ApiItem>

### Methods

<h4 id="mvcmodeltransactionmanagerinterface-collecttransactions"><code>collectTransactions()</code></h4>

```php
public function collectTransactions(): void;
```

Remove all the transactions from the manager

<h4 id="mvcmodeltransactionmanagerinterface-commit"><code>commit()</code></h4>

```php
public function commit();
```

Commits active transactions within the manager

<h4 id="mvcmodeltransactionmanagerinterface-get"><code>get()</code></h4>

```php
public function get( bool $autoBegin = true ): TransactionInterface;
```

Returns a new \Phalcon\Mvc\Model\Transaction or an already created once

<h4 id="mvcmodeltransactionmanagerinterface-getdbservice"><code>getDbService()</code></h4>

```php
public function getDbService(): string;
```

Returns the database service used to isolate the transaction

<h4 id="mvcmodeltransactionmanagerinterface-getrollbackpendent"><code>getRollbackPendent()</code></h4>

```php
public function getRollbackPendent(): bool;
```

Check if the transaction manager is registering a shutdown function to
clean up pendent transactions

<h4 id="mvcmodeltransactionmanagerinterface-has"><code>has()</code></h4>

```php
public function has(): bool;
```

Checks whether manager has an active transaction

<h4 id="mvcmodeltransactionmanagerinterface-notifycommit"><code>notifyCommit()</code></h4>

```php
public function notifyCommit( TransactionInterface $transaction ): void;
```

Notifies the manager about a committed transaction

<h4 id="mvcmodeltransactionmanagerinterface-notifyrollback"><code>notifyRollback()</code></h4>

```php
public function notifyRollback( TransactionInterface $transaction ): void;
```

Notifies the manager about a rollbacked transaction

<h4 id="mvcmodeltransactionmanagerinterface-rollback"><code>rollback()</code></h4>

```php
public function rollback( bool $collect = false ): void;
```

Rollbacks active transactions within the manager
Collect will remove transaction from the manager

<h4 id="mvcmodeltransactionmanagerinterface-rollbackpendent"><code>rollbackPendent()</code></h4>

```php
public function rollbackPendent(): void;
```

Rollbacks active transactions within the manager

<h4 id="mvcmodeltransactionmanagerinterface-setdbservice"><code>setDbService()</code></h4>

```php
public function setDbService( string $service ): ManagerInterface;
```

Sets the database service used to run the isolated transactions

<h4 id="mvcmodeltransactionmanagerinterface-setrollbackpendent"><code>setRollbackPendent()</code></h4>

```php
public function setRollbackPendent( bool $rollbackPendent ): ManagerInterface;
```

Set if the transaction manager must register a shutdown function to clean up pendent transactions

## Mvc\Model\ValidationFailed

Class

Phalcon\Mvc\Model\ValidationFailed

This exception is generated when a model fails to save a record
Phalcon\Mvc\Model must be set up to have this behavior

- `\Exception`
- [`Phalcon\Mvc\Model\Exception`](#mvcmodelexception)
- **`Phalcon\Mvc\Model\ValidationFailed`**

`Phalcon\Mvc\ModelInterface`

### Method Summary

<ApiItem href="#mvcmodelvalidationfailed-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"ModelInterface","name":"model","default":null},{"type":"array","name":"validationMessages","default":null}]}>
Phalcon\Mvc\Model\ValidationFailed constructor
</ApiItem>
<ApiItem href="#mvcmodelvalidationfailed-getmessages" visibility="public" name="getMessages" returnType="array" params={[]}>
Returns the complete group of messages produced in the validation
</ApiItem>
<ApiItem href="#mvcmodelvalidationfailed-getmodel" visibility="public" name="getModel" returnType="ModelInterface" params={[]}>
Returns the model that generated the messages
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="model" type="ModelInterface" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="validationMessages" type="array" default="">
</ApiItem>

### Methods

<h4 id="mvcmodelvalidationfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct(
ModelInterface $model,
array $validationMessages
);
```

Phalcon\Mvc\Model\ValidationFailed constructor

<h4 id="mvcmodelvalidationfailed-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): array;
```

Returns the complete group of messages produced in the validation

<h4 id="mvcmodelvalidationfailed-getmodel"><code>getModel()</code></h4>

```php
public function getModel(): ModelInterface;
```

Returns the model that generated the messages

## Mvc\ModuleDefinitionInterface

Interface

This interface must be implemented by class module definitions

- **`Phalcon\Mvc\ModuleDefinitionInterface`**

`Phalcon\Di\DiInterface`

### Method Summary

<ApiItem href="#mvcmoduledefinitioninterface-registerautoloaders" visibility="public" name="registerAutoloaders" returnType="" params={[{"type":"DiInterface|null","name":"container","default":"null"}]}>
Registers an autoloader related to the module
</ApiItem>
<ApiItem href="#mvcmoduledefinitioninterface-registerservices" visibility="public" name="registerServices" returnType="" params={[{"type":"DiInterface","name":"container","default":null}]}>
Registers services related to the module
</ApiItem>

### Methods

<h4 id="mvcmoduledefinitioninterface-registerautoloaders"><code>registerAutoloaders()</code></h4>

```php
public function registerAutoloaders( DiInterface|null $container = null );
```

Registers an autoloader related to the module

<h4 id="mvcmoduledefinitioninterface-registerservices"><code>registerServices()</code></h4>

```php
public function registerServices( DiInterface $container );
```

Registers services related to the module

## Mvc\Router

Class

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

- `\stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/6.0/api/phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Mvc\Router`** - implements [`Phalcon\Mvc\RouterInterface`](#mvcrouterinterface), [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Mvc\Router\Annotations`](#mvcrouterannotations)

`Closure` · `Phalcon\Cache\Adapter\AdapterInterface` · `Phalcon\Config\ConfigInterface` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Exception` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Http\RequestInterface` · `Phalcon\Mvc\Router\Exception` · `Phalcon\Mvc\Router\Exceptions\BeforeMatchNotCallable` · `Phalcon\Mvc\Router\Exceptions\ConfigKeyMustBeArray` · `Phalcon\Mvc\Router\Exceptions\EmptyGroupOfRoutes` · `Phalcon\Mvc\Router\Exceptions\GroupRoutesMustBeArray` · `Phalcon\Mvc\Router\Exceptions\InvalidRoutePosition` · `Phalcon\Mvc\Router\Exceptions\MissingGroupRouteKey` · `Phalcon\Mvc\Router\Exceptions\MissingRouteConfigKey` · `Phalcon\Mvc\Router\Exceptions\UnknownHttpMethod` · `Phalcon\Mvc\Router\Exceptions\WrongPathsKey` · `Phalcon\Mvc\Router\Group` · `Phalcon\Mvc\Router\GroupInterface` · `Phalcon\Mvc\Router\Route` · `Phalcon\Mvc\Router\RouteInterface`

### Method Summary

<ApiItem href="#mvcrouter-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"bool","name":"defaultRoutes","default":"true"}]}>
Phalcon\Mvc\Router constructor
</ApiItem>
<ApiItem href="#mvcrouter-add" visibility="public" name="add" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"array|string|null","name":"httpMethods","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router without any HTTP constraint
</ApiItem>
<ApiItem href="#mvcrouter-addconnect" visibility="public" name="addConnect" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is CONNECT
</ApiItem>
<ApiItem href="#mvcrouter-adddelete" visibility="public" name="addDelete" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is DELETE
</ApiItem>
<ApiItem href="#mvcrouter-addget" visibility="public" name="addGet" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is GET
</ApiItem>
<ApiItem href="#mvcrouter-addhead" visibility="public" name="addHead" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is HEAD
</ApiItem>
<ApiItem href="#mvcrouter-addoptions" visibility="public" name="addOptions" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Add a route to the router that only match if the HTTP method is OPTIONS
</ApiItem>
<ApiItem href="#mvcrouter-addpatch" visibility="public" name="addPatch" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is PATCH
</ApiItem>
<ApiItem href="#mvcrouter-addpost" visibility="public" name="addPost" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is POST
</ApiItem>
<ApiItem href="#mvcrouter-addpurge" visibility="public" name="addPurge" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is PURGE
</ApiItem>
<ApiItem href="#mvcrouter-addput" visibility="public" name="addPut" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is PUT
</ApiItem>
<ApiItem href="#mvcrouter-addtrace" visibility="public" name="addTrace" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is TRACE
</ApiItem>
<ApiItem href="#mvcrouter-attach" visibility="public" name="attach" returnType="static" params={[{"type":"RouteInterface","name":"route","default":null},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Attach Route object to the routes stack.
</ApiItem>
<ApiItem href="#mvcrouter-builddispatcherdump" visibility="public" name="buildDispatcherDump" returnType="array" params={[]}>
Produces a pure-data array describing every piece of state needed
</ApiItem>
<ApiItem href="#mvcrouter-clear" visibility="public" name="clear" returnType="void" params={[]}>
Removes all the pre-defined routes
</ApiItem>
<ApiItem href="#mvcrouter-dumpdispatcher" visibility="public" name="dumpDispatcher" returnType="void" params={[{"type":"string","name":"path","default":null}]}>
File-shaped helper around buildDispatcherDump(). Writes the dump as
</ApiItem>
<ApiItem href="#mvcrouter-getactionname" visibility="public" name="getActionName" returnType="string" params={[]}>
Returns the processed action name
</ApiItem>
<ApiItem href="#mvcrouter-getcontrollername" visibility="public" name="getControllerName" returnType="string" params={[]}>
Returns the processed controller name
</ApiItem>
<ApiItem href="#mvcrouter-getdefaults" visibility="public" name="getDefaults" returnType="array" params={[]}>
Returns an array of default parameters
</ApiItem>
<ApiItem href="#mvcrouter-getkeyrouteids" visibility="public" name="getKeyRouteIds" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#mvcrouter-getkeyroutenames" visibility="public" name="getKeyRouteNames" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#mvcrouter-getmatchedroute" visibility="public" name="getMatchedRoute" returnType="RouteInterface|null" params={[]}>
Returns the route that matches the handled URI
</ApiItem>
<ApiItem href="#mvcrouter-getmatches" visibility="public" name="getMatches" returnType="array" params={[]}>
Returns the sub expressions in the regular expression matched
</ApiItem>
<ApiItem href="#mvcrouter-getmethodroutes" visibility="public" name="getMethodRoutes" returnType="array" params={[]}>
Returns routes indexed by HTTP method, building the index if needed.
</ApiItem>
<ApiItem href="#mvcrouter-getmodulename" visibility="public" name="getModuleName" returnType="string" params={[]}>
Returns the processed module name
</ApiItem>
<ApiItem href="#mvcrouter-getnamespacename" visibility="public" name="getNamespaceName" returnType="string" params={[]}>
Returns the processed namespace name
</ApiItem>
<ApiItem href="#mvcrouter-getparams" visibility="public" name="getParams" returnType="array" params={[]}>
Returns the processed parameters
</ApiItem>
<ApiItem href="#mvcrouter-getrewriteuri" visibility="public" name="getRewriteUri" returnType="string" params={[]}>
Get rewrite info. This info is read from $_GET["_url"].
</ApiItem>
<ApiItem href="#mvcrouter-getroutebyid" visibility="public" name="getRouteById" returnType="bool|RouteInterface" params={[{"type":"int|string","name":"routeId","default":null}]}>
Returns a route object by its id
</ApiItem>
<ApiItem href="#mvcrouter-getroutebyname" visibility="public" name="getRouteByName" returnType="bool|RouteInterface" params={[{"type":"string","name":"name","default":null}]}>
Returns a route object by its name
</ApiItem>
<ApiItem href="#mvcrouter-getroutes" visibility="public" name="getRoutes" returnType="array" params={[]}>
Returns all the routes defined in the router
</ApiItem>
<ApiItem href="#mvcrouter-handle" visibility="public" name="handle" returnType="void" params={[{"type":"string","name":"uri","default":null}]}>
Handles routing information received from the rewrite engine
</ApiItem>
<ApiItem href="#mvcrouter-isexactcontrollername" visibility="public" name="isExactControllerName" returnType="bool" params={[]}>
Returns whether controller name should not be mangled
</ApiItem>
<ApiItem href="#mvcrouter-loaddispatcher" visibility="public" name="loadDispatcher" returnType="void" params={[{"type":"string","name":"path","default":null}]}>
File-shaped helper around loadDispatcherFromArray(). Includes the
</ApiItem>
<ApiItem href="#mvcrouter-loaddispatcherfromarray" visibility="public" name="loadDispatcherFromArray" returnType="void" params={[{"type":"array","name":"dump","default":null}]}>
Inverse of buildDispatcherDump(). Reconstructs every Route from the
</ApiItem>
<ApiItem href="#mvcrouter-loadfromconfig" visibility="public" name="loadFromConfig" returnType="static" params={[{"type":"array|ConfigInterface","name":"config","default":null}]}>
Loads routes from an array or Phalcon\Config\Config instance.
</ApiItem>
<ApiItem href="#mvcrouter-mount" visibility="public" name="mount" returnType="static" params={[{"type":"GroupInterface","name":"group","default":null}]}>
Mounts a group of routes in the router
</ApiItem>
<ApiItem href="#mvcrouter-notfound" visibility="public" name="notFound" returnType="static" params={[{"type":"array|string","name":"paths","default":null}]}>
Set a group of paths to be returned when none of the defined routes are
</ApiItem>
<ApiItem href="#mvcrouter-removeextraslashes" visibility="public" name="removeExtraSlashes" returnType="static" params={[{"type":"bool","name":"remove","default":null}]}>
Set whether router must remove the extra slashes in the handled routes
</ApiItem>
<ApiItem href="#mvcrouter-setdefaultaction" visibility="public" name="setDefaultAction" returnType="static" params={[{"type":"string","name":"actionName","default":null}]}>
Sets the default action name
</ApiItem>
<ApiItem href="#mvcrouter-setdefaultcontroller" visibility="public" name="setDefaultController" returnType="static" params={[{"type":"string","name":"controllerName","default":null}]}>
Sets the default controller name
</ApiItem>
<ApiItem href="#mvcrouter-setdefaultmodule" visibility="public" name="setDefaultModule" returnType="static" params={[{"type":"string","name":"moduleName","default":null}]}>
Sets the name of the default module
</ApiItem>
<ApiItem href="#mvcrouter-setdefaultnamespace" visibility="public" name="setDefaultNamespace" returnType="static" params={[{"type":"string","name":"namespaceName","default":null}]}>
Sets the name of the default namespace
</ApiItem>
<ApiItem href="#mvcrouter-setdefaults" visibility="public" name="setDefaults" returnType="static" params={[{"type":"array","name":"defaults","default":null}]}>
Sets an array of default paths. If a route is missing a path the router
</ApiItem>
<ApiItem href="#mvcrouter-setkeyrouteids" visibility="public" name="setKeyRouteIds" returnType="static" params={[{"type":"array","name":"routeIds","default":null}]}>
</ApiItem>
<ApiItem href="#mvcrouter-setkeyroutenames" visibility="public" name="setKeyRouteNames" returnType="static" params={[{"type":"array","name":"routeNames","default":null}]}>
</ApiItem>
<ApiItem href="#mvcrouter-seturisource" visibility="public" name="setUriSource" returnType="static" params={[{"type":"int","name":"uriSource","default":null}]}>
Sets the URI source. One of the URI_SOURCE_* constants
</ApiItem>
<ApiItem href="#mvcrouter-usecache" visibility="public" name="useCache" returnType="void" params={[{"type":"CacheAdapterInterface","name":"cache","default":null},{"type":"string","name":"key","default":"\"phalcon.router.dispatcher\""}]}>
Cache-instance convenience wrapper. On cache hit, restores the
</ApiItem>
<ApiItem href="#mvcrouter-wasmatched" visibility="public" name="wasMatched" returnType="bool" params={[]}>
Checks if the router matches any of the defined routes
</ApiItem>
<ApiItem href="#mvcrouter-addroutefromconfig" visibility="protected" name="addRouteFromConfig" returnType="void" params={[{"type":"array","name":"routeData","default":null}]}>
Adds a single route from a config array entry. Used by loadFromConfig.
</ApiItem>
<ApiItem href="#mvcrouter-extractrealuri" visibility="protected" name="extractRealUri" returnType="string" params={[{"type":"string","name":"uri","default":null}]}>
</ApiItem>
<ApiItem href="#mvcrouter-mountgroupfromconfig" visibility="protected" name="mountGroupFromConfig" returnType="void" params={[{"type":"array","name":"groupData","default":null}]}>
Builds a Group from a config entry and mounts it. Used by loadFromConfig.
</ApiItem>
<ApiItem href="#mvcrouter-rebuildmethodindex" visibility="protected" name="rebuildMethodIndex" returnType="void" params={[]}>
Rebuilds the HTTP-method index from the current routes array.
</ApiItem>

### Constants

<ApiItem kind="constant" name="POSITION_FIRST" type="int" default="0">
</ApiItem>
<ApiItem kind="constant" name="POSITION_LAST" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="REGEX_CHUNK_SIZE" type="int" default="10">
Number of alternatives per combined-regex chunk. Empirically derived
(FastRoute uses ~10) - keeps each chunk below PCRE's optimizer cliff.
</ApiItem>
<ApiItem kind="constant" name="URI_SOURCE_GET_URL" type="int" default="0">
</ApiItem>
<ApiItem kind="constant" name="URI_SOURCE_SERVER_REQUEST_URI" type="int" default="1">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="action" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="candidatesByMethod" type="array" default="[]">
Pre-merged per-method candidate buckets in attach order. For each HTTP
method seen on any registered route, the bucket contains the
method-specific routes followed by the "*" (no-constraint) routes.
The "*" key itself holds only the no-constraint routes - used when the
request method has no specific bucket.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="combinedRegexByMethod" type="array" default="[]">
Combined PCRE pattern per method bucket (chunked list of strings).
Each chunk uses (?|...) branch reset and (*:N) mark labels. Built
only when the bucket has no hostname routes and all patterns are
the standard `#^...$#u` shape.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="combinedRegexDisabled" type="array" default="[]">
Boolean per method bucket: true when the combined regex cannot be
built.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="combinedRegexMarkMap" type="array" default="[]">
Map from MARK label back to the route index in
candidatesByMethod[method]. One per chunk.

  combinedRegexMarkMap[method][chunkIdx][markLabel] = routeIdx
</ApiItem>
<ApiItem kind="property" visibility="protected" name="controller" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultAction" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultController" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultModule" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultNamespace" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultParams" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hostnameByMethod" type="array" default="[]">
Per-method buckets of routes with hostname constraints, grouped by
raw hostname string. Routes are referenced by their integer index
into candidatesByMethod[method].
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hostnameLessByMethod" type="array" default="[]">
Per-method indices of routes without a hostname constraint, in
attach order.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="keyRouteIds" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="keyRouteNames" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="matchedRoute" type="RouteInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="matches" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="methodRoutes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="methodRoutesDirty" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="module" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="namespaceName" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="notFoundPaths" type="array|string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="params" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="pendingCache" type="CacheAdapterInterface|null" default="null">
Lazy-write cache target set by useCache(). When non-null, handle()
writes buildDispatcherDump() to this cache after a successful
rebuild on cache miss, then clears the property to skip subsequent
writes.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="pendingCacheKey" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="removeExtraSlashes" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="routeMeta" type="array" default="[]">
Single-source per-route metadata cache. One entry per route, keyed
by the route's intrinsic id. Replaces the previous per-method-bucket
replication of metadata arrays. Built once in rebuildMethodIndex().

Shape: routeMeta[routeId] = [
    "pattern":     string,
    "isRegex":     bool,
    "hostname":    string|null,
    "hostRegex":   string|null,
    "beforeMatch": callable|null
  ]
</ApiItem>
<ApiItem kind="property" visibility="protected" name="routes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="staticByMethod" type="array" default="[]">
Static-route hash, populated by rebuildMethodIndex(). For each method
bucket (including "*"), maps URI => list of routes whose compiled
pattern is a literal string equal to that URI.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="staticShadowedByMethod" type="array" default="[]">
Shadow-detection map. If staticShadowedByMethod[method][uri] is set,
the static URI in that bucket is shadowed by a later-attached regex
route - the fast path MUST NOT be used; fall through to the dynamic
loop so the regex wins (reverse-iteration semantics).
</ApiItem>
<ApiItem kind="property" visibility="protected" name="uriSource" type="int" default="self::URI_SOURCE_GET_URL">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="wasMatched" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="mvcrouter-__construct"><code>__construct()</code></h4>

```php
public function __construct( bool $defaultRoutes = true );
```

Phalcon\Mvc\Router constructor

<h4 id="mvcrouter-add"><code>add()</code></h4>

```php
public function add(
string $pattern,
array|string|null $paths = null,
array|string|null $httpMethods = null,
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

<h4 id="mvcrouter-addconnect"><code>addConnect()</code></h4>

```php
public function addConnect(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is CONNECT

<h4 id="mvcrouter-adddelete"><code>addDelete()</code></h4>

```php
public function addDelete(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is DELETE

<h4 id="mvcrouter-addget"><code>addGet()</code></h4>

```php
public function addGet(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is GET

<h4 id="mvcrouter-addhead"><code>addHead()</code></h4>

```php
public function addHead(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is HEAD

<h4 id="mvcrouter-addoptions"><code>addOptions()</code></h4>

```php
public function addOptions(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Add a route to the router that only match if the HTTP method is OPTIONS

<h4 id="mvcrouter-addpatch"><code>addPatch()</code></h4>

```php
public function addPatch(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PATCH

<h4 id="mvcrouter-addpost"><code>addPost()</code></h4>

```php
public function addPost(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is POST

<h4 id="mvcrouter-addpurge"><code>addPurge()</code></h4>

```php
public function addPurge(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PURGE
(Squid and Varnish support)

<h4 id="mvcrouter-addput"><code>addPut()</code></h4>

```php
public function addPut(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PUT

<h4 id="mvcrouter-addtrace"><code>addTrace()</code></h4>

```php
public function addTrace(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is TRACE

<h4 id="mvcrouter-attach"><code>attach()</code></h4>

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

<h4 id="mvcrouter-builddispatcherdump"><code>buildDispatcherDump()</code></h4>

```php
public function buildDispatcherDump(): array;
```

Produces a pure-data array describing every piece of state needed
to reconstruct this router. The returned array is var_export-able
(no objects, no closures). Used by dumpDispatcher() and by
Phalcon\Cache integration via useCache().

Throws when a route has a Closure beforeMatch or converter - those
cannot be cached.

<h4 id="mvcrouter-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Removes all the pre-defined routes

<h4 id="mvcrouter-dumpdispatcher"><code>dumpDispatcher()</code></h4>

```php
public function dumpDispatcher( string $path ): void;
```

File-shaped helper around buildDispatcherDump(). Writes the dump as
a `<?php return [...];` file, atomically (temp + rename) so concurrent
dumps don't corrupt the result.

<h4 id="mvcrouter-getactionname"><code>getActionName()</code></h4>

```php
public function getActionName(): string;
```

Returns the processed action name

<h4 id="mvcrouter-getcontrollername"><code>getControllerName()</code></h4>

```php
public function getControllerName(): string;
```

Returns the processed controller name

<h4 id="mvcrouter-getdefaults"><code>getDefaults()</code></h4>

```php
public function getDefaults(): array;
```

Returns an array of default parameters

<h4 id="mvcrouter-getkeyrouteids"><code>getKeyRouteIds()</code></h4>

```php
public function getKeyRouteIds(): array;
```

<h4 id="mvcrouter-getkeyroutenames"><code>getKeyRouteNames()</code></h4>

```php
public function getKeyRouteNames(): array;
```

<h4 id="mvcrouter-getmatchedroute"><code>getMatchedRoute()</code></h4>

```php
public function getMatchedRoute(): RouteInterface|null;
```

Returns the route that matches the handled URI

<h4 id="mvcrouter-getmatches"><code>getMatches()</code></h4>

```php
public function getMatches(): array;
```

Returns the sub expressions in the regular expression matched

<h4 id="mvcrouter-getmethodroutes"><code>getMethodRoutes()</code></h4>

```php
public function getMethodRoutes(): array;
```

Returns routes indexed by HTTP method, building the index if needed.
Unconstrained routes are stored under the "*" key.

<h4 id="mvcrouter-getmodulename"><code>getModuleName()</code></h4>

```php
public function getModuleName(): string;
```

Returns the processed module name

<h4 id="mvcrouter-getnamespacename"><code>getNamespaceName()</code></h4>

```php
public function getNamespaceName(): string;
```

Returns the processed namespace name

<h4 id="mvcrouter-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array;
```

Returns the processed parameters

<h4 id="mvcrouter-getrewriteuri"><code>getRewriteUri()</code></h4>

```php
public function getRewriteUri(): string;
```

Get rewrite info. This info is read from $_GET["_url"].
This returns '/' if the rewrite information cannot be read

<h4 id="mvcrouter-getroutebyid"><code>getRouteById()</code></h4>

```php
public function getRouteById( int|string $routeId ): bool|RouteInterface;
```

Returns a route object by its id

<h4 id="mvcrouter-getroutebyname"><code>getRouteByName()</code></h4>

```php
public function getRouteByName( string $name ): bool|RouteInterface;
```

Returns a route object by its name

<h4 id="mvcrouter-getroutes"><code>getRoutes()</code></h4>

```php
public function getRoutes(): array;
```

Returns all the routes defined in the router

<h4 id="mvcrouter-handle"><code>handle()</code></h4>

```php
public function handle( string $uri ): void;
```

Handles routing information received from the rewrite engine

```php
// Passing a URL
$router->handle("/posts/edit/1");
```

<h4 id="mvcrouter-isexactcontrollername"><code>isExactControllerName()</code></h4>

```php
public function isExactControllerName(): bool;
```

Returns whether controller name should not be mangled

<h4 id="mvcrouter-loaddispatcher"><code>loadDispatcher()</code></h4>

```php
public function loadDispatcher( string $path ): void;
```

File-shaped helper around loadDispatcherFromArray(). Includes the
file (opcache-friendly) and forwards the return value.

<h4 id="mvcrouter-loaddispatcherfromarray"><code>loadDispatcherFromArray()</code></h4>

```php
public function loadDispatcherFromArray( array $dump ): void;
```

Inverse of buildDispatcherDump(). Reconstructs every Route from the
scalar `routes` entries (preserving subclass and routeId), restores
every index, and marks the indexes clean so handle() skips rebuild.

<h4 id="mvcrouter-loadfromconfig"><code>loadFromConfig()</code></h4>

```php
public function loadFromConfig( array|ConfigInterface $config ): static;
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

<h4 id="mvcrouter-mount"><code>mount()</code></h4>

```php
public function mount( GroupInterface $group ): static;
```

Mounts a group of routes in the router

<h4 id="mvcrouter-notfound"><code>notFound()</code></h4>

```php
public function notFound( array|string $paths ): static;
```

Set a group of paths to be returned when none of the defined routes are
matched

<h4 id="mvcrouter-removeextraslashes"><code>removeExtraSlashes()</code></h4>

```php
public function removeExtraSlashes( bool $remove ): static;
```

Set whether router must remove the extra slashes in the handled routes

<h4 id="mvcrouter-setdefaultaction"><code>setDefaultAction()</code></h4>

```php
public function setDefaultAction( string $actionName ): static;
```

Sets the default action name

<h4 id="mvcrouter-setdefaultcontroller"><code>setDefaultController()</code></h4>

```php
public function setDefaultController( string $controllerName ): static;
```

Sets the default controller name

<h4 id="mvcrouter-setdefaultmodule"><code>setDefaultModule()</code></h4>

```php
public function setDefaultModule( string $moduleName ): static;
```

Sets the name of the default module

<h4 id="mvcrouter-setdefaultnamespace"><code>setDefaultNamespace()</code></h4>

```php
public function setDefaultNamespace( string $namespaceName ): static;
```

Sets the name of the default namespace

<h4 id="mvcrouter-setdefaults"><code>setDefaults()</code></h4>

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

<h4 id="mvcrouter-setkeyrouteids"><code>setKeyRouteIds()</code></h4>

```php
public function setKeyRouteIds( array $routeIds ): static;
```

<h4 id="mvcrouter-setkeyroutenames"><code>setKeyRouteNames()</code></h4>

```php
public function setKeyRouteNames( array $routeNames ): static;
```

<h4 id="mvcrouter-seturisource"><code>setUriSource()</code></h4>

```php
public function setUriSource( int $uriSource ): static;
```

Sets the URI source. One of the URI_SOURCE_* constants

```php
$router->setUriSource(
Router::URI_SOURCE_SERVER_REQUEST_URI
);
```

<h4 id="mvcrouter-usecache"><code>useCache()</code></h4>

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

<h4 id="mvcrouter-wasmatched"><code>wasMatched()</code></h4>

```php
public function wasMatched(): bool;
```

Checks if the router matches any of the defined routes

<h4 id="mvcrouter-addroutefromconfig"><code>addRouteFromConfig()</code></h4>

```php
protected function addRouteFromConfig( array $routeData ): void;
```

Adds a single route from a config array entry. Used by loadFromConfig.

<h4 id="mvcrouter-extractrealuri"><code>extractRealUri()</code></h4>

```php
protected function extractRealUri( string $uri ): string;
```

<h4 id="mvcrouter-mountgroupfromconfig"><code>mountGroupFromConfig()</code></h4>

```php
protected function mountGroupFromConfig( array $groupData ): void;
```

Builds a Group from a config entry and mounts it. Used by loadFromConfig.

<h4 id="mvcrouter-rebuildmethodindex"><code>rebuildMethodIndex()</code></h4>

```php
protected function rebuildMethodIndex(): void;
```

Rebuilds the HTTP-method index from the current routes array.
Routes with no HTTP method constraint are filed under "*".

## Mvc\RouterInterface

Interface

Interface for Phalcon\Mvc\Router

- **`Phalcon\Mvc\RouterInterface`**

`Phalcon\Config\ConfigInterface` · `Phalcon\Mvc\Router\GroupInterface` · `Phalcon\Mvc\Router\RouteInterface`

### Method Summary

<ApiItem href="#mvcrouterinterface-add" visibility="public" name="add" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"array|string|null","name":"httpMethods","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router on any HTTP method
</ApiItem>
<ApiItem href="#mvcrouterinterface-addconnect" visibility="public" name="addConnect" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is CONNECT
</ApiItem>
<ApiItem href="#mvcrouterinterface-adddelete" visibility="public" name="addDelete" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is DELETE
</ApiItem>
<ApiItem href="#mvcrouterinterface-addget" visibility="public" name="addGet" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is GET
</ApiItem>
<ApiItem href="#mvcrouterinterface-addhead" visibility="public" name="addHead" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is HEAD
</ApiItem>
<ApiItem href="#mvcrouterinterface-addoptions" visibility="public" name="addOptions" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Add a route to the router that only match if the HTTP method is OPTIONS
</ApiItem>
<ApiItem href="#mvcrouterinterface-addpatch" visibility="public" name="addPatch" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is PATCH
</ApiItem>
<ApiItem href="#mvcrouterinterface-addpost" visibility="public" name="addPost" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is POST
</ApiItem>
<ApiItem href="#mvcrouterinterface-addpurge" visibility="public" name="addPurge" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is PURGE
</ApiItem>
<ApiItem href="#mvcrouterinterface-addput" visibility="public" name="addPut" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is PUT
</ApiItem>
<ApiItem href="#mvcrouterinterface-addtrace" visibility="public" name="addTrace" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Adds a route to the router that only match if the HTTP method is TRACE
</ApiItem>
<ApiItem href="#mvcrouterinterface-attach" visibility="public" name="attach" returnType="RouterInterface" params={[{"type":"RouteInterface","name":"route","default":null},{"type":"int","name":"position","default":"Router::POSITION_LAST"}]}>
Attach Route object to the routes stack.
</ApiItem>
<ApiItem href="#mvcrouterinterface-clear" visibility="public" name="clear" returnType="void" params={[]}>
Removes all the defined routes
</ApiItem>
<ApiItem href="#mvcrouterinterface-getactionname" visibility="public" name="getActionName" returnType="string" params={[]}>
Returns processed action name
</ApiItem>
<ApiItem href="#mvcrouterinterface-getcontrollername" visibility="public" name="getControllerName" returnType="string" params={[]}>
Returns processed controller name
</ApiItem>
<ApiItem href="#mvcrouterinterface-getmatchedroute" visibility="public" name="getMatchedRoute" returnType="RouteInterface|null" params={[]}>
Returns the route that matches the handled URI
</ApiItem>
<ApiItem href="#mvcrouterinterface-getmatches" visibility="public" name="getMatches" returnType="array" params={[]}>
Return the sub expressions in the regular expression matched
</ApiItem>
<ApiItem href="#mvcrouterinterface-getmodulename" visibility="public" name="getModuleName" returnType="string" params={[]}>
Returns processed module name
</ApiItem>
<ApiItem href="#mvcrouterinterface-getnamespacename" visibility="public" name="getNamespaceName" returnType="string" params={[]}>
Returns processed namespace name
</ApiItem>
<ApiItem href="#mvcrouterinterface-getparams" visibility="public" name="getParams" returnType="array" params={[]}>
Returns processed extra params
</ApiItem>
<ApiItem href="#mvcrouterinterface-getroutebyid" visibility="public" name="getRouteById" returnType="bool|RouteInterface" params={[{"type":"int|string","name":"routeId","default":null}]}>
Returns a route object by its id
</ApiItem>
<ApiItem href="#mvcrouterinterface-getroutebyname" visibility="public" name="getRouteByName" returnType="bool|RouteInterface" params={[{"type":"string","name":"name","default":null}]}>
Returns a route object by its name
</ApiItem>
<ApiItem href="#mvcrouterinterface-getroutes" visibility="public" name="getRoutes" returnType="array" params={[]}>
Return all the routes defined in the router
</ApiItem>
<ApiItem href="#mvcrouterinterface-handle" visibility="public" name="handle" returnType="void" params={[{"type":"string","name":"uri","default":null}]}>
Handles routing information received from the rewrite engine
</ApiItem>
<ApiItem href="#mvcrouterinterface-loadfromconfig" visibility="public" name="loadFromConfig" returnType="RouterInterface" params={[{"type":"array|ConfigInterface","name":"config","default":null}]}>
Loads routes from an array or Phalcon\Config\Config instance.
</ApiItem>
<ApiItem href="#mvcrouterinterface-mount" visibility="public" name="mount" returnType="RouterInterface" params={[{"type":"GroupInterface","name":"group","default":null}]}>
Mounts a group of routes in the router
</ApiItem>
<ApiItem href="#mvcrouterinterface-setdefaultaction" visibility="public" name="setDefaultAction" returnType="RouterInterface" params={[{"type":"string","name":"actionName","default":null}]}>
Sets the default action name
</ApiItem>
<ApiItem href="#mvcrouterinterface-setdefaultcontroller" visibility="public" name="setDefaultController" returnType="RouterInterface" params={[{"type":"string","name":"controllerName","default":null}]}>
Sets the default controller name
</ApiItem>
<ApiItem href="#mvcrouterinterface-setdefaultmodule" visibility="public" name="setDefaultModule" returnType="RouterInterface" params={[{"type":"string","name":"moduleName","default":null}]}>
Sets the name of the default module
</ApiItem>
<ApiItem href="#mvcrouterinterface-setdefaults" visibility="public" name="setDefaults" returnType="RouterInterface" params={[{"type":"array","name":"defaults","default":null}]}>
Sets an array of default paths
</ApiItem>
<ApiItem href="#mvcrouterinterface-wasmatched" visibility="public" name="wasMatched" returnType="bool" params={[]}>
Check if the router matches any of the defined routes
</ApiItem>

### Methods

<h4 id="mvcrouterinterface-add"><code>add()</code></h4>

```php
public function add(
string $pattern,
array|string|null $paths = null,
array|string|null $httpMethods = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router on any HTTP method

<h4 id="mvcrouterinterface-addconnect"><code>addConnect()</code></h4>

```php
public function addConnect(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is CONNECT

<h4 id="mvcrouterinterface-adddelete"><code>addDelete()</code></h4>

```php
public function addDelete(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is DELETE

<h4 id="mvcrouterinterface-addget"><code>addGet()</code></h4>

```php
public function addGet(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is GET

<h4 id="mvcrouterinterface-addhead"><code>addHead()</code></h4>

```php
public function addHead(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is HEAD

<h4 id="mvcrouterinterface-addoptions"><code>addOptions()</code></h4>

```php
public function addOptions(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Add a route to the router that only match if the HTTP method is OPTIONS

<h4 id="mvcrouterinterface-addpatch"><code>addPatch()</code></h4>

```php
public function addPatch(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PATCH

<h4 id="mvcrouterinterface-addpost"><code>addPost()</code></h4>

```php
public function addPost(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is POST

<h4 id="mvcrouterinterface-addpurge"><code>addPurge()</code></h4>

```php
public function addPurge(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PURGE
(Squid and Varnish support)

<h4 id="mvcrouterinterface-addput"><code>addPut()</code></h4>

```php
public function addPut(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PUT

<h4 id="mvcrouterinterface-addtrace"><code>addTrace()</code></h4>

```php
public function addTrace(
string $pattern,
array|string|null $paths = null,
int $position = Router::POSITION_LAST
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is TRACE

<h4 id="mvcrouterinterface-attach"><code>attach()</code></h4>

```php
public function attach(
RouteInterface $route,
int $position = Router::POSITION_LAST
): RouterInterface;
```

Attach Route object to the routes stack.

<h4 id="mvcrouterinterface-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Removes all the defined routes

<h4 id="mvcrouterinterface-getactionname"><code>getActionName()</code></h4>

```php
public function getActionName(): string;
```

Returns processed action name

<h4 id="mvcrouterinterface-getcontrollername"><code>getControllerName()</code></h4>

```php
public function getControllerName(): string;
```

Returns processed controller name

<h4 id="mvcrouterinterface-getmatchedroute"><code>getMatchedRoute()</code></h4>

```php
public function getMatchedRoute(): RouteInterface|null;
```

Returns the route that matches the handled URI

<h4 id="mvcrouterinterface-getmatches"><code>getMatches()</code></h4>

```php
public function getMatches(): array;
```

Return the sub expressions in the regular expression matched

<h4 id="mvcrouterinterface-getmodulename"><code>getModuleName()</code></h4>

```php
public function getModuleName(): string;
```

Returns processed module name

<h4 id="mvcrouterinterface-getnamespacename"><code>getNamespaceName()</code></h4>

```php
public function getNamespaceName(): string;
```

Returns processed namespace name

<h4 id="mvcrouterinterface-getparams"><code>getParams()</code></h4>

```php
public function getParams(): array;
```

Returns processed extra params

<h4 id="mvcrouterinterface-getroutebyid"><code>getRouteById()</code></h4>

```php
public function getRouteById( int|string $routeId ): bool|RouteInterface;
```

Returns a route object by its id

<h4 id="mvcrouterinterface-getroutebyname"><code>getRouteByName()</code></h4>

```php
public function getRouteByName( string $name ): bool|RouteInterface;
```

Returns a route object by its name

<h4 id="mvcrouterinterface-getroutes"><code>getRoutes()</code></h4>

```php
public function getRoutes(): array;
```

Return all the routes defined in the router

<h4 id="mvcrouterinterface-handle"><code>handle()</code></h4>

```php
public function handle( string $uri ): void;
```

Handles routing information received from the rewrite engine

<h4 id="mvcrouterinterface-loadfromconfig"><code>loadFromConfig()</code></h4>

```php
public function loadFromConfig( array|ConfigInterface $config ): RouterInterface;
```

Loads routes from an array or Phalcon\Config\Config instance.

<h4 id="mvcrouterinterface-mount"><code>mount()</code></h4>

```php
public function mount( GroupInterface $group ): RouterInterface;
```

Mounts a group of routes in the router

<h4 id="mvcrouterinterface-setdefaultaction"><code>setDefaultAction()</code></h4>

```php
public function setDefaultAction( string $actionName ): RouterInterface;
```

Sets the default action name

<h4 id="mvcrouterinterface-setdefaultcontroller"><code>setDefaultController()</code></h4>

```php
public function setDefaultController( string $controllerName ): RouterInterface;
```

Sets the default controller name

<h4 id="mvcrouterinterface-setdefaultmodule"><code>setDefaultModule()</code></h4>

```php
public function setDefaultModule( string $moduleName ): RouterInterface;
```

Sets the name of the default module

<h4 id="mvcrouterinterface-setdefaults"><code>setDefaults()</code></h4>

```php
public function setDefaults( array $defaults ): RouterInterface;
```

Sets an array of default paths

<h4 id="mvcrouterinterface-wasmatched"><code>wasMatched()</code></h4>

```php
public function wasMatched(): bool;
```

Check if the router matches any of the defined routes

## Mvc\Router\Annotations

Class

A router that reads routes annotations from classes/resources

```php
use Phalcon\Mvc\Router\Annotations;

$di->setShared(
"router",
function() {
    // Use the annotations router
    $router = new Annotations(false);

    // This will do the same as above but only if the handled uri
    // starts with /invoices
    $router->addResource("Invoices", "/invoices");

    return $router;
}
);
```

- `\stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/6.0/api/phalcon_di/#diabstractinjectionaware)
- [`Phalcon\Mvc\Router`](#mvcrouter)
- **`Phalcon\Mvc\Router\Annotations`**

`Phalcon\Annotations\Adapter\Memory` · `Phalcon\Annotations\Parser\Annotation` · `Phalcon\Annotations\Parser\Exception` · `Phalcon\Di\DiInterface` · `Phalcon\Events\Exception` · `Phalcon\Mvc\Router` · `Phalcon\Traits\Support\Helper\Str\UncamelizeTrait`

### Method Summary

<ApiItem href="#mvcrouterannotations-addmoduleresource" visibility="public" name="addModuleResource" returnType="static" params={[{"type":"string","name":"module","default":null},{"type":"string","name":"handler","default":null},{"type":"string|null","name":"prefix","default":"null"}]}>
Adds a resource to the annotations handler
</ApiItem>
<ApiItem href="#mvcrouterannotations-addresource" visibility="public" name="addResource" returnType="static" params={[{"type":"string","name":"handler","default":null},{"type":"string|null","name":"prefix","default":"null"}]}>
Adds a resource to the annotations handler
</ApiItem>
<ApiItem href="#mvcrouterannotations-getactionpreformatcallback" visibility="public" name="getActionPreformatCallback" returnType="callable|string|null" params={[]}>
</ApiItem>
<ApiItem href="#mvcrouterannotations-getresources" visibility="public" name="getResources" returnType="array" params={[]}>
Return the registered resources
</ApiItem>
<ApiItem href="#mvcrouterannotations-handle" visibility="public" name="handle" returnType="void" params={[{"type":"string","name":"uri","default":null}]}>
Produce the routing parameters from the rewrite information
</ApiItem>
<ApiItem href="#mvcrouterannotations-processactionannotation" visibility="public" name="processActionAnnotation" returnType="void" params={[{"type":"string","name":"module","default":null},{"type":"string","name":"namespaceName","default":null},{"type":"string","name":"controller","default":null},{"type":"string","name":"action","default":null},{"type":"Annotation","name":"annotation","default":null}]}>
Checks for annotations in the public methods of the controller
</ApiItem>
<ApiItem href="#mvcrouterannotations-processcontrollerannotation" visibility="public" name="processControllerAnnotation" returnType="void" params={[{"type":"Annotation","name":"annotation","default":null}]}>
Checks for annotations in the controller docblock
</ApiItem>
<ApiItem href="#mvcrouterannotations-setactionpreformatcallback" visibility="public" name="setActionPreformatCallback" returnType="static" params={[{"type":"callable|string|null","name":"callback","default":"null"}]}>
Sets the action preformat callback
</ApiItem>
<ApiItem href="#mvcrouterannotations-setactionsuffix" visibility="public" name="setActionSuffix" returnType="static" params={[{"type":"string","name":"actionSuffix","default":null}]}>
Changes the action method suffix
</ApiItem>
<ApiItem href="#mvcrouterannotations-setcontrollersuffix" visibility="public" name="setControllerSuffix" returnType="static" params={[{"type":"string","name":"controllerSuffix","default":null}]}>
Changes the controller class suffix
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="actionPreformatCallback" type="mixed" default="null">
@mixed callable|string|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="actionSuffix" type="string" default="&quot;Action&quot;">
@mixed string
</ApiItem>
<ApiItem kind="property" visibility="protected" name="controllerSuffix" type="string" default="&quot;Controller&quot;">
@mixed string
</ApiItem>
<ApiItem kind="property" visibility="protected" name="handlers" type="array" default="[]">
@mixed array
</ApiItem>
<ApiItem kind="property" visibility="protected" name="routePrefix" type="string" default="&quot;&quot;">
@mixed string
</ApiItem>

### Methods

<h4 id="mvcrouterannotations-addmoduleresource"><code>addModuleResource()</code></h4>

```php
public function addModuleResource(
string $module,
string $handler,
string|null $prefix = null
): static;
```

Adds a resource to the annotations handler
A resource is a class that contains routing annotations
The class is located in a module

<h4 id="mvcrouterannotations-addresource"><code>addResource()</code></h4>

```php
public function addResource(
string $handler,
string|null $prefix = null
): static;
```

Adds a resource to the annotations handler
A resource is a class that contains routing annotations

<h4 id="mvcrouterannotations-getactionpreformatcallback"><code>getActionPreformatCallback()</code></h4>

```php
public function getActionPreformatCallback(): callable|string|null;
```

<h4 id="mvcrouterannotations-getresources"><code>getResources()</code></h4>

```php
public function getResources(): array;
```

Return the registered resources

<h4 id="mvcrouterannotations-handle"><code>handle()</code></h4>

```php
public function handle( string $uri ): void;
```

Produce the routing parameters from the rewrite information

<h4 id="mvcrouterannotations-processactionannotation"><code>processActionAnnotation()</code></h4>

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

<h4 id="mvcrouterannotations-processcontrollerannotation"><code>processControllerAnnotation()</code></h4>

```php
public function processControllerAnnotation( Annotation $annotation ): void;
```

Checks for annotations in the controller docblock

<h4 id="mvcrouterannotations-setactionpreformatcallback"><code>setActionPreformatCallback()</code></h4>

```php
public function setActionPreformatCallback( callable|string|null $callback = null ): static;
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

<h4 id="mvcrouterannotations-setactionsuffix"><code>setActionSuffix()</code></h4>

```php
public function setActionSuffix( string $actionSuffix ): static;
```

Changes the action method suffix

<h4 id="mvcrouterannotations-setcontrollersuffix"><code>setControllerSuffix()</code></h4>

```php
public function setControllerSuffix( string $controllerSuffix ): static;
```

Changes the controller class suffix

## Mvc\Router\Exception

Class

Exceptions thrown in Phalcon\Mvc\Router will use this class

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

## Mvc\Router\Exceptions\AnnotationsServiceUnavailable

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\AnnotationsServiceUnavailable`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsannotationsserviceunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsannotationsserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\BeforeMatchNotCallable

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\BeforeMatchNotCallable`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsbeforematchnotcallable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsbeforematchnotcallable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\ConfigKeyMustBeArray

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\ConfigKeyMustBeArray`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsconfigkeymustbearray-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"key","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsconfigkeymustbearray-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $key );
```

## Mvc\Router\Exceptions\EmptyGroupOfRoutes

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\EmptyGroupOfRoutes`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsemptygroupofroutes-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsemptygroupofroutes-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\GroupRoutesMustBeArray

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\GroupRoutesMustBeArray`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsgrouproutesmustbearray-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsgrouproutesmustbearray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\InvalidCallbackParameter

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\InvalidCallbackParameter`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsinvalidcallbackparameter-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsinvalidcallbackparameter-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\InvalidConfigSource

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\InvalidConfigSource`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsinvalidconfigsource-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsinvalidconfigsource-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\InvalidNotFoundPaths

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\InvalidNotFoundPaths`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsinvalidnotfoundpaths-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsinvalidnotfoundpaths-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\InvalidRoutePaths

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\InvalidRoutePaths`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsinvalidroutepaths-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsinvalidroutepaths-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\InvalidRoutePosition

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\InvalidRoutePosition`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsinvalidrouteposition-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsinvalidrouteposition-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\InvalidRouterFactoryConfig

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\InvalidRouterFactoryConfig`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsinvalidrouterfactoryconfig-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsinvalidrouterfactoryconfig-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\MissingGroupRouteKey

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\MissingGroupRouteKey`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsmissinggrouproutekey-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"key","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsmissinggrouproutekey-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $key );
```

## Mvc\Router\Exceptions\MissingRouteConfigKey

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\MissingRouteConfigKey`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsmissingrouteconfigkey-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"key","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsmissingrouteconfigkey-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $key );
```

## Mvc\Router\Exceptions\RequestServiceUnavailable

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\RequestServiceUnavailable`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsrequestserviceunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsrequestserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Router\Exceptions\UnknownHttpMethod

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\UnknownHttpMethod`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionsunknownhttpmethod-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"method","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionsunknownhttpmethod-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $method );
```

## Mvc\Router\Exceptions\WrongPathsKey

Class

- `\Exception`
- [`Phalcon\Mvc\Router\Exception`](#mvcrouterexception)
- **`Phalcon\Mvc\Router\Exceptions\WrongPathsKey`**

`Phalcon\Mvc\Router\Exception`

### Method Summary

<ApiItem href="#mvcrouterexceptionswrongpathskey-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"part","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcrouterexceptionswrongpathskey-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $part );
```

## Mvc\Router\Group

Class

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

- **`Phalcon\Mvc\Router\Group`** - implements [`Phalcon\Mvc\Router\GroupInterface`](#mvcroutergroupinterface)

### Method Summary

<ApiItem href="#mvcroutergroup-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"paths","default":"null"}]}>
Phalcon\Mvc\Router\Group constructor
</ApiItem>
<ApiItem href="#mvcroutergroup-add" visibility="public" name="add" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"array|string|null","name":"httpMethods","default":"null"}]}>
Adds a route to the router on any HTTP method
</ApiItem>
<ApiItem href="#mvcroutergroup-addconnect" visibility="public" name="addConnect" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is CONNECT
</ApiItem>
<ApiItem href="#mvcroutergroup-adddelete" visibility="public" name="addDelete" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is DELETE
</ApiItem>
<ApiItem href="#mvcroutergroup-addget" visibility="public" name="addGet" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is GET
</ApiItem>
<ApiItem href="#mvcroutergroup-addhead" visibility="public" name="addHead" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is HEAD
</ApiItem>
<ApiItem href="#mvcroutergroup-addoptions" visibility="public" name="addOptions" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Add a route to the router that only match if the HTTP method is OPTIONS
</ApiItem>
<ApiItem href="#mvcroutergroup-addpatch" visibility="public" name="addPatch" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is PATCH
</ApiItem>
<ApiItem href="#mvcroutergroup-addpost" visibility="public" name="addPost" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is POST
</ApiItem>
<ApiItem href="#mvcroutergroup-addpurge" visibility="public" name="addPurge" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is PURGE
</ApiItem>
<ApiItem href="#mvcroutergroup-addput" visibility="public" name="addPut" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is PUT
</ApiItem>
<ApiItem href="#mvcroutergroup-addtrace" visibility="public" name="addTrace" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is TRACE
</ApiItem>
<ApiItem href="#mvcroutergroup-beforematch" visibility="public" name="beforeMatch" returnType="GroupInterface" params={[{"type":"callable","name":"beforeMatch","default":null}]}>
Sets a callback that is called if the route is matched.
</ApiItem>
<ApiItem href="#mvcroutergroup-clear" visibility="public" name="clear" returnType="void" params={[]}>
Removes all the pre-defined routes
</ApiItem>
<ApiItem href="#mvcroutergroup-getbeforematch" visibility="public" name="getBeforeMatch" returnType="callable|null" params={[]}>
Returns the 'before match' callback if any
</ApiItem>
<ApiItem href="#mvcroutergroup-gethostname" visibility="public" name="getHostname" returnType="string|null" params={[]}>
Returns the hostname restriction
</ApiItem>
<ApiItem href="#mvcroutergroup-getpaths" visibility="public" name="getPaths" returnType="array|string|null" params={[]}>
Returns the common paths defined for this group
</ApiItem>
<ApiItem href="#mvcroutergroup-getprefix" visibility="public" name="getPrefix" returnType="string|null" params={[]}>
Returns the common prefix for all the routes
</ApiItem>
<ApiItem href="#mvcroutergroup-getroutes" visibility="public" name="getRoutes" returnType="array" params={[]}>
Returns the routes added to the group
</ApiItem>
<ApiItem href="#mvcroutergroup-sethostname" visibility="public" name="setHostname" returnType="GroupInterface" params={[{"type":"string","name":"hostname","default":null}]}>
Set a hostname restriction for all the routes in the group
</ApiItem>
<ApiItem href="#mvcroutergroup-setpaths" visibility="public" name="setPaths" returnType="GroupInterface" params={[{"type":"array|string","name":"paths","default":null}]}>
Set common paths for all the routes in the group
</ApiItem>
<ApiItem href="#mvcroutergroup-setprefix" visibility="public" name="setPrefix" returnType="GroupInterface" params={[{"type":"string","name":"prefix","default":null}]}>
Set a common uri prefix for all the routes in this group
</ApiItem>
<ApiItem href="#mvcroutergroup-addroute" visibility="protected" name="addRoute" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"array|string|null","name":"httpMethods","default":"null"}]}>
Adds a route applying the common attributes
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="beforeMatch" type="mixed" default="null">
@mixed $callable|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hostname" type="string|null" default="null">
@mixed string|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="paths" type="array|string|null" default="null">
@mixed array|string|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="prefix" type="string|null" default="null">
@mixed string|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="routes" type="array" default="[]">
@mixed array
</ApiItem>

### Methods

<h4 id="mvcroutergroup-__construct"><code>__construct()</code></h4>

```php
public function __construct( mixed $paths = null );
```

Phalcon\Mvc\Router\Group constructor

<h4 id="mvcroutergroup-add"><code>add()</code></h4>

```php
public function add(
string $pattern,
array|string|null $paths = null,
array|string|null $httpMethods = null
): RouteInterface;
```

Adds a route to the router on any HTTP method

```php
$router->add("/about", "About::index");
```

<h4 id="mvcroutergroup-addconnect"><code>addConnect()</code></h4>

```php
public function addConnect(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is CONNECT

<h4 id="mvcroutergroup-adddelete"><code>addDelete()</code></h4>

```php
public function addDelete(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is DELETE

<h4 id="mvcroutergroup-addget"><code>addGet()</code></h4>

```php
public function addGet(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is GET

<h4 id="mvcroutergroup-addhead"><code>addHead()</code></h4>

```php
public function addHead(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is HEAD

<h4 id="mvcroutergroup-addoptions"><code>addOptions()</code></h4>

```php
public function addOptions(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Add a route to the router that only match if the HTTP method is OPTIONS

<h4 id="mvcroutergroup-addpatch"><code>addPatch()</code></h4>

```php
public function addPatch(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PATCH

<h4 id="mvcroutergroup-addpost"><code>addPost()</code></h4>

```php
public function addPost(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is POST

<h4 id="mvcroutergroup-addpurge"><code>addPurge()</code></h4>

```php
public function addPurge(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PURGE

<h4 id="mvcroutergroup-addput"><code>addPut()</code></h4>

```php
public function addPut(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PUT

<h4 id="mvcroutergroup-addtrace"><code>addTrace()</code></h4>

```php
public function addTrace(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is TRACE

<h4 id="mvcroutergroup-beforematch"><code>beforeMatch()</code></h4>

```php
public function beforeMatch( callable $beforeMatch ): GroupInterface;
```

Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched

<h4 id="mvcroutergroup-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Removes all the pre-defined routes

<h4 id="mvcroutergroup-getbeforematch"><code>getBeforeMatch()</code></h4>

```php
public function getBeforeMatch(): callable|null;
```

Returns the 'before match' callback if any

<h4 id="mvcroutergroup-gethostname"><code>getHostname()</code></h4>

```php
public function getHostname(): string|null;
```

Returns the hostname restriction

<h4 id="mvcroutergroup-getpaths"><code>getPaths()</code></h4>

```php
public function getPaths(): array|string|null;
```

Returns the common paths defined for this group

<h4 id="mvcroutergroup-getprefix"><code>getPrefix()</code></h4>

```php
public function getPrefix(): string|null;
```

Returns the common prefix for all the routes

<h4 id="mvcroutergroup-getroutes"><code>getRoutes()</code></h4>

```php
public function getRoutes(): array;
```

Returns the routes added to the group

<h4 id="mvcroutergroup-sethostname"><code>setHostname()</code></h4>

```php
public function setHostname( string $hostname ): GroupInterface;
```

Set a hostname restriction for all the routes in the group

<h4 id="mvcroutergroup-setpaths"><code>setPaths()</code></h4>

```php
public function setPaths( array|string $paths ): GroupInterface;
```

Set common paths for all the routes in the group

<h4 id="mvcroutergroup-setprefix"><code>setPrefix()</code></h4>

```php
public function setPrefix( string $prefix ): GroupInterface;
```

Set a common uri prefix for all the routes in this group

<h4 id="mvcroutergroup-addroute"><code>addRoute()</code></h4>

```php
protected function addRoute(
string $pattern,
array|string|null $paths = null,
array|string|null $httpMethods = null
): RouteInterface;
```

Adds a route applying the common attributes

## Mvc\Router\GroupInterface

Interface

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

- **`Phalcon\Mvc\Router\GroupInterface`**

### Method Summary

<ApiItem href="#mvcroutergroupinterface-add" visibility="public" name="add" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"array|string|null","name":"httpMethods","default":"null"}]}>
Adds a route to the router on any HTTP method
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-addconnect" visibility="public" name="addConnect" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is CONNECT
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-adddelete" visibility="public" name="addDelete" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is DELETE
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-addget" visibility="public" name="addGet" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is GET
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-addhead" visibility="public" name="addHead" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is HEAD
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-addoptions" visibility="public" name="addOptions" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Add a route to the router that only match if the HTTP method is OPTIONS
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-addpatch" visibility="public" name="addPatch" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is PATCH
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-addpost" visibility="public" name="addPost" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is POST
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-addpurge" visibility="public" name="addPurge" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is PURGE
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-addput" visibility="public" name="addPut" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is PUT
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-addtrace" visibility="public" name="addTrace" returnType="RouteInterface" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Adds a route to the router that only match if the HTTP method is TRACE
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-beforematch" visibility="public" name="beforeMatch" returnType="GroupInterface" params={[{"type":"callable","name":"beforeMatch","default":null}]}>
Sets a callback that is called if the route is matched.
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-clear" visibility="public" name="clear" returnType="void" params={[]}>
Removes all the pre-defined routes
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-getbeforematch" visibility="public" name="getBeforeMatch" returnType="callable|null" params={[]}>
Returns the 'before match' callback if any
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-gethostname" visibility="public" name="getHostname" returnType="string|null" params={[]}>
Returns the hostname restriction
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-getpaths" visibility="public" name="getPaths" returnType="array|string|null" params={[]}>
Returns the common paths defined for this group
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-getprefix" visibility="public" name="getPrefix" returnType="string|null" params={[]}>
Returns the common prefix for all the routes
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-getroutes" visibility="public" name="getRoutes" returnType="array" params={[]}>
Returns the routes added to the group
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-sethostname" visibility="public" name="setHostname" returnType="GroupInterface" params={[{"type":"string","name":"hostname","default":null}]}>
Set a hostname restriction for all the routes in the group
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-setpaths" visibility="public" name="setPaths" returnType="GroupInterface" params={[{"type":"array|string","name":"paths","default":null}]}>
Set common paths for all the routes in the group
</ApiItem>
<ApiItem href="#mvcroutergroupinterface-setprefix" visibility="public" name="setPrefix" returnType="GroupInterface" params={[{"type":"string","name":"prefix","default":null}]}>
Set a common uri prefix for all the routes in this group
</ApiItem>

### Methods

<h4 id="mvcroutergroupinterface-add"><code>add()</code></h4>

```php
public function add(
string $pattern,
array|string|null $paths = null,
array|string|null $httpMethods = null
): RouteInterface;
```

Adds a route to the router on any HTTP method

```php
router->add("/about", "About::index");
```

<h4 id="mvcroutergroupinterface-addconnect"><code>addConnect()</code></h4>

```php
public function addConnect(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is CONNECT

<h4 id="mvcroutergroupinterface-adddelete"><code>addDelete()</code></h4>

```php
public function addDelete(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is DELETE

<h4 id="mvcroutergroupinterface-addget"><code>addGet()</code></h4>

```php
public function addGet(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is GET

<h4 id="mvcroutergroupinterface-addhead"><code>addHead()</code></h4>

```php
public function addHead(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is HEAD

<h4 id="mvcroutergroupinterface-addoptions"><code>addOptions()</code></h4>

```php
public function addOptions(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Add a route to the router that only match if the HTTP method is OPTIONS

<h4 id="mvcroutergroupinterface-addpatch"><code>addPatch()</code></h4>

```php
public function addPatch(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PATCH

<h4 id="mvcroutergroupinterface-addpost"><code>addPost()</code></h4>

```php
public function addPost(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is POST

<h4 id="mvcroutergroupinterface-addpurge"><code>addPurge()</code></h4>

```php
public function addPurge(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PURGE

<h4 id="mvcroutergroupinterface-addput"><code>addPut()</code></h4>

```php
public function addPut(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is PUT

<h4 id="mvcroutergroupinterface-addtrace"><code>addTrace()</code></h4>

```php
public function addTrace(
string $pattern,
array|string|null $paths = null
): RouteInterface;
```

Adds a route to the router that only match if the HTTP method is TRACE

<h4 id="mvcroutergroupinterface-beforematch"><code>beforeMatch()</code></h4>

```php
public function beforeMatch( callable $beforeMatch ): GroupInterface;
```

Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched

<h4 id="mvcroutergroupinterface-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Removes all the pre-defined routes

<h4 id="mvcroutergroupinterface-getbeforematch"><code>getBeforeMatch()</code></h4>

```php
public function getBeforeMatch(): callable|null;
```

Returns the 'before match' callback if any

<h4 id="mvcroutergroupinterface-gethostname"><code>getHostname()</code></h4>

```php
public function getHostname(): string|null;
```

Returns the hostname restriction

<h4 id="mvcroutergroupinterface-getpaths"><code>getPaths()</code></h4>

```php
public function getPaths(): array|string|null;
```

Returns the common paths defined for this group

<h4 id="mvcroutergroupinterface-getprefix"><code>getPrefix()</code></h4>

```php
public function getPrefix(): string|null;
```

Returns the common prefix for all the routes

<h4 id="mvcroutergroupinterface-getroutes"><code>getRoutes()</code></h4>

```php
public function getRoutes(): array;
```

Returns the routes added to the group

<h4 id="mvcroutergroupinterface-sethostname"><code>setHostname()</code></h4>

```php
public function setHostname( string $hostname ): GroupInterface;
```

Set a hostname restriction for all the routes in the group

<h4 id="mvcroutergroupinterface-setpaths"><code>setPaths()</code></h4>

```php
public function setPaths( array|string $paths ): GroupInterface;
```

Set common paths for all the routes in the group

<h4 id="mvcroutergroupinterface-setprefix"><code>setPrefix()</code></h4>

```php
public function setPrefix( string $prefix ): GroupInterface;
```

Set a common uri prefix for all the routes in this group

## Mvc\Router\Route

Class

This class represents every route added to the router

- **`Phalcon\Mvc\Router\Route`** - implements [`Phalcon\Mvc\Router\RouteInterface`](#mvcrouterrouteinterface)

`Phalcon\Mvc\Router\Exceptions\InvalidRoutePaths`

### Method Summary

<ApiItem href="#mvcrouterroute-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"},{"type":"array|string|null","name":"httpMethods","default":"null"}]}>
Phalcon\Mvc\Router\Route constructor
</ApiItem>
<ApiItem href="#mvcrouterroute-beforematch" visibility="public" name="beforeMatch" returnType="RouteInterface" params={[{"type":"callable","name":"callback","default":null}]}>
Sets a callback that is called if the route is matched.
</ApiItem>
<ApiItem href="#mvcrouterroute-compilepattern" visibility="public" name="compilePattern" returnType="string" params={[{"type":"string","name":"pattern","default":null}]}>
Replaces placeholders from pattern returning a valid PCRE regular expression
</ApiItem>
<ApiItem href="#mvcrouterroute-convert" visibility="public" name="convert" returnType="RouteInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"converter","default":null}]}>
\{@inheritdoc\}
</ApiItem>
<ApiItem href="#mvcrouterroute-extractnamedparams" visibility="public" name="extractNamedParams" returnType="array|bool" params={[{"type":"string","name":"pattern","default":null}]}>
Extracts parameters from a string
</ApiItem>
<ApiItem href="#mvcrouterroute-getbeforematch" visibility="public" name="getBeforeMatch" returnType="callable|null" params={[]}>
Returns the 'before match' callback if any
</ApiItem>
<ApiItem href="#mvcrouterroute-getcompiledhostname" visibility="public" name="getCompiledHostName" returnType="string|null" params={[]}>
Returns the compiled hostname regex, or null when the hostname is
</ApiItem>
<ApiItem href="#mvcrouterroute-getcompiledpattern" visibility="public" name="getCompiledPattern" returnType="string" params={[]}>
Returns the route's compiled pattern
</ApiItem>
<ApiItem href="#mvcrouterroute-getconverters" visibility="public" name="getConverters" returnType="array" params={[]}>
Returns the router converter
</ApiItem>
<ApiItem href="#mvcrouterroute-getgroup" visibility="public" name="getGroup" returnType="GroupInterface|null" params={[]}>
Returns the group associated with the route
</ApiItem>
<ApiItem href="#mvcrouterroute-gethostname" visibility="public" name="getHostname" returnType="string|null" params={[]}>
Returns the hostname restriction if any
</ApiItem>
<ApiItem href="#mvcrouterroute-gethttpmethods" visibility="public" name="getHttpMethods" returnType="array|string|null" params={[]}>
Returns the HTTP methods that constraint matching the route
</ApiItem>
<ApiItem href="#mvcrouterroute-getmatch" visibility="public" name="getMatch" returnType="callable|null" params={[]}>
Returns the 'match' callback if any
</ApiItem>
<ApiItem href="#mvcrouterroute-getname" visibility="public" name="getName" returnType="string|null" params={[]}>
Returns the route's name
</ApiItem>
<ApiItem href="#mvcrouterroute-getpaths" visibility="public" name="getPaths" returnType="array" params={[]}>
Returns the paths
</ApiItem>
<ApiItem href="#mvcrouterroute-getpattern" visibility="public" name="getPattern" returnType="string" params={[]}>
Returns the route's pattern
</ApiItem>
<ApiItem href="#mvcrouterroute-getreversedpaths" visibility="public" name="getReversedPaths" returnType="array" params={[]}>
Returns the paths using positions as keys and names as values
</ApiItem>
<ApiItem href="#mvcrouterroute-getrouteid" visibility="public" name="getRouteId" returnType="string" params={[]}>
Returns the route's id
</ApiItem>
<ApiItem href="#mvcrouterroute-getroutepaths" visibility="public" name="getRoutePaths" returnType="array" params={[{"type":"array|string|null","name":"paths","default":"null"}]}>
Returns routePaths
</ApiItem>
<ApiItem href="#mvcrouterroute-match" visibility="public" name="match" returnType="RouteInterface" params={[{"type":"callable","name":"callback","default":null}]}>
Allows to set a callback to handle the request directly in the route
</ApiItem>
<ApiItem href="#mvcrouterroute-reconfigure" visibility="public" name="reConfigure" returnType="void" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Reconfigure the route adding a new pattern and a set of paths
</ApiItem>
<ApiItem href="#mvcrouterroute-reset" visibility="public" name="reset" returnType="void" params={[]}>
Resets the internal route id generator
</ApiItem>
<ApiItem href="#mvcrouterroute-setgroup" visibility="public" name="setGroup" returnType="RouteInterface" params={[{"type":"GroupInterface","name":"group","default":null}]}>
Sets the group associated with the route
</ApiItem>
<ApiItem href="#mvcrouterroute-sethostname" visibility="public" name="setHostname" returnType="RouteInterface" params={[{"type":"string","name":"hostname","default":null}]}>
Sets a hostname restriction to the route
</ApiItem>
<ApiItem href="#mvcrouterroute-sethttpmethods" visibility="public" name="setHttpMethods" returnType="RouteInterface" params={[{"type":"array|string","name":"httpMethods","default":null}]}>
Sets a set of HTTP methods that constraint the matching of the route (alias of via)
</ApiItem>
<ApiItem href="#mvcrouterroute-setname" visibility="public" name="setName" returnType="RouteInterface" params={[{"type":"string","name":"name","default":null}]}>
Sets the route's name
</ApiItem>
<ApiItem href="#mvcrouterroute-setrouteid" visibility="public" name="setRouteId" returnType="RouteInterface" params={[{"type":"string","name":"routeId","default":null}]}>
Sets the route's id. Intended for restoring cached routes - most
</ApiItem>
<ApiItem href="#mvcrouterroute-via" visibility="public" name="via" returnType="RouteInterface" params={[{"type":"array|string|null","name":"httpMethods","default":null}]}>
Set one or more HTTP methods that constraint the matching of the route
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="beforeMatch" type="mixed" default="null">
@mixed $callable|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="compiledHostName" type="false|string|null" default="false">
Cached compiled hostname regex. `false` means "not yet computed";
`null` means "hostname is literal - use string equality"; any string
means "use this as the PCRE pattern."

@mixed string|null|false
</ApiItem>
<ApiItem kind="property" visibility="protected" name="compiledPattern" type="string|null" default="null">
@mixed string|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="converters" type="array" default="[]">
@mixed array
</ApiItem>
<ApiItem kind="property" visibility="protected" name="group" type="GroupInterface|null" default="null">
@mixed GroupInterface|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="hostname" type="string|null" default="null">
@mixed string|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="match" type="mixed" default="null">
@mixed callable|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="methods" type="array|string|null" default="[]">
@mixed array|string|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string|null" default="null">
@mixed string|null
</ApiItem>
<ApiItem kind="property" visibility="protected" name="paths" type="array" default="[]">
@mixed array
</ApiItem>
<ApiItem kind="property" visibility="protected" name="pattern" type="string" default="&quot;&quot;">
@mixed string
</ApiItem>
<ApiItem kind="property" visibility="protected" name="routeId" type="string" default="&quot;&quot;">
@mixed string
</ApiItem>
<ApiItem kind="property" visibility="protected" name="uniqueId" type="int" default="0">
@mixed $int
</ApiItem>

### Methods

<h4 id="mvcrouterroute-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $pattern,
array|string|null $paths = null,
array|string|null $httpMethods = null
);
```

Phalcon\Mvc\Router\Route constructor

<h4 id="mvcrouterroute-beforematch"><code>beforeMatch()</code></h4>

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

<h4 id="mvcrouterroute-compilepattern"><code>compilePattern()</code></h4>

```php
public function compilePattern( string $pattern ): string;
```

Replaces placeholders from pattern returning a valid PCRE regular expression

<h4 id="mvcrouterroute-convert"><code>convert()</code></h4>

```php
public function convert(
string $name,
mixed $converter
): RouteInterface;
```

\{@inheritdoc\}

<h4 id="mvcrouterroute-extractnamedparams"><code>extractNamedParams()</code></h4>

```php
public function extractNamedParams( string $pattern ): array|bool;
```

Extracts parameters from a string

<h4 id="mvcrouterroute-getbeforematch"><code>getBeforeMatch()</code></h4>

```php
public function getBeforeMatch(): callable|null;
```

Returns the 'before match' callback if any

<h4 id="mvcrouterroute-getcompiledhostname"><code>getCompiledHostName()</code></h4>

```php
public function getCompiledHostName(): string|null;
```

Returns the compiled hostname regex, or null when the hostname is
literal and a string-equality comparison should be used.

The result is cached after first computation; setHostname() clears
the cache.

<h4 id="mvcrouterroute-getcompiledpattern"><code>getCompiledPattern()</code></h4>

```php
public function getCompiledPattern(): string;
```

Returns the route's compiled pattern

<h4 id="mvcrouterroute-getconverters"><code>getConverters()</code></h4>

```php
public function getConverters(): array;
```

Returns the router converter

<h4 id="mvcrouterroute-getgroup"><code>getGroup()</code></h4>

```php
public function getGroup(): GroupInterface|null;
```

Returns the group associated with the route

<h4 id="mvcrouterroute-gethostname"><code>getHostname()</code></h4>

```php
public function getHostname(): string|null;
```

Returns the hostname restriction if any

<h4 id="mvcrouterroute-gethttpmethods"><code>getHttpMethods()</code></h4>

```php
public function getHttpMethods(): array|string|null;
```

Returns the HTTP methods that constraint matching the route

<h4 id="mvcrouterroute-getmatch"><code>getMatch()</code></h4>

```php
public function getMatch(): callable|null;
```

Returns the 'match' callback if any

<h4 id="mvcrouterroute-getname"><code>getName()</code></h4>

```php
public function getName(): string|null;
```

Returns the route's name

<h4 id="mvcrouterroute-getpaths"><code>getPaths()</code></h4>

```php
public function getPaths(): array;
```

Returns the paths

<h4 id="mvcrouterroute-getpattern"><code>getPattern()</code></h4>

```php
public function getPattern(): string;
```

Returns the route's pattern

<h4 id="mvcrouterroute-getreversedpaths"><code>getReversedPaths()</code></h4>

```php
public function getReversedPaths(): array;
```

Returns the paths using positions as keys and names as values

<h4 id="mvcrouterroute-getrouteid"><code>getRouteId()</code></h4>

```php
public function getRouteId(): string;
```

Returns the route's id

<h4 id="mvcrouterroute-getroutepaths"><code>getRoutePaths()</code></h4>

```php
public static function getRoutePaths( array|string|null $paths = null ): array;
```

Returns routePaths

<h4 id="mvcrouterroute-match"><code>match()</code></h4>

```php
public function match( callable $callback ): RouteInterface;
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

<h4 id="mvcrouterroute-reconfigure"><code>reConfigure()</code></h4>

```php
public function reConfigure(
string $pattern,
array|string|null $paths = null
): void;
```

Reconfigure the route adding a new pattern and a set of paths

<h4 id="mvcrouterroute-reset"><code>reset()</code></h4>

```php
public static function reset(): void;
```

Resets the internal route id generator

<h4 id="mvcrouterroute-setgroup"><code>setGroup()</code></h4>

```php
public function setGroup( GroupInterface $group ): RouteInterface;
```

Sets the group associated with the route

<h4 id="mvcrouterroute-sethostname"><code>setHostname()</code></h4>

```php
public function setHostname( string $hostname ): RouteInterface;
```

Sets a hostname restriction to the route

```php
$route->setHostname("localhost");
```

<h4 id="mvcrouterroute-sethttpmethods"><code>setHttpMethods()</code></h4>

```php
public function setHttpMethods( array|string $httpMethods ): RouteInterface;
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

<h4 id="mvcrouterroute-setname"><code>setName()</code></h4>

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

<h4 id="mvcrouterroute-setrouteid"><code>setRouteId()</code></h4>

```php
public function setRouteId( string $routeId ): RouteInterface;
```

Sets the route's id. Intended for restoring cached routes - most
applications should rely on the auto-incrementing id assigned by
the constructor.

<h4 id="mvcrouterroute-via"><code>via()</code></h4>

```php
public function via( array|string|null $httpMethods ): RouteInterface;
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

Interface

Interface for Phalcon\Mvc\Router\Route

- **`Phalcon\Mvc\Router\RouteInterface`**

### Method Summary

<ApiItem href="#mvcrouterrouteinterface-compilepattern" visibility="public" name="compilePattern" returnType="string" params={[{"type":"string","name":"pattern","default":null}]}>
Replaces placeholders from pattern returning a valid PCRE regular expression
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-convert" visibility="public" name="convert" returnType="RouteInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"converter","default":null}]}>
Adds a converter to perform an additional transformation for certain parameter.
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-getcompiledpattern" visibility="public" name="getCompiledPattern" returnType="string" params={[]}>
Returns the route's pattern
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-gethostname" visibility="public" name="getHostname" returnType="string|null" params={[]}>
Returns the hostname restriction if any
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-gethttpmethods" visibility="public" name="getHttpMethods" returnType="array|string|null" params={[]}>
Returns the HTTP methods that constraint matching the route
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-getname" visibility="public" name="getName" returnType="string|null" params={[]}>
Returns the route's name
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-getpaths" visibility="public" name="getPaths" returnType="array" params={[]}>
Returns the paths
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-getpattern" visibility="public" name="getPattern" returnType="string" params={[]}>
Returns the route's pattern
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-getreversedpaths" visibility="public" name="getReversedPaths" returnType="array" params={[]}>
Returns the paths using positions as keys and names as values
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-getrouteid" visibility="public" name="getRouteId" returnType="string" params={[]}>
Returns the route's id
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-reconfigure" visibility="public" name="reConfigure" returnType="void" params={[{"type":"string","name":"pattern","default":null},{"type":"array|string|null","name":"paths","default":"null"}]}>
Reconfigure the route adding a new pattern and a set of paths
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-reset" visibility="public" name="reset" returnType="void" params={[]}>
Resets the internal route id generator
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-sethostname" visibility="public" name="setHostname" returnType="RouteInterface" params={[{"type":"string","name":"hostname","default":null}]}>
Sets a hostname restriction to the route
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-sethttpmethods" visibility="public" name="setHttpMethods" returnType="RouteInterface" params={[{"type":"array|string","name":"httpMethods","default":null}]}>
Sets a set of HTTP methods that constraint the matching of the route
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-setname" visibility="public" name="setName" returnType="RouteInterface" params={[{"type":"string","name":"name","default":null}]}>
Sets the route's name
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-setrouteid" visibility="public" name="setRouteId" returnType="RouteInterface" params={[{"type":"string","name":"routeId","default":null}]}>
Sets the route's id (intended for restoring cached routes)
</ApiItem>
<ApiItem href="#mvcrouterrouteinterface-via" visibility="public" name="via" returnType="RouteInterface" params={[{"type":"array|string|null","name":"httpMethods","default":null}]}>
Set one or more HTTP methods that constraint the matching of the route
</ApiItem>

### Methods

<h4 id="mvcrouterrouteinterface-compilepattern"><code>compilePattern()</code></h4>

```php
public function compilePattern( string $pattern ): string;
```

Replaces placeholders from pattern returning a valid PCRE regular expression

<h4 id="mvcrouterrouteinterface-convert"><code>convert()</code></h4>

```php
public function convert(
string $name,
mixed $converter
): RouteInterface;
```

Adds a converter to perform an additional transformation for certain parameter.

<h4 id="mvcrouterrouteinterface-getcompiledpattern"><code>getCompiledPattern()</code></h4>

```php
public function getCompiledPattern(): string;
```

Returns the route's pattern

<h4 id="mvcrouterrouteinterface-gethostname"><code>getHostname()</code></h4>

```php
public function getHostname(): string|null;
```

Returns the hostname restriction if any

<h4 id="mvcrouterrouteinterface-gethttpmethods"><code>getHttpMethods()</code></h4>

```php
public function getHttpMethods(): array|string|null;
```

Returns the HTTP methods that constraint matching the route

<h4 id="mvcrouterrouteinterface-getname"><code>getName()</code></h4>

```php
public function getName(): string|null;
```

Returns the route's name

<h4 id="mvcrouterrouteinterface-getpaths"><code>getPaths()</code></h4>

```php
public function getPaths(): array;
```

Returns the paths

<h4 id="mvcrouterrouteinterface-getpattern"><code>getPattern()</code></h4>

```php
public function getPattern(): string;
```

Returns the route's pattern

<h4 id="mvcrouterrouteinterface-getreversedpaths"><code>getReversedPaths()</code></h4>

```php
public function getReversedPaths(): array;
```

Returns the paths using positions as keys and names as values

<h4 id="mvcrouterrouteinterface-getrouteid"><code>getRouteId()</code></h4>

```php
public function getRouteId(): string;
```

Returns the route's id

<h4 id="mvcrouterrouteinterface-reconfigure"><code>reConfigure()</code></h4>

```php
public function reConfigure(
string $pattern,
array|string|null $paths = null
): void;
```

Reconfigure the route adding a new pattern and a set of paths

<h4 id="mvcrouterrouteinterface-reset"><code>reset()</code></h4>

```php
public static function reset(): void;
```

Resets the internal route id generator

<h4 id="mvcrouterrouteinterface-sethostname"><code>setHostname()</code></h4>

```php
public function setHostname( string $hostname ): RouteInterface;
```

Sets a hostname restriction to the route

<h4 id="mvcrouterrouteinterface-sethttpmethods"><code>setHttpMethods()</code></h4>

```php
public function setHttpMethods( array|string $httpMethods ): RouteInterface;
```

Sets a set of HTTP methods that constraint the matching of the route

<h4 id="mvcrouterrouteinterface-setname"><code>setName()</code></h4>

```php
public function setName( string $name ): RouteInterface;
```

Sets the route's name

<h4 id="mvcrouterrouteinterface-setrouteid"><code>setRouteId()</code></h4>

```php
public function setRouteId( string $routeId ): RouteInterface;
```

Sets the route's id (intended for restoring cached routes)

<h4 id="mvcrouterrouteinterface-via"><code>via()</code></h4>

```php
public function via( array|string|null $httpMethods ): RouteInterface;
```

Set one or more HTTP methods that constraint the matching of the route

## Mvc\Router\RouterFactory

Class

Phalcon\Mvc\Router\RouterFactory

Builds a Router from an array or ConfigInterface and loads routes via
Router::loadFromConfig.

```php
use Phalcon\Mvc\Router\RouterFactory;

$router = (new RouterFactory())->load(
[
    'defaultRoutes' => false,
    'routes' => [
        ['method' => 'get', 'pattern' => '/users', 'paths' => 'Users::index']
    ]
]
);
```

- **`Phalcon\Mvc\Router\RouterFactory`**

`Phalcon\Config\ConfigInterface` · `Phalcon\Mvc\Router` · `Phalcon\Mvc\RouterInterface` · `Phalcon\Mvc\Router\Exceptions\InvalidRouterFactoryConfig`

### Method Summary

<ApiItem href="#mvcrouterrouterfactory-load" visibility="public" name="load" returnType="RouterInterface" params={[{"type":"mixed","name":"config","default":null}]}>
Builds a Router from a config array or ConfigInterface and loads routes.
</ApiItem>
<ApiItem href="#mvcrouterrouterfactory-newinstance" visibility="public" name="newInstance" returnType="RouterInterface" params={[{"type":"bool","name":"defaultRoutes","default":"true"}]}>
Returns a bare Router instance.
</ApiItem>

### Methods

<h4 id="mvcrouterrouterfactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): RouterInterface;
```

Builds a Router from a config array or ConfigInterface and loads routes.

<h4 id="mvcrouterrouterfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( bool $defaultRoutes = true ): RouterInterface;
```

Returns a bare Router instance.

## Mvc\Url

Class

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

- `\stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/6.0/api/phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Mvc\Url`** - implements [`Phalcon\Mvc\Url\UrlInterface`](#mvcurlurlinterface)

`Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Mvc\Url\Exception` · `Phalcon\Mvc\Url\Exceptions\MissingRouteName` · `Phalcon\Mvc\Url\Exceptions\RouteNotFound` · `Phalcon\Mvc\Url\Exceptions\RouterServiceUnavailable` · `Phalcon\Mvc\Url\UrlInterface`

### Method Summary

<ApiItem href="#mvcurl-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"RouterInterface|null","name":"router","default":"null"}]}>
</ApiItem>
<ApiItem href="#mvcurl-get" visibility="public" name="get" returnType="string" params={[{"type":"array|string|null","name":"uri","default":"null"},{"type":"mixed","name":"arguments","default":"null"},{"type":"bool|null","name":"local","default":"null"},{"type":"mixed","name":"baseUri","default":"null"},{"type":"bool","name":"replaceArgs","default":"false"}]}>
Generates a URL
</ApiItem>
<ApiItem href="#mvcurl-getbasepath" visibility="public" name="getBasePath" returnType="string|null" params={[]}>
Returns the base path
</ApiItem>
<ApiItem href="#mvcurl-getbaseuri" visibility="public" name="getBaseUri" returnType="string" params={[]}>
Returns the prefix for all the generated urls. By default, /
</ApiItem>
<ApiItem href="#mvcurl-getstatic" visibility="public" name="getStatic" returnType="string" params={[{"type":"array|string|null","name":"uri","default":"null"}]}>
Generates a URL for a static resource
</ApiItem>
<ApiItem href="#mvcurl-getstaticbaseuri" visibility="public" name="getStaticBaseUri" returnType="string" params={[]}>
Returns the prefix for all the generated static urls. By default, /
</ApiItem>
<ApiItem href="#mvcurl-path" visibility="public" name="path" returnType="string" params={[{"type":"string|null","name":"path","default":"null"}]}>
Generates a local path
</ApiItem>
<ApiItem href="#mvcurl-setbasepath" visibility="public" name="setBasePath" returnType="UrlInterface" params={[{"type":"string","name":"basePath","default":null}]}>
Sets a base path for all the generated paths
</ApiItem>
<ApiItem href="#mvcurl-setbaseuri" visibility="public" name="setBaseUri" returnType="UrlInterface" params={[{"type":"string","name":"baseUri","default":null}]}>
Sets a prefix for all the URIs to be generated
</ApiItem>
<ApiItem href="#mvcurl-setstaticbaseuri" visibility="public" name="setStaticBaseUri" returnType="UrlInterface" params={[{"type":"string","name":"staticBaseUri","default":null}]}>
Sets a prefix for all static URLs generated
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="basePath" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="baseUri" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="router" type="RouterInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="staticBaseUri" type="string|null" default="null">
</ApiItem>

### Methods

<h4 id="mvcurl-__construct"><code>__construct()</code></h4>

```php
public function __construct( RouterInterface|null $router = null );
```

<h4 id="mvcurl-get"><code>get()</code></h4>

```php
public function get(
array|string|null $uri = null,
mixed $arguments = null,
bool|null $local = null,
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

// A URI that already carries a scheme is detected as remote and is
// returned untouched. The third parameter is only honored when it is
// explicitly true - a false reads the same as leaving it out.
echo $url->get(
"https://phalcon.io/",
null,
false
);
```

<h4 id="mvcurl-getbasepath"><code>getBasePath()</code></h4>

```php
public function getBasePath(): string|null;
```

Returns the base path

<h4 id="mvcurl-getbaseuri"><code>getBaseUri()</code></h4>

```php
public function getBaseUri(): string;
```

Returns the prefix for all the generated urls. By default, /

<h4 id="mvcurl-getstatic"><code>getStatic()</code></h4>

```php
public function getStatic( array|string|null $uri = null ): string;
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

<h4 id="mvcurl-getstaticbaseuri"><code>getStaticBaseUri()</code></h4>

```php
public function getStaticBaseUri(): string;
```

Returns the prefix for all the generated static urls. By default, /

<h4 id="mvcurl-path"><code>path()</code></h4>

```php
public function path( string|null $path = null ): string;
```

Generates a local path

<h4 id="mvcurl-setbasepath"><code>setBasePath()</code></h4>

```php
public function setBasePath( string $basePath ): UrlInterface;
```

Sets a base path for all the generated paths

```php
$url->setBasePath("/var/www/htdocs/");
```

<h4 id="mvcurl-setbaseuri"><code>setBaseUri()</code></h4>

```php
public function setBaseUri( string $baseUri ): UrlInterface;
```

Sets a prefix for all the URIs to be generated

```php
$url->setBaseUri("/invo/");

$url->setBaseUri("/invo/index.php/");
```

<h4 id="mvcurl-setstaticbaseuri"><code>setStaticBaseUri()</code></h4>

```php
public function setStaticBaseUri( string $staticBaseUri ): UrlInterface;
```

Sets a prefix for all static URLs generated

```php
$url->setStaticBaseUri("/invo/");
```

## Mvc\Url\Exception

Class

Exceptions thrown in Phalcon\Mvc\Url will use this class

- `\Exception`
- **`Phalcon\Mvc\Url\Exception`**
- [`Phalcon\Mvc\Url\Exceptions\MissingRouteName`](#mvcurlexceptionsmissingroutename)
- [`Phalcon\Mvc\Url\Exceptions\RouteNotFound`](#mvcurlexceptionsroutenotfound)
- [`Phalcon\Mvc\Url\Exceptions\RouterServiceUnavailable`](#mvcurlexceptionsrouterserviceunavailable)

## Mvc\Url\Exceptions\MissingRouteName

Class

- `\Exception`
- [`Phalcon\Mvc\Url\Exception`](#mvcurlexception)
- **`Phalcon\Mvc\Url\Exceptions\MissingRouteName`**

`Phalcon\Mvc\Url\Exception`

### Method Summary

<ApiItem href="#mvcurlexceptionsmissingroutename-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcurlexceptionsmissingroutename-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Url\Exceptions\RouteNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\Url\Exception`](#mvcurlexception)
- **`Phalcon\Mvc\Url\Exceptions\RouteNotFound`**

`Phalcon\Mvc\Url\Exception`

### Method Summary

<ApiItem href="#mvcurlexceptionsroutenotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcurlexceptionsroutenotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Mvc\Url\Exceptions\RouterServiceUnavailable

Class

- `\Exception`
- [`Phalcon\Mvc\Url\Exception`](#mvcurlexception)
- **`Phalcon\Mvc\Url\Exceptions\RouterServiceUnavailable`**

`Phalcon\Mvc\Url\Exception`

### Method Summary

<ApiItem href="#mvcurlexceptionsrouterserviceunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcurlexceptionsrouterserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\Url\UrlInterface

Interface

Interface for Phalcon\Mvc\Url\UrlInterface

- **`Phalcon\Mvc\Url\UrlInterface`**

### Method Summary

<ApiItem href="#mvcurlurlinterface-get" visibility="public" name="get" returnType="string" params={[{"type":"array|string|null","name":"uri","default":"null"},{"type":"array|object|null","name":"arguments","default":"null"},{"type":"bool|null","name":"local","default":"null"},{"type":"mixed","name":"baseUri","default":"null"},{"type":"bool","name":"replaceArgs","default":"false"}]}>
Generates a URL
</ApiItem>
<ApiItem href="#mvcurlurlinterface-getbasepath" visibility="public" name="getBasePath" returnType="string|null" params={[]}>
Returns a base path
</ApiItem>
<ApiItem href="#mvcurlurlinterface-getbaseuri" visibility="public" name="getBaseUri" returnType="string" params={[]}>
Returns the prefix for all the generated urls. By default, /
</ApiItem>
<ApiItem href="#mvcurlurlinterface-path" visibility="public" name="path" returnType="string" params={[{"type":"string|null","name":"path","default":"null"}]}>
Generates a local path
</ApiItem>
<ApiItem href="#mvcurlurlinterface-setbasepath" visibility="public" name="setBasePath" returnType="UrlInterface" params={[{"type":"string","name":"basePath","default":null}]}>
Sets a base paths for all the generated paths
</ApiItem>
<ApiItem href="#mvcurlurlinterface-setbaseuri" visibility="public" name="setBaseUri" returnType="UrlInterface" params={[{"type":"string","name":"baseUri","default":null}]}>
Sets a prefix to all the urls generated
</ApiItem>

### Methods

<h4 id="mvcurlurlinterface-get"><code>get()</code></h4>

```php
public function get(
array|string|null $uri = null,
array|object|null $arguments = null,
bool|null $local = null,
mixed $baseUri = null,
bool $replaceArgs = false
): string;
```

Generates a URL

<h4 id="mvcurlurlinterface-getbasepath"><code>getBasePath()</code></h4>

```php
public function getBasePath(): string|null;
```

Returns a base path

<h4 id="mvcurlurlinterface-getbaseuri"><code>getBaseUri()</code></h4>

```php
public function getBaseUri(): string;
```

Returns the prefix for all the generated urls. By default, /

<h4 id="mvcurlurlinterface-path"><code>path()</code></h4>

```php
public function path( string|null $path = null ): string;
```

Generates a local path

<h4 id="mvcurlurlinterface-setbasepath"><code>setBasePath()</code></h4>

```php
public function setBasePath( string $basePath ): UrlInterface;
```

Sets a base paths for all the generated paths

<h4 id="mvcurlurlinterface-setbaseuri"><code>setBaseUri()</code></h4>

```php
public function setBaseUri( string $baseUri ): UrlInterface;
```

Sets a prefix to all the urls generated

## Mvc\View

Class

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

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- **`Phalcon\Mvc\View`** - implements [`Phalcon\Mvc\ViewInterface`](#mvcviewinterface), [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)

`Closure` · `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Exception` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Mvc\View\Engine\Php` · `Phalcon\Mvc\View\Exception` · `Phalcon\Mvc\View\Exceptions\InvalidEngineRegistration` · `Phalcon\Mvc\View\Exceptions\ViewNotFound` · `Phalcon\Mvc\View\Exceptions\ViewServicesUnavailable` · `Phalcon\Mvc\View\Exceptions\ViewsDirItemMustBeString` · `Phalcon\Mvc\View\Traits\ViewParamsTrait` · `Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait`

### Method Summary

<ApiItem href="#mvcview-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Mvc\View constructor
</ApiItem>
<ApiItem href="#mvcview-__get" visibility="public" name="__get" returnType="mixed" params={[{"type":"string","name":"propertyName","default":null}]}>
Magic method to retrieve a variable passed to the view
</ApiItem>
<ApiItem href="#mvcview-__isset" visibility="public" name="__isset" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Magic method to retrieve if a variable is set in the view
</ApiItem>
<ApiItem href="#mvcview-__set" visibility="public" name="__set" returnType="" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null}]}>
Magic method to pass variables to the views
</ApiItem>
<ApiItem href="#mvcview-cleantemplateafter" visibility="public" name="cleanTemplateAfter" returnType="static" params={[]}>
Resets any template before layouts
</ApiItem>
<ApiItem href="#mvcview-cleantemplatebefore" visibility="public" name="cleanTemplateBefore" returnType="static" params={[]}>
Resets any "template before" layouts
</ApiItem>
<ApiItem href="#mvcview-disable" visibility="public" name="disable" returnType="static" params={[]}>
Disables the auto-rendering process
</ApiItem>
<ApiItem href="#mvcview-disablelevel" visibility="public" name="disableLevel" returnType="static" params={[{"type":"mixed","name":"level","default":null}]}>
Disables a specific level of rendering
</ApiItem>
<ApiItem href="#mvcview-enable" visibility="public" name="enable" returnType="static" params={[]}>
Enables the auto-rendering process
</ApiItem>
<ApiItem href="#mvcview-exists" visibility="public" name="exists" returnType="bool" params={[{"type":"string","name":"view","default":null}]}>
Checks whether view exists
</ApiItem>
<ApiItem href="#mvcview-finish" visibility="public" name="finish" returnType="static" params={[]}>
Finishes the render process by stopping the output buffering
</ApiItem>
<ApiItem href="#mvcview-getactionname" visibility="public" name="getActionName" returnType="string" params={[]}>
Gets the name of the action rendered
</ApiItem>
<ApiItem href="#mvcview-getactiverenderpath" visibility="public" name="getActiveRenderPath" returnType="array|string" params={[]}>
Returns the path (or paths) of the views that are currently rendered
</ApiItem>
<ApiItem href="#mvcview-getbasepath" visibility="public" name="getBasePath" returnType="string" params={[]}>
Gets base path
</ApiItem>
<ApiItem href="#mvcview-getcontrollername" visibility="public" name="getControllerName" returnType="string" params={[]}>
Gets the name of the controller rendered
</ApiItem>
<ApiItem href="#mvcview-getcurrentrenderlevel" visibility="public" name="getCurrentRenderLevel" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#mvcview-getlayout" visibility="public" name="getLayout" returnType="string|null" params={[]}>
Returns the name of the main view
</ApiItem>
<ApiItem href="#mvcview-getlayoutsdir" visibility="public" name="getLayoutsDir" returnType="string" params={[]}>
Gets the current layouts sub-directory
</ApiItem>
<ApiItem href="#mvcview-getmainview" visibility="public" name="getMainView" returnType="string" params={[]}>
Returns the name of the main view
</ApiItem>
<ApiItem href="#mvcview-getpartial" visibility="public" name="getPartial" returnType="string" params={[{"type":"string","name":"partialPath","default":null},{"type":"mixed","name":"params","default":"null"}]}>
Renders a partial view
</ApiItem>
<ApiItem href="#mvcview-getpartialsdir" visibility="public" name="getPartialsDir" returnType="string" params={[]}>
Gets the current partials sub-directory
</ApiItem>
<ApiItem href="#mvcview-getrender" visibility="public" name="getRender" returnType="string" params={[{"type":"string","name":"controllerName","default":null},{"type":"string","name":"actionName","default":null},{"type":"array","name":"params","default":"[]"},{"type":"mixed","name":"configCallback","default":"null"}]}>
Perform the automatic rendering returning the output as a string
</ApiItem>
<ApiItem href="#mvcview-getrenderlevel" visibility="public" name="getRenderLevel" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#mvcview-getviewsdir" visibility="public" name="getViewsDir" returnType="array|string" params={[]}>
Gets views directory
</ApiItem>
<ApiItem href="#mvcview-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"view","default":null}]}>
Checks whether view exists
</ApiItem>
<ApiItem href="#mvcview-isdisabled" visibility="public" name="isDisabled" returnType="bool" params={[]}>
Whether automatic rendering is enabled
</ApiItem>
<ApiItem href="#mvcview-partial" visibility="public" name="partial" returnType="" params={[{"type":"string","name":"partialPath","default":null},{"type":"mixed","name":"params","default":"null"}]}>
Renders a partial view
</ApiItem>
<ApiItem href="#mvcview-pick" visibility="public" name="pick" returnType="static" params={[{"type":"mixed","name":"renderView","default":null}]}>
Choose a different view to render instead of last-controller/last-action
</ApiItem>
<ApiItem href="#mvcview-processrender" visibility="public" name="processRender" returnType="bool" params={[{"type":"string","name":"controllerName","default":null},{"type":"string","name":"actionName","default":null},{"type":"array","name":"params","default":"[]"},{"type":"bool","name":"fireEvents","default":"true"}]}>
Processes the view and templates; Fires events if needed
</ApiItem>
<ApiItem href="#mvcview-registerengines" visibility="public" name="registerEngines" returnType="static" params={[{"type":"array","name":"engines","default":null}]}>
Register templating engines
</ApiItem>
<ApiItem href="#mvcview-render" visibility="public" name="render" returnType="bool|static" params={[{"type":"string","name":"controllerName","default":null},{"type":"string","name":"actionName","default":null},{"type":"array","name":"params","default":"[]"}]}>
Executes render process from dispatching data
</ApiItem>
<ApiItem href="#mvcview-reset" visibility="public" name="reset" returnType="static" params={[]}>
Resets the view component to its factory default values
</ApiItem>
<ApiItem href="#mvcview-setbasepath" visibility="public" name="setBasePath" returnType="static" params={[{"type":"string","name":"basePath","default":null}]}>
Sets base path. Depending of your platform, always add a trailing slash
</ApiItem>
<ApiItem href="#mvcview-setlayout" visibility="public" name="setLayout" returnType="static" params={[{"type":"string","name":"layout","default":null}]}>
Change the layout to be used instead of using the name of the latest
</ApiItem>
<ApiItem href="#mvcview-setlayoutsdir" visibility="public" name="setLayoutsDir" returnType="static" params={[{"type":"string","name":"layoutsDir","default":null}]}>
Sets the layouts sub-directory. Must be a directory under the views
</ApiItem>
<ApiItem href="#mvcview-setmainview" visibility="public" name="setMainView" returnType="static" params={[{"type":"string","name":"viewPath","default":null}]}>
Sets default view name. Must be a file without extension in the views
</ApiItem>
<ApiItem href="#mvcview-setparamtoview" visibility="public" name="setParamToView" returnType="static" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null}]}>
Adds parameters to views (alias of setVar)
</ApiItem>
<ApiItem href="#mvcview-setpartialsdir" visibility="public" name="setPartialsDir" returnType="static" params={[{"type":"string","name":"partialsDir","default":null}]}>
Sets a partials sub-directory. Must be a directory under the views
</ApiItem>
<ApiItem href="#mvcview-setrenderlevel" visibility="public" name="setRenderLevel" returnType="static" params={[{"type":"int","name":"level","default":null}]}>
Sets the render level for the view
</ApiItem>
<ApiItem href="#mvcview-settemplateafter" visibility="public" name="setTemplateAfter" returnType="static" params={[{"type":"array|string","name":"templateAfter","default":null}]}>
Sets a "template after" controller layout
</ApiItem>
<ApiItem href="#mvcview-settemplatebefore" visibility="public" name="setTemplateBefore" returnType="static" params={[{"type":"array|string","name":"templateBefore","default":null}]}>
Sets a template before the controller layout
</ApiItem>
<ApiItem href="#mvcview-setvars" visibility="public" name="setVars" returnType="static" params={[{"type":"array","name":"params","default":null},{"type":"bool","name":"merge","default":"true"}]}>
Set all the render params
</ApiItem>
<ApiItem href="#mvcview-setviewsdir" visibility="public" name="setViewsDir" returnType="static" params={[{"type":"array|string","name":"viewsDir","default":null}]}>
Sets the views directory. Depending of your platform,
</ApiItem>
<ApiItem href="#mvcview-start" visibility="public" name="start" returnType="static" params={[]}>
Starts rendering process enabling the output buffering
</ApiItem>
<ApiItem href="#mvcview-tostring" visibility="public" name="toString" returnType="string" params={[{"type":"string","name":"controllerName","default":null},{"type":"string","name":"actionName","default":null},{"type":"array","name":"params","default":"[]"}]}>
Renders the view and returns it as a string
</ApiItem>
<ApiItem href="#mvcview-enginerender" visibility="protected" name="engineRender" returnType="" params={[{"type":"array","name":"engines","default":null},{"type":"string","name":"viewPath","default":null},{"type":"bool","name":"silence","default":null},{"type":"bool","name":"mustClean","default":"true"}]}>
Checks whether view exists on registered extensions and render it
</ApiItem>
<ApiItem href="#mvcview-getviewsdirs" visibility="protected" name="getViewsDirs" returnType="array" params={[]}>
Gets views directories
</ApiItem>
<ApiItem href="#mvcview-isabsolutepath" visibility="protected" name="isAbsolutePath" returnType="bool" params={[{"type":"string","name":"path","default":null}]}>
Checks if a path is absolute or not
</ApiItem>
<ApiItem href="#mvcview-loadtemplateengines" visibility="protected" name="loadTemplateEngines" returnType="array" params={[]}>
Loads registered template engines, if none is registered it will use
</ApiItem>

### Constants

<ApiItem kind="constant" name="LEVEL_ACTION_VIEW" type="int" default="1">
Render Level: To the action view
</ApiItem>
<ApiItem kind="constant" name="LEVEL_AFTER_TEMPLATE" type="int" default="4">
Render Level: Render to the templates "after"
</ApiItem>
<ApiItem kind="constant" name="LEVEL_BEFORE_TEMPLATE" type="int" default="2">
Render Level: To the templates "before"
</ApiItem>
<ApiItem kind="constant" name="LEVEL_LAYOUT" type="int" default="3">
Render Level: To the controller layout
</ApiItem>
<ApiItem kind="constant" name="LEVEL_MAIN_LAYOUT" type="int" default="5">
Render Level: To the main layout
</ApiItem>
<ApiItem kind="constant" name="LEVEL_NO_RENDER" type="int" default="0">
Render Level: No render any view
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="actionName" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="activeRenderPaths" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="basePath" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="controllerName" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="currentRenderLevel" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="disabled" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="disabledLevels" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="engines" type="array|false" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="layout" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="layoutsDir" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="mainView" type="string" default="&quot;index&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="params" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="partialsDir" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="pickView" type="array|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="renderLevel" type="int" default="5">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="templatesAfter" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="templatesBefore" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="viewsDirs" type="array|string" default="[]">
</ApiItem>

### Methods

<h4 id="mvcview-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Phalcon\Mvc\View constructor

<h4 id="mvcview-__get"><code>__get()</code></h4>

```php
public function __get( string $propertyName ): mixed;
```

Magic method to retrieve a variable passed to the view

```php
echo $this->view->products;
```

<h4 id="mvcview-__isset"><code>__isset()</code></h4>

```php
public function __isset( string $name ): bool;
```

Magic method to retrieve if a variable is set in the view

```php
echo isset($this->view->products);
```

<h4 id="mvcview-__set"><code>__set()</code></h4>

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

<h4 id="mvcview-cleantemplateafter"><code>cleanTemplateAfter()</code></h4>

```php
public function cleanTemplateAfter(): static;
```

Resets any template before layouts

<h4 id="mvcview-cleantemplatebefore"><code>cleanTemplateBefore()</code></h4>

```php
public function cleanTemplateBefore(): static;
```

Resets any "template before" layouts

<h4 id="mvcview-disable"><code>disable()</code></h4>

```php
public function disable(): static;
```

Disables the auto-rendering process

<h4 id="mvcview-disablelevel"><code>disableLevel()</code></h4>

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

<h4 id="mvcview-enable"><code>enable()</code></h4>

```php
public function enable(): static;
```

Enables the auto-rendering process

<h4 id="mvcview-exists"><code>exists()</code></h4>

```php
public function exists( string $view ): bool;
```

Checks whether view exists

<h4 id="mvcview-finish"><code>finish()</code></h4>

```php
public function finish(): static;
```

Finishes the render process by stopping the output buffering

<h4 id="mvcview-getactionname"><code>getActionName()</code></h4>

```php
public function getActionName(): string;
```

Gets the name of the action rendered

<h4 id="mvcview-getactiverenderpath"><code>getActiveRenderPath()</code></h4>

```php
public function getActiveRenderPath(): array|string;
```

Returns the path (or paths) of the views that are currently rendered

<h4 id="mvcview-getbasepath"><code>getBasePath()</code></h4>

```php
public function getBasePath(): string;
```

Gets base path

<h4 id="mvcview-getcontrollername"><code>getControllerName()</code></h4>

```php
public function getControllerName(): string;
```

Gets the name of the controller rendered

<h4 id="mvcview-getcurrentrenderlevel"><code>getCurrentRenderLevel()</code></h4>

```php
public function getCurrentRenderLevel(): int;
```

<h4 id="mvcview-getlayout"><code>getLayout()</code></h4>

```php
public function getLayout(): string|null;
```

Returns the name of the main view

<h4 id="mvcview-getlayoutsdir"><code>getLayoutsDir()</code></h4>

```php
public function getLayoutsDir(): string;
```

Gets the current layouts sub-directory

<h4 id="mvcview-getmainview"><code>getMainView()</code></h4>

```php
public function getMainView(): string;
```

Returns the name of the main view

<h4 id="mvcview-getpartial"><code>getPartial()</code></h4>

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

<h4 id="mvcview-getpartialsdir"><code>getPartialsDir()</code></h4>

```php
public function getPartialsDir(): string;
```

Gets the current partials sub-directory

<h4 id="mvcview-getrender"><code>getRender()</code></h4>

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

<h4 id="mvcview-getrenderlevel"><code>getRenderLevel()</code></h4>

```php
public function getRenderLevel(): int;
```

<h4 id="mvcview-getviewsdir"><code>getViewsDir()</code></h4>

```php
public function getViewsDir(): array|string;
```

Gets views directory

<h4 id="mvcview-has"><code>has()</code></h4>

```php
public function has( string $view ): bool;
```

Checks whether view exists

<h4 id="mvcview-isdisabled"><code>isDisabled()</code></h4>

```php
public function isDisabled(): bool;
```

Whether automatic rendering is enabled

<h4 id="mvcview-partial"><code>partial()</code></h4>

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

<h4 id="mvcview-pick"><code>pick()</code></h4>

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

<h4 id="mvcview-processrender"><code>processRender()</code></h4>

```php
public function processRender(
string $controllerName,
string $actionName,
array $params = [],
bool $fireEvents = true
): bool;
```

Processes the view and templates; Fires events if needed

<h4 id="mvcview-registerengines"><code>registerEngines()</code></h4>

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

<h4 id="mvcview-render"><code>render()</code></h4>

```php
public function render(
string $controllerName,
string $actionName,
array $params = []
): bool|static;
```

Executes render process from dispatching data

```php
// Shows recent posts view (app/views/posts/recent.phtml)
$view->start()->render("posts", "recent")->finish();
```

<h4 id="mvcview-reset"><code>reset()</code></h4>

```php
public function reset(): static;
```

Resets the view component to its factory default values

<h4 id="mvcview-setbasepath"><code>setBasePath()</code></h4>

```php
public function setBasePath( string $basePath ): static;
```

Sets base path. Depending of your platform, always add a trailing slash
or backslash

```php
$view->setBasePath(__DIR__ . "/");
```

<h4 id="mvcview-setlayout"><code>setLayout()</code></h4>

```php
public function setLayout( string $layout ): static;
```

Change the layout to be used instead of using the name of the latest
controller name

```php
$this->view->setLayout("main");
```

<h4 id="mvcview-setlayoutsdir"><code>setLayoutsDir()</code></h4>

```php
public function setLayoutsDir( string $layoutsDir ): static;
```

Sets the layouts sub-directory. Must be a directory under the views
directory. Depending of your platform, always add a trailing slash or
backslash

```php
$view->setLayoutsDir("../common/layouts/");
```

<h4 id="mvcview-setmainview"><code>setMainView()</code></h4>

```php
public function setMainView( string $viewPath ): static;
```

Sets default view name. Must be a file without extension in the views
directory

```php
// Renders as main view views-dir/base.phtml
$this->view->setMainView("base");
```

<h4 id="mvcview-setparamtoview"><code>setParamToView()</code></h4>

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

<h4 id="mvcview-setpartialsdir"><code>setPartialsDir()</code></h4>

```php
public function setPartialsDir( string $partialsDir ): static;
```

Sets a partials sub-directory. Must be a directory under the views
directory. Depending of your platform, always add a trailing slash or
backslash

```php
$view->setPartialsDir("../common/partials/");
```

<h4 id="mvcview-setrenderlevel"><code>setRenderLevel()</code></h4>

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

<h4 id="mvcview-settemplateafter"><code>setTemplateAfter()</code></h4>

```php
public function setTemplateAfter( array|string $templateAfter ): static;
```

Sets a "template after" controller layout

<h4 id="mvcview-settemplatebefore"><code>setTemplateBefore()</code></h4>

```php
public function setTemplateBefore( array|string $templateBefore ): static;
```

Sets a template before the controller layout

<h4 id="mvcview-setvars"><code>setVars()</code></h4>

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

<h4 id="mvcview-setviewsdir"><code>setViewsDir()</code></h4>

```php
public function setViewsDir( array|string $viewsDir ): static;
```

Sets the views directory. Depending of your platform,
always add a trailing slash or backslash

<h4 id="mvcview-start"><code>start()</code></h4>

```php
public function start(): static;
```

Starts rendering process enabling the output buffering

<h4 id="mvcview-tostring"><code>toString()</code></h4>

```php
public function toString(
string $controllerName,
string $actionName,
array $params = []
): string;
```

Renders the view and returns it as a string

<h4 id="mvcview-enginerender"><code>engineRender()</code></h4>

```php
protected function engineRender(
array $engines,
string $viewPath,
bool $silence,
bool $mustClean = true
);
```

Checks whether view exists on registered extensions and render it

<h4 id="mvcview-getviewsdirs"><code>getViewsDirs()</code></h4>

```php
protected function getViewsDirs(): array;
```

Gets views directories

<h4 id="mvcview-isabsolutepath"><code>isAbsolutePath()</code></h4>

```php
final protected function isAbsolutePath( string $path ): bool;
```

Checks if a path is absolute or not

<h4 id="mvcview-loadtemplateengines"><code>loadTemplateEngines()</code></h4>

```php
protected function loadTemplateEngines(): array;
```

Loads registered template engines, if none is registered it will use
Phalcon\Mvc\View\Engine\Php

## Mvc\ViewBaseInterface

Interface

Interface for Phalcon\Mvc\View and Phalcon\Mvc\View\Simple

- **`Phalcon\Mvc\ViewBaseInterface`**
- [`Phalcon\Mvc\ViewInterface`](#mvcviewinterface)

### Method Summary

<ApiItem href="#mvcviewbaseinterface-getcontent" visibility="public" name="getContent" returnType="string" params={[]}>
Returns cached output from another view stage
</ApiItem>
<ApiItem href="#mvcviewbaseinterface-getparamstoview" visibility="public" name="getParamsToView" returnType="array" params={[]}>
Returns parameters to views
</ApiItem>
<ApiItem href="#mvcviewbaseinterface-getviewsdir" visibility="public" name="getViewsDir" returnType="array|string" params={[]}>
Gets views directory
</ApiItem>
<ApiItem href="#mvcviewbaseinterface-partial" visibility="public" name="partial" returnType="" params={[{"type":"string","name":"partialPath","default":null},{"type":"mixed","name":"params","default":"null"}]}>
Renders a partial view
</ApiItem>
<ApiItem href="#mvcviewbaseinterface-setcontent" visibility="public" name="setContent" returnType="" params={[{"type":"string","name":"content","default":null}]}>
Externally sets the view content
</ApiItem>
<ApiItem href="#mvcviewbaseinterface-setparamtoview" visibility="public" name="setParamToView" returnType="" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null}]}>
Adds parameters to views (alias of setVar)
</ApiItem>
<ApiItem href="#mvcviewbaseinterface-setvar" visibility="public" name="setVar" returnType="" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null}]}>
Adds parameters to views
</ApiItem>
<ApiItem href="#mvcviewbaseinterface-setviewsdir" visibility="public" name="setViewsDir" returnType="" params={[{"type":"string","name":"viewsDir","default":null}]}>
Sets views directory. Depending of your platform, always add a trailing
</ApiItem>

### Methods

<h4 id="mvcviewbaseinterface-getcontent"><code>getContent()</code></h4>

```php
public function getContent(): string;
```

Returns cached output from another view stage

<h4 id="mvcviewbaseinterface-getparamstoview"><code>getParamsToView()</code></h4>

```php
public function getParamsToView(): array;
```

Returns parameters to views

<h4 id="mvcviewbaseinterface-getviewsdir"><code>getViewsDir()</code></h4>

```php
public function getViewsDir(): array|string;
```

Gets views directory

<h4 id="mvcviewbaseinterface-partial"><code>partial()</code></h4>

```php
public function partial(
string $partialPath,
mixed $params = null
);
```

Renders a partial view

<h4 id="mvcviewbaseinterface-setcontent"><code>setContent()</code></h4>

```php
public function setContent( string $content );
```

Externally sets the view content

<h4 id="mvcviewbaseinterface-setparamtoview"><code>setParamToView()</code></h4>

```php
public function setParamToView(
string $key,
mixed $value
);
```

Adds parameters to views (alias of setVar)

<h4 id="mvcviewbaseinterface-setvar"><code>setVar()</code></h4>

```php
public function setVar(
string $key,
mixed $value
);
```

Adds parameters to views

<h4 id="mvcviewbaseinterface-setviewsdir"><code>setViewsDir()</code></h4>

```php
public function setViewsDir( string $viewsDir );
```

Sets views directory. Depending of your platform, always add a trailing
slash or backslash

## Mvc\ViewInterface

Interface

Interface for Phalcon\Mvc\View

- [`Phalcon\Mvc\ViewBaseInterface`](#mvcviewbaseinterface)
- **`Phalcon\Mvc\ViewInterface`**

### Method Summary

<ApiItem href="#mvcviewinterface-cleantemplateafter" visibility="public" name="cleanTemplateAfter" returnType="" params={[]}>
Resets any template before layouts
</ApiItem>
<ApiItem href="#mvcviewinterface-cleantemplatebefore" visibility="public" name="cleanTemplateBefore" returnType="" params={[]}>
Resets any template before layouts
</ApiItem>
<ApiItem href="#mvcviewinterface-disable" visibility="public" name="disable" returnType="" params={[]}>
Disables the auto-rendering process
</ApiItem>
<ApiItem href="#mvcviewinterface-enable" visibility="public" name="enable" returnType="" params={[]}>
Enables the auto-rendering process
</ApiItem>
<ApiItem href="#mvcviewinterface-finish" visibility="public" name="finish" returnType="" params={[]}>
Finishes the render process by stopping the output buffering
</ApiItem>
<ApiItem href="#mvcviewinterface-getactionname" visibility="public" name="getActionName" returnType="string" params={[]}>
Gets the name of the action rendered
</ApiItem>
<ApiItem href="#mvcviewinterface-getactiverenderpath" visibility="public" name="getActiveRenderPath" returnType="array|string" params={[]}>
Returns the path of the view that is currently rendered
</ApiItem>
<ApiItem href="#mvcviewinterface-getbasepath" visibility="public" name="getBasePath" returnType="string" params={[]}>
Gets base path
</ApiItem>
<ApiItem href="#mvcviewinterface-getcontrollername" visibility="public" name="getControllerName" returnType="string" params={[]}>
Gets the name of the controller rendered
</ApiItem>
<ApiItem href="#mvcviewinterface-getlayout" visibility="public" name="getLayout" returnType="string|null" params={[]}>
Returns the name of the main view
</ApiItem>
<ApiItem href="#mvcviewinterface-getlayoutsdir" visibility="public" name="getLayoutsDir" returnType="string" params={[]}>
Gets the current layouts sub-directory
</ApiItem>
<ApiItem href="#mvcviewinterface-getmainview" visibility="public" name="getMainView" returnType="string" params={[]}>
Returns the name of the main view
</ApiItem>
<ApiItem href="#mvcviewinterface-getpartialsdir" visibility="public" name="getPartialsDir" returnType="string" params={[]}>
Gets the current partials sub-directory
</ApiItem>
<ApiItem href="#mvcviewinterface-isdisabled" visibility="public" name="isDisabled" returnType="bool" params={[]}>
Whether the automatic rendering is disabled
</ApiItem>
<ApiItem href="#mvcviewinterface-pick" visibility="public" name="pick" returnType="" params={[{"type":"string","name":"renderView","default":null}]}>
Choose a view different to render than last-controller/last-action
</ApiItem>
<ApiItem href="#mvcviewinterface-registerengines" visibility="public" name="registerEngines" returnType="" params={[{"type":"array","name":"engines","default":null}]}>
Register templating engines
</ApiItem>
<ApiItem href="#mvcviewinterface-render" visibility="public" name="render" returnType="bool|ViewInterface" params={[{"type":"string","name":"controllerName","default":null},{"type":"string","name":"actionName","default":null},{"type":"array","name":"params","default":"[]"}]}>
Executes render process from dispatching data
</ApiItem>
<ApiItem href="#mvcviewinterface-reset" visibility="public" name="reset" returnType="" params={[]}>
Resets the view component to its factory default values
</ApiItem>
<ApiItem href="#mvcviewinterface-setbasepath" visibility="public" name="setBasePath" returnType="" params={[{"type":"string","name":"basePath","default":null}]}>
Sets base path. Depending of your platform, always add a trailing slash
</ApiItem>
<ApiItem href="#mvcviewinterface-setlayout" visibility="public" name="setLayout" returnType="" params={[{"type":"string","name":"layout","default":null}]}>
Change the layout to be used instead of using the name of the latest
</ApiItem>
<ApiItem href="#mvcviewinterface-setlayoutsdir" visibility="public" name="setLayoutsDir" returnType="" params={[{"type":"string","name":"layoutsDir","default":null}]}>
Sets the layouts sub-directory. Must be a directory under the views
</ApiItem>
<ApiItem href="#mvcviewinterface-setmainview" visibility="public" name="setMainView" returnType="" params={[{"type":"string","name":"viewPath","default":null}]}>
Sets default view name. Must be a file without extension in the views
</ApiItem>
<ApiItem href="#mvcviewinterface-setpartialsdir" visibility="public" name="setPartialsDir" returnType="" params={[{"type":"string","name":"partialsDir","default":null}]}>
Sets a partials sub-directory. Must be a directory under the views
</ApiItem>
<ApiItem href="#mvcviewinterface-setrenderlevel" visibility="public" name="setRenderLevel" returnType="ViewInterface" params={[{"type":"int","name":"level","default":null}]}>
Sets the render level for the view
</ApiItem>
<ApiItem href="#mvcviewinterface-settemplateafter" visibility="public" name="setTemplateAfter" returnType="" params={[{"type":"array|string","name":"templateAfter","default":null}]}>
Appends template after controller layout
</ApiItem>
<ApiItem href="#mvcviewinterface-settemplatebefore" visibility="public" name="setTemplateBefore" returnType="" params={[{"type":"array|string","name":"templateBefore","default":null}]}>
Appends template before controller layout
</ApiItem>
<ApiItem href="#mvcviewinterface-start" visibility="public" name="start" returnType="" params={[]}>
Starts rendering process enabling the output buffering
</ApiItem>

### Methods

<h4 id="mvcviewinterface-cleantemplateafter"><code>cleanTemplateAfter()</code></h4>

```php
public function cleanTemplateAfter();
```

Resets any template before layouts

<h4 id="mvcviewinterface-cleantemplatebefore"><code>cleanTemplateBefore()</code></h4>

```php
public function cleanTemplateBefore();
```

Resets any template before layouts

<h4 id="mvcviewinterface-disable"><code>disable()</code></h4>

```php
public function disable();
```

Disables the auto-rendering process

<h4 id="mvcviewinterface-enable"><code>enable()</code></h4>

```php
public function enable();
```

Enables the auto-rendering process

<h4 id="mvcviewinterface-finish"><code>finish()</code></h4>

```php
public function finish();
```

Finishes the render process by stopping the output buffering

<h4 id="mvcviewinterface-getactionname"><code>getActionName()</code></h4>

```php
public function getActionName(): string;
```

Gets the name of the action rendered

<h4 id="mvcviewinterface-getactiverenderpath"><code>getActiveRenderPath()</code></h4>

```php
public function getActiveRenderPath(): array|string;
```

Returns the path of the view that is currently rendered

<h4 id="mvcviewinterface-getbasepath"><code>getBasePath()</code></h4>

```php
public function getBasePath(): string;
```

Gets base path

<h4 id="mvcviewinterface-getcontrollername"><code>getControllerName()</code></h4>

```php
public function getControllerName(): string;
```

Gets the name of the controller rendered

<h4 id="mvcviewinterface-getlayout"><code>getLayout()</code></h4>

```php
public function getLayout(): string|null;
```

Returns the name of the main view

<h4 id="mvcviewinterface-getlayoutsdir"><code>getLayoutsDir()</code></h4>

```php
public function getLayoutsDir(): string;
```

Gets the current layouts sub-directory

<h4 id="mvcviewinterface-getmainview"><code>getMainView()</code></h4>

```php
public function getMainView(): string;
```

Returns the name of the main view

<h4 id="mvcviewinterface-getpartialsdir"><code>getPartialsDir()</code></h4>

```php
public function getPartialsDir(): string;
```

Gets the current partials sub-directory

<h4 id="mvcviewinterface-isdisabled"><code>isDisabled()</code></h4>

```php
public function isDisabled(): bool;
```

Whether the automatic rendering is disabled

<h4 id="mvcviewinterface-pick"><code>pick()</code></h4>

```php
public function pick( string $renderView );
```

Choose a view different to render than last-controller/last-action

<h4 id="mvcviewinterface-registerengines"><code>registerEngines()</code></h4>

```php
public function registerEngines( array $engines );
```

Register templating engines

<h4 id="mvcviewinterface-render"><code>render()</code></h4>

```php
public function render(
string $controllerName,
string $actionName,
array $params = []
): bool|ViewInterface;
```

Executes render process from dispatching data

<h4 id="mvcviewinterface-reset"><code>reset()</code></h4>

```php
public function reset();
```

Resets the view component to its factory default values

<h4 id="mvcviewinterface-setbasepath"><code>setBasePath()</code></h4>

```php
public function setBasePath( string $basePath );
```

Sets base path. Depending of your platform, always add a trailing slash
or backslash

<h4 id="mvcviewinterface-setlayout"><code>setLayout()</code></h4>

```php
public function setLayout( string $layout );
```

Change the layout to be used instead of using the name of the latest
controller name

<h4 id="mvcviewinterface-setlayoutsdir"><code>setLayoutsDir()</code></h4>

```php
public function setLayoutsDir( string $layoutsDir );
```

Sets the layouts sub-directory. Must be a directory under the views
directory. Depending of your platform, always add a trailing slash or
backslash

<h4 id="mvcviewinterface-setmainview"><code>setMainView()</code></h4>

```php
public function setMainView( string $viewPath );
```

Sets default view name. Must be a file without extension in the views
directory

<h4 id="mvcviewinterface-setpartialsdir"><code>setPartialsDir()</code></h4>

```php
public function setPartialsDir( string $partialsDir );
```

Sets a partials sub-directory. Must be a directory under the views
directory. Depending of your platform, always add a trailing slash or
backslash

<h4 id="mvcviewinterface-setrenderlevel"><code>setRenderLevel()</code></h4>

```php
public function setRenderLevel( int $level ): ViewInterface;
```

Sets the render level for the view

<h4 id="mvcviewinterface-settemplateafter"><code>setTemplateAfter()</code></h4>

```php
public function setTemplateAfter( array|string $templateAfter );
```

Appends template after controller layout

<h4 id="mvcviewinterface-settemplatebefore"><code>setTemplateBefore()</code></h4>

```php
public function setTemplateBefore( array|string $templateBefore );
```

Appends template before controller layout

<h4 id="mvcviewinterface-start"><code>start()</code></h4>

```php
public function start();
```

Starts rendering process enabling the output buffering

## Mvc\View\Engine\AbstractEngine

Abstract

All the template engine adapters must inherit this class. This provides
basic interfacing between the engine and the Phalcon\Mvc\View component.

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- **`Phalcon\Mvc\View\Engine\AbstractEngine`** - implements [`Phalcon\Mvc\View\Engine\EngineInterface`](#mvcviewengineengineinterface), [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)
- [`Phalcon\Mvc\View\Engine\Php`](#mvcviewenginephp)
- [`Phalcon\Mvc\View\Engine\Volt`](#mvcviewenginevolt)

`Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Mvc\ViewBaseInterface`

### Method Summary

<ApiItem href="#mvcviewengineabstractengine-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"ViewBaseInterface","name":"view","default":null},{"type":"DiInterface|null","name":"container","default":"null"}]}>
Phalcon\Mvc\View\Engine constructor
</ApiItem>
<ApiItem href="#mvcviewengineabstractengine-getcontent" visibility="public" name="getContent" returnType="string" params={[]}>
Returns cached output on another view stage
</ApiItem>
<ApiItem href="#mvcviewengineabstractengine-getview" visibility="public" name="getView" returnType="ViewBaseInterface" params={[]}>
Returns the view component related to the adapter
</ApiItem>
<ApiItem href="#mvcviewengineabstractengine-partial" visibility="public" name="partial" returnType="void" params={[{"type":"string","name":"partialPath","default":null},{"type":"mixed","name":"params","default":"null"}]}>
Renders a partial inside another view
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="view" type="ViewBaseInterface" default="">
</ApiItem>

### Methods

<h4 id="mvcviewengineabstractengine-__construct"><code>__construct()</code></h4>

```php
public function __construct(
ViewBaseInterface $view,
DiInterface|null $container = null
);
```

Phalcon\Mvc\View\Engine constructor

<h4 id="mvcviewengineabstractengine-getcontent"><code>getContent()</code></h4>

```php
public function getContent(): string;
```

Returns cached output on another view stage

<h4 id="mvcviewengineabstractengine-getview"><code>getView()</code></h4>

```php
public function getView(): ViewBaseInterface;
```

Returns the view component related to the adapter

<h4 id="mvcviewengineabstractengine-partial"><code>partial()</code></h4>

```php
public function partial(
string $partialPath,
mixed $params = null
): void;
```

Renders a partial inside another view

## Mvc\View\Engine\EngineInterface

Interface

Interface for Phalcon\Mvc\View engine adapters

- **`Phalcon\Mvc\View\Engine\EngineInterface`**

### Method Summary

<ApiItem href="#mvcviewengineengineinterface-getcontent" visibility="public" name="getContent" returnType="string" params={[]}>
Returns cached output on another view stage
</ApiItem>
<ApiItem href="#mvcviewengineengineinterface-partial" visibility="public" name="partial" returnType="void" params={[{"type":"string","name":"partialPath","default":null},{"type":"mixed","name":"params","default":"null"}]}>
Renders a partial inside another view
</ApiItem>
<ApiItem href="#mvcviewengineengineinterface-render" visibility="public" name="render" returnType="" params={[{"type":"string","name":"path","default":null},{"type":"mixed","name":"params","default":null},{"type":"bool","name":"mustClean","default":"false"}]}>
Renders a view using the template engine
</ApiItem>

### Methods

<h4 id="mvcviewengineengineinterface-getcontent"><code>getContent()</code></h4>

```php
public function getContent(): string;
```

Returns cached output on another view stage

<h4 id="mvcviewengineengineinterface-partial"><code>partial()</code></h4>

```php
public function partial(
string $partialPath,
mixed $params = null
): void;
```

Renders a partial inside another view

<h4 id="mvcviewengineengineinterface-render"><code>render()</code></h4>

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

Class

Adapter to use PHP itself as templating engine

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- [`Phalcon\Mvc\View\Engine\AbstractEngine`](#mvcviewengineabstractengine)
- **`Phalcon\Mvc\View\Engine\Php`**

### Method Summary

<ApiItem href="#mvcviewenginephp-render" visibility="public" name="render" returnType="" params={[{"type":"string","name":"path","default":null},{"type":"mixed","name":"params","default":null},{"type":"bool","name":"mustClean","default":"false"}]}>
Renders a view using the template engine
</ApiItem>

### Methods

<h4 id="mvcviewenginephp-render"><code>render()</code></h4>

```php
public function render(
string $path,
mixed $params,
bool $mustClean = false
);
```

Renders a view using the template engine

## Mvc\View\Engine\Volt

Class

Designer friendly and fast template engine for PHP written in Zephir/C

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- [`Phalcon\Mvc\View\Engine\AbstractEngine`](#mvcviewengineabstractengine)
- **`Phalcon\Mvc\View\Engine\Volt`** - implements [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface)

`Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Exception` · `Phalcon\Html\Link\Link` · `Phalcon\Html\Link\Serializer\Header` · `Phalcon\Mvc\View\Engine\Volt\Compiler` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\MacroNotFound` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\MbstringRequired`

### Method Summary

<ApiItem href="#mvcviewenginevolt-callmacro" visibility="public" name="callMacro" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"arguments","default":"[]"}]}>
Checks if a macro is defined and calls it
</ApiItem>
<ApiItem href="#mvcviewenginevolt-convertencoding" visibility="public" name="convertEncoding" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"from","default":null},{"type":"string","name":"to","default":null}]}>
Performs a string conversion
</ApiItem>
<ApiItem href="#mvcviewenginevolt-getcompiler" visibility="public" name="getCompiler" returnType="Compiler" params={[]}>
Returns the Volt's compiler
</ApiItem>
<ApiItem href="#mvcviewenginevolt-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
Return Volt's options
</ApiItem>
<ApiItem href="#mvcviewenginevolt-isincluded" visibility="public" name="isIncluded" returnType="bool" params={[{"type":"mixed","name":"needle","default":null},{"type":"array|string","name":"haystack","default":null}]}>
Checks if the needle is included in the haystack
</ApiItem>
<ApiItem href="#mvcviewenginevolt-length" visibility="public" name="length" returnType="int" params={[{"type":"mixed","name":"item","default":null}]}>
Length filter. If an array/object is passed a count is performed otherwise a strlen/mb_strlen
</ApiItem>
<ApiItem href="#mvcviewenginevolt-preload" visibility="public" name="preload" returnType="string" params={[{"type":"mixed","name":"parameters","default":null}]}>
Parses the preload element passed and sets the necessary link headers
</ApiItem>
<ApiItem href="#mvcviewenginevolt-render" visibility="public" name="render" returnType="" params={[{"type":"string","name":"path","default":null},{"type":"mixed","name":"params","default":null},{"type":"bool","name":"mustClean","default":"false"}]}>
Renders a view using the template engine
</ApiItem>
<ApiItem href="#mvcviewenginevolt-setoptions" visibility="public" name="setOptions" returnType="void" params={[{"type":"array","name":"options","default":null}]}>
Set Volt's options
</ApiItem>
<ApiItem href="#mvcviewenginevolt-slice" visibility="public" name="slice" returnType="array|string" params={[{"type":"mixed","name":"value","default":null},{"type":"int","name":"start","default":"0"},{"type":"mixed","name":"end","default":"null"}]}>
Extracts a slice from a string/array/traversable object value
</ApiItem>
<ApiItem href="#mvcviewenginevolt-sort" visibility="public" name="sort" returnType="array" params={[{"type":"array","name":"value","default":null}]}>
Sorts an array
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="compiler" type="Compiler|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="macros" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="mvcviewenginevolt-callmacro"><code>callMacro()</code></h4>

```php
public function callMacro(
string $name,
array $arguments = []
): mixed;
```

Checks if a macro is defined and calls it

<h4 id="mvcviewenginevolt-convertencoding"><code>convertEncoding()</code></h4>

```php
public function convertEncoding(
string $text,
string $from,
string $to
): string;
```

Performs a string conversion

<h4 id="mvcviewenginevolt-getcompiler"><code>getCompiler()</code></h4>

```php
public function getCompiler(): Compiler;
```

Returns the Volt's compiler

<h4 id="mvcviewenginevolt-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Return Volt's options

<h4 id="mvcviewenginevolt-isincluded"><code>isIncluded()</code></h4>

```php
public function isIncluded(
mixed $needle,
array|string $haystack
): bool;
```

Checks if the needle is included in the haystack

<h4 id="mvcviewenginevolt-length"><code>length()</code></h4>

```php
public function length( mixed $item ): int;
```

Length filter. If an array/object is passed a count is performed otherwise a strlen/mb_strlen

<h4 id="mvcviewenginevolt-preload"><code>preload()</code></h4>

```php
public function preload( mixed $parameters ): string;
```

Parses the preload element passed and sets the necessary link headers

@todo find a better way to handle this

<h4 id="mvcviewenginevolt-render"><code>render()</code></h4>

```php
public function render(
string $path,
mixed $params,
bool $mustClean = false
);
```

Renders a view using the template engine

TODO: Make params array

<h4 id="mvcviewenginevolt-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): void;
```

Set Volt's options

<h4 id="mvcviewenginevolt-slice"><code>slice()</code></h4>

```php
public function slice(
mixed $value,
int $start = 0,
mixed $end = null
): array|string;
```

Extracts a slice from a string/array/traversable object value

<h4 id="mvcviewenginevolt-sort"><code>sort()</code></h4>

```php
public function sort( array $value ): array;
```

Sorts an array

## Mvc\View\Engine\Volt\Compiler

Class

This class reads and compiles Volt templates into PHP plain code

```php
$compiler = new \Phalcon\Mvc\View\Engine\Volt\Compiler();

$compiler->compile("views/partials/header.volt");

require $compiler->getCompiledTemplatePath();
```

- **`Phalcon\Mvc\View\Engine\Volt\Compiler`** - implements [`Phalcon\Di\InjectionAwareInterface`](/6.0/api/phalcon_di/#diinjectionawareinterface)

`Closure` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Di\Traits\InjectionAwareTrait` · `Phalcon\Mvc\ViewBaseInterface` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\CannotOpenCompiledFile` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\CorruptedStatement` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\CorruptedStatementWithData` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidCompilationPrefix` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidExtension` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidOptionType` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidPathClosureReturn` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidPathType` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidStatement` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidUserFilterDefinition` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidUserFunctionDefinition` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\MacroAlreadyDefined` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplateFileNotFound` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplateFileNotOpenable` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplatePathCollision` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltExpression` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilter` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilterType` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltStatement` · `Phalcon\Mvc\View\Engine\Volt\Exceptions\VoltDirectoryNotWritable` · `Phalcon\Support\Traits\FilePathTrait` · `Phalcon\Traits\Support\Helper\Str\CamelizeTrait` · `Phalcon\Volt\Compiler\Opcode` · `Phalcon\Volt\Parser\Parser`

### Method Summary

<ApiItem href="#mvcviewenginevoltcompiler-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"ViewBaseInterface|null","name":"view","default":"null"}]}>
Phalcon\Mvc\View\Engine\Volt\Compiler
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-addextension" visibility="public" name="addExtension" returnType="static" params={[{"type":"mixed","name":"extension","default":null}]}>
Registers a Volt's extension
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-addfilter" visibility="public" name="addFilter" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null}]}>
Register a new filter in the compiler
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-addfunction" visibility="public" name="addFunction" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"definition","default":null}]}>
Register a new function in the compiler
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-attributereader" visibility="public" name="attributeReader" returnType="string" params={[{"type":"array","name":"expr","default":null}]}>
Resolves attribute reading
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compile" visibility="public" name="compile" returnType="mixed" params={[{"type":"string","name":"templatePath","default":null},{"type":"bool","name":"extendsMode","default":"false"}]}>
Compiles a template into a file applying the compiler options
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compileautoescape" visibility="public" name="compileAutoEscape" returnType="string" params={[{"type":"array","name":"statement","default":null},{"type":"bool","name":"extendsMode","default":null}]}>
Compiles a "autoescape" statement returning PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compilecall" visibility="public" name="compileCall" returnType="string" params={[{"type":"array","name":"statement","default":null},{"type":"bool","name":"extendsMode","default":null}]}>
Compiles calls to macros
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compilecase" visibility="public" name="compileCase" returnType="string" params={[{"type":"array","name":"statement","default":null},{"type":"bool","name":"caseClause","default":"true"}]}>
Compiles a "case"/"default" clause returning PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compiledo" visibility="public" name="compileDo" returnType="string" params={[{"type":"array","name":"statement","default":null}]}>
Compiles a "do" statement returning PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compileecho" visibility="public" name="compileEcho" returnType="string" params={[{"type":"array","name":"statement","default":null}]}>
Compiles a \{% raw %\}`{{` `}}`\{% endraw %\} statement returning PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compileelseif" visibility="public" name="compileElseIf" returnType="string" params={[{"type":"array","name":"statement","default":null}]}>
Compiles a "elseif" statement returning PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compilefile" visibility="public" name="compileFile" returnType="array|string" params={[{"type":"string","name":"path","default":null},{"type":"string","name":"compiledPath","default":null},{"type":"bool","name":"extendsMode","default":"false"}]}>
Compiles a template into a file forcing the destination path
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compileforelse" visibility="public" name="compileForElse" returnType="string" params={[]}>
Generates a 'forelse' PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compileforeach" visibility="public" name="compileForeach" returnType="string" params={[{"type":"array","name":"statement","default":null},{"type":"bool","name":"extendsMode","default":"false"}]}>
Compiles a "foreach" intermediate code representation into plain PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compileif" visibility="public" name="compileIf" returnType="string" params={[{"type":"array","name":"statement","default":null},{"type":"bool","name":"extendsMode","default":"false"}]}>
Compiles a 'if' statement returning PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compileinclude" visibility="public" name="compileInclude" returnType="string" params={[{"type":"array","name":"statement","default":null}]}>
Compiles a 'include' statement returning PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compilemacro" visibility="public" name="compileMacro" returnType="string" params={[{"type":"array","name":"statement","default":null},{"type":"bool","name":"extendsMode","default":null}]}>
Compiles macros
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compilereturn" visibility="public" name="compileReturn" returnType="string" params={[{"type":"array","name":"statement","default":null}]}>
Compiles a "return" statement returning PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compileset" visibility="public" name="compileSet" returnType="string" params={[{"type":"array","name":"statement","default":null}]}>
Compiles a "set" statement returning PHP code. The method accepts an
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compilestring" visibility="public" name="compileString" returnType="string" params={[{"type":"string","name":"viewCode","default":null},{"type":"bool","name":"extendsMode","default":"false"}]}>
Compiles a template into a string
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compileswitch" visibility="public" name="compileSwitch" returnType="string" params={[{"type":"array","name":"statement","default":null},{"type":"bool","name":"extendsMode","default":"false"}]}>
Compiles a 'switch' statement returning PHP code
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-expression" visibility="public" name="expression" returnType="string" params={[{"type":"array","name":"expr","default":null},{"type":"bool","name":"doubleQuotes","default":"false"}]}>
Resolves an expression node in an AST volt tree
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-fireextensionevent" visibility="public" name="fireExtensionEvent" returnType="mixed" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"arguments","default":"[]"}]}>
Fires an event to registered extensions
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-functioncall" visibility="public" name="functionCall" returnType="string" params={[{"type":"array","name":"expr","default":null},{"type":"bool","name":"doubleQuotes","default":"false"}]}>
Resolves function intermediate code into PHP function calls
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-getcompiledtemplatepath" visibility="public" name="getCompiledTemplatePath" returnType="string" params={[]}>
Returns the path to the last compiled template
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-getextensions" visibility="public" name="getExtensions" returnType="array" params={[]}>
Returns the list of extensions registered in Volt
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-getfilters" visibility="public" name="getFilters" returnType="array" params={[]}>
Register the user registered filters
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-getfunctions" visibility="public" name="getFunctions" returnType="array" params={[]}>
Register the user registered functions
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-getoption" visibility="public" name="getOption" returnType="string|null" params={[{"type":"string","name":"option","default":null}]}>
Returns a compiler's option
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
Returns the compiler options
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-gettemplatepath" visibility="public" name="getTemplatePath" returnType="string" params={[]}>
Returns the path that is currently being compiled
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-getuniqueprefix" visibility="public" name="getUniquePrefix" returnType="string" params={[]}>
Return a unique prefix to be used as prefix for compiled variables and
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-parse" visibility="public" name="parse" returnType="array" params={[{"type":"string","name":"viewCode","default":null}]}>
Parses a Volt template returning its intermediate representation
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-resolvetest" visibility="public" name="resolveTest" returnType="string" params={[{"type":"array","name":"test","default":null},{"type":"string","name":"left","default":null}]}>
Resolves filter intermediate code into a valid PHP expression
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-setoption" visibility="public" name="setOption" returnType="static" params={[{"type":"string","name":"option","default":null},{"type":"mixed","name":"value","default":null}]}>
Sets a single compiler option
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-setoptions" visibility="public" name="setOptions" returnType="static" params={[{"type":"array","name":"options","default":null}]}>
Sets the compiler options
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-setuniqueprefix" visibility="public" name="setUniquePrefix" returnType="static" params={[{"type":"string","name":"prefix","default":null}]}>
Set a unique prefix to be used as prefix for compiled variables
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-compilesource" visibility="protected" name="compileSource" returnType="array|string" params={[{"type":"string","name":"viewCode","default":null},{"type":"bool","name":"extendsMode","default":"false"}]}>
Compiles a Volt source code returning a PHP plain version
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-getfinalpath" visibility="protected" name="getFinalPath" returnType="string" params={[{"type":"string","name":"path","default":null}]}>
Gets the final path with VIEW
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-resolvefilter" visibility="protected" name="resolveFilter" returnType="string" params={[{"type":"array","name":"filter","default":null},{"type":"string","name":"left","default":null}]}>
Resolves filter intermediate code into PHP function calls
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-statementlist" visibility="protected" name="statementList" returnType="string" params={[{"type":"array","name":"statements","default":null},{"type":"bool","name":"extendsMode","default":"false"}]}>
Traverses a statement list compiling each of its nodes
</ApiItem>
<ApiItem href="#mvcviewenginevoltcompiler-statementlistorextends" visibility="protected" name="statementListOrExtends" returnType="mixed" params={[{"type":"mixed","name":"statements","default":null}]}>
Compiles a block of statements
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="autoescape" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="blockLevel" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="blocks" type="array|null" default="null">
TODO: Make array only?
</ApiItem>
<ApiItem kind="property" visibility="protected" name="compiledTemplatePath" type="string|null" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="currentBlock" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="currentPath" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="exprLevel" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="extended" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="extendedBlocks" type="array|bool" default="">
TODO: Make it always array
</ApiItem>
<ApiItem kind="property" visibility="protected" name="extensions" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="filters" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="forElsePointers" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="foreachLevel" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="functions" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="level" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="loopPointers" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="macros" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="parser" type="Parser" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="prefix" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="view" type="ViewBaseInterface|null" default="null">
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltcompiler-__construct"><code>__construct()</code></h4>

```php
public function __construct( ViewBaseInterface|null $view = null );
```

Phalcon\Mvc\View\Engine\Volt\Compiler

<h4 id="mvcviewenginevoltcompiler-addextension"><code>addExtension()</code></h4>

```php
public function addExtension( mixed $extension ): static;
```

Registers a Volt's extension

<h4 id="mvcviewenginevoltcompiler-addfilter"><code>addFilter()</code></h4>

```php
public function addFilter(
string $name,
mixed $definition
): static;
```

Register a new filter in the compiler

<h4 id="mvcviewenginevoltcompiler-addfunction"><code>addFunction()</code></h4>

```php
public function addFunction(
string $name,
mixed $definition
): static;
```

Register a new function in the compiler

<h4 id="mvcviewenginevoltcompiler-attributereader"><code>attributeReader()</code></h4>

```php
public function attributeReader( array $expr ): string;
```

Resolves attribute reading

<h4 id="mvcviewenginevoltcompiler-compile"><code>compile()</code></h4>

```php
public function compile(
string $templatePath,
bool $extendsMode = false
): mixed;
```

Compiles a template into a file applying the compiler options
This method does not return the compiled path if the template was not compiled

```php
$compiler->compile("views/layouts/main.volt");

require $compiler->getCompiledTemplatePath();
```

<h4 id="mvcviewenginevoltcompiler-compileautoescape"><code>compileAutoEscape()</code></h4>

```php
public function compileAutoEscape(
array $statement,
bool $extendsMode
): string;
```

Compiles a "autoescape" statement returning PHP code

<h4 id="mvcviewenginevoltcompiler-compilecall"><code>compileCall()</code></h4>

```php
public function compileCall(
array $statement,
bool $extendsMode
): string;
```

Compiles calls to macros

<h4 id="mvcviewenginevoltcompiler-compilecase"><code>compileCase()</code></h4>

```php
public function compileCase(
array $statement,
bool $caseClause = true
): string;
```

Compiles a "case"/"default" clause returning PHP code

<h4 id="mvcviewenginevoltcompiler-compiledo"><code>compileDo()</code></h4>

```php
public function compileDo( array $statement ): string;
```

Compiles a "do" statement returning PHP code

<h4 id="mvcviewenginevoltcompiler-compileecho"><code>compileEcho()</code></h4>

```php
public function compileEcho( array $statement ): string;
```

Compiles a \{% raw %\}`{{` `}}`\{% endraw %\} statement returning PHP code

<h4 id="mvcviewenginevoltcompiler-compileelseif"><code>compileElseIf()</code></h4>

```php
public function compileElseIf( array $statement ): string;
```

Compiles a "elseif" statement returning PHP code

<h4 id="mvcviewenginevoltcompiler-compilefile"><code>compileFile()</code></h4>

```php
public function compileFile(
string $path,
string $compiledPath,
bool $extendsMode = false
): array|string;
```

Compiles a template into a file forcing the destination path

```php
$compiler->compileFile(
"views/layouts/main.volt",
"views/layouts/main.volt.php"
);
```

<h4 id="mvcviewenginevoltcompiler-compileforelse"><code>compileForElse()</code></h4>

```php
public function compileForElse(): string;
```

Generates a 'forelse' PHP code

<h4 id="mvcviewenginevoltcompiler-compileforeach"><code>compileForeach()</code></h4>

```php
public function compileForeach(
array $statement,
bool $extendsMode = false
): string;
```

Compiles a "foreach" intermediate code representation into plain PHP code

<h4 id="mvcviewenginevoltcompiler-compileif"><code>compileIf()</code></h4>

```php
public function compileIf(
array $statement,
bool $extendsMode = false
): string;
```

Compiles a 'if' statement returning PHP code

<h4 id="mvcviewenginevoltcompiler-compileinclude"><code>compileInclude()</code></h4>

```php
public function compileInclude( array $statement ): string;
```

Compiles a 'include' statement returning PHP code

<h4 id="mvcviewenginevoltcompiler-compilemacro"><code>compileMacro()</code></h4>

```php
public function compileMacro(
array $statement,
bool $extendsMode
): string;
```

Compiles macros

<h4 id="mvcviewenginevoltcompiler-compilereturn"><code>compileReturn()</code></h4>

```php
public function compileReturn( array $statement ): string;
```

Compiles a "return" statement returning PHP code

<h4 id="mvcviewenginevoltcompiler-compileset"><code>compileSet()</code></h4>

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

<h4 id="mvcviewenginevoltcompiler-compilestring"><code>compileString()</code></h4>

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

<h4 id="mvcviewenginevoltcompiler-compileswitch"><code>compileSwitch()</code></h4>

```php
public function compileSwitch(
array $statement,
bool $extendsMode = false
): string;
```

Compiles a 'switch' statement returning PHP code

<h4 id="mvcviewenginevoltcompiler-expression"><code>expression()</code></h4>

```php
final public function expression(
array $expr,
bool $doubleQuotes = false
): string;
```

Resolves an expression node in an AST volt tree

<h4 id="mvcviewenginevoltcompiler-fireextensionevent"><code>fireExtensionEvent()</code></h4>

```php
final public function fireExtensionEvent(
string $name,
array $arguments = []
): mixed;
```

Fires an event to registered extensions

<h4 id="mvcviewenginevoltcompiler-functioncall"><code>functionCall()</code></h4>

```php
public function functionCall(
array $expr,
bool $doubleQuotes = false
): string;
```

Resolves function intermediate code into PHP function calls

<h4 id="mvcviewenginevoltcompiler-getcompiledtemplatepath"><code>getCompiledTemplatePath()</code></h4>

```php
public function getCompiledTemplatePath(): string;
```

Returns the path to the last compiled template

<h4 id="mvcviewenginevoltcompiler-getextensions"><code>getExtensions()</code></h4>

```php
public function getExtensions(): array;
```

Returns the list of extensions registered in Volt

<h4 id="mvcviewenginevoltcompiler-getfilters"><code>getFilters()</code></h4>

```php
public function getFilters(): array;
```

Register the user registered filters

<h4 id="mvcviewenginevoltcompiler-getfunctions"><code>getFunctions()</code></h4>

```php
public function getFunctions(): array;
```

Register the user registered functions

<h4 id="mvcviewenginevoltcompiler-getoption"><code>getOption()</code></h4>

```php
public function getOption( string $option ): string|null;
```

Returns a compiler's option

<h4 id="mvcviewenginevoltcompiler-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Returns the compiler options

<h4 id="mvcviewenginevoltcompiler-gettemplatepath"><code>getTemplatePath()</code></h4>

```php
public function getTemplatePath(): string;
```

Returns the path that is currently being compiled

<h4 id="mvcviewenginevoltcompiler-getuniqueprefix"><code>getUniquePrefix()</code></h4>

```php
public function getUniquePrefix(): string;
```

Return a unique prefix to be used as prefix for compiled variables and
contexts

<h4 id="mvcviewenginevoltcompiler-parse"><code>parse()</code></h4>

```php
public function parse( string $viewCode ): array;
```

Parses a Volt template returning its intermediate representation

```php
print_r(
$compiler->parse("{% raw %}{{ 3 + 2 }}{% endraw %}")
);
```

<h4 id="mvcviewenginevoltcompiler-resolvetest"><code>resolveTest()</code></h4>

```php
public function resolveTest(
array $test,
string $left
): string;
```

Resolves filter intermediate code into a valid PHP expression

<h4 id="mvcviewenginevoltcompiler-setoption"><code>setOption()</code></h4>

```php
public function setOption(
string $option,
mixed $value
): static;
```

Sets a single compiler option

<h4 id="mvcviewenginevoltcompiler-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): static;
```

Sets the compiler options

<h4 id="mvcviewenginevoltcompiler-setuniqueprefix"><code>setUniquePrefix()</code></h4>

```php
public function setUniquePrefix( string $prefix ): static;
```

Set a unique prefix to be used as prefix for compiled variables

<h4 id="mvcviewenginevoltcompiler-compilesource"><code>compileSource()</code></h4>

```php
protected function compileSource(
string $viewCode,
bool $extendsMode = false
): array|string;
```

Compiles a Volt source code returning a PHP plain version

<h4 id="mvcviewenginevoltcompiler-getfinalpath"><code>getFinalPath()</code></h4>

```php
protected function getFinalPath( string $path ): string;
```

Gets the final path with VIEW

<h4 id="mvcviewenginevoltcompiler-resolvefilter"><code>resolveFilter()</code></h4>

```php
final protected function resolveFilter(
array $filter,
string $left
): string;
```

Resolves filter intermediate code into PHP function calls

<h4 id="mvcviewenginevoltcompiler-statementlist"><code>statementList()</code></h4>

```php
final protected function statementList(
array $statements,
bool $extendsMode = false
): string;
```

Traverses a statement list compiling each of its nodes

<h4 id="mvcviewenginevoltcompiler-statementlistorextends"><code>statementListOrExtends()</code></h4>

```php
final protected function statementListOrExtends( mixed $statements ): mixed;
```

Compiles a block of statements

## Mvc\View\Engine\Volt\Exception

Class

Class for exceptions thrown by Phalcon\Mvc\View

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

`Phalcon\Mvc\View\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexception-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"message","default":"\"\""},{"type":"array","name":"statement","default":"[]"},{"type":"int","name":"code","default":"0"},{"type":"BaseException|null","name":"previous","default":"null"}]}>
</ApiItem>
<ApiItem href="#mvcviewenginevoltexception-getstatement" visibility="public" name="getStatement" returnType="array" params={[]}>
Gets currently parsed statement (if any).
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="statement" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexception-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $message = "",
array $statement = [],
int $code = 0,
BaseException|null $previous = null
);
```

<h4 id="mvcviewenginevoltexception-getstatement"><code>getStatement()</code></h4>

```php
public function getStatement(): array;
```

Gets currently parsed statement (if any).

## Mvc\View\Engine\Volt\Exceptions\CannotOpenCompiledFile

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\CannotOpenCompiledFile`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionscannotopencompiledfile-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"path","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionscannotopencompiledfile-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```

## Mvc\View\Engine\Volt\Exceptions\CorruptedStatement

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\CorruptedStatement`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionscorruptedstatement-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionscorruptedstatement-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Engine\Volt\Exceptions\CorruptedStatementWithData

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\CorruptedStatementWithData`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionscorruptedstatementwithdata-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"statement","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionscorruptedstatementwithdata-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $statement );
```

## Mvc\View\Engine\Volt\Exceptions\InvalidCompilationPrefix

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidCompilationPrefix`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsinvalidcompilationprefix-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsinvalidcompilationprefix-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Engine\Volt\Exceptions\InvalidExtension

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidExtension`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsinvalidextension-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsinvalidextension-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Engine\Volt\Exceptions\InvalidHaystack

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidHaystack`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsinvalidhaystack-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsinvalidhaystack-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Engine\Volt\Exceptions\InvalidIntermediateRepresentation

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidIntermediateRepresentation`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsinvalidintermediaterepresentation-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsinvalidintermediaterepresentation-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Engine\Volt\Exceptions\InvalidOptionType

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidOptionType`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsinvalidoptiontype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"option","default":null},{"type":"string","name":"type","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsinvalidoptiontype-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $option,
string $type
);
```

## Mvc\View\Engine\Volt\Exceptions\InvalidPathClosureReturn

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidPathClosureReturn`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsinvalidpathclosurereturn-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsinvalidpathclosurereturn-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Engine\Volt\Exceptions\InvalidPathType

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidPathType`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsinvalidpathtype-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsinvalidpathtype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Engine\Volt\Exceptions\InvalidStatement

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidStatement`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsinvalidstatement-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"file","default":null},{"type":"int","name":"line","default":null},{"type":"array","name":"statement","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsinvalidstatement-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $file,
int $line,
array $statement
);
```

## Mvc\View\Engine\Volt\Exceptions\InvalidUserFilterDefinition

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidUserFilterDefinition`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsinvaliduserfilterdefinition-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"file","default":null},{"type":"int","name":"line","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsinvaliduserfilterdefinition-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string $file,
int $line
);
```

## Mvc\View\Engine\Volt\Exceptions\InvalidUserFunctionDefinition

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\InvalidUserFunctionDefinition`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsinvaliduserfunctiondefinition-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"file","default":null},{"type":"int","name":"line","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsinvaliduserfunctiondefinition-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string $file,
int $line
);
```

## Mvc\View\Engine\Volt\Exceptions\MacroAlreadyDefined

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\MacroAlreadyDefined`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsmacroalreadydefined-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsmacroalreadydefined-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Mvc\View\Engine\Volt\Exceptions\MacroNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\MacroNotFound`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsmacronotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsmacronotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Mvc\View\Engine\Volt\Exceptions\MbstringRequired

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\MbstringRequired`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsmbstringrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsmbstringrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Engine\Volt\Exceptions\TemplateFileNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplateFileNotFound`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionstemplatefilenotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"path","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionstemplatefilenotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```

## Mvc\View\Engine\Volt\Exceptions\TemplateFileNotOpenable

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplateFileNotOpenable`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionstemplatefilenotopenable-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"path","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionstemplatefilenotopenable-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```

## Mvc\View\Engine\Volt\Exceptions\TemplatePathCollision

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\TemplatePathCollision`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionstemplatepathcollision-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionstemplatepathcollision-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Engine\Volt\Exceptions\UnknownVoltExpression

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltExpression`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsunknownvoltexpression-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"type","default":null},{"type":"string","name":"file","default":null},{"type":"int","name":"line","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsunknownvoltexpression-__construct"><code>__construct()</code></h4>

```php
public function __construct(
int $type,
string $file,
int $line
);
```

## Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilter

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilter`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsunknownvoltfilter-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"file","default":null},{"type":"int","name":"line","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsunknownvoltfilter-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
string $file,
int $line
);
```

## Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilterType

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltFilterType`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsunknownvoltfiltertype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"file","default":null},{"type":"int","name":"line","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsunknownvoltfiltertype-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $file,
int $line
);
```

## Mvc\View\Engine\Volt\Exceptions\UnknownVoltStatement

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\UnknownVoltStatement`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsunknownvoltstatement-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"type","default":null},{"type":"string","name":"file","default":null},{"type":"int","name":"line","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsunknownvoltstatement-__construct"><code>__construct()</code></h4>

```php
public function __construct(
int $type,
string $file,
int $line
);
```

## Mvc\View\Engine\Volt\Exceptions\VoltDirectoryNotWritable

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- [`Phalcon\Mvc\View\Engine\Volt\Exception`](#mvcviewenginevoltexception)
- **`Phalcon\Mvc\View\Engine\Volt\Exceptions\VoltDirectoryNotWritable`**

`Phalcon\Mvc\View\Engine\Volt\Exception`

### Method Summary

<ApiItem href="#mvcviewenginevoltexceptionsvoltdirectorynotwritable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewenginevoltexceptionsvoltdirectorynotwritable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Exception

Class

Class for exceptions thrown by Phalcon\Mvc\View

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

## Mvc\View\Exceptions\InvalidEngineRegistration

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- **`Phalcon\Mvc\View\Exceptions\InvalidEngineRegistration`**

`Phalcon\Mvc\View\Exception`

### Method Summary

<ApiItem href="#mvcviewexceptionsinvalidengineregistration-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"extension","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewexceptionsinvalidengineregistration-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $extension );
```

## Mvc\View\Exceptions\InvalidViewsDirType

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- **`Phalcon\Mvc\View\Exceptions\InvalidViewsDirType`**

`Phalcon\Mvc\View\Exception`

### Method Summary

<ApiItem href="#mvcviewexceptionsinvalidviewsdirtype-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewexceptionsinvalidviewsdirtype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Exceptions\SimpleViewNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- **`Phalcon\Mvc\View\Exceptions\SimpleViewNotFound`**

`Phalcon\Mvc\View\Exception`

### Method Summary

<ApiItem href="#mvcviewexceptionssimpleviewnotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"viewsDirPath","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewexceptionssimpleviewnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $viewsDirPath );
```

## Mvc\View\Exceptions\SimpleViewServicesUnavailable

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- **`Phalcon\Mvc\View\Exceptions\SimpleViewServicesUnavailable`**

`Phalcon\Mvc\View\Exception`

### Method Summary

<ApiItem href="#mvcviewexceptionssimpleviewservicesunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewexceptionssimpleviewservicesunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Exceptions\ViewNotFound

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- **`Phalcon\Mvc\View\Exceptions\ViewNotFound`**

`Phalcon\Mvc\View\Exception`

### Method Summary

<ApiItem href="#mvcviewexceptionsviewnotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"viewPath","default":null}]}>
</ApiItem>

### Methods

<h4 id="mvcviewexceptionsviewnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $viewPath );
```

## Mvc\View\Exceptions\ViewServicesUnavailable

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- **`Phalcon\Mvc\View\Exceptions\ViewServicesUnavailable`**

`Phalcon\Mvc\View\Exception`

### Method Summary

<ApiItem href="#mvcviewexceptionsviewservicesunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewexceptionsviewservicesunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Exceptions\ViewsDirItemMustBeString

Class

- `\Exception`
- [`Phalcon\Mvc\View\Exception`](#mvcviewexception)
- **`Phalcon\Mvc\View\Exceptions\ViewsDirItemMustBeString`**

`Phalcon\Mvc\View\Exception`

### Method Summary

<ApiItem href="#mvcviewexceptionsviewsdiritemmustbestring-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="mvcviewexceptionsviewsdiritemmustbestring-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Mvc\View\Simple

Class

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

- `\stdClass`
- [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
- **`Phalcon\Mvc\View\Simple`** - implements [`Phalcon\Mvc\ViewBaseInterface`](#mvcviewbaseinterface), [`Phalcon\Events\EventsAwareInterface`](/6.0/api/phalcon_events/#eventseventsawareinterface), [`Phalcon\Contracts\View\Renderer`](/6.0/api/phalcon_contracts/#contractsviewrenderer)

`Closure` · `Phalcon\Contracts\View\Renderer` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Exception` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Mvc\ViewBaseInterface` · `Phalcon\Mvc\View\Engine\EngineInterface` · `Phalcon\Mvc\View\Engine\Php` · `Phalcon\Mvc\View\Exceptions\InvalidEngineRegistration` · `Phalcon\Mvc\View\Exceptions\SimpleViewNotFound` · `Phalcon\Mvc\View\Exceptions\SimpleViewServicesUnavailable` · `Phalcon\Mvc\View\Traits\ViewParamsTrait` · `Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait`

### Method Summary

<ApiItem href="#mvcviewsimple-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Mvc\View\Simple constructor
</ApiItem>
<ApiItem href="#mvcviewsimple-__get" visibility="public" name="__get" returnType="mixed" params={[{"type":"string","name":"propertyName","default":null}]}>
Magic method to retrieve a variable passed to the view
</ApiItem>
<ApiItem href="#mvcviewsimple-__set" visibility="public" name="__set" returnType="void" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null}]}>
Magic method to pass variables to the views
</ApiItem>
<ApiItem href="#mvcviewsimple-getactiverenderpath" visibility="public" name="getActiveRenderPath" returnType="string" params={[]}>
Returns the path of the view that is currently rendered
</ApiItem>
<ApiItem href="#mvcviewsimple-getviewsdir" visibility="public" name="getViewsDir" returnType="string" params={[]}>
Gets views directory
</ApiItem>
<ApiItem href="#mvcviewsimple-partial" visibility="public" name="partial" returnType="void" params={[{"type":"string","name":"partialPath","default":null},{"type":"mixed","name":"params","default":"null"}]}>
Renders a partial view
</ApiItem>
<ApiItem href="#mvcviewsimple-registerengines" visibility="public" name="registerEngines" returnType="void" params={[{"type":"array","name":"engines","default":null}]}>
Register templating engines
</ApiItem>
<ApiItem href="#mvcviewsimple-render" visibility="public" name="render" returnType="string" params={[{"type":"string","name":"path","default":null},{"type":"array","name":"params","default":"[]"}]}>
Renders a view
</ApiItem>
<ApiItem href="#mvcviewsimple-setparamtoview" visibility="public" name="setParamToView" returnType="static" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null}]}>
Adds parameters to views (alias of setVar)
</ApiItem>
<ApiItem href="#mvcviewsimple-setvars" visibility="public" name="setVars" returnType="static" params={[{"type":"array","name":"params","default":null},{"type":"bool","name":"merge","default":"true"}]}>
Set all the render params
</ApiItem>
<ApiItem href="#mvcviewsimple-setviewsdir" visibility="public" name="setViewsDir" returnType="void" params={[{"type":"string","name":"viewsDir","default":null}]}>
Sets views directory
</ApiItem>
<ApiItem href="#mvcviewsimple-internalrender" visibility="protected" name="internalRender" returnType="void" params={[{"type":"string","name":"path","default":null},{"type":"mixed","name":"params","default":null}]}>
Tries to render the view with every engine registered in the component
</ApiItem>
<ApiItem href="#mvcviewsimple-loadtemplateengines" visibility="protected" name="loadTemplateEngines" returnType="array" params={[]}>
Loads registered template engines, if none are registered it will use
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="activeRenderPath" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="engines" type="EngineInterface[]|false" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="viewsDir" type="string" default="">
</ApiItem>

### Methods

<h4 id="mvcviewsimple-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Phalcon\Mvc\View\Simple constructor

<h4 id="mvcviewsimple-__get"><code>__get()</code></h4>

```php
public function __get( string $propertyName ): mixed;
```

Magic method to retrieve a variable passed to the view

```php
echo $this->view->products;
```

<h4 id="mvcviewsimple-__set"><code>__set()</code></h4>

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

<h4 id="mvcviewsimple-getactiverenderpath"><code>getActiveRenderPath()</code></h4>

```php
public function getActiveRenderPath(): string;
```

Returns the path of the view that is currently rendered

<h4 id="mvcviewsimple-getviewsdir"><code>getViewsDir()</code></h4>

```php
public function getViewsDir(): string;
```

Gets views directory

<h4 id="mvcviewsimple-partial"><code>partial()</code></h4>

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

<h4 id="mvcviewsimple-registerengines"><code>registerEngines()</code></h4>

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

<h4 id="mvcviewsimple-render"><code>render()</code></h4>

```php
public function render(
string $path,
array $params = []
): string;
```

Renders a view

<h4 id="mvcviewsimple-setparamtoview"><code>setParamToView()</code></h4>

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

<h4 id="mvcviewsimple-setvars"><code>setVars()</code></h4>

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

<h4 id="mvcviewsimple-setviewsdir"><code>setViewsDir()</code></h4>

```php
public function setViewsDir( string $viewsDir ): void;
```

Sets views directory

<h4 id="mvcviewsimple-internalrender"><code>internalRender()</code></h4>

```php
final protected function internalRender(
string $path,
mixed $params
): void;
```

Tries to render the view with every engine registered in the component

<h4 id="mvcviewsimple-loadtemplateengines"><code>loadTemplateEngines()</code></h4>

```php
protected function loadTemplateEngines(): array;
```

Loads registered template engines, if none are registered it will use
Phalcon\Mvc\View\Engine\Php

## Mvc\View\Traits\ViewParamsTrait

Trait

Shared view parameter and content accessors

@todo v7 - inspect the View/Simple interfaces (ViewInterface vs
      ViewBaseInterface) to see whether these accessors can be unified behind
      a shared contract

- **`Phalcon\Mvc\View\Traits\ViewParamsTrait`**

[`Phalcon\Mvc\View`](#mvcview) · [`Phalcon\Mvc\View\Simple`](#mvcviewsimple)

### Method Summary

<ApiItem href="#mvcviewtraitsviewparamstrait-getcontent" visibility="public" name="getContent" returnType="string" params={[]}>
Returns output from another view stage
</ApiItem>
<ApiItem href="#mvcviewtraitsviewparamstrait-getparamstoview" visibility="public" name="getParamsToView" returnType="array" params={[]}>
Returns parameters to views
</ApiItem>
<ApiItem href="#mvcviewtraitsviewparamstrait-getregisteredengines" visibility="public" name="getRegisteredEngines" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#mvcviewtraitsviewparamstrait-getvar" visibility="public" name="getVar" returnType="mixed" params={[{"type":"string","name":"key","default":null}]}>
Returns a parameter previously set in the view
</ApiItem>
<ApiItem href="#mvcviewtraitsviewparamstrait-setcontent" visibility="public" name="setContent" returnType="static" params={[{"type":"string","name":"content","default":null}]}>
Externally sets the view content
</ApiItem>
<ApiItem href="#mvcviewtraitsviewparamstrait-setvar" visibility="public" name="setVar" returnType="static" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null}]}>
Set a single view parameter
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="content" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="registeredEngines" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="viewParams" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="mvcviewtraitsviewparamstrait-getcontent"><code>getContent()</code></h4>

```php
public function getContent(): string;
```

Returns output from another view stage

<h4 id="mvcviewtraitsviewparamstrait-getparamstoview"><code>getParamsToView()</code></h4>

```php
public function getParamsToView(): array;
```

Returns parameters to views

<h4 id="mvcviewtraitsviewparamstrait-getregisteredengines"><code>getRegisteredEngines()</code></h4>

```php
public function getRegisteredEngines(): array;
```

<h4 id="mvcviewtraitsviewparamstrait-getvar"><code>getVar()</code></h4>

```php
public function getVar( string $key ): mixed;
```

Returns a parameter previously set in the view

<h4 id="mvcviewtraitsviewparamstrait-setcontent"><code>setContent()</code></h4>

```php
public function setContent( string $content ): static;
```

Externally sets the view content

```php
$this->view->setContent("<h1>hello</h1>");
```

<h4 id="mvcviewtraitsviewparamstrait-setvar"><code>setVar()</code></h4>

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

Source: https://docs.phalcon.io/6.0/api/phalcon_mvc/index.mdx
