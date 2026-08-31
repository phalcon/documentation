---
title: "Phalcon Html"
version: "5.13"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Html

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Html\Attributes 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes.zep)

-   __Namespace__

    - `Phalcon\Html`

-   __Uses__

    - `Phalcon\Html\Attributes\RenderInterface`
    - `Phalcon\Support\Collection`

-   __Extends__

    `Collection`

-   __Implements__

    - `RenderInterface`

This class helps to work with HTML Attributes

### Methods

```php
public function __toString(): string;
```
Alias of the render method

```php
public function render(): string;
```
Render attributes as HTML attributes

```php
protected function renderAttributes( array $attributes ): string;
```
@todo remove this when we refactor forms. Maybe remove this class? Put it into traits

## Html\Attributes\AttributesInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes/AttributesInterface.zep)

-   __Namespace__

    - `Phalcon\Html\Attributes`

-   __Uses__

    - `Phalcon\Html\Attributes`

-   __Extends__

-   __Implements__

* Phalcon\Html\Attributes\AttributesInterface
*
* Interface Phalcon\Html\Attributes\AttributesInterface
*/

### Methods

```php
public function getAttributes(): Attributes;
```
Get Attributes

```php
public function setAttributes( Attributes $attributes ): AttributesInterface;
```
Set Attributes

## Html\Attributes\RenderInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes/RenderInterface.zep)

-   __Namespace__

    - `Phalcon\Html\Attributes`

-   __Uses__

-   __Extends__

-   __Implements__

* Phalcon\Html\Attributes\RenderInterface
*
* Interface Phalcon\Html\Attributes\RenderInterface
*/

### Methods

```php
public function render(): string;
```
Generate a string represetation

## Html\Breadcrumbs 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Breadcrumbs.zep)

-   __Namespace__

    - `Phalcon\Html`

-   __Uses__

    - `Phalcon\Di\DiInterface`

-   __Extends__

-   __Implements__

Phalcon\Html\Breadcrumbs

This component offers an easy way to create breadcrumbs for your application.
The resulting HTML when calling `render()` will have each breadcrumb enclosed
in `<dt>` tags, while the whole string is enclosed in `<dl>` tags.

@deprecated Will be removed in future version
Use \{@see Phalcon\Html\Helper\Breadcrumbs\} instead.

### Properties
```php
/**
 * Keeps all the breadcrumbs
 *
 * @var array
 */
private $elements;

/**
 * Crumb separator
 *
 * @var string
 */
private $separator =  / ;

/**
 * The HTML template to use to render the breadcrumbs.
 *
 * @var string
 */
private $template = <dt><a href=\"%link%\">%label%</a></dt>;

```

### Methods

```php
public function add( string $label, string $link = string ): Breadcrumbs;
```
Adds a new crumb.

```php
// Adding a crumb with a link
$breadcrumbs->add("Home", "/");

// Adding a crumb without a link (normally the last one)
$breadcrumbs->add("Users");
```

```php
public function clear(): void;
```
Clears the crumbs

```php
$breadcrumbs->clear()
```

```php
public function getSeparator(): string;
```
Crumb separator

```php
public function remove( string $link ): void;
```
Removes crumb by url.

```php
$breadcrumbs->remove("/admin/user/create");

// remove a crumb without an url (last link)
$breadcrumbs->remove();
```

```php
public function render(): string;
```
Renders and outputs breadcrumbs based on previously set template.

```php
echo $breadcrumbs->render();
```

```php
public function setSeparator( string $separator ): Breadcrumbs;
```

```php
public function toArray(): array;
```
Returns the internal breadcrumbs array

## Html\Escaper 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper.zep)

-   __Namespace__

    - `Phalcon\Html`

-   __Uses__

    - `Phalcon\Html\Escaper\AttributeEscaper`
    - `Phalcon\Html\Escaper\CssEscaper`
    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Escaper\HtmlEscaper`
    - `Phalcon\Html\Escaper\JsEscaper`
    - `Phalcon\Html\Escaper\UrlEscaper`

-   __Extends__

-   __Implements__

    - `EscaperInterface`

Phalcon\Html\Escaper

Escapes different kinds of text securing them. By using this component you
may prevent XSS attacks.

The class is a façade over five per-context escapers (`HtmlEscaper`,
`AttributeEscaper`, `CssEscaper`, `JsEscaper`, `UrlEscaper`). Each can be
retrieved via the matching `getXxxEscaper()` accessor and substituted via
the matching `setXxxEscaper()` setter. The legacy `setEncoding`,
`setFlags`, and `setDoubleEncode` continue to fan out to all sub-objects
so existing code keeps working.

This component only works with UTF-8. The PREG extension needs to be compiled
with UTF-8 support.

```php
$escaper = new \Phalcon\Html\Escaper();

$escaped = $escaper->css("font-family: <Verdana>");

echo $escaped; // font\2D family\3A \20 \3C Verdana\3E
```

@property AttributeEscaper $attributeEscaper
@property CssEscaper       $cssEscaper
@property HtmlEscaper      $htmlEscaper
@property JsEscaper        $jsEscaper
@property UrlEscaper       $urlEscaper

### Properties
```php
/**
 * @var AttributeEscaper
 */
protected $attributeEscaper;

/**
 * @var CssEscaper
 */
protected $cssEscaper;

/**
 * @var HtmlEscaper
 */
protected $htmlEscaper;

/**
 * @var JsEscaper
 */
protected $jsEscaper;

/**
 * @var UrlEscaper
 */
protected $urlEscaper;

```

### Methods

```php
public function __construct();
```

```php
public function attributes( mixed $input ): string;
```
Escapes a HTML attribute string or array. Delegates to the configured
`AttributeEscaper`.

```php
public function css( string $input ): string;
```
Escape CSS strings. Delegates to the configured `CssEscaper`.

```php
final public function detectEncoding( string $input ): string | null;
```

```php
public function escapeCss( string $input ): string;
```

```php
public function escapeHtml( string $input = null ): string;
```

```php
public function escapeHtmlAttr( string $input = null ): string;
```

```php
public function escapeJs( string $input ): string;
```

```php
public function escapeUrl( string $input ): string;
```

```php
public function getAttributeEscaper(): AttributeEscaper;
```

```php
public function getCssEscaper(): CssEscaper;
```

```php
public function getEncoding(): string;
```

```php
public function getFlags(): int;
```

```php
public function getHtmlEscaper(): HtmlEscaper;
```

```php
public function getJsEscaper(): JsEscaper;
```

```php
public function getUrlEscaper(): UrlEscaper;
```

```php
public function html( string $input = null ): string;
```
Escapes a HTML string. Delegates to the configured `HtmlEscaper`.

```php
public function js( string $input ): string;
```
Escape javascript strings. Delegates to the configured `JsEscaper`.

```php
final public function normalizeEncoding( string $input ): string;
```

```php
public function setAttributeEscaper( AttributeEscaper $escaper ): Escaper;
```

```php
public function setCssEscaper( CssEscaper $escaper ): Escaper;
```

```php
public function setDoubleEncode( bool $doubleEncode ): Escaper;
```
Sets the double_encode flag. Fans out to all sub-objects.

```php
public function setEncoding( string $encoding ): EscaperInterface;
```
Sets the encoding. Fans out to all sub-objects.

```php
public function setFlags( int $flags ): EscaperInterface;
```
Sets the htmlspecialchars flags. Fans out to all sub-objects.

```php
public function setHtmlEscaper( HtmlEscaper $escaper ): Escaper;
```

```php
public function setHtmlQuoteType( int $flags ): EscaperInterface;
```

```php
public function setJsEscaper( JsEscaper $escaper ): Escaper;
```

```php
public function setUrlEscaper( UrlEscaper $escaper ): Escaper;
```

```php
public function url( string $input ): string;
```
Escapes a URL. Delegates to the configured `UrlEscaper`.

## Html\Escaper\AbstractEscaper ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/AbstractEscaper.zep)

-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__

-   __Extends__

-   __Implements__

Shared base for the per-context escaper objects. Holds the encoding,
htmlspecialchars flag, and double-encode toggle, plus the encoding
detection / normalization utilities used by the CSS and JS escapers.

Each concrete context (`HtmlEscaper`, `AttributeEscaper`, `CssEscaper`,
`JsEscaper`, `UrlEscaper`) extends this so that callers can configure
one context without affecting the others.

@property bool   $doubleEncode
@property string $encoding
@property int    $flags

### Properties
```php
/**
 * @var bool
 */
