---
title: "Class **Phalcon\\Mvc\\Model\\Row**"
version: "3.4"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Class **Phalcon\Mvc\Model\Row**

*implements* [Phalcon\Mvc\EntityInterface](/3.4/api/phalcon_mvc_entityinterface/), [Phalcon\Mvc\Model\ResultInterface](/3.4/api/phalcon_mvc_model_resultinterface/), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php), [JsonSerializable](https://php.net/manual/en/class.jsonserializable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/mvc/model/row.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This component allows Phalcon\Mvc\Model to return rows without an associated entity. This objects implements the ArrayAccess interface to allow access the object as object->x or array[x].

## Methods

public **setDirtyState** (*mixed* $dirtyState)

Set the current object's state

public *boolean* **offsetExists** (*string* | *int* $index)

Checks whether offset exists in the row

public *string* | [Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) **offsetGet** (*string* | *int* $index)

Gets a record in a specific position of the row

public **offsetSet** (*string* | *int* $index, [Phalcon\Mvc\ModelInterface](/3.4/api/phalcon_mvc_model/) $value)

Rows cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface

public **offsetUnset** (*string* | *int* $offset)

Rows cannot be changed. It has only been implemented to meet the definition of the ArrayAccess interface

public *mixed* **readAttribute** (*string* $attribute)

Reads an attribute value by its name

```php
<?php

echo $robot->readAttribute("name");

```

public **writeAttribute** (*string* $attribute, *mixed* $value)

Writes an attribute value by its name

```php
<?php

$robot->writeAttribute("name", "Rosey");

```

public *array* **toArray** ()

Returns the instance as an array representation

public *array* **jsonSerialize** ()

Serializes the object for json_encode

Source: https://docs.phalcon.io/3.4/api/phalcon_mvc_model_row/index.mdx
