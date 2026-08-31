---
title: "Phalcon Traits"
version: "5.20"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Traits

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Traits\Factory\ConfigTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Factory/ConfigTrait.zep">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Traits\Factory\ConfigTrait`**

</div>

__Uses__ `Phalcon\Config\ConfigInterface`

__Used by__ [`Phalcon\Auth\ManagerFactory`](/5.20/api/phalcon_auth/#authmanagerfactory)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsfactoryconfigtrait-checkconfig">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">checkConfig</span>( <span class="st">mixed</span> <span class="sv">$config</span> )</code>
</a>
<a class="api-item" href="#traitsfactoryconfigtrait-checkconfigelement">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">checkConfigElement</span>(<span class="prm"><span class="st">array</span> <span class="sv">$config</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$element</span></span>)</code>
<span class="desc">Checks if the config has a specific element</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 2</div>

<h4 id="traitsfactoryconfigtrait-checkconfig"><code>checkConfig()</code></h4>

```php
protected function checkConfig( mixed $config ): array;
```

<h4 id="traitsfactoryconfigtrait-checkconfigelement"><code>checkConfigElement()</code></h4>

```php
protected function checkConfigElement(
array $config,
string $element
): array;
```

Checks if the config has a specific element

## Traits\Factory\FactoryTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Factory/FactoryTrait.zep">Source on GitHub</a>

Methods allowing a mapper based factory to operate. Supports injected
services, getting a service by name (key), initialization and setting of
the exception class (when exceptions are needed to be thrown)

<div class="api-tree">

- **`Phalcon\Traits\Factory\FactoryTrait`**

</div>

__Uses__ `Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsfactoryfactorytrait-getcachedinstance">
<code class="vis vis-protected">protected</code>
<code class="ret">object</code>
<code class="sig"><span class="sf">getCachedInstance</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$arguments</span></span>)</code>
<span class="desc">Return an object from the instances pool. If it does not exist, create it</span>
</a>
<a class="api-item" href="#traitsfactoryfactorytrait-getexceptionclass">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getExceptionClass</span>()</code>
<span class="desc">Returns the exception class for the factory</span>
</a>
<a class="api-item" href="#traitsfactoryfactorytrait-getservice">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getService</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a service based on the name; throws exception if it does not</span>
</a>
<a class="api-item" href="#traitsfactoryfactorytrait-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getServices</span>()</code>
<span class="desc">Returns the services for the factory</span>
</a>
<a class="api-item" href="#traitsfactoryfactorytrait-init">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">init</span>( <span class="st">array</span> <span class="sv">$services</span><span class="sm"> = []</span> )</code>
<span class="desc">Initializes services</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 5</div>

<h4 id="traitsfactoryfactorytrait-getcachedinstance"><code>getCachedInstance()</code></h4>

```php
protected function getCachedInstance(
string $name,
mixed $arguments
): object;
```

Return an object from the instances pool. If it does not exist, create it

<h4 id="traitsfactoryfactorytrait-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
abstract protected function getExceptionClass(): string;
```

Returns the exception class for the factory

<h4 id="traitsfactoryfactorytrait-getservice"><code>getService()</code></h4>

```php
protected function getService( string $name ): string;
```

Returns a service based on the name; throws exception if it does not
exist

<h4 id="traitsfactoryfactorytrait-getservices"><code>getServices()</code></h4>

```php
abstract protected function getServices(): array;
```

Returns the services for the factory

<h4 id="traitsfactoryfactorytrait-init"><code>init()</code></h4>

```php
protected function init( array $services = [] ): void;
```

Initializes services

## Traits\Php\ApcuTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/ApcuTrait.zep">Source on GitHub</a>

APCu based wrapper methods

<div class="api-tree">

- **`Phalcon\Traits\Php\ApcuTrait`**

</div>

__Used by__ [`Phalcon\Storage\Adapter\Apcu`](/5.20/api/phalcon_storage/#storageadapterapcu)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpapcutrait-phpapcudec">
<code class="vis vis-protected">protected</code>
<code class="ret">bool|int</code>
<code class="sig"><span class="sf">phpApcuDec</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$step</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.apcu-dec.php</span>
</a>
<a class="api-item" href="#traitsphpapcutrait-phpapcudelete">
<code class="vis vis-protected">protected</code>
<code class="ret">bool|array</code>
<code class="sig"><span class="sf">phpApcuDelete</span>( <span class="st">mixed</span> <span class="sv">$key</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.apcu-delete.php</span>
</a>
<a class="api-item" href="#traitsphpapcutrait-phpapcuexists">
<code class="vis vis-protected">protected</code>
<code class="ret">bool|array</code>
<code class="sig"><span class="sf">phpApcuExists</span>( <span class="st">mixed</span> <span class="sv">$key</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.apcu-exists.php</span>
</a>
<a class="api-item" href="#traitsphpapcutrait-phpapcufetch">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">phpApcuFetch</span>( <span class="st">mixed</span> <span class="sv">$key</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.apcu-fetch.php</span>
</a>
<a class="api-item" href="#traitsphpapcutrait-phpapcuinc">
<code class="vis vis-protected">protected</code>
<code class="ret">bool|int</code>
<code class="sig"><span class="sf">phpApcuInc</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$step</span><span class="sm"> = 1</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.apcu-inc.php</span>
</a>
<a class="api-item" href="#traitsphpapcutrait-phpapcuiterator">
<code class="vis vis-protected">protected</code>
<code class="ret">\APCUIterator|bool</code>
<code class="sig"><span class="sf">phpApcuIterator</span>( <span class="st">string</span> <span class="sv">$pattern</span> )</code>
<span class="desc">@link https://php.net/manual/en/class.apcuiterator.php</span>
</a>
<a class="api-item" href="#traitsphpapcutrait-phpapcustore">
<code class="vis vis-protected">protected</code>
<code class="ret">bool|array</code>
<code class="sig"><span class="sf">phpApcuStore</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$payload</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$ttl</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.apcu-store.php</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 7</div>

<h4 id="traitsphpapcutrait-phpapcudec"><code>phpApcuDec()</code></h4>

```php
protected static function phpApcuDec(
mixed $key,
int $step = 1
): bool|int;
```

@link https://php.net/manual/en/function.apcu-dec.php

<h4 id="traitsphpapcutrait-phpapcudelete"><code>phpApcuDelete()</code></h4>

```php
protected static function phpApcuDelete( mixed $key ): bool|array;
```

@link https://php.net/manual/en/function.apcu-delete.php

<h4 id="traitsphpapcutrait-phpapcuexists"><code>phpApcuExists()</code></h4>

```php
protected static function phpApcuExists( mixed $key ): bool|array;
```

@link https://php.net/manual/en/function.apcu-exists.php

<h4 id="traitsphpapcutrait-phpapcufetch"><code>phpApcuFetch()</code></h4>

```php
protected static function phpApcuFetch( mixed $key ): mixed;
```

@link https://php.net/manual/en/function.apcu-fetch.php

<h4 id="traitsphpapcutrait-phpapcuinc"><code>phpApcuInc()</code></h4>

```php
protected static function phpApcuInc(
mixed $key,
int $step = 1
): bool|int;
```

@link https://php.net/manual/en/function.apcu-inc.php

<h4 id="traitsphpapcutrait-phpapcuiterator"><code>phpApcuIterator()</code></h4>

```php
protected static function phpApcuIterator( string $pattern ): \APCUIterator|bool;
```

@link https://php.net/manual/en/class.apcuiterator.php

<h4 id="traitsphpapcutrait-phpapcustore"><code>phpApcuStore()</code></h4>

```php
protected static function phpApcuStore(
mixed $key,
mixed $payload,
int $ttl = 0
): bool|array;
```

@link https://php.net/manual/en/function.apcu-store.php

## Traits\Php\Base64Trait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/Base64Trait.zep">Source on GitHub</a>

Base64 based wrapper methods

<div class="api-tree">

- **`Phalcon\Traits\Php\Base64Trait`**

</div>

__Used by__ [`Phalcon\Encryption\Crypt`](/5.20/api/phalcon_encryption/#encryptioncrypt) · [`Phalcon\Encryption\Security\JWT\Builder`](/5.20/api/phalcon_encryption/#encryptionsecurityjwtbuilder) · [`Phalcon\Encryption\Security\JWT\Token\Parser`](/5.20/api/phalcon_encryption/#encryptionsecurityjwttokenparser) · [`Phalcon\Storage\Serializer\Base64`](/5.20/api/phalcon_storage/#storageserializerbase64)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpbase64trait-dodecodeurl">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">doDecodeUrl</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Decode a Base64 URL string</span>
</a>
<a class="api-item" href="#traitsphpbase64trait-doencodeurl">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">doEncodeUrl</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">Encode a string in Base64 URL format</span>
</a>
<a class="api-item" href="#traitsphpbase64trait-phpbase64decode">
<code class="vis vis-protected">protected</code>
<code class="ret">string|false</code>
<code class="sig"><span class="sf">phpBase64Decode</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$strict</span><span class="sm"> = false</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.base64-decode.php</span>
</a>
<a class="api-item" href="#traitsphpbase64trait-phpbase64encode">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">phpBase64Encode</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.base64-encode.php</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 4</div>

<h4 id="traitsphpbase64trait-dodecodeurl"><code>doDecodeUrl()</code></h4>

```php
protected static function doDecodeUrl( string $input ): string;
```

Decode a Base64 URL string

<h4 id="traitsphpbase64trait-doencodeurl"><code>doEncodeUrl()</code></h4>

```php
protected static function doEncodeUrl( string $input ): string;
```

Encode a string in Base64 URL format

<h4 id="traitsphpbase64trait-phpbase64decode"><code>phpBase64Decode()</code></h4>

```php
protected static function phpBase64Decode(
string $input,
bool $strict = false
): string|false;
```

@link https://php.net/manual/en/function.base64-decode.php

<h4 id="traitsphpbase64trait-phpbase64encode"><code>phpBase64Encode()</code></h4>

```php
protected static function phpBase64Encode( string $input ): string;
```

@link https://php.net/manual/en/function.base64-encode.php

## Traits\Php\FileTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/FileTrait.zep">Source on GitHub</a>

File based wrapper methods

<div class="api-tree">

- **`Phalcon\Traits\Php\FileTrait`**

</div>

__Used by__ [`Phalcon\Annotations\Adapter\Stream`](/5.20/api/phalcon_annotations/#annotationsadapterstream) · [`Phalcon\Assets\Asset`](/5.20/api/phalcon_assets/#assetsasset) · [`Phalcon\Assets\Collection`](/5.20/api/phalcon_assets/#assetscollection) · [`Phalcon\Assets\Manager`](/5.20/api/phalcon_assets/#assetsmanager) · [`Phalcon\Auth\Adapter\Stream`](/5.20/api/phalcon_auth/#authadapterstream) · [`Phalcon\Cli\Console`](/5.20/api/phalcon_cli/#cliconsole) · [`Phalcon\Config\Adapter\Json`](/5.20/api/phalcon_config/#configadapterjson) · [`Phalcon\Encryption\Security\Uuid\SysNodeProvider`](/5.20/api/phalcon_encryption/#encryptionsecurityuuidsysnodeprovider) · [`Phalcon\Forms\Loader\JsonLoader`](/5.20/api/phalcon_forms/#formsloaderjsonloader) · [`Phalcon\Http\Request`](/5.20/api/phalcon_http/#httprequest) · [`Phalcon\Image\Adapter\Gd`](/5.20/api/phalcon_image/#imageadaptergd) · [`Phalcon\Image\Adapter\Imagick`](/5.20/api/phalcon_image/#imageadapterimagick) · [`Phalcon\Logger\Adapter\Stream`](/5.20/api/phalcon_logger/#loggeradapterstream) · [`Phalcon\Mvc\Application`](/5.20/api/phalcon_mvc/#mvcapplication) · [`Phalcon\Mvc\Model\MetaData\Stream`](/5.20/api/phalcon_mvc/#mvcmodelmetadatastream) · [`Phalcon\Mvc\Router`](/5.20/api/phalcon_mvc/#mvcrouter) · [`Phalcon\Mvc\View`](/5.20/api/phalcon_mvc/#mvcview) · [`Phalcon\Mvc\View\Engine\Volt\Compiler`](/5.20/api/phalcon_mvc/#mvcviewenginevoltcompiler) · [`Phalcon\Mvc\View\Simple`](/5.20/api/phalcon_mvc/#mvcviewsimple) · [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnection`](/5.20/api/phalcon_queue/#queueadapterbeanstalkbeanstalkconnection) · [`Phalcon\Queue\Adapter\Stream\StreamContext`](/5.20/api/phalcon_queue/#queueadapterstreamstreamcontext) · [`Phalcon\Session\Adapter\Stream`](/5.20/api/phalcon_session/#sessionadapterstream) · [`Phalcon\Storage\Adapter\Stream`](/5.20/api/phalcon_storage/#storageadapterstream) · [`Phalcon\Translate\Adapter\Csv`](/5.20/api/phalcon_translate/#translateadaptercsv)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpfiletrait-phpfclose">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpFclose</span>( <span class="st">mixed</span> <span class="sv">$handle</span> )</code>
<span class="desc">Closes an open file pointer</span>
</a>
<a class="api-item" href="#traitsphpfiletrait-phpfgetcsv">
<code class="vis vis-protected">protected</code>
<code class="ret">array|false</code>
<code class="sig"><span class="sf">phpFgetCsv</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$stream</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$length</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$separator</span><span class="sm"> = &quot;,&quot;</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$enclosure</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$escape</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Gets line from file pointer and parse for CSV fields</span>
</a>
<a class="api-item" href="#traitsphpfiletrait-phpfileexists">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpFileExists</span>( <span class="st">string</span> <span class="sv">$filename</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.file-exists.php</span>
</a>
<a class="api-item" href="#traitsphpfiletrait-phpfilegetcontents">
<code class="vis vis-protected">protected</code>
<code class="ret">false|string</code>
<code class="sig"><span class="sf">phpFileGetContents</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$useIncludePath</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$context</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offset</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int|null</span> <span class="sv">$length</span><span class="sm"> = null</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.file-get-contents.php</span>
</a>
<a class="api-item" href="#traitsphpfiletrait-phpfileputcontents">
<code class="vis vis-protected">protected</code>
<code class="ret">false|int</code>
<code class="sig"><span class="sf">phpFilePutContents</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$flags</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$context</span><span class="sm"> = null</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.file-put-contents.php</span>
</a>
<a class="api-item" href="#traitsphpfiletrait-phpfopen">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">phpFopen</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$mode</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$useIncludePath</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$context</span><span class="sm"> = null</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.fopen.php</span>
</a>
<a class="api-item" href="#traitsphpfiletrait-phpfwrite">
<code class="vis vis-protected">protected</code>
<code class="ret">false|int</code>
<code class="sig"><span class="sf">phpFwrite</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$handle</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">int|null</span> <span class="sv">$length</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Binary-safe file write</span>
</a>
<a class="api-item" href="#traitsphpfiletrait-phpiswritable">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpIsWritable</span>( <span class="st">string</span> <span class="sv">$filename</span> )</code>
<span class="desc">Tells whether the filename is writable</span>
</a>
<a class="api-item" href="#traitsphpfiletrait-phpunlink">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpUnlink</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$context</span><span class="sm"> = null</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.unlink.php</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 9</div>

<h4 id="traitsphpfiletrait-phpfclose"><code>phpFclose()</code></h4>

```php
protected static function phpFclose( mixed $handle ): bool;
```

Closes an open file pointer

@link https://php.net/manual/en/function.fclose.php

<h4 id="traitsphpfiletrait-phpfgetcsv"><code>phpFgetCsv()</code></h4>

```php
protected static function phpFgetCsv(
mixed $stream,
int $length = 0,
string $separator = ",",
mixed $enclosure = null,
mixed $escape = null
): array|false;
```

Gets line from file pointer and parse for CSV fields

@link https://php.net/manual/en/function.fgetcsv.php

<h4 id="traitsphpfiletrait-phpfileexists"><code>phpFileExists()</code></h4>

```php
protected static function phpFileExists( string $filename ): bool;
```

@link https://php.net/manual/en/function.file-exists.php

<h4 id="traitsphpfiletrait-phpfilegetcontents"><code>phpFileGetContents()</code></h4>

```php
protected static function phpFileGetContents(
string $filename,
bool $useIncludePath = false,
mixed $context = null,
int $offset = 0,
int|null $length = null
): false|string;
```

@link https://php.net/manual/en/function.file-get-contents.php

<h4 id="traitsphpfiletrait-phpfileputcontents"><code>phpFilePutContents()</code></h4>

```php
protected static function phpFilePutContents(
string $filename,
mixed $data,
int $flags = 0,
mixed $context = null
): false|int;
```

@link https://php.net/manual/en/function.file-put-contents.php

<h4 id="traitsphpfiletrait-phpfopen"><code>phpFopen()</code></h4>

```php
protected static function phpFopen(
string $filename,
string $mode,
bool $useIncludePath = false,
mixed $context = null
): mixed;
```

@link https://php.net/manual/en/function.fopen.php

<h4 id="traitsphpfiletrait-phpfwrite"><code>phpFwrite()</code></h4>

```php
protected static function phpFwrite(
mixed $handle,
string $data,
int|null $length = null
): false|int;
```

Binary-safe file write

@link https://php.net/manual/en/function.fwrite.php

<h4 id="traitsphpfiletrait-phpiswritable"><code>phpIsWritable()</code></h4>

```php
protected static function phpIsWritable( string $filename ): bool;
```

Tells whether the filename is writable

@link https://php.net/manual/en/function.is-writable.php

<h4 id="traitsphpfiletrait-phpunlink"><code>phpUnlink()</code></h4>

```php
protected static function phpUnlink(
string $filename,
mixed $context = null
): bool;
```

@link https://php.net/manual/en/function.unlink.php

## Traits\Php\HashTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/HashTrait.zep">Source on GitHub</a>

Hashing method wrappers

<div class="api-tree">

- **`Phalcon\Traits\Php\HashTrait`**

</div>

__Used by__ [`Phalcon\Assets\Asset`](/5.20/api/phalcon_assets/#assetsasset) · [`Phalcon\Assets\Inline`](/5.20/api/phalcon_assets/#assetsinline) · [`Phalcon\Encryption\Crypt`](/5.20/api/phalcon_encryption/#encryptioncrypt) · [`Phalcon\Encryption\Security`](/5.20/api/phalcon_encryption/#encryptionsecurity) · [`Phalcon\Encryption\Security\JWT\Signer\Hmac`](/5.20/api/phalcon_encryption/#encryptionsecurityjwtsignerhmac)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphphashtrait-phphash">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">phpHash</span>(<span class="prm"><span class="st">string</span> <span class="sv">$algorithm</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$binary</span><span class="sm"> = false</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.hash.php</span>
</a>
<a class="api-item" href="#traitsphphashtrait-phphashequals">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpHashEquals</span>(<span class="prm"><span class="st">string</span> <span class="sv">$knownString</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$userString</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.hash-equals.php</span>
</a>
<a class="api-item" href="#traitsphphashtrait-phphashhmac">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">phpHashHmac</span>(<span class="prm"><span class="st">string</span> <span class="sv">$algorithm</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$binary</span><span class="sm"> = false</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.hash-hmac.php</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 3</div>

<h4 id="traitsphphashtrait-phphash"><code>phpHash()</code></h4>

```php
protected static function phpHash(
string $algorithm,
string $data,
bool $binary = false
): string;
```

@link https://php.net/manual/en/function.hash.php

<h4 id="traitsphphashtrait-phphashequals"><code>phpHashEquals()</code></h4>

```php
protected static function phpHashEquals(
string $knownString,
string $userString
): bool;
```

@link https://php.net/manual/en/function.hash-equals.php

<h4 id="traitsphphashtrait-phphashhmac"><code>phpHashHmac()</code></h4>

```php
protected static function phpHashHmac(
string $algorithm,
string $data,
string $key,
bool $binary = false
): string;
```

@link https://php.net/manual/en/function.hash-hmac.php

## Traits\Php\HeaderTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/HeaderTrait.zep">Source on GitHub</a>

Header based wrapper methods

<div class="api-tree">

- **`Phalcon\Traits\Php\HeaderTrait`**

</div>

__Used by__ [`Phalcon\Session\Manager`](/5.20/api/phalcon_session/#sessionmanager)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpheadertrait-phpheaderssent">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpHeadersSent</span>()</code>
<span class="desc">Checks if or where headers have been sent</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitsphpheadertrait-phpheaderssent"><code>phpHeadersSent()</code></h4>

```php
protected static function phpHeadersSent(): bool;
```

Checks if or where headers have been sent

@link https://php.net/manual/en/function.headers-sent.php

## Traits\Php\IgbinaryTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/IgbinaryTrait.zep">Source on GitHub</a>

Igbinary based wrapper methods

<div class="api-tree">

- **`Phalcon\Traits\Php\IgbinaryTrait`**

</div>

__Used by__ [`Phalcon\Storage\Serializer\Igbinary`](/5.20/api/phalcon_storage/#storageserializerigbinary)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpigbinarytrait-phpigbinaryserialize">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">phpIgbinarySerialize</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.igbinary-serialize.php</span>
</a>
<a class="api-item" href="#traitsphpigbinarytrait-phpigbinaryunserialize">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpIgbinaryUnserialize</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.igbinary-unserialize.php</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 2</div>

<h4 id="traitsphpigbinarytrait-phpigbinaryserialize"><code>phpIgbinarySerialize()</code></h4>

```php
protected static function phpIgbinarySerialize( mixed $value ): string|null;
```

@link https://php.net/manual/en/function.igbinary-serialize.php

<h4 id="traitsphpigbinarytrait-phpigbinaryunserialize"><code>phpIgbinaryUnserialize()</code></h4>

```php
protected static function phpIgbinaryUnserialize( mixed $value );
```

@link https://php.net/manual/en/function.igbinary-unserialize.php

## Traits\Php\InfoTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/InfoTrait.zep">Source on GitHub</a>

Information method wrappers

<div class="api-tree">

- **`Phalcon\Traits\Php\InfoTrait`**

</div>

__Used by__ [`Phalcon\Config\Adapter\Yaml`](/5.20/api/phalcon_config/#configadapteryaml) · [`Phalcon\Encryption\Crypt`](/5.20/api/phalcon_encryption/#encryptioncrypt) · [`Phalcon\Encryption\Security\Uuid\SysNodeProvider`](/5.20/api/phalcon_encryption/#encryptionsecurityuuidsysnodeprovider) · [`Phalcon\Filter\Validation\Validator\Confirmation`](/5.20/api/phalcon_filter/#filtervalidationvalidatorconfirmation) · [`Phalcon\Filter\Validation\Validator\File\MimeType`](/5.20/api/phalcon_filter/#filtervalidationvalidatorfilemimetype) · [`Phalcon\Filter\Validation\Validator\StringLength\Max`](/5.20/api/phalcon_filter/#filtervalidationvalidatorstringlengthmax) · [`Phalcon\Filter\Validation\Validator\StringLength\Min`](/5.20/api/phalcon_filter/#filtervalidationvalidatorstringlengthmin) · [`Phalcon\Forms\Loader\YamlLoader`](/5.20/api/phalcon_forms/#formsloaderyamlloader) · [`Phalcon\Http\Response`](/5.20/api/phalcon_http/#httpresponse) · [`Phalcon\Image\Adapter\Gd`](/5.20/api/phalcon_image/#imageadaptergd) · [`Phalcon\Mvc\View\Engine\Volt`](/5.20/api/phalcon_mvc/#mvcviewenginevolt) · [`Phalcon\Queue\Consumer\Worker`](/5.20/api/phalcon_queue/#queueconsumerworker) · [`Phalcon\Support\Debug\ReportBuilder`](/5.20/api/phalcon_support/#supportdebugreportbuilder) · [`Phalcon\Support\Helper\Arr\Group`](/5.20/api/phalcon_support/#supporthelperarrgroup) · [`Phalcon\Translate\Adapter\Gettext`](/5.20/api/phalcon_translate/#translateadaptergettext)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpinfotrait-phpextensionloaded">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpExtensionLoaded</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Find out whether an extension is loaded</span>
</a>
<a class="api-item" href="#traitsphpinfotrait-phpfunctionexists">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpFunctionExists</span>( <span class="st">string</span> <span class="sv">$functionName</span> )</code>
<span class="desc">Return true if the given function has been defined</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 2</div>

<h4 id="traitsphpinfotrait-phpextensionloaded"><code>phpExtensionLoaded()</code></h4>

```php
protected static function phpExtensionLoaded( string $name ): bool;
```

Find out whether an extension is loaded

@link https://php.net/manual/en/function.extension-loaded.php

<h4 id="traitsphpinfotrait-phpfunctionexists"><code>phpFunctionExists()</code></h4>

```php
protected static function phpFunctionExists( string $functionName ): bool;
```

Return true if the given function has been defined

@link https://php.net/manual/en/function.function-exists.php

## Traits\Php\IniTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/IniTrait.zep">Source on GitHub</a>

<div class="api-tree">

- **`Phalcon\Traits\Php\IniTrait`**

</div>

__Used by__ [`Phalcon\Config\Adapter\Ini`](/5.20/api/phalcon_config/#configadapterini) · [`Phalcon\Session\Adapter\Stream`](/5.20/api/phalcon_session/#sessionadapterstream)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpinitrait-phpiniget">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">phpIniGet</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$defaultValue</span><span class="sm"> = &quot;&quot;</span></span>)</code>
<span class="desc">Gets the value of a configuration option</span>
</a>
<a class="api-item" href="#traitsphpinitrait-phpinigetbool">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">phpIniGetBool</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$defaultValue</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Query a php.ini value and return it back as boolean</span>
</a>
<a class="api-item" href="#traitsphpinitrait-phpinigetint">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">phpIniGetInt</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$defaultValue</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Query a php.ini value and return it back as integer</span>
</a>
<a class="api-item" href="#traitsphpinitrait-phpparseinifile">
<code class="vis vis-protected">protected</code>
<code class="ret">array|false</code>
<code class="sig"><span class="sf">phpParseIniFile</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$processSections</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$scannerMode</span><span class="sm"> = 0</span></span>)</code>
<span class="desc">Parse a configuration file</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 4</div>

<h4 id="traitsphpinitrait-phpiniget"><code>phpIniGet()</code></h4>

```php
protected static function phpIniGet(
string $input,
string $defaultValue = ""
): string;
```

Gets the value of a configuration option

@link https://php.net/manual/en/function.ini-get.php
@link https://php.net/manual/en/ini.list.php

<h4 id="traitsphpinitrait-phpinigetbool"><code>phpIniGetBool()</code></h4>

```php
protected static function phpIniGetBool(
string $input,
bool $defaultValue = false
): bool;
```

Query a php.ini value and return it back as boolean

@link https://php.net/manual/en/function.ini-get.php
@link https://php.net/manual/en/ini.list.php

<h4 id="traitsphpinitrait-phpinigetint"><code>phpIniGetInt()</code></h4>

```php
protected static function phpIniGetInt(
string $input,
int $defaultValue = 0
): int;
```

Query a php.ini value and return it back as integer

@link https://php.net/manual/en/function.ini-get.php
@link https://php.net/manual/en/ini.list.php

<h4 id="traitsphpinitrait-phpparseinifile"><code>phpParseIniFile()</code></h4>

```php
protected static function phpParseIniFile(
string $filename,
bool $processSections = false,
int $scannerMode = 0
): array|false;
```

Parse a configuration file

@link https://php.net/manual/en/function.parse-ini-file.php

## Traits\Php\MbCaseTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/MbCaseTrait.zep">Source on GitHub</a>

Multibyte case conversion wrapper method

<div class="api-tree">

- **`Phalcon\Traits\Php\MbCaseTrait`**

</div>

__Used by__ [`Phalcon\Filter\Sanitize\Lower`](/5.20/api/phalcon_filter/#filtersanitizelower) · [`Phalcon\Filter\Sanitize\Upper`](/5.20/api/phalcon_filter/#filtersanitizeupper) · [`Phalcon\Filter\Sanitize\UpperWords`](/5.20/api/phalcon_filter/#filtersanitizeupperwords)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpmbcasetrait-phpmbconvertcase">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">phpMbConvertCase</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$mode</span></span>)</code>
<span class="desc">Converts the case of a string using <code>mb_convert_case()</code></span>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitsphpmbcasetrait-phpmbconvertcase"><code>phpMbConvertCase()</code></h4>

```php
protected static function phpMbConvertCase(
string $input,
int $mode
): string;
```

Converts the case of a string using `mb_convert_case()`

@link https://php.net/manual/en/function.mb-convert-case.php

## Traits\Php\MsgpackTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/MsgpackTrait.zep">Source on GitHub</a>

MessagePack based wrapper methods

<div class="api-tree">

- **`Phalcon\Traits\Php\MsgpackTrait`**

</div>

__Used by__ [`Phalcon\Storage\Serializer\Msgpack`](/5.20/api/phalcon_storage/#storageserializermsgpack)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpmsgpacktrait-phpmsgpackpack">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">phpMsgpackPack</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.msgpack-pack.php</span>
</a>
<a class="api-item" href="#traitsphpmsgpacktrait-phpmsgpackunpack">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpMsgpackUnpack</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.msgpack-unpack.php</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 2</div>

<h4 id="traitsphpmsgpacktrait-phpmsgpackpack"><code>phpMsgpackPack()</code></h4>

```php
protected static function phpMsgpackPack( mixed $value ): string;
```

@link https://php.net/manual/en/function.msgpack-pack.php

<h4 id="traitsphpmsgpacktrait-phpmsgpackunpack"><code>phpMsgpackUnpack()</code></h4>

```php
protected static function phpMsgpackUnpack( mixed $value );
```

@link https://php.net/manual/en/function.msgpack-unpack.php

## Traits\Php\OpensslTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/OpensslTrait.zep">Source on GitHub</a>

OpenSSL based wrapper methods

<div class="api-tree">

- **`Phalcon\Traits\Php\OpensslTrait`**

</div>

__Used by__ [`Phalcon\Encryption\Crypt`](/5.20/api/phalcon_encryption/#encryptioncrypt)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpopenssltrait-phpopensslcipherivlength">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig"><span class="sf">phpOpensslCipherIvLength</span>( <span class="st">string</span> <span class="sv">$cipher</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.openssl-cipher-iv-length.php</span>
</a>
<a class="api-item" href="#traitsphpopenssltrait-phpopensslrandompseudobytes">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpOpensslRandomPseudoBytes</span>( <span class="st">int</span> <span class="sv">$length</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.openssl-random-pseudo-bytes.php</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 2</div>

<h4 id="traitsphpopenssltrait-phpopensslcipherivlength"><code>phpOpensslCipherIvLength()</code></h4>

```php
protected static function phpOpensslCipherIvLength( string $cipher ): int|bool;
```

@link https://php.net/manual/en/function.openssl-cipher-iv-length.php

<h4 id="traitsphpopenssltrait-phpopensslrandompseudobytes"><code>phpOpensslRandomPseudoBytes()</code></h4>

```php
protected static function phpOpensslRandomPseudoBytes( int $length );
```

@link https://php.net/manual/en/function.openssl-random-pseudo-bytes.php

## Traits\Php\SerializeTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/SerializeTrait.zep">Source on GitHub</a>

PHP serialize/unserialize wrapper methods

<div class="api-tree">

- **`Phalcon\Traits\Php\SerializeTrait`**

</div>

__Used by__ [`Phalcon\Storage\Serializer\Php`](/5.20/api/phalcon_storage/#storageserializerphp)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpserializetrait-phpserialize">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">phpSerialize</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.serialize.php</span>
</a>
<a class="api-item" href="#traitsphpserializetrait-phpunserialize">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">phpUnserialize</span>(<span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.unserialize.php</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 2</div>

<h4 id="traitsphpserializetrait-phpserialize"><code>phpSerialize()</code></h4>

```php
protected static function phpSerialize( mixed $value ): string;
```

@link https://php.net/manual/en/function.serialize.php

<h4 id="traitsphpserializetrait-phpunserialize"><code>phpUnserialize()</code></h4>

```php
protected static function phpUnserialize(
string $data,
array $options = []
): mixed;
```

@link https://php.net/manual/en/function.unserialize.php

## Traits\Php\UrlTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/UrlTrait.zep">Source on GitHub</a>

URL based wrapper methods

<div class="api-tree">

- **`Phalcon\Traits\Php\UrlTrait`**

</div>

__Used by__ [`Phalcon\Html\Escaper\UrlEscaper`](/5.20/api/phalcon_html/#htmlescaperurlescaper) · [`Phalcon\Http\Response`](/5.20/api/phalcon_http/#httpresponse)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpurltrait-phpparseurl">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpParseUrl</span>(<span class="prm"><span class="st">string</span> <span class="sv">$url</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$component</span><span class="sm"> = -1</span></span>)</code>
<span class="desc">@link https://php.net/manual/en/function.parse-url.php</span>
</a>
<a class="api-item" href="#traitsphpurltrait-phprawurldecode">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">phpRawUrlDecode</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.rawurldecode.php</span>
</a>
<a class="api-item" href="#traitsphpurltrait-phprawurlencode">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">phpRawUrlEncode</span>( <span class="st">string</span> <span class="sv">$input</span> )</code>
<span class="desc">@link https://php.net/manual/en/function.rawurlencode.php</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 3</div>

<h4 id="traitsphpurltrait-phpparseurl"><code>phpParseUrl()</code></h4>

```php
protected static function phpParseUrl(
string $url,
int $component = -1
);
```

@link https://php.net/manual/en/function.parse-url.php

<h4 id="traitsphpurltrait-phprawurldecode"><code>phpRawUrlDecode()</code></h4>

```php
protected static function phpRawUrlDecode( string $input ): string;
```

@link https://php.net/manual/en/function.rawurldecode.php

<h4 id="traitsphpurltrait-phprawurlencode"><code>phpRawUrlEncode()</code></h4>

```php
protected static function phpRawUrlEncode( string $input ): string;
```

@link https://php.net/manual/en/function.rawurlencode.php

## Traits\Php\YamlTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/YamlTrait.zep">Source on GitHub</a>

YAML based wrapper methods

<div class="api-tree">

- **`Phalcon\Traits\Php\YamlTrait`**

</div>

__Used by__ [`Phalcon\Config\Adapter\Yaml`](/5.20/api/phalcon_config/#configadapteryaml)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitsphpyamltrait-phpyamlparsefile">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpYamlParseFile</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$pos</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$callbacks</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Parse a YAML stream from a file</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitsphpyamltrait-phpyamlparsefile"><code>phpYamlParseFile()</code></h4>

```php
protected static function phpYamlParseFile(
string $filename,
int $pos = 0,
array $callbacks = []
);
```

Parse a YAML stream from a file

@link https://php.net/manual/en/function.yaml-parse-file.php

## Traits\Support\Helper\Arr\FilterTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Arr/FilterTrait.zep">Source on GitHub</a>

Filters a collection using array_filter with an optional callable

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Arr\FilterTrait`**

</div>

__Used by__ [`Phalcon\Support\Helper\Arr\AbstractArr`](/5.20/api/phalcon_support/#supporthelperarrabstractarr)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperarrfiltertrait-tofilter">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">toFilter</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$method</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Helper method to filter the collection</span>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperarrfiltertrait-tofilter"><code>toFilter()</code></h4>

```php
protected static function toFilter(
array $collection,
mixed $method = null
): array;
```

Helper method to filter the collection

## Traits\Support\Helper\Arr\GetTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Arr/GetTrait.zep">Source on GitHub</a>

Gets an array element by key and if it does not exist returns the default.
It also allows for casting the returned value to a specific type using
`settype` internally

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Arr\GetTrait`**

</div>

__Used by__ [`Phalcon\ADR\Middleware\CorsMiddleware`](/5.20/api/phalcon_adr/#adrmiddlewarecorsmiddleware) · [`Phalcon\Annotations\AnnotationsFactory`](/5.20/api/phalcon_annotations/#annotationsannotationsfactory) · [`Phalcon\Db\Adapter\PdoFactory`](/5.20/api/phalcon_db/#dbadapterpdofactory) · [`Phalcon\Filter\Validation\Validator\File`](/5.20/api/phalcon_filter/#filtervalidationvalidatorfile) · [`Phalcon\Http\Cookie`](/5.20/api/phalcon_http/#httpcookie) · [`Phalcon\Http\Request\File`](/5.20/api/phalcon_http/#httprequestfile) · [`Phalcon\Image\ImageFactory`](/5.20/api/phalcon_image/#imageimagefactory) · [`Phalcon\Logger\LoggerFactory`](/5.20/api/phalcon_logger/#loggerloggerfactory) · [`Phalcon\Mvc\Model\MetaData`](/5.20/api/phalcon_mvc/#mvcmodelmetadata) · [`Phalcon\Session\Adapter\AbstractAdapter`](/5.20/api/phalcon_session/#sessionadapterabstractadapter) · [`Phalcon\Session\Adapter\Stream`](/5.20/api/phalcon_session/#sessionadapterstream) · [`Phalcon\Session\Manager`](/5.20/api/phalcon_session/#sessionmanager) · [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.20/api/phalcon_storage/#storageadapterabstractadapter) · [`Phalcon\Support\Debug`](/5.20/api/phalcon_support/#supportdebug) · [`Phalcon\Support\Debug\ReportBuilder`](/5.20/api/phalcon_support/#supportdebugreportbuilder) · [`Phalcon\Support\Helper\Arr\Get`](/5.20/api/phalcon_support/#supporthelperarrget)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperarrgettrait-getarrval">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getArrVal</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$index</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$cast</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperarrgettrait-getarrval"><code>getArrVal()</code></h4>

```php
protected static function getArrVal(
array $collection,
mixed $index,
mixed $defaultValue = null,
string|null $cast = null
): mixed;
```

## Traits\Support\Helper\Json\DecodeTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Json/DecodeTrait.zep">Source on GitHub</a>

Decodes a string using `json_decode`, throwing the native `\JsonException`
on failure. Any framework-flavored exception is added by the `Support`
helper class that wraps this trait.

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Json\DecodeTrait`**

</div>

__Used by__ [`Phalcon\Support\Helper\Json\Decode`](/5.20/api/phalcon_support/#supporthelperjsondecode)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperjsondecodetrait-todecode">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">toDecode</span>(<span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$associative</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$depth</span><span class="sm"> = 512</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$options</span><span class="sm"> = 79</span></span>)</code>
<span class="desc">Decodes a string using <code>json_decode</code></span>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperjsondecodetrait-todecode"><code>toDecode()</code></h4>

```php
protected static function toDecode(
string $data,
bool $associative = false,
int $depth = 512,
int $options = 79
);
```

Decodes a string using `json_decode`

## Traits\Support\Helper\Json\EncodeTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Json/EncodeTrait.zep">Source on GitHub</a>

Encodes data using `json_encode`, throwing the native `\JsonException` on
failure. Any framework-flavored exception is added by the `Support` helper
class that wraps this trait.

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Json\EncodeTrait`**

</div>

__Used by__ [`Phalcon\Logger\Formatter\Json`](/5.20/api/phalcon_logger/#loggerformatterjson) · [`Phalcon\Support\Helper\Json\Encode`](/5.20/api/phalcon_support/#supporthelperjsonencode)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperjsonencodetrait-toencode">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toEncode</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$options</span><span class="sm"> = 79</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$depth</span><span class="sm"> = 512</span></span>)</code>
<span class="desc">Encodes data using <code>json_encode</code></span>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperjsonencodetrait-toencode"><code>toEncode()</code></h4>

```php
protected static function toEncode(
mixed $data,
int $options = 79,
int $depth = 512
): string;
```

Encodes data using `json_encode`

## Traits\Support\Helper\Str\CamelizeTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/CamelizeTrait.zep">Source on GitHub</a>

Converts strings to upperCamelCase or lowerCamelCase

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Str\CamelizeTrait`**

</div>

__Used by__ [`Phalcon\Support\Helper\Str\Camelize`](/5.20/api/phalcon_support/#supporthelperstrcamelize)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperstrcamelizetrait-tocamelize">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toCamelize</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiters</span><span class="sm"> = &quot;-_&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$lowerFirst</span><span class="sm"> = false</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="traitssupporthelperstrcamelizetrait-tocamelize"><code>toCamelize()</code></h4>

```php
public static function toCamelize(
string $text,
string $delimiters = "-_",
bool $lowerFirst = false
): string;
```

## Traits\Support\Helper\Str\DirFromFileTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/DirFromFileTrait.zep">Source on GitHub</a>

Accepts a file name (without extension) and returns a calculated
directory structure with the filename in the end

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Str\DirFromFileTrait`**

</div>

__Used by__ [`Phalcon\Storage\Adapter\Stream`](/5.20/api/phalcon_storage/#storageadapterstream) · [`Phalcon\Support\Helper\Str\DirFromFile`](/5.20/api/phalcon_support/#supporthelperstrdirfromfile)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperstrdirfromfiletrait-todirfromfile">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toDirFromFile</span>(<span class="prm"><span class="st">string</span> <span class="sv">$file</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$filesystemSafe</span><span class="sm"> = false</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperstrdirfromfiletrait-todirfromfile"><code>toDirFromFile()</code></h4>

```php
protected static function toDirFromFile(
string $file,
bool $filesystemSafe = false
): string;
```

## Traits\Support\Helper\Str\DirSeparatorTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/DirSeparatorTrait.zep">Source on GitHub</a>

Accepts a directory name and ensures that it ends with
DIRECTORY_SEPARATOR

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait`**

</div>

__Used by__ [`Phalcon\Mvc\View`](/5.20/api/phalcon_mvc/#mvcview) · [`Phalcon\Mvc\View\Simple`](/5.20/api/phalcon_mvc/#mvcviewsimple) · [`Phalcon\Session\Adapter\Stream`](/5.20/api/phalcon_session/#sessionadapterstream) · [`Phalcon\Storage\Adapter\Stream`](/5.20/api/phalcon_storage/#storageadapterstream) · [`Phalcon\Support\Helper\Str\DirSeparator`](/5.20/api/phalcon_support/#supporthelperstrdirseparator)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperstrdirseparatortrait-todirseparator">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toDirSeparator</span>( <span class="st">string</span> <span class="sv">$directory</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperstrdirseparatortrait-todirseparator"><code>toDirSeparator()</code></h4>

```php
protected static function toDirSeparator( string $directory ): string;
```

## Traits\Support\Helper\Str\EndsWithTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/EndsWithTrait.zep">Source on GitHub</a>

Check if a string ends with a given string

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Str\EndsWithTrait`**

</div>

__Used by__ [`Phalcon\Support\Helper\Str\AbstractStr`](/5.20/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperstrendswithtrait-toendswith">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">toEndsWith</span>(<span class="prm"><span class="st">string</span> <span class="sv">$haystack</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$needle</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ignoreCase</span><span class="sm"> = true</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperstrendswithtrait-toendswith"><code>toEndsWith()</code></h4>

```php
protected static function toEndsWith(
string $haystack,
string $needle,
bool $ignoreCase = true
): bool;
```

## Traits\Support\Helper\Str\InterpolateTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/InterpolateTrait.zep">Source on GitHub</a>

Interpolates context values into the message placeholders

@see http://www.php-fig.org/psr/psr-3/ Section 1.2 Message

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Str\InterpolateTrait`**

</div>

__Used by__ [`Phalcon\Html\Helper\Breadcrumbs`](/5.20/api/phalcon_html/#htmlhelperbreadcrumbs) · [`Phalcon\Logger\Formatter\AbstractFormatter`](/5.20/api/phalcon_logger/#loggerformatterabstractformatter) · [`Phalcon\Support\Debug\Dump`](/5.20/api/phalcon_support/#supportdebugdump) · [`Phalcon\Support\Debug\Renderer\HtmlRenderer`](/5.20/api/phalcon_support/#supportdebugrendererhtmlrenderer) · [`Phalcon\Support\Helper\Str\AbstractStr`](/5.20/api/phalcon_support/#supporthelperstrabstractstr) · [`Phalcon\Support\Helper\Str\Interpolate`](/5.20/api/phalcon_support/#supporthelperstrinterpolate) · [`Phalcon\Translate\Interpolator\AssociativeArray`](/5.20/api/phalcon_translate/#translateinterpolatorassociativearray)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperstrinterpolatetrait-tointerpolate">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toInterpolate</span>(<span class="prm"><span class="st">string</span> <span class="sv">$input</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$context</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$left</span><span class="sm"> = &quot;%&quot;</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$right</span><span class="sm"> = &quot;%&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperstrinterpolatetrait-tointerpolate"><code>toInterpolate()</code></h4>

```php
protected static function toInterpolate(
string $input,
array $context = [],
string $left = "%",
string $right = "%"
): string;
```

## Traits\Support\Helper\Str\LowerTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/LowerTrait.zep">Source on GitHub</a>

Lowercases a string using mbstring

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Str\LowerTrait`**

</div>

__Used by__ [`Phalcon\Support\Helper\Str\AbstractStr`](/5.20/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperstrlowertrait-tolower">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toLower</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperstrlowertrait-tolower"><code>toLower()</code></h4>

```php
protected static function toLower(
string $text,
string $encoding = "UTF-8"
): string;
```

## Traits\Support\Helper\Str\StartsWithTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/StartsWithTrait.zep">Source on GitHub</a>

Check if a string starts with a given string

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Str\StartsWithTrait`**

</div>

__Used by__ [`Phalcon\Support\Helper\Str\AbstractStr`](/5.20/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperstrstartswithtrait-tostartswith">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">toStartsWith</span>(<span class="prm"><span class="st">string</span> <span class="sv">$haystack</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$needle</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$ignoreCase</span><span class="sm"> = true</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperstrstartswithtrait-tostartswith"><code>toStartsWith()</code></h4>

```php
protected static function toStartsWith(
string $haystack,
string $needle,
bool $ignoreCase = true
): bool;
```

## Traits\Support\Helper\Str\UncamelizeTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/UncamelizeTrait.zep">Source on GitHub</a>

Converts strings to non camelized style

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Str\UncamelizeTrait`**

</div>

__Used by__ [`Phalcon\Support\Helper\Str\Uncamelize`](/5.20/api/phalcon_support/#supporthelperstruncamelize)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperstruncamelizetrait-touncamelize">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toUncamelize</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$delimiter</span><span class="sm"> = &quot;_&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperstruncamelizetrait-touncamelize"><code>toUncamelize()</code></h4>

```php
protected static function toUncamelize(
string $text,
string $delimiter = "_"
): string;
```

## Traits\Support\Helper\Str\UpperTrait

<span class="badge badge--trait">Trait</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/UpperTrait.zep">Source on GitHub</a>

Uppercases a string using mbstring

<div class="api-tree">

- **`Phalcon\Traits\Support\Helper\Str\UpperTrait`**

</div>

__Used by__ [`Phalcon\Support\Helper\Str\AbstractStr`](/5.20/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperstruppertrait-toupper">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toUpper</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$encoding</span><span class="sm"> = &quot;UTF-8&quot;</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

<h4 id="traitssupporthelperstruppertrait-toupper"><code>toUpper()</code></h4>

```php
protected static function toUpper(
string $text,
string $encoding = "UTF-8"
): string;
```

Source: https://docs.phalcon.io/5.20/api/phalcon_traits/index.mdx
