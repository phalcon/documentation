---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Forms\Element\AbstractElement ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/AbstractElement.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `InvalidArgumentException`
    - `Phalcon\Di\Di`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Filter\Validation\ValidatorInterface`
    - `Phalcon\Forms\Exception`
    - `Phalcon\Forms\Form`
    - `Phalcon\Html\Escaper`
    - `Phalcon\Html\TagFactory`
    - `Phalcon\Messages\MessageInterface`
    - `Phalcon\Messages\Messages`

-   __Extends__
    

-   __Implements__
    
    - `ElementInterface`

This is a base class for form elements


### Properties
```php
/**
 * @var array
 */
protected $attributes;

/**
 * @var array
 */
protected $filters;

/**
 * @var Form|null
 */
protected $form;

/**
 * @var string|null
 */
protected $label;

/**
 * @var string
 */
protected $method = inputText;

/**
 * @var Messages
 */
protected $messages;

/**
 * @var string
 */
protected $name;

/**
 * @var array
 */
protected $options;

/**
 * @var TagFactory|null
 */
protected $tagFactory;

/**
 * @var array
 */
protected $validators;

/**
 * @var mixed|null
 */
protected $value;

```

### Methods

```php
public function __construct( string $name, array $attributes = [] );
```
Constructor


```php
public function __toString(): string;
```
Magic method __toString renders the widget without attributes


```php
public function addFilter( string $filter ): ElementInterface;
```
Adds a filter to current list of filters


```php
public function addValidator( ValidatorInterface $validator ): ElementInterface;
```
Adds a validator to the element


```php
public function addValidators( array $validators, bool $merge = bool ): ElementInterface;
```
Adds a group of validators


```php
public function appendMessage( MessageInterface $message ): ElementInterface;
```
Appends a message to the internal message list


```php
public function clear(): ElementInterface;
```
Clears element to its default value


```php
public function getAttribute( string $attribute, mixed $defaultValue = null ): mixed;
```
Returns the value of an attribute if present


```php
public function getAttributes(): array;
```
Returns the default attributes for the element


```php
public function getDefault(): mixed;
```
Returns the default value assigned to the element


```php
public function getFilters();
```
Returns the element filters


```php
public function getForm(): Form;
```
Returns the parent form to the element


```php
public function getLabel(): string;
```
Returns the element label


```php
public function getMessages(): Messages;
```
Returns the messages that belongs to the element
The element needs to be attached to a form


```php
public function getName(): string;
```
Returns the element name


```php
public function getTagFactory(): TagFactory | null;
```
Returns the tagFactory; throws exception if not present


```php
public function getUserOption( string $option, mixed $defaultValue = null ): mixed;
```
Returns the value of an option if present


```php
public function getUserOptions(): array;
```
Returns the options for the element


```php
public function getValidators(): ValidatorInterface[];
```
Returns the validators registered for the element


```php
public function getValue(): mixed;
```
Returns the element's value


```php
public function hasMessages(): bool;
```
Checks whether there are messages attached to the element


```php
public function label( array $attributes = [] ): string;
```
Generate the HTML to label the element


```php
public function render( array $attributes = [] ): string;
```
Renders the element widget returning HTML


```php
public function setAttribute( string $attribute, mixed $value ): ElementInterface;
```
Sets a default attribute for the element


```php
public function setAttributes( array $attributes ): ElementInterface;
```
Sets default attributes for the element


```php
public function setDefault( mixed $value ): ElementInterface;
```
Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST


```php
public function setFilters( mixed $filters ): ElementInterface;
```
Sets the element filters


```php
public function setForm( Form $form ): ElementInterface;
```
Sets the parent form to the element


```php
public function setLabel( string $label ): ElementInterface;
```
Sets the element label


```php
public function setMessages( Messages $messages ): ElementInterface;
```
Sets the validation messages related to the element


```php
public function setName( string $name ): ElementInterface;
```
Sets the element name


```php
public function setTagFactory( TagFactory $tagFactory ): AbstractElement;
```
Sets the TagFactory


```php
public function setUserOption( string $option, mixed $value ): ElementInterface;
```
Sets an option for the element


```php
public function setUserOptions( array $options ): ElementInterface;
```
Sets options for the element


```php
protected function getLocalTagFactory(): TagFactory;
```
Returns the tagFactory; throws exception if not present




## Forms\Element\Check 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Check.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component INPUT[type=check] for forms


### Properties
```php
/**
 * @var string
 */
