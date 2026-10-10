---
title: "Phalcon Traits"
version: "5.21"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Traits

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Traits\Factory\ConfigTrait

Trait

- **`Phalcon\Traits\Factory\ConfigTrait`**

`Phalcon\Config\ConfigInterface`

[`Phalcon\Auth\ManagerFactory`](/5.21/api/phalcon_auth/#authmanagerfactory)

### Method Summary

- `protected checkConfig(mixed $config): array`

- `protected checkConfigElement(array $config, string $element): array` — Checks if the config has a specific element

### Methods

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

Trait

Methods allowing a mapper based factory to operate. Supports injected
services, getting a service by name (key), initialization and setting of
the exception class (when exceptions are needed to be thrown)

- **`Phalcon\Traits\Factory\FactoryTrait`**

`Exception`

### Method Summary

- `protected getCachedInstance(string $name, mixed $arguments): object` — Return an object from the instances pool. If it does not exist, create it

- `protected getExceptionClass(): string` — Returns the exception class for the factory

- `protected getService(string $name): string` — Returns a service based on the name; throws exception if it does not

- `protected getServices(): array` — Returns the services for the factory

- `protected init(array $services = []): void` — Initializes services

### Methods

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

Trait

APCu based wrapper methods

- **`Phalcon\Traits\Php\ApcuTrait`**

[`Phalcon\Storage\Adapter\Apcu`](/5.21/api/phalcon_storage/#storageadapterapcu)

### Method Summary

- `protected phpApcuDec(mixed $key, int $step = 1): bool|int` — @link <https://php.net/manual/en/function.apcu-dec.php>

- `protected phpApcuDelete(mixed $key): bool|array` — @link <https://php.net/manual/en/function.apcu-delete.php>

- `protected phpApcuExists(mixed $key): bool|array` — @link <https://php.net/manual/en/function.apcu-exists.php>

- `protected phpApcuFetch(mixed $key): mixed` — @link <https://php.net/manual/en/function.apcu-fetch.php>

- `protected phpApcuInc(mixed $key, int $step = 1): bool|int` — @link <https://php.net/manual/en/function.apcu-inc.php>

- `protected phpApcuIterator(string $pattern): \APCUIterator|bool` — @link <https://php.net/manual/en/class.apcuiterator.php>

- `protected phpApcuStore(mixed $key, mixed $payload, int $ttl = 0): bool|array` — @link <https://php.net/manual/en/function.apcu-store.php>

### Methods

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

Trait

Base64 based wrapper methods

- **`Phalcon\Traits\Php\Base64Trait`**

[`Phalcon\Encryption\Crypt`](/5.21/api/phalcon_encryption/#encryptioncrypt) · [`Phalcon\Encryption\Security\JWT\Builder`](/5.21/api/phalcon_encryption/#encryptionsecurityjwtbuilder) · [`Phalcon\Encryption\Security\JWT\Token\Parser`](/5.21/api/phalcon_encryption/#encryptionsecurityjwttokenparser) · [`Phalcon\Storage\Serializer\Base64`](/5.21/api/phalcon_storage/#storageserializerbase64)

### Method Summary

- `protected doDecodeUrl(string $input): string` — Decode a Base64 URL string

- `protected doEncodeUrl(string $input): string` — Encode a string in Base64 URL format

- `protected phpBase64Decode(string $input, bool $strict = false): string|false` — @link <https://php.net/manual/en/function.base64-decode.php>

- `protected phpBase64Encode(string $input): string` — @link <https://php.net/manual/en/function.base64-encode.php>

### Methods

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

Trait

File based wrapper methods

- **`Phalcon\Traits\Php\FileTrait`**

[`Phalcon\Annotations\Adapter\Stream`](/5.21/api/phalcon_annotations/#annotationsadapterstream) · [`Phalcon\Assets\Asset`](/5.21/api/phalcon_assets/#assetsasset) · [`Phalcon\Assets\Collection`](/5.21/api/phalcon_assets/#assetscollection) · [`Phalcon\Assets\Manager`](/5.21/api/phalcon_assets/#assetsmanager) · [`Phalcon\Auth\Adapter\Stream`](/5.21/api/phalcon_auth/#authadapterstream) · [`Phalcon\Cli\Console`](/5.21/api/phalcon_cli/#cliconsole) · [`Phalcon\Config\Adapter\Json`](/5.21/api/phalcon_config/#configadapterjson) · [`Phalcon\Encryption\Security\Uuid\SysNodeProvider`](/5.21/api/phalcon_encryption/#encryptionsecurityuuidsysnodeprovider) · [`Phalcon\Forms\Loader\JsonLoader`](/5.21/api/phalcon_forms/#formsloaderjsonloader) · [`Phalcon\Http\Request`](/5.21/api/phalcon_http/#httprequest) · [`Phalcon\Image\Adapter\Gd`](/5.21/api/phalcon_image/#imageadaptergd) · [`Phalcon\Image\Adapter\Imagick`](/5.21/api/phalcon_image/#imageadapterimagick) · [`Phalcon\Logger\Adapter\Stream`](/5.21/api/phalcon_logger/#loggeradapterstream) · [`Phalcon\Mvc\Application`](/5.21/api/phalcon_mvc/#mvcapplication) · [`Phalcon\Mvc\Model\MetaData\Stream`](/5.21/api/phalcon_mvc/#mvcmodelmetadatastream) · [`Phalcon\Mvc\Router`](/5.21/api/phalcon_mvc/#mvcrouter) · [`Phalcon\Mvc\View`](/5.21/api/phalcon_mvc/#mvcview) · [`Phalcon\Mvc\View\Engine\Volt\Compiler`](/5.21/api/phalcon_mvc/#mvcviewenginevoltcompiler) · [`Phalcon\Mvc\View\Simple`](/5.21/api/phalcon_mvc/#mvcviewsimple) · [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnection`](/5.21/api/phalcon_queue/#queueadapterbeanstalkbeanstalkconnection) · [`Phalcon\Queue\Adapter\Stream\StreamContext`](/5.21/api/phalcon_queue/#queueadapterstreamstreamcontext) · [`Phalcon\Session\Adapter\Stream`](/5.21/api/phalcon_session/#sessionadapterstream) · [`Phalcon\Storage\Adapter\Stream`](/5.21/api/phalcon_storage/#storageadapterstream) · [`Phalcon\Translate\Adapter\Csv`](/5.21/api/phalcon_translate/#translateadaptercsv)

### Method Summary

- `protected phpFclose(mixed $handle): bool` — Closes an open file pointer

- `protected phpFgetCsv(mixed $stream, int $length = 0, string $separator = ",", mixed $enclosure = null, mixed $escape = null): array|false` — Gets line from file pointer and parse for CSV fields

- `protected phpFileExists(string $filename): bool` — @link <https://php.net/manual/en/function.file-exists.php>

- `protected phpFileGetContents(string $filename, bool $useIncludePath = false, mixed $context = null, int $offset = 0, int|null $length = null): false|string` — @link <https://php.net/manual/en/function.file-get-contents.php>

- `protected phpFilePutContents(string $filename, mixed $data, int $flags = 0, mixed $context = null): false|int` — @link <https://php.net/manual/en/function.file-put-contents.php>

- `protected phpFopen(string $filename, string $mode, bool $useIncludePath = false, mixed $context = null): mixed` — @link <https://php.net/manual/en/function.fopen.php>

- `protected phpFwrite(mixed $handle, string $data, int|null $length = null): false|int` — Binary-safe file write

- `protected phpIsWritable(string $filename): bool` — Tells whether the filename is writable

- `protected phpUnlink(string $filename, mixed $context = null): bool` — @link <https://php.net/manual/en/function.unlink.php>

### Methods

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

Trait

Hashing method wrappers

- **`Phalcon\Traits\Php\HashTrait`**

[`Phalcon\Assets\Asset`](/5.21/api/phalcon_assets/#assetsasset) · [`Phalcon\Assets\Inline`](/5.21/api/phalcon_assets/#assetsinline) · [`Phalcon\Encryption\Crypt`](/5.21/api/phalcon_encryption/#encryptioncrypt) · [`Phalcon\Encryption\Security`](/5.21/api/phalcon_encryption/#encryptionsecurity) · [`Phalcon\Encryption\Security\JWT\Signer\Hmac`](/5.21/api/phalcon_encryption/#encryptionsecurityjwtsignerhmac)

### Method Summary

- `protected phpHash(string $algorithm, string $data, bool $binary = false): string` — @link <https://php.net/manual/en/function.hash.php>

- `protected phpHashEquals(string $knownString, string $userString): bool` — @link <https://php.net/manual/en/function.hash-equals.php>

- `protected phpHashHmac(string $algorithm, string $data, string $key, bool $binary = false): string` — @link <https://php.net/manual/en/function.hash-hmac.php>

### Methods

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

Trait

Header based wrapper methods

- **`Phalcon\Traits\Php\HeaderTrait`**

[`Phalcon\Session\Manager`](/5.21/api/phalcon_session/#sessionmanager)

### Method Summary

- `protected phpHeadersSent(): bool` — Checks if or where headers have been sent

### Methods

<h4 id="traitsphpheadertrait-phpheaderssent"><code>phpHeadersSent()</code></h4>

```php
protected static function phpHeadersSent(): bool;
```

Checks if or where headers have been sent

@link https://php.net/manual/en/function.headers-sent.php


## Traits\Php\IgbinaryTrait

Trait

Igbinary based wrapper methods

- **`Phalcon\Traits\Php\IgbinaryTrait`**

[`Phalcon\Storage\Serializer\Igbinary`](/5.21/api/phalcon_storage/#storageserializerigbinary)

### Method Summary

- `protected phpIgbinarySerialize(mixed $value): string|null` — @link <https://php.net/manual/en/function.igbinary-serialize.php>

- `protected phpIgbinaryUnserialize(mixed $value)` — @link <https://php.net/manual/en/function.igbinary-unserialize.php>

### Methods

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

Trait

Information method wrappers

- **`Phalcon\Traits\Php\InfoTrait`**

[`Phalcon\Config\Adapter\Yaml`](/5.21/api/phalcon_config/#configadapteryaml) · [`Phalcon\Encryption\Crypt`](/5.21/api/phalcon_encryption/#encryptioncrypt) · [`Phalcon\Encryption\Security\Uuid\SysNodeProvider`](/5.21/api/phalcon_encryption/#encryptionsecurityuuidsysnodeprovider) · [`Phalcon\Filter\Validation\Validator\Confirmation`](/5.21/api/phalcon_filter/#filtervalidationvalidatorconfirmation) · [`Phalcon\Filter\Validation\Validator\File\MimeType`](/5.21/api/phalcon_filter/#filtervalidationvalidatorfilemimetype) · [`Phalcon\Filter\Validation\Validator\StringLength\Max`](/5.21/api/phalcon_filter/#filtervalidationvalidatorstringlengthmax) · [`Phalcon\Filter\Validation\Validator\StringLength\Min`](/5.21/api/phalcon_filter/#filtervalidationvalidatorstringlengthmin) · [`Phalcon\Forms\Loader\YamlLoader`](/5.21/api/phalcon_forms/#formsloaderyamlloader) · [`Phalcon\Http\Response`](/5.21/api/phalcon_http/#httpresponse) · [`Phalcon\Image\Adapter\Gd`](/5.21/api/phalcon_image/#imageadaptergd) · [`Phalcon\Mvc\View\Engine\Volt`](/5.21/api/phalcon_mvc/#mvcviewenginevolt) · [`Phalcon\Queue\Consumer\Worker`](/5.21/api/phalcon_queue/#queueconsumerworker) · [`Phalcon\Support\Debug\ReportBuilder`](/5.21/api/phalcon_support/#supportdebugreportbuilder) · [`Phalcon\Support\Helper\Arr\Group`](/5.21/api/phalcon_support/#supporthelperarrgroup) · [`Phalcon\Translate\Adapter\Gettext`](/5.21/api/phalcon_translate/#translateadaptergettext)

### Method Summary

- `protected phpExtensionLoaded(string $name): bool` — Find out whether an extension is loaded

- `protected phpFunctionExists(string $functionName): bool` — Return true if the given function has been defined

### Methods

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

Trait

- **`Phalcon\Traits\Php\IniTrait`**

[`Phalcon\Config\Adapter\Ini`](/5.21/api/phalcon_config/#configadapterini) · [`Phalcon\Session\Adapter\Stream`](/5.21/api/phalcon_session/#sessionadapterstream)

### Method Summary

- `protected phpIniGet(string $input, string $defaultValue = ""): string` — Gets the value of a configuration option

- `protected phpIniGetBool(string $input, bool $defaultValue = false): bool` — Query a php.ini value and return it back as boolean

- `protected phpIniGetInt(string $input, int $defaultValue = 0): int` — Query a php.ini value and return it back as integer

- `protected phpParseIniFile(string $filename, bool $processSections = false, int $scannerMode = 0): array|false` — Parse a configuration file

### Methods

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

Trait

Multibyte case conversion wrapper method

- **`Phalcon\Traits\Php\MbCaseTrait`**

[`Phalcon\Filter\Sanitize\Lower`](/5.21/api/phalcon_filter/#filtersanitizelower) · [`Phalcon\Filter\Sanitize\Upper`](/5.21/api/phalcon_filter/#filtersanitizeupper) · [`Phalcon\Filter\Sanitize\UpperWords`](/5.21/api/phalcon_filter/#filtersanitizeupperwords)

### Method Summary

- `protected phpMbConvertCase(string $input, int $mode): string` — Converts the case of a string using `mb_convert_case()`

### Methods

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

Trait

MessagePack based wrapper methods

- **`Phalcon\Traits\Php\MsgpackTrait`**

[`Phalcon\Storage\Serializer\Msgpack`](/5.21/api/phalcon_storage/#storageserializermsgpack)

### Method Summary

- `protected phpMsgpackPack(mixed $value): string` — @link <https://php.net/manual/en/function.msgpack-pack.php>

- `protected phpMsgpackUnpack(mixed $value)` — @link <https://php.net/manual/en/function.msgpack-unpack.php>

### Methods

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

Trait

OpenSSL based wrapper methods

- **`Phalcon\Traits\Php\OpensslTrait`**

[`Phalcon\Encryption\Crypt`](/5.21/api/phalcon_encryption/#encryptioncrypt)

### Method Summary

- `protected phpOpensslCipherIvLength(string $cipher): int|bool` — @link <https://php.net/manual/en/function.openssl-cipher-iv-length.php>

- `protected phpOpensslRandomPseudoBytes(int $length)` — @link <https://php.net/manual/en/function.openssl-random-pseudo-bytes.php>

### Methods

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

Trait

PHP serialize/unserialize wrapper methods

- **`Phalcon\Traits\Php\SerializeTrait`**

[`Phalcon\Storage\Serializer\Php`](/5.21/api/phalcon_storage/#storageserializerphp)

### Method Summary

- `protected phpSerialize(mixed $value): string` — @link <https://php.net/manual/en/function.serialize.php>

- `protected phpUnserialize(string $data, array $options = []): mixed` — @link <https://php.net/manual/en/function.unserialize.php>

### Methods

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

Trait

URL based wrapper methods

- **`Phalcon\Traits\Php\UrlTrait`**

[`Phalcon\Html\Escaper\UrlEscaper`](/5.21/api/phalcon_html/#htmlescaperurlescaper) · [`Phalcon\Http\Response`](/5.21/api/phalcon_http/#httpresponse)

### Method Summary

- `protected phpParseUrl(string $url, int $component = -1)` — @link <https://php.net/manual/en/function.parse-url.php>

- `protected phpRawUrlDecode(string $input): string` — @link <https://php.net/manual/en/function.rawurldecode.php>

- `protected phpRawUrlEncode(string $input): string` — @link <https://php.net/manual/en/function.rawurlencode.php>

### Methods

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

Trait

YAML based wrapper methods

- **`Phalcon\Traits\Php\YamlTrait`**

[`Phalcon\Config\Adapter\Yaml`](/5.21/api/phalcon_config/#configadapteryaml)

### Method Summary

- `protected phpYamlParseFile(string $filename, int $pos = 0, array $callbacks = [])` — Parse a YAML stream from a file

### Methods

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

Trait

Filters a collection using array_filter with an optional callable

- **`Phalcon\Traits\Support\Helper\Arr\FilterTrait`**

[`Phalcon\Support\Helper\Arr\AbstractArr`](/5.21/api/phalcon_support/#supporthelperarrabstractarr)

### Method Summary

- `protected toFilter(array $collection, mixed $method = null): array` — Helper method to filter the collection

### Methods

<h4 id="traitssupporthelperarrfiltertrait-tofilter"><code>toFilter()</code></h4>

```php
protected static function toFilter(
    array $collection,
    mixed $method = null
): array;
```

Helper method to filter the collection


## Traits\Support\Helper\Arr\GetTrait

Trait

Gets an array element by key and if it does not exist returns the default.
It also allows for casting the returned value to a specific type using
`settype` internally

- **`Phalcon\Traits\Support\Helper\Arr\GetTrait`**

[`Phalcon\ADR\Middleware\CorsMiddleware`](/5.21/api/phalcon_adr/#adrmiddlewarecorsmiddleware) · [`Phalcon\Annotations\AnnotationsFactory`](/5.21/api/phalcon_annotations/#annotationsannotationsfactory) · [`Phalcon\Db\Adapter\PdoFactory`](/5.21/api/phalcon_db/#dbadapterpdofactory) · [`Phalcon\Filter\Validation\Validator\File`](/5.21/api/phalcon_filter/#filtervalidationvalidatorfile) · [`Phalcon\Http\Cookie`](/5.21/api/phalcon_http/#httpcookie) · [`Phalcon\Http\Request\File`](/5.21/api/phalcon_http/#httprequestfile) · [`Phalcon\Image\ImageFactory`](/5.21/api/phalcon_image/#imageimagefactory) · [`Phalcon\Logger\LoggerFactory`](/5.21/api/phalcon_logger/#loggerloggerfactory) · [`Phalcon\Mvc\Model\MetaData`](/5.21/api/phalcon_mvc/#mvcmodelmetadata) · [`Phalcon\Session\Adapter\AbstractAdapter`](/5.21/api/phalcon_session/#sessionadapterabstractadapter) · [`Phalcon\Session\Adapter\Stream`](/5.21/api/phalcon_session/#sessionadapterstream) · [`Phalcon\Session\Manager`](/5.21/api/phalcon_session/#sessionmanager) · [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.21/api/phalcon_storage/#storageadapterabstractadapter) · [`Phalcon\Support\Debug`](/5.21/api/phalcon_support/#supportdebug) · [`Phalcon\Support\Debug\ReportBuilder`](/5.21/api/phalcon_support/#supportdebugreportbuilder) · [`Phalcon\Support\Helper\Arr\Get`](/5.21/api/phalcon_support/#supporthelperarrget)

### Method Summary

- `protected getArrVal(array $collection, mixed $index, mixed $defaultValue = null, string|null $cast = null): mixed`

### Methods

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

Trait

Decodes a string using `json_decode`, throwing the native `\JsonException`
on failure. Any framework-flavored exception is added by the `Support`
helper class that wraps this trait.

- **`Phalcon\Traits\Support\Helper\Json\DecodeTrait`**

[`Phalcon\Support\Helper\Json\Decode`](/5.21/api/phalcon_support/#supporthelperjsondecode)

### Method Summary

- `protected toDecode(string $data, bool $associative = false, int $depth = 512, int $options = 79)` — Decodes a string using `json_decode`

### Methods

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

Trait

Encodes data using `json_encode`, throwing the native `\JsonException` on
failure. Any framework-flavored exception is added by the `Support` helper
class that wraps this trait.

- **`Phalcon\Traits\Support\Helper\Json\EncodeTrait`**

[`Phalcon\Logger\Formatter\Json`](/5.21/api/phalcon_logger/#loggerformatterjson) · [`Phalcon\Support\Helper\Json\Encode`](/5.21/api/phalcon_support/#supporthelperjsonencode)

### Method Summary

- `protected toEncode(mixed $data, int $options = 79, int $depth = 512): string` — Encodes data using `json_encode`

### Methods

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

Trait

Converts strings to upperCamelCase or lowerCamelCase

- **`Phalcon\Traits\Support\Helper\Str\CamelizeTrait`**

[`Phalcon\Support\Helper\Str\Camelize`](/5.21/api/phalcon_support/#supporthelperstrcamelize)

### Method Summary

- `public toCamelize(string $text, string $delimiters = "-_", bool $lowerFirst = false): string`

### Methods

<h4 id="traitssupporthelperstrcamelizetrait-tocamelize"><code>toCamelize()</code></h4>

```php
public static function toCamelize(
    string $text,
    string $delimiters = "-_",
    bool $lowerFirst = false
): string;
```


## Traits\Support\Helper\Str\DirFromFileTrait

Trait

Accepts a file name (without extension) and returns a calculated
directory structure with the filename in the end

- **`Phalcon\Traits\Support\Helper\Str\DirFromFileTrait`**

[`Phalcon\Storage\Adapter\Stream`](/5.21/api/phalcon_storage/#storageadapterstream) · [`Phalcon\Support\Helper\Str\DirFromFile`](/5.21/api/phalcon_support/#supporthelperstrdirfromfile)

### Method Summary

- `protected toDirFromFile(string $file, bool $filesystemSafe = false): string`

### Methods

<h4 id="traitssupporthelperstrdirfromfiletrait-todirfromfile"><code>toDirFromFile()</code></h4>

```php
protected static function toDirFromFile(
    string $file,
    bool $filesystemSafe = false
): string;
```


## Traits\Support\Helper\Str\DirSeparatorTrait

Trait

Accepts a directory name and ensures that it ends with
DIRECTORY_SEPARATOR

- **`Phalcon\Traits\Support\Helper\Str\DirSeparatorTrait`**

[`Phalcon\Mvc\View`](/5.21/api/phalcon_mvc/#mvcview) · [`Phalcon\Mvc\View\Simple`](/5.21/api/phalcon_mvc/#mvcviewsimple) · [`Phalcon\Session\Adapter\Stream`](/5.21/api/phalcon_session/#sessionadapterstream) · [`Phalcon\Storage\Adapter\Stream`](/5.21/api/phalcon_storage/#storageadapterstream) · [`Phalcon\Support\Helper\Str\DirSeparator`](/5.21/api/phalcon_support/#supporthelperstrdirseparator)

### Method Summary

- `protected toDirSeparator(string $directory): string`

### Methods

<h4 id="traitssupporthelperstrdirseparatortrait-todirseparator"><code>toDirSeparator()</code></h4>

```php
protected static function toDirSeparator( string $directory ): string;
```


## Traits\Support\Helper\Str\EndsWithTrait

Trait

Check if a string ends with a given string

- **`Phalcon\Traits\Support\Helper\Str\EndsWithTrait`**

[`Phalcon\Support\Helper\Str\AbstractStr`](/5.21/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

- `protected toEndsWith(string $haystack, string $needle, bool $ignoreCase = true): bool`

### Methods

<h4 id="traitssupporthelperstrendswithtrait-toendswith"><code>toEndsWith()</code></h4>

```php
protected static function toEndsWith(
    string $haystack,
    string $needle,
    bool $ignoreCase = true
): bool;
```


## Traits\Support\Helper\Str\InterpolateTrait

Trait

Interpolates context values into the message placeholders

@see http://www.php-fig.org/psr/psr-3/ Section 1.2 Message

- **`Phalcon\Traits\Support\Helper\Str\InterpolateTrait`**

[`Phalcon\Flash\AbstractFlash`](/5.21/api/phalcon_flash/#flashabstractflash) · [`Phalcon\Html\Helper\Breadcrumbs`](/5.21/api/phalcon_html/#htmlhelperbreadcrumbs) · [`Phalcon\Logger\Formatter\AbstractFormatter`](/5.21/api/phalcon_logger/#loggerformatterabstractformatter) · [`Phalcon\Support\Debug\Dump`](/5.21/api/phalcon_support/#supportdebugdump) · [`Phalcon\Support\Debug\Renderer\HtmlRenderer`](/5.21/api/phalcon_support/#supportdebugrendererhtmlrenderer) · [`Phalcon\Support\Helper\Str\AbstractStr`](/5.21/api/phalcon_support/#supporthelperstrabstractstr) · [`Phalcon\Support\Helper\Str\Interpolate`](/5.21/api/phalcon_support/#supporthelperstrinterpolate) · [`Phalcon\Translate\Interpolator\AssociativeArray`](/5.21/api/phalcon_translate/#translateinterpolatorassociativearray)

### Method Summary

- `protected toInterpolate(string $input, array $context = [], string $left = "%", string $right = "%"): string`

### Methods

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

Trait

Lowercases a string using mbstring

- **`Phalcon\Traits\Support\Helper\Str\LowerTrait`**

[`Phalcon\Support\Helper\Str\AbstractStr`](/5.21/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

- `protected toLower(string $text, string $encoding = "UTF-8"): string`

### Methods

<h4 id="traitssupporthelperstrlowertrait-tolower"><code>toLower()</code></h4>

```php
protected static function toLower(
    string $text,
    string $encoding = "UTF-8"
): string;
```


## Traits\Support\Helper\Str\StartsWithTrait

Trait

Check if a string starts with a given string

- **`Phalcon\Traits\Support\Helper\Str\StartsWithTrait`**

[`Phalcon\Support\Helper\Str\AbstractStr`](/5.21/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

- `protected toStartsWith(string $haystack, string $needle, bool $ignoreCase = true): bool`

### Methods

<h4 id="traitssupporthelperstrstartswithtrait-tostartswith"><code>toStartsWith()</code></h4>

```php
protected static function toStartsWith(
    string $haystack,
    string $needle,
    bool $ignoreCase = true
): bool;
```


## Traits\Support\Helper\Str\UncamelizeTrait

Trait

Converts strings to non camelized style

- **`Phalcon\Traits\Support\Helper\Str\UncamelizeTrait`**

[`Phalcon\Support\Helper\Str\Uncamelize`](/5.21/api/phalcon_support/#supporthelperstruncamelize)

### Method Summary

- `protected toUncamelize(string $text, string $delimiter = "_"): string`

### Methods

<h4 id="traitssupporthelperstruncamelizetrait-touncamelize"><code>toUncamelize()</code></h4>

```php
protected static function toUncamelize(
    string $text,
    string $delimiter = "_"
): string;
```


## Traits\Support\Helper\Str\UpperTrait

Trait

Uppercases a string using mbstring

- **`Phalcon\Traits\Support\Helper\Str\UpperTrait`**

[`Phalcon\Support\Helper\Str\AbstractStr`](/5.21/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

- `protected toUpper(string $text, string $encoding = "UTF-8"): string`

### Methods

<h4 id="traitssupporthelperstruppertrait-toupper"><code>toUpper()</code></h4>

```php
protected static function toUpper(
    string $text,
    string $encoding = "UTF-8"
): string;
```

Source: https://docs.phalcon.io/5.21/api/phalcon_traits/index.mdx
