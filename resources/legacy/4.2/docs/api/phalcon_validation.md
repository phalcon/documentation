---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`

## Filter\Validation 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation.zep)


-   __Namespace__

    - `Phalcon\Filter`

-   __Uses__
    
    - `Phalcon\Di\Di`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Di\Injectable`
    - `Phalcon\Filter\FilterInterface`
    - `Phalcon\Filter\Validation\AbstractCombinedFieldsValidator`
    - `Phalcon\Filter\Validation\Exception`
    - `Phalcon\Filter\Validation\ValidationInterface`
    - `Phalcon\Filter\Validation\ValidatorInterface`
    - `Phalcon\Messages\MessageInterface`
    - `Phalcon\Messages\Messages`

-   __Extends__
    
    `Injectable`

-   __Implements__
    
    - `ValidationInterface`

Allows to validate data using custom or built-in validators


### Properties
```php
//
protected $combinedFieldsValidators;

//
protected $data;

//
protected $entity;

//
protected $filters;

//
protected $labels;

//
protected $messages;

//
protected $validators;

//
protected $values;

```

### Methods

```php
public function __construct( array $validators = [] );
```
Phalcon\Validation constructor


```php
public function add( mixed $field, ValidatorInterface $validator ): ValidationInterface;
```
Adds a validator to a field


```php
public function appendMessage( MessageInterface $message ): ValidationInterface;
```
Appends a message to the messages list


```php
public function bind( mixed $entity, mixed $data ): ValidationInterface;
```
Assigns the data to an entity
The entity is used to obtain the validation values


```php
public function getData()
```



```php
public function getEntity(): mixed;
```
Returns the bound entity


```php
public function getFilters( string $field = null ): mixed | null;
```
Returns all the filters or a specific one


```php
public function getLabel( mixed $field ): string;
```
Get label for field


```php
public function getMessages(): Messages;
```
Returns the registered validators


```php
public function getValidators(): array;
```
Returns the validators added to the validation


```php
public function getValue( string $field ): mixed | null;
```
Gets the a value to validate in the array/object data source


```php
public function rule( mixed $field, ValidatorInterface $validator ): ValidationInterface;
```
Alias of `add` method


```php
public function rules( mixed $field, array $validators ): ValidationInterface;
```
Adds the validators to a field


```php
public function setEntity( mixed $entity ): void;
```
Sets the bound entity


```php
public function setFilters( mixed $field, mixed $filters ): ValidationInterface;
```
Adds filters to the field


```php
public function setLabels( array $labels ): void;
```
Adds labels for fields


```php
public function setValidators( $validators )
```



```php
public function validate( mixed $data = null, mixed $entity = null ): Messages;
```
Validate a set of data according to a set of rules


```php
protected function preChecking( mixed $field, ValidatorInterface $validator ): bool;
```
Internal validations, if it returns true, then skip the current validator




## Filter\Validation\AbstractCombinedFieldsValidator ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/AbstractCombinedFieldsValidator.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation`

-   __Uses__
    

-   __Extends__
    
    `AbstractValidator`

This is a base class for combined fields validators



## Filter\Validation\AbstractValidator ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/AbstractValidator.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Messages\Message`
    - `Phalcon\Helper\Arr\Whitelist`

-   __Extends__
    

-   __Implements__
    
    - `ValidatorInterface`

This is a base class for validators


### Properties
```php
/**
 * Message template
 *
 * @var string|null
 */
protected $template;

/**
 * Message templates
 *
 * @var array
 */
protected $templates;

//
protected $options;

```

### Methods

```php
public function __construct( array $options = [] );
```
Phalcon\Validation\Validator constructor


```php
public function getOption( string $key, mixed $defaultValue = null ): mixed;
```
Returns an option in the validator's options
Returns null if the option hasn't set


```php
public function getTemplate( string $field = null ): string;
```
Get the template message


```php
public function getTemplates(): array;
```
Get templates collection object


```php
public function hasOption( string $key ): bool;
```
Checks if an option is defined


```php
public function messageFactory( Validation $validation, mixed $field, array $replacements = [] ): Message;
```
Create a default message by factory


```php
public function setOption( string $key, mixed $value ): void;
```
Sets an option in the validator


```php
public function setTemplate( string $template ): ValidatorInterface;
```
Set a new template message


```php
public function setTemplates( array $templates ): ValidatorInterface;
```
Clear current templates and set new from an array,


