---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Logger\AbstractLogger ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/AbstractLogger.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    
    - `DateTimeImmutable`
    - `DateTimeZone`
    - `Exception`
    - `Phalcon\Logger\Adapter\AdapterInterface`
    - `Phalcon\Logger\Exception`

-   __Extends__
    

-   __Implements__
    

Abstract Logger Class

Abstract logger class, providing common functionality. A formatter interface
is available as well as an adapter one. Adapters can be created easily using
the built in AdapterFactory. A LoggerFactory is also available that allows
developers to create new instances of the Logger or load them from config
files (see Phalcon\Config\Config object).

@property AdapterInterface[] $adapters
@property array              $excluded
@property int                $logLevel
@property string             $name
@property string             $timezone


### Constants
```php
const ALERT = 2;
const CRITICAL = 1;
const CUSTOM = 8;
const DEBUG = 7;
const EMERGENCY = 0;
const ERROR = 3;
const INFO = 6;
const NOTICE = 5;
const WARNING = 4;
```

### Properties
```php
/**
 * The adapter stack
 *
 * @var AdapterInterface[]
 */
protected $adapters;

/**
 * The excluded adapters for this log process
 *
 * @var array
 */
protected $excluded;

/**
 * Minimum log level for the logger
 *
 * @var int
 */
protected $logLevel = 8;

/**
 * @var string
 */
protected $name = ;

/**
 * @var DateTimeZone
 */
protected $timezone;

```

### Methods

```php
public function __construct( string $name, array $adapters = [], DateTimeZone $timezone = null );
```
Constructor.


```php
public function addAdapter( string $name, AdapterInterface $adapter ): AbstractLogger;
```
Add an adapter to the stack. For processing we use FIFO


```php
public function excludeAdapters( array $adapters = [] ): AbstractLogger;
```
Exclude certain adapters.


```php
public function getAdapter( string $name ): AdapterInterface;
```
Returns an adapter from the stack


```php
public function getAdapters(): array;
```
Returns the adapter stack array


```php
public function getLogLevel(): int;
```
Returns the log level


```php
public function getName(): string;
```
Returns the name of the logger


```php
public function removeAdapter( string $name ): AbstractLogger;
```
Removes an adapter from the stack


```php
public function setAdapters( array $adapters ): AbstractLogger;
```
Sets the adapters stack overriding what is already there


```php
public function setLogLevel( int $level ): AbstractLogger;
```
Sets the adapters stack overriding what is already there


```php
protected function addMessage( int $level, string $message, array $context = [] ): bool;
```
Adds a message to each handler for processing


```php
protected function getLevelNumber( mixed $level ): int;
```
Converts the level from string/word to an integer


```php
protected function getLevels(): array;
```
Returns an array of log levels with integer to string conversion




## Logger\Adapter\AbstractAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/AbstractAdapter.zep)


-   __Namespace__

    - `Phalcon\Logger\Adapter`

-   __Uses__
    
    - `Phalcon\Logger\Exception`
    - `Phalcon\Logger\Formatter\FormatterInterface`
    - `Phalcon\Logger\Formatter\Line`
    - `Phalcon\Logger\Item`

-   __Extends__
    

-   __Implements__
    
    - `AdapterInterface`

Class AbstractAdapter

@property string             $defaultFormatter
@property FormatterInterface $formatter
@property bool               $inTransaction
@property array              $queue


### Properties
```php
/**
 * Name of the default formatter class
 *
 * @var string
 */
protected $defaultFormatter = Phalcon\\Logger\Formatter\\Line;

/**
 * Formatter
 *
 * @var FormatterInterface|null
 */
protected $formatter;

/**
 * Tells if there is an active transaction or not
 *
 * @var bool
 */
protected $inTransaction = false;

/**
 * Array with messages queued in the transaction
 *
 * @var array
 */
protected $queue;

```

### Methods

```php
public function __destruct();
```
Destructor cleanup

@throws Exception


```php
public function __serialize(): array;
```
Prevent serialization


```php
public function __unserialize( array $data ): void;
```
Prevent unserialization


```php
public function add( Item $item ): AdapterInterface;
```
Adds a message to the queue


```php
public function begin(): AdapterInterface;
```
Starts a transaction


```php
public function commit(): AdapterInterface;
```
Commits the internal transaction


```php
public function getFormatter(): FormatterInterface;
```



