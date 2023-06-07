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
<dt><a href="#module_ProfileSorter">ProfileSorter</a></dt>
<dd><p>Sort the profile lists.</p>
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
so that all of its data can be accessed via the at() method. It is different from
useLoadProfileBody() in that it takes a profileType and contentId as parameters
instead of a profile object.</p>
</dd>
<dt><a href="#useLinkedProfileFilterState">useLinkedProfileFilterState(profile, profileType, sectionName, fieldName)</a> ⇒ <code>Array</code></dt>
<dd><p>Get a list of project profiles linked to a given profile and a function to update the filter
and sorting state of the list.</p>
</dd>
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

**Example**  
```js
function MyComponent() {
  return (
      <Badge color="green" className="hover:text-red-200">
			{label}
		 </Badge>
  );
}
```
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

| Name | Type | Description |
| --- | --- | --- |
| APIKey | <code>string</code> | - |
| center | <code>object</code> | The position of the map center |
| zoom | <code>number</code> | The initial zoom level |
| markerPositions | <code>Array.&lt;object&gt;</code> | The markers' position |
| height | <code>string</code> | The height of the map element |
| [width] | <code>string</code> | The width of the map element |

**Example**  
```js
function MyComponent() {
   return (
      <Map
         APIKey="xxx"
         center={{lat:40, lng:50}}
         zoom={4}
         markerPositions={[{lat:10,lng:20}]}
         width='800px'
         height='600px' />
   );
}
```
<a name="module_PopoverMenu"></a>

## PopoverMenu
PopoverMenu for user selections.


