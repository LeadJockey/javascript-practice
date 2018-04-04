const tester = require('./../../test');
const concat = require('./index');

const testList = [
	{
		given:concat.apply(null, [[1], [2, [3], [[4]]]]),
		expected:[1, 2, 3, [4]],
		method:'toEqual',
	},
	{
		given:concat.apply(null, [[1], [2, [[3, 4, 6], 6, 7], [[4]]]]),
		expected:[1, 2, [3, 4, 6], 6, 7, [4]],
		method:'toEqual',
	},
	{
		given:concat.bind(null, false),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:concat.bind(null, undefined),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:concat.bind(null, null),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:concat.bind(null, -1),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:concat.bind(null, '1'),
		expected:TypeError,
		method:'toThrow',
	},
];

describe('my compact method test', () =>{
	tester(testList);
});