```php
abstract public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation


```php
protected function prepareCode( string $field ): int | null;
```
Prepares a validation code.


```php
protected function prepareLabel( Validation $validation, string $field ): mixed;
```
Prepares a label for the field.




## Filter\Validation\AbstractValidatorComposite ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/AbstractValidatorComposite.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation`

-   __Uses__
    
    - `Phalcon\Filter\Validation`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    
    - `ValidatorCompositeInterface`

This is a base class for combined fields validators


### Properties
```php
/**
 * @var array
 */
protected $#validators;

```

### Methods

```php
public function getValidators(): array;
```



```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Exception.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Filter\Validation\* classes will use this class



## Filter\Validation\ValidationInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/ValidationInterface.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation`

-   __Uses__
    
    - `Phalcon\Di\Injectable`
    - `Phalcon\Messages\MessageInterface`
    - `Phalcon\Messages\Messages`

-   __Extends__
    

-   __Implements__
    

Interface for the Phalcon\Filter\Validation component


### Methods

```php
public function add( string $field, ValidatorInterface $validator ): ValidationInterface;
```
Adds a validator to a field


```php
public function appendMessage( MessageInterface $message ): ValidationInterface;
```
Appends a message to the messages list


```php
public function bind( mixed $entity, mixed $data ): ValidationInterface;
```
Assigns the data to an entity
The entity is used to obtain the validation values


```php
public function getEntity(): mixed;
```
Returns the bound entity


```php
public function getFilters( string $field = null ): mixed | null;
```
Returns all the filters or a specific one


```php
public function getLabel( string $field ): string;
```
Get label for field


```php
public function getMessages(): Messages;
```
Returns the registered validators


```php
public function getValidators(): array;
```
Returns the validators added to the validation


```php
public function getValue( string $field ): mixed | null;
```
Gets the a value to validate in the array/object data source


```php
public function rule( string $field, ValidatorInterface $validator ): ValidationInterface;
```
Alias of `add` method


```php
public function rules( string $field, array $validators ): ValidationInterface;
```
Adds the validators to a field


```php
public function setFilters( string $field, mixed $filters ): ValidationInterface;
```
Adds filters to the field


```php
public function setLabels( array $labels ): void;
```
Adds labels for fields


```php
public function validate( mixed $data = null, mixed $entity = null ): Messages;
```
Validate a set of data according to a set of rules




## Filter\Validation\Validator\Alnum 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Alnum.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field must contain only letters and numbers;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Alpha 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Alpha.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field must contain only letters;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Between 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Between.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

Validates that a value is between an inclusive range of two values.
For a value x, the test is passed if minimum<=x<=maximum.

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


### Properties
```php
//
protected $template = Field :field must be within the range of :min to :max;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Callback 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Callback.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Filter\Validation\ValidatorInterface`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field must match the callback function;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Confirmation 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Confirmation.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Filter\Validation\Exception`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

Checks that two values have the same value

```php
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


### Properties
```php
//
protected $template = Field :field must be the same as :with;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation


```php
final protected function compare( string $a, string $b ): bool;
```
Compare strings




## Filter\Validation\Validator\CreditCard 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/CreditCard.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field is not valid for a credit card number;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Date 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Date.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `DateTime`
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field is not a valid date;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Digit 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Digit.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field must be numeric;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Email 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Email.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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
```


### Properties
```php
//
protected $template = Field :field must be an email address;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Exception.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Filter\Validation\Validator\* classes will use this
class



## Filter\Validation\Validator\ExclusionIn 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/ExclusionIn.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Filter\Validation\Exception`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field must not be a part of list: :domain;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\File 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/File.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidatorComposite`
    - `Phalcon\Filter\Validation\Validator\File\MimeType`
    - `Phalcon\Filter\Validation\Validator\File\Resolution\Equal`
    - `Phalcon\Filter\Validation\Validator\File\Resolution\Max`
    - `Phalcon\Filter\Validation\Validator\File\Resolution\Min`
    - `Phalcon\Filter\Validation\Validator\File\Size\Equal`
    - `Phalcon\Filter\Validation\Validator\File\Size\Max`
    - `Phalcon\Filter\Validation\Validator\File\Size\Min`
    - `Phalcon\Messages\Message`
    - `Phalcon\Helper\Arr\Get`

-   __Extends__
    
    `AbstractValidatorComposite`

-   __Implements__
    

Checks if a value has a correct file

```php
use Phalcon\Validation;
use Phalcon\Validation\Validator\File as FileValidator;

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


### Methods

```php
public function __construct( array $options = [] );
```
Constructor




## Filter\Validation\Validator\File\AbstractFile ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/File/AbstractFile.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator\File`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
/**
 * Empty is empty
 *
 * @var string
 */
