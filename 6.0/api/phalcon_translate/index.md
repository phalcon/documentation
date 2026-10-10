---
title: "Phalcon Translate"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Translate

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Translate\Adapter\AbstractAdapter

Abstract

@implements ArrayAccess&lt;string, string>

- **`Phalcon\Translate\Adapter\AbstractAdapter`** - implements [`Phalcon\Translate\Adapter\AdapterInterface`](#translateadapteradapterinterface), `\ArrayAccess`
  - [`Phalcon\Translate\Adapter\Csv`](#translateadaptercsv)
  - [`Phalcon\Translate\Adapter\Gettext`](#translateadaptergettext)
  - [`Phalcon\Translate\Adapter\NativeArray`](#translateadapternativearray)

`ArrayAccess` · `Phalcon\Contracts\Translate\TranslateTypes` · `Phalcon\Translate\Exception` · `Phalcon\Translate\Exceptions\ImmutableObject` · `Phalcon\Translate\Exceptions\KeyNotFound` · `Phalcon\Translate\InterpolatorFactory` · `Phalcon\Translate\Interpolator\InterpolatorInterface`

### Method Summary

- `public __construct(InterpolatorFactory $interpolatorFactory, array $options = [])` — AbstractAdapter constructor.

- `public _(string $translateKey, array $placeholders = []): string` — Returns the translation string of the given key (alias of method 't')

- `public notFound(string $index): string` — Whenever a key is not found this method will be called

- `public offsetExists(mixed $offset): bool` — Check whether a translation key exists

- `public offsetGet(mixed $offset): string` — Returns the translation related to the given key

- `public offsetSet(mixed $offset, mixed $value): void` — Sets a translation value

- `public offsetUnset(mixed $offset): void` — Unsets a translation from the dictionary

- `public t(string $translateKey, array $placeholders = []): string` — Returns the translation string of the given key

- `protected replacePlaceholders(string $translation, array $placeholders = []): string` — Replaces placeholders by the values passed

### Properties

- `protected string $defaultInterpolator = ""`

- `protected InterpolatorInterface|null $interpolator = null`

- `protected InterpolatorFactory $interpolatorFactory`

- `protected bool $triggerError = false`

### Methods

<h4 id="translateadapterabstractadapter-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    InterpolatorFactory $interpolatorFactory,
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

<h4 id="translateadapterabstractadapter-notfound"><code>notFound()</code></h4>

```php
public function notFound( string $index ): string;
```

Whenever a key is not found this method will be called

<h4 id="translateadapterabstractadapter-offsetexists"><code>offsetExists()</code></h4>

```php
public function offsetExists( mixed $offset ): bool;
```

Check whether a translation key exists

<h4 id="translateadapterabstractadapter-offsetget"><code>offsetGet()</code></h4>

```php
public function offsetGet( mixed $offset ): string;
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

<h4 id="translateadapterabstractadapter-replaceplaceholders"><code>replacePlaceholders()</code></h4>

```php
protected function replacePlaceholders(
    string $translation,
    array $placeholders = []
): string;
```

Replaces placeholders by the values passed


## Translate\Adapter\AdapterInterface

Interface

Phalcon\Translate\Adapter\AdapterInterface

Interface for Phalcon\Translate adapters

- **`Phalcon\Translate\Adapter\AdapterInterface`**

### Method Summary

- `public has(string $index): bool` — Check whether is defined a translation key in the internal array

- `public query(string $translateKey, array $placeholders = []): string` — Returns the translation related to the given key

- `public t(string $translateKey, array $placeholders = []): string` — Returns the translation string of the given key

### Methods

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

Missing-key semantics differ per adapter:

| Adapter     | Missing key returns       | Strict mode (triggerError) |
| ----------- | ------------------------- | -------------------------- |
| NativeArray | the key, not interpolated | yes                        |
| Csv         | the key, interpolated     | yes                        |
| Gettext     | the msgid (gettext)       | yes                        |

With strict mode enabled (the `triggerError` option) a missing key
throws `KeyNotFound` instead of falling back.

<h4 id="translateadapteradapterinterface-t"><code>t()</code></h4>

```php
public function t(
    string $translateKey,
    array $placeholders = []
): string;
```

Returns the translation string of the given key


## Translate\Adapter\Csv

Class

- [`Phalcon\Translate\Adapter\AbstractAdapter`](#translateadapterabstractadapter)
  - **`Phalcon\Translate\Adapter\Csv`**

`Phalcon\Contracts\Translate\TranslateTypes` · `Phalcon\Traits\Php\FileTrait` · `Phalcon\Translate\Exception` · `Phalcon\Translate\Exceptions\FileOpenError` · `Phalcon\Translate\Exceptions\MissingRequiredParameter` · `Phalcon\Translate\InterpolatorFactory`

### Method Summary

- `public __construct(InterpolatorFactory $interpolator, array $options)` — Csv constructor.

- `public exists(string $index): bool` — Check whether is defined a translation key in the internal array

- `public has(string $index): bool` — Check whether is defined a translation key in the internal array

- `public query(string $translateKey, array $placeholders = []): string` — Returns the translation related to the given key

- `public toArray(): array` — Returns the internal array

### Properties

- `protected array $translate = []`

### Methods

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


## Translate\Adapter\Gettext

Class

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

- [`Phalcon\Translate\Adapter\AbstractAdapter`](#translateadapterabstractadapter)
  - **`Phalcon\Translate\Adapter\Gettext`**

`Phalcon\Contracts\Translate\TranslateTypes` · `Phalcon\Traits\Php\InfoTrait` · `Phalcon\Translate\Exception` · `Phalcon\Translate\Exceptions\MissingGettextExtension` · `Phalcon\Translate\Exceptions\MissingRequiredParameter` · `Phalcon\Translate\InterpolatorFactory`

### Method Summary

- `public __construct(InterpolatorFactory $interpolator, array $options)` — Gettext constructor.

- `public exists(string $index): bool` — Check whether is defined a translation key in the internal array

- `public getCategory(): int`

- `public getDefaultDomain(): string`

- `public getDirectory(): array|string`

- `public getLocale(): false|string`

- `public has(string $index): bool` — Check whether is defined a translation key in the internal array

- `public nquery(string $msgid1, string $msgid2, int $count, array $placeholders = [], string|null $domain = null): string` — The plural version of gettext().

- `public query(string $translateKey, array $placeholders = []): string` — Returns the translation related to the given key.

- `public resetDomain(): string` — Sets the default domain

- `public setDefaultDomain(string $domain): void` — Sets the domain default to search within when calls are made to gettext()

- `public setDirectory(mixed $directory): void` — Sets the path for a domain

- `public setDomain(string|null $domain = null): string` — Changes the current domain (i.e. the translation file)

- `public setLocale(int $category, array $localeArray = []): false|string` — Sets locale information

- `protected getOptionsDefault(): array` — Gets default options

- `protected prepareOptions(array $options): void` — Validator for constructor

### Properties

- `protected int $category = LC_ALL`

- `protected string $defaultDomain = "messages"`

- `protected array|string $directory`

- `protected false|string $locale`

### Methods

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
public function getLocale(): false|string;
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
    string|null $domain = null
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
public function setDomain( string|null $domain = null ): string;
```

Changes the current domain (i.e. the translation file)

<h4 id="translateadaptergettext-setlocale"><code>setLocale()</code></h4>

```php
public function setLocale(
    int $category,
    array $localeArray = []
): false|string;
```

Sets locale information

Note: this method has process-global side effects. Besides calling
`setlocale()`, it exports the `LC_ALL`, `LANG` and `LANGUAGE`
environment variables via `putenv()`. `LC_ALL` affects every
locale-sensitive operation in the process - `(string)` casts of floats,
`strtoupper()`/`strtolower()` tables, date formatting and more - not
just translations.

```php
// Set locale to Dutch
$gettext->setLocale(LC_ALL, ["nl_NL"]);

// Try different possible locale names for German
$gettext->setLocale(LC_ALL, ["de_DE@euro", "de_DE", "de", "ge"]);
```

<h4 id="translateadaptergettext-getoptionsdefault"><code>getOptionsDefault()</code></h4>

```php
protected function getOptionsDefault(): array;
```

Gets default options

<h4 id="translateadaptergettext-prepareoptions"><code>prepareOptions()</code></h4>

```php
protected function prepareOptions( array $options ): void;
```

Validator for constructor


## Translate\Adapter\NativeArray

Class

Defines translation lists using PHP arrays

- [`Phalcon\Translate\Adapter\AbstractAdapter`](#translateadapterabstractadapter)
  - **`Phalcon\Translate\Adapter\NativeArray`**

`Phalcon\Contracts\Translate\TranslateTypes` · `Phalcon\Translate\Exception` · `Phalcon\Translate\Exceptions\InvalidDataType` · `Phalcon\Translate\Exceptions\MissingContent` · `Phalcon\Translate\InterpolatorFactory`

### Method Summary

- `public __construct(InterpolatorFactory $interpolator, array $options)` — NativeArray constructor.

- `public exists(string $index): bool` — Check whether is defined a translation key in the internal array

- `public has(string $index): bool` — Check whether is defined a translation key in the internal array

- `public query(string $translateKey, array $placeholders = []): string` — Returns the translation related to the given key

- `public toArray(): array` — Returns the internal array

### Methods

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

Class

Class for exceptions thrown by Phalcon\Translate

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


## Translate\Exceptions\FileOpenError

Class

- `\Exception`
  - [`Phalcon\Translate\Exception`](#translateexception)
    - **`Phalcon\Translate\Exceptions\FileOpenError`**

`Phalcon\Translate\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="translateexceptionsfileopenerror-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Translate\Exceptions\ImmutableObject

Class

- `\Exception`
  - [`Phalcon\Translate\Exception`](#translateexception)
    - **`Phalcon\Translate\Exceptions\ImmutableObject`**

`Phalcon\Translate\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="translateexceptionsimmutableobject-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Translate\Exceptions\InterpolatorNotRegistered

Class

- `\Exception`
  - [`Phalcon\Translate\Exception`](#translateexception)
    - **`Phalcon\Translate\Exceptions\InterpolatorNotRegistered`**

`Phalcon\Translate\Exception`


## Translate\Exceptions\InvalidDataType

Class

- `\Exception`
  - [`Phalcon\Translate\Exception`](#translateexception)
    - **`Phalcon\Translate\Exceptions\InvalidDataType`**

`Phalcon\Translate\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="translateexceptionsinvaliddatatype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Translate\Exceptions\KeyNotFound

Class

- `\Exception`
  - [`Phalcon\Translate\Exception`](#translateexception)
    - **`Phalcon\Translate\Exceptions\KeyNotFound`**

`Phalcon\Translate\Exception`

### Method Summary

- `public __construct(string $key)`

### Methods

<h4 id="translateexceptionskeynotfound-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $key );
```


## Translate\Exceptions\MissingContent

Class

- `\Exception`
  - [`Phalcon\Translate\Exception`](#translateexception)
    - **`Phalcon\Translate\Exceptions\MissingContent`**

`Phalcon\Translate\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="translateexceptionsmissingcontent-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Translate\Exceptions\MissingGettextExtension

Class

- `\Exception`
  - [`Phalcon\Translate\Exception`](#translateexception)
    - **`Phalcon\Translate\Exceptions\MissingGettextExtension`**

`Phalcon\Translate\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="translateexceptionsmissinggettextextension-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Translate\Exceptions\MissingRequiredParameter

Class

- `\Exception`
  - [`Phalcon\Translate\Exception`](#translateexception)
    - **`Phalcon\Translate\Exceptions\MissingRequiredParameter`**

`Phalcon\Translate\Exception`

### Method Summary

- `public __construct(string $parameter)`

- `public getParameter(): string`

### Methods

<h4 id="translateexceptionsmissingrequiredparameter-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $parameter );
```

<h4 id="translateexceptionsmissingrequiredparameter-getparameter"><code>getParameter()</code></h4>

```php
public function getParameter(): string;
```


## Translate\Exceptions\TranslatorNotRegistered

Class

- `\Exception`
  - [`Phalcon\Translate\Exception`](#translateexception)
    - **`Phalcon\Translate\Exceptions\TranslatorNotRegistered`**

`Phalcon\Translate\Exception`


## Translate\InterpolatorFactory

Class

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/6.0/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Translate\InterpolatorFactory`**

`Phalcon\Factory\AbstractFactory` · `Phalcon\Translate\Exceptions\InterpolatorNotRegistered` · `Phalcon\Translate\Interpolator\AssociativeArray` · `Phalcon\Translate\Interpolator\IndexedArray` · `Phalcon\Translate\Interpolator\InterpolatorInterface`

### Method Summary

- `public __construct(array $services = [])`

- `public newInstance(string $name): InterpolatorInterface` — Create a new instance of the adapter

- `protected getExceptionClass(): string`

- `protected getServices(): array` — Returns the available adapters

### Methods

<h4 id="translateinterpolatorfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

<h4 id="translateinterpolatorfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name ): InterpolatorInterface;
```

Create a new instance of the adapter

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

Class

Class AssociativeArray

- **`Phalcon\Translate\Interpolator\AssociativeArray`** - implements [`Phalcon\Translate\Interpolator\InterpolatorInterface`](#translateinterpolatorinterpolatorinterface)

`Phalcon\Traits\Support\Helper\Str\InterpolateTrait`

### Method Summary

- `public replacePlaceholders(string $translation, array $placeholders = []): string` — Replaces placeholders by the values passed

### Methods

<h4 id="translateinterpolatorassociativearray-replaceplaceholders"><code>replacePlaceholders()</code></h4>

```php
public function replacePlaceholders(
    string $translation,
    array $placeholders = []
): string;
```

Replaces placeholders by the values passed


## Translate\Interpolator\IndexedArray

Class

- **`Phalcon\Translate\Interpolator\IndexedArray`** - implements [`Phalcon\Translate\Interpolator\InterpolatorInterface`](#translateinterpolatorinterpolatorinterface)

### Method Summary

- `public replacePlaceholders(string $translation, array $placeholders = []): string` — Replaces placeholders by the values passed

### Methods

<h4 id="translateinterpolatorindexedarray-replaceplaceholders"><code>replacePlaceholders()</code></h4>

```php
public function replacePlaceholders(
    string $translation,
    array $placeholders = []
): string;
```

Replaces placeholders by the values passed


## Translate\Interpolator\InterpolatorInterface

Interface

Phalcon\Translate\InterpolatorInterface

Interface for Phalcon\Translate interpolators

- **`Phalcon\Translate\Interpolator\InterpolatorInterface`**

### Method Summary

- `public replacePlaceholders(string $translation, array $placeholders = []): string` — Replaces placeholders by the values passed

### Methods

<h4 id="translateinterpolatorinterpolatorinterface-replaceplaceholders"><code>replacePlaceholders()</code></h4>

```php
public function replacePlaceholders(
    string $translation,
    array $placeholders = []
): string;
```

Replaces placeholders by the values passed


## Translate\TranslateFactory

Class

@property InterpolatorFactory $interpolator

- [`Phalcon\Factory\AbstractConfigFactory`](/6.0/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/6.0/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Translate\TranslateFactory`**

`Phalcon\Config\ConfigInterface` · `Phalcon\Contracts\Translate\TranslateTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Translate\Adapter\AdapterInterface` · `Phalcon\Translate\Adapter\Csv` · `Phalcon\Translate\Adapter\Gettext` · `Phalcon\Translate\Adapter\NativeArray` · `Phalcon\Translate\Exceptions\TranslatorNotRegistered`

### Method Summary

- `public __construct(InterpolatorFactory $interpolator, array $services = [])`

- `public load(mixed $config): AdapterInterface` — Factory to create an instance from a Config object

- `public newInstance(string $name, array $options = []): AdapterInterface` — Create a new instance of the adapter

- `protected getExceptionClass(): string`

- `protected getServices(): array` — Returns the available adapters

### Methods

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

<h4 id="translatetranslatefactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="translatetranslatefactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

Source: https://docs.phalcon.io/6.0/api/phalcon_translate/index.mdx
