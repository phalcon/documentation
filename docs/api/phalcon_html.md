---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`



## Html\Attributes 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes.zep)


-   __Namespace__

    - `Phalcon\Html`

-   __Uses__
    
    - `Phalcon\Html\Attributes\RenderInterface`
    - `Phalcon\Support\Collection`

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


```php
protected function renderAttributes( array $attributes ): string;
```
@todo remove this when we refactor forms. Maybe remove this class? Put it into traits




## Html\Attributes\AttributesInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes/AttributesInterface.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Attributes/RenderInterface.zep)


-   __Namespace__

    - `Phalcon\Html\Attributes`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

* Phalcon\Html\Attributes\RenderInterface
*
* Interface Phalcon\Html\Attributes\RenderInterface
*/

### Methods

```php
public function render(): string;
```
Generate a string represetation




## Html\Breadcrumbs 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Breadcrumbs.zep)


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
private $separator =  / ;

/**
 * The HTML template to use to render the breadcrumbs.
 *
 * @var string
 */
private $template = <dt><a href=\"%link%\">%label%</a></dt>;

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
public function setSeparator( string $separator ): Breadcrumbs;
```



```php
public function toArray(): array;
```
Returns the internal breadcrumbs array




## Html\Escaper 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper.zep)


-   __Namespace__

    - `Phalcon\Html`

-   __Uses__
    
    - `Phalcon\Html\Escaper\EscaperInterface`

-   __Extends__
    

-   __Implements__
    
    - `EscaperInterface`

Phalcon\Html\Escaper

Escapes different kinds of text securing them. By using this component you
may prevent XSS attacks.

This component only works with UTF-8. The PREG extension needs to be compiled
with UTF-8 support.

```php
$escaper = new \Phalcon\Html\Escaper();

$escaped = $escaper->escapeCss("font-family: <Verdana>");

echo $escaped; // font\2D family\3A \20 \3C Verdana\3E
```


### Properties
```php
/**
 * @var bool
 */
protected $doubleEncode = true;

/**
 * @var string
 */
protected $encoding = utf-8;

/**
 * ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401
 *
 * @var int
 */
protected $flags = 11;

```

### Methods

```php
public function attributes( mixed $input ): string;
```
Escapes a HTML attribute string or array

