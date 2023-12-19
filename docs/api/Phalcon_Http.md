---
layout: default
title: 'Phalcon\Http\Cookie'
---
# Class **Phalcon\Http\Cookie**

*implements* [Phalcon\Http\CookieInterface](Phalcon_Http.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/cookie.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Provide OO wrappers to manage a HTTP cookie


## Methods
public  **__construct** (*string* $name, [*mixed* $value], [*int* $expire], [*string* $path], [*boolean* $secure], [*string* $domain], [*boolean* $httpOnly])

Phalcon\Http\Cookie constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injector



public  **getDI** ()

Returns the internal dependency injector



public [Phalcon\Http\Cookie](Phalcon_Http.md) **setValue** (*string* $value)

Sets the cookie's value



public *mixed* **getValue** ([*string* | *array* $filters], [*string* $defaultValue])

Returns the cookie's value



public  **send** ()

Sends the cookie to the HTTP client
Stores the cookie definition in session



public  **restore** ()

Reads the cookie-related info from the SESSION to restore the cookie as it was set
This method is automatically called internally so normally you don't need to call it



public  **delete** ()

Deletes the cookie by setting an expire time in the past



public **setSignKey** (*string* $signKey = null): [Phalcon\Http\CookieInterface](Phalcon_Http.md)

Sets the cookie's sign key. The `$signKey` MUST be at least 32 characters long and generated using a cryptographically secure pseudo random generator.

You can use `null` to disable cookie signing.

See: [Phalcon\Security\Random](Phalcon_Security.md)
Throws: [Phalcon\Http\Cookie\Exception](Phalcon_Http.md)



public  **useEncryption** (*mixed* $useEncryption)

Sets if the cookie must be encrypted/decrypted automatically



public  **isUsingEncryption** ()

Check if the cookie is using implicit encryption



public  **setExpiration** (*mixed* $expire)

Sets the cookie's expiration time



public  **getExpiration** ()

Returns the current expiration time



public  **setPath** (*mixed* $path)

Sets the cookie's expiration time



public  **getName** ()

Returns the current cookie's name



public  **getPath** ()

Returns the current cookie's path



public  **setDomain** (*mixed* $domain)

Sets the domain that the cookie is available to



public  **getDomain** ()

Returns the domain that the cookie is available to



public  **setSecure** (*mixed* $secure)

Sets if the cookie must only be sent when the connection is secure (HTTPS)



public  **getSecure** ()

Returns whether the cookie must only be sent when the connection is secure (HTTPS)



public  **setHttpOnly** (*mixed* $httpOnly)

Sets if the cookie is accessible only through the HTTP protocol



public  **getHttpOnly** ()

Returns if the cookie is accessible only through the HTTP protocol



public  **__toString** ()

Magic __toString method converts the cookie's value to string




<hr>

# Class **Phalcon\Http\Cookie\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/cookie/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Interface **Phalcon\Http\CookieInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/cookieinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setValue** (*mixed* $value)

...


abstract public  **getValue** ([*mixed* $filters], [*mixed* $defaultValue])

...


abstract public  **send** ()

...


abstract public  **delete** ()

...


abstract public  **useEncryption** (*mixed* $useEncryption)

...


abstract public  **isUsingEncryption** ()

...


abstract public  **setExpiration** (*mixed* $expire)

...


abstract public  **getExpiration** ()

...


abstract public  **setPath** (*mixed* $path)

...


abstract public  **getName** ()

...


abstract public  **getPath** ()

...


abstract public  **setDomain** (*mixed* $domain)

...


abstract public  **getDomain** ()

...


abstract public  **setSecure** (*mixed* $secure)

...


abstract public  **getSecure** ()

...


abstract public  **setHttpOnly** (*mixed* $httpOnly)

...


abstract public  **getHttpOnly** ()

...



<hr>

# Class **Phalcon\Http\Request**

*implements* [Phalcon\Http\RequestInterface](Phalcon_Http.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/request.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Encapsulates request information for easy and secure access from application controllers.

The request object is a simple value object that is passed between the dispatcher and controller classes.
It packages the HTTP request environment.

```php
<?php

use Phalcon\Http\Request;

$request = new Request();

if ($request->isPost() && $request->isAjax()) {
    echo "Request was made using POST and AJAX";
}

$request->getServer("HTTP_HOST"); // Retrieve SERVER variables
$request->getMethod();            // GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH, PURGE, TRACE, CONNECT
$request->getLanguages();         // An array of languages the client accepts

```


## Methods
public  **getHttpMethodParameterOverride** ()

...


public  **setHttpMethodParameterOverride** (*mixed* $httpMethodParameterOverride)

...


public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injector



public  **getDI** ()

Returns the internal dependency injector



public  **get** ([*mixed* $name], [*mixed* $filters], [*mixed* $defaultValue], [*mixed* $notAllowEmpty], [*mixed* $noRecursive])

Gets a variable from the $_REQUEST superglobal applying filters if needed.
If no parameters are given the $_REQUEST superglobal is returned

```php
<?php

// Returns value from $_REQUEST["user_email"] without sanitizing
$userEmail = $request->get("user_email");

// Returns value from $_REQUEST["user_email"] with sanitizing
$userEmail = $request->get("user_email", "email");

```



public  **getPost** ([*mixed* $name], [*mixed* $filters], [*mixed* $defaultValue], [*mixed* $notAllowEmpty], [*mixed* $noRecursive])

Gets a variable from the $_POST superglobal applying filters if needed
If no parameters are given the $_POST superglobal is returned

```php
<?php

// Returns value from $_POST["user_email"] without sanitizing
$userEmail = $request->getPost("user_email");

// Returns value from $_POST["user_email"] with sanitizing
$userEmail = $request->getPost("user_email", "email");

```



public  **getPut** ([*mixed* $name], [*mixed* $filters], [*mixed* $defaultValue], [*mixed* $notAllowEmpty], [*mixed* $noRecursive])

Gets a variable from put request

```php
<?php

// Returns value from $_PUT["user_email"] without sanitizing
$userEmail = $request->getPut("user_email");

// Returns value from $_PUT["user_email"] with sanitizing
$userEmail = $request->getPut("user_email", "email");

```



public  **getQuery** ([*mixed* $name], [*mixed* $filters], [*mixed* $defaultValue], [*mixed* $notAllowEmpty], [*mixed* $noRecursive])

Gets variable from $_GET superglobal applying filters if needed
If no parameters are given the $_GET superglobal is returned

```php
<?php

// Returns value from $_GET["id"] without sanitizing
$id = $request->getQuery("id");

// Returns value from $_GET["id"] with sanitizing
$id = $request->getQuery("id", "int");

// Returns value from $_GET["id"] with a default value
$id = $request->getQuery("id", null, 150);

```



final protected  **getHelper** (*array* $source, [*mixed* $name], [*mixed* $filters], [*mixed* $defaultValue], [*mixed* $notAllowEmpty], [*mixed* $noRecursive])

Helper to get data from superglobals, applying filters if needed.
If no parameters are given the superglobal is returned.



public  **getServer** (*mixed* $name)

Gets variable from $_SERVER superglobal



public  **has** (*mixed* $name)

Checks whether $_REQUEST superglobal has certain index



public  **hasPost** (*mixed* $name)

Checks whether $_POST superglobal has certain index



public  **hasPut** (*mixed* $name)

Checks whether the PUT data has certain index



public  **hasQuery** (*mixed* $name)

Checks whether $_GET superglobal has certain index



final public  **hasServer** (*mixed* $name)

Checks whether $_SERVER superglobal has certain index



final public  **getHeader** (*mixed* $header)

Gets HTTP header from request data



public  **getScheme** ()

Gets HTTP schema (http/https)



public  **isAjax** ()

Checks whether request has been made using ajax



public  **isSoap** ()

Checks whether request has been made using SOAP



public  **isSoapRequested** ()

Alias of isSoap(). It will be deprecated in future versions



public  **isSecure** ()

Checks whether request has been made using any secure layer



public  **isSecureRequest** ()

Alias of isSecure(). It will be deprecated in future versions



public  **getRawBody** ()

Gets HTTP raw request body



public  **getJsonRawBody** ([*mixed* $associative])

Gets decoded JSON HTTP raw request body



public  **getServerAddress** ()

Gets active server address IP



public  **getServerName** ()

Gets active server name



public  **getHttpHost** ()

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
<?php

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



public  **setStrictHostCheck** ([*mixed* $flag])

Sets if the `Request::getHttpHost` method must be use strict validation of host name or not



public  **isStrictHostCheck** ()

Checks if the `Request::getHttpHost` method will be use strict validation of host name or not



public  **getPort** ()

Gets information about the port on which the request is made.



final public  **getURI** ()

Gets HTTP URI which request has been made



public  **getClientAddress** ([*mixed* $trustForwardedHeader])

Gets most possible client IPv4 Address. This method searches in
$_SERVER["REMOTE_ADDR"] and optionally in $_SERVER["HTTP_X_FORWARDED_FOR"]



final public  **getMethod** ()

Gets HTTP method which request has been made
If the X-HTTP-Method-Override header is set, and if the method is a POST,
then it is used to determine the "real" intended HTTP method.
The _method request parameter can also be used to determine the HTTP method,
but only if setHttpMethodParameterOverride(true) has been called.
The method is always an uppercased string.



public  **getUserAgent** ()

Gets HTTP user agent used to made the request



public  **isValidHttpMethod** (*mixed* $method)

Checks if a method is a valid HTTP method



public  **isMethod** (*mixed* $methods, [*mixed* $strict])

Check if HTTP method match any of the passed methods
When strict is true it checks if validated methods are real HTTP methods



public  **isPost** ()

Checks whether HTTP method is POST. if _SERVER["REQUEST_METHOD"]==="POST"



public  **isGet** ()

Checks whether HTTP method is GET. if _SERVER["REQUEST_METHOD"]==="GET"



public  **isPut** ()

Checks whether HTTP method is PUT. if _SERVER["REQUEST_METHOD"]==="PUT"



public  **isPatch** ()

Checks whether HTTP method is PATCH. if _SERVER["REQUEST_METHOD"]==="PATCH"



public  **isHead** ()

Checks whether HTTP method is HEAD. if _SERVER["REQUEST_METHOD"]==="HEAD"



public  **isDelete** ()

Checks whether HTTP method is DELETE. if _SERVER["REQUEST_METHOD"]==="DELETE"



public  **isOptions** ()

Checks whether HTTP method is OPTIONS. if _SERVER["REQUEST_METHOD"]==="OPTIONS"



public  **isPurge** ()

Checks whether HTTP method is PURGE (Squid and Varnish support). if _SERVER["REQUEST_METHOD"]==="PURGE"



public  **isTrace** ()

Checks whether HTTP method is TRACE. if _SERVER["REQUEST_METHOD"]==="TRACE"



public  **isConnect** ()

Checks whether HTTP method is CONNECT. if _SERVER["REQUEST_METHOD"]==="CONNECT"



public  **hasFiles** ([*mixed* $onlySuccessful])

Checks whether request include attached files



final protected  **hasFileHelper** (*mixed* $data, *mixed* $onlySuccessful)

Recursively counts file in an array of files



public  **getUploadedFiles** ([*mixed* $onlySuccessful])

Gets attached files as Phalcon\Http\Request\File instances



final protected  **smoothFiles** (*array* $names, *array* $types, *array* $tmp_names, *array* $sizes, *array* $errors, *mixed* $prefix)

Smooth out $_FILES to have plain array with all files uploaded



public  **getHeaders** ()

Returns the available headers in the request

```php
<?php

$_SERVER = [
    "PHP_AUTH_USER" => "phalcon",
    "PHP_AUTH_PW"   => "secret",
];

$headers = $request->getHeaders();

echo $headers["Authorization"]; // Basic cGhhbGNvbjpzZWNyZXQ=

```



public  **getHTTPReferer** ()

Gets web page that refers active request. ie: https://www.google.com



final protected  **_getBestQuality** (*array* $qualityParts, *mixed* $name)

Process a request header and return the one with best quality



public  **getContentType** ()

Gets content type which request has been made



public  **getAcceptableContent** ()

Gets an array with mime/types and their quality accepted by the browser/client from _SERVER["HTTP_ACCEPT"]



public  **getBestAccept** ()

Gets best mime/type accepted by the browser/client from _SERVER["HTTP_ACCEPT"]



public  **getClientCharsets** ()

Gets a charsets array and their quality accepted by the browser/client from _SERVER["HTTP_ACCEPT_CHARSET"]



public  **getBestCharset** ()

Gets best charset accepted by the browser/client from _SERVER["HTTP_ACCEPT_CHARSET"]



public  **getLanguages** ()

Gets languages array and their quality accepted by the browser/client from _SERVER["HTTP_ACCEPT_LANGUAGE"]



public  **getBestLanguage** ()

Gets best language accepted by the browser/client from _SERVER["HTTP_ACCEPT_LANGUAGE"]



public  **getBasicAuth** ()

Gets auth info accepted by the browser/client from $_SERVER["PHP_AUTH_USER"]



public  **getDigestAuth** ()

Gets auth info accepted by the browser/client from $_SERVER["PHP_AUTH_DIGEST"]



final protected  **_getQualityHeader** (*mixed* $serverIndex, *mixed* $name)

Process a request header and return an array of values with their qualities




<hr>

# Class **Phalcon\Http\Request\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/request/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Http\Request\File**

*implements* [Phalcon\Http\Request\FileInterface](Phalcon_Http.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/request/file.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Provides OO wrappers to the $_FILES superglobal

```php
<?php

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


## Methods
public  **getError** ()





public  **getKey** ()





public  **getExtension** ()





public  **__construct** (*array* $file, [*mixed* $key])

Phalcon\Http\Request\File constructor



public  **getSize** ()

Returns the file size of the uploaded file



public  **getName** ()

Returns the real name of the uploaded file



public  **getTempName** ()

Returns the temporary name of the uploaded file



public  **getType** ()

Returns the mime type reported by the browser
This mime type is not completely secure, use getRealType() instead



public  **getRealType** ()

Gets the real mime type of the upload file using finfo



public  **isUploadedFile** ()

Checks whether the file has been uploaded via Post.



public  **moveTo** (*mixed* $destination)

Moves the temporary file to a destination within the application




<hr>

# Interface **Phalcon\Http\Request\FileInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/request/fileinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **getSize** ()

...


abstract public  **getName** ()

...


abstract public  **getTempName** ()

...


abstract public  **getType** ()

...


abstract public  **getRealType** ()

...


abstract public  **moveTo** (*mixed* $destination)

...



<hr>

# Interface **Phalcon\Http\RequestInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/requestinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **get** ([*mixed* $name], [*mixed* $filters], [*mixed* $defaultValue])

...


abstract public  **getPost** ([*mixed* $name], [*mixed* $filters], [*mixed* $defaultValue])

...


abstract public  **getQuery** ([*mixed* $name], [*mixed* $filters], [*mixed* $defaultValue])

...


abstract public  **getServer** (*mixed* $name)

...


abstract public  **has** (*mixed* $name)

...


abstract public  **hasPost** (*mixed* $name)

...


abstract public  **hasPut** (*mixed* $name)

...


abstract public  **hasQuery** (*mixed* $name)

...


abstract public  **hasServer** (*mixed* $name)

...


abstract public  **getHeader** (*mixed* $header)

...


abstract public  **getScheme** ()

...


abstract public  **isAjax** ()

...


abstract public  **isSoapRequested** ()

...


abstract public  **isSecureRequest** ()

...


abstract public  **getRawBody** ()

...


abstract public  **getServerAddress** ()

...


abstract public  **getServerName** ()

...


abstract public  **getHttpHost** ()

...


abstract public  **getPort** ()

...


abstract public  **getClientAddress** ([*mixed* $trustForwardedHeader])

...


abstract public  **getMethod** ()

...


abstract public  **getUserAgent** ()

...


abstract public  **isMethod** (*mixed* $methods, [*mixed* $strict])

...


abstract public  **isPost** ()

...


abstract public  **isGet** ()

...


abstract public  **isPut** ()

...


abstract public  **isHead** ()

...


abstract public  **isDelete** ()

...


abstract public  **isOptions** ()

...


abstract public  **isPurge** ()

...


abstract public  **isTrace** ()

...


abstract public  **isConnect** ()

...


abstract public  **hasFiles** ([*mixed* $onlySuccessful])

...


abstract public  **getUploadedFiles** ([*mixed* $onlySuccessful])

...


abstract public  **getHTTPReferer** ()

...


abstract public  **getAcceptableContent** ()

...


abstract public  **getBestAccept** ()

...


abstract public  **getClientCharsets** ()

...


abstract public  **getBestCharset** ()

...


abstract public  **getLanguages** ()

...


abstract public  **getBestLanguage** ()

...


abstract public  **getBasicAuth** ()

...


abstract public  **getDigestAuth** ()

...



<hr>

# Class **Phalcon\Http\Response**

*implements* [Phalcon\Http\ResponseInterface](Phalcon_Http.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/response.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Part of the HTTP cycle is return responses to the clients.
Phalcon\HTTP\Response is the Phalcon component responsible to achieve this task.
HTTP responses are usually composed by headers and body.

```php
<?php

$response = new \Phalcon\Http\Response();

$response->setStatusCode(200, "OK");
$response->setContent("<html><body>Hello</body></html>");

$response->send();

```


## Methods
public  **__construct** ([*mixed* $content], [*mixed* $code], [*mixed* $status])

Phalcon\Http\Response constructor



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injector



public  **getDI** ()

Returns the internal dependency injector



public  **setStatusCode** (*mixed* $code, [*mixed* $message])

Sets the HTTP response code

```php
<?php

$response->setStatusCode(404, "Not Found");

```



public  **getStatusCode** ()

Returns the status code

```php
<?php

print_r(
    $response->getStatusCode()
);

```



public  **setHeaders** ([Phalcon\Http\Response\HeadersInterface](Phalcon_Http.md) $headers)

Sets a headers bag for the response externally



public  **getHeaders** ()

Returns headers set by the user


public **getReasonPhrase** (): *string* | *null*

Returns the reason phrase from the response status

```php
<?php

echo $response->getReasonPhrase();
```



public  **setCookies** ([Phalcon\Http\Response\CookiesInterface](Phalcon_Http.md) $cookies)

Sets a cookies bag for the response externally



public [Phalcon\Http\Response\CookiesInterface](Phalcon_Http.md) **getCookies** ()

Returns cookies set by the user



public  **setHeader** (*mixed* $name, *mixed* $value)

Overwrites a header in the response

```php
<?php

$response->setHeader("Content-Type", "text/plain");

```



public  **setRawHeader** (*mixed* $header)

Send a raw header to the response

```php
<?php

$response->setRawHeader("HTTP/1.1 404 Not Found");

```



public  **resetHeaders** ()

Resets all the established headers



public  **setExpires** ([DateTime](https://php.net/manual/en/class.datetime.php) $datetime)

Sets an Expires header in the response that allows to use the HTTP cache

```php
<?php

$this->response->setExpires(
    new DateTime()
);

```



public  **setLastModified** ([DateTime](https://php.net/manual/en/class.datetime.php) $datetime)

Sets Last-Modified header

```php
<?php

$this->response->setLastModified(
    new DateTime()
);

```



public  **setCache** (*mixed* $minutes)

Sets Cache headers to use HTTP cache

```php
<?php

$this->response->setCache(60);

```



public  **setNotModified** ()

Sends a Not-Modified response



public  **setContentType** (*mixed* $contentType, [*mixed* $charset])

Sets the response content-type mime, optionally the charset

```php
<?php

$response->setContentType("application/pdf");
$response->setContentType("text/plain", "UTF-8");

```



public  **setContentLength** (*mixed* $contentLength)

Sets the response content-length

```php
<?php

$response->setContentLength(2048);

```



public  **setEtag** (*mixed* $etag)

Set a custom ETag

```php
<?php

$response->setEtag(md5(time()));

```



public  **redirect** ([*mixed* $location], [*mixed* $externalRedirect], [*mixed* $statusCode])

Redirect by HTTP to another action or URL

```php
<?php

// Using a string redirect (internal/external)
$response->redirect("posts/index");
$response->redirect("https://en.wikipedia.org", true);
$response->redirect("https://www.example.com/new-location", true, 301);

// Making a redirection based on a named route
$response->redirect(
    [
        "for"        => "index-lang",
        "lang"       => "jp",
        "controller" => "index",
    ]
);

```



public  **setContent** (*mixed* $content)

Sets HTTP response body

```php
<?php

$response->setContent("<h1>Hello!</h1>");

```



public  **setJsonContent** (*mixed* $content, [*mixed* $jsonOptions], [*mixed* $depth])

Sets HTTP response body. The parameter is automatically converted to JSON
and also sets default header: Content-Type: "application/json; charset=UTF-8"

```php
<?php

$response->setJsonContent(
    [
        "status" => "OK",
    ]
);

```



public  **appendContent** (*mixed* $content)

Appends a string to the HTTP response body



public  **getContent** ()

Gets the HTTP response body



public  **isSent** ()

Check if the response is already sent



public  **sendHeaders** ()

Sends headers to the client



public  **sendCookies** ()

Sends cookies to the client



public  **send** ()

Prints out HTTP response to the client



public  **setFileToSend** (*mixed* $filePath, [*mixed* $attachmentName], [*mixed* $attachment])

Sets an attached file to be sent at the end of the request




<hr>

# Class **Phalcon\Http\Response\Cookies**

*implements* [Phalcon\Http\Response\CookiesInterface](Phalcon_Http.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/response/cookies.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class is a bag to manage the cookies
A cookies bag is automatically registered as part of the 'response' service in the DI


## Methods
public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injector



public  **getDI** ()

Returns the internal dependency injector



public **setSignKey** (*string* $signKey = null): [Phalcon\Http\CookieInterface](Phalcon_Http.md)

Sets the cookie's sign key. The `$signKey` MUST be at least 32 characters long and generated using a cryptographically secure pseudo random generator.

You can use `null` to disable cookie signing.

See: [Phalcon\Security\Random](Phalcon_Security.md)
Throws: [Phalcon\Http\Cookie\Exception](Phalcon_Http.md)


	
public  **useEncryption** (*mixed* $useEncryption)

Set if cookies in the bag must be automatically encrypted/decrypted



public  **isUsingEncryption** ()

Returns if the bag is automatically encrypting/decrypting cookies



public  **set** (*mixed* $name, [*mixed* $value], [*mixed* $expire], [*mixed* $path], [*mixed* $secure], [*mixed* $domain], [*mixed* $httpOnly])

Sets a cookie to be sent at the end of the request
This method overrides any cookie set before with the same name



public  **get** (*mixed* $name)

Gets a cookie from the bag



public  **has** (*mixed* $name)

Check if a cookie is defined in the bag or exists in the _COOKIE superglobal



public  **delete** (*mixed* $name)

Deletes a cookie by its name
This method does not removes cookies from the _COOKIE superglobal



public  **send** ()

Sends the cookies to the client
Cookies aren't sent if headers are sent in the current request



public  **reset** ()

Reset set cookies




<hr>

# Interface **Phalcon\Http\Response\CookiesInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/response/cookiesinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **useEncryption** (*mixed* $useEncryption)

...


abstract public  **isUsingEncryption** ()

...


abstract public  **set** (*mixed* $name, [*mixed* $value], [*mixed* $expire], [*mixed* $path], [*mixed* $secure], [*mixed* $domain], [*mixed* $httpOnly])

...


abstract public  **get** (*mixed* $name)

...


abstract public  **has** (*mixed* $name)

...


abstract public  **delete** (*mixed* $name)

...


abstract public  **send** ()

...


abstract public  **reset** ()

...



<hr>

# Class **Phalcon\Http\Response\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/response/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Http\Response\Headers**

*implements* [Phalcon\Http\Response\HeadersInterface](Phalcon_Http.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/response/headers.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This class is a bag to manage the response headers


## Methods
public  **set** (*mixed* $name, *mixed* $value)

Sets a header to be sent at the end of the request



public  **get** (*mixed* $name)

Gets a header value from the internal bag



public  **setRaw** (*mixed* $header)

Sets a raw header to be sent at the end of the request



public  **remove** (*mixed* $header)

Removes a header to be sent at the end of the request



public  **send** ()

Sends the headers to the client



public  **reset** ()

Reset set headers



public  **toArray** ()

Returns the current headers as an array



public static  **__set_state** (*array* $data)

Restore a \Phalcon\Http\Response\Headers object




<hr>

# Interface **Phalcon\Http\Response\HeadersInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/response/headersinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **set** (*mixed* $name, *mixed* $value)

...


abstract public  **get** (*mixed* $name)

...


abstract public  **setRaw** (*mixed* $header)

...


abstract public  **send** ()

...


abstract public  **reset** ()

...


abstract public static  **__set_state** (*array* $data)

...



<hr>

# Interface **Phalcon\Http\ResponseInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/http/responseinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setStatusCode** (*mixed* $code, [*mixed* $message])

...


abstract public  **getHeaders** ()

...


abstract public  **setHeader** (*mixed* $name, *mixed* $value)

...


abstract public  **setRawHeader** (*mixed* $header)

...


abstract public  **resetHeaders** ()

...


abstract public  **setExpires** ([DateTime](https://php.net/manual/en/class.datetime.php) $datetime)

...


abstract public  **setNotModified** ()

...


abstract public  **setContentType** (*mixed* $contentType, [*mixed* $charset])

...


abstract public  **setContentLength** (*mixed* $contentLength)

...


abstract public  **redirect** ([*mixed* $location], [*mixed* $externalRedirect], [*mixed* $statusCode])

...


abstract public  **setContent** (*mixed* $content)

...


abstract public  **setJsonContent** (*mixed* $content)

...


abstract public  **appendContent** (*mixed* $content)

...


abstract public  **getContent** ()

...


abstract public  **sendHeaders** ()

...


abstract public  **sendCookies** ()

...


abstract public  **send** ()

...


abstract public  **setFileToSend** (*mixed* $filePath, [*mixed* $attachmentName])

...
