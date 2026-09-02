---
title: "Phalcon Html"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Html

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Html\Attributes

Class

This class helps to work with HTML Attributes

@extends Collection&lt;mixed>

- [`Phalcon\Support\Collection`](/5.20/api/phalcon_support/#supportcollection)
- **`Phalcon\Html\Attributes`** - implements [`Phalcon\Html\Attributes\RenderInterface`](#htmlattributesrenderinterface)

`Phalcon\Html\Attributes\RenderInterface` · `Phalcon\Html\Escaper\AttributeEscaper` · `Phalcon\Html\Exceptions\AttributeNotRenderable` · `Phalcon\Support\Collection`

### Method Summary

<ApiItem href="#htmlattributes-__tostring" visibility="public" name="__toString" returnType="string" params={[]}>
Alias of the render method
</ApiItem>
<ApiItem href="#htmlattributes-render" visibility="public" name="render" returnType="string" params={[]}>
Render attributes as HTML attributes
</ApiItem>
<ApiItem href="#htmlattributes-renderattributes" visibility="protected" name="renderAttributes" returnType="string" params={[{"type":"array","name":"attributes","default":null}]}>
@todo remove this when we refactor forms. Maybe remove this class? Put it into traits
</ApiItem>

### Methods

<h4 id="htmlattributes-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

Alias of the render method

<h4 id="htmlattributes-render"><code>render()</code></h4>

```php
public function render(): string;
```

Render attributes as HTML attributes

<h4 id="htmlattributes-renderattributes"><code>renderAttributes()</code></h4>

```php
protected function renderAttributes( array $attributes ): string;
```

@todo remove this when we refactor forms. Maybe remove this class? Put it into traits

## Html\Attributes\AttributesInterface

Interface

Html Attributes Interface

- **`Phalcon\Html\Attributes\AttributesInterface`**

`Phalcon\Html\Attributes`

### Method Summary

<ApiItem href="#htmlattributesattributesinterface-getattributes" visibility="public" name="getAttributes" returnType="Attributes" params={[]}>
Get Attributes
</ApiItem>
<ApiItem href="#htmlattributesattributesinterface-setattributes" visibility="public" name="setAttributes" returnType="AttributesInterface" params={[{"type":"Attributes","name":"attributes","default":null}]}>
Set Attributes
</ApiItem>

### Methods

<h4 id="htmlattributesattributesinterface-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): Attributes;
```

Get Attributes

<h4 id="htmlattributesattributesinterface-setattributes"><code>setAttributes()</code></h4>

```php
public function setAttributes( Attributes $attributes ): AttributesInterface;
```

Set Attributes

## Html\Attributes\RenderInterface

Interface

Rendering interface for HTML attributes

- **`Phalcon\Html\Attributes\RenderInterface`**

### Method Summary

<ApiItem href="#htmlattributesrenderinterface-render" visibility="public" name="render" returnType="string" params={[]}>
Generate a string representation
</ApiItem>

### Methods

<h4 id="htmlattributesrenderinterface-render"><code>render()</code></h4>

```php
public function render(): string;
```

Generate a string representation

## Html\Breadcrumbs

Class

Phalcon\Html\Breadcrumbs

This component offers an easy way to create breadcrumbs for your application.
The resulting HTML when calling `render()` will have each breadcrumb enclosed
in `<dt>` tags, while the whole string is enclosed in `<dl>` tags.

- **`Phalcon\Html\Breadcrumbs`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlbreadcrumbs-add" visibility="public" name="add" returnType="static" params={[{"type":"string","name":"label","default":null},{"type":"string","name":"link","default":"\"\""}]}>
Adds a new crumb.
</ApiItem>
<ApiItem href="#htmlbreadcrumbs-clear" visibility="public" name="clear" returnType="void" params={[]}>
Clears the crumbs
</ApiItem>
<ApiItem href="#htmlbreadcrumbs-getseparator" visibility="public" name="getSeparator" returnType="string" params={[]}>
Returns the separator
</ApiItem>
<ApiItem href="#htmlbreadcrumbs-remove" visibility="public" name="remove" returnType="void" params={[{"type":"string","name":"link","default":null}]}>
Removes crumb by url.
</ApiItem>
<ApiItem href="#htmlbreadcrumbs-render" visibility="public" name="render" returnType="string" params={[]}>
Renders and outputs breadcrumbs based on previously set template.
</ApiItem>
<ApiItem href="#htmlbreadcrumbs-setseparator" visibility="public" name="setSeparator" returnType="static" params={[{"type":"string","name":"separator","default":null}]}>
Set the separator
</ApiItem>
<ApiItem href="#htmlbreadcrumbs-toarray" visibility="public" name="toArray" returnType="array" params={[]}>
Returns the internal breadcrumbs array
</ApiItem>

### Methods

<h4 id="htmlbreadcrumbs-add"><code>add()</code></h4>

```php
public function add(
string $label,
string $link = ""
): static;
```

Adds a new crumb.

```php
// Adding a crumb with a link
$breadcrumbs->add("Home", "/");

// Adding a crumb without a link (normally the last one)
$breadcrumbs->add("Users");
```

Crumbs are stored keyed by their link, so adding two crumbs that share
the same link - including two link-less crumbs, which share the empty
string key - keeps only the last one.

<h4 id="htmlbreadcrumbs-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Clears the crumbs

```php
$breadcrumbs->clear()
```

<h4 id="htmlbreadcrumbs-getseparator"><code>getSeparator()</code></h4>

```php
public function getSeparator(): string;
```

Returns the separator

<h4 id="htmlbreadcrumbs-remove"><code>remove()</code></h4>

```php
public function remove( string $link ): void;
```

Removes crumb by url.

```php
$breadcrumbs->remove("/admin/user/create");

// remove a crumb without an url (last link)
$breadcrumbs->remove();
```

<h4 id="htmlbreadcrumbs-render"><code>render()</code></h4>

```php
public function render(): string;
```

Renders and outputs breadcrumbs based on previously set template.

```php
echo $breadcrumbs->render();
```

<h4 id="htmlbreadcrumbs-setseparator"><code>setSeparator()</code></h4>

```php
public function setSeparator( string $separator ): static;
```

Set the separator

<h4 id="htmlbreadcrumbs-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the internal breadcrumbs array

## Html\Escaper

Class

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

- **`Phalcon\Html\Escaper`** - implements [`Phalcon\Html\Escaper\EscaperInterface`](#htmlescaperescaperinterface)

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Escaper\AttributeEscaper` · `Phalcon\Html\Escaper\CssEscaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Escaper\HtmlEscaper` · `Phalcon\Html\Escaper\JsEscaper` · `Phalcon\Html\Escaper\UrlEscaper`

### Method Summary

<ApiItem href="#htmlescaper-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"encoding","default":"\"utf-8\""},{"type":"int","name":"flags","default":"11"},{"type":"bool","name":"doubleEncode","default":"true"}]}>
Constructor. Accepts the legacy scalar params for backward compatibility
</ApiItem>
<ApiItem href="#htmlescaper-attributes" visibility="public" name="attributes" returnType="string" params={[{"type":"mixed","name":"input","default":"null"}]}>
Escapes a HTML attribute string or array. Delegates to `AttributeEscaper`.
</ApiItem>
<ApiItem href="#htmlescaper-css" visibility="public" name="css" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Escape CSS strings. Delegates to `CssEscaper`.
</ApiItem>
<ApiItem href="#htmlescaper-detectencoding" visibility="public" name="detectEncoding" returnType="string|null" params={[{"type":"string","name":"input","default":null}]}>
Detects the character encoding of a string. Delegates to `HtmlEscaper`.
</ApiItem>
<ApiItem href="#htmlescaper-escapecss" visibility="public" name="escapeCss" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescaper-escapehtml" visibility="public" name="escapeHtml" returnType="string" params={[{"type":"string|null","name":"input","default":"null"}]}>
</ApiItem>
<ApiItem href="#htmlescaper-escapehtmlattr" visibility="public" name="escapeHtmlAttr" returnType="string" params={[{"type":"string|null","name":"input","default":"null"}]}>
</ApiItem>
<ApiItem href="#htmlescaper-escapejs" visibility="public" name="escapeJs" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescaper-escapeurl" visibility="public" name="escapeUrl" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescaper-getattributeescaper" visibility="public" name="getAttributeEscaper" returnType="AttributeEscaper" params={[]}>
</ApiItem>
<ApiItem href="#htmlescaper-getcssescaper" visibility="public" name="getCssEscaper" returnType="CssEscaper" params={[]}>
</ApiItem>
<ApiItem href="#htmlescaper-getencoding" visibility="public" name="getEncoding" returnType="string" params={[]}>
Returns the encoding from the HtmlEscaper.
</ApiItem>
<ApiItem href="#htmlescaper-getflags" visibility="public" name="getFlags" returnType="int" params={[]}>
Returns the flags from the HtmlEscaper.
</ApiItem>
<ApiItem href="#htmlescaper-gethtmlescaper" visibility="public" name="getHtmlEscaper" returnType="HtmlEscaper" params={[]}>
</ApiItem>
<ApiItem href="#htmlescaper-getjsescaper" visibility="public" name="getJsEscaper" returnType="JsEscaper" params={[]}>
</ApiItem>
<ApiItem href="#htmlescaper-geturlescaper" visibility="public" name="getUrlEscaper" returnType="UrlEscaper" params={[]}>
</ApiItem>
<ApiItem href="#htmlescaper-html" visibility="public" name="html" returnType="string" params={[{"type":"string|null","name":"input","default":"null"}]}>
Escapes a HTML string. Delegates to `HtmlEscaper`.
</ApiItem>
<ApiItem href="#htmlescaper-js" visibility="public" name="js" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Escape javascript strings. Delegates to `JsEscaper`.
</ApiItem>
<ApiItem href="#htmlescaper-normalizeencoding" visibility="public" name="normalizeEncoding" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Normalizes a string's encoding to UTF-32. Delegates to `HtmlEscaper`.
</ApiItem>
<ApiItem href="#htmlescaper-setattributeescaper" visibility="public" name="setAttributeEscaper" returnType="static" params={[{"type":"AttributeEscaper","name":"escaper","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescaper-setcssescaper" visibility="public" name="setCssEscaper" returnType="static" params={[{"type":"CssEscaper","name":"escaper","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescaper-setdoubleencode" visibility="public" name="setDoubleEncode" returnType="static" params={[{"type":"bool","name":"doubleEncode","default":null}]}>
Sets the double_encode flag. Fans out to all sub-escapers.
</ApiItem>
<ApiItem href="#htmlescaper-setencoding" visibility="public" name="setEncoding" returnType="static" params={[{"type":"string","name":"encoding","default":null}]}>
Sets the encoding. Fans out to all sub-escapers.
</ApiItem>
<ApiItem href="#htmlescaper-setflags" visibility="public" name="setFlags" returnType="static" params={[{"type":"int","name":"flags","default":null}]}>
Sets the htmlspecialchars flags. Fans out to all sub-escapers.
</ApiItem>
<ApiItem href="#htmlescaper-sethtmlescaper" visibility="public" name="setHtmlEscaper" returnType="static" params={[{"type":"HtmlEscaper","name":"escaper","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescaper-sethtmlquotetype" visibility="public" name="setHtmlQuoteType" returnType="static" params={[{"type":"int","name":"flags","default":null}]}>
Sets the HTML quoting type for htmlspecialchars.
</ApiItem>
<ApiItem href="#htmlescaper-setjsescaper" visibility="public" name="setJsEscaper" returnType="static" params={[{"type":"JsEscaper","name":"escaper","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescaper-seturlescaper" visibility="public" name="setUrlEscaper" returnType="static" params={[{"type":"UrlEscaper","name":"escaper","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescaper-url" visibility="public" name="url" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Escapes a URL. Delegates to `UrlEscaper`.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="attributeEscaper" type="AttributeEscaper" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="cssEscaper" type="CssEscaper" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="htmlEscaper" type="HtmlEscaper" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="jsEscaper" type="JsEscaper" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="urlEscaper" type="UrlEscaper" default="">
</ApiItem>

### Methods

<h4 id="htmlescaper-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $encoding = "utf-8",
int $flags = 11,
bool $doubleEncode = true
);
```

Constructor. Accepts the legacy scalar params for backward compatibility
and fans them out to every sub-escaper so existing code keeps working.

<h4 id="htmlescaper-attributes"><code>attributes()</code></h4>

```php
public function attributes( mixed $input = null ): string;
```

Escapes a HTML attribute string or array. Delegates to `AttributeEscaper`.

<h4 id="htmlescaper-css"><code>css()</code></h4>

```php
public function css( string $input ): string;
```

Escape CSS strings. Delegates to `CssEscaper`.

<h4 id="htmlescaper-detectencoding"><code>detectEncoding()</code></h4>

```php
final public function detectEncoding( string $input ): string|null;
```

Detects the character encoding of a string. Delegates to `HtmlEscaper`.

<h4 id="htmlescaper-escapecss"><code>escapeCss()</code></h4>

```php
public function escapeCss( string $input ): string;
```

<h4 id="htmlescaper-escapehtml"><code>escapeHtml()</code></h4>

```php
public function escapeHtml( string|null $input = null ): string;
```

<h4 id="htmlescaper-escapehtmlattr"><code>escapeHtmlAttr()</code></h4>

```php
public function escapeHtmlAttr( string|null $input = null ): string;
```

<h4 id="htmlescaper-escapejs"><code>escapeJs()</code></h4>

```php
public function escapeJs( string $input ): string;
```

<h4 id="htmlescaper-escapeurl"><code>escapeUrl()</code></h4>

```php
public function escapeUrl( string $input ): string;
```

<h4 id="htmlescaper-getattributeescaper"><code>getAttributeEscaper()</code></h4>

```php
public function getAttributeEscaper(): AttributeEscaper;
```

<h4 id="htmlescaper-getcssescaper"><code>getCssEscaper()</code></h4>

```php
public function getCssEscaper(): CssEscaper;
```

<h4 id="htmlescaper-getencoding"><code>getEncoding()</code></h4>

```php
public function getEncoding(): string;
```

Returns the encoding from the HtmlEscaper.

<h4 id="htmlescaper-getflags"><code>getFlags()</code></h4>

```php
public function getFlags(): int;
```

Returns the flags from the HtmlEscaper.

<h4 id="htmlescaper-gethtmlescaper"><code>getHtmlEscaper()</code></h4>

```php
public function getHtmlEscaper(): HtmlEscaper;
```

<h4 id="htmlescaper-getjsescaper"><code>getJsEscaper()</code></h4>

```php
public function getJsEscaper(): JsEscaper;
```

<h4 id="htmlescaper-geturlescaper"><code>getUrlEscaper()</code></h4>

```php
public function getUrlEscaper(): UrlEscaper;
```

<h4 id="htmlescaper-html"><code>html()</code></h4>

```php
public function html( string|null $input = null ): string;
```

Escapes a HTML string. Delegates to `HtmlEscaper`.

<h4 id="htmlescaper-js"><code>js()</code></h4>

```php
public function js( string $input ): string;
```

Escape javascript strings. Delegates to `JsEscaper`.

<h4 id="htmlescaper-normalizeencoding"><code>normalizeEncoding()</code></h4>

```php
final public function normalizeEncoding( string $input ): string;
```

Normalizes a string's encoding to UTF-32. Delegates to `HtmlEscaper`.

<h4 id="htmlescaper-setattributeescaper"><code>setAttributeEscaper()</code></h4>

```php
public function setAttributeEscaper( AttributeEscaper $escaper ): static;
```

<h4 id="htmlescaper-setcssescaper"><code>setCssEscaper()</code></h4>

```php
public function setCssEscaper( CssEscaper $escaper ): static;
```

<h4 id="htmlescaper-setdoubleencode"><code>setDoubleEncode()</code></h4>

```php
public function setDoubleEncode( bool $doubleEncode ): static;
```

Sets the double_encode flag. Fans out to all sub-escapers.

<h4 id="htmlescaper-setencoding"><code>setEncoding()</code></h4>

```php
public function setEncoding( string $encoding ): static;
```

Sets the encoding. Fans out to all sub-escapers.

<h4 id="htmlescaper-setflags"><code>setFlags()</code></h4>

```php
public function setFlags( int $flags ): static;
```

Sets the htmlspecialchars flags. Fans out to all sub-escapers.

<h4 id="htmlescaper-sethtmlescaper"><code>setHtmlEscaper()</code></h4>

```php
public function setHtmlEscaper( HtmlEscaper $escaper ): static;
```

<h4 id="htmlescaper-sethtmlquotetype"><code>setHtmlQuoteType()</code></h4>

```php
public function setHtmlQuoteType( int $flags ): static;
```

Sets the HTML quoting type for htmlspecialchars.

<h4 id="htmlescaper-setjsescaper"><code>setJsEscaper()</code></h4>

```php
public function setJsEscaper( JsEscaper $escaper ): static;
```

<h4 id="htmlescaper-seturlescaper"><code>setUrlEscaper()</code></h4>

```php
public function setUrlEscaper( UrlEscaper $escaper ): static;
```

<h4 id="htmlescaper-url"><code>url()</code></h4>

```php
public function url( string $input ): string;
```

Escapes a URL. Delegates to `UrlEscaper`.

## Html\EscaperFactory

Class

Class EscaperFactory

- **`Phalcon\Html\EscaperFactory`**

### Method Summary

<ApiItem href="#htmlescaperfactory-newinstance" visibility="public" name="newInstance" returnType="Escaper" params={[]}>
Create a new instance of the object
</ApiItem>

### Methods

<h4 id="htmlescaperfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(): Escaper;
```

Create a new instance of the object

## Html\Escaper\AbstractEscaper

Abstract

Shared base for the per-context escaper objects.

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Html\Escaper\Traits\EscaperTrait directly instead of extending this.

- **`Phalcon\Html\Escaper\AbstractEscaper`**
- [`Phalcon\Html\Escaper\AttributeEscaper`](#htmlescaperattributeescaper)
- [`Phalcon\Html\Escaper\CssEscaper`](#htmlescapercssescaper)
- [`Phalcon\Html\Escaper\HtmlEscaper`](#htmlescaperhtmlescaper)
- [`Phalcon\Html\Escaper\JsEscaper`](#htmlescaperjsescaper)
- [`Phalcon\Html\Escaper\UrlEscaper`](#htmlescaperurlescaper)

`Phalcon\Html\Escaper\Traits\EscaperTrait`

## Html\Escaper\AttributeEscaper

Class

Escapes either a single attribute value (string) or an associative array
of attribute pairs. Boolean `true` becomes a bare key (e.g. `disabled`);
`false` and `null` skip the entry; arrays are joined with a space.

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
- **`Phalcon\Html\Escaper\AttributeEscaper`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlescaperattributeescaper-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"mixed","name":"input","default":"null"}]}>
</ApiItem>
<ApiItem href="#htmlescaperattributeescaper-escape" visibility="public" name="escape" returnType="string" params={[{"type":"mixed","name":"input","default":"null"}]}>
</ApiItem>
<ApiItem href="#htmlescaperattributeescaper-escapevalue" visibility="protected" name="escapeValue" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Encodes a single key/value via `htmlspecialchars`.
</ApiItem>

### Methods

<h4 id="htmlescaperattributeescaper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input = null ): string;
```

<h4 id="htmlescaperattributeescaper-escape"><code>escape()</code></h4>

```php
public function escape( mixed $input = null ): string;
```

<h4 id="htmlescaperattributeescaper-escapevalue"><code>escapeValue()</code></h4>

```php
protected function escapeValue( string $input ): string;
```

Encodes a single key/value via `htmlspecialchars`.

## Html\Escaper\CssEscaper

Class

Escapes a string for use inside a CSS value by replacing non-alphanumeric
characters with their hexadecimal escape sequence.

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
- **`Phalcon\Html\Escaper\CssEscaper`**

### Method Summary

<ApiItem href="#htmlescapercssescaper-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescapercssescaper-escape" visibility="public" name="escape" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="htmlescapercssescaper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input ): string;
```

<h4 id="htmlescapercssescaper-escape"><code>escape()</code></h4>

```php
public function escape( string $input ): string;
```

## Html\Escaper\EscaperInterface

Interface

Interface for Phalcon\Html\Escaper.

This declares the stable context-escaping surface. The concrete
\{@see \Phalcon\Html\Escaper\} facade also exposes members that are not part
of this contract - `setDoubleEncode()`, `getFlags()`, and the per-context
sub-escaper getters/setters (`getHtmlEscaper()`, `setAttributeEscaper()`,
and the rest). Type against the concrete class to reach those.

- **`Phalcon\Html\Escaper\EscaperInterface`**

### Method Summary

<ApiItem href="#htmlescaperescaperinterface-attributes" visibility="public" name="attributes" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Escapes a HTML attribute string.
</ApiItem>
<ApiItem href="#htmlescaperescaperinterface-css" visibility="public" name="css" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Escape CSS strings by replacing non-alphanumeric chars by their
</ApiItem>
<ApiItem href="#htmlescaperescaperinterface-getencoding" visibility="public" name="getEncoding" returnType="string" params={[]}>
Returns the internal encoding used by the escaper
</ApiItem>
<ApiItem href="#htmlescaperescaperinterface-html" visibility="public" name="html" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Escapes a HTML string.
</ApiItem>
<ApiItem href="#htmlescaperescaperinterface-js" visibility="public" name="js" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Escape Javascript strings by replacing non-alphanumeric chars by their
</ApiItem>
<ApiItem href="#htmlescaperescaperinterface-setencoding" visibility="public" name="setEncoding" returnType="EscaperInterface" params={[{"type":"string","name":"encoding","default":null}]}>
Sets the encoding to be used by the escaper
</ApiItem>
<ApiItem href="#htmlescaperescaperinterface-setflags" visibility="public" name="setFlags" returnType="EscaperInterface" params={[{"type":"int","name":"flags","default":null}]}>
Sets the HTML quoting type for htmlspecialchars
</ApiItem>
<ApiItem href="#htmlescaperescaperinterface-url" visibility="public" name="url" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Escapes a URL. Internally uses rawurlencode
</ApiItem>

### Methods

<h4 id="htmlescaperescaperinterface-attributes"><code>attributes()</code></h4>

```php
public function attributes( string $input ): string;
```

Escapes a HTML attribute string.

The concrete \{@see \Phalcon\Html\Escaper\} also accepts an array of
attribute pairs and tolerates `null`: an array is rendered as escaped
`key="value"` pairs, `null` and `false` values are skipped, and `true`
renders as a bare key. Callers typed against this interface pass a
string. The widened signature lands in the next major.

<h4 id="htmlescaperescaperinterface-css"><code>css()</code></h4>

```php
public function css( string $input ): string;
```

Escape CSS strings by replacing non-alphanumeric chars by their
hexadecimal representation

<h4 id="htmlescaperescaperinterface-getencoding"><code>getEncoding()</code></h4>

```php
public function getEncoding(): string;
```

Returns the internal encoding used by the escaper

<h4 id="htmlescaperescaperinterface-html"><code>html()</code></h4>

```php
public function html( string $input ): string;
```

Escapes a HTML string.

The concrete \{@see \Phalcon\Html\Escaper\} tolerates `null`, returning an
empty string for it. The nullable signature lands in the next major.

<h4 id="htmlescaperescaperinterface-js"><code>js()</code></h4>

```php
public function js( string $input ): string;
```

Escape Javascript strings by replacing non-alphanumeric chars by their
hexadecimal representation

<h4 id="htmlescaperescaperinterface-setencoding"><code>setEncoding()</code></h4>

```php
public function setEncoding( string $encoding ): EscaperInterface;
```

Sets the encoding to be used by the escaper

<h4 id="htmlescaperescaperinterface-setflags"><code>setFlags()</code></h4>

```php
public function setFlags( int $flags ): EscaperInterface;
```

Sets the HTML quoting type for htmlspecialchars

<h4 id="htmlescaperescaperinterface-url"><code>url()</code></h4>

```php
public function url( string $input ): string;
```

Escapes a URL. Internally uses rawurlencode

## Html\Escaper\Exception

Class

Class Exception

- `\Exception`
- **`Phalcon\Html\Escaper\Exception`**

## Html\Escaper\HtmlEscaper

Class

Escapes a string for use as HTML body content via `htmlspecialchars`.

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
- **`Phalcon\Html\Escaper\HtmlEscaper`**

### Method Summary

<ApiItem href="#htmlescaperhtmlescaper-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string|null","name":"input","default":"null"}]}>
</ApiItem>
<ApiItem href="#htmlescaperhtmlescaper-escape" visibility="public" name="escape" returnType="string" params={[{"type":"string|null","name":"input","default":"null"}]}>
</ApiItem>

### Methods

<h4 id="htmlescaperhtmlescaper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string|null $input = null ): string;
```

<h4 id="htmlescaperhtmlescaper-escape"><code>escape()</code></h4>

```php
public function escape( string|null $input = null ): string;
```

## Html\Escaper\JsEscaper

Class

Escapes a string for use inside a JavaScript context by replacing
non-alphanumeric characters with their hexadecimal escape sequence.

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
- **`Phalcon\Html\Escaper\JsEscaper`**

### Method Summary

<ApiItem href="#htmlescaperjsescaper-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescaperjsescaper-escape" visibility="public" name="escape" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="htmlescaperjsescaper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input ): string;
```

<h4 id="htmlescaperjsescaper-escape"><code>escape()</code></h4>

```php
public function escape( string $input ): string;
```

## Html\Escaper\Traits\EscaperTrait

Trait

Shared encoding/flags state and the encoding detection/normalization
utilities used by the per-context escaper objects (`HtmlEscaper`,
`AttributeEscaper`, `CssEscaper`, `JsEscaper`, `UrlEscaper`).

- **`Phalcon\Html\Escaper\Traits\EscaperTrait`**

[`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)

### Method Summary

<ApiItem href="#htmlescapertraitsescapertrait-detectencoding" visibility="public" name="detectEncoding" returnType="string|null" params={[{"type":"string","name":"input","default":null}]}>
Detects the character encoding of a string. Special-handling for
</ApiItem>
<ApiItem href="#htmlescapertraitsescapertrait-getdoubleencode" visibility="public" name="getDoubleEncode" returnType="bool" params={[]}>
</ApiItem>
<ApiItem href="#htmlescapertraitsescapertrait-getencoding" visibility="public" name="getEncoding" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#htmlescapertraitsescapertrait-getflags" visibility="public" name="getFlags" returnType="int" params={[]}>
</ApiItem>
<ApiItem href="#htmlescapertraitsescapertrait-normalizeencoding" visibility="public" name="normalizeEncoding" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Normalizes a string's encoding to UTF-32, used by the CSS and JS
</ApiItem>
<ApiItem href="#htmlescapertraitsescapertrait-setdoubleencode" visibility="public" name="setDoubleEncode" returnType="static" params={[{"type":"bool","name":"doubleEncode","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescapertraitsescapertrait-setencoding" visibility="public" name="setEncoding" returnType="static" params={[{"type":"string","name":"encoding","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescapertraitsescapertrait-setflags" visibility="public" name="setFlags" returnType="static" params={[{"type":"int","name":"flags","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="doubleEncode" type="bool" default="true">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="encoding" type="string" default="&quot;utf-8&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="flags" type="int" default="11">
ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401
</ApiItem>

### Methods

<h4 id="htmlescapertraitsescapertrait-detectencoding"><code>detectEncoding()</code></h4>

```php
final public function detectEncoding( string $input ): string|null;
```

Detects the character encoding of a string. Special-handling for
chr(172) and chr(128) to chr(159) which fail to be detected by
`mb_detect_encoding()`.

<h4 id="htmlescapertraitsescapertrait-getdoubleencode"><code>getDoubleEncode()</code></h4>

```php
public function getDoubleEncode(): bool;
```

<h4 id="htmlescapertraitsescapertrait-getencoding"><code>getEncoding()</code></h4>

```php
public function getEncoding(): string;
```

<h4 id="htmlescapertraitsescapertrait-getflags"><code>getFlags()</code></h4>

```php
public function getFlags(): int;
```

<h4 id="htmlescapertraitsescapertrait-normalizeencoding"><code>normalizeEncoding()</code></h4>

```php
final public function normalizeEncoding( string $input ): string;
```

Normalizes a string's encoding to UTF-32, used by the CSS and JS
escapers before invoking the C-level escape routines.

<h4 id="htmlescapertraitsescapertrait-setdoubleencode"><code>setDoubleEncode()</code></h4>

```php
public function setDoubleEncode( bool $doubleEncode ): static;
```

<h4 id="htmlescapertraitsescapertrait-setencoding"><code>setEncoding()</code></h4>

```php
public function setEncoding( string $encoding ): static;
```

<h4 id="htmlescapertraitsescapertrait-setflags"><code>setFlags()</code></h4>

```php
public function setFlags( int $flags ): static;
```

## Html\Escaper\UrlEscaper

Class

Escapes a string for use as a URL component via `rawurlencode`.

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
- **`Phalcon\Html\Escaper\UrlEscaper`**

`Phalcon\Traits\Php\UrlTrait`

### Method Summary

<ApiItem href="#htmlescaperurlescaper-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>
<ApiItem href="#htmlescaperurlescaper-escape" visibility="public" name="escape" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="htmlescaperurlescaper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input ): string;
```

<h4 id="htmlescaperurlescaper-escape"><code>escape()</code></h4>

```php
public function escape( string $input ): string;
```

## Html\Exception

Class

Class Exception

- `\Exception`
- **`Phalcon\Html\Exception`**
- [`Phalcon\Html\Exceptions\AttributeNotRenderable`](#htmlexceptionsattributenotrenderable)
- [`Phalcon\Html\Exceptions\FriendlyTitleConversionFailed`](#htmlexceptionsfriendlytitleconversionfailed)
- [`Phalcon\Html\Exceptions\ServiceNotRegistered`](#htmlexceptionsservicenotregistered)

## Html\Exceptions\AttributeNotRenderable

Class

- `\Exception`
- [`Phalcon\Html\Exception`](#htmlexception)
- **`Phalcon\Html\Exceptions\AttributeNotRenderable`**

`Phalcon\Html\Exception`

### Method Summary

<ApiItem href="#htmlexceptionsattributenotrenderable-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"key","default":null},{"type":"string","name":"type","default":null}]}>
</ApiItem>

### Methods

<h4 id="htmlexceptionsattributenotrenderable-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $key,
string $type
);
```

## Html\Exceptions\FriendlyTitleConversionFailed

Class

- `\Exception`
- [`Phalcon\Html\Exception`](#htmlexception)
- **`Phalcon\Html\Exceptions\FriendlyTitleConversionFailed`**

`Phalcon\Html\Exception`

### Method Summary

<ApiItem href="#htmlexceptionsfriendlytitleconversionfailed-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"message","default":null}]}>
</ApiItem>

### Methods

<h4 id="htmlexceptionsfriendlytitleconversionfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $message );
```

## Html\Exceptions\InvalidResultsetValue

Class

- `\InvalidArgumentException`
- **`Phalcon\Html\Exceptions\InvalidResultsetValue`**

`InvalidArgumentException`

### Method Summary

<ApiItem href="#htmlexceptionsinvalidresultsetvalue-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="htmlexceptionsinvalidresultsetvalue-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Html\Exceptions\ServiceNotRegistered

Class

- `\Exception`
- [`Phalcon\Html\Exception`](#htmlexception)
- **`Phalcon\Html\Exceptions\ServiceNotRegistered`**

`Phalcon\Html\Exception`

### Method Summary

<ApiItem href="#htmlexceptionsservicenotregistered-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="htmlexceptionsservicenotregistered-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Html\Exceptions\UsingRequiresTwoValues

Class

- `\InvalidArgumentException`
- **`Phalcon\Html\Exceptions\UsingRequiresTwoValues`**

`InvalidArgumentException`

### Method Summary

<ApiItem href="#htmlexceptionsusingrequirestwovalues-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="htmlexceptionsusingrequirestwovalues-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Html\Helper\AbstractHelper

Abstract

- **`Phalcon\Html\Helper\AbstractHelper`**
- [`Phalcon\Html\Helper\AbstractList`](#htmlhelperabstractlist)
- [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
- [`Phalcon\Html\Helper\Anchor`](#htmlhelperanchor)
- [`Phalcon\Html\Helper\Base`](#htmlhelperbase)
- [`Phalcon\Html\Helper\Body`](#htmlhelperbody)
- [`Phalcon\Html\Helper\Breadcrumbs`](#htmlhelperbreadcrumbs)
- [`Phalcon\Html\Helper\Button`](#htmlhelperbutton)
- [`Phalcon\Html\Helper\Close`](#htmlhelperclose)
- [`Phalcon\Html\Helper\Element`](#htmlhelperelement)
- [`Phalcon\Html\Helper\Form`](#htmlhelperform)
- [`Phalcon\Html\Helper\FriendlyTitle`](#htmlhelperfriendlytitle)
- [`Phalcon\Html\Helper\Img`](#htmlhelperimg)
- [`Phalcon\Html\Helper\Input\AbstractGroup`](#htmlhelperinputabstractgroup)
- [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
- [`Phalcon\Html\Helper\Label`](#htmlhelperlabel)
- [`Phalcon\Html\Helper\Preload`](#htmlhelperpreload)
- [`Phalcon\Html\Helper\Tag`](#htmlhelpertag)
- [`Phalcon\Html\Helper\Title`](#htmlhelpertitle)
- [`Phalcon\Html\Helper\VoidTag`](#htmlhelpervoidtag)

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception`

### Method Summary

<ApiItem href="#htmlhelperabstracthelper-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null},{"type":"Doctype|null","name":"doctype","default":"null"}]}>
AbstractHelper constructor.
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-close" visibility="protected" name="close" returnType="string" params={[{"type":"string","name":"tag","default":null},{"type":"bool","name":"raw","default":"false"}]}>
Produces a closing tag
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-escapename" visibility="protected" name="escapeName" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Removes the characters that end a tag or attribute name (white space,
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-indent" visibility="protected" name="indent" returnType="string" params={[]}>
Replicates the indent x times as per indentLevel
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-injectattribute" visibility="protected" name="injectAttribute" returnType="array" params={[{"type":"string","name":"key","default":null},{"type":"string","name":"value","default":null},{"type":"array","name":"attributes","default":null}]}>
Forces `$key => $value` to the front of the attributes array,
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-orderattributes" visibility="protected" name="orderAttributes" returnType="array" params={[{"type":"array","name":"overrides","default":null},{"type":"array","name":"attributes","default":null}]}>
Keeps all the attributes sorted - same order all the time
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-renderarrayelements" visibility="protected" name="renderArrayElements" returnType="string" params={[{"type":"array","name":"elements","default":null},{"type":"string","name":"delimiter","default":null}]}>
Traverses an array and calls the method defined in the first element
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-renderattributes" visibility="protected" name="renderAttributes" returnType="string" params={[{"type":"array","name":"attributes","default":null}]}>
Renders all the attributes
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-renderelement" visibility="protected" name="renderElement" returnType="string" params={[{"type":"string","name":"tag","default":null},{"type":"array","name":"attributes","default":"[]"}]}>
Renders an element
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-renderfullelement" visibility="protected" name="renderFullElement" returnType="string" params={[{"type":"string","name":"tag","default":null},{"type":"string","name":"text","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"bool","name":"raw","default":"false"}]}>
Renders an element
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-rendertag" visibility="protected" name="renderTag" returnType="string" params={[{"type":"string","name":"tag","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"string","name":"close","default":"\"\""}]}>
Renders a tag
</ApiItem>
<ApiItem href="#htmlhelperabstracthelper-selfclose" visibility="protected" name="selfClose" returnType="string" params={[{"type":"string","name":"tag","default":null},{"type":"array","name":"attributes","default":"[]"}]}>
Produces a self close tag i.e. <img />
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="delimiter" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="doctype" type="Doctype|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="escaper" type="EscaperInterface" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="indent" type="string" default="&quot;    &quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="indentLevel" type="int" default="1">
</ApiItem>

### Methods

<h4 id="htmlhelperabstracthelper-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype|null $doctype = null
);
```

AbstractHelper constructor.

<h4 id="htmlhelperabstracthelper-close"><code>close()</code></h4>

```php
protected function close(
string $tag,
bool $raw = false
): string;
```

Produces a closing tag

<h4 id="htmlhelperabstracthelper-escapename"><code>escapeName()</code></h4>

```php
protected function escapeName( string $name ): string;
```

Removes the characters that end a tag or attribute name (white space,
"/", "=") and escapes the rest, so a crafted name cannot break out of
its position.

<h4 id="htmlhelperabstracthelper-indent"><code>indent()</code></h4>

```php
protected function indent(): string;
```

Replicates the indent x times as per indentLevel

<h4 id="htmlhelperabstracthelper-injectattribute"><code>injectAttribute()</code></h4>

```php
protected function injectAttribute(
string $key,
string $value,
array $attributes
): array;
```

Forces `$key => $value` to the front of the attributes array,
removing any existing entry for that key. This guarantees the
attribute is always present and appears first in the rendered output.

<h4 id="htmlhelperabstracthelper-orderattributes"><code>orderAttributes()</code></h4>

```php
protected function orderAttributes(
array $overrides,
array $attributes
): array;
```

Keeps all the attributes sorted - same order all the time

<h4 id="htmlhelperabstracthelper-renderarrayelements"><code>renderArrayElements()</code></h4>

```php
protected function renderArrayElements(
array $elements,
string $delimiter
): string;
```

Traverses an array and calls the method defined in the first element
with attributes as the second, returning the resulting string

<h4 id="htmlhelperabstracthelper-renderattributes"><code>renderAttributes()</code></h4>

```php
protected function renderAttributes( array $attributes ): string;
```

Renders all the attributes

<h4 id="htmlhelperabstracthelper-renderelement"><code>renderElement()</code></h4>

```php
protected function renderElement(
string $tag,
array $attributes = []
): string;
```

Renders an element

<h4 id="htmlhelperabstracthelper-renderfullelement"><code>renderFullElement()</code></h4>

```php
protected function renderFullElement(
string $tag,
string $text,
array $attributes = [],
bool $raw = false
): string;
```

Renders an element

<h4 id="htmlhelperabstracthelper-rendertag"><code>renderTag()</code></h4>

```php
protected function renderTag(
string $tag,
array $attributes = [],
string $close = ""
): string;
```

Renders a tag

<h4 id="htmlhelperabstracthelper-selfclose"><code>selfClose()</code></h4>

```php
protected function selfClose(
string $tag,
array $attributes = []
): string;
```

Produces a self close tag i.e. <img />

## Html\Helper\AbstractList

Abstract

Class AbstractList

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\AbstractList`**
- [`Phalcon\Html\Helper\Input\Select`](#htmlhelperinputselect)
- [`Phalcon\Html\Helper\Ol`](#htmlhelperol)

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperabstractlist-__invoke" visibility="public" name="__invoke" returnType="static" params={[{"type":"string","name":"indent","default":"\"    \""},{"type":"string|null","name":"delimiter","default":"null"},{"type":"array","name":"attributes","default":"[]"}]}>
</ApiItem>
<ApiItem href="#htmlhelperabstractlist-__tostring" visibility="public" name="__toString" returnType="" params={[]}>
Generates and returns the HTML for the list.
</ApiItem>
<ApiItem href="#htmlhelperabstractlist-gettag" visibility="protected" name="getTag" returnType="string" params={[]}>
Returns the tag name.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="attributes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="elementTag" type="string" default="&quot;li&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="store" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="htmlhelperabstractlist-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $indent = "    ",
string|null $delimiter = null,
array $attributes = []
): static;
```

<h4 id="htmlhelperabstractlist-__tostring"><code>__toString()</code></h4>

```php
public function __toString();
```

Generates and returns the HTML for the list.

<h4 id="htmlhelperabstractlist-gettag"><code>getTag()</code></h4>

```php
abstract protected function getTag(): string;
```

Returns the tag name.

## Html\Helper\AbstractSeries

Abstract

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\AbstractSeries`**
- [`Phalcon\Html\Helper\Meta`](#htmlhelpermeta)
- [`Phalcon\Html\Helper\Script`](#htmlhelperscript)
- [`Phalcon\Html\Helper\Style`](#htmlhelperstyle)

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperabstractseries-__invoke" visibility="public" name="__invoke" returnType="static" params={[{"type":"string","name":"indent","default":"\"    \""},{"type":"string|null","name":"delimiter","default":"null"}]}>
</ApiItem>
<ApiItem href="#htmlhelperabstractseries-__tostring" visibility="public" name="__toString" returnType="" params={[]}>
Generates and returns the HTML for the list. Entries are sorted by
</ApiItem>
<ApiItem href="#htmlhelperabstractseries-reset" visibility="public" name="reset" returnType="static" params={[]}>
Resets the internal store.
</ApiItem>
<ApiItem href="#htmlhelperabstractseries-gettag" visibility="protected" name="getTag" returnType="string" params={[]}>
Returns the tag name.
</ApiItem>
<ApiItem href="#htmlhelperabstractseries-pushorplace" visibility="protected" name="pushOrPlace" returnType="void" params={[{"type":"array","name":"entry","default":null},{"type":"int","name":"position","default":"-1"}]}>
Appends an entry to the store, optionally at a specific integer
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="attributes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="store" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="htmlhelperabstractseries-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $indent = "    ",
string|null $delimiter = null
): static;
```

<h4 id="htmlhelperabstractseries-__tostring"><code>__toString()</code></h4>

```php
public function __toString();
```

Generates and returns the HTML for the list. Entries are sorted by
their integer key first, so an asset registered with a lower position
renders before one registered with a higher position regardless of
registration order.

<h4 id="htmlhelperabstractseries-reset"><code>reset()</code></h4>

```php
public function reset(): static;
```

Resets the internal store.

<h4 id="htmlhelperabstractseries-gettag"><code>getTag()</code></h4>

```php
abstract protected function getTag(): string;
```

Returns the tag name.

<h4 id="htmlhelperabstractseries-pushorplace"><code>pushOrPlace()</code></h4>

```php
protected function pushOrPlace(
array $entry,
int $position = -1
): void;
```

Appends an entry to the store, optionally at a specific integer
position. When `$pos` is negative the entry is pushed onto the next
available auto-increment slot. When `$pos` is non-negative the entry
is placed at that key, advancing past any already-occupied slots so
existing entries are not overwritten. The store is ksort()ed in
`__toString`, so positions act as a sort key, not a strict address.

## Html\Helper\Anchor

Class

Class Anchor

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Anchor`**

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Escaper\EscaperInterface`

### Method Summary

<ApiItem href="#htmlhelperanchor-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null},{"type":"Doctype|null","name":"doctype","default":"null"},{"type":"bool","name":"forceRaw","default":"false"}]}>
</ApiItem>
<ApiItem href="#htmlhelperanchor-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"href","default":null},{"type":"string","name":"text","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"bool","name":"raw","default":"false"}]}>
Produce a `<a>` tag
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="forceRaw" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="htmlhelperanchor-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype|null $doctype = null,
bool $forceRaw = false
);
```

<h4 id="htmlhelperanchor-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $href,
string $text,
array $attributes = [],
bool $raw = false
): string;
```

Produce a `<a>` tag

## Html\Helper\Base

Class

Class Base

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Base`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperbase-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string|null","name":"href","default":"null"},{"type":"array","name":"attributes","default":"[]"}]}>
Produce a `<base/>` tag.
</ApiItem>

### Methods

<h4 id="htmlhelperbase-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string|null $href = null,
array $attributes = []
): string;
```

Produce a `<base/>` tag.

## Html\Helper\Body

Class

Class Body

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Body`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperbody-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"array","name":"attributes","default":"[]"}]}>
Produce a `<body>` tag.
</ApiItem>

### Methods

<h4 id="htmlhelperbody-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( array $attributes = [] ): string;
```

Produce a `<body>` tag.

## Html\Helper\Breadcrumbs

Class

This component offers an easy way to create breadcrumbs for your application.
The resulting HTML when calling `render()` will have each breadcrumb enclosed
in `<li>` tags, while the whole string is enclosed in `<nav>` and `<ol>` tags.

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Breadcrumbs`**

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Traits\Support\Helper\Str\InterpolateTrait`

### Method Summary

<ApiItem href="#htmlhelperbreadcrumbs-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null},{"type":"UrlInterface|null","name":"url","default":"null"}]}>
AbstractHelper constructor.
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-__invoke" visibility="public" name="__invoke" returnType="static" params={[{"type":"string","name":"indent","default":"\"    \""},{"type":"string|null","name":"delimiter","default":"null"}]}>
Sets the indent and delimiter and returns the object back.
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-add" visibility="public" name="add" returnType="static" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"link","default":"\"\""},{"type":"string","name":"icon","default":"\"\""},{"type":"array","name":"attributes","default":"[]"}]}>
Adds a new crumb.
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-clear" visibility="public" name="clear" returnType="void" params={[]}>
Clears the crumbs
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-clearattributes" visibility="public" name="clearAttributes" returnType="static" params={[]}>
Clear the attributes of the parent element
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-getattributes" visibility="public" name="getAttributes" returnType="array" params={[]}>
Get the attributes of the parent element
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-getprefix" visibility="public" name="getPrefix" returnType="string" params={[]}>
Returns the link prefix.
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-getseparator" visibility="public" name="getSeparator" returnType="string" params={[]}>
Returns the separator.
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-gettemplate" visibility="public" name="getTemplate" returnType="array" params={[]}>
Return the current template.
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-remove" visibility="public" name="remove" returnType="void" params={[{"type":"int","name":"index","default":null}]}>
Removes crumb by url.
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-render" visibility="public" name="render" returnType="string" params={[]}>
Renders and outputs breadcrumbs based on previously set template.
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-setattributes" visibility="public" name="setAttributes" returnType="static" params={[{"type":"array","name":"attributes","default":null}]}>
Set the attributes for the parent element
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-setprefix" visibility="public" name="setPrefix" returnType="static" params={[{"type":"string","name":"prefix","default":null}]}>
Set the link prefix prepended to every non-empty link during rendering.
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-setseparator" visibility="public" name="setSeparator" returnType="static" params={[{"type":"string","name":"separator","default":null}]}>
Set the separator
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-settemplate" visibility="public" name="setTemplate" returnType="static" params={[{"type":"string","name":"main","default":null},{"type":"string","name":"line","default":null},{"type":"string","name":"last","default":null}]}>
Set the HTML template
</ApiItem>
<ApiItem href="#htmlhelperbreadcrumbs-toarray" visibility="public" name="toArray" returnType="array" params={[]}>
Returns the internal breadcrumbs array
</ApiItem>

### Methods

<h4 id="htmlhelperbreadcrumbs-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
UrlInterface|null $url = null
);
```

AbstractHelper constructor.

<h4 id="htmlhelperbreadcrumbs-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $indent = "    ",
string|null $delimiter = null
): static;
```

Sets the indent and delimiter and returns the object back.

<h4 id="htmlhelperbreadcrumbs-add"><code>add()</code></h4>

```php
public function add(
string $text,
string $link = "",
string $icon = "",
array $attributes = []
): static;
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

<h4 id="htmlhelperbreadcrumbs-clear"><code>clear()</code></h4>

```php
public function clear(): void;
```

Clears the crumbs

```php
$breadcrumbs->clear()
```

<h4 id="htmlhelperbreadcrumbs-clearattributes"><code>clearAttributes()</code></h4>

```php
public function clearAttributes(): static;
```

Clear the attributes of the parent element

<h4 id="htmlhelperbreadcrumbs-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Get the attributes of the parent element

<h4 id="htmlhelperbreadcrumbs-getprefix"><code>getPrefix()</code></h4>

```php
public function getPrefix(): string;
```

Returns the link prefix.

<h4 id="htmlhelperbreadcrumbs-getseparator"><code>getSeparator()</code></h4>

```php
public function getSeparator(): string;
```

Returns the separator.

<h4 id="htmlhelperbreadcrumbs-gettemplate"><code>getTemplate()</code></h4>

```php
public function getTemplate(): array;
```

Return the current template.

<h4 id="htmlhelperbreadcrumbs-remove"><code>remove()</code></h4>

```php
public function remove( int $index ): void;
```

Removes crumb by url.

```php
// Remove the second element
$breadcrumbs->remove(2);
```

<h4 id="htmlhelperbreadcrumbs-render"><code>render()</code></h4>

```php
public function render(): string;
```

Renders and outputs breadcrumbs based on previously set template.

```php
echo $breadcrumbs->render();
```

<h4 id="htmlhelperbreadcrumbs-setattributes"><code>setAttributes()</code></h4>

```php
public function setAttributes( array $attributes ): static;
```

Set the attributes for the parent element

<h4 id="htmlhelperbreadcrumbs-setprefix"><code>setPrefix()</code></h4>

```php
public function setPrefix( string $prefix ): static;
```

Set the link prefix prepended to every non-empty link during rendering.
When a Url service was injected, calling this method replaces it.

<h4 id="htmlhelperbreadcrumbs-setseparator"><code>setSeparator()</code></h4>

```php
public function setSeparator( string $separator ): static;
```

Set the separator

<h4 id="htmlhelperbreadcrumbs-settemplate"><code>setTemplate()</code></h4>

```php
public function setTemplate(
string $main,
string $line,
string $last
): static;
```

Set the HTML template

<h4 id="htmlhelperbreadcrumbs-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the internal breadcrumbs array

## Html\Helper\Button

Class

Class Button

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Button`**

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Escaper\EscaperInterface`

### Method Summary

<ApiItem href="#htmlhelperbutton-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null},{"type":"Doctype|null","name":"doctype","default":"null"},{"type":"bool","name":"forceRaw","default":"false"}]}>
</ApiItem>
<ApiItem href="#htmlhelperbutton-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"bool","name":"raw","default":"false"}]}>
Produce a `<button>` tag.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="forceRaw" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="htmlhelperbutton-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype|null $doctype = null,
bool $forceRaw = false
);
```

<h4 id="htmlhelperbutton-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
array $attributes = [],
bool $raw = false
): string;
```

Produce a `<button>` tag.

## Html\Helper\Close

Class

Class Close

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Close`**

### Method Summary

<ApiItem href="#htmlhelperclose-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"tag","default":null},{"type":"bool","name":"raw","default":"false"}]}>
Produce a `</...>` tag.
</ApiItem>

### Methods

<h4 id="htmlhelperclose-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $tag,
bool $raw = false
): string;
```

Produce a `</...>` tag.

## Html\Helper\Doctype

Class

Creates Doctype tags

- **`Phalcon\Html\Helper\Doctype`**

### Method Summary

<ApiItem href="#htmlhelperdoctype-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>
<ApiItem href="#htmlhelperdoctype-__invoke" visibility="public" name="__invoke" returnType="static" params={[{"type":"int","name":"type","default":"self::HTML5"},{"type":"string","name":"delimiter","default":"\"\\n\""}]}>
Produce a `<doctype>` tag
</ApiItem>
<ApiItem href="#htmlhelperdoctype-__tostring" visibility="public" name="__toString" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#htmlhelperdoctype-gettype" visibility="public" name="getType" returnType="int" params={[]}>
</ApiItem>

### Constants

<ApiItem kind="constant" name="HTML32" type="int" default="1">
</ApiItem>
<ApiItem kind="constant" name="HTML401_FRAMESET" type="int" default="4">
</ApiItem>
<ApiItem kind="constant" name="HTML401_STRICT" type="int" default="2">
</ApiItem>
<ApiItem kind="constant" name="HTML401_TRANSITIONAL" type="int" default="3">
</ApiItem>
<ApiItem kind="constant" name="HTML5" type="int" default="5">
</ApiItem>
<ApiItem kind="constant" name="XHTML10_FRAMESET" type="int" default="8">
</ApiItem>
<ApiItem kind="constant" name="XHTML10_STRICT" type="int" default="6">
</ApiItem>
<ApiItem kind="constant" name="XHTML10_TRANSITIONAL" type="int" default="7">
</ApiItem>
<ApiItem kind="constant" name="XHTML11" type="int" default="9">
</ApiItem>
<ApiItem kind="constant" name="XHTML20" type="int" default="10">
</ApiItem>
<ApiItem kind="constant" name="XHTML5" type="int" default="11">
</ApiItem>

### Methods

<h4 id="htmlhelperdoctype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

<h4 id="htmlhelperdoctype-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
int $type = self::HTML5,
string $delimiter = "\n"
): static;
```

Produce a `<doctype>` tag

<h4 id="htmlhelperdoctype-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

<h4 id="htmlhelperdoctype-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

## Html\Helper\Element

Class

Class Element

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Element`**

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Escaper\EscaperInterface`

### Method Summary

<ApiItem href="#htmlhelperelement-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null},{"type":"Doctype|null","name":"doctype","default":"null"},{"type":"bool","name":"forceRaw","default":"false"}]}>
</ApiItem>
<ApiItem href="#htmlhelperelement-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"tag","default":null},{"type":"string","name":"text","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"bool","name":"raw","default":"false"}]}>
Produce a tag.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="forceRaw" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="htmlhelperelement-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype|null $doctype = null,
bool $forceRaw = false
);
```

<h4 id="htmlhelperelement-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $tag,
string $text,
array $attributes = [],
bool $raw = false
): string;
```

Produce a tag.

## Html\Helper\Form

Class

Class Form

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Form`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperform-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"array","name":"attributes","default":"[]"}]}>
Produce a `<form>` tag.
</ApiItem>

### Methods

<h4 id="htmlhelperform-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( array $attributes = [] ): string;
```

Produce a `<form>` tag.

## Html\Helper\FriendlyTitle

Class

Converts text to a URL-friendly slug.

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\FriendlyTitle`**

`Exception` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exceptions\FriendlyTitleConversionFailed` · `Phalcon\Support\Helper\Str\Friendly`

### Method Summary

<ApiItem href="#htmlhelperfriendlytitle-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null}]}>
</ApiItem>
<ApiItem href="#htmlhelperfriendlytitle-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"separator","default":"\"-\""},{"type":"bool","name":"lowercase","default":"true"},{"type":"mixed","name":"replace","default":"null"}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="friendly" type="Friendly" default="">
</ApiItem>

### Methods

<h4 id="htmlhelperfriendlytitle-__construct"><code>__construct()</code></h4>

```php
public function __construct( EscaperInterface $escaper );
```

<h4 id="htmlhelperfriendlytitle-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $text,
string $separator = "-",
bool $lowercase = true,
mixed $replace = null
): string;
```

## Html\Helper\Img

Class

Class Img

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Img`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperimg-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"src","default":null},{"type":"array","name":"attributes","default":"[]"}]}>
Produce a `<img>` tag.
</ApiItem>

### Methods

<h4 id="htmlhelperimg-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $src,
array $attributes = []
): string;
```

Produce a `<img>` tag.

## Html\Helper\Input\AbstractChecked

Abstract

Shared base for inputs that can be checked: `<input type="checkbox">` and
`<input type="radio">`. Holds the optional surrounding `<label>` markup,
the `unchecked` companion hidden input, and the rule that decides whether
the rendered tag carries `checked="checked"`.

The match between `checked` and `value` is loose (`==`) by default so that
mixed int/string form input round-trips correctly (e.g. `value=0` against
`checked="0"`). Strict (`===`) matching is available via `strict(true)`.

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
- **`Phalcon\Html\Helper\Input\AbstractChecked`**
- [`Phalcon\Html\Helper\Input\Checkbox`](#htmlhelperinputcheckbox)
- [`Phalcon\Html\Helper\Input\Radio`](#htmlhelperinputradio)

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperinputabstractchecked-__tostring" visibility="public" name="__toString" returnType="" params={[]}>
Returns the HTML for the input, optionally surrounded by the label
</ApiItem>
<ApiItem href="#htmlhelperinputabstractchecked-label" visibility="public" name="label" returnType="static" params={[{"type":"array","name":"attributes","default":"[]"}]}>
Attaches a wrapping `<label>` to the element. The supplied attributes
</ApiItem>
<ApiItem href="#htmlhelperinputabstractchecked-strict" visibility="public" name="strict" returnType="static" params={[{"type":"bool","name":"flag","default":"true"}]}>
Toggles strict (`===`) comparison between the `checked` attribute and
</ApiItem>
<ApiItem href="#htmlhelperinputabstractchecked-processchecked" visibility="protected" name="processChecked" returnType="void" params={[]}>
Decides whether the rendered tag carries `checked="checked"`. Two
</ApiItem>
<ApiItem href="#htmlhelperinputabstractchecked-processunchecked" visibility="protected" name="processUnchecked" returnType="string" params={[]}>
Returns the markup for the optional hidden companion input that lets
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="label" type="array" default="[...]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="strict" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="htmlhelperinputabstractchecked-__tostring"><code>__toString()</code></h4>

```php
public function __toString();
```

Returns the HTML for the input, optionally surrounded by the label
fragment configured via `label()` and preceded by the hidden companion
input emitted when an `unchecked` attribute is supplied.

<h4 id="htmlhelperinputabstractchecked-label"><code>label()</code></h4>

```php
public function label( array $attributes = [] ): static;
```

Attaches a wrapping `<label>` to the element. The supplied attributes
are merged with a default `for` pointing at the input's `id`. A `text`
pseudo-attribute, if present, becomes the label text and is stripped
from the rendered attributes.

<h4 id="htmlhelperinputabstractchecked-strict"><code>strict()</code></h4>

```php
public function strict( bool $flag = true ): static;
```

Toggles strict (`===`) comparison between the `checked` attribute and
the `value` attribute when deciding whether to render the input as
checked. Defaults to loose (`==`), which matches typical form-input
round-tripping where types may differ between the source data and the
value rendered into the markup.

<h4 id="htmlhelperinputabstractchecked-processchecked"><code>processChecked()</code></h4>

```php
protected function processChecked(): void;
```

Decides whether the rendered tag carries `checked="checked"`. Two
paths qualify as checked: an unconditional opt-in via
`["checked" => "checked"]` (case-insensitive) or `["checked" => true]`,
and a value-match path where the supplied `checked` attribute equals
the input's `value` (`==` by default, `===` under `strict(true)`).

<h4 id="htmlhelperinputabstractchecked-processunchecked"><code>processUnchecked()</code></h4>

```php
protected function processUnchecked(): string;
```

Returns the markup for the optional hidden companion input that lets
a checkbox/radio submit a value when unchecked.

## Html\Helper\Input\AbstractGroup

Abstract

Shared base for rendering a group of same-named inputs (checkbox or radio)
from an options array.

Each option in the $options array may be either:
  - a scalar string label:  ['value' => 'Label text']
  - a rich definition:      ['value' => ['label' => 'Label text', 'disabled' => true, ...]]

The $checked parameter is resolved by the concrete subclass:
  - CheckboxGroup compares against an array of selected values
  - RadioGroup compares against a single scalar value

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Input\AbstractGroup`**
- [`Phalcon\Html\Helper\Input\CheckboxGroup`](#htmlhelperinputcheckboxgroup)
- [`Phalcon\Html\Helper\Input\RadioGroup`](#htmlhelperinputradiogroup)

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Helper\AbstractHelper`

### Method Summary

<ApiItem href="#htmlhelperinputabstractgroup-__invoke" visibility="public" name="__invoke" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"options","default":null},{"type":"mixed","name":"checked","default":"null"},{"type":"array","name":"attributes","default":"[]"}]}>
</ApiItem>
<ApiItem href="#htmlhelperinputabstractgroup-__tostring" visibility="public" name="__toString" returnType="string" params={[]}>
Renders the group of inputs as a string.
</ApiItem>
<ApiItem href="#htmlhelperinputabstractgroup-ischecked" visibility="protected" name="isChecked" returnType="bool" params={[{"type":"string","name":"value","default":null}]}>
Determines whether the given value is considered checked.
</ApiItem>
<ApiItem href="#htmlhelperinputabstractgroup-renderitem" visibility="protected" name="renderItem" returnType="string" params={[{"type":"string","name":"value","default":null},{"type":"mixed","name":"definition","default":null}]}>
Renders a single input + optional label pair.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="checked" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="sharedAttributes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;checkbox&quot;">
</ApiItem>

### Methods

<h4 id="htmlhelperinputabstractgroup-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $name,
array $options,
mixed $checked = null,
array $attributes = []
): static;
```

<h4 id="htmlhelperinputabstractgroup-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

Renders the group of inputs as a string.

<h4 id="htmlhelperinputabstractgroup-ischecked"><code>isChecked()</code></h4>

```php
abstract protected function isChecked( string $value ): bool;
```

Determines whether the given value is considered checked.

<h4 id="htmlhelperinputabstractgroup-renderitem"><code>renderItem()</code></h4>

```php
protected function renderItem(
string $value,
mixed $definition
): string;
```

Renders a single input + optional label pair.

## Html\Helper\Input\AbstractInput

Abstract

Class AbstractInput

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Input\AbstractInput`**
- [`Phalcon\Html\Helper\Input\AbstractChecked`](#htmlhelperinputabstractchecked)
- [`Phalcon\Html\Helper\Input\Generic`](#htmlhelperinputgeneric)
- [`Phalcon\Html\Helper\Input\Textarea`](#htmlhelperinputtextarea)

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Helper\AbstractHelper` · `Phalcon\Html\Helper\Doctype`

### Method Summary

<ApiItem href="#htmlhelperinputabstractinput-__invoke" visibility="public" name="__invoke" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"string|null","name":"value","default":"null"},{"type":"array","name":"attributes","default":"[]"}]}>
</ApiItem>
<ApiItem href="#htmlhelperinputabstractinput-__tostring" visibility="public" name="__toString" returnType="" params={[]}>
Returns the HTML for the input.
</ApiItem>
<ApiItem href="#htmlhelperinputabstractinput-setvalue" visibility="public" name="setValue" returnType="static" params={[{"type":"string|null","name":"value","default":"null"}]}>
Sets the value of the element
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="attributes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;text&quot;">
</ApiItem>

### Methods

<h4 id="htmlhelperinputabstractinput-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $name,
string|null $value = null,
array $attributes = []
): static;
```

<h4 id="htmlhelperinputabstractinput-__tostring"><code>__toString()</code></h4>

```php
public function __toString();
```

Returns the HTML for the input.

<h4 id="htmlhelperinputabstractinput-setvalue"><code>setValue()</code></h4>

```php
public function setValue( string|null $value = null ): static;
```

Sets the value of the element

## Html\Helper\Input\Checkbox

Class

Renders an `<input type="checkbox">`. Behavior (label wrapping, `unchecked`
companion, loose-by-default `checked` match) lives in `AbstractChecked`.

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
- [`Phalcon\Html\Helper\Input\AbstractChecked`](#htmlhelperinputabstractchecked)
- **`Phalcon\Html\Helper\Input\Checkbox`**

### Properties

<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;checkbox&quot;">
</ApiItem>

## Html\Helper\Input\CheckboxGroup

Class

Renders a group of `<input type="checkbox">` elements from an options array.

The $checked parameter should be an array of selected values, or a single
scalar value (treated as a one-element array).

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\Input\AbstractGroup`](#htmlhelperinputabstractgroup)
- **`Phalcon\Html\Helper\Input\CheckboxGroup`**

### Method Summary

<ApiItem href="#htmlhelperinputcheckboxgroup-ischecked" visibility="protected" name="isChecked" returnType="bool" params={[{"type":"string","name":"value","default":null}]}>
Returns true when $value appears in the checked list.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;checkbox&quot;">
</ApiItem>

### Methods

<h4 id="htmlhelperinputcheckboxgroup-ischecked"><code>isChecked()</code></h4>

```php
protected function isChecked( string $value ): bool;
```

Returns true when $value appears in the checked list.

## Html\Helper\Input\Generic

Class

Generic input helper. The HTML5 `type` attribute is supplied via the
constructor, which means the `TagFactory` can register a single class
for all type-string-only inputs (color, date, email, hidden, number, ...)
and differentiate them through the recipe map. The type can also be
changed after construction via `setType()`.

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
- **`Phalcon\Html\Helper\Input\Generic`**

`Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Helper\Doctype`

### Method Summary

<ApiItem href="#htmlhelperinputgeneric-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null},{"type":"Doctype|null","name":"doctype","default":"null"},{"type":"string","name":"type","default":"\"text\""}]}>
</ApiItem>
<ApiItem href="#htmlhelperinputgeneric-settype" visibility="public" name="setType" returnType="AbstractInput" params={[{"type":"string","name":"type","default":null}]}>
Sets the type of the input.
</ApiItem>

### Methods

<h4 id="htmlhelperinputgeneric-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype|null $doctype = null,
string $type = "text"
);
```

<h4 id="htmlhelperinputgeneric-settype"><code>setType()</code></h4>

```php
public function setType( string $type ): AbstractInput;
```

Sets the type of the input.

## Html\Helper\Input\Radio

Class

Renders an `<input type="radio">`. Behavior (label wrapping, `unchecked`
companion, loose-by-default `checked` match) lives in `AbstractChecked`.

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
- [`Phalcon\Html\Helper\Input\AbstractChecked`](#htmlhelperinputabstractchecked)
- **`Phalcon\Html\Helper\Input\Radio`**

### Properties

<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;radio&quot;">
</ApiItem>

## Html\Helper\Input\RadioGroup

Class

Renders a group of `<input type="radio">` elements from an options array.

The $checked parameter should be a single scalar value matching the selected
option's value attribute.

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\Input\AbstractGroup`](#htmlhelperinputabstractgroup)
- **`Phalcon\Html\Helper\Input\RadioGroup`**

### Method Summary

<ApiItem href="#htmlhelperinputradiogroup-ischecked" visibility="protected" name="isChecked" returnType="bool" params={[{"type":"string","name":"value","default":null}]}>
Returns true when $value loosely equals the checked scalar.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;radio&quot;">
</ApiItem>

### Methods

<h4 id="htmlhelperinputradiogroup-ischecked"><code>isChecked()</code></h4>

```php
protected function isChecked( string $value ): bool;
```

Returns true when $value loosely equals the checked scalar.

## Html\Helper\Input\Select

Class

Class Select

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractList`](#htmlhelperabstractlist)
- **`Phalcon\Html\Helper\Input\Select`**

`Phalcon\Contracts\Html\Helper\Input\SelectData` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Helper\AbstractList`

### Method Summary

<ApiItem href="#htmlhelperinputselect-add" visibility="public" name="add" returnType="static" params={[{"type":"string","name":"text","default":null},{"type":"string|null","name":"value","default":"null"},{"type":"array","name":"attributes","default":"[]"},{"type":"bool","name":"raw","default":"false"}]}>
Add an element to the list
</ApiItem>
<ApiItem href="#htmlhelperinputselect-addplaceholder" visibility="public" name="addPlaceholder" returnType="static" params={[{"type":"string","name":"text","default":null},{"type":"string|null","name":"value","default":"null"},{"type":"array","name":"attributes","default":"[]"},{"type":"bool","name":"raw","default":"false"}]}>
Add a placeholder to the element
</ApiItem>
<ApiItem href="#htmlhelperinputselect-fromdata" visibility="public" name="fromData" returnType="static" params={[{"type":"SelectData","name":"data","default":null}]}>
Populates the select from a data provider.
</ApiItem>
<ApiItem href="#htmlhelperinputselect-optgroup" visibility="public" name="optGroup" returnType="static" params={[{"type":"string|null","name":"label","default":"null"},{"type":"array","name":"attributes","default":"[]"}]}>
Creates an option group
</ApiItem>
<ApiItem href="#htmlhelperinputselect-placeholder" visibility="public" name="placeholder" returnType="static" params={[{"type":"string","name":"text","default":null}]}>
Adds a non-selectable placeholder option as the first entry. Renders
</ApiItem>
<ApiItem href="#htmlhelperinputselect-selected" visibility="public" name="selected" returnType="static" params={[{"type":"string","name":"selected","default":null}]}>
</ApiItem>
<ApiItem href="#htmlhelperinputselect-strict" visibility="public" name="strict" returnType="static" params={[{"type":"bool","name":"flag","default":"true"}]}>
Toggles strict (`===`) comparison between an option's `value` and
</ApiItem>
<ApiItem href="#htmlhelperinputselect-gettag" visibility="protected" name="getTag" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#htmlhelperinputselect-optgroupend" visibility="protected" name="optGroupEnd" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#htmlhelperinputselect-optgroupstart" visibility="protected" name="optGroupStart" returnType="string" params={[{"type":"string","name":"label","default":null},{"type":"array","name":"attributes","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="elementTag" type="string" default="&quot;option&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="inOptGroup" type="bool" default="false">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="selected" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="strict" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="htmlhelperinputselect-add"><code>add()</code></h4>

```php
public function add(
string $text,
string|null $value = null,
array $attributes = [],
bool $raw = false
): static;
```

Add an element to the list

<h4 id="htmlhelperinputselect-addplaceholder"><code>addPlaceholder()</code></h4>

```php
public function addPlaceholder(
string $text,
string|null $value = null,
array $attributes = [],
bool $raw = false
): static;
```

Add a placeholder to the element

<h4 id="htmlhelperinputselect-fromdata"><code>fromData()</code></h4>

```php
public function fromData( SelectData $data ): static;
```

Populates the select from a data provider.

Flat entries: key = option value, value = label string.
Optgroup entries: key = group label, value = [value => label] array.

<h4 id="htmlhelperinputselect-optgroup"><code>optGroup()</code></h4>

```php
public function optGroup(
string|null $label = null,
array $attributes = []
): static;
```

Creates an option group

<h4 id="htmlhelperinputselect-placeholder"><code>placeholder()</code></h4>

```php
public function placeholder( string $text ): static;
```

Adds a non-selectable placeholder option as the first entry. Renders
as `<option value="" disabled selected>$text</option>`, matching the
common HTML idiom for "Choose..."-style prompts.

<h4 id="htmlhelperinputselect-selected"><code>selected()</code></h4>

```php
public function selected( string $selected ): static;
```

<h4 id="htmlhelperinputselect-strict"><code>strict()</code></h4>

```php
public function strict( bool $flag = true ): static;
```

Toggles strict (`===`) comparison between an option's `value` and
the previously stored `selected` value. Defaults to loose (`==`),
matching the round-tripping fix in `AbstractChecked` so mixed
int/string form data marks the right option as selected.

<h4 id="htmlhelperinputselect-gettag"><code>getTag()</code></h4>

```php
protected function getTag(): string;
```

<h4 id="htmlhelperinputselect-optgroupend"><code>optGroupEnd()</code></h4>

```php
protected function optGroupEnd(): string;
```

<h4 id="htmlhelperinputselect-optgroupstart"><code>optGroupStart()</code></h4>

```php
protected function optGroupStart(
string $label,
array $attributes
): string;
```

## Html\Helper\Input\Select\ArrayData

Class

Wraps a plain PHP array as a SELECT data provider.

Keys are option values; string values are labels;
array values define optgroups.

- **`Phalcon\Html\Helper\Input\Select\ArrayData`** - implements [`Phalcon\Contracts\Html\Helper\Input\SelectData`](/5.20/api/phalcon_contracts/#contractshtmlhelperinputselectdata)

`Phalcon\Contracts\Html\Helper\Input\SelectData` · `Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperinputselectarraydata-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"data","default":"[]"},{"type":"array","name":"attributes","default":"[]"}]}>
</ApiItem>
<ApiItem href="#htmlhelperinputselectarraydata-getattributes" visibility="public" name="getAttributes" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#htmlhelperinputselectarraydata-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="attributes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="data" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="htmlhelperinputselectarraydata-__construct"><code>__construct()</code></h4>

```php
public function __construct(
array $data = [],
array $attributes = []
);
```

<h4 id="htmlhelperinputselectarraydata-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

<h4 id="htmlhelperinputselectarraydata-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

## Html\Helper\Input\Select\ResultsetData

Class

- **`Phalcon\Html\Helper\Input\Select\ResultsetData`** - implements [`Phalcon\Contracts\Html\Helper\Input\SelectData`](/5.20/api/phalcon_contracts/#contractshtmlhelperinputselectdata)

`Phalcon\Contracts\Html\Helper\Input\SelectData` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Exceptions\InvalidResultsetValue` · `Phalcon\Html\Exceptions\UsingRequiresTwoValues` · `Phalcon\Mvc\Model\ResultsetInterface`

### Method Summary

<ApiItem href="#htmlhelperinputselectresultsetdata-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"ResultsetInterface","name":"resultset","default":null},{"type":"array","name":"using","default":null},{"type":"array","name":"attributesMap","default":"[]"}]}>
</ApiItem>
<ApiItem href="#htmlhelperinputselectresultsetdata-getattributes" visibility="public" name="getAttributes" returnType="array" params={[]}>
Returns per-option attribute maps, keyed by option value.
</ApiItem>
<ApiItem href="#htmlhelperinputselectresultsetdata-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#htmlhelperinputselectresultsetdata-readfield" visibility="protected" name="readField" returnType="" params={[{"type":"mixed","name":"option","default":null},{"type":"string","name":"field","default":null}]}>
Reads a property from the row, supporting both objects (via
</ApiItem>
<ApiItem href="#htmlhelperinputselectresultsetdata-resolve" visibility="protected" name="resolve" returnType="void" params={[]}>
Walks the resultset once, building both the option map and the
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="attributesMap" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="resolvedAttributes" type="html_select_attributes|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="resolvedOptions" type="html_select_options|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="resultset" type="ResultsetInterface" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="using" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="htmlhelperinputselectresultsetdata-__construct"><code>__construct()</code></h4>

```php
public function __construct(
ResultsetInterface $resultset,
array $using,
array $attributesMap = []
);
```

<h4 id="htmlhelperinputselectresultsetdata-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Returns per-option attribute maps, keyed by option value.

<h4 id="htmlhelperinputselectresultsetdata-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

<h4 id="htmlhelperinputselectresultsetdata-readfield"><code>readField()</code></h4>

```php
protected function readField(
mixed $option,
string $field
);
```

Reads a property from the row, supporting both objects (via
`readAttribute` when available) and plain arrays.

<h4 id="htmlhelperinputselectresultsetdata-resolve"><code>resolve()</code></h4>

```php
protected function resolve(): void;
```

Walks the resultset once, building both the option map and the
per-option resolved attribute map. Closures in `attributesMap`
receive the current row; static values are passed through.
`false` or `null` values skip the attribute entirely.

## Html\Helper\Input\Textarea

Class

Class Textarea

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
- **`Phalcon\Html\Helper\Input\Textarea`**

`Phalcon\Html\Exception`

### Method Summary

<ApiItem href="#htmlhelperinputtextarea-__tostring" visibility="public" name="__toString" returnType="" params={[]}>
Returns the HTML for the input.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="type" type="string" default="&quot;textarea&quot;">
</ApiItem>

### Methods

<h4 id="htmlhelperinputtextarea-__tostring"><code>__toString()</code></h4>

```php
public function __toString();
```

Returns the HTML for the input.

## Html\Helper\Label

Class

Class Label

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Label`**

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Escaper\EscaperInterface`

### Method Summary

<ApiItem href="#htmlhelperlabel-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null},{"type":"Doctype|null","name":"doctype","default":"null"},{"type":"bool","name":"forceRaw","default":"false"}]}>
</ApiItem>
<ApiItem href="#htmlhelperlabel-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"label","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"bool","name":"raw","default":"false"}]}>
Produce a `<label>` tag.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="forceRaw" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="htmlhelperlabel-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype|null $doctype = null,
bool $forceRaw = false
);
```

<h4 id="htmlhelperlabel-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $label,
array $attributes = [],
bool $raw = false
): string;
```

Produce a `<label>` tag.

## Html\Helper\Link

Class

Creates &lt;link> tags

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
- [`Phalcon\Html\Helper\Style`](#htmlhelperstyle)
- **`Phalcon\Html\Helper\Link`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperlink-add" visibility="public" name="add" returnType="static" params={[{"type":"string","name":"url","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"int","name":"position","default":"-1"}]}>
Add an element to the list
</ApiItem>
<ApiItem href="#htmlhelperlink-getattributes" visibility="protected" name="getAttributes" returnType="array" params={[{"type":"string","name":"url","default":null},{"type":"array","name":"attributes","default":null}]}>
Returns the necessary attributes
</ApiItem>
<ApiItem href="#htmlhelperlink-gettag" visibility="protected" name="getTag" returnType="string" params={[]}>
</ApiItem>

### Methods

<h4 id="htmlhelperlink-add"><code>add()</code></h4>

```php
public function add(
string $url,
array $attributes = [],
int $position = -1
): static;
```

Add an element to the list

<h4 id="htmlhelperlink-getattributes"><code>getAttributes()</code></h4>

```php
protected function getAttributes(
string $url,
array $attributes
): array;
```

Returns the necessary attributes

<h4 id="htmlhelperlink-gettag"><code>getTag()</code></h4>

```php
protected function getTag(): string;
```

## Html\Helper\Meta

Class

Class Meta

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
- **`Phalcon\Html\Helper\Meta`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelpermeta-add" visibility="public" name="add" returnType="static" params={[{"type":"array","name":"attributes","default":"[]"},{"type":"int","name":"position","default":"-1"}]}>
Add an element to the list
</ApiItem>
<ApiItem href="#htmlhelpermeta-addhttp" visibility="public" name="addHttp" returnType="static" params={[{"type":"string","name":"httpEquiv","default":null},{"type":"string","name":"content","default":null},{"type":"int","name":"position","default":"-1"}]}>
</ApiItem>
<ApiItem href="#htmlhelpermeta-addname" visibility="public" name="addName" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"content","default":null},{"type":"int","name":"position","default":"-1"}]}>
</ApiItem>
<ApiItem href="#htmlhelpermeta-addproperty" visibility="public" name="addProperty" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"string","name":"content","default":null},{"type":"int","name":"position","default":"-1"}]}>
</ApiItem>
<ApiItem href="#htmlhelpermeta-gettag" visibility="protected" name="getTag" returnType="string" params={[]}>
</ApiItem>

