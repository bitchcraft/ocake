/* eslint-env jest */
import convert from './toTallManCase';

describe('toTallManCase()', () => {
	const io = [
		[ 'ANGRY-KEBAB2-CASE', 'angryKEBAB2case' ],
		[ 'kebab-case1', 'kebabCASE1' ],
		[ 'ANGRY_SNAKE_CASE_1up', 'angrySNAKEcase1UP' ],
		[ 'snake_case_1337', 'snakeCASE1337' ],
		[ 'lowerCamelCase101', 'lowerCAMELcase101' ],
		[ 'ODDCamelCase42', 'oddCAMELcase42' ],
		[ 'UpperCamel3000Case', 'upperCAMEL3000case' ],
		[ 'sentence2 case 300', 'sentence2CASE300' ],
		[ 'SHOUT CASE', 'shoutCASE' ],
		[ 'Title Case', 'titleCASE' ],
	];

	io.forEach(test => it(`'${test[0]}' should return '${test[1]}'`, () => {
		expect(convert(test[0])).toBe(test[1]);
	}));
});
