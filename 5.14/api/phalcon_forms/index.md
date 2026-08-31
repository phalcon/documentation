---
title: "Phalcon Forms"
version: "5.14"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Forms

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Forms\Element\AbstractElement

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/AbstractElement.zep">Source on GitHub</a>

This is a base class for form elements

<div class="api-tree">

- **`Phalcon\Forms\Element\AbstractElement`** — implements [`Phalcon\Forms\Element\ElementInterface`](#formselementelementinterface)
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

</div>

__Uses__ `InvalidArgumentException` · `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\FormElementNameRequired` · `Phalcon\Forms\Exceptions\InvalidFilterType` · `Phalcon\Forms\Form` · `Phalcon\Html\TagFactory` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formselementabstractelement-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#formselementabstractelement-__tostring">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">__toString</span>()</code>
<span class="desc">Magic method __toString renders the widget without attributes</span>
</a>
<a class="api-item" href="#formselementabstractelement-addfilter">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">addFilter</span>( <span class="st">string</span> <span class="sv">$filter</span> )</code>
<span class="desc">Adds a filter to current list of filters</span>
</a>
<a class="api-item" href="#formselementabstractelement-addvalidator">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">addValidator</span>( <span class="st">ValidatorInterface</span> <span class="sv">$validator</span> )</code>
<span class="desc">Adds a validator to the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-addvalidators">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">addValidators</span>(<span class="prm"><span class="st">array</span> <span class="sv">$validators</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$merge</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Adds a group of validators</span>
</a>
<a class="api-item" href="#formselementabstractelement-appendmessage">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">appendMessage</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">Appends a message to the internal message list</span>
</a>
<a class="api-item" href="#formselementabstractelement-clear">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Clears element to its default value</span>
</a>
<a class="api-item" href="#formselementabstractelement-getattribute">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$attribute</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns the value of an attribute if present</span>
</a>
<a class="api-item" href="#formselementabstractelement-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Returns the default attributes for the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-getdefault">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getDefault</span>()</code>
<span class="desc">Returns the default value assigned to the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-getfilters">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getFilters</span>()</code>
<span class="desc">Returns the element filters</span>
</a>
<a class="api-item" href="#formselementabstractelement-getform">
<code class="vis vis-public">public</code>
<code class="ret">Form</code>
<code class="sig"><span class="sf">getForm</span>()</code>
<span class="desc">Returns the parent form to the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-getlabel">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getLabel</span>()</code>
<span class="desc">Returns the element label</span>
</a>
<a class="api-item" href="#formselementabstractelement-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">Messages</code>
<code class="sig"><span class="sf">getMessages</span>()</code>
<span class="desc">Returns the messages that belongs to the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the element name</span>
</a>
<a class="api-item" href="#formselementabstractelement-gettagfactory">
<code class="vis vis-public">public</code>
<code class="ret">TagFactory|null</code>
<code class="sig"><span class="sf">getTagFactory</span>()</code>
<span class="desc">Returns the tagFactory; throws exception if not present</span>
</a>
<a class="api-item" href="#formselementabstractelement-getuseroption">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getUserOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$option</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns the value of an option if present</span>
</a>
<a class="api-item" href="#formselementabstractelement-getuseroptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getUserOptions</span>()</code>
<span class="desc">Returns the options for the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-getvalidators">
<code class="vis vis-public">public</code>
<code class="ret">ValidatorInterface[]</code>
<code class="sig"><span class="sf">getValidators</span>()</code>
<span class="desc">Returns the validators registered for the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-getvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getValue</span>()</code>
<span class="desc">Returns the element&#039;s value</span>
</a>
<a class="api-item" href="#formselementabstractelement-hasmessages">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasMessages</span>()</code>
<span class="desc">Checks whether there are messages attached to the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-label">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">label</span>( <span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span> )</code>
<span class="desc">Generate the HTML to label the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>( <span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span> )</code>
<span class="desc">Renders the element widget returning HTML</span>
</a>
<a class="api-item" href="#formselementabstractelement-setattribute">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$attribute</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a default attribute for the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-setattributes">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setAttributes</span>( <span class="st">array</span> <span class="sv">$attributes</span> )</code>
<span class="desc">Sets default attributes for the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-setdefault">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setDefault</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Sets a default value in case the form does not use an entity</span>
</a>
<a class="api-item" href="#formselementabstractelement-setfilters">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setFilters</span>( <span class="st">mixed</span> <span class="sv">$filters</span> )</code>
<span class="desc">Sets the element filters</span>
</a>
<a class="api-item" href="#formselementabstractelement-setform">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setForm</span>( <span class="st">Form</span> <span class="sv">$form</span> )</code>
<span class="desc">Sets the parent form to the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-setlabel">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setLabel</span>( <span class="st">string</span> <span class="sv">$label</span> )</code>
<span class="desc">Sets the element label</span>
</a>
<a class="api-item" href="#formselementabstractelement-setmessages">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setMessages</span>( <span class="st">Messages</span> <span class="sv">$messages</span> )</code>
<span class="desc">Sets the validation messages related to the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-setname">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setName</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Sets the element name</span>
</a>
<a class="api-item" href="#formselementabstractelement-settagfactory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setTagFactory</span>( <span class="st">TagFactory</span> <span class="sv">$tagFactory</span> )</code>
<span class="desc">Sets the TagFactory</span>
</a>
<a class="api-item" href="#formselementabstractelement-setuseroption">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setUserOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$option</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets an option for the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-setuseroptions">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setUserOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Sets options for the element</span>
</a>
<a class="api-item" href="#formselementabstractelement-getlocaltagfactory">
<code class="vis vis-protected">protected</code>
<code class="ret">TagFactory</code>
<code class="sig"><span class="sf">getLocalTagFactory</span>()</code>
<span class="desc">Returns the tagFactory; throws exception if not present</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$attributes</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$filters</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Form|null</code>
<code class="sig"><span class="sv">$form</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$label</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Messages</code>
<code class="sig"><span class="sv">$messages</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputText&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$name</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">TagFactory|null</code>
<code class="sig"><span class="sv">$tagFactory</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$validators</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sv">$value</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 34</div>

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

<div class="api-group">Protected · 1</div>

<h4 id="formselementabstractelement-getlocaltagfactory"><code>getLocalTagFactory()</code></h4>

```php
protected function getLocalTagFactory(): TagFactory;
```

Returns the tagFactory; throws exception if not present

## Forms\Element\Check

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Check.zep">Source on GitHub</a>

Component INPUT[type=check] for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Check`**

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#formselementcheck-getuncheckedvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getUncheckedValue</span>()</code>
<span class="desc">Returns the value to bind when the checkbox is absent from submitted</span>
</a>
<a class="api-item" href="#formselementcheck-hasuncheckedvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasUncheckedValue</span>()</code>
<span class="desc">Whether an &quot;unchecked value&quot; has been explicitly registered.</span>
</a>
<a class="api-item" href="#formselementcheck-setuncheckedvalue">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setUncheckedValue</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Registers a value to bind when the checkbox is absent from submitted</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputCheckbox&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sv">$uncheckedValue</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$uncheckedValueSet</span><span class="sm"> = false</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 3</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/CheckGroup.zep">Source on GitHub</a>

Component for a group of INPUT[type=checkbox] elements.

The name is automatically suffixed with [] when not already present so that
PHP collects all checked values into an array on form submission.

Options are passed as an associative array:
  ['value' => 'Label']
or with per-item attributes:
  ['value' => ['label' => 'Label', 'disabled' => true]]

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\CheckGroup`**

</div>

__Uses__ `Phalcon\Html\TagFactory`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formselementcheckgroup-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#formselementcheckgroup-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
<span class="desc">Returns the group options</span>
</a>
<a class="api-item" href="#formselementcheckgroup-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>( <span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span> )</code>
<span class="desc">Renders the checkbox group returning HTML</span>
</a>
<a class="api-item" href="#formselementcheckgroup-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Sets the group options</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Date.zep">Source on GitHub</a>

Component INPUT[type=date] for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Date`**

</div>

__Uses__ `Phalcon\Tag`

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputDate&quot;</span></code>
</div>
</div>

## Forms\Element\ElementInterface

<span class="badge badge--interface">Interface</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/ElementInterface.zep">Source on GitHub</a>

Interface for Phalcon\Forms\Element classes

<div class="api-tree">

- **`Phalcon\Forms\Element\ElementInterface`**

</div>

__Uses__ `Phalcon\Filter\Validation\ValidatorInterface` · `Phalcon\Forms\Form` · `Phalcon\Messages\MessageInterface` · `Phalcon\Messages\Messages`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formselementelementinterface-addfilter">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">addFilter</span>( <span class="st">string</span> <span class="sv">$filter</span> )</code>
<span class="desc">Adds a filter to current list of filters</span>
</a>
<a class="api-item" href="#formselementelementinterface-addvalidator">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">addValidator</span>( <span class="st">ValidatorInterface</span> <span class="sv">$validator</span> )</code>
<span class="desc">Adds a validator to the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-addvalidators">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">addValidators</span>(<span class="prm"><span class="st">array</span> <span class="sv">$validators</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$merge</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Adds a group of validators</span>
</a>
<a class="api-item" href="#formselementelementinterface-appendmessage">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">appendMessage</span>( <span class="st">MessageInterface</span> <span class="sv">$message</span> )</code>
<span class="desc">Appends a message to the internal message list</span>
</a>
<a class="api-item" href="#formselementelementinterface-clear">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">clear</span>()</code>
<span class="desc">Clears every element in the form to its default value</span>
</a>
<a class="api-item" href="#formselementelementinterface-getattribute">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$attribute</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns the value of an attribute if present</span>
</a>
<a class="api-item" href="#formselementelementinterface-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Returns the default attributes for the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-getdefault">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getDefault</span>()</code>
<span class="desc">Returns the default value assigned to the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-getfilters">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getFilters</span>()</code>
<span class="desc">Returns the element&#039;s filters</span>
</a>
<a class="api-item" href="#formselementelementinterface-getform">
<code class="vis vis-public">public</code>
<code class="ret">Form</code>
<code class="sig"><span class="sf">getForm</span>()</code>
<span class="desc">Returns the parent form to the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-getlabel">
<code class="vis vis-public">public</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sf">getLabel</span>()</code>
<span class="desc">Returns the element&#039;s label</span>
</a>
<a class="api-item" href="#formselementelementinterface-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">Messages</code>
<code class="sig"><span class="sf">getMessages</span>()</code>
<span class="desc">Returns the messages that belongs to the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-getname">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getName</span>()</code>
<span class="desc">Returns the element&#039;s name</span>
</a>
<a class="api-item" href="#formselementelementinterface-getuseroption">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getUserOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$option</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns the value of an option if present</span>
</a>
<a class="api-item" href="#formselementelementinterface-getuseroptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getUserOptions</span>()</code>
<span class="desc">Returns the options for the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-getvalidators">
<code class="vis vis-public">public</code>
<code class="ret">ValidatorInterface[]</code>
<code class="sig"><span class="sf">getValidators</span>()</code>
<span class="desc">Returns the validators registered for the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-getvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getValue</span>()</code>
<span class="desc">Returns the element&#039;s value</span>
</a>
<a class="api-item" href="#formselementelementinterface-hasmessages">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasMessages</span>()</code>
<span class="desc">Checks whether there are messages attached to the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-label">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">label</span>()</code>
<span class="desc">Generate the HTML to label the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>( <span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span> )</code>
<span class="desc">Renders the element widget</span>
</a>
<a class="api-item" href="#formselementelementinterface-setattribute">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setAttribute</span>(<span class="prm"><span class="st">string</span> <span class="sv">$attribute</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets a default attribute for the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-setattributes">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setAttributes</span>( <span class="st">array</span> <span class="sv">$attributes</span> )</code>
<span class="desc">Sets default attributes for the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-setdefault">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setDefault</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Sets a default value in case the form does not use an entity</span>
</a>
<a class="api-item" href="#formselementelementinterface-setfilters">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setFilters</span>( <span class="st">mixed</span> <span class="sv">$filters</span> )</code>
<span class="desc">Sets the element&#039;s filters</span>
</a>
<a class="api-item" href="#formselementelementinterface-setform">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setForm</span>( <span class="st">Form</span> <span class="sv">$form</span> )</code>
<span class="desc">Sets the parent form to the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-setlabel">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setLabel</span>( <span class="st">string</span> <span class="sv">$label</span> )</code>
<span class="desc">Sets the element label</span>
</a>
<a class="api-item" href="#formselementelementinterface-setmessages">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setMessages</span>( <span class="st">Messages</span> <span class="sv">$messages</span> )</code>
<span class="desc">Sets the validation messages related to the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-setname">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setName</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Sets the element&#039;s name</span>
</a>
<a class="api-item" href="#formselementelementinterface-setuseroption">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setUserOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$option</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets an option for the element</span>
</a>
<a class="api-item" href="#formselementelementinterface-setuseroptions">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setUserOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Sets options for the element</span>
</a>
</div>

### Methods

<div class="api-group">Public · 30</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Email.zep">Source on GitHub</a>

Component INPUT[type=email] for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Email`**

</div>

__Uses__ `Phalcon\Tag`

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputEmail&quot;</span></code>
</div>
</div>

## Forms\Element\File

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/File.zep">Source on GitHub</a>

Component INPUT[type=file] for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\File`**

</div>

__Uses__ `Phalcon\Tag`

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputFile&quot;</span></code>
</div>
</div>

## Forms\Element\Hidden

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Hidden.zep">Source on GitHub</a>

Component INPUT[type=hidden] for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Hidden`**

</div>

__Uses__ `Phalcon\Tag`

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputHidden&quot;</span></code>
</div>
</div>

## Forms\Element\Numeric

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Numeric.zep">Source on GitHub</a>

Component INPUT[type=number] for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Numeric`**

</div>

__Uses__ `Phalcon\Tag`

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputNumeric&quot;</span></code>
</div>
</div>

## Forms\Element\Password

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Password.zep">Source on GitHub</a>

Component INPUT[type=password] for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Password`**

</div>

__Uses__ `Phalcon\Tag`

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputPassword&quot;</span></code>
</div>
</div>

## Forms\Element\Radio

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Radio.zep">Source on GitHub</a>

Component INPUT[type=radio] for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Radio`**

</div>

__Uses__ `Phalcon\Tag`

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputRadio&quot;</span></code>
</div>
</div>

## Forms\Element\RadioGroup

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/RadioGroup.zep">Source on GitHub</a>

Component for a group of INPUT[type=radio] elements.

Options are passed as an associative array:
  ['value' => 'Label']
or with per-item attributes:
  ['value' => ['label' => 'Label', 'disabled' => true]]

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\RadioGroup`**

</div>

__Uses__ `Phalcon\Html\TagFactory`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formselementradiogroup-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$options</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#formselementradiogroup-getoptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
<span class="desc">Returns the group options</span>
</a>
<a class="api-item" href="#formselementradiogroup-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>( <span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span> )</code>
<span class="desc">Renders the radio group returning HTML</span>
</a>
<a class="api-item" href="#formselementradiogroup-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Sets the group options</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 4</div>

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Select.zep">Source on GitHub</a>

Component SELECT (choice) for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Select`**

</div>

__Uses__ `Phalcon\Tag\Select`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formselementselect-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$options</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Constructor</span>
</a>
<a class="api-item" href="#formselementselect-addoption">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">addOption</span>( <span class="st">mixed</span> <span class="sv">$option</span> )</code>
<span class="desc">Adds an option to the current options</span>
</a>
<a class="api-item" href="#formselementselect-getoptions">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getOptions</span>()</code>
<span class="desc">Returns the choices&#039; options</span>
</a>
<a class="api-item" href="#formselementselect-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>( <span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span> )</code>
<span class="desc">Renders the element widget returning HTML</span>
</a>
<a class="api-item" href="#formselementselect-setoptions">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">setOptions</span>( <span class="st">mixed</span> <span class="sv">$options</span> )</code>
<span class="desc">Set the choice&#039;s options</span>
</a>
<a class="api-item" href="#formselementselect-prepareattributes">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">prepareAttributes</span>( <span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span> )</code>
<span class="desc">Returns an array of prepared attributes for Phalcon\Html\TagFactory</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">object|array|null</code>
<code class="sig"><span class="sv">$optionsValues</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 5</div>

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

<div class="api-group">Protected · 1</div>

<h4 id="formselementselect-prepareattributes"><code>prepareAttributes()</code></h4>

```php
protected function prepareAttributes( array $attributes = [] ): array;
```

Returns an array of prepared attributes for Phalcon\Html\TagFactory
helpers according to the element parameters

## Forms\Element\Submit

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Submit.zep">Source on GitHub</a>

Component INPUT[type=submit] for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Submit`**

</div>

__Uses__ `Phalcon\Tag`

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputSubmit&quot;</span></code>
</div>
</div>

## Forms\Element\Text

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/Text.zep">Source on GitHub</a>

Component INPUT[type=text] for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\Text`**

</div>

__Uses__ `Phalcon\Forms\Exception`

## Forms\Element\TextArea

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Element/TextArea.zep">Source on GitHub</a>

Component TEXTAREA for forms

<div class="api-tree">

- [`Phalcon\Forms\Element\AbstractElement`](#formselementabstractelement)
- **`Phalcon\Forms\Element\TextArea`**

</div>

__Uses__ `Phalcon\Tag`

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$method</span><span class="sm"> = &quot;inputTextarea&quot;</span></code>
</div>
</div>

## Forms\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exception.zep">Source on GitHub</a>

Exceptions thrown in Phalcon\Forms will use this class

<div class="api-tree">

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

</div>

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexception-tagfactorynotfound">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">tagFactoryNotFound</span>()</code>
</a>
<a class="api-item" href="#formsexception-usingparameterrequired">
<code class="vis vis-public">public</code>
<code class="ret">self</code>
<code class="sig"><span class="sf">usingParameterRequired</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="formsexception-tagfactorynotfound"><code>tagFactoryNotFound()</code></h4>

```php
public static function tagFactoryNotFound(): self;
```

<h4 id="formsexception-usingparameterrequired"><code>usingParameterRequired()</code></h4>

```php
public static function usingParameterRequired(): self;
```

## Forms\Exceptions\ElementNotInForm

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/ElementNotInForm.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\ElementNotInForm`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionselementnotinform-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionselementnotinform-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Forms\Exceptions\FormElementNameRequired

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/FormElementNameRequired.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `InvalidArgumentException`
- **`Phalcon\Forms\Exceptions\FormElementNameRequired`**

</div>

__Uses__ `InvalidArgumentException`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsformelementnamerequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsformelementnamerequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Forms\Exceptions\FormNotInLocator

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/FormNotInLocator.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\FormNotInLocator`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsformnotinlocator-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsformnotinlocator-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Forms\Exceptions\FormNotRegistered

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/FormNotRegistered.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\FormNotRegistered`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsformnotregistered-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsformnotregistered-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $name );
```

## Forms\Exceptions\InvalidEntity

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/InvalidEntity.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\InvalidEntity`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsinvalidentity-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsinvalidentity-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Forms\Exceptions\InvalidFilterType

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/InvalidFilterType.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\InvalidFilterType`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsinvalidfiltertype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsinvalidfiltertype-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Forms\Exceptions\InvalidJsonSchema

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/InvalidJsonSchema.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\InvalidJsonSchema`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsinvalidjsonschema-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$detail</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsinvalidjsonschema-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $detail );
```

## Forms\Exceptions\JsonSchemaNotArray

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/JsonSchemaNotArray.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\JsonSchemaNotArray`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsjsonschemanotarray-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsjsonschemanotarray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Forms\Exceptions\NoFormElements

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/NoFormElements.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\NoFormElements`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsnoformelements-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsnoformelements-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Forms\Exceptions\SchemaEntryMissingKey

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/SchemaEntryMissingKey.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\SchemaEntryMissingKey`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsschemaentrymissingkey-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">int</span> <span class="sv">$index</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$key</span></span>)</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsschemaentrymissingkey-__construct"><code>__construct()</code></h4>

