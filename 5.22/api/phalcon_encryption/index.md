---
title: "Phalcon Encryption"
version: "5.22"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Encryption

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Encryption\Crypt

Class

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

- **`Phalcon\Encryption\Crypt`** - implements [`Phalcon\Encryption\Crypt\CryptInterface`](#encryptioncryptcryptinterface)

`Phalcon\Contracts\Encryption\EncryptionTypes` · `Phalcon\Encryption\Crypt\CryptInterface` · `Phalcon\Encryption\Crypt\Exception\DecryptionFailed` · `Phalcon\Encryption\Crypt\Exception\EmptyDecryptionKey` · `Phalcon\Encryption\Crypt\Exception\EmptyEncryptionKey` · `Phalcon\Encryption\Crypt\Exception\EncryptionFailed` · `Phalcon\Encryption\Crypt\Exception\Exception` · `Phalcon\Encryption\Crypt\Exception\InvalidAuthTagLength` · `Phalcon\Encryption\Crypt\Exception\InvalidDecryptLength` · `Phalcon\Encryption\Crypt\Exception\InvalidPaddingSize` · `Phalcon\Encryption\Crypt\Exception\IvLengthCalculationFailed` · `Phalcon\Encryption\Crypt\Exception\Mismatch` · `Phalcon\Encryption\Crypt\Exception\MissingAuthData` · `Phalcon\Encryption\Crypt\Exception\MissingOpensslExtension` · `Phalcon\Encryption\Crypt\Exception\RandomBytesGenerationFailed` · `Phalcon\Encryption\Crypt\Exception\UnsupportedAlgorithm` · `Phalcon\Encryption\Crypt\PadFactory` · `Phalcon\Traits\Php\Base64Trait` · `Phalcon\Traits\Php\HashTrait` · `Phalcon\Traits\Php\InfoTrait` · `Phalcon\Traits\Php\OpensslTrait` · `Throwable`

### Method Summary

- `public __construct(string $cipher = self::DEFAULT_CIPHER, bool $useSigning = true, PadFactory|null $padFactory = null)` — Crypt constructor.

- `public decrypt(string $input, string|null $key = null): string` — Decrypts an encrypted text.

- `public decryptBase64(string $input, string|null $key = null, bool $safe = false): string` — Decrypt a text that is coded as a base64 string.

- `public encrypt(string $input, string|null $key = null): string` — Encrypts a text.

- `public encryptBase64(string $input, string|null $key = null, bool $safe = false): string` — Encrypts a text returning the result as a base64 string.

- `public getAuthData(): string` — Returns the auth data

- `public getAuthTag(): string` — Returns the auth tag

- `public getAuthTagLength(): int` — Returns the auth tag length

- `public getAvailableCiphers(): array` — Returns a list of available ciphers.

- `public getAvailableHashAlgorithms(): array` — Return a list of registered hashing algorithms suitable for hash\_hmac.

- `public getCipher(): string` — Returns the current cipher

- `public getHashAlgorithm(): string` — Get the name of hashing algorithm.

- `public getKey(): string` — Returns the encryption key

- `public isValidDecryptLength(string $input): bool` — Returns if the input length for decryption is valid or not

- `public setAuthData(string $data): CryptInterface`

- `public setAuthTag(string $tag): CryptInterface`

- `public setAuthTagLength(int $length): CryptInterface`

- `public setCipher(string $cipher): CryptInterface` — Sets the cipher algorithm for data encryption and decryption.

- `public setHashAlgorithm(string $hashAlgorithm): static` — Set the name of hashing algorithm.

- `public setKey(string $key): CryptInterface` — Sets the encryption key.

- `public setPadding(int $scheme): CryptInterface` — Changes the padding scheme used.

- `public useSigning(bool $useSigning): CryptInterface` — Sets if the calculating message digest must used.

- `protected checkCipherHashIsAvailable(string $cipher, string $type): void` — Checks if a cipher or a hash algorithm is available

- `protected cryptPadText(string $input, string $mode, int $blockSize, int $paddingType): string` — Pads texts before encryption. See

- `protected cryptUnpadText(string $input, string $mode, int $blockSize, int $paddingType): string` — Removes a padding from a text.

- `protected decryptGcmCcmAuth(string $mode, string $cipherText, string $decryptKey, string $iv): string`

- `protected decryptGetUnpadded(string $mode, int $blockSize, string $decrypted): string`

- `protected encryptGcmCcm(string $mode, string $padded, string $encryptKey, string $iv): string`

- `protected encryptGetPadded(string $mode, string $input, int $blockSize): string`

- `protected initializeAvailableCiphers(): static` — Initialize available cipher algorithms.

### Constants

- `const string DEFAULT_ALGORITHM = "sha256"`

- `const string DEFAULT_CIPHER = "aes-256-cfb"`

- `const int PADDING_ANSI_X_923 = 1` — Padding

- `const int PADDING_DEFAULT = 0`

- `const int PADDING_ISO_10126 = 3`

- `const int PADDING_ISO_IEC_7816_4 = 4`

- `const int PADDING_PKCS7 = 2`

- `const int PADDING_SPACE = 6`

- `const int PADDING_ZERO = 5`

### Properties

- `protected string $authData = ""`

- `protected string $authTag = ""`

- `protected int $authTagLength = 16`

- `protected array $availableCiphers = []` — Available cipher methods.

- `protected string $cipher = self::DEFAULT_CIPHER`

- `protected string $hashAlgorithm = self::DEFAULT_ALGORITHM` — The name of hashing algorithm.

- `protected array $hashLengthCache = []` — Memoized `strlen(hash($algo, "", true))` results, keyed by
  algorithm name. The hash output length is deterministic for a
  given algorithm, so this collapses the per-decrypt strlen+hash
  call to a single hash lookup after warm-up.

- `protected int $ivLength = 16` — The cipher iv length.

- `protected string $key = ""`

- `protected PadFactory $padFactory`

- `protected int $padding = 0`

- `protected bool $useSigning = true` — Whether calculating message digest enabled or not.

### Methods

<h4 id="encryptioncrypt-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $cipher = self::DEFAULT_CIPHER,
    bool $useSigning = true,
    PadFactory|null $padFactory = null
);
```

Crypt constructor.

<h4 id="encryptioncrypt-decrypt"><code>decrypt()</code></h4>

```php
public function decrypt(
    string $input,
    string|null $key = null
): string;
```

Decrypts an encrypted text.

```php
$encrypted = $crypt->decrypt(
    $encrypted,
    "T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3"
);
```

<h4 id="encryptioncrypt-decryptbase64"><code>decryptBase64()</code></h4>

```php
public function decryptBase64(
    string $input,
    string|null $key = null,
    bool $safe = false
): string;
```

Decrypt a text that is coded as a base64 string.

<h4 id="encryptioncrypt-encrypt"><code>encrypt()</code></h4>

```php
public function encrypt(
    string $input,
    string|null $key = null
): string;
```

Encrypts a text.

```php
$encrypted = $crypt->encrypt(
    "Top secret",
    "T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3"
);
```

<h4 id="encryptioncrypt-encryptbase64"><code>encryptBase64()</code></h4>

```php
public function encryptBase64(
    string $input,
    string|null $key = null,
    bool $safe = false
): string;
```

Encrypts a text returning the result as a base64 string.

<h4 id="encryptioncrypt-getauthdata"><code>getAuthData()</code></h4>

```php
public function getAuthData(): string;
```

Returns the auth data

<h4 id="encryptioncrypt-getauthtag"><code>getAuthTag()</code></h4>

```php
public function getAuthTag(): string;
```

Returns the auth tag

<h4 id="encryptioncrypt-getauthtaglength"><code>getAuthTagLength()</code></h4>

```php
public function getAuthTagLength(): int;
```

Returns the auth tag length

<h4 id="encryptioncrypt-getavailableciphers"><code>getAvailableCiphers()</code></h4>

```php
public function getAvailableCiphers(): array;
```

Returns a list of available ciphers.

<h4 id="encryptioncrypt-getavailablehashalgorithms"><code>getAvailableHashAlgorithms()</code></h4>

```php
public function getAvailableHashAlgorithms(): array;
```

Return a list of registered hashing algorithms suitable for hash_hmac.

<h4 id="encryptioncrypt-getcipher"><code>getCipher()</code></h4>

```php
public function getCipher(): string;
```

Returns the current cipher

<h4 id="encryptioncrypt-gethashalgorithm"><code>getHashAlgorithm()</code></h4>

```php
public function getHashAlgorithm(): string;
```

Get the name of hashing algorithm.

<h4 id="encryptioncrypt-getkey"><code>getKey()</code></h4>

```php
public function getKey(): string;
```

Returns the encryption key

<h4 id="encryptioncrypt-isvaliddecryptlength"><code>isValidDecryptLength()</code></h4>

```php
public function isValidDecryptLength( string $input ): bool;
```

Returns if the input length for decryption is valid or not
(number of bytes required by the cipher).

<h4 id="encryptioncrypt-setauthdata"><code>setAuthData()</code></h4>

```php
public function setAuthData( string $data ): CryptInterface;
```

<h4 id="encryptioncrypt-setauthtag"><code>setAuthTag()</code></h4>

```php
public function setAuthTag( string $tag ): CryptInterface;
```

<h4 id="encryptioncrypt-setauthtaglength"><code>setAuthTagLength()</code></h4>

```php
public function setAuthTagLength( int $length ): CryptInterface;
```

<h4 id="encryptioncrypt-setcipher"><code>setCipher()</code></h4>

```php
public function setCipher( string $cipher ): CryptInterface;
```

Sets the cipher algorithm for data encryption and decryption.

<h4 id="encryptioncrypt-sethashalgorithm"><code>setHashAlgorithm()</code></h4>

```php
public function setHashAlgorithm( string $hashAlgorithm ): static;
```

Set the name of hashing algorithm.

<h4 id="encryptioncrypt-setkey"><code>setKey()</code></h4>

```php
public function setKey( string $key ): CryptInterface;
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

