---
layout: default
title: 'Phalcon\Mvc\Dispatcher'
---
# Class **Phalcon\Mvc\Dispatcher**

*extends* abstract class [Phalcon\Dispatcher](Phalcon_Di.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\DispatcherInterface](Phalcon_Di.md), [Phalcon\Mvc\DispatcherInterface](Phalcon_Mvc_Dispatcher.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/dispatcher.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Dispatching is the process of taking the request object, extracting the module name,
controller name, action name, and optional parameters contained in it, and then
instantiating a controller and calling an action of that controller.

```php
<?php

$di = new \Phalcon\Di();

$dispatcher = new \Phalcon\Mvc\Dispatcher();

$dispatcher->setDI($di);

$dispatcher->setControllerName("posts");
$dispatcher->setActionName("index");
$dispatcher->setParams([]);

$controller = $dispatcher->dispatch();

```


## Constants
*integer* **EXCEPTION_NO_DI**

*integer* **EXCEPTION_CYCLIC_ROUTING**

*integer* **EXCEPTION_HANDLER_NOT_FOUND**

*integer* **EXCEPTION_INVALID_HANDLER**

*integer* **EXCEPTION_INVALID_PARAMS**

*integer* **EXCEPTION_ACTION_NOT_FOUND**

## Methods
public  **setControllerSuffix** (*mixed* $controllerSuffix)

Sets the default controller suffix



public  **setDefaultController** (*mixed* $controllerName)

Sets the default controller name



public  **setControllerName** (*mixed* $controllerName)

Sets the controller name to be dispatched



public  **getControllerName** ()

Gets last dispatched controller name



public  **getPreviousNamespaceName** ()

Gets previous dispatched namespace name



public  **getPreviousControllerName** ()

Gets previous dispatched controller name



public  **getPreviousActionName** ()

Gets previous dispatched action name



protected  **_throwDispatchException** (*mixed* $message, [*mixed* $exceptionCode])

Throws an internal exception



protected  **_handleException** ([Exception](https://php.net/manual/en/class.exception.php) $exception)

Handles a user exception



public  **forward** (*array* $forward)

Forwards the execution flow to another controller/action.

```php
<?php

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

        $dispatcher->setModuleName($forward["module"]);
        $dispatcher->setNamespaceName($metadata["controllersNamespace"]);
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



public  **getControllerClass** ()

Possible controller class name that will be located to dispatch the request



public  **getLastController** ()

Returns the latest dispatched controller



public  **getActiveController** ()

Returns the active controller in the dispatcher



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Sets the events manager



public  **getEventsManager** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Returns the internal event manager



public  **setActionSuffix** (*mixed* $actionSuffix) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Sets the default action suffix



public  **getActionSuffix** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Gets the default action suffix



public  **setModuleName** (*mixed* $moduleName) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Sets the module where the controller is (only informative)



public  **getModuleName** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Gets the module where the controller class is



public  **setNamespaceName** (*mixed* $namespaceName) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Sets the namespace where the controller class is



public  **getNamespaceName** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Gets a namespace to be prepended to the current handler name



public  **setDefaultNamespace** (*mixed* $namespaceName) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Sets the default namespace



public  **getDefaultNamespace** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Returns the default namespace



public  **setDefaultAction** (*mixed* $actionName) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Sets the default action name



public  **setActionName** (*mixed* $actionName) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Sets the action name to be dispatched



public  **getActionName** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Gets the latest dispatched action name



public  **setParams** (*array* $params) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Sets action params to be dispatched



public  **getParams** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Gets action params



public  **setParam** (*mixed* $param, *mixed* $value) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Set a param by its name or numeric index



public *mixed* **getParam** (*mixed* $param, [*string* | *array* $filters], [*mixed* $defaultValue]) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Gets a param by its name or numeric index



public *boolean* **hasParam** (*mixed* $param) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Check if a param exists



public  **getActiveMethod** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Returns the current method to be/executed in the dispatcher



public  **isFinished** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Checks if the dispatch loop is finished or has more pendent controllers/tasks to dispatch



public  **setReturnedValue** (*mixed* $value) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Sets the latest returned value by an action manually



public *mixed* **getReturnedValue** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Returns value returned by the latest dispatched action



public  **setModelBinding** (*mixed* $value, [*mixed* $cache]) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Enable/Disable model binding during dispatch

```php
<?php

$di->set('dispatcher', function() {
    $dispatcher = new Dispatcher();

    $dispatcher->setModelBinding(true, 'cache');
    return $dispatcher;
});

```



public  **setModelBinder** ([Phalcon\Mvc\Model\BinderInterface](Phalcon_Mvc_Model_Binder.md) $modelBinder, [*mixed* $cache]) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Enable model binding during dispatch

```php
<?php

$di->set('dispatcher', function() {
    $dispatcher = new Dispatcher();

    $dispatcher->setModelBinder(new Binder(), 'cache');
    return $dispatcher;
});

```



public  **getModelBinder** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Gets model binder



public *object* **dispatch** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Dispatches a handle action taking into account the routing parameters



protected *object* **_dispatch** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Dispatches a handle action taking into account the routing parameters



public  **wasForwarded** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Check if the current executed action was forwarded by another one



public  **getHandlerClass** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Possible class name that will be located to dispatch the request



public  **callActionMethod** (*mixed* $handler, *mixed* $actionMethod, [*array* $params]) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

...


public  **getBoundModels** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Returns bound models from binder instance

```php
<?php

class UserController extends Controller
{
    public function showAction(User $user)
    {
        $boundModels = $this->dispatcher->getBoundModels(); // return array with $user
    }
}

```



protected  **_resolveEmptyProperties** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Set empty properties to their defaults (where defaults are available)




<hr>

# Class **Phalcon\Mvc\Dispatcher\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/dispatcher/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Interface **Phalcon\Mvc\DispatcherInterface**

*implements* [Phalcon\DispatcherInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/dispatcherinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setControllerSuffix** (*mixed* $controllerSuffix)

...


abstract public  **setDefaultController** (*mixed* $controllerName)

...


abstract public  **setControllerName** (*mixed* $controllerName)

...


abstract public  **getControllerName** ()

...


abstract public  **getLastController** ()

...


abstract public  **getActiveController** ()

...


abstract public  **setActionSuffix** (*mixed* $actionSuffix) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **getActionSuffix** () inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **setDefaultNamespace** (*mixed* $defaultNamespace) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **setDefaultAction** (*mixed* $actionName) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **setNamespaceName** (*mixed* $namespaceName) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **setModuleName** (*mixed* $moduleName) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **setActionName** (*mixed* $actionName) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **getActionName** () inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **setParams** (*mixed* $params) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **getParams** () inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **setParam** (*mixed* $param, *mixed* $value) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **getParam** (*mixed* $param, [*mixed* $filters]) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **hasParam** (*mixed* $param) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **isFinished** () inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **getReturnedValue** () inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **dispatch** () inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...


abstract public  **forward** (*mixed* $forward) inherited from [Phalcon\DispatcherInterface](Phalcon_Di.md)

...
