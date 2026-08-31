---
title: "HTML Components"
version: "5.19"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# HTML Components

## Overview

This namespace contains components that help with the generation of HTML.

The available components are:

- [Phalcon\Html\Attributes][html-attributes]
- [Phalcon\Html\Breadcrumbs][html-breadcrumbs]
- [Phalcon\Html\Escaper][html-escaper]
- [Phalcon\Html\Link][html-link]
- [Phalcon\Html\TagFactory][html-tagfactory]

## Exceptions

Any exception thrown in the `Phalcon\Html` namespace will be of type `Phalcon\Html\Exception`. You can use this exception to selectively catch exceptions thrown only from this component.

### Granular Exceptions

The component raises granular subclasses of `Phalcon\Html\Exception` so callers can catch a specific failure mode. Existing `catch (Phalcon\Html\Exception $e)` blocks continue to work unchanged.

| Class                                                   | Parent                   | Thrown when                                                                 |
|---------------------------------------------------------|--------------------------|-----------------------------------------------------------------------------|
| `Phalcon\Html\Exceptions\AttributeNotRenderable`        | `Phalcon\Html\Exception` | An attribute value is not a scalar and cannot be rendered to HTML.          |
| `Phalcon\Html\Exceptions\FriendlyTitleConversionFailed` | `Phalcon\Html\Exception` | The `friendly` helper cannot transliterate a string to a URL-friendly form. |
| `Phalcon\Html\Exceptions\InvalidResultsetValue`         | `Phalcon\Html\Exception` | A form helper iterating a resultset receives a non-traversable value.       |
| `Phalcon\Html\Exceptions\ServiceNotRegistered`          | `Phalcon\Html\Exception` | `TagFactory` is asked for a helper that has not been registered.            |
| `Phalcon\Html\Exceptions\UsingRequiresTwoValues`        | `Phalcon\Html\Exception` | The `using` option for a select/checkbox helper is not a two-element array. |

[html-attributes]: /5.19/html-attributes/
[html-breadcrumbs]: /5.19/html-breadcrumbs/
[html-escaper]: /5.19/html-escaper/
[html-link]: /5.19/html-link/
[html-tagfactory]: /5.19/html-tagfactory/

Source: https://docs.phalcon.io/5.19/html/index.mdx
