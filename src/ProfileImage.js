import React from 'react';

/**
 * Create a Profile image such as a banner or avatar.
 *
 * @param {Object} props - The component properties.
 * @param {Profile} props.profile - The target profile.
 * @param {string} props.type - One of the following: 'avatar' or 'banner'.
 * @param {string|bool} [props.rounded=false] - true for 'rounded-full' or a specific class name.
 * @param {string} props.size - One of the following: 'xs', 'sm', 'md', 'lg'.
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
