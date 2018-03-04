/* eslint-env jest */
import convertKeys from './convertKeys';

const formatObject = o => JSON.stringify(o).split('\n').map(v => `\t\t${v}`).join('\n');

describe('convertKeys()', () => {
	const io = [
		[
			{
				needle: 1,
				'need-needle': 'needle',
			},
			{
				replaced: 1,
				'need-replaced': 'needle',
			},
		],
		[
			[
				{
					needle: 1,
					'need-needle': 'needle',
				},
				{
					needle2: 1,
					theNeedleCamel: 'needle',
				},
			],
			[
				{
					replaced: 1,
					'need-replaced': 'needle',
				},
				{
					replaced2: 1,
					thereplacedcamel: 'needle',
				},
			],
		],
		[
			{
				needle: [ 1, 2, 3, 4, 5 ],
				needles: [
					{ needle: 1 },
					2,
					{ needle: 2 },
				],
			},
			{
				replaced: [ 1, 2, 3, 4, 5 ],
				replaceds: [
					{ replaced: 1 },
					2,
					{ replaced: 2 },
				],
			},
		],
	];

	const replacer = v => v.toLowerCase().replace('needle', 'replaced');

	io.forEach(test => it(`should convert the keys in\n${formatObject(test[0])}\n\tand return\n${formatObject(test[1])}\n`, () => {
		expect(convertKeys(test[0], replacer)).toEqual(test[1]);
	}));
});
