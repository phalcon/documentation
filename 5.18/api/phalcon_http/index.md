---
title: "Phalcon Http"
version: "5.18"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Http

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Http\Cookie

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Cookie.zep">Source on GitHub</a>

Provide OO wrappers to manage a HTTP cookie.

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/5.18/api/phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Http\Cookie`** - implements [`Phalcon\Http\Cookie\CookieInterface`](#httpcookiecookieinterface)

</div>

__Uses__ `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Encryption\Crypt\CryptInterface` · `Phalcon\Filter\FilterInterface` · `Phalcon\Http\Cookie\CookieInterface` · `Phalcon\Http\Cookie\Exception` · `Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort` · `Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired` · `Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable` · `Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable` · `Phalcon\Http\Response\Exception` · `Phalcon\Http\Traits\EncryptionAwareTrait` · `Phalcon\Session\ManagerInterface` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookie-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$expire</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$path</span><span class="sm"> = &quot;/&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$secure</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$domain</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$httpOnly</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Phalcon\Http\Cookie constructor.</span>
</a>
<a class="api-item" href="#httpcookie-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Magic __toString method converts the cookie&#039;s value to string</span>
</a>
<a class="api-item" href="#httpcookie-delete">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">delete</span>()</code>
<span class="desc">Deletes the cookie by setting an expire time in the past</span>
</a>
<a class="api-item" href="#httpcookie-getdomain">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDomain</span>()</code>
<span class="desc">Returns the domain that the cookie is available to</span>
</a>
<a class="api-item" href="#httpcookie-getexpiration">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getExpiration</span>()</code>
<span class="desc">Returns the current expiration time</span>
</a>
<a class="api-item" href="#httpcookie-gethttponly">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getHttpOnly</span>()</code>
<span class="desc">Returns if the cookie is accessible only through the HTTP protocol</span>
</a>
<a class="api-item" href="#httpcookie-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the current cookie&#039;s name</span>
</a>
<a class="api-item" href="#httpcookie-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
<span class="desc">Returns the current cookie&#039;s options</span>
</a>
<a class="api-item" href="#httpcookie-getpath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPath</span>()</code>
<span class="desc">Returns the current cookie&#039;s path</span>
</a>
<a class="api-item" href="#httpcookie-getsecure">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getSecure</span>()</code>
<span class="desc">Returns whether the cookie must only be sent when the connection is</span>
</a>
<a class="api-item" href="#httpcookie-getvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getValue</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns the cookie&#039;s value.</span>
</a>
<a class="api-item" href="#httpcookie-restore">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">restore</span>()</code>
<span class="desc">Reads the cookie-related info from the SESSION to restore the cookie as</span>
</a>
<a class="api-item" href="#httpcookie-send">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">send</span>()</code>
<span class="desc">Sends the cookie to the HTTP client.</span>
</a>
<a class="api-item" href="#httpcookie-setdomain">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setDomain</span>( <span class="st">string</span> <span class="sv">$domain</span> )</code>
<span class="desc">Sets the domain that the cookie is available to</span>
</a>
<a class="api-item" href="#httpcookie-setexpiration">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setExpiration</span>( <span class="st">int</span> <span class="sv">$expire</span> )</code>
<span class="desc">Sets the cookie&#039;s expiration time</span>
</a>
<a class="api-item" href="#httpcookie-sethttponly">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setHttpOnly</span>( <span class="st">bool</span> <span class="sv">$httpOnly</span> )</code>
<span class="desc">Sets if the cookie is accessible only through the HTTP protocol</span>
</a>
<a class="api-item" href="#httpcookie-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Sets the cookie&#039;s options</span>
</a>
<a class="api-item" href="#httpcookie-setpath">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setPath</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
<span class="desc">Sets the cookie&#039;s path</span>
</a>
<a class="api-item" href="#httpcookie-setsecure">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setSecure</span>( <span class="st">bool</span> <span class="sv">$secure</span> )</code>
<span class="desc">Sets if the cookie must only be sent when the connection is secure (HTTPS)</span>
</a>
<a class="api-item" href="#httpcookie-setsignkey">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setSignKey</span>( <span class="st">string</span> <span class="sv">$signKey</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the cookie&#039;s sign key.</span>
</a>
<a class="api-item" href="#httpcookie-setvalue">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setValue</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Sets the cookie&#039;s value</span>
</a>
<a class="api-item" href="#httpcookie-useencryption">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">useEncryption</span>( <span class="st">bool</span> <span class="sv">$useEncryption</span> )</code>
<span class="desc">Sets if the cookie must be encrypted/decrypted automatically</span>
</a>
<a class="api-item" href="#httpcookie-assertsignkeyislongenough">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">assertSignKeyIsLongEnough</span>( <span class="st">string</span> <span class="sv">$signKey</span> )</code>
<span class="desc">Assert the cookie&#039;s key is enough long.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$domain</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$expire</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">FilterInterface|null</code>
<code class="sig"><span class="sv">$filter</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$httpOnly</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isRead</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isRestored</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$name</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$path</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$secure</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$signKey</span><span class="sm"> = null</span></code>
<span class="desc">The cookie&#039;s sign key.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sv">$value</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 22</div>

<h4 id="httpcookie-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $name,
mixed $value = null,
int $expire = 0,
string $path = "/",
bool $secure = false,
string $domain = "",
bool $httpOnly = false,
array $options = []
);
```

Phalcon\Http\Cookie constructor.

<h4 id="httpcookie-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

Magic __toString method converts the cookie's value to string

<h4 id="httpcookie-delete"><code>delete()</code></h4>

```php
public function delete();
```

Deletes the cookie by setting an expire time in the past

<h4 id="httpcookie-getdomain"><code>getDomain()</code></h4>

```php
public function getDomain(): string;
```

Returns the domain that the cookie is available to

<h4 id="httpcookie-getexpiration"><code>getExpiration()</code></h4>

```php
public function getExpiration(): int;
```

Returns the current expiration time

<h4 id="httpcookie-gethttponly"><code>getHttpOnly()</code></h4>

```php
public function getHttpOnly(): bool;
```

Returns if the cookie is accessible only through the HTTP protocol

<h4 id="httpcookie-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the current cookie's name

<h4 id="httpcookie-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Returns the current cookie's options

<h4 id="httpcookie-getpath"><code>getPath()</code></h4>

```php
public function getPath(): string;
```

Returns the current cookie's path

<h4 id="httpcookie-getsecure"><code>getSecure()</code></h4>

```php
public function getSecure(): bool;
```

Returns whether the cookie must only be sent when the connection is
secure (HTTPS)

<h4 id="httpcookie-getvalue"><code>getValue()</code></h4>

```php
public function getValue(
mixed $filters = null,
mixed $defaultValue = null
): mixed;
```

Returns the cookie's value.

<h4 id="httpcookie-restore"><code>restore()</code></h4>

```php
public function restore(): CookieInterface;
```

Reads the cookie-related info from the SESSION to restore the cookie as
it was set.

This method is automatically called internally so normally you don't
need to call it.

<h4 id="httpcookie-send"><code>send()</code></h4>

```php
public function send(): CookieInterface;
```

Sends the cookie to the HTTP client.

Stores the cookie definition in session.

<h4 id="httpcookie-setdomain"><code>setDomain()</code></h4>

```php
public function setDomain( string $domain ): CookieInterface;
```

Sets the domain that the cookie is available to

<h4 id="httpcookie-setexpiration"><code>setExpiration()</code></h4>

```php
public function setExpiration( int $expire ): CookieInterface;
```

Sets the cookie's expiration time

<h4 id="httpcookie-sethttponly"><code>setHttpOnly()</code></h4>

```php
public function setHttpOnly( bool $httpOnly ): CookieInterface;
```

Sets if the cookie is accessible only through the HTTP protocol

<h4 id="httpcookie-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): CookieInterface;
```

Sets the cookie's options

<h4 id="httpcookie-setpath"><code>setPath()</code></h4>

```php
public function setPath( string $path ): CookieInterface;
```

Sets the cookie's path

<h4 id="httpcookie-setsecure"><code>setSecure()</code></h4>

```php
public function setSecure( bool $secure ): CookieInterface;
```

Sets if the cookie must only be sent when the connection is secure (HTTPS)

<h4 id="httpcookie-setsignkey"><code>setSignKey()</code></h4>

```php
public function setSignKey( string $signKey = null ): CookieInterface;
```

Sets the cookie's sign key.

The `$signKey' MUST be at least 32 characters long
and generated using a cryptographically secure pseudo random generator.

Use NULL to disable cookie signing.

@see \Phalcon\Encryption\Security\Random

<h4 id="httpcookie-setvalue"><code>setValue()</code></h4>

```php
public function setValue( mixed $value ): CookieInterface;
```

Sets the cookie's value

<h4 id="httpcookie-useencryption"><code>useEncryption()</code></h4>

```php
public function useEncryption( bool $useEncryption ): CookieInterface;
```

Sets if the cookie must be encrypted/decrypted automatically

<div class="api-group">Protected · 1</div>

<h4 id="httpcookie-assertsignkeyislongenough"><code>assertSignKeyIsLongEnough()</code></h4>

```php
protected function assertSignKeyIsLongEnough( string $signKey ): void;
```

Assert the cookie's key is enough long.

## Http\Cookie\CookieInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Cookie/CookieInterface.zep">Source on GitHub</a>

Interface for Phalcon\Http\Cookie

<div class="api-tree">

- **`Phalcon\Http\Cookie\CookieInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookiecookieinterface-delete">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">delete</span>()</code>
<span class="desc">Deletes the cookie</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-getdomain">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDomain</span>()</code>
<span class="desc">Returns the domain that the cookie is available to</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-getexpiration">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getExpiration</span>()</code>
<span class="desc">Returns the current expiration time</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-gethttponly">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getHttpOnly</span>()</code>
<span class="desc">Returns if the cookie is accessible only through the HTTP protocol</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the current cookie&#039;s name</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
<span class="desc">Returns the current cookie&#039;s options</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-getpath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPath</span>()</code>
<span class="desc">Returns the current cookie&#039;s path</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-getsecure">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getSecure</span>()</code>
<span class="desc">Returns whether the cookie must only be sent when the connection is</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-getvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getValue</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns the cookie&#039;s value.</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-isusingencryption">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isUsingEncryption</span>()</code>
<span class="desc">Check if the cookie is using implicit encryption</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-send">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">send</span>()</code>
<span class="desc">Sends the cookie to the HTTP client</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-setdomain">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setDomain</span>( <span class="st">string</span> <span class="sv">$domain</span> )</code>
<span class="desc">Sets the domain that the cookie is available to</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-setexpiration">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setExpiration</span>( <span class="st">int</span> <span class="sv">$expire</span> )</code>
<span class="desc">Sets the cookie&#039;s expiration time</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-sethttponly">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setHttpOnly</span>( <span class="st">bool</span> <span class="sv">$httpOnly</span> )</code>
<span class="desc">Sets if the cookie is accessible only through the HTTP protocol</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Sets the cookie&#039;s options</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-setpath">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setPath</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
<span class="desc">Sets the cookie&#039;s expiration time</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-setsecure">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setSecure</span>( <span class="st">bool</span> <span class="sv">$secure</span> )</code>
<span class="desc">Sets if the cookie must only be sent when the connection is secure</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-setvalue">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setValue</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Sets the cookie&#039;s value</span>
</a>
<a class="api-item" href="#httpcookiecookieinterface-useencryption">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">useEncryption</span>( <span class="st">bool</span> <span class="sv">$useEncryption</span> )</code>
<span class="desc">Sets if the cookie must be encrypted/decrypted automatically</span>
</a>
</div>

### Methods

<div class="api-group">Public · 19</div>

<h4 id="httpcookiecookieinterface-delete"><code>delete()</code></h4>

```php
public function delete();
```

Deletes the cookie

<h4 id="httpcookiecookieinterface-getdomain"><code>getDomain()</code></h4>

```php
public function getDomain(): string;
```

Returns the domain that the cookie is available to

<h4 id="httpcookiecookieinterface-getexpiration"><code>getExpiration()</code></h4>

```php
public function getExpiration(): int;
```

Returns the current expiration time

<h4 id="httpcookiecookieinterface-gethttponly"><code>getHttpOnly()</code></h4>

```php
public function getHttpOnly(): bool;
```

Returns if the cookie is accessible only through the HTTP protocol

<h4 id="httpcookiecookieinterface-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the current cookie's name

<h4 id="httpcookiecookieinterface-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Returns the current cookie's options

<h4 id="httpcookiecookieinterface-getpath"><code>getPath()</code></h4>

```php
public function getPath(): string;
```

Returns the current cookie's path

<h4 id="httpcookiecookieinterface-getsecure"><code>getSecure()</code></h4>

```php
public function getSecure(): bool;
```

Returns whether the cookie must only be sent when the connection is
secure (HTTPS)

<h4 id="httpcookiecookieinterface-getvalue"><code>getValue()</code></h4>

```php
public function getValue(
mixed $filters = null,
mixed $defaultValue = null
): mixed;
```

Returns the cookie's value.

<h4 id="httpcookiecookieinterface-isusingencryption"><code>isUsingEncryption()</code></h4>

```php
public function isUsingEncryption(): bool;
```

Check if the cookie is using implicit encryption

<h4 id="httpcookiecookieinterface-send"><code>send()</code></h4>

```php
public function send(): CookieInterface;
```

Sends the cookie to the HTTP client

<h4 id="httpcookiecookieinterface-setdomain"><code>setDomain()</code></h4>

```php
public function setDomain( string $domain ): CookieInterface;
```

Sets the domain that the cookie is available to

<h4 id="httpcookiecookieinterface-setexpiration"><code>setExpiration()</code></h4>

```php
public function setExpiration( int $expire ): CookieInterface;
```

Sets the cookie's expiration time

<h4 id="httpcookiecookieinterface-sethttponly"><code>setHttpOnly()</code></h4>

```php
public function setHttpOnly( bool $httpOnly ): CookieInterface;
```

Sets if the cookie is accessible only through the HTTP protocol

<h4 id="httpcookiecookieinterface-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): CookieInterface;
```

Sets the cookie's options

<h4 id="httpcookiecookieinterface-setpath"><code>setPath()</code></h4>

```php
public function setPath( string $path ): CookieInterface;
```

Sets the cookie's expiration time

<h4 id="httpcookiecookieinterface-setsecure"><code>setSecure()</code></h4>

```php
public function setSecure( bool $secure ): CookieInterface;
```

Sets if the cookie must only be sent when the connection is secure
(HTTPS)

<h4 id="httpcookiecookieinterface-setvalue"><code>setValue()</code></h4>

```php
public function setValue( mixed $value ): CookieInterface;
```

Sets the cookie's value

<h4 id="httpcookiecookieinterface-useencryption"><code>useEncryption()</code></h4>

```php
public function useEncryption( bool $useEncryption ): CookieInterface;
```

Sets if the cookie must be encrypted/decrypted automatically

## Http\Cookie\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Cookie/Exception.zep">Source on GitHub</a>

Phalcon\Http\Cookie\Exception

Exceptions thrown in Phalcon\Http\Cookie will use this class.

<div class="api-tree">