<h4 id="encryptioncrypt-setpadding"><code>setPadding()</code></h4>

```php
public function setPadding( int $scheme ): CryptInterface;
```

Changes the padding scheme used.

<h4 id="encryptioncrypt-usesigning"><code>useSigning()</code></h4>

```php
public function useSigning( bool $useSigning ): CryptInterface;
```

Sets if the calculating message digest must used.

<h4 id="encryptioncrypt-checkcipherhashisavailable"><code>checkCipherHashIsAvailable()</code></h4>

```php
protected function checkCipherHashIsAvailable(
    string $cipher,
    string $type
): void;
```

Checks if a cipher or a hash algorithm is available

<h4 id="encryptioncrypt-cryptpadtext"><code>cryptPadText()</code></h4>

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

<h4 id="encryptioncrypt-cryptunpadtext"><code>cryptUnpadText()</code></h4>

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

<h4 id="encryptioncrypt-decryptgcmccmauth"><code>decryptGcmCcmAuth()</code></h4>

```php
protected function decryptGcmCcmAuth(
    string $mode,
    string $cipherText,
    string $decryptKey,
    string $iv
): string;
```

<h4 id="encryptioncrypt-decryptgetunpadded"><code>decryptGetUnpadded()</code></h4>

```php
protected function decryptGetUnpadded(
    string $mode,
    int $blockSize,
    string $decrypted
): string;
```

<h4 id="encryptioncrypt-encryptgcmccm"><code>encryptGcmCcm()</code></h4>

```php
protected function encryptGcmCcm(
    string $mode,
    string $padded,
    string $encryptKey,
    string $iv
): string;
```

<h4 id="encryptioncrypt-encryptgetpadded"><code>encryptGetPadded()</code></h4>

```php
protected function encryptGetPadded(
    string $mode,
    string $input,
    int $blockSize
): string;
```

<h4 id="encryptioncrypt-initializeavailableciphers"><code>initializeAvailableCiphers()</code></h4>

```php
protected function initializeAvailableCiphers(): static;
```

Initialize available cipher algorithms.


## Encryption\Crypt\CryptInterface

Interface

Interface for Phalcon\Encryption\Crypt

