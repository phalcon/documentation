# Traits

- - -

## Overview

The `Phalcon\Traits` namespace is a collection of small, focused traits used throughout the framework. Each trait bundles a single reusable piece of behavior - for example reading a value from an array with a fallback - so that any class needing it can `use` the trait instead of carrying its own copy of the same method.

Consolidating shared behavior in traits keeps the implementation in one place: a fix or improvement to a trait is immediately picked up by every class that uses it.

The traits follow the layout of the components they support, so a trait lives under a namespace that mirrors its area of responsibility. For instance, array helper traits live under `Phalcon\Traits\Support\Helper\Arr`.

!!! info "NOTE"

    Trait methods are declared `protected`. Once a class does `use SomeTrait;`, the methods become part of that class and are called from inside it with `$this->methodName()`. They are primarily used internally by Phalcon, but are equally available to your own classes.

## Available Traits

| Group | Trait                                          | Description                                                              |
|-------|------------------------------------------------|-------------------------------------------------------------------------|
| Array | `Phalcon\Traits\Support\Helper\Arr\GetTrait`   | Read an array element by key with a default value and an optional cast.  |

- - -

## Support

Traits that back the `Phalcon\Support` helper components.

### `Arr\GetTrait`

`Phalcon\Traits\Support\Helper\Arr\GetTrait`

Reads an element from an array by key. When the key is not present, the supplied default value is returned instead. The result can optionally be cast to a specific type using PHP's [settype()][settype].

**Method**

```php
protected function getArrVal(
    array $collection,
    mixed $index,
    mixed $defaultValue = null,
    ?string $cast = null
): mixed
```

**Parameters**

| Name            | Type      | Default | Description                                                                                                  |
|-----------------|-----------|---------|--------------------------------------------------------------------------------------------------------------|
| `$collection`   | `array`   | -       | The source array to read from.                                                                               |
| `$index`        | `mixed`   | -       | The key to look up in the array.                                                                             |
| `$defaultValue` | `mixed`   | `null`  | Returned when `$index` does not exist in `$collection`.                                                      |
| `$cast`         | `?string` | `null`  | When set, the returned value is cast to this type via `settype()` (e.g. `bool`, `int`, `string`, `array`).  |

**Returns** the value stored at `$index`, or `$defaultValue` when the key is absent - cast to `$cast` when one is supplied.

**Example**

```php
<?php

use Phalcon\Traits\Support\Helper\Arr\GetTrait;

class MyAdapter
{
    use GetTrait;

    public function __construct(array $options = [])
    {
        // 'sess-' is returned when 'prefix' is not supplied
        $prefix = $this->getArrVal($options, 'prefix', 'sess-');

        // the looked up value is cast to an int
        $lifetime = $this->getArrVal($options, 'lifetime', 3600, 'int');

        // cast to bool
        $persistent = $this->getArrVal($options, 'persistent', false, 'bool');
    }
}
```

!!! info "NOTE"

    `Phalcon\Traits\Support\Helper\Arr\GetTrait` is used internally by a number of core components - among them the `Session`, `Storage` and `Mvc\Model\MetaData` adapters, `Http\Cookie`, `Http\Request\File`, `Logger\LoggerFactory` and `Image\ImageFactory` - to read constructor options while providing sensible defaults.

[settype]: https://www.php.net/manual/en/function.settype.php
