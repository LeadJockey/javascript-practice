const tester = require('./../../test');
const differenceBy = require('./index');

const testList = [
	{
		given:'[2.1, 1.2], [2.3, 3.4], Math.floor',
		logic:differenceBy.apply(null, [[2.1, 1.2], [2.3, 3.4], Math.floor]),
		expected:[1.2],
		method:'toEqual',
	},
	{
		given:'[{ \'x\': 2 }, { \'x\': 1 }], [{ \'x\': 1 }], \'x\'',
		logic:differenceBy.apply(null, [[{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x']),
		expected:[{ 'x': 2 }],
		method:'toEqual',
	},
	// {
	// 	given:difference.bind(null, undefined),
	// 	expected:TypeError,
	// 	method:'toThrow',
	// },
	// {
	// 	given:difference.bind(null, null),
	// 	expected:TypeError,
	// 	method:'toThrow',
	// },
	// {
	// 	given:difference.bind(null, -1),
	// 	expected:TypeError,
	// 	method:'toThrow',
	// },
	// {
	// 	given:difference.bind(null, '1'),
	// 	expected:TypeError,
	// 	method:'toThrow',
	// },
];

describe('my compact method test', () =>{
	tester(testList);
});