protected $doubleEncode = true;

/**
 * @var string
 */
protected $encoding = utf-8;

/**
 * ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401
 *
 * @var int
 */
protected $flags = 11;

```

### Methods

```php
final public function detectEncoding( string $input ): string | null;
```
Detects the character encoding of a string. Special-handling for
chr(172) and chr(128) to chr(159) which fail to be detected by
`mb_detect_encoding()`.

```php
public function getDoubleEncode(): bool;
```

```php
public function getEncoding(): string;
```

```php
public function getFlags(): int;
```

```php
final public function normalizeEncoding( string $input ): string;
```
Normalizes a string's encoding to UTF-32, used by the CSS and JS
escapers before invoking the C-level escape routines.

```php
public function setDoubleEncode( bool $doubleEncode );
```

```php
public function setEncoding( string $encoding );
```

```php
public function setFlags( int $flags );
```

## Html\Escaper\AttributeEscaper 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/AttributeEscaper.zep)

-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__

-   __Extends__

    `AbstractEscaper`

-   __Implements__

Escapes either a single attribute value (string) or an associative array
of attribute pairs. Boolean `true` becomes a bare key (e.g. `disabled`);
`false` and `null` skip the entry; arrays are joined with a space.

### Methods

```php
public function __invoke( mixed $input = null ): string;
```

```php
public function escape( mixed $input = null ): string;
```

```php
protected function escapeValue( string $input ): string;
```
Encodes a single key/value via `htmlspecialchars`.

## Html\Escaper\CssEscaper 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/CssEscaper.zep)

-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__

-   __Extends__

    `AbstractEscaper`

-   __Implements__

Escapes a string for use inside a CSS value by replacing non-alphanumeric
characters with their hexadecimal escape sequence. Wraps the C-level
`phalcon_escape_css` after normalising the input to UTF-32.

### Methods

```php
public function __invoke( string $input ): string;
```

```php
public function escape( string $input ): string;
```

## Html\Escaper\EscaperInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/EscaperInterface.zep)

-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__

-   __Extends__

-   __Implements__

Interface for Phalcon\Html\Escaper

### Methods

```php
public function attributes( string $input ): string;
```
Escapes a HTML attribute string

```php
public function css( string $input ): string;
```
Escape CSS strings by replacing non-alphanumeric chars by their
hexadecimal representation

```php
public function getEncoding(): string;
```
Returns the internal encoding used by the escaper

```php
public function html( string $input ): string;
```
Escapes a HTML string

```php
public function js( string $input ): string;
```
Escape Javascript strings by replacing non-alphanumeric chars by their
hexadecimal representation

```php
public function setEncoding( string $encoding ): EscaperInterface;
```
Sets the encoding to be used by the escaper

```php
public function setFlags( int $flags ): EscaperInterface;
```
Sets the HTML quoting type for htmlspecialchars

```php
public function url( string $input ): string;
```
Escapes a URL. Internally uses rawurlencode

## Html\Escaper\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/Exception.zep)

-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__

-   __Extends__

    `\Exception`

-   __Implements__

Exceptions thrown in Phalcon\Html\Escaper will use this class

## Html\Escaper\HtmlEscaper 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/HtmlEscaper.zep)

-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__

-   __Extends__

    `AbstractEscaper`

-   __Implements__

Escapes a string for use as HTML body content via `htmlspecialchars`.

### Methods

```php
public function __invoke( string $input = null ): string;
```

```php
public function escape( string $input = null ): string;
```

## Html\Escaper\JsEscaper 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/JsEscaper.zep)

-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__

-   __Extends__

    `AbstractEscaper`

-   __Implements__

Escapes a string for use inside a JavaScript context by replacing
non-alphanumeric characters with their hexadecimal escape sequence.
Wraps the C-level `phalcon_escape_js` after normalising the input to
UTF-32.

### Methods

```php
public function __invoke( string $input ): string;
```

```php
public function escape( string $input ): string;
```

## Html\Escaper\UrlEscaper 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/UrlEscaper.zep)

-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__

-   __Extends__

    `AbstractEscaper`

-   __Implements__

Escapes a string for use as a URL component via `rawurlencode`. The
encoding/flags/doubleEncode setters are accepted for symmetry with the
other contexts but have no effect on the output.

### Methods

```php
public function __invoke( string $input ): string;
```

```php
public function escape( string $input ): string;
```

## Html\EscaperFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/EscaperFactory.zep)

-   __Namespace__

    - `Phalcon\Html`

-   __Uses__

-   __Extends__

-   __Implements__

Class EscaperFactory

### Methods

```php
public function newInstance(): Escaper;
```
Create a new instance of the object

## Html\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exception.zep)

-   __Namespace__

    - `Phalcon\Html`

-   __Uses__

-   __Extends__

    `\Exception`

-   __Implements__

Phalcon\Html\Tag\Exception

Exceptions thrown in Phalcon\Html\Tag will use this class

## Html\Helper\AbstractHelper ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractHelper.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Exception`

-   __Extends__

-   __Implements__

@property string           $delimiter
@property EscaperInterface $escaper
@property string           $indent
@property int              $indentLevel

### Properties
```php
/**
 * @var string
 */
protected $delimiter = ;

/**
 * @var Doctype|null
 */
protected $doctype;

/**
 * @var EscaperInterface
 */
protected $escaper;

/**
 * @var string
 */
protected $indent =     ;

/**
 * @var int
 */
protected $indentLevel = 1;

```

### Methods

```php
public function __construct( EscaperInterface $escaper, Doctype $doctype = null );
```
AbstractHelper constructor.

```php
protected function close( string $tag, bool $raw = bool ): string;
```
Produces a closing tag

```php
protected function indent(): string;
```
Replicates the indent x times as per indentLevel

```php
protected function injectAttribute( string $key, string $value, array $attributes ): array;
```
Forces a single key into the attribute array, stripping any user-supplied
value for that key first. Used by helpers whose first positional argument
is itself an attribute (`href` for Anchor, `src` for Img, etc.) to make
sure that argument always wins.