```php
public function inTransaction(): bool;
```
Returns the whether the logger is currently in an active transaction or
not


```php
abstract public function process( Item $item ): void;
```
Processes the message in the adapter


```php
public function rollback(): AdapterInterface;
```
Rollbacks the internal transaction


```php
public function setFormatter( FormatterInterface $formatter ): AdapterInterface;
```
Sets the message formatter


```php
protected function getFormattedItem( Item $item ): string;
```
Returns the formatted item




## Logger\Adapter\AdapterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/AdapterInterface.zep)


-   __Namespace__

    - `Phalcon\Logger\Adapter`

-   __Uses__
    
    - `Phalcon\Logger\Formatter\FormatterInterface`
    - `Phalcon\Logger\Item`

-   __Extends__
    

-   __Implements__
    

Phalcon\Logger\AdapterInterface

Interface for Phalcon\Logger adapters


### Methods

```php
public function add( Item $item ): AdapterInterface;
```
Adds a message in the queue


```php
public function begin(): AdapterInterface;
```
Starts a transaction


```php
public function close(): bool;
```
Closes the logger


```php
public function commit(): AdapterInterface;
```
Commits the internal transaction


```php
public function getFormatter(): FormatterInterface;
```
Returns the internal formatter


```php
public function inTransaction(): bool;
```
Returns the whether the logger is currently in an active transaction or
not


```php
public function process( Item $item ): void;
```
Processes the message in the adapter


```php
public function rollback(): AdapterInterface;
```
Rollbacks the internal transaction


```php
public function setFormatter( FormatterInterface $formatter ): AdapterInterface;
```
Sets the message formatter




## Logger\Adapter\Noop 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Noop.zep)


-   __Namespace__

    - `Phalcon\Logger\Adapter`

-   __Uses__
    
    - `Phalcon\Logger\Item`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Class Noop

@package Phalcon\Logger\Adapter


### Methods

```php
public function close(): bool;
```
Closes the stream


```php
public function process( Item $item ): void;
```
Processes the message i.e. writes it to the file




## Logger\Adapter\Stream 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Stream.zep)


-   __Namespace__

    - `Phalcon\Logger\Adapter`

-   __Uses__
    
    - `LogicException`
    - `Phalcon\Logger\Exception`
    - `Phalcon\Logger\Item`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Phalcon\Logger\Adapter\Stream

Adapter to store logs in plain text files

```php
$logger = new \Phalcon\Logger\Adapter\Stream('app/logs/test.log');

$logger->log('This is a message');
$logger->log(\Phalcon\Logger::ERROR, 'This is an error');
$logger->error('This is another error');

$logger->close();
```

@property string        $mode
@property string        $name
@property array         $options


### Properties
```php
/**
 * The file open mode. Defaults to 'ab'
 *
 * @var string
 */
protected $mode = ab;

/**
 * Stream name
 *
 * @var string
 */
protected $name;

/**
 * Path options
 *
 * @var array
 */
protected $options;

```

### Methods

```php
public function __construct( string $name, array $options = [] );
```
Stream constructor.


```php
public function close(): bool;
```
Closes the stream


```php
public function getName(): string;
```
Stream name


```php
public function process( Item $item ): void;
```
Processes the message i.e. writes it to the file


```php
protected function phpFopen( string $filename, string $mode );
```
@todo to be removed when we get traits




## Logger\Adapter\Syslog 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Adapter/Syslog.zep)


-   __Namespace__

    - `Phalcon\Logger\Adapter`

-   __Uses__
    
    - `LogicException`
    - `Phalcon\Logger\Item`
    - `Phalcon\Logger\Logger`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Class Syslog

@property string $defaultFormatter
@property int    $facility
@property string $name
@property bool   $opened
@property int    $option


### Properties
```php
/**
 * @var int
 */
protected $facility = ;

/**
 * @var string
 */
protected $name = ;

/**
 * @var bool
 */
protected $opened = false;

/**
 * @var int
 */
protected $option = ;

```

### Methods

```php
public function __construct( string $name, array $options = [] );
```
Syslog constructor.


```php
public function close(): bool;
```
 Closes the logger
 


```php
public function process( Item $item ): void;
```
Processes the message i.e. writes it to the syslog


```php
protected function openlog( string $ident, int $option, int $facility ): bool;
```
Open connection to system logger

