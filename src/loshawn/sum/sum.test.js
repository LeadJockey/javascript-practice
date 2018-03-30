const sum = require('./index');

test('1,2 -> 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('3,-4 -> -1', () => {
	expect(sum(3, -4)).toBe(-1);
});

test('3,-4 -> undefined', () => {
	expect(sum('3', -4)).toBe(undefined);
});

test('false,-4 -> undefined', () => {
	expect(sum(false, -4)).toBe(undefined);
});