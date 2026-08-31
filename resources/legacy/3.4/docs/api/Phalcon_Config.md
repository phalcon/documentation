---
layout: default
title: 'Phalcon\Config'
---
# Class **Phalcon\Config**

*implements* [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php), [Countable](https://php.net/manual/en/class.countable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/config.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Phalcon\Config is designed to simplify the access to, and the use of, configuration data within applications.
It provides a nested object property based user interface for accessing this configuration data within
application code.

```php
<?php

$config = new \Phalcon\Config(
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


## Constants
*string* **DEFAULT_PATH_DELIMITER**

## Methods
public  **__construct** ([*array* $arrayConfig])

Phalcon\Config constructor



public  **offsetExists** (*mixed* $index)

Allows to check whether an attribute is defined using the array-syntax

```php
<?php

var_dump(
    isset($config["database"])
);

```



public  **path** (*mixed* $path, [*mixed* $defaultValue], [*mixed* $delimiter])

Returns a value from current config using a dot separated path.

```php
<?php

echo $config->path("unknown.path", "default", ".");

```



public  **get** (*mixed* $index, [*mixed* $defaultValue])

Gets an attribute from the configuration, if the attribute isn't defined returns null
If the value is exactly null or is not defined the default value will be used instead

```php
<?php

echo $config->get("controllersDir", "../app/controllers/");

```



public  **offsetGet** (*mixed* $index)

Gets an attribute using the array-syntax

```php
<?php

print_r(
    $config["database"]
);

```



public  **offsetSet** (*mixed* $index, *mixed* $value)

Sets an attribute using the array-syntax

```php
<?php

$config["database"] = [
    "type" => "Sqlite",
];

```



public  **offsetUnset** (*mixed* $index)

Unsets an attribute using the array-syntax

```php
<?php

unset($config["database"]);

```



public  **merge** ([Phalcon\Config](Phalcon_Config.md) $config)

Merges a configuration into the current one

```php
<?php

$appConfig = new \Phalcon\Config(
    [
        "database" => [
            "host" => "localhost",
        ],
    ]
);

$globalConfig->merge($appConfig);

```



public  **toArray** ()

Converts recursively the object to an array

```php
<?php

print_r(
    $config->toArray()
);

```



public  **count** ()

Returns the count of properties set in the config

```php
<?php

print count($config);

```
or

```php
<?php

print $config->count();

```



public static  **__set_state** (*array* $data)

Restores the state of a Phalcon\Config object



public static  **setPathDelimiter** ([*mixed* $delimiter])

Sets the default path delimiter



public static  **getPathDelimiter** ()

Gets the default path delimiter



final protected *Config merged config* **_merge** (*Config* $config, [*mixed* $instance])

Helper method for merge configs (forwarding nested config instance)




<hr>

# Class **Phalcon\Config\Adapter\Grouped**

*extends* class [Phalcon\Config](Phalcon_Config.md)

*implements* [Countable](https://php.net/manual/en/class.countable.php), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/config/adapter/grouped.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Reads multiple files (or arrays) and merges them all together.

```php
<?php

use Phalcon\Config\Adapter\Grouped;

$config = new Grouped(
    [
        "path/to/config.php",
        "path/to/config.dist.php",
    ]
);

```

```php
<?php

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
<?php

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
);

```


## Constants
*string* **DEFAULT_PATH_DELIMITER**

## Methods
public  **__construct** (*array* $arrayConfig, [*mixed* $defaultAdapter])

Phalcon\Config\Adapter\Grouped constructor



public  **offsetExists** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Allows to check whether an attribute is defined using the array-syntax

```php
<?php

var_dump(
    isset($config["database"])
);

```



public  **path** (*mixed* $path, [*mixed* $defaultValue], [*mixed* $delimiter]) inherited from [Phalcon\Config](Phalcon_Config.md)

Returns a value from current config using a dot separated path.

```php
<?php

echo $config->path("unknown.path", "default", ".");

```



public  **get** (*mixed* $index, [*mixed* $defaultValue]) inherited from [Phalcon\Config](Phalcon_Config.md)

Gets an attribute from the configuration, if the attribute isn't defined returns null
If the value is exactly null or is not defined the default value will be used instead

```php
<?php

