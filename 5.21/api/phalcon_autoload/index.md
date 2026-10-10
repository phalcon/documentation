---
title: "Phalcon Autoload"
version: "5.21"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Autoload

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Autoload\Exception

Class

Exceptions thrown in Phalcon\Autoload will use this class

- `\Exception`
  - **`Phalcon\Autoload\Exception`**
    - [`Phalcon\Autoload\Exceptions\LoaderDirectoriesNotArray`](#autoloadexceptionsloaderdirectoriesnotarray)
    - [`Phalcon\Autoload\Exceptions\LoaderMethodNotCallable`](#autoloadexceptionsloadermethodnotcallable)


## Autoload\Exceptions\LoaderDirectoriesNotArray

Class

- `\Exception`
  - [`Phalcon\Autoload\Exception`](#autoloadexception)
    - **`Phalcon\Autoload\Exceptions\LoaderDirectoriesNotArray`**

`Phalcon\Autoload\Exception`

### Method Summary

- `public __construct(string $name = "")`

### Methods

<h4 id="autoloadexceptionsloaderdirectoriesnotarray-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name = "" );
```


## Autoload\Exceptions\LoaderMethodNotCallable

Class

- `\Exception`
  - [`Phalcon\Autoload\Exception`](#autoloadexception)
    - **`Phalcon\Autoload\Exceptions\LoaderMethodNotCallable`**

`Phalcon\Autoload\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="autoloadexceptionsloadermethodnotcallable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Autoload\Loader

Class

The Phalcon Autoloader provides an easy way to automatically load classes
(namespaced or not) as well as files. It also features extension loading,
allowing the user to autoload files with different extensions than .php.

- **`Phalcon\Autoload\Loader`**

`Phalcon\Autoload\Exceptions\LoaderDirectoriesNotArray` · `Phalcon\Autoload\Exceptions\LoaderMethodNotCallable` · `Phalcon\Contracts\Autoload\AutoloadTypes` · `Phalcon\Events\Exception` · `Phalcon\Events\ManagerInterface` · `Phalcon\Events\Traits\EventsAwareTrait`

### Method Summary

- `public __construct(bool $isDebug = false)` — Loader constructor.

- `public addClass(string $name, string $file): static` — Adds a class to the internal collection for the mapping

- `public addDirectory(string $directory): static` — Adds a directory for the loaded files

- `public addExtension(string $extension): static` — Adds an extension for the loaded files

- `public addFile(string $file): static` — Adds a file to be added to the loader

- `public addNamespace(string $name, mixed $directories, bool $prepend = false): static`

- `public autoload(string $className): bool` — Autoloads the registered classes

- `public getCheckedPath(): string|null` — Get the path the loader is checking for a path

- `public getClasses(): array` — Returns the class-map currently registered in the autoloader

- `public getDebug(): array` — Returns debug information collected

- `public getDirectories(): array` — Returns the directories currently registered in the autoloader

- `public getExtensions(): array` — Returns the file extensions registered in the loader

- `public getFiles(): array` — Returns the files currently registered in the autoloader

- `public getFoundPath(): string|null` — Get the path when a class was found

- `public getNamespaces(): array` — Returns the namespaces currently registered in the autoloader

- `public isRegistered(): bool` — Returns isRegistered

- `public loadFiles(): void` — Checks if a file exists and then adds the file by doing virtual require

- `public register(bool $prepend = false): static` — Register the autoload method

- `public setClasses(array $classes, bool $merge = false): static` — Register classes and their locations

- `public setDirectories(array $directories, bool $merge = false): static` — Register directories in which "not found" classes could be found

- `public setExtensions(array $extensions, bool $merge = false): static` — Sets an array of file extensions that the loader must try in each attempt

- `public setFileCheckingCallback(mixed $method = null): static` — Sets the file check callback.

- `public setFiles(array $files, bool $merge = false): static` — Registers files that are "non-classes" hence need a "require". This is

- `public setNamespaces(array $namespaces, bool $merge = false): static` — Register namespaces and their related directories

- `public unregister(): static` — Unregister the autoload method

- `protected requireFile(string $file): bool` — If the file exists, require it and return true; false otherwise

### Properties

- `protected string|null $checkedPath = null`

- `protected autoload_strings $classes = []`

- `protected array<int, string> $debug = []`

- `protected autoload_strings $directories = []`

- `protected autoload_strings $extensions = []`

- `protected callable $fileCheckingCallback = "is_file"` — Always holds a callable. The setter accepts a callable or a callable
  string and rejects anything else.

- `protected autoload_strings $files = []`

- `protected string|null $foundPath = null`

- `protected bool $isDebug = false`

- `protected bool $isRegistered = false`

- `protected autoload_namespaces $namespaces = []`

- `protected int $nestingLevel = 0`

### Methods

<h4 id="autoloadloader-__construct"><code>__construct()</code></h4>

```php
public function __construct( bool $isDebug = false );
```

Loader constructor.

<h4 id="autoloadloader-addclass"><code>addClass()</code></h4>

```php
public function addClass(
    string $name,
    string $file
): static;
```

Adds a class to the internal collection for the mapping

<h4 id="autoloadloader-adddirectory"><code>addDirectory()</code></h4>

```php
public function addDirectory( string $directory ): static;
```

Adds a directory for the loaded files

<h4 id="autoloadloader-addextension"><code>addExtension()</code></h4>

```php
public function addExtension( string $extension ): static;
```

Adds an extension for the loaded files

<h4 id="autoloadloader-addfile"><code>addFile()</code></h4>

```php
public function addFile( string $file ): static;
```

Adds a file to be added to the loader

<h4 id="autoloadloader-addnamespace"><code>addNamespace()</code></h4>

```php
public function addNamespace(
    string $name,
    mixed $directories,
    bool $prepend = false
): static;
```

<h4 id="autoloadloader-autoload"><code>autoload()</code></h4>

```php
public function autoload( string $className ): bool;
```

Autoloads the registered classes

<h4 id="autoloadloader-getcheckedpath"><code>getCheckedPath()</code></h4>

```php
public function getCheckedPath(): string|null;
```

Get the path the loader is checking for a path

<h4 id="autoloadloader-getclasses"><code>getClasses()</code></h4>

```php
public function getClasses(): array;
```

Returns the class-map currently registered in the autoloader

<h4 id="autoloadloader-getdebug"><code>getDebug()</code></h4>

```php
public function getDebug(): array;
```

Returns debug information collected

<h4 id="autoloadloader-getdirectories"><code>getDirectories()</code></h4>

```php
public function getDirectories(): array;
```

Returns the directories currently registered in the autoloader

<h4 id="autoloadloader-getextensions"><code>getExtensions()</code></h4>

```php
public function getExtensions(): array;
```

Returns the file extensions registered in the loader

<h4 id="autoloadloader-getfiles"><code>getFiles()</code></h4>

```php
public function getFiles(): array;
```

Returns the files currently registered in the autoloader

<h4 id="autoloadloader-getfoundpath"><code>getFoundPath()</code></h4>

```php
public function getFoundPath(): string|null;
```

Get the path when a class was found

<h4 id="autoloadloader-getnamespaces"><code>getNamespaces()</code></h4>

```php
public function getNamespaces(): array;
```

Returns the namespaces currently registered in the autoloader

<h4 id="autoloadloader-isregistered"><code>isRegistered()</code></h4>

```php
public function isRegistered(): bool;
```

Returns isRegistered

<h4 id="autoloadloader-loadfiles"><code>loadFiles()</code></h4>

```php
public function loadFiles(): void;
```

Checks if a file exists and then adds the file by doing virtual require

<h4 id="autoloadloader-register"><code>register()</code></h4>

```php
public function register( bool $prepend = false ): static;
```

Register the autoload method

<h4 id="autoloadloader-setclasses"><code>setClasses()</code></h4>

```php
public function setClasses(
    array $classes,
    bool $merge = false
): static;
```

Register classes and their locations

<h4 id="autoloadloader-setdirectories"><code>setDirectories()</code></h4>

```php
public function setDirectories(
    array $directories,
    bool $merge = false
): static;
```

Register directories in which "not found" classes could be found

<h4 id="autoloadloader-setextensions"><code>setExtensions()</code></h4>

```php
public function setExtensions(
    array $extensions,
    bool $merge = false
): static;
```

Sets an array of file extensions that the loader must try in each attempt
to locate the file

<h4 id="autoloadloader-setfilecheckingcallback"><code>setFileCheckingCallback()</code></h4>

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

<h4 id="autoloadloader-setfiles"><code>setFiles()</code></h4>

```php
public function setFiles(
    array $files,
    bool $merge = false
): static;
```

Registers files that are "non-classes" hence need a "require". This is
very useful for including files that only have functions

<h4 id="autoloadloader-setnamespaces"><code>setNamespaces()</code></h4>

```php
public function setNamespaces(
    array $namespaces,
    bool $merge = false
): static;
```

Register namespaces and their related directories

<h4 id="autoloadloader-unregister"><code>unregister()</code></h4>

```php
public function unregister(): static;
```

Unregister the autoload method

<h4 id="autoloadloader-requirefile"><code>requireFile()</code></h4>

```php
protected function requireFile( string $file ): bool;
```

If the file exists, require it and return true; false otherwise

Source: https://docs.phalcon.io/5.21/api/phalcon_autoload/index.mdx
