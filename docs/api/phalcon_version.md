---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Version 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Support/Version.zep)


-   __Namespace__

    - `Phalcon\Support`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

This class allows to get the installed version of the framework


### Constants
```php
const VERSION_MAJOR = 0;
const VERSION_MEDIUM = 1;
const VERSION_MINOR = 2;
const VERSION_SPECIAL = 3;
const VERSION_SPECIAL_NUMBER = 4;
```

### Methods

```php
public static function get(): string;
```
Returns the active version (string)

```php
echo Phalcon\Version::get();
```


```php
public static function getId(): string;
```
Returns the numeric active version

```php
echo Phalcon\Version::getId();
```


```php
public static function getPart( int $part ): string;
```
Returns a specific part of the version. If the wrong parameter is passed
it will return the full version

```php
echo Phalcon\Version::getPart(
    Phalcon\Version::VERSION_MAJOR
);
```


```php
protected $static function _getVersion(): array;
```
Area where the version number is set. The format is as follows:
ABBCCDE

A - Major version
B - Med version (two digits)
C - Min version (two digits)
D - Special release: 1 = alpha, 2 = beta, 3 = RC, 4 = stable
E - Special release version i.e. RC1, Beta2 etc.

@todo Remove in v5
@deprecated Use getVersion()


```php
protected $static function getVersion(): array;
```
Area where the version number is set. The format is as follows:
ABBCCDE

A - Major version
B - Med version (two digits)
C - Min version (two digits)
D - Special release: 1 = alpha, 2 = beta, 3 = RC, 4 = stable
E - Special release version i.e. RC1, Beta2 etc.
