---
layout: default
title: 'Phalcon\Translate'
---
# Abstract class **Phalcon\Translate**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate.zep" class="btn btn-default btn-sm">Source on GitHub</a>


<hr>

# Abstract class **Phalcon\Translate\Adapter**

*implements* [Phalcon\Translate\AdapterInterface](Phalcon_Translate.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate/adapter.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Base class for Phalcon\Translate adapters


## Methods
public  **__construct** (*array* $options)

...


public  **setInterpolator** ([Phalcon\Translate\InterpolatorInterface](Phalcon_Translate.md) $interpolator)

...


public *string* **t** (*string* $translateKey, [*array* $placeholders])

Returns the translation string of the given key



public *string* **_** (*string* $translateKey, [*array* $placeholders])

Returns the translation string of the given key (alias of method 't')



public  **offsetSet** (*string* $offset, *string* $value)

Sets a translation value



public  **offsetExists** (*mixed* $translateKey)

Check whether a translation key exists



public  **offsetUnset** (*string* $offset)

Unsets a translation from the dictionary



public *string* **offsetGet** (*string* $translateKey)

Returns the translation related to the given key



protected  **replacePlaceholders** (*mixed* $translation, [*mixed* $placeholders])

Replaces placeholders by the values passed



abstract public  **query** (*mixed* $index, [*mixed* $placeholders]) inherited from [Phalcon\Translate\AdapterInterface](Phalcon_Translate.md)

...


abstract public  **exists** (*mixed* $index) inherited from [Phalcon\Translate\AdapterInterface](Phalcon_Translate.md)

...



<hr>

# Class **Phalcon\Translate\Adapter\Csv**

*extends* abstract class [Phalcon\Translate\Adapter](Phalcon_Translate.md)

*implements* [Phalcon\Translate\AdapterInterface](Phalcon_Translate.md), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate/adapter/csv.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to define translation lists using CSV file


## Methods
public  **__construct** (*array* $options)

Phalcon\Translate\Adapter\Csv constructor



private  **_load** (*string* $file, *int* $length, *string* $delimiter, *string* $enclosure)

Load translates from file



public  **query** (*mixed* $index, [*mixed* $placeholders])

Returns the translation related to the given key



public  **exists** (*mixed* $index)

Check whether is defined a translation key in the internal array



public  **setInterpolator** ([Phalcon\Translate\InterpolatorInterface](Phalcon_Translate.md) $interpolator) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

...


public *string* **t** (*string* $translateKey, [*array* $placeholders]) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Returns the translation string of the given key



public *string* **_** (*string* $translateKey, [*array* $placeholders]) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Returns the translation string of the given key (alias of method 't')



public  **offsetSet** (*string* $offset, *string* $value) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Sets a translation value



public  **offsetExists** (*mixed* $translateKey) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Check whether a translation key exists



public  **offsetUnset** (*string* $offset) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Unsets a translation from the dictionary



public *string* **offsetGet** (*string* $translateKey) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Returns the translation related to the given key



protected  **replacePlaceholders** (*mixed* $translation, [*mixed* $placeholders]) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Replaces placeholders by the values passed




<hr>

# Class **Phalcon\Translate\Adapter\Gettext**

*extends* abstract class [Phalcon\Translate\Adapter](Phalcon_Translate.md)

*implements* [Phalcon\Translate\AdapterInterface](Phalcon_Translate.md), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate/adapter/gettext.zep" class="btn btn-default btn-sm">Source on GitHub</a>


```php
<?php

use Phalcon\Translate\Adapter\Gettext;

$adapter = new Gettext(
    [
        "locale"        => "de_DE.UTF-8",
        "defaultDomain" => "translations",
        "directory"     => "/path/to/application/locales",
        "category"      => LC_MESSAGES,
    ]
);

```

Allows translate using gettext


## Methods
public  **getDirectory** ()





public  **getDefaultDomain** ()





public  **getLocale** ()





public  **getCategory** ()





public  **__construct** (*array* $options)

Phalcon\Translate\Adapter\Gettext constructor



public  **query** (*mixed* $index, [*mixed* $placeholders])

Returns the translation related to the given key.

```php
<?php

$translator->query("你好 %name%！", ["name" => "Phalcon"]);

```



public  **exists** (*mixed* $index)

Check whether is defined a translation key in the internal array



public  **nquery** (*mixed* $msgid1, *mixed* $msgid2, *mixed* $count, [*mixed* $placeholders], [*mixed* $domain])

The plural version of gettext().
Some languages have more than one form for plural messages dependent on the count.



public  **setDomain** (*mixed* $domain)

Changes the current domain (i.e. the translation file)



public  **resetDomain** ()

Sets the default domain



public  **setDefaultDomain** (*mixed* $domain)

Sets the domain default to search within when calls are made to gettext()



public  **setDirectory** (*mixed* $directory)

Sets the path for a domain

```php
<?php

// Set the directory path
$gettext->setDirectory("/path/to/the/messages");

// Set the domains and directories path
$gettext->setDirectory(
    [
        "messages" => "/path/to/the/messages",
        "another"  => "/path/to/the/another",
    ]
);

```



public  **setLocale** (*mixed* $category, *mixed* $locale)

Sets locale information

```php
<?php

// Set locale to Dutch
$gettext->setLocale(LC_ALL, "nl_NL");

// Try different possible locale names for german
$gettext->setLocale(LC_ALL, "de_DE@euro", "de_DE", "de", "ge");

```



protected  **prepareOptions** (*array* $options)

Validator for constructor



protected  **getOptionsDefault** ()

Gets default options



public  **setInterpolator** ([Phalcon\Translate\InterpolatorInterface](Phalcon_Translate.md) $interpolator) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

...


public *string* **t** (*string* $translateKey, [*array* $placeholders]) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Returns the translation string of the given key



public *string* **_** (*string* $translateKey, [*array* $placeholders]) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Returns the translation string of the given key (alias of method 't')



public  **offsetSet** (*string* $offset, *string* $value) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Sets a translation value



public  **offsetExists** (*mixed* $translateKey) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Check whether a translation key exists



public  **offsetUnset** (*string* $offset) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Unsets a translation from the dictionary



public *string* **offsetGet** (*string* $translateKey) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Returns the translation related to the given key



protected  **replacePlaceholders** (*mixed* $translation, [*mixed* $placeholders]) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Replaces placeholders by the values passed




<hr>

# Class **Phalcon\Translate\Adapter\NativeArray**

*extends* abstract class [Phalcon\Translate\Adapter](Phalcon_Translate.md)

*implements* [Phalcon\Translate\AdapterInterface](Phalcon_Translate.md), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate/adapter/nativearray.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to define translation lists using PHP arrays


## Methods
public  **__construct** (*array* $options)

Phalcon\Translate\Adapter\NativeArray constructor



public  **query** (*mixed* $index, [*mixed* $placeholders])

Returns the translation related to the given key



public  **exists** (*mixed* $index)

Check whether is defined a translation key in the internal array



public  **setInterpolator** ([Phalcon\Translate\InterpolatorInterface](Phalcon_Translate.md) $interpolator) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

...


public *string* **t** (*string* $translateKey, [*array* $placeholders]) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Returns the translation string of the given key



public *string* **_** (*string* $translateKey, [*array* $placeholders]) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Returns the translation string of the given key (alias of method 't')



public  **offsetSet** (*string* $offset, *string* $value) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Sets a translation value



public  **offsetExists** (*mixed* $translateKey) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Check whether a translation key exists



public  **offsetUnset** (*string* $offset) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Unsets a translation from the dictionary



public *string* **offsetGet** (*string* $translateKey) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Returns the translation related to the given key



protected  **replacePlaceholders** (*mixed* $translation, [*mixed* $placeholders]) inherited from [Phalcon\Translate\Adapter](Phalcon_Translate.md)

Replaces placeholders by the values passed




<hr>

# Interface **Phalcon\Translate\AdapterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate/adapterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **t** (*mixed* $translateKey, [*mixed* $placeholders])

...


abstract public  **query** (*mixed* $index, [*mixed* $placeholders])

...


abstract public  **exists** (*mixed* $index)

...



<hr>

# Class **Phalcon\Translate\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Translate\Factory**

*extends* abstract class [Phalcon\Factory](Phalcon_Factory.md)

*implements* [Phalcon\FactoryInterface](Phalcon_Factory.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate/factory.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Loads Translate Adapter class using 'adapter' option

```php
<?php

use Phalcon\Translate\Factory;

$options = [
    "locale"        => "de_DE.UTF-8",
    "defaultDomain" => "translations",
    "directory"     => "/path/to/application/locales",
    "category"      => LC_MESSAGES,
    "adapter"       => "gettext",
];
$translate = Factory::load($options);

```


## Methods
public static  **load** ([Phalcon\Config](Phalcon_Config.md) | *array* $config)





protected static  **loadClass** (*mixed* $namespace, *mixed* $config) inherited from [Phalcon\Factory](Phalcon_Factory.md)

...



<hr>

# Class **Phalcon\Translate\Interpolator\AssociativeArray**

*implements* [Phalcon\Translate\InterpolatorInterface](Phalcon_Translate.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate/interpolator/associativearray.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
public  **replacePlaceholders** (*mixed* $translation, [*mixed* $placeholders])

Replaces placeholders by the values passed




<hr>

# Class **Phalcon\Translate\Interpolator\IndexedArray**

*implements* [Phalcon\Translate\InterpolatorInterface](Phalcon_Translate.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate/interpolator/indexedarray.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
public  **replacePlaceholders** (*mixed* $translation, [*mixed* $placeholders])

Replaces placeholders by the values passed




<hr>

# Interface **Phalcon\Translate\InterpolatorInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/translate/interpolatorinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **replacePlaceholders** (*mixed* $translation, [*mixed* $placeholders])

...