@link https://php.net/manual/en/function.openlog.php




## Logger\AdapterFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/AdapterFactory.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Logger\Adapter\AdapterInterface`
    - `Phalcon\Logger\Exception`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

Factory used to create adapters used for Logging


### Methods

```php
public function __construct( array $services = [] );
```
AdapterFactory constructor.


```php
public function newInstance( string $name, string $fileName, array $options = [] ): AdapterInterface;
```
Create a new instance of the adapter


```php
protected function getExceptionClass(): string;
```



```php
protected function getServices(): array;
```
Returns the available adapters




## Logger\Enum 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Enum.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Log Level Enum constants


### Constants
```php
const ALERT = 2;
const CRITICAL = 1;
const CUSTOM = 8;
const DEBUG = 7;
const EMERGENCY = 0;
const ERROR = 3;
const INFO = 6;
const NOTICE = 5;
const WARNING = 4;
```


## Logger\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Exception.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Phalcon\Logger\Exception

Exceptions thrown in Phalcon\Logger will use this class



## Logger\Formatter\AbstractFormatter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/AbstractFormatter.zep)


-   __Namespace__

    - `Phalcon\Logger\Formatter`

-   __Uses__
    
    - `DateTimeImmutable`
    - `Phalcon\Logger\Item`
    - `Phalcon\Support\Helper\Str\AbstractStr`

-   __Extends__
    
    `AbstractStr`

-   __Implements__
    
    - `FormatterInterface`

Class AbstractFormatter


### Properties
```php
/**
 * Default date format
 *
 * @var string
 */
protected $dateFormat = c;

/**
 * @var string
 */
protected $interpolatorLeft = %;

/**
 * @var string
 */
protected $interpolatorRight = %;

```

### Methods

```php
public function getDateFormat(): string;
```



```php
public function setDateFormat( string $format ): void;
```



```php
protected function getFormattedDate( Item $item ): string;
```
Returns the date formatted for the logger.


```php
protected function getInterpolatedMessage( Item $item, string $message ): string;
```





## Logger\Formatter\FormatterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/FormatterInterface.zep)


-   __Namespace__

    - `Phalcon\Logger\Formatter`

-   __Uses__
    
    - `Phalcon\Logger\Item`

-   __Extends__
    

-   __Implements__
    

Phalcon\Logger\FormatterInterface

This interface must be implemented by formatters in Phalcon\Logger


### Methods

```php
public function format( Item $item ): string;
```
Applies a format to an item




## Logger\Formatter\Json 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/Json.zep)


-   __Namespace__

    - `Phalcon\Logger\Formatter`

-   __Uses__
    
    - `JsonException`
    - `Phalcon\Logger\Item`

-   __Extends__
    
    `AbstractFormatter`

-   __Implements__
    

Formats messages using JSON encoding


### Methods

```php
public function __construct( string $dateFormat = string, string $interpolatorLeft = string, string $interpolatorRight = string );
```
Json constructor.


```php
public function format( Item $item ): string;
```
Applies a format to a message before sent it to the internal log




## Logger\Formatter\Line 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Formatter/Line.zep)


-   __Namespace__

    - `Phalcon\Logger\Formatter`

-   __Uses__
    
    - `Exception`
    - `Phalcon\Logger\Item`

-   __Extends__
    
    `AbstractFormatter`

-   __Implements__
    

Class Line


### Properties
```php
/**
 * Format applied to each message
 *
 * @var string
 */
protected $format;

```

### Methods

```php
public function __construct( string $format = string, string $dateFormat = string, string $interpolatorLeft = string, string $interpolatorRight = string );
```
Line constructor.


```php
public function format( Item $item ): string;
```
Applies a format to a message before sent it to the internal log


```php
public function getFormat(): string;
```
Return the format applied to each message


```php
public function setFormat( string $format ): Line;
```
Set the format applied to each message




## Logger\Item 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Item.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    
    - `DateTimeImmutable`

-   __Extends__
    

-   __Implements__
    

Phalcon\Logger\Item

Represents each item in a logging transaction

@property array             $context
@property string            $message
@property int               $level
@property string            $levelName
@property DateTimeImmutable $datetime


### Properties
```php
/**
 * @var array
 */
protected $context;

/**
 * @var DateTimeImmutable
 */
protected $dateTime;

/**
 * @var string
 */
protected $message;

/**
 * @var int
 */
protected $level;

/**
 * @var string
 */
protected $levelName;

```

