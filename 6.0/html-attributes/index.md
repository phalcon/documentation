---
title: "HTML Components"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# HTML Components

## Overview

The [Phalcon\Html\Attributes][html-attributes] is a wrapper of [Phalcon\Support\Collection][support-collection]. It also contains two more methods `render()` and `__toString()`. `render()` uses [Phalcon\Html\TagFactory][html-tagfactory] internally to render the attributes that an HTML element has. These HTML attributes are defined in the object itself.

The component can be used on its own if you want to collect HTML attributes in an object and then _render_ them (return them as a string) in a `key=value` format.

This component is used internally by [Phalcon\Forms\Form][forms] to store the attributes of form elements.

[forms]: /6.0/forms/
[html-attributes]: /6.0/api/phalcon_html/#htmlattributes
[html-attributes-attributesinterface]: /6.0/api/phalcon_html/#htmlattributesattributesinterface
[html-attributes-renderinterface]: /6.0/api/phalcon_html/#htmlattributesrenderinterface
[html-tagfactory]: /6.0/api/phalcon_html/#htmltagfactory
[support-collection]: /6.0/support-collection/

Source: https://docs.phalcon.io/6.0/html-attributes/index.mdx
