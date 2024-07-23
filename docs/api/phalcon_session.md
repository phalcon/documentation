---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Session\Adapter\AbstractAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Session/Adapter/AbstractAdapter.zep)


-   __Namespace__

    - `Phalcon\Session\Adapter`

-   __Uses__
    
    - `Phalcon\Storage\Adapter\AdapterInterface`
    - `SessionHandlerInterface`

-   __Extends__
    

-   __Implements__
    
    - `SessionHandlerInterface`

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE
file that was distributed with this source code.


### Properties
```php
/**
 * @var AdapterInterface
 */
protected $adapter;

```

### Methods

```php
public function close(): bool;
```
Close


```php
public function destroy( mixed $id ): bool;
```
Destroy


```php
public function gc( int $max_lifetime ): int | false;
```
Garbage Collector


```php
public function open( mixed $path, mixed $name ): bool;
```
Open


```php
public function read( mixed $id ): string;
```
Read


```php
public function write( mixed $id, mixed $data ): bool;
```
Write


```php
protected function getArrVal( array $collection, mixed $index, mixed $defaultValue = null ): mixed;
```
@todo Remove this when we get traits




## Session\Adapter\Libmemcached 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Session/Adapter/Libmemcached.zep)


-   __Namespace__

    - `Phalcon\Session\Adapter`

-   __Uses__
    
    - `Phalcon\Storage\AdapterFactory`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Phalcon\Session\Adapter\Libmemcached


### Methods

```php
public function __construct( AdapterFactory $factory, array $options = [] );
```
Libmemcached constructor.




## Session\Adapter\Noop 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Session/Adapter/Noop.zep)


-   __Namespace__

    - `Phalcon\Session\Adapter`

-   __Uses__
    
    - `SessionHandlerInterface`

-   __Extends__
    

-   __Implements__
    
    - `SessionHandlerInterface`

Phalcon\Session\Adapter\Noop

This is an "empty" or null adapter. It can be used for testing or any
other purpose that no session needs to be invoked

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Noop;

$session = new Manager();
$session->setAdapter(new Noop());
```


### Properties
```php
/**
 * The connection of some adapters
 *
 * @var null
 */
protected $connection;

/**
 * Session options
 *
 * @var array
 */
protected $options;

/**
 * Session prefix
 *
 * @var string
 */
protected $prefix = ;

/**
 * Time To Live
 *
 * @var int
 */
protected $ttl = 8600;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function close(): bool;
```
Close


```php
public function destroy( mixed $id ): bool;
```
Destroy


```php
public function gc( int $max_lifetime ): int | false;
```
Garbage Collector


```php
public function open( mixed $path, mixed $name ): bool;
```
Open


```php
public function read( mixed $id ): string;
```
Read


```php
public function write( mixed $id, mixed $data ): bool;
```
Write


```php
protected function getPrefixedName( mixed $name ): string;
```
Helper method to get the name prefixed




## Session\Adapter\Redis 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Session/Adapter/Redis.zep)


-   __Namespace__

    - `Phalcon\Session\Adapter`

-   __Uses__
    
    - `Phalcon\Storage\AdapterFactory`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Phalcon\Session\Adapter\Redis


### Methods

```php
public function __construct( AdapterFactory $factory, array $options = [] );
```
Constructor




## Session\Adapter\Stream 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Session/Adapter/Stream.zep)


-   __Namespace__

    - `Phalcon\Session\Adapter`

-   __Uses__
    
    - `Phalcon\Session\Exception`

-   __Extends__
    
    `Noop`

-   __Implements__
    

Phalcon\Session\Adapter\Stream

This is the file based adapter. It stores sessions in a file based system

```php
<?php

use Phalcon\Session\Manager;
use Phalcon\Session\Adapter\Stream;

$session = new Manager();
$files = new Stream(
    [
        'savePath' => '/tmp',
    ]
);
$session->setAdapter($files);
```

@property array  $options
@property string $prefix
@property string $path


### Properties
```php
/**
 * @var string
 */
