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

Trait

- **`Phalcon\Traits\Factory\ConfigTrait`**

`Phalcon\Config\ConfigInterface`

[`Phalcon\Auth\ManagerFactory`](/5.20/api/phalcon_auth/#authmanagerfactory)

### Method Summary

<ApiItem href="#traitsfactoryconfigtrait-checkconfig" visibility="protected" name="checkConfig" returnType="array" params={[{"type":"mixed","name":"config","default":null}]}>
</ApiItem>
<ApiItem href="#traitsfactoryconfigtrait-checkconfigelement" visibility="protected" name="checkConfigElement" returnType="array" params={[{"type":"array","name":"config","default":null},{"type":"string","name":"element","default":null}]}>
Checks if the config has a specific element
</ApiItem>

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

<ApiItem href="#traitsfactoryfactorytrait-getcachedinstance" visibility="protected" name="getCachedInstance" returnType="object" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"arguments","default":null}]}>
Return an object from the instances pool. If it does not exist, create it
</ApiItem>
<ApiItem href="#traitsfactoryfactorytrait-getexceptionclass" visibility="protected" name="getExceptionClass" returnType="string" params={[]}>
Returns the exception class for the factory
</ApiItem>
<ApiItem href="#traitsfactoryfactorytrait-getservice" visibility="protected" name="getService" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Returns a service based on the name; throws exception if it does not
</ApiItem>
<ApiItem href="#traitsfactoryfactorytrait-getservices" visibility="protected" name="getServices" returnType="array" params={[]}>
Returns the services for the factory
</ApiItem>
<ApiItem href="#traitsfactoryfactorytrait-init" visibility="protected" name="init" returnType="void" params={[{"type":"array","name":"services","default":"[]"}]}>
Initializes services
</ApiItem>

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