* [PopoverMenu](#module_PopoverMenu)
    * [module.exports(trigger, triggerClassName, triggerStyle, options, menuClassName, width, zIndex, position)](#exp_module_PopoverMenu--module.exports) ⇒ <code>function</code> ⏏
        * [.usePopper()](#module_PopoverMenu--module.exports.usePopper)

<a name="exp_module_PopoverMenu--module.exports"></a>

### module.exports(trigger, triggerClassName, triggerStyle, options, menuClassName, width, zIndex, position) ⇒ <code>function</code> ⏏
Render a menu with options to be selected by the user.

**Kind**: Exported function  
**Returns**: <code>function</code> - A React component.  
**Component**: PopoverMenu  

| Param | Type | Description |
| --- | --- | --- |
| trigger | <code>ReactElement</code> | The Trigger element |
| triggerClassName | <code>string</code> | The class name that apply to the trigger element |
| triggerStyle | <code>CSSStyleRule</code> | The style that apply to the trigger element |
| options | <code>Array.&lt;ReactElement&gt;</code> | The option elements in the dropdown menu |
| menuClassName | <code>string</code> | The class name that apply to the menu element |
| width | <code>string</code> | The menu width |
| zIndex | <code>number</code> | The zIndex value of the menu |
| position | <code>string</code> | The position of the menu relative to the trigger |

**Example**  
```js
function MyComponent() {
  const options = [<div>Option 1</div>, <div>Option 2</div>, <div>Option 2</div>];

   return (
      <PopoverMenu
         trigger={<div>Open Menu</div>}
         options={options}
         triggerClassName='px-2 py-1 text-blue-600 text-sm border rounded'
         position='top-0 left-4'
         width='120px'
         zIndex='10' />
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


* [ProfileFilter](#module_ProfileFilter)
    * [module.exports()](#exp_module_ProfileFilter--module.exports) ⇒ <code>function</code> ⏏
        * _static_
            * [.Search](#module_ProfileFilter--module.exports.Search) ⇒ <code>function</code>
        * _inner_
            * [~Menu()](#module_ProfileFilter--module.exports..Menu) ⇒ <code>function</code>

<a name="exp_module_ProfileFilter--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
A wrapper component for filter Search and Menu

**Kind**: Exported function  
**Returns**: <code>function</code> - A wrapper component.  
**Component**: ProfileFilter  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| filter | <code>object</code> | The filter state which return by useLinkedProfileFilterState |
| setFilter | <code>function</code> | The set method to update state, return by useLinkedProfileFilterState |

**Example**  
```js
function MyComponent() {
  return (
      <ProfileFilter filter={filter} setFilter={setFilter}>
         <ProfileFilter.Search/>
         <ProfileFilter.Menu/>
      </ProfileFilter>
  );
}
```
<a name="module_ProfileFilter--module.exports.Search"></a>

#### module.exports.Search ⇒ <code>function</code>
A Search widget to perform searching profiles by title

**Kind**: static constant of [<code>module.exports</code>](#exp_module_ProfileFilter--module.exports)  
**Returns**: <code>function</code> - A search component.  
**Component**: ProfileFilter.Search  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| filter | <code>Object</code> | The filter state |
| setFilter | <code>function</code> | The set method to update state |

**Example**  
```js
function MyComponent() {
  return (
      <ProfileFilter.Search filter={filter} setFilter={setFilter} />
  );
}
```
<a name="module_ProfileFilter--module.exports..Menu"></a>

#### module.exports~Menu() ⇒ <code>function</code>
A filter widget to perform filter profiles using a drop down menu

**Kind**: inner method of [<code>module.exports</code>](#exp_module_ProfileFilter--module.exports)  
**Returns**: <code>function</code> - A filter component.  
**Component**: ProfileFilter.Menu  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| filter | <code>Object</code> | The filter state |
| setFilter | <code>function</code> | The set method to update state |

**Example**  
```js
function MyComponent() {
  return (
      <ProfileFilter.Menu filter={filter} setFilter={setFilter} />
  );
}
```
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
<a name="module_ProfileSorter"></a>

## ProfileSorter
Sort the profile lists.

<a name="exp_module_ProfileSorter--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
A sorting widget to sort profiles.

**Kind**: Exported function  
**Returns**: <code>function</code> - A Sorting component.  
**Component**: ProfileSorter  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| filter | <code>object</code> | The filter state which return by useLinkedProfileFilterState |
| setFilter | <code>function</code> | The set method to update state, return by useLinkedProfileFilterState |

**Example**  
```js
function MyComponent() {
  return (
      <ProfileSorter filter={filter} setFilter={setFilter} />
  );
}
```
<a name="module_SearchBox"></a>

## SearchBox
Enable website search.

<a name="exp_module_SearchBox--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
A search box

**Kind**: Exported function  
**Returns**: <code>function</code> - A search component.  
**Component**: SearchBox  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| placeholder | <code>string</code> | The placeholder value |
| filters | <code>object</code> | The filter state contains the searchText value |
| handleSearch | <code>function</code> | The method handle on search value change |
| live | <code>bool</code> | A flag indicate if the handleSearch will be trigger every changes or only when enter click |

**Example**  
```js
function MyComponent() {
  return (
      <SearchBox
			placeholder={"search"}
			filters={{searchText:'xxx'}}
			handleSearch={(newValue)=>{}}
			live={true}
		 />
  );
}
```
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
so that all of its data can be accessed via the at() method. It is different from
useLoadProfileBody() in that it takes a profileType and contentId as parameters
instead of a profile object.

**Kind**: global function  
**Returns**: <code>Profile</code> \| <code>false</code> - Returns the profile object once it is in a complete (ready) state.
Returns false while the profile data is being fetched.  

| Param | Type | Description |
| --- | --- | --- |
| profileType | <code>string</code> | A profile object or a profile type string. |
| contentId | <code>int</code> \| <code>string</code> | The ID of the profile if profileOrType is a string. Otherwise, it must be empty. |

<a name="useLinkedProfileFilterState"></a>

## useLinkedProfileFilterState(profile, profileType, sectionName, fieldName) ⇒ <code>Array</code>
Get a list of project profiles linked to a given profile and a function to update the filter
and sorting state of the list.

**Kind**: global function  
**Returns**: <code>Array</code> - - A 2D array with the current filter state and a function to update the state. The state is an
Object with several properties. The `filtered` property of the state is an array of Profile objects with the
ordered list of profiles to render.  

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>Profile</code> | The source profile. |
| profileType | <code>string</code> | The profile type of the linked profiles to return. |
| sectionName | <code>string</code> \| <code>null</code> | The section name in the source profile that has the list of linked profiles. |
| fieldName | <code>string</code> \| <code>null</code> | The field name in `sectionName` that stores the target linked-profile reference. |

