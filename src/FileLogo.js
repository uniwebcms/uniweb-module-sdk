/**
 * Render a file Icon
 * @module FileLogo
 */

import * as React from 'react';
import Excel from '../icons/excel.svg';
import Other from '../icons/other.svg';
import Pdf from '../icons/pdf.svg';
import Ppt from '../icons/ppt.svg';
import Word from '../icons/word.svg';
import Txt from '../icons/txt.svg';
import HTML from '../icons/html.svg';
import { BsImageFill } from 'react-icons/bs';

/**
 * Return a Icon based on the filename.
 *
 * @example
 * function MyComponent() {
 *   return (
 *       <FileLogo profile={profile} value="xxx" withDownload />
 *   );
 * }
 *
 * @component FileLogo
 * @prop {string} filename - The file name.
 * @prop {string} size - The size of the icon.
 * @returns {function} A react component.
 */
export default function (props) {
    const { filename, size = '5' } = props;

    const ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length).toLowerCase();

    let Render;

    const isImg = ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext);

    if (isImg) return <BsImageFill className={`w-${size} h-${size} flex-shrink-0`}></BsImageFill>;

    if (['xlsx', 'xlsm', 'xlsb', 'xls'].includes(ext)) {
        Render = Excel;
    } else if (ext === 'pdf') {
        Render = Pdf;
    } else if (ext === 'txt') {
        Render = Txt;
    } else if (ext === 'ppt' || ext === 'pptx') {
        Render = Ppt;
    } else if (ext === 'docx' || ext === 'doc') {
        Render = Word;
    } else if (ext === 'html') {
        Render = HTML;
    } else {
        Render = Other;
    }

    return <Render className={`w-${size} h-${size} flex-shrink-0`}></Render>;
}
