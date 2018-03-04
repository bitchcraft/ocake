// @flow
import type { KeyConverter } from './flowTypes/KeyConverter.flow';

/**
 * Converts keys in a plain object that may contain arrays.
 * @public
 * @func convertKeys
 * @memberof module:OCake
 * @param  {Object} haystack - object with keys to convert
 * @param  {Function} converter - function that takes a string and returns a
 *     converted string
 * @return {Object} - copy of object with converted keys
 * @example
 * const a = {
 *     someKey: 1,
 *     someOtherKey: 2,
 * };
 *
 * const b = convertKeys(a, (c) => c.replace('some', 'fuckingAwesome'));
 * // will output:
 * // {
 * //     fuckingAwesomeKey: 1,
 * //     fuckingAwesomeOtherKey: 2,
 * // }
 */
export default function convertKeys(o: {}, to: KeyConverter): {} {
	if (typeof to !== 'function') throw new Error('You need to specify the target case');

	// return haystack if not iterable
	if (typeof o !== 'object') return o;

	// handle Arrays
	if (Array.isArray(o)) return o.map(v => convertKeys(v, to));

	// convert keys and dive into iterable objects
	return Object.getOwnPropertyNames(o).reduce((acc, k) => {
		acc[to(k)] = convertKeys(o[k], to);
		return acc;
	}, {});
}
