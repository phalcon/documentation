---
title: "Phalcon Assets"
version: "5.22"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Assets

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Assets\Asset

Class

Object representation of an asset

```php
$asset = new \Phalcon\Assets\Asset("js", "js/jquery.js");
```

- **`Phalcon\Assets\Asset`** - implements [`Phalcon\Assets\AssetInterface`](#assetsassetinterface)
  - [`Phalcon\Assets\Asset\Css`](#assetsassetcss)
  - [`Phalcon\Assets\Asset\Js`](#assetsassetjs)

`Phalcon\Assets\Exceptions\CannotReadAsset` · `Phalcon\Assets\Traits\AttributesTrait` · `Phalcon\Assets\Traits\SourceTargetTrait` · `Phalcon\Contracts\Assets\AssetsTypes` · `Phalcon\Traits\Php\FileTrait` · `Phalcon\Traits\Php\HashTrait`

### Method Summary

- `public __construct(string $type, string $path, bool $isLocal = true, bool $filter = true, array $attributes = [], string|null $version = null, bool $isAutoVersion = false)` — Asset constructor.

- `public getAssetKey(): string` — Gets the asset's key.

- `public getContent(string|null $basePath = null): string` — Returns the content of the asset as an string

- `public getFilter(): bool` — Gets if the asset must be filtered or not.

- `public getPath(): string` — Returns the path for this asset

- `public getRealSourcePath(string|null $basePath = null): string` — Returns the complete location where the asset is located

- `public getRealTargetPath(string|null $basePath = null): string` — Returns the complete location where the asset must be written

- `public getRealTargetUri(): string` — Returns the real target uri for the generated HTML

- `public getType(): string` — Gets the asset's type.

- `public getVersion(): string|null` — Gets the asset's version.

- `public isAutoVersion(): bool` — Checks if the asset is using auto version

- `public setAttributes(array $attributes): AssetInterface` — Sets extra HTML attributes

- `public setAutoVersion(bool $flag): AssetInterface`

- `public setFilter(bool $filter): AssetInterface` — Sets if the asset must be filtered or not

- `public setPath(string $path): AssetInterface` — Sets the asset's path

- `public setType(string $type): AssetInterface` — Sets the asset's type

- `public setVersion(string $version): AssetInterface` — Sets the asset's version

### Properties

- `protected bool $filter`

- `protected bool $isAutoVersion = false`

- `protected string $path`

- `protected string $type`

- `protected string $version`

### Methods

<h4 id="assetsasset-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $type,
    string $path,
    bool $isLocal = true,
    bool $filter = true,
    array $attributes = [],
    string|null $version = null,
    bool $isAutoVersion = false
);
```

Asset constructor.

<h4 id="assetsasset-getassetkey"><code>getAssetKey()</code></h4>

```php
public function getAssetKey(): string;
```

Gets the asset's key.

<h4 id="assetsasset-getcontent"><code>getContent()</code></h4>

```php
public function getContent( string|null $basePath = null ): string;
```

Returns the content of the asset as an string
Optionally a base path where the asset is located can be set

<h4 id="assetsasset-getfilter"><code>getFilter()</code></h4>

```php
public function getFilter(): bool;
```

Gets if the asset must be filtered or not.

<h4 id="assetsasset-getpath"><code>getPath()</code></h4>

```php
public function getPath(): string;
```

Returns the path for this asset

<h4 id="assetsasset-getrealsourcepath"><code>getRealSourcePath()</code></h4>

```php
public function getRealSourcePath( string|null $basePath = null ): string;
```

Returns the complete location where the asset is located

<h4 id="assetsasset-getrealtargetpath"><code>getRealTargetPath()</code></h4>

```php
public function getRealTargetPath( string|null $basePath = null ): string;
```

Returns the complete location where the asset must be written

<h4 id="assetsasset-getrealtargeturi"><code>getRealTargetUri()</code></h4>

```php
public function getRealTargetUri(): string;
```

Returns the real target uri for the generated HTML

<h4 id="assetsasset-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Gets the asset's type.

<h4 id="assetsasset-getversion"><code>getVersion()</code></h4>

```php
public function getVersion(): string|null;
```

Gets the asset's version.

<h4 id="assetsasset-isautoversion"><code>isAutoVersion()</code></h4>

```php
public function isAutoVersion(): bool;
```

Checks if the asset is using auto version

<h4 id="assetsasset-setattributes"><code>setAttributes()</code></h4>

```php
public function setAttributes( array $attributes ): AssetInterface;
```

Sets extra HTML attributes

<h4 id="assetsasset-setautoversion"><code>setAutoVersion()</code></h4>

```php
public function setAutoVersion( bool $flag ): AssetInterface;
```

<h4 id="assetsasset-setfilter"><code>setFilter()</code></h4>

```php
public function setFilter( bool $filter ): AssetInterface;
```

Sets if the asset must be filtered or not

<h4 id="assetsasset-setpath"><code>setPath()</code></h4>

```php
public function setPath( string $path ): AssetInterface;
```

Sets the asset's path

<h4 id="assetsasset-settype"><code>setType()</code></h4>

```php
public function setType( string $type ): AssetInterface;
```

Sets the asset's type

<h4 id="assetsasset-setversion"><code>setVersion()</code></h4>

```php
public function setVersion( string $version ): AssetInterface;
```

Sets the asset's version


## Assets\AssetInterface

Interface

Phalcon\Assets\AssetInterface

- [`Phalcon\Contracts\Assets\Asset`](/5.22/api/phalcon_contracts/#contractsassetsasset)
  - **`Phalcon\Assets\AssetInterface`**

`Phalcon\Contracts\Assets\Asset`


## Assets\Asset\Css

Class

Represents CSS assets

- [`Phalcon\Assets\Asset`](#assetsasset)
  - **`Phalcon\Assets\Asset\Css`**

`Phalcon\Assets\Asset`

### Method Summary

- `public __construct(string $path, bool $local = true, bool $filter = true, array $attributes = [], string|null $version = null, bool $autoVersion = false)` — Css constructor.

### Methods

<h4 id="assetsassetcss-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $path,
    bool $local = true,
    bool $filter = true,
    array $attributes = [],
    string|null $version = null,
    bool $autoVersion = false
);
```

Css constructor.


## Assets\Asset\Js

Class

Represents JavaScript assets

- [`Phalcon\Assets\Asset`](#assetsasset)
  - **`Phalcon\Assets\Asset\Js`**

`Phalcon\Assets\Asset`

### Method Summary

- `public __construct(string $path, bool $local = true, bool $filter = true, array $attributes = [], string|null $version = null, bool $autoVersion = false)` — Js constructor.

### Methods

<h4 id="assetsassetjs-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $path,
    bool $local = true,
    bool $filter = true,
    array $attributes = [],
    string|null $version = null,
    bool $autoVersion = false
);
```

Js constructor.


## Assets\Collection

Class

Collection of asset objects

- **`Phalcon\Assets\Collection`** - implements `\Countable`, `\IteratorAggregate`

`ArrayIterator` · `Countable` · `IteratorAggregate` · `Phalcon\Assets\Traits\AttributesTrait` · `Phalcon\Assets\Traits\SourceTargetTrait` · `Phalcon\Contracts\Assets\AssetsTypes` · `Phalcon\Traits\Php\FileTrait` · `Traversable`

### Method Summary

- `public add(AssetInterface $asset): static` — Adds an asset to the collection

- `public addCss(string $path, mixed $isLocal = null, bool $filter = true, array $attributes = [], string|null $version = null, bool $autoVersion = false): static` — Adds a CSS asset to the collection

- `public addFilter(FilterInterface $filter): static` — Adds a filter to the collection

- `public addInline(Inline $code): static` — Adds an inline code to the collection

- `public addInlineCss(string $content, bool $filter = true, array $attributes = []): static` — Adds an inline CSS to the collection

- `public addInlineJs(string $content, bool $filter = true, array $attributes = []): static` — Adds an inline JavaScript to the collection

- `public addJs(string $path, mixed $isLocal = null, bool $filter = true, array $attributes = [], string|null $version = null, bool $autoVersion = false): static` — Adds a JavaScript asset to the collection

- `public count(): int` — Return the count of the assets

- `public getAssets(): array` — Return the stored assets

- `public getCodes(): array` — Return the stored codes

- `public getFilters(): array` — Return the stored filters

- `public getIterator(): Traversable` — Returns the iterator of the class

- `public getJoin(): bool`

- `public getPrefix(): string` — Returns the prefix

- `public getRealTargetPath(string $basePath): string` — Returns the complete location where the joined/filtered collection must

- `public getTargetIsLocal(): bool` — Returns whether the target is local or not

- `public getVersion(): string` — Returns the version

- `public has(AssetInterface $asset): bool` — Checks this the asset is added to the collection.

- `public isAutoVersion(): bool` — Checks if collection is using auto version

- `public join(bool $flag): static` — Sets if all filtered assets in the collection must be joined in a single

- `public setAttributes(array $attributes): static` — Sets extra HTML attributes

- `public setAutoVersion(bool $flag): static`

- `public setFilters(array $filters): static` — Sets an array of filters in the collection

- `public setPrefix(string $prefix): static` — Sets a common prefix for all the assets

- `public setTargetIsLocal(bool $flag): static` — Sets if the target local or not

- `public setVersion(string $version): static` — Sets the version

- `protected addAsset(AssetInterface $asset): bool` — Adds an asset or inline-code to the collection

### Properties

- `protected assets_asset_map $assets = []`

- `protected bool $autoVersion = false` — Should version be determined from file modification time

- `protected assets_codes $codes = []`

- `protected assets_filters $filters = []`

- `protected bool $join = true`

- `protected string $prefix = ""`

- `protected bool $targetIsLocal = true`

- `protected string $version = ""`

### Methods

<h4 id="assetscollection-add"><code>add()</code></h4>

```php
public function add( AssetInterface $asset ): static;
```

Adds an asset to the collection

<h4 id="assetscollection-addcss"><code>addCss()</code></h4>

```php
public function addCss(
    string $path,
    mixed $isLocal = null,
    bool $filter = true,
    array $attributes = [],
    string|null $version = null,
    bool $autoVersion = false
): static;
```

Adds a CSS asset to the collection

<h4 id="assetscollection-addfilter"><code>addFilter()</code></h4>

```php
public function addFilter( FilterInterface $filter ): static;
```

Adds a filter to the collection

<h4 id="assetscollection-addinline"><code>addInline()</code></h4>

```php
public function addInline( Inline $code ): static;
```

Adds an inline code to the collection

<h4 id="assetscollection-addinlinecss"><code>addInlineCss()</code></h4>

```php
public function addInlineCss(
    string $content,
    bool $filter = true,
    array $attributes = []
): static;
```

Adds an inline CSS to the collection

<h4 id="assetscollection-addinlinejs"><code>addInlineJs()</code></h4>

```php
public function addInlineJs(
    string $content,
    bool $filter = true,
    array $attributes = []
): static;
```

Adds an inline JavaScript to the collection

<h4 id="assetscollection-addjs"><code>addJs()</code></h4>

```php
public function addJs(
    string $path,
    mixed $isLocal = null,
    bool $filter = true,
    array $attributes = [],
    string|null $version = null,
    bool $autoVersion = false
): static;
```

Adds a JavaScript asset to the collection

<h4 id="assetscollection-count"><code>count()</code></h4>

```php
public function count(): int;
```

Return the count of the assets

<h4 id="assetscollection-getassets"><code>getAssets()</code></h4>

```php
public function getAssets(): array;
```

Return the stored assets

<h4 id="assetscollection-getcodes"><code>getCodes()</code></h4>

```php
public function getCodes(): array;
```

Return the stored codes

<h4 id="assetscollection-getfilters"><code>getFilters()</code></h4>

```php
public function getFilters(): array;
```

Return the stored filters

<h4 id="assetscollection-getiterator"><code>getIterator()</code></h4>

```php
public function getIterator(): Traversable;
```

Returns the iterator of the class

<h4 id="assetscollection-getjoin"><code>getJoin()</code></h4>

```php
public function getJoin(): bool;
```

<h4 id="assetscollection-getprefix"><code>getPrefix()</code></h4>

```php
public function getPrefix(): string;
```

Returns the prefix

<h4 id="assetscollection-getrealtargetpath"><code>getRealTargetPath()</code></h4>

```php
public function getRealTargetPath( string $basePath ): string;
```

Returns the complete location where the joined/filtered collection must
be written

<h4 id="assetscollection-gettargetislocal"><code>getTargetIsLocal()</code></h4>

```php
public function getTargetIsLocal(): bool;
```

Returns whether the target is local or not

<h4 id="assetscollection-getversion"><code>getVersion()</code></h4>

```php
public function getVersion(): string;
```

Returns the version

<h4 id="assetscollection-has"><code>has()</code></h4>

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

<h4 id="assetscollection-isautoversion"><code>isAutoVersion()</code></h4>

```php
public function isAutoVersion(): bool;
```

Checks if collection is using auto version

<h4 id="assetscollection-join"><code>join()</code></h4>

```php
public function join( bool $flag ): static;
```

Sets if all filtered assets in the collection must be joined in a single
result file

<h4 id="assetscollection-setattributes"><code>setAttributes()</code></h4>

```php
public function setAttributes( array $attributes ): static;
```

Sets extra HTML attributes

<h4 id="assetscollection-setautoversion"><code>setAutoVersion()</code></h4>

```php
public function setAutoVersion( bool $flag ): static;
```

<h4 id="assetscollection-setfilters"><code>setFilters()</code></h4>

```php
public function setFilters( array $filters ): static;
```

Sets an array of filters in the collection

<h4 id="assetscollection-setprefix"><code>setPrefix()</code></h4>

```php
public function setPrefix( string $prefix ): static;
```

Sets a common prefix for all the assets

<h4 id="assetscollection-settargetislocal"><code>setTargetIsLocal()</code></h4>

```php
public function setTargetIsLocal( bool $flag ): static;
```

Sets if the target local or not

<h4 id="assetscollection-setversion"><code>setVersion()</code></h4>

```php
public function setVersion( string $version ): static;
```

Sets the version

<h4 id="assetscollection-addasset"><code>addAsset()</code></h4>

```php
final protected function addAsset( AssetInterface $asset ): bool;
```

Adds an asset or inline-code to the collection


## Assets\Exception

Class

Exceptions thrown in Phalcon\Assets will use this class

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


## Assets\Exceptions\AssetSourceTargetCollision

Class

- `\Exception`
  - [`Phalcon\Assets\Exception`](#assetsexception)
    - **`Phalcon\Assets\Exceptions\AssetSourceTargetCollision`**

`Phalcon\Assets\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="assetsexceptionsassetsourcetargetcollision-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Assets\Exceptions\CannotReadAsset

Class

- `\Exception`
  - [`Phalcon\Assets\Exception`](#assetsexception)
    - **`Phalcon\Assets\Exceptions\CannotReadAsset`**

`Phalcon\Assets\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="assetsexceptionscannotreadasset-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Assets\Exceptions\CollectionNotFound

Class

- `\Exception`
  - [`Phalcon\Assets\Exception`](#assetsexception)
    - **`Phalcon\Assets\Exceptions\CollectionNotFound`**

`Phalcon\Assets\Exception`

### Method Summary

- `public __construct(string $name = "")`

### Methods

<h4 id="assetsexceptionscollectionnotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name = "" );
```


## Assets\Exceptions\InvalidAssetSourcePath

Class

- `\Exception`
  - [`Phalcon\Assets\Exception`](#assetsexception)
    - **`Phalcon\Assets\Exceptions\InvalidAssetSourcePath`**

`Phalcon\Assets\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="assetsexceptionsinvalidassetsourcepath-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Assets\Exceptions\InvalidAssetTargetPath

Class

- `\Exception`
  - [`Phalcon\Assets\Exception`](#assetsexception)
    - **`Phalcon\Assets\Exceptions\InvalidAssetTargetPath`**

`Phalcon\Assets\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="assetsexceptionsinvalidassettargetpath-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Assets\Exceptions\InvalidFilter

Class

- `\Exception`
  - [`Phalcon\Assets\Exception`](#assetsexception)
    - **`Phalcon\Assets\Exceptions\InvalidFilter`**

`Phalcon\Assets\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="assetsexceptionsinvalidfilter-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Assets\Exceptions\InvalidTargetPath

Class

- `\Exception`
  - [`Phalcon\Assets\Exception`](#assetsexception)
    - **`Phalcon\Assets\Exceptions\InvalidTargetPath`**

`Phalcon\Assets\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="assetsexceptionsinvalidtargetpath-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Assets\Exceptions\TargetPathIsDirectory

Class

- `\Exception`
  - [`Phalcon\Assets\Exception`](#assetsexception)
    - **`Phalcon\Assets\Exceptions\TargetPathIsDirectory`**

`Phalcon\Assets\Exception`

### Method Summary

- `public __construct(string $path)`

### Methods

<h4 id="assetsexceptionstargetpathisdirectory-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $path );
```


## Assets\FilterInterface

Interface

Phalcon\Assets\FilterInterface

- [`Phalcon\Contracts\Assets\Filter`](/5.22/api/phalcon_contracts/#contractsassetsfilter)
  - **`Phalcon\Assets\FilterInterface`**

`Phalcon\Contracts\Assets\Filter`


## Assets\Filters\Cssmin

Class

Filter intended to minify CSS content (remove comments, newlines, and line
feeds, and drop the last semicolon of the last property).

> NOTE: This functionality is not currently available; `filter()` returns
> the content unchanged.

- **`Phalcon\Assets\Filters\Cssmin`** - implements [`Phalcon\Assets\FilterInterface`](#assetsfilterinterface)

`Phalcon\Assets\FilterInterface`

### Method Summary

- `public filter(string $content): string` — Filters the content using CSSMIN

### Methods

<h4 id="assetsfilterscssmin-filter"><code>filter()</code></h4>

```php
public function filter( string $content ): string;
```

Filters the content using CSSMIN


## Assets\Filters\Jsmin

Class

Filter intended to minify JavaScript content (remove comments and the
characters that are insignificant to JavaScript - tabs, carriage returns,
and most spaces and linefeeds).

> NOTE: This functionality is not currently available; `filter()` returns
> the content unchanged.

- **`Phalcon\Assets\Filters\Jsmin`** - implements [`Phalcon\Assets\FilterInterface`](#assetsfilterinterface)

`Phalcon\Assets\FilterInterface`

### Method Summary

- `public filter(string $content): string` — Filters the content using JSMIN

### Methods

<h4 id="assetsfiltersjsmin-filter"><code>filter()</code></h4>

```php
public function filter( string $content ): string;
```

Filters the content using JSMIN


## Assets\Filters\None

Class

Returns the content without make any modification to the original source

- **`Phalcon\Assets\Filters\None`** - implements [`Phalcon\Assets\FilterInterface`](#assetsfilterinterface)

`Phalcon\Assets\FilterInterface`

### Method Summary

- `public filter(string $content): string` — Returns the content as is

### Methods

<h4 id="assetsfiltersnone-filter"><code>filter()</code></h4>

```php
public function filter( string $content ): string;
```

Returns the content as is


## Assets\Inline

Class

Represents an inline asset

```php
$inline = new \Phalcon\Assets\Inline("js", "alert('hello world');");
```

- **`Phalcon\Assets\Inline`** - implements [`Phalcon\Assets\AssetInterface`](#assetsassetinterface)
  - [`Phalcon\Assets\Inline\Css`](#assetsinlinecss)
  - [`Phalcon\Assets\Inline\Js`](#assetsinlinejs)

`Phalcon\Assets\Traits\AttributesTrait` · `Phalcon\Contracts\Assets\AssetsTypes` · `Phalcon\Traits\Php\HashTrait`

### Method Summary

- `public __construct(string $type, string $content, bool $filter = true, array $attributes = [])` — Inline constructor.

- `public getAssetKey(): string` — Gets the asset's key.

- `public getContent(): string` — Gets if the asset content

- `public getFilter(): bool` — Gets if the asset must be filtered or not.

- `public getType(): string` — Gets the asset's type.

- `public setAttributes(array $attributes): AssetInterface` — Sets extra HTML attributes

- `public setFilter(bool $filter): AssetInterface` — Sets if the asset must be filtered or not

- `public setType(string $type): AssetInterface` — Sets the inline's type

### Properties

- `protected string $content`

- `protected bool $filter`

- `protected string $type`

### Methods

<h4 id="assetsinline-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $type,
    string $content,
    bool $filter = true,
    array $attributes = []
);
```

Inline constructor.

<h4 id="assetsinline-getassetkey"><code>getAssetKey()</code></h4>

```php
public function getAssetKey(): string;
```

Gets the asset's key.

<h4 id="assetsinline-getcontent"><code>getContent()</code></h4>

```php
public function getContent(): string;
```

Gets if the asset content

<h4 id="assetsinline-getfilter"><code>getFilter()</code></h4>

```php
public function getFilter(): bool;
```

Gets if the asset must be filtered or not.

<h4 id="assetsinline-gettype"><code>getType()</code></h4>

```php
public function getType(): string;
```

Gets the asset's type.

<h4 id="assetsinline-setattributes"><code>setAttributes()</code></h4>

```php
public function setAttributes( array $attributes ): AssetInterface;
```

Sets extra HTML attributes

<h4 id="assetsinline-setfilter"><code>setFilter()</code></h4>

```php
public function setFilter( bool $filter ): AssetInterface;
```

Sets if the asset must be filtered or not

<h4 id="assetsinline-settype"><code>setType()</code></h4>

```php
public function setType( string $type ): AssetInterface;
```

Sets the inline's type


## Assets\Inline\Css

Class

Represents an inlined CSS

- [`Phalcon\Assets\Inline`](#assetsinline)
  - **`Phalcon\Assets\Inline\Css`**

`Phalcon\Assets\Inline` · `Phalcon\Contracts\Assets\AssetsTypes`

### Method Summary

- `public __construct(string $content, bool $filter = true, array $attributes = [])` — Css constructor.

### Methods

<h4 id="assetsinlinecss-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $content,
    bool $filter = true,
    array $attributes = []
);
```

Css constructor.


## Assets\Inline\Js

Class

Represents an inline JavaScript

- [`Phalcon\Assets\Inline`](#assetsinline)
  - **`Phalcon\Assets\Inline\Js`**

`Phalcon\Assets\Inline` · `Phalcon\Contracts\Assets\AssetsTypes`

### Method Summary

- `public __construct(string $content, bool $filter = true, array $attributes = [])` — Js constructor.

### Methods

<h4 id="assetsinlinejs-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $content,
    bool $filter = true,
    array $attributes = []
);
```

Js constructor.


## Assets\Manager

Class

Manages collections of CSS/JavaScript assets

- `\stdClass`
  - [`Phalcon\Di\AbstractInjectionAware`](/5.22/api/phalcon_di/#diabstractinjectionaware)
    - **`Phalcon\Assets\Manager`**

`Phalcon\Assets\Asset\Css` · `Phalcon\Assets\Asset\Js` · `Phalcon\Assets\Exceptions\AssetSourceTargetCollision` · `Phalcon\Assets\Exceptions\CollectionNotFound` · `Phalcon\Assets\Exceptions\InvalidAssetSourcePath` · `Phalcon\Assets\Exceptions\InvalidAssetTargetPath` · `Phalcon\Assets\Exceptions\InvalidFilter` · `Phalcon\Assets\Exceptions\InvalidTargetPath` · `Phalcon\Assets\Exceptions\TargetPathIsDirectory` · `Phalcon\Assets\Inline\Css` · `Phalcon\Assets\Inline\Js` · `Phalcon\Contracts\Assets\AssetsTypes` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Html\Helper\Link` · `Phalcon\Html\Helper\Script` · `Phalcon\Html\TagFactory` · `Phalcon\Mvc\Url` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

- `public __construct(TagFactory $tagFactory, array $options = [])` — Manager constructor.

- `public addAsset(Asset $asset): static` — Adds a raw asset to the manager

- `public addAssetByType(string $type, Asset $asset): static` — Adds an asset by its type

- `public addCss(string $path, bool $local = true, bool $filter = true, array $attributes = [], string|null $version = null, bool $autoVersion = false): static` — Adds a CSS asset to the 'css' collection

- `public addInlineCode(Inline $code): static` — Adds a raw inline code to the manager

- `public addInlineCodeByType(string $type, Inline $code): static` — Adds an inline code by its type

- `public addInlineCss(string $content, bool $filter = true, array $attributes = []): static` — Adds an inline CSS to the 'css' collection

- `public addInlineJs(string $content, bool $filter = true, array $attributes = []): static` — Adds an inline JavaScript to the 'js' collection

- `public addJs(string $path, bool $local = true, bool $filter = true, array $attributes = [], string|null $version = null, bool $autoVersion = false): static` — Adds a JavaScript asset to the 'js' collection

- `public collection(string $name): Collection` — Creates/Returns a collection of assets

- `public collectionAssetsByType(array $assets, string $type): array` — Creates/Returns a collection of assets by type

- `public exists(string $name): bool` — Returns true or false if collection exists.

- `public get(string $name): Collection` — Returns a collection by its id.

- `public getCollections(): Collection[]` — Returns existing collections in the manager

- `public getCss(): Collection` — Returns the CSS collection of assets

- `public getJs(): Collection` — Returns the CSS collection of assets

- `public getOptions(): array` — Returns the manager options

- `public has(string $name): bool` — Returns true or false if collection exists.

- `public output(Collection $collection, string $type): string|null` — Traverses a collection calling the callback to generate its HTML

- `public outputCss(string|null $name = null): string` — Prints the HTML for CSS assets

- `public outputInline(Collection $collection, mixed $type): string` — Traverses a collection and generate its HTML

- `public outputInlineCss(string|null $name = null): string` — Prints the HTML for inline CSS

- `public outputInlineJs(string|null $name = null): string` — Prints the HTML for inline JS

- `public outputJs(string|null $name = null): string` — Prints the HTML for JS assets

- `public set(string $name, Collection $collection): static` — Sets a collection in the Assets Manager

- `public setOptions(array $options): static` — Sets the manager options

- `public useImplicitOutput(bool $implicitOutput): static` — Sets if the HTML generated must be directly printed or returned

### Properties

- `protected assets_collections $collections = []`

- `protected bool $implicitOutput = true`

- `protected array $options = []`

- `protected TagFactory $tagFactory`

### Methods

<h4 id="assetsmanager-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    TagFactory $tagFactory,
    array $options = []
);
```

Manager constructor.

<h4 id="assetsmanager-addasset"><code>addAsset()</code></h4>

```php
public function addAsset( Asset $asset ): static;
```

Adds a raw asset to the manager

<h4 id="assetsmanager-addassetbytype"><code>addAssetByType()</code></h4>

```php
public function addAssetByType(
    string $type,
    Asset $asset
): static;
```

Adds an asset by its type

<h4 id="assetsmanager-addcss"><code>addCss()</code></h4>

```php
public function addCss(
    string $path,
    bool $local = true,
    bool $filter = true,
    array $attributes = [],
    string|null $version = null,
    bool $autoVersion = false
): static;
```

Adds a CSS asset to the 'css' collection

<h4 id="assetsmanager-addinlinecode"><code>addInlineCode()</code></h4>

```php
public function addInlineCode( Inline $code ): static;
```

Adds a raw inline code to the manager

<h4 id="assetsmanager-addinlinecodebytype"><code>addInlineCodeByType()</code></h4>

```php
public function addInlineCodeByType(
    string $type,
    Inline $code
): static;
```

Adds an inline code by its type

<h4 id="assetsmanager-addinlinecss"><code>addInlineCss()</code></h4>

```php
public function addInlineCss(
    string $content,
    bool $filter = true,
    array $attributes = []
): static;
```

Adds an inline CSS to the 'css' collection

<h4 id="assetsmanager-addinlinejs"><code>addInlineJs()</code></h4>

```php
public function addInlineJs(
    string $content,
    bool $filter = true,
    array $attributes = []
): static;
```

Adds an inline JavaScript to the 'js' collection

<h4 id="assetsmanager-addjs"><code>addJs()</code></h4>

```php
public function addJs(
    string $path,
    bool $local = true,
    bool $filter = true,
    array $attributes = [],
    string|null $version = null,
    bool $autoVersion = false
): static;
```

Adds a JavaScript asset to the 'js' collection

```php
$assets->addJs("scripts/jquery.js");
$assets->addJs("https://jquery.my-cdn.com/jquery.js", false);
```

<h4 id="assetsmanager-collection"><code>collection()</code></h4>

```php
public function collection( string $name ): Collection;
```

Creates/Returns a collection of assets

<h4 id="assetsmanager-collectionassetsbytype"><code>collectionAssetsByType()</code></h4>

```php
public function collectionAssetsByType(
    array $assets,
    string $type
): array;
```

Creates/Returns a collection of assets by type

The `instanceof` guard below is the validation, so the parameter stays a
plain array here.

<h4 id="assetsmanager-exists"><code>exists()</code></h4>

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

<h4 id="assetsmanager-get"><code>get()</code></h4>

```php
public function get( string $name ): Collection;
```

Returns a collection by its id.

```php
$scripts = $assets->get("js");
```

<h4 id="assetsmanager-getcollections"><code>getCollections()</code></h4>

```php
public function getCollections(): Collection[];
```

Returns existing collections in the manager

<h4 id="assetsmanager-getcss"><code>getCss()</code></h4>

```php
public function getCss(): Collection;
```

Returns the CSS collection of assets

<h4 id="assetsmanager-getjs"><code>getJs()</code></h4>

```php
public function getJs(): Collection;
```

Returns the CSS collection of assets

<h4 id="assetsmanager-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Returns the manager options

<h4 id="assetsmanager-has"><code>has()</code></h4>

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

<h4 id="assetsmanager-output"><code>output()</code></h4>

```php
public function output(
    Collection $collection,
    string $type
): string|null;
```

Traverses a collection calling the callback to generate its HTML

<h4 id="assetsmanager-outputcss"><code>outputCss()</code></h4>

```php
public function outputCss( string|null $name = null ): string;
```

Prints the HTML for CSS assets

<h4 id="assetsmanager-outputinline"><code>outputInline()</code></h4>

```php
public function outputInline(
    Collection $collection,
    mixed $type
): string;
```

Traverses a collection and generate its HTML

<h4 id="assetsmanager-outputinlinecss"><code>outputInlineCss()</code></h4>

```php
public function outputInlineCss( string|null $name = null ): string;
```

Prints the HTML for inline CSS

<h4 id="assetsmanager-outputinlinejs"><code>outputInlineJs()</code></h4>

```php
public function outputInlineJs( string|null $name = null ): string;
```

Prints the HTML for inline JS

<h4 id="assetsmanager-outputjs"><code>outputJs()</code></h4>

```php
public function outputJs( string|null $name = null ): string;
```

Prints the HTML for JS assets

<h4 id="assetsmanager-set"><code>set()</code></h4>

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

<h4 id="assetsmanager-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): static;
```

Sets the manager options

<h4 id="assetsmanager-useimplicitoutput"><code>useImplicitOutput()</code></h4>

```php
public function useImplicitOutput( bool $implicitOutput ): static;
```

Sets if the HTML generated must be directly printed or returned


## Assets\Traits\AttributesTrait

Trait

Shared HTML-attributes state for asset objects (`Asset`, `Inline`,
`Collection`).

@todo set attributes to have a default array when introduced in zephir
@todo v7 - share setAttributes here too (blocked: Collection is not an AssetInterface, so the return type diverges)

- **`Phalcon\Assets\Traits\AttributesTrait`**

`Phalcon\Contracts\Assets\AssetsTypes`

[`Phalcon\Assets\Asset`](#assetsasset) · [`Phalcon\Assets\Collection`](#assetscollection) · [`Phalcon\Assets\Inline`](#assetsinline)

### Method Summary

- `public getAttributes(): array` — Gets extra HTML attributes.

### Properties

- `protected assets_attributes|null $attributes = null`

### Methods

<h4 id="assetstraitsattributestrait-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Gets extra HTML attributes.


## Assets\Traits\SourceTargetTrait

Trait

Shared source/target path, uri and locality state for asset objects
(`Asset`, `Collection`).

- **`Phalcon\Assets\Traits\SourceTargetTrait`**

[`Phalcon\Assets\Asset`](#assetsasset) · [`Phalcon\Assets\Collection`](#assetscollection)

### Method Summary

- `public getSourcePath(): string`

- `public getTargetPath(): string`

- `public getTargetUri(): string`

- `public isLocal(): bool` — Checks if the asset is local or not

- `public setIsLocal(bool $flag): static` — Sets if the asset is local or external

- `public setSourcePath(string $sourcePath): static` — Sets the asset's source path

- `public setTargetPath(string $targetPath): static` — Sets the asset's target path

- `public setTargetUri(string $targetUri): static` — Sets a target uri for the generated HTML

### Properties

- `protected bool $isLocal = true`

- `protected string $sourcePath = ""`

- `protected string $targetPath = ""`

- `protected string $targetUri = ""`

### Methods

<h4 id="assetstraitssourcetargettrait-getsourcepath"><code>getSourcePath()</code></h4>

```php
public function getSourcePath(): string;
```

<h4 id="assetstraitssourcetargettrait-gettargetpath"><code>getTargetPath()</code></h4>

```php
public function getTargetPath(): string;
```

<h4 id="assetstraitssourcetargettrait-gettargeturi"><code>getTargetUri()</code></h4>

```php
public function getTargetUri(): string;
```

<h4 id="assetstraitssourcetargettrait-islocal"><code>isLocal()</code></h4>

```php
public function isLocal(): bool;
```

Checks if the asset is local or not

<h4 id="assetstraitssourcetargettrait-setislocal"><code>setIsLocal()</code></h4>

```php
public function setIsLocal( bool $flag ): static;
```

Sets if the asset is local or external

<h4 id="assetstraitssourcetargettrait-setsourcepath"><code>setSourcePath()</code></h4>

```php
public function setSourcePath( string $sourcePath ): static;
```

Sets the asset's source path

<h4 id="assetstraitssourcetargettrait-settargetpath"><code>setTargetPath()</code></h4>

```php
public function setTargetPath( string $targetPath ): static;
```

Sets the asset's target path

<h4 id="assetstraitssourcetargettrait-settargeturi"><code>setTargetUri()</code></h4>

```php
public function setTargetUri( string $targetUri ): static;
```

Sets a target uri for the generated HTML

Source: https://docs.phalcon.io/5.22/api/phalcon_assets/index.mdx
