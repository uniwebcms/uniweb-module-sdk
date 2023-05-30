import ProfileImage from './ProfileImage';
import PopoverMenu from './PopoverMenu';
import SmartLink from './SmartLink';
import DocumentImage from './DocumentImage';
import Blogs from './Blogs';
import Badge from './Badge';
import Map from './Map';
import ProfileCardsFilter from './ProfileCardsFilter';
import { stripHTMLTags, useCompleteProfile, useProfileGetData, useProfileReadyStateEffect, useLinkedProfileFilterState } from './helper';

const website = uniweb.activeWebsite;
const localize = website.localize;

// methods from uniweb engine
const { getListProfileItems, parseLinksInArticle, getFirstElementInMap } = uniweb.getServices();
export { localize, getListProfileItems, parseLinksInArticle, getFirstElementInMap };

// React components
export { ProfileImage, PopoverMenu, SmartLink, DocumentImage, Blogs, Badge, ProfileCardsFilter, Map };

// methods from local helper
export { stripHTMLTags, useCompleteProfile, useProfileGetData, useProfileReadyStateEffect, useLinkedProfileFilterState };