echo $config->get("controllersDir", "../app/controllers/");

```



public  **offsetGet** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Gets an attribute using the array-syntax

```php
<?php

print_r(
    $config["database"]
);

```



public  **offsetSet** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Config](Phalcon_Config.md)

Sets an attribute using the array-syntax

```php
<?php

$config["database"] = [
    "type" => "Sqlite",
];

```



public  **offsetUnset** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Unsets an attribute using the array-syntax

```php
<?php

unset($config["database"]);

```



public  **merge** ([Phalcon\Config](Phalcon_Config.md) $config) inherited from [Phalcon\Config](Phalcon_Config.md)

Merges a configuration into the current one

```php
<?php

$appConfig = new \Phalcon\Config(
    [
        "database" => [
            "host" => "localhost",
        ],
    ]
);

$globalConfig->merge($appConfig);

```



public  **toArray** () inherited from [Phalcon\Config](Phalcon_Config.md)

Converts recursively the object to an array

```php
<?php

print_r(
    $config->toArray()
);

```



public  **count** () inherited from [Phalcon\Config](Phalcon_Config.md)

Returns the count of properties set in the config

```php
<?php

print count($config);

```
or

```php
<?php

print $config->count();

```



public static  **__set_state** (*array* $data) inherited from [Phalcon\Config](Phalcon_Config.md)

Restores the state of a Phalcon\Config object



public static  **setPathDelimiter** ([*mixed* $delimiter]) inherited from [Phalcon\Config](Phalcon_Config.md)

Sets the default path delimiter



public static  **getPathDelimiter** () inherited from [Phalcon\Config](Phalcon_Config.md)

Gets the default path delimiter



final protected *Config merged config* **_merge** (*Config* $config, [*mixed* $instance]) inherited from [Phalcon\Config](Phalcon_Config.md)

Helper method for merge configs (forwarding nested config instance)




<hr>

# Class **Phalcon\Config\Adapter\Ini**

*extends* class [Phalcon\Config](Phalcon_Config.md)

*implements* [Countable](https://php.net/manual/en/class.countable.php), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/config/adapter/ini.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Reads ini files and converts them to Phalcon\Config objects.

Given the next configuration file:

```ini
<?php

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
<?php

$config = new \Phalcon\Config\Adapter\Ini("path/config.ini");

echo $config->phalcon->controllersDir;
echo $config->database->username;

```

PHP constants may also be parsed in the ini file, so if you define a constant
as an ini value before calling the constructor, the constant's value will be
integrated into the results. To use it this way you must specify the optional
second parameter as INI_SCANNER_NORMAL when calling the constructor:

```php
<?php

$config = new \Phalcon\Config\Adapter\Ini(
    "path/config-with-constants.ini",
    INI_SCANNER_NORMAL
);

```


## Constants
*string* **DEFAULT_PATH_DELIMITER**

## Methods
public  **__construct** (*mixed* $filePath, [*mixed* $mode])

Phalcon\Config\Adapter\Ini constructor



protected  **_parseIniString** (*mixed* $path, *mixed* $value)

Build multidimensional array from string

```php
<?php

$this->_parseIniString("path.hello.world", "value for last key");

// result
[
     "path" => [
         "hello" => [
             "world" => "value for last key",
         ],
     ],
];

```



protected  **_cast** (*mixed* $ini)

We have to cast values manually because parse_ini_file() has a poor implementation.



public  **offsetExists** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Allows to check whether an attribute is defined using the array-syntax

```php
<?php

var_dump(
    isset($config["database"])
);

```



public  **path** (*mixed* $path, [*mixed* $defaultValue], [*mixed* $delimiter]) inherited from [Phalcon\Config](Phalcon_Config.md)

Returns a value from current config using a dot separated path.

```php
<?php

echo $config->path("unknown.path", "default", ".");

```



public  **get** (*mixed* $index, [*mixed* $defaultValue]) inherited from [Phalcon\Config](Phalcon_Config.md)

Gets an attribute from the configuration, if the attribute isn't defined returns null
If the value is exactly null or is not defined the default value will be used instead

```php
<?php

echo $config->get("controllersDir", "../app/controllers/");

```



public  **offsetGet** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Gets an attribute using the array-syntax

```php
<?php

