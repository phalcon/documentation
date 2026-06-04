---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Assets\Asset 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Asset.zep)


-   __Namespace__

    - `Phalcon\Assets`

-   __Uses__
    
    - `Phalcon\Assets\Exceptions\CannotReadAsset`

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
 * @var array
 */
protected $attributes;

/**
 * @var bool
 */
protected $isAutoVersion = false;

/**
 * @var bool
 */
protected $filter;

/**
 * @var bool
 */
protected $isLocal;

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
 * @var string|null
 */
protected $version;

```

### Methods

```php
public function __construct( string $type, string $path, bool $isLocal = bool, bool $filter = bool, array $attributes = [], string $version = null, bool $isAutoVersion = bool );
```
Asset constructor.


```php
public function getAssetKey(): string;
```
Gets the asset's key.


```php
public function getAttributes(): array;
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
public function getVersion(): string | null;
```
Version of resource


```php
public function isAutoVersion(): bool;
```
Checks if the asset is using auto version


```php
public function isLocal(): bool;
```
Checks if the asset is local or not


```php
public function setAttributes( array $attributes ): AssetInterface;
```
Sets extra HTML attributes


```php
public function setAutoVersion( bool $flag ): AssetInterface;
```



```php
public function setFilter( bool $filter ): AssetInterface;
```
Sets if the asset must be filtered or not


```php
public function setIsLocal( bool $flag ): AssetInterface;
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
public function setVersion( string $version ): AssetInterface;
```
Sets the asset's version


```php
protected function phpFileExists( string $filename ): bool;
```
@todo to be removed when we get traits


```php
protected function phpFileGetContents( string $filename );
```





## Assets\Asset\Css 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Asset/Css.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Asset/Js.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/AssetInterface.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Collection.zep)


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
 * @var bool
 */
protected $isLocal = true;

/**
 * @var bool
 */
protected $join = true;

/**
 * @var string
 */
protected $prefix = ;

/**
 * @var string
 */
protected $sourcePath = ;

/**
 * @var bool
 */
protected $targetIsLocal = true;

/**
 * @var string
 */
protected $targetPath = ;

/**
 * @var string
 */
protected $targetUri = ;

/**
 * @var string
 */
protected $version = ;

```

### Methods

```php
public function add( AssetInterface $asset ): static;
```
Adds an asset to the collection


```php
public function addCss( string $path, mixed $isLocal = null, bool $filter = bool, array $attributes = [], string $version = null, bool $autoVersion = bool ): static;
```
Adds a CSS asset to the collection


```php
public function addFilter( FilterInterface $filter ): static;
```
Adds a filter to the collection


```php
public function addInline( Inline $code ): static;
```
Adds an inline code to the collection


```php
public function addInlineCss( string $content, bool $filter = bool, array $attributes = [] ): static;
```
Adds an inline CSS to the collection


```php
public function addInlineJs( string $content, bool $filter = bool, array $attributes = [] ): static;
```
Adds an inline JavaScript to the collection


```php
public function addJs( string $path, mixed $isLocal = null, bool $filter = bool, array $attributes = [], string $version = null, bool $autoVersion = bool ): static;
```
Adds a JavaScript asset to the collection


```php
public function count(): int;
```
Return the count of the assets


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
public function getIterator(): \Traversable;
```
Returns the generator of the class

@link https://php.net/manual/en/iteratoraggregate.getiterator.php


```php
public function getJoin(): bool;
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
public function getTargetIsLocal(): bool;
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
public function isLocal(): bool;
```



```php
public function join( bool $flag ): static;
```
Sets if all filtered assets in the collection must be joined in a single
result file


```php
public function setAttributes( array $attributes ): static;
```
Sets extra HTML attributes


```php
public function setAutoVersion( bool $flag ): static;
```



```php
public function setFilters( array $filters ): static;
```
Sets an array of filters in the collection


```php
public function setIsLocal( bool $flag ): static;
```
Sets if the collection uses local assets by default


```php
public function setPrefix( string $prefix ): static;
```
Sets a common prefix for all the assets


```php
public function setSourcePath( string $sourcePath ): static;
```
Sets a base source path for all the assets in this collection


```php
public function setTargetIsLocal( bool $flag ): static;
```
Sets if the target local or not


```php
public function setTargetPath( string $targetPath ): static;
```
Sets the target path of the file for the filtered/join output


```php
public function setTargetUri( string $targetUri ): static;
```
Sets a target uri for the generated HTML


```php
public function setVersion( string $version ): static;
```
Sets the version


```php
final protected function addAsset( AssetInterface $asset ): bool;
```
Adds an asset or inline-code to the collection




## Assets\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exception.zep)


-   __Namespace__

    - `Phalcon\Assets`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Assets will use this class



## Assets\Exceptions\AssetSourceTargetCollision 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/AssetSourceTargetCollision.zep)


-   __Namespace__

    - `Phalcon\Assets\Exceptions`

-   __Uses__
    
    - `Phalcon\Assets\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( string $path );
```





## Assets\Exceptions\CannotReadAsset 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/CannotReadAsset.zep)


-   __Namespace__

    - `Phalcon\Assets\Exceptions`

-   __Uses__
    
    - `Phalcon\Assets\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( string $path );
```





## Assets\Exceptions\CollectionNotFound 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/CollectionNotFound.zep)


-   __Namespace__

    - `Phalcon\Assets\Exceptions`

-   __Uses__
    
    - `Phalcon\Assets\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct();