### Methods

<h4 id="htmlhelpermeta-add"><code>add()</code></h4>

```php
public function add(
array $attributes = [],
int $position = -1
): static;
```

Add an element to the list

<h4 id="htmlhelpermeta-addhttp"><code>addHttp()</code></h4>

```php
public function addHttp(
string $httpEquiv,
string $content,
int $position = -1
): static;
```

<h4 id="htmlhelpermeta-addname"><code>addName()</code></h4>

```php
public function addName(
string $name,
string $content,
int $position = -1
): static;
```

<h4 id="htmlhelpermeta-addproperty"><code>addProperty()</code></h4>

```php
public function addProperty(
string $name,
string $content,
int $position = -1
): static;
```

<h4 id="htmlhelpermeta-gettag"><code>getTag()</code></h4>

```php
protected function getTag(): string;
```

## Html\Helper\Ol

Class

Class Ol

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractList`](#htmlhelperabstractlist)
- **`Phalcon\Html\Helper\Ol`**
- [`Phalcon\Html\Helper\Ul`](#htmlhelperul)

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Escaper\EscaperInterface`

### Method Summary

<ApiItem href="#htmlhelperol-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null},{"type":"Doctype|null","name":"doctype","default":"null"},{"type":"bool","name":"forceRaw","default":"false"}]}>
</ApiItem>
<ApiItem href="#htmlhelperol-add" visibility="public" name="add" returnType="static" params={[{"type":"string","name":"text","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"bool","name":"raw","default":"false"}]}>
Add an element to the list
</ApiItem>
<ApiItem href="#htmlhelperol-gettag" visibility="protected" name="getTag" returnType="string" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="forceRaw" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="htmlhelperol-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype|null $doctype = null,
bool $forceRaw = false
);
```

<h4 id="htmlhelperol-add"><code>add()</code></h4>

```php
public function add(
string $text,
array $attributes = [],
bool $raw = false
): static;
```

Add an element to the list

<h4 id="htmlhelperol-gettag"><code>getTag()</code></h4>

```php
protected function getTag(): string;
```

## Html\Helper\Preload

Class

Generates a &lt;link rel="preload"> tag for resource hinting.
If a ResponseInterface is provided, also sets the HTTP Link header.

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Preload`**

`Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Link\Link` · `Phalcon\Html\Link\Serializer\Header` · `Phalcon\Http\ResponseInterface`

### Method Summary

<ApiItem href="#htmlhelperpreload-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null},{"type":"ResponseInterface|null","name":"response","default":"null"}]}>
</ApiItem>
<ApiItem href="#htmlhelperpreload-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"href","default":null},{"type":"string","name":"type","default":"\"style\""},{"type":"array","name":"attributes","default":"[]"}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="response" type="ResponseInterface|null" default="null">
</ApiItem>

### Methods

<h4 id="htmlhelperpreload-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
ResponseInterface|null $response = null
);
```

<h4 id="htmlhelperpreload-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $href,
string $type = "style",
array $attributes = []
): string;
```

