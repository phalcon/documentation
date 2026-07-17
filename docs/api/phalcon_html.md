---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Html\Attributes

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes.zep){ .src-btn }

This class helps to work with HTML Attributes

<div class="api-tree" markdown>

- [`Phalcon\Support\Collection`](phalcon_support.md#supportcollection)
    - **`Phalcon\Html\Attributes`** - implements [`Phalcon\Html\Attributes\RenderInterface`](#htmlattributesrenderinterface)

</div>

__Uses__ `Phalcon\Html\Attributes\RenderInterface` · `Phalcon\Html\Escaper\AttributeEscaper` · `Phalcon\Html\Exceptions\AttributeNotRenderable` · `Phalcon\Support\Collection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlattributes-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Alias of the render method</span>
</a>
<a class="api-item" href="#htmlattributes-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>()</code>
<span class="desc">Render attributes as HTML attributes</span>
</a>
<a class="api-item" href="#htmlattributes-renderattributes">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">renderAttributes</span>( <span class="st">array</span> <span class="sv">$attributes</span> )</code>
<span class="desc">@todo remove this when we refactor forms. Maybe remove this class? Put it into traits</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__toString()` { #htmlattributes-__tostring }

```php
public function __toString(): string;
```

Alias of the render method

#### `render()` { #htmlattributes-render }

```php
public function render(): string;
```

Render attributes as HTML attributes

<div class="api-group">Protected · 1</div>

#### `renderAttributes()` { #htmlattributes-renderattributes }

```php
protected function renderAttributes( array $attributes ): string;
```

@todo remove this when we refactor forms. Maybe remove this class? Put it into traits


## Html\Attributes\AttributesInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes/AttributesInterface.zep){ .src-btn }

Html Attributes Interface

<div class="api-tree" markdown>

- **`Phalcon\Html\Attributes\AttributesInterface`**

</div>

__Uses__ `Phalcon\Html\Attributes`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlattributesattributesinterface-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">Attributes</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Get Attributes</span>
</a>
<a class="api-item" href="#htmlattributesattributesinterface-setattributes">
<code class="vis vis-public">public</code>
<code class="ret">AttributesInterface</code>
<code class="sig"><span class="sf">setAttributes</span>( <span class="st">Attributes</span> <span class="sv">$attributes</span> )</code>
<span class="desc">Set Attributes</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getAttributes()` { #htmlattributesattributesinterface-getattributes }

```php
public function getAttributes(): Attributes;
```

Get Attributes

#### `setAttributes()` { #htmlattributesattributesinterface-setattributes }

```php
public function setAttributes( Attributes $attributes ): AttributesInterface;
```

Set Attributes


## Html\Attributes\RenderInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes/RenderInterface.zep){ .src-btn }

Rendering interface for HTML attributes

<div class="api-tree" markdown>

- **`Phalcon\Html\Attributes\RenderInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlattributesrenderinterface-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>()</code>
<span class="desc">Generate a string representation</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `render()` { #htmlattributesrenderinterface-render }

```php
public function render(): string;
```

Generate a string representation


## Html\Breadcrumbs

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Breadcrumbs.zep){ .src-btn }

Phalcon\Html\Breadcrumbs

This component offers an easy way to create breadcrumbs for your application.
The resulting HTML when calling `render()` will have each breadcrumb enclosed
in `<dt>` tags, while the whole string is enclosed in `<dl>` tags.

<div class="api-tree" markdown>

- **`Phalcon\Html\Breadcrumbs`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlbreadcrumbs-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">string</span> <span class="sv">$label</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$link</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Adds a new crumb.</span>
</a>
<a class="api-item" href="#htmlbreadcrumbs-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Clears the crumbs</span>
</a>
<a class="api-item" href="#htmlbreadcrumbs-getseparator">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getSeparator</span>()</code>
<span class="desc">Crumb separator</span>
</a>
<a class="api-item" href="#htmlbreadcrumbs-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$link</span> )</code>
<span class="desc">Removes crumb by url.</span>
</a>
<a class="api-item" href="#htmlbreadcrumbs-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>()</code>
<span class="desc">Renders and outputs breadcrumbs based on previously set template.</span>
</a>
<a class="api-item" href="#htmlbreadcrumbs-setseparator">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setSeparator</span>( <span class="st">string</span> <span class="sv">$separator</span> )</code>
</a>
<a class="api-item" href="#htmlbreadcrumbs-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the internal breadcrumbs array</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `add()` { #htmlbreadcrumbs-add }

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

#### `clear()` { #htmlbreadcrumbs-clear }

```php
public function clear(): void;
```

Clears the crumbs

```php
$breadcrumbs->clear()
```

#### `getSeparator()` { #htmlbreadcrumbs-getseparator }

```php
public function getSeparator(): string;
```

Crumb separator

#### `remove()` { #htmlbreadcrumbs-remove }

```php
public function remove( string $link ): void;
```

Removes crumb by url.

```php
$breadcrumbs->remove("/admin/user/create");

// remove a crumb without an url (last link)
$breadcrumbs->remove();
```

#### `render()` { #htmlbreadcrumbs-render }

```php
public function render(): string;
```

Renders and outputs breadcrumbs based on previously set template.

```php
echo $breadcrumbs->render();
```

#### `setSeparator()` { #htmlbreadcrumbs-setseparator }

```php
public function setSeparator( string $separator ): static;
```

#### `toArray()` { #htmlbreadcrumbs-toarray }

```php
public function toArray(): array;
```

Returns the internal breadcrumbs array


## Html\Escaper

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Html\Escaper`** - implements [`Phalcon\Html\Escaper\EscaperInterface`](#htmlescaperescaperinterface)

</div>

__Uses__ `Phalcon\Html\Escaper\AttributeEscaper` · `Phalcon\Html\Escaper\CssEscaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Escaper\HtmlEscaper` · `Phalcon\Html\Escaper\JsEscaper` · `Phalcon\Html\Escaper\UrlEscaper`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlescaper-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;utf-8&quot;</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$flags</span><span class="sm"> = 11</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$doubleEncode</span><span class="sm"> = true</span></span>)</code>
</a>
<a class="api-item" href="#htmlescaper-attributes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">attributes</span>( <span class="st">mixed</span> <span class="sv">$input</span><span class="sm"> = null</span> )</code>
<span class="desc">Escapes a HTML attribute string or array. Delegates to the configured</span>
</a>
<a class="api-item" href="#htmlescaper-css">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">css</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Escape CSS strings. Delegates to the configured <code>CssEscaper</code>.</span>
</a>
<a class="api-item" href="#htmlescaper-detectencoding">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">detectEncoding</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-escapecss">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeCss</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-escapehtml">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeHtml</span>( <span class="st">string</span> <span class="sv">$input</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-escapehtmlattr">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeHtmlAttr</span>( <span class="st">string</span> <span class="sv">$input</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-escapejs">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeJs</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-escapeurl">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeUrl</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-getattributeescaper">
<code class="vis vis-public">public</code>
<code class="ret">AttributeEscaper</code>
<code class="sig"><span class="sf">getAttributeEscaper</span>()</code>
</a>
<a class="api-item" href="#htmlescaper-getcssescaper">
<code class="vis vis-public">public</code>
<code class="ret">CssEscaper</code>
<code class="sig"><span class="sf">getCssEscaper</span>()</code>
</a>
<a class="api-item" href="#htmlescaper-getencoding">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getEncoding</span>()</code>
</a>
<a class="api-item" href="#htmlescaper-getflags">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getFlags</span>()</code>
</a>
<a class="api-item" href="#htmlescaper-gethtmlescaper">
<code class="vis vis-public">public</code>
<code class="ret">HtmlEscaper</code>
<code class="sig"><span class="sf">getHtmlEscaper</span>()</code>
</a>
<a class="api-item" href="#htmlescaper-getjsescaper">
<code class="vis vis-public">public</code>
<code class="ret">JsEscaper</code>
<code class="sig"><span class="sf">getJsEscaper</span>()</code>
</a>
<a class="api-item" href="#htmlescaper-geturlescaper">
<code class="vis vis-public">public</code>
<code class="ret">UrlEscaper</code>
<code class="sig"><span class="sf">getUrlEscaper</span>()</code>
</a>
<a class="api-item" href="#htmlescaper-html">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">html</span>( <span class="st">string</span> <span class="sv">$input</span><span class="sm"> = null</span> )</code>
<span class="desc">Escapes a HTML string. Delegates to the configured <code>HtmlEscaper</code>.</span>
</a>
<a class="api-item" href="#htmlescaper-js">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">js</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Escape javascript strings. Delegates to the configured <code>JsEscaper</code>.</span>
</a>
<a class="api-item" href="#htmlescaper-normalizeencoding">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">normalizeEncoding</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-setattributeescaper">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAttributeEscaper</span>( <span class="st">AttributeEscaper</span> <span class="sv">$escaper</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-setcssescaper">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setCssEscaper</span>( <span class="st">CssEscaper</span> <span class="sv">$escaper</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-setdoubleencode">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDoubleEncode</span>( <span class="st">bool</span> <span class="sv">$doubleEncode</span> )</code>
<span class="desc">Sets the double_encode flag. Fans out to all sub-objects.</span>
</a>
<a class="api-item" href="#htmlescaper-setencoding">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setEncoding</span>( <span class="st">string</span> <span class="sv">$encoding</span> )</code>
<span class="desc">Sets the encoding. Fans out to all sub-objects.</span>
</a>
<a class="api-item" href="#htmlescaper-setflags">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setFlags</span>( <span class="st">int</span> <span class="sv">$flags</span> )</code>
<span class="desc">Sets the htmlspecialchars flags. Fans out to all sub-objects.</span>
</a>
<a class="api-item" href="#htmlescaper-sethtmlescaper">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setHtmlEscaper</span>( <span class="st">HtmlEscaper</span> <span class="sv">$escaper</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-sethtmlquotetype">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setHtmlQuoteType</span>( <span class="st">int</span> <span class="sv">$flags</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-setjsescaper">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setJsEscaper</span>( <span class="st">JsEscaper</span> <span class="sv">$escaper</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-seturlescaper">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setUrlEscaper</span>( <span class="st">UrlEscaper</span> <span class="sv">$escaper</span> )</code>
</a>
<a class="api-item" href="#htmlescaper-url">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">url</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Escapes a URL. Delegates to the configured <code>UrlEscaper</code>.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AttributeEscaper</code>
<code class="sig"><span class="sv">$attributeEscaper</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">CssEscaper</code>
<code class="sig"><span class="sv">$cssEscaper</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">HtmlEscaper</code>
<code class="sig"><span class="sv">$htmlEscaper</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">JsEscaper</code>
<code class="sig"><span class="sv">$jsEscaper</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">UrlEscaper</code>
<code class="sig"><span class="sv">$urlEscaper</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 29</div>

#### `__construct()` { #htmlescaper-__construct }

```php
public function __construct(
    string $encoding = "utf-8",
    int $flags = 11,
    bool $doubleEncode = true
);
```

#### `attributes()` { #htmlescaper-attributes }

```php
public function attributes( mixed $input = null ): string;
```

Escapes a HTML attribute string or array. Delegates to the configured
`AttributeEscaper`.

#### `css()` { #htmlescaper-css }

```php
public function css( string $input ): string;
```

Escape CSS strings. Delegates to the configured `CssEscaper`.

#### `detectEncoding()` { #htmlescaper-detectencoding }

```php
final public function detectEncoding( string $input ): string|null;
```

#### `escapeCss()` { #htmlescaper-escapecss }

```php
public function escapeCss( string $input ): string;
```

#### `escapeHtml()` { #htmlescaper-escapehtml }

```php
public function escapeHtml( string $input = null ): string;
```

#### `escapeHtmlAttr()` { #htmlescaper-escapehtmlattr }

```php
public function escapeHtmlAttr( string $input = null ): string;
```

#### `escapeJs()` { #htmlescaper-escapejs }

```php
public function escapeJs( string $input ): string;
```

#### `escapeUrl()` { #htmlescaper-escapeurl }

```php
public function escapeUrl( string $input ): string;
```

#### `getAttributeEscaper()` { #htmlescaper-getattributeescaper }

```php
public function getAttributeEscaper(): AttributeEscaper;
```

#### `getCssEscaper()` { #htmlescaper-getcssescaper }

```php
public function getCssEscaper(): CssEscaper;
```

#### `getEncoding()` { #htmlescaper-getencoding }

```php
public function getEncoding(): string;
```

#### `getFlags()` { #htmlescaper-getflags }

```php
public function getFlags(): int;
```

#### `getHtmlEscaper()` { #htmlescaper-gethtmlescaper }

```php
public function getHtmlEscaper(): HtmlEscaper;
```

#### `getJsEscaper()` { #htmlescaper-getjsescaper }

```php
public function getJsEscaper(): JsEscaper;
```

#### `getUrlEscaper()` { #htmlescaper-geturlescaper }

```php
public function getUrlEscaper(): UrlEscaper;
```

#### `html()` { #htmlescaper-html }

```php
public function html( string $input = null ): string;
```

Escapes a HTML string. Delegates to the configured `HtmlEscaper`.

#### `js()` { #htmlescaper-js }

```php
public function js( string $input ): string;
```

Escape javascript strings. Delegates to the configured `JsEscaper`.

#### `normalizeEncoding()` { #htmlescaper-normalizeencoding }

```php
final public function normalizeEncoding( string $input ): string;
```

#### `setAttributeEscaper()` { #htmlescaper-setattributeescaper }

```php
public function setAttributeEscaper( AttributeEscaper $escaper ): static;
```

#### `setCssEscaper()` { #htmlescaper-setcssescaper }

```php
public function setCssEscaper( CssEscaper $escaper ): static;
```

#### `setDoubleEncode()` { #htmlescaper-setdoubleencode }

```php
public function setDoubleEncode( bool $doubleEncode ): static;
```

Sets the double_encode flag. Fans out to all sub-objects.

#### `setEncoding()` { #htmlescaper-setencoding }

```php
public function setEncoding( string $encoding ): static;
```

Sets the encoding. Fans out to all sub-objects.

#### `setFlags()` { #htmlescaper-setflags }

```php
public function setFlags( int $flags ): static;
```

Sets the htmlspecialchars flags. Fans out to all sub-objects.

#### `setHtmlEscaper()` { #htmlescaper-sethtmlescaper }

```php
public function setHtmlEscaper( HtmlEscaper $escaper ): static;
```

#### `setHtmlQuoteType()` { #htmlescaper-sethtmlquotetype }

```php
public function setHtmlQuoteType( int $flags ): static;
```

#### `setJsEscaper()` { #htmlescaper-setjsescaper }

```php
public function setJsEscaper( JsEscaper $escaper ): static;
```

#### `setUrlEscaper()` { #htmlescaper-seturlescaper }

```php
public function setUrlEscaper( UrlEscaper $escaper ): static;
```

#### `url()` { #htmlescaper-url }

```php
public function url( string $input ): string;
```

Escapes a URL. Delegates to the configured `UrlEscaper`.


## Html\EscaperFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/EscaperFactory.zep){ .src-btn }

Class EscaperFactory

<div class="api-tree" markdown>

- **`Phalcon\Html\EscaperFactory`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlescaperfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">Escaper</code>
<code class="sig"><span class="sf">newInstance</span>()</code>
<span class="desc">Create a new instance of the object</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `newInstance()` { #htmlescaperfactory-newinstance }

```php
public function newInstance(): Escaper;
```

Create a new instance of the object


## Html\Escaper\AbstractEscaper

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/AbstractEscaper.zep){ .src-btn }

Shared base for the per-context escaper objects.

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Html\Escaper\Traits\EscaperTrait directly instead of extending this.

<div class="api-tree" markdown>

- **`Phalcon\Html\Escaper\AbstractEscaper`**
    - [`Phalcon\Html\Escaper\AttributeEscaper`](#htmlescaperattributeescaper)
    - [`Phalcon\Html\Escaper\CssEscaper`](#htmlescapercssescaper)
    - [`Phalcon\Html\Escaper\HtmlEscaper`](#htmlescaperhtmlescaper)
    - [`Phalcon\Html\Escaper\JsEscaper`](#htmlescaperjsescaper)
    - [`Phalcon\Html\Escaper\UrlEscaper`](#htmlescaperurlescaper)

</div>

__Uses__ `Phalcon\Html\Escaper\Traits\EscaperTrait`
{ .api-uses }


## Html\Escaper\AttributeEscaper

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/AttributeEscaper.zep){ .src-btn }

Escapes either a single attribute value (string) or an associative array
of attribute pairs. Boolean `true` becomes a bare key (e.g. `disabled`);
`false` and `null` skip the entry; arrays are joined with a space.

<div class="api-tree" markdown>

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
    - **`Phalcon\Html\Escaper\AttributeEscaper`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlescaperattributeescaper-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#htmlescaperattributeescaper-escape">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escape</span>( <span class="st">mixed</span> <span class="sv">$input</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#htmlescaperattributeescaper-escapevalue">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escapeValue</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Encodes a single key/value via <code>htmlspecialchars</code>.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__invoke()` { #htmlescaperattributeescaper-__invoke }

```php
public function __invoke( mixed $input = null ): string;
```

#### `escape()` { #htmlescaperattributeescaper-escape }

```php
public function escape( mixed $input = null ): string;
```

<div class="api-group">Protected · 1</div>

#### `escapeValue()` { #htmlescaperattributeescaper-escapevalue }

```php
protected function escapeValue( string $input ): string;
```

Encodes a single key/value via `htmlspecialchars`.


## Html\Escaper\CssEscaper

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/CssEscaper.zep){ .src-btn }

Escapes a string for use inside a CSS value by replacing non-alphanumeric
characters with their hexadecimal escape sequence.

<div class="api-tree" markdown>

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
    - **`Phalcon\Html\Escaper\CssEscaper`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlescapercssescaper-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
<a class="api-item" href="#htmlescapercssescaper-escape">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escape</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__invoke()` { #htmlescapercssescaper-__invoke }

```php
public function __invoke( string $input ): string;
```

#### `escape()` { #htmlescapercssescaper-escape }

```php
public function escape( string $input ): string;
```


## Html\Escaper\EscaperInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/EscaperInterface.zep){ .src-btn }

Interface for Phalcon\Html\Escaper.

This declares the stable context-escaping surface. The concrete
{@see \Phalcon\Html\Escaper} facade also exposes members that are not part
of this contract - `setDoubleEncode()`, `getFlags()`, and the per-context
sub-escaper getters/setters (`getHtmlEscaper()`, `setAttributeEscaper()`,
and the rest). Type against the concrete class to reach those.

<div class="api-tree" markdown>

- **`Phalcon\Html\Escaper\EscaperInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlescaperescaperinterface-attributes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">attributes</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Escapes a HTML attribute string.</span>
</a>
<a class="api-item" href="#htmlescaperescaperinterface-css">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">css</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Escape CSS strings by replacing non-alphanumeric chars by their</span>
</a>
<a class="api-item" href="#htmlescaperescaperinterface-getencoding">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getEncoding</span>()</code>
<span class="desc">Returns the internal encoding used by the escaper</span>
</a>
<a class="api-item" href="#htmlescaperescaperinterface-html">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">html</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Escapes a HTML string.</span>
</a>
<a class="api-item" href="#htmlescaperescaperinterface-js">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">js</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Escape Javascript strings by replacing non-alphanumeric chars by their</span>
</a>
<a class="api-item" href="#htmlescaperescaperinterface-setencoding">
<code class="vis vis-public">public</code>
<code class="ret">EscaperInterface</code>
<code class="sig"><span class="sf">setEncoding</span>( <span class="st">string</span> <span class="sv">$encoding</span> )</code>
<span class="desc">Sets the encoding to be used by the escaper</span>
</a>
<a class="api-item" href="#htmlescaperescaperinterface-setflags">
<code class="vis vis-public">public</code>
<code class="ret">EscaperInterface</code>
<code class="sig"><span class="sf">setFlags</span>( <span class="st">int</span> <span class="sv">$flags</span> )</code>
<span class="desc">Sets the HTML quoting type for htmlspecialchars</span>
</a>
<a class="api-item" href="#htmlescaperescaperinterface-url">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">url</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Escapes a URL. Internally uses rawurlencode</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `attributes()` { #htmlescaperescaperinterface-attributes }

```php
public function attributes( string $input ): string;
```

Escapes a HTML attribute string.

The concrete {@see \Phalcon\Html\Escaper} also accepts an array of
attribute pairs and tolerates `null`: an array is rendered as escaped
`key="value"` pairs, `null` and `false` values are skipped, and `true`
renders as a bare key. Callers typed against this interface pass a
string. The widened signature lands in the next major.

#### `css()` { #htmlescaperescaperinterface-css }

```php
public function css( string $input ): string;
```

Escape CSS strings by replacing non-alphanumeric chars by their
hexadecimal representation

#### `getEncoding()` { #htmlescaperescaperinterface-getencoding }

```php
public function getEncoding(): string;
```

Returns the internal encoding used by the escaper

#### `html()` { #htmlescaperescaperinterface-html }

```php
public function html( string $input ): string;
```

Escapes a HTML string.

The concrete {@see \Phalcon\Html\Escaper} tolerates `null`, returning an
empty string for it. The nullable signature lands in the next major.

#### `js()` { #htmlescaperescaperinterface-js }

```php
public function js( string $input ): string;
```

Escape Javascript strings by replacing non-alphanumeric chars by their
hexadecimal representation

#### `setEncoding()` { #htmlescaperescaperinterface-setencoding }

```php
public function setEncoding( string $encoding ): EscaperInterface;
```

Sets the encoding to be used by the escaper

#### `setFlags()` { #htmlescaperescaperinterface-setflags }

```php
public function setFlags( int $flags ): EscaperInterface;
```

Sets the HTML quoting type for htmlspecialchars

#### `url()` { #htmlescaperescaperinterface-url }

```php
public function url( string $input ): string;
```

Escapes a URL. Internally uses rawurlencode


## Html\Escaper\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/Exception.zep){ .src-btn }

Class Exception

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Html\Escaper\Exception`**

</div>


## Html\Escaper\HtmlEscaper

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/HtmlEscaper.zep){ .src-btn }

Escapes a string for use as HTML body content via `htmlspecialchars`.

<div class="api-tree" markdown>

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
    - **`Phalcon\Html\Escaper\HtmlEscaper`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlescaperhtmlescaper-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span><span class="sm"> = null</span> )</code>
</a>
<a class="api-item" href="#htmlescaperhtmlescaper-escape">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escape</span>( <span class="st">string</span> <span class="sv">$input</span><span class="sm"> = null</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__invoke()` { #htmlescaperhtmlescaper-__invoke }

```php
public function __invoke( string $input = null ): string;
```

#### `escape()` { #htmlescaperhtmlescaper-escape }

```php
public function escape( string $input = null ): string;
```


## Html\Escaper\JsEscaper

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/JsEscaper.zep){ .src-btn }

Escapes a string for use inside a JavaScript context by replacing
non-alphanumeric characters with their hexadecimal escape sequence.

<div class="api-tree" markdown>

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
    - **`Phalcon\Html\Escaper\JsEscaper`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlescaperjsescaper-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
<a class="api-item" href="#htmlescaperjsescaper-escape">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escape</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__invoke()` { #htmlescaperjsescaper-__invoke }

```php
public function __invoke( string $input ): string;
```

#### `escape()` { #htmlescaperjsescaper-escape }

```php
public function escape( string $input ): string;
```


## Html\Escaper\UrlEscaper

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/UrlEscaper.zep){ .src-btn }

Escapes a string for use as a URL component via `rawurlencode`.

<div class="api-tree" markdown>

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
    - **`Phalcon\Html\Escaper\UrlEscaper`**

</div>

__Uses__ `Phalcon\Traits\Php\UrlTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlescaperurlescaper-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
<a class="api-item" href="#htmlescaperurlescaper-escape">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">escape</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__invoke()` { #htmlescaperurlescaper-__invoke }

```php
public function __invoke( string $input ): string;
```

#### `escape()` { #htmlescaperurlescaper-escape }

```php
public function escape( string $input ): string;
```


## Html\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exception.zep){ .src-btn }

Phalcon\Html\Exception

Exceptions thrown in Phalcon\Html will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Html\Exception`**
        - [`Phalcon\Html\Exceptions\AttributeNotRenderable`](#htmlexceptionsattributenotrenderable)
        - [`Phalcon\Html\Exceptions\FriendlyTitleConversionFailed`](#htmlexceptionsfriendlytitleconversionfailed)
        - [`Phalcon\Html\Exceptions\ServiceNotRegistered`](#htmlexceptionsservicenotregistered)

</div>


## Html\Exceptions\AttributeNotRenderable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exceptions/AttributeNotRenderable.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Html\Exception`](#htmlexception)
        - **`Phalcon\Html\Exceptions\AttributeNotRenderable`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlexceptionsattributenotrenderable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #htmlexceptionsattributenotrenderable-__construct }

```php
public function __construct(
    string $key,
    string $type
);
```


## Html\Exceptions\FriendlyTitleConversionFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exceptions/FriendlyTitleConversionFailed.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Html\Exception`](#htmlexception)
        - **`Phalcon\Html\Exceptions\FriendlyTitleConversionFailed`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlexceptionsfriendlytitleconversionfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #htmlexceptionsfriendlytitleconversionfailed-__construct }

```php
public function __construct( string $message );
```


## Html\Exceptions\InvalidResultsetValue

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exceptions/InvalidResultsetValue.zep){ .src-btn }

<div class="api-tree" markdown>

- `InvalidArgumentException`
    - **`Phalcon\Html\Exceptions\InvalidResultsetValue`**

</div>

__Uses__ `InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlexceptionsinvalidresultsetvalue-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #htmlexceptionsinvalidresultsetvalue-__construct }

```php
public function __construct();
```


## Html\Exceptions\ServiceNotRegistered

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exceptions/ServiceNotRegistered.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Html\Exception`](#htmlexception)
        - **`Phalcon\Html\Exceptions\ServiceNotRegistered`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlexceptionsservicenotregistered-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #htmlexceptionsservicenotregistered-__construct }

```php
public function __construct( string $name );
```


## Html\Exceptions\UsingRequiresTwoValues

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exceptions/UsingRequiresTwoValues.zep){ .src-btn }

<div class="api-tree" markdown>

- `InvalidArgumentException`
    - **`Phalcon\Html\Exceptions\UsingRequiresTwoValues`**

</div>

__Uses__ `InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlexceptionsusingrequirestwovalues-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #htmlexceptionsusingrequirestwovalues-__construct }

```php
public function __construct();
```


## Html\Helper\AbstractHelper

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractHelper.zep){ .src-btn }

@property string           $delimiter
@property EscaperInterface $escaper
@property string           $indent
@property int              $indentLevel

<div class="api-tree" markdown>

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

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperabstracthelper-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">Doctype</span> <span class="sv">$doctype</span><span class="sm"> = null</span></span>)</code>
<span class="desc">AbstractHelper constructor.</span>
</a>
<a class="api-item" href="#htmlhelperabstracthelper-close">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">close</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tag</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Produces a closing tag</span>
</a>
<a class="api-item" href="#htmlhelperabstracthelper-indent">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">indent</span>()</code>
<span class="desc">Replicates the indent x times as per indentLevel</span>
</a>
<a class="api-item" href="#htmlhelperabstracthelper-injectattribute">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">injectAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span></span>)</code>
<span class="desc">Forces a single key into the attribute array, stripping any user-supplied</span>
</a>
<a class="api-item" href="#htmlhelperabstracthelper-orderattributes">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">orderAttributes</span>(<span class="prm"><span class="st">array</span> <span class="sv">$overrides</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span></span>)</code>
<span class="desc">Keeps all the attributes sorted - same order all the time</span>
</a>
<a class="api-item" href="#htmlhelperabstracthelper-renderarrayelements">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">renderArrayElements</span>(<span class="prm"><span class="st">array</span> <span class="sv">$elements</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span></span>)</code>
<span class="desc">Traverses an array and calls the method defined in the first element</span>
</a>
<a class="api-item" href="#htmlhelperabstracthelper-renderattributes">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">renderAttributes</span>( <span class="st">array</span> <span class="sv">$attributes</span> )</code>
<span class="desc">Renders all the attributes</span>
</a>
<a class="api-item" href="#htmlhelperabstracthelper-renderelement">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">renderElement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tag</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Renders an element</span>
</a>
<a class="api-item" href="#htmlhelperabstracthelper-renderfullelement">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">renderFullElement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tag</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Renders an element</span>
</a>
<a class="api-item" href="#htmlhelperabstracthelper-rendertag">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">renderTag</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tag</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$close</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Renders a tag</span>
</a>
<a class="api-item" href="#htmlhelperabstracthelper-selfclose">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">selfClose</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tag</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Produces a self close tag i.e. &lt;img /&gt;</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$delimiter</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Doctype|null</code>
<code class="sig"><span class="sv">$doctype</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">EscaperInterface</code>
<code class="sig"><span class="sv">$escaper</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$indent</span><span class="sm"> = &quot;    &quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$indentLevel</span><span class="sm"> = 1</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #htmlhelperabstracthelper-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    Doctype $doctype = null
);
```

AbstractHelper constructor.

<div class="api-group">Protected · 10</div>

#### `close()` { #htmlhelperabstracthelper-close }

```php
protected function close(
    string $tag,
    bool $raw = false
): string;
```

Produces a closing tag

#### `indent()` { #htmlhelperabstracthelper-indent }

```php
protected function indent(): string;
```

Replicates the indent x times as per indentLevel

#### `injectAttribute()` { #htmlhelperabstracthelper-injectattribute }

```php
protected function injectAttribute(
    string $key,
    string $value,
    array $attributes
): array;
```

Forces a single key into the attribute array, stripping any user-supplied
value for that key first. Used by helpers whose first positional argument
is itself an attribute (`href` for Anchor, `src` for Img, etc.) to make
sure that argument always wins.

#### `orderAttributes()` { #htmlhelperabstracthelper-orderattributes }

```php
protected function orderAttributes(
    array $overrides,
    array $attributes
): array;
```

Keeps all the attributes sorted - same order all the time

#### `renderArrayElements()` { #htmlhelperabstracthelper-renderarrayelements }

```php
protected function renderArrayElements(
    array $elements,
    string $delimiter
): string;
```

Traverses an array and calls the method defined in the first element
with attributes as the second, returning the resulting string

#### `renderAttributes()` { #htmlhelperabstracthelper-renderattributes }

```php
protected function renderAttributes( array $attributes ): string;
```

Renders all the attributes

#### `renderElement()` { #htmlhelperabstracthelper-renderelement }

```php
protected function renderElement(
    string $tag,
    array $attributes = []
): string;
```

Renders an element

#### `renderFullElement()` { #htmlhelperabstracthelper-renderfullelement }

```php
protected function renderFullElement(
    string $tag,
    string $text,
    array $attributes = [],
    bool $raw = false
): string;
```

Renders an element

#### `renderTag()` { #htmlhelperabstracthelper-rendertag }

```php
protected function renderTag(
    string $tag,
    array $attributes = [],
    string $close = ""
): string;
```

Renders a tag

#### `selfClose()` { #htmlhelperabstracthelper-selfclose }

```php
protected function selfClose(
    string $tag,
    array $attributes = []
): string;
```

Produces a self close tag i.e. <img />


## Html\Helper\AbstractList

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractList.zep){ .src-btn }