```php
protected function orderAttributes( array $overrides, array $attributes ): array;
```
Keeps all the attributes sorted - same order all the tome

```php
protected function renderArrayElements( array $elements, string $delimiter ): string;
```
Traverses an array and calls the method defined in the first element
with attributes as the second, returning the resulting string

```php
protected function renderAttributes( array $attributes ): string;
```
Renders all the attributes

```php
protected function renderElement( string $tag, array $attributes = [] ): string;
```
Renders an element

```php
protected function renderFullElement( string $tag, string $text, array $attributes = [], bool $raw = bool ): string;
```
Renders an element

```php
protected function renderTag( string $tag, array $attributes = [], string $close = string ): string;
```
Renders a tag

```php
protected function selfClose( string $tag, array $attributes = [] ): string;
```
Produces a self close tag i.e. <img />

## Html\Helper\AbstractList ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractList.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class AbstractList

### Properties
```php
/**
 * @var array
 */
protected $attributes;

/**
 * @var string
 */
protected $elementTag = li;

/**
 * @var array
 */
protected $store;

```

### Methods

```php
public function __invoke( string $indent = string, string $delimiter = null, array $attributes = [] ): AbstractList;
```

```php
public function __toString();
```
Generates and returns the HTML for the list.

```php
abstract protected function getTag(): string;
```
Returns the tag name.

## Html\Helper\AbstractSeries ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractSeries.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

-   __Extends__

    `AbstractHelper`

-   __Implements__

@property array $attributes
@property array $store

### Properties
```php
/**
 * @var array
 */
protected $attributes;

/**
 * @var array
 */
protected $store;

```

### Methods

```php
public function __invoke( string $indent = string, string $delimiter = null ): AbstractSeries;
```

```php
public function __toString();
```
Generates and returns the HTML for the list. Entries are sorted by
their integer key first, so an asset registered with a lower position
renders before one registered with a higher position regardless of
registration order.

```php
public function reset(): AbstractSeries;
```
Resets the internal store.

```php
abstract protected function getTag(): string;
```
Returns the tag name.

```php
protected function pushOrPlace( array $entry, int $position = int ): void;
```
Appends an entry to the store, optionally at a specific integer
position. When `position` is negative the entry is pushed onto the next
available auto-increment slot. When `position` is non-negative the entry
is placed at that key, advancing past any already-occupied slots so
existing entries are not overwritten. The store is ksort()ed in
`__toString`, so positions act as a sort key, not a strict address.

## Html\Helper\Anchor 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Anchor.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class Anchor

@property bool $forceRaw

### Properties
```php
/**
 * @var bool
 */
protected $forceRaw = false;

```

### Methods

```php
public function __construct( EscaperInterface $escaper, Doctype $doctype = null, bool $forceRaw = bool );
```

```php
public function __invoke( string $href, string $text, array $attributes = [], bool $raw = bool ): string;
```
Produce a &lt;a> tag

## Html\Helper\Base 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Base.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class Base

### Methods

```php
public function __invoke( string $href = null, array $attributes = [] ): string;
```
Produce a `<base/>` tag.

## Html\Helper\Body 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Body.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class Body

### Methods

```php
public function __invoke( array $attributes = [] ): string;
```
Produce a `<body>` tag.

## Html\Helper\Breadcrumbs 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Breadcrumbs.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Mvc\Url\UrlInterface`
    - `Phalcon\Support\Helper\Str\Interpolate`

-   __Extends__

    `AbstractHelper`

-   __Implements__

This component offers an easy way to create breadcrumbs for your application.
The resulting HTML when calling `render()` will have each breadcrumb enclosed
in `<li>` tags, while the whole string is enclosed in `<nav>` and `<ol>` tags.

@phpstan-type TTemplate array\{
     main: string,
     line: string,
     last: string
 \}
@phpstan-type TElement array\{
     attributes: array&lt;string, string>,
     icon: string,
     link: string,
     text: string
 \}

### Properties
```php
/**
 * @var array<string, string>
 */
private $attributes;

/**
 * Link prefix prepended to every non-empty link during rendering.
 * Auto-populated from the Url service when one is injected.
 *
 * @var string
 */
private $prefix = ;

/**
 * Optional Url service used to resolve links via get().
 * When set, takes priority over the string prefix.
 *
 * @var UrlInterface|null
 */
private $url;

/**
 * Keeps all the breadcrumbs.
 *
 * @var array<int, TElement>
 */
private $data;

/**
 * Crumb separator.
 *
 * @var string
 */
private $separator = <li>/</li>;

/**
 * The HTML template to use to render the breadcrumbs.
 *
 * @var TTemplate
 */
private $template;

/**
 * The HTML template to use to render the breadcrumbs.
 *
 * @var Interpolate
 */
private $interpolator;

```

### Methods

```php
public function __construct( EscaperInterface $escaper, UrlInterface $url = null );
```
AbstractHelper constructor.

```php
public function __invoke( string $indent = string, string $delimiter = null ): Breadcrumbs;
```
Sets the indent and delimiter and returns the object back.

```php
public function add( string $text, string $link = string, string $icon = string, array $attributes = [] ): Breadcrumbs;
```
Adds a new crumb.

```php
// Adding a crumb with a link
$breadcrumbs->add("Home", "/");

// Adding a crumb with added attributes
$breadcrumbs->add("Home", "/", ["class" => "main"]);

// Adding a crumb without a link (normally the last one)
$breadcrumbs->add("Users");
```

```php
public function clear(): void;
```
Clears the crumbs.

```php
$breadcrumbs->clear()
```

```php
public function clearAttributes(): Breadcrumbs;
```
Clear the attributes of the parent element.

```php
public function getAttributes(): array;
```
Get the attributes of the parent element.

```php
public function getPrefix(): string;
```
Returns the link prefix.

```php
public function getSeparator(): string;
```
Returns the separator.

```php
public function getTemplate(): array;
```
Return the current template.

```php
public function remove( int $index ): void;
```
Removes crumb by url.

```php
// Remove the second element
$breadcrumbs->remove(2);
```

```php
public function render(): string;
```
Renders and outputs breadcrumbs based on previously set template.

```php
echo $breadcrumbs->render();
```

```php
public function setAttributes( array $attributes ): Breadcrumbs;
```
Set the attributes for the parent element.

```php
public function setPrefix( string $prefix ): Breadcrumbs;
```
Set the link prefix prepended to every non-empty link during rendering.
When a Url service was injected, calling this method replaces it.

```php
public function setSeparator( string $separator ): Breadcrumbs;
```
Set the separator.

```php
public function setTemplate( string $main, string $line, string $last ): Breadcrumbs;
```
Set the HTML template.

```php
public function toArray(): array;
```
Returns the internal breadcrumbs array.

## Html\Helper\Button 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Button.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class Button

@property bool $forceRaw

### Properties
```php
/**
 * @var bool
 */
protected $forceRaw = false;

```

### Methods

```php
public function __construct( EscaperInterface $escaper, Doctype $doctype = null, bool $forceRaw = bool );
```

