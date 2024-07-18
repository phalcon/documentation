# Micro Application
- - -

## Overview
Phalcon provides a lightweight application structure known as `Micro` to facilitate the creation of applications with minimal PHP code and reduced overhead. `Micro` applications are well-suited for small-scale projects, such as APIs and prototypes, where efficiency and low overhead are crucial.

```php
<?php

use Phalcon\Mvc\Micro;

$app = new Micro();

$app->get(
    '/invoices/view/{id}',
    function ($id) {
        echo "<h1>#{$id}!</h1>";
    }
);

$app->handle(
    $_SERVER["REQUEST_URI"]
);
```

## Activation
To initialize a Micro application, use the [Phalcon\Mvc\Micro][mvc-micro] class.

```php
<?php

use Phalcon\Di\Di;
use Phalcon\Mvc\Micro;

$container = new Di();
$app       = new Micro($container);
```

!!! warning "NOTE"

    Starting from Phalcon v5.3.0, the `Micro` object is no longer automatically registered in the dependency injection container with the name `application`. Developers are required to manage the application instance explicitly.

## Methods

```php
public function __construct(
    DiInterface $container = null
)
```
Constructor. Accepts an optional Di container.

```php
public function after(
    callable $handler
): Micro
```
Appends an `after` middleware to be called after executing the route

```php
public function afterBinding(
    callable $handler
): Micro
```
Appends an `afterBinding` middleware to be called after model binding

```php
public function before(
    callable $handler
): Micro
```
Appends a before middleware to be called before executing the route

```php
public function delete(
    string $routePattern, 
    callable $handler
): RouteInterface
```
Maps a route to a handler that only matches if the HTTP method is DELETE

```php
public function error(
    callable $handler
): Micro
```
Sets a handler that will be called when an exception is thrown handling the route

```php
public function finish(
    callable $handler
): Micro
```
Appends a `finish` middleware to be called when the request is finished

```php
public function get(
    string $routePattern, 
    callable $handler
): RouteInterface
```
Maps a route to a handler that only matches if the HTTP method is GET

```php
public function getActiveHandler(): callable
```
Return the handler that will be called for the matched route

```php
public function getBoundModels(): array
```
Returns bound models from binder instance

```php
public function getHandlers(): array
```
Returns the internal handlers attached to the application

```php
public function getModelBinder(): BinderInterface | null
```
Get the model binder

```php
public function getReturnedValue(): mixed
```
Returns the value returned by the executed handler

```php
public function getRouter(): RouterInterface
```
Returns the internal router used by the application

```php
public function getService(
    string $serviceName
): object
```
Obtains a service from the DI

```php
public function getSharedService(
    string $serviceName
)
```
Obtains a shared service from the DI

```php
public function handle(
    string $uri
): mixed
```
Handle the whole request

```php
public function hasService(
    string $serviceName
): bool
```
Checks if a service is registered in the DI

```php
public function head(
    string $routePattern, 
    callable $handler
): RouteInterface
```
Maps a route to a handler that only matches if the HTTP method is HEAD

```php
public function map(
    string $routePattern, 
    callable $handler
): RouteInterface
```
Maps a route to a handler without any HTTP method constraint

```php
public function mount(
    CollectionInterface $collection
): Micro
```
Mounts a collection of handlers

```php
public function notFound(
    callable $handler
): Micro
```
Sets a handler that will be called when the router does not match any of the defined routes

```php
public function offsetExists(
    mixed $alias
): bool
```
Check if a service is registered in the internal DI container using the array syntax

```php
public function offsetGet(
    mixed $alias
): mixed
```
Gets a DI service from the internal DI container using the array syntax

```php
public function offsetSet(
    mixed $alias, 
    mixed $definition
)
```
Registers a service in the internal DI container using the array syntax

```php
$app["request"] = new \Phalcon\Http\Request();
```

```php
public function offsetUnset(
    mixed $alias
): void
```
Removes a service from the internal DI container using the array syntax

```php
public function options(    
    string $routePattern, 
    callable $handler
): RouteInterface
```
Maps a route to a handler that only matches if the HTTP method is `OPTIONS`

```php
public function patch(
    string $routePattern, 
    callable $handler
): RouteInterface
```
Maps a route to a handler that only matches if the HTTP method is `PATCH`

```php
public function post(
    string $routePattern, 
    callable $handler
): RouteInterface
```
Maps a route to a handler that only matches if the HTTP method is `POST`

```php
public function put(
    string $routePattern, 
    callable $handler
): RouteInterface
```
Maps a route to a handler that only matches if the HTTP method is `PUT`

```php
public function setActiveHandler(
    callable $activeHandler
)
```
Sets externally the handler that must be called by the matched route

```php
public function setModelBinder(
    BinderInterface $modelBinder, 
    mixed $cache = null
): Micro
```
Sets model binder

```php
$micro = new Micro($di);

$micro->setModelBinder(
    new Binder(),
    'cache'
);
```

```php
public function setResponseHandler(
    callable $handler
): Micro
```
Appends a custom `response` handler to be called instead of the default one

```php
public function setService(
    string $serviceName, 
    mixed $definition, 
    bool $shared = false
): ServiceInterface
```
Sets a service in the internal Di container. If no container is preset a [Phalcon\Di\FactoryDefault][di-factorydefault] will be automatically created

```php
public function stop()
```
Stops the middleware execution

## Routes
Defining routes in a [Phalcon\Mvc\Micro][mvc-micro] application is straightforward. Routes are defined in the format:

```text
   Application : (http method): (route url/regex, callable PHP function/handler)
```

### Activation
Routing is managed by the [Phalcon\Mvc\Router][mvc-router] object.

!!! warning "NOTE"

    Routes must always start with `/`

Usually, the initial route for an application is `/`, accessible via the `GET` HTTP method:

```php
<?php

$application->get(
    '/',
    function () {
        echo '<h1>3.1459</h1>';
    }
);
```

!!! info "NOTE"

    Refer to our [routing][routing] document for more information about the [Phalcon\Mvc\Router][mvc-router].

**Application object**

