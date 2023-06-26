## Modules

<dl>
<dt><a href="#module_Asset">Asset</a></dt>
<dd><p>Render the asset file and provide a download link</p>
</dd>
<dt><a href="#module_FileLogo">FileLogo</a></dt>
<dd><p>Render a file Icon</p>
</dd>
<dt><a href="#module_Image">Image</a></dt>
<dd><p>Render the avatar, banner or other asset of a profile.</p>
</dd>
<dt><a href="#module_Link">Link</a></dt>
<dd><p>Wrapper that links to a Profile or custom href.</p>
</dd>
<dt><a href="#module_MediaIcon">MediaIcon</a></dt>
<dd><p>Render a social media icon</p>
</dd>
</dl>

## Functions

<dl>
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

<a name="module_Asset"></a>

## Asset
Render the asset file and provide a download link

<a name="exp_module_Asset--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
Create a card-styled component that displays a preview of the asset file, along with the title, description, and a download link.

**Kind**: Exported function  
**Returns**: <code>function</code> - A react component.  
**Component**: Asset  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| profile | <code>Profile</code> |  | The target profile. |
| value | <code>string</code> |  | The value of the asset file. |
| [withDownload] | <code>string</code> \| <code>bool</code> | <code>true</code> | true for 'rounded-full' or a specific class name. |

**Example**  
```js
function MyComponent() {
  return (
      <Asset profile={profile} value="xxx" withDownload />
  );
}
```
<a name="module_FileLogo"></a>

## FileLogo
Render a file Icon

<a name="exp_module_FileLogo--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
Return a Icon based on the filename.

**Kind**: Exported function  
**Returns**: <code>function</code> - A react component.  
**Component**: FileLogo  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | The file name. |
| size | <code>string</code> | The size of the icon. |

**Example**  
```js
function MyComponent() {
  return (
      <FileLogo profile={profile} value="xxx" withDownload />
  );
}
```
<a name="module_Image"></a>

## Image
Render the avatar, banner or other asset of a profile.

<a name="exp_module_Image--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
Create a image with given profile and type.

**Kind**: Exported function  
**Returns**: <code>function</code> - A react component.  
**Component**: Asset  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| profile | <code>Profile</code> |  | The target profile. |
| type | <code>string</code> |  | One of the following: 'avatar', 'banner' or 'image'. |
| size | <code>string</code> |  | One of the following: 'xs', 'sm', 'md', 'lg'. |
| [rounded] | <code>string</code> \| <code>bool</code> | <code>false</code> | true for 'rounded-full' or a specific class name. |
| className | <code>string</code> |  | Additional tailwind class names. |
| value | <code>string</code> |  | The value of the asset when type is not 'avatar' or 'banner'. |
| alt | <code>string</code> |  | The alt of the asset when type is not 'avatar' or 'banner'. |

**Example**  
```js
function MyComponent() {
  return (
      <Image profile={profile} type="banner" size="sm" rounded className="hover:cursor-pointer">
			{label}
		 </Image>
  );
}
```
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
<a name="module_MediaIcon"></a>

## MediaIcon
Render a social media icon

<a name="exp_module_MediaIcon--module.exports"></a>

### module.exports() ⇒ <code>function</code> ⏏
Return a Icon based on the social media type.

**Kind**: Exported function  
**Returns**: <code>function</code> - A react component.  
**Component**: MediaIcon  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The media type. |
| size | <code>string</code> | The size of the icon. |
| className | <code>string</code> | Additional tailwind className. |

**Example**  
```js
function MyComponent() {
  return (
      <MediaIcon type={'facebook'} size="10" />
  );
}
```
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

