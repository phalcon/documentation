---
title: "Phalcon Http"
version: "5.20"
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
  - [`Phalcon\Di\AbstractInjectionAware`](/5.20/api/phalcon_di/#diabstractinjectionaware)
    - **`Phalcon\Http\Cookie`** - implements [`Phalcon\Http\Cookie\CookieInterface`](#httpcookiecookieinterface), `\Stringable`

`Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Encryption\Crypt\CryptInterface` · `Phalcon\Filter\FilterInterface` · `Phalcon\Http\Cookie\CookieInterface` · `Phalcon\Http\Cookie\Exception` · `Phalcon\Http\Cookie\Exceptions\CookieKeyTooShort` · `Phalcon\Http\Cookie\Exceptions\CryptInterfaceRequired` · `Phalcon\Http\Cookie\Exceptions\CryptServiceUnavailable` · `Phalcon\Http\Cookie\Exceptions\FilterServiceUnavailable` · `Phalcon\Http\Response\Exception` · `Phalcon\Http\Traits\EncryptionAwareTrait` · `Phalcon\Session\ManagerInterface` · `Phalcon\Traits\Support\Helper\Arr\GetTrait` · `Stringable`

### Method Summary

- `public __construct(string $name, mixed $value = null, int $expire = 0, string $path = "/", bool $secure = false, string $domain = "", bool $httpOnly = false, array $options = [])` — Phalcon\Http\Cookie constructor.

- `public __toString(): string` — Magic \_\_toString method converts the cookie's value to string

- `public delete(): void` — Deletes the cookie by setting an expiration time in the past

- `public getDomain(): string` — Returns the domain that the cookie is available to

- `public getExpiration(): int` — Returns the current expiration time

- `public getHttpOnly(): bool` — Returns if the cookie is accessible only through the HTTP protocol

- `public getName(): string` — Returns the current cookie's name

- `public getOptions(): array` — Returns the current cookie's options

- `public getPath(): string` — Returns the current cookie's path

- `public getSecure(): bool` — Returns whether the cookie must only be sent when the connection is

- `public getValue(mixed $filters = null, mixed $defaultValue = null): mixed` — Returns the cookie's value.

- `public restore(): CookieInterface` — Reads the cookie-related info from the SESSION to restore the cookie as

- `public send(): CookieInterface` — Sends the cookie to the HTTP client.

- `public setDomain(string $domain): CookieInterface` — Sets the domain that the cookie is available to

- `public setExpiration(int $expire): CookieInterface` — Sets the cookie's expiration time

- `public setHttpOnly(bool $httpOnly): CookieInterface` — Sets if the cookie is accessible only through the HTTP protocol

- `public setOptions(array $options): CookieInterface` — Sets the cookie's options

- `public setPath(string $path): CookieInterface` — Sets the cookie's path

- `public setSecure(bool $secure): CookieInterface` — Sets if the cookie must only be sent when the connection is secure

- `public setSignKey(string|null $signKey = null): CookieInterface` — Sets the cookie's sign key.

- `public setValue(mixed $value): CookieInterface` — Sets the cookie's value

- `public useEncryption(bool $useEncryption): CookieInterface` — Sets if the cookie must be encrypted/decrypted automatically

- `protected assertSignKeyIsLongEnough(string $signKey): void` — Assert the cookie's key is enough long.

### Properties

- `protected string $domain = ""`

- `protected int $expire = 0`

- `protected FilterInterface|null $filter = null`

- `protected bool $httpOnly = false`

- `protected bool $isRead = false`

- `protected bool $isRestored = false`

- `protected string $name`

- `protected array $options = []`

- `protected string $path = "/"`

- `protected bool $secure = false`

- `protected string|null $signKey = null` — The cookie's sign key.

- `protected mixed $value = null`

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

- `public delete(): void` — Deletes the cookie

- `public getDomain(): string` — Returns the domain that the cookie is available to

- `public getExpiration(): int` — Returns the current expiration time

- `public getHttpOnly(): bool` — Returns if the cookie is accessible only through the HTTP protocol

- `public getName(): string` — Returns the current cookie's name

- `public getOptions(): array` — Returns the current cookie's options

- `public getPath(): string` — Returns the current cookie's path

- `public getSecure(): bool` — Returns whether the cookie must only be sent when the connection is

- `public getValue(mixed $filters = null, mixed $defaultValue = null): mixed` — Returns the cookie's value.

- `public isUsingEncryption(): bool` — Check if the cookie is using implicit encryption

- `public send(): CookieInterface` — Sends the cookie to the HTTP client

- `public setDomain(string $domain): CookieInterface` — Sets the domain that the cookie is available to

- `public setExpiration(int $expire): CookieInterface` — Sets the cookie's expiration time

- `public setHttpOnly(bool $httpOnly): CookieInterface` — Sets if the cookie is accessible only through the HTTP protocol

- `public setOptions(array $options): CookieInterface` — Sets the cookie's options

- `public setPath(string $path): CookieInterface` — Sets the cookie's expiration time

- `public setSecure(bool $secure): CookieInterface` — Sets if the cookie must only be sent when the connection is secure

- `public setValue(mixed $value): CookieInterface` — Sets the cookie's value

- `public useEncryption(bool $useEncryption): CookieInterface` — Sets if the cookie must be encrypted/decrypted automatically

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

- `public __construct(int $length)`

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

- `public __construct()`

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

- `public __construct()`

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

- `public __construct()`

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

- `const string METHOD_CONNECT = "CONNECT"`

- `const string METHOD_DELETE = "DELETE"`

- `const string METHOD_GET = "GET"`

- `const string METHOD_HEAD = "HEAD"`

- `const string METHOD_OPTIONS = "OPTIONS"`

- `const string METHOD_PATCH = "PATCH"`

- `const string METHOD_POST = "POST"`

- `const string METHOD_PURGE = "PURGE"`

- `const string METHOD_PUT = "PUT"`

- `const string METHOD_TRACE = "TRACE"`


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

- `const int STATUS_ACCEPTED = 202`

- `const int STATUS_ALREADY_REPORTED = 208`

- `const int STATUS_BAD_GATEWAY = 502`

- `const int STATUS_BAD_REQUEST = 400`

- `const int STATUS_BANDWIDTH_LIMIT_EXCEEDED = 509`

- `const int STATUS_BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450`

- `const int STATUS_CLIENT_CLOSED_REQUEST = 499`

- `const int STATUS_CONFLICT = 409`

- `const int STATUS_CONNECTION_TIMEOUT = 522`

- `const int STATUS_CONTINUE = 100`

- `const int STATUS_CREATED = 201`

- `const int STATUS_EARLY_HINTS = 103`

- `const int STATUS_EXPECTATION_FAILED = 417`

- `const int STATUS_FAILED_DEPENDENCY = 424`

- `const int STATUS_FORBIDDEN = 403`

- `const int STATUS_FOUND = 302`

- `const int STATUS_GATEWAY_TIMEOUT = 504`

- `const int STATUS_GONE = 410`

- `const int STATUS_HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497`

- `const int STATUS_IM_A_TEAPOT = 418`

- `const int STATUS_IM_USED = 226`

- `const int STATUS_INSUFFICIENT_STORAGE = 507`

- `const int STATUS_INTERNAL_SERVER_ERROR = 500`

- `const int STATUS_INVALID_SSL_CERTIFICATE = 526`

- `const int STATUS_INVALID_TOKEN_ESRI = 498`

- `const int STATUS_LENGTH_REQUIRED = 411`

- `const int STATUS_LOCKED = 423`

- `const int STATUS_LOGIN_TIMEOUT = 440`

- `const int STATUS_LOOP_DETECTED = 508`

- `const int STATUS_METHOD_FAILURE = 420`

- `const int STATUS_METHOD_NOT_ALLOWED = 405`

- `const int STATUS_MISDIRECTED_REQUEST = 421`

- `const int STATUS_MOVED_PERMANENTLY = 301`

- `const int STATUS_MULTIPLE_CHOICES = 300`

- `const int STATUS_MULTI_STATUS = 207`

- `const int STATUS_NETWORK_AUTHENTICATION_REQUIRED = 511`

- `const int STATUS_NETWORK_CONNECT_TIMEOUT_ERROR = 599`

- `const int STATUS_NETWORK_READ_TIMEOUT_ERROR = 598`

- `const int STATUS_NON_AUTHORITATIVE_INFORMATION = 203`

- `const int STATUS_NOT_ACCEPTABLE = 406`

- `const int STATUS_NOT_EXTENDED = 510`

- `const int STATUS_NOT_FOUND = 404`

- `const int STATUS_NOT_IMPLEMENTED = 501`

- `const int STATUS_NOT_MODIFIED = 304`

- `const int STATUS_NO_CONTENT = 204`

- `const int STATUS_NO_RESPONSE = 444`

- `const int STATUS_OK = 200`

- `const int STATUS_ORIGIN_DNS_ERROR = 530`

- `const int STATUS_ORIGIN_IS_UNREACHABLE = 523`

- `const int STATUS_PAGE_EXPIRED = 419`

- `const int STATUS_PARTIAL_CONTENT = 206`

- `const int STATUS_PAYLOAD_TOO_LARGE = 413`

- `const int STATUS_PAYMENT_REQUIRED = 402`

- `const int STATUS_PERMANENT_REDIRECT = 308`

- `const int STATUS_PRECONDITION_FAILED = 412`

- `const int STATUS_PRECONDITION_REQUIRED = 428`

- `const int STATUS_PROCESSING = 102`

- `const int STATUS_PROXY_AUTHENTICATION_REQUIRED = 407`

- `const int STATUS_RAILGUN_ERROR = 527`

- `const int STATUS_RANGE_NOT_SATISFIABLE = 416`

- `const int STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE = 431`

- `const int STATUS_REQUEST_HEADER_TOO_LARGE = 494`

- `const int STATUS_REQUEST_TIMEOUT = 408`

- `const int STATUS_RESERVED = 306`

- `const int STATUS_RESET_CONTENT = 205`

- `const int STATUS_RETRY_WITH = 449`

- `const int STATUS_SEE_OTHER = 303`

- `const int STATUS_SERVICE_UNAVAILABLE = 503`

- `const int STATUS_SSL_CERTIFICATE_ERROR = 495`

- `const int STATUS_SSL_CERTIFICATE_REQUIRED = 496`

- `const int STATUS_SSL_HANDSHAKE_FAILED = 525`

- `const int STATUS_SWITCHING_PROTOCOLS = 101`

- `const int STATUS_TEMPORARY_REDIRECT = 307`

- `const int STATUS_THIS_IS_FINE = 218`

- `const int STATUS_TIMEOUT_OCCURRED = 524`

- `const int STATUS_TOO_EARLY = 425`

- `const int STATUS_TOO_MANY_REQUESTS = 429`

- `const int STATUS_UNAUTHORIZED = 401`

- `const int STATUS_UNAVAILABLE_FOR_LEGAL_REASONS = 451`

- `const int STATUS_UNKNOWN_ERROR = 520`

- `const int STATUS_UNPROCESSABLE_ENTITY = 422`

- `const int STATUS_UNSUPPORTED_MEDIA_TYPE = 415`

- `const int STATUS_UPGRADE_REQUIRED = 426`

- `const int STATUS_URI_TOO_LONG = 414`

- `const int STATUS_USE_PROXY = 305`

- `const int STATUS_VARIANT_ALSO_NEGOTIATES = 506`

- `const int STATUS_VERSION_NOT_SUPPORTED = 505`

- `const int STATUS_WEB_SERVER_IS_DOWN = 521`


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
  - [`Phalcon\Di\AbstractInjectionAware`](/5.20/api/phalcon_di/#diabstractinjectionaware)
    - **`Phalcon\Http\Request`** - implements [`Phalcon\Http\RequestInterface`](#httprequestinterface), [`Phalcon\Http\Message\RequestMethodInterface`](#httpmessagerequestmethodinterface), [`Phalcon\Contracts\Http\AttributeRequest`](/5.20/api/phalcon_contracts/#contractshttpattributerequest)

`Phalcon\Contracts\Http\AttributeRequest` · `Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Filter\FilterInterface` · `Phalcon\Http\Message\RequestMethodInterface` · `Phalcon\Http\Request\Bag\AttributeBag` · `Phalcon\Http\Request\Exception` · `Phalcon\Http\Request\Exceptions\FilterServiceUnavailable` · `Phalcon\Http\Request\Exceptions\InvalidHost` · `Phalcon\Http\Request\Exceptions\InvalidHttpMethod` · `Phalcon\Http\Request\Exceptions\MissingFilters` · `Phalcon\Http\Request\Exceptions\SanitizerNotFound` · `Phalcon\Http\Request\File` · `Phalcon\Http\Request\FileInterface` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Traits\Php\FileTrait` · `stdClass`

### Method Summary

- `public get(string|null $name = null, mixed $filters = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Gets a variable from the $\_REQUEST superglobal applying filters if

- `public getAcceptableContent(): array` — Gets an array with mime/types and their quality accepted by the

- `public getAttributes(): AttributeBag` — Returns the request attributes bag. Attributes are arbitrary,

- `public getBasicAuth(): array|null` — Gets auth info accepted by the browser/client from

- `public getBestAccept(): string` — Gets best mime/type accepted by the browser/client from

- `public getBestCharset(): string` — Gets best charset accepted by the browser/client from

- `public getBestLanguage(): string` — Gets the best language accepted by the browser/client from

- `public getClientAddress(bool $trustForwardedHeader = false): string|bool` — Gets most possible client IP Address. This method searches in

- `public getClientCharsets(): array` — Gets a charsets array and their quality accepted by the browser/client

- `public getContentType(): string|null` — Gets content type which request has been made

- `public getDigestAuth(): array` — Gets auth info accepted by the browser/client from

- `public getFilteredData(string $methodKey, string $method, string|null $name = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Gets filtered data

- `public getFilteredPatch(string|null $name = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Retrieves a patch value always sanitized with the preset filters

- `public getFilteredPost(string|null $name = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Retrieves a post value always sanitized with the preset filters

- `public getFilteredPut(string|null $name = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Retrieves a put value always sanitized with the preset filters

- `public getFilteredQuery(string|null $name = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Retrieves a query/get value always sanitized with the preset filters

- `public getHTTPReferer(): string` — Gets web page that refers active request. ie: <http://www.google.com>

- `public getHeader(string $header): string` — Gets HTTP header from request data

- `public getHeaders(): array` — Returns the available headers in the request

- `public getHttpHost(): string` — Gets host name used by the request.

- `public getHttpMethodParameterOverride(): bool` — Return the HTTP method parameter override flag

- `public getJsonRawBody(bool $associative = false): \stdClass|array|bool` — Gets decoded JSON HTTP raw request body

- `public getLanguages(): array` — Gets languages array and their quality accepted by the browser/client

- `public getMethod(): string` — Gets HTTP method which request has been made

- `public getPatch(string|null $name = null, mixed $filters = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Gets a variable from put request

- `public getPort(): int` — Gets information about the port on which the request is made.

- `public getPost(string|null $name = null, mixed $filters = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Gets a variable from the $\_POST superglobal applying filters if needed

- `public getPreferredIsoLocaleVariant(): string` — Gets the preferred ISO locale variant.

- `public getPut(string|null $name = null, mixed $filters = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Gets a variable from the PUT request

- `public getQuery(string|null $name = null, mixed $filters = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Gets variable from $\_GET superglobal applying filters if needed.

- `public getRawBody(): string` — Gets HTTP raw request body

- `public getScheme(): string` — Gets HTTP schema (http/https)

- `public getServer(string $name): string|null` — Gets variable from $\_SERVER superglobal

- `public getServerAddress(): string` — Gets active server address IP

- `public getServerName(): string` — Gets active server name

- `public getURI(bool $onlyPath = false): string` — Gets HTTP URI which request has been made to

- `public getUploadedFiles(bool $onlySuccessful = false, bool $namedKeys = false): FileInterface[]` — Gets attached files as Phalcon\Http\Request\File instances

- `public getUserAgent(): string` — Gets HTTP user agent used to make the request

- `public has(string $name): bool` — Checks whether $\_REQUEST superglobal has certain index

- `public hasFiles(): bool` — Returns if the request has files or not

- `public hasHeader(string $header): bool` — Checks whether headers has certain index

- `public hasPatch(string $name): bool` — Checks whether the PATCH data has certain index

- `public hasPost(string $name): bool` — Checks whether $\_POST superglobal has certain index

- `public hasPut(string $name): bool` — Checks whether the PUT data has certain index

- `public hasQuery(string $name): bool` — Checks whether $\_GET superglobal has certain index

- `public hasServer(string $name): bool` — Checks whether $\_SERVER superglobal has certain index

- `public isAjax(): bool` — Checks whether request has been made using ajax

- `public isConnect(): bool` — Checks whether HTTP method is CONNECT.

- `public isDelete(): bool` — Checks whether HTTP method is DELETE.

- `public isGet(): bool` — Checks whether HTTP method is GET.

- `public isHead(): bool` — Checks whether HTTP method is HEAD.

- `public isJson(): bool` — Checks whether request content type contains json data

- `public isMethod(mixed $methods, bool $strict = false): bool` — Check if HTTP method match any of the passed methods

- `public isOptions(): bool` — Checks whether HTTP method is OPTIONS.

- `public isPatch(): bool` — Checks whether HTTP method is PATCH.

- `public isPost(): bool` — Checks whether HTTP method is POST.

- `public isPurge(): bool` — Checks whether HTTP method is PURGE (Squid and Varnish support).

- `public isPut(): bool` — Checks whether HTTP method is PUT.

- `public isSecure(): bool` — Checks whether request has been made using any secure layer

- `public isSoap(): bool` — Checks whether request has been made using SOAP

- `public isStrictHostCheck(): bool` — Checks if the `Request::getHttpHost` method will be use strict validation

- `public isTrace(): bool` — Checks whether HTTP method is TRACE.

- `public isValidHttpMethod(string $method): bool` — Checks if a method is a valid HTTP method

- `public numFiles(bool $onlySuccessful = false): int` — Returns the number of files available

- `public setHttpMethodParameterOverride(bool $override): static` — Set the HTTP method parameter override flag

- `public setParameterFilters(string $name, array $filters = [], array $scope = []): static` — Sets automatic sanitizers/filters for a particular field and for

- `public setStrictHostCheck(bool $flag = true): static` — Sets if the `Request::getHttpHost` method must be use strict validation

- `public setTrustedProxies(array $trustedProxies): static` — Set a trusted proxy list for X-Forwarded-For header

- `public setTrustedProxyHeader(string $trustedProxyHeader): static` — This header takes priority when parsing HTTP headers

- `protected getBestQuality(array $qualityParts, string $name): string` — Process a request header and return the one with best quality

- `protected getHelper(array $source, string|null $name = null, mixed $filters = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Helper to get data from superglobals, applying filters if needed.

- `protected getQualityHeader(string $serverIndex, string $name): array` — Process a request header and return an array of values with their

- `protected hasFileHelper(mixed $data, bool $onlySuccessful): int` — Recursively counts file in an array of files

- `protected isIpAddressInCIDR(string $ip, string $cidr): bool` — Check if an IP address exists in CIDR range

- `protected resolveAuthorizationHeaders(): array` — Resolve authorization headers.

- `protected smoothFiles(array $names, array $types, array $tmp_names, array $sizes, array $errors, string $prefix): array` — Smooth out $\_FILES to have plain array with all files uploaded

### Properties

- `protected AttributeBag|null $attributes = null`

- `protected FilterInterface|null $filterService = null`

- `protected bool $methodOverride = false`

- `protected array|null $postCache = null`

- `protected array $queryFilters = []`

- `protected string $rawBody = ""`

- `protected bool $strictHostCheck = false`

- `protected array $trustedProxies = []`

- `protected string $trustedProxyHeader = ""`

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
): FileInterface[];
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
    array $tmp_names,
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
  - [`Phalcon\Contracts\Http\AttributeRequest`](/5.20/api/phalcon_contracts/#contractshttpattributerequest)

`Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Http\Request\FileInterface` · `stdClass`

### Method Summary

- `public get(string|null $name = null, mixed $filters = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Gets a variable from the $\_REQUEST superglobal applying filters if

- `public getAcceptableContent(): array` — Return an array with mime/types and their quality accepted by the

- `public getBasicAuth(): array|null` — Gets auth info accepted by the browser/client from

- `public getBestAccept(): string` — Return the best mime/type accepted by the browser/client from

- `public getBestCharset(): string` — Return the best charset accepted by the browser/client from

- `public getBestLanguage(): string` — Return the best language accepted by the browser/client from

- `public getClientAddress(bool $trustForwardedHeader = false): string|bool` — Return the most possible client IPv4 Address. This method searches in

- `public getClientCharsets(): array` — Return a charset array and their quality accepted by the browser/client

- `public getContentType(): string|null` — Return the content type which request has been made

- `public getDigestAuth(): array` — Return the auth info accepted by the browser/client from

- `public getHTTPReferer(): string` — Return the web page that refers active request. ie: <https://phalcon.io>

- `public getHeader(string $header): string` — Return the HTTP header from request data

- `public getHeaders(): array` — Returns the available headers in the request

- `public getHttpHost(): string` — Return the host name used by the request.

- `public getJsonRawBody(bool $associative = false): array|bool|stdClass` — Return the decoded JSON HTTP raw request body

- `public getLanguages(): array` — Return the languages array and their quality accepted by the

- `public getMethod(): string` — Return the HTTP method which request has been made

- `public getPort(): int` — Return the information about the port on which the request is made

- `public getPost(string|null $name = null, mixed $filters = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Return a variable from the $\_POST superglobal applying filters if needed.

- `public getPut(string|null $name = null, mixed $filters = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Return a variable from put request

- `public getQuery(string|null $name = null, mixed $filters = null, mixed $defaultValue = null, bool $notAllowEmpty = false, bool $noRecursive = false): mixed` — Return a variable from $\_GET superglobal applying filters if needed.

- `public getRawBody(): string` — Return the HTTP raw request body

- `public getScheme(): string` — Return the HTTP schema (http/https)

- `public getServer(string $name): string|null` — Return a variable from $\_SERVER superglobal

- `public getServerAddress(): string` — Return the active server address IP

- `public getServerName(): string` — Return the active server name

- `public getURI(bool $onlyPath = false): string` — Return the HTTP URI which request has been made to

- `public getUploadedFiles(bool $onlySuccessful = false, bool $namedKeys = false): FileInterface[]` — Return the attached files as Phalcon\Http\Request\FileInterface

- `public getUserAgent(): string` — Return the HTTP user agent used to make the request

- `public has(string $name): bool` — Return whether the $\_REQUEST superglobal has certain index

- `public hasFiles(): bool` — Return whether the request includes attached files

- `public hasHeader(string $header): bool` — Return whether the headers have a certain index

- `public hasPost(string $name): bool` — Return whether the $\_POST superglobal has certain index

- `public hasPut(string $name): bool` — Return whether the PUT data has certain index

- `public hasQuery(string $name): bool` — Return whether the $\_GET superglobal has certain index

- `public hasServer(string $name): bool` — Return whether the $\_SERVER superglobal has certain index

- `public isAjax(): bool` — Return whether the request has been made using ajax. Checks if

- `public isConnect(): bool` — Return whether the HTTP method is CONNECT. if

- `public isDelete(): bool` — Return whether the HTTP method is DELETE. if

- `public isGet(): bool` — Return whether the HTTP method is GET. if

- `public isHead(): bool` — Return whether the HTTP method is HEAD. if

- `public isMethod(mixed $methods, bool $strict = false): bool` — Return if the current HTTP method matches any of the passed methods

- `public isOptions(): bool` — Return whether the HTTP method is OPTIONS. if

- `public isPost(): bool` — Return whether the HTTP method is POST. if

- `public isPurge(): bool` — Return whether the HTTP method is PURGE (Squid and Varnish support). if

- `public isPut(): bool` — Return whether the HTTP method is PUT. if

- `public isSecure(): bool` — Return whether the request has been made using any secure layer

- `public isSoap(): bool` — Return whether the request has been made using SOAP

- `public isTrace(): bool` — Return whether the HTTP method is TRACE.

- `public numFiles(bool $onlySuccessful = false): int` — Returns the number of files available

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
public function getClientAddress( bool $trustForwardedHeader = false ): string|bool;
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
): mixed;
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
): mixed;
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
): FileInterface[];
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

`ArrayAccess` · `ArrayIterator` · `Countable` · `IteratorAggregate` · `Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Http\Request\Exceptions\NullKeyException` · `Traversable`

### Method Summary

- `public __construct(array $items = [])` — AbstractBag constructor.

- `public all(): array` — Returns all the elements of the bag

- `public clear(): void` — Removes all the elements of the bag

- `public count(): int` — Returns the number of elements in the bag

- `public get(mixed $key, mixed $defaultValue = null): mixed` — Returns an element of the bag, or the default value if it is not set

- `public getArray(mixed $key, array $defaultValue = []): array` — Returns an element of the bag as an array. The default value is

- `public getBool(mixed $key, bool $defaultValue = false): bool` — Returns an element of the bag cast to bool, or the default value if

- `public getFloat(mixed $key, float $defaultValue = 0.0): float` — Returns an element of the bag cast to float, or the default value if

- `public getInt(mixed $key, int $defaultValue = 0): int` — Returns an element of the bag cast to int, or the default value if

- `public getIterator(): Traversable` — Returns the iterator of the bag

- `public getString(mixed $key, string $defaultValue = ""): string` — Returns an element of the bag cast to string, or the default value if

- `public has(mixed $key): bool` — Checks whether an element exists in the bag

- `public offsetExists(mixed $offset): bool` — Whether an offset exists

- `public offsetGet(mixed $offset): mixed` — Offset to retrieve

- `public offsetSet(mixed $offset, mixed $value): void` — Offset to set

- `public offsetUnset(mixed $offset): void` — Offset to unset

- `public remove(mixed $key): void` — Removes an element from the bag

- `public set(mixed $key, mixed $value): void` — Sets an element in the bag

- `protected normalizeItems(array $items): array` — Normalizes the items at construction time. Identity in the base;

- `protected normalizeKey(mixed $key): string` — Normalizes a key for lookups and writes. Identity in the base;

### Properties

- `protected array $items = []`

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
    mixed $key,
    mixed $defaultValue = null
): mixed;
```

Returns an element of the bag, or the default value if it is not set

<h4 id="httprequestbagabstractbag-getarray"><code>getArray()</code></h4>

```php
public function getArray(
    mixed $key,
    array $defaultValue = []
): array;
```

Returns an element of the bag as an array. The default value is
returned if the element is not set or is not an array

<h4 id="httprequestbagabstractbag-getbool"><code>getBool()</code></h4>

```php
public function getBool(
    mixed $key,
    bool $defaultValue = false
): bool;
```

Returns an element of the bag cast to bool, or the default value if
it is not set

<h4 id="httprequestbagabstractbag-getfloat"><code>getFloat()</code></h4>

```php
public function getFloat(
    mixed $key,
    float $defaultValue = 0.0
): float;
```

Returns an element of the bag cast to float, or the default value if
it is not set

<h4 id="httprequestbagabstractbag-getint"><code>getInt()</code></h4>

```php
public function getInt(
    mixed $key,
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
    mixed $key,
    string $defaultValue = ""
): string;
```

Returns an element of the bag cast to string, or the default value if
it is not set

<h4 id="httprequestbagabstractbag-has"><code>has()</code></h4>

```php
public function has( mixed $key ): bool;
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
public function remove( mixed $key ): void;
```

Removes an element from the bag

<h4 id="httprequestbagabstractbag-set"><code>set()</code></h4>

```php
public function set(
    mixed $key,
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
protected function normalizeKey( mixed $key ): string;
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

- `public __construct()`

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

- `public __construct(string $host)`

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

- `public __construct(string $method)`

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

- `public __construct(string $name)`

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

- `public __construct()`

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

- `public __construct(string $sanitizer)`

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

- `public __construct(array $file, string $key = "")` — Constructor

- `public getError(): int`

- `public getExtension(): string`

- `public getKey(): string`

- `public getName(): string` — Returns the real name of the uploaded file

- `public getRealType(): string` — Gets the real mime type of the upload file using finfo

- `public getSize(): int` — Returns the file size of the uploaded file

- `public getTempName(): string` — Returns the temporary name of the uploaded file

- `public getType(): string` — Returns the mime type reported by the browser

- `public isUploadedFile(): bool` — Checks whether the file has been uploaded via Post.

- `public moveTo(string $destination): bool` — Moves the temporary file to a destination within the application

### Properties

- `protected int $error = 0`

- `protected string $extension = ""`

- `protected string $key = ""`

- `protected string $name = ""`

- `protected string $realType`

- `protected int $size = 0`

- `protected string $tmpName = ""`

- `protected string $type = ""`

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

- `public getError(): int` — Returns the error if any

- `public getName(): string` — Returns the real name of the uploaded file

- `public getRealType(): string` — Gets the real mime type of the upload file using finfo

- `public getSize(): int` — Returns the file size of the uploaded file

- `public getTempName(): string` — Returns the temporal name of the uploaded file

- `public getType(): string` — Returns the mime type reported by the browser

- `public moveTo(string $destination): bool` — Move the temporary file to a destination

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

- **`Phalcon\Http\Response`** - implements [`Phalcon\Http\ResponseInterface`](#httpresponseinterface), [`Phalcon\Di\InjectionAwareInterface`](/5.20/api/phalcon_di/#diinjectionawareinterface), [`Phalcon\Events\EventsAwareInterface`](/5.20/api/phalcon_events/#eventseventsawareinterface), [`Phalcon\Http\Message\ResponseStatusCodeInterface`](#httpmessageresponsestatuscodeinterface)

`DateTime` · `DateTimeZone` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\InjectionAwareInterface` · `Phalcon\Events\EventsAwareInterface` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait` · `Phalcon\Http\Message\ResponseStatusCodeInterface` · `Phalcon\Http\Response\CookiesInterface` · `Phalcon\Http\Response\Exception` · `Phalcon\Http\Response\Exceptions\NonStandardStatusCodeRequiresMessage` · `Phalcon\Http\Response\Exceptions\ResponseAlreadySent` · `Phalcon\Http\Response\Exceptions\UrlServiceUnavailable` · `Phalcon\Http\Response\Headers` · `Phalcon\Http\Response\HeadersInterface` · `Phalcon\Http\Traits\StatusPhrasesTrait` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Mvc\ViewInterface` · `Phalcon\Support\Helper\File\Basename` · `Phalcon\Support\Helper\Json\Encode` · `Phalcon\Traits\Php\InfoTrait` · `Phalcon\Traits\Php\UrlTrait`

### Method Summary

- `public __construct(string|null $content = null, mixed $code = null, mixed $status = null)` — Constructor

- `public appendContent(mixed $content): ResponseInterface` — Appends a string to the HTTP response body

- `public getContent(): string` — Gets the HTTP response body

- `public getCookies(): CookiesInterface` — Returns cookies set by the user

- `public getDI(): DiInterface` — Returns the internal dependency injector

- `public getHeaders(): HeadersInterface` — Returns headers set by the user

- `public getReasonPhrase(): string|null` — Returns the reason phrase

- `public getStatusCode(): int|null` — Returns the status code

- `public hasHeader(string $name): bool` — Checks if a header exists

- `public isSent(): bool` — Check if the response is already sent

- `public redirect(mixed $location = null, bool $externalRedirect = false, int $statusCode = 302): ResponseInterface` — Redirect by HTTP to another action or URL

- `public removeHeader(string $name): ResponseInterface` — Remove a header in the response

- `public resetHeaders(): ResponseInterface` — Resets all the established headers

- `public send(): ResponseInterface` — Prints out HTTP response to the client

- `public sendCookies(): ResponseInterface` — Sends cookies to the client

- `public sendHeaders(): ResponseInterface|bool` — Sends headers to the client

- `public setCache(int $minutes): ResponseInterface` — Sets Cache headers to use HTTP cache

- `public setContent(string $content): ResponseInterface` — Sets HTTP response body

- `public setContentLength(int $contentLength): ResponseInterface` — Sets the response content-length

- `public setContentType(string $contentType, string|null $charset = null): ResponseInterface` — Sets the response content-type mime, optionally the charset

- `public setCookies(CookiesInterface $cookies): ResponseInterface` — Sets a cookies bag for the response externally

- `public setDI(DiInterface $container): void` — Sets the dependency injector

- `public setEtag(string $etag): ResponseInterface` — Set a custom ETag

- `public setExpires(DateTime $datetime): ResponseInterface` — Sets an Expires header in the response that allows to use the HTTP cache

- `public setFileToSend(string $filePath, mixed $attachmentName = null, bool $attachment = true): ResponseInterface` — Sets an attached file to be sent at the end of the request

- `public setHeader(string $name, mixed $value): ResponseInterface` — Overwrites a header in the response

- `public setHeaders(HeadersInterface $headers): ResponseInterface` — Sets a headers bag for the response externally

- `public setJsonContent(mixed $content, int $jsonOptions = 0, int $depth = 512): ResponseInterface` — Sets HTTP response body. The parameter is automatically converted to JSON

- `public setLastModified(DateTime $datetime): ResponseInterface` — Sets Last-Modified header

- `public setNotModified(): ResponseInterface` — Sends a Not-Modified response

- `public setRawHeader(string $header): ResponseInterface` — Send a raw header to the response

- `public setStatusCode(int $code, string|null $message = null): ResponseInterface` — Sets the HTTP response code

### Properties

- `protected DiInterface|null $container = null`

- `protected string|null $content = null`

- `protected CookiesInterface|null $cookies = null`

- `protected Encode $encode`

- `protected string|null $file = null`

- `protected Headers $headers`

- `protected bool $sent = false`

### Methods

<h4 id="httpresponse-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string|null $content = null,
    mixed $code = null,
    mixed $status = null
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
    mixed $location = null,
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
    mixed $attachmentName = null,
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

- `public appendContent(string $content): ResponseInterface` — Appends a string to the HTTP response body

- `public getContent(): string` — Gets the HTTP response body

- `public getHeaders(): HeadersInterface` — Returns headers set by the user

- `public getStatusCode(): int|null` — Returns the status code

- `public hasHeader(string $name): bool` — Checks if a header exists

- `public isSent(): bool` — Checks if the response was already sent

- `public redirect(string|null $location = null, bool $externalRedirect = false, int $statusCode = 302): ResponseInterface` — Redirect by HTTP to another action or URL

- `public resetHeaders(): ResponseInterface` — Resets all the established headers

- `public send(): ResponseInterface` — Prints out HTTP response to the client

- `public sendCookies(): ResponseInterface` — Sends cookies to the client

- `public sendHeaders(): bool|ResponseInterface` — Sends headers to the client

- `public setContent(string $content): ResponseInterface` — Sets HTTP response body

- `public setContentLength(int $contentLength): ResponseInterface` — Sets the response content-length

- `public setContentType(string $contentType, string|null $charset = null): ResponseInterface` — Sets the response content-type mime, optionally the charset

- `public setExpires(DateTime $datetime): ResponseInterface` — Sets output expire time header

- `public setFileToSend(string $filePath, string|null $attachmentName = null): ResponseInterface` — Sets an attached file to be sent at the end of the request

- `public setHeader(string $name, string $value): ResponseInterface` — Overwrites a header in the response

- `public setJsonContent(mixed $content): ResponseInterface` — Sets HTTP response body. The parameter is automatically converted to JSON

- `public setNotModified(): ResponseInterface` — Sends a Not-Modified response

- `public setRawHeader(string $header): ResponseInterface` — Send a raw header to the response

- `public setStatusCode(int $code, string|null $message = null): ResponseInterface` — Sets the HTTP response code

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
  - [`Phalcon\Di\AbstractInjectionAware`](/5.20/api/phalcon_di/#diabstractinjectionaware)
    - **`Phalcon\Http\Response\Cookies`** - implements [`Phalcon\Http\Response\CookiesInterface`](#httpresponsecookiesinterface)

`Phalcon\Contracts\Http\HttpTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Http\Cookie` · `Phalcon\Http\Cookie\CookieInterface` · `Phalcon\Http\Cookie\Exception` · `Phalcon\Http\Response\Exceptions\ResponseServiceUnavailable` · `Phalcon\Http\Traits\EncryptionAwareTrait`

### Method Summary

- `public __construct(bool $useEncryption = true, string|null $signKey = null)` — Constructor

- `public delete(string $name): bool` — Deletes a cookie by its name

- `public get(string $name): CookieInterface` — Gets a cookie from the bag

- `public getCookies(): array` — Gets all cookies from the bag

- `public has(string $name): bool` — Check if a cookie is defined in the bag or exists in the \_COOKIE

- `public isSent(): bool` — Returns if the headers have already been sent

- `public reset(): CookiesInterface` — Reset set cookies

- `public send(): bool` — Sends the cookies to the client

- `public set(string $name, mixed $value = null, int $expire = 0, string $path = "/", bool $secure = false, string $domain = "", bool $httpOnly = false, array $options = []): CookiesInterface` — Sets a cookie to be sent at the end of the request.

- `public setSignKey(string|null $signKey = null): CookiesInterface` — Sets the cookie's sign key.

- `public useEncryption(bool $useEncryption): CookiesInterface` — Set if cookies in the bag must be automatically encrypted/decrypted

### Properties

- `protected array $cookies = []`

- `protected bool $isRegistered = false`

- `protected bool $isSent = false`

- `protected string|null $signKey = null` — The cookie's sign key.

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

- `public delete(string $name): bool` — Deletes a cookie by its name

- `public get(string $name): CookieInterface` — Gets a cookie from the bag

- `public has(string $name): bool` — Check if a cookie is defined in the bag or exists in the \_COOKIE superglobal

- `public isUsingEncryption(): bool` — Returns if the bag is automatically encrypting/decrypting cookies

- `public reset(): CookiesInterface` — Reset set cookies

- `public send(): bool` — Sends the cookies to the client

- `public set(string $name, mixed $value = null, int $expire = 0, string $path = "/", bool $secure = false, string $domain = "", bool $httpOnly = false, array $options = []): CookiesInterface` — Sets a cookie to be sent at the end of the request

- `public useEncryption(bool $useEncryption): CookiesInterface` — Set if cookies in the bag must be automatically encrypted/decrypted

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

- `public __construct()`

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

- `public __construct()`

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

- `public __construct()`

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

- `public __construct()`

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

- `public get(string $name): string|bool|null` — Gets a header value from the internal bag

- `public getIterator(): Traversable`

- `public has(string $name): bool` — Checks if a header exists

- `public isSent(): bool` — Returns if the headers have already been sent

- `public remove(string $header): HeadersInterface` — Removes a header by its name

- `public reset(): void` — Reset set headers

- `public send(): bool` — Sends the headers to the client

- `public set(string $name, string $value): HeadersInterface` — Sets a header to be sent at the end of the request

- `public setRaw(string $header): HeadersInterface` — Sets a raw header to be sent at the end of the request

- `public toArray(): array` — Returns the current headers as an array

### Properties

- `protected array $headers = []`

- `protected bool $isSent = false`

### Methods

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

Interface

Interface for Phalcon\Http\Response\Headers compatible bags

- **`Phalcon\Http\Response\HeadersInterface`**

### Method Summary

- `public get(string $name): bool|string|null` — Gets a header value from the internal bag

- `public has(string $name): bool` — Checks if a header exists

- `public reset(): void` — Reset set headers

- `public send(): bool` — Sends the headers to the client

- `public set(string $name, string $value): HeadersInterface` — Sets a header to be sent at the end of the request

- `public setRaw(string $header): HeadersInterface` — Sets a raw header to be sent at the end of the request

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

- `public isUsingEncryption(): bool` — Check if implicit encryption is being used

### Properties

- `protected bool $useEncryption = false`

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

- `protected getPhrases(): array` — Returns the list of status codes available

### Methods

<h4 id="httptraitsstatusphrasestrait-getphrases"><code>getPhrases()</code></h4>

```php
protected function getPhrases(): array;
```

Returns the list of status codes available

Source: https://docs.phalcon.io/5.20/api/phalcon_http/index.mdx
