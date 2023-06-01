import ProfileImage from './ProfileImage';
import PopoverMenu from './PopoverMenu';
import SmartLink from './SmartLink';
import DocumentImage from './DocumentImage';
import Blog from './Blog';
import Badge from './Badge';
import Map from './Map';
import ProfileFilter from './ProfileFilter';
import {
    stripHTMLTags,
    useGetProfile,
    useLoadProfileBody,
    useLinkedProfileFilterState
} from './helper';

const website = uniweb.activeWebsite;

// methods or objects from uniweb engine
const { parseLinksInArticle, getFirstElementInMap, Profile } = uniweb.getServices();
export { Profile, website, parseLinksInArticle, getFirstElementInMap };

// React components
export { ProfileImage, PopoverMenu, SmartLink, DocumentImage, Blog, Badge, ProfileFilter, Map };

// methods from local helper
export { stripHTMLTags, useGetProfile, useLoadProfileBody, useLinkedProfileFilterState };
