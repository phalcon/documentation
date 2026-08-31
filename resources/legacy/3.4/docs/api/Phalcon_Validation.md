# Class **Phalcon\Validation**

*extends* abstract class [Phalcon\Di\Injectable](Phalcon_Di.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Phalcon\ValidationInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows to validate data using custom or built-in validators


## Methods
public  **getData** ()

...


public  **setValidators** (*mixed* $validators)

...


public  **__construct** ([*array* $validators])

Phalcon\Validation constructor



public [Phalcon\Validation\Message\Group](Phalcon_Validation.md) **validate** ([*array* | *object* $data], [*object* $entity])

Validate a set of data according to a set of rules



public  **add** (*mixed* $field, [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator)

Adds a validator to a field



public  **rule** (*mixed* $field, [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator)

Alias of `add` method



public  **rules** (*mixed* $field, *array* $validators)

Adds the validators to a field



public [Phalcon\Validation](Phalcon_Validation.md) **setFilters** (*string* $field, *array* | *string* $filters)

Adds filters to the field



public *mixed* **getFilters** ([*string* $field])

Returns all the filters or a specific one



public  **getValidators** ()

Returns the validators added to the validation



public  **setEntity** (*object* $entity)

Sets the bound entity



public *object* **getEntity** ()

Returns the bound entity



public  **setDefaultMessages** ([*array* $messages])

Adds default messages to validators



public  **getDefaultMessage** (*mixed* $type)

Get default message for validator type



public  **getMessages** ()

Returns the registered validators



public  **setLabels** (*array* $labels)

Adds labels for fields



public *string* **getLabel** (*string* $field)

Get label for field



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message)

Appends a message to the messages list



public [Phalcon\Validation](Phalcon_Validation.md) **bind** (*object* $entity, *array* | *object* $data)

Assigns the data to an entity
The entity is used to obtain the validation values



public *mixed* **getValue** (*string* $field)

Gets the a value to validate in the array/object data source



protected  **preChecking** (*mixed* $field, [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator)

Internal validations, if it returns true, then skip the current validator



public  **setDI** ([Phalcon\DiInterface](Phalcon_Di.md) $dependencyInjector) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the dependency injector



public  **getDI** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal dependency injector



public  **setEventsManager** ([Phalcon\Events\ManagerInterface](Phalcon_Events.md) $eventsManager) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Sets the event manager



public  **getEventsManager** () inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Returns the internal event manager



public  **__get** (*mixed* $propertyName) inherited from [Phalcon\Di\Injectable](Phalcon_Di.md)

Magic method __get




<hr>

# Abstract class **Phalcon\Validation\CombinedFieldsValidator**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/combinedfieldsvalidator.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



abstract public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $attribute) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Executes the validation



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Validation\Message**

*implements* [Phalcon\Validation\MessageInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/message.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Encapsulates validation info generated in the validation process


## Methods
public  **__construct** (*mixed* $message, [*mixed* $field], [*mixed* $type], [*mixed* $code])

Phalcon\Validation\Message constructor



public  **setType** (*mixed* $type)

Sets message type



public  **getType** ()

Returns message type



public  **setMessage** (*mixed* $message)

Sets verbose message



public  **getMessage** ()

Returns verbose message



public  **setField** (*mixed* $field)

Sets field name related to message



public *mixed* **getField** ()

Returns field name related to message



public  **setCode** (*mixed* $code)

Sets code for the message



public  **getCode** ()

Returns the message code



public  **__toString** ()

Magic __toString method returns verbose message



public static  **__set_state** (*array* $message)

Magic __set_state helps to recover messages from serialization




<hr>

# Class **Phalcon\Validation\Message\Group**

*implements* [Countable](https://php.net/manual/en/class.countable.php), [ArrayAccess](https://php.net/manual/en/class.arrayaccess.php), [Iterator](https://php.net/manual/en/class.iterator.php), [Traversable](https://php.net/manual/en/class.traversable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/message/group.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents a group of validation messages


## Methods
public  **__construct** ([*array* $messages])

Phalcon\Validation\Message\Group constructor



public [Phalcon\Validation\Message](Phalcon_Validation.md) **offsetGet** (*int* $index)

Gets an attribute a message using the array syntax

```php
<?php

print_r(
    $messages[0]
);

```



public  **offsetSet** (*int* $index, [Phalcon\Validation\Message](Phalcon_Validation.md) $message)

Sets an attribute using the array-syntax

```php
<?php

$messages[0] = new \Phalcon\Validation\Message("This is a message");

```



public *boolean* **offsetExists** (*int* $index)

Checks if an index exists

```php
<?php

var_dump(
    isset($message["database"])
);

```



public  **offsetUnset** (*mixed* $index)

Removes a message from the list

```php
<?php

unset($message["database"]);

```



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message)

Appends a message to the group

```php
<?php

$messages->appendMessage(
    new \Phalcon\Validation\Message("This is a message")
);

```



public  **appendMessages** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $messages)

Appends an array of messages to the group

```php
<?php

$messages->appendMessages($messagesArray);

```



public *array* **filter** (*string* $fieldName)

Filters the message group by field name



public  **count** ()

Returns the number of messages in the list



public  **rewind** ()

Rewinds the internal iterator



public  **current** ()

Returns the current message in the iterator



public  **key** ()

Returns the current position/key in the iterator



public  **next** ()

Moves the internal iteration pointer to the next position



public  **valid** ()

Check if the current message in the iterator is valid



public static [Phalcon\Validation\Message\Group](Phalcon_Validation.md) **__set_state** (*array* $group)

Magic __set_state helps to re-build messages variable when exporting




<hr>

# Interface **Phalcon\Validation\MessageInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/messageinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setType** (*mixed* $type)

...


abstract public  **getType** ()

...


abstract public  **setMessage** (*mixed* $message)

...


abstract public  **getMessage** ()

...


abstract public  **setField** (*mixed* $field)

...


abstract public  **getField** ()

...


abstract public  **__toString** ()

...


abstract public static  **__set_state** (*array* $message)

...



<hr>

# Abstract class **Phalcon\Validation\Validator**

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This is a base class for validators


## Methods
public  **__construct** ([*array* $options])

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key)

Checks if an option has been defined



public  **hasOption** (*mixed* $key)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue])

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value)

