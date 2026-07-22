# ADR - Actions

- - -

## Overview

An action is a single, invokable class responsible for handling one route. Where an MVC controller groups many actions together as methods, an ADR action does exactly one thing: it reads input from the request, invokes the domain to perform the work, and hands the resulting payload to a responder to build the response.

Actions implement `Phalcon\Contracts\ADR\Action`, which requires a single `__invoke()` method receiving the request and returning a response:

```php
<?php

namespace MyApp\Action\Invoices;

use MyApp\Domain\ViewInvoice;
use Phalcon\ADR\Input\Input;
use Phalcon\Contracts\ADR\Action;
use Phalcon\Contracts\ADR\Responder\Responder;
use Phalcon\Contracts\Http\AttributeRequest;
use Phalcon\Http\Response;
use Phalcon\Http\ResponseInterface;

final class Get implements Action
{
    public function __construct(
        private ViewInvoice $domain,
        private Responder $responder
    ) {
    }

    public function __invoke(AttributeRequest $request): ResponseInterface
    {
        $input   = Input::fromRequest($request);
        $payload = ($this->domain)($input);

        return ($this->responder)($request, new Response(), $payload);
    }
}
```

The action holds no business logic (that lives in the [domain][domain]) and no presentation logic (that lives in the [responder][responders]). It is only the wiring between the two. Its collaborators, the domain and the responder, are supplied by the container through the constructor.

## One action per route

The [router][router] maps an HTTP method and a URL path directly to an action class by convention: the path segments become the namespace and the HTTP method becomes the class name.

```
GET    /invoices        ->  MyApp\Action\Invoices\Get
POST   /invoices        ->  MyApp\Action\Invoices\Post
GET    /invoices/42     ->  MyApp\Action\Invoices\Get   (with "42" as a route attribute)
```

Because each route resolves to its own class, there are no controller methods to grow, no shared state between actions, and nothing to route around inside the class.

## Reading input

`Phalcon\ADR\Input\Input` collects the request data into a single object the domain can consume without any knowledge of HTTP:

```php
$input = Input::fromRequest($request);

$id = $input->get('id');
```

`Input::fromRequest()` merges the query string, the POST body, the JSON body and the route attributes into one bag. See [Input][input] for details.

## Resolution and middleware

When the router matches a route, the [dispatcher][dispatcher] resolves the action from the container by class name and runs it through the middleware pipeline. Because actions are resolved from the container, their constructor dependencies (domains, responders, and anything else) are autowired for you.

[domain]: adr-domain.md
[responders]: adr-responders.md
[router]: adr-router.md
[dispatcher]: adr-dispatcher.md
[input]: adr-input.md