### Methods

```php
public function __construct( string $message, string $levelName, int $level, DateTimeImmutable $dateTime, array $context = [] );
```
Item constructor.


```php
public function getContext(): array;
```



```php
public function getDateTime(): DateTimeImmutable;
```



```php
public function getLevel(): int;
```



```php
public function getLevelName(): string;
```



```php
public function getMessage(): string;
```





## Logger\Logger 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/Logger.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    
    - `Exception`
    - `Phalcon\Logger\Exception`

-   __Extends__
    
    `AbstractLogger`

-   __Implements__
    
    - `LoggerInterface`

Phalcon Logger.

A logger, with various adapters and formatters. A formatter
interface is available as well as an adapter one. Adapters can be created
easily using the built-in AdapterFactory. A LoggerFactory is also available
that allows developers to create new instances of the Logger or load them
from config files (see Phalcon\Config\Config object).


### Methods

```php
public function alert( string $message, array $context = [] ): void;
```
Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should
trigger the SMS alerts and wake you up.


```php
public function critical( string $message, array $context = [] ): void;
```
Critical conditions.

Example: Application component unavailable, unexpected exception.


```php
public function debug( string $message, array $context = [] ): void;
```
Detailed debug information.


```php
public function emergency( string $message, array $context = [] ): void;
```
System is unusable.


```php
public function error( string $message, array $context = [] ): void;
```
Runtime errors that do not require immediate action but should typically
be logged and monitored.


```php
public function info( string $message, array $context = [] ): void;
```
Interesting events.

Example: User logs in, SQL logs.


```php
public function log( mixed $level, string $message, array $context = [] ): void;
```
Logs with an arbitrary level.


```php
public function notice( string $message, array $context = [] ): void;
```
Normal but significant events.


```php
public function warning( string $message, array $context = [] ): void;
```
Exceptional occurrences that are not errors.

Example: Use of deprecated APIs, poor use of an API, undesirable things
that are not necessarily wrong.




## Logger\LoggerFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/LoggerFactory.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    
    - `DateTimeZone`
    - `Phalcon\Config\ConfigInterface`
    - `Phalcon\Factory\AbstractConfigFactory`

-   __Extends__
    
    `AbstractConfigFactory`

-   __Implements__
    

Factory creating logger objects


### Properties
```php
/**
 * @var AdapterFactory
 */
private $adapterFactory;

```

### Methods

```php
public function __construct( AdapterFactory $factory );
```



```php
public function load( mixed $config ): Logger;
```
Factory to create an instance from a Config object


```php
public function newInstance( string $name, array $adapters = [], DateTimeZone $timezone = null ): Logger;
```
Returns a Logger object


```php
protected function getArrVal( array $collection, mixed $index, mixed $defaultValue = null ): mixed;
```
@todo Remove this when we get traits


```php
protected function getExceptionClass(): string;
```





## Logger\LoggerInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Logger/LoggerInterface.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    
    - `Phalcon\Logger\Adapter\AdapterInterface`

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon based logger objects.


### Methods

```php
public function alert( string $message, array $context = [] ): void;
```
Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should
trigger the SMS alerts and wake you up.


```php
public function critical( string $message, array $context = [] ): void;
```
Critical conditions.

Example: Application component unavailable, unexpected exception.


```php
public function debug( string $message, array $context = [] ): void;
```
Detailed debug information.


```php
public function emergency( string $message, array $context = [] ): void;
```
System is unusable.


```php
public function error( string $message, array $context = [] ): void;
```
Runtime errors that do not require immediate action but should typically
be logged and monitored.


```php
public function getAdapter( string $name ): AdapterInterface;
```
Returns an adapter from the stack


```php
public function getAdapters(): array;
```
Returns the adapter stack array


```php
public function getLogLevel(): int;
```
Returns the log level


```php
public function getName(): string;
```
Returns the name of the logger


```php
public function info( string $message, array $context = [] ): void;
```
Interesting events.

Example: User logs in, SQL logs.


```php
public function log( mixed $level, string $message, array $context = [] ): void;
```
Logs with an arbitrary level.


```php
public function notice( string $message, array $context = [] ): void;
```
Normal but significant events.


```php
public function warning( string $message, array $context = [] ): void;
```
Normal but significant events.


