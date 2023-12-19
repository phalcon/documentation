---
layout: default
title: 'Phalcon\Cli\Console'
---
# Class **Phalcon\Cli\Console**

*extends* abstract class [Phalcon\Application](Phalcon_Application.md)

*implements* [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/console.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This component allows to create CLI applications using Phalcon


## Methods
public  **addModules** (*array* $modules)

Merge modules with the existing ones

```php
<?php

$application->addModules(
    [
        "admin" => [
            "className" => "Multiple\Admin\Module",
            "path"      => "../apps/admin/Module.php",
        ],
    ]
);

```



public  **handle** ([*array* $arguments])

Handle the whole command-line tasks



public  **setArgument** ([*array* $arguments], [*mixed* $str], [*mixed* $shift])

Set an specific argument



public  **__construct** ([[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector]) inherited from [Phalcon\Application](Phalcon_Application.md)

Phalcon\Application



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Application](Phalcon_Application.md)

Sets the events manager



public  **getEventsManager** () inherited from [Phalcon\Application](Phalcon_Application.md)

Returns the internal event manager



public  **registerModules** (*array* $modules, [*mixed* $merge]) inherited from [Phalcon\Application](Phalcon_Application.md)

Register an array of modules present in the application

```php
<?php

$this->registerModules(
    [
        "frontend" => [
            "className" => "Multiple\Frontend\Module",
            "path"      => "../apps/frontend/Module.php",
        ],
        "backend" => [
            "className" => "Multiple\Backend\Module",
            "path"      => "../apps/backend/Module.php",
        ],
    ]
);

```



public  **getModules** () inherited from [Phalcon\Application](Phalcon_Application.md)

Return the modules registered in the application



public  **getModule** (*mixed* $name) inherited from [Phalcon\Application](Phalcon_Application.md)

Gets the module definition registered in the application via module name



public  **setDefaultModule** (*mixed* $defaultModule) inherited from [Phalcon\Application](Phalcon_Application.md)

Sets the module name to be used if the router doesn't return a valid module



public  **getDefaultModule** () inherited from [Phalcon\Application](Phalcon_Application.md)

Returns the default module name



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal dependency injector



public  **__get** (*mixed* $propertyName) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Magic method __get




<hr>

# Class **Phalcon\Cli\Console\Exception**

*extends* class [Phalcon\Application\Exception](Phalcon_Application.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/console/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Cli\Dispatcher**

*extends* abstract class [Phalcon\Dispatcher](Phalcon_Di.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\DispatcherInterface](Phalcon_Di.md), [Phalcon\Cli\DispatcherInterface](Phalcon_Cli.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/dispatcher.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Dispatching is the process of taking the command-line arguments, extracting the module name,
task name, action name, and optional parameters contained in it, and then
instantiating a task and calling an action on it.

```php
<?php

use Phalcon\Di;
use Phalcon\Cli\Dispatcher;

$di = new Di();
$dispatcher = new Dispatcher();
$dispatcher->setDi($di);

$dispatcher->setTaskName("posts");
$dispatcher->setActionName("index");
$dispatcher->setParams([]);

$handle = $dispatcher->dispatch();

```


## Constants
*integer* **EXCEPTION_NO_DI**

*integer* **EXCEPTION_CYCLIC_ROUTING**

*integer* **EXCEPTION_HANDLER_NOT_FOUND**

*integer* **EXCEPTION_INVALID_HANDLER**

*integer* **EXCEPTION_INVALID_PARAMS**

*integer* **EXCEPTION_ACTION_NOT_FOUND**

## Methods
public  **setTaskSuffix** (*mixed* $taskSuffix)

Sets the default task suffix



public  **setDefaultTask** (*mixed* $taskName)

Sets the default task name



public  **setTaskName** (*mixed* $taskName)

Sets the task name to be dispatched



public  **getTaskName** ()

Gets last dispatched task name



protected  **_throwDispatchException** (*mixed* $message, [*mixed* $exceptionCode])

Throws an internal exception



protected  **_handleException** ([Exception](https://php.net/manual/en/class.exception.php) $exception)

Handles a user exception



public  **getLastTask** ()

Returns the latest dispatched controller



public  **getActiveTask** ()

Returns the active task in the dispatcher



public  **setOptions** (*array* $options)

Set the options to be dispatched



public  **getOptions** ()

Get dispatched options



public  **getOption** (*mixed* $option, [*string* | *array* $filters], [*mixed* $defaultValue])

Gets an option by its name or numeric index



public  **hasOption** (*mixed* $option)

Check if an option exists



public  **callActionMethod** (*mixed* $handler, *mixed* $actionMethod, [*array* $params])

Calls the action method.



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



public  **forward** (*array* $forward) inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Forwards the execution flow to another controller/action.

```php
<?php

$this->dispatcher->forward(
    [
        "controller" => "posts",
        "action"     => "index",
    ]
);

```



public  **wasForwarded** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Check if the current executed action was forwarded by another one



public  **getHandlerClass** () inherited from [Phalcon\Dispatcher](Phalcon_Di.md)

Possible class name that will be located to dispatch the request



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

# Class **Phalcon\Cli\Dispatcher\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/dispatcher/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Interface **Phalcon\Cli\DispatcherInterface**

*implements* [Phalcon\DispatcherInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/dispatcherinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setTaskSuffix** (*mixed* $taskSuffix)

...


abstract public  **setDefaultTask** (*mixed* $taskName)

...


abstract public  **setTaskName** (*mixed* $taskName)

...


abstract public  **getTaskName** ()

...


abstract public  **getLastTask** ()

...


abstract public  **getActiveTask** ()

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



<hr>

# Class **Phalcon\Cli\Router**

*implements* [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/router.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Phalcon\Cli\Router is the standard framework router. Routing is the
process of taking a command-line arguments and
decomposing it into parameters to determine which module, task, and
action of that task should receive the request

```php
<?php

$router = new \Phalcon\Cli\Router();

$router->handle(
    [
        "module" => "main",
        "task"   => "videos",
        "action" => "process",
    ]
);

echo $router->getTaskName();

```


## Methods
public  **__construct** ([*mixed* $defaultRoutes])

Phalcon\Cli\Router constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injector



public  **getDI** ()

Returns the internal dependency injector



public  **setDefaultModule** (*mixed* $moduleName)

Sets the name of the default module



public  **setDefaultTask** (*mixed* $taskName)

Sets the default controller name



public  **setDefaultAction** (*mixed* $actionName)

Sets the default action name



public  **setDefaults** (*array* $defaults)

Sets an array of default paths. If a route is missing a path the router will use the defined here
This method must not be used to set a 404 route

```php
<?php

$router->setDefaults(
    [
        "module" => "common",
        "action" => "index",
    ]
);

```



public  **handle** ([*array* $arguments])

Handles routing information received from command-line arguments



public [Phalcon\Cli\Router\Route](Phalcon_Cli.md) **add** (*string* $pattern, [*string/array* $paths])

Adds a route to the router

```php
<?php

$router->add("/about", "About::main");

```



public  **getModuleName** ()

Returns processed module name



public  **getTaskName** ()

Returns processed task name



public  **getActionName** ()

Returns processed action name



public *array* **getParams** ()

Returns processed extra params



public  **getMatchedRoute** ()

Returns the route that matches the handled URI



public *array* **getMatches** ()

Returns the sub expressions in the regular expression matched



public  **wasMatched** ()

Checks if the router matches any of the defined routes



public  **getRoutes** ()

Returns all the routes defined in the router



public [Phalcon\Cli\Router\Route](Phalcon_Cli.md) **getRouteById** (*int* $id)

Returns a route object by its id



public  **getRouteByName** (*mixed* $name)

Returns a route object by its name




<hr>

# Class **Phalcon\Cli\Router\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/router/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Cli\Router\Route**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/router/route.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class represents every route added to the router


## Constants
*string* **DEFAULT_DELIMITER**

## Methods
public  **__construct** (*string* $pattern, [*array* $paths])

Phalcon\Cli\Router\Route constructor



public  **compilePattern** (*mixed* $pattern)

Replaces placeholders from pattern returning a valid PCRE regular expression



public *array* | *boolean* **extractNamedParams** (*string* $pattern)

Extracts parameters from a string



public  **reConfigure** (*string* $pattern, [*array* $paths])

Reconfigure the route adding a new pattern and a set of paths



public  **getName** ()

Returns the route's name



public  **setName** (*mixed* $name)

Sets the route's name

```php
<?php

$router->add(
    "/about",
    [
        "controller" => "about",
    ]
)->setName("about");

```



public [Phalcon\Cli\Router\Route](Phalcon_Cli.md) **beforeMatch** (*callback* $callback)

Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched



public *mixed* **getBeforeMatch** ()

Returns the 'before match' callback if any



public  **getRouteId** ()

Returns the route's id



public  **getPattern** ()

Returns the route's pattern



public  **getCompiledPattern** ()

Returns the route's compiled pattern



public  **getPaths** ()

Returns the paths



public  **getReversedPaths** ()

Returns the paths using positions as keys and names as values



public [Phalcon\Cli\Router\Route](Phalcon_Cli.md) **convert** (*string* $name, *callable* $converter)

Adds a converter to perform an additional transformation for certain parameter



public  **getConverters** ()

Returns the router converter



public static  **reset** ()

Resets the internal route id generator



public static  **delimiter** ([*mixed* $delimiter])

Set the routing delimiter



public static  **getDelimiter** ()

Get routing delimiter




<hr>

# Interface **Phalcon\Cli\Router\RouteInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/router/routeinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **compilePattern** (*mixed* $pattern)

...


abstract public  **reConfigure** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **getName** ()

...


abstract public  **setName** (*mixed* $name)

...


abstract public  **getRouteId** ()

...


abstract public  **getPattern** ()

...


abstract public  **getCompiledPattern** ()

...


abstract public  **getPaths** ()

...


abstract public  **getReversedPaths** ()

...


abstract public static  **reset** ()

...



<hr>

# Interface **Phalcon\Cli\RouterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/routerinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setDefaultModule** (*mixed* $moduleName)

...


abstract public  **setDefaultTask** (*mixed* $taskName)

...


abstract public  **setDefaultAction** (*mixed* $actionName)

...


abstract public  **setDefaults** (*array* $defaults)

...


abstract public  **handle** ([*mixed* $arguments])

...


abstract public  **add** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **getModuleName** ()

...


abstract public  **getTaskName** ()

...


abstract public  **getActionName** ()

...


abstract public  **getParams** ()

...


abstract public  **getMatchedRoute** ()

...


abstract public  **getMatches** ()

...


abstract public  **wasMatched** ()

...


abstract public  **getRoutes** ()

...


abstract public  **getRouteById** (*mixed* $id)

...


abstract public  **getRouteByName** (*mixed* $name)

...



<hr>

# Class **Phalcon\Cli\Task**

*extends* abstract class [Phalcon\Di\Injectable](Phalcon_Di.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Cli\TaskInterface](Phalcon_Cli.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/task.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Every command-line task should extend this class that encapsulates all the task functionality

A task can be used to run "tasks" such as migrations, cronjobs, unit-tests, or anything that you want.
The Task class should at least have a "mainAction" method

```php
<?php

class HelloTask extends \Phalcon\Cli\Task
{
    // This action will be executed by default
    public function mainAction()
    {

    }

    public function findAction()
    {

    }
}

```


## Methods
final public  **__construct** ()

Phalcon\Cli\Task constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal event manager



public  **__get** (*mixed* $propertyName) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Magic method __get




<hr>

# Interface **Phalcon\Cli\TaskInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/cli/taskinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>
