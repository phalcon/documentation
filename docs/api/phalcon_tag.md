---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Tag

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Tag.zep){ .src-btn }

Phalcon\Tag is designed to simplify building of HTML tags.
It provides a set of helpers to generate HTML in a dynamic way.
This component is a class that you can extend to add more helpers.

<div class="api-tree" markdown>

- **`Phalcon\Tag`**

</div>

__Uses__ `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Link\Link` · `Phalcon\Html\Link\Serializer\Header` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Support\Helper\Str\Friendly` · `Phalcon\Tag\Exception` · `Phalcon\Tag\Select`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#tag-appendtitle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">appendTitle( mixed $title )</code>
<span class="desc">Appends a text to current document title</span>
</a>
<a class="api-item" href="#tag-checkfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">checkField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;check&quot;] tag</span>
</a>
<a class="api-item" href="#tag-colorfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">colorField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;color&quot;] tag</span>
</a>
<a class="api-item" href="#tag-datefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dateField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;date&quot;] tag</span>
</a>
<a class="api-item" href="#tag-datetimefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dateTimeField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;datetime&quot;] tag</span>
</a>
<a class="api-item" href="#tag-datetimelocalfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">dateTimeLocalField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;datetime-local&quot;] tag</span>
</a>
<a class="api-item" href="#tag-displayto">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">displayTo(
    string $id,
    mixed $value
)</code>
<span class="desc">Alias of Phalcon\Tag::setDefault()</span>
</a>
<a class="api-item" href="#tag-emailfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">emailField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;email&quot;] tag</span>
</a>
<a class="api-item" href="#tag-endform">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">endForm()</code>
<span class="desc">Builds a HTML close FORM tag</span>
</a>
<a class="api-item" href="#tag-filefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">fileField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;file&quot;] tag</span>
</a>
<a class="api-item" href="#tag-formlegacy">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">formLegacy( mixed $parameters )</code>
<span class="desc">Builds a HTML FORM tag</span>
</a>
<a class="api-item" href="#tag-friendlytitle">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">friendlyTitle(
    string $text,
    string $separator = &quot;-&quot;,
    bool $lowercase = true,
    mixed $replace = null
)</code>
<span class="desc">Converts texts into URL-friendly titles</span>
</a>
<a class="api-item" href="#tag-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig">getDI()</code>
<span class="desc">Internally gets the request dispatcher</span>
</a>
<a class="api-item" href="#tag-getdoctype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getDocType()</code>
<span class="desc">Get the document type declaration of content</span>
</a>
<a class="api-item" href="#tag-getescaper">
<code class="vis vis-public">public</code>
<code class="ret">EscaperInterface|null</code>
<code class="sig">getEscaper( array $params )</code>
<span class="desc">Obtains the &#039;escaper&#039; service if required</span>
</a>
<a class="api-item" href="#tag-getescaperservice">
<code class="vis vis-public">public</code>
<code class="ret">EscaperInterface</code>
<code class="sig">getEscaperService()</code>
<span class="desc">Returns an Escaper service from the default DI</span>
</a>
<a class="api-item" href="#tag-gettitle">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getTitle(
    bool $prepend = true,
    bool $append = true
)</code>
<span class="desc">Gets the current document title. The title will be automatically escaped.</span>
</a>
<a class="api-item" href="#tag-gettitleseparator">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getTitleSeparator()</code>
<span class="desc">Gets the current document title separator</span>
</a>
<a class="api-item" href="#tag-geturlservice">
<code class="vis vis-public">public</code>
<code class="ret">UrlInterface</code>
<code class="sig">getUrlService()</code>
<span class="desc">Returns a URL service from the default DI</span>
</a>
<a class="api-item" href="#tag-getvalue">
<code class="vis vis-public">public</code>
<code class="sig">getValue(
    mixed $name,
    array $params = []
)</code>
<span class="desc">Every helper calls this function to check whether a component has a</span>
</a>
<a class="api-item" href="#tag-hasvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">hasValue( mixed $name )</code>
<span class="desc">Check if a helper has a default value set using Phalcon\Tag::setDefault()</span>
</a>
<a class="api-item" href="#tag-hiddenfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">hiddenField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;hidden&quot;] tag</span>
</a>
<a class="api-item" href="#tag-image">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">image(
    mixed $parameters = null,
    bool $local = true
)</code>
<span class="desc">Builds HTML IMG tags</span>
</a>
<a class="api-item" href="#tag-imageinput">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">imageInput( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;image&quot;] tag</span>
</a>
<a class="api-item" href="#tag-javascriptinclude">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">javascriptInclude(
    mixed $parameters = null,
    bool $local = true
)</code>
<span class="desc">Builds a SCRIPT[type=&quot;javascript&quot;] tag</span>
</a>
<a class="api-item" href="#tag-linkto">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">linkTo(
    mixed $parameters,
    mixed $text = null,
    mixed $local = true
)</code>
<span class="desc">Builds a HTML A tag using framework conventions</span>
</a>
<a class="api-item" href="#tag-monthfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">monthField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;month&quot;] tag</span>
</a>
<a class="api-item" href="#tag-numericfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">numericField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;number&quot;] tag</span>
</a>
<a class="api-item" href="#tag-passwordfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">passwordField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;password&quot;] tag</span>
</a>
<a class="api-item" href="#tag-preload">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">preload( mixed $parameters )</code>
<span class="desc">Parses the preload element passed and sets the necessary link headers</span>
</a>
<a class="api-item" href="#tag-prependtitle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">prependTitle( mixed $title )</code>
<span class="desc">Prepends a text to current document title</span>
</a>
<a class="api-item" href="#tag-radiofield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">radioField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;radio&quot;] tag</span>
</a>
<a class="api-item" href="#tag-rangefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">rangeField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;range&quot;] tag</span>
</a>
<a class="api-item" href="#tag-renderattributes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">renderAttributes(
    string $code,
    array $attributes
)</code>
<span class="desc">Renders parameters keeping order in their HTML attributes</span>
</a>
<a class="api-item" href="#tag-rendertitle">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">renderTitle(
    bool $prepend = true,
    bool $append = true
)</code>
<span class="desc">Renders the title with title tags. The title is automatically escaped</span>
</a>
<a class="api-item" href="#tag-resetinput">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">resetInput()</code>
<span class="desc">Resets the request and internal values to avoid those fields will have</span>
</a>
<a class="api-item" href="#tag-searchfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">searchField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;search&quot;] tag</span>
</a>
<a class="api-item" href="#tag-select">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">select(
    mixed $parameters,
    mixed $data = null
)</code>
<span class="desc">Builds a HTML SELECT tag using a Phalcon\Mvc\Model resultset as options</span>
</a>
<a class="api-item" href="#tag-selectstatic">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">selectStatic(
    mixed $parameters,
    mixed $data = null
)</code>
<span class="desc">Builds a HTML SELECT tag using a PHP array for options</span>
</a>
<a class="api-item" href="#tag-setautoescape">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setAutoescape( bool $autoescape )</code>
<span class="desc">Set autoescape mode in generated HTML</span>
</a>
<a class="api-item" href="#tag-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDI( DiInterface $container )</code>
<span class="desc">Sets the dependency injector container.</span>
</a>
<a class="api-item" href="#tag-setdefault">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefault(
    string $id,
    mixed $value
)</code>
<span class="desc">Assigns default values to generated tags by helpers</span>
</a>
<a class="api-item" href="#tag-setdefaults">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefaults(
    array $values,
    bool $merge = false
)</code>
<span class="desc">Assigns default values to generated tags by helpers</span>
</a>
<a class="api-item" href="#tag-setdoctype">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDocType( int $doctype )</code>
<span class="desc">Set the document type of content</span>
</a>
<a class="api-item" href="#tag-settitle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setTitle( string $title )</code>
<span class="desc">Set the title of view content</span>
</a>
<a class="api-item" href="#tag-settitleseparator">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setTitleSeparator( string $titleSeparator )</code>
<span class="desc">Set the title separator of view content</span>
</a>
<a class="api-item" href="#tag-stylesheetlink">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">stylesheetLink(
    mixed $parameters = null,
    bool $local = true
)</code>
<span class="desc">Builds a LINK[rel=&quot;stylesheet&quot;] tag</span>
</a>
<a class="api-item" href="#tag-submitbutton">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">submitButton( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;submit&quot;] tag</span>
</a>
<a class="api-item" href="#tag-taghtml">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">tagHtml(
    string $tagName,
    mixed $parameters = null,
    bool $selfClose = false,
    bool $onlyStart = false,
    bool $useEol = false
)</code>
<span class="desc">Builds a HTML tag</span>
</a>
<a class="api-item" href="#tag-taghtmlclose">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">tagHtmlClose(
    string $tagName,
    bool $useEol = false
)</code>
<span class="desc">Builds a HTML tag closing tag</span>
</a>
<a class="api-item" href="#tag-telfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">telField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;tel&quot;] tag</span>
</a>
<a class="api-item" href="#tag-textarea">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">textArea( mixed $parameters )</code>
<span class="desc">Builds a HTML TEXTAREA tag</span>
</a>
<a class="api-item" href="#tag-textfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">textField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;text&quot;] tag</span>
</a>
<a class="api-item" href="#tag-timefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">timeField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;time&quot;] tag</span>
</a>
<a class="api-item" href="#tag-urlfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">urlField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;url&quot;] tag</span>
</a>
<a class="api-item" href="#tag-weekfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">weekField( mixed $parameters )</code>
<span class="desc">Builds a HTML input[type=&quot;week&quot;] tag</span>
</a>
<a class="api-item" href="#tag-inputfield">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">inputField(
    string $type,
    mixed $parameters,
    bool $asValue = false
)</code>
<span class="desc">Builds generic INPUT tags</span>
</a>
<a class="api-item" href="#tag-inputfieldchecked">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">inputFieldChecked(
    string $type,
    mixed $parameters
)</code>
<span class="desc">Builds INPUT tags that implements the checked attribute</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `HTML32 = 1` `int`

-   `HTML401_FRAMESET = 4` `int`

-   `HTML401_STRICT = 2` `int`

-   `HTML401_TRANSITIONAL = 3` `int`

-   `HTML5 = 5` `int`

-   `XHTML10_FRAMESET = 8` `int`

-   `XHTML10_STRICT = 6` `int`

-   `XHTML10_TRANSITIONAL = 7` `int`

-   `XHTML11 = 9` `int`

-   `XHTML20 = 10` `int`

-   `XHTML5 = 11` `int`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$autoEscape = true` `bool`

