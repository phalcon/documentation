---
layout: default
title: 'Phalcon\Mvc\Micro'
---
# Class **Phalcon\Mvc\Micro**

*extends* abstract class [Phalcon\Di\Injectable](Phalcon_Di.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/micro.zep" class="btn btn-default btn-sm">Source on GitHub</a>

With Phalcon you can create "Micro-Framework like" applications. By doing this, you only need to
write a minimal amount of code to create a PHP application. Micro applications are suitable
to small applications, APIs and prototypes in a practical way.

```php
<?php

$app = new \Phalcon\Mvc\Micro();

$app->get(
    "/say/welcome/{name}",
    function ($name) {
        echo "<h1>Welcome $name!</h1>";
    }
);

$app->handle();

```


## Methods
public  **__construct** ([[Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector])

Phalcon\Mvc\Micro constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the DependencyInjector container



public [Phalcon\Mvc\Router\RouteInterface](Phalcon_Mvc_Router.md) **map** (*string* $routePattern, *callable* $handler)

Maps a route to a handler without any HTTP method constraint



public [Phalcon\Mvc\Router\RouteInterface](Phalcon_Mvc_Router.md) **get** (*string* $routePattern, *callable* $handler)

Maps a route to a handler that only matches if the HTTP method is GET



public [Phalcon\Mvc\Router\RouteInterface](Phalcon_Mvc_Router.md) **post** (*string* $routePattern, *callable* $handler)

Maps a route to a handler that only matches if the HTTP method is POST



public [Phalcon\Mvc\Router\RouteInterface](Phalcon_Mvc_Router.md) **put** (*string* $routePattern, *callable* $handler)

Maps a route to a handler that only matches if the HTTP method is PUT



public [Phalcon\Mvc\Router\RouteInterface](Phalcon_Mvc_Router.md) **patch** (*string* $routePattern, *callable* $handler)

Maps a route to a handler that only matches if the HTTP method is PATCH



public [Phalcon\Mvc\Router\RouteInterface](Phalcon_Mvc_Router.md) **head** (*string* $routePattern, *callable* $handler)

Maps a route to a handler that only matches if the HTTP method is HEAD



public [Phalcon\Mvc\Router\RouteInterface](Phalcon_Mvc_Router.md) **delete** (*string* $routePattern, *callable* $handler)

Maps a route to a handler that only matches if the HTTP method is DELETE



public [Phalcon\Mvc\Router\RouteInterface](Phalcon_Mvc_Router.md) **options** (*string* $routePattern, *callable* $handler)

Maps a route to a handler that only matches if the HTTP method is OPTIONS



public  **mount** ([Phalcon\Mvc\Micro\CollectionInterface](Phalcon_Mvc_Micro.md) $collection)

Mounts a collection of handlers



public [Phalcon\Mvc\Micro](Phalcon_Mvc_Micro.md) **notFound** (*callable* $handler)

Sets a handler that will be called when the router doesn't match any of the defined routes



public [Phalcon\Mvc\Micro](Phalcon_Mvc_Micro.md) **error** (*callable* $handler)

Sets a handler that will be called when an exception is thrown handling the route



public  **getRouter** ()

Returns the internal router used by the application



public [Phalcon\Di\ServiceInterface](Phalcon_Di.md) **setService** (*string* $serviceName, *mixed* $definition, [*boolean* $shared])

Sets a service from the DI



public  **hasService** (*mixed* $serviceName)

Checks if a service is registered in the DI



public *object* **getService** (*string* $serviceName)

Obtains a service from the DI



public *mixed* **getSharedService** (*string* $serviceName)

Obtains a shared service from the DI



public *mixed* **handle** ([*string* $uri])

Handle the whole request



public  **stop** ()

Stops the middleware execution avoiding than other middlewares be executed



public  **setActiveHandler** (*callable* $activeHandler)

Sets externally the handler that must be called by the matched route



public *callable* **getActiveHandler** ()

Return the handler that will be called for the matched route



public *mixed* **getReturnedValue** ()

Returns the value returned by the executed handler



public *boolean* **offsetExists** (*string* $alias)

Check if a service is registered in the internal services container using the array syntax



public  **offsetSet** (*string* $alias, *mixed* $definition)

Allows to register a shared service in the internal services container using the array syntax

```php
<?php

$app["request"] = new \Phalcon\Http\Request();

```



public *mixed* **offsetGet** (*string* $alias)

Allows to obtain a shared service in the internal services container using the array syntax

```php
<?php

var_dump(
    $app["request"]
);

```



public  **offsetUnset** (*string* $alias)

Removes a service from the internal services container using the array syntax



public [Phalcon\Mvc\Micro](Phalcon_Mvc_Micro.md) **before** (*callable* $handler)

Appends a before middleware to be called before execute the route



public [Phalcon\Mvc\Micro](Phalcon_Mvc_Micro.md) **afterBinding** (*callable* $handler)

Appends a afterBinding middleware to be called after model binding



public [Phalcon\Mvc\Micro](Phalcon_Mvc_Micro.md) **after** (*callable* $handler)

Appends an 'after' middleware to be called after execute the route



public [Phalcon\Mvc\Micro](Phalcon_Mvc_Micro.md) **finish** (*callable* $handler)

Appends a 'finish' middleware to be called when the request is finished



public  **getHandlers** ()

Returns the internal handlers attached to the application



public  **getModelBinder** ()

Gets model binder



public  **setModelBinder** ([Phalcon\Mvc\Model\BinderInterface](Phalcon_Mvc_Model_Binder.md) $modelBinder, [*mixed* $cache])

Sets model binder

```php
<?php

$micro = new Micro($di);
$micro->setModelBinder(new Binder(), 'cache');

```



public  **getBoundModels** ()

Returns bound models from binder instance



public  **getDI** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal event manager



public  **__get** (*mixed* $propertyName) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Magic method __get




<hr>

# Class **Phalcon\Mvc\Micro\Collection**

*implements* [Phalcon\Mvc\Micro\CollectionInterface](Phalcon_Mvc_Micro.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/micro/collection.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Groups Micro-Mvc handlers as controllers

```php
<?php

$app = new \Phalcon\Mvc\Micro();

$collection = new Collection();

$collection->setHandler(
    new PostsController()
);

$collection->get("/posts/edit/{id}", "edit");

$app->mount($collection);

```


## Methods
protected  **_addMap** (*string* | *array* $method, *string* $routePattern, *mixed* $handler, *string* $name)

Internal function to add a handler to the group



public  **setPrefix** (*mixed* $prefix)

Sets a prefix for all routes added to the collection



public  **getPrefix** ()

Returns the collection prefix if any



public *array* **getHandlers** ()

Returns the registered handlers



public [Phalcon\Mvc\Micro\Collection](Phalcon_Mvc_Micro.md) **setHandler** (*mixed* $handler, [*boolean* $lazy])

Sets the main handler



public  **setLazy** (*mixed* $lazy)

Sets if the main handler must be lazy loaded



public  **isLazy** ()

Returns if the main handler must be lazy loaded



public *mixed* **getHandler** ()

Returns the main handler



public [Phalcon\Mvc\Micro\Collection](Phalcon_Mvc_Micro.md) **map** (*string* $routePattern, *callable* $handler, [*string* $name])

Maps a route to a handler



public [Phalcon\Mvc\Micro\Collection](Phalcon_Mvc_Micro.md) **get** (*string* $routePattern, *callable* $handler, [*string* $name])

Maps a route to a handler that only matches if the HTTP method is GET



public [Phalcon\Mvc\Micro\Collection](Phalcon_Mvc_Micro.md) **post** (*string* $routePattern, *callable* $handler, [*string* $name])

Maps a route to a handler that only matches if the HTTP method is POST



public [Phalcon\Mvc\Micro\Collection](Phalcon_Mvc_Micro.md) **put** (*string* $routePattern, *callable* $handler, [*string* $name])

Maps a route to a handler that only matches if the HTTP method is PUT



public [Phalcon\Mvc\Micro\Collection](Phalcon_Mvc_Micro.md) **patch** (*string* $routePattern, *callable* $handler, [*string* $name])

Maps a route to a handler that only matches if the HTTP method is PATCH



public [Phalcon\Mvc\Micro\Collection](Phalcon_Mvc_Micro.md) **head** (*string* $routePattern, *callable* $handler, [*string* $name])

Maps a route to a handler that only matches if the HTTP method is HEAD



public [Phalcon\Mvc\Micro\Collection](Phalcon_Mvc_Micro.md) **delete** (*string* $routePattern, *callable* $handler, [*string* $name])

Maps a route to a handler that only matches if the HTTP method is DELETE



public [Phalcon\Mvc\Micro\Collection](Phalcon_Mvc_Micro.md) **options** (*string* $routePattern, *callable* $handler, [*mixed* $name])

Maps a route to a handler that only matches if the HTTP method is OPTIONS




<hr>

# Interface **Phalcon\Mvc\Micro\CollectionInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/micro/collectioninterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setPrefix** (*mixed* $prefix)

...


abstract public  **getPrefix** ()

...


abstract public  **getHandlers** ()

...


abstract public  **setHandler** (*mixed* $handler, [*mixed* $lazy])

...


abstract public  **setLazy** (*mixed* $lazy)

...


abstract public  **isLazy** ()

...


abstract public  **getHandler** ()

...


abstract public  **map** (*mixed* $routePattern, *mixed* $handler, [*mixed* $name])

...


abstract public  **get** (*mixed* $routePattern, *mixed* $handler, [*mixed* $name])

...


abstract public  **post** (*mixed* $routePattern, *mixed* $handler, [*mixed* $name])

...


abstract public  **put** (*mixed* $routePattern, *mixed* $handler, [*mixed* $name])

...


abstract public  **patch** (*mixed* $routePattern, *mixed* $handler, [*mixed* $name])

...


abstract public  **head** (*mixed* $routePattern, *mixed* $handler, [*mixed* $name])

...


abstract public  **delete** (*mixed* $routePattern, *mixed* $handler, [*mixed* $name])

...


abstract public  **options** (*mixed* $routePattern, *mixed* $handler, [*mixed* $name])

...



<hr>

# Class **Phalcon\Mvc\Micro\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/micro/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Mvc\Micro\LazyLoader**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/micro/lazyloader.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Lazy-Load of handlers for Mvc\Micro using auto-loading


## Methods
public  **getDefinition** ()

...


public  **__construct** (*mixed* $definition)

Phalcon\Mvc\Micro\LazyLoader constructor



public *mixed* **__call** (*string* $method, *array* $arguments)

Initializes the internal handler, calling functions on it



public *mixed* **callMethod** (*string* $method, *array* $arguments, [[Phalcon\Mvc\Model\BinderInterface](Phalcon_Mvc_Model_Binder.md) $modelBinder])

Calling __call method




<hr>

# Interface **Phalcon\Mvc\Micro\MiddlewareInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/micro/middlewareinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **call** ([Phalcon\Mvc\Micro](Phalcon_Mvc_Micro.md) $application)

...
