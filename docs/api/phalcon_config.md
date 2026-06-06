---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Config\Adapter\Grouped

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Adapter/Grouped.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](phalcon_support.md#supportcollection)
    - [`Phalcon\Config\Config`](#configconfig)
        - **`Phalcon\Config\Adapter\Grouped`**

</div>

__Uses__ `Phalcon\Config\Config` · `Phalcon\Config\ConfigFactory` · `Phalcon\Config\ConfigInterface` · `Phalcon\Config\Exception` · `Phalcon\Config\Exceptions\GroupedAdapterRequiresArray` · `Phalcon\Factory\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configadaptergrouped-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">array</span> <span class="sv">$arrayConfig</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$defaultAdapter</span><span class="sm"> = &quot;php&quot;</span></span>)</code>
<span class="desc">Phalcon\Config\Adapter\Grouped constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #configadaptergrouped-__construct }

```php
public function __construct(
    array $arrayConfig,
    string $defaultAdapter = "php"
);
```

Phalcon\Config\Adapter\Grouped constructor


## Config\Adapter\Ini

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Adapter/Ini.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](phalcon_support.md#supportcollection)
    - [`Phalcon\Config\Config`](#configconfig)
        - **`Phalcon\Config\Adapter\Ini`**

</div>

__Uses__ `Phalcon\Config\Config` · `Phalcon\Config\Exception` · `Phalcon\Config\Exceptions\CannotLoadConfigFile`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configadapterini-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filePath</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$mode</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">Ini constructor.</span>
</a>
<a class="api-item" href="#configadapterini-cast">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">cast</span>( <span class="st">mixed</span> <span class="sv">$ini</span> )</code>
<span class="desc">We have to cast values manually because parse_ini_file() has a poor</span>
</a>
<a class="api-item" href="#configadapterini-castarray">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">castArray</span>( <span class="st">array</span> <span class="sv">$ini</span> )</code>
</a>
<a class="api-item" href="#configadapterini-parseinistring">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">parseIniString</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Build multidimensional array from string</span>
</a>
<a class="api-item" href="#configadapterini-phpparseinifile">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpParseIniFile</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$processSections</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$scannerMode</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #configadapterini-__construct }

```php
public function __construct(
    string $filePath,
    int $mode = 1
);
```

Ini constructor.

<div class="api-group">Protected · 4</div>

#### `cast()` { #configadapterini-cast }

```php
protected function cast( mixed $ini ): mixed;
```

We have to cast values manually because parse_ini_file() has a poor
implementation.

#### `castArray()` { #configadapterini-castarray }

```php
protected function castArray( array $ini ): array;
```

#### `parseIniString()` { #configadapterini-parseinistring }

```php
protected function parseIniString(
    string $path,
    mixed $value
): array;
```

Build multidimensional array from string

#### `phpParseIniFile()` { #configadapterini-phpparseinifile }

```php
protected function phpParseIniFile(
    string $filename,
    bool $processSections = false,
    int $scannerMode = 1
);
```

@todo to be removed when we get traits


## Config\Adapter\Json

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Adapter/Json.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](phalcon_support.md#supportcollection)
    - [`Phalcon\Config\Config`](#configconfig)
        - **`Phalcon\Config\Adapter\Json`**

</div>

__Uses__ `Phalcon\Config\Config` · `Phalcon\Support\Helper\Json\Decode`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configadapterjson-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$filePath</span> )</code>
<span class="desc">Phalcon\Config\Adapter\Json constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #configadapterjson-__construct }

```php
public function __construct( string $filePath );
```

Phalcon\Config\Adapter\Json constructor


## Config\Adapter\Php

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Adapter/Php.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](phalcon_support.md#supportcollection)
    - [`Phalcon\Config\Config`](#configconfig)
        - **`Phalcon\Config\Adapter\Php`**

</div>

__Uses__ `Phalcon\Config\Config`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configadapterphp-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$filePath</span> )</code>
<span class="desc">Phalcon\Config\Adapter\Php constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #configadapterphp-__construct }

```php
public function __construct( string $filePath );
```

Phalcon\Config\Adapter\Php constructor


## Config\Adapter\Yaml

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Adapter/Yaml.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](phalcon_support.md#supportcollection)
    - [`Phalcon\Config\Config`](#configconfig)
        - **`Phalcon\Config\Adapter\Yaml`**

</div>

__Uses__ `Phalcon\Config\Config` · `Phalcon\Config\Exception` · `Phalcon\Config\Exceptions\CannotLoadConfigFile` · `Phalcon\Config\Exceptions\MissingYamlExtension`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configadapteryaml-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filePath</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$callbacks</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Phalcon\Config\Adapter\Yaml constructor</span>
</a>
<a class="api-item" href="#configadapteryaml-phpextensionloaded">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpExtensionLoaded</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#configadapteryaml-phpyamlparsefile">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpYamlParseFile</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$pos</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$ndocs</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$callbacks</span><span class="sm"> = []</span></span>)</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #configadapteryaml-__construct }

```php
public function __construct(
    string $filePath,
    array $callbacks = null
);
```

Phalcon\Config\Adapter\Yaml constructor

<div class="api-group">Protected · 2</div>

#### `phpExtensionLoaded()` { #configadapteryaml-phpextensionloaded }

```php
protected function phpExtensionLoaded( string $name ): bool;
```

#### `phpYamlParseFile()` { #configadapteryaml-phpyamlparsefile }

```php
protected function phpYamlParseFile(
    mixed $filename,
    mixed $pos = 0,
    mixed $ndocs = null,
    mixed $callbacks = []
);
```

@todo to be removed when we get traits


## Config\Config

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Config.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](phalcon_support.md#supportcollection)
    - **`Phalcon\Config\Config`** — implements [`Phalcon\Config\ConfigInterface`](#configconfiginterface)
        - [`Phalcon\Config\Adapter\Grouped`](#configadaptergrouped)
        - [`Phalcon\Config\Adapter\Ini`](#configadapterini)
        - [`Phalcon\Config\Adapter\Json`](#configadapterjson)
        - [`Phalcon\Config\Adapter\Php`](#configadapterphp)
        - [`Phalcon\Config\Adapter\Yaml`](#configadapteryaml)

</div>

__Uses__ `Phalcon\Config\Exceptions\InvalidMergeData` · `Phalcon\Support\Collection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configconfig-getpathdelimiter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPathDelimiter</span>()</code>
<span class="desc">Gets the default path delimiter</span>
</a>
<a class="api-item" href="#configconfig-merge">
<code class="vis vis-public">public</code>
<code class="ret">ConfigInterface</code>
<code class="sig"><span class="sf">merge</span>( <span class="st">mixed</span> <span class="sv">$toMerge</span> )</code>
<span class="desc">Merges a configuration into the current one</span>
</a>
<a class="api-item" href="#configconfig-path">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">path</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns a value from current config using a dot separated path.</span>
</a>
<a class="api-item" href="#configconfig-setpathdelimiter">
<code class="vis vis-public">public</code>
<code class="ret">ConfigInterface</code>
<code class="sig"><span class="sf">setPathDelimiter</span>( <span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the default path delimiter</span>
</a>
<a class="api-item" href="#configconfig-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Converts recursively the object to an array</span>
</a>
<a class="api-item" href="#configconfig-internalmerge">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">internalMerge</span>(<span class="prm"><span class="st">array</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$target</span></span>)</code>
<span class="desc">Performs a merge recursively</span>
</a>
<a class="api-item" href="#configconfig-setdata">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setData</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets the collection data</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">DEFAULT_PATH_DELIMITER</span><span class="sm"> = &quot;.&quot;</span></code>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$pathDelimiter</span><span class="sm"> = self::DEFAULT_PATH_DELIMITER</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `getPathDelimiter()` { #configconfig-getpathdelimiter }

```php
public function getPathDelimiter(): string;
```

Gets the default path delimiter

#### `merge()` { #configconfig-merge }

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

#### `path()` { #configconfig-path }

```php
public function path(
    string $path,
    mixed $defaultValue = null,
    string $delimiter = null
): mixed;
```

Returns a value from current config using a dot separated path.

```php
echo $config->path("unknown.path", "default", ".");
```

#### `setPathDelimiter()` { #configconfig-setpathdelimiter }

```php
public function setPathDelimiter( string $delimiter = null ): ConfigInterface;
```

Sets the default path delimiter

#### `toArray()` { #configconfig-toarray }

```php
public function toArray(): array;
```

Converts recursively the object to an array

```php
print_r(
    $config->toArray()
);
```

<div class="api-group">Protected · 2</div>

#### `internalMerge()` { #configconfig-internalmerge }

```php
final protected function internalMerge(
    array $source,
    array $target
): array;
```

Performs a merge recursively

#### `setData()` { #configconfig-setdata }

```php
protected function setData(
    mixed $element,
    mixed $value
): void;
```

Sets the collection data


## Config\ConfigFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/ConfigFactory.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Config\ConfigFactory`**

</div>

__Uses__ `Phalcon\Config\Config` · `Phalcon\Config\ConfigInterface` · `Phalcon\Config\Exceptions\ConfigNotArrayOrObject` · `Phalcon\Config\Exceptions\MissingConfigOption` · `Phalcon\Config\Exceptions\MissingFileExtension` · `Phalcon\Factory\AbstractFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configconfigfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">ConfigFactory constructor.</span>
</a>
<a class="api-item" href="#configconfigfactory-load">
<code class="vis vis-public">public</code>
<code class="ret">ConfigInterface</code>
<code class="sig"><span class="sf">load</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
<span class="desc">Load a config to create a new instance</span>
</a>
<a class="api-item" href="#configconfigfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">ConfigInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$fileName</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$params</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns a new Config instance</span>
</a>
<a class="api-item" href="#configconfigfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#configconfigfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
<a class="api-item" href="#configconfigfactory-parseconfig">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">parseConfig</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #configconfigfactory-__construct }

```php
public function __construct( array $services = [] );
```

ConfigFactory constructor.

#### `load()` { #configconfigfactory-load }

```php
public function load( mixed $config ): ConfigInterface;
```

Load a config to create a new instance

#### `newInstance()` { #configconfigfactory-newinstance }

```php
public function newInstance(
    string $name,
    string $fileName,
    mixed $params = null
): ConfigInterface;
```

Returns a new Config instance

<div class="api-group">Protected · 3</div>

#### `getExceptionClass()` { #configconfigfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #configconfigfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters

#### `parseConfig()` { #configconfigfactory-parseconfig }

```php
protected function parseConfig( mixed $config ): array;
```


## Config\ConfigInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/ConfigInterface.zep){ .src-btn }

Phalcon\Config\ConfigInterface

Interface for Phalcon\Config\Config class

<div class="api-tree" markdown>

- `ArrayAccess`
    - [`Phalcon\Contracts\Support\Collection`](phalcon_contracts.md#contractssupportcollection)
        - [`Phalcon\Support\Collection\CollectionInterface`](phalcon_support.md#supportcollectioncollectioninterface)
            - **`Phalcon\Config\ConfigInterface`**

</div>

__Uses__ `Phalcon\Support\Collection\CollectionInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configconfiginterface-getpathdelimiter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPathDelimiter</span>()</code>
</a>
<a class="api-item" href="#configconfiginterface-merge">
<code class="vis vis-public">public</code>
<code class="ret">ConfigInterface</code>
<code class="sig"><span class="sf">merge</span>( <span class="st">mixed</span> <span class="sv">$toMerge</span> )</code>
</a>
<a class="api-item" href="#configconfiginterface-path">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">path</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#configconfiginterface-setpathdelimiter">
<code class="vis vis-public">public</code>
<code class="ret">ConfigInterface</code>
<code class="sig"><span class="sf">setPathDelimiter</span>( <span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = null</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `getPathDelimiter()` { #configconfiginterface-getpathdelimiter }

```php
public function getPathDelimiter(): string;
```

#### `merge()` { #configconfiginterface-merge }

```php
public function merge( mixed $toMerge ): ConfigInterface;
```

#### `path()` { #configconfiginterface-path }

```php
public function path(
    string $path,
    mixed $defaultValue = null,
    string $delimiter = null
): mixed;
```

#### `setPathDelimiter()` { #configconfiginterface-setpathdelimiter }

```php
public function setPathDelimiter( string $delimiter = null ): ConfigInterface;
```


## Config\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Config will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Config\Exception`**
        - [`Phalcon\Config\Exceptions\CannotLoadConfigFile`](#configexceptionscannotloadconfigfile)
        - [`Phalcon\Config\Exceptions\ConfigNotArrayOrObject`](#configexceptionsconfignotarrayorobject)
        - [`Phalcon\Config\Exceptions\GroupedAdapterRequiresArray`](#configexceptionsgroupedadapterrequiresarray)
        - [`Phalcon\Config\Exceptions\InvalidMergeData`](#configexceptionsinvalidmergedata)
        - [`Phalcon\Config\Exceptions\MissingConfigOption`](#configexceptionsmissingconfigoption)
        - [`Phalcon\Config\Exceptions\MissingFileExtension`](#configexceptionsmissingfileextension)
        - [`Phalcon\Config\Exceptions\MissingYamlExtension`](#configexceptionsmissingyamlextension)

</div>


## Config\Exceptions\CannotLoadConfigFile

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Exceptions/CannotLoadConfigFile.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Config\Exception`](#configexception)
        - **`Phalcon\Config\Exceptions\CannotLoadConfigFile`**

</div>

__Uses__ `Phalcon\Config\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configexceptionscannotloadconfigfile-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$fileName</span> )</code>
</a>
<a class="api-item" href="#configexceptionscannotloadconfigfile-getfilename">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getFileName</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #configexceptionscannotloadconfigfile-__construct }

```php
public function __construct( string $fileName );
```

#### `getFileName()` { #configexceptionscannotloadconfigfile-getfilename }

```php
public function getFileName(): string;
```


## Config\Exceptions\ConfigNotArrayOrObject

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Exceptions/ConfigNotArrayOrObject.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Config\Exception`](#configexception)
        - **`Phalcon\Config\Exceptions\ConfigNotArrayOrObject`**

</div>

__Uses__ `Phalcon\Config\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configexceptionsconfignotarrayorobject-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #configexceptionsconfignotarrayorobject-__construct }

```php
public function __construct();
```


## Config\Exceptions\GroupedAdapterRequiresArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Exceptions/GroupedAdapterRequiresArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Config\Exception`](#configexception)
        - **`Phalcon\Config\Exceptions\GroupedAdapterRequiresArray`**

</div>

__Uses__ `Phalcon\Config\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configexceptionsgroupedadapterrequiresarray-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #configexceptionsgroupedadapterrequiresarray-__construct }

```php
public function __construct();
```


## Config\Exceptions\InvalidMergeData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Exceptions/InvalidMergeData.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Config\Exception`](#configexception)
        - **`Phalcon\Config\Exceptions\InvalidMergeData`**

</div>

__Uses__ `Phalcon\Config\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configexceptionsinvalidmergedata-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #configexceptionsinvalidmergedata-__construct }

```php
public function __construct();
```


## Config\Exceptions\MissingConfigOption

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Exceptions/MissingConfigOption.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Config\Exception`](#configexception)
        - **`Phalcon\Config\Exceptions\MissingConfigOption`**

</div>

__Uses__ `Phalcon\Config\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configexceptionsmissingconfigoption-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$option</span> )</code>
</a>
<a class="api-item" href="#configexceptionsmissingconfigoption-getoption">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getOption</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #configexceptionsmissingconfigoption-__construct }

```php
public function __construct( string $option );
```

#### `getOption()` { #configexceptionsmissingconfigoption-getoption }

```php
public function getOption(): string;
```


## Config\Exceptions\MissingFileExtension

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Exceptions/MissingFileExtension.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Config\Exception`](#configexception)
        - **`Phalcon\Config\Exceptions\MissingFileExtension`**

</div>

__Uses__ `Phalcon\Config\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configexceptionsmissingfileextension-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #configexceptionsmissingfileextension-__construct }

```php
public function __construct();
```


## Config\Exceptions\MissingYamlExtension

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Exceptions/MissingYamlExtension.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Config\Exception`](#configexception)
        - **`Phalcon\Config\Exceptions\MissingYamlExtension`**

</div>

__Uses__ `Phalcon\Config\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#configexceptionsmissingyamlextension-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #configexceptionsmissingyamlextension-__construct }

```php
public function __construct();
```