Routes can be set using the [Phalcon\Mvc\Micro][mvc-micro] application object as follows:

```php
<?php

use Phalcon\Mvc\Micro;

$app = new Micro();

$app->get(
    '/invoices/view/{id}',
    function ($id) {
        echo "<h1>#{$id}!</h1>";
    }
);
```

**Router object**

Alternatively, you can create a [Phalcon\Mvc\Router][mvc-router] object, define the routes, and then inject it into the dependency injection container.

```php
<?php

use Phalcon\Di\Di;
use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Router;


$router = new Router();
$router->addGet(
    '/invoices/view/{id}',
    'InvoicesClass::view'
);

$container   = new Di();
$application = new Micro($container);

$application->setService('router', $router, true);
```

Setting up routes using the [Phalcon\Mvc\Micro][mvc-micro] application's HTTP methods (`get`, `post`, etc.) is simpler than configuring a router object with relevant routes and injecting it into the application. The choice between the two approaches depends on the design and requirements of your application.

### Rewrite Rules
For routes to function correctly, your web server needs specific configurations. Refer to the [webserver setup][webserver-setup] document for detailed information.

### Handlers
Handlers are callable pieces of code attached to a route. When the route is matched, the handler executes with all the defined parameters. A handler is any valid PHP `callable`.

#### Registration
Phalcon offers several ways to attach a handler to a route. The choice depends on your application needs, design, and coding style.

**Anonymous Function**

You can use an anonymous function to handle the request

```php
<?php

$app->get(
    '/invoices/view/{id}',
    function ($id) {
        echo "<h1>#{$id}!</h1>";
    }
);
```

Accessing the `$app` object inside the anonymous function is achieved by injecting it as follows:

```php
<?php

$app->get(
    '/invoices/view/{id}',
    function ($id) use ($app){
        $content = "<h1>#{$id}!</h1>";

        $app->response->setContent($content);

        $app->response->send();
    }
);
```

**Function**

Define a function as the handler and attach it to a specific route.

```php
<?php

function invoiceView($id) {
    echo "<h1>#{$id}!</h1>";
}

$app->get(
    '/invoices/view/{id}',
    'invoicesView'
);
```

**Static Method**

Use a static method as the handler.

```php
<?php

class InvoicesClass
{
    public static function view($id) {
        echo "<h1>#{$id}!</h1>";
    }
}

$app->get(
    '/invoices/view/{id}',
    'InvoicesClass::View'
);
```

**Method in an Object**

Use a method in an object as the handler.

```php
<?php

class InvoicesClass
{
    public function view($id) {
        echo "<h1>#{$id}!</h1>";
    }
}

$invoices = new InvoicesClass();
$app->get(
    '/invoices/view/{id}',
    [
        $invoices,
        'view'
    ]
);
```

**Controllers**

For medium applications, which expand on the microarchitecture, you can organize handlers in controllers.

```php
<?php

use Phalcon\Mvc\Micro\Collection as MicroCollection;

$invoices = new MicroCollection();
$invoices
    ->setHandler(new InvoicesController())
    ->setPrefix('/invoices')
    ->get('/', 'index')
    ->get('/view/{id}', 'view')
;

$app->mount($invoices);
```
The `InvoicesController` might look like this:

```php
<?php

use Phalcon\Mvc\Controller;

class InvoicesController extends Controller
{
    public function index()
    {
        // ...
    }

    public function view($id) {
        // ...
    }
}
```

Since controllers extend [Phalcon\Mvc\Controller][mvc-controller], all dependency injection services are available with their respective registration names.

```php
<?php

use Phalcon\Http\Response;
use Phalcon\Mvc\Controller;

/**
 * @property Response $response
 */
class InvoicesController extends Controller
{
    public function index()
    {
        // ...
    }

    public function view($id)
    {
        $content = "<h1>#{$id}!</h1>";

        $this->response->setContent($content);

        return $this->response;
    }
}
```

#### Lazy Loading

To enhance performance, consider implementing lazy loading for your controllers (handlers). Lazy loading ensures that the controller is loaded only when the relevant route is matched. Achieve lazy loading by setting your handler in your [Phalcon\Mvc\Micro\Collection][mvc-micro-collection] using the second parameter or by utilizing the `setLazy` method.

```php
<?php

use MyApp\Controllers\InvoicesController;

$invoices->setHandler(
    InvoicesController::class, 
    true
);


$invoices
    ->setHandler(InvoicesController::class)
    ->setLazy(true)
    ->setPrefix('/invoices')
    ->get('/', 'index')
    ->get('/view/{id}', 'view')
;

$app->mount($invoices);
```

**Use case**

Consider an API development scenario for an online store with endpoints `/users`, `/invoices`, and `/products`. Each endpoint is registered using handlers, where each handler is a controller with relevant actions.

Register the controllers:

```php
<?php

use Phalcon\Mvc\Controller;

class UsersController extends Controller
{
    public function get($id)
    {
        // ...
    }

    public function add($payload)
    {
        // ...
    }
}

class InvoicesController extends Controller
{
    public function get($id)
    {
        // ...
    }

    public function add($payload)
    {
        // ...
    }
}

class ProductsController extends Controller
{
    public function get($id)
    {
        // ...
    }

    public function add($payload)
    {
        // ...
    }
}
```

Register the handlers:

```php
<?php

use Phalcon\Mvc\Micro\Collection as MicroCollection;

$users = new MicroCollection();
$users
    ->setHandler(new UsersController())
    ->setPrefix('/users')
    ->get(
        '/get/{id}', 
        'get'
    )
    ->get(
        '/add/{payload}', 
        'add'
    )
;

$app->mount($users);

$invoices = new MicroCollection();
$invoices
    ->setHandler(new InvoicesController())
    ->setPrefix('/invoices')
    ->get(
        '/get/{id}', 
        'get'
    )
    ->get(
        '/add/{payload}', 
        'add'
    )
;

$app->mount($invoices);

$products = new MicroCollection();
$products
    ->setHandler(new ProductsController())
    ->setPrefix('/products')
    ->get(
        '/get/{id}', 
        'get'
    )
    ->get(
        '/add/{payload}', 
        'add'
    )
;

$app->mount($products);
```

