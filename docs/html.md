# HTML Components

- - -

## Overview

This namespace contains components that help with the generation of HTML.

The available components are:

- [Phalcon\Html\Attributes][html-attributes]
- [Phalcon\Html\Breadcrumbs][html-breadcrumbs]
- [Phalcon\Html\Escaper][html-escaper]
- [Phalcon\Html\Link][html-link]
- [Phalcon\Html\TagFactory][html-tagfactory]

## Exceptions

Any exception thrown in the `Phalcon\Html` namespace will be of type `Phalcon\Html\Exception`. You can use this
exception to selectively catch exceptions thrown only from this component.

### Granular Exceptions

As of 5.13.1 the component raises granular subclasses of `Phalcon\Html\Exception` so callers can catch a specific
failure mode. Existing `catch (Phalcon\Html\Exception $e)` blocks continue to work unchanged.

| Class                                                   | Parent                   | Thrown when                                                                 |
|---------------------------------------------------------|--------------------------|-----------------------------------------------------------------------------|
| `Phalcon\Html\Exceptions\AttributeNotRenderable`        | `Phalcon\Html\Exception` | An attribute value is not a scalar and cannot be rendered to HTML.          |
| `Phalcon\Html\Exceptions\FriendlyTitleConversionFailed` | `Phalcon\Html\Exception` | The `friendly` helper cannot transliterate a string to a URL-friendly form. |
| `Phalcon\Html\Exceptions\InvalidResultsetValue`         | `Phalcon\Html\Exception` | A form helper iterating a resultset receives a non-traversable value.       |
| `Phalcon\Html\Exceptions\ServiceNotRegistered`          | `Phalcon\Html\Exception` | `TagFactory` is asked for a helper that has not been registered.            |
| `Phalcon\Html\Exceptions\UsingRequiresTwoValues`        | `Phalcon\Html\Exception` | The `using` option for a select/checkbox helper is not a two-element array. |

[html-attributes]: html-attributes.md

[html-breadcrumbs]: html-breadcrumbs.md

[html-escaper]: html-escaper.md

[html-link]: html-link.md

[html-tagfactory]: html-tagfactory.md
