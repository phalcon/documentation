---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Logger\Logger 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Logger.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    
    - `Psr\Log\LoggerInterface`
    - `Phalcon\Logger\Adapter\AdapterInterface`
    - `Phalcon\Logger\Item`
    - `Phalcon\Logger\Exception`

-   __Extends__
    


-   __Implements__
    
    - `LoggerInterface`

Phalcon Logger.

This component offers logging capabilities for your application. The
component accepts multiple adapters, working also as a multiple logger.
Phalcon\Logger implements PSR-3.

```php
use Phalcon\Logger;
use Phalcon\Logger\Adapter\Stream;

$adapter1 = new Stream('/logs/first-log.log');
$adapter2 = new Stream('/remote/second-log.log');
$adapter3 = new Stream('/manager/third-log.log');

$logger = new Logger(
        'messages',
        [
            'local'   => $adapter1,
            'remote'  => $adapter2,
            'manager' => $adapter3,
        ]
    );

// Log to all adapters
$logger->error('Something went wrong');

// Log to specific adapters
$logger
        ->excludeAdapters(['manager'])
        ->info('This does not go to the "manager" logger');
```


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
 * Minimum log level for the logger
 *
 * @var int
 */
protected $logLevel = 8;

/**
 * @var string
 */
protected $name = '';

/**
 * The excluded adapters for this log process
 *
 * @var AdapterInterface[]
 */
protected $excluded;

```

### Methods

```php
public function __construct( string $name, array $adapters = [] );
```
Constructor.


```php
public function addAdapter( string $name, AdapterInterface $adapter ): Logger;
```
Add an adapter to the stack. For processing we use FIFO


```php
public function alert( mixed $message, array $context = [] ): void;
```
Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should
trigger the SMS alerts and wake you up.


```php
public function critical( mixed $message, array $context = [] ): void;
```
Critical conditions.

Example: Application component unavailable, unexpected exception.


```php
public function debug( mixed $message, array $context = [] ): void;
```
Detailed debug information.


```php
public function emergency( mixed $message, array $context = [] ): void;
```
System is unusable.


```php
public function error( mixed $message, array $context = [] ): void;
```
Runtime errors that do not require immediate action but should typically
be logged and monitored.


```php
public function excludeAdapters( array $adapters = [] ): Logger;
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
public function getLogLevel(): int
```



```php
public function getName(): string;
```
Returns the name of the logger


```php
public function info( mixed $message, array $context = [] ): void;
```
Interesting events.

Example: User logs in, SQL logs.


```php
public function log( mixed $level, mixed $message, array $context = [] ): void;
```
Logs with an arbitrary level.


```php
public function notice( mixed $message, array $context = [] ): void;
```
Normal but significant events.


```php
public function removeAdapter( string $name ): Logger;
```
Removes an adapter from the stack


```php
public function setAdapters( array $adapters ): Logger;
```
Sets the adapters stack overriding what is already there


```php
public function setLogLevel( int $level ): Logger;
```
Sets the log level above which we can log


```php
public function warning( mixed $message, array $context = [] ): void;
```
Exceptional occurrences that are not errors.

Example: Use of deprecated APIs, poor use of an API, undesirable things
that are not necessarily wrong.


```php
protected function addMessage( int $level, string $message, array $context = [] ): bool;
```
Adds a message to each handler for processing


```php
protected function getLevels(): array;
```
Returns an array of log levels with integer to string conversion




## Logger\Adapter\AbstractAdapter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Adapter/AbstractAdapter.zep)


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


### Properties
```php
/**
 * Name of the default formatter class
 *
 * @var string
 */
protected $defaultFormatter = 'Line';

/**
 * Formatter
 *
 * @var FormatterInterface
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

## Methods

```php
public function __destruct();
```
Destructor cleanup


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
Returns the whether the logger is currently in an active transaction or not


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






## Logger\Adapter\AdapterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Adapter/AdapterInterface.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Adapter/Noop.zep)


-   __Namespace__

    - `Phalcon\Logger\Adapter`

-   __Uses__
    
    - `Phalcon\Logger\Item`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

```php
$logger = new \Phalcon\Logger\Adapter\Noop();

$logger->log(\Phalcon\Logger::ERROR, "This is an error");
$logger->error("This is another error");

$logger->close();
```


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Adapter/Stream.zep)


-   __Namespace__

    - `Phalcon\Logger\Adapter`

-   __Uses__
    
    - `Phalcon\Logger\Adapter`
    - `Phalcon\Logger\Exception`
    - `Phalcon\Logger\Formatter\FormatterInterface`
    - `Phalcon\Logger\Item`
    - `UnexpectedValueException`

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



### Properties
```php
/**
 * Stream handler resource
 *
 * @var resource|null
 */
protected $handler;

