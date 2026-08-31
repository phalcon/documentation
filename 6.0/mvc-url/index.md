---
title: "Url Component"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Url Component

## Overview

[Phalcon\Mvc\Url][url] is the component responsible for generating URLs in a Phalcon application. It can also be used to construct URLs based on routes.

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

$url->setBaseUri("/portal/");
echo $url->get("invoices/edit/1"); // /portal/invoices/edit/1 

echo $url->get(
[
    "for"   => "invoices-edit", // route name
    "title" => "Edit Invoice",  // title
    "id"    => 1,               // route parameter
]                             
);
```

## Generation

The [Phalcon\Mvc\Url][url] component can generate URLs that are static as well as dynamic ones. Dynamic URLs can be generated also based on parameters or routes of your application, as defined using the [Router][routing] component.

## Static URLs

Static URLs are the ones that refer to static resources. Those can be images, CSS/JS assets, videos, etc. The [Phalcon\Mvc\Url][url] component offers a way to generate those URLs.

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

echo $url->getStatic("img/logo.png");
```

Along with `getStatic()`, the component also offers the getter `getStaticBaseUri()` and setter `setStaticBaseUri()` methods, which allow you to set a prefix for all of your static URLs. This functionality can be especially helpful when you need to set up a CDN or a different location on where your assets are stored.

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

$url->setStaticBaseUri('https://assets.phalcon.io/');

echo $url->getStaticBaseUri(); // https://assets.phalcon.io/
```

and when in need to use a CDN for your production environment:

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

if ($environment === 'production') {
$url->setStaticBaseUri('https://assets.phalcon.io/');
}

echo $url->getStatic('img/logo.png'); // https://assets.phalcon.io/img/logo.png
```

The above code will prefix all the static assets with `https://assets.phalcon.io`, ensuring that assets in your production environment use the CDN URL, while local development loads them directly from your machine.

:::info[NOTE]
The trailing slash in the `setStaticBaseUrl()` parameter is optional. If it is not specified, it will automatically be appended to the passed parameter
:::

Finally, depending on the routes you have specified, you can retrieve a static resource that is defined in a named route by passing an array to `getStatic()` and using `for` keyword as a key and the name of the route as a value.

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

echo $url->getStatic(
[
    'for' => 'logo-cdn',
]
);
```

## Dynamic URLs

Dynamic URLs are URLs that are generated dynamically i.e. based on the routes or URLs of your application. The [Phalcon\Mvc\Url][url] component offers a way to generate those URLs.

Depending on which directory of your document root your application is installed, it may have a base URI or not. For example, if your document root is `/var/www/htdocs` and your application is installed in `/var/www/htdocs/app` then your baseUri will be `/app/`. If you are using a VirtualHost or your application is installed on the document root, then your base URI is `/`.

If you are unsure and want to find out what your base URI is, you can execute the following code in your application's folder:

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

echo $url->getBaseUri();
```

By default, Phalcon will try to detect your base URI. It is recommended that you specify the base URI yourself, because it increases performance slightly.

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

echo $url->get("/portal/invoices/edit/1");
```

Along with `get()`, the component also offers the getter `getBaseUri()` and setter `setBaseUri()` methods, which allow you to set a prefix for all of your URLs. This functionality can be especially helpful when you need to set up a `prefix` for your URLs i.e. if you are working with modules that have a specific prefix for all routes.

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

$url->setBaseUri('/portal/');

echo $url->getBaseUri(); // /portal/

echo $url->get('invoices/edit/1'); // /portal/invoices/edit/1
```

The above code will prefix all the URLs with `/portal/`, allowing you to _group_ URLs easier. For instance, if you have the `InvoicesController` and you want the URLs to be prefixed with `/portal/`, you can use `setBaseUri()` in the `initialize()` method:

```php
<?php

use Phalcon\Mvc\Url;
use Phalcon\Mvc\Controller;

/**
 * @property Url $url
 */
class InvoicesController extends Controller
{
public function initialize()
{
    $this->url->setBaseUri('/portal/');
}
}
```

And now we can generate any URL using `get()` in subsequent actions, that will be prefixed with `/portal/`

:::info[NOTE]
The trailing slash in the `setBaseUrl()` parameter is optional. If it is not specified, it will automatically be appended to the passed parameter
:::

### Routing

If you are using the [Router][routing] with its default behavior, your application is able to match routes based on the following pattern:

:::info[Pattern]
`/:controller/:action/:params`
:::

Therefore, you can create routes that satisfy that pattern (or any other pattern defined in the router) by passing a string to the method `get()`:

```php
<?php echo $url->get('products/save'); ?>
```

Note that is not necessary to prepend the base URI. If you have named routes you can define them dynamically. For instance for the following route:

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router();

