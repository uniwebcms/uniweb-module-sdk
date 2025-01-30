import { useState, useEffect, lazy } from 'react';

const website = uniweb.activeWebsite;
const Profile = uniweb.Profile;

const { useParams, useLocation, useSWR, useNavigate } = website.getRoutingComponents();

const getComponent = (type, name) => lazy(() => uniweb.getComponent(type, name));

const getPageProfile = () => {
    return website.activePage ? website.activePage.getPageProfile() : null;
};

/**
 * Create a React state-effect combo to trigger the initialization of a profile
 * so that all of its data can be accessed via the at() method.
 *
 * @param {Profile} profile
 * @returns {bool}
 */
const useLoadProfileBody = (profile) => profile.useReadyStateEffect(useState, useEffect);

/**
 * Create a React state-effect combo to trigger the initialization of a profile
 * so that all of its data can be accessed via the at() method. It is different from
 * useLoadProfileBody() in that it takes a profileType and contentId as parameters
 * instead of a profile object.
 *
 * @param {string} profileType - A profile object or a profile type string.
 * @param {int|string} contentId - The ID of the profile if profileOrType is a string.
 * Otherwise, it must be empty.
 * @returns {Profile|false} Returns the profile object, fetching error, mutate function, and selfMutate function.
 * Returns false while the profile data is being fetched.
 */
const useGetProfile = (profileType, contentId) => uniweb.useCompleteProfile(profileType, contentId);

const useBlockState = (block, initializer) => {
    return block.useBlockState(useState, initializer);
};

const useBlockInputFilterState = (block, initialSelection) => {
    const profiles = block.input?.profiles || [];
    const histogram = generateHistogram(profiles);

    const initializer = {
        unfiltered: profiles,
        filters: histogram,
        filtered: filterProfiles(profiles, histogram, initialSelection),
        selection: initialSelection || {}
    };

    const [blockState, setBlockState] = block.useBlockState(useState, initializer);

    // Reset the state when the block changes
    useEffect(() => {
        setBlockState(block.state || initializer); // the block.state may contain data not related to the filter state, consider remove it
    }, [block]);

    const updateBlockState = (selection) => {
        setBlockState({
            ...blockState,
            selection,
            filtered: filterProfiles(blockState.unfiltered, blockState.filters, selection)
        });
    };

    return [blockState, updateBlockState];
};

/**
 * Strip html string uses regular expressions;
 * Remove all HTML tags from an HTML string and returns a plain string
 * @param {*} htmlString
 * @returns
 */
const stripTags = (htmlString) => {
    if (!htmlString || typeof htmlString !== 'string') return '';

    // Remove HTML tags using regular expression
    const plainString = htmlString.replace(/<[^>]*>/g, '');

    // Decode HTML entities
    const decodedString = new DOMParser().parseFromString(plainString, 'text/html').body
        .textContent;

    return decodedString;
};

const generateHistogram = (profiles) => {
    const histogram = {};

    const isSameType =
        profiles.length &&
        profiles.every((p) => p.getProfileType() === profiles[0].getProfileType());

    if (!isSameType) return histogram;

    const profileType = profiles[0].getProfileType();

    const filterableFields = Profile.getFilterableFields(profileType);

    filterableFields.forEach((field) => {
        let { name, label, byProfile } = field;

        label = website.localize(label);

        histogram[label] = {};

        profiles.forEach((profile) => {
            const { head } = profile.getBasicInfo();

            let value = head[name]
                ? Array.isArray(head[name])
                    ? head[name][1] || ''
                    : head[name]
                : '';

            if (typeof value === 'object' && byProfile) {
                const { titleFieldName } = Profile.getProfileTitleAndCaptionFieldName(byProfile);

                value = value[titleFieldName];
            }

            if (value) {
                if (histogram[label][value]) {
                    histogram[label][value].push(profile.key);
                } else {
                    histogram[label][value] = [profile.key];
                }
            }
        });
    });

    return histogram;
};

const filterProfiles = (profiles, histogram, selection) => {
    if (!selection) return profiles;

    const { _search, _sort, ...otherFilters } = selection;

    const filtered = profiles.filter((profile) => {
        let valid = true;

        const { title } = profile.getBasicInfo();

        if (_search) {
            valid = title.toLowerCase().includes(_search.toLowerCase());
        }

        Object.entries(otherFilters).forEach(([key, value]) => {
            if (value) {
                const ids = histogram[key]?.[value] || [];
                valid = valid && ids.includes(profile.key);
            }
        });

        return valid;
    });

    if (_sort) {
        filtered.sort((a, b) => {
            const infoA = a.basicInfo;
            const infoB = b.basicInfo;

            const titleA = infoA.title;
            const titleB = infoB.title;

            const editTimeA = infoA.lastEditTime ? new Date(infoA.lastEditTime).getTime() : 0;
            const editTimeB = infoB.lastEditTime ? new Date(infoB.lastEditTime).getTime() : 0;

            switch (_sort) {
                case 'title':
                    return titleA.localeCompare(titleB);
                case 'title-reverse':
                    return titleB.localeCompare(titleA);
                case 'lastedit':
                    return editTimeA - editTimeB;
                case 'lastedit-reverse':
                    return editTimeB - editTimeA;
            }
        });
    }

    return filtered;
};

export {
    Profile,
    website,
    getComponent,
    getPageProfile,
    stripTags,
    useGetProfile,
    useLoadProfileBody,
    useBlockInputFilterState,
    useBlockState,
    useParams,
    useLocation,
    useSWR,
    useNavigate
};
