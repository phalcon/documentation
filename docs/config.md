# Config Component
- - -

## Overview

Almost all applications require configuration data for proper operation. This configuration includes parameters and initial settings such as the location of log files, database connection values, registered services, etc. The [Phalcon\Config\Config][config] is designed to store this configuration data in an easy, object-oriented way.

It represents a tree whose leaves are configuration values. Each child node of a [Phalcon\Config\Config][config] is named and is either an external node that contains a configuration value or a sub-collection which is itself a [Phalcon\Config\Config][config] instance holding nested values. It provides methods to access such configuration collections. Each [Phalcon\Config\Config][config] instance represents a virtual object that can be traversed in the fashion of true object properties.

This class can be instantiated using a PHP array directly or by reading configuration files from various formats, as described further down in the adapters section. [Phalcon\Config\Config][config] extends the [Phalcon\Support\Collection][collection] object, inheriting its functionality.

```php
<?php

use Phalcon\Config\Config;

$config = new Config(
    [
        'app' => [
            'baseUri'  => getenv('APP_BASE_URI'),
            'env'      => getenv('APP_ENV'),
            'name'     => getenv('APP_NAME'),
            'timezone' => getenv('APP_TIMEZONE'),
            'url'      => getenv('APP_URL'),
            'version'  => getenv('VERSION'),
            'time'     => microtime(true),
        ],
    ]
);

echo $config->get('app')->get('name');  // PHALCON
echo $config->app->name;                // PHALCON
echo $config->path('app.name');         // PHALCON
```

## Factory
### `newInstance`

The allowed values for `name`, which correspond to a different adapter class are:
Creating a `Phalcon\Config\Config` or any supporting adapter class (`Phalcon\Config\Adapter\*`) is straightforward using the `new` keyword. However, Phalcon offers the `Phalcon\Config\ConfigFactory` class for easy instantiation of config objects. Calling `newInstance` with the `name`, `fileName`, and a `parameters` array will return the new config object.

The allowed values for `name`, corresponding to different adapter classes, are:

| Name      | Adapter                                   |
|-----------|-------------------------------------------|
| `grouped` | [Phalcon\Config\Adapter\Grouped][grouped] |
| `ini`     | [Phalcon\Config\Adapter\Ini][ini]         |
| `json`    | [Phalcon\Config\Adapter\Json][json]       |
| `php`     | [Phalcon\Config\Adapter\Php][php]         |
| `yaml`    | [Phalcon\Config\Adapter\Yaml][yaml]       |

For example, creating a new [PHP array][php] based adapter:

Given a PHP configuration file `/app/storage/config.php`

```php
<?php

return [
    'app' => [
        'baseUri'  => getenv('APP_BASE_URI'),
        'env'      => getenv('APP_ENV'),
        'name'     => getenv('APP_NAME'),
        'timezone' => getenv('APP_TIMEZONE'),
        'url'      => getenv('APP_URL'),
        'version'  => getenv('VERSION'),
        'time'     => microtime(true),
    ],
];
```

you can load it as follows:

```php
<?php

use Phalcon\Config\ConfigFactory;

$fileName = '/app/storage/config.php';
$factory  = new ConfigFactory();

$config = $factory->newInstance('php', $fileName);
```

The third parameter for `newInstance`, an array, is not required in this case. However, other adapter types may use it, so you can supply it depending on the adapter type. More information on what can be contained in the `parameters` array can be found in the adapters section.

### `load`

The `Phalcon\Config\ConfigFactory` also offers the `load` method, which accepts a string or an array as a parameter. If a string is passed, it is treated as the `fileName` of the file to load, and the file extension determines the adapter used.

```php
<?php

use Phalcon\Config\ConfigFactory;

$fileName = '/app/storage/config.php';
$factory  = new ConfigFactory();

$config = $factory->load($fileName);
```

If an array is passed, the `adapter` element is required to specify the adapter to create. Additionally, `filePath` is required to specify where the file to load is located. More information on what can be contained in the array can be found in the adapters section.

Given an INI configuration file `/app/storage/config.ini`

```ini
[config]
adapter = ini
filePath = PATH_DATA"storage/config"
mode = 1
```

the `load` function will create an [Ini][ini] config object:

```php
<?php

use Phalcon\Config\ConfigFactory;

$fileName = '/app/storage/config.ini';
$factory  = new ConfigFactory();

$config = $factory->load($fileName);
```

## Exceptions

Any exceptions thrown in the [Phalcon\Config\Config][config] component will be of type [Phalcon\Config\Exception][config-exception]. You can use this exception to selectively catch exceptions thrown only from this component.

