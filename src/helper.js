import { useState, useEffect, lazy } from 'react';

const website = uniweb.activeWebsite;
const Profile = uniweb.Profile;

const getComponent = (type, name) => lazy(() => uniweb.getComponent(type, name));

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
 * @returns {Profile|false} Returns the profile object once it is in a complete (ready) state.
 * Returns false while the profile data is being fetched.
 */
const useGetProfile = (profileType, contentId) =>
    Profile.useCompleteProfile(useState, useEffect, profileType, contentId);

/**
 * Get a list of project profiles linked to a given profile and a function to update the filter
 * and sorting state of the list.
 *
 * @param {Profile} profile - The source profile.
 * @param {string} profileType - The profile type of the linked profiles to return.
 * @param {string|null} sectionName - The section name in the source profile that has the list of linked profiles.
 * @param {string|null} fieldName - The field name in `sectionName` that stores the target linked-profile reference.
 * @returns {Array} - A 2D array with the current filter state and a function to update the state. The state is an
 * Object with several properties. The `filtered` property of the state is an array of Profile objects with the
 * ordered list of profiles to render.
 */
const useLinkedProfileFilterState = function (profile, profileType, sectionName, fieldName) {
    return profile.useLinkedProfileFilterState(useState, profileType, sectionName, fieldName);
};

export {
    Profile,
    website,
    getComponent,
    useLinkedProfileFilterState,
    useGetProfile,
    useLoadProfileBody
};