```php
public function __invoke( string $text, array $attributes = [], bool $raw = bool ): string;
```
Produce a `<button>` tag.

## Html\Helper\Close 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Close.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class Close

### Methods

```php
public function __invoke( string $tag, bool $raw = bool ): string;
```
Produce a `</...>` tag.

## Html\Helper\Doctype 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Doctype.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

-   __Extends__

-   __Implements__

Creates Doctype tags

### Constants
```php
const HTML32 = 1;
const HTML401_FRAMESET = 4;
const HTML401_STRICT = 2;
const HTML401_TRANSITIONAL = 3;
const HTML5 = 5;
const XHTML10_FRAMESET = 8;
const XHTML10_STRICT = 6;
const XHTML10_TRANSITIONAL = 7;
const XHTML11 = 9;
const XHTML20 = 10;
const XHTML5 = 11;
```

### Properties
```php
/**
 * @var string
 */
private $delimiter;

/**
 * @var int
 */
private $type;

```

### Methods

```php
public function __construct();
```

```php
public function __invoke( int $type = static-constant-access, string $delimiter = string ): Doctype;
```
Produce a &lt;doctype> tag

```php
public function __toString(): string;
```

```php
public function getType(): int;
```

## Html\Helper\Element 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Element.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class Element

@property bool $forceRaw

### Properties
```php
/**
 * @var bool
 */
protected $forceRaw = false;

```

### Methods

```php
public function __construct( EscaperInterface $escaper, Doctype $doctype = null, bool $forceRaw = bool );
```

```php
public function __invoke( string $tag, string $text, array $attributes = [], bool $raw = bool ): string;
```
Produce a tag.

## Html\Helper\Form 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Form.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class Form

### Methods

```php
public function __invoke( array $attributes = [] ): string;
```
Produce a `<form>` tag.

## Html\Helper\FriendlyTitle 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/FriendlyTitle.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Exception`
    - `Phalcon\Support\Helper\Str\Friendly`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Converts text to a URL-friendly slug.

### Properties
```php
/**
 * @var Friendly
 */
protected $friendly;

```

### Methods

```php
public function __construct( EscaperInterface $escaper );
```

```php
public function __invoke( string $text, string $separator = string, bool $lowercase = bool, mixed $replace = null ): string;
```

## Html\Helper\Img 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Img.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class Img

### Methods

```php
public function __invoke( string $src, array $attributes = [] ): string;
```
Produce a &lt;img> tag.

## Html\Helper\Input\AbstractChecked ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/AbstractChecked.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Helper\Doctype`

-   __Extends__

    `AbstractInput`

-   __Implements__

Shared base for inputs that can be checked: `<input type="checkbox">` and
`<input type="radio">`. Holds the optional surrounding `<label>` markup,
the `unchecked` companion hidden input, and the rule that decides whether
the rendered tag carries `checked="checked"`.

The match between `checked` and `value` is loose (`==`) by default so that
mixed int/string form input round-trips correctly (e.g. `value=0` against
`checked="0"`). Strict (`===`) matching is available via `strict(true)`.

@property array $label
@property bool  $strict

### Properties
```php
/**
 * @var array
 */
protected $label;

/**
 * @var bool
 */
protected $strict = false;

```

### Methods

```php
public function __construct( EscaperInterface $escaper, Doctype $doctype = null );
```

```php
public function __toString();
```
Returns the HTML for the input, optionally surrounded by the label
fragment configured via `label()` and preceded by the hidden companion
input emitted when an `unchecked` attribute is supplied.

```php
public function label( array $attributes = [] ): AbstractChecked;
```
Attaches a wrapping `<label>` to the element. The supplied attributes
are merged with a default `for` pointing at the input's `id`. A `text`
pseudo-attribute, if present, becomes the label text and is stripped
from the rendered attributes.

```php
public function strict( bool $flag = bool ): AbstractChecked;
```
Toggles strict (`===`) comparison between the `checked` attribute and
the `value` attribute when deciding whether to render the input as
checked. Defaults to loose (`==`), which matches typical form-input
round-tripping where types may differ between the source data and the
value rendered into the markup.

```php
protected function processChecked(): void;
```
Decides whether the rendered tag carries `checked="checked"`. Two
paths qualify as checked: an unconditional opt-in via
`["checked" => "checked"]` (case-insensitive) or `["checked" => true]`,
and a value-match path where the supplied `checked` attribute equals
the input's `value` (`==` by default, `===` under `strict(true)`).

```php
protected function processUnchecked(): string;
```
Returns the markup for the optional hidden companion input that lets
a checkbox/radio submit a value when unchecked.

## Html\Helper\Input\AbstractGroup ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/AbstractGroup.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__

    - `Phalcon\Html\Helper\AbstractHelper`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Shared base for rendering a group of same-named inputs (checkbox or radio)
from an options array.

Each option in the $options array may be either:
  - a scalar string label:  ['value' => 'Label text']
  - a rich definition:      ['value' => ['label' => 'Label text', 'disabled' => true, ...]]

The $checked parameter is resolved by the concrete subclass:
  - CheckboxGroup compares against an array of selected values
  - RadioGroup compares against a single scalar value

### Properties
```php
/**
 * @var mixed
 */
protected $checked;

/**
 * @var string
 */
protected $name = ;

/**
 * @var array
 */
protected $options;

/**
 * @var array
 */
protected $sharedAttributes;

/**
 * @var string
 */
protected $type = checkbox;

```

### Methods

```php
public function __invoke( string $name, array $options, mixed $checked = null, array $attributes = [] ): AbstractGroup;
```

```php
public function __toString(): string;
```
Renders the group of inputs as a string.

```php
abstract protected function isChecked( string $value ): bool;
```
Determines whether the given value is considered checked.

```php
protected function renderItem( string $value, mixed $definition ): string;
```
Renders a single input + optional label pair.

## Html\Helper\Input\AbstractInput ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/AbstractInput.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__

    - `Phalcon\Html\Helper\AbstractHelper`
    - `Phalcon\Html\Helper\Doctype`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class AbstractInput

@property array  $attributes
@property string $type
@property string $value

### Properties
```php
/**
 * @var string
 */
protected $type = text;

/**
 * @var array
 */
protected $attributes;

```

### Methods

```php
public function __invoke( string $name, string $value = null, array $attributes = [] ): AbstractInput;
```

```php
public function __toString();
```
Returns the HTML for the input.

```php
public function setValue( string $value = null ): AbstractInput;
```
Sets the value of the element

## Html\Helper\Input\Checkbox 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Checkbox.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__

-   __Extends__

    `AbstractChecked`

-   __Implements__

Renders an `<input type="checkbox">`. Behavior (label wrapping, `unchecked`
companion, loose-by-default `checked` match) lives in `AbstractChecked`.

### Properties
```php
/**
 * @var string
 */
protected $type = checkbox;

```

## Html\Helper\Input\CheckboxGroup 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/CheckboxGroup.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__

-   __Extends__

    `AbstractGroup`

-   __Implements__

Renders a group of `<input type="checkbox">` elements from an options array.

The $checked parameter should be an array of selected values, or a single
scalar value (treated as a one-element array).

### Properties
```php
/**
 * @var string
 */
protected $type = checkbox;

```

