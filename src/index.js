import ProfileImage from './ProfileImage';
import PopoverMenu from './PopoverMenu';
import Link from './Link';
import DocumentImage from './DocumentImage';
import Blog from './Blog';
import Badge from './Badge';
import Map from './Map';
import ProfileFilter from './ProfileFilter';
import ProfileSorter from './ProfileSorter';
import SearchBox from './SearchBox';
// import ProfileArticles from './components/ProfileArticles';
import {
    Profile,
    website,
    stripHTMLTags,
    useGetProfile,
    useLoadProfileBody,
    useLinkedProfileFilterState,
    getComponent
} from './helper';

// methods or objects from uniweb engine
const { parseLinksInArticle, getFirstElementInMap } = uniweb.getServices();
export { Profile, website, parseLinksInArticle, getFirstElementInMap };

// React components
export {
    ProfileImage,
    PopoverMenu,
    Link,
    DocumentImage,
    Blog,
    Badge,
    ProfileFilter,
    Map,
    // ProfileArticles,
    SearchBox,
    ProfileSorter
};

// methods from local helper
export {
    stripHTMLTags,
    useGetProfile,
    useLoadProfileBody,
    useLinkedProfileFilterState,
    getComponent
};
