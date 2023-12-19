---
layout: default
title: 'Phalcon\Forms\Element'
---
# Abstract class **Phalcon\Forms\Element**

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This is a base class for form elements


## Methods
public  **__construct** (*string* $name, [*array* $attributes])

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form)

Sets the parent form to the element



public  **getForm** ()

Returns the parent form to the element



public  **setName** (*mixed* $name)

Sets the element name



public  **getName** ()

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters)

Sets the element filters



public  **addFilter** (*mixed* $filter)

Adds a filter to current list of filters



public *mixed* **getFilters** ()

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge])

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator)

Adds a validator to the element



public  **getValidators** ()

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked])

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue])

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes)

Sets default attributes for the element



public  **getAttributes** ()

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue])

Returns the value of an option if present



public  **setUserOptions** (*array* $options)

Sets options for the element



public  **getUserOptions** ()

Returns the options for the element



public  **setLabel** (*mixed* $label)

Sets the element label



public  **getLabel** ()

Returns the element label



public  **label** ([*array* $attributes])

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** ()

Returns the default value assigned to the element



public  **getValue** ()

Returns the element value



public  **getMessages** ()

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** ()

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message)

Appends a message to the internal message list



public  **clear** ()

Clears every element in the form to its default value



public  **__toString** ()

Magic method __toString renders the widget without attributes



