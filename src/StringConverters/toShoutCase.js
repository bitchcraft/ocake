// @flow
import nocase from 'no-case';

/**
 * converts most cases to 'SHOUT CASE'
 * @public
 * @func toShoutCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */
const toShoutCase = (haystack: string): string => nocase(haystack).toUpperCase();

export default toShoutCase;
