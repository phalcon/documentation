---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Assets\Asset

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Asset.zep){ .src-btn }

Represents an asset

```php
$asset = new \Phalcon\Assets\Asset("js", "js/jquery.js");
```

<div class="api-tree" markdown>

- **`Phalcon\Assets\Asset`** - implements [`Phalcon\Assets\AssetInterface`](#assetsassetinterface)
    - [`Phalcon\Assets\Asset\Css`](#assetsassetcss)
    - [`Phalcon\Assets\Asset\Js`](#assetsassetjs)

</div>

__Uses__ `Phalcon\Assets\Exceptions\CannotReadAsset` · `Phalcon\Assets\Traits\AttributesTrait` · `Phalcon\Assets\Traits\SourceTargetTrait` · `Phalcon\Traits\Php\FileTrait` · `Phalcon\Traits\Php\HashTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsasset-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$isLocal</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$version</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$isAutoVersion</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Asset constructor.</span>
</a>
<a class="api-item" href="#assetsasset-getassetkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAssetKey</span>()</code>
<span class="desc">Gets the asset&#039;s key.</span>
</a>
<a class="api-item" href="#assetsasset-getcontent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getContent</span>( <span class="st">string</span> <span class="sv">$basePath</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns the content of the asset as an string</span>
</a>
<a class="api-item" href="#assetsasset-getfilter">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getFilter</span>()</code>
</a>
<a class="api-item" href="#assetsasset-getpath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPath</span>()</code>
</a>
<a class="api-item" href="#assetsasset-getrealsourcepath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRealSourcePath</span>( <span class="st">string</span> <span class="sv">$basePath</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns the complete location where the asset is located</span>
</a>
<a class="api-item" href="#assetsasset-getrealtargetpath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRealTargetPath</span>( <span class="st">string</span> <span class="sv">$basePath</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns the complete location where the asset must be written</span>
</a>
<a class="api-item" href="#assetsasset-getrealtargeturi">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRealTargetUri</span>()</code>
<span class="desc">Returns the real target uri for the generated HTML</span>
</a>
<a class="api-item" href="#assetsasset-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
</a>
<a class="api-item" href="#assetsasset-getversion">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getVersion</span>()</code>
<span class="desc">Version of resource</span>
</a>
<a class="api-item" href="#assetsasset-isautoversion">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAutoVersion</span>()</code>
<span class="desc">Checks if the asset is using auto version</span>
</a>
<a class="api-item" href="#assetsasset-setattributes">
<code class="vis vis-public">public</code>
<code class="ret">AssetInterface</code>
<code class="sig"><span class="sf">setAttributes</span>( <span class="st">array</span> <span class="sv">$attributes</span> )</code>
<span class="desc">Sets extra HTML attributes</span>
</a>
<a class="api-item" href="#assetsasset-setautoversion">
<code class="vis vis-public">public</code>
<code class="ret">AssetInterface</code>
<code class="sig"><span class="sf">setAutoVersion</span>( <span class="st">bool</span> <span class="sv">$flag</span> )</code>
</a>
<a class="api-item" href="#assetsasset-setfilter">
<code class="vis vis-public">public</code>
<code class="ret">AssetInterface</code>
<code class="sig"><span class="sf">setFilter</span>( <span class="st">bool</span> <span class="sv">$filter</span> )</code>
<span class="desc">Sets if the asset must be filtered or not</span>
</a>
<a class="api-item" href="#assetsasset-setpath">
<code class="vis vis-public">public</code>
<code class="ret">AssetInterface</code>
<code class="sig"><span class="sf">setPath</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
<span class="desc">Sets the asset&#039;s path</span>
</a>
<a class="api-item" href="#assetsasset-settype">
<code class="vis vis-public">public</code>
<code class="ret">AssetInterface</code>
<code class="sig"><span class="sf">setType</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Sets the asset&#039;s type</span>
</a>
<a class="api-item" href="#assetsasset-setversion">
<code class="vis vis-public">public</code>
<code class="ret">AssetInterface</code>
<code class="sig"><span class="sf">setVersion</span>( <span class="st">string</span> <span class="sv">$version</span> )</code>
<span class="desc">Sets the asset&#039;s version</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$filter</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isAutoVersion</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$path</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$version</span></code>
<span class="desc">Version of resource</span>
</div>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `__construct()` { #assetsasset-__construct }

```php
public function __construct(
    string $type,
    string $path,
    bool $isLocal = true,
    bool $filter = true,
    array $attributes = [],
    string $version = null,
    bool $isAutoVersion = false
);
```

Asset constructor.

#### `getAssetKey()` { #assetsasset-getassetkey }

```php
public function getAssetKey(): string;
```

Gets the asset's key.

#### `getContent()` { #assetsasset-getcontent }

```php
public function getContent( string $basePath = null ): string;
```

Returns the content of the asset as an string
Optionally a base path where the asset is located can be set

#### `getFilter()` { #assetsasset-getfilter }

```php
public function getFilter(): bool;
```

#### `getPath()` { #assetsasset-getpath }

```php
public function getPath(): string;
```

#### `getRealSourcePath()` { #assetsasset-getrealsourcepath }

```php
public function getRealSourcePath( string $basePath = null ): string;
```

Returns the complete location where the asset is located

#### `getRealTargetPath()` { #assetsasset-getrealtargetpath }

```php
public function getRealTargetPath( string $basePath = null ): string;
```

Returns the complete location where the asset must be written

#### `getRealTargetUri()` { #assetsasset-getrealtargeturi }

```php
public function getRealTargetUri(): string;
```

Returns the real target uri for the generated HTML

#### `getType()` { #assetsasset-gettype }

```php
public function getType(): string;
```

#### `getVersion()` { #assetsasset-getversion }

```php
public function getVersion(): string|null;
```

Version of resource

#### `isAutoVersion()` { #assetsasset-isautoversion }

```php
public function isAutoVersion(): bool;
```

Checks if the asset is using auto version

#### `setAttributes()` { #assetsasset-setattributes }

```php
public function setAttributes( array $attributes ): AssetInterface;
```

Sets extra HTML attributes

#### `setAutoVersion()` { #assetsasset-setautoversion }

```php
public function setAutoVersion( bool $flag ): AssetInterface;
```

#### `setFilter()` { #assetsasset-setfilter }

```php
public function setFilter( bool $filter ): AssetInterface;
```

Sets if the asset must be filtered or not

#### `setPath()` { #assetsasset-setpath }

```php
public function setPath( string $path ): AssetInterface;
```

Sets the asset's path

#### `setType()` { #assetsasset-settype }

```php
public function setType( string $type ): AssetInterface;
```

Sets the asset's type

#### `setVersion()` { #assetsasset-setversion }

```php
public function setVersion( string $version ): AssetInterface;
```

Sets the asset's version


## Assets\AssetInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/AssetInterface.zep){ .src-btn }

Phalcon\Assets\AssetInterface

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Assets\Asset`](phalcon_contracts.md#contractsassetsasset)
    - **`Phalcon\Assets\AssetInterface`**

</div>

__Uses__ `Phalcon\Contracts\Assets\Asset`
{ .api-uses }


## Assets\Asset\Css

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Asset/Css.zep){ .src-btn }

Represents CSS assets

<div class="api-tree" markdown>

- [`Phalcon\Assets\Asset`](#assetsasset)
    - **`Phalcon\Assets\Asset\Css`**

</div>

__Uses__ `Phalcon\Assets\Asset`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsassetcss-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$version</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$autoVersion</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Phalcon\Assets\Asset\Css constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsassetcss-__construct }

```php
public function __construct(
    string $path,
    bool $local = true,
    bool $filter = true,
    array $attributes = [],
    string $version = null,
    bool $autoVersion = false
);
```

Phalcon\Assets\Asset\Css constructor


## Assets\Asset\Js

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Asset/Js.zep){ .src-btn }

Represents JavaScript assets

<div class="api-tree" markdown>

- [`Phalcon\Assets\Asset`](#assetsasset)
    - **`Phalcon\Assets\Asset\Js`**

</div>

__Uses__ `Phalcon\Assets\Asset`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsassetjs-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$version</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$autoVersion</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Phalcon\Assets\Asset\Js constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsassetjs-__construct }

```php
public function __construct(
    string $path,
    bool $local = true,
    bool $filter = true,
    array $attributes = [],
    string $version = null,
    bool $autoVersion = false
);
```

Phalcon\Assets\Asset\Js constructor


## Assets\Collection

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Collection.zep){ .src-btn }

