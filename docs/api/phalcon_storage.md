---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Storage\Adapter\AbstractAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Adapter/AbstractAdapter.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `DateTime`
    - `Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Storage\Serializer\SerializerInterface`
    - `Phalcon\Exception`

-   __Extends__
    

-   __Implements__
    
    - `AdapterInterface`



### Properties
```php
/**
 * @var mixed
 */
protected $adapter;

/**
 * Name of the default serializer class
 *
 * @var string
 */
protected $defaultSerializer = 'Php';

/**
 * Name of the default TTL (time to live)
 *
 * @var int
 */
protected $lifetime = 3600;

/**
 * @var string
 */
protected $prefix = '';

/**
 * Serializer
 *
 * @var SerializerInterface
 */
protected $serializer;

/**
 * Serializer Factory
 *
 * @var SerializerFactory
 */
protected $serializerFactory;

```

### Methods

```php
protected function __construct( SerializerFactory $factory, array $options = [] );
```
Sets parameters based on options


```php
abstract public function clear(): bool;
```
Flushes/clears the cache


```php
abstract public function decrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
abstract public function delete( string $key ): bool;
```
Deletes data from the adapter


```php
abstract public function get( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
abstract public function getAdapter(): mixed;
```
Returns the adapter - connects to the storage if not connected


```php
public function getDefaultSerializer(): string;
```



```php
abstract public function getKeys( string $prefix = string ): array;
```
Returns all the keys stored


```php
public function getPrefix(): string;
```



```php
abstract public function has( string $key ): bool;
```
Checks if an element exists in the cache