protected $method = inputCheckbox;

```


## Forms\Element\Date 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Date.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Tag`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component INPUT[type=date] for forms


### Properties
```php
/**
 * @var string
 */
protected $method = inputDate;

```


## Forms\Element\ElementInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/ElementInterface.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Filter\Validation\ValidatorInterface`
    - `Phalcon\Forms\Form`
    - `Phalcon\Messages\MessageInterface`
    - `Phalcon\Messages\Messages`

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Forms\Element classes


### Methods

```php
public function addFilter( string $filter ): ElementInterface;
```
Adds a filter to current list of filters


```php
public function addValidator( ValidatorInterface $validator ): ElementInterface;
```
Adds a validator to the element


```php
public function addValidators( array $validators, bool $merge = bool ): ElementInterface;
```
Adds a group of validators


```php
public function appendMessage( MessageInterface $message ): ElementInterface;
```
Appends a message to the internal message list


```php
public function clear(): ElementInterface;
```
Clears every element in the form to its default value


```php
public function getAttribute( string $attribute, mixed $defaultValue = null ): mixed;
```
Returns the value of an attribute if present


```php
public function getAttributes(): array;
```
Returns the default attributes for the element


```php
public function getDefault(): mixed;
```
Returns the default value assigned to the element


```php
public function getFilters();
```
Returns the element's filters


```php
public function getForm(): Form;
```
Returns the parent form to the element


```php
public function getLabel(): string;
```
Returns the element's label


```php
public function getMessages(): Messages;
```
Returns the messages that belongs to the element
The element needs to be attached to a form


```php
public function getName(): string;
```
Returns the element's name


```php
public function getUserOption( string $option, mixed $defaultValue = null ): mixed;
```
Returns the value of an option if present


```php
public function getUserOptions(): array;
```
Returns the options for the element


```php
public function getValidators(): ValidatorInterface[];
```
Returns the validators registered for the element


```php
public function getValue(): mixed;
```
Returns the element's value


```php
public function hasMessages(): bool;
```
Checks whether there are messages attached to the element


```php
public function label(): string;
```
Generate the HTML to label the element


```php
public function render( array $attributes = [] ): string;
```
Renders the element widget


```php
public function setAttribute( string $attribute, mixed $value ): ElementInterface;
```
Sets a default attribute for the element


```php
public function setAttributes( array $attributes ): ElementInterface;
```
Sets default attributes for the element


```php
public function setDefault( mixed $value ): ElementInterface;
```
Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST


```php
public function setFilters( mixed $filters ): ElementInterface;
```
Sets the element's filters


```php
public function setForm( Form $form ): ElementInterface;
```
Sets the parent form to the element


```php
public function setLabel( string $label ): ElementInterface;
```
Sets the element label


```php
public function setMessages( Messages $messages ): ElementInterface;
```
Sets the validation messages related to the element


```php
public function setName( string $name ): ElementInterface;
```
Sets the element's name


```php
public function setUserOption( string $option, mixed $value ): ElementInterface;
```
Sets an option for the element


```php
public function setUserOptions( array $options ): ElementInterface;
```
Sets options for the element




## Forms\Element\Email 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Email.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Tag`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component INPUT[type=email] for forms


### Properties
```php
/**
 * @var string
 */
protected $method = inputEmail;

```


## Forms\Element\File 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/File.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Tag`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component INPUT[type=file] for forms


### Properties
```php
/**
 * @var string
 */
protected $method = inputFile;

```


## Forms\Element\Hidden 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Hidden.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Tag`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component INPUT[type=hidden] for forms