Class AbstractList

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\AbstractList`**
        - [`Phalcon\Html\Helper\Input\Select`](#htmlhelperinputselect)
        - [`Phalcon\Html\Helper\Ol`](#htmlhelperol)

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperabstractlist-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$indent</span><span class="sm"> = &quot;    &quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperabstractlist-__tostring">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Generates and returns the HTML for the list.</span>
</a>
<a class="api-item" href="#htmlhelperabstractlist-gettag">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTag</span>()</code>
<span class="desc">Returns the tag name.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$attributes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$elementTag</span><span class="sm"> = &quot;li&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$store</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__invoke()` { #htmlhelperabstractlist-__invoke }

```php
public function __invoke(
    string $indent = "    ",
    string $delimiter = null,
    array $attributes = []
): static;
```

#### `__toString()` { #htmlhelperabstractlist-__tostring }

```php
public function __toString();
```

Generates and returns the HTML for the list.

<div class="api-group">Protected · 1</div>

#### `getTag()` { #htmlhelperabstractlist-gettag }

```php
abstract protected function getTag(): string;
```

Returns the tag name.


## Html\Helper\AbstractSeries

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractSeries.zep){ .src-btn }

@property array $attributes
@property array $store

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\AbstractSeries`**
        - [`Phalcon\Html\Helper\Meta`](#htmlhelpermeta)
        - [`Phalcon\Html\Helper\Script`](#htmlhelperscript)
        - [`Phalcon\Html\Helper\Style`](#htmlhelperstyle)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperabstractseries-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$indent</span><span class="sm"> = &quot;    &quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperabstractseries-__tostring">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Generates and returns the HTML for the list. Entries are sorted by</span>
</a>
<a class="api-item" href="#htmlhelperabstractseries-reset">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">reset</span>()</code>
<span class="desc">Resets the internal store.</span>
</a>
<a class="api-item" href="#htmlhelperabstractseries-gettag">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTag</span>()</code>
<span class="desc">Returns the tag name.</span>
</a>
<a class="api-item" href="#htmlhelperabstractseries-pushorplace">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">pushOrPlace</span>(<span class="prm"><span class="st">array</span> <span class="sv">$entry</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$position</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Appends an entry to the store, optionally at a specific integer</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$attributes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$store</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__invoke()` { #htmlhelperabstractseries-__invoke }

```php
public function __invoke(
    string $indent = "    ",
    string $delimiter = null
): static;
```

#### `__toString()` { #htmlhelperabstractseries-__tostring }

```php
public function __toString();
```

Generates and returns the HTML for the list. Entries are sorted by
their integer key first, so an asset registered with a lower position
renders before one registered with a higher position regardless of
registration order.

#### `reset()` { #htmlhelperabstractseries-reset }

```php
public function reset(): static;
```

Resets the internal store.

<div class="api-group">Protected · 2</div>

#### `getTag()` { #htmlhelperabstractseries-gettag }

```php
abstract protected function getTag(): string;
```

Returns the tag name.

#### `pushOrPlace()` { #htmlhelperabstractseries-pushorplace }

```php
protected function pushOrPlace(
    array $entry,
    int $position = -1
): void;
```

Appends an entry to the store, optionally at a specific integer
position. When `position` is negative the entry is pushed onto the next
available auto-increment slot. When `position` is non-negative the entry
is placed at that key, advancing past any already-occupied slots so
existing entries are not overwritten. The store is ksort()ed in
`__toString`, so positions act as a sort key, not a strict address.


## Html\Helper\Anchor

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Anchor.zep){ .src-btn }

