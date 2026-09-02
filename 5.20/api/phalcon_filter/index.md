---
title: "Phalcon Filter"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Filter

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Filter\Exception

Class

Phalcon\Filter\Exception

Exceptions thrown in Phalcon\Filter will use this class

- `\Exception`
- **`Phalcon\Filter\Exception`**
- [`Phalcon\Filter\Exceptions\FilterNotRegistered`](#filterexceptionsfilternotregistered)

## Filter\Exceptions\FilterNotRegistered

Class

- `\Exception`
- [`Phalcon\Filter\Exception`](#filterexception)
- **`Phalcon\Filter\Exceptions\FilterNotRegistered`**

`Phalcon\Filter\Exception`

### Method Summary

<ApiItem href="#filterexceptionsfilternotregistered-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

### Methods

<h4 id="filterexceptionsfilternotregistered-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Filter\Filter

Class

Lazy loads, stores and exposes sanitizer objects

@method int          absint(mixed $input)
@method string       alnum(mixed $input)
@method string       alpha(mixed $input)
@method bool         bool(mixed $input)
@method string       email(string $input)
@method float        float(mixed $input)
@method int          int(string $input)
@method false|string ip(string $input, int $filter = 0)
@method string       lower(string $input)
@method string       lowerfirst(string $input)
@method mixed        regex(mixed $input, mixed $pattern, mixed $replace)
@method mixed        remove(mixed $input, mixed $replace)
@method mixed        replace(mixed $input, mixed $from, mixed $to)
@method string       special(string $input)
@method string       specialfull(string $input)
@method string       string(string $input)
@method string       stringlegacy(mixed $input)
@method string       striptags(string $input)
@method string       trim(string $input)
@method string       upper(string $input)
@method string       upperFirst(string $input)
@method string|null  upperWords(string $input)
@method string|null  url(string $input)

@property array $mapper
@property array $services

- **`Phalcon\Filter\Filter`** - implements [`Phalcon\Filter\FilterInterface`](#filterfilterinterface)

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Contracts\Filter\Sanitizer` · `Phalcon\Filter\Exceptions\FilterNotRegistered` · `Phalcon\Filter\Sanitize\AbsInt` · `Phalcon\Filter\Sanitize\Alnum` · `Phalcon\Filter\Sanitize\Alpha` · `Phalcon\Filter\Sanitize\BoolVal` · `Phalcon\Filter\Sanitize\Email` · `Phalcon\Filter\Sanitize\FloatVal` · `Phalcon\Filter\Sanitize\IntVal` · `Phalcon\Filter\Sanitize\Ip` · `Phalcon\Filter\Sanitize\Lower` · `Phalcon\Filter\Sanitize\LowerFirst` · `Phalcon\Filter\Sanitize\Regex` · `Phalcon\Filter\Sanitize\Remove` · `Phalcon\Filter\Sanitize\Replace` · `Phalcon\Filter\Sanitize\Special` · `Phalcon\Filter\Sanitize\SpecialFull` · `Phalcon\Filter\Sanitize\StringVal` · `Phalcon\Filter\Sanitize\StringValLegacy` · `Phalcon\Filter\Sanitize\Striptags` · `Phalcon\Filter\Sanitize\Trim` · `Phalcon\Filter\Sanitize\Upper` · `Phalcon\Filter\Sanitize\UpperFirst` · `Phalcon\Filter\Sanitize\UpperWords` · `Phalcon\Filter\Sanitize\Url`

### Method Summary

<ApiItem href="#filterfilter-__call" visibility="public" name="__call" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"args","default":null}]}>
Magic call to make the helper objects available as methods.
</ApiItem>
<ApiItem href="#filterfilter-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"mapper","default":"[]"}]}>
Filter constructor.
</ApiItem>
<ApiItem href="#filterfilter-get" visibility="public" name="get" returnType="mixed" params={[{"type":"string","name":"name","default":null}]}>
Get a service. If it is not in the mapper array, create a new object,
</ApiItem>
<ApiItem href="#filterfilter-getdefaultmapper" visibility="public" name="getDefaultMapper" returnType="array" params={[]}>
Returns the default sanitizer name to class map. This is the single
</ApiItem>
<ApiItem href="#filterfilter-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks if a service exists in the map array
</ApiItem>
<ApiItem href="#filterfilter-sanitize" visibility="public" name="sanitize" returnType="mixed" params={[{"type":"mixed","name":"value","default":null},{"type":"mixed","name":"sanitizers","default":null},{"type":"bool","name":"noRecursive","default":"false"}]}>
Sanitizes a value with a specified single or set of sanitizers
</ApiItem>
<ApiItem href="#filterfilter-set" visibility="public" name="set" returnType="void" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"service","default":null}]}>
Set a new service to the mapper array
</ApiItem>
<ApiItem href="#filterfilter-init" visibility="protected" name="init" returnType="void" params={[{"type":"array","name":"mapper","default":null}]}>
Loads the objects in the internal mapper array
</ApiItem>

### Constants

<ApiItem kind="constant" name="FILTER_ABSINT" type="string" default="&quot;absint&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_ALNUM" type="string" default="&quot;alnum&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_ALPHA" type="string" default="&quot;alpha&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_BOOL" type="string" default="&quot;bool&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_EMAIL" type="string" default="&quot;email&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_FLOAT" type="string" default="&quot;float&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_INT" type="string" default="&quot;int&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_IP" type="string" default="&quot;ip&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_LOWER" type="string" default="&quot;lower&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_LOWERFIRST" type="string" default="&quot;lowerfirst&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_REGEX" type="string" default="&quot;regex&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_REMOVE" type="string" default="&quot;remove&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_REPLACE" type="string" default="&quot;replace&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_SPECIAL" type="string" default="&quot;special&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_SPECIALFULL" type="string" default="&quot;specialfull&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_STRING" type="string" default="&quot;string&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_STRING_LEGACY" type="string" default="&quot;stringlegacy&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_STRIPTAGS" type="string" default="&quot;striptags&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_TRIM" type="string" default="&quot;trim&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_UPPER" type="string" default="&quot;upper&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_UPPERFIRST" type="string" default="&quot;upperfirst&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_UPPERWORDS" type="string" default="&quot;upperwords&quot;">
</ApiItem>
<ApiItem kind="constant" name="FILTER_URL" type="string" default="&quot;url&quot;">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="mapper" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="services" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="filterfilter-__call"><code>__call()</code></h4>

```php
public function __call(
string $name,
array $args
);
```

Magic call to make the helper objects available as methods.

<h4 id="filterfilter-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $mapper = [] );
```

Filter constructor.

<h4 id="filterfilter-get"><code>get()</code></h4>

```php
public function get( string $name ): mixed;
```

Get a service. If it is not in the mapper array, create a new object,
set it and then return it.

<h4 id="filterfilter-getdefaultmapper"><code>getDefaultMapper()</code></h4>

```php
public static function getDefaultMapper(): array;
```

Returns the default sanitizer name to class map. This is the single
source for the built-in sanitizer registry: when adding a sanitizer,
add its `FILTER_*` constant and its entry here.

<h4 id="filterfilter-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Checks if a service exists in the map array

<h4 id="filterfilter-sanitize"><code>sanitize()</code></h4>

```php
public function sanitize(
mixed $value,
mixed $sanitizers,
bool $noRecursive = false
): mixed;
```

Sanitizes a value with a specified single or set of sanitizers

Array policy: when `$value` is an array and `$noRecursive` is `false`
(the default), each element is passed to the sanitizer individually
and an array is returned - recursion is one level deep only. Elements
that are themselves arrays are passed to the sanitizer as-is, which
raises a `TypeError` for sanitizers that type their value parameter
(e.g. `trim`). When `$noRecursive` is `true`, the whole array is
passed to the sanitizer as a single value.

<h4 id="filterfilter-set"><code>set()</code></h4>

```php
public function set(
string $name,
mixed $service
): void;
```

Set a new service to the mapper array

<h4 id="filterfilter-init"><code>init()</code></h4>

```php
protected function init( array $mapper ): void;
```

Loads the objects in the internal mapper array

## Filter\FilterFactory

Class

Class FilterFactory

@package Phalcon\Filter

- **`Phalcon\Filter\FilterFactory`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Filter`

### Method Summary

<ApiItem href="#filterfilterfactory-newinstance" visibility="public" name="newInstance" returnType="FilterInterface" params={[]}>
Returns a Locator object with all the helpers defined in anonymous
</ApiItem>
<ApiItem href="#filterfilterfactory-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the available adapters
</ApiItem>

### Methods

<h4 id="filterfilterfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(): FilterInterface;
```

Returns a Locator object with all the helpers defined in anonymous
functions

<h4 id="filterfilterfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

## Filter\FilterInterface

Interface

Lazy loads, stores and exposes sanitizer objects

- **`Phalcon\Filter\FilterInterface`**

`Phalcon\Contracts\Filter\FilterTypes`

### Method Summary

<ApiItem href="#filterfilterinterface-sanitize" visibility="public" name="sanitize" returnType="mixed" params={[{"type":"mixed","name":"value","default":null},{"type":"mixed","name":"sanitizers","default":null},{"type":"bool","name":"noRecursive","default":"false"}]}>
Sanitizes a value with a specified single or set of sanitizers
</ApiItem>

### Methods

<h4 id="filterfilterinterface-sanitize"><code>sanitize()</code></h4>

```php
public function sanitize(
mixed $value,
mixed $sanitizers,
bool $noRecursive = false
): mixed;
```

Sanitizes a value with a specified single or set of sanitizers

Array policy: when `$value` is an array and `$noRecursive` is `false`
(the default), each element is sanitized individually and an array is
returned - recursion is one level deep only. When `$noRecursive` is
`true`, the whole array is passed to the sanitizer as a single value.

## Filter\Sanitize\AbsInt

Class

Sanitizes a value to absolute integer

- **`Phalcon\Filter\Sanitize\AbsInt`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizeabsint-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeabsint-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\Alnum

Class

Sanitizes a value to an alphanumeric value

- **`Phalcon\Filter\Sanitize\Alnum`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizealnum-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizealnum-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\Alpha

Class

Sanitizes a value to an alpha value

- **`Phalcon\Filter\Sanitize\Alpha`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizealpha-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizealpha-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\BoolVal

Class

Sanitizes a value to boolean

- **`Phalcon\Filter\Sanitize\BoolVal`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizeboolval-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeboolval-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\Email

Class

Sanitizes an email string

- **`Phalcon\Filter\Sanitize\Email`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizeemail-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeemail-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\FloatVal

Class

Sanitizes a value to float

- **`Phalcon\Filter\Sanitize\FloatVal`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizefloatval-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizefloatval-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\IntVal

Class

Sanitizes a value to integer

- **`Phalcon\Filter\Sanitize\IntVal`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizeintval-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeintval-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\Ip

Class

Sanitizes a value to an ip address or CIDR range

- **`Phalcon\Filter\Sanitize\Ip`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizeip-__invoke" visibility="public" name="__invoke" returnType="false|string" params={[{"type":"string","name":"input","default":null},{"type":"int","name":"filter","default":"0"}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeip-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $input,
int $filter = 0
): false|string;
```

## Filter\Sanitize\Lower

Class

Sanitizes a value to lowercase

- **`Phalcon\Filter\Sanitize\Lower`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer` · `Phalcon\Traits\Php\MbCaseTrait`

### Method Summary

<ApiItem href="#filtersanitizelower-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizelower-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\LowerFirst

Class

Sanitizes a value to lcfirst

- **`Phalcon\Filter\Sanitize\LowerFirst`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizelowerfirst-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizelowerfirst-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\Regex

Class

Sanitizes a value performing preg_replace

- **`Phalcon\Filter\Sanitize\Regex`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizeregex-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null},{"type":"mixed","name":"pattern","default":null},{"type":"mixed","name":"replace","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeregex-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $input,
mixed $pattern,
mixed $replace
);
```

## Filter\Sanitize\Remove

Class

Sanitizes a value removing parts of a string

- **`Phalcon\Filter\Sanitize\Remove`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizeremove-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null},{"type":"mixed","name":"replace","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeremove-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $input,
mixed $replace
);
```

## Filter\Sanitize\Replace

Class

Sanitizes a value replacing parts of a string

- **`Phalcon\Filter\Sanitize\Replace`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizereplace-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null},{"type":"mixed","name":"from","default":null},{"type":"mixed","name":"to","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizereplace-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $input,
mixed $from,
mixed $to
);
```

## Filter\Sanitize\Special

Class

Sanitizes a value special characters

- **`Phalcon\Filter\Sanitize\Special`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizespecial-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizespecial-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\SpecialFull

Class

Sanitizes a value special characters (htmlspecialchars() and ENT_QUOTES)

- **`Phalcon\Filter\Sanitize\SpecialFull`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizespecialfull-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizespecialfull-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\StringVal

Class

Sanitizes a value to string

- **`Phalcon\Filter\Sanitize\StringVal`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizestringval-__invoke" visibility="public" name="__invoke" returnType="string" params={[{"type":"string","name":"input","default":null},{"type":"int","name":"flags","default":"11"}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizestringval-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $input,
int $flags = 11
): string;
```

