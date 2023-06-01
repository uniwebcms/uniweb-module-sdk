import React from 'react';

export default function ProfileImage(props) {
    const { profile, type, rounded, size } = props;

    const { url, alt } = profile.getImageInfo(type, size);

    const imgRounded = rounded ? (rounded === true ? 'rounded-full' : rounded) : '';

    return <img src={url} className={`w-full h-full object-cover ${imgRounded}`} alt={alt} loading='lazy' />;
}
