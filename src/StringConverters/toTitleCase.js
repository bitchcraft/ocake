// @flow
import { noCase as nocase } from 'no-case';

/**
 * converts most cases to 'Title Case'
 * @public
 * @func toTitleCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */
const toTitleCase = (haystack: string): string => nocase(haystack)
	.split(' ')
	.map(v => `${v.slice(0, 1).toUpperCase()}${v.slice(1)}`)
	.join(' ');

export default toTitleCase;