## Filter\Sanitize\StringValLegacy

Class

Sanitizes a value to string using `filter_var()`. The filter provides
backwards compatibility with versions prior to v5. For PHP higher or equal to
8.1, the filter will remain the string unchanged. If anything other than a
string is passed, the method will return false

- **`Phalcon\Filter\Sanitize\StringValLegacy`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizestringvallegacy-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizestringvallegacy-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\Striptags

Class

Sanitizes a value striptags

- **`Phalcon\Filter\Sanitize\Striptags`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizestriptags-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizestriptags-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\Trim

Class

Sanitizes a value removing leading and trailing spaces

- **`Phalcon\Filter\Sanitize\Trim`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizetrim-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizetrim-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\Upper

Class

Sanitizes a value to uppercase

- **`Phalcon\Filter\Sanitize\Upper`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer` · `Phalcon\Traits\Php\MbCaseTrait`

### Method Summary

<ApiItem href="#filtersanitizeupper-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeupper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\UpperFirst

Class

Sanitizes a value to ucfirst

- **`Phalcon\Filter\Sanitize\UpperFirst`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizeupperfirst-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeupperfirst-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\UpperWords

Class

Sanitizes a value to uppercase the first character of each word

- **`Phalcon\Filter\Sanitize\UpperWords`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer` · `Phalcon\Traits\Php\MbCaseTrait`

### Method Summary

<ApiItem href="#filtersanitizeupperwords-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"string","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeupperwords-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\Url

Class

Sanitizes a value url

- **`Phalcon\Filter\Sanitize\Url`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.20/api/phalcon_contracts/#contractsfiltersanitizer)

`Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<ApiItem href="#filtersanitizeurl-__invoke" visibility="public" name="__invoke" returnType="" params={[{"type":"mixed","name":"input","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtersanitizeurl-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Validation

Class

Allows to validate data using custom or built-in validators

- `\stdClass`
- [`Phalcon\Di\Injectable`](/5.20/api/phalcon_di/#diinjectable)
- **`Phalcon\Filter\Validation`** - implements [`Phalcon\Filter\Validation\ValidationInterface`](#filtervalidationvalidationinterface)

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Exception` · `Phalcon\Di\Injectable` · `Phalcon\Filter\FilterInterface` · `Phalcon\Filter\Validation\AbstractCombinedFieldsValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\FilterServiceUnavailable` · `Phalcon\Filter\Validation\Exceptions\InvalidFieldType` · `Phalcon\Filter\Validation\Exceptions\InvalidFilterService` · `Phalcon\Filter\Validation\Exceptions\InvalidValidationData` · `Phalcon\Filter\Validation\Exceptions\InvalidValidator` · `Phalcon\Filter\Validation\Exceptions\InvalidValidatorScope` · `Phalcon\Filter\Validation\Exceptions\NoDataToValidate` · `Phalcon\Filter\Validation\Exceptions\NoValidators` · `Phalcon\Filter\Validation\Exceptions\ValidationEntityNotObject` · `Phalcon\Filter\Validation\ValidationInterface` · `Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages`

### Method Summary

<ApiItem href="#filtervalidation-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"validators","default":"[]"}]}>
Phalcon\Filter\Validation constructor
</ApiItem>
<ApiItem href="#filtervalidation-add" visibility="public" name="add" returnType="static" params={[{"type":"mixed","name":"field","default":null},{"type":"ValidatorInterface","name":"validator","default":null}]}>
Adds a validator to a field
</ApiItem>
<ApiItem href="#filtervalidation-appendmessage" visibility="public" name="appendMessage" returnType="static" params={[{"type":"MessageInterface","name":"message","default":null}]}>
Appends a message to the messages list
</ApiItem>
<ApiItem href="#filtervalidation-bind" visibility="public" name="bind" returnType="static" params={[{"type":"mixed","name":"entity","default":null},{"type":"mixed","name":"data","default":null},{"type":"array","name":"whitelist","default":"[]"}]}>
Assigns the data to an entity
</ApiItem>
<ApiItem href="#filtervalidation-fails" visibility="public" name="fails" returnType="bool" params={[]}>
Verify if validation fails by verifying if there are messages in the current validation
</ApiItem>
<ApiItem href="#filtervalidation-getdata" visibility="public" name="getData" returnType="mixed" params={[]}>
</ApiItem>
<ApiItem href="#filtervalidation-getdefaultmessage" visibility="public" name="getDefaultMessage" returnType="string" params={[{"type":"string","name":"validatorClassName","default":null}]}>
Returns the default message registered for a validator class, or an
</ApiItem>
<ApiItem href="#filtervalidation-getentity" visibility="public" name="getEntity" returnType="mixed" params={[]}>
Returns the bound entity
</ApiItem>
<ApiItem href="#filtervalidation-getfilters" visibility="public" name="getFilters" returnType="mixed|null" params={[{"type":"string|null","name":"field","default":"null"}]}>
Returns all the filters or a specific one
</ApiItem>
<ApiItem href="#filtervalidation-getlabel" visibility="public" name="getLabel" returnType="string" params={[{"type":"mixed","name":"field","default":null}]}>
Get label for field
</ApiItem>
<ApiItem href="#filtervalidation-getmessages" visibility="public" name="getMessages" returnType="Messages" params={[]}>
Returns the registered validators
</ApiItem>
<ApiItem href="#filtervalidation-getvalidators" visibility="public" name="getValidators" returnType="array" params={[]}>
Returns the validators added to the validation
</ApiItem>
<ApiItem href="#filtervalidation-getvalue" visibility="public" name="getValue" returnType="mixed|null" params={[{"type":"string","name":"field","default":null}]}>
Gets the value to validate in the array/object data source
</ApiItem>
<ApiItem href="#filtervalidation-getvaluebydata" visibility="public" name="getValueByData" returnType="mixed|null" params={[{"type":"mixed","name":"data","default":null},{"type":"string","name":"field","default":null}]}>
Gets the value to validate in the array/object data source
</ApiItem>
<ApiItem href="#filtervalidation-getvaluebyentity" visibility="public" name="getValueByEntity" returnType="mixed|null" params={[{"type":"mixed","name":"entity","default":null},{"type":"string","name":"field","default":null}]}>
Gets the value to validate in the object entity source
</ApiItem>
<ApiItem href="#filtervalidation-rule" visibility="public" name="rule" returnType="static" params={[{"type":"mixed","name":"field","default":null},{"type":"ValidatorInterface","name":"validator","default":null}]}>
Alias of `add` method
</ApiItem>
<ApiItem href="#filtervalidation-rules" visibility="public" name="rules" returnType="static" params={[{"type":"mixed","name":"field","default":null},{"type":"array","name":"validators","default":null}]}>
Adds the validators to a field
</ApiItem>
<ApiItem href="#filtervalidation-setdefaultmessages" visibility="public" name="setDefaultMessages" returnType="array" params={[{"type":"array","name":"messages","default":"[]"}]}>
Registers default messages for validators, keyed by validator class
</ApiItem>
<ApiItem href="#filtervalidation-setentity" visibility="public" name="setEntity" returnType="void" params={[{"type":"mixed","name":"entity","default":null}]}>
Sets the bound entity
</ApiItem>
<ApiItem href="#filtervalidation-setfilters" visibility="public" name="setFilters" returnType="static" params={[{"type":"mixed","name":"field","default":null},{"type":"mixed","name":"filters","default":null}]}>
Adds filters to the field
</ApiItem>
<ApiItem href="#filtervalidation-setlabels" visibility="public" name="setLabels" returnType="void" params={[{"type":"array","name":"labels","default":null}]}>
Adds labels for fields
</ApiItem>
<ApiItem href="#filtervalidation-setvalidators" visibility="public" name="setValidators" returnType="static" params={[{"type":"array","name":"validators","default":null}]}>
Sets the validator array
</ApiItem>
<ApiItem href="#filtervalidation-validate" visibility="public" name="validate" returnType="Messages|bool" params={[{"type":"mixed","name":"data","default":"null"},{"type":"mixed","name":"entity","default":"null"},{"type":"array","name":"whitelist","default":"[]"}]}>
Validate a set of data according to a set of rules
</ApiItem>
<ApiItem href="#filtervalidation-prechecking" visibility="protected" name="preChecking" returnType="bool" params={[{"type":"mixed","name":"field","default":null},{"type":"ValidatorInterface","name":"validator","default":null}]}>
Internal validations, if it returns true, then skip the current validator
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="combinedFieldsValidators" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="data" type="mixed" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="defaultMessages" type="array" default="[]">
Default messages for validators, keyed by validator class name

Declared without an array initializer on purpose: an initialized static
array makes Zephir emit a zephir_init_static_properties() function that
fails to compile in the single-file build. It is null until first set
and treated as an empty array by the accessors below.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="entity" type="object|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="filters" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="labels" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="messages" type="Messages" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="validators" type="array" default="[]">
List of validators
</ApiItem>
<ApiItem kind="property" visibility="protected" name="values" type="array" default="[]">
Calculated values
</ApiItem>
<ApiItem kind="property" visibility="protected" name="whitelist" type="array" default="[]">
</ApiItem>

### Methods

<h4 id="filtervalidation-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $validators = [] );
```

Phalcon\Filter\Validation constructor

<h4 id="filtervalidation-add"><code>add()</code></h4>

```php
public function add(
mixed $field,
ValidatorInterface $validator
): static;
```

Adds a validator to a field

<h4 id="filtervalidation-appendmessage"><code>appendMessage()</code></h4>

```php
public function appendMessage( MessageInterface $message ): static;
```

Appends a message to the messages list

<h4 id="filtervalidation-bind"><code>bind()</code></h4>

```php
public function bind(
mixed $entity,
mixed $data,
array $whitelist = []
): static;
```

Assigns the data to an entity
The entity is used to obtain the validation values

```php
$entity = new Author();
$fields = ['name', 'email', 'imageUrl'];
$validation = new AuthorValidation();
$validation->bind($entity, $_POST, $fields);
$validation->validate();
```

<h4 id="filtervalidation-fails"><code>fails()</code></h4>

```php
public function fails(): bool;
```

Verify if validation fails by verifying if there are messages in the current validation

<h4 id="filtervalidation-getdata"><code>getData()</code></h4>

```php
public function getData(): mixed;
```

<h4 id="filtervalidation-getdefaultmessage"><code>getDefaultMessage()</code></h4>

```php
public static function getDefaultMessage( string $validatorClassName ): string;
```

Returns the default message registered for a validator class, or an
empty string when none has been registered.

<h4 id="filtervalidation-getentity"><code>getEntity()</code></h4>

```php
public function getEntity(): mixed;
```

Returns the bound entity

<h4 id="filtervalidation-getfilters"><code>getFilters()</code></h4>

```php
public function getFilters( string|null $field = null ): mixed|null;
```

Returns all the filters or a specific one

<h4 id="filtervalidation-getlabel"><code>getLabel()</code></h4>

```php
public function getLabel( mixed $field ): string;
```

Get label for field

<h4 id="filtervalidation-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): Messages;
```

