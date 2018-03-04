// @flow
import * as StringConverters from './StringConverters';
import convertKeys from './convertKeys';

/**
 * ```js
 * import { convertKeys, StringConverters } from '@bitchcraft/ocake';
 * ```
 *
 * OCake object keys converter and string replacer funtions
 *
 * @public
 * @module OCake
 *
 * @example
 * convertKeys({ camelCasedKey: 'some value' }, StringConverter.toAngrySnakeCase);
 *
 */
export { convertKeys, StringConverters };
