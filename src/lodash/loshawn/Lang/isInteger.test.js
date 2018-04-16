const isInteger = require('./isInteger');

describe('loshawn isInteger method test', () =>{

  test(`given 3 => expected true`, () =>{
    expect(isInteger(3)).toBe(true);
  });
  test(`given '3' => expected false`, () =>{
    expect(isInteger('3')).toBe(false);
  });

});