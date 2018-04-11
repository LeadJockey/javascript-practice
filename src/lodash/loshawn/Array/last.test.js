const last = require('./last');

describe('loshawn isArrayLike method test', () =>{

  test(`given [1, 2, 3] => expected 3`, () =>{
    expect(last([1, 2, 3])).toBe(3);
  });

});