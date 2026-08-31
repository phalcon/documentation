---
title: "Phalcon Translate"
version: "5.14"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Translate

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Translate\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Adapter/AbstractAdapter.zep">Source on GitHub</a>

@psalm-type TOptions array\{
    defaultInterpolator?: string
\}

@template TKey of string
@template TValue of string
@implements ArrayAccess&lt;TKey, TValue>

<div class="api-tree">

- **`Phalcon\Translate\Adapter\AbstractAdapter`** — implements [`Phalcon\Translate\Adapter\AdapterInterface`](#translateadapteradapterinterface), `ArrayAccess`
- [`Phalcon\Translate\Adapter\Csv`](#translateadaptercsv)
- [`Phalcon\Translate\Adapter\Gettext`](#translateadaptergettext)
- [`Phalcon\Translate\Adapter\NativeArray`](#translateadapternativearray)

</div>

__Uses__ `ArrayAccess` · `Phalcon\Translate\Exceptions\ImmutableObject` · `Phalcon\Translate\InterpolatorFactory`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateadapterabstractadapter-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">InterpolatorFactory</span> <span class="sv">$interpolator</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">AbstractAdapter constructor.</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-_">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">_</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translateKey</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns the translation string of the given key (alias of method &#039;t&#039;)</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">offsetExists</span>( <span class="st">mixed</span> <span class="sv">$translateKey</span> )</code>
<span class="desc">Check whether a translation key exists</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">offsetGet</span>( <span class="st">mixed</span> <span class="sv">$translateKey</span> )</code>
<span class="desc">Returns the translation related to the given key</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetSet</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$offset</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a translation value</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">offsetUnset</span>( <span class="st">mixed</span> <span class="sv">$offset</span> )</code>
<span class="desc">Unsets a translation from the dictionary</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-t">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">t</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translateKey</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns the translation string of the given key</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-replaceplaceholders">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">replacePlaceholders</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translation</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Replaces placeholders by the values passed</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultInterpolator</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">InterpolatorFactory</code>
<code class="sig"><span class="sv">$interpolatorFactory</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 7</div>

<h4 id="translateadapterabstractadapter-__construct"><code>__construct()</code></h4>

```php
public function __construct(
InterpolatorFactory $interpolator,
array $options = []
);
```

AbstractAdapter constructor.

<h4 id="translateadapterabstractadapter-_"><code>_()</code></h4>

```php
public function _(
string $translateKey,
array $placeholders = []
): string;
```

Returns the translation string of the given key (alias of method 't')

<h4 id="translateadapterabstractadapter-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $translateKey ): bool;
```

Check whether a translation key exists

<h4 id="translateadapterabstractadapter-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $translateKey ): string|null;
```

Returns the translation related to the given key

<h4 id="translateadapterabstractadapter-offsetset"><code>offsetSet()</code></h4>

```php
public function offsetSet(
mixed $offset,
mixed $value
): void;
```

Sets a translation value

<h4 id="translateadapterabstractadapter-offsetunset"><code>offsetUnset()</code></h4>

```php
public function offsetUnset( mixed $offset ): void;
```

Unsets a translation from the dictionary

<h4 id="translateadapterabstractadapter-t"><code>t()</code></h4>

```php
public function t(
string $translateKey,
array $placeholders = []
): string;
```

Returns the translation string of the given key

<div class="api-group">Protected · 1</div>

<h4 id="translateadapterabstractadapter-replaceplaceholders"><code>replacePlaceholders()</code></h4>

```php
protected function replacePlaceholders(
string $translation,
array $placeholders = []
): string;
```

Replaces placeholders by the values passed

## Translate\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Adapter/AdapterInterface.zep">Source on GitHub</a>

Phalcon\Translate\Adapter\AdapterInterface

Interface for Phalcon\Translate adapters

<div class="api-tree">

- **`Phalcon\Translate\Adapter\AdapterInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateadapteradapterinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$index</span> )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadapteradapterinterface-query">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">query</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translateKey</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns the translation related to the given key</span>
</a>
<a class="api-item" href="#translateadapteradapterinterface-t">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">t</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translateKey</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns the translation string of the given key</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

<h4 id="translateadapteradapterinterface-has"><code>has()</code></h4>

```php
public function has( string $index ): bool;
```

Check whether is defined a translation key in the internal array

<h4 id="translateadapteradapterinterface-query"><code>query()</code></h4>

```php
public function query(
string $translateKey,
array $placeholders = []
): string;
```

Returns the translation related to the given key

<h4 id="translateadapteradapterinterface-t"><code>t()</code></h4>

```php
public function t(
string $translateKey,
array $placeholders = []
): string;
```

Returns the translation string of the given key

## Translate\Adapter\Csv

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Adapter/Csv.zep">Source on GitHub</a>

<div class="api-tree">

- [`Phalcon\Translate\Adapter\AbstractAdapter`](#translateadapterabstractadapter)
- **`Phalcon\Translate\Adapter\Csv`**

</div>

__Uses__ `Phalcon\Translate\Exception` · `Phalcon\Translate\Exceptions\FileOpenError` · `Phalcon\Translate\Exceptions\MissingRequiredParameter` · `Phalcon\Translate\InterpolatorFactory`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateadaptercsv-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">InterpolatorFactory</span> <span class="sv">$interpolator</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
<span class="desc">Csv constructor.</span>
</a>
<a class="api-item" href="#translateadaptercsv-exists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">exists</span>( <span class="st">string</span> <span class="sv">$index</span> )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadaptercsv-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$index</span> )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadaptercsv-query">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">query</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translateKey</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns the translation related to the given key</span>
</a>
<a class="api-item" href="#translateadaptercsv-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the internal array</span>
</a>
<a class="api-item" href="#translateadaptercsv-phpfopen">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpFopen</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span></span>)</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$translate</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

<h4 id="translateadaptercsv-__construct"><code>__construct()</code></h4>

```php
public function __construct(
InterpolatorFactory $interpolator,
array $options
);
```

Csv constructor.

<h4 id="translateadaptercsv-exists"><code>exists()</code></h4>

```php
public function exists( string $index ): bool;
```

Check whether is defined a translation key in the internal array

<h4 id="translateadaptercsv-has"><code>has()</code></h4>

```php
public function has( string $index ): bool;
```

Check whether is defined a translation key in the internal array

<h4 id="translateadaptercsv-query"><code>query()</code></h4>

```php
public function query(
string $translateKey,
array $placeholders = []
): string;
```

Returns the translation related to the given key

<h4 id="translateadaptercsv-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the internal array

<div class="api-group">Protected · 1</div>

<h4 id="translateadaptercsv-phpfopen"><code>phpFopen()</code></h4>

```php
protected function phpFopen(
string $filename,
string $mode
);
```

@todo to be removed when we get traits

## Translate\Adapter\Gettext

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Adapter/Gettext.zep">Source on GitHub</a>

Phalcon\Translate\Adapter\Gettext

```php
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

Allows translations using gettext

<div class="api-tree">

- [`Phalcon\Translate\Adapter\AbstractAdapter`](#translateadapterabstractadapter)
- **`Phalcon\Translate\Adapter\Gettext`**

</div>

__Uses__ `Phalcon\Translate\Exception` · `Phalcon\Translate\Exceptions\MissingGettextExtension` · `Phalcon\Translate\Exceptions\MissingRequiredParameter` · `Phalcon\Translate\InterpolatorFactory`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateadaptergettext-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">InterpolatorFactory</span> <span class="sv">$interpolator</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
<span class="desc">Gettext constructor.</span>
</a>
<a class="api-item" href="#translateadaptergettext-exists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">exists</span>( <span class="st">string</span> <span class="sv">$index</span> )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadaptergettext-getcategory">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">getCategory</span>()</code>
</a>
<a class="api-item" href="#translateadaptergettext-getdefaultdomain">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDefaultDomain</span>()</code>
</a>
<a class="api-item" href="#translateadaptergettext-getdirectory">
<code class="vis vis-public">public</code>
<code class="ret">array|string</code>
<code class="sig"><span class="sf">getDirectory</span>()</code>
</a>
<a class="api-item" href="#translateadaptergettext-getlocale">
<code class="vis vis-public">public</code>
<code class="ret">string|false</code>
<code class="sig"><span class="sf">getLocale</span>()</code>
</a>
<a class="api-item" href="#translateadaptergettext-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$index</span> )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadaptergettext-nquery">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">nquery</span>(<span class="prm"><span class="st">string</span> <span class="sv">$msgid1</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$msgid2</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$count</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$domain</span><span class="sm"> = null</span></span>)</code>
<span class="desc">The plural version of gettext().</span>
</a>
<a class="api-item" href="#translateadaptergettext-query">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">query</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translateKey</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns the translation related to the given key.</span>
</a>
<a class="api-item" href="#translateadaptergettext-resetdomain">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">resetDomain</span>()</code>
<span class="desc">Sets the default domain</span>
</a>
<a class="api-item" href="#translateadaptergettext-setdefaultdomain">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaultDomain</span>( <span class="st">string</span> <span class="sv">$domain</span> )</code>
<span class="desc">Sets the domain default to search within when calls are made to gettext()</span>
</a>
<a class="api-item" href="#translateadaptergettext-setdirectory">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDirectory</span>( <span class="st">mixed</span> <span class="sv">$directory</span> )</code>
<span class="desc">Sets the path for a domain</span>
</a>
<a class="api-item" href="#translateadaptergettext-setdomain">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">setDomain</span>( <span class="st">string</span> <span class="sv">$domain</span><span class="sm"> = null</span> )</code>
<span class="desc">Changes the current domain (i.e. the translation file)</span>
</a>
<a class="api-item" href="#translateadaptergettext-setlocale">
<code class="vis vis-public">public</code>
<code class="ret">string|bool</code>
<code class="sig"><span class="sf">setLocale</span>(<span class="prm"><span class="st">int</span> <span class="sv">$category</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$localeArray</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Sets locale information</span>
</a>
<a class="api-item" href="#translateadaptergettext-getoptionsdefault">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptionsDefault</span>()</code>
<span class="desc">Gets default options</span>
</a>
<a class="api-item" href="#translateadaptergettext-phpfunctionexists">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpFunctionExists</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
<a class="api-item" href="#translateadaptergettext-prepareoptions">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">prepareOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Validator for constructor</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$category</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$defaultDomain</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|array</code>
<code class="sig"><span class="sv">$directory</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string | false</code>
<code class="sig"><span class="sv">$locale</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 14</div>

<h4 id="translateadaptergettext-__construct"><code>__construct()</code></h4>

```php
public function __construct(
InterpolatorFactory $interpolator,
array $options
);
```

Gettext constructor.

<h4 id="translateadaptergettext-exists"><code>exists()</code></h4>

```php
public function exists( string $index ): bool;
```

Check whether is defined a translation key in the internal array

<h4 id="translateadaptergettext-getcategory"><code>getCategory()</code></h4>

```php
public function getCategory(): int;
```

<h4 id="translateadaptergettext-getdefaultdomain"><code>getDefaultDomain()</code></h4>

```php
public function getDefaultDomain(): string;
```

<h4 id="translateadaptergettext-getdirectory"><code>getDirectory()</code></h4>

```php
public function getDirectory(): array|string;
```

<h4 id="translateadaptergettext-getlocale"><code>getLocale()</code></h4>

```php
public function getLocale(): string|false;
```

<h4 id="translateadaptergettext-has"><code>has()</code></h4>

```php
public function has( string $index ): bool;
```

Check whether is defined a translation key in the internal array

<h4 id="translateadaptergettext-nquery"><code>nquery()</code></h4>

```php
public function nquery(
string $msgid1,
string $msgid2,
int $count,
array $placeholders = [],
string $domain = null
): string;
```

The plural version of gettext().
Some languages have more than one form for plural messages dependent on
the count.

<h4 id="translateadaptergettext-query"><code>query()</code></h4>

```php
public function query(
string $translateKey,
array $placeholders = []
): string;
```

Returns the translation related to the given key.

```php
$translator->query("你好 %name%！", ["name" => "Phalcon"]);
```

<h4 id="translateadaptergettext-resetdomain"><code>resetDomain()</code></h4>

```php
public function resetDomain(): string;
```

Sets the default domain

<h4 id="translateadaptergettext-setdefaultdomain"><code>setDefaultDomain()</code></h4>

```php
public function setDefaultDomain( string $domain ): void;
```

Sets the domain default to search within when calls are made to gettext()

<h4 id="translateadaptergettext-setdirectory"><code>setDirectory()</code></h4>

```php
public function setDirectory( mixed $directory ): void;
```

Sets the path for a domain

```php
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

<h4 id="translateadaptergettext-setdomain"><code>setDomain()</code></h4>

```php
public function setDomain( string $domain = null ): string;
```

Changes the current domain (i.e. the translation file)

<h4 id="translateadaptergettext-setlocale"><code>setLocale()</code></h4>

```php
public function setLocale(
int $category,
array $localeArray = []
): string|bool;
```

Sets locale information

```php
// Set locale to Dutch
$gettext->setLocale(LC_ALL, ["nl_NL"]);

// Try different possible locale names for German
$gettext->setLocale(LC_ALL, ["de_DE@euro", "de_DE", "de", "ge"]);
```

<div class="api-group">Protected · 3</div>

<h4 id="translateadaptergettext-getoptionsdefault"><code>getOptionsDefault()</code></h4>

```php
protected function getOptionsDefault(): array;
```

Gets default options

<h4 id="translateadaptergettext-phpfunctionexists"><code>phpFunctionExists()</code></h4>

```php
protected function phpFunctionExists( string $name ): bool;
```

@todo to be removed when we get traits

<h4 id="translateadaptergettext-prepareoptions"><code>prepareOptions()</code></h4>

```php
protected function prepareOptions( array $options ): void;
```

Validator for constructor

## Translate\Adapter\NativeArray

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Adapter/NativeArray.zep">Source on GitHub</a>

Defines translation lists using PHP arrays

<div class="api-tree">

- [`Phalcon\Translate\Adapter\AbstractAdapter`](#translateadapterabstractadapter)
- **`Phalcon\Translate\Adapter\NativeArray`**

</div>

__Uses__ `Phalcon\Translate\Exception` · `Phalcon\Translate\Exceptions\InvalidDataType` · `Phalcon\Translate\Exceptions\KeyNotFound` · `Phalcon\Translate\Exceptions\MissingContent` · `Phalcon\Translate\InterpolatorFactory`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateadapternativearray-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">InterpolatorFactory</span> <span class="sv">$interpolator</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span></span>)</code>
<span class="desc">NativeArray constructor.</span>
</a>
<a class="api-item" href="#translateadapternativearray-exists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">exists</span>( <span class="st">string</span> <span class="sv">$index</span> )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadapternativearray-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$index</span> )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadapternativearray-notfound">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">notFound</span>( <span class="st">string</span> <span class="sv">$index</span> )</code>
<span class="desc">Whenever a key is not found this method will be called</span>
</a>
<a class="api-item" href="#translateadapternativearray-query">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">query</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translateKey</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Returns the translation related to the given key</span>
</a>
<a class="api-item" href="#translateadapternativearray-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toArray</span>()</code>
<span class="desc">Returns the internal array</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

<h4 id="translateadapternativearray-__construct"><code>__construct()</code></h4>

```php
public function __construct(
InterpolatorFactory $interpolator,
array $options
);
```

NativeArray constructor.

<h4 id="translateadapternativearray-exists"><code>exists()</code></h4>

```php
public function exists( string $index ): bool;
```

Check whether is defined a translation key in the internal array

<h4 id="translateadapternativearray-has"><code>has()</code></h4>

```php
public function has( string $index ): bool;
```

Check whether is defined a translation key in the internal array

<h4 id="translateadapternativearray-notfound"><code>notFound()</code></h4>

```php
public function notFound( string $index ): string;
```

Whenever a key is not found this method will be called

<h4 id="translateadapternativearray-query"><code>query()</code></h4>

```php
public function query(
string $translateKey,
array $placeholders = []
): string;
```

Returns the translation related to the given key

<h4 id="translateadapternativearray-toarray"><code>toArray()</code></h4>

```php
public function toArray(): array;
```

Returns the internal array

## Translate\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exception.zep">Source on GitHub</a>

Class for exceptions thrown by Phalcon\Translate

<div class="api-tree">

- `\Exception`
- **`Phalcon\Translate\Exception`**
- [`Phalcon\Translate\Exceptions\FileOpenError`](#translateexceptionsfileopenerror)
- [`Phalcon\Translate\Exceptions\ImmutableObject`](#translateexceptionsimmutableobject)
- [`Phalcon\Translate\Exceptions\InterpolatorNotRegistered`](#translateexceptionsinterpolatornotregistered)
- [`Phalcon\Translate\Exceptions\InvalidDataType`](#translateexceptionsinvaliddatatype)
- [`Phalcon\Translate\Exceptions\KeyNotFound`](#translateexceptionskeynotfound)
- [`Phalcon\Translate\Exceptions\MissingContent`](#translateexceptionsmissingcontent)
- [`Phalcon\Translate\Exceptions\MissingGettextExtension`](#translateexceptionsmissinggettextextension)
- [`Phalcon\Translate\Exceptions\MissingRequiredParameter`](#translateexceptionsmissingrequiredparameter)
- [`Phalcon\Translate\Exceptions\TranslatorNotRegistered`](#translateexceptionstranslatornotregistered)

</div>

## Translate\Exceptions\FileOpenError

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/FileOpenError.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Translate\Exception`](#translateexception)
- **`Phalcon\Translate\Exceptions\FileOpenError`**

</div>

__Uses__ `Phalcon\Translate\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsfileopenerror-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="translateexceptionsfileopenerror-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Translate\Exceptions\ImmutableObject

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/ImmutableObject.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Translate\Exception`](#translateexception)
- **`Phalcon\Translate\Exceptions\ImmutableObject`**

</div>

__Uses__ `Phalcon\Translate\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsimmutableobject-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="translateexceptionsimmutableobject-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Translate\Exceptions\InterpolatorNotRegistered

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/InterpolatorNotRegistered.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Translate\Exception`](#translateexception)
- **`Phalcon\Translate\Exceptions\InterpolatorNotRegistered`**

</div>

__Uses__ `Phalcon\Translate\Exception`

## Translate\Exceptions\InvalidDataType

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/InvalidDataType.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Translate\Exception`](#translateexception)
- **`Phalcon\Translate\Exceptions\InvalidDataType`**

</div>

__Uses__ `Phalcon\Translate\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsinvaliddatatype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="translateexceptionsinvaliddatatype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Translate\Exceptions\KeyNotFound

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/KeyNotFound.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Translate\Exception`](#translateexception)
- **`Phalcon\Translate\Exceptions\KeyNotFound`**

</div>

__Uses__ `Phalcon\Translate\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionskeynotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="translateexceptionskeynotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $key );
```

## Translate\Exceptions\MissingContent

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/MissingContent.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Translate\Exception`](#translateexception)
- **`Phalcon\Translate\Exceptions\MissingContent`**

</div>

__Uses__ `Phalcon\Translate\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsmissingcontent-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="translateexceptionsmissingcontent-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Translate\Exceptions\MissingGettextExtension

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/MissingGettextExtension.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Translate\Exception`](#translateexception)
- **`Phalcon\Translate\Exceptions\MissingGettextExtension`**

</div>

__Uses__ `Phalcon\Translate\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsmissinggettextextension-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="translateexceptionsmissinggettextextension-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Translate\Exceptions\MissingRequiredParameter

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/MissingRequiredParameter.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Translate\Exception`](#translateexception)
- **`Phalcon\Translate\Exceptions\MissingRequiredParameter`**

</div>

__Uses__ `Phalcon\Translate\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsmissingrequiredparameter-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$parameter</span> )</code>
</a>
<a class="api-item" href="#translateexceptionsmissingrequiredparameter-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getParameter</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="translateexceptionsmissingrequiredparameter-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $parameter );
```

<h4 id="translateexceptionsmissingrequiredparameter-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter(): string;
```

## Translate\Exceptions\TranslatorNotRegistered

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/TranslatorNotRegistered.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Translate\Exception`](#translateexception)
- **`Phalcon\Translate\Exceptions\TranslatorNotRegistered`**

</div>

__Uses__ `Phalcon\Translate\Exception`

## Translate\InterpolatorFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/InterpolatorFactory.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the
LICENSE.txt file that was distributed with this source code.

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.14/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.14/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Translate\InterpolatorFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Translate\Interpolator\InterpolatorInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateinterpolatorfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#translateinterpolatorfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">InterpolatorInterface</code>
<code class="sig"><span class="sf">newInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#translateinterpolatorfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#translateinterpolatorfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="translateinterpolatorfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

<h4 id="translateinterpolatorfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name ): InterpolatorInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

<h4 id="translateinterpolatorfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="translateinterpolatorfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

## Translate\Interpolator\AssociativeArray

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Interpolator/AssociativeArray.zep">Source on GitHub</a>

Class AssociativeArray

<div class="api-tree">

- **`Phalcon\Translate\Interpolator\AssociativeArray`** — implements [`Phalcon\Translate\Interpolator\InterpolatorInterface`](#translateinterpolatorinterpolatorinterface)

</div>

__Uses__ `Phalcon\Support\Helper\Str\Interpolate`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateinterpolatorassociativearray-replaceplaceholders">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">replacePlaceholders</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translation</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Replaces placeholders by the values passed</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="translateinterpolatorassociativearray-replaceplaceholders"><code>replacePlaceholders()</code></h4>

```php
public function replacePlaceholders(
string $translation,
array $placeholders = []
): string;
```

Replaces placeholders by the values passed

## Translate\Interpolator\IndexedArray

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Interpolator/IndexedArray.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- **`Phalcon\Translate\Interpolator\IndexedArray`** — implements [`Phalcon\Translate\Interpolator\InterpolatorInterface`](#translateinterpolatorinterpolatorinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateinterpolatorindexedarray-replaceplaceholders">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">replacePlaceholders</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translation</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Replaces placeholders by the values passed</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="translateinterpolatorindexedarray-replaceplaceholders"><code>replacePlaceholders()</code></h4>

```php
public function replacePlaceholders(
string $translation,
array $placeholders = []
): string;
```

Replaces placeholders by the values passed

## Translate\Interpolator\InterpolatorInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Interpolator/InterpolatorInterface.zep">Source on GitHub</a>

Phalcon\Translate\InterpolatorInterface

Interface for Phalcon\Translate interpolators

<div class="api-tree">

- **`Phalcon\Translate\Interpolator\InterpolatorInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateinterpolatorinterpolatorinterface-replaceplaceholders">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">replacePlaceholders</span>(<span class="prm"><span class="st">string</span> <span class="sv">$translation</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$placeholders</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Replaces placeholders by the values passed</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="translateinterpolatorinterpolatorinterface-replaceplaceholders"><code>replacePlaceholders()</code></h4>

```php
public function replacePlaceholders(
string $translation,
array $placeholders = []
): string;
```

Replaces placeholders by the values passed

## Translate\TranslateFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/TranslateFactory.zep">Source on GitHub</a>

@property InterpolatorFactory $interpolator

@psalm-type TConfig array\{
     adapter: string,
     options?: array\{
         content: string,
         delimiter: string,
         enclosure: string,
         locale: string,
         defaultDomain: string,
         directory: string,
         category: string,
         triggerError: bool,
     \}
 \}

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.14/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.14/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Translate\TranslateFactory`**

</div>

__Uses__ `Phalcon\Config\ConfigInterface` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Translate\Adapter\AdapterInterface`

### Method Summary

<div class="api-list">
<a class="api-item" href="#translatetranslatefactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">InterpolatorFactory</span> <span class="sv">$interpolator</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span></span>)</code>
</a>
<a class="api-item" href="#translatetranslatefactory-load">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">load</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
<span class="desc">Factory to create an instance from a Config object</span>
</a>
<a class="api-item" href="#translatetranslatefactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig"><span class="sf">newInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#translatetranslatefactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#translatetranslatefactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

<h4 id="translatetranslatefactory-__construct"><code>__construct()</code></h4>

```php
public function __construct(
InterpolatorFactory $interpolator,
array $services = []
);
```

<h4 id="translatetranslatefactory-load"><code>load()</code></h4>

```php
public function load( mixed $config ): AdapterInterface;
```

Factory to create an instance from a Config object

<h4 id="translatetranslatefactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(
string $name,
array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

<h4 id="translatetranslatefactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="translatetranslatefactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

Source: https://docs.phalcon.io/5.14/api/phalcon_translate/index.mdx