$router
->add(
    '/portal/invoices/edit/{id}',
    [
        'module'     => 'portal',
        'controller' => 'invoices',
        'action'     => 'edit',
    ]
)
->setName('invoices-edit');
```

You can now generate a URL which is defined in the `invoice-edit` named route, by passing an array to `get()` and using `for` keyword as a key and the name of the route as a value.

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

echo $url->get(
[
    'for' => 'invoices-edit',
    'id'  => 1,
]
);
```

The above will produce `/portal/invoices/edit/1`.

If you pass additional parameters as a second argument in the array, these key/value pairs will be automatically added to the generated URL's query string:

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

echo $url->get(
[
    'for' => 'invoices-edit',
    'id'  => 1,
], [
    'is_paymented' => 'true',
    'some_key'     => 'some_value'
]
);

// /portal/invoices/edit/1?is_paymented=true&some_key=some_value
```

#### Replacing query string arguments

By default, when the supplied URI already contains a query string, any extra arguments passed via the `$args` parameter are appended with `&`. `get()` accepts an opt-in `bool $replaceArgs = false` fifth parameter. When set to `true` and the URI already contains a query string, the existing query is parsed and merged with the supplied arguments so that user-supplied keys override colliding ones.

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

// Default behavior: append with `&` (legacy)
echo $url->get(
'http://example.com?page=1',
['page' => 5]
);
// http://example.com?page=1&page=5

// With $replaceArgs = true: collisions are overridden
echo $url->get(
'http://example.com?page=1',
['page' => 5],
null,
null,
true
);
// http://example.com?page=5
```

The default (flag omitted) preserves the legacy append-with-`&` behavior so existing callers keep working unchanged.

### Hostname-aware URLs

Routes can carry a hostname restriction via `setHostname()`. When `get()` resolves a named route that has a hostname set, it automatically prepends the hostname to the path using a **protocol-relative URL** (`//hostname/path`). A protocol-relative URL works transparently under both HTTP and HTTPS without hardcoding a scheme, making it safe for mixed-environment deployments.

```php
<?php

use Phalcon\Mvc\Router;
use Phalcon\Mvc\Url;

$router = new Router();

$router
->add(
    '/login',
    [
        'module'     => 'account',
        'controller' => 'auth',
        'action'     => 'login',
    ]
)
->setHostname('account.company.com')
->setName('account-login');

$url = new Url($router);
$url->setBaseUri('/');

echo $url->get(['for' => 'account-login']);
// //account.company.com/login
```

The `baseUri` is **not** prepended when a hostname is present - the generated URL is already fully qualified.

Routes without a hostname continue to behave as before:

```php
<?php

use Phalcon\Mvc\Router;
use Phalcon\Mvc\Url;

$router = new Router();

$router
->add(
    '/about',
    [
        'controller' => 'pages',
        'action'     => 'about',
    ]
)
->setName('about');

$url = new Url($router);
$url->setBaseUri('/');

echo $url->get(['for' => 'about']);
// /about
```

You can combine a hostname route with query-string arguments exactly as with any other named route:

```php
<?php

use Phalcon\Mvc\Router;
use Phalcon\Mvc\Url;

$router = new Router();

$router
->add(
    '/dashboard',
    [
        'module'     => 'account',
        'controller' => 'dashboard',
        'action'     => 'index',
    ]
)
->setHostname('account.company.com')
->setName('account-dashboard');

$url = new Url($router);
$url->setBaseUri('/');

echo $url->get(
['for' => 'account-dashboard'],
['tab' => 'billing', 'page' => 2]
);
// //account.company.com/dashboard?tab=billing&page=2
```

### mod_rewrite

For developers that are utilizing `mod_rewrite` in their Apache installations, [Phalcon\Mvc\Url][url] offers the necessary functionality to replace `mod_rewrite`. This is especially useful if the target system does not have the module installed, or you cannot install it yourself.

The following example shows you how to replace `mod_rewrite` with [Phalcon\Mvc\Url][url]:

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

$url->setBaseUri('/app/public/index.php?_url=/'); // $_GET['_url']

echo $url->get('products/save'); // /app/public/index.php?_url=/portal/invoices/save
```

You can also use `$_SERVER['REQUEST_URI']`. This requires a bit more work, since we need to utilize the [Router][routing] component to populate the `$_SERVER['REQUEST_URI']`. Our route setup needs to change to:

```php
<?php

use Phalcon\Mvc\Router;

$router = new Router();

// ... Define routes

$uri = str_replace($_SERVER['SCRIPT_NAME'], '', $_SERVER['REQUEST_URI']);

$router->handle($uri);
```

and now the application can process the URI as expected:

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

$url->setBaseUri('/app/public/index.php'); // $_SERVER['REQUEST_URI']

echo $url->get('products/save'); // /app/public/index.php/portal/invoices/save
```

