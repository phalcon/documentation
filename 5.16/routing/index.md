---
title: "Routing Component"
version: "5.16"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Routing Component

## Overview

The [Phalcon\Mvc\Router][mvc-router] component allows you to define routes that are mapped to controllers or handlers that receive and can handle the request. The router has two modes: MVC mode and match-only mode. The first mode is ideal for working with MVC applications.

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router();

$router->add(
'/admin/invoices/list',
[
    'controller' => 'invoices',
    'action'     => 'list',
]
);

$router->handle(
$_SERVER["REQUEST_URI"]
);
```

## Constants

There are two constants available for the [Phalcon\Mvc\Router][mvc-router] component that are used to define the position of the route in the processing stack.

- `POSITION_FIRST`
- `POSITION_LAST`

## Methods

```php
public function __construct(
bool $defaultRoutes = true
)
```

Phalcon\Mvc\Router constructor

```php
public function add(
string $pattern, 
mixed $paths = null, 
mixed $httpMethods = null, 
int $position = Router::POSITION_LAST
): RouteInterface
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

```php
public function addConnect(
string $pattern, 
mixed $paths = null, 
int $position = Router::POSITION_LAST
): RouteInterface
```

Adds a route to the router that only matches if the HTTP method is `CONNECT`

```php
public function addDelete(
string $pattern, 
mixed $paths = null, 
int $position = Router::POSITION_LAST
): RouteInterface
```

Adds a route to the router that only matches if the HTTP method is `DELETE`

```php
public function addGet(
string $pattern, 
mixed $paths = null, 
int $position = Router::POSITION_LAST
): RouteInterface
```

Adds a route to the router that only matches if the HTTP method is `GET`

```php
public function addHead(
string $pattern, 
mixed $paths = null, 
int $position = Router::POSITION_LAST
): RouteInterface
```

Adds a route to the router that only matches if the HTTP method is `HEAD`

```php
public function addOptions(
string $pattern, 
mixed $paths = null, 
int $position = Router::POSITION_LAST
): RouteInterface
```

Add a route to the router that only matches if the HTTP method is `OPTIONS`

```php
public function addPatch(
string $pattern, 
mixed $paths = null, 
int $position = Router::POSITION_LAST
): RouteInterface
```

Adds a route to the router that only matches if the HTTP method is `PATCH`

```php
public function addPost(
string $pattern, 
mixed $paths = null, 
int $position = Router::POSITION_LAST
): RouteInterface
```

Adds a route to the router that only matches if the HTTP method is `POST`

```php
public function addPurge(
string $pattern, 
mixed $paths = null, 
int $position = Router::POSITION_LAST
): RouteInterface
```

Adds a route to the router that only matches if the HTTP method is `PURGE` (Squid and Varnish support)

```php
public function addPut(
string $pattern, 
mixed $paths = null, 
int $position = Router::POSITION_LAST
): RouteInterface
```

Adds a route to the router that only matches if the HTTP method is `PUT`

```php
public function addTrace(
string $pattern, 
mixed $paths = null, 
int $position = Router::POSITION_LAST
): RouteInterface
```

Adds a route to the router that only matches if the HTTP method is `TRACE`

```php
public function attach(
RouteInterface $route, 
int $position = Router::POSITION_LAST
): RouterInterface
```

Attach the Route object to the routes stack.

```php
use Phalcon\Mvc\Router;
use Phalcon\Mvc\Router\Route;

class CustomRoute extends Route {
 // ...
}

$router = new Router();

$router->attach(
new CustomRoute(
    "/about", 
    "About::index", 
    ["GET", "HEAD"]
),
Router::POSITION_FIRST
);
```

```php
public function clear(): void
```

Removes all the pre-defined routes

```php
public function getActionName(): string
```

Returns the processed action name

```php
public function getControllerName(): string
```

Returns the processed controller name

```php
public function getMatchedRoute(): RouteInterface
```

Returns the route that matches the handled URI

```php
public function getMatches(): array
```

Returns the sub-expressions in the regular expression matched

```php
public function getModuleName(): string
```

Returns the processed module name

```php
public function getNamespaceName(): string
```

Returns the processed namespace name

```php
public function getParams(): array
```

Returns the processed parameters

```php
public function getRouteById(
mixed $id
): RouteInterface | bool
```

Returns a route object by its id

```php
public function getRouteByName(
string $name
): RouteInterface | bool
```

Returns a route object by its name

```php
public function getRoutes(): RouteInterface[]
```

Returns all the routes defined in the router

```php
public function handle(string $uri): void
```

Handles routing information received from the rewrite engine

```php
$router->handle("/posts/edit/1");
```

```php
public function isExactControllerName(): bool
```

Returns whether the controller name should not be mangled

```php
public function mount(
GroupInterface $group
): RouterInterface
```

Mounts a group of routes in the router

```php
public function notFound(
mixed $paths
): RouterInterface
```

Set a group of paths to be returned when none of the defined routes are matched

```php
public function removeExtraSlashes(
bool $remove
): RouterInterface
```

Set whether the router must remove the extra slashes in the handled routes

```php
public function setDefaultAction(
string $actionName
): RouterInterface
```

Sets the default action name

```php
public function setDefaultController(
string $controllerName
): RouterInterface
```

Sets the default controller name

```php
public function setDefaultModule(
string $moduleName
): RouterInterface
```

Sets the name of the default module

```php
public function setDefaultNamespace(
string $namespaceName
): RouterInterface
```

Sets the name of the default namespace

```php
public function setDefaults(
array $defaults
): RouterInterface
```

Sets an array of default paths. If a route is missing a path the router will use the defined here. This method must not be used to set a 404 route

```php
$router->setDefaults(
[
    "module" => "common",
    "action" => "index",
]
);
```

```php
public function getDefaults(): array
```

Returns an array of default parameters

```php
public function wasMatched(): bool
```

Check if the router matches any of the defined routes

## Defining Routes

[Phalcon\Mvc\Router][mvc-router] provides advanced routing capabilities. In MVC mode, you can define routes and map them to controllers/actions that you require. A route is defined as follows:

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router();

$router->add(
'/admin/invoices/list',
[
    'controller' => 'invoices',
    'action'     => 'list',
]
);

