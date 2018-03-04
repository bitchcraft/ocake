/* eslint-env jest */
import convert from './toLowerCamelCase';

describe('toLowerCamelCase()', () => {
	const io = [
		[ 'ANGRY-KEBAB2-CASE', 'angryKebab2Case' ],
		[ 'kebab-case1', 'kebabCase1' ],
		[ 'ANGRY_SNAKE_CASE_1', 'angrySnakeCase1' ],
		[ 'snake_case_1337', 'snakeCase1337' ],
		[ 'lowerCamelCase101', 'lowerCamelCase101' ],
		[ 'ODDCamelCase42', 'oddCamelCase42' ],
		[ 'UpperCamel3000Case', 'upperCamel3000Case' ],
		[ 'sentence2 case 300', 'sentence2Case300' ],
		[ 'SHOUT CASE', 'shoutCase' ],
		[ 'Title Case', 'titleCase' ],
	];

	io.forEach(test => it(`'${test[0]}' should return '${test[1]}'`, () => {
		expect(convert(test[0])).toBe(test[1]);
	}));
});
