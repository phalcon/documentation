# ADR - Router

- - -

## Overview

The ADR router maps an incoming request to an action class by convention, with no route table to maintain. The HTTP method and the static path segments identify the class; any trailing segments become request attributes.

```
GET    /invoices         ->  MyApp\Action\Invoices\Get
POST   /invoices         ->  MyApp\Action\Invoices\Post
GET    /invoices/42      ->  MyApp\Action\Invoices\Get       (attribute 0 = "42")
GET    /invoices/42/pdf  ->  MyApp\Action\Invoices\Pdf\Get   (attribute 0 = "42")
```

## Configuration

`Phalcon\ADR\Router\Router` has two settings: the base namespace under which your actions live, and an optional middleware map. Both are fluent:

```php
$router = $container->get('router');

$router
    ->setBaseNamespace('MyApp\\Action')
    ->setMiddlewareMap([
        '\\Admin\\' => [RequireAdmin::class],
    ]);
```

## Matching

`match()` receives the request and returns a `Phalcon\Contracts\ADR\Router\RouterMatch`, or reports that nothing matched:

* it returns `null` when no class matches the path (a **404**);
* it throws `Phalcon\ADR\Router\Exceptions\MethodNotAllowed` when the path exists under a different HTTP method (a **405**).

The match carries the resolved action class, the positional attributes, and the middleware that applies. Trailing path segments arrive as positional attributes (`0`, `1`, and so on), which the action reads from the request:

```php
$id = $request->getAttributes()->get(0);
```

Because attributes arrive as raw strings, casting and validation remain the responsibility of the action or domain, exactly as with any other input.

## Middleware by namespace

The middleware map attaches middleware to a namespace prefix, giving you "group" semantics without a route table: every action whose class falls under the prefix inherits that middleware.

```php
$router->setMiddlewareMap([
    '\\Admin\\'  => [RequireAdmin::class],
    '\\Portal\\' => [RequireCustomer::class],
]);
```

An action at `MyApp\Action\Admin\Products\Delete` picks up `RequireAdmin` because its class lives under the `\Admin\` prefix. Prefixes stack, so an action nested under several of them inherits all of their middleware. Global middleware, which applies to every request regardless of namespace, is configured on the [dispatcher][dispatcher] instead. See [Middleware][middleware].

[dispatcher]: adr-dispatcher.md
[middleware]: adr-middleware.md
