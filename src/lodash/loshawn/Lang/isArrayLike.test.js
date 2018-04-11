const isArrayLike = require('./isArrayLike');

describe('loshawn isArrayLike method test', () =>{

  test(`given function(){} => expected true`, () =>{
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });
  test(`given /abc/ => expected false`, () =>{
    expect(isArrayLike(document.body.children)).toBe(true);
  });
  test(`given /abc/ => expected false`, () =>{
    expect(isArrayLike('abc')).toBe(true);
  });

});