$router->add(
'/admin/customers/list',
[
    'controller' => 'customers',
    'action'     => 'list',
]
);

$router->handle(
$_SERVER["REQUEST_URI"]
);
```

The first parameter of the `add()` method is the pattern you want to match and, optionally, the second parameter is a set of paths. In the above example, for the URI `/admin/invoices/list`, the `InvoicesController` will be loaded and the `listAction` will be called. It is important to remember that the router does not execute the controller and action, it only collects this information and then forwards it to the [Phalcon\Mvc\Dispatcher](/5.16/dispatcher/) which executes them.

An application can have many paths and defining routes one by one can be a cumbersome task. [Phalcon\Mvc\Router][mvc-router] offers an easier way to register routes.

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router();

$router->add(
'/admin/:controller/:action/:params',
[
    'controller' => 1,
    'action'     => 2,
    'params'     => 3,
]
);
```

In the example above, we are using wildcards to make a route valid for many URIs. For example, accessing the following URL (`/admin/customers/view/12345/1`) would produce:

| Controller  | Action | Parameter | Parameter |
|:-----------:|:------:|:---------:|:---------:|
| `customers` | `view` |  `12345`  |    `1`    |

The `add()` method receives a pattern that can optionally have predefined placeholders and regular expression modifiers. All the routing patterns must start with a forward slash character (`/`). The regular expression syntax used is the same as the [PCRE regular expressions][pcre].

:::info[NOTE]
It is not necessary to add regular expression delimiters. All route patterns are case-insensitive.
:::

The second parameter defines how the matched parts should bind to the controller/action/parameters. Matching parts are placeholders or subpatterns delimited by parentheses (round brackets). In the example given above, the first subpattern matched (`:controller`) is the controller part of the route, the second the action (`:action`), and after that any parameters passed (`:params`).

These placeholders make the route expressions more readable and easier to understand. The following placeholders are supported:

| Placeholder    | Regular Expression    | Matches                                                                                      |
|----------------|-----------------------|----------------------------------------------------------------------------------------------|
| `/:module`     | `/([a-zA-Z0-9\_\-]+)` | Valid module name with alpha-numeric characters only                                         |
| `/:controller` | `/([a-zA-Z0-9\_\-]+)` | Valid controller name with alpha-numeric characters only                                     |
| `/:action`     | `/([a-zA-Z0-9_-]+)`   | Valid action name with alpha-numeric characters only                                         |
| `/:params`     | `(/.*)*`              | List of optional words separated by slashes. Only use this placeholder at the end of a route |
| `/:namespace`  | `/([a-zA-Z0-9\_\-]+)` | Single level namespace name                                                                  |
| `/:int`        | `/([0-9]+)`           | Integer parameter                                                                            |

Controller names are camelized, this means that characters (`-`) and (`_`) are removed and the next character is uppercased. For instance, `some_controller` is converted to `SomeController`.

Since you can add as many routes as needed using the `add()` method, the order in which routes are added indicates their relevance. The routes added last have more relevance than the ones added above them. Internally, all defined routes are traversed in reverse order until [Phalcon\Mvc\Router][mvc-router] finds the one that matches the given URI and processes it, while ignoring the rest.

### Named Parameters

The example below demonstrates how to define names to route parameters:

```php
<?php

$router->add(
//         1     /     2    /    3     /   4
'/admin/([0-9]{4})/([0-9]{2})/([0-9]{2})/:params',
[
    'controller' => 'invoices',
    'action'     => 'view',
    'year'       => 1, // ([0-9]{4})
    'month'      => 2, // ([0-9]{2})
    'day'        => 3, // ([0-9]{2})
    'params'     => 4, // :params
]
);
```

In the above example, the route does not define a `controller` or `action`. Those are replaced with fixed values ( `invoices` and `view`). The user will never know the underlying controller that is dispatched by the request. In the controller, those named parameters can be accessed as follows:

```php
<?php

use Phalcon\Mvc\Controller;
use Phalcon\Mvc\Dispatcher;

/**
 * @property Dispatcher $dispatcher
 */
class InvoicesController extends Controller
{
public function viewAction()
{
    // year
    $year = $this->dispatcher->getParam('year');

    // month
    $month = $this->dispatcher->getParam('month');

    // day
    $day = $this->dispatcher->getParam('day');

    // ...
}
}
```

Note that the values of the parameters are obtained from the dispatcher. There is also another way to create named parameters as part of the pattern:

```php
<?php

$router->add(
'/admin/{year}/{month}/{day}/{invoiceNo:[0-9]+}',
[
    'controller' => 'invoices',
    'action'     => 'view',
]
);
```

You can access their values in the same way as before:

```php
<?php

use Phalcon\Mvc\Controller;
use Phalcon\Mvc\Dispatcher;

/**
 * @property Dispatcher $dispatcher
 */
class InvoicesController extends Controller
{
public function viewAction()
{
    // year
    $year = $this->dispatcher->getParam('year');

    // month
    $month = $this->dispatcher->getParam('month');

    // day 
    $day = $this->dispatcher->getParam('day');

    // invoiceNo
    $invoiceNo = $this->dispatcher->getParam('invoiceNo');

    // ...
}
}
```

### Short Syntax

[Phalcon\Mvc\Router][mvc-router] also offers an alternative, shorter syntax. The following examples produce the same result:

```php
<?php

$router->add(
'/admin/{year:[0-9]{4}}/{month:[0-9]{2}}/{day:[0-9]{2}}/:params',
'Invoices::view'
);

$router->add(
'/admin/([0-9]{4})/([0-9]{2})/([0-9]{2})/:params',
[
    'controller' => 'invoices',
    'action'     => 'view',
    'year'       => 1, // ([0-9]{4})
    'month'      => 2, // ([0-9]{2})
    'day'        => 3, // ([0-9]{2})
    'params'     => 4, // :params
]
);
```

### Array and Short Syntax

Array and short syntax can be mixed to define a route, in this case, note that named parameters automatically are added to the route paths according to the position on which they were defined:

```php
<?php

$router->add(
'/admin/{year:[0-9]{4}}/([0-9]{2})/([0-9]{2})/:params',
[
    'controller' => 'invoices',
    'action'     => 'view',
    'month'      => 2, // ([0-9]{2}) // 2
    'day'        => 3, // ([0-9]{2}) // 3
    'params'     => 4, // :params    // 4
]
);
```

