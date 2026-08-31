---
title: "Validation Component"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Validation Component

## Overview

[Phalcon\Filter\Validation][validation] is an independent validation component that validates an arbitrary set of data. This component can be used to implement validation rules on data objects that do not belong to a model or collection.

The following example shows its basic usage:

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Email;
use Phalcon\Filter\Validation\Validator\PresenceOf;

$validation = new Validation();

$validation->add(
'name',
new PresenceOf(
    [
        'message' => 'The name is required',
    ]
)
);

$validation->add(
'email',
new PresenceOf(
    [
        'message' => 'The e-mail is required',
    ]
)
);

$validation->add(
'email',
new Email(
    [
        'message' => 'The e-mail is not valid',
    ]
)
);

$messages = $validation->validate($_POST);

if (count($messages)) {
foreach ($messages as $message) {
    echo $message, '<br>';
}
}
```

The loosely-coupled design of this component allows you to create your own validators along with the ones provided by the framework.

## Methods

```php
public function __construct(
array $validators = []
)
```

```php
public function add(
mixed $field, 
ValidatorInterface $validator
): ValidationInterface
```

Adds a validator to a field

```php
public function appendMessage(
MessageInterface $message
): ValidationInterface
```

Appends a message to the messages list

```php
public function bind(
object $entity, 
array | object $data,
array $whitelist = []
): ValidationInterface
```

Assigns the data to an entity. The entity is used to obtain the validation values. When `$whitelist` is supplied, only the fields listed in it will be assigned to the entity; all other fields are skipped.

```php
public static function getDefaultMessage(
string $validatorClassName
): string
```

Returns the default message registered for a validator class, or an empty string when none has been registered

```php
public function getEntity(): object
```

Returns the bound entity

```php
public function getFilters(
string $field = null
): mixed
```

Returns all the filters or a specific one

```php
public function getLabel(
string $field
): string
```

Get a label for the field

```php
public function getMessages(): Messages
```

Returns the registered validators

```php
public function getValidators(): array
```

Returns the validators added to the validation

```php
public function getValue(
string $field
): mixed
```

Gets a value to validate in the array/object data source

```php
public function getValueByEntity(mixed $entity, string $field): mixed
```

Gets the value to validate in the object entity source

```php
public function getValueByData(mixed $data, string $field): mixed
```

Gets the value to validate in the array/object data source

```php
public function rule(
mixed $field, 
ValidatorInterface $validator
): ValidationInterface
```

Alias of `add` method

```php
public function rules(
mixed $field, 
array $validators
): ValidationInterface
```

Adds the validators to a field

```php
public static function setDefaultMessages(
array $messages = []
): array
```

Registers default messages for validators, keyed by validator class name. Calls are merged with any previously registered defaults. Returns the full map of registered defaults.

```php
public function setEntity(
object $entity
): void
```

Sets the bound entity

```php
public function setFilters(
string $field, 
array | string $filters
): ValidationInterface
```

Add filters to the field

```php
public function setLabels(
array $labels
): void
```

Adds labels for fields

```php
public function validate(
array | object $data = null, 
object $entity = null,
array $whitelist = []
): Messages
```

Validate a set of data according to a set of rules. When `$whitelist` is supplied, only the listed fields are bound to `$entity`; validation itself still runs over all configured fields.

```php
public function fails(): bool
```

Verify if the validation has failed or not. Returns `true` when validation fails, `false` when validation succeeds.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\PresenceOf;

$validation = new Validation();
$validation->add('name', new PresenceOf(['message' => 'Name is required']));

$validation->validate(['name' => '']);

if ($validation->fails()) {
foreach ($validation->getMessages() as $message) {
    echo $message, PHP_EOL;
}
}
```

## Activation

Validation chains can be initialized in a direct manner by adding validators to the [Phalcon\Filter\Validation][validation] object. You can put your validations in a separate file for better code reuse and organization.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Email;
use Phalcon\Filter\Validation\Validator\PresenceOf;

class MyValidation extends Validation
{
public function initialize()
{
    $this->add(
        'name',
        new PresenceOf(
            [
                'message' => 'The name is required',
            ]
        )
    );

    $this->add(
        'email',
        new PresenceOf(
            [
                'message' => 'The e-mail is required',
            ]
        )
    );

    $this->add(
        'email',
        new Email(
            [
                'message' => 'The e-mail is not valid',
            ]
        )
    );
}
}
```

Then initialize and use your own validator:

```php
<?php

$validation = new MyValidation();

$messages = $validation->validate($_POST);