print_r(
    $config["database"]
);

```



public  **offsetSet** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Config](Phalcon_Config.md)

Sets an attribute using the array-syntax

```php
<?php

$config["database"] = [
    "type" => "Sqlite",
];

```



public  **offsetUnset** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Unsets an attribute using the array-syntax

```php
<?php

unset($config["database"]);

```



public  **merge** ([Phalcon\Config](Phalcon_Config.md) $config) inherited from [Phalcon\Config](Phalcon_Config.md)

Merges a configuration into the current one

```php
<?php

$appConfig = new \Phalcon\Config(
    [
        "database" => [
            "host" => "localhost",
        ],
    ]
);

$globalConfig->merge($appConfig);

```



public  **toArray** () inherited from [Phalcon\Config](Phalcon_Config.md)

Converts recursively the object to an array

```php
<?php

print_r(
    $config->toArray()
);

```



public  **count** () inherited from [Phalcon\Config](Phalcon_Config.md)

Returns the count of properties set in the config

```php
<?php

print count($config);

```
or

```php
<?php

print $config->count();

```



public static  **__set_state** (*array* $data) inherited from [Phalcon\Config](Phalcon_Config.md)

Restores the state of a Phalcon\Config object



public static  **setPathDelimiter** ([*mixed* $delimiter]) inherited from [Phalcon\Config](Phalcon_Config.md)

Sets the default path delimiter



public static  **getPathDelimiter** () inherited from [Phalcon\Config](Phalcon_Config.md)

Gets the default path delimiter



final protected *Config merged config* **_merge** (*Config* $config, [*mixed* $instance]) inherited from [Phalcon\Config](Phalcon_Config.md)

Helper method for merge configs (forwarding nested config instance)




<hr>

# Class **Phalcon\Config\Adapter\Json**

*extends* class [Phalcon\Config](Phalcon_Config.md)

*implements* [Countable](https://php.net/manual/en/class.countable.php), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/config/adapter/json.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Reads JSON files and converts them to Phalcon\Config objects.

Given the following configuration file:

```php
<?php

{"phalcon":{"baseuri":"\/phalcon\/"},"models":{"metadata":"memory"}}

```

You can read it as follows:

```php
<?php

$config = new Phalcon\Config\Adapter\Json("path/config.json");

echo $config->phalcon->baseuri;
echo $config->models->metadata;

```


## Constants
*string* **DEFAULT_PATH_DELIMITER**

## Methods
public  **__construct** (*mixed* $filePath)

Phalcon\Config\Adapter\Json constructor



public  **offsetExists** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Allows to check whether an attribute is defined using the array-syntax

```php
<?php

var_dump(
    isset($config["database"])
);

```



public  **path** (*mixed* $path, [*mixed* $defaultValue], [*mixed* $delimiter]) inherited from [Phalcon\Config](Phalcon_Config.md)

Returns a value from current config using a dot separated path.

```php
<?php

echo $config->path("unknown.path", "default", ".");

```



public  **get** (*mixed* $index, [*mixed* $defaultValue]) inherited from [Phalcon\Config](Phalcon_Config.md)

Gets an attribute from the configuration, if the attribute isn't defined returns null
If the value is exactly null or is not defined the default value will be used instead

```php
<?php

echo $config->get("controllersDir", "../app/controllers/");

```



public  **offsetGet** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Gets an attribute using the array-syntax

```php
<?php

print_r(
    $config["database"]
);

```



public  **offsetSet** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Config](Phalcon_Config.md)

Sets an attribute using the array-syntax

```php
<?php

$config["database"] = [
    "type" => "Sqlite",
];

```



public  **offsetUnset** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Unsets an attribute using the array-syntax

```php
<?php

unset($config["database"]);

```



public  **merge** ([Phalcon\Config](Phalcon_Config.md) $config) inherited from [Phalcon\Config](Phalcon_Config.md)

Merges a configuration into the current one

```php
<?php

$appConfig = new \Phalcon\Config(
    [
        "database" => [
            "host" => "localhost",
        ],
    ]
);

$globalConfig->merge($appConfig);

```



public  **toArray** () inherited from [Phalcon\Config](Phalcon_Config.md)

Converts recursively the object to an array

```php
<?php

