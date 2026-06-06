---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Translate\Adapter\AbstractAdapter

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Adapter/AbstractAdapter.zep){ .src-btn }

@psalm-type TOptions array{
    defaultInterpolator?: string
}

@template TKey of string
@template TValue of string
@implements ArrayAccess<TKey, TValue>

<div class="api-tree" markdown>

- **`Phalcon\Translate\Adapter\AbstractAdapter`** — implements [`Phalcon\Translate\Adapter\AdapterInterface`](#translateadapteradapterinterface), `ArrayAccess`
    - [`Phalcon\Translate\Adapter\Csv`](#translateadaptercsv)
    - [`Phalcon\Translate\Adapter\Gettext`](#translateadaptergettext)
    - [`Phalcon\Translate\Adapter\NativeArray`](#translateadapternativearray)

</div>

__Uses__ `ArrayAccess` · `Phalcon\Translate\Exceptions\ImmutableObject` · `Phalcon\Translate\InterpolatorFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateadapterabstractadapter-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    InterpolatorFactory $interpolator,
    array $options = []
)</code>
<span class="desc">AbstractAdapter constructor.</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-_">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">_(
    string $translateKey,
    array $placeholders = []
)</code>
<span class="desc">Returns the translation string of the given key (alias of method &#039;t&#039;)</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-offsetexists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">offsetExists( mixed $translateKey )</code>
<span class="desc">Check whether a translation key exists</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-offsetget">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">offsetGet( mixed $translateKey )</code>
<span class="desc">Returns the translation related to the given key</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-offsetset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">offsetSet(
    mixed $offset,
    mixed $value
)</code>
<span class="desc">Sets a translation value</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-offsetunset">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">offsetUnset( mixed $offset )</code>
<span class="desc">Unsets a translation from the dictionary</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-t">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">t(
    string $translateKey,
    array $placeholders = []
)</code>
<span class="desc">Returns the translation string of the given key</span>
</a>
<a class="api-item" href="#translateadapterabstractadapter-replaceplaceholders">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">replacePlaceholders(
    string $translation,
    array $placeholders = []
)</code>
<span class="desc">Replaces placeholders by the values passed</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$defaultInterpolator = ""` `string`

-   `protected`{ .vis-protected } `$interpolatorFactory` `InterpolatorFactory`

</div>

### Methods

<div class="api-group">Public · 7</div>

#### `__construct()` { #translateadapterabstractadapter-__construct }

```php
public function __construct(
    InterpolatorFactory $interpolator,
    array $options = []
);
```

AbstractAdapter constructor.

#### `_()` { #translateadapterabstractadapter-_ }

```php
public function _(
    string $translateKey,
    array $placeholders = []
): string;
```

Returns the translation string of the given key (alias of method 't')

#### `offsetExists()` { #translateadapterabstractadapter-offsetexists }

```php
public function offsetExists( mixed $translateKey ): bool;
```

Check whether a translation key exists

#### `offsetGet()` { #translateadapterabstractadapter-offsetget }

```php
public function offsetGet( mixed $translateKey ): string|null;
```

Returns the translation related to the given key

#### `offsetSet()` { #translateadapterabstractadapter-offsetset }

```php
public function offsetSet(
    mixed $offset,
    mixed $value
): void;
```

Sets a translation value

#### `offsetUnset()` { #translateadapterabstractadapter-offsetunset }

```php
public function offsetUnset( mixed $offset ): void;
```

Unsets a translation from the dictionary

#### `t()` { #translateadapterabstractadapter-t }

```php
public function t(
    string $translateKey,
    array $placeholders = []
): string;
```

Returns the translation string of the given key

<div class="api-group">Protected · 1</div>

#### `replacePlaceholders()` { #translateadapterabstractadapter-replaceplaceholders }

```php
protected function replacePlaceholders(
    string $translation,
    array $placeholders = []
): string;
```

Replaces placeholders by the values passed


## Translate\Adapter\AdapterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Adapter/AdapterInterface.zep){ .src-btn }

Phalcon\Translate\Adapter\AdapterInterface

Interface for Phalcon\Translate adapters

<div class="api-tree" markdown>

- **`Phalcon\Translate\Adapter\AdapterInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateadapteradapterinterface-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has( string $index )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadapteradapterinterface-query">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">query(
    string $translateKey,
    array $placeholders = []
)</code>
<span class="desc">Returns the translation related to the given key</span>
</a>
<a class="api-item" href="#translateadapteradapterinterface-t">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">t(
    string $translateKey,
    array $placeholders = []
)</code>
<span class="desc">Returns the translation string of the given key</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `has()` { #translateadapteradapterinterface-has }

```php
public function has( string $index ): bool;
```

Check whether is defined a translation key in the internal array

#### `query()` { #translateadapteradapterinterface-query }

```php
public function query(
    string $translateKey,
    array $placeholders = []
): string;
```

Returns the translation related to the given key

#### `t()` { #translateadapteradapterinterface-t }

```php
public function t(
    string $translateKey,
    array $placeholders = []
): string;
```

Returns the translation string of the given key


## Translate\Adapter\Csv

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Adapter/Csv.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Translate\Adapter\AbstractAdapter`](#translateadapterabstractadapter)
    - **`Phalcon\Translate\Adapter\Csv`**

</div>

__Uses__ `Phalcon\Translate\Exception` · `Phalcon\Translate\Exceptions\FileOpenError` · `Phalcon\Translate\Exceptions\MissingRequiredParameter` · `Phalcon\Translate\InterpolatorFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateadaptercsv-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    InterpolatorFactory $interpolator,
    array $options
)</code>
<span class="desc">Csv constructor.</span>
</a>
<a class="api-item" href="#translateadaptercsv-exists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">exists( string $index )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadaptercsv-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has( string $index )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadaptercsv-query">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">query(
    string $translateKey,
    array $placeholders = []
)</code>
<span class="desc">Returns the translation related to the given key</span>
</a>
<a class="api-item" href="#translateadaptercsv-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">toArray()</code>
<span class="desc">Returns the internal array</span>
</a>
<a class="api-item" href="#translateadaptercsv-phpfopen">
<code class="vis vis-protected">protected</code>
<code class="sig">phpFopen(
    string $filename,
    string $mode
)</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$translate = []` `array`

</div>

### Methods

<div class="api-group">Public · 5</div>

#### `__construct()` { #translateadaptercsv-__construct }

```php
public function __construct(
    InterpolatorFactory $interpolator,
    array $options
);
```

Csv constructor.

#### `exists()` { #translateadaptercsv-exists }

```php
public function exists( string $index ): bool;
```

Check whether is defined a translation key in the internal array

#### `has()` { #translateadaptercsv-has }

```php
public function has( string $index ): bool;
```

Check whether is defined a translation key in the internal array

#### `query()` { #translateadaptercsv-query }

```php
public function query(
    string $translateKey,
    array $placeholders = []
): string;
```

Returns the translation related to the given key

#### `toArray()` { #translateadaptercsv-toarray }

```php
public function toArray(): array;
```

Returns the internal array

<div class="api-group">Protected · 1</div>

#### `phpFopen()` { #translateadaptercsv-phpfopen }

```php
protected function phpFopen(
    string $filename,
    string $mode
);
```

@todo to be removed when we get traits


## Translate\Adapter\Gettext

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Adapter/Gettext.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Translate\Adapter\AbstractAdapter`](#translateadapterabstractadapter)
    - **`Phalcon\Translate\Adapter\Gettext`**

</div>

__Uses__ `Phalcon\Translate\Exception` · `Phalcon\Translate\Exceptions\MissingGettextExtension` · `Phalcon\Translate\Exceptions\MissingRequiredParameter` · `Phalcon\Translate\InterpolatorFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateadaptergettext-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    InterpolatorFactory $interpolator,
    array $options
)</code>
<span class="desc">Gettext constructor.</span>
</a>
<a class="api-item" href="#translateadaptergettext-exists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">exists( string $index )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadaptergettext-getcategory">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getCategory()</code>
</a>
<a class="api-item" href="#translateadaptergettext-getdefaultdomain">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getDefaultDomain()</code>
</a>
<a class="api-item" href="#translateadaptergettext-getdirectory">
<code class="vis vis-public">public</code>
<code class="ret">array|string</code>
<code class="sig">getDirectory()</code>
</a>
<a class="api-item" href="#translateadaptergettext-getlocale">
<code class="vis vis-public">public</code>
<code class="ret">string|false</code>
<code class="sig">getLocale()</code>
</a>
<a class="api-item" href="#translateadaptergettext-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has( string $index )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadaptergettext-nquery">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">nquery(
    string $msgid1,
    string $msgid2,
    int $count,
    array $placeholders = [],
    string $domain = null
)</code>
<span class="desc">The plural version of gettext().</span>
</a>
<a class="api-item" href="#translateadaptergettext-query">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">query(
    string $translateKey,
    array $placeholders = []
)</code>
<span class="desc">Returns the translation related to the given key.</span>
</a>
<a class="api-item" href="#translateadaptergettext-resetdomain">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">resetDomain()</code>
<span class="desc">Sets the default domain</span>
</a>
<a class="api-item" href="#translateadaptergettext-setdefaultdomain">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDefaultDomain( string $domain )</code>
<span class="desc">Sets the domain default to search within when calls are made to gettext()</span>
</a>
<a class="api-item" href="#translateadaptergettext-setdirectory">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig">setDirectory( mixed $directory )</code>
<span class="desc">Sets the path for a domain</span>
</a>
<a class="api-item" href="#translateadaptergettext-setdomain">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">setDomain( string $domain = null )</code>
<span class="desc">Changes the current domain (i.e. the translation file)</span>
</a>
<a class="api-item" href="#translateadaptergettext-setlocale">
<code class="vis vis-public">public</code>
<code class="ret">string|bool</code>
<code class="sig">setLocale(
    int $category,
    array $localeArray = []
)</code>
<span class="desc">Sets locale information</span>
</a>
<a class="api-item" href="#translateadaptergettext-getoptionsdefault">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getOptionsDefault()</code>
<span class="desc">Gets default options</span>
</a>
<a class="api-item" href="#translateadaptergettext-phpfunctionexists">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">phpFunctionExists( string $name )</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
<a class="api-item" href="#translateadaptergettext-prepareoptions">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">prepareOptions( array $options )</code>
<span class="desc">Validator for constructor</span>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$category` `int`

-   `protected`{ .vis-protected } `$defaultDomain` `string`

-   `protected`{ .vis-protected } `$directory` `string|array`

-   `protected`{ .vis-protected } `$locale` `string | false`

</div>

### Methods

<div class="api-group">Public · 14</div>

#### `__construct()` { #translateadaptergettext-__construct }

```php
public function __construct(
    InterpolatorFactory $interpolator,
    array $options
);
```

Gettext constructor.

#### `exists()` { #translateadaptergettext-exists }

```php
public function exists( string $index ): bool;
```

Check whether is defined a translation key in the internal array

#### `getCategory()` { #translateadaptergettext-getcategory }

```php
public function getCategory(): int;
```

#### `getDefaultDomain()` { #translateadaptergettext-getdefaultdomain }

```php
public function getDefaultDomain(): string;
```

#### `getDirectory()` { #translateadaptergettext-getdirectory }

```php
public function getDirectory(): array|string;
```

#### `getLocale()` { #translateadaptergettext-getlocale }

```php
public function getLocale(): string|false;
```

#### `has()` { #translateadaptergettext-has }

```php
public function has( string $index ): bool;
```

Check whether is defined a translation key in the internal array

#### `nquery()` { #translateadaptergettext-nquery }

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

#### `query()` { #translateadaptergettext-query }

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

#### `resetDomain()` { #translateadaptergettext-resetdomain }

```php
public function resetDomain(): string;
```

Sets the default domain

#### `setDefaultDomain()` { #translateadaptergettext-setdefaultdomain }

```php
public function setDefaultDomain( string $domain ): void;
```

Sets the domain default to search within when calls are made to gettext()

#### `setDirectory()` { #translateadaptergettext-setdirectory }

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

#### `setDomain()` { #translateadaptergettext-setdomain }

```php
public function setDomain( string $domain = null ): string;
```

Changes the current domain (i.e. the translation file)

#### `setLocale()` { #translateadaptergettext-setlocale }

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

#### `getOptionsDefault()` { #translateadaptergettext-getoptionsdefault }

```php
protected function getOptionsDefault(): array;
```

Gets default options

#### `phpFunctionExists()` { #translateadaptergettext-phpfunctionexists }

```php
protected function phpFunctionExists( string $name ): bool;
```

@todo to be removed when we get traits

#### `prepareOptions()` { #translateadaptergettext-prepareoptions }

```php
protected function prepareOptions( array $options ): void;
```

Validator for constructor


## Translate\Adapter\NativeArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Adapter/NativeArray.zep){ .src-btn }

Defines translation lists using PHP arrays

<div class="api-tree" markdown>

- [`Phalcon\Translate\Adapter\AbstractAdapter`](#translateadapterabstractadapter)
    - **`Phalcon\Translate\Adapter\NativeArray`**

</div>

__Uses__ `Phalcon\Translate\Exception` · `Phalcon\Translate\Exceptions\InvalidDataType` · `Phalcon\Translate\Exceptions\KeyNotFound` · `Phalcon\Translate\Exceptions\MissingContent` · `Phalcon\Translate\InterpolatorFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateadapternativearray-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    InterpolatorFactory $interpolator,
    array $options
)</code>
<span class="desc">NativeArray constructor.</span>
</a>
<a class="api-item" href="#translateadapternativearray-exists">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">exists( string $index )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadapternativearray-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has( string $index )</code>
<span class="desc">Check whether is defined a translation key in the internal array</span>
</a>
<a class="api-item" href="#translateadapternativearray-notfound">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">notFound( string $index )</code>
<span class="desc">Whenever a key is not found this method will be called</span>
</a>
<a class="api-item" href="#translateadapternativearray-query">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">query(
    string $translateKey,
    array $placeholders = []
)</code>
<span class="desc">Returns the translation related to the given key</span>
</a>
<a class="api-item" href="#translateadapternativearray-toarray">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">toArray()</code>
<span class="desc">Returns the internal array</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `__construct()` { #translateadapternativearray-__construct }

```php
public function __construct(
    InterpolatorFactory $interpolator,
    array $options
);
```

NativeArray constructor.

#### `exists()` { #translateadapternativearray-exists }

```php
public function exists( string $index ): bool;
```

Check whether is defined a translation key in the internal array

#### `has()` { #translateadapternativearray-has }

```php
public function has( string $index ): bool;
```

Check whether is defined a translation key in the internal array

#### `notFound()` { #translateadapternativearray-notfound }

```php
public function notFound( string $index ): string;
```

Whenever a key is not found this method will be called

#### `query()` { #translateadapternativearray-query }

```php
public function query(
    string $translateKey,
    array $placeholders = []
): string;
```

Returns the translation related to the given key

#### `toArray()` { #translateadapternativearray-toarray }

```php
public function toArray(): array;
```

Returns the internal array


## Translate\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exception.zep){ .src-btn }

Class for exceptions thrown by Phalcon\Translate

<div class="api-tree" markdown>

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
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/FileOpenError.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Translate\Exception`](#translateexception)
        - **`Phalcon\Translate\Exceptions\FileOpenError`**

</div>

__Uses__ `Phalcon\Translate\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsfileopenerror-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #translateexceptionsfileopenerror-__construct }

```php
public function __construct( string $name );
```


## Translate\Exceptions\ImmutableObject

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/ImmutableObject.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Translate\Exception`](#translateexception)
        - **`Phalcon\Translate\Exceptions\ImmutableObject`**

</div>

__Uses__ `Phalcon\Translate\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsimmutableobject-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #translateexceptionsimmutableobject-__construct }

```php
public function __construct();
```


## Translate\Exceptions\InterpolatorNotRegistered

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/InterpolatorNotRegistered.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Translate\Exception`](#translateexception)
        - **`Phalcon\Translate\Exceptions\InterpolatorNotRegistered`**

</div>

__Uses__ `Phalcon\Translate\Exception`
{ .api-uses }


## Translate\Exceptions\InvalidDataType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/InvalidDataType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Translate\Exception`](#translateexception)
        - **`Phalcon\Translate\Exceptions\InvalidDataType`**

</div>

__Uses__ `Phalcon\Translate\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsinvaliddatatype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #translateexceptionsinvaliddatatype-__construct }

```php
public function __construct();
```


## Translate\Exceptions\KeyNotFound

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/KeyNotFound.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Translate\Exception`](#translateexception)
        - **`Phalcon\Translate\Exceptions\KeyNotFound`**

</div>

__Uses__ `Phalcon\Translate\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionskeynotfound-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $key )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #translateexceptionskeynotfound-__construct }

```php
public function __construct( string $key );
```


## Translate\Exceptions\MissingContent

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/MissingContent.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Translate\Exception`](#translateexception)
        - **`Phalcon\Translate\Exceptions\MissingContent`**

</div>

__Uses__ `Phalcon\Translate\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsmissingcontent-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #translateexceptionsmissingcontent-__construct }

```php
public function __construct();
```


## Translate\Exceptions\MissingGettextExtension

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/MissingGettextExtension.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Translate\Exception`](#translateexception)
        - **`Phalcon\Translate\Exceptions\MissingGettextExtension`**

</div>

__Uses__ `Phalcon\Translate\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsmissinggettextextension-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #translateexceptionsmissinggettextextension-__construct }

```php
public function __construct();
```


## Translate\Exceptions\MissingRequiredParameter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/MissingRequiredParameter.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Translate\Exception`](#translateexception)
        - **`Phalcon\Translate\Exceptions\MissingRequiredParameter`**

</div>

__Uses__ `Phalcon\Translate\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateexceptionsmissingrequiredparameter-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $parameter )</code>
</a>
<a class="api-item" href="#translateexceptionsmissingrequiredparameter-getparameter">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getParameter()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #translateexceptionsmissingrequiredparameter-__construct }

```php
public function __construct( string $parameter );
```

#### `getParameter()` { #translateexceptionsmissingrequiredparameter-getparameter }

```php
public function getParameter(): string;
```


## Translate\Exceptions\TranslatorNotRegistered

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Exceptions/TranslatorNotRegistered.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Translate\Exception`](#translateexception)
        - **`Phalcon\Translate\Exceptions\TranslatorNotRegistered`**

</div>

__Uses__ `Phalcon\Translate\Exception`
{ .api-uses }


## Translate\InterpolatorFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/InterpolatorFactory.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the
LICENSE.txt file that was distributed with this source code.

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Translate\InterpolatorFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Translate\Interpolator\InterpolatorInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateinterpolatorfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $services = [] )</code>
</a>
<a class="api-item" href="#translateinterpolatorfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">InterpolatorInterface</code>
<code class="sig">newInstance( string $name )</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#translateinterpolatorfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getExceptionClass()</code>
</a>
<a class="api-item" href="#translateinterpolatorfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getServices()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #translateinterpolatorfactory-__construct }

