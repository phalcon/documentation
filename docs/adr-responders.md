# ADR - Responders

- - -

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

Two ready-to-use responders cover the common content types:

* `Phalcon\ADR\Responder\JsonResponder` - serializes the payload result as JSON.
* `Phalcon\ADR\Responder\TextResponder` - renders the payload result as plain text.

Both take no constructor arguments and can be injected into an action directly, or bound as the default `Responder` in the [container][provider]:

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

[payload]: adr-payload.md
[actions]: adr-actions.md
[domain]: adr-domain.md
[provider]: adr-container.md