if (count($messages)) {
foreach ($messages as $message) {
    echo $message, '<br>';
}
}
```

## Validators

Phalcon offers a set of built-in validators for this component:

| Class                                                                                                   | Validates                  |
|---------------------------------------------------------------------------------------------------------|----------------------------|
| [Phalcon\Filter\Validation\Validator\Alnum][validation-validator-alnum]                                 | Alphanumeric character(s)  |
| [Phalcon\Filter\Validation\Validator\Alpha][validation-validator-alpha]                                 | Alphabet character(s).     |
| [Phalcon\Filter\Validation\Validator\Between][validation-validator-between]                             | Between two values         |
| [Phalcon\Filter\Validation\Validator\Callback][validation-validator-callback]                           | Callback function          |                       
| [Phalcon\Filter\Validation\Validator\Confirmation][validation-validator-confirmation]                   | Identical field values     |
| [Phalcon\Filter\Validation\Validator\CreditCard][validation-validator-creditcard]                       | Credit card number         |                           
| [Phalcon\Filter\Validation\Validator\Date][validation-validator-date]                                   | Date.                      |
| [Phalcon\Filter\Validation\Validator\Digit][validation-validator-digit]                                 | Numeric character(s).      |
| [Phalcon\Filter\Validation\Validator\Email][validation-validator-email]                                 | Email                      |
| [Phalcon\Filter\Validation\Validator\ExclusionIn][validation-validator-exclusionin]                     | Not within value set       |
| [Phalcon\Filter\Validation\Validator\File][validation-validator-file]                                   | File                       |
| [Phalcon\Filter\Validation\Validator\File\MimeType][validation-validator-file-mimetype]                 | Mimetype File              |
| [Phalcon\Filter\Validation\Validator\File\Resolution\AspectRatio][validation-validator-file-resolution-aspectratio] | Aspect ratio of File |
| [Phalcon\Filter\Validation\Validator\File\Resolution\Equal][validation-validator-file-resolution-equal] | Equal resolution of File   |
| [Phalcon\Filter\Validation\Validator\File\Resolution\Max][validation-validator-file-resolution-max]     | Maximum resolution of File |
| [Phalcon\Filter\Validation\Validator\File\Resolution\Min][validation-validator-file-resolution-min]     | Minimum resolution of File |
| [Phalcon\Filter\Validation\Validator\File\Size\Equal][validation-validator-file-size-equal]             | Equal File Size            |
| [Phalcon\Filter\Validation\Validator\File\Size\Max][validation-validator-file-size-max]                 | Maximum File Size          |
| [Phalcon\Filter\Validation\Validator\File\Size\Min][validation-validator-file-size-min]                 | Minimum File Size          |
| [Phalcon\Filter\Validation\Validator\Files][validation-validator-files]                                 | Array of files             |
| [Phalcon\Filter\Validation\Validator\Identical][validation-validator-identical]                         | Equal specific value       |
| [Phalcon\Filter\Validation\Validator\InclusionIn][validation-validator-inclusionin]                     | Within value set           |
| [Phalcon\Filter\Validation\Validator\Ip][validation-validator-ip]                                       | IP                         |
| [Phalcon\Filter\Validation\Validator\Numericality][validation-validator-numericality]                   | Numeric Value              |
| [Phalcon\Filter\Validation\Validator\PresenceOf][validation-validator-presenceof]                       | Not `null` or empty        |
| [Phalcon\Filter\Validation\Validator\Regex][validation-validator-regex]                                 | Regex                      |
| [Phalcon\Filter\Validation\Validator\StringLength][validation-validator-stringlength]                   | Length                     |
| [Phalcon\Filter\Validation\Validator\StringLength\Max][validation-validator-stringlength-max]           | Maximum Length             |
| [Phalcon\Filter\Validation\Validator\StringLength\Min][validation-validator-stringlength-min]           | Minimum Length             |
| [Phalcon\Filter\Validation\Validator\Uniqueness][validation-validator-uniqueness]                       | Unique in Model            |
| [Phalcon\Filter\Validation\Validator\Url][validation-validator-url]                                     | URL                        |

### Alnum

Check for alphanumeric character(s)

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Alnum;

$validator = new Validation();

$validator->add(
"username",
new Alnum(
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
new Alnum(
    [
        "message" => [
            "username" => "username must contain only alphanumeric characters",
            "name"     => "name must contain only alphanumeric characters",
        ],
    ]
)
);
```

### Alpha

Check for alphabetic character(s)

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Alpha;

$validator = new Validation();