Collection of asset objects

<div class="api-tree" markdown>

- **`Phalcon\Assets\Collection`** - implements `Countable`, `IteratorAggregate`

</div>

__Uses__ `ArrayIterator` · `Countable` · `IteratorAggregate` · `Phalcon\Assets\Traits\AttributesTrait` · `Phalcon\Assets\Traits\SourceTargetTrait` · `Phalcon\Traits\Php\FileTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetscollection-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>( <span class="st">AssetInterface</span> <span class="sv">$asset</span> )</code>
<span class="desc">Adds an asset to the collection</span>
</a>
<a class="api-item" href="#assetscollection-addcss">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addCss</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$isLocal</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$version</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$autoVersion</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Adds a CSS asset to the collection</span>
</a>
<a class="api-item" href="#assetscollection-addfilter">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addFilter</span>( <span class="st">FilterInterface</span> <span class="sv">$filter</span> )</code>
<span class="desc">Adds a filter to the collection</span>
</a>
<a class="api-item" href="#assetscollection-addinline">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addInline</span>( <span class="st">Inline</span> <span class="sv">$code</span> )</code>
<span class="desc">Adds an inline code to the collection</span>
</a>
<a class="api-item" href="#assetscollection-addinlinecss">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addInlineCss</span>(<span class="prm"><span class="st">string</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Adds an inline CSS to the collection</span>
</a>
<a class="api-item" href="#assetscollection-addinlinejs">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addInlineJs</span>(<span class="prm"><span class="st">string</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Adds an inline JavaScript to the collection</span>
</a>
<a class="api-item" href="#assetscollection-addjs">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addJs</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$isLocal</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$version</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$autoVersion</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Adds a JavaScript asset to the collection</span>
</a>
<a class="api-item" href="#assetscollection-count">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">count</span>()</code>
<span class="desc">Return the count of the assets</span>
</a>
<a class="api-item" href="#assetscollection-getassets">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAssets</span>()</code>
</a>
<a class="api-item" href="#assetscollection-getcodes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getCodes</span>()</code>
</a>
<a class="api-item" href="#assetscollection-getfilters">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getFilters</span>()</code>
</a>
<a class="api-item" href="#assetscollection-getiterator">
<code class="vis vis-public">public</code>
<code class="ret">\Traversable</code>
<code class="sig"><span class="sf">getIterator</span>()</code>
<span class="desc">Returns the generator of the class</span>
</a>
<a class="api-item" href="#assetscollection-getjoin">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getJoin</span>()</code>
</a>
<a class="api-item" href="#assetscollection-getprefix">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getPrefix</span>()</code>
</a>
<a class="api-item" href="#assetscollection-getrealtargetpath">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getRealTargetPath</span>( <span class="st">string</span> <span class="sv">$basePath</span> )</code>
<span class="desc">Returns the complete location where the joined/filtered collection must</span>
</a>
<a class="api-item" href="#assetscollection-gettargetislocal">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getTargetIsLocal</span>()</code>
</a>
<a class="api-item" href="#assetscollection-getversion">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getVersion</span>()</code>
</a>
<a class="api-item" href="#assetscollection-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">AssetInterface</span> <span class="sv">$asset</span> )</code>
<span class="desc">Checks this the asset is added to the collection.</span>
</a>
<a class="api-item" href="#assetscollection-isautoversion">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAutoVersion</span>()</code>
<span class="desc">Checks if collection is using auto version</span>
</a>
<a class="api-item" href="#assetscollection-join">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">join</span>( <span class="st">bool</span> <span class="sv">$flag</span> )</code>
<span class="desc">Sets if all filtered assets in the collection must be joined in a single</span>
</a>
<a class="api-item" href="#assetscollection-setattributes">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAttributes</span>( <span class="st">array</span> <span class="sv">$attributes</span> )</code>
<span class="desc">Sets extra HTML attributes</span>
</a>
<a class="api-item" href="#assetscollection-setautoversion">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAutoVersion</span>( <span class="st">bool</span> <span class="sv">$flag</span> )</code>
</a>
<a class="api-item" href="#assetscollection-setfilters">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setFilters</span>( <span class="st">array</span> <span class="sv">$filters</span> )</code>
<span class="desc">Sets an array of filters in the collection</span>
</a>
<a class="api-item" href="#assetscollection-setprefix">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setPrefix</span>( <span class="st">string</span> <span class="sv">$prefix</span> )</code>
<span class="desc">Sets a common prefix for all the assets</span>
</a>
<a class="api-item" href="#assetscollection-settargetislocal">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setTargetIsLocal</span>( <span class="st">bool</span> <span class="sv">$flag</span> )</code>
<span class="desc">Sets if the target local or not</span>
</a>
<a class="api-item" href="#assetscollection-setversion">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setVersion</span>( <span class="st">string</span> <span class="sv">$version</span> )</code>
<span class="desc">Sets the version</span>
</a>
<a class="api-item" href="#assetscollection-addasset">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">addAsset</span>( <span class="st">AssetInterface</span> <span class="sv">$asset</span> )</code>
<span class="desc">Adds an asset or inline-code to the collection</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$assets</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$autoVersion</span><span class="sm"> = false</span></code>
<span class="desc">Should version be determined from file modification time</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$codes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$filters</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$join</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$prefix</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$targetIsLocal</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$version</span><span class="sm"> = &quot;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 26</div>

#### `add()` { #assetscollection-add }

```php
public function add( AssetInterface $asset ): static;
```

Adds an asset to the collection

#### `addCss()` { #assetscollection-addcss }

```php
public function addCss(
    string $path,
    mixed $isLocal = null,
    bool $filter = true,
    array $attributes = [],
    string $version = null,
    bool $autoVersion = false
): static;
```

Adds a CSS asset to the collection

#### `addFilter()` { #assetscollection-addfilter }

```php
public function addFilter( FilterInterface $filter ): static;
```

Adds a filter to the collection

#### `addInline()` { #assetscollection-addinline }

```php
public function addInline( Inline $code ): static;
```

Adds an inline code to the collection

#### `addInlineCss()` { #assetscollection-addinlinecss }

```php
public function addInlineCss(
    string $content,
    bool $filter = true,
    array $attributes = []
): static;
```

Adds an inline CSS to the collection

#### `addInlineJs()` { #assetscollection-addinlinejs }

```php
public function addInlineJs(
    string $content,
    bool $filter = true,
    array $attributes = []
): static;
```

Adds an inline JavaScript to the collection

#### `addJs()` { #assetscollection-addjs }

```php
public function addJs(
    string $path,
    mixed $isLocal = null,
    bool $filter = true,
    array $attributes = [],
    string $version = null,
    bool $autoVersion = false
): static;
```

Adds a JavaScript asset to the collection

#### `count()` { #assetscollection-count }

```php
public function count(): int;
```

Return the count of the assets

@link https://php.net/manual/en/countable.count.php

#### `getAssets()` { #assetscollection-getassets }

```php
public function getAssets(): array;
```

#### `getCodes()` { #assetscollection-getcodes }

```php
public function getCodes(): array;
```

#### `getFilters()` { #assetscollection-getfilters }

```php
public function getFilters(): array;
```

#### `getIterator()` { #assetscollection-getiterator }

```php
public function getIterator(): \Traversable;
```

Returns the generator of the class

@link https://php.net/manual/en/iteratoraggregate.getiterator.php

#### `getJoin()` { #assetscollection-getjoin }

```php
public function getJoin(): bool;
```

#### `getPrefix()` { #assetscollection-getprefix }

```php
public function getPrefix(): string;
```

#### `getRealTargetPath()` { #assetscollection-getrealtargetpath }

```php
public function getRealTargetPath( string $basePath ): string;
```

Returns the complete location where the joined/filtered collection must
be written

#### `getTargetIsLocal()` { #assetscollection-gettargetislocal }

```php
public function getTargetIsLocal(): bool;
```

#### `getVersion()` { #assetscollection-getversion }

```php
public function getVersion(): string;
```

#### `has()` { #assetscollection-has }

```php
public function has( AssetInterface $asset ): bool;
```

Checks this the asset is added to the collection.

```php
use Phalcon\Assets\Asset;
use Phalcon\Assets\Collection;

