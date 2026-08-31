---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Html\Attributes 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Attributes.zep)


-   __Namespace__

    - `Phalcon\Html`

-   __Uses__
    
    - `Phalcon\Html\Attributes\RenderInterface`
    - `Phalcon\Collection`

-   __Extends__
    
    `Collection`

-   __Implements__
    
    - `RenderInterface`

This class helps to work with HTML Attributes


### Methods

```php
public function __toString(): string;
```
Alias of the render method


```php
public function render(): string;
```
Render attributes as HTML attributes






## Html\Attributes\AttributesInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Attributes/AttributesInterface.zep)


-   __Namespace__

    - `Phalcon\Html\Attributes`

-   __Uses__
    
    - `Phalcon\Html\Attributes`

-   __Extends__
    

-   __Implements__
    

* Phalcon\Html\Attributes\AttributesInterface
*
* Interface Phalcon\Html\Attributes\AttributesInterface
*/

### Methods

```php
public function getAttributes(): Attributes;
```
Get Attributes


```php
public function setAttributes( Attributes $attributes ): AttributesInterface;
```
Set Attributes




## Html\Attributes\RenderInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Attributes/RenderInterface.zep)


-   __Namespace__

    - `Phalcon\Html\Attributes`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

### Methods

```php
public function render(): string;
```
Generate a string represetation




## Html\Breadcrumbs 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Breadcrumbs.zep)


-   __Namespace__

    - `Phalcon\Html`

-   __Uses__
    
    - `Phalcon\Di\DiInterface`

-   __Extends__
    

-   __Implements__
    

Phalcon\Html\Breadcrumbs

This component offers an easy way to create breadcrumbs for your application.
The resulting HTML when calling `render()` will have each breadcrumb enclosed
in `<dt>` tags, while the whole string is enclosed in `<dl>` tags.


### Properties
```php
/**
 * Keeps all the breadcrumbs
 *
 * @var array
 */
private $elements;

/**
 * Crumb separator
 *
 * @var string
 */
private $separator =  '/' ;

/**
 * The HTML template to use to render the breadcrumbs.
 *
 * @var string
 */
private $template = "<dt><a href=\"%link%\">%label%</a></dt>";

```

### Methods

```php
public function add( string $label, string $link = string ): Breadcrumbs;
```
Adds a new crumb.

```php
// Adding a crumb with a link
$breadcrumbs->add("Home", "/");

// Adding a crumb without a link (normally the last one)
$breadcrumbs->add("Users");
```


```php
public function clear(): void;
```
Clears the crumbs

```php
$breadcrumbs->clear()
```


```php
public function getSeparator(): string;
```
Crumb separator


```php
public function remove( string $link ): void;
```
Removes crumb by url.

```php
$breadcrumbs->remove("/admin/user/create");

// remove a crumb without an url (last link)
$breadcrumbs->remove();
```


```php
public function render(): string;
```
Renders and outputs breadcrumbs based on previously set template.

```php
echo $breadcrumbs->render();
```


```php
public function setSeparator( string $separator )
```



```php
public function toArray(): array;
```
Returns the internal breadcrumbs array




## Html\Escaper\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Escaper/Exception.zep)


-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Html\Escaper will use this class






## Html\Helper\AbstractHelper ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/AbstractHelper.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Exception`

-   __Extends__
    

-   __Implements__
    


### Properties
```php
/**
 * @var string
 */
protected $delimiter = '';

/**
 * @var EscaperInterface
 */
protected $escaper;

/**
 * @var string
 */
protected $indent = '    ';

/**
 * @var int
 */
protected $indentLevel = 1;

```

### Methods

```php
public function __construct( EscaperInterface $escaper );
```
AbstractHelper constructor.


```php
protected function close( string $tag, bool $raw = bool ): string;
```
Produces a closing tag


```php
protected function indent(): string;
```
Replicates the indent x times as per indentLevel


```php
protected function orderAttributes( array $overrides, array $attributes ): array;
```
Keeps all the attributes sorted - same order all the tome


