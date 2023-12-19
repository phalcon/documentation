---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Domain\Payload\Payload 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/Payload.zep)


-   __Namespace__

    - `Phalcon\Domain\Payload`

-   __Uses__
    
    - `Throwable`

-   __Extends__
    

-   __Implements__
    
    - `PayloadInterface`

Holds the payload


### Properties
```php
/**
 * Exception if any
 *
 * @var Throwable|null
 */
protected $exception;

/**
 * Extra information
 *
 * @var mixed
 */
protected $extras;

/**
 * Input
 *
 * @var mixed
 */
protected $input;

/**
 * Messages
 *
 * @var mixed
 */
protected $messages;

/**
 * Status
 *
 * @var mixed
 */
protected $status;

/**
 * Output
 *
 * @var mixed
 */
protected $output;

```

### Methods

```php
public function getException(): Throwable | null;
```
Gets the potential exception thrown in the domain layer


```php
public function getExtras(): mixed;
```
Extra information


```php
public function getInput(): mixed;
```
Input


```php
public function getMessages(): mixed;
```
Messages


```php
public function getOutput(): mixed;
```
Output


```php
public function getStatus(): mixed;
```
Status


```php
public function setException( Throwable $exception ): PayloadInterface;
```
Sets an exception thrown in the domain


```php
public function setExtras( mixed $extras ): PayloadInterface;
```
Sets arbitrary extra domain information.


```php
public function setInput( mixed $input ): PayloadInterface;
```
Sets the domain input.


```php
public function setMessages( mixed $messages ): PayloadInterface;
```
Sets the domain messages.


```php
public function setOutput( mixed $output ): PayloadInterface;
```
Sets the domain output.


```php
public function setStatus( mixed $status ): PayloadInterface;
```
Sets the payload status.




## Domain\Payload\PayloadFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/PayloadFactory.zep)


-   __Namespace__

    - `Phalcon\Domain\Payload`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Factory to create payload objects


### Methods

```php
public function newInstance(): PayloadInterface;
```
Instantiate a new object




## Domain\Payload\PayloadInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/PayloadInterface.zep)


-   __Namespace__

    - `Phalcon\Domain\Payload`

-   __Uses__
    

-   __Extends__
    
    `ReadableInterface`

-   __Implements__
    

This interface is used for consumers



## Domain\Payload\ReadableInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/ReadableInterface.zep)


-   __Namespace__

    - `Phalcon\Domain\Payload`

-   __Uses__
    
    - `Throwable`

-   __Extends__
    

-   __Implements__
    

This interface is used for consumers (read only)


### Methods

```php
public function getException(): Throwable | null;
```
Gets the potential exception thrown in the domain layer


```php
public function getExtras(): mixed;
```
Gets arbitrary extra values produced by the domain layer.


```php
public function getInput(): mixed;
```
Gets the input received by the domain layer.


```php
public function getMessages(): mixed;
```
Gets the messages produced by the domain layer.


```php
public function getOutput(): mixed;
```
Gets the output produced from the domain layer.


```php
public function getStatus(): mixed;
```
Gets the status of this payload.




## Domain\Payload\Status 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/Status.zep)


-   __Namespace__

    - `Phalcon\Domain\Payload`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Holds the status codes for the payload


### Constants
```php
const ACCEPTED = ACCEPTED;
const AUTHENTICATED = AUTHENTICATED;
const AUTHORIZED = AUTHORIZED;
const CREATED = CREATED;
const DELETED = DELETED;
const ERROR = ERROR;
const FAILURE = FAILURE;
const FOUND = FOUND;
const NOT_ACCEPTED = NOT_ACCEPTED;
const NOT_AUTHENTICATED = NOT_AUTHENTICATED;
const NOT_AUTHORIZED = NOT_AUTHORIZED;
const NOT_CREATED = NOT_CREATED;
const NOT_DELETED = NOT_DELETED;
const NOT_FOUND = NOT_FOUND;
const NOT_UPDATED = NOT_UPDATED;
const NOT_VALID = NOT_VALID;
const PROCESSING = PROCESSING;
const SUCCESS = SUCCESS;
const UPDATED = UPDATED;
const VALID = VALID;
```

### Methods

```php
final private function __construct();
```
Instantiation not allowed.




## Domain\Payload\WriteableInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/WriteableInterface.zep)


-   __Namespace__

    - `Phalcon\Domain\Payload`

-   __Uses__
    
    - `Throwable`

-   __Extends__
    

-   __Implements__
    

This interface is used for consumers (write)


### Methods

```php
public function setException( Throwable $exception ): PayloadInterface;
```
Sets an exception produced by the domain layer.


```php
public function setExtras( mixed $extras ): PayloadInterface;
```
Sets arbitrary extra values produced by the domain layer.


```php
public function setInput( mixed $input ): PayloadInterface;
```
Sets the input received by the domain layer.


```php
public function setMessages( mixed $messages ): PayloadInterface;
```
Sets the messages produced by the domain layer.


```php
public function setOutput( mixed $output ): PayloadInterface;
```
Sets the output produced from the domain layer.


```php
public function setStatus( mixed $status ): PayloadInterface;
```
Sets the status of this payload.


