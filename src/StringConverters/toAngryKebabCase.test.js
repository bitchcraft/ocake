/* eslint-env jest */
import convert from './toAngryKebabCase';

describe('toAngryKebabCase()', () => {
	const io = [
		[ 'ANGRY-KEBAB2-CASE', 'ANGRY-KEBAB2-CASE' ],
		[ 'kebab-case1', 'KEBAB-CASE1' ],
		[ 'ANGRY_SNAKE_CASE_1', 'ANGRY-SNAKE-CASE-1' ],
		[ 'snake_case_1337', 'SNAKE-CASE-1337' ],
		[ 'lowerCamelCase101', 'LOWER-CAMEL-CASE101' ],
		[ 'ODDCamelCase42', 'ODD-CAMEL-CASE42' ],
		[ 'UpperCamel3000Case', 'UPPER-CAMEL3000-CASE' ],
		[ 'sentence2 case 300', 'SENTENCE2-CASE-300' ],
		[ 'SHOUT CASE', 'SHOUT-CASE' ],
		[ 'Title Case', 'TITLE-CASE' ],
	];

	io.forEach(test => it(`'${test[0]}' should return '${test[1]}'`, () => {
		expect(convert(test[0])).toBe(test[1]);
	}));
});
