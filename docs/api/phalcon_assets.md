---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Assets\Asset 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Asset.zep)


-   __Namespace__

    - `Phalcon\Assets`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    
    - `AssetInterface`

Represents an asset

```php
$asset = new \Phalcon\Assets\Asset("js", "js/jquery.js");
```


### Properties
```php
/**
 * @var array | null
 */
protected $attributes;

/**
 * @var bool
 */
protected $autoVersion = false;

/**
 * @var bool
 */
protected $filter;

/**
 * @var bool
 */
protected $local;

/**
 * @var string
 */
protected $path;

/**
 * @var string
 */
protected $sourcePath;

/**
 * @var string
 */
protected $targetPath;

/**
 * @var string
 */
protected $targetUri;

/**
 * @var string
 */
protected $type;

/**
 * Version of resource
 *
 * @var string
 */
protected $version;

```

## Methods

```php
public function __construct( string $type, string $path, bool $local = bool, bool $filter = bool, array $attributes = [], string $version = null, bool $autoVersion = bool );
```
Asset constructor.


```php
public function getAssetKey(): string;
```
Gets the asset's key.


```php
public function getAttributes(): array | null
```
Gets extra HTML attributes.


```php
public function getContent( string $basePath = null ): string;
```
Returns the content of the asset as an string
Optionally a base path where the asset is located can be set


```php
public function getFilter(): bool;
```



```php
public function getLocal(): bool
```
Checks if the asset is local or not


```php
public function getPath(): string;
```



```php
public function getRealSourcePath( string $basePath = null ): string;
```
Returns the complete location where the asset is located


```php
public function getRealTargetPath( string $basePath = null ): string;
```
Returns the complete location where the asset must be written


```php
public function getRealTargetUri(): string;
```
Returns the real target uri for the generated HTML


```php
public function getSourcePath(): string;
```



```php
public function getTargetPath(): string;
```



```php
public function getTargetUri(): string;
```



```php
public function getType(): string;
```



```php
public function getVersion(): string;
```
Version of resource


```php
public function isAutoVersion(): bool;
```
Checks if the asset is using auto version


```php
public function setAttributes( array $attributes ): AssetInterface;
```
Sets extra HTML attributes


```php
public function setAutoVersion( bool $autoVersion )l
```



```php
public function setFilter( bool $filter ): AssetInterface;
```
Sets if the asset must be filtered or not


```php
public function setLocal( bool $local ): AssetInterface;
```
Sets if the asset is local or external


```php
public function setPath( string $path ): AssetInterface;
```
Sets the asset's path


```php
public function setSourcePath( string $sourcePath ): AssetInterface;
```
Sets the asset's source path


```php
public function setTargetPath( string $targetPath ): AssetInterface;
```
Sets the asset's target path


```php
public function setTargetUri( string $targetUri ): AssetInterface;
```
Sets a target uri for the generated HTML


```php
public function setType( string $type ): AssetInterface;
```
Sets the asset's type


```php
public function setVersion( string $version );
```
Sets the asset's version









## Assets\Asset\Css 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Asset/Css.zep)


-   __Namespace__

    - `Phalcon\Assets\Asset`

-   __Uses__
    
    - `Phalcon\Assets\Asset`

-   __Extends__
    
    `AssetBase`

-   __Implements__
    

Represents CSS assets


### Methods

```php
public function __construct( string $path, bool $local = bool, bool $filter = bool, array $attributes = [], string $version = null, bool $autoVersion = bool );
```
Phalcon\Assets\Asset\Css constructor




## Assets\Asset\Js 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Asset/Js.zep)


-   __Namespace__

    - `Phalcon\Assets\Asset`

-   __Uses__
    
    - `Phalcon\Assets\Asset`

-   __Extends__
    
    `AssetBase`

-   __Implements__
    

Represents JavaScript assets


### Methods

```php
public function __construct( string $path, bool $local = bool, bool $filter = bool, array $attributes = [], string $version = null, bool $autoVersion = bool );
```
Phalcon\Assets\Asset\Js constructor




## Assets\AssetInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/AssetInterface.zep)


-   __Namespace__

    - `Phalcon\Assets`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for custom Phalcon\Assets resources


### Methods

```php
public function getAssetKey(): string;
```
Gets the asset's key.


```php
public function getAttributes(): array | null;
```
Gets extra HTML attributes.


```php
public function getFilter(): bool;
```
Gets if the asset must be filtered or not.


```php
public function getType(): string;
```
Gets the asset's type.


