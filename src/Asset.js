/**
 * Render the asset file and provide a download link
 * @module Asset
 */

import React, { forwardRef, useImperativeHandle } from 'react';
import { HiCloudDownload } from 'react-icons/hi';
import FileLogo from './FileLogo';

/**
 * Create a card-styled component that displays a preview of the asset file, along with the title, description, and a download link.
 *
 * @example
 * function MyComponent() {
 *   return (
 *       <Asset profile={profile} value="xxx" withDownload />
 *   );
 * }
 *
 * @component Asset
 * @prop {Profile} profile - The target profile.
 * @prop {string} value - The value of the asset file.
 * @prop {string|bool} [withDownload=true] - true for 'rounded-full' or a specific class name.
 * @returns {function} A react component.
 */
const Asset = forwardRef((props, ref) => {
    const { value, profile, withDownload = true } = props;

    let filename = value || '';

    const { href, src, alt } = profile.getAssetInfo(value, true, filename);

    const basename = filename.substring(filename.lastIndexOf('/') + 1, filename.length);

    const DownloadWrapper = ({ children }) => {
        return withDownload ? (
            <a
                href={href}
                target='_blank'
                download={basename}
                onClick={(e) => {
                    e.preventDefault();
                    downloadFile();
                }}>
                <HiCloudDownload
                    className={`text-blue-400 w-6 h-6 absolute top-3 right-3 invisible group-hover:visible`}
                />
                {children}
            </a>
        ) : (
            <>{children}</>
        );
    };

    const downloadFile = () => {
        fetch(href + '&download=true')
            .then((res) => res.json())
            .then((res) => {
                window.location.href = res;
            });
    };

    let backupImg = (
        <div className={`w-full h-full bg-white flex items-center justify-center`}>
            <FileLogo filename={basename} size='24'></FileLogo>
        </div>
    );

    const [markup, setMarkup] = React.useState(
        <div className={`h-full overflow-hidden relative flex items-center`}>
            <DownloadWrapper>
                <img
                    className={`h-full w-full`}
                    src={src}
                    alt={alt}
                    onError={() => {
                        setMarkup(backupImg);
                    }}
                />
            </DownloadWrapper>
        </div>
    );

    useImperativeHandle(ref, () => ({
        triggerDownload: () => {
            downloadFile();
        }
    }));

    return markup;
});

export default Asset;
