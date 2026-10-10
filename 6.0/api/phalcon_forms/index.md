---
title: "Phalcon Forms"
version: "6.0"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Forms

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::


## Forms\Element\AbstractElement

Abstract

This is a base class for form elements

- **`Phalcon\Forms\Element\AbstractElement`** - implements [`Phalcon\Forms\Element\ElementInterface`](#formselementelementinterface)
  - [`Phalcon\Forms\Element\Check`](#formselementcheck)
  - [`Phalcon\Forms\Element\CheckGroup`](#formselementcheckgroup)
  - [`Phalcon\Forms\Element\Date`](#formselementdate)
  - [`Phalcon\Forms\Element\Email`](#formselementemail)
  - [`Phalcon\Forms\Element\File`](#formselementfile)
  - [`Phalcon\Forms\Element\Hidden`](#formselementhidden)
  - [`Phalcon\Forms\Element\Numeric`](#formselementnumeric)
  - [`Phalcon\Forms\Element\Password`](#formselementpassword)
  - [`Phalcon\Forms\Element\Radio`](#formselementradio)
  - [`Phalcon\Forms\Element\RadioGroup`](#formselementradiogroup)
  - [`Phalcon\Forms\Element\Select`](#formselementselect)
  - [`Phalcon\Forms\Element\Submit`](#formselementsubmit)
  - [`Phalcon\Forms\Element\Text`](#formselementtext)
  - [`Phalcon\Forms\Element\TextArea`](#formselementtextarea)

`Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\FormElementNameRequired` · `Phalcon\Forms\Exceptions\InvalidFilterType` · `Phalcon\Forms\Form` · `Phalcon\Html\TagFactory` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages` · `Stringable`

### Method Summary

- `public __construct(string $name, array $attributes = [])` — Constructor

- `public __toString(): string` — Magic method \_\_toString renders the widget without attributes

- `public addFilter(string $filter): ElementInterface` — Adds a filter to current list of filters

- `public addValidator(ValidatorInterface $validator): ElementInterface` — Adds a validator to the element

- `public addValidators(array $validators, bool $merge = true): ElementInterface` — Adds a group of validators

- `public appendMessage(MessageInterface $message): ElementInterface` — Appends a message to the internal message list

- `public clear(): ElementInterface` — Clears element to its default value

- `public getAttribute(string $attribute, mixed $defaultValue = null): mixed` — Returns the value of an attribute if present

- `public getAttributes(): array` — Returns the default attributes for the element

- `public getDefault(): mixed` — Returns the default value assigned to the element

- `public getFilters(): array` — Returns the element filters

- `public getForm(): Form|null` — Returns the parent form to the element

- `public getLabel(): string|null` — Returns the element label

- `public getMessages(): Messages` — Returns the messages that belongs to the element

- `public getName(): string` — Returns the element name

- `public getTagFactory(): TagFactory|null` — Returns the tagFactory; throws exception if not present

- `public getUserOption(string $option, mixed $defaultValue = null): mixed` — Returns the value of an option if present

- `public getUserOptions(): array` — Returns the options for the element

- `public getValidators(): array` — Returns the validators registered for the element

- `public getValue(): mixed` — Returns the element's value

- `public hasMessages(): bool` — Checks whether there are messages attached to the element

- `public label(array $attributes = []): string` — Generate the HTML to label the element

- `public render(array $attributes = []): string` — Renders the element widget returning HTML

- `public setAttribute(string $attribute, mixed $value): ElementInterface` — Sets a default attribute for the element

- `public setAttributes(array $attributes): ElementInterface` — Sets default attributes for the element

- `public setDefault(mixed $value): ElementInterface` — Sets a default value in case the form does not use an entity

- `public setFilters(array|string $filters): ElementInterface` — Sets the element filters

- `public setForm(Form $form): ElementInterface` — Sets the parent form to the element

- `public setLabel(string $label): ElementInterface` — Sets the element label

- `public setMessages(Messages $messages): ElementInterface` — Sets the validation messages related to the element

- `public setName(string $name): ElementInterface` — Sets the element name

- `public setTagFactory(TagFactory $tagFactory): static` — Sets the TagFactory

- `public setUserOption(string $option, mixed $value): ElementInterface` — Sets an option for the element

- `public setUserOptions(array $options): ElementInterface` — Sets options for the element

- `protected getLocalTagFactory(): TagFactory` — Returns the tagFactory; throws exception if not present

### Properties

- `protected forms_attributes $attributes = []`

- `protected forms_filters $filters = []`

- `protected Form|null $form = null`

- `protected string|null $label = null`

- `protected Messages $messages`

- `protected string $method = "inputText"`

- `protected string $name`

- `protected forms_options $options = []`

- `protected TagFactory|null $tagFactory = null`

- `protected forms_validators $validators = []`

- `protected mixed|null $value = null`

### Methods

<h4 id="formselementabstractelement-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    array $attributes = []
);
```

Constructor

<h4 id="formselementabstractelement-__tostring"><code>__toString()</code></h4>

```php
public function __toString(): string;
```

Magic method __toString renders the widget without attributes

<h4 id="formselementabstractelement-addfilter"><code>addFilter()</code></h4>

```php
public function addFilter( string $filter ): ElementInterface;
```

Adds a filter to current list of filters

<h4 id="formselementabstractelement-addvalidator"><code>addValidator()</code></h4>

```php
public function addValidator( ValidatorInterface $validator ): ElementInterface;
```

Adds a validator to the element

<h4 id="formselementabstractelement-addvalidators"><code>addValidators()</code></h4>

```php
public function addValidators(
    array $validators,
    bool $merge = true
): ElementInterface;
```

Adds a group of validators

<h4 id="formselementabstractelement-appendmessage"><code>appendMessage()</code></h4>

```php
public function appendMessage( MessageInterface $message ): ElementInterface;
```

Appends a message to the internal message list

<h4 id="formselementabstractelement-clear"><code>clear()</code></h4>

```php
public function clear(): ElementInterface;
```

Clears element to its default value

<h4 id="formselementabstractelement-getattribute"><code>getAttribute()</code></h4>

```php
public function getAttribute(
    string $attribute,
    mixed $defaultValue = null
): mixed;
```

Returns the value of an attribute if present

<h4 id="formselementabstractelement-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Returns the default attributes for the element

<h4 id="formselementabstractelement-getdefault"><code>getDefault()</code></h4>

```php
public function getDefault(): mixed;
```

Returns the default value assigned to the element

<h4 id="formselementabstractelement-getfilters"><code>getFilters()</code></h4>

```php
public function getFilters(): array;
```

Returns the element filters

<h4 id="formselementabstractelement-getform"><code>getForm()</code></h4>

```php
public function getForm(): Form|null;
```

Returns the parent form to the element

<h4 id="formselementabstractelement-getlabel"><code>getLabel()</code></h4>

```php
public function getLabel(): string|null;
```

Returns the element label

<h4 id="formselementabstractelement-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): Messages;
```

Returns the messages that belongs to the element
The element needs to be attached to a form

<h4 id="formselementabstractelement-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the element name

<h4 id="formselementabstractelement-gettagfactory"><code>getTagFactory()</code></h4>

```php
public function getTagFactory(): TagFactory|null;
```

Returns the tagFactory; throws exception if not present

<h4 id="formselementabstractelement-getuseroption"><code>getUserOption()</code></h4>

```php
public function getUserOption(
    string $option,
    mixed $defaultValue = null
): mixed;
```

Returns the value of an option if present

<h4 id="formselementabstractelement-getuseroptions"><code>getUserOptions()</code></h4>

```php
public function getUserOptions(): array;
```

Returns the options for the element

<h4 id="formselementabstractelement-getvalidators"><code>getValidators()</code></h4>

```php
public function getValidators(): array;
```

Returns the validators registered for the element

<h4 id="formselementabstractelement-getvalue"><code>getValue()</code></h4>

```php
public function getValue(): mixed;
```

Returns the element's value

<h4 id="formselementabstractelement-hasmessages"><code>hasMessages()</code></h4>

```php
public function hasMessages(): bool;
```

Checks whether there are messages attached to the element

<h4 id="formselementabstractelement-label"><code>label()</code></h4>

```php
public function label( array $attributes = [] ): string;
```

Generate the HTML to label the element

<h4 id="formselementabstractelement-render"><code>render()</code></h4>

```php
public function render( array $attributes = [] ): string;
```

Renders the element widget returning HTML

<h4 id="formselementabstractelement-setattribute"><code>setAttribute()</code></h4>

```php
public function setAttribute(
    string $attribute,
    mixed $value
): ElementInterface;
```

Sets a default attribute for the element

<h4 id="formselementabstractelement-setattributes"><code>setAttributes()</code></h4>

```php
public function setAttributes( array $attributes ): ElementInterface;
```

Sets default attributes for the element

<h4 id="formselementabstractelement-setdefault"><code>setDefault()</code></h4>

```php
public function setDefault( mixed $value ): ElementInterface;
```

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST

<h4 id="formselementabstractelement-setfilters"><code>setFilters()</code></h4>

```php
public function setFilters( array|string $filters ): ElementInterface;
```

Sets the element filters

<h4 id="formselementabstractelement-setform"><code>setForm()</code></h4>

```php
public function setForm( Form $form ): ElementInterface;
```

Sets the parent form to the element

<h4 id="formselementabstractelement-setlabel"><code>setLabel()</code></h4>

```php
public function setLabel( string $label ): ElementInterface;
```

Sets the element label

<h4 id="formselementabstractelement-setmessages"><code>setMessages()</code></h4>

```php
public function setMessages( Messages $messages ): ElementInterface;
```

Sets the validation messages related to the element

<h4 id="formselementabstractelement-setname"><code>setName()</code></h4>

```php
public function setName( string $name ): ElementInterface;
```

Sets the element name

<h4 id="formselementabstractelement-settagfactory"><code>setTagFactory()</code></h4>

```php
public function setTagFactory( TagFactory $tagFactory ): static;
```

Sets the TagFactory

<h4 id="formselementabstractelement-setuseroption"><code>setUserOption()</code></h4>

```php
public function setUserOption(
    string $option,
    mixed $value
): ElementInterface;
```

Sets an option for the element

<h4 id="formselementabstractelement-setuseroptions"><code>setUserOptions()</code></h4>

```php
public function setUserOptions( array $options ): ElementInterface;
```

Sets options for the element

<h4 id="formselementabstractelement-getlocaltagfactory"><code>getLocalTagFactory()</code></h4>

```php
protected function getLocalTagFactory(): TagFactory;
```

Returns the tagFactory; throws exception if not present


## Forms\Element\Check

Class

Component INPUT[type=check] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\Check`**

### Method Summary

- `public getUncheckedValue(): mixed` — Returns the value to bind when the checkbox is absent from submitted

- `public hasUncheckedValue(): bool` — Whether an "unchecked value" has been explicitly registered.

- `public setUncheckedValue(mixed $value): static` — Registers a value to bind when the checkbox is absent from submitted

### Properties

- `protected string $method = "inputCheckbox"`

- `protected mixed $uncheckedValue = null`

- `protected bool $uncheckedValueSet = false`

### Methods

<h4 id="formselementcheck-getuncheckedvalue"><code>getUncheckedValue()</code></h4>

```php
public function getUncheckedValue(): mixed;
```

Returns the value to bind when the checkbox is absent from submitted
data. Only meaningful when hasUncheckedValue() is true.

<h4 id="formselementcheck-hasuncheckedvalue"><code>hasUncheckedValue()</code></h4>

```php
public function hasUncheckedValue(): bool;
```

Whether an "unchecked value" has been explicitly registered.

<h4 id="formselementcheck-setuncheckedvalue"><code>setUncheckedValue()</code></h4>

```php
public function setUncheckedValue( mixed $value ): static;
```

Registers a value to bind when the checkbox is absent from submitted
data (the typical browser behavior for an unchecked input). Without
this opt-in, an unchecked checkbox leaves the entity property
untouched. See cphalcon issue #16982.


## Forms\Element\CheckGroup

Class

Component for a group of INPUT[type=checkbox] elements.

The name is automatically suffixed with [] when not already present so that
PHP collects all checked values into an array on form submission.

Options are passed as an associative array:
  ['value' => 'Label']
or with per-item attributes:
  ['value' => ['label' => 'Label', 'disabled' => true]]

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\CheckGroup`**

`Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Helper\Input\CheckboxGroup`

### Method Summary

- `public __construct(string $name, array $options = [], array $attributes = [])` — Constructor

- `public getOptions(): array` — Returns the group options

- `public render(array $attributes = []): string` — Renders the checkbox group returning HTML

- `public setOptions(array $options): ElementInterface` — Sets the group options

### Properties

- `protected forms_group_options $optionsValues = []`

### Methods

<h4 id="formselementcheckgroup-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    array $options = [],
    array $attributes = []
);
```

Constructor

<h4 id="formselementcheckgroup-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Returns the group options

<h4 id="formselementcheckgroup-render"><code>render()</code></h4>

```php
public function render( array $attributes = [] ): string;
```

Renders the checkbox group returning HTML

<h4 id="formselementcheckgroup-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): ElementInterface;
```

Sets the group options


## Forms\Element\Date

Class

Component INPUT[type=date] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\Date`**

### Properties

- `protected string $method = "inputDate"`


## Forms\Element\ElementInterface

Interface

Interface for Phalcon\Forms\Element classes

- **`Phalcon\Forms\Element\ElementInterface`**

`Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Forms\Form` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages`

### Method Summary

- `public addFilter(string $filter): ElementInterface` — Adds a filter to current list of filters

- `public addValidator(ValidatorInterface $validator): ElementInterface` — Adds a validator to the element

- `public addValidators(array $validators, bool $merge = true): ElementInterface` — Adds a group of validators

- `public appendMessage(MessageInterface $message): ElementInterface` — Appends a message to the internal message list

- `public clear(): ElementInterface` — Clears every element in the form to its default value

- `public getAttribute(string $attribute, mixed $defaultValue = null): mixed` — Returns the value of an attribute if present

- `public getAttributes(): array` — Returns the default attributes for the element

- `public getDefault(): mixed` — Returns the default value assigned to the element

- `public getFilters(): array` — Returns the element's filters

- `public getForm(): Form|null` — Returns the parent form to the element

- `public getLabel(): string|null` — Returns the element's label

- `public getMessages(): Messages` — Returns the messages that belongs to the element

- `public getName(): string` — Returns the element's name

- `public getUserOption(string $option, mixed $defaultValue = null): mixed` — Returns the value of an option if present

- `public getUserOptions(): array` — Returns the options for the element

- `public getValidators(): array` — Returns the validators registered for the element

- `public getValue(): mixed` — Returns the element's value

- `public hasMessages(): bool` — Checks whether there are messages attached to the element

- `public label(): string` — Generate the HTML to label the element

- `public render(array $attributes = []): string` — Renders the element widget

- `public setAttribute(string $attribute, mixed $value): ElementInterface` — Sets a default attribute for the element

- `public setAttributes(array $attributes): ElementInterface` — Sets default attributes for the element

- `public setDefault(mixed $value): ElementInterface` — Sets a default value in case the form does not use an entity

- `public setFilters(array|string $filters): ElementInterface` — Sets the element's filters

- `public setForm(Form $form): ElementInterface` — Sets the parent form to the element

- `public setLabel(string $label): ElementInterface` — Sets the element label

- `public setMessages(Messages $messages): ElementInterface` — Sets the validation messages related to the element

- `public setName(string $name): ElementInterface` — Sets the element's name

- `public setUserOption(string $option, mixed $value): ElementInterface` — Sets an option for the element

- `public setUserOptions(array $options): ElementInterface` — Sets options for the element

### Methods

<h4 id="formselementelementinterface-addfilter"><code>addFilter()</code></h4>

```php
public function addFilter( string $filter ): ElementInterface;
```

Adds a filter to current list of filters

<h4 id="formselementelementinterface-addvalidator"><code>addValidator()</code></h4>

```php
public function addValidator( ValidatorInterface $validator ): ElementInterface;
```

Adds a validator to the element

<h4 id="formselementelementinterface-addvalidators"><code>addValidators()</code></h4>

```php
public function addValidators(
    array $validators,
    bool $merge = true
): ElementInterface;
```

Adds a group of validators

<h4 id="formselementelementinterface-appendmessage"><code>appendMessage()</code></h4>

```php
public function appendMessage( MessageInterface $message ): ElementInterface;
```

Appends a message to the internal message list

<h4 id="formselementelementinterface-clear"><code>clear()</code></h4>

```php
public function clear(): ElementInterface;
```

Clears every element in the form to its default value

<h4 id="formselementelementinterface-getattribute"><code>getAttribute()</code></h4>

```php
public function getAttribute(
    string $attribute,
    mixed $defaultValue = null
): mixed;
```

Returns the value of an attribute if present

<h4 id="formselementelementinterface-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): array;
```

Returns the default attributes for the element

<h4 id="formselementelementinterface-getdefault"><code>getDefault()</code></h4>

```php
public function getDefault(): mixed;
```

Returns the default value assigned to the element

<h4 id="formselementelementinterface-getfilters"><code>getFilters()</code></h4>

```php
public function getFilters(): array;
```

Returns the element's filters

<h4 id="formselementelementinterface-getform"><code>getForm()</code></h4>

```php
public function getForm(): Form|null;
```

Returns the parent form to the element

<h4 id="formselementelementinterface-getlabel"><code>getLabel()</code></h4>

```php
public function getLabel(): string|null;
```

Returns the element's label

<h4 id="formselementelementinterface-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): Messages;
```

Returns the messages that belongs to the element
The element needs to be attached to a form

<h4 id="formselementelementinterface-getname"><code>getName()</code></h4>

```php
public function getName(): string;
```

Returns the element's name

<h4 id="formselementelementinterface-getuseroption"><code>getUserOption()</code></h4>

```php
public function getUserOption(
    string $option,
    mixed $defaultValue = null
): mixed;
```

Returns the value of an option if present

<h4 id="formselementelementinterface-getuseroptions"><code>getUserOptions()</code></h4>

```php
public function getUserOptions(): array;
```

Returns the options for the element

<h4 id="formselementelementinterface-getvalidators"><code>getValidators()</code></h4>

```php
public function getValidators(): array;
```

Returns the validators registered for the element

<h4 id="formselementelementinterface-getvalue"><code>getValue()</code></h4>

```php
public function getValue(): mixed;
```

Returns the element's value

<h4 id="formselementelementinterface-hasmessages"><code>hasMessages()</code></h4>

```php
public function hasMessages(): bool;
```

Checks whether there are messages attached to the element

<h4 id="formselementelementinterface-label"><code>label()</code></h4>

```php
public function label(): string;
```

Generate the HTML to label the element

<h4 id="formselementelementinterface-render"><code>render()</code></h4>

```php
public function render( array $attributes = [] ): string;
```

Renders the element widget

<h4 id="formselementelementinterface-setattribute"><code>setAttribute()</code></h4>

```php
public function setAttribute(
    string $attribute,
    mixed $value
): ElementInterface;
```

Sets a default attribute for the element

<h4 id="formselementelementinterface-setattributes"><code>setAttributes()</code></h4>

```php
public function setAttributes( array $attributes ): ElementInterface;
```

Sets default attributes for the element

<h4 id="formselementelementinterface-setdefault"><code>setDefault()</code></h4>

```php
public function setDefault( mixed $value ): ElementInterface;
```

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST

<h4 id="formselementelementinterface-setfilters"><code>setFilters()</code></h4>

```php
public function setFilters( array|string $filters ): ElementInterface;
```

Sets the element's filters

<h4 id="formselementelementinterface-setform"><code>setForm()</code></h4>

```php
public function setForm( Form $form ): ElementInterface;
```

Sets the parent form to the element

<h4 id="formselementelementinterface-setlabel"><code>setLabel()</code></h4>

```php
public function setLabel( string $label ): ElementInterface;
```

Sets the element label

<h4 id="formselementelementinterface-setmessages"><code>setMessages()</code></h4>

```php
public function setMessages( Messages $messages ): ElementInterface;
```

Sets the validation messages related to the element

<h4 id="formselementelementinterface-setname"><code>setName()</code></h4>

```php
public function setName( string $name ): ElementInterface;
```

Sets the element's name

<h4 id="formselementelementinterface-setuseroption"><code>setUserOption()</code></h4>

```php
public function setUserOption(
    string $option,
    mixed $value
): ElementInterface;
```

Sets an option for the element

<h4 id="formselementelementinterface-setuseroptions"><code>setUserOptions()</code></h4>

```php
public function setUserOptions( array $options ): ElementInterface;
```

Sets options for the element


## Forms\Element\Email

Class

Component INPUT[type=email] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\Email`**

### Properties

- `protected string $method = "inputEmail"`


## Forms\Element\File

Class

Component INPUT[type=file] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\File`**

### Properties

- `protected string $method = "inputFile"`


## Forms\Element\Hidden

Class

Component INPUT[type=hidden] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\Hidden`**

### Properties

- `protected string $method = "inputHidden"`


## Forms\Element\Numeric

Class

Component INPUT[type=number] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\Numeric`**

### Properties

- `protected string $method = "inputNumeric"`


## Forms\Element\Password

Class

Component INPUT[type=password] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\Password`**

### Properties

- `protected string $method = "inputPassword"`


## Forms\Element\Radio

Class

Component INPUT[type=radio] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\Radio`**

### Properties

- `protected string $method = "inputRadio"`


## Forms\Element\RadioGroup

Class

Component for a group of INPUT[type=radio] elements.

Options are passed as an associative array:
  ['value' => 'Label']
or with per-item attributes:
  ['value' => ['label' => 'Label', 'disabled' => true]]

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\RadioGroup`**

`Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Helper\Input\RadioGroup`

### Method Summary

- `public __construct(string $name, array $options = [], array $attributes = [])` — Constructor

- `public getOptions(): array` — Returns the group options

- `public render(array $attributes = []): string` — Renders the radio group returning HTML

- `public setOptions(array $options): ElementInterface` — Sets the group options

### Properties

- `protected forms_group_options $optionsValues = []`

### Methods

<h4 id="formselementradiogroup-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    array $options = [],
    array $attributes = []
);
```

Constructor

<h4 id="formselementradiogroup-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): array;
```

Returns the group options

<h4 id="formselementradiogroup-render"><code>render()</code></h4>

```php
public function render( array $attributes = [] ): string;
```

Renders the radio group returning HTML

<h4 id="formselementradiogroup-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array $options ): ElementInterface;
```

Sets the group options


## Forms\Element\Select

Class

Component SELECT (choice) for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\Select`**

`Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Tag\Select`

### Method Summary

- `public __construct(string $name, mixed $options = null, array $attributes = [])` — Constructor

- `public addOption(mixed $option): ElementInterface` — Adds an option to the current options

- `public getOptions(): mixed` — Returns the choices' options

- `public render(array $attributes = []): string` — Renders the element widget returning HTML

- `public setOptions(array|object $options): ElementInterface` — Set the choice's options

- `protected prepareAttributes(array $attributes = []): array` — Returns an array of prepared attributes for Phalcon\Html\TagFactory

### Properties

- `protected array|object|null $optionsValues = null`

### Methods

<h4 id="formselementselect-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    string $name,
    mixed $options = null,
    array $attributes = []
);
```

Constructor

<h4 id="formselementselect-addoption"><code>addOption()</code></h4>

```php
public function addOption( mixed $option ): ElementInterface;
```

Adds an option to the current options

<h4 id="formselementselect-getoptions"><code>getOptions()</code></h4>

```php
public function getOptions(): mixed;
```

Returns the choices' options

<h4 id="formselementselect-render"><code>render()</code></h4>

```php
public function render( array $attributes = [] ): string;
```

Renders the element widget returning HTML

<h4 id="formselementselect-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( array|object $options ): ElementInterface;
```

Set the choice's options

<h4 id="formselementselect-prepareattributes"><code>prepareAttributes()</code></h4>

```php
protected function prepareAttributes( array $attributes = [] ): array;
```

Returns an array of prepared attributes for Phalcon\Html\TagFactory
helpers according to the element parameters


## Forms\Element\Submit

Class

Component INPUT[type=submit] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\Submit`**

### Properties

- `protected string $method = "inputSubmit"`


## Forms\Element\Text

Class

Component INPUT[type=text] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\Text`**


## Forms\Element\TextArea

Class

Component TEXTAREA for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
  - **`Phalcon\Forms\Element\TextArea`**

### Properties

- `protected string $method = "inputTextarea"`


## Forms\Exception

Class

Exceptions thrown in Phalcon\Forms will use this class

- `\Exception`
  - **`Phalcon\Forms\Exception`**
    - [`Phalcon\Forms\Exceptions\ElementNotInForm`](#formsexceptionselementnotinform)
    - [`Phalcon\Forms\Exceptions\FormNotInLocator`](#formsexceptionsformnotinlocator)
    - [`Phalcon\Forms\Exceptions\FormNotRegistered`](#formsexceptionsformnotregistered)
    - [`Phalcon\Forms\Exceptions\InvalidEntity`](#formsexceptionsinvalidentity)
    - [`Phalcon\Forms\Exceptions\InvalidFilterType`](#formsexceptionsinvalidfiltertype)
    - [`Phalcon\Forms\Exceptions\InvalidJsonSchema`](#formsexceptionsinvalidjsonschema)
    - [`Phalcon\Forms\Exceptions\JsonSchemaNotArray`](#formsexceptionsjsonschemanotarray)
    - [`Phalcon\Forms\Exceptions\NoFormElements`](#formsexceptionsnoformelements)
    - [`Phalcon\Forms\Exceptions\SchemaEntryMissingKey`](#formsexceptionsschemaentrymissingkey)
    - [`Phalcon\Forms\Exceptions\SchemaEntryNotArray`](#formsexceptionsschemaentrynotarray)
    - [`Phalcon\Forms\Exceptions\UnknownFormElementType`](#formsexceptionsunknownformelementtype)
    - [`Phalcon\Forms\Exceptions\YamlExtensionRequired`](#formsexceptionsyamlextensionrequired)
    - [`Phalcon\Forms\Exceptions\YamlSchemaNotArray`](#formsexceptionsyamlschemanotarray)

### Method Summary

- `public tagFactoryNotFound(): self`

- `public usingParameterRequired(): self`

### Methods

<h4 id="formsexception-tagfactorynotfound"><code>tagFactoryNotFound()</code></h4>

```php
public static function tagFactoryNotFound(): self;
```

<h4 id="formsexception-usingparameterrequired"><code>usingParameterRequired()</code></h4>

```php
public static function usingParameterRequired(): self;
```


## Forms\Exceptions\ElementNotInForm

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\ElementNotInForm`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="formsexceptionselementnotinform-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Forms\Exceptions\FormElementNameRequired

Class

- `\InvalidArgumentException`
  - **`Phalcon\Forms\Exceptions\FormElementNameRequired`**

`InvalidArgumentException`

### Method Summary

- `public __construct()`

### Methods

<h4 id="formsexceptionsformelementnamerequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Forms\Exceptions\FormNotInLocator

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\FormNotInLocator`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="formsexceptionsformnotinlocator-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Forms\Exceptions\FormNotRegistered

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\FormNotRegistered`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct(string $name)`

### Methods

<h4 id="formsexceptionsformnotregistered-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```


## Forms\Exceptions\InvalidEntity

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\InvalidEntity`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="formsexceptionsinvalidentity-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Forms\Exceptions\InvalidFilterType

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\InvalidFilterType`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="formsexceptionsinvalidfiltertype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Forms\Exceptions\InvalidJsonSchema

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\InvalidJsonSchema`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct(string $detail)`

### Methods

<h4 id="formsexceptionsinvalidjsonschema-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $detail );
```


## Forms\Exceptions\JsonSchemaNotArray

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\JsonSchemaNotArray`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="formsexceptionsjsonschemanotarray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Forms\Exceptions\NoFormElements

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\NoFormElements`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="formsexceptionsnoformelements-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Forms\Exceptions\SchemaEntryMissingKey

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\SchemaEntryMissingKey`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct(int $index, string $key)`

### Methods

<h4 id="formsexceptionsschemaentrymissingkey-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    int $index,
    string $key
);
```


## Forms\Exceptions\SchemaEntryNotArray

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\SchemaEntryNotArray`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct(int $index)`

### Methods

<h4 id="formsexceptionsschemaentrynotarray-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $index );
```


## Forms\Exceptions\UnknownFormElementType

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\UnknownFormElementType`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct(string $type)`

### Methods

<h4 id="formsexceptionsunknownformelementtype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type );
```


## Forms\Exceptions\YamlExtensionRequired

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\YamlExtensionRequired`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="formsexceptionsyamlextensionrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Forms\Exceptions\YamlSchemaNotArray

Class

- `\Exception`
  - [`Phalcon\Forms\Exception`](#formsexception)
    - **`Phalcon\Forms\Exceptions\YamlSchemaNotArray`**

`Phalcon\Forms\Exception`

### Method Summary

- `public __construct()`

### Methods

<h4 id="formsexceptionsyamlschemanotarray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```


## Forms\Form

Class

This component allows to build forms using an object-oriented interface

@implements Iterator&lt;int, ElementInterface>

- `\stdClass`
  - [`Phalcon\Di\Injectable`](/6.0/api/phalcon_di/#diinjectable)
    - **`Phalcon\Forms\Form`** - implements `\Countable`, `\Iterator`, [`Phalcon\Html\Attributes\AttributesInterface`](/6.0/api/phalcon_html/#htmlattributesattributesinterface)

`Countable` · `Iterator` · `Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Contracts\Forms\Schema` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Filter\FilterInterface` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\ValidationInterface` · `Phalcon\Forms\Element\Check` · `Phalcon\Forms\Element\ElementInterface` · `Phalcon\Forms\Exceptions\ElementNotInForm` · `Phalcon\Forms\Exceptions\InvalidEntity` · `Phalcon\Forms\Exceptions\NoFormElements` · `Phalcon\Html\Attributes` · `Phalcon\Html\Attributes\AttributesInterface` · `Phalcon\Html\TagFactory` · `Phalcon\Messages\Messages` · `Phalcon\Support\Settings` · `Phalcon\Traits\Support\Helper\Str\CamelizeTrait`

### Method Summary

- `public __construct(mixed $entity = null, array $userOptions = [])` — Phalcon\Forms\Form constructor

- `public add(ElementInterface $element, string|null $position = null, bool|null $type = null): static` — Adds an element to the form

- `public bind(array $data, object|null $entity = null, array $whitelist = []): static` — Binds data to the entity

- `public clear(array|string|null $fields = null): static` — Clears every element in the form to its default value

- `public count(): int` — Returns the number of elements in the form

- `public current(): mixed` — Returns the current element in the iterator

- `public get(string $name): ElementInterface` — Returns an element added to the form by its name

- `public getAction(): string` — Returns the form's action

- `public getAttributes(): Attributes` — Get Form attributes collection

- `public getElements(): array` — Returns the form elements added to the form

- `public getEntity(): object|null` — Returns the entity related to the model

- `public getFilteredValue(string $name): mixed` — Gets a value from the internal filtered data or calls getValue(name)

- `public getLabel(string $name): string` — Returns a label for an element

- `public getMessages(): Messages` — Returns the messages generated in the validation.

- `public getMessagesFor(string $name): Messages` — Returns the messages generated for a specific element

- `public getTagFactory(): TagFactory|null` — Returns the tagFactory object

- `public getUserOption(string $option, mixed $defaultValue = null): mixed` — Returns the value of an option if present

- `public getUserOptions(): array` — Returns the options for the element

- `public getValidation(): ValidationInterface|null` — return ValidationInterface|null

- `public getValue(string $name): mixed` — Gets a value from the internal related entity or from the default value

- `public getWhitelist(): array`

- `public has(string $name): bool` — Check if the form contains an element

- `public hasMessagesFor(string $name): bool` — Check if messages were generated for a specific element

- `public isValid(mixed $data = null, mixed $entity = null, array $whitelist = []): bool` — Validates the form

- `public key(): int` — Returns the current position/key in the iterator

- `public label(string $name, array $attributes = []): string` — Generate the label of an element added to the form including HTML

- `public load(Schema $schema, FormsLocator $locator): static` — Loads elements into the form from a Schema source.

- `public next(): void` — Moves the internal iteration pointer to the next position

- `public remove(string $name): bool` — Removes an element from the form

- `public render(string $name, array $attributes = []): string` — Renders a specific item in the form

- `public rewind(): void` — Rewinds the internal iterator

- `public setAction(string $action): static` — Sets the form's action

- `public setAttributes(Attributes $attributes): static` — Set form attributes collection

- `public setEntity(mixed $entity): static` — Sets the entity related to the model

- `public setTagFactory(TagFactory $tagFactory): static` — Sets the tagFactory for the form

- `public setUserOption(string $option, mixed $value): static` — Sets an option for the form

- `public setUserOptions(array $options): static` — Sets options for the element

- `public setValidation(ValidationInterface $validation): static` — Sets the default validation

- `public setWhitelist(array $whitelist): static` — Sets the default whitelist

- `public valid(): bool` — Check if the current element in the iterator is valid

### Properties

- `protected Attributes $attributes`

- `protected array $data = []`

- `protected array $elements = []`

- `protected array $elementsIndexed = []`

- `protected object|null $entity = null`

- `protected array $filteredData = []`

- `protected Messages $messages`

- `protected array $options = []`

- `protected int $position = 0`

- `protected TagFactory|null $tagFactory = null`

- `protected ValidationInterface|null $validation = null`

- `protected array $whitelist = []`

### Methods

<h4 id="formsform-__construct"><code>__construct()</code></h4>

```php
public function __construct(
    mixed $entity = null,
    array $userOptions = []
);
```

Phalcon\Forms\Form constructor

<h4 id="formsform-add"><code>add()</code></h4>

```php
public function add(
    ElementInterface $element,
    string|null $position = null,
    bool|null $type = null
): static;
```

Adds an element to the form

<h4 id="formsform-bind"><code>bind()</code></h4>

```php
public function bind(
    array $data,
    object|null $entity = null,
    array $whitelist = []
): static;
```

Binds data to the entity

<h4 id="formsform-clear"><code>clear()</code></h4>

```php
public function clear( array|string|null $fields = null ): static;
```

Clears every element in the form to its default value

<h4 id="formsform-count"><code>count()</code></h4>

```php
public function count(): int;
```

Returns the number of elements in the form

<h4 id="formsform-current"><code>current()</code></h4>

```php
public function current(): mixed;
```

Returns the current element in the iterator

<h4 id="formsform-get"><code>get()</code></h4>

```php
public function get( string $name ): ElementInterface;
```

Returns an element added to the form by its name

<h4 id="formsform-getaction"><code>getAction()</code></h4>

```php
public function getAction(): string;
```

Returns the form's action

<h4 id="formsform-getattributes"><code>getAttributes()</code></h4>

```php
public function getAttributes(): Attributes;
```

Get Form attributes collection

<h4 id="formsform-getelements"><code>getElements()</code></h4>

```php
public function getElements(): array;
```

Returns the form elements added to the form

<h4 id="formsform-getentity"><code>getEntity()</code></h4>

```php
public function getEntity(): object|null;
```

Returns the entity related to the model

<h4 id="formsform-getfilteredvalue"><code>getFilteredValue()</code></h4>

```php
public function getFilteredValue( string $name ): mixed;
```

Gets a value from the internal filtered data or calls getValue(name)

<h4 id="formsform-getlabel"><code>getLabel()</code></h4>

```php
public function getLabel( string $name ): string;
```

Returns a label for an element

<h4 id="formsform-getmessages"><code>getMessages()</code></h4>

```php
public function getMessages(): Messages;
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

<h4 id="formsform-getmessagesfor"><code>getMessagesFor()</code></h4>

```php
public function getMessagesFor( string $name ): Messages;
```

Returns the messages generated for a specific element

<h4 id="formsform-gettagfactory"><code>getTagFactory()</code></h4>

```php
public function getTagFactory(): TagFactory|null;
```

Returns the tagFactory object

<h4 id="formsform-getuseroption"><code>getUserOption()</code></h4>

```php
public function getUserOption(
    string $option,
    mixed $defaultValue = null
): mixed;
```

Returns the value of an option if present

<h4 id="formsform-getuseroptions"><code>getUserOptions()</code></h4>

```php
public function getUserOptions(): array;
```

Returns the options for the element

<h4 id="formsform-getvalidation"><code>getValidation()</code></h4>

```php
public function getValidation(): ValidationInterface|null;
```

return ValidationInterface|null

<h4 id="formsform-getvalue"><code>getValue()</code></h4>

```php
public function getValue( string $name ): mixed;
```

Gets a value from the internal related entity or from the default value

<h4 id="formsform-getwhitelist"><code>getWhitelist()</code></h4>

```php
public function getWhitelist(): array;
```

<h4 id="formsform-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Check if the form contains an element

<h4 id="formsform-hasmessagesfor"><code>hasMessagesFor()</code></h4>

```php
public function hasMessagesFor( string $name ): bool;
```

Check if messages were generated for a specific element

<h4 id="formsform-isvalid"><code>isValid()</code></h4>

```php
public function isValid(
    mixed $data = null,
    mixed $entity = null,
    array $whitelist = []
): bool;
```

Validates the form

<h4 id="formsform-key"><code>key()</code></h4>

```php
public function key(): int;
```

Returns the current position/key in the iterator

<h4 id="formsform-label"><code>label()</code></h4>

```php
public function label(
    string $name,
    array $attributes = []
): string;
```

Generate the label of an element added to the form including HTML

<h4 id="formsform-load"><code>load()</code></h4>

```php
public function load(
    Schema $schema,
    FormsLocator $locator
): static;
```

Loads elements into the form from a Schema source.

Each definition in the schema must have at least 'type' and 'name'.
The locator resolves the type string to an element factory; custom
types can be registered on the locator with setElement().

<h4 id="formsform-next"><code>next()</code></h4>

```php
public function next(): void;
```

Moves the internal iteration pointer to the next position

<h4 id="formsform-remove"><code>remove()</code></h4>

```php
public function remove( string $name ): bool;
```

Removes an element from the form

<h4 id="formsform-render"><code>render()</code></h4>

```php
public function render(
    string $name,
    array $attributes = []
): string;
```

Renders a specific item in the form

<h4 id="formsform-rewind"><code>rewind()</code></h4>

```php
public function rewind(): void;
```

Rewinds the internal iterator

<h4 id="formsform-setaction"><code>setAction()</code></h4>

```php
public function setAction( string $action ): static;
```

Sets the form's action

<h4 id="formsform-setattributes"><code>setAttributes()</code></h4>

```php
public function setAttributes( Attributes $attributes ): static;
```

Set form attributes collection

<h4 id="formsform-setentity"><code>setEntity()</code></h4>

```php
public function setEntity( mixed $entity ): static;
```

Sets the entity related to the model

<h4 id="formsform-settagfactory"><code>setTagFactory()</code></h4>

```php
public function setTagFactory( TagFactory $tagFactory ): static;
```

Sets the tagFactory for the form

<h4 id="formsform-setuseroption"><code>setUserOption()</code></h4>

```php
public function setUserOption(
    string $option,
    mixed $value
): static;
```

Sets an option for the form

<h4 id="formsform-setuseroptions"><code>setUserOptions()</code></h4>

```php
public function setUserOptions( array $options ): static;
```

Sets options for the element

<h4 id="formsform-setvalidation"><code>setValidation()</code></h4>

```php
public function setValidation( ValidationInterface $validation ): static;
```

Sets the default validation

<h4 id="formsform-setwhitelist"><code>setWhitelist()</code></h4>

```php
public function setWhitelist( array $whitelist ): static;
```

Sets the default whitelist

<h4 id="formsform-valid"><code>valid()</code></h4>

```php
public function valid(): bool;
```

Check if the current element in the iterator is valid


## Forms\FormsLocator

Class

A closure-based registry for named forms and element type factories.

**Form registry** (`get`/`has`/`set`):
Each entry is a callable `fn(?object $entity): Form`. Without an entity the
resolved form is cached; with an entity a fresh form is always produced.

**Element registry** (`getElement`/`hasElement`/`setElement`):
Maps type strings (e.g. 'text', 'email') to factories used by Form::load().
Each callable has the signature `fn(string $name, array $options, array $attributes): ElementInterface`.
Default types are seeded by `getDefaultServices()`. Users may add or override
types with `setElement()`.

- **`Phalcon\Forms\FormsLocator`**

`Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Forms\Element\Check` · `Phalcon\Forms\Element\CheckGroup` · `Phalcon\Forms\Element\Date` · `Phalcon\Forms\Element\ElementInterface` · `Phalcon\Forms\Element\Email` · `Phalcon\Forms\Element\File` · `Phalcon\Forms\Element\Hidden` · `Phalcon\Forms\Element\Numeric` · `Phalcon\Forms\Element\Password` · `Phalcon\Forms\Element\Radio` · `Phalcon\Forms\Element\RadioGroup` · `Phalcon\Forms\Element\Select` · `Phalcon\Forms\Element\Submit` · `Phalcon\Forms\Element\Text` · `Phalcon\Forms\Element\TextArea` · `Phalcon\Forms\Exceptions\FormNotInLocator` · `Phalcon\Forms\Exceptions\UnknownFormElementType`

### Method Summary

- `public __construct(array $definitions = [])`

- `public get(string $name, object|null $entity = null): Form` — Returns the named form.

- `public getElement(string $type): callable` — Returns the factory callable for the given element type.

- `public has(string $name): bool` — Checks whether a named form factory is registered.

- `public hasElement(string $type): bool` — Checks whether an element type is registered.

- `public set(string $name, callable $factory): void` — Registers or replaces a named form factory.

- `public setElement(string $type, callable $factory): void` — Registers or replaces an element type factory.

- `protected getDefaultServices(): array` — Returns the built-in element type factories.

### Methods

<h4 id="formsformslocator-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $definitions = [] );
```

<h4 id="formsformslocator-get"><code>get()</code></h4>

```php
public function get(
    string $name,
    object|null $entity = null
): Form;
```

Returns the named form.

Without an entity the result is lazily created and cached.
With an entity a fresh form is always produced.

<h4 id="formsformslocator-getelement"><code>getElement()</code></h4>

```php
public function getElement( string $type ): callable;
```

Returns the factory callable for the given element type.

<h4 id="formsformslocator-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Checks whether a named form factory is registered.

<h4 id="formsformslocator-haselement"><code>hasElement()</code></h4>

```php
public function hasElement( string $type ): bool;
```

Checks whether an element type is registered.

<h4 id="formsformslocator-set"><code>set()</code></h4>

```php
public function set(
    string $name,
    callable $factory
): void;
```

Registers or replaces a named form factory.

The callable must accept one argument (?object $entity) and return a
Form instance. Replacing a registration clears any cached instance so
the next get() call rebuilds from the new factory.

<h4 id="formsformslocator-setelement"><code>setElement()</code></h4>

```php
public function setElement(
    string $type,
    callable $factory
): void;
```

Registers or replaces an element type factory.

The callable must accept (string $name, array $options, array $attributes)
and return an ElementInterface instance.

<h4 id="formsformslocator-getdefaultservices"><code>getDefaultServices()</code></h4>

```php
protected function getDefaultServices(): array;
```

Returns the built-in element type factories.

Each value is a callable: fn(string $name, array $options, array $attributes): ElementInterface


## Forms\Loader\ArrayLoader

Class

Supplies form element definitions from a PHP array.

- **`Phalcon\Forms\Loader\ArrayLoader`** - implements [`Phalcon\Contracts\Forms\Schema`](/6.0/api/phalcon_contracts/#contractsformsschema)

`Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\SchemaEntryMissingKey` · `Phalcon\Forms\Exceptions\SchemaEntryNotArray`

### Method Summary

- `public __construct(array $definitions)`

- `public load(): array`

- `protected validateDefinition(mixed $definition, int $index): void`

### Properties

- `protected array $definitions`

### Methods

<h4 id="formsloaderarrayloader-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $definitions );
```

<h4 id="formsloaderarrayloader-load"><code>load()</code></h4>

```php
public function load(): array;
```

<h4 id="formsloaderarrayloader-validatedefinition"><code>validateDefinition()</code></h4>

```php
protected function validateDefinition(
    mixed $definition,
    int $index
): void;
```


## Forms\Loader\JsonLoader

Class

Supplies form element definitions from a JSON string or file.

When $source looks like an existing, readable file path it is read from
disk first; otherwise the value is treated as a raw JSON string.

- **`Phalcon\Forms\Loader\JsonLoader`** - implements [`Phalcon\Contracts\Forms\Schema`](/6.0/api/phalcon_contracts/#contractsformsschema)

`InvalidArgumentException` · `Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\InvalidJsonSchema` · `Phalcon\Forms\Exceptions\JsonSchemaNotArray` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

- `public __construct(string $source)`

- `public load(): array`

### Properties

- `protected string $source`

### Methods

<h4 id="formsloaderjsonloader-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $source );
```

<h4 id="formsloaderjsonloader-load"><code>load()</code></h4>

```php
public function load(): array;
```


## Forms\Loader\YamlLoader

Class

Supplies form element definitions from a YAML string or file.

Requires the PHP `yaml` extension (pecl/yaml).

When $source is an existing, readable file path the file is parsed
directly; otherwise the value is treated as a raw YAML string.

- **`Phalcon\Forms\Loader\YamlLoader`** - implements [`Phalcon\Contracts\Forms\Schema`](/6.0/api/phalcon_contracts/#contractsformsschema)

`Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\YamlExtensionRequired` · `Phalcon\Forms\Exceptions\YamlSchemaNotArray` · `Phalcon\Traits\Php\InfoTrait`

### Method Summary

- `public __construct(string $source)`

- `public load(): array`

### Properties

- `protected string $source`

### Methods

<h4 id="formsloaderyamlloader-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $source );
```

<h4 id="formsloaderyamlloader-load"><code>load()</code></h4>

```php
public function load(): array;
```


## Forms\Manager

Class

Forms Manager

- **`Phalcon\Forms\Manager`**

`Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exceptions\FormNotRegistered`

### Method Summary

- `public __construct(FormsLocator|null $locator = null)` — Manager constructor.

- `public create(string $name, object|null $entity = null): Form` — Creates a form registering it in the forms manager

- `public get(string $name): Form` — Returns a form by its name

- `public getLocator(): FormsLocator` — Returns the FormsLocator instance.

- `public has(string $name): bool` — Checks if a form is registered in the forms manager

- `public loadForm(string $name, Schema $schema, object|null $entity = null): Form` — Creates a form from a Schema source, registers it in the manager,

- `public set(string $name, Form $form): static` — Registers a form in the Forms Manager

### Properties

- `protected array $forms = []`

- `protected FormsLocator $locator`

### Methods

<h4 id="formsmanager-__construct"><code>__construct()</code></h4>

```php
public function __construct( FormsLocator|null $locator = null );
```

Manager constructor.

<h4 id="formsmanager-create"><code>create()</code></h4>

```php
public function create(
    string $name,
    object|null $entity = null
): Form;
```

Creates a form registering it in the forms manager

<h4 id="formsmanager-get"><code>get()</code></h4>

```php
public function get( string $name ): Form;
```

Returns a form by its name

<h4 id="formsmanager-getlocator"><code>getLocator()</code></h4>

```php
public function getLocator(): FormsLocator;
```

Returns the FormsLocator instance.

<h4 id="formsmanager-has"><code>has()</code></h4>

```php
public function has( string $name ): bool;
```

Checks if a form is registered in the forms manager

<h4 id="formsmanager-loadform"><code>loadForm()</code></h4>

```php
public function loadForm(
    string $name,
    Schema $schema,
    object|null $entity = null
): Form;
```

Creates a form from a Schema source, registers it in the manager,
and registers a factory in the locator for entity-aware retrieval.

<h4 id="formsmanager-set"><code>set()</code></h4>

```php
public function set(
    string $name,
    Form $form
): static;
```

Registers a form in the Forms Manager

Source: https://docs.phalcon.io/6.0/api/phalcon_forms/index.mdx
