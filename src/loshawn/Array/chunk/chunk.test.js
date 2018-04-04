const tester = require('./../../test');
const chunk = require('./index');

const testList = [
	{
		given:chunk.apply(null, [['a', 'b', 'c', 'd'], 2]),
		expected:[['a', 'b'], ['c', 'd']],
		method:'toEqual',
	},
	{
		given:chunk.apply(null, [[1, 2, 3, 4], 2]),
		expected:[[1, 2], [3, 4]],
		method:'toEqual',
	},
	{
		given:chunk.apply(null, [[1, 2, 3, 4], 5]),
		expected:[[1, 2, 3, 4]],
		method:'toEqual',
	},
	{
		given:chunk.apply(null, [[1, 2, 3, 4], 4]),
		expected:[[1, 2, 3, 4]],
		method:'toEqual',
	},
	{
		given:chunk.apply(null, [[1, 2, 3, 4], 1]),
		expected:[[1], [2], [3], [4]],
		method:'toEqual',
	},
	{
		given:chunk.bind(null, false),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:chunk.bind(null, '1234', 2),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:chunk.bind(null, [1, 2, 3, 4], '2'),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:chunk.bind(null, undefined, undefined),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:chunk.bind(null, null, null),
		expected:TypeError,
		method:'toThrow',
	},
];

describe('my chunk method test', () =>{
	tester(testList);
});