In the above approach, each handler is loaded sequentially and mounted in our application object. The drawback is that each request results in only one endpoint and, consequently, one class method executed. The remaining methods/handlers stay in memory without being utilized.

By incorporating lazy loading, we reduce the number of objects loaded in memory, resulting in more efficient resource usage. The implementation changes as follows:

```php
<?php

use Phalcon\Mvc\Micro\Collection as MicroCollection;

$users = new MicroCollection();
$users
    ->setHandler(
        UsersController::class,
        true
    )
    ->setPrefix('/users')
    ->get(
        '/get/{id}', 
        'get'
    )
    ->get(
        '/add/{payload}', 
        'add'
    )
;

$app->mount($users);

$invoices = new MicroCollection();
$invoices
    ->setHandler(
        InvoicesController::class,
        true
    )
    ->setPrefix('/invoices')
    ->get(
        '/get/{id}', 
        'get'
    )
    ->get(
        '/add/{payload}', 
        'add'
    )
;

$app->mount($invoices);

$products = new MicroCollection();
$products
    ->setHandler(
        ProductsController::class,
        true
    )
    ->setPrefix('/products')
    ->get(
        '/get/{id}', 
        'get'
    )
    ->get(
        '/add/{payload}', 
        'add'
    )
    
$app->mount($products);   
```

With this simple change, all handlers remain uninstantiated until requested by a caller. Consequently, when a caller requests `/invoices/get/2`, our application instantiates the `InvoicesController` and calls the `get` method. The application now utilizes fewer resources.

#### Extra performance tip
For large applications, there's no need to mount all collections, even if they are lazy-loaded. Phalcon uses `regex` to match routes and to speed up the routing process, a _pre-filter_ can be run. For instance:

```php
$uri = new \Phalcon\Http\Message\Uri($_SERVER['REQUEST_URI']);
$path = $uri->getPath();
$parts = explode("/", $path);
$collection = $parts[1];

switch ($collection) {
    case "users":
        $users = new MicroCollection();
        $users
            ->setHandler(
                UsersController::class,
                true
            )
            ->setPrefix('/users')
            ->get(
                '/get/{id}', 
                'get'
            )
            ->get(
                '/add/{payload}', 
                'add'
            )
        ;

        $app->mount($users);
        
        break;

    case "invoices":
        $invoices = new MicroCollection();
        $invoices
            ->setHandler(
                InvoicesController::class,
                true
            )
            ->setPrefix('/invoices')
            ->get(
                '/get/{id}', 
                'get'
            )
            ->get(
                '/add/{payload}', 
                'add'
            )
        ;

        $app->mount($invoices);   
        
        break;

    case "products": 
        $products = new MicroCollection();
        $products
            ->setHandler(
                ProductsController::class,
                true
            )
            ->setPrefix('/products')
            ->get(
                '/get/{id}', 
                'get'
            )
            ->get(
                '/add/{payload}', 
                'add'
            )

        $app->mount($products);  
        
        break;

    default: 
    // ...
}
```

This approach allows Phalcon to handle numerous routes without a regex performance penalty. Using `explode()` proves faster than regex.

#### Not found (404)

Any route not matched in our [Phalcon\Mvc\Micro][mvc-micro] application triggers the execution of the handler defined with the `notFound` method. Similar to other HTTP methods (`get`, `post`, etc.), you can register a handler in the `notFound` method, which can be any callable PHP function.

```php
<?php

$app->notFound(
    function () use ($app) {
        $message = 'XXXXXX';
        $app
            ->response
            ->setStatusCode(404, 'Not Found')
            ->sendHeaders()
            ->setContent($message)
            ->send()
        ;
    }
);
```

Routes that have not been matched (404) can also be handled with Middleware, discussed below.

### HTTP methods
The [Phalcon\Mvc\Micro][mvc-micro] application provides a set of methods to bind the HTTP method with the intended route:

**delete**

Matches if the HTTP method is `DELETE` and the route is `/api/products/delete/{id}`

```php
<?php

$app->delete(
    '/api/products/delete/{id}',
    'deleteProduct'
);
```

**get**

Matches if the HTTP method is `GET` and the route is `/api/products`

```php
<?php

$app->get(
    '/api/products',
    'getProducts'
);
```

**head**

Matches if the HTTP method is `HEAD` and the route is `/api/products`

```php
<?php

$app->get(
    '/api/products',
    'getProducts'
);
```

**map**

`map` allows you to attach the same endpoint to more than one HTTP method. The example below matches if the HTTP method is `GET` or `POST` and the route is `/repos/store/refs`

```php
<?php

$app
    ->map(
        '/repos/store/refs',
        'actionProduct'
    )
    ->via(
        [
            'GET',
            'POST',
        ]
    );
```

**options**

Matches if the HTTP method is `OPTIONS` and the route is `/api/products/options`

```php
<?php

$app->options(
    '/api/products/options',
    'infoProduct'
);
```

**patch**

Matches if the HTTP method is `PATCH` and the route is `/api/products/update/{id}`

```php
<?php

$app->patch(
    '/api/products/update/{id}',
    'updateProduct'
);
```

**post**

Matches if the HTTP method is `POST` and the route is `/api/products/add`

```php
<?php

$app->post(
    '/api/products',
    'addProduct'
);
```

**put**

Matches if the HTTP method is `PUT` and the route is `/api/products/update/{id}`

```php
<?php

$app->put(
    '/api/products/update/{id}',
    'updateProduct'
);
```

### Collections
Collections are a convenient way to group routes attached to a handler and a common prefix (if needed). For a hypothetical /invoices endpoint, you could have the following routes:

```text
/invoices/get/{id}
/invoices/add/{payload}
/invoices/update/{id}
/invoices/delete/{id}
```

All of those routes are handled by our `InvoicesController`. Set up your routes with a collection as follows:

```php
<?php

use Phalcon\Mvc\Micro\Collection as MicroCollection;

$invoices = new MicroCollection();
$invoices->setHandler(new InvoicesController());

$invoices->setPrefix('/invoices');

$invoices->get('/get/{id}', 'displayAction');
$invoices->get('/add/{payload}', 'addAction');
$invoices->get('/update/{id}', 'updateAction');
$invoices->get('/delete/{id}', 'deleteAction');

$app->mount($invoices);
```

!!! warning "NOTE"

    The name that we bind each route has a suffix of `Action`. This is not necessary, your method can be called anything you like.

**Methods**

The available methods for the [Phalcon\Mvc\Micro\Collection][mvc-micro-collection] object are:

```php
public function delete(
    string $routePattern, 
    callable $handler, 
    string $name = null
): CollectionInterface
```
Maps a route to a handler that only matches if the HTTP method is `DELETE`.

```php
public function get(
    string $routePattern, 
    callable $handler,  
    string $name = null
): CollectionInterface
```
Maps a route to a handler that only matches if the HTTP method is `GET`.

```php
public function getHandler(): mixed
```
Returns the main handler

```php
public function getHandlers(): array
```
Returns the registered handlers

```php
public function getPrefix(): string
```
Returns the collection prefix if any

```php
public function head(
    string $routePattern, 
    callable $handler, 
    string $name = null
): CollectionInterface
```
Maps a route to a handler that only matches if the HTTP method is `HEAD`.

```php
public function isLazy(): bool
```
Returns if the main handler must be lazy loaded

```php
public function map(
    string $routePattern, 
    callable $handler, 
    string | array $method, 
    string $name = null
): CollectionInterface
```
Maps a route to a handler.

```php
public function mapVia(
    string $routePattern, 
    callable $handler, 
    string | array $method, 
    string $name = null
): CollectionInterface
```
Maps a route to a handler via methods.

```php
$collection->mapVia(
    "/invoices",
    "indexAction",
    [
        "POST", 
        "GET"
    ],
    "invoices"
);
```

```php
public function options(
    string $routePattern, 
    callable $handler, 
    string $name = null
): CollectionInterface
```
Maps a route to a handler that only matches if the HTTP method is `OPTIONS`.

```php
public function patch(
    string $routePattern, 
    callable $handler, 
    string $name = null
): CollectionInterface
```
Maps a route to a handler that only matches if the HTTP method is `PATCH`.

```php
public function post(
    string $routePattern, 
    callable $handler, 
    string $name = null
): CollectionInterface
```
Maps a route to a handler that only matches if the HTTP method is `POST`.

```php
public function put(
    string $routePattern, 
    callable $handler, 
    string $name = null
): CollectionInterface
```
Maps a route to a handler that only matches if the HTTP method is `PUT`.

```php
public function setHandler(
    callable $handler, 
    bool $lazy = false
): CollectionInterface
```
Sets the main handler.

```php
public function setLazy(
    bool $lazy
): CollectionInterface
```
Sets if the main handler must be lazy-loaded

```php
public function setPrefix(
    string $prefix
): CollectionInterface
```
Sets a prefix for all routes added to the collection

### Parameters

Parameters in routes are defined by enclosing the parameter name in curly braces {}:

```php
<?php

$app->get(
    '/invoices/view/{id}',
    function ($id) {
        echo "<h1>#{$id}!</h1>";
    }
);
```

You can enforce rules for parameters using regular expressions. The regular expression is set after the name of the parameter, separating it with `:`.

```php
<?php

$app->get(
    '/invoices/view/{id:[0-9]+}',
    function ($id) {
        echo "<h1>#{$id}!</h1>";
    }
);

$app->get(
    '/invoices/search/year/{year:[0-9][4]}/title/{title:[a-zA-Z\-]+}',
    function ($year, $title) {
        echo "'<h1>{$title}</h1>", PHP_EOL,
             "'<h2>{$year}</h2>"
        ;
    }
);
```

!!! info "NOTE"

    For more information, refer to the [routing][routing] documentation

### Redirections

You can redirect one matched route to another using the [Phalcon\Http\Response][http-response] object, just like in a full application.

```php
<?php

$app->get('/invoices/show/{id}',
    function ($id) use ($app) {
        $app
            ->response
            ->redirect(
                "invoices/view/{$id}"
            )
            ->sendHeaders()
        ;
    }
);

$app->get('/invoices/view/{id}',
    function ($id) use ($app) {
        echo "<h1>#{$id}!</h1>";
    }
);
```

!!! info "NOTE"

    Make sure to pass the $app object in your anonymous function to have access to the response object.

When using controllers as handlers, you can perform the redirect just as easily:

```php
<?php

use Phalcon\Http\Response;
use Phalcon\Mvc\Controller;

/**
 * @property Response $response
 */
class InvoicesController extends Controller
{
    public function show($id)
    {
        return $this
            ->response
            ->redirect(
                "invoices/view/{$id}"
            )
        ;
    }

    public function get($id)
    {
        // ...
    }
}
```

Finally, you can perform redirections in your middleware (if you are using it). An example is below in the relevant section.

### URLs

Another feature of the routes is setting up named routes and generating URLs for those routes.

You will need to name your routes to take advantage of this feature. This can be achieved with the `setName()` method that is exposed from the HTTP methods in our application (`get`, `post`, etc.).

```php
<?php

$app
    ->get(
        '/invoices/view/{id}',
        function ($id) use ($app) {
            // ...
        }
    )
    ->setName('view-invoice');
```

If you are using the [Phalcon\Mvc\Micro\Collection][mvc-micro-collection] object, the name needs to be the third parameter of the methods setting the routes.

```php
<?php

$invoices = new MicroCollection();

$invoices
    ->setHandler(
        InvoicesController::class,
        true
    )
    ->setPrefix('/invoices')
    ->get(
        '/view/{id}', 
        'get', 
        'view-invoice'
    )
    ->post(
        '/add', 
        'post', 
        'add-invoice'
    )
;

$app->mount($invoices);
```

Lastly, you need the [Phalcon\Url][mvc-url] component to generate URLs for the named routes.

