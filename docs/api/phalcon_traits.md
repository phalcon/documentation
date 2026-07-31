---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Traits\Php\ApcuTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/ApcuTrait.zep){ .src-btn }

APCu based wrapper methods

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\ApcuTrait`**

</div>

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

#### `phpApcuDec()` { #traitsphpapcutrait-phpapcudec }

```php
protected static function phpApcuDec(
    mixed $key,
    int $step = 1
): bool|int;
```

@link https://php.net/manual/en/function.apcu-dec.php

#### `phpApcuDelete()` { #traitsphpapcutrait-phpapcudelete }

```php
protected static function phpApcuDelete( mixed $key ): bool|array;
```

@link https://php.net/manual/en/function.apcu-delete.php

#### `phpApcuExists()` { #traitsphpapcutrait-phpapcuexists }

```php
protected static function phpApcuExists( mixed $key ): bool|array;
```

@link https://php.net/manual/en/function.apcu-exists.php

#### `phpApcuFetch()` { #traitsphpapcutrait-phpapcufetch }

```php
protected static function phpApcuFetch( mixed $key ): mixed;
```

@link https://php.net/manual/en/function.apcu-fetch.php

#### `phpApcuInc()` { #traitsphpapcutrait-phpapcuinc }

```php
protected static function phpApcuInc(
    mixed $key,
    int $step = 1
): bool|int;
```

@link https://php.net/manual/en/function.apcu-inc.php

#### `phpApcuIterator()` { #traitsphpapcutrait-phpapcuiterator }

```php
protected static function phpApcuIterator( string $pattern ): \APCUIterator|bool;
```

@link https://php.net/manual/en/class.apcuiterator.php

#### `phpApcuStore()` { #traitsphpapcutrait-phpapcustore }

```php
protected static function phpApcuStore(
    mixed $key,
    mixed $payload,
    int $ttl = 0
): bool|array;
```

@link https://php.net/manual/en/function.apcu-store.php


## Traits\Php\Base64Trait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/Base64Trait.zep){ .src-btn }

Base64 based wrapper methods

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\Base64Trait`**

</div>

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

#### `doDecodeUrl()` { #traitsphpbase64trait-dodecodeurl }

```php
protected static function doDecodeUrl( string $input ): string;
```

Decode a Base64 URL string

#### `doEncodeUrl()` { #traitsphpbase64trait-doencodeurl }

```php
protected static function doEncodeUrl( string $input ): string;
```

Encode a string in Base64 URL format

#### `phpBase64Decode()` { #traitsphpbase64trait-phpbase64decode }

```php
protected static function phpBase64Decode(
    string $input,
    bool $strict = false
): string|false;
```

@link https://php.net/manual/en/function.base64-decode.php

#### `phpBase64Encode()` { #traitsphpbase64trait-phpbase64encode }

```php
protected static function phpBase64Encode( string $input ): string;
```

@link https://php.net/manual/en/function.base64-encode.php


## Traits\Php\FileTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/FileTrait.zep){ .src-btn }

File based wrapper methods

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\FileTrait`**

</div>

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
<code class="sig"><span class="sf">phpFileGetContents</span>(<span class="prm"><span class="st">string</span> <span class="sv">$filename</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$useIncludePath</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$context</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$offset</span><span class="sm"> = 0</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$length</span><span class="sm"> = null</span></span>)</code>
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
<code class="sig"><span class="sf">phpFwrite</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$handle</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$length</span><span class="sm"> = null</span></span>)</code>
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

#### `phpFclose()` { #traitsphpfiletrait-phpfclose }

```php
protected static function phpFclose( mixed $handle ): bool;
```

Closes an open file pointer

@link https://php.net/manual/en/function.fclose.php

#### `phpFgetCsv()` { #traitsphpfiletrait-phpfgetcsv }

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

#### `phpFileExists()` { #traitsphpfiletrait-phpfileexists }

```php
protected static function phpFileExists( string $filename ): bool;
```

@link https://php.net/manual/en/function.file-exists.php

#### `phpFileGetContents()` { #traitsphpfiletrait-phpfilegetcontents }

```php
protected static function phpFileGetContents(
    string $filename,
    bool $useIncludePath = false,
    mixed $context = null,
    int $offset = 0,
    int $length = null
): false|string;
```

@link https://php.net/manual/en/function.file-get-contents.php

#### `phpFilePutContents()` { #traitsphpfiletrait-phpfileputcontents }

```php
protected static function phpFilePutContents(
    string $filename,
    mixed $data,
    int $flags = 0,
    mixed $context = null
): false|int;
```

@link https://php.net/manual/en/function.file-put-contents.php

#### `phpFopen()` { #traitsphpfiletrait-phpfopen }

```php
protected static function phpFopen(
    string $filename,
    string $mode,
    bool $useIncludePath = false,
    mixed $context = null
): mixed;
```

@link https://php.net/manual/en/function.fopen.php

#### `phpFwrite()` { #traitsphpfiletrait-phpfwrite }

```php
protected static function phpFwrite(
    mixed $handle,
    string $data,
    int $length = null
): false|int;
```

Binary-safe file write

@link https://php.net/manual/en/function.fwrite.php

#### `phpIsWritable()` { #traitsphpfiletrait-phpiswritable }

```php
protected static function phpIsWritable( string $filename ): bool;
```

Tells whether the filename is writable

@link https://php.net/manual/en/function.is-writable.php

#### `phpUnlink()` { #traitsphpfiletrait-phpunlink }

```php
protected static function phpUnlink(
    string $filename,
    mixed $context = null
): bool;
```

@link https://php.net/manual/en/function.unlink.php


## Traits\Php\HashTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/HashTrait.zep){ .src-btn }

Hashing method wrappers

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\HashTrait`**

