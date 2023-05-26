import { useState, useEffect } from 'react';

/**
 * function that uses regular expressions to remove HTML tags from an HTML string and returns a plain string
 * @param {string} htmlString
 * @returns
 */
function stripHTMLTags(htmlString) {
    if (!htmlString || typeof htmlString !== 'string') return '';

    // Remove HTML tags using regular expression
    const plainString = htmlString.replace(/<[^>]*>/g, '');

    // Decode HTML entities
    const decodedString = new DOMParser().parseFromString(plainString, 'text/html').body.textContent;

    return decodedString;
}

/**
 * Function that return filtered cards base on the given filter information and filters value
 * @param {Array} cards
 * @param {Object} filters
 * @param {Object} filterInfo
 * @returns
 */
function getFilteredProfileCards(cards, filters, filterInfo) {
    const { searchText = '', ...otherFilters } = filters;

    const results = cards
        .filter((card) => {
            let valid = true;
            if (searchText) {
                valid = card.searchText.toLowerCase().includes(searchText.toLowerCase());
            }

            Object.entries(otherFilters).forEach(([key, value]) => {
                if (value) {
                    const validContentIds = filterInfo[key]?.[value] || [];

                    valid = valid && validContentIds.includes(card.contentId);
                }
            });

            return valid;
        })
        .filter(Boolean);

    return results;
}

function getFilteredProfiles(profiles, filters, filterInfo) {
    const { searchText = '', ...otherFilters } = filters;

    const results = profiles.filter((profile) => {
        let valid = true;

        const cardData = profile.getCardData();

        if (searchText) {
            valid = cardData.searchText.toLowerCase().includes(searchText.toLowerCase());
        }

        Object.entries(otherFilters).forEach(([key, value]) => {
            if (value) {
                const validContentIds = filterInfo[key]?.[value] || [];

                valid = valid && validContentIds.includes(profile.contentId);
            }
        });

        return valid;
    });

    return results;
}

const completeProfile = (profile) => profile.makeComplete(useState, useEffect);

export { stripHTMLTags, getFilteredProfileCards, getFilteredProfiles, completeProfile };