### Methods

```php
protected function isChecked( string $value ): bool;
```
Returns true when $value appears in the checked list.

## Html\Helper\Input\Generic 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Generic.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Helper\Doctype`

-   __Extends__

    `AbstractInput`

-   __Implements__

Generic input helper. The HTML5 `type` attribute is supplied via the
constructor, which means the `TagFactory` can register a single class
for all type-string-only inputs (color, date, email, hidden, number, ...)
and differentiate them through the recipe map. The type can also be
changed after construction via `setType()`.

### Methods

```php
public function __construct( EscaperInterface $escaper, Doctype $doctype = null, string $type = string );
```

```php
public function setType( string $type ): AbstractInput;
```
Sets the type of the input.

## Html\Helper\Input\Radio 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Radio.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__

-   __Extends__

    `AbstractChecked`

-   __Implements__

Renders an `<input type="radio">`. Behavior (label wrapping, `unchecked`
companion, loose-by-default `checked` match) lives in `AbstractChecked`.

### Properties
```php
/**
 * @var string
 */
protected $type = radio;

```

## Html\Helper\Input\RadioGroup 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/RadioGroup.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__

-   __Extends__

    `AbstractGroup`

-   __Implements__

Renders a group of `<input type="radio">` elements from an options array.

The $checked parameter should be a single scalar value matching the selected
option's value attribute.

### Properties
```php
/**
 * @var string
 */
protected $type = radio;

```

### Methods

```php
protected function isChecked( string $value ): bool;
```
Returns true when $value loosely equals the checked scalar.

## Html\Helper\Input\Select 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Select.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__

    - `Phalcon\Contracts\Html\Helper\Input\SelectData`
    - `Phalcon\Html\Helper\AbstractList`

-   __Extends__

    `AbstractList`

-   __Implements__

Class Select

### Properties
```php
/**
 * @var string
 */
protected $elementTag = option;

/**
 * @var bool
 */
protected $inOptGroup = false;

/**
 * @var string
 */
protected $selected = ;

/**
 * @var bool
 */
protected $strict = false;

```

### Methods

```php
public function add( string $text, string $value = null, array $attributes = [], bool $raw = bool ): Select;
```
Add an element to the list

```php
public function addPlaceholder( string $text, mixed $value = null, array $attributes = [], bool $raw = bool ): Select;
```
Add a placeholder to the element

```php
public function fromData( SelectData $data ): Select;
```
Populates the select from a data provider.

Flat entries: key = option value, value = label string.
Optgroup entries: key = group label, value = [value => label] array.

```php
public function optGroup( string $label = null, array $attributes = [] ): Select;
```
Creates an option group

```php
public function placeholder( string $text ): Select;
```
Adds a non-selectable placeholder option as the first entry. Renders
as `<option value="" disabled selected>$text</option>`, matching the
common HTML idiom for "Choose…"-style prompts.

```php
public function selected( string $selected ): Select;
```

```php
public function strict( bool $flag = bool ): Select;
```
Toggles strict (`===`) comparison between an option's `value` and
the previously stored `selected` value. Defaults to loose (`==`),
matching the round-tripping fix in `AbstractChecked` so mixed
int/string form data marks the right option as selected.

```php
protected function getTag(): string;
```

```php
protected function optGroupEnd(): string;
```

```php
protected function optGroupStart( string $label, array $attributes ): string;
```

## Html\Helper\Input\Select\ArrayData 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Select/ArrayData.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input\Select`

-   __Uses__

    - `Phalcon\Contracts\Html\Helper\Input\SelectData`

-   __Extends__

-   __Implements__

    - `SelectData`

Wraps a plain PHP array as a SELECT data provider.

Keys are option values; string values are labels;
array values define optgroups.

### Properties
```php
/**
 * @var array
 */
protected $attributes;

/**
 * @var array
 */
protected $data;

```

### Methods

```php
public function __construct( array $data = [], array $attributes = [] );
```

```php
public function getAttributes(): array;
```

```php
public function getOptions(): array;
```

## Html\Helper\Input\Select\ResultsetData 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Select/ResultsetData.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input\Select`

-   __Uses__

    - `InvalidArgumentException`
    - `Phalcon\Contracts\Html\Helper\Input\SelectData`
    - `Phalcon\Mvc\Model\ResultsetInterface`

-   __Extends__

-   __Implements__

    - `SelectData`

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by AuraPHP
@link    https://github.com/auraphp/Aura.Html
@license https://github.com/auraphp/Aura.Html/blob/2.x/LICENSE

### Properties
```php
/**
 * @var array
 */
protected $attributesMap;

/**
 * @var array|null
 */
protected $resolvedAttributes;

/**
 * @var array|null
 */
protected $resolvedOptions;

/**
 * @var ResultsetInterface
 */
protected $resultset;

/**
 * @var array
 */
protected $using;

```

### Methods

```php
public function __construct( ResultsetInterface $resultset, array $using, array $attributesMap = [] );
```

```php
public function getAttributes(): array;
```

```php
public function getOptions(): array;
```

```php
protected function readField( mixed $option, string $field );
```
Reads a property from the row, supporting both objects (via
`readAttribute` when present) and plain arrays.

```php
protected function resolve(): void;
```
Walks the resultset once, building both the option map and the
per-option resolved attribute map. Closures in `attributesMap`
receive the current row; string values are passed through.

## Html\Helper\Input\Textarea 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Textarea.zep)

-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractInput`

-   __Implements__

Class Textarea

### Properties
```php
/**
 * @var string
 */
protected $type = textarea;

```

### Methods

```php
public function __toString();
```
Returns the HTML for the input.

## Html\Helper\Label 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Label.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class Label

@property bool $forceRaw

### Properties
```php
/**
 * @var bool
 */
protected $forceRaw = false;

```

### Methods

```php
public function __construct( EscaperInterface $escaper, Doctype $doctype = null, bool $forceRaw = bool );
```

```php
public function __invoke( string $label, array $attributes = [], bool $raw = bool ): string;
```
Produce a `<label>` tag.

## Html\Helper\Link 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Link.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

-   __Extends__

    `Style`

-   __Implements__

Creates &lt;link> tags

### Methods

```php
public function add( string $url, array $attributes = [], int $position = int );
```
Add an element to the list

```php
protected function getAttributes( string $url, array $attributes ): array;
```
Returns the necessary attributes

```php
protected function getTag(): string;
```

## Html\Helper\Meta 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Meta.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractSeries`

-   __Implements__

Class Meta

### Methods

```php
public function add( array $attributes = [], int $position = int ): Meta;
```
Add an element to the list

```php
public function addHttp( string $httpEquiv, string $content, int $position = int ): Meta;
```

```php
public function addName( string $name, string $content, int $position = int ): Meta;
```

```php
public function addProperty( string $name, string $content, int $position = int ): Meta;
```

```php
protected function getTag(): string;
```

## Html\Helper\Ol 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Ol.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`

-   __Extends__

    `AbstractList`

-   __Implements__

Class Ol

@property bool $forceRaw

### Properties
```php
/**
 * @var bool
 */
protected $forceRaw = false;

```

### Methods

```php
public function __construct( EscaperInterface $escaper, Doctype $doctype = null, bool $forceRaw = bool );
```

