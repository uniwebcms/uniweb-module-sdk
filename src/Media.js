import React, { useState } from 'react';
import Image from './Image';
import { twMerge } from 'tailwind-merge';
import { BiPlay } from 'react-icons/bi';

export default function Media(props) {
    const { profile, media, className = '', style, asBg = false, thumbnail } = props;

    if (!media) return null;

    if (media.hasOwnProperty('imgPos')) {
        const { value, alt, url } = media;

        return <Image className={className} {...{ profile, value, alt, url }} />;
    } else {
        const { src, caption } = media;
        // local video
        if (src.startsWith('https://assets.uniweb.app/')) {
            return (
                <div className={twMerge('relative')} style={style ?? { paddingBottom: '56.25%' }}>
                    <video
                        title={caption}
                        src={src}
                        className={twMerge('absolute inset-0 w-full h-full', className)}
                        controls
                    ></video>
                </div>
            );
        } else {
            const isYouTube = src.startsWith('https://www.youtube');
            const isVimeo = src.startsWith('https://player.vimeo.com/');

            const urlParams = asBg
                ? isYouTube
                    ? '?autoplay=1&mute=1&controls=0&loop=1'
                    : '?background=1'
                : thumbnail
                ? '?autoplay=1'
                : '';

            const allow = isYouTube
                ? 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                : 'autoplay; fullscreen; picture-in-picture';

            const frame = (
                <iframe
                    className={twMerge('absolute inset-0 w-full h-full', className)}
                    src={`${src}${urlParams}`}
                    title={caption}
                    allow={allow}
                    allowFullScreen
                ></iframe>
            );

            if (isYouTube || isVimeo) {
                return asBg ? (
                    <div>{frame}</div>
                ) : (
                    <div
                        className={twMerge('relative')}
                        style={style ?? { paddingBottom: '56.25%' }}
                    >
                        {thumbnail ? (
                            <FacadeVideo
                                profile={profile}
                                thumbnail={thumbnail}
                                className={className}
                            >
                                {frame}
                            </FacadeVideo>
                        ) : (
                            frame
                        )}
                    </div>
                );
            } else {
                console.log('Unsupported media type, expected YouTube or Vimeo.');
                return null;
            }
        }
    }
}

const FacadeVideo = ({ profile, thumbnail, children, className }) => {
    const [showVideo, setShowVideo] = useState(false);

    const { value, alt, url } = thumbnail;

    if (!showVideo) {
        return (
            <>
                <div className="absolute inset-0 w-full h-full">
                    <Image {...{ profile, value, alt, url, className }} />
                </div>
                <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group"
                    onClick={() => {
                        setShowVideo(true);
                    }}
                >
                    <div className="w-12 h-12 py-2 pl-2.5 pr-1.5 ring-1 !ring-gray-300 rounded-full !bg-white">
                        <BiPlay className="w-full h-full !text-indigo-400 group-hover:!text-indigo-700" />
                    </div>
                </div>
            </>
        );
    } else {
        return children;
    }
};
