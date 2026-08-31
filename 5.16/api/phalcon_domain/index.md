---
title: "Phalcon Domain"
version: "5.16"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Domain

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Domain\Payload\Payload

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/Payload.zep">Source on GitHub</a>

Holds the payload

<div class="api-tree">

- **`Phalcon\Domain\Payload\Payload`** — implements [`Phalcon\Domain\Payload\PayloadInterface`](#domainpayloadpayloadinterface)

</div>

__Uses__ `Throwable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#domainpayloadpayload-getexception">
<code class="vis vis-public">public</code>
<code class="ret">Throwable|null</code>
<code class="sig"><span class="sf">getException</span>()</code>
<span class="desc">Gets the potential exception thrown in the domain layer</span>
</a>
<a class="api-item" href="#domainpayloadpayload-getextras">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getExtras</span>()</code>
<span class="desc">Extra information</span>
</a>
<a class="api-item" href="#domainpayloadpayload-getinput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getInput</span>()</code>
<span class="desc">Input</span>
</a>
<a class="api-item" href="#domainpayloadpayload-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getMessages</span>()</code>
<span class="desc">Messages</span>
</a>
<a class="api-item" href="#domainpayloadpayload-getoutput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getOutput</span>()</code>
<span class="desc">Output</span>
</a>
<a class="api-item" href="#domainpayloadpayload-getstatus">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getStatus</span>()</code>
<span class="desc">Status</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setexception">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">setException</span>( <span class="st">Throwable</span> <span class="sv">$exception</span> )</code>
<span class="desc">Sets an exception thrown in the domain</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setextras">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">setExtras</span>( <span class="st">mixed</span> <span class="sv">$extras</span> )</code>
<span class="desc">Sets arbitrary extra domain information.</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setinput">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">setInput</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
<span class="desc">Sets the domain input.</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setmessages">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">setMessages</span>( <span class="st">mixed</span> <span class="sv">$messages</span> )</code>
<span class="desc">Sets the domain messages.</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setoutput">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">setOutput</span>( <span class="st">mixed</span> <span class="sv">$output</span> )</code>
<span class="desc">Sets the domain output.</span>
</a>
<a class="api-item" href="#domainpayloadpayload-setstatus">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">setStatus</span>( <span class="st">mixed</span> <span class="sv">$status</span> )</code>
<span class="desc">Sets the payload status.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Throwable|null</code>
<code class="sig"><span class="sv">$exception</span><span class="sm"> = null</span></code>
<span class="desc">Exception if any</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$extras</span></code>
<span class="desc">Extra information</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$input</span></code>
<span class="desc">Input</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$messages</span></code>
<span class="desc">Messages</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$output</span></code>
<span class="desc">Output</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$status</span></code>
<span class="desc">Status</span>
</div>
</div>

### Methods

<div class="api-group">Public · 12</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/PayloadFactory.zep">Source on GitHub</a>

Factory to create payload objects.

It exists so that payload creation can be registered as a service in the DI
container and substituted in tests, rather than constructing `Payload`
instances directly.

<div class="api-tree">

- **`Phalcon\Domain\Payload\PayloadFactory`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#domainpayloadpayloadfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">PayloadInterface</code>
<code class="sig"><span class="sf">newInstance</span>()</code>
<span class="desc">Instantiate a new object</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="domainpayloadpayloadfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(): PayloadInterface;
```

Instantiate a new object

## Domain\Payload\PayloadInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/PayloadInterface.zep">Source on GitHub</a>

This interface is used for consumers

<div class="api-tree">

- [`Phalcon\Contracts\Domain\Payload\Readable`](/5.16/api/phalcon_contracts/#contractsdomainpayloadreadable)
- [`Phalcon\Domain\Payload\ReadableInterface`](#domainpayloadreadableinterface)
- **`Phalcon\Domain\Payload\PayloadInterface`** — extends [`Phalcon\Domain\Payload\ReadableInterface`](#domainpayloadreadableinterface), [`Phalcon\Domain\Payload\WriteableInterface`](#domainpayloadwriteableinterface), [`Phalcon\Contracts\Domain\Payload\Payload`](/5.16/api/phalcon_contracts/#contractsdomainpayloadpayload)

</div>

__Uses__ `Phalcon\Contracts\Domain\Payload\Payload`

## Domain\Payload\ReadableInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/ReadableInterface.zep">Source on GitHub</a>

This interface is used for consumers (read only)

<div class="api-tree">

- [`Phalcon\Contracts\Domain\Payload\Readable`](/5.16/api/phalcon_contracts/#contractsdomainpayloadreadable)
- **`Phalcon\Domain\Payload\ReadableInterface`**
- [`Phalcon\Domain\Payload\PayloadInterface`](#domainpayloadpayloadinterface)

</div>

__Uses__ `Phalcon\Contracts\Domain\Payload\Readable`

## Domain\Payload\Status

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/Status.zep">Source on GitHub</a>

Holds the status codes for the payload.

The two failure-related statuses are distinct, following the Aura.Payload
lineage:

- `ERROR` means an exception was raised while the domain layer was running.
  By convention, `Payload::setException()` pairs with the `ERROR` status.
- `FAILURE` means the domain layer ran to completion but declined the
  request (for example, a business rule was not satisfied); no exception
  was raised.

@see Payload

<div class="api-tree">

- **`Phalcon\Domain\Payload\Status`**

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">ACCEPTED</span><span class="sm"> = &quot;ACCEPTED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">AUTHENTICATED</span><span class="sm"> = &quot;AUTHENTICATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">AUTHORIZED</span><span class="sm"> = &quot;AUTHORIZED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">CREATED</span><span class="sm"> = &quot;CREATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">DELETED</span><span class="sm"> = &quot;DELETED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">ERROR</span><span class="sm"> = &quot;ERROR&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FAILURE</span><span class="sm"> = &quot;FAILURE&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FOUND</span><span class="sm"> = &quot;FOUND&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_ACCEPTED</span><span class="sm"> = &quot;NOT_ACCEPTED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_AUTHENTICATED</span><span class="sm"> = &quot;NOT_AUTHENTICATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_AUTHORIZED</span><span class="sm"> = &quot;NOT_AUTHORIZED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_CREATED</span><span class="sm"> = &quot;NOT_CREATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_DELETED</span><span class="sm"> = &quot;NOT_DELETED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_FOUND</span><span class="sm"> = &quot;NOT_FOUND&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_UPDATED</span><span class="sm"> = &quot;NOT_UPDATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">NOT_VALID</span><span class="sm"> = &quot;NOT_VALID&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">PROCESSING</span><span class="sm"> = &quot;PROCESSING&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">SUCCESS</span><span class="sm"> = &quot;SUCCESS&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">UPDATED</span><span class="sm"> = &quot;UPDATED&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">VALID</span><span class="sm"> = &quot;VALID&quot;</span></code>
</div>
</div>

## Domain\Payload\WriteableInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Domain/Payload/WriteableInterface.zep">Source on GitHub</a>

This interface is used for consumers (write)

<div class="api-tree">

- [`Phalcon\Contracts\Domain\Payload\Writeable`](/5.16/api/phalcon_contracts/#contractsdomainpayloadwriteable)
- **`Phalcon\Domain\Payload\WriteableInterface`**

</div>

__Uses__ `Phalcon\Contracts\Domain\Payload\Writeable`

Source: https://docs.phalcon.io/5.16/api/phalcon_domain/index.mdx