print_r(
    $config->toArray()
);

```



public  **count** () inherited from [Phalcon\Config](Phalcon_Config.md)

Returns the count of properties set in the config

```php
<?php

print count($config);

```
or

```php
<?php

print $config->count();

```



public static  **__set_state** (*array* $data) inherited from [Phalcon\Config](Phalcon_Config.md)

Restores the state of a Phalcon\Config object



public static  **setPathDelimiter** ([*mixed* $delimiter]) inherited from [Phalcon\Config](Phalcon_Config.md)

Sets the default path delimiter



public static  **getPathDelimiter** () inherited from [Phalcon\Config](Phalcon_Config.md)

Gets the default path delimiter



final protected *Config merged config* **_merge** (*Config* $config, [*mixed* $instance]) inherited from [Phalcon\Config](Phalcon_Config.md)

Helper method for merge configs (forwarding nested config instance)




<hr>

# Class **Phalcon\Config\Adapter\Php**

*extends* class [Phalcon\Config](Phalcon_Config.md)

*implements* [Countable](https://php.net/manual/en/class.countable.php), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/config/adapter/php.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Reads php files and converts them to Phalcon\Config objects.

Given the next configuration file:

```php
<?php

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
<?php

$config = new \Phalcon\Config\Adapter\Php("path/config.php");

echo $config->phalcon->controllersDir;
echo $config->database->username;

```


## Constants
*string* **DEFAULT_PATH_DELIMITER**

## Methods
public  **__construct** (*mixed* $filePath)

Phalcon\Config\Adapter\Php constructor



public  **offsetExists** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Allows to check whether an attribute is defined using the array-syntax

```php
<?php

var_dump(
    isset($config["database"])
);

```



public  **path** (*mixed* $path, [*mixed* $defaultValue], [*mixed* $delimiter]) inherited from [Phalcon\Config](Phalcon_Config.md)

Returns a value from current config using a dot separated path.

```php
<?php

echo $config->path("unknown.path", "default", ".");

```



public  **get** (*mixed* $index, [*mixed* $defaultValue]) inherited from [Phalcon\Config](Phalcon_Config.md)

Gets an attribute from the configuration, if the attribute isn't defined returns null
If the value is exactly null or is not defined the default value will be used instead

```php
<?php

echo $config->get("controllersDir", "../app/controllers/");

```



public  **offsetGet** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Gets an attribute using the array-syntax

```php
<?php

print_r(
    $config["database"]
);

```



public  **offsetSet** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Config](Phalcon_Config.md)

Sets an attribute using the array-syntax

```php
<?php

$config["database"] = [
    "type" => "Sqlite",
];

```



public  **offsetUnset** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Unsets an attribute using the array-syntax

```php
<?php

unset($config["database"]);

```



public  **merge** ([Phalcon\Config](Phalcon_Config.md) $config) inherited from [Phalcon\Config](Phalcon_Config.md)

Merges a configuration into the current one

```php
<?php

$appConfig = new \Phalcon\Config(
    [
        "database" => [
            "host" => "localhost",
        ],
    ]
);

$globalConfig->merge($appConfig);

```



public  **toArray** () inherited from [Phalcon\Config](Phalcon_Config.md)

Converts recursively the object to an array

```php
<?php

print_r(
    $config->toArray()
);

```



public  **count** () inherited from [Phalcon\Config](Phalcon_Config.md)

Returns the count of properties set in the config

```php
<?php

print count($config);

```
or

```php
<?php

print $config->count();

```



public static  **__set_state** (*array* $data) inherited from [Phalcon\Config](Phalcon_Config.md)

Restores the state of a Phalcon\Config object



public static  **setPathDelimiter** ([*mixed* $delimiter]) inherited from [Phalcon\Config](Phalcon_Config.md)

Sets the default path delimiter



public static  **getPathDelimiter** () inherited from [Phalcon\Config](Phalcon_Config.md)

Gets the default path delimiter



final protected *Config merged config* **_merge** (*Config* $config, [*mixed* $instance]) inherited from [Phalcon\Config](Phalcon_Config.md)

Helper method for merge configs (forwarding nested config instance)




<hr>

# Class **Phalcon\Config\Adapter\Yaml**

*extends* class [Phalcon\Config](Phalcon_Config.md)

*implements* [Countable](https://php.net/manual/en/class.countable.php), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/config/adapter/yaml.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Reads YAML files and converts them to Phalcon\Config objects.

Given the following configuration file:

```php
<?php

