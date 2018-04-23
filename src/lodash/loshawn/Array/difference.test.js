const difference = require('./difference');
const _ = require('lodash');

describe('loshawn difference method test', () =>{

  test(`given difference([2, 1], [2, 3]) => expected ${_.difference([2, 1], [2, 3])}`, () =>{
    expect(difference([2, 1], [2, 3])).toEqual(_.difference([2, 1], [2, 3]));
  });

  test(`given difference([2, 1], [2, 3],2,null,undefined,-1,true) =>
  expected ${_.difference([2, 1], [2, 3], 2, null, undefined, -1, true)}`, () =>{
    expect(difference([2, 1], [2, 3], 2, null, undefined, -1, true))
    .toEqual(_.difference([2, 1], [2, 3], 2, null, undefined, -1, true));
  });

  test(`given difference([2, 1], [2, 3],2,null,undefined,-1,true) =>
  expected ${_.difference([2, 1], [2, 3], [2, 4])}`, () =>{
    expect(difference([2, 1], [2, 3], [2, 4]))
    .toEqual(_.difference([2, 1], [2, 3], [2, 4]));
  });

  test(`given difference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9]) =>
  expected ${_.difference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9])}`, () =>{
    expect(difference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9]))
    .toEqual(_.difference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9]));
  });

});