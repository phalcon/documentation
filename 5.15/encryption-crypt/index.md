---
title: "Crypt Component"
version: "5.15"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Crypt Component

## Overview

:::info[NOTE]
Requires PHP's [openssl][openssl] extension
:::

:::danger[DANGER]
**DOES NOT** support insecure algorithms or ECB mode: `des*`, `rc2*`, `rc4*`, `*ecb`. 
:::

Phalcon provides encryption facilities via the [Phalcon\Encryption\Crypt][crypt] component. This class offers simple
object-oriented wrappers to the [openssl][openssl] PHP's encryption library.

By default, this component utilizes the `AES-256-CFB` cipher.

The cipher AES-256 is used among other places in SSL/TLS across the Internet. It's considered among the top ciphers. In
theory, it is not crackable since the combinations of keys are massive. Although the NSA has categorized this
in [Suite B][suite_b], they have also recommended using higher than 128-bit keys for encryption.

:::warning[WARNING]
You must use a key length corresponding to the current algorithm. For the default algorithm `aes-256-cfb` the default key length is 32 bytes.
:::

## Basic Usage

This component is designed to be very simple to use:

```php
<?php

use Phalcon\Encryption\Crypt;

$key       = random_bytes(32);
$crypt     = new Crypt();
$text      = 'This is the text that you want to encrypt.';
$encrypted = $crypt->encrypt($text, $key);

echo $crypt->decrypt($encrypted, $key);
```

If no parameters are passed in the constructor, the component will use the `aes-256-cfb` cipher with signing by default.
You can always change the cipher as well as disable signing.

:::warning[WARNING]
The constructor also accepts a parameter for signing requests. For v5, the default value for this parameter has changed to `true`
:::

:::info[NOTE]
The constructor accepts now a [Phalcon\Encryption\Crypt\PadFactory][pad-factory] as a third parameter. If not specified, a [Phalcon\Encryption\Crypt\PadFactory][pad-factory] object will be created for you
:::

```php
<?php

use Phalcon\Encryption\Crypt;
use Phalcon\Encryption\Crypt\PadFactory;

$key        = random_bytes(32);
$padFactory = new PadFactory();
$crypt      = new Crypt("aes-256-cfb", true, $padFactory);

$text      = 'This is the text that you want to encrypt.';
$encrypted = $crypt->encrypt($text, $key);

echo $crypt->decrypt($encrypted, $key);
```

```php
<?php

use Phalcon\Encryption\Crypt;

$key   = random_bytes(32);
$crypt = new Crypt();

$crypt
->setCipher('aes256')
->useSigning(false)
;

$text      = 'This is the text that you want to encrypt.';
$encrypted = $crypt->encrypt($text, $key);

echo $crypt->decrypt($encrypted, $key);
```

## Encrypt

The `encrypt()` method encrypts a string. The component will use the previously set cipher, which has been set in the
constructor or explicitly. If no `key` is passed in the parameter, the previously set key will be used.

```php
<?php

use Phalcon\Encryption\Crypt;

$key   = random_bytes(32); 
$crypt = new Crypt();
$crypt->setKey($key);

$text      = 'This is the text that you want to encrypt.';
$encrypted = $crypt->encrypt($text);
```

or using the key as the second parameter

```php
<?php

use Phalcon\Encryption\Crypt;

$key       = random_bytes(32); 
$crypt     = new Crypt();
$text      = 'This is the text that you want to encrypt.';
$encrypted = $crypt->encrypt($text, $key);
```

The method will also internally use signing by default. You can always use `useSigning(false)` prior to the method call
to disable it.

:::warning[WARNING]
If you choose `ccm` or `gcm` related ciphers, you must also supply `authData` for them. An exception will be thrown otherwise.
:::

## Decrypt

The `decrypt()` method decrypts a string. Similar to `encrypt()` the component will use the previously set cipher, which
has been set in the constructor or explicitly. If no `key` is passed in the parameter, the previously set key will be
used.

