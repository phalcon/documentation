---
title: "Phalcon Filter"
version: "5.15"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Filter

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Filter\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Exception.zep">Source on GitHub</a>

Phalcon\Filter\Exception

Exceptions thrown in Phalcon\Filter will use this class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Filter\Exception`**
- [`Phalcon\Filter\Exceptions\FilterNotRegistered`](#filterexceptionsfilternotregistered)

</div>

## Filter\Exceptions\FilterNotRegistered

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Exceptions/FilterNotRegistered.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Exception`](#filterexception)
- **`Phalcon\Filter\Exceptions\FilterNotRegistered`**

</div>

__Uses__ `Phalcon\Filter\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filterexceptionsfilternotregistered-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filterexceptionsfilternotregistered-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Filter\Filter

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Filter.zep">Source on GitHub</a>

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

<div class="api-tree">

- **`Phalcon\Filter\Filter`** — implements [`Phalcon\Filter\FilterInterface`](#filterfilterinterface)

</div>

__Uses__ `Phalcon\Filter\Exceptions\FilterNotRegistered`

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

<div class="api-group">Protected · 1</div>

<h4 id="filterfilter-init"><code>init()</code></h4>

```php
protected function init( array $mapper ): void;
```

Loads the objects in the internal mapper array

## Filter\FilterFactory

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/FilterFactory.zep">Source on GitHub</a>

Class FilterFactory

@package Phalcon\Filter

<div class="api-tree">

- **`Phalcon\Filter\FilterFactory`**

</div>

__Uses__ `Phalcon\Filter\Filter`

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

<h4 id="filterfilterfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance(): FilterInterface;
```

Returns a Locator object with all the helpers defined in anonymous
functions

<div class="api-group">Protected · 1</div>

<h4 id="filterfilterfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```

Returns the available adapters

## Filter\FilterInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/FilterInterface.zep">Source on GitHub</a>

Lazy loads, stores and exposes sanitizer objects

<div class="api-tree">

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/AbsInt.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\AbsInt

Sanitizes a value to absolute integer

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\AbsInt`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeabsint-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizeabsint-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\Alnum

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Alnum.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Alnum

Sanitizes a value to an alphanumeric value

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Alnum`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizealnum-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizealnum-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\Alpha

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Alpha.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Alpha

Sanitizes a value to an alpha value

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Alpha`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizealpha-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizealpha-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\BoolVal

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/BoolVal.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\BoolVal

Sanitizes a value to boolean

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\BoolVal`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeboolval-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizeboolval-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\Email

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Email.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Email

Sanitizes an email string

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Email`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeemail-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizeemail-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\FloatVal

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/FloatVal.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\FloatVal

Sanitizes a value to float

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\FloatVal`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizefloatval-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizefloatval-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\IntVal

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/IntVal.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\IntVal

Sanitizes a value to integer

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\IntVal`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeintval-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizeintval-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\Ip

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Ip.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\IP

Sanitizes a value to an ip address or CIDR range

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Ip`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

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

<h4 id="filtersanitizeip-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $input,
int $filter = 0
): string|false;
```

## Filter\Sanitize\Lower

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Lower.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Lower

Sanitizes a value to lowercase

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Lower`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizelower-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizelower-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\LowerFirst

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/LowerFirst.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\LowerFirst

Sanitizes a value to lcfirst

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\LowerFirst`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizelowerfirst-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizelowerfirst-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\Regex

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Regex.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Regex

Sanitizes a value performing preg_replace

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Regex`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeregex-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$pattern</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$replace</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizeregex-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $input,
mixed $pattern,
mixed $replace
);
```

## Filter\Sanitize\Remove

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Remove.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Remove

Sanitizes a value removing parts of a string

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Remove`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeremove-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$replace</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizeremove-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $input,
mixed $replace
);
```

## Filter\Sanitize\Replace

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Replace.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Replace

Sanitizes a value replacing parts of a string

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Replace`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizereplace-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$from</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$to</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizereplace-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
mixed $input,
mixed $from,
mixed $to
);
```

## Filter\Sanitize\Special

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Special.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Special

Sanitizes a value special characters

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Special`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizespecial-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizespecial-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\SpecialFull

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/SpecialFull.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\SpecialFull

Sanitizes a value special characters (htmlspecialchars() and ENT_QUOTES)

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\SpecialFull`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizespecialfull-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizespecialfull-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\StringVal

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/StringVal.zep">Source on GitHub</a>

Sanitizes a value to string

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\StringVal`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

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