## Html\Helper\Script

Class

Class Script

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
- **`Phalcon\Html\Helper\Script`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperscript-add" visibility="public" name="add" returnType="static" params={[{"type":"string","name":"url","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"int","name":"position","default":"-1"}]}>
Add an element to the list
</ApiItem>
<ApiItem href="#htmlhelperscript-begininternal" visibility="public" name="beginInternal" returnType="void" params={[]}>
Begins capturing inline script content via output buffering. Pair
</ApiItem>
<ApiItem href="#htmlhelperscript-endinternal" visibility="public" name="endInternal" returnType="static" params={[{"type":"array","name":"attributes","default":"[]"},{"type":"int","name":"position","default":"-1"}]}>
Closes an inline-script buffer opened by `beginInternal()` and adds
</ApiItem>
<ApiItem href="#htmlhelperscript-getattributes" visibility="protected" name="getAttributes" returnType="array" params={[{"type":"string","name":"url","default":null},{"type":"array","name":"attributes","default":null}]}>
Returns the necessary attributes
</ApiItem>
<ApiItem href="#htmlhelperscript-gettag" visibility="protected" name="getTag" returnType="string" params={[]}>
</ApiItem>

### Methods

<h4 id="htmlhelperscript-add"><code>add()</code></h4>

```php
public function add(
string $url,
array $attributes = [],
int $position = -1
): static;
```

