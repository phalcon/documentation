---
title: "Phalcon Encryption"
version: "5.13"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Encryption

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Encryption\Crypt 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt.zep)

-   __Namespace__

    - `Phalcon\Encryption`

-   __Uses__

    - `Phalcon\Encryption\Crypt\CryptInterface`
    - `Phalcon\Encryption\Crypt\Exception\Exception`
    - `Phalcon\Encryption\Crypt\Exception\Mismatch`
    - `Phalcon\Encryption\Crypt\PadFactory`

-   __Extends__

-   __Implements__

    - `CryptInterface`

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

### Constants
```php
const DEFAULT_ALGORITHM = sha256;
const DEFAULT_CIPHER = aes-256-cfb;
const PADDING_ANSI_X_923 = 1;
const PADDING_DEFAULT = 0;
const PADDING_ISO_10126 = 3;
const PADDING_ISO_IEC_7816_4 = 4;
const PADDING_PKCS7 = 2;
const PADDING_SPACE = 6;
const PADDING_ZERO = 5;
```

### Properties
```php
/**
 * @var string
 */
protected $authData = ;

/**
 * @var string
 */
protected $authTag = ;

/**
 * @var int
 */
protected $authTagLength = 16;

/**
 * Available cipher methods.
 *
 * @var array
 */
protected $availableCiphers;

/**
 * @var string
 */
protected $cipher;

/**
 * The name of hashing algorithm.
 *
 * @var string
 */
protected $hashAlgorithm;

/**
 * The cipher iv length.
 *
 * @var int
 */
protected $ivLength = 16;

/**
 * @var string
 */
protected $key = ;

/**
 * @var int
 */
protected $padding = ;

/**
 * @var PadFactory
 */
protected $padFactory;

/**
 * Whether calculating message digest enabled or not.
 *
 * @var bool
 */
protected $useSigning = true;

```

### Methods

```php
public function __construct( string $cipher = static-constant-access, bool $useSigning = bool, PadFactory $padFactory = null );
```
Crypt constructor.

```php
public function decrypt( string $input, string $key = null ): string;
```
Decrypts an encrypted text.

```php
$encrypted = $crypt->decrypt(
$encrypted,
"T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3"
);
```

```php
public function decryptBase64( string $input, string $key = null, bool $safe = bool ): string;
```
Decrypt a text that is coded as a base64 string.

```php
public function encrypt( string $input, string $key = null ): string;
```
Encrypts a text.

```php
$encrypted = $crypt->encrypt(
"Top secret",
"T4\xb1\x8d\xa9\x98\x05\\\x8c\xbe\x1d\x07&[\x99\x18\xa4~Lc1\xbeW\xb3"
);
```

```php
public function encryptBase64( string $input, string $key = null, bool $safe = bool ): string;
```
Encrypts a text returning the result as a base64 string.

```php
public function getAuthData(): string;
```
Returns the auth data

```php
public function getAuthTag(): string;
```
Returns the auth tag

```php
public function getAuthTagLength(): int;
```
Returns the auth tag length

```php
public function getAvailableCiphers(): array;
```
Returns a list of available ciphers.

```php
public function getAvailableHashAlgorithms(): array;
```
Return a list of registered hashing algorithms suitable for hash_hmac.

```php
public function getCipher(): string;
```
Returns the current cipher

```php
public function getHashAlgorithm(): string;
```
Get the name of hashing algorithm.

```php
public function getKey(): string;
```
Returns the encryption key

```php
public function isValidDecryptLength( string $input ): bool;
```
Returns if the input length for decryption is valid or not
(number of bytes required by the cipher).

```php
public function setAuthData( string $data ): CryptInterface;
```

```php
public function setAuthTag( string $tag ): CryptInterface;
```

```php
public function setAuthTagLength( int $length ): CryptInterface;
```

```php
public function setCipher( string $cipher ): CryptInterface;
```
Sets the cipher algorithm for data encryption and decryption.

```php
public function setHashAlgorithm( string $hashAlgorithm ): CryptInterface;
```
Set the name of hashing algorithm.

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

```php
public function setPadding( int $scheme ): CryptInterface;
```
Changes the padding scheme used.

```php
public function useSigning( bool $useSigning ): CryptInterface;
```
Sets if the calculating message digest must used.

```php
protected function checkCipherHashIsAvailable( string $cipher, string $type ): void;
```
Checks if a cipher or a hash algorithm is available

```php
protected function cryptPadText( string $input, string $mode, int $blockSize, int $paddingType ): string;
```
Pads texts before encryption. See
[cryptopad](https://www.di-mgt.com.au/cryptopad.html)

```php
protected function cryptUnpadText( string $input, string $mode, int $blockSize, int $paddingType ): string;
```
Removes a padding from a text.

If the function detects that the text was not padded, it will return it
unmodified.

```php
protected function decryptGcmCcmAuth( string $mode, string $cipherText, string $decryptKey, string $iv ): string;
```

```php
protected function decryptGetUnpadded( string $mode, int $blockSize, string $decrypted ): string;
```

```php
protected function encryptGcmCcm( string $mode, string $padded, string $encryptKey, string $iv ): string;
```

```php
protected function encryptGetPadded( string $mode, string $input, int $blockSize ): string;
```

```php
protected function initializeAvailableCiphers(): Crypt;
```
Initialize available cipher algorithms.

```php
protected function phpFunctionExists( string $name ): bool;
```
@todo to be removed when we get traits

```php
protected function phpOpensslCipherIvLength( string $cipher ): int | bool;
```

```php
protected function phpOpensslRandomPseudoBytes( int $length );
```

## Encryption\Crypt\CryptInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/CryptInterface.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt`

-   __Uses__

-   __Extends__

-   __Implements__

Interface for Phalcon\Crypt

### Methods

```php
public function decrypt( string $input, string $key = null ): string;
```
Decrypts a text

```php
public function decryptBase64( string $input, string $key = null ): string;
```
Decrypt a text that is coded as a base64 string

```php
public function encrypt( string $input, string $key = null ): string;
```
Encrypts a text

```php
public function encryptBase64( string $input, string $key = null ): string;
```
Encrypts a text returning the result as a base64 string

```php
public function getAuthData(): string;
```
Returns authentication data

```php
public function getAuthTag(): string;
```
Returns the authentication tag

```php
public function getAuthTagLength(): int;
```
Returns the authentication tag length

```php
public function getAvailableCiphers(): array;
```
Returns a list of available cyphers

```php
public function getCipher(): string;
```
Returns the current cipher

```php
public function getKey(): string;
```
Returns the encryption key

```php
public function setAuthData( string $data ): CryptInterface;
```
Sets authentication data

```php
public function setAuthTag( string $tag ): CryptInterface;
```
Sets the authentication tag

```php
public function setAuthTagLength( int $length ): CryptInterface;
```
Sets the authentication tag length

```php
public function setCipher( string $cipher ): CryptInterface;
```
Sets the cipher algorithm

```php
public function setKey( string $key ): CryptInterface;
```
Sets the encryption key

```php
public function setPadding( int $scheme ): CryptInterface;
```
Changes the padding scheme used.

```php
public function useSigning( bool $useSigning ): CryptInterface;
```
Sets if the calculating message digest must be used.

## Encryption\Crypt\Exception\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/Exception.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt\Exception`

-   __Uses__

-   __Extends__

    `\Exception`

-   __Implements__

Exceptions thrown in Phalcon\Crypt use this class

## Encryption\Crypt\Exception\Mismatch 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Exception/Mismatch.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt\Exception`

-   __Uses__

-   __Extends__

    `Exception`

-   __Implements__

Exceptions thrown in Phalcon\Crypt will use this class.

## Encryption\Crypt\PadFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/PadFactory.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt`

-   __Uses__

    - `Phalcon\Encryption\Crypt`
    - `Phalcon\Encryption\Crypt\Padding\PadInterface`
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Support\Helper\Arr\Get`

-   __Extends__

    `AbstractFactory`

-   __Implements__

Class PadFactory

@package Phalcon\Crypt

### Properties
```php
/**
 * @var string
 */
protected $exception = Phalcon\\Encryption\\Crypt\\Exception\\Exception;

```

### Methods

```php
public function __construct( array $services = [] );
```
AdapterFactory constructor.

```php
public function newInstance( string $name ): PadInterface;
```
Create a new instance of the adapter

```php
public function padNumberToService( int $number ): string;
```
Gets a Crypt pad constant and returns the unique service name for the
padding class

```php
protected function getServices(): array;
```

## Encryption\Crypt\Padding\Ansi 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Ansi.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt\Padding`

-   __Uses__

-   __Extends__

-   __Implements__

    - `PadInterface`

Class Ansi

@package Phalcon\Encryption\Crypt\Padding

### Methods

```php
public function pad( int $paddingSize ): string;
```

```php
public function unpad( string $input, int $blockSize ): int;
```

## Encryption\Crypt\Padding\Iso10126 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Iso10126.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt\Padding`

-   __Uses__

-   __Extends__

-   __Implements__

    - `PadInterface`

Class Iso10126

@package Phalcon\Encryption\Crypt\Padding

### Methods

```php
public function pad( int $paddingSize ): string;
```

```php
public function unpad( string $input, int $blockSize ): int;
```

## Encryption\Crypt\Padding\IsoIek 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/IsoIek.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt\Padding`

-   __Uses__

-   __Extends__

-   __Implements__

    - `PadInterface`

Class IsoIek

@package Phalcon\Encryption\Crypt\Padding

### Methods

```php
public function pad( int $paddingSize ): string;
```

```php
public function unpad( string $input, int $blockSize ): int;
```

## Encryption\Crypt\Padding\Noop 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Noop.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt\Padding`

-   __Uses__

-   __Extends__

-   __Implements__

    - `PadInterface`

Class Noop

@package Phalcon\Encryption\Crypt\Padding

### Methods

```php
public function pad( int $paddingSize ): string;
```

```php
public function unpad( string $input, int $blockSize ): int;
```

## Encryption\Crypt\Padding\PadInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/PadInterface.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt\Padding`

-   __Uses__

-   __Extends__

-   __Implements__

Interface for Phalcon\Encryption\Crypt\Padding

### Methods

```php
public function pad( int $paddingSize ): string;
```

```php
public function unpad( string $input, int $blockSize ): int;
```

## Encryption\Crypt\Padding\Pkcs7 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Pkcs7.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt\Padding`

-   __Uses__

-   __Extends__

-   __Implements__

    - `PadInterface`

Class Pkcs7

@package Phalcon\Encryption\Crypt\Padding

### Methods

```php
public function pad( int $paddingSize ): string;
```

```php
public function unpad( string $input, int $blockSize ): int;
```

## Encryption\Crypt\Padding\Space 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Space.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt\Padding`

-   __Uses__

-   __Extends__

-   __Implements__

    - `PadInterface`

Class Space

@package Phalcon\Encryption\Crypt\Padding

### Methods

```php
public function pad( int $paddingSize ): string;
```

```php
public function unpad( string $input, int $blockSize ): int;
```

## Encryption\Crypt\Padding\Zero 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Crypt/Padding/Zero.zep)

-   __Namespace__

    - `Phalcon\Encryption\Crypt\Padding`

-   __Uses__

-   __Extends__

-   __Implements__

    - `PadInterface`

Class Zero

@package Phalcon\Encryption\Crypt\Padding

### Methods

```php
public function pad( int $paddingSize ): string;
```

```php
public function unpad( string $input, int $blockSize ): int;
```

## Encryption\Security 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security.zep)

-   __Namespace__

    - `Phalcon\Encryption`

-   __Uses__

    - `Phalcon\Contracts\Encryption\Security\Security`
    - `Phalcon\Di\AbstractInjectionAware`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Encryption\Security\Exception`
    - `Phalcon\Encryption\Security\Random`
    - `Phalcon\Http\RequestInterface`
    - `Phalcon\Session\ManagerInterface`

-   __Extends__

    `AbstractInjectionAware`

-   __Implements__

    - `SecurityContract`

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

### Constants
```php
const CRYPT_ARGON2I = 10;
const CRYPT_ARGON2ID = 11;
const CRYPT_BCRYPT = 0;
const CRYPT_BLOWFISH = 4;
const CRYPT_BLOWFISH_A = 5;
const CRYPT_BLOWFISH_X = 6;
const CRYPT_BLOWFISH_Y = 7;
const CRYPT_DEFAULT = 0;
const CRYPT_EXT_DES = 2;
const CRYPT_MD5 = 3;
const CRYPT_SHA256 = 8;
const CRYPT_SHA512 = 9;
const CRYPT_STD_DES = 1;
```

### Properties
```php
/**
 * @var bool
 */
protected $autoRefresh = true;

/**
 * @var int
 */
protected $defaultHash;

/**
 * @var int
 */
protected $numberBytes = 16;

/**
 * @var Random
 */
protected $random;

/**
 * @var string|null
 */
protected $requestToken;

/**
 * @var string|null
 */
protected $token;

/**
 * @var string|null
 */
protected $tokenKey;

/**
 * @var string
 */
protected $tokenKeySessionId = $PHALCON/CSRF/KEY$;

/**
 * @var string
 */
protected $tokenValueSessionId = $PHALCON/CSRF$;

/**
 * @var int
 */
protected $workFactor = 10;

/**
 * @var SessionInterface|null
 */
private $localSession;

/**
 * @var RequestInterface|null
 */
private $localRequest;

```

### Methods

```php
public function __construct( SessionInterface $session = null, RequestInterface $request = null );
```
Security constructor.

```php
public function checkHash( string $password, string $passwordHash, int $maxPassLength = int ): bool;
```
Checks a plain text password and its hash version to check if the
password matches

```php
public function checkToken( string $tokenKey = null, mixed $tokenValue = null, bool $destroyIfValid = bool ): bool;
```
Check if the CSRF token sent in the request is the same that the current
in session

```php
public function computeHmac( string $data, string $key, string $algo, bool $raw = bool ): string;
```
Computes a HMAC

```php
public function destroyToken(): Security;
```
Removes the value of the CSRF token and key from session

```php
public function getDefaultHash(): int;
```
Returns the default hash

```php
public function getHashInformation( string $hash ): array;
```
Returns information regarding a hash

```php
public function getRandom(): Random;
```
Returns a secure random number generator instance

```php
public function getRandomBytes(): int;
```
Returns a number of bytes to be generated by the openssl pseudo random
generator

```php
public function getRequestToken(): string | null;
```
Returns the value of the CSRF token for the current request.

```php
public function getSaltBytes( int $numberBytes = int ): string;
```
Generate a >22-length pseudo random string to be used as salt for
passwords

```php
public function getSessionToken(): string | null;
```
Returns the value of the CSRF token in session

```php
public function getToken(): string | null;
```
Generates a pseudo random token value to be used as input's value in a
CSRF check

```php
public function getTokenKey(): string | null;
```
Generates a pseudo random token key to be used as input's name in a CSRF
check

```php
public function getWorkFactor(): int;
```

```php
public function hash( string $password, array $options = [] ): string;
```
Creates a password hash using bcrypt with a pseudo random salt

```php
public function isLegacyHash( string $passwordHash ): bool;
```
Checks if a password hash is a valid bcrypt's hash

```php
public function refreshToken(): Security;
```
Forces the regeneration of the CSRF token and key, writing the new
values to the session even when auto-refresh has been disabled. Useful
after a successful login or any other state change where rotating the
token is appropriate.

```php
public function setAutoRefresh( bool $autoRefresh ): Security;
```
Toggles automatic regeneration of the CSRF token on every call to
`getToken()` / `getTokenKey()`. When set to `false`, existing session
values are reused (no session write), and a new token is only minted
when none is present or `refreshToken()` is called explicitly.

```php
public function setDefaultHash( int $defaultHash ): Security;
```
Sets the default hash

```php
public function setRandomBytes( int $randomBytes ): Security;
```
Sets a number of bytes to be generated by the openssl pseudo random
generator

```php
public function setWorkFactor( int $workFactor ): Security;
```
Sets the work factor

```php
protected function getLocalService( string $name, string $property );
```

## Encryption\Security\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Exception.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security`

-   __Uses__

-   __Extends__

    `\Exception`

-   __Implements__

Phalcon\Encryption\Security\Exception

Exceptions thrown in Phalcon\Security will use this class

## Encryption\Security\JWT\Builder 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Builder.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT`

-   __Uses__

    - `Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`
    - `Phalcon\Encryption\Security\JWT\Signer\SignerInterface`
    - `Phalcon\Encryption\Security\JWT\Token\Enum`
    - `Phalcon\Encryption\Security\JWT\Token\Item`
    - `Phalcon\Encryption\Security\JWT\Token\Signature`
    - `Phalcon\Encryption\Security\JWT\Token\Token`
    - `Phalcon\Support\Collection`
    - `Phalcon\Support\Collection\CollectionInterface`
    - `Phalcon\Support\Helper\Json\Encode`

-   __Extends__

-   __Implements__

Builder

The builder offers

@property CollectionInterface $claims
@property CollectionInterface $jose
@property string              $passphrase
@property SignerInterface     $signer

@link https://tools.ietf.org/html/rfc7519

### Properties
```php
/**
 * @var CollectionInterface
 */
private $claims;

/**
 * @var Encode
 */
private $encode;

/**
 * @var CollectionInterface
 */
private $jose;

/**
 * @var string
 */
private $passphrase;

/**
 * @var SignerInterface
 */
private $signer;

```

### Methods

```php
public function __construct( SignerInterface $signer );
```
Builder constructor.

```php
public function addClaim( string $name, mixed $value ): Builder;
```
Adds a custom claim

```php
public function addHeader( string $name, mixed $value ): Builder;
```
Adds a custom claim

```php
public function getAudience();
```

```php
public function getClaims(): array;
```

```php
public function getContentType(): string | null;
```

```php
public function getExpirationTime(): int | null;
```

```php
public function getHeaders(): array;
```

```php
public function getId(): string | null;
```

```php
public function getIssuedAt(): int | null;
```

```php
public function getIssuer(): string | null;
```

```php
public function getNotBefore(): int | null;
```

```php
public function getPassphrase(): string;
```

```php
public function getSubject(): string | null;
```

```php
public function getToken(): Token;
```

```php
public function init(): Builder;
```

```php
public function setAudience( mixed $audience ): Builder;
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

```php
public function setContentType( string $contentType ): Builder;
```
Sets the content type header 'cty'

```php
public function setExpirationTime( int $timestamp ): Builder;
```
The "exp" (expiration time) claim identifies the expiration time on
or after which the JWT MUST NOT be accepted for processing.  The
processing of the "exp" claim requires that the current date/time
MUST be before the expiration date/time listed in the "exp" claim.
Implementers MAY provide for some small leeway, usually no more than
a few minutes, to account for clock skew.  Its value MUST be a number
containing a NumericDate value.  Use of this claim is OPTIONAL.

```php
public function setId( string $id ): Builder;
```
The "jti" (JWT ID) claim provides a unique identifier for the JWT.
The identifier value MUST be assigned in a manner that ensures that
there is a negligible probability that the same value will be
accidentally assigned to a different data object; if the application
uses multiple issuers, collisions MUST be prevented among values
produced by different issuers as well.  The "jti" claim can be used
to prevent the JWT from being replayed.  The "jti" value is a case-
sensitive string.  Use of this claim is OPTIONAL.

```php
public function setIssuedAt( int $timestamp ): Builder;
```
The "iat" (issued at) claim identifies the time at which the JWT was
issued.  This claim can be used to determine the age of the JWT.  Its
value MUST be a number containing a NumericDate value.  Use of this
claim is OPTIONAL.

```php
public function setIssuer( string $issuer ): Builder;
```
The "iss" (issuer) claim identifies the principal that issued the
JWT.  The processing of this claim is generally application specific.
The "iss" value is a case-sensitive string containing a StringOrURI
value.  Use of this claim is OPTIONAL.

```php
public function setNotBefore( int $timestamp ): Builder;
```
The "nbf" (not before) claim identifies the time before which the JWT
MUST NOT be accepted for processing.  The processing of the "nbf"
claim requires that the current date/time MUST be after or equal to
the not-before date/time listed in the "nbf" claim.  Implementers MAY
provide for some small leeway, usually no more than a few minutes, to
account for clock skew.  Its value MUST be a number containing a
NumericDate value.  Use of this claim is OPTIONAL.

```php
public function setPassphrase( string $passphrase ): Builder;
```

```php
public function setSubject( string $subject ): Builder;
```
The "sub" (subject) claim identifies the principal that is the
subject of the JWT.  The claims in a JWT are normally statements
about the subject.  The subject value MUST either be scoped to be
locally unique in the context of the issuer or be globally unique.
The processing of this claim is generally application specific.  The
"sub" value is a case-sensitive string containing a StringOrURI
value.  Use of this claim is OPTIONAL.

```php
protected function setClaim( string $name, mixed $value ): Builder;
```
Sets a registered claim

## Encryption\Security\JWT\Exceptions\UnsupportedAlgorithmException 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/UnsupportedAlgorithmException.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Exceptions`

-   __Uses__

    - `Exception`

-   __Extends__

    `Exception`

-   __Implements__

Exception thrown when the algorithm is not supported for JWT

## Encryption\Security\JWT\Exceptions\ValidatorException 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Exceptions/ValidatorException.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Exceptions`

-   __Uses__

    - `Exception`

-   __Extends__

    `Exception`

-   __Implements__

Exception thrown when the validation does not pass for JWT

## Encryption\Security\JWT\Signer\AbstractSigner ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Signer/AbstractSigner.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Signer`

-   __Uses__

-   __Extends__

-   __Implements__

    - `SignerInterface`

Abstract class helping with the signer classes

### Properties
```php
/**
 * @var string
 */
protected $algorithm = ;

```

### Methods

```php
public function getAlgorithm(): string;
```

## Encryption\Security\JWT\Signer\Hmac 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Signer/Hmac.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Signer`

-   __Uses__

    - `Phalcon\Encryption\Security\JWT\Exceptions\UnsupportedAlgorithmException`

-   __Extends__

    `AbstractSigner`

-   __Implements__

HMAC signing class

### Methods

```php
public function __construct( string $algo = string );
```
Hmac constructor.

```php
public function getAlgHeader(): string;
```
Return the value that is used for the "alg" header

```php
public function sign( string $payload, string $passphrase ): string;
```
Sign a payload using the passphrase

```php
public function verify( string $source, string $payload, string $passphrase ): bool;
```
Verify a passed source with a payload and passphrase

## Encryption\Security\JWT\Signer\None 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Signer/None.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Signer`

-   __Uses__

-   __Extends__

-   __Implements__

    - `SignerInterface`

No signing class

### Methods

```php
public function getAlgHeader(): string;
```
Return the value that is used for the "alg" header

```php
public function getAlgorithm(): string;
```
Return the algorithm used

```php
public function sign( string $payload, string $passphrase ): string;
```
Sign a payload using the passphrase

```php
public function verify( string $source, string $payload, string $passphrase ): bool;
```
Verify a passed source with a payload and passphrase

## Encryption\Security\JWT\Signer\SignerInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Signer/SignerInterface.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Signer`

-   __Uses__

-   __Extends__

-   __Implements__

Interface for JWT Signer classes

### Methods

```php
public function getAlgHeader(): string;
```
Return the value that is used for the "alg" header

```php
public function getAlgorithm(): string;
```
Return the algorithm used

```php
public function sign( string $payload, string $passphrase ): string;
```
Sign a payload using the passphrase

```php
public function verify( string $source, string $payload, string $passphrase ): bool;
```
Verify a passed source with a payload and passphrase

## Encryption\Security\JWT\Token\AbstractItem ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/AbstractItem.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Token`

-   __Uses__

-   __Extends__

-   __Implements__

Abstract helper class for Tokens

### Properties
```php
/**
 * @var array
 */
protected $data;

```

### Methods

```php
public function getEncoded(): string;
```

## Encryption\Security\JWT\Token\Enum 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/Enum.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Token`

-   __Uses__

-   __Extends__

-   __Implements__

Constants for Tokens. It offers constants for Headers as well as Claims

@link https://tools.ietf.org/html/rfc7519

### Constants
```php
const ALGO = alg;
const AUDIENCE = aud;
const CONTENT_TYPE = cty;
const EXPIRATION_TIME = exp;
const ID = jti;
const ISSUED_AT = iat;
const ISSUER = iss;
const NOT_BEFORE = nbf;
const SUBJECT = sub;
const TYPE = typ;
```

## Encryption\Security\JWT\Token\Item 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/Item.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Token`

-   __Uses__

-   __Extends__

    `AbstractItem`

-   __Implements__

Storage class for a Token Item

### Methods

```php
public function __construct( array $payload, string $encoded );
```
Item constructor.

```php
public function get( string $name, mixed $defaultValue = null ): mixed | null;
```

```php
public function getPayload(): array;
```

```php
public function has( string $name ): bool;
```

## Encryption\Security\JWT\Token\Parser 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/Parser.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Token`

-   __Uses__

    - `InvalidArgumentException`
    - `Phalcon\Support\Helper\Json\Decode`

-   __Extends__

-   __Implements__

Token Parser class.

It parses a token by validating if it is formed properly and splits it into
three parts. The headers are decoded, then the claims and finally the
signature. It returns a token object populated with the decoded information.

### Properties
```php
/**
 * @var Decode
 */
private $decode;

```

### Methods

```php
public function __construct( Decode $decode = null );
```

```php
public function parse( string $token ): Token;
```
Parse a token and return it

## Encryption\Security\JWT\Token\Signature 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/Signature.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Token`

-   __Uses__

-   __Extends__

    `AbstractItem`

-   __Implements__

Signature class containing the encoded data and the hash.

### Methods

```php
public function __construct( string $hash = string, string $encoded = string );
```
Signature constructor.

```php
public function getHash(): string;
```

## Encryption\Security\JWT\Token\Token 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Token/Token.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT\Token`

-   __Uses__

    - `Phalcon\Encryption\Security\JWT\Signer\SignerInterface`
    - `Phalcon\Encryption\Security\JWT\Validator`

-   __Extends__

-   __Implements__

Token Class.

A container for Token related data. It stores the claims, headers, signature
and payload. It also calculates and returns the token string.

@link https://tools.ietf.org/html/rfc7519

### Properties
```php
/**
 * @var Item
 */
private $claims;

/**
 * @var Item
 */
private $headers;

/**
 * @var Signature
 */
private $signature;

```

### Methods

```php
public function __construct( Item $headers, Item $claims, Signature $signature );
```
Token constructor.

```php
public function getClaims(): Item;
```
Return the registered claims

```php
public function getHeaders(): Item;
```
Return the registered headers

```php
public function getPayload(): string;
```
Return the payload

```php
public function getSignature(): Signature;
```
Return the signature

```php
public function getToken(): string;
```
Return the token

```php
public function validate( Validator $validator ): array;
```

```php
public function verify( SignerInterface $signer, string $key ): bool;
```
Verify the signature

## Encryption\Security\JWT\Validator 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/JWT/Validator.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\JWT`

-   __Uses__

    - `Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException`
    - `Phalcon\Encryption\Security\JWT\Signer\SignerInterface`
    - `Phalcon\Encryption\Security\JWT\Token\Enum`
    - `Phalcon\Encryption\Security\JWT\Token\Token`

-   __Extends__

-   __Implements__

Class Validator

### Properties
```php
/**
 * @var array
 */
private $claims;

/**
 * @var array
 */
private $errors;

/**
 * @var int
 */
private $timeShift = ;

/**
 * @var Token
 */
private $token;

```

### Methods

```php
public function __construct( Token $token, int $timeShift = int );
```
Validator constructor.

```php
public function get( string $claim ): mixed | null;
```
Return the value of a claim

```php
public function getErrors(): array;
```
Return an array with validation errors (if any)

```php
public function set( string $claim, mixed $value ): Validator;
```
Set the value of a claim, for comparison with the token values

```php
public function setToken( Token $token ): Validator;
```
Set the token to be validated

```php
public function validateAudience( mixed $audience ): Validator;
```
Validate the audience

```php
public function validateClaim( string $name, mixed $value ): Validator;
```
Validate a claim

```php
public function validateExpiration( int $timestamp ): Validator;
```
Validate the expiration time of the token

```php
public function validateId( string $id ): Validator;
```
Validate the id of the token

```php
public function validateIssuedAt( int $timestamp ): Validator;
```
Validate the issued at (iat) of the token

```php
public function validateIssuer( string $issuer ): Validator;
```
Validate the issuer of the token

```php
public function validateNotBefore( int $timestamp ): Validator;
```
Validate the notbefore (nbf) of the token

```php
public function validateSignature( SignerInterface $signer, string $passphrase ): Validator;
```
Validate the signature of the token

## Encryption\Security\Random 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Random.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security`

-   __Uses__

-   __Extends__

-   __Implements__

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

### Methods

```php
public function base58( int $len = int ): string;
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
@throws Exception If secure random number generator is not available or unexpected partial read

```php
public function base62( int $len = int ): string;
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
@throws Exception If secure random number generator is not available or unexpected partial read

```php
public function base64( int $len = int ): string;
```
Generates a random base64 string

The length of the result string is usually greater of $len.
Size formula: 4($len / 3) rounded up to a multiple of 4.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->base64(12); // 3rcq39QzGK9fUqh8
```

@throws Exception If secure random number generator is not available or unexpected partial read

```php
public function base64Safe( int $len = int, bool $padding = bool ): string;
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
@throws Exception If secure random number generator is not available or unexpected partial read

```php
public function bytes( int $len = int ): string;
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

@throws Exception If secure random number generator is not available or unexpected partial read

```php
public function hex( int $len = int ): string;
```
Generates a random hex string

The length of the result string is usually greater of $len.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->hex(10); // a29f470508d5ccb8e289
```

@throws Exception If secure random number generator is not available or unexpected partial read

```php
public function number( int $len ): int;
```
Generates a random number between 0 and $len

Returns an integer: 0 &lt;= result &lt;= $len.

```php
$random = new \Phalcon\Encryption\Security\Random();

echo $random->number(16); // 8
```
@throws Exception If secure random number generator is not available,
                  unexpected partial read or $len &lt;= 0

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

```php
protected function base( string $alphabet, int $base, mixed $n = int ): string;
```
Generates a random string based on the number ($base) of characters
($alphabet).

@throws Exception If secure random number generator is not available or unexpected partial read

## Encryption\Security\Uuid 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security`

-   __Uses__

    - `Phalcon\Encryption\Security\Uuid\Version1`
    - `Phalcon\Encryption\Security\Uuid\Version3`
    - `Phalcon\Encryption\Security\Uuid\Version4`
    - `Phalcon\Encryption\Security\Uuid\Version5`
    - `Phalcon\Encryption\Security\Uuid\Version6`
    - `Phalcon\Encryption\Security\Uuid\Version7`

-   __Extends__

-   __Implements__

Factory that generates UUIDs of versions 1 through 7.

Each call creates a new immutable version object. Cast to string for the
UUID value; use the returned object for additional methods such as
getDateTime() or getNode().

@method Version1 v1()
@method Version3 v3(string $namespaceName, string $name)
@method Version4 v4()
@method Version5 v5(string $namespaceName, string $name)
@method Version6 v6()
@method Version7 v7()

### Methods

```php
public function v1(): Version1;
```
Generates a version 1 (time-based) UUID.

```php
public function v3( string $namespaceName, string $name ): Version3;
```
Generates a version 3 (name-based MD5) UUID.

```php
public function v4(): Version4;
```
Generates a version 4 (random) UUID.

```php
public function v5( string $namespaceName, string $name ): Version5;
```
Generates a version 5 (name-based SHA-1) UUID.

```php
public function v6(): Version6;
```
Generates a version 6 (reordered time-based) UUID.

```php
public function v7(): Version7;
```
Generates a version 7 (Unix timestamp) UUID.

## Encryption\Security\Uuid\AbstractUuid ![Abstract](/assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/AbstractUuid.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

-   __Implements__

    - `UuidInterface`

Shared base for all UUID version objects.

### Constants
```php
const MAX = ffffffff-ffff-ffff-ffff-ffffffffffff;
const NIL = 00000000-0000-0000-0000-000000000000;
const TIME_OFFSET_INT = 0x01B21DD213814000;
```

### Properties
```php
/**
 * Cached SysNodeProvider instance - shared within the request via static.
 *
 * @var NodeProviderInterface|null
 */
protected static $nodeProvider;

/**
 * The generated UUID string.
 *
 * @var string
 */
protected $uid = ;

```

### Methods

```php
public function __toString(): string;
```
Returns the UUID string.

```php
public function jsonSerialize(): string;
```
Returns the UUID string for JSON serialisation.

```php
protected function format( string $hex ): string;
```
Formats a 32-character hex string as a canonical UUID string.

```php
protected function getNodeProvider(): NodeProviderInterface;
```
Returns the shared SysNodeProvider instance, creating it on first call.
The static property means one discovery per request regardless of how
many VersionN objects are constructed.

```php
protected function namespaceToBytes( string $uuid ): string;
```
Converts a canonical UUID string to its 16-byte binary representation.

```php
protected function uuidTimestampToDateTime( mixed $timestamp ): \DateTimeImmutable;
```
Converts a 60-bit UUID timestamp (100-ns intervals since UUID epoch) to
a DateTimeImmutable. Used by Version1 and Version6.

## Encryption\Security\Uuid\NodeProviderInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/NodeProviderInterface.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

-   __Implements__

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-uuid
@link    https://github.com/sinbadxiii/cphalcon-uuid

### Methods

```php
public function getNode(): string;
```

## Encryption\Security\Uuid\RandomNodeProvider 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/RandomNodeProvider.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

-   __Implements__

    - `NodeProviderInterface`

Generates a random 48-bit node with the multicast bit set.

Used as a fallback when no hardware MAC address is available.

@link https://www.ietf.org/rfc/rfc4122.txt Section 4.5

### Methods

```php
public function getNode(): string;
```
Returns a random 12-character hex node with the multicast bit set.

## Encryption\Security\Uuid\SysNodeProvider 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/SysNodeProvider.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

-   __Implements__

    - `NodeProviderInterface`

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

### Properties
```php
/**
 * @var string|null
 */
private $node;

```

### Methods

```php
public function getNode(): string;
```
Returns the hardware MAC address as a 12-character hex string.
Result is cached in the instance property and optionally in APCu.

## Encryption\Security\Uuid\TimeBasedUuidInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/TimeBasedUuidInterface.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

-   __Implements__

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

Implementation of this file has been influenced by sinbadxiii/cphalcon-uuid
@link    https://github.com/sinbadxiii/cphalcon-uuid

### Methods

```php
public function getDateTime(): \DateTimeImmutable;
```

```php
public function getNode(): string;
```

## Encryption\Security\Uuid\UuidInterface ![Interface](/assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/UuidInterface.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

-   __Implements__

Marker interface for UUID version adapters.

Also carries the standard RFC 4122 namespace UUIDs as constants.

### Constants
```php
const NAMESPACE_DNS = 6ba7b810-9dad-11d1-80b4-00c04fd430c8;
const NAMESPACE_OID = 6ba7b812-9dad-11d1-80b4-00c04fd430c8;
const NAMESPACE_URL = 6ba7b811-9dad-11d1-80b4-00c04fd430c8;
const NAMESPACE_X500 = 6ba7b814-9dad-11d1-80b4-00c04fd430c8;
```

## Encryption\Security\Uuid\Version1 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version1.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

    `AbstractUuid`

-   __Implements__

    - `TimeBasedUuidInterface`

Generates a version 1 (time-based) UUID.

The timestamp is the number of 100-nanosecond intervals since
October 15, 1582 00:00:00.00 UTC (the UUID epoch). The node is resolved
via SysNodeProvider (hardware MAC, APCu-cached) with RandomNodeProvider
as fallback.

@link https://www.ietf.org/rfc/rfc4122.txt

### Methods

```php
public function __construct( \DateTimeInterface $dateTime = null, mixed $node = null );
```

```php
public function getDateTime(): \DateTimeImmutable;
```
Returns a DateTimeImmutable built from the UUID's embedded timestamp.

```php
public function getNode(): string;
```
Returns the 12-character hex node embedded in the UUID.

## Encryption\Security\Uuid\Version3 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version3.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

    `AbstractUuid`

-   __Implements__

Generates a version 3 (name-based MD5) UUID.

Given a namespace UUID and a name string, produces a deterministic UUID
by hashing namespace bytes + name with MD5, then stamping version/variant.

@link https://www.ietf.org/rfc/rfc4122.txt

### Methods

```php
public function __construct( string $namespaceName, string $name );
```

## Encryption\Security\Uuid\Version4 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version4.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

    `AbstractUuid`

-   __Implements__

Generates a version 4 (random) UUID.

All 122 non-fixed bits are random. Identical algorithm to
Phalcon\Encryption\Security\Random::uuid().

@link https://www.ietf.org/rfc/rfc4122.txt

### Methods

```php
public function __construct();
```

## Encryption\Security\Uuid\Version5 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version5.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

    `AbstractUuid`

-   __Implements__

Generates a version 5 (name-based SHA-1) UUID.

Given a namespace UUID and a name string, produces a deterministic UUID
by hashing namespace bytes + name with SHA-1 (first 16 bytes used),
then stamping version/variant bits.

@link https://www.ietf.org/rfc/rfc4122.txt

### Methods

```php
public function __construct( string $namespaceName, string $name );
```

## Encryption\Security\Uuid\Version6 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version6.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

    `AbstractUuid`

-   __Implements__

    - `TimeBasedUuidInterface`

Generates a version 6 (reordered time-based) UUID.

Uses the same 60-bit UUID timestamp as version 1 but rearranges the
fields so the most-significant time bits come first, producing UUIDs
that sort lexicographically in chronological order.

@link https://www.rfc-editor.org/rfc/rfc9562

### Methods

```php
public function __construct();
```

```php
public function getDateTime(): \DateTimeImmutable;
```
Returns a DateTimeImmutable built from the UUID's embedded timestamp.

```php
public function getNode(): string;
```
Returns the 12-character hex node embedded in the UUID.

## Encryption\Security\Uuid\Version7 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Encryption/Security/Uuid/Version7.zep)

-   __Namespace__

    - `Phalcon\Encryption\Security\Uuid`

-   __Uses__

-   __Extends__

    `AbstractUuid`

-   __Implements__

Generates a version 7 (Unix timestamp) UUID per RFC 9562.

Layout (128 bits):
  unix_ts_ms (48) | ver=7 (4) | rand_a (12) | var=10 (2) | rand_b (62)

@link https://www.rfc-editor.org/rfc/rfc9562

### Methods

```php
public function __construct();
```

Source: https://docs.phalcon.io/5.13/api/phalcon_encryption/index.mdx
