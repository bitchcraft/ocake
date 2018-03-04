/* eslint-env jest */
import convert from './toAngrySnakeCase';

describe('toAngrySnakeCase()', () => {
	const io = [
		[ 'ANGRY-KEBAB2-CASE', 'ANGRY_KEBAB2_CASE' ],
		[ 'kebab-case1', 'KEBAB_CASE1' ],
		[ 'ANGRY_SNAKE_CASE_1', 'ANGRY_SNAKE_CASE_1' ],
		[ 'snake_case_1337', 'SNAKE_CASE_1337' ],
		[ 'lowerCamelCase101', 'LOWER_CAMEL_CASE101' ],
		[ 'ODDCamelCase42', 'ODD_CAMEL_CASE42' ],
		[ 'UpperCamel3000Case', 'UPPER_CAMEL3000_CASE' ],
		[ 'sentence2 case 300', 'SENTENCE2_CASE_300' ],
		[ 'SHOUT CASE', 'SHOUT_CASE' ],
		[ 'Title Case', 'TITLE_CASE' ],
	];

	io.forEach(test => it(`'${test[0]}' should return '${test[1]}'`, () => {
		expect(convert(test[0])).toBe(test[1]);
	}));
});
