---
title: "HTTP Response (PSR-7)"
version: "5.14"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# HTTP Response (PSR-7)

:::info[NOTE]
The HTTP Response component has been removed from v5 to remove the dependency on PSR. They will be introduced in a future version either as pure Phalcon implementations with proxy (PSR enabled) classes or in v6 (PHP implementation).
:::

## Exceptions

The framework still ships the legacy `Phalcon\Http\Response` service used by the MVC stack. Any exception thrown by it
will be of type `Phalcon\Http\Response\Exception`.

### Granular Exceptions

As of 5.14 the component raises granular subclasses of `Phalcon\Http\Response\Exception` so callers can catch a
specific failure mode. Existing `catch (Phalcon\Http\Response\Exception $e)` blocks continue to work unchanged.

| Class                                                                   | Parent                            | Thrown when                                                                          |
|-------------------------------------------------------------------------|-----------------------------------|--------------------------------------------------------------------------------------|
| `Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage` | `Phalcon\Http\Response\Exception` | A status code outside the well-known list is set without an explicit reason phrase.  |
| `Phalcon\Http\Response\Exceptions\ResponseAlreadySent`                  | `Phalcon\Http\Response\Exception` | `send()` is called on a response that has already been sent.                         |
| `Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable`           | `Phalcon\Http\Response\Exception` | The component needs the `response` service but the DI container has none registered. |
| `Phalcon\Http\Response\Exceptions\UrlServiceUnavailable`                | `Phalcon\Http\Response\Exception` | `redirect()` is called but the DI container has no `url` service.                    |

Source: https://docs.phalcon.io/5.14/http-response/index.mdx