```





## Assets\Exceptions\InvalidAssetSourcePath 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/InvalidAssetSourcePath.zep)


-   __Namespace__

    - `Phalcon\Assets\Exceptions`

-   __Uses__
    
    - `Phalcon\Assets\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( string $path );
```





## Assets\Exceptions\InvalidAssetTargetPath 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/InvalidAssetTargetPath.zep)


-   __Namespace__

    - `Phalcon\Assets\Exceptions`

-   __Uses__
    
    - `Phalcon\Assets\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( string $path );
```





## Assets\Exceptions\InvalidFilter 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/InvalidFilter.zep)


-   __Namespace__

    - `Phalcon\Assets\Exceptions`

-   __Uses__
    
    - `Phalcon\Assets\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct();
```





## Assets\Exceptions\InvalidTargetPath 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/InvalidTargetPath.zep)


-   __Namespace__

    - `Phalcon\Assets\Exceptions`

-   __Uses__
    
    - `Phalcon\Assets\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( string $path );
```





## Assets\Exceptions\TargetPathIsDirectory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Exceptions/TargetPathIsDirectory.zep)


-   __Namespace__

    - `Phalcon\Assets\Exceptions`

-   __Uses__
    
    - `Phalcon\Assets\Exception`

-   __Extends__
    
    `Exception`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( string $path );
```





## Assets\FilterInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/FilterInterface.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Filters/CssMin.zep)


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

> NOTE: This functionality is not currently available
{: .alert .alert-info }




## Assets\Filters\Jsmin 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Filters/JsMin.zep)


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

> NOTE: This functionality is not currently available
{: .alert .alert-info }




## Assets\Filters\None 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Filters/None.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Inline.zep)


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
 * @var array
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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Inline/Css.zep)


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
public function __construct( string $content, bool $filter = bool, array $attributes = [] );
```
Phalcon\Assets\Inline\Css constructor




## Assets\Inline\Js 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Inline/Js.zep)


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
public function __construct( string $content, bool $filter = bool, array $attributes = [] );
```
Phalcon\Assets\Inline\Js constructor




## Assets\Manager 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Assets/Manager.zep)


-   __Namespace__

    - `Phalcon\Assets`

-   __Uses__
    
    - `Phalcon\Assets\Asset\Css`
    - `Phalcon\Assets\Asset\Js`
    - `Phalcon\Assets\Exceptions\AssetSourceTargetCollision`
    - `Phalcon\Assets\Exceptions\CollectionNotFound`
    - `Phalcon\Assets\Exceptions\InvalidAssetSourcePath`
    - `Phalcon\Assets\Exceptions\InvalidAssetTargetPath`
    - `Phalcon\Assets\Exceptions\InvalidFilter`
    - `Phalcon\Assets\Exceptions\InvalidTargetPath`
    - `Phalcon\Assets\Exceptions\TargetPathIsDirectory`
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

/**
 * @var TagFactory
 */
protected $tagFactory;

```

### Methods

```php
public function __construct( TagFactory $tagFactory, array $options = [] );
```
Manager constructor.


```php
public function addAsset( Asset $asset ): static;
```
Adds a raw asset to the manager


```php
public function addAssetByType( string $type, Asset $asset ): static;
```
Adds a asset by its type


```php
public function addCss( string $path, bool $local = bool, bool $filter = bool, array $attributes = [], string $version = null, bool $autoVersion = bool ): static;
```
Adds a CSS asset to the 'css' collection


```php
public function addInlineCode( Inline $code ): static;
```
Adds a raw inline code to the manager


```php
public function addInlineCodeByType( string $type, Inline $code ): static;
```
Adds an inline code by its type


```php
public function addInlineCss( string $content, bool $filter = bool, array $attributes = [] ): static;
```
Adds an inline CSS to the 'css' collection


```php
public function addInlineJs( string $content, bool $filter = bool, array $attributes = [] ): static;
```
Adds an inline JavaScript to the 'js' collection


```php
public function addJs( string $path, bool $local = bool, bool $filter = bool, array $attributes = [], string $version = null, bool $autoVersion = bool ): static;
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
public function exists( string $name ): bool;
```
Returns true or false if collection exists.

```php
if ($manager->exists("jsHeader")) {
    // \Phalcon\Assets\Collection
    $collection = $manager->get("jsHeader");
}
```


```php
public function get( string $name ): Collection;
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
public function has( string $name ): bool;
```
Returns true or false if collection exists.

```php
if ($manager->has("jsHeader")) {
    // \Phalcon\Assets\Collection
    $collection = $manager->get("jsHeader");
}
```


```php
public function output( Collection $collection, string $type ): string | null;
```
Traverses a collection calling the callback to generate its HTML


```php
public function outputCss( string $name = null ): string;
```
Prints the HTML for CSS assets


```php
public function outputInline( Collection $collection, mixed $type ): string;
```
Traverses a collection and generate its HTML


```php
public function outputInlineCss( string $name = null ): string;
```
Prints the HTML for inline CSS


```php
public function outputInlineJs( string $name = null ): string;
```
Prints the HTML for inline JS


```php
public function outputJs( string $name = null ): string;
```
Prints the HTML for JS assets


```php
public function set( string $name, Collection $collection ): static;
```
Sets a collection in the Assets Manager

```php
$assets->set("js", $collection);
```


```php
public function setOptions( array $options ): static;
```
Sets the manager options


```php
public function useImplicitOutput( bool $implicitOutput ): static;
```
Sets if the HTML generated must be directly printed or returned