If the input is an array, the keys are the attribute names and the
values are attribute values. If a value is boolean (true/false) then
the attribute will have no value:
`['disabled' => true]` -> `'disabled``

The resulting string will have attribute pairs separated by a space.


```php
public function css( string $input ): string;
```
Escape CSS strings by replacing non-alphanumeric chars by their
hexadecimal escaped representation


```php
final public function detectEncoding( string $input ): string | null;
```
Detect the character encoding of a string to be handled by an encoder.
Special-handling for chr(172) and chr(128) to chr(159) which fail to be
detected by mb_detect_encoding()


```php
public function escapeCss( string $input ): string;
```
Escape CSS strings by replacing non-alphanumeric chars by their
hexadecimal escaped representation


```php
public function escapeHtml( string $input = null ): string;
```
Escapes a HTML string. Internally uses htmlspecialchars


```php
public function escapeHtmlAttr( string $input = null ): string;
```
Escapes a HTML attribute string


```php
public function escapeJs( string $input ): string;
```
Escape JavaScript strings by replacing non-alphanumeric chars by their
hexadecimal escaped representation


```php
public function escapeUrl( string $input ): string;
```
Escapes a URL. Internally uses rawurlencode


```php
public function getEncoding(): string;
```



```php
public function getFlags(): int;
```



```php
public function html( string $input = null ): string;
```
Escapes a HTML string. Internally uses htmlspecialchars


```php
public function js( string $input ): string;
```
Escape javascript strings by replacing non-alphanumeric chars by their
hexadecimal escaped representation


```php
final public function normalizeEncoding( string $input ): string;
```
Utility to normalize a string's encoding to UTF-32.


```php
public function setDoubleEncode( bool $doubleEncode ): Escaper;
```
Sets the double_encode to be used by the escaper

```php
$escaper->setDoubleEncode(false);
```


```php
public function setEncoding( string $encoding ): EscaperInterface;
```
Sets the encoding to be used by the escaper

```php
$escaper->setEncoding("utf-8");
```


```php
public function setFlags( int $flags ): EscaperInterface;
```
Sets the HTML quoting type for htmlspecialchars

```php
$escaper->setFlags(ENT_XHTML);
```


```php
public function setHtmlQuoteType( int $flags ): EscaperInterface;
```
Sets the HTML quoting type for htmlspecialchars

```php
$escaper->setHtmlQuoteType(ENT_XHTML);
```


```php
public function url( string $input ): string;
```
Escapes a URL. Internally uses rawurlencode


```php
protected function phpHtmlSpecialChars( string $input ): string;
```
Proxy method for testing




## Html\Escaper\EscaperInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/EscaperInterface.zep)


-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Interface for Phalcon\Html\Escaper


### Methods

```php
public function attributes( string $input ): string;
```
Escapes a HTML attribute string


```php
public function css( string $input ): string;
```
Escape CSS strings by replacing non-alphanumeric chars by their
hexadecimal representation


```php
public function getEncoding(): string;
```
Returns the internal encoding used by the escaper


```php
public function html( string $input ): string;
```
Escapes a HTML string


```php
public function js( string $input ): string;
```
Escape Javascript strings by replacing non-alphanumeric chars by their
hexadecimal representation


```php
public function setEncoding( string $encoding ): EscaperInterface;
```
Sets the encoding to be used by the escaper


```php
public function setFlags( int $flags ): EscaperInterface;
```
Sets the HTML quoting type for htmlspecialchars


```php
public function url( string $input ): string;
```
Escapes a URL. Internally uses rawurlencode




## Html\Escaper\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Escaper/Exception.zep)


-   __Namespace__

    - `Phalcon\Html\Escaper`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Exceptions thrown in Phalcon\Html\Escaper will use this class



## Html\EscaperFactory 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/EscaperFactory.zep)


-   __Namespace__

    - `Phalcon\Html`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Class EscaperFactory


### Methods

```php
public function newInstance(): Escaper;
```
Create a new instance of the object




## Html\Exception 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Exception.zep)


-   __Namespace__

    - `Phalcon\Html`

-   __Uses__
    

-   __Extends__
    
    `\Exception`

-   __Implements__
    

Phalcon\Html\Tag\Exception

Exceptions thrown in Phalcon\Html\Tag will use this class



## Html\Helper\AbstractHelper ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractHelper.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Exception`

-   __Extends__
    

-   __Implements__
    

@property string           $delimiter
@property EscaperInterface $escaper
@property string           $indent
@property int              $indentLevel


### Properties
```php
/**
 * @var string
 */
protected $delimiter = ;

/**
 * @var EscaperInterface
 */
protected $escaper;

/**
 * @var string
 */
protected $indent =     ;

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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractList.zep)


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
protected $elementTag = li;

/**
 * @var array
 */
protected $store;

```

### Methods

```php
public function __invoke( string $indent = string, string $delimiter = null, array $attributes = [] ): AbstractList;
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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/AbstractSeries.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

@property array $attributes
@property array $store


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
public function __invoke( string $indent = string, string $delimiter = null ): AbstractSeries;
```



```php
public function __toString();
```
Generates and returns the HTML for the list.


```php
public function reset(): AbstractSeries;
```
Resets the internal store.


```php
abstract protected function getTag(): string;
```
Returns the tag name.




## Html\Helper\Anchor 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Anchor.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Base.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Body.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Button.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Close.zep)


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




## Html\Helper\Doctype 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Doctype.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

Creates Doctype tags


### Constants
```php
const HTML32 = 1;
const HTML401_FRAMESET = 4;
const HTML401_STRICT = 2;
const HTML401_TRANSITIONAL = 3;
const HTML5 = 5;
const XHTML10_FRAMESET = 8;
const XHTML10_STRICT = 6;
const XHTML10_TRANSITIONAL = 7;
const XHTML11 = 9;
const XHTML20 = 10;
const XHTML5 = 11;
```