```php
protected function renderArrayElements( array $elements, string $delimiter ): string;
```
Traverses an array and calls the method defined in the first element
with attributes as the second, returning the resulting string


```php
protected function renderAttributes( array $attributes ): string;
```
Renders all the attributes


```php
protected function renderElement( string $tag, array $attributes = [] ): string;
```
Renders an element


```php
protected function renderFullElement( string $tag, string $text, array $attributes = [], bool $raw = bool ): string;
```
Renders an element


```php
protected function renderTag( string $tag, array $attributes = [], string $close = string ): string;
```
Renders a tag


```php
protected function selfClose( string $tag, array $attributes = [] ): string;
```
Produces a self close tag i.e. <img />




## Html\Helper\AbstractList ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/AbstractList.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class AbstractList


### Properties
```php
/**
 * @var array
 */
protected $attributes;

/**
 * @var string
 */
protected $elementTag = "li";

/**
 * @var array
 */
protected $store;

```

### Methods

```php
public function __invoke( string $indent = null, string $delimiter = null, array $attributes = [] ): AbstractList;
```



```php
public function __toString();
```
Generates and returns the HTML for the list.


```php
abstract protected function getTag(): string;
```
Returns the tag name.




## Html\Helper\AbstractSeries ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/AbstractSeries.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    



### Properties
```php
/**
 * @var array
 */
protected $attributes;

/**
 * @var array
 */
protected $store;

```

### Methods

```php
public function __invoke( string $indent = null, string $delimiter = null ): AbstractSeries;
```



```php
public function __toString();
```
Generates and returns the HTML for the list.


```php
abstract protected function getTag(): string;
```
Returns the tag name.




## Html\Helper\Anchor 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Anchor.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Anchor


### Methods

```php
public function __invoke( string $href, string $text, array $attributes = [], bool $raw = bool ): string;
```
Produce a <a> tag


```php
protected function processAttributes( string $href, array $attributes ): array;
```





## Html\Helper\Base 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Base.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Base


### Methods

```php
public function __invoke( string $href = null, array $attributes = [] ): string;
```
Produce a `<base/>` tag.




## Html\Helper\Body 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Body.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Body


### Methods

```php
public function __invoke( array $attributes = [] ): string;
```
Produce a `<body>` tag.




## Html\Helper\Button 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Button.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Button


### Methods

```php
public function __invoke( string $text, array $attributes = [], bool $raw = bool ): string;
```
Produce a `<button>` tag.




## Html\Helper\Close 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Close.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Close


### Methods

```php
public function __invoke( string $tag, bool $raw = bool ): string;
```
Produce a `</...>` tag.




## Html\Helper\Element 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Element.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Element


### Methods

```php
public function __invoke( string $tag, string $text, array $attributes = [], bool $raw = bool ): string;
```
Produce a tag.




## Html\Helper\Form 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Form.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Form


### Methods

```php
public function __invoke( array $attributes = [] ): string;
```
Produce a `<form>` tag.




## Html\Helper\Img 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Img.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Img


### Methods

```php
public function __invoke( string $src, array $attributes = [] ): string;
```
Produce a <img> tag.




## Html\Helper\Input\AbstractInput ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/AbstractInput.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    
    - `Phalcon\Html\Helper\AbstractHelper`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class AbstractInput


### Properties
```php
/**
 * @var string
 */
protected $type = 'text';

/**
 * @var array
 */
protected $attributes;

```

### Methods

```php
public function __invoke( string $name, string $value = null, array $attributes = [] ): AbstractInput;
```



```php
public function __toString();
```
Returns the HTML for the input.


```php
public function setValue( string $value = null ): AbstractInput;
```
Sets the value of the element




## Html\Helper\Input\Checkbox 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Checkbox.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    
    - `Phalcon\Html\Escaper\EscaperInterface`

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Checkbox



### Properties
```php
/**
 * @var array
 */
protected $label;

/**
 * @var string
 */
protected $type = 'checkbox';

```

### Methods

```php
public function __construct( EscaperInterface $escaper );
```
AbstractHelper constructor.


```php
public function __toString();
```
Returns the HTML for the input.


