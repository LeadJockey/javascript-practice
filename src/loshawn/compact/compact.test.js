const compact = require('./index');

test('[1, 2, 3, 4] -> [[1,2],[3,4]]', () => {
	expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
});