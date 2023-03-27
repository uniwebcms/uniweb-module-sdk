# Uniweb Module Software Development Kit (SDK)

Uniweb Module SDK is an npm module that provides a set of React components and utility functions that can be used to make it easier to create and manage widgets.

<!-- This module provides five components: `ProfileImage`, `PopoverMenu`, `SmartLink`, `DocumentImage` and `Blogs`. -->

## Installation

You can install Uniweb Module SDK via npm by running the following command:

```bash
npm install uniweb-module-sdk
```

Or via yarn:

```bash
yarn add uniweb-module-sdk
```

## Usage

#### DocumentImage

The `DocumentImage` component is used to render an element based on the uploaded assets of the `file` field in a `profile` section. The asset can be either an image or a file. In the case of a regular file, this component renders an element with preview functionality if applicable. It accepts the following props:

-   `contentType` - The content type of a profile (e.g., 'members', 'units')
-   `viewType` - The view type of a profile (e.g., 'profile')
-   `contentId` - The ID of a profile
-   `value` - The value of the file field
-   `activeLang` - Specify the language of the value if it is a `multi-lingual` field
-   `className` - The `className` of the element
-   `filePreview` - A boolean indicate weather show file preview or not

Here's an example of how to use the `DocumentImage` component:

```jsx
import { DocumentImage } from 'uniweb-module-sdk';

function MyComponent() {
    return (
        <div>
            <DocumentImage contentType='docufolio' viewType='profile' contentId='1' value='_fieldValue' activeLang='en' className='xxx' filePreview={true} />
        </div>
    );
}
```

#### PopoverMenu

The `PopoverMenu` component is used to create a quick open menu. It accepts the following props:

-   `trigger` - The trigger element for the menu
-   `options` - An array of options for the menu
-   `triggerClassName` - The class name of the trigger element
-   `position` - The position property of the opened menu
-   `width` - The width of the opened menu
-   `zIndex` - The `zIndex` property of the opened menu

Here's an example of how to use the `PopoverMenu` component:

```jsx
import { PopoverMenu } from 'uniweb-module-sdk';

function MyComponent() {
    const options = [<div>Option 1</div>, <div>Option 2</div>, <div>Option 2</div>];

    return (
        <div>
            <PopoverMenu trigger={<button>Open Menu</button>} options={options} triggerClassName='px-2 py-1 text-blue-600 text-sm border rounded' position='top-0 left-4' width='200px' zIndex='10' />
        </div>
    );
}
```

#### SmartLink

The `SmartLink` component is used to create link element. It accepts the following props:

-   `to` - The href of the link
-   `external` - Optional. A boolean explicitly indicating whether this link points outside of `uniweb`
-   `ariaLabel` - The `aria-label` property of the link
-   `title` - The `title` property of the link

> It also accepts the standard properties of React element (e.g., 'className', 'target', 'children', 'onClick')

Here's an example of how to use the `PopoverMenu` component:

```jsx
import { SmartLink } from 'uniweb-module-sdk';

function MyComponent() {
    return (
        <div>
            <SmartLink to='https:...' className='xxx'>
                <span>A link</span>
            </SmartLink>
        </div>
    );
}
```

#### ProfileImage

The `ProfileImage` component is used to display a banner or avatar image of a `profile` element based on the provided parameters. It accepts the following props:

-   `contentType` - The content type of a profile (e.g., 'members', 'units')
-   `viewType` - The view type of a profile (e.g., 'profile')
-   `contentId` - the ID of a profile
-   `version` - the version of the image
-   `type` - the type of the image (e.g., 'banner', 'avatar')

Here's an example of how to use the `ProfileImage` component:

```jsx
import { ProfileImage } from 'uniweb-module-sdk';

function MyComponent() {
    return (
        <div>
            <ProfileImage contentType='members' viewType='profile' contentId='1' version='123' type='banner' />
        </div>
    );
}
```

#### Blogs

The `Blogs` component is used to render a page that displays a list of articles and views the content of an individual article. It accepts all the props came from parent element and the following extra props:

-   `recommenderMode` - The mode that indicates the display of either `latest blogs` or `relative blogs` under the content of a single blog (e.g., 'latest', 'relative')

Here's an example of how to use the `Blogs` component:

```jsx
import { Blogs } from 'uniweb-module-sdk';

function MyComponent(props) {
    return (
        <div>
            <Blogs {...props} recommenderMode='relative' />
        </div>
    );
}
```

### Utility Functions

Uniweb SDK also provides several utility functions that can be used to perform common tasks. These functions include:

-   `client` - A function for making AJAX get requests
-   `postClient` - A function for making AJAX post requests
-   `localize` - A function return the localized string; _params: `map, defaultValue, language, return_the_first_non_empty_value_if_lang_value_is_empty`_
-   `getProfiles` - A function for fetching profiles
-   `getProfile` - A function for fetching a single profile
-   `getProfileSection` - A function for fetching a single profile's section data
-   `getListProfileItems` - A function for fetching profiles in a list
-   `getProfileTypes` - A function for fetching the information of a profile

Here's examples of how to use these functions:

```js
import{ client, postClient, localize } from 'uniweb-module-sdk';

client
    .get('/api/data', {
        params: {}
    })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

postClient
    .post('/api', formData)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

localize({en: 'Title', fr:'Titre', 'Title', true});

getProfiles('_contentType', '_viewType');

getProfile('_contentType', '_contentId');

getProfileSection('_contentType', '_contentId', '_sectionId');

getListProfileItems('_listId');

getProfileTypes('_contentType', '_viewType');
```

## License

Uniweb SDK is licensed under the MIT license. See LICENSE for more information.