<h4 id="filtersanitizestringval-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke(
string $input,
int $flags = 11
): string;
```

## Filter\Sanitize\StringValLegacy

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/StringValLegacy.zep">Source on GitHub</a>

Sanitizes a value to string using `filter_var()`. The filter provides
backwards compatibility with versions prior to v5. For PHP higher or equal to
8.1, the filter will remain the string unchanged. If anything other than a
string is passed, the method will return false

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\StringValLegacy`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizestringvallegacy-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizestringvallegacy-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Sanitize\Striptags

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Striptags.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Striptags

Sanitizes a value striptags

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Striptags`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizestriptags-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizestriptags-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\Trim

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Trim.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Trim

Sanitizes a value removing leading and trailing spaces

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Trim`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizetrim-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizetrim-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\Upper

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Upper.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Upper

Sanitizes a value to uppercase

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Upper`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeupper-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizeupper-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\UpperFirst

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/UpperFirst.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\UpperFirst

Sanitizes a value to ucfirst

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\UpperFirst`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeupperfirst-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizeupperfirst-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\UpperWords

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/UpperWords.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\UpperWords

Sanitizes a value to uppercase the first character of each word

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\UpperWords`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeupperwords-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizeupperwords-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( string $input );
```

## Filter\Sanitize\Url

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Sanitize/Url.zep">Source on GitHub</a>

Phalcon\Filter\Sanitize\Url

Sanitizes a value url

<div class="api-tree">