The first position must be skipped because it is used for the named parameter `year`.

### Modules

You can define routes with modules in the path. This is especially suitable for multimodule applications. You can define a default route that includes a module wildcard.

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router(false);

$router->add(
'/:module/:controller/:action/:params',
[
    'module'     => 1,
    'controller' => 2,
    'action'     => 3,
    'params'     => 4,
]
);
```

With the above route, you need to always have the module name as part of your URL. For example, for the following URL: `/admin/invoices/view/12345`, will be processed as:

| Module  | Controller | Action | Parameter |
|:-------:|:----------:|:------:|:---------:|
| `admin` | `invoices` | `view` |  `12345`  |

Or you can bind specific routes to specific modules:

```php
<?php

$router->add(
'/login',
[
    'module'     => 'session',
    'controller' => 'login',
    'action'     => 'index',
]
);

$router->add(
'/invoices/:action',
[
    'module'     => 'admin',
    'controller' => 'invoices',
    'action'     => 1,
]
);
```

Or bind them to specific namespaces:

```php
<?php

$router->add(
'/:namespace/login',
[
    'namespace'  => 1,
    'controller' => 'login',
    'action'     => 'index',
]
);
```

The full namespace needs to be passed separately:

```php
<?php

$router->add(
'/login',
[
    'namespace'  => 'Admin\Controllers',
    'controller' => 'login',
    'action'     => 'index',
]
);
```

### HTTP Methods

When you add a route using `add()`, the route will be enabled for any HTTP method. Sometimes we can restrict a route to a specific method. This is particularly useful when creating RESTful applications.

```php
<?php

// GET
$router->addGet(
'/invoices/edit/{id}',
'Invoices::edit'
);

// POST
$router->addPost(
'/invoices/save',
'Invoices::save'
);

// POST/PUT
$router->add(
'/invoices/update',
'Invoices::update'
)->via(
[
    'POST',
    'PUT',
]
);
```

### Converters

Converters are snippets of code that allow you to convert the parameters of a route prior to it being sent to the [dispatcher](/5.16/dispatcher/)

```php
<?php

$route = $router->add(
'/products/{slug:[a-z\-]+}',
[
    'controller' => 'products',
    'action'     => 'show',
]
);

$route->convert(
'slug',
function ($slug) {
    return str_replace('-', '', $slug);
}
);
```

In the above example, the parameter's name allows dashes, therefore a URL can be `/products/new-ipod-nano-generation`. The `convert` method will change the parameter to `newipodnanogeneration`.

Another use case for converters is when binding a model to a route. This allows the model to be passed into the defined action directly.

```php
<?php

$route = $router->add(
'/products/{id}',
[
    'controller' => 'products',
    'action'     => 'show',
]
);

$route->convert(
'id',
function ($id) {
    return Product::findFirstById($id);
}
);
```

In the above example, the ID is passed in the URL and our converter gets the record from the database, passing it back.

### Groups

If a set of routes have common paths they can be grouped for easier maintenance. To achieve this, we utilize the [Phalcon\Mvc\Router\Group][mvc-router-group] component

```php
<?php

use Phalcon\Mvc\Router;
use Phalcon\Mvc\Router\Group;

$router   = new Router();
$invoices = new Group(
[
    'module'     => 'admin',
    'controller' => 'invoices',
]
);

$invoices->setPrefix('/invoices');

$invoices->add(
'/list',
[
    'action' => 'list',
]
);

$invoices->add(
'/edit/{id}',
[
    'action' => 'edit',
]
);

$invoices->add(
'/view',
[
    'controller' => 'common',
    'action'     => 'index',
]
);

$router->mount($invoices);
```

In the above example, we first create a group with a common module and controller. We then add the prefix for the group to be `/invoices`. We then add more routes to the group, some without parameters and some with. The last route allows us to use a different controller than the default one (`common`). Finally, we add the group to the router.

We can extend the [Phalcon\Mvc\Router\Group][mvc-router-group] component and register our routes in it on a per-group basis. This allows us to better organize the routes of our application.

```php
<?php

use Phalcon\Mvc\Router\Group;

class InvoicesRoutes extends Group
{
public function initialize()
{
    $this->setPaths(
        [
            'module'    => 'invoices',
            'namespace' => 'Invoices\Controllers',
        ]
    );

    $this->setPrefix('/invoices');

    $this->add(
        '/list',
        [
            'action' => 'list',
        ]
    );

    $this->add(
        '/edit/{id}',
        [
            'action' => 'edit',
        ]
    );

    $this->add(
        '/view',
        [
            'controller' => 'common',
            'action'     => 'index',
        ]
    );
}
}
```

Now we can mount the custom group class in the router:

```php
<?php

$router->mount(
new InvoicesRoutes()
);
```

### Loading from Configuration

For applications that prefer declarative, data-driven setup, the router can be initialized from an array (or any [ `Phalcon\Config\ConfigInterface`][config-interface] instance). Two entry points are provided: the instance method `Phalcon\Mvc\Router::loadFromConfig()` for composing routes on an existing router, and the [Phalcon\Mvc\Router\RouterFactory][mvc-router-factory] for building a configured router in one step.

This approach keeps route definitions out of bootstrap code, makes them straightforward to load from PHP files, JSON/YAML adapters, or environment-specific sources, and integrates cleanly with IDE refactoring (no string-based service lookups, no broken file-include references).

#### Configuration Schema

The configuration array (or `Config` object) accepts the following top-level keys, all of them optional:

| Key                  | Type                     | Description                                                                                                                                                                           |
|----------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `defaultRoutes`      | `bool`                   | Only honored by `RouterFactory::load()`. When `false`, the two built-in catch-all routes (`/:controller/:action` and `/:controller/:action/:params`) are skipped. Defaults to `true`. |
| `removeExtraSlashes` | `bool`                   | Calls `Router::removeExtraSlashes()`. When `true`, trailing slashes in the request URI are stripped before matching.                                                                  |
| `defaults`           | `array`                  | Calls `Router::setDefaults()`. Accepts the same keys as that method: `namespace`, `module`, `controller`, `action`, `params`.                                                         |
| `notFound`           | `array` or `string`      | Calls `Router::notFound()`. Specifies the controller/action pair used when no route matches.                                                                                          |
| `routes`             | `array` of route entries | List of top-level routes. See _Route Entries_ below.                                                                                                                                  |
| `groups`             | `array` of group entries | List of mounted groups. See _Group Entries_ below.                                                                                                                                    |

##### Route Entries

Each entry in `routes` is itself an array:

| Key        | Type                | Required | Description                                                                                                                                                      |
|------------|---------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pattern`  | `string`            | Yes      | The URL pattern, identical to what you would pass to `Router::add()`. Supports placeholders (`{id}`, `{slug:[a-z\-]+}`), wildcards, and short syntax.            |
| `paths`    | `string` or `array` | Yes      | Either a short-syntax `Controller::action` string or an array with `module`, `namespace`, `controller`, `action` keys.                                           |
| `method`   | `string`            | No       | HTTP method constraint. Accepts `connect`, `delete`, `get`, `head`, `options`, `patch`, `post`, `purge`, `put`, `trace` (case-insensitive). Omit for any method. |
| `name`     | `string`            | No       | Calls `setName()` on the resulting route so it can be retrieved by `Router::getRouteByName()`.                                                                   |
| `hostname` | `string`            | No       | Calls `setHostname()` on the resulting route. Restricts the route to requests matching the given host header.                                                    |

