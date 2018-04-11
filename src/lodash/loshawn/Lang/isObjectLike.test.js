const isObjectLike = require('./isObjectLike');

describe('loshawn isObjectLike method test', () =>{

  test(`given {} => expected true`, () =>{
    expect(isObjectLike({})).toBe(true);
  });
  test(`given [1, 2, 3] => expected true`, () =>{
    expect(isObjectLike([1, 2, 3])).toBe(true);
  });
  test(`given null => expected false`, () =>{
    expect(isObjectLike(null)).toBe(false);
  });
  test(`given undefined => expected false`, () =>{
    expect(isObjectLike(undefined)).toBe(false);
  });
  test(`given true => expected false`, () =>{
    expect(isObjectLike(true)).toBe(false);
  });
  test(`given true => expected false`, () =>{
    expect(isObjectLike(false)).toBe(false);
  });
  test(`given 0 => expected false`, () =>{
    expect(isObjectLike(0)).toBe(false);
  });
  test(`given -1 => expected false`, () =>{
    expect(isObjectLike(-1)).toBe(false);
  });
  test(`given 1 => expected false`, () =>{
    expect(isObjectLike(1)).toBe(false);
  });
  test(`given 'text' => expected false`, () =>{
    expect(isObjectLike('text')).toBe(false);
  });
  test(`given '' => expected false`, () =>{
    expect(isObjectLike('')).toBe(false);
  });

});