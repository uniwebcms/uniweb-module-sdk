/**
 * Render a page that displays a list of articles and views the content of an individual article. It accepts all the props came from parent element and the following extra props:
 * @module Blog
 */

import React, { Suspense } from 'react';
import { getComponent } from './helper';

const Component = getComponent('widgets', 'Blogs');

/**
 * The `Blog` component is used to render a page that displays a list of articles and views the content of an individual article. It accepts all the props came from parent element and the following extra props:
 * @component Blog
 * @param {Object} props
 * @returns function A React component.
 */
export default function Blog(props) {
	return (
		<Suspense fallback={''}>
			<Component {...props} />
		</Suspense>
	);
}