Add an element to the list

<h4 id="htmlhelperscript-begininternal"><code>beginInternal()</code></h4>

```php
public function beginInternal(): void;
```

Begins capturing inline script content via output buffering. Pair
with `endInternal()` to close the buffer and append the captured
markup as a `<script>...</script>` block in the asset stack.

<h4 id="htmlhelperscript-endinternal"><code>endInternal()</code></h4>

```php
public function endInternal(
array $attributes = [],
int $position = -1
): static;
```

Closes an inline-script buffer opened by `beginInternal()` and adds
the captured content as a `<script>...</script>` entry. Any
attributes supplied are placed on the wrapping tag. The script body
is treated as raw HTML (it is JavaScript, not user-supplied text).

<h4 id="htmlhelperscript-getattributes"><code>getAttributes()</code></h4>

```php
protected function getAttributes(
string $url,
array $attributes
): array;
```

Returns the necessary attributes

<h4 id="htmlhelperscript-gettag"><code>getTag()</code></h4>

```php
protected function getTag(): string;
```

## Html\Helper\Style

Class

Class Style

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
- **`Phalcon\Html\Helper\Style`**
- [`Phalcon\Html\Helper\Link`](#htmlhelperlink)

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelperstyle-add" visibility="public" name="add" returnType="static" params={[{"type":"string","name":"url","default":null},{"type":"array","name":"attributes","default":"[]"},{"type":"int","name":"position","default":"-1"}]}>
Add an element to the list
</ApiItem>
<ApiItem href="#htmlhelperstyle-setstyle" visibility="public" name="setStyle" returnType="static" params={[{"type":"bool","name":"flag","default":null}]}>
Sets if this is a style or link tag
</ApiItem>
<ApiItem href="#htmlhelperstyle-getattributes" visibility="protected" name="getAttributes" returnType="array" params={[{"type":"string","name":"url","default":null},{"type":"array","name":"attributes","default":null}]}>
Returns the necessary attributes
</ApiItem>
<ApiItem href="#htmlhelperstyle-gettag" visibility="protected" name="getTag" returnType="string" params={[]}>
</ApiItem>

### Methods

<h4 id="htmlhelperstyle-add"><code>add()</code></h4>

```php
public function add(
string $url,
array $attributes = [],
int $position = -1
): static;
```

Add an element to the list

<h4 id="htmlhelperstyle-setstyle"><code>setStyle()</code></h4>

```php
public function setStyle( bool $flag ): static;
```

Sets if this is a style or link tag

<h4 id="htmlhelperstyle-getattributes"><code>getAttributes()</code></h4>

```php
protected function getAttributes(
string $url,
array $attributes
): array;
```

Returns the necessary attributes

<h4 id="htmlhelperstyle-gettag"><code>getTag()</code></h4>

```php
protected function getTag(): string;
```

## Html\Helper\Tag

Class

Generic open-tag escape hatch. Renders just `<name attr="...">` for any
tag name without a dedicated helper. For an open + content + close tag
use `Element` instead. For self-closing void tags (img, br, hr, etc.)
use `VoidTag`.

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Tag`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelpertag-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"attributes","default":"[]"}]}>
</ApiItem>

### Methods

<h4 id="htmlhelpertag-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $name,
array $attributes = []
): string;
```

## Html\Helper\Title

Class

Class Title

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Title`**

`Phalcon\Html\Exception`

### Method Summary

<ApiItem href="#htmlhelpertitle-__invoke" visibility="public" name="__invoke" returnType="static" params={[{"type":"string","name":"indent","default":"\"    \""},{"type":"string|null","name":"delimiter","default":"null"}]}>
Sets the separator and returns the object back
</ApiItem>
<ApiItem href="#htmlhelpertitle-__tostring" visibility="public" name="__toString" returnType="" params={[]}>
Returns the title tags
</ApiItem>
<ApiItem href="#htmlhelpertitle-append" visibility="public" name="append" returnType="static" params={[{"type":"string","name":"text","default":null},{"type":"bool","name":"raw","default":"false"}]}>
Appends text to current document title
</ApiItem>
<ApiItem href="#htmlhelpertitle-get" visibility="public" name="get" returnType="string" params={[]}>
Returns the title
</ApiItem>
<ApiItem href="#htmlhelpertitle-prepend" visibility="public" name="prepend" returnType="static" params={[{"type":"string","name":"text","default":null},{"type":"bool","name":"raw","default":"false"}]}>
Prepends text to current document title
</ApiItem>
<ApiItem href="#htmlhelpertitle-set" visibility="public" name="set" returnType="static" params={[{"type":"string","name":"text","default":null},{"type":"bool","name":"raw","default":"false"}]}>
Sets the title
</ApiItem>
<ApiItem href="#htmlhelpertitle-setseparator" visibility="public" name="setSeparator" returnType="static" params={[{"type":"string","name":"separator","default":null},{"type":"bool","name":"raw","default":"false"}]}>
Sets the separator
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="append" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="prepend" type="array" default="[]">
Untyped on purpose. A typed `array` default is shared by all instances
and `prepend()` mutates it in place, which corrupts the heap. See
team/Planning/2026-08-20-zephir-typed-array-property-shared-default.md
</ApiItem>
<ApiItem kind="property" visibility="protected" name="separator" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="title" type="string" default="&quot;&quot;">
</ApiItem>

### Methods

<h4 id="htmlhelpertitle-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $indent = "    ",
string|null $delimiter = null
): static;
```

Sets the separator and returns the object back

<h4 id="htmlhelpertitle-__tostring"><code>__toString()</code></h4>

```php
public function __toString();
```

Returns the title tags

<h4 id="htmlhelpertitle-append"><code>append()</code></h4>

```php
public function append(
string $text,
bool $raw = false
): static;
```

Appends text to current document title

<h4 id="htmlhelpertitle-get"><code>get()</code></h4>

```php
public function get(): string;
```

Returns the title

<h4 id="htmlhelpertitle-prepend"><code>prepend()</code></h4>

```php
public function prepend(
string $text,
bool $raw = false
): static;
```

Prepends text to current document title

<h4 id="htmlhelpertitle-set"><code>set()</code></h4>

```php
public function set(
string $text,
bool $raw = false
): static;
```

Sets the title

<h4 id="htmlhelpertitle-setseparator"><code>setSeparator()</code></h4>

```php
public function setSeparator(
string $separator,
bool $raw = false
): static;
```

Sets the separator

## Html\Helper\Ul

Class

Class Ul

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractList`](#htmlhelperabstractlist)
- [`Phalcon\Html\Helper\Ol`](#htmlhelperol)
- **`Phalcon\Html\Helper\Ul`**

### Method Summary

<ApiItem href="#htmlhelperul-gettag" visibility="protected" name="getTag" returnType="string" params={[]}>
</ApiItem>

### Methods

<h4 id="htmlhelperul-gettag"><code>getTag()</code></h4>

```php
protected function getTag(): string;
```

## Html\Helper\VoidTag

Class

Generic void-tag escape hatch. Renders a self-closing tag for any name
without a dedicated helper. The trailing `/` is emitted only for XHTML
doctypes, matching the `Input/AbstractInput::__toString` convention.

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\VoidTag`**

`Phalcon\Contracts\Html\HtmlTypes`

### Method Summary

<ApiItem href="#htmlhelpervoidtag-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"attributes","default":"[]"}]}>
</ApiItem>

### Methods

<h4 id="htmlhelpervoidtag-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $name,
array $attributes = []
): string;
```

## Html\Link\AbstractLink

Abstract

- **`Phalcon\Html\Link\AbstractLink`**
- [`Phalcon\Html\Link\Link`](#htmllinklink)

`Phalcon\Contracts\Html\Link\LinkTypes` · `Phalcon\Support\Collection`

### Method Summary

<ApiItem href="#htmllinkabstractlink-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"rel","default":"\"\""},{"type":"string","name":"href","default":"\"\""},{"type":"array","name":"attributes","default":"[]"}]}>
Link constructor.
</ApiItem>
<ApiItem href="#htmllinkabstractlink-dogetattributes" visibility="protected" name="doGetAttributes" returnType="array" params={[]}>
Returns a list of attributes that describe the target URI.
</ApiItem>
<ApiItem href="#htmllinkabstractlink-dogethref" visibility="protected" name="doGetHref" returnType="string" params={[]}>
Returns the target of the link.
</ApiItem>
<ApiItem href="#htmllinkabstractlink-dogetrels" visibility="protected" name="doGetRels" returnType="array" params={[]}>
Returns the relationship type(s) of the link.
</ApiItem>
<ApiItem href="#htmllinkabstractlink-doistemplated" visibility="protected" name="doIsTemplated" returnType="bool" params={[]}>
Returns whether this is a templated link. True if this link object is
</ApiItem>
<ApiItem href="#htmllinkabstractlink-dowithattribute" visibility="protected" name="doWithAttribute" returnType="static" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null}]}>
</ApiItem>
<ApiItem href="#htmllinkabstractlink-dowithhref" visibility="protected" name="doWithHref" returnType="static" params={[{"type":"string","name":"href","default":null}]}>
</ApiItem>
<ApiItem href="#htmllinkabstractlink-dowithrel" visibility="protected" name="doWithRel" returnType="static" params={[{"type":"string","name":"key","default":null}]}>
</ApiItem>
<ApiItem href="#htmllinkabstractlink-dowithoutattribute" visibility="protected" name="doWithoutAttribute" returnType="static" params={[{"type":"string","name":"key","default":null}]}>
</ApiItem>
<ApiItem href="#htmllinkabstractlink-dowithoutrel" visibility="protected" name="doWithoutRel" returnType="static" params={[{"type":"string","name":"key","default":null}]}>
</ApiItem>
<ApiItem href="#htmllinkabstractlink-hrefistemplated" visibility="protected" name="hrefIsTemplated" returnType="bool" params={[{"type":"string","name":"href","default":null}]}>
Determines if a href is a templated link or not.
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="attributes" type="Collection" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="href" type="string" default="&quot;&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="rels" type="Collection" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="templated" type="bool" default="false">
</ApiItem>

### Methods

<h4 id="htmllinkabstractlink-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $rel = "",
string $href = "",
array $attributes = []
);
```

