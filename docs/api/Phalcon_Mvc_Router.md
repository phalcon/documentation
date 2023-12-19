---
layout: default
title: 'Phalcon\Mvc\Router'
---
# Class **Phalcon\Mvc\Router**

*implements* [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\Mvc\RouterInterface](Phalcon_Mvc_Router.md), [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/router.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Phalcon\Mvc\Router is the standard framework router. Routing is the
process of taking a URI endpoint (that part of the URI which comes after the base URL) and
decomposing it into parameters to determine which module, controller, and
action of that controller should receive the request

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router();

$router->add(
    "/documentation/{chapter}/{name}\.{type:[a-z]+}",
    [
        "controller" => "documentation",
        "action"     => "show",
    ]
);

$router->handle();

echo $router->getControllerName();

```


## Constants
*integer* **URI_SOURCE_GET_URL**

*integer* **URI_SOURCE_SERVER_REQUEST_URI**

*integer* **POSITION_FIRST**

*integer* **POSITION_LAST**

## Methods
public  **__construct** ([*mixed* $defaultRoutes])

Phalcon\Mvc\Router constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injector



public  **getDI** ()

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager)

Sets the events manager



public  **getEventsManager** ()

Returns the internal event manager



public  **getRewriteUri** ()

Get rewrite info. This info is read from $_GET["_url"]. This returns '/' if the rewrite information cannot be read



public  **setUriSource** (*mixed* $uriSource)

Sets the URI source. One of the URI_SOURCE_* constants

```php
<?php

$router->setUriSource(
    Router::URI_SOURCE_SERVER_REQUEST_URI
);

```



public  **removeExtraSlashes** (*mixed* $remove)

Set whether router must remove the extra slashes in the handled routes



public  **setDefaultNamespace** (*mixed* $namespaceName)

Sets the name of the default namespace



public  **setDefaultModule** (*mixed* $moduleName)

Sets the name of the default module



public  **setDefaultController** (*mixed* $controllerName)

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



public  **getDefaults** ()

Returns an array of default parameters



public  **handle** ([*mixed* $uri])

Handles routing information received from the rewrite engine

```php
<?php

// Read the info from the rewrite engine
$router->handle();

// Manually passing an URL
$router->handle("/posts/edit/1");

```



public  **add** (*mixed* $pattern, [*mixed* $paths], [*mixed* $httpMethods], [*mixed* $position])

Adds a route to the router without any HTTP constraint

```php
<?php

use Phalcon\Mvc\Router;

$router->add("/about", "About::index");
$router->add("/about", "About::index", ["GET", "POST"]);
$router->add("/about", "About::index", ["GET", "POST"], Router::POSITION_FIRST);

```



public  **addGet** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position])

Adds a route to the router that only match if the HTTP method is GET



public  **addPost** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position])

Adds a route to the router that only match if the HTTP method is POST



public  **addPut** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position])

Adds a route to the router that only match if the HTTP method is PUT



public  **addPatch** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position])

Adds a route to the router that only match if the HTTP method is PATCH



public  **addDelete** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position])

Adds a route to the router that only match if the HTTP method is DELETE



public  **addOptions** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position])

Add a route to the router that only match if the HTTP method is OPTIONS



public  **addHead** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position])

Adds a route to the router that only match if the HTTP method is HEAD



public  **addPurge** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position])

Adds a route to the router that only match if the HTTP method is PURGE (Squid and Varnish support)



public  **addTrace** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position])

Adds a route to the router that only match if the HTTP method is TRACE



public  **addConnect** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position])

Adds a route to the router that only match if the HTTP method is CONNECT



public  **mount** ([Phalcon\Mvc\Router\GroupInterface](Phalcon_Mvc_Router.md) $group)

Mounts a group of routes in the router



public  **notFound** (*mixed* $paths)

Set a group of paths to be returned when none of the defined routes are matched



public  **clear** ()

Removes all the pre-defined routes



public  **getNamespaceName** ()

Returns the processed namespace name



public  **getModuleName** ()

Returns the processed module name



public  **getControllerName** ()

Returns the processed controller name



public  **getActionName** ()

Returns the processed action name



public  **getParams** ()

Returns the processed parameters



public  **getMatchedRoute** ()

Returns the route that matches the handled URI



public  **getMatches** ()

Returns the sub expressions in the regular expression matched



public  **wasMatched** ()

Checks if the router matches any of the defined routes



public  **getRoutes** ()

Returns all the routes defined in the router



public  **getRouteById** (*mixed* $id)

Returns a route object by its id



public  **getRouteByName** (*mixed* $name)

Returns a route object by its name



public  **isExactControllerName** ()

Returns whether controller name should not be mangled




<hr>

# Class **Phalcon\Mvc\Router\Annotations**

*extends* class [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Mvc\RouterInterface](Phalcon_Mvc_Router.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/router/annotations.zep" class="btn btn-default btn-sm">Source on GitHub</a>

A router that reads routes annotations from classes/resources

```php
<?php

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


## Constants
*integer* **URI_SOURCE_GET_URL**

*integer* **URI_SOURCE_SERVER_REQUEST_URI**

*integer* **POSITION_FIRST**

*integer* **POSITION_LAST**

## Methods
public  **addResource** (*mixed* $handler, [*mixed* $prefix])

Adds a resource to the annotations handler
A resource is a class that contains routing annotations



public  **addModuleResource** (*mixed* $module, *mixed* $handler, [*mixed* $prefix])

Adds a resource to the annotations handler
A resource is a class that contains routing annotations
The class is located in a module



public  **handle** ([*mixed* $uri])

Produce the routing parameters from the rewrite information



public  **processControllerAnnotation** (*mixed* $handler, [Phalcon\Annotations\Annotation](Phalcon_Annotations.md) $annotation)

Checks for annotations in the controller docblock



public  **processActionAnnotation** (*mixed* $module, *mixed* $namespaceName, *mixed* $controller, *mixed* $action, [Phalcon\Annotations\Annotation](Phalcon_Annotations.md) $annotation)

Checks for annotations in the public methods of the controller



public  **setControllerSuffix** (*mixed* $controllerSuffix)

Changes the controller class suffix



public  **setActionSuffix** (*mixed* $actionSuffix)

Changes the action method suffix



public  **getResources** ()

Return the registered resources



public  **__construct** ([*mixed* $defaultRoutes]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Phalcon\Mvc\Router constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Sets the events manager



public  **getEventsManager** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns the internal event manager



public  **getRewriteUri** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Get rewrite info. This info is read from $_GET["_url"]. This returns '/' if the rewrite information cannot be read



public  **setUriSource** (*mixed* $uriSource) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Sets the URI source. One of the URI_SOURCE_* constants

```php
<?php

$router->setUriSource(
    Router::URI_SOURCE_SERVER_REQUEST_URI
);

```



public  **removeExtraSlashes** (*mixed* $remove) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Set whether router must remove the extra slashes in the handled routes



public  **setDefaultNamespace** (*mixed* $namespaceName) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Sets the name of the default namespace



public  **setDefaultModule** (*mixed* $moduleName) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Sets the name of the default module



public  **setDefaultController** (*mixed* $controllerName) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Sets the default controller name



public  **setDefaultAction** (*mixed* $actionName) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Sets the default action name



public  **setDefaults** (*array* $defaults) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

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



public  **getDefaults** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns an array of default parameters



public  **add** (*mixed* $pattern, [*mixed* $paths], [*mixed* $httpMethods], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Adds a route to the router without any HTTP constraint

```php
<?php

use Phalcon\Mvc\Router;

$router->add("/about", "About::index");
$router->add("/about", "About::index", ["GET", "POST"]);
$router->add("/about", "About::index", ["GET", "POST"], Router::POSITION_FIRST);

```



public  **addGet** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Adds a route to the router that only match if the HTTP method is GET



public  **addPost** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Adds a route to the router that only match if the HTTP method is POST



public  **addPut** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Adds a route to the router that only match if the HTTP method is PUT



public  **addPatch** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Adds a route to the router that only match if the HTTP method is PATCH



public  **addDelete** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Adds a route to the router that only match if the HTTP method is DELETE



public  **addOptions** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Add a route to the router that only match if the HTTP method is OPTIONS



public  **addHead** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Adds a route to the router that only match if the HTTP method is HEAD



public  **addPurge** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Adds a route to the router that only match if the HTTP method is PURGE (Squid and Varnish support)



public  **addTrace** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Adds a route to the router that only match if the HTTP method is TRACE



public  **addConnect** (*mixed* $pattern, [*mixed* $paths], [*mixed* $position]) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Adds a route to the router that only match if the HTTP method is CONNECT



public  **mount** ([Phalcon\Mvc\Router\GroupInterface](Phalcon_Mvc_Router.md) $group) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Mounts a group of routes in the router



public  **notFound** (*mixed* $paths) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Set a group of paths to be returned when none of the defined routes are matched



public  **clear** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Removes all the pre-defined routes



public  **getNamespaceName** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns the processed namespace name



public  **getModuleName** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns the processed module name



public  **getControllerName** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns the processed controller name



public  **getActionName** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns the processed action name



public  **getParams** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns the processed parameters



public  **getMatchedRoute** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns the route that matches the handled URI



public  **getMatches** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns the sub expressions in the regular expression matched



public  **wasMatched** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Checks if the router matches any of the defined routes



public  **getRoutes** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns all the routes defined in the router



public  **getRouteById** (*mixed* $id) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns a route object by its id



public  **getRouteByName** (*mixed* $name) inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns a route object by its name



public  **isExactControllerName** () inherited from [Phalcon\Mvc\Router](Phalcon_Mvc_Router.md)

Returns whether controller name should not be mangled




<hr>

# Class **Phalcon\Mvc\Router\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/router/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Mvc\Router\Group**

*implements* [Phalcon\Mvc\Router\GroupInterface](Phalcon_Mvc_Router.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/router/group.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Helper class to create a group of routes with common attributes

```php
<?php

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


## Methods
public  **__construct** ([*mixed* $paths])

Phalcon\Mvc\Router\Group constructor



public  **setHostname** (*mixed* $hostname)

Set a hostname restriction for all the routes in the group



public  **getHostname** ()

Returns the hostname restriction



public  **setPrefix** (*mixed* $prefix)

Set a common uri prefix for all the routes in this group



public  **getPrefix** ()

Returns the common prefix for all the routes



public  **beforeMatch** (*mixed* $beforeMatch)

Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched



public  **getBeforeMatch** ()

Returns the 'before match' callback if any



public  **setPaths** (*mixed* $paths)

Set common paths for all the routes in the group



public  **getPaths** ()

Returns the common paths defined for this group



public  **getRoutes** ()

Returns the routes added to the group



public  **add** (*mixed* $pattern, [*mixed* $paths], [*mixed* $httpMethods])

Adds a route to the router on any HTTP method

```php
<?php

$router->add("/about", "About::index");

```



public [Phalcon\Mvc\Router\Route](Phalcon_Mvc_Router.md) **addGet** (*string* $pattern, [*string/array* $paths])

Adds a route to the router that only match if the HTTP method is GET



public [Phalcon\Mvc\Router\Route](Phalcon_Mvc_Router.md) **addPost** (*string* $pattern, [*string/array* $paths])

Adds a route to the router that only match if the HTTP method is POST



public [Phalcon\Mvc\Router\Route](Phalcon_Mvc_Router.md) **addPut** (*string* $pattern, [*string/array* $paths])

Adds a route to the router that only match if the HTTP method is PUT



public [Phalcon\Mvc\Router\Route](Phalcon_Mvc_Router.md) **addPatch** (*string* $pattern, [*string/array* $paths])

Adds a route to the router that only match if the HTTP method is PATCH



public [Phalcon\Mvc\Router\Route](Phalcon_Mvc_Router.md) **addDelete** (*string* $pattern, [*string/array* $paths])

Adds a route to the router that only match if the HTTP method is DELETE



public [Phalcon\Mvc\Router\Route](Phalcon_Mvc_Router.md) **addOptions** (*string* $pattern, [*string/array* $paths])

Add a route to the router that only match if the HTTP method is OPTIONS



public [Phalcon\Mvc\Router\Route](Phalcon_Mvc_Router.md) **addHead** (*string* $pattern, [*string/array* $paths])

Adds a route to the router that only match if the HTTP method is HEAD



public  **clear** ()

Removes all the pre-defined routes



protected  **_addRoute** (*mixed* $pattern, [*mixed* $paths], [*mixed* $httpMethods])

Adds a route applying the common attributes




<hr>

# Interface **Phalcon\Mvc\Router\GroupInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/router/groupinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setHostname** (*mixed* $hostname)

...


abstract public  **getHostname** ()

...


abstract public  **setPrefix** (*mixed* $prefix)

...


abstract public  **getPrefix** ()

...


abstract public  **beforeMatch** (*mixed* $beforeMatch)

...


abstract public  **getBeforeMatch** ()

...


abstract public  **setPaths** (*mixed* $paths)

...


abstract public  **getPaths** ()

...


abstract public  **getRoutes** ()

...


abstract public  **add** (*mixed* $pattern, [*mixed* $paths], [*mixed* $httpMethods])

...


abstract public  **addGet** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addPost** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addPut** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addPatch** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addDelete** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addOptions** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addHead** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **clear** ()

...



<hr>

# Class **Phalcon\Mvc\Router\Route**

*implements* [Phalcon\Mvc\Router\RouteInterface](Phalcon_Mvc_Router.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/router/route.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class represents every route added to the router


## Methods
public  **__construct** (*mixed* $pattern, [*mixed* $paths], [*mixed* $httpMethods])

Phalcon\Mvc\Router\Route constructor



public  **compilePattern** (*mixed* $pattern)

Replaces placeholders from pattern returning a valid PCRE regular expression



public  **via** (*mixed* $httpMethods)

Set one or more HTTP methods that constraint the matching of the route

```php
<?php

$route->via("GET");

$route->via(
    [
        "GET",
        "POST",
    ]
);

```



public  **extractNamedParams** (*mixed* $pattern)

Extracts parameters from a string



public  **reConfigure** (*mixed* $pattern, [*mixed* $paths])

Reconfigure the route adding a new pattern and a set of paths



public static  **getRoutePaths** ([*mixed* $paths])

Returns routePaths



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



public  **beforeMatch** (*mixed* $callback)

Sets a callback that is called if the route is matched.
The developer can implement any arbitrary conditions here
If the callback returns false the route is treated as not matched

```php
<?php

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



public  **getBeforeMatch** ()

Returns the 'before match' callback if any



public  **match** (*mixed* $callback)

Allows to set a callback to handle the request directly in the route

```php
<?php

$router->add(
    "/help",
    []
)->match(
    function () {
        return $this->getResponse()->redirect("https://support.google.com/", true);
    }
);

```



public  **getMatch** ()

Returns the 'match' callback if any



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



public  **setHttpMethods** (*mixed* $httpMethods)

Sets a set of HTTP methods that constraint the matching of the route (alias of via)

```php
<?php

$route->setHttpMethods("GET");
$route->setHttpMethods(["GET", "POST"]);

```



public  **getHttpMethods** ()

Returns the HTTP methods that constraint matching the route



public  **setHostname** (*mixed* $hostname)

Sets a hostname restriction to the route

```php
<?php

$route->setHostname("localhost");

```



public  **getHostname** ()

Returns the hostname restriction if any



public  **setGroup** ([Phalcon\Mvc\Router\GroupInterface](Phalcon_Mvc_Router.md) $group)

Sets the group associated with the route



public  **getGroup** ()

Returns the group associated with the route



public  **convert** (*mixed* $name, *mixed* $converter)

Adds a converter to perform an additional transformation for certain parameter



public  **getConverters** ()

Returns the router converter



public static  **reset** ()

Resets the internal route id generator




<hr>

# Interface **Phalcon\Mvc\Router\RouteInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/router/routeinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setHostname** (*mixed* $hostname)

...


abstract public  **getHostname** ()

...


abstract public  **compilePattern** (*mixed* $pattern)

...


abstract public  **via** (*mixed* $httpMethods)

...


abstract public  **reConfigure** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **getName** ()

...


abstract public  **setName** (*mixed* $name)

...


abstract public  **setHttpMethods** (*mixed* $httpMethods)

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


abstract public  **getHttpMethods** ()

...


abstract public static  **reset** ()

...



<hr>

# Interface **Phalcon\Mvc\RouterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/routerinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setDefaultModule** (*mixed* $moduleName)

...


abstract public  **setDefaultController** (*mixed* $controllerName)

...


abstract public  **setDefaultAction** (*mixed* $actionName)

...


abstract public  **setDefaults** (*array* $defaults)

...


abstract public  **handle** ([*mixed* $uri])

...


abstract public  **add** (*mixed* $pattern, [*mixed* $paths], [*mixed* $httpMethods])

...


abstract public  **addGet** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addPost** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addPut** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addPatch** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addDelete** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addOptions** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addHead** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addPurge** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addTrace** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **addConnect** (*mixed* $pattern, [*mixed* $paths])

...


abstract public  **mount** ([Phalcon\Mvc\Router\GroupInterface](Phalcon_Mvc_Router.md) $group)

...


abstract public  **clear** ()

...


abstract public  **getModuleName** ()

...


abstract public  **getNamespaceName** ()

...


abstract public  **getControllerName** ()

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
