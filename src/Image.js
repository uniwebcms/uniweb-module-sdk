/**
 * Render the avatar, banner or other asset of a profile.
 * @module Image
 */

import React from 'react';
import { twMerge } from 'tailwind-merge';

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
 * @prop {bool} [ariaHidden=false] - True for 'aria-hidden="true"'.
 * @prop {string} [loading="lazy"] - The React loading type used.
 * @returns {function} A react component.
 */
export default function (props) {
    const {
        profile,
        type,
        size,
        rounded,
        className = '',
        value,
        alt: altText,
        customStyle = false,
        ariaHidden = false,
        loading = 'lazy'
    } = props;

    const roundClassName = rounded ? (rounded === true ? 'rounded-full' : rounded) : '';

    let src, alt, optSrc;

    if (type === 'banner' || type === 'avatar') {
        ({ url: src, alt } = profile.getImageInfo(type, size));
    } else {
        ({ src, alt, optSrc } = profile.getAssetInfo(value, true, altText));
    }

    const ref = optSrc ? React.useRef(null) : null;

    let imgProps = {
        alt,
        loading,
        'aria-hidden': ariaHidden,
        className: twMerge(
            customStyle ? '' : 'w-full h-full object-cover',
            roundClassName,
            className
        )
    };

    if (optSrc) {
        imgProps.src = optSrc;

        imgProps.ref = ref;

        imgProps.onError = () => {
            if (ref?.current && !ref.current.getAttribute('fallback')) {
                ref.current.src = src;
                ref.current.setAttribute('fallback', true);
            }
        };
    } else {
        imgProps.src = src;
    }

    return <img {...imgProps} />;
}