-   `protected`{ .vis-protected } `$container = null` `DiInterface|null`

    DI Container

-   `protected`{ .vis-protected } `$displayValues` `array`

    Pre-assigned values for components

-   `protected`{ .vis-protected } `$documentAppendTitle` `array`

-   `protected`{ .vis-protected } `$documentPrependTitle` `array`

-   `protected`{ .vis-protected } `$documentTitle = null` `string|null`

    HTML document title

-   `protected`{ .vis-protected } `$documentTitleSeparator = null` `string|null`

-   `protected`{ .vis-protected } `$documentType = 11` `int`

-   `protected`{ .vis-protected } `$escaperService = null` `EscaperInterface|null`

-   `protected`{ .vis-protected } `$urlService = null` `UrlInterface|null`

</div>

### Methods

<div class="api-group">Public · 56</div>

#### `appendTitle()` { #tag-appendtitle }

```php
public static function appendTitle( mixed $title ): void;
```

Appends a text to current document title

#### `checkField()` { #tag-checkfield }

```php
public static function checkField( mixed $parameters ): string;
```

Builds a HTML input[type="check"] tag

#### `colorField()` { #tag-colorfield }

```php
public static function colorField( mixed $parameters ): string;
```

Builds a HTML input[type="color"] tag

#### `dateField()` { #tag-datefield }

