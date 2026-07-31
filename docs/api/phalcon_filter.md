---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Filter\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Exception.zep){ .src-btn }

Phalcon\Filter\Exception

Exceptions thrown in Phalcon\Filter will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Filter\Exception`**
        - [`Phalcon\Filter\Exceptions\FilterNotRegistered`](#filterexceptionsfilternotregistered)

</div>


## Filter\Exceptions\FilterNotRegistered

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Exceptions/FilterNotRegistered.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Exception`](#filterexception)
        - **`Phalcon\Filter\Exceptions\FilterNotRegistered`**

</div>

__Uses__ `Phalcon\Filter\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filterexceptionsfilternotregistered-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filterexceptionsfilternotregistered-__construct }

```php
public function __construct( string $name );
```


## Filter\Filter

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Filter.zep){ .src-btn }

Lazy loads, stores and exposes sanitizer objects

@method int          absint(mixed $input)
@method string       alnum(mixed $input)
@method string       alpha(mixed $input)
@method bool         bool(mixed $input)
@method string       email(string $input)
@method float        float(mixed $input)
@method int          int(string $input)
@method string|false ip(string $input, int $filter = FILTER_FLAG_NONE)
@method string       lower(string $input)
@method string       lowerfirst(string $input)
@method mixed        regex(mixed $input, mixed $pattern, mixed $replace)
@method mixed        remove(mixed $input, mixed $replace)
@method mixed        replace(mixed $input, mixed $source, mixed $target)
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

<div class="api-tree" markdown>

- **`Phalcon\Filter\Filter`** - implements [`Phalcon\Filter\FilterInterface`](#filterfilterinterface)

</div>

__Uses__ `Phalcon\Filter\Exceptions\FilterNotRegistered` · `Phalcon\Filter\Sanitize\AbsInt` · `Phalcon\Filter\Sanitize\Alnum` · `Phalcon\Filter\Sanitize\Alpha` · `Phalcon\Filter\Sanitize\BoolVal` · `Phalcon\Filter\Sanitize\Email` · `Phalcon\Filter\Sanitize\FloatVal` · `Phalcon\Filter\Sanitize\IntVal` · `Phalcon\Filter\Sanitize\Ip` · `Phalcon\Filter\Sanitize\Lower` · `Phalcon\Filter\Sanitize\LowerFirst` · `Phalcon\Filter\Sanitize\Regex` · `Phalcon\Filter\Sanitize\Remove` · `Phalcon\Filter\Sanitize\Replace` · `Phalcon\Filter\Sanitize\Special` · `Phalcon\Filter\Sanitize\SpecialFull` · `Phalcon\Filter\Sanitize\StringVal` · `Phalcon\Filter\Sanitize\StringValLegacy` · `Phalcon\Filter\Sanitize\Striptags` · `Phalcon\Filter\Sanitize\Trim` · `Phalcon\Filter\Sanitize\Upper` · `Phalcon\Filter\Sanitize\UpperFirst` · `Phalcon\Filter\Sanitize\UpperWords` · `Phalcon\Filter\Sanitize\Url`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filterfilter-__call">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__call</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$args</span></span>)</code>
<span class="desc">Magic call to make the helper objects available as methods.</span>
</a>
<a class="api-item" href="#filterfilter-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$mapper</span><span class="sm"> = []</span> )</code>
<span class="desc">Filter constructor.</span>
</a>
<a class="api-item" href="#filterfilter-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Get a service. If it is not in the mapper array, create a new object,</span>
</a>
<a class="api-item" href="#filterfilter-getdefaultmapper">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getDefaultMapper</span>()</code>
<span class="desc">Returns the default sanitizer name to class map. This is the single</span>
</a>
<a class="api-item" href="#filterfilter-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a service exists in the map array</span>
</a>
<a class="api-item" href="#filterfilter-sanitize">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">sanitize</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$sanitizers</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Sanitizes a value with a specified single or set of sanitizers</span>
</a>
<a class="api-item" href="#filterfilter-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$service</span></span>)</code>
<span class="desc">Set a new service to the mapper array</span>
</a>
<a class="api-item" href="#filterfilter-init">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">init</span>( <span class="st">array</span> <span class="sv">$mapper</span> )</code>
<span class="desc">Loads the objects in the internal mapper array</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_ABSINT</span><span class="sm"> = &quot;absint&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_ALNUM</span><span class="sm"> = &quot;alnum&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_ALPHA</span><span class="sm"> = &quot;alpha&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_BOOL</span><span class="sm"> = &quot;bool&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_EMAIL</span><span class="sm"> = &quot;email&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_FLOAT</span><span class="sm"> = &quot;float&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_INT</span><span class="sm"> = &quot;int&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_IP</span><span class="sm"> = &quot;ip&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_LOWER</span><span class="sm"> = &quot;lower&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_LOWERFIRST</span><span class="sm"> = &quot;lowerfirst&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_REGEX</span><span class="sm"> = &quot;regex&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_REMOVE</span><span class="sm"> = &quot;remove&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_REPLACE</span><span class="sm"> = &quot;replace&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_SPECIAL</span><span class="sm"> = &quot;special&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_SPECIALFULL</span><span class="sm"> = &quot;specialfull&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_STRING</span><span class="sm"> = &quot;string&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_STRING_LEGACY</span><span class="sm"> = &quot;stringlegacy&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_STRIPTAGS</span><span class="sm"> = &quot;striptags&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_TRIM</span><span class="sm"> = &quot;trim&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_UPPER</span><span class="sm"> = &quot;upper&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_UPPERFIRST</span><span class="sm"> = &quot;upperfirst&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_UPPERWORDS</span><span class="sm"> = &quot;upperwords&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">FILTER_URL</span><span class="sm"> = &quot;url&quot;</span></code>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$mapper</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$services</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `__call()` { #filterfilter-__call }

```php
public function __call(
    string $name,
    array $args
);
```

Magic call to make the helper objects available as methods.

#### `__construct()` { #filterfilter-__construct }

```php
public function __construct( array $mapper = [] );
```

Filter constructor.

#### `get()` { #filterfilter-get }

```php
public function get( string $name ): mixed;
```

Get a service. If it is not in the mapper array, create a new object,
set it and then return it.

#### `getDefaultMapper()` { #filterfilter-getdefaultmapper }

```php
public static function getDefaultMapper(): array;
```

Returns the default sanitizer name to class map. This is the single
source for the built-in sanitizer registry: when adding a sanitizer,
add its `FILTER_*` constant and its entry here.

#### `has()` { #filterfilter-has }

```php
public function has( string $name ): bool;
```

Checks if a service exists in the map array

#### `sanitize()` { #filterfilter-sanitize }

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

#### `set()` { #filterfilter-set }

```php
public function set(
    string $name,
    mixed $service
): void;
```

Set a new service to the mapper array

<div class="api-group">Protected · 1</div>

#### `init()` { #filterfilter-init }

```php
protected function init( array $mapper ): void;
```

Loads the objects in the internal mapper array


## Filter\FilterFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/FilterFactory.zep){ .src-btn }

Class FilterFactory

@package Phalcon\Filter

<div class="api-tree" markdown>

- **`Phalcon\Filter\FilterFactory`**

</div>

__Uses__ `Phalcon\Filter\Filter`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filterfilterfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">FilterInterface</code>
<code class="sig"><span class="sf">newInstance</span>()</code>
<span class="desc">Returns a Locator object with all the helpers defined in anonymous</span>
</a>
<a class="api-item" href="#filterfilterfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `newInstance()` { #filterfilterfactory-newinstance }

```php
public function newInstance(): FilterInterface;
```

Returns a Locator object with all the helpers defined in anonymous
functions

<div class="api-group">Protected · 1</div>

#### `getServices()` { #filterfilterfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Filter\FilterInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/FilterInterface.zep){ .src-btn }

Lazy loads, stores and exposes sanitizer objects

<div class="api-tree" markdown>

- **`Phalcon\Filter\FilterInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#filterfilterinterface-sanitize">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">sanitize</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$sanitizers</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$noRecursive</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Sanitizes a value with a specified single or set of sanitizers</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `sanitize()` { #filterfilterinterface-sanitize }

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

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/AbsInt.zep){ .src-btn }

