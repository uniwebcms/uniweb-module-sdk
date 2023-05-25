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

export { stripHTMLTags };
