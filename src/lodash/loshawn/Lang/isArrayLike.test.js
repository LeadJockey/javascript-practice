const isArrayLike = require('./isArrayLike');

describe('loshawn isArrayLike method test', () =>{

  test(`given [1, 2, 3] => expected true`, () =>{
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });
  test(`given document.body.children => expected true`, () =>{
    expect(isArrayLike(document.body.children)).toBe(true);
  });
  test(`given 'abc' => expected true`, () =>{
    expect(isArrayLike('abc')).toBe(true);
  });

});