Phalcon\Filter\Sanitize\AbsInt

Sanitizes a value to absolute integer

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\AbsInt`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeabsint-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeabsint-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Sanitize\Alnum

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Alnum.zep){ .src-btn }

Phalcon\Filter\Sanitize\Alnum

Sanitizes a value to an alphanumeric value

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Alnum`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizealnum-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizealnum-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Sanitize\Alpha

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Alpha.zep){ .src-btn }

Phalcon\Filter\Sanitize\Alpha

Sanitizes a value to an alpha value

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Alpha`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizealpha-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizealpha-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Sanitize\BoolVal

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/BoolVal.zep){ .src-btn }

Phalcon\Filter\Sanitize\BoolVal

Sanitizes a value to boolean

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\BoolVal`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeboolval-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeboolval-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Sanitize\Email

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Email.zep){ .src-btn }

Phalcon\Filter\Sanitize\Email

Sanitizes an email string

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Email`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeemail-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeemail-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Sanitize\FloatVal

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/FloatVal.zep){ .src-btn }

Phalcon\Filter\Sanitize\FloatVal

Sanitizes a value to float

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\FloatVal`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizefloatval-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizefloatval-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Sanitize\IntVal

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/IntVal.zep){ .src-btn }

Phalcon\Filter\Sanitize\IntVal

Sanitizes a value to integer

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\IntVal`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeintval-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeintval-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Sanitize\Ip

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Ip.zep){ .src-btn }

Phalcon\Filter\Sanitize\IP

Sanitizes a value to an ip address or CIDR range

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Ip`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeip-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string|false</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$filter</span><span class="sm"> = 0</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeip-__invoke }

```php
public function __invoke(
    string $input,
    int $filter = 0
): string|false;
```


## Filter\Sanitize\Lower

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Lower.zep){ .src-btn }

Phalcon\Filter\Sanitize\Lower

Sanitizes a value to lowercase

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Lower`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer` · `Phalcon\Traits\Php\MbCaseTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizelower-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizelower-__invoke }

```php
public function __invoke( string $input );
```


## Filter\Sanitize\LowerFirst

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/LowerFirst.zep){ .src-btn }

Phalcon\Filter\Sanitize\LowerFirst

Sanitizes a value to lcfirst

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\LowerFirst`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizelowerfirst-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizelowerfirst-__invoke }

```php
public function __invoke( string $input );
```


## Filter\Sanitize\Regex

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Regex.zep){ .src-btn }

Phalcon\Filter\Sanitize\Regex

Sanitizes a value performing preg_replace

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Regex`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeregex-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$pattern</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$replace</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeregex-__invoke }

```php
public function __invoke(
    mixed $input,
    mixed $pattern,
    mixed $replace
);
```


## Filter\Sanitize\Remove

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Remove.zep){ .src-btn }

Phalcon\Filter\Sanitize\Remove

Sanitizes a value removing parts of a string

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Remove`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeremove-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$replace</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeremove-__invoke }

```php
public function __invoke(
    mixed $input,
    mixed $replace
);
```


## Filter\Sanitize\Replace

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Replace.zep){ .src-btn }

Phalcon\Filter\Sanitize\Replace

Sanitizes a value replacing parts of a string

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Replace`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizereplace-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$from</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$to</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizereplace-__invoke }

```php
public function __invoke(
    mixed $input,
    mixed $from,
    mixed $to
);
```


## Filter\Sanitize\Special

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Special.zep){ .src-btn }

Phalcon\Filter\Sanitize\Special

Sanitizes a value special characters

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Special`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizespecial-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizespecial-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Sanitize\SpecialFull

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/SpecialFull.zep){ .src-btn }

Phalcon\Filter\Sanitize\SpecialFull

Sanitizes a value special characters (htmlspecialchars() and ENT_QUOTES)

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\SpecialFull`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizespecialfull-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizespecialfull-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Sanitize\StringVal

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/StringVal.zep){ .src-btn }

Sanitizes a value to string

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\StringVal`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizestringval-__invoke">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$flags</span><span class="sm"> = 11</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizestringval-__invoke }

```php
public function __invoke(
    string $input,
    int $flags = 11
): string;
```


## Filter\Sanitize\StringValLegacy

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/StringValLegacy.zep){ .src-btn }

Sanitizes a value to string using `filter_var()`. The filter provides
backwards compatibility with versions prior to v5. For PHP higher or equal to
8.1, the filter will remain the string unchanged. If anything other than a
string is passed, the method will return false

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\StringValLegacy`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizestringvallegacy-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizestringvallegacy-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Sanitize\Striptags

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Striptags.zep){ .src-btn }

Phalcon\Filter\Sanitize\Striptags

Sanitizes a value striptags

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Striptags`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizestriptags-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizestriptags-__invoke }

```php
public function __invoke( string $input );
```


## Filter\Sanitize\Trim

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Trim.zep){ .src-btn }

Phalcon\Filter\Sanitize\Trim

Sanitizes a value removing leading and trailing spaces

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Trim`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizetrim-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizetrim-__invoke }

```php
public function __invoke( string $input );
```


## Filter\Sanitize\Upper

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Upper.zep){ .src-btn }

Phalcon\Filter\Sanitize\Upper

Sanitizes a value to uppercase

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Upper`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer` · `Phalcon\Traits\Php\MbCaseTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeupper-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeupper-__invoke }

```php
public function __invoke( string $input );
```


## Filter\Sanitize\UpperFirst

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/UpperFirst.zep){ .src-btn }

Phalcon\Filter\Sanitize\UpperFirst

Sanitizes a value to ucfirst

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\UpperFirst`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeupperfirst-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeupperfirst-__invoke }

```php
public function __invoke( string $input );
```


## Filter\Sanitize\UpperWords

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/UpperWords.zep){ .src-btn }

Phalcon\Filter\Sanitize\UpperWords

Sanitizes a value to uppercase the first character of each word

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\UpperWords`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer` · `Phalcon\Traits\Php\MbCaseTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeupperwords-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeupperwords-__invoke }

```php
public function __invoke( string $input );
```


## Filter\Sanitize\Url

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Url.zep){ .src-btn }

Phalcon\Filter\Sanitize\Url

Sanitizes a value url

<div class="api-tree" markdown>

- **`Phalcon\Filter\Sanitize\Url`** - implements [`Phalcon\Contracts\Filter\Sanitizer`](phalcon_contracts.md#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeurl-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__invoke()` { #filtersanitizeurl-__invoke }

```php
public function __invoke( mixed $input );
```


## Filter\Validation

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation.zep){ .src-btn }

