// @flow
import nocase from 'no-case';

/**
 * converts most cases to lowerCamelCase
 * @public
 * @func toLowerCamelCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */
const toLowerCamelCase = (haystack: string): string => nocase(haystack)
	.split(' ')
	.map((v, i) => (!i ? v : `${v.slice(0, 1).toUpperCase()}${v.slice(1)}`))
	.join('');

export default toLowerCamelCase;