protected $messageFileEmpty = Field :field must not be empty;

/**
 * File exceeds the file size set in PHP configuration
 *
 * @var string
 */
protected $messageIniSize = File :field exceeds the maximum file size;

/**
 * File is not valid
 *
 * @var string
 */
protected $messageValid = Field :field is not valid;

```

### Methods

```php
public function checkUpload( Validation $validation, mixed $field ): bool;
```
Check upload


```php
public function checkUploadIsEmpty( Validation $validation, mixed $field ): bool;
```
Check if upload is empty


```php
public function checkUploadIsValid( Validation $validation, mixed $field ): bool;
```
Check if upload is valid


```php
public function checkUploadMaxSize( Validation $validation, mixed $field ): bool;
```
Check if uploaded file is larger than PHP allowed size


```php
public function getFileSizeInBytes( string $size ): double;
```
Convert a string like "2.5MB" in bytes


```php
public function getMessageFileEmpty(): string;
```



```php
public function getMessageIniSize()
```



```php
public function getMessageValid()
```



```php
public function isAllowEmpty( Validation $validation, string $field ): bool;
```
Check on empty


```php
public function setMessageFileEmpty( $messageFileEmpty )
```



```php
public function setMessageIniSize( $messageIniSize )
```



```php
public function setMessageValid( $messageValid )
```






## Filter\Validation\Validator\File\MimeType 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/File/MimeType.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator\File`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\Exception`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractFile`

-   __Implements__
    

Checks if a value has a correct file mime type

```php
use Phalcon\Validation;
use Phalcon\Validation\Validator\File\MimeType;

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


### Properties
```php
//
protected $template = File :field must be of type: :types;

```

### Methods

```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\File\Resolution\Equal 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/File/Resolution/Equal.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator\File\Resolution`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\Validator\File\AbstractFile`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractFile`

-   __Implements__
    

Checks if a file has the right resolution

```php
use Phalcon\Validation;
use Phalcon\Validation\Validator\File\Resolution\Equal;

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


### Properties
```php
//
protected $template = The resolution of the field :field has to be equal :resolution;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\File\Resolution\Max 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/File/Resolution/Max.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator\File\Resolution`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\Validator\File\AbstractFile`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractFile`

-   __Implements__
    

Checks if a file has the right resolution

```php
use Phalcon\Validation;
use Phalcon\Validation\Validator\File\Resolution\Max;

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


### Properties
```php
//
protected $template = File :field exceeds the maximum resolution of :resolution;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\File\Resolution\Min 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/File/Resolution/Min.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator\File\Resolution`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\Validator\File\AbstractFile`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractFile`

-   __Implements__
    

Checks if a file has the right resolution

```php
use Phalcon\Validation;
use Phalcon\Validation\Validator\File\Resolution\Min;

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


### Properties
```php
//
protected $template = File :field can not have the minimum resolution of :resolution;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\File\Size\Equal 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/File/Size/Equal.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator\File\Size`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\Validator\File\AbstractFile`

-   __Extends__
    
    `AbstractFile`

-   __Implements__
    

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


### Properties
```php
//
protected $template = File :field does not have the exact :size file size;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\File\Size\Max 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/File/Size/Max.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator\File\Size`

-   __Uses__
    

-   __Extends__
    
    `Equal`

-   __Implements__
    

Checks if a value has a correct file

```php
use Phalcon\Validation;
use Phalcon\Validation\Validator\File\Size;

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


### Properties
```php
//
protected $template = File :field exceeds the size of :size;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\File\Size\Min 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/File/Size/Min.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator\File\Size`

-   __Uses__
    

-   __Extends__
    
    `Equal`

-   __Implements__
    

Checks if a value has a correct file

```php
use Phalcon\Validation;
use Phalcon\Validation\Validator\File\Size;

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


### Properties
```php
//
protected $template = File :field can not have the minimum size of :size;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Identical 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Identical.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

Checks if a value is identical to other

```php
use Phalcon\Validation;
use Phalcon\Validation\Validator\Identical;

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


### Properties
```php
//
protected $template = Field :field does not have the expected value;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\InclusionIn 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/InclusionIn.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Filter\Validation\Exception`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

Check if a value is included into a list of values

```php
use Phalcon\Validation;
use Phalcon\Validation\Validator\InclusionIn;

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


### Properties
```php
//
protected $template = Field :field must be a part of list: :domain;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Ip 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Ip.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

Check for IP addresses

```php
use Phalcon\Validation\Validator\Ip as IpValidator;

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