##### Group Entries

Each entry in `groups` builds a [`Phalcon\Mvc\Router\Group`][mvc-router-group] under the hood and mounts it:

| Key        | Type                | Required | Description                                                                                  |
|------------|---------------------|----------|----------------------------------------------------------------------------------------------|
| `prefix`   | `string`            | No       | URI prefix applied to every route in the group (e.g. `/api/v1`).                             |
| `hostname` | `string`            | No       | Hostname restriction applied to every route in the group through `Router::mount()`.          |
| `paths`    | `array` or `string` | No       | Common paths merged into each child route's `paths` (same semantics as `new Group($paths)`). |
| `routes`   | `array`             | No       | List of route entries in the same shape described above.                                     |

#### Quick Example

```php
<?php

use Phalcon\Mvc\Router\RouterFactory;

$config = [
'defaultRoutes'      => false,
'removeExtraSlashes' => true,
'defaults' => [
    'namespace'  => 'MyApp\\Controllers',
    'module'     => 'frontend',
    'controller' => 'index',
    'action'     => 'index',
],
'notFound' => [
    'controller' => 'errors',
    'action'     => 'show404',
],
'routes' => [
    [
        'method'  => 'get',  
        'pattern' => '/',                  
        'paths'   => 'Index::index',           
        'name'    => 'home',
    ],
    [
        'method'  => 'get',  
        'pattern' => '/about',             
        'paths'   => 'About::index',           
        'name'    => 'about',
    ],
    [
        'method'  => 'get',  
        'pattern' => '/users/{id:[0-9]+}', 
        'paths'   => 'Users::show',            
        'name'    => 'user-show',
    ],
    [
        'method'  => 'post', 
        'pattern' => '/users',             
        'paths'   => 'Users::create',          
        'name'    => 'user-create',
    ],
],
];

$router = (new RouterFactory())->load($config);

$router->handle($_SERVER['REQUEST_URI']);
```

#### Using `Router::loadFromConfig()` on an Existing Router

When you have already constructed a router (for example, to set events or DI before route loading), call `loadFromConfig()` directly:

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router(false);

$router->setEventsManager($eventsManager);

$router->loadFromConfig([
'routes' => [
    [
        'method'  => 'get',  
        'pattern' => '/login',  
        'paths'   => 'Session::login',
    ],
    [
        'method'  => 'post', 
        'pattern' => '/login',  
        'paths'   => 'Session::start',
    ],
    [
        'method'  => 'get',  
        'pattern' => '/logout', 
        'paths'   => 'Session::logout',
    ],
],
]);
```

The method is chainable - it returns the router itself - so you can keep composing:

```php
<?php

$router
->loadFromConfig($baseRoutes)
->loadFromConfig($adminRoutes)
;
```

#### Working with Groups

The `groups` key turns into mounted `Group` instances. Each group's `prefix` is prepended to every child `pattern`, and the group's `hostname` is propagated to every child route:

```php
<?php

use Phalcon\Mvc\Router\RouterFactory;

$config = [
'defaultRoutes' => false,
'groups' => [
    [
        'prefix'   => '/api/v1',
        'hostname' => 'api.example.com',
        'paths'    => [
            'namespace' => 'MyApp\\Api\\V1\\Controllers',
        ],
        'routes' => [
            [
                'method'  => 'get',    
                'pattern' => '/users',          
                'paths'   => [
                    'controller' => 'users', 
                    'action'     => 'index',
                ],
                'name'    => 'api-users-list',
            ],
            [
                'method'  => 'get',    
                'pattern' => '/users/{id}',     
                'paths'   => [
                    'controller' => 'users', 
                    'action'     => 'show',
                ],
                'name'    => 'api-users-show',
            ],
            [
                'method'  => 'post',   
                'pattern' => '/users',          
                'paths'   => [
                    'controller' => 'users', 
                    'action'     => 'create',
                ], 
                'name'    => 'api-users-create',
            ],
            [
                'method'  => 'put',    
                'pattern' => '/users/{id}',     
                'paths'   => [
                    'controller' => 'users', 
                    'action'     => 'update',
                ], 
                'name'    => 'api-users-update',
            ],
            [
                'method'  => 'delete', 
                'pattern' => '/users/{id}',     
                'paths'   => [
                    'controller' => 'users', 
                    'action'     => 'delete',
                ], 
                'name'    => 'api-users-delete',
            ],
        ],
    ],
    [
        'prefix' => '/admin',
        'paths'  => [
            'namespace' => 'MyApp\\Admin\\Controllers',
            'module'    => 'admin',
        ],
        'routes' => [
            [
                'method'  => 'get', 
                'pattern' => '/dashboard', 
                'paths'   => [
                    'controller' => 'dashboard', 
                    'action'     => 'index',
                ]
            ],
            [
                'method'  => 'get', 
                'pattern' => '/reports',   
                'paths'   => [
                    'controller' => 'reports',   
                    'action'     => 'index',
                ]
            ],
        ],
    ],
],
];