Link constructor.

<h4 id="htmllinkabstractlink-dogetattributes"><code>doGetAttributes()</code></h4>

```php
protected function doGetAttributes(): array;
```

Returns a list of attributes that describe the target URI.

A key-value list of attributes, where the key is a string and the value
is either a PHP primitive or an array of PHP strings. If no values are
found an empty array MUST be returned.

<h4 id="htmllinkabstractlink-dogethref"><code>doGetHref()</code></h4>

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

<h4 id="htmllinkabstractlink-dogetrels"><code>doGetRels()</code></h4>

```php
protected function doGetRels(): array;
```

Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.

<h4 id="htmllinkabstractlink-doistemplated"><code>doIsTemplated()</code></h4>

```php
protected function doIsTemplated(): bool;
```

Returns whether this is a templated link. True if this link object is
templated, False otherwise.

<h4 id="htmllinkabstractlink-dowithattribute"><code>doWithAttribute()</code></h4>

```php
protected function doWithAttribute(
string $key,
mixed $value
): static;
```

<h4 id="htmllinkabstractlink-dowithhref"><code>doWithHref()</code></h4>

```php
protected function doWithHref( string $href ): static;
```

<h4 id="htmllinkabstractlink-dowithrel"><code>doWithRel()</code></h4>

```php
protected function doWithRel( string $key ): static;
```