```php
public function setAttributes( array $attributes ): AssetInterface;
```
Sets extra HTML attributes.


```php
public function setFilter( bool $filter ): AssetInterface;
```
Sets if the asset must be filtered or not.


```php
public function setType( string $type ): AssetInterface;
```
Sets the asset's type.




## Assets\Collection 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Collection.zep)


-   __Namespace__

    - `Phalcon\Assets`

-   __Uses__
    
    - `ArrayIterator`
    - `Countable`
    - `IteratorAggregate`

-   __Extends__
    

-   __Implements__
    
    - `Countable`
    - `IteratorAggregate`

Collection of asset objects


### Properties
```php
/**
 * @var array
 */
protected $assets;

/**
 * @var array
 */
protected $attributes;

/**
 * Should version be determined from file modification time
 *
 * @var bool
 */
protected $autoVersion = false;

/**
 * @var array
 */
protected $codes;

/**
 * @var array
 */
protected $filters;

/**
 * @var array
 */
protected $includedAssets;

/**
 * @var bool
 */
protected $join = true;

/**
 * @var bool
 */
protected $local = true;

/**
 * @var string
 */
protected $prefix = '';

/**
 * @var int
 */
protected $position = 0;

/**
 * @var string
 */
protected $sourcePath = '';

/**
 * @var bool
 */
protected $targetLocal = true;

/**
 * @var string
 */
protected $targetPath = '';

/**
 * @var string
 */
protected $targetUri = '';

/**
 * @var string
 */
protected $version = '';

```

## Methods

```php
public function add( AssetInterface $asset ): Collection;
```
Adds an asset to the collection


```php
public function addCss( string $path, mixed $local = null, bool $filter = bool, mixed $attributes = null, string $version = null, bool $autoVersion = bool ): Collection;
```
Adds a CSS asset to the collection


```php
public function addFilter( FilterInterface $filter ): Collection;
```
Adds a filter to the collection


```php
public function addInline( Inline $code ): Collection;
```
Adds an inline code to the collection


```php
public function addInlineCss( string $content, bool $filter = bool, mixed $attributes = null ): Collection;
```
Adds an inline CSS to the collection


```php
public function addInlineJs( string $content, bool $filter = bool, mixed $attributes = null ): Collection;
```
Adds an inline JavaScript to the collection


```php
public function addJs( string $path, mixed $local = null, bool $filter = bool, mixed $attributes = null, string $version = null, bool $autoVersion = bool ): Collection;
```
Adds a JavaScript asset to the collection


```php
public function count(): int;
```
Returns the number of elements in the form


```php
public function current(): Asset;
```
Returns the current asset in the iterator


```php
public function getAssets(): array;
```



```php
public function getAttributes(): array;
```



```php
public function getCodes(): array;
```



```php
public function getFilters(): array;
```



```php
public function getJoin(): bool;
```



```php
public function getLocal(): bool;
```



```php
public function getPosition(): int;
```



```php
public function getPrefix(): string;
```



```php
public function getRealTargetPath( string $basePath ): string;
```
Returns the complete location where the joined/filtered collection must
be written


```php
public function getSourcePath(): string;
```



```php
public function getTargetLocal(): bool;
```



```php
public function getTargetPath(): string;
```



```php
public function getTargetUri(): string;
```



```php
public function getVersion(): string;
```



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


```php
public function isAutoVersion(): bool;
```
Checks if collection is using auto version


```php
public function join( bool $join ): Collection;
```
Sets if all filtered assets in the collection must be joined in a single
result file


```php
public function key(): int;
```
Returns the current position/key in the iterator


```php
public function next(): void;
```
Moves the internal iteration pointer to the next position


```php
public function rewind(): void;
```
Rewinds the internal iterator


```php
public function setAttributes( array $attributes ): Collection;
```
Sets extra HTML attributes


```php
public function setAutoVersion( bool $autoVersion )
```



```php
public function setFilters( array $filters ): Collection;
```
Sets an array of filters in the collection


```php
public function setLocal( bool $local ): Collection;
```
Sets if the collection uses local assets by default


```php
public function setPrefix( string $prefix ): Collection;
```
Sets a common prefix for all the assets


```php
public function setSourcePath( string $sourcePath ): Collection;
```
Sets a base source path for all the assets in this collection


```php
public function setTargetLocal( bool $targetLocal ): Collection;
```
Sets if the target local or not


```php
public function setTargetPath( string $targetPath ): Collection;
```
Sets the target path of the file for the filtered/join output


