## Modules

<dl>
<dt><a href="#module_Badge">Badge</a></dt>
<dd><p>Create a Badge component.</p>
</dd>
<dt><a href="#module_Blog">Blog</a></dt>
<dd><p>Render a page that displays a list of articles and views the content of an individual article. It accepts all the props came from parent element and the following extra props:</p>
</dd>
<dt><a href="#module_DocumentImage">DocumentImage</a></dt>
<dd><p>Create a DocumentImage component.</p>
</dd>
<dt><a href="#module_Link">Link</a></dt>
<dd><p>Wrapper that links to a Profile or custom href.</p>
</dd>
<dt><a href="#module_Map">Map</a></dt>
<dd><p>Google Map with markers.</p>
</dd>
<dt><a href="#module_PopoverMenu">PopoverMenu</a></dt>
<dd><p>PopoverMenu for user selections.</p>
</dd>
<dt><a href="#module_ProfileFilter">ProfileFilter</a></dt>
<dd><p>Filter profile lists.</p>
</dd>
<dt><a href="#module_ProfileImage">ProfileImage</a></dt>
<dd><p>Render the avatar or banner of a profile.</p>
</dd>
<dt><a href="#module_SearchBox">SearchBox</a></dt>
<dd><p>Enable website search.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#stripHTMLTags">stripHTMLTags(htmlString)</a> ⇒ <code>string</code></dt>
<dd><p>Strip html string uses regular expressions;
Remove all HTML tags from an HTML string and returns a plain string</p>
</dd>
<dt><a href="#useLoadProfileBody">useLoadProfileBody(profile)</a> ⇒ <code>bool</code></dt>
<dd><p>Create a React state-effect combo to trigger the initialization of a profile
so that all of its data can be accessed via the at() method.</p>
</dd>
<dt><a href="#useGetProfile">useGetProfile(profileType, contentId)</a> ⇒ <code>Profile</code> | <code>false</code></dt>
<dd><p>Create a React state-effect combo to trigger the initialization of a profile
so that all of its data can be accessed via the at() method.</p>
</dd>
<dt><a href="#useLinkedProfileFilterState">useLinkedProfileFilterState(profile, profileType, sectionName, fieldName)</a> ⇒ <code>bool</code></dt>
<dd><p>Filter linked profiles.</p>
</dd>
<dt><a href="#parseBlockLinks">parseBlockLinks(block)</a></dt>
<dd></dd>
</dl>

<a name="module_Badge"></a>

## Badge
Create a Badge component.

<a name="exp_module_Badge--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
Show a simple badge with a label.

**Kind**: Exported function  
**Returns**: <code>function</code> - A react component.  
**Component**: Badge  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | The primary color of the badge. |
| className | <code>string</code> | Additional tailwind class names. |
| children | <code>ReactNode</code> \| <code>ReactNodeArray</code> | The contents for the Badge container. |

<a name="module_Blog"></a>

## Blog
Render a page that displays a list of articles and views the content of an individual article. It accepts all the props came from parent element and the following extra props:

<a name="exp_module_Blog--module.exports"></a>

### module.exports(props) ⇒ ⏏
The `Blog` component is used to render a page that displays a list of articles and views the content of an individual article. It accepts all the props came from parent element and the following extra props:

**Kind**: Exported function  
**Returns**: function A React component.  
**Component**: Blog  

| Param | Type |
| --- | --- |
| props | <code>Object</code> | 

<a name="module_DocumentImage"></a>

## DocumentImage
Create a DocumentImage component.

<a name="module_Link"></a>

## Link
Wrapper that links to a Profile or custom href.

<a name="exp_module_Link--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
Create a React DOM router Link that wraps content that functions as a
link to a given target page.

**Kind**: Exported function  
**Returns**: <code>function</code> - A Link component.  
**Component**: Link  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| profile | <code>Profile</code> | The target profile if the link points to a profile. |
| [options] | <code>Object</code> | Options to control the destination on a profile. |
| options.tab | <code>string</code> | The target tab of a profile. |
| options.mode | <code>string</code> | The target mode of a profile. Defaults to 'view'. |
| options.searchParams | <code>string</code> | Extra arguments for the profile HREF. |
| [target] | <code>string</code> | A `target` attribute for the anchor element. |
| title | <code>string</code> | A `title` attribute for the anchor element. |
| style | <code>string</code> \| <code>Profile</code> | A `style` attribute for the anchor element. |
| className | <code>string</code> | A `className` attribute for the anchor element. |
| to | <code>string</code> | An `href` attribute for the anchor element. |
| ariaLabel | <code>string</code> | An ARIA label for the anchor element. |
| children | <code>ReactNode</code> \| <code>ReactNodeArray</code> | The contents for the Link container. |

**Example**  
```js
function MyComponent() {
  return (
     <Link to='https:...' className='xxx'>
         <span>A link</span>
     </Link>
  );
}
```
<a name="module_Map"></a>

