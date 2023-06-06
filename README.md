# Uniweb Module Software Development Kit (SDK)

Uniweb Module SDK is an npm module that provides a set of React components and utility functions that can be used to make it easier to create and manage widgets.

<!-- This module provides five components: `ProfileImage`, `PopoverMenu`, `SmartLink`, `DocumentImage` and `Blogs`. -->

## Installation

You can install Uniweb Module SDK via npm by running the following command:

```bash
npm install @uniwebcms/module-sdk
```

Or via yarn:

```bash
yarn add @uniwebcms/module-sdk
```

## Usage

Read the [API reference](docs/api.md) to learn about the components and functions offered by the SDK.

## Example: Rendering a list of profiles linked to a source profile

In this example we render a webpage that offers functionality to search, filter and sort **project cards** linked to a given a **source group profile** `profile`. The managing of rendering states is done with the SDK hook `useLinkedProfileFilterState`, which returns a list of project profiles linked to the source group profile and a function to update their filtering state.

Our goal in this example is to render project cards showing the description of each project, but the returned profile objects only include **partial information** about each project. In particular, each project profile object has the `title` and `subtitle` of the project but not its `description`. We address this limitation by  adding extra logic to fetch the **full information** of each project profile.

The complete set of sections of a profile are collectively referrer to as the **body** of the profile. The profile objects obtained from `useLinkedProfileFilterState` do not include profile body information. They only contain basic information about each profile, such as standard `title` and `subtitle` values as well as the complete top section of the profile, which is known as the **head** of the profile. In this example, the `description` value is not located in the head section so we need to get the body of the profile to be able to access it.

The body of a profile can be loaded asynchronously when needed with the SDK hook `useLoadProfileBody`. In this example, we load the body of each project profile so that we can access the `description` field in the `project_description` section.

```javascript
import React from 'react';
import {
    Link,
    ProfileImage,
    stripHTMLTags,
    ProfileFilter,
    ProfileSorter,
    useLoadProfileBody,
    useLinkedProfileFilterState,
} from '@uniwebcms/module-sdk';
import Banner from './Banner';

/**
 * Render basic project profile information as a card.
 *
 * @prop {Profile} project - A project profile.
 * @returns {function} - A project renderer.
 */
const Project = ({ project }) => {
    let description = '';

    // Call the SDK hook to get the full data of a profile so that we can call at() on it to
    // get data that is not located in the profile head.
    if (useLoadProfileBody(project)) {
        // The description field requires the full profile data. Here we can choose to return null if
        // hasData is false, or we can set the description to the empty string, render what we have in
        // the profile head, and then let the component rerender when the hasData state becomes true.
        description = project.at('project_description/description');
    }

    // The basic profile info is always available from the partial profile data.
    const { title, subtitle } = project.getBasicInfo();

    return (
        <Link
            profile={project}
            className="h-72 overflow-hidden group hover:bg-gray-50 rounded-xl px-6 py-4"
        >
            <div className="flex justify-between">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                    <ProfileImage profile={project} type="banner" />
                </div>
            </div>

            <div className="text-xl font-medium text-gray-700 truncate mt-5">
                {title}
            </div>
            {subtitle ? (
                <div className="text-lg font-normal text-gray-500 truncate mt-2">
                    {subtitle}
                </div>
            ) : null}
            <div
                className="text-base text-gray-600 mt-1 line-clamp-3"
                title={stripHTMLTags(description)}
                dangerouslySetInnerHTML={{ __html: description }}
            ></div>
        </Link>
    );
};

/**
 * Render a list of project cards that belong to a given group profile.
 *
 * @prop {Profile} profile - The main profile containing a list of projects.
 * @prop {Profile} page - The current website page.
 * @returns {function} - Renderer of a list of project cards.
 */
export default function Projects({ profile, page }) {
    // Use the provided custom React hook to get a list of profiles
    // that can be filtered and sorted by the user.
    const [filter, setFilter] = useLinkedProfileFilterState(
        profile,
        'project/profile',
        'group_projects',
        'project'
    );

    // Get the list of filtered and sorted projects linked to the group profile.
    const { filtered } = filter;

    // Use the page of the title as the title of the header image.
    const pageTitle = page.getPageTitle();

    // Use the banner image of the group profile to decorate the page.
    return (
        <>
            <Banner title={pageTitle} profile={profile} />
            <section className="wrapper">
                <div className="flex justify-end">
                    <div className="flex space-x-1 items-center">
                        <ProfileFilter filter={filter} setFilter={setFilter}>
                            <ProfileFilter.Search />
                            <ProfileFilter.Menu />
                        </ProfileFilter>
                        <ProfileSorter filter={filter} setFilter={setFilter} />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-20 gap-20">
                    {filtered.map((project) => {
                        return <Project key={project.key} project={project} />;
                    })}
                </div>
            </section>
        </>
    );
}
```