private $path = ;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function destroy( mixed $id ): bool;
```



```php
public function gc( int $max_lifetime ): int | false;
```
Garbage Collector


```php
public function open( mixed $path, mixed $name ): bool;
```
   Ignore the savePath and use local defined path
   
   


```php
public function read( mixed $id ): string;
```
Reads data from the adapter


```php
public function write( mixed $id, mixed $data ): bool;
```



```php
protected function getArrVal( array $collection, mixed $index, mixed $defaultValue = null, string $cast = null ): mixed;
```
@todo Remove this when we get traits


```php
protected function phpFileExists( string $filename );
```



```php
protected function phpFileGetContents( string $filename );
```



```php
protected function phpFilePutContents( string $filename, mixed $data, int $flags = int, mixed $context = null );
```



```php
protected function phpFopen( string $filename, string $mode );
```



```php
protected function phpIniGet( string $varname ): string;
```
Gets the value of a configuration option


```php
protected function phpIsWritable( string $filename ): bool;
```
Tells whether the filename is writable




## Session\Bag 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Session/Bag.zep)


-   __Namespace__

    - `Phalcon\Session`

-   __Uses__
    
    - `Phalcon\Di\Di`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Di\InjectionAwareInterface`
    - `Phalcon\Session\ManagerInterface`
    - `Phalcon\Support\Collection`

-   __Extends__
    
    `Collection`

-   __Implements__
    
    - `BagInterface`
    - `InjectionAwareInterface`

Phalcon\Session\Bag

This component helps to separate session data into "namespaces". Working by
this way you can easily create groups of session variables into the
application

```php
$user = new \Phalcon\Session\Bag("user");

$user->name = "Kimbra Johnson";
$user->age  = 22;
```

@property DiInterface|null $container
@property string           $name
@property ManagerInterface $session;


### Properties
```php
/**
 * @var DiInterface|null
 */
private $container;

/**
 * Session Bag name
 *
 * @var string
 */
private $name;

/**
 * @var ManagerInterface
 */
private $session;

```

### Methods

```php
public function __construct( ManagerInterface $session, string $name );
```



```php
public function clear(): void;
```
Destroys the session bag


```php
public function getDI(): DiInterface;
```
Returns the DependencyInjector container


```php
public function init( array $data = [] ): void;
```
Initialize internal array


```php
public function remove( string $element ): void;
```
Removes a property from the internal bag


```php
public function set( string $element, mixed $value ): void;
```
Sets a value in the session bag


```php
public function setDI( DiInterface $container ): void;
```
Sets the DependencyInjector container




## Session\BagInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Session/BagInterface.zep)


-   __Namespace__

    - `Phalcon\Session`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Session\BagInterface

Interface for Phalcon\Session\Bag


### Methods

```php
public function __get( string $element ): mixed;
```



```php
public function __isset( string $element ): bool;
```



```php
public function __set( string $element, mixed $value ): void;
```



```php
public function __unset( string $element ): void;
```



```php
public function clear(): void;
```



```php
public function get( string $element, mixed $defaultValue = null, string $cast = null ): mixed;
```



```php
public function has( string $element ): bool;
```



```php
public function init( array $data = [] ): void;
```



```php
public function remove( string $element ): void;
```



```php
public function set( string $element, mixed $value ): void;
```





## Session\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Session/Exception.zep)


-   __Namespace__

    - `Phalcon\Session`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Phalcon\Session\Exception

Exceptions thrown in Phalcon\Session will use this class



## Session\Manager 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Session/Manager.zep)


-   __Namespace__

    - `Phalcon\Session`

-   __Uses__
    
    - `InvalidArgumentException`
    - `Phalcon\Di\AbstractInjectionAware`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Support\Helper\Arr\Get`
    - `RuntimeException`
    - `SessionHandlerInterface`

-   __Extends__
    
    `AbstractInjectionAware`

-   __Implements__
    
    - `ManagerInterface`

@property SessionHandlerInterface|null $adapter
@property string                       $name
@property array                        $options
@property string                       $uniqueId


### Properties
```php
/**
 * @var SessionHandlerInterface|null
 */
private $adapter;

/**
 * @var string
 */
private $name = ;

/**
 * @var array
 */
private $options;

/**
 * @var string
 */
private $uniqueId = ;