Class Anchor

@property bool $forceRaw

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Anchor`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperanchor-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">Doctype</span> <span class="sv">$doctype</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$forceRaw</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperanchor-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$href</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Produce a &lt;a&gt; tag</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$forceRaw</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #htmlhelperanchor-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    Doctype $doctype = null,
    bool $forceRaw = false
);
```

#### `__invoke()` { #htmlhelperanchor-__invoke }

```php
public function __invoke(
    string $href,
    string $text,
    array $attributes = [],
    bool $raw = false
): string;
```

Produce a <a> tag


## Html\Helper\Base

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Base.zep){ .src-btn }

Class Base

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Base`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperbase-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$href</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Produce a <code>&lt;base/&gt;</code> tag.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #htmlhelperbase-__invoke }

```php
public function __invoke(
    string $href = null,
    array $attributes = []
): string;
```

Produce a `<base/>` tag.


## Html\Helper\Body

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Body.zep){ .src-btn }

Class Body

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Body`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperbody-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span> )</code>
<span class="desc">Produce a <code>&lt;body&gt;</code> tag.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #htmlhelperbody-__invoke }

```php
public function __invoke( array $attributes = [] ): string;
```

Produce a `<body>` tag.


## Html\Helper\Breadcrumbs

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Breadcrumbs.zep){ .src-btn }

This component offers an easy way to create breadcrumbs for your application.
The resulting HTML when calling `render()` will have each breadcrumb enclosed
in `<li>` tags, while the whole string is enclosed in `<nav>` and `<ol>` tags.

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Breadcrumbs`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Support\Helper\Str\Interpolate`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperbreadcrumbs-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">UrlInterface</span> <span class="sv">$url</span><span class="sm"> = null</span></span>)</code>
<span class="desc">AbstractHelper constructor.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$indent</span><span class="sm"> = &quot;    &quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets the indent and delimiter and returns the object back.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$link</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$icon</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Adds a new crumb.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-clear">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Clears the crumbs.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-clearattributes">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">clearAttributes</span>()</code>
<span class="desc">Clear the attributes of the parent element.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Get the attributes of the parent element.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-getprefix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPrefix</span>()</code>
<span class="desc">Returns the link prefix.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-getseparator">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getSeparator</span>()</code>
<span class="desc">Returns the separator.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-gettemplate">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getTemplate</span>()</code>
<span class="desc">Return the current template.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-remove">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">int</span> <span class="sv">$index</span> )</code>
<span class="desc">Removes crumb by url.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>()</code>
<span class="desc">Renders and outputs breadcrumbs based on previously set template.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-setattributes">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAttributes</span>( <span class="st">array</span> <span class="sv">$attributes</span> )</code>
<span class="desc">Set the attributes for the parent element.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-setprefix">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setPrefix</span>( <span class="st">string</span> <span class="sv">$prefix</span> )</code>
<span class="desc">Set the link prefix prepended to every non-empty link during rendering.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-setseparator">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setSeparator</span>( <span class="st">string</span> <span class="sv">$separator</span> )</code>
<span class="desc">Set the separator.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-settemplate">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setTemplate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$main</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$line</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$last</span></span>)</code>
<span class="desc">Set the HTML template.</span>
</a>
<a class="api-item" href="#htmlhelperbreadcrumbs-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the internal breadcrumbs array.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 16</div>

