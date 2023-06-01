import React from 'react';
import { website } from './index';

export default function ProfileImage(props) {
    const { type = 'banner', rounded, profile, size } = props;

    const info = website.getProfileImageUrl(profile, type, size);

    // const imgRef = useRef(null);

    return (
        <img
            // ref={imgRef}
            src={info.url}
            className={`w-full h-full object-cover ${rounded}`}
            alt={info.alt}
            loading='lazy'
            // onError={() => {
            //     if (imgRef.current && imgRef.current.src !== info.defaultUrl) {
            //         imgRef.current.src = info.defaultUrl;
            //     }
            // }}
        />
    );
}
