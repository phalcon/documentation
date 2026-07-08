# Traits

- - -

## Overview

The `Phalcon\Traits` namespace is a collection of small, focused traits used throughout the framework. Each trait bundles a single reusable piece of behavior - for example reading a value from an array with a fallback - so that any class needing it can `use` the trait instead of carrying its own copy of the same method.

Consolidating shared behavior in traits keeps the implementation in one place: a fix or improvement to a trait is immediately picked up by every class that uses it.

The traits follow the layout of the components they support, so a trait lives under a namespace that mirrors its area of responsibility. For instance, array helper traits live under `Phalcon\Traits\Support\Helper\Arr`, while wrappers for native PHP functions live under `Phalcon\Traits\Php`.

!!! info "NOTE"

    Trait methods are declared `protected`. Once a class does `use SomeTrait;`, the methods become part of that class and are called from inside it with `$this->methodName()`. They are primarily used internally by Phalcon, but are equally available to your own classes.

## Available Traits

| Group | Trait                                        | Description                                                             |
|-------|----------------------------------------------|-------------------------------------------------------------------------|
| Array | `Phalcon\Traits\Support\Helper\Arr\GetTrait` | Read an array element by key with a default value and an optional cast. |
| File  | `Phalcon\Traits\Php\FileTrait`               | Overridable thin wrappers around PHP's filesystem functions.            |
| Ini   | `Phalcon\Traits\Php\IniTrait`                | Overridable wrappers around PHP's ini functions, each with a static counterpart. |
| Info  | `Phalcon\Traits\Php\InfoTrait`               | Overridable wrappers around PHP's runtime-inspection functions (`extension_loaded`, `function_exists`). |

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

| Name            | Type      | Default | Description                                                                                                |
|-----------------|-----------|---------|------------------------------------------------------------------------------------------------------------|
| `$collection`   | `array`   | -       | The source array to read from.                                                                             |
| `$index`        | `mixed`   | -       | The key to look up in the array.                                                                           |
| `$defaultValue` | `mixed`   | `null`  | Returned when `$index` does not exist in `$collection`.                                                    |
| `$cast`         | `?string` | `null`  | When set, the returned value is cast to this type via `settype()` (e.g. `bool`, `int`, `string`, `array`). |

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

- - -

## Php

Traits that wrap native PHP functions behind protected methods. Isolating these calls in a method makes them straightforward to override in a test double, so behavior such as filesystem access can be simulated without touching the real environment.

### `FileTrait`

`Phalcon\Traits\Php\FileTrait`

Provides overridable wrappers around PHP's filesystem functions. Each method forwards its arguments to the matching PHP function and returns its result unchanged.

| Method                                                                                                 | Wraps                 | Description                                                                    |
|--------------------------------------------------------------------------------------------------------|-----------------------|--------------------------------------------------------------------------------|
| `phpFclose($handle)`                                                                                   | `fclose()`            | Closes an open file pointer.                                                   |
| `phpFgetCsv($stream, $length = 0, $separator = ",", $enclosure = "\"", $escape = "\\")`                | `fgetcsv()`           | Reads a line from a file pointer and parses the CSV fields.                    |
| `phpFileExists($filename)`                                                                             | `file_exists()`       | Checks whether a file or directory exists.                                     |
| `phpFileGetContents($filename, $useIncludePath = false, $context = null, $offset = 0, $length = null)` | `file_get_contents()` | Reads an entire file into a string.                                            |
| `phpFilePutContents($filename, $data, $flags = 0, $context = null)`                                    | `file_put_contents()` | Writes a string to a file.                                                     |
| `phpFopen($filename, $mode, $useIncludePath = false, $context = null)`                                 | `fopen()`             | Opens a file (or URL) and returns a resource.                                  |
| `phpFwrite($handle, $data, $length = null)`                                                            | `fwrite()`            | Binary-safe write; when `$length` is supplied, writes at most that many bytes. |
| `phpIsWritable($filename)`                                                                             | `is_writable()`       | Tells whether a filename is writable.                                          |
| `phpUnlink($filename, $context = null)`                                                                | `unlink()`            | Deletes a file.                                                                |

All methods are `protected`; call them from inside the class with `$this->methodName()`.

**Example**