abstract public  **render** ([*mixed* $attributes]) inherited from [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

...



<hr>

# Class **Phalcon\Forms\Element\Check**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/check.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component INPUT[type=check] for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget returning html



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\Date**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/date.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component INPUT[type=date] for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget returning html



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\Email**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/email.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component INPUT[type=email] for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget returning html



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\File**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/file.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component INPUT[type=file] for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget returning html



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\Hidden**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/hidden.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component INPUT[type=hidden] for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget returning html



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\Numeric**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/numeric.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component INPUT[type=number] for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget returning html



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\Password**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/password.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component INPUT[type=password] for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget returning html



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\Radio**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/radio.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component INPUT[type=radio] for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget returning html



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\Select**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/select.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component SELECT (choice) for forms


## Methods
public  **__construct** (*string* $name, [*object* | *array* $options], [*array* $attributes])

Phalcon\Forms\Element constructor



public [Phalcon\Forms\Element](Phalcon_Forms.md) **setOptions** (*array* | *object* $options)

Set the choice's options



public *array* | *object* **getOptions** ()

Returns the choices' options



public *this* **addOption** (*array* $option)

Adds an option to the current options



public  **render** ([*array* $attributes])

Renders the element widget returning html



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\Submit**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/submit.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component INPUT[type=submit] for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\Text**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/text.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component INPUT[type=text] for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Class **Phalcon\Forms\Element\TextArea**

*extends* abstract class [Phalcon\Forms\Element](Phalcon_Forms.md)

*implements* [Phalcon\Forms\ElementInterface](Phalcon_Forms.md)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/element/textarea.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Component TEXTAREA for forms


## Methods
public  **render** ([*array* $attributes])

Renders the element widget



public  **__construct** (*string* $name, [*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Phalcon\Forms\Element constructor



public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the parent form to the element



public  **getForm** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the parent form to the element



public  **setName** (*mixed* $name) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element name



public  **getName** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element name



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setFilters** (*array* | *string* $filters) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element filters



public  **addFilter** (*mixed* $filter) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a filter to current list of filters



public *mixed* **getFilters** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element filters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **addValidators** (*array* $validators, [*mixed* $merge]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a group of validators



public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Adds a validator to the element



public  **getValidators** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the validators registered for the element



public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns an array of prepared attributes for Phalcon\Tag helpers
according to the element parameters



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setAttribute** (*string* $attribute, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default attribute for the element



public *mixed* **getAttribute** (*string* $attribute, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an attribute if present



public  **setAttributes** (*array* $attributes) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets default attributes for the element



public  **getAttributes** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default attributes for the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setUserOption** (*string* $option, *mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets an option for the element



public *mixed* **getUserOption** (*string* $option, [*mixed* $defaultValue]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the value of an option if present



public  **setUserOptions** (*array* $options) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets options for the element



public  **getUserOptions** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the options for the element



public  **setLabel** (*mixed* $label) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the element label



public  **getLabel** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element label



public  **label** ([*array* $attributes]) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Generate the HTML to label the element



public [Phalcon\Forms\ElementInterface](Phalcon_Forms.md) **setDefault** (*mixed* $value) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets a default value in case the form does not use an entity
or there is no value available for the element in _POST



public  **getDefault** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the default value assigned to the element



public  **getValue** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the element value



public  **getMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Returns the messages that belongs to the element
The element needs to be attached to a form



public  **hasMessages** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Checks whether there are messages attached to the element



public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Sets the validation messages related to the element



public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message) inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Appends a message to the internal message list



public  **clear** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Clears every element in the form to its default value



public  **__toString** () inherited from [Phalcon\Forms\Element](Phalcon_Forms.md)

Magic method __toString renders the widget without attributes




<hr>

# Interface **Phalcon\Forms\ElementInterface**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/elementinterface.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
abstract public  **setForm** ([Phalcon\Forms\Form](Phalcon_Forms.md) $form)

...


abstract public  **getForm** ()

...


abstract public  **setName** (*mixed* $name)

...


abstract public  **getName** ()

...


abstract public  **setFilters** (*mixed* $filters)

...


abstract public  **addFilter** (*mixed* $filter)

...


abstract public  **getFilters** ()

...


abstract public  **addValidators** (*array* $validators, [*mixed* $merge])

...


abstract public  **addValidator** ([Phalcon\Validation\ValidatorInterface](Phalcon_Validation.md) $validator)

...


abstract public  **getValidators** ()

...


abstract public  **prepareAttributes** ([*array* $attributes], [*mixed* $useChecked])

...


abstract public  **setAttribute** (*mixed* $attribute, *mixed* $value)

...


abstract public  **getAttribute** (*mixed* $attribute, [*mixed* $defaultValue])

...


abstract public  **setAttributes** (*array* $attributes)

...


abstract public  **getAttributes** ()

...


abstract public  **setUserOption** (*mixed* $option, *mixed* $value)

...


abstract public  **getUserOption** (*mixed* $option, [*mixed* $defaultValue])

...


abstract public  **setUserOptions** (*array* $options)

...


abstract public  **getUserOptions** ()

...


abstract public  **setLabel** (*mixed* $label)

...


abstract public  **getLabel** ()

...


abstract public  **label** ()

...


abstract public  **setDefault** (*mixed* $value)

...


abstract public  **getDefault** ()

...


abstract public  **getValue** ()

...


abstract public  **getMessages** ()

...


abstract public  **hasMessages** ()

...


abstract public  **setMessages** ([Phalcon\Validation\Message\Group](Phalcon_Validation.md) $group)

...


abstract public  **appendMessage** ([Phalcon\Validation\MessageInterface](Phalcon_Validation.md) $message)

...


abstract public  **clear** ()

...


abstract public  **render** ([*mixed* $attributes])

...



<hr>

# Class **Phalcon\Forms\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

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

# Class **Phalcon\Forms\Form**

*extends* abstract class [Phalcon\Di\Injectable](Phalcon_Di.md)

*implements* [Phalcon\Events\EventsAwareInterface](Phalcon_Events.md), [Phalcon\Di\InjectionAwareInterface](Phalcon_Di.md), [Countable](https://php.net/manual/en/class.countable.php), [Iterator](https://php.net/manual/en/class.iterator.php), [Traversable](https://php.net/manual/en/class.traversable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/form.zep" class="btn btn-default btn-sm">Source on GitHub</a>

This component allows to build forms using an object-oriented interface


## Methods
public  **setValidation** (*mixed* $validation)

...


public  **getValidation** ()

...


public  **__construct** ([*object* $entity], [*array* $userOptions])

Phalcon\Forms\Form constructor



public  **setAction** (*mixed* $action)

Sets the form's action



public  **getAction** ()

Returns the form's action



public  **setUserOption** (*string* $option, *mixed* $value)

Sets an option for the form



public  **getUserOption** (*string* $option, [*mixed* $defaultValue])

Returns the value of an option if present



public  **setUserOptions** (*array* $options)

Sets options for the element



public  **getUserOptions** ()

Returns the options for the element



public  **setEntity** (*object* $entity)

Sets the entity related to the model



public *object* **getEntity** ()

Returns the entity related to the model



public  **getElements** ()

Returns the form elements added to the form



public  **bind** (*array* $data, *object* $entity, [*array* $whitelist])

Binds data to the entity



public  **isValid** ([*array* $data], [*object* $entity])

Validates the form



public  **getMessages** ([*mixed* $byItemName])

Returns the messages generated in the validation



public  **getMessagesFor** (*mixed* $name)

Returns the messages generated for a specific element



public  **hasMessagesFor** (*mixed* $name)

Check if messages were generated for a specific element



public  **add** ([Phalcon\Forms\ElementInterface](Phalcon_Forms.md) $element, [*mixed* $position], [*mixed* $type])

Adds an element to the form



public  **render** (*string* $name, [*array* $attributes])

Renders a specific item in the form



public  **get** (*mixed* $name)

Returns an element added to the form by its name



public  **label** (*mixed* $name, [*array* $attributes])

Generate the label of an element added to the form including HTML



public  **getLabel** (*mixed* $name)

Returns a label for an element



public  **getValue** (*mixed* $name)

Gets a value from the internal related entity or from the default value



public  **has** (*mixed* $name)

Check if the form contains an element



public  **remove** (*mixed* $name)

Removes an element from the form



public  **clear** ([*array* $fields])

Clears every element in the form to its default value



public  **count** ()

Returns the number of elements in the form



public  **rewind** ()

Rewinds the internal iterator



public  **current** ()

Returns the current element in the iterator



public  **key** ()

Returns the current position/key in the iterator



public  **next** ()

Moves the internal iteration pointer to the next position



public  **valid** ()

Check if the current element in the iterator is valid



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

# Class **Phalcon\Forms\Manager**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/forms/manager.zep" class="btn btn-default btn-sm">Source on GitHub</a>




## Methods
public  **create** (*string* $name, [*object* $entity])

Creates a form registering it in the forms manager



public  **get** (*mixed* $name)

Returns a form by its name



public  **has** (*mixed* $name)

Checks if a form is registered in the forms manager



public  **set** (*mixed* $name, [Phalcon\Forms\Form](Phalcon_Forms.md) $form)

Registers a form in the Forms Manager
