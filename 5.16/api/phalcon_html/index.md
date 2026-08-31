---
title: "Phalcon Html"
version: "5.16"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Html

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Html\Attributes

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes.zep">Source on GitHub</a>

This class helps to work with HTML Attributes

<div class="api-tree">

- [`Phalcon\Support\Collection`](/5.16/api/phalcon_support/#supportcollection)
- **`Phalcon\Html\Attributes`** — implements [`Phalcon\Html\Attributes\RenderInterface`](#htmlattributesrenderinterface)

</div>

__Uses__ `Phalcon\Html\Attributes\RenderInterface` · `Phalcon\Html\Escaper\AttributeEscaper` · `Phalcon\Html\Exceptions\AttributeNotRenderable` · `Phalcon\Support\Collection`

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

<div class="api-group">Protected · 1</div>

<h4 id="htmlattributes-renderattributes"><code>renderAttributes()</code></h4>

```php
protected function renderAttributes( array $attributes ): string;
```

@todo remove this when we refactor forms. Maybe remove this class? Put it into traits

## Html\Attributes\AttributesInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes/AttributesInterface.zep">Source on GitHub</a>

Html Attributes Interface

<div class="api-tree">

- **`Phalcon\Html\Attributes\AttributesInterface`**

</div>

__Uses__ `Phalcon\Html\Attributes`

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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes/RenderInterface.zep">Source on GitHub</a>

Rendering interface for HTML attributes

<div class="api-tree">

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

<h4 id="htmlattributesrenderinterface-render"><code>render()</code></h4>

```php
public function render(): string;
```

Generate a string representation

## Html\Breadcrumbs

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Breadcrumbs.zep">Source on GitHub</a>

Phalcon\Html\Breadcrumbs

This component offers an easy way to create breadcrumbs for your application.
The resulting HTML when calling `render()` will have each breadcrumb enclosed
in `<dt>` tags, while the whole string is enclosed in `<dl>` tags.

<div class="api-tree">

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

Crumb separator

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

<h4 id="htmlbreadcrumbs-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the internal breadcrumbs array

## Html\Escaper

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper.zep">Source on GitHub</a>

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

<div class="api-tree">

- **`Phalcon\Html\Escaper`** — implements [`Phalcon\Html\Escaper\EscaperInterface`](#htmlescaperescaperinterface)

</div>

__Uses__ `Phalcon\Html\Escaper\AttributeEscaper` · `Phalcon\Html\Escaper\CssEscaper` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Escaper\HtmlEscaper` · `Phalcon\Html\Escaper\JsEscaper` · `Phalcon\Html\Escaper\UrlEscaper`

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

<h4 id="htmlescaper-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $encoding = "utf-8",
int $flags = 11,
bool $doubleEncode = true
);
```

<h4 id="htmlescaper-attributes"><code>attributes()</code></h4>

```php
public function attributes( mixed $input = null ): string;
```

Escapes a HTML attribute string or array. Delegates to the configured
`AttributeEscaper`.

<h4 id="htmlescaper-css"><code>css()</code></h4>

```php
public function css( string $input ): string;
```

Escape CSS strings. Delegates to the configured `CssEscaper`.

<h4 id="htmlescaper-detectencoding"><code>detectEncoding()</code></h4>

```php
final public function detectEncoding( string $input ): string|null;
```

<h4 id="htmlescaper-escapecss"><code>escapeCss()</code></h4>

```php
public function escapeCss( string $input ): string;
```

<h4 id="htmlescaper-escapehtml"><code>escapeHtml()</code></h4>

```php
public function escapeHtml( string $input = null ): string;
```

<h4 id="htmlescaper-escapehtmlattr"><code>escapeHtmlAttr()</code></h4>

```php
public function escapeHtmlAttr( string $input = null ): string;
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

<h4 id="htmlescaper-getflags"><code>getFlags()</code></h4>

```php
public function getFlags(): int;
```

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
public function html( string $input = null ): string;
```

Escapes a HTML string. Delegates to the configured `HtmlEscaper`.

<h4 id="htmlescaper-js"><code>js()</code></h4>

```php
public function js( string $input ): string;
```

Escape javascript strings. Delegates to the configured `JsEscaper`.

<h4 id="htmlescaper-normalizeencoding"><code>normalizeEncoding()</code></h4>

```php
final public function normalizeEncoding( string $input ): string;
```

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

Sets the double_encode flag. Fans out to all sub-objects.

<h4 id="htmlescaper-setencoding"><code>setEncoding()</code></h4>

```php
public function setEncoding( string $encoding ): static;
```

Sets the encoding. Fans out to all sub-objects.

<h4 id="htmlescaper-setflags"><code>setFlags()</code></h4>

```php
public function setFlags( int $flags ): static;
```

Sets the htmlspecialchars flags. Fans out to all sub-objects.

<h4 id="htmlescaper-sethtmlescaper"><code>setHtmlEscaper()</code></h4>

```php
public function setHtmlEscaper( HtmlEscaper $escaper ): static;
```

<h4 id="htmlescaper-sethtmlquotetype"><code>setHtmlQuoteType()</code></h4>

```php
public function setHtmlQuoteType( int $flags ): static;
```

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

Escapes a URL. Delegates to the configured `UrlEscaper`.

## Html\EscaperFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/EscaperFactory.zep">Source on GitHub</a>

Class EscaperFactory

<div class="api-tree">

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

<h4 id="htmlescaperfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(): Escaper;
```

Create a new instance of the object

## Html\Escaper\AbstractEscaper

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/AbstractEscaper.zep">Source on GitHub</a>

Shared base for the per-context escaper objects. Holds the encoding,
htmlspecialchars flag, and double-encode toggle, plus the encoding
detection / normalization utilities used by the CSS and JS escapers.

Each concrete context (`HtmlEscaper`, `AttributeEscaper`, `CssEscaper`,
`JsEscaper`, `UrlEscaper`) extends this so that callers can configure
one context without affecting the others.

@property bool   $doubleEncode
@property string $encoding
@property int    $flags

<div class="api-tree">

- **`Phalcon\Html\Escaper\AbstractEscaper`**
- [`Phalcon\Html\Escaper\AttributeEscaper`](#htmlescaperattributeescaper)
- [`Phalcon\Html\Escaper\CssEscaper`](#htmlescapercssescaper)
- [`Phalcon\Html\Escaper\HtmlEscaper`](#htmlescaperhtmlescaper)
- [`Phalcon\Html\Escaper\JsEscaper`](#htmlescaperjsescaper)
- [`Phalcon\Html\Escaper\UrlEscaper`](#htmlescaperurlescaper)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlescaperabstractescaper-detectencoding">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">detectEncoding</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Detects the character encoding of a string. Special-handling for</span>
</a>
<a class="api-item" href="#htmlescaperabstractescaper-getdoubleencode">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getDoubleEncode</span>()</code>
</a>
<a class="api-item" href="#htmlescaperabstractescaper-getencoding">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getEncoding</span>()</code>
</a>
<a class="api-item" href="#htmlescaperabstractescaper-getflags">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getFlags</span>()</code>
</a>
<a class="api-item" href="#htmlescaperabstractescaper-normalizeencoding">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">normalizeEncoding</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Normalizes a string&#039;s encoding to UTF-32, used by the CSS and JS</span>
</a>
<a class="api-item" href="#htmlescaperabstractescaper-setdoubleencode">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDoubleEncode</span>( <span class="st">bool</span> <span class="sv">$doubleEncode</span> )</code>
</a>
<a class="api-item" href="#htmlescaperabstractescaper-setencoding">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setEncoding</span>( <span class="st">string</span> <span class="sv">$encoding</span> )</code>
</a>
<a class="api-item" href="#htmlescaperabstractescaper-setflags">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setFlags</span>( <span class="st">int</span> <span class="sv">$flags</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$doubleEncode</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$encoding</span><span class="sm"> = &quot;utf-8&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$flags</span><span class="sm"> = 11</span></code>
<span class="desc">ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401</span>
</div>
</div>

### Methods

<div class="api-group">Public · 8</div>

<h4 id="htmlescaperabstractescaper-detectencoding"><code>detectEncoding()</code></h4>

```php
final public function detectEncoding( string $input ): string|null;
```

Detects the character encoding of a string. Special-handling for
chr(172) and chr(128) to chr(159) which fail to be detected by
`mb_detect_encoding()`.

<h4 id="htmlescaperabstractescaper-getdoubleencode"><code>getDoubleEncode()</code></h4>

```php
public function getDoubleEncode(): bool;
```

<h4 id="htmlescaperabstractescaper-getencoding"><code>getEncoding()</code></h4>

```php
public function getEncoding(): string;
```

<h4 id="htmlescaperabstractescaper-getflags"><code>getFlags()</code></h4>

```php
public function getFlags(): int;
```

<h4 id="htmlescaperabstractescaper-normalizeencoding"><code>normalizeEncoding()</code></h4>

```php
final public function normalizeEncoding( string $input ): string;
```

Normalizes a string's encoding to UTF-32, used by the CSS and JS
escapers before invoking the C-level escape routines.

<h4 id="htmlescaperabstractescaper-setdoubleencode"><code>setDoubleEncode()</code></h4>

```php
public function setDoubleEncode( bool $doubleEncode ): static;
```

<h4 id="htmlescaperabstractescaper-setencoding"><code>setEncoding()</code></h4>

```php
public function setEncoding( string $encoding ): static;
```

<h4 id="htmlescaperabstractescaper-setflags"><code>setFlags()</code></h4>

```php
public function setFlags( int $flags ): static;
```

## Html\Escaper\AttributeEscaper

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/AttributeEscaper.zep">Source on GitHub</a>

Escapes either a single attribute value (string) or an associative array
of attribute pairs. Boolean `true` becomes a bare key (e.g. `disabled`);
`false` and `null` skip the entry; arrays are joined with a space.

<div class="api-tree">

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

<h4 id="htmlescaperattributeescaper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input = null ): string;
```

<h4 id="htmlescaperattributeescaper-escape"><code>escape()</code></h4>

```php
public function escape( mixed $input = null ): string;
```

<div class="api-group">Protected · 1</div>

<h4 id="htmlescaperattributeescaper-escapevalue"><code>escapeValue()</code></h4>

```php
protected function escapeValue( string $input ): string;
```

Encodes a single key/value via `htmlspecialchars`.

## Html\Escaper\CssEscaper

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/CssEscaper.zep">Source on GitHub</a>

Escapes a string for use inside a CSS value by replacing non-alphanumeric
characters with their hexadecimal escape sequence.

<div class="api-tree">

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

<h4 id="htmlescapercssescaper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input ): string;
```

<h4 id="htmlescapercssescaper-escape"><code>escape()</code></h4>

```php
public function escape( string $input ): string;
```

## Html\Escaper\EscaperInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/EscaperInterface.zep">Source on GitHub</a>

Interface for Phalcon\Html\Escaper.

This declares the stable context-escaping surface. The concrete
\{@see \Phalcon\Html\Escaper\} facade also exposes members that are not part
of this contract - `setDoubleEncode()`, `getFlags()`, and the per-context
sub-escaper getters/setters (`getHtmlEscaper()`, `setAttributeEscaper()`,
and the rest). Type against the concrete class to reach those.

<div class="api-tree">

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/Exception.zep">Source on GitHub</a>

Class Exception

<div class="api-tree">

- `\Exception`
- **`Phalcon\Html\Escaper\Exception`**

</div>

## Html\Escaper\HtmlEscaper

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/HtmlEscaper.zep">Source on GitHub</a>

Escapes a string for use as HTML body content via `htmlspecialchars`.

<div class="api-tree">

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

<h4 id="htmlescaperhtmlescaper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input = null ): string;
```

<h4 id="htmlescaperhtmlescaper-escape"><code>escape()</code></h4>

```php
public function escape( string $input = null ): string;
```

## Html\Escaper\JsEscaper

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/JsEscaper.zep">Source on GitHub</a>

Escapes a string for use inside a JavaScript context by replacing
non-alphanumeric characters with their hexadecimal escape sequence.

<div class="api-tree">

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

<h4 id="htmlescaperjsescaper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input ): string;
```

<h4 id="htmlescaperjsescaper-escape"><code>escape()</code></h4>

```php
public function escape( string $input ): string;
```

## Html\Escaper\UrlEscaper

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/UrlEscaper.zep">Source on GitHub</a>

Escapes a string for use as a URL component via `rawurlencode`.

<div class="api-tree">

- [`Phalcon\Html\Escaper\AbstractEscaper`](#htmlescaperabstractescaper)
- **`Phalcon\Html\Escaper\UrlEscaper`**

</div>

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

<h4 id="htmlescaperurlescaper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input ): string;
```

<h4 id="htmlescaperurlescaper-escape"><code>escape()</code></h4>

```php
public function escape( string $input ): string;
```

## Html\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exception.zep">Source on GitHub</a>

Phalcon\Html\Exception

Exceptions thrown in Phalcon\Html will use this class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Html\Exception`**
- [`Phalcon\Html\Exceptions\AttributeNotRenderable`](#htmlexceptionsattributenotrenderable)
- [`Phalcon\Html\Exceptions\FriendlyTitleConversionFailed`](#htmlexceptionsfriendlytitleconversionfailed)
- [`Phalcon\Html\Exceptions\ServiceNotRegistered`](#htmlexceptionsservicenotregistered)

</div>

## Html\Exceptions\AttributeNotRenderable

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exceptions/AttributeNotRenderable.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Html\Exception`](#htmlexception)
- **`Phalcon\Html\Exceptions\AttributeNotRenderable`**

</div>

__Uses__ `Phalcon\Html\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlexceptionsattributenotrenderable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="htmlexceptionsattributenotrenderable-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $key,
string $type
);
```

## Html\Exceptions\FriendlyTitleConversionFailed

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exceptions/FriendlyTitleConversionFailed.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Html\Exception`](#htmlexception)
- **`Phalcon\Html\Exceptions\FriendlyTitleConversionFailed`**

</div>

__Uses__ `Phalcon\Html\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlexceptionsfriendlytitleconversionfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="htmlexceptionsfriendlytitleconversionfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $message );
```

## Html\Exceptions\InvalidResultsetValue

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exceptions/InvalidResultsetValue.zep">Source on GitHub</a>

<div class="api-tree">

- `InvalidArgumentException`
- **`Phalcon\Html\Exceptions\InvalidResultsetValue`**

</div>

__Uses__ `InvalidArgumentException`

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlexceptionsinvalidresultsetvalue-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="htmlexceptionsinvalidresultsetvalue-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Html\Exceptions\ServiceNotRegistered

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exceptions/ServiceNotRegistered.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Html\Exception`](#htmlexception)
- **`Phalcon\Html\Exceptions\ServiceNotRegistered`**

</div>

__Uses__ `Phalcon\Html\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlexceptionsservicenotregistered-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="htmlexceptionsservicenotregistered-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Html\Exceptions\UsingRequiresTwoValues

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exceptions/UsingRequiresTwoValues.zep">Source on GitHub</a>

<div class="api-tree">

- `InvalidArgumentException`
- **`Phalcon\Html\Exceptions\UsingRequiresTwoValues`**

</div>

__Uses__ `InvalidArgumentException`

### Method Summary

<div class="api-list">
<a class="api-item" href="#htmlexceptionsusingrequirestwovalues-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="htmlexceptionsusingrequirestwovalues-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Html\Helper\AbstractHelper

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractHelper.zep">Source on GitHub</a>

@property string           $delimiter
@property EscaperInterface $escaper
@property string           $indent
@property int              $indentLevel

<div class="api-tree">

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

<h4 id="htmlhelperabstracthelper-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype $doctype = null
);
```

AbstractHelper constructor.

<div class="api-group">Protected · 10</div>

<h4 id="htmlhelperabstracthelper-close"><code>close()</code></h4>

```php
protected function close(
string $tag,
bool $raw = false
): string;
```

Produces a closing tag

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

Forces a single key into the attribute array, stripping any user-supplied
value for that key first. Used by helpers whose first positional argument
is itself an attribute (`href` for Anchor, `src` for Img, etc.) to make
sure that argument always wins.

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractList.zep">Source on GitHub</a>

Class AbstractList

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\AbstractList`**
- [`Phalcon\Html\Helper\Input\Select`](#htmlhelperinputselect)
- [`Phalcon\Html\Helper\Ol`](#htmlhelperol)

</div>

__Uses__ `Phalcon\Html\Exception`

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

<h4 id="htmlhelperabstractlist-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $indent = "    ",
string $delimiter = null,
array $attributes = []
): static;
```

<h4 id="htmlhelperabstractlist-__tostring"><code>__toString()</code></h4>

```php
public function __toString();
```

Generates and returns the HTML for the list.

<div class="api-group">Protected · 1</div>

<h4 id="htmlhelperabstractlist-gettag"><code>getTag()</code></h4>

```php
abstract protected function getTag(): string;
```

Returns the tag name.

## Html\Helper\AbstractSeries

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractSeries.zep">Source on GitHub</a>

@property array $attributes
@property array $store

<div class="api-tree">

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

<h4 id="htmlhelperabstractseries-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $indent = "    ",
string $delimiter = null
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

<div class="api-group">Protected · 2</div>

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
position. When `position` is negative the entry is pushed onto the next
available auto-increment slot. When `position` is non-negative the entry
is placed at that key, advancing past any already-occupied slots so
existing entries are not overwritten. The store is ksort()ed in
`__toString`, so positions act as a sort key, not a strict address.

## Html\Helper\Anchor

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Anchor.zep">Source on GitHub</a>

Class Anchor

@property bool $forceRaw

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Anchor`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception`

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

<h4 id="htmlhelperanchor-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype $doctype = null,
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

Produce a &lt;a> tag

## Html\Helper\Base

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Base.zep">Source on GitHub</a>

Class Base

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Base`**

</div>

__Uses__ `Phalcon\Html\Exception`

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

<h4 id="htmlhelperbase-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $href = null,
array $attributes = []
): string;
```

Produce a `<base/>` tag.

## Html\Helper\Body

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Body.zep">Source on GitHub</a>

Class Body

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Body`**

</div>

__Uses__ `Phalcon\Html\Exception`

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

<h4 id="htmlhelperbody-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( array $attributes = [] ): string;
```

Produce a `<body>` tag.

## Html\Helper\Breadcrumbs

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Breadcrumbs.zep">Source on GitHub</a>

This component offers an easy way to create breadcrumbs for your application.
The resulting HTML when calling `render()` will have each breadcrumb enclosed
in `<li>` tags, while the whole string is enclosed in `<nav>` and `<ol>` tags.

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Breadcrumbs`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Support\Helper\Str\Interpolate`

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

<h4 id="htmlhelperbreadcrumbs-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
UrlInterface $url = null
);
```

AbstractHelper constructor.

<h4 id="htmlhelperbreadcrumbs-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $indent = "    ",
string $delimiter = null
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

Clears the crumbs.

```php
$breadcrumbs->clear()
```

<h4 id="htmlhelperbreadcrumbs-clearattributes"><code>clearAttributes()</code></h4>

```php
public function clearAttributes(): static;
```

Clear the attributes of the parent element.

<h4 id="htmlhelperbreadcrumbs-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Get the attributes of the parent element.

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

Set the attributes for the parent element.

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

Set the separator.

<h4 id="htmlhelperbreadcrumbs-settemplate"><code>setTemplate()</code></h4>

```php
public function setTemplate(
string $main,
string $line,
string $last
): static;
```

Set the HTML template.

<h4 id="htmlhelperbreadcrumbs-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the internal breadcrumbs array.

## Html\Helper\Button

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Button.zep">Source on GitHub</a>

Class Button

@property bool $forceRaw

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Button`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception`

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

<h4 id="htmlhelperbutton-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype $doctype = null,
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Close.zep">Source on GitHub</a>

Class Close

<div class="api-tree">

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

<h4 id="htmlhelperclose-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $tag,
bool $raw = false
): string;
```

Produce a `</...>` tag.

## Html\Helper\Doctype

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Doctype.zep">Source on GitHub</a>

Creates Doctype tags

<div class="api-tree">

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

Produce a &lt;doctype> tag

<h4 id="htmlhelperdoctype-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

<h4 id="htmlhelperdoctype-gettype"><code>getType()</code></h4>

```php
public function getType(): int;
```

## Html\Helper\Element

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Element.zep">Source on GitHub</a>

Class Element

@property bool $forceRaw

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Element`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception`

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

<h4 id="htmlhelperelement-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype $doctype = null,
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Form.zep">Source on GitHub</a>

Class Form

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Form`**

</div>

__Uses__ `Phalcon\Html\Exception`

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

<h4 id="htmlhelperform-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( array $attributes = [] ): string;
```

Produce a `<form>` tag.

## Html\Helper\FriendlyTitle

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/FriendlyTitle.zep">Source on GitHub</a>

Converts text to a URL-friendly slug.

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\FriendlyTitle`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception` · `Phalcon\Html\Exceptions\FriendlyTitleConversionFailed` · `Phalcon\Support\Helper\Str\Friendly`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Img.zep">Source on GitHub</a>

Class Img

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Img`**

</div>

__Uses__ `Phalcon\Html\Exception`

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

<h4 id="htmlhelperimg-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $src,
array $attributes = []
): string;
```

Produce a &lt;img> tag.

## Html\Helper\Input\AbstractChecked

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/AbstractChecked.zep">Source on GitHub</a>

Shared base for inputs that can be checked: `<input type="checkbox">` and
`<input type="radio">`. Holds the optional surrounding `<label>` markup,
the `unchecked` companion hidden input, and the rule that decides whether
the rendered tag carries `checked="checked"`.

The match between `checked` and `value` is loose (`==`) by default so that
mixed int/string form input round-trips correctly (e.g. `value=0` against
`checked="0"`). Strict (`===`) matching is available via `strict(true)`.

@property array $label
@property bool  $strict

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
- **`Phalcon\Html\Helper\Input\AbstractChecked`**
- [`Phalcon\Html\Helper\Input\Checkbox`](#htmlhelperinputcheckbox)
- [`Phalcon\Html\Helper\Input\Radio`](#htmlhelperinputradio)

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Helper\Doctype`

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

<h4 id="htmlhelperinputabstractchecked-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype $doctype = null
);
```

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

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/AbstractGroup.zep">Source on GitHub</a>

Shared base for rendering a group of same-named inputs (checkbox or radio)
from an options array.

Each option in the $options array may be either:
  - a scalar string label:  ['value' => 'Label text']
  - a rich definition:      ['value' => ['label' => 'Label text', 'disabled' => true, ...]]

The $checked parameter is resolved by the concrete subclass:
  - CheckboxGroup compares against an array of selected values
  - RadioGroup compares against a single scalar value

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Input\AbstractGroup`**
- [`Phalcon\Html\Helper\Input\CheckboxGroup`](#htmlhelperinputcheckboxgroup)
- [`Phalcon\Html\Helper\Input\RadioGroup`](#htmlhelperinputradiogroup)

</div>

__Uses__ `Phalcon\Html\Helper\AbstractHelper`

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

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/AbstractInput.zep">Source on GitHub</a>

Class AbstractInput

@property array  $attributes
@property string $type
@property string $value

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Input\AbstractInput`**
- [`Phalcon\Html\Helper\Input\AbstractChecked`](#htmlhelperinputabstractchecked)
- [`Phalcon\Html\Helper\Input\Generic`](#htmlhelperinputgeneric)
- [`Phalcon\Html\Helper\Input\Textarea`](#htmlhelperinputtextarea)

</div>

__Uses__ `Phalcon\Html\Helper\AbstractHelper` · `Phalcon\Html\Helper\Doctype`

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

<h4 id="htmlhelperinputabstractinput-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $name,
string $value = null,
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
public function setValue( string $value = null ): static;
```

Sets the value of the element

## Html\Helper\Input\Checkbox

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Checkbox.zep">Source on GitHub</a>

Renders an `<input type="checkbox">`. Behavior (label wrapping, `unchecked`
companion, loose-by-default `checked` match) lives in `AbstractChecked`.

<div class="api-tree">

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/CheckboxGroup.zep">Source on GitHub</a>

Renders a group of `<input type="checkbox">` elements from an options array.

The $checked parameter should be an array of selected values, or a single
scalar value (treated as a one-element array).

<div class="api-tree">

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

<h4 id="htmlhelperinputcheckboxgroup-ischecked"><code>isChecked()</code></h4>

```php
protected function isChecked( string $value ): bool;
```

Returns true when $value appears in the checked list.

## Html\Helper\Input\Generic

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Generic.zep">Source on GitHub</a>

Generic input helper. The HTML5 `type` attribute is supplied via the
constructor, which means the `TagFactory` can register a single class
for all type-string-only inputs (color, date, email, hidden, number, ...)
and differentiate them through the recipe map. The type can also be
changed after construction via `setType()`.

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
- **`Phalcon\Html\Helper\Input\Generic`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Helper\Doctype`

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

<h4 id="htmlhelperinputgeneric-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype $doctype = null,
string $type = "text"
);
```

<h4 id="htmlhelperinputgeneric-settype"><code>setType()</code></h4>

```php
public function setType( string $type ): AbstractInput;
```

Sets the type of the input.

## Html\Helper\Input\Radio

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Radio.zep">Source on GitHub</a>

Renders an `<input type="radio">`. Behavior (label wrapping, `unchecked`
companion, loose-by-default `checked` match) lives in `AbstractChecked`.

<div class="api-tree">

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/RadioGroup.zep">Source on GitHub</a>

Renders a group of `<input type="radio">` elements from an options array.

The $checked parameter should be a single scalar value matching the selected
option's value attribute.

<div class="api-tree">

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

<h4 id="htmlhelperinputradiogroup-ischecked"><code>isChecked()</code></h4>

```php
protected function isChecked( string $value ): bool;
```

Returns true when $value loosely equals the checked scalar.

## Html\Helper\Input\Select

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Select.zep">Source on GitHub</a>

Class Select

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractList`](#htmlhelperabstractlist)
- **`Phalcon\Html\Helper\Input\Select`**

</div>

__Uses__ `Phalcon\Contracts\Html\Helper\Input\SelectData` · `Phalcon\Html\Helper\AbstractList`

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

<h4 id="htmlhelperinputselect-add"><code>add()</code></h4>

```php
public function add(
string $text,
string $value = null,
array $attributes = [],
bool $raw = false
): static;
```

Add an element to the list

<h4 id="htmlhelperinputselect-addplaceholder"><code>addPlaceholder()</code></h4>

```php
public function addPlaceholder(
string $text,
string $value = null,
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
string $label = null,
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

<div class="api-group">Protected · 3</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Select/ArrayData.zep">Source on GitHub</a>

Wraps a plain PHP array as a SELECT data provider.

Keys are option values; string values are labels;
array values define optgroups.

<div class="api-tree">

- **`Phalcon\Html\Helper\Input\Select\ArrayData`** — implements [`Phalcon\Contracts\Html\Helper\Input\SelectData`](/5.16/api/phalcon_contracts/#contractshtmlhelperinputselectdata)

</div>

__Uses__ `Phalcon\Contracts\Html\Helper\Input\SelectData`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Select/ResultsetData.zep">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Html\Helper\Input\Select\ResultsetData`** — implements [`Phalcon\Contracts\Html\Helper\Input\SelectData`](/5.16/api/phalcon_contracts/#contractshtmlhelperinputselectdata)

</div>

__Uses__ `InvalidArgumentException` · `Phalcon\Contracts\Html\Helper\Input\SelectData` · `Phalcon\Html\Exceptions\InvalidResultsetValue` · `Phalcon\Html\Exceptions\UsingRequiresTwoValues` · `Phalcon\Mvc\Model\ResultsetInterface`

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

<div class="api-group">Protected · 2</div>

<h4 id="htmlhelperinputselectresultsetdata-readfield"><code>readField()</code></h4>

```php
protected function readField(
mixed $option,
string $field
);
```

Reads a property from the row, supporting both objects (via
`readAttribute` when present) and plain arrays.

<h4 id="htmlhelperinputselectresultsetdata-resolve"><code>resolve()</code></h4>

```php
protected function resolve(): void;
```

Walks the resultset once, building both the option map and the
per-option resolved attribute map. Closures in `attributesMap`
receive the current row; static values are passed through.
`false` or `null` values skip the attribute entirely.

## Html\Helper\Input\Textarea

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Textarea.zep">Source on GitHub</a>

Class Textarea

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\Input\AbstractInput`](#htmlhelperinputabstractinput)
- **`Phalcon\Html\Helper\Input\Textarea`**

</div>

__Uses__ `Phalcon\Html\Exception`

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

<h4 id="htmlhelperinputtextarea-__tostring"><code>__toString()</code></h4>

```php
public function __toString();
```

Returns the HTML for the input.

## Html\Helper\Label

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Label.zep">Source on GitHub</a>

Class Label

@property bool $forceRaw

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Label`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exception`

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

<h4 id="htmlhelperlabel-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype $doctype = null,
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Link.zep">Source on GitHub</a>

Creates &lt;link> tags

<div class="api-tree">

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

<h4 id="htmlhelperlink-add"><code>add()</code></h4>

```php
public function add(
string $url,
array $attributes = [],
int $position = -1
): static;
```

Add an element to the list

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Meta.zep">Source on GitHub</a>

Class Meta

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
- **`Phalcon\Html\Helper\Meta`**

</div>

__Uses__ `Phalcon\Html\Exception`

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

<div class="api-group">Protected · 1</div>

<h4 id="htmlhelpermeta-gettag"><code>getTag()</code></h4>

```php
protected function getTag(): string;
```

## Html\Helper\Ol

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Ol.zep">Source on GitHub</a>

Class Ol

@property bool $forceRaw

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractList`](#htmlhelperabstractlist)
- **`Phalcon\Html\Helper\Ol`**
- [`Phalcon\Html\Helper\Ul`](#htmlhelperul)

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface`

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

<h4 id="htmlhelperol-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
Doctype $doctype = null,
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

<div class="api-group">Protected · 1</div>

<h4 id="htmlhelperol-gettag"><code>getTag()</code></h4>

```php
protected function getTag(): string;
```

## Html\Helper\Preload

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Preload.zep">Source on GitHub</a>

Generates a &lt;link rel="preload"> tag for resource hinting.
If a ResponseInterface is provided, also sets the HTTP Link header.

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Preload`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Link\Link` · `Phalcon\Html\Link\Serializer\Header` · `Phalcon\Http\ResponseInterface`

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

<h4 id="htmlhelperpreload-__construct"><code>__construct()</code></h4>

```php
public function __construct(
EscaperInterface $escaper,
ResponseInterface $response = null
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Script.zep">Source on GitHub</a>

Class Script

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
- **`Phalcon\Html\Helper\Script`**

</div>

__Uses__ `Phalcon\Html\Exception`

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

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Style.zep">Source on GitHub</a>

Class Style

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- [`Phalcon\Html\Helper\AbstractSeries`](#htmlhelperabstractseries)
- **`Phalcon\Html\Helper\Style`**
- [`Phalcon\Html\Helper\Link`](#htmlhelperlink)

</div>

__Uses__ `Phalcon\Html\Exception`

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

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Tag.zep">Source on GitHub</a>

Generic open-tag escape hatch. Renders just `<name attr="...">` for any
tag name without a dedicated helper. For an open + content + close tag
use `Element` instead. For self-closing void tags (img, br, hr, etc.)
use `VoidTag`.

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Tag`**

</div>

__Uses__ `Phalcon\Html\Exception`

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

<h4 id="htmlhelpertag-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $name,
array $attributes = []
): string;
```

## Html\Helper\Title

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Title.zep">Source on GitHub</a>

Class Title

@property array  $append
@property string $delimiter
@property string $indent
@property array  $prepend
@property string $title
@property string $separator

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\Title`**

</div>

__Uses__ `Phalcon\Html\Exception`

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

<h4 id="htmlhelpertitle-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $indent = "    ",
string $delimiter = null
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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Ul.zep">Source on GitHub</a>

Class Ul

<div class="api-tree">

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

<h4 id="htmlhelperul-gettag"><code>getTag()</code></h4>

```php
protected function getTag(): string;
```

## Html\Helper\VoidTag

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/VoidTag.zep">Source on GitHub</a>

Generic void-tag escape hatch. Renders a self-closing tag for any name
without a dedicated helper. The trailing `/` is emitted only for XHTML
doctypes, matching the `Input/AbstractInput::__toString` convention.

<div class="api-tree">

- [`Phalcon\Html\Helper\AbstractHelper`](#htmlhelperabstracthelper)
- **`Phalcon\Html\Helper\VoidTag`**

</div>

__Uses__ `Phalcon\Html\Exception`

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

<h4 id="htmlhelpervoidtag-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $name,
array $attributes = []
): string;
```

## Html\Link\AbstractLink

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/AbstractLink.zep">Source on GitHub</a>

@property Collection $attributes
@property string     $href
@property Collection $rels
@property bool       $templated

<div class="api-tree">

- **`Phalcon\Html\Link\AbstractLink`**
- [`Phalcon\Html\Link\Link`](#htmllinklink)

</div>

__Uses__ `Phalcon\Support\Collection`

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

<h4 id="htmllinkabstractlink-__construct"><code>__construct()</code></h4>

```php
public function __construct(
string $rel = "",
string $href = "",
array $attributes = []
);
```

Link constructor.

<div class="api-group">Protected · 10</div>

<h4 id="htmllinkabstractlink-dogetattributes"><code>doGetAttributes()</code></h4>

```php
protected function doGetAttributes(): array;
```

Returns a list of attributes that describe the target URI.

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

Returns whether this is a templated link.

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

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/AbstractLinkProvider.zep">Source on GitHub</a>

@property array $links

<div class="api-tree">

- **`Phalcon\Html\Link\AbstractLinkProvider`**
- [`Phalcon\Html\Link\LinkProvider`](#htmllinklinkprovider)

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\LinkInterface`

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

<h4 id="htmllinkabstractlinkprovider-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $links = [] );
```

LinkProvider constructor.

<div class="api-group">Protected · 5</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/EvolvableLink.zep">Source on GitHub</a>

Class Phalcon\Html\Link\EvolvableLink

<div class="api-tree">

- [`Phalcon\Html\Link\AbstractLink`](#htmllinkabstractlink)
- [`Phalcon\Html\Link\Link`](#htmllinklink)
- **`Phalcon\Html\Link\EvolvableLink`** — implements [`Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`](#htmllinkinterfacesevolvablelinkinterface)

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/EvolvableLinkProvider.zep">Source on GitHub</a>

Class Phalcon\Html\Link\EvolvableLinkProvider

@property LinkInterface[] $links

<div class="api-tree">

- [`Phalcon\Html\Link\AbstractLinkProvider`](#htmllinkabstractlinkprovider)
- [`Phalcon\Html\Link\LinkProvider`](#htmllinklinkprovider)
- **`Phalcon\Html\Link\EvolvableLinkProvider`** — implements [`Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface`](#htmllinkinterfacesevolvablelinkproviderinterface)

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface` · `Phalcon\Html\Link\Interfaces\LinkInterface`

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

<h4 id="htmllinkevolvablelinkprovider-withlink"><code>withLink()</code></h4>

```php
public function withLink( LinkInterface $link ): static;
```

Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if link is === identical
to a link object already in the collection.

<h4 id="htmllinkevolvablelinkprovider-withoutlink"><code>withoutLink()</code></h4>

```php
public function withoutLink( LinkInterface $link ): static;
```

Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if link is === identical to a link
object already in the collection.

## Html\Link\Interfaces\EvolvableLinkInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/EvolvableLinkInterface.zep">Source on GitHub</a>

An evolvable link value object.

<div class="api-tree">

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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/EvolvableLinkProviderInterface.zep">Source on GitHub</a>

An evolvable link provider value object.

<div class="api-tree">

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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/LinkInterface.zep">Source on GitHub</a>

A readable link object.

<div class="api-tree">

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

<h4 id="htmllinkinterfaceslinkinterface-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Returns a list of attributes that describe the target URI.

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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/LinkProviderInterface.zep">Source on GitHub</a>

A link provider object.

<div class="api-tree">

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Link.zep">Source on GitHub</a>

Class Phalcon\Html\Link\Link

<div class="api-tree">

- [`Phalcon\Html\Link\AbstractLink`](#htmllinkabstractlink)
- **`Phalcon\Html\Link\Link`** — implements [`Phalcon\Html\Link\Interfaces\LinkInterface`](#htmllinkinterfaceslinkinterface)
- [`Phalcon\Html\Link\EvolvableLink`](#htmllinkevolvablelink)

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\LinkInterface`

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

<h4 id="htmllinklink-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Returns a list of attributes that describe the target URI.

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

Returns whether or not this is a templated link.

## Html\Link\LinkProvider

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/LinkProvider.zep">Source on GitHub</a>

@property LinkInterface[] links

<div class="api-tree">

- [`Phalcon\Html\Link\AbstractLinkProvider`](#htmllinkabstractlinkprovider)
- **`Phalcon\Html\Link\LinkProvider`** — implements [`Phalcon\Html\Link\Interfaces\LinkProviderInterface`](#htmllinkinterfaceslinkproviderinterface)
- [`Phalcon\Html\Link\EvolvableLinkProvider`](#htmllinkevolvablelinkprovider)

</div>

__Uses__ `Phalcon\Html\Link\Interfaces\LinkInterface` · `Phalcon\Html\Link\Interfaces\LinkProviderInterface`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Serializer/Header.zep">Source on GitHub</a>

Class Phalcon\Http\Link\Serializer\Header

<div class="api-tree">

- **`Phalcon\Html\Link\Serializer\Header`** — implements [`Phalcon\Html\Link\Serializer\SerializerInterface`](#htmllinkserializerserializerinterface)

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

<h4 id="htmllinkserializerheader-serialize"><code>serialize()</code></h4>

```php
public function serialize( array $links ): string|null;
```

Serializes all the passed links to a HTTP link header

## Html\Link\Serializer\SerializerInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Serializer/SerializerInterface.zep">Source on GitHub</a>

Class Phalcon\Http\Link\Serializer\SerializerInterface

<div class="api-tree">

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

<h4 id="htmllinkserializerserializerinterface-serialize"><code>serialize()</code></h4>

```php
public function serialize( array $links ): string|null;
```

Serializer method

## Html\TagFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/TagFactory.zep">Source on GitHub</a>

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

<div class="api-tree">

- **`Phalcon\Html\TagFactory`**

</div>

__Uses__ `Closure` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Exceptions\ServiceNotRegistered` · `Phalcon\Html\Helper\Anchor` · `Phalcon\Html\Helper\Base` · `Phalcon\Html\Helper\Body` · `Phalcon\Html\Helper\Breadcrumbs` · `Phalcon\Html\Helper\Button` · `Phalcon\Html\Helper\Close` · `Phalcon\Html\Helper\Doctype` · `Phalcon\Html\Helper\Element` · `Phalcon\Html\Helper\Form` · `Phalcon\Html\Helper\FriendlyTitle` · `Phalcon\Html\Helper\Img` · `Phalcon\Html\Helper\Input\Checkbox` · `Phalcon\Html\Helper\Input\CheckboxGroup` · `Phalcon\Html\Helper\Input\Generic` · `Phalcon\Html\Helper\Input\Radio` · `Phalcon\Html\Helper\Input\RadioGroup` · `Phalcon\Html\Helper\Input\Select` · `Phalcon\Html\Helper\Input\Textarea` · `Phalcon\Html\Helper\Label` · `Phalcon\Html\Helper\Link` · `Phalcon\Html\Helper\Meta` · `Phalcon\Html\Helper\Ol` · `Phalcon\Html\Helper\Preload` · `Phalcon\Html\Helper\Script` · `Phalcon\Html\Helper\Style` · `Phalcon\Html\Helper\Tag` · `Phalcon\Html\Helper\Title` · `Phalcon\Html\Helper\Ul` · `Phalcon\Html\Helper\VoidTag` · `Phalcon\Http\ResponseInterface` · `Phalcon\Mvc\Url\UrlInterface`

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
ResponseInterface $response = null,
UrlInterface $url = null
);
```

TagFactory constructor.

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

<div class="api-group">Protected · 1</div>

<h4 id="htmltagfactory-getdefaultservices"><code>getDefaultServices()</code></h4>

```php
protected function getDefaultServices(): array;
```

Default service recipes. Every entry is a Closure that returns a
fully-constructed helper instance. Services are built lazily and cached.

Source: https://docs.phalcon.io/5.16/api/phalcon_html/index.mdx