php


```php
<?php

use Phalcon\Config\Exception;
use Phalcon\Mvc\Controller;

class IndexController extends Controller
{
    public function index()
    {
        try {
            // Get some configuration values
            $this->config->database->dbname;
        } catch (Exception $ex) {
            echo $ex->getMessage();
        }
    }
}
```

## Native Array
The [Phalcon\Config\Config][config] component accepts a PHP array in the constructor and loads it up.

```php
<?php

use Phalcon\Config\Config;

$config = new Config(
    [
        'app' => [
            'baseUri'  => getenv('APP_BASE_URI'),  // '/'
            'env'      => getenv('APP_ENV'),       // 3
            'name'     => getenv('APP_NAME'),      // 'PHALCON'
            'timezone' => getenv('APP_TIMEZONE'),  // 'UTC'
            'url'      => getenv('APP_URL'),       // 'http://127.0.0.1',
            'version'  => getenv('VERSION'),       // '0.1'
            'time'     => microtime(true),         // 
        ],
    ]
);
```

## Get
### Magic

Retrieve data using the key as a property (magic method):

```php
<?php

echo $config->app->name; // PHALCON
```

### `get()`

Use the `get()` method and chain it to traverse nested objects:

```php
<?php

echo $config
        ->get('app')
        ->get('name');  // PHALCON
```

Since [Phalcon\Config\Config][config] extends [Phalcon\Support\Collection][collection], you can also pass a second parameter in `get()` that will act as the default value returned if the config element is not defined.

## Path

Using `path()` allows for easy retrieval of a sub-item, however deep it might be. The mandatory argument is a string indicating the requested node's path. The string is a pathname containing the names of each of the node's ancestors and its own, starting from level 1. The root node's pathname is the empty string and a level 1 node's pathname is its own name. The pathname of a node at level 2 or more consists of its parent's pathname followed by the delimiter (by default `.`) followed by its name.

```php
<?php

echo $config->get('app')->get('name');  // PHALCON

echo $config->path('app.name');  // PHALCON
```

`path()` also accepts a `defaultValue` which, if set, will be returned if the element is not found or is not set in the config object. The last parameter `path()` accepts is the delimiter which separates the names in the pathname (mandatory argument).

```php
<?php

echo $config->path('app-name', 'default', '-');     // PHALCON
echo $config->path('app-unknown', 'default', '-');  // default
```

Use the `getPathDelimiter()` and `setPathDelimiter()` methods to get and set the delimiter that the Config will use by default.

Functional programming in conjunction with `path()` can be used to obtain configuration data:

```php
<?php

use Phalcon\Di\Di;
use Phalcon\Config\Config;

/**
 * @return mixed|Config
 */
function config() {
    $args = func_get_args();
    $config = Di::getDefault()->getShared('config');

    if (empty($args)) {
       return $config;
    }

    return call_user_func_array(
        [$config, 'path'],
        $args
    );
}
```

and then you can use it:

```php
<?php

echo config('app-name', 'default', '-');     // PHALCON
echo config('app-unknown', 'default', '-');  // default
```

!!! warning "NOTE"

    If the keys from your data contain special characters such as `.` or `-`, and you choose to use the same character for your delimiter when using the `path()` method, you will not get the desired results back, since `path()` will interpret the delimiter as a new nested level.

## Merge

There are times when we might need to merge configuration data coming from two different config objects. For instance, we might have one config object that contains our base/default settings, while a second config object loads options that are specific to the system the application is running on (i.e. test, development, production, etc.). The system-specific data can come from a `.env` file and loaded with a [DotEnv][dotenv] library.

In the above scenario, we will need to merge the second configuration object with the first one. `merge()` allows us to do this, merging the two config objects recursively.

```php
<?php

use Phalcon\Config\Config;
use josegonzalez\Dotenv\Loader;

$baseConfig = new Config(
    [
        'app' => [
            'baseUri'  => '/',
            'env'      => 3,
            'name'     => 'PHALCON',
            'timezone' => 'UTC',
            'url'      => 'http://127.0.0.1',
            'version'  => '0.1',
        ],
    ]
);


// .env
// APP_NAME='MYAPP'
// APP_TIMEZONE='America/New_York'

$loader = (new josegonzalez\Dotenv\Loader('/app/.env'))
    ->parse()
    ->toEnv()
;

$envConfig= new Config(
    [
        'app'     => [
            'baseUri'  => getenv('APP_BASE_URI'),  // '/'
            'env'      => getenv('APP_ENV'),       // 3
            'name'     => getenv('APP_NAME'),      // 'MYAPP'
            'timezone' => getenv('APP_TIMEZONE'),  // 'America/New_York'
            'url'      => getenv('APP_URL'),       // 'http://127.0.0.1',
            'version'  => getenv('VERSION'),       // '0.1'
            'time'     => microtime(true),         //
        ],
        'logging' => true,
    ]
);

$baseConfig->merge($envConfig);

echo $baseConfig
        ->get('app')
        ->get('name');  // MYAPP
echo $baseConfig
        ->get('app')
        ->get('timezone');  // America/New_York
echo $baseConfig
        ->get('app')
        ->get('time');  // 1562909409.6162
```

