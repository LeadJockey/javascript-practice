const difference = require('./index');

test('[2, 1], [2,3] -> [1]', () => {
	expect(difference([2, 1], [2, 3])).toEqual([1]);
});

test('[1,3,5,7,9], [1,2,3,4,5,6,7,8,9,10] -> [2,4,6,8,10]', () => {
	expect(difference([1,2,3,4,5,6,7,8,9,10],[1,3,5,7,9])).toEqual([2,4,6,8,10]);
});