```php
public function __construct(
int $index,
string $key
);
```

## Forms\Exceptions\SchemaEntryNotArray

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/SchemaEntryNotArray.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\SchemaEntryNotArray`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsschemaentrynotarray-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">int</span> <span class="sv">$index</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsschemaentrynotarray-__construct"><code>__construct()</code></h4>

```php
public function __construct( int $index );
```

## Forms\Exceptions\UnknownFormElementType

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/UnknownFormElementType.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\UnknownFormElementType`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsunknownformelementtype-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsunknownformelementtype-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $type );
```

## Forms\Exceptions\YamlExtensionRequired

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/YamlExtensionRequired.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\YamlExtensionRequired`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsyamlextensionrequired-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsyamlextensionrequired-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Forms\Exceptions\YamlSchemaNotArray

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Exceptions/YamlSchemaNotArray.zep">Source on GitHub</a>

This file is part of the Phalcon Framework.

(c) Phalcon Team &lt;team@phalcon.io>

For the full copyright and license information, please view the LICENSE.txt
file that was distributed with this source code.

<div class="api-tree">

- `\Exception`
- [`Phalcon\Forms\Exception`](#formsexception)
- **`Phalcon\Forms\Exceptions\YamlSchemaNotArray`**

</div>

__Uses__ `Phalcon\Forms\Exception`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsexceptionsyamlschemanotarray-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>()</code>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="formsexceptionsyamlschemanotarray-__construct"><code>__construct()</code></h4>

```php
public function __construct();
```

## Forms\Form

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Form.zep">Source on GitHub</a>

This component allows to build forms using an object-oriented interface

<div class="api-tree">

- `stdClass`
- [`Phalcon\Di\Injectable`](/5.14/api/phalcon_di/#diinjectable)
- **`Phalcon\Forms\Form`** — implements `Countable`, `Iterator`, [`Phalcon\Html\Attributes\AttributesInterface`](/5.14/api/phalcon_html/#htmlattributesattributesinterface)

</div>

__Uses__ `Countable` · `Iterator` · `Phalcon\Contracts\Forms\Schema` · `Phalcon\Di\DiInterface` · `Phalcon\Di\Injectable` · `Phalcon\Filter\FilterInterface` · `Phalcon\Filter\Validation` · `Phalcon\Filter\Validation\ValidationInterface` · `Phalcon\Forms\Element\Check` · `Phalcon\Forms\Element\ElementInterface` · `Phalcon\Forms\Exceptions\ElementNotInForm` · `Phalcon\Forms\Exceptions\InvalidEntity` · `Phalcon\Forms\Exceptions\NoFormElements` · `Phalcon\Html\Attributes` · `Phalcon\Html\Attributes\AttributesInterface` · `Phalcon\Html\TagFactory` · `Phalcon\Messages\Messages` · `Phalcon\Support\Settings` · `Phalcon\Tag`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsform-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$userOptions</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Phalcon\Forms\Form constructor</span>
</a>
<a class="api-item" href="#formsform-add">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">add</span>(<span class="prm"><span class="st">ElementInterface</span> <span class="sv">$element</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$position</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$type</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Adds an element to the form</span>
</a>
<a class="api-item" href="#formsform-bind">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">bind</span>(<span class="prm"><span class="st">array</span> <span class="sv">$data</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$whitelist</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Binds data to the entity</span>
</a>
<a class="api-item" href="#formsform-clear">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">clear</span>( <span class="st">mixed</span> <span class="sv">$fields</span><span class="sm"> = null</span> )</code>
<span class="desc">Clears every element in the form to its default value</span>
</a>
<a class="api-item" href="#formsform-count">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">count</span>()</code>
<span class="desc">Returns the number of elements in the form</span>
</a>
<a class="api-item" href="#formsform-current">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">current</span>()</code>
<span class="desc">Returns the current element in the iterator</span>
</a>
<a class="api-item" href="#formsform-get">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns an element added to the form by its name</span>
</a>
<a class="api-item" href="#formsform-getaction">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getAction</span>()</code>
<span class="desc">Returns the form&#039;s action</span>
</a>
<a class="api-item" href="#formsform-getattributes">
<code class="vis vis-public">public</code>
<code class="ret">Attributes</code>
<code class="sig"><span class="sf">getAttributes</span>()</code>
<span class="desc">Get Form attributes collection</span>
</a>
<a class="api-item" href="#formsform-getelements">
<code class="vis vis-public">public</code>
<code class="ret">ElementInterface[]</code>
<code class="sig"><span class="sf">getElements</span>()</code>
<span class="desc">Returns the form elements added to the form</span>
</a>
<a class="api-item" href="#formsform-getentity">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getEntity</span>()</code>
<span class="desc">Returns the entity related to the model</span>
</a>
<a class="api-item" href="#formsform-getfilteredvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">getFilteredValue</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Gets a value from the internal filtered data or calls getValue(name)</span>
</a>
<a class="api-item" href="#formsform-getlabel">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getLabel</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a label for an element</span>
</a>
<a class="api-item" href="#formsform-getmessages">
<code class="vis vis-public">public</code>
<code class="ret">Messages</code>
<code class="sig"><span class="sf">getMessages</span>()</code>
<span class="desc">Returns the messages generated in the validation.</span>
</a>
<a class="api-item" href="#formsform-getmessagesfor">
<code class="vis vis-public">public</code>
<code class="ret">Messages</code>
<code class="sig"><span class="sf">getMessagesFor</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns the messages generated for a specific element</span>
</a>
<a class="api-item" href="#formsform-gettagfactory">
<code class="vis vis-public">public</code>
<code class="ret">TagFactory|null</code>
<code class="sig"><span class="sf">getTagFactory</span>()</code>
<span class="desc">Returns the tagFactory object</span>
</a>
<a class="api-item" href="#formsform-getuseroption">
<code class="vis vis-public">public</code>
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getUserOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$option</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$defaultValue</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns the value of an option if present</span>
</a>
<a class="api-item" href="#formsform-getuseroptions">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getUserOptions</span>()</code>
<span class="desc">Returns the options for the element</span>
</a>
<a class="api-item" href="#formsform-getvalidation">
<code class="vis vis-public">public</code>
<code class="ret">ValidationInterface|null</code>
<code class="sig"><span class="sf">getValidation</span>()</code>
<span class="desc">return ValidationInterface|null</span>
</a>
<a class="api-item" href="#formsform-getvalue">
<code class="vis vis-public">public</code>
<code class="ret">mixed|null</code>
<code class="sig"><span class="sf">getValue</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Gets a value from the internal related entity or from the default value</span>
</a>
<a class="api-item" href="#formsform-getwhitelist">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getWhitelist</span>()</code>
<span class="desc">return array</span>
</a>
<a class="api-item" href="#formsform-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check if the form contains an element</span>
</a>
<a class="api-item" href="#formsform-hasmessagesfor">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasMessagesFor</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check if messages were generated for a specific element</span>
</a>
<a class="api-item" href="#formsform-isvalid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">isValid</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$whitelist</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Validates the form</span>
</a>
<a class="api-item" href="#formsform-key">
<code class="vis vis-public">public</code>
<code class="ret">int</code>
<code class="sig"><span class="sf">key</span>()</code>
<span class="desc">Returns the current position/key in the iterator</span>
</a>
<a class="api-item" href="#formsform-label">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">label</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Generate the label of an element added to the form including HTML</span>
</a>
<a class="api-item" href="#formsform-load">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">load</span>(<span class="prm"><span class="st">Schema</span> <span class="sv">$schema</span>,</span><span class="prm"><span class="st">FormsLocator</span> <span class="sv">$locator</span></span>)</code>
<span class="desc">Loads elements into the form from a Schema source.</span>
</a>
<a class="api-item" href="#formsform-next">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">next</span>()</code>
<span class="desc">Moves the internal iteration pointer to the next position</span>
</a>
<a class="api-item" href="#formsform-remove">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">remove</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Removes an element from the form</span>
</a>
<a class="api-item" href="#formsform-render">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">render</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Renders a specific item in the form</span>
</a>
<a class="api-item" href="#formsform-rewind">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">rewind</span>()</code>
<span class="desc">Rewinds the internal iterator</span>
</a>
<a class="api-item" href="#formsform-setaction">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAction</span>( <span class="st">string</span> <span class="sv">$action</span> )</code>
<span class="desc">Sets the form&#039;s action</span>
</a>
<a class="api-item" href="#formsform-setattributes">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setAttributes</span>( <span class="st">Attributes</span> <span class="sv">$attributes</span> )</code>
<span class="desc">Set form attributes collection</span>
</a>
<a class="api-item" href="#formsform-setentity">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setEntity</span>( <span class="st">mixed</span> <span class="sv">$entity</span> )</code>
<span class="desc">Sets the entity related to the model</span>
</a>
<a class="api-item" href="#formsform-settagfactory">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setTagFactory</span>( <span class="st">TagFactory</span> <span class="sv">$tagFactory</span> )</code>
<span class="desc">Sets the tagFactory for the form</span>
</a>
<a class="api-item" href="#formsform-setuseroption">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setUserOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$option</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Sets an option for the form</span>
</a>
<a class="api-item" href="#formsform-setuseroptions">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setUserOptions</span>( <span class="st">array</span> <span class="sv">$options</span> )</code>
<span class="desc">Sets options for the element</span>
</a>
<a class="api-item" href="#formsform-setvalidation">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setValidation</span>( <span class="st">ValidationInterface</span> <span class="sv">$validation</span> )</code>
<span class="desc">Sets the default validation</span>
</a>
<a class="api-item" href="#formsform-setwhitelist">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">setWhitelist</span>( <span class="st">array</span> <span class="sv">$whitelist</span> )</code>
<span class="desc">Sets the default whitelist</span>
</a>
<a class="api-item" href="#formsform-valid">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">valid</span>()</code>
<span class="desc">Check if the current element in the iterator is valid</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">AttributesInterface|null</code>
<code class="sig"><span class="sv">$attributes</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$data</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$elements</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$elementsIndexed</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">object|null</code>
<code class="sig"><span class="sv">$entity</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$filteredData</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">Messages</code>
<code class="sig"><span class="sv">$messages</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$options</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$position</span><span class="sm"> = 0</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">TagFactory|null</code>
<code class="sig"><span class="sv">$tagFactory</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">ValidationInterface|null</code>
<code class="sig"><span class="sv">$validation</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$whitelist</span><span class="sm"> = []</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 40</div>

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
string $position = null,
bool $type = null
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

return array

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

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/FormsLocator.zep">Source on GitHub</a>

A closure-based registry for named forms and element type factories.

**Form registry** (`get`/`has`/`set`):
Each entry is a callable `fn(?object $entity): Form`. Without an entity the
resolved form is cached; with an entity a fresh form is always produced.

**Element registry** (`getElement`/`hasElement`/`setElement`):
Maps type strings (e.g. 'text', 'email') to factories used by Form::load().
Each callable has the signature `fn(string $name, array $options, array $attributes): ElementInterface`.
Default types are seeded by `getDefaultServices()`. Users may add or override
types with `setElement()`.

<div class="api-tree">

- **`Phalcon\Forms\FormsLocator`**

</div>

__Uses__ `Phalcon\Forms\Element\Check` · `Phalcon\Forms\Element\CheckGroup` · `Phalcon\Forms\Element\Date` · `Phalcon\Forms\Element\Email` · `Phalcon\Forms\Element\File` · `Phalcon\Forms\Element\Hidden` · `Phalcon\Forms\Element\Numeric` · `Phalcon\Forms\Element\Password` · `Phalcon\Forms\Element\Radio` · `Phalcon\Forms\Element\RadioGroup` · `Phalcon\Forms\Element\Select` · `Phalcon\Forms\Element\Submit` · `Phalcon\Forms\Element\Text` · `Phalcon\Forms\Element\TextArea` · `Phalcon\Forms\Exceptions\FormNotInLocator` · `Phalcon\Forms\Exceptions\UnknownFormElementType`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsformslocator-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$definitions</span><span class="sm"> = []</span> )</code>
</a>
<a class="api-item" href="#formsformslocator-get">
<code class="vis vis-public">public</code>
<code class="ret">Form</code>
<code class="sig"><span class="sf">get</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Returns the named form.</span>
</a>
<a class="api-item" href="#formsformslocator-getelement">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getElement</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Returns the factory callable for the given element type.</span>
</a>
<a class="api-item" href="#formsformslocator-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks whether a named form factory is registered.</span>
</a>
<a class="api-item" href="#formsformslocator-haselement">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasElement</span>( <span class="st">string</span> <span class="sv">$type</span> )</code>
<span class="desc">Checks whether an element type is registered.</span>
</a>
<a class="api-item" href="#formsformslocator-set">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$factory</span></span>)</code>
<span class="desc">Registers or replaces a named form factory.</span>
</a>
<a class="api-item" href="#formsformslocator-setelement">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setElement</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$factory</span></span>)</code>
<span class="desc">Registers or replaces an element type factory.</span>
</a>
<a class="api-item" href="#formsformslocator-getdefaultservices">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">getDefaultServices</span>()</code>
<span class="desc">Returns the built-in element type factories.</span>
</a>
</div>