### Properties
```php
/**
 * @var string
 */
private $delimiter;

/**
 * @var int
 */
private $flag;

```

### Methods

```php
public function __construct();
```



```php
public function __invoke( int $flag = static-constant-access, string $delimiter = string ): Doctype;
```
Produce a <doctype> tag


```php
public function __toString(): string;
```





## Html\Helper\Element 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Element.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Form.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Img.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/AbstractInput.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    
    - `Phalcon\Html\Helper\AbstractHelper`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class AbstractInput

@property array  $attributes
@property string $type
@property string $value


### Properties
```php
/**
 * @var string
 */
protected $type = text;

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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Checkbox.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    
    - `Phalcon\Html\Escaper\EscaperInterface`

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Checkbox

@property array $label


### Properties
```php
/**
 * @var array
 */
protected $label;

/**
 * @var string
 */
protected $type = checkbox;

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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Color.zep)


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
protected $type = color;

```


## Html\Helper\Input\Date 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Date.zep)


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
protected $type = date;

```


## Html\Helper\Input\DateTime 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/DateTime.zep)


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
protected $type = datetime;

```


## Html\Helper\Input\DateTimeLocal 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/DateTimeLocal.zep)


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
protected $type = datetime-local;

```


## Html\Helper\Input\Email 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Email.zep)


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
protected $type = email;

```


## Html\Helper\Input\File 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/File.zep)


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
protected $type = file;

```


## Html\Helper\Input\Hidden 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Hidden.zep)


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
protected $type = hidden;

```


## Html\Helper\Input\Image 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Image.zep)


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
protected $type = image;

```


## Html\Helper\Input\Input 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Input.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Month.zep)


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
protected $type = month;

```


## Html\Helper\Input\Numeric 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Numeric.zep)


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
protected $type = number;

```


## Html\Helper\Input\Password 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Password.zep)


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
protected $type = password;

```


## Html\Helper\Input\Radio 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Radio.zep)


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
protected $type = radio;

```


## Html\Helper\Input\Range 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Range.zep)


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
protected $type = range;

```


## Html\Helper\Input\Search 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Search.zep)


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
protected $type = search;

```


## Html\Helper\Input\Select 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Select.zep)


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
protected $elementTag = option;

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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Submit.zep)


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
protected $type = submit;

```


## Html\Helper\Input\Tel 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Tel.zep)


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
protected $type = tel;

```


## Html\Helper\Input\Text 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Text.zep)


-   __Namespace__

    - `Phalcon\Html\Helper\Input`

-   __Uses__
    

-   __Extends__
    
    `AbstractInput`

-   __Implements__
    

Class Text



## Html\Helper\Input\Textarea 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Textarea.zep)


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
protected $type = textarea;

```

### Methods

```php
public function __toString();
```
Returns the HTML for the input.




## Html\Helper\Input\Time 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Time.zep)


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
protected $type = time;

```


## Html\Helper\Input\Url 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Url.zep)


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
protected $type = url;

```


## Html\Helper\Input\Week 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Input/Week.zep)


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
protected $type = week;

```


## Html\Helper\Label 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Label.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Link.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Meta.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Ol.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Script.zep)


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





## Html\Helper\Style 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Style.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractSeries`

-   __Implements__
    

Class Style


### Properties
```php
/**
 * @var bool
 */
private $isStyle = false;

```

### Methods

```php
public function add( string $url, array $attributes = [] );
```
Add an element to the list


```php
public function setStyle( bool $flag ): Style;
```
Sets if this is a style or link tag


```php
protected function getAttributes( string $url, array $attributes ): array;
```
Returns the necessary attributes


```php
protected function getTag(): string;
```





## Html\Helper\Title 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Title.zep)


-   __Namespace__

    - `Phalcon\Html\Helper`

-   __Uses__
    
    - `Phalcon\Html\Exception`

-   __Extends__
    
    `AbstractHelper`

-   __Implements__
    

Class Title

@property array  $append
@property string $delimiter
@property string $indent
@property array  $prepend
@property string $title
@property string $separator


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
public function __invoke( string $indent = string, string $delimiter = null ): Title;
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


