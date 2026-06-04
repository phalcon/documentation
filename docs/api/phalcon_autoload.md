---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Autoload\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Autoload/Exception.zep)


-   __Namespace__

    - `Phalcon\Autoload`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Autoload will use this class



## Autoload\Exceptions\LoaderDirectoriesNotArray 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Autoload/Exceptions/LoaderDirectoriesNotArray.zep)


-   __Namespace__

    - `Phalcon\Autoload\Exceptions`

-   __Uses__
    
    - `Phalcon\Autoload\Exception`

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





## Autoload\Exceptions\LoaderMethodNotCallable 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Autoload/Exceptions/LoaderMethodNotCallable.zep)


-   __Namespace__

    - `Phalcon\Autoload\Exceptions`

-   __Uses__
    
    - `Phalcon\Autoload\Exception`

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





## Autoload\Loader 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Autoload/Loader.zep)


-   __Namespace__

    - `Phalcon\Autoload`

-   __Uses__
    
    - `Phalcon\Autoload\Exceptions\LoaderDirectoriesNotArray`
    - `Phalcon\Autoload\Exceptions\LoaderMethodNotCallable`
    - `Phalcon\Events\AbstractEventsAware`

-   __Extends__
    
    `AbstractEventsAware`

-   __Implements__
    

The Phalcon Autoloader provides an easy way to automatically load classes
(namespaced or not) as well as files. It also features extension loading,
allowing the user to autoload files with different extensions than .php.


### Properties
```php
/**
 * @var string|null
 */
protected $checkedPath;

/**
 * @var array
 */
protected $classes;

/**
 * @var array
 */
protected $debug;

/**
 * @var array
 */
protected $directories;

/**
 * @var array
 */
protected $extensions;

/**
 * @var string|callable
 */
protected $fileCheckingCallback = is_file;

/**
 * @var array
 */
protected $files;

/**
 * @var string|null
 */
protected $foundPath;

/**
 * @var bool
 */
protected $isDebug = false;

/**
 * @var bool
 */
protected $isRegistered = false;

/**
 * @var array
 */
protected $namespaces;

```

### Methods

```php
public function __construct( bool $isDebug = bool );
```
Loader constructor.


```php
public function addClass( string $name, string $file ): static;
```
Adds a class to the internal collection for the mapping


```php
public function addDirectory( string $directory ): static;
```
Adds a directory for the loaded files


```php
public function addExtension( string $extension ): static;
```
Adds an extension for the loaded files


```php
public function addFile( string $file ): static;
```
Adds a file to be added to the loader


```php
public function addNamespace( string $name, mixed $directories, bool $prepend = bool ): static;
```



```php
public function autoload( string $className ): bool;
```
Autoloads the registered classes


```php
public function getCheckedPath(): string | null;
```
Get the path the loader is checking for a path


```php
public function getClasses(): array;
```
Returns the class-map currently registered in the autoloader


```php
public function getDebug(): array;
```
Returns debug information collected


```php
public function getDirectories(): array;
```
Returns the directories currently registered in the autoloader


```php
public function getExtensions(): array;
```
Returns the file extensions registered in the loader


```php
public function getFiles(): array;
```
Returns the files currently registered in the autoloader


```php
public function getFoundPath(): string | null;
```
Get the path when a class was found


```php
public function getNamespaces(): array;
```
Returns the namespaces currently registered in the autoloader


```php
public function isRegistered(): bool;
```
returns isRegistered


```php
public function loadFiles(): void;
```
Checks if a file exists and then adds the file by doing virtual require


```php
public function register( bool $prepend = bool ): static;
```
Register the autoload method


```php
public function setClasses( array $classes, bool $merge = bool ): static;
```
Register classes and their locations


```php
public function setDirectories( array $directories, bool $merge = bool ): static;
```
Register directories in which "not found" classes could be found


```php
public function setExtensions( array $extensions, bool $merge = bool ): static;
```
Sets an array of file extensions that the loader must try in each attempt
to locate the file


```php
public function setFileCheckingCallback( mixed $method = null ): static;
```
Sets the file check callback.

```php
// Default behavior.
$loader->setFileCheckingCallback("is_file");

// Faster than `is_file()`, but implies some issues if
// the file is removed from the filesystem.
$loader->setFileCheckingCallback("stream_resolve_include_path");

// Do not check file existence.
$loader->setFileCheckingCallback(null);
```


```php
public function setFiles( array $files, bool $merge = bool ): static;
```
Registers files that are "non-classes" hence need a "require". This is
very useful for including files that only have functions


```php
public function setNamespaces( array $namespaces, bool $merge = bool ): static;
```
Register namespaces and their related directories


```php
public function unregister(): static;
```
Unregister the autoload method


```php
protected function requireFile( string $file ): bool;
```
If the file exists, require it and return true; false otherwise


