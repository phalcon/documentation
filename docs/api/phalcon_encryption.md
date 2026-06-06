---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Encryption\Crypt

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt.zep){ .src-btn }

Provides encryption capabilities to Phalcon applications.

```php
use Phalcon\Crypt;

$crypt = new Crypt();

$crypt->setCipher("aes-256-ctr");

$key  =
"T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3";
$input = "The message to be encrypted";

$encrypted = $crypt->encrypt($input, $key);

echo $crypt->decrypt($encrypted, $key);
```

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Crypt`** — implements [`Phalcon\Encryption\Crypt\CryptInterface`](#encryptioncryptcryptinterface)

</div>

__Uses__ `Phalcon\Encryption\Crypt\CryptInterface` · `Phalcon\Encryption\Crypt\Exception\DecryptionFailed` · `Phalcon\Encryption\Crypt\Exception\EmptyDecryptionKey` · `Phalcon\Encryption\Crypt\Exception\EmptyEncryptionKey` · `Phalcon\Encryption\Crypt\Exception\EncryptionFailed` · `Phalcon\Encryption\Crypt\Exception\Exception` · `Phalcon\Encryption\Crypt\Exception\InvalidPaddingSize` · `Phalcon\Encryption\Crypt\Exception\IvLengthCalculationFailed` · `Phalcon\Encryption\Crypt\Exception\Mismatch` · `Phalcon\Encryption\Crypt\Exception\MissingAuthData` · `Phalcon\Encryption\Crypt\Exception\MissingOpensslExtension` · `Phalcon\Encryption\Crypt\Exception\RandomBytesGenerationFailed` · `Phalcon\Encryption\Crypt\Exception\UnsupportedAlgorithm` · `Phalcon\Encryption\Crypt\PadFactory`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncrypt-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $cipher = self::DEFAULT_CIPHER,
    bool $useSigning = true,
    PadFactory $padFactory = null
)</code>
<span class="desc">Crypt constructor.</span>
</a>
<a class="api-item" href="#encryptioncrypt-decrypt">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">decrypt(
    string $input,
    string $key = null
)</code>
<span class="desc">Decrypts an encrypted text.</span>
</a>
<a class="api-item" href="#encryptioncrypt-decryptbase64">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">decryptBase64(
    string $input,
    string $key = null,
    bool $safe = false
)</code>
<span class="desc">Decrypt a text that is coded as a base64 string.</span>
</a>
<a class="api-item" href="#encryptioncrypt-encrypt">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">encrypt(
    string $input,
    string $key = null
)</code>
<span class="desc">Encrypts a text.</span>
</a>
<a class="api-item" href="#encryptioncrypt-encryptbase64">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">encryptBase64(
    string $input,
    string $key = null,
    bool $safe = false
)</code>
<span class="desc">Encrypts a text returning the result as a base64 string.</span>
</a>
<a class="api-item" href="#encryptioncrypt-getauthdata">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAuthData()</code>
<span class="desc">Returns the auth data</span>
</a>
<a class="api-item" href="#encryptioncrypt-getauthtag">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAuthTag()</code>
<span class="desc">Returns the auth tag</span>
</a>
<a class="api-item" href="#encryptioncrypt-getauthtaglength">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getAuthTagLength()</code>
<span class="desc">Returns the auth tag length</span>
</a>
<a class="api-item" href="#encryptioncrypt-getavailableciphers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAvailableCiphers()</code>
<span class="desc">Returns a list of available ciphers.</span>
</a>
<a class="api-item" href="#encryptioncrypt-getavailablehashalgorithms">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAvailableHashAlgorithms()</code>
<span class="desc">Return a list of registered hashing algorithms suitable for hash_hmac.</span>
</a>
<a class="api-item" href="#encryptioncrypt-getcipher">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getCipher()</code>
<span class="desc">Returns the current cipher</span>
</a>
<a class="api-item" href="#encryptioncrypt-gethashalgorithm">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getHashAlgorithm()</code>
<span class="desc">Get the name of hashing algorithm.</span>
</a>
<a class="api-item" href="#encryptioncrypt-getkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getKey()</code>
<span class="desc">Returns the encryption key</span>
</a>
<a class="api-item" href="#encryptioncrypt-isvaliddecryptlength">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isValidDecryptLength( string $input )</code>
<span class="desc">Returns if the input length for decryption is valid or not</span>
</a>
<a class="api-item" href="#encryptioncrypt-setauthdata">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setAuthData( string $data )</code>
</a>
<a class="api-item" href="#encryptioncrypt-setauthtag">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setAuthTag( string $tag )</code>
</a>
<a class="api-item" href="#encryptioncrypt-setauthtaglength">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setAuthTagLength( int $length )</code>
</a>
<a class="api-item" href="#encryptioncrypt-setcipher">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setCipher( string $cipher )</code>
<span class="desc">Sets the cipher algorithm for data encryption and decryption.</span>
</a>
<a class="api-item" href="#encryptioncrypt-sethashalgorithm">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setHashAlgorithm( string $hashAlgorithm )</code>
<span class="desc">Set the name of hashing algorithm.</span>
</a>
<a class="api-item" href="#encryptioncrypt-setkey">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setKey( string $key )</code>
<span class="desc">Sets the encryption key.</span>
</a>
<a class="api-item" href="#encryptioncrypt-setpadding">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setPadding( int $scheme )</code>
<span class="desc">Changes the padding scheme used.</span>
</a>
<a class="api-item" href="#encryptioncrypt-usesigning">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">useSigning( bool $useSigning )</code>
<span class="desc">Sets if the calculating message digest must used.</span>
</a>
<a class="api-item" href="#encryptioncrypt-checkcipherhashisavailable">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig">checkCipherHashIsAvailable(
    string $cipher,
    string $type
)</code>
<span class="desc">Checks if a cipher or a hash algorithm is available</span>
</a>
<a class="api-item" href="#encryptioncrypt-cryptpadtext">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">cryptPadText(
    string $input,
    string $mode,
    int $blockSize,
    int $paddingType
)</code>
<span class="desc">Pads texts before encryption. See</span>
</a>
<a class="api-item" href="#encryptioncrypt-cryptunpadtext">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">cryptUnpadText(
    string $input,
    string $mode,
    int $blockSize,
    int $paddingType
)</code>
<span class="desc">Removes a padding from a text.</span>
</a>
<a class="api-item" href="#encryptioncrypt-decryptgcmccmauth">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">decryptGcmCcmAuth(
    string $mode,
    string $cipherText,
    string $decryptKey,
    string $iv
)</code>
</a>
<a class="api-item" href="#encryptioncrypt-decryptgetunpadded">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">decryptGetUnpadded(
    string $mode,
    int $blockSize,
    string $decrypted
)</code>
</a>
<a class="api-item" href="#encryptioncrypt-encryptgcmccm">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">encryptGcmCcm(
    string $mode,
    string $padded,
    string $encryptKey,
    string $iv
)</code>
</a>
<a class="api-item" href="#encryptioncrypt-encryptgetpadded">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">encryptGetPadded(
    string $mode,
    string $input,
    int $blockSize
)</code>
</a>
<a class="api-item" href="#encryptioncrypt-initializeavailableciphers">
<code class="vis vis-protected">protected</code>
<code class="ret">static</code>
<code class="sig">initializeAvailableCiphers()</code>
<span class="desc">Initialize available cipher algorithms.</span>
</a>
<a class="api-item" href="#encryptioncrypt-phpfunctionexists">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig">phpFunctionExists( string $name )</code>
<span class="desc">@todo to be removed when we get traits</span>
</a>
<a class="api-item" href="#encryptioncrypt-phpopensslcipherivlength">
<code class="vis vis-protected">protected</code>
<code class="ret">int|bool</code>
<code class="sig">phpOpensslCipherIvLength( string $cipher )</code>
</a>
<a class="api-item" href="#encryptioncrypt-phpopensslrandompseudobytes">
<code class="vis vis-protected">protected</code>
<code class="sig">phpOpensslRandomPseudoBytes( int $length )</code>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `DEFAULT_ALGORITHM = "sha256"` `string`

-   `DEFAULT_CIPHER = "aes-256-cfb"` `string`

-   `PADDING_ANSI_X_923 = 1` `int`

    Padding

-   `PADDING_DEFAULT = 0` `int`

-   `PADDING_ISO_10126 = 3` `int`

-   `PADDING_ISO_IEC_7816_4 = 4` `int`

-   `PADDING_PKCS7 = 2` `int`

-   `PADDING_SPACE = 6` `int`

-   `PADDING_ZERO = 5` `int`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$authData = ""` `string`

-   `protected`{ .vis-protected } `$authTag = ""` `string`

-   `protected`{ .vis-protected } `$authTagLength = 16` `int`

-   `protected`{ .vis-protected } `$availableCiphers = []` `array`

    Available cipher methods.

-   `protected`{ .vis-protected } `$cipher = self::DEFAULT_CIPHER` `string`

-   `protected`{ .vis-protected } `$hashAlgorithm = self::DEFAULT_ALGORITHM` `string`

    The name of hashing algorithm.

-   `protected`{ .vis-protected } `$hashLengthCache = []` `array`

    Memoized `strlen(hash($algo, "", true))` results, keyed by
    algorithm name. The hash output length is deterministic for a
    given algorithm, so this collapses the per-decrypt strlen+hash
    call to a single hash lookup after warm-up.

-   `protected`{ .vis-protected } `$ivLength = 16` `int`

    The cipher iv length.

-   `protected`{ .vis-protected } `$key = ""` `string`

-   `protected`{ .vis-protected } `$padFactory` `PadFactory`

-   `protected`{ .vis-protected } `$padding = 0` `int`

-   `protected`{ .vis-protected } `$useSigning = true` `bool`

    Whether calculating message digest enabled or not.

</div>

### Methods

<div class="api-group">Public · 22</div>

#### `__construct()` { #encryptioncrypt-__construct }

```php
public function __construct(
    string $cipher = self::DEFAULT_CIPHER,
    bool $useSigning = true,
    PadFactory $padFactory = null
);
```

Crypt constructor.

#### `decrypt()` { #encryptioncrypt-decrypt }

```php
public function decrypt(
    string $input,
    string $key = null
): string;
```

Decrypts an encrypted text.

```php
$encrypted = $crypt->decrypt(
    $encrypted,
    "T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3"
);
```

#### `decryptBase64()` { #encryptioncrypt-decryptbase64 }

```php
public function decryptBase64(
    string $input,
    string $key = null,
    bool $safe = false
): string;
```

Decrypt a text that is coded as a base64 string.

#### `encrypt()` { #encryptioncrypt-encrypt }

```php
public function encrypt(
    string $input,
    string $key = null
): string;
```

Encrypts a text.

```php
$encrypted = $crypt->encrypt(
    "Top secret",
    "T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3"
);
```

#### `encryptBase64()` { #encryptioncrypt-encryptbase64 }

```php
public function encryptBase64(
    string $input,
    string $key = null,
    bool $safe = false
): string;
```

Encrypts a text returning the result as a base64 string.

#### `getAuthData()` { #encryptioncrypt-getauthdata }

```php
public function getAuthData(): string;
```

Returns the auth data

#### `getAuthTag()` { #encryptioncrypt-getauthtag }

```php
public function getAuthTag(): string;
```

Returns the auth tag

#### `getAuthTagLength()` { #encryptioncrypt-getauthtaglength }

```php
public function getAuthTagLength(): int;
```

Returns the auth tag length

#### `getAvailableCiphers()` { #encryptioncrypt-getavailableciphers }

```php
public function getAvailableCiphers(): array;
```

Returns a list of available ciphers.

#### `getAvailableHashAlgorithms()` { #encryptioncrypt-getavailablehashalgorithms }

```php
public function getAvailableHashAlgorithms(): array;
```

Return a list of registered hashing algorithms suitable for hash_hmac.

#### `getCipher()` { #encryptioncrypt-getcipher }

```php
public function getCipher(): string;
```

Returns the current cipher

#### `getHashAlgorithm()` { #encryptioncrypt-gethashalgorithm }

```php
public function getHashAlgorithm(): string;
```

Get the name of hashing algorithm.

#### `getKey()` { #encryptioncrypt-getkey }

```php
public function getKey(): string;
```

Returns the encryption key

#### `isValidDecryptLength()` { #encryptioncrypt-isvaliddecryptlength }

```php
public function isValidDecryptLength( string $input ): bool;
```

Returns if the input length for decryption is valid or not
(number of bytes required by the cipher).

#### `setAuthData()` { #encryptioncrypt-setauthdata }

```php
public function setAuthData( string $data ): static;
```

#### `setAuthTag()` { #encryptioncrypt-setauthtag }

```php
public function setAuthTag( string $tag ): static;
```

#### `setAuthTagLength()` { #encryptioncrypt-setauthtaglength }

```php
public function setAuthTagLength( int $length ): static;
```

#### `setCipher()` { #encryptioncrypt-setcipher }