### Constants
```php
const VERSION_4 = FILTER_FLAG_IPV4;
const VERSION_6 = FILTER_FLAG_IPV6;
```

### Properties
```php
//
protected $template = Field :field must be a valid IP address;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Numericality 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Numericality.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

Check for a valid numeric value

```php
use Phalcon\Validation;
use Phalcon\Validation\Validator\Numericality;

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


### Properties
```php
//
protected $template = Field :field does not have a valid numeric format;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\PresenceOf 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/PresenceOf.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field is required;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Regex 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Regex.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field does not match the required format;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\StringLength 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/StringLength.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Filter\Validation\AbstractValidatorComposite`
    - `Phalcon\Filter\Validation\Exception`
    - `Phalcon\Filter\Validation\Validator\StringLength\Max`
    - `Phalcon\Filter\Validation\Validator\StringLength\Min`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidatorComposite`

-   __Implements__
    

Validates that a string has the specified maximum and minimum constraints
The test is passed if for a string's length L, min<=L<=max, i.e. L must
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


### Methods

```php
public function __construct( array $options = [] );
```
Constructor




## Filter\Validation\Validator\StringLength\Max 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/StringLength/Max.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator\StringLength`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Filter\Validation\Exception`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

Validates that a string has the specified maximum constraints
The test is passed if for a string's length L, L<=max, i.e. L must
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


### Properties
```php
//
protected $template = Field :field must not exceed :max characters long;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\StringLength\Min 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/StringLength/Min.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator\StringLength`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Filter\Validation\Exception`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

Validates that a string has the specified minimum constraints
The test is passed if for a string's length L, min<=L, i.e. L must
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


### Properties
```php
//
protected $template = Field :field must be at least :min characters long;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\Validator\Uniqueness 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Uniqueness.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractCombinedFieldsValidator`
    - `Phalcon\Filter\Validation\Exception`
    - `Phalcon\Messages\Message`
    - `Phalcon\Mvc\Model`
    - `Phalcon\Mvc\ModelInterface`

-   __Extends__
    
    `AbstractCombinedFieldsValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field must be unique;

//
private columnMap;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation


```php
protected function getColumnNameReal( mixed $record, string $field ): string;
```
The column map is used in the case to get real column name


```php
protected function isUniqueness( Validation $validation, mixed $field ): bool;
```



```php
protected function isUniquenessModel( mixed $record, array $field, array $values );
```
Uniqueness method used for model




## Filter\Validation\Validator\Url 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/Validator/Url.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation\Validator`

-   __Uses__
    
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\AbstractValidator`
    - `Phalcon\Messages\Message`

-   __Extends__
    
    `AbstractValidator`

-   __Implements__
    

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


### Properties
```php
//
protected $template = Field :field must be a url;

```

### Methods

```php
public function __construct( array $options = [] );
```
Constructor


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\ValidatorCompositeInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/ValidatorCompositeInterface.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation`

-   __Uses__
    
    - `Phalcon\Filter\Validation`

-   __Extends__
    

-   __Implements__
    

This is a base class for combined fields validators


### Methods

```php
public function getValidators(): array;
```
Executes the validation


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation




## Filter\Validation\ValidatorFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/ValidatorFactory.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation`

-   __Uses__
    
    - `Phalcon\Factory\AbstractFactory`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

This file is part of the Phalcon Framework.

(c) Phalcon Team <team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.


### Methods

```php
public function __construct( array $services = [] );
```
TagFactory constructor.


```php
public function newInstance( string $name ): ValidatorInterface;
```
Creates a new instance


```php
protected function getAdapters(): array;
```







## Filter\Validation\ValidatorInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Filter/Validation/ValidatorInterface.zep)


-   __Namespace__

    - `Phalcon\Filter\Validation`

-   __Uses__
    
    - `Phalcon\Filter\Validation`

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Filter\Validation\AbstractValidator


### Methods

```php
public function getOption( string $key, mixed $defaultValue = null ): mixed;
```
Returns an option in the validator's options
Returns null if the option hasn't set


```php
public function getTemplate( string $field ): string;
```
Get the template message


```php
public function getTemplates(): array;
```
Get message templates


```php
public function hasOption( string $key ): bool;
```
Checks if an option is defined


```php
public function setTemplate( string $template ): ValidatorInterface;
```
Set a new template message


```php
public function setTemplates( array $templates ): ValidatorInterface;
```
Clear current template and set new from an array,


```php
public function validate( Validation $validation, mixed $field ): bool;
```
Executes the validation