```php
public function label( array $attributes = [] ): Checkbox;
```
Attaches a label to the element




## Html\Helper\Input\Color 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Color.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Color


### Properties
```php
//
protected $type = 'color';

```


## Html\Helper\Input\Date 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Date.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Date


### Properties
```php
//
protected $type = 'date';

```


## Html\Helper\Input\DateTime 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/DateTime.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class DateTime


### Properties
```php
//
protected $type = 'datetime';

```


## Html\Helper\Input\DateTimeLocal 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/DateTimeLocal.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class DateTimeLocal


### Properties
```php
//
protected $type = 'datetime-local';

```


## Html\Helper\Input\Email 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Email.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Email


### Properties
```php
//
protected $type = 'email';

```


## Html\Helper\Input\File 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/File.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class File


### Properties
```php
//
protected $type = 'file';

```


## Html\Helper\Input\Hidden 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Hidden.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Hidden


### Properties
```php
//
protected $type = 'hidden';

```


## Html\Helper\Input\Image 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Image.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Image


### Properties
```php
//
protected $type = 'image';

```


## Html\Helper\Input\Input 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Input.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Input


### Methods

```php
public function setType( string $type ): AbstractInput;
```
Sets the type of the input




## Html\Helper\Input\Month 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Month.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Month


### Properties
```php
//
protected $type = 'month';

```


## Html\Helper\Input\Numeric 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Numeric.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Numeric


### Properties
```php
//
protected $type = 'numeric';

```


## Html\Helper\Input\Password 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Password.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Password


### Properties
```php
//
protected $type = 'password';

```


## Html\Helper\Input\Radio 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Radio.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `Checkbox`

-   __Implements__
    

Class Radio


### Properties
```php
/**
 * @var string
 */
protected $type = 'radio';

```


## Html\Helper\Input\Range 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Range.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Range


### Properties
```php
//
protected $type = 'range';

```


## Html\Helper\Input\Search 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Search.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Search


### Properties
```php
//
protected $type = 'search';

```


## Html\Helper\Input\Select 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Select.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    
    - `Phalcon\Html\Helper\AbstractList`

-   __Extends__
    
    `AbstractList`

-   __Implements__
    

Class Select



### Properties
```php
/**
 * @var string
 */
protected $elementTag = 'option';

/**
 * @var bool
 */
protected $inOptGroup = false;

/**
 * @var string
 */
protected $selected = ;

```

### Methods

```php
public function add( string $text, string $value = null, array $attributes = [], bool $raw = bool ): Select;
```
Add an element to the list


```php
public function addPlaceholder( string $text, mixed $value = null, array $attributes = [], bool $raw = bool ): Select;
```
Add a placeholder to the element


```php
public function optGroup( string $label = null, array $attributes = [] ): Select;
```
Creates an option group


```php
public function selected( string $selected ): Select;
```



```php
protected function getTag(): string;
```



```php
protected function optGroupEnd(): string;
```



```php
protected function optGroupStart( string $label, array $attributes ): string;
```





## Html\Helper\Input\Submit 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Submit.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Submit


### Properties
```php
//
protected $type = 'submit';

```


## Html\Helper\Input\Tel 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Tel.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Tel


### Properties
```php
//
protected $type = 'tel';

```


## Html\Helper\Input\Text 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Text.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Text



## Html\Helper\Input\Textarea 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Textarea.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Textarea


### Properties
```php
/**
 * @var string
 */
protected $type = 'textarea';

```

### Methods

```php
public function __toString();
```
Returns the HTML for the input.




## Html\Helper\Input\Time 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Time.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Time


### Properties
```php
//
protected $type = 'time';

```


## Html\Helper\Input\Url 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Url.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Url


### Properties
```php
//
protected $type = 'url';

```


## Html\Helper\Input\Week 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Input/Week.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Week


### Properties
```php
//
protected $type = 'week';

```


## Html\Helper\Label 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Label.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Label


### Methods

```php
public function __invoke( string $label, array $attributes = [], bool $raw = bool ): string;
```
Produce a `<label>` tag.




## Html\Helper\Link 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Link.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    

