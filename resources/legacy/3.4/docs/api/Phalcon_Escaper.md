---
layout: default
title: 'Phalcon\Escaper'
---
# Class **Phalcon\Escaper**

*implements* [Phalcon\EscaperInterface](Phalcon_Escaper.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/escaper.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Escapes different kinds of text securing them. By using this component you may
prevent XSS attacks.

This component only works with UTF-8. The PREG extension needs to be compiled with UTF-8 support.

```php
<?php

$escaper = new \Phalcon\Escaper();

$escaped = $escaper->escapeCss("font-family: <Verdana>");

echo $escaped; // font\2D family\3A \20 \3C Verdana\3E

```


## Methods
public  **setEncoding** (*mixed* $encoding)

Sets the encoding to be used by the escaper

```php
<?php

$escaper->setEncoding("utf-8");

```



public  **getEncoding** ()

Returns the internal encoding used by the escaper



public  **setHtmlQuoteType** (*mixed* $quoteType)

Sets the HTML quoting type for htmlspecialchars

```php
<?php

$escaper->setHtmlQuoteType(ENT_XHTML);

```



public  **setDoubleEncode** (*mixed* $doubleEncode)

Sets the double_encode to be used by the escaper

```php
<?php

$escaper->setDoubleEncode(false);

```



final public  **detectEncoding** (*mixed* $str)

Detect the character encoding of a string to be handled by an encoder
Special-handling for chr(172) and chr(128) to chr(159) which fail to be detected by mb_detect_encoding()



final public  **normalizeEncoding** (*mixed* $str)

Utility to normalize a string's encoding to UTF-32.



public  **escapeHtml** (*mixed* $text)

Escapes a HTML string. Internally uses htmlspecialchars



public  **escapeHtmlAttr** (*mixed* $attribute)

Escapes a HTML attribute string



public  **escapeCss** (*mixed* $css)

Escape CSS strings by replacing non-alphanumeric chars by their hexadecimal escaped representation



public  **escapeJs** (*mixed* $js)

Escape javascript strings by replacing non-alphanumeric chars by their hexadecimal escaped representation



public  **escapeUrl** (*mixed* $url)

Escapes a URL. Internally uses rawurlencode




<hr>

# Class **Phalcon\Escaper\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/escaper/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Interface **Phalcon\EscaperInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/escaperinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setEncoding** (*mixed* $encoding)

...


abstract public  **getEncoding** ()

...


abstract public  **setHtmlQuoteType** (*mixed* $quoteType)

...


abstract public  **escapeHtml** (*mixed* $text)

...


abstract public  **escapeHtmlAttr** (*mixed* $text)

...


abstract public  **escapeCss** (*mixed* $css)

...


abstract public  **escapeJs** (*mixed* $js)

...


abstract public  **escapeUrl** (*mixed* $url)

...