Allows to validate data using custom or built-in validators

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\Injectable`](phalcon_di.md#diinjectable)
        - **`Phalcon\Filter\Validation`** - implements [`Phalcon\Filter\Validation\ValidationInterface`](#filtervalidationvalidationinterface)

</div>

__Uses__ `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Filter\FilterInterface` · `Phalcon\Filter\Validation\AbstractCombinedFieldsValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\FilterServiceUnavailable` · `Phalcon\Filter\Validation\Exceptions\InvalidFieldType` · `Phalcon\Filter\Validation\Exceptions\InvalidFilterService` · `Phalcon\Filter\Validation\Exceptions\InvalidValidationData` · `Phalcon\Filter\Validation\Exceptions\InvalidValidator` · `Phalcon\Filter\Validation\Exceptions\InvalidValidatorScope` · `Phalcon\Filter\Validation\Exceptions\NoDataToValidate` · `Phalcon\Filter\Validation\Exceptions\NoValidators` · `Phalcon\Filter\Validation\Exceptions\ValidationEntityNotObject` · `Phalcon\Filter\Validation\ValidationInterface` · `Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidation-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$validators</span><span class="sm"> = []</span> )</code>
<span class="desc">Phalcon\Filter\Validation constructor</span>
</a>
<a class="api-item" href="#filtervalidation-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">ValidatorInterface</span> <span class="sv">$validator</span></span>)</code>
<span class="desc">Adds a validator to a field</span>
</a>
<a class="api-item" href="#filtervalidation-appendmessage">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">appendMessage</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">Appends a message to the messages list</span>
</a>
<a class="api-item" href="#filtervalidation-bind">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">bind</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$whitelist</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Assigns the data to an entity</span>
</a>
<a class="api-item" href="#filtervalidation-fails">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">fails</span>()</code>
<span class="desc">Verify if validation fails by verifying if there are messages in the current validation</span>
</a>
<a class="api-item" href="#filtervalidation-getdata">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getData</span>()</code>
</a>
<a class="api-item" href="#filtervalidation-getdefaultmessage">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDefaultMessage</span>( <span class="st">string</span> <span class="sv">$validatorClassName</span> )</code>
<span class="desc">Returns the default message registered for a validator class, or an</span>
</a>
<a class="api-item" href="#filtervalidation-getentity">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getEntity</span>()</code>
<span class="desc">Returns the bound entity</span>
</a>
<a class="api-item" href="#filtervalidation-getfilters">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">getFilters</span>( <span class="st">string</span> <span class="sv">$field</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns all the filters or a specific one</span>
</a>
<a class="api-item" href="#filtervalidation-getlabel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLabel</span>( <span class="st">mixed</span> <span class="sv">$field</span> )</code>
<span class="desc">Get label for field</span>
</a>
<a class="api-item" href="#filtervalidation-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">Messages</code>
<code class="sig"><span class="sf">getMessages</span>()</code>
<span class="desc">Returns the registered validators</span>
</a>
<a class="api-item" href="#filtervalidation-getvalidators">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getValidators</span>()</code>
<span class="desc">Returns the validators added to the validation</span>
</a>
<a class="api-item" href="#filtervalidation-getvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">getValue</span>( <span class="st">string</span> <span class="sv">$field</span> )</code>
<span class="desc">Gets the a value to validate in the array/object data source</span>
</a>
<a class="api-item" href="#filtervalidation-getvaluebydata">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">getValueByData</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Gets the a value to validate in the array/object data source</span>
</a>
<a class="api-item" href="#filtervalidation-getvaluebyentity">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">getValueByEntity</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Gets the a value to validate in the object entity source</span>
</a>
<a class="api-item" href="#filtervalidation-rule">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">rule</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">ValidatorInterface</span> <span class="sv">$validator</span></span>)</code>
<span class="desc">Alias of <code>add</code> method</span>
</a>
<a class="api-item" href="#filtervalidation-rules">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">rules</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$validators</span></span>)</code>
<span class="desc">Adds the validators to a field</span>
</a>
<a class="api-item" href="#filtervalidation-setdefaultmessages">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">setDefaultMessages</span>( <span class="st">array</span> <span class="sv">$messages</span><span class="sm"> = []</span> )</code>
<span class="desc">Registers default messages for validators, keyed by validator class</span>
</a>
<a class="api-item" href="#filtervalidation-setentity">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setEntity</span>( <span class="st">mixed</span> <span class="sv">$entity</span> )</code>
<span class="desc">Sets the bound entity</span>
</a>
<a class="api-item" href="#filtervalidation-setfilters">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setFilters</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span></span>)</code>
<span class="desc">Adds filters to the field</span>
</a>
<a class="api-item" href="#filtervalidation-setlabels">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setLabels</span>( <span class="st">array</span> <span class="sv">$labels</span> )</code>
<span class="desc">Adds labels for fields</span>
</a>
<a class="api-item" href="#filtervalidation-setvalidators">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setValidators</span>( <span class="st">array</span> <span class="sv">$validators</span> )</code>
</a>
<a class="api-item" href="#filtervalidation-validate">
<code class="vis vis-public">public</code>
<code class="ret">Messages|bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$whitelist</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Validate a set of data according to a set of rules</span>
</a>
<a class="api-item" href="#filtervalidation-prechecking">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">preChecking</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">ValidatorInterface</span> <span class="sv">$validator</span></span>)</code>
<span class="desc">Internal validations, if it returns true, then skip the current validator</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$combinedFieldsValidators</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$data</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$defaultMessages</span><span class="sm"> = []</span></code>
<span class="desc">Default messages for validators, keyed by validator class name

Declared without an array initializer on purpose: an initialized static
array makes Zephir emit a zephir_init_static_properties() function that
fails to compile in the single-file build. It is null until first set
and treated as an empty array by the accessors below.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">object|null</code>
<code class="sig"><span class="sv">$entity</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$filters</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$labels</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Messages</code>
<code class="sig"><span class="sv">$messages</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$validators</span><span class="sm"> = []</span></code>
<span class="desc">List of validators</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$values</span><span class="sm"> = []</span></code>
<span class="desc">Calculated values</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$whitelist</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 23</div>

#### `__construct()` { #filtervalidation-__construct }

```php
public function __construct( array $validators = [] );
```

Phalcon\Filter\Validation constructor

#### `add()` { #filtervalidation-add }

```php
public function add(
    mixed $field,
    ValidatorInterface $validator
): static;
```

Adds a validator to a field

#### `appendMessage()` { #filtervalidation-appendmessage }

```php
public function appendMessage( MessageInterface $message ): static;
```

Appends a message to the messages list

#### `bind()` { #filtervalidation-bind }

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

#### `fails()` { #filtervalidation-fails }

```php
public function fails(): bool;
```

Verify if validation fails by verifying if there are messages in the current validation

#### `getData()` { #filtervalidation-getdata }

```php
public function getData(): mixed;
```

#### `getDefaultMessage()` { #filtervalidation-getdefaultmessage }

```php
public static function getDefaultMessage( string $validatorClassName ): string;
```

Returns the default message registered for a validator class, or an
empty string when none has been registered.

#### `getEntity()` { #filtervalidation-getentity }

```php
public function getEntity(): mixed;
```

Returns the bound entity

#### `getFilters()` { #filtervalidation-getfilters }

```php
public function getFilters( string $field = null ): mixed|null;
```

Returns all the filters or a specific one

#### `getLabel()` { #filtervalidation-getlabel }

```php
public function getLabel( mixed $field ): string;
```

Get label for field

#### `getMessages()` { #filtervalidation-getmessages }

```php
public function getMessages(): Messages;
```

Returns the registered validators

#### `getValidators()` { #filtervalidation-getvalidators }

```php
public function getValidators(): array;
```

Returns the validators added to the validation

#### `getValue()` { #filtervalidation-getvalue }

```php
public function getValue( string $field ): mixed|null;
```

Gets the a value to validate in the array/object data source

#### `getValueByData()` { #filtervalidation-getvaluebydata }

```php
public function getValueByData(
    mixed $data,
    string $field
): mixed|null;
```

Gets the a value to validate in the array/object data source

#### `getValueByEntity()` { #filtervalidation-getvaluebyentity }

```php
public function getValueByEntity(
    mixed $entity,
    string $field
): mixed|null;
```

Gets the a value to validate in the object entity source

#### `rule()` { #filtervalidation-rule }

```php
public function rule(
    mixed $field,
    ValidatorInterface $validator
): static;
```

Alias of `add` method

#### `rules()` { #filtervalidation-rules }

```php
public function rules(
    mixed $field,
    array $validators
): static;
```

Adds the validators to a field

#### `setDefaultMessages()` { #filtervalidation-setdefaultmessages }

```php
public static function setDefaultMessages( array $messages = [] ): array;
```

Registers default messages for validators, keyed by validator class
name. A registered default is used when a validator does not define its
own message; a message set on the validator instance still wins. Calls
are merged, so defaults can be registered incrementally.

#### `setEntity()` { #filtervalidation-setentity }

```php
public function setEntity( mixed $entity ): void;
```

Sets the bound entity

#### `setFilters()` { #filtervalidation-setfilters }

```php
public function setFilters(
    mixed $field,
    mixed $filters
): static;
```

Adds filters to the field

#### `setLabels()` { #filtervalidation-setlabels }

```php
public function setLabels( array $labels ): void;
```

Adds labels for fields

#### `setValidators()` { #filtervalidation-setvalidators }

```php
public function setValidators( array $validators ): static;
```

#### `validate()` { #filtervalidation-validate }

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

<div class="api-group">Protected · 1</div>

#### `preChecking()` { #filtervalidation-prechecking }

```php
protected function preChecking(
    mixed $field,
    ValidatorInterface $validator
): bool;
```

Internal validations, if it returns true, then skip the current validator


## Filter\Validation\AbstractCombinedFieldsValidator

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/AbstractCombinedFieldsValidator.zep){ .src-btn }

