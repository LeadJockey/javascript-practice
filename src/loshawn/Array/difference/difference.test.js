const tester = require('./../../test');
const difference = require('./index');

const testList = [
	{
		given:difference.apply(null, [[2, 1], [2, 3]]),
		expected:[1],
		method:'toEqual',
	},
	{
		given:difference.apply(null, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9]]),
		expected:[2, 4, 6, 8, 10],
		method:'toEqual',
	},
	{
		given:difference.bind(null, false),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:difference.bind(null, undefined),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:difference.bind(null, null),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:difference.bind(null, -1),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:difference.bind(null, '1'),
		expected:TypeError,
		method:'toThrow',
	},
];

describe('my compact method test', () =>{
	tester(testList);
});