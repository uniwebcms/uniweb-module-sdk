import ProfileImage from './ProfileImage';
import PopoverMenu from './PopoverMenu';
import SmartLink from './SmartLink';
import DocumentImage from './DocumentImage';
import Blogs from './Blogs';

const { client, postClient, localize, getProfiles, getProfile, getProfileSection, getListProfileItems, getProfileTypes, findLink, queryFromContent, parseLinksInArticle, getFirstElementInMap } = uniweb.getServices();

export { client, postClient, localize, getProfiles, getProfile, getProfileSection, getListProfileItems, getProfileTypes, findLink, queryFromContent, parseLinksInArticle, getFirstElementInMap };

export { ProfileImage, PopoverMenu, SmartLink, DocumentImage, Blogs };