<h4 id="htmllinkabstractlink-dowithoutattribute"><code>doWithoutAttribute()</code></h4>

```php
protected function doWithoutAttribute( string $key ): static;
```

<h4 id="htmllinkabstractlink-dowithoutrel"><code>doWithoutRel()</code></h4>

```php
protected function doWithoutRel( string $key ): static;
```

<h4 id="htmllinkabstractlink-hrefistemplated"><code>hrefIsTemplated()</code></h4>

```php
protected function hrefIsTemplated( string $href ): bool;
```

Determines if a href is a templated link or not.

@see https://tools.ietf.org/html/rfc6570

## Html\Link\AbstractLinkProvider

Abstract

- **`Phalcon\Html\Link\AbstractLinkProvider`**
- [`Phalcon\Html\Link\LinkProvider`](#htmllinklinkprovider)

`Phalcon\Contracts\Html\Link\LinkTypes` · `Phalcon\Html\Link\Interfaces\LinkInterface`

### Method Summary

<ApiItem href="#htmllinkabstractlinkprovider-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"links","default":"[]"}]}>
LinkProvider constructor.
</ApiItem>
<ApiItem href="#htmllinkabstractlinkprovider-dogetlinks" visibility="protected" name="doGetLinks" returnType="array" params={[]}>
Returns an iterable of LinkInterface objects.
</ApiItem>
<ApiItem href="#htmllinkabstractlinkprovider-dogetlinksbyrel" visibility="protected" name="doGetLinksByRel" returnType="array" params={[{"type":"string","name":"rel","default":null}]}>
Returns an iterable of LinkInterface objects that have a specific
</ApiItem>
<ApiItem href="#htmllinkabstractlinkprovider-dowithlink" visibility="protected" name="doWithLink" returnType="static" params={[{"type":"mixed","name":"link","default":null}]}>
Returns an instance with the specified link included.
</ApiItem>
<ApiItem href="#htmllinkabstractlinkprovider-dowithoutlink" visibility="protected" name="doWithoutLink" returnType="static" params={[{"type":"mixed","name":"link","default":null}]}>
Returns an instance with the specified link removed.
</ApiItem>
<ApiItem href="#htmllinkabstractlinkprovider-getkey" visibility="protected" name="getKey" returnType="string" params={[{"type":"mixed","name":"link","default":null}]}>
Returns the object hash key
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="links" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="htmllinkabstractlinkprovider-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $links = [] );
```

LinkProvider constructor.

The guard keeps foreign objects out of the collection. It stays live in
the Zephir implementation, where the array is untyped.

<h4 id="htmllinkabstractlinkprovider-dogetlinks"><code>doGetLinks()</code></h4>

```php
protected function doGetLinks(): array;
```

Returns an iterable of LinkInterface objects.

The iterable may be an array or any PHP \Traversable object. If no links
are available, an empty array or \Traversable MUST be returned.

<h4 id="htmllinkabstractlinkprovider-dogetlinksbyrel"><code>doGetLinksByRel()</code></h4>

```php
protected function doGetLinksByRel( string $rel ): array;
```

Returns an iterable of LinkInterface objects that have a specific
relationship.

The iterable may be an array or any PHP \Traversable object. If no links
with that relationship are available, an empty array or \Traversable
MUST be returned.

<h4 id="htmllinkabstractlinkprovider-dowithlink"><code>doWithLink()</code></h4>

```php
protected function doWithLink( mixed $link ): static;
```

Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if $link is === identical
to a link object already in the collection.

<h4 id="htmllinkabstractlinkprovider-dowithoutlink"><code>doWithoutLink()</code></h4>

```php
protected function doWithoutLink( mixed $link ): static;
```

Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if $link is === identical to a link
object already in the collection.

<h4 id="htmllinkabstractlinkprovider-getkey"><code>getKey()</code></h4>

```php
protected function getKey( mixed $link ): string;
```

Returns the object hash key

## Html\Link\EvolvableLink

Class

Class Phalcon\Html\Link\EvolvableLink

- [`Phalcon\Html\Link\AbstractLink`](#htmllinkabstractlink)
- [`Phalcon\Html\Link\Link`](#htmllinklink)
- **`Phalcon\Html\Link\EvolvableLink`** - implements [`Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`](#htmllinkinterfacesevolvablelinkinterface)

`Phalcon\Contracts\Html\Link\LinkTypes` · `Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`

### Method Summary

<ApiItem href="#htmllinkevolvablelink-withattribute" visibility="public" name="withAttribute" returnType="static" params={[{"type":"mixed","name":"attribute","default":null},{"type":"mixed","name":"value","default":null}]}>
Returns an instance with the specified attribute added.
</ApiItem>
<ApiItem href="#htmllinkevolvablelink-withhref" visibility="public" name="withHref" returnType="static" params={[{"type":"string","name":"href","default":null}]}>
Returns an instance with the specified href.
</ApiItem>
<ApiItem href="#htmllinkevolvablelink-withrel" visibility="public" name="withRel" returnType="static" params={[{"type":"string","name":"rel","default":null}]}>
Returns an instance with the specified relationship included.
</ApiItem>
<ApiItem href="#htmllinkevolvablelink-withoutattribute" visibility="public" name="withoutAttribute" returnType="static" params={[{"type":"string","name":"attribute","default":null}]}>
Returns an instance with the specified attribute excluded.
</ApiItem>
<ApiItem href="#htmllinkevolvablelink-withoutrel" visibility="public" name="withoutRel" returnType="static" params={[{"type":"string","name":"rel","default":null}]}>
Returns an instance with the specified relationship excluded.
</ApiItem>

### Methods

<h4 id="htmllinkevolvablelink-withattribute"><code>withAttribute()</code></h4>

```php
public function withAttribute(
mixed $attribute,
mixed $value
): static;
```

Returns an instance with the specified attribute added.

If the specified attribute is already present, it will be overwritten
with the new value.

<h4 id="htmllinkevolvablelink-withhref"><code>withHref()</code></h4>

```php
public function withHref( string $href ): static;
```

Returns an instance with the specified href.

An implementing library SHOULD evaluate a passed object to a string
immediately rather than waiting for it to be returned later.

<h4 id="htmllinkevolvablelink-withrel"><code>withRel()</code></h4>

```php
public function withRel( string $rel ): static;
```

Returns an instance with the specified relationship included.

If the specified rel is already present, this method MUST return
normally without errors, but without adding the rel a second time.

<h4 id="htmllinkevolvablelink-withoutattribute"><code>withoutAttribute()</code></h4>

```php
public function withoutAttribute( string $attribute ): static;
```

Returns an instance with the specified attribute excluded.

If the specified attribute is not present, this method MUST return
normally without errors.

<h4 id="htmllinkevolvablelink-withoutrel"><code>withoutRel()</code></h4>

```php
public function withoutRel( string $rel ): static;
```

Returns an instance with the specified relationship excluded.

If the specified rel is not present, this method MUST return
normally without errors.

## Html\Link\EvolvableLinkProvider

Class

Class Phalcon\Html\Link\EvolvableLinkProvider

- [`Phalcon\Html\Link\AbstractLinkProvider`](#htmllinkabstractlinkprovider)
- [`Phalcon\Html\Link\LinkProvider`](#htmllinklinkprovider)
- **`Phalcon\Html\Link\EvolvableLinkProvider`** - implements [`Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface`](#htmllinkinterfacesevolvablelinkproviderinterface)

`Phalcon\Contracts\Html\Link\LinkTypes` · `Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface` · `Phalcon\Html\Link\Interfaces\LinkInterface`

### Method Summary

<ApiItem href="#htmllinkevolvablelinkprovider-withlink" visibility="public" name="withLink" returnType="static" params={[{"type":"LinkInterface","name":"link","default":null}]}>
Returns an instance with the specified link included.
</ApiItem>
<ApiItem href="#htmllinkevolvablelinkprovider-withoutlink" visibility="public" name="withoutLink" returnType="static" params={[{"type":"LinkInterface","name":"link","default":null}]}>
Returns an instance with the specified link removed.
</ApiItem>

### Methods

<h4 id="htmllinkevolvablelinkprovider-withlink"><code>withLink()</code></h4>

```php
public function withLink( LinkInterface $link ): static;
```

Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if $link is === identical
to a link object already in the collection.

<h4 id="htmllinkevolvablelinkprovider-withoutlink"><code>withoutLink()</code></h4>

```php
public function withoutLink( LinkInterface $link ): static;
```

Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if $link is === identical to a link
object already in the collection.

## Html\Link\Interfaces\EvolvableLinkInterface

Interface

An evolvable link value object.

- [`Phalcon\Html\Link\Interfaces\LinkInterface`](#htmllinkinterfaceslinkinterface)
- **`Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`**

### Method Summary

<ApiItem href="#htmllinkinterfacesevolvablelinkinterface-withattribute" visibility="public" name="withAttribute" returnType="EvolvableLinkInterface" params={[{"type":"string","name":"attribute","default":null},{"type":"string","name":"value","default":null}]}>
Returns an instance with the specified attribute added.
</ApiItem>
<ApiItem href="#htmllinkinterfacesevolvablelinkinterface-withhref" visibility="public" name="withHref" returnType="EvolvableLinkInterface" params={[{"type":"string","name":"href","default":null}]}>
Returns an instance with the specified href.
</ApiItem>
<ApiItem href="#htmllinkinterfacesevolvablelinkinterface-withrel" visibility="public" name="withRel" returnType="EvolvableLinkInterface" params={[{"type":"string","name":"rel","default":null}]}>
Returns an instance with the specified relationship included.
</ApiItem>
<ApiItem href="#htmllinkinterfacesevolvablelinkinterface-withoutattribute" visibility="public" name="withoutAttribute" returnType="EvolvableLinkInterface" params={[{"type":"string","name":"attribute","default":null}]}>
Returns an instance with the specified attribute excluded.
</ApiItem>
<ApiItem href="#htmllinkinterfacesevolvablelinkinterface-withoutrel" visibility="public" name="withoutRel" returnType="EvolvableLinkInterface" params={[{"type":"string","name":"rel","default":null}]}>
Returns an instance with the specified relationship excluded.
</ApiItem>

### Methods

<h4 id="htmllinkinterfacesevolvablelinkinterface-withattribute"><code>withAttribute()</code></h4>

```php
public function withAttribute(
string $attribute,
string $value
): EvolvableLinkInterface;
```

Returns an instance with the specified attribute added.

If the specified attribute is already present, it will be overwritten
with the new value.

<h4 id="htmllinkinterfacesevolvablelinkinterface-withhref"><code>withHref()</code></h4>

```php
public function withHref( string $href ): EvolvableLinkInterface;
```

Returns an instance with the specified href.

An implementing library SHOULD evaluate a passed object to a string
immediately rather than waiting for it to be returned later.

<h4 id="htmllinkinterfacesevolvablelinkinterface-withrel"><code>withRel()</code></h4>

```php
public function withRel( string $rel ): EvolvableLinkInterface;
```

Returns an instance with the specified relationship included.

If the specified rel is already present, this method MUST return
normally without errors, but without adding the rel a second time.

<h4 id="htmllinkinterfacesevolvablelinkinterface-withoutattribute"><code>withoutAttribute()</code></h4>

```php
public function withoutAttribute( string $attribute ): EvolvableLinkInterface;
```

Returns an instance with the specified attribute excluded.

If the specified attribute is not present, this method MUST return
normally without errors.

<h4 id="htmllinkinterfacesevolvablelinkinterface-withoutrel"><code>withoutRel()</code></h4>

```php
public function withoutRel( string $rel ): EvolvableLinkInterface;
```

Returns an instance with the specified relationship excluded.

If the specified rel is already not present, this method MUST return
normally without errors.

## Html\Link\Interfaces\EvolvableLinkProviderInterface

Interface

An evolvable link provider value object.

- [`Phalcon\Html\Link\Interfaces\LinkProviderInterface`](#htmllinkinterfaceslinkproviderinterface)
- **`Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface`**

### Method Summary

<ApiItem href="#htmllinkinterfacesevolvablelinkproviderinterface-withlink" visibility="public" name="withLink" returnType="EvolvableLinkProviderInterface" params={[{"type":"LinkInterface","name":"link","default":null}]}>
Returns an instance with the specified link included.
</ApiItem>
<ApiItem href="#htmllinkinterfacesevolvablelinkproviderinterface-withoutlink" visibility="public" name="withoutLink" returnType="EvolvableLinkProviderInterface" params={[{"type":"LinkInterface","name":"link","default":null}]}>
Returns an instance with the specified link removed.
</ApiItem>

### Methods

<h4 id="htmllinkinterfacesevolvablelinkproviderinterface-withlink"><code>withLink()</code></h4>

```php
public function withLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```

Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if $link is === identical
to a link object already in the collection.

<h4 id="htmllinkinterfacesevolvablelinkproviderinterface-withoutlink"><code>withoutLink()</code></h4>

```php
public function withoutLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```

Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if $link is === identical to a link
object already in the collection.

## Html\Link\Interfaces\LinkInterface

Interface

A readable link object.

- **`Phalcon\Html\Link\Interfaces\LinkInterface`**
- [`Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`](#htmllinkinterfacesevolvablelinkinterface)

`Phalcon\Contracts\Html\Link\LinkTypes`

### Method Summary

<ApiItem href="#htmllinkinterfaceslinkinterface-getattributes" visibility="public" name="getAttributes" returnType="array" params={[]}>
Returns a list of attributes that describe the target URI.
</ApiItem>
<ApiItem href="#htmllinkinterfaceslinkinterface-gethref" visibility="public" name="getHref" returnType="string" params={[]}>
Returns the target of the link.
</ApiItem>
<ApiItem href="#htmllinkinterfaceslinkinterface-getrels" visibility="public" name="getRels" returnType="array" params={[]}>
Returns the relationship type(s) of the link.
</ApiItem>
<ApiItem href="#htmllinkinterfaceslinkinterface-istemplated" visibility="public" name="isTemplated" returnType="bool" params={[]}>
Returns whether this is a templated link.
</ApiItem>

### Methods

<h4 id="htmllinkinterfaceslinkinterface-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Returns a list of attributes that describe the target URI.

A key-value list of attributes, where the key is a string and the value
is either a PHP primitive or an array of PHP strings. If no values are
found an empty array MUST be returned.

<h4 id="htmllinkinterfaceslinkinterface-gethref"><code>getHref()</code></h4>

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

<h4 id="htmllinkinterfaceslinkinterface-getrels"><code>getRels()</code></h4>

```php
public function getRels(): array;
```

Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.

<h4 id="htmllinkinterfaceslinkinterface-istemplated"><code>isTemplated()</code></h4>

```php
public function isTemplated(): bool;
```

Returns whether this is a templated link.

## Html\Link\Interfaces\LinkProviderInterface

Interface

A link provider object.

- **`Phalcon\Html\Link\Interfaces\LinkProviderInterface`**
- [`Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface`](#htmllinkinterfacesevolvablelinkproviderinterface)

`Phalcon\Contracts\Html\Link\LinkTypes`

### Method Summary

<ApiItem href="#htmllinkinterfaceslinkproviderinterface-getlinks" visibility="public" name="getLinks" returnType="array" params={[]}>
Returns an array of LinkInterface objects.
</ApiItem>
<ApiItem href="#htmllinkinterfaceslinkproviderinterface-getlinksbyrel" visibility="public" name="getLinksByRel" returnType="array" params={[{"type":"string","name":"rel","default":null}]}>
Returns an array of LinkInterface objects that have a specific
</ApiItem>

### Methods

<h4 id="htmllinkinterfaceslinkproviderinterface-getlinks"><code>getLinks()</code></h4>

```php
public function getLinks(): array;
```

Returns an array of LinkInterface objects.

<h4 id="htmllinkinterfaceslinkproviderinterface-getlinksbyrel"><code>getLinksByRel()</code></h4>

```php
public function getLinksByRel( string $rel ): array;
```

Returns an array of LinkInterface objects that have a specific
relationship.

## Html\Link\Link

Class

Class Phalcon\Html\Link\Link

- [`Phalcon\Html\Link\AbstractLink`](#htmllinkabstractlink)
- **`Phalcon\Html\Link\Link`** - implements [`Phalcon\Html\Link\Interfaces\LinkInterface`](#htmllinkinterfaceslinkinterface)
- [`Phalcon\Html\Link\EvolvableLink`](#htmllinkevolvablelink)

`Phalcon\Contracts\Html\Link\LinkTypes` · `Phalcon\Html\Link\Interfaces\LinkInterface`

### Method Summary

<ApiItem href="#htmllinklink-getattributes" visibility="public" name="getAttributes" returnType="array" params={[]}>
Returns a list of attributes that describe the target URI.
</ApiItem>
<ApiItem href="#htmllinklink-gethref" visibility="public" name="getHref" returnType="string" params={[]}>
Returns the target of the link.
</ApiItem>
<ApiItem href="#htmllinklink-getrels" visibility="public" name="getRels" returnType="array" params={[]}>
Returns the relationship type(s) of the link.
</ApiItem>
<ApiItem href="#htmllinklink-istemplated" visibility="public" name="isTemplated" returnType="bool" params={[]}>
Returns whether this is a templated link.
</ApiItem>

### Methods

<h4 id="htmllinklink-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Returns a list of attributes that describe the target URI.

A key-value list of attributes, where the key is a string and the value
is either a PHP primitive or an array of PHP strings. If no values are
found an empty array MUST be returned.

<h4 id="htmllinklink-gethref"><code>getHref()</code></h4>

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

<h4 id="htmllinklink-getrels"><code>getRels()</code></h4>

```php
public function getRels(): array;
```

Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.

<h4 id="htmllinklink-istemplated"><code>isTemplated()</code></h4>

```php
public function isTemplated(): bool;
```

Returns whether this is a templated link.

## Html\Link\LinkProvider

Class

- [`Phalcon\Html\Link\AbstractLinkProvider`](#htmllinkabstractlinkprovider)
- **`Phalcon\Html\Link\LinkProvider`** - implements [`Phalcon\Html\Link\Interfaces\LinkProviderInterface`](#htmllinkinterfaceslinkproviderinterface)
- [`Phalcon\Html\Link\EvolvableLinkProvider`](#htmllinkevolvablelinkprovider)

`Phalcon\Contracts\Html\Link\LinkTypes` · `Phalcon\Html\Link\Interfaces\LinkProviderInterface`

### Method Summary

<ApiItem href="#htmllinklinkprovider-getlinks" visibility="public" name="getLinks" returnType="array" params={[]}>
Returns an iterable of LinkInterface objects.
</ApiItem>
<ApiItem href="#htmllinklinkprovider-getlinksbyrel" visibility="public" name="getLinksByRel" returnType="array" params={[{"type":"mixed","name":"rel","default":null}]}>
Returns an iterable of LinkInterface objects that have a specific
</ApiItem>

### Methods

<h4 id="htmllinklinkprovider-getlinks"><code>getLinks()</code></h4>

```php
public function getLinks(): array;
```

Returns an iterable of LinkInterface objects.

The iterable may be an array or any PHP \Traversable object. If no links
are available, an empty array or \Traversable MUST be returned.

<h4 id="htmllinklinkprovider-getlinksbyrel"><code>getLinksByRel()</code></h4>

```php
public function getLinksByRel( mixed $rel ): array;
```

Returns an iterable of LinkInterface objects that have a specific
relationship.

The iterable may be an array or any PHP \Traversable object. If no links
with that relationship are available, an empty array or \Traversable
MUST be returned.

## Html\Link\Serializer\Header

Class

Class Phalcon\Http\Link\Serializer\Header

- **`Phalcon\Html\Link\Serializer\Header`** - implements [`Phalcon\Html\Link\Serializer\SerializerInterface`](#htmllinkserializerserializerinterface)

`Phalcon\Contracts\Html\Link\LinkTypes`

### Method Summary

<ApiItem href="#htmllinkserializerheader-serialize" visibility="public" name="serialize" returnType="string|null" params={[{"type":"array","name":"links","default":null}]}>
Serializes all the passed links to a HTTP link header
</ApiItem>

### Methods

<h4 id="htmllinkserializerheader-serialize"><code>serialize()</code></h4>

```php
public function serialize( array $links ): string|null;
```

Serializes all the passed links to a HTTP link header

## Html\Link\Serializer\SerializerInterface

Interface

Class Phalcon\Http\Link\Serializer\SerializerInterface

- **`Phalcon\Html\Link\Serializer\SerializerInterface`**

`Phalcon\Contracts\Html\Link\LinkTypes`

### Method Summary

<ApiItem href="#htmllinkserializerserializerinterface-serialize" visibility="public" name="serialize" returnType="string|null" params={[{"type":"array","name":"links","default":null}]}>
Serializer method
</ApiItem>

### Methods

<h4 id="htmllinkserializerserializerinterface-serialize"><code>serialize()</code></h4>

```php
public function serialize( array $links ): string|null;
```

Serializer method

## Html\TagFactory

Class

ServiceLocator implementation for Tag helpers.

Built-in services are seeded by the constructor. Users may add or override
services via `set()`, passing a Closure that returns the helper instance.

Helpers are cached per name after first construction.

`__call()` resolves the named helper and dispatches to its `__invoke()`,
so each entry in the @method block below describes the result of calling
`$factory->serviceName(...)` rather than `newInstance("serviceName")`.

@method string        a(string $href, string $text, html_attributes $attributes = [], bool $raw = false)
@method string        aRaw(string $href, string $text, html_attributes $attributes = [])
@method string        base(string $href, html_attributes $attributes = [])
@method string        body(html_attributes $attributes = [])
@method Breadcrumbs   breadcrumbs(string $indent = '    ', string $delimiter = "\n")
@method string        button(string $text, html_attributes $attributes = [], bool $raw = false)
@method string        buttonRaw(string $text, html_attributes $attributes = [])
@method string        close(string $tag, bool $raw = false)
@method Doctype       doctype(int $type = Doctype::HTML5, string $delimiter = "\n")
@method string        element(string $tag, string $text, html_attributes $attributes = [], bool $raw = false)
@method string        elementRaw(string $tag, string $text, html_attributes $attributes = [])
@method string        form(html_attributes $attributes = [])
@method string        friendlyTitle(string $text, string $separator = '-', bool $lower = true, mixed $replace = null)
@method string        img(string $src, html_attributes $attributes = [])
@method Checkbox      inputCheckbox(string $name, string $value = null, html_attributes $attributes = [])
@method CheckboxGroup inputCheckboxGroup(string $name, array $options, mixed $checked = null, array $attributes = [])
@method Generic       inputColor(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputDate(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputDateTime(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputDateTimeLocal(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputEmail(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputFile(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputHidden(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputImage(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputInput(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputMonth(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputNumeric(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputPassword(string $name, string $value = null, html_attributes $attributes = [])
@method Radio         inputRadio(string $name, string $value = null, html_attributes $attributes = [])
@method RadioGroup    inputRadioGroup(string $name, array $options, mixed $checked = null, array $attributes = [])
@method Generic       inputRange(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputSearch(string $name, string $value = null, html_attributes $attributes = [])
@method Select        inputSelect(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputSubmit(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputTel(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputText(string $name, string $value = null, html_attributes $attributes = [])
@method Textarea      inputTextarea(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputTime(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputUrl(string $name, string $value = null, html_attributes $attributes = [])
@method Generic       inputWeek(string $name, string $value = null, html_attributes $attributes = [])
@method string        label(string $label, html_attributes $attributes = [], bool $raw = false)
@method string        labelRaw(string $label, html_attributes $attributes = [])
@method Link          link(string $indent = '    ', string $delimiter = "\n")
@method Meta          meta(string $indent = '    ', string $delimiter = "\n")
@method Ol            ol(string $indent = '    ', string $delimiter = null, html_attributes $attributes = [])
@method Ol            olRaw(string $indent = '    ', string $delimiter = null, html_attributes $attributes = [])
@method string        preload(string $href, string $type = 'style', html_attributes $attributes = [])
@method Script        script(string $indent = '    ', string $delimiter = "\n")
@method Style         style(string $indent = '    ', string $delimiter = "\n")
@method string        tag(string $name, html_attributes $attributes = [])
@method Title         title(string $indent = '    ', string $delimiter = "\n")
@method Ul            ul(string $indent = '    ', string $delimiter = null, html_attributes $attributes = [])
@method Ul            ulRaw(string $indent = '    ', string $delimiter = null, html_attributes $attributes = [])
@method string        voidTag(string $name, html_attributes $attributes = [])

- **`Phalcon\Html\TagFactory`**

`Closure` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exceptions\ServiceNotRegistered` · `Phalcon\Html\Helper\Anchor` · `Phalcon\Html\Helper\Base` · `Phalcon\Html\Helper\Body` · `Phalcon\Html\Helper\Breadcrumbs` · `Phalcon\Html\Helper\Button` · `Phalcon\Html\Helper\Close` · `Phalcon\Html\Helper\Doctype` · `Phalcon\Html\Helper\Element` · `Phalcon\Html\Helper\Form` · `Phalcon\Html\Helper\FriendlyTitle` · `Phalcon\Html\Helper\Img` · `Phalcon\Html\Helper\Input\Checkbox` · `Phalcon\Html\Helper\Input\CheckboxGroup` · `Phalcon\Html\Helper\Input\Generic` · `Phalcon\Html\Helper\Input\Radio` · `Phalcon\Html\Helper\Input\RadioGroup` · `Phalcon\Html\Helper\Input\Select` · `Phalcon\Html\Helper\Input\Textarea` · `Phalcon\Html\Helper\Label` · `Phalcon\Html\Helper\Link` · `Phalcon\Html\Helper\Meta` · `Phalcon\Html\Helper\Ol` · `Phalcon\Html\Helper\Preload` · `Phalcon\Html\Helper\Script` · `Phalcon\Html\Helper\Style` · `Phalcon\Html\Helper\Tag` · `Phalcon\Html\Helper\Title` · `Phalcon\Html\Helper\Ul` · `Phalcon\Html\Helper\VoidTag` · `Phalcon\Http\ResponseInterface` · `Phalcon\Mvc\Url\UrlInterface`

### Method Summary

<ApiItem href="#htmltagfactory-__call" visibility="public" name="__call" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"arguments","default":null}]}>
Magic call to make the helper objects available as methods.
</ApiItem>
<ApiItem href="#htmltagfactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"EscaperInterface","name":"escaper","default":null},{"type":"array","name":"services","default":"[]"},{"type":"ResponseInterface|null","name":"response","default":"null"},{"type":"UrlInterface|null","name":"url","default":"null"}]}>
TagFactory constructor.
</ApiItem>
<ApiItem href="#htmltagfactory-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>
<ApiItem href="#htmltagfactory-newinstance" visibility="public" name="newInstance" returnType="object" params={[{"type":"string","name":"name","default":null}]}>
Create or return a cached instance of the helper.
</ApiItem>
<ApiItem href="#htmltagfactory-set" visibility="public" name="set" returnType="void" params={[{"type":"string","name":"name","default":null},{"type":"Closure","name":"definition","default":null}]}>
Register a helper via a zero-argument Closure. The Closure is invoked on
</ApiItem>
<ApiItem href="#htmltagfactory-getdefaultservices" visibility="protected" name="getDefaultServices" returnType="array" params={[]}>
Default service recipes. Every entry is a callable that returns a
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="factories" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="instances" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="htmltagfactory-__call"><code>__call()</code></h4>

```php
public function __call(
string $name,
array $arguments
);
```

Magic call to make the helper objects available as methods.

<h4 id="htmltagfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
array $services = [],
ResponseInterface|null $response = null,
UrlInterface|null $url = null
);
```

TagFactory constructor.

`$services` maps a service name to a zero-arg Closure that returns the
helper instance.

<h4 id="htmltagfactory-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

<h4 id="htmltagfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name ): object;
```

Create or return a cached instance of the helper.

<h4 id="htmltagfactory-set"><code>set()</code></h4>

```php
public function set(
string $name,
Closure $definition
): void;
```

Register a helper via a zero-argument Closure. The Closure is invoked on
the first matching `newInstance()` call and its return value is cached.
Passing a new definition clears any cached instance so the next call to
`newInstance()` rebuilds it.

<h4 id="htmltagfactory-getdefaultservices"><code>getDefaultServices()</code></h4>

```php
protected function getDefaultServices(): array;
```

Default service recipes. Every entry is a callable that returns a
fully-constructed helper instance. Services are built lazily and cached.

Source: https://docs.phalcon.io/5.20/api/phalcon_html/index.mdx