$collection = new Collection();

$asset = new Asset("js", "js/jquery.js");

$collection->add($asset);
$collection->has($asset); // true
```

#### `isAutoVersion()` { #assetscollection-isautoversion }

```php
public function isAutoVersion(): bool;
```

Checks if collection is using auto version

#### `join()` { #assetscollection-join }

```php
public function join( bool $flag ): static;
```

Sets if all filtered assets in the collection must be joined in a single
result file

#### `setAttributes()` { #assetscollection-setattributes }

```php
public function setAttributes( array $attributes ): static;
```

Sets extra HTML attributes

#### `setAutoVersion()` { #assetscollection-setautoversion }

```php
public function setAutoVersion( bool $flag ): static;
```

#### `setFilters()` { #assetscollection-setfilters }

```php
public function setFilters( array $filters ): static;
```

Sets an array of filters in the collection

#### `setPrefix()` { #assetscollection-setprefix }

```php
public function setPrefix( string $prefix ): static;
```

Sets a common prefix for all the assets

#### `setTargetIsLocal()` { #assetscollection-settargetislocal }

```php
public function setTargetIsLocal( bool $flag ): static;
```

Sets if the target local or not

#### `setVersion()` { #assetscollection-setversion }

```php
public function setVersion( string $version ): static;
```

Sets the version

<div class="api-group">Protected · 1</div>

#### `addAsset()` { #assetscollection-addasset }

```php
final protected function addAsset( AssetInterface $asset ): bool;
```

Adds an asset or inline-code to the collection


## Assets\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Assets will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Assets\Exception`**
        - [`Phalcon\Assets\Exceptions\AssetSourceTargetCollision`](#assetsexceptionsassetsourcetargetcollision)
        - [`Phalcon\Assets\Exceptions\CannotReadAsset`](#assetsexceptionscannotreadasset)
        - [`Phalcon\Assets\Exceptions\CollectionNotFound`](#assetsexceptionscollectionnotfound)
        - [`Phalcon\Assets\Exceptions\InvalidAssetSourcePath`](#assetsexceptionsinvalidassetsourcepath)
        - [`Phalcon\Assets\Exceptions\InvalidAssetTargetPath`](#assetsexceptionsinvalidassettargetpath)
        - [`Phalcon\Assets\Exceptions\InvalidFilter`](#assetsexceptionsinvalidfilter)
        - [`Phalcon\Assets\Exceptions\InvalidTargetPath`](#assetsexceptionsinvalidtargetpath)
        - [`Phalcon\Assets\Exceptions\TargetPathIsDirectory`](#assetsexceptionstargetpathisdirectory)

</div>


## Assets\Exceptions\AssetSourceTargetCollision

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/AssetSourceTargetCollision.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Assets\Exception`](#assetsexception)
        - **`Phalcon\Assets\Exceptions\AssetSourceTargetCollision`**

</div>

__Uses__ `Phalcon\Assets\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsexceptionsassetsourcetargetcollision-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsexceptionsassetsourcetargetcollision-__construct }

```php
public function __construct( string $path );
```


## Assets\Exceptions\CannotReadAsset

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/CannotReadAsset.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Assets\Exception`](#assetsexception)
        - **`Phalcon\Assets\Exceptions\CannotReadAsset`**

</div>

__Uses__ `Phalcon\Assets\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsexceptionscannotreadasset-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsexceptionscannotreadasset-__construct }

```php
public function __construct( string $path );
```


## Assets\Exceptions\CollectionNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/CollectionNotFound.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Assets\Exception`](#assetsexception)
        - **`Phalcon\Assets\Exceptions\CollectionNotFound`**

</div>

__Uses__ `Phalcon\Assets\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsexceptionscollectionnotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = &quot;&quot;</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsexceptionscollectionnotfound-__construct }

```php
public function __construct( string $name = "" );
```


## Assets\Exceptions\InvalidAssetSourcePath

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/InvalidAssetSourcePath.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Assets\Exception`](#assetsexception)
        - **`Phalcon\Assets\Exceptions\InvalidAssetSourcePath`**

</div>

__Uses__ `Phalcon\Assets\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsexceptionsinvalidassetsourcepath-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsexceptionsinvalidassetsourcepath-__construct }

```php
public function __construct( string $path );
```


## Assets\Exceptions\InvalidAssetTargetPath

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/InvalidAssetTargetPath.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Assets\Exception`](#assetsexception)
        - **`Phalcon\Assets\Exceptions\InvalidAssetTargetPath`**

</div>

__Uses__ `Phalcon\Assets\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsexceptionsinvalidassettargetpath-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsexceptionsinvalidassettargetpath-__construct }

```php
public function __construct( string $path );
```


## Assets\Exceptions\InvalidFilter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/InvalidFilter.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Assets\Exception`](#assetsexception)
        - **`Phalcon\Assets\Exceptions\InvalidFilter`**

</div>

__Uses__ `Phalcon\Assets\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsexceptionsinvalidfilter-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsexceptionsinvalidfilter-__construct }

```php
public function __construct();
```


## Assets\Exceptions\InvalidTargetPath

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/InvalidTargetPath.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Assets\Exception`](#assetsexception)
        - **`Phalcon\Assets\Exceptions\InvalidTargetPath`**

</div>

__Uses__ `Phalcon\Assets\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsexceptionsinvalidtargetpath-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsexceptionsinvalidtargetpath-__construct }

```php
public function __construct( string $path );
```


## Assets\Exceptions\TargetPathIsDirectory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/TargetPathIsDirectory.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Assets\Exception`](#assetsexception)
        - **`Phalcon\Assets\Exceptions\TargetPathIsDirectory`**

</div>

__Uses__ `Phalcon\Assets\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsexceptionstargetpathisdirectory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$path</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsexceptionstargetpathisdirectory-__construct }

```php
public function __construct( string $path );
```


## Assets\FilterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/FilterInterface.zep){ .src-btn }

Phalcon\Assets\FilterInterface

<div class="api-tree" markdown>

- [`Phalcon\Contracts\Assets\Filter`](phalcon_contracts.md#contractsassetsfilter)
    - **`Phalcon\Assets\FilterInterface`**

</div>

__Uses__ `Phalcon\Contracts\Assets\Filter`
{ .api-uses }


## Assets\Filters\Cssmin

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Filters/CssMin.zep){ .src-btn }

Filter intended to minify CSS content (remove comments, newlines, and line
feeds, and drop the last semicolon of the last property).

> NOTE: This functionality is not currently available; `filter()` returns
> the content unchanged.
{: .alert .alert-info }

<div class="api-tree" markdown>

- **`Phalcon\Assets\Filters\Cssmin`** - implements [`Phalcon\Assets\FilterInterface`](#assetsfilterinterface)

</div>

__Uses__ `Phalcon\Assets\FilterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsfilterscssmin-filter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">filter</span>( <span class="st">string</span> <span class="sv">$content</span> )</code>
<span class="desc">Filters the content using CSSMIN</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `filter()` { #assetsfilterscssmin-filter }

```php
public function filter( string $content ): string;
```

Filters the content using CSSMIN


## Assets\Filters\Jsmin

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Filters/JsMin.zep){ .src-btn }

Filter intended to minify JavaScript content (remove comments and the
characters that are insignificant to JavaScript - tabs, carriage returns,
and most spaces and linefeeds).

> NOTE: This functionality is not currently available; `filter()` returns
> the content unchanged.
{: .alert .alert-info }

<div class="api-tree" markdown>

- **`Phalcon\Assets\Filters\Jsmin`** - implements [`Phalcon\Assets\FilterInterface`](#assetsfilterinterface)

</div>

__Uses__ `Phalcon\Assets\FilterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsfiltersjsmin-filter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">filter</span>( <span class="st">string</span> <span class="sv">$content</span> )</code>
<span class="desc">Filters the content using JSMIN</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `filter()` { #assetsfiltersjsmin-filter }

```php
public function filter( string $content ): string;
```

Filters the content using JSMIN


## Assets\Filters\None

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Filters/None.zep){ .src-btn }

Returns the content without make any modification to the original source

<div class="api-tree" markdown>

- **`Phalcon\Assets\Filters\None`** - implements [`Phalcon\Assets\FilterInterface`](#assetsfilterinterface)

</div>

__Uses__ `Phalcon\Assets\FilterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsfiltersnone-filter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">filter</span>( <span class="st">string</span> <span class="sv">$content</span> )</code>
<span class="desc">Returns the content as is</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `filter()` { #assetsfiltersnone-filter }

```php
public function filter( string $content ): string;
```

Returns the content as is


## Assets\Inline

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Inline.zep){ .src-btn }

Represents an inline asset

```php
$inline = new \Phalcon\Assets\Inline("js", "alert('hello world');");
```

<div class="api-tree" markdown>

- **`Phalcon\Assets\Inline`** - implements [`Phalcon\Assets\AssetInterface`](#assetsassetinterface)
    - [`Phalcon\Assets\Inline\Css`](#assetsinlinecss)
    - [`Phalcon\Assets\Inline\Js`](#assetsinlinejs)

</div>

__Uses__ `Phalcon\Assets\Traits\AttributesTrait` · `Phalcon\Traits\Php\HashTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsinline-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Phalcon\Assets\Inline constructor</span>
</a>
<a class="api-item" href="#assetsinline-getassetkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAssetKey</span>()</code>
<span class="desc">Gets the asset&#039;s key.</span>
</a>
<a class="api-item" href="#assetsinline-getcontent">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getContent</span>()</code>
</a>
<a class="api-item" href="#assetsinline-getfilter">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">getFilter</span>()</code>
</a>
<a class="api-item" href="#assetsinline-gettype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getType</span>()</code>
</a>
<a class="api-item" href="#assetsinline-setattributes">
<code class="vis vis-public">public</code>
<code class="ret">AssetInterface</code>
<code class="sig"><span class="sf">setAttributes</span>( <span class="st">array</span> <span class="sv">$attributes</span> )</code>
<span class="desc">Sets extra HTML attributes</span>
</a>
<a class="api-item" href="#assetsinline-setfilter">
<code class="vis vis-public">public</code>
<code class="ret">AssetInterface</code>
<code class="sig"><span class="sf">setFilter</span>( <span class="st">bool</span> <span class="sv">$filter</span> )</code>
<span class="desc">Sets if the asset must be filtered or not</span>
</a>
<a class="api-item" href="#assetsinline-settype">
<code class="vis vis-public">public</code>
<code class="ret">AssetInterface</code>
<code class="sig"><span class="sf">setType</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Sets the inline&#039;s type</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$content</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$filter</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$type</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `__construct()` { #assetsinline-__construct }

```php
public function __construct(
    string $type,
    string $content,
    bool $filter = true,
    array $attributes = []
);
```

Phalcon\Assets\Inline constructor

#### `getAssetKey()` { #assetsinline-getassetkey }

```php
public function getAssetKey(): string;
```

Gets the asset's key.

#### `getContent()` { #assetsinline-getcontent }

```php
public function getContent(): string;
```

#### `getFilter()` { #assetsinline-getfilter }

```php
public function getFilter(): bool;
```

#### `getType()` { #assetsinline-gettype }

```php
public function getType(): string;
```

#### `setAttributes()` { #assetsinline-setattributes }

```php
public function setAttributes( array $attributes ): AssetInterface;
```

Sets extra HTML attributes

#### `setFilter()` { #assetsinline-setfilter }

```php
public function setFilter( bool $filter ): AssetInterface;
```

Sets if the asset must be filtered or not

#### `setType()` { #assetsinline-settype }

```php
public function setType( string $type ): AssetInterface;
```

Sets the inline's type


## Assets\Inline\Css

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Inline/Css.zep){ .src-btn }

Represents an inlined CSS

<div class="api-tree" markdown>

- [`Phalcon\Assets\Inline`](#assetsinline)
    - **`Phalcon\Assets\Inline\Css`**

</div>

__Uses__ `Phalcon\Assets\Inline`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsinlinecss-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Phalcon\Assets\Inline\Css constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsinlinecss-__construct }

```php
public function __construct(
    string $content,
    bool $filter = true,
    array $attributes = []
);
```

Phalcon\Assets\Inline\Css constructor


## Assets\Inline\Js

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Inline/Js.zep){ .src-btn }

Represents an inline JavaScript

<div class="api-tree" markdown>

- [`Phalcon\Assets\Inline`](#assetsinline)
    - **`Phalcon\Assets\Inline\Js`**

</div>

__Uses__ `Phalcon\Assets\Inline`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsinlinejs-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Phalcon\Assets\Inline\Js constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #assetsinlinejs-__construct }

```php
public function __construct(
    string $content,
    bool $filter = true,
    array $attributes = []
);
```

Phalcon\Assets\Inline\Js constructor


## Assets\Manager

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Manager.zep){ .src-btn }

Manages collections of CSS/JavaScript assets

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Assets\Manager`**

</div>

__Uses__ `Phalcon\Assets\Asset\Css` · `Phalcon\Assets\Asset\Js` · `Phalcon\Assets\Exceptions\AssetSourceTargetCollision` · `Phalcon\Assets\Exceptions\CollectionNotFound` · `Phalcon\Assets\Exceptions\InvalidAssetSourcePath` · `Phalcon\Assets\Exceptions\InvalidAssetTargetPath` · `Phalcon\Assets\Exceptions\InvalidFilter` · `Phalcon\Assets\Exceptions\InvalidTargetPath` · `Phalcon\Assets\Exceptions\TargetPathIsDirectory` · `Phalcon\Assets\Inline\Css` · `Phalcon\Assets\Inline\Js` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Html\Helper\Element` · `Phalcon\Html\Helper\Link` · `Phalcon\Html\Helper\Script` · `Phalcon\Html\TagFactory` · `Phalcon\Traits\Php\FileTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#assetsmanager-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">TagFactory</span> <span class="sv">$tagFactory</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Manager constructor.</span>
</a>
<a class="api-item" href="#assetsmanager-addasset">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addAsset</span>( <span class="st">Asset</span> <span class="sv">$asset</span> )</code>
<span class="desc">Adds a raw asset to the manager</span>
</a>
<a class="api-item" href="#assetsmanager-addassetbytype">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addAssetByType</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">Asset</span> <span class="sv">$asset</span></span>)</code>
<span class="desc">Adds a asset by its type</span>
</a>
<a class="api-item" href="#assetsmanager-addcss">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addCss</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$version</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$autoVersion</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Adds a CSS asset to the &#039;css&#039; collection</span>
</a>
<a class="api-item" href="#assetsmanager-addinlinecode">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addInlineCode</span>( <span class="st">Inline</span> <span class="sv">$code</span> )</code>
<span class="desc">Adds a raw inline code to the manager</span>
</a>
<a class="api-item" href="#assetsmanager-addinlinecodebytype">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addInlineCodeByType</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">Inline</span> <span class="sv">$code</span></span>)</code>
<span class="desc">Adds an inline code by its type</span>
</a>
<a class="api-item" href="#assetsmanager-addinlinecss">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addInlineCss</span>(<span class="prm"><span class="st">string</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Adds an inline CSS to the &#039;css&#039; collection</span>
</a>
<a class="api-item" href="#assetsmanager-addinlinejs">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addInlineJs</span>(<span class="prm"><span class="st">string</span> <span class="sv">$content</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Adds an inline JavaScript to the &#039;js&#039; collection</span>
</a>
<a class="api-item" href="#assetsmanager-addjs">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addJs</span>(<span class="prm"><span class="st">string</span> <span class="sv">$path</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filter</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$version</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$autoVersion</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Adds a JavaScript asset to the &#039;js&#039; collection</span>
</a>
<a class="api-item" href="#assetsmanager-collection">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">collection</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Creates/Returns a collection of assets</span>
</a>
<a class="api-item" href="#assetsmanager-collectionassetsbytype">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">collectionAssetsByType</span>(<span class="prm"><span class="st">array</span> <span class="sv">$assets</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span></span>)</code>
<span class="desc">Creates/Returns a collection of assets by type</span>
</a>
<a class="api-item" href="#assetsmanager-exists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">exists</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns true or false if collection exists.</span>
</a>
<a class="api-item" href="#assetsmanager-get">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a collection by its id.</span>
</a>
<a class="api-item" href="#assetsmanager-getcollections">
<code class="vis vis-public">public</code>
<code class="ret">Collection[]</code>
<code class="sig"><span class="sf">getCollections</span>()</code>
<span class="desc">Returns existing collections in the manager</span>
</a>
<a class="api-item" href="#assetsmanager-getcss">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getCss</span>()</code>
<span class="desc">Returns the CSS collection of assets</span>
</a>
<a class="api-item" href="#assetsmanager-getjs">
<code class="vis vis-public">public</code>
<code class="ret">Collection</code>
<code class="sig"><span class="sf">getJs</span>()</code>
<span class="desc">Returns the CSS collection of assets</span>
</a>
<a class="api-item" href="#assetsmanager-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
<span class="desc">Returns the manager options</span>
</a>
<a class="api-item" href="#assetsmanager-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns true or false if collection exists.</span>
</a>
<a class="api-item" href="#assetsmanager-output">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">output</span>(<span class="prm"><span class="st">Collection</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$type</span></span>)</code>
<span class="desc">Traverses a collection calling the callback to generate its HTML</span>
</a>
<a class="api-item" href="#assetsmanager-outputcss">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">outputCss</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Prints the HTML for CSS assets</span>
</a>
<a class="api-item" href="#assetsmanager-outputinline">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">outputInline</span>(<span class="prm"><span class="st">Collection</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$type</span></span>)</code>
<span class="desc">Traverses a collection and generate its HTML</span>
</a>
<a class="api-item" href="#assetsmanager-outputinlinecss">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">outputInlineCss</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Prints the HTML for inline CSS</span>
</a>
<a class="api-item" href="#assetsmanager-outputinlinejs">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">outputInlineJs</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Prints the HTML for inline JS</span>
</a>
<a class="api-item" href="#assetsmanager-outputjs">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">outputJs</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = null</span> )</code>
<span class="desc">Prints the HTML for JS assets</span>
</a>
<a class="api-item" href="#assetsmanager-set">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">Collection</span> <span class="sv">$collection</span></span>)</code>
<span class="desc">Sets a collection in the Assets Manager</span>
</a>
<a class="api-item" href="#assetsmanager-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Sets the manager options</span>
</a>
<a class="api-item" href="#assetsmanager-useimplicitoutput">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">useImplicitOutput</span>( <span class="st">bool</span> <span class="sv">$implicitOutput</span> )</code>
<span class="desc">Sets if the HTML generated must be directly printed or returned</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$collections</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$implicitOutput</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">TagFactory</code>
<code class="sig"><span class="sv">$tagFactory</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 27</div>

#### `__construct()` { #assetsmanager-__construct }

```php
public function __construct(
    TagFactory $tagFactory,
    array $options = []
);
```

Manager constructor.

#### `addAsset()` { #assetsmanager-addasset }

```php
public function addAsset( Asset $asset ): static;
```

Adds a raw asset to the manager

#### `addAssetByType()` { #assetsmanager-addassetbytype }

```php
public function addAssetByType(
    string $type,
    Asset $asset
): static;
```

Adds a asset by its type

#### `addCss()` { #assetsmanager-addcss }

```php
public function addCss(
    string $path,
    bool $local = true,
    bool $filter = true,
    array $attributes = [],
    string $version = null,
    bool $autoVersion = false
): static;
```

Adds a CSS asset to the 'css' collection

#### `addInlineCode()` { #assetsmanager-addinlinecode }

```php
public function addInlineCode( Inline $code ): static;
```

Adds a raw inline code to the manager

#### `addInlineCodeByType()` { #assetsmanager-addinlinecodebytype }

```php
public function addInlineCodeByType(
    string $type,
    Inline $code
): static;
```

Adds an inline code by its type

#### `addInlineCss()` { #assetsmanager-addinlinecss }

```php
public function addInlineCss(
    string $content,
    bool $filter = true,
    array $attributes = []
): static;
```

Adds an inline CSS to the 'css' collection

#### `addInlineJs()` { #assetsmanager-addinlinejs }

```php
public function addInlineJs(
    string $content,
    bool $filter = true,
    array $attributes = []
): static;
```

Adds an inline JavaScript to the 'js' collection

#### `addJs()` { #assetsmanager-addjs }

```php
public function addJs(
    string $path,
    bool $local = true,
    bool $filter = true,
    array $attributes = [],
    string $version = null,
    bool $autoVersion = false
): static;
```

Adds a JavaScript asset to the 'js' collection

```php
$assets->addJs("scripts/jquery.js");
$assets->addJs("http://jquery.my-cdn.com/jquery.js", false);
```

#### `collection()` { #assetsmanager-collection }

```php
public function collection( string $name ): Collection;
```

Creates/Returns a collection of assets

#### `collectionAssetsByType()` { #assetsmanager-collectionassetsbytype }

```php
public function collectionAssetsByType(
    array $assets,
    string $type
): array;
```

Creates/Returns a collection of assets by type

#### `exists()` { #assetsmanager-exists }

```php
public function exists( string $name ): bool;
```

Returns true or false if collection exists.

```php
if ($manager->exists("jsHeader")) {
    // \Phalcon\Assets\Collection
    $collection = $manager->get("jsHeader");
}
```

#### `get()` { #assetsmanager-get }

```php
public function get( string $name ): Collection;
```

Returns a collection by its id.

```php
$scripts = $assets->get("js");
```

#### `getCollections()` { #assetsmanager-getcollections }

```php
public function getCollections(): Collection[];
```

Returns existing collections in the manager

#### `getCss()` { #assetsmanager-getcss }

```php
public function getCss(): Collection;
```

Returns the CSS collection of assets

#### `getJs()` { #assetsmanager-getjs }

```php
public function getJs(): Collection;
```

Returns the CSS collection of assets

#### `getOptions()` { #assetsmanager-getoptions }

```php
public function getOptions(): array;
```

Returns the manager options

#### `has()` { #assetsmanager-has }

```php
public function has( string $name ): bool;
```

Returns true or false if collection exists.

```php
if ($manager->has("jsHeader")) {
    // \Phalcon\Assets\Collection
    $collection = $manager->get("jsHeader");
}
```

#### `output()` { #assetsmanager-output }

```php
public function output(
    Collection $collection,
    string $type
): string|null;
```

Traverses a collection calling the callback to generate its HTML

#### `outputCss()` { #assetsmanager-outputcss }

```php
public function outputCss( string $name = null ): string;
```

Prints the HTML for CSS assets

#### `outputInline()` { #assetsmanager-outputinline }

```php
public function outputInline(
    Collection $collection,
    mixed $type
): string;
```

Traverses a collection and generate its HTML

#### `outputInlineCss()` { #assetsmanager-outputinlinecss }

```php
public function outputInlineCss( string $name = null ): string;
```

Prints the HTML for inline CSS

#### `outputInlineJs()` { #assetsmanager-outputinlinejs }

```php
public function outputInlineJs( string $name = null ): string;
```

Prints the HTML for inline JS

#### `outputJs()` { #assetsmanager-outputjs }

```php
public function outputJs( string $name = null ): string;
```

Prints the HTML for JS assets

#### `set()` { #assetsmanager-set }

```php
public function set(
    string $name,
    Collection $collection
): static;
```

Sets a collection in the Assets Manager

```php
$assets->set("js", $collection);
```

#### `setOptions()` { #assetsmanager-setoptions }

```php
public function setOptions( array $options ): static;
```

Sets the manager options

#### `useImplicitOutput()` { #assetsmanager-useimplicitoutput }

```php
public function useImplicitOutput( bool $implicitOutput ): static;
```

Sets if the HTML generated must be directly printed or returned