Returns the registered validators

<h4 id="filtervalidation-getvalidators"><code>getValidators()</code></h4>

```php
public function getValidators(): array;
```

Returns the validators added to the validation

<h4 id="filtervalidation-getvalue"><code>getValue()</code></h4>

```php
public function getValue( string $field ): mixed|null;
```

Gets the value to validate in the array/object data source

<h4 id="filtervalidation-getvaluebydata"><code>getValueByData()</code></h4>

```php
public function getValueByData(
mixed $data,
string $field
): mixed|null;
```

Gets the value to validate in the array/object data source

<h4 id="filtervalidation-getvaluebyentity"><code>getValueByEntity()</code></h4>

```php
public function getValueByEntity(
mixed $entity,
string $field
): mixed|null;
```

Gets the value to validate in the object entity source

<h4 id="filtervalidation-rule"><code>rule()</code></h4>

```php
public function rule(
mixed $field,
ValidatorInterface $validator
): static;
```

Alias of `add` method

@todo remove this

<h4 id="filtervalidation-rules"><code>rules()</code></h4>

```php
public function rules(
mixed $field,
array $validators
): static;
```

Adds the validators to a field

<h4 id="filtervalidation-setdefaultmessages"><code>setDefaultMessages()</code></h4>

```php
public static function setDefaultMessages( array $messages = [] ): array;
```

Registers default messages for validators, keyed by validator class
name. A registered default is used when a validator does not define its
own message; a message set on the validator instance still wins. Calls
are merged, so defaults can be registered incrementally.

<h4 id="filtervalidation-setentity"><code>setEntity()</code></h4>

```php
public function setEntity( mixed $entity ): void;
```

Sets the bound entity

<h4 id="filtervalidation-setfilters"><code>setFilters()</code></h4>

```php
public function setFilters(
mixed $field,
mixed $filters
): static;
```

Adds filters to the field

<h4 id="filtervalidation-setlabels"><code>setLabels()</code></h4>

```php
public function setLabels( array $labels ): void;
```

Adds labels for fields

<h4 id="filtervalidation-setvalidators"><code>setValidators()</code></h4>

```php
public function setValidators( array $validators ): static;
```

Sets the validator array

<h4 id="filtervalidation-validate"><code>validate()</code></h4>

```php
public function validate(
mixed $data = null,
mixed $entity = null,
array $whitelist = []
): Messages|bool;
```

Validate a set of data according to a set of rules

You can use $validation->bind(entity, data, whitelist)->validate()
When you use bind(), the this->data is already set, so you can reuse it here

```php
// using bind() with $whitelist fields
$entity = new Author();
$fields = ['name', 'email', 'imageUrl'];
$validation = new AuthorValidation();
$validation->bind($entity, $_POST, $fields);
$validation->validate();

// directly using validate
$validation = new AuthorValidation();
$validation->validate($_POST, $entity, $fields);
```

<h4 id="filtervalidation-prechecking"><code>preChecking()</code></h4>

```php
protected function preChecking(
mixed $field,
ValidatorInterface $validator
): bool;
```

Internal validations, if it returns true, then skip the current validator

## Filter\Validation\AbstractCombinedFieldsValidator

Abstract

This is a base class for combined fields validators

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\AbstractCombinedFieldsValidator`**
- [`Phalcon\Filter\Validation\Validator\Uniqueness`](#filtervalidationvalidatoruniqueness)

## Filter\Validation\AbstractValidator

Abstract

This is a base class for validators

- **`Phalcon\Filter\Validation\AbstractValidator`** - implements [`Phalcon\Filter\Validation\ValidatorInterface`](#filtervalidationvalidatorinterface)
- [`Phalcon\Filter\Validation\AbstractCombinedFieldsValidator`](#filtervalidationabstractcombinedfieldsvalidator)
- [`Phalcon\Filter\Validation\AbstractValidatorComposite`](#filtervalidationabstractvalidatorcomposite)
- [`Phalcon\Filter\Validation\Validator\Alnum`](#filtervalidationvalidatoralnum)
- [`Phalcon\Filter\Validation\Validator\Alpha`](#filtervalidationvalidatoralpha)
- [`Phalcon\Filter\Validation\Validator\Between`](#filtervalidationvalidatorbetween)
- [`Phalcon\Filter\Validation\Validator\Callback`](#filtervalidationvalidatorcallback)
- [`Phalcon\Filter\Validation\Validator\Confirmation`](#filtervalidationvalidatorconfirmation)
- [`Phalcon\Filter\Validation\Validator\CreditCard`](#filtervalidationvalidatorcreditcard)
- [`Phalcon\Filter\Validation\Validator\Date`](#filtervalidationvalidatordate)
- [`Phalcon\Filter\Validation\Validator\Digit`](#filtervalidationvalidatordigit)
- [`Phalcon\Filter\Validation\Validator\Email`](#filtervalidationvalidatoremail)
- [`Phalcon\Filter\Validation\Validator\ExclusionIn`](#filtervalidationvalidatorexclusionin)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- [`Phalcon\Filter\Validation\Validator\Files`](#filtervalidationvalidatorfiles)
- [`Phalcon\Filter\Validation\Validator\Identical`](#filtervalidationvalidatoridentical)
- [`Phalcon\Filter\Validation\Validator\InclusionIn`](#filtervalidationvalidatorinclusionin)
- [`Phalcon\Filter\Validation\Validator\Ip`](#filtervalidationvalidatorip)
- [`Phalcon\Filter\Validation\Validator\Numericality`](#filtervalidationvalidatornumericality)
- [`Phalcon\Filter\Validation\Validator\PresenceOf`](#filtervalidationvalidatorpresenceof)
- [`Phalcon\Filter\Validation\Validator\Regex`](#filtervalidationvalidatorregex)
- [`Phalcon\Filter\Validation\Validator\StringLength\Max`](#filtervalidationvalidatorstringlengthmax)
- [`Phalcon\Filter\Validation\Validator\StringLength\Min`](#filtervalidationvalidatorstringlengthmin)
- [`Phalcon\Filter\Validation\Validator\Url`](#filtervalidationvalidatorurl)

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Exceptions\FieldNotPrintable` · `Phalcon\Messages\Message` · `Phalcon\Support\Helper\Arr\Whitelist`

### Method Summary

<ApiItem href="#filtervalidationabstractvalidator-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Phalcon\Filter\Validation\Validator constructor
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-getoption" visibility="public" name="getOption" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns an option in the validator's options
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-gettemplate" visibility="public" name="getTemplate" returnType="string" params={[{"type":"string|null","name":"field","default":"null"}]}>
Get the template message
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-gettemplates" visibility="public" name="getTemplates" returnType="array" params={[]}>
Get templates collection object
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-hasoption" visibility="public" name="hasOption" returnType="bool" params={[{"type":"string","name":"key","default":null}]}>
Checks if an option is defined
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-isallowempty" visibility="public" name="isAllowEmpty" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"string","name":"field","default":null}]}>
Checks whether the field can be considered empty and therefore
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-messagefactory" visibility="public" name="messageFactory" returnType="Message" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null},{"type":"array","name":"replacements","default":"[]"}]}>
Create a default message by factory
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-setoption" visibility="public" name="setOption" returnType="void" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"value","default":null}]}>
Sets an option in the validator
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-settemplate" visibility="public" name="setTemplate" returnType="ValidatorInterface" params={[{"type":"string","name":"template","default":null}]}>
Set a new template message
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-settemplates" visibility="public" name="setTemplates" returnType="ValidatorInterface" params={[{"type":"array","name":"templates","default":null}]}>
Clear current templates and set new from an array,
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-allowempty" visibility="protected" name="allowEmpty" returnType="bool" params={[{"type":"mixed","name":"field","default":null},{"type":"mixed","name":"value","default":null}]}>
Checks if field can be empty.
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-checkarray" visibility="protected" name="checkArray" returnType="mixed" params={[{"type":"mixed","name":"value","default":null},{"type":"string","name":"field","default":null}]}>
Checks if a value is an array and returns the element based on the
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-preparecode" visibility="protected" name="prepareCode" returnType="int" params={[{"type":"string","name":"field","default":null}]}>
Prepares a validation code.
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-preparelabel" visibility="protected" name="prepareLabel" returnType="mixed" params={[{"type":"Validation","name":"validation","default":null},{"type":"string","name":"field","default":null}]}>
Prepares a label for the field.
</ApiItem>
<ApiItem href="#filtervalidationabstractvalidator-rejectnonstringable" visibility="protected" name="rejectNonStringable" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null},{"type":"mixed","name":"value","default":null}]}>
Rejects a value that cannot be a string: an array, or an object without
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="null">
Message template
</ApiItem>
<ApiItem kind="property" visibility="protected" name="templateChanged" type="bool" default="false">
Whether the template/message has been explicitly assigned on the
instance (constructor `message`/`template` option or setTemplate()).
While false, `template` still holds the validator's class default and a
global default registered via Validation::setDefaultMessages() applies.
</ApiItem>
<ApiItem kind="property" visibility="protected" name="templates" type="array" default="[]">
Message templates
</ApiItem>

### Methods

<h4 id="filtervalidationabstractvalidator-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Phalcon\Filter\Validation\Validator constructor

<h4 id="filtervalidationabstractvalidator-getoption"><code>getOption()</code></h4>

```php
public function getOption(
string $key,
mixed $defaultValue = null
): mixed;
```

Returns an option in the validator's options
Returns null if the option hasn't set

<h4 id="filtervalidationabstractvalidator-gettemplate"><code>getTemplate()</code></h4>

```php
public function getTemplate( string|null $field = null ): string;
```

Get the template message

<h4 id="filtervalidationabstractvalidator-gettemplates"><code>getTemplates()</code></h4>

```php
public function getTemplates(): array;
```

Get templates collection object

<h4 id="filtervalidationabstractvalidator-hasoption"><code>hasOption()</code></h4>

```php
public function hasOption( string $key ): bool;
```

Checks if an option is defined

<h4 id="filtervalidationabstractvalidator-isallowempty"><code>isAllowEmpty()</code></h4>

```php
public function isAllowEmpty(
Validation $validation,
string $field
): bool;
```

Checks whether the field can be considered empty and therefore
skipped, honoring the `allowEmpty` option (boolean flag, list of
empty values, or per-field map).

<h4 id="filtervalidationabstractvalidator-messagefactory"><code>messageFactory()</code></h4>

```php
public function messageFactory(
Validation $validation,
mixed $field,
array $replacements = []
): Message;
```

Create a default message by factory

<h4 id="filtervalidationabstractvalidator-setoption"><code>setOption()</code></h4>

```php
public function setOption(
string $key,
mixed $value
): void;
```

Sets an option in the validator

<h4 id="filtervalidationabstractvalidator-settemplate"><code>setTemplate()</code></h4>

```php
public function setTemplate( string $template ): ValidatorInterface;
```

Set a new template message

<h4 id="filtervalidationabstractvalidator-settemplates"><code>setTemplates()</code></h4>

```php
public function setTemplates( array $templates ): ValidatorInterface;
```

Clear current templates and set new from an array,

<h4 id="filtervalidationabstractvalidator-validate"><code>validate()</code></h4>

