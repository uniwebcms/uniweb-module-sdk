# Uniweb Module Software Development Kit (SDK)

[Uniweb CMS](https://uniwebcms.com) is a **web engine** with advanced built-in intelligence to manage rich data and build websites from templates. The logic that is necessary for creating the user interface of a website exists at the level of **web components** that are powered by the web engine.

The integration of custom components into a Uniweb system is done via Webpack Federated Modules. The **Uniweb Module SDK** is a software development kit that provides a thin wrapper around the underlying Uniweb JavaScript engine. The SDK provides a tailored and consistent API layer for the underlying web engine.

The main building blocks provided by the engine fall into two categories: Custom React Hooks and General purpose components.

## Custom React Hooks

- useLoadProfileBody
- useLinkedProfileFilterState
- useGetProfile

## General purpose components

- Asset
- Image
- Link

By using the SDK, a component creator is freed from having to implement low-level functionality or deal with complex backend requests. Creating a link to a page or fetching an asset become simple tasks when using the SDK. Similarly, when using the Custom React Hooks, a component creator can enjoy a simplified management of rendering states for common use cases.

## Uniweb Components

A Uniweb Component is a React JS component whose props are 4 objets: `profile`, `block`, `page` , and `website`. The `profile` object represents the source data of a website. The `block` object contains the settings for the component, which is considered a **building block** within a webpage. The `page` object provides information about the current webpage being rendered as a sequence of buildign blocks. Finally, the `website` provides information about the entire website. Most components only need to work with the `profile` and `block` props. [Learn more about Uniweb components](https://github.com/uniwebcms/uniweb-module-builder/blob/main/docs/components.md)

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
import {Link, Image, useLoadProfileBody, useLinkedProfileFilterState} from '@uniwebcms/module-sdk';
import Filter from './filter'; // example component
import Sorter from './sorter'; // example component
import Banner from './banner'; // example component

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
                    <Image profile={project} type="banner" />
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
                title={project.stripTags(description)}
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
    const [filter, setFilter] = useLinkedProfileFilterState(profile, 'project');

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
                        <Filter filter={filter} setFilter={setFilter}>
                            <Filter.Search />
                            <Filter.Menu />
                        </Filter>
                        <Sorter filter={filter} setFilter={setFilter} />
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


* * *

## License

Uniweb SDK is licensed under the MIT license. See LICENSE for more information.