```php
public function setCipher( string $cipher ): static;
```

Sets the cipher algorithm for data encryption and decryption.

#### `setHashAlgorithm()` { #encryptioncrypt-sethashalgorithm }

```php
public function setHashAlgorithm( string $hashAlgorithm ): static;
```

Set the name of hashing algorithm.

#### `setKey()` { #encryptioncrypt-setkey }

```php
public function setKey( string $key ): static;
```

Sets the encryption key.

The `$key` should have been previously generated in a cryptographically
safe way.

Bad key:
"le password"

Better (but still unsafe) ->
"#1dj8$=dp?.ak//j1V$~%*0X"

Good key:
"T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3"

#### `setPadding()` { #encryptioncrypt-setpadding }

```php
public function setPadding( int $scheme ): static;
```

Changes the padding scheme used.

#### `useSigning()` { #encryptioncrypt-usesigning }

```php
public function useSigning( bool $useSigning ): static;
```

Sets if the calculating message digest must used.

<div class="api-group">Protected · 11</div>

#### `checkCipherHashIsAvailable()` { #encryptioncrypt-checkcipherhashisavailable }

```php
protected function checkCipherHashIsAvailable(
    string $cipher,
    string $type
): void;
```

Checks if a cipher or a hash algorithm is available

#### `cryptPadText()` { #encryptioncrypt-cryptpadtext }

```php
protected function cryptPadText(
    string $input,
    string $mode,
    int $blockSize,
    int $paddingType
): string;
```

Pads texts before encryption. See
[cryptopad](https://www.di-mgt.com.au/cryptopad.html)

#### `cryptUnpadText()` { #encryptioncrypt-cryptunpadtext }

```php
protected function cryptUnpadText(
    string $input,
    string $mode,
    int $blockSize,
    int $paddingType
): string;
```

Removes a padding from a text.

If the function detects that the text was not padded, it will return it
unmodified.

#### `decryptGcmCcmAuth()` { #encryptioncrypt-decryptgcmccmauth }

```php
protected function decryptGcmCcmAuth(
    string $mode,
    string $cipherText,
    string $decryptKey,
    string $iv
): string;
```

#### `decryptGetUnpadded()` { #encryptioncrypt-decryptgetunpadded }

```php
protected function decryptGetUnpadded(
    string $mode,
    int $blockSize,
    string $decrypted
): string;
```

#### `encryptGcmCcm()` { #encryptioncrypt-encryptgcmccm }

```php
protected function encryptGcmCcm(
    string $mode,
    string $padded,
    string $encryptKey,
    string $iv
): string;
```

#### `encryptGetPadded()` { #encryptioncrypt-encryptgetpadded }

```php
protected function encryptGetPadded(
    string $mode,
    string $input,
    int $blockSize
): string;
```

#### `initializeAvailableCiphers()` { #encryptioncrypt-initializeavailableciphers }

```php
protected function initializeAvailableCiphers(): static;
```

Initialize available cipher algorithms.

#### `phpFunctionExists()` { #encryptioncrypt-phpfunctionexists }

```php
protected function phpFunctionExists( string $name ): bool;
```

@todo to be removed when we get traits

#### `phpOpensslCipherIvLength()` { #encryptioncrypt-phpopensslcipherivlength }

```php
protected function phpOpensslCipherIvLength( string $cipher ): int|bool;
```

#### `phpOpensslRandomPseudoBytes()` { #encryptioncrypt-phpopensslrandompseudobytes }

```php
protected function phpOpensslRandomPseudoBytes( int $length );
```


## Encryption\Crypt\CryptInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/CryptInterface.zep){ .src-btn }

Interface for Phalcon\Crypt

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Crypt\CryptInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptcryptinterface-decrypt">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">decrypt(
    string $input,
    string $key = null
)</code>
<span class="desc">Decrypts a text</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-decryptbase64">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">decryptBase64(
    string $input,
    string $key = null
)</code>
<span class="desc">Decrypt a text that is coded as a base64 string</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-encrypt">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">encrypt(
    string $input,
    string $key = null
)</code>
<span class="desc">Encrypts a text</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-encryptbase64">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">encryptBase64(
    string $input,
    string $key = null
)</code>
<span class="desc">Encrypts a text returning the result as a base64 string</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-getauthdata">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAuthData()</code>
<span class="desc">Returns authentication data</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-getauthtag">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAuthTag()</code>
<span class="desc">Returns the authentication tag</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-getauthtaglength">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getAuthTagLength()</code>
<span class="desc">Returns the authentication tag length</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-getavailableciphers">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getAvailableCiphers()</code>
<span class="desc">Returns a list of available cyphers</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-getcipher">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getCipher()</code>
<span class="desc">Returns the current cipher</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-getkey">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getKey()</code>
<span class="desc">Returns the encryption key</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-setauthdata">
<code class="vis vis-public">public</code>
<code class="ret">CryptInterface</code>
<code class="sig">setAuthData( string $data )</code>
<span class="desc">Sets authentication data</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-setauthtag">
<code class="vis vis-public">public</code>
<code class="ret">CryptInterface</code>
<code class="sig">setAuthTag( string $tag )</code>
<span class="desc">Sets the authentication tag</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-setauthtaglength">
<code class="vis vis-public">public</code>
<code class="ret">CryptInterface</code>
<code class="sig">setAuthTagLength( int $length )</code>
<span class="desc">Sets the authentication tag length</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-setcipher">
<code class="vis vis-public">public</code>
<code class="ret">CryptInterface</code>
<code class="sig">setCipher( string $cipher )</code>
<span class="desc">Sets the cipher algorithm</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-setkey">
<code class="vis vis-public">public</code>
<code class="ret">CryptInterface</code>
<code class="sig">setKey( string $key )</code>
<span class="desc">Sets the encryption key</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-setpadding">
<code class="vis vis-public">public</code>
<code class="ret">CryptInterface</code>
<code class="sig">setPadding( int $scheme )</code>
<span class="desc">Changes the padding scheme used.</span>
</a>
<a class="api-item" href="#encryptioncryptcryptinterface-usesigning">
<code class="vis vis-public">public</code>
<code class="ret">CryptInterface</code>
<code class="sig">useSigning( bool $useSigning )</code>
<span class="desc">Sets if the calculating message digest must be used.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 17</div>

#### `decrypt()` { #encryptioncryptcryptinterface-decrypt }

```php
public function decrypt(
    string $input,
    string $key = null
): string;
```

Decrypts a text

#### `decryptBase64()` { #encryptioncryptcryptinterface-decryptbase64 }

```php
public function decryptBase64(
    string $input,
    string $key = null
): string;
```

Decrypt a text that is coded as a base64 string

#### `encrypt()` { #encryptioncryptcryptinterface-encrypt }

```php
public function encrypt(
    string $input,
    string $key = null
): string;
```

Encrypts a text

#### `encryptBase64()` { #encryptioncryptcryptinterface-encryptbase64 }

```php
public function encryptBase64(
    string $input,
    string $key = null
): string;
```

Encrypts a text returning the result as a base64 string

#### `getAuthData()` { #encryptioncryptcryptinterface-getauthdata }

```php
public function getAuthData(): string;
```

Returns authentication data

#### `getAuthTag()` { #encryptioncryptcryptinterface-getauthtag }

```php
public function getAuthTag(): string;
```

Returns the authentication tag

#### `getAuthTagLength()` { #encryptioncryptcryptinterface-getauthtaglength }

```php
public function getAuthTagLength(): int;
```

Returns the authentication tag length

#### `getAvailableCiphers()` { #encryptioncryptcryptinterface-getavailableciphers }

```php
public function getAvailableCiphers(): array;
```

Returns a list of available cyphers

#### `getCipher()` { #encryptioncryptcryptinterface-getcipher }

```php
public function getCipher(): string;
```

Returns the current cipher

#### `getKey()` { #encryptioncryptcryptinterface-getkey }

```php
public function getKey(): string;
```

Returns the encryption key

#### `setAuthData()` { #encryptioncryptcryptinterface-setauthdata }

```php
public function setAuthData( string $data ): CryptInterface;
```

Sets authentication data

#### `setAuthTag()` { #encryptioncryptcryptinterface-setauthtag }

```php
public function setAuthTag( string $tag ): CryptInterface;
```

Sets the authentication tag

#### `setAuthTagLength()` { #encryptioncryptcryptinterface-setauthtaglength }

```php
public function setAuthTagLength( int $length ): CryptInterface;
```

Sets the authentication tag length

#### `setCipher()` { #encryptioncryptcryptinterface-setcipher }

```php
public function setCipher( string $cipher ): CryptInterface;
```

Sets the cipher algorithm

#### `setKey()` { #encryptioncryptcryptinterface-setkey }

```php
public function setKey( string $key ): CryptInterface;
```

Sets the encryption key

#### `setPadding()` { #encryptioncryptcryptinterface-setpadding }

```php
public function setPadding( int $scheme ): CryptInterface;
```

Changes the padding scheme used.

#### `useSigning()` { #encryptioncryptcryptinterface-usesigning }

```php
public function useSigning( bool $useSigning ): CryptInterface;
```

Sets if the calculating message digest must be used.


## Encryption\Crypt\Exception\DecryptionFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/DecryptionFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\DecryptionFailed`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptexceptiondecryptionfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptioncryptexceptiondecryptionfailed-__construct }

```php
public function __construct();
```


## Encryption\Crypt\Exception\EmptyDecryptionKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/EmptyDecryptionKey.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\EmptyDecryptionKey`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptexceptionemptydecryptionkey-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptioncryptexceptionemptydecryptionkey-__construct }

```php
public function __construct();
```


## Encryption\Crypt\Exception\EmptyEncryptionKey

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/EmptyEncryptionKey.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\EmptyEncryptionKey`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptexceptionemptyencryptionkey-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptioncryptexceptionemptyencryptionkey-__construct }

```php
public function __construct();
```


## Encryption\Crypt\Exception\EncryptionFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/EncryptionFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\EncryptionFailed`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptexceptionencryptionfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptioncryptexceptionencryptionfailed-__construct }

```php
public function __construct();
```


## Encryption\Crypt\Exception\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/Exception.zep){ .src-btn }

Exceptions thrown in Phalcon\Crypt use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Encryption\Crypt\Exception\Exception`**
        - [`Phalcon\Encryption\Crypt\Exception\DecryptionFailed`](#encryptioncryptexceptiondecryptionfailed)
        - [`Phalcon\Encryption\Crypt\Exception\EmptyDecryptionKey`](#encryptioncryptexceptionemptydecryptionkey)
        - [`Phalcon\Encryption\Crypt\Exception\EmptyEncryptionKey`](#encryptioncryptexceptionemptyencryptionkey)
        - [`Phalcon\Encryption\Crypt\Exception\EncryptionFailed`](#encryptioncryptexceptionencryptionfailed)
        - [`Phalcon\Encryption\Crypt\Exception\InvalidPaddingSize`](#encryptioncryptexceptioninvalidpaddingsize)
        - [`Phalcon\Encryption\Crypt\Exception\IvLengthCalculationFailed`](#encryptioncryptexceptionivlengthcalculationfailed)
        - [`Phalcon\Encryption\Crypt\Exception\Mismatch`](#encryptioncryptexceptionmismatch)
        - [`Phalcon\Encryption\Crypt\Exception\MissingAuthData`](#encryptioncryptexceptionmissingauthdata)
        - [`Phalcon\Encryption\Crypt\Exception\MissingOpensslExtension`](#encryptioncryptexceptionmissingopensslextension)
        - [`Phalcon\Encryption\Crypt\Exception\RandomBytesGenerationFailed`](#encryptioncryptexceptionrandombytesgenerationfailed)
        - [`Phalcon\Encryption\Crypt\Exception\UnsupportedAlgorithm`](#encryptioncryptexceptionunsupportedalgorithm)

</div>


## Encryption\Crypt\Exception\InvalidPaddingSize

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/InvalidPaddingSize.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\InvalidPaddingSize`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptexceptioninvalidpaddingsize-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptioncryptexceptioninvalidpaddingsize-__construct }

```php
public function __construct();
```


## Encryption\Crypt\Exception\IvLengthCalculationFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/IvLengthCalculationFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\IvLengthCalculationFailed`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptexceptionivlengthcalculationfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptioncryptexceptionivlengthcalculationfailed-__construct }

```php
public function __construct();
```


## Encryption\Crypt\Exception\Mismatch

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/Mismatch.zep){ .src-btn }

Exceptions thrown in Phalcon\Crypt will use this class.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\Mismatch`**

</div>


## Encryption\Crypt\Exception\MissingAuthData

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/MissingAuthData.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\MissingAuthData`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptexceptionmissingauthdata-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptioncryptexceptionmissingauthdata-__construct }

```php
public function __construct();
```


