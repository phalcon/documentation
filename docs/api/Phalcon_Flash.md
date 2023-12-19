---
layout: default
title: 'Phalcon\Flash'
---
# Abstract class **Phalcon\Flash**

*implements* [Phalcon\FlashInterface](Phalcon_Flash.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/flash.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Shows HTML notifications related to different circumstances. Classes can be stylized using CSS

```php
<?php

$flash->success("The record was successfully deleted");
$flash->error("Cannot open the file");

```


## Methods
public  **__construct** ([*mixed* $cssClasses])

Phalcon\Flash constructor



public  **getAutoescape** ()

Returns the autoescape mode in generated html



public  **setAutoescape** (*mixed* $autoescape)

Set the autoescape mode in generated html



public  **getEscaperService** ()

Returns the Escaper Service



public  **setEscaperService** ([Phalcon\EscaperInterface](Phalcon_Escaper.md) $escaperService)

Sets the Escaper Service



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector)

Sets the dependency injector



public  **getDI** ()

Returns the internal dependency injector



public  **setImplicitFlush** (*mixed* $implicitFlush)

Set whether the output must be implicitly flushed to the output or returned as string



public  **setAutomaticHtml** (*mixed* $automaticHtml)

Set if the output must be implicitly formatted with HTML



public  **setCssClasses** (*array* $cssClasses)

Set an array with CSS classes to format the messages



public  **error** (*mixed* $message)

Shows a HTML error message

```php
<?php

$flash->error("This is an error");

```



public  **notice** (*mixed* $message)

Shows a HTML notice/information message

```php
<?php

$flash->notice("This is an information");

```



public  **success** (*mixed* $message)

Shows a HTML success message

```php
<?php

$flash->success("The process was finished successfully");

```



public  **warning** (*mixed* $message)

Shows a HTML warning message

```php
<?php

$flash->warning("Hey, this is important");

```



public *string* | *void* **outputMessage** (*mixed* $type, *string* | *array* $message)

Outputs a message formatting it with HTML

```php
<?php

$flash->outputMessage("error", $message);

```



public  **clear** ()

Clears accumulated messages when implicit flush is disabled



abstract public  **message** (*mixed* $type, *mixed* $message) inherited from [Phalcon\FlashInterface](Phalcon_Flash.md)

...



<hr>

# Class **Phalcon\Flash\Direct**

*extends* abstract class [Phalcon\Flash](Phalcon_Flash.md)

*implements* [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\FlashInterface](Phalcon_Flash.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/flash/direct.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This is a variant of the Phalcon\Flash that immediately outputs any message passed to it


## Methods
public  **message** (*mixed* $type, *mixed* $message)

Outputs a message



public  **output** ([*mixed* $remove])

Prints the messages accumulated in the flasher



public  **__construct** ([*mixed* $cssClasses]) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Phalcon\Flash constructor



public  **getAutoescape** () inherited from [Phalcon\Flash](Phalcon_Flash.md)

Returns the autoescape mode in generated html



public  **setAutoescape** (*mixed* $autoescape) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Set the autoescape mode in generated html



public  **getEscaperService** () inherited from [Phalcon\Flash](Phalcon_Flash.md)

Returns the Escaper Service



public  **setEscaperService** ([Phalcon\EscaperInterface](Phalcon_Escaper.md) $escaperService) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Sets the Escaper Service



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Flash](Phalcon_Flash.md)

Returns the internal dependency injector



public  **setImplicitFlush** (*mixed* $implicitFlush) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Set whether the output must be implicitly flushed to the output or returned as string



public  **setAutomaticHtml** (*mixed* $automaticHtml) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Set if the output must be implicitly formatted with HTML



public  **setCssClasses** (*array* $cssClasses) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Set an array with CSS classes to format the messages



public  **error** (*mixed* $message) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Shows a HTML error message

```php
<?php

$flash->error("This is an error");

```



public  **notice** (*mixed* $message) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Shows a HTML notice/information message

```php
<?php

$flash->notice("This is an information");

```



public  **success** (*mixed* $message) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Shows a HTML success message

```php
<?php

$flash->success("The process was finished successfully");

```



public  **warning** (*mixed* $message) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Shows a HTML warning message

```php
<?php

$flash->warning("Hey, this is important");

```



public *string* | *void* **outputMessage** (*mixed* $type, *string* | *array* $message) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Outputs a message formatting it with HTML

```php
<?php

$flash->outputMessage("error", $message);

```



public  **clear** () inherited from [Phalcon\Flash](Phalcon_Flash.md)

Clears accumulated messages when implicit flush is disabled




<hr>

# Class **Phalcon\Flash\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/flash/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Flash\Session**

*extends* abstract class [Phalcon\Flash](Phalcon_Flash.md)

*implements* [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\FlashInterface](Phalcon_Flash.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/flash/session.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Temporarily stores the messages in session, then messages can be printed in the next request


## Methods
protected  **_getSessionMessages** (*mixed* $remove, [*mixed* $type])

Returns the messages stored in session



protected  **_setSessionMessages** (*array* $messages)

Stores the messages in session



public  **message** (*mixed* $type, *mixed* $message)

Adds a message to the session flasher



public  **has** ([*mixed* $type])

Checks whether there are messages



public  **getMessages** ([*mixed* $type], [*mixed* $remove])

Returns the messages in the session flasher



public  **output** ([*mixed* $remove])

Prints the messages in the session flasher



public  **clear** ()

Clear messages in the session messenger



public  **__construct** ([*mixed* $cssClasses]) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Phalcon\Flash constructor



public  **getAutoescape** () inherited from [Phalcon\Flash](Phalcon_Flash.md)

Returns the autoescape mode in generated html



public  **setAutoescape** (*mixed* $autoescape) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Set the autoescape mode in generated html



public  **getEscaperService** () inherited from [Phalcon\Flash](Phalcon_Flash.md)

Returns the Escaper Service



public  **setEscaperService** ([Phalcon\EscaperInterface](Phalcon_Escaper.md) $escaperService) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Sets the Escaper Service



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Flash](Phalcon_Flash.md)

Returns the internal dependency injector



public  **setImplicitFlush** (*mixed* $implicitFlush) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Set whether the output must be implicitly flushed to the output or returned as string



public  **setAutomaticHtml** (*mixed* $automaticHtml) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Set if the output must be implicitly formatted with HTML



public  **setCssClasses** (*array* $cssClasses) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Set an array with CSS classes to format the messages



public  **error** (*mixed* $message) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Shows a HTML error message

```php
<?php

$flash->error("This is an error");

```



public  **notice** (*mixed* $message) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Shows a HTML notice/information message

```php
<?php

$flash->notice("This is an information");

```



public  **success** (*mixed* $message) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Shows a HTML success message

```php
<?php

$flash->success("The process was finished successfully");

```



public  **warning** (*mixed* $message) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Shows a HTML warning message

```php
<?php

$flash->warning("Hey, this is important");

```



public *string* | *void* **outputMessage** (*mixed* $type, *string* | *array* $message) inherited from [Phalcon\Flash](Phalcon_Flash.md)

Outputs a message formatting it with HTML

```php
<?php

$flash->outputMessage("error", $message);

```




<hr>

# Interface **Phalcon\FlashInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/flashinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **error** (*mixed* $message)

...


abstract public  **notice** (*mixed* $message)

...


abstract public  **success** (*mixed* $message)

...


abstract public  **warning** (*mixed* $message)

...


abstract public  **message** (*mixed* $type, *mixed* $message)

...
