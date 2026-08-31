---
title: "ADR - Responders"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ADR - Responders

## Overview

The responder is the only element in ADR that speaks HTTP. It takes the domain's [payload][payload] and builds the response: status code, headers, and body. Keeping all of this in one place is what allows the [action][actions] and the [domain][domain] to remain free of presentation concerns.

Every responder implements `Phalcon\Contracts\ADR\Responder\Responder`, a single invokable method that receives the request, a response to build upon, and the payload, and returns the finished response:

```php
public function __invoke(
Phalcon\Http\RequestInterface $request,
Phalcon\Http\ResponseInterface $response,
Phalcon\Contracts\ADR\Payload\Payload $payload
): Phalcon\Http\ResponseInterface;
```

## Built-in responders

Three ready-to-use responders cover the common content types:

* `Phalcon\ADR\Responder\JsonResponder` - serializes the payload result as JSON.
* `Phalcon\ADR\Responder\TextResponder` - renders the payload result as plain text.
* `Phalcon\ADR\Responder\ViewResponder` - renders a template and returns it as HTML. It needs a renderer, so it is covered separately in [HTML responses](#html-responses).

`JsonResponder` and `TextResponder` take no constructor arguments and can be injected into an action directly, or bound as the default `Responder` in the [container][provider]:

```php
use Phalcon\ADR\Responder\JsonResponder;

$response = (new JsonResponder())($request, new Response(), $payload);
```

## The responder chain

`JsonResponder` and `TextResponder` are thin subclasses of `Phalcon\ADR\Responder\AbstractFormattedResponder`, which is itself a `ChainResponder`. Building a response is broken into a chain of small, single-purpose responders that each contribute one part of the response:

1. `StatusResponder` - sets the HTTP status code from the payload's status.
2. `RedirectResponder` - turns a redirect into a `Location` header and status.
3. `FormatResponder` - negotiates a representation and writes the body.

A subclass supplies the formatter(s); the chain does the rest. You can compose your own chain with `ChainResponder` when you need a different combination.

## Status mapping

`StatusResponder` translates the domain's status vocabulary into an HTTP status code using `Phalcon\ADR\Responder\StatusMapper`:

```php
$mapper = new StatusMapper();
$code   = $mapper->toHttpCode(Status::NOT_FOUND);   // 404
```

The mapper ships with a default for every `Status::*` constant. Pass overrides to the constructor to change or extend the mapping:

```php
$mapper = new StatusMapper([
Status::ACCEPTED => 202,
]);
```

Any status the mapper does not recognize falls back to `500`, never a silent `200`.

## Content negotiation

`FormatResponder` chooses a representation based on the request's `Accept` header. Each representation is a `Phalcon\Contracts\ADR\Responder\Formatter\Formatter`:

```php
interface Formatter
{
public function accepts(string $acceptHeader): bool;
public function contentType(): string;
public function format(Phalcon\Contracts\ADR\Payload\Payload $payload): string;
}
```

`JsonFormatter` and `TextFormatter` are provided. If no formatter accepts the header, `FormatResponder` falls back to the configured default rather than leaving the response empty.

## Redirects

A domain never speaks HTTP, so a redirect is expressed as a small value object, `Phalcon\ADR\Responder\Redirect`, carried on the payload result:

```php
use Phalcon\ADR\Responder\Redirect;

return Payload::found(new Redirect('/invoices/42'));          // 302 by default
return Payload::found(new Redirect('/invoices/42', 301));     // permanent
```

`RedirectResponder` reacts to a `Redirect` result by setting the status code and the `Location` header; for any other result it does nothing.

## HTML responses

`Phalcon\ADR\Responder\ViewResponder` renders a template and returns it as an HTML response. It is the HTML counterpart of `JsonResponder`: the status mapping is identical, only the body comes from a template instead of a serializer.

It takes a renderer, a status mapper, and an optional template:

```php
use Phalcon\ADR\Responder\StatusMapper;
use Phalcon\ADR\Responder\ViewResponder;
use Phalcon\Mvc\View\Simple;

$simple = new Simple();
$simple->setViewsDir(__DIR__ . '/views/');

$responder = new ViewResponder($simple, new StatusMapper());
```

The action chooses the view with `withTemplate()`. It returns a copy of the responder, so the shared instance injected by the container is never mutated:

```php
<?php

namespace MyApp\Action\Invoices;

use MyApp\Domain\ViewInvoice;
use Phalcon\ADR\Input\Input;
use Phalcon\ADR\Responder\ViewResponder;
use Phalcon\Contracts\ADR\Action;
use Phalcon\Contracts\Http\AttributeRequest;
use Phalcon\Http\Response;
use Phalcon\Http\ResponseInterface;

final class GetInvoices implements Action
{
public function __construct(
    private ViewInvoice $domain,
    private ViewResponder $responder
) {
}

public function __invoke(AttributeRequest $request): ResponseInterface
{
    $payload = ($this->domain)(Input::fromRequest($request));

    return ($this->responder->withTemplate('invoices/view'))(
        $request,
        new Response(),
        $payload
    );
}
}
```

The template path is relative to the views directory and carries no extension: `invoices/view` renders `views/invoices/view.phtml`. The payload is flattened into three variables:

| Variable   | Value                     |
| ---------- | ------------------------- |
| `result`   | `$payload->getResult()`   |
| `messages` | `$payload->getMessages()` |
| `status`   | `$payload->getStatus()`   |

```php
<?php

/**
 * @var array                  $messages
 * @var \MyApp\Models\Invoices $result
 * @var string                 $status
 */
?>
<h1>Invoice <?= $result->inv_id ?></h1>
<p><?= $result->inv_title ?></p>
```

The status is mapped to an HTTP code exactly as `StatusResponder` maps it, so a `NOT_FOUND` payload renders the same template with a `404`, and an unrecognized status with a `500`. The content type is always `text/html`.

## The renderer contract

`ViewResponder` never imports the MVC view. It depends on `Phalcon\Contracts\View\Renderer`, which has a single method:

```php
interface Renderer
{
public function render(string $path, array $params = []): string;
}
```

`Phalcon\Mvc\View\Simple` implements this contract already, so it can be passed to the responder directly. Any other template engine becomes a renderer by implementing the same method:

```php
<?php

namespace MyApp\View;

use Phalcon\Contracts\View\Renderer;
use Twig\Environment;

final class TwigRenderer implements Renderer
{
public function __construct(
    private Environment $twig
) {
}

public function render(string $path, array $params = []): string
{
    return $this->twig->render($path . '.twig', $params);
}
}
```

The ADR [provider][provider] does not bind a renderer. Doing so would pull the MVC view into every ADR application, including the ones that only serve JSON. Bind it yourself, in the `registerProviders()` of your [front controller][front], after the call to `parent::registerProviders()`:

```php
use Phalcon\Contracts\View\Renderer;
use Phalcon\Mvc\View\Simple;

$container->set(
Renderer::class,
function () {
    $simple = new Simple();
    $simple->setViewsDir(__DIR__ . '/views/');

    return $simple;
}
);
```

`ViewResponder` is then autowired: the container supplies the renderer and the status mapper.

:::warning[WARNING]
Do not call `registerEngines()` on a `Simple` view used from ADR. `Simple` requires a `Phalcon\Di\DiInterface` to resolve the engines registered, and internally it checks for the `Phalcon\Di\Di`. Leave the engine map empty and the view uses its built-in `.phtml` engine, which needs no container. This will be addressed in the next major version.
:::

This restricts ADR views to `.phtml` templates in this version. [Volt][volt] and other registered engines remain available to MVC applications, and the restriction is lifted in v7. Neither `ViewResponder` nor the `Renderer` contract changes when that happens.

## Writing a responder

Implement `Responder` to build a response any way you like:

```php
<?php

namespace MyApp\Responder;

use Phalcon\Contracts\ADR\Payload\Payload;
use Phalcon\Contracts\ADR\Responder\Responder;
use Phalcon\Http\RequestInterface;
use Phalcon\Http\ResponseInterface;

final class CsvResponder implements Responder
{
public function __invoke(
    RequestInterface $request,
    ResponseInterface $response,
    Payload $payload
): ResponseInterface {
    return $response
        ->setContentType('text/csv')
        ->setContent($this->toCsv($payload->getResult()));
}
}
```

[payload]: /6.0/adr-payload/
[actions]: /6.0/adr-actions/
[domain]: /6.0/adr-domain/
[provider]: /6.0/adr-container/
[front]: /6.0/adr-front-controller/
[volt]: /6.0/volt/

Source: https://docs.phalcon.io/6.0/adr-responders/index.mdx
