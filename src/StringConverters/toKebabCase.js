// @flow
import nocase from 'no-case';

/**
 * converts most cases to kebab-case
 * @public
 * @func toKebabCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */
const toKebabCase = (haystack: string): string => nocase(haystack, null, '-');

export default toKebabCase;