```php
<?php

use Phalcon\Encryption\Crypt;

$key   = random_bytes(32); 
$crypt = new Crypt();
$crypt->setKey($key);

$text      = 'T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3';
$encrypted = $crypt->decrypt($text);
```

or using the key as the second parameter

```php
<?php

use Phalcon\Encryption\Crypt;

$key   = random_bytes(32); 
$crypt = new Crypt();
$crypt->setKey($key);

$text      = 'T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3';
$encrypted = $crypt->decrypt($text, $key);
```

The method will also internally use signing by default. You can always use `useSigning(false)` prior to the method call
to disable it.

:::info[NOTE]
`decrypt()` validates the input length before processing. An input that is shorter than the selected cipher requires throws `Phalcon\Encryption\Crypt\Exception\InvalidDecryptLength`.
:::

## Base64 Encrypt

The `encryptBase64()` can be used to encrypt a string in a URL-friendly way. It uses `encrypt()` internally and accepts
the `text` and optionally the `key` of the element to encrypt. There is also a third parameter `safe` (defaults to
`false`) which will perform string replacements for non URL _friendly_ characters such as `+` or `/`.

## Base64 Decrypt

The `decryptBase64()` can be used to decrypt a string in a URL-friendly way. Similar to `encryptBase64()` it uses
`decrypt()` internally and accepts the `text` and optionally the `key` of the element to encrypt. There is also a third
parameter `safe` (defaults to `false`) which will perform string replacements for previously replaced non URL _friendly_
characters such as `+` or `/`.

## Functionality

### Ciphers

The getter `getCipher()` returns the currently selected cipher. If none has been explicitly defined either by the setter
`setCipher()` or the constructor of the object the `aes-256-cfb` is selected by default. The `aes-256-gcm` is the
preferable cipher.

You can always get an array of all the available ciphers for your system by calling  `getAvailableCiphers()`.

### Hash Algorithm

The getter `getHashAlgo()` returns the hashing algorithm used by the component. If none has been explicitly defined by
the setter `setHashAlgo()` the `sha256` will be used. If the hash algorithm defined is not available in the system or is
wrong, a [Phalcon\Encryption\Crypt\Exception][crypt-exception] will be thrown.

You can always get an array of all the available hashing algorithms for your system by calling
`getAvailableHashAlgos()`.

### Keys

The component offers a getter and a setter for the key to be used. Once the key is set, it will be used for any
encrypting or decrypting operation (provided that the `key` parameter is not defined when using these methods).

* `getKey()`: Returns the encryption key.
* `setKey()` Sets the encryption key.

:::danger[DANGER]
You should always create as secure keys as possible. `12345` might be good for your luggage combination, or `password1` for your email, but for your application, you should try something a lot more complex. The longer and more random the key is the better. The length of course depends on the chosen cipher. 

Several online services can generate random and strong text that can be used for a key. Alternatively, you can always use the `hash()` methods from the [Phalcon\Security][encryption-security] component, which can offer a strong key by hashing a string.
:::

### Signing

To instruct the component to use signing or not, `useSigning` is available. It accepts a boolean which sets a flag
internally, specifying whether signing will be used or not.

### Auth Data

If the cipher selected is of type `gcm` or `ccm` (what the cipher name ends with), auth data is required for the
component to correctly encrypt or decrypt data. The methods available for this operation are:

* `setAuthTag()`
* `setAuthData()`
* `setAuthTagLength()` - (`16`)

`setAuthTagLength()` accepts a value between `4` and `16` bytes. A value outside that range throws
`Phalcon\Encryption\Crypt\Exception\InvalidAuthTagLength`.

The auth data, auth tag, and auth tag length are stored on the instance and shared by every `encrypt()` and `decrypt()`
call. A `Crypt` instance shared through the [Phalcon\Di][di] container is therefore not safe for interleaved AEAD
operations; use a dedicated instance per operation in that case.

For reference, a signed payload produced by `encrypt()` has the layout `iv ‖ hmac ‖ ciphertext ‖ tag`, where `hmac` is
present only when signing is enabled and `tag` is present only for `gcm` / `ccm` ciphers.

### Padding