```php
public function setTargetUri( string $targetUri ): Collection;
```
Sets a target uri for the generated HTML


```php
public function setVersion( string $version )
```
Sets the version


```php
public function valid(): bool;
```
Check if the current element in the iterator is valid


```php
final protected function addAsset( AssetInterface $asset ): bool;
```
Adds an asset or inline-code to the collection




## Assets\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Exception.zep)


-   __Namespace__

    - `Phalcon\Assets`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Assets will use this class



## Assets\FilterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/FilterInterface.zep)


-   __Namespace__

    - `Phalcon\Assets`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for custom Phalcon\Assets filters


### Methods

```php
public function filter( string $content ): string;
```
Filters the content returning a string with the filtered content




## Assets\Filters\Cssmin 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Filters/CssMin.zep)


-   __Namespace__

    - `Phalcon\Assets\Filters`

-   __Uses__
    
    - `Phalcon\Assets\FilterInterface`

-   __Extends__
    

-   __Implements__
    
    - `FilterInterface`

Minify the CSS - removes comments removes newlines and line feeds keeping
removes last semicolon from last property


### Methods

```php
public function filter( string $content ): string;
```
Filters the content using CSSMIN

!!! warning "NOTE"
    
    This functionality is not currently available




## Assets\Filters\Jsmin 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Filters/JsMin.zep)


-   __Namespace__

    - `Phalcon\Assets\Filters`

-   __Uses__
    
    - `Phalcon\Assets\FilterInterface`

-   __Extends__
    

-   __Implements__
    
    - `FilterInterface`

Deletes the characters which are insignificant to JavaScript. Comments will
be removed. Tabs will be replaced with spaces. Carriage returns will be
replaced with linefeeds. Most spaces and linefeeds will be removed.


### Methods

```php
public function filter( string $content ): string;
```
Filters the content using JSMIN

!!! warning "NOTE"
    
    This functionality is not currently available
NOTE: This functionality is not currently available




## Assets\Filters\None 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Filters/None.zep)


-   __Namespace__

    - `Phalcon\Assets\Filters`

-   __Uses__
    
    - `Phalcon\Assets\FilterInterface`

-   __Extends__
    

-   __Implements__
    
    - `FilterInterface`

Returns the content without make any modification to the original source


### Methods

```php
public function filter( string $content ): string;
```
Returns the content as is




## Assets\Inline 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Inline.zep)


-   __Namespace__

    - `Phalcon\Assets`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    
    - `AssetInterface`

Represents an inline asset

```php
$inline = new \Phalcon\Assets\Inline("js", "alert('hello world');");
```


### Properties
```php
/**
 * @var array | null
 */
protected $attributes;

/**
 * @var string
 */
protected $content;

/**
 * @var bool
 */
protected $filter;

/**
 * @var string
 */
protected $type;

```

### Methods

```php
public function __construct( string $type, string $content, bool $filter = bool, array $attributes = [] );
```
Phalcon\Assets\Inline constructor


```php
public function getAssetKey(): string;
```
Gets the asset's key.


```php
public function getAttributes(): array;
```



```php
public function getContent(): string;
```



```php
public function getFilter(): bool;
```



```php
public function getType(): string;
```



```php
public function setAttributes( array $attributes ): AssetInterface;
```
Sets extra HTML attributes


```php
public function setFilter( bool $filter ): AssetInterface;
```
Sets if the asset must be filtered or not


```php
public function setType( string $type ): AssetInterface;
```
Sets the inline's type




## Assets\Inline\Css 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Inline/Css.zep)


-   __Namespace__

    - `Phalcon\Assets\Inline`

-   __Uses__
    
    - `Phalcon\Assets\Inline`

-   __Extends__
    
    `InlineBase`

-   __Implements__
    

Represents an inlined CSS


### Methods

```php
public function __construct( string $content, bool $filter = bool, mixed $attributes = null );
```
Phalcon\Assets\Inline\Css constructor




## Assets\Inline\Js 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Inline/Js.zep)


-   __Namespace__

    - `Phalcon\Assets\Inline`

-   __Uses__
    
    - `Phalcon\Assets\Inline`

-   __Extends__
    
    `InlineBase`

-   __Implements__
    

Represents an inline JavaScript


### Methods

```php
public function __construct( string $content, bool $filter = bool, mixed $attributes = null );
```
Phalcon\Assets\Inline\Js constructor




## Assets\Manager 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Assets/Manager.zep)


