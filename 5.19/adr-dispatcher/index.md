---
title: "ADR - Dispatcher"
version: "5.19"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ADR - Dispatcher

## Overview

The dispatcher takes the action class chosen by the [router][router], resolves it from the container, wraps it in the middleware pipeline, and runs it to produce the response.

`Phalcon\ADR\Dispatcher` implements `Phalcon\Contracts\ADR\Dispatcher`:

```php
public function dispatch(
string $actionClass,
Phalcon\Contracts\Http\AttributeRequest $request,
array $routeMiddleware = []
): Phalcon\Http\ResponseInterface;
```

You rarely call the dispatcher directly; the [application][front] does it for you once the router has matched a route. It is documented here because it is where middleware runs and where the dispatch events fire.

## The middleware pipeline

Around every action the dispatcher builds a pipeline from two sources:

* **Global middleware**, passed to the dispatcher's constructor, applies to every request. It is resolved once and reused across requests.
* **Route middleware**, supplied by the router's [namespace map][router], applies only to the matched action.

Each middleware receives the request and the next handler in the chain, and may act before or after the action runs, or short-circuit it entirely by returning a response of its own. See [Middleware][middleware].

If a middleware or the action throws, the exception propagates out of the pipeline and the [application][front] routes it to the [error responder][error-responder], which turns it into a response.

## Events

The dispatcher, and the handler it builds around the action, fire events through the framework's [event manager][events], letting you hook into a request without touching the action:

| Event | When |
| ----- | ---- |
| `pipeline:beforeDispatch` | before the pipeline runs |
| `pipeline:afterDispatch`  | after the pipeline produces a response |
| `adr:beforeExecuteAction` | immediately before the action is invoked |
| `adr:afterExecuteAction`  | immediately after the action returns |

The application layer adds two more around the whole request, `application:beforeHandle` and `application:afterHandle`.

[router]: /5.19/adr-router/
[middleware]: /5.19/adr-middleware/
[events]: /5.19/events/
[front]: /5.19/adr-front-controller/
[error-responder]: /5.19/adr-error-responder/

Source: https://docs.phalcon.io/5.19/adr-dispatcher/index.mdx