This is a base class for combined fields validators

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\AbstractCombinedFieldsValidator`**
        - [`Phalcon\Filter\Validation\Validator\Uniqueness`](#filtervalidationvalidatoruniqueness)

</div>


## Filter\Validation\AbstractValidator

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/AbstractValidator.zep){ .src-btn }

This is a base class for validators

<div class="api-tree" markdown>

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

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Exceptions\FieldNotPrintable` · `Phalcon\Messages\Message` · `Phalcon\Support\Helper\Arr\Whitelist`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationabstractvalidator-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Phalcon\Filter\Validation\Validator constructor</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-getoption">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns an option in the validator&#039;s options</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-gettemplate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTemplate</span>( <span class="st">string</span> <span class="sv">$field</span><span class="sm"> = null</span> )</code>
<span class="desc">Get the template message</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-gettemplates">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getTemplates</span>()</code>
<span class="desc">Get templates collection object</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-hasoption">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasOption</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an option is defined</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-isallowempty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAllowEmpty</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Checks whether the field can be considered empty and therefore</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-messagefactory">
<code class="vis vis-public">public</code>
<code class="ret">Message</code>
<code class="sig"><span class="sf">messageFactory</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$replacements</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Create a default message by factory</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-setoption">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets an option in the validator</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-settemplate">
<code class="vis vis-public">public</code>
<code class="ret">ValidatorInterface</code>
<code class="sig"><span class="sf">setTemplate</span>( <span class="st">string</span> <span class="sv">$template</span> )</code>
<span class="desc">Set a new template message</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-settemplates">
<code class="vis vis-public">public</code>
<code class="ret">ValidatorInterface</code>
<code class="sig"><span class="sf">setTemplates</span>( <span class="st">array</span> <span class="sv">$templates</span> )</code>
<span class="desc">Clear current templates and set new from an array,</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-allowempty">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">allowEmpty</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Checks if field can be empty.</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-checkarray">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">checkArray</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Checks if a value is an array and returns the element based on the</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-preparecode">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">prepareCode</span>( <span class="st">string</span> <span class="sv">$field</span> )</code>
<span class="desc">Prepares a validation code.</span>
</a>
<a class="api-item" href="#filtervalidationabstractvalidator-preparelabel">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">prepareLabel</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Prepares a label for the field.</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = null</span></code>
<span class="desc">Message template</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$templateChanged</span><span class="sm"> = false</span></code>
<span class="desc">Whether the template/message has been explicitly assigned on the
instance (constructor <code>message</code>/<code>template</code> option or setTemplate()).
While false, <code>template</code> still holds the validator&#039;s class default and a
global default registered via Validation::setDefaultMessages() applies.</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$templates</span><span class="sm"> = []</span></code>
<span class="desc">Message templates</span>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

#### `__construct()` { #filtervalidationabstractvalidator-__construct }

```php
public function __construct( array $options = [] );
```

Phalcon\Filter\Validation\Validator constructor

#### `getOption()` { #filtervalidationabstractvalidator-getoption }

```php
public function getOption(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Returns an option in the validator's options
Returns null if the option hasn't set

#### `getTemplate()` { #filtervalidationabstractvalidator-gettemplate }

```php
public function getTemplate( string $field = null ): string;
```

Get the template message

#### `getTemplates()` { #filtervalidationabstractvalidator-gettemplates }

```php
public function getTemplates(): array;
```

Get templates collection object

#### `hasOption()` { #filtervalidationabstractvalidator-hasoption }

```php
public function hasOption( string $key ): bool;
```

Checks if an option is defined

#### `isAllowEmpty()` { #filtervalidationabstractvalidator-isallowempty }

```php
public function isAllowEmpty(
    Validation $validation,
    string $field
): bool;
```

Checks whether the field can be considered empty and therefore
skipped, honoring the `allowEmpty` option (boolean flag, list of
empty values, or per-field map).

#### `messageFactory()` { #filtervalidationabstractvalidator-messagefactory }

```php
public function messageFactory(
    Validation $validation,
    mixed $field,
    array $replacements = []
): Message;
```

Create a default message by factory

#### `setOption()` { #filtervalidationabstractvalidator-setoption }

```php
public function setOption(
    string $key,
    mixed $value
): void;
```

Sets an option in the validator

#### `setTemplate()` { #filtervalidationabstractvalidator-settemplate }

```php
public function setTemplate( string $template ): ValidatorInterface;
```

Set a new template message

#### `setTemplates()` { #filtervalidationabstractvalidator-settemplates }

```php
public function setTemplates( array $templates ): ValidatorInterface;
```

Clear current templates and set new from an array,

#### `validate()` { #filtervalidationabstractvalidator-validate }

```php
abstract public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation

<div class="api-group">Protected · 4</div>

#### `allowEmpty()` { #filtervalidationabstractvalidator-allowempty }

```php
protected function allowEmpty(
    mixed $field,
    mixed $value
): bool;
```

Checks if field can be empty.

#### `checkArray()` { #filtervalidationabstractvalidator-checkarray }

```php
protected function checkArray(
    mixed $value,
    string $field
): mixed;
```

Checks if a value is an array and returns the element based on the
passed field name

#### `prepareCode()` { #filtervalidationabstractvalidator-preparecode }

```php
protected function prepareCode( string $field ): int;
```

Prepares a validation code.

#### `prepareLabel()` { #filtervalidationabstractvalidator-preparelabel }

```php
protected function prepareLabel(
    Validation $validation,
    string $field
): mixed;
```

Prepares a label for the field.


## Filter\Validation\AbstractValidatorComposite

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/AbstractValidatorComposite.zep){ .src-btn }

This is a base class for combined fields validators

@todo Remove in v7. Kept only for backwards compatibility; compose
Phalcon\Filter\Validation\Traits\ValidatorCompositeTrait directly (with
extends AbstractValidator implements ValidatorCompositeInterface) instead of
extending this.

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\AbstractValidatorComposite`** - implements [`Phalcon\Filter\Validation\ValidatorCompositeInterface`](#filtervalidationvalidatorcompositeinterface)
        - [`Phalcon\Filter\Validation\Validator\File`](#filtervalidationvalidatorfile)
        - [`Phalcon\Filter\Validation\Validator\StringLength`](#filtervalidationvalidatorstringlength)

</div>

__Uses__ `Phalcon\Filter\Validation\Traits\ValidatorCompositeTrait`
{ .api-uses }


## Filter\Validation\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Filter\Validation\* classes will use this class

<div class="api-tree" markdown>

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

</div>


## Filter\Validation\Exceptions\FieldNotPrintable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/FieldNotPrintable.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\FieldNotPrintable`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsfieldnotprintable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsfieldnotprintable-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\FilterServiceUnavailable

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/FilterServiceUnavailable.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\FilterServiceUnavailable`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsfilterserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsfilterserviceunavailable-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\InvalidAllowedTypes

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidAllowedTypes.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\InvalidAllowedTypes`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidallowedtypes-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsinvalidallowedtypes-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\InvalidCallbackReturn

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidCallbackReturn.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\InvalidCallbackReturn`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidcallbackreturn-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsinvalidcallbackreturn-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\InvalidDomainOption

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidDomainOption.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\InvalidDomainOption`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvaliddomainoption-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsinvaliddomainoption-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\InvalidFieldType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidFieldType.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\InvalidFieldType`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidfieldtype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsinvalidfieldtype-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\InvalidFilterService

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidFilterService.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\InvalidFilterService`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidfilterservice-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsinvalidfilterservice-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\InvalidStrictOption

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidStrictOption.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\InvalidStrictOption`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidstrictoption-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsinvalidstrictoption-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\InvalidValidationData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidValidationData.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\InvalidValidationData`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidvalidationdata-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsinvalidvalidationdata-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\InvalidValidator

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidValidator.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\InvalidValidator`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidvalidator-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsinvalidvalidator-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\InvalidValidatorScope

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidValidatorScope.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\InvalidValidatorScope`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidvalidatorscope-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsinvalidvalidatorscope-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\MissingMbstring

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/MissingMbstring.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\MissingMbstring`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsmissingmbstring-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsmissingmbstring-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\NoDataToValidate

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/NoDataToValidate.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\NoDataToValidate`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsnodatatovalidate-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsnodatatovalidate-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\NoValidators

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/NoValidators.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\NoValidators`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsnovalidators-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsnovalidators-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\NoValidatorsInComposite

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/NoValidatorsInComposite.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\NoValidatorsInComposite`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsnovalidatorsincomposite-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsnovalidatorsincomposite-__construct }