phalcon:
  baseuri:        /phalcon/
  controllersDir: !approot  /app/controllers/
models:
  metadata: memory

```

You can read it as follows:

```php
<?php

define(
    "APPROOT",
    dirname(__DIR__)
);

$config = new \Phalcon\Config\Adapter\Yaml(
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


## Constants
*string* **DEFAULT_PATH_DELIMITER**

## Methods
public  **__construct** (*mixed* $filePath, [*array* $callbacks])

Phalcon\Config\Adapter\Yaml constructor



public  **offsetExists** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Allows to check whether an attribute is defined using the array-syntax

```php
<?php

var_dump(
    isset($config["database"])
);

```



public  **path** (*mixed* $path, [*mixed* $defaultValue], [*mixed* $delimiter]) inherited from [Phalcon\Config](Phalcon_Config.md)

Returns a value from current config using a dot separated path.

```php
<?php

echo $config->path("unknown.path", "default", ".");

```



public  **get** (*mixed* $index, [*mixed* $defaultValue]) inherited from [Phalcon\Config](Phalcon_Config.md)

Gets an attribute from the configuration, if the attribute isn't defined returns null
If the value is exactly null or is not defined the default value will be used instead

```php
<?php

echo $config->get("controllersDir", "../app/controllers/");

```



public  **offsetGet** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Gets an attribute using the array-syntax

```php
<?php

print_r(
    $config["database"]
);

```



public  **offsetSet** (*mixed* $index, *mixed* $value) inherited from [Phalcon\Config](Phalcon_Config.md)

Sets an attribute using the array-syntax

```php
<?php

$config["database"] = [
    "type" => "Sqlite",
];

```



public  **offsetUnset** (*mixed* $index) inherited from [Phalcon\Config](Phalcon_Config.md)

Unsets an attribute using the array-syntax

```php
<?php

unset($config["database"]);

```



public  **merge** ([Phalcon\Config](Phalcon_Config.md) $config) inherited from [Phalcon\Config](Phalcon_Config.md)

Merges a configuration into the current one

```php
<?php

$appConfig = new \Phalcon\Config(
    [
        "database" => [
            "host" => "localhost",
        ],
    ]
);

$globalConfig->merge($appConfig);

```



public  **toArray** () inherited from [Phalcon\Config](Phalcon_Config.md)

Converts recursively the object to an array

```php
<?php

print_r(
    $config->toArray()
);

```



public  **count** () inherited from [Phalcon\Config](Phalcon_Config.md)

Returns the count of properties set in the config

```php
<?php

print count($config);

```
or

```php
<?php

print $config->count();

```



public static  **__set_state** (*array* $data) inherited from [Phalcon\Config](Phalcon_Config.md)

Restores the state of a Phalcon\Config object



public static  **setPathDelimiter** ([*mixed* $delimiter]) inherited from [Phalcon\Config](Phalcon_Config.md)

Sets the default path delimiter



public static  **getPathDelimiter** () inherited from [Phalcon\Config](Phalcon_Config.md)

Gets the default path delimiter



final protected *Config merged config* **_merge** (*Config* $config, [*mixed* $instance]) inherited from [Phalcon\Config](Phalcon_Config.md)

Helper method for merge configs (forwarding nested config instance)




<hr>

# Class **Phalcon\Config\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/config/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Config\Factory**

*extends* abstract class [Phalcon\Factory](Phalcon_Factory.md)

*implements* [Phalcon\FactoryInterface](Phalcon_Factory.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/config/factory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Loads Config Adapter class using 'adapter' option, if no extension is provided it will be added to filePath

```php
<?php

use Phalcon\Config\Factory;

$options = [
    "filePath" => "path/config",
    "adapter"  => "php",
];
$config = Factory::load($options);

```


## Methods
public static  **load** ([Phalcon\Config](Phalcon_Config.md) | *array* $config)





protected static  **loadClass** (*mixed* $namespace, *mixed* $config)

...
