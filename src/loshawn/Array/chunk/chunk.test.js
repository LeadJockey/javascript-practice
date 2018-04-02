const chunk = require('./index');

test('[1, 2, 3, 4] -> [[1,2],[3,4]]', () => {
	expect(chunk([1, 2, 3, 4], 2)).toEqual([[1,2],[3,4]]);
});