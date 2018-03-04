/* eslint-env jest */
import { convertKeys, StringConverters } from './ocake.es5';

describe('OCake', () => {
	it('convertKeys should be defined', () => expect(typeof convertKeys).toBe('function'));

	const scKeys = Object.getOwnPropertyNames(StringConverters).filter(c => !c.startsWith('__es'));
	it('StringConverters should have 11 replacers', () => expect(scKeys.length).toBe(11));
	scKeys.forEach(rk => it(`StringConverters.${rk} should be a function`, () => expect(typeof StringConverters[rk]).toBe('function')));
});
