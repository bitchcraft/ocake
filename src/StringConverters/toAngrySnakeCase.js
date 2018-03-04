// @flow
import nocase from 'no-case';

/**
 * converts most cases to ANGRY_SNAKE_CASE
 * @public
 * @func toAngrySnakeCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */
const toAngrySnakeCase = (haystack: string): string => nocase(haystack, null, '_').toUpperCase();

export default toAngrySnakeCase;
