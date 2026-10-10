---
title: "Phalcon Domain"
version: "5.22"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Domain

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Domain\Payload\Payload

Class

Holds the payload

- **`Phalcon\Domain\Payload\Payload`** - implements [`Phalcon\Domain\Payload\PayloadInterface`](#domainpayloadpayloadinterface)

`Throwable`

### Method Summary

- `public getException(): Throwable|null` — Gets the potential exception thrown in the domain layer

- `public getExtras(): mixed` — Extra information

- `public getInput(): mixed` — Input

- `public getMessages(): mixed` — Messages

- `public getOutput(): mixed` — Output

- `public getStatus(): mixed` — Status

- `public setException(Throwable $exception): PayloadInterface` — Sets an exception thrown in the domain

- `public setExtras(mixed $extras): PayloadInterface` — Sets arbitrary extra domain information.

- `public setInput(mixed $input): PayloadInterface` — Sets the domain input.

- `public setMessages(mixed $messages): PayloadInterface` — Sets the domain messages.

- `public setOutput(mixed $output): PayloadInterface` — Sets the domain output.

- `public setStatus(mixed $status): PayloadInterface` — Sets the payload status.

### Properties

- `protected Throwable|null $exception = null` — Exception if any

- `protected mixed $extras` — Extra information

- `protected mixed $input` — Input

- `protected mixed $messages` — Messages

- `protected mixed $output` — Output

- `protected mixed $status` — Status

### Methods

<h4 id="domainpayloadpayload-getexception"><code>getException()</code></h4>

```php
public function getException(): Throwable|null;
```

Gets the potential exception thrown in the domain layer

<h4 id="domainpayloadpayload-getextras"><code>getExtras()</code></h4>

```php
public function getExtras(): mixed;
```

Extra information

<h4 id="domainpayloadpayload-getinput"><code>getInput()</code></h4>

```php
public function getInput(): mixed;
```

Input

<h4 id="domainpayloadpayload-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): mixed;
```

Messages

<h4 id="domainpayloadpayload-getoutput"><code>getOutput()</code></h4>

```php
public function getOutput(): mixed;
```

Output

<h4 id="domainpayloadpayload-getstatus"><code>getStatus()</code></h4>

```php
public function getStatus(): mixed;
```

Status

Status values are drawn from the `Status` vocabulary.

@see Status

<h4 id="domainpayloadpayload-setexception"><code>setException()</code></h4>

```php
public function setException( Throwable $exception ): PayloadInterface;
```

Sets an exception thrown in the domain

<h4 id="domainpayloadpayload-setextras"><code>setExtras()</code></h4>

```php
public function setExtras( mixed $extras ): PayloadInterface;
```

Sets arbitrary extra domain information.

<h4 id="domainpayloadpayload-setinput"><code>setInput()</code></h4>

```php
public function setInput( mixed $input ): PayloadInterface;
```

Sets the domain input.

<h4 id="domainpayloadpayload-setmessages"><code>setMessages()</code></h4>

```php
public function setMessages( mixed $messages ): PayloadInterface;
```

Sets the domain messages.

<h4 id="domainpayloadpayload-setoutput"><code>setOutput()</code></h4>

```php
public function setOutput( mixed $output ): PayloadInterface;
```

Sets the domain output.

<h4 id="domainpayloadpayload-setstatus"><code>setStatus()</code></h4>

```php
public function setStatus( mixed $status ): PayloadInterface;
```

Sets the payload status.

Status values are drawn from the `Status` vocabulary.

@see Status


## Domain\Payload\PayloadFactory

Class

Factory to create payload objects.

It exists so that payload creation can be registered as a service in the DI
container and substituted in tests, rather than constructing `Payload`
instances directly.

- **`Phalcon\Domain\Payload\PayloadFactory`**

### Method Summary

- `public newInstance(): PayloadInterface` — Instantiate a new object

### Methods

<h4 id="domainpayloadpayloadfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(): PayloadInterface;
```

Instantiate a new object


## Domain\Payload\PayloadInterface

Interface

This interface is used for consumers

- [`Phalcon\Contracts\Domain\Payload\Readable`](/5.22/api/phalcon_contracts/#contractsdomainpayloadreadable)
  - [`Phalcon\Domain\Payload\ReadableInterface`](#domainpayloadreadableinterface)
    - **`Phalcon\Domain\Payload\PayloadInterface`** - extends [`Phalcon\Domain\Payload\ReadableInterface`](#domainpayloadreadableinterface), [`Phalcon\Domain\Payload\WriteableInterface`](#domainpayloadwriteableinterface), [`Phalcon\Contracts\Domain\Payload\Payload`](/5.22/api/phalcon_contracts/#contractsdomainpayloadpayload)

`Phalcon\Contracts\Domain\Payload\Payload`


## Domain\Payload\ReadableInterface

Interface

This interface is used for consumers (read only)

- [`Phalcon\Contracts\Domain\Payload\Readable`](/5.22/api/phalcon_contracts/#contractsdomainpayloadreadable)
  - **`Phalcon\Domain\Payload\ReadableInterface`**
    - [`Phalcon\Domain\Payload\PayloadInterface`](#domainpayloadpayloadinterface)

`Phalcon\Contracts\Domain\Payload\Readable`


## Domain\Payload\Status

Class

Holds the status codes for the payload.

The two failure-related statuses are distinct, following the Aura.Payload
lineage:

- `ERROR` means an exception was raised while the domain layer was running.
  By convention, `Payload::setException()` pairs with the `ERROR` status.
- `FAILURE` means the domain layer ran to completion but declined the
  request (for example, a business rule was not satisfied); no exception
  was raised.

@see Payload

- **`Phalcon\Domain\Payload\Status`**

### Constants

- `const string ACCEPTED = "ACCEPTED"`

- `const string AUTHENTICATED = "AUTHENTICATED"`

- `const string AUTHORIZED = "AUTHORIZED"`

- `const string CREATED = "CREATED"`

- `const string DELETED = "DELETED"`

- `const string ERROR = "ERROR"`

- `const string FAILURE = "FAILURE"`

- `const string FOUND = "FOUND"`

- `const string NOT_ACCEPTED = "NOT_ACCEPTED"`

- `const string NOT_AUTHENTICATED = "NOT_AUTHENTICATED"`

- `const string NOT_AUTHORIZED = "NOT_AUTHORIZED"`

- `const string NOT_CREATED = "NOT_CREATED"`

- `const string NOT_DELETED = "NOT_DELETED"`

- `const string NOT_FOUND = "NOT_FOUND"`

- `const string NOT_UPDATED = "NOT_UPDATED"`

- `const string NOT_VALID = "NOT_VALID"`

- `const string PROCESSING = "PROCESSING"`

- `const string SUCCESS = "SUCCESS"`

- `const string UPDATED = "UPDATED"`

- `const string VALID = "VALID"`


## Domain\Payload\WriteableInterface

Interface

This interface is used for consumers (write)

- [`Phalcon\Contracts\Domain\Payload\Writeable`](/5.22/api/phalcon_contracts/#contractsdomainpayloadwriteable)
  - **`Phalcon\Domain\Payload\WriteableInterface`**

`Phalcon\Contracts\Domain\Payload\Writeable`

Source: https://docs.phalcon.io/5.22/api/phalcon_domain/index.mdx