#### `__construct()` { #htmlhelperbreadcrumbs-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    UrlInterface $url = null
);
```

AbstractHelper constructor.

#### `__invoke()` { #htmlhelperbreadcrumbs-__invoke }

```php
public function __invoke(
    string $indent = "    ",
    string $delimiter = null
): static;
```

Sets the indent and delimiter and returns the object back.

#### `add()` { #htmlhelperbreadcrumbs-add }

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

#### `clear()` { #htmlhelperbreadcrumbs-clear }

```php
public function clear(): void;
```

Clears the crumbs.

```php
$breadcrumbs->clear()
```

#### `clearAttributes()` { #htmlhelperbreadcrumbs-clearattributes }

```php
public function clearAttributes(): static;
```

Clear the attributes of the parent element.

#### `getAttributes()` { #htmlhelperbreadcrumbs-getattributes }

```php
public function getAttributes(): array;
```

Get the attributes of the parent element.

#### `getPrefix()` { #htmlhelperbreadcrumbs-getprefix }

```php
public function getPrefix(): string;
```

Returns the link prefix.

#### `getSeparator()` { #htmlhelperbreadcrumbs-getseparator }

```php
public function getSeparator(): string;
```

Returns the separator.

#### `getTemplate()` { #htmlhelperbreadcrumbs-gettemplate }

```php
public function getTemplate(): array;
```

Return the current template.

#### `remove()` { #htmlhelperbreadcrumbs-remove }

```php
public function remove( int $index ): void;
```

Removes crumb by url.

```php
// Remove the second element
$breadcrumbs->remove(2);
```

#### `render()` { #htmlhelperbreadcrumbs-render }

```php
public function render(): string;
```

Renders and outputs breadcrumbs based on previously set template.

```php
echo $breadcrumbs->render();
```

#### `setAttributes()` { #htmlhelperbreadcrumbs-setattributes }

```php
public function setAttributes( array $attributes ): static;
```

Set the attributes for the parent element.

#### `setPrefix()` { #htmlhelperbreadcrumbs-setprefix }

```php
public function setPrefix( string $prefix ): static;
```

Set the link prefix prepended to every non-empty link during rendering.
When a Url service was injected, calling this method replaces it.

#### `setSeparator()` { #htmlhelperbreadcrumbs-setseparator }

```php
public function setSeparator( string $separator ): static;
```

Set the separator.

#### `setTemplate()` { #htmlhelperbreadcrumbs-settemplate }

```php
public function setTemplate(
    string $main,
    string $line,
    string $last
): static;
```

Set the HTML template.

#### `toArray()` { #htmlhelperbreadcrumbs-toarray }

```php
public function toArray(): array;
```

Returns the internal breadcrumbs array.


## Html\Helper\Button

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Button.zep){ .src-btn }

Class Button

@property bool $forceRaw

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Button`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperbutton-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">Doctype</span> <span class="sv">$doctype</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$forceRaw</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperbutton-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Produce a <code>&lt;button&gt;</code> tag.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$forceRaw</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #htmlhelperbutton-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    Doctype $doctype = null,
    bool $forceRaw = false
);
```

#### `__invoke()` { #htmlhelperbutton-__invoke }

```php
public function __invoke(
    string $text,
    array $attributes = [],
    bool $raw = false
): string;
```

Produce a `<button>` tag.


## Html\Helper\Close

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Close.zep){ .src-btn }

Class Close

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Close`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperclose-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tag</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Produce a <code>&lt;/...&gt;</code> tag.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #htmlhelperclose-__invoke }

```php
public function __invoke(
    string $tag,
    bool $raw = false
): string;
```

Produce a `</...>` tag.


## Html\Helper\Doctype

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Doctype.zep){ .src-btn }

Creates Doctype tags

<div class="api-tree" markdown>

- **`Phalcon\Html\Helper\Doctype`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperdoctype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
<a class="api-item" href="#htmlhelperdoctype-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">int</span> <span class="sv">$type</span><span class="sm"> = self::HTML5</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = &quot;\n&quot;</span></span>)</code>
<span class="desc">Produce a &lt;doctype&gt; tag</span>
</a>
<a class="api-item" href="#htmlhelperdoctype-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
</a>
<a class="api-item" href="#htmlhelperdoctype-gettype">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getType</span>()</code>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HTML32</span><span class="sm"> = 1</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HTML401_FRAMESET</span><span class="sm"> = 4</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HTML401_STRICT</span><span class="sm"> = 2</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HTML401_TRANSITIONAL</span><span class="sm"> = 3</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HTML5</span><span class="sm"> = 5</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML10_FRAMESET</span><span class="sm"> = 8</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML10_STRICT</span><span class="sm"> = 6</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML10_TRANSITIONAL</span><span class="sm"> = 7</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML11</span><span class="sm"> = 9</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML20</span><span class="sm"> = 10</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML5</span><span class="sm"> = 11</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #htmlhelperdoctype-__construct }

```php
public function __construct();
```

#### `__invoke()` { #htmlhelperdoctype-__invoke }

```php
public function __invoke(
    int $type = self::HTML5,
    string $delimiter = "\n"
): static;
```

Produce a <doctype> tag

#### `__toString()` { #htmlhelperdoctype-__tostring }

```php
public function __toString(): string;
```

#### `getType()` { #htmlhelperdoctype-gettype }

```php
public function getType(): int;
```


## Html\Helper\Element

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Element.zep){ .src-btn }

Class Element

@property bool $forceRaw

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Element`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperelement-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">Doctype</span> <span class="sv">$doctype</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$forceRaw</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperelement-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tag</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Produce a tag.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$forceRaw</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #htmlhelperelement-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    Doctype $doctype = null,
    bool $forceRaw = false
);
```

#### `__invoke()` { #htmlhelperelement-__invoke }

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

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Form.zep){ .src-btn }

Class Form

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Form`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperform-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span> )</code>
<span class="desc">Produce a <code>&lt;form&gt;</code> tag.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #htmlhelperform-__invoke }

```php
public function __invoke( array $attributes = [] ): string;
```

Produce a `<form>` tag.


## Html\Helper\FriendlyTitle

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/FriendlyTitle.zep){ .src-btn }

Converts text to a URL-friendly slug.

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\FriendlyTitle`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception` · `Phalcon\Html\Exceptions\FriendlyTitleConversionFailed` · `Phalcon\Support\Helper\Str\Friendly`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperfriendlytitle-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">EscaperInterface</span> <span class="sv">$escaper</span> )</code>
</a>
<a class="api-item" href="#htmlhelperfriendlytitle-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$separator</span><span class="sm"> = &quot;-&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$lowercase</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$replace</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Friendly</code>
<code class="sig"><span class="sv">$friendly</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #htmlhelperfriendlytitle-__construct }

```php
public function __construct( EscaperInterface $escaper );
```

#### `__invoke()` { #htmlhelperfriendlytitle-__invoke }

```php
public function __invoke(
    string $text,
    string $separator = "-",
    bool $lowercase = true,
    mixed $replace = null
): string;
```


## Html\Helper\Img

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Img.zep){ .src-btn }

Class Img

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Img`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperimg-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$src</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Produce a &lt;img&gt; tag.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #htmlhelperimg-__invoke }

```php
public function __invoke(
    string $src,
    array $attributes = []
): string;
```

Produce a <img> tag.


## Html\Helper\Input\AbstractChecked

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/AbstractChecked.zep){ .src-btn }

Shared base for inputs that can be checked: `<input type="checkbox">` and
`<input type="radio">`. Holds the optional surrounding `<label>` markup,
the `unchecked` companion hidden input, and the rule that decides whether
the rendered tag carries `checked="checked"`.

The match between `checked` and `value` is loose (`==`) by default so that
mixed int/string form input round-trips correctly (e.g. `value=0` against
`checked="0"`). Strict (`===`) matching is available via `strict(true)`.

@property array $label
@property bool  $strict

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
        - **`Phalcon\Html\Helper\Input\AbstractChecked`**
            - [`Phalcon\Html\Helper\Input\Checkbox`](#htmlhelperinputcheckbox)
            - [`Phalcon\Html\Helper\Input\Radio`](#htmlhelperinputradio)

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Helper\Doctype`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperinputabstractchecked-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">Doctype</span> <span class="sv">$doctype</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperinputabstractchecked-__tostring">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Returns the HTML for the input, optionally surrounded by the label</span>
</a>
<a class="api-item" href="#htmlhelperinputabstractchecked-label">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">label</span>( <span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span> )</code>
<span class="desc">Attaches a wrapping <code>&lt;label&gt;</code> to the element. The supplied attributes</span>
</a>
<a class="api-item" href="#htmlhelperinputabstractchecked-strict">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">strict</span>( <span class="st">bool</span> <span class="sv">$flag</span><span class="sm"> = true</span> )</code>
<span class="desc">Toggles strict (<code>===</code>) comparison between the <code>checked</code> attribute and</span>
</a>
<a class="api-item" href="#htmlhelperinputabstractchecked-processchecked">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">processChecked</span>()</code>
<span class="desc">Decides whether the rendered tag carries <code>checked=&quot;checked&quot;</code>. Two</span>
</a>
<a class="api-item" href="#htmlhelperinputabstractchecked-processunchecked">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">processUnchecked</span>()</code>
<span class="desc">Returns the markup for the optional hidden companion input that lets</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$label</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$strict</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #htmlhelperinputabstractchecked-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    Doctype $doctype = null
);
```

#### `__toString()` { #htmlhelperinputabstractchecked-__tostring }

```php
public function __toString();
```

Returns the HTML for the input, optionally surrounded by the label
fragment configured via `label()` and preceded by the hidden companion
input emitted when an `unchecked` attribute is supplied.

#### `label()` { #htmlhelperinputabstractchecked-label }

```php
public function label( array $attributes = [] ): static;
```

Attaches a wrapping `<label>` to the element. The supplied attributes
are merged with a default `for` pointing at the input's `id`. A `text`
pseudo-attribute, if present, becomes the label text and is stripped
from the rendered attributes.

#### `strict()` { #htmlhelperinputabstractchecked-strict }

```php
public function strict( bool $flag = true ): static;
```

Toggles strict (`===`) comparison between the `checked` attribute and
the `value` attribute when deciding whether to render the input as
checked. Defaults to loose (`==`), which matches typical form-input
round-tripping where types may differ between the source data and the
value rendered into the markup.

<div class="api-group">Protected · 2</div>

#### `processChecked()` { #htmlhelperinputabstractchecked-processchecked }

```php
protected function processChecked(): void;
```

Decides whether the rendered tag carries `checked="checked"`. Two
paths qualify as checked: an unconditional opt-in via
`["checked" => "checked"]` (case-insensitive) or `["checked" => true]`,
and a value-match path where the supplied `checked` attribute equals
the input's `value` (`==` by default, `===` under `strict(true)`).

#### `processUnchecked()` { #htmlhelperinputabstractchecked-processunchecked }

```php
protected function processUnchecked(): string;
```

Returns the markup for the optional hidden companion input that lets
a checkbox/radio submit a value when unchecked.


## Html\Helper\Input\AbstractGroup

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/AbstractGroup.zep){ .src-btn }

Shared base for rendering a group of same-named inputs (checkbox or radio)
from an options array.

Each option in the $options array may be either:
  - a scalar string label:  ['value' => 'Label text']
  - a rich definition:      ['value' => ['label' => 'Label text', 'disabled' => true, ...]]

The $checked parameter is resolved by the concrete subclass:
  - CheckboxGroup compares against an array of selected values
  - RadioGroup compares against a single scalar value

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Input\AbstractGroup`**
        - [`Phalcon\Html\Helper\Input\CheckboxGroup`](#htmlhelperinputcheckboxgroup)
        - [`Phalcon\Html\Helper\Input\RadioGroup`](#htmlhelperinputradiogroup)

</div>

__Uses__ `Phalcon\Html\Helper\AbstractHelper`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperinputabstractgroup-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$checked</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperinputabstractgroup-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Renders the group of inputs as a string.</span>
</a>
<a class="api-item" href="#htmlhelperinputabstractgroup-ischecked">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isChecked</span>( <span class="st">string</span> <span class="sv">$value</span> )</code>
<span class="desc">Determines whether the given value is considered checked.</span>
</a>
<a class="api-item" href="#htmlhelperinputabstractgroup-renderitem">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">renderItem</span>(<span class="prm"><span class="st">string</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Renders a single input + optional label pair.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$checked</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$name</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$sharedAttributes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = &quot;checkbox&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__invoke()` { #htmlhelperinputabstractgroup-__invoke }

```php
public function __invoke(
    string $name,
    array $options,
    mixed $checked = null,
    array $attributes = []
): static;
```

#### `__toString()` { #htmlhelperinputabstractgroup-__tostring }

```php
public function __toString(): string;
```

Renders the group of inputs as a string.

<div class="api-group">Protected · 2</div>

#### `isChecked()` { #htmlhelperinputabstractgroup-ischecked }

```php
abstract protected function isChecked( string $value ): bool;
```

Determines whether the given value is considered checked.

#### `renderItem()` { #htmlhelperinputabstractgroup-renderitem }

```php
protected function renderItem(
    string $value,
    mixed $definition
): string;
```

Renders a single input + optional label pair.


## Html\Helper\Input\AbstractInput

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/AbstractInput.zep){ .src-btn }

Class AbstractInput

@property array  $attributes
@property string $type
@property string $value

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Input\AbstractInput`**
        - [`Phalcon\Html\Helper\Input\AbstractChecked`](#htmlhelperinputabstractchecked)
        - [`Phalcon\Html\Helper\Input\Generic`](#htmlhelperinputgeneric)
        - [`Phalcon\Html\Helper\Input\Textarea`](#htmlhelperinputtextarea)

</div>

__Uses__ `Phalcon\Html\Helper\AbstractHelper` · `Phalcon\Html\Helper\Doctype`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperinputabstractinput-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperinputabstractinput-__tostring">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Returns the HTML for the input.</span>
</a>
<a class="api-item" href="#htmlhelperinputabstractinput-setvalue">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setValue</span>( <span class="st">string</span> <span class="sv">$value</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the value of the element</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$attributes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = &quot;text&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__invoke()` { #htmlhelperinputabstractinput-__invoke }

```php
public function __invoke(
    string $name,
    string $value = null,
    array $attributes = []
): static;
```

#### `__toString()` { #htmlhelperinputabstractinput-__tostring }

```php
public function __toString();
```

Returns the HTML for the input.

#### `setValue()` { #htmlhelperinputabstractinput-setvalue }

```php
public function setValue( string $value = null ): static;
```

Sets the value of the element


## Html\Helper\Input\Checkbox

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Checkbox.zep){ .src-btn }

Renders an `<input type="checkbox">`. Behavior (label wrapping, `unchecked`
companion, loose-by-default `checked` match) lives in `AbstractChecked`.

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
        - [`Phalcon\Html\Helper\Input\AbstractChecked`](#htmlhelperinputabstractchecked)
            - **`Phalcon\Html\Helper\Input\Checkbox`**

</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = &quot;checkbox&quot;</span></code>
</div>
</div>


## Html\Helper\Input\CheckboxGroup

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/CheckboxGroup.zep){ .src-btn }

Renders a group of `<input type="checkbox">` elements from an options array.

The $checked parameter should be an array of selected values, or a single
scalar value (treated as a one-element array).

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\Input\AbstractGroup`](#htmlhelperinputabstractgroup)
        - **`Phalcon\Html\Helper\Input\CheckboxGroup`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperinputcheckboxgroup-ischecked">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isChecked</span>( <span class="st">string</span> <span class="sv">$value</span> )</code>
<span class="desc">Returns true when $value appears in the checked list.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = &quot;checkbox&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Protected · 1</div>

#### `isChecked()` { #htmlhelperinputcheckboxgroup-ischecked }

```php
protected function isChecked( string $value ): bool;
```

Returns true when $value appears in the checked list.


## Html\Helper\Input\Generic

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Generic.zep){ .src-btn }

Generic input helper. The HTML5 `type` attribute is supplied via the
constructor, which means the `TagFactory` can register a single class
for all type-string-only inputs (color, date, email, hidden, number, ...)
and differentiate them through the recipe map. The type can also be
changed after construction via `setType()`.

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
        - **`Phalcon\Html\Helper\Input\Generic`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Helper\Doctype`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperinputgeneric-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">Doctype</span> <span class="sv">$doctype</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span><span class="sm"> = &quot;text&quot;</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperinputgeneric-settype">
<code class="vis vis-public">public</code>
<code class="ret">AbstractInput</code>
<code class="sig"><span class="sf">setType</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Sets the type of the input.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #htmlhelperinputgeneric-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    Doctype $doctype = null,
    string $type = "text"
);
```

#### `setType()` { #htmlhelperinputgeneric-settype }

```php
public function setType( string $type ): AbstractInput;
```

Sets the type of the input.


## Html\Helper\Input\Radio

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Radio.zep){ .src-btn }

Renders an `<input type="radio">`. Behavior (label wrapping, `unchecked`
companion, loose-by-default `checked` match) lives in `AbstractChecked`.

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
        - [`Phalcon\Html\Helper\Input\AbstractChecked`](#htmlhelperinputabstractchecked)
            - **`Phalcon\Html\Helper\Input\Radio`**

</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = &quot;radio&quot;</span></code>
</div>
</div>


## Html\Helper\Input\RadioGroup

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/RadioGroup.zep){ .src-btn }

Renders a group of `<input type="radio">` elements from an options array.

The $checked parameter should be a single scalar value matching the selected
option's value attribute.

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\Input\AbstractGroup`](#htmlhelperinputabstractgroup)
        - **`Phalcon\Html\Helper\Input\RadioGroup`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperinputradiogroup-ischecked">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isChecked</span>( <span class="st">string</span> <span class="sv">$value</span> )</code>
<span class="desc">Returns true when $value loosely equals the checked scalar.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = &quot;radio&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Protected · 1</div>

#### `isChecked()` { #htmlhelperinputradiogroup-ischecked }

```php
protected function isChecked( string $value ): bool;
```

Returns true when $value loosely equals the checked scalar.


## Html\Helper\Input\Select

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Select.zep){ .src-btn }