```php
abstract public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

<h4 id="filtervalidationabstractvalidator-allowempty"><code>allowEmpty()</code></h4>

```php
protected function allowEmpty(
mixed $field,
mixed $value
): bool;
```

Checks if field can be empty.

<h4 id="filtervalidationabstractvalidator-checkarray"><code>checkArray()</code></h4>

```php
protected function checkArray(
mixed $value,
string $field
): mixed;
```

Checks if a value is an array and returns the element based on the
passed field name

<h4 id="filtervalidationabstractvalidator-preparecode"><code>prepareCode()</code></h4>

```php
protected function prepareCode( string $field ): int;
```

Prepares a validation code.

<h4 id="filtervalidationabstractvalidator-preparelabel"><code>prepareLabel()</code></h4>

```php
protected function prepareLabel(
Validation $validation,
string $field
): mixed;
```

Prepares a label for the field.

<h4 id="filtervalidationabstractvalidator-rejectnonstringable"><code>rejectNonStringable()</code></h4>

```php
protected function rejectNonStringable(
Validation $validation,
mixed $field,
mixed $value
): bool;
```

Rejects a value that cannot be a string: an array, or an object without
__toString(). A cast would turn an array into the constant "Array",
which satisfies the string checks. Appends the message and returns
true when the value is rejected.

## Filter\Validation\AbstractValidatorComposite

Abstract

This is a base class for combined fields validators

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Filter\Validation\Traits\ValidatorCompositeTrait directly (with
extends AbstractValidator implements ValidatorCompositeInterface) instead of
extending this.

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\AbstractValidatorComposite`** - implements [`Phalcon\Filter\Validation\ValidatorCompositeInterface`](#filtervalidationvalidatorcompositeinterface)
- [`Phalcon\Filter\Validation\Validator\File`](#filtervalidationvalidatorfile)
- [`Phalcon\Filter\Validation\Validator\StringLength`](#filtervalidationvalidatorstringlength)

`Phalcon\Filter\Validation\Traits\ValidatorCompositeTrait`

## Filter\Validation\Exception

Class

Exceptions thrown in Phalcon\Filter\Validation\* classes will use this class

- `\Exception`
- **`Phalcon\Filter\Validation\Exception`**
- [`Phalcon\Filter\Validation\Exceptions\FieldNotPrintable`](#filtervalidationexceptionsfieldnotprintable)
- [`Phalcon\Filter\Validation\Exceptions\FilterServiceUnavailable`](#filtervalidationexceptionsfilterserviceunavailable)
- [`Phalcon\Filter\Validation\Exceptions\InvalidAllowedTypes`](#filtervalidationexceptionsinvalidallowedtypes)
- [`Phalcon\Filter\Validation\Exceptions\InvalidCallbackReturn`](#filtervalidationexceptionsinvalidcallbackreturn)
- [`Phalcon\Filter\Validation\Exceptions\InvalidDomainOption`](#filtervalidationexceptionsinvaliddomainoption)
- [`Phalcon\Filter\Validation\Exceptions\InvalidFieldType`](#filtervalidationexceptionsinvalidfieldtype)
- [`Phalcon\Filter\Validation\Exceptions\InvalidFilterService`](#filtervalidationexceptionsinvalidfilterservice)
- [`Phalcon\Filter\Validation\Exceptions\InvalidStrictOption`](#filtervalidationexceptionsinvalidstrictoption)
- [`Phalcon\Filter\Validation\Exceptions\InvalidValidationData`](#filtervalidationexceptionsinvalidvalidationdata)
- [`Phalcon\Filter\Validation\Exceptions\InvalidValidator`](#filtervalidationexceptionsinvalidvalidator)
- [`Phalcon\Filter\Validation\Exceptions\InvalidValidatorScope`](#filtervalidationexceptionsinvalidvalidatorscope)
- [`Phalcon\Filter\Validation\Exceptions\MissingMbstring`](#filtervalidationexceptionsmissingmbstring)
- [`Phalcon\Filter\Validation\Exceptions\NoDataToValidate`](#filtervalidationexceptionsnodatatovalidate)
- [`Phalcon\Filter\Validation\Exceptions\NoValidators`](#filtervalidationexceptionsnovalidators)
- [`Phalcon\Filter\Validation\Exceptions\NoValidatorsInComposite`](#filtervalidationexceptionsnovalidatorsincomposite)
- [`Phalcon\Filter\Validation\Exceptions\UniquenessConversionMustBeArray`](#filtervalidationexceptionsuniquenessconversionmustbearray)
- [`Phalcon\Filter\Validation\Exceptions\UniquenessModelRequired`](#filtervalidationexceptionsuniquenessmodelrequired)
- [`Phalcon\Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel`](#filtervalidationexceptionsuniquenessonlyforphalconmodel)
- [`Phalcon\Filter\Validation\Exceptions\ValidationEntityNotObject`](#filtervalidationexceptionsvalidationentitynotobject)

## Filter\Validation\Exceptions\FieldNotPrintable

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\FieldNotPrintable`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsfieldnotprintable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsfieldnotprintable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\FilterServiceUnavailable

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\FilterServiceUnavailable`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsfilterserviceunavailable-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsfilterserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidAllowedTypes

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidAllowedTypes`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsinvalidallowedtypes-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsinvalidallowedtypes-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidCallbackReturn

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidCallbackReturn`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsinvalidcallbackreturn-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsinvalidcallbackreturn-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidDomainOption

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidDomainOption`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsinvaliddomainoption-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsinvaliddomainoption-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidFieldType

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidFieldType`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsinvalidfieldtype-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsinvalidfieldtype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidFilterService

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidFilterService`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsinvalidfilterservice-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsinvalidfilterservice-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidStrictOption

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidStrictOption`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsinvalidstrictoption-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsinvalidstrictoption-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidValidationData

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidValidationData`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsinvalidvalidationdata-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsinvalidvalidationdata-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidValidator

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidValidator`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsinvalidvalidator-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsinvalidvalidator-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidValidatorScope

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidValidatorScope`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsinvalidvalidatorscope-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsinvalidvalidatorscope-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\MissingMbstring

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\MissingMbstring`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsmissingmbstring-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsmissingmbstring-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\NoDataToValidate

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\NoDataToValidate`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsnodatatovalidate-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsnodatatovalidate-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\NoValidators

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\NoValidators`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsnovalidators-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsnovalidators-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\NoValidatorsInComposite

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\NoValidatorsInComposite`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsnovalidatorsincomposite-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"className","default":null}]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsnovalidatorsincomposite-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Filter\Validation\Exceptions\UniquenessConversionMustBeArray

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\UniquenessConversionMustBeArray`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsuniquenessconversionmustbearray-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsuniquenessconversionmustbearray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\UniquenessModelRequired

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\UniquenessModelRequired`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsuniquenessmodelrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsuniquenessmodelrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsuniquenessonlyforphalconmodel-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsuniquenessonlyforphalconmodel-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\ValidationEntityNotObject

Class

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\ValidationEntityNotObject`**

`Phalcon\Filter\Validation\Exception`

### Method Summary

<ApiItem href="#filtervalidationexceptionsvalidationentitynotobject-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

### Methods

<h4 id="filtervalidationexceptionsvalidationentitynotobject-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Traits\ValidatorCompositeTrait

Trait

Shared validator collection state and combined validation for composite
validators.

- **`Phalcon\Filter\Validation\Traits\ValidatorCompositeTrait`**

`Phalcon\Contracts\Filter\FilterTypes`

[`Phalcon\Filter\Validation\AbstractValidatorComposite`](#filtervalidationabstractvalidatorcomposite)

### Method Summary

<ApiItem href="#filtervalidationtraitsvalidatorcompositetrait-getvalidators" visibility="public" name="getValidators" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#filtervalidationtraitsvalidatorcompositetrait-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"\\Phalcon\\Filter\\Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="validators" type="array" default="null">
@todo Use a default [] once Zephir supports array trait defaults
</ApiItem>

### Methods

<h4 id="filtervalidationtraitsvalidatorcompositetrait-getvalidators"><code>getValidators()</code></h4>

```php
public function getValidators(): array;
```

<h4 id="filtervalidationtraitsvalidatorcompositetrait-validate"><code>validate()</code></h4>

```php
public function validate(
\Phalcon\Filter\Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\ValidationInterface

Interface

Interface for the Phalcon\Filter\Validation component

- **`Phalcon\Filter\Validation\ValidationInterface`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Di\Injectable` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages`

### Method Summary

<ApiItem href="#filtervalidationvalidationinterface-add" visibility="public" name="add" returnType="ValidationInterface" params={[{"type":"mixed","name":"field","default":null},{"type":"ValidatorInterface","name":"validator","default":null}]}>
Adds a validator to a field
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-appendmessage" visibility="public" name="appendMessage" returnType="ValidationInterface" params={[{"type":"MessageInterface","name":"message","default":null}]}>
Appends a message to the messages list
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-bind" visibility="public" name="bind" returnType="ValidationInterface" params={[{"type":"mixed","name":"entity","default":null},{"type":"mixed","name":"data","default":null},{"type":"array","name":"whitelist","default":"[]"}]}>
Assigns the data to an entity
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-getentity" visibility="public" name="getEntity" returnType="mixed" params={[]}>
Returns the bound entity
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-getfilters" visibility="public" name="getFilters" returnType="mixed|null" params={[{"type":"string|null","name":"field","default":"null"}]}>
Returns all the filters or a specific one
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-getlabel" visibility="public" name="getLabel" returnType="string" params={[{"type":"string","name":"field","default":null}]}>
Get label for field
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-getmessages" visibility="public" name="getMessages" returnType="Messages" params={[]}>
Returns the registered validators
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-getvalidators" visibility="public" name="getValidators" returnType="array" params={[]}>
Returns the validators added to the validation
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-getvalue" visibility="public" name="getValue" returnType="mixed|null" params={[{"type":"string","name":"field","default":null}]}>
Gets the a value to validate in the array/object data source
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-rule" visibility="public" name="rule" returnType="ValidationInterface" params={[{"type":"mixed","name":"field","default":null},{"type":"ValidatorInterface","name":"validator","default":null}]}>
Alias of `add` method
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-rules" visibility="public" name="rules" returnType="ValidationInterface" params={[{"type":"string","name":"field","default":null},{"type":"array","name":"validators","default":null}]}>
Adds the validators to a field
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-setfilters" visibility="public" name="setFilters" returnType="ValidationInterface" params={[{"type":"string","name":"field","default":null},{"type":"mixed","name":"filters","default":null}]}>
Adds filters to the field
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-setlabels" visibility="public" name="setLabels" returnType="void" params={[{"type":"array","name":"labels","default":null}]}>
Adds labels for fields
</ApiItem>
<ApiItem href="#filtervalidationvalidationinterface-validate" visibility="public" name="validate" returnType="Messages|bool" params={[{"type":"mixed","name":"data","default":"null"},{"type":"mixed","name":"entity","default":"null"},{"type":"array","name":"whitelist","default":"[]"}]}>
Validate a set of data according to a set of rules
</ApiItem>

### Methods

<h4 id="filtervalidationvalidationinterface-add"><code>add()</code></h4>

```php
public function add(
mixed $field,
ValidatorInterface $validator
): ValidationInterface;
```

Adds a validator to a field

<h4 id="filtervalidationvalidationinterface-appendmessage"><code>appendMessage()</code></h4>

```php
public function appendMessage( MessageInterface $message ): ValidationInterface;
```

Appends a message to the messages list

<h4 id="filtervalidationvalidationinterface-bind"><code>bind()</code></h4>

```php
public function bind(
mixed $entity,
mixed $data,
array $whitelist = []
): ValidationInterface;
```

Assigns the data to an entity
The entity is used to obtain the validation values

<h4 id="filtervalidationvalidationinterface-getentity"><code>getEntity()</code></h4>

```php
public function getEntity(): mixed;
```

Returns the bound entity

<h4 id="filtervalidationvalidationinterface-getfilters"><code>getFilters()</code></h4>

```php
public function getFilters( string|null $field = null ): mixed|null;
```

Returns all the filters or a specific one

<h4 id="filtervalidationvalidationinterface-getlabel"><code>getLabel()</code></h4>

```php
public function getLabel( string $field ): string;
```

Get label for field

<h4 id="filtervalidationvalidationinterface-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): Messages;
```

Returns the registered validators

<h4 id="filtervalidationvalidationinterface-getvalidators"><code>getValidators()</code></h4>

```php
public function getValidators(): array;
```

Returns the validators added to the validation

<h4 id="filtervalidationvalidationinterface-getvalue"><code>getValue()</code></h4>

```php
public function getValue( string $field ): mixed|null;
```

Gets the a value to validate in the array/object data source

<h4 id="filtervalidationvalidationinterface-rule"><code>rule()</code></h4>

```php
public function rule(
mixed $field,
ValidatorInterface $validator
): ValidationInterface;
```

Alias of `add` method

<h4 id="filtervalidationvalidationinterface-rules"><code>rules()</code></h4>

```php
public function rules(
string $field,
array $validators
): ValidationInterface;
```

Adds the validators to a field

<h4 id="filtervalidationvalidationinterface-setfilters"><code>setFilters()</code></h4>

```php
public function setFilters(
string $field,
mixed $filters
): ValidationInterface;
```

Adds filters to the field

<h4 id="filtervalidationvalidationinterface-setlabels"><code>setLabels()</code></h4>

```php
public function setLabels( array $labels ): void;
```

Adds labels for fields

<h4 id="filtervalidationvalidationinterface-validate"><code>validate()</code></h4>

```php
public function validate(
mixed $data = null,
mixed $entity = null,
array $whitelist = []
): Messages|bool;
```

Validate a set of data according to a set of rules

## Filter\Validation\ValidatorCompositeInterface

Interface

This is a base class for combined fields validators

- **`Phalcon\Filter\Validation\ValidatorCompositeInterface`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation`

### Method Summary

<ApiItem href="#filtervalidationvalidatorcompositeinterface-getvalidators" visibility="public" name="getValidators" returnType="array" params={[]}>
Executes the validation
</ApiItem>
<ApiItem href="#filtervalidationvalidatorcompositeinterface-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorcompositeinterface-getvalidators"><code>getValidators()</code></h4>

```php
public function getValidators(): array;
```

Executes the validation

<h4 id="filtervalidationvalidatorcompositeinterface-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\ValidatorFactory

Class

- [`Phalcon\Factory\AbstractConfigFactory`](/5.20/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.20/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Filter\Validation\ValidatorFactory`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Filter\Validation\Validator\Alnum` · `Phalcon\Filter\Validation\Validator\Alpha` · `Phalcon\Filter\Validation\Validator\Between` · `Phalcon\Filter\Validation\Validator\Callback` · `Phalcon\Filter\Validation\Validator\Confirmation` · `Phalcon\Filter\Validation\Validator\CreditCard` · `Phalcon\Filter\Validation\Validator\Date` · `Phalcon\Filter\Validation\Validator\Digit` · `Phalcon\Filter\Validation\Validator\Email` · `Phalcon\Filter\Validation\Validator\Exception` · `Phalcon\Filter\Validation\Validator\ExclusionIn` · `Phalcon\Filter\Validation\Validator\File` · `Phalcon\Filter\Validation\Validator\Identical` · `Phalcon\Filter\Validation\Validator\InclusionIn` · `Phalcon\Filter\Validation\Validator\Ip` · `Phalcon\Filter\Validation\Validator\Numericality` · `Phalcon\Filter\Validation\Validator\PresenceOf` · `Phalcon\Filter\Validation\Validator\Regex` · `Phalcon\Filter\Validation\Validator\StringLength` · `Phalcon\Filter\Validation\Validator\Uniqueness` · `Phalcon\Filter\Validation\Validator\Url`

### Method Summary

<ApiItem href="#filtervalidationvalidatorfactory-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"services","default":"[]"}]}>
Constructor.
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfactory-newinstance" visibility="public" name="newInstance" returnType="ValidatorInterface" params={[{"type":"string","name":"name","default":null}]}>
Creates a new instance
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfactory-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfactory-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the available adapters
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

Constructor.

<h4 id="filtervalidationvalidatorfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name ): ValidatorInterface;
```

Creates a new instance

<h4 id="filtervalidationvalidatorfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="filtervalidationvalidatorfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

## Filter\Validation\ValidatorInterface

Interface

Interface for Phalcon\Filter\Validation\AbstractValidator

- **`Phalcon\Filter\Validation\ValidatorInterface`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation`

### Method Summary

<ApiItem href="#filtervalidationvalidatorinterface-getoption" visibility="public" name="getOption" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns an option in the validator's options
</ApiItem>
<ApiItem href="#filtervalidationvalidatorinterface-gettemplate" visibility="public" name="getTemplate" returnType="string" params={[{"type":"string","name":"field","default":null}]}>
Get the template message
</ApiItem>
<ApiItem href="#filtervalidationvalidatorinterface-gettemplates" visibility="public" name="getTemplates" returnType="array" params={[]}>
Get message templates
</ApiItem>
<ApiItem href="#filtervalidationvalidatorinterface-hasoption" visibility="public" name="hasOption" returnType="bool" params={[{"type":"string","name":"key","default":null}]}>
Checks if an option is defined
</ApiItem>
<ApiItem href="#filtervalidationvalidatorinterface-settemplate" visibility="public" name="setTemplate" returnType="ValidatorInterface" params={[{"type":"string","name":"template","default":null}]}>
Set a new template message
</ApiItem>
<ApiItem href="#filtervalidationvalidatorinterface-settemplates" visibility="public" name="setTemplates" returnType="ValidatorInterface" params={[{"type":"array","name":"templates","default":null}]}>
Clear current template and set new from an array,
</ApiItem>
<ApiItem href="#filtervalidationvalidatorinterface-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorinterface-getoption"><code>getOption()</code></h4>

```php
public function getOption(
string $key,
mixed $defaultValue = null
): mixed;
```

Returns an option in the validator's options
Returns null if the option hasn't set

<h4 id="filtervalidationvalidatorinterface-gettemplate"><code>getTemplate()</code></h4>

```php
public function getTemplate( string $field ): string;
```

Get the template message

<h4 id="filtervalidationvalidatorinterface-gettemplates"><code>getTemplates()</code></h4>

```php
public function getTemplates(): array;
```

Get message templates

<h4 id="filtervalidationvalidatorinterface-hasoption"><code>hasOption()</code></h4>

```php
public function hasOption( string $key ): bool;
```

Checks if an option is defined

<h4 id="filtervalidationvalidatorinterface-settemplate"><code>setTemplate()</code></h4>

```php
public function setTemplate( string $template ): ValidatorInterface;
```

Set a new template message

<h4 id="filtervalidationvalidatorinterface-settemplates"><code>setTemplates()</code></h4>

```php
public function setTemplates( array $templates ): ValidatorInterface;
```

Clear current template and set new from an array,

<h4 id="filtervalidationvalidatorinterface-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Alnum

Class

Check for alphanumeric character(s)

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Alnum as AlnumValidator;

$validator = new Validation();

$validator->add(
"username",
new AlnumValidator(
    [
        "message" => ":field must contain only alphanumeric characters",
    ]
)
);

$validator->add(
[
    "username",
    "name",
],
new AlnumValidator(
    [
        "message" => [
            "username" => "username must contain only alphanumeric characters",
            "name"     => "name must contain only alphanumeric characters",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Alnum`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatoralnum-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatoralnum-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must contain only letters and numbers&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatoralnum-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatoralnum-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Alpha

Class

Check for alphabetic character(s)

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Alpha as AlphaValidator;

$validator = new Validation();

$validator->add(
"username",
new AlphaValidator(
    [
        "message" => ":field must contain only letters",
    ]
)
);

$validator->add(
[
    "username",
    "name",
],
new AlphaValidator(
    [
        "message" => [
            "username" => "username must contain only letters",
            "name"     => "name must contain only letters",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Alpha`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatoralpha-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatoralpha-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must contain only letters&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatoralpha-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatoralpha-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Between

Class

Validates that a value is between an inclusive range of two values.
For a value x, the test is passed if minimum&lt;=x&lt;=maximum.

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Between;

$validator = new Validation();

$validator->add(
"price",
new Between(
    [
        "minimum" => 0,
        "maximum" => 100,
        "message" => "The price must be between 0 and 100",
    ]
)
);

$validator->add(
[
    "price",
    "amount",
],
new Between(
    [
        "minimum" => [
            "price"  => 0,
            "amount" => 0,
        ],
        "maximum" => [
            "price"  => 100,
            "amount" => 50,
        ],
        "message" => [
            "price"  => "The price must be between 0 and 100",
            "amount" => "The amount must be between 0 and 50",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Between`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatorbetween-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorbetween-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must be within the range of :min to :max&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorbetween-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorbetween-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Callback

Class

Calls user function for validation

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Callback as CallbackValidator;
use Phalcon\Filter\Validation\Validator\Numericality as NumericalityValidator;

$validator = new Validation();

$validator->add(
["user", "admin"],
new CallbackValidator(
    [
        "message" => "There must be only an user or admin set",
        "callback" => function($data) {
            if (!empty($data->getUser()) && !empty($data->getAdmin())) {
                return false;
            }

            return true;
        }
    ]
)
);

$validator->add(
"amount",
new CallbackValidator(
    [
        "callback" => function($data) {
            if (!empty($data->getProduct())) {
                return new NumericalityValidator(
                    [
                        "message" => "Amount must be a number."
                    ]
                );
            }
        }
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Callback`**

`Closure` · `Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exceptions\InvalidCallbackReturn` · `Phalcon\Filter\Validation\ValidatorInterface` · `ReflectionFunction`

### Method Summary

<ApiItem href="#filtervalidationvalidatorcallback-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorcallback-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must match the callback function&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorcallback-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorcallback-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Confirmation

Class

Checks that two values have the same value

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Confirmation;

$validator = new Validation();

$validator->add(
"password",
new Confirmation(
    [
        "message" => "Password does not match confirmation",
        "with"    => "confirmPassword",
    ]
)
);

$validator->add(
[
    "password",
    "email",
],
new Confirmation(
    [
        "message" => [
            "password" => "Password does not match confirmation",
            "email"    => "Email does not match confirmation",
        ],
        "with" => [
            "password" => "confirmPassword",
            "email"    => "confirmEmail",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Confirmation`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exceptions\MissingMbstring` · `Phalcon\Messages\Message` · `Phalcon\Traits\Php\InfoTrait`

### Method Summary

<ApiItem href="#filtervalidationvalidatorconfirmation-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorconfirmation-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>
<ApiItem href="#filtervalidationvalidatorconfirmation-compare" visibility="protected" name="compare" returnType="bool" params={[{"type":"string","name":"a","default":null},{"type":"string","name":"b","default":null}]}>
Compare strings
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must be the same as :with&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorconfirmation-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorconfirmation-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

<h4 id="filtervalidationvalidatorconfirmation-compare"><code>compare()</code></h4>

```php
final protected function compare(
string $a,
string $b
): bool;
```

Compare strings

## Filter\Validation\Validator\CreditCard

Class

Checks if a value has a valid credit card number

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\CreditCard as CreditCardValidator;

$validator = new Validation();

$validator->add(
"creditCard",
new CreditCardValidator(
    [
        "message" => "The credit card number is not valid",
    ]
)
);

$validator->add(
[
    "creditCard",
    "secondCreditCard",
],
new CreditCardValidator(
    [
        "message" => [
            "creditCard"       => "The credit card number is not valid",
            "secondCreditCard" => "The second credit card number is not valid",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\CreditCard`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatorcreditcard-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorcreditcard-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field is not valid for a credit card number&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorcreditcard-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorcreditcard-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Date

Class

Checks if a value is a valid date

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Date as DateValidator;

$validator = new Validation();

$validator->add(
"date",
new DateValidator(
    [
        "format"  => "d-m-Y",
        "message" => "The date is invalid",
    ]
)
);

$validator->add(
[
    "date",
    "anotherDate",
],
new DateValidator(
    [
        "format" => [
            "date"        => "d-m-Y",
            "anotherDate" => "Y-m-d",
        ],
        "message" => [
            "date"        => "The date is invalid",
            "anotherDate" => "The another date is invalid",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Date`**

`DateTime` · `Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatordate-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatordate-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field is not a valid date&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatordate-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatordate-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Digit

Class

Check for numeric character(s)

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Digit as DigitValidator;

$validator = new Validation();

$validator->add(
"height",
new DigitValidator(
    [
        "message" => ":field must be numeric",
    ]
)
);

$validator->add(
[
    "height",
    "width",
],
new DigitValidator(
    [
        "message" => [
            "height" => "height must be numeric",
            "width"  => "width must be numeric",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Digit`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatordigit-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatordigit-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must be numeric&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatordigit-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatordigit-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Email

Class

Checks if a value has a correct e-mail format

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Email as EmailValidator;

$validator = new Validation();

$validator->add(
"email",
new EmailValidator(
    [
        "message" => "The e-mail is not valid",
    ]
)
);

$validator->add(
[
    "email",
    "anotherEmail",
],
new EmailValidator(
    [
        "message" => [
            "email"        => "The e-mail is not valid",
            "anotherEmail" => "The another e-mail is not valid",
        ],
    ]
)
);
```

```php
$validator->add(
"täst@example.com",
new EmailValidator(
    [
        "message" => "The e-mail is not valid",
        "allowUTF8" => true,
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Email`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatoremail-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatoremail-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must be an email address&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatoremail-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatoremail-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Exception

Class

Exceptions thrown in Phalcon\Filter\Validation\Validator\* classes will use this
class

- `\Exception`
- **`Phalcon\Filter\Validation\Validator\Exception`**

## Filter\Validation\Validator\ExclusionIn

Class

Check if a value is not included into a list of values

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\ExclusionIn;

$validator = new Validation();

$validator->add(
"status",
new ExclusionIn(
    [
        "message" => "The status must not be A or B",
        "domain"  => [
            "A",
            "B",
        ],
    ]
)
);

$validator->add(
[
    "status",
    "type",
],
new ExclusionIn(
    [
        "message" => [
            "status" => "The status must not be A or B",
            "type"   => "The type must not be 1 or "
        ],
        "domain" => [
            "status" => [
                "A",
                "B",
            ],
            "type"   => [1, 2],
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\ExclusionIn`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exceptions\InvalidDomainOption` · `Phalcon\Filter\Validation\Exceptions\InvalidStrictOption` · `Phalcon\Messages\Message`

### Method Summary

<ApiItem href="#filtervalidationvalidatorexclusionin-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorexclusionin-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must not be a part of list: :domain&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorexclusionin-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorexclusionin-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\File

Class

Checks if a value has a correct file

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File as FileValidator;

$validator = new Validation();

$validator->add(
"file",
new FileValidator(
    [
        "maxSize"              => "2M",
        "messageSize"          => ":field exceeds the max file size (:size)",
        "allowedTypes"         => [
            "image/jpeg",
            "image/png",
        ],
        "messageType"          => "Allowed file types are :types",
        "maxResolution"        => "800x600",
        "messageMaxResolution" => "Max resolution of :field is :resolution",
        "messageFileEmpty"     => "File is empty",
        "messageIniSize"       => "Ini size is not valid",
        "messageValid"         => "File is not valid",
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new FileValidator(
    [
        "maxSize" => [
            "file"        => "2M",
            "anotherFile" => "4M",
        ],
        "messageSize" => [
            "file"        => "file exceeds the max file size 2M",
            "anotherFile" => "anotherFile exceeds the max file size 4M",
        "allowedTypes" => [
            "file"        => [
                "image/jpeg",
                "image/png",
            ],
            "anotherFile" => [
                "image/gif",
                "image/bmp",
            ],
        ],
        "messageType" => [
            "file"        => "Allowed file types are image/jpeg and image/png",
            "anotherFile" => "Allowed file types are image/gif and image/bmp",
        ],
        "maxResolution" => [
            "file"        => "800x600",
            "anotherFile" => "1024x768",
        ],
        "messageMaxResolution" => [
            "file"        => "Max resolution of file is 800x600",
            "anotherFile" => "Max resolution of file is 1024x768",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\AbstractValidatorComposite`](#filtervalidationabstractvalidatorcomposite)
- **`Phalcon\Filter\Validation\Validator\File`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidatorComposite` · `Phalcon\Filter\Validation\Validator\File\MimeType` · `Phalcon\Filter\Validation\Validator\File\Resolution\AspectRatio` · `Phalcon\Filter\Validation\Validator\File\Resolution\Equal` · `Phalcon\Filter\Validation\Validator\File\Resolution\Max` · `Phalcon\Filter\Validation\Validator\File\Resolution\Min` · `Phalcon\Filter\Validation\Validator\File\Size\Equal` · `Phalcon\Filter\Validation\Validator\File\Size\Max` · `Phalcon\Filter\Validation\Validator\File\Size\Min` · `Phalcon\Messages\Message` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`

### Method Summary

<ApiItem href="#filtervalidationvalidatorfile-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfile-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

## Filter\Validation\Validator\File\AbstractFile

Abstract

Checks if a value has a correct file

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Size;

$validator = new Validation();

$validator->add(
"file",
new Size(
    [
        "maxSize"              => "2M",
        "messageSize"          => ":field exceeds the max file size (:size)",
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new FileValidator(
    [
        "maxSize" => [
            "file"        => "2M",
            "anotherFile" => "4M",
        ],
        "messageSize" => [
            "file"        => "file exceeds the max file size 2M",
            "anotherFile" => "anotherFile exceeds the max file size 4M",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\File\AbstractFile`**
- [`Phalcon\Filter\Validation\Validator\File\MimeType`](#filtervalidationvalidatorfilemimetype)
- [`Phalcon\Filter\Validation\Validator\File\Resolution\AspectRatio`](#filtervalidationvalidatorfileresolutionaspectratio)
- [`Phalcon\Filter\Validation\Validator\File\Resolution\Equal`](#filtervalidationvalidatorfileresolutionequal)
- [`Phalcon\Filter\Validation\Validator\File\Resolution\Max`](#filtervalidationvalidatorfileresolutionmax)
- [`Phalcon\Filter\Validation\Validator\File\Resolution\Min`](#filtervalidationvalidatorfileresolutionmin)
- [`Phalcon\Filter\Validation\Validator\File\Size\Equal`](#filtervalidationvalidatorfilesizeequal)

`Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

### Method Summary

<ApiItem href="#filtervalidationvalidatorfileabstractfile-checkupload" visibility="public" name="checkUpload" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"string","name":"field","default":null}]}>
Check upload
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-checkuploadisempty" visibility="public" name="checkUploadIsEmpty" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"string","name":"field","default":null}]}>
Check if upload is empty
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-checkuploadisvalid" visibility="public" name="checkUploadIsValid" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"string","name":"field","default":null}]}>
Check if upload is valid
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-checkuploadmaxsize" visibility="public" name="checkUploadMaxSize" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"string","name":"field","default":null}]}>
Check if uploaded file is larger than PHP allowed size
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-getfilesizeinbytes" visibility="public" name="getFileSizeInBytes" returnType="float" params={[{"type":"string","name":"size","default":null}]}>
Convert a string like "2.5MB" in bytes
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-getmessagefileempty" visibility="public" name="getMessageFileEmpty" returnType="string" params={[]}>
Empty is empty
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-getmessageinisize" visibility="public" name="getMessageIniSize" returnType="string" params={[]}>
File exceeds the file size set in PHP configuration
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-getmessagevalid" visibility="public" name="getMessageValid" returnType="string" params={[]}>
File is not valid
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-isallowempty" visibility="public" name="isAllowEmpty" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"string","name":"field","default":null}]}>
Check on empty
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-setmessagefileempty" visibility="public" name="setMessageFileEmpty" returnType="void" params={[{"type":"string","name":"message","default":null}]}>
Empty is empty
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-setmessageinisize" visibility="public" name="setMessageIniSize" returnType="void" params={[{"type":"string","name":"message","default":null}]}>
File exceeds the file size set in PHP configuration
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-setmessagevalid" visibility="public" name="setMessageValid" returnType="void" params={[{"type":"string","name":"message","default":null}]}>
File is not valid
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-appendmessagevalid" visibility="protected" name="appendMessageValid" returnType="void" params={[{"type":"Validation","name":"validation","default":null},{"type":"string","name":"field","default":null}]}>
Appends the "file is not valid" message for the field
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileabstractfile-checkisuploadedfile" visibility="protected" name="checkIsUploadedFile" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks if a file has been uploaded; Internal check that can be
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="messageFileEmpty" type="string" default="&quot;Field :field must not be empty&quot;">
Empty is empty
</ApiItem>
<ApiItem kind="property" visibility="protected" name="messageIniSize" type="string" default="&quot;File :field exceeds the maximum file size&quot;">
File exceeds the file size set in PHP configuration
</ApiItem>
<ApiItem kind="property" visibility="protected" name="messageValid" type="string" default="&quot;Field :field is not valid&quot;">
File is not valid
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfileabstractfile-checkupload"><code>checkUpload()</code></h4>

```php
public function checkUpload(
Validation $validation,
string $field
): bool;
```

Check upload

<h4 id="filtervalidationvalidatorfileabstractfile-checkuploadisempty"><code>checkUploadIsEmpty()</code></h4>

```php
public function checkUploadIsEmpty(
Validation $validation,
string $field
): bool;
```

Check if upload is empty

<h4 id="filtervalidationvalidatorfileabstractfile-checkuploadisvalid"><code>checkUploadIsValid()</code></h4>

```php
public function checkUploadIsValid(
Validation $validation,
string $field
): bool;
```

Check if upload is valid

<h4 id="filtervalidationvalidatorfileabstractfile-checkuploadmaxsize"><code>checkUploadMaxSize()</code></h4>

```php
public function checkUploadMaxSize(
Validation $validation,
string $field
): bool;
```

Check if uploaded file is larger than PHP allowed size

<h4 id="filtervalidationvalidatorfileabstractfile-getfilesizeinbytes"><code>getFileSizeInBytes()</code></h4>

```php
public function getFileSizeInBytes( string $size ): float;
```

Convert a string like "2.5MB" in bytes

<h4 id="filtervalidationvalidatorfileabstractfile-getmessagefileempty"><code>getMessageFileEmpty()</code></h4>

```php
public function getMessageFileEmpty(): string;
```

Empty is empty

<h4 id="filtervalidationvalidatorfileabstractfile-getmessageinisize"><code>getMessageIniSize()</code></h4>

```php
public function getMessageIniSize(): string;
```

File exceeds the file size set in PHP configuration

<h4 id="filtervalidationvalidatorfileabstractfile-getmessagevalid"><code>getMessageValid()</code></h4>

```php
public function getMessageValid(): string;
```

File is not valid

<h4 id="filtervalidationvalidatorfileabstractfile-isallowempty"><code>isAllowEmpty()</code></h4>

```php
public function isAllowEmpty(
Validation $validation,
string $field
): bool;
```

Check on empty

<h4 id="filtervalidationvalidatorfileabstractfile-setmessagefileempty"><code>setMessageFileEmpty()</code></h4>

```php
public function setMessageFileEmpty( string $message ): void;
```

Empty is empty

<h4 id="filtervalidationvalidatorfileabstractfile-setmessageinisize"><code>setMessageIniSize()</code></h4>

```php
public function setMessageIniSize( string $message ): void;
```

File exceeds the file size set in PHP configuration

<h4 id="filtervalidationvalidatorfileabstractfile-setmessagevalid"><code>setMessageValid()</code></h4>

```php
public function setMessageValid( string $message ): void;
```

File is not valid

<h4 id="filtervalidationvalidatorfileabstractfile-appendmessagevalid"><code>appendMessageValid()</code></h4>

```php
protected function appendMessageValid(
Validation $validation,
string $field
): void;
```

Appends the "file is not valid" message for the field

<h4 id="filtervalidationvalidatorfileabstractfile-checkisuploadedfile"><code>checkIsUploadedFile()</code></h4>

```php
protected function checkIsUploadedFile( string $name ): bool;
```

Checks if a file has been uploaded; Internal check that can be
overridden in a subclass if you do not want to check uploaded files

## Filter\Validation\Validator\File\MimeType

Class

Checks if a value has a correct file mime type

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\MimeType;

$validator = new Validation();

$validator->add(
"file",
new MimeType(
    [
        "types" => [
            "image/jpeg",
            "image/png",
        ],
        "message" => "Allowed file types are :types"
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new MimeType(
    [
        "types" => [
            "file"        => [
                "image/jpeg",
                "image/png",
            ],
            "anotherFile" => [
                "image/gif",
                "image/bmp",
            ],
        ],
        "message" => [
            "file"        => "Allowed file types are image/jpeg and image/png",
            "anotherFile" => "Allowed file types are image/gif and image/bmp",
        ]
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\MimeType`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Exceptions\InvalidAllowedTypes` · `Phalcon\Traits\Php\InfoTrait`

### Method Summary

<ApiItem href="#filtervalidationvalidatorfilemimetype-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;File :field must be of type: :types&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfilemimetype-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\File\Resolution\AspectRatio

Class

Checks if a file has the exact aspect ratio

The ratio is compared with integer cross-multiplication, so the image
dimensions must match the ratio exactly: 1920x1080 matches "16x9",
1366x768 does not.

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Resolution\AspectRatio;

$validator = new Validation();

$validator->add(
"file",
new AspectRatio(
    [
        "ratio"   => "16x9",
        "message" => "The aspect ratio of the field :field has to be :ratio",
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new AspectRatio(
    [
        "ratio" => [
            "file"        => "16x9",
            "anotherFile" => "4x3",
        ],
        "message" => [
            "file"        => "Aspect ratio of file has to be 16x9",
            "anotherFile" => "Aspect ratio of anotherFile has to be 4x3",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\Resolution\AspectRatio`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile`

### Method Summary

<ApiItem href="#filtervalidationvalidatorfileresolutionaspectratio-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileresolutionaspectratio-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;File :field does not have the exact aspect ratio of :ratio&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfileresolutionaspectratio-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorfileresolutionaspectratio-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\File\Resolution\Equal

Class

Checks if a file has the right resolution

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Resolution\Equal;

$validator = new Validation();

$validator->add(
"file",
new Equal(
    [
        "resolution" => "800x600",
        "message"    => "The resolution of the field :field has to be equal :resolution",
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new Equal(
    [
        "resolution" => [
            "file"        => "800x600",
            "anotherFile" => "1024x768",
        ],
        "message" => [
            "file"        => "Equal resolution of file has to be 800x600",
            "anotherFile" => "Equal resolution of file has to be 1024x768",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\Resolution\Equal`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile` · `Phalcon\Messages\Message`

### Method Summary

<ApiItem href="#filtervalidationvalidatorfileresolutionequal-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileresolutionequal-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;The resolution of the field :field has to be equal :resolution&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfileresolutionequal-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorfileresolutionequal-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\File\Resolution\Max

Class

Checks if a file has the right resolution

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Resolution\Max;

$validator = new Validation();

$validator->add(
"file",
new Max(
    [
        "resolution"      => "800x600",
        "message"  => "Max resolution of :field is :resolution",
        "included" => true,
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new Max(
    [
        "resolution" => [
            "file"        => "800x600",
            "anotherFile" => "1024x768",
        ],
        "included" => [
            "file"        => false,
            "anotherFile" => true,
        ],
        "message" => [
            "file"        => "Max resolution of file is 800x600",
            "anotherFile" => "Max resolution of file is 1024x768",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\Resolution\Max`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile` · `Phalcon\Messages\Message`

### Method Summary

<ApiItem href="#filtervalidationvalidatorfileresolutionmax-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileresolutionmax-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;File :field exceeds the maximum resolution of :resolution&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfileresolutionmax-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorfileresolutionmax-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\File\Resolution\Min

Class

Checks if a file has the right resolution

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Resolution\Min;

$validator = new Validation();

$validator->add(
"file",
new Min(
    [
        "resolution" => "800x600",
        "message"    => "Min resolution of :field is :resolution",
        "included"   => true,
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new Min(
    [
        "resolution" => [
            "file"        => "800x600",
            "anotherFile" => "1024x768",
        ],
        "included" => [
            "file"        => false,
            "anotherFile" => true,
        ],
        "message" => [
            "file"        => "Min resolution of file is 800x600",
            "anotherFile" => "Min resolution of file is 1024x768",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\Resolution\Min`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile` · `Phalcon\Messages\Message`

### Method Summary

<ApiItem href="#filtervalidationvalidatorfileresolutionmin-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfileresolutionmin-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;File :field can not have the minimum resolution of :resolution&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfileresolutionmin-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorfileresolutionmin-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\File\Size\Equal

Class

Checks if a value has a correct file

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Size;

$validator = new Validation();

$validator->add(
"file",
new Equal(
    [
        "size"     => "2M",
        "included" => true,
        "message"  => ":field exceeds the equal file size (:size)",
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new Equal(
    [
        "size" => [
            "file"        => "2M",
            "anotherFile" => "4M",
        ],
        "included" => [
            "file"        => false,
            "anotherFile" => true,
        ],
        "message" => [
            "file"        => "file does not have the right file size",
            "anotherFile" => "anotherFile wrong file size (4MB)",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\Size\Equal`**
- [`Phalcon\Filter\Validation\Validator\File\Size\Max`](#filtervalidationvalidatorfilesizemax)
- [`Phalcon\Filter\Validation\Validator\File\Size\Min`](#filtervalidationvalidatorfilesizemin)

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile`

### Method Summary

<ApiItem href="#filtervalidationvalidatorfilesizeequal-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfilesizeequal-getconditional" visibility="protected" name="getConditional" returnType="" params={[{"type":"float","name":"source","default":null},{"type":"float","name":"target","default":null},{"type":"bool","name":"included","default":"false"}]}>
Executes the conditional
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;File :field does not have the exact :size file size&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfilesizeequal-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

<h4 id="filtervalidationvalidatorfilesizeequal-getconditional"><code>getConditional()</code></h4>

```php
protected function getConditional(
float $source,
float $target,
bool $included = false
);
```

Executes the conditional

## Filter\Validation\Validator\File\Size\Max

Class

Checks if a value has a correct file

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Size;

$validator = new Validation();

$validator->add(
"file",
new Max(
    [
        "size"     => "2M",
        "included" => true,
        "message"  => ":field exceeds the max file size (:size)",
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new Max(
    [
        "size" => [
            "file"        => "2M",
            "anotherFile" => "4M",
        ],
        "included" => [
            "file"        => false,
            "anotherFile" => true,
        ],
        "message" => [
            "file"        => "file exceeds the max file size 2M",
            "anotherFile" => "anotherFile exceeds the max file size 4M",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- [`Phalcon\Filter\Validation\Validator\File\Size\Equal`](#filtervalidationvalidatorfilesizeequal)
- **`Phalcon\Filter\Validation\Validator\File\Size\Max`**

### Method Summary

<ApiItem href="#filtervalidationvalidatorfilesizemax-getconditional" visibility="protected" name="getConditional" returnType="" params={[{"type":"float","name":"source","default":null},{"type":"float","name":"target","default":null},{"type":"bool","name":"included","default":"false"}]}>
Executes the conditional
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;File :field exceeds the size of :size&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfilesizemax-getconditional"><code>getConditional()</code></h4>

```php
protected function getConditional(
float $source,
float $target,
bool $included = false
);
```

Executes the conditional

## Filter\Validation\Validator\File\Size\Min

Class

Checks if a value has a correct file

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Size;

$validator = new Validation();

$validator->add(
"file",
new Min(
    [
        "size"     => "2M",
        "included" => true,
        "message"  => ":field exceeds the min file size (:size)",
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new Min(
    [
        "size" => [
            "file"        => "2M",
            "anotherFile" => "4M",
        ],
        "included" => [
            "file"        => false,
            "anotherFile" => true,
        ],
        "message" => [
            "file"        => "file exceeds the min file size 2M",
            "anotherFile" => "anotherFile exceeds the min file size 4M",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- [`Phalcon\Filter\Validation\Validator\File\Size\Equal`](#filtervalidationvalidatorfilesizeequal)
- **`Phalcon\Filter\Validation\Validator\File\Size\Min`**

### Method Summary

<ApiItem href="#filtervalidationvalidatorfilesizemin-getconditional" visibility="protected" name="getConditional" returnType="" params={[{"type":"float","name":"source","default":null},{"type":"float","name":"target","default":null},{"type":"bool","name":"included","default":"false"}]}>
Executes the conditional
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;File :field can not have the minimum size of :size&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfilesizemin-getconditional"><code>getConditional()</code></h4>

```php
protected function getConditional(
float $source,
float $target,
bool $included = false
);
```

Executes the conditional

## Filter\Validation\Validator\Files

Class

Validates an array of uploaded files by delegating each file to the `File`
validator. Accepts the same options as `Phalcon\Filter\Validation\Validator\File`
and forwards them to each delegated file. A standard multiple-file upload
(`<input name="files[]" type="file" multiple>`) arrives as a transposed
`$_FILES` node; this validator normalizes it into individual files and fails
on the first file that violates a rule.

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Files as FilesValidator;

$validation = new Validation();

$validation->add(
"photos",
new FilesValidator(
    [
        "maxSize"      => "2M",
        "messageSize"  => ":field exceeds the max file size (:size)",
        "allowedTypes" => ["image/jpeg", "image/png"],
        "messageType"  => "Allowed file types are :types",
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Files`**

`Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Messages`

### Method Summary

<ApiItem href="#filtervalidationvalidatorfiles-isallowempty" visibility="public" name="isAllowEmpty" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"string","name":"field","default":null}]}>
Whole-field empty check: true when the field carries no uploaded files.
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfiles-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation, delegating each file to a `File` validator.
</ApiItem>
<ApiItem href="#filtervalidationvalidatorfiles-normalizefiles" visibility="protected" name="normalizeFiles" returnType="array" params={[{"type":"mixed","name":"value","default":null}]}>
Normalizes a single file or a transposed multi-file `$_FILES` node into a
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorfiles-isallowempty"><code>isAllowEmpty()</code></h4>

```php
public function isAllowEmpty(
Validation $validation,
string $field
): bool;
```

Whole-field empty check: true when the field carries no uploaded files.

<h4 id="filtervalidationvalidatorfiles-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation, delegating each file to a `File` validator.

<h4 id="filtervalidationvalidatorfiles-normalizefiles"><code>normalizeFiles()</code></h4>

```php
protected function normalizeFiles( mixed $value ): array;
```

Normalizes a single file or a transposed multi-file `$_FILES` node into a
list of single-file structures.

## Filter\Validation\Validator\Identical

Class

Checks if a value is identical to other

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Identical;

$validator = new Validation();

$validator->add(
"terms",
new Identical(
    [
        "accepted" => "yes",
        "message" => "Terms and conditions must be accepted",
    ]
)
);

$validator->add(
[
    "terms",
    "anotherTerms",
],
new Identical(
    [
        "accepted" => [
            "terms"        => "yes",
            "anotherTerms" => "yes",
        ],
        "message" => [
            "terms"        => "Terms and conditions must be accepted",
            "anotherTerms" => "Another terms  must be accepted",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Identical`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatoridentical-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatoridentical-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field does not have the expected value&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatoridentical-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatoridentical-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\InclusionIn

Class

Check if a value is included into a list of values

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\InclusionIn;

$validator = new Validation();

$validator->add(
"status",
new InclusionIn(
    [
        "message" => "The status must be A or B",
        "domain"  => ["A", "B"],
    ]
)
);

$validator->add(
[
    "status",
    "type",
],
new InclusionIn(
    [
        "message" => [
            "status" => "The status must be A or B",
            "type"   => "The status must be 1 or 2",
        ],
        "domain" => [
            "status" => ["A", "B"],
            "type"   => [1, 2],
        ]
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\InclusionIn`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exceptions\InvalidDomainOption` · `Phalcon\Filter\Validation\Exceptions\InvalidStrictOption` · `Phalcon\Messages\Message`

### Method Summary

<ApiItem href="#filtervalidationvalidatorinclusionin-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorinclusionin-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must be a part of list: :domain&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorinclusionin-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorinclusionin-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Ip

Class

Check for IP addresses

```php
use Phalcon\Filter\Validation\Validator\Ip as IpValidator;

$validator->add(
"ip_address",
new IpValidator(
    [
        "message"       => ":field must contain only ip addresses",
        "version"       => IP::VERSION_4 | IP::VERSION_6, // v6 and v4. The same if not specified
        "allowReserved" => false,   // False if not specified. Ignored for v6
        "allowPrivate"  => false,   // False if not specified
        "allowEmpty"    => false,
    ]
)
);

$validator->add(
[
    "source_address",
    "destination_address",
],
new IpValidator(
    [
        "message" => [
            "source_address"      => "source_address must be a valid IP address",
            "destination_address" => "destination_address must be a valid IP address",
        ],
        "version" => [
             "source_address"      => Ip::VERSION_4 | IP::VERSION_6,
             "destination_address" => Ip::VERSION_4,
        ],
        "allowReserved" => [
             "source_address"      => false,
             "destination_address" => true,
        ],
        "allowPrivate" => [
             "source_address"      => false,
             "destination_address" => true,
        ],
        "allowEmpty" => [
             "source_address"      => false,
             "destination_address" => true,
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Ip`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

### Method Summary

<ApiItem href="#filtervalidationvalidatorip-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorip-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Constants

<ApiItem kind="constant" name="VERSION_4" type="int" default="FILTER_FLAG_IPV4">
</ApiItem>
<ApiItem kind="constant" name="VERSION_6" type="int" default="FILTER_FLAG_IPV6">
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must be a valid IP address&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorip-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorip-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Numericality

Class

Check for a valid numeric value

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Numericality;

$validator = new Validation();

$validator->add(
"price",
new Numericality(
    [
        "message" => ":field is not numeric",
    ]
)
);

$validator->add(
[
    "price",
    "amount",
],
new Numericality(
    [
        "message" => [
            "price"  => "price is not numeric",
            "amount" => "amount is not numeric",
        ]
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Numericality`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatornumericality-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatornumericality-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field does not have a valid numeric format&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatornumericality-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatornumericality-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\PresenceOf

Class

Validates that a value is not null or empty string

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\PresenceOf;

$validator = new Validation();

$validator->add(
"name",
new PresenceOf(
    [
        "message" => "The name is required",
    ]
)
);

$validator->add(
[
    "name",
    "email",
],
new PresenceOf(
    [
        "message" => [
            "name"  => "The name is required",
            "email" => "The email is required",
        ],
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\PresenceOf`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatorpresenceof-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorpresenceof-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field is required&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorpresenceof-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorpresenceof-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Regex

Class

Allows validate if the value of a field matches a regular expression

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Regex as RegexValidator;

$validator = new Validation();

$validator->add(
"created_at",
new RegexValidator(
    [
        "pattern" => "/^[0-9]{4}[-\/](0[1-9]|1[12])[-\/](0[1-9]|[12][0-9]|3[01])$/",
        "message" => "The creation date is invalid",
    ]
)
);

$validator->add(
[
    "created_at",
    "name",
],
new RegexValidator(
    [
        "pattern" => [
            "created_at" => "/^[0-9]{4}[-\/](0[1-9]|1[12])[-\/](0[1-9]|[12][0-9]|3[01])$/",
            "name"       => "/^[a-z]$/",
        ],
        "message" => [
            "created_at" => "The creation date is invalid",
            "name"       => "The name is invalid",
        ]
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Regex`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

### Method Summary

<ApiItem href="#filtervalidationvalidatorregex-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorregex-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field does not match the required format&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorregex-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorregex-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\StringLength

Class

Validates that a string has the specified maximum and minimum constraints
The test is passed if for a string's length L, min&lt;=L&lt;=max, i.e. L must
be at least min, and at most max.
Since Phalcon v4.0 this validator works like a container

The "includedMinimum" and "includedMaximum" options are true by
default. Set an option to false to exclude that boundary. The two
options are independent of each other. The "included" option sets
the two boundaries together and has precedence.

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\StringLength as StringLength;

$validator = new Validation();

$validation->add(
"name_last",
new StringLength(
    [
        "max"             => 50,
        "min"             => 2,
        "messageMaximum"  => "We don't like really long names",
        "messageMinimum"  => "We want more than just their initials",
        "includedMaximum" => true,
        "includedMinimum" => false,
    ]
)
);

$validation->add(
[
    "name_last",
    "name_first",
],
new StringLength(
    [
        "max" => [
            "name_last"  => 50,
            "name_first" => 40,
        ],
        "min" => [
            "name_last"  => 2,
            "name_first" => 4,
        ],
        "messageMaximum" => [
            "name_last"  => "We don't like really long last names",
            "name_first" => "We don't like really long first names",
        ],
        "messageMinimum" => [
            "name_last"  => "We don't like too short last names",
            "name_first" => "We don't like too short first names",
        ],
        "includedMaximum" => [
            "name_last"  => false,
            "name_first" => true,
        ],
        "includedMinimum" => [
            "name_last"  => false,
            "name_first" => true,
        ]
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\AbstractValidatorComposite`](#filtervalidationabstractvalidatorcomposite)
- **`Phalcon\Filter\Validation\Validator\StringLength`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation\AbstractValidatorComposite` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Validator\StringLength\Max` · `Phalcon\Filter\Validation\Validator\StringLength\Min` · `Phalcon\Messages\Message`

### Method Summary

<ApiItem href="#filtervalidationvalidatorstringlength-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorstringlength-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

## Filter\Validation\Validator\StringLength\Max

Class

Validates that a string has the specified maximum constraints
The test is passed if for a string's length L, L&lt;=max, i.e. L must
be at most max.

The "included" option is true by default. Set the option to false
for L&lt;max, i.e. L must be less than max. The "includedMaximum" option
is an alias of "included". If you set the two options, "included" has
precedence.

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\StringLength\Max;

$validator = new Validation();

$validation->add(
"name_last",
new Max(
    [
        "max"      => 50,
        "message"  => "We don't like really long names",
        "included" => true
    ]
)
);

$validation->add(
[
    "name_last",
    "name_first",
],
new Max(
    [
        "max" => [
            "name_last"  => 50,
            "name_first" => 40,
        ],
        "message" => [
            "name_last"  => "We don't like really long last names",
            "name_first" => "We don't like really long first names",
        ],
        "included" => [
            "name_last"  => false,
            "name_first" => true,
        ]
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\StringLength\Max`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message` · `Phalcon\Traits\Php\InfoTrait`

### Method Summary

<ApiItem href="#filtervalidationvalidatorstringlengthmax-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorstringlengthmax-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must not exceed :max characters long&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorstringlengthmax-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorstringlengthmax-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\StringLength\Min

Class

Validates that a string has the specified minimum constraints
The test is passed if for a string's length L, min&lt;=L, i.e. L must
be at least min.

The "included" option is true by default. Set the option to false
for min&lt;L, i.e. L must be more than min. The "includedMinimum" option
is an alias of "included". If you set the two options, "included" has
precedence.

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\StringLength\Min;

$validator = new Validation();

$validation->add(
"name_last",
new Min(
    [
        "min"     => 2,
        "message" => "We want more than just their initials",
        "included" => false
    ]
)
);

$validation->add(
[
    "name_last",
    "name_first",
],
new Min(
    [
        "min" => [
            "name_last"  => 2,
            "name_first" => 4,
        ],
        "message" => [
            "name_last"  => "We don't like too short last names",
            "name_first" => "We don't like too short first names",
        ],
        "included" => [
            "name_last"  => false,
            "name_first" => true,
        ]
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\StringLength\Min`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message` · `Phalcon\Traits\Php\InfoTrait`

### Method Summary

<ApiItem href="#filtervalidationvalidatorstringlengthmin-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorstringlengthmin-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must be at least :min characters long&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorstringlengthmin-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorstringlengthmin-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\Uniqueness

Class

Check that a field is unique in the related table

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Uniqueness as UniquenessValidator;

$validator = new Validation();

$validator->add(
"username",
new UniquenessValidator(
    [
        "model"   => new Users(),
        "message" => ":field must be unique",
    ]
)
);
```

Different attribute from the field:
```php
$validator->add(
"username",
new UniquenessValidator(
    [
        "model"     => new Users(),
        "attribute" => "nick",
    ]
)
);
```

In model:
```php
$validator->add(
"username",
new UniquenessValidator()
);
```

Combination of fields in model:
```php
$validator->add(
[
    "firstName",
    "lastName",
],
new UniquenessValidator()
);
```

It is possible to convert values before validation. This is useful in
situations where values need to be converted to do the database lookup:

```php
$validator->add(
"username",
new UniquenessValidator(
    [
        "convert" => function (array $values) {
            $values["username"] = strtolower($values["username"]);

            return $values;
        }
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\AbstractCombinedFieldsValidator`](#filtervalidationabstractcombinedfieldsvalidator)
- **`Phalcon\Filter\Validation\Validator\Uniqueness`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractCombinedFieldsValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\UniquenessConversionMustBeArray` · `Phalcon\Filter\Validation\Exceptions\UniquenessModelRequired` · `Phalcon\Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel` · `Phalcon\Messages\Message` · `Phalcon\Mvc\Model` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Support\Settings`

### Method Summary

<ApiItem href="#filtervalidationvalidatoruniqueness-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatoruniqueness-getoption" visibility="public" name="getOption" returnType="mixed" params={[{"type":"string","name":"key","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns an option in the validator's options
</ApiItem>
<ApiItem href="#filtervalidationvalidatoruniqueness-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>
<ApiItem href="#filtervalidationvalidatoruniqueness-getcolumnnamereal" visibility="protected" name="getColumnNameReal" returnType="string" params={[{"type":"mixed","name":"record","default":null},{"type":"string","name":"field","default":null}]}>
The column map is used in the case to get real column name
</ApiItem>
<ApiItem href="#filtervalidationvalidatoruniqueness-isuniqueness" visibility="protected" name="isUniqueness" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
</ApiItem>
<ApiItem href="#filtervalidationvalidatoruniqueness-isuniquenessmodel" visibility="protected" name="isUniquenessModel" returnType="" params={[{"type":"mixed","name":"record","default":null},{"type":"array","name":"field","default":null},{"type":"array","name":"values","default":null}]}>
Uniqueness method used for model
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must be unique&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatoruniqueness-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatoruniqueness-getoption"><code>getOption()</code></h4>

```php
public function getOption(
string $key,
mixed $defaultValue = null
): mixed;
```

Returns an option in the validator's options
Returns null if the option hasn't set

The `attribute` option can be defined as an array when validating a
combination of fields; in that case resolve it to the mapped value.

<h4 id="filtervalidationvalidatoruniqueness-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

<h4 id="filtervalidationvalidatoruniqueness-getcolumnnamereal"><code>getColumnNameReal()</code></h4>

```php
protected function getColumnNameReal(
mixed $record,
string $field
): string;
```

The column map is used in the case to get real column name

<h4 id="filtervalidationvalidatoruniqueness-isuniqueness"><code>isUniqueness()</code></h4>

```php
protected function isUniqueness(
Validation $validation,
mixed $field
): bool;
```

<h4 id="filtervalidationvalidatoruniqueness-isuniquenessmodel"><code>isUniquenessModel()</code></h4>

```php
protected function isUniquenessModel(
mixed $record,
array $field,
array $values
);
```

Uniqueness method used for model

## Filter\Validation\Validator\Url

Class

Checks if a value has a url format

```php
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Url as UrlValidator;

$validator = new Validation();

$validator->add(
"url",
new UrlValidator(
    [
        "message" => ":field must be a url",
    ]
)
);

$validator->add(
[
    "url",
    "homepage",
],
new UrlValidator(
    [
        "message" => [
            "url"      => "url must be a url",
            "homepage" => "homepage must be a url",
        ]
    ]
)
);
```

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Url`**

`Phalcon\Contracts\Filter\FilterTypes` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

### Method Summary

<ApiItem href="#filtervalidationvalidatorurl-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"options","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#filtervalidationvalidatorurl-validate" visibility="public" name="validate" returnType="bool" params={[{"type":"Validation","name":"validation","default":null},{"type":"mixed","name":"field","default":null}]}>
Executes the validation
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="template" type="string|null" default="&quot;Field :field must be a url&quot;">
</ApiItem>

### Methods

<h4 id="filtervalidationvalidatorurl-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

<h4 id="filtervalidationvalidatorurl-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

Source: https://docs.phalcon.io/5.20/api/phalcon_filter/index.mdx
