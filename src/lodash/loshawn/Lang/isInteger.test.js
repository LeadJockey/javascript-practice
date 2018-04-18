const isInteger = require('./isInteger');

test('3 -> false', () => {
	expect(isInteger('3')).toBe(false);
});

test('-3 -> false', () => {
	expect(isInteger(-3)).toBe(true);
});

test('undefined -> false', () => {
	expect(isInteger(undefined)).toBe(false);
});