```php
public static function dateField( mixed $parameters ): string;
```

Builds a HTML input[type="date"] tag

#### `dateTimeField()` { #tag-datetimefield }

```php
public static function dateTimeField( mixed $parameters ): string;
```

Builds a HTML input[type="datetime"] tag

#### `dateTimeLocalField()` { #tag-datetimelocalfield }

```php
public static function dateTimeLocalField( mixed $parameters ): string;
```

Builds a HTML input[type="datetime-local"] tag

#### `displayTo()` { #tag-displayto }

```php
public static function displayTo(
    string $id,
    mixed $value
): void;
```

Alias of Phalcon\Tag::setDefault()

#### `emailField()` { #tag-emailfield }

```php
public static function emailField( mixed $parameters ): string;
```

Builds a HTML input[type="email"] tag

#### `endForm()` { #tag-endform }

```php
public static function endForm(): string;
```

Builds a HTML close FORM tag

#### `fileField()` { #tag-filefield }

```php
public static function fileField( mixed $parameters ): string;
```

Builds a HTML input[type="file"] tag

#### `formLegacy()` { #tag-formlegacy }

```php
public static function formLegacy( mixed $parameters ): string;
```

Builds a HTML FORM tag

#### `friendlyTitle()` { #tag-friendlytitle }