- `\Exception`
- **`Phalcon\Http\Cookie\Exception`**
- [`Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort`](#httpcookieexceptionscookiekeytooshort)
- [`Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired`](#httpcookieexceptionscryptinterfacerequired)
- [`Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable`](#httpcookieexceptionscryptserviceunavailable)
- [`Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable`](#httpcookieexceptionsfilterserviceunavailable)

</div>

## Http\Cookie\Exceptions\CookieKeyTooShort

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Cookie/Exceptions/CookieKeyTooShort.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
- **`Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort`**

</div>

__Uses__ `Phalcon\Http\Cookie\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookieexceptionscookiekeytooshort-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$length</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httpcookieexceptionscookiekeytooshort-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $length );
```

## Http\Cookie\Exceptions\CryptInterfaceRequired

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Cookie/Exceptions/CryptInterfaceRequired.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
- **`Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired`**

</div>

__Uses__ `Phalcon\Http\Cookie\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookieexceptionscryptinterfacerequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httpcookieexceptionscryptinterfacerequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Cookie\Exceptions\CryptServiceUnavailable

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Cookie/Exceptions/CryptServiceUnavailable.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
- **`Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable`**

</div>

__Uses__ `Phalcon\Http\Cookie\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookieexceptionscryptserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httpcookieexceptionscryptserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Cookie\Exceptions\FilterServiceUnavailable

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Cookie/Exceptions/FilterServiceUnavailable.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
- **`Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable`**

</div>

__Uses__ `Phalcon\Http\Cookie\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookieexceptionsfilterserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httpcookieexceptionsfilterserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Message\RequestMethodInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Message/RequestMethodInterface.zep">Source on GitHub</a>

Interface for Request methods

Implementation of this file has been influenced by PHP FIG
@link    https://github.com/php-fig/http-message-util/
@license https://github.com/php-fig/http-message-util/blob/master/LICENSE

<div class="api-tree">

- **`Phalcon\Http\Message\RequestMethodInterface`**

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_CONNECT</span><span class="sm"> = &quot;CONNECT&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_DELETE</span><span class="sm"> = &quot;DELETE&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_GET</span><span class="sm"> = &quot;GET&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_HEAD</span><span class="sm"> = &quot;HEAD&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_OPTIONS</span><span class="sm"> = &quot;OPTIONS&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_PATCH</span><span class="sm"> = &quot;PATCH&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_POST</span><span class="sm"> = &quot;POST&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_PURGE</span><span class="sm"> = &quot;PURGE&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_PUT</span><span class="sm"> = &quot;PUT&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">METHOD_TRACE</span><span class="sm"> = &quot;TRACE&quot;</span></code>
</div>
</div>

## Http\Message\ResponseStatusCodeInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Message/ResponseStatusCodeInterface.zep">Source on GitHub</a>

Interface for Request methods

Implementation of this file has been influenced by PHP FIG
@link    https://github.com/php-fig/http-message-util/
@license https://github.com/php-fig/http-message-util/blob/master/LICENSE

Defines constants for common HTTP status code.

@see https://tools.ietf.org/html/rfc2295#section-8.1
@see https://tools.ietf.org/html/rfc2324#section-2.3
@see https://tools.ietf.org/html/rfc2518#section-9.7
@see https://tools.ietf.org/html/rfc2774#section-7
@see https://tools.ietf.org/html/rfc3229#section-10.4
@see https://tools.ietf.org/html/rfc4918#section-11
@see https://tools.ietf.org/html/rfc5842#section-7.1
@see https://tools.ietf.org/html/rfc5842#section-7.2
@see https://tools.ietf.org/html/rfc6585#section-3
@see https://tools.ietf.org/html/rfc6585#section-4
@see https://tools.ietf.org/html/rfc6585#section-5
@see https://tools.ietf.org/html/rfc6585#section-6
@see https://tools.ietf.org/html/rfc7231#section-6
@see https://tools.ietf.org/html/rfc7238#section-3
@see https://tools.ietf.org/html/rfc7725#section-3
@see https://tools.ietf.org/html/rfc7540#section-9.1.2
@see https://tools.ietf.org/html/rfc8297#section-2
@see https://tools.ietf.org/html/rfc8470#section-7

<div class="api-tree">

- **`Phalcon\Http\Message\ResponseStatusCodeInterface`**

</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_ACCEPTED</span><span class="sm"> = 202</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_ALREADY_REPORTED</span><span class="sm"> = 208</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_BAD_GATEWAY</span><span class="sm"> = 502</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_BAD_REQUEST</span><span class="sm"> = 400</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_BANDWIDTH_LIMIT_EXCEEDED</span><span class="sm"> = 509</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS</span><span class="sm"> = 450</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_CLIENT_CLOSED_REQUEST</span><span class="sm"> = 499</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_CONFLICT</span><span class="sm"> = 409</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_CONNECTION_TIMEOUT</span><span class="sm"> = 522</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_CONTINUE</span><span class="sm"> = 100</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_CREATED</span><span class="sm"> = 201</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_EARLY_HINTS</span><span class="sm"> = 103</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_EXPECTATION_FAILED</span><span class="sm"> = 417</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_FAILED_DEPENDENCY</span><span class="sm"> = 424</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_FORBIDDEN</span><span class="sm"> = 403</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_FOUND</span><span class="sm"> = 302</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_GATEWAY_TIMEOUT</span><span class="sm"> = 504</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_GONE</span><span class="sm"> = 410</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_HTTP_REQUEST_SENT_TO_HTTPS_PORT</span><span class="sm"> = 497</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_IM_A_TEAPOT</span><span class="sm"> = 418</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_IM_USED</span><span class="sm"> = 226</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_INSUFFICIENT_STORAGE</span><span class="sm"> = 507</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_INTERNAL_SERVER_ERROR</span><span class="sm"> = 500</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_INVALID_SSL_CERTIFICATE</span><span class="sm"> = 526</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_INVALID_TOKEN_ESRI</span><span class="sm"> = 498</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_LENGTH_REQUIRED</span><span class="sm"> = 411</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_LOCKED</span><span class="sm"> = 423</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_LOGIN_TIMEOUT</span><span class="sm"> = 440</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_LOOP_DETECTED</span><span class="sm"> = 508</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_METHOD_FAILURE</span><span class="sm"> = 420</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_METHOD_NOT_ALLOWED</span><span class="sm"> = 405</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_MISDIRECTED_REQUEST</span><span class="sm"> = 421</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_MOVED_PERMANENTLY</span><span class="sm"> = 301</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_MULTIPLE_CHOICES</span><span class="sm"> = 300</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_MULTI_STATUS</span><span class="sm"> = 207</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NETWORK_AUTHENTICATION_REQUIRED</span><span class="sm"> = 511</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NETWORK_CONNECT_TIMEOUT_ERROR</span><span class="sm"> = 599</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NETWORK_READ_TIMEOUT_ERROR</span><span class="sm"> = 598</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NON_AUTHORITATIVE_INFORMATION</span><span class="sm"> = 203</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NOT_ACCEPTABLE</span><span class="sm"> = 406</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NOT_EXTENDED</span><span class="sm"> = 510</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NOT_FOUND</span><span class="sm"> = 404</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NOT_IMPLEMENTED</span><span class="sm"> = 501</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NOT_MODIFIED</span><span class="sm"> = 304</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NO_CONTENT</span><span class="sm"> = 204</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_NO_RESPONSE</span><span class="sm"> = 444</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_OK</span><span class="sm"> = 200</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_ORIGIN_DNS_ERROR</span><span class="sm"> = 530</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_ORIGIN_IS_UNREACHABLE</span><span class="sm"> = 523</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_PAGE_EXPIRED</span><span class="sm"> = 419</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_PARTIAL_CONTENT</span><span class="sm"> = 206</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_PAYLOAD_TOO_LARGE</span><span class="sm"> = 413</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_PAYMENT_REQUIRED</span><span class="sm"> = 402</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_PERMANENT_REDIRECT</span><span class="sm"> = 308</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_PRECONDITION_FAILED</span><span class="sm"> = 412</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_PRECONDITION_REQUIRED</span><span class="sm"> = 428</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_PROCESSING</span><span class="sm"> = 102</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_PROXY_AUTHENTICATION_REQUIRED</span><span class="sm"> = 407</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_RAILGUN_ERROR</span><span class="sm"> = 527</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_RANGE_NOT_SATISFIABLE</span><span class="sm"> = 416</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE</span><span class="sm"> = 431</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_REQUEST_HEADER_TOO_LARGE</span><span class="sm"> = 494</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_REQUEST_TIMEOUT</span><span class="sm"> = 408</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_RESERVED</span><span class="sm"> = 306</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_RESET_CONTENT</span><span class="sm"> = 205</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_RETRY_WITH</span><span class="sm"> = 449</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_SEE_OTHER</span><span class="sm"> = 303</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_SERVICE_UNAVAILABLE</span><span class="sm"> = 503</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_SSL_CERTIFICATE_ERROR</span><span class="sm"> = 495</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_SSL_CERTIFICATE_REQUIRED</span><span class="sm"> = 496</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_SSL_HANDSHAKE_FAILED</span><span class="sm"> = 525</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_SWITCHING_PROTOCOLS</span><span class="sm"> = 101</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_TEMPORARY_REDIRECT</span><span class="sm"> = 307</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_THIS_IS_FINE</span><span class="sm"> = 218</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_TIMEOUT_OCCURRED</span><span class="sm"> = 524</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_TOO_EARLY</span><span class="sm"> = 425</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_TOO_MANY_REQUESTS</span><span class="sm"> = 429</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_UNAUTHORIZED</span><span class="sm"> = 401</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_UNAVAILABLE_FOR_LEGAL_REASONS</span><span class="sm"> = 451</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_UNKNOWN_ERROR</span><span class="sm"> = 520</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_UNPROCESSABLE_ENTITY</span><span class="sm"> = 422</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_UNSUPPORTED_MEDIA_TYPE</span><span class="sm"> = 415</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_UPGRADE_REQUIRED</span><span class="sm"> = 426</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_URI_TOO_LONG</span><span class="sm"> = 414</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_USE_PROXY</span><span class="sm"> = 305</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_VARIANT_ALSO_NEGOTIATES</span><span class="sm"> = 506</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_VERSION_NOT_SUPPORTED</span><span class="sm"> = 505</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">STATUS_WEB_SERVER_IS_DOWN</span><span class="sm"> = 521</span></code>
</div>
</div>

## Http\Request

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request.zep">Source on GitHub</a>

Encapsulates request information for easy and secure access from application
controllers.

The request object is a simple value object that is passed between the
dispatcher and controller classes. It packages the HTTP request environment.

```php
use Phalcon\Http\Request;

$request = new Request();

if ($request->isPost() && $request->isAjax()) {
echo "Request was made using POST and AJAX";
}

// Retrieve SERVER variables
$request->getServer("HTTP_HOST");

// GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH, PURGE, TRACE, CONNECT
$request->getMethod();

// An array of languages the client accepts
$request->getLanguages();
```

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/5.18/api/phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Http\Request`** - implements [`Phalcon\Http\RequestInterface`](#httprequestinterface), [`Phalcon\Http\Message\RequestMethodInterface`](#httpmessagerequestmethodinterface), [`Phalcon\Contracts\Http\AttributeRequest`](/5.18/api/phalcon_contracts/#contractshttpattributerequest)

</div>

__Uses__ `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Filter\FilterInterface` · `Phalcon\Http\Message\RequestMethodInterface` · `Phalcon\Http\Request\Bag\AttributeBag` · `Phalcon\Http\Request\Exception` · `Phalcon\Http\Request\Exceptions\FilterServiceUnavailable` · `Phalcon\Http\Request\Exceptions\InvalidHost` · `Phalcon\Http\Request\Exceptions\InvalidHttpMethod` · `Phalcon\Http\Request\Exceptions\MissingFilters` · `Phalcon\Http\Request\Exceptions\SanitizerNotFound` · `Phalcon\Http\Request\File` · `Phalcon\Http\Request\FileInterface` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Traits\Php\FileTrait` · `stdClass`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequest-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a variable from the $_REQUEST superglobal applying filters if</span>
</a>
<a class="api-item" href="#httprequest-getacceptablecontent">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAcceptableContent</span>()</code>
<span class="desc">Gets an array with mime/types and their quality accepted by the</span>
</a>
<a class="api-item" href="#httprequest-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">AttributeBag</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Returns the request attributes bag. Attributes are arbitrary,</span>
</a>
<a class="api-item" href="#httprequest-getbasicauth">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">getBasicAuth</span>()</code>
<span class="desc">Gets auth info accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequest-getbestaccept">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBestAccept</span>()</code>
<span class="desc">Gets best mime/type accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequest-getbestcharset">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBestCharset</span>()</code>
<span class="desc">Gets best charset accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequest-getbestlanguage">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBestLanguage</span>()</code>
<span class="desc">Gets best language accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequest-getclientaddress">
<code class="vis vis-public">public</code>
<code class="ret">string|bool</code>
<code class="sig"><span class="sf">getClientAddress</span>( <span class="st">bool</span> <span class="sv">$trustForwardedHeader</span><span class="sm"> = false</span> )</code>
<span class="desc">Gets most possible client IP Address. This method searches in</span>
</a>
<a class="api-item" href="#httprequest-getclientcharsets">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getClientCharsets</span>()</code>
<span class="desc">Gets a charsets array and their quality accepted by the browser/client</span>
</a>
<a class="api-item" href="#httprequest-getcontenttype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getContentType</span>()</code>
<span class="desc">Gets content type which request has been made</span>
</a>
<a class="api-item" href="#httprequest-getdigestauth">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getDigestAuth</span>()</code>
<span class="desc">Gets auth info accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequest-getfiltereddata">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getFilteredData</span>(<span class="prm"><span class="st">string</span> <span class="sv">$methodKey</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets filtered data</span>
</a>
<a class="api-item" href="#httprequest-getfilteredpatch">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getFilteredPatch</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Retrieves a patch value always sanitized with the preset filters</span>
</a>
<a class="api-item" href="#httprequest-getfilteredpost">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getFilteredPost</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Retrieves a post value always sanitized with the preset filters</span>
</a>
<a class="api-item" href="#httprequest-getfilteredput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getFilteredPut</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Retrieves a put value always sanitized with the preset filters</span>
</a>
<a class="api-item" href="#httprequest-getfilteredquery">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getFilteredQuery</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Retrieves a query/get value always sanitized with the preset filters</span>
</a>
<a class="api-item" href="#httprequest-gethttpreferer">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHTTPReferer</span>()</code>
<span class="desc">Gets web page that refers active request. ie: http://www.google.com</span>
</a>
<a class="api-item" href="#httprequest-getheader">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHeader</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Gets HTTP header from request data</span>
</a>
<a class="api-item" href="#httprequest-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Returns the available headers in the request</span>
</a>
<a class="api-item" href="#httprequest-gethttphost">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHttpHost</span>()</code>
<span class="desc">Gets host name used by the request.</span>
</a>
<a class="api-item" href="#httprequest-gethttpmethodparameteroverride">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getHttpMethodParameterOverride</span>()</code>
<span class="desc">Return the HTTP method parameter override flag</span>
</a>
<a class="api-item" href="#httprequest-getjsonrawbody">
<code class="vis vis-public">public</code>
<code class="ret">\stdClass|array|bool</code>
<code class="sig"><span class="sf">getJsonRawBody</span>( <span class="st">bool</span> <span class="sv">$associative</span><span class="sm"> = false</span> )</code>
<span class="desc">Gets decoded JSON HTTP raw request body</span>
</a>
<a class="api-item" href="#httprequest-getlanguages">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getLanguages</span>()</code>
<span class="desc">Gets languages array and their quality accepted by the browser/client</span>
</a>
<a class="api-item" href="#httprequest-getmethod">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMethod</span>()</code>
<span class="desc">Gets HTTP method which request has been made</span>
</a>
<a class="api-item" href="#httprequest-getpatch">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getPatch</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a variable from put request</span>
</a>
<a class="api-item" href="#httprequest-getport">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getPort</span>()</code>
<span class="desc">Gets information about the port on which the request is made.</span>
</a>
<a class="api-item" href="#httprequest-getpost">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getPost</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a variable from the $_POST superglobal applying filters if needed</span>
</a>
<a class="api-item" href="#httprequest-getpreferredisolocalevariant">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPreferredIsoLocaleVariant</span>()</code>
<span class="desc">Gets the preferred ISO locale variant.</span>
</a>
<a class="api-item" href="#httprequest-getput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getPut</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a variable from the PUT request</span>
</a>
<a class="api-item" href="#httprequest-getquery">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getQuery</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets variable from $_GET superglobal applying filters if needed</span>
</a>
<a class="api-item" href="#httprequest-getrawbody">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRawBody</span>()</code>
<span class="desc">Gets HTTP raw request body</span>
</a>
<a class="api-item" href="#httprequest-getscheme">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getScheme</span>()</code>
<span class="desc">Gets HTTP schema (http/https)</span>
</a>
<a class="api-item" href="#httprequest-getserver">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getServer</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Gets variable from $_SERVER superglobal</span>
</a>
<a class="api-item" href="#httprequest-getserveraddress">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getServerAddress</span>()</code>
<span class="desc">Gets active server address IP</span>
</a>
<a class="api-item" href="#httprequest-getservername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getServerName</span>()</code>
<span class="desc">Gets active server name</span>
</a>
<a class="api-item" href="#httprequest-geturi">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getURI</span>( <span class="st">bool</span> <span class="sv">$onlyPath</span><span class="sm"> = false</span> )</code>
<span class="desc">Gets HTTP URI which request has been made to</span>
</a>
<a class="api-item" href="#httprequest-getuploadedfiles">
<code class="vis vis-public">public</code>
<code class="ret">FileInterface[]</code>
<code class="sig"><span class="sf">getUploadedFiles</span>(<span class="prm"><span class="st">bool</span> <span class="sv">$onlySuccessful</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$namedKeys</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets attached files as Phalcon\Http\Request\File instances</span>
</a>
<a class="api-item" href="#httprequest-getuseragent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getUserAgent</span>()</code>
<span class="desc">Gets HTTP user agent used to made the request</span>
</a>
<a class="api-item" href="#httprequest-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether $_REQUEST superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequest-hasfiles">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasFiles</span>()</code>
<span class="desc">Returns if the request has files or not</span>
</a>
<a class="api-item" href="#httprequest-hasheader">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasHeader</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Checks whether headers has certain index</span>
</a>
<a class="api-item" href="#httprequest-haspatch">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasPatch</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether the PATCH data has certain index</span>
</a>
<a class="api-item" href="#httprequest-haspost">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasPost</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether $_POST superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequest-hasput">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasPut</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether the PUT data has certain index</span>
</a>
<a class="api-item" href="#httprequest-hasquery">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasQuery</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether $_GET superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequest-hasserver">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasServer</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether $_SERVER superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequest-isajax">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAjax</span>()</code>
<span class="desc">Checks whether request has been made using ajax</span>
</a>
<a class="api-item" href="#httprequest-isconnect">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isConnect</span>()</code>
<span class="desc">Checks whether HTTP method is CONNECT.</span>
</a>
<a class="api-item" href="#httprequest-isdelete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isDelete</span>()</code>
<span class="desc">Checks whether HTTP method is DELETE.</span>
</a>
<a class="api-item" href="#httprequest-isget">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isGet</span>()</code>
<span class="desc">Checks whether HTTP method is GET.</span>
</a>
<a class="api-item" href="#httprequest-ishead">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isHead</span>()</code>
<span class="desc">Checks whether HTTP method is HEAD.</span>
</a>
<a class="api-item" href="#httprequest-isjson">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isJson</span>()</code>
<span class="desc">Checks whether request content type contains json data</span>
</a>
<a class="api-item" href="#httprequest-ismethod">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isMethod</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$methods</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$strict</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Check if HTTP method match any of the passed methods</span>
</a>
<a class="api-item" href="#httprequest-isoptions">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isOptions</span>()</code>
<span class="desc">Checks whether HTTP method is OPTIONS.</span>
</a>
<a class="api-item" href="#httprequest-ispatch">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPatch</span>()</code>
<span class="desc">Checks whether HTTP method is PATCH.</span>
</a>
<a class="api-item" href="#httprequest-ispost">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPost</span>()</code>
<span class="desc">Checks whether HTTP method is POST.</span>
</a>
<a class="api-item" href="#httprequest-ispurge">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPurge</span>()</code>
<span class="desc">Checks whether HTTP method is PURGE (Squid and Varnish support).</span>
</a>
<a class="api-item" href="#httprequest-isput">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPut</span>()</code>
<span class="desc">Checks whether HTTP method is PUT.</span>
</a>
<a class="api-item" href="#httprequest-issecure">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSecure</span>()</code>
<span class="desc">Checks whether request has been made using any secure layer</span>
</a>
<a class="api-item" href="#httprequest-issoap">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSoap</span>()</code>
<span class="desc">Checks whether request has been made using SOAP</span>
</a>
<a class="api-item" href="#httprequest-isstricthostcheck">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isStrictHostCheck</span>()</code>
<span class="desc">Checks if the <code>Request::getHttpHost</code> method will be use strict validation</span>
</a>
<a class="api-item" href="#httprequest-istrace">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isTrace</span>()</code>
<span class="desc">Checks whether HTTP method is TRACE.</span>
</a>
<a class="api-item" href="#httprequest-isvalidhttpmethod">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isValidHttpMethod</span>( <span class="st">string</span> <span class="sv">$method</span> )</code>
<span class="desc">Checks if a method is a valid HTTP method</span>
</a>
<a class="api-item" href="#httprequest-numfiles">
<code class="vis vis-public">public</code>
<code class="ret">long</code>
<code class="sig"><span class="sf">numFiles</span>( <span class="st">bool</span> <span class="sv">$onlySuccessful</span><span class="sm"> = false</span> )</code>
<span class="desc">Returns the number of files available</span>
</a>
<a class="api-item" href="#httprequest-sethttpmethodparameteroverride">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setHttpMethodParameterOverride</span>( <span class="st">bool</span> <span class="sv">$override</span> )</code>
<span class="desc">Set the HTTP method parameter override flag</span>
</a>
<a class="api-item" href="#httprequest-setparameterfilters">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setParameterFilters</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$filters</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$scope</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Sets automatic sanitizers/filters for a particular field and for</span>
</a>
<a class="api-item" href="#httprequest-setstricthostcheck">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setStrictHostCheck</span>( <span class="st">bool</span> <span class="sv">$flag</span><span class="sm"> = true</span> )</code>
<span class="desc">Sets if the <code>Request::getHttpHost</code> method must be use strict validation</span>
</a>
<a class="api-item" href="#httprequest-settrustedproxies">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setTrustedProxies</span>( <span class="st">array</span> <span class="sv">$trustedProxies</span> )</code>
<span class="desc">Set a trusted proxy list for X-Forwarded-For header</span>
</a>
<a class="api-item" href="#httprequest-settrustedproxyheader">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setTrustedProxyHeader</span>( <span class="st">string</span> <span class="sv">$trustedProxyHeader</span> )</code>
<span class="desc">This header takes priority when parsing HTTP headers</span>
</a>
<a class="api-item" href="#httprequest-getbestquality">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBestQuality</span>(<span class="prm"><span class="st">array</span> <span class="sv">$qualityParts</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span></span>)</code>
<span class="desc">Process a request header and return the one with best quality</span>
</a>
<a class="api-item" href="#httprequest-gethelper">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getHelper</span>(<span class="prm"><span class="st">array</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Helper to get data from superglobals, applying filters if needed.</span>
</a>
<a class="api-item" href="#httprequest-getqualityheader">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getQualityHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$serverIndex</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span></span>)</code>
<span class="desc">Process a request header and return an array of values with their qualities</span>
</a>
<a class="api-item" href="#httprequest-hasfilehelper">
<code class="vis vis-protected">protected</code>
<code class="ret">long</code>
<code class="sig"><span class="sf">hasFileHelper</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$onlySuccessful</span></span>)</code>
<span class="desc">Recursively counts file in an array of files</span>
</a>
<a class="api-item" href="#httprequest-isipaddressincidr">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isIpAddressInCIDR</span>(<span class="prm"><span class="st">string</span> <span class="sv">$ip</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$cidr</span></span>)</code>
<span class="desc">Check if an IP address exists in CIDR range</span>
</a>
<a class="api-item" href="#httprequest-resolveauthorizationheaders">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">resolveAuthorizationHeaders</span>()</code>
<span class="desc">Resolve authorization headers.</span>
</a>
<a class="api-item" href="#httprequest-smoothfiles">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">smoothFiles</span>(<span class="prm"><span class="st">array</span> <span class="sv">$names</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$types</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$tmp_names</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$sizes</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$errors</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$prefix</span></span>)</code>
<span class="desc">Smooth out $_FILES to have plain array with all files uploaded</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AttributeBag|null</code>
<code class="sig"><span class="sv">$attributes</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">FilterInterface|null</code>
<code class="sig"><span class="sv">$filterService</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$methodOverride</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sv">$postCache</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$queryFilters</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$rawBody</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$strictHostCheck</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$trustedProxies</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$trustedProxyHeader</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 69</div>

<h4 id="httprequest-get"><code>get()</code></h4>

```php
public function get(
string $name = null,
mixed $filters = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets a variable from the $_REQUEST superglobal applying filters if
needed. If no parameters are given the $_REQUEST superglobal is returned

```php
// Returns value from $_REQUEST["user_email"] without sanitizing
$userEmail = $request->get("user_email");

// Returns value from $_REQUEST["user_email"] with sanitizing
$userEmail = $request->get("user_email", "email");
```

<h4 id="httprequest-getacceptablecontent"><code>getAcceptableContent()</code></h4>

```php
public function getAcceptableContent(): array;
```

Gets an array with mime/types and their quality accepted by the
browser/client from _SERVER["HTTP_ACCEPT"]

<h4 id="httprequest-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): AttributeBag;
```

Returns the request attributes bag. Attributes are arbitrary,
application-defined values attached to the request during its
lifecycle (router, dispatcher, security components etc.). The bag
is created empty on first access and the same instance is returned
on every subsequent call.

```php
$request->getAttributes()->set("user", $user);

$user = $request->getAttributes()->get("user");
```

<h4 id="httprequest-getbasicauth"><code>getBasicAuth()</code></h4>

```php
public function getBasicAuth(): array|null;
```

Gets auth info accepted by the browser/client from
$_SERVER["PHP_AUTH_USER"]

<h4 id="httprequest-getbestaccept"><code>getBestAccept()</code></h4>

```php
public function getBestAccept(): string;
```

Gets best mime/type accepted by the browser/client from
_SERVER["HTTP_ACCEPT"]

<h4 id="httprequest-getbestcharset"><code>getBestCharset()</code></h4>

```php
public function getBestCharset(): string;
```

Gets best charset accepted by the browser/client from
_SERVER["HTTP_ACCEPT_CHARSET"]

<h4 id="httprequest-getbestlanguage"><code>getBestLanguage()</code></h4>

```php
public function getBestLanguage(): string;
```

Gets best language accepted by the browser/client from
_SERVER["HTTP_ACCEPT_LANGUAGE"]

<h4 id="httprequest-getclientaddress"><code>getClientAddress()</code></h4>

```php
public function getClientAddress( bool $trustForwardedHeader = false ): string|bool;
```

Gets most possible client IP Address. This method searches in
`$_SERVER["REMOTE_ADDR"]` and optionally in
`$_SERVER["HTTP_X_FORWARDED_FOR"]` and returns the first non-private or non-reserved IP address

The user provided trusted header takes priority before checking X-Forwarded-For header.

Using trusted proxies list, user has to provide a trusted list of proxy IPs
```
$request
->setTrustedProxies($trustedProxies)
->getClientAddress(true);
```
Using user provided trusted header, header should only ever contain 1 IP address, eg. HTTP_CLIENT_IP
```
$request
->setTrustedProxyHeader('HTTP_CLIENT_IP')
->setTrustedProxies($trustedProxies)
->getClientAddress(true);
```

<h4 id="httprequest-getclientcharsets"><code>getClientCharsets()</code></h4>

```php
public function getClientCharsets(): array;
```

Gets a charsets array and their quality accepted by the browser/client
from _SERVER["HTTP_ACCEPT_CHARSET"]

<h4 id="httprequest-getcontenttype"><code>getContentType()</code></h4>

```php
public function getContentType(): string|null;
```

Gets content type which request has been made

<h4 id="httprequest-getdigestauth"><code>getDigestAuth()</code></h4>

```php
public function getDigestAuth(): array;
```

Gets auth info accepted by the browser/client from
$_SERVER["PHP_AUTH_DIGEST"]

<h4 id="httprequest-getfiltereddata"><code>getFilteredData()</code></h4>

```php
public function getFilteredData(
string $methodKey,
string $method,
string $name = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets filtered data

<h4 id="httprequest-getfilteredpatch"><code>getFilteredPatch()</code></h4>

```php
public function getFilteredPatch(
string $name = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Retrieves a patch value always sanitized with the preset filters

<h4 id="httprequest-getfilteredpost"><code>getFilteredPost()</code></h4>

```php
public function getFilteredPost(
string $name = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Retrieves a post value always sanitized with the preset filters

<h4 id="httprequest-getfilteredput"><code>getFilteredPut()</code></h4>

```php
public function getFilteredPut(
string $name = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Retrieves a put value always sanitized with the preset filters

<h4 id="httprequest-getfilteredquery"><code>getFilteredQuery()</code></h4>

```php
public function getFilteredQuery(
string $name = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Retrieves a query/get value always sanitized with the preset filters

<h4 id="httprequest-gethttpreferer"><code>getHTTPReferer()</code></h4>

```php
public function getHTTPReferer(): string;
```

Gets web page that refers active request. ie: http://www.google.com

<h4 id="httprequest-getheader"><code>getHeader()</code></h4>

```php
public function getHeader( string $header ): string;
```

Gets HTTP header from request data

<h4 id="httprequest-getheaders"><code>getHeaders()</code></h4>

```php
public function getHeaders(): array;
```

Returns the available headers in the request

```php
$_SERVER = [
"PHP_AUTH_USER" => "phalcon",
"PHP_AUTH_PW"   => "secret",
];

$headers = $request->getHeaders();

echo $headers["Authorization"]; // Basic cGhhbGNvbjpzZWNyZXQ=
```

<h4 id="httprequest-gethttphost"><code>getHttpHost()</code></h4>

```php
public function getHttpHost(): string;
```

Gets host name used by the request.

`Request::getHttpHost` trying to find host name in following order:

- `$_SERVER["HTTP_HOST"]`
- `$_SERVER["SERVER_NAME"]`
- `$_SERVER["SERVER_ADDR"]`

Optionally `Request::getHttpHost` validates and clean host name.
The `Request::$strictHostCheck` can be used to validate host name.

Note: validation and cleaning have a negative performance impact because
they use regular expressions.

```php
use Phalcon\Http\Request;

$request = new Request;

$_SERVER["HTTP_HOST"] = "example.com";
$request->getHttpHost(); // example.com

$_SERVER["HTTP_HOST"] = "example.com:8080";
$request->getHttpHost(); // example.com:8080

$request->setStrictHostCheck(true);
$_SERVER["HTTP_HOST"] = "ex=am~ple.com";
$request->getHttpHost(); // UnexpectedValueException

$_SERVER["HTTP_HOST"] = "ExAmPlE.com";
$request->getHttpHost(); // example.com
```

<h4 id="httprequest-gethttpmethodparameteroverride"><code>getHttpMethodParameterOverride()</code></h4>

```php
public function getHttpMethodParameterOverride(): bool;
```

Return the HTTP method parameter override flag

<h4 id="httprequest-getjsonrawbody"><code>getJsonRawBody()</code></h4>

```php
public function getJsonRawBody( bool $associative = false ): \stdClass|array|bool;
```

Gets decoded JSON HTTP raw request body

<h4 id="httprequest-getlanguages"><code>getLanguages()</code></h4>

```php
public function getLanguages(): array;
```

Gets languages array and their quality accepted by the browser/client
from _SERVER["HTTP_ACCEPT_LANGUAGE"]

<h4 id="httprequest-getmethod"><code>getMethod()</code></h4>

```php
public function getMethod(): string;
```

Gets HTTP method which request has been made

If the X-HTTP-Method-Override header is set, and if the method is a POST,
then it is used to determine the "real" intended HTTP method.

The _method request parameter can also be used to determine the HTTP
method, but only if setHttpMethodParameterOverride(true) has been called.

The method is always an uppercased string.

<h4 id="httprequest-getpatch"><code>getPatch()</code></h4>

```php
public function getPatch(
string $name = null,
mixed $filters = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets a variable from put request

```php
// Returns value from $_PATCH["user_email"] without sanitizing
$userEmail = $request->getPatch("user_email");

// Returns value from $_PATCH["user_email"] with sanitizing
$userEmail = $request->getPatch("user_email", "email");
```

<h4 id="httprequest-getport"><code>getPort()</code></h4>

```php
public function getPort(): int;
```

Gets information about the port on which the request is made.

<h4 id="httprequest-getpost"><code>getPost()</code></h4>

```php
public function getPost(
string $name = null,
mixed $filters = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets a variable from the $_POST superglobal applying filters if needed
If no parameters are given the $_POST superglobal is returned

```php
// Returns value from $_POST["user_email"] without sanitizing
$userEmail = $request->getPost("user_email");

// Returns value from $_POST["user_email"] with sanitizing
$userEmail = $request->getPost("user_email", "email");
```

<h4 id="httprequest-getpreferredisolocalevariant"><code>getPreferredIsoLocaleVariant()</code></h4>

```php
public function getPreferredIsoLocaleVariant(): string;
```

Gets the preferred ISO locale variant.

Gets the preferred locale accepted by the client from the
"Accept-Language" request HTTP header and returns the
base part of it i.e. `en` instead of `en-US`.

Note: This method relies on the `$_SERVER["HTTP_ACCEPT_LANGUAGE"]` header.

@link https://www.iso.org/standard/50707.html

<h4 id="httprequest-getput"><code>getPut()</code></h4>

```php
public function getPut(
string $name = null,
mixed $filters = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets a variable from the PUT request

```php
// Returns value from PUT stream without sanitizing
$userEmail = $request->getPut("user_email");

// Returns value from PUT stream with sanitizing
$userEmail = $request->getPut("user_email", "email");
```

<h4 id="httprequest-getquery"><code>getQuery()</code></h4>

```php
public function getQuery(
string $name = null,
mixed $filters = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets variable from $_GET superglobal applying filters if needed
If no parameters are given the $_GET superglobal is returned

```php
// Returns value from $_GET["id"] without sanitizing
$id = $request->getQuery("id");

// Returns value from $_GET["id"] with sanitizing
$id = $request->getQuery("id", "int");

// Returns value from $_GET["id"] with a default value
$id = $request->getQuery("id", null, 150);
```

<h4 id="httprequest-getrawbody"><code>getRawBody()</code></h4>

```php
public function getRawBody(): string;
```

Gets HTTP raw request body

<h4 id="httprequest-getscheme"><code>getScheme()</code></h4>

```php
public function getScheme(): string;
```

Gets HTTP schema (http/https)

<h4 id="httprequest-getserver"><code>getServer()</code></h4>

```php
public function getServer( string $name ): string|null;
```

Gets variable from $_SERVER superglobal

<h4 id="httprequest-getserveraddress"><code>getServerAddress()</code></h4>

```php
public function getServerAddress(): string;
```

Gets active server address IP

<h4 id="httprequest-getservername"><code>getServerName()</code></h4>

```php
public function getServerName(): string;
```

Gets active server name

<h4 id="httprequest-geturi"><code>getURI()</code></h4>

```php
public function getURI( bool $onlyPath = false ): string;
```

Gets HTTP URI which request has been made to

```php
// Returns /some/path?with=queryParams
$uri = $request->getURI();

// Returns /some/path
$uri = $request->getURI(true);
```

<h4 id="httprequest-getuploadedfiles"><code>getUploadedFiles()</code></h4>

```php
public function getUploadedFiles(
bool $onlySuccessful = false,
bool $namedKeys = false
): FileInterface[];
```

Gets attached files as Phalcon\Http\Request\File instances

<h4 id="httprequest-getuseragent"><code>getUserAgent()</code></h4>

```php
public function getUserAgent(): string;
```

Gets HTTP user agent used to made the request

<h4 id="httprequest-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Checks whether $_REQUEST superglobal has certain index

<h4 id="httprequest-hasfiles"><code>hasFiles()</code></h4>

```php
public function hasFiles(): bool;
```

Returns if the request has files or not

<h4 id="httprequest-hasheader"><code>hasHeader()</code></h4>

```php
final public function hasHeader( string $header ): bool;
```

Checks whether headers has certain index

<h4 id="httprequest-haspatch"><code>hasPatch()</code></h4>

```php
public function hasPatch( string $name ): bool;
```

Checks whether the PATCH data has certain index

<h4 id="httprequest-haspost"><code>hasPost()</code></h4>

```php
public function hasPost( string $name ): bool;
```

Checks whether $_POST superglobal has certain index

<h4 id="httprequest-hasput"><code>hasPut()</code></h4>

```php
public function hasPut( string $name ): bool;
```

Checks whether the PUT data has certain index

<h4 id="httprequest-hasquery"><code>hasQuery()</code></h4>

```php
public function hasQuery( string $name ): bool;
```

Checks whether $_GET superglobal has certain index

<h4 id="httprequest-hasserver"><code>hasServer()</code></h4>

```php
final public function hasServer( string $name ): bool;
```

Checks whether $_SERVER superglobal has certain index

<h4 id="httprequest-isajax"><code>isAjax()</code></h4>

```php
public function isAjax(): bool;
```

Checks whether request has been made using ajax

<h4 id="httprequest-isconnect"><code>isConnect()</code></h4>

```php
public function isConnect(): bool;
```

Checks whether HTTP method is CONNECT.
if _SERVER["REQUEST_METHOD"]==="CONNECT"

<h4 id="httprequest-isdelete"><code>isDelete()</code></h4>

```php
public function isDelete(): bool;
```

Checks whether HTTP method is DELETE.
if _SERVER["REQUEST_METHOD"]==="DELETE"

<h4 id="httprequest-isget"><code>isGet()</code></h4>

```php
public function isGet(): bool;
```

Checks whether HTTP method is GET.
if _SERVER["REQUEST_METHOD"]==="GET"

<h4 id="httprequest-ishead"><code>isHead()</code></h4>

```php
public function isHead(): bool;
```

Checks whether HTTP method is HEAD.
if _SERVER["REQUEST_METHOD"]==="HEAD"

<h4 id="httprequest-isjson"><code>isJson()</code></h4>

```php
public function isJson(): bool;
```

Checks whether request content type contains json data

<h4 id="httprequest-ismethod"><code>isMethod()</code></h4>

```php
public function isMethod(
mixed $methods,
bool $strict = false
): bool;
```

Check if HTTP method match any of the passed methods
When strict is true it checks if validated methods are real HTTP methods

<h4 id="httprequest-isoptions"><code>isOptions()</code></h4>

```php
public function isOptions(): bool;
```

Checks whether HTTP method is OPTIONS.
if _SERVER["REQUEST_METHOD"]==="OPTIONS"

<h4 id="httprequest-ispatch"><code>isPatch()</code></h4>

```php
public function isPatch(): bool;
```

Checks whether HTTP method is PATCH.
if _SERVER["REQUEST_METHOD"]==="PATCH"

<h4 id="httprequest-ispost"><code>isPost()</code></h4>

```php
public function isPost(): bool;
```

Checks whether HTTP method is POST.
if _SERVER["REQUEST_METHOD"]==="POST"

<h4 id="httprequest-ispurge"><code>isPurge()</code></h4>

```php
public function isPurge(): bool;
```

Checks whether HTTP method is PURGE (Squid and Varnish support).
if _SERVER["REQUEST_METHOD"]==="PURGE"

<h4 id="httprequest-isput"><code>isPut()</code></h4>

```php
public function isPut(): bool;
```

Checks whether HTTP method is PUT.
if _SERVER["REQUEST_METHOD"]==="PUT"

<h4 id="httprequest-issecure"><code>isSecure()</code></h4>

```php
public function isSecure(): bool;
```

Checks whether request has been made using any secure layer

<h4 id="httprequest-issoap"><code>isSoap()</code></h4>

```php
public function isSoap(): bool;
```

Checks whether request has been made using SOAP

<h4 id="httprequest-isstricthostcheck"><code>isStrictHostCheck()</code></h4>

```php
public function isStrictHostCheck(): bool;
```

Checks if the `Request::getHttpHost` method will be use strict validation
of host name or not

<h4 id="httprequest-istrace"><code>isTrace()</code></h4>

```php
public function isTrace(): bool;
```

Checks whether HTTP method is TRACE.
if _SERVER["REQUEST_METHOD"]==="TRACE"

<h4 id="httprequest-isvalidhttpmethod"><code>isValidHttpMethod()</code></h4>

```php
public function isValidHttpMethod( string $method ): bool;
```

Checks if a method is a valid HTTP method

<h4 id="httprequest-numfiles"><code>numFiles()</code></h4>

```php
public function numFiles( bool $onlySuccessful = false ): long;
```

Returns the number of files available

<h4 id="httprequest-sethttpmethodparameteroverride"><code>setHttpMethodParameterOverride()</code></h4>

```php
public function setHttpMethodParameterOverride( bool $override ): static;
```

Set the HTTP method parameter override flag

<h4 id="httprequest-setparameterfilters"><code>setParameterFilters()</code></h4>

```php
public function setParameterFilters(
string $name,
array $filters = [],
array $scope = []
): static;
```

Sets automatic sanitizers/filters for a particular field and for
particular methods

<h4 id="httprequest-setstricthostcheck"><code>setStrictHostCheck()</code></h4>

```php
public function setStrictHostCheck( bool $flag = true ): static;
```

Sets if the `Request::getHttpHost` method must be use strict validation
of host name or not

<h4 id="httprequest-settrustedproxies"><code>setTrustedProxies()</code></h4>

```php
public function setTrustedProxies( array $trustedProxies ): static;
```

Set a trusted proxy list for X-Forwarded-For header

<h4 id="httprequest-settrustedproxyheader"><code>setTrustedProxyHeader()</code></h4>

```php
public function setTrustedProxyHeader( string $trustedProxyHeader ): static;
```

This header takes priority when parsing HTTP headers
The header return only 1 single IP address, prefixed with HTTP_ eg. HTTP_CLIENT_IP.

<div class="api-group">Protected · 7</div>

<h4 id="httprequest-getbestquality"><code>getBestQuality()</code></h4>

```php
protected function getBestQuality(
array $qualityParts,
string $name
): string;
```

Process a request header and return the one with best quality

<h4 id="httprequest-gethelper"><code>getHelper()</code></h4>

```php
protected function getHelper(
array $source,
string $name = null,
mixed $filters = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Helper to get data from superglobals, applying filters if needed.
If no parameters are given the superglobal is returned.

<h4 id="httprequest-getqualityheader"><code>getQualityHeader()</code></h4>

```php
protected function getQualityHeader(
string $serverIndex,
string $name
): array;
```

Process a request header and return an array of values with their qualities

<h4 id="httprequest-hasfilehelper"><code>hasFileHelper()</code></h4>

```php
protected function hasFileHelper(
mixed $data,
bool $onlySuccessful
): long;
```

Recursively counts file in an array of files

<h4 id="httprequest-isipaddressincidr"><code>isIpAddressInCIDR()</code></h4>

```php
protected function isIpAddressInCIDR(
string $ip,
string $cidr
): bool;
```

Check if an IP address exists in CIDR range

<h4 id="httprequest-resolveauthorizationheaders"><code>resolveAuthorizationHeaders()</code></h4>

```php
protected function resolveAuthorizationHeaders(): array;
```

Resolve authorization headers.

<h4 id="httprequest-smoothfiles"><code>smoothFiles()</code></h4>

```php
protected function smoothFiles(
array $names,
array $types,
array $tmp_names,
array $sizes,
array $errors,
string $prefix
): array;
```

Smooth out $_FILES to have plain array with all files uploaded

## Http\RequestInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/RequestInterface.zep">Source on GitHub</a>

Interface for Phalcon\Http\Request

<div class="api-tree">

- **`Phalcon\Http\RequestInterface`**
- [`Phalcon\Contracts\Http\AttributeRequest`](/5.18/api/phalcon_contracts/#contractshttpattributerequest)

</div>

__Uses__ `Phalcon\Http\Request\FileInterface` · `stdClass`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a variable from the $_REQUEST superglobal applying filters if</span>
</a>
<a class="api-item" href="#httprequestinterface-getacceptablecontent">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAcceptableContent</span>()</code>
<span class="desc">Gets an array with mime/types and their quality accepted by the</span>
</a>
<a class="api-item" href="#httprequestinterface-getbasicauth">
<code class="vis vis-public">public</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sf">getBasicAuth</span>()</code>
<span class="desc">Gets auth info accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequestinterface-getbestaccept">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBestAccept</span>()</code>
<span class="desc">Gets best mime/type accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequestinterface-getbestcharset">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBestCharset</span>()</code>
<span class="desc">Gets best charset accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequestinterface-getbestlanguage">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBestLanguage</span>()</code>
<span class="desc">Gets best language accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequestinterface-getclientaddress">
<code class="vis vis-public">public</code>
<code class="ret">string|bool</code>
<code class="sig"><span class="sf">getClientAddress</span>( <span class="st">bool</span> <span class="sv">$trustForwardedHeader</span><span class="sm"> = false</span> )</code>
<span class="desc">Gets most possible client IPv4 Address. This method searches in</span>
</a>
<a class="api-item" href="#httprequestinterface-getclientcharsets">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getClientCharsets</span>()</code>
<span class="desc">Gets a charsets array and their quality accepted by the browser/client</span>
</a>
<a class="api-item" href="#httprequestinterface-getcontenttype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getContentType</span>()</code>
<span class="desc">Gets content type which request has been made</span>
</a>
<a class="api-item" href="#httprequestinterface-getdigestauth">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getDigestAuth</span>()</code>
<span class="desc">Gets auth info accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequestinterface-gethttpreferer">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHTTPReferer</span>()</code>
<span class="desc">Gets web page that refers active request. ie: http://www.google.com</span>
</a>
<a class="api-item" href="#httprequestinterface-getheader">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHeader</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Gets HTTP header from request data</span>
</a>
<a class="api-item" href="#httprequestinterface-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Returns the available headers in the request</span>
</a>
<a class="api-item" href="#httprequestinterface-gethttphost">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHttpHost</span>()</code>
<span class="desc">Gets host name used by the request.</span>
</a>
<a class="api-item" href="#httprequestinterface-getjsonrawbody">
<code class="vis vis-public">public</code>
<code class="ret">stdClass|array|bool</code>
<code class="sig"><span class="sf">getJsonRawBody</span>( <span class="st">bool</span> <span class="sv">$associative</span><span class="sm"> = false</span> )</code>
<span class="desc">Gets decoded JSON HTTP raw request body</span>
</a>
<a class="api-item" href="#httprequestinterface-getlanguages">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getLanguages</span>()</code>
<span class="desc">Gets languages array and their quality accepted by the browser/client</span>
</a>
<a class="api-item" href="#httprequestinterface-getmethod">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMethod</span>()</code>
<span class="desc">Gets HTTP method which request has been made</span>
</a>
<a class="api-item" href="#httprequestinterface-getport">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getPort</span>()</code>
<span class="desc">Gets information about the port on which the request is made</span>
</a>
<a class="api-item" href="#httprequestinterface-getpost">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getPost</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a variable from the $_POST superglobal applying filters if needed</span>
</a>
<a class="api-item" href="#httprequestinterface-getput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getPut</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a variable from the PUT request</span>
</a>
<a class="api-item" href="#httprequestinterface-getquery">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getQuery</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets variable from $_GET superglobal applying filters if needed</span>
</a>
<a class="api-item" href="#httprequestinterface-getrawbody">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRawBody</span>()</code>
<span class="desc">Gets HTTP raw request body</span>
</a>
<a class="api-item" href="#httprequestinterface-getscheme">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getScheme</span>()</code>
<span class="desc">Gets HTTP schema (http/https)</span>
</a>
<a class="api-item" href="#httprequestinterface-getserver">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getServer</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Gets variable from $_SERVER superglobal</span>
</a>
<a class="api-item" href="#httprequestinterface-getserveraddress">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getServerAddress</span>()</code>
<span class="desc">Gets active server address IP</span>
</a>
<a class="api-item" href="#httprequestinterface-getservername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getServerName</span>()</code>
<span class="desc">Gets active server name</span>
</a>
<a class="api-item" href="#httprequestinterface-geturi">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getURI</span>( <span class="st">bool</span> <span class="sv">$onlyPath</span><span class="sm"> = false</span> )</code>
<span class="desc">Gets HTTP URI which request has been made to</span>
</a>
<a class="api-item" href="#httprequestinterface-getuploadedfiles">
<code class="vis vis-public">public</code>
<code class="ret">FileInterface[]</code>
<code class="sig"><span class="sf">getUploadedFiles</span>(<span class="prm"><span class="st">bool</span> <span class="sv">$onlySuccessful</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$namedKeys</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets attached files as Phalcon\Http\Request\FileInterface compatible</span>
</a>
<a class="api-item" href="#httprequestinterface-getuseragent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getUserAgent</span>()</code>
<span class="desc">Gets HTTP user agent used to made the request</span>
</a>
<a class="api-item" href="#httprequestinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether $_REQUEST superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-hasfiles">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasFiles</span>()</code>
<span class="desc">Checks whether request include attached files</span>
</a>
<a class="api-item" href="#httprequestinterface-hasheader">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasHeader</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Checks whether headers has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-haspost">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasPost</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether $_POST superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-hasput">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasPut</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether the PUT data has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-hasquery">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasQuery</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether $_GET superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-hasserver">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasServer</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether $_SERVER superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-isajax">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAjax</span>()</code>
<span class="desc">Checks whether request has been made using ajax. Checks if $_SERVER[&quot;HTTP_X_REQUESTED_WITH&quot;] === &quot;XMLHttpRequest&quot;</span>
</a>
<a class="api-item" href="#httprequestinterface-isconnect">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isConnect</span>()</code>
<span class="desc">Checks whether HTTP method is CONNECT. if $_SERVER[&quot;REQUEST_METHOD&quot;] === &quot;CONNECT&quot;</span>
</a>
<a class="api-item" href="#httprequestinterface-isdelete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isDelete</span>()</code>
<span class="desc">Checks whether HTTP method is DELETE. if $_SERVER[&quot;REQUEST_METHOD&quot;] === &quot;DELETE&quot;</span>
</a>
<a class="api-item" href="#httprequestinterface-isget">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isGet</span>()</code>
<span class="desc">Checks whether HTTP method is GET. if $_SERVER[&quot;REQUEST_METHOD&quot;] === &quot;GET&quot;</span>
</a>
<a class="api-item" href="#httprequestinterface-ishead">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isHead</span>()</code>
<span class="desc">Checks whether HTTP method is HEAD. if $_SERVER[&quot;REQUEST_METHOD&quot;] === &quot;HEAD&quot;</span>
</a>
<a class="api-item" href="#httprequestinterface-ismethod">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isMethod</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$methods</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$strict</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Check if HTTP method match any of the passed methods</span>
</a>
<a class="api-item" href="#httprequestinterface-isoptions">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isOptions</span>()</code>
<span class="desc">Checks whether HTTP method is OPTIONS. if $_SERVER[&quot;REQUEST_METHOD&quot;] === &quot;OPTIONS&quot;</span>
</a>
<a class="api-item" href="#httprequestinterface-ispost">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPost</span>()</code>
<span class="desc">Checks whether HTTP method is POST. if $_SERVER[&quot;REQUEST_METHOD&quot;] === &quot;POST&quot;</span>
</a>
<a class="api-item" href="#httprequestinterface-ispurge">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPurge</span>()</code>
<span class="desc">Checks whether HTTP method is PURGE (Squid and Varnish support). if $_SERVER[&quot;REQUEST_METHOD&quot;] === &quot;PURGE&quot;</span>
</a>
<a class="api-item" href="#httprequestinterface-isput">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPut</span>()</code>
<span class="desc">Checks whether HTTP method is PUT. if $_SERVER[&quot;REQUEST_METHOD&quot;] === &quot;PUT&quot;</span>
</a>
<a class="api-item" href="#httprequestinterface-issecure">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSecure</span>()</code>
<span class="desc">Checks whether request has been made using any secure layer</span>
</a>
<a class="api-item" href="#httprequestinterface-issoap">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSoap</span>()</code>
<span class="desc">Checks whether request has been made using SOAP</span>
</a>
<a class="api-item" href="#httprequestinterface-istrace">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isTrace</span>()</code>
<span class="desc">Checks whether HTTP method is TRACE.</span>
</a>
<a class="api-item" href="#httprequestinterface-numfiles">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">numFiles</span>( <span class="st">bool</span> <span class="sv">$onlySuccessful</span><span class="sm"> = false</span> )</code>
<span class="desc">Returns the number of files available</span>
</a>
</div>

### Methods

<div class="api-group">Public · 50</div>

<h4 id="httprequestinterface-get"><code>get()</code></h4>

```php
public function get(
string $name = null,
mixed $filters = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets a variable from the $_REQUEST superglobal applying filters if
needed. If no parameters are given the $_REQUEST superglobal is returned

```php
// Returns value from $_REQUEST["user_email"] without sanitizing
$userEmail = $request->get("user_email");

// Returns value from $_REQUEST["user_email"] with sanitizing
$userEmail = $request->get("user_email", "email");
```

<h4 id="httprequestinterface-getacceptablecontent"><code>getAcceptableContent()</code></h4>

```php
public function getAcceptableContent(): array;
```

Gets an array with mime/types and their quality accepted by the
browser/client from _SERVER["HTTP_ACCEPT"]

<h4 id="httprequestinterface-getbasicauth"><code>getBasicAuth()</code></h4>

```php
public function getBasicAuth(): array|null;
```

Gets auth info accepted by the browser/client from
$_SERVER["PHP_AUTH_USER"]

<h4 id="httprequestinterface-getbestaccept"><code>getBestAccept()</code></h4>

```php
public function getBestAccept(): string;
```

Gets best mime/type accepted by the browser/client from
_SERVER["HTTP_ACCEPT"]

<h4 id="httprequestinterface-getbestcharset"><code>getBestCharset()</code></h4>

```php
public function getBestCharset(): string;
```

Gets best charset accepted by the browser/client from
_SERVER["HTTP_ACCEPT_CHARSET"]

<h4 id="httprequestinterface-getbestlanguage"><code>getBestLanguage()</code></h4>

```php
public function getBestLanguage(): string;
```

Gets best language accepted by the browser/client from
_SERVER["HTTP_ACCEPT_LANGUAGE"]

<h4 id="httprequestinterface-getclientaddress"><code>getClientAddress()</code></h4>

```php
public function getClientAddress( bool $trustForwardedHeader = false ): string|bool;
```

Gets most possible client IPv4 Address. This method searches in
$_SERVER["REMOTE_ADDR"] and optionally in
$_SERVER["HTTP_X_FORWARDED_FOR"]

<h4 id="httprequestinterface-getclientcharsets"><code>getClientCharsets()</code></h4>

```php
public function getClientCharsets(): array;
```

Gets a charsets array and their quality accepted by the browser/client
from _SERVER["HTTP_ACCEPT_CHARSET"]

<h4 id="httprequestinterface-getcontenttype"><code>getContentType()</code></h4>

```php
public function getContentType(): string|null;
```

Gets content type which request has been made

<h4 id="httprequestinterface-getdigestauth"><code>getDigestAuth()</code></h4>

```php
public function getDigestAuth(): array;
```

Gets auth info accepted by the browser/client from
$_SERVER["PHP_AUTH_DIGEST"]

<h4 id="httprequestinterface-gethttpreferer"><code>getHTTPReferer()</code></h4>

```php
public function getHTTPReferer(): string;
```

Gets web page that refers active request. ie: http://www.google.com

<h4 id="httprequestinterface-getheader"><code>getHeader()</code></h4>

```php
public function getHeader( string $header ): string;
```

Gets HTTP header from request data

<h4 id="httprequestinterface-getheaders"><code>getHeaders()</code></h4>

```php
public function getHeaders(): array;
```

Returns the available headers in the request

```php
$_SERVER = [
"PHP_AUTH_USER" => "phalcon",
"PHP_AUTH_PW"   => "secret",
];

$headers = $request->getHeaders();

echo $headers["Authorization"]; // Basic cGhhbGNvbjpzZWNyZXQ=
```

<h4 id="httprequestinterface-gethttphost"><code>getHttpHost()</code></h4>

```php
public function getHttpHost(): string;
```

Gets host name used by the request.

`Request::getHttpHost` trying to find host name in following order:

- `$_SERVER["HTTP_HOST"]`
- `$_SERVER["SERVER_NAME"]`
- `$_SERVER["SERVER_ADDR"]`

Optionally `Request::getHttpHost` validates and clean host name.
The `Request::$_strictHostCheck` can be used to validate host name.

Note: validation and cleaning have a negative performance impact because
they use regular expressions.

```php
use Phalcon\Http\Request;

$request = new Request;

$_SERVER["HTTP_HOST"] = "example.com";
$request->getHttpHost(); // example.com

$_SERVER["HTTP_HOST"] = "example.com:8080";
$request->getHttpHost(); // example.com:8080

$request->setStrictHostCheck(true);
$_SERVER["HTTP_HOST"] = "ex=am~ple.com";
$request->getHttpHost(); // UnexpectedValueException

$_SERVER["HTTP_HOST"] = "ExAmPlE.com";
$request->getHttpHost(); // example.com
```

<h4 id="httprequestinterface-getjsonrawbody"><code>getJsonRawBody()</code></h4>

```php
public function getJsonRawBody( bool $associative = false ): stdClass|array|bool;
```

Gets decoded JSON HTTP raw request body

<h4 id="httprequestinterface-getlanguages"><code>getLanguages()</code></h4>

```php
public function getLanguages(): array;
```

Gets languages array and their quality accepted by the browser/client
from _SERVER["HTTP_ACCEPT_LANGUAGE"]

<h4 id="httprequestinterface-getmethod"><code>getMethod()</code></h4>

```php
public function getMethod(): string;
```

Gets HTTP method which request has been made

If the X-HTTP-Method-Override header is set, and if the method is a POST,
then it is used to determine the "real" intended HTTP method.

The _method request parameter can also be used to determine the HTTP
method, but only if setHttpMethodParameterOverride(true) has been called.

The method is always an uppercased string.

<h4 id="httprequestinterface-getport"><code>getPort()</code></h4>

```php
public function getPort(): int;
```

Gets information about the port on which the request is made

<h4 id="httprequestinterface-getpost"><code>getPost()</code></h4>

```php
public function getPost(
string $name = null,
mixed $filters = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets a variable from the $_POST superglobal applying filters if needed
If no parameters are given the $_POST superglobal is returned

```php
// Returns value from $_POST["user_email"] without sanitizing
$userEmail = $request->getPost("user_email");

// Returns value from $_POST["user_email"] with sanitizing
$userEmail = $request->getPost("user_email", "email");
```

<h4 id="httprequestinterface-getput"><code>getPut()</code></h4>

```php
public function getPut(
string $name = null,
mixed $filters = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets a variable from the PUT request

```php
// Returns value from PUT stream without sanitizing
$userEmail = $request->getPut("user_email");

// Returns value from PUT stream with sanitizing
$userEmail = $request->getPut("user_email", "email");
```

<h4 id="httprequestinterface-getquery"><code>getQuery()</code></h4>

```php
public function getQuery(
string $name = null,
mixed $filters = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets variable from $_GET superglobal applying filters if needed
If no parameters are given the $_GET superglobal is returned

```php
// Returns value from $_GET["id"] without sanitizing
$id = $request->getQuery("id");

// Returns value from $_GET["id"] with sanitizing
$id = $request->getQuery("id", "int");

// Returns value from $_GET["id"] with a default value
$id = $request->getQuery("id", null, 150);
```

<h4 id="httprequestinterface-getrawbody"><code>getRawBody()</code></h4>

```php
public function getRawBody(): string;
```

Gets HTTP raw request body

<h4 id="httprequestinterface-getscheme"><code>getScheme()</code></h4>

```php
public function getScheme(): string;
```

Gets HTTP schema (http/https)

<h4 id="httprequestinterface-getserver"><code>getServer()</code></h4>

```php
public function getServer( string $name ): string|null;
```

Gets variable from $_SERVER superglobal

<h4 id="httprequestinterface-getserveraddress"><code>getServerAddress()</code></h4>

```php
public function getServerAddress(): string;
```

Gets active server address IP

<h4 id="httprequestinterface-getservername"><code>getServerName()</code></h4>

```php
public function getServerName(): string;
```

Gets active server name

<h4 id="httprequestinterface-geturi"><code>getURI()</code></h4>

```php
public function getURI( bool $onlyPath = false ): string;
```

Gets HTTP URI which request has been made to

```php
// Returns /some/path?with=queryParams
$uri = $request->getURI();

// Returns /some/path
$uri = $request->getURI(true);
```

<h4 id="httprequestinterface-getuploadedfiles"><code>getUploadedFiles()</code></h4>

```php
public function getUploadedFiles(
bool $onlySuccessful = false,
bool $namedKeys = false
): FileInterface[];
```

Gets attached files as Phalcon\Http\Request\FileInterface compatible
instances

<h4 id="httprequestinterface-getuseragent"><code>getUserAgent()</code></h4>

```php
public function getUserAgent(): string;
```

Gets HTTP user agent used to made the request

<h4 id="httprequestinterface-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Checks whether $_REQUEST superglobal has certain index

<h4 id="httprequestinterface-hasfiles"><code>hasFiles()</code></h4>

```php
public function hasFiles(): bool;
```

Checks whether request include attached files

<h4 id="httprequestinterface-hasheader"><code>hasHeader()</code></h4>

```php
public function hasHeader( string $header ): bool;
```

Checks whether headers has certain index

<h4 id="httprequestinterface-haspost"><code>hasPost()</code></h4>

```php
public function hasPost( string $name ): bool;
```

Checks whether $_POST superglobal has certain index

<h4 id="httprequestinterface-hasput"><code>hasPut()</code></h4>

```php
public function hasPut( string $name ): bool;
```

Checks whether the PUT data has certain index

<h4 id="httprequestinterface-hasquery"><code>hasQuery()</code></h4>

```php
public function hasQuery( string $name ): bool;
```

Checks whether $_GET superglobal has certain index

<h4 id="httprequestinterface-hasserver"><code>hasServer()</code></h4>

```php
public function hasServer( string $name ): bool;
```

Checks whether $_SERVER superglobal has certain index

<h4 id="httprequestinterface-isajax"><code>isAjax()</code></h4>

```php
public function isAjax(): bool;
```

Checks whether request has been made using ajax. Checks if $_SERVER["HTTP_X_REQUESTED_WITH"] === "XMLHttpRequest"

<h4 id="httprequestinterface-isconnect"><code>isConnect()</code></h4>

```php
public function isConnect(): bool;
```

Checks whether HTTP method is CONNECT. if $_SERVER["REQUEST_METHOD"] === "CONNECT"

<h4 id="httprequestinterface-isdelete"><code>isDelete()</code></h4>

```php
public function isDelete(): bool;
```

Checks whether HTTP method is DELETE. if $_SERVER["REQUEST_METHOD"] === "DELETE"

<h4 id="httprequestinterface-isget"><code>isGet()</code></h4>

```php
public function isGet(): bool;
```

Checks whether HTTP method is GET. if $_SERVER["REQUEST_METHOD"] === "GET"

<h4 id="httprequestinterface-ishead"><code>isHead()</code></h4>

```php
public function isHead(): bool;
```

Checks whether HTTP method is HEAD. if $_SERVER["REQUEST_METHOD"] === "HEAD"

<h4 id="httprequestinterface-ismethod"><code>isMethod()</code></h4>

```php
public function isMethod(
mixed $methods,
bool $strict = false
): bool;
```

Check if HTTP method match any of the passed methods

<h4 id="httprequestinterface-isoptions"><code>isOptions()</code></h4>

```php
public function isOptions(): bool;
```

Checks whether HTTP method is OPTIONS. if $_SERVER["REQUEST_METHOD"] === "OPTIONS"

<h4 id="httprequestinterface-ispost"><code>isPost()</code></h4>

```php
public function isPost(): bool;
```

Checks whether HTTP method is POST. if $_SERVER["REQUEST_METHOD"] === "POST"

<h4 id="httprequestinterface-ispurge"><code>isPurge()</code></h4>

```php
public function isPurge(): bool;
```

Checks whether HTTP method is PURGE (Squid and Varnish support). if $_SERVER["REQUEST_METHOD"] === "PURGE"

<h4 id="httprequestinterface-isput"><code>isPut()</code></h4>

```php
public function isPut(): bool;
```

Checks whether HTTP method is PUT. if $_SERVER["REQUEST_METHOD"] === "PUT"

<h4 id="httprequestinterface-issecure"><code>isSecure()</code></h4>

```php
public function isSecure(): bool;
```

Checks whether request has been made using any secure layer

<h4 id="httprequestinterface-issoap"><code>isSoap()</code></h4>

```php
public function isSoap(): bool;
```

Checks whether request has been made using SOAP

<h4 id="httprequestinterface-istrace"><code>isTrace()</code></h4>

```php
public function isTrace(): bool;
```

Checks whether HTTP method is TRACE.
if $_SERVER["REQUEST_METHOD"] === "TRACE"

<h4 id="httprequestinterface-numfiles"><code>numFiles()</code></h4>

```php
public function numFiles( bool $onlySuccessful = false ): int;
```

Returns the number of files available

## Http\Request\Bag\AbstractBag

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/Bag/AbstractBag.zep">Source on GitHub</a>

Shared base for the HTTP request bags. A bag is a string-keyed value store
backed by a raw array, exposing `get/has/set/remove/all` plus typed readers
for cast-with-default access.

Two protected hooks (`normalizeKey`, `normalizeItems`) let subclasses
change key handling without restating the surface.

The ArrayAccess append form (`$bag[] = $value`) is rejected with a
NullKeyException: bags are always string-keyed, so an auto-indexed write
could never be addressed by the caller.

<div class="api-tree">

- **`Phalcon\Http\Request\Bag\AbstractBag`** - implements `ArrayAccess`, `Countable`, `IteratorAggregate`
- [`Phalcon\Http\Request\Bag\AttributeBag`](#httprequestbagattributebag)

</div>

__Uses__ `ArrayAccess` · `ArrayIterator` · `Countable` · `IteratorAggregate` · `Phalcon\Http\Request\Exceptions\NullKeyException` · `Traversable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestbagabstractbag-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$items</span><span class="sm"> = []</span> )</code>
<span class="desc">AbstractBag constructor.</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-all">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">all</span>()</code>
<span class="desc">Returns all the elements of the bag</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-count">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">count</span>()</code>
<span class="desc">Returns the number of elements in the bag</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns an element of the bag, or the default value if it is not set</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-getarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getArray</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$defaultValue</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns an element of the bag as an array. The default value is</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-getbool">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getBool</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$defaultValue</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Returns an element of the bag cast to bool, or the default value if</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-getfloat">
<code class="vis vis-public">public</code>
<code class="ret">double</code>
<code class="sig"><span class="sf">getFloat</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">double</span> <span class="sv">$defaultValue</span><span class="sm"> = 0.0</span></span>)</code>
<span class="desc">Returns an element of the bag cast to float, or the default value if</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-getint">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getInt</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$defaultValue</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Returns an element of the bag cast to int, or the default value if</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-getiterator">
<code class="vis vis-public">public</code>
<code class="ret">Traversable</code>
<code class="sig"><span class="sf">getIterator</span>()</code>
<span class="desc">Returns the iterator of the bag</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-getstring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getString</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$defaultValue</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns an element of the bag cast to string, or the default value if</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks whether an element exists in the bag</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">offsetExists</span>( <span class="st">mixed</span> <span class="sv">$offset</span> )</code>
<span class="desc">Whether an offset exists</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">offsetGet</span>( <span class="st">mixed</span> <span class="sv">$offset</span> )</code>
<span class="desc">Offset to retrieve</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetSet</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$offset</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Offset to set</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetUnset</span>( <span class="st">mixed</span> <span class="sv">$offset</span> )</code>
<span class="desc">Offset to unset</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Removes an element from the bag</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets an element in the bag</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-normalizeitems">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">normalizeItems</span>( <span class="st">array</span> <span class="sv">$items</span> )</code>
<span class="desc">Normalizes the items at construction time. Identity in the base;</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-normalizekey">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">normalizeKey</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Normalizes a key for lookups and writes. Identity in the base;</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$items</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 17</div>

<h4 id="httprequestbagabstractbag-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $items = [] );
```

AbstractBag constructor.

<h4 id="httprequestbagabstractbag-all"><code>all()</code></h4>

```php
public function all(): array;
```

Returns all the elements of the bag

<h4 id="httprequestbagabstractbag-count"><code>count()</code></h4>

```php
public function count(): int;
```

Returns the number of elements in the bag

<h4 id="httprequestbagabstractbag-get"><code>get()</code></h4>

```php
public function get(
string $key,
mixed $defaultValue = null
): mixed;
```

Returns an element of the bag, or the default value if it is not set

<h4 id="httprequestbagabstractbag-getarray"><code>getArray()</code></h4>

```php
public function getArray(
string $key,
array $defaultValue = []
): array;
```

Returns an element of the bag as an array. The default value is
returned if the element is not set or is not an array

<h4 id="httprequestbagabstractbag-getbool"><code>getBool()</code></h4>

```php
public function getBool(
string $key,
bool $defaultValue = false
): bool;
```

Returns an element of the bag cast to bool, or the default value if
it is not set

<h4 id="httprequestbagabstractbag-getfloat"><code>getFloat()</code></h4>

```php
public function getFloat(
string $key,
double $defaultValue = 0.0
): double;
```

Returns an element of the bag cast to float, or the default value if
it is not set

<h4 id="httprequestbagabstractbag-getint"><code>getInt()</code></h4>

```php
public function getInt(
string $key,
int $defaultValue = 0
): int;
```

Returns an element of the bag cast to int, or the default value if
it is not set

<h4 id="httprequestbagabstractbag-getiterator"><code>getIterator()</code></h4>

```php
public function getIterator(): Traversable;
```

Returns the iterator of the bag

<h4 id="httprequestbagabstractbag-getstring"><code>getString()</code></h4>

```php
public function getString(
string $key,
string $defaultValue = ""
): string;
```

Returns an element of the bag cast to string, or the default value if
it is not set

<h4 id="httprequestbagabstractbag-has"><code>has()</code></h4>

```php
public function has( string $key ): bool;
```

Checks whether an element exists in the bag

<h4 id="httprequestbagabstractbag-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $offset ): bool;
```

Whether an offset exists

@link https://php.net/manual/en/arrayaccess.offsetexists.php

<h4 id="httprequestbagabstractbag-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $offset ): mixed;
```

Offset to retrieve

@link https://php.net/manual/en/arrayaccess.offsetget.php

<h4 id="httprequestbagabstractbag-offsetset"><code>offsetSet()</code></h4>

```php
public function offsetSet(
mixed $offset,
mixed $value
): void;
```

Offset to set

@link https://php.net/manual/en/arrayaccess.offsetset.php

<h4 id="httprequestbagabstractbag-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $offset ): void;
```

Offset to unset

@link https://php.net/manual/en/arrayaccess.offsetunset.php

<h4 id="httprequestbagabstractbag-remove"><code>remove()</code></h4>

```php
public function remove( string $key ): void;
```

Removes an element from the bag

<h4 id="httprequestbagabstractbag-set"><code>set()</code></h4>

```php
public function set(
string $key,
mixed $value
): void;
```

Sets an element in the bag

<div class="api-group">Protected · 2</div>

<h4 id="httprequestbagabstractbag-normalizeitems"><code>normalizeItems()</code></h4>

```php
protected function normalizeItems( array $items ): array;
```

Normalizes the items at construction time. Identity in the base;
subclasses can override it to normalize keys

<h4 id="httprequestbagabstractbag-normalizekey"><code>normalizeKey()</code></h4>

```php
protected function normalizeKey( string $key ): string;
```

Normalizes a key for lookups and writes. Identity in the base;
subclasses can override it to change key handling

## Http\Request\Bag\AttributeBag

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/Bag/AttributeBag.zep">Source on GitHub</a>

Holds the request attributes: arbitrary, application-defined values
attached to the request during its lifecycle (router, dispatcher,
security components etc.). Unlike the other request bags, it is not
hydrated from a superglobal - it always starts empty.

The base class supplies the entire surface; this class exists as a
distinct type so DI typing and IDE autocomplete stay precise.

<div class="api-tree">

- [`Phalcon\Http\Request\Bag\AbstractBag`](#httprequestbagabstractbag)
- **`Phalcon\Http\Request\Bag\AttributeBag`**

</div>

## Http\Request\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/Exception.zep">Source on GitHub</a>

Phalcon\Http\Request\Exception

Exceptions thrown in Phalcon\Http\Request will use this class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Http\Request\Exception`**
- [`Phalcon\Http\Request\Exceptions\FilterServiceUnavailable`](#httprequestexceptionsfilterserviceunavailable)
- [`Phalcon\Http\Request\Exceptions\InvalidHttpMethod`](#httprequestexceptionsinvalidhttpmethod)
- [`Phalcon\Http\Request\Exceptions\MissingFilters`](#httprequestexceptionsmissingfilters)
- [`Phalcon\Http\Request\Exceptions\NullKeyException`](#httprequestexceptionsnullkeyexception)
- [`Phalcon\Http\Request\Exceptions\SanitizerNotFound`](#httprequestexceptionssanitizernotfound)

</div>

## Http\Request\Exceptions\FilterServiceUnavailable

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/Exceptions/FilterServiceUnavailable.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Request\Exception`](#httprequestexception)
- **`Phalcon\Http\Request\Exceptions\FilterServiceUnavailable`**

</div>

__Uses__ `Phalcon\Http\Request\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionsfilterserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httprequestexceptionsfilterserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Request\Exceptions\InvalidHost

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/Exceptions/InvalidHost.zep">Source on GitHub</a>

<div class="api-tree">

- `UnexpectedValueException`
- **`Phalcon\Http\Request\Exceptions\InvalidHost`**

</div>

__Uses__ `UnexpectedValueException`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionsinvalidhost-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$host</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httprequestexceptionsinvalidhost-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $host );
```

## Http\Request\Exceptions\InvalidHttpMethod

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/Exceptions/InvalidHttpMethod.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Request\Exception`](#httprequestexception)
- **`Phalcon\Http\Request\Exceptions\InvalidHttpMethod`**

</div>

__Uses__ `Phalcon\Http\Request\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionsinvalidhttpmethod-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$method</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httprequestexceptionsinvalidhttpmethod-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $method );
```

## Http\Request\Exceptions\MissingFilters

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/Exceptions/MissingFilters.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Request\Exception`](#httprequestexception)
- **`Phalcon\Http\Request\Exceptions\MissingFilters`**

</div>

__Uses__ `Phalcon\Http\Request\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionsmissingfilters-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httprequestexceptionsmissingfilters-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Http\Request\Exceptions\NullKeyException

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/Exceptions/NullKeyException.zep">Source on GitHub</a>

Thrown by AbstractBag::offsetSet() when a null offset is used (the
ArrayAccess append form). Bags are always string-keyed, so an
auto-indexed write could never be addressed by the caller.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Request\Exception`](#httprequestexception)
- **`Phalcon\Http\Request\Exceptions\NullKeyException`**

</div>

__Uses__ `Phalcon\Http\Request\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionsnullkeyexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httprequestexceptionsnullkeyexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Request\Exceptions\SanitizerNotFound

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/Exceptions/SanitizerNotFound.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Request\Exception`](#httprequestexception)
- **`Phalcon\Http\Request\Exceptions\SanitizerNotFound`**

</div>

__Uses__ `Phalcon\Http\Request\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionssanitizernotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$sanitizer</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httprequestexceptionssanitizernotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $sanitizer );
```

## Http\Request\File

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/File.zep">Source on GitHub</a>

Phalcon\Http\Request\File

Provides OO wrappers to the $_FILES superglobal

```php
use Phalcon\Mvc\Controller;

class PostsController extends Controller
{
public function uploadAction()
{
    // Check if the user has uploaded files
    if ($this->request->hasFiles() == true) {
        // Print the real file names and their sizes
        foreach ($this->request->getUploadedFiles() as $file) {
            echo $file->getName(), " ", $file->getSize(), "\n";
        }
    }
}
}
```

<div class="api-tree">

- **`Phalcon\Http\Request\File`** - implements [`Phalcon\Http\Request\FileInterface`](#httprequestfileinterface)

</div>

__Uses__ `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestfile-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">array</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Phalcon\Http\Request\File constructor</span>
</a>
<a class="api-item" href="#httprequestfile-geterror">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getError</span>()</code>
</a>
<a class="api-item" href="#httprequestfile-getextension">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExtension</span>()</code>
</a>
<a class="api-item" href="#httprequestfile-getkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getKey</span>()</code>
</a>
<a class="api-item" href="#httprequestfile-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the real name of the uploaded file</span>
</a>
<a class="api-item" href="#httprequestfile-getrealtype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRealType</span>()</code>
<span class="desc">Gets the real mime type of the upload file using finfo</span>
</a>
<a class="api-item" href="#httprequestfile-getsize">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getSize</span>()</code>
<span class="desc">Returns the file size of the uploaded file</span>
</a>
<a class="api-item" href="#httprequestfile-gettempname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTempName</span>()</code>
<span class="desc">Returns the temporary name of the uploaded file</span>
</a>
<a class="api-item" href="#httprequestfile-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns the mime type reported by the browser</span>
</a>
<a class="api-item" href="#httprequestfile-isuploadedfile">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isUploadedFile</span>()</code>
<span class="desc">Checks whether the file has been uploaded via Post.</span>
</a>
<a class="api-item" href="#httprequestfile-moveto">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">moveTo</span>( <span class="st">string</span> <span class="sv">$destination</span> )</code>
<span class="desc">Moves the temporary file to a destination within the application</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$error</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$extension</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$key</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$name</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$realType</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$size</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$tmpName</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

<h4 id="httprequestfile-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array $file,
string $key = ""
);
```

Phalcon\Http\Request\File constructor

<h4 id="httprequestfile-geterror"><code>getError()</code></h4>

```php
public function getError(): int;
```

<h4 id="httprequestfile-getextension"><code>getExtension()</code></h4>

```php
public function getExtension(): string;
```

<h4 id="httprequestfile-getkey"><code>getKey()</code></h4>

```php
public function getKey(): string;
```

<h4 id="httprequestfile-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the real name of the uploaded file

<h4 id="httprequestfile-getrealtype"><code>getRealType()</code></h4>

```php
public function getRealType(): string;
```

Gets the real mime type of the upload file using finfo

<h4 id="httprequestfile-getsize"><code>getSize()</code></h4>

```php
public function getSize(): int;
```

Returns the file size of the uploaded file

<h4 id="httprequestfile-gettempname"><code>getTempName()</code></h4>

```php
public function getTempName(): string;
```

Returns the temporary name of the uploaded file

<h4 id="httprequestfile-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Returns the mime type reported by the browser
This mime type is not completely secure, use getRealType() instead

<h4 id="httprequestfile-isuploadedfile"><code>isUploadedFile()</code></h4>

```php
public function isUploadedFile(): bool;
```

Checks whether the file has been uploaded via Post.

<h4 id="httprequestfile-moveto"><code>moveTo()</code></h4>

```php
public function moveTo( string $destination ): bool;
```

Moves the temporary file to a destination within the application

## Http\Request\FileInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Request/FileInterface.zep">Source on GitHub</a>

Interface for Phalcon\Http\Request\File

<div class="api-tree">

- **`Phalcon\Http\Request\FileInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestfileinterface-geterror">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getError</span>()</code>
<span class="desc">Returns the error if any</span>
</a>
<a class="api-item" href="#httprequestfileinterface-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the real name of the uploaded file</span>
</a>
<a class="api-item" href="#httprequestfileinterface-getrealtype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRealType</span>()</code>
<span class="desc">Gets the real mime type of the upload file using finfo</span>
</a>
<a class="api-item" href="#httprequestfileinterface-getsize">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getSize</span>()</code>
<span class="desc">Returns the file size of the uploaded file</span>
</a>
<a class="api-item" href="#httprequestfileinterface-gettempname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTempName</span>()</code>
<span class="desc">Returns the temporal name of the uploaded file</span>
</a>
<a class="api-item" href="#httprequestfileinterface-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
<span class="desc">Returns the mime type reported by the browser</span>
</a>
<a class="api-item" href="#httprequestfileinterface-moveto">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">moveTo</span>( <span class="st">string</span> <span class="sv">$destination</span> )</code>
<span class="desc">Move the temporary file to a destination</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

<h4 id="httprequestfileinterface-geterror"><code>getError()</code></h4>

```php
public function getError(): int;
```

Returns the error if any

<h4 id="httprequestfileinterface-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the real name of the uploaded file

<h4 id="httprequestfileinterface-getrealtype"><code>getRealType()</code></h4>

```php
public function getRealType(): string;
```

Gets the real mime type of the upload file using finfo

<h4 id="httprequestfileinterface-getsize"><code>getSize()</code></h4>

```php
public function getSize(): int;
```

Returns the file size of the uploaded file

<h4 id="httprequestfileinterface-gettempname"><code>getTempName()</code></h4>

```php
public function getTempName(): string;
```

Returns the temporal name of the uploaded file

<h4 id="httprequestfileinterface-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Returns the mime type reported by the browser
This mime type is not completely secure, use getRealType() instead

<h4 id="httprequestfileinterface-moveto"><code>moveTo()</code></h4>

```php
public function moveTo( string $destination ): bool;
```

Move the temporary file to a destination

## Http\Response

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Response.zep">Source on GitHub</a>

Part of the HTTP cycle is return responses to the clients.
Phalcon\HTTP\Response is the Phalcon component responsible to achieve this task.
HTTP responses are usually composed by headers and body.

```php
$response = new \Phalcon\Http\Response();

$response->setStatusCode(200, "OK");
$response->setContent("<html><body>Hello</body></html>");

$response->send();
```

<div class="api-tree">

- **`Phalcon\Http\Response`** - implements [`Phalcon\Http\ResponseInterface`](#httpresponseinterface), [`Phalcon\Di\InjectionAwareInterface`](/5.18/api/phalcon_di/#diinjectionawareinterface), [`Phalcon\Events\EventsAwareInterface`](/5.18/api/phalcon_events/#eventseventsawareinterface), [`Phalcon\Http\Message\ResponseStatusCodeInterface`](#httpmessageresponsestatuscodeinterface)

</div>

__Uses__ `DateTime` · `DateTimeZone` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Http\Message\ResponseStatusCodeInterface` · `Phalcon\Http\Response\CookiesInterface` · `Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage` · `Phalcon\Http\Response\Exceptions\ResponseAlreadySent` · `Phalcon\Http\Response\Exceptions\UrlServiceUnavailable` · `Phalcon\Http\Response\Headers` · `Phalcon\Http\Response\HeadersInterface` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Mvc\ViewInterface` · `Phalcon\Support\Helper\File\Basename` · `Phalcon\Support\Helper\Json\Encode` · `Phalcon\Traits\Php\InfoTrait` · `Phalcon\Traits\Php\UrlTrait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponse-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$content</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$code</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$status</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Phalcon\Http\Response constructor</span>
</a>
<a class="api-item" href="#httpresponse-appendcontent">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">appendContent</span>( <span class="st">mixed</span> <span class="sv">$content</span> )</code>
<span class="desc">Appends a string to the HTTP response body</span>
</a>
<a class="api-item" href="#httpresponse-getcontent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getContent</span>()</code>
<span class="desc">Gets the HTTP response body</span>
</a>
<a class="api-item" href="#httpresponse-getcookies">
<code class="vis vis-public">public</code>
<code class="ret">CookiesInterface</code>
<code class="sig"><span class="sf">getCookies</span>()</code>
<span class="desc">Returns cookies set by the user</span>
</a>
<a class="api-item" href="#httpresponse-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig"><span class="sf">getDI</span>()</code>
<span class="desc">Returns the internal dependency injector</span>
</a>
<a class="api-item" href="#httpresponse-geteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sf">getEventsManager</span>()</code>
<span class="desc">Returns the internal event manager</span>
</a>
<a class="api-item" href="#httpresponse-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">HeadersInterface</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Returns headers set by the user</span>
</a>
<a class="api-item" href="#httpresponse-getreasonphrase">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getReasonPhrase</span>()</code>
<span class="desc">Returns the reason phrase</span>
</a>
<a class="api-item" href="#httpresponse-getstatuscode">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getStatusCode</span>()</code>
<span class="desc">Returns the status code</span>
</a>
<a class="api-item" href="#httpresponse-hasheader">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a header exists</span>
</a>
<a class="api-item" href="#httpresponse-issent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSent</span>()</code>
<span class="desc">Check if the response is already sent</span>
</a>
<a class="api-item" href="#httpresponse-redirect">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">redirect</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$location</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$externalRedirect</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$statusCode</span><span class="sm"> = 302</span></span>)</code>
<span class="desc">Redirect by HTTP to another action or URL</span>
</a>
<a class="api-item" href="#httpresponse-removeheader">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">removeHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Remove a header in the response</span>
</a>
<a class="api-item" href="#httpresponse-resetheaders">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">resetHeaders</span>()</code>
<span class="desc">Resets all the established headers</span>
</a>
<a class="api-item" href="#httpresponse-send">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">send</span>()</code>
<span class="desc">Prints out HTTP response to the client</span>
</a>
<a class="api-item" href="#httpresponse-sendcookies">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">sendCookies</span>()</code>
<span class="desc">Sends cookies to the client</span>
</a>
<a class="api-item" href="#httpresponse-sendheaders">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface|bool</code>
<code class="sig"><span class="sf">sendHeaders</span>()</code>
<span class="desc">Sends headers to the client</span>
</a>
<a class="api-item" href="#httpresponse-setcache">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setCache</span>( <span class="st">int</span> <span class="sv">$minutes</span> )</code>
<span class="desc">Sets Cache headers to use HTTP cache</span>
</a>
<a class="api-item" href="#httpresponse-setcontent">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setContent</span>( <span class="st">string</span> <span class="sv">$content</span> )</code>
<span class="desc">Sets HTTP response body</span>
</a>
<a class="api-item" href="#httpresponse-setcontentlength">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setContentLength</span>( <span class="st">int</span> <span class="sv">$contentLength</span> )</code>
<span class="desc">Sets the response content-length</span>
</a>
<a class="api-item" href="#httpresponse-setcontenttype">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setContentType</span>(<span class="prm"><span class="st">string</span> <span class="sv">$contentType</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$charset</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets the response content-type mime, optionally the charset</span>
</a>
<a class="api-item" href="#httpresponse-setcookies">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setCookies</span>( <span class="st">CookiesInterface</span> <span class="sv">$cookies</span> )</code>
<span class="desc">Sets a cookies bag for the response externally</span>
</a>
<a class="api-item" href="#httpresponse-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDI</span>( <span class="st">DiInterface</span> <span class="sv">$container</span> )</code>
<span class="desc">Sets the dependency injector</span>
</a>
<a class="api-item" href="#httpresponse-setetag">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setEtag</span>( <span class="st">string</span> <span class="sv">$etag</span> )</code>
<span class="desc">Set a custom ETag</span>
</a>
<a class="api-item" href="#httpresponse-seteventsmanager">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setEventsManager</span>( <span class="st">ManagerInterface</span> <span class="sv">$eventsManager</span> )</code>
<span class="desc">Sets the events manager</span>
</a>
<a class="api-item" href="#httpresponse-setexpires">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setExpires</span>( <span class="st">DateTime</span> <span class="sv">$datetime</span> )</code>
<span class="desc">Sets an Expires header in the response that allows to use the HTTP cache</span>
</a>
<a class="api-item" href="#httpresponse-setfiletosend">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setFileToSend</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filePath</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$attachmentName</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$attachment</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Sets an attached file to be sent at the end of the request</span>
</a>
<a class="api-item" href="#httpresponse-setheader">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Overwrites a header in the response</span>
</a>
<a class="api-item" href="#httpresponse-setheaders">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setHeaders</span>( <span class="st">HeadersInterface</span> <span class="sv">$headers</span> )</code>
<span class="desc">Sets a headers bag for the response externally</span>
</a>
<a class="api-item" href="#httpresponse-setjsoncontent">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setJsonContent</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$jsonOptions</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$depth</span><span class="sm"> = 512</span></span>)</code>
<span class="desc">Sets HTTP response body. The parameter is automatically converted to JSON</span>
</a>
<a class="api-item" href="#httpresponse-setlastmodified">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setLastModified</span>( <span class="st">DateTime</span> <span class="sv">$datetime</span> )</code>
<span class="desc">Sets Last-Modified header</span>
</a>
<a class="api-item" href="#httpresponse-setnotmodified">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setNotModified</span>()</code>
<span class="desc">Sends a Not-Modified response</span>
</a>
<a class="api-item" href="#httpresponse-setrawheader">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setRawHeader</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Send a raw header to the response</span>
</a>
<a class="api-item" href="#httpresponse-setstatuscode">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setStatusCode</span>(<span class="prm"><span class="st">int</span> <span class="sv">$code</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets the HTTP response code</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">DiInterface|null</code>
<code class="sig"><span class="sv">$container</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$content</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">CookiesInterface|null</code>
<code class="sig"><span class="sv">$cookies</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Encode</code>
<code class="sig"><span class="sv">$encode</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ManagerInterface|null</code>
<code class="sig"><span class="sv">$eventsManager</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$file</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Headers</code>
<code class="sig"><span class="sv">$headers</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$sent</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 34</div>

<h4 id="httpresponse-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $content = null,
mixed $code = null,
mixed $status = null
);
```

Phalcon\Http\Response constructor

<h4 id="httpresponse-appendcontent"><code>appendContent()</code></h4>

```php
public function appendContent( mixed $content ): ResponseInterface;
```

Appends a string to the HTTP response body

<h4 id="httpresponse-getcontent"><code>getContent()</code></h4>

```php
public function getContent(): string;
```

Gets the HTTP response body

<h4 id="httpresponse-getcookies"><code>getCookies()</code></h4>

```php
public function getCookies(): CookiesInterface;
```

Returns cookies set by the user

<h4 id="httpresponse-getdi"><code>getDI()</code></h4>

```php
public function getDI(): DiInterface;
```

Returns the internal dependency injector

<h4 id="httpresponse-geteventsmanager"><code>getEventsManager()</code></h4>

```php
public function getEventsManager(): ManagerInterface|null;
```

Returns the internal event manager

<h4 id="httpresponse-getheaders"><code>getHeaders()</code></h4>

```php
public function getHeaders(): HeadersInterface;
```

Returns headers set by the user

<h4 id="httpresponse-getreasonphrase"><code>getReasonPhrase()</code></h4>

```php
public function getReasonPhrase(): string|null;
```

Returns the reason phrase

```php
echo $response->getReasonPhrase();
```

<h4 id="httpresponse-getstatuscode"><code>getStatusCode()</code></h4>

```php
public function getStatusCode(): int|null;
```

Returns the status code

```php
echo $response->getStatusCode();
```

<h4 id="httpresponse-hasheader"><code>hasHeader()</code></h4>

```php
public function hasHeader( string $name ): bool;
```

Checks if a header exists

```php
$response->hasHeader("Content-Type");
```

<h4 id="httpresponse-issent"><code>isSent()</code></h4>

```php
public function isSent(): bool;
```

Check if the response is already sent

<h4 id="httpresponse-redirect"><code>redirect()</code></h4>

```php
public function redirect(
mixed $location = null,
bool $externalRedirect = false,
int $statusCode = 302
): ResponseInterface;
```

Redirect by HTTP to another action or URL

```php
// Using a string redirect (internal/external)
$response->redirect("posts/index");
$response->redirect("http://en.wikipedia.org", true);
$response->redirect("http://www.example.com/new-location", true, 301);

// Making a redirection based on a named route
$response->redirect(
[
    "for"        => "index-lang",
    "lang"       => "jp",
    "controller" => "index",
]
);
```

<h4 id="httpresponse-removeheader"><code>removeHeader()</code></h4>

```php
public function removeHeader( string $name ): ResponseInterface;
```

Remove a header in the response

```php
$response->removeHeader("Expires");
```

<h4 id="httpresponse-resetheaders"><code>resetHeaders()</code></h4>

```php
public function resetHeaders(): ResponseInterface;
```

Resets all the established headers

<h4 id="httpresponse-send"><code>send()</code></h4>

```php
public function send(): ResponseInterface;
```

Prints out HTTP response to the client

<h4 id="httpresponse-sendcookies"><code>sendCookies()</code></h4>

```php
public function sendCookies(): ResponseInterface;
```

Sends cookies to the client

<h4 id="httpresponse-sendheaders"><code>sendHeaders()</code></h4>

```php
public function sendHeaders(): ResponseInterface|bool;
```

Sends headers to the client

<h4 id="httpresponse-setcache"><code>setCache()</code></h4>

```php
public function setCache( int $minutes ): ResponseInterface;
```

Sets Cache headers to use HTTP cache

```php
$this->response->setCache(60);
```

<h4 id="httpresponse-setcontent"><code>setContent()</code></h4>

```php
public function setContent( string $content ): ResponseInterface;
```

Sets HTTP response body

```php
$response->setContent("<h1>Hello!</h1>");
```

<h4 id="httpresponse-setcontentlength"><code>setContentLength()</code></h4>

```php
public function setContentLength( int $contentLength ): ResponseInterface;
```

Sets the response content-length

```php
$response->setContentLength(2048);
```

<h4 id="httpresponse-setcontenttype"><code>setContentType()</code></h4>

```php
public function setContentType(
string $contentType,
mixed $charset = null
): ResponseInterface;
```

Sets the response content-type mime, optionally the charset

```php
$response->setContentType("application/pdf");
$response->setContentType("text/plain", "UTF-8");
```

<h4 id="httpresponse-setcookies"><code>setCookies()</code></h4>

```php
public function setCookies( CookiesInterface $cookies ): ResponseInterface;
```

Sets a cookies bag for the response externally

<h4 id="httpresponse-setdi"><code>setDI()</code></h4>

```php
public function setDI( DiInterface $container ): void;
```

Sets the dependency injector

<h4 id="httpresponse-setetag"><code>setEtag()</code></h4>

```php
public function setEtag( string $etag ): ResponseInterface;
```

Set a custom ETag

```php
$response->setEtag(
md5(
    time()
)
);
```

<h4 id="httpresponse-seteventsmanager"><code>setEventsManager()</code></h4>

```php
public function setEventsManager( ManagerInterface $eventsManager ): void;
```

Sets the events manager

<h4 id="httpresponse-setexpires"><code>setExpires()</code></h4>

```php
public function setExpires( DateTime $datetime ): ResponseInterface;
```

Sets an Expires header in the response that allows to use the HTTP cache

```php
$this->response->setExpires(
new DateTime()
);
```

<h4 id="httpresponse-setfiletosend"><code>setFileToSend()</code></h4>

```php
public function setFileToSend(
string $filePath,
mixed $attachmentName = null,
mixed $attachment = true
): ResponseInterface;
```

Sets an attached file to be sent at the end of the request

<h4 id="httpresponse-setheader"><code>setHeader()</code></h4>

```php
public function setHeader(
string $name,
mixed $value
): ResponseInterface;
```

Overwrites a header in the response

```php
$response->setHeader("Content-Type", "text/plain");
```

<h4 id="httpresponse-setheaders"><code>setHeaders()</code></h4>

```php
public function setHeaders( HeadersInterface $headers ): ResponseInterface;
```

Sets a headers bag for the response externally

<h4 id="httpresponse-setjsoncontent"><code>setJsonContent()</code></h4>

```php
public function setJsonContent(
mixed $content,
int $jsonOptions = 0,
int $depth = 512
): ResponseInterface;
```

Sets HTTP response body. The parameter is automatically converted to JSON
and also sets default header: Content-Type: "application/json; charset=UTF-8"

```php
$response->setJsonContent(
[
    "status" => "OK",
]
);
```

<h4 id="httpresponse-setlastmodified"><code>setLastModified()</code></h4>

```php
public function setLastModified( DateTime $datetime ): ResponseInterface;
```

Sets Last-Modified header

```php
$this->response->setLastModified(
new DateTime()
);
```

<h4 id="httpresponse-setnotmodified"><code>setNotModified()</code></h4>

```php
public function setNotModified(): ResponseInterface;
```

Sends a Not-Modified response

<h4 id="httpresponse-setrawheader"><code>setRawHeader()</code></h4>

```php
public function setRawHeader( string $header ): ResponseInterface;
```

Send a raw header to the response

```php
$response->setRawHeader("HTTP/1.1 404 Not Found");
```

<h4 id="httpresponse-setstatuscode"><code>setStatusCode()</code></h4>

```php
public function setStatusCode(
int $code,
string $message = null
): ResponseInterface;
```

Sets the HTTP response code

```php
$response->setStatusCode(404, "Not Found");
```

## Http\ResponseInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/ResponseInterface.zep">Source on GitHub</a>

Phalcon\Http\Response

Interface for Phalcon\Http\Response

<div class="api-tree">

- **`Phalcon\Http\ResponseInterface`**

</div>

__Uses__ `DateTime` · `Phalcon\Http\Response\HeadersInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseinterface-appendcontent">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">appendContent</span>( <span class="st">string</span> <span class="sv">$content</span> )</code>
<span class="desc">Appends a string to the HTTP response body</span>
</a>
<a class="api-item" href="#httpresponseinterface-getcontent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getContent</span>()</code>
<span class="desc">Gets the HTTP response body</span>
</a>
<a class="api-item" href="#httpresponseinterface-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">HeadersInterface</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Returns headers set by the user</span>
</a>
<a class="api-item" href="#httpresponseinterface-getstatuscode">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getStatusCode</span>()</code>
<span class="desc">Returns the status code</span>
</a>
<a class="api-item" href="#httpresponseinterface-hasheader">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a header exists</span>
</a>
<a class="api-item" href="#httpresponseinterface-issent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSent</span>()</code>
<span class="desc">Checks if the response was already sent</span>
</a>
<a class="api-item" href="#httpresponseinterface-redirect">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">redirect</span>(<span class="prm"><span class="st">string</span> <span class="sv">$location</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$externalRedirect</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$statusCode</span><span class="sm"> = 302</span></span>)</code>
<span class="desc">Redirect by HTTP to another action or URL</span>
</a>
<a class="api-item" href="#httpresponseinterface-resetheaders">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">resetHeaders</span>()</code>
<span class="desc">Resets all the established headers</span>
</a>
<a class="api-item" href="#httpresponseinterface-send">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">send</span>()</code>
<span class="desc">Prints out HTTP response to the client</span>
</a>
<a class="api-item" href="#httpresponseinterface-sendcookies">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">sendCookies</span>()</code>
<span class="desc">Sends cookies to the client</span>
</a>
<a class="api-item" href="#httpresponseinterface-sendheaders">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface|bool</code>
<code class="sig"><span class="sf">sendHeaders</span>()</code>
<span class="desc">Sends headers to the client</span>
</a>
<a class="api-item" href="#httpresponseinterface-setcontent">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setContent</span>( <span class="st">string</span> <span class="sv">$content</span> )</code>
<span class="desc">Sets HTTP response body</span>
</a>
<a class="api-item" href="#httpresponseinterface-setcontentlength">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setContentLength</span>( <span class="st">int</span> <span class="sv">$contentLength</span> )</code>
<span class="desc">Sets the response content-length</span>
</a>
<a class="api-item" href="#httpresponseinterface-setcontenttype">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setContentType</span>(<span class="prm"><span class="st">string</span> <span class="sv">$contentType</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$charset</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets the response content-type mime, optionally the charset</span>
</a>
<a class="api-item" href="#httpresponseinterface-setexpires">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setExpires</span>( <span class="st">DateTime</span> <span class="sv">$datetime</span> )</code>
<span class="desc">Sets output expire time header</span>
</a>
<a class="api-item" href="#httpresponseinterface-setfiletosend">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setFileToSend</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filePath</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$attachmentName</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets an attached file to be sent at the end of the request</span>
</a>
<a class="api-item" href="#httpresponseinterface-setheader">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Overwrites a header in the response</span>
</a>
<a class="api-item" href="#httpresponseinterface-setjsoncontent">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setJsonContent</span>( <span class="st">mixed</span> <span class="sv">$content</span> )</code>
<span class="desc">Sets HTTP response body. The parameter is automatically converted to JSON</span>
</a>
<a class="api-item" href="#httpresponseinterface-setnotmodified">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setNotModified</span>()</code>
<span class="desc">Sends a Not-Modified response</span>
</a>
<a class="api-item" href="#httpresponseinterface-setrawheader">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setRawHeader</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Send a raw header to the response</span>
</a>
<a class="api-item" href="#httpresponseinterface-setstatuscode">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setStatusCode</span>(<span class="prm"><span class="st">int</span> <span class="sv">$code</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$message</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets the HTTP response code</span>
</a>
</div>

### Methods

<div class="api-group">Public · 21</div>

<h4 id="httpresponseinterface-appendcontent"><code>appendContent()</code></h4>

```php
public function appendContent( string $content ): ResponseInterface;
```

Appends a string to the HTTP response body

<h4 id="httpresponseinterface-getcontent"><code>getContent()</code></h4>

```php
public function getContent(): string;
```

Gets the HTTP response body

<h4 id="httpresponseinterface-getheaders"><code>getHeaders()</code></h4>

```php
public function getHeaders(): HeadersInterface;
```

Returns headers set by the user

<h4 id="httpresponseinterface-getstatuscode"><code>getStatusCode()</code></h4>

```php
public function getStatusCode(): int|null;
```

Returns the status code

<h4 id="httpresponseinterface-hasheader"><code>hasHeader()</code></h4>

```php
public function hasHeader( string $name ): bool;
```

Checks if a header exists

<h4 id="httpresponseinterface-issent"><code>isSent()</code></h4>

```php
public function isSent(): bool;
```

Checks if the response was already sent

<h4 id="httpresponseinterface-redirect"><code>redirect()</code></h4>

```php
public function redirect(
string $location = null,
bool $externalRedirect = false,
int $statusCode = 302
): ResponseInterface;
```

Redirect by HTTP to another action or URL

<h4 id="httpresponseinterface-resetheaders"><code>resetHeaders()</code></h4>

```php
public function resetHeaders(): ResponseInterface;
```

Resets all the established headers

<h4 id="httpresponseinterface-send"><code>send()</code></h4>

```php
public function send(): ResponseInterface;
```

Prints out HTTP response to the client

<h4 id="httpresponseinterface-sendcookies"><code>sendCookies()</code></h4>

```php
public function sendCookies(): ResponseInterface;
```

Sends cookies to the client

<h4 id="httpresponseinterface-sendheaders"><code>sendHeaders()</code></h4>

```php
public function sendHeaders(): ResponseInterface|bool;
```

Sends headers to the client

<h4 id="httpresponseinterface-setcontent"><code>setContent()</code></h4>

```php
public function setContent( string $content ): ResponseInterface;
```

Sets HTTP response body

<h4 id="httpresponseinterface-setcontentlength"><code>setContentLength()</code></h4>

```php
public function setContentLength( int $contentLength ): ResponseInterface;
```

Sets the response content-length

<h4 id="httpresponseinterface-setcontenttype"><code>setContentType()</code></h4>

```php
public function setContentType(
string $contentType,
string $charset = null
): ResponseInterface;
```

Sets the response content-type mime, optionally the charset

<h4 id="httpresponseinterface-setexpires"><code>setExpires()</code></h4>

```php
public function setExpires( DateTime $datetime ): ResponseInterface;
```

Sets output expire time header

<h4 id="httpresponseinterface-setfiletosend"><code>setFileToSend()</code></h4>

```php
public function setFileToSend(
string $filePath,
string $attachmentName = null
): ResponseInterface;
```

Sets an attached file to be sent at the end of the request

<h4 id="httpresponseinterface-setheader"><code>setHeader()</code></h4>

```php
public function setHeader(
string $name,
string $value
): ResponseInterface;
```

Overwrites a header in the response

<h4 id="httpresponseinterface-setjsoncontent"><code>setJsonContent()</code></h4>

```php
public function setJsonContent( mixed $content ): ResponseInterface;
```

Sets HTTP response body. The parameter is automatically converted to JSON

```php
$response->setJsonContent(
[
    "status" => "OK",
]
);
```

<h4 id="httpresponseinterface-setnotmodified"><code>setNotModified()</code></h4>

```php
public function setNotModified(): ResponseInterface;
```

Sends a Not-Modified response

<h4 id="httpresponseinterface-setrawheader"><code>setRawHeader()</code></h4>

```php
public function setRawHeader( string $header ): ResponseInterface;
```

Send a raw header to the response

<h4 id="httpresponseinterface-setstatuscode"><code>setStatusCode()</code></h4>

```php
public function setStatusCode(
int $code,
string $message = null
): ResponseInterface;
```

Sets the HTTP response code

## Http\Response\Cookies

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Response/Cookies.zep">Source on GitHub</a>

This class is a bag to manage the cookies.

A cookies bag is automatically registered as part of the 'response' service
in the DI. By default, cookies are automatically encrypted before being sent
to the client and are decrypted when retrieved from the user. To set sign key
used to generate a message authentication code use
`Phalcon\Http\Response\Cookies::setSignKey()`.

```php
use Phalcon\Di\Di;
use Phalcon\Encryption\Crypt;
use Phalcon\Http\Response\Cookies;

$di = new Di();

$di->set(
'crypt',
function () {
    $crypt = new Crypt();

    // The `$key' should have been previously generated in a cryptographically safe way.
    $key = "T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3";

    $crypt->setKey($key);

    return $crypt;
}
);

$di->set(
'cookies',
function () {
    $cookies = new Cookies();

    // The `$key' MUST be at least 32 characters long and generated using a
    // cryptographically secure pseudo random generator.
    $key = "#1dj8$=dp?.ak//j1V$~%*0XaK\xb1\x8d\xa9\x98\x054t7w!z%C*F-Jk\x98\x05\\\x5c";

    $cookies->setSignKey($key);

    return $cookies;
}
);
```

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](/5.18/api/phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Http\Response\Cookies`** - implements [`Phalcon\Http\Response\CookiesInterface`](#httpresponsecookiesinterface)

</div>

__Uses__ `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Http\Cookie` · `Phalcon\Http\Cookie\CookieInterface` · `Phalcon\Http\Cookie\Exception` · `Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable` · `Phalcon\Http\Traits\EncryptionAwareTrait`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponsecookies-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">bool</span> <span class="sv">$useEncryption</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$signKey</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Phalcon\Http\Response\Cookies constructor</span>
</a>
<a class="api-item" href="#httpresponsecookies-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">delete</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Deletes a cookie by its name</span>
</a>
<a class="api-item" href="#httpresponsecookies-get">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Gets a cookie from the bag</span>
</a>
<a class="api-item" href="#httpresponsecookies-getcookies">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getCookies</span>()</code>
<span class="desc">Gets all cookies from the bag</span>
</a>
<a class="api-item" href="#httpresponsecookies-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check if a cookie is defined in the bag or exists in the _COOKIE</span>
</a>
<a class="api-item" href="#httpresponsecookies-issent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSent</span>()</code>
<span class="desc">Returns if the headers have already been sent</span>
</a>
<a class="api-item" href="#httpresponsecookies-reset">
<code class="vis vis-public">public</code>
<code class="ret">CookiesInterface</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Reset set cookies</span>
</a>
<a class="api-item" href="#httpresponsecookies-send">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">send</span>()</code>
<span class="desc">Sends the cookies to the client</span>
</a>
<a class="api-item" href="#httpresponsecookies-set">
<code class="vis vis-public">public</code>
<code class="ret">CookiesInterface</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$expire</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$path</span><span class="sm"> = &quot;/&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$secure</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$domain</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$httpOnly</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Sets a cookie to be sent at the end of the request.</span>
</a>
<a class="api-item" href="#httpresponsecookies-setsignkey">
<code class="vis vis-public">public</code>
<code class="ret">CookiesInterface</code>
<code class="sig"><span class="sf">setSignKey</span>( <span class="st">string</span> <span class="sv">$signKey</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the cookie&#039;s sign key.</span>
</a>
<a class="api-item" href="#httpresponsecookies-useencryption">
<code class="vis vis-public">public</code>
<code class="ret">CookiesInterface</code>
<code class="sig"><span class="sf">useEncryption</span>( <span class="st">bool</span> <span class="sv">$useEncryption</span> )</code>
<span class="desc">Set if cookies in the bag must be automatically encrypted/decrypted</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$cookies</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isRegistered</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isSent</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$signKey</span><span class="sm"> = null</span></code>
<span class="desc">The cookie&#039;s sign key.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

<h4 id="httpresponsecookies-__construct"><code>__construct()</code></h4>

```php
public function __construct(
bool $useEncryption = true,
string $signKey = null
);
```

Phalcon\Http\Response\Cookies constructor

<h4 id="httpresponsecookies-delete"><code>delete()</code></h4>

```php
public function delete( string $name ): bool;
```

Deletes a cookie by its name
This method does not removes cookies from the _COOKIE superglobal

<h4 id="httpresponsecookies-get"><code>get()</code></h4>

```php
public function get( string $name ): CookieInterface;
```

Gets a cookie from the bag

<h4 id="httpresponsecookies-getcookies"><code>getCookies()</code></h4>

```php
public function getCookies(): array;
```

Gets all cookies from the bag

<h4 id="httpresponsecookies-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Check if a cookie is defined in the bag or exists in the _COOKIE
superglobal

<h4 id="httpresponsecookies-issent"><code>isSent()</code></h4>

```php
public function isSent(): bool;
```

Returns if the headers have already been sent

<h4 id="httpresponsecookies-reset"><code>reset()</code></h4>

```php
public function reset(): CookiesInterface;
```

Reset set cookies

<h4 id="httpresponsecookies-send"><code>send()</code></h4>

```php
public function send(): bool;
```

Sends the cookies to the client
Cookies aren't sent if headers are sent in the current request

<h4 id="httpresponsecookies-set"><code>set()</code></h4>

```php
public function set(
string $name,
mixed $value = null,
int $expire = 0,
string $path = "/",
bool $secure = false,
string $domain = "",
bool $httpOnly = false,
array $options = []
): CookiesInterface;
```

Sets a cookie to be sent at the end of the request.

This method overrides any cookie set before with the same name.

```php
use Phalcon\Http\Response\Cookies;

$now = new DateTimeImmutable();
$tomorrow = $now->modify('tomorrow');

$cookies = new Cookies();
$cookies->set(
'remember-me',
json_encode(['user_id' => 1]),
(int) $tomorrow->format('U'),
);
```

<h4 id="httpresponsecookies-setsignkey"><code>setSignKey()</code></h4>

```php
public function setSignKey( string $signKey = null ): CookiesInterface;
```

Sets the cookie's sign key.

The `$signKey' MUST be at least 32 characters long
and generated using a cryptographically secure pseudo random generator.

Use NULL to disable cookie signing.

@see \Phalcon\Security\Random

<h4 id="httpresponsecookies-useencryption"><code>useEncryption()</code></h4>

```php
public function useEncryption( bool $useEncryption ): CookiesInterface;
```

Set if cookies in the bag must be automatically encrypted/decrypted

## Http\Response\CookiesInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Response/CookiesInterface.zep">Source on GitHub</a>

Interface for Phalcon\Http\Response\Cookies

<div class="api-tree">

- **`Phalcon\Http\Response\CookiesInterface`**

</div>

__Uses__ `Phalcon\Http\Cookie\CookieInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponsecookiesinterface-delete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">delete</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Deletes a cookie by its name</span>
</a>
<a class="api-item" href="#httpresponsecookiesinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Gets a cookie from the bag</span>
</a>
<a class="api-item" href="#httpresponsecookiesinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check if a cookie is defined in the bag or exists in the _COOKIE superglobal</span>
</a>
<a class="api-item" href="#httpresponsecookiesinterface-isusingencryption">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isUsingEncryption</span>()</code>
<span class="desc">Returns if the bag is automatically encrypting/decrypting cookies</span>
</a>
<a class="api-item" href="#httpresponsecookiesinterface-reset">
<code class="vis vis-public">public</code>
<code class="ret">CookiesInterface</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Reset set cookies</span>
</a>
<a class="api-item" href="#httpresponsecookiesinterface-send">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">send</span>()</code>
<span class="desc">Sends the cookies to the client</span>
</a>
<a class="api-item" href="#httpresponsecookiesinterface-set">
<code class="vis vis-public">public</code>
<code class="ret">CookiesInterface</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$expire</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$path</span><span class="sm"> = &quot;/&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$secure</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$domain</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$httpOnly</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Sets a cookie to be sent at the end of the request</span>
</a>
<a class="api-item" href="#httpresponsecookiesinterface-useencryption">
<code class="vis vis-public">public</code>
<code class="ret">CookiesInterface</code>
<code class="sig"><span class="sf">useEncryption</span>( <span class="st">bool</span> <span class="sv">$useEncryption</span> )</code>
<span class="desc">Set if cookies in the bag must be automatically encrypted/decrypted</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

<h4 id="httpresponsecookiesinterface-delete"><code>delete()</code></h4>

```php
public function delete( string $name ): bool;
```

Deletes a cookie by its name
This method does not removes cookies from the _COOKIE superglobal

<h4 id="httpresponsecookiesinterface-get"><code>get()</code></h4>

```php
public function get( string $name ): CookieInterface;
```

Gets a cookie from the bag

<h4 id="httpresponsecookiesinterface-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Check if a cookie is defined in the bag or exists in the _COOKIE superglobal

<h4 id="httpresponsecookiesinterface-isusingencryption"><code>isUsingEncryption()</code></h4>

```php
public function isUsingEncryption(): bool;
```

Returns if the bag is automatically encrypting/decrypting cookies

<h4 id="httpresponsecookiesinterface-reset"><code>reset()</code></h4>

```php
public function reset(): CookiesInterface;
```

Reset set cookies

<h4 id="httpresponsecookiesinterface-send"><code>send()</code></h4>

```php
public function send(): bool;
```

Sends the cookies to the client

<h4 id="httpresponsecookiesinterface-set"><code>set()</code></h4>

```php
public function set(
string $name,
mixed $value = null,
int $expire = 0,
string $path = "/",
bool $secure = false,
string $domain = "",
bool $httpOnly = false,
array $options = []
): CookiesInterface;
```

Sets a cookie to be sent at the end of the request

<h4 id="httpresponsecookiesinterface-useencryption"><code>useEncryption()</code></h4>

```php
public function useEncryption( bool $useEncryption ): CookiesInterface;
```

Set if cookies in the bag must be automatically encrypted/decrypted

## Http\Response\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Response/Exception.zep">Source on GitHub</a>

Phalcon\Http\Response\Exception

Exceptions thrown in Phalcon\Http\Response will use this class.

<div class="api-tree">

- `\Exception`
- **`Phalcon\Http\Response\Exception`**
- [`Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage`](#httpresponseexceptionsnonstandardstatuscoderequiresmessage)
- [`Phalcon\Http\Response\Exceptions\ResponseAlreadySent`](#httpresponseexceptionsresponsealreadysent)
- [`Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable`](#httpresponseexceptionsresponseserviceunavailable)
- [`Phalcon\Http\Response\Exceptions\UrlServiceUnavailable`](#httpresponseexceptionsurlserviceunavailable)

</div>

## Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Response/Exceptions/NonStandardStatusCodeRequiresMessage.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Response\Exception`](#httpresponseexception)
- **`Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage`**

</div>

__Uses__ `Phalcon\Http\Response\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseexceptionsnonstandardstatuscoderequiresmessage-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httpresponseexceptionsnonstandardstatuscoderequiresmessage-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Response\Exceptions\ResponseAlreadySent

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Response/Exceptions/ResponseAlreadySent.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Response\Exception`](#httpresponseexception)
- **`Phalcon\Http\Response\Exceptions\ResponseAlreadySent`**

</div>

__Uses__ `Phalcon\Http\Response\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseexceptionsresponsealreadysent-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httpresponseexceptionsresponsealreadysent-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Response\Exceptions\ResponseServiceUnavailable

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Response/Exceptions/ResponseServiceUnavailable.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Response\Exception`](#httpresponseexception)
- **`Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable`**

</div>

__Uses__ `Phalcon\Http\Response\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseexceptionsresponseserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httpresponseexceptionsresponseserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Response\Exceptions\UrlServiceUnavailable

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Response/Exceptions/UrlServiceUnavailable.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Http\Response\Exception`](#httpresponseexception)
- **`Phalcon\Http\Response\Exceptions\UrlServiceUnavailable`**

</div>

__Uses__ `Phalcon\Http\Response\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseexceptionsurlserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httpresponseexceptionsurlserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Response\Headers

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Response/Headers.zep">Source on GitHub</a>

This class is a bag to manage the response headers

<div class="api-tree">

- **`Phalcon\Http\Response\Headers`** - implements [`Phalcon\Http\Response\HeadersInterface`](#httpresponseheadersinterface), `IteratorAggregate`

</div>

__Uses__ `IteratorAggregate` · `Traversable`

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseheaders-get">
<code class="vis vis-public">public</code>
<code class="ret">string|bool|null</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Gets a header value from the internal bag</span>
</a>
<a class="api-item" href="#httpresponseheaders-getiterator">
<code class="vis vis-public">public</code>
<code class="ret">Traversable</code>
<code class="sig"><span class="sf">getIterator</span>()</code>
</a>
<a class="api-item" href="#httpresponseheaders-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a header exists</span>
</a>
<a class="api-item" href="#httpresponseheaders-issent">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSent</span>()</code>
<span class="desc">Returns if the headers have already been sent</span>
</a>
<a class="api-item" href="#httpresponseheaders-remove">
<code class="vis vis-public">public</code>
<code class="ret">HeadersInterface</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Removes a header by its name</span>
</a>
<a class="api-item" href="#httpresponseheaders-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Reset set headers</span>
</a>
<a class="api-item" href="#httpresponseheaders-send">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">send</span>()</code>
<span class="desc">Sends the headers to the client</span>
</a>
<a class="api-item" href="#httpresponseheaders-set">
<code class="vis vis-public">public</code>
<code class="ret">HeadersInterface</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a header to be sent at the end of the request</span>
</a>
<a class="api-item" href="#httpresponseheaders-setraw">
<code class="vis vis-public">public</code>
<code class="ret">HeadersInterface</code>
<code class="sig"><span class="sf">setRaw</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Sets a raw header to be sent at the end of the request</span>
</a>
<a class="api-item" href="#httpresponseheaders-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the current headers as an array</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$headers</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isSent</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 10</div>

<h4 id="httpresponseheaders-get"><code>get()</code></h4>

```php
public function get( string $name ): string|bool|null;
```

Gets a header value from the internal bag

<h4 id="httpresponseheaders-getiterator"><code>getIterator()</code></h4>

```php
public function getIterator(): Traversable;
```

<h4 id="httpresponseheaders-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Checks if a header exists

<h4 id="httpresponseheaders-issent"><code>isSent()</code></h4>

```php
public function isSent(): bool;
```

Returns if the headers have already been sent

<h4 id="httpresponseheaders-remove"><code>remove()</code></h4>

```php
public function remove( string $header ): HeadersInterface;
```

Removes a header by its name

<h4 id="httpresponseheaders-reset"><code>reset()</code></h4>

```php
public function reset(): void;
```

Reset set headers

<h4 id="httpresponseheaders-send"><code>send()</code></h4>

```php
public function send(): bool;
```

Sends the headers to the client

<h4 id="httpresponseheaders-set"><code>set()</code></h4>

```php
public function set(
string $name,
string $value
): HeadersInterface;
```

Sets a header to be sent at the end of the request

<h4 id="httpresponseheaders-setraw"><code>setRaw()</code></h4>

```php
public function setRaw( string $header ): HeadersInterface;
```

Sets a raw header to be sent at the end of the request

<h4 id="httpresponseheaders-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the current headers as an array

## Http\Response\HeadersInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Response/HeadersInterface.zep">Source on GitHub</a>

Interface for Phalcon\Http\Response\Headers compatible bags

<div class="api-tree">

- **`Phalcon\Http\Response\HeadersInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseheadersinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">string|bool|null</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Gets a header value from the internal bag</span>
</a>
<a class="api-item" href="#httpresponseheadersinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a header exists</span>
</a>
<a class="api-item" href="#httpresponseheadersinterface-reset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Reset set headers</span>
</a>
<a class="api-item" href="#httpresponseheadersinterface-send">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">send</span>()</code>
<span class="desc">Sends the headers to the client</span>
</a>
<a class="api-item" href="#httpresponseheadersinterface-set">
<code class="vis vis-public">public</code>
<code class="ret">HeadersInterface</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a header to be sent at the end of the request</span>
</a>
<a class="api-item" href="#httpresponseheadersinterface-setraw">
<code class="vis vis-public">public</code>
<code class="ret">HeadersInterface</code>
<code class="sig"><span class="sf">setRaw</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Sets a raw header to be sent at the end of the request</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

<h4 id="httpresponseheadersinterface-get"><code>get()</code></h4>

```php
public function get( string $name ): string|bool|null;
```

Gets a header value from the internal bag

<h4 id="httpresponseheadersinterface-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Checks if a header exists

<h4 id="httpresponseheadersinterface-reset"><code>reset()</code></h4>

```php
public function reset(): void;
```

Reset set headers

<h4 id="httpresponseheadersinterface-send"><code>send()</code></h4>

```php
public function send(): bool;
```

Sends the headers to the client

<h4 id="httpresponseheadersinterface-set"><code>set()</code></h4>

```php
public function set(
string $name,
string $value
): HeadersInterface;
```

Sets a header to be sent at the end of the request

<h4 id="httpresponseheadersinterface-setraw"><code>setRaw()</code></h4>

```php
public function setRaw( string $header ): HeadersInterface;
```

Sets a raw header to be sent at the end of the request

## Http\Traits\EncryptionAwareTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Http/Traits/EncryptionAwareTrait.zep">Source on GitHub</a>

Provides the implicit encryption flag and its accessor shared by the HTTP
cookie classes.

<div class="api-tree">

- **`Phalcon\Http\Traits\EncryptionAwareTrait`**

</div>

__Used by__ [`Phalcon\Http\Cookie`](#httpcookie) · [`Phalcon\Http\Response\Cookies`](#httpresponsecookies)

### Method Summary

<div class="api-list">
<a class="api-item" href="#httptraitsencryptionawaretrait-isusingencryption">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isUsingEncryption</span>()</code>
<span class="desc">Check if implicit encryption is being used</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$useEncryption</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="httptraitsencryptionawaretrait-isusingencryption"><code>isUsingEncryption()</code></h4>

```php
public function isUsingEncryption(): bool;
```

Check if implicit encryption is being used

Source: https://docs.phalcon.io/5.18/api/phalcon_http/index.mdx
