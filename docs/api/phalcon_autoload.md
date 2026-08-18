---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Autoload\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Autoload/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Autoload will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Autoload\Exception`**
        - [`Phalcon\Autoload\Exceptions\LoaderDirectoriesNotArray`](#autoloadexceptionsloaderdirectoriesnotarray)
        - [`Phalcon\Autoload\Exceptions\LoaderMethodNotCallable`](#autoloadexceptionsloadermethodnotcallable)

</div>


## Autoload\Exceptions\LoaderDirectoriesNotArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Autoload/Exceptions/LoaderDirectoriesNotArray.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Autoload\Exception`](#autoloadexception)
        - **`Phalcon\Autoload\Exceptions\LoaderDirectoriesNotArray`**

</div>

__Uses__ `Phalcon\Autoload\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#autoloadexceptionsloaderdirectoriesnotarray-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span><span class="sm"> = &quot;&quot;</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #autoloadexceptionsloaderdirectoriesnotarray-__construct }

```php
public function __construct( string $name = "" );
```


## Autoload\Exceptions\LoaderMethodNotCallable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Autoload/Exceptions/LoaderMethodNotCallable.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Autoload\Exception`](#autoloadexception)
        - **`Phalcon\Autoload\Exceptions\LoaderMethodNotCallable`**

</div>

__Uses__ `Phalcon\Autoload\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#autoloadexceptionsloadermethodnotcallable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #autoloadexceptionsloadermethodnotcallable-__construct }

```php
public function __construct();
```


## Autoload\Loader

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Autoload/Loader.zep){ .src-btn }

The Phalcon Autoloader provides an easy way to automatically load classes
(namespaced or not) as well as files. It also features extension loading,
allowing the user to autoload files with different extensions than .php.

<div class="api-tree" markdown>

- **`Phalcon\Autoload\Loader`**

</div>

__Uses__ `Phalcon\Autoload\Exceptions\LoaderDirectoriesNotArray` · `Phalcon\Autoload\Exceptions\LoaderMethodNotCallable` · `Phalcon\Contracts\Autoload\AutoloadTypes` · `Phalcon\Events\Exception` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#autoloadloader-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">bool</span> <span class="sv">$isDebug</span><span class="sm"> = false</span> )</code>
<span class="desc">Loader constructor.</span>
</a>
<a class="api-item" href="#autoloadloader-addclass">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addClass</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$file</span></span>)</code>
<span class="desc">Adds a class to the internal collection for the mapping</span>
</a>
<a class="api-item" href="#autoloadloader-adddirectory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addDirectory</span>( <span class="st">string</span> <span class="sv">$directory</span> )</code>
<span class="desc">Adds a directory for the loaded files</span>
</a>
<a class="api-item" href="#autoloadloader-addextension">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addExtension</span>( <span class="st">string</span> <span class="sv">$extension</span> )</code>
<span class="desc">Adds an extension for the loaded files</span>
</a>
<a class="api-item" href="#autoloadloader-addfile">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addFile</span>( <span class="st">string</span> <span class="sv">$file</span> )</code>
<span class="desc">Adds a file to be added to the loader</span>
</a>
<a class="api-item" href="#autoloadloader-addnamespace">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">addNamespace</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$directories</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$prepend</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#autoloadloader-autoload">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">autoload</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
<span class="desc">Autoloads the registered classes</span>
</a>
<a class="api-item" href="#autoloadloader-getcheckedpath">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getCheckedPath</span>()</code>
<span class="desc">Get the path the loader is checking for a path</span>
</a>
<a class="api-item" href="#autoloadloader-getclasses">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getClasses</span>()</code>
<span class="desc">Returns the class-map currently registered in the autoloader</span>
</a>
<a class="api-item" href="#autoloadloader-getdebug">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getDebug</span>()</code>
<span class="desc">Returns debug information collected</span>
</a>
<a class="api-item" href="#autoloadloader-getdirectories">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getDirectories</span>()</code>
<span class="desc">Returns the directories currently registered in the autoloader</span>
</a>
<a class="api-item" href="#autoloadloader-getextensions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getExtensions</span>()</code>
<span class="desc">Returns the file extensions registered in the loader</span>
</a>
<a class="api-item" href="#autoloadloader-getfiles">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getFiles</span>()</code>
<span class="desc">Returns the files currently registered in the autoloader</span>
</a>
<a class="api-item" href="#autoloadloader-getfoundpath">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getFoundPath</span>()</code>
<span class="desc">Get the path when a class was found</span>
</a>
<a class="api-item" href="#autoloadloader-getnamespaces">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getNamespaces</span>()</code>
<span class="desc">Returns the namespaces currently registered in the autoloader</span>
</a>
<a class="api-item" href="#autoloadloader-isregistered">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isRegistered</span>()</code>
<span class="desc">Returns isRegistered</span>
</a>
<a class="api-item" href="#autoloadloader-loadfiles">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">loadFiles</span>()</code>
<span class="desc">Checks if a file exists and then adds the file by doing virtual require</span>
</a>
<a class="api-item" href="#autoloadloader-register">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">register</span>( <span class="st">bool</span> <span class="sv">$prepend</span><span class="sm"> = false</span> )</code>
<span class="desc">Register the autoload method</span>
</a>
<a class="api-item" href="#autoloadloader-setclasses">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setClasses</span>(<span class="prm"><span class="st">array</span> <span class="sv">$classes</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$merge</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Register classes and their locations</span>
</a>
<a class="api-item" href="#autoloadloader-setdirectories">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setDirectories</span>(<span class="prm"><span class="st">array</span> <span class="sv">$directories</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$merge</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Register directories in which &quot;not found&quot; classes could be found</span>
</a>
<a class="api-item" href="#autoloadloader-setextensions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setExtensions</span>(<span class="prm"><span class="st">array</span> <span class="sv">$extensions</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$merge</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Sets an array of file extensions that the loader must try in each attempt</span>
</a>
<a class="api-item" href="#autoloadloader-setfilecheckingcallback">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setFileCheckingCallback</span>( <span class="st">mixed</span> <span class="sv">$method</span><span class="sm"> = null</span> )</code>
<span class="desc">Sets the file check callback.</span>
</a>
<a class="api-item" href="#autoloadloader-setfiles">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setFiles</span>(<span class="prm"><span class="st">array</span> <span class="sv">$files</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$merge</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Registers files that are &quot;non-classes&quot; hence need a &quot;require&quot;. This is</span>
</a>
<a class="api-item" href="#autoloadloader-setnamespaces">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setNamespaces</span>(<span class="prm"><span class="st">array</span> <span class="sv">$namespaces</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$merge</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Register namespaces and their related directories</span>
</a>
<a class="api-item" href="#autoloadloader-unregister">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">unregister</span>()</code>
<span class="desc">Unregister the autoload method</span>
</a>
<a class="api-item" href="#autoloadloader-requirefile">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">requireFile</span>( <span class="st">string</span> <span class="sv">$file</span> )</code>
<span class="desc">If the file exists, require it and return true; false otherwise</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$checkedPath</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">autoload_strings</code>
<code class="sig"><span class="sv">$classes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array&lt;int, string&gt;</code>
<code class="sig"><span class="sv">$debug</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">autoload_strings</code>
<code class="sig"><span class="sv">$directories</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">autoload_strings</code>
<code class="sig"><span class="sv">$extensions</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">callable</code>
<code class="sig"><span class="sv">$fileCheckingCallback</span><span class="sm"> = &quot;is_file&quot;</span></code>
<span class="desc">Always holds a callable. The setter accepts a callable or a callable
string and rejects anything else.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">autoload_strings</code>
<code class="sig"><span class="sv">$files</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$foundPath</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isDebug</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$isRegistered</span><span class="sm"> = false</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">autoload_namespaces</code>
<code class="sig"><span class="sv">$namespaces</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$nestingLevel</span><span class="sm"> = 0</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 25</div>

#### `__construct()` { #autoloadloader-__construct }

```php
public function __construct( bool $isDebug = false );
```

Loader constructor.

#### `addClass()` { #autoloadloader-addclass }

```php
public function addClass(
    string $name,
    string $file
): static;
```

Adds a class to the internal collection for the mapping

#### `addDirectory()` { #autoloadloader-adddirectory }

```php
public function addDirectory( string $directory ): static;
```

Adds a directory for the loaded files

#### `addExtension()` { #autoloadloader-addextension }

```php
public function addExtension( string $extension ): static;
```

Adds an extension for the loaded files

#### `addFile()` { #autoloadloader-addfile }

```php
public function addFile( string $file ): static;
```

Adds a file to be added to the loader

#### `addNamespace()` { #autoloadloader-addnamespace }

```php
public function addNamespace(
    string $name,
    mixed $directories,
    bool $prepend = false
): static;
```

#### `autoload()` { #autoloadloader-autoload }

```php
public function autoload( string $className ): bool;
```

Autoloads the registered classes

#### `getCheckedPath()` { #autoloadloader-getcheckedpath }

```php
public function getCheckedPath(): string|null;
```

Get the path the loader is checking for a path

#### `getClasses()` { #autoloadloader-getclasses }

```php
public function getClasses(): array;
```

Returns the class-map currently registered in the autoloader

#### `getDebug()` { #autoloadloader-getdebug }

```php
public function getDebug(): array;
```

Returns debug information collected

#### `getDirectories()` { #autoloadloader-getdirectories }

```php
public function getDirectories(): array;
```

Returns the directories currently registered in the autoloader

#### `getExtensions()` { #autoloadloader-getextensions }

```php
public function getExtensions(): array;
```

Returns the file extensions registered in the loader

#### `getFiles()` { #autoloadloader-getfiles }

```php
public function getFiles(): array;
```

Returns the files currently registered in the autoloader

#### `getFoundPath()` { #autoloadloader-getfoundpath }

```php
public function getFoundPath(): string|null;
```

Get the path when a class was found

#### `getNamespaces()` { #autoloadloader-getnamespaces }

```php
public function getNamespaces(): array;
```

Returns the namespaces currently registered in the autoloader

#### `isRegistered()` { #autoloadloader-isregistered }

```php
public function isRegistered(): bool;
```

Returns isRegistered

#### `loadFiles()` { #autoloadloader-loadfiles }

```php
public function loadFiles(): void;
```

Checks if a file exists and then adds the file by doing virtual require

#### `register()` { #autoloadloader-register }

```php
public function register( bool $prepend = false ): static;
```

Register the autoload method

#### `setClasses()` { #autoloadloader-setclasses }

```php
public function setClasses(
    array $classes,
    bool $merge = false
): static;
```

Register classes and their locations

#### `setDirectories()` { #autoloadloader-setdirectories }

```php
public function setDirectories(
    array $directories,
    bool $merge = false
): static;
```

Register directories in which "not found" classes could be found

#### `setExtensions()` { #autoloadloader-setextensions }

```php
public function setExtensions(
    array $extensions,
    bool $merge = false
): static;
```

Sets an array of file extensions that the loader must try in each attempt
to locate the file

#### `setFileCheckingCallback()` { #autoloadloader-setfilecheckingcallback }

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

#### `setFiles()` { #autoloadloader-setfiles }

```php
public function setFiles(
    array $files,
    bool $merge = false
): static;
```

Registers files that are "non-classes" hence need a "require". This is
very useful for including files that only have functions

#### `setNamespaces()` { #autoloadloader-setnamespaces }

```php
public function setNamespaces(
    array $namespaces,
    bool $merge = false
): static;
```

Register namespaces and their related directories

#### `unregister()` { #autoloadloader-unregister }

```php
public function unregister(): static;
```

Unregister the autoload method

<div class="api-group">Protected · 1</div>

#### `requireFile()` { #autoloadloader-requirefile }

```php
protected function requireFile( string $file ): bool;
```

If the file exists, require it and return true; false otherwise
