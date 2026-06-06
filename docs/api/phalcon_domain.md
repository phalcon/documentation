---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Domain\Payload\Payload

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/Payload.zep){ .src-btn }

Holds the payload

<div class="api-tree" markdown>

- **`Phalcon\Domain\Payload\Payload`** — implements [`Phalcon\Domain\Payload\PayloadInterface`](#domainpayloadpayloadinterface)

</div>

__Uses__ `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#domainpayloadpayload-getexception">
<code class="vis vis-public">public</code>
<code class="ret">Throwable|null</code>
<code class="sig">getException()</code>
<span class="desc">Gets the potential exception thrown in the domain layer</span>
</a>
<a class="api-item" href="#domainpayloadpayload-getextras">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getExtras()</code>
<span class="desc">Extra information</span>
</a>
<a class="api-item" href="#domainpayloadpayload-getinput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getInput()</code>
<span class="desc">Input</span>
</a>
<a class="api-item" href="#domainpayloadpayload-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getMessages()</code>
<span class="desc">Messages</span>
</a>
<a class="api-item" href="#domainpayloadpayload-getoutput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getOutput()</code>
<span class="desc">Output</span>
</a>
<a class="api-item" href="#domainpayloadpayload-getstatus">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getStatus()</code>
<span class="desc">Status</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setexception">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setException( Throwable $exception )</code>
<span class="desc">Sets an exception thrown in the domain</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setextras">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setExtras( mixed $extras )</code>
<span class="desc">Sets arbitrary extra domain information.</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setinput">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setInput( mixed $input )</code>
<span class="desc">Sets the domain input.</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setmessages">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setMessages( mixed $messages )</code>
<span class="desc">Sets the domain messages.</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setoutput">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setOutput( mixed $output )</code>
<span class="desc">Sets the domain output.</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setstatus">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setStatus( mixed $status )</code>
<span class="desc">Sets the payload status.</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$exception = null` `Throwable|null`

    Exception if any

-   `protected`{ .vis-protected } `$extras` `mixed`

    Extra information

-   `protected`{ .vis-protected } `$input` `mixed`

    Input

-   `protected`{ .vis-protected } `$messages` `mixed`

    Messages

-   `protected`{ .vis-protected } `$output` `mixed`

    Output

-   `protected`{ .vis-protected } `$status` `mixed`

    Status

</div>

### Methods

<div class="api-group">Public · 12</div>

#### `getException()` { #domainpayloadpayload-getexception }

```php
public function getException(): Throwable|null;
```

Gets the potential exception thrown in the domain layer

#### `getExtras()` { #domainpayloadpayload-getextras }

```php
public function getExtras(): mixed;
```

Extra information

#### `getInput()` { #domainpayloadpayload-getinput }

```php
public function getInput(): mixed;
```

Input

#### `getMessages()` { #domainpayloadpayload-getmessages }

```php
public function getMessages(): mixed;
```

Messages

#### `getOutput()` { #domainpayloadpayload-getoutput }

```php
public function getOutput(): mixed;
```

Output

#### `getStatus()` { #domainpayloadpayload-getstatus }

```php
public function getStatus(): mixed;
```

Status

#### `setException()` { #domainpayloadpayload-setexception }

```php
public function setException( Throwable $exception ): PayloadInterface;
```

Sets an exception thrown in the domain

#### `setExtras()` { #domainpayloadpayload-setextras }

```php
public function setExtras( mixed $extras ): PayloadInterface;
```

Sets arbitrary extra domain information.

#### `setInput()` { #domainpayloadpayload-setinput }

```php
public function setInput( mixed $input ): PayloadInterface;
```

Sets the domain input.

#### `setMessages()` { #domainpayloadpayload-setmessages }

```php
public function setMessages( mixed $messages ): PayloadInterface;
```

Sets the domain messages.

#### `setOutput()` { #domainpayloadpayload-setoutput }

```php
public function setOutput( mixed $output ): PayloadInterface;
```

Sets the domain output.

#### `setStatus()` { #domainpayloadpayload-setstatus }

```php
public function setStatus( mixed $status ): PayloadInterface;
```

Sets the payload status.


## Domain\Payload\PayloadFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/PayloadFactory.zep){ .src-btn }

Factory to create payload objects

<div class="api-tree" markdown>

- **`Phalcon\Domain\Payload\PayloadFactory`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#domainpayloadpayloadfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">newInstance()</code>
<span class="desc">Instantiate a new object</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `newInstance()` { #domainpayloadpayloadfactory-newinstance }

```php
public function newInstance(): PayloadInterface;
```

Instantiate a new object


## Domain\Payload\PayloadInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/PayloadInterface.zep){ .src-btn }

This interface is used for consumers

<div class="api-tree" markdown>

- [`Phalcon\Domain\Payload\ReadableInterface`](#domainpayloadreadableinterface)
    - **`Phalcon\Domain\Payload\PayloadInterface`** — extends [`Phalcon\Domain\Payload\ReadableInterface`](#domainpayloadreadableinterface), [`Phalcon\Domain\Payload\WriteableInterface`](#domainpayloadwriteableinterface)

</div>


## Domain\Payload\ReadableInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/ReadableInterface.zep){ .src-btn }

This interface is used for consumers (read only)

<div class="api-tree" markdown>

- **`Phalcon\Domain\Payload\ReadableInterface`**
    - [`Phalcon\Domain\Payload\PayloadInterface`](#domainpayloadpayloadinterface)

</div>

__Uses__ `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#domainpayloadreadableinterface-getexception">
<code class="vis vis-public">public</code>
<code class="ret">Throwable|null</code>
<code class="sig">getException()</code>
<span class="desc">Gets the potential exception thrown in the domain layer</span>
</a>
<a class="api-item" href="#domainpayloadreadableinterface-getextras">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getExtras()</code>
<span class="desc">Gets arbitrary extra values produced by the domain layer.</span>
</a>
<a class="api-item" href="#domainpayloadreadableinterface-getinput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getInput()</code>
<span class="desc">Gets the input received by the domain layer.</span>
</a>
<a class="api-item" href="#domainpayloadreadableinterface-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getMessages()</code>
<span class="desc">Gets the messages produced by the domain layer.</span>
</a>
<a class="api-item" href="#domainpayloadreadableinterface-getoutput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getOutput()</code>
<span class="desc">Gets the output produced from the domain layer.</span>
</a>
<a class="api-item" href="#domainpayloadreadableinterface-getstatus">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig">getStatus()</code>
<span class="desc">Gets the status of this payload.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getException()` { #domainpayloadreadableinterface-getexception }

```php
public function getException(): Throwable|null;
```

Gets the potential exception thrown in the domain layer

#### `getExtras()` { #domainpayloadreadableinterface-getextras }

```php
public function getExtras(): mixed;
```

Gets arbitrary extra values produced by the domain layer.

#### `getInput()` { #domainpayloadreadableinterface-getinput }

```php
public function getInput(): mixed;
```

Gets the input received by the domain layer.

#### `getMessages()` { #domainpayloadreadableinterface-getmessages }

```php
public function getMessages(): mixed;
```

Gets the messages produced by the domain layer.

#### `getOutput()` { #domainpayloadreadableinterface-getoutput }

```php
public function getOutput(): mixed;
```

Gets the output produced from the domain layer.

#### `getStatus()` { #domainpayloadreadableinterface-getstatus }

```php
public function getStatus(): mixed;
```

Gets the status of this payload.


## Domain\Payload\Status

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/Status.zep){ .src-btn }

Holds the status codes for the payload

<div class="api-tree" markdown>

- **`Phalcon\Domain\Payload\Status`**

</div>

### Constants

<div class="api-list" markdown>

-   `ACCEPTED = "ACCEPTED"` `string`

-   `AUTHENTICATED = "AUTHENTICATED"` `string`

-   `AUTHORIZED = "AUTHORIZED"` `string`

-   `CREATED = "CREATED"` `string`

-   `DELETED = "DELETED"` `string`

-   `ERROR = "ERROR"` `string`

-   `FAILURE = "FAILURE"` `string`

-   `FOUND = "FOUND"` `string`

-   `NOT_ACCEPTED = "NOT_ACCEPTED"` `string`

-   `NOT_AUTHENTICATED = "NOT_AUTHENTICATED"` `string`

-   `NOT_AUTHORIZED = "NOT_AUTHORIZED"` `string`

-   `NOT_CREATED = "NOT_CREATED"` `string`

-   `NOT_DELETED = "NOT_DELETED"` `string`

-   `NOT_FOUND = "NOT_FOUND"` `string`

-   `NOT_UPDATED = "NOT_UPDATED"` `string`

-   `NOT_VALID = "NOT_VALID"` `string`

-   `PROCESSING = "PROCESSING"` `string`

-   `SUCCESS = "SUCCESS"` `string`

-   `UPDATED = "UPDATED"` `string`

-   `VALID = "VALID"` `string`

</div>


## Domain\Payload\WriteableInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/WriteableInterface.zep){ .src-btn }

This interface is used for consumers (write)

<div class="api-tree" markdown>

- **`Phalcon\Domain\Payload\WriteableInterface`**

</div>

__Uses__ `Throwable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#domainpayloadwriteableinterface-setexception">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setException( Throwable $exception )</code>
<span class="desc">Sets an exception produced by the domain layer.</span>
</a>
<a class="api-item" href="#domainpayloadwriteableinterface-setextras">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setExtras( mixed $extras )</code>
<span class="desc">Sets arbitrary extra values produced by the domain layer.</span>
</a>
<a class="api-item" href="#domainpayloadwriteableinterface-setinput">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setInput( mixed $input )</code>
<span class="desc">Sets the input received by the domain layer.</span>
</a>
<a class="api-item" href="#domainpayloadwriteableinterface-setmessages">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setMessages( mixed $messages )</code>
<span class="desc">Sets the messages produced by the domain layer.</span>
</a>
<a class="api-item" href="#domainpayloadwriteableinterface-setoutput">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setOutput( mixed $output )</code>
<span class="desc">Sets the output produced from the domain layer.</span>
</a>
<a class="api-item" href="#domainpayloadwriteableinterface-setstatus">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig">setStatus( mixed $status )</code>
<span class="desc">Sets the status of this payload.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `setException()` { #domainpayloadwriteableinterface-setexception }

```php
public function setException( Throwable $exception ): PayloadInterface;
```

Sets an exception produced by the domain layer.

#### `setExtras()` { #domainpayloadwriteableinterface-setextras }

```php
public function setExtras( mixed $extras ): PayloadInterface;
```

Sets arbitrary extra values produced by the domain layer.

#### `setInput()` { #domainpayloadwriteableinterface-setinput }

```php
public function setInput( mixed $input ): PayloadInterface;
```

Sets the input received by the domain layer.

#### `setMessages()` { #domainpayloadwriteableinterface-setmessages }

```php
public function setMessages( mixed $messages ): PayloadInterface;
```

Sets the messages produced by the domain layer.

#### `setOutput()` { #domainpayloadwriteableinterface-setoutput }

```php
public function setOutput( mixed $output ): PayloadInterface;
```

Sets the output produced from the domain layer.

#### `setStatus()` { #domainpayloadwriteableinterface-setstatus }

```php
public function setStatus( mixed $status ): PayloadInterface;
```

Sets the status of this payload.