Sets an option in the validator



abstract public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $attribute)

Executes the validation



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option])

Prepares a validation message.



protected  **prepareCode** (*mixed* $field)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Alnum**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/alnum.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Check for alphanumeric character(s)

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Alnum as AlnumValidator;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Alpha**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/alpha.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Check for alphabetic character(s)

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Alpha as AlphaValidator;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Between**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/between.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Validates that a value is between an inclusive range of two values.
For a value x, the test is passed if minimum<=x<=maximum.

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Between;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Callback**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/callback.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Calls user function for validation

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Callback as CallbackValidator;
use Phalcon\Validation\Validator\Numericality as NumericalityValidator;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Confirmation**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/confirmation.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Checks that two values have the same value

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Confirmation;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



final protected  **compare** (*mixed* $a, *mixed* $b)

Compare strings



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\CreditCard**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/creditcard.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Checks if a value has a valid credit card number

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\CreditCard as CreditCardValidator;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



private *boolean* **verifyByLuhnAlgorithm** (*string* $number)

is a simple checksum formula used to validate a variety of identification numbers



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Date**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/date.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Checks if a value is a valid date

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Date as DateValidator;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



private  **checkDate** (*mixed* $value, *mixed* $format)

...


public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Digit**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/digit.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Check for numeric character(s)

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Digit as DigitValidator;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Email**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/email.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Checks if a value has a correct e-mail format

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Email as EmailValidator;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Validation\Validator\ExclusionIn**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/exclusionin.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Check if a value is not included into a list of values

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\ExclusionIn;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\File**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/file.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Checks if a value has a correct file

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\File as FileValidator;

$validator = new Validation();