```php
public function setSeparator( string $separator, bool $raw = bool ): Title;
```
Sets the separator




## Html\Helper\Ul 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Helper/Ul.zep)


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





## Html\Link\AbstractLink ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/AbstractLink.zep)


-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__
    
    - `Phalcon\Support\Collection`

-   __Extends__
    

-   __Implements__
    

@property array  $attributes
@property string $href
@property array  $rels
@property bool   $templated


### Properties
```php
/**
 * @var Collection
 */
protected $attributes;

/**
 * @var string
 */
protected $href = ;

/**
 * @var Collection
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
protected function doGetAttributes(): array;
```
Returns a list of attributes that describe the target URI.


```php
protected function doGetHref(): string;
```
Returns the target of the link.

The target link must be one of:
- An absolute URI, as defined by RFC 5988.
- A relative URI, as defined by RFC 5988. The base of the relative link
    is assumed to be known based on context by the client.
- A URI template as defined by RFC 6570.

If a URI template is returned, isTemplated() MUST return True.


```php
protected function doGetRels(): array;
```
Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.


```php
protected function doIsTemplated(): bool;
```
Returns whether this is a templated link.


```php
protected function doWithAttribute( string $key, mixed $value );
```



```php
protected function doWithHref( string $href );
```



```php
protected function doWithRel( string $key );
```



```php
protected function doWithoutAttribute( string $key );
```
   


```php
protected function doWithoutRel( string $key );
```
   


```php
protected function hrefIsTemplated( string $href ): bool;
```
Determines if a href is a templated link or not.

@see https://tools.ietf.org/html/rfc6570




## Html\Link\AbstractLinkProvider ![Abstract](../assets/images/abstract-green.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/AbstractLinkProvider.zep)


-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__
    
    - `Phalcon\Html\Link\Interfaces\LinkInterface`

-   __Extends__
    

-   __Implements__
    

@property array $links


### Properties
```php
/**
 * @var array
 */
protected $links;

```

### Methods

```php
public function __construct( array $links = [] );
```
LinkProvider constructor.


```php
protected function doGetLinks(): array;
```
Returns an iterable of LinkInterface objects.

The iterable may be an array or any PHP \Traversable object. If no links
are available, an empty array or \Traversable MUST be returned.


```php
protected function doGetLinksByRel( string $rel ): array;
```
Returns an iterable of LinkInterface objects that have a specific
relationship.

The iterable may be an array or any PHP \Traversable object. If no links
with that relationship are available, an empty array or \Traversable
MUST be returned.


```php
protected function doWithLink( mixed $link );
```
Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if $link is === identical
to a link object already in the collection.


```php
protected function doWithoutLink( mixed $link );
```
Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if $link is === identical to a link
object already in the collection.


```php
protected function getKey( mixed $link ): string;
```
Returns the object hash key




## Html\Link\EvolvableLink 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/EvolvableLink.zep)


-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__
    
    - `Phalcon\Html\Link\Interfaces\EvolvableLinkInterface`

-   __Extends__
    
    `Link`

-   __Implements__
    
    - `EvolvableLinkInterface`

Class Phalcon\Http\Link\EvolvableLink

@property array  attributes
@property string href
@property array  rels
@property bool   templated


### Methods

```php
public function withAttribute( mixed $attribute, mixed $value ): EvolvableLinkInterface;
```
Returns an instance with the specified attribute added.

If the specified attribute is already present, it will be overwritten
with the new value.


```php
public function withHref( string $href ): EvolvableLinkInterface;
```
Returns an instance with the specified href.


```php
public function withRel( string $rel ): EvolvableLinkInterface;
```
Returns an instance with the specified relationship included.

If the specified rel is already present, this method MUST return
normally without errors, but without adding the rel a second time.


```php
public function withoutAttribute( string $attribute ): EvolvableLinkInterface;
```
Returns an instance with the specified attribute excluded.

If the specified attribute is not present, this method MUST return
normally without errors.


```php
public function withoutRel( string $rel ): EvolvableLinkInterface;
```
Returns an instance with the specified relationship excluded.

If the specified rel is not present, this method MUST return
normally without errors.




