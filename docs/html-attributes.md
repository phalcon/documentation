# HTML Components
- - -

## Overview
The [Phalcon\Html\Attributes][html-attributes] is a wrapper of [Phalcon\Support\Collection][support-collection]. It also contains two more methods `render()` and `__toString()`. `render()` uses [Phalcon\Html\TagFactory][html-tagfactory] internally to render the attributes that an HTML element has. These HTML attributes are defined in the object itself.

The component can be used on its own if you want to collect HTML attributes in an object and then _render_ them (return them as a string) in a `key=value` format.

This component is used internally by [Phalcon\Forms\Form][forms] to store the attributes of form elements.

[html-attributes]: api/phalcon_html.md#htmlattributes
[html-attributes-attributesinterface]: api/phalcon_html.md#htmlattributesattributesinterface
[html-attributes-renderinterface]: api/phalcon_html.md#htmlattributesrenderinterface
[html-tagfactory]: api/phalcon_html.md#htmltagfactory
[support-collection]: support-collection.md
[forms]: forms.md