## Map
Google Map with markers.

<a name="exp_module_Map--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
Create a Map.

**Kind**: Exported function  
**Returns**: <code>function</code> - A Map component.  
**Component**: Map  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| APIKey | <code>string</code> |  | - |
| center | <code>string</code> |  | - |
| zoom | <code>string</code> |  | - |
| markerPositions | <code>Array</code> |  | - |
| [height] | <code>string</code> | <code>&quot;600px&quot;</code> | - |
| [width] | <code>string</code> | <code>&quot;800px&quot;</code> | - |

<a name="module_PopoverMenu"></a>

## PopoverMenu
PopoverMenu for user selections.


* [PopoverMenu](#module_PopoverMenu)
    * [module.exports(props)](#exp_module_PopoverMenu--module.exports) ⇒ <code>function</code> ⏏
        * [.usePopper()](#module_PopoverMenu--module.exports.usePopper)

<a name="exp_module_PopoverMenu--module.exports"></a>

### module.exports(props) ⇒ <code>function</code> ⏏
Render a menu with options to be selected by the user.

**Kind**: Exported function  
**Returns**: <code>function</code> - A React component.  
**Component**: PopoverMenu  

| Param | Type |
| --- | --- |
| props | <code>Object</code> | 

**Example**  
```js
function MyComponent() {
  const options = [<div>Option 1</div>, <div>Option 2</div>, <div>Option 2</div>];

   return (
       <div>
           <PopoverMenu trigger={<button>Open Menu</button>} options={options} triggerClassName='px-2 py-1 text-blue-600 text-sm border rounded' position='top-0 left-4' width='200px' zIndex='10' />
       </div>
   );
}
```
<a name="module_PopoverMenu--module.exports.usePopper"></a>

#### module.exports.usePopper()
Example implementation to use Popper: https://popper.js.org/

**Kind**: static method of [<code>module.exports</code>](#exp_module_PopoverMenu--module.exports)  
<a name="module_ProfileFilter"></a>

## ProfileFilter
Filter profile lists.

<a name="module_ProfileImage"></a>

## ProfileImage
Render the avatar or banner of a profile.

<a name="exp_module_ProfileImage--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
Create a Profile image such as a banner or avatar.

**Kind**: Exported function  
**Returns**: <code>function</code> - An Image component.  
**Component**: ProfileImage  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| profile | <code>Profile</code> |  | The target profile. |
| type | <code>string</code> |  | One of the following: 'avatar' or 'banner'. |
| [rounded] | <code>string</code> \| <code>bool</code> | <code>false</code> | true for 'rounded-full' or a specific class name. |
| size | <code>string</code> |  | One of the following: 'xs', 'sm', 'md', 'lg'. |

**Example**  
```js
function MyComponent() {
  return (
      <div>
          <ProfileImage profile={profile} type='banner' />
      </div>
  );
}
```
<a name="module_SearchBox"></a>

## SearchBox
Enable website search.

<a name="stripHTMLTags"></a>

## stripHTMLTags(htmlString) ⇒ <code>string</code>
Strip html string uses regular expressions;
Remove all HTML tags from an HTML string and returns a plain string

**Kind**: global function  
**Returns**: <code>string</code> - plainString  

| Param | Type |
| --- | --- |
| htmlString | <code>string</code> | 

<a name="useLoadProfileBody"></a>

## useLoadProfileBody(profile) ⇒ <code>bool</code>
Create a React state-effect combo to trigger the initialization of a profile
so that all of its data can be accessed via the at() method.

**Kind**: global function  

| Param | Type |
| --- | --- |
| profile | <code>Profile</code> | 

<a name="useGetProfile"></a>

## useGetProfile(profileType, contentId) ⇒ <code>Profile</code> \| <code>false</code>
Create a React state-effect combo to trigger the initialization of a profile
so that all of its data can be accessed via the at() method.

**Kind**: global function  
**Returns**: <code>Profile</code> \| <code>false</code> - Returns the profile object once it is in a complete (ready) state.
Returns false while the profile data is being fetched.  

| Param | Type | Description |
| --- | --- | --- |
| profileType | <code>string</code> | A profile object or a profile type string. |
| contentId | <code>int</code> \| <code>string</code> | The ID of the profile if profileOrType is a string. Otherwise, it must be empty. |

<a name="useLinkedProfileFilterState"></a>

## useLinkedProfileFilterState(profile, profileType, sectionName, fieldName) ⇒ <code>bool</code>
Filter linked profiles.

**Kind**: global function  

| Param | Type |
| --- | --- |
| profile | <code>Profile</code> | 
| profileType | <code>string</code> | 
| sectionName | <code>string</code> \| <code>null</code> | 
| fieldName | <code>string</code> \| <code>null</code> | 

<a name="parseBlockLinks"></a>

## parseBlockLinks(block)
**Kind**: global function  

| Param | Type |
| --- | --- |
| block | <code>Object</code> | 