```php
public function add( string $text, array $attributes = [], bool $raw = bool ): AbstractList;
```
Add an element to the list

```php
protected function getTag(): string;
```

## Html\Helper\Preload 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Preload.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Link\Link`
    - `Phalcon\Html\Link\Serializer\Header`
    - `Phalcon\Http\ResponseInterface`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Generates a &lt;link rel="preload"> tag for resource hinting.
If a ResponseInterface is provided, also sets the HTTP Link header.

### Properties
```php
/**
 * @var ResponseInterface|null
 */
protected $response;

```

### Methods

```php
public function __construct( EscaperInterface $escaper, ResponseInterface $response = null );
```

```php
public function __invoke( string $href, string $type = string, array $attributes = [] ): string;
```

## Html\Helper\Script 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Script.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractSeries`

-   __Implements__

Class Script

### Methods

```php
public function add( string $url, array $attributes = [], int $position = int );
```
Add an element to the list

```php
public function beginInternal(): void;
```
Begins capturing inline script content via output buffering. Pair
with `endInternal()` to close the buffer and append the captured
markup as a `<script>...</script>` block in the asset stack.

```php
public function endInternal( array $attributes = [], int $position = int ): Script;
```
Closes an inline-script buffer opened by `beginInternal()` and adds
the captured content as a `<script>...</script>` entry. Any
attributes supplied are placed on the wrapping tag. The script body
is treated as raw HTML (it is JavaScript, not user-supplied text).

```php
protected function getAttributes( string $url, array $attributes ): array;
```
Returns the necessary attributes

```php
protected function getTag(): string;
```

## Html\Helper\Style 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Style.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractSeries`

-   __Implements__

Class Style

### Properties
```php
/**
 * @var bool
 */
private $isStyle = false;

```

### Methods

```php
public function add( string $url, array $attributes = [], int $position = int );
```
Add an element to the list

```php
public function setStyle( bool $flag ): Style;
```
Sets if this is a style or link tag

```php
protected function getAttributes( string $url, array $attributes ): array;
```
Returns the necessary attributes

```php
protected function getTag(): string;
```

## Html\Helper\Tag 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Tag.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Generic open-tag escape hatch. Renders just `<name attr="...">` for any
tag name without a dedicated helper. For an open + content + close tag
use `Element` instead. For self-closing void tags (img, br, hr, etc.)
use `VoidTag`.

### Methods

```php
public function __invoke( string $name, array $attributes = [] ): string;
```

## Html\Helper\Title 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Title.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Class Title

@property array  $append
@property string $delimiter
@property string $indent
@property array  $prepend
@property string $title
@property string $separator

### Properties
```php
/**
 * @var array
 */
protected $append;

/**
 * @var array
 */
protected $prepend;

/**
 * @var string
 */
protected $title = ;

/**
 * @var string
 */
protected $separator = ;

```

### Methods

```php
public function __invoke( string $indent = string, string $delimiter = null ): Title;
```
Sets the separator and returns the object back

```php
public function __toString();
```
Returns the title tags

```php
public function append( string $text, bool $raw = bool ): Title;
```
Appends text to current document title

```php
public function get(): string;
```
Returns the title

```php
public function prepend( string $text, bool $raw = bool ): Title;
```
Prepends text to current document title

```php
public function set( string $text, bool $raw = bool ): Title;
```
Sets the title

```php
public function setSeparator( string $separator, bool $raw = bool ): Title;
```
Sets the separator

## Html\Helper\Ul 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Ul.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

-   __Extends__

    `Ol`

-   __Implements__

Class Ul

### Methods

```php
protected function getTag(): string;
```

## Html\Helper\VoidTag 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/VoidTag.zep)

-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__

    - `Phalcon\Html\Exception`

-   __Extends__

    `AbstractHelper`

-   __Implements__

Generic void-tag escape hatch. Renders a self-closing tag for any name
without a dedicated helper. The trailing `/` is emitted only for XHTML
doctypes, matching the `Input/AbstractInput::__toString` convention.

### Methods

```php
public function __invoke( string $name, array $attributes = [] ): string;
```

## Html\Link\AbstractLink ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/AbstractLink.zep)

-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__

    - `Phalcon\Support\Collection`

-   __Extends__

-   __Implements__

@property array  $attributes
@property string $href
@property array  $rels
@property bool   $templated

### Properties
```php
/**
 * @var Collection
 */
protected $attributes;

/**
 * @var string
 */
protected $href = ;

/**
 * @var Collection
 */
protected $rels;

/**
 * @var bool
 */
protected $templated = false;

```

### Methods

```php
public function __construct( string $rel = string, string $href = string, array $attributes = [] );
```
Link constructor.

```php
protected function doGetAttributes(): array;
```
Returns a list of attributes that describe the target URI.

```php
protected function doGetHref(): string;
```
Returns the target of the link.

The target link must be one of:
- An absolute URI, as defined by RFC 5988.
- A relative URI, as defined by RFC 5988. The base of the relative link
    is assumed to be known based on context by the client.
- A URI template as defined by RFC 6570.

If a URI template is returned, isTemplated() MUST return True.

```php
protected function doGetRels(): array;
```
Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.

```php
protected function doIsTemplated(): bool;
```
Returns whether this is a templated link.

```php
protected function doWithAttribute( string $key, mixed $value );
```

```php
protected function doWithHref( string $href );
```

```php
protected function doWithRel( string $key );
```

```php
protected function doWithoutAttribute( string $key );
```

```php
protected function doWithoutRel( string $key );
```

```php
protected function hrefIsTemplated( string $href ): bool;
```
Determines if a href is a templated link or not.

@see https://tools.ietf.org/html/rfc6570

## Html\Link\AbstractLinkProvider ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/AbstractLinkProvider.zep)

-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__

    - `Phalcon\Html\Link\Interfaces\LinkInterface`

-   __Extends__

-   __Implements__

@property array $links

### Properties
```php
/**
 * @var array
 */
protected $links;

```

### Methods

```php
public function __construct( array $links = [] );
```
LinkProvider constructor.

```php
protected function doGetLinks(): array;
```
Returns an iterable of LinkInterface objects.

The iterable may be an array or any PHP \Traversable object. If no links
are available, an empty array or \Traversable MUST be returned.

```php
protected function doGetLinksByRel( string $rel ): array;
```
Returns an iterable of LinkInterface objects that have a specific
relationship.

The iterable may be an array or any PHP \Traversable object. If no links
with that relationship are available, an empty array or \Traversable
MUST be returned.

```php
protected function doWithLink( mixed $link );
```
Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if $link is === identical
to a link object already in the collection.

```php
protected function doWithoutLink( mixed $link );
```
Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if $link is === identical to a link
object already in the collection.

```php
protected function getKey( mixed $link ): string;
```
Returns the object hash key

## Html\Link\EvolvableLink 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/EvolvableLink.zep)

-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__

    - `Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`

-   __Extends__

    `Link`

-   __Implements__

    - `EvolvableLinkInterface`

Class Phalcon\Http\Link\EvolvableLink

@property array  attributes
@property string href
@property array  rels
@property bool   templated

### Methods