```php
public function __construct( string $className );
```


## Filter\Validation\Exceptions\UniquenessConversionMustBeArray

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/UniquenessConversionMustBeArray.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\UniquenessConversionMustBeArray`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsuniquenessconversionmustbearray-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsuniquenessconversionmustbearray-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\UniquenessModelRequired

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/UniquenessModelRequired.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\UniquenessModelRequired`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsuniquenessmodelrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsuniquenessmodelrequired-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/UniquenessOnlyForPhalconModel.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsuniquenessonlyforphalconmodel-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsuniquenessonlyforphalconmodel-__construct }

```php
public function __construct();
```


## Filter\Validation\Exceptions\ValidationEntityNotObject

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/ValidationEntityNotObject.zep){ .src-btn }

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
        - **`Phalcon\Filter\Validation\Exceptions\ValidationEntityNotObject`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsvalidationentitynotobject-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationexceptionsvalidationentitynotobject-__construct }

```php
public function __construct();
```


## Filter\Validation\Traits\ValidatorCompositeTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Traits/ValidatorCompositeTrait.zep){ .src-btn }

Shared validator collection state and combined validation for composite
validators.

<div class="api-tree" markdown>

- **`Phalcon\Filter\Validation\Traits\ValidatorCompositeTrait`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationtraitsvalidatorcompositetrait-getvalidators">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getValidators</span>()</code>
</a>
<a class="api-item" href="#filtervalidationtraitsvalidatorcompositetrait-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">\Phalcon\Filter\Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$validators</span><span class="sm"> = null</span></code>
<span class="desc">@todo Use a default [] once Zephir supports array trait defaults</span>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getValidators()` { #filtervalidationtraitsvalidatorcompositetrait-getvalidators }

```php
public function getValidators(): array;
```

#### `validate()` { #filtervalidationtraitsvalidatorcompositetrait-validate }

```php
public function validate(
    \Phalcon\Filter\Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\ValidationInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/ValidationInterface.zep){ .src-btn }

Interface for the Phalcon\Filter\Validation component

<div class="api-tree" markdown>

- **`Phalcon\Filter\Validation\ValidationInterface`**

</div>

__Uses__ `Phalcon\Di\Injectable` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidationinterface-add">
<code class="vis vis-public">public</code>
<code class="ret">ValidationInterface</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">ValidatorInterface</span> <span class="sv">$validator</span></span>)</code>
<span class="desc">Adds a validator to a field</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-appendmessage">
<code class="vis vis-public">public</code>
<code class="ret">ValidationInterface</code>
<code class="sig"><span class="sf">appendMessage</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">Appends a message to the messages list</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-bind">
<code class="vis vis-public">public</code>
<code class="ret">ValidationInterface</code>
<code class="sig"><span class="sf">bind</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$whitelist</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Assigns the data to an entity</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-getentity">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getEntity</span>()</code>
<span class="desc">Returns the bound entity</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-getfilters">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">getFilters</span>( <span class="st">string</span> <span class="sv">$field</span><span class="sm"> = null</span> )</code>
<span class="desc">Returns all the filters or a specific one</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-getlabel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLabel</span>( <span class="st">string</span> <span class="sv">$field</span> )</code>
<span class="desc">Get label for field</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">Messages</code>
<code class="sig"><span class="sf">getMessages</span>()</code>
<span class="desc">Returns the registered validators</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-getvalidators">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getValidators</span>()</code>
<span class="desc">Returns the validators added to the validation</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-getvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">getValue</span>( <span class="st">string</span> <span class="sv">$field</span> )</code>
<span class="desc">Gets the a value to validate in the array/object data source</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-rule">
<code class="vis vis-public">public</code>
<code class="ret">ValidationInterface</code>
<code class="sig"><span class="sf">rule</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">ValidatorInterface</span> <span class="sv">$validator</span></span>)</code>
<span class="desc">Alias of <code>add</code> method</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-rules">
<code class="vis vis-public">public</code>
<code class="ret">ValidationInterface</code>
<code class="sig"><span class="sf">rules</span>(<span class="prm"><span class="st">string</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$validators</span></span>)</code>
<span class="desc">Adds the validators to a field</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-setfilters">
<code class="vis vis-public">public</code>
<code class="ret">ValidationInterface</code>
<code class="sig"><span class="sf">setFilters</span>(<span class="prm"><span class="st">string</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$filters</span></span>)</code>
<span class="desc">Adds filters to the field</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-setlabels">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setLabels</span>( <span class="st">array</span> <span class="sv">$labels</span> )</code>
<span class="desc">Adds labels for fields</span>
</a>
<a class="api-item" href="#filtervalidationvalidationinterface-validate">
<code class="vis vis-public">public</code>
<code class="ret">Messages|bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$whitelist</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Validate a set of data according to a set of rules</span>
</a>
</div>

### Methods

<div class="api-group">Public · 14</div>

#### `add()` { #filtervalidationvalidationinterface-add }

```php
public function add(
    mixed $field,
    ValidatorInterface $validator
): ValidationInterface;
```

Adds a validator to a field

#### `appendMessage()` { #filtervalidationvalidationinterface-appendmessage }

```php
public function appendMessage( MessageInterface $message ): ValidationInterface;
```

Appends a message to the messages list

#### `bind()` { #filtervalidationvalidationinterface-bind }

```php
public function bind(
    mixed $entity,
    mixed $data,
    array $whitelist = []
): ValidationInterface;
```

Assigns the data to an entity
The entity is used to obtain the validation values

#### `getEntity()` { #filtervalidationvalidationinterface-getentity }

```php
public function getEntity(): mixed;
```

Returns the bound entity

#### `getFilters()` { #filtervalidationvalidationinterface-getfilters }

```php
public function getFilters( string $field = null ): mixed|null;
```

Returns all the filters or a specific one

#### `getLabel()` { #filtervalidationvalidationinterface-getlabel }

```php
public function getLabel( string $field ): string;
```

Get label for field

#### `getMessages()` { #filtervalidationvalidationinterface-getmessages }

```php
public function getMessages(): Messages;
```

Returns the registered validators

#### `getValidators()` { #filtervalidationvalidationinterface-getvalidators }

```php
public function getValidators(): array;
```

Returns the validators added to the validation

#### `getValue()` { #filtervalidationvalidationinterface-getvalue }

```php
public function getValue( string $field ): mixed|null;
```

Gets the a value to validate in the array/object data source

#### `rule()` { #filtervalidationvalidationinterface-rule }

```php
public function rule(
    mixed $field,
    ValidatorInterface $validator
): ValidationInterface;
```

Alias of `add` method

#### `rules()` { #filtervalidationvalidationinterface-rules }

```php
public function rules(
    string $field,
    array $validators
): ValidationInterface;
```

Adds the validators to a field

#### `setFilters()` { #filtervalidationvalidationinterface-setfilters }

```php
public function setFilters(
    string $field,
    mixed $filters
): ValidationInterface;
```

Adds filters to the field

#### `setLabels()` { #filtervalidationvalidationinterface-setlabels }

```php
public function setLabels( array $labels ): void;
```

Adds labels for fields

#### `validate()` { #filtervalidationvalidationinterface-validate }

```php
public function validate(
    mixed $data = null,
    mixed $entity = null,
    array $whitelist = []
): Messages|bool;
```

Validate a set of data according to a set of rules


## Filter\Validation\ValidatorCompositeInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/ValidatorCompositeInterface.zep){ .src-btn }

This is a base class for combined fields validators

<div class="api-tree" markdown>

- **`Phalcon\Filter\Validation\ValidatorCompositeInterface`**

</div>

