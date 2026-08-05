---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Http\Cookie

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Cookie.php){ .src-btn }

Provide OO wrappers to manage a HTTP cookie.

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Http\Cookie`** - implements [`Phalcon\Http\Cookie\CookieInterface`](#httpcookiecookieinterface), `\Stringable`

</div>

__Uses__ `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Encryption\Crypt\CryptInterface` · `Phalcon\Filter\FilterInterface` · `Phalcon\Http\Cookie\CookieInterface` · `Phalcon\Http\Cookie\Exception` · `Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort` · `Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired` · `Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable` · `Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable` · `Phalcon\Http\Response\Exception` · `Phalcon\Http\Traits\EncryptionAwareTrait` · `Phalcon\Session\ManagerInterface` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `Stringable`
{ .api-uses }

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
<code class="ret">void</code>
<code class="sig"><span class="sf">delete</span>()</code>
<span class="desc">Deletes the cookie by setting an expiration time in the past</span>
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
<span class="desc">Sets if the cookie must only be sent when the connection is secure</span>
</a>
<a class="api-item" href="#httpcookie-setsignkey">
<code class="vis vis-public">public</code>
<code class="ret">CookieInterface</code>
<code class="sig"><span class="sf">setSignKey</span>( <span class="st">string|null</span> <span class="sv">$signKey</span><span class="sm"> = null</span> )</code>
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

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">COOKIE_PREFIX</span><span class="sm"> = &quot;_PHCOOKIE_&quot;</span></code>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$domain</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$expire</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">FilterInterface|null</code>
<code class="sig"><span class="sv">$filter</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$httpOnly</span><span class="sm"> = false</span></code>
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
<code class="sig"><span class="sv">$path</span><span class="sm"> = &quot;/&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$secure</span><span class="sm"> = false</span></code>
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

#### `__construct()` { #httpcookie-__construct }

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

#### `__toString()` { #httpcookie-__tostring }

```php
public function __toString(): string;
```

Magic __toString method converts the cookie's value to string

#### `delete()` { #httpcookie-delete }

```php
public function delete(): void;
```

Deletes the cookie by setting an expiration time in the past

#### `getDomain()` { #httpcookie-getdomain }

```php
public function getDomain(): string;
```

Returns the domain that the cookie is available to

#### `getExpiration()` { #httpcookie-getexpiration }

```php
public function getExpiration(): int;
```

Returns the current expiration time

#### `getHttpOnly()` { #httpcookie-gethttponly }

```php
public function getHttpOnly(): bool;
```

Returns if the cookie is accessible only through the HTTP protocol

#### `getName()` { #httpcookie-getname }

```php
public function getName(): string;
```

Returns the current cookie's name

#### `getOptions()` { #httpcookie-getoptions }

```php
public function getOptions(): array;
```

Returns the current cookie's options

#### `getPath()` { #httpcookie-getpath }

```php
public function getPath(): string;
```

Returns the current cookie's path

#### `getSecure()` { #httpcookie-getsecure }

```php
public function getSecure(): bool;
```

Returns whether the cookie must only be sent when the connection is
secure (HTTPS)

#### `getValue()` { #httpcookie-getvalue }

```php
public function getValue(
    mixed $filters = null,
    mixed $defaultValue = null
): mixed;
```

Returns the cookie's value.

#### `restore()` { #httpcookie-restore }

```php
public function restore(): CookieInterface;
```

Reads the cookie-related info from the SESSION to restore the cookie as
it was set.

This method is automatically called internally so normally you don't
need to call it.

#### `send()` { #httpcookie-send }

```php
public function send(): CookieInterface;
```

Sends the cookie to the HTTP client.

Stores the cookie definition in session.

#### `setDomain()` { #httpcookie-setdomain }

```php
public function setDomain( string $domain ): CookieInterface;
```

Sets the domain that the cookie is available to

#### `setExpiration()` { #httpcookie-setexpiration }

```php
public function setExpiration( int $expire ): CookieInterface;
```

Sets the cookie's expiration time

#### `setHttpOnly()` { #httpcookie-sethttponly }

```php
public function setHttpOnly( bool $httpOnly ): CookieInterface;
```

Sets if the cookie is accessible only through the HTTP protocol

#### `setOptions()` { #httpcookie-setoptions }

```php
public function setOptions( array $options ): CookieInterface;
```

Sets the cookie's options

#### `setPath()` { #httpcookie-setpath }

```php
public function setPath( string $path ): CookieInterface;
```

Sets the cookie's path

#### `setSecure()` { #httpcookie-setsecure }

```php
public function setSecure( bool $secure ): CookieInterface;
```

Sets if the cookie must only be sent when the connection is secure
(HTTPS)

#### `setSignKey()` { #httpcookie-setsignkey }

```php
public function setSignKey( string|null $signKey = null ): CookieInterface;
```

Sets the cookie's sign key.

The `$signKey' MUST be at least 32 characters long
and generated using a cryptographically secure pseudo random generator.

Use NULL to disable cookie signing.

#### `setValue()` { #httpcookie-setvalue }

```php
public function setValue( mixed $value ): CookieInterface;
```

Sets the cookie's value

#### `useEncryption()` { #httpcookie-useencryption }

```php
public function useEncryption( bool $useEncryption ): CookieInterface;
```

Sets if the cookie must be encrypted/decrypted automatically

<div class="api-group">Protected · 1</div>

#### `assertSignKeyIsLongEnough()` { #httpcookie-assertsignkeyislongenough }

```php
protected function assertSignKeyIsLongEnough( string $signKey ): void;
```

Assert the cookie's key is enough long.


## Http\Cookie\CookieInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Cookie/CookieInterface.php){ .src-btn }

Interface for Phalcon\Http\Cookie

<div class="api-tree" markdown>

- **`Phalcon\Http\Cookie\CookieInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookiecookieinterface-delete">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
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

#### `delete()` { #httpcookiecookieinterface-delete }

```php
public function delete(): void;
```

Deletes the cookie

#### `getDomain()` { #httpcookiecookieinterface-getdomain }

```php
public function getDomain(): string;
```

Returns the domain that the cookie is available to

#### `getExpiration()` { #httpcookiecookieinterface-getexpiration }

```php
public function getExpiration(): int;
```

Returns the current expiration time

#### `getHttpOnly()` { #httpcookiecookieinterface-gethttponly }

```php
public function getHttpOnly(): bool;
```

Returns if the cookie is accessible only through the HTTP protocol

#### `getName()` { #httpcookiecookieinterface-getname }

```php
public function getName(): string;
```

Returns the current cookie's name

#### `getOptions()` { #httpcookiecookieinterface-getoptions }

```php
public function getOptions(): array;
```

Returns the current cookie's options

#### `getPath()` { #httpcookiecookieinterface-getpath }

```php
public function getPath(): string;
```

Returns the current cookie's path

#### `getSecure()` { #httpcookiecookieinterface-getsecure }

```php
public function getSecure(): bool;
```

Returns whether the cookie must only be sent when the connection is
secure (HTTPS)

#### `getValue()` { #httpcookiecookieinterface-getvalue }

```php
public function getValue(
    mixed $filters = null,
    mixed $defaultValue = null
): mixed;
```

Returns the cookie's value.

#### `isUsingEncryption()` { #httpcookiecookieinterface-isusingencryption }

```php
public function isUsingEncryption(): bool;
```

Check if the cookie is using implicit encryption

#### `send()` { #httpcookiecookieinterface-send }

```php
public function send(): CookieInterface;
```

Sends the cookie to the HTTP client

#### `setDomain()` { #httpcookiecookieinterface-setdomain }

```php
public function setDomain( string $domain ): CookieInterface;
```

Sets the domain that the cookie is available to

#### `setExpiration()` { #httpcookiecookieinterface-setexpiration }

```php
public function setExpiration( int $expire ): CookieInterface;
```

Sets the cookie's expiration time

#### `setHttpOnly()` { #httpcookiecookieinterface-sethttponly }

```php
public function setHttpOnly( bool $httpOnly ): CookieInterface;
```

Sets if the cookie is accessible only through the HTTP protocol

#### `setOptions()` { #httpcookiecookieinterface-setoptions }

```php
public function setOptions( array $options ): CookieInterface;
```

Sets the cookie's options

#### `setPath()` { #httpcookiecookieinterface-setpath }

```php
public function setPath( string $path ): CookieInterface;
```

Sets the cookie's expiration time

#### `setSecure()` { #httpcookiecookieinterface-setsecure }

```php
public function setSecure( bool $secure ): CookieInterface;
```

Sets if the cookie must only be sent when the connection is secure
(HTTPS)

#### `setValue()` { #httpcookiecookieinterface-setvalue }

```php
public function setValue( mixed $value ): CookieInterface;
```

Sets the cookie's value

#### `useEncryption()` { #httpcookiecookieinterface-useencryption }

```php
public function useEncryption( bool $useEncryption ): CookieInterface;
```

Sets if the cookie must be encrypted/decrypted automatically


## Http\Cookie\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Cookie/Exception.php){ .src-btn }

Phalcon\Http\Cookie\Exception

Exceptions thrown in Phalcon\Http\Cookie will use this class.

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Http\Cookie\Exception`**
        - [`Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort`](#httpcookieexceptionscookiekeytooshort)
        - [`Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired`](#httpcookieexceptionscryptinterfacerequired)
        - [`Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable`](#httpcookieexceptionscryptserviceunavailable)
        - [`Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable`](#httpcookieexceptionsfilterserviceunavailable)

</div>


## Http\Cookie\Exceptions\CookieKeyTooShort

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Cookie/Exceptions/CookieKeyTooShort.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
        - **`Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort`**

</div>

__Uses__ `Phalcon\Http\Cookie\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookieexceptionscookiekeytooshort-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$length</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpcookieexceptionscookiekeytooshort-__construct }

```php
public function __construct( int $length );
```


## Http\Cookie\Exceptions\CryptInterfaceRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Cookie/Exceptions/CryptInterfaceRequired.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
        - **`Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired`**

</div>

__Uses__ `Phalcon\Http\Cookie\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookieexceptionscryptinterfacerequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpcookieexceptionscryptinterfacerequired-__construct }

```php
public function __construct();
```


## Http\Cookie\Exceptions\CryptServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Cookie/Exceptions/CryptServiceUnavailable.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
        - **`Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable`**

</div>

__Uses__ `Phalcon\Http\Cookie\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookieexceptionscryptserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpcookieexceptionscryptserviceunavailable-__construct }

```php
public function __construct();
```


## Http\Cookie\Exceptions\FilterServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Cookie/Exceptions/FilterServiceUnavailable.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
        - **`Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable`**

</div>

__Uses__ `Phalcon\Http\Cookie\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpcookieexceptionsfilterserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpcookieexceptionsfilterserviceunavailable-__construct }

```php
public function __construct();
```


## Http\Enums\HttpStatusEnum

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Enums/HttpStatusEnum.php){ .src-btn }

Status Phrases trait

<div class="api-tree" markdown>

- **`Phalcon\Http\Enums\HttpStatusEnum`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpenumshttpstatusenum-text">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">text</span>()</code>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Accepted</span><span class="sm"> = 202</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">AlreadyReported</span><span class="sm"> = 208</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">BadGateway</span><span class="sm"> = 502</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">BadRequest</span><span class="sm"> = 400</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Conflict</span><span class="sm"> = 409</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Continue</span><span class="sm"> = 100</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Created</span><span class="sm"> = 201</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">EarlyHints</span><span class="sm"> = 103</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ExpectationFailed</span><span class="sm"> = 417</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">FailedDependency</span><span class="sm"> = 424</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Forbidden</span><span class="sm"> = 403</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Found</span><span class="sm"> = 302</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">GatewayTimeout</span><span class="sm"> = 504</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Gone</span><span class="sm"> = 410</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ImATeapot</span><span class="sm"> = 418</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ImUsed</span><span class="sm"> = 226</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">InsufficientStorage</span><span class="sm"> = 507</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">InternalServerError</span><span class="sm"> = 500</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">LengthRequired</span><span class="sm"> = 411</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Locked</span><span class="sm"> = 423</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">LoopDetected</span><span class="sm"> = 508</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">MethodNotAllowed</span><span class="sm"> = 405</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">MisdirectedRequest</span><span class="sm"> = 421</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">MovedPermanently</span><span class="sm"> = 301</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">MultiStatus</span><span class="sm"> = 207</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">MultipleChoices</span><span class="sm"> = 300</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NetworkAuthenticationRequired</span><span class="sm"> = 511</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NoContent</span><span class="sm"> = 204</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NonAuthoritativeInformation</span><span class="sm"> = 203</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NotAcceptable</span><span class="sm"> = 406</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NotExtended</span><span class="sm"> = 510</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NotFound</span><span class="sm"> = 404</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NotImplemented</span><span class="sm"> = 501</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">NotModified</span><span class="sm"> = 304</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">OK</span><span class="sm"> = 200</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">PartialContent</span><span class="sm"> = 206</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">PayloadTooLarge</span><span class="sm"> = 413</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">PaymentRequired</span><span class="sm"> = 402</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">PermanentRedirect</span><span class="sm"> = 308</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">PreconditionFailed</span><span class="sm"> = 412</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">PreconditionRequired</span><span class="sm"> = 428</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Processing</span><span class="sm"> = 102</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ProxyAuthenticationRequired</span><span class="sm"> = 407</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">RangeNotSatisfiable</span><span class="sm"> = 416</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">RequestHeaderFieldsTooLarge</span><span class="sm"> = 431</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">RequestTimeout</span><span class="sm"> = 408</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Reserved</span><span class="sm"> = 306</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ResetContent</span><span class="sm"> = 205</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">SeeOther</span><span class="sm"> = 303</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">ServiceUnavailable</span><span class="sm"> = 503</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">SwitchingProtocols</span><span class="sm"> = 101</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">TemporaryRedirect</span><span class="sm"> = 307</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">TooEarly</span><span class="sm"> = 425</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">TooManyRequests</span><span class="sm"> = 429</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">Unauthorized</span><span class="sm"> = 401</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">UnavailableForLegalReasons</span><span class="sm"> = 451</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">UnprocessableEntity</span><span class="sm"> = 422</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">UnsupportedMediaType</span><span class="sm"> = 415</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">UpgradeRequired</span><span class="sm"> = 426</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">UriTooLong</span><span class="sm"> = 414</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">UseProxy</span><span class="sm"> = 305</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VariantAlsoNegotiates</span><span class="sm"> = 506</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VersionNotSupported</span><span class="sm"> = 505</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `text()` { #httpenumshttpstatusenum-text }

```php
public function text(): string;
```


## Http\Message\AbstractCommon

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/AbstractCommon.php){ .src-btn }