```php
<?php

use Phalcon\Traits\Php\FileTrait;

class MyStore
{
    use FileTrait;

    public function save(string $file, string $data): bool
    {
        return false !== $this->phpFilePutContents($file, $data);
    }

    public function load(string $file): string
    {
        if (false === $this->phpFileExists($file)) {
            return "";
        }

        $contents = $this->phpFileGetContents($file);

        return false === $contents ? "" : $contents;
    }
}
```

!!! info "NOTE"

    These wrappers exist mainly so that filesystem interactions can be replaced in unit tests by overriding the relevant method in a test subclass. They are used internally across the framework - for example by the `Session`, `Storage`, `Annotations` and `Mvc\Model\MetaData` stream adapters, the `Volt` compiler, `Mvc\View`, `Http\Request`, `Config\Adapter\Json` and the `Assets` components.

### `IniTrait`

`Phalcon\Traits\Php\IniTrait`

Provides overridable wrappers around PHP's ini functions. `ini_get()` is exposed as three typed getters (string, bool, int), each returning a default when the option is not set; `parse_ini_file()` is wrapped as-is. Every method has a `static` counterpart (prefixed `static`) for callers that have no instance - for example a static factory or a static settings reader.

| Method | Static counterpart | Wraps | Description |
|--------|--------------------|-------|-------------|
| `phpIniGet($input, $defaultValue = "")` | `staticPhpIniGet(...)` | `ini_get()` | Returns the option value, or `$defaultValue` when it is not set. |
| `phpIniGetBool($input, $defaultValue = false)` | `staticPhpIniGetBool(...)` | `ini_get()` | Interprets the option as a boolean - `true` for `true`/`on`/`yes`/`y`/`1` (case-insensitive), otherwise `$defaultValue`. |
| `phpIniGetInt($input, $defaultValue = 0)` | `staticPhpIniGetInt(...)` | `ini_get()` | Returns the option cast to `int`, or `$defaultValue` when it is not set. |
| `phpParseIniFile($filename, $processSections = false, $scannerMode = 0)` | `staticPhpParseIniFile(...)` | `parse_ini_file()` | Parses an ini file into an array. |

Both the instance and static methods are `protected`. Because Zephir cannot call a `static` method through `$this`, the pair lets a class read ini values from either an instance context (`$this->phpIniGet(...)`) or a static one (`self::staticPhpIniGet(...)`).

**Example**

```php
<?php

use Phalcon\Traits\Php\IniTrait;

class MyComponent
{
    use IniTrait;

    public function __construct()
    {
        // instance context
        $path = $this->phpIniGet('session.save_path', '/tmp');
    }

    public static function isEnabled(): bool
    {
        // static context - no $this available
        return self::staticPhpIniGetBool('my.feature.enabled');
    }
}
```

!!! info "NOTE"

    Used internally by `Phalcon\Session\Adapter\Stream` (reading `session.save_path`) and `Phalcon\Config\Adapter\Ini` (parsing the ini file).

### `InfoTrait`

`Phalcon\Traits\Php\InfoTrait`

Provides overridable wrappers around PHP's runtime-inspection functions. Isolating these checks behind a method lets a test double report an extension or function as present or absent without changing the real environment.

| Method | Wraps | Description |
|--------|-------|-------------|
| `phpExtensionLoaded($name)` | `extension_loaded()` | Returns whether the named PHP extension is loaded. |
| `phpFunctionExists($functionName)` | `function_exists()` | Returns whether the named function is defined. |

Both methods are `protected`; call them from inside the class with `$this->methodName()`.

**Example**

```php
<?php

use Phalcon\Traits\Php\InfoTrait;

class MyComponent
{
    use InfoTrait;

    public function encode(string $value): string
    {
        if (false === $this->phpFunctionExists('mb_convert_case')) {
            return strtoupper($value);
        }

        return mb_convert_case($value, MB_CASE_UPPER);
    }
}
```

!!! info "NOTE"

    Used internally across the framework wherever an extension or function needs to be probed - for example the `Volt` compiler and the `mb_*` guards in the `Filter` sanitizers/validators, `extension_loaded("yaml")` in `Config\Adapter\Yaml` and `Forms\Loader\YamlLoader`, and `function_exists` checks in `Encryption\Crypt`, `Translate\Adapter\Gettext`, `Http\Response`, `Image\Adapter\Gd` and others.

[settype]: https://www.php.net/manual/en/function.settype.php
