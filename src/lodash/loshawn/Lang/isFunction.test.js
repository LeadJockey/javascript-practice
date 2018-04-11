const isFunction = require('./isFunction');

describe('loshawn isFunction method test', () =>{

  test(`given function(){} => expected true`, () =>{
    expect(isFunction(function(){})).toBe(true);
  });
  test(`given /abc/ => expected false`, () =>{
    expect(isFunction(/abc/)).toBe(false);
  });

});