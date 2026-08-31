---
title: "ADR - Payload"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ADR - Payload

## Overview

The payload is the value object the [domain][domain] returns to describe the outcome of its work. It is intentionally free of any HTTP meaning: it carries a *domain* status and data, which the [responder][responders] later translates into a response. This is the seam that lets the domain stay unaware of the web.

`Phalcon\ADR\Payload\Payload` implements `Phalcon\Contracts\ADR\Payload\Payload` and is immutable. It is usually created through the named factories described under [Domain][domain] (`Payload::success()`, `Payload::notFound()`, and so on).

## Fields

A payload exposes six read accessors:

| Accessor | Contents |
| -------- | -------- |
| `getStatus()`    | the domain status (a `Status::*` value) |
| `getResult()`    | the successful result (an entity, a collection, a redirect, ...) |
| `getMessages()`  | messages describing a non-successful outcome (validation errors, ...) |
| `getInput()`     | the input the domain acted on, when attached |
| `getExtras()`    | any additional data to carry alongside the result |
| `getException()` | a `Throwable`, when the outcome was an error |

## Immutability

The payload never changes in place. Each `with*()` method returns a new copy with one field changed, leaving the original untouched:

```php
use Phalcon\ADR\Payload\Payload;
use Phalcon\ADR\Payload\Status;

$payload = (new Payload())
->withStatus(Status::CREATED)
->withResult($invoice)
->withExtras(['location' => "/invoices/{$invoice->id}"]);
```

The available mutators are `withStatus()`, `withResult()`, `withMessages()`, `withInput()`, `withExtras()`, and `withException()`. In practice you rarely call these directly; the factories do it for you.

## Consuming a payload

A [responder][responders] reads the payload to build the response: it maps the status to an HTTP status code, and renders the result or the messages as the body. Because the payload is the only thing that crosses from the domain to the responder, it is the complete, testable description of what the domain decided.

[domain]: /6.0/adr-domain/
[responders]: /6.0/adr-responders/

Source: https://docs.phalcon.io/6.0/adr-payload/index.mdx