You can also set the padding used by the component by using `setPadding()`. By default, the component will use
`PADDING_DEFAULT`. The available padding constants are:

* `PADDING_ANSI_X_923`
* `PADDING_DEFAULT`
* `PADDING_ISO_10126`
* `PADDING_ISO_IEC_7816_4`
* `PADDING_PKCS7`
* `PADDING_SPACE`
* `PADDING_ZERO`

## Dependency Injection

As with most Phalcon components, you can store the [Phalcon\Encryption\Crypt][crypt] object in your [Phalcon\Di][di]
container. By doing so, you will be able to access your configuration object from controllers, models, views, and any
component that implements `Injectable`.

An example of the registration of the service as well as accessing it is below:

```php
<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Encryption\Crypt;

// Create a container
$container = new FactoryDefault();

$container->set(
'crypt',
function () {
    $crypt = new Crypt();

    // Set a global encryption key
    $crypt->setKey(
        "T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3"
    );

    return $crypt;
},
true
);
```

The component is now available in your controllers using the `crypt` key

```php
<?php

use MyApp\Models\Secrets;
use Phalcon\Encryption\Crypt;
use Phalcon\Http\Request;
use Phalcon\Mvc\Controller;

/**
 * @property Crypt   $crypt
 * @property Request $request
 */
class SecretsController extends Controller
{
public function saveAction()
{
    $secret = new Secrets();

    $text = $this->request->getPost('text');

    $secret->content = $this->crypt->encrypt($text);

    if ($secret->save()) {
        $this->flash->success(
            'Secret was successfully created!'
        );
    }
}
}
```

## Constants

Two constants are available:

* `DEFAULT_ALGORITHM = "sha256"`
* `DEFAULT_CIPHER    = "aes-256-cfb"`

* `PADDING_ANSI_X_923      = 1`
* `PADDING_DEFAULT         = 0`
* `PADDING_ISO_10126       = 3`
* `PADDING_ISO_IEC_7816_4  = 4`
* `PADDING_PKCS7           = 2`
* `PADDING_SPACE           = 6`
* `PADDING_ZERO            = 5`

You can use them in your project or override them if you want to implement your own class.

## Methods

```php
public function __construct(
string $cipher = self::DEFAULT_CIPHER, 
bool $useSigning = true, 
PadFactory $padFactory = null
)
```

Constructor

```php
public function decrypt(string $input, string $key = null): string
```

Decrypt an encrypted text

```php
public function decryptBase64(
string $input, 
string $key = null, 
bool $safe = false
): string
```

Decrypt a text that is coded as a `base64` string

```php
public function encrypt(string $input, string $key = null): string
```

Encrypt a text

```php
public function encryptBase64(
string $input, 
string $key = null, 
bool $safe = false
): string
```

Encrypts a text returning the result as a `base64` string

```php
public function getAvailableCiphers(): array
```

Return a list of available ciphers

```php
public function getAuthData(): string
```

Return the auth data

```php
public function getAuthTag(): string
```

Return the auth tag

```php
public function getAuthTagLength(): int
```

Return the auth tag length

```php
public function getAvailableHashAlgorithms(): array
```

Return a list of registered hashing algorithms suitable for `hash_hmac`

```php
public function getHashAlgorithm(): string
```

Get the name of the hashing algorithm.

```php
public function getCipher(): string
```

Returns the current cipher

```php
public function getKey(): string
```

Returns the encryption key

```php
public function isValidDecryptLength(string $input): bool
```

Returns if the input length for decryption is valid or not (number of bytes required by the cipher)

```php
public function setAuthData(string $data): CryptInterface
```

Set the auth data

```php
public function setAuthTag(string $tag): CryptInterface
```

Set the auth tag

```php
public function setAuthTagLength(int $length): CryptInterface
```

Set the auth tag length

```php
public function setCipher(string $cipher): CryptInterface
```

Set the cipher algorithm for data encryption and decryption

```php
public function setKey(string $key): CryptInterface
```

```php
public function setHashAlgorithm(string $hashAlgorithm): CryptInterface
```

