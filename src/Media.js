import React from 'react';
import Image from './Image';
import { twMerge } from 'tailwind-merge';

export default function Media(props) {
    const { profile, media, className = '' } = props;

    if (!media) return null;

    if (media.hasOwnProperty('imgPos')) {
        const { value, alt, url } = media;

        return <Image className={className} {...{ profile, value, alt, url }} />;
    } else {
        const { src, caption } = media;

        const isYouTube = src.startsWith('https://www.youtube');
        const isVimeo = src.startsWith('https://player.vimeo.com/');

        if (isYouTube) {
            return (
                <div className='relative' style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        className={twMerge('absolute inset-0 w-full h-full', className)}
                        src={src}
                        title={caption}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen></iframe>
                </div>
            );
        } else if (isVimeo) {
            return (
                <div className='relative' style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        className={twMerge('absolute inset-0 w-full h-full', className)}
                        src={src}
                        title={caption}
                        allow='autoplay; fullscreen; picture-in-picture'
                        allowFullScreen></iframe>
                </div>
            );
        } else {
            console.log('Unable to determine media source type');
            return null;
        }
    }
}
