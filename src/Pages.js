/**
 * A custom router component that manages the rendering of index page and subpages.
 * @module Pages
 */

import React from 'react';
import { website, Profile } from './helper';

/**
 * Custom Router Component
 *
 * This component acts as a router to manage the rendering of pages and subpages within the website.
 * It accepts an array of data objects (`list` prop) representing different content and two render props
 * (`renderIndex` and `renderSubpage`) to customize how the content is displayed.
 *
 * @component
 * @param {Object[]} list - An array of data objects representing subpages.
 * @param {Function} renderIndex - A render prop function to display a summarized view of all subpages.
 * @param {Function} renderSubpage - A render prop function to render the content of a specific subpage.
 * @returns {JSX.Element} - Returns the JSX element for the custom router component.
 *
 * @example
 *
 * // Define an array of data objects representing subpages
 * const profiles = [
 *   { ...profile_1 },
 *   { ...profile_2 },
 *   { ...profile_3 },
 *   ...
 * ];
 *
 * // Example usage of the Custom Router Component
 * <Pages
 *   list={profiles}
 *   renderIndex={(profiles) => {
 *     // Render a summarized view of all subpages (e.g., a list of profiles)
 *     return (
 *       <ul>
 *         {profiles.map((profile) => (
 *           <li key={profile.key}>{profile.title}</li>
 *         ))}
 *       </ul>
 *     );
 *   }}
 *   renderSubpage={(key, profile) => {
 *     // Render the content of a specific subpage based on the provided data
 *     return (
 *       <div key={key}>
 *         <h1>{profile.title}</h1>
 *         <p>{profile.description}</p>
 *       </div>
 *     );
 *   }}
 * />
 */
export default function (props) {
    const { list, renderIndex, renderSubpage, ...rest } = props;

    const { RouteSwitcher } = website.routingComponents;

    const CardsRenderer = () => {
        return renderIndex({ list, ...rest });
    };

    const ItemRender = () => {
        const { useParams } = website.routingComponents;
        const { contentId: uniqueKey } = useParams();

        const item = list.find((i) =>
            i instanceof Profile ? i.contentId === uniqueKey : i.key === uniqueKey
        );

        return item ? renderSubpage(uniqueKey, item) : null;
    };

    return <RouteSwitcher {...{ Cards: CardsRenderer, Item: ItemRender }}></RouteSwitcher>;
}