-   __Extends__
    
    `Style`

-   __Implements__
    

Creates <link> tags


### Methods

```php
public function add( string $url, array $attributes = [] );
```
Add an element to the list


```php
protected function getAttributes( string $url, array $attributes ): array;
```
Returns the necessary attributes


```php
protected function getTag(): string;
```





## Html\Helper\Meta 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Meta.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractSeries`

-   __Implements__
    

Class Meta


### Methods

```php
public function add( array $attributes = [] ): Meta;
```
Add an element to the list


```php
public function addHttp( string $httpEquiv, string $content ): Meta;
```



```php
public function addName( string $name, string $content ): Meta;
```



```php
public function addProperty( string $name, string $content ): Meta;
```



```php
protected function getTag(): string;
```





## Html\Helper\Ol 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Ol.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    

-   __Extends__
    
    `AbstractList`

-   __Implements__
    

Class Ol


### Methods

```php
public function add( string $text, array $attributes = [], bool $raw = bool ): AbstractList;
```
Add an element to the list


```php
protected function getTag(): string;
```





## Html\Helper\Script 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Script.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractSeries`

-   __Implements__
    

Class Script


### Methods

```php
protected function getAttributes( string $src, array $attributes ): array;
```
Returns the necessary attributes


```php
protected function getTag(): string;
```





## Html\Helper\Style 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Style.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractSeries`

Class Style


### Methods

```php
public function add( string $href, array $attributes = [] );
```
Add an element to the list


```php
protected function getAttributes( string $href, array $attributes ): array;
```
Returns the necessary attributes


```php
protected function getTag(): string;
```





## Html\Helper\Title 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Title.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Title



### Properties
```php
/**
 * @var array
 */
protected $append;

/**
 * @var array
 */
protected $prepend;

/**
 * @var string
 */
protected $title = ;

/**
 * @var string
 */
protected $separator = ;

```

### Methods

```php
public function __invoke( string $separator = string, string $indent = null, string $delimiter = null ): Title;
```
Sets the separator and returns the object back


```php
public function __toString();
```
Returns the title tags


```php
public function append( string $text, bool $raw = bool ): Title;
```
Appends text to current document title


```php
public function get(): string;
```
Returns the title


```php
public function prepend( string $text, bool $raw = bool ): Title;
```
Prepends text to current document title


```php
public function set( string $text, bool $raw = bool ): Title;
```
Sets the title




## Html\Helper\Ul 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Helper/Ul.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    

-   __Extends__
    
    `Ol`

-   __Implements__
    

Class Ul


### Methods

```php
protected function getTag(): string;
```



## Html\Link\EvolvableLink

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Link/EvolvableLink.zep)


-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__

    - `Psr\Link\EvolvableLinkInterface`

-   __Extends__

    - `Link`

-   __Implements__

    - `EvolvableLinkInterface`


Class Phalcon\Http\Link\EvolvableLink



### Methods

```php
public function withAttribute( mixed $attribute, mixed $value );
```
Returns an instance with the specified attribute added.

If the specified attribute is already present, it will be overwritten
with the new value.


```php
public function withHref( mixed $href );
```
Returns an instance with the specified href.


```php
public function withRel( mixed $rel );
```
Returns an instance with the specified relationship included.

If the specified rel is already present, this method MUST return
normally without errors, but without adding the rel a second time.


```php
public function withoutAttribute( mixed $attribute );
```
Returns an instance with the specified attribute excluded.

If the specified attribute is not present, this method MUST return
normally without errors.


```php
public function withoutRel( mixed $rel );
```
Returns an instance with the specified relationship excluded.

If the specified rel is not present, this method MUST return
normally without errors.




## Html\Link\EvolvableLinkProvider 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Link/EvolvableLinkProvider.zep)


-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__
    
    - `Psr\Link\EvolvableLinkProviderInterface`
    - `Psr\Link\LinkInterface`

-   __Extends__
    
    `LinkProvider`

-   __Implements__
    
    - `EvolvableLinkProviderInterface`

Class Phalcon\Http\Link\LinkProvider



### Methods