```php
public function withAttribute( mixed $attribute, mixed $value ): EvolvableLinkInterface;
```
Returns an instance with the specified attribute added.

If the specified attribute is already present, it will be overwritten
with the new value.

```php
public function withHref( string $href ): EvolvableLinkInterface;
```
Returns an instance with the specified href.

```php
public function withRel( string $rel ): EvolvableLinkInterface;
```
Returns an instance with the specified relationship included.

If the specified rel is already present, this method MUST return
normally without errors, but without adding the rel a second time.

```php
public function withoutAttribute( string $attribute ): EvolvableLinkInterface;
```
Returns an instance with the specified attribute excluded.

If the specified attribute is not present, this method MUST return
normally without errors.

```php
public function withoutRel( string $rel ): EvolvableLinkInterface;
```
Returns an instance with the specified relationship excluded.

If the specified rel is not present, this method MUST return
normally without errors.

## Html\Link\EvolvableLinkProvider 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/EvolvableLinkProvider.zep)

-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__

    - `Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface`
    - `Phalcon\Html\Link\Interfaces\LinkInterface`

-   __Extends__

    `LinkProvider`

-   __Implements__

    - `EvolvableLinkProviderInterface`

Class Phalcon\Http\Link\LinkProvider

@property LinkInterface[] links

### Methods

```php
public function withLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```
Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if link is === identical
to a link object already in the collection.

```php
public function withoutLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```
Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if link is === identical to a link
object already in the collection.

## Html\Link\Interfaces\EvolvableLinkInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/EvolvableLinkInterface.zep)

-   __Namespace__

    - `Phalcon\Html\Link\Interfaces`

-   __Uses__

-   __Extends__

    `LinkInterface`

-   __Implements__

An evolvable link value object.

### Methods

```php
public function withAttribute( string $attribute, string $value ): EvolvableLinkInterface;
```
Returns an instance with the specified attribute added.

If the specified attribute is already present, it will be overwritten
with the new value.

```php
public function withHref( string $href ): EvolvableLinkInterface;
```
Returns an instance with the specified href.

```php
public function withRel( string $rel ): EvolvableLinkInterface;
```
Returns an instance with the specified relationship included.

If the specified rel is already present, this method MUST return
normally without errors, but without adding the rel a second time.

```php
public function withoutAttribute( string $attribute ): EvolvableLinkInterface;
```
Returns an instance with the specified attribute excluded.

If the specified attribute is not present, this method MUST return
normally without errors.

```php
public function withoutRel( string $rel ): EvolvableLinkInterface;
```
Returns an instance with the specified relationship excluded.

If the specified rel is already not present, this method MUST return
normally without errors.

## Html\Link\Interfaces\EvolvableLinkProviderInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/EvolvableLinkProviderInterface.zep)

-   __Namespace__

    - `Phalcon\Html\Link\Interfaces`

-   __Uses__

-   __Extends__

    `LinkProviderInterface`

-   __Implements__

An evolvable link provider value object.

### Methods

```php
public function withLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```
Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if $link is === identical
to a link object already in the collection.

```php
public function withoutLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```
Returns an instance with the specifed link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if $link is === identical to a link
object already in the collection.

## Html\Link\Interfaces\LinkInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/LinkInterface.zep)

-   __Namespace__

    - `Phalcon\Html\Link\Interfaces`

-   __Uses__

-   __Extends__

-   __Implements__

A readable link object.

### Methods

```php
public function getAttributes(): array;
```
Returns a list of attributes that describe the target URI.

```php
public function getHref(): string;
```
Returns the target of the link.

The target link must be one of:
- An absolute URI, as defined by RFC 5988.
- A relative URI, as defined by RFC 5988. The base of the relative link
    is assumed to be known based on context by the client.
- A URI template as defined by RFC 6570.

If a URI template is returned, isTemplated() MUST return True.

```php
public function getRels(): array;
```
Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.

```php
public function isTemplated(): bool;
```
Returns whether this is a templated link.

## Html\Link\Interfaces\LinkProviderInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/LinkProviderInterface.zep)

-   __Namespace__

    - `Phalcon\Html\Link\Interfaces`

-   __Uses__

-   __Extends__

-   __Implements__

A link provider object.

### Methods

```php
public function getLinks(): array;
```
Returns an array of LinkInterface objects.

```php
public function getLinksByRel( string $rel ): array;
```
Returns an array of LinkInterface objects that have a specific
relationship.

## Html\Link\Link 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Link.zep)

-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__

    - `Phalcon\Html\Link\Interfaces\LinkInterface`
    - `Phalcon\Support\Collection`
    - `Phalcon\Support\Collection\CollectionInterface`

-   __Extends__

    `AbstractLink`

-   __Implements__

    - `LinkInterface`

Class Phalcon\Http\Link\Link

@property array  attributes
@property string href
@property array  rels
@property bool   templated

### Methods

```php
public function getAttributes(): array;
```
Returns a list of attributes that describe the target URI.

```php
public function getHref(): string;
```
Returns the target of the link.

The target link must be one of:
- An absolute URI, as defined by RFC 5988.
- A relative URI, as defined by RFC 5988. The base of the relative link
    is assumed to be known based on context by the client.
- A URI template as defined by RFC 6570.

If a URI template is returned, isTemplated() MUST return True.

```php
public function getRels(): array;
```
Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.

```php
public function isTemplated(): bool;
```
Returns whether or not this is a templated link.

## Html\Link\LinkProvider 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/LinkProvider.zep)

-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__

    - `Phalcon\Html\Link\Interfaces\LinkInterface`
    - `Phalcon\Html\Link\Interfaces\LinkProviderInterface`

-   __Extends__

    `AbstractLinkProvider`

-   __Implements__

    - `LinkProviderInterface`

@property LinkInterface[] links

### Methods

```php
public function getLinks(): array;
```
Returns an iterable of LinkInterface objects.

The iterable may be an array or any PHP \Traversable object. If no links
are available, an empty array or \Traversable MUST be returned.

```php
public function getLinksByRel( mixed $rel ): array;
```
Returns an iterable of LinkInterface objects that have a specific
relationship.

The iterable may be an array or any PHP \Traversable object. If no links
with that relationship are available, an empty array or \Traversable
MUST be returned.

## Html\Link\Serializer\Header 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Serializer/Header.zep)

-   __Namespace__

    - `Phalcon\Html\Link\Serializer`

-   __Uses__

-   __Extends__

-   __Implements__

    - `SerializerInterface`

Class Phalcon\Http\Link\Serializer\Header

### Methods

```php
public function serialize( array $links ): string | null;
```
Serializes all the passed links to a HTTP link header

## Html\Link\Serializer\SerializerInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Serializer/SerializerInterface.zep)

-   __Namespace__

    - `Phalcon\Html\Link\Serializer`

-   __Uses__

-   __Extends__

-   __Implements__

Class Phalcon\Http\Link\Serializer\SerializerInterface

### Methods

```php
public function serialize( array $links ): string | null;
```
Serializer method

## Html\TagFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/TagFactory.zep)

-   __Namespace__

    - `Phalcon\Html`

