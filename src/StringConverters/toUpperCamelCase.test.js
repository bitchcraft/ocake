/* eslint-env jest */
import convert from './toUpperCamelCase';

describe('toUpperCamelCase()', () => {
	const io = [
		[ 'ANGRY-KEBAB2-CASE', 'AngryKebab2Case' ],
		[ 'kebab-case1', 'KebabCase1' ],
		[ 'ANGRY_SNAKE_CASE_1', 'AngrySnakeCase1' ],
		[ 'snake_case_1337', 'SnakeCase1337' ],
		[ 'lowerCamelCase101', 'LowerCamelCase101' ],
		[ 'ODDCamelCase42', 'OddCamelCase42' ],
		[ 'UpperCamel3000Case', 'UpperCamel3000Case' ],
		[ 'sentence2 case 300', 'Sentence2Case300' ],
		[ 'SHOUT CASE', 'ShoutCase' ],
		[ 'Title Case', 'TitleCase' ],
	];

	io.forEach(test => it(`'${test[0]}' should return '${test[1]}'`, () => {
		expect(convert(test[0])).toBe(test[1]);
	}));
});