:::info[NOTE]
If you can, avoid replacing `mod_rewrite` with the code above. Having the necessary route-matching mechanism handled by the web server is much faster than handling things in your own application.
:::

### View/Volt

The function `url` is available in Volt to generate URLs using this component:

```twig

<a href='{{ url('invoices/edit/1') }}'>Edit</a>

```

Generate static routes:

```twig

<link rel='stylesheet' href='{{ static_url('css/style.css') }}' type='text/css' />

```

## Path

Although a `path` is not really a URL, the [Phalcon\Mvc\Url][url] offers methods that allow you to create paths for your application, in the same way as URLs.

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

echo $url->path("/data/app/storage/");
```

Along with `path()`, the component also offers the getter `getBasePath()` and setter `setBasePath()` methods, which allow you to set a prefix for all of your paths.

```php
<?php

use Phalcon\Mvc\Url;

$url = new Url();

$url->setBasePath('/data/app/');

echo $url->getBasePath(); // /data/app/

echo $url->path('storage/config.php'); // /data/app/storage/config.php
```

The above code will prefix all the paths with `/data/app/`.

:::info[NOTE]
The trailing slash in the `setBasePath()` parameter is optional. If it is not specified, it will automatically be appended to the passed parameter
:::

## Custom

The [Phalcon\Mvc\Url\UrlInterface][url-interface] is available if you wish to implement your own `Url` component. Implementing this interface will ensure that your custom component will work with the Phalcon.

## Dependency Injection

If you use the [Phalcon\Di\FactoryDefault][factorydefault] container, the [Phalcon\Mvc\Url][url] is already registered for you. However, you might want to override the default registration in order to set your own `setBaseUri()`. Alternatively, if you are not using the [Phalcon\Di\FactoryDefault][factorydefault] and instead are using the [Phalcon\Di][di] the registration is the same. By doing so, you will be able to access your configuration object from controllers, models, views, and any component that implements `Injectable`.

An example of the registration of the service as well as accessing it is below:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\Url;

// Create a container
$container = new FactoryDefault();

$container->set(
'url',
function () {
    $url = new Url();

    $url->setBaseUri('/portal/');

    return $url;
},
true
);
```

The component is now available in your controllers using the `url` key

```php
<?php

use Phalcon\Mvc\Controller;
use Phalcon\Mvc\Url;

/**
 * @property Url $url
 */
class MyController extends Controller
{
private function getUrl(): string
{
    return $this->url->get('/portal/invoices/link');
}
}
```

Also in your views (Volt syntax) the `url` helper method offers the same functionality:

```twig
{{ url('/portal/invoices/link') }}
```

You can of course access the object the same way as any registered service in the Di container:

```twig
{{ url.get('/portal/invoices/link') }}
```

## Exceptions

Any exceptions thrown in the [Phalcon\Mvc\Url][url] component will be of type [Phalcon\Mvc\Url\Exception][url-exception]. You can use this exception to selectively catch exceptions thrown only from this component.

```php
<?php

use Phalcon\Mvc\Url\Exception;
use Phalcon\Mvc\Controller;

class IndexController extends Controller
{
public function index()
{
    try {
        $this->url->get('/portal/invoices/list');
    } catch (Exception $ex) {
        echo $ex->getMessage();
    }
}
}
```

### Granular Exceptions

The component raises granular subclasses of `Phalcon\Mvc\Url\Exception` so callers can catch a specific failure mode. Existing `catch (Phalcon\Mvc\Url\Exception $e)` blocks continue to work unchanged.

| Class                                                 | Parent                      | Thrown when                                                                        |
|-------------------------------------------------------|-----------------------------|------------------------------------------------------------------------------------|
| `Phalcon\Mvc\Url\Exceptions\MissingRouteName`         | `Phalcon\Mvc\Url\Exception` | `get()` is given a route lookup that does not specify the route name.              |
| `Phalcon\Mvc\Url\Exceptions\RouteNotFound`            | `Phalcon\Mvc\Url\Exception` | A named route lookup matches no registered route.                                  |
| `Phalcon\Mvc\Url\Exceptions\RouterServiceUnavailable` | `Phalcon\Mvc\Url\Exception` | The component needs the `router` service but the DI container has none registered. |

[di]: /6.0/di/
[factorydefault]: /6.0/api/phalcon_di/#difactorydefault
[routing]: /6.0/routing/
[url]: /6.0/api/phalcon_mvc/#mvcurl
[url-exception]: /6.0/api/phalcon_mvc/#mvcurlexception
[url-interface]: /6.0/api/phalcon_mvc/#mvcurlurlinterface

Source: https://docs.phalcon.io/6.0/mvc-url/index.mdx