The merged object will be:

```bash
Phalcon\Config Object
(
    [app] => Phalcon\Config Object
        (
            [baseUri]  => '/',
            [env]      => 3,
            [name]     => 'MYAPP',
            [timezone] => 'America/New_York',
            [url]      => 'http://127.0.0.1',
            [version]  => '0.1',
            [time]     => microtime(true),
        )
    [logging] => true
)
``` 

## Has
Using `has()` you can determine if a particular key exists in the collection.

## Set
The component also supports `set()` which allows you to programmatically add or change loaded data.

## Serialization
The object can be serialized and saved in a file or a cache service using the `serialize()` method. The reverse can be achieved using the `unserialize` method

## `toArray` / `toJson`
If you need to get the object back as an array `toArray()` and `toJson()` are available.

For additional information, you can check the [Phalcon\Support\Collection][support-collection] documentation.

## Adapters

In addition to the core component [Phalcon\Config\Config][config], designed to accept either a string (file name and path) or a native PHP array, several adapters are available. These adapters facilitate the reading of various file types to load configuration data.

### Available Adapters

| Class                                     | Description                                                                                         |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [Phalcon\Config\Adapter\Grouped][grouped] | Loads different configuration files based on identical or different adapters.                       |
| [Phalcon\Config\Adapter\Ini][ini]         | Loads configuration from INI files. Internally the adapter uses the PHP function `parse_ini_file`.  |
| [Phalcon\Config\Adapter\Json][json]       | Loads configuration from JSON files. Requires the PHP `json` extension to be present in the system. |
| [Phalcon\Config\Adapter\Php][php]         | Loads configuration from PHP multidimensional arrays. This adapter offers the best performance.     |
| [Phalcon\Config\Adapter\Yaml][yaml]       | Loads configuration from YAML files. Requires the PHP `yaml` extension to be present in the system. |

### Grouped

The [Phalcon\Config\Adapter\Grouped][grouped] adapter allows the creation of a [Phalcon\Config\Config][config] object from multiple sources without creating each object separately. It accepts an array configuration with necessary data, defaulting to php as the default adapter.

Constructor parameters for the multidimensional array include:

- `adapter` - the adapter to be used
- `filePath` - the path of the configuration file

```php
<?php

use Phalcon\Config\Adapter\Grouped;

$options = [
    [
        'adapter'  => 'php',
        'filePath' => '/apps/storage/config.php',
    ],
    [
        'adapter'  => 'ini',
        'filePath' => '/apps/storage/database.ini',
        'mode'     => INI_SCANNER_NORMAL,
    ],
    [
        'adapter'  => 'json',
        'filePath' => '/apps/storage/override.json',
    ],
];

$config = new Grouped($options);
```

The keys set for each array element (representing one configuration file) mirror the constructor parameters of each adapter. More information regarding the parameters required or optional can be found in the relevant section describing each adapter.

You can also use `array` as the adapter value. If you choose to do so, you will need to use `config` as the second key, with values that represent the actual values of the configuration you want to load.

```php
<?php

use Phalcon\Config\Adapter\Grouped;

$options = [
    [
        'adapter'  => 'php',
        'filePath' => '/apps/storage/config.php',
    ],
    [
        'adapter'  => 'array',
        'config'   => [
            'app' => [
                'baseUri'  => '/',
                'env'      => 3,
                'name'     => 'PHALCON',
                'timezone' => 'UTC',
                'url'      => 'http://127.0.0.1',
                'version'  => '0.1',
            ],
        ],
    ],
];

$config = new Grouped($options);
```

Lastly, a [Phalcon\Config\Config][config] object can be used as an option for the grouped object.

