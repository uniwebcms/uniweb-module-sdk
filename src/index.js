import ProfileImage from './ProfileImage';
import PopoverMenu from './PopoverMenu';
import SmartLink from './SmartLink';
import DocumentImage from './DocumentImage';
import Blogs from './Blogs';
import Badge from './Badge';
import { stripHTMLTags, getFilteredProfileCards } from './helper';
import ProfileCardsFilter from './ProfileCardsFilter';

const website = uniweb.activeWebsite;

const { client, postClient, localize, getProfile, getProfileSection, getListProfileItems, getProfileTypes, findLink, queryFromContent, parseLinksInArticle, getFirstElementInMap, Profile } = uniweb.getServices();

export { client, postClient, localize, getProfile, getProfileSection, getListProfileItems, getProfileTypes, findLink, queryFromContent, parseLinksInArticle, getFirstElementInMap, Profile, website, getFilteredProfileCards };

export { ProfileImage, PopoverMenu, SmartLink, DocumentImage, Blogs, Badge, ProfileCardsFilter };

export { stripHTMLTags };
