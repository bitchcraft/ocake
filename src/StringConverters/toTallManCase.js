// @flow
import nocase from 'no-case';

/**
 * converts most cases to tallMANcase
 * @public
 * @func toTallManCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */
const toTallManCase = (haystack: string): string => nocase(haystack)
	.split(' ')
	.map((v, i) => (i % 2 ? v.toUpperCase() : v))
	.join('');

export default toTallManCase;