/**
 * The file open mode. Defaults to "ab"
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
Constructor. Accepts the name and some options


```php
public function close(): bool;
```
Closes the stream


```php
public function getName(): string
```



```php
public function process( Item $item ): void;
```
Processes the message i.e. writes it to the file




## Logger\Adapter\Syslog 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Adapter/Syslog.zep)


-   __Namespace__

    - `Phalcon\Logger\Adapter`

-   __Uses__
    
    - `LogicException`
    - `Phalcon\Helper\Arr`
    - `Phalcon\Logger`
    - `Phalcon\Logger\Adapter`
    - `Phalcon\Logger\Exception`
    - `Phalcon\Logger\Formatter\FormatterInterface`
    - `Phalcon\Logger\Item`

-   __Extends__
    
    `AbstractAdapter`

-   __Implements__
    

Class Syslog

Sends logs to the system logger

```php
use Phalcon\Logger;
use Phalcon\Logger\Adapter\Syslog;

// LOG_USER is the only valid log type under Windows operating systems
$logger = new Syslog(
    "ident",
    [
        "option"   => LOG_CONS | LOG_NDELAY | LOG_PID,
        "facility" => LOG_USER,
    ]
);

$logger->log("This is a message");
$logger->log(Logger::ERROR, "This is an error");
$logger->error("This is another error");
```


### Properties
```php
/**
 * Name of the default formatter class
 *
 * @var string
 */
protected $defaultFormatter = Line;

/**
 * @var int
 */
protected $facility = 0;

/**
 * @var string
 */
protected $name = '';

/**
 * @var bool
 */
protected $opened = false;

/**
 * @var int
 */
protected $option = 0;

```

### Methods

```php
public function __construct( string $name, array $options = [] );
```
Phalcon\Logger\Adapter\Syslog constructor


```php
public function close(): bool;
```
 Closes the logger
 


```php
public function process( Item $item ): void;
```
Processes the message i.e. writes it to the syslog







## Logger\AdapterFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/AdapterFactory.zep)


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
protected function getAdapters(): array;
```





## Logger\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Exception.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Phalcon\Logger\Exception

Exceptions thrown in Phalcon\Logger will use this class



## Logger\Formatter\AbstractFormatter ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Formatter/AbstractFormatter.zep)


-   __Namespace__

    - `Phalcon\Logger\Formatter`

-   __Uses__
    
    - `DateTimeImmutable`
    - `DateTimeZone`
    - `Phalcon\Logger`
    - `Phalcon\Logger\Item`

-   __Extends__
    

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
protected $dateFormat;

```

### Methods

```php
public function getDateFormat(): string
```



```php
public function interpolate( string $message, mixed $context = null );
```
Interpolates context values into the message placeholders

@see https://www.php-fig.org/psr/psr-3/ Section 1.2 Message


```php
public function setDateFormat( string $dateFormat )
```



```php
protected function getFormattedDate(): string;
```
Returns the date formatted for the logger.
@todo Not using the set time from the Item since we have interface
misalignment which will break semver This will change in the future




## Logger\Formatter\FormatterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Formatter/FormatterInterface.zep)


-   __Namespace__

    - `Phalcon\Logger\Formatter`

-   __Uses__
    
    - `Phalcon\Logger\Item`

-   __Extends__
    

-   __Implements__
    

This interface must be implemented by formatters in Phalcon\Logger


### Methods

```php
public function format( Item $item ): string | array;
```
Applies a format to an item




## Logger\Formatter\Json 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Formatter/Json.zep)


-   __Namespace__

    - `Phalcon\Logger\Formatter`

-   __Uses__
    
    - `Phalcon\Helper\Json`
    - `Phalcon\Logger\Item`

-   __Extends__
    
    `AbstractFormatter`

-   __Implements__
    

Formats messages using JSON encoding


### Methods

```php
public function __construct( string $dateFormat = string );
```
Phalcon\Logger\Formatter\Json construct


```php
public function format( Item $item ): string;
```
Applies a format to a message before sent it to the internal log




## Logger\Formatter\Line 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Formatter/Line.zep)


-   __Namespace__

    - `Phalcon\Logger\Formatter`

-   __Uses__
    
    - `DateTime`
    - `Phalcon\Logger\Item`

-   __Extends__
    
    `AbstractFormatter`

-   __Implements__
    

Formats messages using a one-line string


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
public function __construct( string $format = string, string $dateFormat = string );
```
Phalcon\Logger\Formatter\Line construct


```php
public function format( Item $item ): string;
```
Applies a format to a message before sent it to the internal log


```php
public function getFormat(): string
```



```php
public function setFormat( string $format )
```





## Logger\Item 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/Item.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Phalcon\Logger\Item

Represents each item in a logging transaction



### Properties
```php
/**
 * Log Context
 *      
 * @var mixed
 */
protected $context;

/**
 * Log message
 *
 * @var string
 */
protected $message;

/**
 * Log message
 *
 * @var string
 */
protected $name;

/**
 * Log timestamp
 *
 * @var integer
 */
protected $time;

/**
 * Log type
 *
 * @var integer
 */
protected $type;

```

### Methods

```php
public function __construct( string $message, string $name, int $type, int $time = int, mixed $context = [] );
```
Phalcon\Logger\Item constructor
@todo Remove the time or change the signature to an array


```php
public function getContext(): mixed
```



```php
public function getMessage(): string
```



```php
public function getName(): string
```



```php
public function getTime(): integer
```



```php
public function getType(): integer
```





## Logger\LoggerFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Logger/LoggerFactory.zep)


-   __Namespace__

    - `Phalcon\Logger`

-   __Uses__
    
    - `Phalcon\Config`
    - `Phalcon\Config\ConfigInterface`
    - `Phalcon\Helper\Arr`
    - `Phalcon\Logger`

-   __Extends__
    

-   __Implements__
    

Factory creating logger objects


### Properties
```php
/**
 * @var AdapterFactory
 */
private adapterFactory;

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
public function newInstance( string $name, array $adapters = [] ): Logger;
```
Returns a Logger object