-   __Namespace__

    - `Phalcon\Assets`

-   __Uses__
    
    - `Phalcon\Assets\Asset\Css`
    - `Phalcon\Assets\Asset\Js`
    - `Phalcon\Assets\Inline\Css`
    - `Phalcon\Assets\Inline\Js`
    - `Phalcon\Di\AbstractInjectionAware`
    - `Phalcon\Html\Helper\Element`
    - `Phalcon\Html\Helper\Link`
    - `Phalcon\Html\Helper\Script`
    - `Phalcon\Html\TagFactory`

-   __Extends__
    
    `AbstractInjectionAware`

-   __Implements__
    

Manages collections of CSS/JavaScript assets


### Properties
```php
/**
 * @var array
 */
protected $collections;

/**
 * @var bool
 */
protected $implicitOutput = true;

/**
 * @var array
 */
protected $options;

```

## Methods

```php
public function __construct( array $options = [] );
```
Manager constructor.


```php
public function addAsset( Asset $asset ): Manager;
```
Adds a raw asset to the manager

```php
$assets->addAsset(
    new Phalcon\Assets\Asset("css", "css/style.css")
);
```


```php
public function addAssetByType( string $type, Asset $asset ): Manager;
```
Adds a asset by its type

```php
$assets->addAssetByType(
    "css",
    new \Phalcon\Assets\Asset\Css("css/style.css")
);
```


```php
public function addCss( string $path, mixed $local = bool, bool $filter = bool, mixed $attributes = null, string $version = null, bool $autoVersion = bool ): Manager;
```
   Adds a CSS asset to the 'css' collection
   
```php
$assets->addCss("css/bootstrap.css");
$assets->addCss("http://bootstrap.my-cdn.com/style.css", false);
```
   


```php
public function addInlineCode( Inline $code ): Manager;
```
Adds a raw inline code to the manager


```php
public function addInlineCodeByType( string $type, Inline $code ): Manager;
```
Adds an inline code by its type


```php
public function addInlineCss( string $content, mixed $filter = bool, mixed $attributes = null ): Manager;
```
Adds an inline CSS to the 'css' collection


```php
public function addInlineJs( string $content, mixed $filter = bool, mixed $attributes = null ): Manager;
```
Adds an inline JavaScript to the 'js' collection


```php
public function addJs( string $path, mixed $local = bool, bool $filter = bool, mixed $attributes = null, string $version = null, bool $autoVersion = bool ): Manager;
```
Adds a JavaScript asset to the 'js' collection

```php
$assets->addJs("scripts/jquery.js");
$assets->addJs("http://jquery.my-cdn.com/jquery.js", false);
```


```php
public function collection( string $name ): Collection;
```
Creates/Returns a collection of assets


```php
public function collectionAssetsByType( array $assets, string $type ): array;
```
Creates/Returns a collection of assets by type


```php
public function exists( string $id ): bool;
```
Returns true or false if collection exists.

```php
if ($manager->exists("jsHeader")) {
    // \Phalcon\Assets\Collection
    $collection = $manager->get("jsHeader");
}
```


```php
public function get( string $id ): Collection;
```
Returns a collection by its id.

```php
$scripts = $assets->get("js");
```


```php
public function getCollections(): Collection[];
```
Returns existing collections in the manager


```php
public function getCss(): Collection;
```
Returns the CSS collection of assets


```php
public function getJs(): Collection;
```
Returns the CSS collection of assets


```php
public function getOptions(): array;
```
Returns the manager options


```php
public function output( Collection $collection, mixed $callback, mixed $type ): string | null;
```
Traverses a collection calling the callback to generate its HTML


```php
public function outputCss( string $collectionName = null ): string;
```
Prints the HTML for CSS assets


```php
public function outputInline( Collection $collection, mixed $type ): string;
```
Traverses a collection and generate its HTML


```php
public function outputInlineCss( string $collectionName = null ): string;
```
Prints the HTML for inline CSS


```php
public function outputInlineJs( string $collectionName = null ): string;
```
Prints the HTML for inline JS


```php
public function outputJs( string $collectionName = null ): string;
```
Prints the HTML for JS assets


```php
public function set( string $id, Collection $collection ): Manager;
```
Sets a collection in the Assets Manager

```php
$assets->set("js", $collection);
```


```php
public function setOptions( array $options ): Manager;
```
Sets the manager options


```php
public function useImplicitOutput( bool $implicitOutput ): Manager;
```
Sets if the HTML generated must be directly printed or returned
