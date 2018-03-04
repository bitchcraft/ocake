// @flow
import nocase from 'no-case';

/**
 * converts most cases to 'sentence case'
 * @public
 * @func toSentenceCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */
const toSentenceCase = (haystack: string): string => nocase(haystack);

export default toSentenceCase;