```php
<?php

$app->get(
    '/',
    function () use ($app) {
        $url = sprintf(
            '<a href="%s">#</a>',
            $app
                ->url
                ->get(
                    [
                        'for' => 'view-invoice',
                        'id'  => 1234,
                    ]
                )
        );

        echo $url;
    }
);
```

## Dependency Injector

When a micro application is created, a [Phalcon\Di\FactoryDefault][di-factorydefault] services container is created automatically.

```php
<?php

use Phalcon\Mvc\Micro;

$app = new Micro();

$app->get(
    '/',
    function () use ($app) {
        $app
            ->response
            ->setContent('3.1459')
            ->send()
        ;
    }
);
```

You can also create a DI container yourself and assign it to the micro application, therefore manipulating the services depending on the needs of your application.

```php
<?php

use Phalcon\Di\Di;
use Phalcon\Mvc\Micro;
use Phalcon\Config\Adapter\Ini;

$container = new Di();

$container->set(
    'config',
    function () {
        return new Ini(
            'config.ini'
        );
    }
);

$app = new Micro($container);

$app->get(
    '/',
    function () use ($app) {
        echo $app
            ->config
            ->app_name;
    }
);

$app->post(
    '/contact',
    function () use ($app) {
        $app
            ->flash
            ->success('++++++')
        ;
    }
);
```

You can also use the array syntax to register services in the dependency injection container from the application object:

```php
<?php

use Phalcon\Mvc\Micro;
use Phalcon\Db\Adapter\Pdo\Mysql;

$app = new Micro();

$app['db'] = function () {
    return new Mysql(
        [
            'host'     => 'localhost',
            'username' => 'root',
            'password' => 'secret',
            'dbname'   => 'test_db',
        ]
    );
};

$app->get(
    '/blog',
    function () use ($app) {
        $invoices = $app['db']->query(
            'SELECT * FROM co_invoices'
        );

        foreach ($invoices as $invoice) {
            echo $invoice->inv_title;
        }
    }
);
```

## Responses

A micro application can return many types of responses: direct output, use a template engine, calculated data, view-based data, JSON, etc.

Handlers may return raw responses using plain text, [Phalcon\Http\Response][http-response] object, or a custom-built component that implements the [Phalcon\Http\ResponseInterface][http-responseinterface].

### Direct
```php
<?php

$app->get(
    '/invoices/view/{id}',
    function ($id) {
        echo "<h1>#{$id}!</h1>";
    }
);
```

### Including Files
```php
<?php

$app->get(
    '/invoices/view/{id}',
    function ($id) {
        require 'views/results.php';
    }
);
```

### Direct - JSON
```php
<?php

$app->get(
    '/invoices/view/{id}',
    function ($id) {
        echo json_encode(
            [
                'code' => 200,
                'id'   => $id,
            ]
        );
    }
);
```

### New Response

You can use the `setContent` method of a new [Phalcon\Http\Response][http-response] object to return the response back.

```php
<?php

use Phalcon\Http\Response;

$app->get(
    '/invoices/list',
    function () {
        return (new Response())
            ->setContentType('text/plain')
            ->setContent(
                file_get_contents('data.txt')
            )
        ;
    }
);
```

### Application Response

You can also use the [Phalcon\Http\Response][http-response] from the application to return responses to the caller.

```php
<?php

$app->get(
    '/invoices/list',
    function () use ($app) {
        $app
            ->response
            ->setContentType('text/plain')
            ->sendHeaders()
        ;

        readfile('data.txt');
    }
);
```

### Return Response

A different approach to returning data back to the caller is to return the [Phalcon\Http\Response][http-response] object directly from the application. When responses are returned by handlers, they are automatically sent by the application.

```php
<?php

use Phalcon\Mvc\Micro;
use Phalcon\Http\Response;

$app = new Micro();

$app->get(
    '/invoices//list',
    function () {
        return (new Response())
            ->setStatusCode(
                401, 
                'Unauthorized'
            )
            ->setContent(
                '401 - Unauthorized'
            )
        ;
    }
);
```

### JSON

JSON can be sent back just as easily using the [Phalcon\Http\Response][http-response] object.

```php
<?php

$app->get(
    '/invoices/index',
    function () use ($app) {

        $data = [
            'code'    => 401,
            'status'  => 'error',
            'message' => 'Unauthorized access',
            'payload' => [],
        ];

        return $this
            ->response
            ->setJsonContent($data)
        ;
    }
);
```

## Events

A [Phalcon\Mvc\Micro][mvc-micro] application works closely with an [Events Manager][events] if it is present, to trigger events that can be used throughout your application. The type of those events is `micro`. These events trigger in your application and can be attached to relevant handlers that will perform actions needed by your application.

### Available events
The following events are supported:

| Event Name           | Triggered                                                         | Can stop |
|----------------------|-------------------------------------------------------------------|:--------:|
| `afterBinding`       | Triggered after models are bound but before executing the handler |   Yes    |
| `afterExecuteRoute`  | Handler just finished running                                     |    No    |
| `afterHandleRoute`   | Route just finished executing                                     |   Yes    |
| `beforeExecuteRoute` | Route matched, Handler valid, Handler has not been executed yet   |   Yes    |
| `beforeHandleRoute`  | Main method called; Routes have not been checked yet              |   Yes    |
| `beforeNotFound`     | Route has not been found                                          |   Yes    |

### Authentication example

You can easily check whether a user has been authenticated or not using the `beforeExecuteRoute` event. The following example demonstrates such a scenario:

```php
<?php

use Phalcon\Mvc\Micro;
use Phalcon\Events\Event;
use Phalcon\Events\Manager;

$manager = new Manager();

$manager->attach(
    'micro:beforeExecuteRoute',
    function (Event $event, $app) {
        if ($app->session->get('auth') === false) {
            $app->flashSession->error(
                "The user is not authenticated"
            );

            $app->response->redirect('/');
            $app->response->sendHeaders();

            return false;
        }
    }
);

$app = new Micro();

$app->setEventsManager($manager);
```

### Not found example

You can also create a redirect for a route that does not exist (404). To do so you can use the `beforeNotFound` event. The following example demonstrates such a scenario:

```php
<?php

use Phalcon\Mvc\Micro;
use Phalcon\Events\Event;
use Phalcon\Events\Manager;

$manager = new Manager();

$manager->attach(
    'micro:beforeNotFound',
    function (Event $event, $app) {
        $app->response->redirect('/404');
        $app->response->sendHeaders();

        return $app->response;
    }
);

$app = new Micro();

$app->setEventsManager($manager);
```

## Middleware

Middleware in the context of the Micro application refers to classes that can be attached to enhance the application's architecture. These classes introduce an additional layer where business logic can be encapsulated, running sequentially based on their registration order. This not only contributes to maintainability by modularizing specific functionality but also enhances performance. Middleware classes can interrupt the execution flow when a specific business rule is not satisfied, allowing the application to exit early without completing the full request cycle.

!!! info "NOTE"

    The middleware managed by the Micro application is not compatible with [PSR-15][psr-15]. Future versions of Phalcon are expected to align the entire HTTP layer with PSR-7 and PSR-15.

The presence of a [Phalcon\Events\Manager][events-manager] is crucial for middleware to operate; therefore, it must be registered in our Dependency Injection (DI) container.

### Attached events
Middleware can be attached to a Micro application in three different events:

| Event    | Description                                    |
|----------|------------------------------------------------|
| `before` | Before the handler has been executed           |
| `after`  | After the handler has been executed            |
| `finish` | After the response has been sent to the caller |

!!! warning "NOTE"

    Multiple middleware classes can be attached to each of the above events, and they will be executed sequentially when the relevant event fires.

`before` Event
This event is ideal for halting the execution of the application if certain criteria are not met. In the following example, we check if the user is authenticated and halt execution with the necessary redirect.


```php
<?php

$app->before(
    function () use ($app) {
        if (false === $app['session']->get('auth')) {
            $app
                ->flashSession
                ->error("The user is not authenticated")
            ;

            $app
                ->response
                ->redirect('/error')
            ;

            return false;
        }

        return true;
    }
);
```

The code above executes before every route and returning `false` cancels the route execution.

`after` Event

This event can be used to manipulate data or perform actions needed after the handler has finished executing.

```php
<?php

$app->map(
    '/invoices/list',
    function () {
        return [
            1234 => [
                'total'      => 100,
                'customerId' => 3,
                'title'      => 'Invoice for ACME Inc.',
            ]
        ];
    }
);

$app->after(
    function () use ($app) {
        echo json_encode(
            $app->getReturnedValue()
        );
    }
);
```
In the above example, the handler returns an array of data, and the after event calls `json_encode`, returning valid JSON.

!!! info "NOTE"

    Additional work may be needed to set the necessary headers for JSON. An alternative to the above code would be to use the Response object and `setJsonContent`.

`finish` Event

This event fires when the entire request cycle is completed.

```php
<?php

$app->finish(
    function () use ($app) {
        if (true === file_exists('/tmp/processing.cache')) {
            unlink('/tmp/processing.cache');
        }
    }
);
```
In the above example, the `finish` event is utilized for cache cleaning.

### Activation

Attaching middleware to your application is straightforward using the `before`, `after`, and `finish` method calls.

```php
<?php

$app->before(
    function () use ($app) {
        if (false === $app['session']->get('auth')) {
            $app['flashSession']
                ->error("The user is not authenticated")
            ;

            $app['response']
                ->redirect('/error')
            ;

            return false;
        }

        return true;
    }
);

$app->after(
    function () use ($app) {
        echo json_encode(
            $app->getReturnedValue()
        );
    }
);
```

Alternatively, classes can be used and attached to the Events Manager as listeners, providing more flexibility and reducing the bootstrap file size.

```php
<?php

use Phalcon\Events\Manager;
use Phalcon\Mvc\Micro;

use Website\Middleware\CacheMiddleware;
use Website\Middleware\NotFoundMiddleware;
use Website\Middleware\ResponseMiddleware;

/**
 * Create a new Events Manager.
 */
$manager     = new Manager();
$application = new Micro();

// before
$manager->attach(
    'micro',
    new CacheMiddleware()
);

$application->before(
    new CacheMiddleware()
);

$manager->attach(
    'micro',
    new NotFoundMiddleware()
);

$application->before(
    new NotFoundMiddleware()
);

// after
$manager->attach(
    'micro',
    new ResponseMiddleware()
);

$application->after(
    new ResponseMiddleware()
);

$application->setEventsManager($manager);
```

A [Phalcon\Events\Manager][events-manager] object is required, and middleware classes are attached to the `micro` hook in the Events Manager. More specificity can be achieved by attaching classes to specific events, such as `micro:beforeExecuteRoute`.

### Implementation

Middleware can be any PHP callable function, and you have the flexibility to organize your code according to your preferences. If you choose to use classes for your middleware, they need to implement the [Phalcon\Mvc\Micro\MiddlewareInterface][mvc-micro-middlewareinterface].

```php
<?php

use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\MiddlewareInterface;

/**
 * CacheMiddleware
 */
class CacheMiddleware implements MiddlewareInterface
{
    /**
     * Calls the middleware
     *
     * @param Micro $application
     *
     * @returns bool
     */
    public function call(Micro $application)
    {
        $cache  = $application['cache'];
        $router = $application['router'];

        $key = preg_replace(
            '/^[a-zA-Z0-9]/',
            '',
            $router->getRewriteUri()
        );

        // Check if the request is cached
        if ($cache->exists($key)) {
            echo $cache->get($key);

            return false;
        }

        return true;
    }
}
```

