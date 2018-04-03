const isFunction = require('./index');

test('Math.floor -> true', () => {
	expect(isFunction(Math.floor)).toBe(true);
});

test('{} -> false', () => {
	expect(isFunction({})).toBe(false);
});