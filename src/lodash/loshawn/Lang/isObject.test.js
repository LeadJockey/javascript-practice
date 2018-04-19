const isObject = require('./isObject');

test('3 -> false', () => {
  expect(isObject('3')).toBe(false);
});

test('-3 -> false', () => {
  expect(isObject(-3)).toBe(false);
});

test('undefined -> false', () => {
  expect(isObject(undefined)).toBe(false);
});

test('{\'x\':1} -> true', () => {
  expect(isObject({'x':1})).toBe(true);
});
