/**
 * Imports the 'clsx' method from the 'clsx' npm library and exports it as 'cn'.
 * @module cn
 */

import { clsx } from 'clsx';

/**
 * The 'cn' function is an alias for the 'clsx' method.
 * 
 * @example
 * import { cn } from '@uniwebcms/module-sdk';
 *
 * const className = cn('foo', 'bar', { active: isActive });
 * // Result: 'foo bar active' or 'foo bar'
 * 
 * @function cn
 * @memberof module:clsx
 * @param {...*} args - Arguments to be passed to the 'clsx' method.
 * @returns {string} - The result of the 'clsx' method call.
 *
 * @see {@link https://www.npmjs.com/package/clsx?activeTab=readme}
 * For more information, see the library's readme file.

 */
export { clsx as cn };
