/**
 * Render the avatar or banner of a profile.
 * @module ProfileImage
 */

import React from 'react';

/**
 * Create a Profile image such as a banner or avatar.
 *
 * @example
 * function MyComponent() {
 *   return (
 *       <div>
 *           <ProfileImage profile={profile} type='banner' />
 *       </div>
 *   );
 * }
 *
 * @component ProfileImage
 * @prop {Profile} profile - The target profile.
 * @prop {string} type - One of the following: 'avatar' or 'banner'.
 * @prop {string|bool} [rounded=false] - true for 'rounded-full' or a specific class name.
 * @prop {string} size - One of the following: 'xs', 'sm', 'md', 'lg'.
 * @returns {function} An Image component.
 */
export default function ProfileImage(props) {
	const { profile, type, rounded, size } = props;

	const { url, alt } = profile.getImageInfo(type, size);

	const imgRounded = rounded ? (rounded === true ? 'rounded-full' : rounded) : '';

	return (
		<img
			src={url}
			className={`w-full h-full object-cover ${imgRounded}`}
			alt={alt}
			loading="lazy"
		/>
	);
}