-   __Uses__

    - `Closure`
    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Helper\Anchor`
    - `Phalcon\Html\Helper\Base`
    - `Phalcon\Html\Helper\Body`
    - `Phalcon\Html\Helper\Breadcrumbs`
    - `Phalcon\Html\Helper\Button`
    - `Phalcon\Html\Helper\Close`
    - `Phalcon\Html\Helper\Doctype`
    - `Phalcon\Html\Helper\Element`
    - `Phalcon\Html\Helper\Form`
    - `Phalcon\Html\Helper\FriendlyTitle`
    - `Phalcon\Html\Helper\Img`
    - `Phalcon\Html\Helper\Input\Checkbox`
    - `Phalcon\Html\Helper\Input\CheckboxGroup`
    - `Phalcon\Html\Helper\Input\Generic`
    - `Phalcon\Html\Helper\Input\Radio`
    - `Phalcon\Html\Helper\Input\RadioGroup`
    - `Phalcon\Html\Helper\Input\Select`
    - `Phalcon\Html\Helper\Input\Textarea`
    - `Phalcon\Html\Helper\Label`
    - `Phalcon\Html\Helper\Link`
    - `Phalcon\Html\Helper\Meta`
    - `Phalcon\Html\Helper\Ol`
    - `Phalcon\Html\Helper\Preload`
    - `Phalcon\Html\Helper\Script`
    - `Phalcon\Html\Helper\Style`
    - `Phalcon\Html\Helper\Tag`
    - `Phalcon\Html\Helper\Title`
    - `Phalcon\Html\Helper\Ul`
    - `Phalcon\Html\Helper\VoidTag`
    - `Phalcon\Http\ResponseInterface`
    - `Phalcon\Mvc\Url\UrlInterface`

-   __Extends__

-   __Implements__

ServiceLocator implementation for Tag helpers.

Built-in services are seeded by the constructor. Users may add or override
services via `set()`, passing a Closure that returns the helper instance.

Helpers are cached per name after first construction.

@method string      a(string $href, string $text, array $attributes = [], bool $raw = false)
@method string      aRaw(string $href, string $text, array $attributes = [])
@method string      base(string $href, array $attributes = [])
@method string      body(array $attributes = [])
@method Breadcrumbs breadcrumbs(string $indent = '    ', string $delimiter = "\n")
@method string      button(string $text, array $attributes = [], bool $raw = false)
@method string      buttonRaw(string $text, array $attributes = [])
@method string      close(string $tag, bool $raw = false)
@method Doctype     doctype(int $type = Doctype::HTML5, string $delimiter = "\n")
@method string      element(string $tag, string $text, array $attributes = [], bool $raw = false)
@method string      elementRaw(string $tag, string $text, array $attributes = [])
@method string      form(array $attributes = [])
@method string      friendlyTitle(string $text, string $separator = '-', bool $lowercase = true, mixed $replace = null)
@method string      img(string $src, array $attributes = [])
@method Checkbox    inputCheckbox(string $name, string $value = null, array $attributes = [])
@method CheckboxGroup inputCheckboxGroup(string $name, array $options, mixed $checked = null, array $attributes = [])
@method Generic     inputColor(string $name, string $value = null, array $attributes = [])
@method Generic     inputDate(string $name, string $value = null, array $attributes = [])
@method Generic     inputDateTime(string $name, string $value = null, array $attributes = [])
@method Generic     inputDateTimeLocal(string $name, string $value = null, array $attributes = [])
@method Generic     inputEmail(string $name, string $value = null, array $attributes = [])
@method Generic     inputFile(string $name, string $value = null, array $attributes = [])
@method Generic     inputHidden(string $name, string $value = null, array $attributes = [])
@method Generic     inputImage(string $name, string $value = null, array $attributes = [])
@method Generic     inputInput(string $name, string $value = null, array $attributes = [])
@method Generic     inputMonth(string $name, string $value = null, array $attributes = [])
@method Generic     inputNumeric(string $name, string $value = null, array $attributes = [])
@method Generic     inputPassword(string $name, string $value = null, array $attributes = [])
@method Radio       inputRadio(string $name, string $value = null, array $attributes = [])
@method RadioGroup    inputRadioGroup(string $name, array $options, mixed $checked = null, array $attributes = [])
@method Generic     inputRange(string $name, string $value = null, array $attributes = [])
@method Generic     inputSearch(string $name, string $value = null, array $attributes = [])
@method Select      inputSelect(string $name, string $value = null, array $attributes = [])
@method Generic     inputSubmit(string $name, string $value = null, array $attributes = [])
@method Generic     inputTel(string $name, string $value = null, array $attributes = [])
@method Generic     inputText(string $name, string $value = null, array $attributes = [])
@method Textarea    inputTextarea(string $name, string $value = null, array $attributes = [])
@method Generic     inputTime(string $name, string $value = null, array $attributes = [])
@method Generic     inputUrl(string $name, string $value = null, array $attributes = [])
@method Generic     inputWeek(string $name, string $value = null, array $attributes = [])
@method string      label(string $label, array $attributes = [], bool $raw = false)
@method string      labelRaw(string $label, array $attributes = [])
@method Link        link(string $indent = '    ', string $delimiter = "\n")
@method Meta        meta(string $indent = '    ', string $delimiter = "\n")
@method Ol          ol(string $indent = '    ', string $delimiter = null, array $attributes = [])
@method Ol          olRaw(string $indent = '    ', string $delimiter = null, array $attributes = [])
@method string      preload(string $href, string $type = 'style', array $attributes = [])
@method Script      script(string $indent = '    ', string $delimiter = "\n")
@method Style       style(string $indent = '    ', string $delimiter = "\n")
@method string      tag(string $name, array $attributes = [])
@method Title       title(string $indent = '    ', string $delimiter = "\n")
@method Ul          ul(string $indent = '    ', string $delimiter = null, array $attributes = [])
@method Ul          ulRaw(string $indent = '    ', string $delimiter = null, array $attributes = [])
@method string      voidTag(string $name, array $attributes = [])

### Properties
```php
/**
 * @var Doctype
 */
private $doctype;

/**
 * @var EscaperInterface
 */
private $escaper;

/**
 * @var ResponseInterface|null
 */
private $response;

/**
 * @var UrlInterface|null
 */
private $url;

/**
 * @var array
 */
protected $factories;

/**
 * @var array
 */
protected $instances;

```

### Methods

```php
public function __call( string $name, array $arguments );
```
Magic call to make the helper objects available as methods.

```php
public function __construct( EscaperInterface $escaper, array $services = [], ResponseInterface $response = null, UrlInterface $url = null );
```
TagFactory constructor.

@phpstan-param array&lt;string, Closure> $services

```php
public function has( string $name ): bool;
```

```php
public function newInstance( string $name ): object;
```
Create or return a cached instance of the helper.

```php
public function set( string $name, Closure $definition ): void;
```
Register a helper via a zero-argument Closure. The Closure is invoked on
the first matching `newInstance()` call and its return value is cached.
Passing a new definition clears any cached instance so the next call to
`newInstance()` rebuilds it.

```php
protected function getDefaultServices(): array;
```
Default service recipes. Every entry is a Closure that returns a
fully-constructed helper instance. Services are built lazily and cached.

Source: https://docs.phalcon.io/5.13/api/phalcon_html/index.mdx
