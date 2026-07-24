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

By default attributes arrive as raw strings, leaving casting and validation to the action or domain. An action may instead declare its parameters up front, so the router validates, casts and names them before they reach the request — see the next section.

## Typed parameters

An action may declare a static `params()` method to have its trailing segments validated, cast and named before they reach the request. The method returns an ordered, name-keyed map; every entry is optional and may set a `match` regex, a scalar `type` (`int`, `float` or `string`) and a `convert` closure:

```php
final class Get implements Action
{
    public static function params(): array
    {
        return [
            'id' => ['match' => '\d+', 'type' => 'int'],
        ];
    }

    public function __invoke(AttributeRequest $request): ResponseInterface
    {
        // already validated as \d+ and cast to int, and read by name
        $id = $request->getAttributes()->get('id');
        // ...
    }
}
```

The declaration keys map to the positional segments in order: the first parameter names segment `0`, the second names segment `1`, and so on. For each segment the router checks it against `match` (a miss is treated as a route miss, a **404**), casts it to `type` (an unknown or omitted type leaves it a string), passes the cast value through `convert` when one is given, and stores the result under the declared name.

Because `convert` receives the already-cast value, it doubles as a hydration hook — trimming a slug, resolving an enum, or building a value object:

```php
public static function params(): array
{
    return [
        'on' => [
            'match'   => '\d{4}-\d{2}-\d{2}',
            'convert' => fn (string $value) => new DateTimeImmutable($value),
        ],
    ];
}
```

A declared parameter with no matching segment is skipped — no attribute is set and no default is applied — and any segments beyond the declared parameters pass through unchanged under their positional keys. An action without a `params()` method is untouched: its segments arrive as raw, positional strings.

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