</div>

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

#### `phpHash()` { #traitsphphashtrait-phphash }

```php
protected static function phpHash(
    string $algorithm,
    string $data,
    bool $binary = false
): string;
```

@link https://php.net/manual/en/function.hash.php

#### `phpHashEquals()` { #traitsphphashtrait-phphashequals }

```php
protected static function phpHashEquals(
    string $knownString,
    string $userString
): bool;
```

@link https://php.net/manual/en/function.hash-equals.php

#### `phpHashHmac()` { #traitsphphashtrait-phphashhmac }

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

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/HeaderTrait.zep){ .src-btn }

Header based wrapper methods

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\HeaderTrait`**

</div>

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

#### `phpHeadersSent()` { #traitsphpheadertrait-phpheaderssent }

```php
protected static function phpHeadersSent(): bool;
```

Checks if or where headers have been sent

@link https://php.net/manual/en/function.headers-sent.php


## Traits\Php\IgbinaryTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/IgbinaryTrait.zep){ .src-btn }

Igbinary based wrapper methods

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\IgbinaryTrait`**

</div>

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

#### `phpIgbinarySerialize()` { #traitsphpigbinarytrait-phpigbinaryserialize }

```php
protected static function phpIgbinarySerialize( mixed $value ): string|null;
```

@link https://php.net/manual/en/function.igbinary-serialize.php

#### `phpIgbinaryUnserialize()` { #traitsphpigbinarytrait-phpigbinaryunserialize }

```php
protected static function phpIgbinaryUnserialize( mixed $value );
```

@link https://php.net/manual/en/function.igbinary-unserialize.php


## Traits\Php\InfoTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/InfoTrait.zep){ .src-btn }

Information method wrappers

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\InfoTrait`**

</div>

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

#### `phpExtensionLoaded()` { #traitsphpinfotrait-phpextensionloaded }

```php
protected static function phpExtensionLoaded( string $name ): bool;
```

Find out whether an extension is loaded

@link https://php.net/manual/en/function.extension-loaded.php

#### `phpFunctionExists()` { #traitsphpinfotrait-phpfunctionexists }

```php
protected static function phpFunctionExists( string $functionName ): bool;
```

Return true if the given function has been defined

@link https://php.net/manual/en/function.function-exists.php


## Traits\Php\IniTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/IniTrait.zep){ .src-btn }

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\IniTrait`**

</div>

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

#### `phpIniGet()` { #traitsphpinitrait-phpiniget }

```php
protected static function phpIniGet(
    string $input,
    string $defaultValue = ""
): string;
```

Gets the value of a configuration option

@link https://php.net/manual/en/function.ini-get.php
@link https://php.net/manual/en/ini.list.php

#### `phpIniGetBool()` { #traitsphpinitrait-phpinigetbool }

```php
protected static function phpIniGetBool(
    string $input,
    bool $defaultValue = false
): bool;
```

Query a php.ini value and return it back as boolean

@link https://php.net/manual/en/function.ini-get.php
@link https://php.net/manual/en/ini.list.php

#### `phpIniGetInt()` { #traitsphpinitrait-phpinigetint }

```php
protected static function phpIniGetInt(
    string $input,
    int $defaultValue = 0
): int;
```

Query a php.ini value and return it back as integer

@link https://php.net/manual/en/function.ini-get.php
@link https://php.net/manual/en/ini.list.php

#### `phpParseIniFile()` { #traitsphpinitrait-phpparseinifile }

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

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/MbCaseTrait.zep){ .src-btn }