__Uses__ `Phalcon\Filter\Validation`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorcompositeinterface-getvalidators">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getValidators</span>()</code>
<span class="desc">Executes the validation</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorcompositeinterface-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getValidators()` { #filtervalidationvalidatorcompositeinterface-getvalidators }

```php
public function getValidators(): array;
```

Executes the validation

#### `validate()` { #filtervalidationvalidatorcompositeinterface-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\ValidatorFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/ValidatorFactory.zep){ .src-btn }

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Filter\Validation\ValidatorFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory` · `Phalcon\Filter\Validation\Validator\Alnum` · `Phalcon\Filter\Validation\Validator\Alpha` · `Phalcon\Filter\Validation\Validator\Between` · `Phalcon\Filter\Validation\Validator\Callback` · `Phalcon\Filter\Validation\Validator\Confirmation` · `Phalcon\Filter\Validation\Validator\CreditCard` · `Phalcon\Filter\Validation\Validator\Date` · `Phalcon\Filter\Validation\Validator\Digit` · `Phalcon\Filter\Validation\Validator\Email` · `Phalcon\Filter\Validation\Validator\Exception` · `Phalcon\Filter\Validation\Validator\ExclusionIn` · `Phalcon\Filter\Validation\Validator\File` · `Phalcon\Filter\Validation\Validator\Identical` · `Phalcon\Filter\Validation\Validator\InclusionIn` · `Phalcon\Filter\Validation\Validator\Ip` · `Phalcon\Filter\Validation\Validator\Numericality` · `Phalcon\Filter\Validation\Validator\PresenceOf` · `Phalcon\Filter\Validation\Validator\Regex` · `Phalcon\Filter\Validation\Validator\StringLength` · `Phalcon\Filter\Validation\Validator\Uniqueness` · `Phalcon\Filter\Validation\Validator\Url`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">TagFactory constructor.</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">ValidatorInterface</code>
<code class="sig"><span class="sf">newInstance</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Creates a new instance</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfactory-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
</a>
<a class="api-item" href="#filtervalidationvalidatorfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the available adapters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorfactory-__construct }

```php
public function __construct( array $services = [] );
```

TagFactory constructor.

#### `newInstance()` { #filtervalidationvalidatorfactory-newinstance }

```php
public function newInstance( string $name ): ValidatorInterface;
```

Creates a new instance

<div class="api-group">Protected · 2</div>

#### `getExceptionClass()` { #filtervalidationvalidatorfactory-getexceptionclass }

```php
protected function getExceptionClass(): string;
```

#### `getServices()` { #filtervalidationvalidatorfactory-getservices }

```php
protected function getServices(): array;
```

Returns the available adapters


## Filter\Validation\ValidatorInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/ValidatorInterface.zep){ .src-btn }

Interface for Phalcon\Filter\Validation\AbstractValidator

<div class="api-tree" markdown>

- **`Phalcon\Filter\Validation\ValidatorInterface`**

</div>

__Uses__ `Phalcon\Filter\Validation`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorinterface-getoption">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns an option in the validator&#039;s options</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorinterface-gettemplate">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTemplate</span>( <span class="st">string</span> <span class="sv">$field</span> )</code>
<span class="desc">Get the template message</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorinterface-gettemplates">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getTemplates</span>()</code>
<span class="desc">Get message templates</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorinterface-hasoption">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasOption</span>( <span class="st">string</span> <span class="sv">$key</span> )</code>
<span class="desc">Checks if an option is defined</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorinterface-settemplate">
<code class="vis vis-public">public</code>
<code class="ret">ValidatorInterface</code>
<code class="sig"><span class="sf">setTemplate</span>( <span class="st">string</span> <span class="sv">$template</span> )</code>
<span class="desc">Set a new template message</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorinterface-settemplates">
<code class="vis vis-public">public</code>
<code class="ret">ValidatorInterface</code>
<code class="sig"><span class="sf">setTemplates</span>( <span class="st">array</span> <span class="sv">$templates</span> )</code>
<span class="desc">Clear current template and set new from an array,</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorinterface-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

#### `getOption()` { #filtervalidationvalidatorinterface-getoption }

```php
public function getOption(
    string $key,
    mixed $defaultValue = null
): mixed;
```

Returns an option in the validator's options
Returns null if the option hasn't set

#### `getTemplate()` { #filtervalidationvalidatorinterface-gettemplate }

```php
public function getTemplate( string $field ): string;
```

Get the template message

#### `getTemplates()` { #filtervalidationvalidatorinterface-gettemplates }

```php
public function getTemplates(): array;
```

Get message templates

#### `hasOption()` { #filtervalidationvalidatorinterface-hasoption }

```php
public function hasOption( string $key ): bool;
```

Checks if an option is defined

#### `setTemplate()` { #filtervalidationvalidatorinterface-settemplate }

```php
public function setTemplate( string $template ): ValidatorInterface;
```

Set a new template message

#### `setTemplates()` { #filtervalidationvalidatorinterface-settemplates }

```php
public function setTemplates( array $templates ): ValidatorInterface;
```

Clear current template and set new from an array,

#### `validate()` { #filtervalidationvalidatorinterface-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Alnum

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Alnum.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Alnum`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatoralnum-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatoralnum-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must contain only letters and numbers&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatoralnum-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatoralnum-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Alpha

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Alpha.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Alpha`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatoralpha-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatoralpha-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must contain only letters&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatoralpha-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatoralpha-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Between

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Between.zep){ .src-btn }

Validates that a value is between an inclusive range of two values.
For a value x, the test is passed if minimum<=x<=maximum.

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Between`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorbetween-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorbetween-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must be within the range of :min to :max&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorbetween-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorbetween-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Callback

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Callback.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Callback`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exceptions\InvalidCallbackReturn` · `Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorcallback-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorcallback-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must match the callback function&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorcallback-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorcallback-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Confirmation

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Confirmation.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Confirmation`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\MissingMbstring` · `Phalcon\Messages\Message` · `Phalcon\Traits\Php\InfoTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorconfirmation-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorconfirmation-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorconfirmation-compare">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">compare</span>(<span class="prm"><span class="st">string</span> <span class="sv">$a</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$b</span></span>)</code>
<span class="desc">Compare strings</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must be the same as :with&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorconfirmation-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorconfirmation-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation

<div class="api-group">Protected · 1</div>

#### `compare()` { #filtervalidationvalidatorconfirmation-compare }

```php
final protected function compare(
    string $a,
    string $b
): bool;
```

Compare strings


## Filter\Validation\Validator\CreditCard

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/CreditCard.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\CreditCard`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorcreditcard-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorcreditcard-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field is not valid for a credit card number&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorcreditcard-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorcreditcard-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Date

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Date.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Date`**

</div>

__Uses__ `DateTime` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatordate-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatordate-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field is not a valid date&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatordate-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatordate-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Digit

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Digit.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Digit`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatordigit-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatordigit-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must be numeric&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatordigit-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatordigit-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Email

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Email.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Email`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatoremail-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatoremail-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must be an email address&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatoremail-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatoremail-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Filter\Validation\Validator\* classes will use this
class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Filter\Validation\Validator\Exception`**

</div>


