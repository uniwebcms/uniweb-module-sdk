import Link from './Link';
import Image from './Image';
import Asset from './Asset';
import FileLogo from './FileLogo';
import SafeHtml from './SafeHtml';
import Pages from './Pages';
import Icon from './Icon';
import {
    Profile,
    website,
    useGetProfile,
    useLoadProfileBody,
    useProfileFilterState,
    useLinkedProfileFilterState,
    getComponent,
    getPageProfile,
    stripTags
} from './helper';
import MediaIcon from './MediaIcon';
import Media from './Media';
import { twJoin, twMerge } from 'tailwind-merge';

// Methods and objects from the Uniweb engine
const { parseLinksInArticle, getFirstElementInMap } = uniweb.getServices();
export { Profile, website, parseLinksInArticle, getFirstElementInMap, getPageProfile, stripTags };

// React components
export { Link, Image, Asset, Icon, SafeHtml, FileLogo, MediaIcon, Pages, Media };

// Locally defined functions
export {
    useGetProfile,
    useLoadProfileBody,
    useProfileFilterState,
    useLinkedProfileFilterState,
    getComponent
};

// Third-party utilities
export { twJoin, twMerge };