## Encryption\Crypt\Exception\MissingOpensslExtension

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/MissingOpensslExtension.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\MissingOpensslExtension`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptexceptionmissingopensslextension-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptioncryptexceptionmissingopensslextension-__construct }

```php
public function __construct();
```


## Encryption\Crypt\Exception\RandomBytesGenerationFailed

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/RandomBytesGenerationFailed.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\RandomBytesGenerationFailed`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptexceptionrandombytesgenerationfailed-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptioncryptexceptionrandombytesgenerationfailed-__construct }

```php
public function __construct();
```


## Encryption\Crypt\Exception\UnsupportedAlgorithm

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/UnsupportedAlgorithm.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
        - **`Phalcon\Encryption\Crypt\Exception\UnsupportedAlgorithm`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptexceptionunsupportedalgorithm-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $type,
    string $cipher
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptioncryptexceptionunsupportedalgorithm-__construct }

```php
public function __construct(
    string $type,
    string $cipher
);
```


## Encryption\Crypt\PadFactory

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/PadFactory.zep){ .src-btn }

Factory for creating pad classes

<div class="api-tree" markdown>

- [`Phalcon\Factory\AbstractConfigFactory`](phalcon_factory.md#factoryabstractconfigfactory)
    - [`Phalcon\Factory\AbstractFactory`](phalcon_factory.md#factoryabstractfactory)
        - **`Phalcon\Encryption\Crypt\PadFactory`**

</div>

__Uses__ `Phalcon\Encryption\Crypt` · `Phalcon\Encryption\Crypt\Padding\PadInterface` · `Phalcon\Factory\AbstractFactory` · `Phalcon\Support\Helper\Arr\Get`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptpadfactory-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( array $services = [] )</code>
<span class="desc">AdapterFactory constructor.</span>
</a>
<a class="api-item" href="#encryptioncryptpadfactory-newinstance">
<code class="vis vis-public">public</code>
<code class="ret">PadInterface</code>
<code class="sig">newInstance( string $name )</code>
<span class="desc">Create a new instance of the adapter</span>
</a>
<a class="api-item" href="#encryptioncryptpadfactory-padnumbertoservice">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">padNumberToService( int $number )</code>
<span class="desc">Gets a Crypt pad constant and returns the unique service name for the</span>
</a>
<a class="api-item" href="#encryptioncryptpadfactory-getservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig">getServices()</code>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$exception = "Phalcon\\Encryption\\Crypt\\Exception\\Exception"` `string`

</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #encryptioncryptpadfactory-__construct }

```php
public function __construct( array $services = [] );
```

AdapterFactory constructor.

#### `newInstance()` { #encryptioncryptpadfactory-newinstance }

```php
public function newInstance( string $name ): PadInterface;
```

Create a new instance of the adapter

#### `padNumberToService()` { #encryptioncryptpadfactory-padnumbertoservice }

```php
public function padNumberToService( int $number ): string;
```

Gets a Crypt pad constant and returns the unique service name for the
padding class

<div class="api-group">Protected · 1</div>

#### `getServices()` { #encryptioncryptpadfactory-getservices }

```php
protected function getServices(): array;
```


## Encryption\Crypt\Padding\Ansi

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Ansi.zep){ .src-btn }

Class Ansi

@package Phalcon\Encryption\Crypt\Padding

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Crypt\Padding\Ansi`** — implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptpaddingansi-pad">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">pad( int $paddingSize )</code>
</a>
<a class="api-item" href="#encryptioncryptpaddingansi-unpad">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">unpad(
    string $input,
    int $blockSize
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `pad()` { #encryptioncryptpaddingansi-pad }

```php
public function pad( int $paddingSize ): string;
```

#### `unpad()` { #encryptioncryptpaddingansi-unpad }

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\Iso10126

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Iso10126.zep){ .src-btn }

Class Iso10126

@package Phalcon\Encryption\Crypt\Padding

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Crypt\Padding\Iso10126`** — implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptpaddingiso10126-pad">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">pad( int $paddingSize )</code>
</a>
<a class="api-item" href="#encryptioncryptpaddingiso10126-unpad">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">unpad(
    string $input,
    int $blockSize
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `pad()` { #encryptioncryptpaddingiso10126-pad }

```php
public function pad( int $paddingSize ): string;
```

#### `unpad()` { #encryptioncryptpaddingiso10126-unpad }

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\IsoIek

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/IsoIek.zep){ .src-btn }

Class IsoIek

@package Phalcon\Encryption\Crypt\Padding

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Crypt\Padding\IsoIek`** — implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptpaddingisoiek-pad">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">pad( int $paddingSize )</code>
</a>
<a class="api-item" href="#encryptioncryptpaddingisoiek-unpad">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">unpad(
    string $input,
    int $blockSize
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `pad()` { #encryptioncryptpaddingisoiek-pad }

```php
public function pad( int $paddingSize ): string;
```

#### `unpad()` { #encryptioncryptpaddingisoiek-unpad }

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\Noop

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Noop.zep){ .src-btn }

Class Noop

@package Phalcon\Encryption\Crypt\Padding

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Crypt\Padding\Noop`** — implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptpaddingnoop-pad">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">pad( int $paddingSize )</code>
</a>
<a class="api-item" href="#encryptioncryptpaddingnoop-unpad">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">unpad(
    string $input,
    int $blockSize
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `pad()` { #encryptioncryptpaddingnoop-pad }

```php
public function pad( int $paddingSize ): string;
```

#### `unpad()` { #encryptioncryptpaddingnoop-unpad }

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\PadInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/PadInterface.zep){ .src-btn }

Interface for Phalcon\Encryption\Crypt\Padding

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Crypt\Padding\PadInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptpaddingpadinterface-pad">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">pad( int $paddingSize )</code>
</a>
<a class="api-item" href="#encryptioncryptpaddingpadinterface-unpad">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">unpad(
    string $input,
    int $blockSize
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `pad()` { #encryptioncryptpaddingpadinterface-pad }

```php
public function pad( int $paddingSize ): string;
```

#### `unpad()` { #encryptioncryptpaddingpadinterface-unpad }

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\Pkcs7

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Pkcs7.zep){ .src-btn }

Class Pkcs7

@package Phalcon\Encryption\Crypt\Padding

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Crypt\Padding\Pkcs7`** — implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptpaddingpkcs7-pad">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">pad( int $paddingSize )</code>
</a>
<a class="api-item" href="#encryptioncryptpaddingpkcs7-unpad">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">unpad(
    string $input,
    int $blockSize
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `pad()` { #encryptioncryptpaddingpkcs7-pad }

```php
public function pad( int $paddingSize ): string;
```

#### `unpad()` { #encryptioncryptpaddingpkcs7-unpad }

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\Space

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Space.zep){ .src-btn }

Class Space

@package Phalcon\Encryption\Crypt\Padding

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Crypt\Padding\Space`** — implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptpaddingspace-pad">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">pad( int $paddingSize )</code>
</a>
<a class="api-item" href="#encryptioncryptpaddingspace-unpad">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">unpad(
    string $input,
    int $blockSize
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `pad()` { #encryptioncryptpaddingspace-pad }

```php
public function pad( int $paddingSize ): string;
```

#### `unpad()` { #encryptioncryptpaddingspace-unpad }

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\Zero

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Zero.zep){ .src-btn }

Class Zero

@package Phalcon\Encryption\Crypt\Padding

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Crypt\Padding\Zero`** — implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptioncryptpaddingzero-pad">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">pad( int $paddingSize )</code>
</a>
<a class="api-item" href="#encryptioncryptpaddingzero-unpad">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">unpad(
    string $input,
    int $blockSize
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `pad()` { #encryptioncryptpaddingzero-pad }

```php
public function pad( int $paddingSize ): string;
```

#### `unpad()` { #encryptioncryptpaddingzero-unpad }

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Security

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security.zep){ .src-btn }

This component provides a set of functions to improve the security in Phalcon
applications

```php
$login    = $this->request->getPost("login");
$password = $this->request->getPost("password");

$user = Users::findFirstByLogin($login);

if ($user) {
    if ($this->security->checkHash($password, $user->password)) {
        // The password is valid
    }
}
```

<div class="api-tree" markdown>

- `stdClass`
    - [`Phalcon\Di\AbstractInjectionAware`](phalcon_di.md#diabstractinjectionaware)
        - **`Phalcon\Encryption\Security`** — implements [`Phalcon\Contracts\Encryption\Security\Security`](phalcon_contracts.md#contractsencryptionsecuritysecurity)

</div>

__Uses__ `Phalcon\Contracts\Encryption\Security\Security` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Encryption\Security\Exception` · `Phalcon\Encryption\Security\Exceptions\UnknownHashAlgorithm` · `Phalcon\Encryption\Security\Random` · `Phalcon\Http\RequestInterface` · `Phalcon\Session\ManagerInterface`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurity-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    SessionInterface $session = null,
    RequestInterface $request = null
)</code>
<span class="desc">Security constructor.</span>
</a>
<a class="api-item" href="#encryptionsecurity-checkhash">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">checkHash(
    string $password,
    string $passwordHash,
    int $maxPassLength = 0
)</code>
<span class="desc">Checks a plain text password and its hash version to check if the</span>
</a>
<a class="api-item" href="#encryptionsecurity-checktoken">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">checkToken(
    string $tokenKey = null,
    mixed $tokenValue = null,
    bool $destroyIfValid = true
)</code>
<span class="desc">Check if the CSRF token sent in the request is the same that the current</span>
</a>
<a class="api-item" href="#encryptionsecurity-computehmac">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">computeHmac(
    string $data,
    string $key,
    string $algorithm,
    bool $raw = false
)</code>
<span class="desc">Computes a HMAC</span>
</a>
<a class="api-item" href="#encryptionsecurity-destroytoken">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">destroyToken()</code>
<span class="desc">Removes the value of the CSRF token and key from session</span>
</a>
<a class="api-item" href="#encryptionsecurity-getdefaulthash">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getDefaultHash()</code>
<span class="desc">Returns the default hash</span>
</a>
<a class="api-item" href="#encryptionsecurity-gethashinformation">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getHashInformation( string $hash )</code>
<span class="desc">Returns information regarding a hash</span>
</a>
<a class="api-item" href="#encryptionsecurity-getrandom">
<code class="vis vis-public">public</code>
<code class="ret">Random</code>
<code class="sig">getRandom()</code>
<span class="desc">Returns a secure random number generator instance</span>
</a>
<a class="api-item" href="#encryptionsecurity-getrandombytes">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getRandomBytes()</code>
<span class="desc">Returns a number of bytes to be generated by the openssl pseudo random</span>
</a>
<a class="api-item" href="#encryptionsecurity-getrequesttoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getRequestToken()</code>
<span class="desc">Returns the value of the CSRF token for the current request.</span>
</a>
<a class="api-item" href="#encryptionsecurity-getsaltbytes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getSaltBytes( int $numberBytes = 0 )</code>
<span class="desc">Generate a &gt;22-length pseudo random string to be used as salt for</span>
</a>
<a class="api-item" href="#encryptionsecurity-getsessiontoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getSessionToken()</code>
<span class="desc">Returns the value of the CSRF token in session</span>
</a>
<a class="api-item" href="#encryptionsecurity-gettoken">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getToken()</code>
<span class="desc">Generates a pseudo random token value to be used as input&#039;s value in a</span>
</a>
<a class="api-item" href="#encryptionsecurity-gettokenkey">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getTokenKey()</code>
<span class="desc">Generates a pseudo random token key to be used as input&#039;s name in a CSRF</span>
</a>
<a class="api-item" href="#encryptionsecurity-getworkfactor">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">getWorkFactor()</code>
</a>
<a class="api-item" href="#encryptionsecurity-hash">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">hash(
    string $password,
    array $options = []
)</code>
<span class="desc">Creates a password hash using bcrypt with a pseudo random salt</span>
</a>
<a class="api-item" href="#encryptionsecurity-islegacyhash">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">isLegacyHash( string $passwordHash )</code>
<span class="desc">Checks if a password hash is a valid bcrypt&#039;s hash</span>
</a>
<a class="api-item" href="#encryptionsecurity-refreshtoken">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">refreshToken()</code>
<span class="desc">Forces the regeneration of the CSRF token and key, writing the new</span>
</a>
<a class="api-item" href="#encryptionsecurity-setautorefresh">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setAutoRefresh( bool $autoRefresh )</code>
<span class="desc">Toggles automatic regeneration of the CSRF token on every call to</span>
</a>
<a class="api-item" href="#encryptionsecurity-setdefaulthash">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setDefaultHash( int $defaultHash )</code>
<span class="desc">Sets the default hash</span>
</a>
<a class="api-item" href="#encryptionsecurity-setrandombytes">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setRandomBytes( int $randomBytes )</code>
<span class="desc">Sets a number of bytes to be generated by the openssl pseudo random</span>
</a>
<a class="api-item" href="#encryptionsecurity-setworkfactor">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setWorkFactor( int $workFactor )</code>
<span class="desc">Sets the work factor</span>
</a>
<a class="api-item" href="#encryptionsecurity-getlocalservice">
<code class="vis vis-protected">protected</code>
<code class="sig">getLocalService(
    string $name,
    string $property
)</code>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `CRYPT_ARGON2I = 10` `int`

-   `CRYPT_ARGON2ID = 11` `int`

-   `CRYPT_BCRYPT = 0` `int`

-   `CRYPT_BLOWFISH = 4` `int`

-   `CRYPT_BLOWFISH_A = 5` `int`

-   `CRYPT_BLOWFISH_X = 6` `int`

-   `CRYPT_BLOWFISH_Y = 7` `int`

-   `CRYPT_DEFAULT = 0` `int`

-   `CRYPT_EXT_DES = 2` `int`

-   `CRYPT_MD5 = 3` `int`

-   `CRYPT_SHA256 = 8` `int`

-   `CRYPT_SHA512 = 9` `int`

-   `CRYPT_STD_DES = 1` `int`

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$autoRefresh = true` `bool`

-   `protected`{ .vis-protected } `$defaultHash = self::CRYPT_DEFAULT` `int`

-   `protected`{ .vis-protected } `$numberBytes = 16` `int`

-   `protected`{ .vis-protected } `$random` `Random`

-   `protected`{ .vis-protected } `$requestToken = null` `string|null`

-   `protected`{ .vis-protected } `$token = null` `string|null`

-   `protected`{ .vis-protected } `$tokenKey = null` `string|null`

-   `protected`{ .vis-protected } `$tokenKeySessionId = "$PHALCON/CSRF/KEY$"` `string`

-   `protected`{ .vis-protected } `$tokenValueSessionId = "$PHALCON/CSRF$"` `string`

-   `protected`{ .vis-protected } `$workFactor = 10` `int`

</div>

### Methods

<div class="api-group">Public · 22</div>

#### `__construct()` { #encryptionsecurity-__construct }

```php
public function __construct(
    SessionInterface $session = null,
    RequestInterface $request = null
);
```

Security constructor.

#### `checkHash()` { #encryptionsecurity-checkhash }

```php
public function checkHash(
    string $password,
    string $passwordHash,
    int $maxPassLength = 0
): bool;
```

Checks a plain text password and its hash version to check if the
password matches

#### `checkToken()` { #encryptionsecurity-checktoken }

```php
public function checkToken(
    string $tokenKey = null,
    mixed $tokenValue = null,
    bool $destroyIfValid = true
): bool;
```

Check if the CSRF token sent in the request is the same that the current
in session

#### `computeHmac()` { #encryptionsecurity-computehmac }

```php
public function computeHmac(
    string $data,
    string $key,
    string $algorithm,
    bool $raw = false
): string;
```

Computes a HMAC

#### `destroyToken()` { #encryptionsecurity-destroytoken }

```php
public function destroyToken(): static;
```

Removes the value of the CSRF token and key from session

#### `getDefaultHash()` { #encryptionsecurity-getdefaulthash }

```php
public function getDefaultHash(): int;
```

Returns the default hash

#### `getHashInformation()` { #encryptionsecurity-gethashinformation }

```php
public function getHashInformation( string $hash ): array;
```

Returns information regarding a hash

#### `getRandom()` { #encryptionsecurity-getrandom }

```php
public function getRandom(): Random;
```

Returns a secure random number generator instance

#### `getRandomBytes()` { #encryptionsecurity-getrandombytes }

```php
public function getRandomBytes(): int;
```

Returns a number of bytes to be generated by the openssl pseudo random
generator

#### `getRequestToken()` { #encryptionsecurity-getrequesttoken }

```php
public function getRequestToken(): string|null;
```

Returns the value of the CSRF token for the current request.

#### `getSaltBytes()` { #encryptionsecurity-getsaltbytes }

```php
public function getSaltBytes( int $numberBytes = 0 ): string;
```

Generate a >22-length pseudo random string to be used as salt for
passwords

#### `getSessionToken()` { #encryptionsecurity-getsessiontoken }

```php
public function getSessionToken(): string|null;
```

Returns the value of the CSRF token in session

#### `getToken()` { #encryptionsecurity-gettoken }

```php
public function getToken(): string|null;
```

Generates a pseudo random token value to be used as input's value in a
CSRF check

#### `getTokenKey()` { #encryptionsecurity-gettokenkey }

```php
public function getTokenKey(): string|null;
```

Generates a pseudo random token key to be used as input's name in a CSRF
check

#### `getWorkFactor()` { #encryptionsecurity-getworkfactor }

```php
public function getWorkFactor(): int;
```

#### `hash()` { #encryptionsecurity-hash }

```php
public function hash(
    string $password,
    array $options = []
): string;
```

Creates a password hash using bcrypt with a pseudo random salt

#### `isLegacyHash()` { #encryptionsecurity-islegacyhash }

```php
public function isLegacyHash( string $passwordHash ): bool;
```

Checks if a password hash is a valid bcrypt's hash

#### `refreshToken()` { #encryptionsecurity-refreshtoken }

```php
public function refreshToken(): static;
```

Forces the regeneration of the CSRF token and key, writing the new
values to the session even when auto-refresh has been disabled. Useful
after a successful login or any other state change where rotating the
token is appropriate.

#### `setAutoRefresh()` { #encryptionsecurity-setautorefresh }

```php
public function setAutoRefresh( bool $autoRefresh ): static;
```

Toggles automatic regeneration of the CSRF token on every call to
`getToken()` / `getTokenKey()`. When set to `false`, existing session
values are reused (no session write), and a new token is only minted
when none is present or `refreshToken()` is called explicitly.

#### `setDefaultHash()` { #encryptionsecurity-setdefaulthash }

```php
public function setDefaultHash( int $defaultHash ): static;
```

Sets the default hash

#### `setRandomBytes()` { #encryptionsecurity-setrandombytes }

```php
public function setRandomBytes( int $randomBytes ): static;
```

Sets a number of bytes to be generated by the openssl pseudo random
generator

#### `setWorkFactor()` { #encryptionsecurity-setworkfactor }

```php
public function setWorkFactor( int $workFactor ): static;
```

Sets the work factor

<div class="api-group">Protected · 1</div>

#### `getLocalService()` { #encryptionsecurity-getlocalservice }

```php
protected function getLocalService(
    string $name,
    string $property
);
```


## Encryption\Security\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Exception.zep){ .src-btn }

Phalcon\Encryption\Security\Exception

Exceptions thrown in Phalcon\Security will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Encryption\Security\Exception`**
        - [`Phalcon\Encryption\Security\Exceptions\InvalidRandomInput`](#encryptionsecurityexceptionsinvalidrandominput)
        - [`Phalcon\Encryption\Security\Exceptions\UnknownHashAlgorithm`](#encryptionsecurityexceptionsunknownhashalgorithm)

</div>


## Encryption\Security\Exceptions\InvalidRandomInput

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Exceptions/InvalidRandomInput.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Security\Exception`](#encryptionsecurityexception)
        - **`Phalcon\Encryption\Security\Exceptions\InvalidRandomInput`**

</div>

__Uses__ `Phalcon\Encryption\Security\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityexceptionsinvalidrandominput-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityexceptionsinvalidrandominput-__construct }

```php
public function __construct();
```


## Encryption\Security\Exceptions\UnknownHashAlgorithm

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Exceptions/UnknownHashAlgorithm.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `\Exception`
    - [`Phalcon\Encryption\Security\Exception`](#encryptionsecurityexception)
        - **`Phalcon\Encryption\Security\Exceptions\UnknownHashAlgorithm`**

</div>

__Uses__ `Phalcon\Encryption\Security\Exception`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityexceptionsunknownhashalgorithm-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $algo )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityexceptionsunknownhashalgorithm-__construct }

```php
public function __construct( string $algo );
```


## Encryption\Security\JWT\Builder

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Builder.zep){ .src-btn }

JWT Builder

@link https://tools.ietf.org/html/rfc7519

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\JWT\Builder`**

</div>

__Uses__ `Phalcon\Encryption\Security\JWT\Exceptions\EmptyPassphrase` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudience` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidExpirationTime` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidNotBefore` · `Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException` · `Phalcon\Encryption\Security\JWT\Exceptions\WeakPassphrase` · `Phalcon\Encryption\Security\JWT\Signer\SignerInterface` · `Phalcon\Encryption\Security\JWT\Token\Enum` · `Phalcon\Encryption\Security\JWT\Token\Item` · `Phalcon\Encryption\Security\JWT\Token\Signature` · `Phalcon\Encryption\Security\JWT\Token\Token` · `Phalcon\Support\Collection` · `Phalcon\Support\Collection\CollectionInterface` · `Phalcon\Support\Helper\Json\Encode`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtbuilder-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( SignerInterface $signer )</code>
<span class="desc">Builder constructor.</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-addclaim">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">addClaim(
    string $name,
    mixed $value
)</code>
<span class="desc">Adds a custom claim</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-addheader">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">addHeader(
    string $name,
    mixed $value
)</code>
<span class="desc">Adds a custom claim</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getaudience">
<code class="vis vis-public">public</code>
<code class="sig">getAudience()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getclaims">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getClaims()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getcontenttype">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getContentType()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getexpirationtime">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig">getExpirationTime()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getHeaders()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getid">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getId()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getissuedat">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig">getIssuedAt()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getissuer">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getIssuer()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getnotbefore">
<code class="vis vis-public">public</code>
<code class="ret">int|null</code>
<code class="sig">getNotBefore()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getpassphrase">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPassphrase()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-getsubject">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig">getSubject()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-gettoken">
<code class="vis vis-public">public</code>
<code class="ret">Token</code>
<code class="sig">getToken()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-init">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">init()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-setaudience">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setAudience( mixed $audience )</code>
<span class="desc">The &quot;aud&quot; (audience) claim identifies the recipients that the JWT is</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-setcontenttype">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setContentType( string $contentType )</code>
<span class="desc">Sets the content type header &#039;cty&#039;</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-setexpirationtime">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setExpirationTime( int $timestamp )</code>
<span class="desc">The &quot;exp&quot; (expiration time) claim identifies the expiration time on</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-setid">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setId( string $jwtId )</code>
<span class="desc">The &quot;jti&quot; (JWT ID) claim provides a unique identifier for the JWT.</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-setissuedat">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setIssuedAt( int $timestamp )</code>
<span class="desc">The &quot;iat&quot; (issued at) claim identifies the time at which the JWT was</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-setissuer">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setIssuer( string $issuer )</code>
<span class="desc">The &quot;iss&quot; (issuer) claim identifies the principal that issued the</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-setnotbefore">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setNotBefore( int $timestamp )</code>
<span class="desc">The &quot;nbf&quot; (not before) claim identifies the time before which the JWT</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-setpassphrase">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setPassphrase( string $passphrase )</code>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-setsubject">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setSubject( string $subject )</code>
<span class="desc">The &quot;sub&quot; (subject) claim identifies the principal that is the</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtbuilder-setclaim">
<code class="vis vis-protected">protected</code>
<code class="ret">Builder</code>
<code class="sig">setClaim(
    string $name,
    mixed $value
)</code>
<span class="desc">Sets a registered claim</span>
</a>
</div>

### Methods

<div class="api-group">Public · 25</div>

#### `__construct()` { #encryptionsecurityjwtbuilder-__construct }

```php
public function __construct( SignerInterface $signer );
```

Builder constructor.

#### `addClaim()` { #encryptionsecurityjwtbuilder-addclaim }

```php
public function addClaim(
    string $name,
    mixed $value
): static;
```

Adds a custom claim

#### `addHeader()` { #encryptionsecurityjwtbuilder-addheader }

```php
public function addHeader(
    string $name,
    mixed $value
): static;
```

Adds a custom claim

#### `getAudience()` { #encryptionsecurityjwtbuilder-getaudience }

```php
public function getAudience();
```

#### `getClaims()` { #encryptionsecurityjwtbuilder-getclaims }

```php
public function getClaims(): array;
```

#### `getContentType()` { #encryptionsecurityjwtbuilder-getcontenttype }

```php
public function getContentType(): string|null;
```

#### `getExpirationTime()` { #encryptionsecurityjwtbuilder-getexpirationtime }

```php
public function getExpirationTime(): int|null;
```

#### `getHeaders()` { #encryptionsecurityjwtbuilder-getheaders }

```php
public function getHeaders(): array;
```

#### `getId()` { #encryptionsecurityjwtbuilder-getid }

```php
public function getId(): string|null;
```

#### `getIssuedAt()` { #encryptionsecurityjwtbuilder-getissuedat }

```php
public function getIssuedAt(): int|null;
```

#### `getIssuer()` { #encryptionsecurityjwtbuilder-getissuer }

```php
public function getIssuer(): string|null;
```

#### `getNotBefore()` { #encryptionsecurityjwtbuilder-getnotbefore }

```php
public function getNotBefore(): int|null;
```

#### `getPassphrase()` { #encryptionsecurityjwtbuilder-getpassphrase }

```php
public function getPassphrase(): string;
```

#### `getSubject()` { #encryptionsecurityjwtbuilder-getsubject }

```php
public function getSubject(): string|null;
```

#### `getToken()` { #encryptionsecurityjwtbuilder-gettoken }

```php
public function getToken(): Token;
```

#### `init()` { #encryptionsecurityjwtbuilder-init }

```php
public function init(): static;
```

#### `setAudience()` { #encryptionsecurityjwtbuilder-setaudience }

```php
public function setAudience( mixed $audience ): static;
```

The "aud" (audience) claim identifies the recipients that the JWT is
intended for.  Each principal intended to process the JWT MUST
identify itself with a value in the audience claim.  If the principal
processing the claim does not identify itself with a value in the
"aud" claim when this claim is present, then the JWT MUST be
rejected.  In the general case, the "aud" value is an array of case-
sensitive strings, each containing a StringOrURI value.  In the
special case when the JWT has one audience, the "aud" value MAY be a
single case-sensitive string containing a StringOrURI value.  The
interpretation of audience values is generally application specific.
Use of this claim is OPTIONAL.

#### `setContentType()` { #encryptionsecurityjwtbuilder-setcontenttype }

```php
public function setContentType( string $contentType ): static;
```

Sets the content type header 'cty'

#### `setExpirationTime()` { #encryptionsecurityjwtbuilder-setexpirationtime }

```php
public function setExpirationTime( int $timestamp ): static;
```

The "exp" (expiration time) claim identifies the expiration time on
or after which the JWT MUST NOT be accepted for processing.  The
processing of the "exp" claim requires that the current date/time
MUST be before the expiration date/time listed in the "exp" claim.
Implementers MAY provide for some small leeway, usually no more than
a few minutes, to account for clock skew.  Its value MUST be a number
containing a NumericDate value.  Use of this claim is OPTIONAL.

#### `setId()` { #encryptionsecurityjwtbuilder-setid }

```php
public function setId( string $jwtId ): static;
```

The "jti" (JWT ID) claim provides a unique identifier for the JWT.
The identifier value MUST be assigned in a manner that ensures that
there is a negligible probability that the same value will be
accidentally assigned to a different data object; if the application
uses multiple issuers, collisions MUST be prevented among values
produced by different issuers as well.  The "jti" claim can be used
to prevent the JWT from being replayed.  The "jti" value is a case-
sensitive string.  Use of this claim is OPTIONAL.

#### `setIssuedAt()` { #encryptionsecurityjwtbuilder-setissuedat }

```php
public function setIssuedAt( int $timestamp ): static;
```

The "iat" (issued at) claim identifies the time at which the JWT was
issued.  This claim can be used to determine the age of the JWT.  Its
value MUST be a number containing a NumericDate value.  Use of this
claim is OPTIONAL.

#### `setIssuer()` { #encryptionsecurityjwtbuilder-setissuer }

```php
public function setIssuer( string $issuer ): static;
```

The "iss" (issuer) claim identifies the principal that issued the
JWT.  The processing of this claim is generally application specific.
The "iss" value is a case-sensitive string containing a StringOrURI
value.  Use of this claim is OPTIONAL.

#### `setNotBefore()` { #encryptionsecurityjwtbuilder-setnotbefore }

```php
public function setNotBefore( int $timestamp ): static;
```

The "nbf" (not before) claim identifies the time before which the JWT
MUST NOT be accepted for processing.  The processing of the "nbf"
claim requires that the current date/time MUST be after or equal to
the not-before date/time listed in the "nbf" claim.  Implementers MAY
provide for some small leeway, usually no more than a few minutes, to
account for clock skew.  Its value MUST be a number containing a
NumericDate value.  Use of this claim is OPTIONAL.

#### `setPassphrase()` { #encryptionsecurityjwtbuilder-setpassphrase }

```php
public function setPassphrase( string $passphrase ): static;
```

#### `setSubject()` { #encryptionsecurityjwtbuilder-setsubject }

```php
public function setSubject( string $subject ): static;
```

The "sub" (subject) claim identifies the principal that is the
subject of the JWT.  The claims in a JWT are normally statements
about the subject.  The subject value MUST either be scoped to be
locally unique in the context of the issuer or be globally unique.
The processing of this claim is generally application specific.  The
"sub" value is a case-sensitive string containing a StringOrURI
value.  Use of this claim is OPTIONAL.

<div class="api-group">Protected · 1</div>

#### `setClaim()` { #encryptionsecurityjwtbuilder-setclaim }

```php
protected function setClaim(
    string $name,
    mixed $value
): Builder;
```

Sets a registered claim


## Encryption\Security\JWT\Exceptions\EmptyPassphrase

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/EmptyPassphrase.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `Exception`
    - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
        - **`Phalcon\Encryption\Security\JWT\Exceptions\EmptyPassphrase`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsemptypassphrase-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsemptypassphrase-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidAudience

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/InvalidAudience.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `Exception`
    - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
        - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudience`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsinvalidaudience-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsinvalidaudience-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidAudienceType

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/InvalidAudienceType.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `Exception`
    - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
        - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudienceType`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsinvalidaudiencetype-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsinvalidaudiencetype-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidClaims

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/InvalidClaims.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `InvalidArgumentException`
    - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidClaims`**

</div>

__Uses__ `InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsinvalidclaims-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsinvalidclaims-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidExpirationTime

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/InvalidExpirationTime.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `Exception`
    - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
        - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidExpirationTime`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsinvalidexpirationtime-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsinvalidexpirationtime-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidHeader

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/InvalidHeader.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `InvalidArgumentException`
    - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidHeader`**

</div>

__Uses__ `InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsinvalidheader-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsinvalidheader-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidNotBefore

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/InvalidNotBefore.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `Exception`
    - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
        - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidNotBefore`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsinvalidnotbefore-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsinvalidnotbefore-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\MalformedJwtString

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/MalformedJwtString.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `InvalidArgumentException`
    - **`Phalcon\Encryption\Security\JWT\Exceptions\MalformedJwtString`**

</div>

__Uses__ `InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsmalformedjwtstring-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsmalformedjwtstring-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\MissingJwtTypHeader

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/MissingJwtTypHeader.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `InvalidArgumentException`
    - **`Phalcon\Encryption\Security\JWT\Exceptions\MissingJwtTypHeader`**

</div>

__Uses__ `InvalidArgumentException`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsmissingjwttypheader-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsmissingjwttypheader-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\UnsupportedAlgorithmException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/UnsupportedAlgorithmException.zep){ .src-btn }

Exception thrown when the algorithm is not supported for JWT

<div class="api-tree" markdown>

- `Exception`
    - **`Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedAlgorithmException`**
        - [`Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedHmacAlgorithm`](#encryptionsecurityjwtexceptionsunsupportedhmacalgorithm)

</div>

__Uses__ `Exception`
{ .api-uses }


## Encryption\Security\JWT\Exceptions\UnsupportedHmacAlgorithm

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/UnsupportedHmacAlgorithm.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `Exception`
    - [`Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedAlgorithmException`](#encryptionsecurityjwtexceptionsunsupportedalgorithmexception)
        - **`Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedHmacAlgorithm`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsunsupportedhmacalgorithm-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsunsupportedhmacalgorithm-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\ValidatorException

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/ValidatorException.zep){ .src-btn }

Exception thrown when the validation does not pass for JWT

<div class="api-tree" markdown>

- `Exception`
    - **`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`**
        - [`Phalcon\Encryption\Security\JWT\Exceptions\EmptyPassphrase`](#encryptionsecurityjwtexceptionsemptypassphrase)
        - [`Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudience`](#encryptionsecurityjwtexceptionsinvalidaudience)
        - [`Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudienceType`](#encryptionsecurityjwtexceptionsinvalidaudiencetype)
        - [`Phalcon\Encryption\Security\JWT\Exceptions\InvalidExpirationTime`](#encryptionsecurityjwtexceptionsinvalidexpirationtime)
        - [`Phalcon\Encryption\Security\JWT\Exceptions\InvalidNotBefore`](#encryptionsecurityjwtexceptionsinvalidnotbefore)
        - [`Phalcon\Encryption\Security\JWT\Exceptions\WeakPassphrase`](#encryptionsecurityjwtexceptionsweakpassphrase)

</div>

__Uses__ `Exception`
{ .api-uses }


## Encryption\Security\JWT\Exceptions\WeakPassphrase

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/WeakPassphrase.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree" markdown>

- `Exception`
    - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
        - **`Phalcon\Encryption\Security\JWT\Exceptions\WeakPassphrase`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtexceptionsweakpassphrase-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityjwtexceptionsweakpassphrase-__construct }

```php
public function __construct();
```


## Encryption\Security\JWT\Signer\AbstractSigner

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Signer/AbstractSigner.zep){ .src-btn }

Abstract class helping with the signer classes

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\JWT\Signer\AbstractSigner`** — implements [`Phalcon\Encryption\Security\JWT\Signer\SignerInterface`](#encryptionsecurityjwtsignersignerinterface)
    - [`Phalcon\Encryption\Security\JWT\Signer\Hmac`](#encryptionsecurityjwtsignerhmac)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtsignerabstractsigner-getalgorithm">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAlgorithm()</code>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$algorithm = ""` `string`

</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getAlgorithm()` { #encryptionsecurityjwtsignerabstractsigner-getalgorithm }

```php
public function getAlgorithm(): string;
```


## Encryption\Security\JWT\Signer\Hmac

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Signer/Hmac.zep){ .src-btn }

HMAC signing class

<div class="api-tree" markdown>

- [`Phalcon\Encryption\Security\JWT\Signer\AbstractSigner`](#encryptionsecurityjwtsignerabstractsigner)
    - **`Phalcon\Encryption\Security\JWT\Signer\Hmac`**

</div>

__Uses__ `Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedAlgorithmException` · `Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedHmacAlgorithm`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtsignerhmac-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( string $algo = &quot;sha512&quot; )</code>
<span class="desc">Hmac constructor.</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtsignerhmac-getalgheader">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAlgHeader()</code>
<span class="desc">Return the value that is used for the &quot;alg&quot; header</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtsignerhmac-sign">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">sign(
    string $payload,
    string $passphrase
)</code>
<span class="desc">Sign a payload using the passphrase</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtsignerhmac-verify">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">verify(
    string $source,
    string $payload,
    string $passphrase
)</code>
<span class="desc">Verify a passed source with a payload and passphrase</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #encryptionsecurityjwtsignerhmac-__construct }

```php
public function __construct( string $algo = "sha512" );
```

Hmac constructor.

#### `getAlgHeader()` { #encryptionsecurityjwtsignerhmac-getalgheader }

```php
public function getAlgHeader(): string;
```

Return the value that is used for the "alg" header

#### `sign()` { #encryptionsecurityjwtsignerhmac-sign }

```php
public function sign(
    string $payload,
    string $passphrase
): string;
```

Sign a payload using the passphrase

#### `verify()` { #encryptionsecurityjwtsignerhmac-verify }

```php
public function verify(
    string $source,
    string $payload,
    string $passphrase
): bool;
```

Verify a passed source with a payload and passphrase


## Encryption\Security\JWT\Signer\None

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Signer/None.zep){ .src-btn }

No signing class

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\JWT\Signer\None`** — implements [`Phalcon\Encryption\Security\JWT\Signer\SignerInterface`](#encryptionsecurityjwtsignersignerinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtsignernone-getalgheader">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAlgHeader()</code>
<span class="desc">Return the value that is used for the &quot;alg&quot; header</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtsignernone-getalgorithm">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAlgorithm()</code>
<span class="desc">Return the algorithm used</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtsignernone-sign">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">sign(
    string $payload,
    string $passphrase
)</code>
<span class="desc">Sign a payload using the passphrase</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtsignernone-verify">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">verify(
    string $source,
    string $payload,
    string $passphrase
)</code>
<span class="desc">Verify a passed source with a payload and passphrase</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `getAlgHeader()` { #encryptionsecurityjwtsignernone-getalgheader }

```php
public function getAlgHeader(): string;
```

Return the value that is used for the "alg" header

#### `getAlgorithm()` { #encryptionsecurityjwtsignernone-getalgorithm }

```php
public function getAlgorithm(): string;
```

Return the algorithm used

#### `sign()` { #encryptionsecurityjwtsignernone-sign }

```php
public function sign(
    string $payload,
    string $passphrase
): string;
```

Sign a payload using the passphrase

#### `verify()` { #encryptionsecurityjwtsignernone-verify }

```php
public function verify(
    string $source,
    string $payload,
    string $passphrase
): bool;
```

Verify a passed source with a payload and passphrase


## Encryption\Security\JWT\Signer\SignerInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Signer/SignerInterface.zep){ .src-btn }

Interface for JWT Signer classes

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\JWT\Signer\SignerInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtsignersignerinterface-getalgheader">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAlgHeader()</code>
<span class="desc">Return the value that is used for the &quot;alg&quot; header</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtsignersignerinterface-getalgorithm">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getAlgorithm()</code>
<span class="desc">Return the algorithm used</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtsignersignerinterface-sign">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">sign(
    string $payload,
    string $passphrase
)</code>
<span class="desc">Sign a payload using the passphrase</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtsignersignerinterface-verify">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">verify(
    string $source,
    string $payload,
    string $passphrase
)</code>
<span class="desc">Verify a passed source with a payload and passphrase</span>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `getAlgHeader()` { #encryptionsecurityjwtsignersignerinterface-getalgheader }

```php
public function getAlgHeader(): string;
```

Return the value that is used for the "alg" header

#### `getAlgorithm()` { #encryptionsecurityjwtsignersignerinterface-getalgorithm }

```php
public function getAlgorithm(): string;
```

Return the algorithm used

#### `sign()` { #encryptionsecurityjwtsignersignerinterface-sign }

```php
public function sign(
    string $payload,
    string $passphrase
): string;
```

Sign a payload using the passphrase

#### `verify()` { #encryptionsecurityjwtsignersignerinterface-verify }

```php
public function verify(
    string $source,
    string $payload,
    string $passphrase
): bool;
```

Verify a passed source with a payload and passphrase


## Encryption\Security\JWT\Token\AbstractItem

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/AbstractItem.zep){ .src-btn }

Abstract helper class for Tokens

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\JWT\Token\AbstractItem`**
    - [`Phalcon\Encryption\Security\JWT\Token\Item`](#encryptionsecurityjwttokenitem)
    - [`Phalcon\Encryption\Security\JWT\Token\Signature`](#encryptionsecurityjwttokensignature)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwttokenabstractitem-getencoded">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getEncoded()</code>
</a>
</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$data = []` `array`

</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getEncoded()` { #encryptionsecurityjwttokenabstractitem-getencoded }

```php
public function getEncoded(): string;
```


## Encryption\Security\JWT\Token\Enum

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/Enum.zep){ .src-btn }

Constants for Tokens. It offers constants for Headers as well as Claims

@link https://tools.ietf.org/html/rfc7519

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\JWT\Token\Enum`**

</div>

### Constants

<div class="api-list" markdown>

-   `ALGO = "alg"` `string`

-   `AUDIENCE = "aud"` `string`

    Claims

-   `CONTENT_TYPE = "cty"` `string`

-   `EXPIRATION_TIME = "exp"` `string`

-   `ID = "jti"` `string`

-   `ISSUED_AT = "iat"` `string`

-   `ISSUER = "iss"` `string`

-   `NOT_BEFORE = "nbf"` `string`

-   `SUBJECT = "sub"` `string`

-   `TYPE = "typ"` `string`

    Headers

</div>


## Encryption\Security\JWT\Token\Item

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/Item.zep){ .src-btn }

Storage class for a Token Item

<div class="api-tree" markdown>

- [`Phalcon\Encryption\Security\JWT\Token\AbstractItem`](#encryptionsecurityjwttokenabstractitem)
    - **`Phalcon\Encryption\Security\JWT\Token\Item`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwttokenitem-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    array $payload,
    string $encoded
)</code>
<span class="desc">Item constructor.</span>
</a>
<a class="api-item" href="#encryptionsecurityjwttokenitem-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">get(
    string $name,
    mixed $defaultValue = null
)</code>
</a>
<a class="api-item" href="#encryptionsecurityjwttokenitem-getpayload">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getPayload()</code>
</a>
<a class="api-item" href="#encryptionsecurityjwttokenitem-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">has( string $name )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 4</div>

#### `__construct()` { #encryptionsecurityjwttokenitem-__construct }

```php
public function __construct(
    array $payload,
    string $encoded
);
```

Item constructor.

#### `get()` { #encryptionsecurityjwttokenitem-get }

```php
public function get(
    string $name,
    mixed $defaultValue = null
): mixed|null;
```

#### `getPayload()` { #encryptionsecurityjwttokenitem-getpayload }

```php
public function getPayload(): array;
```

#### `has()` { #encryptionsecurityjwttokenitem-has }

```php
public function has( string $name ): bool;
```


## Encryption\Security\JWT\Token\Parser

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/Parser.zep){ .src-btn }

Token Parser class.

It parses a token by validating if it is formed properly and splits it into
three parts. The headers are decoded, then the claims and finally the
signature. It returns a token object populated with the decoded information.

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\JWT\Token\Parser`**

</div>

__Uses__ `InvalidArgumentException` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidClaims` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidHeader` · `Phalcon\Encryption\Security\JWT\Exceptions\MalformedJwtString` · `Phalcon\Encryption\Security\JWT\Exceptions\MissingJwtTypHeader` · `Phalcon\Support\Helper\Json\Decode`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwttokenparser-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct( Decode $decode = null )</code>
</a>
<a class="api-item" href="#encryptionsecurityjwttokenparser-parse">
<code class="vis vis-public">public</code>
<code class="ret">Token</code>
<code class="sig">parse( string $token )</code>
<span class="desc">Parse a token and return it</span>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #encryptionsecurityjwttokenparser-__construct }

```php
public function __construct( Decode $decode = null );
```

#### `parse()` { #encryptionsecurityjwttokenparser-parse }

```php
public function parse( string $token ): Token;
```

Parse a token and return it


## Encryption\Security\JWT\Token\Signature

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/Signature.zep){ .src-btn }

Signature class containing the encoded data and the hash.

<div class="api-tree" markdown>

- [`Phalcon\Encryption\Security\JWT\Token\AbstractItem`](#encryptionsecurityjwttokenabstractitem)
    - **`Phalcon\Encryption\Security\JWT\Token\Signature`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwttokensignature-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $hash = &quot;&quot;,
    string $encoded = &quot;&quot;
)</code>
<span class="desc">Signature constructor.</span>
</a>
<a class="api-item" href="#encryptionsecurityjwttokensignature-gethash">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getHash()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__construct()` { #encryptionsecurityjwttokensignature-__construct }

```php
public function __construct(
    string $hash = "",
    string $encoded = ""
);
```

Signature constructor.

#### `getHash()` { #encryptionsecurityjwttokensignature-gethash }

```php
public function getHash(): string;
```


## Encryption\Security\JWT\Token\Token

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/Token.zep){ .src-btn }

Token Class.

A container for Token related data. It stores the claims, headers, signature
and payload. It also calculates and returns the token string.

@property Item      $claims
@property Item      $headers
@property Signature $signature

@link https://tools.ietf.org/html/rfc7519

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\JWT\Token\Token`**

</div>

__Uses__ `Phalcon\Encryption\Security\JWT\Signer\SignerInterface` · `Phalcon\Encryption\Security\JWT\Validator`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwttokentoken-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    Item $headers,
    Item $claims,
    Signature $signature
)</code>
<span class="desc">Token constructor.</span>
</a>
<a class="api-item" href="#encryptionsecurityjwttokentoken-getclaims">
<code class="vis vis-public">public</code>
<code class="ret">Item</code>
<code class="sig">getClaims()</code>
<span class="desc">Return the registered claims</span>
</a>
<a class="api-item" href="#encryptionsecurityjwttokentoken-getheaders">
<code class="vis vis-public">public</code>
<code class="ret">Item</code>
<code class="sig">getHeaders()</code>
<span class="desc">Return the registered headers</span>
</a>
<a class="api-item" href="#encryptionsecurityjwttokentoken-getpayload">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getPayload()</code>
<span class="desc">Return the payload</span>
</a>
<a class="api-item" href="#encryptionsecurityjwttokentoken-getsignature">
<code class="vis vis-public">public</code>
<code class="ret">Signature</code>
<code class="sig">getSignature()</code>
<span class="desc">Return the signature</span>
</a>
<a class="api-item" href="#encryptionsecurityjwttokentoken-gettoken">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getToken()</code>
<span class="desc">Return the token</span>
</a>
<a class="api-item" href="#encryptionsecurityjwttokentoken-validate">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">validate( Validator $validator )</code>
</a>
<a class="api-item" href="#encryptionsecurityjwttokentoken-verify">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig">verify(
    SignerInterface $signer,
    string $key
)</code>
<span class="desc">Verify the signature</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `__construct()` { #encryptionsecurityjwttokentoken-__construct }

```php
public function __construct(
    Item $headers,
    Item $claims,
    Signature $signature
);
```

Token constructor.

#### `getClaims()` { #encryptionsecurityjwttokentoken-getclaims }

```php
public function getClaims(): Item;
```

Return the registered claims

#### `getHeaders()` { #encryptionsecurityjwttokentoken-getheaders }

```php
public function getHeaders(): Item;
```

Return the registered headers

#### `getPayload()` { #encryptionsecurityjwttokentoken-getpayload }

```php
public function getPayload(): string;
```

Return the payload

#### `getSignature()` { #encryptionsecurityjwttokentoken-getsignature }

```php
public function getSignature(): Signature;
```

Return the signature

#### `getToken()` { #encryptionsecurityjwttokentoken-gettoken }

```php
public function getToken(): string;
```

Return the token

#### `validate()` { #encryptionsecurityjwttokentoken-validate }

```php
public function validate( Validator $validator ): array;
```

#### `verify()` { #encryptionsecurityjwttokentoken-verify }

```php
public function verify(
    SignerInterface $signer,
    string $key
): bool;
```

Verify the signature


## Encryption\Security\JWT\Validator

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Validator.zep){ .src-btn }

Class Validator

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\JWT\Validator`**

</div>

__Uses__ `Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudienceType` · `Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException` · `Phalcon\Encryption\Security\JWT\Signer\SignerInterface` · `Phalcon\Encryption\Security\JWT\Token\Enum` · `Phalcon\Encryption\Security\JWT\Token\Token`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityjwtvalidator-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    Token $token,
    int $timeShift = 0
)</code>
<span class="desc">Validator constructor.</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-get">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig">get( string $claim )</code>
<span class="desc">Return the value of a claim</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-geterrors">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig">getErrors()</code>
<span class="desc">Return an array with validation errors (if any)</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-set">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">set(
    string $claim,
    mixed $value
)</code>
<span class="desc">Set the value of a claim, for comparison with the token values</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-settoken">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">setToken( Token $token )</code>
<span class="desc">Set the token to be validated</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-validateaudience">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">validateAudience( mixed $audience )</code>
<span class="desc">Validate the audience</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-validateclaim">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">validateClaim(
    string $name,
    mixed $value
)</code>
<span class="desc">Validate a claim</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-validateexpiration">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">validateExpiration( int $timestamp )</code>
<span class="desc">Validate the expiration time of the token</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-validateid">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">validateId( string $id )</code>
<span class="desc">Validate the id of the token</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-validateissuedat">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">validateIssuedAt( int $timestamp )</code>
<span class="desc">Validate the issued at (iat) of the token</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-validateissuer">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">validateIssuer( string $issuer )</code>
<span class="desc">Validate the issuer of the token</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-validatenotbefore">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">validateNotBefore( int $timestamp )</code>
<span class="desc">Validate the notbefore (nbf) of the token</span>
</a>
<a class="api-item" href="#encryptionsecurityjwtvalidator-validatesignature">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig">validateSignature(
    SignerInterface $signer,
    string $passphrase
)</code>
<span class="desc">Validate the signature of the token</span>
</a>
</div>

### Methods

<div class="api-group">Public · 13</div>

#### `__construct()` { #encryptionsecurityjwtvalidator-__construct }

```php
public function __construct(
    Token $token,
    int $timeShift = 0
);
```

Validator constructor.

#### `get()` { #encryptionsecurityjwtvalidator-get }

```php
public function get( string $claim ): mixed|null;
```

Return the value of a claim

#### `getErrors()` { #encryptionsecurityjwtvalidator-geterrors }

```php
public function getErrors(): array;
```

Return an array with validation errors (if any)

#### `set()` { #encryptionsecurityjwtvalidator-set }

```php
public function set(
    string $claim,
    mixed $value
): static;
```

Set the value of a claim, for comparison with the token values

#### `setToken()` { #encryptionsecurityjwtvalidator-settoken }

```php
public function setToken( Token $token ): static;
```

Set the token to be validated

#### `validateAudience()` { #encryptionsecurityjwtvalidator-validateaudience }

```php
public function validateAudience( mixed $audience ): static;
```

Validate the audience

#### `validateClaim()` { #encryptionsecurityjwtvalidator-validateclaim }

```php
public function validateClaim(
    string $name,
    mixed $value
): static;
```

Validate a claim

#### `validateExpiration()` { #encryptionsecurityjwtvalidator-validateexpiration }

```php
public function validateExpiration( int $timestamp ): static;
```

Validate the expiration time of the token

#### `validateId()` { #encryptionsecurityjwtvalidator-validateid }

```php
public function validateId( string $id ): static;
```

Validate the id of the token

#### `validateIssuedAt()` { #encryptionsecurityjwtvalidator-validateissuedat }

```php
public function validateIssuedAt( int $timestamp ): static;
```

Validate the issued at (iat) of the token

#### `validateIssuer()` { #encryptionsecurityjwtvalidator-validateissuer }

```php
public function validateIssuer( string $issuer ): static;
```

Validate the issuer of the token

#### `validateNotBefore()` { #encryptionsecurityjwtvalidator-validatenotbefore }

```php
public function validateNotBefore( int $timestamp ): static;
```

Validate the notbefore (nbf) of the token

#### `validateSignature()` { #encryptionsecurityjwtvalidator-validatesignature }

```php
public function validateSignature(
    SignerInterface $signer,
    string $passphrase
): static;
```

Validate the signature of the token


## Encryption\Security\Random

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Random.zep){ .src-btn }

Phalcon\Encryption\Security\Random

Secure random number generator class.

Provides secure random number generator which is suitable for generating
session key in HTTP cookies, etc.

`Phalcon\Encryption\Security\Random` could be mainly useful for:

- Key generation (e.g. generation of complicated keys)
- Generating random passwords for new user accounts
- Encryption systems

```php
$random = new \Phalcon\Encryption\Security\Random();

// Random binary string
$bytes = $random->bytes();

// Random hex string
echo $random->hex(10); // a29f470508d5ccb8e289
echo $random->hex(10); // 533c2f08d5eee750e64a
echo $random->hex(11); // f362ef96cb9ffef150c9cd
echo $random->hex(12); // 95469d667475125208be45c4
echo $random->hex(13); // 05475e8af4a34f8f743ab48761

// Random base62 string
echo $random->base62(); // z0RkwHfh8ErDM1xw

// Random base64 string
echo $random->base64(12); // XfIN81jGGuKkcE1E
echo $random->base64(12); // 3rcq39QzGK9fUqh8
echo $random->base64();   // DRcfbngL/iOo9hGGvy1TcQ==
echo $random->base64(16); // SvdhPcIHDZFad838Bb0Swg==

// Random URL-safe base64 string
echo $random->base64Safe();           // PcV6jGbJ6vfVw7hfKIFDGA
echo $random->base64Safe();           // GD8JojhzSTrqX7Q8J6uug
echo $random->base64Safe(8);          // mGyy0evy3ok
echo $random->base64Safe(null, true); // DRrAgOFkS4rvRiVHFefcQ==

// Random UUID (version 4) - returns a string
echo $random->uuid(); // db082997-2572-4e2c-a046-5eefe97b1235
echo $random->uuid(); // da2aa0e2-b4d0-4e3c-99f5-f5ef62c57fe2

// For other UUID versions (1, 3, 5, 6, 7) or object-based access use the
// Phalcon\Encryption\Security\Uuid factory instead:
//
// $uuid = new \Phalcon\Encryption\Security\Uuid();
// echo $uuid->v1(); // time-based
// echo $uuid->v6(); // reordered time-based (sortable)
// echo $uuid->v7(); // Unix-timestamp based (sortable)

// Random number between 0 and $len
echo $random->number(256); // 84
echo $random->number(256); // 79
echo $random->number(100); // 29
echo $random->number(300); // 40

// Random base58 string
echo $random->base58();   // 4kUgL2pdQMSCQtjE
echo $random->base58();   // Umjxqf7ZPwh765yR
echo $random->base58(24); // qoXcgmw4A9dys26HaNEdCRj9
echo $random->base58(7);  // 774SJD3vgP
```

This class partially borrows SecureRandom library from Ruby

@link https://ruby-doc.org/stdlib-2.2.2/libdoc/securerandom/rdoc/SecureRandom.html

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\Random`**

</div>

__Uses__ `Phalcon\Encryption\Security\Exceptions\InvalidRandomInput`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityrandom-base58">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">base58( int $len = 16 )</code>
<span class="desc">Generates a random base58 string</span>
</a>
<a class="api-item" href="#encryptionsecurityrandom-base62">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">base62( int $len = 16 )</code>
<span class="desc">Generates a random base62 string</span>
</a>
<a class="api-item" href="#encryptionsecurityrandom-base64">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">base64( int $len = 16 )</code>
<span class="desc">Generates a random base64 string</span>
</a>
<a class="api-item" href="#encryptionsecurityrandom-base64safe">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">base64Safe(
    int $len = 16,
    bool $padding = false
)</code>
<span class="desc">Generates a random URL-safe base64 string</span>
</a>
<a class="api-item" href="#encryptionsecurityrandom-bytes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">bytes( int $len = 16 )</code>
<span class="desc">Generates a random binary string</span>
</a>
<a class="api-item" href="#encryptionsecurityrandom-hex">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">hex( int $len = 16 )</code>
<span class="desc">Generates a random hex string</span>
</a>
<a class="api-item" href="#encryptionsecurityrandom-number">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig">number( int $len )</code>
<span class="desc">Generates a random number between 0 and $len</span>
</a>
<a class="api-item" href="#encryptionsecurityrandom-uuid">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">uuid()</code>
<span class="desc">Generates a v4 random UUID (Universally Unique IDentifier)</span>
</a>
<a class="api-item" href="#encryptionsecurityrandom-base">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">base(
    string $alphabet,
    int $base,
    mixed $number = 16
)</code>
<span class="desc">Generates a random string based on the number ($base) of characters</span>
</a>
</div>

### Methods

<div class="api-group">Public · 8</div>

#### `base58()` { #encryptionsecurityrandom-base58 }

```php
public function base58( int $len = 16 ): string;
```

Generates a random base58 string

The result may contain alphanumeric characters except 0, O, I and l.

It is similar to `Phalcon\Encryption\Security\Random::base64()` but has been
modified to avoid both non-alphanumeric characters and letters which
might look ambiguous when printed.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->base58(); // 4kUgL2pdQMSCQtjE
```

@see    \Phalcon\Encryption\Security\Random:base64
@link   https://en.wikipedia.org/wiki/Base58

#### `base62()` { #encryptionsecurityrandom-base62 }

```php
public function base62( int $len = 16 ): string;
```

Generates a random base62 string

It is similar to `Phalcon\Encryption\Security\Random::base58()` but has been
modified to provide the largest value that can safely be used in URLs
without needing to take extra characters into consideration because it is
[A-Za-z0-9].

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->base62(); // z0RkwHfh8ErDM1xw
```

@see    \Phalcon\Encryption\Security\Random:base58

#### `base64()` { #encryptionsecurityrandom-base64 }

```php
public function base64( int $len = 16 ): string;
```

Generates a random base64 string

The length of the result string is usually greater of $len.
Size formula: 4 * ($len / 3) rounded up to a multiple of 4.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->base64(12); // 3rcq39QzGK9fUqh8
```

#### `base64Safe()` { #encryptionsecurityrandom-base64safe }

```php
public function base64Safe(
    int $len = 16,
    bool $padding = false
): string;
```

Generates a random URL-safe base64 string

The length of the result string is usually greater of $len.

By default, padding is not generated because "=" may be used as a URL
delimiter. The result may contain A-Z, a-z, 0-9, "-" and "_". "=" is also
used if $padding is true. See RFC 3548 for the definition of URL-safe
base64.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->base64Safe(); // GD8JojhzSTrqX7Q8J6uug
```

@link https://www.ietf.org/rfc/rfc3548.txt

#### `bytes()` { #encryptionsecurityrandom-bytes }

```php
public function bytes( int $len = 16 ): string;
```

Generates a random binary string

The `Random::bytes` method returns a string and accepts as input an int
representing the length in bytes to be returned.

If $len is not specified, 16 is assumed. It may be larger in future.
The result may contain any byte: "x00" - "xFF".

```php
$random = new \Phalcon\Encryption\Security\Random();

$bytes = $random->bytes();
var_dump(bin2hex($bytes));
// Possible output: string(32) "00f6c04b144b41fad6a59111c126e1ee"
```

#### `hex()` { #encryptionsecurityrandom-hex }

```php
public function hex( int $len = 16 ): string;
```

Generates a random hex string

The length of the result string is usually greater of $len.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->hex(10); // a29f470508d5ccb8e289
```

#### `number()` { #encryptionsecurityrandom-number }

```php
public function number( int $len ): int;
```

Generates a random number between 0 and $len

Returns an integer: 0 <= result <= $len.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->number(16); // 8
```

#### `uuid()` { #encryptionsecurityrandom-uuid }

```php
public function uuid(): string;
```

Generates a v4 random UUID (Universally Unique IDentifier)

The version 4 UUID is purely random (except the version). It does not
contain meaningful information such as MAC address, time, etc. See RFC
4122 for details of UUID.

Delegates to `Phalcon\Encryption\Security\Uuid::v4()`. For other UUID
versions or object-based access use that class directly.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->uuid(); // 1378c906-64bb-4f81-a8d6-4ae1bfcdec22
```

@link https://www.ietf.org/rfc/rfc4122.txt

<div class="api-group">Protected · 1</div>

#### `base()` { #encryptionsecurityrandom-base }

```php
protected function base(
    string $alphabet,
    int $base,
    mixed $number = 16
): string;
```

Generates a random string based on the number ($base) of characters
($alphabet).


## Encryption\Security\Uuid

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid.zep){ .src-btn }

Factory that generates UUIDs of versions 1 through 7.

Each call creates a new immutable version object. Cast to string for the
UUID value; use the returned object for additional methods such as
getDateTime() or getNode().

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\Uuid`**

</div>

__Uses__ `Phalcon\Encryption\Security\Uuid\Version1` · `Phalcon\Encryption\Security\Uuid\Version3` · `Phalcon\Encryption\Security\Uuid\Version4` · `Phalcon\Encryption\Security\Uuid\Version5` · `Phalcon\Encryption\Security\Uuid\Version6` · `Phalcon\Encryption\Security\Uuid\Version7`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuid-v1">
<code class="vis vis-public">public</code>
<code class="ret">Version1</code>
<code class="sig">v1()</code>
<span class="desc">Generates a version 1 (time-based) UUID.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuid-v3">
<code class="vis vis-public">public</code>
<code class="ret">Version3</code>
<code class="sig">v3(
    string $namespaceName,
    string $name
)</code>
<span class="desc">Generates a version 3 (name-based MD5) UUID.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuid-v4">
<code class="vis vis-public">public</code>
<code class="ret">Version4</code>
<code class="sig">v4()</code>
<span class="desc">Generates a version 4 (random) UUID.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuid-v5">
<code class="vis vis-public">public</code>
<code class="ret">Version5</code>
<code class="sig">v5(
    string $namespaceName,
    string $name
)</code>
<span class="desc">Generates a version 5 (name-based SHA-1) UUID.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuid-v6">
<code class="vis vis-public">public</code>
<code class="ret">Version6</code>
<code class="sig">v6()</code>
<span class="desc">Generates a version 6 (reordered time-based) UUID.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuid-v7">
<code class="vis vis-public">public</code>
<code class="ret">Version7</code>
<code class="sig">v7()</code>
<span class="desc">Generates a version 7 (Unix timestamp) UUID.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 6</div>

#### `v1()` { #encryptionsecurityuuid-v1 }

```php
public function v1(): Version1;
```

Generates a version 1 (time-based) UUID.

#### `v3()` { #encryptionsecurityuuid-v3 }

```php
public function v3(
    string $namespaceName,
    string $name
): Version3;
```

Generates a version 3 (name-based MD5) UUID.

#### `v4()` { #encryptionsecurityuuid-v4 }

```php
public function v4(): Version4;
```

Generates a version 4 (random) UUID.

#### `v5()` { #encryptionsecurityuuid-v5 }

```php
public function v5(
    string $namespaceName,
    string $name
): Version5;
```

Generates a version 5 (name-based SHA-1) UUID.

#### `v6()` { #encryptionsecurityuuid-v6 }

```php
public function v6(): Version6;
```

Generates a version 6 (reordered time-based) UUID.

#### `v7()` { #encryptionsecurityuuid-v7 }

```php
public function v7(): Version7;
```

Generates a version 7 (Unix timestamp) UUID.


## Encryption\Security\Uuid\AbstractUuid

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/AbstractUuid.zep){ .src-btn }

Shared base for all UUID version objects.

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\Uuid\AbstractUuid`** — implements [`Phalcon\Encryption\Security\Uuid\UuidInterface`](#encryptionsecurityuuiduuidinterface)
    - [`Phalcon\Encryption\Security\Uuid\Version1`](#encryptionsecurityuuidversion1)
    - [`Phalcon\Encryption\Security\Uuid\Version3`](#encryptionsecurityuuidversion3)
    - [`Phalcon\Encryption\Security\Uuid\Version4`](#encryptionsecurityuuidversion4)
    - [`Phalcon\Encryption\Security\Uuid\Version5`](#encryptionsecurityuuidversion5)
    - [`Phalcon\Encryption\Security\Uuid\Version6`](#encryptionsecurityuuidversion6)
    - [`Phalcon\Encryption\Security\Uuid\Version7`](#encryptionsecurityuuidversion7)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidabstractuuid-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">__toString()</code>
<span class="desc">Returns the UUID string.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuidabstractuuid-jsonserialize">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">jsonSerialize()</code>
<span class="desc">Returns the UUID string for JSON serialisation.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuidabstractuuid-format">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">format( string $hex )</code>
<span class="desc">Formats a 32-character hex string as a canonical UUID string.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuidabstractuuid-getnodeprovider">
<code class="vis vis-protected">protected</code>
<code class="ret">NodeProviderInterface</code>
<code class="sig">getNodeProvider()</code>
<span class="desc">Returns the shared SysNodeProvider instance, creating it on first call.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuidabstractuuid-namespacetobytes">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig">namespaceToBytes( string $uuid )</code>
<span class="desc">Converts a canonical UUID string to its 16-byte binary representation.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuidabstractuuid-uuidtimestamptodatetime">
<code class="vis vis-protected">protected</code>
<code class="ret">\DateTimeImmutable</code>
<code class="sig">uuidTimestampToDateTime( mixed $timestamp )</code>
<span class="desc">Converts a 60-bit UUID timestamp (100-ns intervals since UUID epoch) to</span>
</a>
</div>

### Constants

<div class="api-list" markdown>

-   `MAX = "ffffffff-ffff-ffff-ffff-ffffffffffff"` `string`

-   `NIL = "00000000-0000-0000-0000-000000000000"` `string`

-   `TIME_OFFSET_INT = 0x01B21DD213814000` `int`

    100-nanosecond intervals between UUID epoch (1582-10-15) and Unix epoch (1970-01-01).

</div>

### Properties

<div class="api-list" markdown>

-   `protected`{ .vis-protected } `$nodeProvider = null` `NodeProviderInterface|null`

    Cached SysNodeProvider instance - shared within the request via static.

-   `protected`{ .vis-protected } `$uid = ""` `string`

    The generated UUID string.

</div>

### Methods

<div class="api-group">Public · 2</div>

#### `__toString()` { #encryptionsecurityuuidabstractuuid-__tostring }

```php
public function __toString(): string;
```

Returns the UUID string.

#### `jsonSerialize()` { #encryptionsecurityuuidabstractuuid-jsonserialize }

```php
public function jsonSerialize(): string;
```

Returns the UUID string for JSON serialisation.

<div class="api-group">Protected · 4</div>

#### `format()` { #encryptionsecurityuuidabstractuuid-format }

```php
protected function format( string $hex ): string;
```

Formats a 32-character hex string as a canonical UUID string.

#### `getNodeProvider()` { #encryptionsecurityuuidabstractuuid-getnodeprovider }

```php
protected function getNodeProvider(): NodeProviderInterface;
```

Returns the shared SysNodeProvider instance, creating it on first call.
The static property means one discovery per request regardless of how
many VersionN objects are constructed.

#### `namespaceToBytes()` { #encryptionsecurityuuidabstractuuid-namespacetobytes }

```php
protected function namespaceToBytes( string $uuid ): string;
```

Converts a canonical UUID string to its 16-byte binary representation.

#### `uuidTimestampToDateTime()` { #encryptionsecurityuuidabstractuuid-uuidtimestamptodatetime }

```php
protected function uuidTimestampToDateTime( mixed $timestamp ): \DateTimeImmutable;
```

Converts a 60-bit UUID timestamp (100-ns intervals since UUID epoch) to
a DateTimeImmutable. Used by Version1 and Version6.


## Encryption\Security\Uuid\NodeProviderInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/NodeProviderInterface.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-uuid
@link    https://github.com/sinbadxiii/cphalcon-uuid

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\Uuid\NodeProviderInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidnodeproviderinterface-getnode">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNode()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getNode()` { #encryptionsecurityuuidnodeproviderinterface-getnode }

```php
public function getNode(): string;
```


## Encryption\Security\Uuid\RandomNodeProvider

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/RandomNodeProvider.zep){ .src-btn }

Generates a random 48-bit node with the multicast bit set.

Used as a fallback when no hardware MAC address is available.

@link https://www.ietf.org/rfc/rfc4122.txt Section 4.5

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\Uuid\RandomNodeProvider`** — implements [`Phalcon\Encryption\Security\Uuid\NodeProviderInterface`](#encryptionsecurityuuidnodeproviderinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidrandomnodeprovider-getnode">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNode()</code>
<span class="desc">Returns a random 12-character hex node with the multicast bit set.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getNode()` { #encryptionsecurityuuidrandomnodeprovider-getnode }

```php
public function getNode(): string;
```

Returns a random 12-character hex node with the multicast bit set.


## Encryption\Security\Uuid\SysNodeProvider

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/SysNodeProvider.zep){ .src-btn }

Discovers the hardware MAC address and returns it as a 12-character hex node.

Two-layer cache:
  1. Instance property  - free on all calls after the first within this instance.
  2. APCu               - cross-request within the same PHP-FPM worker (optional).

Falls back to RandomNodeProvider if no valid MAC address is found.

Platform support:
  Linux   - reads /sys/class/net/*\/address
  macOS   - passthru("ifconfig 2>&1")
  Windows - passthru("ipconfig /all 2>&1")
  FreeBSD - passthru("netstat -i -f link 2>&1")

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\Uuid\SysNodeProvider`** — implements [`Phalcon\Encryption\Security\Uuid\NodeProviderInterface`](#encryptionsecurityuuidnodeproviderinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidsysnodeprovider-getnode">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNode()</code>
<span class="desc">Returns the hardware MAC address as a 12-character hex string.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `getNode()` { #encryptionsecurityuuidsysnodeprovider-getnode }

```php
public function getNode(): string;
```

Returns the hardware MAC address as a 12-character hex string.
Result is cached in the instance property and optionally in APCu.


## Encryption\Security\Uuid\TimeBasedUuidInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/TimeBasedUuidInterface.zep){ .src-btn }

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-uuid
@link    https://github.com/sinbadxiii/cphalcon-uuid

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\Uuid\TimeBasedUuidInterface`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidtimebaseduuidinterface-getdatetime">
<code class="vis vis-public">public</code>
<code class="ret">\DateTimeImmutable</code>
<code class="sig">getDateTime()</code>
</a>
<a class="api-item" href="#encryptionsecurityuuidtimebaseduuidinterface-getnode">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNode()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

#### `getDateTime()` { #encryptionsecurityuuidtimebaseduuidinterface-getdatetime }

```php
public function getDateTime(): \DateTimeImmutable;
```

#### `getNode()` { #encryptionsecurityuuidtimebaseduuidinterface-getnode }

```php
public function getNode(): string;
```


## Encryption\Security\Uuid\UuidInterface

<span class="badge badge--interface">Interface</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/UuidInterface.zep){ .src-btn }

Marker interface for UUID version adapters.

Also carries the standard RFC 4122 namespace UUIDs as constants.

<div class="api-tree" markdown>

- **`Phalcon\Encryption\Security\Uuid\UuidInterface`**

</div>

### Constants

<div class="api-list" markdown>

-   `NAMESPACE_DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"` `string`

-   `NAMESPACE_OID = "6ba7b812-9dad-11d1-80b4-00c04fd430c8"` `string`

-   `NAMESPACE_URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"` `string`

-   `NAMESPACE_X500 = "6ba7b814-9dad-11d1-80b4-00c04fd430c8"` `string`

</div>


## Encryption\Security\Uuid\Version1

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version1.zep){ .src-btn }

Generates a version 1 (time-based) UUID.

The timestamp is the number of 100-nanosecond intervals since
October 15, 1582 00:00:00.00 UTC (the UUID epoch). The node is resolved
via SysNodeProvider (hardware MAC, APCu-cached) with RandomNodeProvider
as fallback.

@link https://www.ietf.org/rfc/rfc4122.txt

<div class="api-tree" markdown>

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
    - **`Phalcon\Encryption\Security\Uuid\Version1`** — implements [`Phalcon\Encryption\Security\Uuid\TimeBasedUuidInterface`](#encryptionsecurityuuidtimebaseduuidinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidversion1-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    \DateTimeInterface $dateTime = null,
    mixed $node = null
)</code>
</a>
<a class="api-item" href="#encryptionsecurityuuidversion1-getdatetime">
<code class="vis vis-public">public</code>
<code class="ret">\DateTimeImmutable</code>
<code class="sig">getDateTime()</code>
<span class="desc">Returns a DateTimeImmutable built from the UUID&#039;s embedded timestamp.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuidversion1-getnode">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNode()</code>
<span class="desc">Returns the 12-character hex node embedded in the UUID.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #encryptionsecurityuuidversion1-__construct }

```php
public function __construct(
    \DateTimeInterface $dateTime = null,
    mixed $node = null
);
```

#### `getDateTime()` { #encryptionsecurityuuidversion1-getdatetime }

```php
public function getDateTime(): \DateTimeImmutable;
```

Returns a DateTimeImmutable built from the UUID's embedded timestamp.

#### `getNode()` { #encryptionsecurityuuidversion1-getnode }

```php
public function getNode(): string;
```

Returns the 12-character hex node embedded in the UUID.


## Encryption\Security\Uuid\Version3

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version3.zep){ .src-btn }

Generates a version 3 (name-based MD5) UUID.

Given a namespace UUID and a name string, produces a deterministic UUID
by hashing namespace bytes + name with MD5, then stamping version/variant.

@link https://www.ietf.org/rfc/rfc4122.txt

<div class="api-tree" markdown>

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
    - **`Phalcon\Encryption\Security\Uuid\Version3`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidversion3-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $namespaceName,
    string $name
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityuuidversion3-__construct }

```php
public function __construct(
    string $namespaceName,
    string $name
);
```


## Encryption\Security\Uuid\Version4

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version4.zep){ .src-btn }

Generates a version 4 (random) UUID.

All 122 non-fixed bits are random. Identical algorithm to
Phalcon\Encryption\Security\Random::uuid().

@link https://www.ietf.org/rfc/rfc4122.txt

<div class="api-tree" markdown>

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
    - **`Phalcon\Encryption\Security\Uuid\Version4`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidversion4-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityuuidversion4-__construct }

```php
public function __construct();
```


## Encryption\Security\Uuid\Version5

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version5.zep){ .src-btn }

Generates a version 5 (name-based SHA-1) UUID.

Given a namespace UUID and a name string, produces a deterministic UUID
by hashing namespace bytes + name with SHA-1 (first 16 bytes used),
then stamping version/variant bits.

@link https://www.ietf.org/rfc/rfc4122.txt

<div class="api-tree" markdown>

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
    - **`Phalcon\Encryption\Security\Uuid\Version5`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidversion5-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct(
    string $namespaceName,
    string $name
)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityuuidversion5-__construct }

```php
public function __construct(
    string $namespaceName,
    string $name
);
```


## Encryption\Security\Uuid\Version6

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version6.zep){ .src-btn }

Generates a version 6 (reordered time-based) UUID.

Uses the same 60-bit UUID timestamp as version 1 but rearranges the
fields so the most-significant time bits come first, producing UUIDs
that sort lexicographically in chronological order.

@link https://www.rfc-editor.org/rfc/rfc9562

<div class="api-tree" markdown>

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
    - **`Phalcon\Encryption\Security\Uuid\Version6`** — implements [`Phalcon\Encryption\Security\Uuid\TimeBasedUuidInterface`](#encryptionsecurityuuidtimebaseduuidinterface)

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidversion6-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
<a class="api-item" href="#encryptionsecurityuuidversion6-getdatetime">
<code class="vis vis-public">public</code>
<code class="ret">\DateTimeImmutable</code>
<code class="sig">getDateTime()</code>
<span class="desc">Returns a DateTimeImmutable built from the UUID&#039;s embedded timestamp.</span>
</a>
<a class="api-item" href="#encryptionsecurityuuidversion6-getnode">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig">getNode()</code>
<span class="desc">Returns the 12-character hex node embedded in the UUID.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 3</div>

#### `__construct()` { #encryptionsecurityuuidversion6-__construct }

```php
public function __construct();
```

#### `getDateTime()` { #encryptionsecurityuuidversion6-getdatetime }

```php
public function getDateTime(): \DateTimeImmutable;
```

Returns a DateTimeImmutable built from the UUID's embedded timestamp.

#### `getNode()` { #encryptionsecurityuuidversion6-getnode }

```php
public function getNode(): string;
```

Returns the 12-character hex node embedded in the UUID.


## Encryption\Security\Uuid\Version7

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version7.zep){ .src-btn }

Generates a version 7 (Unix timestamp) UUID per RFC 9562.

Layout (128 bits):
  unix_ts_ms (48) | ver=7 (4) | rand_a (12) | var=10 (2) | rand_b (62)

@link https://www.rfc-editor.org/rfc/rfc9562

<div class="api-tree" markdown>

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
    - **`Phalcon\Encryption\Security\Uuid\Version7`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#encryptionsecurityuuidversion7-__construct">
<code class="vis vis-public">public</code>
<code class="sig">__construct()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `__construct()` { #encryptionsecurityuuidversion7-__construct }

```php
public function __construct();
```
