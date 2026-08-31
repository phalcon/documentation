---
title: "Phalcon Http"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Http

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Http\Cookie

Class

Provide OO wrappers to manage a HTTP cookie.

- `\stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](../phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Http\Cookie`** - implements [`Phalcon\Http\Cookie\CookieInterface`](#httpcookiecookieinterface), `\Stringable`

`Phalcon\Contracts\Encryption\Crypt\Crypt` · `Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Filter\FilterInterface` · `Phalcon\Http\Cookie\CookieInterface` · `Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort` · `Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired` · `Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable` · `Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable` · `Phalcon\Http\Traits\EncryptionAwareTrait` · `Phalcon\Session\ManagerInterface` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `Stringable`

### Method Summary

<ApiItem href="#httpcookie-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"value","default":"null"},{"type":"int","name":"expire","default":"0"},{"type":"string","name":"path","default":"\"/\""},{"type":"bool","name":"secure","default":"false"},{"type":"string","name":"domain","default":"\"\""},{"type":"bool","name":"httpOnly","default":"false"},{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Http\Cookie constructor.
</ApiItem>
<ApiItem href="#httpcookie-__tostring" visibility="public" name="__toString" returnType="string" params={[]}>
Magic __toString method converts the cookie's value to string
</ApiItem>
<ApiItem href="#httpcookie-delete" visibility="public" name="delete" returnType="void" params={[]}>
Deletes the cookie by setting an expiration time in the past
</ApiItem>
<ApiItem href="#httpcookie-getdomain" visibility="public" name="getDomain" returnType="string" params={[]}>
Returns the domain that the cookie is available to
</ApiItem>
<ApiItem href="#httpcookie-getexpiration" visibility="public" name="getExpiration" returnType="int" params={[]}>
Returns the current expiration time
</ApiItem>
<ApiItem href="#httpcookie-gethttponly" visibility="public" name="getHttpOnly" returnType="bool" params={[]}>
Returns if the cookie is accessible only through the HTTP protocol
</ApiItem>
<ApiItem href="#httpcookie-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the current cookie's name
</ApiItem>
<ApiItem href="#httpcookie-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
Returns the current cookie's options
</ApiItem>
<ApiItem href="#httpcookie-getpath" visibility="public" name="getPath" returnType="string" params={[]}>
Returns the current cookie's path
</ApiItem>
<ApiItem href="#httpcookie-getsecure" visibility="public" name="getSecure" returnType="bool" params={[]}>
Returns whether the cookie must only be sent when the connection is
</ApiItem>
<ApiItem href="#httpcookie-getvalue" visibility="public" name="getValue" returnType="mixed" params={[{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns the cookie's value.
</ApiItem>
<ApiItem href="#httpcookie-restore" visibility="public" name="restore" returnType="CookieInterface" params={[]}>
Reads the cookie-related info from the SESSION to restore the cookie as
</ApiItem>
<ApiItem href="#httpcookie-send" visibility="public" name="send" returnType="CookieInterface" params={[]}>
Sends the cookie to the HTTP client.
</ApiItem>
<ApiItem href="#httpcookie-setdomain" visibility="public" name="setDomain" returnType="CookieInterface" params={[{"type":"string","name":"domain","default":null}]}>
Sets the domain that the cookie is available to
</ApiItem>
<ApiItem href="#httpcookie-setexpiration" visibility="public" name="setExpiration" returnType="CookieInterface" params={[{"type":"int","name":"expire","default":null}]}>
Sets the cookie's expiration time
</ApiItem>
<ApiItem href="#httpcookie-sethttponly" visibility="public" name="setHttpOnly" returnType="CookieInterface" params={[{"type":"bool","name":"httpOnly","default":null}]}>
Sets if the cookie is accessible only through the HTTP protocol
</ApiItem>
<ApiItem href="#httpcookie-setoptions" visibility="public" name="setOptions" returnType="CookieInterface" params={[{"type":"array","name":"options","default":null}]}>
Sets the cookie's options
</ApiItem>
<ApiItem href="#httpcookie-setpath" visibility="public" name="setPath" returnType="CookieInterface" params={[{"type":"string","name":"path","default":null}]}>
Sets the cookie's path
</ApiItem>
<ApiItem href="#httpcookie-setsecure" visibility="public" name="setSecure" returnType="CookieInterface" params={[{"type":"bool","name":"secure","default":null}]}>
Sets if the cookie must only be sent when the connection is secure
</ApiItem>
<ApiItem href="#httpcookie-setsignkey" visibility="public" name="setSignKey" returnType="CookieInterface" params={[{"type":"string|null","name":"signKey","default":"null"}]}>
Sets the cookie's sign key.
</ApiItem>
<ApiItem href="#httpcookie-setvalue" visibility="public" name="setValue" returnType="CookieInterface" params={[{"type":"mixed","name":"value","default":null}]}>
Sets the cookie's value
</ApiItem>
<ApiItem href="#httpcookie-useencryption" visibility="public" name="useEncryption" returnType="CookieInterface" params={[{"type":"bool","name":"useEncryption","default":null}]}>
Sets if the cookie must be encrypted/decrypted automatically
</ApiItem>
<ApiItem href="#httpcookie-assertsignkeyislongenough" visibility="protected" name="assertSignKeyIsLongEnough" returnType="void" params={[{"type":"string","name":"signKey","default":null}]}>
Assert the cookie's key is enough long.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="domain" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="expire" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="filter" type="FilterInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="httpOnly" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isRead" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isRestored" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="path" type="string" default="&quot;/&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="secure" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="signKey" type="string|null" default="null">
The cookie's sign key.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="value" type="mixed" default="null">
</ApiItem>

### Methods

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
public function delete(): void;
```

Deletes the cookie by setting an expiration time in the past

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

@todo filters needs to be array/string

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

Sets if the cookie must only be sent when the connection is secure
(HTTPS)

<h4 id="httpcookie-setsignkey"><code>setSignKey()</code></h4>

```php
public function setSignKey( string|null $signKey = null ): CookieInterface;
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

<h4 id="httpcookie-assertsignkeyislongenough"><code>assertSignKeyIsLongEnough()</code></h4>

```php
protected function assertSignKeyIsLongEnough( string $signKey ): void;
```

Assert the cookie's key is enough long.

## Http\Cookie\CookieInterface

Interface

Interface for Phalcon\Http\Cookie

- **`Phalcon\Http\Cookie\CookieInterface`**

`Phalcon\Contracts\Http\HttpTypes`

### Method Summary

<ApiItem href="#httpcookiecookieinterface-delete" visibility="public" name="delete" returnType="void" params={[]}>
Deletes the cookie
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-getdomain" visibility="public" name="getDomain" returnType="string" params={[]}>
Returns the domain that the cookie is available to
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-getexpiration" visibility="public" name="getExpiration" returnType="int" params={[]}>
Returns the current expiration time
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-gethttponly" visibility="public" name="getHttpOnly" returnType="bool" params={[]}>
Returns if the cookie is accessible only through the HTTP protocol
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the current cookie's name
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
Returns the current cookie's options
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-getpath" visibility="public" name="getPath" returnType="string" params={[]}>
Returns the current cookie's path
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-getsecure" visibility="public" name="getSecure" returnType="bool" params={[]}>
Returns whether the cookie must only be sent when the connection is
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-getvalue" visibility="public" name="getValue" returnType="mixed" params={[{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns the cookie's value.
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-isusingencryption" visibility="public" name="isUsingEncryption" returnType="bool" params={[]}>
Check if the cookie is using implicit encryption
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-send" visibility="public" name="send" returnType="CookieInterface" params={[]}>
Sends the cookie to the HTTP client
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-setdomain" visibility="public" name="setDomain" returnType="CookieInterface" params={[{"type":"string","name":"domain","default":null}]}>
Sets the domain that the cookie is available to
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-setexpiration" visibility="public" name="setExpiration" returnType="CookieInterface" params={[{"type":"int","name":"expire","default":null}]}>
Sets the cookie's expiration time
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-sethttponly" visibility="public" name="setHttpOnly" returnType="CookieInterface" params={[{"type":"bool","name":"httpOnly","default":null}]}>
Sets if the cookie is accessible only through the HTTP protocol
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-setoptions" visibility="public" name="setOptions" returnType="CookieInterface" params={[{"type":"array","name":"options","default":null}]}>
Sets the cookie's options
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-setpath" visibility="public" name="setPath" returnType="CookieInterface" params={[{"type":"string","name":"path","default":null}]}>
Sets the cookie's expiration time
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-setsecure" visibility="public" name="setSecure" returnType="CookieInterface" params={[{"type":"bool","name":"secure","default":null}]}>
Sets if the cookie must only be sent when the connection is secure
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-setvalue" visibility="public" name="setValue" returnType="CookieInterface" params={[{"type":"mixed","name":"value","default":null}]}>
Sets the cookie's value
</ApiItem>
<ApiItem href="#httpcookiecookieinterface-useencryption" visibility="public" name="useEncryption" returnType="CookieInterface" params={[{"type":"bool","name":"useEncryption","default":null}]}>
Sets if the cookie must be encrypted/decrypted automatically
</ApiItem>

### Methods

<h4 id="httpcookiecookieinterface-delete"><code>delete()</code></h4>

```php
public function delete(): void;
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

@todo check if $filters can be more type specific

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

@todo check if we can make this a string

<h4 id="httpcookiecookieinterface-useencryption"><code>useEncryption()</code></h4>

```php
public function useEncryption( bool $useEncryption ): CookieInterface;
```

Sets if the cookie must be encrypted/decrypted automatically

## Http\Cookie\Exception

Class

Phalcon\Http\Cookie\Exception

Exceptions thrown in Phalcon\Http\Cookie will use this class.

- `\Exception`
- **`Phalcon\Http\Cookie\Exception`**
- [`Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort`](#httpcookieexceptionscookiekeytooshort)
- [`Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired`](#httpcookieexceptionscryptinterfacerequired)
- [`Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable`](#httpcookieexceptionscryptserviceunavailable)
- [`Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable`](#httpcookieexceptionsfilterserviceunavailable)

## Http\Cookie\Exceptions\CookieKeyTooShort

Class

- `\Exception`
- [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
- **`Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort`**

`Phalcon\Http\Cookie\Exception`

### Method Summary

<ApiItem href="#httpcookieexceptionscookiekeytooshort-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"length","default":null}]}>
</ApiItem>

### Methods

<h4 id="httpcookieexceptionscookiekeytooshort-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $length );
```

## Http\Cookie\Exceptions\CryptInterfaceRequired

Class

- `\Exception`
- [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
- **`Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired`**

`Phalcon\Http\Cookie\Exception`

### Method Summary

<ApiItem href="#httpcookieexceptionscryptinterfacerequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="httpcookieexceptionscryptinterfacerequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Cookie\Exceptions\CryptServiceUnavailable

Class

- `\Exception`
- [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
- **`Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable`**

`Phalcon\Http\Cookie\Exception`

### Method Summary

<ApiItem href="#httpcookieexceptionscryptserviceunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="httpcookieexceptionscryptserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Cookie\Exceptions\FilterServiceUnavailable

Class

- `\Exception`
- [`Phalcon\Http\Cookie\Exception`](#httpcookieexception)
- **`Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable`**

`Phalcon\Http\Cookie\Exception`

### Method Summary

<ApiItem href="#httpcookieexceptionsfilterserviceunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="httpcookieexceptionsfilterserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Message\RequestMethodInterface

Interface

Interface for Request methods

Implementation of this file has been influenced by PHP FIG
@link    https://github.com/php-fig/http-message-util/
@license https://github.com/php-fig/http-message-util/blob/master/LICENSE

- **`Phalcon\Http\Message\RequestMethodInterface`**

### Constants

<ApiItem kind="constant" name="METHOD_CONNECT" type="string" default="&quot;CONNECT&quot;">
</ApiItem>
<ApiItem kind="constant" name="METHOD_DELETE" type="string" default="&quot;DELETE&quot;">
</ApiItem>
<ApiItem kind="constant" name="METHOD_GET" type="string" default="&quot;GET&quot;">
</ApiItem>
<ApiItem kind="constant" name="METHOD_HEAD" type="string" default="&quot;HEAD&quot;">
</ApiItem>
<ApiItem kind="constant" name="METHOD_OPTIONS" type="string" default="&quot;OPTIONS&quot;">
</ApiItem>
<ApiItem kind="constant" name="METHOD_PATCH" type="string" default="&quot;PATCH&quot;">
</ApiItem>
<ApiItem kind="constant" name="METHOD_POST" type="string" default="&quot;POST&quot;">
</ApiItem>
<ApiItem kind="constant" name="METHOD_PURGE" type="string" default="&quot;PURGE&quot;">
</ApiItem>
<ApiItem kind="constant" name="METHOD_PUT" type="string" default="&quot;PUT&quot;">
</ApiItem>
<ApiItem kind="constant" name="METHOD_TRACE" type="string" default="&quot;TRACE&quot;">
</ApiItem>

## Http\Message\ResponseStatusCodeInterface

Interface

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

- **`Phalcon\Http\Message\ResponseStatusCodeInterface`**

### Constants

<ApiItem kind="constant" name="STATUS_ACCEPTED" type="int" default="202">
</ApiItem>
<ApiItem kind="constant" name="STATUS_ALREADY_REPORTED" type="int" default="208">
</ApiItem>
<ApiItem kind="constant" name="STATUS_BAD_GATEWAY" type="int" default="502">
</ApiItem>
<ApiItem kind="constant" name="STATUS_BAD_REQUEST" type="int" default="400">
</ApiItem>
<ApiItem kind="constant" name="STATUS_BANDWIDTH_LIMIT_EXCEEDED" type="int" default="509">
</ApiItem>
<ApiItem kind="constant" name="STATUS_BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS" type="int" default="450">
</ApiItem>
<ApiItem kind="constant" name="STATUS_CLIENT_CLOSED_REQUEST" type="int" default="499">
</ApiItem>
<ApiItem kind="constant" name="STATUS_CONFLICT" type="int" default="409">
</ApiItem>
<ApiItem kind="constant" name="STATUS_CONNECTION_TIMEOUT" type="int" default="522">
</ApiItem>
<ApiItem kind="constant" name="STATUS_CONTINUE" type="int" default="100">
</ApiItem>
<ApiItem kind="constant" name="STATUS_CREATED" type="int" default="201">
</ApiItem>
<ApiItem kind="constant" name="STATUS_EARLY_HINTS" type="int" default="103">
</ApiItem>
<ApiItem kind="constant" name="STATUS_EXPECTATION_FAILED" type="int" default="417">
</ApiItem>
<ApiItem kind="constant" name="STATUS_FAILED_DEPENDENCY" type="int" default="424">
</ApiItem>
<ApiItem kind="constant" name="STATUS_FORBIDDEN" type="int" default="403">
</ApiItem>
<ApiItem kind="constant" name="STATUS_FOUND" type="int" default="302">
</ApiItem>
<ApiItem kind="constant" name="STATUS_GATEWAY_TIMEOUT" type="int" default="504">
</ApiItem>
<ApiItem kind="constant" name="STATUS_GONE" type="int" default="410">
</ApiItem>
<ApiItem kind="constant" name="STATUS_HTTP_REQUEST_SENT_TO_HTTPS_PORT" type="int" default="497">
</ApiItem>
<ApiItem kind="constant" name="STATUS_IM_A_TEAPOT" type="int" default="418">
</ApiItem>
<ApiItem kind="constant" name="STATUS_IM_USED" type="int" default="226">
</ApiItem>
<ApiItem kind="constant" name="STATUS_INSUFFICIENT_STORAGE" type="int" default="507">
</ApiItem>
<ApiItem kind="constant" name="STATUS_INTERNAL_SERVER_ERROR" type="int" default="500">
</ApiItem>
<ApiItem kind="constant" name="STATUS_INVALID_SSL_CERTIFICATE" type="int" default="526">
</ApiItem>
<ApiItem kind="constant" name="STATUS_INVALID_TOKEN_ESRI" type="int" default="498">
</ApiItem>
<ApiItem kind="constant" name="STATUS_LENGTH_REQUIRED" type="int" default="411">
</ApiItem>
<ApiItem kind="constant" name="STATUS_LOCKED" type="int" default="423">
</ApiItem>
<ApiItem kind="constant" name="STATUS_LOGIN_TIMEOUT" type="int" default="440">
</ApiItem>
<ApiItem kind="constant" name="STATUS_LOOP_DETECTED" type="int" default="508">
</ApiItem>
<ApiItem kind="constant" name="STATUS_METHOD_FAILURE" type="int" default="420">
</ApiItem>
<ApiItem kind="constant" name="STATUS_METHOD_NOT_ALLOWED" type="int" default="405">
</ApiItem>
<ApiItem kind="constant" name="STATUS_MISDIRECTED_REQUEST" type="int" default="421">
</ApiItem>
<ApiItem kind="constant" name="STATUS_MOVED_PERMANENTLY" type="int" default="301">
</ApiItem>
<ApiItem kind="constant" name="STATUS_MULTIPLE_CHOICES" type="int" default="300">
</ApiItem>
<ApiItem kind="constant" name="STATUS_MULTI_STATUS" type="int" default="207">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NETWORK_AUTHENTICATION_REQUIRED" type="int" default="511">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NETWORK_CONNECT_TIMEOUT_ERROR" type="int" default="599">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NETWORK_READ_TIMEOUT_ERROR" type="int" default="598">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NON_AUTHORITATIVE_INFORMATION" type="int" default="203">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NOT_ACCEPTABLE" type="int" default="406">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NOT_EXTENDED" type="int" default="510">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NOT_FOUND" type="int" default="404">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NOT_IMPLEMENTED" type="int" default="501">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NOT_MODIFIED" type="int" default="304">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NO_CONTENT" type="int" default="204">
</ApiItem>
<ApiItem kind="constant" name="STATUS_NO_RESPONSE" type="int" default="444">
</ApiItem>
<ApiItem kind="constant" name="STATUS_OK" type="int" default="200">
</ApiItem>
<ApiItem kind="constant" name="STATUS_ORIGIN_DNS_ERROR" type="int" default="530">
</ApiItem>
<ApiItem kind="constant" name="STATUS_ORIGIN_IS_UNREACHABLE" type="int" default="523">
</ApiItem>
<ApiItem kind="constant" name="STATUS_PAGE_EXPIRED" type="int" default="419">
</ApiItem>
<ApiItem kind="constant" name="STATUS_PARTIAL_CONTENT" type="int" default="206">
</ApiItem>
<ApiItem kind="constant" name="STATUS_PAYLOAD_TOO_LARGE" type="int" default="413">
</ApiItem>
<ApiItem kind="constant" name="STATUS_PAYMENT_REQUIRED" type="int" default="402">
</ApiItem>
<ApiItem kind="constant" name="STATUS_PERMANENT_REDIRECT" type="int" default="308">
</ApiItem>
<ApiItem kind="constant" name="STATUS_PRECONDITION_FAILED" type="int" default="412">
</ApiItem>
<ApiItem kind="constant" name="STATUS_PRECONDITION_REQUIRED" type="int" default="428">
</ApiItem>
<ApiItem kind="constant" name="STATUS_PROCESSING" type="int" default="102">
</ApiItem>
<ApiItem kind="constant" name="STATUS_PROXY_AUTHENTICATION_REQUIRED" type="int" default="407">
</ApiItem>
<ApiItem kind="constant" name="STATUS_RAILGUN_ERROR" type="int" default="527">
</ApiItem>
<ApiItem kind="constant" name="STATUS_RANGE_NOT_SATISFIABLE" type="int" default="416">
</ApiItem>
<ApiItem kind="constant" name="STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE" type="int" default="431">
</ApiItem>
<ApiItem kind="constant" name="STATUS_REQUEST_HEADER_TOO_LARGE" type="int" default="494">
</ApiItem>
<ApiItem kind="constant" name="STATUS_REQUEST_TIMEOUT" type="int" default="408">
</ApiItem>
<ApiItem kind="constant" name="STATUS_RESERVED" type="int" default="306">
</ApiItem>
<ApiItem kind="constant" name="STATUS_RESET_CONTENT" type="int" default="205">
</ApiItem>
<ApiItem kind="constant" name="STATUS_RETRY_WITH" type="int" default="449">
</ApiItem>
<ApiItem kind="constant" name="STATUS_SEE_OTHER" type="int" default="303">
</ApiItem>
<ApiItem kind="constant" name="STATUS_SERVICE_UNAVAILABLE" type="int" default="503">
</ApiItem>
<ApiItem kind="constant" name="STATUS_SSL_CERTIFICATE_ERROR" type="int" default="495">
</ApiItem>
<ApiItem kind="constant" name="STATUS_SSL_CERTIFICATE_REQUIRED" type="int" default="496">
</ApiItem>
<ApiItem kind="constant" name="STATUS_SSL_HANDSHAKE_FAILED" type="int" default="525">
</ApiItem>
<ApiItem kind="constant" name="STATUS_SWITCHING_PROTOCOLS" type="int" default="101">
</ApiItem>
<ApiItem kind="constant" name="STATUS_TEMPORARY_REDIRECT" type="int" default="307">
</ApiItem>
<ApiItem kind="constant" name="STATUS_THIS_IS_FINE" type="int" default="218">
</ApiItem>
<ApiItem kind="constant" name="STATUS_TIMEOUT_OCCURRED" type="int" default="524">
</ApiItem>
<ApiItem kind="constant" name="STATUS_TOO_EARLY" type="int" default="425">
</ApiItem>
<ApiItem kind="constant" name="STATUS_TOO_MANY_REQUESTS" type="int" default="429">
</ApiItem>
<ApiItem kind="constant" name="STATUS_UNAUTHORIZED" type="int" default="401">
</ApiItem>
<ApiItem kind="constant" name="STATUS_UNAVAILABLE_FOR_LEGAL_REASONS" type="int" default="451">
</ApiItem>
<ApiItem kind="constant" name="STATUS_UNKNOWN_ERROR" type="int" default="520">
</ApiItem>
<ApiItem kind="constant" name="STATUS_UNPROCESSABLE_ENTITY" type="int" default="422">
</ApiItem>
<ApiItem kind="constant" name="STATUS_UNSUPPORTED_MEDIA_TYPE" type="int" default="415">
</ApiItem>
<ApiItem kind="constant" name="STATUS_UPGRADE_REQUIRED" type="int" default="426">
</ApiItem>
<ApiItem kind="constant" name="STATUS_URI_TOO_LONG" type="int" default="414">
</ApiItem>
<ApiItem kind="constant" name="STATUS_USE_PROXY" type="int" default="305">
</ApiItem>
<ApiItem kind="constant" name="STATUS_VARIANT_ALSO_NEGOTIATES" type="int" default="506">
</ApiItem>
<ApiItem kind="constant" name="STATUS_VERSION_NOT_SUPPORTED" type="int" default="505">
</ApiItem>
<ApiItem kind="constant" name="STATUS_WEB_SERVER_IS_DOWN" type="int" default="521">
</ApiItem>

## Http\Request

Class

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

- `\stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](../phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Http\Request`** - implements [`Phalcon\Http\RequestInterface`](#httprequestinterface), [`Phalcon\Http\Message\RequestMethodInterface`](#httpmessagerequestmethodinterface), [`Phalcon\Contracts\Http\AttributeRequest`](../phalcon_contracts/#contractshttpattributerequest)

`Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Filter\Filter` · `Phalcon\Filter\FilterInterface` · `Phalcon\Http\Message\RequestMethodInterface` · `Phalcon\Http\Request\Bag\AttributeBag` · `Phalcon\Http\Request\Exceptions\FilterServiceUnavailable` · `Phalcon\Http\Request\Exceptions\InvalidHost` · `Phalcon\Http\Request\Exceptions\InvalidHttpMethod` · `Phalcon\Http\Request\Exceptions\MissingFilters` · `Phalcon\Http\Request\Exceptions\SanitizerNotFound` · `Phalcon\Http\Request\File` · `Phalcon\Http\Request\FileInterface` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Traits\Php\FileTrait` · `stdClass`

### Method Summary

<ApiItem href="#httprequest-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Gets a variable from the $_REQUEST superglobal applying filters if
</ApiItem>
<ApiItem href="#httprequest-getacceptablecontent" visibility="public" name="getAcceptableContent" returnType="array" params={[]}>
Gets an array with mime/types and their quality accepted by the
</ApiItem>
<ApiItem href="#httprequest-getattributes" visibility="public" name="getAttributes" returnType="AttributeBag" params={[]}>
Returns the request attributes bag. Attributes are arbitrary,
</ApiItem>
<ApiItem href="#httprequest-getbasicauth" visibility="public" name="getBasicAuth" returnType="array|null" params={[]}>
Gets auth info accepted by the browser/client from
</ApiItem>
<ApiItem href="#httprequest-getbestaccept" visibility="public" name="getBestAccept" returnType="string" params={[]}>
Gets best mime/type accepted by the browser/client from
</ApiItem>
<ApiItem href="#httprequest-getbestcharset" visibility="public" name="getBestCharset" returnType="string" params={[]}>
Gets best charset accepted by the browser/client from
</ApiItem>
<ApiItem href="#httprequest-getbestlanguage" visibility="public" name="getBestLanguage" returnType="string" params={[]}>
Gets the best language accepted by the browser/client from
</ApiItem>
<ApiItem href="#httprequest-getclientaddress" visibility="public" name="getClientAddress" returnType="bool|string" params={[{"type":"bool","name":"trustForwardedHeader","default":"false"}]}>
Gets most possible client IP Address. This method searches in
</ApiItem>
<ApiItem href="#httprequest-getclientcharsets" visibility="public" name="getClientCharsets" returnType="array" params={[]}>
Gets a charsets array and their quality accepted by the browser/client
</ApiItem>
<ApiItem href="#httprequest-getcontenttype" visibility="public" name="getContentType" returnType="string|null" params={[]}>
Gets content type which request has been made
</ApiItem>
<ApiItem href="#httprequest-getdigestauth" visibility="public" name="getDigestAuth" returnType="array" params={[]}>
Gets auth info accepted by the browser/client from
</ApiItem>
<ApiItem href="#httprequest-getfiltereddata" visibility="public" name="getFilteredData" returnType="mixed" params={[{"type":"string","name":"methodKey","default":null},{"type":"string","name":"method","default":null},{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Gets filtered data
</ApiItem>
<ApiItem href="#httprequest-getfilteredpatch" visibility="public" name="getFilteredPatch" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Retrieves a patch value always sanitized with the preset filters
</ApiItem>
<ApiItem href="#httprequest-getfilteredpost" visibility="public" name="getFilteredPost" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Retrieves a post value always sanitized with the preset filters
</ApiItem>
<ApiItem href="#httprequest-getfilteredput" visibility="public" name="getFilteredPut" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Retrieves a put value always sanitized with the preset filters
</ApiItem>
<ApiItem href="#httprequest-getfilteredquery" visibility="public" name="getFilteredQuery" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Retrieves a query/get value always sanitized with the preset filters
</ApiItem>
<ApiItem href="#httprequest-gethttpreferer" visibility="public" name="getHTTPReferer" returnType="string" params={[]}>
Gets web page that refers active request. ie: http://www.google.com
</ApiItem>
<ApiItem href="#httprequest-getheader" visibility="public" name="getHeader" returnType="string" params={[{"type":"string","name":"header","default":null}]}>
Gets HTTP header from request data
</ApiItem>
<ApiItem href="#httprequest-getheaders" visibility="public" name="getHeaders" returnType="array" params={[]}>
Returns the available headers in the request
</ApiItem>
<ApiItem href="#httprequest-gethttphost" visibility="public" name="getHttpHost" returnType="string" params={[]}>
Gets host name used by the request.
</ApiItem>
<ApiItem href="#httprequest-gethttpmethodparameteroverride" visibility="public" name="getHttpMethodParameterOverride" returnType="bool" params={[]}>
Return the HTTP method parameter override flag
</ApiItem>
<ApiItem href="#httprequest-getjsonrawbody" visibility="public" name="getJsonRawBody" returnType="array|bool|stdClass" params={[{"type":"bool","name":"associative","default":"false"}]}>
Gets decoded JSON HTTP raw request body
</ApiItem>
<ApiItem href="#httprequest-getlanguages" visibility="public" name="getLanguages" returnType="array" params={[]}>
Gets languages array and their quality accepted by the browser/client
</ApiItem>
<ApiItem href="#httprequest-getmethod" visibility="public" name="getMethod" returnType="string" params={[]}>
Gets HTTP method which request has been made
</ApiItem>
<ApiItem href="#httprequest-getpatch" visibility="public" name="getPatch" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Gets a variable from put request
</ApiItem>
<ApiItem href="#httprequest-getport" visibility="public" name="getPort" returnType="int" params={[]}>
Gets information about the port on which the request is made.
</ApiItem>
<ApiItem href="#httprequest-getpost" visibility="public" name="getPost" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Gets a variable from the $_POST superglobal applying filters if needed
</ApiItem>
<ApiItem href="#httprequest-getpreferredisolocalevariant" visibility="public" name="getPreferredIsoLocaleVariant" returnType="string" params={[]}>
Gets the preferred ISO locale variant.
</ApiItem>
<ApiItem href="#httprequest-getput" visibility="public" name="getPut" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Gets a variable from put request
</ApiItem>
<ApiItem href="#httprequest-getquery" visibility="public" name="getQuery" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Gets variable from $_GET superglobal applying filters if needed.
</ApiItem>
<ApiItem href="#httprequest-getrawbody" visibility="public" name="getRawBody" returnType="string" params={[]}>
Gets HTTP raw request body
</ApiItem>
<ApiItem href="#httprequest-getscheme" visibility="public" name="getScheme" returnType="string" params={[]}>
Gets HTTP schema (http/https)
</ApiItem>
<ApiItem href="#httprequest-getserver" visibility="public" name="getServer" returnType="string|null" params={[{"type":"string","name":"name","default":null}]}>
Gets variable from $_SERVER superglobal
</ApiItem>
<ApiItem href="#httprequest-getserveraddress" visibility="public" name="getServerAddress" returnType="string" params={[]}>
Gets active server address IP
</ApiItem>
<ApiItem href="#httprequest-getservername" visibility="public" name="getServerName" returnType="string" params={[]}>
Gets active server name
</ApiItem>
<ApiItem href="#httprequest-geturi" visibility="public" name="getURI" returnType="string" params={[{"type":"bool","name":"onlyPath","default":"false"}]}>
Gets HTTP URI which request has been made to
</ApiItem>
<ApiItem href="#httprequest-getuploadedfiles" visibility="public" name="getUploadedFiles" returnType="array" params={[{"type":"bool","name":"onlySuccessful","default":"false"},{"type":"bool","name":"namedKeys","default":"false"}]}>
Gets attached files as Phalcon\Http\Request\File instances
</ApiItem>
<ApiItem href="#httprequest-getuseragent" visibility="public" name="getUserAgent" returnType="string" params={[]}>
Gets HTTP user agent used to make the request
</ApiItem>
<ApiItem href="#httprequest-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks whether $_REQUEST superglobal has certain index
</ApiItem>
<ApiItem href="#httprequest-hasfiles" visibility="public" name="hasFiles" returnType="bool" params={[]}>
Returns if the request has files or not
</ApiItem>
<ApiItem href="#httprequest-hasheader" visibility="public" name="hasHeader" returnType="bool" params={[{"type":"string","name":"header","default":null}]}>
Checks whether headers has certain index
</ApiItem>
<ApiItem href="#httprequest-haspatch" visibility="public" name="hasPatch" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks whether the PATCH data has certain index
</ApiItem>
<ApiItem href="#httprequest-haspost" visibility="public" name="hasPost" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks whether $_POST superglobal has certain index
</ApiItem>
<ApiItem href="#httprequest-hasput" visibility="public" name="hasPut" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks whether the PUT data has certain index
</ApiItem>
<ApiItem href="#httprequest-hasquery" visibility="public" name="hasQuery" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks whether $_GET superglobal has certain index
</ApiItem>
<ApiItem href="#httprequest-hasserver" visibility="public" name="hasServer" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks whether $_SERVER superglobal has certain index
</ApiItem>
<ApiItem href="#httprequest-isajax" visibility="public" name="isAjax" returnType="bool" params={[]}>
Checks whether request has been made using ajax
</ApiItem>
<ApiItem href="#httprequest-isconnect" visibility="public" name="isConnect" returnType="bool" params={[]}>
Checks whether HTTP method is CONNECT.
</ApiItem>
<ApiItem href="#httprequest-isdelete" visibility="public" name="isDelete" returnType="bool" params={[]}>
Checks whether HTTP method is DELETE.
</ApiItem>
<ApiItem href="#httprequest-isget" visibility="public" name="isGet" returnType="bool" params={[]}>
Checks whether HTTP method is GET.
</ApiItem>
<ApiItem href="#httprequest-ishead" visibility="public" name="isHead" returnType="bool" params={[]}>
Checks whether HTTP method is HEAD.
</ApiItem>
<ApiItem href="#httprequest-isjson" visibility="public" name="isJson" returnType="bool" params={[]}>
Checks whether request content type contains json data
</ApiItem>
<ApiItem href="#httprequest-ismethod" visibility="public" name="isMethod" returnType="bool" params={[{"type":"mixed","name":"methods","default":null},{"type":"bool","name":"strict","default":"false"}]}>
Check if HTTP method match any of the passed methods
</ApiItem>
<ApiItem href="#httprequest-isoptions" visibility="public" name="isOptions" returnType="bool" params={[]}>
Checks whether HTTP method is OPTIONS.
</ApiItem>
<ApiItem href="#httprequest-ispatch" visibility="public" name="isPatch" returnType="bool" params={[]}>
Checks whether HTTP method is PATCH.
</ApiItem>
<ApiItem href="#httprequest-ispost" visibility="public" name="isPost" returnType="bool" params={[]}>
Checks whether HTTP method is POST.
</ApiItem>
<ApiItem href="#httprequest-ispurge" visibility="public" name="isPurge" returnType="bool" params={[]}>
Checks whether HTTP method is PURGE (Squid and Varnish support).
</ApiItem>
<ApiItem href="#httprequest-isput" visibility="public" name="isPut" returnType="bool" params={[]}>
Checks whether HTTP method is PUT.
</ApiItem>
<ApiItem href="#httprequest-issecure" visibility="public" name="isSecure" returnType="bool" params={[]}>
Checks whether request has been made using any secure layer
</ApiItem>
<ApiItem href="#httprequest-issoap" visibility="public" name="isSoap" returnType="bool" params={[]}>
Checks whether request has been made using SOAP
</ApiItem>
<ApiItem href="#httprequest-isstricthostcheck" visibility="public" name="isStrictHostCheck" returnType="bool" params={[]}>
Checks if the `Request::getHttpHost` method will be use strict validation
</ApiItem>
<ApiItem href="#httprequest-istrace" visibility="public" name="isTrace" returnType="bool" params={[]}>
Checks whether HTTP method is TRACE.
</ApiItem>
<ApiItem href="#httprequest-isvalidhttpmethod" visibility="public" name="isValidHttpMethod" returnType="bool" params={[{"type":"string","name":"method","default":null}]}>
Checks if a method is a valid HTTP method
</ApiItem>
<ApiItem href="#httprequest-numfiles" visibility="public" name="numFiles" returnType="int" params={[{"type":"bool","name":"onlySuccessful","default":"false"}]}>
Returns the number of files available
</ApiItem>
<ApiItem href="#httprequest-sethttpmethodparameteroverride" visibility="public" name="setHttpMethodParameterOverride" returnType="static" params={[{"type":"bool","name":"override","default":null}]}>
Set the HTTP method parameter override flag
</ApiItem>
<ApiItem href="#httprequest-setparameterfilters" visibility="public" name="setParameterFilters" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"filters","default":"[]"},{"type":"array","name":"scope","default":"[]"}]}>
Sets automatic sanitizers/filters for a particular field and for
</ApiItem>
<ApiItem href="#httprequest-setstricthostcheck" visibility="public" name="setStrictHostCheck" returnType="static" params={[{"type":"bool","name":"flag","default":"true"}]}>
Sets if the `Request::getHttpHost` method must be use strict validation
</ApiItem>
<ApiItem href="#httprequest-settrustedproxies" visibility="public" name="setTrustedProxies" returnType="static" params={[{"type":"array","name":"trustedProxies","default":null}]}>
Set a trusted proxy list for X-Forwarded-For header
</ApiItem>
<ApiItem href="#httprequest-settrustedproxyheader" visibility="public" name="setTrustedProxyHeader" returnType="static" params={[{"type":"string","name":"trustedProxyHeader","default":null}]}>
This header takes priority when parsing HTTP headers
</ApiItem>
<ApiItem href="#httprequest-getbestquality" visibility="protected" name="getBestQuality" returnType="string" params={[{"type":"array","name":"qualityParts","default":null},{"type":"string","name":"name","default":null}]}>
Process a request header and return the one with best quality
</ApiItem>
<ApiItem href="#httprequest-gethelper" visibility="protected" name="getHelper" returnType="mixed" params={[{"type":"array","name":"source","default":null},{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Helper to get data from superglobals, applying filters if needed.
</ApiItem>
<ApiItem href="#httprequest-getqualityheader" visibility="protected" name="getQualityHeader" returnType="array" params={[{"type":"string","name":"serverIndex","default":null},{"type":"string","name":"name","default":null}]}>
Process a request header and return an array of values with their
</ApiItem>
<ApiItem href="#httprequest-hasfilehelper" visibility="protected" name="hasFileHelper" returnType="int" params={[{"type":"mixed","name":"data","default":null},{"type":"bool","name":"onlySuccessful","default":null}]}>
Recursively counts file in an array of files
</ApiItem>
<ApiItem href="#httprequest-isipaddressincidr" visibility="protected" name="isIpAddressInCIDR" returnType="bool" params={[{"type":"string","name":"ip","default":null},{"type":"string","name":"cidr","default":null}]}>
Check if an IP address exists in CIDR range
</ApiItem>
<ApiItem href="#httprequest-resolveauthorizationheaders" visibility="protected" name="resolveAuthorizationHeaders" returnType="array" params={[]}>
Resolve authorization headers.
</ApiItem>
<ApiItem href="#httprequest-smoothfiles" visibility="protected" name="smoothFiles" returnType="array" params={[{"type":"array","name":"names","default":null},{"type":"array","name":"types","default":null},{"type":"array","name":"tmpNames","default":null},{"type":"array","name":"sizes","default":null},{"type":"array","name":"errors","default":null},{"type":"string","name":"prefix","default":null}]}>
Smooth out $_FILES to have plain array with all files uploaded
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="attributes" type="AttributeBag|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="filterService" type="FilterInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="methodOverride" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="postCache" type="array|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="queryFilters" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="rawBody" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="strictHostCheck" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="trustedProxies" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="trustedProxyHeader" type="string" default="&quot;&quot;">
</ApiItem>

### Methods

<h4 id="httprequest-get"><code>get()</code></h4>

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

@todo check the filters

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

Gets the best language accepted by the browser/client from
_SERVER["HTTP_ACCEPT_LANGUAGE"]

<h4 id="httprequest-getclientaddress"><code>getClientAddress()</code></h4>

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
string|null $name = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Gets filtered data

<h4 id="httprequest-getfilteredpatch"><code>getFilteredPatch()</code></h4>

```php
public function getFilteredPatch(
string|null $name = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Retrieves a patch value always sanitized with the preset filters

<h4 id="httprequest-getfilteredpost"><code>getFilteredPost()</code></h4>

```php
public function getFilteredPost(
string|null $name = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Retrieves a post value always sanitized with the preset filters

<h4 id="httprequest-getfilteredput"><code>getFilteredPut()</code></h4>

```php
public function getFilteredPut(
string|null $name = null,
mixed $defaultValue = null,
bool $notAllowEmpty = false,
bool $noRecursive = false
): mixed;
```

Retrieves a put value always sanitized with the preset filters

<h4 id="httprequest-getfilteredquery"><code>getFilteredQuery()</code></h4>

```php
public function getFilteredQuery(
string|null $name = null,
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
public function getJsonRawBody( bool $associative = false ): array|bool|stdClass;
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

<h4 id="httprequest-getport"><code>getPort()</code></h4>

```php
public function getPort(): int;
```

Gets information about the port on which the request is made.

<h4 id="httprequest-getpost"><code>getPost()</code></h4>

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

<h4 id="httprequest-getpreferredisolocalevariant"><code>getPreferredIsoLocaleVariant()</code></h4>

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

<h4 id="httprequest-getput"><code>getPut()</code></h4>

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

<h4 id="httprequest-getquery"><code>getQuery()</code></h4>

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
): array;
```

Gets attached files as Phalcon\Http\Request\File instances

<h4 id="httprequest-getuseragent"><code>getUserAgent()</code></h4>

```php
public function getUserAgent(): string;
```

Gets HTTP user agent used to make the request

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

@todo check the $methods type - refactor this !!

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
public function numFiles( bool $onlySuccessful = false ): int;
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
string|null $name = null,
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

Process a request header and return an array of values with their
qualities

<h4 id="httprequest-hasfilehelper"><code>hasFileHelper()</code></h4>

```php
protected function hasFileHelper(
mixed $data,
bool $onlySuccessful
): int;
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
array $tmpNames,
array $sizes,
array $errors,
string $prefix
): array;
```

Smooth out $_FILES to have plain array with all files uploaded

## Http\RequestInterface

Interface

Interface for Phalcon\Http\Request

- **`Phalcon\Http\RequestInterface`**
- [`Phalcon\Contracts\Http\AttributeRequest`](../phalcon_contracts/#contractshttpattributerequest)

`Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Http\Request\FileInterface` · `stdClass`

### Method Summary

<ApiItem href="#httprequestinterface-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Gets a variable from the $_REQUEST superglobal applying filters if
</ApiItem>
<ApiItem href="#httprequestinterface-getacceptablecontent" visibility="public" name="getAcceptableContent" returnType="array" params={[]}>
Return an array with mime/types and their quality accepted by the
</ApiItem>
<ApiItem href="#httprequestinterface-getbasicauth" visibility="public" name="getBasicAuth" returnType="array|null" params={[]}>
Gets auth info accepted by the browser/client from
</ApiItem>
<ApiItem href="#httprequestinterface-getbestaccept" visibility="public" name="getBestAccept" returnType="string" params={[]}>
Return the best mime/type accepted by the browser/client from
</ApiItem>
<ApiItem href="#httprequestinterface-getbestcharset" visibility="public" name="getBestCharset" returnType="string" params={[]}>
Return the best charset accepted by the browser/client from
</ApiItem>
<ApiItem href="#httprequestinterface-getbestlanguage" visibility="public" name="getBestLanguage" returnType="string" params={[]}>
Return the best language accepted by the browser/client from
</ApiItem>
<ApiItem href="#httprequestinterface-getclientaddress" visibility="public" name="getClientAddress" returnType="bool|string" params={[{"type":"bool","name":"trustForwardedHeader","default":"false"}]}>
Return the most possible client IPv4 Address. This method searches in
</ApiItem>
<ApiItem href="#httprequestinterface-getclientcharsets" visibility="public" name="getClientCharsets" returnType="array" params={[]}>
Return a charset array and their quality accepted by the browser/client
</ApiItem>
<ApiItem href="#httprequestinterface-getcontenttype" visibility="public" name="getContentType" returnType="string|null" params={[]}>
Return the content type which request has been made
</ApiItem>
<ApiItem href="#httprequestinterface-getdigestauth" visibility="public" name="getDigestAuth" returnType="array" params={[]}>
Return the auth info accepted by the browser/client from
</ApiItem>
<ApiItem href="#httprequestinterface-gethttpreferer" visibility="public" name="getHTTPReferer" returnType="string" params={[]}>
Return the web page that refers active request. ie: https://phalcon.io
</ApiItem>
<ApiItem href="#httprequestinterface-getheader" visibility="public" name="getHeader" returnType="string" params={[{"type":"string","name":"header","default":null}]}>
Return the HTTP header from request data
</ApiItem>
<ApiItem href="#httprequestinterface-getheaders" visibility="public" name="getHeaders" returnType="array" params={[]}>
Return the available headers in the request
</ApiItem>
<ApiItem href="#httprequestinterface-gethttphost" visibility="public" name="getHttpHost" returnType="string" params={[]}>
Return the host name used by the request.
</ApiItem>
<ApiItem href="#httprequestinterface-getjsonrawbody" visibility="public" name="getJsonRawBody" returnType="array|bool|stdClass" params={[{"type":"bool","name":"associative","default":"false"}]}>
Return the decoded JSON HTTP raw request body
</ApiItem>
<ApiItem href="#httprequestinterface-getlanguages" visibility="public" name="getLanguages" returnType="array" params={[]}>
Return the languages array and their quality accepted by the
</ApiItem>
<ApiItem href="#httprequestinterface-getmethod" visibility="public" name="getMethod" returnType="string" params={[]}>
Return the HTTP method which request has been made
</ApiItem>
<ApiItem href="#httprequestinterface-getport" visibility="public" name="getPort" returnType="int" params={[]}>
Return the information about the port on which the request is made
</ApiItem>
<ApiItem href="#httprequestinterface-getpost" visibility="public" name="getPost" returnType="mixed" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Return a variable from the $_POST superglobal applying filters if needed.
</ApiItem>
<ApiItem href="#httprequestinterface-getput" visibility="public" name="getPut" returnType="" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Return a variable from put request
</ApiItem>
<ApiItem href="#httprequestinterface-getquery" visibility="public" name="getQuery" returnType="" params={[{"type":"string|null","name":"name","default":"null"},{"type":"mixed","name":"filters","default":"null"},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"bool","name":"notAllowEmpty","default":"false"},{"type":"bool","name":"noRecursive","default":"false"}]}>
Return a variable from $_GET superglobal applying filters if needed.
</ApiItem>
<ApiItem href="#httprequestinterface-getrawbody" visibility="public" name="getRawBody" returnType="string" params={[]}>
Return the HTTP raw request body
</ApiItem>
<ApiItem href="#httprequestinterface-getscheme" visibility="public" name="getScheme" returnType="string" params={[]}>
Return the HTTP schema (http/https)
</ApiItem>
<ApiItem href="#httprequestinterface-getserver" visibility="public" name="getServer" returnType="string|null" params={[{"type":"string","name":"name","default":null}]}>
Return a variable from $_SERVER superglobal
</ApiItem>
<ApiItem href="#httprequestinterface-getserveraddress" visibility="public" name="getServerAddress" returnType="string" params={[]}>
Return the active server address IP
</ApiItem>
<ApiItem href="#httprequestinterface-getservername" visibility="public" name="getServerName" returnType="string" params={[]}>
Return the active server name
</ApiItem>
<ApiItem href="#httprequestinterface-geturi" visibility="public" name="getURI" returnType="string" params={[{"type":"bool","name":"onlyPath","default":"false"}]}>
Return the HTTP URI which request has been made to
</ApiItem>
<ApiItem href="#httprequestinterface-getuploadedfiles" visibility="public" name="getUploadedFiles" returnType="array" params={[{"type":"bool","name":"onlySuccessful","default":"false"},{"type":"bool","name":"namedKeys","default":"false"}]}>
Return the attached files as Phalcon\Http\Request\FileInterface
</ApiItem>
<ApiItem href="#httprequestinterface-getuseragent" visibility="public" name="getUserAgent" returnType="string" params={[]}>
Return the HTTP user agent used to make the request
</ApiItem>
<ApiItem href="#httprequestinterface-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Return whether the $_REQUEST superglobal has certain index
</ApiItem>
<ApiItem href="#httprequestinterface-hasfiles" visibility="public" name="hasFiles" returnType="bool" params={[]}>
Return whether the request includes attached files
</ApiItem>
<ApiItem href="#httprequestinterface-hasheader" visibility="public" name="hasHeader" returnType="bool" params={[{"type":"string","name":"header","default":null}]}>
Return whether the headers have a certain index
</ApiItem>
<ApiItem href="#httprequestinterface-haspost" visibility="public" name="hasPost" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Return whether the $_POST superglobal has certain index
</ApiItem>
<ApiItem href="#httprequestinterface-hasput" visibility="public" name="hasPut" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Return whether the PUT data has certain index
</ApiItem>
<ApiItem href="#httprequestinterface-hasquery" visibility="public" name="hasQuery" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Return whether the $_GET superglobal has certain index
</ApiItem>
<ApiItem href="#httprequestinterface-hasserver" visibility="public" name="hasServer" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Return whether the $_SERVER superglobal has certain index
</ApiItem>
<ApiItem href="#httprequestinterface-isajax" visibility="public" name="isAjax" returnType="bool" params={[]}>
Return whether the request has been made using ajax. Checks if
</ApiItem>
<ApiItem href="#httprequestinterface-isconnect" visibility="public" name="isConnect" returnType="bool" params={[]}>
Return whether the HTTP method is CONNECT. if
</ApiItem>
<ApiItem href="#httprequestinterface-isdelete" visibility="public" name="isDelete" returnType="bool" params={[]}>
Return whether the HTTP method is DELETE. if
</ApiItem>
<ApiItem href="#httprequestinterface-isget" visibility="public" name="isGet" returnType="bool" params={[]}>
Return whether the HTTP method is GET. if
</ApiItem>
<ApiItem href="#httprequestinterface-ishead" visibility="public" name="isHead" returnType="bool" params={[]}>
Return whether the HTTP method is HEAD. if
</ApiItem>
<ApiItem href="#httprequestinterface-ismethod" visibility="public" name="isMethod" returnType="bool" params={[{"type":"mixed","name":"methods","default":null},{"type":"bool","name":"strict","default":"false"}]}>
Return if the current HTTP method matches any of the passed methods
</ApiItem>
<ApiItem href="#httprequestinterface-isoptions" visibility="public" name="isOptions" returnType="bool" params={[]}>
Return whether the HTTP method is OPTIONS. if
</ApiItem>
<ApiItem href="#httprequestinterface-ispost" visibility="public" name="isPost" returnType="bool" params={[]}>
Return whether the HTTP method is POST. if
</ApiItem>
<ApiItem href="#httprequestinterface-ispurge" visibility="public" name="isPurge" returnType="bool" params={[]}>
Return whether the HTTP method is PURGE (Squid and Varnish support). if
</ApiItem>
<ApiItem href="#httprequestinterface-isput" visibility="public" name="isPut" returnType="bool" params={[]}>
Return whether the HTTP method is PUT. if
</ApiItem>
<ApiItem href="#httprequestinterface-issecure" visibility="public" name="isSecure" returnType="bool" params={[]}>
Return whether the request has been made using any secure layer
</ApiItem>
<ApiItem href="#httprequestinterface-issoap" visibility="public" name="isSoap" returnType="bool" params={[]}>
Return whether the request has been made using SOAP
</ApiItem>
<ApiItem href="#httprequestinterface-istrace" visibility="public" name="isTrace" returnType="bool" params={[]}>
Return whether the HTTP method is TRACE.
</ApiItem>
<ApiItem href="#httprequestinterface-numfiles" visibility="public" name="numFiles" returnType="int" params={[{"type":"bool","name":"onlySuccessful","default":"false"}]}>
Returns the number of files available
</ApiItem>

### Methods

<h4 id="httprequestinterface-get"><code>get()</code></h4>

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

@todo check the filters here

<h4 id="httprequestinterface-getacceptablecontent"><code>getAcceptableContent()</code></h4>

```php
public function getAcceptableContent(): array;
```

Return an array with mime/types and their quality accepted by the
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

Return the best mime/type accepted by the browser/client from
_SERVER["HTTP_ACCEPT"]

<h4 id="httprequestinterface-getbestcharset"><code>getBestCharset()</code></h4>

```php
public function getBestCharset(): string;
```

Return the best charset accepted by the browser/client from
_SERVER["HTTP_ACCEPT_CHARSET"]

<h4 id="httprequestinterface-getbestlanguage"><code>getBestLanguage()</code></h4>

```php
public function getBestLanguage(): string;
```

Return the best language accepted by the browser/client from
_SERVER["HTTP_ACCEPT_LANGUAGE"]

<h4 id="httprequestinterface-getclientaddress"><code>getClientAddress()</code></h4>

```php
public function getClientAddress( bool $trustForwardedHeader = false ): bool|string;
```

Return the most possible client IPv4 Address. This method searches in
$_SERVER["REMOTE_ADDR"] and optionally in
$_SERVER["HTTP_X_FORWARDED_FOR"]

<h4 id="httprequestinterface-getclientcharsets"><code>getClientCharsets()</code></h4>

```php
public function getClientCharsets(): array;
```

Return a charset array and their quality accepted by the browser/client
from _SERVER["HTTP_ACCEPT_CHARSET"]

<h4 id="httprequestinterface-getcontenttype"><code>getContentType()</code></h4>

```php
public function getContentType(): string|null;
```

Return the content type which request has been made

<h4 id="httprequestinterface-getdigestauth"><code>getDigestAuth()</code></h4>

```php
public function getDigestAuth(): array;
```

Return the auth info accepted by the browser/client from
$_SERVER["PHP_AUTH_DIGEST"]

<h4 id="httprequestinterface-gethttpreferer"><code>getHTTPReferer()</code></h4>

```php
public function getHTTPReferer(): string;
```

Return the web page that refers active request. ie: https://phalcon.io

<h4 id="httprequestinterface-getheader"><code>getHeader()</code></h4>

```php
public function getHeader( string $header ): string;
```

Return the HTTP header from request data

<h4 id="httprequestinterface-getheaders"><code>getHeaders()</code></h4>

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

<h4 id="httprequestinterface-gethttphost"><code>getHttpHost()</code></h4>

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

<h4 id="httprequestinterface-getjsonrawbody"><code>getJsonRawBody()</code></h4>

```php
public function getJsonRawBody( bool $associative = false ): array|bool|stdClass;
```

Return the decoded JSON HTTP raw request body

<h4 id="httprequestinterface-getlanguages"><code>getLanguages()</code></h4>

```php
public function getLanguages(): array;
```

Return the languages array and their quality accepted by the
browser/client from _SERVER["HTTP_ACCEPT_LANGUAGE"]

<h4 id="httprequestinterface-getmethod"><code>getMethod()</code></h4>

```php
public function getMethod(): string;
```

Return the HTTP method which request has been made

If the X-HTTP-Method-Override header is set, and if the method is a POST,
then it is used to determine the "real" intended HTTP method.

The _method request parameter can also be used to determine the HTTP
method, but only if setHttpMethodParameterOverride(true) has been called.

The method is always an uppercased string.

<h4 id="httprequestinterface-getport"><code>getPort()</code></h4>

```php
public function getPort(): int;
```

Return the information about the port on which the request is made

<h4 id="httprequestinterface-getpost"><code>getPost()</code></h4>

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

@todo check the filters

<h4 id="httprequestinterface-getput"><code>getPut()</code></h4>

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
// Returns value from PUT stream without sanitizing
$userEmail = $request->getPut("user_email");

// Returns value from PUT stream with sanitizing
$userEmail = $request->getPut("user_email", "email");
```

@todo check the filters

<h4 id="httprequestinterface-getquery"><code>getQuery()</code></h4>

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

@todo check the filters

<h4 id="httprequestinterface-getrawbody"><code>getRawBody()</code></h4>

```php
public function getRawBody(): string;
```

Return the HTTP raw request body

<h4 id="httprequestinterface-getscheme"><code>getScheme()</code></h4>

```php
public function getScheme(): string;
```

Return the HTTP schema (http/https)

<h4 id="httprequestinterface-getserver"><code>getServer()</code></h4>

```php
public function getServer( string $name ): string|null;
```

Return a variable from $_SERVER superglobal

<h4 id="httprequestinterface-getserveraddress"><code>getServerAddress()</code></h4>

```php
public function getServerAddress(): string;
```

Return the active server address IP

<h4 id="httprequestinterface-getservername"><code>getServerName()</code></h4>

```php
public function getServerName(): string;
```

Return the active server name

<h4 id="httprequestinterface-geturi"><code>getURI()</code></h4>

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

<h4 id="httprequestinterface-getuploadedfiles"><code>getUploadedFiles()</code></h4>

```php
public function getUploadedFiles(
bool $onlySuccessful = false,
bool $namedKeys = false
): array;
```

Return the attached files as Phalcon\Http\Request\FileInterface
compatible instances

<h4 id="httprequestinterface-getuseragent"><code>getUserAgent()</code></h4>

```php
public function getUserAgent(): string;
```

Return the HTTP user agent used to make the request

<h4 id="httprequestinterface-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Return whether the $_REQUEST superglobal has certain index

<h4 id="httprequestinterface-hasfiles"><code>hasFiles()</code></h4>

```php
public function hasFiles(): bool;
```

Return whether the request includes attached files

<h4 id="httprequestinterface-hasheader"><code>hasHeader()</code></h4>

```php
public function hasHeader( string $header ): bool;
```

Return whether the headers have a certain index

<h4 id="httprequestinterface-haspost"><code>hasPost()</code></h4>

```php
public function hasPost( string $name ): bool;
```

Return whether the $_POST superglobal has certain index

<h4 id="httprequestinterface-hasput"><code>hasPut()</code></h4>

```php
public function hasPut( string $name ): bool;
```

Return whether the PUT data has certain index

<h4 id="httprequestinterface-hasquery"><code>hasQuery()</code></h4>

```php
public function hasQuery( string $name ): bool;
```

Return whether the $_GET superglobal has certain index

<h4 id="httprequestinterface-hasserver"><code>hasServer()</code></h4>

```php
public function hasServer( string $name ): bool;
```

Return whether the $_SERVER superglobal has certain index

<h4 id="httprequestinterface-isajax"><code>isAjax()</code></h4>

```php
public function isAjax(): bool;
```

Return whether the request has been made using ajax. Checks if
$_SERVER["HTTP_X_REQUESTED_WITH"] === "XMLHttpRequest"

<h4 id="httprequestinterface-isconnect"><code>isConnect()</code></h4>

```php
public function isConnect(): bool;
```

Return whether the HTTP method is CONNECT. if
$_SERVER["REQUEST_METHOD"] === "CONNECT"

<h4 id="httprequestinterface-isdelete"><code>isDelete()</code></h4>

```php
public function isDelete(): bool;
```

Return whether the HTTP method is DELETE. if
$_SERVER["REQUEST_METHOD"] === "DELETE"

<h4 id="httprequestinterface-isget"><code>isGet()</code></h4>

```php
public function isGet(): bool;
```

Return whether the HTTP method is GET. if
$_SERVER["REQUEST_METHOD"] === "GET"

<h4 id="httprequestinterface-ishead"><code>isHead()</code></h4>

```php
public function isHead(): bool;
```

Return whether the HTTP method is HEAD. if
$_SERVER["REQUEST_METHOD"] === "HEAD"

<h4 id="httprequestinterface-ismethod"><code>isMethod()</code></h4>

```php
public function isMethod(
mixed $methods,
bool $strict = false
): bool;
```

Return if the current HTTP method matches any of the passed methods

<h4 id="httprequestinterface-isoptions"><code>isOptions()</code></h4>

```php
public function isOptions(): bool;
```

Return whether the HTTP method is OPTIONS. if
$_SERVER["REQUEST_METHOD"] === "OPTIONS"

<h4 id="httprequestinterface-ispost"><code>isPost()</code></h4>

```php
public function isPost(): bool;
```

Return whether the HTTP method is POST. if
$_SERVER["REQUEST_METHOD"] === "POST"

<h4 id="httprequestinterface-ispurge"><code>isPurge()</code></h4>

```php
public function isPurge(): bool;
```

Return whether the HTTP method is PURGE (Squid and Varnish support). if
$_SERVER["REQUEST_METHOD"] === "PURGE"

<h4 id="httprequestinterface-isput"><code>isPut()</code></h4>

```php
public function isPut(): bool;
```

Return whether the HTTP method is PUT. if
$_SERVER["REQUEST_METHOD"] === "PUT"

<h4 id="httprequestinterface-issecure"><code>isSecure()</code></h4>

```php
public function isSecure(): bool;
```

Return whether the request has been made using any secure layer

<h4 id="httprequestinterface-issoap"><code>isSoap()</code></h4>

```php
public function isSoap(): bool;
```

Return whether the request has been made using SOAP

<h4 id="httprequestinterface-istrace"><code>isTrace()</code></h4>

```php
public function isTrace(): bool;
```

Return whether the HTTP method is TRACE.
if $_SERVER["REQUEST_METHOD"] === "TRACE"

<h4 id="httprequestinterface-numfiles"><code>numFiles()</code></h4>

```php
public function numFiles( bool $onlySuccessful = false ): int;
```

Returns the number of files available

## Http\Request\Bag\AbstractBag

Abstract

Shared base for the HTTP request bags. A bag is a string- or integer-keyed
value store backed by a raw array, exposing `get/has/set/remove/all` plus
typed readers for cast-with-default access.

Two protected hooks (`normalizeKey`, `normalizeItems`) let subclasses
change key handling without restating the surface.

The ArrayAccess append form (`$bag[] = $value`) is rejected with a
NullKeyException: the append form supplies no explicit key, so the write
could never be addressed by the caller.

@implements ArrayAccess&lt;int|string, mixed>
@implements IteratorAggregate&lt;int|string, mixed>

- **`Phalcon\Http\Request\Bag\AbstractBag`** - implements `\ArrayAccess`, `\Countable`, `\IteratorAggregate`
- [`Phalcon\Http\Request\Bag\AttributeBag`](#httprequestbagattributebag)

`ArrayAccess` · `ArrayIterator` · `Countable` · `IteratorAggregate` · `Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Http\Request\Exceptions\NullKeyException` · `Stringable` · `Traversable`

### Method Summary

<ApiItem href="#httprequestbagabstractbag-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"items","default":"[]"}]}>
AbstractBag constructor.
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-all" visibility="public" name="all" returnType="array" params={[]}>
Returns all the elements of the bag
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-clear" visibility="public" name="clear" returnType="void" params={[]}>
Removes all the elements of the bag
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-count" visibility="public" name="count" returnType="int" params={[]}>
Returns the number of elements in the bag
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-get" visibility="public" name="get" returnType="mixed" params={[{"type":"int|string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns an element of the bag, or the default value if it is not set
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-getarray" visibility="public" name="getArray" returnType="array" params={[{"type":"int|string","name":"key","default":null},{"type":"array","name":"defaultValue","default":"[]"}]}>
Returns an element of the bag as an array. The default value is
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-getbool" visibility="public" name="getBool" returnType="bool" params={[{"type":"int|string","name":"key","default":null},{"type":"bool","name":"defaultValue","default":"false"}]}>
Returns an element of the bag cast to bool, or the default value if
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-getfloat" visibility="public" name="getFloat" returnType="float" params={[{"type":"int|string","name":"key","default":null},{"type":"float","name":"defaultValue","default":"0"}]}>
Returns an element of the bag cast to float, or the default value if
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-getint" visibility="public" name="getInt" returnType="int" params={[{"type":"int|string","name":"key","default":null},{"type":"int","name":"defaultValue","default":"0"}]}>
Returns an element of the bag cast to int, or the default value if
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-getiterator" visibility="public" name="getIterator" returnType="Traversable" params={[]}>
Returns the iterator of the bag
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-getstring" visibility="public" name="getString" returnType="string" params={[{"type":"int|string","name":"key","default":null},{"type":"string","name":"defaultValue","default":"\"\""}]}>
Returns an element of the bag cast to string, or the default value if
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-has" visibility="public" name="has" returnType="bool" params={[{"type":"int|string","name":"key","default":null}]}>
Checks whether an element exists in the bag
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-offsetexists" visibility="public" name="offsetExists" returnType="bool" params={[{"type":"mixed","name":"offset","default":null}]}>
Whether an offset exists
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-offsetget" visibility="public" name="offsetGet" returnType="mixed" params={[{"type":"mixed","name":"offset","default":null}]}>
Offset to retrieve
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-offsetset" visibility="public" name="offsetSet" returnType="void" params={[{"type":"mixed","name":"offset","default":null},{"type":"mixed","name":"value","default":null}]}>
Offset to set
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-offsetunset" visibility="public" name="offsetUnset" returnType="void" params={[{"type":"mixed","name":"offset","default":null}]}>
Offset to unset
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-remove" visibility="public" name="remove" returnType="void" params={[{"type":"int|string","name":"key","default":null}]}>
Removes an element from the bag
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-set" visibility="public" name="set" returnType="void" params={[{"type":"int|string","name":"key","default":null},{"type":"mixed","name":"value","default":null}]}>
Sets an element in the bag
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-normalizeitems" visibility="protected" name="normalizeItems" returnType="array" params={[{"type":"array","name":"items","default":null}]}>
Normalizes the items at construction time. Identity in the base;
</ApiItem>
<ApiItem href="#httprequestbagabstractbag-normalizekey" visibility="protected" name="normalizeKey" returnType="int|string" params={[{"type":"int|string","name":"key","default":null}]}>
Normalizes a key for lookups and writes. Identity in the base;
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="items" type="array" default="[]">
</ApiItem>

### Methods

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

<h4 id="httprequestbagabstractbag-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Removes all the elements of the bag

<h4 id="httprequestbagabstractbag-count"><code>count()</code></h4>

```php
public function count(): int;
```

Returns the number of elements in the bag

<h4 id="httprequestbagabstractbag-get"><code>get()</code></h4>

```php
public function get(
int|string $key,
mixed $defaultValue = null
): mixed;
```

Returns an element of the bag, or the default value if it is not set

<h4 id="httprequestbagabstractbag-getarray"><code>getArray()</code></h4>

```php
public function getArray(
int|string $key,
array $defaultValue = []
): array;
```

Returns an element of the bag as an array. The default value is
returned if the element is not set or is not an array

<h4 id="httprequestbagabstractbag-getbool"><code>getBool()</code></h4>

```php
public function getBool(
int|string $key,
bool $defaultValue = false
): bool;
```

Returns an element of the bag cast to bool, or the default value if
it is not set

<h4 id="httprequestbagabstractbag-getfloat"><code>getFloat()</code></h4>

```php
public function getFloat(
int|string $key,
float $defaultValue = 0
): float;
```

Returns an element of the bag cast to float, or the default value if
it is not set

<h4 id="httprequestbagabstractbag-getint"><code>getInt()</code></h4>

```php
public function getInt(
int|string $key,
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
int|string $key,
string $defaultValue = ""
): string;
```

Returns an element of the bag cast to string, or the default value if
it is not set

<h4 id="httprequestbagabstractbag-has"><code>has()</code></h4>

```php
public function has( int|string $key ): bool;
```

Checks whether an element exists in the bag

<h4 id="httprequestbagabstractbag-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $offset ): bool;
```

Whether an offset exists

<h4 id="httprequestbagabstractbag-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $offset ): mixed;
```

Offset to retrieve

<h4 id="httprequestbagabstractbag-offsetset"><code>offsetSet()</code></h4>

```php
public function offsetSet(
mixed $offset,
mixed $value
): void;
```

Offset to set

<h4 id="httprequestbagabstractbag-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $offset ): void;
```

Offset to unset

<h4 id="httprequestbagabstractbag-remove"><code>remove()</code></h4>

```php
public function remove( int|string $key ): void;
```

Removes an element from the bag

<h4 id="httprequestbagabstractbag-set"><code>set()</code></h4>

```php
public function set(
int|string $key,
mixed $value
): void;
```

Sets an element in the bag

<h4 id="httprequestbagabstractbag-normalizeitems"><code>normalizeItems()</code></h4>

```php
protected function normalizeItems( array $items ): array;
```

Normalizes the items at construction time. Identity in the base;
subclasses can override it to normalize keys

<h4 id="httprequestbagabstractbag-normalizekey"><code>normalizeKey()</code></h4>

```php
protected function normalizeKey( int|string $key ): int|string;
```

Normalizes a key for lookups and writes. Identity in the base;
subclasses can override it to change key handling

## Http\Request\Bag\AttributeBag

Class

Holds the request attributes: arbitrary, application-defined values
attached to the request during its lifecycle (router, dispatcher,
security components etc.). Unlike the other request bags, it is not
hydrated from a superglobal - it always starts empty.

The base class supplies the entire surface; this class exists as a
distinct type so DI typing and IDE autocomplete stay precise.

- [`Phalcon\Http\Request\Bag\AbstractBag`](#httprequestbagabstractbag)
- **`Phalcon\Http\Request\Bag\AttributeBag`**

## Http\Request\Exception

Class

Phalcon\Http\Request\Exception

Exceptions thrown in Phalcon\Http\Request will use this class

- `\Exception`
- **`Phalcon\Http\Request\Exception`**
- [`Phalcon\Http\Request\Exceptions\FilterServiceUnavailable`](#httprequestexceptionsfilterserviceunavailable)
- [`Phalcon\Http\Request\Exceptions\InvalidHttpMethod`](#httprequestexceptionsinvalidhttpmethod)
- [`Phalcon\Http\Request\Exceptions\MissingFilters`](#httprequestexceptionsmissingfilters)
- [`Phalcon\Http\Request\Exceptions\NullKeyException`](#httprequestexceptionsnullkeyexception)
- [`Phalcon\Http\Request\Exceptions\SanitizerNotFound`](#httprequestexceptionssanitizernotfound)

## Http\Request\Exceptions\FilterServiceUnavailable

Class

- `\Exception`
- [`Phalcon\Http\Request\Exception`](#httprequestexception)
- **`Phalcon\Http\Request\Exceptions\FilterServiceUnavailable`**

`Phalcon\Http\Request\Exception`

### Method Summary

<ApiItem href="#httprequestexceptionsfilterserviceunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="httprequestexceptionsfilterserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Request\Exceptions\InvalidHost

Class

- `\UnexpectedValueException`
- **`Phalcon\Http\Request\Exceptions\InvalidHost`**

`UnexpectedValueException`

### Method Summary

<ApiItem href="#httprequestexceptionsinvalidhost-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"host","default":null}]}>
</ApiItem>

### Methods

<h4 id="httprequestexceptionsinvalidhost-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $host );
```

## Http\Request\Exceptions\InvalidHttpMethod

Class

- `\Exception`
- [`Phalcon\Http\Request\Exception`](#httprequestexception)
- **`Phalcon\Http\Request\Exceptions\InvalidHttpMethod`**

`Phalcon\Http\Request\Exception`

### Method Summary

<ApiItem href="#httprequestexceptionsinvalidhttpmethod-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"method","default":null}]}>
</ApiItem>

### Methods

<h4 id="httprequestexceptionsinvalidhttpmethod-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $method );
```

## Http\Request\Exceptions\MissingFilters

Class

- `\Exception`
- [`Phalcon\Http\Request\Exception`](#httprequestexception)
- **`Phalcon\Http\Request\Exceptions\MissingFilters`**

`Phalcon\Http\Request\Exception`

### Method Summary

<ApiItem href="#httprequestexceptionsmissingfilters-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="httprequestexceptionsmissingfilters-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Http\Request\Exceptions\NullKeyException

Class

Thrown by AbstractBag::offsetSet() when a null offset is used (the
ArrayAccess append form). Bags are always string-keyed, so an
auto-indexed write could never be addressed by the caller.

- `\Exception`
- [`Phalcon\Http\Request\Exception`](#httprequestexception)
- **`Phalcon\Http\Request\Exceptions\NullKeyException`**

`Phalcon\Http\Request\Exception`

### Method Summary

<ApiItem href="#httprequestexceptionsnullkeyexception-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="httprequestexceptionsnullkeyexception-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Request\Exceptions\SanitizerNotFound

Class

- `\Exception`
- [`Phalcon\Http\Request\Exception`](#httprequestexception)
- **`Phalcon\Http\Request\Exceptions\SanitizerNotFound`**

`Phalcon\Http\Request\Exception`

### Method Summary

<ApiItem href="#httprequestexceptionssanitizernotfound-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"sanitizer","default":null}]}>
</ApiItem>

### Methods

<h4 id="httprequestexceptionssanitizernotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $sanitizer );
```

## Http\Request\File

Class

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

- **`Phalcon\Http\Request\File`** - implements [`Phalcon\Http\Request\FileInterface`](#httprequestfileinterface)

`Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

<ApiItem href="#httprequestfile-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"file","default":null},{"type":"string","name":"key","default":"\"\""}]}>
Constructor
</ApiItem>
<ApiItem href="#httprequestfile-geterror" visibility="public" name="getError" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#httprequestfile-getextension" visibility="public" name="getExtension" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#httprequestfile-getkey" visibility="public" name="getKey" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#httprequestfile-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the real name of the uploaded file
</ApiItem>
<ApiItem href="#httprequestfile-getrealtype" visibility="public" name="getRealType" returnType="string" params={[]}>
Gets the real mime type of the upload file using finfo
</ApiItem>
<ApiItem href="#httprequestfile-getsize" visibility="public" name="getSize" returnType="int" params={[]}>
Returns the file size of the uploaded file
</ApiItem>
<ApiItem href="#httprequestfile-gettempname" visibility="public" name="getTempName" returnType="string" params={[]}>
Returns the temporary name of the uploaded file
</ApiItem>
<ApiItem href="#httprequestfile-gettype" visibility="public" name="getType" returnType="string" params={[]}>
Returns the mime type reported by the browser
</ApiItem>
<ApiItem href="#httprequestfile-isuploadedfile" visibility="public" name="isUploadedFile" returnType="bool" params={[]}>
Checks whether the file has been uploaded via Post.
</ApiItem>
<ApiItem href="#httprequestfile-moveto" visibility="public" name="moveTo" returnType="bool" params={[{"type":"string","name":"destination","default":null}]}>
Moves the temporary file to a destination within the application
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="error" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="extension" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="key" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="realType" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="size" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="tmpName" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;&quot;">
</ApiItem>

### Methods

<h4 id="httprequestfile-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array $file,
string $key = ""
);
```

Constructor

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

Interface

Interface for Phalcon\Http\Request\File

- **`Phalcon\Http\Request\FileInterface`**

### Method Summary

<ApiItem href="#httprequestfileinterface-geterror" visibility="public" name="getError" returnType="int" params={[]}>
Returns the error if any
</ApiItem>
<ApiItem href="#httprequestfileinterface-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the real name of the uploaded file
</ApiItem>
<ApiItem href="#httprequestfileinterface-getrealtype" visibility="public" name="getRealType" returnType="string" params={[]}>
Gets the real mime type of the upload file using finfo
</ApiItem>
<ApiItem href="#httprequestfileinterface-getsize" visibility="public" name="getSize" returnType="int" params={[]}>
Returns the file size of the uploaded file
</ApiItem>
<ApiItem href="#httprequestfileinterface-gettempname" visibility="public" name="getTempName" returnType="string" params={[]}>
Returns the temporal name of the uploaded file
</ApiItem>
<ApiItem href="#httprequestfileinterface-gettype" visibility="public" name="getType" returnType="string" params={[]}>
Returns the mime type reported by the browser
</ApiItem>
<ApiItem href="#httprequestfileinterface-moveto" visibility="public" name="moveTo" returnType="bool" params={[{"type":"string","name":"destination","default":null}]}>
Move the temporary file to a destination
</ApiItem>

### Methods

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

Class

Part of the HTTP cycle is return responses to the clients.
Phalcon\HTTP\Response is the Phalcon component responsible to achieve this
task. HTTP responses are usually composed by headers and body.

```php
$response = new \Phalcon\Http\Response();

$response->setStatusCode(200, "OK");
$response->setContent("<html><body>Hello</body></html>");

$response->send();
```

- **`Phalcon\Http\Response`** - implements [`Phalcon\Http\ResponseInterface`](#httpresponseinterface), [`Phalcon\Di\InjectionAwareInterface`](../phalcon_di/#diinjectionawareinterface), [`Phalcon\Events\EventsAwareInterface`](../phalcon_events/#eventseventsawareinterface), [`Phalcon\Http\Message\ResponseStatusCodeInterface`](#httpmessageresponsestatuscodeinterface)

`DateTime` · `DateTimeZone` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Http\Message\ResponseStatusCodeInterface` · `Phalcon\Http\Response\CookiesInterface` · `Phalcon\Http\Response\Exception` · `Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage` · `Phalcon\Http\Response\Exceptions\ResponseAlreadySent` · `Phalcon\Http\Response\Exceptions\UrlServiceUnavailable` · `Phalcon\Http\Response\Headers` · `Phalcon\Http\Response\HeadersInterface` · `Phalcon\Http\Traits\StatusPhrasesTrait` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Mvc\ViewInterface` · `Phalcon\Support\Helper\File\Basename` · `Phalcon\Support\Helper\Json\Encode` · `Phalcon\Traits\Php\InfoTrait` · `Phalcon\Traits\Php\UrlTrait` · `Stringable`

### Method Summary

<ApiItem href="#httpresponse-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string|null","name":"content","default":"null"},{"type":"int|null","name":"code","default":"null"},{"type":"string|null","name":"status","default":"null"}]}>
Constructor
</ApiItem>
<ApiItem href="#httpresponse-appendcontent" visibility="public" name="appendContent" returnType="ResponseInterface" params={[{"type":"mixed","name":"content","default":null}]}>
Appends a string to the HTTP response body
</ApiItem>
<ApiItem href="#httpresponse-getcontent" visibility="public" name="getContent" returnType="string" params={[]}>
Gets the HTTP response body
</ApiItem>
<ApiItem href="#httpresponse-getcookies" visibility="public" name="getCookies" returnType="CookiesInterface" params={[]}>
Returns cookies set by the user
</ApiItem>
<ApiItem href="#httpresponse-getdi" visibility="public" name="getDI" returnType="DiInterface" params={[]}>
Returns the internal dependency injector
</ApiItem>
<ApiItem href="#httpresponse-getheaders" visibility="public" name="getHeaders" returnType="HeadersInterface" params={[]}>
Returns headers set by the user
</ApiItem>
<ApiItem href="#httpresponse-getreasonphrase" visibility="public" name="getReasonPhrase" returnType="string|null" params={[]}>
Returns the reason phrase
</ApiItem>
<ApiItem href="#httpresponse-getstatuscode" visibility="public" name="getStatusCode" returnType="int|null" params={[]}>
Returns the status code
</ApiItem>
<ApiItem href="#httpresponse-hasheader" visibility="public" name="hasHeader" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks if a header exists
</ApiItem>
<ApiItem href="#httpresponse-issent" visibility="public" name="isSent" returnType="bool" params={[]}>
Check if the response is already sent
</ApiItem>
<ApiItem href="#httpresponse-redirect" visibility="public" name="redirect" returnType="ResponseInterface" params={[{"type":"string|null","name":"location","default":"null"},{"type":"bool","name":"externalRedirect","default":"false"},{"type":"int","name":"statusCode","default":"302"}]}>
Redirect by HTTP to another action or URL
</ApiItem>
<ApiItem href="#httpresponse-removeheader" visibility="public" name="removeHeader" returnType="ResponseInterface" params={[{"type":"string","name":"name","default":null}]}>
Remove a header in the response
</ApiItem>
<ApiItem href="#httpresponse-resetheaders" visibility="public" name="resetHeaders" returnType="ResponseInterface" params={[]}>
Resets all the established headers
</ApiItem>
<ApiItem href="#httpresponse-send" visibility="public" name="send" returnType="ResponseInterface" params={[]}>
Prints out HTTP response to the client
</ApiItem>
<ApiItem href="#httpresponse-sendcookies" visibility="public" name="sendCookies" returnType="ResponseInterface" params={[]}>
Sends cookies to the client
</ApiItem>
<ApiItem href="#httpresponse-sendheaders" visibility="public" name="sendHeaders" returnType="bool|ResponseInterface" params={[]}>
Sends headers to the client
</ApiItem>
<ApiItem href="#httpresponse-setcache" visibility="public" name="setCache" returnType="ResponseInterface" params={[{"type":"int","name":"minutes","default":null}]}>
Sets Cache headers to use HTTP cache
</ApiItem>
<ApiItem href="#httpresponse-setcontent" visibility="public" name="setContent" returnType="ResponseInterface" params={[{"type":"string","name":"content","default":null}]}>
Sets HTTP response body
</ApiItem>
<ApiItem href="#httpresponse-setcontentlength" visibility="public" name="setContentLength" returnType="ResponseInterface" params={[{"type":"int","name":"contentLength","default":null}]}>
Sets the response content-length
</ApiItem>
<ApiItem href="#httpresponse-setcontenttype" visibility="public" name="setContentType" returnType="ResponseInterface" params={[{"type":"string","name":"contentType","default":null},{"type":"string|null","name":"charset","default":"null"}]}>
Sets the response content-type mime, optionally the charset
</ApiItem>
<ApiItem href="#httpresponse-setcookies" visibility="public" name="setCookies" returnType="ResponseInterface" params={[{"type":"CookiesInterface","name":"cookies","default":null}]}>
Sets a cookies bag for the response externally
</ApiItem>
<ApiItem href="#httpresponse-setdi" visibility="public" name="setDI" returnType="void" params={[{"type":"DiInterface","name":"container","default":null}]}>
Sets the dependency injector
</ApiItem>
<ApiItem href="#httpresponse-setetag" visibility="public" name="setEtag" returnType="ResponseInterface" params={[{"type":"string","name":"etag","default":null}]}>
Set a custom ETag
</ApiItem>
<ApiItem href="#httpresponse-setexpires" visibility="public" name="setExpires" returnType="ResponseInterface" params={[{"type":"DateTime","name":"datetime","default":null}]}>
Sets an Expires header in the response that allows to use the HTTP cache
</ApiItem>
<ApiItem href="#httpresponse-setfiletosend" visibility="public" name="setFileToSend" returnType="ResponseInterface" params={[{"type":"string","name":"filePath","default":null},{"type":"string|null","name":"attachmentName","default":"null"},{"type":"bool","name":"attachment","default":"true"}]}>
Sets an attached file to be sent at the end of the request
</ApiItem>
<ApiItem href="#httpresponse-setheader" visibility="public" name="setHeader" returnType="ResponseInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"value","default":null}]}>
Overwrites a header in the response
</ApiItem>
<ApiItem href="#httpresponse-setheaders" visibility="public" name="setHeaders" returnType="ResponseInterface" params={[{"type":"HeadersInterface","name":"headers","default":null}]}>
Sets a headers bag for the response externally
</ApiItem>
<ApiItem href="#httpresponse-setjsoncontent" visibility="public" name="setJsonContent" returnType="ResponseInterface" params={[{"type":"mixed","name":"content","default":null},{"type":"int","name":"jsonOptions","default":"0"},{"type":"int","name":"depth","default":"512"}]}>
Sets HTTP response body. The parameter is automatically converted to JSON
</ApiItem>
<ApiItem href="#httpresponse-setlastmodified" visibility="public" name="setLastModified" returnType="ResponseInterface" params={[{"type":"DateTime","name":"datetime","default":null}]}>
Sets Last-Modified header
</ApiItem>
<ApiItem href="#httpresponse-setnotmodified" visibility="public" name="setNotModified" returnType="ResponseInterface" params={[]}>
Sends a Not-Modified response
</ApiItem>
<ApiItem href="#httpresponse-setrawheader" visibility="public" name="setRawHeader" returnType="ResponseInterface" params={[{"type":"string","name":"header","default":null}]}>
Send a raw header to the response
</ApiItem>
<ApiItem href="#httpresponse-setstatuscode" visibility="public" name="setStatusCode" returnType="ResponseInterface" params={[{"type":"int","name":"code","default":null},{"type":"string|null","name":"message","default":"null"}]}>
Sets the HTTP response code
</ApiItem>

### Constants

<ApiItem kind="constant" name="DATETIME_FORMAT" type="string" default="&quot;D, d M Y H:i:s&quot;">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="container" type="DiInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="content" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="cookies" type="CookiesInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="encode" type="Encode" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="file" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="headers" type="Headers" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sent" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="httpresponse-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string|null $content = null,
int|null $code = null,
string|null $status = null
);
```

Constructor

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
public function sendHeaders(): bool|ResponseInterface;
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
string|null $charset = null
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
string|null $attachmentName = null,
bool $attachment = true
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
string|null $message = null
): ResponseInterface;
```

Sets the HTTP response code

```php
$response->setStatusCode(404, "Not Found");
```

## Http\ResponseInterface

Interface

Phalcon\Http\Response

Interface for Phalcon\Http\Response

- **`Phalcon\Http\ResponseInterface`**

`DateTime` · `Phalcon\Http\Response\HeadersInterface`

### Method Summary

<ApiItem href="#httpresponseinterface-appendcontent" visibility="public" name="appendContent" returnType="ResponseInterface" params={[{"type":"string","name":"content","default":null}]}>
Appends a string to the HTTP response body
</ApiItem>
<ApiItem href="#httpresponseinterface-getcontent" visibility="public" name="getContent" returnType="string" params={[]}>
Gets the HTTP response body
</ApiItem>
<ApiItem href="#httpresponseinterface-getheaders" visibility="public" name="getHeaders" returnType="HeadersInterface" params={[]}>
Returns headers set by the user
</ApiItem>
<ApiItem href="#httpresponseinterface-getstatuscode" visibility="public" name="getStatusCode" returnType="int|null" params={[]}>
Returns the status code
</ApiItem>
<ApiItem href="#httpresponseinterface-hasheader" visibility="public" name="hasHeader" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks if a header exists
</ApiItem>
<ApiItem href="#httpresponseinterface-issent" visibility="public" name="isSent" returnType="bool" params={[]}>
Checks if the response was already sent
</ApiItem>
<ApiItem href="#httpresponseinterface-redirect" visibility="public" name="redirect" returnType="ResponseInterface" params={[{"type":"string|null","name":"location","default":"null"},{"type":"bool","name":"externalRedirect","default":"false"},{"type":"int","name":"statusCode","default":"302"}]}>
Redirect by HTTP to another action or URL
</ApiItem>
<ApiItem href="#httpresponseinterface-resetheaders" visibility="public" name="resetHeaders" returnType="ResponseInterface" params={[]}>
Resets all the established headers
</ApiItem>
<ApiItem href="#httpresponseinterface-send" visibility="public" name="send" returnType="ResponseInterface" params={[]}>
Prints out HTTP response to the client
</ApiItem>
<ApiItem href="#httpresponseinterface-sendcookies" visibility="public" name="sendCookies" returnType="ResponseInterface" params={[]}>
Sends cookies to the client
</ApiItem>
<ApiItem href="#httpresponseinterface-sendheaders" visibility="public" name="sendHeaders" returnType="bool|ResponseInterface" params={[]}>
Sends headers to the client
</ApiItem>
<ApiItem href="#httpresponseinterface-setcontent" visibility="public" name="setContent" returnType="ResponseInterface" params={[{"type":"string","name":"content","default":null}]}>
Sets HTTP response body
</ApiItem>
<ApiItem href="#httpresponseinterface-setcontentlength" visibility="public" name="setContentLength" returnType="ResponseInterface" params={[{"type":"int","name":"contentLength","default":null}]}>
Sets the response content-length
</ApiItem>
<ApiItem href="#httpresponseinterface-setcontenttype" visibility="public" name="setContentType" returnType="ResponseInterface" params={[{"type":"string","name":"contentType","default":null},{"type":"string|null","name":"charset","default":"null"}]}>
Sets the response content-type mime, optionally the charset
</ApiItem>
<ApiItem href="#httpresponseinterface-setexpires" visibility="public" name="setExpires" returnType="ResponseInterface" params={[{"type":"DateTime","name":"datetime","default":null}]}>
Sets output expire time header
</ApiItem>
<ApiItem href="#httpresponseinterface-setfiletosend" visibility="public" name="setFileToSend" returnType="ResponseInterface" params={[{"type":"string","name":"filePath","default":null},{"type":"string|null","name":"attachmentName","default":"null"}]}>
Sets an attached file to be sent at the end of the request
</ApiItem>
<ApiItem href="#httpresponseinterface-setheader" visibility="public" name="setHeader" returnType="ResponseInterface" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"value","default":null}]}>
Overwrites a header in the response
</ApiItem>
<ApiItem href="#httpresponseinterface-setjsoncontent" visibility="public" name="setJsonContent" returnType="ResponseInterface" params={[{"type":"mixed","name":"content","default":null}]}>
Sets HTTP response body. The parameter is automatically converted to JSON
</ApiItem>
<ApiItem href="#httpresponseinterface-setnotmodified" visibility="public" name="setNotModified" returnType="ResponseInterface" params={[]}>
Sends a Not-Modified response
</ApiItem>
<ApiItem href="#httpresponseinterface-setrawheader" visibility="public" name="setRawHeader" returnType="ResponseInterface" params={[{"type":"string","name":"header","default":null}]}>
Send a raw header to the response
</ApiItem>
<ApiItem href="#httpresponseinterface-setstatuscode" visibility="public" name="setStatusCode" returnType="ResponseInterface" params={[{"type":"int","name":"code","default":null},{"type":"string|null","name":"message","default":"null"}]}>
Sets the HTTP response code
</ApiItem>

### Methods

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
string|null $location = null,
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
public function sendHeaders(): bool|ResponseInterface;
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
string|null $charset = null
): ResponseInterface;
```

Sets the response content-type mime, optionally the charset

@todo check the null

<h4 id="httpresponseinterface-setexpires"><code>setExpires()</code></h4>

```php
public function setExpires( DateTime $datetime ): ResponseInterface;
```

Sets output expire time header

<h4 id="httpresponseinterface-setfiletosend"><code>setFileToSend()</code></h4>

```php
public function setFileToSend(
string $filePath,
string|null $attachmentName = null
): ResponseInterface;
```

Sets an attached file to be sent at the end of the request

@todo check the null

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

@todo check the parameter type

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
string|null $message = null
): ResponseInterface;
```

Sets the HTTP response code

@todo change $message to only string

## Http\Response\Cookies

Class

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

- `\stdClass`
- [`Phalcon\Di\AbstractInjectionAware`](../phalcon_di/#diabstractinjectionaware)
- **`Phalcon\Http\Response\Cookies`** - implements [`Phalcon\Http\Response\CookiesInterface`](#httpresponsecookiesinterface)

`Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Http\Cookie` · `Phalcon\Http\Cookie\CookieInterface` · `Phalcon\Http\Response` · `Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable` · `Phalcon\Http\Traits\EncryptionAwareTrait`

### Method Summary

<ApiItem href="#httpresponsecookies-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"bool","name":"useEncryption","default":"true"},{"type":"string|null","name":"signKey","default":"null"}]}>
Constructor
</ApiItem>
<ApiItem href="#httpresponsecookies-delete" visibility="public" name="delete" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Deletes a cookie by its name
</ApiItem>
<ApiItem href="#httpresponsecookies-get" visibility="public" name="get" returnType="CookieInterface" params={[{"type":"string","name":"name","default":null}]}>
Gets a cookie from the bag
</ApiItem>
<ApiItem href="#httpresponsecookies-getcookies" visibility="public" name="getCookies" returnType="array" params={[]}>
Gets all cookies from the bag
</ApiItem>
<ApiItem href="#httpresponsecookies-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check if a cookie is defined in the bag or exists in the _COOKIE
</ApiItem>
<ApiItem href="#httpresponsecookies-issent" visibility="public" name="isSent" returnType="bool" params={[]}>
Returns if the headers have already been sent
</ApiItem>
<ApiItem href="#httpresponsecookies-reset" visibility="public" name="reset" returnType="CookiesInterface" params={[]}>
Reset set cookies
</ApiItem>
<ApiItem href="#httpresponsecookies-send" visibility="public" name="send" returnType="bool" params={[]}>
Sends the cookies to the client
</ApiItem>
<ApiItem href="#httpresponsecookies-set" visibility="public" name="set" returnType="CookiesInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"value","default":"null"},{"type":"int","name":"expire","default":"0"},{"type":"string","name":"path","default":"\"/\""},{"type":"bool","name":"secure","default":"false"},{"type":"string","name":"domain","default":"\"\""},{"type":"bool","name":"httpOnly","default":"false"},{"type":"array","name":"options","default":"[]"}]}>
Sets a cookie to be sent at the end of the request.
</ApiItem>
<ApiItem href="#httpresponsecookies-setsignkey" visibility="public" name="setSignKey" returnType="CookiesInterface" params={[{"type":"string|null","name":"signKey","default":"null"}]}>
Sets the cookie's sign key.
</ApiItem>
<ApiItem href="#httpresponsecookies-useencryption" visibility="public" name="useEncryption" returnType="CookiesInterface" params={[{"type":"bool","name":"useEncryption","default":null}]}>
Set if cookies in the bag must be automatically encrypted/decrypted
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="cookies" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isRegistered" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isSent" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="signKey" type="string|null" default="null">
The cookie's sign key.
</ApiItem>