$router = (new RouterFactory())->load($config);
```

#### Accepting `Phalcon\Config\Config` Objects

Both `RouterFactory::load()` and `Router::loadFromConfig()` accept any implementation of [ `Phalcon\Config\ConfigInterface`][config-interface], which is automatically converted to an array via `toArray()`. This lets you keep your route definitions in a separate `.php`, `.ini`, `.json`, or `.yml` file:

`config/routes.php`:

```php
<?php

return [
'defaultRoutes' => false,
'routes'        => [
    [
        'method'  => 'get',  
        'pattern' => '/',         
        'paths'   => 'Index::index',
    ],
    [
        'method'  => 'get',  
        'pattern' => '/about',    
        'paths'   => 'About::index',
    ],
    [
        'method'  => 'post', 
        'pattern' => '/contact',  
        'paths'   => 'Contact::send',
    ],
],
];
```

`bootstrap.php`:

```php
<?php

use Phalcon\Config\Config;
use Phalcon\Mvc\Router\RouterFactory;

$config = new Config(require __DIR__ . '/config/routes.php');
$router = (new RouterFactory())->load($config);
```

Or, using the `Config` factory for file-format-agnostic loading:

```php
<?php

use Phalcon\Config\ConfigFactory;
use Phalcon\Mvc\Router\RouterFactory;

$config = (new ConfigFactory())->load(
[
    'adapter'  => 'json',
    'filePath' => __DIR__ . '/config/routes.json',
]
);

$router = (new RouterFactory())->load($config);
```

#### Environment-Based Loading

Because the configuration is an array, it's straightforward to compose, merge, or conditionally include routes:

```php
<?php

use Phalcon\Mvc\Router\RouterFactory;

$config = require __DIR__ . '/config/routes.base.php';

if ('production' !== getenv('APP_ENV')) {
$config['routes'] = array_merge(
    $config['routes'],
    require __DIR__ . '/config/routes.debug.php'
);
}

$router = (new RouterFactory())->load($config);
```

#### As a DI Service Provider

A typical service-provider pattern looks like:

```php
<?php

namespace MyApp\Providers;

use Phalcon\Di\DiInterface;
use Phalcon\Di\ServiceProviderInterface;
use Phalcon\Mvc\Router\RouterFactory;

class RouterProvider implements ServiceProviderInterface
{
public function register(DiInterface $di): void
{
    $di->setShared(
        'router',
        function () {
            return (new RouterFactory())->load(
                require __DIR__ . '/../../config/routes.php'
            );
        }
    );
}
}
```

#### Building a Router Without Routes

The factory's `newInstance()` method returns a bare router without loading any configuration. This is occasionally useful when you want the factory's construction signature but plan to attach routes imperatively afterwards:

```php
<?php

use Phalcon\Mvc\Router\RouterFactory;

$factory = new RouterFactory();
$router  = $factory->newInstance(false); // false = skip the default catch-all routes

$router->addGet('/', 'Index::index');
$router->addGet('/about', 'About::index');
```

#### Validation and Exceptions

Both `loadFromConfig()` and `RouterFactory::load()` validate their input and throw [ `Phalcon\Mvc\Router\Exception`][mvc-router-exception] on misconfiguration:

| Condition                                               | Exception message                                                                 |
|---------------------------------------------------------|-----------------------------------------------------------------------------------|
| Top-level argument is not an array or `ConfigInterface` | `loadFromConfig requires an array or Phalcon\Config\ConfigInterface instance`     |
| `defaults` is not an array                              | `'defaults' must be an array`                                                     |
| `routes` is not an array                                | `'routes' must be an array`                                                       |
| `groups` is not an array                                | `'groups' must be an array`                                                       |
| A route entry is missing `pattern`                      | `Route config entry is missing 'pattern'`                                         |
| A route entry is missing `paths`                        | `Route config entry is missing 'paths'`                                           |
| A route entry specifies an unsupported `method`         | `Unknown HTTP method '<name>' in route config`                                    |
| A group entry's `routes` is not an array                | `Group 'routes' must be an array`                                                 |
| A group route entry is missing `pattern` or `paths`     | `Group route entry is missing 'pattern'` / `Group route entry is missing 'paths'` |
| A group route entry specifies an unsupported `method`   | `Unknown HTTP method '<name>' in group route config`                              |

## Matching Routes

A valid URI must be passed to the Router so that it can process it and find a matching route. By default, the routing URI is taken from the `$_GET['_url']` variable that is created by the rewrite engine module. A couple of rewrite rules that work very well with Phalcon are:

```apache
RewriteEngine On
RewriteCond   %{REQUEST_FILENAME} !-d
RewriteCond   %{REQUEST_FILENAME} !-f
RewriteRule   ^((?s).*)$ index.php?_url=/$1 [QSA,L]
```

In this configuration, any requests to files or folders that do not exist will be sent to `index.php`. The following example shows how to use this as a stand-alone component:

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router();

// ...

$router->handle(
$_GET["_url"]
);

echo $router->getControllerName();
echo $router->getActionName();

$route = $router->getMatchedRoute();
```

In the above example, we first create a router object. We can have some code after that, such as defining services, routes, etc. We then take the `_url` element from the `$_GET` superglobal and after that, we can get the controller name or the action name or even get back the matched route.

## Naming Routes

Each route that is added to the router is stored internally as a [Phalcon\Mvc\Router\Route][mvc-router-route] object. That class encapsulates all the details of each route. For instance, we can give a name to a path to identify it uniquely in our application. This is especially useful if you want to create URLs from it.

```php
<?php

$route = $router->add(
'/admin/{year:[0-9]{4}}/{month:[0-9]{2}}/{day:[0-9]{2}}/{id:[0-9]{4}}',
'Invoices::view'
);

$route->setName('invoices-view');
```

Then, using for example the component [Phalcon\Url][mvc-url] we can build routes from the defined name:

```php
<?php

// /admin/2019/12/25/1234
echo $url->get(
[
    'for'   => 'invoices-view',
    'year'  => '2019',
    'month' => '12',
    'day'   => '25',
    'id'    => '1234',
]
);
```

## Default Behavior

[Phalcon\Mvc\Router][mvc-router] has a default behavior providing simple routing that always expects a URI and matches the following pattern:

```
/:controller/:action/:params
```

For example, for a URL like this `https://dev.phalcon.od/download/linux/ubuntu.html`, this router will translate it as follows:

|      Controller      |    Action     |   Parameter   |
|:--------------------:|:-------------:|:-------------:|
| `DownloadController` | `linuxAction` | `ubuntu.html` |

If you do not want the router to follow this behavior, you must create the router passing `false` in the constructor.

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router(false);
```

## Default Route

When your application is accessed without any route, the `/` route is used to determine what paths must be used to show the initial page in your application

```php
<?php

$router->add(
'/',
[
    'controller' => 'index',
    'action'     => 'index',
]
);
```

## Not Found (404)

If none of the routes, specified in the router, match, you can define a 404 controller/action by using the `notFound` method.

```php
<?php

$router->notFound(
[
    'controller' => 'index',
    'action'     => 'fourOhFour',
]
);
```

:::warning[WARNING]
This will only work if the router was created without default routes: `$router = Phalcon\Mvc\Router(false);`
:::

## Defaults

You can define default values for `module`, `controller`, and `action`. When a route is missing any of these elements in its path, the router will automatically use the default value set.

```php
<?php

$router->setDefaultModule('admin');
$router->setDefaultNamespace('Admin\Controllers');
$router->setDefaultController('index');
$router->setDefaultAction('index');

$router->setDefaults(
[
    'controller' => 'index',
    'action'     => 'index',
]
);
```

## Trailing Slashes

Sometimes a route could be accessed with extra/trailing slashes. The extra slashes will produce a not-found status in the dispatcher, which is not what we want. You can set up the router to automatically remove the slashes from the end of the handled route.

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router();

$router->removeExtraSlashes(true);
```

Or, you can modify specific routes to optionally accept trailing slashes:

```php
<?php

$route = $router->add(
'/admin/:controller/status[/]{0,1}',
[
    'controller' => 2,
    'action'     => 'status',
]
);
```

In the above, the `[/]{0,1}` allows for an optional trailing slash

## Callbacks

Sometimes, routes should only be matched if they meet specific conditions. You can add arbitrary conditions to routes using the `beforeMatch` callback. If this function returns `false`, the route will be treated as non-matched:

```php
<?php

$route = $router->add(
'/login',
[
    'module'     => 'admin',
    'controller' => 'session',
]
);

$route->beforeMatch(
function ($uri, $route) {
    if (true === isset($_SERVER['HTTP_X_REQUESTED_WITH']) && 
        $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest'
    ) {
        return false;
    }

    return true;
}
);
```

The above will check if the request has been made with AJAX and return <code>false</code> if it was not

You can create a filter class, to allow you to inject the same functionality in different routes.

```php
<?php

class AjaxFilter
{
public function check()
{
    return $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest';
}
}
```

To set this up, we add the class to the `beforeMatch` call.

```php
<?php

$route = $router->add(
'/login',
[
    'module'     => 'admin',
    'controller' => 'session',
]
);

$route->beforeMatch(
[
    new AjaxFilter(),
    'check'
]
);
```

Finally, you can use the `beforeMatch` method (or event) to check whether this was an AJAX call or not.

```php
<?php

use Phalcon\Di\DiInterface;
use Phalcon\Http\Request;
use Phalcon\Mvc\Router\Route;

$route = $router->add(
'/login',
[
    'module'     => 'admin',
    'controller' => 'session',
]
);

$route->beforeMatch(
function ($uri, $route) {
    /**
     * @var string     $uri
     * @var Route       $route
     * @var DiInterface $this
     * @var Request     $request
     */
    $request = $this->getShared('request');

    return $request->isAjax();
}
);
```

## Hostname

The [Phalcon\Mvc\Router][mvc-router] component also allows for hostname constraints. This means that the specific routes or a group of routes can be restricted to only match the route if it originated from a specific hostname.

```php
<?php

$route = $router->add(
'/admin/invoices/:action/:params',
[
    'module'     => 'admin',
    'controller' => 'invoices',
    'action'     => 1,
    'params'     => 2,
]
);

$route->setHostName('dev.phalcon.ld');
```

The hostname can also be passed as a regular expression:

```php
<?php

$route = $router->add(
'/admin/invoices/:action/:params',
[
    'module'     => 'admin',
    'controller' => 'invoices',
    'action'     => 1,
    'params'     => 2,
]
);

$route->setHostName('([a-z]+).phalcon.ld');
```

When using groups of routes, you can set the hostname constraints that apply to every route in the group.

```php
<?php

use Phalcon\Mvc\Router\Group;

$invoices = new Group(
[
    'module'     => 'admin',
    'controller' => 'invoices',
]
);

$invoices->setHostName('dev.phalcon.ld');
$invoices->setPrefix('/invoices');

$invoices->add(
'/',
[
    'action' => 'index',
]
);

$invoices->add(
'/list',
[
    'action' => 'list',
]
);

$invoices->add(
'/view/{id}',
[
    'action' => 'view',
]
);

$router->mount($invoices);
```

## Testing

This component does not have any dependencies. As such you can create unit tests to test your routes.

```php
<?php

use Phalcon\Mvc\Router;

$testRoutes = [
'/',
'/index',
'/index/index',
'/index/test',
'/products',
'/products/index/',
'/products/show/101',
];

$router = new Router();

foreach ($testRoutes as $testRoute) {
// Handle the route
$router->handle($testRoute);

echo 'Testing ', $testRoute, '<br>';

// Check if some route was matched
if ($router->wasMatched()) {
    echo 'Controller: ', $router->getControllerName(), '<br>';
    echo 'Action: ', $router->getActionName(), '<br>';
} else {
    echo "The route wasn't matched by any route<br>";
}

echo '<br>';
}
```

## Events

Similar to other Phalcon components, [Phalcon\Mvc\Router][mvc-router] also has events, when an [Events Manager](/5.16/events/) is present. The available events are:

| Event               | Fired when                        |
|---------------------|-----------------------------------|
| `afterCheckRoutes`  | After checking all the routes     |
| `beforeCheckRoute`  | Before checking a route           |
| `beforeCheckRoutes` | Before checking all loaded routes |
| `beforeMount`       | Before mounting a new route       |
| `matchedRoute`      | When a route is matched           |
| `notMatchedRoute`   | When a route is not matched       |