Common methods

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\AbstractCommon`**
    - [`Phalcon\Http\Message\AbstractMessage`](#httpmessageabstractmessage)
    - [`Phalcon\Http\Message\Uri`](#httpmessageuri)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageabstractcommon-checkstringparameter">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">checkStringParameter</span>( <span class="st">mixed</span> <span class="sv">$element</span> )</code>
<span class="desc">Checks the element passed if it is a string</span>
</a>
<a class="api-item" href="#httpmessageabstractcommon-cloneinstance">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">cloneInstance</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$property</span></span>)</code>
<span class="desc">Returns a new instance having set the parameter</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 2</div>

#### `checkStringParameter()` { #httpmessageabstractcommon-checkstringparameter }

```php
final protected function checkStringParameter( mixed $element ): void;
```

Checks the element passed if it is a string

#### `cloneInstance()` { #httpmessageabstractcommon-cloneinstance }

```php
final protected function cloneInstance(
    mixed $element,
    string $property
);
```

Returns a new instance having set the parameter


## Http\Message\AbstractMessage

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/AbstractMessage.php){ .src-btn }

Message methods

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\AbstractCommon`](#httpmessageabstractcommon)
    - **`Phalcon\Http\Message\AbstractMessage`** - implements [`Phalcon\Http\Message\Interfaces\MessageInterface`](#httpmessageinterfacesmessageinterface), [`Phalcon\Http\Message\Interfaces\ResponseStatusCodeInterface`](#httpmessageinterfacesresponsestatuscodeinterface)
        - [`Phalcon\Http\Message\AbstractRequest`](#httpmessageabstractrequest)
        - [`Phalcon\Http\Message\Response`](#httpmessageresponse)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Interfaces\MessageInterface` · `Phalcon\Http\Message\Interfaces\ResponseStatusCodeInterface` · `Phalcon\Http\Message\Interfaces\StreamInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageabstractmessage-getbody">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">getBody</span>()</code>
<span class="desc">Return the body of the stream</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-getheader">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Retrieves a message header value by the given case-insensitive name.</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-getheaderline">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHeaderLine</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Retrieves a comma-separated string of the values for a single header.</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Retrieves all message header values.</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-getprotocolversion">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getProtocolVersion</span>()</code>
<span class="desc">Returns the protocol version</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-hasheader">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a header exists by the given case-insensitive name.</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-withaddedheader">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withAddedHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Return an instance with the specified header appended with the given</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-withbody">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withBody</span>( <span class="st">StreamInterface</span> <span class="sv">$body</span> )</code>
<span class="desc">Return an instance with the specified message body.</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-withheader">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Return an instance with the provided value replacing the specified</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-withprotocolversion">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withProtocolVersion</span>( <span class="st">string</span> <span class="sv">$version</span> )</code>
<span class="desc">Return an instance with the specified HTTP protocol version.</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-withoutheader">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withoutHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return an instance without the specified header.</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-processbody">
<code class="vis vis-protected">protected</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">processBody</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$body</span><span class="sm"> = &quot;php://memory&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span><span class="sm"> = &quot;r+b&quot;</span></span>)</code>
<span class="desc">Set a valid stream</span>
</a>
<a class="api-item" href="#httpmessageabstractmessage-processprotocol">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">processProtocol</span>( <span class="st">string</span> <span class="sv">$protocol</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Checks the protocol</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sv">$body</span></code>
<span class="desc">Gets the body of the message.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Headers</code>
<code class="sig"><span class="sv">$headers</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$protocolVersion</span><span class="sm"> = &quot;1.1&quot;</span></code>
<span class="desc">Retrieves the HTTP protocol version as a string.

The string MUST contain only the HTTP version number (e.g., &#039;1.1&#039;,
&#039;1.0&#039;).</span>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

#### `getBody()` { #httpmessageabstractmessage-getbody }

```php
public function getBody(): StreamInterface;
```

Return the body of the stream

#### `getHeader()` { #httpmessageabstractmessage-getheader }

```php
public function getHeader( string $name ): array;
```

Retrieves a message header value by the given case-insensitive name.

This method returns an array of all the header values of the given
case-insensitive header name.

If the header does not appear in the message, this method MUST return an
empty array.

#### `getHeaderLine()` { #httpmessageabstractmessage-getheaderline }

```php
public function getHeaderLine( string $name ): string;
```

Retrieves a comma-separated string of the values for a single header.

This method returns all the header values of the given
case-insensitive header name as a string concatenated together using
a comma.

NOTE: Not all header values may be appropriately represented using
comma concatenation. For such headers, use getHeader() instead
and supply your own delimiter when concatenating.

If the header does not appear in the message, this method MUST return
an empty string.

#### `getHeaders()` { #httpmessageabstractmessage-getheaders }

```php
public function getHeaders(): array;
```

Retrieves all message header values.

The keys represent the header name as it will be sent over the wire, and
each value is an array of strings associated with the header.

    // Represent the headers as a string
    foreach ($message->getHeaders() as $name => $values) {
        echo $name . ': ' . implode(', ', $values);
    }

    // Emit headers iteratively:
    foreach ($message->getHeaders() as $name => $values) {
        foreach ($values as $value) {
            header(sprintf('%s: %s', $name, $value), false);
        }
    }

While header names are not case-sensitive, getHeaders() will preserve the
exact case in which headers were originally specified.

#### `getProtocolVersion()` { #httpmessageabstractmessage-getprotocolversion }

```php
public function getProtocolVersion(): string;
```

Returns the protocol version

#### `hasHeader()` { #httpmessageabstractmessage-hasheader }

```php
public function hasHeader( string $name ): bool;
```

Checks if a header exists by the given case-insensitive name.

#### `withAddedHeader()` { #httpmessageabstractmessage-withaddedheader }

```php
public function withAddedHeader(
    string $name,
    mixed $value
): MessageInterface;
```

Return an instance with the specified header appended with the given
value.

Existing values for the specified header will be maintained. The new
value(s) will be appended to the existing list. If the header did not
exist previously, it will be added.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new header and/or value.

#### `withBody()` { #httpmessageabstractmessage-withbody }

```php
public function withBody( StreamInterface $body ): MessageInterface;
```

Return an instance with the specified message body.

The body MUST be a StreamInterface object.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return a new instance that has the
new body stream.

#### `withHeader()` { #httpmessageabstractmessage-withheader }

```php
public function withHeader(
    string $name,
    mixed $value
): MessageInterface;
```

Return an instance with the provided value replacing the specified
header.

While header names are case-insensitive, the casing of the header will
be preserved by this function, and returned from getHeaders().

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new and/or updated header and value.

#### `withProtocolVersion()` { #httpmessageabstractmessage-withprotocolversion }

```php
public function withProtocolVersion( string $version ): MessageInterface;
```

Return an instance with the specified HTTP protocol version.

The version string MUST contain only the HTTP version number (e.g.,
'1.1', '1.0').

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new protocol version.

#### `withoutHeader()` { #httpmessageabstractmessage-withoutheader }

```php
public function withoutHeader( string $name ): MessageInterface;
```

Return an instance without the specified header.

Header resolution MUST be done without case-sensitivity.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that removes
the named header.

<div class="api-group">Protected · 2</div>

#### `processBody()` { #httpmessageabstractmessage-processbody }

```php
final protected function processBody(
    mixed $body = "php://memory",
    string $mode = "r+b"
): StreamInterface;
```

Set a valid stream

#### `processProtocol()` { #httpmessageabstractmessage-processprotocol }

```php
final protected function processProtocol( string $protocol = "" ): string;
```

Checks the protocol


## Http\Message\AbstractRequest

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/AbstractRequest.php){ .src-btn }

Request methods

@property string       $method
@property string|null  $requestTarget
@property UriInterface $uri

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\AbstractCommon`](#httpmessageabstractcommon)
    - [`Phalcon\Http\Message\AbstractMessage`](#httpmessageabstractmessage)
        - **`Phalcon\Http\Message\AbstractRequest`** - implements [`Phalcon\Http\Message\Interfaces\RequestInterface`](#httpmessageinterfacesrequestinterface), [`Phalcon\Http\Message\Interfaces\RequestMethodInterface`](#httpmessageinterfacesrequestmethodinterface)
            - [`Phalcon\Http\Message\Request`](#httpmessagerequest)
            - [`Phalcon\Http\Message\ServerRequest`](#httpmessageserverrequest)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Interfaces\RequestInterface` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface` · `Phalcon\Http\Message\Interfaces\UriInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageabstractrequest-getmethod">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMethod</span>()</code>
</a>
<a class="api-item" href="#httpmessageabstractrequest-getrequesttarget">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRequestTarget</span>()</code>
<span class="desc">Retrieves the message&#039;s request target.</span>
</a>
<a class="api-item" href="#httpmessageabstractrequest-geturi">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">getUri</span>()</code>
<span class="desc">Returns the Uri object</span>
</a>
<a class="api-item" href="#httpmessageabstractrequest-withmethod">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">withMethod</span>( <span class="st">string</span> <span class="sv">$method</span> )</code>
<span class="desc">Return an instance with the provided HTTP method.</span>
</a>
<a class="api-item" href="#httpmessageabstractrequest-withrequesttarget">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">withRequestTarget</span>( <span class="st">string|null</span> <span class="sv">$requestTarget</span> )</code>
<span class="desc">Return an instance with the specific request-target.</span>
</a>
<a class="api-item" href="#httpmessageabstractrequest-withuri">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">withUri</span>(<span class="prm"><span class="st">UriInterface</span> <span class="sv">$uri</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$preserveHost</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Returns an instance with the provided URI.</span>
</a>
<a class="api-item" href="#httpmessageabstractrequest-processmethod">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">processMethod</span>( <span class="st">string</span> <span class="sv">$method</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Check the method</span>
</a>
<a class="api-item" href="#httpmessageabstractrequest-processuri">
<code class="vis vis-protected">protected</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">processUri</span>( <span class="st">mixed</span> <span class="sv">$uri</span> )</code>
<span class="desc">Sets a valid Uri</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = self::METHOD_GET</span></code>
<span class="desc">Retrieves the HTTP method of the request.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$requestTarget</span><span class="sm"> = null</span></code>
<span class="desc">The request-target, if it has been provided or calculated.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sv">$uri</span></code>
<span class="desc">Retrieves the URI instance.

This method MUST return a UriInterface instance.

@see https://tools.ietf.org/html/rfc3986#section-4.3</span>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getMethod()` { #httpmessageabstractrequest-getmethod }

```php
public function getMethod(): string;
```

#### `getRequestTarget()` { #httpmessageabstractrequest-getrequesttarget }

```php
public function getRequestTarget(): string;
```

Retrieves the message's request target.

Retrieves the message's request-target either as it will appear (for
clients), as it appeared at request (for servers), or as it was
specified for the instance (see withRequestTarget()).

In most cases, this will be the origin-form of the composed URI, unless a
value was provided to the concrete implementation (see
withRequestTarget() below).

#### `getUri()` { #httpmessageabstractrequest-geturi }

```php
public function getUri(): UriInterface;
```

Returns the Uri object

#### `withMethod()` { #httpmessageabstractrequest-withmethod }

```php
public function withMethod( string $method ): RequestInterface;
```

Return an instance with the provided HTTP method.

While HTTP method names are typically all uppercase characters, HTTP
method names are case-sensitive and thus implementations SHOULD NOT
modify the given string.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
changed request method.

#### `withRequestTarget()` { #httpmessageabstractrequest-withrequesttarget }

```php
public function withRequestTarget( string|null $requestTarget ): RequestInterface;
```

Return an instance with the specific request-target.

If the request needs a non-origin-form request-target - e.g., for
specifying an absolute-form, authority-form, or asterisk-form -
this method may be used to create an instance with the specified
request-target, verbatim.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
changed request target.

@see https://tools.ietf.org/html/rfc7230#section-5.3 (for the various
    request-target forms allowed in request messages)

#### `withUri()` { #httpmessageabstractrequest-withuri }

```php
public function withUri(
    UriInterface $uri,
    bool $preserveHost = false
): RequestInterface;
```

Returns an instance with the provided URI.

This method MUST update the Host header of the returned request by
default if the URI contains a host component. If the URI does not
contain a host component, any pre-existing Host header MUST be carried
over to the returned request.

You can opt-in to preserving the original state of the Host header by
setting `$preserveHost` to `true`. When `$preserveHost` is set to
`true`, this method interacts with the Host header in the following
ways:

- If the Host header is missing or empty, and the new URI contains
  a host component, this method MUST update the Host header in the
  returned request.
- If the Host header is missing or empty, and the new URI does not
contain a host component, this method MUST NOT update the Host header in
the returned request.
- If a Host header is present and non-empty, this method MUST NOT update
  the Host header in the returned request.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new UriInterface instance.

@see https://tools.ietf.org/html/rfc3986#section-4.3

<div class="api-group">Protected · 2</div>

#### `processMethod()` { #httpmessageabstractrequest-processmethod }

```php
final protected function processMethod( string $method = "" ): string;
```

Check the method

#### `processUri()` { #httpmessageabstractrequest-processuri }

```php
final protected function processUri( mixed $uri ): UriInterface;
```

Sets a valid Uri


## Http\Message\Exception\InvalidArgumentException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Exception/InvalidArgumentException.php){ .src-btn }

<div class="api-tree" markdown>

- `\InvalidArgumentException`
    - **`Phalcon\Http\Message\Exception\InvalidArgumentException`** - implements `\Throwable`

</div>

__Uses__ `Throwable`
{ .api-uses }


## Http\Message\Exception\RuntimeException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Exception/RuntimeException.php){ .src-btn }

<div class="api-tree" markdown>

- `\RuntimeException`
    - **`Phalcon\Http\Message\Exception\RuntimeException`** - implements `\Throwable`

</div>

__Uses__ `Throwable`
{ .api-uses }


## Http\Message\Factories\RequestFactory

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Factories/RequestFactory.php){ .src-btn }

Factory for Request objects

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Factories\RequestFactory`** - implements [`Phalcon\Http\Message\Interfaces\RequestFactoryInterface`](#httpmessageinterfacesrequestfactoryinterface)

</div>

__Uses__ `Phalcon\Http\Message\Interfaces\RequestFactoryInterface` · `Phalcon\Http\Message\Interfaces\RequestInterface` · `Phalcon\Http\Message\Interfaces\UriInterface` · `Phalcon\Http\Message\Request`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagefactoriesrequestfactory-createrequest">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">createRequest</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$uri</span></span>)</code>
<span class="desc">Create a new request.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `createRequest()` { #httpmessagefactoriesrequestfactory-createrequest }

```php
public function createRequest(
    string $method,
    mixed $uri
): RequestInterface;
```

Create a new request.


## Http\Message\Factories\ResponseFactory

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Factories/ResponseFactory.php){ .src-btn }

Factory for Response objects

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Factories\ResponseFactory`** - implements [`Phalcon\Http\Message\Interfaces\ResponseFactoryInterface`](#httpmessageinterfacesresponsefactoryinterface)

</div>

__Uses__ `Phalcon\Http\Message\Interfaces\ResponseFactoryInterface` · `Phalcon\Http\Message\Interfaces\ResponseInterface` · `Phalcon\Http\Message\Response`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagefactoriesresponsefactory-createresponse">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">createResponse</span>(<span class="prm"><span class="st">int</span> <span class="sv">$code</span><span class="sm"> = 200</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$reasonPhrase</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Create a new response.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `createResponse()` { #httpmessagefactoriesresponsefactory-createresponse }

```php
public function createResponse(
    int $code = 200,
    string $reasonPhrase = ""
): ResponseInterface;
```

Create a new response.


## Http\Message\Factories\ServerRequestFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Factories/ServerRequestFactory.php){ .src-btn }

Factory for ServerRequest objects

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Factories\ServerRequestFactory`** - implements [`Phalcon\Http\Message\Interfaces\ServerRequestFactoryInterface`](#httpmessageinterfacesserverrequestfactoryinterface), [`Phalcon\Http\Message\Interfaces\RequestMethodInterface`](#httpmessageinterfacesrequestmethodinterface)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface` · `Phalcon\Http\Message\Interfaces\ServerRequestFactoryInterface` · `Phalcon\Http\Message\Interfaces\ServerRequestInterface` · `Phalcon\Http\Message\Interfaces\UploadedFileInterface` · `Phalcon\Http\Message\Interfaces\UriInterface` · `Phalcon\Http\Message\ServerRequest` · `Phalcon\Http\Message\UploadedFile` · `Phalcon\Http\Message\Uri` · `Phalcon\Support\Collection` · `Phalcon\Support\Collection\CollectionInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagefactoriesserverrequestfactory-createserverrequest">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequestInterface</code>
<code class="sig"><span class="sf">createServerRequest</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$uri</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$serverParams</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Create a new server request.</span>
</a>
<a class="api-item" href="#httpmessagefactoriesserverrequestfactory-load">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequest</code>
<code class="sig"><span class="sf">load</span>(<span class="prm"><span class="st">array|null</span> <span class="sv">$server</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$get</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$post</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$cookies</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array|null</span> <span class="sv">$files</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Create a request from the supplied superglobal values.</span>
</a>
<a class="api-item" href="#httpmessagefactoriesserverrequestfactory-getheaders">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Returns the apache_request_headers if it exists</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `createServerRequest()` { #httpmessagefactoriesserverrequestfactory-createserverrequest }

```php
public function createServerRequest(
    string $method,
    mixed $uri,
    array $serverParams = []
): ServerRequestInterface;
```

Create a new server request.

Note that server-params are taken precisely as given - no
parsing/processing of the given values is performed, and, in particular,
no attempt is made to determine the HTTP method or URI, which must be
provided explicitly.

#### `load()` { #httpmessagefactoriesserverrequestfactory-load }

```php
public function load(
    array|null $server = null,
    array|null $get = null,
    array|null $post = null,
    array|null $cookies = null,
    array|null $files = null
): ServerRequest;
```

Create a request from the supplied superglobal values.

If any argument is not supplied, the corresponding superglobal value will
be used.

<div class="api-group">Protected · 1</div>

#### `getHeaders()` { #httpmessagefactoriesserverrequestfactory-getheaders }

```php
protected function getHeaders();
```

Returns the apache_request_headers if it exists


## Http\Message\Factories\StreamFactory

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Factories/StreamFactory.php){ .src-btn }

Factory for Stream objects

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Factories\StreamFactory`** - implements [`Phalcon\Http\Message\Interfaces\StreamFactoryInterface`](#httpmessageinterfacesstreamfactoryinterface)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Interfaces\StreamFactoryInterface` · `Phalcon\Http\Message\Interfaces\StreamInterface` · `Phalcon\Http\Message\Stream` · `Phalcon\Traits\Php\FileTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagefactoriesstreamfactory-createstream">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">createStream</span>( <span class="st">string</span> <span class="sv">$content</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Create a new stream from a string.</span>
</a>
<a class="api-item" href="#httpmessagefactoriesstreamfactory-createstreamfromfile">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">createStreamFromFile</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span><span class="sm"> = &quot;r+b&quot;</span></span>)</code>
<span class="desc">Create a stream from an existing file.</span>
</a>
<a class="api-item" href="#httpmessagefactoriesstreamfactory-createstreamfromresource">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">createStreamFromResource</span>( <span class="st">mixed</span> <span class="sv">$phpResource</span> )</code>
<span class="desc">Create a new stream from an existing resource.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `createStream()` { #httpmessagefactoriesstreamfactory-createstream }

```php
public function createStream( string $content = "" ): StreamInterface;
```

Create a new stream from a string.

The stream SHOULD be created with a temporary resource.

#### `createStreamFromFile()` { #httpmessagefactoriesstreamfactory-createstreamfromfile }

```php
public function createStreamFromFile(
    string $filename,
    string $mode = "r+b"
): StreamInterface;
```

Create a stream from an existing file.

The file MUST be opened using the given mode, which may be any mode
supported by the `fopen` function.

The `$filename` MAY be any string supported by `fopen()`.

#### `createStreamFromResource()` { #httpmessagefactoriesstreamfactory-createstreamfromresource }

```php
public function createStreamFromResource( mixed $phpResource ): StreamInterface;
```

Create a new stream from an existing resource.

The stream MUST be readable and may be writable.


## Http\Message\Factories\UploadedFileFactory

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Factories/UploadedFileFactory.php){ .src-btn }

Factory for UploadedFile objects

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Factories\UploadedFileFactory`** - implements [`Phalcon\Http\Message\Interfaces\UploadedFileFactoryInterface`](#httpmessageinterfacesuploadedfilefactoryinterface)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Interfaces\StreamInterface` · `Phalcon\Http\Message\Interfaces\UploadedFileFactoryInterface` · `Phalcon\Http\Message\Interfaces\UploadedFileInterface` · `Phalcon\Http\Message\UploadedFile`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagefactoriesuploadedfilefactory-createuploadedfile">
<code class="vis vis-public">public</code>
<code class="ret">UploadedFileInterface</code>
<code class="sig"><span class="sf">createUploadedFile</span>(<span class="prm"><span class="st">StreamInterface</span> <span class="sv">$stream</span>,</span><span class="prm"><span class="st">int|null</span> <span class="sv">$size</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$error</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$clientFilename</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$clientMediaType</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Create a new uploaded file.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `createUploadedFile()` { #httpmessagefactoriesuploadedfilefactory-createuploadedfile }

```php
public function createUploadedFile(
    StreamInterface $stream,
    int|null $size = null,
    int $error = 0,
    string|null $clientFilename = null,
    string|null $clientMediaType = null
): UploadedFileInterface;
```

Create a new uploaded file.

If a size is not provided it will be determined by checking the size of
the stream.

@link httsp://php.net/manual/features.file-upload.post-method.php
@link https://php.net/manual/features.file-upload.errors.php


## Http\Message\Factories\UriFactory

<span class="badge badge--final">Final</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Factories/UriFactory.php){ .src-btn }

Factory for Uri objects

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Factories\UriFactory`** - implements [`Phalcon\Http\Message\Interfaces\UriFactoryInterface`](#httpmessageinterfacesurifactoryinterface)

</div>

__Uses__ `Phalcon\Http\Message\Interfaces\UriFactoryInterface` · `Phalcon\Http\Message\Interfaces\UriInterface` · `Phalcon\Http\Message\Uri`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagefactoriesurifactory-createuri">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">createUri</span>( <span class="st">string</span> <span class="sv">$uri</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Returns a Uri object</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `createUri()` { #httpmessagefactoriesurifactory-createuri }

```php
public function createUri( string $uri = "" ): UriInterface;
```

Returns a Uri object


## Http\Message\Headers

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Headers.php){ .src-btn }

Message methods

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](phalcon_support.md#supportcollection)
    - **`Phalcon\Http\Message\Headers`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Interfaces\UriInterface` · `Phalcon\Support\Collection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageheaders-checkheaderhost">
<code class="vis vis-public">public</code>
<code class="ret">Headers</code>
<code class="sig"><span class="sf">checkHeaderHost</span>(<span class="prm"><span class="st">Headers</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">UriInterface|null</span> <span class="sv">$uri</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Ensure Host is the first header.</span>
</a>
<a class="api-item" href="#httpmessageheaders-checkheadername">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">checkHeaderName</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check the name of the header. Throw exception if not valid</span>
</a>
<a class="api-item" href="#httpmessageheaders-checkheadervalue">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">checkHeaderValue</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Validates a header value</span>
</a>
<a class="api-item" href="#httpmessageheaders-getheadervalue">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeaderValue</span>( <span class="st">mixed</span> <span class="sv">$values</span> )</code>
<span class="desc">Returns the header values checked for validity</span>
</a>
<a class="api-item" href="#httpmessageheaders-populateheaders">
<code class="vis vis-public">public</code>
<code class="ret">Headers</code>
<code class="sig"><span class="sf">populateHeaders</span>( <span class="st">array</span> <span class="sv">$headers</span> )</code>
<span class="desc">Populates the header collection</span>
</a>
<a class="api-item" href="#httpmessageheaders-processheaders">
<code class="vis vis-public">public</code>
<code class="ret">Headers</code>
<code class="sig"><span class="sf">processHeaders</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$headers</span>,</span><span class="prm"><span class="st">UriInterface|null</span> <span class="sv">$uri</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets the headers</span>
</a>
<a class="api-item" href="#httpmessageheaders-setdata">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setData</span>(<span class="prm"><span class="st">string</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Internal method to set data</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `checkHeaderHost()` { #httpmessageheaders-checkheaderhost }

```php
final public function checkHeaderHost(
    Headers $collection,
    UriInterface|null $uri = null
): Headers;
```

Ensure Host is the first header.

@see: https://tools.ietf.org/html/rfc7230#section-5.4

#### `checkHeaderName()` { #httpmessageheaders-checkheadername }

```php
final public function checkHeaderName( string $name ): void;
```

Check the name of the header. Throw exception if not valid

@see https://tools.ietf.org/html/rfc7230#section-3.2

#### `checkHeaderValue()` { #httpmessageheaders-checkheadervalue }

```php
final public function checkHeaderValue( mixed $value ): void;
```

Validates a header value

Most HTTP header field values are defined using common syntax
components (token, quoted-string, and comment) separated by
whitespace or specific delimiting characters.  Delimiters are chosen
from the set of US-ASCII visual characters not allowed in a token
(DQUOTE and '(),/:;<=>?@[\]{}').

    token          = 1*tchar

    tchar          = '!' / '#' / '$' / '%' / '&' / ''' / '*'
                   / '+' / '-' / '.' / '^' / '_' / '`' / '|' / '~'
                   / DIGIT / ALPHA
                   ; any VCHAR, except delimiters

A string of text is parsed as a single value if it is quoted using
double-quote marks.

    quoted-string  = DQUOTE *( qdtext / quoted-pair ) DQUOTE
    qdtext         = HTAB / SP /%x21 / %x23-5B / %x5D-7E / obs-text
    obs-text       = %x80-FF

Comments can be included in some HTTP header fields by surrounding
the comment text with parentheses.  Comments are only allowed in
fields containing 'comment' as part of their field value definition.

    comment        = '(' *( ctext / quoted-pair / comment ) ')'
    ctext          = HTAB / SP / %x21-27 / %x2A-5B / %x5D-7E / obs-text

The backslash octet ('\') can be used as a single-octet quoting
mechanism within quoted-string and comment constructs.  Recipients
that process the value of a quoted-string MUST handle a quoted-pair
as if it were replaced by the octet following the backslash.

    quoted-pair    = '\' ( HTAB / SP / VCHAR / obs-text )

A sender SHOULD NOT generate a quoted-pair in a quoted-string except
where necessary to quote DQUOTE and backslash octets occurring within
that string.  A sender SHOULD NOT generate a quoted-pair in a comment
except where necessary to quote parentheses ['(' and ')'] and
backslash octets occurring within that comment.

@see https://tools.ietf.org/html/rfc7230#section-3.2.6

#### `getHeaderValue()` { #httpmessageheaders-getheadervalue }

```php
final public function getHeaderValue( mixed $values ): array;
```

Returns the header values checked for validity

#### `populateHeaders()` { #httpmessageheaders-populateheaders }

```php
final public function populateHeaders( array $headers ): Headers;
```

Populates the header collection

#### `processHeaders()` { #httpmessageheaders-processheaders }

```php
final public function processHeaders(
    mixed $headers,
    UriInterface|null $uri = null
): Headers;
```

Sets the headers

<div class="api-group">Protected · 1</div>

#### `setData()` { #httpmessageheaders-setdata }

```php
protected function setData(
    string $element,
    mixed $value
): void;
```

Internal method to set data


## Http\Message\Interfaces\MessageInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/MessageInterface.php){ .src-btn }

HTTP messages consist of requests from a client to a server and responses
from a server to a client. This interface defines the methods common to
each.

Messages are considered immutable; all methods that might change state MUST
be implemented such that they retain the internal state of the current
message and return an instance that contains the changed state.

@link https://www.ietf.org/rfc/rfc7230.txt
@link https://www.ietf.org/rfc/rfc7231.txt

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\MessageInterface`**
    - [`Phalcon\Http\Message\Interfaces\RequestInterface`](#httpmessageinterfacesrequestinterface)
    - [`Phalcon\Http\Message\Interfaces\ResponseInterface`](#httpmessageinterfacesresponseinterface)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesmessageinterface-getbody">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">getBody</span>()</code>
<span class="desc">Gets the body of the message.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesmessageinterface-getheader">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Retrieves a message header value by the given case-insensitive name.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesmessageinterface-getheaderline">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHeaderLine</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Retrieves a comma-separated string of the values for a single header.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesmessageinterface-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Retrieves all message header values.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesmessageinterface-getprotocolversion">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getProtocolVersion</span>()</code>
<span class="desc">Retrieves the HTTP protocol version as a string.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesmessageinterface-hasheader">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a header exists by the given case-insensitive name.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesmessageinterface-withaddedheader">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withAddedHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Return an instance with the specified header appended with the given</span>
</a>
<a class="api-item" href="#httpmessageinterfacesmessageinterface-withbody">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withBody</span>( <span class="st">StreamInterface</span> <span class="sv">$body</span> )</code>
<span class="desc">Return an instance with the specified message body.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesmessageinterface-withheader">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Return an instance with the provided value replacing the specified</span>
</a>
<a class="api-item" href="#httpmessageinterfacesmessageinterface-withprotocolversion">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withProtocolVersion</span>( <span class="st">string</span> <span class="sv">$version</span> )</code>
<span class="desc">Return an instance with the specified HTTP protocol version.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesmessageinterface-withoutheader">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withoutHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return an instance without the specified header.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 11</div>

#### `getBody()` { #httpmessageinterfacesmessageinterface-getbody }

```php
public function getBody(): StreamInterface;
```

Gets the body of the message.

#### `getHeader()` { #httpmessageinterfacesmessageinterface-getheader }

```php
public function getHeader( string $name ): array;
```

Retrieves a message header value by the given case-insensitive name.

This method returns an array of all the header values of the given
case-insensitive header name.

If the header does not appear in the message, this method MUST return an
empty array.

#### `getHeaderLine()` { #httpmessageinterfacesmessageinterface-getheaderline }

```php
public function getHeaderLine( string $name ): string;
```

Retrieves a comma-separated string of the values for a single header.

This method returns all of the header values of the given
case-insensitive header name as a string concatenated together using
a comma.

NOTE: Not all header values may be appropriately represented using
comma concatenation. For such headers, use getHeader() instead
and supply your own delimiter when concatenating.

If the header does not appear in the message, this method MUST return
an empty string.

#### `getHeaders()` { #httpmessageinterfacesmessageinterface-getheaders }

```php
public function getHeaders(): array;
```

Retrieves all message header values.

The keys represent the header name as it will be sent over the wire, and
each value is an array of strings associated with the header.

    // Represent the headers as a string
    foreach ($message->getHeaders() as $name => $values) {
        echo $name . ": " . implode(", ", $values);
    }

    // Emit headers iteratively:
    foreach ($message->getHeaders() as $name => $values) {
        foreach ($values as $value) {
            header(sprintf('%s: %s', $name, $value), false);
        }
    }

While header names are not case-sensitive, getHeaders() will preserve
the
exact case in which headers were originally specified.

#### `getProtocolVersion()` { #httpmessageinterfacesmessageinterface-getprotocolversion }

```php
public function getProtocolVersion(): string;
```

Retrieves the HTTP protocol version as a string.

The string MUST contain only the HTTP version number (e.g., "1.1",
"1.0").

#### `hasHeader()` { #httpmessageinterfacesmessageinterface-hasheader }

```php
public function hasHeader( string $name ): bool;
```

Checks if a header exists by the given case-insensitive name.

#### `withAddedHeader()` { #httpmessageinterfacesmessageinterface-withaddedheader }

```php
public function withAddedHeader(
    string $name,
    mixed $value
): MessageInterface;
```

Return an instance with the specified header appended with the given
value.

Existing values for the specified header will be maintained. The new
value(s) will be appended to the existing list. If the header did not
exist previously, it will be added.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new header and/or value.

#### `withBody()` { #httpmessageinterfacesmessageinterface-withbody }

```php
public function withBody( StreamInterface $body ): MessageInterface;
```

Return an instance with the specified message body.

The body MUST be a StreamInterface object.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return a new instance that has the
new body stream.

#### `withHeader()` { #httpmessageinterfacesmessageinterface-withheader }

```php
public function withHeader(
    string $name,
    mixed $value
): MessageInterface;
```

Return an instance with the provided value replacing the specified
header.

While header names are case-insensitive, the casing of the header will
be preserved by this function, and returned from getHeaders().

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new and/or updated header and value.

#### `withProtocolVersion()` { #httpmessageinterfacesmessageinterface-withprotocolversion }

```php
public function withProtocolVersion( string $version ): MessageInterface;
```

Return an instance with the specified HTTP protocol version.

The version string MUST contain only the HTTP version number (e.g.,
"1.1", "1.0").

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new protocol version.

#### `withoutHeader()` { #httpmessageinterfacesmessageinterface-withoutheader }

```php
public function withoutHeader( string $name ): MessageInterface;
```

Return an instance without the specified header.

Header resolution MUST be done without case-sensitivity.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that removes
the named header.


## Http\Message\Interfaces\RequestFactoryInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/RequestFactoryInterface.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\RequestFactoryInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesrequestfactoryinterface-createrequest">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">createRequest</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$uri</span></span>)</code>
<span class="desc">Create a new request.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `createRequest()` { #httpmessageinterfacesrequestfactoryinterface-createrequest }

```php
public function createRequest(
    string $method,
    mixed $uri
): RequestInterface;
```

Create a new request.


## Http\Message\Interfaces\RequestInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/RequestInterface.php){ .src-btn }

Representation of an outgoing, client-side request.

Per the HTTP specification, this interface includes properties for
each of the following:

- Protocol version
- HTTP method
- URI
- Headers
- Message body

During construction, implementations MUST attempt to set the Host header from
a provided URI if no Host header is provided.

Requests are considered immutable; all methods that might change state MUST
be implemented such that they retain the internal state of the current
message and return an instance that contains the changed state.

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\Interfaces\MessageInterface`](#httpmessageinterfacesmessageinterface)
    - **`Phalcon\Http\Message\Interfaces\RequestInterface`**
        - [`Phalcon\Http\Message\Interfaces\ServerRequestInterface`](#httpmessageinterfacesserverrequestinterface)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesrequestinterface-getmethod">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMethod</span>()</code>
<span class="desc">Retrieves the HTTP method of the request.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesrequestinterface-getrequesttarget">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRequestTarget</span>()</code>
<span class="desc">Retrieves the message&#039;s request target.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesrequestinterface-geturi">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">getUri</span>()</code>
<span class="desc">Retrieves the URI instance.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesrequestinterface-withmethod">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">withMethod</span>( <span class="st">string</span> <span class="sv">$method</span> )</code>
<span class="desc">Return an instance with the provided HTTP method.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesrequestinterface-withrequesttarget">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">withRequestTarget</span>( <span class="st">string|null</span> <span class="sv">$requestTarget</span> )</code>
<span class="desc">Return an instance with the specific request-target.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesrequestinterface-withuri">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">withUri</span>(<span class="prm"><span class="st">UriInterface</span> <span class="sv">$uri</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$preserveHost</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Returns an instance with the provided URI.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getMethod()` { #httpmessageinterfacesrequestinterface-getmethod }

```php
public function getMethod(): string;
```

Retrieves the HTTP method of the request.

#### `getRequestTarget()` { #httpmessageinterfacesrequestinterface-getrequesttarget }

```php
public function getRequestTarget(): string;
```

Retrieves the message's request target.

Retrieves the message's request-target either as it will appear (for
clients), as it appeared at request (for servers), or as it was
specified for the instance (see withRequestTarget()).

In most cases, this will be the origin-form of the composed URI,
unless a value was provided to the concrete implementation (see
withRequestTarget() below).

If no URI is available, and no request-target has been specifically
provided, this method MUST return the string "/".

#### `getUri()` { #httpmessageinterfacesrequestinterface-geturi }

```php
public function getUri(): UriInterface;
```

Retrieves the URI instance.

This method MUST return a UriInterface instance.

@link https://tools.ietf.org/html/rfc3986#section-4.3

#### `withMethod()` { #httpmessageinterfacesrequestinterface-withmethod }

```php
public function withMethod( string $method ): RequestInterface;
```

Return an instance with the provided HTTP method.

While HTTP method names are typically all uppercase characters, HTTP
method names are case-sensitive and thus implementations SHOULD NOT
modify the given string.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
changed request method.

#### `withRequestTarget()` { #httpmessageinterfacesrequestinterface-withrequesttarget }

```php
public function withRequestTarget( string|null $requestTarget ): RequestInterface;
```

Return an instance with the specific request-target.

If the request needs a non-origin-form request-target - e.g., for
specifying an absolute-form, authority-form, or asterisk-form -
this method may be used to create an instance with the specified
request-target, verbatim.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
changed request target.

@link https://tools.ietf.org/html/rfc7230#section-5.3 (for the various
    request-target forms allowed in request messages)

#### `withUri()` { #httpmessageinterfacesrequestinterface-withuri }

```php
public function withUri(
    UriInterface $uri,
    bool $preserveHost = false
): RequestInterface;
```

Returns an instance with the provided URI.

This method MUST update the Host header of the returned request by
default if the URI contains a host component. If the URI does not
contain a host component, any pre-existing Host header MUST be carried
over to the returned request.

You can opt-in to preserving the original state of the Host header by
setting `$preserveHost` to `true`. When `$preserveHost` is set to
`true`, this method interacts with the Host header in the following
ways:

- If the Host header is missing or empty, and the new URI contains
  a host component, this method MUST update the Host header in the
  returned request.
- If the Host header is missing or empty, and the new URI does not
contain a host component, this method MUST NOT update the Host header in
the returned request.
- If a Host header is present and non-empty, this method MUST NOT update
  the Host header in the returned request.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new UriInterface instance.

@link https://tools.ietf.org/html/rfc3986#section-4.3


## Http\Message\Interfaces\RequestMethodInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/RequestMethodInterface.php){ .src-btn }

Interface for Request methods

Implementation of this file has been influenced by PHP FIG

@link    https://github.com/php-fig/http-message-util/
@license https://github.com/php-fig/http-message-util/blob/master/LICENSE

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\RequestMethodInterface`**

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


## Http\Message\Interfaces\ResponseFactoryInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/ResponseFactoryInterface.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\ResponseFactoryInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesresponsefactoryinterface-createresponse">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">createResponse</span>(<span class="prm"><span class="st">int</span> <span class="sv">$code</span><span class="sm"> = 200</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$reasonPhrase</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Create a new response.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `createResponse()` { #httpmessageinterfacesresponsefactoryinterface-createresponse }

```php
public function createResponse(
    int $code = 200,
    string $reasonPhrase = ""
): ResponseInterface;
```

Create a new response.


## Http\Message\Interfaces\ResponseInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/ResponseInterface.php){ .src-btn }

Representation of an outgoing, server-side response.

Per the HTTP specification, this interface includes properties for
each of the following:

- Protocol version
- Status code and reason phrase
- Headers
- Message body

Responses are considered immutable; all methods that might change state MUST
be implemented such that they retain the internal state of the current
message and return an instance that contains the changed state.

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\Interfaces\MessageInterface`](#httpmessageinterfacesmessageinterface)
    - **`Phalcon\Http\Message\Interfaces\ResponseInterface`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesresponseinterface-getreasonphrase">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getReasonPhrase</span>()</code>
<span class="desc">Gets the response reason phrase associated with the status code.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesresponseinterface-getstatuscode">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getStatusCode</span>()</code>
<span class="desc">Gets the response status code.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesresponseinterface-withstatus">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">withStatus</span>(<span class="prm"><span class="st">int</span> <span class="sv">$code</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$reasonPhrase</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Return an instance with the specified status code and, optionally,</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `getReasonPhrase()` { #httpmessageinterfacesresponseinterface-getreasonphrase }

```php
public function getReasonPhrase(): string;
```

Gets the response reason phrase associated with the status code.

Because a reason phrase is not a required element in a response
status line, the reason phrase value MAY be null. Implementations MAY
choose to return the default RFC 7231 recommended reason phrase (or
those
listed in the IANA HTTP Status Code Registry) for the response's
status code.

@link https://tools.ietf.org/html/rfc7231#section-6
@link https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

#### `getStatusCode()` { #httpmessageinterfacesresponseinterface-getstatuscode }

```php
public function getStatusCode(): int;
```

Gets the response status code.

The status code is a 3-digit integer result code of the server's attempt
to understand and satisfy the request.

#### `withStatus()` { #httpmessageinterfacesresponseinterface-withstatus }

```php
public function withStatus(
    int $code,
    string $reasonPhrase = ""
): ResponseInterface;
```

Return an instance with the specified status code and, optionally,
reason phrase.

If no reason phrase is specified, implementations MAY choose to default
to the RFC 7231 or IANA recommended reason phrase for the response's
status code.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated status and reason phrase.

@link https://tools.ietf.org/html/rfc7231#section-6
@link https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml


## Http\Message\Interfaces\ResponseStatusCodeInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/ResponseStatusCodeInterface.php){ .src-btn }

Interface for Request methods

Implementation of this file has been influenced by PHP FIG

@link    https://github.com/php-fig/http-message-util/
@license https://github.com/php-fig/http-message-util/blob/master/LICENSE

Defines constants for common HTTP status code.

@see     https://tools.ietf.org/html/rfc2295#section-8.1
@see     https://tools.ietf.org/html/rfc2324#section-2.3
@see     https://tools.ietf.org/html/rfc2518#section-9.7
@see     https://tools.ietf.org/html/rfc2774#section-7
@see     https://tools.ietf.org/html/rfc3229#section-10.4
@see     https://tools.ietf.org/html/rfc4918#section-11
@see     https://tools.ietf.org/html/rfc5842#section-7.1
@see     https://tools.ietf.org/html/rfc5842#section-7.2
@see     https://tools.ietf.org/html/rfc6585#section-3
@see     https://tools.ietf.org/html/rfc6585#section-4
@see     https://tools.ietf.org/html/rfc6585#section-5
@see     https://tools.ietf.org/html/rfc6585#section-6
@see     https://tools.ietf.org/html/rfc7231#section-6
@see     https://tools.ietf.org/html/rfc7238#section-3
@see     https://tools.ietf.org/html/rfc7725#section-3
@see     https://tools.ietf.org/html/rfc7540#section-9.1.2
@see     https://tools.ietf.org/html/rfc8297#section-2
@see     https://tools.ietf.org/html/rfc8470#section-7

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\ResponseStatusCodeInterface`**
    - [`Phalcon\Http\Message\ResponseStatusCodeInterface`](#httpmessageresponsestatuscodeinterface)

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


## Http\Message\Interfaces\ServerRequestFactoryInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/ServerRequestFactoryInterface.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\ServerRequestFactoryInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesserverrequestfactoryinterface-createserverrequest">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequestInterface</code>
<code class="sig"><span class="sf">createServerRequest</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$uri</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$serverParams</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Create a new server request.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `createServerRequest()` { #httpmessageinterfacesserverrequestfactoryinterface-createserverrequest }

```php
public function createServerRequest(
    string $method,
    mixed $uri,
    array $serverParams = []
): ServerRequestInterface;
```

Create a new server request.

Note that server-params are taken precisely as given - no
parsing/processing of the given values is performed, and, in particular,
no attempt is made to determine the HTTP method or URI, which must be
provided explicitly.


## Http\Message\Interfaces\ServerRequestInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/ServerRequestInterface.php){ .src-btn }

Representation of an incoming, server-side HTTP request.

Per the HTTP specification, this interface includes properties for
each of the following:

- Protocol version
- HTTP method
- URI
- Headers
- Message body

Additionally, it encapsulates all data as it has arrived to the
application from the CGI and/or PHP environment, including:

- The values represented in $_SERVER.
- Any cookies provided (generally via $_COOKIE)
- Query string arguments (generally via $_GET, or as parsed via parse_str())
- Upload files, if any (as represented by $_FILES)
- Deserialized body parameters (generally from $_POST)

$_SERVER values MUST be treated as immutable, as they represent application
state at the time of request; as such, no methods are provided to allow
modification of those values. The other values provide such methods, as they
can be restored from $_SERVER or the request body, and may need treatment
during the application (e.g., body parameters may be deserialized based on
content type).

Additionally, this interface recognizes the utility of introspecting a
request to derive and match additional parameters (e.g., via URI path
matching, decrypting cookie values, deserializing non-form-encoded body
content, matching authorization headers to users, etc). These parameters
are stored in an "attributes" property.

Requests are considered immutable; all methods that might change state MUST
be implemented such that they retain the internal state of the current
message and return an instance that contains the changed state.

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\Interfaces\MessageInterface`](#httpmessageinterfacesmessageinterface)
    - [`Phalcon\Http\Message\Interfaces\RequestInterface`](#httpmessageinterfacesrequestinterface)
        - **`Phalcon\Http\Message\Interfaces\ServerRequestInterface`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-getattribute">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Retrieve a single derived request attribute.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Retrieve attributes derived from the request.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-getcookieparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getCookieParams</span>()</code>
<span class="desc">Retrieve cookies.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-getparsedbody">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getParsedBody</span>()</code>
<span class="desc">Retrieve any parameters provided in the request body.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-getqueryparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getQueryParams</span>()</code>
<span class="desc">Retrieve query string arguments.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-getserverparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServerParams</span>()</code>
<span class="desc">Retrieve server parameters.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-getuploadedfiles">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getUploadedFiles</span>()</code>
<span class="desc">Retrieve normalized file upload data.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-withattribute">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequestInterface</code>
<code class="sig"><span class="sf">withAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Return an instance with the specified derived request attribute.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-withcookieparams">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequestInterface</code>
<code class="sig"><span class="sf">withCookieParams</span>( <span class="st">array</span> <span class="sv">$cookies</span> )</code>
<span class="desc">Return an instance with the specified cookies.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-withparsedbody">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequestInterface</code>
<code class="sig"><span class="sf">withParsedBody</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
<span class="desc">Return an instance with the specified body parameters.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-withqueryparams">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequestInterface</code>
<code class="sig"><span class="sf">withQueryParams</span>( <span class="st">array</span> <span class="sv">$query</span> )</code>
<span class="desc">Return an instance with the specified query string arguments.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-withuploadedfiles">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequestInterface</code>
<code class="sig"><span class="sf">withUploadedFiles</span>( <span class="st">array</span> <span class="sv">$uploadedFiles</span> )</code>
<span class="desc">Create a new instance with the specified uploaded files.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesserverrequestinterface-withoutattribute">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequestInterface</code>
<code class="sig"><span class="sf">withoutAttribute</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return an instance that removes the specified derived request attribute.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 13</div>

#### `getAttribute()` { #httpmessageinterfacesserverrequestinterface-getattribute }

```php
public function getAttribute(
    string $name,
    mixed $defaultValue = null
);
```

Retrieve a single derived request attribute.

Retrieves a single derived request attribute as described in
getAttributes(). If the attribute has not been previously set, returns
the default value as provided.

This method obviates the need for a hasAttribute() method, as it allows
specifying a default value to return if the attribute is not found.

#### `getAttributes()` { #httpmessageinterfacesserverrequestinterface-getattributes }

```php
public function getAttributes(): array;
```

Retrieve attributes derived from the request.

The request "attributes" may be used to allow injection of any
parameters derived from the request: e.g., the results of path
match operations; the results of decrypting cookies; the results of
deserializing non-form-encoded message bodies; etc. Attributes
will be application and request specific, and CAN be mutable.

#### `getCookieParams()` { #httpmessageinterfacesserverrequestinterface-getcookieparams }

```php
public function getCookieParams(): array;
```

Retrieve cookies.

Retrieves cookies sent by the client to the server.

The data MUST be compatible with the structure of the $_COOKIE
superglobal.

#### `getParsedBody()` { #httpmessageinterfacesserverrequestinterface-getparsedbody }

```php
public function getParsedBody();
```

Retrieve any parameters provided in the request body.

If the request Content-Type is either application/x-www-form-urlencoded
or multipart/form-data, and the request method is POST, this method MUST
return the contents of $_POST.

Otherwise, this method may return any results of deserializing
the request body content; as parsing returns structured content, the
potential types MUST be arrays or objects only. A null value indicates
the absence of body content.

#### `getQueryParams()` { #httpmessageinterfacesserverrequestinterface-getqueryparams }

```php
public function getQueryParams(): array;
```

Retrieve query string arguments.

Retrieves the deserialized query string arguments, if any.

Note: the query params might not be in sync with the URI or server
params. If you need to ensure you are only getting the original
values, you may need to parse the query string from
`getUri()->getQuery()` or from the `QUERY_STRING` server param.

#### `getServerParams()` { #httpmessageinterfacesserverrequestinterface-getserverparams }

```php
public function getServerParams(): array;
```

Retrieve server parameters.

Retrieves data related to the incoming request environment,
typically derived from PHP's $_SERVER superglobal. The data IS NOT
REQUIRED to originate from $_SERVER.

#### `getUploadedFiles()` { #httpmessageinterfacesserverrequestinterface-getuploadedfiles }

```php
public function getUploadedFiles(): array;
```

Retrieve normalized file upload data.

This method returns upload metadata in a normalized tree, with each leaf
an instance of Psr\Http\Message\UploadedFileInterface.

These values MAY be prepared from $_FILES or the message body during
instantiation, or MAY be injected via withUploadedFiles().

#### `withAttribute()` { #httpmessageinterfacesserverrequestinterface-withattribute }

```php
public function withAttribute(
    string $name,
    mixed $value
): ServerRequestInterface;
```

Return an instance with the specified derived request attribute.

This method allows setting a single derived request attribute as
described in getAttributes().

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated attribute.

#### `withCookieParams()` { #httpmessageinterfacesserverrequestinterface-withcookieparams }

```php
public function withCookieParams( array $cookies ): ServerRequestInterface;
```

Return an instance with the specified cookies.

The data IS NOT REQUIRED to come from the $_COOKIE superglobal, but MUST
be compatible with the structure of $_COOKIE. Typically, this data will
be injected at instantiation.

This method MUST NOT update the related Cookie header of the request
instance, nor related values in the server params.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated cookie values.

#### `withParsedBody()` { #httpmessageinterfacesserverrequestinterface-withparsedbody }

```php
public function withParsedBody( mixed $data ): ServerRequestInterface;
```

Return an instance with the specified body parameters.

These MAY be injected during instantiation.

If the request Content-Type is either application/x-www-form-urlencoded
or multipart/form-data, and the request method is POST, use this method
ONLY to inject the contents of $_POST.

The data IS NOT REQUIRED to come from $_POST, but MUST be the results of
deserializing the request body content. Deserialization/parsing returns
structured data, and, as such, this method ONLY accepts arrays or
objects, or a null value if nothing was available to parse.

As an example, if content negotiation determines that the request data
is a JSON payload, this method could be used to create a request
instance with the deserialized parameters.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated body parameters.

#### `withQueryParams()` { #httpmessageinterfacesserverrequestinterface-withqueryparams }

```php
public function withQueryParams( array $query ): ServerRequestInterface;
```

Return an instance with the specified query string arguments.

These values SHOULD remain immutable over the course of the incoming
request. They MAY be injected during instantiation, such as from PHP's
$_GET superglobal, or MAY be derived from some other value such as the
URI. In cases where the arguments are parsed from the URI, the data
MUST be compatible with what PHP's parse_str() would return for
purposes of how duplicate query parameters are handled, and how nested
sets are handled.

Setting query string arguments MUST NOT change the URI stored by the
request, nor the values in the server params.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated query string arguments.

#### `withUploadedFiles()` { #httpmessageinterfacesserverrequestinterface-withuploadedfiles }

```php
public function withUploadedFiles( array $uploadedFiles ): ServerRequestInterface;
```

Create a new instance with the specified uploaded files.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated body parameters.

#### `withoutAttribute()` { #httpmessageinterfacesserverrequestinterface-withoutattribute }

```php
public function withoutAttribute( string $name ): ServerRequestInterface;
```

Return an instance that removes the specified derived request attribute.

This method allows removing a single derived request attribute as
described in getAttributes().

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that removes
the attribute.


## Http\Message\Interfaces\StreamFactoryInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/StreamFactoryInterface.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\StreamFactoryInterface`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Exception\RuntimeException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesstreamfactoryinterface-createstream">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">createStream</span>( <span class="st">string</span> <span class="sv">$content</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Create a new stream from a string.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreamfactoryinterface-createstreamfromfile">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">createStreamFromFile</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span><span class="sm"> = &quot;r&quot;</span></span>)</code>
<span class="desc">Create a stream from an existing file.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreamfactoryinterface-createstreamfromresource">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">createStreamFromResource</span>( <span class="st">mixed</span> <span class="sv">$phpResource</span> )</code>
<span class="desc">Create a new stream from an existing resource.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `createStream()` { #httpmessageinterfacesstreamfactoryinterface-createstream }

```php
public function createStream( string $content = "" ): StreamInterface;
```

Create a new stream from a string.

The stream SHOULD be created with a temporary resource.

#### `createStreamFromFile()` { #httpmessageinterfacesstreamfactoryinterface-createstreamfromfile }

```php
public function createStreamFromFile(
    string $filename,
    string $mode = "r"
): StreamInterface;
```

Create a stream from an existing file.

The file MUST be opened using the given mode, which may be any mode
supported by the `fopen` function.

The `$filename` MAY be any string supported by `fopen()`.

#### `createStreamFromResource()` { #httpmessageinterfacesstreamfactoryinterface-createstreamfromresource }

```php
public function createStreamFromResource( mixed $phpResource ): StreamInterface;
```

Create a new stream from an existing resource.

The stream MUST be readable and may be writable.


## Http\Message\Interfaces\StreamInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/StreamInterface.php){ .src-btn }

Describes a data stream.

Typically, an instance will wrap a PHP stream; this interface provides
a wrapper around the most common operations, including serialization of
the entire stream to a string.

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\StreamInterface`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\RuntimeException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesstreaminterface-__tostring">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Reads all data from the stream into a string, from the beginning to end.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-close">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes the stream and any underlying resources.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-detach">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">detach</span>()</code>
<span class="desc">Separates any underlying resources from the stream.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-eof">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">eof</span>()</code>
<span class="desc">Returns true if the stream is at the end of the stream.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-getcontents">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getContents</span>()</code>
<span class="desc">Returns the remaining contents in a string</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-getmetadata">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getMetadata</span>( <span class="st">string|null</span> <span class="sv">$key</span><span class="sm"> = null</span> )</code>
<span class="desc">Get stream metadata as an associative array or retrieve a specific key.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-getsize">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getSize</span>()</code>
<span class="desc">Get the size of the stream if known.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-isreadable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isReadable</span>()</code>
<span class="desc">Returns whether the stream is readable.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-isseekable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSeekable</span>()</code>
<span class="desc">Returns whether the stream is seekable.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-iswritable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isWritable</span>()</code>
<span class="desc">Returns whether the stream is writable.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-read">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">read</span>( <span class="st">int</span> <span class="sv">$length</span> )</code>
<span class="desc">Read data from the stream.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-rewind">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">rewind</span>()</code>
<span class="desc">Seek to the beginning of the stream.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-seek">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">seek</span>(<span class="prm"><span class="st">int</span> <span class="sv">$offset</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$whence</span><span class="sm"> = SEEK_SET</span></span>)</code>
<span class="desc">Seek to a position in the stream.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-tell">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">tell</span>()</code>
<span class="desc">Returns the current position of the file read/write pointer</span>
</a>
<a class="api-item" href="#httpmessageinterfacesstreaminterface-write">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">write</span>( <span class="st">string</span> <span class="sv">$data</span> )</code>
<span class="desc">Write data to the stream.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 15</div>

#### `__toString()` { #httpmessageinterfacesstreaminterface-__tostring }

```php
public function __toString();
```

Reads all data from the stream into a string, from the beginning to end.

This method MUST attempt to seek to the beginning of the stream before
reading data and read the stream until the end is reached.

Warning: This could attempt to load a large amount of data into memory.

This method MUST NOT raise an exception in order to conform with PHP's
string casting operations.

@see https://php.net/manual/en/language.oop5.magic.php#object.tostring

#### `close()` { #httpmessageinterfacesstreaminterface-close }

```php
public function close();
```

Closes the stream and any underlying resources.

#### `detach()` { #httpmessageinterfacesstreaminterface-detach }

```php
public function detach();
```

Separates any underlying resources from the stream.

After the stream has been detached, the stream is in an unusable state.

#### `eof()` { #httpmessageinterfacesstreaminterface-eof }

```php
public function eof(): bool;
```

Returns true if the stream is at the end of the stream.

#### `getContents()` { #httpmessageinterfacesstreaminterface-getcontents }

```php
public function getContents(): string;
```

Returns the remaining contents in a string

#### `getMetadata()` { #httpmessageinterfacesstreaminterface-getmetadata }

```php
public function getMetadata( string|null $key = null );
```

Get stream metadata as an associative array or retrieve a specific key.

The keys returned are identical to the keys returned from PHP's
stream_get_meta_data() function.

@link https://php.net/manual/en/function.stream-get-meta-data.php

#### `getSize()` { #httpmessageinterfacesstreaminterface-getsize }

```php
public function getSize(): int|null;
```

Get the size of the stream if known.

#### `isReadable()` { #httpmessageinterfacesstreaminterface-isreadable }

```php
public function isReadable(): bool;
```

Returns whether the stream is readable.

#### `isSeekable()` { #httpmessageinterfacesstreaminterface-isseekable }

```php
public function isSeekable(): bool;
```

Returns whether the stream is seekable.

#### `isWritable()` { #httpmessageinterfacesstreaminterface-iswritable }

```php
public function isWritable(): bool;
```

Returns whether the stream is writable.

#### `read()` { #httpmessageinterfacesstreaminterface-read }

```php
public function read( int $length ): string;
```

Read data from the stream.

#### `rewind()` { #httpmessageinterfacesstreaminterface-rewind }

```php
public function rewind(): void;
```

Seek to the beginning of the stream.

If the stream is not seekable, this method will raise an exception;
otherwise, it will perform a seek(0).

#### `seek()` { #httpmessageinterfacesstreaminterface-seek }

```php
public function seek(
    int $offset,
    int $whence = SEEK_SET
): void;
```

Seek to a position in the stream.

@link https://www.php.net/manual/en/function.fseek.php

#### `tell()` { #httpmessageinterfacesstreaminterface-tell }

```php
public function tell(): int;
```

Returns the current position of the file read/write pointer

#### `write()` { #httpmessageinterfacesstreaminterface-write }

```php
public function write( string $data ): int;
```

Write data to the stream.


## Http\Message\Interfaces\UploadedFileFactoryInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/UploadedFileFactoryInterface.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\UploadedFileFactoryInterface`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesuploadedfilefactoryinterface-createuploadedfile">
<code class="vis vis-public">public</code>
<code class="ret">UploadedFileInterface</code>
<code class="sig"><span class="sf">createUploadedFile</span>(<span class="prm"><span class="st">StreamInterface</span> <span class="sv">$stream</span>,</span><span class="prm"><span class="st">int|null</span> <span class="sv">$size</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$error</span><span class="sm"> = UPLOAD_ERR_OK</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$clientFilename</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$clientMediaType</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Create a new uploaded file.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `createUploadedFile()` { #httpmessageinterfacesuploadedfilefactoryinterface-createuploadedfile }

```php
public function createUploadedFile(
    StreamInterface $stream,
    int|null $size = null,
    int $error = UPLOAD_ERR_OK,
    string|null $clientFilename = null,
    string|null $clientMediaType = null
): UploadedFileInterface;
```

Create a new uploaded file.

If a size is not provided it will be determined by checking the size of
the file.

@see https://php.net/manual/features.file-upload.post-method.php
@see https://php.net/manual/features.file-upload.errors.php


## Http\Message\Interfaces\UploadedFileInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/UploadedFileInterface.php){ .src-btn }

Value object representing a file uploaded through an HTTP request.

Instances of this interface are considered immutable; all methods that
might change state MUST be implemented such that they retain the internal
state of the current instance and return an instance that contains the
changed state.

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\UploadedFileInterface`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Exception\RuntimeException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesuploadedfileinterface-getclientfilename">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getClientFilename</span>()</code>
<span class="desc">Retrieve the filename sent by the client.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuploadedfileinterface-getclientmediatype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getClientMediaType</span>()</code>
<span class="desc">Retrieve the media type sent by the client.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuploadedfileinterface-geterror">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getError</span>()</code>
<span class="desc">Retrieve the error associated with the uploaded file.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuploadedfileinterface-getsize">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getSize</span>()</code>
<span class="desc">Retrieve the file size.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuploadedfileinterface-getstream">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">getStream</span>()</code>
<span class="desc">Retrieve a stream representing the uploaded file.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuploadedfileinterface-moveto">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">moveTo</span>( <span class="st">string</span> <span class="sv">$targetPath</span> )</code>
<span class="desc">Move the uploaded file to a new location.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getClientFilename()` { #httpmessageinterfacesuploadedfileinterface-getclientfilename }

```php
public function getClientFilename(): string|null;
```

Retrieve the filename sent by the client.

Do not trust the value returned by this method. A client could send
a malicious filename with the intention to corrupt or hack your
application.

Implementations SHOULD return the value stored in the "name" key of
the file in the $_FILES array.

#### `getClientMediaType()` { #httpmessageinterfacesuploadedfileinterface-getclientmediatype }

```php
public function getClientMediaType(): string|null;
```

Retrieve the media type sent by the client.

Do not trust the value returned by this method. A client could send
a malicious media type with the intention to corrupt or hack your
application.

Implementations SHOULD return the value stored in the "type" key of
the file in the $_FILES array.

#### `getError()` { #httpmessageinterfacesuploadedfileinterface-geterror }

```php
public function getError(): int;
```

Retrieve the error associated with the uploaded file.

The return value MUST be one of PHP's UPLOAD_ERR_XXX constants.

If the file was uploaded successfully, this method MUST return
UPLOAD_ERR_OK.

Implementations SHOULD return the value stored in the "error" key of
the file in the $_FILES array.

@see https://php.net/manual/en/features.file-upload.errors.php

#### `getSize()` { #httpmessageinterfacesuploadedfileinterface-getsize }

```php
public function getSize(): int|null;
```

Retrieve the file size.

Implementations SHOULD return the value stored in the "size" key of
the file in the $_FILES array if available, as PHP calculates this based
on the actual size transmitted.

#### `getStream()` { #httpmessageinterfacesuploadedfileinterface-getstream }

```php
public function getStream(): StreamInterface;
```

Retrieve a stream representing the uploaded file.

This method MUST return a StreamInterface instance, representing the
uploaded file. The purpose of this method is to allow utilizing native
PHP stream functionality to manipulate the file upload, such as
stream_copy_to_stream() (though the result will need to be decorated in
a native PHP stream wrapper to work with such functions).

If the moveTo() method has been called previously, this method MUST
raise
an exception.

#### `moveTo()` { #httpmessageinterfacesuploadedfileinterface-moveto }

```php
public function moveTo( string $targetPath ): void;
```

Move the uploaded file to a new location.

Use this method as an alternative to move_uploaded_file(). This method is
guaranteed to work in both SAPI and non-SAPI environments.
Implementations must determine which environment they are in, and use the
appropriate method (move_uploaded_file(), rename(), or a stream
operation) to perform the operation.

$targetPath may be an absolute path, or a relative path. If it is a
relative path, resolution should be the same as used by PHP's rename()
function.

The original file or stream MUST be removed on completion.

If this method is called more than once, any subsequent calls MUST raise
an exception.

When used in an SAPI environment where $_FILES is populated, when writing
files via moveTo(), is_uploaded_file() and move_uploaded_file() SHOULD be
used to ensure permissions and upload status are verified correctly.

If you wish to move to a stream, use getStream(), as SAPI operations
cannot guarantee writing to stream destinations.

@see https://php.net/is_uploaded_file
@see https://php.net/move_uploaded_file


## Http\Message\Interfaces\UriFactoryInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/UriFactoryInterface.php){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\UriFactoryInterface`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesurifactoryinterface-createuri">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">createUri</span>( <span class="st">string</span> <span class="sv">$uri</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Create a new URI.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `createUri()` { #httpmessageinterfacesurifactoryinterface-createuri }

```php
public function createUri( string $uri = "" ): UriInterface;
```

Create a new URI.


## Http\Message\Interfaces\UriInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Interfaces/UriInterface.php){ .src-btn }

Value object representing a URI.

This interface is meant to represent URIs according to RFC 3986 and to
provide methods for most common operations. Additional functionality for
working with URIs can be provided on top of the interface or externally.
Its primary use is for HTTP requests, but may also be used in other
contexts.

Instances of this interface are considered immutable; all methods that
might change state MUST be implemented such that they retain the internal
state of the current instance and return an instance that contains the
changed state.

Typically, the Host header will be also be present in the request message.
For server-side requests, the scheme will typically be discoverable in the
server parameters.

@link https://tools.ietf.org/html/rfc3986 (the URI specification)

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Interfaces\UriInterface`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageinterfacesuriinterface-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Return the string representation as a URI reference.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-getauthority">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAuthority</span>()</code>
<span class="desc">Retrieve the authority component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-getfragment">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getFragment</span>()</code>
<span class="desc">Retrieve the fragment component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-gethost">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHost</span>()</code>
<span class="desc">Retrieve the host component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-getpath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPath</span>()</code>
<span class="desc">Retrieve the path component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-getport">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getPort</span>()</code>
<span class="desc">Retrieve the port component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-getquery">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getQuery</span>()</code>
<span class="desc">Retrieve the query string of the URI.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-getscheme">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getScheme</span>()</code>
<span class="desc">Retrieve the scheme component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-getuserinfo">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getUserInfo</span>()</code>
<span class="desc">Retrieve the user information component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-withfragment">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withFragment</span>( <span class="st">string</span> <span class="sv">$fragment</span> )</code>
<span class="desc">Return an instance with the specified URI fragment.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-withhost">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withHost</span>( <span class="st">string</span> <span class="sv">$host</span> )</code>
<span class="desc">Return an instance with the specified host.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-withpath">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withPath</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
<span class="desc">Return an instance with the specified path.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-withport">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withPort</span>( <span class="st">int|null</span> <span class="sv">$port</span> )</code>
<span class="desc">Return an instance with the specified port.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-withquery">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withQuery</span>( <span class="st">string</span> <span class="sv">$query</span> )</code>
<span class="desc">Return an instance with the specified query string.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-withscheme">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withScheme</span>( <span class="st">string</span> <span class="sv">$scheme</span> )</code>
<span class="desc">Return an instance with the specified scheme.</span>
</a>
<a class="api-item" href="#httpmessageinterfacesuriinterface-withuserinfo">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withUserInfo</span>(<span class="prm"><span class="st">string</span> <span class="sv">$user</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$password</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Return an instance with the specified user information.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 16</div>

#### `__toString()` { #httpmessageinterfacesuriinterface-__tostring }

```php
public function __toString(): string;
```

Return the string representation as a URI reference.

Depending on which components of the URI are present, the resulting
string is either a full URI or relative reference according to RFC 3986,
Section 4.1. The method concatenates the various components of the URI,
using the appropriate delimiters:

- If a scheme is present, it MUST be suffixed by ":".
- If an authority is present, it MUST be prefixed by "//".
- The path can be concatenated without delimiters. But there are two
  cases where the path has to be adjusted to make the URI reference
  valid as PHP does not allow to throw an exception in __toString():
    - If the path is rootless and an authority is present, the path MUST
      be prefixed by "/".
    - If the path is starting with more than one "/" and no authority is
      present, the starting slashes MUST be reduced to one.
- If a query is present, it MUST be prefixed by "?".
- If a fragment is present, it MUST be prefixed by "#".

@see https://tools.ietf.org/html/rfc3986#section-4.1

#### `getAuthority()` { #httpmessageinterfacesuriinterface-getauthority }

```php
public function getAuthority(): string;
```

Retrieve the authority component of the URI.

If no authority information is present, this method MUST return an empty
string.

The authority syntax of the URI is:

<pre>
[user-info@]host[:port]
</pre>

If the port component is not set or is the standard port for the current
scheme, it SHOULD NOT be included.

@see https://tools.ietf.org/html/rfc3986#section-3.2

#### `getFragment()` { #httpmessageinterfacesuriinterface-getfragment }

```php
public function getFragment(): string;
```

Retrieve the fragment component of the URI.

If no fragment is present, this method MUST return an empty string.

The leading "#" character is not part of the fragment and MUST NOT be
added.

The value returned MUST be percent-encoded, but MUST NOT double-encode
any characters. To determine what characters to encode, please refer to
RFC 3986, Sections 2 and 3.5.

@see https://tools.ietf.org/html/rfc3986#section-2
@see https://tools.ietf.org/html/rfc3986#section-3.5

#### `getHost()` { #httpmessageinterfacesuriinterface-gethost }

```php
public function getHost(): string;
```

Retrieve the host component of the URI.

If no host is present, this method MUST return an empty string.

The value returned MUST be normalized to lowercase, per RFC 3986
Section 3.2.2.

@see https://tools.ietf.org/html/rfc3986#section-3.2.2

#### `getPath()` { #httpmessageinterfacesuriinterface-getpath }

```php
public function getPath(): string;
```

Retrieve the path component of the URI.

The path can either be empty or absolute (starting with a slash) or
rootless (not starting with a slash). Implementations MUST support all
three syntaxes.

Normally, the empty path "" and absolute path "/" are considered equal as
defined in RFC 7230 Section 2.7.3. But this method MUST NOT automatically
do this normalization because in contexts with a trimmed base path, e.g.
the front controller, this difference becomes significant. It's the task
of the user to handle both "" and "/".

The value returned MUST be percent-encoded, but MUST NOT double-encode
any characters. To determine what characters to encode, please refer to
RFC 3986, Sections 2 and 3.3.

As an example, if the value should include a slash ("/") not intended as
delimiter between path segments, that value MUST be passed in encoded
form (e.g., "%2F") to the instance.

@see https://tools.ietf.org/html/rfc3986#section-2
@see https://tools.ietf.org/html/rfc3986#section-3.3

#### `getPort()` { #httpmessageinterfacesuriinterface-getport }

```php
public function getPort(): int|null;
```

Retrieve the port component of the URI.

If a port is present, and it is non-standard for the current scheme,
this method MUST return it as an integer. If the port is the standard
port used with the current scheme, this method SHOULD return null.

If no port is present, and no scheme is present, this method MUST return
a null value.

If no port is present, but a scheme is present, this method MAY return
the standard port for that scheme, but SHOULD return null.

#### `getQuery()` { #httpmessageinterfacesuriinterface-getquery }

```php
public function getQuery(): string;
```

Retrieve the query string of the URI.

If no query string is present, this method MUST return an empty string.

The leading "?" character is not part of the query and MUST NOT be
added.

The value returned MUST be percent-encoded, but MUST NOT double-encode
any characters. To determine what characters to encode, please refer to
RFC 3986, Sections 2 and 3.4.

As an example, if a value in a key/value pair of the query string should
include an ampersand ("&") not intended as a delimiter between values,
that value MUST be passed in encoded form (e.g., "%26") to the instance.

@see https://tools.ietf.org/html/rfc3986#section-2
@see https://tools.ietf.org/html/rfc3986#section-3.4

#### `getScheme()` { #httpmessageinterfacesuriinterface-getscheme }

```php
public function getScheme(): string;
```

Retrieve the scheme component of the URI.

If no scheme is present, this method MUST return an empty string.

The value returned MUST be normalized to lowercase, per RFC 3986
Section 3.1.

The trailing ":" character is not part of the scheme and MUST NOT be
added.

@see https://tools.ietf.org/html/rfc3986#section-3.1

#### `getUserInfo()` { #httpmessageinterfacesuriinterface-getuserinfo }

```php
public function getUserInfo(): string;
```

Retrieve the user information component of the URI.

If no user information is present, this method MUST return an empty
string.

If a user is present in the URI, this will return that value;
additionally, if the password is also present, it will be appended to the
user value, with a colon (":") separating the values.

The trailing "@" character is not part of the user information and MUST
NOT be added.

#### `withFragment()` { #httpmessageinterfacesuriinterface-withfragment }

```php
public function withFragment( string $fragment ): UriInterface;
```

Return an instance with the specified URI fragment.

This method MUST retain the state of the current instance, and return
an instance that contains the specified URI fragment.

Users can provide both encoded and decoded fragment characters.
Implementations ensure the correct encoding as outlined in getFragment().

An empty fragment value is equivalent to removing the fragment.

#### `withHost()` { #httpmessageinterfacesuriinterface-withhost }

```php
public function withHost( string $host ): UriInterface;
```

Return an instance with the specified host.

This method MUST retain the state of the current instance, and return
an instance that contains the specified host.

An empty host value is equivalent to removing the host.

#### `withPath()` { #httpmessageinterfacesuriinterface-withpath }

```php
public function withPath( string $path ): UriInterface;
```

Return an instance with the specified path.

This method MUST retain the state of the current instance, and return
an instance that contains the specified path.

The path can either be empty or absolute (starting with a slash) or
rootless (not starting with a slash). Implementations MUST support all
three syntaxes.

If the path is intended to be domain-relative rather than path relative
then it must begin with a slash ("/"). Paths not starting with a slash
("/") are assumed to be relative to some base path known to the
application or consumer.

Users can provide both encoded and decoded path characters.
Implementations ensure the correct encoding as outlined in getPath().

#### `withPort()` { #httpmessageinterfacesuriinterface-withport }

```php
public function withPort( int|null $port ): UriInterface;
```

Return an instance with the specified port.

This method MUST retain the state of the current instance, and return
an instance that contains the specified port.

Implementations MUST raise an exception for ports outside the
established TCP and UDP port ranges.

A null value provided for the port is equivalent to removing the port
information.

#### `withQuery()` { #httpmessageinterfacesuriinterface-withquery }

```php
public function withQuery( string $query ): UriInterface;
```

Return an instance with the specified query string.

This method MUST retain the state of the current instance, and return
an instance that contains the specified query string.

Users can provide both encoded and decoded query characters.
Implementations ensure the correct encoding as outlined in getQuery().

An empty query string value is equivalent to removing the query string.

#### `withScheme()` { #httpmessageinterfacesuriinterface-withscheme }

```php
public function withScheme( string $scheme ): UriInterface;
```

Return an instance with the specified scheme.

This method MUST retain the state of the current instance, and return
an instance that contains the specified scheme.

Implementations MUST support the schemes "http" and "https" case
insensitively, and MAY accommodate other schemes if required.

An empty scheme is equivalent to removing the scheme.

#### `withUserInfo()` { #httpmessageinterfacesuriinterface-withuserinfo }

```php
public function withUserInfo(
    string $user,
    string|null $password = null
): UriInterface;
```

Return an instance with the specified user information.

This method MUST retain the state of the current instance, and return
an instance that contains the specified user information.

Password is optional, but the user information MUST include the
user; an empty string for the user is equivalent to removing user
information.


## Http\Message\Request

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Request.php){ .src-btn }

Request object

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\AbstractCommon`](#httpmessageabstractcommon)
    - [`Phalcon\Http\Message\AbstractMessage`](#httpmessageabstractmessage)
        - [`Phalcon\Http\Message\AbstractRequest`](#httpmessageabstractrequest)
            - **`Phalcon\Http\Message\Request`** - implements [`Phalcon\Http\Message\Interfaces\RequestInterface`](#httpmessageinterfacesrequestinterface), [`Phalcon\Http\Message\Interfaces\RequestMethodInterface`](#httpmessageinterfacesrequestmethodinterface)

</div>

__Uses__ `Phalcon\Http\Message\Interfaces\RequestInterface` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface` · `Phalcon\Http\Message\Interfaces\StreamInterface` · `Phalcon\Http\Message\Interfaces\UriInterface` · `Phalcon\Http\Message\Stream\Input` · `Phalcon\Support\Collection\CollectionInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagerequest-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span><span class="sm"> = self::METHOD_GET</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$uri</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$body</span><span class="sm"> = &quot;php://memory&quot;</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$headers</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Request constructor.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpmessagerequest-__construct }

```php
public function __construct(
    string $method = self::METHOD_GET,
    mixed $uri = null,
    mixed $body = "php://memory",
    mixed $headers = []
);
```

Request constructor.


## Http\Message\Response

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Response.php){ .src-btn }

Response object

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\AbstractCommon`](#httpmessageabstractcommon)
    - [`Phalcon\Http\Message\AbstractMessage`](#httpmessageabstractmessage)
        - **`Phalcon\Http\Message\Response`** - implements [`Phalcon\Http\Message\Interfaces\ResponseInterface`](#httpmessageinterfacesresponseinterface)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Interfaces\ResponseInterface` · `Phalcon\Http\Message\Interfaces\StreamInterface` · `Phalcon\Http\Traits\StatusPhrasesTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageresponse-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$body</span><span class="sm"> = &quot;php://memory&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$code</span><span class="sm"> = 200</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$headers</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Response constructor.</span>
</a>
<a class="api-item" href="#httpmessageresponse-getreasonphrase">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getReasonPhrase</span>()</code>
</a>
<a class="api-item" href="#httpmessageresponse-getstatuscode">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getStatusCode</span>()</code>
</a>
<a class="api-item" href="#httpmessageresponse-withstatus">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">withStatus</span>(<span class="prm"><span class="st">int</span> <span class="sv">$code</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$reasonPhrase</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Return an instance with the specified status code and, optionally,</span>
</a>
<a class="api-item" href="#httpmessageresponse-processcode">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processCode</span>(<span class="prm"><span class="st">int</span> <span class="sv">$code</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$phrase</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Set a valid status code and phrase</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$reasonPhrase</span><span class="sm"> = &quot;&quot;</span></code>
<span class="desc">Gets the response reason phrase associated with the status code.

Because a reason phrase is not a required element in a response
status line, the reason phrase value MAY be empty. Implementations MAY
choose to return the default RFC 7231 recommended reason phrase (or
those
listed in the IANA HTTP Status Code Registry) for the response&#039;s
status code.

@see https://tools.ietf.org/html/rfc7231#section-6
@see https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$statusCode</span><span class="sm"> = 200</span></code>
<span class="desc">Gets the response status code.

The status code is a 3-digit integer result code of the server&#039;s attempt
to understand and satisfy the request.</span>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #httpmessageresponse-__construct }

```php
public function __construct(
    mixed $body = "php://memory",
    int $code = 200,
    array $headers = []
);
```

Response constructor.

#### `getReasonPhrase()` { #httpmessageresponse-getreasonphrase }

```php
public function getReasonPhrase(): string;
```

#### `getStatusCode()` { #httpmessageresponse-getstatuscode }

```php
public function getStatusCode(): int;
```

#### `withStatus()` { #httpmessageresponse-withstatus }

```php
public function withStatus(
    int $code,
    string $reasonPhrase = ""
): ResponseInterface;
```

Return an instance with the specified status code and, optionally,
reason phrase.

If no reason phrase is specified, implementations MAY choose to default
to the RFC 7231 or IANA recommended reason phrase for the response's
status code.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated status and reason phrase.

@see https://tools.ietf.org/html/rfc7231#section-6
@see https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

<div class="api-group">Protected · 1</div>

#### `processCode()` { #httpmessageresponse-processcode }

```php
protected function processCode(
    int $code,
    string $phrase = ""
): void;
```

Set a valid status code and phrase


## Http\Message\ResponseStatusCodeInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/ResponseStatusCodeInterface.php){ .src-btn }

Backward-compatible interface so that Phalcon\Http\Message\ResponseStatusCodeInterface
resolves to the same set of constants as the canonical
Phalcon\Http\Message\Interfaces\ResponseStatusCodeInterface.

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\Interfaces\ResponseStatusCodeInterface`](#httpmessageinterfacesresponsestatuscodeinterface)
    - **`Phalcon\Http\Message\ResponseStatusCodeInterface`**

</div>

__Uses__ `Phalcon\Http\Message\Interfaces\ResponseStatusCodeInterface`
{ .api-uses }


## Http\Message\ServerRequest

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/ServerRequest.php){ .src-btn }

ServerRequest

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\AbstractCommon`](#httpmessageabstractcommon)
    - [`Phalcon\Http\Message\AbstractMessage`](#httpmessageabstractmessage)
        - [`Phalcon\Http\Message\AbstractRequest`](#httpmessageabstractrequest)
            - **`Phalcon\Http\Message\ServerRequest`** - implements [`Phalcon\Http\Message\Interfaces\ServerRequestInterface`](#httpmessageinterfacesserverrequestinterface)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Interfaces\ServerRequestInterface` · `Phalcon\Http\Message\Interfaces\StreamInterface` · `Phalcon\Http\Message\Interfaces\UploadedFileInterface` · `Phalcon\Http\Message\Interfaces\UriInterface` · `Phalcon\Http\Message\Stream\Input` · `Phalcon\Support\Collection` · `Phalcon\Support\Collection\CollectionInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageserverrequest-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$method</span><span class="sm"> = self::METHOD_GET</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$uri</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$serverParams</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$body</span><span class="sm"> = &quot;php://input&quot;</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$headers</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$cookies</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$queryParams</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$uploadFiles</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$parsedBody</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$protocol</span><span class="sm"> = &quot;1.1&quot;</span></span>)</code>
<span class="desc">ServerRequest constructor.</span>
</a>
<a class="api-item" href="#httpmessageserverrequest-getattribute">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Retrieve a single derived request attribute.</span>
</a>
<a class="api-item" href="#httpmessageserverrequest-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Retrieve attributes derived from the request.</span>
</a>
<a class="api-item" href="#httpmessageserverrequest-getcookieparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getCookieParams</span>()</code>
</a>
<a class="api-item" href="#httpmessageserverrequest-getparsedbody">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getParsedBody</span>()</code>
</a>
<a class="api-item" href="#httpmessageserverrequest-getqueryparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getQueryParams</span>()</code>
</a>
<a class="api-item" href="#httpmessageserverrequest-getserverparams">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServerParams</span>()</code>
</a>
<a class="api-item" href="#httpmessageserverrequest-getuploadedfiles">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getUploadedFiles</span>()</code>
</a>
<a class="api-item" href="#httpmessageserverrequest-withattribute">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequest</code>
<code class="sig"><span class="sf">withAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Return an instance with the specified derived request attribute.</span>
</a>
<a class="api-item" href="#httpmessageserverrequest-withcookieparams">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequest</code>
<code class="sig"><span class="sf">withCookieParams</span>( <span class="st">array</span> <span class="sv">$cookies</span> )</code>
<span class="desc">Return an instance with the specified cookies.</span>
</a>
<a class="api-item" href="#httpmessageserverrequest-withparsedbody">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequest</code>
<code class="sig"><span class="sf">withParsedBody</span>( <span class="st">mixed</span> <span class="sv">$data</span> )</code>
<span class="desc">Return an instance with the specified body parameters.</span>
</a>
<a class="api-item" href="#httpmessageserverrequest-withqueryparams">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequest</code>
<code class="sig"><span class="sf">withQueryParams</span>( <span class="st">array</span> <span class="sv">$query</span> )</code>
<span class="desc">Return an instance with the specified query string arguments.</span>
</a>
<a class="api-item" href="#httpmessageserverrequest-withuploadedfiles">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequest</code>
<code class="sig"><span class="sf">withUploadedFiles</span>( <span class="st">array</span> <span class="sv">$uploadedFiles</span> )</code>
<span class="desc">Create a new instance with the specified uploaded files.</span>
</a>
<a class="api-item" href="#httpmessageserverrequest-withoutattribute">
<code class="vis vis-public">public</code>
<code class="ret">ServerRequest</code>
<code class="sig"><span class="sf">withoutAttribute</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return an instance that removes the specified derived request attribute.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">CollectionInterface</code>
<code class="sig"><span class="sv">$attributes</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$cookieParams</span><span class="sm"> = []</span></code>
<span class="desc">Retrieve cookies.

Retrieves cookies sent by the client to the server.

The data MUST be compatible with the structure of the $_COOKIE
superglobal.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$parsedBody</span><span class="sm"> = null</span></code>
<span class="desc">Retrieve any parameters provided in the request body.

If the request Content-Type is either application/x-www-form-urlencoded
or multipart/form-data, and the request method is POST, this method MUST
return the contents of $_POST.

Otherwise, this method may return any results of deserializing
the request body content; as parsing returns structured content, the
potential types MUST be arrays or objects only. A null value indicates
the absence of body content.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$queryParams</span><span class="sm"> = []</span></code>
<span class="desc">Retrieve query string arguments.

Retrieves the deserialized query string arguments, if any.

Note: the query params might not be in sync with the URI or server
params. If you need to ensure you are only getting the original
values, you may need to parse the query string from
<code>getUri()-&gt;getQuery()</code> or from the <code>QUERY_STRING</code> server param.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$serverParams</span><span class="sm"> = []</span></code>
<span class="desc">Retrieve server parameters.

Retrieves data related to the incoming request environment,
typically derived from PHP&#039;s $_SERVER superglobal. The data IS NOT
REQUIRED to originate from $_SERVER.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$uploadedFiles</span><span class="sm"> = []</span></code>
<span class="desc">Retrieve normalized file upload data.

This method returns upload metadata in a normalized tree, with each leaf
an instance of Phalcon\Http\Message\UploadedFileInterface.

These values MAY be prepared from $_FILES or the message body during
instantiation, or MAY be injected via withUploadedFiles().</span>
</div>
</div>

### Methods

<div class="api-group">Public · 14</div>

#### `__construct()` { #httpmessageserverrequest-__construct }

```php
public function __construct(
    string $method = self::METHOD_GET,
    mixed $uri = null,
    array $serverParams = [],
    mixed $body = "php://input",
    mixed $headers = [],
    array $cookies = [],
    array $queryParams = [],
    array $uploadFiles = [],
    mixed $parsedBody = null,
    string $protocol = "1.1"
);
```

ServerRequest constructor.

#### `getAttribute()` { #httpmessageserverrequest-getattribute }

```php
public function getAttribute(
    string $name,
    mixed $defaultValue = null
);
```

Retrieve a single derived request attribute.

Retrieves a single derived request attribute as described in
getAttributes(). If the attribute has not been previously set, returns
the default value as provided.

This method obviates the need for a hasAttribute() method, as it allows
specifying a default value to return if the attribute is not found.

#### `getAttributes()` { #httpmessageserverrequest-getattributes }

```php
public function getAttributes(): array;
```

Retrieve attributes derived from the request.

The request 'attributes' may be used to allow injection of any
parameters derived from the request: e.g., the results of path
match operations; the results of decrypting cookies; the results of
deserializing non-form-encoded message bodies; etc. Attributes
will be application and request specific, and CAN be mutable.

#### `getCookieParams()` { #httpmessageserverrequest-getcookieparams }

```php
public function getCookieParams(): array;
```

#### `getParsedBody()` { #httpmessageserverrequest-getparsedbody }

```php
public function getParsedBody();
```

#### `getQueryParams()` { #httpmessageserverrequest-getqueryparams }

```php
public function getQueryParams(): array;
```

#### `getServerParams()` { #httpmessageserverrequest-getserverparams }

```php
public function getServerParams(): array;
```

#### `getUploadedFiles()` { #httpmessageserverrequest-getuploadedfiles }

```php
public function getUploadedFiles(): array;
```

#### `withAttribute()` { #httpmessageserverrequest-withattribute }

```php
public function withAttribute(
    string $name,
    mixed $value
): ServerRequest;
```

Return an instance with the specified derived request attribute.

This method allows setting a single derived request attribute as
described in getAttributes().

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated attribute.

#### `withCookieParams()` { #httpmessageserverrequest-withcookieparams }

```php
public function withCookieParams( array $cookies ): ServerRequest;
```

Return an instance with the specified cookies.

The data IS NOT REQUIRED to come from the $_COOKIE superglobal, but MUST
be compatible with the structure of $_COOKIE. Typically, this data will
be injected at instantiation.

This method MUST NOT update the related Cookie header of the request
instance, nor related values in the server params.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated cookie values.

#### `withParsedBody()` { #httpmessageserverrequest-withparsedbody }

```php
public function withParsedBody( mixed $data ): ServerRequest;
```

Return an instance with the specified body parameters.

These MAY be injected during instantiation.

If the request Content-Type is either application/x-www-form-urlencoded
or multipart/form-data, and the request method is POST, use this method
ONLY to inject the contents of $_POST.

The data IS NOT REQUIRED to come from $_POST, but MUST be the results of
deserializing the request body content. Deserialization/parsing returns
structured data, and, as such, this method ONLY accepts arrays or
objects, or a null value if nothing was available to parse.

As an example, if content negotiation determines that the request data
is a JSON payload, this method could be used to create a request
instance with the deserialized parameters.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated body parameters.

#### `withQueryParams()` { #httpmessageserverrequest-withqueryparams }

```php
public function withQueryParams( array $query ): ServerRequest;
```

Return an instance with the specified query string arguments.

These values SHOULD remain immutable over the course of the incoming
request. They MAY be injected during instantiation, such as from PHP's
$_GET superglobal, or MAY be derived from some other value such as the
URI. In cases where the arguments are parsed from the URI, the data
MUST be compatible with what PHP's parse_str() would return for
purposes of how duplicate query parameters are handled, and how nested
sets are handled.

Setting query string arguments MUST NOT change the URI stored by the
request, nor the values in the server params.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated query string arguments.

#### `withUploadedFiles()` { #httpmessageserverrequest-withuploadedfiles }

```php
public function withUploadedFiles( array $uploadedFiles ): ServerRequest;
```

Create a new instance with the specified uploaded files.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
updated body parameters.

#### `withoutAttribute()` { #httpmessageserverrequest-withoutattribute }

```php
public function withoutAttribute( string $name ): ServerRequest;
```

Return an instance that removes the specified derived request attribute.

This method allows removing a single derived request attribute as
described in getAttributes().

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that removes
the attribute.


## Http\Message\Stream

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Stream.php){ .src-btn }

Stream/file OO class

@property resource|null   $handle
@property resource|string $stream

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Stream`** - implements [`Phalcon\Http\Message\Interfaces\StreamInterface`](#httpmessageinterfacesstreaminterface)
    - [`Phalcon\Http\Message\Stream\Input`](#httpmessagestreaminput)
    - [`Phalcon\Http\Message\Stream\Memory`](#httpmessagestreammemory)
    - [`Phalcon\Http\Message\Stream\Temp`](#httpmessagestreamtemp)

</div>

__Uses__ `Exception` · `Phalcon\Http\Message\Exception\RuntimeException` · `Phalcon\Http\Message\Interfaces\StreamInterface` · `Phalcon\Traits\Php\FileTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagestream-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$stream</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span><span class="sm"> = &quot;rb&quot;</span></span>)</code>
<span class="desc">Stream constructor.</span>
</a>
<a class="api-item" href="#httpmessagestream-__destruct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__destruct</span>()</code>
<span class="desc">Closes the stream when the destructed.</span>
</a>
<a class="api-item" href="#httpmessagestream-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Reads all data from the stream into a string, from the beginning to end.</span>
</a>
<a class="api-item" href="#httpmessagestream-close">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">close</span>()</code>
<span class="desc">Closes the stream and any underlying resources.</span>
</a>
<a class="api-item" href="#httpmessagestream-detach">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">detach</span>()</code>
<span class="desc">Separates any underlying resources from the stream.</span>
</a>
<a class="api-item" href="#httpmessagestream-eof">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">eof</span>()</code>
<span class="desc">Returns true if the end of the stream has been reached</span>
</a>
<a class="api-item" href="#httpmessagestream-getcontents">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getContents</span>()</code>
<span class="desc">Returns the remaining contents in a string</span>
</a>
<a class="api-item" href="#httpmessagestream-getmetadata">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getMetadata</span>( <span class="st">string|null</span> <span class="sv">$key</span><span class="sm"> = null</span> )</code>
<span class="desc">Get stream metadata as an associative array or retrieve a specific key.</span>
</a>
<a class="api-item" href="#httpmessagestream-getsize">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getSize</span>()</code>
<span class="desc">Get the size of the stream if known.</span>
</a>
<a class="api-item" href="#httpmessagestream-isreadable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isReadable</span>()</code>
<span class="desc">Returns whether the stream is readable.</span>
</a>
<a class="api-item" href="#httpmessagestream-isseekable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSeekable</span>()</code>
<span class="desc">Returns whether the stream is seekable.</span>
</a>
<a class="api-item" href="#httpmessagestream-iswritable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isWritable</span>()</code>
<span class="desc">Returns whether the stream is writable.</span>
</a>
<a class="api-item" href="#httpmessagestream-read">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">read</span>( <span class="st">int</span> <span class="sv">$length</span> )</code>
<span class="desc">Read data from the stream.</span>
</a>
<a class="api-item" href="#httpmessagestream-rewind">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">rewind</span>()</code>
<span class="desc">Seek to the beginning of the stream.</span>
</a>
<a class="api-item" href="#httpmessagestream-seek">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">seek</span>(<span class="prm"><span class="st">int</span> <span class="sv">$offset</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$whence</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Seek to a position in the stream.</span>
</a>
<a class="api-item" href="#httpmessagestream-setstream">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setStream</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$stream</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span><span class="sm"> = &quot;rb&quot;</span></span>)</code>
<span class="desc">Sets the stream - existing instance</span>
</a>
<a class="api-item" href="#httpmessagestream-tell">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">tell</span>()</code>
<span class="desc">Returns the current position of the file read/write pointer</span>
</a>
<a class="api-item" href="#httpmessagestream-write">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">write</span>( <span class="st">string</span> <span class="sv">$data</span> )</code>
<span class="desc">Write data to the stream.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">resource|null</code>
<code class="sig"><span class="sv">$handle</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">resource|string</code>
<code class="sig"><span class="sv">$stream</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 18</div>

#### `__construct()` { #httpmessagestream-__construct }

```php
public function __construct(
    mixed $stream,
    string $mode = "rb"
);
```

Stream constructor.

#### `__destruct()` { #httpmessagestream-__destruct }

```php
public function __destruct();
```

Closes the stream when the destructed.

#### `__toString()` { #httpmessagestream-__tostring }

```php
public function __toString(): string;
```

Reads all data from the stream into a string, from the beginning to end.

This method MUST attempt to seek to the beginning of the stream before
reading data and read the stream until the end is reached.

Warning: This could attempt to load a large amount of data into memory.

This method MUST NOT raise an exception in order to conform with PHP's
string casting operations.

@see https://php.net/manual/en/language.oop5.magic.php#object.tostring

#### `close()` { #httpmessagestream-close }

```php
public function close(): void;
```

Closes the stream and any underlying resources.

#### `detach()` { #httpmessagestream-detach }

```php
public function detach();
```

Separates any underlying resources from the stream.

After the stream has been detached, the stream is in an unusable state.

#### `eof()` { #httpmessagestream-eof }

```php
public function eof(): bool;
```

Returns true if the end of the stream has been reached

#### `getContents()` { #httpmessagestream-getcontents }

```php
public function getContents(): string;
```

Returns the remaining contents in a string

#### `getMetadata()` { #httpmessagestream-getmetadata }

```php
public function getMetadata( string|null $key = null );
```

Get stream metadata as an associative array or retrieve a specific key.

The keys returned are identical to the keys returned from PHP's
stream_get_meta_data() function.

#### `getSize()` { #httpmessagestream-getsize }

```php
public function getSize(): int|null;
```

Get the size of the stream if known.

#### `isReadable()` { #httpmessagestream-isreadable }

```php
public function isReadable(): bool;
```

Returns whether the stream is readable.

#### `isSeekable()` { #httpmessagestream-isseekable }

```php
public function isSeekable(): bool;
```

Returns whether the stream is seekable.

#### `isWritable()` { #httpmessagestream-iswritable }

```php
public function isWritable(): bool;
```

Returns whether the stream is writable.

#### `read()` { #httpmessagestream-read }

```php
public function read( int $length ): string;
```

Read data from the stream.

#### `rewind()` { #httpmessagestream-rewind }

```php
public function rewind(): void;
```

Seek to the beginning of the stream.

If the stream is not seekable, this method will raise an exception;
otherwise, it will perform a seek(0).

#### `seek()` { #httpmessagestream-seek }

```php
public function seek(
    int $offset,
    int $whence = 0
): void;
```

Seek to a position in the stream.

#### `setStream()` { #httpmessagestream-setstream }

```php
public function setStream(
    mixed $stream,
    string $mode = "rb"
): void;
```

Sets the stream - existing instance

#### `tell()` { #httpmessagestream-tell }

```php
public function tell(): int;
```

Returns the current position of the file read/write pointer

#### `write()` { #httpmessagestream-write }

```php
public function write( string $data ): int;
```

Write data to the stream.


## Http\Message\Stream\Input

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Stream/Input.php){ .src-btn }

Describes a data stream from "php://input"

Typically, an instance will wrap a PHP stream; this interface provides
a wrapper around the most common operations, including serialization of
the entire stream to a string.

@property string $data
@property bool   $eof

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\Stream`](#httpmessagestream)
    - **`Phalcon\Http\Message\Stream\Input`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\RuntimeException` · `Phalcon\Http\Message\Stream`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagestreaminput-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
<span class="desc">Input constructor.</span>
</a>
<a class="api-item" href="#httpmessagestreaminput-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Reads all data from the stream into a string, from the beginning to end.</span>
</a>
<a class="api-item" href="#httpmessagestreaminput-getcontents">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getContents</span>( <span class="st">int</span> <span class="sv">$length</span><span class="sm"> = -1</span> )</code>
<span class="desc">Returns the remaining contents in a string</span>
</a>
<a class="api-item" href="#httpmessagestreaminput-iswritable">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isWritable</span>()</code>
<span class="desc">Returns whether the stream is writeable.</span>
</a>
<a class="api-item" href="#httpmessagestreaminput-read">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">read</span>( <span class="st">int</span> <span class="sv">$length</span> )</code>
<span class="desc">Read data from the stream.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `__construct()` { #httpmessagestreaminput-__construct }

```php
public function __construct();
```

Input constructor.

#### `__toString()` { #httpmessagestreaminput-__tostring }

```php
public function __toString(): string;
```

Reads all data from the stream into a string, from the beginning to end.

This method MUST attempt to seek to the beginning of the stream before
reading data and read the stream until the end is reached.

Warning: This could attempt to load a large amount of data into memory.

This method MUST NOT raise an exception in order to conform with PHP's
string casting operations.

@see https://php.net/manual/en/language.oop5.magic.php#object.tostring

#### `getContents()` { #httpmessagestreaminput-getcontents }

```php
public function getContents( int $length = -1 ): string;
```

Returns the remaining contents in a string

#### `isWritable()` { #httpmessagestreaminput-iswritable }

```php
public function isWritable(): bool;
```

Returns whether the stream is writeable.

#### `read()` { #httpmessagestreaminput-read }

```php
public function read( int $length ): string;
```

Read data from the stream.


## Http\Message\Stream\Memory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Stream/Memory.php){ .src-btn }

Describes a data stream from "php://memory"

Typically, an instance will wrap a PHP stream; this interface provides
a wrapper around the most common operations, including serialization of
the entire stream to a string.

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\Stream`](#httpmessagestream)
    - **`Phalcon\Http\Message\Stream\Memory`**

</div>

__Uses__ `Phalcon\Http\Message\Stream`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagestreammemory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$mode</span><span class="sm"> = &quot;rb&quot;</span> )</code>
<span class="desc">Constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpmessagestreammemory-__construct }

```php
public function __construct( string $mode = "rb" );
```

Constructor


## Http\Message\Stream\Temp

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Stream/Temp.php){ .src-btn }

Describes a data stream from "php://temp"

Typically, an instance will wrap a PHP stream; this interface provides
a wrapper around the most common operations, including serialization of
the entire stream to a string.

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\Stream`](#httpmessagestream)
    - **`Phalcon\Http\Message\Stream\Temp`**

</div>

__Uses__ `Phalcon\Http\Message\Stream`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagestreamtemp-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$mode</span><span class="sm"> = &quot;rb&quot;</span> )</code>
<span class="desc">Constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpmessagestreamtemp-__construct }

```php
public function __construct( string $mode = "rb" );
```

Constructor


## Http\Message\Traits\MessageTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Traits/MessageTrait.php){ .src-btn }

Message methods

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Traits\MessageTrait`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Headers` · `Phalcon\Http\Message\Stream` · `Psr\Http\Message\MessageInterface` · `Psr\Http\Message\StreamInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagetraitsmessagetrait-getbody">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">getBody</span>()</code>
<span class="desc">Return the body of the stream</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-getheader">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Retrieves a message header value by the given case-insensitive name.</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-getheaderline">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHeaderLine</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Retrieves a comma-separated string of the values for a single header.</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Retrieves all message header values.</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-getprotocolversion">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getProtocolVersion</span>()</code>
<span class="desc">Returns the protocol version</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-hasheader">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a header exists by the given case-insensitive name.</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-withaddedheader">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withAddedHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Return an instance with the specified header appended with the given</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-withbody">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withBody</span>( <span class="st">StreamInterface</span> <span class="sv">$body</span> )</code>
<span class="desc">Return an instance with the specified message body.</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-withheader">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Return an instance with the provided value replacing the specified</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-withprotocolversion">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withProtocolVersion</span>( <span class="st">string</span> <span class="sv">$version</span> )</code>
<span class="desc">Return an instance with the specified HTTP protocol version.</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-withoutheader">
<code class="vis vis-public">public</code>
<code class="ret">MessageInterface</code>
<code class="sig"><span class="sf">withoutHeader</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return an instance without the specified header.</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-processbody">
<code class="vis vis-protected">protected</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">processBody</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$body</span><span class="sm"> = &quot;php://memory&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span><span class="sm"> = &quot;r+b&quot;</span></span>)</code>
<span class="desc">Set a valid stream</span>
</a>
<a class="api-item" href="#httpmessagetraitsmessagetrait-processprotocol">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">processProtocol</span>( <span class="st">string</span> <span class="sv">$protocol</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Checks the protocol</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sv">$body</span></code>
<span class="desc">Gets the body of the message.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Headers</code>
<code class="sig"><span class="sv">$headers</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$protocolVersion</span><span class="sm"> = &quot;1.1&quot;</span></code>
<span class="desc">Retrieves the HTTP protocol version as a string.

The string MUST contain only the HTTP version number (e.g., &#039;1.1&#039;,
&#039;1.0&#039;).</span>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

#### `getBody()` { #httpmessagetraitsmessagetrait-getbody }

```php
public function getBody(): StreamInterface;
```

Return the body of the stream

#### `getHeader()` { #httpmessagetraitsmessagetrait-getheader }

```php
public function getHeader( string $name ): array;
```

Retrieves a message header value by the given case-insensitive name.

This method returns an array of all the header values of the given
case-insensitive header name.

If the header does not appear in the message, this method MUST return an
empty array.

#### `getHeaderLine()` { #httpmessagetraitsmessagetrait-getheaderline }

```php
public function getHeaderLine( string $name ): string;
```

Retrieves a comma-separated string of the values for a single header.

This method returns all the header values of the given
case-insensitive header name as a string concatenated together using
a comma.

NOTE: Not all header values may be appropriately represented using
comma concatenation. For such headers, use getHeader() instead
and supply your own delimiter when concatenating.

If the header does not appear in the message, this method MUST return
an empty string.

#### `getHeaders()` { #httpmessagetraitsmessagetrait-getheaders }

```php
public function getHeaders(): array;
```

Retrieves all message header values.

The keys represent the header name as it will be sent over the wire, and
each value is an array of strings associated with the header.

    // Represent the headers as a string
    foreach ($message->getHeaders() as $name => $values) {
        echo $name . ': ' . implode(', ', $values);
    }

    // Emit headers iteratively:
    foreach ($message->getHeaders() as $name => $values) {
        foreach ($values as $value) {
            header(sprintf('%s: %s', $name, $value), false);
        }
    }

While header names are not case-sensitive, getHeaders() will preserve the
exact case in which headers were originally specified.

#### `getProtocolVersion()` { #httpmessagetraitsmessagetrait-getprotocolversion }

```php
public function getProtocolVersion(): string;
```

Returns the protocol version

#### `hasHeader()` { #httpmessagetraitsmessagetrait-hasheader }

```php
public function hasHeader( string $name ): bool;
```

Checks if a header exists by the given case-insensitive name.

#### `withAddedHeader()` { #httpmessagetraitsmessagetrait-withaddedheader }

```php
public function withAddedHeader(
    string $name,
    mixed $value
): MessageInterface;
```

Return an instance with the specified header appended with the given
value.

Existing values for the specified header will be maintained. The new
value(s) will be appended to the existing list. If the header did not
exist previously, it will be added.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new header and/or value.

#### `withBody()` { #httpmessagetraitsmessagetrait-withbody }

```php
public function withBody( StreamInterface $body ): MessageInterface;
```

Return an instance with the specified message body.

The body MUST be a StreamInterface object.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return a new instance that has the
new body stream.

#### `withHeader()` { #httpmessagetraitsmessagetrait-withheader }

```php
public function withHeader(
    string $name,
    mixed $value
): MessageInterface;
```

Return an instance with the provided value replacing the specified
header.

While header names are case-insensitive, the casing of the header will
be preserved by this function, and returned from getHeaders().

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new and/or updated header and value.

#### `withProtocolVersion()` { #httpmessagetraitsmessagetrait-withprotocolversion }

```php
public function withProtocolVersion( string $version ): MessageInterface;
```

Return an instance with the specified HTTP protocol version.

The version string MUST contain only the HTTP version number (e.g.,
'1.1', '1.0').

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new protocol version.

#### `withoutHeader()` { #httpmessagetraitsmessagetrait-withoutheader }

```php
public function withoutHeader( string $name ): MessageInterface;
```

Return an instance without the specified header.

Header resolution MUST be done without case-sensitivity.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that removes
the named header.

<div class="api-group">Protected · 2</div>

#### `processBody()` { #httpmessagetraitsmessagetrait-processbody }

```php
final protected function processBody(
    mixed $body = "php://memory",
    string $mode = "r+b"
): StreamInterface;
```

Set a valid stream

#### `processProtocol()` { #httpmessagetraitsmessagetrait-processprotocol }

```php
final protected function processProtocol( string $protocol = "" ): string;
```

Checks the protocol


## Http\Message\Traits\RequestTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Traits/RequestTrait.php){ .src-btn }

Request methods

@property Headers $headers

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\Traits\RequestTrait`**

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Headers` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface` · `Phalcon\Http\Message\Uri` · `Psr\Http\Message\RequestInterface` · `Psr\Http\Message\UriInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessagetraitsrequesttrait-getmethod">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMethod</span>()</code>
</a>
<a class="api-item" href="#httpmessagetraitsrequesttrait-getrequesttarget">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRequestTarget</span>()</code>
<span class="desc">Retrieves the message&#039;s request target.</span>
</a>
<a class="api-item" href="#httpmessagetraitsrequesttrait-geturi">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">getUri</span>()</code>
<span class="desc">Returns the Uri object</span>
</a>
<a class="api-item" href="#httpmessagetraitsrequesttrait-withmethod">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">withMethod</span>( <span class="st">string</span> <span class="sv">$method</span> )</code>
<span class="desc">Return an instance with the provided HTTP method.</span>
</a>
<a class="api-item" href="#httpmessagetraitsrequesttrait-withrequesttarget">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">withRequestTarget</span>( <span class="st">string|null</span> <span class="sv">$requestTarget</span> )</code>
<span class="desc">Return an instance with the specific request-target.</span>
</a>
<a class="api-item" href="#httpmessagetraitsrequesttrait-withuri">
<code class="vis vis-public">public</code>
<code class="ret">RequestInterface</code>
<code class="sig"><span class="sf">withUri</span>(<span class="prm"><span class="st">UriInterface</span> <span class="sv">$uri</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$preserveHost</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Returns an instance with the provided URI.</span>
</a>
<a class="api-item" href="#httpmessagetraitsrequesttrait-processmethod">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">processMethod</span>( <span class="st">string</span> <span class="sv">$method</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Check the method</span>
</a>
<a class="api-item" href="#httpmessagetraitsrequesttrait-processuri">
<code class="vis vis-protected">protected</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">processUri</span>( <span class="st">mixed</span> <span class="sv">$uri</span> )</code>
<span class="desc">Sets a valid Uri</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = RequestMethodInterface::METHOD_GET</span></code>
<span class="desc">Retrieves the HTTP method of the request.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$requestTarget</span><span class="sm"> = null</span></code>
<span class="desc">The request-target, if it has been provided or calculated.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sv">$uri</span></code>
<span class="desc">Retrieves the URI instance.

This method MUST return a UriInterface instance.

@see https://tools.ietf.org/html/rfc3986#section-4.3</span>
</div>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `getMethod()` { #httpmessagetraitsrequesttrait-getmethod }

```php
public function getMethod(): string;
```

#### `getRequestTarget()` { #httpmessagetraitsrequesttrait-getrequesttarget }

```php
public function getRequestTarget(): string;
```

Retrieves the message's request target.

Retrieves the message's request-target either as it will appear (for
clients), as it appeared at request (for servers), or as it was
specified for the instance (see withRequestTarget()).

In most cases, this will be the origin-form of the composed URI, unless a
value was provided to the concrete implementation (see
withRequestTarget() below).

#### `getUri()` { #httpmessagetraitsrequesttrait-geturi }

```php
public function getUri(): UriInterface;
```

Returns the Uri object

#### `withMethod()` { #httpmessagetraitsrequesttrait-withmethod }

```php
public function withMethod( string $method ): RequestInterface;
```

Return an instance with the provided HTTP method.

While HTTP method names are typically all uppercase characters, HTTP
method names are case-sensitive and thus implementations SHOULD NOT
modify the given string.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
changed request method.

#### `withRequestTarget()` { #httpmessagetraitsrequesttrait-withrequesttarget }

```php
public function withRequestTarget( string|null $requestTarget ): RequestInterface;
```

Return an instance with the specific request-target.

If the request needs a non-origin-form request-target - e.g., for
specifying an absolute-form, authority-form, or asterisk-form -
this method may be used to create an instance with the specified
request-target, verbatim.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
changed request target.

@see https://tools.ietf.org/html/rfc7230#section-5.3 (for the various
    request-target forms allowed in request messages)

#### `withUri()` { #httpmessagetraitsrequesttrait-withuri }

```php
public function withUri(
    UriInterface $uri,
    bool $preserveHost = false
): RequestInterface;
```

Returns an instance with the provided URI.

This method MUST update the Host header of the returned request by
default if the URI contains a host component. If the URI does not
contain a host component, any pre-existing Host header MUST be carried
over to the returned request.

You can opt-in to preserving the original state of the Host header by
setting `$preserveHost` to `true`. When `$preserveHost` is set to
`true`, this method interacts with the Host header in the following
ways:

- If the Host header is missing or empty, and the new URI contains
  a host component, this method MUST update the Host header in the
  returned request.
- If the Host header is missing or empty, and the new URI does not
contain a host component, this method MUST NOT update the Host header in
the returned request.
- If a Host header is present and non-empty, this method MUST NOT update
  the Host header in the returned request.

This method MUST be implemented in such a way as to retain the
immutability of the message, and MUST return an instance that has the
new UriInterface instance.

@see https://tools.ietf.org/html/rfc3986#section-4.3

<div class="api-group">Protected · 2</div>

#### `processMethod()` { #httpmessagetraitsrequesttrait-processmethod }

```php
final protected function processMethod( string $method = "" ): string;
```

Check the method

#### `processUri()` { #httpmessagetraitsrequesttrait-processuri }

```php
final protected function processUri( mixed $uri ): UriInterface;
```

Sets a valid Uri


## Http\Message\UploadedFile

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/UploadedFile.php){ .src-btn }

UploadedFile class

<div class="api-tree" markdown>

- **`Phalcon\Http\Message\UploadedFile`** - implements [`Phalcon\Http\Message\Interfaces\UploadedFileInterface`](#httpmessageinterfacesuploadedfileinterface)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Exception\RuntimeException` · `Phalcon\Http\Message\Interfaces\StreamInterface` · `Phalcon\Http\Message\Interfaces\UploadedFileInterface` · `Phalcon\Traits\Php\FileTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageuploadedfile-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$stream</span>,</span><span class="prm"><span class="st">int|null</span> <span class="sv">$size</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$error</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$clientFilename</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$clientMediaType</span><span class="sm"> = null</span></span>)</code>
<span class="desc">UploadedFile constructor.</span>
</a>
<a class="api-item" href="#httpmessageuploadedfile-getclientfilename">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getClientFilename</span>()</code>
</a>
<a class="api-item" href="#httpmessageuploadedfile-getclientmediatype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getClientMediaType</span>()</code>
</a>
<a class="api-item" href="#httpmessageuploadedfile-geterror">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getError</span>()</code>
</a>
<a class="api-item" href="#httpmessageuploadedfile-getsize">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getSize</span>()</code>
</a>
<a class="api-item" href="#httpmessageuploadedfile-getstream">
<code class="vis vis-public">public</code>
<code class="ret">StreamInterface</code>
<code class="sig"><span class="sf">getStream</span>()</code>
<span class="desc">Retrieve a stream representing the uploaded file.</span>
</a>
<a class="api-item" href="#httpmessageuploadedfile-moveto">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">moveTo</span>( <span class="st">string</span> <span class="sv">$targetPath</span> )</code>
<span class="desc">Move the uploaded file to a new location.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `__construct()` { #httpmessageuploadedfile-__construct }

```php
public function __construct(
    mixed $stream,
    int|null $size = null,
    int $error = 0,
    string|null $clientFilename = null,
    string|null $clientMediaType = null
);
```

UploadedFile constructor.

#### `getClientFilename()` { #httpmessageuploadedfile-getclientfilename }

```php
public function getClientFilename(): string|null;
```

#### `getClientMediaType()` { #httpmessageuploadedfile-getclientmediatype }

```php
public function getClientMediaType(): string|null;
```

#### `getError()` { #httpmessageuploadedfile-geterror }

```php
public function getError(): int;
```

#### `getSize()` { #httpmessageuploadedfile-getsize }

```php
public function getSize(): int|null;
```

#### `getStream()` { #httpmessageuploadedfile-getstream }

```php
public function getStream(): StreamInterface;
```

Retrieve a stream representing the uploaded file.

This method MUST return a StreamInterface instance, representing the
uploaded file. The purpose of this method is to allow utilizing native
PHP stream functionality to manipulate the file upload, such as
stream_copy_to_stream() (though the result will need to be decorated in
a native PHP stream wrapper to work with such functions).

If the moveTo() method has been called previously, this method MUST
raise an exception.

#### `moveTo()` { #httpmessageuploadedfile-moveto }

```php
public function moveTo( string $targetPath ): void;
```

Move the uploaded file to a new location.

Use this method as an alternative to move_uploaded_file(). This method is
guaranteed to work in both SAPI and non-SAPI environments.
Implementations must determine which environment they are in, and use the
appropriate method (move_uploaded_file(), rename(), or a stream
operation) to perform the operation.

$targetPath may be an absolute path, or a relative path. If it is a
relative path, resolution should be the same as used by PHP's rename()
function.

The original file or stream MUST be removed on completion.

If this method is called more than once, any subsequent calls MUST raise
an exception.

When used in an SAPI environment where $_FILES is populated, when writing
files via moveTo(), is_uploaded_file() and move_uploaded_file() SHOULD be
used to ensure permissions and upload status are verified correctly.

If you wish to move to a stream, use getStream(), as SAPI operations
cannot guarantee writing to stream destinations.

@see https://php.net/is_uploaded_file
@see https://php.net/move_uploaded_file


## Http\Message\Uri

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Message/Uri.php){ .src-btn }

Uri

@property string   $fragment
@property string   $host
@property string   $pass
@property int|null $port
@property string   $query
@property string   $scheme
@property string   $userInfo

<div class="api-tree" markdown>

- [`Phalcon\Http\Message\AbstractCommon`](#httpmessageabstractcommon)
    - **`Phalcon\Http\Message\Uri`** - implements [`Phalcon\Http\Message\Interfaces\UriInterface`](#httpmessageinterfacesuriinterface)

</div>

__Uses__ `Phalcon\Http\Message\Exception\InvalidArgumentException` · `Phalcon\Http\Message\Interfaces\UriInterface` · `Phalcon\Traits\Support\Helper\Str\StartsWithTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpmessageuri-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$uri</span><span class="sm"> = &quot;&quot;</span> )</code>
<span class="desc">Uri constructor.</span>
</a>
<a class="api-item" href="#httpmessageuri-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Return the string representation as a URI reference.</span>
</a>
<a class="api-item" href="#httpmessageuri-getauthority">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAuthority</span>()</code>
<span class="desc">Retrieve the authority component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageuri-getfragment">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getFragment</span>()</code>
<span class="desc">Returns the fragment of the URL</span>
</a>
<a class="api-item" href="#httpmessageuri-gethost">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHost</span>()</code>
<span class="desc">Retrieve the host component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageuri-getpath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPath</span>()</code>
<span class="desc">Returns the path of the URL</span>
</a>
<a class="api-item" href="#httpmessageuri-getport">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sf">getPort</span>()</code>
<span class="desc">Retrieve the port component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageuri-getquery">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getQuery</span>()</code>
<span class="desc">Returns the query of the URL</span>
</a>
<a class="api-item" href="#httpmessageuri-getscheme">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getScheme</span>()</code>
<span class="desc">Retrieve the scheme component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageuri-getuserinfo">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getUserInfo</span>()</code>
<span class="desc">Retrieve the user information component of the URI.</span>
</a>
<a class="api-item" href="#httpmessageuri-withfragment">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withFragment</span>( <span class="st">string</span> <span class="sv">$fragment</span> )</code>
<span class="desc">Return an instance with the specified URI fragment.</span>
</a>
<a class="api-item" href="#httpmessageuri-withhost">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withHost</span>( <span class="st">string</span> <span class="sv">$host</span> )</code>
<span class="desc">Return an instance with the specified host.</span>
</a>
<a class="api-item" href="#httpmessageuri-withpath">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withPath</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
<span class="desc">Return an instance with the specified path.</span>
</a>
<a class="api-item" href="#httpmessageuri-withport">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withPort</span>( <span class="st">int|null</span> <span class="sv">$port</span> )</code>
<span class="desc">Return an instance with the specified port.</span>
</a>
<a class="api-item" href="#httpmessageuri-withquery">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withQuery</span>( <span class="st">string</span> <span class="sv">$query</span> )</code>
<span class="desc">Return an instance with the specified query string.</span>
</a>
<a class="api-item" href="#httpmessageuri-withscheme">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withScheme</span>( <span class="st">string</span> <span class="sv">$scheme</span> )</code>
<span class="desc">Return an instance with the specified scheme.</span>
</a>
<a class="api-item" href="#httpmessageuri-withuserinfo">
<code class="vis vis-public">public</code>
<code class="ret">UriInterface</code>
<code class="sig"><span class="sf">withUserInfo</span>(<span class="prm"><span class="st">string</span> <span class="sv">$user</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$password</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Return an instance with the specified user information.</span>
</a>
<a class="api-item" href="#httpmessageuri-phpparseurl">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpParseUrl</span>( <span class="st">string</span> <span class="sv">$url</span> )</code>
<span class="desc">Proxy method for parse_url for tests</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">CHAR_SUB_DELIMS</span><span class="sm"> = &quot;!$&amp;\\&#039;\\(\\)\\*\\+,;=&quot;</span></code>
<span class="desc">Sub-delimiters used in user info, query strings and fragments.

@const string</span>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">CHAR_UNRESERVED</span><span class="sm"> = &quot;a-zA-Z0-9_\\-\\.~\\pL&quot;</span></code>
<span class="desc">Unreserved characters used in user info, paths, query strings, and
fragments.

@const string</span>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$fragment</span><span class="sm"> = &quot;&quot;</span></code>
<span class="desc">Returns the fragment of the URL</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$host</span><span class="sm"> = &quot;&quot;</span></code>
<span class="desc">Retrieve the host component of the URI.

If no host is present, this method MUST return an empty string.

The value returned MUST be normalized to lowercase, per RFC 3986
Section 3.2.2.

@see https://tools.ietf.org/html/rfc3986#section-3.2.2</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$path</span><span class="sm"> = &quot;&quot;</span></code>
<span class="desc">Returns the path of the URL</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int|null</code>
<code class="sig"><span class="sv">$port</span><span class="sm"> = null</span></code>
<span class="desc">Retrieve the port component of the URI.

If a port is present, and it is non-standard for the current scheme,
this method MUST return it as an integer. If the port is the standard
port used with the current scheme, this method SHOULD return null.

If no port is present, and no scheme is present, this method MUST return
a null value.

If no port is present, but a scheme is present, this method MAY return
the standard port for that scheme, but SHOULD return null.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$query</span><span class="sm"> = &quot;&quot;</span></code>
<span class="desc">Returns the query of the URL</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$scheme</span><span class="sm"> = &quot;&quot;</span></code>
<span class="desc">Retrieve the scheme component of the URI.

If no scheme is present, this method MUST return an empty string.

The value returned MUST be normalized to lowercase, per RFC 3986
Section 3.1.

The trailing &quot;:&quot; character is not part of the scheme and MUST NOT be
added.

@see https://tools.ietf.org/html/rfc3986#section-3.1</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$userInfo</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `__construct()` { #httpmessageuri-__construct }

```php
public function __construct( string $uri = "" );
```

Uri constructor.

#### `__toString()` { #httpmessageuri-__tostring }

```php
public function __toString(): string;
```

Return the string representation as a URI reference.

Depending on which components of the URI are present, the resulting
string is either a full URI or relative reference according to RFC 3986,
Section 4.1. The method concatenates the various components of the URI,
using the appropriate delimiters

#### `getAuthority()` { #httpmessageuri-getauthority }

```php
public function getAuthority(): string;
```

Retrieve the authority component of the URI.

#### `getFragment()` { #httpmessageuri-getfragment }

```php
public function getFragment(): string;
```

Returns the fragment of the URL

#### `getHost()` { #httpmessageuri-gethost }

```php
public function getHost(): string;
```

Retrieve the host component of the URI.

If no host is present, this method MUST return an empty string.

The value returned MUST be normalized to lowercase, per RFC 3986
Section 3.2.2.

@see https://tools.ietf.org/html/rfc3986#section-3.2.2

#### `getPath()` { #httpmessageuri-getpath }

```php
public function getPath(): string;
```

Returns the path of the URL

#### `getPort()` { #httpmessageuri-getport }

```php
public function getPort(): int|null;
```

Retrieve the port component of the URI.

If a port is present, and it is non-standard for the current scheme,
this method MUST return it as an integer. If the port is the standard
port used with the current scheme, this method SHOULD return null.

If no port is present, and no scheme is present, this method MUST return
a null value.

If no port is present, but a scheme is present, this method MAY return
the standard port for that scheme, but SHOULD return null.

#### `getQuery()` { #httpmessageuri-getquery }

```php
public function getQuery(): string;
```

Returns the query of the URL

#### `getScheme()` { #httpmessageuri-getscheme }

```php
public function getScheme(): string;
```

Retrieve the scheme component of the URI.

If no scheme is present, this method MUST return an empty string.

The value returned MUST be normalized to lowercase, per RFC 3986
Section 3.1.

The trailing ":" character is not part of the scheme and MUST NOT be
added.

@see https://tools.ietf.org/html/rfc3986#section-3.1

#### `getUserInfo()` { #httpmessageuri-getuserinfo }

```php
public function getUserInfo(): string;
```

Retrieve the user information component of the URI.

If no user information is present, this method MUST return an empty
string.

If a user is present in the URI, this will return that value;
additionally, if the password is also present, it will be appended to the
user value, with a colon (":") separating the values.

The trailing "@" character is not part of the user information and MUST
NOT be added.

#### `withFragment()` { #httpmessageuri-withfragment }

```php
public function withFragment( string $fragment ): UriInterface;
```

Return an instance with the specified URI fragment.

This method MUST retain the state of the current instance, and return
an instance that contains the specified URI fragment.

Users can provide both encoded and decoded fragment characters.
Implementations ensure the correct encoding as outlined in getFragment().

An empty fragment value is equivalent to removing the fragment.

#### `withHost()` { #httpmessageuri-withhost }

```php
public function withHost( string $host ): UriInterface;
```

Return an instance with the specified host.

This method MUST retain the state of the current instance, and return
an instance that contains the specified host.

An empty host value is equivalent to removing the host.

#### `withPath()` { #httpmessageuri-withpath }

```php
public function withPath( string $path ): UriInterface;
```

Return an instance with the specified path.

This method MUST retain the state of the current instance, and return
an instance that contains the specified path.

The path can either be empty or absolute (starting with a slash) or
rootless (not starting with a slash). Implementations MUST support all
three syntaxes.

If an HTTP path is intended to be host-relative rather than path-relative
then it must begin with a slash ("/"). HTTP paths not starting with a
slash are assumed to be relative to some base path known to the
application or consumer.

Users can provide both encoded and decoded path characters.
Implementations ensure the correct encoding as outlined in getPath().

#### `withPort()` { #httpmessageuri-withport }

```php
public function withPort( int|null $port ): UriInterface;
```

Return an instance with the specified port.

This method MUST retain the state of the current instance, and return
an instance that contains the specified port.

Implementations MUST raise an exception for ports outside the
established TCP and UDP port ranges.

A null value provided for the port is equivalent to removing the port
information.

#### `withQuery()` { #httpmessageuri-withquery }

```php
public function withQuery( string $query ): UriInterface;
```

Return an instance with the specified query string.

This method MUST retain the state of the current instance, and return
an instance that contains the specified query string.

Users can provide both encoded and decoded query characters.
Implementations ensure the correct encoding as outlined in getQuery().

An empty query string value is equivalent to removing the query string.

#### `withScheme()` { #httpmessageuri-withscheme }

```php
public function withScheme( string $scheme ): UriInterface;
```

Return an instance with the specified scheme.

This method MUST retain the state of the current instance, and return
an instance that contains the specified scheme.

Implementations MUST support the schemes "http" and "https" case
insensitively, and MAY accommodate other schemes if required.

An empty scheme is equivalent to removing the scheme.

#### `withUserInfo()` { #httpmessageuri-withuserinfo }

```php
public function withUserInfo(
    string $user,
    string|null $password = null
): UriInterface;
```

Return an instance with the specified user information.

<div class="api-group">Protected · 1</div>

#### `phpParseUrl()` { #httpmessageuri-phpparseurl }

```php
protected function phpParseUrl( string $url );
```

Proxy method for parse_url for tests


## Http\Request

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request.php){ .src-btn }

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

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Http\Request`** - implements [`Phalcon\Contracts\Http\AttributeRequest`](phalcon_contracts.md#contractshttpattributerequest), [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface), [`Phalcon\Http\RequestInterface`](#httprequestinterface), [`Phalcon\Http\Message\Interfaces\RequestMethodInterface`](#httpmessageinterfacesrequestmethodinterface)

</div>

__Uses__ `Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Exception` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Filter\FilterInterface` · `Phalcon\Http\Message\Interfaces\RequestMethodInterface` · `Phalcon\Http\Request\Bag\AttributeBag` · `Phalcon\Http\Request\Exception` · `Phalcon\Http\Request\Exceptions\FilterServiceUnavailable` · `Phalcon\Http\Request\Exceptions\InvalidHost` · `Phalcon\Http\Request\Exceptions\InvalidHttpMethod` · `Phalcon\Http\Request\Exceptions\MissingFilters` · `Phalcon\Http\Request\Exceptions\SanitizerNotFound` · `Phalcon\Http\Request\File` · `Phalcon\Http\Request\FileInterface` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Traits\Php\FileTrait` · `stdClass`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequest-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
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
<span class="desc">Gets the best language accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequest-getclientaddress">
<code class="vis vis-public">public</code>
<code class="ret">bool|string</code>
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
<code class="sig"><span class="sf">getFilteredData</span>(<span class="prm"><span class="st">string</span> <span class="sv">$methodKey</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$method</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets filtered data</span>
</a>
<a class="api-item" href="#httprequest-getfilteredpatch">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getFilteredPatch</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Retrieves a patch value always sanitized with the preset filters</span>
</a>
<a class="api-item" href="#httprequest-getfilteredpost">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getFilteredPost</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Retrieves a post value always sanitized with the preset filters</span>
</a>
<a class="api-item" href="#httprequest-getfilteredput">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getFilteredPut</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Retrieves a put value always sanitized with the preset filters</span>
</a>
<a class="api-item" href="#httprequest-getfilteredquery">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getFilteredQuery</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Retrieves a query/get value always sanitized with the preset filters</span>
</a>
<a class="api-item" href="#httprequest-gethttpreferer">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHTTPReferer</span>()</code>
<span class="desc">Gets web page that refers active request. ie: https://www.google.com</span>
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
<code class="ret">array|bool|stdClass</code>
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
<code class="sig"><span class="sf">getPatch</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
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
<code class="sig"><span class="sf">getPost</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
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
<code class="sig"><span class="sf">getPut</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a variable from put request</span>
</a>
<a class="api-item" href="#httprequest-getquery">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getQuery</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets variable from $_GET superglobal applying filters if needed.</span>
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
<code class="ret">array</code>
<code class="sig"><span class="sf">getUploadedFiles</span>(<span class="prm"><span class="st">bool</span> <span class="sv">$onlySuccessful</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$namedKeys</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets attached files as Phalcon\Http\Request\File instances</span>
</a>
<a class="api-item" href="#httprequest-getuseragent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getUserAgent</span>()</code>
<span class="desc">Gets HTTP user agent used to make the request</span>
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
<code class="ret">int</code>
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
<code class="sig"><span class="sf">getHelper</span>(<span class="prm"><span class="st">array</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Helper to get data from superglobals, applying filters if needed.</span>
</a>
<a class="api-item" href="#httprequest-getqualityheader">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getQualityHeader</span>(<span class="prm"><span class="st">string</span> <span class="sv">$serverIndex</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$name</span></span>)</code>
<span class="desc">Process a request header and return an array of values with their</span>
</a>
<a class="api-item" href="#httprequest-hasfilehelper">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
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
<code class="sig"><span class="sf">smoothFiles</span>(<span class="prm"><span class="st">array</span> <span class="sv">$names</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$types</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$tmpNames</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$sizes</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$errors</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$prefix</span></span>)</code>
<span class="desc">Smooth out $_FILES as a one dimension array with all files uploaded</span>
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

#### `get()` { #httprequest-get }

```php
public function get(
    string|null $name = null,
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

#### `getAcceptableContent()` { #httprequest-getacceptablecontent }

```php
public function getAcceptableContent(): array;
```

Gets an array with mime/types and their quality accepted by the
browser/client from _SERVER["HTTP_ACCEPT"]

#### `getAttributes()` { #httprequest-getattributes }

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

#### `getBasicAuth()` { #httprequest-getbasicauth }

```php
public function getBasicAuth(): array|null;
```

Gets auth info accepted by the browser/client from
$_SERVER["PHP_AUTH_USER"]

#### `getBestAccept()` { #httprequest-getbestaccept }

```php
public function getBestAccept(): string;
```

Gets best mime/type accepted by the browser/client from
_SERVER["HTTP_ACCEPT"]

#### `getBestCharset()` { #httprequest-getbestcharset }

```php
public function getBestCharset(): string;
```

Gets best charset accepted by the browser/client from
_SERVER["HTTP_ACCEPT_CHARSET"]

#### `getBestLanguage()` { #httprequest-getbestlanguage }

```php
public function getBestLanguage(): string;
```

Gets the best language accepted by the browser/client from
_SERVER["HTTP_ACCEPT_LANGUAGE"]

#### `getClientAddress()` { #httprequest-getclientaddress }

```php
public function getClientAddress( bool $trustForwardedHeader = false ): bool|string;
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

#### `getClientCharsets()` { #httprequest-getclientcharsets }

```php
public function getClientCharsets(): array;
```

Gets a charsets array and their quality accepted by the browser/client
from _SERVER["HTTP_ACCEPT_CHARSET"]

#### `getContentType()` { #httprequest-getcontenttype }

```php
public function getContentType(): string|null;
```

Gets content type which request has been made

#### `getDigestAuth()` { #httprequest-getdigestauth }

```php
public function getDigestAuth(): array;
```

Gets auth info accepted by the browser/client from
$_SERVER["PHP_AUTH_DIGEST"]

#### `getFilteredData()` { #httprequest-getfiltereddata }

```php
public function getFilteredData(
    string $methodKey,
    string $method,
    string|null $name = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
): mixed;
```

Gets filtered data

#### `getFilteredPatch()` { #httprequest-getfilteredpatch }

```php
public function getFilteredPatch(
    string|null $name = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
): mixed;
```

Retrieves a patch value always sanitized with the preset filters

#### `getFilteredPost()` { #httprequest-getfilteredpost }

```php
public function getFilteredPost(
    string|null $name = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
): mixed;
```

Retrieves a post value always sanitized with the preset filters

#### `getFilteredPut()` { #httprequest-getfilteredput }

```php
public function getFilteredPut(
    string|null $name = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
): mixed;
```

Retrieves a put value always sanitized with the preset filters

#### `getFilteredQuery()` { #httprequest-getfilteredquery }

```php
public function getFilteredQuery(
    string|null $name = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
): mixed;
```

Retrieves a query/get value always sanitized with the preset filters

#### `getHTTPReferer()` { #httprequest-gethttpreferer }

```php
public function getHTTPReferer(): string;
```

Gets web page that refers active request. ie: https://www.google.com

#### `getHeader()` { #httprequest-getheader }

```php
public function getHeader( string $header ): string;
```

Gets HTTP header from request data

#### `getHeaders()` { #httprequest-getheaders }

```php
public function getHeaders(): array;
```

Returns the available headers in the request

<code>
$_SERVER = [
    "PHP_AUTH_USER" => "phalcon",
    "PHP_AUTH_PW"   => "secret",
];

$headers = $request->getHeaders();

echo $headers["Authorization"]; // Basic cGhhbGNvbjpzZWNyZXQ=
</code>

#### `getHttpHost()` { #httprequest-gethttphost }

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

#### `getHttpMethodParameterOverride()` { #httprequest-gethttpmethodparameteroverride }

```php
public function getHttpMethodParameterOverride(): bool;
```

Return the HTTP method parameter override flag

#### `getJsonRawBody()` { #httprequest-getjsonrawbody }

```php
public function getJsonRawBody( bool $associative = false ): array|bool|stdClass;
```

Gets decoded JSON HTTP raw request body

#### `getLanguages()` { #httprequest-getlanguages }

```php
public function getLanguages(): array;
```

Gets languages array and their quality accepted by the browser/client
from _SERVER["HTTP_ACCEPT_LANGUAGE"]

#### `getMethod()` { #httprequest-getmethod }

```php
public function getMethod(): string;
```

Gets HTTP method which request has been made

If the X-HTTP-Method-Override header is set, and if the method is a POST,
then it is used to determine the "real" intended HTTP method.

The _method request parameter can also be used to determine the HTTP
method, but only if setHttpMethodParameterOverride(true) has been called.

The method is always an uppercased string.

#### `getPatch()` { #httprequest-getpatch }

```php
public function getPatch(
    string|null $name = null,
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

#### `getPort()` { #httprequest-getport }

```php
public function getPort(): int;
```

Gets information about the port on which the request is made.

#### `getPost()` { #httprequest-getpost }

```php
public function getPost(
    string|null $name = null,
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

#### `getPreferredIsoLocaleVariant()` { #httprequest-getpreferredisolocalevariant }

```php
public function getPreferredIsoLocaleVariant(): string;
```

Gets the preferred ISO locale variant.

Gets the preferred locale accepted by the client from the
"Accept-Language" request HTTP header and returns the
base part of it i.e. `en` instead of `en-US`.

Note: This method relies on the `$_SERVER["HTTP_ACCEPT_LANGUAGE"]`
header.

@link https://www.iso.org/standard/50707.html

#### `getPut()` { #httprequest-getput }

```php
public function getPut(
    string|null $name = null,
    mixed $filters = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
): mixed;
```

Gets a variable from put request

```php
// Returns value from $_PUT["user_email"] without sanitizing
$userEmail = $request->getPut("user_email");

// Returns value from $_PUT["user_email"] with sanitizing
$userEmail = $request->getPut("user_email", "email");
```

#### `getQuery()` { #httprequest-getquery }

```php
public function getQuery(
    string|null $name = null,
    mixed $filters = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
): mixed;
```

Gets variable from $_GET superglobal applying filters if needed.
If no parameters are given the $_GET superglobal is returned

```php
// Returns value from $_GET["id"] without sanitizing
$id = $request->getQuery("id");

// Returns value from $_GET["id"] with sanitizing
$id = $request->getQuery("id", "int");

// Returns value from $_GET["id"] with a default value
$id = $request->getQuery("id", null, 150);
```

#### `getRawBody()` { #httprequest-getrawbody }

```php
public function getRawBody(): string;
```

Gets HTTP raw request body

#### `getScheme()` { #httprequest-getscheme }

```php
public function getScheme(): string;
```

Gets HTTP schema (http/https)

#### `getServer()` { #httprequest-getserver }

```php
public function getServer( string $name ): string|null;
```

Gets variable from $_SERVER superglobal

#### `getServerAddress()` { #httprequest-getserveraddress }

```php
public function getServerAddress(): string;
```

Gets active server address IP

#### `getServerName()` { #httprequest-getservername }

```php
public function getServerName(): string;
```

Gets active server name

#### `getURI()` { #httprequest-geturi }

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

#### `getUploadedFiles()` { #httprequest-getuploadedfiles }

```php
public function getUploadedFiles(
    bool $onlySuccessful = false,
    bool $namedKeys = false
): array;
```

Gets attached files as Phalcon\Http\Request\File instances

#### `getUserAgent()` { #httprequest-getuseragent }

```php
public function getUserAgent(): string;
```

Gets HTTP user agent used to make the request

#### `has()` { #httprequest-has }

```php
public function has( string $name ): bool;
```

Checks whether $_REQUEST superglobal has certain index

#### `hasFiles()` { #httprequest-hasfiles }

```php
public function hasFiles(): bool;
```

Returns if the request has files or not

#### `hasHeader()` { #httprequest-hasheader }

```php
final public function hasHeader( string $header ): bool;
```

Checks whether headers has certain index

#### `hasPatch()` { #httprequest-haspatch }

```php
public function hasPatch( string $name ): bool;
```

Checks whether the PATCH data has certain index

#### `hasPost()` { #httprequest-haspost }

```php
public function hasPost( string $name ): bool;
```

Checks whether $_POST superglobal has certain index

#### `hasPut()` { #httprequest-hasput }

```php
public function hasPut( string $name ): bool;
```

Checks whether the PUT data has certain index

#### `hasQuery()` { #httprequest-hasquery }

```php
public function hasQuery( string $name ): bool;
```

Checks whether $_GET superglobal has certain index

#### `hasServer()` { #httprequest-hasserver }

```php
final public function hasServer( string $name ): bool;
```

Checks whether $_SERVER superglobal has certain index

#### `isAjax()` { #httprequest-isajax }

```php
public function isAjax(): bool;
```

Checks whether request has been made using ajax

#### `isConnect()` { #httprequest-isconnect }

```php
public function isConnect(): bool;
```

Checks whether HTTP method is CONNECT.
if _SERVER["REQUEST_METHOD"]==="CONNECT"

#### `isDelete()` { #httprequest-isdelete }

```php
public function isDelete(): bool;
```

Checks whether HTTP method is DELETE.
if _SERVER["REQUEST_METHOD"]==="DELETE"

#### `isGet()` { #httprequest-isget }

```php
public function isGet(): bool;
```

Checks whether HTTP method is GET.
if _SERVER["REQUEST_METHOD"]==="GET"

#### `isHead()` { #httprequest-ishead }

```php
public function isHead(): bool;
```

Checks whether HTTP method is HEAD.
if _SERVER["REQUEST_METHOD"]==="HEAD"

#### `isJson()` { #httprequest-isjson }

```php
public function isJson(): bool;
```

Checks whether request content type contains json data

#### `isMethod()` { #httprequest-ismethod }

```php
public function isMethod(
    mixed $methods,
    bool $strict = false
): bool;
```

Check if HTTP method match any of the passed methods
When strict is true it checks if validated methods are real HTTP methods

#### `isOptions()` { #httprequest-isoptions }

```php
public function isOptions(): bool;
```

Checks whether HTTP method is OPTIONS.
if _SERVER["REQUEST_METHOD"]==="OPTIONS"

#### `isPatch()` { #httprequest-ispatch }

```php
public function isPatch(): bool;
```

Checks whether HTTP method is PATCH.
if _SERVER["REQUEST_METHOD"]==="PATCH"

#### `isPost()` { #httprequest-ispost }

```php
public function isPost(): bool;
```

Checks whether HTTP method is POST.
if _SERVER["REQUEST_METHOD"]==="POST"

#### `isPurge()` { #httprequest-ispurge }

```php
public function isPurge(): bool;
```

Checks whether HTTP method is PURGE (Squid and Varnish support).
if _SERVER["REQUEST_METHOD"]==="PURGE"

#### `isPut()` { #httprequest-isput }

```php
public function isPut(): bool;
```

Checks whether HTTP method is PUT.
if _SERVER["REQUEST_METHOD"]==="PUT"

#### `isSecure()` { #httprequest-issecure }

```php
public function isSecure(): bool;
```

Checks whether request has been made using any secure layer

#### `isSoap()` { #httprequest-issoap }

```php
public function isSoap(): bool;
```

Checks whether request has been made using SOAP

#### `isStrictHostCheck()` { #httprequest-isstricthostcheck }

```php
public function isStrictHostCheck(): bool;
```

Checks if the `Request::getHttpHost` method will be use strict validation
of host name or not

#### `isTrace()` { #httprequest-istrace }

```php
public function isTrace(): bool;
```

Checks whether HTTP method is TRACE.
if _SERVER["REQUEST_METHOD"]==="TRACE"

#### `isValidHttpMethod()` { #httprequest-isvalidhttpmethod }

```php
public function isValidHttpMethod( string $method ): bool;
```

Checks if a method is a valid HTTP method

#### `numFiles()` { #httprequest-numfiles }

```php
public function numFiles( bool $onlySuccessful = false ): int;
```

Returns the number of files available

#### `setHttpMethodParameterOverride()` { #httprequest-sethttpmethodparameteroverride }

```php
public function setHttpMethodParameterOverride( bool $override ): static;
```

Set the HTTP method parameter override flag

#### `setParameterFilters()` { #httprequest-setparameterfilters }

```php
public function setParameterFilters(
    string $name,
    array $filters = [],
    array $scope = []
): static;
```

Sets automatic sanitizers/filters for a particular field and for
particular methods

#### `setStrictHostCheck()` { #httprequest-setstricthostcheck }

```php
public function setStrictHostCheck( bool $flag = true ): static;
```

Sets if the `Request::getHttpHost` method must be use strict validation
of host name or not

#### `setTrustedProxies()` { #httprequest-settrustedproxies }

```php
public function setTrustedProxies( array $trustedProxies ): static;
```

Set a trusted proxy list for X-Forwarded-For header

#### `setTrustedProxyHeader()` { #httprequest-settrustedproxyheader }

```php
public function setTrustedProxyHeader( string $trustedProxyHeader ): static;
```

This header takes priority when parsing HTTP headers
The header return only 1 single IP address, prefixed with HTTP_ eg. HTTP_CLIENT_IP.

<div class="api-group">Protected · 7</div>

#### `getBestQuality()` { #httprequest-getbestquality }

```php
protected function getBestQuality(
    array $qualityParts,
    string $name
): string;
```

Process a request header and return the one with best quality

#### `getHelper()` { #httprequest-gethelper }

```php
protected function getHelper(
    array $source,
    string|null $name = null,
    mixed $filters = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
): mixed;
```

Helper to get data from superglobals, applying filters if needed.
If no parameters are given the superglobal is returned.

#### `getQualityHeader()` { #httprequest-getqualityheader }

```php
protected function getQualityHeader(
    string $serverIndex,
    string $name
): array;
```

Process a request header and return an array of values with their
qualities

#### `hasFileHelper()` { #httprequest-hasfilehelper }

```php
protected function hasFileHelper(
    mixed $data,
    bool $onlySuccessful
): int;
```

Recursively counts file in an array of files

#### `isIpAddressInCIDR()` { #httprequest-isipaddressincidr }

```php
protected function isIpAddressInCIDR(
    string $ip,
    string $cidr
): bool;
```

Check if an IP address exists in CIDR range

#### `resolveAuthorizationHeaders()` { #httprequest-resolveauthorizationheaders }

```php
protected function resolveAuthorizationHeaders(): array;
```

Resolve authorization headers.

#### `smoothFiles()` { #httprequest-smoothfiles }

```php
protected function smoothFiles(
    array $names,
    array $types,
    array $tmpNames,
    array $sizes,
    array $errors,
    string $prefix
): array;
```

Smooth out $_FILES as a one dimension array with all files uploaded


## Http\RequestInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/RequestInterface.php){ .src-btn }

Interface for Phalcon\Http\Request

<div class="api-tree" markdown>

- **`Phalcon\Http\RequestInterface`**
    - [`Phalcon\Contracts\Http\AttributeRequest`](phalcon_contracts.md#contractshttpattributerequest)

</div>

__Uses__ `Phalcon\Http\Request\FileInterface` · `stdClass`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Gets a variable from the $_REQUEST superglobal applying filters if</span>
</a>
<a class="api-item" href="#httprequestinterface-getacceptablecontent">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAcceptableContent</span>()</code>
<span class="desc">Return an array with mime/types and their quality accepted by the</span>
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
<span class="desc">Return the best mime/type accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequestinterface-getbestcharset">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBestCharset</span>()</code>
<span class="desc">Return the best charset accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequestinterface-getbestlanguage">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getBestLanguage</span>()</code>
<span class="desc">Return the best language accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequestinterface-getclientaddress">
<code class="vis vis-public">public</code>
<code class="ret">bool|string</code>
<code class="sig"><span class="sf">getClientAddress</span>( <span class="st">bool</span> <span class="sv">$trustForwardedHeader</span><span class="sm"> = false</span> )</code>
<span class="desc">Return the most possible client IPv4 Address. This method searches in</span>
</a>
<a class="api-item" href="#httprequestinterface-getclientcharsets">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getClientCharsets</span>()</code>
<span class="desc">Return a charset array and their quality accepted by the browser/client</span>
</a>
<a class="api-item" href="#httprequestinterface-getcontenttype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getContentType</span>()</code>
<span class="desc">Return the content type which request has been made</span>
</a>
<a class="api-item" href="#httprequestinterface-getdigestauth">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getDigestAuth</span>()</code>
<span class="desc">Return the auth info accepted by the browser/client from</span>
</a>
<a class="api-item" href="#httprequestinterface-gethttpreferer">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHTTPReferer</span>()</code>
<span class="desc">Return the web page that refers active request. ie: https://phalcon.io</span>
</a>
<a class="api-item" href="#httprequestinterface-getheader">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHeader</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Return the HTTP header from request data</span>
</a>
<a class="api-item" href="#httprequestinterface-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getHeaders</span>()</code>
<span class="desc">Return the available headers in the request</span>
</a>
<a class="api-item" href="#httprequestinterface-gethttphost">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHttpHost</span>()</code>
<span class="desc">Return the host name used by the request.</span>
</a>
<a class="api-item" href="#httprequestinterface-getjsonrawbody">
<code class="vis vis-public">public</code>
<code class="ret">array|bool|stdClass</code>
<code class="sig"><span class="sf">getJsonRawBody</span>( <span class="st">bool</span> <span class="sv">$associative</span><span class="sm"> = false</span> )</code>
<span class="desc">Return the decoded JSON HTTP raw request body</span>
</a>
<a class="api-item" href="#httprequestinterface-getlanguages">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getLanguages</span>()</code>
<span class="desc">Return the languages array and their quality accepted by the</span>
</a>
<a class="api-item" href="#httprequestinterface-getmethod">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMethod</span>()</code>
<span class="desc">Return the HTTP method which request has been made</span>
</a>
<a class="api-item" href="#httprequestinterface-getport">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getPort</span>()</code>
<span class="desc">Return the information about the port on which the request is made</span>
</a>
<a class="api-item" href="#httprequestinterface-getpost">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getPost</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Return a variable from the $_POST superglobal applying filters if needed.</span>
</a>
<a class="api-item" href="#httprequestinterface-getput">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getPut</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Return a variable from put request</span>
</a>
<a class="api-item" href="#httprequestinterface-getquery">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getQuery</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$name</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$notAllowEmpty</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Return a variable from $_GET superglobal applying filters if needed.</span>
</a>
<a class="api-item" href="#httprequestinterface-getrawbody">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRawBody</span>()</code>
<span class="desc">Return the HTTP raw request body</span>
</a>
<a class="api-item" href="#httprequestinterface-getscheme">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getScheme</span>()</code>
<span class="desc">Return the HTTP schema (http/https)</span>
</a>
<a class="api-item" href="#httprequestinterface-getserver">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getServer</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return a variable from $_SERVER superglobal</span>
</a>
<a class="api-item" href="#httprequestinterface-getserveraddress">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getServerAddress</span>()</code>
<span class="desc">Return the active server address IP</span>
</a>
<a class="api-item" href="#httprequestinterface-getservername">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getServerName</span>()</code>
<span class="desc">Return the active server name</span>
</a>
<a class="api-item" href="#httprequestinterface-geturi">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getURI</span>( <span class="st">bool</span> <span class="sv">$onlyPath</span><span class="sm"> = false</span> )</code>
<span class="desc">Return the HTTP URI which request has been made to</span>
</a>
<a class="api-item" href="#httprequestinterface-getuploadedfiles">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getUploadedFiles</span>(<span class="prm"><span class="st">bool</span> <span class="sv">$onlySuccessful</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$namedKeys</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Return the attached files as Phalcon\Http\Request\FileInterface</span>
</a>
<a class="api-item" href="#httprequestinterface-getuseragent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getUserAgent</span>()</code>
<span class="desc">Return the HTTP user agent used to make the request</span>
</a>
<a class="api-item" href="#httprequestinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return whether the $_REQUEST superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-hasfiles">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasFiles</span>()</code>
<span class="desc">Return whether the request includes attached files</span>
</a>
<a class="api-item" href="#httprequestinterface-hasheader">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasHeader</span>( <span class="st">string</span> <span class="sv">$header</span> )</code>
<span class="desc">Return whether the headers have a certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-haspost">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasPost</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return whether the $_POST superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-hasput">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasPut</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return whether the PUT data has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-hasquery">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasQuery</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return whether the $_GET superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-hasserver">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasServer</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Return whether the $_SERVER superglobal has certain index</span>
</a>
<a class="api-item" href="#httprequestinterface-isajax">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAjax</span>()</code>
<span class="desc">Return whether the request has been made using ajax. Checks if</span>
</a>
<a class="api-item" href="#httprequestinterface-isconnect">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isConnect</span>()</code>
<span class="desc">Return whether the HTTP method is CONNECT. if</span>
</a>
<a class="api-item" href="#httprequestinterface-isdelete">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isDelete</span>()</code>
<span class="desc">Return whether the HTTP method is DELETE. if</span>
</a>
<a class="api-item" href="#httprequestinterface-isget">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isGet</span>()</code>
<span class="desc">Return whether the HTTP method is GET. if</span>
</a>
<a class="api-item" href="#httprequestinterface-ishead">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isHead</span>()</code>
<span class="desc">Return whether the HTTP method is HEAD. if</span>
</a>
<a class="api-item" href="#httprequestinterface-ismethod">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isMethod</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$methods</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$strict</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Return if the current HTTP method matches any of the passed methods</span>
</a>
<a class="api-item" href="#httprequestinterface-isoptions">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isOptions</span>()</code>
<span class="desc">Return whether the HTTP method is OPTIONS. if</span>
</a>
<a class="api-item" href="#httprequestinterface-ispost">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPost</span>()</code>
<span class="desc">Return whether the HTTP method is POST. if</span>
</a>
<a class="api-item" href="#httprequestinterface-ispurge">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPurge</span>()</code>
<span class="desc">Return whether the HTTP method is PURGE (Squid and Varnish support). if</span>
</a>
<a class="api-item" href="#httprequestinterface-isput">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isPut</span>()</code>
<span class="desc">Return whether the HTTP method is PUT. if</span>
</a>
<a class="api-item" href="#httprequestinterface-issecure">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSecure</span>()</code>
<span class="desc">Return whether the request has been made using any secure layer</span>
</a>
<a class="api-item" href="#httprequestinterface-issoap">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isSoap</span>()</code>
<span class="desc">Return whether the request has been made using SOAP</span>
</a>
<a class="api-item" href="#httprequestinterface-istrace">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isTrace</span>()</code>
<span class="desc">Return whether the HTTP method is TRACE.</span>
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

#### `get()` { #httprequestinterface-get }

```php
public function get(
    string|null $name = null,
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

#### `getAcceptableContent()` { #httprequestinterface-getacceptablecontent }

```php
public function getAcceptableContent(): array;
```

Return an array with mime/types and their quality accepted by the
browser/client from _SERVER["HTTP_ACCEPT"]

#### `getBasicAuth()` { #httprequestinterface-getbasicauth }

```php
public function getBasicAuth(): array|null;
```

Gets auth info accepted by the browser/client from
$_SERVER["PHP_AUTH_USER"]

#### `getBestAccept()` { #httprequestinterface-getbestaccept }

```php
public function getBestAccept(): string;
```

Return the best mime/type accepted by the browser/client from
_SERVER["HTTP_ACCEPT"]

#### `getBestCharset()` { #httprequestinterface-getbestcharset }

```php
public function getBestCharset(): string;
```

Return the best charset accepted by the browser/client from
_SERVER["HTTP_ACCEPT_CHARSET"]

#### `getBestLanguage()` { #httprequestinterface-getbestlanguage }

```php
public function getBestLanguage(): string;
```

Return the best language accepted by the browser/client from
_SERVER["HTTP_ACCEPT_LANGUAGE"]

#### `getClientAddress()` { #httprequestinterface-getclientaddress }

```php
public function getClientAddress( bool $trustForwardedHeader = false ): bool|string;
```

Return the most possible client IPv4 Address. This method searches in
$_SERVER["REMOTE_ADDR"] and optionally in
$_SERVER["HTTP_X_FORWARDED_FOR"]

#### `getClientCharsets()` { #httprequestinterface-getclientcharsets }

```php
public function getClientCharsets(): array;
```

Return a charset array and their quality accepted by the browser/client
from _SERVER["HTTP_ACCEPT_CHARSET"]

#### `getContentType()` { #httprequestinterface-getcontenttype }

```php
public function getContentType(): string|null;
```

Return the content type which request has been made

#### `getDigestAuth()` { #httprequestinterface-getdigestauth }

```php
public function getDigestAuth(): array;
```

Return the auth info accepted by the browser/client from
$_SERVER["PHP_AUTH_DIGEST"]

#### `getHTTPReferer()` { #httprequestinterface-gethttpreferer }

```php
public function getHTTPReferer(): string;
```

Return the web page that refers active request. ie: https://phalcon.io

#### `getHeader()` { #httprequestinterface-getheader }

```php
public function getHeader( string $header ): string;
```

Return the HTTP header from request data

#### `getHeaders()` { #httprequestinterface-getheaders }

```php
public function getHeaders(): array;
```

Return the available headers in the request

```php
$_SERVER = [
    "PHP_AUTH_USER" => "phalcon",
    "PHP_AUTH_PW"   => "secret",
];

$headers = $request->getHeaders();

echo $headers["Authorization"]; // Basic cGhhbGNvbjpzZWNyZXQ=
```

#### `getHttpHost()` { #httprequestinterface-gethttphost }

```php
public function getHttpHost(): string;
```

Return the host name used by the request.

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

#### `getJsonRawBody()` { #httprequestinterface-getjsonrawbody }

```php
public function getJsonRawBody( bool $associative = false ): array|bool|stdClass;
```

Return the decoded JSON HTTP raw request body

#### `getLanguages()` { #httprequestinterface-getlanguages }

```php
public function getLanguages(): array;
```

Return the languages array and their quality accepted by the
browser/client from _SERVER["HTTP_ACCEPT_LANGUAGE"]

#### `getMethod()` { #httprequestinterface-getmethod }

```php
public function getMethod(): string;
```

Return the HTTP method which request has been made

If the X-HTTP-Method-Override header is set, and if the method is a POST,
then it is used to determine the "real" intended HTTP method.

The _method request parameter can also be used to determine the HTTP
method, but only if setHttpMethodParameterOverride(true) has been called.

The method is always an uppercased string.

#### `getPort()` { #httprequestinterface-getport }

```php
public function getPort(): int;
```

Return the information about the port on which the request is made

#### `getPost()` { #httprequestinterface-getpost }

```php
public function getPost(
    string|null $name = null,
    mixed $filters = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
): mixed;
```

Return a variable from the $_POST superglobal applying filters if needed.
If no parameters are given the $_POST superglobal is returned

```php
// Returns value from $_POST["user_email"] without sanitizing
$userEmail = $request->getPost("user_email");

// Returns value from $_POST["user_email"] with sanitizing
$userEmail = $request->getPost("user_email", "email");
```

#### `getPut()` { #httprequestinterface-getput }

```php
public function getPut(
    string|null $name = null,
    mixed $filters = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
);
```

Return a variable from put request

```php
// Returns value from $_PUT["user_email"] without sanitizing
$userEmail = $request->getPut("user_email");

// Returns value from $_PUT["user_email"] with sanitizing
$userEmail = $request->getPut("user_email", "email");
```

#### `getQuery()` { #httprequestinterface-getquery }

```php
public function getQuery(
    string|null $name = null,
    mixed $filters = null,
    mixed $defaultValue = null,
    bool $notAllowEmpty = false,
    bool $noRecursive = false
);
```

Return a variable from $_GET superglobal applying filters if needed.
If no parameters are given the $_GET superglobal is returned

```php
// Returns value from $_GET["id"] without sanitizing
$id = $request->getQuery("id");

// Returns value from $_GET["id"] with sanitizing
$id = $request->getQuery("id", "int");

// Returns value from $_GET["id"] with a default value
$id = $request->getQuery("id", null, 150);
```

#### `getRawBody()` { #httprequestinterface-getrawbody }

```php
public function getRawBody(): string;
```

Return the HTTP raw request body

#### `getScheme()` { #httprequestinterface-getscheme }

```php
public function getScheme(): string;
```

Return the HTTP schema (http/https)

#### `getServer()` { #httprequestinterface-getserver }

```php
public function getServer( string $name ): string|null;
```

Return a variable from $_SERVER superglobal

#### `getServerAddress()` { #httprequestinterface-getserveraddress }

```php
public function getServerAddress(): string;
```

Return the active server address IP

#### `getServerName()` { #httprequestinterface-getservername }

```php
public function getServerName(): string;
```

Return the active server name

#### `getURI()` { #httprequestinterface-geturi }

```php
public function getURI( bool $onlyPath = false ): string;
```

Return the HTTP URI which request has been made to

```php
// Returns /some/path?with=queryParams
$uri = $request->getURI();

// Returns /some/path
$uri = $request->getURI(true);
```

#### `getUploadedFiles()` { #httprequestinterface-getuploadedfiles }

```php
public function getUploadedFiles(
    bool $onlySuccessful = false,
    bool $namedKeys = false
): array;
```

Return the attached files as Phalcon\Http\Request\FileInterface
compatible instances

#### `getUserAgent()` { #httprequestinterface-getuseragent }

```php
public function getUserAgent(): string;
```

Return the HTTP user agent used to make the request

#### `has()` { #httprequestinterface-has }

```php
public function has( string $name ): bool;
```

Return whether the $_REQUEST superglobal has certain index

#### `hasFiles()` { #httprequestinterface-hasfiles }

```php
public function hasFiles(): bool;
```

Return whether the request includes attached files

#### `hasHeader()` { #httprequestinterface-hasheader }

```php
public function hasHeader( string $header ): bool;
```

Return whether the headers have a certain index

#### `hasPost()` { #httprequestinterface-haspost }

```php
public function hasPost( string $name ): bool;
```

Return whether the $_POST superglobal has certain index

#### `hasPut()` { #httprequestinterface-hasput }

```php
public function hasPut( string $name ): bool;
```

Return whether the PUT data has certain index

#### `hasQuery()` { #httprequestinterface-hasquery }

```php
public function hasQuery( string $name ): bool;
```

Return whether the $_GET superglobal has certain index

#### `hasServer()` { #httprequestinterface-hasserver }

```php
public function hasServer( string $name ): bool;
```

Return whether the $_SERVER superglobal has certain index

#### `isAjax()` { #httprequestinterface-isajax }

```php
public function isAjax(): bool;
```

Return whether the request has been made using ajax. Checks if
$_SERVER["HTTP_X_REQUESTED_WITH"] === "XMLHttpRequest"

#### `isConnect()` { #httprequestinterface-isconnect }

```php
public function isConnect(): bool;
```

Return whether the HTTP method is CONNECT. if
$_SERVER["REQUEST_METHOD"] === "CONNECT"

#### `isDelete()` { #httprequestinterface-isdelete }

```php
public function isDelete(): bool;
```

Return whether the HTTP method is DELETE. if
$_SERVER["REQUEST_METHOD"] === "DELETE"

#### `isGet()` { #httprequestinterface-isget }

```php
public function isGet(): bool;
```

Return whether the HTTP method is GET. if
$_SERVER["REQUEST_METHOD"] === "GET"

#### `isHead()` { #httprequestinterface-ishead }

```php
public function isHead(): bool;
```

Return whether the HTTP method is HEAD. if
$_SERVER["REQUEST_METHOD"] === "HEAD"

#### `isMethod()` { #httprequestinterface-ismethod }

```php
public function isMethod(
    mixed $methods,
    bool $strict = false
): bool;
```

Return if the current HTTP method matches any of the passed methods

#### `isOptions()` { #httprequestinterface-isoptions }

```php
public function isOptions(): bool;
```

Return whether the HTTP method is OPTIONS. if
$_SERVER["REQUEST_METHOD"] === "OPTIONS"

#### `isPost()` { #httprequestinterface-ispost }

```php
public function isPost(): bool;
```

Return whether the HTTP method is POST. if
$_SERVER["REQUEST_METHOD"] === "POST"

#### `isPurge()` { #httprequestinterface-ispurge }

```php
public function isPurge(): bool;
```

Return whether the HTTP method is PURGE (Squid and Varnish support). if
$_SERVER["REQUEST_METHOD"] === "PURGE"

#### `isPut()` { #httprequestinterface-isput }

```php
public function isPut(): bool;
```

Return whether the HTTP method is PUT. if
$_SERVER["REQUEST_METHOD"] === "PUT"

#### `isSecure()` { #httprequestinterface-issecure }

```php
public function isSecure(): bool;
```

Return whether the request has been made using any secure layer

#### `isSoap()` { #httprequestinterface-issoap }

```php
public function isSoap(): bool;
```

Return whether the request has been made using SOAP

#### `isTrace()` { #httprequestinterface-istrace }

```php
public function isTrace(): bool;
```

Return whether the HTTP method is TRACE.
if $_SERVER["REQUEST_METHOD"] === "TRACE"

#### `numFiles()` { #httprequestinterface-numfiles }

```php
public function numFiles( bool $onlySuccessful = false ): int;
```

Returns the number of files available


## Http\Request\Bag\AbstractBag

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/Bag/AbstractBag.php){ .src-btn }

Shared base for the HTTP request bags. A bag is a string- or integer-keyed value store
backed by a raw array, exposing `get/has/set/remove/all` plus typed readers
for cast-with-default access.

Two protected hooks (`normalizeKey`, `normalizeItems`) let subclasses
change key handling without restating the surface.

The ArrayAccess append form (`$bag[] = $value`) is rejected with a
NullKeyException: the append form supplies no explicit key, so the write
could never be addressed by the caller.

<div class="api-tree" markdown>

- **`Phalcon\Http\Request\Bag\AbstractBag`** - implements `\ArrayAccess`, `\Countable`, `\IteratorAggregate`
    - [`Phalcon\Http\Request\Bag\AttributeBag`](#httprequestbagattributebag)

</div>

__Uses__ `ArrayAccess` · `ArrayIterator` · `Countable` · `IteratorAggregate` · `Phalcon\Http\Request\Exceptions\NullKeyException` · `Traversable`
{ .api-uses }

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
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">int|string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns an element of the bag, or the default value if it is not set</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-getarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getArray</span>(<span class="prm"><span class="st">int|string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$defaultValue</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns an element of the bag as an array. The default value is</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-getbool">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getBool</span>(<span class="prm"><span class="st">int|string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$defaultValue</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Returns an element of the bag cast to bool, or the default value if</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-getfloat">
<code class="vis vis-public">public</code>
<code class="ret">float</code>
<code class="sig"><span class="sf">getFloat</span>(<span class="prm"><span class="st">int|string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">float</span> <span class="sv">$defaultValue</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Returns an element of the bag cast to float, or the default value if</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-getint">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getInt</span>(<span class="prm"><span class="st">int|string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$defaultValue</span><span class="sm"> = 0</span></span>)</code>
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
<code class="sig"><span class="sf">getString</span>(<span class="prm"><span class="st">int|string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$defaultValue</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Returns an element of the bag cast to string, or the default value if</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">int|string</span> <span class="sv">$key</span> )</code>
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
<code class="sig"><span class="sf">remove</span>( <span class="st">int|string</span> <span class="sv">$key</span> )</code>
<span class="desc">Removes an element from the bag</span>
</a>
<a class="api-item" href="#httprequestbagabstractbag-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">int|string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
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
<code class="ret">int|string</code>
<code class="sig"><span class="sf">normalizeKey</span>( <span class="st">int|string</span> <span class="sv">$key</span> )</code>
<span class="desc">Normalizes a key for lookups and writes. Identity in the base;</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$items</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `__construct()` { #httprequestbagabstractbag-__construct }

```php
public function __construct( array $items = [] );
```

AbstractBag constructor.

#### `all()` { #httprequestbagabstractbag-all }

```php
public function all(): array;
```

Returns all the elements of the bag

#### `count()` { #httprequestbagabstractbag-count }

```php
public function count(): int;
```

Returns the number of elements in the bag

#### `get()` { #httprequestbagabstractbag-get }

```php
public function get(
    int|string $key,
    mixed $defaultValue = null
): mixed;
```

Returns an element of the bag, or the default value if it is not set

#### `getArray()` { #httprequestbagabstractbag-getarray }

```php
public function getArray(
    int|string $key,
    array $defaultValue = []
): array;
```

Returns an element of the bag as an array. The default value is
returned if the element is not set or is not an array

#### `getBool()` { #httprequestbagabstractbag-getbool }

```php
public function getBool(
    int|string $key,
    bool $defaultValue = false
): bool;
```

Returns an element of the bag cast to bool, or the default value if
it is not set

#### `getFloat()` { #httprequestbagabstractbag-getfloat }

```php
public function getFloat(
    int|string $key,
    float $defaultValue = 0
): float;
```

Returns an element of the bag cast to float, or the default value if
it is not set

#### `getInt()` { #httprequestbagabstractbag-getint }

```php
public function getInt(
    int|string $key,
    int $defaultValue = 0
): int;
```

Returns an element of the bag cast to int, or the default value if
it is not set

#### `getIterator()` { #httprequestbagabstractbag-getiterator }

```php
public function getIterator(): Traversable;
```

Returns the iterator of the bag

#### `getString()` { #httprequestbagabstractbag-getstring }

```php
public function getString(
    int|string $key,
    string $defaultValue = ""
): string;
```

Returns an element of the bag cast to string, or the default value if
it is not set

#### `has()` { #httprequestbagabstractbag-has }

```php
public function has( int|string $key ): bool;
```

Checks whether an element exists in the bag

#### `offsetExists()` { #httprequestbagabstractbag-offsetexists }

```php
public function offsetExists( mixed $offset ): bool;
```

Whether an offset exists

@link https://php.net/manual/en/arrayaccess.offsetexists.php

#### `offsetGet()` { #httprequestbagabstractbag-offsetget }

```php
public function offsetGet( mixed $offset ): mixed;
```

Offset to retrieve

@link https://php.net/manual/en/arrayaccess.offsetget.php

#### `offsetSet()` { #httprequestbagabstractbag-offsetset }

```php
public function offsetSet(
    mixed $offset,
    mixed $value
): void;
```

Offset to set

@link https://php.net/manual/en/arrayaccess.offsetset.php

#### `offsetUnset()` { #httprequestbagabstractbag-offsetunset }

```php
public function offsetUnset( mixed $offset ): void;
```

Offset to unset

@link https://php.net/manual/en/arrayaccess.offsetunset.php

#### `remove()` { #httprequestbagabstractbag-remove }

```php
public function remove( int|string $key ): void;
```

Removes an element from the bag

#### `set()` { #httprequestbagabstractbag-set }

```php
public function set(
    int|string $key,
    mixed $value
): void;
```

Sets an element in the bag

<div class="api-group">Protected · 2</div>

#### `normalizeItems()` { #httprequestbagabstractbag-normalizeitems }

```php
protected function normalizeItems( array $items ): array;
```

Normalizes the items at construction time. Identity in the base;
subclasses can override it to normalize keys

#### `normalizeKey()` { #httprequestbagabstractbag-normalizekey }

```php
protected function normalizeKey( int|string $key ): int|string;
```

Normalizes a key for lookups and writes. Identity in the base;
subclasses can override it to change key handling


## Http\Request\Bag\AttributeBag

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/Bag/AttributeBag.php){ .src-btn }

Holds the request attributes: arbitrary, application-defined values
attached to the request during its lifecycle (router, dispatcher,
security components etc.). Unlike the other request bags, it is not
hydrated from a superglobal - it always starts empty.

The base class supplies the entire surface; this class exists as a
distinct type so DI typing and IDE autocomplete stay precise.

<div class="api-tree" markdown>

- [`Phalcon\Http\Request\Bag\AbstractBag`](#httprequestbagabstractbag)
    - **`Phalcon\Http\Request\Bag\AttributeBag`**

</div>


## Http\Request\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/Exception.php){ .src-btn }

Phalcon\Http\Request\Exception

Exceptions thrown in Phalcon\Http\Request will use this class

<div class="api-tree" markdown>

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
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/Exceptions/FilterServiceUnavailable.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Request\Exception`](#httprequestexception)
        - **`Phalcon\Http\Request\Exceptions\FilterServiceUnavailable`**

</div>

__Uses__ `Phalcon\Http\Request\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionsfilterserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httprequestexceptionsfilterserviceunavailable-__construct }

```php
public function __construct();
```


## Http\Request\Exceptions\InvalidHost

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/Exceptions/InvalidHost.php){ .src-btn }

<div class="api-tree" markdown>

- `\UnexpectedValueException`
    - **`Phalcon\Http\Request\Exceptions\InvalidHost`**

</div>

__Uses__ `UnexpectedValueException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionsinvalidhost-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$host</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httprequestexceptionsinvalidhost-__construct }

```php
public function __construct( string $host );
```


## Http\Request\Exceptions\InvalidHttpMethod

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/Exceptions/InvalidHttpMethod.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Request\Exception`](#httprequestexception)
        - **`Phalcon\Http\Request\Exceptions\InvalidHttpMethod`**

</div>

__Uses__ `Phalcon\Http\Request\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionsinvalidhttpmethod-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$method</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httprequestexceptionsinvalidhttpmethod-__construct }

```php
public function __construct( string $method );
```


## Http\Request\Exceptions\MissingFilters

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/Exceptions/MissingFilters.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Request\Exception`](#httprequestexception)
        - **`Phalcon\Http\Request\Exceptions\MissingFilters`**

</div>

__Uses__ `Phalcon\Http\Request\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionsmissingfilters-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httprequestexceptionsmissingfilters-__construct }

```php
public function __construct( string $name );
```


## Http\Request\Exceptions\NullKeyException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/Exceptions/NullKeyException.php){ .src-btn }

Thrown by AbstractBag::offsetSet() when a null offset is used (the
ArrayAccess append form). Bags are always string-keyed, so an
auto-indexed write could never be addressed by the caller.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Request\Exception`](#httprequestexception)
        - **`Phalcon\Http\Request\Exceptions\NullKeyException`**

</div>

__Uses__ `Phalcon\Http\Request\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionsnullkeyexception-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httprequestexceptionsnullkeyexception-__construct }

```php
public function __construct();
```


## Http\Request\Exceptions\SanitizerNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/Exceptions/SanitizerNotFound.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Request\Exception`](#httprequestexception)
        - **`Phalcon\Http\Request\Exceptions\SanitizerNotFound`**

</div>

__Uses__ `Phalcon\Http\Request\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestexceptionssanitizernotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$sanitizer</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httprequestexceptionssanitizernotfound-__construct }

```php
public function __construct( string $sanitizer );
```


## Http\Request\File

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/File.php){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Http\Request\File`** - implements [`Phalcon\Http\Request\FileInterface`](#httprequestfileinterface)

</div>

__Uses__ `Phalcon\Traits\Support\Helper\Arr\GetTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httprequestfile-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">array</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Constructor</span>
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

#### `__construct()` { #httprequestfile-__construct }

```php
public function __construct(
    array $file,
    string $key = ""
);
```

Constructor

#### `getError()` { #httprequestfile-geterror }

```php
public function getError(): int;
```

#### `getExtension()` { #httprequestfile-getextension }

```php
public function getExtension(): string;
```

#### `getKey()` { #httprequestfile-getkey }

```php
public function getKey(): string;
```

#### `getName()` { #httprequestfile-getname }

```php
public function getName(): string;
```

Returns the real name of the uploaded file

#### `getRealType()` { #httprequestfile-getrealtype }

```php
public function getRealType(): string;
```

Gets the real mime type of the upload file using finfo

#### `getSize()` { #httprequestfile-getsize }

```php
public function getSize(): int;
```

Returns the file size of the uploaded file

#### `getTempName()` { #httprequestfile-gettempname }

```php
public function getTempName(): string;
```

Returns the temporary name of the uploaded file

#### `getType()` { #httprequestfile-gettype }

```php
public function getType(): string;
```

Returns the mime type reported by the browser
This mime type is not completely secure, use getRealType() instead

#### `isUploadedFile()` { #httprequestfile-isuploadedfile }

```php
public function isUploadedFile(): bool;
```

Checks whether the file has been uploaded via Post.

#### `moveTo()` { #httprequestfile-moveto }

```php
public function moveTo( string $destination ): bool;
```

Moves the temporary file to a destination within the application


## Http\Request\FileInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Request/FileInterface.php){ .src-btn }

Interface for Phalcon\Http\Request\File

<div class="api-tree" markdown>

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

#### `getError()` { #httprequestfileinterface-geterror }

```php
public function getError(): int;
```

Returns the error if any

#### `getName()` { #httprequestfileinterface-getname }

```php
public function getName(): string;
```

Returns the real name of the uploaded file

#### `getRealType()` { #httprequestfileinterface-getrealtype }

```php
public function getRealType(): string;
```

Gets the real mime type of the upload file using finfo

#### `getSize()` { #httprequestfileinterface-getsize }

```php
public function getSize(): int;
```

Returns the file size of the uploaded file

#### `getTempName()` { #httprequestfileinterface-gettempname }

```php
public function getTempName(): string;
```

Returns the temporal name of the uploaded file

#### `getType()` { #httprequestfileinterface-gettype }

```php
public function getType(): string;
```

Returns the mime type reported by the browser
This mime type is not completely secure, use getRealType() instead

#### `moveTo()` { #httprequestfileinterface-moveto }

```php
public function moveTo( string $destination ): bool;
```

Move the temporary file to a destination


## Http\Response

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Response.php){ .src-btn }

Part of the HTTP cycle is return responses to the clients.
Phalcon\HTTP\Response is the Phalcon component responsible to achieve this
task. HTTP responses are usually composed by headers and body.

```php
$response = new \Phalcon\Http\Response();

$response->setStatusCode(200, "OK");
$response->setContent("<html><body>Hello</body></html>");

$response->send();
```

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - **`Phalcon\Http\Response`** - implements [`Phalcon\Events\EventsAwareInterface`](phalcon_events.md#eventseventsawareinterface), [`Phalcon\Http\ResponseInterface`](#httpresponseinterface), [`Phalcon\Http\Message\Interfaces\ResponseStatusCodeInterface`](#httpmessageinterfacesresponsestatuscodeinterface), [`Phalcon\Http\Message\ResponseStatusCodeInterface`](#httpmessageresponsestatuscodeinterface)

</div>

__Uses__ `DateTime` · `DateTimeZone` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Exception` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Http\Message\Interfaces\ResponseStatusCodeInterface` · `Phalcon\Http\Message\ResponseStatusCodeInterface` · `Phalcon\Http\Response\CookiesInterface` · `Phalcon\Http\Response\Exception` · `Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage` · `Phalcon\Http\Response\Exceptions\ResponseAlreadySent` · `Phalcon\Http\Response\Exceptions\UrlServiceUnavailable` · `Phalcon\Http\Response\Headers` · `Phalcon\Http\Response\HeadersInterface` · `Phalcon\Http\Traits\StatusPhrasesTrait` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Mvc\ViewInterface` · `Phalcon\Support\Helper\File\Basename` · `Phalcon\Support\Helper\Json\Encode` · `Phalcon\Traits\Php\InfoTrait` · `Phalcon\Traits\Php\UrlTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponse-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$content</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int|null</span> <span class="sv">$code</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$status</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Constructor</span>
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
<code class="sig"><span class="sf">redirect</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$location</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$externalRedirect</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$statusCode</span><span class="sm"> = 302</span></span>)</code>
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
<code class="ret">bool|ResponseInterface</code>
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
<code class="sig"><span class="sf">setContentType</span>(<span class="prm"><span class="st">string</span> <span class="sv">$contentType</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$charset</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets the response content-type mime, optionally the charset</span>
</a>
<a class="api-item" href="#httpresponse-setcookies">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setCookies</span>( <span class="st">CookiesInterface</span> <span class="sv">$cookies</span> )</code>
<span class="desc">Sets a cookies bag for the response externally</span>
</a>
<a class="api-item" href="#httpresponse-setetag">
<code class="vis vis-public">public</code>
<code class="ret">ResponseInterface</code>
<code class="sig"><span class="sf">setEtag</span>( <span class="st">string</span> <span class="sv">$etag</span> )</code>
<span class="desc">Set a custom ETag</span>
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
<code class="sig"><span class="sf">setFileToSend</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filePath</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$attachmentName</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$attachment</span><span class="sm"> = true</span></span>)</code>
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
<span class="desc">Sets HTTP response body. The parameter is automatically converted to</span>
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
<code class="sig"><span class="sf">setStatusCode</span>(<span class="prm"><span class="st">int</span> <span class="sv">$code</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$message</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets the HTTP response code</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">DATETIME_FORMAT</span><span class="sm"> = &quot;D, d M Y H:i:s&quot;</span></code>
</div>
</div>

### Properties

<div class="api-list">
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

<div class="api-group">Public · 31</div>

#### `__construct()` { #httpresponse-__construct }

```php
public function __construct(
    string|null $content = null,
    int|null $code = null,
    string|null $status = null
);
```

Constructor

#### `appendContent()` { #httpresponse-appendcontent }

```php
public function appendContent( mixed $content ): ResponseInterface;
```

Appends a string to the HTTP response body

#### `getContent()` { #httpresponse-getcontent }

```php
public function getContent(): string;
```

Gets the HTTP response body

#### `getCookies()` { #httpresponse-getcookies }

```php
public function getCookies(): CookiesInterface;
```

Returns cookies set by the user

#### `getDI()` { #httpresponse-getdi }

```php
public function getDI(): DiInterface;
```

Returns the internal dependency injector

#### `getHeaders()` { #httpresponse-getheaders }

```php
public function getHeaders(): HeadersInterface;
```

Returns headers set by the user

#### `getReasonPhrase()` { #httpresponse-getreasonphrase }

```php
public function getReasonPhrase(): string|null;
```

Returns the reason phrase

```php
echo $response->getReasonPhrase();
```

#### `getStatusCode()` { #httpresponse-getstatuscode }

```php
public function getStatusCode(): int|null;
```

Returns the status code

```php
echo $response->getStatusCode();
```

#### `hasHeader()` { #httpresponse-hasheader }

```php
public function hasHeader( string $name ): bool;
```

Checks if a header exists

```php
$response->hasHeader("Content-Type");
```

#### `isSent()` { #httpresponse-issent }

```php
public function isSent(): bool;
```

Check if the response is already sent

#### `redirect()` { #httpresponse-redirect }

```php
public function redirect(
    string|null $location = null,
    bool $externalRedirect = false,
    int $statusCode = 302
): ResponseInterface;
```

Redirect by HTTP to another action or URL

```php
// Using a string redirect (internal/external)
$response->redirect("posts/index");
$response->redirect("https://en.wikipedia.org", true);
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

#### `removeHeader()` { #httpresponse-removeheader }

```php
public function removeHeader( string $name ): ResponseInterface;
```

Remove a header in the response

```php
$response->removeHeader("Expires");
```

#### `resetHeaders()` { #httpresponse-resetheaders }

```php
public function resetHeaders(): ResponseInterface;
```

Resets all the established headers

#### `send()` { #httpresponse-send }

```php
public function send(): ResponseInterface;
```

Prints out HTTP response to the client

#### `sendCookies()` { #httpresponse-sendcookies }

```php
public function sendCookies(): ResponseInterface;
```

Sends cookies to the client

#### `sendHeaders()` { #httpresponse-sendheaders }

```php
public function sendHeaders(): bool|ResponseInterface;
```

Sends headers to the client

#### `setCache()` { #httpresponse-setcache }

```php
public function setCache( int $minutes ): ResponseInterface;
```

Sets Cache headers to use HTTP cache

```php
$this->response->setCache(60);
```

#### `setContent()` { #httpresponse-setcontent }

```php
public function setContent( string $content ): ResponseInterface;
```

Sets HTTP response body

```php
$response->setContent("<h1>Hello!</h1>");
```

#### `setContentLength()` { #httpresponse-setcontentlength }

```php
public function setContentLength( int $contentLength ): ResponseInterface;
```

Sets the response content-length

```php
$response->setContentLength(2048);
```

#### `setContentType()` { #httpresponse-setcontenttype }

```php
public function setContentType(
    string $contentType,
    string|null $charset = null
): ResponseInterface;
```

Sets the response content-type mime, optionally the charset

```php
$response->setContentType("application/pdf");
$response->setContentType("text/plain", "UTF-8");
```

#### `setCookies()` { #httpresponse-setcookies }

```php
public function setCookies( CookiesInterface $cookies ): ResponseInterface;
```

Sets a cookies bag for the response externally

#### `setEtag()` { #httpresponse-setetag }

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

#### `setExpires()` { #httpresponse-setexpires }

```php
public function setExpires( DateTime $datetime ): ResponseInterface;
```

Sets an Expires header in the response that allows to use the HTTP cache

```php
$this->response->setExpires(
    new DateTime()
);
```

#### `setFileToSend()` { #httpresponse-setfiletosend }

```php
public function setFileToSend(
    string $filePath,
    string|null $attachmentName = null,
    bool $attachment = true
): ResponseInterface;
```

Sets an attached file to be sent at the end of the request

#### `setHeader()` { #httpresponse-setheader }

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

#### `setHeaders()` { #httpresponse-setheaders }

```php
public function setHeaders( HeadersInterface $headers ): ResponseInterface;
```

Sets a headers bag for the response externally

#### `setJsonContent()` { #httpresponse-setjsoncontent }

```php
public function setJsonContent(
    mixed $content,
    int $jsonOptions = 0,
    int $depth = 512
): ResponseInterface;
```

Sets HTTP response body. The parameter is automatically converted to
JSON
and also sets default header: Content-Type: "application/json;
charset=UTF-8"

```php
$response->setJsonContent(
    [
        "status" => "OK",
    ]
);
```

#### `setLastModified()` { #httpresponse-setlastmodified }

```php
public function setLastModified( DateTime $datetime ): ResponseInterface;
```

Sets Last-Modified header

```php
$this->response->setLastModified(
    new DateTime()
);
```

#### `setNotModified()` { #httpresponse-setnotmodified }

```php
public function setNotModified(): ResponseInterface;
```

Sends a Not-Modified response

#### `setRawHeader()` { #httpresponse-setrawheader }

```php
public function setRawHeader( string $header ): ResponseInterface;
```

Send a raw header to the response

```php
$response->setRawHeader("HTTP/1.1 404 Not Found");
```

#### `setStatusCode()` { #httpresponse-setstatuscode }

```php
public function setStatusCode(
    int $code,
    string|null $message = null
): ResponseInterface;
```

Sets the HTTP response code

```php
$response->setStatusCode(404, "Not Found");
```


## Http\ResponseInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/ResponseInterface.php){ .src-btn }

Phalcon\Http\Response

Interface for Phalcon\Http\Response

<div class="api-tree" markdown>

- **`Phalcon\Http\ResponseInterface`**

</div>

__Uses__ `DateTime` · `Phalcon\Http\Response\HeadersInterface`
{ .api-uses }

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
<code class="sig"><span class="sf">redirect</span>(<span class="prm"><span class="st">string|null</span> <span class="sv">$location</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$externalRedirect</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$statusCode</span><span class="sm"> = 302</span></span>)</code>
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
<code class="ret">bool|ResponseInterface</code>
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
<code class="sig"><span class="sf">setContentType</span>(<span class="prm"><span class="st">string</span> <span class="sv">$contentType</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$charset</span><span class="sm"> = null</span></span>)</code>
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
<code class="sig"><span class="sf">setFileToSend</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filePath</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$attachmentName</span><span class="sm"> = null</span></span>)</code>
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
<code class="sig"><span class="sf">setStatusCode</span>(<span class="prm"><span class="st">int</span> <span class="sv">$code</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$message</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets the HTTP response code</span>
</a>
</div>

### Methods

<div class="api-group">Public · 21</div>

#### `appendContent()` { #httpresponseinterface-appendcontent }

```php
public function appendContent( string $content ): ResponseInterface;
```

Appends a string to the HTTP response body

#### `getContent()` { #httpresponseinterface-getcontent }

```php
public function getContent(): string;
```

Gets the HTTP response body

#### `getHeaders()` { #httpresponseinterface-getheaders }

```php
public function getHeaders(): HeadersInterface;
```

Returns headers set by the user

#### `getStatusCode()` { #httpresponseinterface-getstatuscode }

```php
public function getStatusCode(): int|null;
```

Returns the status code

#### `hasHeader()` { #httpresponseinterface-hasheader }

```php
public function hasHeader( string $name ): bool;
```

Checks if a header exists

#### `isSent()` { #httpresponseinterface-issent }

```php
public function isSent(): bool;
```

Checks if the response was already sent

#### `redirect()` { #httpresponseinterface-redirect }

```php
public function redirect(
    string|null $location = null,
    bool $externalRedirect = false,
    int $statusCode = 302
): ResponseInterface;
```

Redirect by HTTP to another action or URL

#### `resetHeaders()` { #httpresponseinterface-resetheaders }

```php
public function resetHeaders(): ResponseInterface;
```

Resets all the established headers

#### `send()` { #httpresponseinterface-send }

```php
public function send(): ResponseInterface;
```

Prints out HTTP response to the client

#### `sendCookies()` { #httpresponseinterface-sendcookies }

```php
public function sendCookies(): ResponseInterface;
```

Sends cookies to the client

#### `sendHeaders()` { #httpresponseinterface-sendheaders }

```php
public function sendHeaders(): bool|ResponseInterface;
```

Sends headers to the client

#### `setContent()` { #httpresponseinterface-setcontent }

```php
public function setContent( string $content ): ResponseInterface;
```

Sets HTTP response body

#### `setContentLength()` { #httpresponseinterface-setcontentlength }

```php
public function setContentLength( int $contentLength ): ResponseInterface;
```

Sets the response content-length

#### `setContentType()` { #httpresponseinterface-setcontenttype }

```php
public function setContentType(
    string $contentType,
    string|null $charset = null
): ResponseInterface;
```

Sets the response content-type mime, optionally the charset

#### `setExpires()` { #httpresponseinterface-setexpires }

```php
public function setExpires( DateTime $datetime ): ResponseInterface;
```

Sets output expire time header

#### `setFileToSend()` { #httpresponseinterface-setfiletosend }

```php
public function setFileToSend(
    string $filePath,
    string|null $attachmentName = null
): ResponseInterface;
```

Sets an attached file to be sent at the end of the request

#### `setHeader()` { #httpresponseinterface-setheader }

```php
public function setHeader(
    string $name,
    string $value
): ResponseInterface;
```

Overwrites a header in the response

#### `setJsonContent()` { #httpresponseinterface-setjsoncontent }

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

#### `setNotModified()` { #httpresponseinterface-setnotmodified }

```php
public function setNotModified(): ResponseInterface;
```

Sends a Not-Modified response

#### `setRawHeader()` { #httpresponseinterface-setrawheader }

```php
public function setRawHeader( string $header ): ResponseInterface;
```

Send a raw header to the response

#### `setStatusCode()` { #httpresponseinterface-setstatuscode }

```php
public function setStatusCode(
    int $code,
    string|null $message = null
): ResponseInterface;
```

Sets the HTTP response code


## Http\Response\Cookies

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Response/Cookies.php){ .src-btn }

This class is a bag to manage the cookies.

A cookies bag is automatically registered as part of the 'response' service
in the DI. By default, cookies are automatically encrypted before being sent
to the client and are decrypted when retrieved from the user. To set sign
key used to generate a message authentication code use
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

        // The `$key' should have been previously generated in a
        // cryptographically safe way.
        $key =
        "T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3";

        $crypt->setKey($key);

        return $crypt;
    }
);

$di->set(
    'cookies',
    function () {
        $cookies = new Cookies();

        // The `$key' MUST be at least 32 characters long and generated
        // using a cryptographically secure pseudo random generator.
        $key =
        "#1dj8$=dp?.ak//j1V$~%*0XaK\xb1\x8d\xa9\x98\x054t7w!z%C*F-Jk\x98\x05\\\x5c";

        $cookies->setSignKey($key);

        return $cookies;
    }
);
```

<div class="api-tree" markdown>

- `\stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Http\Response\Cookies`** - implements [`Phalcon\Http\Response\CookiesInterface`](#httpresponsecookiesinterface)

</div>

__Uses__ `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Http\Cookie\CookieInterface` · `Phalcon\Http\Cookie\Exception` · `Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable` · `Phalcon\Http\Traits\EncryptionAwareTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponsecookies-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">bool</span> <span class="sv">$useEncryption</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$signKey</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Constructor</span>
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
<code class="sig"><span class="sf">setSignKey</span>( <span class="st">string|null</span> <span class="sv">$signKey</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the cookie&#039;s sign key.</span>
</a>
<a class="api-item" href="#httpresponsecookies-useencryption">
<code class="vis vis-public">public</code>
<code class="ret">CookiesInterface</code>
<code class="sig"><span class="sf">useEncryption</span>( <span class="st">bool</span> <span class="sv">$useEncryption</span> )</code>
<span class="desc">Set if cookies in the bag must be automatically encrypted/decrypted</span>
</a>
<a class="api-item" href="#httpresponsecookies-checkgetcontainer">
<code class="vis vis-protected">protected</code>
<code class="ret">DiInterface</code>
<code class="sig"><span class="sf">checkGetContainer</span>()</code>
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

#### `__construct()` { #httpresponsecookies-__construct }

```php
public function __construct(
    bool $useEncryption = true,
    string|null $signKey = null
);
```

Constructor

#### `delete()` { #httpresponsecookies-delete }

```php
public function delete( string $name ): bool;
```

Deletes a cookie by its name
This method does not remove cookies from the _COOKIE super-global

#### `get()` { #httpresponsecookies-get }

```php
public function get( string $name ): CookieInterface;
```

Gets a cookie from the bag

#### `getCookies()` { #httpresponsecookies-getcookies }

```php
public function getCookies(): array;
```

Gets all cookies from the bag

#### `has()` { #httpresponsecookies-has }

```php
public function has( string $name ): bool;
```

Check if a cookie is defined in the bag or exists in the _COOKIE
super-global

#### `isSent()` { #httpresponsecookies-issent }

```php
public function isSent(): bool;
```

Returns if the headers have already been sent

#### `reset()` { #httpresponsecookies-reset }

```php
public function reset(): CookiesInterface;
```

Reset set cookies

#### `send()` { #httpresponsecookies-send }

```php
public function send(): bool;
```

Sends the cookies to the client
Cookies aren't sent if headers are sent in the current request

#### `set()` { #httpresponsecookies-set }

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

#### `setSignKey()` { #httpresponsecookies-setsignkey }

```php
public function setSignKey( string|null $signKey = null ): CookiesInterface;
```

Sets the cookie's sign key.

The `$signKey' MUST be at least 32 characters long
and generated using a cryptographically secure pseudo random generator.

Use NULL to disable cookie signing.

#### `useEncryption()` { #httpresponsecookies-useencryption }

```php
public function useEncryption( bool $useEncryption ): CookiesInterface;
```

Set if cookies in the bag must be automatically encrypted/decrypted

<div class="api-group">Protected · 1</div>

#### `checkGetContainer()` { #httpresponsecookies-checkgetcontainer }

```php
protected function checkGetContainer(): DiInterface;
```


## Http\Response\CookiesInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Response/CookiesInterface.php){ .src-btn }

Interface for Phalcon\Http\Response\Cookies

<div class="api-tree" markdown>

- **`Phalcon\Http\Response\CookiesInterface`**

</div>

__Uses__ `Phalcon\Http\Cookie\CookieInterface`
{ .api-uses }

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
<span class="desc">Check if a cookie is defined in the bag or exists in the _COOKIE</span>
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
<span class="desc">Set if cookies in the bag must be automatically</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `delete()` { #httpresponsecookiesinterface-delete }

```php
public function delete( string $name ): bool;
```

Deletes a cookie by its name
This method does not remove cookies from the _COOKIE superglobal

#### `get()` { #httpresponsecookiesinterface-get }

```php
public function get( string $name ): CookieInterface;
```

Gets a cookie from the bag

#### `has()` { #httpresponsecookiesinterface-has }

```php
public function has( string $name ): bool;
```

Check if a cookie is defined in the bag or exists in the _COOKIE
superglobal

#### `isUsingEncryption()` { #httpresponsecookiesinterface-isusingencryption }

```php
public function isUsingEncryption(): bool;
```

Returns if the bag is automatically encrypting/decrypting cookies

#### `reset()` { #httpresponsecookiesinterface-reset }

```php
public function reset(): CookiesInterface;
```

Reset set cookies

#### `send()` { #httpresponsecookiesinterface-send }

```php
public function send(): bool;
```

Sends the cookies to the client

#### `set()` { #httpresponsecookiesinterface-set }

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

#### `useEncryption()` { #httpresponsecookiesinterface-useencryption }

```php
public function useEncryption( bool $useEncryption ): CookiesInterface;
```

Set if cookies in the bag must be automatically
encrypted/decrypted


## Http\Response\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Response/Exception.php){ .src-btn }

Phalcon\Http\Response\Exception

Exceptions thrown in Phalcon\Http\Response will use this class.

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Http\Response\Exception`**
        - [`Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage`](#httpresponseexceptionsnonstandardstatuscoderequiresmessage)
        - [`Phalcon\Http\Response\Exceptions\ResponseAlreadySent`](#httpresponseexceptionsresponsealreadysent)
        - [`Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable`](#httpresponseexceptionsresponseserviceunavailable)
        - [`Phalcon\Http\Response\Exceptions\UrlServiceUnavailable`](#httpresponseexceptionsurlserviceunavailable)

</div>


## Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Response/Exceptions/NonStandardStatusCodeRequiresMessage.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Response\Exception`](#httpresponseexception)
        - **`Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage`**

</div>

__Uses__ `Phalcon\Http\Response\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseexceptionsnonstandardstatuscoderequiresmessage-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpresponseexceptionsnonstandardstatuscoderequiresmessage-__construct }

```php
public function __construct();
```


## Http\Response\Exceptions\ResponseAlreadySent

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Response/Exceptions/ResponseAlreadySent.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Response\Exception`](#httpresponseexception)
        - **`Phalcon\Http\Response\Exceptions\ResponseAlreadySent`**

</div>

__Uses__ `Phalcon\Http\Response\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseexceptionsresponsealreadysent-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpresponseexceptionsresponsealreadysent-__construct }

```php
public function __construct();
```


## Http\Response\Exceptions\ResponseServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Response/Exceptions/ResponseServiceUnavailable.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Response\Exception`](#httpresponseexception)
        - **`Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable`**

</div>

__Uses__ `Phalcon\Http\Response\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseexceptionsresponseserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpresponseexceptionsresponseserviceunavailable-__construct }

```php
public function __construct();
```


## Http\Response\Exceptions\UrlServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Response/Exceptions/UrlServiceUnavailable.php){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Http\Response\Exception`](#httpresponseexception)
        - **`Phalcon\Http\Response\Exceptions\UrlServiceUnavailable`**

</div>

__Uses__ `Phalcon\Http\Response\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseexceptionsurlserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #httpresponseexceptionsurlserviceunavailable-__construct }

```php
public function __construct();
```


## Http\Response\Headers

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Response/Headers.php){ .src-btn }

This class is a bag to manage the response headers

<div class="api-tree" markdown>

- **`Phalcon\Http\Response\Headers`** - implements [`Phalcon\Http\Response\HeadersInterface`](#httpresponseheadersinterface), `\IteratorAggregate`

</div>

__Uses__ `IteratorAggregate` · `Traversable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseheaders-get">
<code class="vis vis-public">public</code>
<code class="ret">bool|string|null</code>
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
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
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

#### `get()` { #httpresponseheaders-get }

```php
public function get( string $name ): bool|string|null;
```

Gets a header value from the internal bag

#### `getIterator()` { #httpresponseheaders-getiterator }

```php
public function getIterator(): Traversable;
```

#### `has()` { #httpresponseheaders-has }

```php
public function has( string $name ): bool;
```

Checks if a header exists

#### `isSent()` { #httpresponseheaders-issent }

```php
public function isSent(): bool;
```

Returns if the headers have already been sent

#### `remove()` { #httpresponseheaders-remove }

```php
public function remove( string $name ): HeadersInterface;
```

Removes a header by its name

#### `reset()` { #httpresponseheaders-reset }

```php
public function reset(): void;
```

Reset set headers

#### `send()` { #httpresponseheaders-send }

```php
public function send(): bool;
```

Sends the headers to the client

#### `set()` { #httpresponseheaders-set }

```php
public function set(
    string $name,
    string $value
): HeadersInterface;
```

Sets a header to be sent at the end of the request

#### `setRaw()` { #httpresponseheaders-setraw }

```php
public function setRaw( string $header ): HeadersInterface;
```

Sets a raw header to be sent at the end of the request

#### `toArray()` { #httpresponseheaders-toarray }

```php
public function toArray(): array;
```

Returns the current headers as an array


## Http\Response\HeadersInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Response/HeadersInterface.php){ .src-btn }

Interface for Phalcon\Http\Response\Headers compatible bags

<div class="api-tree" markdown>

- **`Phalcon\Http\Response\HeadersInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#httpresponseheadersinterface-get">
<code class="vis vis-public">public</code>
<code class="ret">bool|string|null</code>
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

#### `get()` { #httpresponseheadersinterface-get }

```php
public function get( string $name ): bool|string|null;
```

Gets a header value from the internal bag

#### `has()` { #httpresponseheadersinterface-has }

```php
public function has( string $name ): bool;
```

Checks if a header exists

#### `reset()` { #httpresponseheadersinterface-reset }

```php
public function reset(): void;
```

Reset set headers

#### `send()` { #httpresponseheadersinterface-send }

```php
public function send(): bool;
```

Sends the headers to the client

#### `set()` { #httpresponseheadersinterface-set }

```php
public function set(
    string $name,
    string $value
): HeadersInterface;
```

Sets a header to be sent at the end of the request

#### `setRaw()` { #httpresponseheadersinterface-setraw }

```php
public function setRaw( string $header ): HeadersInterface;
```

Sets a raw header to be sent at the end of the request


## Http\Traits\EncryptionAwareTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Traits/EncryptionAwareTrait.php){ .src-btn }

Provides the implicit encryption flag and its accessor shared by the HTTP
cookie classes.

<div class="api-tree" markdown>

- **`Phalcon\Http\Traits\EncryptionAwareTrait`**

</div>

__Used by__ [`Phalcon\Http\Cookie`](#httpcookie) · [`Phalcon\Http\Response\Cookies`](#httpresponsecookies)
{ .api-used-by }

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

#### `isUsingEncryption()` { #httptraitsencryptionawaretrait-isusingencryption }

```php
public function isUsingEncryption(): bool;
```

Check if implicit encryption is being used


## Http\Traits\StatusPhrasesTrait

<span class="badge badge--trait">Trait</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Http/Traits/StatusPhrasesTrait.php){ .src-btn }

Status Phrases trait

<div class="api-tree" markdown>

- **`Phalcon\Http\Traits\StatusPhrasesTrait`**

</div>

__Uses__ `Phalcon\Http\Message\Interfaces\ResponseStatusCodeInterface`
{ .api-uses }

__Used by__ [`Phalcon\Http\Message\Response`](#httpmessageresponse) · [`Phalcon\Http\Response`](#httpresponse)
{ .api-used-by }

### Method Summary

<div class="api-list">
<a class="api-item" href="#httptraitsstatusphrasestrait-getphrases">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getPhrases</span>()</code>
<span class="desc">Returns the list of status codes available</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

#### `getPhrases()` { #httptraitsstatusphrasestrait-getphrases }

```php
protected function getPhrases(): array;
```

Returns the list of status codes available