- [`Phalcon\Contracts\Encryption\Crypt\Crypt`](/5.22/api/phalcon_contracts/#contractsencryptioncryptcrypt)
  - **`Phalcon\Encryption\Crypt\CryptInterface`**

`Phalcon\Contracts\Encryption\Crypt\Crypt`


## Encryption\Crypt\Exception\DecryptionFailed

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\DecryptionFailed`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptiondecryptionfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\EmptyDecryptionKey

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\EmptyDecryptionKey`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptionemptydecryptionkey-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\EmptyEncryptionKey

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\EmptyEncryptionKey`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptionemptyencryptionkey-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\EncryptionFailed

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\EncryptionFailed`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptionencryptionfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\Exception

Class

Exceptions thrown in Phalcon\Encryption\Crypt use this class

- `\Exception`
  - **`Phalcon\Encryption\Crypt\Exception\Exception`**
    - [`Phalcon\Encryption\Crypt\Exception\DecryptionFailed`](#encryptioncryptexceptiondecryptionfailed)
    - [`Phalcon\Encryption\Crypt\Exception\EmptyDecryptionKey`](#encryptioncryptexceptionemptydecryptionkey)
    - [`Phalcon\Encryption\Crypt\Exception\EmptyEncryptionKey`](#encryptioncryptexceptionemptyencryptionkey)
    - [`Phalcon\Encryption\Crypt\Exception\EncryptionFailed`](#encryptioncryptexceptionencryptionfailed)
    - [`Phalcon\Encryption\Crypt\Exception\InvalidAuthTagLength`](#encryptioncryptexceptioninvalidauthtaglength)
    - [`Phalcon\Encryption\Crypt\Exception\InvalidDecryptLength`](#encryptioncryptexceptioninvaliddecryptlength)
    - [`Phalcon\Encryption\Crypt\Exception\InvalidPaddingSize`](#encryptioncryptexceptioninvalidpaddingsize)
    - [`Phalcon\Encryption\Crypt\Exception\IvLengthCalculationFailed`](#encryptioncryptexceptionivlengthcalculationfailed)
    - [`Phalcon\Encryption\Crypt\Exception\Mismatch`](#encryptioncryptexceptionmismatch)
    - [`Phalcon\Encryption\Crypt\Exception\MissingAuthData`](#encryptioncryptexceptionmissingauthdata)
    - [`Phalcon\Encryption\Crypt\Exception\MissingOpensslExtension`](#encryptioncryptexceptionmissingopensslextension)
    - [`Phalcon\Encryption\Crypt\Exception\RandomBytesGenerationFailed`](#encryptioncryptexceptionrandombytesgenerationfailed)
    - [`Phalcon\Encryption\Crypt\Exception\UnsupportedAlgorithm`](#encryptioncryptexceptionunsupportedalgorithm)


## Encryption\Crypt\Exception\InvalidAuthTagLength

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\InvalidAuthTagLength`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptioninvalidauthtaglength-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\InvalidDecryptLength

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\InvalidDecryptLength`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptioninvaliddecryptlength-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\InvalidPaddingSize

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\InvalidPaddingSize`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptioninvalidpaddingsize-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\IvLengthCalculationFailed

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\IvLengthCalculationFailed`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptionivlengthcalculationfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\Mismatch

Class

Exceptions thrown in Phalcon\Encryption\Crypt will use this class.

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\Mismatch`**


## Encryption\Crypt\Exception\MissingAuthData

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\MissingAuthData`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptionmissingauthdata-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\MissingOpensslExtension

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\MissingOpensslExtension`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptionmissingopensslextension-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\RandomBytesGenerationFailed

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\RandomBytesGenerationFailed`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptioncryptexceptionrandombytesgenerationfailed-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Crypt\Exception\UnsupportedAlgorithm

Class

- `\Exception`
  - [`Phalcon\Encryption\Crypt\Exception\Exception`](#encryptioncryptexceptionexception)
    - **`Phalcon\Encryption\Crypt\Exception\UnsupportedAlgorithm`**

### Method Summary

- `public __construct(string $type, string $cipher)`

### Methods

<h4 id="encryptioncryptexceptionunsupportedalgorithm-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $type,
    string $cipher
);
```


## Encryption\Crypt\PadFactory

Class

Factory for creating pad classes

- [`Phalcon\Factory\AbstractConfigFactory`](/5.22/api/phalcon_factory/#factoryabstractconfigfactory)
  - [`Phalcon\Factory\AbstractFactory`](/5.22/api/phalcon_factory/#factoryabstractfactory)
    - **`Phalcon\Encryption\Crypt\PadFactory`**

`Exception` · `Phalcon\Encryption\Crypt` · `Phalcon\Encryption\Crypt\Exception\Exception` · `Phalcon\Encryption\Crypt\Padding\Ansi` · `Phalcon\Encryption\Crypt\Padding\Iso10126` · `Phalcon\Encryption\Crypt\Padding\IsoIek` · `Phalcon\Encryption\Crypt\Padding\Noop` · `Phalcon\Encryption\Crypt\Padding\PadInterface` · `Phalcon\Encryption\Crypt\Padding\Pkcs7` · `Phalcon\Encryption\Crypt\Padding\Space` · `Phalcon\Encryption\Crypt\Padding\Zero` · `Phalcon\Factory\AbstractFactory`

### Method Summary

- `public __construct(array $services = [])` — AdapterFactory constructor.

- `public newInstance(string $name): PadInterface` — Create a new instance of the adapter

- `public padNumberToService(int $number): string` — Gets a Crypt pad constant and returns the unique service name for the

- `protected getExceptionClass(): string`

- `protected getServices(): array`

### Methods

<h4 id="encryptioncryptpadfactory-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $services = [] );
```

AdapterFactory constructor.

<h4 id="encryptioncryptpadfactory-newinstance"><code>newInstance()</code></h4>

```php
public function newInstance( string $name ): PadInterface;
```

Create a new instance of the adapter

<h4 id="encryptioncryptpadfactory-padnumbertoservice"><code>padNumberToService()</code></h4>

```php
public function padNumberToService( int $number ): string;
```

Gets a Crypt pad constant and returns the unique service name for the
padding class

<h4 id="encryptioncryptpadfactory-getexceptionclass"><code>getExceptionClass()</code></h4>

```php
protected function getExceptionClass(): string;
```

<h4 id="encryptioncryptpadfactory-getservices"><code>getServices()</code></h4>

```php
protected function getServices(): array;
```


## Encryption\Crypt\Padding\Ansi

Class

Padding based on Ansi

- **`Phalcon\Encryption\Crypt\Padding\Ansi`** - implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

### Method Summary

- `public pad(int $paddingSize): string`

- `public unpad(string $input, int $blockSize): int`

### Methods

<h4 id="encryptioncryptpaddingansi-pad"><code>pad()</code></h4>

```php
public function pad( int $paddingSize ): string;
```

<h4 id="encryptioncryptpaddingansi-unpad"><code>unpad()</code></h4>

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\Iso10126

Class

Padding based on ISO10126

- **`Phalcon\Encryption\Crypt\Padding\Iso10126`** - implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

### Method Summary

- `public pad(int $paddingSize): string`

- `public unpad(string $input, int $blockSize): int`

### Methods

<h4 id="encryptioncryptpaddingiso10126-pad"><code>pad()</code></h4>

```php
public function pad( int $paddingSize ): string;
```

<h4 id="encryptioncryptpaddingiso10126-unpad"><code>unpad()</code></h4>

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\IsoIek

Class

Padding based on ISO-IEK

- **`Phalcon\Encryption\Crypt\Padding\IsoIek`** - implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

### Method Summary

- `public pad(int $paddingSize): string`

- `public unpad(string $input, int $blockSize): int`

### Methods

<h4 id="encryptioncryptpaddingisoiek-pad"><code>pad()</code></h4>

```php
public function pad( int $paddingSize ): string;
```

<h4 id="encryptioncryptpaddingisoiek-unpad"><code>unpad()</code></h4>

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\Noop

Class

No padding adapter

- **`Phalcon\Encryption\Crypt\Padding\Noop`** - implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

### Method Summary

- `public pad(int $paddingSize): string`

- `public unpad(string $input, int $blockSize): int`

### Methods

<h4 id="encryptioncryptpaddingnoop-pad"><code>pad()</code></h4>

```php
public function pad( int $paddingSize ): string;
```

<h4 id="encryptioncryptpaddingnoop-unpad"><code>unpad()</code></h4>

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\PadInterface

Interface

Interface for Phalcon\Encryption\Crypt\Padding

- [`Phalcon\Contracts\Encryption\Crypt\Padding\Pad`](/5.22/api/phalcon_contracts/#contractsencryptioncryptpaddingpad)
  - **`Phalcon\Encryption\Crypt\Padding\PadInterface`**

`Phalcon\Contracts\Encryption\Crypt\Padding\Pad`


## Encryption\Crypt\Padding\Pkcs7

Class

Padding based on Pkcs7

- **`Phalcon\Encryption\Crypt\Padding\Pkcs7`** - implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

### Method Summary

- `public pad(int $paddingSize): string`

- `public unpad(string $input, int $blockSize): int`

### Methods

<h4 id="encryptioncryptpaddingpkcs7-pad"><code>pad()</code></h4>

```php
public function pad( int $paddingSize ): string;
```

<h4 id="encryptioncryptpaddingpkcs7-unpad"><code>unpad()</code></h4>

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\Space

Class

Padding based on spaces

- **`Phalcon\Encryption\Crypt\Padding\Space`** - implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

### Method Summary

- `public pad(int $paddingSize): string`

- `public unpad(string $input, int $blockSize): int`

### Methods

<h4 id="encryptioncryptpaddingspace-pad"><code>pad()</code></h4>

```php
public function pad( int $paddingSize ): string;
```

<h4 id="encryptioncryptpaddingspace-unpad"><code>unpad()</code></h4>

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Crypt\Padding\Zero

Class

Padding based on Zeros

- **`Phalcon\Encryption\Crypt\Padding\Zero`** - implements [`Phalcon\Encryption\Crypt\Padding\PadInterface`](#encryptioncryptpaddingpadinterface)

### Method Summary

- `public pad(int $paddingSize): string`

- `public unpad(string $input, int $blockSize): int`

### Methods

<h4 id="encryptioncryptpaddingzero-pad"><code>pad()</code></h4>

```php
public function pad( int $paddingSize ): string;
```

<h4 id="encryptioncryptpaddingzero-unpad"><code>unpad()</code></h4>

```php
public function unpad(
    string $input,
    int $blockSize
): int;
```


## Encryption\Security

Class

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

- `\stdClass`
  - [`Phalcon\Di\AbstractInjectionAware`](/5.22/api/phalcon_di/#diabstractinjectionaware)
    - **`Phalcon\Encryption\Security`** - implements [`Phalcon\Contracts\Encryption\Security\Security`](/5.22/api/phalcon_contracts/#contractsencryptionsecuritysecurity)

`Phalcon\Contracts\Encryption\EncryptionTypes` · `Phalcon\Contracts\Encryption\Security\Security` · `Phalcon\Di\AbstractInjectionAware` · `Phalcon\Di\DiInterface` · `Phalcon\Encryption\Security\Exception` · `Phalcon\Encryption\Security\Exceptions\UnknownHashAlgorithm` · `Phalcon\Encryption\Security\Random` · `Phalcon\Http\RequestInterface` · `Phalcon\Session\ManagerInterface` · `Phalcon\Traits\Php\HashTrait` · `ValueError`

### Method Summary

- `public __construct(SessionInterface|null $session = null, RequestInterface|null $request = null)` — Security constructor.

- `public checkHash(string $password, string $passwordHash, int $maxPassLength = 0): bool` — Checks a plain text password and its hash version to check if the

- `public checkToken(string|null $tokenKey = null, mixed $tokenValue = null, bool $destroyIfValid = true): bool` — Check if the CSRF token sent in the request is the same that the current

- `public computeHmac(string $data, string $key, string $algorithm, bool $raw = false): string` — Computes a HMAC

- `public destroyToken(): static` — Removes the value of the CSRF token and key from session

- `public getDefaultHash(): int` — Returns the default hash

- `public getHashInformation(string $hash): array` — Returns information regarding a hash

- `public getRandom(): Random` — Returns a secure random number generator instance

- `public getRandomBytes(): int` — Returns a number of bytes to be generated by the openssl pseudo random

- `public getRequestToken(): string|null` — Returns the value of the CSRF token for the current request.

- `public getSaltBytes(int $numberBytes = 0): string` — Generate a >22-length pseudo random string to be used as salt for

- `public getSessionToken(): string|null` — Returns the value of the CSRF token in session

- `public getToken(): string|null` — Generates a pseudo random token value to be used as input's value in a

- `public getTokenKey(): string|null` — Generates a pseudo random token key to be used as input's name in a CSRF

- `public getWorkFactor(): int`

- `public hash(string $password, array $options = []): string` — Creates a password hash using bcrypt with a pseudo random salt

- `public isLegacyHash(string $passwordHash): bool` — Checks if a password hash is a valid bcrypt's hash

- `public refreshToken(): static` — Forces the regeneration of the CSRF token and key, writing the new

- `public setAutoRefresh(bool $autoRefresh): static` — Toggles automatic regeneration of the CSRF token on every call to

- `public setDefaultHash(int $defaultHash): static` — Sets the default hash

- `public setRandomBytes(int $randomBytes): static` — Sets a number of bytes to be generated by the openssl pseudo random

- `public setWorkFactor(int $workFactor): static` — Sets the work factor

- `protected getLocalService(string $name, string $property)`

### Constants

- `const int CRYPT_ARGON2I = 10`

- `const int CRYPT_ARGON2ID = 11`

- `const int CRYPT_BCRYPT = 0`

- `const int CRYPT_BLOWFISH = 4`

- `const int CRYPT_BLOWFISH_A = 5`

- `const int CRYPT_BLOWFISH_X = 6`

- `const int CRYPT_BLOWFISH_Y = 7`

- `const int CRYPT_DEFAULT = 0`

- `const int CRYPT_EXT_DES = 2`

- `const int CRYPT_MD5 = 3` — Weak legacy algorithm, easier to brute-force than bcrypt or Argon2. Use
  `CRYPT_DEFAULT` (bcrypt) or the Argon2 algorithms and rehash stored
  passwords on login. To be removed in a future major version.

- `const int CRYPT_SHA256 = 8` — Weak legacy algorithm, easier to brute-force than bcrypt or Argon2. Use
  `CRYPT_DEFAULT` (bcrypt) or the Argon2 algorithms and rehash stored
  passwords on login. To be removed in a future major version.

- `const int CRYPT_SHA512 = 9` — Weak legacy algorithm, easier to brute-force than bcrypt or Argon2. Use
  `CRYPT_DEFAULT` (bcrypt) or the Argon2 algorithms and rehash stored
  passwords on login. To be removed in a future major version.

- `const int CRYPT_STD_DES = 1`

### Properties

- `protected bool $autoRefresh = true`

- `protected int $defaultHash = self::CRYPT_DEFAULT`

- `protected int $numberBytes = 16`

- `protected Random $random`

- `protected string|null $requestToken = null`

- `protected string|null $token = null`

- `protected string|null $tokenKey = null`

- `protected string $tokenKeySessionId = "$PHALCON/CSRF/KEY$"`

- `protected string $tokenValueSessionId = "$PHALCON/CSRF$"`

- `protected int $workFactor = 10`

### Methods

<h4 id="encryptionsecurity-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    SessionInterface|null $session = null,
    RequestInterface|null $request = null
);
```

Security constructor.

<h4 id="encryptionsecurity-checkhash"><code>checkHash()</code></h4>

```php
public function checkHash(
    string $password,
    string $passwordHash,
    int $maxPassLength = 0
): bool;
```

Checks a plain text password and its hash version to check if the
password matches

<h4 id="encryptionsecurity-checktoken"><code>checkToken()</code></h4>

```php
public function checkToken(
    string|null $tokenKey = null,
    mixed $tokenValue = null,
    bool $destroyIfValid = true
): bool;
```

Check if the CSRF token sent in the request is the same that the current
in session

<h4 id="encryptionsecurity-computehmac"><code>computeHmac()</code></h4>

```php
public function computeHmac(
    string $data,
    string $key,
    string $algorithm,
    bool $raw = false
): string;
```

Computes a HMAC

<h4 id="encryptionsecurity-destroytoken"><code>destroyToken()</code></h4>

```php
public function destroyToken(): static;
```

Removes the value of the CSRF token and key from session

<h4 id="encryptionsecurity-getdefaulthash"><code>getDefaultHash()</code></h4>

```php
public function getDefaultHash(): int;
```

Returns the default hash

<h4 id="encryptionsecurity-gethashinformation"><code>getHashInformation()</code></h4>

```php
public function getHashInformation( string $hash ): array;
```

Returns information regarding a hash

<h4 id="encryptionsecurity-getrandom"><code>getRandom()</code></h4>

```php
public function getRandom(): Random;
```

Returns a secure random number generator instance

<h4 id="encryptionsecurity-getrandombytes"><code>getRandomBytes()</code></h4>

```php
public function getRandomBytes(): int;
```

Returns a number of bytes to be generated by the openssl pseudo random
generator

<h4 id="encryptionsecurity-getrequesttoken"><code>getRequestToken()</code></h4>

```php
public function getRequestToken(): string|null;
```

Returns the value of the CSRF token for the current request.

<h4 id="encryptionsecurity-getsaltbytes"><code>getSaltBytes()</code></h4>

```php
public function getSaltBytes( int $numberBytes = 0 ): string;
```

Generate a >22-length pseudo random string to be used as salt for
passwords

<h4 id="encryptionsecurity-getsessiontoken"><code>getSessionToken()</code></h4>

```php
public function getSessionToken(): string|null;
```

Returns the value of the CSRF token in session

<h4 id="encryptionsecurity-gettoken"><code>getToken()</code></h4>

```php
public function getToken(): string|null;
```

Generates a pseudo random token value to be used as input's value in a
CSRF check

<h4 id="encryptionsecurity-gettokenkey"><code>getTokenKey()</code></h4>

```php
public function getTokenKey(): string|null;
```

Generates a pseudo random token key to be used as input's name in a CSRF
check

<h4 id="encryptionsecurity-getworkfactor"><code>getWorkFactor()</code></h4>

```php
public function getWorkFactor(): int;
```

<h4 id="encryptionsecurity-hash"><code>hash()</code></h4>

```php
public function hash(
    string $password,
    array $options = []
): string;
```

Creates a password hash using bcrypt with a pseudo random salt

Any `defaultHash` value that is not explicitly handled (including the
deprecated, unimplemented constants) resolves to bcrypt.

<h4 id="encryptionsecurity-islegacyhash"><code>isLegacyHash()</code></h4>

```php
public function isLegacyHash( string $passwordHash ): bool;
```

Checks if a password hash is a valid bcrypt's hash

<h4 id="encryptionsecurity-refreshtoken"><code>refreshToken()</code></h4>

```php
public function refreshToken(): static;
```

Forces the regeneration of the CSRF token and key, writing the new
values to the session even when auto-refresh has been disabled. Useful
after a successful login or any other state change where rotating the
token is appropriate.

<h4 id="encryptionsecurity-setautorefresh"><code>setAutoRefresh()</code></h4>

```php
public function setAutoRefresh( bool $autoRefresh ): static;
```

Toggles automatic regeneration of the CSRF token on every call to
`getToken()` / `getTokenKey()`. When set to `false`, existing session
values are reused (no session write), and a new token is only minted
when none is present or `refreshToken()` is called explicitly.

<h4 id="encryptionsecurity-setdefaulthash"><code>setDefaultHash()</code></h4>

```php
public function setDefaultHash( int $defaultHash ): static;
```

Sets the default hash

<h4 id="encryptionsecurity-setrandombytes"><code>setRandomBytes()</code></h4>

```php
public function setRandomBytes( int $randomBytes ): static;
```

Sets a number of bytes to be generated by the openssl pseudo random
generator

<h4 id="encryptionsecurity-setworkfactor"><code>setWorkFactor()</code></h4>

```php
public function setWorkFactor( int $workFactor ): static;
```

Sets the work factor

<h4 id="encryptionsecurity-getlocalservice"><code>getLocalService()</code></h4>

```php
protected function getLocalService(
    string $name,
    string $property
);
```


## Encryption\Security\Exception

Class

Phalcon\Encryption\Security\Exception

Exceptions thrown in Phalcon\Security will use this class

- `\Exception`
  - **`Phalcon\Encryption\Security\Exception`**
    - [`Phalcon\Encryption\Security\Exceptions\InvalidRandomInput`](#encryptionsecurityexceptionsinvalidrandominput)
    - [`Phalcon\Encryption\Security\Exceptions\UnknownHashAlgorithm`](#encryptionsecurityexceptionsunknownhashalgorithm)


## Encryption\Security\Exceptions\InvalidRandomInput

Class

- `\Exception`
  - [`Phalcon\Encryption\Security\Exception`](#encryptionsecurityexception)
    - **`Phalcon\Encryption\Security\Exceptions\InvalidRandomInput`**

`Phalcon\Encryption\Security\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityexceptionsinvalidrandominput-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\Exceptions\UnknownHashAlgorithm

Class

- `\Exception`
  - [`Phalcon\Encryption\Security\Exception`](#encryptionsecurityexception)
    - **`Phalcon\Encryption\Security\Exceptions\UnknownHashAlgorithm`**

`Phalcon\Encryption\Security\Exception`

### Method Summary

- `public __construct(string $algo)`

### Methods

<h4 id="encryptionsecurityexceptionsunknownhashalgorithm-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $algo );
```


## Encryption\Security\JWT\Builder

Class

JWT Builder

@link https://tools.ietf.org/html/rfc7519

- **`Phalcon\Encryption\Security\JWT\Builder`**

`Phalcon\Contracts\Encryption\EncryptionTypes` · `Phalcon\Encryption\Security\JWT\Exceptions\EmptyPassphrase` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudience` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidExpirationTime` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidNotBefore` · `Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException` · `Phalcon\Encryption\Security\JWT\Exceptions\WeakPassphrase` · `Phalcon\Encryption\Security\JWT\Signer\SignerInterface` · `Phalcon\Encryption\Security\JWT\Token\Enum` · `Phalcon\Encryption\Security\JWT\Token\Item` · `Phalcon\Encryption\Security\JWT\Token\Signature` · `Phalcon\Encryption\Security\JWT\Token\Token` · `Phalcon\Support\Collection` · `Phalcon\Support\Collection\CollectionInterface` · `Phalcon\Support\Helper\Json\Encode` · `Phalcon\Traits\Php\Base64Trait`

### Method Summary

- `public __construct(SignerInterface $signer)` — Builder constructor.

- `public addClaim(string $name, mixed $value): static` — Adds a custom claim

- `public addHeader(string $name, mixed $value): static` — Adds a custom claim

- `public getAudience()`

- `public getClaims(): array`

- `public getContentType(): string|null`

- `public getExpirationTime(): int|null`

- `public getHeaders(): array`

- `public getId(): string|null`

- `public getIssuedAt(): int|null`

- `public getIssuer(): string|null`

- `public getNotBefore(): int|null`

- `public getPassphrase(): string`

- `public getSubject(): string|null`

- `public getToken(): Token`

- `public init(): static`

- `public setAudience(mixed $audience): static` — The "aud" (audience) claim identifies the recipients that the JWT is

- `public setContentType(string $contentType): static` — Sets the content type header 'cty'

- `public setExpirationTime(int $timestamp): static` — The "exp" (expiration time) claim identifies the expiration time on

- `public setId(string $jwtId): static` — The "jti" (JWT ID) claim provides a unique identifier for the JWT.

- `public setIssuedAt(int $timestamp): static` — The "iat" (issued at) claim identifies the time at which the JWT was

- `public setIssuer(string $issuer): static` — The "iss" (issuer) claim identifies the principal that issued the

- `public setNotBefore(int $timestamp): static` — The "nbf" (not before) claim identifies the time before which the JWT

- `public setPassphrase(string $passphrase): static`

- `public setSubject(string $subject): static` — The "sub" (subject) claim identifies the principal that is the

- `protected setClaim(string $name, mixed $value): Builder` — Sets a registered claim

### Methods

<h4 id="encryptionsecurityjwtbuilder-__construct"><code>__construct()</code></h4>

```php
public function __construct( SignerInterface $signer );
```

Builder constructor.

<h4 id="encryptionsecurityjwtbuilder-addclaim"><code>addClaim()</code></h4>

```php
public function addClaim(
    string $name,
    mixed $value
): static;
```

Adds a custom claim

<h4 id="encryptionsecurityjwtbuilder-addheader"><code>addHeader()</code></h4>

```php
public function addHeader(
    string $name,
    mixed $value
): static;
```

Adds a custom claim

<h4 id="encryptionsecurityjwtbuilder-getaudience"><code>getAudience()</code></h4>

```php
public function getAudience();
```

<h4 id="encryptionsecurityjwtbuilder-getclaims"><code>getClaims()</code></h4>

```php
public function getClaims(): array;
```

<h4 id="encryptionsecurityjwtbuilder-getcontenttype"><code>getContentType()</code></h4>

```php
public function getContentType(): string|null;
```

<h4 id="encryptionsecurityjwtbuilder-getexpirationtime"><code>getExpirationTime()</code></h4>

```php
public function getExpirationTime(): int|null;
```

<h4 id="encryptionsecurityjwtbuilder-getheaders"><code>getHeaders()</code></h4>

```php
public function getHeaders(): array;
```

<h4 id="encryptionsecurityjwtbuilder-getid"><code>getId()</code></h4>

```php
public function getId(): string|null;
```

<h4 id="encryptionsecurityjwtbuilder-getissuedat"><code>getIssuedAt()</code></h4>

```php
public function getIssuedAt(): int|null;
```

<h4 id="encryptionsecurityjwtbuilder-getissuer"><code>getIssuer()</code></h4>

```php
public function getIssuer(): string|null;
```

<h4 id="encryptionsecurityjwtbuilder-getnotbefore"><code>getNotBefore()</code></h4>

```php
public function getNotBefore(): int|null;
```

<h4 id="encryptionsecurityjwtbuilder-getpassphrase"><code>getPassphrase()</code></h4>

```php
public function getPassphrase(): string;
```

<h4 id="encryptionsecurityjwtbuilder-getsubject"><code>getSubject()</code></h4>

```php
public function getSubject(): string|null;
```

<h4 id="encryptionsecurityjwtbuilder-gettoken"><code>getToken()</code></h4>

```php
public function getToken(): Token;
```

<h4 id="encryptionsecurityjwtbuilder-init"><code>init()</code></h4>

```php
public function init(): static;
```

<h4 id="encryptionsecurityjwtbuilder-setaudience"><code>setAudience()</code></h4>

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

<h4 id="encryptionsecurityjwtbuilder-setcontenttype"><code>setContentType()</code></h4>

```php
public function setContentType( string $contentType ): static;
```

Sets the content type header 'cty'

<h4 id="encryptionsecurityjwtbuilder-setexpirationtime"><code>setExpirationTime()</code></h4>

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

<h4 id="encryptionsecurityjwtbuilder-setid"><code>setId()</code></h4>

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

<h4 id="encryptionsecurityjwtbuilder-setissuedat"><code>setIssuedAt()</code></h4>

```php
public function setIssuedAt( int $timestamp ): static;
```

The "iat" (issued at) claim identifies the time at which the JWT was
issued.  This claim can be used to determine the age of the JWT.  Its
value MUST be a number containing a NumericDate value.  Use of this
claim is OPTIONAL.

<h4 id="encryptionsecurityjwtbuilder-setissuer"><code>setIssuer()</code></h4>

```php
public function setIssuer( string $issuer ): static;
```

The "iss" (issuer) claim identifies the principal that issued the
JWT.  The processing of this claim is generally application specific.
The "iss" value is a case-sensitive string containing a StringOrURI
value.  Use of this claim is OPTIONAL.

<h4 id="encryptionsecurityjwtbuilder-setnotbefore"><code>setNotBefore()</code></h4>

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

<h4 id="encryptionsecurityjwtbuilder-setpassphrase"><code>setPassphrase()</code></h4>

```php
public function setPassphrase( string $passphrase ): static;
```

<h4 id="encryptionsecurityjwtbuilder-setsubject"><code>setSubject()</code></h4>

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

<h4 id="encryptionsecurityjwtbuilder-setclaim"><code>setClaim()</code></h4>

```php
protected function setClaim(
    string $name,
    mixed $value
): Builder;
```

Sets a registered claim


## Encryption\Security\JWT\Exceptions\EmptyPassphrase

Class

- `\Exception`
  - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
    - **`Phalcon\Encryption\Security\JWT\Exceptions\EmptyPassphrase`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsemptypassphrase-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidAudience

Class

- `\Exception`
  - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
    - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudience`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsinvalidaudience-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidAudienceType

Class

- `\Exception`
  - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
    - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudienceType`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsinvalidaudiencetype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidClaims

Class

- `\InvalidArgumentException`
  - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidClaims`**

`InvalidArgumentException`

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsinvalidclaims-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidExpirationTime

Class

- `\Exception`
  - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
    - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidExpirationTime`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsinvalidexpirationtime-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidHeader

Class

- `\InvalidArgumentException`
  - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidHeader`**

`InvalidArgumentException`

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsinvalidheader-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\InvalidNotBefore

Class

- `\Exception`
  - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
    - **`Phalcon\Encryption\Security\JWT\Exceptions\InvalidNotBefore`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsinvalidnotbefore-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\MalformedJwtString

Class

- `\InvalidArgumentException`
  - **`Phalcon\Encryption\Security\JWT\Exceptions\MalformedJwtString`**

`InvalidArgumentException`

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsmalformedjwtstring-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\MissingJwtTypHeader

Class

- `\InvalidArgumentException`
  - **`Phalcon\Encryption\Security\JWT\Exceptions\MissingJwtTypHeader`**

`InvalidArgumentException`

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsmissingjwttypheader-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\UnsupportedAlgorithmException

Class

Exception thrown when the algorithm is not supported for JWT

- `\Exception`
  - **`Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedAlgorithmException`**
    - [`Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedHmacAlgorithm`](#encryptionsecurityjwtexceptionsunsupportedhmacalgorithm)

`Exception`


## Encryption\Security\JWT\Exceptions\UnsupportedHmacAlgorithm

Class

- `\Exception`
  - [`Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedAlgorithmException`](#encryptionsecurityjwtexceptionsunsupportedalgorithmexception)
    - **`Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedHmacAlgorithm`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsunsupportedhmacalgorithm-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Exceptions\ValidatorException

Class

Exception thrown when the validation does not pass for JWT

- `\Exception`
  - **`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`**
    - [`Phalcon\Encryption\Security\JWT\Exceptions\EmptyPassphrase`](#encryptionsecurityjwtexceptionsemptypassphrase)
    - [`Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudience`](#encryptionsecurityjwtexceptionsinvalidaudience)
    - [`Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudienceType`](#encryptionsecurityjwtexceptionsinvalidaudiencetype)
    - [`Phalcon\Encryption\Security\JWT\Exceptions\InvalidExpirationTime`](#encryptionsecurityjwtexceptionsinvalidexpirationtime)
    - [`Phalcon\Encryption\Security\JWT\Exceptions\InvalidNotBefore`](#encryptionsecurityjwtexceptionsinvalidnotbefore)
    - [`Phalcon\Encryption\Security\JWT\Exceptions\WeakPassphrase`](#encryptionsecurityjwtexceptionsweakpassphrase)

`Exception`


## Encryption\Security\JWT\Exceptions\WeakPassphrase

Class

- `\Exception`
  - [`Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`](#encryptionsecurityjwtexceptionsvalidatorexception)
    - **`Phalcon\Encryption\Security\JWT\Exceptions\WeakPassphrase`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityjwtexceptionsweakpassphrase-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\JWT\Signer\AbstractSigner

Abstract

Abstract class helping with the signer classes

- **`Phalcon\Encryption\Security\JWT\Signer\AbstractSigner`** - implements [`Phalcon\Encryption\Security\JWT\Signer\SignerInterface`](#encryptionsecurityjwtsignersignerinterface)
  - [`Phalcon\Encryption\Security\JWT\Signer\Hmac`](#encryptionsecurityjwtsignerhmac)

### Method Summary

- `public getAlgorithm(): string`

### Properties

- `protected string $algorithm = ""`

### Methods

<h4 id="encryptionsecurityjwtsignerabstractsigner-getalgorithm"><code>getAlgorithm()</code></h4>

```php
public function getAlgorithm(): string;
```


## Encryption\Security\JWT\Signer\Hmac

Class

HMAC signing class

- [`Phalcon\Encryption\Security\JWT\Signer\AbstractSigner`](#encryptionsecurityjwtsignerabstractsigner)
  - **`Phalcon\Encryption\Security\JWT\Signer\Hmac`**

`Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedAlgorithmException` · `Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedHmacAlgorithm` · `Phalcon\Traits\Php\HashTrait`

### Method Summary

- `public __construct(string $algo = "sha512")` — Hmac constructor.

- `public getAlgHeader(): string` — Return the value that is used for the "alg" header

- `public sign(string $payload, string $passphrase): string` — Sign a payload using the passphrase

- `public verify(string $source, string $payload, string $passphrase): bool` — Verify a passed source with a payload and passphrase

### Methods

<h4 id="encryptionsecurityjwtsignerhmac-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $algo = "sha512" );
```

Hmac constructor.

<h4 id="encryptionsecurityjwtsignerhmac-getalgheader"><code>getAlgHeader()</code></h4>

```php
public function getAlgHeader(): string;
```

Return the value that is used for the "alg" header

<h4 id="encryptionsecurityjwtsignerhmac-sign"><code>sign()</code></h4>

```php
public function sign(
    string $payload,
    string $passphrase
): string;
```

Sign a payload using the passphrase

<h4 id="encryptionsecurityjwtsignerhmac-verify"><code>verify()</code></h4>

```php
public function verify(
    string $source,
    string $payload,
    string $passphrase
): bool;
```

Verify a passed source with a payload and passphrase


## Encryption\Security\JWT\Signer\None

Class

No signing class

- **`Phalcon\Encryption\Security\JWT\Signer\None`** - implements [`Phalcon\Encryption\Security\JWT\Signer\SignerInterface`](#encryptionsecurityjwtsignersignerinterface)

### Method Summary

- `public getAlgHeader(): string` — Return the value that is used for the "alg" header

- `public getAlgorithm(): string` — Return the algorithm used

- `public sign(string $payload, string $passphrase): string` — Sign a payload using the passphrase

- `public verify(string $source, string $payload, string $passphrase): bool` — Verify a passed source with a payload and passphrase

### Methods

<h4 id="encryptionsecurityjwtsignernone-getalgheader"><code>getAlgHeader()</code></h4>

```php
public function getAlgHeader(): string;
```

Return the value that is used for the "alg" header

<h4 id="encryptionsecurityjwtsignernone-getalgorithm"><code>getAlgorithm()</code></h4>

```php
public function getAlgorithm(): string;
```

Return the algorithm used

<h4 id="encryptionsecurityjwtsignernone-sign"><code>sign()</code></h4>

```php
public function sign(
    string $payload,
    string $passphrase
): string;
```

Sign a payload using the passphrase

<h4 id="encryptionsecurityjwtsignernone-verify"><code>verify()</code></h4>

```php
public function verify(
    string $source,
    string $payload,
    string $passphrase
): bool;
```

Verify a passed source with a payload and passphrase


## Encryption\Security\JWT\Signer\SignerInterface

Interface

Interface for JWT Signer classes

- [`Phalcon\Contracts\Encryption\Security\JWT\Signer\Signer`](/5.22/api/phalcon_contracts/#contractsencryptionsecurityjwtsignersigner)
  - **`Phalcon\Encryption\Security\JWT\Signer\SignerInterface`**

`Phalcon\Contracts\Encryption\Security\JWT\Signer\Signer`


## Encryption\Security\JWT\Token\AbstractItem

Abstract

Abstract helper class for Tokens

- **`Phalcon\Encryption\Security\JWT\Token\AbstractItem`**
  - [`Phalcon\Encryption\Security\JWT\Token\Item`](#encryptionsecurityjwttokenitem)
  - [`Phalcon\Encryption\Security\JWT\Token\Signature`](#encryptionsecurityjwttokensignature)

`Phalcon\Contracts\Encryption\EncryptionTypes`

### Method Summary

- `public getEncoded(): string`

### Properties

- `protected array $data = []`

### Methods

<h4 id="encryptionsecurityjwttokenabstractitem-getencoded"><code>getEncoded()</code></h4>

```php
public function getEncoded(): string;
```


## Encryption\Security\JWT\Token\Enum

Class

Constants for Tokens. It offers constants for Headers as well as Claims

@link https://tools.ietf.org/html/rfc7519

- **`Phalcon\Encryption\Security\JWT\Token\Enum`**

### Constants

- `const string ALGO = "alg"`

- `const string AUDIENCE = "aud"` — Claims

- `const string CONTENT_TYPE = "cty"`

- `const string EXPIRATION_TIME = "exp"`

- `const string ID = "jti"`

- `const string ISSUED_AT = "iat"`

- `const string ISSUER = "iss"`

- `const string NOT_BEFORE = "nbf"`

- `const string SUBJECT = "sub"`

- `const string TYPE = "typ"` — Headers


## Encryption\Security\JWT\Token\Item

Class

Storage class for a Token Item

- [`Phalcon\Encryption\Security\JWT\Token\AbstractItem`](#encryptionsecurityjwttokenabstractitem)
  - **`Phalcon\Encryption\Security\JWT\Token\Item`**

`Phalcon\Contracts\Encryption\EncryptionTypes`

### Method Summary

- `public __construct(array $payload, string $encoded)` — Item constructor.

- `public get(string $name, mixed $defaultValue = null): mixed|null`

- `public getPayload(): array`

- `public has(string $name): bool`

### Methods

<h4 id="encryptionsecurityjwttokenitem-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    array $payload,
    string $encoded
);
```

Item constructor.

<h4 id="encryptionsecurityjwttokenitem-get"><code>get()</code></h4>

```php
public function get(
    string $name,
    mixed $defaultValue = null
): mixed|null;
```

<h4 id="encryptionsecurityjwttokenitem-getpayload"><code>getPayload()</code></h4>

```php
public function getPayload(): array;
```

<h4 id="encryptionsecurityjwttokenitem-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```


## Encryption\Security\JWT\Token\Parser

Class

Token Parser class.

It parses a token by validating if it is formed properly and splits it into
three parts. The headers are decoded, then the claims and finally the
signature. It returns a token object populated with the decoded information.

- **`Phalcon\Encryption\Security\JWT\Token\Parser`**

`InvalidArgumentException` · `Phalcon\Contracts\Encryption\EncryptionTypes` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidClaims` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidHeader` · `Phalcon\Encryption\Security\JWT\Exceptions\MalformedJwtString` · `Phalcon\Encryption\Security\JWT\Exceptions\MissingJwtTypHeader` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Traits\Php\Base64Trait`

### Method Summary

- `public __construct(Decode|null $decode = null)`

- `public parse(string $token): Token` — Parse a token and return it

### Methods

<h4 id="encryptionsecurityjwttokenparser-__construct"><code>__construct()</code></h4>

```php
public function __construct( Decode|null $decode = null );
```

<h4 id="encryptionsecurityjwttokenparser-parse"><code>parse()</code></h4>

```php
public function parse( string $token ): Token;
```

Parse a token and return it


## Encryption\Security\JWT\Token\Signature

Class

Signature class containing the encoded data and the hash.

- [`Phalcon\Encryption\Security\JWT\Token\AbstractItem`](#encryptionsecurityjwttokenabstractitem)
  - **`Phalcon\Encryption\Security\JWT\Token\Signature`**

### Method Summary

- `public __construct(string $hash = "", string $encoded = "")` — Signature constructor.

- `public getHash(): string`

### Methods

<h4 id="encryptionsecurityjwttokensignature-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $hash = "",
    string $encoded = ""
);
```

Signature constructor.

<h4 id="encryptionsecurityjwttokensignature-gethash"><code>getHash()</code></h4>

```php
public function getHash(): string;
```


## Encryption\Security\JWT\Token\Token

Class

Token Class.

A container for Token related data. It stores the claims, headers, signature
and payload. It also calculates and returns the token string.

@property Item      $claims
@property Item      $headers
@property Signature $signature

@link https://tools.ietf.org/html/rfc7519

- **`Phalcon\Encryption\Security\JWT\Token\Token`**

`Phalcon\Contracts\Encryption\EncryptionTypes` · `Phalcon\Encryption\Security\JWT\Signer\SignerInterface` · `Phalcon\Encryption\Security\JWT\Validator`

### Method Summary

- `public __construct(Item $headers, Item $claims, Signature $signature)` — Token constructor.

- `public getClaims(): Item` — Return the registered claims

- `public getHeaders(): Item` — Return the registered headers

- `public getPayload(): string` — Return the payload

- `public getSignature(): Signature` — Return the signature

- `public getToken(): string` — Return the token

- `public validate(Validator $validator): array` — Validate the token against the claims registered in the validator.

- `public verify(SignerInterface $signer, string $key): bool` — Verify the signature

### Methods

<h4 id="encryptionsecurityjwttokentoken-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Item $headers,
    Item $claims,
    Signature $signature
);
```

Token constructor.

<h4 id="encryptionsecurityjwttokentoken-getclaims"><code>getClaims()</code></h4>

```php
public function getClaims(): Item;
```

Return the registered claims

<h4 id="encryptionsecurityjwttokentoken-getheaders"><code>getHeaders()</code></h4>

```php
public function getHeaders(): Item;
```

Return the registered headers

<h4 id="encryptionsecurityjwttokentoken-getpayload"><code>getPayload()</code></h4>

```php
public function getPayload(): string;
```

Return the payload

<h4 id="encryptionsecurityjwttokentoken-getsignature"><code>getSignature()</code></h4>

```php
public function getSignature(): Signature;
```

Return the signature

<h4 id="encryptionsecurityjwttokentoken-gettoken"><code>getToken()</code></h4>

```php
public function getToken(): string;
```

Return the token

<h4 id="encryptionsecurityjwttokentoken-validate"><code>validate()</code></h4>

```php
public function validate( Validator $validator ): array;
```

Validate the token against the claims registered in the validator.

Only claims that have a value in the validator are checked. A claim left
as null expresses no expectation and is skipped.

Security note: this method checks the claims only. It does not verify
the signature. A token accepted by validate() alone is unauthenticated.
Always also call verify() (or Validator::validateSignature()) and treat
an empty error array as valid only after the signature check passes.
A signature-aware default is planned for a future major version.

<h4 id="encryptionsecurityjwttokentoken-verify"><code>verify()</code></h4>

```php
public function verify(
    SignerInterface $signer,
    string $key
): bool;
```

Verify the signature


## Encryption\Security\JWT\Validator

Class

Class Validator

- **`Phalcon\Encryption\Security\JWT\Validator`**

`DateTimeImmutable` · `Phalcon\Contracts\Encryption\EncryptionTypes` · `Phalcon\Encryption\Security\JWT\Exceptions\InvalidAudienceType` · `Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException` · `Phalcon\Encryption\Security\JWT\Signer\SignerInterface` · `Phalcon\Encryption\Security\JWT\Token\Enum` · `Phalcon\Encryption\Security\JWT\Token\Token` · `Phalcon\Time\Clock\ClockInterface`

### Method Summary

- `public __construct(Token $token, int $timeShift = 0, ClockInterface|null $clock = null)` — Validator constructor.

- `public get(string $claim): mixed|null` — Return the value of a claim

- `public getErrors(): array` — Return an array with validation errors (if any)

- `public set(string $claim, mixed $value): static` — Set the value of a claim, for comparison with the token values

- `public setToken(Token $token): static` — Set the token to be validated

- `public validateAudience(mixed $audience): static` — Validate the audience

- `public validateClaim(string $name, mixed $value): static` — Validate a claim

- `public validateExpiration(int $timestamp): static` — Validate the expiration time of the token

- `public validateId(string|null $id = null): static` — Validate the id of the token

- `public validateIssuedAt(int $timestamp): static` — Validate the issued at (iat) of the token

- `public validateIssuer(string|null $issuer = null): static` — Validate the issuer of the token

- `public validateNotBefore(int $timestamp): static` — Validate the notbefore (nbf) of the token

- `public validateSignature(SignerInterface $signer, string $passphrase): static` — Validate the signature of the token

- `public validateSubject(string|null $subject = null): static` — Validate the subject of the token

### Methods

<h4 id="encryptionsecurityjwtvalidator-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    Token $token,
    int $timeShift = 0,
    ClockInterface|null $clock = null
);
```

Validator constructor.

<h4 id="encryptionsecurityjwtvalidator-get"><code>get()</code></h4>

```php
public function get( string $claim ): mixed|null;
```

Return the value of a claim

<h4 id="encryptionsecurityjwtvalidator-geterrors"><code>getErrors()</code></h4>

```php
public function getErrors(): array;
```

Return an array with validation errors (if any)

<h4 id="encryptionsecurityjwtvalidator-set"><code>set()</code></h4>

```php
public function set(
    string $claim,
    mixed $value
): static;
```

Set the value of a claim, for comparison with the token values

<h4 id="encryptionsecurityjwtvalidator-settoken"><code>setToken()</code></h4>

```php
public function setToken( Token $token ): static;
```

Set the token to be validated

<h4 id="encryptionsecurityjwtvalidator-validateaudience"><code>validateAudience()</code></h4>

```php
public function validateAudience( mixed $audience ): static;
```

Validate the audience

<h4 id="encryptionsecurityjwtvalidator-validateclaim"><code>validateClaim()</code></h4>

```php
public function validateClaim(
    string $name,
    mixed $value
): static;
```

Validate a claim

<h4 id="encryptionsecurityjwtvalidator-validateexpiration"><code>validateExpiration()</code></h4>

```php
public function validateExpiration( int $timestamp ): static;
```

Validate the expiration time of the token

<h4 id="encryptionsecurityjwtvalidator-validateid"><code>validateId()</code></h4>

```php
public function validateId( string|null $id = null ): static;
```

Validate the id of the token

A null id expresses no expectation and is skipped.

<h4 id="encryptionsecurityjwtvalidator-validateissuedat"><code>validateIssuedAt()</code></h4>

```php
public function validateIssuedAt( int $timestamp ): static;
```

Validate the issued at (iat) of the token

A token issued at exactly $timestamp is valid. Only a token issued after
it, i.e. in the future, is rejected.

<h4 id="encryptionsecurityjwtvalidator-validateissuer"><code>validateIssuer()</code></h4>

```php
public function validateIssuer( string|null $issuer = null ): static;
```

Validate the issuer of the token

A null issuer expresses no expectation and is skipped.

<h4 id="encryptionsecurityjwtvalidator-validatenotbefore"><code>validateNotBefore()</code></h4>

```php
public function validateNotBefore( int $timestamp ): static;
```

Validate the notbefore (nbf) of the token

A token is valid at exactly $timestamp. Only a timestamp before the
"nbf" claim is rejected.

<h4 id="encryptionsecurityjwtvalidator-validatesignature"><code>validateSignature()</code></h4>

```php
public function validateSignature(
    SignerInterface $signer,
    string $passphrase
): static;
```

Validate the signature of the token

<h4 id="encryptionsecurityjwtvalidator-validatesubject"><code>validateSubject()</code></h4>

```php
public function validateSubject( string|null $subject = null ): static;
```

Validate the subject of the token

A null subject expresses no expectation and is skipped.


## Encryption\Security\Random

Class

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

- **`Phalcon\Encryption\Security\Random`**

`Exception` · `Phalcon\Encryption\Security\Exceptions\InvalidRandomInput` · `Phalcon\Traits\Php\Base64Trait`

### Method Summary

- `public base58(int $len = 16): string` — Generates a random base58 string

- `public base62(int $len = 16): string` — Generates a random base62 string

- `public base64(int $len = 16): string` — Generates a random base64 string

- `public base64Safe(int $len = 16, bool $padding = false): string` — Generates a random URL-safe base64 string

- `public bytes(int $len = 16): string` — Generates a random binary string

- `public hex(int $len = 16): string` — Generates a random hex string

- `public number(int $len): int` — Generates a random number between 0 and $len

- `public uuid(): string` — Generates a v4 random UUID (Universally Unique IDentifier)

- `protected base(string $alphabet, int $base, mixed $number = 16): string` — Generates a random string based on the number ($base) of characters

### Methods

<h4 id="encryptionsecurityrandom-base58"><code>base58()</code></h4>

```php
public function base58( int $len = 16 ): string;
```

Generates a random base58 string

If $len is not specified, 16 is assumed. It may be larger in future.
The result may contain alphanumeric characters except 0, O, I and l.

It is similar to `Phalcon\Encryption\Security\Random::base64()` but has been
modified to avoid both non-alphanumeric characters and letters which
might look ambiguous when printed.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->base58(); // 4kUgL2pdQMSCQtjE
```

@link   https://en.wikipedia.org/wiki/Base58

<h4 id="encryptionsecurityrandom-base62"><code>base62()</code></h4>

```php
public function base62( int $len = 16 ): string;
```

Generates a random base62 string

If $len is not specified, 16 is assumed. It may be larger in future.

It is similar to `Phalcon\Encryption\Security\Random::base58()` but has been
modified to provide the largest value that can safely be used in URLs
without needing to take extra characters into consideration because it is
[A-Za-z0-9].

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->base62(); // z0RkwHfh8ErDM1xw
```

<h4 id="encryptionsecurityrandom-base64"><code>base64()</code></h4>

```php
public function base64( int $len = 16 ): string;
```

Generates a random base64 string

If $len is not specified, 16 is assumed. It may be larger in future.
The length of the result string is usually greater of $len.
Size formula: 4 * ($len / 3) rounded up to a multiple of 4.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->base64(12); // 3rcq39QzGK9fUqh8
```

<h4 id="encryptionsecurityrandom-base64safe"><code>base64Safe()</code></h4>

```php
public function base64Safe(
    int $len = 16,
    bool $padding = false
): string;
```

Generates a random URL-safe base64 string

If $len is not specified, 16 is assumed. It may be larger in future.
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

<h4 id="encryptionsecurityrandom-bytes"><code>bytes()</code></h4>

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

<h4 id="encryptionsecurityrandom-hex"><code>hex()</code></h4>

```php
public function hex( int $len = 16 ): string;
```

Generates a random hex string

The length of the result string is usually greater of $len.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->hex(10); // a29f470508d5ccb8e289
```

<h4 id="encryptionsecurityrandom-number"><code>number()</code></h4>

```php
public function number( int $len ): int;
```

Generates a random number between 0 and $len

Returns an integer: 0 &lt;= result &lt;= $len.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->number(16); // 8
```

<h4 id="encryptionsecurityrandom-uuid"><code>uuid()</code></h4>

```php
public function uuid(): string;
```

Generates a v4 random UUID (Universally Unique IDentifier)

The version 4 UUID is purely random (except the version). It does not
contain meaningful information such as MAC address, time, etc. See RFC
4122 for details of UUID.

This algorithm sets the version number (4 bits) as well as two reserved
bits. All other bits (the remaining 122 bits) are set using a random or
pseudorandom data source. Version 4 UUIDs have the form
xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx where x is any hexadecimal digit and
y is one of 8, 9, A, or B (e.g., f47ac10b-58cc-4372-a567-0e02b2c3d479).

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->uuid(); // 1378c906-64bb-4f81-a8d6-4ae1bfcdec22
```

@link https://www.ietf.org/rfc/rfc4122.txt

<h4 id="encryptionsecurityrandom-base"><code>base()</code></h4>

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

Class

Factory that generates UUIDs of versions 1 through 7.

Each call creates a new immutable version object. Cast to string for the
UUID value; use the returned object for additional methods such as
getDateTime() or getNode().

- **`Phalcon\Encryption\Security\Uuid`**

`Phalcon\Encryption\Security\Uuid\Version1` · `Phalcon\Encryption\Security\Uuid\Version3` · `Phalcon\Encryption\Security\Uuid\Version4` · `Phalcon\Encryption\Security\Uuid\Version5` · `Phalcon\Encryption\Security\Uuid\Version6` · `Phalcon\Encryption\Security\Uuid\Version7`

### Method Summary

- `public v1(): Version1` — Generates a version 1 (time-based) UUID.

- `public v3(string $namespaceName, string $name): Version3` — Generates a version 3 (name-based MD5) UUID.

- `public v4(): Version4` — Generates a version 4 (random) UUID.

- `public v5(string $namespaceName, string $name): Version5` — Generates a version 5 (name-based SHA-1) UUID.

- `public v6(): Version6` — Generates a version 6 (reordered time-based) UUID.

- `public v7(): Version7` — Generates a version 7 (Unix timestamp) UUID.

### Methods

<h4 id="encryptionsecurityuuid-v1"><code>v1()</code></h4>

```php
public function v1(): Version1;
```

Generates a version 1 (time-based) UUID.

<h4 id="encryptionsecurityuuid-v3"><code>v3()</code></h4>

```php
public function v3(
    string $namespaceName,
    string $name
): Version3;
```

Generates a version 3 (name-based MD5) UUID.

<h4 id="encryptionsecurityuuid-v4"><code>v4()</code></h4>

```php
public function v4(): Version4;
```

Generates a version 4 (random) UUID.

<h4 id="encryptionsecurityuuid-v5"><code>v5()</code></h4>

```php
public function v5(
    string $namespaceName,
    string $name
): Version5;
```

Generates a version 5 (name-based SHA-1) UUID.

<h4 id="encryptionsecurityuuid-v6"><code>v6()</code></h4>

```php
public function v6(): Version6;
```

Generates a version 6 (reordered time-based) UUID.

<h4 id="encryptionsecurityuuid-v7"><code>v7()</code></h4>

```php
public function v7(): Version7;
```

Generates a version 7 (Unix timestamp) UUID.


## Encryption\Security\Uuid\AbstractUuid

Abstract

Shared base for all UUID version objects.

- **`Phalcon\Encryption\Security\Uuid\AbstractUuid`** - implements [`Phalcon\Encryption\Security\Uuid\UuidInterface`](#encryptionsecurityuuiduuidinterface)
  - [`Phalcon\Encryption\Security\Uuid\Version1`](#encryptionsecurityuuidversion1)
  - [`Phalcon\Encryption\Security\Uuid\Version3`](#encryptionsecurityuuidversion3)
  - [`Phalcon\Encryption\Security\Uuid\Version4`](#encryptionsecurityuuidversion4)
  - [`Phalcon\Encryption\Security\Uuid\Version5`](#encryptionsecurityuuidversion5)
  - [`Phalcon\Encryption\Security\Uuid\Version6`](#encryptionsecurityuuidversion6)
  - [`Phalcon\Encryption\Security\Uuid\Version7`](#encryptionsecurityuuidversion7)

### Method Summary

- `public __toString(): string` — Returns the UUID string.

- `public jsonSerialize(): string` — Returns the UUID string for JSON serialisation.

- `protected format(string $hex): string` — Formats a 32-character hex string as a canonical UUID string.

- `protected getNodeProvider(): NodeProviderInterface` — Returns the shared SysNodeProvider instance, creating it on first call.

- `protected namespaceToBytes(string $uuid): string` — Converts a canonical UUID string to its 16-byte binary representation.

- `protected uuidTimestampToDateTime(mixed $timestamp): \DateTimeImmutable` — Converts a 60-bit UUID timestamp (100-ns intervals since UUID epoch) to

### Constants

- `const string MAX = "ffffffff-ffff-ffff-ffff-ffffffffffff"`

- `const string NIL = "00000000-0000-0000-0000-000000000000"`

- `const int TIME_OFFSET_INT = 0x01B21DD213814000` — 100-nanosecond intervals between UUID epoch (1582-10-15)
  and Unix epoch (1970-01-01).

### Properties

- `protected NodeProviderInterface|null $nodeProvider = null` — Cached SysNodeProvider instance - shared within the request via static.

- `protected string $uid = ""` — The generated UUID string.

### Methods

<h4 id="encryptionsecurityuuidabstractuuid-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

Returns the UUID string.

<h4 id="encryptionsecurityuuidabstractuuid-jsonserialize"><code>jsonSerialize()</code></h4>

```php
public function jsonSerialize(): string;
```

Returns the UUID string for JSON serialisation.

<h4 id="encryptionsecurityuuidabstractuuid-format"><code>format()</code></h4>

```php
protected function format( string $hex ): string;
```

Formats a 32-character hex string as a canonical UUID string.

<h4 id="encryptionsecurityuuidabstractuuid-getnodeprovider"><code>getNodeProvider()</code></h4>

```php
protected function getNodeProvider(): NodeProviderInterface;
```

Returns the shared SysNodeProvider instance, creating it on first call.
The static property means one discovery per request regardless of how
many VersionN objects are constructed.

<h4 id="encryptionsecurityuuidabstractuuid-namespacetobytes"><code>namespaceToBytes()</code></h4>

```php
protected function namespaceToBytes( string $uuid ): string;
```

Converts a canonical UUID string to its 16-byte binary representation.

<h4 id="encryptionsecurityuuidabstractuuid-uuidtimestamptodatetime"><code>uuidTimestampToDateTime()</code></h4>

```php
protected function uuidTimestampToDateTime( mixed $timestamp ): \DateTimeImmutable;
```

Converts a 60-bit UUID timestamp (100-ns intervals since UUID epoch) to
a DateTimeImmutable. Used by Version1 and Version6.


## Encryption\Security\Uuid\NodeProviderInterface

Interface

- [`Phalcon\Contracts\Encryption\Security\Uuid\NodeProvider`](/5.22/api/phalcon_contracts/#contractsencryptionsecurityuuidnodeprovider)
  - **`Phalcon\Encryption\Security\Uuid\NodeProviderInterface`**

`Phalcon\Contracts\Encryption\Security\Uuid\NodeProvider`


## Encryption\Security\Uuid\RandomNodeProvider

Class

Generates a random 48-bit node with the multicast bit set.

Used as a fallback when no hardware MAC address is available.

@link https://www.ietf.org/rfc/rfc4122.txt Section 4.5

- **`Phalcon\Encryption\Security\Uuid\RandomNodeProvider`** - implements [`Phalcon\Encryption\Security\Uuid\NodeProviderInterface`](#encryptionsecurityuuidnodeproviderinterface)

### Method Summary

- `public getNode(): string` — Returns a random 12-character hex node with the multicast bit set.

### Methods

<h4 id="encryptionsecurityuuidrandomnodeprovider-getnode"><code>getNode()</code></h4>

```php
public function getNode(): string;
```

Returns a random 12-character hex node with the multicast bit set.


## Encryption\Security\Uuid\SysNodeProvider

Class

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

- **`Phalcon\Encryption\Security\Uuid\SysNodeProvider`** - implements [`Phalcon\Encryption\Security\Uuid\NodeProviderInterface`](#encryptionsecurityuuidnodeproviderinterface)

`Phalcon\Traits\Php\FileTrait` · `Phalcon\Traits\Php\InfoTrait`

### Method Summary

- `public getNode(): string` — Returns the hardware MAC address as a 12-character hex string.

### Methods

<h4 id="encryptionsecurityuuidsysnodeprovider-getnode"><code>getNode()</code></h4>

```php
public function getNode(): string;
```

Returns the hardware MAC address as a 12-character hex string.
Result is cached in the instance property and optionally in APCu.


## Encryption\Security\Uuid\TimeBasedUuidInterface

Interface

- [`Phalcon\Contracts\Encryption\Security\Uuid\TimeBasedUuid`](/5.22/api/phalcon_contracts/#contractsencryptionsecurityuuidtimebaseduuid)
  - **`Phalcon\Encryption\Security\Uuid\TimeBasedUuidInterface`**

`Phalcon\Contracts\Encryption\Security\Uuid\TimeBasedUuid`


## Encryption\Security\Uuid\UuidInterface

Interface

Marker interface for UUID version adapters.

Also carries the standard RFC 4122 namespace UUIDs as constants.

- [`Phalcon\Contracts\Encryption\Security\Uuid\Uuid`](/5.22/api/phalcon_contracts/#contractsencryptionsecurityuuiduuid)
  - **`Phalcon\Encryption\Security\Uuid\UuidInterface`**

`Phalcon\Contracts\Encryption\Security\Uuid\Uuid`


## Encryption\Security\Uuid\Version1

Class

Generates a version 1 (time-based) UUID.

The timestamp is the number of 100-nanosecond intervals since
October 15, 1582 00:00:00.00 UTC (the UUID epoch). The node is resolved
via SysNodeProvider (hardware MAC, APCu-cached) with RandomNodeProvider
as fallback.

@link https://www.ietf.org/rfc/rfc4122.txt

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
  - **`Phalcon\Encryption\Security\Uuid\Version1`** - implements [`Phalcon\Encryption\Security\Uuid\TimeBasedUuidInterface`](#encryptionsecurityuuidtimebaseduuidinterface)

### Method Summary

- `public __construct(\DateTimeInterface|null $dateTime = null, mixed $node = null)`

- `public getDateTime(): \DateTimeImmutable` — Returns a DateTimeImmutable built from the UUID's embedded timestamp.

- `public getNode(): string` — Returns the 12-character hex node embedded in the UUID.

### Methods

<h4 id="encryptionsecurityuuidversion1-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    \DateTimeInterface|null $dateTime = null,
    mixed $node = null
);
```

<h4 id="encryptionsecurityuuidversion1-getdatetime"><code>getDateTime()</code></h4>

```php
public function getDateTime(): \DateTimeImmutable;
```

Returns a DateTimeImmutable built from the UUID's embedded timestamp.

<h4 id="encryptionsecurityuuidversion1-getnode"><code>getNode()</code></h4>

```php
public function getNode(): string;
```

Returns the 12-character hex node embedded in the UUID.


## Encryption\Security\Uuid\Version3

Class

Generates a version 3 (name-based MD5) UUID.

Given a namespace UUID and a name string, produces a deterministic UUID
by hashing namespace bytes + name with MD5, then stamping version/variant.

@link https://www.ietf.org/rfc/rfc4122.txt

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
  - **`Phalcon\Encryption\Security\Uuid\Version3`**

### Method Summary

- `public __construct(string $namespaceName, string $name)`

### Methods

<h4 id="encryptionsecurityuuidversion3-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $namespaceName,
    string $name
);
```


## Encryption\Security\Uuid\Version4

Class

Generates a version 4 (random) UUID.

All 122 non-fixed bits are random. Identical algorithm to
Phalcon\Encryption\Security\Random::uuid().

@link https://www.ietf.org/rfc/rfc4122.txt

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
  - **`Phalcon\Encryption\Security\Uuid\Version4`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityuuidversion4-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Encryption\Security\Uuid\Version5

Class

Generates a version 5 (name-based SHA-1) UUID.

Given a namespace UUID and a name string, produces a deterministic UUID
by hashing namespace bytes + name with SHA-1 (first 16 bytes used),
then stamping version/variant bits.

@link https://www.ietf.org/rfc/rfc4122.txt

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
  - **`Phalcon\Encryption\Security\Uuid\Version5`**

### Method Summary

- `public __construct(string $namespaceName, string $name)`

### Methods

<h4 id="encryptionsecurityuuidversion5-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $namespaceName,
    string $name
);
```


## Encryption\Security\Uuid\Version6

Class

Generates a version 6 (reordered time-based) UUID.

Uses the same 60-bit UUID timestamp as version 1 but rearranges the
fields so the most-significant time bits come first, producing UUIDs
that sort lexicographically in chronological order.

@link https://www.rfc-editor.org/rfc/rfc9562

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
  - **`Phalcon\Encryption\Security\Uuid\Version6`** - implements [`Phalcon\Encryption\Security\Uuid\TimeBasedUuidInterface`](#encryptionsecurityuuidtimebaseduuidinterface)

### Method Summary

- `public __construct()`

- `public getDateTime(): \DateTimeImmutable` — Returns a DateTimeImmutable built from the UUID's embedded timestamp.

- `public getNode(): string` — Returns the 12-character hex node embedded in the UUID.

### Methods

<h4 id="encryptionsecurityuuidversion6-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

<h4 id="encryptionsecurityuuidversion6-getdatetime"><code>getDateTime()</code></h4>

```php
public function getDateTime(): \DateTimeImmutable;
```

Returns a DateTimeImmutable built from the UUID's embedded timestamp.

<h4 id="encryptionsecurityuuidversion6-getnode"><code>getNode()</code></h4>

```php
public function getNode(): string;
```

Returns the 12-character hex node embedded in the UUID.


## Encryption\Security\Uuid\Version7

Class

Generates a version 7 (Unix timestamp) UUID per RFC 9562.

Layout (128 bits):
  unix_ts_ms (48) | ver=7 (4) | rand_a (12) | var=10 (2) | rand_b (62)

@link https://www.rfc-editor.org/rfc/rfc9562

- [`Phalcon\Encryption\Security\Uuid\AbstractUuid`](#encryptionsecurityuuidabstractuuid)
  - **`Phalcon\Encryption\Security\Uuid\Version7`**

### Method Summary

- `public __construct()`

### Methods

<h4 id="encryptionsecurityuuidversion7-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

Source: https://docs.phalcon.io/5.22/api/phalcon_encryption/index.mdx
