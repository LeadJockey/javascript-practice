const tester = require('./../../test');
const compact = require('./index');

const testList = [
	{
		given:compact.apply(null, [[0, 1, false, 2, '', 3]]),
		expected:[1, 2, 3],
		method:'toEqual',
	},
	{
		given:compact.bind(null, false),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:compact.bind(null, undefined),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:compact.bind(null, null),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:compact.bind(null, -1),
		expected:TypeError,
		method:'toThrow',
	},
	{
		given:compact.bind(null, '1'),
		expected:TypeError,
		method:'toThrow',
	},
];

describe('my compact method test', () =>{
	tester(testList);
});

