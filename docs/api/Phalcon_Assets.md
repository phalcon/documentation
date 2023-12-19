---
layout: default
title: 'Phalcon\Assets\Collection'
---
# Class **Phalcon\Assets\Collection**

*implements* [Countable](https://php.net/manual/en/class.countable.php), [Iterator](https://php.net/manual/en/class.iterator.php), [Traversable](https://php.net/manual/en/class.traversable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/collection.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents a collection of resources


## Methods
public  **getPrefix** ()

...


public  **getLocal** ()

...


public  **getResources** ()

...


public  **getCodes** ()

...


public  **getPosition** ()

...


public  **getFilters** ()

...


public  **getAttributes** ()

...


public  **getJoin** ()

...


public  **getTargetUri** ()

...


public  **getTargetPath** ()

...


public  **getTargetLocal** ()

...


public  **getSourcePath** ()

...


public  **__construct** ()

Phalcon\Assets\Collection constructor



public  **add** ([Phalcon\Assets\Resource](Phalcon_Assets.md) $resource)

Adds a resource to the collection



public  **addInline** ([Phalcon\Assets\Inline](Phalcon_Assets.md) $code)

Adds an inline code to the collection



public  **has** ([Phalcon\Assets\ResourceInterface](Phalcon_Assets.md) $resource)

Checks this the resource is added to the collection.

```php
<?php

use Phalcon\Assets\Resource;
use Phalcon\Assets\Collection;

$collection = new Collection();

$resource = new Resource("js", "js/jquery.js");
$resource->has($resource); // true

```



public  **addCss** (*mixed* $path, [*mixed* $local], [*mixed* $filter], [*mixed* $attributes])

Adds a CSS resource to the collection



public  **addInlineCss** (*mixed* $content, [*mixed* $filter], [*mixed* $attributes])

Adds an inline CSS to the collection



public [Phalcon\Assets\Collection](Phalcon_Assets.md) **addJs** (*string* $path, [*boolean* $local], [*boolean* $filter], [*array* $attributes])

Adds a javascript resource to the collection



public  **addInlineJs** (*mixed* $content, [*mixed* $filter], [*mixed* $attributes])

Adds an inline javascript to the collection



public  **count** ()

Returns the number of elements in the form



public  **rewind** ()

Rewinds the internal iterator



public  **current** ()

Returns the current resource in the iterator



public *int* **key** ()

Returns the current position/key in the iterator



public  **next** ()

Moves the internal iteration pointer to the next position



public  **valid** ()

Check if the current element in the iterator is valid



public  **setTargetPath** (*mixed* $targetPath)

Sets the target path of the file for the filtered/join output



public  **setSourcePath** (*mixed* $sourcePath)

Sets a base source path for all the resources in this collection



public  **setTargetUri** (*mixed* $targetUri)

Sets a target uri for the generated HTML



public  **setPrefix** (*mixed* $prefix)

Sets a common prefix for all the resources



public  **setLocal** (*mixed* $local)

Sets if the collection uses local resources by default



public  **setAttributes** (*array* $attributes)

Sets extra HTML attributes



public  **setFilters** (*array* $filters)

Sets an array of filters in the collection



public  **setTargetLocal** (*mixed* $targetLocal)

Sets the target local



public  **join** (*mixed* $join)

Sets if all filtered resources in the collection must be joined in a single result file



public  **getRealTargetPath** (*mixed* $basePath)

Returns the complete location where the joined/filtered collection must be written



public  **addFilter** ([Phalcon\Assets\FilterInterface](Phalcon_Assets.md) $filter)

Adds a filter to the collection



final protected  **addResource** ([Phalcon\Assets\ResourceInterface](Phalcon_Assets.md) $resource)

Adds a resource or inline-code to the collection




<hr>

# Class **Phalcon\Assets\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Interface **Phalcon\Assets\FilterInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/filterinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **filter** (*mixed* $content)

...



<hr>

# Class **Phalcon\Assets\Filters\Cssmin**

*implements* [Phalcon\Assets\FilterInterface](Phalcon_Assets.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/filters/cssmin.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Minify the css - removes comments
removes newlines and line feeds keeping
removes last semicolon from last property


## Methods
public  **filter** (*mixed* $content)

Filters the content using CSSMIN




<hr>

# Class **Phalcon\Assets\Filters\Jsmin**

*implements* [Phalcon\Assets\FilterInterface](Phalcon_Assets.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/filters/jsmin.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Deletes the characters which are insignificant to JavaScript. Comments will be removed. Tabs will be
replaced with spaces. Carriage returns will be replaced with linefeeds.
Most spaces and linefeeds will be removed.


## Methods
public  **filter** (*mixed* $content)

Filters the content using JSMIN




<hr>

# Class **Phalcon\Assets\Filters\None**

*implements* [Phalcon\Assets\FilterInterface](Phalcon_Assets.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/filters/none.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Returns the content without make any modification to the original source


## Methods
public  **filter** (*mixed* $content)

Returns the content without be touched




<hr>

# Class **Phalcon\Assets\Inline**

*implements* [Phalcon\Assets\ResourceInterface](Phalcon_Assets.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/inline.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents an inline asset

```php
<?php

$inline = new \Phalcon\Assets\Inline("js", "alert('hello world');");

```


## Methods
public  **getType** ()

...


public  **getContent** ()

...


public  **getFilter** ()

...


public  **getAttributes** ()

...


public  **__construct** (*string* $type, *string* $content, [*boolean* $filter], [*array* $attributes])

Phalcon\Assets\Inline constructor



public  **setType** (*mixed* $type)

Sets the inline's type



public  **setFilter** (*mixed* $filter)

Sets if the resource must be filtered or not



public  **setAttributes** (*array* $attributes)

Sets extra HTML attributes



public  **getResourceKey** ()

Gets the resource's key.




<hr>

# Class **Phalcon\Assets\Inline\Css**

*extends* class [Phalcon\Assets\Inline](Phalcon_Assets.md)

*implements* [Phalcon\Assets\ResourceInterface](Phalcon_Assets.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/inline/css.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents an inlined CSS


## Methods
public  **__construct** (*string* $content, [*boolean* $filter], [*array* $attributes])

Phalcon\Assets\Inline\Css Constructor



public *string* **getType** () inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Gets the resource's type.



public *string* **getContent** () inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Gets the content.



public *boolean* **getFilter** () inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Gets if the resource must be filtered or not.



public *array* **getAttributes** () inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Gets extra HTML attributes.


public [*self*](Phalcon_Assets.md) **setType** (*string* $type) inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Sets the inline's type



public [*self*](Phalcon_Assets.md) **setFilter** (*boolean* $filter) inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Sets if the resource must be filtered or not



public [*self*](Phalcon_Assets.md) **setAttributes** (*array* $attributes) inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Sets extra HTML attributes



public *string* **getResourceKey** () inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Gets the resource's key.




<hr>

# Class **Phalcon\Assets\Inline\Js**

*extends* class [Phalcon\Assets\Inline](Phalcon_Assets.md)

*implements* [Phalcon\Assets\ResourceInterface](Phalcon_Assets.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/inline/js.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents an inline Javascript


## Methods
public  **__construct** (*string* $content, [*boolean* $filter], [*array* $attributes])





public  **getType** () inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

...


public  **getContent** () inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

...


public  **getFilter** () inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

...


public  **getAttributes** () inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

...


public  **setType** (*mixed* $type) inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Sets the inline's type



public  **setFilter** (*mixed* $filter) inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Sets if the resource must be filtered or not



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Sets extra HTML attributes



public  **getResourceKey** () inherited from [Phalcon\Assets\Inline](Phalcon_Assets.md)

Gets the resource's key.




<hr>

# Class **Phalcon\Assets\Manager**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/manager.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Manages collections of CSS/Javascript assets


## Methods
public  **__construct** ([*array* $options])





public  **setOptions** (*array* $options)

Sets the manager options



public  **getOptions** ()

Returns the manager options



public  **useImplicitOutput** (*mixed* $implicitOutput)

Sets if the HTML generated must be directly printed or returned



public  **addCss** (*mixed* $path, [*mixed* $local], [*mixed* $filter], [*mixed* $attributes])

Adds a Css resource to the 'css' collection

```php
<?php

$assets->addCss("css/bootstrap.css");
$assets->addCss("https://bootstrap.my-cdn.com/style.css", false);

```



public  **addInlineCss** (*mixed* $content, [*mixed* $filter], [*mixed* $attributes])

Adds an inline Css to the 'css' collection



public  **addJs** (*mixed* $path, [*mixed* $local], [*mixed* $filter], [*mixed* $attributes])

Adds a javascript resource to the 'js' collection

```php
<?php

$assets->addJs("scripts/jquery.js");
$assets->addJs("https://jquery.my-cdn.com/jquery.js", false);

```



public  **addInlineJs** (*mixed* $content, [*mixed* $filter], [*mixed* $attributes])

Adds an inline javascript to the 'js' collection



public  **addResourceByType** (*mixed* $type, [Phalcon\Assets\Resource](Phalcon_Assets.md) $resource)

Adds a resource by its type

```php
<?php

$assets->addResourceByType("css",
    new \Phalcon\Assets\Resource\Css("css/style.css")
);

```



public  **addInlineCodeByType** (*mixed* $type, [Phalcon\Assets\Inline](Phalcon_Assets.md) $code)

Adds an inline code by its type



public  **addResource** ([Phalcon\Assets\Resource](Phalcon_Assets.md) $resource)

Adds a raw resource to the manager

```php
<?php

$assets->addResource(
    new Phalcon\Assets\Resource("css", "css/style.css")
);

```



public  **addInlineCode** ([Phalcon\Assets\Inline](Phalcon_Assets.md) $code)

Adds a raw inline code to the manager



public  **set** (*mixed* $id, [Phalcon\Assets\Collection](Phalcon_Assets.md) $collection)

Sets a collection in the Assets Manager

```php
<?php

$assets->set("js", $collection);

```



public  **get** (*mixed* $id)

Returns a collection by its id.

```php
<?php

$scripts = $assets->get("js");

```



public  **getCss** ()

Returns the CSS collection of assets



public  **getJs** ()

Returns the CSS collection of assets



public  **collection** (*mixed* $name)

Creates/Returns a collection of resources



public  **output** ([Phalcon\Assets\Collection](Phalcon_Assets.md) $collection, *callback* $callback, *string* $type)

Traverses a collection calling the callback to generate its HTML



public  **outputInline** ([Phalcon\Assets\Collection](Phalcon_Assets.md) $collection, *string* $type)

Traverses a collection and generate its HTML



public  **outputCss** ([*string* $collectionName])

Prints the HTML for CSS resources



public  **outputInlineCss** ([*string* $collectionName])

Prints the HTML for inline CSS



public  **outputJs** ([*string* $collectionName])

Prints the HTML for JS resources



public  **outputInlineJs** ([*string* $collectionName])

Prints the HTML for inline JS



public  **getCollections** ()

Returns existing collections in the manager



public  **exists** (*mixed* $id)

Returns true or false if collection exists.

```php
<?php

if ($assets->exists("jsHeader")) {
    // \Phalcon\Assets\Collection
    $collection = $assets->get("jsHeader");
}

```




<hr>

# Class **Phalcon\Assets\Resource**

*implements* [Phalcon\Assets\ResourceInterface](Phalcon_Assets.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/resource.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents an asset resource

```php
<?php

$resource = new \Phalcon\Assets\Resource("js", "javascripts/jquery.js");

```


## Methods
public  **getType** ()





public  **getPath** ()





public  **getLocal** ()





public  **getFilter** ()





public  **getAttributes** ()





public  **getSourcePath** ()

...


public  **getTargetPath** ()

...


public  **getTargetUri** ()

...


public  **__construct** (*string* $type, *string* $path, [*boolean* $local], [*boolean* $filter], [*array* $attributes])

Phalcon\Assets\Resource constructor



public  **setType** (*mixed* $type)

Sets the resource's type



public  **setPath** (*mixed* $path)

Sets the resource's path



public  **setLocal** (*mixed* $local)

Sets if the resource is local or external



public  **setFilter** (*mixed* $filter)

Sets if the resource must be filtered or not



public  **setAttributes** (*array* $attributes)

Sets extra HTML attributes



public  **setTargetUri** (*mixed* $targetUri)

Sets a target uri for the generated HTML



public  **setSourcePath** (*mixed* $sourcePath)

Sets the resource's source path



public  **setTargetPath** (*mixed* $targetPath)

Sets the resource's target path



public  **getContent** ([*mixed* $basePath])

Returns the content of the resource as an string
Optionally a base path where the resource is located can be set



public  **getRealTargetUri** ()

Returns the real target uri for the generated HTML



public  **getRealSourcePath** ([*mixed* $basePath])

Returns the complete location where the resource is located



public  **getRealTargetPath** ([*mixed* $basePath])

Returns the complete location where the resource must be written



public  **getResourceKey** ()

Gets the resource's key.




<hr>

# Class **Phalcon\Assets\Resource\Css**

*extends* class [Phalcon\Assets\Resource](Phalcon_Assets.md)

*implements* [Phalcon\Assets\ResourceInterface](Phalcon_Assets.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/resource/css.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents CSS resources


## Methods
public  **__construct** (*string* $path, [*boolean* $local], [*boolean* $filter], [*array* $attributes])





public  **getType** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)





public  **getPath** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)





public  **getLocal** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)





public  **getFilter** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)





public  **getAttributes** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)





public  **getSourcePath** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

...


public  **getTargetPath** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

...


public  **getTargetUri** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

...


public  **setType** (*mixed* $type) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets the resource's type



public  **setPath** (*mixed* $path) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets the resource's path



public  **setLocal** (*mixed* $local) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets if the resource is local or external



public  **setFilter** (*mixed* $filter) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets if the resource must be filtered or not



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets extra HTML attributes



public  **setTargetUri** (*mixed* $targetUri) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets a target uri for the generated HTML



public  **setSourcePath** (*mixed* $sourcePath) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets the resource's source path



public  **setTargetPath** (*mixed* $targetPath) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets the resource's target path



public  **getContent** ([*mixed* $basePath]) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Returns the content of the resource as an string
Optionally a base path where the resource is located can be set



public  **getRealTargetUri** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Returns the real target uri for the generated HTML



public  **getRealSourcePath** ([*mixed* $basePath]) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Returns the complete location where the resource is located



public  **getRealTargetPath** ([*mixed* $basePath]) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Returns the complete location where the resource must be written



public  **getResourceKey** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Gets the resource's key.




<hr>

# Class **Phalcon\Assets\Resource\Js**

*extends* class [Phalcon\Assets\Resource](Phalcon_Assets.md)

*implements* [Phalcon\Assets\ResourceInterface](Phalcon_Assets.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/resource/js.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents Javascript resources


## Methods
public  **__construct** (*string* $path, [*boolean* $local], [*boolean* $filter], [*array* $attributes])





public  **getType** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)





public  **getPath** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)





public  **getLocal** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)





public  **getFilter** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)





public  **getAttributes** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)





