import React from 'react';

export default function (props) {
    const { profile, value, alt: altText, className = '' } = props;

    const { src, alt } = profile.getAssetInfo(value, true, altText);

    // TODO: return based on asset type, could be pdf, word, eslx...

    return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />;
}
