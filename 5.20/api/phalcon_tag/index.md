---
title: "Phalcon Tag"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Tag

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Tag

Class

Phalcon\Tag is designed to simplify building of HTML tags.
It provides a set of helpers to generate HTML in a dynamic way.
This component is a class that you can extend to add more helpers.

- **`Phalcon\Tag`**

`Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Link\Link` · `Phalcon\Html\Link\Serializer\Header` · `Phalcon\Mvc\Url` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Support\Helper\Str\Friendly` · `Phalcon\Tag\Exception` · `Phalcon\Tag\Select` · `Stringable`

### Method Summary

- `public appendTitle(mixed $title): void` — Appends a text to current document title

- `public checkField(mixed $parameters): string` — Builds an HTML input\[type="check"] tag

- `public colorField(mixed $parameters): string` — Builds an HTML input\[type="color"] tag

- `public dateField(mixed $parameters): string` — Builds an HTML input\[type="date"] tag

- `public dateTimeField(mixed $parameters): string` — Builds an HTML input\[type="datetime"] tag

- `public dateTimeLocalField(mixed $parameters): string` — Builds an HTML input\[type="datetime-local"] tag

- `public displayTo(string $id, mixed $value): void` — Alias of Phalcon\Tag::setDefault()

- `public emailField(mixed $parameters): string` — Builds an HTML input\[type="email"] tag

- `public endForm(): string` — Builds an HTML close FORM tag

- `public fileField(mixed $parameters): string` — Builds an HTML input\[type="file"] tag

- `public formLegacy(mixed $parameters): string` — Builds an HTML FORM tag

- `public friendlyTitle(string $text, string $separator = "-", bool $lowercase = true, mixed $replace = null): string` — Converts texts into URL-friendly titles

- `public getDI(): DiInterface` — Internally gets the request dispatcher

- `public getDocType(): string` — Get the document type declaration of content

- `public getEscaper(array $params): EscaperInterface|null` — Obtains the 'escaper' service if required

- `public getEscaperService(): EscaperInterface` — Returns an Escaper service from the default DI

- `public getTitle(bool $prepend = true, bool $append = true): string` — Gets the current document title. The title will be automatically escaped.

- `public getTitleSeparator(): string` — Gets the current document title separator

- `public getUrlService(): UrlInterface` — Returns a URL service from the default DI

- `public getValue(mixed $name, array $params = []): mixed` — Every helper calls this function to check whether a component has a

- `public hasValue(mixed $name): bool` — Check if a helper has a default value set using Phalcon\Tag::setDefault()

- `public hiddenField(mixed $parameters): string` — Builds a HTML input\[type="hidden"] tag

- `public image(mixed $parameters = null, bool $local = true): string` — Builds HTML IMG tags

- `public imageInput(mixed $parameters): string` — Builds an HTML input\[type="image"] tag

- `public javascriptInclude(mixed $parameters = null, bool $local = true): string` — Builds a SCRIPT\[type="javascript"] tag

- `public linkTo(mixed $parameters, mixed $text = null, mixed $local = true): string` — Builds an HTML A tag using framework conventions

- `public monthField(mixed $parameters): string` — Builds an HTML input\[type="month"] tag

- `public numericField(mixed $parameters): string` — Builds an HTML input\[type="number"] tag

- `public passwordField(mixed $parameters): string` — Builds a HTML input\[type="password"] tag

- `public preload(mixed $parameters): string` — Parses the preload element passed and sets the necessary link headers

- `public prependTitle(mixed $title): void` — Prepends a text to current document title

- `public radioField(mixed $parameters): string` — Builds an HTML input\[type="radio"] tag

- `public rangeField(mixed $parameters): string` — Builds an HTML input\[type="range"] tag

- `public renderAttributes(string $code, array $attributes): string` — Renders parameters keeping order in their HTML attributes

- `public renderTitle(bool $prepend = true, bool $append = true): string` — Renders the title with title tags. The title is automatically escaped

- `public resetInput(): void` — Resets the request and internal values to avoid those fields will have

- `public searchField(mixed $parameters): string` — Builds a HTML input\[type="search"] tag

- `public select(mixed $parameters, mixed $data = null): string` — Builds a HTML SELECT tag using a Phalcon\Mvc\Model resultset as options

- `public selectStatic(mixed $parameters, mixed $data = null): string` — Builds an HTML SELECT tag using a PHP array for options

- `public setAutoescape(bool $autoescape): void` — Set autoescape mode in generated HTML

- `public setDI(DiInterface $container): void` — Sets the dependency injector container.

- `public setDefault(string $id, mixed $value): void` — Assigns default values to generated tags by helpers

- `public setDefaults(array $values, bool $merge = false): void` — Assigns default values to generated tags by helpers

- `public setDocType(int $doctype): void` — Set the document type of content

- `public setTitle(string $title): void` — Set the title of view content

- `public setTitleSeparator(string $titleSeparator): void` — Set the title separator of view content

- `public stylesheetLink(mixed $parameters = null, bool $local = true): string` — Builds a LINK\[rel="stylesheet"] tag

- `public submitButton(mixed $parameters): string` — Builds an HTML input\[type="submit"] tag

- `public tagHtml(string $tagName, mixed $parameters = null, bool $selfClose = false, bool $onlyStart = false, bool $useEol = false): string` — Builds a HTML tag

- `public tagHtmlClose(string $tagName, bool $useEol = false): string` — Builds a HTML tag closing tag

- `public telField(mixed $parameters): string` — Builds an HTML input\[type="tel"] tag

- `public textArea(mixed $parameters): string` — Builds an HTML TEXTAREA tag

- `public textField(mixed $parameters): string` — Builds an HTML input\[type="text"] tag

- `public timeField(mixed $parameters): string` — Builds an HTML input\[type="time"] tag

- `public urlField(mixed $parameters): string` — Builds an HTML input\[type="url"] tag

- `public weekField(mixed $parameters): string` — Builds an HTML input\[type="week"] tag

- `protected getStaticUrl(mixed $uri): string` — Resolves a static (asset) URL through the `url` service.

- `protected inputField(string $type, mixed $parameters, bool $asValue = false): string` — Builds generic INPUT tags

- `protected inputFieldChecked(string $type, mixed $parameters): string` — Builds INPUT tags that implements the checked attribute

- `protected toStringValue(mixed $value): string` — Reduces an arbitrary helper value to the string a tag attribute, id or

### Constants

- `const int HTML32 = 1`

- `const int HTML401_FRAMESET = 4`

- `const int HTML401_STRICT = 2`

- `const int HTML401_TRANSITIONAL = 3`

- `const int HTML5 = 5`

- `const int XHTML10_FRAMESET = 8`

- `const int XHTML10_STRICT = 6`

- `const int XHTML10_TRANSITIONAL = 7`

- `const int XHTML11 = 9`

- `const int XHTML20 = 10`

- `const int XHTML5 = 11`

### Properties

- `protected bool $autoEscape = true`

- `protected DiInterface|null $container = null`

- `protected array $displayValues = []`

- `protected array $documentAppendTitle = []`

- `protected array $documentPrependTitle = []`

- `protected string|null $documentTitle = null`

- `protected string|null $documentTitleSeparator = null`

- `protected int $documentType = 11`

- `protected EscaperInterface|null $escaperService = null`

- `protected UrlInterface|null $urlService = null`

### Methods

<h4 id="tag-appendtitle"><code>appendTitle()</code></h4>

```php
public static function appendTitle( mixed $title ): void;
```

Appends a text to current document title

<h4 id="tag-checkfield"><code>checkField()</code></h4>

```php
public static function checkField( mixed $parameters ): string;
```

Builds an HTML input[type="check"] tag

<h4 id="tag-colorfield"><code>colorField()</code></h4>

```php
public static function colorField( mixed $parameters ): string;
```

Builds an HTML input[type="color"] tag

<h4 id="tag-datefield"><code>dateField()</code></h4>

```php
public static function dateField( mixed $parameters ): string;
```

Builds an HTML input[type="date"] tag

<h4 id="tag-datetimefield"><code>dateTimeField()</code></h4>

```php
public static function dateTimeField( mixed $parameters ): string;
```

Builds an HTML input[type="datetime"] tag

<h4 id="tag-datetimelocalfield"><code>dateTimeLocalField()</code></h4>

```php
public static function dateTimeLocalField( mixed $parameters ): string;
```

Builds an HTML input[type="datetime-local"] tag

<h4 id="tag-displayto"><code>displayTo()</code></h4>

```php
public static function displayTo(
    string $id,
    mixed $value
): void;
```

Alias of Phalcon\Tag::setDefault()

<h4 id="tag-emailfield"><code>emailField()</code></h4>

```php
public static function emailField( mixed $parameters ): string;
```

Builds an HTML input[type="email"] tag

<h4 id="tag-endform"><code>endForm()</code></h4>

```php
public static function endForm(): string;
```

Builds an HTML close FORM tag

<h4 id="tag-filefield"><code>fileField()</code></h4>

```php
public static function fileField( mixed $parameters ): string;
```

Builds an HTML input[type="file"] tag

<h4 id="tag-formlegacy"><code>formLegacy()</code></h4>

```php
public static function formLegacy( mixed $parameters ): string;
```

Builds an HTML FORM tag

<h4 id="tag-friendlytitle"><code>friendlyTitle()</code></h4>

```php
public static function friendlyTitle(
    string $text,
    string $separator = "-",
    bool $lowercase = true,
    mixed $replace = null
): string;
```

Converts texts into URL-friendly titles

<h4 id="tag-getdi"><code>getDI()</code></h4>

```php
public static function getDI(): DiInterface;
```

Internally gets the request dispatcher

<h4 id="tag-getdoctype"><code>getDocType()</code></h4>

```php
public static function getDocType(): string;
```

Get the document type declaration of content

<h4 id="tag-getescaper"><code>getEscaper()</code></h4>

```php
public static function getEscaper( array $params ): EscaperInterface|null;
```

Obtains the 'escaper' service if required

<h4 id="tag-getescaperservice"><code>getEscaperService()</code></h4>

```php
public static function getEscaperService(): EscaperInterface;
```

Returns an Escaper service from the default DI

<h4 id="tag-gettitle"><code>getTitle()</code></h4>

```php
public static function getTitle(
    bool $prepend = true,
    bool $append = true
): string;
```

Gets the current document title. The title will be automatically escaped.

<h4 id="tag-gettitleseparator"><code>getTitleSeparator()</code></h4>

```php
public static function getTitleSeparator(): string;
```

Gets the current document title separator

<h4 id="tag-geturlservice"><code>getUrlService()</code></h4>

```php
public static function getUrlService(): UrlInterface;
```

Returns a URL service from the default DI

<h4 id="tag-getvalue"><code>getValue()</code></h4>

```php
public static function getValue(
    mixed $name,
    array $params = []
): mixed;
```

Every helper calls this function to check whether a component has a
predefined value using Phalcon\Tag::setDefault() or value from $_POST

<h4 id="tag-hasvalue"><code>hasValue()</code></h4>

```php
public static function hasValue( mixed $name ): bool;
```

Check if a helper has a default value set using Phalcon\Tag::setDefault()
or value from $_POST

<h4 id="tag-hiddenfield"><code>hiddenField()</code></h4>

```php
public static function hiddenField( mixed $parameters ): string;
```

Builds a HTML input[type="hidden"] tag

<h4 id="tag-image"><code>image()</code></h4>

```php
public static function image(
    mixed $parameters = null,
    bool $local = true
): string;
```

Builds HTML IMG tags

<h4 id="tag-imageinput"><code>imageInput()</code></h4>

```php
public static function imageInput( mixed $parameters ): string;
```

Builds an HTML input[type="image"] tag

<h4 id="tag-javascriptinclude"><code>javascriptInclude()</code></h4>

```php
public static function javascriptInclude(
    mixed $parameters = null,
    bool $local = true
): string;
```

Builds a SCRIPT[type="javascript"] tag

<h4 id="tag-linkto"><code>linkTo()</code></h4>

```php
public static function linkTo(
    mixed $parameters,
    mixed $text = null,
    mixed $local = true
): string;
```

Builds an HTML A tag using framework conventions

<h4 id="tag-monthfield"><code>monthField()</code></h4>

```php
public static function monthField( mixed $parameters ): string;
```

Builds an HTML input[type="month"] tag

<h4 id="tag-numericfield"><code>numericField()</code></h4>

```php
public static function numericField( mixed $parameters ): string;
```

Builds an HTML input[type="number"] tag

<h4 id="tag-passwordfield"><code>passwordField()</code></h4>

```php
public static function passwordField( mixed $parameters ): string;
```

Builds a HTML input[type="password"] tag

<h4 id="tag-preload"><code>preload()</code></h4>

```php
public static function preload( mixed $parameters ): string;
```

Parses the preload element passed and sets the necessary link headers

<h4 id="tag-prependtitle"><code>prependTitle()</code></h4>

```php
public static function prependTitle( mixed $title ): void;
```

Prepends a text to current document title

<h4 id="tag-radiofield"><code>radioField()</code></h4>

```php
public static function radioField( mixed $parameters ): string;
```

Builds an HTML input[type="radio"] tag

<h4 id="tag-rangefield"><code>rangeField()</code></h4>

```php
public static function rangeField( mixed $parameters ): string;
```

Builds an HTML input[type="range"] tag

<h4 id="tag-renderattributes"><code>renderAttributes()</code></h4>

```php
public static function renderAttributes(
    string $code,
    array $attributes
): string;
```

Renders parameters keeping order in their HTML attributes

<h4 id="tag-rendertitle"><code>renderTitle()</code></h4>

```php
public static function renderTitle(
    bool $prepend = true,
    bool $append = true
): string;
```

Renders the title with title tags. The title is automatically escaped

<h4 id="tag-resetinput"><code>resetInput()</code></h4>

```php
deprecated public static function resetInput(): void;
```

Resets the request and internal values to avoid those fields will have
any default value.

<h4 id="tag-searchfield"><code>searchField()</code></h4>

```php
public static function searchField( mixed $parameters ): string;
```

Builds a HTML input[type="search"] tag

<h4 id="tag-select"><code>select()</code></h4>

```php
public static function select(
    mixed $parameters,
    mixed $data = null
): string;
```

Builds a HTML SELECT tag using a Phalcon\Mvc\Model resultset as options

<h4 id="tag-selectstatic"><code>selectStatic()</code></h4>

```php
public static function selectStatic(
    mixed $parameters,
    mixed $data = null
): string;
```

Builds an HTML SELECT tag using a PHP array for options

<h4 id="tag-setautoescape"><code>setAutoescape()</code></h4>

```php
public static function setAutoescape( bool $autoescape ): void;
```

Set autoescape mode in generated HTML

<h4 id="tag-setdi"><code>setDI()</code></h4>

```php
public static function setDI( DiInterface $container ): void;
```

Sets the dependency injector container.

<h4 id="tag-setdefault"><code>setDefault()</code></h4>

```php
public static function setDefault(
    string $id,
    mixed $value
): void;
```

Assigns default values to generated tags by helpers

<h4 id="tag-setdefaults"><code>setDefaults()</code></h4>

```php
public static function setDefaults(
    array $values,
    bool $merge = false
): void;
```

Assigns default values to generated tags by helpers

<h4 id="tag-setdoctype"><code>setDocType()</code></h4>

```php
public static function setDocType( int $doctype ): void;
```

Set the document type of content

<h4 id="tag-settitle"><code>setTitle()</code></h4>

```php
public static function setTitle( string $title ): void;
```

Set the title of view content

<h4 id="tag-settitleseparator"><code>setTitleSeparator()</code></h4>

```php
public static function setTitleSeparator( string $titleSeparator ): void;
```

Set the title separator of view content

<h4 id="tag-stylesheetlink"><code>stylesheetLink()</code></h4>

```php
public static function stylesheetLink(
    mixed $parameters = null,
    bool $local = true
): string;
```

Builds a LINK[rel="stylesheet"] tag

<h4 id="tag-submitbutton"><code>submitButton()</code></h4>

```php
public static function submitButton( mixed $parameters ): string;
```

Builds an HTML input[type="submit"] tag

<h4 id="tag-taghtml"><code>tagHtml()</code></h4>

```php
public static function tagHtml(
    string $tagName,
    mixed $parameters = null,
    bool $selfClose = false,
    bool $onlyStart = false,
    bool $useEol = false
): string;
```

Builds a HTML tag

<h4 id="tag-taghtmlclose"><code>tagHtmlClose()</code></h4>

```php
public static function tagHtmlClose(
    string $tagName,
    bool $useEol = false
): string;
```

Builds a HTML tag closing tag

<h4 id="tag-telfield"><code>telField()</code></h4>

```php
public static function telField( mixed $parameters ): string;
```

Builds an HTML input[type="tel"] tag

<h4 id="tag-textarea"><code>textArea()</code></h4>

```php
public static function textArea( mixed $parameters ): string;
```

Builds an HTML TEXTAREA tag

<h4 id="tag-textfield"><code>textField()</code></h4>

```php
public static function textField( mixed $parameters ): string;
```

Builds an HTML input[type="text"] tag

<h4 id="tag-timefield"><code>timeField()</code></h4>

```php
public static function timeField( mixed $parameters ): string;
```

Builds an HTML input[type="time"] tag

<h4 id="tag-urlfield"><code>urlField()</code></h4>

```php
public static function urlField( mixed $parameters ): string;
```

Builds an HTML input[type="url"] tag

<h4 id="tag-weekfield"><code>weekField()</code></h4>

```php
public static function weekField( mixed $parameters ): string;
```

Builds an HTML input[type="week"] tag

<h4 id="tag-getstaticurl"><code>getStaticUrl()</code></h4>

```php
final protected static function getStaticUrl( mixed $uri ): string;
```

Resolves a static (asset) URL through the `url` service.

`getStatic()` lives on Phalcon\Mvc\Url but is absent from
Phalcon\Mvc\Url\UrlInterface, which is what getUrlService() is typed
to return. A service that does not carry it falls back to `get()`
rather than aborting the helper.

<h4 id="tag-inputfield"><code>inputField()</code></h4>

```php
final protected static function inputField(
    string $type,
    mixed $parameters,
    bool $asValue = false
): string;
```

Builds generic INPUT tags

<h4 id="tag-inputfieldchecked"><code>inputFieldChecked()</code></h4>

```php
final protected static function inputFieldChecked(
    string $type,
    mixed $parameters
): string;
```

Builds INPUT tags that implements the checked attribute

<h4 id="tag-tostringvalue"><code>toStringValue()</code></h4>

```php
final protected static function toStringValue( mixed $value ): string;
```

Reduces an arbitrary helper value to the string a tag attribute, id or
URI needs. Parameter bags are user supplied, so a value that cannot be
expressed as a string - an array, an object without `__toString()` -
reads back as an empty string rather than aborting the helper.


## Tag\Exception

Class

Phalcon\Tag\Exception

Exceptions thrown in Phalcon\Tag will use this class

- `\Exception`
  - **`Phalcon\Tag\Exception`**


## Tag\Select

Abstract

Phalcon\Tag\Select

Generates a SELECT HTML tag using a static array of values or a
Phalcon\Mvc\Model resultset

- **`Phalcon\Tag\Select`**

`Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Tag` · `Stringable`

### Method Summary

- `public selectField(mixed $parameters, mixed $data = null): string` — Generates a SELECT tag

- `protected echoOption(string $value, bool $selected = false): string`

- `protected toStringValue(mixed $value): string` — Reduces an arbitrary option value to the string the markup needs.

### Methods

<h4 id="tagselect-selectfield"><code>selectField()</code></h4>

```php
public static function selectField(
    mixed $parameters,
    mixed $data = null
): string;
```

Generates a SELECT tag

<h4 id="tagselect-echooption"><code>echoOption()</code></h4>

```php
protected static function echoOption(
    string $value,
    bool $selected = false
): string;
```

<h4 id="tagselect-tostringvalue"><code>toStringValue()</code></h4>

```php
protected static function toStringValue( mixed $value ): string;
```

Reduces an arbitrary option value to the string the markup needs.
Option data is user supplied, so anything that cannot be expressed as
a string reads back as an empty string rather than aborting the tag.

Source: https://docs.phalcon.io/5.20/api/phalcon_tag/index.mdx
