import React, { Suspense } from 'react';
import { getComponent } from './helper';

const SimpleLink = getComponent(null, 'SimpleLink');

/**
 * Create a React DOM router Link that wraps content that functions as a
 * link to a given target page.
 *
 * @param {Object} props - The component properties.
 * @param {Profile?} props.profile - The target profile if the link points to a profile.
 * @param {Object?} props.options - Options to control the destination on a profile.
 * @param {string?} props.options.tab - The target tab of a profile.
 * @param {string?} props.options.mode - The target mode of a profile. Defaults to 'view'.
 * @param {string?} props.options.searchParams - Extra arguments for the profile HREF.
 * @param {string?} [props.target='_self'] - A `target` attribute for the anchor element.
 * @param {string?} props.title - A `title` attribute for the anchor element.
 * @param {string|Profile} props.style - A `style` attribute for the anchor element.
 * @param {string?} props.className - A `className` attribute for the anchor element.
 * @param {string?} props.to - An `href` attribute for the anchor element.
 * @param {string?} props.ariaLabel - An ARIA label for the anchor element.
 * @param {ReactNode|ReactNodeArray} props.children - The contents for the Link container.
 * @returns {function} A Link component.
 */
export default function Link(props) {
	return (
		<Suspense fallback={''}>
			<SimpleLink {...props} />
		</Suspense>
	);
}