### Methods

<div class="api-group">Public · 7</div>

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

<div class="api-group">Protected · 1</div>

<h4 id="formsformslocator-getdefaultservices"><code>getDefaultServices()</code></h4>

```php
protected function getDefaultServices(): array;
```

Returns the built-in element type factories.

Each value is a callable: fn(string $name, array $options, array $attributes): ElementInterface

## Forms\Loader\ArrayLoader

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Loader/ArrayLoader.zep">Source on GitHub</a>

Supplies form element definitions from a PHP array.

<div class="api-tree">

- **`Phalcon\Forms\Loader\ArrayLoader`** — implements [`Phalcon\Contracts\Forms\Schema`](/5.14/api/phalcon_contracts/#contractsformsschema)

</div>

__Uses__ `Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\SchemaEntryMissingKey` · `Phalcon\Forms\Exceptions\SchemaEntryNotArray`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsloaderarrayloader-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">array</span> <span class="sv">$definitions</span> )</code>
</a>
<a class="api-item" href="#formsloaderarrayloader-load">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">load</span>()</code>
</a>
<a class="api-item" href="#formsloaderarrayloader-validatedefinition">
<code class="vis vis-protected">protected</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">validateDefinition</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$definition</span>,</span><span class="prm"><span class="st">int</span> <span class="sv">$index</span></span>)</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$definitions</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="formsloaderarrayloader-__construct"><code>__construct()</code></h4>

```php
public function __construct( array $definitions );
```

<h4 id="formsloaderarrayloader-load"><code>load()</code></h4>

```php
public function load(): array;
```

<div class="api-group">Protected · 1</div>

<h4 id="formsloaderarrayloader-validatedefinition"><code>validateDefinition()</code></h4>

```php
protected function validateDefinition(
mixed $definition,
int $index
): void;
```

## Forms\Loader\JsonLoader

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Loader/JsonLoader.zep">Source on GitHub</a>

Supplies form element definitions from a JSON string or file.

When $source looks like an existing, readable file path it is read from
disk first; otherwise the value is treated as a raw JSON string.

<div class="api-tree">

- **`Phalcon\Forms\Loader\JsonLoader`** — implements [`Phalcon\Contracts\Forms\Schema`](/5.14/api/phalcon_contracts/#contractsformsschema)

</div>

__Uses__ `InvalidArgumentException` · `Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\InvalidJsonSchema` · `Phalcon\Forms\Exceptions\JsonSchemaNotArray` · `Phalcon\Support\Helper\Json\Decode`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsloaderjsonloader-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$source</span> )</code>
</a>
<a class="api-item" href="#formsloaderjsonloader-load">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">load</span>()</code>
</a>
<a class="api-item" href="#formsloaderjsonloader-phpfilegetcontents">
<code class="vis vis-protected">protected</code>
<code class="sig"><span class="sf">phpFileGetContents</span>( <span class="st">string</span> <span class="sv">$filename</span> )</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$source</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="formsloaderjsonloader-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $source );
```

<h4 id="formsloaderjsonloader-load"><code>load()</code></h4>

```php
public function load(): array;
```

<div class="api-group">Protected · 1</div>

<h4 id="formsloaderjsonloader-phpfilegetcontents"><code>phpFileGetContents()</code></h4>

```php
protected function phpFileGetContents( string $filename );
```

## Forms\Loader\YamlLoader

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Loader/YamlLoader.zep">Source on GitHub</a>

Supplies form element definitions from a YAML string or file.

Requires the PHP `yaml` extension (pecl/yaml).

When $source is an existing, readable file path the file is parsed
directly; otherwise the value is treated as a raw YAML string.

<div class="api-tree">

- **`Phalcon\Forms\Loader\YamlLoader`** — implements [`Phalcon\Contracts\Forms\Schema`](/5.14/api/phalcon_contracts/#contractsformsschema)

</div>

__Uses__ `Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exception` · `Phalcon\Forms\Exceptions\YamlExtensionRequired` · `Phalcon\Forms\Exceptions\YamlSchemaNotArray`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsloaderyamlloader-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">string</span> <span class="sv">$source</span> )</code>
</a>
<a class="api-item" href="#formsloaderyamlloader-load">
<code class="vis vis-public">public</code>
<code class="ret">array</code>
<code class="sig"><span class="sf">load</span>()</code>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sv">$source</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 2</div>

<h4 id="formsloaderyamlloader-__construct"><code>__construct()</code></h4>

```php
public function __construct( string $source );
```

<h4 id="formsloaderyamlloader-load"><code>load()</code></h4>

```php
public function load(): array;
```

## Forms\Manager

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Forms/Manager.zep">Source on GitHub</a>

Forms Manager

<div class="api-tree">

- **`Phalcon\Forms\Manager`**

</div>

__Uses__ `Phalcon\Contracts\Forms\Schema` · `Phalcon\Forms\Exceptions\FormNotRegistered` · `Phalcon\Forms\Form`

### Method Summary

<div class="api-list">
<a class="api-item" href="#formsmanager-__construct">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">__construct</span>( <span class="st">FormsLocator</span> <span class="sv">$locator</span><span class="sm"> = null</span> )</code>
<span class="desc">Manager constructor.</span>
</a>
<a class="api-item" href="#formsmanager-create">
<code class="vis vis-public">public</code>
<code class="ret">Form</code>
<code class="sig"><span class="sf">create</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Creates a form registering it in the forms manager</span>
</a>
<a class="api-item" href="#formsmanager-get">
<code class="vis vis-public">public</code>
<code class="ret">Form</code>
<code class="sig"><span class="sf">get</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Returns a form by its name</span>
</a>
<a class="api-item" href="#formsmanager-getlocator">
<code class="vis vis-public">public</code>
<code class="ret">FormsLocator</code>
<code class="sig"><span class="sf">getLocator</span>()</code>
<span class="desc">Returns the FormsLocator instance.</span>
</a>
<a class="api-item" href="#formsmanager-has">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">has</span>( <span class="st">string</span> <span class="sv">$name</span> )</code>
<span class="desc">Checks if a form is registered in the forms manager</span>
</a>
<a class="api-item" href="#formsmanager-loadform">
<code class="vis vis-public">public</code>
<code class="ret">Form</code>
<code class="sig"><span class="sf">loadForm</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">Schema</span> <span class="sv">$schema</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$entity</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Creates a form from a Schema source, registers it in the manager,</span>
</a>
<a class="api-item" href="#formsmanager-set">
<code class="vis vis-public">public</code>
<code class="ret">static</code>
<code class="sig"><span class="sf">set</span>(<span class="prm"><span class="st">string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">Form</span> <span class="sv">$form</span></span>)</code>
<span class="desc">Registers a form in the Forms Manager</span>
</a>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$forms</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">FormsLocator</code>
<code class="sig"><span class="sv">$locator</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 7</div>

<h4 id="formsmanager-__construct"><code>__construct()</code></h4>

```php
public function __construct( FormsLocator $locator = null );
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

Source: https://docs.phalcon.io/5.14/api/phalcon_forms/index.mdx