Multibyte case conversion wrapper method

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\MbCaseTrait`**

</div>

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

#### `phpMbConvertCase()` { #traitsphpmbcasetrait-phpmbconvertcase }

```php
protected static function phpMbConvertCase(
    string $input,
    int $mode
): string;
```

Converts the case of a string using `mb_convert_case()`

@link https://php.net/manual/en/function.mb-convert-case.php


## Traits\Php\MsgpackTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/MsgpackTrait.zep){ .src-btn }

MessagePack based wrapper methods

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\MsgpackTrait`**

</div>

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

#### `phpMsgpackPack()` { #traitsphpmsgpacktrait-phpmsgpackpack }

```php
protected static function phpMsgpackPack( mixed $value ): string;
```

@link https://php.net/manual/en/function.msgpack-pack.php

#### `phpMsgpackUnpack()` { #traitsphpmsgpacktrait-phpmsgpackunpack }

```php
protected static function phpMsgpackUnpack( mixed $value );
```

@link https://php.net/manual/en/function.msgpack-unpack.php


## Traits\Php\OpensslTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/OpensslTrait.zep){ .src-btn }

OpenSSL based wrapper methods

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\OpensslTrait`**

</div>

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

#### `phpOpensslCipherIvLength()` { #traitsphpopenssltrait-phpopensslcipherivlength }

```php
protected static function phpOpensslCipherIvLength( string $cipher ): int|bool;
```

@link https://php.net/manual/en/function.openssl-cipher-iv-length.php

#### `phpOpensslRandomPseudoBytes()` { #traitsphpopenssltrait-phpopensslrandompseudobytes }

```php
protected static function phpOpensslRandomPseudoBytes( int $length );
```

@link https://php.net/manual/en/function.openssl-random-pseudo-bytes.php


## Traits\Php\SerializeTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/SerializeTrait.zep){ .src-btn }

PHP serialize/unserialize wrapper methods

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\SerializeTrait`**

</div>

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

#### `phpSerialize()` { #traitsphpserializetrait-phpserialize }

```php
protected static function phpSerialize( mixed $value ): string;
```

@link https://php.net/manual/en/function.serialize.php

#### `phpUnserialize()` { #traitsphpserializetrait-phpunserialize }

```php
protected static function phpUnserialize(
    string $data,
    array $options = []
): mixed;
```

@link https://php.net/manual/en/function.unserialize.php


## Traits\Php\UrlTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/UrlTrait.zep){ .src-btn }

URL based wrapper methods

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\UrlTrait`**

</div>

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

#### `phpParseUrl()` { #traitsphpurltrait-phpparseurl }

```php
protected static function phpParseUrl(
    string $url,
    int $component = -1
);
```

@link https://php.net/manual/en/function.parse-url.php

#### `phpRawUrlDecode()` { #traitsphpurltrait-phprawurldecode }

```php
protected static function phpRawUrlDecode( string $input ): string;
```

@link https://php.net/manual/en/function.rawurldecode.php

#### `phpRawUrlEncode()` { #traitsphpurltrait-phprawurlencode }

```php
protected static function phpRawUrlEncode( string $input ): string;
```

@link https://php.net/manual/en/function.rawurlencode.php


## Traits\Php\YamlTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Php/YamlTrait.zep){ .src-btn }

YAML based wrapper methods

<div class="api-tree" markdown>

- **`Phalcon\Traits\Php\YamlTrait`**

</div>

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

#### `phpYamlParseFile()` { #traitsphpyamltrait-phpyamlparsefile }

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

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Arr/FilterTrait.zep){ .src-btn }

Filters a collection using array_filter with an optional callable

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Arr\FilterTrait`**

</div>

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

#### `toFilter()` { #traitssupporthelperarrfiltertrait-tofilter }

```php
protected static function toFilter(
    array $collection,
    mixed $method = null
): array;
```

Helper method to filter the collection


## Traits\Support\Helper\Arr\GetTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Arr/GetTrait.zep){ .src-btn }

Gets an array element by key and if it does not exist returns the default.
It also allows for casting the returned value to a specific type using
`settype` internally

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Arr\GetTrait`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#traitssupporthelperarrgettrait-getarrval">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getArrVal</span>(<span class="prm"><span class="st">array</span> <span class="sv">$collection</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$index</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$cast</span><span class="sm"> = null</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Protected · 1</div>

#### `getArrVal()` { #traitssupporthelperarrgettrait-getarrval }

```php
protected static function getArrVal(
    array $collection,
    mixed $index,
    mixed $defaultValue = null,
    string $cast = null
): mixed;
```


## Traits\Support\Helper\Json\DecodeTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Json/DecodeTrait.zep){ .src-btn }

Decodes a string using `json_decode`, throwing the native `\JsonException`
on failure. Any framework-flavored exception is added by the `Support`
helper class that wraps this trait.

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Json\DecodeTrait`**

