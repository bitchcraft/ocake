/* eslint-env jest */
import { convertKeys, StringConverters } from './OCake';

describe('OCake', () => {
	const io = [
		{
			candidate: {
				camelCased: 1,
				snake_cased: 2,
				'kebab-cased': 3,
			},
			expected: {
				camelCased: 1,
				snakeCased: 2,
				kebabCased: 3,
			},
			replacer: StringConverters.toLowerCamelCase,
		},
		{
			candidate: {
				camelCased: 1,
				snake_cased: 2,
				'kebab-cased': 3,
			},
			expected: {
				'camel-cased': 1,
				'snake-cased': 2,
				'kebab-cased': 3,
			},
			replacer: StringConverters.toKebabCase,
		},
	];

	io.forEach(test => it('', () => expect(convertKeys(test.candidate, test.replacer)).toEqual(test.expected)));
});