```php
public static function friendlyTitle(
    string $text,
    string $separator = "-",
    bool $lowercase = true,
    mixed $replace = null
): string;
```

Converts texts into URL-friendly titles

#### `getDI()` { #tag-getdi }

```php
public static function getDI(): DiInterface;
```

Internally gets the request dispatcher

#### `getDocType()` { #tag-getdoctype }

```php
public static function getDocType(): string;
```

Get the document type declaration of content

#### `getEscaper()` { #tag-getescaper }

```php
public static function getEscaper( array $params ): EscaperInterface|null;
```

Obtains the 'escaper' service if required

#### `getEscaperService()` { #tag-getescaperservice }

```php
public static function getEscaperService(): EscaperInterface;
```

Returns an Escaper service from the default DI

#### `getTitle()` { #tag-gettitle }

```php
public static function getTitle(
    bool $prepend = true,
    bool $append = true
): string;
```

Gets the current document title. The title will be automatically escaped.

#### `getTitleSeparator()` { #tag-gettitleseparator }

```php
public static function getTitleSeparator(): string;
```

Gets the current document title separator

#### `getUrlService()` { #tag-geturlservice }

```php
public static function getUrlService(): UrlInterface;
```

Returns a URL service from the default DI

#### `getValue()` { #tag-getvalue }

```php
public static function getValue(
    mixed $name,
    array $params = []
);
```

Every helper calls this function to check whether a component has a
predefined value using Phalcon\Tag::setDefault() or value from $_POST

#### `hasValue()` { #tag-hasvalue }

```php
public static function hasValue( mixed $name ): bool;
```

Check if a helper has a default value set using Phalcon\Tag::setDefault()
or value from $_POST

#### `hiddenField()` { #tag-hiddenfield }

```php
public static function hiddenField( mixed $parameters ): string;
```

Builds a HTML input[type="hidden"] tag

#### `image()` { #tag-image }

```php
public static function image(
    mixed $parameters = null,
    bool $local = true
): string;
```

Builds HTML IMG tags

#### `imageInput()` { #tag-imageinput }

```php
public static function imageInput( mixed $parameters ): string;
```

Builds a HTML input[type="image"] tag

#### `javascriptInclude()` { #tag-javascriptinclude }

```php
public static function javascriptInclude(
    mixed $parameters = null,
    bool $local = true
): string;
```

Builds a SCRIPT[type="javascript"] tag

#### `linkTo()` { #tag-linkto }

```php
public static function linkTo(
    mixed $parameters,
    mixed $text = null,
    mixed $local = true
): string;
```

Builds a HTML A tag using framework conventions

#### `monthField()` { #tag-monthfield }

```php
public static function monthField( mixed $parameters ): string;
```

Builds a HTML input[type="month"] tag

#### `numericField()` { #tag-numericfield }

```php
public static function numericField( mixed $parameters ): string;
```

Builds a HTML input[type="number"] tag

#### `passwordField()` { #tag-passwordfield }

```php
public static function passwordField( mixed $parameters ): string;
```

Builds a HTML input[type="password"] tag

#### `preload()` { #tag-preload }

```php
public static function preload( mixed $parameters ): string;
```

Parses the preload element passed and sets the necessary link headers

#### `prependTitle()` { #tag-prependtitle }

```php
public static function prependTitle( mixed $title ): void;
```

Prepends a text to current document title

#### `radioField()` { #tag-radiofield }

```php
public static function radioField( mixed $parameters ): string;
```

Builds a HTML input[type="radio"] tag

#### `rangeField()` { #tag-rangefield }

```php
public static function rangeField( mixed $parameters ): string;
```

Builds a HTML input[type="range"] tag

#### `renderAttributes()` { #tag-renderattributes }

```php
public static function renderAttributes(
    string $code,
    array $attributes
): string;
```

Renders parameters keeping order in their HTML attributes

#### `renderTitle()` { #tag-rendertitle }

```php
public static function renderTitle(
    bool $prepend = true,
    bool $append = true
): string;
```

Renders the title with title tags. The title is automatically escaped

#### `resetInput()` { #tag-resetinput }

```php
deprecated public static function resetInput(): void;
```

Resets the request and internal values to avoid those fields will have
any default value.

@deprecated Will be removed in 4.0.0

#### `searchField()` { #tag-searchfield }

```php
public static function searchField( mixed $parameters ): string;
```

