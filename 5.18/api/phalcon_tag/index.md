---
title: "Phalcon Tag"
version: "5.18"
---

> Documentation Index
> Fetch the complete documentation index at: https://docs.phalcon.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Phalcon Tag

:::info[NOTE]
All classes are prefixed with `Phalcon`
:::

## Tag

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Tag.zep">Source on GitHub</a>

Phalcon\Tag is designed to simplify building of HTML tags.
It provides a set of helpers to generate HTML in a dynamic way.
This component is a class that you can extend to add more helpers.

<div class="api-tree">

- **`Phalcon\Tag`**

</div>

__Uses__ `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Link\Link` · `Phalcon\Html\Link\Serializer\Header` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Support\Helper\Str\Friendly` · `Phalcon\Tag\Exception` · `Phalcon\Tag\Select`

### Method Summary

<div class="api-list">
<a class="api-item" href="#tag-appendtitle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">appendTitle</span>( <span class="st">mixed</span> <span class="sv">$title</span> )</code>
<span class="desc">Appends a text to current document title</span>
</a>
<a class="api-item" href="#tag-checkfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">checkField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;check&quot;] tag</span>
</a>
<a class="api-item" href="#tag-colorfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">colorField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;color&quot;] tag</span>
</a>
<a class="api-item" href="#tag-datefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dateField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;date&quot;] tag</span>
</a>
<a class="api-item" href="#tag-datetimefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dateTimeField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;datetime&quot;] tag</span>
</a>
<a class="api-item" href="#tag-datetimelocalfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dateTimeLocalField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;datetime-local&quot;] tag</span>
</a>
<a class="api-item" href="#tag-displayto">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">displayTo</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Alias of Phalcon\Tag::setDefault()</span>
</a>
<a class="api-item" href="#tag-emailfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">emailField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;email&quot;] tag</span>
</a>
<a class="api-item" href="#tag-endform">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">endForm</span>()</code>
<span class="desc">Builds a HTML close FORM tag</span>
</a>
<a class="api-item" href="#tag-filefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">fileField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;file&quot;] tag</span>
</a>
<a class="api-item" href="#tag-formlegacy">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">formLegacy</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML FORM tag</span>
</a>
<a class="api-item" href="#tag-friendlytitle">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">friendlyTitle</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$separator</span><span class="sm"> = &quot;-&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$lowercase</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$replace</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Converts texts into URL-friendly titles</span>
</a>
<a class="api-item" href="#tag-getdi">
<code class="vis vis-public">public</code>
<code class="ret">DiInterface</code>
<code class="sig"><span class="sf">getDI</span>()</code>
<span class="desc">Internally gets the request dispatcher</span>
</a>
<a class="api-item" href="#tag-getdoctype">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getDocType</span>()</code>
<span class="desc">Get the document type declaration of content</span>
</a>
<a class="api-item" href="#tag-getescaper">
<code class="vis vis-public">public</code>
<code class="ret">EscaperInterface|null</code>
<code class="sig"><span class="sf">getEscaper</span>( <span class="st">array</span> <span class="sv">$params</span> )</code>
<span class="desc">Obtains the &#039;escaper&#039; service if required</span>
</a>
<a class="api-item" href="#tag-getescaperservice">
<code class="vis vis-public">public</code>
<code class="ret">EscaperInterface</code>
<code class="sig"><span class="sf">getEscaperService</span>()</code>
<span class="desc">Returns an Escaper service from the default DI</span>
</a>
<a class="api-item" href="#tag-gettitle">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTitle</span>(<span class="prm"><span class="st">bool</span> <span class="sv">$prepend</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$append</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Gets the current document title. The title will be automatically escaped.</span>
</a>
<a class="api-item" href="#tag-gettitleseparator">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getTitleSeparator</span>()</code>
<span class="desc">Gets the current document title separator</span>
</a>
<a class="api-item" href="#tag-geturlservice">
<code class="vis vis-public">public</code>
<code class="ret">UrlInterface</code>
<code class="sig"><span class="sf">getUrlService</span>()</code>
<span class="desc">Returns a URL service from the default DI</span>
</a>
<a class="api-item" href="#tag-getvalue">
<code class="vis vis-public">public</code>
<code class="sig"><span class="sf">getValue</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$params</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Every helper calls this function to check whether a component has a</span>
</a>
<a class="api-item" href="#tag-hasvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasValue</span>( <span class="st">mixed</span> <span class="sv">$name</span> )</code>
<span class="desc">Check if a helper has a default value set using Phalcon\Tag::setDefault()</span>
</a>
<a class="api-item" href="#tag-hiddenfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">hiddenField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;hidden&quot;] tag</span>
</a>
<a class="api-item" href="#tag-image">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">image</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$parameters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Builds HTML IMG tags</span>
</a>
<a class="api-item" href="#tag-imageinput">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">imageInput</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;image&quot;] tag</span>
</a>
<a class="api-item" href="#tag-javascriptinclude">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">javascriptInclude</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$parameters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Builds a SCRIPT[type=&quot;javascript&quot;] tag</span>
</a>
<a class="api-item" href="#tag-linkto">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">linkTo</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$text</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$local</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Builds a HTML A tag using framework conventions</span>
</a>
<a class="api-item" href="#tag-monthfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">monthField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;month&quot;] tag</span>
</a>
<a class="api-item" href="#tag-numericfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">numericField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;number&quot;] tag</span>
</a>
<a class="api-item" href="#tag-passwordfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">passwordField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;password&quot;] tag</span>
</a>
<a class="api-item" href="#tag-preload">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">preload</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Parses the preload element passed and sets the necessary link headers</span>
</a>
<a class="api-item" href="#tag-prependtitle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">prependTitle</span>( <span class="st">mixed</span> <span class="sv">$title</span> )</code>
<span class="desc">Prepends a text to current document title</span>
</a>
<a class="api-item" href="#tag-radiofield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">radioField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;radio&quot;] tag</span>
</a>
<a class="api-item" href="#tag-rangefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">rangeField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;range&quot;] tag</span>
</a>
<a class="api-item" href="#tag-renderattributes">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">renderAttributes</span>(<span class="prm"><span class="st">string</span> <span class="sv">$code</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$attributes</span></span>)</code>
<span class="desc">Renders parameters keeping order in their HTML attributes</span>
</a>
<a class="api-item" href="#tag-rendertitle">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">renderTitle</span>(<span class="prm"><span class="st">bool</span> <span class="sv">$prepend</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$append</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Renders the title with title tags. The title is automatically escaped</span>
</a>
<a class="api-item" href="#tag-resetinput">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">resetInput</span>()</code>
<span class="desc">Resets the request and internal values to avoid those fields will have</span>
</a>
<a class="api-item" href="#tag-searchfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">searchField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;search&quot;] tag</span>
</a>
<a class="api-item" href="#tag-select">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">select</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Builds a HTML SELECT tag using a Phalcon\Mvc\Model resultset as options</span>
</a>
<a class="api-item" href="#tag-selectstatic">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">selectStatic</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Builds a HTML SELECT tag using a PHP array for options</span>
</a>
<a class="api-item" href="#tag-setautoescape">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setAutoescape</span>( <span class="st">bool</span> <span class="sv">$autoescape</span> )</code>
<span class="desc">Set autoescape mode in generated HTML</span>
</a>
<a class="api-item" href="#tag-setdi">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDI</span>( <span class="st">DiInterface</span> <span class="sv">$container</span> )</code>
<span class="desc">Sets the dependency injector container.</span>
</a>
<a class="api-item" href="#tag-setdefault">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefault</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span></span>)</code>
<span class="desc">Assigns default values to generated tags by helpers</span>
</a>
<a class="api-item" href="#tag-setdefaults">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDefaults</span>(<span class="prm"><span class="st">array</span> <span class="sv">$values</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$merge</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Assigns default values to generated tags by helpers</span>
</a>
<a class="api-item" href="#tag-setdoctype">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setDocType</span>( <span class="st">int</span> <span class="sv">$doctype</span> )</code>
<span class="desc">Set the document type of content</span>
</a>
<a class="api-item" href="#tag-settitle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setTitle</span>( <span class="st">string</span> <span class="sv">$title</span> )</code>
<span class="desc">Set the title of view content</span>
</a>
<a class="api-item" href="#tag-settitleseparator">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">setTitleSeparator</span>( <span class="st">string</span> <span class="sv">$titleSeparator</span> )</code>
<span class="desc">Set the title separator of view content</span>
</a>
<a class="api-item" href="#tag-stylesheetlink">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">stylesheetLink</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$parameters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Builds a LINK[rel=&quot;stylesheet&quot;] tag</span>
</a>
<a class="api-item" href="#tag-submitbutton">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">submitButton</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;submit&quot;] tag</span>
</a>
<a class="api-item" href="#tag-taghtml">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">tagHtml</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tagName</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$parameters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$selfClose</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$onlyStart</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$useEol</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Builds a HTML tag</span>
</a>
<a class="api-item" href="#tag-taghtmlclose">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">tagHtmlClose</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tagName</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$useEol</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Builds a HTML tag closing tag</span>
</a>
<a class="api-item" href="#tag-telfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">telField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;tel&quot;] tag</span>
</a>
<a class="api-item" href="#tag-textarea">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">textArea</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML TEXTAREA tag</span>
</a>
<a class="api-item" href="#tag-textfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">textField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;text&quot;] tag</span>
</a>
<a class="api-item" href="#tag-timefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">timeField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;time&quot;] tag</span>
</a>
<a class="api-item" href="#tag-urlfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">urlField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;url&quot;] tag</span>
</a>
<a class="api-item" href="#tag-weekfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">weekField</span>( <span class="st">mixed</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;week&quot;] tag</span>
</a>
<a class="api-item" href="#tag-inputfield">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">inputField</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$asValue</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Builds generic INPUT tags</span>
</a>
<a class="api-item" href="#tag-inputfieldchecked">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">inputFieldChecked</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$parameters</span></span>)</code>
<span class="desc">Builds INPUT tags that implements the checked attribute</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HTML32</span><span class="sm"> = 1</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HTML401_FRAMESET</span><span class="sm"> = 4</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HTML401_STRICT</span><span class="sm"> = 2</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HTML401_TRANSITIONAL</span><span class="sm"> = 3</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">HTML5</span><span class="sm"> = 5</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML10_FRAMESET</span><span class="sm"> = 8</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML10_STRICT</span><span class="sm"> = 6</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML10_TRANSITIONAL</span><span class="sm"> = 7</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML11</span><span class="sm"> = 9</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML20</span><span class="sm"> = 10</span></code>
</div>
<div class="api-item">
<code class="ret">int</code>
<code class="sig"><span class="sc">XHTML5</span><span class="sm"> = 11</span></code>
</div>
</div>

### Properties

<div class="api-list">
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">bool</code>
<code class="sig"><span class="sv">$autoEscape</span><span class="sm"> = true</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">DiInterface|null</code>
<code class="sig"><span class="sv">$container</span><span class="sm"> = null</span></code>
<span class="desc">DI Container</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$displayValues</span></code>
<span class="desc">Pre-assigned values for components</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$documentAppendTitle</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$documentPrependTitle</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$documentTitle</span><span class="sm"> = null</span></code>
<span class="desc">HTML document title</span>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$documentTitleSeparator</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">int</code>
<code class="sig"><span class="sv">$documentType</span><span class="sm"> = 11</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">EscaperInterface|null</code>
<code class="sig"><span class="sv">$escaperService</span><span class="sm"> = null</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">UrlInterface|null</code>
<code class="sig"><span class="sv">$urlService</span><span class="sm"> = null</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 56</div>

<h4 id="tag-appendtitle"><code>appendTitle()</code></h4>

```php
public static function appendTitle( mixed $title ): void;
```

Appends a text to current document title

<h4 id="tag-checkfield"><code>checkField()</code></h4>

```php
public static function checkField( mixed $parameters ): string;
```

Builds a HTML input[type="check"] tag

<h4 id="tag-colorfield"><code>colorField()</code></h4>

```php
public static function colorField( mixed $parameters ): string;
```

Builds a HTML input[type="color"] tag

<h4 id="tag-datefield"><code>dateField()</code></h4>

```php
public static function dateField( mixed $parameters ): string;
```

Builds a HTML input[type="date"] tag

<h4 id="tag-datetimefield"><code>dateTimeField()</code></h4>

```php
public static function dateTimeField( mixed $parameters ): string;
```

Builds a HTML input[type="datetime"] tag

<h4 id="tag-datetimelocalfield"><code>dateTimeLocalField()</code></h4>

```php
public static function dateTimeLocalField( mixed $parameters ): string;
```

Builds a HTML input[type="datetime-local"] tag

<h4 id="tag-displayto"><code>displayTo()</code></h4>

```php
public static function displayTo(
string $id,
mixed $value
): void;
```

Alias of Phalcon\Tag::setDefault()

<h4 id="tag-emailfield"><code>emailField()</code></h4>

```php
public static function emailField( mixed $parameters ): string;
```

Builds a HTML input[type="email"] tag

<h4 id="tag-endform"><code>endForm()</code></h4>

```php
public static function endForm(): string;
```

Builds a HTML close FORM tag

<h4 id="tag-filefield"><code>fileField()</code></h4>

```php
public static function fileField( mixed $parameters ): string;
```

Builds a HTML input[type="file"] tag

<h4 id="tag-formlegacy"><code>formLegacy()</code></h4>

```php
public static function formLegacy( mixed $parameters ): string;
```

Builds a HTML FORM tag

<h4 id="tag-friendlytitle"><code>friendlyTitle()</code></h4>

```php
public static function friendlyTitle(
string $text,
string $separator = "-",
bool $lowercase = true,
mixed $replace = null
): string;
```

Converts texts into URL-friendly titles

<h4 id="tag-getdi"><code>getDI()</code></h4>

```php
public static function getDI(): DiInterface;
```

Internally gets the request dispatcher

<h4 id="tag-getdoctype"><code>getDocType()</code></h4>

```php
public static function getDocType(): string;
```

Get the document type declaration of content

<h4 id="tag-getescaper"><code>getEscaper()</code></h4>

```php
public static function getEscaper( array $params ): EscaperInterface|null;
```

Obtains the 'escaper' service if required

<h4 id="tag-getescaperservice"><code>getEscaperService()</code></h4>

```php
public static function getEscaperService(): EscaperInterface;
```

Returns an Escaper service from the default DI

<h4 id="tag-gettitle"><code>getTitle()</code></h4>

```php
public static function getTitle(
bool $prepend = true,
bool $append = true
): string;
```

Gets the current document title. The title will be automatically escaped.

<h4 id="tag-gettitleseparator"><code>getTitleSeparator()</code></h4>

```php
public static function getTitleSeparator(): string;
```

Gets the current document title separator

<h4 id="tag-geturlservice"><code>getUrlService()</code></h4>

```php
public static function getUrlService(): UrlInterface;
```

Returns a URL service from the default DI

<h4 id="tag-getvalue"><code>getValue()</code></h4>

```php
public static function getValue(
mixed $name,
array $params = []
);
```

Every helper calls this function to check whether a component has a
predefined value using Phalcon\Tag::setDefault() or value from $_POST

<h4 id="tag-hasvalue"><code>hasValue()</code></h4>

```php
public static function hasValue( mixed $name ): bool;
```

Check if a helper has a default value set using Phalcon\Tag::setDefault()
or value from $_POST

<h4 id="tag-hiddenfield"><code>hiddenField()</code></h4>

```php
public static function hiddenField( mixed $parameters ): string;
```

Builds a HTML input[type="hidden"] tag

<h4 id="tag-image"><code>image()</code></h4>

```php
public static function image(
mixed $parameters = null,
bool $local = true
): string;
```

Builds HTML IMG tags

<h4 id="tag-imageinput"><code>imageInput()</code></h4>

```php
public static function imageInput( mixed $parameters ): string;
```

Builds a HTML input[type="image"] tag

<h4 id="tag-javascriptinclude"><code>javascriptInclude()</code></h4>

```php
public static function javascriptInclude(
mixed $parameters = null,
bool $local = true
): string;
```

Builds a SCRIPT[type="javascript"] tag

<h4 id="tag-linkto"><code>linkTo()</code></h4>

```php
public static function linkTo(
mixed $parameters,
mixed $text = null,
mixed $local = true
): string;
```

Builds a HTML A tag using framework conventions

<h4 id="tag-monthfield"><code>monthField()</code></h4>

```php
public static function monthField( mixed $parameters ): string;
```

Builds a HTML input[type="month"] tag

<h4 id="tag-numericfield"><code>numericField()</code></h4>

```php
public static function numericField( mixed $parameters ): string;
```

Builds a HTML input[type="number"] tag

<h4 id="tag-passwordfield"><code>passwordField()</code></h4>

```php
public static function passwordField( mixed $parameters ): string;
```

Builds a HTML input[type="password"] tag

<h4 id="tag-preload"><code>preload()</code></h4>

```php
public static function preload( mixed $parameters ): string;
```

Parses the preload element passed and sets the necessary link headers

<h4 id="tag-prependtitle"><code>prependTitle()</code></h4>

```php
public static function prependTitle( mixed $title ): void;
```

Prepends a text to current document title

<h4 id="tag-radiofield"><code>radioField()</code></h4>

```php
public static function radioField( mixed $parameters ): string;
```

Builds a HTML input[type="radio"] tag

<h4 id="tag-rangefield"><code>rangeField()</code></h4>

```php
public static function rangeField( mixed $parameters ): string;
```

Builds a HTML input[type="range"] tag

<h4 id="tag-renderattributes"><code>renderAttributes()</code></h4>

```php
public static function renderAttributes(
string $code,
array $attributes
): string;
```

Renders parameters keeping order in their HTML attributes

<h4 id="tag-rendertitle"><code>renderTitle()</code></h4>

```php
public static function renderTitle(
bool $prepend = true,
bool $append = true
): string;
```

Renders the title with title tags. The title is automatically escaped

<h4 id="tag-resetinput"><code>resetInput()</code></h4>

```php
deprecated public static function resetInput(): void;
```

Resets the request and internal values to avoid those fields will have
any default value.

<h4 id="tag-searchfield"><code>searchField()</code></h4>

```php
public static function searchField( mixed $parameters ): string;
```

Builds a HTML input[type="search"] tag

<h4 id="tag-select"><code>select()</code></h4>

```php
public static function select(
mixed $parameters,
mixed $data = null
): string;
```

Builds a HTML SELECT tag using a Phalcon\Mvc\Model resultset as options

<h4 id="tag-selectstatic"><code>selectStatic()</code></h4>

```php
public static function selectStatic(
mixed $parameters,
mixed $data = null
): string;
```

Builds a HTML SELECT tag using a PHP array for options

<h4 id="tag-setautoescape"><code>setAutoescape()</code></h4>

```php
public static function setAutoescape( bool $autoescape ): void;
```

Set autoescape mode in generated HTML

<h4 id="tag-setdi"><code>setDI()</code></h4>

```php
public static function setDI( DiInterface $container ): void;
```

Sets the dependency injector container.

<h4 id="tag-setdefault"><code>setDefault()</code></h4>

```php
public static function setDefault(
string $id,
mixed $value
): void;
```

Assigns default values to generated tags by helpers

<h4 id="tag-setdefaults"><code>setDefaults()</code></h4>

```php
public static function setDefaults(
array $values,
bool $merge = false
): void;
```

Assigns default values to generated tags by helpers

<h4 id="tag-setdoctype"><code>setDocType()</code></h4>

```php
public static function setDocType( int $doctype ): void;
```

Set the document type of content

<h4 id="tag-settitle"><code>setTitle()</code></h4>

```php
public static function setTitle( string $title ): void;
```

Set the title of view content

<h4 id="tag-settitleseparator"><code>setTitleSeparator()</code></h4>

```php
public static function setTitleSeparator( string $titleSeparator ): void;
```

Set the title separator of view content

<h4 id="tag-stylesheetlink"><code>stylesheetLink()</code></h4>

```php
public static function stylesheetLink(
mixed $parameters = null,
bool $local = true
): string;
```

Builds a LINK[rel="stylesheet"] tag

<h4 id="tag-submitbutton"><code>submitButton()</code></h4>

```php
public static function submitButton( mixed $parameters ): string;
```

Builds a HTML input[type="submit"] tag

<h4 id="tag-taghtml"><code>tagHtml()</code></h4>

```php
public static function tagHtml(
string $tagName,
mixed $parameters = null,
bool $selfClose = false,
bool $onlyStart = false,
bool $useEol = false
): string;
```

Builds a HTML tag

<h4 id="tag-taghtmlclose"><code>tagHtmlClose()</code></h4>

```php
public static function tagHtmlClose(
string $tagName,
bool $useEol = false
): string;
```

Builds a HTML tag closing tag

<h4 id="tag-telfield"><code>telField()</code></h4>

```php
public static function telField( mixed $parameters ): string;
```

Builds a HTML input[type="tel"] tag

<h4 id="tag-textarea"><code>textArea()</code></h4>

```php
public static function textArea( mixed $parameters ): string;
```

Builds a HTML TEXTAREA tag

@paraym array parameters = [
    'id' => '',
    'name' => '',
    'value' => '',
    'class' => ''
]

<h4 id="tag-textfield"><code>textField()</code></h4>

```php
public static function textField( mixed $parameters ): string;
```

Builds a HTML input[type="text"] tag

<h4 id="tag-timefield"><code>timeField()</code></h4>

```php
public static function timeField( mixed $parameters ): string;
```

Builds a HTML input[type="time"] tag

<h4 id="tag-urlfield"><code>urlField()</code></h4>

```php
public static function urlField( mixed $parameters ): string;
```

Builds a HTML input[type="url"] tag

<h4 id="tag-weekfield"><code>weekField()</code></h4>

```php
public static function weekField( mixed $parameters ): string;
```

Builds a HTML input[type="week"] tag

<div class="api-group">Protected · 2</div>

<h4 id="tag-inputfield"><code>inputField()</code></h4>

```php
final protected static function inputField(
string $type,
mixed $parameters,
bool $asValue = false
): string;
```

Builds generic INPUT tags

<h4 id="tag-inputfieldchecked"><code>inputFieldChecked()</code></h4>

```php
final protected static function inputFieldChecked(
string $type,
mixed $parameters
): string;
```

Builds INPUT tags that implements the checked attribute

## Tag\Exception

<span class="badge badge--class">Class</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Tag/Exception.zep">Source on GitHub</a>

Phalcon\Tag\Exception

Exceptions thrown in Phalcon\Tag will use this class

<div class="api-tree">

- `\Exception`
- **`Phalcon\Tag\Exception`**

</div>

## Tag\Select

<span class="badge badge--abstract">Abstract</span>
<a class="src-btn" href="https://github.com/phalcon/cphalcon/blob/5.0.x/phalcon/Tag/Select.zep">Source on GitHub</a>

Phalcon\Tag\Select

Generates a SELECT HTML tag using a static array of values or a
Phalcon\Mvc\Model resultset

<div class="api-tree">

- **`Phalcon\Tag\Select`**

</div>

__Uses__ `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Tag`

### Method Summary

<div class="api-list">
<a class="api-item" href="#tagselect-selectfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">selectField</span>(<span class="prm"><span class="st">mixed</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates a SELECT tag</span>
</a>
</div>

### Methods

<div class="api-group">Public · 1</div>

<h4 id="tagselect-selectfield"><code>selectField()</code></h4>

```php
public static function selectField(
mixed $parameters,
mixed $data = null
): string;
```

Generates a SELECT tag

Source: https://docs.phalcon.io/5.18/api/phalcon_tag/index.mdx