$validator->add(
    "file",
    new FileValidator(
        [
            "maxSize"              => "2M",
            "messageSize"          => ":field exceeds the max filesize (:max)",
            "allowedTypes"         => [
                "image/jpeg",
                "image/png",
            ],
            "messageType"          => "Allowed file types are :types",
            "maxResolution"        => "800x600",
            "messageMaxResolution" => "Max resolution of :field is :max",
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
                "file"        => "file exceeds the max filesize 2M",
                "anotherFile" => "anotherFile exceeds the max filesize 4M",
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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **isAllowEmpty** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Check on empty



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Identical**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/identical.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Checks if a value is identical to other

```php
<?php

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\InclusionIn**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/inclusionin.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Check if a value is included into a list of values

```php
<?php

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Numericality**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/numericality.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Check for a valid numeric value

```php
<?php

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\PresenceOf**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/presenceof.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Validates that a value is not null or empty string

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\PresenceOf;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Regex**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/regex.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Allows validate if the value of a field matches a regular expression

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Regex as RegexValidator;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\StringLength**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/stringlength.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Validates that a string has the specified maximum and minimum constraints
The test is passed if for a string's length L, min<=L<=max, i.e. L must
be at least min, and at most max.

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\StringLength as StringLength;

$validator = new Validation();

$validation->add(
    "name_last",
    new StringLength(
        [
            "max"            => 50,
            "min"            => 2,
            "messageMaximum" => "We don't like really long names",
            "messageMinimum" => "We want more than just their initials",
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
            ]
        ]
    )
);

```


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Uniqueness**

*extends* abstract class [Phalcon\Validation\CombinedFieldsValidator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/uniqueness.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Check that a field is unique in the related table

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Uniqueness as UniquenessValidator;

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
<?php

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
<?php

$validator->add(
    "username",
    new UniquenessValidator()
);

```

Combination of fields in model:

```php
<?php

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
<?php

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



protected  **isUniqueness** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

...


protected  **getColumnNameReal** (*mixed* $record, *mixed* $field)

The column map is used in the case to get real column name



protected  **isUniquenessModel** (*mixed* $record, *array* $field, *array* $values)

Uniqueness method used for model



protected  **isUniquenessCollection** (*mixed* $record, *array* $field, *array* $values)

Uniqueness method used for collection



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Class **Phalcon\Validation\Validator\Url**

*extends* abstract class [Phalcon\Validation\Validator](Phalcon_Validation.md)

*implements* [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validator/url.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Checks if a value has a url format

```php
<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Url as UrlValidator;

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


## Methods
public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field)

Executes the validation



public  **__construct** ([*array* $options]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Phalcon\Validation\Validator constructor



public  **isSetOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option has been defined



public  **hasOption** (*mixed* $key) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Checks if an option is defined



public  **getOption** (*mixed* $key, [*mixed* $defaultValue]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Returns an option in the validator's options
Returns null if the option hasn't set



public  **setOption** (*mixed* $key, *mixed* $value) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Sets an option in the validator



protected  **prepareLabel** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a label for the field.



protected  **prepareMessage** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $field, *mixed* $type, [*mixed* $option]) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation message.



protected  **prepareCode** (*mixed* $field) inherited from [Phalcon\Validation\Validator](Phalcon_Validation.md)

Prepares a validation code.




<hr>

# Interface **Phalcon\Validation\ValidatorInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validation/validatorinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **hasOption** (*mixed* $key)

...


abstract public  **getOption** (*mixed* $key, [*mixed* $defaultValue])

...


abstract public  **validate** ([Phalcon\Validation](Phalcon_Validation.md) $validation, *mixed* $attribute)

...



<hr>

# Interface **Phalcon\ValidationInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/validationinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **validate** ([*mixed* $data], [*mixed* $entity])

...


abstract public  **add** (*mixed* $field, [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator)

...


abstract public  **rule** (*mixed* $field, [Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator)

...


abstract public  **rules** (*mixed* $field, *array* $validators)

...


abstract public  **setFilters** (*mixed* $field, *mixed* $filters)

...


abstract public  **getFilters** ([*mixed* $field])

...


abstract public  **getValidators** ()

...


abstract public  **getEntity** ()

...


abstract public  **setDefaultMessages** ([*array* $messages])

...


abstract public  **getDefaultMessage** (*mixed* $type)

...


abstract public  **getMessages** ()

...


abstract public  **setLabels** (*array* $labels)

...


abstract public  **getLabel** (*mixed* $field)

...


abstract public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message)

...


abstract public  **bind** (*mixed* $entity, *mixed* $data)

...


abstract public  **getValue** (*mixed* $field)

...
