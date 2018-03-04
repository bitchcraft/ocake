// @flow
import nocase from 'no-case';

/**
 * converts most cases to UpperCamelCase
 * @public
 * @func toUpperCamelCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */
const toUpperCamelCase = (haystack: string): string => nocase(haystack)
	.split(' ')
	.map((v, i) => `${v.slice(0, 1).toUpperCase()}${v.slice(1)}`)
	.join('');

export default toUpperCamelCase;
