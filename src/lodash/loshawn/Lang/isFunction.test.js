const isFunction = require('./isFunction');

describe('loshawn isLength method test', () =>{

  test(`given 3 => expected true`, () =>{
    expect(isFunction(function(){})).toBe(true);
  });
  test(`given /abc/ => expected false`, () =>{
    expect(isFunction(/abc/)).toBe(false);
  });

});