- **`Phalcon\Filter\Sanitize\Url`** — implements [`Phalcon\Contracts\Filter\Sanitizer`](/5.15/api/phalcon_contracts/#contractsfiltersanitizer)

</div>

__Uses__ `Phalcon\Contracts\Filter\Sanitizer`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtersanitizeurl-__invoke">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__invoke</span>( <span class="st">mixed</span> <span class="sv">$input</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtersanitizeurl-__invoke"><code>__invoke()</code></h4>

```php
public function __invoke( mixed $input );
```

## Filter\Validation

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation.zep">Source on GitHub</a>

Allows to validate data using custom or built-in validators

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\Injectable`](/5.15/api/phalcon_di/#diinjectable)
- **`Phalcon\Filter\Validation`** — implements [`Phalcon\Filter\Validation\ValidationInterface`](#filtervalidationvalidationinterface)

</div>

__Uses__ `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Filter\FilterInterface` · `Phalcon\Filter\Validation\AbstractCombinedFieldsValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\FilterServiceUnavailable` · `Phalcon\Filter\Validation\Exceptions\InvalidFieldType` · `Phalcon\Filter\Validation\Exceptions\InvalidFilterService` · `Phalcon\Filter\Validation\Exceptions\InvalidValidationData` · `Phalcon\Filter\Validation\Exceptions\InvalidValidator` · `Phalcon\Filter\Validation\Exceptions\InvalidValidatorScope` · `Phalcon\Filter\Validation\Exceptions\NoDataToValidate` · `Phalcon\Filter\Validation\Exceptions\NoValidators` · `Phalcon\Filter\Validation\Exceptions\ValidationEntityNotObject` · `Phalcon\Filter\Validation\ValidationInterface` · `Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages`

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

<div class="api-group">Public · 21</div>

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

<h4 id="filtervalidation-getentity"><code>getEntity()</code></h4>

```php
public function getEntity(): mixed;
```

Returns the bound entity

<h4 id="filtervalidation-getfilters"><code>getFilters()</code></h4>

```php
public function getFilters( string $field = null ): mixed|null;
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

Gets the a value to validate in the array/object data source

<h4 id="filtervalidation-getvaluebydata"><code>getValueByData()</code></h4>

```php
public function getValueByData(
mixed $data,
string $field
): mixed|null;
```

Gets the a value to validate in the array/object data source

<h4 id="filtervalidation-getvaluebyentity"><code>getValueByEntity()</code></h4>

```php
public function getValueByEntity(
mixed $entity,
string $field
): mixed|null;
```

Gets the a value to validate in the object entity source

<h4 id="filtervalidation-rule"><code>rule()</code></h4>

```php
public function rule(
mixed $field,
ValidatorInterface $validator
): static;
```

Alias of `add` method

<h4 id="filtervalidation-rules"><code>rules()</code></h4>

```php
public function rules(
mixed $field,
array $validators
): static;
```

Adds the validators to a field

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

<div class="api-group">Protected · 1</div>

<h4 id="filtervalidation-prechecking"><code>preChecking()</code></h4>

```php
protected function preChecking(
mixed $field,
ValidatorInterface $validator
): bool;
```

Internal validations, if it returns true, then skip the current validator

## Filter\Validation\AbstractCombinedFieldsValidator

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/AbstractCombinedFieldsValidator.zep">Source on GitHub</a>

This is a base class for combined fields validators

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\AbstractCombinedFieldsValidator`**
- [`Phalcon\Filter\Validation\Validator\Uniqueness`](#filtervalidationvalidatoruniqueness)

</div>

## Filter\Validation\AbstractValidator

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/AbstractValidator.zep">Source on GitHub</a>

This is a base class for validators

<div class="api-tree">

- **`Phalcon\Filter\Validation\AbstractValidator`** — implements [`Phalcon\Filter\Validation\ValidatorInterface`](#filtervalidationvalidatorinterface)
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
<code class="ret">array</code>
<code class="sig"><span class="sv">$templates</span><span class="sm"> = []</span></code>
<span class="desc">Message templates</span>
</div>
</div>

### Methods

<div class="api-group">Public · 11</div>

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
public function getTemplate( string $field = null ): string;
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

<div class="api-group">Protected · 4</div>

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

## Filter\Validation\AbstractValidatorComposite

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/AbstractValidatorComposite.zep">Source on GitHub</a>

This is a base class for combined fields validators

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\AbstractValidatorComposite`** — implements [`Phalcon\Filter\Validation\ValidatorCompositeInterface`](#filtervalidationvalidatorcompositeinterface)
- [`Phalcon\Filter\Validation\Validator\File`](#filtervalidationvalidatorfile)
- [`Phalcon\Filter\Validation\Validator\StringLength`](#filtervalidationvalidatorstringlength)

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Exceptions\NoValidatorsInComposite`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationabstractvalidatorcomposite-getvalidators">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getValidators</span>()</code>
</a>
<a class="api-item" href="#filtervalidationabstractvalidatorcomposite-validate">
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
<code class="ret">array</code>
<code class="sig"><span class="sv">$validators</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="filtervalidationabstractvalidatorcomposite-getvalidators"><code>getValidators()</code></h4>

```php
public function getValidators(): array;
```

<h4 id="filtervalidationabstractvalidatorcomposite-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Filter\Validation\* classes will use this class

<div class="api-tree">

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/FieldNotPrintable.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\FieldNotPrintable`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsfieldnotprintable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsfieldnotprintable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\FilterServiceUnavailable

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/FilterServiceUnavailable.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\FilterServiceUnavailable`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsfilterserviceunavailable-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsfilterserviceunavailable-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidAllowedTypes

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidAllowedTypes.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidAllowedTypes`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidallowedtypes-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsinvalidallowedtypes-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidCallbackReturn

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidCallbackReturn.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidCallbackReturn`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidcallbackreturn-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsinvalidcallbackreturn-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidDomainOption

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidDomainOption.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidDomainOption`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvaliddomainoption-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsinvaliddomainoption-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidFieldType

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidFieldType.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidFieldType`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidfieldtype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsinvalidfieldtype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidFilterService

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidFilterService.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidFilterService`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidfilterservice-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsinvalidfilterservice-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidStrictOption

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidStrictOption.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidStrictOption`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidstrictoption-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsinvalidstrictoption-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidValidationData

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidValidationData.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidValidationData`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidvalidationdata-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsinvalidvalidationdata-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidValidator

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidValidator.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidValidator`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidvalidator-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsinvalidvalidator-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\InvalidValidatorScope

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/InvalidValidatorScope.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\InvalidValidatorScope`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsinvalidvalidatorscope-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsinvalidvalidatorscope-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\MissingMbstring

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/MissingMbstring.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\MissingMbstring`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsmissingmbstring-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsmissingmbstring-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\NoDataToValidate

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/NoDataToValidate.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\NoDataToValidate`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsnodatatovalidate-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsnodatatovalidate-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\NoValidators

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/NoValidators.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\NoValidators`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsnovalidators-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsnovalidators-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\NoValidatorsInComposite

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/NoValidatorsInComposite.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\NoValidatorsInComposite`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsnovalidatorsincomposite-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$className</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsnovalidatorsincomposite-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $className );
```

## Filter\Validation\Exceptions\UniquenessConversionMustBeArray

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/UniquenessConversionMustBeArray.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\UniquenessConversionMustBeArray`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsuniquenessconversionmustbearray-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsuniquenessconversionmustbearray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\UniquenessModelRequired

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/UniquenessModelRequired.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\UniquenessModelRequired`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsuniquenessmodelrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsuniquenessmodelrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/UniquenessOnlyForPhalconModel.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsuniquenessonlyforphalconmodel-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsuniquenessonlyforphalconmodel-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\Exceptions\ValidationEntityNotObject

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Exceptions/ValidationEntityNotObject.zep">Source on GitHub</a>

<div class="api-tree">

- `\Exception`
- [`Phalcon\Filter\Validation\Exception`](#filtervalidationexception)
- **`Phalcon\Filter\Validation\Exceptions\ValidationEntityNotObject`**

</div>

__Uses__ `Phalcon\Filter\Validation\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#filtervalidationexceptionsvalidationentitynotobject-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="filtervalidationexceptionsvalidationentitynotobject-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Filter\Validation\ValidationInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/ValidationInterface.zep">Source on GitHub</a>

Interface for the Phalcon\Filter\Validation component

<div class="api-tree">

- **`Phalcon\Filter\Validation\ValidationInterface`**

</div>

__Uses__ `Phalcon\Di\Injectable` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages`

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
public function getFilters( string $field = null ): mixed|null;
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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/ValidatorCompositeInterface.zep">Source on GitHub</a>

This is a base class for combined fields validators

<div class="api-tree">

- **`Phalcon\Filter\Validation\ValidatorCompositeInterface`**

</div>

__Uses__ `Phalcon\Filter\Validation`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/ValidatorFactory.zep">Source on GitHub</a>

<div class="api-tree">

- [`Phalcon\Factory\AbstractConfigFactory`](/5.15/api/phalcon_factory/#factoryabstractconfigfactory)
- [`Phalcon\Factory\AbstractFactory`](/5.15/api/phalcon_factory/#factoryabstractfactory)
- **`Phalcon\Filter\Validation\ValidatorFactory`**

</div>

__Uses__ `Phalcon\Factory\AbstractFactory`

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

<h4 id="filtervalidationvalidatorfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

TagFactory constructor.

<h4 id="filtervalidationvalidatorfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name ): ValidatorInterface;
```

Creates a new instance

<div class="api-group">Protected · 2</div>

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

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/ValidatorInterface.zep">Source on GitHub</a>

Interface for Phalcon\Filter\Validation\AbstractValidator

<div class="api-tree">

- **`Phalcon\Filter\Validation\ValidatorInterface`**

</div>

__Uses__ `Phalcon\Filter\Validation`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Alnum.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Alnum`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Alpha.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Alpha`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Between.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Between`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Callback.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Callback`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exceptions\InvalidCallbackReturn` · `Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Confirmation.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Confirmation`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\MissingMbstring` · `Phalcon\Messages\Message`

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

<div class="api-group">Protected · 1</div>

<h4 id="filtervalidationvalidatorconfirmation-compare"><code>compare()</code></h4>

```php
final protected function compare(
string $a,
string $b
): bool;
```

Compare strings

## Filter\Validation\Validator\CreditCard

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/CreditCard.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\CreditCard`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Date.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Date`**

</div>

__Uses__ `DateTime` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Digit.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Digit`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Email.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Email`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Filter\Validation\Validator\* classes will use this
class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Filter\Validation\Validator\Exception`**

</div>

## Filter\Validation\Validator\ExclusionIn

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/ExclusionIn.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\ExclusionIn`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\InvalidDomainOption` · `Phalcon\Filter\Validation\Exceptions\InvalidStrictOption` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\AbstractValidatorComposite`](#filtervalidationabstractvalidatorcomposite)
- **`Phalcon\Filter\Validation\Validator\File`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidatorComposite` · `Phalcon\Filter\Validation\Validator\File\MimeType` · `Phalcon\Filter\Validation\Validator\File\Resolution\AspectRatio` · `Phalcon\Filter\Validation\Validator\File\Resolution\Equal` · `Phalcon\Filter\Validation\Validator\File\Resolution\Max` · `Phalcon\Filter\Validation\Validator\File\Resolution\Min` · `Phalcon\Filter\Validation\Validator\File\Size\Equal` · `Phalcon\Filter\Validation\Validator\File\Size\Max` · `Phalcon\Filter\Validation\Validator\File\Size\Min` · `Phalcon\Messages\Message` · `Phalcon\Support\Helper\Arr\Get`

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

<h4 id="filtervalidationvalidatorfile-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

## Filter\Validation\Validator\File\AbstractFile

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/AbstractFile.zep">Source on GitHub</a>

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

<div class="api-tree">

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
public function getFileSizeInBytes( string $size ): double;
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

<div class="api-group">Protected · 1</div>

<h4 id="filtervalidationvalidatorfileabstractfile-checkisuploadedfile"><code>checkIsUploadedFile()</code></h4>

```php
protected function checkIsUploadedFile( string $name ): bool;
```

Checks if a file has been uploaded; Internal check that can be
overridden in a subclass if you do not want to check uploaded files

## Filter\Validation\Validator\File\MimeType

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/MimeType.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\MimeType`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\InvalidAllowedTypes` · `Phalcon\Messages\Message`

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

<h4 id="filtervalidationvalidatorfilemimetype-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

## Filter\Validation\Validator\File\Resolution\AspectRatio

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Resolution/AspectRatio.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\Resolution\AspectRatio`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Resolution/Equal.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\Resolution\Equal`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Resolution/Max.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\Resolution\Max`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Resolution/Min.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\Resolution\Min`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Size/Equal.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\Validator\File\AbstractFile`](#filtervalidationvalidatorfileabstractfile)
- **`Phalcon\Filter\Validation\Validator\File\Size\Equal`**
- [`Phalcon\Filter\Validation\Validator\File\Size\Max`](#filtervalidationvalidatorfilesizemax)
- [`Phalcon\Filter\Validation\Validator\File\Size\Min`](#filtervalidationvalidatorfilesizemin)

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\Validator\File\AbstractFile`

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

<h4 id="filtervalidationvalidatorfilesizeequal-validate"><code>validate()</code></h4>

```php
public function validate(
Validation $validation,
mixed $field
): bool;
```

Executes the validation

<div class="api-group">Protected · 1</div>

<h4 id="filtervalidationvalidatorfilesizeequal-getconditional"><code>getConditional()</code></h4>

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Size/Max.zep">Source on GitHub</a>

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

<div class="api-tree">

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

<h4 id="filtervalidationvalidatorfilesizemax-getconditional"><code>getConditional()</code></h4>

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
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/File/Size/Min.zep">Source on GitHub</a>

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

<div class="api-tree">

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

<h4 id="filtervalidationvalidatorfilesizemin-getconditional"><code>getConditional()</code></h4>

```php
protected function getConditional(
double $source,
double $target,
bool $included = false
);
```

Executes the conditional

## Filter\Validation\Validator\Identical

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Identical.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Identical`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/InclusionIn.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\InclusionIn`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\InvalidDomainOption` · `Phalcon\Filter\Validation\Exceptions\InvalidStrictOption` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Ip.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Ip`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Numericality.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Numericality`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/PresenceOf.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\PresenceOf`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Regex.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Regex`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/StringLength.zep">Source on GitHub</a>

Validates that a string has the specified maximum and minimum constraints
The test is passed if for a string's length L, min&lt;=L&lt;=max, i.e. L must
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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\AbstractValidatorComposite`](#filtervalidationabstractvalidatorcomposite)
- **`Phalcon\Filter\Validation\Validator\StringLength`**

</div>

__Uses__ `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\AbstractValidatorComposite` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Validator\StringLength\Max` · `Phalcon\Filter\Validation\Validator\StringLength\Min` · `Phalcon\Messages\Message`

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

<h4 id="filtervalidationvalidatorstringlength-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $options = [] );
```

Constructor

## Filter\Validation\Validator\StringLength\Max

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/StringLength/Max.zep">Source on GitHub</a>

Validates that a string has the specified maximum constraints
The test is passed if for a string's length L, L&lt;=max, i.e. L must
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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\StringLength\Max`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/StringLength/Min.zep">Source on GitHub</a>

Validates that a string has the specified minimum constraints
The test is passed if for a string's length L, min&lt;=L, i.e. L must
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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\StringLength\Min`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Messages\Message`

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Uniqueness.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- [`Phalcon\Filter\Validation\AbstractCombinedFieldsValidator`](#filtervalidationabstractcombinedfieldsvalidator)
- **`Phalcon\Filter\Validation\Validator\Uniqueness`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractCombinedFieldsValidator` · `Phalcon\Filter\Validation\Exception` · `Phalcon\Filter\Validation\Exceptions\UniquenessConversionMustBeArray` · `Phalcon\Filter\Validation\Exceptions\UniquenessModelRequired` · `Phalcon\Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel` · `Phalcon\Messages\Message` · `Phalcon\Mvc\Model` · `Phalcon\Mvc\ModelInterface` · `Phalcon\Support\Settings`

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

<div class="api-group">Protected · 3</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Filter/Validation/Validator/Url.zep">Source on GitHub</a>

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

<div class="api-tree">

- [`Phalcon\Filter\Validation\AbstractValidator`](#filtervalidationabstractvalidator)
- **`Phalcon\Filter\Validation\Validator\Url`**

</div>

__Uses__ `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\AbstractValidator` · `Phalcon\Messages\Message`

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

Source: https://docs.phalcon.io/5.15/api/phalcon_filter/index.mdx