public  **getSourcePath** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

...


public  **getTargetPath** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

...


public  **getTargetUri** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

...


public  **setType** (*mixed* $type) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets the resource's type



public  **setPath** (*mixed* $path) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets the resource's path



public  **setLocal** (*mixed* $local) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets if the resource is local or external



public  **setFilter** (*mixed* $filter) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets if the resource must be filtered or not



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets extra HTML attributes



public  **setTargetUri** (*mixed* $targetUri) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets a target uri for the generated HTML



public  **setSourcePath** (*mixed* $sourcePath) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets the resource's source path



public  **setTargetPath** (*mixed* $targetPath) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Sets the resource's target path



public  **getContent** ([*mixed* $basePath]) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Returns the content of the resource as an string
Optionally a base path where the resource is located can be set



public  **getRealTargetUri** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Returns the real target uri for the generated HTML



public  **getRealSourcePath** ([*mixed* $basePath]) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Returns the complete location where the resource is located



public  **getRealTargetPath** ([*mixed* $basePath]) inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Returns the complete location where the resource must be written



public  **getResourceKey** () inherited from [Phalcon\Assets\Resource](Phalcon_Assets.md)

Gets the resource's key.




<hr>

# Interface **Phalcon\Assets\ResourceInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/assets/resourceinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setType** (*mixed* $type)

...


abstract public  **getType** ()

...


abstract public  **setFilter** (*mixed* $filter)

...


abstract public  **getFilter** ()

...


abstract public  **setAttributes** (*array* $attributes)

...


abstract public  **getAttributes** ()

...


abstract public  **getResourceKey** ()

...