$validator->add(
"username",
new Alpha(
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
new Alpha(
    [
        "message" => [
            "username" => "username must contain only letters",
            "name"     => "name must contain only letters",
        ],
    ]
)
);
```

### Between

Validates that a value is between an inclusive range of two values. The validation passes if for a value `L`, the minimum is less or equal to `L`, and `L` is less or equal to the maximum. The boundaries are included in this validation. The formula is:

```
minimum <= value <= maximum
```

```php
<?php

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

### Callback

By using [Phalcon\Filter\Validation\Validator\Callback][validation-validator-callback] you can execute a custom function that must return boolean or a new validator class which will be used to validate the same field. By returning `true` validation will be successful, returning `false` will mean validation failed. When executing this validator Phalcon will pass data depending on what it is - if it's an entity (i.e. a model, a `stdClass` etc.) then the entity will be passed, otherwise data (i.e. an array like `$_POST`). There is an example:

```php
<?php

use \Phalcon\Filter\Validation;
use \Phalcon\Filter\Validation\Validator\Callback;
use \Phalcon\Filter\Validation\Validator\PresenceOf;

$validation = new Validation();
$validation->add(
'amount',
new Callback(
    [
        'callback' => function ($data) {
            return $data['amount'] % 2 == 0;
        },
        'message'  => 'Only even number of products are accepted'
    ]
)
);
$validation->add(
'amount',
new Callback(
    [
        'callback' => function ($data) {
            if ($data['amount'] % 2 == 0) {
                return $data['amount'] != 2;
            }

            return true;
        },
        'message' => "You cannot buy 2 products"
    ]
)
);
$validation->add(
'description',
new Callback(
    [
        'callback' => function ($data) {
            if ($data['amount'] >= 10) {
                return new PresenceOf(
                    [
                        'message' => 'You must write why you need so big amount.'
                    ]
                );
            }

            return true;
        }
    ]
)
);

// Validator #1
$messages = $validation->validate(['amount' => 1]);
// Validator #2
$messages = $validation->validate(['amount' => 2]);
// Validator #3
$messages = $validation->validate(['amount' => 10]);
```

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Callback;
use Phalcon\Filter\Validation\Validator\Numericality;

$validator = new Validation();

$validator->add(
["user", "admin"],
new Callback(
    [
        "message" => "User cannot belong to two groups",
        "callback" => function($data) {
            if (!empty($data->getUser()) && 
                !empty($data->getAdmin())) {
                return false;
            }

            return true;
        }
    ]
)
);

$validator->add(
"amount",
new Callback(
    [
        "callback" => function($data) {
            if (!empty($data->getProduct())) {
                return new Numericality(
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

The closure passed as the `callback` option keeps its own `$this`. A closure that you write inside a class can therefore still read the properties and call the methods of the object that created it.

To reach the validator from inside the callback, declare a second parameter. The [Phalcon\Filter\Validation\Validator\Callback][validation-validator-callback] validator is passed as the second argument to every closure that declares one. The callback can then call the validator's own public methods - such as `setTemplate()` - to change the failure message depending on which check failed. A closure that declares one parameter receives the data only. String function names and `[object, method]` callables never receive the validator.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Callback;

$validation = new Validation();
$validation->add(
'title',
new Callback(
    [
        'message'  => 'The title is not valid',
        'callback' => function ($data, $validator) {
            if (!is_string($data['title'])) {
                $validator->setTemplate('Title is not a string');

                return false;
            }

            if (strlen($data['title']) > 10) {
                $validator->setTemplate('Title too long');

                return false;
            }

            return true;
        },
    ]
)
);
```

A template set this way applies to the current call only. The validator restores the previous template when the call ends. A later call that does not call `setTemplate()` therefore falls back to the `message` or `template` option.

:::info[NOTE]
Earlier releases bound the closure to the validator, which replaced `$this` inside the callback. A callback written for those releases must declare the second parameter and call `$validator->setTemplate()` in place of `$this->setTemplate()`.
:::

### Confirmation

Checks that two values have the same value

```php
<?php 

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Confirmation;

$validator = new Validation();

$validator->add(
"password",
new Confirmation(
    [
        "message" => "Password doesn't match confirmation",
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
            "password" => "Password doesn't match confirmation",
            "email"    => "Email doesn't match confirmation",
        ],
        "with" => [
            "password" => "confirmPassword",
            "email"    => "confirmEmail",
        ],
    ]
)
);
```

### CreditCard

Checks if a value has a valid credit card number

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\CreditCard;

$validator = new Validation();

$validator->add(
"creditCard",
new CreditCard(
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
new CreditCard(
    [
        "message" => [
            "creditCard"       => "The credit card number is not valid",
            "secondCreditCard" => "The second credit card number is not valid",
        ],
    ]
)
);
```

### Date

Checks if a value is a valid date

```php
<?php

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

### Digit

Check for numeric character(s)

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Digit;

$validator = new Validation();

$validator->add(
"height",
new Digit(
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
new Digit(
    [
        "message" => [
            "height" => "height must be numeric",
            "width"  => "width must be numeric",
        ],
    ]
)
);
```

### Email

Checks if a value has a correct e-mail format. If the data to be validated contains UTF-8 characters, you can set the `allowUTF8` option to `true` to allow them.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Email;

$validator = new Validation();

$validator->add(
"email",
new Email(
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
new Email(
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
new Email(
    [
        "message" => "The e-mail is not valid",
        "allowUTF8" => true,
    ]
)
);
```

### ExclusionIn

Check if a value is not included in a list of values

```php
<?php

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

### File

Checks if a value has a correct file

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File;

$validator = new Validation();

$validator->add(
"file",
new File(
    [
        "maxSize"              => "2M",
        "messageSize"          => ":field exceeds the max size (:size)",
        "allowedTypes"         => [
            "image/jpeg",
            "image/png",
        ],
        "messageType"          => "Allowed file types are :types",
        "maxResolution"        => "800x600",
        "messageMaxResolution" => "Max resolution of :field is :resolution",
        "aspectRatio"          => "16x9",
        "messageAspectRatio"   => "Aspect ratio of :field has to be :ratio",
    ]
)
);

$validator->add(
[
    "file",
    "anotherFile",
],
new File(
    [
        "maxSize" => [
            "file"        => "2M",
            "anotherFile" => "4M",
        ],
        "messageSize" => [
            "file"        => "file exceeds the max size 2M",
            "anotherFile" => "anotherFile exceeds the max size 4M",
        ],
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

The File validator forwards an `allowWildcards` option to the [File MimeType](#file-mimetype) check it builds from `allowedTypes`. Set it to `true` to treat each `allowedTypes` entry as an anchored regular expression:

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File;

$validator = new Validation();

$validator->add(
"file",
new File(
    [
        "allowedTypes"   => [
            "image/.*",
            "video/.*",
        ],
        "allowWildcards" => true,
        "messageType"    => "Allowed file types are :types",
    ]
)
);
```

### File MimeType

Checks if a value has a correct file mime type

```php
<?php

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

By default the detected MIME type must match one of the configured `types` exactly. Set the `allowWildcards` option to `true` to match each configured entry as an anchored regular expression instead, which accepts a whole MIME family without listing every subtype:

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\MimeType;

$validator = new Validation();

$validator->add(
"file",
new MimeType(
    [
        "types" => [
            "image/.*",
            "video/.*",
        ],
        "allowWildcards" => true,
        "message"        => "Allowed file types are :types",
    ]
)
);
```

Each entry is anchored on both ends (`#^...$#`), so `image/.*` matches `image/png` and `image/jpeg` but not `text/plain`. An exact string comparison is tried first, so literal types that contain regular-expression metacharacters, such as `image/svg+xml`, still match themselves. The option defaults to `false`, which preserves the exact-match behavior.

### File Resolution AspectRatio

Checks if a file has the exact aspect ratio

The `ratio` option uses the same `WxH` format as the resolution validators (for instance `16x9`). The comparison uses integer cross-multiplication, so the image dimensions must match the ratio exactly: 1920x1080 matches `16x9`, 1366x768 does not. The message supports the `:ratio` placeholder.

```php
<?php

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

### File Resolution Equal

Check if a file has the right resolution

```php
<?php

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

### File Resolution Max

Check if a file has the right resolution

```php
<?php

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

### File Resolution Min

Check if a file has the right resolution

```php
<?php

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

### File Size Equal

Checks if a value has a correct file

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Size\Equal;

$validator = new Validation();

$validator->add(
"file",
new Equal(
    [
        "size"     => "2M",
        "included" => true,
        "message"  => ":field exceeds the size (:size)",
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
            "file"        => "file does not have the correct size",
            "anotherFile" => "anotherFile wrong size (4MB)",
        ],
    ]
)
);
```

### File Size Max

Checks if a value has a correct file

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Size\Max;

$validator = new Validation();

$validator->add(
"file",
new Max(
    [
        "size"     => "2M",
        "included" => true,
        "message"  => ":field exceeds the max size (:size)",
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
            "file"        => "file exceeds the max size 2M",
            "anotherFile" => "anotherFile exceeds the max size 4M",
        ],
    ]
)
);
```

### File Size Min

Checks if a value has a correct file

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\File\Size\Min;

$validator = new Validation();

$validator->add(
"file",
new Min(
    [
        "size"     => "2M",
        "included" => true,
        "message"  => ":field exceeds the min size (:size)",
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
            "file"        => "file exceeds the min size 2M",
            "anotherFile" => "anotherFile exceeds the min size 4M",
        ],
    ]
)
);
```

### Files

Checks that a field holds a correct array of uploaded files.

The `Files` validator accepts the same options as [File](#file) and applies them to every file in the field. It validates the `<input type="file" name="photos[]" multiple>` case, where one input carries several files. Validation stops at the first file that fails a rule.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Files;

$validator = new Validation();

$validator->add(
"photos",
new Files(
    [
        "maxSize"      => "2M",
        "messageSize"  => ":field exceeds the max size (:size)",
        "allowedTypes" => [
            "image/jpeg",
            "image/png",
        ],
        "messageType"  => "Allowed file types are :types",
    ]
)
);
```

PHP delivers a multiple-file input as one `$_FILES` entry whose `name`, `type`, `tmp_name`, `error` and `size` members each hold one value per file. The validator normalizes that structure into individual files and validates each one through a `File` validator built from the supplied options. A single (non-`multiple`) file entry is also accepted and validated as one file.

Set the `allowEmpty` option to `true` to pass validation when no file is uploaded:

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Files;

$validator = new Validation();

$validator->add(
"photos",
new Files(
    [
        "allowedTypes" => [
            "image/jpeg",
            "image/png",
        ],
        "allowEmpty"   => true,
    ]
)
);
```

### Identical

Checks if a value is identical to other

```php
<?php

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
    "otherTerms",
],
new Identical(
    [
        "accepted" => [
            "terms"        => "yes",
            "otherTerms" => "yes",
        ],
        "message" => [
            "terms"        => "Terms and conditions must be accepted",
            "otherTerms" => "Other terms must be accepted",
        ],
    ]
)
);
```

### InclusionIn

Check if a value is included in a list of values

```php
<?php

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

### Ip

Check for IP addresses

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Ip;

$validator = new Validation();

$validator->add(
"ip_address",
new Ip(
    [
        "message"       => ":field must contain only ip addresses",
        // v6 and v4. The same if not specified
        "version"       => Ip::VERSION_4 | Ip::VERSION_6, 
        // False if not specified. Ignored for v6
        "allowReserved" => false,
        // False if not specified
        "allowPrivate"  => false,
        "allowEmpty"    => false,
    ]
)
);

$validator->add(
[
    "source_address",
    "destination_address",
],
new Ip(
    [
        "message" => [
            "source_address"      => "source_address must be a valid IP address",
            "destination_address" => "destination_address must be a valid IP address",
        ],
        "version" => [
             "source_address"      => Ip::VERSION_4 | Ip::VERSION_6,
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

### Numericality

Check for a valid numeric value

```php
<?php

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

### PresenceOf

Validates whether a field is present

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\PresenceOf;

$validation = new Validation();

$validation->add(
'name',
new PresenceOf(
    [
        'message' => 'The name is required',
    ]
)
);
```

### Regex

Validates a field based on a regex pattern.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Regex;

$validation = new Validation();

$validation->add(
'telephone',
new Regex(
    [
        'message' => 'The telephone is required',
        'pattern' => '/\+1 [0-9]+/',
    ]
)
);
```

### StringLength

Validates that a string has the specified maximum and minimum constraints. The validation passes if for a string length `L`, the minimum is less or equal to `L` and `L` is less or equal to the maximum. The boundaries are included in this validation. The formula is:

```
minimum <= string length <= maximum
```

This validator works like a container.

Both boundaries are inclusive by default. `includedMinimum` and `includedMaximum` control one boundary each. Set an option to `false` to exclude that boundary.

| Option            | Default | `false` changes the test to |
| ----------------- | ------- | --------------------------- |
| `includedMinimum` | `true`  | `minimum < string length`   |
| `includedMaximum` | `true`  | `string length < maximum`   |

The two options are independent. Setting one leaves the other at its default. The `included` option sets both boundaries at once and takes precedence over `includedMinimum` and `includedMaximum`.

Both options also accept an array keyed by field name, in the same way as `min`, `max` and the message options.

:::info[NOTE]
Earlier releases treated both boundaries as exclusive when `includedMinimum` and `includedMaximum` were not set. A string of exactly the minimum or maximum length failed the validation. The boundaries are now inclusive unless you set the option to `false`.
:::

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\StringLength;

$validation = new Validation();

$validation->add(
"name_last",
new StringLength(
    [
        "max"             => 50,
        "min"             => 2,
        "messageMaximum"  => "Name too long",
        "messageMinimum"  => "Only initials please",
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
            "name_last"  => "Last name too short",
            "name_first" => "First name too short",
        ],
        "messageMinimum" => [
            "name_last"  => "Last name too long",
            "name_first" => "First name too long",
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

### StringLength Max

Validates that a string has the specified maximum constraints. The validation passes if for a string length `L` it is less or equal to the maximum. The formula is:

```
string length <= maximum
```

The maximum is inclusive by default. Set `included` to `false` to exclude it, which changes the test to `string length < maximum`. The option also accepts an array keyed by field name.

`includedMaximum` is an alias of `included`, so the option name used by the `StringLength` container also works here. If you set both, `included` takes precedence.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\StringLength\Max;

$validation = new Validation();

$validation->add(
"name_last",
new Max(
    [
        "max"      => 50,
        "message"  => "Last name too long",
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
            "name_last"  => "Last name too long",
            "name_first" => "First name too long",
        ],
        "included" => [
            "name_last"  => false,
            "name_first" => true,
        ]
    ]
)
);
```

Using the alias, which rejects a last name of exactly 50 characters:

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\StringLength\Max;

$validation = new Validation();

$validation->add(
"name_last",
new Max(
    [
        "max"             => 50,
        "message"         => "Last name too long",
        "includedMaximum" => false,
    ]
)
);
```

### StringLength Min

Validates that a string has the specified minimum constraints. The validation passes if for a string length `L` it is more or equal to the minimum. The formula is:

```
minimum <= string length 
```

The minimum is inclusive by default. Set `included` to `false` to exclude it, which changes the test to `minimum < string length`. The option also accepts an array keyed by field name.

`includedMinimum` is an alias of `included`, so the option name used by the `StringLength` container also works here. If you set both, `included` takes precedence.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\StringLength\Min;

$validation = new Validation();

$validation->add(
"name_last",
new Min(
    [
        "min"     => 2,
        "message" => "Only initials please",
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
            "name_last"  => "Last name too short",
            "name_first" => "First name too short",
        ],
        "included" => [
            "name_last"  => false,
            "name_first" => true,
        ]
    ]
)
);
```

Using the alias, which rejects a last name of exactly 2 characters:

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\StringLength\Min;

$validation = new Validation();

$validation->add(
"name_last",
new Min(
    [
        "min"             => 2,
        "message"         => "Last name too short",
        "includedMinimum" => false,
    ]
)
);
```

### Uniqueness

Check that a field is unique in the related table

```php
<?php

use MyApp\Models\Customers;
use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Uniqueness;

$validator = new Validation();

$validator->add(
"cst_email",
new Uniqueness(
    [
        "model"   => new Customers(),
        "message" => ":field must be unique",
    ]
)
);
```

Different attributes from the field:

```php
<?php

$validator->add(
"cst_email",
new Uniqueness(
    [
        "model"     => new Invoices(),
        "attribute" => "nick",
    ]
)
);
```

:::info[NOTE]
The resolution of an array `attribute` option (used when validating a combination of fields) is specific to the `Uniqueness` validator. It is implemented in `Uniqueness::getOption()`; `getOption()` on every other validator returns the stored option unchanged.
:::

In the model:

```php
<?php

$validator->add(
"cst_email",
new Uniqueness()
);
```

Combination of fields in the model:

```php
<?php

$validator->add(
[
    "cst_name_last",
    "cst_name_first",
],
new Uniqueness()
);
```

It is possible to convert values before validation. This is useful in situations where values need to be converted for the database lookup:

```php
<?php

$validator->add(
"cst_email",
new Uniqueness(
    [
        "convert" => function (array $values) {
            $values["cst_email"] = trim($values["cst_email"]);

            return $values;
        }
    ]
)
);
```

#### Using except for fields (SQL operation "`value NOT IN (except)`")

Single field

```php
<?php

$validator->add(
"cst_email",
new Uniqueness(
    [
        "except" => "name@email.com"
    ]
)
);
```

Multiple fields with keys (each except will be applied to the value defined by the key)

```php
<?php

$validator->add(
["cst_email", "cst_phone"],
new Uniqueness(
    [
        "except" => [
            "cst_email" => "name@email.com",
            "cst_phone" => "82918304-3843",
        ]
    ]
)
);
```

Multiple fields without keys (each except will be applied to all values recursively)

```php
<?php

$validator->add(
["cst_email", "cmp_email"],
new Uniqueness(
    [
        "except" => [
            "name@email.com",
            "company@email.com",
        ],
    ]
)
);
```

Multiple fields with single except (except will be applied to all values recursively)

```php
<?php

$validator->add(
["cst_email", "cmp_email"],
new Uniqueness(
    [
        "except" => "name@email.com",
    ]
)
);
```

### Url

Checks if a value has a url format

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Url;

$validator = new Validation();

$validator->add(
"url",
new Url(
    [
        "message" => ":field must be a URL",
    ]
)
);

$validator->add(
[
    "url",
    "homepage",
],
new Url(
    [
        "message" => [
            "url"      => "url must be a url",
            "homepage" => "homepage must be a url",
        ]
    ]
)
);
```

You can also pass the `flags` option in the array, defining `FILTER_FLAG_PATH_REQUIRED` or `FILTER_FLAG_QUERY_REQUIRED` if necessary.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Url;

$validation = new Validation();

$validation->add(
'url',
new Url(
    [
        'options' => FILTER_FLAG_PATH_REQUIRED
    ]
)
);

$messages = $validation->validate(
[
    'url' => 'phalcon.io',
]
);

$validation->add(
'url',
new Url(
    [
        'options' => FILTER_FLAG_QUERY_REQUIRED
    ]
)
);

$messages = $validation->validate(
[
    'url' => 'https://',
]
);

$validation->add(
'url',
new Url(
    [
        'options' => [
            'flags' => [
                FILTER_FLAG_PATH_REQUIRED,
                FILTER_FLAG_QUERY_REQUIRED,
            ],
        ],
    ]
)
);

$messages = $validation->validate(
[
    'url' => 'phalcon',
]
);
```

### Custom Validators

You can create your own validators by implementing the [Phalcon\Filter\Validation\ValidatorInterface][validation-validatorinterface] or [Phalcon\Filter\Validation\Validator\CompositeInterface][validation-validatorcompositeinterface]. You can also extend the [Phalcon\Filter\Validation\AbstractCombinedFieldsValidator][validation-abstractcombinedfieldsvalidator], [Phalcon\Filter\Validation\AbstractValidator][validation-abstractvalidator] or [Phalcon\Filter\Validation\AbstractValidatorComposite][validation-abstractvalidatorcomposite].

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\AbstractValidator;

class IpValidator extends AbstractValidator
{
/**
 * Adding the default template error message
 *
 * @param array $options
 */
public function __construct(array $options = [])
{
    $this->template = 'The IP :ip_address is not valid';

    parent::__construct($options);
}

/**
 * Executes the validation
 *
 * @param Validation $validation
 * @param string     $field
 *
 * @return boolean
 */
public function validate(Validation $validation, $field)
{
    $value = $validation->getValue($field);

    if (!filter_var($value, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_IPV6)) {
        $replacements = [':ip_address' => $value];

        $validation->appendMessage(
            $this->messageFactory($validation, $field, $replacements)
        );

        return false;
    }

    return true;
}
}
```

It is important that validators return a valid `boolean` value indicating if the validation was successful or not.

## Messages

[Phalcon\Filter\Validation][validation] utilizes the [Phalcon\Messages\Messages][messages-messages] collection, providing a flexible way to output or store the validation messages generated during the validation processes.

Each message consists of an instance of the class [Phalcon\Messages\Message][messages-message]. The set of messages generated can be retrieved with the `getMessages()` method. Each message provides extended information such as the field that generated the message or the message type:

```php
<?php

$messages = $validation->validate();

if (count($messages)) {
foreach ($messages as $message) {
    echo 'Message: ', $message->getMessage(), "\n";
    echo 'Field: ', $message->getField(), "\n";
    echo 'Type: ', $message->getType(), "\n";
}
}
```

You can pass a `message` parameter to change/translate the default message in each validator. You can also use the placeholder `:field` in the message to be replaced by the label of the field:

```php
<?php

use Phalcon\Filter\Validation\Validator\Email;

$validation->add(
'email',
new Email(
    [
        'message' => 'The e-mail is not valid',
    ]
)
);
```

By default, the `getMessages()` method returns all the messages generated during validation. You can filter messages for a specific field using the `filter()` method:

```php
<?php

$messages = $validation->validate();

if (count($messages)) {
$filteredMessages = $messages->filter('name');

foreach ($filteredMessages as $message) {
    echo $message;
}
}
```

### Default Messages
You can register a default failure message for a validator class. The default is used whenever that validator runs without a message of its own. This lets you translate or override the built-in message of every validator of a given type in one place, instead of passing a `message` option to each instance.

Register defaults with the static `Phalcon\Filter\Validation::setDefaultMessages()` method, keyed by validator class name. Read a registered default with `Phalcon\Filter\Validation::getDefaultMessage()`. Calls to `setDefaultMessages()` are merged, so defaults can be registered incrementally.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\PresenceOf;

Validation::setDefaultMessages(
[
    PresenceOf::class => 'Default message :field is required',
]
);

$validation = new Validation();
$validation->add('name', new PresenceOf());

$messages = $validation->validate([]);

echo $messages[0]->getMessage(); // "Default message name is required"
```

The message for a validator is resolved in the following order, from highest priority to lowest:

1. A per-field template set on the validator through `setTemplates()`.
2. A message set on the validator instance - the `message` or `template` option, or `setTemplate()`.
3. A default registered for the validator class through `setDefaultMessages()`.
4. The validator's built-in class default message.

A message set on the validator instance therefore always takes precedence over a registered default:

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\PresenceOf;

Validation::setDefaultMessages(
[
    PresenceOf::class => 'Default message :field is required',
]
);

$validation = new Validation();
$validation->add(
'name',
new PresenceOf(
    [
        'message' => 'Custom message :field is required',
    ]
)
);

$messages = $validation->validate([]);

echo $messages[0]->getMessage(); // "Custom message name is required"
```

The `:field` placeholder is replaced with the field label, as in any validator message. Registered defaults apply to every validator whose message is produced through the message factory (`getTemplate()` / `messageFactory()`) - the built-in validators and any custom validator extending [Phalcon\Filter\Validation\AbstractValidator][validation-abstractvalidator]. The `File` validators' upload-specific messages (`messageFileEmpty`, `messageIniSize` and `messageValid`) are produced separately and are not affected; set those through their own options.

### Iteration and Offsets
Messages are stored and iterated by integer position. An entry added under a string key through the array-access interface stays reachable by that offset but is not visited during iteration. A `foreach` loop walks the integer sequence only. Use `appendMessage()` when an entry must take part in iteration.

```php
<?php

use Phalcon\Messages\Message;
use Phalcon\Messages\Messages;

$messages = new Messages();

$messages->appendMessage(new Message('Visited during iteration'));
$messages['database'] = new Message('Reachable by offset only');

foreach ($messages as $message) {
echo $message->getMessage(), "\n"; // "Visited during iteration"
}

echo $messages['database']->getMessage(); // "Reachable by offset only"
```

### Message Type Enforcement
Every entry in the collection must implement `Phalcon\Messages\MessageInterface`. Assigning a value of any other type through the array-access interface throws `Phalcon\Messages\Exceptions\MessageNotObject` with the message `The message must be an instance of MessageInterface`.

```php
<?php

use Phalcon\Messages\Exceptions\MessageNotObject;
use Phalcon\Messages\Messages;

$messages = new Messages();

try {
$messages[0] = 'not a message';
} catch (MessageNotObject $ex) {
echo $ex->getMessage(); // "The message must be an instance of MessageInterface"
}
```

The `appendMessages()` method accepts an array or any `Traversable`. Passing any other value throws `Phalcon\Messages\Exceptions\MessagesNotIterable`. The collection implements the `Phalcon\Contracts\Messages\Messages` contract. Type-hint against this contract when a method needs to accept the message collection without depending on the concrete class.

## Whitelist

When validating data that will be applied to an entity (e.g. a model), you can restrict which fields are assigned to the entity by passing a `$whitelist` array. Only the fields listed in the whitelist will be bound; all other incoming fields are ignored. Validators still run over all configured fields regardless of the whitelist.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\PresenceOf;

$validation = new Validation();

$validation->add('name',  new PresenceOf(['message' => 'Name is required']));
$validation->add('email', new PresenceOf(['message' => 'Email is required']));
$validation->add('role',  new PresenceOf(['message' => 'Role is required']));

$entity = new stdClass();

// Only 'name' and 'email' are assigned to $entity even though 'role' is in the data
$messages = $validation->validate(
['name' => 'Phalcon', 'email' => 'team@phalcon.io', 'role' => 'admin'],
$entity,
['name', 'email']
);
```

## Filtering of Data

Data can be filtered prior to the validation ensuring that malicious or incorrect data is not validated.

```php
<?php

use Phalcon\Filter\Validation;

$validation = new Validation();

$validation->add(
'name',
new PresenceOf(
    [
        'message' => 'The name is required',
    ]
)
);

$validation->add(
'email',
new PresenceOf(
    [
        'message' => 'The email is required',
    ]
)
);

$validation->setFilters('name', 'trim');
$validation->setFilters('email', 'trim');
```

Filtering and sanitizing are performed using the [filter][filter-filter] component. You can add more filters to this component or use the built-in ones.

## Events

When validations are organized in classes, you can implement the `beforeValidation()` and `afterValidation()` methods to perform additional checks, filters, clean-up, etc. If the `beforeValidation()` method returns false the validation is automatically canceled:

```php
<?php

use Phalcon\Http\Request;
use Phalcon\Messages\Message;
use Phalcon\Filter\Validation;

/**
 * @property Request $request
 */
class LoginValidation extends Validation
{
public function initialize()
{
    // ...
}

public function beforeValidation($data, $entity, $messages)
{
    if ($this->request->getHttpHost() !== 'admin.mydomain.com') {
        $messages->appendMessage(
            new Message(
                'Only users can log on in the admin domain'
            )
        );

        return false;
    }

    return true;
}

public function afterValidation($data, $entity, $messages)
{
    // ... Add additional messages or perform more validations
}
}
```

## Cancelling Validations

By default, all validators assigned to a field are tested regardless if one of them has failed or not. You can change this behavior by telling the validation component which validator may stop the validation:

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Regex;
use Phalcon\Filter\Validation\Validator\PresenceOf;

$validation = new Validation();

$validation->add(
'telephone',
new PresenceOf(
    [
        'message'      => 'The telephone is required',
        'cancelOnFail' => true,
    ]
)
);

$validation->add(
'telephone',
new Regex(
    [
        'message' => 'The telephone is required',
        'pattern' => '/\+44 [0-9]+/',
    ]
)
);

$validation->add(
'telephone',
new StringLength(
    [
        'messageMinimum' => 'The telephone is too short',
        'min'            => 2,
    ]
)
);
```

The first validator has the option `cancelOnFail` with a value of `true`, therefore if that validator fails the remaining validators in the chain are not executed.

If you are creating custom validators you can dynamically stop the validation chain by setting the `cancelOnFail` option:

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator;
use Phalcon\Messages\Message;

class MyValidator extends Validator
{
public function validate(Validation $validator, $attribute)
{
    // If the attribute value is `name` we must stop the chain
    if ($attribute === 'name') {
        $validator->setOption('cancelOnFail', true);
    }

    // ...
}
}
```

## Empty Values

You can pass the option `allowEmpty` to any of the built-in validators to ignore empty values.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Regex;

$validation = new Validation();

$validation->add(
'telephone',
new Regex(
    [
        'message'    => 'The telephone is required',
        'pattern'    => '/\+1 [0-9]+/',
        'allowEmpty' => true,
    ]
)
);
```

The `allowEmpty` option accepts three forms:

- `true` - the field is skipped when its value is empty (PHP `empty()` semantics)
- a list of values, e.g. `[null, '']` - the field is skipped when its value strictly matches one of the listed values. The comparison uses `===`, so `'0'` is not treated as empty unless listed.
- a per-field map, e.g. `['address' => true, 'phone' => false]` - used with validators that run against multiple fields, enabling the skip per field name

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Validator\Regex;

$validation = new Validation();

$validation->add(
'telephone',
new Regex(
    [
        'message'    => 'The telephone is required',
        'pattern'    => '/\+1 [0-9]+/',
        'allowEmpty' => [null, ''],
    ]
)
);
```

The `allowEmpty` rule is owned by the public `AbstractValidator::isAllowEmpty()` method, and the validation run delegates to it before each validator executes. Validators can override the method to define their own emptiness semantics - the `File` validators do, treating an upload with `UPLOAD_ERR_NO_FILE` as empty - and custom validators extending `AbstractValidator` inherit the behavior described above. The per-field map form is honored consistently in this pre-check as well.

## Recursive Validation

You can also run Validation instances within another via the `afterValidation()` method. In this example, validating the `CompanyValidation` instance will also check the `PhoneValidation` instance:

```php
<?php

use Phalcon\Filter\Validation;

class CompanyValidation extends Validation
{
/**
 * @var PhoneValidation
 */
protected $phoneValidation;

public function initialize()
{
    $this->phoneValidation = new PhoneValidation();
}

public function afterValidation($data, $entity, $messages)
{
    $phoneValidationMessages = $this->phoneValidation->validate(
        $data['phone']
    );

    $messages->appendMessages(
        $phoneValidationMessages
    );
}
}
```

## Exceptions

Any exceptions thrown in the `Phalcon\Filter\Validation` namespace will be of type [Phalcon\Filter\Validation\Exception][validation-exception] or [Phalcon\Filter\Validation\Validator\Exception][validation-validator-exception]. You can use this exception to selectively catch exceptions thrown only from this component.

```php
<?php

use Phalcon\Filter\Validation;
use Phalcon\Filter\Validation\Exception;
use Phalcon\Filter\Validation\Validator\InclusionIn;

try {
$validator = new Validation();

$validator->add(
    "status",
    new InclusionIn(
        [
            "message" => "The status must be A or B",
            "domain"  => false,
        ]
    )
);
} catch (Exception $ex) {
echo $ex->getMessage();
}
```

### Granular Exceptions

The component raises granular subclasses of `Phalcon\Filter\Validation\Exception` so callers can catch a specific failure mode. Existing `catch (Phalcon\Filter\Validation\Exception $e)` blocks continue to work unchanged.

| Class                                                                  | Parent                                | Thrown when                                                                      |
|------------------------------------------------------------------------|---------------------------------------|----------------------------------------------------------------------------------|
| `Phalcon\Filter\Validation\Exceptions\FieldNotPrintable`               | `Phalcon\Filter\Validation\Exception` | A field name in the validator chain cannot be cast to string.                    |
| `Phalcon\Filter\Validation\Exceptions\FilterServiceUnavailable`        | `Phalcon\Filter\Validation\Exception` | A `Filter` service is required but the DI container has none registered.         |
| `Phalcon\Filter\Validation\Exceptions\InvalidAllowedTypes`             | `Phalcon\Filter\Validation\Exception` | An `allowedTypes` option is not an array of strings.                             |
| `Phalcon\Filter\Validation\Exceptions\InvalidCallbackReturn`           | `Phalcon\Filter\Validation\Exception` | The `Callback` validator returns a value that is not a boolean or `Validator`.   |
| `Phalcon\Filter\Validation\Exceptions\InvalidDomainOption`             | `Phalcon\Filter\Validation\Exception` | `InclusionIn` / `ExclusionIn` is configured without a `domain` array.            |
| `Phalcon\Filter\Validation\Exceptions\InvalidFieldType`                | `Phalcon\Filter\Validation\Exception` | The validator is given a field reference that is not a string or array.          |
| `Phalcon\Filter\Validation\Exceptions\InvalidFilterService`            | `Phalcon\Filter\Validation\Exception` | The `filter` service in the DI container does not implement `FilterInterface`.   |
| `Phalcon\Filter\Validation\Exceptions\InvalidStrictOption`             | `Phalcon\Filter\Validation\Exception` | A `strict` option is not a boolean (single field or array form).                 |
| `Phalcon\Filter\Validation\Exceptions\InvalidValidationData`           | `Phalcon\Filter\Validation\Exception` | The data passed to `validate()` is not an array or object.                       |
| `Phalcon\Filter\Validation\Exceptions\InvalidValidator`                | `Phalcon\Filter\Validation\Exception` | A registered validator does not implement `ValidatorInterface`.                  |
| `Phalcon\Filter\Validation\Exceptions\InvalidValidatorScope`           | `Phalcon\Filter\Validation\Exception` | A composite validator is given a field that has no validators attached.          |
| `Phalcon\Filter\Validation\Exceptions\MissingMbstring`                 | `Phalcon\Filter\Validation\Exception` | A validator that relies on `mbstring` is used but the extension is not loaded.   |
| `Phalcon\Filter\Validation\Exceptions\NoDataToValidate`                | `Phalcon\Filter\Validation\Exception` | `validate()` is called without setting an entity, data array, or fields.         |
| `Phalcon\Filter\Validation\Exceptions\NoValidators`                    | `Phalcon\Filter\Validation\Exception` | `validate()` is called but no validators have been added.                        |
| `Phalcon\Filter\Validation\Exceptions\NoValidatorsInComposite`         | `Phalcon\Filter\Validation\Exception` | A composite validator wraps an empty list of validators.                         |
| `Phalcon\Filter\Validation\Exceptions\UniquenessConversionMustBeArray` | `Phalcon\Filter\Validation\Exception` | The `Uniqueness` validator's `convert` option is not an array.                   |
| `Phalcon\Filter\Validation\Exceptions\UniquenessModelRequired`         | `Phalcon\Filter\Validation\Exception` | The `Uniqueness` validator is invoked without an associated model.               |
| `Phalcon\Filter\Validation\Exceptions\UniquenessOnlyForPhalconModel`   | `Phalcon\Filter\Validation\Exception` | The `Uniqueness` validator is given an entity that is not a `Phalcon\Mvc\Model`. |
| `Phalcon\Filter\Validation\Exceptions\ValidationEntityNotObject`       | `Phalcon\Filter\Validation\Exception` | `setEntity()` is given a value that is not an object.                            |

[filter-filter]: /6.0/filter-filter/
[messages-message]: /6.0/api/phalcon_messages/#messagesmessage
[messages-messages]: /6.0/api/phalcon_messages/#messagesmessages
[validation]: /6.0/api/phalcon_filter/#filtervalidation
[validation-abstractcombinedfieldsvalidator]: /6.0/api/phalcon_filter/#filtervalidationabstractcombinedfieldsvalidator
[validation-abstractvalidator]: /6.0/api/phalcon_filter/#filtervalidationabstractvalidator
[validation-abstractvalidatorcomposite]: /6.0/api/phalcon_filter/#filtervalidationabstractvalidatorcomposite
[validation-exception]: /6.0/api/phalcon_filter/#filtervalidationexception
[validation-validationinterface]: /6.0/api/phalcon_filter/#filtervalidationvalidationinterface
[validation-validator-alnum]: /6.0/api/phalcon_filter/#filtervalidationvalidatoralnum
[validation-validator-alpha]: /6.0/api/phalcon_filter/#filtervalidationvalidatoralpha
[validation-validator-between]: /6.0/api/phalcon_filter/#filtervalidationvalidatorbetween
[validation-validator-callback]: /6.0/api/phalcon_filter/#filtervalidationvalidatorcallback
[validation-validator-confirmation]: /6.0/api/phalcon_filter/#filtervalidationvalidatorconfirmation
[validation-validator-creditcard]: /6.0/api/phalcon_filter/#filtervalidationvalidatorcreditcard
[validation-validator-date]: /6.0/api/phalcon_filter/#filtervalidationvalidatordate
[validation-validator-digit]: /6.0/api/phalcon_filter/#filtervalidationvalidatordigit
[validation-validator-email]: /6.0/api/phalcon_filter/#filtervalidationvalidatoremail
[validation-validator-exception]: /6.0/api/phalcon_filter/#filtervalidationvalidatorexception
[validation-validator-exclusionin]: /6.0/api/phalcon_filter/#filtervalidationvalidatorexclusionin
[validation-validator-file]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfile
[validation-validator-file-abstractfile]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfileabstractfile
[validation-validator-file-mimetype]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfilemimetype
[validation-validator-file-resolution-aspectratio]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfileresolutionaspectratio
[validation-validator-file-resolution-equal]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfileresolutionequal
[validation-validator-file-resolution-max]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfileresolutionmax
[validation-validator-file-resolution-min]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfileresolutionmin
[validation-validator-file-size-equal]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfilesizeequal
[validation-validator-file-size-max]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfilesizemax
[validation-validator-file-size-min]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfilesizemin
[validation-validator-files]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfiles
[validation-validator-identical]: /6.0/api/phalcon_filter/#filtervalidationvalidatoridentical
[validation-validator-inclusionin]: /6.0/api/phalcon_filter/#filtervalidationvalidatorinclusionin
[validation-validator-ip]: /6.0/api/phalcon_filter/#filtervalidationvalidatorip
[validation-validator-numericality]: /6.0/api/phalcon_filter/#filtervalidationvalidatornumericality
[validation-validator-presenceof]: /6.0/api/phalcon_filter/#filtervalidationvalidatorpresenceof
[validation-validator-regex]: /6.0/api/phalcon_filter/#filtervalidationvalidatorregex
[validation-validator-stringlength]: /6.0/api/phalcon_filter/#filtervalidationvalidatorstringlength
[validation-validator-stringlength-max]: /6.0/api/phalcon_filter/#filtervalidationvalidatorstringlengthmax
[validation-validator-stringlength-min]: /6.0/api/phalcon_filter/#filtervalidationvalidatorstringlengthmin
[validation-validator-uniqueness]: /6.0/api/phalcon_filter/#filtervalidationvalidatoruniqueness
[validation-validator-url]: /6.0/api/phalcon_filter/#filtervalidationvalidatorurl
[validation-validatorcompositeinterface]: /6.0/api/phalcon_filter/#filtervalidationvalidatorcompositeinterface
[validation-validatorfactory]: /6.0/api/phalcon_filter/#filtervalidationvalidatorfactory
[validation-validatorinterface]: /6.0/api/phalcon_filter/#filtervalidationvalidatorinterface

Source: https://docs.phalcon.io/6.0/filter-validation/index.mdx
