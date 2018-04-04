const isArray = require('./index');

test('[0, 1, false, 2, \'\', 3] -> true', () => {
	expect(isArray([0, 1, false, 2, '', 3])).toBe(true);
});

test('{key:\'value\'} -> false', () => {
	expect(isArray({key:'value'})).toBe(false);
});