### Methods

<h4 id="httpresponsecookies-__construct"><code>__construct()</code></h4>

```php
public function __construct(
bool $useEncryption = true,
string|null $signKey = null
);
```

Constructor

<h4 id="httpresponsecookies-delete"><code>delete()</code></h4>

```php
public function delete( string $name ): bool;
```

Deletes a cookie by its name
This method does not remove cookies from the _COOKIE super-global

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
super-global

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
public function setSignKey( string|null $signKey = null ): CookiesInterface;
```

Sets the cookie's sign key.

The `$signKey' MUST be at least 32 characters long
and generated using a cryptographically secure pseudo random generator.

Use NULL to disable cookie signing.

@see \Phalcon\Encryption\Security\Random

<h4 id="httpresponsecookies-useencryption"><code>useEncryption()</code></h4>

```php
public function useEncryption( bool $useEncryption ): CookiesInterface;
```

Set if cookies in the bag must be automatically encrypted/decrypted

## Http\Response\CookiesInterface

Interface

Interface for Phalcon\Http\Response\Cookies

- **`Phalcon\Http\Response\CookiesInterface`**

`Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Http\Cookie\CookieInterface`

### Method Summary

<ApiItem href="#httpresponsecookiesinterface-delete" visibility="public" name="delete" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Deletes a cookie by its name
</ApiItem>
<ApiItem href="#httpresponsecookiesinterface-get" visibility="public" name="get" returnType="CookieInterface" params={[{"type":"string","name":"name","default":null}]}>
Gets a cookie from the bag
</ApiItem>
<ApiItem href="#httpresponsecookiesinterface-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check if a cookie is defined in the bag or exists in the _COOKIE superglobal
</ApiItem>
<ApiItem href="#httpresponsecookiesinterface-isusingencryption" visibility="public" name="isUsingEncryption" returnType="bool" params={[]}>
Returns if the bag is automatically encrypting/decrypting cookies
</ApiItem>
<ApiItem href="#httpresponsecookiesinterface-reset" visibility="public" name="reset" returnType="CookiesInterface" params={[]}>
Reset set cookies
</ApiItem>
<ApiItem href="#httpresponsecookiesinterface-send" visibility="public" name="send" returnType="bool" params={[]}>
Sends the cookies to the client
</ApiItem>
<ApiItem href="#httpresponsecookiesinterface-set" visibility="public" name="set" returnType="CookiesInterface" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"value","default":"null"},{"type":"int","name":"expire","default":"0"},{"type":"string","name":"path","default":"\"/\""},{"type":"bool","name":"secure","default":"false"},{"type":"string","name":"domain","default":"\"\""},{"type":"bool","name":"httpOnly","default":"false"},{"type":"array","name":"options","default":"[]"}]}>
Sets a cookie to be sent at the end of the request
</ApiItem>
<ApiItem href="#httpresponsecookiesinterface-useencryption" visibility="public" name="useEncryption" returnType="CookiesInterface" params={[{"type":"bool","name":"useEncryption","default":null}]}>
Set if cookies in the bag must be automatically encrypted/decrypted
</ApiItem>