## Annotations

This component provides a variant that is integrated with the [annotations][annotations] service. Using this strategy you can write the routes directly in the controllers instead of adding them to router component directly.

```php
<?php

use Phalcon\Mvc\Router\Annotations;

$container['router'] = function () {
$router = new Annotations(false);

$router->addResource('Invoices', '/admin/invoices');

return $router;
};
```

In the above example, we utilize the [Phalcon\Mvc\Router\Annotations][mvc-router-annotations] component to set up our routes. We pass `false` to remove the default behavior. After that, we are instructing the component to read the annotations from the `InvoicesController` if the URI matches `/admin/invoices`.

The `InvoicesController` will need to have the following implementation:

```php
<?php

/**
 * @RoutePrefix('/admin/invoices')
 */
class InvoicesController
{
/**
 * @Get(
 *     '/'
 * )
 */
public function indexAction()
{

}

/**
 * @Get(
 *     '/edit/{id:[0-9]+}',
 *     name='invoice-edit'
 * )
 */
public function editAction($id)
{

}

/**
 * @Route(
 *     '/save',
 *     methods={'POST', 'PUT'},
 *     name='invoice-save'
 * )
 */
public function saveAction()
{

}

/**
 * @Route(
 *     '/delete/{id:[0-9]+}',
 *     methods='DELETE',
 *     converters={
 *         id='MyConverters::checkId'
 *     }
 * )
 */
public function deleteAction($id)
{

}
}
```

Only methods marked with valid annotations are used as routes. The available annotations are:

| Annotation    | Description                                                                    | Usage                              |
|---------------|--------------------------------------------------------------------------------|------------------------------------|
| `Delete`      | Restrict the HTTP method to `DELETE`                                           | `@Delete('/invoices/delete/{id}')` |
| `Get`         | Restrict the HTTP method to `GET`                                              | `@Get('/invoices/search')`         |
| `Options`     | Restrict the HTTP method to `OPTIONS`                                          | `@Option('/invoices/info')`        |
| `Post`        | Restrict the HTTP method to `POST`                                             | `@Post('/invoices/save')`          |
| `Put`         | Restrict the HTTP method to `PUT`                                              | `@Put('/invoices/save')`           |
| `Route`       | Mark a method as a route. Must be placed in a method docblock                  | `@Route('/invoices/show')`         |
| `RoutePrefix` | Prefix to be prepended to each route URI. Must be placed in the class docblock | `@RoutePrefix('/invoices')`        |

For annotations that add routes, the following parameters are supported:

| Name         | Description                                    | Usage                                                               |
|--------------|------------------------------------------------|---------------------------------------------------------------------|
| `converters` | A hash of converters for the parameters        | `@Route('/posts/{id}/{slug}', converter={id='MyConverter::getId'})` |
| `methods`    | One or more HTTP methods allowed for the route | `@Route('/api/products', methods={'GET', 'POST'})`                  |
| `name`       | The name for the route                         | `@Route('/api/products', name='get-products')`                      |
| `paths`      | Paths array for the route                      | `@Route('/invoices/view/{id}/{slug}', paths={module='backend'})`    |

If you are using modules in your application, it is better to use the `addModuleResource()` method:

```php
<?php

use Phalcon\Mvc\Router\Annotations;

$container['router'] = function () {
$router = new Annotations(false);

$router->addModuleResource(
    'admin', 
    'Invoices', 
    '/admin/invoices'
);

return $router;
};
```

In the above, we will read the annotations from `Admin\Controllers\InvoicesController` if the URI starts with `/admin/invoices`.

The `controllerSuffix` (default `Controller`) is stripped from the resolved class name before the annotated routes are emitted. If the registered handler is already a fully-qualified class name that ends in the suffix (e.g. `App\Controllers\InvoicesController`), the suffix is not appended a second time, so the route handler is registered as `Invoices` rather than `InvoicesController`.

The router also understands prefixes to ensure that the routes are resolved as fast as possible. For instance for the following routes:

```
/clients/{clientId:[0-9]+}/
/clients/{clientId:[0-9]+}/robots
/clients/{clientId:[0-9]+}/parts
```

only the `/clients` prefix can be used in all controllers, thus speeding up the lookup.

## Dependency Injection

You can register the router component during the container setup, to make it available inside the controllers or any other components that extend the [Phalcon\Di\Injectable][di-injectable] component.

You can use the example below in your bootstrap file (for example `index.php` or `app/config/services.php` if you use [Phalcon Developer Tools][devtools]).

```php
<?php

$container->set(
'router',
function () {
    require __DIR__ . '/app/config/routes.php';

    return $router;
}
);
```

You need to create `app/config/routes.php` and add the router initialization code:

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router();

$router->add(
'/login',
[
    'controller' => 'login',
    'action'     => 'index',
]
);

$router->add(
'/invoices/:action',
[
    'controller' => 'invoices',
    'action'     => 1,
]
);

return $router;
```

## Custom

You can create your own components by implementing the supplied interfaces:

- [Phalcon\Mvc\Router\GroupInterface][mvc-router-groupinterface]
- [Phalcon\Mvc\Router\RouteInterface][mvc-router-routeinterface]
- [Phalcon\Mvc\RouterInterface][mvc-routerinterface]

## Examples

The following are examples of custom routes:

```php
<?php

// '/system/admin/a/edit/7001'
$router->add(
'/system/:controller/a/:action/:params',
[
    'controller' => 1,
    'action'     => 2,
    'params'     => 3,
]
);

// '/en/news'
$router->add(
'/([a-z]{2})/:controller',
[
    'controller' => 2,
    'action'     => 'index',
    'language'   => 1,
]
);

// '/en/news'
$router->add(
'/{language:[a-z]{2}}/:controller',
[
    'controller' => 2,
    'action'     => 'index',
]
);

// '/admin/posts/edit/100'
$router->add(
'/admin/:controller/:action/:int',
[
    'controller' => 1,
    'action'     => 2,
    'id'         => 3,
]
);

// '/posts/2015/02/some-cool-content'
$router->add(
'/posts/([0-9]{4})/([0-9]{2})/([a-z\-]+)',
[
    'controller' => 'posts',
    'action'     => 'show',
    'year'       => 1,
    'month'      => 2,
    'title'      => 3,
]
);

