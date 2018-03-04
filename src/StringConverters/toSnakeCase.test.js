/* eslint-env jest */
import convert from './toSnakeCase';

describe('toSnakeCase()', () => {
	const io = [
		[ 'ANGRY-KEBAB2-CASE', 'angry_kebab2_case' ],
		[ 'kebab-case1', 'kebab_case1' ],
		[ 'ANGRY_SNAKE_CASE_1', 'angry_snake_case_1' ],
		[ 'snake_case_1337', 'snake_case_1337' ],
		[ 'lowerCamelCase101', 'lower_camel_case101' ],
		[ 'ODDCamelCase42', 'odd_camel_case42' ],
		[ 'UpperCamel3000Case', 'upper_camel3000_case' ],
		[ 'sentence2 case 300', 'sentence2_case_300' ],
		[ 'SHOUT CASE', 'shout_case' ],
		[ 'Title Case', 'title_case' ],
	];

	io.forEach(test => it(`'${test[0]}' should return '${test[1]}'`, () => {
		expect(convert(test[0])).toBe(test[1]);
	}));
});
