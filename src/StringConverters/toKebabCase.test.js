/* eslint-env jest */
import convert from './toKebabCase';

describe('toKebabCase()', () => {
	const io = [
		[ 'ANGRY-KEBAB2-CASE', 'angry-kebab2-case' ],
		[ 'kebab-case1', 'kebab-case1' ],
		[ 'ANGRY_SNAKE_CASE_1', 'angry-snake-case-1' ],
		[ 'snake_case_1337', 'snake-case-1337' ],
		[ 'lowerCamelCase101', 'lower-camel-case101' ],
		[ 'ODDCamelCase42', 'odd-camel-case42' ],
		[ 'UpperCamel3000Case', 'upper-camel3000-case' ],
		[ 'sentence2 case 300', 'sentence2-case-300' ],
		[ 'SHOUT CASE', 'shout-case' ],
		[ 'Title Case', 'title-case' ],
	];

	io.forEach(test => it(`'${test[0]}' should return '${test[1]}'`, () => {
		expect(convert(test[0])).toBe(test[1]);
	}));
});
