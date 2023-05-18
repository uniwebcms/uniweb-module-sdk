import ProfileImage from './ProfileImage';
import PopoverMenu from './PopoverMenu';
import SmartLink from './SmartLink';
import DocumentImage from './DocumentImage';
import Blogs from './Blogs';
import { stripHTMLTags } from './helper';

const website = uniweb.activeWebsite;

const { client, postClient, localize, getProfile, getProfileSection, getListProfileItems, getProfileTypes, findLink, queryFromContent, parseLinksInArticle, getFirstElementInMap, Profile } = uniweb.getServices();

export { client, postClient, localize, getProfile, getProfileSection, getListProfileItems, getProfileTypes, findLink, queryFromContent, parseLinksInArticle, getFirstElementInMap, Profile, website };

export { ProfileImage, PopoverMenu, SmartLink, DocumentImage, Blogs };

export { stripHTMLTags };
