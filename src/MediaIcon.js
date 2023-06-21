/**
 * Render a social media icon
 * @module MediaIcon
 */

import React from 'react';
import { AiFillGooglePlusCircle, AiOutlineLink } from 'react-icons/ai';
import {
    SiAcademia,
    SiMedium,
    SiMendeley,
    SiOrcid,
    SiLinkedin,
    SiPinterest,
    SiFacebook,
    SiTwitter,
    SiYoutube
} from 'react-icons/si';
import { FaResearchgate, FaTumblrSquare, FaQuora } from 'react-icons/fa';
import { cn } from './CN';

/**
 * Return a Icon based on the social media type.
 *
 * @example
 * function MyComponent() {
 *   return (
 *       <MediaIcon type={'facebook'} size="10" />
 *   );
 * }
 *
 * @component MediaIcon
 * @prop {string} type - The media type.
 * @prop {string} size - The size of the icon.
 * @prop {string} className - Additional tailwind className.
 * @returns {function} A react component.
 */

export default function MediaIcon({ type, size = '8', className = '' }) {
    const map = {
        academia_edu: SiAcademia,
        facebook: SiFacebook,
        google_plus: AiFillGooglePlusCircle,
        linkedin: SiLinkedin,
        medium: SiMedium,
        mendeley: SiMendeley,
        orcid_page: SiOrcid,
        pinterest: SiPinterest,
        quora: FaQuora,
        researchgate: FaResearchgate,
        tumblr: FaTumblrSquare,
        twitter: SiTwitter,
        youtube: SiYoutube
    };

    let Icon = null;

    if (map[type]) {
        Icon = map[type];
    } else {
        Icon = AiOutlineLink;
    }

    return <Icon className={cn(`w-${size} h-${size}`, className)} />;
}