```php
public function __construct( array $services = [] );
```

#### `newInstance()` { #translateinterpolatorfactory-newinstance }

```php
public function newInstance( string $name ): InterpolatorInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #translateinterpolatorfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #translateinterpolatorfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Translate\Interpolator\AssociativeArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Interpolator/AssociativeArray.zep){ .src-btn }

Class AssociativeArray

<div class="api-tree" markdown>

- **`Phalcon\Translate\Interpolator\AssociativeArray`** — implements [`Phalcon\Translate\Interpolator\InterpolatorInterface`](#translateinterpolatorinterpolatorinterface)

</div>

__Uses__ `Phalcon\Support\Helper\Str\Interpolate`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateinterpolatorassociativearray-replaceplaceholders">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">replacePlaceholders(
    string $translation,
    array $placeholders = []
)</code>
<span class="desc">Replaces placeholders by the values passed</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `replacePlaceholders()` { #translateinterpolatorassociativearray-replaceplaceholders }

```php
public function replacePlaceholders(
    string $translation,
    array $placeholders = []
): string;
```

Replaces placeholders by the values passed


## Translate\Interpolator\IndexedArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Interpolator/IndexedArray.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- **`Phalcon\Translate\Interpolator\IndexedArray`** — implements [`Phalcon\Translate\Interpolator\InterpolatorInterface`](#translateinterpolatorinterpolatorinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateinterpolatorindexedarray-replaceplaceholders">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">replacePlaceholders(
    string $translation,
    array $placeholders = []
)</code>
<span class="desc">Replaces placeholders by the values passed</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `replacePlaceholders()` { #translateinterpolatorindexedarray-replaceplaceholders }

```php
public function replacePlaceholders(
    string $translation,
    array $placeholders = []
): string;
```

Replaces placeholders by the values passed


## Translate\Interpolator\InterpolatorInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/Interpolator/InterpolatorInterface.zep){ .src-btn }

Phalcon\Translate\InterpolatorInterface

Interface for Phalcon\Translate interpolators

<div class="api-tree" markdown>

- **`Phalcon\Translate\Interpolator\InterpolatorInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#translateinterpolatorinterpolatorinterface-replaceplaceholders">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">replacePlaceholders(
    string $translation,
    array $placeholders = []
)</code>
<span class="desc">Replaces placeholders by the values passed</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `replacePlaceholders()` { #translateinterpolatorinterpolatorinterface-replaceplaceholders }

```php
public function replacePlaceholders(
    string $translation,
    array $placeholders = []
): string;
```

Replaces placeholders by the values passed


## Translate\TranslateFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Translate/TranslateFactory.zep){ .src-btn }

@property InterpolatorFactory $interpolator

@psalm-type TConfig array{
     adapter: string,
     options?: array{
         content: string,
         delimiter: string,
         enclosure: string,
         locale: string,
         defaultDomain: string,
         directory: string,
         category: string,
         triggerError: bool,
     }
 }

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Translate\TranslateFactory`**

</div>

__Uses__ `Phalcon\Config\ConfigInterface` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Translate\Adapter\AdapterInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#translatetranslatefactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    InterpolatorFactory $interpolator,
    array $services = []
)</code>
</a>
<a class="api-item" href="#translatetranslatefactory-load">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">load( mixed $config )</code>
<span class="desc">Factory to create an instance from a Config object</span>
</a>
<a class="api-item" href="#translatetranslatefactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">AdapterInterface</code>
<code class="sig">newInstance(
    string $name,
    array $options = []
)</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#translatetranslatefactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">getExceptionClass()</code>
</a>
<a class="api-item" href="#translatetranslatefactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getServices()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #translatetranslatefactory-__construct }

```php
public function __construct(
    InterpolatorFactory $interpolator,
    array $services = []
);
```

#### `load()` { #translatetranslatefactory-load }

```php
public function load( mixed $config ): AdapterInterface;
```

Factory to create an instance from a Config object

#### `newInstance()` { #translatetranslatefactory-newinstance }

```php
public function newInstance(
    string $name,
    array $options = []
): AdapterInterface;
```

Create a new instance of the adapter

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #translatetranslatefactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #translatetranslatefactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters
