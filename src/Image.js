/**
 * Render the avatar, banner or other asset of a profile.
 * @module Image
 */

import React from 'react';

/**
 * Create a image with given profile and type.
 *
 * @example
 * function MyComponent() {
 *   return (
 *       <Image profile={profile} type="banner" size="sm" rounded className="hover:cursor-pointer">
 *			{label}
 *		 </Image>
 *   );
 * }
 *
 * @component Asset
 * @prop {Profile} profile - The target profile.
 * @prop {string} type - One of the following: 'avatar', 'banner' or 'image'.
 * @prop {string} size - One of the following: 'xs', 'sm', 'md', 'lg'.
 * @prop {string|bool} [rounded=false] - true for 'rounded-full' or a specific class name.
 * @prop {string} className - Additional tailwind class names.
 * @prop {string} value - The value of the asset when type is not 'avatar' or 'banner'.
 * @prop {string} alt - The alt of the asset when type is not 'avatar' or 'banner'.
 * @returns {function} A react component.
 */
export default function (props) {
    const { profile, type, size, rounded, className = '', value, alt: altText } = props;

    const roundClassName = rounded ? (rounded === true ? 'rounded-full' : rounded) : '';

    let src, alt;

    if (type === 'banner' || type === 'avatar') {
        ({ url: src, alt } = profile.getImageInfo(type, size));
    } else {
        ({ src, alt } = profile.getAssetInfo(value, true, altText));
    }

    return (
        <img
            src={src}
            className={`w-full h-full object-cover ${roundClassName} ${className}`}
            alt={alt}
            loading='lazy'
        />
    );
}
