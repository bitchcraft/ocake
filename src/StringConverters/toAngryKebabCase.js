// @flow
import nocase from 'no-case';

/**
 * converts most cases to ANGRY-KEBAB-CASE
 * @public
 * @func toAngryKebabCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */
const toAngryKebabCase = (haystack: string): string => nocase(haystack, null, '-').toUpperCase();

export default toAngryKebabCase;