// '/manual/en/translate.adapter.html'
$router->add(
'/manual/([a-z]{2})/([a-z\.]+)\.html',
[
    'controller' => 'manual',
    'action'     => 'show',
    'language'   => 1,
    'file'       => 2,
]
);

// /feed/fr/hot-news.atom
$router->add(
'/feed/{lang:[a-z]+}/{blog:[a-z\-]+}\.{type:[a-z\-]+}',
'Feed::get'
);

// /api/v1/users/peter.json
$router->add(
'/api/(v1|v2)/{method:[a-z]+}/{param:[a-z]+}\.(json|xml)',
[
    'controller' => 'api',
    'version'    => 1,
    'format'     => 4,
]
);
```

:::danger[DANGER]
 Be careful when allowing characters in regular expressions for controllers and namespaces. These will become class names and in turn, they will interact with the file system. As such, it is possible that an attacker can access unauthorized files. A safe regular expression is: `/([a-zA-Z0-9\_\-]+)`
:::

## Exceptions

Any exception thrown in the [Phalcon\Mvc\Router][mvc-router] component will be of type `Phalcon\Mvc\Router\Exception`. You can use this exception to selectively catch exceptions thrown only from this component.

### Granular Exceptions

The component raises granular subclasses of `Phalcon\Mvc\Router\Exception` so callers can catch a specific failure mode. Existing `catch (Phalcon\Mvc\Router\Exception $e)` blocks continue to work unchanged.

| Class                                                         | Parent                         | Thrown when                                                                            |
|---------------------------------------------------------------|--------------------------------|----------------------------------------------------------------------------------------|
| `Phalcon\Mvc\Router\Exceptions\AnnotationsServiceUnavailable` | `Phalcon\Mvc\Router\Exception` | The annotations router needs the `annotations` service but it is not in the container. |
| `Phalcon\Mvc\Router\Exceptions\BeforeMatchNotCallable`        | `Phalcon\Mvc\Router\Exception` | A route's `beforeMatch` callback is not callable.                                      |
| `Phalcon\Mvc\Router\Exceptions\ConfigKeyMustBeArray`          | `Phalcon\Mvc\Router\Exception` | A `RouterFactory` config section is not an array.                                      |
| `Phalcon\Mvc\Router\Exceptions\EmptyGroupOfRoutes`            | `Phalcon\Mvc\Router\Exception` | A `Group` is mounted with no routes attached.                                          |
| `Phalcon\Mvc\Router\Exceptions\GroupRoutesMustBeArray`        | `Phalcon\Mvc\Router\Exception` | A group's `routes` config entry is not an array.                                       |
| `Phalcon\Mvc\Router\Exceptions\InvalidCallbackParameter`      | `Phalcon\Mvc\Router\Exception` | The router is given a callback that is not callable.                                   |
| `Phalcon\Mvc\Router\Exceptions\InvalidConfigSource`           | `Phalcon\Mvc\Router\Exception` | A `RouterFactory` is given a config that is not a `Config` or array.                   |
| `Phalcon\Mvc\Router\Exceptions\InvalidNotFoundPaths`          | `Phalcon\Mvc\Router\Exception` | A `notFound` paths entry is not a string or array.                                     |
| `Phalcon\Mvc\Router\Exceptions\InvalidRoutePaths`             | `Phalcon\Mvc\Router\Exception` | A route's paths cannot be processed to a routable array.                               |
| `Phalcon\Mvc\Router\Exceptions\InvalidRoutePosition`          | `Phalcon\Mvc\Router\Exception` | A `Router::POSITION_*` constant has an unrecognized value.                             |
| `Phalcon\Mvc\Router\Exceptions\InvalidRouterFactoryConfig`    | `Phalcon\Mvc\Router\Exception` | The `RouterFactory` is given a config that does not produce a Router.                  |
| `Phalcon\Mvc\Router\Exceptions\MissingGroupRouteKey`          | `Phalcon\Mvc\Router\Exception` | A group route entry is missing a required key.                                         |
| `Phalcon\Mvc\Router\Exceptions\MissingRouteConfigKey`         | `Phalcon\Mvc\Router\Exception` | A route entry is missing a required key.                                               |
| `Phalcon\Mvc\Router\Exceptions\RequestServiceUnavailable`     | `Phalcon\Mvc\Router\Exception` | The router needs the `request` service but the DI container has none.                  |
| `Phalcon\Mvc\Router\Exceptions\UnknownHttpMethod`             | `Phalcon\Mvc\Router\Exception` | A route declares a method (e.g. `via`) that the router does not recognize.             |
| `Phalcon\Mvc\Router\Exceptions\WrongPathsKey`                 | `Phalcon\Mvc\Router\Exception` | A paths entry uses a key the router cannot interpret (`module`, `controller`, ...).    |

[annotations]: /5.16/annotations/
[config-factory]: /5.16/api/phalcon_config/#configconfigfactory
[config-interface]: /5.16/api/phalcon_config/#configconfiginterface
[devtools]: https://phalcon.io/en/download/tools
[di-injectable]: /5.16/api/phalcon_di/#diinjectable
[mvc-router]: /5.16/api/phalcon_mvc/#mvcrouter
[mvc-router-annotations]: /5.16/api/phalcon_mvc/#mvcrouterannotations
[mvc-router-exception]: /5.16/api/phalcon_mvc/#mvcrouterexception
[mvc-router-factory]: /5.16/api/phalcon_mvc/#mvcrouterrouterfactory
[mvc-router-group]: /5.16/api/phalcon_mvc/#mvcroutergroup
[mvc-router-groupinterface]: /5.16/api/phalcon_mvc/#mvcroutergroupinterface
[mvc-router-route]: /5.16/api/phalcon_mvc/#mvcrouterroute
[mvc-router-routeinterface]: /5.16/api/phalcon_mvc/#mvcrouterrouteinterface
[mvc-routerinterface]: /5.16/api/phalcon_mvc/#mvcrouterinterface
[mvc-url]: /5.16/mvc/
[pcre]: https://www.php.net/manual/en/book.pcre.php
[transformers]: https://transformers.hasbro.com/en-us

Source: https://docs.phalcon.io/5.16/routing/index.mdx