## Filter\Validation\Validator\ExclusionIn

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/ExclusionIn.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\ExclusionIn`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\InvalidDomainOption` · `Phalcon\Filter\Validation\Exceptions\InvalidStrictOption` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorexclusionin-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorexclusionin-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must not be a part of list: :domain&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorexclusionin-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorexclusionin-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\File

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\AbstractValidatorComposite`](#filtervalidationabstractvalidatorcomposite)
        - **`Phalcon\Filter\Validation\Validator\File`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidatorComposite` · `Phalcon\Filter\Validation\Validator\File\MimeType` · `Phalcon\Filter\Validation\Validator\File\Resolution\AspectRatio` · `Phalcon\Filter\Validation\Validator\File\Resolution\Equal` · `Phalcon\Filter\Validation\Validator\File\Resolution\Max` · `Phalcon\Filter\Validation\Validator\File\Resolution\Min` · `Phalcon\Filter\Validation\Validator\File\Size\Equal` · `Phalcon\Filter\Validation\Validator\File\Size\Max` · `Phalcon\Filter\Validation\Validator\File\Size\Min` · `Phalcon\Messages\Message` · `Phalcon\Traits\Support\Helper\Arr\GetTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfile-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationvalidatorfile-__construct }

```php
public function __construct( array $options = [] );
```

Constructor


## Filter\Validation\Validator\File\AbstractFile

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/AbstractFile.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\File\AbstractFile`**
        - [`Phalcon\Filter\Validation\Validator\File\MimeType`](#filtervalidationvalidatorfilemimetype)
        - [`Phalcon\Filter\Validation\Validator\File\Resolution\AspectRatio`](#filtervalidationvalidatorfileresolutionaspectratio)
        - [`Phalcon\Filter\Validation\Validator\File\Resolution\Equal`](#filtervalidationvalidatorfileresolutionequal)
        - [`Phalcon\Filter\Validation\Validator\File\Resolution\Max`](#filtervalidationvalidatorfileresolutionmax)
        - [`Phalcon\Filter\Validation\Validator\File\Resolution\Min`](#filtervalidationvalidatorfileresolutionmin)
        - [`Phalcon\Filter\Validation\Validator\File\Size\Equal`](#filtervalidationvalidatorfilesizeequal)

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-checkupload">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">checkUpload</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Check upload</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-checkuploadisempty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">checkUploadIsEmpty</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Check if upload is empty</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-checkuploadisvalid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">checkUploadIsValid</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Check if upload is valid</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-checkuploadmaxsize">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">checkUploadMaxSize</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Check if uploaded file is larger than PHP allowed size</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-getfilesizeinbytes">
<code class="vis vis-public">public</code>
<code class="ret">double</code>
<code class="sig"><span class="sf">getFileSizeInBytes</span>( <span class="st">string</span> <span class="sv">$size</span> )</code>
<span class="desc">Convert a string like &quot;2.5MB&quot; in bytes</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-getmessagefileempty">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMessageFileEmpty</span>()</code>
<span class="desc">Empty is empty</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-getmessageinisize">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMessageIniSize</span>()</code>
<span class="desc">File exceeds the file size set in PHP configuration</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-getmessagevalid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getMessageValid</span>()</code>
<span class="desc">File is not valid</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-isallowempty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAllowEmpty</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Check on empty</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-setmessagefileempty">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setMessageFileEmpty</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">Empty is empty</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-setmessageinisize">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setMessageIniSize</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">File exceeds the file size set in PHP configuration</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-setmessagevalid">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setMessageValid</span>( <span class="st">string</span> <span class="sv">$message</span> )</code>
<span class="desc">File is not valid</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileabstractfile-checkisuploadedfile">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">checkIsUploadedFile</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a file has been uploaded; Internal check that can be</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$messageFileEmpty</span><span class="sm"> = &quot;Field :field must not be empty&quot;</span></code>
<span class="desc">Empty is empty</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$messageIniSize</span><span class="sm"> = &quot;File :field exceeds the maximum file size&quot;</span></code>
<span class="desc">File exceeds the file size set in PHP configuration</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$messageValid</span><span class="sm"> = &quot;Field :field is not valid&quot;</span></code>
<span class="desc">File is not valid</span>
</div>
</div>

### Methods

<div class="api-group">Public · 12</div>

#### `checkUpload()` { #filtervalidationvalidatorfileabstractfile-checkupload }

```php
public function checkUpload(
    Validation $validation,
    string $field
): bool;
```

Check upload

#### `checkUploadIsEmpty()` { #filtervalidationvalidatorfileabstractfile-checkuploadisempty }

```php
public function checkUploadIsEmpty(
    Validation $validation,
    string $field
): bool;
```

Check if upload is empty

#### `checkUploadIsValid()` { #filtervalidationvalidatorfileabstractfile-checkuploadisvalid }

```php
public function checkUploadIsValid(
    Validation $validation,
    string $field
): bool;
```

Check if upload is valid

#### `checkUploadMaxSize()` { #filtervalidationvalidatorfileabstractfile-checkuploadmaxsize }

```php
public function checkUploadMaxSize(
    Validation $validation,
    string $field
): bool;
```

Check if uploaded file is larger than PHP allowed size

#### `getFileSizeInBytes()` { #filtervalidationvalidatorfileabstractfile-getfilesizeinbytes }

```php
public function getFileSizeInBytes( string $size ): double;
```

Convert a string like "2.5MB" in bytes

#### `getMessageFileEmpty()` { #filtervalidationvalidatorfileabstractfile-getmessagefileempty }

```php
public function getMessageFileEmpty(): string;
```

Empty is empty

#### `getMessageIniSize()` { #filtervalidationvalidatorfileabstractfile-getmessageinisize }

```php
public function getMessageIniSize(): string;
```

File exceeds the file size set in PHP configuration

#### `getMessageValid()` { #filtervalidationvalidatorfileabstractfile-getmessagevalid }

```php
public function getMessageValid(): string;
```

File is not valid

#### `isAllowEmpty()` { #filtervalidationvalidatorfileabstractfile-isallowempty }

```php
public function isAllowEmpty(
    Validation $validation,
    string $field
): bool;
```

Check on empty

#### `setMessageFileEmpty()` { #filtervalidationvalidatorfileabstractfile-setmessagefileempty }

```php
public function setMessageFileEmpty( string $message ): void;
```

Empty is empty

#### `setMessageIniSize()` { #filtervalidationvalidatorfileabstractfile-setmessageinisize }

```php
public function setMessageIniSize( string $message ): void;
```

File exceeds the file size set in PHP configuration

#### `setMessageValid()` { #filtervalidationvalidatorfileabstractfile-setmessagevalid }

```php
public function setMessageValid( string $message ): void;
```

File is not valid

<div class="api-group">Protected · 1</div>

#### `checkIsUploadedFile()` { #filtervalidationvalidatorfileabstractfile-checkisuploadedfile }

```php
protected function checkIsUploadedFile( string $name ): bool;
```

Checks if a file has been uploaded; Internal check that can be
overridden in a subclass if you do not want to check uploaded files


## Filter\Validation\Validator\File\MimeType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/MimeType.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
        - **`Phalcon\Filter\Validation\Validator\File\MimeType`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\InvalidAllowedTypes` · `Phalcon\Messages\Message` · `Phalcon\Traits\Php\InfoTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfilemimetype-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;File :field must be of type: :types&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `validate()` { #filtervalidationvalidatorfilemimetype-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\File\Resolution\AspectRatio

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Resolution/AspectRatio.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
        - **`Phalcon\Filter\Validation\Validator\File\Resolution\AspectRatio`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfileresolutionaspectratio-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileresolutionaspectratio-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;File :field does not have the exact aspect ratio of :ratio&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorfileresolutionaspectratio-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorfileresolutionaspectratio-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\File\Resolution\Equal

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Resolution/Equal.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
        - **`Phalcon\Filter\Validation\Validator\File\Resolution\Equal`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfileresolutionequal-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileresolutionequal-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;The resolution of the field :field has to be equal :resolution&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorfileresolutionequal-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorfileresolutionequal-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\File\Resolution\Max

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Resolution/Max.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
        - **`Phalcon\Filter\Validation\Validator\File\Resolution\Max`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfileresolutionmax-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileresolutionmax-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;File :field exceeds the maximum resolution of :resolution&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorfileresolutionmax-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorfileresolutionmax-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\File\Resolution\Min

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Resolution/Min.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
        - **`Phalcon\Filter\Validation\Validator\File\Resolution\Min`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfileresolutionmin-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfileresolutionmin-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;File :field can not have the minimum resolution of :resolution&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorfileresolutionmin-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorfileresolutionmin-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\File\Size\Equal

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Size/Equal.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
        - **`Phalcon\Filter\Validation\Validator\File\Size\Equal`**
            - [`Phalcon\Filter\Validation\Validator\File\Size\Max`](#filtervalidationvalidatorfilesizemax)
            - [`Phalcon\Filter\Validation\Validator\File\Size\Min`](#filtervalidationvalidatorfilesizemin)

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfilesizeequal-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfilesizeequal-getconditional">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">getConditional</span>(<span class="prm"><span class="st">double</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">double</span> <span class="sv">$target</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$included</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Executes the conditional</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;File :field does not have the exact :size file size&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `validate()` { #filtervalidationvalidatorfilesizeequal-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation

<div class="api-group">Protected · 1</div>

#### `getConditional()` { #filtervalidationvalidatorfilesizeequal-getconditional }

```php
protected function getConditional(
    double $source,
    double $target,
    bool $included = false
);
```

Executes the conditional


## Filter\Validation\Validator\File\Size\Max

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Size/Max.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
        - [`Phalcon\Filter\Validation\Validator\File\Size\Equal`](#filtervalidationvalidatorfilesizeequal)
            - **`Phalcon\Filter\Validation\Validator\File\Size\Max`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfilesizemax-getconditional">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">getConditional</span>(<span class="prm"><span class="st">double</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">double</span> <span class="sv">$target</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$included</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Executes the conditional</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;File :field exceeds the size of :size&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Protected · 1</div>

#### `getConditional()` { #filtervalidationvalidatorfilesizemax-getconditional }

```php
protected function getConditional(
    double $source,
    double $target,
    bool $included = false
);
```

Executes the conditional


## Filter\Validation\Validator\File\Size\Min

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Size/Min.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
        - [`Phalcon\Filter\Validation\Validator\File\Size\Equal`](#filtervalidationvalidatorfilesizeequal)
            - **`Phalcon\Filter\Validation\Validator\File\Size\Min`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfilesizemin-getconditional">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">getConditional</span>(<span class="prm"><span class="st">double</span> <span class="sv">$source</span>,</span><span class="prm"><span class="st">double</span> <span class="sv">$target</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$included</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Executes the conditional</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;File :field can not have the minimum size of :size&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Protected · 1</div>

#### `getConditional()` { #filtervalidationvalidatorfilesizemin-getconditional }

```php
protected function getConditional(
    double $source,
    double $target,
    bool $included = false
);
```

Executes the conditional


## Filter\Validation\Validator\Files

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Files.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Files`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Messages` · `Phalcon\Messages\Messages`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorfiles-isallowempty">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isAllowEmpty</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Whole-field empty check: true when the field carries no uploaded files.</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfiles-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation, delegating each file to a <code>File</code> validator.</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorfiles-normalizefiles">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">normalizeFiles</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Normalizes a single file or a transposed multi-file <code>$_FILES</code> node into a</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `isAllowEmpty()` { #filtervalidationvalidatorfiles-isallowempty }

```php
public function isAllowEmpty(
    Validation $validation,
    string $field
): bool;
```

Whole-field empty check: true when the field carries no uploaded files.

#### `validate()` { #filtervalidationvalidatorfiles-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation, delegating each file to a `File` validator.

<div class="api-group">Protected · 1</div>

#### `normalizeFiles()` { #filtervalidationvalidatorfiles-normalizefiles }

```php
protected function normalizeFiles( mixed $value ): array;
```

Normalizes a single file or a transposed multi-file `$_FILES` node into a
list of single-file structures.


## Filter\Validation\Validator\Identical

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Identical.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Identical`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatoridentical-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatoridentical-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field does not have the expected value&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatoridentical-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatoridentical-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\InclusionIn

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/InclusionIn.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\InclusionIn`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\InvalidDomainOption` · `Phalcon\Filter\Validation\Exceptions\InvalidStrictOption` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorinclusionin-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorinclusionin-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must be a part of list: :domain&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorinclusionin-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorinclusionin-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Ip

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Ip.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Ip`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorip-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorip-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_4</span><span class="sm"> = FILTER_FLAG_IPV4</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">VERSION_6</span><span class="sm"> = FILTER_FLAG_IPV6</span></code>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must be a valid IP address&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorip-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorip-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Numericality

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Numericality.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Numericality`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatornumericality-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatornumericality-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field does not have a valid numeric format&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatornumericality-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatornumericality-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\PresenceOf

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/PresenceOf.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\PresenceOf`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorpresenceof-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorpresenceof-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field is required&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorpresenceof-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorpresenceof-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Regex

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Regex.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Regex`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorregex-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorregex-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field does not match the required format&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorregex-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorregex-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\StringLength

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/StringLength.zep){ .src-btn }

Validates that a string has the specified maximum and minimum constraints
The test is passed if for a string's length L, min<=L<=max, i.e. L must
be at least min, and at most max.
Since Phalcon v4.0 this validator works like a container

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\AbstractValidatorComposite`](#filtervalidationabstractvalidatorcomposite)
        - **`Phalcon\Filter\Validation\Validator\StringLength`**

</div>

__Uses__ `Phalcon\Filter\Validation\AbstractValidatorComposite` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Validator\StringLength\Max` · `Phalcon\Filter\Validation\Validator\StringLength\Min` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorstringlength-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #filtervalidationvalidatorstringlength-__construct }

```php
public function __construct( array $options = [] );
```

Constructor


## Filter\Validation\Validator\StringLength\Max

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/StringLength/Max.zep){ .src-btn }

Validates that a string has the specified maximum constraints
The test is passed if for a string's length L, L<=max, i.e. L must
be at most max.

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\StringLength\Max`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Messages\Message` · `Phalcon\Traits\Php\InfoTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorstringlengthmax-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorstringlengthmax-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must not exceed :max characters long&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorstringlengthmax-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorstringlengthmax-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\StringLength\Min

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/StringLength/Min.zep){ .src-btn }

Validates that a string has the specified minimum constraints
The test is passed if for a string's length L, min<=L, i.e. L must
be at least min.

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
            "included" => true
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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\StringLength\Min`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Messages\Message` · `Phalcon\Traits\Php\InfoTrait`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorstringlengthmin-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorstringlengthmin-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must be at least :min characters long&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorstringlengthmin-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorstringlengthmin-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation


## Filter\Validation\Validator\Uniqueness

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Uniqueness.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - [`Phalcon\Filter\Validation\AbstractCombinedFieldsValidator`](#filtervalidationabstractcombinedfieldsvalidator)
        - **`Phalcon\Filter\Validation\Validator\Uniqueness`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractCombinedFieldsValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\UniquenessConversionMustBeArray` · `Phalcon\Filter\Validation\Exceptions\UniquenessModelRequired` · `Phalcon\Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel` · `Phalcon\Messages\Message` · `Phalcon\Mvc\Model` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Support\Settings`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatoruniqueness-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatoruniqueness-getoption">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns an option in the validator&#039;s options</span>
</a>
<a class="api-item" href="#filtervalidationvalidatoruniqueness-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
<a class="api-item" href="#filtervalidationvalidatoruniqueness-getcolumnnamereal">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getColumnNameReal</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$record</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$field</span></span>)</code>
<span class="desc">The column map is used in the case to get real column name</span>
</a>
<a class="api-item" href="#filtervalidationvalidatoruniqueness-isuniqueness">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isUniqueness</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
</a>
<a class="api-item" href="#filtervalidationvalidatoruniqueness-isuniquenessmodel">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">isUniquenessModel</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$record</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$field</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$values</span></span>)</code>
<span class="desc">Uniqueness method used for model</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must be unique&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #filtervalidationvalidatoruniqueness-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `getOption()` { #filtervalidationvalidatoruniqueness-getoption }

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

#### `validate()` { #filtervalidationvalidatoruniqueness-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation

<div class="api-group">Protected · 3</div>

#### `getColumnNameReal()` { #filtervalidationvalidatoruniqueness-getcolumnnamereal }

```php
protected function getColumnNameReal(
    mixed $record,
    string $field
): string;
```

The column map is used in the case to get real column name

#### `isUniqueness()` { #filtervalidationvalidatoruniqueness-isuniqueness }

```php
protected function isUniqueness(
    Validation $validation,
    mixed $field
): bool;
```

#### `isUniquenessModel()` { #filtervalidationvalidatoruniqueness-isuniquenessmodel }

```php
protected function isUniquenessModel(
    mixed $record,
    array $field,
    array $values
);
```

Uniqueness method used for model


## Filter\Validation\Validator\Url

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Url.zep){ .src-btn }

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

<div class="api-tree" markdown>

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
    - **`Phalcon\Filter\Validation\Validator\Url`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationvalidatorurl-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span> )</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#filtervalidationvalidatorurl-validate">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">validate</span>(<span class="prm"><span class="st">Validation</span> <span class="sv">$validation</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$field</span></span>)</code>
<span class="desc">Executes the validation</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$template</span><span class="sm"> = &quot;Field :field must be a url&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #filtervalidationvalidatorurl-__construct }

```php
public function __construct( array $options = [] );
```

Constructor

#### `validate()` { #filtervalidationvalidatorurl-validate }

```php
public function validate(
    Validation $validation,
    mixed $field
): bool;
```

Executes the validation