Set the name of the hashing algorithm.

```php
public function setPadding(int $scheme): CryptInterface
```

Set the padding scheme

```php
public function useSigning(bool $useSigning): CryptInterface
```

Use a message digest (signing) to be used or not

## PadFactory

The [Phalcon\Encryption\Crypt\PadFactory][pad-factory] is an object that instantiates classes to be used for padding and
unpadding data during encryption or decryption.

| Name       | Class                                       |
|------------|---------------------------------------------|
| `ansi`     | `Phalcon\Encryption\Crypt\Padding\Ansi`     |
| `iso10126` | `Phalcon\Encryption\Crypt\Padding\Iso10126` |
| `isoiek`   | `Phalcon\Encryption\Crypt\Padding\IsoIek`   |
| `noop`     | `Phalcon\Encryption\Crypt\Padding\Noop`     |
| `pjcs7`    | `Phalcon\Encryption\Crypt\Padding\Pkcs7`    |
| `pkcs7`    | `Phalcon\Encryption\Crypt\Padding\Pkcs7`    |
| `space`    | `Phalcon\Encryption\Crypt\Padding\Space`    |
| `zero`     | `Phalcon\Encryption\Crypt\Padding\Zero`     |

`pkcs7` is the correctly-spelled alias of the original `pjcs7` service; both resolve to
`Phalcon\Encryption\Crypt\Padding\Pkcs7`. The `padNumberToService()` method maps a `Crypt::PADDING_*` constant to its
service name and throws `Phalcon\Encryption\Crypt\Exception\Exception` when given a constant it does not recognize.

[Phalcon\Encryption\Crypt\Padding\PadInterface][pad-interface] is also available, should you need to create your own
padding strategy. Note that you will need to register the new padding class in
the [Phalcon\Encryption\Crypt\PadFactory][pad-factory] and inject it into the constructor of
the [Phalcon\Encryption\Crypt][crypt] component.

## Contracts

The encryption interfaces extend canonical contracts in the `Phalcon\Contracts\Encryption\Crypt` namespace. New code
should type-hint the contracts. The `*Interface` types remain as deprecated aliases and will be removed in a future
major version.

| Deprecated interface                            | Contract                                         |
|-------------------------------------------------|--------------------------------------------------|
| `Phalcon\Encryption\Crypt\CryptInterface`       | `Phalcon\Contracts\Encryption\Crypt\Crypt`       |
| `Phalcon\Encryption\Crypt\Padding\PadInterface` | `Phalcon\Contracts\Encryption\Crypt\Padding\Pad` |

```php
<?php

use Phalcon\Contracts\Encryption\Crypt\Crypt;

function encryptValue(Crypt $crypt, string $value): string
{
return $crypt->encrypt($value);
}
```

## Links

