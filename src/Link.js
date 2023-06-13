/**
 * Wrapper that links to a Profile or custom href.
 * @module Link
 */

import React from 'react';
import { website } from './helper';

const { Link } = website.routingComponents;

/**
 * Create a React DOM router Link that wraps content that functions as a
 * link to a given target page.
 *
 * @example
 * function MyComponent() {
 *   return (
 *      <Link to='https:...' className='xxx'>
 *          <span>A link</span>
 *      </Link>
 *   );
 * }
 *
 * @component Link
 * @prop {Profile?} profile - The target profile if the link points to a profile.
 * @prop {Object?} [options] - Options to control the destination on a profile.
 * @prop {string?} options.tab - The target tab of a profile.
 * @prop {string?} options.mode - The target mode of a profile. Defaults to 'view'.
 * @prop {string?} options.searchParams - Extra arguments for the profile HREF.
 * @prop {string?} [target] - A `target` attribute for the anchor element.
 * @prop {string?} title - A `title` attribute for the anchor element.
 * @prop {string|Profile} style - A `style` attribute for the anchor element.
 * @prop {string?} className - A `className` attribute for the anchor element.
 * @prop {string?} to - An `href` attribute for the anchor element.
 * @prop {string?} ariaLabel - An ARIA label for the anchor element.
 * @prop {ReactNode|ReactNodeArray} children - The contents for the Link container.
 * @returns {function} A Link component.
 */
export default function (props) {
    return <Link {...props} />;
}