Builds a HTML input[type="search"] tag

#### `select()` { #tag-select }

```php
public static function select(
    mixed $parameters,
    mixed $data = null
): string;
```

Builds a HTML SELECT tag using a Phalcon\Mvc\Model resultset as options

#### `selectStatic()` { #tag-selectstatic }

```php
public static function selectStatic(
    mixed $parameters,
    mixed $data = null
): string;
```

Builds a HTML SELECT tag using a PHP array for options

#### `setAutoescape()` { #tag-setautoescape }

```php
public static function setAutoescape( bool $autoescape ): void;
```

Set autoescape mode in generated HTML

#### `setDI()` { #tag-setdi }

```php
public static function setDI( DiInterface $container ): void;
```

Sets the dependency injector container.

#### `setDefault()` { #tag-setdefault }

```php
public static function setDefault(
    string $id,
    mixed $value
): void;
```

Assigns default values to generated tags by helpers

#### `setDefaults()` { #tag-setdefaults }

```php
public static function setDefaults(
    array $values,
    bool $merge = false
): void;
```

Assigns default values to generated tags by helpers

#### `setDocType()` { #tag-setdoctype }

```php
public static function setDocType( int $doctype ): void;
```

Set the document type of content

#### `setTitle()` { #tag-settitle }

```php
public static function setTitle( string $title ): void;
```

Set the title of view content

#### `setTitleSeparator()` { #tag-settitleseparator }

```php
public static function setTitleSeparator( string $titleSeparator ): void;
```

Set the title separator of view content

#### `stylesheetLink()` { #tag-stylesheetlink }

```php
public static function stylesheetLink(
    mixed $parameters = null,
    bool $local = true
): string;
```

Builds a LINK[rel="stylesheet"] tag

#### `submitButton()` { #tag-submitbutton }

```php
public static function submitButton( mixed $parameters ): string;
```

Builds a HTML input[type="submit"] tag

#### `tagHtml()` { #tag-taghtml }

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

#### `tagHtmlClose()` { #tag-taghtmlclose }

```php
public static function tagHtmlClose(
    string $tagName,
    bool $useEol = false
): string;
```

Builds a HTML tag closing tag

#### `telField()` { #tag-telfield }

```php
public static function telField( mixed $parameters ): string;
```

Builds a HTML input[type="tel"] tag

#### `textArea()` { #tag-textarea }

```php
public static function textArea( mixed $parameters ): string;
```

Builds a HTML TEXTAREA tag

@paraym array parameters = [
    'id' => '',
    'name' => '',
    'value' => '',
    'class' => ''
]

#### `textField()` { #tag-textfield }

```php
public static function textField( mixed $parameters ): string;
```

Builds a HTML input[type="text"] tag

#### `timeField()` { #tag-timefield }

```php
public static function timeField( mixed $parameters ): string;
```

Builds a HTML input[type="time"] tag

#### `urlField()` { #tag-urlfield }

```php
public static function urlField( mixed $parameters ): string;
```

Builds a HTML input[type="url"] tag

#### `weekField()` { #tag-weekfield }

```php
public static function weekField( mixed $parameters ): string;
```

Builds a HTML input[type="week"] tag

<div class="api-group">Protected · 2</div>

#### `inputField()` { #tag-inputfield }

```php
static final protected function inputField(
    string $type,
    mixed $parameters,
    bool $asValue = false
): string;
```

Builds generic INPUT tags

#### `inputFieldChecked()` { #tag-inputfieldchecked }

```php
static final protected function inputFieldChecked(
    string $type,
    mixed $parameters
): string;
```

Builds INPUT tags that implements the checked attribute


## Tag\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Tag/Exception.zep){ .src-btn }

Phalcon\Tag\Exception

Exceptions thrown in Phalcon\Tag will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Tag\Exception`**

</div>


## Tag\Select

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Tag/Select.zep){ .src-btn }

Phalcon\Tag\Select

Generates a SELECT HTML tag using a static array of values or a
Phalcon\Mvc\Model resultset

<div class="api-tree" markdown>

- **`Phalcon\Tag\Select`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Tag`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#tagselect-selectfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">selectField(
    mixed $parameters,
    mixed $data = null
)</code>
<span class="desc">Generates a SELECT tag</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `selectField()` { #tagselect-selectfield }

```php
public static function selectField(
    mixed $parameters,
    mixed $data = null
): string;
```

Generates a SELECT tag