Class Select

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\AbstractList`](#htmlhelperabstractlist)
        - **`Phalcon\Html\Helper\Input\Select`**

</div>

__Uses__ `Phalcon\Contracts\Html\Helper\Input\SelectData` · `Phalcon\Html\Helper\AbstractList`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperinputselect-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Add an element to the list</span>
</a>
<a class="api-item" href="#htmlhelperinputselect-addplaceholder">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addPlaceholder</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$value</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Add a placeholder to the element</span>
</a>
<a class="api-item" href="#htmlhelperinputselect-fromdata">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">fromData</span>( <span class="st">SelectData</span> <span class="sv">$data</span> )</code>
<span class="desc">Populates the select from a data provider.</span>
</a>
<a class="api-item" href="#htmlhelperinputselect-optgroup">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">optGroup</span>(<span class="prm"><span class="st">string</span> <span class="sv">$label</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Creates an option group</span>
</a>
<a class="api-item" href="#htmlhelperinputselect-placeholder">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">placeholder</span>( <span class="st">string</span> <span class="sv">$text</span> )</code>
<span class="desc">Adds a non-selectable placeholder option as the first entry. Renders</span>
</a>
<a class="api-item" href="#htmlhelperinputselect-selected">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">selected</span>( <span class="st">string</span> <span class="sv">$selected</span> )</code>
</a>
<a class="api-item" href="#htmlhelperinputselect-strict">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">strict</span>( <span class="st">bool</span> <span class="sv">$flag</span><span class="sm"> = true</span> )</code>
<span class="desc">Toggles strict (<code>===</code>) comparison between an option&#039;s <code>value</code> and</span>
</a>
<a class="api-item" href="#htmlhelperinputselect-gettag">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTag</span>()</code>
</a>
<a class="api-item" href="#htmlhelperinputselect-optgroupend">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">optGroupEnd</span>()</code>
</a>
<a class="api-item" href="#htmlhelperinputselect-optgroupstart">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">optGroupStart</span>(<span class="prm"><span class="st">string</span> <span class="sv">$label</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$elementTag</span><span class="sm"> = &quot;option&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$inOptGroup</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$selected</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$strict</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `add()` { #htmlhelperinputselect-add }

```php
public function add(
    string $text,
    string $value = null,
    array $attributes = [],
    bool $raw = false
): static;
```

Add an element to the list

#### `addPlaceholder()` { #htmlhelperinputselect-addplaceholder }

```php
public function addPlaceholder(
    string $text,
    string $value = null,
    array $attributes = [],
    bool $raw = false
): static;
```

Add a placeholder to the element

#### `fromData()` { #htmlhelperinputselect-fromdata }

```php
public function fromData( SelectData $data ): static;
```

Populates the select from a data provider.

Flat entries: key = option value, value = label string.
Optgroup entries: key = group label, value = [value => label] array.

#### `optGroup()` { #htmlhelperinputselect-optgroup }

```php
public function optGroup(
    string $label = null,
    array $attributes = []
): static;
```

Creates an option group

#### `placeholder()` { #htmlhelperinputselect-placeholder }

```php
public function placeholder( string $text ): static;
```

Adds a non-selectable placeholder option as the first entry. Renders
as `<option value="" disabled selected>$text</option>`, matching the
common HTML idiom for "Choose..."-style prompts.

#### `selected()` { #htmlhelperinputselect-selected }

```php
public function selected( string $selected ): static;
```

#### `strict()` { #htmlhelperinputselect-strict }

```php
public function strict( bool $flag = true ): static;
```

Toggles strict (`===`) comparison between an option's `value` and
the previously stored `selected` value. Defaults to loose (`==`),
matching the round-tripping fix in `AbstractChecked` so mixed
int/string form data marks the right option as selected.

<div class="api-group">Protected · 3</div>

#### `getTag()` { #htmlhelperinputselect-gettag }

```php
protected function getTag(): string;
```

#### `optGroupEnd()` { #htmlhelperinputselect-optgroupend }

```php
protected function optGroupEnd(): string;
```

#### `optGroupStart()` { #htmlhelperinputselect-optgroupstart }

```php
protected function optGroupStart(
    string $label,
    array $attributes
): string;
```


## Html\Helper\Input\Select\ArrayData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Select/ArrayData.zep){ .src-btn }

Wraps a plain PHP array as a SELECT data provider.

Keys are option values; string values are labels;
array values define optgroups.

<div class="api-tree" markdown>

- **`Phalcon\Html\Helper\Input\Select\ArrayData`** - implements [`Phalcon\Contracts\Html\Helper\Input\SelectData`](phalcon_contracts.md#contractshtmlhelperinputselectdata)

</div>

__Uses__ `Phalcon\Contracts\Html\Helper\Input\SelectData`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperinputselectarraydata-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">array</span> <span class="sv">$data</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperinputselectarraydata-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
</a>
<a class="api-item" href="#htmlhelperinputselectarraydata-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$attributes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$data</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #htmlhelperinputselectarraydata-__construct }

```php
public function __construct(
    array $data = [],
    array $attributes = []
);
```

#### `getAttributes()` { #htmlhelperinputselectarraydata-getattributes }

```php
public function getAttributes(): array;
```

#### `getOptions()` { #htmlhelperinputselectarraydata-getoptions }

```php
public function getOptions(): array;
```


## Html\Helper\Input\Select\ResultsetData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Select/ResultsetData.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Html\Helper\Input\Select\ResultsetData`** - implements [`Phalcon\Contracts\Html\Helper\Input\SelectData`](phalcon_contracts.md#contractshtmlhelperinputselectdata)

</div>

__Uses__ `InvalidArgumentException` · `Phalcon\Contracts\Html\Helper\Input\SelectData` · `Phalcon\Html\Exceptions\InvalidResultsetValue` · `Phalcon\Html\Exceptions\UsingRequiresTwoValues` · `Phalcon\Mvc\Model\ResultsetInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperinputselectresultsetdata-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">ResultsetInterface</span> <span class="sv">$resultset</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$using</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributesMap</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperinputselectresultsetdata-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Returns per-option attribute maps, keyed by option value.</span>
</a>
<a class="api-item" href="#htmlhelperinputselectresultsetdata-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
</a>
<a class="api-item" href="#htmlhelperinputselectresultsetdata-readfield">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">readField</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$option</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Reads a property from the row, supporting both objects (via</span>
</a>
<a class="api-item" href="#htmlhelperinputselectresultsetdata-resolve">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resolve</span>()</code>
<span class="desc">Walks the resultset once, building both the option map and the</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$attributesMap</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sv">$resolvedAttributes</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array|null</code>
<code class="sig"><span class="sv">$resolvedOptions</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ResultsetInterface</code>
<code class="sig"><span class="sv">$resultset</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$using</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #htmlhelperinputselectresultsetdata-__construct }

```php
public function __construct(
    ResultsetInterface $resultset,
    array $using,
    array $attributesMap = []
);
```

#### `getAttributes()` { #htmlhelperinputselectresultsetdata-getattributes }

```php
public function getAttributes(): array;
```

Returns per-option attribute maps, keyed by option value.

#### `getOptions()` { #htmlhelperinputselectresultsetdata-getoptions }

```php
public function getOptions(): array;
```

<div class="api-group">Protected · 2</div>

#### `readField()` { #htmlhelperinputselectresultsetdata-readfield }

```php
protected function readField(
    mixed $option,
    string $field
);
```

Reads a property from the row, supporting both objects (via
`readAttribute` when present) and plain arrays.

#### `resolve()` { #htmlhelperinputselectresultsetdata-resolve }

```php
protected function resolve(): void;
```

Walks the resultset once, building both the option map and the
per-option resolved attribute map. Closures in `attributesMap`
receive the current row; static values are passed through.
`false` or `null` values skip the attribute entirely.


## Html\Helper\Input\Textarea

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Textarea.zep){ .src-btn }

Class Textarea

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
        - **`Phalcon\Html\Helper\Input\Textarea`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperinputtextarea-__tostring">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Returns the HTML for the input.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span><span class="sm"> = &quot;textarea&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__toString()` { #htmlhelperinputtextarea-__tostring }

```php
public function __toString();
```

Returns the HTML for the input.


## Html\Helper\Label

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Label.zep){ .src-btn }

Class Label

@property bool $forceRaw

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Label`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperlabel-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">Doctype</span> <span class="sv">$doctype</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$forceRaw</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperlabel-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$label</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Produce a <code>&lt;label&gt;</code> tag.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$forceRaw</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #htmlhelperlabel-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    Doctype $doctype = null,
    bool $forceRaw = false
);
```

#### `__invoke()` { #htmlhelperlabel-__invoke }

```php
public function __invoke(
    string $label,
    array $attributes = [],
    bool $raw = false
): string;
```

Produce a `<label>` tag.


## Html\Helper\Link

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Link.zep){ .src-btn }