```php
public function withLink( LinkInterface $link );
```
Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if link is === identical
to a link object already in the collection.


```php
public function withoutLink( LinkInterface $link );
```
Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if link is === identical to a link
object already in the collection.




## Html\Link\Link 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Link/Link.zep)


-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__
    
    - `Psr\Link\LinkInterface`
    - `Phalcon\Collection`
    - `Phalcon\Collection\CollectionInterface`

-   __Extends__
    

-   __Implements__
    
    - `LinkInterface`

Class Phalcon\Http\Link\Link


### Properties
```php
/**
 * @var Collection|CollectionInterface
 */
protected $attributes;

/**
 * @var string
 */
protected $href = '';

/**
 * @var Collection|CollectionInterface
 */
protected $rels;

/**
 * @var bool
 */
protected $templated = false;

```

### Methods

```php
public function __construct( string $rel = string, string $href = string, array $attributes = [] );
```
Link constructor.


```php
public function getAttributes();
```
Returns a list of attributes that describe the target URI.


```php
public function getHref();
```
Returns the target of the link.

The target link must be one of:
- An absolute URI, as defined by RFC 5988.
- A relative URI, as defined by RFC 5988. The base of the relative link
    is assumed to be known based on context by the client.
- A URI template as defined by RFC 6570.

If a URI template is returned, isTemplated() MUST return True.


```php
public function getRels();
```
Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.


```php
public function isTemplated();
```
Returns whether or not this is a templated link.


```php
protected function hrefIsTemplated( string $href ): bool;
```
Determines if a href is a templated link or not.

@see https://tools.ietf.org/html/rfc6570




## Html\Link\LinkProvider 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Link/LinkProvider.zep)


-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__
    
    - `Psr\Link\Interfaces\LinkInterface`
    - `Psr\Link\Interfaces\LinkProviderInterface`

-   __Extends__
    

-   __Implements__
    
    - `LinkProviderInterface`


### Properties
```php
/**
 * @var LinkInterface[]
 */
protected $links;

```

### Methods

```php
public function __construct( array $links = [] );
```
LinkProvider constructor.


```php
public function getLinks();
```
Returns an iterable of LinkInterface objects.

The iterable may be an array or any PHP \Traversable object. If no links
are available, an empty array or \Traversable MUST be returned.


```php
public function getLinksByRel( mixed $rel );
```
Returns an iterable of LinkInterface objects that have a specific
relationship.

The iterable may be an array or any PHP \Traversable object. If no links
with that relationship are available, an empty array or \Traversable
MUST be returned.


```php
protected function getKey( LinkInterface $link ): string;
```
Returns the object hash key




## Html\Link\Serializer\Header 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Link/Serializer/Header.zep)


-   __Namespace__

    - `Phalcon\Html\Link\Serializer`

-   __Uses__
    
    - `Psr\Link\EvolvableLinkInterface`
    
-   __Extends__
    

-   __Implements__
    
    - `SerializerInterface`

Class Phalcon\Http\Link\Serializer\Header


### Methods

```php
public function serialize( array $links ): string | null;
```
Serializes all the passed links to a HTTP link header




## Html\Link\Serializer\SerializerInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/Link/Serializer/SerializerInterface.zep)


-   __Namespace__

    - `Phalcon\Html\Link\Serializer`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Class Phalcon\Http\Link\Serializer\SerializerInterface


### Methods

```php
public function serialize( array $links ): string | null;
```
Serializer method




## Html\TagFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/4.2.x/phalcon/Html/TagFactory.zep)


-   __Namespace__

    - `Phalcon\Html`

-   __Uses__
    
    - `Phalcon\Escaper`
    - `Phalcon\Escaper\EscaperInterface`
    - `Phalcon\Factory\AbstractFactory`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

ServiceLocator implementation for Tag helpers.


### Properties
```php
/**
 * @var EscaperInterface
 */
private $escaper;

```

### Methods

```php
public function __construct( EscaperInterface $escaper, array $services = [] );
```
TagFactory constructor.


```php
public function newInstance( string $name ): mixed;
```



```php
protected function getAdapters(): array;
```
