---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Config\Adapter\Grouped 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Adapter/Grouped.zep)


-   __Namespace__

    - `Phalcon\Config\Adapter`

-   __Uses__
    
    - `Phalcon\Config\Config`
    - `Phalcon\Config\ConfigFactory`
    - `Phalcon\Config\ConfigInterface`
    - `Phalcon\Config\Exception`
    - `Phalcon\Factory\Exception`

-   __Extends__
    
    `Config`

-   __Implements__
    

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


### Methods

```php
public function __construct( array $arrayConfig, string $defaultAdapter = string );
```
Phalcon\Config\Adapter\Grouped constructor




## Config\Adapter\Ini 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Adapter/Ini.zep)


-   __Namespace__

    - `Phalcon\Config\Adapter`

-   __Uses__
    
    - `Phalcon\Config\Config`
    - `Phalcon\Config\Exception`
    - `Phalcon\Support\Traits\PhpFileTrait`

-   __Extends__
    
    `Config`

-   __Implements__
    

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


### Methods

```php
public function __construct( string $filePath, int $mode = int );
```
Ini constructor.


```php
protected function cast( mixed $ini ): mixed;
```
We have to cast values manually because parse_ini_file() has a poor
implementation.


```php
protected function castArray( array $ini ): array;
```



```php
protected function parseIniString( string $path, mixed $value ): array;
```
Build multidimensional array from string


```php
protected function phpParseIniFile( string $filename, bool $processSections = bool, int $scannerMode = int );
```
@todo to be removed when we get traits




## Config\Adapter\Json 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Adapter/Json.zep)


-   __Namespace__

    - `Phalcon\Config\Adapter`

-   __Uses__
    
    - `Phalcon\Config\Config`
    - `Phalcon\Support\Helper\Json\Decode`

-   __Extends__
    
    `Config`

-   __Implements__
    

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


### Methods

```php
public function __construct( string $filePath );
```
Phalcon\Config\Adapter\Json constructor




## Config\Adapter\Php 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Adapter/Php.zep)


-   __Namespace__

    - `Phalcon\Config\Adapter`

-   __Uses__
    
    - `Phalcon\Config\Config`

-   __Extends__
    
    `Config`

-   __Implements__
    

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


### Methods

```php
public function __construct( string $filePath );
```
Phalcon\Config\Adapter\Php constructor




## Config\Adapter\Yaml 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Adapter/Yaml.zep)


-   __Namespace__

    - `Phalcon\Config\Adapter`

-   __Uses__
    
    - `Phalcon\Config\Config`
    - `Phalcon\Config\Exception`

-   __Extends__
    
    `Config`

-   __Implements__
    

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


### Methods

```php
public function __construct( string $filePath, array $callbacks = null );
```
Phalcon\Config\Adapter\Yaml constructor


```php
protected function phpExtensionLoaded( string $name ): bool;
```



```php
protected function phpYamlParseFile( mixed $filename, mixed $pos = int, mixed $ndocs = null, mixed $callbacks = [] );
```
@todo to be removed when we get traits




## Config\Config 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Config.zep)


-   __Namespace__

    - `Phalcon\Config`

-   __Uses__
    
    - `Phalcon\Support\Collection`

-   __Extends__
    
    `Collection`

-   __Implements__
    
    - `ConfigInterface`

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


### Constants
```php
const DEFAULT_PATH_DELIMITER = .;
```

### Properties
```php
/**
 * @var string
 */
protected $pathDelimiter;

```

### Methods

```php
public function getPathDelimiter(): string;
```
Gets the default path delimiter


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


```php
public function path( string $path, mixed $defaultValue = null, string $delimiter = null ): mixed;
```
Returns a value from current config using a dot separated path.

```php
echo $config->path("unknown.path", "default", ".");
```


```php
public function setPathDelimiter( string $delimiter = null ): ConfigInterface;
```
Sets the default path delimiter


```php
public function toArray(): array;
```
Converts recursively the object to an array

```php
print_r(
    $config->toArray()
);
```


```php
final protected function internalMerge( array $source, array $target ): array;
```
Performs a merge recursively


```php
protected function setData( mixed $element, mixed $value ): void;
```
Sets the collection data




## Config\ConfigFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/ConfigFactory.zep)


-   __Namespace__

    - `Phalcon\Config`

-   __Uses__
    
    - `Phalcon\Config\Config`
    - `Phalcon\Config\ConfigInterface`
    - `Phalcon\Factory\AbstractFactory`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

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


### Methods

```php
public function __construct( array $services = [] );
```
ConfigFactory constructor.


```php
public function load( mixed $config ): ConfigInterface;
```
Load a config to create a new instance


```php
public function newInstance( string $name, string $fileName, mixed $params = null ): ConfigInterface;
```
Returns a new Config instance


```php
protected function getExceptionClass(): string;
```



```php
protected function getServices(): array;
```
Returns the available adapters


```php
protected function parseConfig( mixed $config ): array;
```





## Config\ConfigInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/ConfigInterface.zep)


-   __Namespace__

    - `Phalcon\Config`

-   __Uses__
    
    - `Phalcon\Support\Collection\CollectionInterface`

-   __Extends__
    
    `CollectionInterface`

-   __Implements__
    

Phalcon\Config\ConfigInterface

Interface for Phalcon\Config\Config class


### Methods

```php
public function getPathDelimiter(): string;
```



```php
public function merge( mixed $toMerge ): ConfigInterface;
```



```php
public function path( string $path, mixed $defaultValue = null, string $delimiter = null ): mixed;
```



```php
public function setPathDelimiter( string $delimiter = null ): ConfigInterface;
```





## Config\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Config/Exception.zep)


-   __Namespace__

    - `Phalcon\Config`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Config will use this class