```php
<?php

use Phalcon\Config\Config;
use Phalcon\Config\Adapter\Grouped;

$baseConfig = new Config(
    [
        'app' => [
            'baseUri'  => '/',
            'env'      => 3,
            'name'     => 'PHALCON',
        ],
    ]
);

$options = [
    $baseConfig,
    [
        'adapter'  => 'array',
        'config'   => [
            'app' => [
                'timezone' => 'UTC',
                'url'      => 'http://127.0.0.1',
                'version'  => '0.1',
            ],
        ],
    ],
];

$config = new Grouped($options);
```

### Ini

The [Phalcon\Config\Adapter\Ini][ini] adapter uses the optimized PHP function [parse_ini_file][parse-ini-file] to read configuration from INI files. Each section represents a top-level element, and sub-elements are nested if keys contain the `.` separator. The default scanning method is `INI_SCANNER_RAW`, but this can be overridden by passing a different mode in the constructor.

Example INI file:

```ini
[database]
adapter  = Mysql
host     = localhost
username = scott
password = cheetah
dbname   = test_db

[config]
adapter  = ini
filePath = PATH_DATA"storage/config"
mode = 1

[models]
metadata.adapter  = 'Memory'
```

Usage:

```php
<?php

use Phalcon\Config\Adapter\Ini;

$fileName = '/apps/storage/config.ini';
$mode     =  INI_SCANNER_NORMAL;
$config   = new Ini($fileName, $mode);

echo $config
        ->get('database')
        ->get('host');       // localhost
echo $config
        ->get('models')
        ->get('metadata')
        ->get('adapter');    // Memory
```

When using [Phalcon\Config\ConfigFactory][config-configfactory], set the mode as a parameter:

```php
<?php

use Phalcon\Cache\CacheFactory;

$fileName = '/app/storage/config.ini';
$factory  = new ConfigFactory();

$options = [
    'adapter'  => 'ini',
    'filePath' => $fileName,
    'mode'     => INI_SCANNER_NORMAL, 
];

$config = $factory->load($options);
```

Or when using the `newInstance()`:

```php
<?php

use Phalcon\Cache\CacheFactory;

$fileName = '/app/storage/config.ini';
$factory  = new ConfigFactory();

$params = [
    'mode' => INI_SCANNER_NORMAL, 
];

$config = $factory->newinstance('ini', $fileName, $params);
```

### Json

!!! info "NOTE"

    Requires PHP's `json` extension to be present in the system

JSON is a widely used format, suitable for transporting data between applications and storing configuration data. [Phalcon\Config\Adapter\Json][json] internally uses `json_decode()` to convert a JSON file to a PHP native array and parse it accordingly.

Example JSON file:

```json
{
  "database": {
    "adapter": "Mysql",
    "host": "localhost",
    "username": "scott",
    "password": "cheetah",
    "dbname": "test_db"
  },
  "models": {
    "metadata": {
      "adapter": "Memory"
    }
  }
}
```

Usage:

```php
<?php

use Phalcon\Config\Adapter\Json;

$fileName = '/apps/storage/config.json';
$config   = new Json($fileName);

echo $config
        ->get('database')
        ->get('host');       // localhost
echo $config
        ->get('models')
        ->get('metadata')
        ->get('adapter');    // Memory
```

For [Phalcon\Config\ConfigFactory][config-configfactory], pass the file name:

```php
<?php

use Phalcon\Cache\CacheFactory;

$fileName = '/app/storage/config.json';
$factory  = new ConfigFactory();

$options = [
    'adapter'  => 'json',
    'filePath' => $fileName,
];

$config = $factory->load($options);
```

or when using the `newInstance()`:

```php
<?php

use Phalcon\Cache\CacheFactory;

$fileName = '/app/storage/config.json';
$factory  = new ConfigFactory();

$config = $factory->newinstance('json', $fileName);
```

### Php

The [Phalcon\Config\Adapter\Php][php] adapter reads a PHP file that returns an array, loading it into the [Phalcon\Config\Config][config] object. Configuration can be stored as a PHP array in a file, and the adapter will read and parse it accordingly.

Example PHP file:

```php
<?php

return [ 
    'database' => [
        'adapter'  => 'Mysql',
        'host'     => 'localhost',
        'username' => 'scott',
        'password' => 'cheetah',
        'dbname'   => 'test_db',  
    ],
    'models'   => [
        'metadata' => [
            'adapter' => 'Memory',
        ],
    ],
];
```

Usage:

```php
<?php

use Phalcon\Config\Adapter\Php;

$fileName = '/apps/storage/config.php';
$config   = new Php($fileName);

echo $config
        ->get('database')
        ->get('host');       // localhost
echo $config
        ->get('models')
        ->get('metadata')
        ->get('adapter');    // Memory
```

