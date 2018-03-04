/* eslint-env jest */
import convert from './toTitleCase';

describe('toTitleCase()', () => {
	const io = [
		[ 'ANGRY-KEBAB2-CASE', 'Angry Kebab2 Case' ],
		[ 'kebab-case1', 'Kebab Case1' ],
		[ 'ANGRY_SNAKE_CASE_1', 'Angry Snake Case 1' ],
		[ 'snake_case_1337', 'Snake Case 1337' ],
		[ 'lowerCamelCase101', 'Lower Camel Case101' ],
		[ 'ODDCamelCase42', 'Odd Camel Case42' ],
		[ 'UpperCamel3000Case', 'Upper Camel3000 Case' ],
		[ 'sentence2 case 300', 'Sentence2 Case 300' ],
		[ 'SHOUT CASE', 'Shout Case' ],
		[ 'Title Case', 'Title Case' ],
	];

	io.forEach(test => it(`'${test[0]}' should return '${test[1]}'`, () => {
		expect(convert(test[0])).toBe(test[1]);
	}));
});
