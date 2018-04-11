const isLength = require('./isLength');

describe('loshawn isLength method test', () =>{

  test(`given 3 => expected true`, () =>{
    expect(isLength(3)).toBe(true);
  });
  test(`given '3' => expected false`, () =>{
    expect(isLength('3')).toBe(false);
  });
  test(`given Number.MIN_VALUE => expected false`, () =>{
    expect(isLength(Number.MIN_VALUE)).toBe(false);
  });

});