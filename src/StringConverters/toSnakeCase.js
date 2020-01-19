// @flow
import { noCase as nocase } from 'no-case';

/**
 * converts most cases to snake_case
 * @public
 * @func toSnakeCase
 * @memberof module:StringConverters
 * @param {string} haystack
 * @return {string}
 * @requires npm:no-case
 */

const noCaseOptions = {
    delimiter: "_"
};

const toSnakeCase = (haystack: string): string => nocase(haystack, noCaseOptions);

export default toSnakeCase;
