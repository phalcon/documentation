---
title: "ADR - Emitter"
version: "5.19"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# ADR - Emitter

## Overview

The emitter is the last step in the request lifecycle: it takes the finished response and sends it to the client. Isolating this in its own component keeps the rest of the stack testable, because handling a request produces a response object rather than writing to the output directly. Only the emitter touches the output.

Every emitter implements `Phalcon\Contracts\ADR\Emitter\Emitter`:

```php
public function emit(Phalcon\Http\ResponseInterface $response): void;
```

## SapiEmitter

`Phalcon\ADR\Emitter\SapiEmitter` is the default. It sends the response through the standard PHP SAPI, guarding first against output that has already begun and then sending the headers and body.

If it is asked to send after headers or output have already been sent, it throws rather than producing a corrupt response:

* `Phalcon\ADR\Exceptions\HeadersAlreadySent`
* `Phalcon\ADR\Exceptions\OutputAlreadySent`

Both extend the ADR exception hierarchy, so they can be caught alongside the framework's other ADR exceptions.

The [front controller][front] resolves the emitter from the container and calls `emit()` on the response returned by the application, so you do not normally interact with it directly. Providing your own emitter (for example, a streaming or PSR-7 emitter) is a matter of binding a different implementation of `Emitter` in the [container][provider].

[front]: /5.19/adr-front-controller/
[provider]: /5.19/adr-container/

Source: https://docs.phalcon.io/5.19/adr-emitter/index.mdx