### Properties
```php
/**
 * @var string
 */
protected $method = inputHidden;

```


## Forms\Element\Numeric 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Numeric.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Tag`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component INPUT[type=number] for forms


### Properties
```php
/**
 * @var string
 */
protected $method = inputNumeric;

```


## Forms\Element\Password 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Password.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Tag`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component INPUT[type=password] for forms


### Properties
```php
/**
 * @var string
 */
protected $method = inputPassword;

```


## Forms\Element\Radio 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Radio.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Tag`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component INPUT[type=radio] for forms


### Properties
```php
/**
 * @var string
 */
protected $method = inputRadio;

```


## Forms\Element\Select 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Select.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Tag\Select`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component SELECT (choice) for forms


### Properties
```php
/**
 * @var object|array|null
 */
protected $optionsValues;

```

### Methods

```php
public function __construct( string $name, mixed $options = null, array $attributes = [] );
```
Constructor


```php
public function addOption( mixed $option ): ElementInterface;
```
Adds an option to the current options


```php
public function getOptions();
```
Returns the choices' options


```php
public function render( array $attributes = [] ): string;
```
Renders the element widget returning HTML


```php
public function setOptions( mixed $options ): ElementInterface;
```
Set the choice's options


```php
protected function prepareAttributes( array $attributes = [] ): array;
```
Returns an array of prepared attributes for Phalcon\Html\TagFactory
helpers according to the element parameters




## Forms\Element\Submit 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Submit.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Tag`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component INPUT[type=submit] for forms


### Properties
```php
/**
 * @var string
 */
protected $method = inputSubmit;

```


## Forms\Element\Text 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Text.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Forms\Exception`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component INPUT[type=text] for forms



## Forms\Element\TextArea 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/TextArea.zep)


-   __Namespace__

    - `Phalcon\Forms\Element`

-   __Uses__
    
    - `Phalcon\Tag`

-   __Extends__
    
    `AbstractElement`

-   __Implements__
    

Component TEXTAREA for forms


### Properties
```php
/**
 * @var string
 */
protected $method = inputTextarea;

```


## Forms\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exception.zep)


-   __Namespace__

    - `Phalcon\Forms`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Forms will use this class



## Forms\Form 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Form.zep)


-   __Namespace__

    - `Phalcon\Forms`

-   __Uses__
    
    - `Countable`
    - `Iterator`
    - `Phalcon\Di\DiInterface`
    - `Phalcon\Di\Injectable`
    - `Phalcon\Filter\FilterInterface`
    - `Phalcon\Filter\Validation`
    - `Phalcon\Filter\Validation\ValidationInterface`
    - `Phalcon\Forms\Element\ElementInterface`
    - `Phalcon\Html\Attributes`
    - `Phalcon\Html\Attributes\AttributesInterface`
    - `Phalcon\Html\TagFactory`
    - `Phalcon\Messages\Messages`
    - `Phalcon\Tag`

-   __Extends__
    
    `Injectable`

-   __Implements__
    
    - `AttributesInterface`
    - `Countable`
    - `Iterator`

This component allows to build forms using an object-oriented interface


### Properties
```php
/**
 * @var AttributesInterface|null
 */
protected $attributes;

/**
 * @var array
 */
protected $data;

/**
 * @var array
 */
protected $filteredData;

/**
 * @var array
 */
protected $elements;

/**
 * @var array
 */
protected $elementsIndexed;

/**
 * @var object|null
 */
protected $entity;

/**
 * @var Messages|array|null
 */
protected $messages;

/**
 * @var int
 */
protected $position = ;

/**
 * @var array
 */
protected $options;

/**
 * @var TagFactory|null
 */
protected $tagFactory;

/**
 * @var ValidationInterface|null
 */
protected $validation;

/**
 * @var array
 */
protected $whitelist;

```

### Methods

```php
public function __construct( mixed $entity = null, array $userOptions = [] );
```
Phalcon\Forms\Form constructor