</div>

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

#### `toDecode()` { #traitssupporthelperjsondecodetrait-todecode }

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

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Json/EncodeTrait.zep){ .src-btn }

Encodes data using `json_encode`, throwing the native `\JsonException` on
failure. Any framework-flavored exception is added by the `Support` helper
class that wraps this trait.

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Json\EncodeTrait`**

</div>

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

#### `toEncode()` { #traitssupporthelperjsonencodetrait-toencode }

```php
protected static function toEncode(
    mixed $data,
    int $options = 79,
    int $depth = 512
): string;
```

Encodes data using `json_encode`


## Traits\Support\Helper\Str\CamelizeTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/CamelizeTrait.zep){ .src-btn }

Converts strings to upperCamelCase or lowerCamelCase

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Str\CamelizeTrait`**

</div>

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

#### `toCamelize()` { #traitssupporthelperstrcamelizetrait-tocamelize }

```php
public static function toCamelize(
    string $text,
    string $delimiters = "-_",
    bool $lowerFirst = false
): string;
```


## Traits\Support\Helper\Str\DirFromFileTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/DirFromFileTrait.zep){ .src-btn }

Accepts a file name (without extension) and returns a calculated
directory structure with the filename in the end

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Str\DirFromFileTrait`**

</div>

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

#### `toDirFromFile()` { #traitssupporthelperstrdirfromfiletrait-todirfromfile }

```php
protected static function toDirFromFile(
    string $file,
    bool $filesystemSafe = false
): string;
```


## Traits\Support\Helper\Str\DirSeparatorTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/DirSeparatorTrait.zep){ .src-btn }

Accepts a directory name and ensures that it ends with
DIRECTORY_SEPARATOR

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait`**

</div>

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

#### `toDirSeparator()` { #traitssupporthelperstrdirseparatortrait-todirseparator }

```php
protected static function toDirSeparator( string $directory ): string;
```


## Traits\Support\Helper\Str\EndsWithTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/EndsWithTrait.zep){ .src-btn }

Check if a string ends with a given string

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Str\EndsWithTrait`**

</div>

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

#### `toEndsWith()` { #traitssupporthelperstrendswithtrait-toendswith }

```php
protected static function toEndsWith(
    string $haystack,
    string $needle,
    bool $ignoreCase = true
): bool;
```


## Traits\Support\Helper\Str\InterpolateTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/InterpolateTrait.zep){ .src-btn }

Interpolates context values into the message placeholders

@see http://www.php-fig.org/psr/psr-3/ Section 1.2 Message

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Str\InterpolateTrait`**

</div>

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

#### `toInterpolate()` { #traitssupporthelperstrinterpolatetrait-tointerpolate }

```php
protected static function toInterpolate(
    string $input,
    array $context = [],
    string $left = "%",
    string $right = "%"
): string;
```


## Traits\Support\Helper\Str\LowerTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/LowerTrait.zep){ .src-btn }

Lowercases a string using mbstring

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Str\LowerTrait`**

</div>

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

#### `toLower()` { #traitssupporthelperstrlowertrait-tolower }

```php
protected static function toLower(
    string $text,
    string $encoding = "UTF-8"
): string;
```


## Traits\Support\Helper\Str\StartsWithTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/StartsWithTrait.zep){ .src-btn }

Check if a string starts with a given string

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Str\StartsWithTrait`**

</div>

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

#### `toStartsWith()` { #traitssupporthelperstrstartswithtrait-tostartswith }

```php
protected static function toStartsWith(
    string $haystack,
    string $needle,
    bool $ignoreCase = true
): bool;
```


## Traits\Support\Helper\Str\UncamelizeTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/UncamelizeTrait.zep){ .src-btn }

Converts strings to non camelized style

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Str\UncamelizeTrait`**

</div>

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

#### `toUncamelize()` { #traitssupporthelperstruncamelizetrait-touncamelize }

```php
protected static function toUncamelize(
    string $text,
    string $delimiter = "_"
): string;
```


## Traits\Support\Helper\Str\UpperTrait

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Traits/Support/Helper/Str/UpperTrait.zep){ .src-btn }

Uppercases a string using mbstring

<div class="api-tree" markdown>

- **`Phalcon\Traits\Support\Helper\Str\UpperTrait`**

</div>

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

#### `toUpper()` { #traitssupporthelperstruppertrait-toupper }

```php
protected static function toUpper(
    string $text,
    string $encoding = "UTF-8"
): string;
```