## Html\Link\EvolvableLinkProvider 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/EvolvableLinkProvider.zep)


-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__
    
    - `Phalcon\Html\Link\Interfaces\EvolvableLinkProviderInterface`
    - `Phalcon\Html\Link\Interfaces\LinkInterface`

-   __Extends__
    
    `LinkProvider`

-   __Implements__
    
    - `EvolvableLinkProviderInterface`

Class Phalcon\Http\Link\LinkProvider

@property LinkInterface[] links


### Methods

```php
public function withLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```
Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if link is === identical
to a link object already in the collection.


```php
public function withoutLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```
Returns an instance with the specified link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if link is === identical to a link
object already in the collection.




## Html\Link\Interfaces\EvolvableLinkInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/EvolvableLinkInterface.zep)


-   __Namespace__

    - `Phalcon\Html\Link\Interfaces`

-   __Uses__
    

-   __Extends__
    
    `LinkInterface`

-   __Implements__
    

An evolvable link value object.


### Methods

```php
public function withAttribute( string $attribute, string $value ): EvolvableLinkInterface;
```
Returns an instance with the specified attribute added.

If the specified attribute is already present, it will be overwritten
with the new value.


```php
public function withHref( string $href ): EvolvableLinkInterface;
```
Returns an instance with the specified href.


```php
public function withRel( string $rel ): EvolvableLinkInterface;
```
Returns an instance with the specified relationship included.

If the specified rel is already present, this method MUST return
normally without errors, but without adding the rel a second time.


```php
public function withoutAttribute( string $attribute ): EvolvableLinkInterface;
```
Returns an instance with the specified attribute excluded.

If the specified attribute is not present, this method MUST return
normally without errors.


```php
public function withoutRel( string $rel ): EvolvableLinkInterface;
```
Returns an instance with the specified relationship excluded.

If the specified rel is already not present, this method MUST return
normally without errors.




## Html\Link\Interfaces\EvolvableLinkProviderInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/EvolvableLinkProviderInterface.zep)


-   __Namespace__

    - `Phalcon\Html\Link\Interfaces`

-   __Uses__
    

-   __Extends__
    
    `LinkProviderInterface`

-   __Implements__
    

An evolvable link provider value object.


### Methods

```php
public function withLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```
Returns an instance with the specified link included.

If the specified link is already present, this method MUST return
normally without errors. The link is present if $link is === identical
to a link object already in the collection.


```php
public function withoutLink( LinkInterface $link ): EvolvableLinkProviderInterface;
```
Returns an instance with the specifed link removed.

If the specified link is not present, this method MUST return normally
without errors. The link is present if $link is === identical to a link
object already in the collection.




## Html\Link\Interfaces\LinkInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/LinkInterface.zep)


-   __Namespace__

    - `Phalcon\Html\Link\Interfaces`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

A readable link object.


### Methods

```php
public function getAttributes(): array;
```
Returns a list of attributes that describe the target URI.


```php
public function getHref(): string;
```
Returns the target of the link.

The target link must be one of:
- An absolute URI, as defined by RFC 5988.
- A relative URI, as defined by RFC 5988. The base of the relative link
    is assumed to be known based on context by the client.
- A URI template as defined by RFC 6570.

If a URI template is returned, isTemplated() MUST return True.


```php
public function getRels(): array;
```
Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.


```php
public function isTemplated(): bool;
```
Returns whether this is a templated link.




## Html\Link\Interfaces\LinkProviderInterface ![Interface](../assets/images/interface-blue.svg) 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Interfaces/LinkProviderInterface.zep)


-   __Namespace__

    - `Phalcon\Html\Link\Interfaces`

-   __Uses__
    

-   __Extends__
    

-   __Implements__
    

A link provider object.


### Methods

```php
public function getLinks(): array;
```
Returns an array of LinkInterface objects.


```php
public function getLinksByRel( string $rel ): array;
```
Returns an array of LinkInterface objects that have a specific
relationship.




## Html\Link\Link 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Link.zep)


-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__
    
    - `Phalcon\Html\Link\Interfaces\LinkInterface`
    - `Phalcon\Support\Collection`
    - `Phalcon\Support\Collection\CollectionInterface`

