// @flow
import { noCase as nocase } from 'no-case';

/**
 * converts most cases to ANGRY-KEBAB-CASE
 * @public
 * @func toAngryKebabCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */

const noCaseOptions = {
    delimiter: "-"
};

const toAngryKebabCase = (haystack: string): string => nocase(haystack, noCaseOptions).toUpperCase();

export default toAngryKebabCase;
