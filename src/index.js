import ProfileImage from './ProfileImage';
import PopoverMenu from './PopoverMenu';
import SmartLink from './SmartLink';
import DocumentImage from './DocumentImage';
import Blogs from './Blogs';
import Badge from './Badge';
import Map from './Map';
import ProfileCardsFilter from './ProfileCardsFilter';
import { stripHTMLTags, getFilteredProfileCards, getFilteredProfiles, completeProfile } from './helper';

const website = uniweb.activeWebsite;

const { client, postClient, localize, getProfile, getProfileSection, getListProfileItems, getProfileTypes, findLink, queryFromContent, parseLinksInArticle, getFirstElementInMap, Profile } = uniweb.getServices();

export { client, postClient, localize, getProfile, getProfileSection, getListProfileItems, getProfileTypes, findLink, queryFromContent, parseLinksInArticle, getFirstElementInMap, Profile, website };

export { ProfileImage, PopoverMenu, SmartLink, DocumentImage, Blogs, Badge, ProfileCardsFilter, Map };

export { stripHTMLTags, getFilteredProfileCards, getFilteredProfiles, completeProfile };
