/**
 * Render a generic container with a given HTML string inserted into it.
 * @module SafeHtml
 */

import React from 'react';
import DOMPurify from 'dompurify';

/**
 * In React, dangerouslySetInnerHTML is provided to directly insert HTML into
 * a React element. As the name implies, it's not generally recommended because
 * it can expose your application to cross-site scripting (XSS) attacks if misused.
 * If you're fully aware of the danger and confident that the HTML to use is safe,
 * and you still need to inject HTML directly into a React component,
 * this wrapper component is a simple way to use dangerouslySetInnerHTML.
 *
 * As an extra precaution, the given HTML is sanitized with DOMPurify to ensure
 * it's safe to inject into the page.
 *
 * @example
 * <SafeHtml value="<strong>Hello world!</strong>" as="span" className="my-class" />
 *
 * @component SafeHtml
 * @prop {string?} value - The HTML code to insert.
 * @prop {string} as - The element type.
 * @returns {function|null} A react component if value is a string and null otherwise.
 */
export default function SafeHtml({ value, as: Component = 'div', ...rest }) {
    if (value === null || value === undefined) return null;

    if (Array.isArray(value)) value = value.map((v) => `<p>${v}</p>`).join('');

    return <Component dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }} {...rest} />;
}