<!-- #### Link

The `Link` component is used to create link element. It accepts the following props:

-   `to` - A Profile object or a string href to use as the destination.
-   `external` - Optional. A boolean explicitly indicating whether the link us to open in a different webpage.
-   `ariaLabel` - The `aria-label` property of the link
-   `title` - The `title` property of the link

> It also accepts the standard properties of React element (e.g., 'className', 'target', 'children', 'onClick')

Here's an example of how to use the `PopoverMenu` component:

```jsx
import { Link } from '@uniwebcms/module-sdk';

function MyComponent() {
    return (
        <div>
            <Link to='https:...' className='xxx'>
                <span>A link</span>
            </Link>
        </div>
    );
}
```

#### ProfileImage

The `ProfileImage` component is used to display a banner or avatar image of a `profile` element based on the provided parameters. It accepts the following props:

-   `profile` - A profile object.
-   `type` - the type of the image (e.g., 'banner', 'avatar')

Here's an example of how to use the `ProfileImage` component:

```jsx
import { ProfileImage } from '@uniwebcms/module-sdk';

function MyComponent() {
    return (
        <div>
            <ProfileImage profile={profile} type='banner' />
        </div>
    );
}
```

#### Blog

The `Blog` component is used to render a page that displays a list of articles and views the content of an individual article. It accepts all the props came from parent element and the following extra props:

-   `recommenderMode` - The mode that indicates the display of either `latest blogs` or `relative blogs` under the content of a single blog (e.g., 'latest', 'relative')

Here's an example of how to use the `Blogs` component:

```jsx
import { Blogs } from '@uniwebcms/module-sdk';

function MyComponent(props) {
    return (
        <div>
            <Blog {...props} recommenderMode='relative' />
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
import { PopoverMenu } from '@uniwebcms/module-sdk';

function MyComponent() {
    const options = [<div>Option 1</div>, <div>Option 2</div>, <div>Option 2</div>];

    return (
        <div>
            <PopoverMenu trigger={<button>Open Menu</button>} options={options} triggerClassName='px-2 py-1 text-blue-600 text-sm border rounded' position='top-0 left-4' width='200px' zIndex='10' />
        </div>
    );
}
```

#### DocumentImage

The `DocumentImage` component is used to render an element based on the uploaded assets of the `file` field in a `profile` section. The asset can be either an image or a file. In the case of a regular file, this component renders an element with preview functionality if applicable. It accepts the following props:

-   `profile` - A Profile object.
-   `value` - The value of the file field to render.
-   `activeLang` - Specify the language of the value if it is a `multi-lingual` field.
-   `className` - The `className` of the element.
-   `filePreview` - A boolean indicate weather show file preview or not.

Here's an example of how to use the `DocumentImage` component:

```jsx
import { DocumentImage } from '@uniwebcms/module-sdk';

function MyComponent() {
    return (
        <div>
            <DocumentImage contentType='docufolio' viewType='profile' contentId='1' value='_fieldValue' activeLang='en' className='xxx' filePreview={true} />
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
import{ client, postClient, localize } from '@uniwebcms/module-sdk';

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
``` -->

* * *

## License

Uniweb SDK is licensed under the MIT license. See LICENSE for more information.