Creates <link> tags

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
        - [`Phalcon\Html\Helper\Style`](#htmlhelperstyle)
            - **`Phalcon\Html\Helper\Link`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperlink-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">string</span> <span class="sv">$url</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$position</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Add an element to the list</span>
</a>
<a class="api-item" href="#htmlhelperlink-getattributes">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>(<span class="prm"><span class="st">string</span> <span class="sv">$url</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span></span>)</code>
<span class="desc">Returns the necessary attributes</span>
</a>
<a class="api-item" href="#htmlhelperlink-gettag">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTag</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `add()` { #htmlhelperlink-add }

```php
public function add(
    string $url,
    array $attributes = [],
    int $position = -1
): static;
```

Add an element to the list

<div class="api-group">Protected · 2</div>

#### `getAttributes()` { #htmlhelperlink-getattributes }

```php
protected function getAttributes(
    string $url,
    array $attributes
): array;
```

Returns the necessary attributes

#### `getTag()` { #htmlhelperlink-gettag }

```php
protected function getTag(): string;
```


## Html\Helper\Meta

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Meta.zep){ .src-btn }

Class Meta

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
        - **`Phalcon\Html\Helper\Meta`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelpermeta-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$position</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Add an element to the list</span>
</a>
<a class="api-item" href="#htmlhelpermeta-addhttp">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addHttp</span>(<span class="prm"><span class="st">string</span> <span class="sv">$httpEquiv</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$position</span><span class="sm"> = -1</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelpermeta-addname">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addName</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$position</span><span class="sm"> = -1</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelpermeta-addproperty">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addProperty</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$position</span><span class="sm"> = -1</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelpermeta-gettag">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTag</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `add()` { #htmlhelpermeta-add }

```php
public function add(
    array $attributes = [],
    int $position = -1
): static;
```

Add an element to the list

#### `addHttp()` { #htmlhelpermeta-addhttp }

```php
public function addHttp(
    string $httpEquiv,
    string $content,
    int $position = -1
): static;
```

#### `addName()` { #htmlhelpermeta-addname }

```php
public function addName(
    string $name,
    string $content,
    int $position = -1
): static;
```

#### `addProperty()` { #htmlhelpermeta-addproperty }

```php
public function addProperty(
    string $name,
    string $content,
    int $position = -1
): static;
```

<div class="api-group">Protected · 1</div>

#### `getTag()` { #htmlhelpermeta-gettag }

```php
protected function getTag(): string;
```


## Html\Helper\Ol

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Ol.zep){ .src-btn }

Class Ol

@property bool $forceRaw

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\AbstractList`](#htmlhelperabstractlist)
        - **`Phalcon\Html\Helper\Ol`**
            - [`Phalcon\Html\Helper\Ul`](#htmlhelperul)

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperol-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">Doctype</span> <span class="sv">$doctype</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$forceRaw</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperol-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Add an element to the list</span>
</a>
<a class="api-item" href="#htmlhelperol-gettag">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTag</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$forceRaw</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #htmlhelperol-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    Doctype $doctype = null,
    bool $forceRaw = false
);
```

#### `add()` { #htmlhelperol-add }

```php
public function add(
    string $text,
    array $attributes = [],
    bool $raw = false
): static;
```

Add an element to the list

<div class="api-group">Protected · 1</div>

#### `getTag()` { #htmlhelperol-gettag }

```php
protected function getTag(): string;
```


## Html\Helper\Preload

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Preload.zep){ .src-btn }

Generates a <link rel="preload"> tag for resource hinting.
If a ResponseInterface is provided, also sets the HTTP Link header.

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Preload`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Link\Link` · `Phalcon\Html\Link\Serializer\Header` · `Phalcon\Http\ResponseInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperpreload-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">ResponseInterface</span> <span class="sv">$response</span><span class="sm"> = null</span></span>)</code>
</a>
<a class="api-item" href="#htmlhelperpreload-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$href</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span><span class="sm"> = &quot;style&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ResponseInterface|null</code>
<code class="sig"><span class="sv">$response</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #htmlhelperpreload-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    ResponseInterface $response = null
);
```

#### `__invoke()` { #htmlhelperpreload-__invoke }

```php
public function __invoke(
    string $href,
    string $type = "style",
    array $attributes = []
): string;
```


## Html\Helper\Script

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Script.zep){ .src-btn }

Class Script

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
        - **`Phalcon\Html\Helper\Script`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperscript-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">string</span> <span class="sv">$url</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$position</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Add an element to the list</span>
</a>
<a class="api-item" href="#htmlhelperscript-begininternal">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">beginInternal</span>()</code>
<span class="desc">Begins capturing inline script content via output buffering. Pair</span>
</a>
<a class="api-item" href="#htmlhelperscript-endinternal">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">endInternal</span>(<span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$position</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Closes an inline-script buffer opened by <code>beginInternal()</code> and adds</span>
</a>
<a class="api-item" href="#htmlhelperscript-getattributes">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>(<span class="prm"><span class="st">string</span> <span class="sv">$url</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span></span>)</code>
<span class="desc">Returns the necessary attributes</span>
</a>
<a class="api-item" href="#htmlhelperscript-gettag">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTag</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `add()` { #htmlhelperscript-add }

```php
public function add(
    string $url,
    array $attributes = [],
    int $position = -1
): static;
```

Add an element to the list

#### `beginInternal()` { #htmlhelperscript-begininternal }

```php
public function beginInternal(): void;
```

Begins capturing inline script content via output buffering. Pair
with `endInternal()` to close the buffer and append the captured
markup as a `<script>...</script>` block in the asset stack.

#### `endInternal()` { #htmlhelperscript-endinternal }

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

<div class="api-group">Protected · 2</div>

#### `getAttributes()` { #htmlhelperscript-getattributes }

```php
protected function getAttributes(
    string $url,
    array $attributes
): array;
```

Returns the necessary attributes

#### `getTag()` { #htmlhelperscript-gettag }

```php
protected function getTag(): string;
```


## Html\Helper\Style

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Style.zep){ .src-btn }

