import React from 'react';
// import { Profile } from './helper';

const Image = (props) => {
    const {
        // contentType = 'docufolio',
        // contentId,
        profile,
        value,
        alt = '',
        className = 'w-full h-full object-cover',
        externalSrc = ''
    } = props;

    // const profile = Profile.newProfile(contentType, contentId);

    const { src, altText } = profile.getAssetInfo(value, true, alt);

    return <img src={externalSrc || src} className={className} alt={altText} />;
};

export default function DocumentImage(props) {
    const { value } = props;

    if (!value) return null;

    return <Image {...props}></Image>;
}
