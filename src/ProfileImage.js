import React, { useEffect, useState } from 'react';
import { website } from './index';

const FallbackImg = (props) => {
    const { src, rounded, onError = () => {}, onLoad = null, alt = '' } = props;
    return (
        <img
            src={src}
            className={`w-full h-full opacity-0 object-cover ${rounded}`}
            alt={alt}
            loading='lazy'
            onLoad={(event) => {
                if (onLoad) {
                    onLoad();
                }

                event.target.style.opacity = 1;
            }}
            onError={onError}
        />
    );
};

const getSize = (size) => {
    if (window.devicePixelRatio > 1) {
        if (size === 'xs') return 'sm';
        else if (size === 'sm') return 'md';
        else if (size === 'md') return 'lg';
    }

    return size;
};

const ProfileImage = (props) => {
    let { type = 'banner', rounded, profile } = props;

    const size = getSize(props?.size ? props.size : type === 'banner' ? 'md' : 'sm');

    const contentType = profile.getContentType();
    const contentId = profile.getId();
    const version = type === 'banner' ? profile.getBanner() : profile.getAvatar();

    let finalType = contentType === 'resources' ? 'equipment' : contentType;

    const assetRootUrl = website.getAssetRootUrl();

    const base = `${assetRootUrl}${finalType}/${contentId}/${type}/`;
    const defaultBase = `${assetRootUrl}${finalType}/default/${type}/`;
    const suffix = `_v${version}`;

    let ext = website.isWebpSupported() ? 'webp' : 'jpeg';

    const prefix = `${base}${finalType}_profile${suffix}`;
    const defaultPrefix = `${defaultBase}${finalType}_default`;

    const [defaultSrc, setDefaultSrc] = useState(`${defaultPrefix}_${size}.${ext}`);
    const [optSrc, setOptSrc] = useState(`${prefix}_${size}.${ext}`);

    let markup = null;

    useEffect(() => {
        if (version) setOptSrc(`${prefix}_${size}.${ext}`);
    }, [version, prefix, ext, size]);

    const imgRounded = rounded ? (rounded === true ? 'rounded-full' : rounded) : '';

    if (!version) {
        markup = (
            <FallbackImg
                src={defaultSrc}
                rounded={imgRounded}
                alt={`Profile ${type} for ${contentType} ${contentId}`}
                onError={(event) => {
                    if (defaultSrc !== `${defaultPrefix}_opt.jpeg`) setDefaultSrc(`${defaultPrefix}_opt.jpeg`);
                }}></FallbackImg>
        );
    } else {
        markup = (
            <FallbackImg
                src={optSrc}
                rounded={imgRounded}
                alt={`Profile ${type} for ${contentType} ${contentId}`}
                onError={(event) => {
                    if (optSrc === `${prefix}_xs.${ext}`) setOptSrc(`${prefix}_tiny.${ext}`);
                    else if (optSrc === `${prefix}_tiny.${ext}` || optSrc === `${prefix}_${size}.${ext}`) setOptSrc(`${prefix}.jpeg`);
                    else if (optSrc === `${prefix}.jpeg`) setOptSrc(defaultSrc);
                    else if (optSrc === `${defaultPrefix}_${size}.${ext}`) setOptSrc(`${defaultPrefix}_opt.jpeg`);
                }}></FallbackImg>
        );
    }

    return markup;
};

export default ProfileImage;