### Methods

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

Class

Phalcon\Http\Response\Exception

Exceptions thrown in Phalcon\Http\Response will use this class.

- `\Exception`
- **`Phalcon\Http\Response\Exception`**
- [`Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage`](#httpresponseexceptionsnonstandardstatuscoderequiresmessage)
- [`Phalcon\Http\Response\Exceptions\ResponseAlreadySent`](#httpresponseexceptionsresponsealreadysent)
- [`Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable`](#httpresponseexceptionsresponseserviceunavailable)
- [`Phalcon\Http\Response\Exceptions\UrlServiceUnavailable`](#httpresponseexceptionsurlserviceunavailable)

## Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage

Class

- `\Exception`
- [`Phalcon\Http\Response\Exception`](#httpresponseexception)
- **`Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage`**

`Phalcon\Http\Response\Exception`

### Method Summary

<ApiItem href="#httpresponseexceptionsnonstandardstatuscoderequiresmessage-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="httpresponseexceptionsnonstandardstatuscoderequiresmessage-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Response\Exceptions\ResponseAlreadySent

Class

- `\Exception`
- [`Phalcon\Http\Response\Exception`](#httpresponseexception)
- **`Phalcon\Http\Response\Exceptions\ResponseAlreadySent`**

`Phalcon\Http\Response\Exception`

### Method Summary

<ApiItem href="#httpresponseexceptionsresponsealreadysent-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="httpresponseexceptionsresponsealreadysent-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Response\Exceptions\ResponseServiceUnavailable

Class

- `\Exception`
- [`Phalcon\Http\Response\Exception`](#httpresponseexception)
- **`Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable`**

`Phalcon\Http\Response\Exception`

### Method Summary

<ApiItem href="#httpresponseexceptionsresponseserviceunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="httpresponseexceptionsresponseserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Response\Exceptions\UrlServiceUnavailable

Class

- `\Exception`
- [`Phalcon\Http\Response\Exception`](#httpresponseexception)
- **`Phalcon\Http\Response\Exceptions\UrlServiceUnavailable`**

`Phalcon\Http\Response\Exception`

### Method Summary

<ApiItem href="#httpresponseexceptionsurlserviceunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="httpresponseexceptionsurlserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Http\Response\Headers

Class

This class is a bag to manage the response headers

@implements IteratorAggregate&lt;string, string|null>

- **`Phalcon\Http\Response\Headers`** - implements [`Phalcon\Http\Response\HeadersInterface`](#httpresponseheadersinterface), `\IteratorAggregate`

`IteratorAggregate` · `Phalcon\Contracts\Http\HttpTypes` · `Traversable`

### Method Summary

<ApiItem href="#httpresponseheaders-get" visibility="public" name="get" returnType="bool|string|null" params={[{"type":"string","name":"name","default":null}]}>
Gets a header value from the internal bag
</ApiItem>
<ApiItem href="#httpresponseheaders-getiterator" visibility="public" name="getIterator" returnType="Traversable" params={[]}>
</ApiItem>
<ApiItem href="#httpresponseheaders-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks if a header exists
</ApiItem>
<ApiItem href="#httpresponseheaders-issent" visibility="public" name="isSent" returnType="bool" params={[]}>
Returns if the headers have already been sent
</ApiItem>
<ApiItem href="#httpresponseheaders-remove" visibility="public" name="remove" returnType="HeadersInterface" params={[{"type":"string","name":"header","default":null}]}>
Removes a header by its name
</ApiItem>
<ApiItem href="#httpresponseheaders-reset" visibility="public" name="reset" returnType="void" params={[]}>
Reset set headers
</ApiItem>
<ApiItem href="#httpresponseheaders-send" visibility="public" name="send" returnType="bool" params={[]}>
Sends the headers to the client
</ApiItem>
<ApiItem href="#httpresponseheaders-set" visibility="public" name="set" returnType="HeadersInterface" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"value","default":null}]}>
Sets a header to be sent at the end of the request
</ApiItem>
<ApiItem href="#httpresponseheaders-setraw" visibility="public" name="setRaw" returnType="HeadersInterface" params={[{"type":"string","name":"header","default":null}]}>
Sets a raw header to be sent at the end of the request
</ApiItem>
<ApiItem href="#httpresponseheaders-toarray" visibility="public" name="toArray" returnType="array" params={[]}>
Returns the current headers as an array
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="headers" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="isSent" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="httpresponseheaders-get"><code>get()</code></h4>

```php
public function get( string $name ): bool|string|null;
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

Interface

Interface for Phalcon\Http\Response\Headers compatible bags

- **`Phalcon\Http\Response\HeadersInterface`**

### Method Summary

<ApiItem href="#httpresponseheadersinterface-get" visibility="public" name="get" returnType="bool|string|null" params={[{"type":"string","name":"name","default":null}]}>
Gets a header value from the internal bag
</ApiItem>
<ApiItem href="#httpresponseheadersinterface-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks if a header exists
</ApiItem>
<ApiItem href="#httpresponseheadersinterface-reset" visibility="public" name="reset" returnType="void" params={[]}>
Reset set headers
</ApiItem>
<ApiItem href="#httpresponseheadersinterface-send" visibility="public" name="send" returnType="bool" params={[]}>
Sends the headers to the client
</ApiItem>
<ApiItem href="#httpresponseheadersinterface-set" visibility="public" name="set" returnType="HeadersInterface" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"value","default":null}]}>
Sets a header to be sent at the end of the request
</ApiItem>
<ApiItem href="#httpresponseheadersinterface-setraw" visibility="public" name="setRaw" returnType="HeadersInterface" params={[{"type":"string","name":"header","default":null}]}>
Sets a raw header to be sent at the end of the request
</ApiItem>

### Methods

<h4 id="httpresponseheadersinterface-get"><code>get()</code></h4>

```php
public function get( string $name ): bool|string|null;
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

Trait

Provides the implicit encryption flag and its accessor shared by the HTTP
cookie classes.

- **`Phalcon\Http\Traits\EncryptionAwareTrait`**

[`Phalcon\Http\Cookie`](#httpcookie) · [`Phalcon\Http\Response\Cookies`](#httpresponsecookies)

### Method Summary

<ApiItem href="#httptraitsencryptionawaretrait-isusingencryption" visibility="public" name="isUsingEncryption" returnType="bool" params={[]}>
Check if implicit encryption is being used
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="useEncryption" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="httptraitsencryptionawaretrait-isusingencryption"><code>isUsingEncryption()</code></h4>

```php
public function isUsingEncryption(): bool;
```

Check if implicit encryption is being used

## Http\Traits\StatusPhrasesTrait

Trait

Status Phrases trait

- **`Phalcon\Http\Traits\StatusPhrasesTrait`**

`Phalcon\Http\Message\ResponseStatusCodeInterface`

[`Phalcon\Http\Response`](#httpresponse)

### Method Summary

<ApiItem href="#httptraitsstatusphrasestrait-getphrases" visibility="protected" name="getPhrases" returnType="array" params={[]}>
Returns the list of status codes available
</ApiItem>

### Methods

<h4 id="httptraitsstatusphrasestrait-getphrases"><code>getPhrases()</code></h4>

```php
protected function getPhrases(): array;
```

Returns the list of status codes available

Source: https://docs.phalcon.io/6.0/api/phalcon_http/index.mdx