* [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)
* [What is block cipher](https://en.wikipedia.org/wiki/Block_cipher)
* [Introduction to Blowfish](https://www.splashdata.com/splashid/blowfish.htm)
* [CTR-Mode Encryption](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.79.1353&rep=rep1&type=pdf)
* [Recommendation for Block Cipher Modes of Operation: Methods and Techniques](https://csrc.nist.gov/publications/detail/sp/800-38a/final)
* [Counter (CTR) mode](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Counter_.28CTR.29)

## Exceptions

Exceptions thrown in the [Phalcon\Encryption\Crypt][crypt] component will be of
type [Phalcon\Encryption\Crypt\Exception][crypt-exception]. If however, you are using signing and the calculated hash
for `decrypt()` does not match, [Phalcon\Encryption\Crypt\Mismatch][crypt-mismatch] will be thrown. You can use these
exceptions to selectively catch exceptions thrown only from this component.

```php
<?php

use Phalcon\Encryption\Crypt\Mismatch;
use Phalcon\Mvc\Controller;

class IndexController extends Controller
{
public function index()
{
    try {
        // Get some configuration values
        $this->crypt->decrypt('hello');
    } catch (Mismatch $ex) {
        echo $ex->getMessage();
    }
}
}
```

### Granular Exceptions

As of 5.14 the component raises granular subclasses under `Phalcon\Encryption\Crypt\Exception\` so callers can catch a
specific failure mode. Existing `catch (Phalcon\Encryption\Crypt\Exception $e)` blocks continue to work unchanged.

| Class                                                            | Parent                               | Thrown when                                                                           |
|------------------------------------------------------------------|--------------------------------------|---------------------------------------------------------------------------------------|
| `Phalcon\Encryption\Crypt\Exception\DecryptionFailed`            | `Phalcon\Encryption\Crypt\Exception` | OpenSSL fails to decrypt the supplied ciphertext.                                     |
| `Phalcon\Encryption\Crypt\Exception\EmptyDecryptionKey`          | `Phalcon\Encryption\Crypt\Exception` | `decrypt()` is called without a key configured or supplied.                           |
| `Phalcon\Encryption\Crypt\Exception\EmptyEncryptionKey`          | `Phalcon\Encryption\Crypt\Exception` | `encrypt()` is called without a key configured or supplied.                           |
| `Phalcon\Encryption\Crypt\Exception\EncryptionFailed`            | `Phalcon\Encryption\Crypt\Exception` | OpenSSL fails to encrypt the supplied plaintext.                                      |
| `Phalcon\Encryption\Crypt\Exception\InvalidAuthTagLength`        | `Phalcon\Encryption\Crypt\Exception` | `setAuthTagLength()` is given a length outside the 4 to 16 byte range.                |
| `Phalcon\Encryption\Crypt\Exception\InvalidDecryptLength`        | `Phalcon\Encryption\Crypt\Exception` | `decrypt()` is given input shorter than the selected cipher requires.                 |
| `Phalcon\Encryption\Crypt\Exception\InvalidPaddingSize`          | `Phalcon\Encryption\Crypt\Exception` | A padded plaintext has a size the configured padding scheme cannot strip.             |
| `Phalcon\Encryption\Crypt\Exception\IvLengthCalculationFailed`   | `Phalcon\Encryption\Crypt\Exception` | OpenSSL cannot determine the IV length for the configured cipher.                     |
| `Phalcon\Encryption\Crypt\Exception\MissingAuthData`             | `Phalcon\Encryption\Crypt\Exception` | An authenticated cipher (e.g. GCM) is used without supplying auth data.               |
| `Phalcon\Encryption\Crypt\Exception\MissingOpensslExtension`     | `Phalcon\Encryption\Crypt\Exception` | The `openssl` PHP extension is not loaded.                                            |
| `Phalcon\Encryption\Crypt\Exception\RandomBytesGenerationFailed` | `Phalcon\Encryption\Crypt\Exception` | `random_bytes()` cannot produce enough entropy for the IV/key.                        |
| `Phalcon\Encryption\Crypt\Exception\UnsupportedAlgorithm`        | `Phalcon\Encryption\Crypt\Exception` | The configured cipher or hashing algorithm is not available in the current PHP build. |

[base64]: https://www.php.net/manual/en/function.base64-encode.php

[cipher_methods]: https://www.php.net/manual/en/function.openssl-get-cipher-methods.php

[openssl]: https://www.php.net/manual/en/book.openssl.php

[suite_b]: https://en.wikipedia.org/wiki/NSA_Suite_B_Cryptography

[crypt]: /5.15/api/phalcon_encryption/#encryptioncrypt

[crypt-cryptinterface]: /5.15/api/phalcon_encryption/#encryptioncryptcryptinterface

[crypt-exception]: /5.15/api/phalcon_encryption/#encryptioncryptexceptionexception

[crypt-mismatch]: /5.15/api/phalcon_encryption/#encryptioncryptexceptionmismatch

[pad-factory]: /5.15/api/phalcon_encryption/#encryptioncryptpadfactory

[pad-interface]: /5.15/api/phalcon_encryption/#encryptioncryptpaddingpadinterface

[di]: /5.15/di/

[encryption-security]: /5.15/encryption-security/

Source: https://docs.phalcon.io/5.15/encryption-crypt/index.mdx
