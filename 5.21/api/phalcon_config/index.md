---
title: "Phalcon Config"
version: "5.21"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Config

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Config\Adapter\Grouped

Class

Reads multiple files (or arrays) and merges them all together.

See `Phalcon\Config\ConfigFactory::load` To load Config Adapter class using 'adapter' option.

```php
use Phalcon\Config\Adapter\Grouped;

$config = new Grouped(
    [
        "path/to/config.php",
        "path/to/config.dist.php",
    ]
);
```

```php
use Phalcon\Config\Adapter\Grouped;

$config = new Grouped(
    [
        "path/to/config.json",
        "path/to/config.dist.json",
    ],
    "json"
);
```

```php
use Phalcon\Config\Adapter\Grouped;

$config = new Grouped(
    [
        [
            "filePath" => "path/to/config.php",
            "adapter"  => "php",
        ],
        [
            "filePath" => "path/to/config.json",
            "adapter"  => "json",
        ],
        [
            "adapter"  => "array",
            "config"   => [
                "property" => "value",
            ],
        ],
    ],
);
```

- [`Phalcon\Support\Collection`](/5.21/api/phalcon_support/#supportcollection)
  - [`Phalcon\Config\Config`](#configconfig)
    - **`Phalcon\Config\Adapter\Grouped`**

`Phalcon\Config\Config` · `Phalcon\Config\ConfigFactory` · `Phalcon\Config\ConfigInterface` · `Phalcon\Config\Exception` · `Phalcon\Config\Exceptions\GroupedAdapterRequiresArray` · `Phalcon\Factory\Exception`

### Method Summary

- `public __construct(array $arrayConfig, string $defaultAdapter = "php", ConfigFactory|null $factory = null)` — Phalcon\Config\Adapter\Grouped constructor

### Methods

<h4 id="configadaptergrouped-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    array $arrayConfig,
    string $defaultAdapter = "php",
    ConfigFactory|null $factory = null
);
```

Phalcon\Config\Adapter\Grouped constructor


## Config\Adapter\Ini

Class

Reads ini files and converts them to Phalcon\Config\Config objects.

Given the next configuration file:

```ini
[database]
adapter = Mysql
host = localhost
username = scott
password = cheetah
dbname = test_db

[phalcon]
controllersDir = "../app/controllers/"
modelsDir = "../app/models/"
viewsDir = "../app/views/"
```

You can read it as follows:

```php
use Phalcon\Config\Adapter\Ini;

$config = new Ini("path/config.ini");

echo $config->phalcon->controllersDir;
echo $config->database->username;
```

PHP constants may also be parsed in the ini file, so if you define a constant
as an ini value before calling the constructor, the constant's value will be
integrated into the results. To use it this way you must specify the optional
second parameter as `INI_SCANNER_NORMAL` when calling the constructor:

```php
$config = new \Phalcon\Config\Adapter\Ini(
    "path/config-with-constants.ini",
    INI_SCANNER_NORMAL
);
```

- [`Phalcon\Support\Collection`](/5.21/api/phalcon_support/#supportcollection)
  - [`Phalcon\Config\Config`](#configconfig)
    - **`Phalcon\Config\Adapter\Ini`**

`Phalcon\Config\Config` · `Phalcon\Config\Exception` · `Phalcon\Config\Exceptions\CannotLoadConfigFile` · `Phalcon\Traits\Php\IniTrait`

### Method Summary

- `public __construct(string $filePath, int $mode = 1)` — Ini constructor.

- `protected cast(mixed $ini): mixed` — We have to cast values manually because parse\_ini\_file() has a poor

- `protected castArray(array $ini): array`

- `protected parseIniString(string $path, mixed $value): array` — Build multidimensional array from string

### Methods

<h4 id="configadapterini-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $filePath,
    int $mode = 1
);
```

Ini constructor.

<h4 id="configadapterini-cast"><code>cast()</code></h4>

```php
protected function cast( mixed $ini ): mixed;
```

We have to cast values manually because parse_ini_file() has a poor
implementation.

Note: this casting is an ini-format compensation and is deliberately
specific to this adapter. Ini files carry untyped strings, so
`on/yes/true`, `off/no/false`, `null` and numeric strings are decoded
here. The json, yaml and php adapters receive natively typed values
from their parsers and perform no casting.

<h4 id="configadapterini-castarray"><code>castArray()</code></h4>

```php
protected function castArray( array $ini ): array;
```

<h4 id="configadapterini-parseinistring"><code>parseIniString()</code></h4>

```php
protected function parseIniString(
    string $path,
    mixed $value
): array;
```

Build multidimensional array from string


## Config\Adapter\Json

Class

Reads JSON files and converts them to Phalcon\Config\Config objects.

Given the following configuration file:

```json
{"phalcon":{"baseuri":"\/phalcon\/"},"models":{"metadata":"memory"}}
```

You can read it as follows:

```php
use Phalcon\Config\Adapter\Json;

$config = new Json("path/config.json");

echo $config->phalcon->baseuri;
echo $config->models->metadata;
```

- [`Phalcon\Support\Collection`](/5.21/api/phalcon_support/#supportcollection)
  - [`Phalcon\Config\Config`](#configconfig)
    - **`Phalcon\Config\Adapter\Json`**

`Phalcon\Config\Config` · `Phalcon\Config\Exceptions\CannotLoadConfigFile` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

- `public __construct(string $filePath)` — Phalcon\Config\Adapter\Json constructor

### Methods

<h4 id="configadapterjson-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $filePath );
```

Phalcon\Config\Adapter\Json constructor


## Config\Adapter\Php

Class

Reads php files and converts them to Phalcon\Config\Config objects.

Given the next configuration file:

```php
<?php

return [
    "database" => [
        "adapter"  => "Mysql",
        "host"     => "localhost",
        "username" => "scott",
        "password" => "cheetah",
        "dbname"   => "test_db",
    ],
    "phalcon" => [
        "controllersDir" => "../app/controllers/",
        "modelsDir"      => "../app/models/",
        "viewsDir"       => "../app/views/",
    ],
];
```

You can read it as follows:

```php
use Phalcon\Config\Adapter\Php;

$config = new Php("path/config.php");

echo $config->phalcon->controllersDir;
echo $config->database->username;
```

- [`Phalcon\Support\Collection`](/5.21/api/phalcon_support/#supportcollection)
  - [`Phalcon\Config\Config`](#configconfig)
    - **`Phalcon\Config\Adapter\Php`**

`Phalcon\Config\Config` · `Phalcon\Config\Exceptions\CannotLoadConfigFile`

### Method Summary

- `public __construct(string $filePath)` — Phalcon\Config\Adapter\Php constructor

### Methods

<h4 id="configadapterphp-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $filePath );
```

Phalcon\Config\Adapter\Php constructor


## Config\Adapter\Yaml

Class

Reads YAML files and converts them to Phalcon\Config\Config objects.

Given the following configuration file:

```yaml
phalcon:
  baseuri:        /phalcon/
  controllersDir: !approot  /app/controllers/
models:
  metadata: memory
```

You can read it as follows:

```php
define(
    "APPROOT",
    dirname(__DIR__)
);

use Phalcon\Config\Adapter\Yaml;

$config = new Yaml(
    "path/config.yaml",
    [
        "!approot" => function($value) {
            return APPROOT . $value;
        },
    ]
);

echo $config->phalcon->controllersDir;
echo $config->phalcon->baseuri;
echo $config->models->metadata;
```

- [`Phalcon\Support\Collection`](/5.21/api/phalcon_support/#supportcollection)
  - [`Phalcon\Config\Config`](#configconfig)
    - **`Phalcon\Config\Adapter\Yaml`**

`Phalcon\Config\Config` · `Phalcon\Config\Exception` · `Phalcon\Config\Exceptions\CannotLoadConfigFile` · `Phalcon\Config\Exceptions\MissingYamlExtension` · `Phalcon\Traits\Php\InfoTrait` · `Phalcon\Traits\Php\YamlTrait`

### Method Summary

- `public __construct(string $filePath, array|null $callbacks = null)` — Phalcon\Config\Adapter\Yaml constructor

### Methods

<h4 id="configadapteryaml-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $filePath,
    array|null $callbacks = null
);
```

Phalcon\Config\Adapter\Yaml constructor


## Config\Config

Class

`Phalcon\Config` is designed to simplify the access to, and the use of,
configuration data within applications. It provides a nested object property
based user interface for accessing this configuration data within application
code.

```php
$config = new \Phalcon\Config\Config(
    [
        "database" => [
            "adapter"  => "Mysql",
            "host"     => "localhost",
            "username" => "scott",
            "password" => "cheetah",
            "dbname"   => "test_db",
        ],
        "phalcon" => [
            "controllersDir" => "../app/controllers/",
            "modelsDir"      => "../app/models/",
            "viewsDir"       => "../app/views/",
        ],
    ]
);
```

- [`Phalcon\Support\Collection`](/5.21/api/phalcon_support/#supportcollection)
  - **`Phalcon\Config\Config`** - implements [`Phalcon\Config\ConfigInterface`](#configconfiginterface)
    - [`Phalcon\Config\Adapter\Grouped`](#configadaptergrouped)
    - [`Phalcon\Config\Adapter\Ini`](#configadapterini)
    - [`Phalcon\Config\Adapter\Json`](#configadapterjson)
    - [`Phalcon\Config\Adapter\Php`](#configadapterphp)
    - [`Phalcon\Config\Adapter\Yaml`](#configadapteryaml)

`Phalcon\Config\Exceptions\InvalidMergeData` · `Phalcon\Support\Collection`

### Method Summary

- `public getPathDelimiter(): string` — Gets the default path delimiter

- `public merge(mixed $toMerge): ConfigInterface` — Merges a configuration into the current one

- `public path(string $path, mixed $defaultValue = null, string|null $delimiter = null): mixed` — Returns a value from current config using a dot separated path.

- `public setPathDelimiter(string|null $delimiter = null): ConfigInterface` — Sets the default path delimiter

- `public toArray(): array` — Converts recursively the object to an array

- `protected cloneEmpty(array $data = []): static` — Builds a new collection with the given data, carrying over the

- `protected internalMerge(array $source, array $target): array` — Performs a merge recursively

- `protected setData(mixed $element, mixed $value): void` — Sets the collection data

### Constants

- `const string DEFAULT_PATH_DELIMITER = "."`

### Properties

- `protected string $pathDelimiter = self::DEFAULT_PATH_DELIMITER`

### Methods

<h4 id="configconfig-getpathdelimiter"><code>getPathDelimiter()</code></h4>

```php
public function getPathDelimiter(): string;
```

Gets the default path delimiter

<h4 id="configconfig-merge"><code>merge()</code></h4>

```php
public function merge( mixed $toMerge ): ConfigInterface;
```

Merges a configuration into the current one

```php
$appConfig = new \Phalcon\Config\Config(
    [
        "database" => [
            "host" => "localhost",
        ],
    ]
);

$globalConfig->merge($appConfig);
```

<h4 id="configconfig-path"><code>path()</code></h4>

```php
public function path(
    string $path,
    mixed $defaultValue = null,
    string|null $delimiter = null
): mixed;
```

Returns a value from current config using a dot separated path.

```php
echo $config->path("unknown.path", "default", ".");
```

<h4 id="configconfig-setpathdelimiter"><code>setPathDelimiter()</code></h4>

```php
public function setPathDelimiter( string|null $delimiter = null ): ConfigInterface;
```

Sets the default path delimiter

<h4 id="configconfig-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Converts recursively the object to an array

```php
print_r(
    $config->toArray()
);
```

<h4 id="configconfig-cloneempty"><code>cloneEmpty()</code></h4>

```php
protected function cloneEmpty( array $data = [] ): static;
```

Builds a new collection with the given data, carrying over the
configuration of the current one. Clone-based instead of
constructor-based: adapter subclasses (Ini, Json, Php, Yaml, Grouped)
define file-loading constructors that are incompatible with the
parent's `(array data, ...)` signature, so `filter()`, `map()`,
`sort()` and `where()` would otherwise fail on any adapter instance.

<h4 id="configconfig-internalmerge"><code>internalMerge()</code></h4>

```php
final protected function internalMerge(
    array $source,
    array $target
): array;
```

Performs a merge recursively

<h4 id="configconfig-setdata"><code>setData()</code></h4>

```php
protected function setData(
    mixed $element,
    mixed $value
): void;
```

Sets the collection data

Array values become nested Config objects carrying the `insensitive`,
`strictNull` and `type` flags of this instance. The `type` guard is
applied to leaf values only - arrays are not validated themselves;
the nested Config validates its own leaves.


## Config\ConfigFactory

Class

Loads Config Adapter class using 'adapter' option, if no extension is
provided it will be added to filePath

```php
use Phalcon\Config\ConfigFactory;

$options = [
    "filePath" => "path/config",
    "adapter"  => "php",
];

$config = (new ConfigFactory())->load($options);
```

- [`Phalcon\Factory\AbstractConfigFactory`](/5.21/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/5.21/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Config\ConfigFactory`**

`Phalcon\Config\Adapter\Grouped` · `Phalcon\Config\Adapter\Ini` · `Phalcon\Config\Adapter\Json` · `Phalcon\Config\Adapter\Php` · `Phalcon\Config\Adapter\Yaml` · `Phalcon\Config\Config` · `Phalcon\Config\ConfigInterface` · `Phalcon\Config\Exceptions\ConfigNotArrayOrObject` · `Phalcon\Config\Exceptions\MissingConfigOption` · `Phalcon\Config\Exceptions\MissingFileExtension` · `Phalcon\Factory\AbstractFactory`

### Method Summary

- `public __construct(array $services = [])` — ConfigFactory constructor.

- `public load(mixed $config): ConfigInterface` — Load a config to create a new instance

- `public newInstance(string $name, string $fileName, mixed $params = null): ConfigInterface` — Returns a new Config instance

- `protected getAdapterAliases(): array` — Adapter name aliases resolved by `load()` (file extensions that map

- `protected getExceptionClass(): string`

- `protected getExtraArguments(): array` — Adapters accepting an extra constructor argument, with the config

- `protected getServices(): array` — Returns the available adapters

- `protected parseConfig(mixed $config): array`

### Methods

<h4 id="configconfigfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

ConfigFactory constructor.

<h4 id="configconfigfactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): ConfigInterface;
```

Load a config to create a new instance

<h4 id="configconfigfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
    string $name,
    string $fileName,
    mixed $params = null
): ConfigInterface;
```

Returns a new Config instance

<h4 id="configconfigfactory-getadapteraliases"><code>getAdapterAliases()</code></h4>

```php
protected function getAdapterAliases(): array;
```

Adapter name aliases resolved by `load()` (file extensions that map
to a registered adapter)

<h4 id="configconfigfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="configconfigfactory-getextraarguments"><code>getExtraArguments()</code></h4>

```php
protected function getExtraArguments(): array;
```

Adapters accepting an extra constructor argument, with the config
option carrying it and its default value. Single source for the
parameter-forwarding knowledge used by `load()` and `newInstance()`.

<h4 id="configconfigfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

<h4 id="configconfigfactory-parseconfig"><code>parseConfig()</code></h4>

```php
protected function parseConfig( mixed $config ): array;
```


## Config\ConfigInterface

Interface

Phalcon\Config\ConfigInterface

Interface for Phalcon\Config\Config class

- `\ArrayAccess`
  - [`Phalcon\Contracts\Support\Collection`](/5.21/api/phalcon_contracts/#contractssupportcollection)
    - [`Phalcon\Support\Collection\CollectionInterface`](/5.21/api/phalcon_support/#supportcollectioncollectioninterface)
      - **`Phalcon\Config\ConfigInterface`**

`Phalcon\Support\Collection\CollectionInterface`

### Method Summary

- `public getPathDelimiter(): string`

- `public merge(mixed $toMerge): ConfigInterface`

- `public path(string $path, mixed $defaultValue = null, string|null $delimiter = null): mixed`

- `public setPathDelimiter(string|null $delimiter = null): ConfigInterface`

### Methods

<h4 id="configconfiginterface-getpathdelimiter"><code>getPathDelimiter()</code></h4>

```php
public function getPathDelimiter(): string;
```

<h4 id="configconfiginterface-merge"><code>merge()</code></h4>

```php
public function merge( mixed $toMerge ): ConfigInterface;
```

<h4 id="configconfiginterface-path"><code>path()</code></h4>

```php
public function path(
    string $path,
    mixed $defaultValue = null,
    string|null $delimiter = null
): mixed;
```

<h4 id="configconfiginterface-setpathdelimiter"><code>setPathDelimiter()</code></h4>

```php
public function setPathDelimiter( string|null $delimiter = null ): ConfigInterface;
```


## Config\Exception

Class

Exceptions thrown in Phalcon\Config will use this class

- `\Exception`
  - **`Phalcon\Config\Exception`**
    - [`Phalcon\Config\Exceptions\CannotLoadConfigFile`](#configexceptionscannotloadconfigfile)
    - [`Phalcon\Config\Exceptions\ConfigNotArrayOrObject`](#configexceptionsconfignotarrayorobject)
    - [`Phalcon\Config\Exceptions\GroupedAdapterRequiresArray`](#configexceptionsgroupedadapterrequiresarray)
    - [`Phalcon\Config\Exceptions\InvalidMergeData`](#configexceptionsinvalidmergedata)
    - [`Phalcon\Config\Exceptions\MissingConfigOption`](#configexceptionsmissingconfigoption)
    - [`Phalcon\Config\Exceptions\MissingFileExtension`](#configexceptionsmissingfileextension)
    - [`Phalcon\Config\Exceptions\MissingYamlExtension`](#configexceptionsmissingyamlextension)


## Config\Exceptions\CannotLoadConfigFile

Class

- `\Exception`
  - [`Phalcon\Config\Exception`](#configexception)
    - **`Phalcon\Config\Exceptions\CannotLoadConfigFile`**

`Phalcon\Config\Exception`

### Method Summary

- `public __construct(string $fileName)`

- `public getFileName(): string`

### Methods

<h4 id="configexceptionscannotloadconfigfile-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $fileName );
```

<h4 id="configexceptionscannotloadconfigfile-getfilename"><code>getFileName()</code></h4>

```php
public function getFileName(): string;
```


## Config\Exceptions\ConfigNotArrayOrObject

Class

- `\Exception`
  - [`Phalcon\Config\Exception`](#configexception)
    - **`Phalcon\Config\Exceptions\ConfigNotArrayOrObject`**

`Phalcon\Config\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="configexceptionsconfignotarrayorobject-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Config\Exceptions\GroupedAdapterRequiresArray

Class

- `\Exception`
  - [`Phalcon\Config\Exception`](#configexception)
    - **`Phalcon\Config\Exceptions\GroupedAdapterRequiresArray`**

`Phalcon\Config\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="configexceptionsgroupedadapterrequiresarray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Config\Exceptions\InvalidMergeData

Class

- `\Exception`
  - [`Phalcon\Config\Exception`](#configexception)
    - **`Phalcon\Config\Exceptions\InvalidMergeData`**

`Phalcon\Config\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="configexceptionsinvalidmergedata-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Config\Exceptions\MissingConfigOption

Class

- `\Exception`
  - [`Phalcon\Config\Exception`](#configexception)
    - **`Phalcon\Config\Exceptions\MissingConfigOption`**

`Phalcon\Config\Exception`

### Method Summary

- `public __construct(string $option)`

- `public getOption(): string`

### Methods

<h4 id="configexceptionsmissingconfigoption-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $option );
```

<h4 id="configexceptionsmissingconfigoption-getoption"><code>getOption()</code></h4>

```php
public function getOption(): string;
```


## Config\Exceptions\MissingFileExtension

Class

- `\Exception`
  - [`Phalcon\Config\Exception`](#configexception)
    - **`Phalcon\Config\Exceptions\MissingFileExtension`**

`Phalcon\Config\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="configexceptionsmissingfileextension-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Config\Exceptions\MissingYamlExtension

Class

- `\Exception`
  - [`Phalcon\Config\Exception`](#configexception)
    - **`Phalcon\Config\Exceptions\MissingYamlExtension`**

`Phalcon\Config\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="configexceptionsmissingyamlextension-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

Source: https://docs.phalcon.io/5.21/api/phalcon_config/index.mdx