[`Phalcon\Storage\Adapter\Apcu`](/5.20/api/phalcon_storage/#storageadapterapcu)

### Method Summary

<ApiItem href="#traitsphpapcutrait-phpapcudec" visibility="protected" name="phpApcuDec" returnType="bool|int" params={[{"type":"mixed","name":"key","default":null},{"type":"int","name":"step","default":"1"}]}>
@link https://php.net/manual/en/function.apcu-dec.php
</ApiItem>
<ApiItem href="#traitsphpapcutrait-phpapcudelete" visibility="protected" name="phpApcuDelete" returnType="bool|array" params={[{"type":"mixed","name":"key","default":null}]}>
@link https://php.net/manual/en/function.apcu-delete.php
</ApiItem>
<ApiItem href="#traitsphpapcutrait-phpapcuexists" visibility="protected" name="phpApcuExists" returnType="bool|array" params={[{"type":"mixed","name":"key","default":null}]}>
@link https://php.net/manual/en/function.apcu-exists.php
</ApiItem>
<ApiItem href="#traitsphpapcutrait-phpapcufetch" visibility="protected" name="phpApcuFetch" returnType="mixed" params={[{"type":"mixed","name":"key","default":null}]}>
@link https://php.net/manual/en/function.apcu-fetch.php
</ApiItem>
<ApiItem href="#traitsphpapcutrait-phpapcuinc" visibility="protected" name="phpApcuInc" returnType="bool|int" params={[{"type":"mixed","name":"key","default":null},{"type":"int","name":"step","default":"1"}]}>
@link https://php.net/manual/en/function.apcu-inc.php
</ApiItem>
<ApiItem href="#traitsphpapcutrait-phpapcuiterator" visibility="protected" name="phpApcuIterator" returnType="\APCUIterator|bool" params={[{"type":"string","name":"pattern","default":null}]}>
@link https://php.net/manual/en/class.apcuiterator.php
</ApiItem>
<ApiItem href="#traitsphpapcutrait-phpapcustore" visibility="protected" name="phpApcuStore" returnType="bool|array" params={[{"type":"mixed","name":"key","default":null},{"type":"mixed","name":"payload","default":null},{"type":"int","name":"ttl","default":"0"}]}>
@link https://php.net/manual/en/function.apcu-store.php
</ApiItem>

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

[`Phalcon\Encryption\Crypt`](/5.20/api/phalcon_encryption/#encryptioncrypt) · [`Phalcon\Encryption\Security\JWT\Builder`](/5.20/api/phalcon_encryption/#encryptionsecurityjwtbuilder) · [`Phalcon\Encryption\Security\JWT\Token\Parser`](/5.20/api/phalcon_encryption/#encryptionsecurityjwttokenparser) · [`Phalcon\Storage\Serializer\Base64`](/5.20/api/phalcon_storage/#storageserializerbase64)

### Method Summary

<ApiItem href="#traitsphpbase64trait-dodecodeurl" visibility="protected" name="doDecodeUrl" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Decode a Base64 URL string
</ApiItem>
<ApiItem href="#traitsphpbase64trait-doencodeurl" visibility="protected" name="doEncodeUrl" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
Encode a string in Base64 URL format
</ApiItem>
<ApiItem href="#traitsphpbase64trait-phpbase64decode" visibility="protected" name="phpBase64Decode" returnType="string|false" params={[{"type":"string","name":"input","default":null},{"type":"bool","name":"strict","default":"false"}]}>
@link https://php.net/manual/en/function.base64-decode.php
</ApiItem>
<ApiItem href="#traitsphpbase64trait-phpbase64encode" visibility="protected" name="phpBase64Encode" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
@link https://php.net/manual/en/function.base64-encode.php
</ApiItem>

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

[`Phalcon\Annotations\Adapter\Stream`](/5.20/api/phalcon_annotations/#annotationsadapterstream) · [`Phalcon\Assets\Asset`](/5.20/api/phalcon_assets/#assetsasset) · [`Phalcon\Assets\Collection`](/5.20/api/phalcon_assets/#assetscollection) · [`Phalcon\Assets\Manager`](/5.20/api/phalcon_assets/#assetsmanager) · [`Phalcon\Auth\Adapter\Stream`](/5.20/api/phalcon_auth/#authadapterstream) · [`Phalcon\Cli\Console`](/5.20/api/phalcon_cli/#cliconsole) · [`Phalcon\Config\Adapter\Json`](/5.20/api/phalcon_config/#configadapterjson) · [`Phalcon\Encryption\Security\Uuid\SysNodeProvider`](/5.20/api/phalcon_encryption/#encryptionsecurityuuidsysnodeprovider) · [`Phalcon\Forms\Loader\JsonLoader`](/5.20/api/phalcon_forms/#formsloaderjsonloader) · [`Phalcon\Http\Request`](/5.20/api/phalcon_http/#httprequest) · [`Phalcon\Image\Adapter\Gd`](/5.20/api/phalcon_image/#imageadaptergd) · [`Phalcon\Image\Adapter\Imagick`](/5.20/api/phalcon_image/#imageadapterimagick) · [`Phalcon\Logger\Adapter\Stream`](/5.20/api/phalcon_logger/#loggeradapterstream) · [`Phalcon\Mvc\Application`](/5.20/api/phalcon_mvc/#mvcapplication) · [`Phalcon\Mvc\Model\MetaData\Stream`](/5.20/api/phalcon_mvc/#mvcmodelmetadatastream) · [`Phalcon\Mvc\Router`](/5.20/api/phalcon_mvc/#mvcrouter) · [`Phalcon\Mvc\View`](/5.20/api/phalcon_mvc/#mvcview) · [`Phalcon\Mvc\View\Engine\Volt\Compiler`](/5.20/api/phalcon_mvc/#mvcviewenginevoltcompiler) · [`Phalcon\Mvc\View\Simple`](/5.20/api/phalcon_mvc/#mvcviewsimple) · [`Phalcon\Queue\Adapter\Beanstalk\BeanstalkConnection`](/5.20/api/phalcon_queue/#queueadapterbeanstalkbeanstalkconnection) · [`Phalcon\Queue\Adapter\Stream\StreamContext`](/5.20/api/phalcon_queue/#queueadapterstreamstreamcontext) · [`Phalcon\Session\Adapter\Stream`](/5.20/api/phalcon_session/#sessionadapterstream) · [`Phalcon\Storage\Adapter\Stream`](/5.20/api/phalcon_storage/#storageadapterstream) · [`Phalcon\Translate\Adapter\Csv`](/5.20/api/phalcon_translate/#translateadaptercsv)

### Method Summary

<ApiItem href="#traitsphpfiletrait-phpfclose" visibility="protected" name="phpFclose" returnType="bool" params={[{"type":"mixed","name":"handle","default":null}]}>
Closes an open file pointer
</ApiItem>
<ApiItem href="#traitsphpfiletrait-phpfgetcsv" visibility="protected" name="phpFgetCsv" returnType="array|false" params={[{"type":"mixed","name":"stream","default":null},{"type":"int","name":"length","default":"0"},{"type":"string","name":"separator","default":"\",\""},{"type":"mixed","name":"enclosure","default":"null"},{"type":"mixed","name":"escape","default":"null"}]}>
Gets line from file pointer and parse for CSV fields
</ApiItem>
<ApiItem href="#traitsphpfiletrait-phpfileexists" visibility="protected" name="phpFileExists" returnType="bool" params={[{"type":"string","name":"filename","default":null}]}>
@link https://php.net/manual/en/function.file-exists.php
</ApiItem>
<ApiItem href="#traitsphpfiletrait-phpfilegetcontents" visibility="protected" name="phpFileGetContents" returnType="false|string" params={[{"type":"string","name":"filename","default":null},{"type":"bool","name":"useIncludePath","default":"false"},{"type":"mixed","name":"context","default":"null"},{"type":"int","name":"offset","default":"0"},{"type":"int|null","name":"length","default":"null"}]}>
@link https://php.net/manual/en/function.file-get-contents.php
</ApiItem>
<ApiItem href="#traitsphpfiletrait-phpfileputcontents" visibility="protected" name="phpFilePutContents" returnType="false|int" params={[{"type":"string","name":"filename","default":null},{"type":"mixed","name":"data","default":null},{"type":"int","name":"flags","default":"0"},{"type":"mixed","name":"context","default":"null"}]}>
@link https://php.net/manual/en/function.file-put-contents.php
</ApiItem>
<ApiItem href="#traitsphpfiletrait-phpfopen" visibility="protected" name="phpFopen" returnType="mixed" params={[{"type":"string","name":"filename","default":null},{"type":"string","name":"mode","default":null},{"type":"bool","name":"useIncludePath","default":"false"},{"type":"mixed","name":"context","default":"null"}]}>
@link https://php.net/manual/en/function.fopen.php
</ApiItem>
<ApiItem href="#traitsphpfiletrait-phpfwrite" visibility="protected" name="phpFwrite" returnType="false|int" params={[{"type":"mixed","name":"handle","default":null},{"type":"string","name":"data","default":null},{"type":"int|null","name":"length","default":"null"}]}>
Binary-safe file write
</ApiItem>
<ApiItem href="#traitsphpfiletrait-phpiswritable" visibility="protected" name="phpIsWritable" returnType="bool" params={[{"type":"string","name":"filename","default":null}]}>
Tells whether the filename is writable
</ApiItem>
<ApiItem href="#traitsphpfiletrait-phpunlink" visibility="protected" name="phpUnlink" returnType="bool" params={[{"type":"string","name":"filename","default":null},{"type":"mixed","name":"context","default":"null"}]}>
@link https://php.net/manual/en/function.unlink.php
</ApiItem>

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

[`Phalcon\Assets\Asset`](/5.20/api/phalcon_assets/#assetsasset) · [`Phalcon\Assets\Inline`](/5.20/api/phalcon_assets/#assetsinline) · [`Phalcon\Encryption\Crypt`](/5.20/api/phalcon_encryption/#encryptioncrypt) · [`Phalcon\Encryption\Security`](/5.20/api/phalcon_encryption/#encryptionsecurity) · [`Phalcon\Encryption\Security\JWT\Signer\Hmac`](/5.20/api/phalcon_encryption/#encryptionsecurityjwtsignerhmac)

### Method Summary

<ApiItem href="#traitsphphashtrait-phphash" visibility="protected" name="phpHash" returnType="string" params={[{"type":"string","name":"algorithm","default":null},{"type":"string","name":"data","default":null},{"type":"bool","name":"binary","default":"false"}]}>
@link https://php.net/manual/en/function.hash.php
</ApiItem>
<ApiItem href="#traitsphphashtrait-phphashequals" visibility="protected" name="phpHashEquals" returnType="bool" params={[{"type":"string","name":"knownString","default":null},{"type":"string","name":"userString","default":null}]}>
@link https://php.net/manual/en/function.hash-equals.php
</ApiItem>
<ApiItem href="#traitsphphashtrait-phphashhmac" visibility="protected" name="phpHashHmac" returnType="string" params={[{"type":"string","name":"algorithm","default":null},{"type":"string","name":"data","default":null},{"type":"string","name":"key","default":null},{"type":"bool","name":"binary","default":"false"}]}>
@link https://php.net/manual/en/function.hash-hmac.php
</ApiItem>

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

[`Phalcon\Session\Manager`](/5.20/api/phalcon_session/#sessionmanager)

### Method Summary

<ApiItem href="#traitsphpheadertrait-phpheaderssent" visibility="protected" name="phpHeadersSent" returnType="bool" params={[]}>
Checks if or where headers have been sent
</ApiItem>

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

[`Phalcon\Storage\Serializer\Igbinary`](/5.20/api/phalcon_storage/#storageserializerigbinary)

### Method Summary

<ApiItem href="#traitsphpigbinarytrait-phpigbinaryserialize" visibility="protected" name="phpIgbinarySerialize" returnType="string|null" params={[{"type":"mixed","name":"value","default":null}]}>
@link https://php.net/manual/en/function.igbinary-serialize.php
</ApiItem>
<ApiItem href="#traitsphpigbinarytrait-phpigbinaryunserialize" visibility="protected" name="phpIgbinaryUnserialize" returnType="" params={[{"type":"mixed","name":"value","default":null}]}>
@link https://php.net/manual/en/function.igbinary-unserialize.php
</ApiItem>

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

[`Phalcon\Config\Adapter\Yaml`](/5.20/api/phalcon_config/#configadapteryaml) · [`Phalcon\Encryption\Crypt`](/5.20/api/phalcon_encryption/#encryptioncrypt) · [`Phalcon\Encryption\Security\Uuid\SysNodeProvider`](/5.20/api/phalcon_encryption/#encryptionsecurityuuidsysnodeprovider) · [`Phalcon\Filter\Validation\Validator\Confirmation`](/5.20/api/phalcon_filter/#filtervalidationvalidatorconfirmation) · [`Phalcon\Filter\Validation\Validator\File\MimeType`](/5.20/api/phalcon_filter/#filtervalidationvalidatorfilemimetype) · [`Phalcon\Filter\Validation\Validator\StringLength\Max`](/5.20/api/phalcon_filter/#filtervalidationvalidatorstringlengthmax) · [`Phalcon\Filter\Validation\Validator\StringLength\Min`](/5.20/api/phalcon_filter/#filtervalidationvalidatorstringlengthmin) · [`Phalcon\Forms\Loader\YamlLoader`](/5.20/api/phalcon_forms/#formsloaderyamlloader) · [`Phalcon\Http\Response`](/5.20/api/phalcon_http/#httpresponse) · [`Phalcon\Image\Adapter\Gd`](/5.20/api/phalcon_image/#imageadaptergd) · [`Phalcon\Mvc\View\Engine\Volt`](/5.20/api/phalcon_mvc/#mvcviewenginevolt) · [`Phalcon\Queue\Consumer\Worker`](/5.20/api/phalcon_queue/#queueconsumerworker) · [`Phalcon\Support\Debug\ReportBuilder`](/5.20/api/phalcon_support/#supportdebugreportbuilder) · [`Phalcon\Support\Helper\Arr\Group`](/5.20/api/phalcon_support/#supporthelperarrgroup) · [`Phalcon\Translate\Adapter\Gettext`](/5.20/api/phalcon_translate/#translateadaptergettext)

### Method Summary

<ApiItem href="#traitsphpinfotrait-phpextensionloaded" visibility="protected" name="phpExtensionLoaded" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Find out whether an extension is loaded
</ApiItem>
<ApiItem href="#traitsphpinfotrait-phpfunctionexists" visibility="protected" name="phpFunctionExists" returnType="bool" params={[{"type":"string","name":"functionName","default":null}]}>
Return true if the given function has been defined
</ApiItem>

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

[`Phalcon\Config\Adapter\Ini`](/5.20/api/phalcon_config/#configadapterini) · [`Phalcon\Session\Adapter\Stream`](/5.20/api/phalcon_session/#sessionadapterstream)

### Method Summary

<ApiItem href="#traitsphpinitrait-phpiniget" visibility="protected" name="phpIniGet" returnType="string" params={[{"type":"string","name":"input","default":null},{"type":"string","name":"defaultValue","default":"\"\""}]}>
Gets the value of a configuration option
</ApiItem>
<ApiItem href="#traitsphpinitrait-phpinigetbool" visibility="protected" name="phpIniGetBool" returnType="bool" params={[{"type":"string","name":"input","default":null},{"type":"bool","name":"defaultValue","default":"false"}]}>
Query a php.ini value and return it back as boolean
</ApiItem>
<ApiItem href="#traitsphpinitrait-phpinigetint" visibility="protected" name="phpIniGetInt" returnType="int" params={[{"type":"string","name":"input","default":null},{"type":"int","name":"defaultValue","default":"0"}]}>
Query a php.ini value and return it back as integer
</ApiItem>
<ApiItem href="#traitsphpinitrait-phpparseinifile" visibility="protected" name="phpParseIniFile" returnType="array|false" params={[{"type":"string","name":"filename","default":null},{"type":"bool","name":"processSections","default":"false"},{"type":"int","name":"scannerMode","default":"0"}]}>
Parse a configuration file
</ApiItem>

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

[`Phalcon\Filter\Sanitize\Lower`](/5.20/api/phalcon_filter/#filtersanitizelower) · [`Phalcon\Filter\Sanitize\Upper`](/5.20/api/phalcon_filter/#filtersanitizeupper) · [`Phalcon\Filter\Sanitize\UpperWords`](/5.20/api/phalcon_filter/#filtersanitizeupperwords)

### Method Summary

<ApiItem href="#traitsphpmbcasetrait-phpmbconvertcase" visibility="protected" name="phpMbConvertCase" returnType="string" params={[{"type":"string","name":"input","default":null},{"type":"int","name":"mode","default":null}]}>
Converts the case of a string using `mb_convert_case()`
</ApiItem>

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

[`Phalcon\Storage\Serializer\Msgpack`](/5.20/api/phalcon_storage/#storageserializermsgpack)

### Method Summary

<ApiItem href="#traitsphpmsgpacktrait-phpmsgpackpack" visibility="protected" name="phpMsgpackPack" returnType="string" params={[{"type":"mixed","name":"value","default":null}]}>
@link https://php.net/manual/en/function.msgpack-pack.php
</ApiItem>
<ApiItem href="#traitsphpmsgpacktrait-phpmsgpackunpack" visibility="protected" name="phpMsgpackUnpack" returnType="" params={[{"type":"mixed","name":"value","default":null}]}>
@link https://php.net/manual/en/function.msgpack-unpack.php
</ApiItem>

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

[`Phalcon\Encryption\Crypt`](/5.20/api/phalcon_encryption/#encryptioncrypt)

### Method Summary

<ApiItem href="#traitsphpopenssltrait-phpopensslcipherivlength" visibility="protected" name="phpOpensslCipherIvLength" returnType="int|bool" params={[{"type":"string","name":"cipher","default":null}]}>
@link https://php.net/manual/en/function.openssl-cipher-iv-length.php
</ApiItem>
<ApiItem href="#traitsphpopenssltrait-phpopensslrandompseudobytes" visibility="protected" name="phpOpensslRandomPseudoBytes" returnType="" params={[{"type":"int","name":"length","default":null}]}>
@link https://php.net/manual/en/function.openssl-random-pseudo-bytes.php
</ApiItem>

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

[`Phalcon\Storage\Serializer\Php`](/5.20/api/phalcon_storage/#storageserializerphp)

### Method Summary

<ApiItem href="#traitsphpserializetrait-phpserialize" visibility="protected" name="phpSerialize" returnType="string" params={[{"type":"mixed","name":"value","default":null}]}>
@link https://php.net/manual/en/function.serialize.php
</ApiItem>
<ApiItem href="#traitsphpserializetrait-phpunserialize" visibility="protected" name="phpUnserialize" returnType="mixed" params={[{"type":"string","name":"data","default":null},{"type":"array","name":"options","default":"[]"}]}>
@link https://php.net/manual/en/function.unserialize.php
</ApiItem>

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

[`Phalcon\Html\Escaper\UrlEscaper`](/5.20/api/phalcon_html/#htmlescaperurlescaper) · [`Phalcon\Http\Response`](/5.20/api/phalcon_http/#httpresponse)

### Method Summary

<ApiItem href="#traitsphpurltrait-phpparseurl" visibility="protected" name="phpParseUrl" returnType="" params={[{"type":"string","name":"url","default":null},{"type":"int","name":"component","default":"-1"}]}>
@link https://php.net/manual/en/function.parse-url.php
</ApiItem>
<ApiItem href="#traitsphpurltrait-phprawurldecode" visibility="protected" name="phpRawUrlDecode" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
@link https://php.net/manual/en/function.rawurldecode.php
</ApiItem>
<ApiItem href="#traitsphpurltrait-phprawurlencode" visibility="protected" name="phpRawUrlEncode" returnType="string" params={[{"type":"string","name":"input","default":null}]}>
@link https://php.net/manual/en/function.rawurlencode.php
</ApiItem>

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

[`Phalcon\Config\Adapter\Yaml`](/5.20/api/phalcon_config/#configadapteryaml)

### Method Summary

<ApiItem href="#traitsphpyamltrait-phpyamlparsefile" visibility="protected" name="phpYamlParseFile" returnType="" params={[{"type":"string","name":"filename","default":null},{"type":"int","name":"pos","default":"0"},{"type":"array","name":"callbacks","default":"[]"}]}>
Parse a YAML stream from a file
</ApiItem>

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

[`Phalcon\Support\Helper\Arr\AbstractArr`](/5.20/api/phalcon_support/#supporthelperarrabstractarr)

### Method Summary

<ApiItem href="#traitssupporthelperarrfiltertrait-tofilter" visibility="protected" name="toFilter" returnType="array" params={[{"type":"array","name":"collection","default":null},{"type":"mixed","name":"method","default":"null"}]}>
Helper method to filter the collection
</ApiItem>

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

[`Phalcon\ADR\Middleware\CorsMiddleware`](/5.20/api/phalcon_adr/#adrmiddlewarecorsmiddleware) · [`Phalcon\Annotations\AnnotationsFactory`](/5.20/api/phalcon_annotations/#annotationsannotationsfactory) · [`Phalcon\Db\Adapter\PdoFactory`](/5.20/api/phalcon_db/#dbadapterpdofactory) · [`Phalcon\Filter\Validation\Validator\File`](/5.20/api/phalcon_filter/#filtervalidationvalidatorfile) · [`Phalcon\Http\Cookie`](/5.20/api/phalcon_http/#httpcookie) · [`Phalcon\Http\Request\File`](/5.20/api/phalcon_http/#httprequestfile) · [`Phalcon\Image\ImageFactory`](/5.20/api/phalcon_image/#imageimagefactory) · [`Phalcon\Logger\LoggerFactory`](/5.20/api/phalcon_logger/#loggerloggerfactory) · [`Phalcon\Mvc\Model\MetaData`](/5.20/api/phalcon_mvc/#mvcmodelmetadata) · [`Phalcon\Session\Adapter\AbstractAdapter`](/5.20/api/phalcon_session/#sessionadapterabstractadapter) · [`Phalcon\Session\Adapter\Stream`](/5.20/api/phalcon_session/#sessionadapterstream) · [`Phalcon\Session\Manager`](/5.20/api/phalcon_session/#sessionmanager) · [`Phalcon\Storage\Adapter\AbstractAdapter`](/5.20/api/phalcon_storage/#storageadapterabstractadapter) · [`Phalcon\Support\Debug`](/5.20/api/phalcon_support/#supportdebug) · [`Phalcon\Support\Debug\ReportBuilder`](/5.20/api/phalcon_support/#supportdebugreportbuilder) · [`Phalcon\Support\Helper\Arr\Get`](/5.20/api/phalcon_support/#supporthelperarrget)

### Method Summary

<ApiItem href="#traitssupporthelperarrgettrait-getarrval" visibility="protected" name="getArrVal" returnType="mixed" params={[{"type":"array","name":"collection","default":null},{"type":"mixed","name":"index","default":null},{"type":"mixed","name":"defaultValue","default":"null"},{"type":"string|null","name":"cast","default":"null"}]}>
</ApiItem>

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

[`Phalcon\Support\Helper\Json\Decode`](/5.20/api/phalcon_support/#supporthelperjsondecode)

### Method Summary

<ApiItem href="#traitssupporthelperjsondecodetrait-todecode" visibility="protected" name="toDecode" returnType="" params={[{"type":"string","name":"data","default":null},{"type":"bool","name":"associative","default":"false"},{"type":"int","name":"depth","default":"512"},{"type":"int","name":"options","default":"79"}]}>
Decodes a string using `json_decode`
</ApiItem>

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

[`Phalcon\Logger\Formatter\Json`](/5.20/api/phalcon_logger/#loggerformatterjson) · [`Phalcon\Support\Helper\Json\Encode`](/5.20/api/phalcon_support/#supporthelperjsonencode)

### Method Summary

<ApiItem href="#traitssupporthelperjsonencodetrait-toencode" visibility="protected" name="toEncode" returnType="string" params={[{"type":"mixed","name":"data","default":null},{"type":"int","name":"options","default":"79"},{"type":"int","name":"depth","default":"512"}]}>
Encodes data using `json_encode`
</ApiItem>

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

[`Phalcon\Support\Helper\Str\Camelize`](/5.20/api/phalcon_support/#supporthelperstrcamelize)

### Method Summary

<ApiItem href="#traitssupporthelperstrcamelizetrait-tocamelize" visibility="public" name="toCamelize" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"delimiters","default":"\"-_\""},{"type":"bool","name":"lowerFirst","default":"false"}]}>
</ApiItem>

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

[`Phalcon\Storage\Adapter\Stream`](/5.20/api/phalcon_storage/#storageadapterstream) · [`Phalcon\Support\Helper\Str\DirFromFile`](/5.20/api/phalcon_support/#supporthelperstrdirfromfile)

### Method Summary

<ApiItem href="#traitssupporthelperstrdirfromfiletrait-todirfromfile" visibility="protected" name="toDirFromFile" returnType="string" params={[{"type":"string","name":"file","default":null},{"type":"bool","name":"filesystemSafe","default":"false"}]}>
</ApiItem>

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

[`Phalcon\Mvc\View`](/5.20/api/phalcon_mvc/#mvcview) · [`Phalcon\Mvc\View\Simple`](/5.20/api/phalcon_mvc/#mvcviewsimple) · [`Phalcon\Session\Adapter\Stream`](/5.20/api/phalcon_session/#sessionadapterstream) · [`Phalcon\Storage\Adapter\Stream`](/5.20/api/phalcon_storage/#storageadapterstream) · [`Phalcon\Support\Helper\Str\DirSeparator`](/5.20/api/phalcon_support/#supporthelperstrdirseparator)

### Method Summary

<ApiItem href="#traitssupporthelperstrdirseparatortrait-todirseparator" visibility="protected" name="toDirSeparator" returnType="string" params={[{"type":"string","name":"directory","default":null}]}>
</ApiItem>

### Methods

<h4 id="traitssupporthelperstrdirseparatortrait-todirseparator"><code>toDirSeparator()</code></h4>

```php
protected static function toDirSeparator( string $directory ): string;
```

## Traits\Support\Helper\Str\EndsWithTrait

Trait

Check if a string ends with a given string

- **`Phalcon\Traits\Support\Helper\Str\EndsWithTrait`**

[`Phalcon\Support\Helper\Str\AbstractStr`](/5.20/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

<ApiItem href="#traitssupporthelperstrendswithtrait-toendswith" visibility="protected" name="toEndsWith" returnType="bool" params={[{"type":"string","name":"haystack","default":null},{"type":"string","name":"needle","default":null},{"type":"bool","name":"ignoreCase","default":"true"}]}>
</ApiItem>

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

[`Phalcon\Flash\AbstractFlash`](/5.20/api/phalcon_flash/#flashabstractflash) · [`Phalcon\Html\Helper\Breadcrumbs`](/5.20/api/phalcon_html/#htmlhelperbreadcrumbs) · [`Phalcon\Logger\Formatter\AbstractFormatter`](/5.20/api/phalcon_logger/#loggerformatterabstractformatter) · [`Phalcon\Support\Debug\Dump`](/5.20/api/phalcon_support/#supportdebugdump) · [`Phalcon\Support\Debug\Renderer\HtmlRenderer`](/5.20/api/phalcon_support/#supportdebugrendererhtmlrenderer) · [`Phalcon\Support\Helper\Str\AbstractStr`](/5.20/api/phalcon_support/#supporthelperstrabstractstr) · [`Phalcon\Support\Helper\Str\Interpolate`](/5.20/api/phalcon_support/#supporthelperstrinterpolate) · [`Phalcon\Translate\Interpolator\AssociativeArray`](/5.20/api/phalcon_translate/#translateinterpolatorassociativearray)

### Method Summary

<ApiItem href="#traitssupporthelperstrinterpolatetrait-tointerpolate" visibility="protected" name="toInterpolate" returnType="string" params={[{"type":"string","name":"input","default":null},{"type":"array","name":"context","default":"[]"},{"type":"string","name":"left","default":"\"%\""},{"type":"string","name":"right","default":"\"%\""}]}>
</ApiItem>

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

[`Phalcon\Support\Helper\Str\AbstractStr`](/5.20/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

<ApiItem href="#traitssupporthelperstrlowertrait-tolower" visibility="protected" name="toLower" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"encoding","default":"\"UTF-8\""}]}>
</ApiItem>

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

[`Phalcon\Support\Helper\Str\AbstractStr`](/5.20/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

<ApiItem href="#traitssupporthelperstrstartswithtrait-tostartswith" visibility="protected" name="toStartsWith" returnType="bool" params={[{"type":"string","name":"haystack","default":null},{"type":"string","name":"needle","default":null},{"type":"bool","name":"ignoreCase","default":"true"}]}>
</ApiItem>

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

[`Phalcon\Support\Helper\Str\Uncamelize`](/5.20/api/phalcon_support/#supporthelperstruncamelize)

### Method Summary

<ApiItem href="#traitssupporthelperstruncamelizetrait-touncamelize" visibility="protected" name="toUncamelize" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"delimiter","default":"\"_\""}]}>
</ApiItem>

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

[`Phalcon\Support\Helper\Str\AbstractStr`](/5.20/api/phalcon_support/#supporthelperstrabstractstr)

### Method Summary

<ApiItem href="#traitssupporthelperstruppertrait-toupper" visibility="protected" name="toUpper" returnType="string" params={[{"type":"string","name":"text","default":null},{"type":"string","name":"encoding","default":"\"UTF-8\""}]}>
</ApiItem>

### Methods

<h4 id="traitssupporthelperstruppertrait-toupper"><code>toUpper()</code></h4>

```php
protected static function toUpper(
string $text,
string $encoding = "UTF-8"
): string;
```

Source: https://docs.phalcon.io/5.20/api/phalcon_traits/index.mdx
