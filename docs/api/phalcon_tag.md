---
hide:
    - navigation
---

!!! info "NOTE"

    All classes are prefixed with `Phalcon`


## Tag

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Tag.php){ .src-btn }

Phalcon\Tag is designed to simplify building of HTML tags.
It provides a set of helpers to generate HTML in a dynamic way.
This component is a class that you can extend to add more helpers.

<div class="api-tree" markdown>

- **`Phalcon\Tag`**

</div>

__Uses__ `Phalcon\Di\Di` · `Phalcon\Di\DiInterface` · `Phalcon\Html\Escaper\EscaperInterface` · `Phalcon\Html\Link\Link` · `Phalcon\Html\Link\Serializer\Header` · `Phalcon\Http\ResponseInterface` · `Phalcon\Mvc\Url` · `Phalcon\Mvc\Url\UrlInterface` · `Phalcon\Support\Helper\Str\Friendly` · `Phalcon\Tag\Exception` · `Phalcon\Tag\Select` · `Stringable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#tag-appendtitle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">appendTitle</span>( <span class="st">array|string</span> <span class="sv">$title</span> )</code>
<span class="desc">Appends a text to current document title</span>
</a>
<a class="api-item" href="#tag-checkfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">checkField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;check&quot;] tag</span>
</a>
<a class="api-item" href="#tag-colorfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">colorField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;color&quot;] tag</span>
</a>
<a class="api-item" href="#tag-datefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dateField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;date&quot;] tag</span>
</a>
<a class="api-item" href="#tag-datetimefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dateTimeField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;datetime&quot;] tag</span>
</a>
<a class="api-item" href="#tag-datetimelocalfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">dateTimeLocalField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;datetime-local&quot;] tag</span>
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
<code class="sig"><span class="sf">emailField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;email&quot;] tag</span>
</a>
<a class="api-item" href="#tag-endform">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">endForm</span>()</code>
<span class="desc">Builds an HTML close FORM tag</span>
</a>
<a class="api-item" href="#tag-filefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">fileField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;file&quot;] tag</span>
</a>
<a class="api-item" href="#tag-formlegacy">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">formLegacy</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML FORM tag</span>
</a>
<a class="api-item" href="#tag-friendlytitle">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">friendlyTitle</span>(<span class="prm"><span class="st">string</span> <span class="sv">$text</span>,</span><span class="prm"><span class="st">string</span> <span class="sv">$separator</span><span class="sm"> = &quot;-&quot;</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$lowercase</span><span class="sm"> = true</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$replace</span><span class="sm"> = []</span></span>)</code>
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
<code class="sig"><span class="sf">getEscaper</span>( <span class="st">array</span> <span class="sv">$parameters</span> )</code>
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
<code class="ret">mixed</code>
<code class="sig"><span class="sf">getValue</span>(<span class="prm"><span class="st">int|string</span> <span class="sv">$name</span>,</span><span class="prm"><span class="st">array</span> <span class="sv">$parameters</span><span class="sm"> = []</span></span>)</code>
<span class="desc">Every helper calls this function to check whether a component has a</span>
</a>
<a class="api-item" href="#tag-hasvalue">
<code class="vis vis-public">public</code>
<code class="ret">bool</code>
<code class="sig"><span class="sf">hasValue</span>( <span class="st">int|string</span> <span class="sv">$name</span> )</code>
<span class="desc">Check if a helper has a default value set using Phalcon\Tag::setDefault()</span>
</a>
<a class="api-item" href="#tag-hiddenfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">hiddenField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;hidden&quot;] tag</span>
</a>
<a class="api-item" href="#tag-image">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">image</span>(<span class="prm"><span class="st">array|string</span> <span class="sv">$parameters</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Builds HTML IMG tags</span>
</a>
<a class="api-item" href="#tag-imageinput">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">imageInput</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;image&quot;] tag</span>
</a>
<a class="api-item" href="#tag-javascriptinclude">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">javascriptInclude</span>(<span class="prm"><span class="st">array|string</span> <span class="sv">$parameters</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Builds a SCRIPT[type=&quot;javascript&quot;] tag</span>
</a>
<a class="api-item" href="#tag-linkto">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">linkTo</span>(<span class="prm"><span class="st">array|string</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">string|null</span> <span class="sv">$text</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Builds an HTML A tag using framework conventions</span>
</a>
<a class="api-item" href="#tag-monthfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">monthField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;month&quot;] tag</span>
</a>
<a class="api-item" href="#tag-numericfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">numericField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;number&quot;] tag</span>
</a>
<a class="api-item" href="#tag-passwordfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">passwordField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;password&quot;] tag</span>
</a>
<a class="api-item" href="#tag-preload">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">preload</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Parses the preload element passed and sets the necessary link headers</span>
</a>
<a class="api-item" href="#tag-prependtitle">
<code class="vis vis-public">public</code>
<code class="ret">void</code>
<code class="sig"><span class="sf">prependTitle</span>( <span class="st">array|string</span> <span class="sv">$title</span> )</code>
<span class="desc">Prepends a text to current document title</span>
</a>
<a class="api-item" href="#tag-radiofield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">radioField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;radio&quot;] tag</span>
</a>
<a class="api-item" href="#tag-rangefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">rangeField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;range&quot;] tag</span>
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
<code class="sig"><span class="sf">searchField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds a HTML input[type=&quot;search&quot;] tag</span>
</a>
<a class="api-item" href="#tag-select">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">select</span>(<span class="prm"><span class="st">array|string</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Builds a HTML SELECT tag using a Phalcon\Mvc\Model resultset as options</span>
</a>
<a class="api-item" href="#tag-selectstatic">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">selectStatic</span>(<span class="prm"><span class="st">array|string</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Builds an HTML SELECT tag using a PHP array for options</span>
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
<code class="sig"><span class="sf">setDefault</span>(<span class="prm"><span class="st">string</span> <span class="sv">$id</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$value</span><span class="sm"> = null</span></span>)</code>
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
<code class="sig"><span class="sf">stylesheetLink</span>(<span class="prm"><span class="st">array|string|null</span> <span class="sv">$parameters</span><span class="sm"> = null</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$local</span><span class="sm"> = true</span></span>)</code>
<span class="desc">Builds a LINK[rel=&quot;stylesheet&quot;] tag</span>
</a>
<a class="api-item" href="#tag-submitbutton">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">submitButton</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;submit&quot;] tag</span>
</a>
<a class="api-item" href="#tag-taghtml">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">tagHtml</span>(<span class="prm"><span class="st">string</span> <span class="sv">$tagName</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$parameters</span><span class="sm"> = []</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$selfClose</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$onlyStart</span><span class="sm"> = false</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$useEol</span><span class="sm"> = false</span></span>)</code>
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
<code class="sig"><span class="sf">telField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;tel&quot;] tag</span>
</a>
<a class="api-item" href="#tag-textarea">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">textArea</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML TEXTAREA tag</span>
</a>
<a class="api-item" href="#tag-textfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">textField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;text&quot;] tag</span>
</a>
<a class="api-item" href="#tag-timefield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">timeField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;time&quot;] tag</span>
</a>
<a class="api-item" href="#tag-urlfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">urlField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;url&quot;] tag</span>
</a>
<a class="api-item" href="#tag-weekfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">weekField</span>( <span class="st">array|string</span> <span class="sv">$parameters</span> )</code>
<span class="desc">Builds an HTML input[type=&quot;week&quot;] tag</span>
</a>
<a class="api-item" href="#tag-getstaticurl">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">getStaticUrl</span>( <span class="st">mixed</span> <span class="sv">$uri</span> )</code>
<span class="desc">Resolves a static (asset) URL through the <code>url</code> service.</span>
</a>
<a class="api-item" href="#tag-inputfield">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">inputField</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$asValue</span><span class="sm"> = false</span></span>)</code>
<span class="desc">Builds generic INPUT tags</span>
</a>
<a class="api-item" href="#tag-inputfieldchecked">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">inputFieldChecked</span>(<span class="prm"><span class="st">string</span> <span class="sv">$type</span>,</span><span class="prm"><span class="st">array|string</span> <span class="sv">$parameters</span></span>)</code>
<span class="desc">Builds INPUT tags that implements the checked attribute</span>
</a>
<a class="api-item" href="#tag-tostringvalue">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toStringValue</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Reduces an arbitrary helper value to the string a tag attribute, id or</span>
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
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$displayValues</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$documentAppendTitle</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">array</code>
<code class="sig"><span class="sv">$documentPrependTitle</span><span class="sm"> = []</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$documentTitle</span><span class="sm"> = &quot;&quot;</span></code>
</div>
<div class="api-item">
<code class="vis vis-protected">protected</code>
<code class="ret">string|null</code>
<code class="sig"><span class="sv">$documentTitleSeparator</span><span class="sm"> = &quot;&quot;</span></code>
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

#### `appendTitle()` { #tag-appendtitle }

```php
public static function appendTitle( array|string $title ): void;
```

Appends a text to current document title

#### `checkField()` { #tag-checkfield }

```php
public static function checkField( array|string $parameters ): string;
```

Builds an HTML input[type="check"] tag

#### `colorField()` { #tag-colorfield }

```php
public static function colorField( array|string $parameters ): string;
```

Builds an HTML input[type="color"] tag

#### `dateField()` { #tag-datefield }

```php
public static function dateField( array|string $parameters ): string;
```

Builds an HTML input[type="date"] tag

#### `dateTimeField()` { #tag-datetimefield }

```php
public static function dateTimeField( array|string $parameters ): string;
```

Builds an HTML input[type="datetime"] tag

#### `dateTimeLocalField()` { #tag-datetimelocalfield }

```php
public static function dateTimeLocalField( array|string $parameters ): string;
```

Builds an HTML input[type="datetime-local"] tag

#### `displayTo()` { #tag-displayto }

```php
public static function displayTo(
    string $id,
    mixed $value
): void;
```

Alias of Phalcon\Tag::setDefault()

#### `emailField()` { #tag-emailfield }

```php
public static function emailField( array|string $parameters ): string;
```

Builds an HTML input[type="email"] tag

#### `endForm()` { #tag-endform }

```php
public static function endForm(): string;
```

Builds an HTML close FORM tag

#### `fileField()` { #tag-filefield }

```php
public static function fileField( array|string $parameters ): string;
```

Builds an HTML input[type="file"] tag

#### `formLegacy()` { #tag-formlegacy }

```php
public static function formLegacy( array|string $parameters ): string;
```

Builds an HTML FORM tag

#### `friendlyTitle()` { #tag-friendlytitle }

```php
public static function friendlyTitle(
    string $text,
    string $separator = "-",
    bool $lowercase = true,
    array|string $replace = []
): string;
```

Converts texts into URL-friendly titles

#### `getDI()` { #tag-getdi }

```php
public static function getDI(): DiInterface;
```

Internally gets the request dispatcher

#### `getDocType()` { #tag-getdoctype }

```php
public static function getDocType(): string;
```

Get the document type declaration of content

#### `getEscaper()` { #tag-getescaper }

```php
public static function getEscaper( array $parameters ): EscaperInterface|null;
```

Obtains the 'escaper' service if required

#### `getEscaperService()` { #tag-getescaperservice }

```php
public static function getEscaperService(): EscaperInterface;
```

Returns an Escaper service from the default DI

#### `getTitle()` { #tag-gettitle }

```php
public static function getTitle(
    bool $prepend = true,
    bool $append = true
): string;
```

Gets the current document title. The title will be automatically escaped.

#### `getTitleSeparator()` { #tag-gettitleseparator }

```php
public static function getTitleSeparator(): string;
```

Gets the current document title separator

#### `getUrlService()` { #tag-geturlservice }

```php
public static function getUrlService(): UrlInterface;
```

Returns a URL service from the default DI

#### `getValue()` { #tag-getvalue }

```php
public static function getValue(
    int|string $name,
    array $parameters = []
): mixed;
```

Every helper calls this function to check whether a component has a
predefined value using Phalcon\Tag::setDefault() or value from $_POST

#### `hasValue()` { #tag-hasvalue }

```php
public static function hasValue( int|string $name ): bool;
```

Check if a helper has a default value set using Phalcon\Tag::setDefault()
or value from $_POST

#### `hiddenField()` { #tag-hiddenfield }

```php
public static function hiddenField( array|string $parameters ): string;
```

Builds a HTML input[type="hidden"] tag

#### `image()` { #tag-image }

```php
public static function image(
    array|string $parameters = [],
    bool $local = true
): string;
```

Builds HTML IMG tags

#### `imageInput()` { #tag-imageinput }

```php
public static function imageInput( array|string $parameters ): string;
```

Builds an HTML input[type="image"] tag

#### `javascriptInclude()` { #tag-javascriptinclude }

```php
public static function javascriptInclude(
    array|string $parameters = [],
    bool $local = true
): string;
```

Builds a SCRIPT[type="javascript"] tag

#### `linkTo()` { #tag-linkto }

```php
public static function linkTo(
    array|string $parameters,
    string|null $text = null,
    bool $local = true
): string;
```

Builds an HTML A tag using framework conventions

#### `monthField()` { #tag-monthfield }

```php
public static function monthField( array|string $parameters ): string;
```

Builds an HTML input[type="month"] tag

#### `numericField()` { #tag-numericfield }

```php
public static function numericField( array|string $parameters ): string;
```

Builds an HTML input[type="number"] tag

#### `passwordField()` { #tag-passwordfield }

```php
public static function passwordField( array|string $parameters ): string;
```

Builds a HTML input[type="password"] tag

#### `preload()` { #tag-preload }

```php
public static function preload( array|string $parameters ): string;
```

Parses the preload element passed and sets the necessary link headers

#### `prependTitle()` { #tag-prependtitle }

```php
public static function prependTitle( array|string $title ): void;
```

Prepends a text to current document title

#### `radioField()` { #tag-radiofield }

```php
public static function radioField( array|string $parameters ): string;
```

Builds an HTML input[type="radio"] tag

#### `rangeField()` { #tag-rangefield }

```php
public static function rangeField( array|string $parameters ): string;
```

Builds an HTML input[type="range"] tag

#### `renderAttributes()` { #tag-renderattributes }

```php
public static function renderAttributes(
    string $code,
    array $attributes
): string;
```

Renders parameters keeping order in their HTML attributes

#### `renderTitle()` { #tag-rendertitle }

```php
public static function renderTitle(
    bool $prepend = true,
    bool $append = true
): string;
```

Renders the title with title tags. The title is automatically escaped

#### `resetInput()` { #tag-resetinput }

```php
public static function resetInput(): void;
```

Resets the request and internal values to avoid those fields will have
any default value.

#### `searchField()` { #tag-searchfield }

```php
public static function searchField( array|string $parameters ): string;
```

Builds a HTML input[type="search"] tag

#### `select()` { #tag-select }

```php
public static function select(
    array|string $parameters,
    mixed $data = null
): string;
```

Builds a HTML SELECT tag using a Phalcon\Mvc\Model resultset as options

#### `selectStatic()` { #tag-selectstatic }

```php
public static function selectStatic(
    array|string $parameters,
    mixed $data = null
): string;
```

Builds an HTML SELECT tag using a PHP array for options

#### `setAutoescape()` { #tag-setautoescape }

```php
public static function setAutoescape( bool $autoescape ): void;
```

Set autoescape mode in generated HTML

#### `setDI()` { #tag-setdi }

```php
public static function setDI( DiInterface $container ): void;
```

Sets the dependency injector container.

#### `setDefault()` { #tag-setdefault }

```php
public static function setDefault(
    string $id,
    mixed $value = null
): void;
```

Assigns default values to generated tags by helpers

#### `setDefaults()` { #tag-setdefaults }

```php
public static function setDefaults(
    array $values,
    bool $merge = false
): void;
```

Assigns default values to generated tags by helpers

#### `setDocType()` { #tag-setdoctype }

```php
public static function setDocType( int $doctype ): void;
```

Set the document type of content

#### `setTitle()` { #tag-settitle }

```php
public static function setTitle( string $title ): void;
```

Set the title of view content

#### `setTitleSeparator()` { #tag-settitleseparator }

```php
public static function setTitleSeparator( string $titleSeparator ): void;
```

Set the title separator of view content

#### `stylesheetLink()` { #tag-stylesheetlink }

```php
public static function stylesheetLink(
    array|string|null $parameters = null,
    bool $local = true
): string;
```

Builds a LINK[rel="stylesheet"] tag

#### `submitButton()` { #tag-submitbutton }

```php
public static function submitButton( array|string $parameters ): string;
```

Builds an HTML input[type="submit"] tag

#### `tagHtml()` { #tag-taghtml }

```php
public static function tagHtml(
    string $tagName,
    array|string $parameters = [],
    bool $selfClose = false,
    bool $onlyStart = false,
    bool $useEol = false
): string;
```

Builds a HTML tag

#### `tagHtmlClose()` { #tag-taghtmlclose }

```php
public static function tagHtmlClose(
    string $tagName,
    bool $useEol = false
): string;
```

Builds a HTML tag closing tag

#### `telField()` { #tag-telfield }

```php
public static function telField( array|string $parameters ): string;
```

Builds an HTML input[type="tel"] tag

#### `textArea()` { #tag-textarea }

```php
public static function textArea( array|string $parameters ): string;
```

Builds an HTML TEXTAREA tag

#### `textField()` { #tag-textfield }

```php
public static function textField( array|string $parameters ): string;
```

Builds an HTML input[type="text"] tag

#### `timeField()` { #tag-timefield }

```php
public static function timeField( array|string $parameters ): string;
```

Builds an HTML input[type="time"] tag

#### `urlField()` { #tag-urlfield }

```php
public static function urlField( array|string $parameters ): string;
```

Builds an HTML input[type="url"] tag

#### `weekField()` { #tag-weekfield }

```php
public static function weekField( array|string $parameters ): string;
```

Builds an HTML input[type="week"] tag

<div class="api-group">Protected · 4</div>

#### `getStaticUrl()` { #tag-getstaticurl }

```php
final protected static function getStaticUrl( mixed $uri ): string;
```

Resolves a static (asset) URL through the `url` service.

`getStatic()` lives on Phalcon\Mvc\Url but is absent from
Phalcon\Mvc\Url\UrlInterface, which is what getUrlService() is typed
to return. A service that does not carry it falls back to `get()`
rather than aborting the helper.

#### `inputField()` { #tag-inputfield }

```php
final protected static function inputField(
    string $type,
    array|string $parameters,
    bool $asValue = false
): string;
```

Builds generic INPUT tags

#### `inputFieldChecked()` { #tag-inputfieldchecked }

```php
final protected static function inputFieldChecked(
    string $type,
    array|string $parameters
): string;
```

Builds INPUT tags that implements the checked attribute

#### `toStringValue()` { #tag-tostringvalue }

```php
final protected static function toStringValue( mixed $value ): string;
```

Reduces an arbitrary helper value to the string a tag attribute, id or
URI needs. Parameter bags are user supplied, so a value that cannot be
expressed as a string - an array, an object without `__toString()` -
reads back as an empty string rather than aborting the helper.


## Tag\Exception

<span class="badge badge--class">Class</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Tag/Exception.php){ .src-btn }

Exceptions thrown in Phalcon\Tag will use this class

<div class="api-tree" markdown>

- `\Exception`
    - **`Phalcon\Tag\Exception`**

</div>


## Tag\Select

<span class="badge badge--abstract">Abstract</span>
[:material-github: Source on GitHub](https://github.com/phalcon/phalcon/blob/v6.0.x/src/Tag/Select.php){ .src-btn }

Phalcon\Tag\Select

Generates a SELECT HTML tag using a static array of values or a
Phalcon\Mvc\Model resultset

<div class="api-tree" markdown>

- **`Phalcon\Tag\Select`**

</div>

__Uses__ `Closure` · `Phalcon\Mvc\Model\ResultsetInterface` · `Phalcon\Tag` · `Stringable`
{ .api-uses }

### Method Summary

<div class="api-list">
<a class="api-item" href="#tagselect-selectfield">
<code class="vis vis-public">public</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">selectField</span>(<span class="prm"><span class="st">array|string</span> <span class="sv">$parameters</span>,</span><span class="prm"><span class="st">mixed</span> <span class="sv">$data</span><span class="sm"> = null</span></span>)</code>
<span class="desc">Generates a SELECT tag</span>
</a>
<a class="api-item" href="#tagselect-echooption">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">echoOption</span>(<span class="prm"><span class="st">string</span> <span class="sv">$value</span>,</span><span class="prm"><span class="st">bool</span> <span class="sv">$selected</span><span class="sm"> = false</span></span>)</code>
</a>
<a class="api-item" href="#tagselect-tostringvalue">
<code class="vis vis-protected">protected</code>
<code class="ret">string</code>
<code class="sig"><span class="sf">toStringValue</span>( <span class="st">mixed</span> <span class="sv">$value</span> )</code>
<span class="desc">Reduces an arbitrary option value to the string the markup needs.</span>
</a>
</div>

### Constants

<div class="api-list">
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">OPTION_CLOSE</span><span class="sm"> = &quot;&lt;/option&gt;&quot;</span></code>
</div>
<div class="api-item">
<code class="ret">string</code>
<code class="sig"><span class="sc">SELECT_CLOSE</span><span class="sm"> = &quot;&lt;/select&gt;&quot;</span></code>
</div>
</div>

### Methods

<div class="api-group">Public · 1</div>

#### `selectField()` { #tagselect-selectfield }

```php
public static function selectField(
    array|string $parameters,
    mixed $data = null
): string;
```

Generates a SELECT tag

<div class="api-group">Protected · 2</div>

#### `echoOption()` { #tagselect-echooption }

```php
protected static function echoOption(
    string $value,
    bool $selected = false
): string;
```

#### `toStringValue()` { #tagselect-tostringvalue }

```php
protected static function toStringValue( mixed $value ): string;
```

Reduces an arbitrary option value to the string the markup needs.
Option data is user supplied, so anything that cannot be expressed as
a string reads back as an empty string rather than aborting the tag.