Class Style

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
        - **`Phalcon\Html\Helper\Style`**
            - [`Phalcon\Html\Helper\Link`](#htmlhelperlink)

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperstyle-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">string</span> <span class="sv">$url</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$position</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">Add an element to the list</span>
</a>
<a class="api-item" href="#htmlhelperstyle-setstyle">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setStyle</span>( <span class="st">bool</span> <span class="sv">$flag</span> )</code>
<span class="desc">Sets if this is a style or link tag</span>
</a>
<a class="api-item" href="#htmlhelperstyle-getattributes">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>(<span class="prm"><span class="st">string</span> <span class="sv">$url</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span></span>)</code>
<span class="desc">Returns the necessary attributes</span>
</a>
<a class="api-item" href="#htmlhelperstyle-gettag">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTag</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `add()` { #htmlhelperstyle-add }

```php
public function add(
    string $url,
    array $attributes = [],
    int $position = -1
): static;
```

Add an element to the list

#### `setStyle()` { #htmlhelperstyle-setstyle }

```php
public function setStyle( bool $flag ): static;
```

Sets if this is a style or link tag

<div class="api-group">Protected · 2</div>

#### `getAttributes()` { #htmlhelperstyle-getattributes }

```php
protected function getAttributes(
    string $url,
    array $attributes
): array;
```

Returns the necessary attributes

#### `getTag()` { #htmlhelperstyle-gettag }

```php
protected function getTag(): string;
```


## Html\Helper\Tag

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Tag.zep){ .src-btn }

Generic open-tag escape hatch. Renders just `<name attr="...">` for any
tag name without a dedicated helper. For an open + content + close tag
use `Element` instead. For self-closing void tags (img, br, hr, etc.)
use `VoidTag`.

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Tag`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelpertag-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #htmlhelpertag-__invoke }

```php
public function __invoke(
    string $name,
    array $attributes = []
): string;
```


## Html\Helper\Title

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Title.zep){ .src-btn }

Class Title

@property array  $append
@property string $delimiter
@property string $indent
@property array  $prepend
@property string $title
@property string $separator

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\Title`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelpertitle-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$indent</span><span class="sm"> = &quot;    &quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Sets the separator and returns the object back</span>
</a>
<a class="api-item" href="#htmlhelpertitle-__tostring">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Returns the title tags</span>
</a>
<a class="api-item" href="#htmlhelpertitle-append">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">append</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Appends text to current document title</span>
</a>
<a class="api-item" href="#htmlhelpertitle-get">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">get</span>()</code>
<span class="desc">Returns the title</span>
</a>
<a class="api-item" href="#htmlhelpertitle-prepend">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">prepend</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Prepends text to current document title</span>
</a>
<a class="api-item" href="#htmlhelpertitle-set">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Sets the title</span>
</a>
<a class="api-item" href="#htmlhelpertitle-setseparator">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setSeparator</span>(<span class="prm"><span class="st">string</span> <span class="sv">$separator</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$raw</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Sets the separator</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$append</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$prepend</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$separator</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$title</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `__invoke()` { #htmlhelpertitle-__invoke }

```php
public function __invoke(
    string $indent = "    ",
    string $delimiter = null
): static;
```

Sets the separator and returns the object back

#### `__toString()` { #htmlhelpertitle-__tostring }

```php
public function __toString();
```

Returns the title tags

#### `append()` { #htmlhelpertitle-append }

```php
public function append(
    string $text,
    bool $raw = false
): static;
```

Appends text to current document title

#### `get()` { #htmlhelpertitle-get }

```php
public function get(): string;
```

Returns the title

#### `prepend()` { #htmlhelpertitle-prepend }

```php
public function prepend(
    string $text,
    bool $raw = false
): static;
```

Prepends text to current document title

#### `set()` { #htmlhelpertitle-set }

```php
public function set(
    string $text,
    bool $raw = false
): static;
```

Sets the title

#### `setSeparator()` { #htmlhelpertitle-setseparator }

```php
public function setSeparator(
    string $separator,
    bool $raw = false
): static;
```

Sets the separator


## Html\Helper\Ul

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Ul.zep){ .src-btn }

Class Ul

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - [`Phalcon\Html\Helper\AbstractList`](#htmlhelperabstractlist)
        - [`Phalcon\Html\Helper\Ol`](#htmlhelperol)
            - **`Phalcon\Html\Helper\Ul`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelperul-gettag">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTag</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

#### `getTag()` { #htmlhelperul-gettag }

```php
protected function getTag(): string;
```


## Html\Helper\VoidTag

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/VoidTag.zep){ .src-btn }

Generic void-tag escape hatch. Renders a self-closing tag for any name
without a dedicated helper. The trailing `/` is emitted only for XHTML
doctypes, matching the `Input/AbstractInput::__toString` convention.

<div class="api-tree" markdown>

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
    - **`Phalcon\Html\Helper\VoidTag`**

</div>

__Uses__ `Phalcon\Html\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlhelpervoidtag-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #htmlhelpervoidtag-__invoke }

```php
public function __invoke(
    string $name,
    array $attributes = []
): string;
```


## Html\Link\AbstractLink

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/AbstractLink.zep){ .src-btn }

@property Collection $attributes
@property string     $href
@property Collection $rels
@property bool       $templated

<div class="api-tree" markdown>

- **`Phalcon\Html\Link\AbstractLink`**
    - [`Phalcon\Html\Link\Link`](#htmllinklink)

</div>

__Uses__ `Phalcon\Support\Collection`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinkabstractlink-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$rel</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$href</span><span class="sm"> = &quot;&quot;</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Link constructor.</span>
</a>
<a class="api-item" href="#htmllinkabstractlink-dogetattributes">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">doGetAttributes</span>()</code>
<span class="desc">Returns a list of attributes that describe the target URI.</span>
</a>
<a class="api-item" href="#htmllinkabstractlink-dogethref">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">doGetHref</span>()</code>
<span class="desc">Returns the target of the link.</span>
</a>
<a class="api-item" href="#htmllinkabstractlink-dogetrels">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">doGetRels</span>()</code>
<span class="desc">Returns the relationship type(s) of the link.</span>
</a>
<a class="api-item" href="#htmllinkabstractlink-doistemplated">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">doIsTemplated</span>()</code>
<span class="desc">Returns whether this is a templated link.</span>
</a>
<a class="api-item" href="#htmllinkabstractlink-dowithattribute">
<code class="vis vis-protected">protected</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">doWithAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
</a>
<a class="api-item" href="#htmllinkabstractlink-dowithhref">
<code class="vis vis-protected">protected</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">doWithHref</span>( <span class="st">string</span> <span class="sv">$href</span> )</code>
</a>
<a class="api-item" href="#htmllinkabstractlink-dowithrel">
<code class="vis vis-protected">protected</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">doWithRel</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
</a>
<a class="api-item" href="#htmllinkabstractlink-dowithoutattribute">
<code class="vis vis-protected">protected</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">doWithoutAttribute</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
</a>
<a class="api-item" href="#htmllinkabstractlink-dowithoutrel">
<code class="vis vis-protected">protected</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">doWithoutRel</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
</a>
<a class="api-item" href="#htmllinkabstractlink-hrefistemplated">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hrefIsTemplated</span>( <span class="st">string</span> <span class="sv">$href</span> )</code>
<span class="desc">Determines if a href is a templated link or not.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sv">$attributes</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$href</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sv">$rels</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$templated</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #htmllinkabstractlink-__construct }

```php
public function __construct(
    string $rel = "",
    string $href = "",
    array $attributes = []
);
```

Link constructor.

<div class="api-group">Protected · 10</div>

#### `doGetAttributes()` { #htmllinkabstractlink-dogetattributes }

```php
protected function doGetAttributes(): array;
```

Returns a list of attributes that describe the target URI.

#### `doGetHref()` { #htmllinkabstractlink-dogethref }

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

#### `doGetRels()` { #htmllinkabstractlink-dogetrels }

```php
protected function doGetRels(): array;
```

Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.

#### `doIsTemplated()` { #htmllinkabstractlink-doistemplated }

```php
protected function doIsTemplated(): bool;
```

Returns whether this is a templated link.

#### `doWithAttribute()` { #htmllinkabstractlink-dowithattribute }

```php
protected function doWithAttribute(
    string $key,
    mixed $value
): static;
```

#### `doWithHref()` { #htmllinkabstractlink-dowithhref }

```php
protected function doWithHref( string $href ): static;
```

#### `doWithRel()` { #htmllinkabstractlink-dowithrel }

```php
protected function doWithRel( string $key ): static;
```

#### `doWithoutAttribute()` { #htmllinkabstractlink-dowithoutattribute }

```php
protected function doWithoutAttribute( string $key ): static;
```

#### `doWithoutRel()` { #htmllinkabstractlink-dowithoutrel }

```php
protected function doWithoutRel( string $key ): static;
```

#### `hrefIsTemplated()` { #htmllinkabstractlink-hrefistemplated }

```php
protected function hrefIsTemplated( string $href ): bool;
```

Determines if a href is a templated link or not.

@see https://tools.ietf.org/html/rfc6570


## Html\Link\AbstractLinkProvider

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/AbstractLinkProvider.zep){ .src-btn }

@property array $links

<div class="api-tree" markdown>

- **`Phalcon\Html\Link\AbstractLinkProvider`**
    - [`Phalcon\Html\Link\LinkProvider`](#htmllinklinkprovider)

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\LinkInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinkabstractlinkprovider-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$links</span><span class="sm"> = []</span> )</code>
<span class="desc">LinkProvider constructor.</span>
</a>
<a class="api-item" href="#htmllinkabstractlinkprovider-dogetlinks">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">doGetLinks</span>()</code>
<span class="desc">Returns an iterable of LinkInterface objects.</span>
</a>
<a class="api-item" href="#htmllinkabstractlinkprovider-dogetlinksbyrel">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">doGetLinksByRel</span>( <span class="st">string</span> <span class="sv">$rel</span> )</code>
<span class="desc">Returns an iterable of LinkInterface objects that have a specific</span>
</a>
<a class="api-item" href="#htmllinkabstractlinkprovider-dowithlink">
<code class="vis vis-protected">protected</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">doWithLink</span>( <span class="st">mixed</span> <span class="sv">$link</span> )</code>
<span class="desc">Returns an instance with the specified link included.</span>
</a>
<a class="api-item" href="#htmllinkabstractlinkprovider-dowithoutlink">
<code class="vis vis-protected">protected</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">doWithoutLink</span>( <span class="st">mixed</span> <span class="sv">$link</span> )</code>
<span class="desc">Returns an instance with the specified link removed.</span>
</a>
<a class="api-item" href="#htmllinkabstractlinkprovider-getkey">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getKey</span>( <span class="st">mixed</span> <span class="sv">$link</span> )</code>
<span class="desc">Returns the object hash key</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$links</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #htmllinkabstractlinkprovider-__construct }

```php
public function __construct( array $links = [] );
```

LinkProvider constructor.

<div class="api-group">Protected · 5</div>

#### `doGetLinks()` { #htmllinkabstractlinkprovider-dogetlinks }

```php
protected function doGetLinks(): array;
```

Returns an iterable of LinkInterface objects.

The iterable may be an array or any PHP \Traversable object. If no links
are available, an empty array or \Traversable MUST be returned.

#### `doGetLinksByRel()` { #htmllinkabstractlinkprovider-dogetlinksbyrel }

```php
protected function doGetLinksByRel( string $rel ): array;
```

Returns an iterable of LinkInterface objects that have a specific
relationship.

The iterable may be an array or any PHP \Traversable object. If no links
with that relationship are available, an empty array or \Traversable
MUST be returned.

#### `doWithLink()` { #htmllinkabstractlinkprovider-dowithlink }

```php
protected function doWithLink( mixed $link ): static;
```

Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if $link is === identical
to a link object already in the collection.

#### `doWithoutLink()` { #htmllinkabstractlinkprovider-dowithoutlink }

```php
protected function doWithoutLink( mixed $link ): static;
```

Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if $link is === identical to a link
object already in the collection.

#### `getKey()` { #htmllinkabstractlinkprovider-getkey }

```php
protected function getKey( mixed $link ): string;
```

Returns the object hash key


## Html\Link\EvolvableLink

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/EvolvableLink.zep){ .src-btn }

Class Phalcon\Html\Link\EvolvableLink

<div class="api-tree" markdown>

- [`Phalcon\Html\Link\AbstractLink`](#htmllinkabstractlink)
    - [`Phalcon\Html\Link\Link`](#htmllinklink)
        - **`Phalcon\Html\Link\EvolvableLink`** - implements [`Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`](#htmllinkinterfacesevolvablelinkinterface)

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinkevolvablelink-withattribute">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">withAttribute</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$attribute</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Returns an instance with the specified attribute added.</span>
</a>
<a class="api-item" href="#htmllinkevolvablelink-withhref">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">withHref</span>( <span class="st">string</span> <span class="sv">$href</span> )</code>
<span class="desc">Returns an instance with the specified href.</span>
</a>
<a class="api-item" href="#htmllinkevolvablelink-withrel">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">withRel</span>( <span class="st">string</span> <span class="sv">$rel</span> )</code>
<span class="desc">Returns an instance with the specified relationship included.</span>
</a>
<a class="api-item" href="#htmllinkevolvablelink-withoutattribute">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">withoutAttribute</span>( <span class="st">string</span> <span class="sv">$attribute</span> )</code>
<span class="desc">Returns an instance with the specified attribute excluded.</span>
</a>
<a class="api-item" href="#htmllinkevolvablelink-withoutrel">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">withoutRel</span>( <span class="st">string</span> <span class="sv">$rel</span> )</code>
<span class="desc">Returns an instance with the specified relationship excluded.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `withAttribute()` { #htmllinkevolvablelink-withattribute }

```php
public function withAttribute(
    mixed $attribute,
    mixed $value
): static;
```

Returns an instance with the specified attribute added.

If the specified attribute is already present, it will be overwritten
with the new value.

#### `withHref()` { #htmllinkevolvablelink-withhref }

```php
public function withHref( string $href ): static;
```

Returns an instance with the specified href.

An implementing library SHOULD evaluate a passed object to a string
immediately rather than waiting for it to be returned later.

#### `withRel()` { #htmllinkevolvablelink-withrel }

```php
public function withRel( string $rel ): static;
```

Returns an instance with the specified relationship included.

If the specified rel is already present, this method MUST return
normally without errors, but without adding the rel a second time.

#### `withoutAttribute()` { #htmllinkevolvablelink-withoutattribute }

```php
public function withoutAttribute( string $attribute ): static;
```

Returns an instance with the specified attribute excluded.

If the specified attribute is not present, this method MUST return
normally without errors.

#### `withoutRel()` { #htmllinkevolvablelink-withoutrel }

```php
public function withoutRel( string $rel ): static;
```

Returns an instance with the specified relationship excluded.

If the specified rel is not present, this method MUST return
normally without errors.


## Html\Link\EvolvableLinkProvider

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/EvolvableLinkProvider.zep){ .src-btn }

Class Phalcon\Html\Link\EvolvableLinkProvider

@property LinkInterface[] $links

<div class="api-tree" markdown>

- [`Phalcon\Html\Link\AbstractLinkProvider`](#htmllinkabstractlinkprovider)
    - [`Phalcon\Html\Link\LinkProvider`](#htmllinklinkprovider)
        - **`Phalcon\Html\Link\EvolvableLinkProvider`** - implements [`Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface`](#htmllinkinterfacesevolvablelinkproviderinterface)

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface` · `Phalcon\Html\Link\Interfaces\LinkInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinkevolvablelinkprovider-withlink">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">withLink</span>( <span class="st">LinkInterface</span> <span class="sv">$link</span> )</code>
<span class="desc">Returns an instance with the specified link included.</span>
</a>
<a class="api-item" href="#htmllinkevolvablelinkprovider-withoutlink">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">withoutLink</span>( <span class="st">LinkInterface</span> <span class="sv">$link</span> )</code>
<span class="desc">Returns an instance with the specified link removed.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `withLink()` { #htmllinkevolvablelinkprovider-withlink }

```php
public function withLink( LinkInterface $link ): static;
```

Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if link is === identical
to a link object already in the collection.

#### `withoutLink()` { #htmllinkevolvablelinkprovider-withoutlink }

```php
public function withoutLink( LinkInterface $link ): static;
```

Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if link is === identical to a link
object already in the collection.


## Html\Link\Interfaces\EvolvableLinkInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/EvolvableLinkInterface.zep){ .src-btn }

An evolvable link value object.

<div class="api-tree" markdown>

- [`Phalcon\Html\Link\Interfaces\LinkInterface`](#htmllinkinterfaceslinkinterface)
    - **`Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinkinterfacesevolvablelinkinterface-withattribute">
<code class="vis vis-public">public</code>
<code class="ret">EvolvableLinkInterface</code>
<code class="sig"><span class="sf">withAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$attribute</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Returns an instance with the specified attribute added.</span>
</a>
<a class="api-item" href="#htmllinkinterfacesevolvablelinkinterface-withhref">
<code class="vis vis-public">public</code>
<code class="ret">EvolvableLinkInterface</code>
<code class="sig"><span class="sf">withHref</span>( <span class="st">string</span> <span class="sv">$href</span> )</code>
<span class="desc">Returns an instance with the specified href.</span>
</a>
<a class="api-item" href="#htmllinkinterfacesevolvablelinkinterface-withrel">
<code class="vis vis-public">public</code>
<code class="ret">EvolvableLinkInterface</code>
<code class="sig"><span class="sf">withRel</span>( <span class="st">string</span> <span class="sv">$rel</span> )</code>
<span class="desc">Returns an instance with the specified relationship included.</span>
</a>
<a class="api-item" href="#htmllinkinterfacesevolvablelinkinterface-withoutattribute">
<code class="vis vis-public">public</code>
<code class="ret">EvolvableLinkInterface</code>
<code class="sig"><span class="sf">withoutAttribute</span>( <span class="st">string</span> <span class="sv">$attribute</span> )</code>
<span class="desc">Returns an instance with the specified attribute excluded.</span>
</a>
<a class="api-item" href="#htmllinkinterfacesevolvablelinkinterface-withoutrel">
<code class="vis vis-public">public</code>
<code class="ret">EvolvableLinkInterface</code>
<code class="sig"><span class="sf">withoutRel</span>( <span class="st">string</span> <span class="sv">$rel</span> )</code>
<span class="desc">Returns an instance with the specified relationship excluded.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `withAttribute()` { #htmllinkinterfacesevolvablelinkinterface-withattribute }

```php
public function withAttribute(
    string $attribute,
    string $value
): EvolvableLinkInterface;
```

Returns an instance with the specified attribute added.

If the specified attribute is already present, it will be overwritten
with the new value.

#### `withHref()` { #htmllinkinterfacesevolvablelinkinterface-withhref }

```php
public function withHref( string $href ): EvolvableLinkInterface;
```

Returns an instance with the specified href.

An implementing library SHOULD evaluate a passed object to a string
immediately rather than waiting for it to be returned later.

#### `withRel()` { #htmllinkinterfacesevolvablelinkinterface-withrel }

```php
public function withRel( string $rel ): EvolvableLinkInterface;
```

Returns an instance with the specified relationship included.

If the specified rel is already present, this method MUST return
normally without errors, but without adding the rel a second time.

#### `withoutAttribute()` { #htmllinkinterfacesevolvablelinkinterface-withoutattribute }

```php
public function withoutAttribute( string $attribute ): EvolvableLinkInterface;
```

Returns an instance with the specified attribute excluded.

If the specified attribute is not present, this method MUST return
normally without errors.

#### `withoutRel()` { #htmllinkinterfacesevolvablelinkinterface-withoutrel }

```php
public function withoutRel( string $rel ): EvolvableLinkInterface;
```

Returns an instance with the specified relationship excluded.

If the specified rel is already not present, this method MUST return
normally without errors.


## Html\Link\Interfaces\EvolvableLinkProviderInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/EvolvableLinkProviderInterface.zep){ .src-btn }

An evolvable link provider value object.

<div class="api-tree" markdown>

- [`Phalcon\Html\Link\Interfaces\LinkProviderInterface`](#htmllinkinterfaceslinkproviderinterface)
    - **`Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinkinterfacesevolvablelinkproviderinterface-withlink">
<code class="vis vis-public">public</code>
<code class="ret">EvolvableLinkProviderInterface</code>
<code class="sig"><span class="sf">withLink</span>( <span class="st">LinkInterface</span> <span class="sv">$link</span> )</code>
<span class="desc">Returns an instance with the specified link included.</span>
</a>
<a class="api-item" href="#htmllinkinterfacesevolvablelinkproviderinterface-withoutlink">
<code class="vis vis-public">public</code>
<code class="ret">EvolvableLinkProviderInterface</code>
<code class="sig"><span class="sf">withoutLink</span>( <span class="st">LinkInterface</span> <span class="sv">$link</span> )</code>
<span class="desc">Returns an instance with the specified link removed.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `withLink()` { #htmllinkinterfacesevolvablelinkproviderinterface-withlink }

```php
public function withLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```

Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if $link is === identical
to a link object already in the collection.

#### `withoutLink()` { #htmllinkinterfacesevolvablelinkproviderinterface-withoutlink }

```php
public function withoutLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```

Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if $link is === identical to a link
object already in the collection.


## Html\Link\Interfaces\LinkInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/LinkInterface.zep){ .src-btn }

A readable link object.

<div class="api-tree" markdown>

- **`Phalcon\Html\Link\Interfaces\LinkInterface`**
    - [`Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`](#htmllinkinterfacesevolvablelinkinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinkinterfaceslinkinterface-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Returns a list of attributes that describe the target URI.</span>
</a>
<a class="api-item" href="#htmllinkinterfaceslinkinterface-gethref">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHref</span>()</code>
<span class="desc">Returns the target of the link.</span>
</a>
<a class="api-item" href="#htmllinkinterfaceslinkinterface-getrels">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getRels</span>()</code>
<span class="desc">Returns the relationship type(s) of the link.</span>
</a>
<a class="api-item" href="#htmllinkinterfaceslinkinterface-istemplated">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isTemplated</span>()</code>
<span class="desc">Returns whether this is a templated link.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `getAttributes()` { #htmllinkinterfaceslinkinterface-getattributes }

```php
public function getAttributes(): array;
```

Returns a list of attributes that describe the target URI.

#### `getHref()` { #htmllinkinterfaceslinkinterface-gethref }

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

#### `getRels()` { #htmllinkinterfaceslinkinterface-getrels }

```php
public function getRels(): array;
```

Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.

#### `isTemplated()` { #htmllinkinterfaceslinkinterface-istemplated }

```php
public function isTemplated(): bool;
```

Returns whether this is a templated link.


## Html\Link\Interfaces\LinkProviderInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/LinkProviderInterface.zep){ .src-btn }

A link provider object.

<div class="api-tree" markdown>

- **`Phalcon\Html\Link\Interfaces\LinkProviderInterface`**
    - [`Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface`](#htmllinkinterfacesevolvablelinkproviderinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinkinterfaceslinkproviderinterface-getlinks">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getLinks</span>()</code>
<span class="desc">Returns an array of LinkInterface objects.</span>
</a>
<a class="api-item" href="#htmllinkinterfaceslinkproviderinterface-getlinksbyrel">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getLinksByRel</span>( <span class="st">string</span> <span class="sv">$rel</span> )</code>
<span class="desc">Returns an array of LinkInterface objects that have a specific</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getLinks()` { #htmllinkinterfaceslinkproviderinterface-getlinks }

```php
public function getLinks(): array;
```

Returns an array of LinkInterface objects.

#### `getLinksByRel()` { #htmllinkinterfaceslinkproviderinterface-getlinksbyrel }

```php
public function getLinksByRel( string $rel ): array;
```

Returns an array of LinkInterface objects that have a specific
relationship.


## Html\Link\Link

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Link.zep){ .src-btn }

Class Phalcon\Html\Link\Link

<div class="api-tree" markdown>

- [`Phalcon\Html\Link\AbstractLink`](#htmllinkabstractlink)
    - **`Phalcon\Html\Link\Link`** - implements [`Phalcon\Html\Link\Interfaces\LinkInterface`](#htmllinkinterfaceslinkinterface)
        - [`Phalcon\Html\Link\EvolvableLink`](#htmllinkevolvablelink)

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\LinkInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinklink-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Returns a list of attributes that describe the target URI.</span>
</a>
<a class="api-item" href="#htmllinklink-gethref">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getHref</span>()</code>
<span class="desc">Returns the target of the link.</span>
</a>
<a class="api-item" href="#htmllinklink-getrels">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getRels</span>()</code>
<span class="desc">Returns the relationship type(s) of the link.</span>
</a>
<a class="api-item" href="#htmllinklink-istemplated">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isTemplated</span>()</code>
<span class="desc">Returns whether or not this is a templated link.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `getAttributes()` { #htmllinklink-getattributes }

```php
public function getAttributes(): array;
```

Returns a list of attributes that describe the target URI.

#### `getHref()` { #htmllinklink-gethref }

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

#### `getRels()` { #htmllinklink-getrels }

```php
public function getRels(): array;
```

Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.

#### `isTemplated()` { #htmllinklink-istemplated }

```php
public function isTemplated(): bool;
```

Returns whether or not this is a templated link.


## Html\Link\LinkProvider

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/LinkProvider.zep){ .src-btn }

@property LinkInterface[] links

<div class="api-tree" markdown>

- [`Phalcon\Html\Link\AbstractLinkProvider`](#htmllinkabstractlinkprovider)
    - **`Phalcon\Html\Link\LinkProvider`** - implements [`Phalcon\Html\Link\Interfaces\LinkProviderInterface`](#htmllinkinterfaceslinkproviderinterface)
        - [`Phalcon\Html\Link\EvolvableLinkProvider`](#htmllinkevolvablelinkprovider)

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\LinkInterface` · `Phalcon\Html\Link\Interfaces\LinkProviderInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinklinkprovider-getlinks">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getLinks</span>()</code>
<span class="desc">Returns an iterable of LinkInterface objects.</span>
</a>
<a class="api-item" href="#htmllinklinkprovider-getlinksbyrel">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getLinksByRel</span>( <span class="st">mixed</span> <span class="sv">$rel</span> )</code>
<span class="desc">Returns an iterable of LinkInterface objects that have a specific</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getLinks()` { #htmllinklinkprovider-getlinks }

```php
public function getLinks(): array;
```

Returns an iterable of LinkInterface objects.

The iterable may be an array or any PHP \Traversable object. If no links
are available, an empty array or \Traversable MUST be returned.

#### `getLinksByRel()` { #htmllinklinkprovider-getlinksbyrel }

```php
public function getLinksByRel( mixed $rel ): array;
```

Returns an iterable of LinkInterface objects that have a specific
relationship.

The iterable may be an array or any PHP \Traversable object. If no links
with that relationship are available, an empty array or \Traversable
MUST be returned.


## Html\Link\Serializer\Header

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Serializer/Header.zep){ .src-btn }

Class Phalcon\Http\Link\Serializer\Header

<div class="api-tree" markdown>

- **`Phalcon\Html\Link\Serializer\Header`** - implements [`Phalcon\Html\Link\Serializer\SerializerInterface`](#htmllinkserializerserializerinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinkserializerheader-serialize">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">serialize</span>( <span class="st">array</span> <span class="sv">$links</span> )</code>
<span class="desc">Serializes all the passed links to a HTTP link header</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `serialize()` { #htmllinkserializerheader-serialize }

```php
public function serialize( array $links ): string|null;
```

Serializes all the passed links to a HTTP link header


## Html\Link\Serializer\SerializerInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Serializer/SerializerInterface.zep){ .src-btn }

Class Phalcon\Http\Link\Serializer\SerializerInterface

<div class="api-tree" markdown>

- **`Phalcon\Html\Link\Serializer\SerializerInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmllinkserializerserializerinterface-serialize">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">serialize</span>( <span class="st">array</span> <span class="sv">$links</span> )</code>
<span class="desc">Serializer method</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `serialize()` { #htmllinkserializerserializerinterface-serialize }

```php
public function serialize( array $links ): string|null;
```

Serializer method


## Html\TagFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/TagFactory.zep){ .src-btn }

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

<div class="api-tree" markdown>

- **`Phalcon\Html\TagFactory`**

</div>

__Uses__ `Closure` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exceptions\ServiceNotRegistered` · `Phalcon\Html\Helper\Anchor` · `Phalcon\Html\Helper\Base` · `Phalcon\Html\Helper\Body` · `Phalcon\Html\Helper\Breadcrumbs` · `Phalcon\Html\Helper\Button` · `Phalcon\Html\Helper\Close` · `Phalcon\Html\Helper\Doctype` · `Phalcon\Html\Helper\Element` · `Phalcon\Html\Helper\Form` · `Phalcon\Html\Helper\FriendlyTitle` · `Phalcon\Html\Helper\Img` · `Phalcon\Html\Helper\Input\Checkbox` · `Phalcon\Html\Helper\Input\CheckboxGroup` · `Phalcon\Html\Helper\Input\Generic` · `Phalcon\Html\Helper\Input\Radio` · `Phalcon\Html\Helper\Input\RadioGroup` · `Phalcon\Html\Helper\Input\Select` · `Phalcon\Html\Helper\Input\Textarea` · `Phalcon\Html\Helper\Label` · `Phalcon\Html\Helper\Link` · `Phalcon\Html\Helper\Meta` · `Phalcon\Html\Helper\Ol` · `Phalcon\Html\Helper\Preload` · `Phalcon\Html\Helper\Script` · `Phalcon\Html\Helper\Style` · `Phalcon\Html\Helper\Tag` · `Phalcon\Html\Helper\Title` · `Phalcon\Html\Helper\Ul` · `Phalcon\Html\Helper\VoidTag` · `Phalcon\Http\ResponseInterface` · `Phalcon\Mvc\Url\UrlInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmltagfactory-__call">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__call</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$arguments</span></span>)</code>
<span class="desc">Magic call to make the helper objects available as methods.</span>
</a>
<a class="api-item" href="#htmltagfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">EscaperInterface</span> <span class="sv">$escaper</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">ResponseInterface</span> <span class="sv">$response</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">UrlInterface</span> <span class="sv">$url</span><span class="sm"> = null</span></span>)</code>
<span class="desc">TagFactory constructor.</span>
</a>
<a class="api-item" href="#htmltagfactory-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
<a class="api-item" href="#htmltagfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">newInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Create or return a cached instance of the helper.</span>
</a>
<a class="api-item" href="#htmltagfactory-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">Closure</span> <span class="sv">$definition</span></span>)</code>
<span class="desc">Register a helper via a zero-argument Closure. The Closure is invoked on</span>
</a>
<a class="api-item" href="#htmltagfactory-getdefaultservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getDefaultServices</span>()</code>
<span class="desc">Default service recipes. Every entry is a Closure that returns a</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$factories</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$instances</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

#### `__call()` { #htmltagfactory-__call }

```php
public function __call(
    string $name,
    array $arguments
);
```

Magic call to make the helper objects available as methods.

#### `__construct()` { #htmltagfactory-__construct }

```php
public function __construct(
    EscaperInterface $escaper,
    array $services = [],
    ResponseInterface $response = null,
    UrlInterface $url = null
);
```

TagFactory constructor.

#### `has()` { #htmltagfactory-has }

```php
public function has( string $name ): bool;
```

#### `newInstance()` { #htmltagfactory-newinstance }

```php
public function newInstance( string $name ): object;
```

Create or return a cached instance of the helper.

#### `set()` { #htmltagfactory-set }

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

<div class="api-group">Protected · 1</div>

#### `getDefaultServices()` { #htmltagfactory-getdefaultservices }

```php
protected function getDefaultServices(): array;
```

Default service recipes. Every entry is a Closure that returns a
fully-constructed helper instance. Services are built lazily and cached.