```

### Methods

```php
public function __construct( array $options = [] );
```
Manager constructor.


```php
public function __get( string $key ): mixed;
```
Alias: Gets a session variable from an application context


```php
public function __isset( string $key ): bool;
```
Alias: Check whether a session variable is set in an application context


```php
public function __set( string $key, mixed $value ): void;
```
Alias: Sets a session variable in an application context


```php
public function __unset( string $key ): void;
```
Alias: Removes a session variable from an application context


```php
public function destroy(): void;
```
Destroy/end a session


```php
public function exists(): bool;
```
Check whether the session has been started


```php
public function get( string $key, mixed $defaultValue = null, bool $remove = bool ): mixed;
```
Gets a session variable from an application context


```php
public function getAdapter(): SessionHandlerInterface;
```
Returns the stored session adapter


```php
public function getId(): string;
```
Returns the session id


```php
public function getName(): string;
```
Returns the name of the session


```php
public function getOptions(): array;
```
Get internal options


```php
public function has( string $key ): bool;
```
Check whether a session variable is set in an application context


```php
public function regenerateId( bool $deleteOldSession = bool ): ManagerInterface;
```
Regenerates the session id using the adapter.


```php
public function remove( string $key ): void;
```
Removes a session variable from an application context


```php
public function set( string $key, mixed $value ): void;
```
Sets a session variable in an application context


```php
public function setAdapter( SessionHandlerInterface $adapter ): ManagerInterface;
```
Set the adapter for the session


```php
public function setId( string $sessionId ): ManagerInterface;
```
Set session Id


```php
public function setName( string $name ): ManagerInterface;
```
Set the session name. Throw exception if the session has started
and do not allow poop names


```php
public function setOptions( array $options ): void;
```
Sets session's options


```php
public function start(): bool;
```
Starts the session (if headers are already sent the session will not be
started)


```php
public function status(): int;
```
Returns the status of the current session.


```php
protected function phpHeadersSent(): bool;
```
Checks if or where headers have been sent




## Session\ManagerInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Session/ManagerInterface.zep)


-   __Namespace__

    - `Phalcon\Session`

-   __Uses__
    
    - `InvalidArgumentException`
    - `RuntimeException`
    - `SessionHandlerInterface`

-   __Extends__
    

-   __Implements__
    

Phalcon\Session

Interface for the Phalcon\Session\Manager


### Constants
```php
const SESSION_ACTIVE = 2;
const SESSION_DISABLED = 0;
const SESSION_NONE = 1;
```

### Methods

```php
public function __get( string $key ): mixed;
```
Alias: Gets a session variable from an application context


```php
public function __isset( string $key ): bool;
```
Alias: Check whether a session variable is set in an application context


```php
public function __set( string $key, mixed $value ): void;
```
Alias: Sets a session variable in an application context


```php
public function __unset( string $key ): void;
```
Alias: Removes a session variable from an application context


```php
public function destroy(): void;
```
Destroy/end a session


```php
public function exists(): bool;
```
Check whether the session has been started


```php
public function get( string $key, mixed $defaultValue = null, bool $remove = bool ): mixed;
```
Gets a session variable from an application context


```php
public function getAdapter(): SessionHandlerInterface;
```
Returns the stored session adapter


```php
public function getId(): string;
```
Returns the session id


```php
public function getName(): string;
```
Returns the name of the session


```php
public function getOptions(): array;
```
Get internal options


```php
public function has( string $key ): bool;
```
Check whether a session variable is set in an application context


```php
public function regenerateId( bool $deleteOldSession = bool ): ManagerInterface;
```
Regenerates the session id using the adapter.


```php
public function remove( string $key ): void;
```
Removes a session variable from an application context


```php
public function set( string $key, mixed $value ): void;
```
Sets a session variable in an application context


```php
public function setAdapter( SessionHandlerInterface $adapter ): ManagerInterface;
```
Set the adapter for the session


```php
public function setId( string $sessionId ): ManagerInterface;
```
Set session Id


```php
public function setName( string $name ): ManagerInterface;
```
Set the session name. Throw exception if the session has started
and do not allow poop names

@throws InvalidArgumentException


```php
public function setOptions( array $options ): void;
```
Sets session's options


```php
public function start(): bool;
```
Starts the session (if headers are already sent the session will not be
started)


```php
public function status(): int;
```
Returns the status of the current session.