### Middleware Events
The [events](#events) triggered for our application also apply inside a class implementing the [Phalcon\Mvc\Micro\MiddlewareInterface][mvc-micro-middlewareinterface]. This provides flexibility and power for developers to interact with the request process.

#### API Example

Suppose we have implemented an API with the Micro application. Different Middleware classes are attached to better control the execution of the application. The middleware used include:

* Firewall
* NotFound
* Redirect
* CORS
* Request
* Response

##### Firewall

This middleware, attached to the `before` event, checks the caller's identity against a whitelist.

```php
<?php

use Phalcon\Events\Event;
use Phalcon\Http\Request;
use Phalcon\Http\Response;
use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\MiddlewareInterface;

/**
 * FirewallMiddleware
 *
 * @property Request  $request
 * @property Response $response
 */
class FirewallMiddleware implements MiddlewareInterface
{
    /**
     * @param Event $event
     * @param Micro $application
     *
     * @returns bool
     */
    public function beforeHandleRoute(
        Event $event, 
        Micro $application
    ) {
        $whitelist = [
            '10.4.6.1',
            '10.4.6.2',
            '10.4.6.3',
            '10.4.6.4',
        ];

        $ipAddress = $application
            ->request
            ->getClientAddress()
        ;

        if (true !== array_key_exists($ipAddress, $whitelist)) {
            $this
                ->response
                ->redirect('/401')
                ->send()
            ;

            return false;
        }

        return true;
    }

    /**
     * @param Micro $application
     *
     * @returns bool
     */
    public function call(Micro $application)
    {
        return true;
    }
}
```

##### Not Found (404)

This middleware is executed when the requesting IP is allowed to access our application. If the application fails to find a matching route, the `beforeNotFound` event is triggered. At this point, the processing is halted, and a relevant 404 response is sent back to the user. This middleware is attached to the `before` event of our Micro application.

```php
<?php

use Phalcon\Http\Response;
use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\MiddlewareInterface;

/**
 * NotFoundMiddleware
 *
 * @property Response $response
 */
class NotFoundMiddleware implements MiddlewareInterface
{
    /**
     * @param Event $event
     * @param Micro $application
     *
     * @returns bool
     */
    public function beforeNotFound(Event $event, Micro $application)
    {
        $application
            ->response
            ->redirect('/404')
            ->send()
        ;

        return false;
    }

    /**
     * @param Micro $application
     *
     * @returns bool
     */
    public function call(Micro $application)
    {
        return true;
    }
}
```

##### Redirect

This middleware is attached to the `before` event of our Micro application. It prevents the request from proceeding if the requested endpoint requires redirection.

```php
<?php

use Phalcon\Http\Request;
use Phalcon\Http\Response;
use Phalcon\Events\Event;
use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\MiddlewareInterface;

/**
 * RedirectMiddleware
 *
 * @property Request  $request
 * @property Response $response
 */
class RedirectMiddleware implements MiddlewareInterface
{
    /**
     * Before anything happens
     *
     * @param Event $event
     * @param Micro $application
     *
     * @returns bool
     */
    public function beforeHandleRoute(
        Event $event, 
        Micro $application
    ) {
        if ('github' === $application->request->getURI()) {
            $application
                ->response
                ->redirect('https://github.com')
                ->send()
            ;

            return false;
        }

        return true;
    }

    /**
     * @param Micro $application
     *
     * @returns bool
     */
    public function call(Micro $application)
    {
        return true;
    }
}
```

##### CORS

This middleware, attached to the `before` event of our Micro application, ensures that it fires before anything happens with our application.

```php
<?php

use Phalcon\Events\Event;
use Phalcon\Http\Request;
use Phalcon\Http\Response;
use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\MiddlewareInterface;

/**
 * CORSMiddleware
 *
 * @property Request  $request
 * @property Response $response
 */
class CORSMiddleware implements MiddlewareInterface
{
    /**
     * @param Event $event
     * @param Micro $application
     *
     * @returns bool
     */
    public function beforeHandleRoute(
        Event $event, 
        Micro $application
    ) {
        if ($application->request->getHeader('ORIGIN')) {
            $origin = $application
                ->request
                ->getHeader('ORIGIN')
            ;
        } else {
            $origin = '*';
        }

        $application
            ->response
            ->setHeader(
                'Access-Control-Allow-Origin', 
                $origin
            )
            ->setHeader(
                'Access-Control-Allow-Methods',
                'GET,PUT,POST,DELETE,OPTIONS'
            )
            ->setHeader(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Range, ' .
                'Content-Disposition, Content-Type, Authorization'
            )
            ->setHeader(
                'Access-Control-Allow-Credentials', 
                'true'
            )
        ;
    }

    /**
     * @param Micro $application
     *
     * @returns bool
     */
    public function call(Micro $application)
    {
        return true;
    }
}
```

##### Request

This middleware receives a JSON payload and validates it. If the JSON payload is not valid, it halts the execution.

```php
<?php

use Phalcon\Events\Event;
use Phalcon\Http\Request;
use Phalcon\Http\Response;
use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\MiddlewareInterface;

/**
 * RequestMiddleware
 *
 * @property Request  $request
 * @property Response $response
 */
class RequestMiddleware implements MiddlewareInterface
{
    /**
     * @param Event $event
     * @param Micro $application
     *
     * @returns bool
     */
    public function beforeExecuteRoute(
        Event $event, 
        Micro $application
    ) {
        json_decode(
            $application
                ->request
                ->getRawBody()
        );

        if (JSON_ERROR_NONE !== json_last_error()) {
            $application
                ->response
                ->redirect('/malformed')
                ->send()
            ;

            return false;
        }

        return true;

    }

    /**
     * @param Micro $application
     *
     * @returns bool
     */
    public function call(Micro $application)
    {
        return true;
    }
}
```

##### Response

This middleware is responsible for manipulating our response and sending it back to the caller as a JSON string. Therefore, we need to attach it to the `after` event of our Micro application.

!!! warning "NOTE"

    We are using the `call` method for this middleware since we have nearly executed the whole request cycle.

```php
<?php

use Phalcon\Http\Response;
use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\MiddlewareInterface;

/**
 * ResponseMiddleware
 *
 * @property Response $response
 */
class ResponseMiddleware implements MiddlewareInterface
{
     /**
      * @param Micro $application
      *
      * @returns bool
      */
    public function call(Micro $application)
    {
        $payload = [
            'code'    => 200,
            'status'  => 'success',
            'message' => '',
            'payload' => $application->getReturnedValue(),
        ];

        $application
            ->response
            ->setJsonContent($payload)
            ->send()
        ;

        return true;
    }
}
```

### Models

Models can be utilized in Micro applications by instructing the application on how to find the relevant classes through an autoloader.

!!! warning "NOTE"

    The relevant `db` service must be registered in your DI container.

```php
<?php

use MyApp\Models\Invoices;
use Phalcon\Autoload\Loader;
use Phalcon\Mvc\Micro;

$loader = new Loader();
$loader
    ->setDirectories(
        [
            __DIR__ . '/models/',
        ]
    )
    ->register();

$app = new Micro();

$app->get(
    '/invoices/find',
    function () {
        $invoices = Invoices::find();

        foreach ($invoices as $invoice) {
            echo $invoice->inv_id, '<br>';
        }
    }
);

$app->handle(
    $_SERVER["REQUEST_URI"]
);
```

### Model injection

By using the [Phalcon\Mvc\Model\Binder][mvc-model-binder] class you can inject model instances into your routes:

```php
<?php

use MyApp\Models\Invoices;
use Phalcon\Autoload\Loader;
use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Model\Binder;

$loader = new Loader();

$loader->setDirectories(
    [
        __DIR__ . '/models/',
    ]
)->register();

$app = new Micro();

$app->setModelBinder(
    new Binder()
);

$app->get(
    "/invoices/view/{id:[0-9]+}",
    function (Invoices $id) {
        // ...
    }
);

$app->handle(
    $_SERVER["REQUEST_URI"]
);
```

Since the Binder object uses PHP's Reflection API internally, which requires additional CPU cycles, there is an option to set a cache to speed up the process. This can be done by using the second argument of `setModelBinder()`, which can also accept a service name, or just by passing a cache instance to the `Binder` constructor.

Currently, the binder will only use the model's primary key to perform a `findFirst()`. An example route for the above would be `/invoices/view/1`.

### Views

[Phalcon\Mvc\Micro][mvc-micro] does not inherently have a view service. However, you can use the [Phalcon\Mvc\View\Simple][mvc-view-simple] component to render views.

```php
<?php

use Phalcon\Mvc\Micro;
use Phalcon\Mvc\View\Simple;

$app = new Micro();

$app['view'] = function () {
    $view = new Simple();
    $view->setViewsDir('app/views/');

    return $view;
};

$app->get(
    '/invoices/show',
    function () use ($app) {
        // app/views/invoices/view.phtml
        echo $app['view']
            ->render(
                'invoices/view',
                [
                    'id'         => 4,
                    'customerId' => 3,
                    'title'      => 'ACME Inc.',
                    'total'      => 100,
                ]
            )
        ;
    }
);
```

!!! warning "NOTE"

    The above example uses the [Phalcon\Mvc\View\Simple][mvc-view-simple] component, which uses relative paths instead of controllers and actions. You can use the [Phalcon\Mvc\View][mvc-view] component instead, but to do so, you will need to change the parameters passed to `render()`.

```php
<?php

use Phalcon\Mvc\Micro;
use Phalcon\Mvc\View;

$app['view'] = function () {
    $view = new View();

    $view->setViewsDir('app/views/');

    return $view;
};

$app->get(
    '/invoices/view',
    function () use ($app) {
        // app/views/invoices/view.phtml
        echo $app['view']
            ->render(
                'invoices',
                'view',
                [
                    'id'         => 4,
                    'customerId' => 3,
                    'title'      => 'ACME Inc.',
                    'total'      => 100,
                ]
            )
        ;
    }
);
```

## Exceptions

Any exceptions thrown in the [Phalcon\Mvc\Micro][mvc-micro] component will be of type [Phalcon\Mvc\Micro\Exception][mvc-micro-exception]. You can use this exception to selectively catch exceptions thrown only from this component.

```php
<?php

use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\Exception;

try {
    $app = new Micro();
    $app->before(false);
    
    $app->handle(
        $_SERVER["REQUEST_URI"]
    );
} catch (Exception $ex) {
    echo $ex->getMessage();
}
```

### Error Handling

The [Phalcon\Mvc\Micro][mvc-micro] application also has an `error` method, which can be used to trap any errors that originate from exceptions. The following code snippet shows the basic usage of this feature:

```php
<?php

use Phalcon\Mvc\Micro;

$app = new Micro();

$app->get(
    '/',
    function () {
        throw new \Exception(
            'Error', 
            401
        );
    }
);

$app->error(
    function ($exception) {
        echo json_encode(
            [
                'code'    => $exception->getCode(),
                'status'  => 'error',
                'message' => $exception->getMessage(),
            ]
        );
    }
);
```

[di-factorydefault]: api/phalcon_di.md#difactorydefault
[events-manager]: api/phalcon_events.md#eventsmanager
[http-response]: api/phalcon_http.md#httpresponse
[http-responseinterface]: api/phalcon_http.md#httpresponseinterface
[mvc-application]: api/phalcon_mvc.md#mvcapplication
[mvc-application-exception]: api/phalcon_mvc.md#mvcapplicationexception
[mvc-controller]: api/phalcon_mvc.md#mvccontroller
[mvc-model-binder]: api/phalcon_mvc.md#mvcmodelbinder
[mvc-micro]: api/phalcon_mvc.md#mvcmicro
[mvc-micro-collection]: api/phalcon_mvc.md#mvcmicrocollection
[mvc-micro-collectioninterface]: api/phalcon_mvc.md#mvcmicrocollectioninterface
[mvc-micro-exception]: api/phalcon_mvc.md#mvcmicroexception
[mvc-micro-lazyloader]: api/phalcon_mvc.md#mvcmicrolazyloader
[mvc-micro-middlewareinterface]: api/phalcon_mvc.md#mvcmicromiddlewareinterface
[mvc-router]: api/phalcon_mvc.md#mvcrouter
[mvc-view]: api/phalcon_mvc.md#mvcview
[mvc-view-simple]: api/phalcon_mvc.md#mvcviewsimple
[psr-15]: https://www.php-fig.org/psr/psr-15/
[routing]: routing.md
[webserver-setup]: webserver-setup.md
[events]: events.md
[mvc-url]: mvc-url.md
