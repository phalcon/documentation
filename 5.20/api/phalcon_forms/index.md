---
title: "Phalcon Forms"
version: "5.20"
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

<ApiItem href="#formselementabstractelement-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"attributes","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#formselementabstractelement-__tostring" visibility="public" name="__toString" returnType="string" params={[]}>
Magic method __toString renders the widget without attributes
</ApiItem>
<ApiItem href="#formselementabstractelement-addfilter" visibility="public" name="addFilter" returnType="ElementInterface" params={[{"type":"string","name":"filter","default":null}]}>
Adds a filter to current list of filters
</ApiItem>
<ApiItem href="#formselementabstractelement-addvalidator" visibility="public" name="addValidator" returnType="ElementInterface" params={[{"type":"ValidatorInterface","name":"validator","default":null}]}>
Adds a validator to the element
</ApiItem>
<ApiItem href="#formselementabstractelement-addvalidators" visibility="public" name="addValidators" returnType="ElementInterface" params={[{"type":"array","name":"validators","default":null},{"type":"bool","name":"merge","default":"true"}]}>
Adds a group of validators
</ApiItem>
<ApiItem href="#formselementabstractelement-appendmessage" visibility="public" name="appendMessage" returnType="ElementInterface" params={[{"type":"MessageInterface","name":"message","default":null}]}>
Appends a message to the internal message list
</ApiItem>
<ApiItem href="#formselementabstractelement-clear" visibility="public" name="clear" returnType="ElementInterface" params={[]}>
Clears element to its default value
</ApiItem>
<ApiItem href="#formselementabstractelement-getattribute" visibility="public" name="getAttribute" returnType="mixed" params={[{"type":"string","name":"attribute","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns the value of an attribute if present
</ApiItem>
<ApiItem href="#formselementabstractelement-getattributes" visibility="public" name="getAttributes" returnType="array" params={[]}>
Returns the default attributes for the element
</ApiItem>
<ApiItem href="#formselementabstractelement-getdefault" visibility="public" name="getDefault" returnType="mixed" params={[]}>
Returns the default value assigned to the element
</ApiItem>
<ApiItem href="#formselementabstractelement-getfilters" visibility="public" name="getFilters" returnType="" params={[]}>
Returns the element filters
</ApiItem>
<ApiItem href="#formselementabstractelement-getform" visibility="public" name="getForm" returnType="Form" params={[]}>
Returns the parent form to the element
</ApiItem>
<ApiItem href="#formselementabstractelement-getlabel" visibility="public" name="getLabel" returnType="string|null" params={[]}>
Returns the element label
</ApiItem>
<ApiItem href="#formselementabstractelement-getmessages" visibility="public" name="getMessages" returnType="Messages" params={[]}>
Returns the messages that belongs to the element
</ApiItem>
<ApiItem href="#formselementabstractelement-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the element name
</ApiItem>
<ApiItem href="#formselementabstractelement-gettagfactory" visibility="public" name="getTagFactory" returnType="TagFactory|null" params={[]}>
Returns the tagFactory; throws exception if not present
</ApiItem>
<ApiItem href="#formselementabstractelement-getuseroption" visibility="public" name="getUserOption" returnType="mixed" params={[{"type":"string","name":"option","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns the value of an option if present
</ApiItem>
<ApiItem href="#formselementabstractelement-getuseroptions" visibility="public" name="getUserOptions" returnType="array" params={[]}>
Returns the options for the element
</ApiItem>
<ApiItem href="#formselementabstractelement-getvalidators" visibility="public" name="getValidators" returnType="ValidatorInterface[]" params={[]}>
Returns the validators registered for the element
</ApiItem>
<ApiItem href="#formselementabstractelement-getvalue" visibility="public" name="getValue" returnType="mixed" params={[]}>
Returns the element's value
</ApiItem>
<ApiItem href="#formselementabstractelement-hasmessages" visibility="public" name="hasMessages" returnType="bool" params={[]}>
Checks whether there are messages attached to the element
</ApiItem>
<ApiItem href="#formselementabstractelement-label" visibility="public" name="label" returnType="string" params={[{"type":"array","name":"attributes","default":"[]"}]}>
Generate the HTML to label the element
</ApiItem>
<ApiItem href="#formselementabstractelement-render" visibility="public" name="render" returnType="string" params={[{"type":"array","name":"attributes","default":"[]"}]}>
Renders the element widget returning HTML
</ApiItem>
<ApiItem href="#formselementabstractelement-setattribute" visibility="public" name="setAttribute" returnType="ElementInterface" params={[{"type":"string","name":"attribute","default":null},{"type":"mixed","name":"value","default":null}]}>
Sets a default attribute for the element
</ApiItem>
<ApiItem href="#formselementabstractelement-setattributes" visibility="public" name="setAttributes" returnType="ElementInterface" params={[{"type":"array","name":"attributes","default":null}]}>
Sets default attributes for the element
</ApiItem>
<ApiItem href="#formselementabstractelement-setdefault" visibility="public" name="setDefault" returnType="ElementInterface" params={[{"type":"mixed","name":"value","default":null}]}>
Sets a default value in case the form does not use an entity
</ApiItem>
<ApiItem href="#formselementabstractelement-setfilters" visibility="public" name="setFilters" returnType="ElementInterface" params={[{"type":"mixed","name":"filters","default":null}]}>
Sets the element filters
</ApiItem>
<ApiItem href="#formselementabstractelement-setform" visibility="public" name="setForm" returnType="ElementInterface" params={[{"type":"Form","name":"form","default":null}]}>
Sets the parent form to the element
</ApiItem>
<ApiItem href="#formselementabstractelement-setlabel" visibility="public" name="setLabel" returnType="ElementInterface" params={[{"type":"string","name":"label","default":null}]}>
Sets the element label
</ApiItem>
<ApiItem href="#formselementabstractelement-setmessages" visibility="public" name="setMessages" returnType="ElementInterface" params={[{"type":"Messages","name":"messages","default":null}]}>
Sets the validation messages related to the element
</ApiItem>
<ApiItem href="#formselementabstractelement-setname" visibility="public" name="setName" returnType="ElementInterface" params={[{"type":"string","name":"name","default":null}]}>
Sets the element name
</ApiItem>
<ApiItem href="#formselementabstractelement-settagfactory" visibility="public" name="setTagFactory" returnType="static" params={[{"type":"TagFactory","name":"tagFactory","default":null}]}>
Sets the TagFactory
</ApiItem>
<ApiItem href="#formselementabstractelement-setuseroption" visibility="public" name="setUserOption" returnType="ElementInterface" params={[{"type":"string","name":"option","default":null},{"type":"mixed","name":"value","default":null}]}>
Sets an option for the element
</ApiItem>
<ApiItem href="#formselementabstractelement-setuseroptions" visibility="public" name="setUserOptions" returnType="ElementInterface" params={[{"type":"array","name":"options","default":null}]}>
Sets options for the element
</ApiItem>
<ApiItem href="#formselementabstractelement-getlocaltagfactory" visibility="protected" name="getLocalTagFactory" returnType="TagFactory" params={[]}>
Returns the tagFactory; throws exception if not present
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="attributes" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="filters" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="form" type="Form|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="label" type="string|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="messages" type="Messages" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputText&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="name" type="string" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="tagFactory" type="TagFactory|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="validators" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="value" type="mixed|null" default="null">
</ApiItem>

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
public function getFilters();
```

Returns the element filters

<h4 id="formselementabstractelement-getform"><code>getForm()</code></h4>

```php
public function getForm(): Form;
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
public function getValidators(): ValidatorInterface[];
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
public function setFilters( mixed $filters ): ElementInterface;
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

<ApiItem href="#formselementcheck-getuncheckedvalue" visibility="public" name="getUncheckedValue" returnType="mixed" params={[]}>
Returns the value to bind when the checkbox is absent from submitted
</ApiItem>
<ApiItem href="#formselementcheck-hasuncheckedvalue" visibility="public" name="hasUncheckedValue" returnType="bool" params={[]}>
Whether an "unchecked value" has been explicitly registered.
</ApiItem>
<ApiItem href="#formselementcheck-setuncheckedvalue" visibility="public" name="setUncheckedValue" returnType="static" params={[{"type":"mixed","name":"value","default":null}]}>
Registers a value to bind when the checkbox is absent from submitted
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputCheckbox&quot;">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="uncheckedValue" type="mixed" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="uncheckedValueSet" type="bool" default="false">
</ApiItem>

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

`Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\TagFactory`

### Method Summary

<ApiItem href="#formselementcheckgroup-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"options","default":"[]"},{"type":"array","name":"attributes","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#formselementcheckgroup-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
Returns the group options
</ApiItem>
<ApiItem href="#formselementcheckgroup-render" visibility="public" name="render" returnType="string" params={[{"type":"array","name":"attributes","default":"[]"}]}>
Renders the checkbox group returning HTML
</ApiItem>
<ApiItem href="#formselementcheckgroup-setoptions" visibility="public" name="setOptions" returnType="ElementInterface" params={[{"type":"array","name":"options","default":null}]}>
Sets the group options
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="optionsValues" type="array" default="[]">
</ApiItem>

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

<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputDate&quot;">
</ApiItem>

## Forms\Element\ElementInterface

Interface

Interface for Phalcon\Forms\Element classes

- **`Phalcon\Forms\Element\ElementInterface`**

`Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Forms\Form` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages`

### Method Summary

<ApiItem href="#formselementelementinterface-addfilter" visibility="public" name="addFilter" returnType="ElementInterface" params={[{"type":"string","name":"filter","default":null}]}>
Adds a filter to current list of filters
</ApiItem>
<ApiItem href="#formselementelementinterface-addvalidator" visibility="public" name="addValidator" returnType="ElementInterface" params={[{"type":"ValidatorInterface","name":"validator","default":null}]}>
Adds a validator to the element
</ApiItem>
<ApiItem href="#formselementelementinterface-addvalidators" visibility="public" name="addValidators" returnType="ElementInterface" params={[{"type":"array","name":"validators","default":null},{"type":"bool","name":"merge","default":"true"}]}>
Adds a group of validators
</ApiItem>
<ApiItem href="#formselementelementinterface-appendmessage" visibility="public" name="appendMessage" returnType="ElementInterface" params={[{"type":"MessageInterface","name":"message","default":null}]}>
Appends a message to the internal message list
</ApiItem>
<ApiItem href="#formselementelementinterface-clear" visibility="public" name="clear" returnType="ElementInterface" params={[]}>
Clears every element in the form to its default value
</ApiItem>
<ApiItem href="#formselementelementinterface-getattribute" visibility="public" name="getAttribute" returnType="mixed" params={[{"type":"string","name":"attribute","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns the value of an attribute if present
</ApiItem>
<ApiItem href="#formselementelementinterface-getattributes" visibility="public" name="getAttributes" returnType="array" params={[]}>
Returns the default attributes for the element
</ApiItem>
<ApiItem href="#formselementelementinterface-getdefault" visibility="public" name="getDefault" returnType="mixed" params={[]}>
Returns the default value assigned to the element
</ApiItem>
<ApiItem href="#formselementelementinterface-getfilters" visibility="public" name="getFilters" returnType="" params={[]}>
Returns the element's filters
</ApiItem>
<ApiItem href="#formselementelementinterface-getform" visibility="public" name="getForm" returnType="Form" params={[]}>
Returns the parent form to the element
</ApiItem>
<ApiItem href="#formselementelementinterface-getlabel" visibility="public" name="getLabel" returnType="string|null" params={[]}>
Returns the element's label
</ApiItem>
<ApiItem href="#formselementelementinterface-getmessages" visibility="public" name="getMessages" returnType="Messages" params={[]}>
Returns the messages that belongs to the element
</ApiItem>
<ApiItem href="#formselementelementinterface-getname" visibility="public" name="getName" returnType="string" params={[]}>
Returns the element's name
</ApiItem>
<ApiItem href="#formselementelementinterface-getuseroption" visibility="public" name="getUserOption" returnType="mixed" params={[{"type":"string","name":"option","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns the value of an option if present
</ApiItem>
<ApiItem href="#formselementelementinterface-getuseroptions" visibility="public" name="getUserOptions" returnType="array" params={[]}>
Returns the options for the element
</ApiItem>
<ApiItem href="#formselementelementinterface-getvalidators" visibility="public" name="getValidators" returnType="ValidatorInterface[]" params={[]}>
Returns the validators registered for the element
</ApiItem>
<ApiItem href="#formselementelementinterface-getvalue" visibility="public" name="getValue" returnType="mixed" params={[]}>
Returns the element's value
</ApiItem>
<ApiItem href="#formselementelementinterface-hasmessages" visibility="public" name="hasMessages" returnType="bool" params={[]}>
Checks whether there are messages attached to the element
</ApiItem>
<ApiItem href="#formselementelementinterface-label" visibility="public" name="label" returnType="string" params={[]}>
Generate the HTML to label the element
</ApiItem>
<ApiItem href="#formselementelementinterface-render" visibility="public" name="render" returnType="string" params={[{"type":"array","name":"attributes","default":"[]"}]}>
Renders the element widget
</ApiItem>
<ApiItem href="#formselementelementinterface-setattribute" visibility="public" name="setAttribute" returnType="ElementInterface" params={[{"type":"string","name":"attribute","default":null},{"type":"mixed","name":"value","default":null}]}>
Sets a default attribute for the element
</ApiItem>
<ApiItem href="#formselementelementinterface-setattributes" visibility="public" name="setAttributes" returnType="ElementInterface" params={[{"type":"array","name":"attributes","default":null}]}>
Sets default attributes for the element
</ApiItem>
<ApiItem href="#formselementelementinterface-setdefault" visibility="public" name="setDefault" returnType="ElementInterface" params={[{"type":"mixed","name":"value","default":null}]}>
Sets a default value in case the form does not use an entity
</ApiItem>
<ApiItem href="#formselementelementinterface-setfilters" visibility="public" name="setFilters" returnType="ElementInterface" params={[{"type":"mixed","name":"filters","default":null}]}>
Sets the element's filters
</ApiItem>
<ApiItem href="#formselementelementinterface-setform" visibility="public" name="setForm" returnType="ElementInterface" params={[{"type":"Form","name":"form","default":null}]}>
Sets the parent form to the element
</ApiItem>
<ApiItem href="#formselementelementinterface-setlabel" visibility="public" name="setLabel" returnType="ElementInterface" params={[{"type":"string","name":"label","default":null}]}>
Sets the element label
</ApiItem>
<ApiItem href="#formselementelementinterface-setmessages" visibility="public" name="setMessages" returnType="ElementInterface" params={[{"type":"Messages","name":"messages","default":null}]}>
Sets the validation messages related to the element
</ApiItem>
<ApiItem href="#formselementelementinterface-setname" visibility="public" name="setName" returnType="ElementInterface" params={[{"type":"string","name":"name","default":null}]}>
Sets the element's name
</ApiItem>
<ApiItem href="#formselementelementinterface-setuseroption" visibility="public" name="setUserOption" returnType="ElementInterface" params={[{"type":"string","name":"option","default":null},{"type":"mixed","name":"value","default":null}]}>
Sets an option for the element
</ApiItem>
<ApiItem href="#formselementelementinterface-setuseroptions" visibility="public" name="setUserOptions" returnType="ElementInterface" params={[{"type":"array","name":"options","default":null}]}>
Sets options for the element
</ApiItem>

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
public function getFilters();
```

Returns the element's filters

<h4 id="formselementelementinterface-getform"><code>getForm()</code></h4>

```php
public function getForm(): Form;
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
public function getValidators(): ValidatorInterface[];
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
public function setFilters( mixed $filters ): ElementInterface;
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

<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputEmail&quot;">
</ApiItem>

## Forms\Element\File

Class

Component INPUT[type=file] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\File`**

### Properties

<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputFile&quot;">
</ApiItem>

## Forms\Element\Hidden

Class

Component INPUT[type=hidden] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Hidden`**

### Properties

<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputHidden&quot;">
</ApiItem>

## Forms\Element\Numeric

Class

Component INPUT[type=number] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Numeric`**

### Properties

<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputNumeric&quot;">
</ApiItem>

## Forms\Element\Password

Class

Component INPUT[type=password] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Password`**

### Properties

<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputPassword&quot;">
</ApiItem>

## Forms\Element\Radio

Class

Component INPUT[type=radio] for forms

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Radio`**

### Properties

<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputRadio&quot;">
</ApiItem>

## Forms\Element\RadioGroup

Class

Component for a group of INPUT[type=radio] elements.

Options are passed as an associative array:
  ['value' => 'Label']
or with per-item attributes:
  ['value' => ['label' => 'Label', 'disabled' => true]]

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\RadioGroup`**

`Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Html\Helper\Input\RadioGroup` · `Phalcon\Html\TagFactory`

### Method Summary

<ApiItem href="#formselementradiogroup-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"options","default":"[]"},{"type":"array","name":"attributes","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#formselementradiogroup-getoptions" visibility="public" name="getOptions" returnType="array" params={[]}>
Returns the group options
</ApiItem>
<ApiItem href="#formselementradiogroup-render" visibility="public" name="render" returnType="string" params={[{"type":"array","name":"attributes","default":"[]"}]}>
Renders the radio group returning HTML
</ApiItem>
<ApiItem href="#formselementradiogroup-setoptions" visibility="public" name="setOptions" returnType="ElementInterface" params={[{"type":"array","name":"options","default":null}]}>
Sets the group options
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="optionsValues" type="array" default="[]">
</ApiItem>

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

<ApiItem href="#formselementselect-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"options","default":"null"},{"type":"array","name":"attributes","default":"[]"}]}>
Constructor
</ApiItem>
<ApiItem href="#formselementselect-addoption" visibility="public" name="addOption" returnType="ElementInterface" params={[{"type":"mixed","name":"option","default":null}]}>
Adds an option to the current options
</ApiItem>
<ApiItem href="#formselementselect-getoptions" visibility="public" name="getOptions" returnType="" params={[]}>
Returns the choices' options
</ApiItem>
<ApiItem href="#formselementselect-render" visibility="public" name="render" returnType="string" params={[{"type":"array","name":"attributes","default":"[]"}]}>
Renders the element widget returning HTML
</ApiItem>
<ApiItem href="#formselementselect-setoptions" visibility="public" name="setOptions" returnType="ElementInterface" params={[{"type":"mixed","name":"options","default":null}]}>
Set the choice's options
</ApiItem>
<ApiItem href="#formselementselect-prepareattributes" visibility="protected" name="prepareAttributes" returnType="array" params={[{"type":"array","name":"attributes","default":"[]"}]}>
Returns an array of prepared attributes for Phalcon\Html\TagFactory
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="optionsValues" type="array|object|null" default="null">
</ApiItem>

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
public function getOptions();
```

Returns the choices' options

<h4 id="formselementselect-render"><code>render()</code></h4>

```php
public function render( array $attributes = [] ): string;
```

Renders the element widget returning HTML

<h4 id="formselementselect-setoptions"><code>setOptions()</code></h4>

```php
public function setOptions( mixed $options ): ElementInterface;
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

<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputSubmit&quot;">
</ApiItem>

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

<ApiItem kind="property" visibility="protected" name="method" type="string" default="&quot;inputTextarea&quot;">
</ApiItem>

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

<ApiItem href="#formsexception-tagfactorynotfound" visibility="public" name="tagFactoryNotFound" returnType="self" params={[]}>
</ApiItem>
<ApiItem href="#formsexception-usingparameterrequired" visibility="public" name="usingParameterRequired" returnType="self" params={[]}>
</ApiItem>

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

<ApiItem href="#formsexceptionselementnotinform-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsformelementnamerequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsformnotinlocator-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsformnotregistered-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"name","default":null}]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsinvalidentity-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsinvalidfiltertype-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsinvalidjsonschema-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"detail","default":null}]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsjsonschemanotarray-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsnoformelements-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsschemaentrymissingkey-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"index","default":null},{"type":"string","name":"key","default":null}]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsschemaentrynotarray-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"int","name":"index","default":null}]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsunknownformelementtype-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"type","default":null}]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsyamlextensionrequired-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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

<ApiItem href="#formsexceptionsyamlschemanotarray-__construct" visibility="public" name="__construct" returnType="" params={[]}>
</ApiItem>

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
- [`Phalcon\Di\Injectable`](/5.20/api/phalcon_di/#diinjectable)
- **`Phalcon\Forms\Form`** - implements `\Countable`, `\Iterator`, [`Phalcon\Html\Attributes\AttributesInterface`](/5.20/api/phalcon_html/#htmlattributesattributesinterface)

`Countable` · `Iterator` · `Phalcon\Contracts\Forms\FormsTypes` · `Phalcon\Contracts\Forms\Schema` · `Phalcon\Contracts\Html\HtmlTypes` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Filter\FilterInterface` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\ValidationInterface` · `Phalcon\Forms\Element\Check` · `Phalcon\Forms\Element\ElementInterface` · `Phalcon\Forms\Exceptions\ElementNotInForm` · `Phalcon\Forms\Exceptions\InvalidEntity` · `Phalcon\Forms\Exceptions\NoFormElements` · `Phalcon\Html\Attributes` · `Phalcon\Html\Attributes\AttributesInterface` · `Phalcon\Html\TagFactory` · `Phalcon\Messages\Messages` · `Phalcon\Support\Settings` · `Phalcon\Tag`

### Method Summary

<ApiItem href="#formsform-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"mixed","name":"entity","default":"null"},{"type":"array","name":"userOptions","default":"[]"}]}>
Phalcon\Forms\Form constructor
</ApiItem>
<ApiItem href="#formsform-add" visibility="public" name="add" returnType="static" params={[{"type":"ElementInterface","name":"element","default":null},{"type":"string|null","name":"position","default":"null"},{"type":"bool|null","name":"type","default":"null"}]}>
Adds an element to the form
</ApiItem>
<ApiItem href="#formsform-bind" visibility="public" name="bind" returnType="static" params={[{"type":"array","name":"data","default":null},{"type":"mixed","name":"entity","default":"null"},{"type":"array","name":"whitelist","default":"[]"}]}>
Binds data to the entity
</ApiItem>
<ApiItem href="#formsform-clear" visibility="public" name="clear" returnType="static" params={[{"type":"mixed","name":"fields","default":"null"}]}>
Clears every element in the form to its default value
</ApiItem>
<ApiItem href="#formsform-count" visibility="public" name="count" returnType="int" params={[]}>
Returns the number of elements in the form
</ApiItem>
<ApiItem href="#formsform-current" visibility="public" name="current" returnType="mixed" params={[]}>
Returns the current element in the iterator
</ApiItem>
<ApiItem href="#formsform-get" visibility="public" name="get" returnType="ElementInterface" params={[{"type":"string","name":"name","default":null}]}>
Returns an element added to the form by its name
</ApiItem>
<ApiItem href="#formsform-getaction" visibility="public" name="getAction" returnType="string" params={[]}>
Returns the form's action
</ApiItem>
<ApiItem href="#formsform-getattributes" visibility="public" name="getAttributes" returnType="Attributes" params={[]}>
Get Form attributes collection
</ApiItem>
<ApiItem href="#formsform-getelements" visibility="public" name="getElements" returnType="ElementInterface[]" params={[]}>
Returns the form elements added to the form
</ApiItem>
<ApiItem href="#formsform-getentity" visibility="public" name="getEntity" returnType="" params={[]}>
Returns the entity related to the model
</ApiItem>
<ApiItem href="#formsform-getfilteredvalue" visibility="public" name="getFilteredValue" returnType="mixed|null" params={[{"type":"string","name":"name","default":null}]}>
Gets a value from the internal filtered data or calls getValue(name)
</ApiItem>
<ApiItem href="#formsform-getlabel" visibility="public" name="getLabel" returnType="string" params={[{"type":"string","name":"name","default":null}]}>
Returns a label for an element
</ApiItem>
<ApiItem href="#formsform-getmessages" visibility="public" name="getMessages" returnType="Messages" params={[]}>
Returns the messages generated in the validation.
</ApiItem>
<ApiItem href="#formsform-getmessagesfor" visibility="public" name="getMessagesFor" returnType="Messages" params={[{"type":"string","name":"name","default":null}]}>
Returns the messages generated for a specific element
</ApiItem>
<ApiItem href="#formsform-gettagfactory" visibility="public" name="getTagFactory" returnType="TagFactory|null" params={[]}>
Returns the tagFactory object
</ApiItem>
<ApiItem href="#formsform-getuseroption" visibility="public" name="getUserOption" returnType="mixed" params={[{"type":"string","name":"option","default":null},{"type":"mixed","name":"defaultValue","default":"null"}]}>
Returns the value of an option if present
</ApiItem>
<ApiItem href="#formsform-getuseroptions" visibility="public" name="getUserOptions" returnType="array" params={[]}>
Returns the options for the element
</ApiItem>
<ApiItem href="#formsform-getvalidation" visibility="public" name="getValidation" returnType="ValidationInterface|null" params={[]}>
return ValidationInterface|null
</ApiItem>
<ApiItem href="#formsform-getvalue" visibility="public" name="getValue" returnType="mixed|null" params={[{"type":"string","name":"name","default":null}]}>
Gets a value from the internal related entity or from the default value
</ApiItem>
<ApiItem href="#formsform-getwhitelist" visibility="public" name="getWhitelist" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#formsform-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check if the form contains an element
</ApiItem>
<ApiItem href="#formsform-hasmessagesfor" visibility="public" name="hasMessagesFor" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Check if messages were generated for a specific element
</ApiItem>
<ApiItem href="#formsform-isvalid" visibility="public" name="isValid" returnType="bool" params={[{"type":"mixed","name":"data","default":"null"},{"type":"mixed","name":"entity","default":"null"},{"type":"array","name":"whitelist","default":"[]"}]}>
Validates the form
</ApiItem>
<ApiItem href="#formsform-key" visibility="public" name="key" returnType="int" params={[]}>
Returns the current position/key in the iterator
</ApiItem>
<ApiItem href="#formsform-label" visibility="public" name="label" returnType="string" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"attributes","default":"[]"}]}>
Generate the label of an element added to the form including HTML
</ApiItem>
<ApiItem href="#formsform-load" visibility="public" name="load" returnType="static" params={[{"type":"Schema","name":"schema","default":null},{"type":"FormsLocator","name":"locator","default":null}]}>
Loads elements into the form from a Schema source.
</ApiItem>
<ApiItem href="#formsform-next" visibility="public" name="next" returnType="void" params={[]}>
Moves the internal iteration pointer to the next position
</ApiItem>
<ApiItem href="#formsform-remove" visibility="public" name="remove" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Removes an element from the form
</ApiItem>
<ApiItem href="#formsform-render" visibility="public" name="render" returnType="string" params={[{"type":"string","name":"name","default":null},{"type":"array","name":"attributes","default":"[]"}]}>
Renders a specific item in the form
</ApiItem>
<ApiItem href="#formsform-rewind" visibility="public" name="rewind" returnType="void" params={[]}>
Rewinds the internal iterator
</ApiItem>
<ApiItem href="#formsform-setaction" visibility="public" name="setAction" returnType="static" params={[{"type":"string","name":"action","default":null}]}>
Sets the form's action
</ApiItem>
<ApiItem href="#formsform-setattributes" visibility="public" name="setAttributes" returnType="static" params={[{"type":"Attributes","name":"attributes","default":null}]}>
Set form attributes collection
</ApiItem>
<ApiItem href="#formsform-setentity" visibility="public" name="setEntity" returnType="static" params={[{"type":"mixed","name":"entity","default":null}]}>
Sets the entity related to the model
</ApiItem>
<ApiItem href="#formsform-settagfactory" visibility="public" name="setTagFactory" returnType="static" params={[{"type":"TagFactory","name":"tagFactory","default":null}]}>
Sets the tagFactory for the form
</ApiItem>
<ApiItem href="#formsform-setuseroption" visibility="public" name="setUserOption" returnType="static" params={[{"type":"string","name":"option","default":null},{"type":"mixed","name":"value","default":null}]}>
Sets an option for the form
</ApiItem>
<ApiItem href="#formsform-setuseroptions" visibility="public" name="setUserOptions" returnType="static" params={[{"type":"array","name":"options","default":null}]}>
Sets options for the element
</ApiItem>
<ApiItem href="#formsform-setvalidation" visibility="public" name="setValidation" returnType="static" params={[{"type":"ValidationInterface","name":"validation","default":null}]}>
Sets the default validation
</ApiItem>
<ApiItem href="#formsform-setwhitelist" visibility="public" name="setWhitelist" returnType="static" params={[{"type":"array","name":"whitelist","default":null}]}>
Sets the default whitelist
</ApiItem>
<ApiItem href="#formsform-valid" visibility="public" name="valid" returnType="bool" params={[]}>
Check if the current element in the iterator is valid
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="attributes" type="AttributesInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="data" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="elements" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="elementsIndexed" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="entity" type="object|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="filteredData" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="messages" type="Messages" default="">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="options" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="position" type="int" default="0">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="tagFactory" type="TagFactory|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="validation" type="ValidationInterface|null" default="null">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="whitelist" type="array" default="[]">
</ApiItem>

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
mixed $entity = null,
array $whitelist = []
): static;
```

Binds data to the entity

<h4 id="formsform-clear"><code>clear()</code></h4>

```php
public function clear( mixed $fields = null ): static;
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
public function getElements(): ElementInterface[];
```

Returns the form elements added to the form

<h4 id="formsform-getentity"><code>getEntity()</code></h4>

```php
public function getEntity();
```

Returns the entity related to the model

<h4 id="formsform-getfilteredvalue"><code>getFilteredValue()</code></h4>

```php
public function getFilteredValue( string $name ): mixed|null;
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
public function getValue( string $name ): mixed|null;
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

<ApiItem href="#formsformslocator-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"definitions","default":"[]"}]}>
</ApiItem>
<ApiItem href="#formsformslocator-get" visibility="public" name="get" returnType="Form" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"entity","default":"null"}]}>
Returns the named form.
</ApiItem>
<ApiItem href="#formsformslocator-getelement" visibility="public" name="getElement" returnType="" params={[{"type":"string","name":"type","default":null}]}>
Returns the factory callable for the given element type.
</ApiItem>
<ApiItem href="#formsformslocator-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks whether a named form factory is registered.
</ApiItem>
<ApiItem href="#formsformslocator-haselement" visibility="public" name="hasElement" returnType="bool" params={[{"type":"string","name":"type","default":null}]}>
Checks whether an element type is registered.
</ApiItem>
<ApiItem href="#formsformslocator-set" visibility="public" name="set" returnType="void" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"factory","default":null}]}>
Registers or replaces a named form factory.
</ApiItem>
<ApiItem href="#formsformslocator-setelement" visibility="public" name="setElement" returnType="void" params={[{"type":"string","name":"type","default":null},{"type":"mixed","name":"factory","default":null}]}>
Registers or replaces an element type factory.
</ApiItem>
<ApiItem href="#formsformslocator-getdefaultservices" visibility="protected" name="getDefaultServices" returnType="array" params={[]}>
Returns the built-in element type factories.
</ApiItem>

### Methods

<h4 id="formsformslocator-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $definitions = [] );
```

<h4 id="formsformslocator-get"><code>get()</code></h4>

```php
public function get(
string $name,
mixed $entity = null
): Form;
```

Returns the named form.

Without an entity the result is lazily created and cached.
With an entity a fresh form is always produced.

<h4 id="formsformslocator-getelement"><code>getElement()</code></h4>

```php
public function getElement( string $type );
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
mixed $factory
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
mixed $factory
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

- **`Phalcon\Forms\Loader\ArrayLoader`** - implements [`Phalcon\Contracts\Forms\Schema`](/5.20/api/phalcon_contracts/#contractsformsschema)

`Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\SchemaEntryMissingKey` · `Phalcon\Forms\Exceptions\SchemaEntryNotArray`

### Method Summary

<ApiItem href="#formsloaderarrayloader-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"array","name":"definitions","default":null}]}>
</ApiItem>
<ApiItem href="#formsloaderarrayloader-load" visibility="public" name="load" returnType="array" params={[]}>
</ApiItem>
<ApiItem href="#formsloaderarrayloader-validatedefinition" visibility="protected" name="validateDefinition" returnType="void" params={[{"type":"mixed","name":"definition","default":null},{"type":"int","name":"index","default":null}]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="definitions" type="array" default="">
</ApiItem>

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

- **`Phalcon\Forms\Loader\JsonLoader`** - implements [`Phalcon\Contracts\Forms\Schema`](/5.20/api/phalcon_contracts/#contractsformsschema)

`InvalidArgumentException` · `Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\InvalidJsonSchema` · `Phalcon\Forms\Exceptions\JsonSchemaNotArray` · `Phalcon\Support\Helper\Json\Decode` · `Phalcon\Traits\Php\FileTrait`

### Method Summary

<ApiItem href="#formsloaderjsonloader-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"source","default":null}]}>
</ApiItem>
<ApiItem href="#formsloaderjsonloader-load" visibility="public" name="load" returnType="array" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="source" type="string" default="">
</ApiItem>

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

- **`Phalcon\Forms\Loader\YamlLoader`** - implements [`Phalcon\Contracts\Forms\Schema`](/5.20/api/phalcon_contracts/#contractsformsschema)

`Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\YamlExtensionRequired` · `Phalcon\Forms\Exceptions\YamlSchemaNotArray` · `Phalcon\Traits\Php\InfoTrait`

### Method Summary

<ApiItem href="#formsloaderyamlloader-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"string","name":"source","default":null}]}>
</ApiItem>
<ApiItem href="#formsloaderyamlloader-load" visibility="public" name="load" returnType="array" params={[]}>
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="source" type="string" default="">
</ApiItem>

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

`Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exceptions\FormNotRegistered` · `Phalcon\Forms\Form`

### Method Summary

<ApiItem href="#formsmanager-__construct" visibility="public" name="__construct" returnType="" params={[{"type":"FormsLocator|null","name":"locator","default":"null"}]}>
Manager constructor.
</ApiItem>
<ApiItem href="#formsmanager-create" visibility="public" name="create" returnType="Form" params={[{"type":"string","name":"name","default":null},{"type":"mixed","name":"entity","default":"null"}]}>
Creates a form registering it in the forms manager
</ApiItem>
<ApiItem href="#formsmanager-get" visibility="public" name="get" returnType="Form" params={[{"type":"string","name":"name","default":null}]}>
Returns a form by its name
</ApiItem>
<ApiItem href="#formsmanager-getlocator" visibility="public" name="getLocator" returnType="FormsLocator" params={[]}>
Returns the FormsLocator instance.
</ApiItem>
<ApiItem href="#formsmanager-has" visibility="public" name="has" returnType="bool" params={[{"type":"string","name":"name","default":null}]}>
Checks if a form is registered in the forms manager
</ApiItem>
<ApiItem href="#formsmanager-loadform" visibility="public" name="loadForm" returnType="Form" params={[{"type":"string","name":"name","default":null},{"type":"Schema","name":"schema","default":null},{"type":"mixed","name":"entity","default":"null"}]}>
Creates a form from a Schema source, registers it in the manager,
</ApiItem>
<ApiItem href="#formsmanager-set" visibility="public" name="set" returnType="static" params={[{"type":"string","name":"name","default":null},{"type":"Form","name":"form","default":null}]}>
Registers a form in the Forms Manager
</ApiItem>

### Properties

<ApiItem kind="property" visibility="protected" name="forms" type="array" default="[]">
</ApiItem>
<ApiItem kind="property" visibility="protected" name="locator" type="FormsLocator" default="">
</ApiItem>

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
mixed $entity = null
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
mixed $entity = null
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

Source: https://docs.phalcon.io/5.20/api/phalcon_forms/index.mdx