-   __Extends__
    
    `AbstractLink`

-   __Implements__
    
    - `LinkInterface`

Class Phalcon\Http\Link\Link

@property array  attributes
@property string href
@property array  rels
@property bool   templated


### Methods

```php
public function getAttributes(): array;
```
Returns a list of attributes that describe the target URI.


```php
public function getHref(): string;
```
Returns the target of the link.

The target link must be one of:
- An absolute URI, as defined by RFC 5988.
- A relative URI, as defined by RFC 5988. The base of the relative link
    is assumed to be known based on context by the client.
- A URI template as defined by RFC 6570.

If a URI template is returned, isTemplated() MUST return True.


```php
public function getRels(): array;
```
Returns the relationship type(s) of the link.

This method returns 0 or more relationship types for a link, expressed
as an array of strings.


```php
public function isTemplated(): bool;
```
Returns whether or not this is a templated link.




## Html\Link\LinkProvider 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/LinkProvider.zep)


-   __Namespace__

    - `Phalcon\Html\Link`

-   __Uses__
    
    - `Phalcon\Html\Link\Interfaces\LinkInterface`
    - `Phalcon\Html\Link\Interfaces\LinkProviderInterface`

-   __Extends__
    
    `AbstractLinkProvider`

-   __Implements__
    
    - `LinkProviderInterface`

@property LinkInterface[] links


### Methods

```php
public function getLinks(): array;
```
Returns an iterable of LinkInterface objects.

The iterable may be an array or any PHP \Traversable object. If no links
are available, an empty array or \Traversable MUST be returned.


```php
public function getLinksByRel( mixed $rel ): array;
```
Returns an iterable of LinkInterface objects that have a specific
relationship.

The iterable may be an array or any PHP \Traversable object. If no links
with that relationship are available, an empty array or \Traversable
MUST be returned.




## Html\Link\Serializer\Header 

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Serializer/Header.zep)


-   __Namespace__

    - `Phalcon\Html\Link\Serializer`

-   __Uses__
    

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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/Link/Serializer/SerializerInterface.zep)


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

[Source on GitHub](https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Html/TagFactory.zep)


-   __Namespace__

    - `Phalcon\Html`

-   __Uses__
    
    - `Phalcon\Factory\AbstractFactory`
    - `Phalcon\Html\Escaper\EscaperInterface`
    - `Phalcon\Html\Helper\Doctype`
    - `Phalcon\Html\Helper\Input\Checkbox`
    - `Phalcon\Html\Helper\Input\Color`
    - `Phalcon\Html\Helper\Input\Date`
    - `Phalcon\Html\Helper\Input\DateTime`
    - `Phalcon\Html\Helper\Input\DateTimeLocal`
    - `Phalcon\Html\Helper\Input\Email`
    - `Phalcon\Html\Helper\Input\File`
    - `Phalcon\Html\Helper\Input\Hidden`
    - `Phalcon\Html\Helper\Input\Image`
    - `Phalcon\Html\Helper\Input\Input`
    - `Phalcon\Html\Helper\Input\Month`
    - `Phalcon\Html\Helper\Input\Numeric`
    - `Phalcon\Html\Helper\Input\Password`
    - `Phalcon\Html\Helper\Input\Radio`
    - `Phalcon\Html\Helper\Input\Range`
    - `Phalcon\Html\Helper\Input\Search`
    - `Phalcon\Html\Helper\Input\Select`
    - `Phalcon\Html\Helper\Input\Submit`
    - `Phalcon\Html\Helper\Input\Tel`
    - `Phalcon\Html\Helper\Input\Text`
    - `Phalcon\Html\Helper\Input\Textarea`
    - `Phalcon\Html\Helper\Input\Time`
    - `Phalcon\Html\Helper\Input\Url`
    - `Phalcon\Html\Helper\Input\Week`
    - `Phalcon\Html\Helper\Meta`
    - `Phalcon\Html\Helper\Ol`
    - `Phalcon\Html\Helper\Script`
    - `Phalcon\Html\Helper\Style`
    - `Phalcon\Html\Helper\Title`
    - `Phalcon\Html\Helper\Ul`
    - `Phalcon\Html\Link\Link`