```php
public function add( ElementInterface $element, string $position = null, bool $type = null ): Form;
```
Adds an element to the form


```php
public function bind( array $data, mixed $entity = null, array $whitelist = [] ): Form;
```
Binds data to the entity


```php
public function clear( mixed $fields = null ): Form;
```
Clears every element in the form to its default value


```php
public function count(): int;
```
Returns the number of elements in the form


```php
public function current(): mixed;
```
Returns the current element in the iterator


```php
public function get( string $name ): ElementInterface;
```
Returns an element added to the form by its name


```php
public function getAction(): string;
```
Returns the form's action


```php
public function getAttributes(): Attributes;
```
   Get Form attributes collection
   


```php
public function getElements(): ElementInterface[];
```
Returns the form elements added to the form


```php
public function getEntity();
```
Returns the entity related to the model


```php
public function getFilteredValue( string $name ): mixed | null;
```
Gets a value from the internal filtered data or calls getValue(name)


```php
public function getLabel( string $name ): string;
```
Returns a label for an element


```php
public function getMessages(): Messages | array;
```
Returns the messages generated in the validation.

```php
if ($form->isValid($_POST) == false) {
    $messages = $form->getMessages();

    foreach ($messages as $message) {
        echo $message, "<br>";
    }
}
```


```php
public function getMessagesFor( string $name ): Messages;
```
Returns the messages generated for a specific element


```php
public function getTagFactory(): TagFactory | null;
```
Returns the tagFactory object


```php
public function getUserOption( string $option, mixed $defaultValue = null ): mixed;
```
Returns the value of an option if present


```php
public function getUserOptions(): array;
```
Returns the options for the element


```php
public function getValidation(): ValidationInterface | null;
```
return ValidationInterface|null


```php
public function getValue( string $name ): mixed | null;
```
Gets a value from the internal related entity or from the default value


```php
public function getWhitelist(): array;
```
return array


```php
public function has( string $name ): bool;
```
Check if the form contains an element


```php
public function hasMessagesFor( string $name ): bool;
```
Check if messages were generated for a specific element


```php
public function isValid( mixed $data = null, mixed $entity = null, array $whitelist = [] ): bool;
```
Validates the form


```php
public function key(): int;
```
Returns the current position/key in the iterator


```php
public function label( string $name, array $attributes = [] ): string;
```
Generate the label of an element added to the form including HTML


```php
public function next(): void;
```
Moves the internal iteration pointer to the next position


```php
public function remove( string $name ): bool;
```
Removes an element from the form


```php
public function render( string $name, array $attributes = [] ): string;
```
Renders a specific item in the form


```php
public function rewind(): void;
```
Rewinds the internal iterator


```php
public function setAction( string $action ): Form;
```
Sets the form's action


```php
public function setAttributes( Attributes $attributes ): AttributesInterface;
```
   Set form attributes collection
   


```php
public function setEntity( mixed $entity ): Form;
```
Sets the entity related to the model


```php
public function setTagFactory( TagFactory $tagFactory ): Form;
```
Sets the tagFactory for the form


```php
public function setUserOption( string $option, mixed $value ): Form;
```
Sets an option for the form


```php
public function setUserOptions( array $options ): Form;
```
Sets options for the element


```php
public function setValidation( ValidationInterface $validation ): Form;
```
Sets the default validation


```php
public function setWhitelist( array $whitelist ): Form;
```
Sets the default whitelist


```php
public function valid(): bool;
```
Check if the current element in the iterator is valid




## Forms\Manager 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Manager.zep)


-   __Namespace__

    - `Phalcon\Forms`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Forms Manager


### Properties
```php
/**
 * @var array
 */
protected $forms;

```

### Methods

```php
public function create( string $name, mixed $entity = null ): Form;
```
Creates a form registering it in the forms manager


```php
public function get( string $name ): Form;
```
Returns a form by its name


```php
public function has( string $name ): bool;
```
Checks if a form is registered in the forms manager


```php
public function set( string $name, Form $form ): Manager;
```
Registers a form in the Forms Manager


