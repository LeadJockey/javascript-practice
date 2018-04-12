const isArrayLikeObject = require('./isArrayLikeObject');

describe('loshawn isArrayLikeObject method test', () =>{

  test(`given [1, 2, 3] => expected true`, () =>{
    expect(isArrayLikeObject([1, 2, 3])).toBe(true);
  });
  test(`given /abc/ => expected false`, () =>{
    expect(isArrayLikeObject(/abc/)).toBe(false);
  });
});