For [Phalcon\Config\ConfigFactory][config-configfactory], pass the file name:

```php
<?php

use Phalcon\Cache\CacheFactory;

$fileName = '/app/storage/config.php';
$factory  = new ConfigFactory();

$options = [
    'adapter'  => 'php',
    'filePath' => $fileName,
];

$config = $factory->load($options);
```

or when using the `newInstance()`:

```php
<?php

use Phalcon\Cache\CacheFactory;

$fileName = '/app/storage/config.php';
$factory  = new ConfigFactory();

$config = $factory->newinstance('php', $fileName);
```

### Yaml

!!! info "NOTE"

    Requires PHP's yaml extension to be present in the system

YAML is another common file format, and [Phalcon\Config\Adapter\Yaml][yaml] requires the `yaml` PHP extension. It uses the PHP function [yaml_parse_file][yaml-parse-file] to read YAML files. The adapter accepts a second parameter, callbacks, as an array supplying content handlers for YAML nodes.

Example YAML file:

```yaml
app:
  baseUri: /
  env: 3
  name: PHALCON
  timezone: UTC
  url: http://127.0.0.1
  version: 0.1
  time: 1562960897.712697
models:
  metadata:
    adapter: Memory
loggers:
  handlers:
    0:
      name: stream
    1:
      name: redis
```

Usage:

```php
<?php

use Phalcon\Config\Adapter\Yaml;

define("APPROOT", dirname(__DIR__));

$fileName  = '/apps/storage/config.yml';
$callbacks = [
    "!approot" => function($value) {
        return APPROOT . $value;
    },
];
$config    = new Yaml($fileName, $callbacks);

echo $config
        ->get('database')
        ->get('host');       // localhost
echo $config
        ->get('models')
        ->get('metadata')
        ->get('adapter');    // Memory
```

For [Phalcon\Config\ConfigFactory][config-configfactory], set the mode as a parameter:

```php
<?php

use Phalcon\Cache\CacheFactory;

define("APPROOT", dirname(__DIR__));

$fileName = '/apps/storage/config.yml';
$factory  = new ConfigFactory();
$options  = [
    'adapter'  => 'yaml',
    'filePath'  => $fileName,
    'callbacks' => [
        "!approot" => function($value) {
            return APPROOT . $value;
        },
    ],
];

$config = $factory->load($options);
```

or when using the `newInstance()`:

```php
<?php

use Phalcon\Cache\CacheFactory;

define("APPROOT", dirname(__DIR__));

$fileName  = '/app/storage/config.yaml';
$factory   = new ConfigFactory();
$callbacks = [
    "!approot" => function($value) {
        return APPROOT . $value;
    },
];

$config = $factory->newinstance('yaml', $fileName, $callbacks);
```

### Custom
For additional adapters, explore the [Phalcon Incubator][phalcon-incubator].

## Dependency Injection

As with most Phalcon components, you can store the [Phalcon\Config\Config][config] object in your [Phalcon\Di\Di][di] container. By doing so, you can access your configuration object from controllers, models, views, and any component that implements `Injectable`.

Example of service registration and access in the container:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Config\Config;

// Create a container
$container = new FactoryDefault();

$container->set(
    'config',
    function () {
        $configData = require 'config/config.php';

        return new Config($configData);
    }
);
```

The component is now accessible in controllers using the `config` key:

```php
<?php

use Phalcon\Mvc\Controller;
use Phalcon\Config\Config;

/**
 * @property Config $config
 */
class MyController extends Controller
{
    private function getDatabaseName()
    {
        return $this->config->database->dbname;
    }
}
```

Also in views (Volt syntax)

```twig
{{ config.database.dbname }}
```

[config]: api/phalcon_config.md
[collection]: support-collection.md
[phalcon-incubator]: https://github.com/phalcon/incubator
[grouped]: api/phalcon_config.md#configadaptergrouped
[ini]: api/phalcon_config.md#configadapterini
[json]: api/phalcon_config.md#configadapterjson
[php]: api/phalcon_config.md#configadapterphp
[yaml]: api/phalcon_config.md#configadapteryaml
[config-config]: api/phalcon_config.md#configconfig
[config-configfactory]: api/phalcon_config.md#configconfigfactory
[config-exception]: api/phalcon_config.md#configexception
[dotenv]: https://github.com/josegonzalez/php-dotenv
[parse-ini-file]: https://www.php.net/manual/en/function.parse-ini-file.php
[yaml-parse-file]: https://www.php.net/manual/en/function.yaml-parse-file.php
[di]: di.md