```php
abstract public function increment( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
abstract public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter


```php
public function setDefaultSerializer( string $defaultSerializer )
```



```php
protected function getFilteredKeys( mixed $keys, string $prefix ): array;
```
Filters the keys array based on global and passed prefix


```php
protected function getPrefixedKey( mixed $key ): string;
```
Returns the key requested, prefixed


```php
protected function getSerializedData( mixed $content ): mixed;
```
Returns serialized data


```php
protected function getTtl( mixed $ttl ): int;
```
Calculates the TTL for a cache item


```php
protected function getUnserializedData( mixed $content, mixed $defaultValue = null ): mixed;
```
Returns unserialized data


```php
protected function initSerializer(): void;
```
Initializes the serializer





## Storage\Adapter\AdapterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Adapter/AdapterInterface.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `Phalcon\Storage\Serializer\SerializerInterface`

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Logger adapters


### Methods

```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function decrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
public function delete( string $key ): bool;
```
Deletes data from the adapter


```php
public function get( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
public function getAdapter(): mixed;
```
Returns the already connected adapter or connects to the backend
server(s)


```php
public function getKeys( string $prefix = string ): array;
```
Returns all the keys stored


```php
public function getPrefix(): string;
```
Returns the prefix for the keys


```php
public function has( string $key ): bool;
```
Checks if an element exists in the cache


```php
public function increment( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter




## Storage\Adapter\Apcu 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Adapter/Apcu.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `APCUIterator`
    - `DateInterval`
    - `Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Exception`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Apcu adapter



### Properties
```php
/**
 * @var array
 */
protected $options;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Constructor


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function decrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
public function delete( string $key ): bool;
```
Reads data from the adapter


```php
public function get( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
public function getAdapter(): mixed;
```
Always returns null


```php
public function getKeys( string $prefix = string ): array;
```
Stores data in the adapter


```php
public function has( string $key ): bool;
```
Checks if an element exists in the cache


```php
public function increment( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter




## Storage\Adapter\Libmemcached 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Adapter/Libmemcached.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `Exception`
    - `Phalcon\Storage\Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Exception`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Libmemcached adapter


### Properties
```php
/**
 * @var array
 */
protected $options;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Libmemcached constructor.


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function decrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
public function delete( string $key ): bool;
```
Reads data from the adapter


```php
public function get( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
public function getAdapter(): mixed;
```
Returns the already connected adapter or connects to the Memcached
server(s)


```php
public function getKeys( string $prefix = string ): array;
```
Stores data in the adapter


```php
public function has( string $key ): bool;
```
Checks if an element exists in the cache


```php
public function increment( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter




## Storage\Adapter\Memory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Adapter/Memory.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Exception`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Memory adapter



### Properties
```php
/**
 * @var Collection|CollectionInterface
 */
protected $data;

/**
 * @var array
 */
protected $options;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Constructor


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function decrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
public function delete( string $key ): bool;
```
Reads data from the adapter


```php
public function get( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
public function getAdapter(): mixed;
```
Always returns null


```php
public function getKeys( string $prefix = string ): array;
```
Stores data in the adapter


```php
public function has( string $key ): bool;
```
Checks if an element exists in the cache


```php
public function increment( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter







## Storage\Adapter\Redis 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Adapter/Redis.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `Exception`
    - `Phalcon\Storage\Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Exception`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Redis adapter



### Properties
```php
/**
 * @var array
 */
protected $options;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Constructor


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function decrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
public function delete( string $key ): bool;
```
Deletes data from the adapter


```php
public function get( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
public function getAdapter(): mixed;
```
Returns the already connected adapter or connects to the Redis
server(s)


```php
public function getKeys( string $prefix = string ): array;
```
Gets the keys from the adapter. Accepts an optional prefix which will
filter the keys returned


```php
public function has( string $key ): bool;
```
Checks if an element exists in the cache


```php
public function increment( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter. If no ttl is given, the default value will be used (3600s at the moment). 






## Storage\Adapter\Stream 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Adapter/Stream.zep)


-   __Namespace__

    - `Phalcon\Storage\Adapter`

-   __Uses__
    
    - `DateInterval`
    - `FilesystemIterator`
    - `Iterator`
    - `Phalcon\Storage\Exception`
    - `Phalcon\Storage\SerializerFactory`
    - `Phalcon\Storage\Traits\StorageErrorHandlerTrait`
    - `Phalcon\Exception`
    - `RecursiveDirectoryIterator`
    - `RecursiveIteratorIterator`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Stream adapter



### Properties
```php
/**
    * @var string
    */
protected $storageDir = ;

/**
 * @var array
 */
protected $options;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $options = [] );
```
Stream constructor.


```php
public function clear(): bool;
```
Flushes/clears the cache


```php
public function decrement( string $key, int $value = int ): int | bool;
```
Decrements a stored number


```php
public function delete( string $key ): bool;
```
Reads data from the adapter


```php
public function get( string $key, mixed $defaultValue = null ): mixed;
```
Reads data from the adapter


```php
public function getAdapter(): mixed;
```
Always returns null


```php
public function getKeys( string $prefix = string ): array;
```
Stores data in the adapter


```php
public function has( string $key ): bool;
```
Checks if an element exists in the cache and is not expired


```php
public function increment( string $key, int $value = int ): int | bool;
```
Increments a stored number


```php
public function set( string $key, mixed $value, mixed $ttl = null ): bool;
```
Stores data in the adapter




## Storage\AdapterFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/AdapterFactory.zep)


-   __Namespace__

    - `Phalcon\Storage`

-   __Uses__
    
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Storage\Adapter\AdapterInterface`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Properties
```php
/**
 * @var SerializerFactory
 */
private serializerFactory;

```

### Methods

```php
public function __construct( SerializerFactory $factory, array $services = [] );
```
AdapterFactory constructor.


```php
public function newInstance( string $name, array $options = [] ): AdapterInterface;
```
Create a new instance of the adapter


```php
protected function getAdapters(): array;
```







## Storage\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Exception.zep)


-   __Namespace__

    - `Phalcon\Storage`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Phalcon\Storage\Exception

Exceptions thrown in Phalcon\Storage will use this class




## Storage\Serializer\AbstractSerializer ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Serializer/AbstractSerializer.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    
    - `SerializerInterface`

@property mixed $data
@property bool  $isSuccess


### Properties
```php
/**
 * @var mixed
 */
protected $data;

```

### Methods

```php
public function __construct( mixed $data = null );
```
Constructor


```php
public function getData(): mixed;
```



```php
public function setData( mixed $data ): void;
```



```php
protected function isSerializable( mixed $data ): bool;
```
If this returns true, then the data returns back as is




## Storage\Serializer\Base64 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Serializer/Base64.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    
    - `InvalidArgumentException`

-   __Extends__
    
    `AbstractSerializer`

-   __Implements__
    



### Methods

```php
public function serialize(): string;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data






## Storage\Serializer\Igbinary 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Serializer/Igbinary.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `AbstractSerializer`

-   __Implements__
    


### Methods

```php
public function serialize(): string;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data




## Storage\Serializer\Json 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Serializer/Json.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    
    - `InvalidArgumentException`
    - `JsonSerializable`
    - `Phalcon\Helper\Json\Decode`
    - `Phalcon\Helper\Json\Encode`

-   __Extends__
    
    `AbstractSerializer`

-   __Implements__
    



### Methods

```php
public function serialize(): string;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data




## Storage\Serializer\Msgpack 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Serializer/Msgpack.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `Igbinary`

-   __Implements__
    


### Methods

```php
public function serialize(): string | null;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data




## Storage\Serializer\None 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Serializer/None.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    

-   __Extends__
    
    `AbstractSerializer`

-   __Implements__
    

### Methods

```php
public function serialize(): string;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data




## Storage\Serializer\Php 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Serializer/Php.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    
    - `InvalidArgumentException`

-   __Extends__
    
    `AbstractSerializer`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function serialize(): string;
```
Serializes data


```php
public function unserialize( mixed $data ): void;
```
Unserializes data




## Storage\Serializer\SerializerInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/Serializer/SerializerInterface.zep)


-   __Namespace__

    - `Phalcon\Storage\Serializer`

-   __Uses__
    
    - `Serializable`

-   __Extends__
    
    `Serializable`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function getData(): mixed;
```



```php
public function setData( mixed $data ): void;
```





## Storage\SerializerFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Storage/SerializerFactory.zep)


-   __Namespace__

    - `Phalcon\Storage`

-   __Uses__
    
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Storage\Serializer\SerializerInterface`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( array $services = [] );
```
SerializerFactory constructor.


```php
public function newInstance( string $name ): SerializerInterface;
```



```php
protected function getAdapters(): array;
```