-   __Extends__
    
    `AbstractFactory`

-   __Implements__
    

ServiceLocator implementation for Tag helpers.

Services are registered using the constructor using a key-value pair. The
key is the name of the tag helper, while the value is a callable that returns
the object.

The class implements `__call()` to allow calling helper objects as methods.

@property EscaperInterface $escaper
@property array            $services

@method string        a(string $href, string $text, array $attributes = [], bool $raw = false)
@method string        base(string $href, array $attributes = [])
@method string        body(array $attributes = [])
@method string        button(string $text, array $attributes = [], bool $raw = false)
@method string        close(string $tag, bool $raw = false)
@method Doctype       doctype(int $flag, string $delimiter)
@method string        element(string $tag, string $text, array $attributes = [], bool $raw = false)
@method string        form(array $attributes = [])
@method string        img(string $src, array $attributes = [])
@method Checkbox      inputCheckbox(string $name, string $value = null, array $attributes = [])
@method Color         inputColor(string $name, string $value = null, array $attributes = [])
@method Date          inputDate(string $name, string $value = null, array $attributes = [])
@method DateTime      inputDateTime(string $name, string $value = null, array $attributes = [])
@method DateTimeLocal inputDateTimeLocal(string $name, string $value = null, array $attributes = [])
@method Email         inputEmail(string $name, string $value = null, array $attributes = [])
@method File          inputFile(string $name, string $value = null, array $attributes = [])
@method Hidden        inputHidden(string $name, string $value = null, array $attributes = [])
@method Image         inputImage(string $name, string $value = null, array $attributes = [])
@method Input         inputInput(string $name, string $value = null, array $attributes = [])
@method Month         inputMonth(string $name, string $value = null, array $attributes = [])
@method Numeric       inputNumeric(string $name, string $value = null, array $attributes = [])
@method Password      inputPassword(string $name, string $value = null, array $attributes = [])
@method Radio         inputRadio(string $name, string $value = null, array $attributes = [])
@method Range         inputRange(string $name, string $value = null, array $attributes = [])
@method Search        inputSearch(string $name, string $value = null, array $attributes = [])
@method Select        inputSelect(string $name, string $value = null, array $attributes = [])
@method Submit        inputSubmit(string $name, string $value = null, array $attributes = [])
@method Tel           inputTel(string $name, string $value = null, array $attributes = [])
@method Text          inputText(string $name, string $value = null, array $attributes = [])
@method Textarea      inputTextarea(string $name, string $value = null, array $attributes = [])
@method Time          inputTime(string $name, string $value = null, array $attributes = [])
@method Url           inputUrl(string $name, string $value = null, array $attributes = [])
@method Week          inputWeek(string $name, string $value = null, array $attributes = [])
@method string        label(string $label, array $attributes = [], bool $raw = false)
@method Link          link(string $indent = '    ', string $delimiter = PHP_EOL)
@method Meta          meta(string $indent = '    ', string $delimiter = PHP_EOL)
@method Ol            ol(string $text, array $attributes = [], bool $raw = false)
@method Script        script(string $indent = '    ', string $delimiter = PHP_EOL)
@method Style         style(string $indent = '    ', string $delimiter = PHP_EOL)
@method Title         title(string $indent = '    ', string $delimiter = PHP_EOL)
@method Ul            ul(string $text, array $attributes = [], bool $raw = false)


### Properties
```php
/**
 * @var EscaperInterface
 */
private $escaper;

/**
 * @var array
 */
protected $services;

```

### Methods

```php
public function __call( string $name, array $arguments );
```
Magic call to make the helper objects available as methods.


```php
public function __construct( EscaperInterface $escaper, array $services = [] );
```
TagFactory constructor.


```php
public function has( string $name ): bool;
```



```php
public function newInstance( string $name ): mixed;
```
Create a new instance of the object


```php
public function set( string $name, mixed $method ): void;
```



```php
protected function getExceptionClass(): string;
```



```php
protected function getServices(): array;
```
Returns the available services


